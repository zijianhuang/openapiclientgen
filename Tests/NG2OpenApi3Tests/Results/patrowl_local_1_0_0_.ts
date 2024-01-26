import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiResponse {
		page?: string | null;
		status?: string | null;
	}
	export interface ApiResponseFormProperties {
		page: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateApiResponseFormGroup() {
		return new FormGroup<ApiResponseFormProperties>({
			page: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FindingsElement {
		confidence?: string | null;
		description?: string | null;
		issue_id?: number | null;
		meta_links?: Array<string>;
		meta_risk?: FindingsElementMeta_risk;
		meta_tags?: Array<string>;
		meta_vuln_refs?: FindingsElementMeta_vuln_refs;
		raw?: string | null;
		severity?: FindingsElementSeverity | null;
		solution?: string | null;
		target_addrs?: Array<string>;
		target_proto?: Array<string>;
		timestamp?: Date | null;
		title?: string | null;
		type?: string | null;
	}
	export interface FindingsElementFormProperties {
		confidence: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		issue_id: FormControl<number | null | undefined>,
		raw: FormControl<string | null | undefined>,
		severity: FormControl<FindingsElementSeverity | null | undefined>,
		solution: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateFindingsElementFormGroup() {
		return new FormGroup<FindingsElementFormProperties>({
			confidence: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			issue_id: new FormControl<number | null | undefined>(undefined),
			raw: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingsElementSeverity | null | undefined>(undefined),
			solution: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FindingsElementMeta_risk {
		cvss_base_score?: Array<string>;
		cvss_vector?: Array<string>;
		exploit_available?: Array<string>;
		exploitability_ease?: Array<string>;
		patch_publication_date?: Array<string>;
	}
	export interface FindingsElementMeta_riskFormProperties {
	}
	export function CreateFindingsElementMeta_riskFormGroup() {
		return new FormGroup<FindingsElementMeta_riskFormProperties>({
		});

	}

	export interface FindingsElementMeta_vuln_refs {
		bid?: Array<string>;
		cpe?: Array<string>;
		cve?: Array<string>;
		cwe?: Array<string>;
	}
	export interface FindingsElementMeta_vuln_refsFormProperties {
	}
	export function CreateFindingsElementMeta_vuln_refsFormGroup() {
		return new FormGroup<FindingsElementMeta_vuln_refsFormProperties>({
		});

	}

	export enum FindingsElementSeverity { info = 0, low = 1, medium = 2, high = 3 }

	export interface ScanDefinition {
		ScanDefinitionAssets?: Array<ScanDefinitionAssets>;
		options?: string | null;
		scan_id?: number | null;
	}
	export interface ScanDefinitionFormProperties {
		options: FormControl<string | null | undefined>,
		scan_id: FormControl<number | null | undefined>,
	}
	export function CreateScanDefinitionFormGroup() {
		return new FormGroup<ScanDefinitionFormProperties>({
			options: new FormControl<string | null | undefined>(undefined),
			scan_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScanDefinitionAssets {
		criticity?: ScanDefinitionAssetsCriticity | null;
		datatype?: ScanDefinitionAssetsDatatype | null;
		id?: string | null;
		value?: string | null;
	}
	export interface ScanDefinitionAssetsFormProperties {
		criticity: FormControl<ScanDefinitionAssetsCriticity | null | undefined>,
		datatype: FormControl<ScanDefinitionAssetsDatatype | null | undefined>,
		id: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateScanDefinitionAssetsFormGroup() {
		return new FormGroup<ScanDefinitionAssetsFormProperties>({
			criticity: new FormControl<ScanDefinitionAssetsCriticity | null | undefined>(undefined),
			datatype: new FormControl<ScanDefinitionAssetsDatatype | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScanDefinitionAssetsCriticity { low = 0, medium = 1, high = 2 }

	export enum ScanDefinitionAssetsDatatype { ip = 0, 'ip-range' = 1, 'ip-subnet' = 2, fqdn = 3, domain = 4, url = 5, keyword = 6, person = 7, organisation = 8, path = 9, application = 10 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Index page
		 * Return index page
		 * Get 
		 * @return {ApiResponse} successful operation
		 */
		GetDefaultPage(): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + '', {});
		}

		/**
		 * Clean all scans
		 * Clean all current scans.
		 * Get clean
		 * @return {ApiResponse} successful operation
		 */
		CleanScansPage(): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'clean', {});
		}

		/**
		 * Clean scan
		 * Clean scan identified by id.
		 * Get clean/{scanId}
		 * @param {number} scanId Numeric ID of the scan to clean
		 * @return {ApiResponse} successful operation
		 */
		CleanScanPage(scanId: number): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'clean/' + scanId, {});
		}

		/**
		 * Get findings on finished scans
		 * Get findings on finished scans.
		 * Get getfindings/{scanId}
		 * @param {number} scanId Numeric ID of the scan to get findings
		 * @return {Array<GetFindingPageReturn>} successful operation
		 */
		GetFindingPage(scanId: number): Observable<Array<GetFindingPageReturn>> {
			return this.http.get<Array<GetFindingPageReturn>>(this.baseUri + 'getfindings/' + scanId, {});
		}

		/**
		 * Engine info page
		 * Return information on engine.
		 * Get info
		 * @return {ApiResponse} successful operation
		 */
		GetInfoPage(): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'info', {});
		}

		/**
		 * Liveness page
		 * Return liveness page
		 * Get liveness
		 * @return {void} successful operation
		 */
		GetLivenessPage(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'liveness', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Readiness page
		 * Return liveness page
		 * Get readiness
		 * @return {void} successful operation
		 */
		GetReadinessPage(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'readiness', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Configuration reloading page
		 * Reload the configuration file.
		 * Get reloadconfig
		 * @return {ApiResponse} successful operation
		 */
		ReloadConfigurationPage(): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'reloadconfig', {});
		}

		/**
		 * Start a new scan
		 * Start a new scan.
		 * Post startscan
		 * @return {ApiResponse} successful operation
		 */
		StartScanPage(requestBody: ScanDefinition): Observable<ApiResponse> {
			return this.http.post<ApiResponse>(this.baseUri + 'startscan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Status on all scans
		 * Status all current scans.
		 * Get status
		 * @return {ApiResponse} successful operation
		 */
		StatusScansPage(): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'status', {});
		}

		/**
		 * Status of a scan
		 * Status of a scan identified by id.
		 * Get status/{scanId}
		 * @param {number} scanId Numeric ID of the scan to get status
		 * @return {ApiResponse} successful operation
		 */
		StatusScanPage(scanId: number): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'status/' + scanId, {});
		}

		/**
		 * Stop a scan
		 * Stop a scan identified by id.
		 * Get stop/{scanId}
		 * @param {number} scanId Numeric ID of the scan to stop
		 * @return {ApiResponse} successful operation
		 */
		StopScanPage(scanId: number): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'stop/' + scanId, {});
		}

		/**
		 * Stop all scans
		 * Stop all current scans.
		 * Get stopscans
		 * @return {ApiResponse} successful operation
		 */
		StopScansPage(): Observable<ApiResponse> {
			return this.http.get<ApiResponse>(this.baseUri + 'stopscans', {});
		}

		/**
		 * Test page
		 * Return test page
		 * Get test
		 * @return {void} successful operation
		 */
		GetTestPage(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'test', { observe: 'response', responseType: 'text' });
		}
	}

	export interface GetFindingPageReturn {
		confidence?: string | null;
		description?: string | null;
		issue_id?: number | null;
		meta_links?: Array<string>;
		meta_risk?: GetFindingPageReturnMeta_risk;
		meta_tags?: Array<string>;
		meta_vuln_refs?: GetFindingPageReturnMeta_vuln_refs;
		raw?: string | null;
		severity?: FindingsElementSeverity | null;
		solution?: string | null;
		target_addrs?: Array<string>;
		target_proto?: Array<string>;
		timestamp?: Date | null;
		title?: string | null;
		type?: string | null;
	}
	export interface GetFindingPageReturnFormProperties {
		confidence: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		issue_id: FormControl<number | null | undefined>,
		raw: FormControl<string | null | undefined>,
		severity: FormControl<FindingsElementSeverity | null | undefined>,
		solution: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateGetFindingPageReturnFormGroup() {
		return new FormGroup<GetFindingPageReturnFormProperties>({
			confidence: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			issue_id: new FormControl<number | null | undefined>(undefined),
			raw: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingsElementSeverity | null | undefined>(undefined),
			solution: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetFindingPageReturnMeta_risk {
		cvss_base_score?: Array<string>;
		cvss_vector?: Array<string>;
		exploit_available?: Array<string>;
		exploitability_ease?: Array<string>;
		patch_publication_date?: Array<string>;
	}
	export interface GetFindingPageReturnMeta_riskFormProperties {
	}
	export function CreateGetFindingPageReturnMeta_riskFormGroup() {
		return new FormGroup<GetFindingPageReturnMeta_riskFormProperties>({
		});

	}

	export interface GetFindingPageReturnMeta_vuln_refs {
		bid?: Array<string>;
		cpe?: Array<string>;
		cve?: Array<string>;
		cwe?: Array<string>;
	}
	export interface GetFindingPageReturnMeta_vuln_refsFormProperties {
	}
	export function CreateGetFindingPageReturnMeta_vuln_refsFormGroup() {
		return new FormGroup<GetFindingPageReturnMeta_vuln_refsFormProperties>({
		});

	}

}

