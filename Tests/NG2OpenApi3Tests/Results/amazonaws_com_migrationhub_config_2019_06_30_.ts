import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateHomeRegionControlResult {
		HomeRegionControl?: HomeRegionControl;
	}
	export interface CreateHomeRegionControlResultFormProperties {
	}
	export function CreateCreateHomeRegionControlResultFormGroup() {
		return new FormGroup<CreateHomeRegionControlResultFormProperties>({
		});

	}


	/** A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set. */
	export interface HomeRegionControl {
		ControlId?: string;
		HomeRegion?: string;
		Target?: Target;
		RequestedTime?: Date;
	}

	/** A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set. */
	export interface HomeRegionControlFormProperties {
		ControlId: FormControl<string | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
		RequestedTime: FormControl<Date | null | undefined>,
	}
	export function CreateHomeRegionControlFormGroup() {
		return new FormGroup<HomeRegionControlFormProperties>({
			ControlId: new FormControl<string | null | undefined>(undefined),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
			RequestedTime: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>. */
	export interface Target {

		/** Required */
		Type: TargetType;
		Id?: string;
	}

	/** The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>. */
	export interface TargetFormProperties {

		/** Required */
		Type: FormControl<TargetType | null | undefined>,
		Id: FormControl<string | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			Type: new FormControl<TargetType | null | undefined>(undefined, [Validators.required]),
			Id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TargetType { ACCOUNT = 0 }

	export interface CreateHomeRegionControlRequest {

		/** Required */
		HomeRegion: string;

		/** Required */
		Target: Target;
		DryRun?: boolean | null;
	}
	export interface CreateHomeRegionControlRequestFormProperties {

		/** Required */
		HomeRegion: FormControl<string | null | undefined>,
		DryRun: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateHomeRegionControlRequestFormGroup() {
		return new FormGroup<CreateHomeRegionControlRequestFormProperties>({
			HomeRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			DryRun: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InternalServerError {
	}
	export interface InternalServerErrorFormProperties {
	}
	export function CreateInternalServerErrorFormGroup() {
		return new FormGroup<InternalServerErrorFormProperties>({
		});

	}

	export interface ServiceUnavailableException {
	}
	export interface ServiceUnavailableExceptionFormProperties {
	}
	export function CreateServiceUnavailableExceptionFormGroup() {
		return new FormGroup<ServiceUnavailableExceptionFormProperties>({
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

	export interface ThrottlingException {
	}
	export interface ThrottlingExceptionFormProperties {
	}
	export function CreateThrottlingExceptionFormGroup() {
		return new FormGroup<ThrottlingExceptionFormProperties>({
		});

	}

	export interface DryRunOperation {
	}
	export interface DryRunOperationFormProperties {
	}
	export function CreateDryRunOperationFormGroup() {
		return new FormGroup<DryRunOperationFormProperties>({
		});

	}

	export interface InvalidInputException {
	}
	export interface InvalidInputExceptionFormProperties {
	}
	export function CreateInvalidInputExceptionFormGroup() {
		return new FormGroup<InvalidInputExceptionFormProperties>({
		});

	}

	export interface DescribeHomeRegionControlsResult {
		HomeRegionControls?: Array<HomeRegionControl>;
		NextToken?: string;
	}
	export interface DescribeHomeRegionControlsResultFormProperties {
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHomeRegionControlsResultFormGroup() {
		return new FormGroup<DescribeHomeRegionControlsResultFormProperties>({
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DescribeHomeRegionControlsRequest {
		ControlId?: string;
		HomeRegion?: string;
		Target?: Target;
		MaxResults?: number | null;
		NextToken?: string;
	}
	export interface DescribeHomeRegionControlsRequestFormProperties {
		ControlId: FormControl<string | null | undefined>,
		HomeRegion: FormControl<string | null | undefined>,
		MaxResults: FormControl<number | null | undefined>,
		NextToken: FormControl<string | null | undefined>,
	}
	export function CreateDescribeHomeRegionControlsRequestFormGroup() {
		return new FormGroup<DescribeHomeRegionControlsRequestFormProperties>({
			ControlId: new FormControl<string | null | undefined>(undefined),
			HomeRegion: new FormControl<string | null | undefined>(undefined),
			MaxResults: new FormControl<number | null | undefined>(undefined),
			NextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetHomeRegionResult {
		HomeRegion?: string;
	}
	export interface GetHomeRegionResultFormProperties {
		HomeRegion: FormControl<string | null | undefined>,
	}
	export function CreateGetHomeRegionResultFormGroup() {
		return new FormGroup<GetHomeRegionResultFormProperties>({
			HomeRegion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetHomeRegionRequest {
	}
	export interface GetHomeRegionRequestFormProperties {
	}
	export function CreateGetHomeRegionRequestFormGroup() {
		return new FormGroup<GetHomeRegionRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * This API sets up the home region for the calling account only.
		 * Post #X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl
		 * @return {CreateHomeRegionControlResult} Success
		 */
		CreateHomeRegionControl(requestBody: CreateHomeRegionControlRequest): Observable<CreateHomeRegionControlResult> {
			return this.http.post<CreateHomeRegionControlResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code> fields.
		 * Post #X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {DescribeHomeRegionControlsResult} Success
		 */
		DescribeHomeRegionControls(MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: DescribeHomeRegionControlsRequest): Observable<DescribeHomeRegionControlsResult> {
			return this.http.post<DescribeHomeRegionControlsResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the calling account’s home region, if configured. This API is used by other AWS services to determine the regional endpoint for calling AWS Application Discovery Service and Migration Hub. You must call <code>GetHomeRegion</code> at least once before you call any other AWS Application Discovery Service and AWS Migration Hub APIs, to obtain the account's Migration Hub home region.
		 * Post #X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion
		 * @return {GetHomeRegionResult} Success
		 */
		GetHomeRegion(requestBody: GetHomeRegionRequest): Observable<GetHomeRegionResult> {
			return this.http.post<GetHomeRegionResult>(this.baseUri + '#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum CreateHomeRegionControlX_Amz_Target { 'AWSMigrationHubMultiAccountService.CreateHomeRegionControl' = 0 }

	export enum DescribeHomeRegionControlsX_Amz_Target { 'AWSMigrationHubMultiAccountService.DescribeHomeRegionControls' = 0 }

	export enum GetHomeRegionX_Amz_Target { 'AWSMigrationHubMultiAccountService.GetHomeRegion' = 0 }

}

