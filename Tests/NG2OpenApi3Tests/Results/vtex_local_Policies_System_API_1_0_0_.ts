import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account {
		accountType?: AccountType;
		id?: string | null;
		isActive?: boolean | null;
		isOperating?: boolean | null;
		mainAccountName?: string | null;
		name?: string | null;
		operationDate?: Date | null;
	}
	export interface AccountFormProperties {
		accountType: FormControl<AccountType | null | undefined>,
		id: FormControl<string | null | undefined>,
		isActive: FormControl<boolean | null | undefined>,
		isOperating: FormControl<boolean | null | undefined>,
		mainAccountName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		operationDate: FormControl<Date | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			accountType: new FormControl<AccountType | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isActive: new FormControl<boolean | null | undefined>(undefined),
			isOperating: new FormControl<boolean | null | undefined>(undefined),
			mainAccountName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operationDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AccountType { _0 = 0, _1 = 1 }

	export interface EvaluatePolicyRequest {

		/**
		 * Conditions that the Policy needs to satisfy
		 * Required
		 */
		context: string;

		/**
		 * Scope on which this policy must be evaluated
		 * Required
		 */
		resource: string;
	}
	export interface EvaluatePolicyRequestFormProperties {

		/**
		 * Conditions that the Policy needs to satisfy
		 * Required
		 */
		context: FormControl<string | null | undefined>,

		/**
		 * Scope on which this policy must be evaluated
		 * Required
		 */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateEvaluatePolicyRequestFormGroup() {
		return new FormGroup<EvaluatePolicyRequestFormProperties>({
			context: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resource: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PolicyActionGetResponse {

		/** Action ID */
		id?: string | null;

		/** Metadata object from the current action */
		metadata?: string | null;
	}
	export interface PolicyActionGetResponseFormProperties {

		/** Action ID */
		id: FormControl<string | null | undefined>,

		/** Metadata object from the current action */
		metadata: FormControl<string | null | undefined>,
	}
	export function CreatePolicyActionGetResponseFormGroup() {
		return new FormGroup<PolicyActionGetResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicyGetResponse {

		/** Policy description. This description is only for internal use of identification */
		description?: string | null;

		/** Policy ID */
		id?: string | null;

		/** Policy Name */
		name?: string | null;

		/** Requirements to the Policy be applied */
		statements?: Array<StatementGetResponse>;
	}
	export interface PolicyGetResponseFormProperties {

		/** Policy description. This description is only for internal use of identification */
		description: FormControl<string | null | undefined>,

		/** Policy ID */
		id: FormControl<string | null | undefined>,

		/** Policy Name */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePolicyGetResponseFormGroup() {
		return new FormGroup<PolicyGetResponseFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatementGetResponse {

		/** Actions that the Policy will execute */
		actions?: Array<string>;

		/** Condition to activate this policy. This object can have a maximum of ten recursive conditions */
		condition?: StatementGetResponseCondition;

		/**
		 * This field is not functional at the moment. To create a correct request, fill the field with `Allow`
		 * Required
		 */
		effect: string;

		/** This operation will determine if all the conditions need to be valid or at least one of them, if the conditions array is not empty.  The possible values to these fields are `None`, `stringEquals`, `stringEqualsIgnoreCase`, `numericEquals`, `numericLessThan`, `numericLessThanEquals`,   `numericGreaterThan`, `numericGreaterThanEquals`, `bool`, `not`, `or`, `and`, `dateTimeUtcGreaterThan`, `dateTimeUtcLessThan`, and `between` */
		operation?: string | null;

		/** Scope on which this policy must be evaluated */
		resource?: string | null;
	}
	export interface StatementGetResponseFormProperties {

		/**
		 * This field is not functional at the moment. To create a correct request, fill the field with `Allow`
		 * Required
		 */
		effect: FormControl<string | null | undefined>,

		/** This operation will determine if all the conditions need to be valid or at least one of them, if the conditions array is not empty.  The possible values to these fields are `None`, `stringEquals`, `stringEqualsIgnoreCase`, `numericEquals`, `numericLessThan`, `numericLessThanEquals`,   `numericGreaterThan`, `numericGreaterThanEquals`, `bool`, `not`, `or`, `and`, `dateTimeUtcGreaterThan`, `dateTimeUtcLessThan`, and `between` */
		operation: FormControl<string | null | undefined>,

		/** Scope on which this policy must be evaluated */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateStatementGetResponseFormGroup() {
		return new FormGroup<StatementGetResponseFormProperties>({
			effect: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			operation: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatementGetResponseCondition {

		/** List of conditions that will activate the policy */
		StatementGetResponseConditionConditions?: Array<StatementGetResponseConditionConditions>;
	}
	export interface StatementGetResponseConditionFormProperties {
	}
	export function CreateStatementGetResponseConditionFormGroup() {
		return new FormGroup<StatementGetResponseConditionFormProperties>({
		});

	}

	export interface StatementGetResponseConditionConditions {

		/** These are the conditions the actions can have. The possible values are `[]`, `stringEquals`, and `numericGreaterThan` */
		conditions?: Array<string>;

		/** The element that will define what the policy will influence. This field has the possible values `skuId`, `brandId`, `discountPercentage` */
		key?: string | null;

		/** The action of the condition. This operation possible values are `None`, `stringEquals`, `stringEqualsIgnoreCase`, `numericEquals`, `numericLessThan`, `numericLessThanEquals`,   `numericGreaterThan`, `numericGreaterThanEquals`, `bool`, `not`, `or`, `and`, `dateTimeUtcGreaterThan`, `dateTimeUtcLessThan`, and `between` */
		operation?: string | null;

		/** Value of the key */
		values?: Array<string>;
	}
	export interface StatementGetResponseConditionConditionsFormProperties {

		/** The element that will define what the policy will influence. This field has the possible values `skuId`, `brandId`, `discountPercentage` */
		key: FormControl<string | null | undefined>,

		/** The action of the condition. This operation possible values are `None`, `stringEquals`, `stringEqualsIgnoreCase`, `numericEquals`, `numericLessThan`, `numericLessThanEquals`,   `numericGreaterThan`, `numericGreaterThanEquals`, `bool`, `not`, `or`, `and`, `dateTimeUtcGreaterThan`, `dateTimeUtcLessThan`, and `between` */
		operation: FormControl<string | null | undefined>,
	}
	export function CreateStatementGetResponseConditionConditionsFormGroup() {
		return new FormGroup<StatementGetResponseConditionConditionsFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			operation: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PolicySaveRequest {

		/**
		 * Policy description. This description is only for internal use of identification
		 * Required
		 */
		description: string;

		/**
		 * Policy Name
		 * Required
		 */
		name: string;

		/**
		 * Requirements to the Policy be applied
		 * Required
		 */
		statements: Array<StatementGetResponse>;
	}
	export interface PolicySaveRequestFormProperties {

		/**
		 * Policy description. This description is only for internal use of identification
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Policy Name
		 * Required
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePolicySaveRequestFormGroup() {
		return new FormGroup<PolicySaveRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Evaluate Policies
		 * This endpoint consults all policies and checks the ones that satisfy the request body’s conditions.
		 * Post api/policy-engine/evaluate
		 */
		Policy_Evaluate(requestBody: EvaluatePolicyRequest): Observable<Array<PolicyActionGetResponse>> {
			return this.http.post<Array<PolicyActionGetResponse>>(this.baseUri + 'api/policy-engine/evaluate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Policy List
		 * Retrieves a list of all policies in the account and general information of each policy.
		 * Get api/policy-engine/policies
		 */
		Policy_List(): Observable<Array<PolicyGetResponse>> {
			return this.http.get<Array<PolicyGetResponse>>(this.baseUri + 'api/policy-engine/policies', {});
		}

		/**
		 * Delete Policy by ID
		 * Deletes a specific policy of the account by its ID.
		 * Delete api/policy-engine/policies/{id}
		 * @param {string} id Policy ID
		 * @return {void} 200 OK
		 */
		Policy_Delete(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/policy-engine/policies/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Policy by ID
		 * Retrieves general information of a policy by its ID.
		 * Get api/policy-engine/policies/{id}
		 * @param {string} id Policy ID
		 */
		Policy_Get(id: string): Observable<Array<PolicyGetResponse>> {
			return this.http.get<Array<PolicyGetResponse>>(this.baseUri + 'api/policy-engine/policies/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Create Policy
		 * Creates a new policy from scratch.
		 * Post api/policy-engine/policies/{id}
		 * @param {string} id Policy ID
		 * @return {void} 
		 */
		Policy_CreateOrUpdate(id: string, requestBody: PolicySaveRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/policy-engine/policies/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Policy
		 * Updates an existing policy at your account.
		 * Put api/policy-engine/policies/{id}
		 * @param {string} id Policy ID
		 * @return {void} 
		 */
		PolicyPutById(id: string, requestBody: PolicySaveRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/policy-engine/policies/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

