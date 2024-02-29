import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface _400 {

		/**
		 * The error code name
		 * Required
		 * Min length: 1
		 */
		code: string;

		/** Errors that may have been generated during the parse, compile, or installation of a policy module */
		_400Errors?: Array<_400Errors>;

		/**
		 * The description of the error
		 * Required
		 * Min length: 1
		 */
		message: string;
	}
	export interface _400FormProperties {

		/**
		 * The error code name
		 * Required
		 * Min length: 1
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The description of the error
		 * Required
		 * Min length: 1
		 */
		message: FormControl<string | null | undefined>,
	}
	export function Create_400FormGroup() {
		return new FormGroup<_400FormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface _400Errors {

		/**
		 * The error code name
		 * Min length: 1
		 */
		code?: string | null;

		/** Where the error occurred */
		location?: _400ErrorsLocation;

		/**
		 * A general description of the error
		 * Min length: 1
		 */
		message?: string | null;
	}
	export interface _400ErrorsFormProperties {

		/**
		 * The error code name
		 * Min length: 1
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * A general description of the error
		 * Min length: 1
		 */
		message: FormControl<string | null | undefined>,
	}
	export function Create_400ErrorsFormGroup() {
		return new FormGroup<_400ErrorsFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface _400ErrorsLocation {

		/**
		 * The column in the policy module where the error occurred
		 * Type: double
		 */
		col?: number | null;

		/** The policy module name that generated the error */
		file?: string | null;

		/**
		 * The line number in the policy module where the error occurred
		 * Type: double
		 */
		row?: number | null;
	}
	export interface _400ErrorsLocationFormProperties {

		/**
		 * The column in the policy module where the error occurred
		 * Type: double
		 */
		col: FormControl<number | null | undefined>,

		/** The policy module name that generated the error */
		file: FormControl<string | null | undefined>,

		/**
		 * The line number in the policy module where the error occurred
		 * Type: double
		 */
		row: FormControl<number | null | undefined>,
	}
	export function Create_400ErrorsLocationFormGroup() {
		return new FormGroup<_400ErrorsLocationFormProperties>({
			col: new FormControl<number | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			row: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface _404 {

		/**
		 * The error code name
		 * Required
		 * Min length: 1
		 */
		code: string;

		/**
		 * The description of the error (including the name of any undefined policy module)
		 * Required
		 * Min length: 1
		 */
		message: string;
	}
	export interface _404FormProperties {

		/**
		 * The error code name
		 * Required
		 * Min length: 1
		 */
		code: FormControl<string | null | undefined>,

		/**
		 * The description of the error (including the name of any undefined policy module)
		 * Required
		 * Min length: 1
		 */
		message: FormControl<string | null | undefined>,
	}
	export function Create_404FormGroup() {
		return new FormGroup<_404FormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface _200Explanations {
		_200ExplanationsExplanation?: Array<_200ExplanationsExplanation>;
	}
	export interface _200ExplanationsFormProperties {
	}
	export function Create_200ExplanationsFormGroup() {
		return new FormGroup<_200ExplanationsFormProperties>({
		});

	}

	export interface _200ExplanationsExplanation {

		/** The query's term bindings at the point when the trace event was emitted. */
		_200ExplanationsExplanationLocals?: Array<_200ExplanationsExplanationLocals>;

		/** The AST element associated with the evaluation step. */
		node?: _200ExplanationsExplanationNode;

		/**
		 * The kind of *trace event*
		 * Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:
		 * - enter - before a body or rule is evaluated
		 * - exit - after a body or rule has evaluated successfully
		 * - eval - before an expression is evaluated
		 * - fail - after an expression has evaluated to false.
		 * - redo - before evaluation restarts from a body, rule, or expression.
		 * By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.
		 */
		op?: _200ExplanationsExplanationOp | null;

		/**
		 * The parent query. Use this field to identify trace events from related queries.
		 * For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.
		 * Minimum: 0
		 */
		parent_id?: number | null;

		/**
		 * The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.
		 * Minimum: 0
		 */
		query_id?: number | null;

		/** The type of the **node** field */
		type?: _200ExplanationsExplanationType | null;
	}
	export interface _200ExplanationsExplanationFormProperties {

		/**
		 * The kind of *trace event*
		 * Each trace event represents a step in the query evaluation process. Trace events are emitted at the following points:
		 * - enter - before a body or rule is evaluated
		 * - exit - after a body or rule has evaluated successfully
		 * - eval - before an expression is evaluated
		 * - fail - after an expression has evaluated to false.
		 * - redo - before evaluation restarts from a body, rule, or expression.
		 * By default, OPA searches for all sets of term bindings that make all expressions in the query evaluate to true. Because there may be multiple answers, the search can restart when OPA determines the query is true or false. When the search restarts, a *redo trace event* is emitted.
		 */
		op: FormControl<_200ExplanationsExplanationOp | null | undefined>,

		/**
		 * The parent query. Use this field to identify trace events from related queries.
		 * For example, if query A references rule R, trace events emitted when evaluating rule R will have the *parent_id* field set to query A’s *query_id*.
		 * Minimum: 0
		 */
		parent_id: FormControl<number | null | undefined>,

		/**
		 * The query that the trace event was emitted for. Use this field to distinguish trace events emitted by from different queries.
		 * Minimum: 0
		 */
		query_id: FormControl<number | null | undefined>,

		/** The type of the **node** field */
		type: FormControl<_200ExplanationsExplanationType | null | undefined>,
	}
	export function Create_200ExplanationsExplanationFormGroup() {
		return new FormGroup<_200ExplanationsExplanationFormProperties>({
			op: new FormControl<_200ExplanationsExplanationOp | null | undefined>(undefined),
			parent_id: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			query_id: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			type: new FormControl<_200ExplanationsExplanationType | null | undefined>(undefined),
		});

	}

	export interface _200ExplanationsExplanationLocals {
		key?: _200ExplanationsExplanationLocalsKey;
		value?: _200ExplanationsExplanationLocalsValue;
	}
	export interface _200ExplanationsExplanationLocalsFormProperties {
	}
	export function Create_200ExplanationsExplanationLocalsFormGroup() {
		return new FormGroup<_200ExplanationsExplanationLocalsFormProperties>({
		});

	}

	export interface _200ExplanationsExplanationLocalsKey {
		type?: string | null;
		value?: string | null;
	}
	export interface _200ExplanationsExplanationLocalsKeyFormProperties {
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function Create_200ExplanationsExplanationLocalsKeyFormGroup() {
		return new FormGroup<_200ExplanationsExplanationLocalsKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _200ExplanationsExplanationLocalsValue {
		type?: string | null;
		value?: string | null;
	}
	export interface _200ExplanationsExplanationLocalsValueFormProperties {
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function Create_200ExplanationsExplanationLocalsValueFormGroup() {
		return new FormGroup<_200ExplanationsExplanationLocalsValueFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _200ExplanationsExplanationNode {

		/**
		 * Node number
		 * Type: double
		 */
		index?: number | null;
		_200ExplanationsExplanationNodeTerms?: Array<_200ExplanationsExplanationNodeTerms>;
	}
	export interface _200ExplanationsExplanationNodeFormProperties {

		/**
		 * Node number
		 * Type: double
		 */
		index: FormControl<number | null | undefined>,
	}
	export function Create_200ExplanationsExplanationNodeFormGroup() {
		return new FormGroup<_200ExplanationsExplanationNodeFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface _200ExplanationsExplanationNodeTerms {
		type?: string | null;
		value?: string | null;
	}
	export interface _200ExplanationsExplanationNodeTermsFormProperties {
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function Create_200ExplanationsExplanationNodeTermsFormGroup() {
		return new FormGroup<_200ExplanationsExplanationNodeTermsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum _200ExplanationsExplanationOp { enter = 'enter', exit = 'exit', eval = 'eval', fail = 'fail', redo = 'redo' }

	export enum _200ExplanationsExplanationType { expr = 'expr', rule = 'rule', body = 'body' }

	export interface _200Metrics {
		metrics?: _200MetricsMetrics;
	}
	export interface _200MetricsFormProperties {
	}
	export function Create_200MetricsFormGroup() {
		return new FormGroup<_200MetricsFormProperties>({
		});

	}

	export interface _200MetricsMetrics {

		/**
		 * *Description is forthcoming*
		 * Type: double
		 */
		counter_server_query_cache_hit?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_build_comprehension_index_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_check_safety_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_check_types_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_check_undefined_funcs_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_check_unsafe_builtins_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_resolve_refs_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_comprehension_terms_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_dynamic_terms_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_expr_terms_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_local_vars_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_to_capture_value_ns?: number | null;

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_with_values_ns?: number | null;

		/**
		 * Time taken (in nanonseconds) to parse the input
		 * Type: double
		 */
		timer_rego_input_parse_ns?: number | null;

		/**
		 * Time taken (in nanonseconds) to compile the loaded policy modules
		 * Type: double
		 */
		timer_rego_module_compile_ns?: number | null;

		/**
		 * Time taken (in nanoseconds) to parse the input policy module
		 * Type: double
		 */
		timer_rego_module_parse_ns?: number | null;

		/**
		 * Time taken (in nanoseconds) to compile the query
		 * Type: double
		 */
		timer_rego_query_compile_ns?: number | null;

		/**
		 * Time taken (in nanonseconds) to evaluate the query
		 * Type: double
		 */
		timer_rego_query_eval_ns?: number | null;

		/**
		 * Time taken (in nanoseconds) to parse the query
		 * Type: double
		 */
		timer_rego_query_parse_ns?: number | null;

		/**
		 * Time taken (in nanoseconds) to handle the API request
		 * Type: double
		 */
		timer_server_handler_ns?: number | null;

		/**
		 * *Description is forthcoming*
		 * Type: double
		 */
		timer_server_read_bytes_ns?: number | null;
	}
	export interface _200MetricsMetricsFormProperties {

		/**
		 * *Description is forthcoming*
		 * Type: double
		 */
		counter_server_query_cache_hit: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_build_comprehension_index_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_check_safety_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_check_types_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_check_undefined_funcs_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_check_unsafe_builtins_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_resolve_refs_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_comprehension_terms_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_dynamic_terms_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_expr_terms_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_local_vars_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_to_capture_value_ns: FormControl<number | null | undefined>,

		/**
		 * (Only returned if `instrument` is true.) *Description is forthcoming*
		 * Type: double
		 */
		timer_query_compile_stage_rewrite_with_values_ns: FormControl<number | null | undefined>,

		/**
		 * Time taken (in nanonseconds) to parse the input
		 * Type: double
		 */
		timer_rego_input_parse_ns: FormControl<number | null | undefined>,

		/**
		 * Time taken (in nanonseconds) to compile the loaded policy modules
		 * Type: double
		 */
		timer_rego_module_compile_ns: FormControl<number | null | undefined>,

		/**
		 * Time taken (in nanoseconds) to parse the input policy module
		 * Type: double
		 */
		timer_rego_module_parse_ns: FormControl<number | null | undefined>,

		/**
		 * Time taken (in nanoseconds) to compile the query
		 * Type: double
		 */
		timer_rego_query_compile_ns: FormControl<number | null | undefined>,

		/**
		 * Time taken (in nanonseconds) to evaluate the query
		 * Type: double
		 */
		timer_rego_query_eval_ns: FormControl<number | null | undefined>,

		/**
		 * Time taken (in nanoseconds) to parse the query
		 * Type: double
		 */
		timer_rego_query_parse_ns: FormControl<number | null | undefined>,

		/**
		 * Time taken (in nanoseconds) to handle the API request
		 * Type: double
		 */
		timer_server_handler_ns: FormControl<number | null | undefined>,

		/**
		 * *Description is forthcoming*
		 * Type: double
		 */
		timer_server_read_bytes_ns: FormControl<number | null | undefined>,
	}
	export function Create_200MetricsMetricsFormGroup() {
		return new FormGroup<_200MetricsMetricsFormProperties>({
			counter_server_query_cache_hit: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_build_comprehension_index_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_check_safety_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_check_types_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_check_undefined_funcs_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_check_unsafe_builtins_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_resolve_refs_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_rewrite_comprehension_terms_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_rewrite_dynamic_terms_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_rewrite_expr_terms_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_rewrite_local_vars_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_rewrite_to_capture_value_ns: new FormControl<number | null | undefined>(undefined),
			timer_query_compile_stage_rewrite_with_values_ns: new FormControl<number | null | undefined>(undefined),
			timer_rego_input_parse_ns: new FormControl<number | null | undefined>(undefined),
			timer_rego_module_compile_ns: new FormControl<number | null | undefined>(undefined),
			timer_rego_module_parse_ns: new FormControl<number | null | undefined>(undefined),
			timer_rego_query_compile_ns: new FormControl<number | null | undefined>(undefined),
			timer_rego_query_eval_ns: new FormControl<number | null | undefined>(undefined),
			timer_rego_query_parse_ns: new FormControl<number | null | undefined>(undefined),
			timer_server_handler_ns: new FormControl<number | null | undefined>(undefined),
			timer_server_read_bytes_ns: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface _200Provenance {
		provenance?: _200ProvenanceProvenance;
	}
	export interface _200ProvenanceFormProperties {
	}
	export function Create_200ProvenanceFormGroup() {
		return new FormGroup<_200ProvenanceFormProperties>({
		});

	}

	export interface _200ProvenanceProvenance {

		/** The Git commit id of this OPA build. */
		build_commit?: string | null;

		/** The hostname where this instance was built. */
		build_hostname?: string | null;

		/** When this OPA instance was built (in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime)) */
		build_timestamp?: string | null;

		/** A set of key-value pairs describing each bundle activated on the server. */
		bundles?: {[id: string]: any };

		/** The version of this OPA instance */
		version?: string | null;
	}
	export interface _200ProvenanceProvenanceFormProperties {

		/** The Git commit id of this OPA build. */
		build_commit: FormControl<string | null | undefined>,

		/** The hostname where this instance was built. */
		build_hostname: FormControl<string | null | undefined>,

		/** When this OPA instance was built (in [ISO8601 format](https://www.w3.org/TR/NOTE-datetime)) */
		build_timestamp: FormControl<string | null | undefined>,

		/** A set of key-value pairs describing each bundle activated on the server. */
		bundles: FormControl<{[id: string]: any } | null | undefined>,

		/** The version of this OPA instance */
		version: FormControl<string | null | undefined>,
	}
	export function Create_200ProvenanceProvenanceFormGroup() {
		return new FormGroup<_200ProvenanceProvenanceFormProperties>({
			build_commit: new FormControl<string | null | undefined>(undefined),
			build_hostname: new FormControl<string | null | undefined>(undefined),
			build_timestamp: new FormControl<string | null | undefined>(undefined),
			bundles: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _200Result {
		_200ResultResult?: Array<_200ResultResult>;
	}
	export interface _200ResultFormProperties {
	}
	export function Create_200ResultFormGroup() {
		return new FormGroup<_200ResultFormProperties>({
		});

	}

	export interface _200ResultResult {

		/** The types for declarations and runtime objects passed to your implementation. This consists of an abstract syntax tree (AST) of policy modules, package and import declarations, rules, expressions, and terms. */
		ast?: _200ResultResultAst;

		/**
		 * The name of a policy module
		 * Min length: 1
		 */
		id?: string | null;

		/**
		 * A string representation of the full Rego policy
		 * Min length: 1
		 */
		raw?: string | null;
	}
	export interface _200ResultResultFormProperties {

		/**
		 * The name of a policy module
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * A string representation of the full Rego policy
		 * Min length: 1
		 */
		raw: FormControl<string | null | undefined>,
	}
	export function Create_200ResultResultFormGroup() {
		return new FormGroup<_200ResultResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			raw: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface _200ResultResultAst {
		package?: _200ResultResultAstPackage;

		/** When OPA evaluates a rule, it generates the content of a [virtual documents](https://www.openpolicyagent.org/docs/latest/philosophy/#the-opa-document-model) */
		_200ResultResultAstRules?: Array<_200ResultResultAstRules>;
	}
	export interface _200ResultResultAstFormProperties {
	}
	export function Create_200ResultResultAstFormGroup() {
		return new FormGroup<_200ResultResultAstFormProperties>({
		});

	}

	export interface _200ResultResultAstPackage {

		/** The path to the package */
		_200ResultResultAstPackagePath?: Array<_200ResultResultAstPackagePath>;
	}
	export interface _200ResultResultAstPackageFormProperties {
	}
	export function Create_200ResultResultAstPackageFormGroup() {
		return new FormGroup<_200ResultResultAstPackageFormProperties>({
		});

	}

	export interface _200ResultResultAstPackagePath {

		/** The type of the path operation */
		type?: _200ResultResultAstPackagePathType | null;

		/** The path variable */
		value?: string | null;
	}
	export interface _200ResultResultAstPackagePathFormProperties {

		/** The type of the path operation */
		type: FormControl<_200ResultResultAstPackagePathType | null | undefined>,

		/** The path variable */
		value: FormControl<string | null | undefined>,
	}
	export function Create_200ResultResultAstPackagePathFormGroup() {
		return new FormGroup<_200ResultResultAstPackagePathFormProperties>({
			type: new FormControl<_200ResultResultAstPackagePathType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum _200ResultResultAstPackagePathType { import = 'import', package = 'package' }

	export interface _200ResultResultAstRules {

		/** A list of the terms in this rule */
		_200ResultResultAstRulesBody?: Array<_200ResultResultAstRulesBody>;
		head?: _200ResultResultAstRulesHead;
	}
	export interface _200ResultResultAstRulesFormProperties {
	}
	export function Create_200ResultResultAstRulesFormGroup() {
		return new FormGroup<_200ResultResultAstRulesFormProperties>({
		});

	}

	export interface _200ResultResultAstRulesBody {

		/**
		 * The location of this term in the list (starts at 0)
		 * Type: double
		 */
		index?: number | null;

		/** The type/value pairing for this term */
		_200ResultResultAstRulesBodyTerms?: Array<_200ResultResultAstRulesBodyTerms>;
	}
	export interface _200ResultResultAstRulesBodyFormProperties {

		/**
		 * The location of this term in the list (starts at 0)
		 * Type: double
		 */
		index: FormControl<number | null | undefined>,
	}
	export function Create_200ResultResultAstRulesBodyFormGroup() {
		return new FormGroup<_200ResultResultAstRulesBodyFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface _200ResultResultAstRulesBodyTerms {

		/** The type of the term variable */
		type?: string | null;

		/** The list of types and values for the term variable */
		_200ResultResultAstRulesBodyTermsValue?: Array<_200ResultResultAstRulesBodyTermsValue>;
	}
	export interface _200ResultResultAstRulesBodyTermsFormProperties {

		/** The type of the term variable */
		type: FormControl<string | null | undefined>,
	}
	export function Create_200ResultResultAstRulesBodyTermsFormGroup() {
		return new FormGroup<_200ResultResultAstRulesBodyTermsFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _200ResultResultAstRulesBodyTermsValue {
		type?: string | null;
		value?: string | null;
	}
	export interface _200ResultResultAstRulesBodyTermsValueFormProperties {
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function Create_200ResultResultAstRulesBodyTermsValueFormGroup() {
		return new FormGroup<_200ResultResultAstRulesBodyTermsValueFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _200ResultResultAstRulesHead {

		/** The type/value pairing for this rule's head */
		key?: _200ResultResultAstRulesHeadKey;

		/** The head of the rule */
		name?: string | null;
	}
	export interface _200ResultResultAstRulesHeadFormProperties {

		/** The head of the rule */
		name: FormControl<string | null | undefined>,
	}
	export function Create_200ResultResultAstRulesHeadFormGroup() {
		return new FormGroup<_200ResultResultAstRulesHeadFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _200ResultResultAstRulesHeadKey {

		/** The type of the head */
		type?: string | null;

		/** The value of the head */
		value?: string | null;
	}
	export interface _200ResultResultAstRulesHeadKeyFormProperties {

		/** The type of the head */
		type: FormControl<string | null | undefined>,

		/** The value of the head */
		value: FormControl<string | null | undefined>,
	}
	export function Create_200ResultResultAstRulesHeadKeyFormGroup() {
		return new FormGroup<_200ResultResultAstRulesHeadKeyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _200SingleResult {
		result?: _200SingleResultResult;
	}
	export interface _200SingleResultFormProperties {
	}
	export function Create_200SingleResultFormGroup() {
		return new FormGroup<_200SingleResultFormProperties>({
		});

	}

	export interface _200SingleResultResult {

		/** Bundles */
		bundles?: _200SingleResultResultBundles;

		/** Logs */
		decision_logs?: _200SingleResultResultDecision_logs;
		default_authorization_decision?: string | null;
		default_decision?: string | null;

		/** Keys */
		keys?: _200SingleResultResultKeys;

		/** Labels */
		labels?: _200SingleResultResultLabels;

		/** The types of services */
		services?: _200SingleResultResultServices;

		/** Status */
		status?: _200SingleResultResultStatus;
	}
	export interface _200SingleResultResultFormProperties {
		default_authorization_decision: FormControl<string | null | undefined>,
		default_decision: FormControl<string | null | undefined>,
	}
	export function Create_200SingleResultResultFormGroup() {
		return new FormGroup<_200SingleResultResultFormProperties>({
			default_authorization_decision: new FormControl<string | null | undefined>(undefined),
			default_decision: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _200SingleResultResultBundles {

		/** Auth */
		authz?: _200SingleResultResultBundlesAuthz;
	}
	export interface _200SingleResultResultBundlesFormProperties {
	}
	export function Create_200SingleResultResultBundlesFormGroup() {
		return new FormGroup<_200SingleResultResultBundlesFormProperties>({
		});

	}

	export interface _200SingleResultResultBundlesAuthz {

		/**
		 * Service
		 * Min length: 1
		 */
		service?: string | null;
	}
	export interface _200SingleResultResultBundlesAuthzFormProperties {

		/**
		 * Service
		 * Min length: 1
		 */
		service: FormControl<string | null | undefined>,
	}
	export function Create_200SingleResultResultBundlesAuthzFormGroup() {
		return new FormGroup<_200SingleResultResultBundlesAuthzFormProperties>({
			service: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface _200SingleResultResultDecision_logs {

		/**
		 * Service
		 * Min length: 1
		 */
		service?: string | null;
	}
	export interface _200SingleResultResultDecision_logsFormProperties {

		/**
		 * Service
		 * Min length: 1
		 */
		service: FormControl<string | null | undefined>,
	}
	export function Create_200SingleResultResultDecision_logsFormGroup() {
		return new FormGroup<_200SingleResultResultDecision_logsFormProperties>({
			service: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface _200SingleResultResultKeys {

		/** Global Key */
		'global-key'?: _200SingleResultResultKeys_global_key_;
	}
	export interface _200SingleResultResultKeysFormProperties {
	}
	export function Create_200SingleResultResultKeysFormGroup() {
		return new FormGroup<_200SingleResultResultKeysFormProperties>({
		});

	}

	export interface _200SingleResultResultKeys_global_key_ {

		/**
		 * Scope
		 * Min length: 1
		 */
		scope?: string | null;
	}
	export interface _200SingleResultResultKeys_global_key_FormProperties {

		/**
		 * Scope
		 * Min length: 1
		 */
		scope: FormControl<string | null | undefined>,
	}
	export function Create_200SingleResultResultKeys_global_key_FormGroup() {
		return new FormGroup<_200SingleResultResultKeys_global_key_FormProperties>({
			scope: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface _200SingleResultResultLabels {

		/**
		 * Label ID
		 * Min length: 1
		 */
		id?: string | null;

		/**
		 * Version
		 * Min length: 1
		 */
		version?: string | null;
	}
	export interface _200SingleResultResultLabelsFormProperties {

		/**
		 * Label ID
		 * Min length: 1
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Version
		 * Min length: 1
		 */
		version: FormControl<string | null | undefined>,
	}
	export function Create_200SingleResultResultLabelsFormGroup() {
		return new FormGroup<_200SingleResultResultLabelsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface _200SingleResultResultServices {
		acmecorp?: _200SingleResultResultServicesAcmecorp;
	}
	export interface _200SingleResultResultServicesFormProperties {
	}
	export function Create_200SingleResultResultServicesFormGroup() {
		return new FormGroup<_200SingleResultResultServicesFormProperties>({
		});

	}

	export interface _200SingleResultResultServicesAcmecorp {
		url?: string | null;
	}
	export interface _200SingleResultResultServicesAcmecorpFormProperties {
		url: FormControl<string | null | undefined>,
	}
	export function Create_200SingleResultResultServicesAcmecorpFormGroup() {
		return new FormGroup<_200SingleResultResultServicesAcmecorpFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface _200SingleResultResultStatus {

		/**
		 * Service
		 * Min length: 1
		 */
		service?: string | null;
	}
	export interface _200SingleResultResultStatusFormProperties {

		/**
		 * Service
		 * Min length: 1
		 */
		service: FormControl<string | null | undefined>,
	}
	export function Create_200SingleResultResultStatusFormGroup() {
		return new FormGroup<_200SingleResultResultStatusFormProperties>({
			service: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface DataSchema {
	}
	export interface DataSchemaFormProperties {
	}
	export function CreateDataSchemaFormGroup() {
		return new FormGroup<DataSchemaFormProperties>({
		});

	}

	export interface InputSchema {
	}
	export interface InputSchemaFormProperties {
	}
	export function CreateInputSchemaFormGroup() {
		return new FormGroup<InputSchemaFormProperties>({
		});

	}

	export interface PartialQuerySchema {
	}
	export interface PartialQuerySchemaFormProperties {
	}
	export function CreatePartialQuerySchemaFormGroup() {
		return new FormGroup<PartialQuerySchemaFormProperties>({
		});

	}


	/** A JSON patch operation */
	export interface PatchesSchemaElement {

		/**
		 * JSON patch operation type
		 * Required
		 * Min length: 1
		 */
		op: PatchesSchemaElementOp;

		/**
		 * A [JSON pointer](https://tools.ietf.org/html/rfc6901) to a location within the target document where the operation is performed.
		 * The *effective path* is this value prefixed with the API call's `path` parameter.
		 * The server will return a *bad request* (404) response if:
		 * - The *parent* of the effective path does not refer to an existing document
		 * - For **remove** and **replace** operations, the effective path does not refer to an existing document.
		 * Required
		 * Min length: 1
		 */
		path: string;

		/** The value to add, replace or test. */
		value?: {[id: string]: any };
	}

	/** A JSON patch operation */
	export interface PatchesSchemaElementFormProperties {

		/**
		 * JSON patch operation type
		 * Required
		 * Min length: 1
		 */
		op: FormControl<PatchesSchemaElementOp | null | undefined>,

		/**
		 * A [JSON pointer](https://tools.ietf.org/html/rfc6901) to a location within the target document where the operation is performed.
		 * The *effective path* is this value prefixed with the API call's `path` parameter.
		 * The server will return a *bad request* (404) response if:
		 * - The *parent* of the effective path does not refer to an existing document
		 * - For **remove** and **replace** operations, the effective path does not refer to an existing document.
		 * Required
		 * Min length: 1
		 */
		path: FormControl<string | null | undefined>,

		/** The value to add, replace or test. */
		value: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreatePatchesSchemaElementFormGroup() {
		return new FormGroup<PatchesSchemaElementFormProperties>({
			op: new FormControl<PatchesSchemaElementOp | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			value: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

	export enum PatchesSchemaElementOp { add = 'add', remove = 'remove', replace = 'replace', move = 'move', copy = 'copy', test = 'test' }

	export interface QSchema {
	}
	export interface QSchemaFormProperties {
	}
	export function CreateQSchemaFormGroup() {
		return new FormGroup<QSchemaFormProperties>({
		});

	}

	export interface QueryInputSchema {
	}
	export interface QueryInputSchemaFormProperties {
	}
	export function CreateQueryInputSchemaFormGroup() {
		return new FormGroup<QueryInputSchemaFormProperties>({
		});

	}

	export interface WebhookInputSchema {
	}
	export interface WebhookInputSchemaFormProperties {
	}
	export function CreateWebhookInputSchemaFormGroup() {
		return new FormGroup<WebhookInputSchemaFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Execute a simple query
		 * This API queries the document at data/system/main* by default (however, you can [configure OPA](https://www.openpolicyagent.org/docs/latest/configuration/) to use a different path to serve these queries). That document defines the response.
		 * For example, use the following in `PUT /v1/policies/{path}`) to define a rule that will produce a value for the data/system/main* document:
		 * ```yaml
		 * package system
		 * main = msg {
		 * msg := sprintf("hello, %v", input.user)
		 * }
		 * ```
		 * The server will return a *not found* (404) response if data/system/main* is undefined.
		 * Post 
		 * @param {boolean} pretty If true, response will be in a human-readable format.
		 * @param {QueryInputSchema} requestBody The text of the input document (in JSON format)
		 * @return {void} Success
		 */
		PostSimpleQuery(pretty: boolean | null | undefined, requestBody: QueryInputSchema): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + '?pretty=' + pretty, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Health
		 * This API endpoint verifies that the server is operational.
		 * The response from the server is either 200 or 500:
		 * - **200** - OPA service is healthy. If `bundles` is true, then all configured bundles have been activated. If `plugins` is true, then all plugins are in an 'OK' state.
		 * - **500** - OPA service is *not* healthy. If `bundles` is true, at least one of configured bundles has not yet been activated. If `plugins` is true, at least one plugins is in a 'not OK' state.
		 * ---
		 * **Note**
		 * This check is only for initial bundle activation. Subsequent downloads will not affect the health check.
		 * Use the **status** endpoint (in the (management API)[management.html]) for more fine-grained bundle status monitoring.
		 * ---
		 * Get health
		 * @param {boolean} bundles Reports on bundle activation status (useful for 'ready' checks at startup).
		 * This includes any discovery bundles or bundles defined in the loaded discovery configuration.
		 * @param {boolean} plugins Reports on plugin status
		 * @return {void} OPA service is healthy
		 */
		GetHealth(bundles: boolean | null | undefined, plugins: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health?bundles=' + bundles + '&plugins=' + plugins, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Compile
		 * This API endpoint allows you to partially evaluate Rego queries and obtain a simplified version of the policy. The example below assumes that OPA has been given the following policy (use `PUT /v1/policies/{path}`):
		 * ```yaml
		 * package example
		 * allow {
		 * input.subject.clearance_level >= data.reports[_].clearance_level
		 * }
		 * ```
		 * Compile API **request body** so that it contain the following fields:
		 * | Field | Type | Required | Description |
		 * | --- | --- | --- | --- |
		 * | `query` | `string` | Yes | The query to partially evaluate and compile. |
		 * | `input` | `any` | No | The input document to use during partial evaluation (default: undefined). |
		 * | `unknowns` | `array[string]` | No | The terms to treat as unknown during partial evaluation (default: `["input"]`]). |
		 * For example:
		 * ```json
		 * {
		 * "query": "data.example.allow == true",
		 * "input": {
		 * "subject": {
		 * "clearance_level": 4
		 * }
		 * },
		 * "unknowns": [
		 * "data.reports"
		 * ]
		 * }
		 * ```
		 * ### Partial evaluation
		 * In some cases, the result of partial valuation is a conclusive, unconditional answer. See [the guidance](https://www.openpolicyagent.org/docs/latest/rest-api/#unconditional-results-from-partial-evaluation) for details.
		 * Post v1/compile
		 * @param {boolean} pretty If true, response will be in a human-readable format.
		 * @param {string} explain If set to *full*, response will include query explanations in addition to the result.
		 * @param {boolean} metrics If true, compiler performance metrics will be returned in the response.
		 * @param {boolean} instrument If true, response will return additional performance metrics in addition to the result and the standard metrics.
		 * **Caution:** This can add significant overhead to query evaluation. The recommendation is to only use this parameter if you are debugging a performance problem.
		 * @param {PartialQuerySchema} requestBody The query (in JSON format)
		 * @return {_200Result} Success
		 */
		PostCompile(pretty: boolean | null | undefined, explain: string | null | undefined, metrics: boolean | null | undefined, instrument: boolean | null | undefined, requestBody: PartialQuerySchema): Observable<_200Result> {
			return this.http.post<_200Result>(this.baseUri + 'v1/compile?pretty=' + pretty + '&explain=' + (explain == null ? '' : encodeURIComponent(explain)) + '&metrics=' + metrics + '&instrument=' + instrument, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get configurations
		 * This API endpoint responds with active configuration (result response)
		 * ---
		 * **Note**
		 * The `credentials` field in the `services` configuration and
		 * The `private_key` and `key` fields in the `keys` configuration will be omitted from the API response
		 * ---
		 * Get v1/config
		 * @param {boolean} pretty If true, response will be in a human-readable format.
		 * @return {_200SingleResult} Success
		 */
		GetConfig(pretty: boolean | null | undefined): Observable<_200SingleResult> {
			return this.http.get<_200SingleResult>(this.baseUri + 'v1/config?pretty=' + pretty, {});
		}

		/**
		 * Delete a document
		 * This API endpoint deletes an existing document from the server
		 * Delete v1/data/{path}
		 * @return {void} 
		 */
		DeleteDocument(): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/data/{path}', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a document
		 * This API endpoint returns the document specified by `path`.
		 * The server will return a *bad request* (400) response if either:
		 * - The query requires an input document and you do not provide it
		 * - You provide the input document but the query has already defined it.
		 * Get v1/data/{path}
		 * @param {{[id: string]: any }} input Provide the text for an [input document](https://www.openpolicyagent.org/docs/latest/kubernetes-primer/#input-document) in JSON format
		 * @param {boolean} pretty If true, response will be in a human-readable format.
		 * @param {boolean} provenance If true, response will include build and version information in addition to the result.
		 * @param {string} explain If set to *full*, response will include query explanations in addition to the result.
		 * @param {boolean} metrics If true, compiler performance metrics will be returned in the response.
		 * @param {boolean} instrument If true, response will return additional performance metrics in addition to the result and the standard metrics.
		 * **Caution:** This can add significant overhead to query evaluation. The recommendation is to only use this parameter if you are debugging a performance problem.
		 * @return {_200Result} Success
		 */
		GetDocument(input: {[id: string]: any } | null | undefined, pretty: boolean | null | undefined, provenance: boolean | null | undefined, explain: string | null | undefined, metrics: boolean | null | undefined, instrument: boolean | null | undefined): Observable<_200Result> {
			return this.http.get<_200Result>(this.baseUri + 'v1/data/{path}?input=' + input + '&pretty=' + pretty + '&provenance=' + provenance + '&explain=' + (explain == null ? '' : encodeURIComponent(explain)) + '&metrics=' + metrics + '&instrument=' + instrument, {});
		}

		/**
		 * Update a document
		 * This API endpoint updates an existing document on the server by describing the changes required (using [JSON patch operations](http://jsonpatch.com/))
		 * Patch v1/data/{path}
		 * @param {Array<PatchDocumentPatchBody>} requestBody The list of JSON patch operations.
		 * @return {void} 
		 */
		PatchDocument(requestBody: Array<PatchDocumentPatchBody>): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/data/{path}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or overwrite a document
		 * If the path does not refer to an existing document (for example *us-west/servers*), the server will attempt to create all the necessary containing documents.
		 * This behavior is similar to the Unix command [mkdir -p](https://en.wikipedia.org/wiki/Mkdir#Options).
		 * Put v1/data/{path}
		 * @param {DataSchema} requestBody The JSON document to write to the specified path.
		 * @return {void} 
		 */
		PutDocument(requestBody: DataSchema): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1/data/{path}', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List policies
		 * This API endpoint responds with a list of all policy modules on the server (result response)
		 * Get v1/policies
		 * @param {boolean} pretty If true, response will be in a human-readable format.
		 * @return {_200Result} Success
		 */
		GetPolicies(pretty: boolean | null | undefined): Observable<_200Result> {
			return this.http.get<_200Result>(this.baseUri + 'v1/policies?pretty=' + pretty, {});
		}

		/**
		 * Delete a policy module
		 * This API endpoint removes an existing policy module from the server
		 * Delete v1/policies/{id}
		 * @param {boolean} pretty If true, response will be in a human-readable format.
		 * @return {_200Result} Success
		 */
		DeletePolicyModule(pretty: boolean | null | undefined): Observable<_200Result> {
			return this.http.delete<_200Result>(this.baseUri + 'v1/policies/{id}?pretty=' + pretty, {});
		}

		/**
		 * Get a policy module
		 * This API endpoint returns the details of the specified policy module (`{id}`)
		 * Get v1/policies/{id}
		 * @param {boolean} pretty If true, response will be in a human-readable format.
		 * @return {_200Result} Success
		 */
		GetPolicyModule(pretty: boolean | null | undefined): Observable<_200Result> {
			return this.http.get<_200Result>(this.baseUri + 'v1/policies/{id}?pretty=' + pretty, {});
		}

		/**
		 * Execute an ad-hoc query (simple)
		 * This API endpoint returns bindings for the variables in the query.
		 * For more complex JSON queries, use `POST /v1/query` instead.
		 * Get v1/query
		 * @param {string} q The [URL-encoded](https://www.w3schools.com/tags/ref_urlencode.ASP) ad-hoc query to execute.
		 * @param {boolean} pretty If true, response will be in a human-readable format.
		 * @param {string} explain If set to *full*, response will include query explanations in addition to the result.
		 * @param {boolean} metrics If true, compiler performance metrics will be returned in the response.
		 * @return {_200Result} Success
		 */
		GetQuery(q: string, pretty: boolean | null | undefined, explain: string | null | undefined, metrics: boolean | null | undefined): Observable<_200Result> {
			return this.http.get<_200Result>(this.baseUri + 'v1/query?q=' + (q == null ? '' : encodeURIComponent(q)) + '&pretty=' + pretty + '&explain=' + (explain == null ? '' : encodeURIComponent(explain)) + '&metrics=' + metrics, {});
		}
	}

	export interface PatchDocumentPatchBody {

		/**
		 * JSON patch operation type
		 * Required
		 * Min length: 1
		 */
		op: PatchesSchemaElementOp;

		/**
		 * A [JSON pointer](https://tools.ietf.org/html/rfc6901) to a location within the target document where the operation is performed.
		 * The *effective path* is this value prefixed with the API call's `path` parameter.
		 * The server will return a *bad request* (404) response if:
		 * - The *parent* of the effective path does not refer to an existing document
		 * - For **remove** and **replace** operations, the effective path does not refer to an existing document.
		 * Required
		 * Min length: 1
		 */
		path: string;

		/** The value to add, replace or test. */
		value?: {[id: string]: any };
	}
	export interface PatchDocumentPatchBodyFormProperties {

		/**
		 * JSON patch operation type
		 * Required
		 * Min length: 1
		 */
		op: FormControl<PatchesSchemaElementOp | null | undefined>,

		/**
		 * A [JSON pointer](https://tools.ietf.org/html/rfc6901) to a location within the target document where the operation is performed.
		 * The *effective path* is this value prefixed with the API call's `path` parameter.
		 * The server will return a *bad request* (404) response if:
		 * - The *parent* of the effective path does not refer to an existing document
		 * - For **remove** and **replace** operations, the effective path does not refer to an existing document.
		 * Required
		 * Min length: 1
		 */
		path: FormControl<string | null | undefined>,

		/** The value to add, replace or test. */
		value: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreatePatchDocumentPatchBodyFormGroup() {
		return new FormGroup<PatchDocumentPatchBodyFormProperties>({
			op: new FormControl<PatchesSchemaElementOp | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			path: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			value: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}

}

