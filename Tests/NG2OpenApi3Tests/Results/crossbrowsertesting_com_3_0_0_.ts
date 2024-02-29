import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Comparison {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		differences?: number | null;
		elements?: Array<Element>;
		error?: boolean | null;
		message?: string | null;
		show_comparisons_public_url?: string | null;
		show_comparisons_web_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tolerance?: number | null;
	}
	export interface ComparisonFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		differences: FormControl<number | null | undefined>,
		error: FormControl<boolean | null | undefined>,
		message: FormControl<string | null | undefined>,
		show_comparisons_public_url: FormControl<string | null | undefined>,
		show_comparisons_web_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		tolerance: FormControl<number | null | undefined>,
	}
	export function CreateComparisonFormGroup() {
		return new FormGroup<ComparisonFormProperties>({
			differences: new FormControl<number | null | undefined>(undefined),
			error: new FormControl<boolean | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			show_comparisons_public_url: new FormControl<string | null | undefined>(undefined),
			show_comparisons_web_url: new FormControl<string | null | undefined>(undefined),
			tolerance: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Element {
		difference?: string | null;
		full_path?: string | null;
		short_path?: string | null;
		show_difference_public_url?: string | null;
		show_difference_web_url?: string | null;
	}
	export interface ElementFormProperties {
		difference: FormControl<string | null | undefined>,
		full_path: FormControl<string | null | undefined>,
		short_path: FormControl<string | null | undefined>,
		show_difference_public_url: FormControl<string | null | undefined>,
		show_difference_web_url: FormControl<string | null | undefined>,
	}
	export function CreateElementFormGroup() {
		return new FormGroup<ElementFormProperties>({
			difference: new FormControl<string | null | undefined>(undefined),
			full_path: new FormControl<string | null | undefined>(undefined),
			short_path: new FormControl<string | null | undefined>(undefined),
			show_difference_public_url: new FormControl<string | null | undefined>(undefined),
			show_difference_web_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Full_comparison_test {
		base?: Full_comparison_testBase;
		targets?: Array<Target>;
	}
	export interface Full_comparison_testFormProperties {
	}
	export function CreateFull_comparison_testFormGroup() {
		return new FormGroup<Full_comparison_testFormProperties>({
		});

	}

	export interface Full_comparison_testBase {
		screenshot?: Screenshot;
	}
	export interface Full_comparison_testBaseFormProperties {
	}
	export function CreateFull_comparison_testBaseFormGroup() {
		return new FormGroup<Full_comparison_testBaseFormProperties>({
		});

	}

	export interface Screenshot {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		screenshot_id?: number | null;
	}
	export interface ScreenshotFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		screenshot_id: FormControl<number | null | undefined>,
	}
	export function CreateScreenshotFormGroup() {
		return new FormGroup<ScreenshotFormProperties>({
			screenshot_id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Target {
		comparison?: Comparison;
		screenshot?: Screenshot;
	}
	export interface TargetFormProperties {
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
		});

	}

	export interface Single_comparison_test {
		base?: Single_comparison_testBase;
		target?: Target;
	}
	export interface Single_comparison_testFormProperties {
	}
	export function CreateSingle_comparison_testFormGroup() {
		return new FormGroup<Single_comparison_testFormProperties>({
		});

	}

	export interface Single_comparison_testBase {
		screenshot?: Screenshot;
	}
	export interface Single_comparison_testBaseFormProperties {
	}
	export function CreateSingle_comparison_testBaseFormGroup() {
		return new FormGroup<Single_comparison_testBaseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Compare Screenshot Test Versions
		 * Get comparison results for all browsers in target screenshot test against the same browser in the base screenshot test. This is a good method for regression testing. For example, you've run a screenshot test against a set of browsers that is "good". Then, after some changes, you run a new screenshot test against the same set of browsers. This method will compare each of the same browsers against each other. For example, IE9 will be compared to IE9 from an earlier test. This is a many-to-many comparison where the OS/Browser/Resolution must match between the two test versions in order for the comparison to return results. The two versions can be from the same screenshot_test_id or not.
		 * Get screenshots/{target_screenshot_test_id}/{target_version_id}/comparison/parallel/{base_version_id}
		 * @param {number} target_screenshot_test_id test id of the target Screenshot Test
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} target_version_id version id of the target Screenshot Test
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} base_version_id version id of the base Screenshot Test
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} format The format of the returned data. Possible values are "json" or "jsonp".
		 * @param {string} callback Name of callback method for JSONP requests.
		 * @param {string} tolerance Used as the basis for detecting box model differences in element positioning and dimensions that should be flagged and reported back to the comparison results. The default is 30px which is a good basis for finding notable layout differences.
		 * @return {Array<Single_comparison_test>} An array of Configuration objects. Within each configuration is an array of browsers
		 */
		Screenshots_target_screenshot_test_id_target_version_idComparisonParallel_base_version_idGetByFormatAndCallbackAndTolerance(target_screenshot_test_id: number, target_version_id: number, base_version_id: number, format: string | null | undefined, callback: string | null | undefined, tolerance: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Single_comparison_test>> {
			return this.http.get<Array<Single_comparison_test>>(this.baseUri + 'screenshots/' + target_screenshot_test_id + '/' + target_version_id + '/comparison/parallel/' + base_version_id + '?format=' + (format == null ? '' : encodeURIComponent(format)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&tolerance=' + (tolerance == null ? '' : encodeURIComponent(tolerance)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Compare Full Screenshot Test
		 * Get comparison results for all browsers in target screenshot test against a base screenshot result. The base result can be from the same test or from another test run at an earlier time. This is a one-to-many comparison.
		 * Get screenshots/{target_screenshot_test_id}/{target_version_id}/comparison/{base_result_id}
		 * @param {number} target_screenshot_test_id test id of the target Screenshot Test
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} target_version_id version id of the target Screenshot Test
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} base_result_id result id of the base Screenshot Test
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} format The format of the returned data. Possible values are "json" or "jsonp".
		 * @param {string} callback Name of callback method for JSONP requests.
		 * @param {string} tolerance Used as the basis for detecting box model differences in element positioning and dimensions that should be flagged and reported back to the comparison results. The default is 30px which is a good basis for finding notable layout differences.
		 * @return {Full_comparison_test} An array of Configuration objects. Within each configuration is an array of browsers
		 */
		Screenshots_target_screenshot_test_id_target_version_idComparison_base_result_idGetByFormatAndCallbackAndTolerance(target_screenshot_test_id: number, target_version_id: number, base_result_id: number, format: string | null | undefined, callback: string | null | undefined, tolerance: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Full_comparison_test> {
			return this.http.get<Full_comparison_test>(this.baseUri + 'screenshots/' + target_screenshot_test_id + '/' + target_version_id + '/comparison/' + base_result_id + '?format=' + (format == null ? '' : encodeURIComponent(format)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&tolerance=' + (tolerance == null ? '' : encodeURIComponent(tolerance)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Compare Single Screenshot
		 * Get comparison results for a single target screenshot result against a base screenshot result. This is a one-to-one comparison.
		 * Get screenshots/{target_screenshot_test_id}/{target_version_id}/{target_result_id}/comparison/{base_result_id}
		 * @param {number} target_screenshot_test_id test id of the target Screenshot Test
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} target_version_id version id of the target Screenshot Test
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} target_result_id result id of the target Screenshot Test
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} base_result_id result id of the base Screenshot Test
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} format The format of the returned data. Possible values are "json" or "jsonp".
		 * @param {string} callback Name of callback method for JSONP requests.
		 * @param {string} tolerance Used as the basis for detecting box model differences in element positioning and dimensions that should be flagged and reported back to the comparison results. The default is 30px which is a good basis for finding notable layout differences.
		 * @return {Single_comparison_test} An array of Configuration objects. Within each configuration is an array of browsers
		 */
		Screenshots_target_screenshot_test_id_target_version_id_target_result_idComparison_base_result_idGetByFormatAndCallbackAndTolerance(target_screenshot_test_id: number, target_version_id: number, target_result_id: number, base_result_id: number, format: string | null | undefined, callback: string | null | undefined, tolerance: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Single_comparison_test> {
			return this.http.get<Single_comparison_test>(this.baseUri + 'screenshots/' + target_screenshot_test_id + '/' + target_version_id + '/' + target_result_id + '/comparison/' + base_result_id + '?format=' + (format == null ? '' : encodeURIComponent(format)) + '&callback=' + (callback == null ? '' : encodeURIComponent(callback)) + '&tolerance=' + (tolerance == null ? '' : encodeURIComponent(tolerance)), { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

