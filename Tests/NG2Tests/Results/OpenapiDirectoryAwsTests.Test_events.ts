import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActivateEventSourceRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;
	}
	export interface ActivateEventSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateActivateEventSourceRequestFormGroup() {
		return new FormGroup<ActivateEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('aws\.partner(/[\.\-_A-Za-z0-9]+){2,}')]),
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

	export interface ConcurrentModificationException {
	}
	export interface ConcurrentModificationExceptionFormProperties {
	}
	export function CreateConcurrentModificationExceptionFormGroup() {
		return new FormGroup<ConcurrentModificationExceptionFormProperties>({
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

	export interface InternalException {
	}
	export interface InternalExceptionFormProperties {
	}
	export function CreateInternalExceptionFormGroup() {
		return new FormGroup<InternalExceptionFormProperties>({
		});

	}

	export interface CreateEventBusResponse {
		EventBusArn?: string | null;
	}
	export interface CreateEventBusResponseFormProperties {
		EventBusArn: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventBusResponseFormGroup() {
		return new FormGroup<CreateEventBusResponseFormProperties>({
			EventBusArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEventBusRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventSourceName?: string | null;
		Tags?: Array<Tag>;
	}
	export interface CreateEventBusRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventSourceName: FormControl<string | null | undefined>,
	}
	export function CreateCreateEventBusRequestFormGroup() {
		return new FormGroup<CreateEventBusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
			EventSourceName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('aws\.partner(/[\.\-_A-Za-z0-9]+){2,}')]),
		});

	}


	/** A key-value pair associated with an AWS resource. In EventBridge, rules and event buses support tagging. */
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
		 * Min length: 0
		 */
		Value: string;
	}

	/** A key-value pair associated with an AWS resource. In EventBridge, rules and event buses support tagging. */
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
		 * Min length: 0
		 */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1)]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(0)]),
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

	export interface LimitExceededException {
	}
	export interface LimitExceededExceptionFormProperties {
	}
	export function CreateLimitExceededExceptionFormGroup() {
		return new FormGroup<LimitExceededExceptionFormProperties>({
		});

	}

	export interface CreatePartnerEventSourceResponse {
		EventSourceArn?: string | null;
	}
	export interface CreatePartnerEventSourceResponseFormProperties {
		EventSourceArn: FormControl<string | null | undefined>,
	}
	export function CreateCreatePartnerEventSourceResponseFormGroup() {
		return new FormGroup<CreatePartnerEventSourceResponseFormProperties>({
			EventSourceArn: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreatePartnerEventSourceRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		Account: string;
	}
	export interface CreatePartnerEventSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateCreatePartnerEventSourceRequestFormGroup() {
		return new FormGroup<CreatePartnerEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('aws\.partner(/[\.\-_A-Za-z0-9]+){2,}')]),
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(12), Validators.minLength(12), Validators.pattern('\d{12}')]),
		});

	}

	export interface DeactivateEventSourceRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeactivateEventSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeactivateEventSourceRequestFormGroup() {
		return new FormGroup<DeactivateEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('aws\.partner(/[\.\-_A-Za-z0-9]+){2,}')]),
		});

	}

	export interface DeleteEventBusRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DeleteEventBusRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDeleteEventBusRequestFormGroup() {
		return new FormGroup<DeleteEventBusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
		});

	}

	export interface DeletePartnerEventSourceRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		Account: string;
	}
	export interface DeletePartnerEventSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 12
		 */
		Account: FormControl<string | null | undefined>,
	}
	export function CreateDeletePartnerEventSourceRequestFormGroup() {
		return new FormGroup<DeletePartnerEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('aws\.partner(/[\.\-_A-Za-z0-9]+){2,}')]),
			Account: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(12), Validators.minLength(12), Validators.pattern('\d{12}')]),
		});

	}

	export interface DeleteRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;
		Force?: boolean | null;
	}
	export interface DeleteRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteRuleRequestFormGroup() {
		return new FormGroup<DeleteRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
			Force: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ManagedRuleException {
	}
	export interface ManagedRuleExceptionFormProperties {
	}
	export function CreateManagedRuleExceptionFormGroup() {
		return new FormGroup<ManagedRuleExceptionFormProperties>({
		});

	}

	export interface DescribeEventBusResponse {
		Name?: string | null;
		Arn?: string | null;
		Policy?: string | null;
	}
	export interface DescribeEventBusResponseFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventBusResponseFormGroup() {
		return new FormGroup<DescribeEventBusResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeEventBusRequest {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name?: string | null;
	}
	export interface DescribeEventBusRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventBusRequestFormGroup() {
		return new FormGroup<DescribeEventBusRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
		});

	}

	export interface DescribeEventSourceResponse {
		Arn?: string | null;
		CreatedBy?: string | null;
		CreationTime?: Date | null;
		ExpirationTime?: Date | null;
		Name?: string | null;
		State?: DescribeEventSourceResponseState | null;
	}
	export interface DescribeEventSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<DescribeEventSourceResponseState | null | undefined>,
	}
	export function CreateDescribeEventSourceResponseFormGroup() {
		return new FormGroup<DescribeEventSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DescribeEventSourceResponseState | null | undefined>(undefined),
		});

	}

	export enum DescribeEventSourceResponseState { PENDING = 0, ACTIVE = 1, DELETED = 2 }

	export interface DescribeEventSourceRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DescribeEventSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribeEventSourceRequestFormGroup() {
		return new FormGroup<DescribeEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('aws\.partner(/[\.\-_A-Za-z0-9]+){2,}')]),
		});

	}

	export interface DescribePartnerEventSourceResponse {
		Arn?: string | null;
		Name?: string | null;
	}
	export interface DescribePartnerEventSourceResponseFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribePartnerEventSourceResponseFormGroup() {
		return new FormGroup<DescribePartnerEventSourceResponseFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribePartnerEventSourceRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: string;
	}
	export interface DescribePartnerEventSourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,
	}
	export function CreateDescribePartnerEventSourceRequestFormGroup() {
		return new FormGroup<DescribePartnerEventSourceRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('aws\.partner(/[\.\-_A-Za-z0-9]+){2,}')]),
		});

	}

	export interface DescribeRuleResponse {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		Arn?: string | null;
		EventPattern?: string | null;

		/** Max length: 256 */
		ScheduleExpression?: string | null;
		State?: DescribeRuleResponseState | null;

		/** Max length: 512 */
		Description?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ManagedBy?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;
	}
	export interface DescribeRuleResponseFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		Arn: FormControl<string | null | undefined>,
		EventPattern: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ScheduleExpression: FormControl<string | null | undefined>,
		State: FormControl<DescribeRuleResponseState | null | undefined>,

		/** Max length: 512 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ManagedBy: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRuleResponseFormGroup() {
		return new FormGroup<DescribeRuleResponseFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
			EventPattern: new FormControl<string | null | undefined>(undefined),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			State: new FormControl<DescribeRuleResponseState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
			ManagedBy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
		});

	}

	export enum DescribeRuleResponseState { ENABLED = 0, DISABLED = 1 }

	export interface DescribeRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;
	}
	export interface DescribeRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateDescribeRuleRequestFormGroup() {
		return new FormGroup<DescribeRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
		});

	}

	export interface DisableRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;
	}
	export interface DisableRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateDisableRuleRequestFormGroup() {
		return new FormGroup<DisableRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
		});

	}

	export interface EnableRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;
	}
	export interface EnableRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateEnableRuleRequestFormGroup() {
		return new FormGroup<EnableRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
		});

	}

	export interface ListEventBusesResponse {
		EventBuses?: Array<EventBus>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListEventBusesResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventBusesResponseFormGroup() {
		return new FormGroup<ListEventBusesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** An event bus receives events from a source and routes them to rules associated with that event bus. Your account's default event bus receives rules from AWS services. A custom event bus can receive rules from AWS services as well as your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications. */
	export interface EventBus {
		Name?: string | null;
		Arn?: string | null;
		Policy?: string | null;
	}

	/** An event bus receives events from a source and routes them to rules associated with that event bus. Your account's default event bus receives rules from AWS services. A custom event bus can receive rules from AWS services as well as your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications. */
	export interface EventBusFormProperties {
		Name: FormControl<string | null | undefined>,
		Arn: FormControl<string | null | undefined>,
		Policy: FormControl<string | null | undefined>,
	}
	export function CreateEventBusFormGroup() {
		return new FormGroup<EventBusFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined),
			Arn: new FormControl<string | null | undefined>(undefined),
			Policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEventBusesRequest {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		NamePrefix?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListEventBusesRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		NamePrefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListEventBusesRequestFormGroup() {
		return new FormGroup<ListEventBusesRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListEventSourcesResponse {
		EventSources?: Array<EventSource>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListEventSourcesResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListEventSourcesResponseFormGroup() {
		return new FormGroup<ListEventSourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that AWS account can receive events from the partner's applications or services. */
	export interface EventSource {
		Arn?: string | null;
		CreatedBy?: string | null;
		CreationTime?: Date | null;
		ExpirationTime?: Date | null;
		Name?: string | null;
		State?: DescribeEventSourceResponseState | null;
	}

	/** A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that AWS account can receive events from the partner's applications or services. */
	export interface EventSourceFormProperties {
		Arn: FormControl<string | null | undefined>,
		CreatedBy: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
		Name: FormControl<string | null | undefined>,
		State: FormControl<DescribeEventSourceResponseState | null | undefined>,
	}
	export function CreateEventSourceFormGroup() {
		return new FormGroup<EventSourceFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			CreatedBy: new FormControl<string | null | undefined>(undefined),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DescribeEventSourceResponseState | null | undefined>(undefined),
		});

	}

	export interface ListEventSourcesRequest {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		NamePrefix?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListEventSourcesRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		NamePrefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListEventSourcesRequestFormGroup() {
		return new FormGroup<ListEventSourcesRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListPartnerEventSourceAccountsResponse {
		PartnerEventSourceAccounts?: Array<PartnerEventSourceAccount>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListPartnerEventSourceAccountsResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPartnerEventSourceAccountsResponseFormGroup() {
		return new FormGroup<ListPartnerEventSourceAccountsResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** The AWS account that a partner event source has been offered to. */
	export interface PartnerEventSourceAccount {

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		Account?: string | null;
		CreationTime?: Date | null;
		ExpirationTime?: Date | null;
		State?: DescribeEventSourceResponseState | null;
	}

	/** The AWS account that a partner event source has been offered to. */
	export interface PartnerEventSourceAccountFormProperties {

		/**
		 * Max length: 12
		 * Min length: 12
		 */
		Account: FormControl<string | null | undefined>,
		CreationTime: FormControl<Date | null | undefined>,
		ExpirationTime: FormControl<Date | null | undefined>,
		State: FormControl<DescribeEventSourceResponseState | null | undefined>,
	}
	export function CreatePartnerEventSourceAccountFormGroup() {
		return new FormGroup<PartnerEventSourceAccountFormProperties>({
			Account: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(12), Validators.minLength(12), Validators.pattern('\d{12}')]),
			CreationTime: new FormControl<Date | null | undefined>(undefined),
			ExpirationTime: new FormControl<Date | null | undefined>(undefined),
			State: new FormControl<DescribeEventSourceResponseState | null | undefined>(undefined),
		});

	}

	export interface ListPartnerEventSourceAccountsRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		EventSourceName: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListPartnerEventSourceAccountsRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		EventSourceName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListPartnerEventSourceAccountsRequestFormGroup() {
		return new FormGroup<ListPartnerEventSourceAccountsRequestFormProperties>({
			EventSourceName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('aws\.partner(/[\.\-_A-Za-z0-9]+){2,}')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListPartnerEventSourcesResponse {
		PartnerEventSources?: Array<PartnerEventSource>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListPartnerEventSourcesResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListPartnerEventSourcesResponseFormGroup() {
		return new FormGroup<ListPartnerEventSourcesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that AWS account can receive events from the partner's applications or services. */
	export interface PartnerEventSource {
		Arn?: string | null;
		Name?: string | null;
	}

	/** A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that AWS account can receive events from the partner's applications or services. */
	export interface PartnerEventSourceFormProperties {
		Arn: FormControl<string | null | undefined>,
		Name: FormControl<string | null | undefined>,
	}
	export function CreatePartnerEventSourceFormGroup() {
		return new FormGroup<PartnerEventSourceFormProperties>({
			Arn: new FormControl<string | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListPartnerEventSourcesRequest {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		NamePrefix: string;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListPartnerEventSourcesRequestFormProperties {

		/**
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		NamePrefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListPartnerEventSourcesRequestFormGroup() {
		return new FormGroup<ListPartnerEventSourcesRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256), Validators.minLength(1), Validators.pattern('aws\.partner/[\.\-_A-Za-z0-9]+/[/\.\-_A-Za-z0-9]*')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListRuleNamesByTargetResponse {
		RuleNames?: Array<string>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListRuleNamesByTargetResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRuleNamesByTargetResponseFormGroup() {
		return new FormGroup<ListRuleNamesByTargetResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}

	export interface ListRuleNamesByTargetRequest {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		TargetArn: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListRuleNamesByTargetRequestFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		TargetArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRuleNamesByTargetRequestFormGroup() {
		return new FormGroup<ListRuleNamesByTargetRequestFormProperties>({
			TargetArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(1)]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface ListRulesResponse {
		Rules?: Array<Rule>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListRulesResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListRulesResponseFormGroup() {
		return new FormGroup<ListRulesResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** Contains information about a rule in Amazon EventBridge. */
	export interface Rule {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		Arn?: string | null;
		EventPattern?: string | null;
		State?: DescribeRuleResponseState | null;

		/** Max length: 512 */
		Description?: string | null;

		/** Max length: 256 */
		ScheduleExpression?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn?: string | null;

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ManagedBy?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;
	}

	/** Contains information about a rule in Amazon EventBridge. */
	export interface RuleFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		Arn: FormControl<string | null | undefined>,
		EventPattern: FormControl<string | null | undefined>,
		State: FormControl<DescribeRuleResponseState | null | undefined>,

		/** Max length: 512 */
		Description: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ScheduleExpression: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 128
		 * Min length: 1
		 */
		ManagedBy: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
			EventPattern: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DescribeRuleResponseState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
			ManagedBy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(128), Validators.minLength(1)]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
		});

	}

	export interface ListRulesRequest {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		NamePrefix?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListRulesRequestFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		NamePrefix: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListRulesRequestFormGroup() {
		return new FormGroup<ListRulesRequestFormProperties>({
			NamePrefix: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
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

	export interface ListTagsForResourceRequest {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ResourceARN: string;
	}
	export interface ListTagsForResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateListTagsForResourceRequestFormGroup() {
		return new FormGroup<ListTagsForResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}

	export interface ListTargetsByRuleResponse {

		/**
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Targets?: Array<Target>;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;
	}
	export interface ListTargetsByRuleResponseFormProperties {

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateListTargetsByRuleResponseFormGroup() {
		return new FormGroup<ListTargetsByRuleResponseFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
		});

	}


	/** <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a>PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> */
	export interface Target {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Id: string;

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		Arn: string;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn?: string | null;

		/** Max length: 8192 */
		Input?: string | null;

		/** Max length: 256 */
		InputPath?: string | null;

		/** Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event. */
		InputTransformer?: InputTransformer;

		/** This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key. */
		KinesisParameters?: KinesisParameters;

		/** This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command. */
		RunCommandParameters?: RunCommandParameters;

		/** The custom parameters to be used when the target is an Amazon ECS task. */
		EcsParameters?: EcsParameters;

		/** The custom parameters to be used when the target is an AWS Batch job. */
		BatchParameters?: BatchParameters;

		/** This structure includes the custom parameter to be used when the target is an SQS FIFO queue. */
		SqsParameters?: SqsParameters;
	}

	/** <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see <a>PutTargets</a>.</p> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> */
	export interface TargetFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		Arn: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,

		/** Max length: 8192 */
		Input: FormControl<string | null | undefined>,

		/** Max length: 256 */
		InputPath: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			Id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			Arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(1)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
			Input: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(8192)]),
			InputPath: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
		});

	}


	/** Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event. */
	export interface InputTransformer {
		InputPathsMap?: TransformerPaths;

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 1
		 */
		InputTemplate: string;
	}

	/** Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event. */
	export interface InputTransformerFormProperties {

		/**
		 * Required
		 * Max length: 8192
		 * Min length: 1
		 */
		InputTemplate: FormControl<string | null | undefined>,
	}
	export function CreateInputTransformerFormGroup() {
		return new FormGroup<InputTransformerFormProperties>({
			InputTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(8192), Validators.minLength(1)]),
		});

	}

	export interface TransformerPaths {
	}
	export interface TransformerPathsFormProperties {
	}
	export function CreateTransformerPathsFormGroup() {
		return new FormGroup<TransformerPathsFormProperties>({
		});

	}


	/** This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key. */
	export interface KinesisParameters {

		/**
		 * Required
		 * Max length: 256
		 */
		PartitionKeyPath: string;
	}

	/** This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the <code>eventId</code> as the partition key. */
	export interface KinesisParametersFormProperties {

		/**
		 * Required
		 * Max length: 256
		 */
		PartitionKeyPath: FormControl<string | null | undefined>,
	}
	export function CreateKinesisParametersFormGroup() {
		return new FormGroup<KinesisParametersFormProperties>({
			PartitionKeyPath: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(256)]),
		});

	}


	/** This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.  */
	export interface RunCommandParameters {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 5
		 */
		RunCommandTargets: Array<RunCommandTarget>;
	}

	/** This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.  */
	export interface RunCommandParametersFormProperties {
	}
	export function CreateRunCommandParametersFormGroup() {
		return new FormGroup<RunCommandParametersFormProperties>({
		});

	}


	/** Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values. */
	export interface RunCommandTarget {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: string;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 50
		 */
		Values: Array<string>;
	}

	/** Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values. */
	export interface RunCommandTargetFormProperties {

		/**
		 * Required
		 * Max length: 128
		 * Min length: 1
		 */
		Key: FormControl<string | null | undefined>,
	}
	export function CreateRunCommandTargetFormGroup() {
		return new FormGroup<RunCommandTargetFormProperties>({
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(128), Validators.minLength(1), Validators.pattern('^[\p{L}\p{Z}\p{N}_.:/=+\-@]*$')]),
		});

	}


	/** The custom parameters to be used when the target is an Amazon ECS task. */
	export interface EcsParameters {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskDefinitionArn: string;

		/** Minimum: 1 */
		TaskCount?: number | null;
		LaunchType?: EcsParametersLaunchType | null;

		/** This structure specifies the network configuration for an ECS task. */
		NetworkConfiguration?: NetworkConfiguration;
		PlatformVersion?: string | null;
		Group?: string | null;
	}

	/** The custom parameters to be used when the target is an Amazon ECS task. */
	export interface EcsParametersFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		TaskDefinitionArn: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		TaskCount: FormControl<number | null | undefined>,
		LaunchType: FormControl<EcsParametersLaunchType | null | undefined>,
		PlatformVersion: FormControl<string | null | undefined>,
		Group: FormControl<string | null | undefined>,
	}
	export function CreateEcsParametersFormGroup() {
		return new FormGroup<EcsParametersFormProperties>({
			TaskDefinitionArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(1)]),
			TaskCount: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			LaunchType: new FormControl<EcsParametersLaunchType | null | undefined>(undefined),
			PlatformVersion: new FormControl<string | null | undefined>(undefined),
			Group: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EcsParametersLaunchType { EC2 = 0, FARGATE = 1 }


	/** This structure specifies the network configuration for an ECS task. */
	export interface NetworkConfiguration {

		/** This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode. */
		awsvpcConfiguration?: AwsVpcConfiguration;
	}

	/** This structure specifies the network configuration for an ECS task. */
	export interface NetworkConfigurationFormProperties {
	}
	export function CreateNetworkConfigurationFormGroup() {
		return new FormGroup<NetworkConfigurationFormProperties>({
		});

	}


	/** This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode. */
	export interface AwsVpcConfiguration {

		/** Required */
		Subnets: Array<string>;
		SecurityGroups?: Array<string>;
		AssignPublicIp?: DescribeRuleResponseState | null;
	}

	/** This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode. */
	export interface AwsVpcConfigurationFormProperties {
		AssignPublicIp: FormControl<DescribeRuleResponseState | null | undefined>,
	}
	export function CreateAwsVpcConfigurationFormGroup() {
		return new FormGroup<AwsVpcConfigurationFormProperties>({
			AssignPublicIp: new FormControl<DescribeRuleResponseState | null | undefined>(undefined),
		});

	}


	/** The custom parameters to be used when the target is an AWS Batch job. */
	export interface BatchParameters {

		/** Required */
		JobDefinition: string;

		/** Required */
		JobName: string;

		/** The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job. */
		ArrayProperties?: BatchArrayProperties;

		/** The retry strategy to use for failed jobs, if the target is an AWS Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition. */
		RetryStrategy?: BatchRetryStrategy;
	}

	/** The custom parameters to be used when the target is an AWS Batch job. */
	export interface BatchParametersFormProperties {

		/** Required */
		JobDefinition: FormControl<string | null | undefined>,

		/** Required */
		JobName: FormControl<string | null | undefined>,
	}
	export function CreateBatchParametersFormGroup() {
		return new FormGroup<BatchParametersFormProperties>({
			JobDefinition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			JobName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job. */
	export interface BatchArrayProperties {
		Size?: number | null;
	}

	/** The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an AWS Batch job. */
	export interface BatchArrayPropertiesFormProperties {
		Size: FormControl<number | null | undefined>,
	}
	export function CreateBatchArrayPropertiesFormGroup() {
		return new FormGroup<BatchArrayPropertiesFormProperties>({
			Size: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The retry strategy to use for failed jobs, if the target is an AWS Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition. */
	export interface BatchRetryStrategy {
		Attempts?: number | null;
	}

	/** The retry strategy to use for failed jobs, if the target is an AWS Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition. */
	export interface BatchRetryStrategyFormProperties {
		Attempts: FormControl<number | null | undefined>,
	}
	export function CreateBatchRetryStrategyFormGroup() {
		return new FormGroup<BatchRetryStrategyFormProperties>({
			Attempts: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** This structure includes the custom parameter to be used when the target is an SQS FIFO queue. */
	export interface SqsParameters {
		MessageGroupId?: string | null;
	}

	/** This structure includes the custom parameter to be used when the target is an SQS FIFO queue. */
	export interface SqsParametersFormProperties {
		MessageGroupId: FormControl<string | null | undefined>,
	}
	export function CreateSqsParametersFormGroup() {
		return new FormGroup<SqsParametersFormProperties>({
			MessageGroupId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTargetsByRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Rule: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken?: string | null;

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit?: number | null;
	}
	export interface ListTargetsByRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Rule: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,

		/**
		 * Max length: 2048
		 * Min length: 1
		 */
		NextToken: FormControl<string | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 100
		 */
		Limit: FormControl<number | null | undefined>,
	}
	export function CreateListTargetsByRuleRequestFormGroup() {
		return new FormGroup<ListTargetsByRuleRequestFormProperties>({
			Rule: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
			NextToken: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(2048), Validators.minLength(1)]),
			Limit: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(100)]),
		});

	}

	export interface PutEventsResponse {
		FailedEntryCount?: number | null;
		Entries?: Array<PutEventsResultEntry>;
	}
	export interface PutEventsResponseFormProperties {
		FailedEntryCount: FormControl<number | null | undefined>,
	}
	export function CreatePutEventsResponseFormGroup() {
		return new FormGroup<PutEventsResponseFormProperties>({
			FailedEntryCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an event that failed to be submitted. */
	export interface PutEventsResultEntry {
		EventId?: string | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Represents an event that failed to be submitted. */
	export interface PutEventsResultEntryFormProperties {
		EventId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePutEventsResultEntryFormGroup() {
		return new FormGroup<PutEventsResultEntryFormProperties>({
			EventId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutEventsRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		Entries: Array<PutEventsRequestEntry>;
	}
	export interface PutEventsRequestFormProperties {
	}
	export function CreatePutEventsRequestFormGroup() {
		return new FormGroup<PutEventsRequestFormProperties>({
		});

	}


	/** Represents an event to be submitted. */
	export interface PutEventsRequestEntry {
		Time?: Date | null;
		Source?: string | null;
		Resources?: Array<string>;
		DetailType?: string | null;
		Detail?: string | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;
	}

	/** Represents an event to be submitted. */
	export interface PutEventsRequestEntryFormProperties {
		Time: FormControl<Date | null | undefined>,
		Source: FormControl<string | null | undefined>,
		DetailType: FormControl<string | null | undefined>,
		Detail: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreatePutEventsRequestEntryFormGroup() {
		return new FormGroup<PutEventsRequestEntryFormProperties>({
			Time: new FormControl<Date | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined),
			DetailType: new FormControl<string | null | undefined>(undefined),
			Detail: new FormControl<string | null | undefined>(undefined),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
		});

	}

	export interface PutPartnerEventsResponse {
		FailedEntryCount?: number | null;
		Entries?: Array<PutPartnerEventsResultEntry>;
	}
	export interface PutPartnerEventsResponseFormProperties {
		FailedEntryCount: FormControl<number | null | undefined>,
	}
	export function CreatePutPartnerEventsResponseFormGroup() {
		return new FormGroup<PutPartnerEventsResponseFormProperties>({
			FailedEntryCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an event that a partner tried to generate, but failed. */
	export interface PutPartnerEventsResultEntry {
		EventId?: string | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Represents an event that a partner tried to generate, but failed. */
	export interface PutPartnerEventsResultEntryFormProperties {
		EventId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePutPartnerEventsResultEntryFormGroup() {
		return new FormGroup<PutPartnerEventsResultEntryFormProperties>({
			EventId: new FormControl<string | null | undefined>(undefined),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPartnerEventsRequest {

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 20
		 */
		Entries: Array<PutPartnerEventsRequestEntry>;
	}
	export interface PutPartnerEventsRequestFormProperties {
	}
	export function CreatePutPartnerEventsRequestFormGroup() {
		return new FormGroup<PutPartnerEventsRequestFormProperties>({
		});

	}


	/** The details about an event generated by an SaaS partner. */
	export interface PutPartnerEventsRequestEntry {
		Time?: Date | null;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Source?: string | null;
		Resources?: Array<string>;
		DetailType?: string | null;
		Detail?: string | null;
	}

	/** The details about an event generated by an SaaS partner. */
	export interface PutPartnerEventsRequestEntryFormProperties {
		Time: FormControl<Date | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		Source: FormControl<string | null | undefined>,
		DetailType: FormControl<string | null | undefined>,
		Detail: FormControl<string | null | undefined>,
	}
	export function CreatePutPartnerEventsRequestEntryFormGroup() {
		return new FormGroup<PutPartnerEventsRequestEntryFormProperties>({
			Time: new FormControl<Date | null | undefined>(undefined),
			Source: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('aws\.partner(/[\.\-_A-Za-z0-9]+){2,}')]),
			DetailType: new FormControl<string | null | undefined>(undefined),
			Detail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutPermissionRequest {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Action: string;

		/**
		 * Required
		 * Max length: 12
		 * Min length: 1
		 */
		Principal: string;

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		StatementId: string;

		/** <p>A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain AWS organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the AWS organization. Following is an example value for <code>Condition</code>:</p> <p> <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'</code> </p> */
		Condition?: Condition;
	}
	export interface PutPermissionRequestFormProperties {

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Action: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 12
		 * Min length: 1
		 */
		Principal: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		StatementId: FormControl<string | null | undefined>,
	}
	export function CreatePutPermissionRequestFormGroup() {
		return new FormGroup<PutPermissionRequestFormProperties>({
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			Action: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('events:[a-zA-Z]+')]),
			Principal: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(12), Validators.minLength(1), Validators.pattern('(\d{12}|\*)')]),
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9-_]+')]),
		});

	}


	/** <p>A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain AWS organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the AWS organization. Following is an example value for <code>Condition</code>:</p> <p> <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'</code> </p> */
	export interface Condition {

		/** Required */
		Type: string;

		/** Required */
		Key: string;

		/** Required */
		Value: string;
	}

	/** <p>A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain AWS organization. The string must contain <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the ID of the AWS organization. Following is an example value for <code>Condition</code>:</p> <p> <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"}'</code> </p> */
	export interface ConditionFormProperties {

		/** Required */
		Type: FormControl<string | null | undefined>,

		/** Required */
		Key: FormControl<string | null | undefined>,

		/** Required */
		Value: FormControl<string | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			Type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PolicyLengthExceededException {
	}
	export interface PolicyLengthExceededExceptionFormProperties {
	}
	export function CreatePolicyLengthExceededExceptionFormGroup() {
		return new FormGroup<PolicyLengthExceededExceptionFormProperties>({
		});

	}

	export interface PutRuleResponse {

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		RuleArn?: string | null;
	}
	export interface PutRuleResponseFormProperties {

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		RuleArn: FormControl<string | null | undefined>,
	}
	export function CreatePutRuleResponseFormGroup() {
		return new FormGroup<PutRuleResponseFormProperties>({
			RuleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}

	export interface PutRuleRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: string;

		/** Max length: 256 */
		ScheduleExpression?: string | null;
		EventPattern?: string | null;
		State?: DescribeRuleResponseState | null;

		/** Max length: 512 */
		Description?: string | null;

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn?: string | null;
		Tags?: Array<Tag>;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;
	}
	export interface PutRuleRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Name: FormControl<string | null | undefined>,

		/** Max length: 256 */
		ScheduleExpression: FormControl<string | null | undefined>,
		EventPattern: FormControl<string | null | undefined>,
		State: FormControl<DescribeRuleResponseState | null | undefined>,

		/** Max length: 512 */
		Description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1600
		 * Min length: 1
		 */
		RoleArn: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreatePutRuleRequestFormGroup() {
		return new FormGroup<PutRuleRequestFormProperties>({
			Name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			ScheduleExpression: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256)]),
			EventPattern: new FormControl<string | null | undefined>(undefined),
			State: new FormControl<DescribeRuleResponseState | null | undefined>(undefined),
			Description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(512)]),
			RoleArn: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1600), Validators.minLength(1)]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
		});

	}

	export interface InvalidEventPatternException {
	}
	export interface InvalidEventPatternExceptionFormProperties {
	}
	export function CreateInvalidEventPatternExceptionFormGroup() {
		return new FormGroup<InvalidEventPatternExceptionFormProperties>({
		});

	}

	export interface PutTargetsResponse {
		FailedEntryCount?: number | null;
		FailedEntries?: Array<PutTargetsResultEntry>;
	}
	export interface PutTargetsResponseFormProperties {
		FailedEntryCount: FormControl<number | null | undefined>,
	}
	export function CreatePutTargetsResponseFormGroup() {
		return new FormGroup<PutTargetsResponseFormProperties>({
			FailedEntryCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a target that failed to be added to a rule. */
	export interface PutTargetsResultEntry {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		TargetId?: string | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Represents a target that failed to be added to a rule. */
	export interface PutTargetsResultEntryFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		TargetId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreatePutTargetsResultEntryFormGroup() {
		return new FormGroup<PutTargetsResultEntryFormProperties>({
			TargetId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PutTargetsRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Rule: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Targets: Array<Target>;
	}
	export interface PutTargetsRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Rule: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreatePutTargetsRequestFormGroup() {
		return new FormGroup<PutTargetsRequestFormProperties>({
			Rule: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
		});

	}

	export interface RemovePermissionRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		StatementId: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;
	}
	export interface RemovePermissionRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		StatementId: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
	}
	export function CreateRemovePermissionRequestFormGroup() {
		return new FormGroup<RemovePermissionRequestFormProperties>({
			StatementId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[a-zA-Z0-9-_]+')]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
		});

	}

	export interface RemoveTargetsResponse {
		FailedEntryCount?: number | null;
		FailedEntries?: Array<RemoveTargetsResultEntry>;
	}
	export interface RemoveTargetsResponseFormProperties {
		FailedEntryCount: FormControl<number | null | undefined>,
	}
	export function CreateRemoveTargetsResponseFormGroup() {
		return new FormGroup<RemoveTargetsResponseFormProperties>({
			FailedEntryCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a target that failed to be removed from a rule. */
	export interface RemoveTargetsResultEntry {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		TargetId?: string | null;
		ErrorCode?: string | null;
		ErrorMessage?: string | null;
	}

	/** Represents a target that failed to be removed from a rule. */
	export interface RemoveTargetsResultEntryFormProperties {

		/**
		 * Max length: 64
		 * Min length: 1
		 */
		TargetId: FormControl<string | null | undefined>,
		ErrorCode: FormControl<string | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
	}
	export function CreateRemoveTargetsResultEntryFormGroup() {
		return new FormGroup<RemoveTargetsResultEntryFormProperties>({
			TargetId: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			ErrorCode: new FormControl<string | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RemoveTargetsRequest {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Rule: string;

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName?: string | null;

		/**
		 * Required
		 * Minimum items: 1
		 * Maximum items: 100
		 */
		Ids: Array<string>;
		Force?: boolean | null;
	}
	export interface RemoveTargetsRequestFormProperties {

		/**
		 * Required
		 * Max length: 64
		 * Min length: 1
		 */
		Rule: FormControl<string | null | undefined>,

		/**
		 * Max length: 256
		 * Min length: 1
		 */
		EventBusName: FormControl<string | null | undefined>,
		Force: FormControl<boolean | null | undefined>,
	}
	export function CreateRemoveTargetsRequestFormGroup() {
		return new FormGroup<RemoveTargetsRequestFormProperties>({
			Rule: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(64), Validators.minLength(1), Validators.pattern('[\.\-_A-Za-z0-9]+')]),
			EventBusName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(256), Validators.minLength(1), Validators.pattern('[/\.\-_A-Za-z0-9]+')]),
			Force: new FormControl<boolean | null | undefined>(undefined),
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

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ResourceARN: string;

		/** Required */
		Tags: Array<Tag>;
	}
	export interface TagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateTagResourceRequestFormGroup() {
		return new FormGroup<TagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}

	export interface TestEventPatternResponse {
		Result?: boolean | null;
	}
	export interface TestEventPatternResponseFormProperties {
		Result: FormControl<boolean | null | undefined>,
	}
	export function CreateTestEventPatternResponseFormGroup() {
		return new FormGroup<TestEventPatternResponseFormProperties>({
			Result: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TestEventPatternRequest {

		/** Required */
		EventPattern: string;

		/** Required */
		Event: string;
	}
	export interface TestEventPatternRequestFormProperties {

		/** Required */
		EventPattern: FormControl<string | null | undefined>,

		/** Required */
		Event: FormControl<string | null | undefined>,
	}
	export function CreateTestEventPatternRequestFormGroup() {
		return new FormGroup<TestEventPatternRequestFormProperties>({
			EventPattern: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			Event: new FormControl<string | null | undefined>(undefined, [Validators.required]),
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

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ResourceARN: string;

		/** Required */
		TagKeys: Array<string>;
	}
	export interface UntagResourceRequestFormProperties {

		/**
		 * Required
		 * Max length: 1600
		 * Min length: 1
		 */
		ResourceARN: FormControl<string | null | undefined>,
	}
	export function CreateUntagResourceRequestFormGroup() {
		return new FormGroup<UntagResourceRequestFormProperties>({
			ResourceARN: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(1600), Validators.minLength(1)]),
		});

	}

	export enum AssignPublicIp { ENABLED = 0, DISABLED = 1 }

	export enum EventSourceState { PENDING = 0, ACTIVE = 1, DELETED = 2 }

	export enum RuleState { ENABLED = 0, DISABLED = 1 }

	export enum LaunchType { EC2 = 0, FARGATE = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Activates a partner event source that has been deactivated. Once activated, your matching event bus will start receiving events from the event source.
		 * Post #X-Amz-Target=AWSEvents.ActivateEventSource
		 * @return {void} Success
		 */
		ActivateEventSource(requestBody: ActivateEventSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.ActivateEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new event bus within your account. This can be a custom event bus which you can use to receive events from your custom applications and services, or it can be a partner event bus which can be matched to a partner event source.
		 * Post #X-Amz-Target=AWSEvents.CreateEventBus
		 * @return {CreateEventBusResponse} Success
		 */
		CreateEventBus(requestBody: CreateEventBusRequest): Observable<CreateEventBusResponse> {
			return this.http.post<CreateEventBusResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.CreateEventBus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Called by an SaaS partner to create a partner event source. This operation is not used by AWS customers.</p> <p>Each partner event source can be used by one AWS account to create a matching partner event bus in that AWS account. A SaaS partner must create one partner event source for each AWS account that wants to receive those event types. </p> <p>A partner event source creates events based on resources within the SaaS partner's service or application.</p> <p>An AWS account that creates a partner event bus that matches the partner event source can use that event bus to receive events from the partner, and then process them using AWS Events rules and targets.</p> <p>Partner event source names follow this format:</p> <p> <code> <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i> </code> </p> <p> <i>partner_name</i> is determined during partner registration and identifies the partner to AWS customers. <i>event_namespace</i> is determined by the partner and is a way for the partner to categorize their events. <i>event_name</i> is determined by the partner, and should uniquely identify an event-generating resource within the partner system. The combination of <i>event_namespace</i> and <i>event_name</i> should help AWS customers decide whether to create an event bus to receive these events.</p>
		 * Post #X-Amz-Target=AWSEvents.CreatePartnerEventSource
		 * @return {CreatePartnerEventSourceResponse} Success
		 */
		CreatePartnerEventSource(requestBody: CreatePartnerEventSourceRequest): Observable<CreatePartnerEventSourceResponse> {
			return this.http.post<CreatePartnerEventSourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.CreatePartnerEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>You can use this operation to temporarily stop receiving events from the specified partner event source. The matching event bus is not deleted. </p> <p>When you deactivate a partner event source, the source goes into PENDING state. If it remains in PENDING state for more than two weeks, it is deleted.</p> <p>To activate a deactivated partner event source, use <a>ActivateEventSource</a>.</p>
		 * Post #X-Amz-Target=AWSEvents.DeactivateEventSource
		 * @return {void} Success
		 */
		DeactivateEventSource(requestBody: DeactivateEventSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.DeactivateEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the specified custom event bus or partner event bus. All rules associated with this event bus need to be deleted. You can't delete your account's default event bus.
		 * Post #X-Amz-Target=AWSEvents.DeleteEventBus
		 * @return {void} Success
		 */
		DeleteEventBus(requestBody: DeleteEventBusRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.DeleteEventBus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>This operation is used by SaaS partners to delete a partner event source. This operation is not used by AWS customers.</p> <p>When you delete an event source, the status of the corresponding partner event bus in the AWS customer account becomes DELETED.</p> <p/>
		 * Post #X-Amz-Target=AWSEvents.DeletePartnerEventSource
		 * @return {void} Success
		 */
		DeletePartnerEventSource(requestBody: DeletePartnerEventSourceRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.DeletePartnerEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Deletes the specified rule.</p> <p>Before you can delete the rule, you must remove all targets, using <a>RemoveTargets</a>.</p> <p>When you delete a rule, incoming events might continue to match to the deleted rule. Allow a short period of time for changes to take effect.</p> <p>Managed rules are rules created and managed by another AWS service on your behalf. These rules are created by those other AWS services to support functionality in those services. You can delete these rules using the <code>Force</code> option, but you should do so only if you are sure the other service is not still using that rule.</p>
		 * Post #X-Amz-Target=AWSEvents.DeleteRule
		 * @return {void} Success
		 */
		DeleteRule(requestBody: DeleteRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.DeleteRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Displays details about an event bus in your account. This can include the external AWS accounts that are permitted to write events to your default event bus, and the associated policy. For custom event buses and partner event buses, it displays the name, ARN, policy, state, and creation time.</p> <p> To enable your account to receive events from other accounts on its default event bus, use <a>PutPermission</a>.</p> <p>For more information about partner event buses, see <a>CreateEventBus</a>.</p>
		 * Post #X-Amz-Target=AWSEvents.DescribeEventBus
		 * @return {DescribeEventBusResponse} Success
		 */
		DescribeEventBus(requestBody: DescribeEventBusRequest): Observable<DescribeEventBusResponse> {
			return this.http.post<DescribeEventBusResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeEventBus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This operation lists details about a partner event source that is shared with your account.
		 * Post #X-Amz-Target=AWSEvents.DescribeEventSource
		 * @return {DescribeEventSourceResponse} Success
		 */
		DescribeEventSource(requestBody: DescribeEventSourceRequest): Observable<DescribeEventSourceResponse> {
			return this.http.post<DescribeEventSourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An SaaS partner can use this operation to list details about a partner event source that they have created. AWS customers do not use this operation. Instead, AWS customers can use <a>DescribeEventSource</a> to see details about a partner event source that is shared with them.
		 * Post #X-Amz-Target=AWSEvents.DescribePartnerEventSource
		 * @return {DescribePartnerEventSourceResponse} Success
		 */
		DescribePartnerEventSource(requestBody: DescribePartnerEventSourceRequest): Observable<DescribePartnerEventSourceResponse> {
			return this.http.post<DescribePartnerEventSourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribePartnerEventSource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Describes the specified rule.</p> <p>DescribeRule does not list the targets of a rule. To see the targets associated with a rule, use <a>ListTargetsByRule</a>.</p>
		 * Post #X-Amz-Target=AWSEvents.DescribeRule
		 * @return {DescribeRuleResponse} Success
		 */
		DescribeRule(requestBody: DescribeRuleRequest): Observable<DescribeRuleResponse> {
			return this.http.post<DescribeRuleResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.DescribeRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Disables the specified rule. A disabled rule won't match any events, and won't self-trigger if it has a schedule expression.</p> <p>When you disable a rule, incoming events might continue to match to the disabled rule. Allow a short period of time for changes to take effect.</p>
		 * Post #X-Amz-Target=AWSEvents.DisableRule
		 * @return {void} Success
		 */
		DisableRule(requestBody: DisableRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.DisableRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Enables the specified rule. If the rule does not exist, the operation fails.</p> <p>When you enable a rule, incoming events might not immediately start matching to a newly enabled rule. Allow a short period of time for changes to take effect.</p>
		 * Post #X-Amz-Target=AWSEvents.EnableRule
		 * @return {void} Success
		 */
		EnableRule(requestBody: EnableRuleRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.EnableRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the event buses in your account, including the default event bus, custom event buses, and partner event buses.
		 * Post #X-Amz-Target=AWSEvents.ListEventBuses
		 * @return {ListEventBusesResponse} Success
		 */
		ListEventBuses(requestBody: ListEventBusesRequest): Observable<ListEventBusesResponse> {
			return this.http.post<ListEventBusesResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListEventBuses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * You can use this to see all the partner event sources that have been shared with your AWS account. For more information about partner event sources, see <a>CreateEventBus</a>.
		 * Post #X-Amz-Target=AWSEvents.ListEventSources
		 * @return {ListEventSourcesResponse} Success
		 */
		ListEventSources(requestBody: ListEventSourcesRequest): Observable<ListEventSourcesResponse> {
			return this.http.post<ListEventSourcesResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListEventSources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An SaaS partner can use this operation to display the AWS account ID that a particular partner event source name is associated with. This operation is not used by AWS customers.
		 * Post #X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts
		 * @return {ListPartnerEventSourceAccountsResponse} Success
		 */
		ListPartnerEventSourceAccounts(requestBody: ListPartnerEventSourceAccountsRequest): Observable<ListPartnerEventSourceAccountsResponse> {
			return this.http.post<ListPartnerEventSourceAccountsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * An SaaS partner can use this operation to list all the partner event source names that they have created. This operation is not used by AWS customers.
		 * Post #X-Amz-Target=AWSEvents.ListPartnerEventSources
		 * @return {ListPartnerEventSourcesResponse} Success
		 */
		ListPartnerEventSources(requestBody: ListPartnerEventSourcesRequest): Observable<ListPartnerEventSourcesResponse> {
			return this.http.post<ListPartnerEventSourcesResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListPartnerEventSources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the rules for the specified target. You can see which of the rules in Amazon EventBridge can invoke a specific target in your account.
		 * Post #X-Amz-Target=AWSEvents.ListRuleNamesByTarget
		 * @return {ListRuleNamesByTargetResponse} Success
		 */
		ListRuleNamesByTarget(requestBody: ListRuleNamesByTargetRequest): Observable<ListRuleNamesByTargetResponse> {
			return this.http.post<ListRuleNamesByTargetResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListRuleNamesByTarget', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Lists your Amazon EventBridge rules. You can either list all the rules or you can provide a prefix to match to the rule names.</p> <p>ListRules does not list the targets of a rule. To see the targets associated with a rule, use <a>ListTargetsByRule</a>.</p>
		 * Post #X-Amz-Target=AWSEvents.ListRules
		 * @return {ListRulesResponse} Success
		 */
		ListRules(requestBody: ListRulesRequest): Observable<ListRulesResponse> {
			return this.http.post<ListRulesResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Displays the tags associated with an EventBridge resource. In EventBridge, rules and event buses can be tagged.
		 * Post #X-Amz-Target=AWSEvents.ListTagsForResource
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(requestBody: ListTagsForResourceRequest): Observable<ListTagsForResourceResponse> {
			return this.http.post<ListTagsForResourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListTagsForResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the targets assigned to the specified rule.
		 * Post #X-Amz-Target=AWSEvents.ListTargetsByRule
		 * @return {ListTargetsByRuleResponse} Success
		 */
		ListTargetsByRule(requestBody: ListTargetsByRuleRequest): Observable<ListTargetsByRuleResponse> {
			return this.http.post<ListTargetsByRuleResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.ListTargetsByRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sends custom events to Amazon EventBridge so that they can be matched to rules.
		 * Post #X-Amz-Target=AWSEvents.PutEvents
		 * @return {PutEventsResponse} Success
		 */
		PutEvents(requestBody: PutEventsRequest): Observable<PutEventsResponse> {
			return this.http.post<PutEventsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.PutEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This is used by SaaS partners to write events to a customer's partner event bus. AWS customers do not use this operation.
		 * Post #X-Amz-Target=AWSEvents.PutPartnerEvents
		 * @return {PutPartnerEventsResponse} Success
		 */
		PutPartnerEvents(requestBody: PutPartnerEventsRequest): Observable<PutPartnerEventsResponse> {
			return this.http.post<PutPartnerEventsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.PutPartnerEvents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Running <code>PutPermission</code> permits the specified AWS account or AWS organization to put events to the specified <i>event bus</i>. CloudWatch Events rules in your account are triggered by these events arriving to an event bus in your account. </p> <p>For another account to send events to your account, that external account must have an EventBridge rule with your account's event bus as a target.</p> <p>To enable multiple AWS accounts to put events to your event bus, run <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are members of the same AWS organization, you can run <code>PutPermission</code> once specifying <code>Principal</code> as "*" and specifying the AWS organization ID in <code>Condition</code>, to grant permissions to all accounts in that organization.</p> <p>If you grant permissions using an organization, then accounts in that organization must specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>The permission policy on the default event bus cannot exceed 10 KB in size.</p>
		 * Post #X-Amz-Target=AWSEvents.PutPermission
		 * @return {void} Success
		 */
		PutPermission(requestBody: PutPermissionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.PutPermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates the specified rule. Rules are enabled by default, or based on value of the state. You can disable a rule using <a>DisableRule</a>.</p> <p>A single rule watches for events from a single event bus. Events generated by AWS services go to your account's default event bus. Events generated by SaaS partner services or applications go to the matching partner event bus. If you have custom applications or services, you can specify whether their events go to your default event bus or a custom event bus that you have created. For more information, see <a>CreateEventBus</a>.</p> <p>If you are updating an existing rule, the rule is replaced with what you specify in this <code>PutRule</code> command. If you omit arguments in <code>PutRule</code>, the old values for those arguments are not kept. Instead, they are replaced with null values.</p> <p>When you create or update a rule, incoming events might not immediately start matching to new or updated rules. Allow a short period of time for changes to take effect.</p> <p>A rule must contain at least an EventPattern or ScheduleExpression. Rules with EventPatterns are triggered when a matching event is observed. Rules with ScheduleExpressions self-trigger based on the given schedule. A rule can have both an EventPattern and a ScheduleExpression, in which case the rule triggers on matching events as well as on a schedule.</p> <p>When you initially create a rule, you can optionally assign one or more tags to the rule. Tags can help you organize and categorize your resources. You can also use them to scope user permissions, by granting a user permission to access or change only rules with certain tag values. To use the <code>PutRule</code> operation and assign tags, you must have both the <code>events:PutRule</code> and <code>events:TagResource</code> permissions.</p> <p>If you are updating an existing rule, any tags you specify in the <code>PutRule</code> operation are ignored. To update the tags of an existing rule, use <a>TagResource</a> and <a>UntagResource</a>.</p> <p>Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p> <p>In EventBridge, it is possible to create rules that lead to infinite loops, where a rule is fired repeatedly. For example, a rule might detect that ACLs have changed on an S3 bucket, and trigger software to change them to the desired state. If the rule is not written carefully, the subsequent change to the ACLs fires the rule again, creating an infinite loop.</p> <p>To prevent this, write the rules so that the triggered actions do not re-fire the same rule. For example, your rule could fire only if ACLs are found to be in a bad state, instead of after any change. </p> <p>An infinite loop can quickly cause higher than expected charges. We recommend that you use budgeting, which alerts you when charges exceed your specified limit. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html">Managing Your Costs with Budgets</a>.</p>
		 * Post #X-Amz-Target=AWSEvents.PutRule
		 * @return {PutRuleResponse} Success
		 */
		PutRule(requestBody: PutRuleRequest): Observable<PutRuleResponse> {
			return this.http.post<PutRuleResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.PutRule', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.</p> <p>Targets are the resources that are invoked when a rule is triggered.</p> <p>You can configure the following as targets for Events:</p> <ul> <li> <p>EC2 instances</p> </li> <li> <p>SSM Run Command</p> </li> <li> <p>SSM Automation</p> </li> <li> <p>AWS Lambda functions</p> </li> <li> <p>Data streams in Amazon Kinesis Data Streams</p> </li> <li> <p>Data delivery streams in Amazon Kinesis Data Firehose</p> </li> <li> <p>Amazon ECS tasks</p> </li> <li> <p>AWS Step Functions state machines</p> </li> <li> <p>AWS Batch jobs</p> </li> <li> <p>AWS CodeBuild projects</p> </li> <li> <p>Pipelines in AWS CodePipeline</p> </li> <li> <p>Amazon Inspector assessment templates</p> </li> <li> <p>Amazon SNS topics</p> </li> <li> <p>Amazon SQS queues, including FIFO queues</p> </li> <li> <p>The default event bus of another AWS account</p> </li> </ul> <p>Creating rules with built-in targets is supported only in the AWS Management Console. The built-in targets are <code>EC2 CreateSnapshot API call</code>, <code>EC2 RebootInstances API call</code>, <code>EC2 StopInstances API call</code>, and <code>EC2 TerminateInstances API call</code>. </p> <p>For some target types, <code>PutTargets</code> provides target-specific parameters. If the target is a Kinesis data stream, you can optionally specify which shard the event goes to by using the <code>KinesisParameters</code> argument. To invoke a command on multiple EC2 instances with one rule, you can use the <code>RunCommandParameters</code> field.</p> <p>To be able to make API calls against the resources that you own, Amazon CloudWatch Events needs the appropriate permissions. For AWS Lambda and Amazon SNS resources, EventBridge relies on resource-based policies. For EC2 instances, Kinesis data streams, and AWS Step Functions state machines, EventBridge relies on IAM roles that you specify in the <code>RoleARN</code> argument in <code>PutTargets</code>. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/auth-and-access-control-eventbridge.html">Authentication and Access Control</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>If another AWS account is in the same region and has granted you permission (using <code>PutPermission</code>), you can send events to that account. Set that account's event bus as a target of the rules in your account. To send the matched events to the other account, specify that account's event bus as the <code>Arn</code> value when you run <code>PutTargets</code>. If your account sends events to another account, your account is charged for each sent event. Each event sent to another account is charged as a custom event. The account receiving the event is not charged. For more information, see <a href="https://aws.amazon.com/cloudwatch/pricing/">Amazon CloudWatch Pricing</a>.</p> <note> <p> <code>Input</code>, <code>InputPath</code>, and <code>InputTransformer</code> are not available with <code>PutTarget</code> if the target is an event bus of a different AWS account.</p> </note> <p>If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p> <p>For more information about enabling cross-account events, see <a>PutPermission</a>.</p> <p> <b>Input</b>, <b>InputPath</b>, and <b>InputTransformer</b> are mutually exclusive and optional parameters of a target. When a rule is triggered due to a matched event:</p> <ul> <li> <p>If none of the following arguments are specified for a target, then the entire event is passed to the target in JSON format (unless the target is Amazon EC2 Run Command or Amazon ECS task, in which case nothing from the event is passed to the target).</p> </li> <li> <p>If <b>Input</b> is specified in the form of valid JSON, then the matched event is overridden with this constant.</p> </li> <li> <p>If <b>InputPath</b> is specified in the form of JSONPath (for example, <code>$.detail</code>), then only the part of the event specified in the path is passed to the target (for example, only the detail part of the event is passed).</p> </li> <li> <p>If <b>InputTransformer</b> is specified, then one or more specified JSONPaths are extracted from the event and used as values in a template that you specify as the input to the target.</p> </li> </ul> <p>When you specify <code>InputPath</code> or <code>InputTransformer</code>, you must use JSON dot notation, not bracket notation.</p> <p>When you add targets to a rule and the associated rule triggers soon after, new or updated targets might not be immediately invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
		 * Post #X-Amz-Target=AWSEvents.PutTargets
		 * @return {PutTargetsResponse} Success
		 */
		PutTargets(requestBody: PutTargetsRequest): Observable<PutTargetsResponse> {
			return this.http.post<PutTargetsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.PutTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Revokes the permission of another AWS account to be able to put events to the specified event bus. Specify the account to revoke by the <code>StatementId</code> value that you associated with the account when you granted it permission with <code>PutPermission</code>. You can find the <code>StatementId</code> by using <a>DescribeEventBus</a>.
		 * Post #X-Amz-Target=AWSEvents.RemovePermission
		 * @return {void} Success
		 */
		RemovePermission(requestBody: RemovePermissionRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '#X-Amz-Target=AWSEvents.RemovePermission', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Removes the specified targets from the specified rule. When the rule is triggered, those targets are no longer be invoked.</p> <p>When you remove a target, when the associated rule triggers, removed targets might continue to be invoked. Allow a short period of time for changes to take effect.</p> <p>This action can partially fail if too many requests are made at the same time. If that happens, <code>FailedEntryCount</code> is non-zero in the response and each entry in <code>FailedEntries</code> provides the ID of the failed target and the error code.</p>
		 * Post #X-Amz-Target=AWSEvents.RemoveTargets
		 * @return {RemoveTargetsResponse} Success
		 */
		RemoveTargets(requestBody: RemoveTargetsRequest): Observable<RemoveTargetsResponse> {
			return this.http.post<RemoveTargetsResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.RemoveTargets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Assigns one or more tags (key-value pairs) to the specified EventBridge resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In EventBridge, rules and event buses can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the <code>TagResource</code> action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
		 * Post #X-Amz-Target=AWSEvents.TagResource
		 * @return {TagResourceResponse} Success
		 */
		TagResource(requestBody: TagResourceRequest): Observable<TagResourceResponse> {
			return this.http.post<TagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.TagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Tests whether the specified event pattern matches the provided event.</p> <p>Most services in AWS treat : or / as the same character in Amazon Resource Names (ARNs). However, EventBridge uses an exact match in event patterns and rules. Be sure to use the correct ARN characters when creating event patterns so that they match the ARN syntax in the event you want to match.</p>
		 * Post #X-Amz-Target=AWSEvents.TestEventPattern
		 * @return {TestEventPatternResponse} Success
		 */
		TestEventPattern(requestBody: TestEventPatternRequest): Observable<TestEventPatternResponse> {
			return this.http.post<TestEventPatternResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.TestEventPattern', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes one or more tags from the specified EventBridge resource. In CloudWatch Events, rules and event buses can be tagged.
		 * Post #X-Amz-Target=AWSEvents.UntagResource
		 * @return {UntagResourceResponse} Success
		 */
		UntagResource(requestBody: UntagResourceRequest): Observable<UntagResourceResponse> {
			return this.http.post<UntagResourceResponse>(this.baseUri + '#X-Amz-Target=AWSEvents.UntagResource', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum ActivateEventSourceX_Amz_Target { AWSEvents_ActivateEventSource = 0 }

	export enum CreateEventBusX_Amz_Target { AWSEvents_CreateEventBus = 0 }

	export enum CreatePartnerEventSourceX_Amz_Target { AWSEvents_CreatePartnerEventSource = 0 }

	export enum DeactivateEventSourceX_Amz_Target { AWSEvents_DeactivateEventSource = 0 }

	export enum DeleteEventBusX_Amz_Target { AWSEvents_DeleteEventBus = 0 }

	export enum DeletePartnerEventSourceX_Amz_Target { AWSEvents_DeletePartnerEventSource = 0 }

	export enum DeleteRuleX_Amz_Target { AWSEvents_DeleteRule = 0 }

	export enum DescribeEventBusX_Amz_Target { AWSEvents_DescribeEventBus = 0 }

	export enum DescribeEventSourceX_Amz_Target { AWSEvents_DescribeEventSource = 0 }

	export enum DescribePartnerEventSourceX_Amz_Target { AWSEvents_DescribePartnerEventSource = 0 }

	export enum DescribeRuleX_Amz_Target { AWSEvents_DescribeRule = 0 }

	export enum DisableRuleX_Amz_Target { AWSEvents_DisableRule = 0 }

	export enum EnableRuleX_Amz_Target { AWSEvents_EnableRule = 0 }

	export enum ListEventBusesX_Amz_Target { AWSEvents_ListEventBuses = 0 }

	export enum ListEventSourcesX_Amz_Target { AWSEvents_ListEventSources = 0 }

	export enum ListPartnerEventSourceAccountsX_Amz_Target { AWSEvents_ListPartnerEventSourceAccounts = 0 }

	export enum ListPartnerEventSourcesX_Amz_Target { AWSEvents_ListPartnerEventSources = 0 }

	export enum ListRuleNamesByTargetX_Amz_Target { AWSEvents_ListRuleNamesByTarget = 0 }

	export enum ListRulesX_Amz_Target { AWSEvents_ListRules = 0 }

	export enum ListTagsForResourceX_Amz_Target { AWSEvents_ListTagsForResource = 0 }

	export enum ListTargetsByRuleX_Amz_Target { AWSEvents_ListTargetsByRule = 0 }

	export enum PutEventsX_Amz_Target { AWSEvents_PutEvents = 0 }

	export enum PutPartnerEventsX_Amz_Target { AWSEvents_PutPartnerEvents = 0 }

	export enum PutPermissionX_Amz_Target { AWSEvents_PutPermission = 0 }

	export enum PutRuleX_Amz_Target { AWSEvents_PutRule = 0 }

	export enum PutTargetsX_Amz_Target { AWSEvents_PutTargets = 0 }

	export enum RemovePermissionX_Amz_Target { AWSEvents_RemovePermission = 0 }

	export enum RemoveTargetsX_Amz_Target { AWSEvents_RemoveTargets = 0 }

	export enum TagResourceX_Amz_Target { AWSEvents_TagResource = 0 }

	export enum TestEventPatternX_Amz_Target { AWSEvents_TestEventPattern = 0 }

	export enum UntagResourceX_Amz_Target { AWSEvents_UntagResource = 0 }

}

