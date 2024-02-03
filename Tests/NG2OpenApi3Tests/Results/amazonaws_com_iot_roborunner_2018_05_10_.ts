import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateDestinationResponse {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the destination's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * State of the destination.
		 * Required
		 */
		state: CreateDestinationResponseState;
	}
	export interface CreateDestinationResponseFormProperties {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the destination's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * State of the destination.
		 * Required
		 */
		state: FormControl<CreateDestinationResponseState | null | undefined>,
	}
	export function CreateCreateDestinationResponseFormGroup() {
		return new FormGroup<CreateDestinationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CreateDestinationResponseState | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CreateDestinationResponseState { ENABLED = 'ENABLED', DISABLED = 'DISABLED', DECOMMISSIONED = 'DECOMMISSIONED' }

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

	export interface ResourceNotFoundException {
	}
	export interface ResourceNotFoundExceptionFormProperties {
	}
	export function CreateResourceNotFoundExceptionFormGroup() {
		return new FormGroup<ResourceNotFoundExceptionFormProperties>({
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

	export interface InternalServerException {
	}
	export interface InternalServerExceptionFormProperties {
	}
	export function CreateInternalServerExceptionFormGroup() {
		return new FormGroup<InternalServerExceptionFormProperties>({
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

	export interface CreateSiteResponse {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the site's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;
	}
	export interface CreateSiteResponseFormProperties {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the site's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateSiteResponseFormGroup() {
		return new FormGroup<CreateSiteResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateWorkerResponse {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the workers identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;
	}
	export interface CreateWorkerResponseFormProperties {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the workers identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerResponseFormGroup() {
		return new FormGroup<CreateWorkerResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
		});

	}


	/** Cartesian coordinates in 3D space relative to the RoboRunner origin. */
	export interface CartesianCoordinates {

		/** Required */
		x: number;

		/** Required */
		y: number;
		z?: number | null;
	}

	/** Cartesian coordinates in 3D space relative to the RoboRunner origin. */
	export interface CartesianCoordinatesFormProperties {

		/** Required */
		x: FormControl<number | null | undefined>,

		/** Required */
		y: FormControl<number | null | undefined>,
		z: FormControl<number | null | undefined>,
	}
	export function CreateCartesianCoordinatesFormGroup() {
		return new FormGroup<CartesianCoordinatesFormProperties>({
			x: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			y: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			z: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateWorkerFleetResponse {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the worker fleet's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;
	}
	export interface CreateWorkerFleetResponseFormProperties {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the worker fleet's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCreateWorkerFleetResponseFormGroup() {
		return new FormGroup<CreateWorkerFleetResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteDestinationResponse {
	}
	export interface DeleteDestinationResponseFormProperties {
	}
	export function CreateDeleteDestinationResponseFormGroup() {
		return new FormGroup<DeleteDestinationResponseFormProperties>({
		});

	}

	export interface DeleteSiteResponse {
	}
	export interface DeleteSiteResponseFormProperties {
	}
	export function CreateDeleteSiteResponseFormGroup() {
		return new FormGroup<DeleteSiteResponseFormProperties>({
		});

	}

	export interface DeleteWorkerResponse {
	}
	export interface DeleteWorkerResponseFormProperties {
	}
	export function CreateDeleteWorkerResponseFormGroup() {
		return new FormGroup<DeleteWorkerResponseFormProperties>({
		});

	}

	export interface DeleteWorkerFleetResponse {
	}
	export interface DeleteWorkerFleetResponseFormProperties {
	}
	export function CreateDeleteWorkerFleetResponseFormGroup() {
		return new FormGroup<DeleteWorkerFleetResponseFormProperties>({
		});

	}

	export interface GetDestinationResponse {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the destination's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * State of the destination.
		 * Required
		 */
		state: CreateDestinationResponseState;

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface GetDestinationResponseFormProperties {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the destination's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * State of the destination.
		 * Required
		 */
		state: FormControl<CreateDestinationResponseState | null | undefined>,

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateGetDestinationResponseFormGroup() {
		return new FormGroup<GetDestinationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CreateDestinationResponseState | null | undefined>(undefined, [Validators.required]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface GetSiteResponse {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the site's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Required
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: string;

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;
	}
	export interface GetSiteResponseFormProperties {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the site's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Required
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateGetSiteResponseFormGroup() {
		return new FormGroup<GetSiteResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[a-zA-Z]{2}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(140)]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GetWorkerResponse {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the workers identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		fleet: string;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties?: string | null;

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;

		/** Properties of the worker that are provided by the vendor FMS. */
		vendorProperties?: VendorProperties;

		/** Supported coordinates for worker position. */
		position?: PositionCoordinates;

		/** Worker orientation measured in units clockwise from north. */
		orientation?: Orientation;
	}
	export interface GetWorkerResponseFormProperties {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the workers identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkerResponseFormGroup() {
		return new FormGroup<GetWorkerResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			additionalTransientProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}


	/** Properties of the worker that are provided by the vendor FMS. */
	export interface VendorProperties {

		/**
		 * The worker ID defined by the vendor FMS.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		vendorWorkerId: string;

		/**
		 * The worker IP address defined by the vendor FMS.
		 * Max length: 45
		 * Min length: 1
		 */
		vendorWorkerIpAddress?: string | null;

		/**
		 * JSON blob containing unstructured vendor properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalTransientProperties?: string | null;

		/**
		 * JSON blob containing unstructured vendor properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalFixedProperties?: string | null;
	}

	/** Properties of the worker that are provided by the vendor FMS. */
	export interface VendorPropertiesFormProperties {

		/**
		 * The worker ID defined by the vendor FMS.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		vendorWorkerId: FormControl<string | null | undefined>,

		/**
		 * The worker IP address defined by the vendor FMS.
		 * Max length: 45
		 * Min length: 1
		 */
		vendorWorkerIpAddress: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured vendor properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalTransientProperties: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured vendor properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateVendorPropertiesFormGroup() {
		return new FormGroup<VendorPropertiesFormProperties>({
			vendorWorkerId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			vendorWorkerIpAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(45)]),
			vendorAdditionalTransientProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
			vendorAdditionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}


	/** Supported coordinates for worker position. */
	export interface PositionCoordinates {
		cartesianCoordinates?: CartesianCoordinates;
	}

	/** Supported coordinates for worker position. */
	export interface PositionCoordinatesFormProperties {
	}
	export function CreatePositionCoordinatesFormGroup() {
		return new FormGroup<PositionCoordinatesFormProperties>({
		});

	}


	/** Worker orientation measured in units clockwise from north. */
	export interface Orientation {
		degrees?: number | null;
	}

	/** Worker orientation measured in units clockwise from north. */
	export interface OrientationFormProperties {
		degrees: FormControl<number | null | undefined>,
	}
	export function CreateOrientationFormGroup() {
		return new FormGroup<OrientationFormProperties>({
			degrees: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GetWorkerFleetResponse {

		/**
		 * Filters access by the worker fleet's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface GetWorkerFleetResponseFormProperties {

		/**
		 * Filters access by the worker fleet's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateGetWorkerFleetResponseFormGroup() {
		return new FormGroup<GetWorkerFleetResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface ListDestinationsResponse {

		/**
		 * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken?: string | null;

		/** List of destinations. */
		destinations?: Array<Destination>;
	}
	export interface ListDestinationsResponseFormProperties {

		/**
		 * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListDestinationsResponseFormGroup() {
		return new FormGroup<ListDestinationsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('.*[a-zA-Z0-9_.-/+=]*.*')]),
		});

	}


	/** Area within a facility where work can be performed. */
	export interface Destination {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the destination's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * State of the destination.
		 * Required
		 */
		state: CreateDestinationResponseState;

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}

	/** Area within a facility where work can be performed. */
	export interface DestinationFormProperties {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the destination's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * State of the destination.
		 * Required
		 */
		state: FormControl<CreateDestinationResponseState | null | undefined>,

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CreateDestinationResponseState | null | undefined>(undefined, [Validators.required]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface ListSitesResponse {

		/**
		 * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken?: string | null;

		/** List of facilities. */
		sites?: Array<Site>;
	}
	export interface ListSitesResponseFormProperties {

		/**
		 * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListSitesResponseFormGroup() {
		return new FormGroup<ListSitesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('.*[a-zA-Z0-9_.-/+=]*.*')]),
		});

	}


	/** Facility containing destinations, workers, activities, and tasks. */
	export interface Site {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/** Required */
		name: string;

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Required
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;
	}

	/** Facility containing destinations, workers, activities, and tasks. */
	export interface SiteFormProperties {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Required
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[a-zA-Z]{2}')]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListWorkerFleetsResponse {

		/**
		 * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken?: string | null;

		/** List of worker fleets. */
		workerFleets?: Array<WorkerFleet>;
	}
	export interface ListWorkerFleetsResponseFormProperties {

		/**
		 * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkerFleetsResponseFormGroup() {
		return new FormGroup<ListWorkerFleetsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('.*[a-zA-Z0-9_.-/+=]*.*')]),
		});

	}


	/** A collection of workers organized within a facility. */
	export interface WorkerFleet {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the worker fleet's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}

	/** A collection of workers organized within a facility. */
	export interface WorkerFleetFormProperties {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the worker fleet's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateWorkerFleetFormGroup() {
		return new FormGroup<WorkerFleetFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface ListWorkersResponse {

		/**
		 * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken?: string | null;

		/** List of workers. */
		workers?: Array<Worker>;
	}
	export interface ListWorkersResponseFormProperties {

		/**
		 * Pagination token returned when another page of data exists. Provide it in your next call to the API to receive the next page.
		 * Max length: 2048
		 * Min length: 1
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkersResponseFormGroup() {
		return new FormGroup<ListWorkersResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(2048), Validators.pattern('.*[a-zA-Z0-9_.-/+=]*.*')]),
		});

	}


	/** A unit capable of performing tasks. */
	export interface Worker {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the workers identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		fleet: string;

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: Date;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties?: string | null;

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;

		/** Properties of the worker that are provided by the vendor FMS. */
		vendorProperties?: VendorProperties;

		/** Supported coordinates for worker position. */
		position?: PositionCoordinates;

		/** Worker orientation measured in units clockwise from north. */
		orientation?: Orientation;
	}

	/** A unit capable of performing tasks. */
	export interface WorkerFormProperties {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the workers identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was created.
		 * Required
		 */
		createdAt: FormControl<Date | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateWorkerFormGroup() {
		return new FormGroup<WorkerFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			additionalTransientProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface UpdateDestinationResponse {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the destination's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * State of the destination.
		 * Required
		 */
		state: CreateDestinationResponseState;

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface UpdateDestinationResponseFormProperties {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the destination's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * State of the destination.
		 * Required
		 */
		state: FormControl<CreateDestinationResponseState | null | undefined>,

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDestinationResponseFormGroup() {
		return new FormGroup<UpdateDestinationResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<CreateDestinationResponseState | null | undefined>(undefined, [Validators.required]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface UpdateSiteResponse {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the site's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode?: string | null;

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;
	}
	export interface UpdateSiteResponseFormProperties {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the site's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateUpdateSiteResponseFormGroup() {
		return new FormGroup<UpdateSiteResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[a-zA-Z]{2}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(140)]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateWorkerResponse {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the workers identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		fleet: string;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties?: string | null;

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;

		/** Worker orientation measured in units clockwise from north. */
		orientation?: Orientation;

		/** Properties of the worker that are provided by the vendor FMS. */
		vendorProperties?: VendorProperties;

		/** Supported coordinates for worker position. */
		position?: PositionCoordinates;
	}
	export interface UpdateWorkerResponseFormProperties {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the workers identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkerResponseFormGroup() {
		return new FormGroup<UpdateWorkerResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			additionalTransientProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface UpdateWorkerFleetResponse {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: string;

		/**
		 * Filters access by the worker fleet's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: Date;

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface UpdateWorkerFleetResponseFormProperties {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		arn: FormControl<string | null | undefined>,

		/**
		 * Filters access by the worker fleet's identifier
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Timestamp at which the resource was last updated.
		 * Required
		 */
		updatedAt: FormControl<Date | null | undefined>,

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkerFleetResponseFormGroup() {
		return new FormGroup<UpdateWorkerFleetResponseFormProperties>({
			arn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			updatedAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}


	/** State of the destination. */
	export enum DestinationState { ENABLED = 'ENABLED', DISABLED = 'DISABLED', DECOMMISSIONED = 'DECOMMISSIONED' }

	export interface CreateDestinationRequest {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;
		state?: CreateDestinationResponseState;

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface CreateDestinationRequestFormProperties {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,
		state: FormControl<CreateDestinationResponseState | null | undefined>,

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateCreateDestinationRequestFormGroup() {
		return new FormGroup<CreateDestinationRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			state: new FormControl<CreateDestinationResponseState | null | undefined>(undefined),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface CreateSiteRequest {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Required
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: string;

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description?: string | null;
	}
	export interface CreateSiteRequestFormProperties {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Required
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSiteRequestFormGroup() {
		return new FormGroup<CreateSiteRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[a-zA-Z]{2}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(140)]),
		});

	}

	export interface CreateWorkerFleetRequest {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface CreateWorkerFleetRequestFormProperties {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerFleetRequestFormGroup() {
		return new FormGroup<CreateWorkerFleetRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface CreateWorkerRequest {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		fleet: string;

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties?: string | null;

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;

		/** Properties of the worker that are provided by the vendor FMS. */
		vendorProperties?: VendorProperties;

		/** Supported coordinates for worker position. */
		position?: PositionCoordinates;

		/** Worker orientation measured in units clockwise from north. */
		orientation?: Orientation;
	}
	export interface CreateWorkerRequestFormProperties {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerRequestFormGroup() {
		return new FormGroup<CreateWorkerRequestFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			additionalTransientProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface DeleteDestinationRequest {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;
	}
	export interface DeleteDestinationRequestFormProperties {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDestinationRequestFormGroup() {
		return new FormGroup<DeleteDestinationRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
		});

	}

	export interface DeleteSiteRequest {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;
	}
	export interface DeleteSiteRequestFormProperties {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSiteRequestFormGroup() {
		return new FormGroup<DeleteSiteRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
		});

	}

	export interface DeleteWorkerFleetRequest {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;
	}
	export interface DeleteWorkerFleetRequestFormProperties {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkerFleetRequestFormGroup() {
		return new FormGroup<DeleteWorkerFleetRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
		});

	}

	export interface DeleteWorkerRequest {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;
	}
	export interface DeleteWorkerRequestFormProperties {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkerRequestFormGroup() {
		return new FormGroup<DeleteWorkerRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
		});

	}

	export interface GetDestinationRequest {
	}
	export interface GetDestinationRequestFormProperties {
	}
	export function CreateGetDestinationRequestFormGroup() {
		return new FormGroup<GetDestinationRequestFormProperties>({
		});

	}

	export interface GetSiteRequest {
	}
	export interface GetSiteRequestFormProperties {
	}
	export function CreateGetSiteRequestFormGroup() {
		return new FormGroup<GetSiteRequestFormProperties>({
		});

	}

	export interface GetWorkerFleetRequest {
	}
	export interface GetWorkerFleetRequestFormProperties {
	}
	export function CreateGetWorkerFleetRequestFormGroup() {
		return new FormGroup<GetWorkerFleetRequestFormProperties>({
		});

	}

	export interface GetWorkerRequest {
	}
	export interface GetWorkerRequestFormProperties {
	}
	export function CreateGetWorkerRequestFormGroup() {
		return new FormGroup<GetWorkerRequestFormProperties>({
		});

	}

	export interface ListDestinationsRequest {
	}
	export interface ListDestinationsRequestFormProperties {
	}
	export function CreateListDestinationsRequestFormGroup() {
		return new FormGroup<ListDestinationsRequestFormProperties>({
		});

	}

	export interface ListSitesRequest {
	}
	export interface ListSitesRequestFormProperties {
	}
	export function CreateListSitesRequestFormGroup() {
		return new FormGroup<ListSitesRequestFormProperties>({
		});

	}

	export interface ListWorkerFleetsRequest {
	}
	export interface ListWorkerFleetsRequestFormProperties {
	}
	export function CreateListWorkerFleetsRequestFormGroup() {
		return new FormGroup<ListWorkerFleetsRequestFormProperties>({
		});

	}

	export interface ListWorkersRequest {
	}
	export interface ListWorkersRequestFormProperties {
	}
	export function CreateListWorkersRequestFormGroup() {
		return new FormGroup<ListWorkersRequestFormProperties>({
		});

	}

	export interface UpdateDestinationRequest {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/** State of the destination. */
		state?: CreateDestinationResponseState | null;

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface UpdateDestinationRequestFormProperties {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** State of the destination. */
		state: FormControl<CreateDestinationResponseState | null | undefined>,

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDestinationRequestFormGroup() {
		return new FormGroup<UpdateDestinationRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			state: new FormControl<CreateDestinationResponseState | null | undefined>(undefined),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface UpdateSiteRequest {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode?: string | null;

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description?: string | null;
	}
	export interface UpdateSiteRequestFormProperties {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSiteRequestFormGroup() {
		return new FormGroup<UpdateSiteRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[a-zA-Z]{2}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(140)]),
		});

	}

	export interface UpdateWorkerFleetRequest {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface UpdateWorkerFleetRequestFormProperties {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkerFleetRequestFormGroup() {
		return new FormGroup<UpdateWorkerFleetRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface UpdateWorkerRequest {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties?: string | null;

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;

		/** Properties of the worker that are provided by the vendor FMS. */
		vendorProperties?: VendorProperties;

		/** Supported coordinates for worker position. */
		position?: PositionCoordinates;

		/** Worker orientation measured in units clockwise from north. */
		orientation?: Orientation;
	}
	export interface UpdateWorkerRequestFormProperties {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkerRequestFormGroup() {
		return new FormGroup<UpdateWorkerRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			additionalTransientProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Grants permission to create a destination
		 * Post createDestination
		 * @return {CreateDestinationResponse} Success
		 */
		CreateDestination(requestBody: CreateDestinationPostBody): Observable<CreateDestinationResponse> {
			return this.http.post<CreateDestinationResponse>(this.baseUri + 'createDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to create a site
		 * Post createSite
		 * @return {CreateSiteResponse} Success
		 */
		CreateSite(requestBody: CreateSitePostBody): Observable<CreateSiteResponse> {
			return this.http.post<CreateSiteResponse>(this.baseUri + 'createSite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to create a worker
		 * Post createWorker
		 * @return {CreateWorkerResponse} Success
		 */
		CreateWorker(requestBody: CreateWorkerPostBody): Observable<CreateWorkerResponse> {
			return this.http.post<CreateWorkerResponse>(this.baseUri + 'createWorker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to create a worker fleet
		 * Post createWorkerFleet
		 * @return {CreateWorkerFleetResponse} Success
		 */
		CreateWorkerFleet(requestBody: CreateWorkerFleetPostBody): Observable<CreateWorkerFleetResponse> {
			return this.http.post<CreateWorkerFleetResponse>(this.baseUri + 'createWorkerFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to delete a destination
		 * Post deleteDestination
		 * @return {DeleteDestinationResponse} Success
		 */
		DeleteDestination(requestBody: DeleteDestinationPostBody): Observable<DeleteDestinationResponse> {
			return this.http.post<DeleteDestinationResponse>(this.baseUri + 'deleteDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to delete a site
		 * Post deleteSite
		 * @return {DeleteSiteResponse} Success
		 */
		DeleteSite(requestBody: DeleteSitePostBody): Observable<DeleteSiteResponse> {
			return this.http.post<DeleteSiteResponse>(this.baseUri + 'deleteSite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to delete a worker
		 * Post deleteWorker
		 * @return {DeleteWorkerResponse} Success
		 */
		DeleteWorker(requestBody: DeleteWorkerPostBody): Observable<DeleteWorkerResponse> {
			return this.http.post<DeleteWorkerResponse>(this.baseUri + 'deleteWorker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to delete a worker fleet
		 * Post deleteWorkerFleet
		 * @return {DeleteWorkerFleetResponse} Success
		 */
		DeleteWorkerFleet(requestBody: DeleteWorkerFleetPostBody): Observable<DeleteWorkerFleetResponse> {
			return this.http.post<DeleteWorkerFleetResponse>(this.baseUri + 'deleteWorkerFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to get a destination
		 * Get getDestination#id
		 * @return {GetDestinationResponse} Success
		 */
		GetDestination(id: string): Observable<GetDestinationResponse> {
			return this.http.get<GetDestinationResponse>(this.baseUri + 'getDestination#id?id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Grants permission to get a site
		 * Get getSite#id
		 * @return {GetSiteResponse} Success
		 */
		GetSite(id: string): Observable<GetSiteResponse> {
			return this.http.get<GetSiteResponse>(this.baseUri + 'getSite#id?id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Grants permission to get a worker
		 * Get getWorker#id
		 * @return {GetWorkerResponse} Success
		 */
		GetWorker(id: string): Observable<GetWorkerResponse> {
			return this.http.get<GetWorkerResponse>(this.baseUri + 'getWorker#id?id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Grants permission to get a worker fleet
		 * Get getWorkerFleet#id
		 * @return {GetWorkerFleetResponse} Success
		 */
		GetWorkerFleet(id: string): Observable<GetWorkerFleetResponse> {
			return this.http.get<GetWorkerFleetResponse>(this.baseUri + 'getWorkerFleet#id?id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Grants permission to list destinations
		 * Get listDestinations#site
		 * @return {ListDestinationsResponse} Success
		 */
		ListDestinations(site: string, maxResults: number | null | undefined, nextToken: string | null | undefined, state: CreateDestinationResponseState | null | undefined): Observable<ListDestinationsResponse> {
			return this.http.get<ListDestinationsResponse>(this.baseUri + 'listDestinations#site?site=' + (site == null ? '' : encodeURIComponent(site)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&state=' + state, {});
		}

		/**
		 * Grants permission to list sites
		 * Get listSites
		 * @return {ListSitesResponse} Success
		 */
		ListSites(maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListSitesResponse> {
			return this.http.get<ListSitesResponse>(this.baseUri + 'listSites?maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Grants permission to list worker fleets
		 * Get listWorkerFleets#site
		 * @return {ListWorkerFleetsResponse} Success
		 */
		ListWorkerFleets(site: string, maxResults: number | null | undefined, nextToken: string | null | undefined): Observable<ListWorkerFleetsResponse> {
			return this.http.get<ListWorkerFleetsResponse>(this.baseUri + 'listWorkerFleets#site?site=' + (site == null ? '' : encodeURIComponent(site)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Grants permission to list workers
		 * Get listWorkers#site
		 * @return {ListWorkersResponse} Success
		 */
		ListWorkers(site: string, maxResults: number | null | undefined, nextToken: string | null | undefined, fleet: string | null | undefined): Observable<ListWorkersResponse> {
			return this.http.get<ListWorkersResponse>(this.baseUri + 'listWorkers#site?site=' + (site == null ? '' : encodeURIComponent(site)) + '&maxResults=' + maxResults + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&fleet=' + (fleet == null ? '' : encodeURIComponent(fleet)), {});
		}

		/**
		 * Grants permission to update a destination
		 * Post updateDestination
		 * @return {UpdateDestinationResponse} Success
		 */
		UpdateDestination(requestBody: UpdateDestinationPostBody): Observable<UpdateDestinationResponse> {
			return this.http.post<UpdateDestinationResponse>(this.baseUri + 'updateDestination', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to update a site
		 * Post updateSite
		 * @return {UpdateSiteResponse} Success
		 */
		UpdateSite(requestBody: UpdateSitePostBody): Observable<UpdateSiteResponse> {
			return this.http.post<UpdateSiteResponse>(this.baseUri + 'updateSite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to update a worker
		 * Post updateWorker
		 * @return {UpdateWorkerResponse} Success
		 */
		UpdateWorker(requestBody: UpdateWorkerPostBody): Observable<UpdateWorkerResponse> {
			return this.http.post<UpdateWorkerResponse>(this.baseUri + 'updateWorker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Grants permission to update a worker fleet
		 * Post updateWorkerFleet
		 * @return {UpdateWorkerFleetResponse} Success
		 */
		UpdateWorkerFleet(requestBody: UpdateWorkerFleetPostBody): Observable<UpdateWorkerFleetResponse> {
			return this.http.post<UpdateWorkerFleetResponse>(this.baseUri + 'updateWorkerFleet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateDestinationPostBody {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;

		/** State of the destination. */
		state?: CreateDestinationResponseState | null;

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface CreateDestinationPostBodyFormProperties {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,

		/** State of the destination. */
		state: FormControl<CreateDestinationResponseState | null | undefined>,

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateCreateDestinationPostBodyFormGroup() {
		return new FormGroup<CreateDestinationPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			state: new FormControl<CreateDestinationResponseState | null | undefined>(undefined),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface CreateSitePostBody {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Required
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: string;

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description?: string | null;
	}
	export interface CreateSitePostBodyFormProperties {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Required
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateCreateSitePostBodyFormGroup() {
		return new FormGroup<CreateSitePostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[a-zA-Z]{2}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(140)]),
		});

	}

	export interface CreateWorkerPostBody {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		fleet: string;

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties?: string | null;

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;

		/** Properties of the worker that are provided by the vendor FMS. */
		vendorProperties?: CreateWorkerPostBodyVendorProperties;

		/** Supported coordinates for worker position. */
		position?: CreateWorkerPostBodyPosition;

		/** Worker orientation measured in units clockwise from north. */
		orientation?: CreateWorkerPostBodyOrientation;
	}
	export interface CreateWorkerPostBodyFormProperties {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		fleet: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerPostBodyFormGroup() {
		return new FormGroup<CreateWorkerPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			fleet: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			additionalTransientProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface CreateWorkerPostBodyVendorProperties {

		/**
		 * The worker ID defined by the vendor FMS.
		 * Max length: 255
		 * Min length: 1
		 */
		vendorWorkerId?: string | null;

		/**
		 * The worker IP address defined by the vendor FMS.
		 * Max length: 45
		 * Min length: 1
		 */
		vendorWorkerIpAddress?: string | null;

		/**
		 * JSON blob containing unstructured vendor properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalTransientProperties?: string | null;

		/**
		 * JSON blob containing unstructured vendor properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalFixedProperties?: string | null;
	}
	export interface CreateWorkerPostBodyVendorPropertiesFormProperties {

		/**
		 * The worker ID defined by the vendor FMS.
		 * Max length: 255
		 * Min length: 1
		 */
		vendorWorkerId: FormControl<string | null | undefined>,

		/**
		 * The worker IP address defined by the vendor FMS.
		 * Max length: 45
		 * Min length: 1
		 */
		vendorWorkerIpAddress: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured vendor properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalTransientProperties: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured vendor properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerPostBodyVendorPropertiesFormGroup() {
		return new FormGroup<CreateWorkerPostBodyVendorPropertiesFormProperties>({
			vendorWorkerId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			vendorWorkerIpAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(45)]),
			vendorAdditionalTransientProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
			vendorAdditionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface CreateWorkerPostBodyPosition {
		cartesianCoordinates?: CartesianCoordinates;
	}
	export interface CreateWorkerPostBodyPositionFormProperties {
	}
	export function CreateCreateWorkerPostBodyPositionFormGroup() {
		return new FormGroup<CreateWorkerPostBodyPositionFormProperties>({
		});

	}

	export interface CreateWorkerPostBodyOrientation {
		degrees?: number | null;
	}
	export interface CreateWorkerPostBodyOrientationFormProperties {
		degrees: FormControl<number | null | undefined>,
	}
	export function CreateCreateWorkerPostBodyOrientationFormGroup() {
		return new FormGroup<CreateWorkerPostBodyOrientationFormProperties>({
			degrees: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateWorkerFleetPostBody {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken?: string | null;

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: string;

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: string;

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface CreateWorkerFleetPostBodyFormProperties {

		/**
		 * Token used for detecting replayed requests. Replayed requests will not be performed multiple times.
		 * Max length: 64
		 * Min length: 1
		 */
		clientToken: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		site: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateCreateWorkerFleetPostBodyFormGroup() {
		return new FormGroup<CreateWorkerFleetPostBodyFormProperties>({
			clientToken: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(64), Validators.pattern('[!-~]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			site: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface DeleteDestinationPostBody {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;
	}
	export interface DeleteDestinationPostBodyFormProperties {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDestinationPostBodyFormGroup() {
		return new FormGroup<DeleteDestinationPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
		});

	}

	export interface DeleteSitePostBody {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;
	}
	export interface DeleteSitePostBodyFormProperties {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteSitePostBodyFormGroup() {
		return new FormGroup<DeleteSitePostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
		});

	}

	export interface DeleteWorkerPostBody {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;
	}
	export interface DeleteWorkerPostBodyFormProperties {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkerPostBodyFormGroup() {
		return new FormGroup<DeleteWorkerPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
		});

	}

	export interface DeleteWorkerFleetPostBody {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;
	}
	export interface DeleteWorkerFleetPostBodyFormProperties {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDeleteWorkerFleetPostBodyFormGroup() {
		return new FormGroup<DeleteWorkerFleetPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
		});

	}

	export interface UpdateDestinationPostBody {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/** State of the destination. */
		state?: CreateDestinationResponseState | null;

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface UpdateDestinationPostBodyFormProperties {

		/**
		 * Destination ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/** State of the destination. */
		state: FormControl<CreateDestinationResponseState | null | undefined>,

		/**
		 * JSON document containing additional fixed properties regarding the destination
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDestinationPostBodyFormGroup() {
		return new FormGroup<UpdateDestinationPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$|^arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/destination/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			state: new FormControl<CreateDestinationResponseState | null | undefined>(undefined),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface UpdateSitePostBody {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode?: string | null;

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description?: string | null;
	}
	export interface UpdateSitePostBodyFormProperties {

		/**
		 * Site ARN.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * A valid ISO 3166-1 alpha-2 code for the country in which the site resides. e.g., US.
		 * Max length: 2
		 * Min length: 2
		 */
		countryCode: FormControl<string | null | undefined>,

		/**
		 * A high-level description of the site.
		 * Max length: 140
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSitePostBodyFormGroup() {
		return new FormGroup<UpdateSitePostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			countryCode: new FormControl<string | null | undefined>(undefined, [Validators.minLength(2), Validators.maxLength(2), Validators.pattern('[a-zA-Z]{2}')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(140)]),
		});

	}

	export interface UpdateWorkerPostBody {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties?: string | null;

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;

		/** Properties of the worker that are provided by the vendor FMS. */
		vendorProperties?: UpdateWorkerPostBodyVendorProperties;

		/** Supported coordinates for worker position. */
		position?: UpdateWorkerPostBodyPosition;

		/** Worker orientation measured in units clockwise from north. */
		orientation?: UpdateWorkerPostBodyOrientation;
	}
	export interface UpdateWorkerPostBodyFormProperties {

		/**
		 * Full ARN of the worker.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalTransientProperties: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured worker properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkerPostBodyFormGroup() {
		return new FormGroup<UpdateWorkerPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			additionalTransientProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface UpdateWorkerPostBodyVendorProperties {

		/**
		 * The worker ID defined by the vendor FMS.
		 * Max length: 255
		 * Min length: 1
		 */
		vendorWorkerId?: string | null;

		/**
		 * The worker IP address defined by the vendor FMS.
		 * Max length: 45
		 * Min length: 1
		 */
		vendorWorkerIpAddress?: string | null;

		/**
		 * JSON blob containing unstructured vendor properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalTransientProperties?: string | null;

		/**
		 * JSON blob containing unstructured vendor properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalFixedProperties?: string | null;
	}
	export interface UpdateWorkerPostBodyVendorPropertiesFormProperties {

		/**
		 * The worker ID defined by the vendor FMS.
		 * Max length: 255
		 * Min length: 1
		 */
		vendorWorkerId: FormControl<string | null | undefined>,

		/**
		 * The worker IP address defined by the vendor FMS.
		 * Max length: 45
		 * Min length: 1
		 */
		vendorWorkerIpAddress: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured vendor properties that are transient and may change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalTransientProperties: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing unstructured vendor properties that are fixed and won't change during regular operation.
		 * Max length: 131072
		 * Min length: 1
		 */
		vendorAdditionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkerPostBodyVendorPropertiesFormGroup() {
		return new FormGroup<UpdateWorkerPostBodyVendorPropertiesFormProperties>({
			vendorWorkerId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			vendorWorkerIpAddress: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(45)]),
			vendorAdditionalTransientProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
			vendorAdditionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

	export interface UpdateWorkerPostBodyPosition {
		cartesianCoordinates?: CartesianCoordinates;
	}
	export interface UpdateWorkerPostBodyPositionFormProperties {
	}
	export function CreateUpdateWorkerPostBodyPositionFormGroup() {
		return new FormGroup<UpdateWorkerPostBodyPositionFormProperties>({
		});

	}

	export interface UpdateWorkerPostBodyOrientation {
		degrees?: number | null;
	}
	export interface UpdateWorkerPostBodyOrientationFormProperties {
		degrees: FormControl<number | null | undefined>,
	}
	export function CreateUpdateWorkerPostBodyOrientationFormGroup() {
		return new FormGroup<UpdateWorkerPostBodyOrientationFormProperties>({
			degrees: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UpdateWorkerFleetPostBody {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: string;

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name?: string | null;

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties?: string | null;
	}
	export interface UpdateWorkerFleetPostBodyFormProperties {

		/**
		 * Full ARN of the worker fleet.
		 * Required
		 * Max length: 1011
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Human friendly name of the resource.
		 * Max length: 255
		 * Min length: 1
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * JSON blob containing additional fixed properties regarding the worker fleet
		 * Max length: 131072
		 * Min length: 1
		 */
		additionalFixedProperties: FormControl<string | null | undefined>,
	}
	export function CreateUpdateWorkerFleetPostBodyFormGroup() {
		return new FormGroup<UpdateWorkerFleetPostBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(1011), Validators.pattern('arn:aws:iotroborunner:[\w-]+:\w+:site/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/worker-fleet/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(255)]),
			additionalFixedProperties: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(131072)]),
		});

	}

}

