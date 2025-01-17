import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An alias to a repo revision. */
	export interface AliasContext {

		/** The alias kind. */
		kind?: AliasContextKind | null;

		/** The alias name. */
		name?: string | null;
	}

	/** An alias to a repo revision. */
	export interface AliasContextFormProperties {

		/** The alias kind. */
		kind: FormControl<AliasContextKind | null | undefined>,

		/** The alias name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAliasContextFormGroup() {
		return new FormGroup<AliasContextFormProperties>({
			kind: new FormControl<AliasContextKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AliasContextKind { ANY = 0, FIXED = 1, MOVABLE = 2, OTHER = 3 }


	/**
	 * ------------------------------------------------------------------------------
	 * ## Breakpoint (the resource)
	 * Represents the breakpoint specification, status and results.
	 */
	export interface Breakpoint {

		/**
		 * Action that the agent should perform when the code at the
		 * breakpoint location is hit.
		 */
		action?: BreakpointAction | null;

		/**
		 * The deadline for the breakpoint to stay in CANARY_ACTIVE state. The value
		 * is meaningless when the breakpoint is not in CANARY_ACTIVE state.
		 */
		canaryExpireTime?: string | null;

		/**
		 * Condition that triggers the breakpoint.
		 * The condition is a compound boolean expression composed using expressions
		 * in a programming language at the source location.
		 */
		condition?: string | null;

		/** Time this breakpoint was created by the server in seconds resolution. */
		createTime?: string | null;

		/**
		 * Values of evaluated expressions at breakpoint time.
		 * The evaluated expressions appear in exactly the same order they
		 * are listed in the `expressions` field.
		 * The `name` field holds the original expression text, the `value` or
		 * `members` field holds the result of the evaluated expression.
		 * If the expression cannot be evaluated, the `status` inside the `Variable`
		 * will indicate an error and contain the error text.
		 */
		evaluatedExpressions?: Array<Variable>;

		/**
		 * List of read-only expressions to evaluate at the breakpoint location.
		 * The expressions are composed using expressions in the programming language
		 * at the source location. If the breakpoint action is `LOG`, the evaluated
		 * expressions are included in log statements.
		 */
		expressions?: Array<string>;

		/**
		 * Time this breakpoint was finalized as seen by the server in seconds
		 * resolution.
		 */
		finalTime?: string | null;

		/** Breakpoint identifier, unique in the scope of the debuggee. */
		id?: string | null;

		/**
		 * When true, indicates that this is a final result and the
		 * breakpoint state will not change from here on.
		 */
		isFinalState?: boolean | null;

		/**
		 * A set of custom breakpoint properties, populated by the agent, to be
		 * displayed to the user.
		 */
		labels?: {[id: string]: string };

		/** Represents a location in the source code. */
		location?: SourceLocation;

		/** Indicates the severity of the log. Only relevant when action is `LOG`. */
		logLevel?: BreakpointLogLevel | null;

		/**
		 * Only relevant when action is `LOG`. Defines the message to log when
		 * the breakpoint hits. The message may include parameter placeholders `$0`,
		 * `$1`, etc. These placeholders are replaced with the evaluated value
		 * of the appropriate expression. Expressions not referenced in
		 * `log_message_format` are not logged.
		 * Example: `Message received, id = $0, count = $1` with
		 * `expressions` = `[ message.id, message.count ]`.
		 */
		logMessageFormat?: string | null;

		/**
		 * The stack at breakpoint time, where stack_frames[0] represents the most
		 * recently entered function.
		 */
		stackFrames?: Array<StackFrame>;

		/** The current state of the breakpoint. */
		state?: BreakpointState | null;

		/**
		 * Represents a contextual status message.
		 * The message can indicate an error or informational status, and refer to
		 * specific parts of the containing object.
		 * For example, the `Breakpoint.status` field can indicate an error referring
		 * to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
		 */
		status?: StatusMessage;

		/** E-mail address of the user that created this breakpoint */
		userEmail?: string | null;

		/**
		 * The `variable_table` exists to aid with computation, memory and network
		 * traffic optimization.  It enables storing a variable once and reference
		 * it from multiple variables, including variables stored in the
		 * `variable_table` itself.
		 * For example, the same `this` object, which may appear at many levels of
		 * the stack, can have all of its data stored once in this table.  The
		 * stack frame variables then would hold only a reference to it.
		 * The variable `var_table_index` field is an index into this repeated field.
		 * The stored objects are nameless and get their name from the referencing
		 * variable. The effective variable is a merge of the referencing variable
		 * and the referenced variable.
		 */
		variableTable?: Array<Variable>;
	}

	/**
	 * ------------------------------------------------------------------------------
	 * ## Breakpoint (the resource)
	 * Represents the breakpoint specification, status and results.
	 */
	export interface BreakpointFormProperties {

		/**
		 * Action that the agent should perform when the code at the
		 * breakpoint location is hit.
		 */
		action: FormControl<BreakpointAction | null | undefined>,

		/**
		 * The deadline for the breakpoint to stay in CANARY_ACTIVE state. The value
		 * is meaningless when the breakpoint is not in CANARY_ACTIVE state.
		 */
		canaryExpireTime: FormControl<string | null | undefined>,

		/**
		 * Condition that triggers the breakpoint.
		 * The condition is a compound boolean expression composed using expressions
		 * in a programming language at the source location.
		 */
		condition: FormControl<string | null | undefined>,

		/** Time this breakpoint was created by the server in seconds resolution. */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Time this breakpoint was finalized as seen by the server in seconds
		 * resolution.
		 */
		finalTime: FormControl<string | null | undefined>,

		/** Breakpoint identifier, unique in the scope of the debuggee. */
		id: FormControl<string | null | undefined>,

		/**
		 * When true, indicates that this is a final result and the
		 * breakpoint state will not change from here on.
		 */
		isFinalState: FormControl<boolean | null | undefined>,

		/**
		 * A set of custom breakpoint properties, populated by the agent, to be
		 * displayed to the user.
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Indicates the severity of the log. Only relevant when action is `LOG`. */
		logLevel: FormControl<BreakpointLogLevel | null | undefined>,

		/**
		 * Only relevant when action is `LOG`. Defines the message to log when
		 * the breakpoint hits. The message may include parameter placeholders `$0`,
		 * `$1`, etc. These placeholders are replaced with the evaluated value
		 * of the appropriate expression. Expressions not referenced in
		 * `log_message_format` are not logged.
		 * Example: `Message received, id = $0, count = $1` with
		 * `expressions` = `[ message.id, message.count ]`.
		 */
		logMessageFormat: FormControl<string | null | undefined>,

		/** The current state of the breakpoint. */
		state: FormControl<BreakpointState | null | undefined>,

		/** E-mail address of the user that created this breakpoint */
		userEmail: FormControl<string | null | undefined>,
	}
	export function CreateBreakpointFormGroup() {
		return new FormGroup<BreakpointFormProperties>({
			action: new FormControl<BreakpointAction | null | undefined>(undefined),
			canaryExpireTime: new FormControl<string | null | undefined>(undefined),
			condition: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			finalTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isFinalState: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			logLevel: new FormControl<BreakpointLogLevel | null | undefined>(undefined),
			logMessageFormat: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<BreakpointState | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BreakpointAction { CAPTURE = 0, LOG = 1 }


	/**
	 * Represents a variable or an argument possibly of a compound object type.
	 * Note how the following variables are represented:
	 * 1) A simple variable:
	 *     int x = 5
	 *     { name: "x", value: "5", type: "int" }  // Captured variable
	 * 2) A compound object:
	 *     struct T {
	 *         int m1;
	 *         int m2;
	 *     };
	 *     T x = { 3, 7 };
	 *     {  // Captured variable
	 *         name: "x",
	 *         type: "T",
	 *         members { name: "m1", value: "3", type: "int" },
	 *         members { name: "m2", value: "7", type: "int" }
	 *     }
	 * 3) A pointer where the pointee was captured:
	 *     T x = { 3, 7 };
	 *     T* p = &x;
	 *     {   // Captured variable
	 *         name: "p",
	 *         type: "T*",
	 *         value: "0x00500500",
	 *         members { name: "m1", value: "3", type: "int" },
	 *         members { name: "m2", value: "7", type: "int" }
	 *     }
	 * 4) A pointer where the pointee was not captured:
	 *     T* p = new T;
	 *     {   // Captured variable
	 *         name: "p",
	 *         type: "T*",
	 *         value: "0x00400400"
	 *         status { is_error: true, description { format: "unavailable" } }
	 *     }
	 * The status should describe the reason for the missing value,
	 * such as `<optimized out>`, `<inaccessible>`, `<pointers limit reached>`.
	 * Note that a null pointer should not have members.
	 * 5) An unnamed value:
	 *     int* p = new int(7);
	 *     {   // Captured variable
	 *         name: "p",
	 *         value: "0x00500500",
	 *         type: "int*",
	 *         members { value: "7", type: "int" } }
	 * 6) An unnamed pointer where the pointee was not captured:
	 *     int* p = new int(7);
	 *     int** pp = &p;
	 *     {  // Captured variable
	 *         name: "pp",
	 *         value: "0x00500500",
	 *         type: "int**",
	 *         members {
	 *             value: "0x00400400",
	 *             type: "int*"
	 *             status {
	 *                 is_error: true,
	 *                 description: { format: "unavailable" } }
	 *             }
	 *         }
	 *     }
	 * To optimize computation, memory and network traffic, variables that
	 * repeat in the output multiple times can be stored once in a shared
	 * variable table and be referenced using the `var_table_index` field.  The
	 * variables stored in the shared table are nameless and are essentially
	 * a partition of the complete variable. To reconstruct the complete
	 * variable, merge the referencing variable with the referenced variable.
	 * When using the shared variable table, the following variables:
	 *     T x = { 3, 7 };
	 *     T* p = &x;
	 *     T& r = x;
	 *     { name: "x", var_table_index: 3, type: "T" }  // Captured variables
	 *     { name: "p", value "0x00500500", type="T*", var_table_index: 3 }
	 *     { name: "r", type="T&", var_table_index: 3 }
	 *     {  // Shared variable table entry #3:
	 *         members { name: "m1", value: "3", type: "int" },
	 *         members { name: "m2", value: "7", type: "int" }
	 *     }
	 * Note that the pointer address is stored with the referencing variable
	 * and not with the referenced variable. This allows the referenced variable
	 * to be shared between pointers and references.
	 * The type field is optional. The debugger agent may or may not support it.
	 */
	export interface Variable {

		/** Members contained or pointed to by the variable. */
		members?: Array<Variable>;

		/** Name of the variable, if any. */
		name?: string | null;

		/**
		 * Represents a contextual status message.
		 * The message can indicate an error or informational status, and refer to
		 * specific parts of the containing object.
		 * For example, the `Breakpoint.status` field can indicate an error referring
		 * to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
		 */
		status?: StatusMessage;

		/**
		 * Variable type (e.g. `MyClass`). If the variable is split with
		 * `var_table_index`, `type` goes next to `value`. The interpretation of
		 * a type is agent specific. It is recommended to include the dynamic type
		 * rather than a static type of an object.
		 */
		type?: string | null;

		/** Simple value of the variable. */
		value?: string | null;

		/**
		 * Reference to a variable in the shared variable table. More than
		 * one variable can reference the same variable in the table. The
		 * `var_table_index` field is an index into `variable_table` in Breakpoint.
		 */
		varTableIndex?: number | null;
	}

	/**
	 * Represents a variable or an argument possibly of a compound object type.
	 * Note how the following variables are represented:
	 * 1) A simple variable:
	 *     int x = 5
	 *     { name: "x", value: "5", type: "int" }  // Captured variable
	 * 2) A compound object:
	 *     struct T {
	 *         int m1;
	 *         int m2;
	 *     };
	 *     T x = { 3, 7 };
	 *     {  // Captured variable
	 *         name: "x",
	 *         type: "T",
	 *         members { name: "m1", value: "3", type: "int" },
	 *         members { name: "m2", value: "7", type: "int" }
	 *     }
	 * 3) A pointer where the pointee was captured:
	 *     T x = { 3, 7 };
	 *     T* p = &x;
	 *     {   // Captured variable
	 *         name: "p",
	 *         type: "T*",
	 *         value: "0x00500500",
	 *         members { name: "m1", value: "3", type: "int" },
	 *         members { name: "m2", value: "7", type: "int" }
	 *     }
	 * 4) A pointer where the pointee was not captured:
	 *     T* p = new T;
	 *     {   // Captured variable
	 *         name: "p",
	 *         type: "T*",
	 *         value: "0x00400400"
	 *         status { is_error: true, description { format: "unavailable" } }
	 *     }
	 * The status should describe the reason for the missing value,
	 * such as `<optimized out>`, `<inaccessible>`, `<pointers limit reached>`.
	 * Note that a null pointer should not have members.
	 * 5) An unnamed value:
	 *     int* p = new int(7);
	 *     {   // Captured variable
	 *         name: "p",
	 *         value: "0x00500500",
	 *         type: "int*",
	 *         members { value: "7", type: "int" } }
	 * 6) An unnamed pointer where the pointee was not captured:
	 *     int* p = new int(7);
	 *     int** pp = &p;
	 *     {  // Captured variable
	 *         name: "pp",
	 *         value: "0x00500500",
	 *         type: "int**",
	 *         members {
	 *             value: "0x00400400",
	 *             type: "int*"
	 *             status {
	 *                 is_error: true,
	 *                 description: { format: "unavailable" } }
	 *             }
	 *         }
	 *     }
	 * To optimize computation, memory and network traffic, variables that
	 * repeat in the output multiple times can be stored once in a shared
	 * variable table and be referenced using the `var_table_index` field.  The
	 * variables stored in the shared table are nameless and are essentially
	 * a partition of the complete variable. To reconstruct the complete
	 * variable, merge the referencing variable with the referenced variable.
	 * When using the shared variable table, the following variables:
	 *     T x = { 3, 7 };
	 *     T* p = &x;
	 *     T& r = x;
	 *     { name: "x", var_table_index: 3, type: "T" }  // Captured variables
	 *     { name: "p", value "0x00500500", type="T*", var_table_index: 3 }
	 *     { name: "r", type="T&", var_table_index: 3 }
	 *     {  // Shared variable table entry #3:
	 *         members { name: "m1", value: "3", type: "int" },
	 *         members { name: "m2", value: "7", type: "int" }
	 *     }
	 * Note that the pointer address is stored with the referencing variable
	 * and not with the referenced variable. This allows the referenced variable
	 * to be shared between pointers and references.
	 * The type field is optional. The debugger agent may or may not support it.
	 */
	export interface VariableFormProperties {

		/** Name of the variable, if any. */
		name: FormControl<string | null | undefined>,

		/**
		 * Variable type (e.g. `MyClass`). If the variable is split with
		 * `var_table_index`, `type` goes next to `value`. The interpretation of
		 * a type is agent specific. It is recommended to include the dynamic type
		 * rather than a static type of an object.
		 */
		type: FormControl<string | null | undefined>,

		/** Simple value of the variable. */
		value: FormControl<string | null | undefined>,

		/**
		 * Reference to a variable in the shared variable table. More than
		 * one variable can reference the same variable in the table. The
		 * `var_table_index` field is an index into `variable_table` in Breakpoint.
		 */
		varTableIndex: FormControl<number | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			varTableIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a contextual status message.
	 * The message can indicate an error or informational status, and refer to
	 * specific parts of the containing object.
	 * For example, the `Breakpoint.status` field can indicate an error referring
	 * to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
	 */
	export interface StatusMessage {

		/** Represents a message with parameters. */
		description?: FormatMessage;

		/** Distinguishes errors from informational messages. */
		isError?: boolean | null;

		/** Reference to which the message applies. */
		refersTo?: StatusMessageRefersTo | null;
	}

	/**
	 * Represents a contextual status message.
	 * The message can indicate an error or informational status, and refer to
	 * specific parts of the containing object.
	 * For example, the `Breakpoint.status` field can indicate an error referring
	 * to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
	 */
	export interface StatusMessageFormProperties {

		/** Distinguishes errors from informational messages. */
		isError: FormControl<boolean | null | undefined>,

		/** Reference to which the message applies. */
		refersTo: FormControl<StatusMessageRefersTo | null | undefined>,
	}
	export function CreateStatusMessageFormGroup() {
		return new FormGroup<StatusMessageFormProperties>({
			isError: new FormControl<boolean | null | undefined>(undefined),
			refersTo: new FormControl<StatusMessageRefersTo | null | undefined>(undefined),
		});

	}


	/** Represents a message with parameters. */
	export interface FormatMessage {

		/**
		 * Format template for the message. The `format` uses placeholders `$0`,
		 * `$1`, etc. to reference parameters. `$$` can be used to denote the `$`
		 * character.
		 * Examples:
		 * *   `Failed to load '$0' which helps debug $1 the first time it
		 * is loaded.  Again, $0 is very important.`
		 * *   `Please pay $$10 to use $0 instead of $1.`
		 */
		format?: string | null;

		/** Optional parameters to be embedded into the message. */
		parameters?: Array<string>;
	}

	/** Represents a message with parameters. */
	export interface FormatMessageFormProperties {

		/**
		 * Format template for the message. The `format` uses placeholders `$0`,
		 * `$1`, etc. to reference parameters. `$$` can be used to denote the `$`
		 * character.
		 * Examples:
		 * *   `Failed to load '$0' which helps debug $1 the first time it
		 * is loaded.  Again, $0 is very important.`
		 * *   `Please pay $$10 to use $0 instead of $1.`
		 */
		format: FormControl<string | null | undefined>,
	}
	export function CreateFormatMessageFormGroup() {
		return new FormGroup<FormatMessageFormProperties>({
			format: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StatusMessageRefersTo { UNSPECIFIED = 0, BREAKPOINT_SOURCE_LOCATION = 1, BREAKPOINT_CONDITION = 2, BREAKPOINT_EXPRESSION = 3, BREAKPOINT_AGE = 4, BREAKPOINT_CANARY_FAILED = 5, VARIABLE_NAME = 6, VARIABLE_VALUE = 7 }


	/** Represents a location in the source code. */
	export interface SourceLocation {

		/**
		 * Column within a line. The first column in a line as the value `1`.
		 * Agents that do not support setting breakpoints on specific columns ignore
		 * this field.
		 */
		column?: number | null;

		/** Line inside the file. The first line in the file has the value `1`. */
		line?: number | null;

		/** Path to the source file within the source context of the target binary. */
		path?: string | null;
	}

	/** Represents a location in the source code. */
	export interface SourceLocationFormProperties {

		/**
		 * Column within a line. The first column in a line as the value `1`.
		 * Agents that do not support setting breakpoints on specific columns ignore
		 * this field.
		 */
		column: FormControl<number | null | undefined>,

		/** Line inside the file. The first line in the file has the value `1`. */
		line: FormControl<number | null | undefined>,

		/** Path to the source file within the source context of the target binary. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateSourceLocationFormGroup() {
		return new FormGroup<SourceLocationFormProperties>({
			column: new FormControl<number | null | undefined>(undefined),
			line: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BreakpointLogLevel { INFO = 0, WARNING = 1, ERROR = 2 }


	/** Represents a stack frame context. */
	export interface StackFrame {

		/**
		 * Set of arguments passed to this function.
		 * Note that this might not be populated for all stack frames.
		 */
		arguments?: Array<Variable>;

		/** Demangled function name at the call site. */
		function?: string | null;

		/**
		 * Set of local variables at the stack frame location.
		 * Note that this might not be populated for all stack frames.
		 */
		locals?: Array<Variable>;

		/** Represents a location in the source code. */
		location?: SourceLocation;
	}

	/** Represents a stack frame context. */
	export interface StackFrameFormProperties {

		/** Demangled function name at the call site. */
		function: FormControl<string | null | undefined>,
	}
	export function CreateStackFrameFormGroup() {
		return new FormGroup<StackFrameFormProperties>({
			function: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BreakpointState { STATE_UNSPECIFIED = 0, STATE_CANARY_PENDING_AGENTS = 1, STATE_CANARY_ACTIVE = 2, STATE_ROLLING_TO_ALL = 3, STATE_IS_FINAL = 4 }


	/**
	 * A CloudRepoSourceContext denotes a particular revision in a cloud
	 * repo (a repo hosted by the Google Cloud Platform).
	 */
	export interface CloudRepoSourceContext {

		/** An alias to a repo revision. */
		aliasContext?: AliasContext;

		/** The name of an alias (branch, tag, etc.). */
		aliasName?: string | null;

		/** A unique identifier for a cloud repo. */
		repoId?: RepoId;

		/** A revision ID. */
		revisionId?: string | null;
	}

	/**
	 * A CloudRepoSourceContext denotes a particular revision in a cloud
	 * repo (a repo hosted by the Google Cloud Platform).
	 */
	export interface CloudRepoSourceContextFormProperties {

		/** The name of an alias (branch, tag, etc.). */
		aliasName: FormControl<string | null | undefined>,

		/** A revision ID. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateCloudRepoSourceContextFormGroup() {
		return new FormGroup<CloudRepoSourceContextFormProperties>({
			aliasName: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A unique identifier for a cloud repo. */
	export interface RepoId {

		/**
		 * Selects a repo using a Google Cloud Platform project ID
		 * (e.g. winged-cargo-31) and a repo name within that project.
		 */
		projectRepoId?: ProjectRepoId;

		/** A server-assigned, globally unique identifier. */
		uid?: string | null;
	}

	/** A unique identifier for a cloud repo. */
	export interface RepoIdFormProperties {

		/** A server-assigned, globally unique identifier. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateRepoIdFormGroup() {
		return new FormGroup<RepoIdFormProperties>({
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Selects a repo using a Google Cloud Platform project ID
	 * (e.g. winged-cargo-31) and a repo name within that project.
	 */
	export interface ProjectRepoId {

		/** The ID of the project. */
		projectId?: string | null;

		/** The name of the repo. Leave empty for the default repo. */
		repoName?: string | null;
	}

	/**
	 * Selects a repo using a Google Cloud Platform project ID
	 * (e.g. winged-cargo-31) and a repo name within that project.
	 */
	export interface ProjectRepoIdFormProperties {

		/** The ID of the project. */
		projectId: FormControl<string | null | undefined>,

		/** The name of the repo. Leave empty for the default repo. */
		repoName: FormControl<string | null | undefined>,
	}
	export function CreateProjectRepoIdFormGroup() {
		return new FormGroup<ProjectRepoIdFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
			repoName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A CloudWorkspaceId is a unique identifier for a cloud workspace.
	 * A cloud workspace is a place associated with a repo where modified files
	 * can be stored before they are committed.
	 */
	export interface CloudWorkspaceId {

		/**
		 * The unique name of the workspace within the repo.  This is the name
		 * chosen by the client in the Source API's CreateWorkspace method.
		 */
		name?: string | null;

		/** A unique identifier for a cloud repo. */
		repoId?: RepoId;
	}

	/**
	 * A CloudWorkspaceId is a unique identifier for a cloud workspace.
	 * A cloud workspace is a place associated with a repo where modified files
	 * can be stored before they are committed.
	 */
	export interface CloudWorkspaceIdFormProperties {

		/**
		 * The unique name of the workspace within the repo.  This is the name
		 * chosen by the client in the Source API's CreateWorkspace method.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCloudWorkspaceIdFormGroup() {
		return new FormGroup<CloudWorkspaceIdFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot. */
	export interface CloudWorkspaceSourceContext {

		/**
		 * The ID of the snapshot.
		 * An empty snapshot_id refers to the most recent snapshot.
		 */
		snapshotId?: string | null;

		/**
		 * A CloudWorkspaceId is a unique identifier for a cloud workspace.
		 * A cloud workspace is a place associated with a repo where modified files
		 * can be stored before they are committed.
		 */
		workspaceId?: CloudWorkspaceId;
	}

	/** A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot. */
	export interface CloudWorkspaceSourceContextFormProperties {

		/**
		 * The ID of the snapshot.
		 * An empty snapshot_id refers to the most recent snapshot.
		 */
		snapshotId: FormControl<string | null | undefined>,
	}
	export function CreateCloudWorkspaceSourceContextFormGroup() {
		return new FormGroup<CloudWorkspaceSourceContextFormProperties>({
			snapshotId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents the debugged application. The application may include one or more
	 * replicated processes executing the same code. Each of these processes is
	 * attached with a debugger agent, carrying out the debugging commands.
	 * Agents attached to the same debuggee identify themselves as such by using
	 * exactly the same Debuggee message value when registering.
	 */
	export interface Debuggee {

		/**
		 * Version ID of the agent.
		 * Schema: `domain/language-platform/vmajor.minor` (for example
		 * `google.com/java-gcp/v1.1`).
		 */
		agentVersion?: string | null;

		/** Used when setting breakpoint canary for this debuggee. */
		canaryMode?: DebuggeeCanaryMode | null;

		/**
		 * Human readable description of the debuggee.
		 * Including a human-readable project name, environment name and version
		 * information is recommended.
		 */
		description?: string | null;

		/**
		 * References to the locations and revisions of the source code used in the
		 * deployed application.
		 */
		extSourceContexts?: Array<ExtendedSourceContext>;

		/** Unique identifier for the debuggee generated by the controller service. */
		id?: string | null;

		/**
		 * If set to `true`, indicates that the agent should disable itself and
		 * detach from the debuggee.
		 */
		isDisabled?: boolean | null;

		/**
		 * If set to `true`, indicates that Controller service does not detect any
		 * activity from the debuggee agents and the application is possibly stopped.
		 */
		isInactive?: boolean | null;

		/**
		 * A set of custom debuggee properties, populated by the agent, to be
		 * displayed to the user.
		 */
		labels?: {[id: string]: string };

		/**
		 * Project the debuggee is associated with.
		 * Use project number or id when registering a Google Cloud Platform project.
		 */
		project?: string | null;

		/**
		 * References to the locations and revisions of the source code used in the
		 * deployed application.
		 */
		sourceContexts?: Array<SourceContext>;

		/**
		 * Represents a contextual status message.
		 * The message can indicate an error or informational status, and refer to
		 * specific parts of the containing object.
		 * For example, the `Breakpoint.status` field can indicate an error referring
		 * to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
		 */
		status?: StatusMessage;

		/**
		 * Uniquifier to further distinguish the application.
		 * It is possible that different applications might have identical values in
		 * the debuggee message, thus, incorrectly identified as a single application
		 * by the Controller service. This field adds salt to further distinguish the
		 * application. Agents should consider seeding this field with value that
		 * identifies the code, binary, configuration and environment.
		 */
		uniquifier?: string | null;
	}

	/**
	 * Represents the debugged application. The application may include one or more
	 * replicated processes executing the same code. Each of these processes is
	 * attached with a debugger agent, carrying out the debugging commands.
	 * Agents attached to the same debuggee identify themselves as such by using
	 * exactly the same Debuggee message value when registering.
	 */
	export interface DebuggeeFormProperties {

		/**
		 * Version ID of the agent.
		 * Schema: `domain/language-platform/vmajor.minor` (for example
		 * `google.com/java-gcp/v1.1`).
		 */
		agentVersion: FormControl<string | null | undefined>,

		/** Used when setting breakpoint canary for this debuggee. */
		canaryMode: FormControl<DebuggeeCanaryMode | null | undefined>,

		/**
		 * Human readable description of the debuggee.
		 * Including a human-readable project name, environment name and version
		 * information is recommended.
		 */
		description: FormControl<string | null | undefined>,

		/** Unique identifier for the debuggee generated by the controller service. */
		id: FormControl<string | null | undefined>,

		/**
		 * If set to `true`, indicates that the agent should disable itself and
		 * detach from the debuggee.
		 */
		isDisabled: FormControl<boolean | null | undefined>,

		/**
		 * If set to `true`, indicates that Controller service does not detect any
		 * activity from the debuggee agents and the application is possibly stopped.
		 */
		isInactive: FormControl<boolean | null | undefined>,

		/**
		 * A set of custom debuggee properties, populated by the agent, to be
		 * displayed to the user.
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Project the debuggee is associated with.
		 * Use project number or id when registering a Google Cloud Platform project.
		 */
		project: FormControl<string | null | undefined>,

		/**
		 * Uniquifier to further distinguish the application.
		 * It is possible that different applications might have identical values in
		 * the debuggee message, thus, incorrectly identified as a single application
		 * by the Controller service. This field adds salt to further distinguish the
		 * application. Agents should consider seeding this field with value that
		 * identifies the code, binary, configuration and environment.
		 */
		uniquifier: FormControl<string | null | undefined>,
	}
	export function CreateDebuggeeFormGroup() {
		return new FormGroup<DebuggeeFormProperties>({
			agentVersion: new FormControl<string | null | undefined>(undefined),
			canaryMode: new FormControl<DebuggeeCanaryMode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isDisabled: new FormControl<boolean | null | undefined>(undefined),
			isInactive: new FormControl<boolean | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			uniquifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DebuggeeCanaryMode { CANARY_MODE_UNSPECIFIED = 0, CANARY_MODE_ALWAYS_ENABLED = 1, CANARY_MODE_ALWAYS_DISABLED = 2, CANARY_MODE_DEFAULT_ENABLED = 3, CANARY_MODE_DEFAULT_DISABLED = 4 }


	/**
	 * An ExtendedSourceContext is a SourceContext combined with additional
	 * details describing the context.
	 */
	export interface ExtendedSourceContext {

		/**
		 * A SourceContext is a reference to a tree of files. A SourceContext together
		 * with a path point to a unique revision of a single file or directory.
		 */
		context?: SourceContext;

		/** Labels with user defined metadata. */
		labels?: {[id: string]: string };
	}

	/**
	 * An ExtendedSourceContext is a SourceContext combined with additional
	 * details describing the context.
	 */
	export interface ExtendedSourceContextFormProperties {

		/** Labels with user defined metadata. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateExtendedSourceContextFormGroup() {
		return new FormGroup<ExtendedSourceContextFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/**
	 * A SourceContext is a reference to a tree of files. A SourceContext together
	 * with a path point to a unique revision of a single file or directory.
	 */
	export interface SourceContext {

		/**
		 * A CloudRepoSourceContext denotes a particular revision in a cloud
		 * repo (a repo hosted by the Google Cloud Platform).
		 */
		cloudRepo?: CloudRepoSourceContext;

		/** A CloudWorkspaceSourceContext denotes a workspace at a particular snapshot. */
		cloudWorkspace?: CloudWorkspaceSourceContext;

		/** A SourceContext referring to a Gerrit project. */
		gerrit?: GerritSourceContext;

		/**
		 * A GitSourceContext denotes a particular revision in a third party Git
		 * repository (e.g. GitHub).
		 */
		git?: GitSourceContext;
	}

	/**
	 * A SourceContext is a reference to a tree of files. A SourceContext together
	 * with a path point to a unique revision of a single file or directory.
	 */
	export interface SourceContextFormProperties {
	}
	export function CreateSourceContextFormGroup() {
		return new FormGroup<SourceContextFormProperties>({
		});

	}


	/** A SourceContext referring to a Gerrit project. */
	export interface GerritSourceContext {

		/** An alias to a repo revision. */
		aliasContext?: AliasContext;

		/** The name of an alias (branch, tag, etc.). */
		aliasName?: string | null;

		/**
		 * The full project name within the host. Projects may be nested, so
		 * "project/subproject" is a valid project name.
		 * The "repo name" is hostURI/project.
		 */
		gerritProject?: string | null;

		/** The URI of a running Gerrit instance. */
		hostUri?: string | null;

		/** A revision (commit) ID. */
		revisionId?: string | null;
	}

	/** A SourceContext referring to a Gerrit project. */
	export interface GerritSourceContextFormProperties {

		/** The name of an alias (branch, tag, etc.). */
		aliasName: FormControl<string | null | undefined>,

		/**
		 * The full project name within the host. Projects may be nested, so
		 * "project/subproject" is a valid project name.
		 * The "repo name" is hostURI/project.
		 */
		gerritProject: FormControl<string | null | undefined>,

		/** The URI of a running Gerrit instance. */
		hostUri: FormControl<string | null | undefined>,

		/** A revision (commit) ID. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGerritSourceContextFormGroup() {
		return new FormGroup<GerritSourceContextFormProperties>({
			aliasName: new FormControl<string | null | undefined>(undefined),
			gerritProject: new FormControl<string | null | undefined>(undefined),
			hostUri: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A GitSourceContext denotes a particular revision in a third party Git
	 * repository (e.g. GitHub).
	 */
	export interface GitSourceContext {

		/**
		 * Git commit hash.
		 * required.
		 */
		revisionId?: string | null;

		/** Git repository URL. */
		url?: string | null;
	}

	/**
	 * A GitSourceContext denotes a particular revision in a third party Git
	 * repository (e.g. GitHub).
	 */
	export interface GitSourceContextFormProperties {

		/**
		 * Git commit hash.
		 * required.
		 */
		revisionId: FormControl<string | null | undefined>,

		/** Git repository URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGitSourceContextFormGroup() {
		return new FormGroup<GitSourceContextFormProperties>({
			revisionId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** Response for getting breakpoint information. */
	export interface GetBreakpointResponse {

		/**
		 * ------------------------------------------------------------------------------
		 * ## Breakpoint (the resource)
		 * Represents the breakpoint specification, status and results.
		 */
		breakpoint?: Breakpoint;
	}

	/** Response for getting breakpoint information. */
	export interface GetBreakpointResponseFormProperties {
	}
	export function CreateGetBreakpointResponseFormGroup() {
		return new FormGroup<GetBreakpointResponseFormProperties>({
		});

	}


	/** Response for listing active breakpoints. */
	export interface ListActiveBreakpointsResponse {

		/**
		 * List of all active breakpoints.
		 * The fields `id` and `location` are guaranteed to be set on each breakpoint.
		 */
		breakpoints?: Array<Breakpoint>;

		/**
		 * A token that can be used in the next method call to block until
		 * the list of breakpoints changes.
		 */
		nextWaitToken?: string | null;

		/**
		 * If set to `true`, indicates that there is no change to the
		 * list of active breakpoints and the server-selected timeout has expired.
		 * The `breakpoints` field would be empty and should be ignored.
		 */
		waitExpired?: boolean | null;
	}

	/** Response for listing active breakpoints. */
	export interface ListActiveBreakpointsResponseFormProperties {

		/**
		 * A token that can be used in the next method call to block until
		 * the list of breakpoints changes.
		 */
		nextWaitToken: FormControl<string | null | undefined>,

		/**
		 * If set to `true`, indicates that there is no change to the
		 * list of active breakpoints and the server-selected timeout has expired.
		 * The `breakpoints` field would be empty and should be ignored.
		 */
		waitExpired: FormControl<boolean | null | undefined>,
	}
	export function CreateListActiveBreakpointsResponseFormGroup() {
		return new FormGroup<ListActiveBreakpointsResponseFormProperties>({
			nextWaitToken: new FormControl<string | null | undefined>(undefined),
			waitExpired: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Response for listing breakpoints. */
	export interface ListBreakpointsResponse {

		/**
		 * List of breakpoints matching the request.
		 * The fields `id` and `location` are guaranteed to be set on each breakpoint.
		 * The fields: `stack_frames`, `evaluated_expressions` and `variable_table`
		 * are cleared on each breakpoint regardless of its status.
		 */
		breakpoints?: Array<Breakpoint>;

		/**
		 * A wait token that can be used in the next call to `list` (REST) or
		 * `ListBreakpoints` (RPC) to block until the list of breakpoints has changes.
		 */
		nextWaitToken?: string | null;
	}

	/** Response for listing breakpoints. */
	export interface ListBreakpointsResponseFormProperties {

		/**
		 * A wait token that can be used in the next call to `list` (REST) or
		 * `ListBreakpoints` (RPC) to block until the list of breakpoints has changes.
		 */
		nextWaitToken: FormControl<string | null | undefined>,
	}
	export function CreateListBreakpointsResponseFormGroup() {
		return new FormGroup<ListBreakpointsResponseFormProperties>({
			nextWaitToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing debuggees. */
	export interface ListDebuggeesResponse {

		/**
		 * List of debuggees accessible to the calling user.
		 * The fields `debuggee.id` and `description` are guaranteed to be set.
		 * The `description` field is a human readable field provided by agents and
		 * can be displayed to users.
		 */
		debuggees?: Array<Debuggee>;
	}

	/** Response for listing debuggees. */
	export interface ListDebuggeesResponseFormProperties {
	}
	export function CreateListDebuggeesResponseFormGroup() {
		return new FormGroup<ListDebuggeesResponseFormProperties>({
		});

	}


	/** Request to register a debuggee. */
	export interface RegisterDebuggeeRequest {

		/**
		 * Represents the debugged application. The application may include one or more
		 * replicated processes executing the same code. Each of these processes is
		 * attached with a debugger agent, carrying out the debugging commands.
		 * Agents attached to the same debuggee identify themselves as such by using
		 * exactly the same Debuggee message value when registering.
		 */
		debuggee?: Debuggee;
	}

	/** Request to register a debuggee. */
	export interface RegisterDebuggeeRequestFormProperties {
	}
	export function CreateRegisterDebuggeeRequestFormGroup() {
		return new FormGroup<RegisterDebuggeeRequestFormProperties>({
		});

	}


	/** Response for registering a debuggee. */
	export interface RegisterDebuggeeResponse {

		/**
		 * A unique ID generated for the agent.
		 * Each RegisterDebuggee request will generate a new agent ID.
		 */
		agentId?: string | null;

		/**
		 * Represents the debugged application. The application may include one or more
		 * replicated processes executing the same code. Each of these processes is
		 * attached with a debugger agent, carrying out the debugging commands.
		 * Agents attached to the same debuggee identify themselves as such by using
		 * exactly the same Debuggee message value when registering.
		 */
		debuggee?: Debuggee;
	}

	/** Response for registering a debuggee. */
	export interface RegisterDebuggeeResponseFormProperties {

		/**
		 * A unique ID generated for the agent.
		 * Each RegisterDebuggee request will generate a new agent ID.
		 */
		agentId: FormControl<string | null | undefined>,
	}
	export function CreateRegisterDebuggeeResponseFormGroup() {
		return new FormGroup<RegisterDebuggeeResponseFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for setting a breakpoint. */
	export interface SetBreakpointResponse {

		/**
		 * ------------------------------------------------------------------------------
		 * ## Breakpoint (the resource)
		 * Represents the breakpoint specification, status and results.
		 */
		breakpoint?: Breakpoint;
	}

	/** Response for setting a breakpoint. */
	export interface SetBreakpointResponseFormProperties {
	}
	export function CreateSetBreakpointResponseFormGroup() {
		return new FormGroup<SetBreakpointResponseFormProperties>({
		});

	}


	/** Request to update an active breakpoint. */
	export interface UpdateActiveBreakpointRequest {

		/**
		 * ------------------------------------------------------------------------------
		 * ## Breakpoint (the resource)
		 * Represents the breakpoint specification, status and results.
		 */
		breakpoint?: Breakpoint;
	}

	/** Request to update an active breakpoint. */
	export interface UpdateActiveBreakpointRequestFormProperties {
	}
	export function CreateUpdateActiveBreakpointRequestFormGroup() {
		return new FormGroup<UpdateActiveBreakpointRequestFormProperties>({
		});

	}


	/**
	 * Response for updating an active breakpoint.
	 * The message is defined to allow future extensions.
	 */
	export interface UpdateActiveBreakpointResponse {
	}

	/**
	 * Response for updating an active breakpoint.
	 * The message is defined to allow future extensions.
	 */
	export interface UpdateActiveBreakpointResponseFormProperties {
	}
	export function CreateUpdateActiveBreakpointResponseFormGroup() {
		return new FormGroup<UpdateActiveBreakpointResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Registers the debuggee with the controller service.
		 * All agents attached to the same application must call this method with
		 * exactly the same request content to get back the same stable `debuggee_id`.
		 * Agents should call this method again whenever `google.rpc.Code.NOT_FOUND`
		 * is returned from any controller method.
		 * This protocol allows the controller service to disable debuggees, recover
		 * from data loss, or change the `debuggee_id` format. Agents must handle
		 * `debuggee_id` value changing upon re-registration.
		 * Post v2/controller/debuggees/register
		 * @return {void} Successful response
		 */
		Clouddebugger_controller_debuggees_register(requestBody: RegisterDebuggeeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/controller/debuggees/register', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the list of all active breakpoints for the debuggee.
		 * The breakpoint specification (`location`, `condition`, and `expressions`
		 * fields) is semantically immutable, although the field values may
		 * change. For example, an agent may update the location line number
		 * to reflect the actual line where the breakpoint was set, but this
		 * doesn't change the breakpoint semantics.
		 * This means that an agent does not need to check if a breakpoint has changed
		 * when it encounters the same breakpoint on a successive call.
		 * Moreover, an agent should remember the breakpoints that are completed
		 * until the controller removes them from the active list to avoid
		 * setting those breakpoints again.
		 * Get v2/controller/debuggees/{debuggeeId}/breakpoints
		 * @param {string} debuggeeId Required. Identifies the debuggee.
		 * @param {string} agentId Identifies the agent.
		 * This is the ID returned in the RegisterDebuggee response.
		 * @param {boolean} successOnTimeout If set to `true` (recommended), returns `google.rpc.Code.OK` status and
		 * sets the `wait_expired` response field to `true` when the server-selected
		 * timeout has expired.
		 * If set to `false` (deprecated), returns `google.rpc.Code.ABORTED` status
		 * when the server-selected timeout has expired.
		 * @param {string} waitToken A token that, if specified, blocks the method call until the list
		 * of active breakpoints has changed, or a server-selected timeout has
		 * expired. The value should be set from the `next_wait_token` field in
		 * the last response. The initial value should be set to `"init"`.
		 * @return {void} Successful response
		 */
		Clouddebugger_controller_debuggees_breakpoints_list(debuggeeId: string, agentId: string | null | undefined, successOnTimeout: boolean | null | undefined, waitToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/controller/debuggees/' + (debuggeeId == null ? '' : encodeURIComponent(debuggeeId)) + '/breakpoints&agentId=' + (agentId == null ? '' : encodeURIComponent(agentId)) + '&successOnTimeout=' + successOnTimeout + '&waitToken=' + (waitToken == null ? '' : encodeURIComponent(waitToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the breakpoint state or mutable fields.
		 * The entire Breakpoint message must be sent back to the controller service.
		 * Updates to active breakpoint fields are only allowed if the new value
		 * does not change the breakpoint specification. Updates to the `location`,
		 * `condition` and `expressions` fields should not alter the breakpoint
		 * semantics. These may only make changes such as canonicalizing a value
		 * or snapping the location to the correct line of code.
		 * Put v2/controller/debuggees/{debuggeeId}/breakpoints/{id}
		 * @param {string} debuggeeId Required. Identifies the debuggee being debugged.
		 * @param {string} id Breakpoint identifier, unique in the scope of the debuggee.
		 * @return {void} Successful response
		 */
		Clouddebugger_controller_debuggees_breakpoints_update(debuggeeId: string, id: string, requestBody: UpdateActiveBreakpointRequest): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v2/controller/debuggees/' + (debuggeeId == null ? '' : encodeURIComponent(debuggeeId)) + '/breakpoints/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all the debuggees that the user has access to.
		 * Get v2/debugger/debuggees
		 * @param {string} clientVersion Required. The client version making the call.
		 * Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
		 * @param {boolean} includeInactive When set to `true`, the result includes all debuggees. Otherwise, the
		 * result includes only debuggees that are active.
		 * @param {string} project Required. Project number of a Google Cloud project whose debuggees to list.
		 * @return {void} Successful response
		 */
		Clouddebugger_debugger_debuggees_list(clientVersion: string | null | undefined, includeInactive: boolean | null | undefined, project: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/debugger/debuggees?clientVersion=' + (clientVersion == null ? '' : encodeURIComponent(clientVersion)) + '&includeInactive=' + includeInactive + '&project=' + (project == null ? '' : encodeURIComponent(project)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all breakpoints for the debuggee.
		 * Get v2/debugger/debuggees/{debuggeeId}/breakpoints
		 * @param {string} debuggeeId Required. ID of the debuggee whose breakpoints to list.
		 * @param {BreakpointAction} action_value Only breakpoints with the specified action will pass the filter.
		 * @param {string} clientVersion Required. The client version making the call.
		 * Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
		 * @param {boolean} includeAllUsers When set to `true`, the response includes the list of breakpoints set by
		 * any user. Otherwise, it includes only breakpoints set by the caller.
		 * @param {boolean} includeInactive When set to `true`, the response includes active and inactive
		 * breakpoints. Otherwise, it includes only active breakpoints.
		 * @param {boolean} stripResults This field is deprecated. The following fields are always stripped out of
		 * the result: `stack_frames`, `evaluated_expressions` and `variable_table`.
		 * @param {string} waitToken A wait token that, if specified, blocks the call until the breakpoints
		 * list has changed, or a server selected timeout has expired.  The value
		 * should be set from the last response. The error code
		 * `google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which
		 * should be called again with the same `wait_token`.
		 * @return {void} Successful response
		 */
		Clouddebugger_debugger_debuggees_breakpoints_list(debuggeeId: string, action_value: BreakpointAction | null | undefined, clientVersion: string | null | undefined, includeAllUsers: boolean | null | undefined, includeInactive: boolean | null | undefined, stripResults: boolean | null | undefined, waitToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/debugger/debuggees/' + (debuggeeId == null ? '' : encodeURIComponent(debuggeeId)) + '/breakpoints&action_value=' + action_value + '&clientVersion=' + (clientVersion == null ? '' : encodeURIComponent(clientVersion)) + '&includeAllUsers=' + includeAllUsers + '&includeInactive=' + includeInactive + '&stripResults=' + stripResults + '&waitToken=' + (waitToken == null ? '' : encodeURIComponent(waitToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets the breakpoint to the debuggee.
		 * Post v2/debugger/debuggees/{debuggeeId}/breakpoints/set
		 * @param {string} debuggeeId Required. ID of the debuggee where the breakpoint is to be set.
		 * @param {Clouddebugger_debugger_debuggees_breakpoints_setCanaryOption} canaryOption The canary option set by the user upon setting breakpoint.
		 * @param {string} clientVersion Required. The client version making the call.
		 * Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
		 * @return {void} Successful response
		 */
		Clouddebugger_debugger_debuggees_breakpoints_set(debuggeeId: string, canaryOption: Clouddebugger_debugger_debuggees_breakpoints_setCanaryOption | null | undefined, clientVersion: string | null | undefined, requestBody: Breakpoint): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/debugger/debuggees/' + (debuggeeId == null ? '' : encodeURIComponent(debuggeeId)) + '/breakpoints/set&canaryOption=' + canaryOption + '&clientVersion=' + (clientVersion == null ? '' : encodeURIComponent(clientVersion)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes the breakpoint from the debuggee.
		 * Delete v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}
		 * @param {string} debuggeeId Required. ID of the debuggee whose breakpoint to delete.
		 * @param {string} breakpointId Required. ID of the breakpoint to delete.
		 * @param {string} clientVersion Required. The client version making the call.
		 * Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
		 * @return {void} Successful response
		 */
		Clouddebugger_debugger_debuggees_breakpoints_delete(debuggeeId: string, breakpointId: string, clientVersion: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/debugger/debuggees/' + (debuggeeId == null ? '' : encodeURIComponent(debuggeeId)) + '/breakpoints/' + (breakpointId == null ? '' : encodeURIComponent(breakpointId)) + '&clientVersion=' + (clientVersion == null ? '' : encodeURIComponent(clientVersion)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets breakpoint information.
		 * Get v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}
		 * @param {string} debuggeeId Required. ID of the debuggee whose breakpoint to get.
		 * @param {string} breakpointId Required. ID of the breakpoint to get.
		 * @param {string} clientVersion Required. The client version making the call.
		 * Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
		 * @return {void} Successful response
		 */
		Clouddebugger_debugger_debuggees_breakpoints_get(debuggeeId: string, breakpointId: string, clientVersion: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/debugger/debuggees/' + (debuggeeId == null ? '' : encodeURIComponent(debuggeeId)) + '/breakpoints/' + (breakpointId == null ? '' : encodeURIComponent(breakpointId)) + '&clientVersion=' + (clientVersion == null ? '' : encodeURIComponent(clientVersion)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Clouddebugger_debugger_debuggees_breakpoints_setCanaryOption { CANARY_OPTION_UNSPECIFIED = 0, CANARY_OPTION_TRY_ENABLE = 1, CANARY_OPTION_TRY_DISABLE = 2 }

}

