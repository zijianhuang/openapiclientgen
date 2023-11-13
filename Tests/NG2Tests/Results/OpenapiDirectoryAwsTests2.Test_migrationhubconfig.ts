import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateHomeRegionControlResult {

		/** A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set. */
		HomeRegionControl?: HomeRegionControl | null;
	}


	/** A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set. */
	export interface HomeRegionControl {
		ControlId?: string | null;
		HomeRegion?: string | null;

		/** The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>. */
		Target?: Target | null;
		RequestedTime?: Date | null;
	}


	/** The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>. */
	export interface Target {
		Type: TargetType;
		Id?: string | null;
	}

	export enum TargetType { ACCOUNT = 0 }

	export interface CreateHomeRegionControlRequest {
		HomeRegion: string;

		/**
		 * The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.
		 * Required
		 */
		Target: Target;
		DryRun?: boolean | null;
	}

	export interface InternalServerError {
	}

	export interface ServiceUnavailableException {
	}

	export interface AccessDeniedException {
	}

	export interface ThrottlingException {
	}

	export interface DryRunOperation {
	}

	export interface InvalidInputException {
	}

	export interface DescribeHomeRegionControlsResult {
		HomeRegionControls?: Array<HomeRegionControl> | null;
		NextToken?: string | null;
	}

	export interface DescribeHomeRegionControlsRequest {
		ControlId?: string | null;
		HomeRegion?: string | null;

		/** The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>. */
		Target?: Target | null;
		MaxResults?: number | null;
		NextToken?: string | null;
	}

	export interface GetHomeRegionResult {
		HomeRegion?: string | null;
	}

	export interface GetHomeRegionRequest {
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

	export enum CreateHomeRegionControlX_Amz_Target { AWSMigrationHubMultiAccountService_CreateHomeRegionControl = 0 }

	export enum DescribeHomeRegionControlsX_Amz_Target { AWSMigrationHubMultiAccountService_DescribeHomeRegionControls = 0 }

	export enum GetHomeRegionX_Amz_Target { AWSMigrationHubMultiAccountService_GetHomeRegion = 0 }

}

