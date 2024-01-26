import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Contains the AST for the supplied Flux query */
	export interface ASTResponse {

		/** Represents a complete package source tree. */
		ast?: Package;
	}

	/** Contains the AST for the supplied Flux query */
	export interface ASTResponseFormProperties {
	}
	export function CreateASTResponseFormGroup() {
		return new FormGroup<ASTResponseFormProperties>({
		});

	}


	/** Represents a complete package source tree. */
	export interface Package {

		/** Package files */
		files?: Array<File>;

		/** Package name */
		package?: string | null;

		/** Package import path */
		path?: string | null;

		/** Type of AST node */
		type?: string | null;
	}

	/** Represents a complete package source tree. */
	export interface PackageFormProperties {

		/** Package name */
		package: FormControl<string | null | undefined>,

		/** Package import path */
		path: FormControl<string | null | undefined>,

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePackageFormGroup() {
		return new FormGroup<PackageFormProperties>({
			package: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a source from a single file */
	export interface File {

		/** List of Flux statements */
		body?: Array<Statement>;

		/** A list of package imports */
		imports?: Array<ImportDeclaration>;

		/** The name of the file. */
		name?: string | null;

		/** Defines a package identifier */
		package?: PackageClause;

		/** Type of AST node */
		type?: string | null;
	}

	/** Represents a source from a single file */
	export interface FileFormProperties {

		/** The name of the file. */
		name: FormControl<string | null | undefined>,

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFileFormGroup() {
		return new FormGroup<FileFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Statement {
	}
	export interface StatementFormProperties {
	}
	export function CreateStatementFormGroup() {
		return new FormGroup<StatementFormProperties>({
		});

	}


	/** Declares a package import */
	export interface ImportDeclaration {

		/** A valid Flux identifier */
		as?: Identifier;

		/** Expressions begin and end with double quote marks */
		path?: StringLiteral;

		/** Type of AST node */
		type?: string | null;
	}

	/** Declares a package import */
	export interface ImportDeclarationFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateImportDeclarationFormGroup() {
		return new FormGroup<ImportDeclarationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A valid Flux identifier */
	export interface Identifier {
		name?: string | null;

		/** Type of AST node */
		type?: string | null;
	}

	/** A valid Flux identifier */
	export interface IdentifierFormProperties {
		name: FormControl<string | null | undefined>,

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateIdentifierFormGroup() {
		return new FormGroup<IdentifierFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Expressions begin and end with double quote marks */
	export interface StringLiteral {

		/** Type of AST node */
		type?: string | null;
		value?: string | null;
	}

	/** Expressions begin and end with double quote marks */
	export interface StringLiteralFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateStringLiteralFormGroup() {
		return new FormGroup<StringLiteralFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines a package identifier */
	export interface PackageClause {

		/** A valid Flux identifier */
		name?: Identifier;

		/** Type of AST node */
		type?: string | null;
	}

	/** Defines a package identifier */
	export interface PackageClauseFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePackageClauseFormGroup() {
		return new FormGroup<PackageClauseFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddResourceMemberRequestBody {

		/** Required */
		id: string;
		name?: string | null;
	}
	export interface AddResourceMemberRequestBodyFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAddResourceMemberRequestBodyFormGroup() {
		return new FormGroup<AddResourceMemberRequestBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AnalyzeQueryResponse {
		AnalyzeQueryResponseErrors?: Array<AnalyzeQueryResponseErrors>;
	}
	export interface AnalyzeQueryResponseFormProperties {
	}
	export function CreateAnalyzeQueryResponseFormGroup() {
		return new FormGroup<AnalyzeQueryResponseFormProperties>({
		});

	}

	export interface AnalyzeQueryResponseErrors {
		character?: number | null;
		column?: number | null;
		line?: number | null;
		message?: string | null;
	}
	export interface AnalyzeQueryResponseErrorsFormProperties {
		character: FormControl<number | null | undefined>,
		column: FormControl<number | null | undefined>,
		line: FormControl<number | null | undefined>,
		message: FormControl<string | null | undefined>,
	}
	export function CreateAnalyzeQueryResponseErrorsFormGroup() {
		return new FormGroup<AnalyzeQueryResponseErrorsFormProperties>({
			character: new FormControl<number | null | undefined>(undefined),
			column: new FormControl<number | null | undefined>(undefined),
			line: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Used to create and directly specify the elements of an array object */
	export interface ArrayExpression {

		/** Elements of the array */
		elements?: Array<Expression>;

		/** Type of AST node */
		type?: string | null;
	}

	/** Used to create and directly specify the elements of an array object */
	export interface ArrayExpressionFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateArrayExpressionFormGroup() {
		return new FormGroup<ArrayExpressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Expression {
	}
	export interface ExpressionFormProperties {
	}
	export function CreateExpressionFormGroup() {
		return new FormGroup<ExpressionFormProperties>({
		});

	}

	export interface Authorization extends AuthorizationUpdateRequest {
		createdAt?: Date | null;
		id?: string | null;
		links?: AuthorizationLinks;

		/** Name of the org token is scoped to. */
		org?: string | null;

		/** ID of org that authorization is scoped to. */
		orgID?: string | null;

		/**
		 * List of permissions for an auth.  An auth must have at least one Permission.
		 * Minimum items: 1
		 */
		permissions?: Array<Permission>;

		/** Passed via the Authorization Header and Token Authentication type. */
		token?: string | null;
		updatedAt?: Date | null;

		/** Name of user that created and owns the token. */
		user?: string | null;

		/** ID of user that created and owns the token. */
		userID?: string | null;
	}
	export interface AuthorizationFormProperties extends AuthorizationUpdateRequestFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Name of the org token is scoped to. */
		org: FormControl<string | null | undefined>,

		/** ID of org that authorization is scoped to. */
		orgID: FormControl<string | null | undefined>,

		/** Passed via the Authorization Header and Token Authentication type. */
		token: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,

		/** Name of user that created and owns the token. */
		user: FormControl<string | null | undefined>,

		/** ID of user that created and owns the token. */
		userID: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationFormGroup() {
		return new FormGroup<AuthorizationFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
			userID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthorizationLinks {

		/** URI of resource. */
		self?: string | null;

		/** URI of resource. */
		user?: string | null;
	}
	export interface AuthorizationLinksFormProperties {

		/** URI of resource. */
		self: FormControl<string | null | undefined>,

		/** URI of resource. */
		user: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationLinksFormGroup() {
		return new FormGroup<AuthorizationLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
			user: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Permission {

		/** Required */
		action: PermissionAction;

		/** Required */
		resource: Resource;
	}
	export interface PermissionFormProperties {

		/** Required */
		action: FormControl<PermissionAction | null | undefined>,
	}
	export function CreatePermissionFormGroup() {
		return new FormGroup<PermissionFormProperties>({
			action: new FormControl<PermissionAction | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PermissionAction { read = 0, write = 1 }

	export interface Resource {

		/** If ID is set that is a permission for a specific resource. if it is not set it is a permission for all resources of that resource type. */
		id?: string | null;

		/** Optional name of the resource if the resource has a name field. */
		name?: string | null;

		/** Optional name of the organization of the organization with orgID. */
		org?: string | null;

		/** If orgID is set that is a permission for all resources owned my that org. if it is not set it is a permission for all resources of that resource type. */
		orgID?: string | null;

		/** Required */
		type: ResourceType;
	}
	export interface ResourceFormProperties {

		/** If ID is set that is a permission for a specific resource. if it is not set it is a permission for all resources of that resource type. */
		id: FormControl<string | null | undefined>,

		/** Optional name of the resource if the resource has a name field. */
		name: FormControl<string | null | undefined>,

		/** Optional name of the organization of the organization with orgID. */
		org: FormControl<string | null | undefined>,

		/** If orgID is set that is a permission for all resources owned my that org. if it is not set it is a permission for all resources of that resource type. */
		orgID: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ResourceType | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceType { authorizations = 0, buckets = 1, dashboards = 2, orgs = 3, sources = 4, tasks = 5, telegrafs = 6, users = 7, variables = 8, scrapers = 9, secrets = 10, labels = 11, views = 12, documents = 13, notificationRules = 14, notificationEndpoints = 15, checks = 16, dbrp = 17, notebooks = 18 }

	export interface AuthorizationPostRequest extends AuthorizationUpdateRequest {

		/** ID of org that authorization is scoped to. */
		orgID?: string | null;

		/**
		 * List of permissions for an auth.  An auth must have at least one Permission.
		 * Minimum items: 1
		 */
		permissions?: Array<Permission>;

		/** ID of user that authorization is scoped to. */
		userID?: string | null;
	}
	export interface AuthorizationPostRequestFormProperties extends AuthorizationUpdateRequestFormProperties {

		/** ID of org that authorization is scoped to. */
		orgID: FormControl<string | null | undefined>,

		/** ID of user that authorization is scoped to. */
		userID: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationPostRequestFormGroup() {
		return new FormGroup<AuthorizationPostRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			userID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AuthorizationUpdateRequest {

		/** A description of the token. */
		description?: string | null;

		/** If inactive the token is inactive and requests using the token will be rejected. */
		status?: AuthorizationUpdateRequestStatus | null;
	}
	export interface AuthorizationUpdateRequestFormProperties {

		/** A description of the token. */
		description: FormControl<string | null | undefined>,

		/** If inactive the token is inactive and requests using the token will be rejected. */
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,
	}
	export function CreateAuthorizationUpdateRequestFormGroup() {
		return new FormGroup<AuthorizationUpdateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
		});

	}

	export enum AuthorizationUpdateRequestStatus { active = 0, inactive = 1 }

	export interface Authorizations {
		authorizations?: Array<Authorization>;
		links?: Links;
	}
	export interface AuthorizationsFormProperties {
	}
	export function CreateAuthorizationsFormGroup() {
		return new FormGroup<AuthorizationsFormProperties>({
		});

	}

	export interface Links {

		/** URI of resource. */
		next?: string | null;

		/** URI of resource. */
		prev?: string | null;

		/**
		 * URI of resource.
		 * Required
		 */
		self: string;
	}
	export interface LinksFormProperties {

		/** URI of resource. */
		next: FormControl<string | null | undefined>,

		/** URI of resource. */
		prev: FormControl<string | null | undefined>,

		/**
		 * URI of resource.
		 * Required
		 */
		self: FormControl<string | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			next: new FormControl<string | null | undefined>(undefined),
			prev: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The viewport for a View's visualizations */
	export interface Axes {

		/**
		 * The description of a particular axis for a visualization.
		 * Required
		 */
		x: Axis;

		/**
		 * The description of a particular axis for a visualization.
		 * Required
		 */
		y: Axis;
	}

	/** The viewport for a View's visualizations */
	export interface AxesFormProperties {
	}
	export function CreateAxesFormGroup() {
		return new FormGroup<AxesFormProperties>({
		});

	}


	/** The description of a particular axis for a visualization. */
	export interface Axis {

		/** Base represents the radix for formatting axis values. */
		base?: AxisBase | null;

		/**
		 * The extents of an axis in the form [lower, upper]. Clients determine whether bounds are to be inclusive or exclusive of their limits
		 * Minimum items: 0
		 * Maximum items: 2
		 */
		bounds?: Array<string>;

		/** Label is a description of this Axis */
		label?: string | null;

		/** Prefix represents a label prefix for formatting axis values. */
		prefix?: string | null;

		/** Scale is the axis formatting scale. Supported: "log", "linear" */
		scale?: AxisScale | null;

		/** Suffix represents a label suffix for formatting axis values. */
		suffix?: string | null;
	}

	/** The description of a particular axis for a visualization. */
	export interface AxisFormProperties {

		/** Base represents the radix for formatting axis values. */
		base: FormControl<AxisBase | null | undefined>,

		/** Label is a description of this Axis */
		label: FormControl<string | null | undefined>,

		/** Prefix represents a label prefix for formatting axis values. */
		prefix: FormControl<string | null | undefined>,

		/** Scale is the axis formatting scale. Supported: "log", "linear" */
		scale: FormControl<AxisScale | null | undefined>,

		/** Suffix represents a label suffix for formatting axis values. */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateAxisFormGroup() {
		return new FormGroup<AxisFormProperties>({
			base: new FormControl<AxisBase | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			prefix: new FormControl<string | null | undefined>(undefined),
			scale: new FormControl<AxisScale | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AxisBase { '' = 0, _2 = 1, _10 = 2 }

	export enum AxisScale { log = 0, linear = 1 }


	/** A placeholder for statements for which no correct statement nodes can be created */
	export interface BadStatement {

		/** Raw source text */
		text?: string | null;

		/** Type of AST node */
		type?: string | null;
	}

	/** A placeholder for statements for which no correct statement nodes can be created */
	export interface BadStatementFormProperties {

		/** Raw source text */
		text: FormControl<string | null | undefined>,

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBadStatementFormGroup() {
		return new FormGroup<BadStatementFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BandViewProperties {

		/**
		 * The viewport for a View's visualizations
		 * Required
		 */
		axes: Axes;

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;
		generateXAxisTicks?: Array<string>;
		generateYAxisTicks?: Array<string>;

		/** Required */
		geom: BandViewPropertiesGeom;
		hoverDimension?: BandViewPropertiesHoverDimension | null;
		legendColorizeRows?: boolean | null;
		legendHide?: boolean | null;
		legendOpacity?: number | null;
		legendOrientationThreshold?: number | null;
		lowerColumn?: string | null;
		mainColumn?: string | null;

		/** Required */
		note: string;

		/** Required */
		queries: Array<DashboardQuery>;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;

		/** StaticLegend represents the options specific to the static legend */
		staticLegend?: StaticLegend;
		timeFormat?: string | null;

		/** Required */
		type: BandViewPropertiesType;
		upperColumn?: string | null;
		xColumn?: string | null;
		xTickStart?: number | null;
		xTickStep?: number | null;
		xTotalTicks?: number | null;
		yColumn?: string | null;
		yTickStart?: number | null;
		yTickStep?: number | null;
		yTotalTicks?: number | null;
	}
	export interface BandViewPropertiesFormProperties {

		/** Required */
		geom: FormControl<BandViewPropertiesGeom | null | undefined>,
		hoverDimension: FormControl<BandViewPropertiesHoverDimension | null | undefined>,
		legendColorizeRows: FormControl<boolean | null | undefined>,
		legendHide: FormControl<boolean | null | undefined>,
		legendOpacity: FormControl<number | null | undefined>,
		legendOrientationThreshold: FormControl<number | null | undefined>,
		lowerColumn: FormControl<string | null | undefined>,
		mainColumn: FormControl<string | null | undefined>,

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,
		timeFormat: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<BandViewPropertiesType | null | undefined>,
		upperColumn: FormControl<string | null | undefined>,
		xColumn: FormControl<string | null | undefined>,
		xTickStart: FormControl<number | null | undefined>,
		xTickStep: FormControl<number | null | undefined>,
		xTotalTicks: FormControl<number | null | undefined>,
		yColumn: FormControl<string | null | undefined>,
		yTickStart: FormControl<number | null | undefined>,
		yTickStep: FormControl<number | null | undefined>,
		yTotalTicks: FormControl<number | null | undefined>,
	}
	export function CreateBandViewPropertiesFormGroup() {
		return new FormGroup<BandViewPropertiesFormProperties>({
			geom: new FormControl<BandViewPropertiesGeom | null | undefined>(undefined, [Validators.required]),
			hoverDimension: new FormControl<BandViewPropertiesHoverDimension | null | undefined>(undefined),
			legendColorizeRows: new FormControl<boolean | null | undefined>(undefined),
			legendHide: new FormControl<boolean | null | undefined>(undefined),
			legendOpacity: new FormControl<number | null | undefined>(undefined),
			legendOrientationThreshold: new FormControl<number | null | undefined>(undefined),
			lowerColumn: new FormControl<string | null | undefined>(undefined),
			mainColumn: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			timeFormat: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BandViewPropertiesType | null | undefined>(undefined, [Validators.required]),
			upperColumn: new FormControl<string | null | undefined>(undefined),
			xColumn: new FormControl<string | null | undefined>(undefined),
			xTickStart: new FormControl<number | null | undefined>(undefined),
			xTickStep: new FormControl<number | null | undefined>(undefined),
			xTotalTicks: new FormControl<number | null | undefined>(undefined),
			yColumn: new FormControl<string | null | undefined>(undefined),
			yTickStart: new FormControl<number | null | undefined>(undefined),
			yTickStep: new FormControl<number | null | undefined>(undefined),
			yTotalTicks: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Defines an encoding of data value into color space. */
	export interface DashboardColor {

		/**
		 * The hex number of the color
		 * Required
		 * Max length: 7
		 * Min length: 7
		 */
		hex: string;

		/**
		 * The unique ID of the view color.
		 * Required
		 */
		id: string;

		/**
		 * The user-facing name of the hex color.
		 * Required
		 */
		name: string;

		/**
		 * Type is how the color is used.
		 * Required
		 */
		type: DashboardColorType;

		/**
		 * The data value mapped to this color.
		 * Required
		 */
		value: number;
	}

	/** Defines an encoding of data value into color space. */
	export interface DashboardColorFormProperties {

		/**
		 * The hex number of the color
		 * Required
		 * Max length: 7
		 * Min length: 7
		 */
		hex: FormControl<string | null | undefined>,

		/**
		 * The unique ID of the view color.
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The user-facing name of the hex color.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Type is how the color is used.
		 * Required
		 */
		type: FormControl<DashboardColorType | null | undefined>,

		/**
		 * The data value mapped to this color.
		 * Required
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateDashboardColorFormGroup() {
		return new FormGroup<DashboardColorFormProperties>({
			hex: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(7), Validators.maxLength(7)]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<DashboardColorType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DashboardColorType { min = 0, max = 1, threshold = 2, scale = 3, text = 4, background = 5 }

	export enum BandViewPropertiesGeom { line = 0, step = 1, stacked = 2, bar = 3, monotoneX = 4 }

	export enum BandViewPropertiesHoverDimension { auto = 0, x = 1, y = 2, xy = 3 }

	export interface DashboardQuery {
		builderConfig?: BuilderConfig;
		editMode?: DashboardQueryEditMode | null;
		name?: string | null;

		/** The text of the Flux query. */
		text?: string | null;
	}
	export interface DashboardQueryFormProperties {
		editMode: FormControl<DashboardQueryEditMode | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** The text of the Flux query. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateDashboardQueryFormGroup() {
		return new FormGroup<DashboardQueryFormProperties>({
			editMode: new FormControl<DashboardQueryEditMode | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuilderConfig {
		aggregateWindow?: BuilderConfigAggregateWindow;
		buckets?: Array<string>;
		functions?: Array<BuilderFunctionsType>;
		tags?: Array<BuilderTagsType>;
	}
	export interface BuilderConfigFormProperties {
	}
	export function CreateBuilderConfigFormGroup() {
		return new FormGroup<BuilderConfigFormProperties>({
		});

	}

	export interface BuilderConfigAggregateWindow {
		fillValues?: boolean | null;
		period?: string | null;
	}
	export interface BuilderConfigAggregateWindowFormProperties {
		fillValues: FormControl<boolean | null | undefined>,
		period: FormControl<string | null | undefined>,
	}
	export function CreateBuilderConfigAggregateWindowFormGroup() {
		return new FormGroup<BuilderConfigAggregateWindowFormProperties>({
			fillValues: new FormControl<boolean | null | undefined>(undefined),
			period: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuilderFunctionsType {
		name?: string | null;
	}
	export interface BuilderFunctionsTypeFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateBuilderFunctionsTypeFormGroup() {
		return new FormGroup<BuilderFunctionsTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BuilderTagsType {
		aggregateFunctionType?: BuilderTagsTypeAggregateFunctionType | null;
		key?: string | null;
		values?: Array<string>;
	}
	export interface BuilderTagsTypeFormProperties {
		aggregateFunctionType: FormControl<BuilderTagsTypeAggregateFunctionType | null | undefined>,
		key: FormControl<string | null | undefined>,
	}
	export function CreateBuilderTagsTypeFormGroup() {
		return new FormGroup<BuilderTagsTypeFormProperties>({
			aggregateFunctionType: new FormControl<BuilderTagsTypeAggregateFunctionType | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuilderTagsTypeAggregateFunctionType { filter = 0, group = 1 }

	export enum DashboardQueryEditMode { builder = 0, advanced = 1 }

	export enum BandViewPropertiesShape { 'chronograf-v2' = 0 }


	/** StaticLegend represents the options specific to the static legend */
	export interface StaticLegend {
		colorizeRows?: boolean | null;
		heightRatio?: number | null;
		hide?: boolean | null;
		opacity?: number | null;
		orientationThreshold?: number | null;
		valueAxis?: string | null;
		widthRatio?: number | null;
	}

	/** StaticLegend represents the options specific to the static legend */
	export interface StaticLegendFormProperties {
		colorizeRows: FormControl<boolean | null | undefined>,
		heightRatio: FormControl<number | null | undefined>,
		hide: FormControl<boolean | null | undefined>,
		opacity: FormControl<number | null | undefined>,
		orientationThreshold: FormControl<number | null | undefined>,
		valueAxis: FormControl<string | null | undefined>,
		widthRatio: FormControl<number | null | undefined>,
	}
	export function CreateStaticLegendFormGroup() {
		return new FormGroup<StaticLegendFormProperties>({
			colorizeRows: new FormControl<boolean | null | undefined>(undefined),
			heightRatio: new FormControl<number | null | undefined>(undefined),
			hide: new FormControl<boolean | null | undefined>(undefined),
			opacity: new FormControl<number | null | undefined>(undefined),
			orientationThreshold: new FormControl<number | null | undefined>(undefined),
			valueAxis: new FormControl<string | null | undefined>(undefined),
			widthRatio: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BandViewPropertiesType { band = 0 }


	/** uses binary operators to act on two operands in an expression */
	export interface BinaryExpression {
		left?: Expression;
		operator?: string | null;
		right?: Expression;

		/** Type of AST node */
		type?: string | null;
	}

	/** uses binary operators to act on two operands in an expression */
	export interface BinaryExpressionFormProperties {
		operator: FormControl<string | null | undefined>,

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBinaryExpressionFormGroup() {
		return new FormGroup<BinaryExpressionFormProperties>({
			operator: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of statements */
	export interface Block {

		/** Block body */
		body?: Array<Statement>;

		/** Type of AST node */
		type?: string | null;
	}

	/** A set of statements */
	export interface BlockFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBlockFormGroup() {
		return new FormGroup<BlockFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents boolean values */
	export interface BooleanLiteral {

		/** Type of AST node */
		type?: string | null;
		value?: boolean | null;
	}

	/** Represents boolean values */
	export interface BooleanLiteralFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
		value: FormControl<boolean | null | undefined>,
	}
	export function CreateBooleanLiteralFormGroup() {
		return new FormGroup<BooleanLiteralFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Bucket {
		createdAt?: Date | null;
		description?: string | null;
		id?: string | null;
		labels?: Array<Label>;
		links?: BucketLinks;

		/** Required */
		name: string;
		orgID?: string | null;

		/**
		 * Rules to expire or retain data.  No rules means data never expires.
		 * Required
		 */
		retentionRules: Array<RetentionRule>;
		rp?: string | null;
		schemaType?: BucketSchemaType | null;
		type?: BucketType | null;
		updatedAt?: Date | null;
	}
	export interface BucketFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,
		rp: FormControl<string | null | undefined>,
		schemaType: FormControl<BucketSchemaType | null | undefined>,
		type: FormControl<BucketType | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateBucketFormGroup() {
		return new FormGroup<BucketFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgID: new FormControl<string | null | undefined>(undefined),
			rp: new FormControl<string | null | undefined>(undefined),
			schemaType: new FormControl<BucketSchemaType | null | undefined>(undefined),
			type: new FormControl<BucketType | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Label {
		id?: string | null;
		name?: string | null;
		orgID?: string | null;

		/** Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value. */
		properties?: {[id: string]: string };
	}
	export interface LabelFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,

		/** Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface BucketLinks {

		/** URI of resource. */
		labels?: string | null;

		/** URI of resource. */
		members?: string | null;

		/** URI of resource. */
		org?: string | null;

		/** URI of resource. */
		owners?: string | null;

		/** URI of resource. */
		self?: string | null;

		/** URI of resource. */
		write?: string | null;
	}
	export interface BucketLinksFormProperties {

		/** URI of resource. */
		labels: FormControl<string | null | undefined>,

		/** URI of resource. */
		members: FormControl<string | null | undefined>,

		/** URI of resource. */
		org: FormControl<string | null | undefined>,

		/** URI of resource. */
		owners: FormControl<string | null | undefined>,

		/** URI of resource. */
		self: FormControl<string | null | undefined>,

		/** URI of resource. */
		write: FormControl<string | null | undefined>,
	}
	export function CreateBucketLinksFormGroup() {
		return new FormGroup<BucketLinksFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
			owners: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			write: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RetentionRule {

		/**
		 * Duration in seconds for how long data will be kept in the database. 0 means infinite.
		 * Required
		 * Minimum: 0
		 */
		everySeconds: number;

		/** Shard duration measured in seconds. */
		shardGroupDurationSeconds?: number | null;

		/** Required */
		type: RetentionRuleType;
	}
	export interface RetentionRuleFormProperties {

		/**
		 * Duration in seconds for how long data will be kept in the database. 0 means infinite.
		 * Required
		 * Minimum: 0
		 */
		everySeconds: FormControl<number | null | undefined>,

		/** Shard duration measured in seconds. */
		shardGroupDurationSeconds: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<RetentionRuleType | null | undefined>,
	}
	export function CreateRetentionRuleFormGroup() {
		return new FormGroup<RetentionRuleFormProperties>({
			everySeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			shardGroupDurationSeconds: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<RetentionRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RetentionRuleType { expire = 0 }

	export enum BucketSchemaType { implicit = 0, explicit = 1 }

	export enum BucketType { user = 0, system = 1 }

	export interface Buckets {
		buckets?: Array<Bucket>;
		links?: Links;
	}
	export interface BucketsFormProperties {
	}
	export function CreateBucketsFormGroup() {
		return new FormGroup<BucketsFormProperties>({
		});

	}

	export enum BuilderAggregateFunctionType { filter = 0, group = 1 }


	/** Declares a builtin identifier and its type */
	export interface BuiltinStatement {

		/** A valid Flux identifier */
		id?: Identifier;

		/** Type of AST node */
		type?: string | null;
	}

	/** Declares a builtin identifier and its type */
	export interface BuiltinStatementFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateBuiltinStatementFormGroup() {
		return new FormGroup<BuiltinStatementFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a function call */
	export interface CallExpression {

		/** Function arguments */
		arguments?: Array<Expression>;
		callee?: Expression;

		/** Type of AST node */
		type?: string | null;
	}

	/** Represents a function call */
	export interface CallExpressionFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateCallExpressionFormGroup() {
		return new FormGroup<CallExpressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cell {
		h?: number | null;
		id?: string | null;
		links?: CellLinks;

		/** The reference to a view from the views API. */
		viewID?: string | null;
		w?: number | null;
		x?: number | null;
		y?: number | null;
	}
	export interface CellFormProperties {
		h: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** The reference to a view from the views API. */
		viewID: FormControl<string | null | undefined>,
		w: FormControl<number | null | undefined>,
		x: FormControl<number | null | undefined>,
		y: FormControl<number | null | undefined>,
	}
	export function CreateCellFormGroup() {
		return new FormGroup<CellFormProperties>({
			h: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			viewID: new FormControl<string | null | undefined>(undefined),
			w: new FormControl<number | null | undefined>(undefined),
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CellLinks {
		self?: string | null;
		view?: string | null;
	}
	export interface CellLinksFormProperties {
		self: FormControl<string | null | undefined>,
		view: FormControl<string | null | undefined>,
	}
	export function CreateCellLinksFormGroup() {
		return new FormGroup<CellLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
			view: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CellUpdate {
		h?: number | null;
		w?: number | null;
		x?: number | null;
		y?: number | null;
	}
	export interface CellUpdateFormProperties {
		h: FormControl<number | null | undefined>,
		w: FormControl<number | null | undefined>,
		x: FormControl<number | null | undefined>,
		y: FormControl<number | null | undefined>,
	}
	export function CreateCellUpdateFormGroup() {
		return new FormGroup<CellUpdateFormProperties>({
			h: new FormControl<number | null | undefined>(undefined),
			w: new FormControl<number | null | undefined>(undefined),
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CellWithViewProperties {
	}
	export interface CellWithViewPropertiesFormProperties {
	}
	export function CreateCellWithViewPropertiesFormGroup() {
		return new FormGroup<CellWithViewPropertiesFormProperties>({
		});

	}

	export interface Check {
	}
	export interface CheckFormProperties {
	}
	export function CreateCheckFormGroup() {
		return new FormGroup<CheckFormProperties>({
		});

	}

	export interface CheckBase {
		createdAt?: Date | null;

		/** An optional description of the check. */
		description?: string | null;
		id?: string | null;
		labels?: Array<Label>;
		lastRunError?: string | null;
		lastRunStatus?: CheckBaseLastRunStatus | null;

		/** Timestamp of latest scheduled, completed run, RFC3339. */
		latestCompleted?: Date | null;
		links?: CheckBaseLinks;

		/** Required */
		name: string;

		/**
		 * The ID of the organization that owns this check.
		 * Required
		 */
		orgID: string;

		/** The ID of creator used to create this check. */
		ownerID?: string | null;

		/** Required */
		query: DashboardQuery;
		status?: AuthorizationUpdateRequestStatus | null;

		/** The ID of the task associated with this check. */
		taskID?: string | null;
		updatedAt?: Date | null;
	}
	export interface CheckBaseFormProperties {
		createdAt: FormControl<Date | null | undefined>,

		/** An optional description of the check. */
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastRunError: FormControl<string | null | undefined>,
		lastRunStatus: FormControl<CheckBaseLastRunStatus | null | undefined>,

		/** Timestamp of latest scheduled, completed run, RFC3339. */
		latestCompleted: FormControl<Date | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * The ID of the organization that owns this check.
		 * Required
		 */
		orgID: FormControl<string | null | undefined>,

		/** The ID of creator used to create this check. */
		ownerID: FormControl<string | null | undefined>,
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,

		/** The ID of the task associated with this check. */
		taskID: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCheckBaseFormGroup() {
		return new FormGroup<CheckBaseFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerID: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			taskID: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum CheckBaseLastRunStatus { failed = 0, success = 1, canceled = 2 }

	export interface CheckBaseLinks {

		/** URI of resource. */
		labels?: string | null;

		/** URI of resource. */
		members?: string | null;

		/** URI of resource. */
		owners?: string | null;

		/** URI of resource. */
		query?: string | null;

		/** URI of resource. */
		self?: string | null;
	}
	export interface CheckBaseLinksFormProperties {

		/** URI of resource. */
		labels: FormControl<string | null | undefined>,

		/** URI of resource. */
		members: FormControl<string | null | undefined>,

		/** URI of resource. */
		owners: FormControl<string | null | undefined>,

		/** URI of resource. */
		query: FormControl<string | null | undefined>,

		/** URI of resource. */
		self: FormControl<string | null | undefined>,
	}
	export function CreateCheckBaseLinksFormGroup() {
		return new FormGroup<CheckBaseLinksFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			owners: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CheckDiscriminator {
	}
	export interface CheckDiscriminatorFormProperties {
	}
	export function CreateCheckDiscriminatorFormGroup() {
		return new FormGroup<CheckDiscriminatorFormProperties>({
		});

	}

	export interface CheckPatch {
		description?: string | null;
		name?: string | null;
		status?: AuthorizationUpdateRequestStatus | null;
	}
	export interface CheckPatchFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,
	}
	export function CreateCheckPatchFormGroup() {
		return new FormGroup<CheckPatchFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
		});

	}


	/** The state to record if check matches a criteria. */
	export enum CheckStatusLevel { UNKNOWN = 0, OK = 1, INFO = 2, CRIT = 3, WARN = 4 }

	export interface CheckViewProperties {
		check?: Check;

		/** Required */
		checkID: string;

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;
		legendColorizeRows?: boolean | null;
		legendHide?: boolean | null;
		legendOpacity?: number | null;
		legendOrientationThreshold?: number | null;

		/** Required */
		queries: Array<DashboardQuery>;

		/** Required */
		shape: BandViewPropertiesShape;

		/** Required */
		type: CheckViewPropertiesType;
	}
	export interface CheckViewPropertiesFormProperties {

		/** Required */
		checkID: FormControl<string | null | undefined>,
		legendColorizeRows: FormControl<boolean | null | undefined>,
		legendHide: FormControl<boolean | null | undefined>,
		legendOpacity: FormControl<number | null | undefined>,
		legendOrientationThreshold: FormControl<number | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/** Required */
		type: FormControl<CheckViewPropertiesType | null | undefined>,
	}
	export function CreateCheckViewPropertiesFormGroup() {
		return new FormGroup<CheckViewPropertiesFormProperties>({
			checkID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			legendColorizeRows: new FormControl<boolean | null | undefined>(undefined),
			legendHide: new FormControl<boolean | null | undefined>(undefined),
			legendOpacity: new FormControl<number | null | undefined>(undefined),
			legendOrientationThreshold: new FormControl<number | null | undefined>(undefined),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<CheckViewPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CheckViewPropertiesType { check = 0 }

	export interface Checks {
		checks?: Array<Check>;
		links?: Links;
	}
	export interface ChecksFormProperties {
	}
	export function CreateChecksFormGroup() {
		return new FormGroup<ChecksFormProperties>({
		});

	}


	/** Selects one of two expressions, `Alternate` or `Consequent`, depending on a third boolean expression, `Test` */
	export interface ConditionalExpression {
		alternate?: Expression;
		consequent?: Expression;
		test?: Expression;

		/** Type of AST node */
		type?: string | null;
	}

	/** Selects one of two expressions, `Alternate` or `Consequent`, depending on a third boolean expression, `Test` */
	export interface ConditionalExpressionFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateConditionalExpressionFormGroup() {
		return new FormGroup<ConditionalExpressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConstantVariableProperties {
		type?: ConstantVariablePropertiesType | null;
		values?: Array<string>;
	}
	export interface ConstantVariablePropertiesFormProperties {
		type: FormControl<ConstantVariablePropertiesType | null | undefined>,
	}
	export function CreateConstantVariablePropertiesFormGroup() {
		return new FormGroup<ConstantVariablePropertiesFormProperties>({
			type: new FormControl<ConstantVariablePropertiesType | null | undefined>(undefined),
		});

	}

	export enum ConstantVariablePropertiesType { constant = 0 }

	export interface CreateCell {
		h?: number | null;
		name?: string | null;

		/** Makes a copy of the provided view. */
		usingView?: string | null;
		w?: number | null;
		x?: number | null;
		y?: number | null;
	}
	export interface CreateCellFormProperties {
		h: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Makes a copy of the provided view. */
		usingView: FormControl<string | null | undefined>,
		w: FormControl<number | null | undefined>,
		x: FormControl<number | null | undefined>,
		y: FormControl<number | null | undefined>,
	}
	export function CreateCreateCellFormGroup() {
		return new FormGroup<CreateCellFormProperties>({
			h: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			usingView: new FormControl<string | null | undefined>(undefined),
			w: new FormControl<number | null | undefined>(undefined),
			x: new FormControl<number | null | undefined>(undefined),
			y: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CreateDashboardRequest {

		/** The user-facing description of the dashboard. */
		description?: string | null;

		/**
		 * The user-facing name of the dashboard.
		 * Required
		 */
		name: string;

		/**
		 * The ID of the organization that owns the dashboard.
		 * Required
		 */
		orgID: string;
	}
	export interface CreateDashboardRequestFormProperties {

		/** The user-facing description of the dashboard. */
		description: FormControl<string | null | undefined>,

		/**
		 * The user-facing name of the dashboard.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The ID of the organization that owns the dashboard.
		 * Required
		 */
		orgID: FormControl<string | null | undefined>,
	}
	export function CreateCreateDashboardRequestFormGroup() {
		return new FormGroup<CreateDashboardRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CustomCheck extends CheckBase {

		/** Required */
		type: CustomCheckType;
	}
	export interface CustomCheckFormProperties extends CheckBaseFormProperties {

		/** Required */
		type: FormControl<CustomCheckType | null | undefined>,
	}
	export function CreateCustomCheckFormGroup() {
		return new FormGroup<CustomCheckFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerID: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			taskID: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<CustomCheckType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CustomCheckType { custom = 0 }

	export interface DBRP {

		/** the bucket ID used as target for the translation. */
		bucketID?: string | null;

		/** InfluxDB v1 database */
		database?: string | null;

		/** Specify if this mapping represents the default retention policy for the database specificed. */
		default?: boolean | null;

		/** the mapping identifier */
		id?: string | null;
		links?: Links;

		/** the organization that owns this mapping. */
		org?: string | null;

		/** the organization ID that owns this mapping. */
		orgID?: string | null;

		/** InfluxDB v1 retention policy */
		retention_policy?: string | null;
	}
	export interface DBRPFormProperties {

		/** the bucket ID used as target for the translation. */
		bucketID: FormControl<string | null | undefined>,

		/** InfluxDB v1 database */
		database: FormControl<string | null | undefined>,

		/** Specify if this mapping represents the default retention policy for the database specificed. */
		default: FormControl<boolean | null | undefined>,

		/** the mapping identifier */
		id: FormControl<string | null | undefined>,

		/** the organization that owns this mapping. */
		org: FormControl<string | null | undefined>,

		/** the organization ID that owns this mapping. */
		orgID: FormControl<string | null | undefined>,

		/** InfluxDB v1 retention policy */
		retention_policy: FormControl<string | null | undefined>,
	}
	export function CreateDBRPFormGroup() {
		return new FormGroup<DBRPFormProperties>({
			bucketID: new FormControl<string | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined),
			default: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			retention_policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBRPUpdate {

		/** InfluxDB v1 database */
		database?: string | null;
		default?: boolean | null;
		links?: Links;

		/** InfluxDB v1 retention policy */
		retention_policy?: string | null;
	}
	export interface DBRPUpdateFormProperties {

		/** InfluxDB v1 database */
		database: FormControl<string | null | undefined>,
		default: FormControl<boolean | null | undefined>,

		/** InfluxDB v1 retention policy */
		retention_policy: FormControl<string | null | undefined>,
	}
	export function CreateDBRPUpdateFormGroup() {
		return new FormGroup<DBRPUpdateFormProperties>({
			database: new FormControl<string | null | undefined>(undefined),
			default: new FormControl<boolean | null | undefined>(undefined),
			retention_policy: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DBRPs {
		content?: Array<DBRP>;
	}
	export interface DBRPsFormProperties {
	}
	export function CreateDBRPsFormGroup() {
		return new FormGroup<DBRPsFormProperties>({
		});

	}

	export interface Dashboard {
	}
	export interface DashboardFormProperties {
	}
	export function CreateDashboardFormGroup() {
		return new FormGroup<DashboardFormProperties>({
		});

	}

	export interface DashboardWithViewProperties {
	}
	export interface DashboardWithViewPropertiesFormProperties {
	}
	export function CreateDashboardWithViewPropertiesFormGroup() {
		return new FormGroup<DashboardWithViewPropertiesFormProperties>({
		});

	}

	export interface Dashboards {
		dashboards?: Array<Dashboard>;
		links?: Links;
	}
	export interface DashboardsFormProperties {
	}
	export function CreateDashboardsFormGroup() {
		return new FormGroup<DashboardsFormProperties>({
		});

	}


	/** Represents an instant in time with nanosecond precision using the syntax of golang's RFC3339 Nanosecond variant */
	export interface DateTimeLiteral {

		/** Type of AST node */
		type?: string | null;
		value?: Date | null;
	}

	/** Represents an instant in time with nanosecond precision using the syntax of golang's RFC3339 Nanosecond variant */
	export interface DateTimeLiteralFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
		value: FormControl<Date | null | undefined>,
	}
	export function CreateDateTimeLiteralFormGroup() {
		return new FormGroup<DateTimeLiteralFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface DeadmanCheck extends CheckBase {

		/** Check repetition interval. */
		every?: string | null;

		/** The state to record if check matches a criteria. */
		level?: CheckStatusLevel | null;

		/** Duration to delay after the schedule, before executing check. */
		offset?: string | null;

		/** If only zero values reported since time, trigger an alert */
		reportZero?: boolean | null;

		/** String duration for time that a series is considered stale and should not trigger deadman. */
		staleTime?: string | null;

		/** The template used to generate and write a status message. */
		statusMessageTemplate?: string | null;

		/** List of tags to write to each status. */
		DeadmanCheckTags?: Array<DeadmanCheckTags>;

		/** String duration before deadman triggers. */
		timeSince?: string | null;

		/** Required */
		type: DeadmanCheckType;
	}
	export interface DeadmanCheckFormProperties extends CheckBaseFormProperties {

		/** Check repetition interval. */
		every: FormControl<string | null | undefined>,

		/** The state to record if check matches a criteria. */
		level: FormControl<CheckStatusLevel | null | undefined>,

		/** Duration to delay after the schedule, before executing check. */
		offset: FormControl<string | null | undefined>,

		/** If only zero values reported since time, trigger an alert */
		reportZero: FormControl<boolean | null | undefined>,

		/** String duration for time that a series is considered stale and should not trigger deadman. */
		staleTime: FormControl<string | null | undefined>,

		/** The template used to generate and write a status message. */
		statusMessageTemplate: FormControl<string | null | undefined>,

		/** String duration before deadman triggers. */
		timeSince: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<DeadmanCheckType | null | undefined>,
	}
	export function CreateDeadmanCheckFormGroup() {
		return new FormGroup<DeadmanCheckFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerID: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			taskID: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			every: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<CheckStatusLevel | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			reportZero: new FormControl<boolean | null | undefined>(undefined),
			staleTime: new FormControl<string | null | undefined>(undefined),
			statusMessageTemplate: new FormControl<string | null | undefined>(undefined),
			timeSince: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<DeadmanCheckType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeadmanCheckTags {
		key?: string | null;
		value?: string | null;
	}
	export interface DeadmanCheckTagsFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateDeadmanCheckTagsFormGroup() {
		return new FormGroup<DeadmanCheckTagsFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeadmanCheckType { deadman = 0 }


	/** Indicates whether decimal places should be enforced, and how many digits it should show. */
	export interface DecimalPlaces {

		/** The number of digits after decimal to display */
		digits?: number | null;

		/** Indicates whether decimal point setting should be enforced */
		isEnforced?: boolean | null;
	}

	/** Indicates whether decimal places should be enforced, and how many digits it should show. */
	export interface DecimalPlacesFormProperties {

		/** The number of digits after decimal to display */
		digits: FormControl<number | null | undefined>,

		/** Indicates whether decimal point setting should be enforced */
		isEnforced: FormControl<boolean | null | undefined>,
	}
	export function CreateDecimalPlacesFormGroup() {
		return new FormGroup<DecimalPlacesFormProperties>({
			digits: new FormControl<number | null | undefined>(undefined),
			isEnforced: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The delete predicate request. */
	export interface DeletePredicateRequest {

		/** InfluxQL-like delete statement */
		predicate?: string | null;

		/**
		 * RFC3339Nano
		 * Required
		 */
		start: Date;

		/**
		 * RFC3339Nano
		 * Required
		 */
		stop: Date;
	}

	/** The delete predicate request. */
	export interface DeletePredicateRequestFormProperties {

		/** InfluxQL-like delete statement */
		predicate: FormControl<string | null | undefined>,

		/**
		 * RFC3339Nano
		 * Required
		 */
		start: FormControl<Date | null | undefined>,

		/**
		 * RFC3339Nano
		 * Required
		 */
		stop: FormControl<Date | null | undefined>,
	}
	export function CreateDeletePredicateRequestFormGroup() {
		return new FormGroup<DeletePredicateRequestFormProperties>({
			predicate: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			stop: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Dialect are options to change the default CSV output format; https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#dialect-descriptions */
	export interface Dialect {

		/** https://www.w3.org/TR/2015/REC-tabular-data-model-20151217/#columns */
		annotations?: Array<string>;

		/**
		 * Character prefixed to comment strings
		 * Max length: 1
		 * Min length: 0
		 */
		commentPrefix?: string | null;

		/** Format of timestamps */
		dateTimeFormat?: DialectDateTimeFormat | null;

		/**
		 * Separator between cells; the default is ,
		 * Max length: 1
		 * Min length: 1
		 */
		delimiter?: string | null;

		/** If true, the results will contain a header row */
		header?: boolean | null;
	}

	/** Dialect are options to change the default CSV output format; https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#dialect-descriptions */
	export interface DialectFormProperties {

		/**
		 * Character prefixed to comment strings
		 * Max length: 1
		 * Min length: 0
		 */
		commentPrefix: FormControl<string | null | undefined>,

		/** Format of timestamps */
		dateTimeFormat: FormControl<DialectDateTimeFormat | null | undefined>,

		/**
		 * Separator between cells; the default is ,
		 * Max length: 1
		 * Min length: 1
		 */
		delimiter: FormControl<string | null | undefined>,

		/** If true, the results will contain a header row */
		header: FormControl<boolean | null | undefined>,
	}
	export function CreateDialectFormGroup() {
		return new FormGroup<DialectFormProperties>({
			commentPrefix: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1)]),
			dateTimeFormat: new FormControl<DialectDateTimeFormat | null | undefined>(undefined),
			delimiter: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(1)]),
			header: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DialectDateTimeFormat { RFC3339 = 0, RFC3339Nano = 1 }


	/** Used to create and directly specify the elements of a dictionary */
	export interface DictExpression {

		/** Elements of the dictionary */
		elements?: Array<DictItem>;

		/** Type of AST node */
		type?: string | null;
	}

	/** Used to create and directly specify the elements of a dictionary */
	export interface DictExpressionFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDictExpressionFormGroup() {
		return new FormGroup<DictExpressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A key/value pair in a dictionary */
	export interface DictItem {
		key?: Expression;

		/** Type of AST node */
		type?: string | null;
		val?: Expression;
	}

	/** A key/value pair in a dictionary */
	export interface DictItemFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDictItemFormGroup() {
		return new FormGroup<DictItemFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Document {

		/** Required */
		content: string;

		/** Required */
		id: string;
		labels?: Array<Label>;
		links?: DocumentLinks;

		/** Required */
		meta: DocumentMeta;
	}
	export interface DocumentFormProperties {

		/** Required */
		content: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentLinks {

		/** URI of resource. */
		self?: string | null;
	}
	export interface DocumentLinksFormProperties {

		/** URI of resource. */
		self: FormControl<string | null | undefined>,
	}
	export function CreateDocumentLinksFormGroup() {
		return new FormGroup<DocumentLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentMeta {
		createdAt?: Date | null;
		description?: string | null;

		/** Required */
		name: string;
		templateID?: string | null;
		type?: string | null;
		updatedAt?: Date | null;

		/** Required */
		version: string;
	}
	export interface DocumentMetaFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		templateID: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateDocumentMetaFormGroup() {
		return new FormGroup<DocumentMetaFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateID: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentCreate {

		/** Required */
		content: string;

		/** An array of label IDs to be added as labels to the document. */
		labels?: Array<string>;

		/** Required */
		meta: DocumentMeta;

		/** The organization Name. Specify either `orgID` or `org`. */
		org?: string | null;

		/** The organization Name. Specify either `orgID` or `org`. */
		orgID?: string | null;
	}
	export interface DocumentCreateFormProperties {

		/** Required */
		content: FormControl<string | null | undefined>,

		/** The organization Name. Specify either `orgID` or `org`. */
		org: FormControl<string | null | undefined>,

		/** The organization Name. Specify either `orgID` or `org`. */
		orgID: FormControl<string | null | undefined>,
	}
	export function CreateDocumentCreateFormGroup() {
		return new FormGroup<DocumentCreateFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			org: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentListEntry {

		/** Required */
		id: string;
		labels?: Array<Label>;
		links?: DocumentListEntryLinks;

		/** Required */
		meta: DocumentMeta;
	}
	export interface DocumentListEntryFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,
	}
	export function CreateDocumentListEntryFormGroup() {
		return new FormGroup<DocumentListEntryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DocumentListEntryLinks {

		/** URI of resource. */
		self?: string | null;
	}
	export interface DocumentListEntryLinksFormProperties {

		/** URI of resource. */
		self: FormControl<string | null | undefined>,
	}
	export function CreateDocumentListEntryLinksFormGroup() {
		return new FormGroup<DocumentListEntryLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentUpdate {
		content?: string | null;
		meta?: DocumentMeta;
	}
	export interface DocumentUpdateFormProperties {
		content: FormControl<string | null | undefined>,
	}
	export function CreateDocumentUpdateFormGroup() {
		return new FormGroup<DocumentUpdateFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Documents {
		documents?: Array<DocumentListEntry>;
	}
	export interface DocumentsFormProperties {
	}
	export function CreateDocumentsFormGroup() {
		return new FormGroup<DocumentsFormProperties>({
		});

	}


	/** A pair consisting of length of time and the unit of time measured. It is the atomic unit from which all duration literals are composed. */
	export interface Duration {
		magnitude?: number | null;

		/** Type of AST node */
		type?: string | null;
		unit?: string | null;
	}

	/** A pair consisting of length of time and the unit of time measured. It is the atomic unit from which all duration literals are composed. */
	export interface DurationFormProperties {
		magnitude: FormControl<number | null | undefined>,

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
		unit: FormControl<string | null | undefined>,
	}
	export function CreateDurationFormGroup() {
		return new FormGroup<DurationFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			unit: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the elapsed time between two instants as an int64 nanosecond count with syntax of golang's time.Duration */
	export interface DurationLiteral {

		/** Type of AST node */
		type?: string | null;

		/** Duration values */
		values?: Array<Duration>;
	}

	/** Represents the elapsed time between two instants as an int64 nanosecond count with syntax of golang's time.Duration */
	export interface DurationLiteralFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateDurationLiteralFormGroup() {
		return new FormGroup<DurationLiteralFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {

		/**
		 * code is the machine-readable error code.
		 * Required
		 */
		code: ErrorCode;

		/** err is a stack of errors that occurred during processing of the request. Useful for debugging. */
		err?: string | null;

		/**
		 * message is a human-readable message.
		 * Required
		 */
		message: string;

		/** op describes the logical code operation during error. Useful for debugging. */
		op?: string | null;
	}
	export interface ErrorFormProperties {

		/**
		 * code is the machine-readable error code.
		 * Required
		 */
		code: FormControl<ErrorCode | null | undefined>,

		/** err is a stack of errors that occurred during processing of the request. Useful for debugging. */
		err: FormControl<string | null | undefined>,

		/**
		 * message is a human-readable message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/** op describes the logical code operation during error. Useful for debugging. */
		op: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			code: new FormControl<ErrorCode | null | undefined>(undefined, [Validators.required]),
			err: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			op: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ErrorCode { 'internal error' = 0, 'not found' = 1, conflict = 2, invalid = 3, 'unprocessable entity' = 4, 'empty value' = 5, unavailable = 6, forbidden = 7, 'too many requests' = 8, unauthorized = 9, 'method not allowed' = 10, 'request too large' = 11, 'unsupported media type' = 12 }


	/** May consist of an expression that does not return a value and is executed solely for its side-effects */
	export interface ExpressionStatement {
		expression?: Expression;

		/** Type of AST node */
		type?: string | null;
	}

	/** May consist of an expression that does not return a value and is executed solely for its side-effects */
	export interface ExpressionStatementFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateExpressionStatementFormGroup() {
		return new FormGroup<ExpressionStatementFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Field {

		/** Alias overrides the field name in the returned response.  Applies only if type is `func` */
		alias?: string | null;

		/** Args are the arguments to the function */
		args?: Array<Field>;

		/** `type` describes the field type. `func` is a function. `field` is a field reference. */
		type?: FieldType | null;

		/** value is the value of the field.  Meaning of the value is implied by the `type` key */
		value?: string | null;
	}
	export interface FieldFormProperties {

		/** Alias overrides the field name in the returned response.  Applies only if type is `func` */
		alias: FormControl<string | null | undefined>,

		/** `type` describes the field type. `func` is a function. `field` is a field reference. */
		type: FormControl<FieldType | null | undefined>,

		/** value is the value of the field.  Meaning of the value is implied by the `type` key */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFieldFormGroup() {
		return new FormGroup<FieldFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<FieldType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FieldType { func = 0, field = 1, integer = 2, number = 3, regex = 4, wildcard = 5 }

	export interface Flags {
	}
	export interface FlagsFormProperties {
	}
	export function CreateFlagsFormGroup() {
		return new FormGroup<FlagsFormProperties>({
		});

	}


	/** Represents floating point numbers according to the double representations defined by the IEEE-754-1985 */
	export interface FloatLiteral {

		/** Type of AST node */
		type?: string | null;
		value?: number | null;
	}

	/** Represents floating point numbers according to the double representations defined by the IEEE-754-1985 */
	export interface FloatLiteralFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateFloatLiteralFormGroup() {
		return new FormGroup<FloatLiteralFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Rendered flux that backs the check or notification. */
	export interface FluxResponse {
		flux?: string | null;
	}

	/** Rendered flux that backs the check or notification. */
	export interface FluxResponseFormProperties {
		flux: FormControl<string | null | undefined>,
	}
	export function CreateFluxResponseFormGroup() {
		return new FormGroup<FluxResponseFormProperties>({
			flux: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FluxSuggestion {
		name?: string | null;
		params?: {[id: string]: string };
	}
	export interface FluxSuggestionFormProperties {
		name: FormControl<string | null | undefined>,
		params: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateFluxSuggestionFormGroup() {
		return new FormGroup<FluxSuggestionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface FluxSuggestions {
		funcs?: Array<FluxSuggestion>;
	}
	export interface FluxSuggestionsFormProperties {
	}
	export function CreateFluxSuggestionsFormGroup() {
		return new FormGroup<FluxSuggestionsFormProperties>({
		});

	}


	/** Function expression */
	export interface FunctionExpression {
		body?: Node;

		/** Function parameters */
		params?: Array<Property>;

		/** Type of AST node */
		type?: string | null;
	}

	/** Function expression */
	export interface FunctionExpressionFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateFunctionExpressionFormGroup() {
		return new FormGroup<FunctionExpressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The value associated with a key */
	export interface Property {
		key?: PropertyKey;

		/** Type of AST node */
		type?: string | null;
		value?: Expression;
	}

	/** The value associated with a key */
	export interface PropertyFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePropertyFormGroup() {
		return new FormGroup<PropertyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GaugeViewProperties {

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;

		/**
		 * Indicates whether decimal places should be enforced, and how many digits it should show.
		 * Required
		 */
		decimalPlaces: DecimalPlaces;

		/** Required */
		note: string;

		/** Required */
		prefix: string;

		/** Required */
		queries: Array<DashboardQuery>;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;

		/** Required */
		suffix: string;

		/** Required */
		tickPrefix: string;

		/** Required */
		tickSuffix: string;

		/** Required */
		type: GaugeViewPropertiesType;
	}
	export interface GaugeViewPropertiesFormProperties {

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		prefix: FormControl<string | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,

		/** Required */
		suffix: FormControl<string | null | undefined>,

		/** Required */
		tickPrefix: FormControl<string | null | undefined>,

		/** Required */
		tickSuffix: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<GaugeViewPropertiesType | null | undefined>,
	}
	export function CreateGaugeViewPropertiesFormGroup() {
		return new FormGroup<GaugeViewPropertiesFormProperties>({
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			suffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tickPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tickSuffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<GaugeViewPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GaugeViewPropertiesType { gauge = 0 }

	export interface GeoCircleViewLayer extends GeoViewLayerProperties {

		/**
		 * The description of a particular axis for a visualization.
		 * Required
		 */
		colorDimension: Axis;

		/**
		 * Circle color field
		 * Required
		 */
		colorField: string;

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;

		/** Interpolate circle color based on displayed value */
		interpolateColors?: boolean | null;

		/** Maximum radius size in pixels */
		radius?: number | null;

		/**
		 * The description of a particular axis for a visualization.
		 * Required
		 */
		radiusDimension: Axis;

		/**
		 * Radius field
		 * Required
		 */
		radiusField: string;
	}
	export interface GeoCircleViewLayerFormProperties extends GeoViewLayerPropertiesFormProperties {

		/**
		 * Circle color field
		 * Required
		 */
		colorField: FormControl<string | null | undefined>,

		/** Interpolate circle color based on displayed value */
		interpolateColors: FormControl<boolean | null | undefined>,

		/** Maximum radius size in pixels */
		radius: FormControl<number | null | undefined>,

		/**
		 * Radius field
		 * Required
		 */
		radiusField: FormControl<string | null | undefined>,
	}
	export function CreateGeoCircleViewLayerFormGroup() {
		return new FormGroup<GeoCircleViewLayerFormProperties>({
			type: new FormControl<GeoViewLayerPropertiesType | null | undefined>(undefined, [Validators.required]),
			colorField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			interpolateColors: new FormControl<boolean | null | undefined>(undefined),
			radius: new FormControl<number | null | undefined>(undefined),
			radiusField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GeoHeatMapViewLayer extends GeoViewLayerProperties {

		/**
		 * Blur for heatmap points
		 * Required
		 */
		blur: number;

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;

		/**
		 * The description of a particular axis for a visualization.
		 * Required
		 */
		intensityDimension: Axis;

		/**
		 * Intensity field
		 * Required
		 */
		intensityField: string;

		/**
		 * Radius size in pixels
		 * Required
		 */
		radius: number;
	}
	export interface GeoHeatMapViewLayerFormProperties extends GeoViewLayerPropertiesFormProperties {

		/**
		 * Blur for heatmap points
		 * Required
		 */
		blur: FormControl<number | null | undefined>,

		/**
		 * Intensity field
		 * Required
		 */
		intensityField: FormControl<string | null | undefined>,

		/**
		 * Radius size in pixels
		 * Required
		 */
		radius: FormControl<number | null | undefined>,
	}
	export function CreateGeoHeatMapViewLayerFormGroup() {
		return new FormGroup<GeoHeatMapViewLayerFormProperties>({
			type: new FormControl<GeoViewLayerPropertiesType | null | undefined>(undefined, [Validators.required]),
			blur: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			intensityField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			radius: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface GeoPointMapViewLayer extends GeoViewLayerProperties {

		/**
		 * The description of a particular axis for a visualization.
		 * Required
		 */
		colorDimension: Axis;

		/**
		 * Marker color field
		 * Required
		 */
		colorField: string;

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;

		/** Cluster close markers together */
		isClustered?: boolean | null;
	}
	export interface GeoPointMapViewLayerFormProperties extends GeoViewLayerPropertiesFormProperties {

		/**
		 * Marker color field
		 * Required
		 */
		colorField: FormControl<string | null | undefined>,

		/** Cluster close markers together */
		isClustered: FormControl<boolean | null | undefined>,
	}
	export function CreateGeoPointMapViewLayerFormGroup() {
		return new FormGroup<GeoPointMapViewLayerFormProperties>({
			type: new FormControl<GeoViewLayerPropertiesType | null | undefined>(undefined, [Validators.required]),
			colorField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			isClustered: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GeoTrackMapViewLayer extends GeoViewLayerProperties {

		/** Colors define color encoding of data into a visualization */
		colors?: Array<DashboardColor>;

		/** Assign different colors to different tracks */
		randomColors?: boolean | null;

		/** Speed of the track animation */
		speed?: number | null;

		/** Width of the track */
		trackWidth?: number | null;
	}
	export interface GeoTrackMapViewLayerFormProperties extends GeoViewLayerPropertiesFormProperties {

		/** Assign different colors to different tracks */
		randomColors: FormControl<boolean | null | undefined>,

		/** Speed of the track animation */
		speed: FormControl<number | null | undefined>,

		/** Width of the track */
		trackWidth: FormControl<number | null | undefined>,
	}
	export function CreateGeoTrackMapViewLayerFormGroup() {
		return new FormGroup<GeoTrackMapViewLayerFormProperties>({
			type: new FormControl<GeoViewLayerPropertiesType | null | undefined>(undefined, [Validators.required]),
			randomColors: new FormControl<boolean | null | undefined>(undefined),
			speed: new FormControl<number | null | undefined>(undefined),
			trackWidth: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GeoViewLayer {
	}
	export interface GeoViewLayerFormProperties {
	}
	export function CreateGeoViewLayerFormGroup() {
		return new FormGroup<GeoViewLayerFormProperties>({
		});

	}

	export interface GeoViewLayerProperties {

		/** Required */
		type: GeoViewLayerPropertiesType;
	}
	export interface GeoViewLayerPropertiesFormProperties {

		/** Required */
		type: FormControl<GeoViewLayerPropertiesType | null | undefined>,
	}
	export function CreateGeoViewLayerPropertiesFormGroup() {
		return new FormGroup<GeoViewLayerPropertiesFormProperties>({
			type: new FormControl<GeoViewLayerPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GeoViewLayerPropertiesType { heatmap = 0, circleMap = 1, pointMap = 2, trackMap = 3 }

	export interface GeoViewProperties {

		/**
		 * If true, map zoom and pan controls are enabled on the dashboard view
		 * Required
		 */
		allowPanAndZoom: boolean;

		/**
		 * Coordinates of the center of the map
		 * Required
		 */
		center: GeoViewPropertiesCenter;

		/** Colors define color encoding of data into a visualization */
		colors?: Array<DashboardColor>;

		/**
		 * If true, search results get automatically regroupped so that lon,lat and value are treated as columns
		 * Required
		 */
		detectCoordinateFields: boolean;

		/**
		 * List of individual layers shown in the map
		 * Required
		 */
		layers: Array<GeoViewLayer>;

		/** Define map type - regular, satellite etc. */
		mapStyle?: string | null;

		/** Required */
		note: string;

		/** Required */
		queries: Array<DashboardQuery>;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;

		/** Required */
		type: GeoViewPropertiesType;

		/**
		 * Zoom level used for initial display of the map
		 * Required
		 * Minimum: 1
		 * Maximum: 28
		 */
		zoom: number;
	}
	export interface GeoViewPropertiesFormProperties {

		/**
		 * If true, map zoom and pan controls are enabled on the dashboard view
		 * Required
		 */
		allowPanAndZoom: FormControl<boolean | null | undefined>,

		/**
		 * If true, search results get automatically regroupped so that lon,lat and value are treated as columns
		 * Required
		 */
		detectCoordinateFields: FormControl<boolean | null | undefined>,

		/** Define map type - regular, satellite etc. */
		mapStyle: FormControl<string | null | undefined>,

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,

		/** Required */
		type: FormControl<GeoViewPropertiesType | null | undefined>,

		/**
		 * Zoom level used for initial display of the map
		 * Required
		 * Minimum: 1
		 * Maximum: 28
		 */
		zoom: FormControl<number | null | undefined>,
	}
	export function CreateGeoViewPropertiesFormGroup() {
		return new FormGroup<GeoViewPropertiesFormProperties>({
			allowPanAndZoom: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			detectCoordinateFields: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			mapStyle: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<GeoViewPropertiesType | null | undefined>(undefined, [Validators.required]),
			zoom: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(28)]),
		});

	}

	export interface GeoViewPropertiesCenter {

		/**
		 * Latitude of the center of the map
		 * Required
		 */
		lat: number;

		/**
		 * Longitude of the center of the map
		 * Required
		 */
		lon: number;
	}
	export interface GeoViewPropertiesCenterFormProperties {

		/**
		 * Latitude of the center of the map
		 * Required
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * Longitude of the center of the map
		 * Required
		 */
		lon: FormControl<number | null | undefined>,
	}
	export function CreateGeoViewPropertiesCenterFormGroup() {
		return new FormGroup<GeoViewPropertiesCenterFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lon: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GeoViewPropertiesType { geo = 0 }

	export interface GreaterThreshold extends ThresholdBase {

		/** Required */
		type: GreaterThresholdType;

		/** Required */
		value: number;
	}
	export interface GreaterThresholdFormProperties extends ThresholdBaseFormProperties {

		/** Required */
		type: FormControl<GreaterThresholdType | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateGreaterThresholdFormGroup() {
		return new FormGroup<GreaterThresholdFormProperties>({
			allValues: new FormControl<boolean | null | undefined>(undefined),
			level: new FormControl<CheckStatusLevel | null | undefined>(undefined),
			type: new FormControl<GreaterThresholdType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum GreaterThresholdType { greater = 0 }

	export interface HTTPNotificationEndpoint {
	}
	export interface HTTPNotificationEndpointFormProperties {
	}
	export function CreateHTTPNotificationEndpointFormGroup() {
		return new FormGroup<HTTPNotificationEndpointFormProperties>({
		});

	}

	export interface HTTPNotificationRule extends NotificationRuleBase {

		/** Required */
		type: HTTPNotificationRuleType;
		url?: string | null;
	}
	export interface HTTPNotificationRuleFormProperties extends NotificationRuleBaseFormProperties {

		/** Required */
		type: FormControl<HTTPNotificationRuleType | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateHTTPNotificationRuleFormGroup() {
		return new FormGroup<HTTPNotificationRuleFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpointID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			every: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			limitEvery: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerID: new FormControl<string | null | undefined>(undefined),
			runbookLink: new FormControl<string | null | undefined>(undefined),
			sleepUntil: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined, [Validators.required]),
			taskID: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<HTTPNotificationRuleType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HTTPNotificationRuleType { http = 0 }

	export interface HTTPNotificationRuleBase {

		/** Required */
		type: HTTPNotificationRuleType;
		url?: string | null;
	}
	export interface HTTPNotificationRuleBaseFormProperties {

		/** Required */
		type: FormControl<HTTPNotificationRuleType | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateHTTPNotificationRuleBaseFormGroup() {
		return new FormGroup<HTTPNotificationRuleBaseFormProperties>({
			type: new FormControl<HTTPNotificationRuleType | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HealthCheck {
		checks?: Array<HealthCheck>;
		commit?: string | null;
		message?: string | null;

		/** Required */
		name: string;

		/** Required */
		status: HealthCheckStatus;
		version?: string | null;
	}
	export interface HealthCheckFormProperties {
		commit: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<HealthCheckStatus | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateHealthCheckFormGroup() {
		return new FormGroup<HealthCheckFormProperties>({
			commit: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<HealthCheckStatus | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HealthCheckStatus { pass = 0, fail = 1 }

	export interface HeatmapViewProperties {

		/** Required */
		binSize: number;

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<string>;
		generateXAxisTicks?: Array<string>;
		generateYAxisTicks?: Array<string>;
		legendColorizeRows?: boolean | null;
		legendHide?: boolean | null;
		legendOpacity?: number | null;
		legendOrientationThreshold?: number | null;

		/** Required */
		note: string;

		/** Required */
		queries: Array<DashboardQuery>;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;
		timeFormat?: string | null;

		/** Required */
		type: HeatmapViewPropertiesType;

		/** Required */
		xAxisLabel: string;

		/** Required */
		xColumn: string;

		/**
		 * Required
		 * Maximum items: 2
		 */
		xDomain: Array<number>;

		/** Required */
		xPrefix: string;

		/** Required */
		xSuffix: string;
		xTickStart?: number | null;
		xTickStep?: number | null;
		xTotalTicks?: number | null;

		/** Required */
		yAxisLabel: string;

		/** Required */
		yColumn: string;

		/**
		 * Required
		 * Maximum items: 2
		 */
		yDomain: Array<number>;

		/** Required */
		yPrefix: string;

		/** Required */
		ySuffix: string;
		yTickStart?: number | null;
		yTickStep?: number | null;
		yTotalTicks?: number | null;
	}
	export interface HeatmapViewPropertiesFormProperties {

		/** Required */
		binSize: FormControl<number | null | undefined>,
		legendColorizeRows: FormControl<boolean | null | undefined>,
		legendHide: FormControl<boolean | null | undefined>,
		legendOpacity: FormControl<number | null | undefined>,
		legendOrientationThreshold: FormControl<number | null | undefined>,

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,
		timeFormat: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<HeatmapViewPropertiesType | null | undefined>,

		/** Required */
		xAxisLabel: FormControl<string | null | undefined>,

		/** Required */
		xColumn: FormControl<string | null | undefined>,

		/** Required */
		xPrefix: FormControl<string | null | undefined>,

		/** Required */
		xSuffix: FormControl<string | null | undefined>,
		xTickStart: FormControl<number | null | undefined>,
		xTickStep: FormControl<number | null | undefined>,
		xTotalTicks: FormControl<number | null | undefined>,

		/** Required */
		yAxisLabel: FormControl<string | null | undefined>,

		/** Required */
		yColumn: FormControl<string | null | undefined>,

		/** Required */
		yPrefix: FormControl<string | null | undefined>,

		/** Required */
		ySuffix: FormControl<string | null | undefined>,
		yTickStart: FormControl<number | null | undefined>,
		yTickStep: FormControl<number | null | undefined>,
		yTotalTicks: FormControl<number | null | undefined>,
	}
	export function CreateHeatmapViewPropertiesFormGroup() {
		return new FormGroup<HeatmapViewPropertiesFormProperties>({
			binSize: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			legendColorizeRows: new FormControl<boolean | null | undefined>(undefined),
			legendHide: new FormControl<boolean | null | undefined>(undefined),
			legendOpacity: new FormControl<number | null | undefined>(undefined),
			legendOrientationThreshold: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			timeFormat: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<HeatmapViewPropertiesType | null | undefined>(undefined, [Validators.required]),
			xAxisLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xColumn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xSuffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xTickStart: new FormControl<number | null | undefined>(undefined),
			xTickStep: new FormControl<number | null | undefined>(undefined),
			xTotalTicks: new FormControl<number | null | undefined>(undefined),
			yAxisLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yColumn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ySuffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yTickStart: new FormControl<number | null | undefined>(undefined),
			yTickStep: new FormControl<number | null | undefined>(undefined),
			yTotalTicks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum HeatmapViewPropertiesType { heatmap = 0 }

	export interface HistogramViewProperties {

		/** Required */
		binCount: number;

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;

		/** Required */
		fillColumns: Array<string>;
		legendColorizeRows?: boolean | null;
		legendHide?: boolean | null;
		legendOpacity?: number | null;
		legendOrientationThreshold?: number | null;

		/** Required */
		note: string;

		/** Required */
		position: HistogramViewPropertiesPosition;

		/** Required */
		queries: Array<DashboardQuery>;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;

		/** Required */
		type: HistogramViewPropertiesType;

		/** Required */
		xAxisLabel: string;

		/** Required */
		xColumn: string;

		/** Required */
		xDomain: Array<number>;
	}
	export interface HistogramViewPropertiesFormProperties {

		/** Required */
		binCount: FormControl<number | null | undefined>,
		legendColorizeRows: FormControl<boolean | null | undefined>,
		legendHide: FormControl<boolean | null | undefined>,
		legendOpacity: FormControl<number | null | undefined>,
		legendOrientationThreshold: FormControl<number | null | undefined>,

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		position: FormControl<HistogramViewPropertiesPosition | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,

		/** Required */
		type: FormControl<HistogramViewPropertiesType | null | undefined>,

		/** Required */
		xAxisLabel: FormControl<string | null | undefined>,

		/** Required */
		xColumn: FormControl<string | null | undefined>,
	}
	export function CreateHistogramViewPropertiesFormGroup() {
		return new FormGroup<HistogramViewPropertiesFormProperties>({
			binCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			legendColorizeRows: new FormControl<boolean | null | undefined>(undefined),
			legendHide: new FormControl<boolean | null | undefined>(undefined),
			legendOpacity: new FormControl<number | null | undefined>(undefined),
			legendOrientationThreshold: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<HistogramViewPropertiesPosition | null | undefined>(undefined, [Validators.required]),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<HistogramViewPropertiesType | null | undefined>(undefined, [Validators.required]),
			xAxisLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xColumn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum HistogramViewPropertiesPosition { overlaid = 0, stacked = 1 }

	export enum HistogramViewPropertiesType { histogram = 0 }


	/** Represents indexing into an array */
	export interface IndexExpression {
		array?: Expression;
		index?: Expression;

		/** Type of AST node */
		type?: string | null;
	}

	/** Represents indexing into an array */
	export interface IndexExpressionFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateIndexExpressionFormGroup() {
		return new FormGroup<IndexExpressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Query influx using the InfluxQL language */
	export interface InfluxQLQuery {

		/** Bucket is to be used instead of the database and retention policy specified in the InfluxQL query. */
		bucket?: string | null;

		/**
		 * InfluxQL query execute.
		 * Required
		 */
		query: string;

		/** The type of query. Must be "influxql". */
		type?: InfluxQLQueryType | null;
	}

	/** Query influx using the InfluxQL language */
	export interface InfluxQLQueryFormProperties {

		/** Bucket is to be used instead of the database and retention policy specified in the InfluxQL query. */
		bucket: FormControl<string | null | undefined>,

		/**
		 * InfluxQL query execute.
		 * Required
		 */
		query: FormControl<string | null | undefined>,

		/** The type of query. Must be "influxql". */
		type: FormControl<InfluxQLQueryType | null | undefined>,
	}
	export function CreateInfluxQLQueryFormGroup() {
		return new FormGroup<InfluxQLQueryFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<InfluxQLQueryType | null | undefined>(undefined),
		});

	}

	export enum InfluxQLQueryType { influxql = 0 }


	/** Represents integer numbers */
	export interface IntegerLiteral {

		/** Type of AST node */
		type?: string | null;
		value?: string | null;
	}

	/** Represents integer numbers */
	export interface IntegerLiteralFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateIntegerLiteralFormGroup() {
		return new FormGroup<IntegerLiteralFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IsOnboarding {

		/** True means that the influxdb instance has NOT had initial setup; false means that the database has been setup. */
		allowed?: boolean | null;
	}
	export interface IsOnboardingFormProperties {

		/** True means that the influxdb instance has NOT had initial setup; false means that the database has been setup. */
		allowed: FormControl<boolean | null | undefined>,
	}
	export function CreateIsOnboardingFormGroup() {
		return new FormGroup<IsOnboardingFormProperties>({
			allowed: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface LabelCreateRequest {

		/** Required */
		name: string;

		/** Required */
		orgID: string;

		/** Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value. */
		properties?: {[id: string]: string };
	}
	export interface LabelCreateRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		orgID: FormControl<string | null | undefined>,

		/** Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLabelCreateRequestFormGroup() {
		return new FormGroup<LabelCreateRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface LabelMapping {
		labelID?: string | null;
	}
	export interface LabelMappingFormProperties {
		labelID: FormControl<string | null | undefined>,
	}
	export function CreateLabelMappingFormGroup() {
		return new FormGroup<LabelMappingFormProperties>({
			labelID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LabelResponse {
		label?: Label;
		links?: Links;
	}
	export interface LabelResponseFormProperties {
	}
	export function CreateLabelResponseFormGroup() {
		return new FormGroup<LabelResponseFormProperties>({
		});

	}

	export interface LabelUpdate {
		name?: string | null;

		/** Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value. */
		properties?: {[id: string]: string };
	}
	export interface LabelUpdateFormProperties {
		name: FormControl<string | null | undefined>,

		/** Key/Value pairs associated with this label. Keys can be removed by sending an update with an empty value. */
		properties: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLabelUpdateFormGroup() {
		return new FormGroup<LabelUpdateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface LabelsResponse {
		labels?: Array<Label>;
		links?: Links;
	}
	export interface LabelsResponseFormProperties {
	}
	export function CreateLabelsResponseFormGroup() {
		return new FormGroup<LabelsResponseFormProperties>({
		});

	}


	/** Flux query to be analyzed. */
	export interface LanguageRequest {

		/**
		 * Flux query script to be analyzed
		 * Required
		 */
		query: string;
	}

	/** Flux query to be analyzed. */
	export interface LanguageRequestFormProperties {

		/**
		 * Flux query script to be analyzed
		 * Required
		 */
		query: FormControl<string | null | undefined>,
	}
	export function CreateLanguageRequestFormGroup() {
		return new FormGroup<LanguageRequestFormProperties>({
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LesserThreshold extends ThresholdBase {

		/** Required */
		type: LesserThresholdType;

		/** Required */
		value: number;
	}
	export interface LesserThresholdFormProperties extends ThresholdBaseFormProperties {

		/** Required */
		type: FormControl<LesserThresholdType | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateLesserThresholdFormGroup() {
		return new FormGroup<LesserThresholdFormProperties>({
			allValues: new FormControl<boolean | null | undefined>(undefined),
			level: new FormControl<CheckStatusLevel | null | undefined>(undefined),
			type: new FormControl<LesserThresholdType | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LesserThresholdType { lesser = 0 }

	export interface LinePlusSingleStatProperties {

		/**
		 * The viewport for a View's visualizations
		 * Required
		 */
		axes: Axes;

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;

		/**
		 * Indicates whether decimal places should be enforced, and how many digits it should show.
		 * Required
		 */
		decimalPlaces: DecimalPlaces;
		generateXAxisTicks?: Array<string>;
		generateYAxisTicks?: Array<string>;
		hoverDimension?: BandViewPropertiesHoverDimension | null;
		legendColorizeRows?: boolean | null;
		legendHide?: boolean | null;
		legendOpacity?: number | null;
		legendOrientationThreshold?: number | null;

		/** Required */
		note: string;

		/** Required */
		position: HistogramViewPropertiesPosition;

		/** Required */
		prefix: string;

		/** Required */
		queries: Array<DashboardQuery>;
		shadeBelow?: boolean | null;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;

		/** StaticLegend represents the options specific to the static legend */
		staticLegend?: StaticLegend;

		/** Required */
		suffix: string;
		timeFormat?: string | null;

		/** Required */
		type: LinePlusSingleStatPropertiesType;
		xColumn?: string | null;
		xTickStart?: number | null;
		xTickStep?: number | null;
		xTotalTicks?: number | null;
		yColumn?: string | null;
		yTickStart?: number | null;
		yTickStep?: number | null;
		yTotalTicks?: number | null;
	}
	export interface LinePlusSingleStatPropertiesFormProperties {
		hoverDimension: FormControl<BandViewPropertiesHoverDimension | null | undefined>,
		legendColorizeRows: FormControl<boolean | null | undefined>,
		legendHide: FormControl<boolean | null | undefined>,
		legendOpacity: FormControl<number | null | undefined>,
		legendOrientationThreshold: FormControl<number | null | undefined>,

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		position: FormControl<HistogramViewPropertiesPosition | null | undefined>,

		/** Required */
		prefix: FormControl<string | null | undefined>,
		shadeBelow: FormControl<boolean | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,

		/** Required */
		suffix: FormControl<string | null | undefined>,
		timeFormat: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<LinePlusSingleStatPropertiesType | null | undefined>,
		xColumn: FormControl<string | null | undefined>,
		xTickStart: FormControl<number | null | undefined>,
		xTickStep: FormControl<number | null | undefined>,
		xTotalTicks: FormControl<number | null | undefined>,
		yColumn: FormControl<string | null | undefined>,
		yTickStart: FormControl<number | null | undefined>,
		yTickStep: FormControl<number | null | undefined>,
		yTotalTicks: FormControl<number | null | undefined>,
	}
	export function CreateLinePlusSingleStatPropertiesFormGroup() {
		return new FormGroup<LinePlusSingleStatPropertiesFormProperties>({
			hoverDimension: new FormControl<BandViewPropertiesHoverDimension | null | undefined>(undefined),
			legendColorizeRows: new FormControl<boolean | null | undefined>(undefined),
			legendHide: new FormControl<boolean | null | undefined>(undefined),
			legendOpacity: new FormControl<number | null | undefined>(undefined),
			legendOrientationThreshold: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<HistogramViewPropertiesPosition | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shadeBelow: new FormControl<boolean | null | undefined>(undefined),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			suffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeFormat: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LinePlusSingleStatPropertiesType | null | undefined>(undefined, [Validators.required]),
			xColumn: new FormControl<string | null | undefined>(undefined),
			xTickStart: new FormControl<number | null | undefined>(undefined),
			xTickStep: new FormControl<number | null | undefined>(undefined),
			xTotalTicks: new FormControl<number | null | undefined>(undefined),
			yColumn: new FormControl<string | null | undefined>(undefined),
			yTickStart: new FormControl<number | null | undefined>(undefined),
			yTickStep: new FormControl<number | null | undefined>(undefined),
			yTotalTicks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LinePlusSingleStatPropertiesType { 'line-plus-single-stat' = 0 }

	export interface LineProtocolError {

		/**
		 * Code is the machine-readable error code.
		 * Required
		 */
		code: LineProtocolErrorCode;

		/**
		 * Err is a stack of errors that occurred during processing of the request. Useful for debugging.
		 * Required
		 */
		err: string;

		/** First line within sent body containing malformed data */
		line?: number | null;

		/**
		 * Message is a human-readable message.
		 * Required
		 */
		message: string;

		/**
		 * Op describes the logical code operation during error. Useful for debugging.
		 * Required
		 */
		op: string;
	}
	export interface LineProtocolErrorFormProperties {

		/**
		 * Code is the machine-readable error code.
		 * Required
		 */
		code: FormControl<LineProtocolErrorCode | null | undefined>,

		/**
		 * Err is a stack of errors that occurred during processing of the request. Useful for debugging.
		 * Required
		 */
		err: FormControl<string | null | undefined>,

		/** First line within sent body containing malformed data */
		line: FormControl<number | null | undefined>,

		/**
		 * Message is a human-readable message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,

		/**
		 * Op describes the logical code operation during error. Useful for debugging.
		 * Required
		 */
		op: FormControl<string | null | undefined>,
	}
	export function CreateLineProtocolErrorFormGroup() {
		return new FormGroup<LineProtocolErrorFormProperties>({
			code: new FormControl<LineProtocolErrorCode | null | undefined>(undefined, [Validators.required]),
			err: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			line: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			op: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LineProtocolErrorCode { 'internal error' = 0, 'not found' = 1, conflict = 2, invalid = 3, 'empty value' = 4, unavailable = 5 }

	export interface LineProtocolLengthError {

		/**
		 * Code is the machine-readable error code.
		 * Required
		 */
		code: LineProtocolLengthErrorCode;

		/**
		 * Max length in bytes for a body of line-protocol.
		 * Required
		 */
		maxLength: number;

		/**
		 * Message is a human-readable message.
		 * Required
		 */
		message: string;
	}
	export interface LineProtocolLengthErrorFormProperties {

		/**
		 * Code is the machine-readable error code.
		 * Required
		 */
		code: FormControl<LineProtocolLengthErrorCode | null | undefined>,

		/**
		 * Max length in bytes for a body of line-protocol.
		 * Required
		 */
		maxLength: FormControl<number | null | undefined>,

		/**
		 * Message is a human-readable message.
		 * Required
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateLineProtocolLengthErrorFormGroup() {
		return new FormGroup<LineProtocolLengthErrorFormProperties>({
			code: new FormControl<LineProtocolLengthErrorCode | null | undefined>(undefined, [Validators.required]),
			maxLength: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			message: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum LineProtocolLengthErrorCode { invalid = 0 }

	export interface LogEvent {

		/** A description of the event that occurred. */
		message?: string | null;

		/** the ID of the task that logged */
		runID?: string | null;

		/** Time event occurred, RFC3339Nano. */
		time?: Date | null;
	}
	export interface LogEventFormProperties {

		/** A description of the event that occurred. */
		message: FormControl<string | null | undefined>,

		/** the ID of the task that logged */
		runID: FormControl<string | null | undefined>,

		/** Time event occurred, RFC3339Nano. */
		time: FormControl<Date | null | undefined>,
	}
	export function CreateLogEventFormGroup() {
		return new FormGroup<LogEventFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			runID: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Represents the rule conditions that collectively evaluate to either true or false */
	export interface LogicalExpression {
		left?: Expression;
		operator?: string | null;
		right?: Expression;

		/** Type of AST node */
		type?: string | null;
	}

	/** Represents the rule conditions that collectively evaluate to either true or false */
	export interface LogicalExpressionFormProperties {
		operator: FormControl<string | null | undefined>,

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateLogicalExpressionFormGroup() {
		return new FormGroup<LogicalExpressionFormProperties>({
			operator: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Logs {
		events?: Array<LogEvent>;
	}
	export interface LogsFormProperties {
	}
	export function CreateLogsFormGroup() {
		return new FormGroup<LogsFormProperties>({
		});

	}

	export interface MapVariableProperties {
		type?: MapVariablePropertiesType | null;
		values?: {[id: string]: string };
	}
	export interface MapVariablePropertiesFormProperties {
		type: FormControl<MapVariablePropertiesType | null | undefined>,
		values: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateMapVariablePropertiesFormGroup() {
		return new FormGroup<MapVariablePropertiesFormProperties>({
			type: new FormControl<MapVariablePropertiesType | null | undefined>(undefined),
			values: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum MapVariablePropertiesType { map = 0 }

	export interface MarkdownViewProperties {

		/** Required */
		note: string;

		/** Required */
		shape: BandViewPropertiesShape;

		/** Required */
		type: MarkdownViewPropertiesType;
	}
	export interface MarkdownViewPropertiesFormProperties {

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/** Required */
		type: FormControl<MarkdownViewPropertiesType | null | undefined>,
	}
	export function CreateMarkdownViewPropertiesFormGroup() {
		return new FormGroup<MarkdownViewPropertiesFormProperties>({
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<MarkdownViewPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MarkdownViewPropertiesType { markdown = 0 }


	/** Object property assignment */
	export interface MemberAssignment {
		init?: Expression;

		/** Represents accessing a property of an object */
		member?: MemberExpression;

		/** Type of AST node */
		type?: string | null;
	}

	/** Object property assignment */
	export interface MemberAssignmentFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMemberAssignmentFormGroup() {
		return new FormGroup<MemberAssignmentFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents accessing a property of an object */
	export interface MemberExpression {
		object?: Expression;
		property?: PropertyKey;

		/** Type of AST node */
		type?: string | null;
	}

	/** Represents accessing a property of an object */
	export interface MemberExpressionFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMemberExpressionFormGroup() {
		return new FormGroup<MemberExpressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MosaicViewProperties {

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<string>;

		/** Required */
		fillColumns: Array<string>;
		generateXAxisTicks?: Array<string>;
		hoverDimension?: BandViewPropertiesHoverDimension | null;
		legendColorizeRows?: boolean | null;
		legendHide?: boolean | null;
		legendOpacity?: number | null;
		legendOrientationThreshold?: number | null;

		/** Required */
		note: string;

		/** Required */
		queries: Array<DashboardQuery>;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;
		timeFormat?: string | null;

		/** Required */
		type: MosaicViewPropertiesType;

		/** Required */
		xAxisLabel: string;

		/** Required */
		xColumn: string;

		/**
		 * Required
		 * Maximum items: 2
		 */
		xDomain: Array<number>;

		/** Required */
		xPrefix: string;

		/** Required */
		xSuffix: string;
		xTickStart?: number | null;
		xTickStep?: number | null;
		xTotalTicks?: number | null;

		/** Required */
		yAxisLabel: string;

		/**
		 * Required
		 * Maximum items: 2
		 */
		yDomain: Array<number>;
		yLabelColumnSeparator?: string | null;
		yLabelColumns?: Array<string>;

		/** Required */
		yPrefix: string;

		/** Required */
		ySeriesColumns: Array<string>;

		/** Required */
		ySuffix: string;
	}
	export interface MosaicViewPropertiesFormProperties {
		hoverDimension: FormControl<BandViewPropertiesHoverDimension | null | undefined>,
		legendColorizeRows: FormControl<boolean | null | undefined>,
		legendHide: FormControl<boolean | null | undefined>,
		legendOpacity: FormControl<number | null | undefined>,
		legendOrientationThreshold: FormControl<number | null | undefined>,

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,
		timeFormat: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<MosaicViewPropertiesType | null | undefined>,

		/** Required */
		xAxisLabel: FormControl<string | null | undefined>,

		/** Required */
		xColumn: FormControl<string | null | undefined>,

		/** Required */
		xPrefix: FormControl<string | null | undefined>,

		/** Required */
		xSuffix: FormControl<string | null | undefined>,
		xTickStart: FormControl<number | null | undefined>,
		xTickStep: FormControl<number | null | undefined>,
		xTotalTicks: FormControl<number | null | undefined>,

		/** Required */
		yAxisLabel: FormControl<string | null | undefined>,
		yLabelColumnSeparator: FormControl<string | null | undefined>,

		/** Required */
		yPrefix: FormControl<string | null | undefined>,

		/** Required */
		ySuffix: FormControl<string | null | undefined>,
	}
	export function CreateMosaicViewPropertiesFormGroup() {
		return new FormGroup<MosaicViewPropertiesFormProperties>({
			hoverDimension: new FormControl<BandViewPropertiesHoverDimension | null | undefined>(undefined),
			legendColorizeRows: new FormControl<boolean | null | undefined>(undefined),
			legendHide: new FormControl<boolean | null | undefined>(undefined),
			legendOpacity: new FormControl<number | null | undefined>(undefined),
			legendOrientationThreshold: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			timeFormat: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MosaicViewPropertiesType | null | undefined>(undefined, [Validators.required]),
			xAxisLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xColumn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xSuffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xTickStart: new FormControl<number | null | undefined>(undefined),
			xTickStep: new FormControl<number | null | undefined>(undefined),
			xTotalTicks: new FormControl<number | null | undefined>(undefined),
			yAxisLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yLabelColumnSeparator: new FormControl<string | null | undefined>(undefined),
			yPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ySuffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum MosaicViewPropertiesType { mosaic = 0 }

	export interface Node {
	}
	export interface NodeFormProperties {
	}
	export function CreateNodeFormGroup() {
		return new FormGroup<NodeFormProperties>({
		});

	}

	export interface NotificationEndpoint {
	}
	export interface NotificationEndpointFormProperties {
	}
	export function CreateNotificationEndpointFormGroup() {
		return new FormGroup<NotificationEndpointFormProperties>({
		});

	}

	export interface NotificationEndpointBase {
		createdAt?: Date | null;

		/** An optional description of the notification endpoint. */
		description?: string | null;
		id?: string | null;
		labels?: Array<Label>;
		links?: NotificationEndpointBaseLinks;

		/** Required */
		name: string;
		orgID?: string | null;

		/** The status of the endpoint. */
		status?: AuthorizationUpdateRequestStatus | null;

		/** Required */
		type: NotificationEndpointBaseType;
		updatedAt?: Date | null;
		userID?: string | null;
	}
	export interface NotificationEndpointBaseFormProperties {
		createdAt: FormControl<Date | null | undefined>,

		/** An optional description of the notification endpoint. */
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,

		/** The status of the endpoint. */
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,

		/** Required */
		type: FormControl<NotificationEndpointBaseType | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		userID: FormControl<string | null | undefined>,
	}
	export function CreateNotificationEndpointBaseFormGroup() {
		return new FormGroup<NotificationEndpointBaseFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgID: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			type: new FormControl<NotificationEndpointBaseType | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			userID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NotificationEndpointBaseLinks {

		/** URI of resource. */
		labels?: string | null;

		/** URI of resource. */
		members?: string | null;

		/** URI of resource. */
		owners?: string | null;

		/** URI of resource. */
		self?: string | null;
	}
	export interface NotificationEndpointBaseLinksFormProperties {

		/** URI of resource. */
		labels: FormControl<string | null | undefined>,

		/** URI of resource. */
		members: FormControl<string | null | undefined>,

		/** URI of resource. */
		owners: FormControl<string | null | undefined>,

		/** URI of resource. */
		self: FormControl<string | null | undefined>,
	}
	export function CreateNotificationEndpointBaseLinksFormGroup() {
		return new FormGroup<NotificationEndpointBaseLinksFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			owners: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NotificationEndpointBaseType { slack = 0, pagerduty = 1, http = 2, telegram = 3 }

	export interface NotificationEndpointDiscriminator {
	}
	export interface NotificationEndpointDiscriminatorFormProperties {
	}
	export function CreateNotificationEndpointDiscriminatorFormGroup() {
		return new FormGroup<NotificationEndpointDiscriminatorFormProperties>({
		});

	}

	export enum NotificationEndpointType { slack = 0, pagerduty = 1, http = 2, telegram = 3 }

	export interface NotificationEndpointUpdate {
		description?: string | null;
		name?: string | null;
		status?: AuthorizationUpdateRequestStatus | null;
	}
	export interface NotificationEndpointUpdateFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,
	}
	export function CreateNotificationEndpointUpdateFormGroup() {
		return new FormGroup<NotificationEndpointUpdateFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
		});

	}

	export interface NotificationEndpoints {
		links?: Links;
		notificationEndpoints?: Array<NotificationEndpoint>;
	}
	export interface NotificationEndpointsFormProperties {
	}
	export function CreateNotificationEndpointsFormGroup() {
		return new FormGroup<NotificationEndpointsFormProperties>({
		});

	}

	export interface NotificationRule {
	}
	export interface NotificationRuleFormProperties {
	}
	export function CreateNotificationRuleFormGroup() {
		return new FormGroup<NotificationRuleFormProperties>({
		});

	}

	export interface NotificationRuleBase {
		createdAt?: Date | null;

		/** An optional description of the notification rule. */
		description?: string | null;

		/** Required */
		endpointID: string;

		/** The notification repetition interval. */
		every?: string | null;
		id?: string | null;
		labels?: Array<Label>;
		lastRunError?: string | null;
		lastRunStatus?: CheckBaseLastRunStatus | null;

		/** Timestamp of latest scheduled, completed run, RFC3339. */
		latestCompleted?: Date | null;

		/** Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limitEvery cannot be empty. */
		limit?: number | null;

		/** Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limit cannot be empty. */
		limitEvery?: number | null;
		links?: NotificationRuleBaseLinks;

		/**
		 * Human-readable name describing the notification rule.
		 * Required
		 */
		name: string;

		/** Duration to delay after the schedule, before executing check. */
		offset?: string | null;

		/**
		 * The ID of the organization that owns this notification rule.
		 * Required
		 */
		orgID: string;

		/** The ID of creator used to create this notification rule. */
		ownerID?: string | null;
		runbookLink?: string | null;
		sleepUntil?: string | null;

		/** Required */
		status: AuthorizationUpdateRequestStatus;

		/**
		 * List of status rules the notification rule attempts to match.
		 * Required
		 * Minimum items: 1
		 */
		statusRules: Array<StatusRule>;

		/** List of tag rules the notification rule attempts to match. */
		tagRules?: Array<TagRule>;

		/** The ID of the task associated with this notification rule. */
		taskID?: string | null;
		updatedAt?: Date | null;
	}
	export interface NotificationRuleBaseFormProperties {
		createdAt: FormControl<Date | null | undefined>,

		/** An optional description of the notification rule. */
		description: FormControl<string | null | undefined>,

		/** Required */
		endpointID: FormControl<string | null | undefined>,

		/** The notification repetition interval. */
		every: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastRunError: FormControl<string | null | undefined>,
		lastRunStatus: FormControl<CheckBaseLastRunStatus | null | undefined>,

		/** Timestamp of latest scheduled, completed run, RFC3339. */
		latestCompleted: FormControl<Date | null | undefined>,

		/** Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limitEvery cannot be empty. */
		limit: FormControl<number | null | undefined>,

		/** Don't notify me more than &lt;limit&gt; times every &lt;limitEvery&gt; seconds. If set, limit cannot be empty. */
		limitEvery: FormControl<number | null | undefined>,

		/**
		 * Human-readable name describing the notification rule.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Duration to delay after the schedule, before executing check. */
		offset: FormControl<string | null | undefined>,

		/**
		 * The ID of the organization that owns this notification rule.
		 * Required
		 */
		orgID: FormControl<string | null | undefined>,

		/** The ID of creator used to create this notification rule. */
		ownerID: FormControl<string | null | undefined>,
		runbookLink: FormControl<string | null | undefined>,
		sleepUntil: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,

		/** The ID of the task associated with this notification rule. */
		taskID: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateNotificationRuleBaseFormGroup() {
		return new FormGroup<NotificationRuleBaseFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpointID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			every: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			limitEvery: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerID: new FormControl<string | null | undefined>(undefined),
			runbookLink: new FormControl<string | null | undefined>(undefined),
			sleepUntil: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined, [Validators.required]),
			taskID: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface NotificationRuleBaseLinks {

		/** URI of resource. */
		labels?: string | null;

		/** URI of resource. */
		members?: string | null;

		/** URI of resource. */
		owners?: string | null;

		/** URI of resource. */
		query?: string | null;

		/** URI of resource. */
		self?: string | null;
	}
	export interface NotificationRuleBaseLinksFormProperties {

		/** URI of resource. */
		labels: FormControl<string | null | undefined>,

		/** URI of resource. */
		members: FormControl<string | null | undefined>,

		/** URI of resource. */
		owners: FormControl<string | null | undefined>,

		/** URI of resource. */
		query: FormControl<string | null | undefined>,

		/** URI of resource. */
		self: FormControl<string | null | undefined>,
	}
	export function CreateNotificationRuleBaseLinksFormGroup() {
		return new FormGroup<NotificationRuleBaseLinksFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			owners: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatusRule {
		count?: number | null;

		/** The state to record if check matches a criteria. */
		currentLevel?: StatusRuleCurrentLevel | null;
		period?: string | null;

		/** The state to record if check matches a criteria. */
		previousLevel?: StatusRuleCurrentLevel | null;
	}
	export interface StatusRuleFormProperties {
		count: FormControl<number | null | undefined>,

		/** The state to record if check matches a criteria. */
		currentLevel: FormControl<StatusRuleCurrentLevel | null | undefined>,
		period: FormControl<string | null | undefined>,

		/** The state to record if check matches a criteria. */
		previousLevel: FormControl<StatusRuleCurrentLevel | null | undefined>,
	}
	export function CreateStatusRuleFormGroup() {
		return new FormGroup<StatusRuleFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			currentLevel: new FormControl<StatusRuleCurrentLevel | null | undefined>(undefined),
			period: new FormControl<string | null | undefined>(undefined),
			previousLevel: new FormControl<StatusRuleCurrentLevel | null | undefined>(undefined),
		});

	}

	export enum StatusRuleCurrentLevel { UNKNOWN = 0, OK = 1, INFO = 2, CRIT = 3, WARN = 4, ANY = 5 }

	export interface TagRule {
		key?: string | null;
		operator?: TagRuleOperator | null;
		value?: string | null;
	}
	export interface TagRuleFormProperties {
		key: FormControl<string | null | undefined>,
		operator: FormControl<TagRuleOperator | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTagRuleFormGroup() {
		return new FormGroup<TagRuleFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<TagRuleOperator | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TagRuleOperator { equal = 0, notequal = 1, equalregex = 2, notequalregex = 3 }

	export interface NotificationRuleDiscriminator {
	}
	export interface NotificationRuleDiscriminatorFormProperties {
	}
	export function CreateNotificationRuleDiscriminatorFormGroup() {
		return new FormGroup<NotificationRuleDiscriminatorFormProperties>({
		});

	}

	export interface NotificationRuleUpdate {
		description?: string | null;
		name?: string | null;
		status?: AuthorizationUpdateRequestStatus | null;
	}
	export interface NotificationRuleUpdateFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,
	}
	export function CreateNotificationRuleUpdateFormGroup() {
		return new FormGroup<NotificationRuleUpdateFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
		});

	}

	export interface NotificationRules {
		links?: Links;
		notificationRules?: Array<NotificationRule>;
	}
	export interface NotificationRulesFormProperties {
	}
	export function CreateNotificationRulesFormGroup() {
		return new FormGroup<NotificationRulesFormProperties>({
		});

	}


	/** Allows the declaration of an anonymous object within a declaration */
	export interface ObjectExpression {

		/** Object properties */
		properties?: Array<Property>;

		/** Type of AST node */
		type?: string | null;
	}

	/** Allows the declaration of an anonymous object within a declaration */
	export interface ObjectExpressionFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateObjectExpressionFormGroup() {
		return new FormGroup<ObjectExpressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OnboardingRequest {

		/** Required */
		bucket: string;

		/** Required */
		org: string;
		password?: string | null;

		/**
		 * Retention period *in nanoseconds* for the new bucket. This key's name has been misleading since OSS 2.0 GA, please transition to use `retentionPeriodSeconds`
		 */
		retentionPeriodHrs?: number | null;
		retentionPeriodSeconds?: number | null;

		/**
		 * Authentication token to set on the initial user. If not specified, the server will generate a token.
		 */
		token?: string | null;

		/** Required */
		username: string;
	}
	export interface OnboardingRequestFormProperties {

		/** Required */
		bucket: FormControl<string | null | undefined>,

		/** Required */
		org: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,

		/**
		 * Retention period *in nanoseconds* for the new bucket. This key's name has been misleading since OSS 2.0 GA, please transition to use `retentionPeriodSeconds`
		 */
		retentionPeriodHrs: FormControl<number | null | undefined>,
		retentionPeriodSeconds: FormControl<number | null | undefined>,

		/**
		 * Authentication token to set on the initial user. If not specified, the server will generate a token.
		 */
		token: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateOnboardingRequestFormGroup() {
		return new FormGroup<OnboardingRequestFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			org: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<string | null | undefined>(undefined),
			retentionPeriodHrs: new FormControl<number | null | undefined>(undefined),
			retentionPeriodSeconds: new FormControl<number | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OnboardingResponse {
		auth?: Authorization;
		bucket?: Bucket;
		org?: Organization;
		user?: UserResponse;
	}
	export interface OnboardingResponseFormProperties {
	}
	export function CreateOnboardingResponseFormGroup() {
		return new FormGroup<OnboardingResponseFormProperties>({
		});

	}


	/** A single variable declaration */
	export interface OptionStatement {
		assignment?: VariableAssignment;

		/** Type of AST node */
		type?: string | null;
	}

	/** A single variable declaration */
	export interface OptionStatementFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateOptionStatementFormGroup() {
		return new FormGroup<OptionStatementFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the declaration of a variable */
	export interface VariableAssignment {

		/** A valid Flux identifier */
		id?: Identifier;
		init?: Expression;

		/** Type of AST node */
		type?: string | null;
	}

	/** Represents the declaration of a variable */
	export interface VariableAssignmentFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateVariableAssignmentFormGroup() {
		return new FormGroup<VariableAssignmentFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Organization {
		createdAt?: Date | null;
		description?: string | null;
		id?: string | null;
		links?: OrganizationLinks;

		/** Required */
		name: string;

		/** If inactive the organization is inactive. */
		status?: AuthorizationUpdateRequestStatus | null;
		updatedAt?: Date | null;
	}
	export interface OrganizationFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** If inactive the organization is inactive. */
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface OrganizationLinks {

		/** URI of resource. */
		buckets?: string | null;

		/** URI of resource. */
		dashboards?: string | null;

		/** URI of resource. */
		labels?: string | null;

		/** URI of resource. */
		members?: string | null;

		/** URI of resource. */
		owners?: string | null;

		/** URI of resource. */
		secrets?: string | null;

		/** URI of resource. */
		self?: string | null;

		/** URI of resource. */
		tasks?: string | null;
	}
	export interface OrganizationLinksFormProperties {

		/** URI of resource. */
		buckets: FormControl<string | null | undefined>,

		/** URI of resource. */
		dashboards: FormControl<string | null | undefined>,

		/** URI of resource. */
		labels: FormControl<string | null | undefined>,

		/** URI of resource. */
		members: FormControl<string | null | undefined>,

		/** URI of resource. */
		owners: FormControl<string | null | undefined>,

		/** URI of resource. */
		secrets: FormControl<string | null | undefined>,

		/** URI of resource. */
		self: FormControl<string | null | undefined>,

		/** URI of resource. */
		tasks: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationLinksFormGroup() {
		return new FormGroup<OrganizationLinksFormProperties>({
			buckets: new FormControl<string | null | undefined>(undefined),
			dashboards: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			owners: new FormControl<string | null | undefined>(undefined),
			secrets: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tasks: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Organizations {
		links?: Links;
		orgs?: Array<Organization>;
	}
	export interface OrganizationsFormProperties {
	}
	export function CreateOrganizationsFormGroup() {
		return new FormGroup<OrganizationsFormProperties>({
		});

	}

	export interface PagerDutyNotificationEndpoint {
	}
	export interface PagerDutyNotificationEndpointFormProperties {
	}
	export function CreatePagerDutyNotificationEndpointFormGroup() {
		return new FormGroup<PagerDutyNotificationEndpointFormProperties>({
		});

	}

	export interface PagerDutyNotificationRule extends NotificationRuleBase {

		/** Required */
		messageTemplate: string;

		/** Required */
		type: PagerDutyNotificationRuleType;
	}
	export interface PagerDutyNotificationRuleFormProperties extends NotificationRuleBaseFormProperties {

		/** Required */
		messageTemplate: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PagerDutyNotificationRuleType | null | undefined>,
	}
	export function CreatePagerDutyNotificationRuleFormGroup() {
		return new FormGroup<PagerDutyNotificationRuleFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpointID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			every: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			limitEvery: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerID: new FormControl<string | null | undefined>(undefined),
			runbookLink: new FormControl<string | null | undefined>(undefined),
			sleepUntil: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined, [Validators.required]),
			taskID: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PagerDutyNotificationRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PagerDutyNotificationRuleType { pagerduty = 0 }

	export interface PagerDutyNotificationRuleBase {

		/** Required */
		messageTemplate: string;

		/** Required */
		type: PagerDutyNotificationRuleType;
	}
	export interface PagerDutyNotificationRuleBaseFormProperties {

		/** Required */
		messageTemplate: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PagerDutyNotificationRuleType | null | undefined>,
	}
	export function CreatePagerDutyNotificationRuleBaseFormGroup() {
		return new FormGroup<PagerDutyNotificationRuleBaseFormProperties>({
			messageTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PagerDutyNotificationRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents an expression wrapped in parenthesis */
	export interface ParenExpression {
		expression?: Expression;

		/** Type of AST node */
		type?: string | null;
	}

	/** Represents an expression wrapped in parenthesis */
	export interface ParenExpressionFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateParenExpressionFormGroup() {
		return new FormGroup<ParenExpressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PasswordResetBody {

		/** Required */
		password: string;
	}
	export interface PasswordResetBodyFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,
	}
	export function CreatePasswordResetBodyFormGroup() {
		return new FormGroup<PasswordResetBodyFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Updates to an existing bucket resource. */
	export interface PatchBucketRequest {
		description?: string | null;
		name?: string | null;

		/** Updates to rules to expire or retain data. No rules means no updates. */
		retentionRules?: Array<PatchRetentionRule>;
	}

	/** Updates to an existing bucket resource. */
	export interface PatchBucketRequestFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatchBucketRequestFormGroup() {
		return new FormGroup<PatchBucketRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates to a rule to expire or retain data. */
	export interface PatchRetentionRule {

		/**
		 * Duration in seconds for how long data will be kept in the database. 0 means infinite.
		 * Minimum: 0
		 */
		everySeconds?: number | null;

		/** Shard duration measured in seconds. */
		shardGroupDurationSeconds?: number | null;

		/** Required */
		type: RetentionRuleType;
	}

	/** Updates to a rule to expire or retain data. */
	export interface PatchRetentionRuleFormProperties {

		/**
		 * Duration in seconds for how long data will be kept in the database. 0 means infinite.
		 * Minimum: 0
		 */
		everySeconds: FormControl<number | null | undefined>,

		/** Shard duration measured in seconds. */
		shardGroupDurationSeconds: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<RetentionRuleType | null | undefined>,
	}
	export function CreatePatchRetentionRuleFormGroup() {
		return new FormGroup<PatchRetentionRuleFormProperties>({
			everySeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			shardGroupDurationSeconds: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<RetentionRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatchOrganizationRequest {

		/** New description to set on the organization */
		description?: string | null;

		/** New name to set on the organization */
		name?: string | null;
	}
	export interface PatchOrganizationRequestFormProperties {

		/** New description to set on the organization */
		description: FormControl<string | null | undefined>,

		/** New name to set on the organization */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatchOrganizationRequestFormGroup() {
		return new FormGroup<PatchOrganizationRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Call expression with pipe argument */
	export interface PipeExpression {
		argument?: Expression;

		/** Represents a function call */
		call?: CallExpression;

		/** Type of AST node */
		type?: string | null;
	}

	/** Call expression with pipe argument */
	export interface PipeExpressionFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePipeExpressionFormGroup() {
		return new FormGroup<PipeExpressionFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a specialized literal value, indicating the left hand value of a pipe expression */
	export interface PipeLiteral {

		/** Type of AST node */
		type?: string | null;
	}

	/** Represents a specialized literal value, indicating the left hand value of a pipe expression */
	export interface PipeLiteralFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreatePipeLiteralFormGroup() {
		return new FormGroup<PipeLiteralFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostBucketRequest {
		description?: string | null;

		/** Required */
		name: string;

		/** Required */
		orgID: string;

		/**
		 * Rules to expire or retain data.  No rules means data never expires.
		 * Required
		 */
		retentionRules: Array<RetentionRule>;
		rp?: string | null;
		schemaType?: BucketSchemaType | null;
	}
	export interface PostBucketRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		orgID: FormControl<string | null | undefined>,
		rp: FormControl<string | null | undefined>,
		schemaType: FormControl<BucketSchemaType | null | undefined>,
	}
	export function CreatePostBucketRequestFormGroup() {
		return new FormGroup<PostBucketRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rp: new FormControl<string | null | undefined>(undefined),
			schemaType: new FormControl<BucketSchemaType | null | undefined>(undefined),
		});

	}

	export interface PostCheck {
	}
	export interface PostCheckFormProperties {
	}
	export function CreatePostCheckFormGroup() {
		return new FormGroup<PostCheckFormProperties>({
		});

	}

	export interface PostNotificationEndpoint {
	}
	export interface PostNotificationEndpointFormProperties {
	}
	export function CreatePostNotificationEndpointFormGroup() {
		return new FormGroup<PostNotificationEndpointFormProperties>({
		});

	}

	export interface PostNotificationRule {
	}
	export interface PostNotificationRuleFormProperties {
	}
	export function CreatePostNotificationRuleFormGroup() {
		return new FormGroup<PostNotificationRuleFormProperties>({
		});

	}

	export interface PostOrganizationRequest {
		description?: string | null;

		/** Required */
		name: string;
	}
	export interface PostOrganizationRequestFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostOrganizationRequestFormGroup() {
		return new FormGroup<PostOrganizationRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PropertyKey {
	}
	export interface PropertyKeyFormProperties {
	}
	export function CreatePropertyKeyFormGroup() {
		return new FormGroup<PropertyKeyFormProperties>({
		});

	}


	/** Query influx using the Flux language */
	export interface Query {

		/** Dialect are options to change the default CSV output format; https://www.w3.org/TR/2015/REC-tabular-metadata-20151217/#dialect-descriptions */
		dialect?: Dialect;

		/** Represents a source from a single file */
		extern?: File;

		/** Specifies the time that should be reported as "now" in the query. Default is the server's now time. */
		now?: Date | null;

		/**
		 * Enumeration of key/value pairs that respresent parameters to be injected into query (can only specify either this field or extern and not both)
		 */
		params?: string | null;

		/**
		 * Query script to execute.
		 * Required
		 */
		query: string;

		/** The type of query. Must be "flux". */
		type?: QueryType | null;
	}

	/** Query influx using the Flux language */
	export interface QueryFormProperties {

		/** Specifies the time that should be reported as "now" in the query. Default is the server's now time. */
		now: FormControl<Date | null | undefined>,

		/**
		 * Enumeration of key/value pairs that respresent parameters to be injected into query (can only specify either this field or extern and not both)
		 */
		params: FormControl<string | null | undefined>,

		/**
		 * Query script to execute.
		 * Required
		 */
		query: FormControl<string | null | undefined>,

		/** The type of query. Must be "flux". */
		type: FormControl<QueryType | null | undefined>,
	}
	export function CreateQueryFormGroup() {
		return new FormGroup<QueryFormProperties>({
			now: new FormControl<Date | null | undefined>(undefined),
			params: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<QueryType | null | undefined>(undefined),
		});

	}

	export enum QueryType { flux = 0 }

	export enum QueryEditMode { builder = 0, advanced = 1 }

	export interface QueryVariableProperties {
		type?: QueryVariablePropertiesType | null;
		values?: QueryVariablePropertiesValues;
	}
	export interface QueryVariablePropertiesFormProperties {
		type: FormControl<QueryVariablePropertiesType | null | undefined>,
	}
	export function CreateQueryVariablePropertiesFormGroup() {
		return new FormGroup<QueryVariablePropertiesFormProperties>({
			type: new FormControl<QueryVariablePropertiesType | null | undefined>(undefined),
		});

	}

	export enum QueryVariablePropertiesType { query = 0 }

	export interface QueryVariablePropertiesValues {
		language?: string | null;
		query?: string | null;
	}
	export interface QueryVariablePropertiesValuesFormProperties {
		language: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
	}
	export function CreateQueryVariablePropertiesValuesFormGroup() {
		return new FormGroup<QueryVariablePropertiesValuesFormProperties>({
			language: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RangeThreshold extends ThresholdBase {

		/** Required */
		max: number;

		/** Required */
		min: number;

		/** Required */
		type: RangeThresholdType;

		/** Required */
		within: boolean;
	}
	export interface RangeThresholdFormProperties extends ThresholdBaseFormProperties {

		/** Required */
		max: FormControl<number | null | undefined>,

		/** Required */
		min: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<RangeThresholdType | null | undefined>,

		/** Required */
		within: FormControl<boolean | null | undefined>,
	}
	export function CreateRangeThresholdFormGroup() {
		return new FormGroup<RangeThresholdFormProperties>({
			allValues: new FormControl<boolean | null | undefined>(undefined),
			level: new FormControl<CheckStatusLevel | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			min: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<RangeThresholdType | null | undefined>(undefined, [Validators.required]),
			within: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum RangeThresholdType { range = 0 }

	export interface Ready {
		started?: Date | null;
		status?: ReadyStatus | null;
		up?: string | null;
	}
	export interface ReadyFormProperties {
		started: FormControl<Date | null | undefined>,
		status: FormControl<ReadyStatus | null | undefined>,
		up: FormControl<string | null | undefined>,
	}
	export function CreateReadyFormGroup() {
		return new FormGroup<ReadyFormProperties>({
			started: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ReadyStatus | null | undefined>(undefined),
			up: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReadyStatus { ready = 0 }


	/** Expressions begin and end with `/` and are regular expressions with syntax accepted by RE2 */
	export interface RegexpLiteral {

		/** Type of AST node */
		type?: string | null;
		value?: string | null;
	}

	/** Expressions begin and end with `/` and are regular expressions with syntax accepted by RE2 */
	export interface RegexpLiteralFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateRegexpLiteralFormGroup() {
		return new FormGroup<RegexpLiteralFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a field that can be renamed and made visible or invisible. */
	export interface RenamableField {

		/** The name that a field is renamed to by the user. */
		displayName?: string | null;

		/** The calculated name of a field. */
		internalName?: string | null;

		/** Indicates whether this field should be visible on the table. */
		visible?: boolean | null;
	}

	/** Describes a field that can be renamed and made visible or invisible. */
	export interface RenamableFieldFormProperties {

		/** The name that a field is renamed to by the user. */
		displayName: FormControl<string | null | undefined>,

		/** The calculated name of a field. */
		internalName: FormControl<string | null | undefined>,

		/** Indicates whether this field should be visible on the table. */
		visible: FormControl<boolean | null | undefined>,
	}
	export function CreateRenamableFieldFormGroup() {
		return new FormGroup<RenamableFieldFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			internalName: new FormControl<string | null | undefined>(undefined),
			visible: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ResourceMember extends UserResponse {
		role?: ResourceMemberRole | null;
	}
	export interface ResourceMemberFormProperties extends UserResponseFormProperties {
		role: FormControl<ResourceMemberRole | null | undefined>,
	}
	export function CreateResourceMemberFormGroup() {
		return new FormGroup<ResourceMemberFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oauthID: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			role: new FormControl<ResourceMemberRole | null | undefined>(undefined),
		});

	}

	export enum ResourceMemberRole { member = 0 }

	export interface ResourceMembers {
		links?: ResourceMembersLinks;
		users?: Array<ResourceMember>;
	}
	export interface ResourceMembersFormProperties {
	}
	export function CreateResourceMembersFormGroup() {
		return new FormGroup<ResourceMembersFormProperties>({
		});

	}

	export interface ResourceMembersLinks {
		self?: string | null;
	}
	export interface ResourceMembersLinksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateResourceMembersLinksFormGroup() {
		return new FormGroup<ResourceMembersLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResourceOwner extends UserResponse {
		role?: ResourceOwnerRole | null;
	}
	export interface ResourceOwnerFormProperties extends UserResponseFormProperties {
		role: FormControl<ResourceOwnerRole | null | undefined>,
	}
	export function CreateResourceOwnerFormGroup() {
		return new FormGroup<ResourceOwnerFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oauthID: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			role: new FormControl<ResourceOwnerRole | null | undefined>(undefined),
		});

	}

	export enum ResourceOwnerRole { owner = 0 }

	export interface ResourceOwners {
		links?: ResourceOwnersLinks;
		users?: Array<ResourceOwner>;
	}
	export interface ResourceOwnersFormProperties {
	}
	export function CreateResourceOwnersFormGroup() {
		return new FormGroup<ResourceOwnersFormProperties>({
		});

	}

	export interface ResourceOwnersLinks {
		self?: string | null;
	}
	export interface ResourceOwnersLinksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateResourceOwnersLinksFormGroup() {
		return new FormGroup<ResourceOwnersLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines an expression to return */
	export interface ReturnStatement {
		argument?: Expression;

		/** Type of AST node */
		type?: string | null;
	}

	/** Defines an expression to return */
	export interface ReturnStatementFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateReturnStatementFormGroup() {
		return new FormGroup<ReturnStatementFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Routes {
		authorizations?: string | null;
		buckets?: string | null;
		dashboards?: string | null;
		external?: RoutesExternal;
		flags?: string | null;
		me?: string | null;
		orgs?: string | null;
		query?: RoutesQuery;
		setup?: string | null;
		signin?: string | null;
		signout?: string | null;
		sources?: string | null;
		system?: RoutesSystem;
		tasks?: string | null;
		telegrafs?: string | null;
		users?: string | null;
		variables?: string | null;
		write?: string | null;
	}
	export interface RoutesFormProperties {
		authorizations: FormControl<string | null | undefined>,
		buckets: FormControl<string | null | undefined>,
		dashboards: FormControl<string | null | undefined>,
		flags: FormControl<string | null | undefined>,
		me: FormControl<string | null | undefined>,
		orgs: FormControl<string | null | undefined>,
		setup: FormControl<string | null | undefined>,
		signin: FormControl<string | null | undefined>,
		signout: FormControl<string | null | undefined>,
		sources: FormControl<string | null | undefined>,
		tasks: FormControl<string | null | undefined>,
		telegrafs: FormControl<string | null | undefined>,
		users: FormControl<string | null | undefined>,
		variables: FormControl<string | null | undefined>,
		write: FormControl<string | null | undefined>,
	}
	export function CreateRoutesFormGroup() {
		return new FormGroup<RoutesFormProperties>({
			authorizations: new FormControl<string | null | undefined>(undefined),
			buckets: new FormControl<string | null | undefined>(undefined),
			dashboards: new FormControl<string | null | undefined>(undefined),
			flags: new FormControl<string | null | undefined>(undefined),
			me: new FormControl<string | null | undefined>(undefined),
			orgs: new FormControl<string | null | undefined>(undefined),
			setup: new FormControl<string | null | undefined>(undefined),
			signin: new FormControl<string | null | undefined>(undefined),
			signout: new FormControl<string | null | undefined>(undefined),
			sources: new FormControl<string | null | undefined>(undefined),
			tasks: new FormControl<string | null | undefined>(undefined),
			telegrafs: new FormControl<string | null | undefined>(undefined),
			users: new FormControl<string | null | undefined>(undefined),
			variables: new FormControl<string | null | undefined>(undefined),
			write: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RoutesExternal {
		statusFeed?: string | null;
	}
	export interface RoutesExternalFormProperties {
		statusFeed: FormControl<string | null | undefined>,
	}
	export function CreateRoutesExternalFormGroup() {
		return new FormGroup<RoutesExternalFormProperties>({
			statusFeed: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RoutesQuery {
		analyze?: string | null;
		ast?: string | null;
		self?: string | null;
		suggestions?: string | null;
	}
	export interface RoutesQueryFormProperties {
		analyze: FormControl<string | null | undefined>,
		ast: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		suggestions: FormControl<string | null | undefined>,
	}
	export function CreateRoutesQueryFormGroup() {
		return new FormGroup<RoutesQueryFormProperties>({
			analyze: new FormControl<string | null | undefined>(undefined),
			ast: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			suggestions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RoutesSystem {
		debug?: string | null;
		health?: string | null;
		metrics?: string | null;
	}
	export interface RoutesSystemFormProperties {
		debug: FormControl<string | null | undefined>,
		health: FormControl<string | null | undefined>,
		metrics: FormControl<string | null | undefined>,
	}
	export function CreateRoutesSystemFormGroup() {
		return new FormGroup<RoutesSystemFormProperties>({
			debug: new FormControl<string | null | undefined>(undefined),
			health: new FormControl<string | null | undefined>(undefined),
			metrics: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The state to record if check matches a criteria. */
	export enum RuleStatusLevel { UNKNOWN = 0, OK = 1, INFO = 2, CRIT = 3, WARN = 4, ANY = 5 }

	export interface Run {

		/** Time run finished executing, RFC3339Nano. */
		finishedAt?: Date | null;
		id?: string | null;
		links?: RunLinks;

		/** An array of logs associated with the run. */
		log?: Array<LogEvent>;

		/** Time run was manually requested, RFC3339Nano. */
		requestedAt?: Date | null;

		/** Time used for run's "now" option, RFC3339. */
		scheduledFor?: Date | null;

		/** Time run started executing, RFC3339Nano. */
		startedAt?: Date | null;
		status?: RunStatus | null;
		taskID?: string | null;
	}
	export interface RunFormProperties {

		/** Time run finished executing, RFC3339Nano. */
		finishedAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Time run was manually requested, RFC3339Nano. */
		requestedAt: FormControl<Date | null | undefined>,

		/** Time used for run's "now" option, RFC3339. */
		scheduledFor: FormControl<Date | null | undefined>,

		/** Time run started executing, RFC3339Nano. */
		startedAt: FormControl<Date | null | undefined>,
		status: FormControl<RunStatus | null | undefined>,
		taskID: FormControl<string | null | undefined>,
	}
	export function CreateRunFormGroup() {
		return new FormGroup<RunFormProperties>({
			finishedAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			requestedAt: new FormControl<Date | null | undefined>(undefined),
			scheduledFor: new FormControl<Date | null | undefined>(undefined),
			startedAt: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<RunStatus | null | undefined>(undefined),
			taskID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RunLinks {
		retry?: string | null;
		self?: string | null;
		task?: string | null;
	}
	export interface RunLinksFormProperties {
		retry: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		task: FormControl<string | null | undefined>,
	}
	export function CreateRunLinksFormGroup() {
		return new FormGroup<RunLinksFormProperties>({
			retry: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			task: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RunStatus { scheduled = 0, started = 1, failed = 2, success = 3, canceled = 4 }

	export interface RunManually {

		/** Time used for run's "now" option, RFC3339.  Default is the server's now time. */
		scheduledFor?: Date | null;
	}
	export interface RunManuallyFormProperties {

		/** Time used for run's "now" option, RFC3339.  Default is the server's now time. */
		scheduledFor: FormControl<Date | null | undefined>,
	}
	export function CreateRunManuallyFormGroup() {
		return new FormGroup<RunManuallyFormProperties>({
			scheduledFor: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Runs {
		links?: Links;
		runs?: Array<Run>;
	}
	export interface RunsFormProperties {
	}
	export function CreateRunsFormGroup() {
		return new FormGroup<RunsFormProperties>({
		});

	}

	export interface SMTPNotificationRule extends NotificationRuleBase {
		bodyTemplate?: string | null;

		/** Required */
		subjectTemplate: string;

		/** Required */
		to: string;

		/** Required */
		type: SMTPNotificationRuleType;
	}
	export interface SMTPNotificationRuleFormProperties extends NotificationRuleBaseFormProperties {
		bodyTemplate: FormControl<string | null | undefined>,

		/** Required */
		subjectTemplate: FormControl<string | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SMTPNotificationRuleType | null | undefined>,
	}
	export function CreateSMTPNotificationRuleFormGroup() {
		return new FormGroup<SMTPNotificationRuleFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpointID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			every: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			limitEvery: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerID: new FormControl<string | null | undefined>(undefined),
			runbookLink: new FormControl<string | null | undefined>(undefined),
			sleepUntil: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined, [Validators.required]),
			taskID: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			bodyTemplate: new FormControl<string | null | undefined>(undefined),
			subjectTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SMTPNotificationRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SMTPNotificationRuleType { smtp = 0 }

	export interface SMTPNotificationRuleBase {
		bodyTemplate?: string | null;

		/** Required */
		subjectTemplate: string;

		/** Required */
		to: string;

		/** Required */
		type: SMTPNotificationRuleType;
	}
	export interface SMTPNotificationRuleBaseFormProperties {
		bodyTemplate: FormControl<string | null | undefined>,

		/** Required */
		subjectTemplate: FormControl<string | null | undefined>,

		/** Required */
		to: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SMTPNotificationRuleType | null | undefined>,
	}
	export function CreateSMTPNotificationRuleBaseFormGroup() {
		return new FormGroup<SMTPNotificationRuleBaseFormProperties>({
			bodyTemplate: new FormControl<string | null | undefined>(undefined),
			subjectTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			to: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SMTPNotificationRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScatterViewProperties {

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<string>;

		/** Required */
		fillColumns: Array<string>;
		generateXAxisTicks?: Array<string>;
		generateYAxisTicks?: Array<string>;
		legendColorizeRows?: boolean | null;
		legendHide?: boolean | null;
		legendOpacity?: number | null;
		legendOrientationThreshold?: number | null;

		/** Required */
		note: string;

		/** Required */
		queries: Array<DashboardQuery>;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;

		/** Required */
		symbolColumns: Array<string>;
		timeFormat?: string | null;

		/** Required */
		type: ScatterViewPropertiesType;

		/** Required */
		xAxisLabel: string;

		/** Required */
		xColumn: string;

		/**
		 * Required
		 * Maximum items: 2
		 */
		xDomain: Array<number>;

		/** Required */
		xPrefix: string;

		/** Required */
		xSuffix: string;
		xTickStart?: number | null;
		xTickStep?: number | null;
		xTotalTicks?: number | null;

		/** Required */
		yAxisLabel: string;

		/** Required */
		yColumn: string;

		/**
		 * Required
		 * Maximum items: 2
		 */
		yDomain: Array<number>;

		/** Required */
		yPrefix: string;

		/** Required */
		ySuffix: string;
		yTickStart?: number | null;
		yTickStep?: number | null;
		yTotalTicks?: number | null;
	}
	export interface ScatterViewPropertiesFormProperties {
		legendColorizeRows: FormControl<boolean | null | undefined>,
		legendHide: FormControl<boolean | null | undefined>,
		legendOpacity: FormControl<number | null | undefined>,
		legendOrientationThreshold: FormControl<number | null | undefined>,

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,
		timeFormat: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ScatterViewPropertiesType | null | undefined>,

		/** Required */
		xAxisLabel: FormControl<string | null | undefined>,

		/** Required */
		xColumn: FormControl<string | null | undefined>,

		/** Required */
		xPrefix: FormControl<string | null | undefined>,

		/** Required */
		xSuffix: FormControl<string | null | undefined>,
		xTickStart: FormControl<number | null | undefined>,
		xTickStep: FormControl<number | null | undefined>,
		xTotalTicks: FormControl<number | null | undefined>,

		/** Required */
		yAxisLabel: FormControl<string | null | undefined>,

		/** Required */
		yColumn: FormControl<string | null | undefined>,

		/** Required */
		yPrefix: FormControl<string | null | undefined>,

		/** Required */
		ySuffix: FormControl<string | null | undefined>,
		yTickStart: FormControl<number | null | undefined>,
		yTickStep: FormControl<number | null | undefined>,
		yTotalTicks: FormControl<number | null | undefined>,
	}
	export function CreateScatterViewPropertiesFormGroup() {
		return new FormGroup<ScatterViewPropertiesFormProperties>({
			legendColorizeRows: new FormControl<boolean | null | undefined>(undefined),
			legendHide: new FormControl<boolean | null | undefined>(undefined),
			legendOpacity: new FormControl<number | null | undefined>(undefined),
			legendOrientationThreshold: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			timeFormat: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ScatterViewPropertiesType | null | undefined>(undefined, [Validators.required]),
			xAxisLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xColumn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xSuffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			xTickStart: new FormControl<number | null | undefined>(undefined),
			xTickStep: new FormControl<number | null | undefined>(undefined),
			xTotalTicks: new FormControl<number | null | undefined>(undefined),
			yAxisLabel: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yColumn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ySuffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			yTickStart: new FormControl<number | null | undefined>(undefined),
			yTickStep: new FormControl<number | null | undefined>(undefined),
			yTotalTicks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ScatterViewPropertiesType { scatter = 0 }

	export enum SchemaType { implicit = 0, explicit = 1 }

	export interface ScraperTargetRequest {

		/** Skip TLS verification on endpoint. */
		allowInsecure?: boolean | null;

		/** The ID of the bucket to write to. */
		bucketID?: string | null;

		/** The name of the scraper target. */
		name?: string | null;

		/** The organization ID. */
		orgID?: string | null;

		/** The type of the metrics to be parsed. */
		type?: ScraperTargetRequestType | null;

		/** The URL of the metrics endpoint. */
		url?: string | null;
	}
	export interface ScraperTargetRequestFormProperties {

		/** Skip TLS verification on endpoint. */
		allowInsecure: FormControl<boolean | null | undefined>,

		/** The ID of the bucket to write to. */
		bucketID: FormControl<string | null | undefined>,

		/** The name of the scraper target. */
		name: FormControl<string | null | undefined>,

		/** The organization ID. */
		orgID: FormControl<string | null | undefined>,

		/** The type of the metrics to be parsed. */
		type: FormControl<ScraperTargetRequestType | null | undefined>,

		/** The URL of the metrics endpoint. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateScraperTargetRequestFormGroup() {
		return new FormGroup<ScraperTargetRequestFormProperties>({
			allowInsecure: new FormControl<boolean | null | undefined>(undefined),
			bucketID: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ScraperTargetRequestType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScraperTargetRequestType { prometheus = 0 }

	export interface ScraperTargetResponse {
	}
	export interface ScraperTargetResponseFormProperties {
	}
	export function CreateScraperTargetResponseFormGroup() {
		return new FormGroup<ScraperTargetResponseFormProperties>({
		});

	}

	export interface ScraperTargetResponses {
		configurations?: Array<ScraperTargetResponse>;
	}
	export interface ScraperTargetResponsesFormProperties {
	}
	export function CreateScraperTargetResponsesFormGroup() {
		return new FormGroup<ScraperTargetResponsesFormProperties>({
		});

	}

	export interface SecretKeys {
		secrets?: Array<string>;
	}
	export interface SecretKeysFormProperties {
	}
	export function CreateSecretKeysFormGroup() {
		return new FormGroup<SecretKeysFormProperties>({
		});

	}

	export interface SecretKeysResponse extends SecretKeys {
		links?: SecretKeysResponseLinks;
	}
	export interface SecretKeysResponseFormProperties extends SecretKeysFormProperties {
	}
	export function CreateSecretKeysResponseFormGroup() {
		return new FormGroup<SecretKeysResponseFormProperties>({
		});

	}

	export interface SecretKeysResponseLinks {
		org?: string | null;
		self?: string | null;
	}
	export interface SecretKeysResponseLinksFormProperties {
		org: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateSecretKeysResponseLinksFormGroup() {
		return new FormGroup<SecretKeysResponseLinksFormProperties>({
			org: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Secrets {
	}
	export interface SecretsFormProperties {
	}
	export function CreateSecretsFormGroup() {
		return new FormGroup<SecretsFormProperties>({
		});

	}

	export interface SingleStatViewProperties {

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;

		/**
		 * Indicates whether decimal places should be enforced, and how many digits it should show.
		 * Required
		 */
		decimalPlaces: DecimalPlaces;

		/** Required */
		note: string;

		/** Required */
		prefix: string;

		/** Required */
		queries: Array<DashboardQuery>;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;

		/** StaticLegend represents the options specific to the static legend */
		staticLegend?: StaticLegend;

		/** Required */
		suffix: string;

		/** Required */
		tickPrefix: string;

		/** Required */
		tickSuffix: string;

		/** Required */
		type: SingleStatViewPropertiesType;
	}
	export interface SingleStatViewPropertiesFormProperties {

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		prefix: FormControl<string | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,

		/** Required */
		suffix: FormControl<string | null | undefined>,

		/** Required */
		tickPrefix: FormControl<string | null | undefined>,

		/** Required */
		tickSuffix: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SingleStatViewPropertiesType | null | undefined>,
	}
	export function CreateSingleStatViewPropertiesFormGroup() {
		return new FormGroup<SingleStatViewPropertiesFormProperties>({
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			prefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			suffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tickPrefix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tickSuffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SingleStatViewPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SingleStatViewPropertiesType { 'single-stat' = 0 }

	export interface SlackNotificationEndpoint {
	}
	export interface SlackNotificationEndpointFormProperties {
	}
	export function CreateSlackNotificationEndpointFormGroup() {
		return new FormGroup<SlackNotificationEndpointFormProperties>({
		});

	}

	export interface SlackNotificationRule extends NotificationRuleBase {
		channel?: string | null;

		/** Required */
		messageTemplate: string;

		/** Required */
		type: SlackNotificationRuleType;
	}
	export interface SlackNotificationRuleFormProperties extends NotificationRuleBaseFormProperties {
		channel: FormControl<string | null | undefined>,

		/** Required */
		messageTemplate: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SlackNotificationRuleType | null | undefined>,
	}
	export function CreateSlackNotificationRuleFormGroup() {
		return new FormGroup<SlackNotificationRuleFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpointID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			every: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			limitEvery: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerID: new FormControl<string | null | undefined>(undefined),
			runbookLink: new FormControl<string | null | undefined>(undefined),
			sleepUntil: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined, [Validators.required]),
			taskID: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			channel: new FormControl<string | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SlackNotificationRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SlackNotificationRuleType { slack = 0 }

	export interface SlackNotificationRuleBase {
		channel?: string | null;

		/** Required */
		messageTemplate: string;

		/** Required */
		type: SlackNotificationRuleType;
	}
	export interface SlackNotificationRuleBaseFormProperties {
		channel: FormControl<string | null | undefined>,

		/** Required */
		messageTemplate: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<SlackNotificationRuleType | null | undefined>,
	}
	export function CreateSlackNotificationRuleBaseFormGroup() {
		return new FormGroup<SlackNotificationRuleBaseFormProperties>({
			channel: new FormControl<string | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<SlackNotificationRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Source {
		default?: boolean | null;
		defaultRP?: string | null;
		id?: string | null;
		insecureSkipVerify?: boolean | null;
		languages?: Array<string>;
		links?: SourceLinks;
		metaUrl?: string | null;
		name?: string | null;
		orgID?: string | null;
		password?: string | null;
		sharedSecret?: string | null;
		telegraf?: string | null;
		token?: string | null;
		type?: SourceType | null;
		url?: string | null;
		username?: string | null;
	}
	export interface SourceFormProperties {
		default: FormControl<boolean | null | undefined>,
		defaultRP: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		insecureSkipVerify: FormControl<boolean | null | undefined>,
		metaUrl: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,
		password: FormControl<string | null | undefined>,
		sharedSecret: FormControl<string | null | undefined>,
		telegraf: FormControl<string | null | undefined>,
		token: FormControl<string | null | undefined>,
		type: FormControl<SourceType | null | undefined>,
		url: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			default: new FormControl<boolean | null | undefined>(undefined),
			defaultRP: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insecureSkipVerify: new FormControl<boolean | null | undefined>(undefined),
			metaUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			sharedSecret: new FormControl<string | null | undefined>(undefined),
			telegraf: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SourceType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SourceLinks {
		buckets?: string | null;
		health?: string | null;
		query?: string | null;
		self?: string | null;
	}
	export interface SourceLinksFormProperties {
		buckets: FormControl<string | null | undefined>,
		health: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateSourceLinksFormGroup() {
		return new FormGroup<SourceLinksFormProperties>({
			buckets: new FormControl<string | null | undefined>(undefined),
			health: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SourceType { v1 = 0, v2 = 1, self = 2 }

	export interface Sources {
		links?: SourcesLinks;
		sources?: Array<Source>;
	}
	export interface SourcesFormProperties {
	}
	export function CreateSourcesFormGroup() {
		return new FormGroup<SourcesFormProperties>({
		});

	}

	export interface SourcesLinks {
		self?: string | null;
	}
	export interface SourcesLinksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateSourcesLinksFormGroup() {
		return new FormGroup<SourcesLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Stack {
		createdAt?: Date | null;
		StackEvents?: Array<StackEvents>;
		id?: string | null;
		orgID?: string | null;
	}
	export interface StackFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,
	}
	export function CreateStackFormGroup() {
		return new FormGroup<StackFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StackEvents {
		description?: string | null;
		eventType?: string | null;
		name?: string | null;
		StackEventsResources?: Array<StackEventsResources>;
		sources?: Array<string>;
		updatedAt?: Date | null;
		urls?: Array<string>;
	}
	export interface StackEventsFormProperties {
		description: FormControl<string | null | undefined>,
		eventType: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateStackEventsFormGroup() {
		return new FormGroup<StackEventsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			eventType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface StackEventsResources {
		apiVersion?: string | null;
		StackEventsResourcesAssociations?: Array<StackEventsResourcesAssociations>;
		kind?: StackEventsResourcesAssociationsKind | null;
		links?: StackEventsResourcesLinks;
		resourceID?: string | null;
		templateMetaName?: string | null;
	}
	export interface StackEventsResourcesFormProperties {
		apiVersion: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		resourceID: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateStackEventsResourcesFormGroup() {
		return new FormGroup<StackEventsResourcesFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			resourceID: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StackEventsResourcesAssociations {
		kind?: StackEventsResourcesAssociationsKind | null;
		metaName?: string | null;
	}
	export interface StackEventsResourcesAssociationsFormProperties {
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		metaName: FormControl<string | null | undefined>,
	}
	export function CreateStackEventsResourcesAssociationsFormGroup() {
		return new FormGroup<StackEventsResourcesAssociationsFormProperties>({
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			metaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StackEventsResourcesAssociationsKind { Bucket = 0, Check = 1, CheckDeadman = 2, CheckThreshold = 3, Dashboard = 4, Label = 5, NotificationEndpoint = 6, NotificationEndpointHTTP = 7, NotificationEndpointPagerDuty = 8, NotificationEndpointSlack = 9, NotificationRule = 10, Task = 11, Telegraf = 12, Variable = 13 }

	export interface StackEventsResourcesLinks {
		self?: string | null;
	}
	export interface StackEventsResourcesLinksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateStackEventsResourcesLinksFormGroup() {
		return new FormGroup<StackEventsResourcesLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableViewProperties {

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;

		/**
		 * Indicates whether decimal places should be enforced, and how many digits it should show.
		 * Required
		 */
		decimalPlaces: DecimalPlaces;

		/**
		 * fieldOptions represent the fields retrieved by the query with customization options
		 * Required
		 */
		fieldOptions: Array<RenamableField>;

		/** Required */
		note: string;

		/** Required */
		queries: Array<DashboardQuery>;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;

		/** Required */
		tableOptions: TableViewPropertiesTableOptions;

		/**
		 * timeFormat describes the display format for time values according to moment.js date formatting
		 * Required
		 */
		timeFormat: string;

		/** Required */
		type: TableViewPropertiesType;
	}
	export interface TableViewPropertiesFormProperties {

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,

		/**
		 * timeFormat describes the display format for time values according to moment.js date formatting
		 * Required
		 */
		timeFormat: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<TableViewPropertiesType | null | undefined>,
	}
	export function CreateTableViewPropertiesFormGroup() {
		return new FormGroup<TableViewPropertiesFormProperties>({
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			timeFormat: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<TableViewPropertiesType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TableViewPropertiesTableOptions {

		/** fixFirstColumn indicates whether the first column of the table should be locked */
		fixFirstColumn?: boolean | null;

		/** Describes a field that can be renamed and made visible or invisible. */
		sortBy?: RenamableField;

		/** verticalTimeAxis describes the orientation of the table by indicating whether the time axis will be displayed vertically */
		verticalTimeAxis?: boolean | null;

		/** Wrapping describes the text wrapping style to be used in table views */
		wrapping?: TableViewPropertiesTableOptionsWrapping | null;
	}
	export interface TableViewPropertiesTableOptionsFormProperties {

		/** fixFirstColumn indicates whether the first column of the table should be locked */
		fixFirstColumn: FormControl<boolean | null | undefined>,

		/** verticalTimeAxis describes the orientation of the table by indicating whether the time axis will be displayed vertically */
		verticalTimeAxis: FormControl<boolean | null | undefined>,

		/** Wrapping describes the text wrapping style to be used in table views */
		wrapping: FormControl<TableViewPropertiesTableOptionsWrapping | null | undefined>,
	}
	export function CreateTableViewPropertiesTableOptionsFormGroup() {
		return new FormGroup<TableViewPropertiesTableOptionsFormProperties>({
			fixFirstColumn: new FormControl<boolean | null | undefined>(undefined),
			verticalTimeAxis: new FormControl<boolean | null | undefined>(undefined),
			wrapping: new FormControl<TableViewPropertiesTableOptionsWrapping | null | undefined>(undefined),
		});

	}

	export enum TableViewPropertiesTableOptionsWrapping { truncate = 0, wrap = 1, 'single-line' = 2 }

	export enum TableViewPropertiesType { table = 0 }

	export interface Task_ {

		/** The ID of the authorization used when this task communicates with the query engine. */
		authorizationID?: string | null;
		createdAt?: Date | null;

		/** A task repetition schedule in the form '* * * * * *'; parsed from Flux. */
		cron?: string | null;

		/** An optional description of the task. */
		description?: string | null;

		/** A simple task repetition schedule; parsed from Flux. */
		every?: string | null;

		/**
		 * The Flux script to run for this task.
		 * Required
		 */
		flux: string;

		/** Required */
		id: string;
		labels?: Array<Label>;
		lastRunError?: string | null;
		lastRunStatus?: CheckBaseLastRunStatus | null;

		/** Timestamp of latest scheduled, completed run, RFC3339. */
		latestCompleted?: Date | null;
		links?: Task_Links;

		/**
		 * The name of the task.
		 * Required
		 */
		name: string;

		/** Duration to delay after the schedule, before executing the task; parsed from flux, if set to zero it will remove this option and use 0 as the default. */
		offset?: string | null;

		/** The name of the organization that owns this Task. */
		org?: string | null;

		/**
		 * The ID of the organization that owns this Task.
		 * Required
		 */
		orgID: string;
		status?: AuthorizationUpdateRequestStatus | null;

		/** The type of task, this can be used for filtering tasks on list actions. */
		type?: string | null;
		updatedAt?: Date | null;
	}
	export interface Task_FormProperties {

		/** The ID of the authorization used when this task communicates with the query engine. */
		authorizationID: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,

		/** A task repetition schedule in the form '* * * * * *'; parsed from Flux. */
		cron: FormControl<string | null | undefined>,

		/** An optional description of the task. */
		description: FormControl<string | null | undefined>,

		/** A simple task repetition schedule; parsed from Flux. */
		every: FormControl<string | null | undefined>,

		/**
		 * The Flux script to run for this task.
		 * Required
		 */
		flux: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		lastRunError: FormControl<string | null | undefined>,
		lastRunStatus: FormControl<CheckBaseLastRunStatus | null | undefined>,

		/** Timestamp of latest scheduled, completed run, RFC3339. */
		latestCompleted: FormControl<Date | null | undefined>,

		/**
		 * The name of the task.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Duration to delay after the schedule, before executing the task; parsed from flux, if set to zero it will remove this option and use 0 as the default. */
		offset: FormControl<string | null | undefined>,

		/** The name of the organization that owns this Task. */
		org: FormControl<string | null | undefined>,

		/**
		 * The ID of the organization that owns this Task.
		 * Required
		 */
		orgID: FormControl<string | null | undefined>,
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,

		/** The type of task, this can be used for filtering tasks on list actions. */
		type: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateTask_FormGroup() {
		return new FormGroup<Task_FormProperties>({
			authorizationID: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			cron: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			every: new FormControl<string | null | undefined>(undefined),
			flux: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Task_Links {

		/** URI of resource. */
		labels?: string | null;

		/** URI of resource. */
		logs?: string | null;

		/** URI of resource. */
		members?: string | null;

		/** URI of resource. */
		owners?: string | null;

		/** URI of resource. */
		runs?: string | null;

		/** URI of resource. */
		self?: string | null;
	}
	export interface Task_LinksFormProperties {

		/** URI of resource. */
		labels: FormControl<string | null | undefined>,

		/** URI of resource. */
		logs: FormControl<string | null | undefined>,

		/** URI of resource. */
		members: FormControl<string | null | undefined>,

		/** URI of resource. */
		owners: FormControl<string | null | undefined>,

		/** URI of resource. */
		runs: FormControl<string | null | undefined>,

		/** URI of resource. */
		self: FormControl<string | null | undefined>,
	}
	export function CreateTask_LinksFormGroup() {
		return new FormGroup<Task_LinksFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			logs: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			owners: new FormControl<string | null | undefined>(undefined),
			runs: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TaskCreateRequest {

		/** An optional description of the task. */
		description?: string | null;

		/**
		 * The Flux script to run for this task.
		 * Required
		 */
		flux: string;

		/** The name of the organization that owns this Task. */
		org?: string | null;

		/** The ID of the organization that owns this Task. */
		orgID?: string | null;
		status?: AuthorizationUpdateRequestStatus | null;
	}
	export interface TaskCreateRequestFormProperties {

		/** An optional description of the task. */
		description: FormControl<string | null | undefined>,

		/**
		 * The Flux script to run for this task.
		 * Required
		 */
		flux: FormControl<string | null | undefined>,

		/** The name of the organization that owns this Task. */
		org: FormControl<string | null | undefined>,

		/** The ID of the organization that owns this Task. */
		orgID: FormControl<string | null | undefined>,
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,
	}
	export function CreateTaskCreateRequestFormGroup() {
		return new FormGroup<TaskCreateRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			flux: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			org: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
		});

	}

	export enum TaskStatusType { active = 0, inactive = 1 }

	export interface TaskUpdateRequest {

		/** Override the 'cron' option in the flux script. */
		cron?: string | null;

		/** An optional description of the task. */
		description?: string | null;

		/** Override the 'every' option in the flux script. */
		every?: string | null;

		/** The Flux script to run for this task. */
		flux?: string | null;

		/** Override the 'name' option in the flux script. */
		name?: string | null;

		/** Override the 'offset' option in the flux script. */
		offset?: string | null;
		status?: AuthorizationUpdateRequestStatus | null;
	}
	export interface TaskUpdateRequestFormProperties {

		/** Override the 'cron' option in the flux script. */
		cron: FormControl<string | null | undefined>,

		/** An optional description of the task. */
		description: FormControl<string | null | undefined>,

		/** Override the 'every' option in the flux script. */
		every: FormControl<string | null | undefined>,

		/** The Flux script to run for this task. */
		flux: FormControl<string | null | undefined>,

		/** Override the 'name' option in the flux script. */
		name: FormControl<string | null | undefined>,

		/** Override the 'offset' option in the flux script. */
		offset: FormControl<string | null | undefined>,
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,
	}
	export function CreateTaskUpdateRequestFormGroup() {
		return new FormGroup<TaskUpdateRequestFormProperties>({
			cron: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			every: new FormControl<string | null | undefined>(undefined),
			flux: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
		});

	}

	export interface Tasks {
		links?: Links;
		tasks?: Array<Task_>;
	}
	export interface TasksFormProperties {
	}
	export function CreateTasksFormGroup() {
		return new FormGroup<TasksFormProperties>({
		});

	}

	export interface Telegraf {
	}
	export interface TelegrafFormProperties {
	}
	export function CreateTelegrafFormGroup() {
		return new FormGroup<TelegrafFormProperties>({
		});

	}

	export interface TelegrafPlugin {
		config?: string | null;
		description?: string | null;
		name?: string | null;
		type?: string | null;
	}
	export interface TelegrafPluginFormProperties {
		config: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateTelegrafPluginFormGroup() {
		return new FormGroup<TelegrafPluginFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TelegrafPlugins {
		os?: string | null;
		plugins?: Array<TelegrafPlugin>;
		version?: string | null;
	}
	export interface TelegrafPluginsFormProperties {
		os: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateTelegrafPluginsFormGroup() {
		return new FormGroup<TelegrafPluginsFormProperties>({
			os: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TelegrafRequest {
		config?: string | null;
		description?: string | null;
		metadata?: TelegrafRequestMetadata;
		name?: string | null;
		orgID?: string | null;
	}
	export interface TelegrafRequestFormProperties {
		config: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,
	}
	export function CreateTelegrafRequestFormGroup() {
		return new FormGroup<TelegrafRequestFormProperties>({
			config: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TelegrafRequestMetadata {
		buckets?: Array<string>;
	}
	export interface TelegrafRequestMetadataFormProperties {
	}
	export function CreateTelegrafRequestMetadataFormGroup() {
		return new FormGroup<TelegrafRequestMetadataFormProperties>({
		});

	}

	export interface Telegrafs {
		configurations?: Array<Telegraf>;
	}
	export interface TelegrafsFormProperties {
	}
	export function CreateTelegrafsFormGroup() {
		return new FormGroup<TelegrafsFormProperties>({
		});

	}

	export interface TelegramNotificationEndpoint {
	}
	export interface TelegramNotificationEndpointFormProperties {
	}
	export function CreateTelegramNotificationEndpointFormGroup() {
		return new FormGroup<TelegramNotificationEndpointFormProperties>({
		});

	}

	export interface TelegramNotificationRule extends NotificationRuleBase {

		/** Disables preview of web links in the sent messages when "true". Defaults to "false" . */
		disableWebPagePreview?: boolean | null;

		/**
		 * The message template as a flux interpolated string.
		 * Required
		 */
		messageTemplate: string;

		/** Parse mode of the message text per https://core.telegram.org/bots/api#formatting-options . Defaults to "MarkdownV2" . */
		parseMode?: TelegramNotificationRuleParseMode | null;

		/**
		 * The discriminator between other types of notification rules is "telegram".
		 * Required
		 */
		type: TelegramNotificationRuleType;
	}
	export interface TelegramNotificationRuleFormProperties extends NotificationRuleBaseFormProperties {

		/** Disables preview of web links in the sent messages when "true". Defaults to "false" . */
		disableWebPagePreview: FormControl<boolean | null | undefined>,

		/**
		 * The message template as a flux interpolated string.
		 * Required
		 */
		messageTemplate: FormControl<string | null | undefined>,

		/** Parse mode of the message text per https://core.telegram.org/bots/api#formatting-options . Defaults to "MarkdownV2" . */
		parseMode: FormControl<TelegramNotificationRuleParseMode | null | undefined>,

		/**
		 * The discriminator between other types of notification rules is "telegram".
		 * Required
		 */
		type: FormControl<TelegramNotificationRuleType | null | undefined>,
	}
	export function CreateTelegramNotificationRuleFormGroup() {
		return new FormGroup<TelegramNotificationRuleFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			endpointID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			every: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			limit: new FormControl<number | null | undefined>(undefined),
			limitEvery: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerID: new FormControl<string | null | undefined>(undefined),
			runbookLink: new FormControl<string | null | undefined>(undefined),
			sleepUntil: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined, [Validators.required]),
			taskID: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			disableWebPagePreview: new FormControl<boolean | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parseMode: new FormControl<TelegramNotificationRuleParseMode | null | undefined>(undefined),
			type: new FormControl<TelegramNotificationRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TelegramNotificationRuleParseMode { MarkdownV2 = 0, HTML = 1, Markdown = 2 }

	export enum TelegramNotificationRuleType { telegram = 0 }

	export interface TelegramNotificationRuleBase {

		/** Disables preview of web links in the sent messages when "true". Defaults to "false" . */
		disableWebPagePreview?: boolean | null;

		/**
		 * The message template as a flux interpolated string.
		 * Required
		 */
		messageTemplate: string;

		/** Parse mode of the message text per https://core.telegram.org/bots/api#formatting-options . Defaults to "MarkdownV2" . */
		parseMode?: TelegramNotificationRuleParseMode | null;

		/**
		 * The discriminator between other types of notification rules is "telegram".
		 * Required
		 */
		type: TelegramNotificationRuleType;
	}
	export interface TelegramNotificationRuleBaseFormProperties {

		/** Disables preview of web links in the sent messages when "true". Defaults to "false" . */
		disableWebPagePreview: FormControl<boolean | null | undefined>,

		/**
		 * The message template as a flux interpolated string.
		 * Required
		 */
		messageTemplate: FormControl<string | null | undefined>,

		/** Parse mode of the message text per https://core.telegram.org/bots/api#formatting-options . Defaults to "MarkdownV2" . */
		parseMode: FormControl<TelegramNotificationRuleParseMode | null | undefined>,

		/**
		 * The discriminator between other types of notification rules is "telegram".
		 * Required
		 */
		type: FormControl<TelegramNotificationRuleType | null | undefined>,
	}
	export function CreateTelegramNotificationRuleBaseFormGroup() {
		return new FormGroup<TelegramNotificationRuleBaseFormProperties>({
			disableWebPagePreview: new FormControl<boolean | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			parseMode: new FormControl<TelegramNotificationRuleParseMode | null | undefined>(undefined),
			type: new FormControl<TelegramNotificationRuleType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TemplateElement {
		apiVersion?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		meta?: TemplateElementMeta;
		spec?: string | null;
	}
	export interface TemplateElementFormProperties {
		apiVersion: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		spec: FormControl<string | null | undefined>,
	}
	export function CreateTemplateElementFormGroup() {
		return new FormGroup<TemplateElementFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateElementMeta {
		name?: string | null;
	}
	export interface TemplateElementMetaFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateElementMetaFormGroup() {
		return new FormGroup<TemplateElementMetaFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateApply {
		actions?: Array<string>;
		dryRun?: boolean | null;
		envRefs?: {[id: string]: any };
		orgID?: string | null;
		TemplateApplyRemotes?: Array<TemplateApplyRemotes>;
		secrets?: {[id: string]: string };
		stackID?: string | null;
		template?: TemplateApplyTemplate;
		TemplateApplyTemplates?: Array<TemplateApplyTemplates>;
	}
	export interface TemplateApplyFormProperties {
		dryRun: FormControl<boolean | null | undefined>,
		envRefs: FormControl<{[id: string]: any } | null | undefined>,
		orgID: FormControl<string | null | undefined>,
		secrets: FormControl<{[id: string]: string } | null | undefined>,
		stackID: FormControl<string | null | undefined>,
	}
	export function CreateTemplateApplyFormGroup() {
		return new FormGroup<TemplateApplyFormProperties>({
			dryRun: new FormControl<boolean | null | undefined>(undefined),
			envRefs: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			secrets: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			stackID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateApplyRemotes {
		contentType?: string | null;

		/** Required */
		url: string;
	}
	export interface TemplateApplyRemotesFormProperties {
		contentType: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTemplateApplyRemotesFormGroup() {
		return new FormGroup<TemplateApplyRemotesFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TemplateApplyTemplate {
		contentType?: string | null;
		contents?: Array<TemplateElement>;
		sources?: Array<string>;
	}
	export interface TemplateApplyTemplateFormProperties {
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateTemplateApplyTemplateFormGroup() {
		return new FormGroup<TemplateApplyTemplateFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateApplyTemplates {
		contentType?: string | null;
		contents?: Array<TemplateElement>;
		sources?: Array<string>;
	}
	export interface TemplateApplyTemplatesFormProperties {
		contentType: FormControl<string | null | undefined>,
	}
	export function CreateTemplateApplyTemplatesFormGroup() {
		return new FormGroup<TemplateApplyTemplatesFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateChart {
		height?: number | null;
		properties?: ViewProperties;
		width?: number | null;
		xPos?: number | null;
		yPos?: number | null;
	}
	export interface TemplateChartFormProperties {
		height: FormControl<number | null | undefined>,
		width: FormControl<number | null | undefined>,
		xPos: FormControl<number | null | undefined>,
		yPos: FormControl<number | null | undefined>,
	}
	export function CreateTemplateChartFormGroup() {
		return new FormGroup<TemplateChartFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			xPos: new FormControl<number | null | undefined>(undefined),
			yPos: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TemplateEnvReferencesElement {

		/** Default value that will be provided for the reference when no value is provided */
		defaultValue?: string;

		/**
		 * Key identified as environment reference and is the key identified in the template
		 * Required
		 */
		envRefKey: string;

		/**
		 * Field the environment reference corresponds too
		 * Required
		 */
		resourceField: string;

		/** Value provided to fulfill reference */
		value?: string;
	}
	export interface TemplateEnvReferencesElementFormProperties {

		/** Default value that will be provided for the reference when no value is provided */
		defaultValue: FormControl<string | null | undefined>,

		/**
		 * Key identified as environment reference and is the key identified in the template
		 * Required
		 */
		envRefKey: FormControl<string | null | undefined>,

		/**
		 * Field the environment reference corresponds too
		 * Required
		 */
		resourceField: FormControl<string | null | undefined>,

		/** Value provided to fulfill reference */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTemplateEnvReferencesElementFormGroup() {
		return new FormGroup<TemplateEnvReferencesElementFormProperties>({
			defaultValue: new FormControl<string | null | undefined>(undefined),
			envRefKey: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceField: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateExportByID {
		TemplateExportByIDOrgIDs?: Array<TemplateExportByIDOrgIDs>;
		resources?: TemplateExportByIDResources;
		stackID?: string | null;
	}
	export interface TemplateExportByIDFormProperties {
		stackID: FormControl<string | null | undefined>,
	}
	export function CreateTemplateExportByIDFormGroup() {
		return new FormGroup<TemplateExportByIDFormProperties>({
			stackID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateExportByIDOrgIDs {
		orgID?: string | null;
		resourceFilters?: TemplateExportByIDOrgIDsResourceFilters;
	}
	export interface TemplateExportByIDOrgIDsFormProperties {
		orgID: FormControl<string | null | undefined>,
	}
	export function CreateTemplateExportByIDOrgIDsFormGroup() {
		return new FormGroup<TemplateExportByIDOrgIDsFormProperties>({
			orgID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateExportByIDOrgIDsResourceFilters {
		byLabel?: Array<string>;
		byResourceKind?: Array<TemplateKind>;
	}
	export interface TemplateExportByIDOrgIDsResourceFiltersFormProperties {
	}
	export function CreateTemplateExportByIDOrgIDsResourceFiltersFormGroup() {
		return new FormGroup<TemplateExportByIDOrgIDsResourceFiltersFormProperties>({
		});

	}

	export enum TemplateKind { Bucket = 0, Check = 1, CheckDeadman = 2, CheckThreshold = 3, Dashboard = 4, Label = 5, NotificationEndpoint = 6, NotificationEndpointHTTP = 7, NotificationEndpointPagerDuty = 8, NotificationEndpointSlack = 9, NotificationRule = 10, Task = 11, Telegraf = 12, Variable = 13 }

	export interface TemplateExportByIDResources {

		/** Required */
		id: string;

		/** Required */
		kind: StackEventsResourcesAssociationsKind;

		/** if defined with id, name is used for resource exported by id. if defined independently, resources strictly matching name are exported */
		name?: string | null;
	}
	export interface TemplateExportByIDResourcesFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,

		/** if defined with id, name is used for resource exported by id. if defined independently, resources strictly matching name are exported */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateExportByIDResourcesFormGroup() {
		return new FormGroup<TemplateExportByIDResourcesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateExportByName {
		TemplateExportByNameOrgIDs?: Array<TemplateExportByNameOrgIDs>;
		resources?: TemplateExportByNameResources;
		stackID?: string | null;
	}
	export interface TemplateExportByNameFormProperties {
		stackID: FormControl<string | null | undefined>,
	}
	export function CreateTemplateExportByNameFormGroup() {
		return new FormGroup<TemplateExportByNameFormProperties>({
			stackID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateExportByNameOrgIDs {
		orgID?: string | null;
		resourceFilters?: TemplateExportByNameOrgIDsResourceFilters;
	}
	export interface TemplateExportByNameOrgIDsFormProperties {
		orgID: FormControl<string | null | undefined>,
	}
	export function CreateTemplateExportByNameOrgIDsFormGroup() {
		return new FormGroup<TemplateExportByNameOrgIDsFormProperties>({
			orgID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateExportByNameOrgIDsResourceFilters {
		byLabel?: Array<string>;
		byResourceKind?: Array<TemplateKind>;
	}
	export interface TemplateExportByNameOrgIDsResourceFiltersFormProperties {
	}
	export function CreateTemplateExportByNameOrgIDsResourceFiltersFormGroup() {
		return new FormGroup<TemplateExportByNameOrgIDsResourceFiltersFormProperties>({
		});

	}

	export interface TemplateExportByNameResources {

		/** Required */
		kind: StackEventsResourcesAssociationsKind;

		/** Required */
		name: string;
	}
	export interface TemplateExportByNameResourcesFormProperties {

		/** Required */
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateExportByNameResourcesFormGroup() {
		return new FormGroup<TemplateExportByNameResourcesFormProperties>({
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TemplateSummary {
		diff?: TemplateSummaryDiff;
		TemplateSummaryErrors?: Array<TemplateSummaryErrors>;
		sources?: Array<string>;
		stackID?: string | null;
		summary?: TemplateSummarySummary;
	}
	export interface TemplateSummaryFormProperties {
		stackID: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryFormGroup() {
		return new FormGroup<TemplateSummaryFormProperties>({
			stackID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiff {
		TemplateSummaryDiffBuckets?: Array<TemplateSummaryDiffBuckets>;
		TemplateSummaryDiffChecks?: Array<TemplateSummaryDiffChecks>;
		TemplateSummaryDiffDashboards?: Array<TemplateSummaryDiffDashboards>;
		TemplateSummaryDiffLabelMappings?: Array<TemplateSummaryDiffLabelMappings>;
		TemplateSummaryDiffLabels?: Array<TemplateSummaryDiffLabels>;
		TemplateSummaryDiffNotificationEndpoints?: Array<TemplateSummaryDiffNotificationEndpoints>;
		TemplateSummaryDiffNotificationRules?: Array<TemplateSummaryDiffNotificationRules>;
		TemplateSummaryDiffTasks?: Array<TemplateSummaryDiffTasks>;
		TemplateSummaryDiffTelegrafConfigs?: Array<TemplateSummaryDiffTelegrafConfigs>;
		TemplateSummaryDiffVariables?: Array<TemplateSummaryDiffVariables>;
	}
	export interface TemplateSummaryDiffFormProperties {
	}
	export function CreateTemplateSummaryDiffFormGroup() {
		return new FormGroup<TemplateSummaryDiffFormProperties>({
		});

	}

	export interface TemplateSummaryDiffBuckets {
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		new?: TemplateSummaryDiffBucketsNew;
		old?: TemplateSummaryDiffBucketsOld;
		stateStatus?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummaryDiffBucketsFormProperties {
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		stateStatus: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffBucketsFormGroup() {
		return new FormGroup<TemplateSummaryDiffBucketsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			stateStatus: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffBucketsNew {
		description?: string | null;
		name?: string | null;

		/** Rules to expire or retain data.  No rules means data never expires. */
		retentionRules?: Array<RetentionRule>;
	}
	export interface TemplateSummaryDiffBucketsNewFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffBucketsNewFormGroup() {
		return new FormGroup<TemplateSummaryDiffBucketsNewFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffBucketsOld {
		description?: string | null;
		name?: string | null;

		/** Rules to expire or retain data.  No rules means data never expires. */
		retentionRules?: Array<RetentionRule>;
	}
	export interface TemplateSummaryDiffBucketsOldFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffBucketsOldFormGroup() {
		return new FormGroup<TemplateSummaryDiffBucketsOldFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffChecks {
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		new?: CheckDiscriminator;
		old?: CheckDiscriminator;
		stateStatus?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummaryDiffChecksFormProperties {
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		stateStatus: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffChecksFormGroup() {
		return new FormGroup<TemplateSummaryDiffChecksFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			stateStatus: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffDashboards {
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		new?: TemplateSummaryDiffDashboardsNew;
		old?: TemplateSummaryDiffDashboardsOld;
		stateStatus?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummaryDiffDashboardsFormProperties {
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		stateStatus: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffDashboardsFormGroup() {
		return new FormGroup<TemplateSummaryDiffDashboardsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			stateStatus: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffDashboardsNew {
		charts?: Array<TemplateChart>;
		description?: string | null;
		name?: string | null;
	}
	export interface TemplateSummaryDiffDashboardsNewFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffDashboardsNewFormGroup() {
		return new FormGroup<TemplateSummaryDiffDashboardsNewFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffDashboardsOld {
		charts?: Array<TemplateChart>;
		description?: string | null;
		name?: string | null;
	}
	export interface TemplateSummaryDiffDashboardsOldFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffDashboardsOldFormGroup() {
		return new FormGroup<TemplateSummaryDiffDashboardsOldFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffLabelMappings {
		labelID?: string | null;
		labelName?: string | null;
		labelTemplateMetaName?: string | null;
		resourceID?: string | null;
		resourceName?: string | null;
		resourceTemplateMetaName?: string | null;
		resourceType?: string | null;
		status?: string | null;
	}
	export interface TemplateSummaryDiffLabelMappingsFormProperties {
		labelID: FormControl<string | null | undefined>,
		labelName: FormControl<string | null | undefined>,
		labelTemplateMetaName: FormControl<string | null | undefined>,
		resourceID: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		resourceTemplateMetaName: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffLabelMappingsFormGroup() {
		return new FormGroup<TemplateSummaryDiffLabelMappingsFormProperties>({
			labelID: new FormControl<string | null | undefined>(undefined),
			labelName: new FormControl<string | null | undefined>(undefined),
			labelTemplateMetaName: new FormControl<string | null | undefined>(undefined),
			resourceID: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceTemplateMetaName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffLabels {
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		new?: TemplateSummaryDiffLabelsNew;
		old?: TemplateSummaryDiffLabelsOld;
		stateStatus?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummaryDiffLabelsFormProperties {
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		stateStatus: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffLabelsFormGroup() {
		return new FormGroup<TemplateSummaryDiffLabelsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			stateStatus: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffLabelsNew {
		color?: string | null;
		description?: string | null;
		name?: string | null;
	}
	export interface TemplateSummaryDiffLabelsNewFormProperties {
		color: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffLabelsNewFormGroup() {
		return new FormGroup<TemplateSummaryDiffLabelsNewFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffLabelsOld {
		color?: string | null;
		description?: string | null;
		name?: string | null;
	}
	export interface TemplateSummaryDiffLabelsOldFormProperties {
		color: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffLabelsOldFormGroup() {
		return new FormGroup<TemplateSummaryDiffLabelsOldFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffNotificationEndpoints {
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		new?: NotificationEndpointDiscriminator;
		old?: NotificationEndpointDiscriminator;
		stateStatus?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummaryDiffNotificationEndpointsFormProperties {
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		stateStatus: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffNotificationEndpointsFormGroup() {
		return new FormGroup<TemplateSummaryDiffNotificationEndpointsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			stateStatus: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffNotificationRules {
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		new?: TemplateSummaryDiffNotificationRulesNew;
		old?: TemplateSummaryDiffNotificationRulesOld;
		stateStatus?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummaryDiffNotificationRulesFormProperties {
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		stateStatus: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffNotificationRulesFormGroup() {
		return new FormGroup<TemplateSummaryDiffNotificationRulesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			stateStatus: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffNotificationRulesNew {
		description?: string | null;
		endpointID?: string | null;
		endpointName?: string | null;
		endpointType?: string | null;
		every?: string | null;
		messageTemplate?: string | null;
		name?: string | null;
		offset?: string | null;
		status?: string | null;
		TemplateSummaryDiffNotificationRulesNewStatusRules?: Array<TemplateSummaryDiffNotificationRulesNewStatusRules>;
		TemplateSummaryDiffNotificationRulesNewTagRules?: Array<TemplateSummaryDiffNotificationRulesNewTagRules>;
	}
	export interface TemplateSummaryDiffNotificationRulesNewFormProperties {
		description: FormControl<string | null | undefined>,
		endpointID: FormControl<string | null | undefined>,
		endpointName: FormControl<string | null | undefined>,
		endpointType: FormControl<string | null | undefined>,
		every: FormControl<string | null | undefined>,
		messageTemplate: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		offset: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffNotificationRulesNewFormGroup() {
		return new FormGroup<TemplateSummaryDiffNotificationRulesNewFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endpointID: new FormControl<string | null | undefined>(undefined),
			endpointName: new FormControl<string | null | undefined>(undefined),
			endpointType: new FormControl<string | null | undefined>(undefined),
			every: new FormControl<string | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffNotificationRulesNewStatusRules {
		currentLevel?: string | null;
		previousLevel?: string | null;
	}
	export interface TemplateSummaryDiffNotificationRulesNewStatusRulesFormProperties {
		currentLevel: FormControl<string | null | undefined>,
		previousLevel: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffNotificationRulesNewStatusRulesFormGroup() {
		return new FormGroup<TemplateSummaryDiffNotificationRulesNewStatusRulesFormProperties>({
			currentLevel: new FormControl<string | null | undefined>(undefined),
			previousLevel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffNotificationRulesNewTagRules {
		key?: string | null;
		operator?: string | null;
		value?: string | null;
	}
	export interface TemplateSummaryDiffNotificationRulesNewTagRulesFormProperties {
		key: FormControl<string | null | undefined>,
		operator: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffNotificationRulesNewTagRulesFormGroup() {
		return new FormGroup<TemplateSummaryDiffNotificationRulesNewTagRulesFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffNotificationRulesOld {
		description?: string | null;
		endpointID?: string | null;
		endpointName?: string | null;
		endpointType?: string | null;
		every?: string | null;
		messageTemplate?: string | null;
		name?: string | null;
		offset?: string | null;
		status?: string | null;
		TemplateSummaryDiffNotificationRulesOldStatusRules?: Array<TemplateSummaryDiffNotificationRulesOldStatusRules>;
		TemplateSummaryDiffNotificationRulesOldTagRules?: Array<TemplateSummaryDiffNotificationRulesOldTagRules>;
	}
	export interface TemplateSummaryDiffNotificationRulesOldFormProperties {
		description: FormControl<string | null | undefined>,
		endpointID: FormControl<string | null | undefined>,
		endpointName: FormControl<string | null | undefined>,
		endpointType: FormControl<string | null | undefined>,
		every: FormControl<string | null | undefined>,
		messageTemplate: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		offset: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffNotificationRulesOldFormGroup() {
		return new FormGroup<TemplateSummaryDiffNotificationRulesOldFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endpointID: new FormControl<string | null | undefined>(undefined),
			endpointName: new FormControl<string | null | undefined>(undefined),
			endpointType: new FormControl<string | null | undefined>(undefined),
			every: new FormControl<string | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffNotificationRulesOldStatusRules {
		currentLevel?: string | null;
		previousLevel?: string | null;
	}
	export interface TemplateSummaryDiffNotificationRulesOldStatusRulesFormProperties {
		currentLevel: FormControl<string | null | undefined>,
		previousLevel: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffNotificationRulesOldStatusRulesFormGroup() {
		return new FormGroup<TemplateSummaryDiffNotificationRulesOldStatusRulesFormProperties>({
			currentLevel: new FormControl<string | null | undefined>(undefined),
			previousLevel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffNotificationRulesOldTagRules {
		key?: string | null;
		operator?: string | null;
		value?: string | null;
	}
	export interface TemplateSummaryDiffNotificationRulesOldTagRulesFormProperties {
		key: FormControl<string | null | undefined>,
		operator: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffNotificationRulesOldTagRulesFormGroup() {
		return new FormGroup<TemplateSummaryDiffNotificationRulesOldTagRulesFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffTasks {
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		new?: TemplateSummaryDiffTasksNew;
		old?: TemplateSummaryDiffTasksOld;
		stateStatus?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummaryDiffTasksFormProperties {
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		stateStatus: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffTasksFormGroup() {
		return new FormGroup<TemplateSummaryDiffTasksFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			stateStatus: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffTasksNew {
		cron?: string | null;
		description?: string | null;
		every?: string | null;
		name?: string | null;
		offset?: string | null;
		query?: string | null;
		status?: string | null;
	}
	export interface TemplateSummaryDiffTasksNewFormProperties {
		cron: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		every: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		offset: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffTasksNewFormGroup() {
		return new FormGroup<TemplateSummaryDiffTasksNewFormProperties>({
			cron: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			every: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffTasksOld {
		cron?: string | null;
		description?: string | null;
		every?: string | null;
		name?: string | null;
		offset?: string | null;
		query?: string | null;
		status?: string | null;
	}
	export interface TemplateSummaryDiffTasksOldFormProperties {
		cron: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		every: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		offset: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffTasksOldFormGroup() {
		return new FormGroup<TemplateSummaryDiffTasksOldFormProperties>({
			cron: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			every: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffTelegrafConfigs {
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		new?: TelegrafRequest;
		old?: TelegrafRequest;
		stateStatus?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummaryDiffTelegrafConfigsFormProperties {
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		stateStatus: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffTelegrafConfigsFormGroup() {
		return new FormGroup<TemplateSummaryDiffTelegrafConfigsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			stateStatus: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffVariables {
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		new?: TemplateSummaryDiffVariablesNew;
		old?: TemplateSummaryDiffVariablesOld;
		stateStatus?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummaryDiffVariablesFormProperties {
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		stateStatus: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffVariablesFormGroup() {
		return new FormGroup<TemplateSummaryDiffVariablesFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			stateStatus: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryDiffVariablesNew {
		args?: VariableProperties;
		description?: string | null;
		name?: string | null;
	}
	export interface TemplateSummaryDiffVariablesNewFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffVariablesNewFormGroup() {
		return new FormGroup<TemplateSummaryDiffVariablesNewFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VariableProperties {
	}
	export interface VariablePropertiesFormProperties {
	}
	export function CreateVariablePropertiesFormGroup() {
		return new FormGroup<VariablePropertiesFormProperties>({
		});

	}

	export interface TemplateSummaryDiffVariablesOld {
		args?: VariableProperties;
		description?: string | null;
		name?: string | null;
	}
	export interface TemplateSummaryDiffVariablesOldFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryDiffVariablesOldFormGroup() {
		return new FormGroup<TemplateSummaryDiffVariablesOldFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryErrors {
		fields?: Array<string>;
		indexes?: Array<number>;
		kind?: StackEventsResourcesAssociationsKind | null;
		reason?: string | null;
	}
	export interface TemplateSummaryErrorsFormProperties {
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryErrorsFormGroup() {
		return new FormGroup<TemplateSummaryErrorsFormProperties>({
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummarySummary {
		TemplateSummarySummaryBuckets?: Array<TemplateSummarySummaryBuckets>;
		checks?: Array<string>;
		TemplateSummarySummaryDashboards?: Array<TemplateSummarySummaryDashboards>;
		TemplateSummarySummaryLabelMappings?: Array<TemplateSummarySummaryLabelMappings>;
		labels?: Array<TemplateSummaryLabel>;
		missingEnvRefs?: Array<string>;
		missingSecrets?: Array<string>;
		notificationEndpoints?: Array<string>;
		TemplateSummarySummaryNotificationRules?: Array<TemplateSummarySummaryNotificationRules>;
		TemplateSummarySummaryTasks?: Array<TemplateSummarySummaryTasks>;
		telegrafConfigs?: Array<string>;
		TemplateSummarySummaryVariables?: Array<TemplateSummarySummaryVariables>;
	}
	export interface TemplateSummarySummaryFormProperties {
	}
	export function CreateTemplateSummarySummaryFormGroup() {
		return new FormGroup<TemplateSummarySummaryFormProperties>({
		});

	}

	export interface TemplateSummarySummaryBuckets {
		description?: string | null;
		envReferences?: Array<TemplateEnvReferencesElement>;
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		labelAssociations?: Array<TemplateSummaryLabel>;
		name?: string | null;
		orgID?: string | null;
		retentionPeriod?: number | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummarySummaryBucketsFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		name: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,
		retentionPeriod: FormControl<number | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummarySummaryBucketsFormGroup() {
		return new FormGroup<TemplateSummarySummaryBucketsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			retentionPeriod: new FormControl<number | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryLabel {
		envReferences?: Array<TemplateEnvReferencesElement>;
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		name?: string | null;
		orgID?: string | null;
		properties?: TemplateSummaryLabelProperties;
		templateMetaName?: string | null;
	}
	export interface TemplateSummaryLabelFormProperties {
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		name: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryLabelFormGroup() {
		return new FormGroup<TemplateSummaryLabelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummaryLabelProperties {
		color?: string | null;
		description?: string | null;
	}
	export interface TemplateSummaryLabelPropertiesFormProperties {
		color: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummaryLabelPropertiesFormGroup() {
		return new FormGroup<TemplateSummaryLabelPropertiesFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummarySummaryDashboards {
		charts?: Array<TemplateChart>;
		description?: string | null;
		envReferences?: Array<TemplateEnvReferencesElement>;
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		labelAssociations?: Array<TemplateSummaryLabel>;
		name?: string | null;
		orgID?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummarySummaryDashboardsFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		name: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummarySummaryDashboardsFormGroup() {
		return new FormGroup<TemplateSummarySummaryDashboardsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummarySummaryLabelMappings {
		labelID?: string | null;
		labelName?: string | null;
		labelTemplateMetaName?: string | null;
		resourceID?: string | null;
		resourceName?: string | null;
		resourceTemplateMetaName?: string | null;
		resourceType?: string | null;
		status?: string | null;
	}
	export interface TemplateSummarySummaryLabelMappingsFormProperties {
		labelID: FormControl<string | null | undefined>,
		labelName: FormControl<string | null | undefined>,
		labelTemplateMetaName: FormControl<string | null | undefined>,
		resourceID: FormControl<string | null | undefined>,
		resourceName: FormControl<string | null | undefined>,
		resourceTemplateMetaName: FormControl<string | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummarySummaryLabelMappingsFormGroup() {
		return new FormGroup<TemplateSummarySummaryLabelMappingsFormProperties>({
			labelID: new FormControl<string | null | undefined>(undefined),
			labelName: new FormControl<string | null | undefined>(undefined),
			labelTemplateMetaName: new FormControl<string | null | undefined>(undefined),
			resourceID: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceTemplateMetaName: new FormControl<string | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummarySummaryNotificationRules {
		description?: string | null;
		endpointID?: string | null;
		endpointTemplateMetaName?: string | null;
		endpointType?: string | null;
		envReferences?: Array<TemplateEnvReferencesElement>;
		every?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		labelAssociations?: Array<TemplateSummaryLabel>;
		messageTemplate?: string | null;
		name?: string | null;
		offset?: string | null;
		status?: string | null;
		TemplateSummarySummaryNotificationRulesStatusRules?: Array<TemplateSummarySummaryNotificationRulesStatusRules>;
		TemplateSummarySummaryNotificationRulesTagRules?: Array<TemplateSummarySummaryNotificationRulesTagRules>;
		templateMetaName?: string | null;
	}
	export interface TemplateSummarySummaryNotificationRulesFormProperties {
		description: FormControl<string | null | undefined>,
		endpointID: FormControl<string | null | undefined>,
		endpointTemplateMetaName: FormControl<string | null | undefined>,
		endpointType: FormControl<string | null | undefined>,
		every: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		messageTemplate: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		offset: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummarySummaryNotificationRulesFormGroup() {
		return new FormGroup<TemplateSummarySummaryNotificationRulesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			endpointID: new FormControl<string | null | undefined>(undefined),
			endpointTemplateMetaName: new FormControl<string | null | undefined>(undefined),
			endpointType: new FormControl<string | null | undefined>(undefined),
			every: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			messageTemplate: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummarySummaryNotificationRulesStatusRules {
		currentLevel?: string | null;
		previousLevel?: string | null;
	}
	export interface TemplateSummarySummaryNotificationRulesStatusRulesFormProperties {
		currentLevel: FormControl<string | null | undefined>,
		previousLevel: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummarySummaryNotificationRulesStatusRulesFormGroup() {
		return new FormGroup<TemplateSummarySummaryNotificationRulesStatusRulesFormProperties>({
			currentLevel: new FormControl<string | null | undefined>(undefined),
			previousLevel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummarySummaryNotificationRulesTagRules {
		key?: string | null;
		operator?: string | null;
		value?: string | null;
	}
	export interface TemplateSummarySummaryNotificationRulesTagRulesFormProperties {
		key: FormControl<string | null | undefined>,
		operator: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummarySummaryNotificationRulesTagRulesFormGroup() {
		return new FormGroup<TemplateSummarySummaryNotificationRulesTagRulesFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummarySummaryTasks {
		cron?: string | null;
		description?: string | null;
		envReferences?: Array<TemplateEnvReferencesElement>;
		every?: string | null;
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		name?: string | null;
		offset?: string | null;
		query?: string | null;
		status?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummarySummaryTasksFormProperties {
		cron: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		every: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		name: FormControl<string | null | undefined>,
		offset: FormControl<string | null | undefined>,
		query: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummarySummaryTasksFormGroup() {
		return new FormGroup<TemplateSummarySummaryTasksFormProperties>({
			cron: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			every: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TemplateSummarySummaryVariables {
		arguments?: VariableProperties;
		description?: string | null;
		envReferences?: Array<TemplateEnvReferencesElement>;
		id?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		labelAssociations?: Array<TemplateSummaryLabel>;
		name?: string | null;
		orgID?: string | null;
		templateMetaName?: string | null;
	}
	export interface TemplateSummarySummaryVariablesFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		name: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateTemplateSummarySummaryVariablesFormGroup() {
		return new FormGroup<TemplateSummarySummaryVariablesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Declares a Flux test case */
	export interface TestStatement {

		/** Represents the declaration of a variable */
		assignment?: VariableAssignment;

		/** Type of AST node */
		type?: string | null;
	}

	/** Declares a Flux test case */
	export interface TestStatementFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTestStatementFormGroup() {
		return new FormGroup<TestStatementFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Threshold {
	}
	export interface ThresholdFormProperties {
	}
	export function CreateThresholdFormGroup() {
		return new FormGroup<ThresholdFormProperties>({
		});

	}

	export interface ThresholdBase {

		/** If true, only alert if all values meet threshold. */
		allValues?: boolean | null;

		/** The state to record if check matches a criteria. */
		level?: CheckStatusLevel | null;
	}
	export interface ThresholdBaseFormProperties {

		/** If true, only alert if all values meet threshold. */
		allValues: FormControl<boolean | null | undefined>,

		/** The state to record if check matches a criteria. */
		level: FormControl<CheckStatusLevel | null | undefined>,
	}
	export function CreateThresholdBaseFormGroup() {
		return new FormGroup<ThresholdBaseFormProperties>({
			allValues: new FormControl<boolean | null | undefined>(undefined),
			level: new FormControl<CheckStatusLevel | null | undefined>(undefined),
		});

	}

	export interface ThresholdCheck extends CheckBase {

		/** Check repetition interval. */
		every?: string | null;

		/** Duration to delay after the schedule, before executing check. */
		offset?: string | null;

		/** The template used to generate and write a status message. */
		statusMessageTemplate?: string | null;

		/** List of tags to write to each status. */
		ThresholdCheckTags?: Array<ThresholdCheckTags>;
		thresholds?: Array<Threshold>;

		/** Required */
		type: ThresholdCheckType;
	}
	export interface ThresholdCheckFormProperties extends CheckBaseFormProperties {

		/** Check repetition interval. */
		every: FormControl<string | null | undefined>,

		/** Duration to delay after the schedule, before executing check. */
		offset: FormControl<string | null | undefined>,

		/** The template used to generate and write a status message. */
		statusMessageTemplate: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<ThresholdCheckType | null | undefined>,
	}
	export function CreateThresholdCheckFormGroup() {
		return new FormGroup<ThresholdCheckFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastRunError: new FormControl<string | null | undefined>(undefined),
			lastRunStatus: new FormControl<CheckBaseLastRunStatus | null | undefined>(undefined),
			latestCompleted: new FormControl<Date | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerID: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
			taskID: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			every: new FormControl<string | null | undefined>(undefined),
			offset: new FormControl<string | null | undefined>(undefined),
			statusMessageTemplate: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ThresholdCheckType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ThresholdCheckTags {
		key?: string | null;
		value?: string | null;
	}
	export interface ThresholdCheckTagsFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateThresholdCheckTagsFormGroup() {
		return new FormGroup<ThresholdCheckTagsFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ThresholdCheckType { threshold = 0 }


	/** Uses operators to act on a single operand in an expression */
	export interface UnaryExpression {
		argument?: Expression;
		operator?: string | null;

		/** Type of AST node */
		type?: string | null;
	}

	/** Uses operators to act on a single operand in an expression */
	export interface UnaryExpressionFormProperties {
		operator: FormControl<string | null | undefined>,

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
	}
	export function CreateUnaryExpressionFormGroup() {
		return new FormGroup<UnaryExpressionFormProperties>({
			operator: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents integer numbers */
	export interface UnsignedIntegerLiteral {

		/** Type of AST node */
		type?: string | null;
		value?: string | null;
	}

	/** Represents integer numbers */
	export interface UnsignedIntegerLiteralFormProperties {

		/** Type of AST node */
		type: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateUnsignedIntegerLiteralFormGroup() {
		return new FormGroup<UnsignedIntegerLiteralFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {
		id?: string | null;

		/** Required */
		name: string;
		oauthID?: string | null;

		/** If inactive the user is inactive. */
		status?: AuthorizationUpdateRequestStatus | null;
	}
	export interface UserFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		oauthID: FormControl<string | null | undefined>,

		/** If inactive the user is inactive. */
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oauthID: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
		});

	}

	export interface UserResponse {
		id?: string | null;
		links?: UserResponseLinks;

		/** Required */
		name: string;
		oauthID?: string | null;

		/** If inactive the user is inactive. */
		status?: AuthorizationUpdateRequestStatus | null;
	}
	export interface UserResponseFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		oauthID: FormControl<string | null | undefined>,

		/** If inactive the user is inactive. */
		status: FormControl<AuthorizationUpdateRequestStatus | null | undefined>,
	}
	export function CreateUserResponseFormGroup() {
		return new FormGroup<UserResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oauthID: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<AuthorizationUpdateRequestStatus | null | undefined>(undefined),
		});

	}

	export interface UserResponseLinks {
		self?: string | null;
	}
	export interface UserResponseLinksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateUserResponseLinksFormGroup() {
		return new FormGroup<UserResponseLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Users {
		links?: UsersLinks;
		users?: Array<UserResponse>;
	}
	export interface UsersFormProperties {
	}
	export function CreateUsersFormGroup() {
		return new FormGroup<UsersFormProperties>({
		});

	}

	export interface UsersLinks {
		self?: string | null;
	}
	export interface UsersLinksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateUsersLinksFormGroup() {
		return new FormGroup<UsersLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Variable {

		/** Required */
		arguments: VariableProperties;
		createdAt?: Date | null;
		description?: string | null;
		id?: string | null;
		labels?: Array<Label>;
		links?: VariableLinks;

		/** Required */
		name: string;

		/** Required */
		orgID: string;
		selected?: Array<string>;
		updatedAt?: Date | null;
	}
	export interface VariableFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		orgID: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			orgID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface VariableLinks {
		labels?: string | null;
		org?: string | null;
		self?: string | null;
	}
	export interface VariableLinksFormProperties {
		labels: FormControl<string | null | undefined>,
		org: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
	}
	export function CreateVariableLinksFormGroup() {
		return new FormGroup<VariableLinksFormProperties>({
			labels: new FormControl<string | null | undefined>(undefined),
			org: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Variables {
		variables?: Array<Variable>;
	}
	export interface VariablesFormProperties {
	}
	export function CreateVariablesFormGroup() {
		return new FormGroup<VariablesFormProperties>({
		});

	}

	export interface View {
		id?: string | null;
		links?: ViewLinks;

		/** Required */
		name: string;

		/** Required */
		properties: ViewProperties;
	}
	export interface ViewFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateViewFormGroup() {
		return new FormGroup<ViewFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ViewLinks {
		self?: string | null;
	}
	export interface ViewLinksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateViewLinksFormGroup() {
		return new FormGroup<ViewLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ViewProperties {
	}
	export interface ViewPropertiesFormProperties {
	}
	export function CreateViewPropertiesFormGroup() {
		return new FormGroup<ViewPropertiesFormProperties>({
		});

	}

	export interface Views {
		links?: ViewsLinks;
		views?: Array<View>;
	}
	export interface ViewsFormProperties {
	}
	export function CreateViewsFormGroup() {
		return new FormGroup<ViewsFormProperties>({
		});

	}

	export interface ViewsLinks {
		self?: string | null;
	}
	export interface ViewsLinksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateViewsLinksFormGroup() {
		return new FormGroup<ViewsLinksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WritePrecision { ms = 0, s = 1, us = 2, ns = 3 }

	export enum XYGeom { line = 0, step = 1, stacked = 2, bar = 3, monotoneX = 4 }

	export interface XYViewProperties {

		/**
		 * The viewport for a View's visualizations
		 * Required
		 */
		axes: Axes;

		/**
		 * Colors define color encoding of data into a visualization
		 * Required
		 */
		colors: Array<DashboardColor>;
		generateXAxisTicks?: Array<string>;
		generateYAxisTicks?: Array<string>;

		/** Required */
		geom: BandViewPropertiesGeom;
		hoverDimension?: BandViewPropertiesHoverDimension | null;
		legendColorizeRows?: boolean | null;
		legendHide?: boolean | null;
		legendOpacity?: number | null;
		legendOrientationThreshold?: number | null;

		/** Required */
		note: string;

		/** Required */
		position: HistogramViewPropertiesPosition;

		/** Required */
		queries: Array<DashboardQuery>;
		shadeBelow?: boolean | null;

		/** Required */
		shape: BandViewPropertiesShape;

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: boolean;

		/** StaticLegend represents the options specific to the static legend */
		staticLegend?: StaticLegend;
		timeFormat?: string | null;

		/** Required */
		type: XYViewPropertiesType;
		xColumn?: string | null;
		xTickStart?: number | null;
		xTickStep?: number | null;
		xTotalTicks?: number | null;
		yColumn?: string | null;
		yTickStart?: number | null;
		yTickStep?: number | null;
		yTotalTicks?: number | null;
	}
	export interface XYViewPropertiesFormProperties {

		/** Required */
		geom: FormControl<BandViewPropertiesGeom | null | undefined>,
		hoverDimension: FormControl<BandViewPropertiesHoverDimension | null | undefined>,
		legendColorizeRows: FormControl<boolean | null | undefined>,
		legendHide: FormControl<boolean | null | undefined>,
		legendOpacity: FormControl<number | null | undefined>,
		legendOrientationThreshold: FormControl<number | null | undefined>,

		/** Required */
		note: FormControl<string | null | undefined>,

		/** Required */
		position: FormControl<HistogramViewPropertiesPosition | null | undefined>,
		shadeBelow: FormControl<boolean | null | undefined>,

		/** Required */
		shape: FormControl<BandViewPropertiesShape | null | undefined>,

		/**
		 * If true, will display note when empty
		 * Required
		 */
		showNoteWhenEmpty: FormControl<boolean | null | undefined>,
		timeFormat: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<XYViewPropertiesType | null | undefined>,
		xColumn: FormControl<string | null | undefined>,
		xTickStart: FormControl<number | null | undefined>,
		xTickStep: FormControl<number | null | undefined>,
		xTotalTicks: FormControl<number | null | undefined>,
		yColumn: FormControl<string | null | undefined>,
		yTickStart: FormControl<number | null | undefined>,
		yTickStep: FormControl<number | null | undefined>,
		yTotalTicks: FormControl<number | null | undefined>,
	}
	export function CreateXYViewPropertiesFormGroup() {
		return new FormGroup<XYViewPropertiesFormProperties>({
			geom: new FormControl<BandViewPropertiesGeom | null | undefined>(undefined, [Validators.required]),
			hoverDimension: new FormControl<BandViewPropertiesHoverDimension | null | undefined>(undefined),
			legendColorizeRows: new FormControl<boolean | null | undefined>(undefined),
			legendHide: new FormControl<boolean | null | undefined>(undefined),
			legendOpacity: new FormControl<number | null | undefined>(undefined),
			legendOrientationThreshold: new FormControl<number | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			position: new FormControl<HistogramViewPropertiesPosition | null | undefined>(undefined, [Validators.required]),
			shadeBelow: new FormControl<boolean | null | undefined>(undefined),
			shape: new FormControl<BandViewPropertiesShape | null | undefined>(undefined, [Validators.required]),
			showNoteWhenEmpty: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			timeFormat: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<XYViewPropertiesType | null | undefined>(undefined, [Validators.required]),
			xColumn: new FormControl<string | null | undefined>(undefined),
			xTickStart: new FormControl<number | null | undefined>(undefined),
			xTickStep: new FormControl<number | null | undefined>(undefined),
			xTotalTicks: new FormControl<number | null | undefined>(undefined),
			yColumn: new FormControl<string | null | undefined>(undefined),
			yTickStart: new FormControl<number | null | undefined>(undefined),
			yTickStep: new FormControl<number | null | undefined>(undefined),
			yTotalTicks: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum XYViewPropertiesType { xy = 0 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List all top level routes
		 * Get 
		 * @return {void} 
		 */
		GetRoutes(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all authorizations
		 * Get authorizations
		 * @param {string} userID Only show authorizations that belong to a user ID.
		 * @param {string} user Only show authorizations that belong to a user name.
		 * @param {string} orgID Only show authorizations that belong to an organization ID.
		 * @param {string} org Only show authorizations that belong to a organization name.
		 * @return {Authorizations} A list of authorizations
		 */
		GetAuthorizations(userID: string | null | undefined, user: string | null | undefined, orgID: string | null | undefined, org: string | null | undefined): Observable<Authorizations> {
			return this.http.get<Authorizations>(this.baseUri + 'authorizations?userID=' + (userID == null ? '' : encodeURIComponent(userID)) + '&user=' + (user == null ? '' : encodeURIComponent(user)) + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)) + '&org=' + (org == null ? '' : encodeURIComponent(org)), {});
		}

		/**
		 * Create an authorization
		 * Post authorizations
		 * @param {AuthorizationPostRequest} requestBody Authorization to create
		 * @return {void} 
		 */
		PostAuthorizations(requestBody: AuthorizationPostRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'authorizations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an authorization
		 * Delete authorizations/{authID}
		 * @param {string} authID The ID of the authorization to delete.
		 * @return {void} 
		 */
		DeleteAuthorizationsID(authID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'authorizations/' + (authID == null ? '' : encodeURIComponent(authID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve an authorization
		 * Get authorizations/{authID}
		 * @param {string} authID The ID of the authorization to get.
		 * @return {Authorization} Authorization details
		 */
		GetAuthorizationsID(authID: string): Observable<Authorization> {
			return this.http.get<Authorization>(this.baseUri + 'authorizations/' + (authID == null ? '' : encodeURIComponent(authID)), {});
		}

		/**
		 * Update an authorization to be active or inactive
		 * Patch authorizations/{authID}
		 * @param {string} authID The ID of the authorization to update.
		 * @param {AuthorizationUpdateRequest} requestBody Authorization to update
		 * @return {Authorization} The active or inactie authorization
		 */
		PatchAuthorizationsID(authID: string, requestBody: AuthorizationUpdateRequest): Observable<Authorization> {
			return this.http.patch<Authorization>(this.baseUri + 'authorizations/' + (authID == null ? '' : encodeURIComponent(authID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all buckets
		 * Get buckets
		 * @param {string} after The last resource ID from which to seek from (but not including). This is to be used instead of `offset`.
		 * @param {string} org The name of the organization.
		 * @param {string} orgID The organization ID.
		 * @param {string} name Only returns buckets with a specific name.
		 * @param {string} id Only returns buckets with a specific ID.
		 * @return {Buckets} A list of buckets
		 */
		GetBuckets(offset: number | null | undefined, limit: number | null | undefined, after: string | null | undefined, org: string | null | undefined, orgID: string | null | undefined, name: string | null | undefined, id: string | null | undefined): Observable<Buckets> {
			return this.http.get<Buckets>(this.baseUri + 'buckets?offset=' + offset + '&limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&org=' + (org == null ? '' : encodeURIComponent(org)) + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Create a bucket
		 * Post buckets
		 * @param {PostBucketRequest} requestBody Bucket to create
		 * @return {void} 
		 */
		PostBuckets(requestBody: PostBucketRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'buckets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a bucket
		 * Delete buckets/{bucketID}
		 * @param {string} bucketID The ID of the bucket to delete.
		 * @return {void} 
		 */
		DeleteBucketsID(bucketID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a bucket
		 * Get buckets/{bucketID}
		 * @param {string} bucketID The bucket ID.
		 * @return {Bucket} Bucket details
		 */
		GetBucketsID(bucketID: string): Observable<Bucket> {
			return this.http.get<Bucket>(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)), {});
		}

		/**
		 * Update a bucket
		 * Patch buckets/{bucketID}
		 * @param {string} bucketID The bucket ID.
		 * @param {PatchBucketRequest} requestBody Bucket update to apply
		 * @return {Bucket} An updated bucket
		 */
		PatchBucketsID(bucketID: string, requestBody: PatchBucketRequest): Observable<Bucket> {
			return this.http.patch<Bucket>(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all labels for a bucket
		 * Get buckets/{bucketID}/labels
		 * @param {string} bucketID The bucket ID.
		 * @return {LabelsResponse} A list of all labels for a bucket
		 */
		GetBucketsIDLabels(bucketID: string): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)) + '/labels', {});
		}

		/**
		 * Add a label to a bucket
		 * Post buckets/{bucketID}/labels
		 * @param {string} bucketID The bucket ID.
		 * @param {LabelMapping} requestBody Label to add
		 * @return {void} 
		 */
		PostBucketsIDLabels(bucketID: string, requestBody: LabelMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a label from a bucket
		 * Delete buckets/{bucketID}/labels/{labelID}
		 * @param {string} bucketID The bucket ID.
		 * @param {string} labelID The ID of the label to delete.
		 * @return {void} 
		 */
		DeleteBucketsIDLabelsID(bucketID: string, labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)) + '/labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all users with member privileges for a bucket
		 * Get buckets/{bucketID}/members
		 * @param {string} bucketID The bucket ID.
		 * @return {ResourceMembers} A list of bucket members
		 */
		GetBucketsIDMembers(bucketID: string): Observable<ResourceMembers> {
			return this.http.get<ResourceMembers>(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)) + '/members', {});
		}

		/**
		 * Add a member to a bucket
		 * Post buckets/{bucketID}/members
		 * @param {string} bucketID The bucket ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as member
		 * @return {void} 
		 */
		PostBucketsIDMembers(bucketID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a member from a bucket
		 * Delete buckets/{bucketID}/members/{userID}
		 * @param {string} userID The ID of the member to remove.
		 * @param {string} bucketID The bucket ID.
		 * @return {void} 
		 */
		DeleteBucketsIDMembersID(userID: string, bucketID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)) + '/members/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all owners of a bucket
		 * Get buckets/{bucketID}/owners
		 * @param {string} bucketID The bucket ID.
		 * @return {ResourceOwners} A list of bucket owners
		 */
		GetBucketsIDOwners(bucketID: string): Observable<ResourceOwners> {
			return this.http.get<ResourceOwners>(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)) + '/owners', {});
		}

		/**
		 * Add an owner to a bucket
		 * Post buckets/{bucketID}/owners
		 * @param {string} bucketID The bucket ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as owner
		 * @return {void} 
		 */
		PostBucketsIDOwners(bucketID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)) + '/owners', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an owner from a bucket
		 * Delete buckets/{bucketID}/owners/{userID}
		 * @param {string} userID The ID of the owner to remove.
		 * @param {string} bucketID The bucket ID.
		 * @return {void} 
		 */
		DeleteBucketsIDOwnersID(userID: string, bucketID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'buckets/' + (bucketID == null ? '' : encodeURIComponent(bucketID)) + '/owners/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all checks
		 * Get checks
		 * @param {string} orgID Only show checks that belong to a specific organization ID.
		 * @return {Checks} A list of checks
		 */
		GetChecks(offset: number | null | undefined, limit: number | null | undefined, orgID: string): Observable<Checks> {
			return this.http.get<Checks>(this.baseUri + 'checks?offset=' + offset + '&limit=' + limit + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), {});
		}

		/**
		 * Add new check
		 * Post checks
		 * @param {PostCheck} requestBody Check to create
		 * @return {void} 
		 */
		CreateCheck(requestBody: PostCheck): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'checks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a check
		 * Delete checks/{checkID}
		 * @param {string} checkID The check ID.
		 * @return {void} 
		 */
		DeleteChecksID(checkID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'checks/' + (checkID == null ? '' : encodeURIComponent(checkID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a check
		 * Get checks/{checkID}
		 * @param {string} checkID The check ID.
		 * @return {Check} The check requested
		 */
		GetChecksID(checkID: string): Observable<Check> {
			return this.http.get<Check>(this.baseUri + 'checks/' + (checkID == null ? '' : encodeURIComponent(checkID)), {});
		}

		/**
		 * Update a check
		 * Patch checks/{checkID}
		 * @param {string} checkID The check ID.
		 * @param {CheckPatch} requestBody Check update to apply
		 * @return {Check} An updated check
		 */
		PatchChecksID(checkID: string, requestBody: CheckPatch): Observable<Check> {
			return this.http.patch<Check>(this.baseUri + 'checks/' + (checkID == null ? '' : encodeURIComponent(checkID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a check
		 * Put checks/{checkID}
		 * @param {string} checkID The check ID.
		 * @param {Check} requestBody Check update to apply
		 * @return {Check} An updated check
		 */
		PutChecksID(checkID: string, requestBody: Check): Observable<Check> {
			return this.http.put<Check>(this.baseUri + 'checks/' + (checkID == null ? '' : encodeURIComponent(checkID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all labels for a check
		 * Get checks/{checkID}/labels
		 * @param {string} checkID The check ID.
		 * @return {LabelsResponse} A list of all labels for a check
		 */
		GetChecksIDLabels(checkID: string): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'checks/' + (checkID == null ? '' : encodeURIComponent(checkID)) + '/labels', {});
		}

		/**
		 * Add a label to a check
		 * Post checks/{checkID}/labels
		 * @param {string} checkID The check ID.
		 * @param {LabelMapping} requestBody Label to add
		 * @return {void} 
		 */
		PostChecksIDLabels(checkID: string, requestBody: LabelMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'checks/' + (checkID == null ? '' : encodeURIComponent(checkID)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete label from a check
		 * Delete checks/{checkID}/labels/{labelID}
		 * @param {string} checkID The check ID.
		 * @param {string} labelID The ID of the label to delete.
		 * @return {void} 
		 */
		DeleteChecksIDLabelsID(checkID: string, labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'checks/' + (checkID == null ? '' : encodeURIComponent(checkID)) + '/labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a check query
		 * Get checks/{checkID}/query
		 * @param {string} checkID The check ID.
		 * @return {FluxResponse} The check query requested
		 */
		GetChecksIDQuery(checkID: string): Observable<FluxResponse> {
			return this.http.get<FluxResponse>(this.baseUri + 'checks/' + (checkID == null ? '' : encodeURIComponent(checkID)) + '/query', {});
		}

		/**
		 * List all dashboards
		 * Get dashboards
		 * @param {string} owner A user identifier. Returns only dashboards where this user has the `owner` role.
		 * @param {GetDashboardsSortBy} sortBy The column to sort by.
		 * @param {Array<string>} id A list of dashboard identifiers. Returns only the listed dashboards. If both `id` and `owner` are specified, only `id` is used.
		 * @param {string} orgID The identifier of the organization.
		 * @param {string} org The name of the organization.
		 * @return {Dashboards} All dashboards
		 */
		GetDashboards(offset: number | null | undefined, limit: number | null | undefined, descending: boolean | null | undefined, owner: string | null | undefined, sortBy: GetDashboardsSortBy | null | undefined, id: Array<string> | null | undefined, orgID: string | null | undefined, org: string | null | undefined): Observable<Dashboards> {
			return this.http.get<Dashboards>(this.baseUri + 'dashboards?offset=' + offset + '&limit=' + limit + '&descending=' + descending + '&owner=' + (owner == null ? '' : encodeURIComponent(owner)) + '&sortBy=' + sortBy + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)) + '&org=' + (org == null ? '' : encodeURIComponent(org)), {});
		}

		/**
		 * Create a dashboard
		 * Post dashboards
		 * @param {CreateDashboardRequest} requestBody Dashboard to create
		 * @return {void} 
		 */
		PostDashboards(requestBody: CreateDashboardRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dashboards', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a dashboard
		 * Delete dashboards/{dashboardID}
		 * @param {string} dashboardID The ID of the dashboard to update.
		 * @return {void} 
		 */
		DeleteDashboardsID(dashboardID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a Dashboard
		 * Get dashboards/{dashboardID}
		 * @param {string} dashboardID The ID of the dashboard to update.
		 * @param {GetDashboardsIDInclude} include Includes the cell view properties in the response if set to `properties`
		 * @return {Dashboard} Retrieve a single dashboard
		 */
		GetDashboardsID(dashboardID: string, include: GetDashboardsIDInclude | null | undefined): Observable<Dashboard> {
			return this.http.get<Dashboard>(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '&include=' + include, {});
		}

		/**
		 * Update a dashboard
		 * Patch dashboards/{dashboardID}
		 * @param {string} dashboardID The ID of the dashboard to update.
		 * @param {PatchDashboardsIDPatchBody} requestBody Patching of a dashboard
		 * @return {Dashboard} Updated dashboard
		 */
		PatchDashboardsID(dashboardID: string, requestBody: PatchDashboardsIDPatchBody): Observable<Dashboard> {
			return this.http.patch<Dashboard>(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a dashboard cell
		 * Post dashboards/{dashboardID}/cells
		 * @param {string} dashboardID The ID of the dashboard to update.
		 * @param {CreateCell} requestBody Cell that will be added
		 * @return {void} 
		 */
		PostDashboardsIDCells(dashboardID: string, requestBody: CreateCell): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/cells', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace cells in a dashboard
		 * Replaces all cells in a dashboard. This is used primarily to update the positional information of all cells.
		 * Put dashboards/{dashboardID}/cells
		 * @param {string} dashboardID The ID of the dashboard to update.
		 * @return {void} 
		 */
		PutDashboardsIDCells(dashboardID: string, requestBody: Array<Cell>): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/cells', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a dashboard cell
		 * Delete dashboards/{dashboardID}/cells/{cellID}
		 * @param {string} dashboardID The ID of the dashboard to delete.
		 * @param {string} cellID The ID of the cell to delete.
		 * @return {void} 
		 */
		DeleteDashboardsIDCellsID(dashboardID: string, cellID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/cells/' + (cellID == null ? '' : encodeURIComponent(cellID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the non-positional information related to a cell
		 * Updates the non positional information related to a cell. Updates to a single cell's positional data could cause grid conflicts.
		 * Patch dashboards/{dashboardID}/cells/{cellID}
		 * @param {string} dashboardID The ID of the dashboard to update.
		 * @param {string} cellID The ID of the cell to update.
		 * @return {Cell} Updated dashboard cell
		 */
		PatchDashboardsIDCellsID(dashboardID: string, cellID: string, requestBody: CellUpdate): Observable<Cell> {
			return this.http.patch<Cell>(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/cells/' + (cellID == null ? '' : encodeURIComponent(cellID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the view for a cell
		 * Get dashboards/{dashboardID}/cells/{cellID}/view
		 * @param {string} dashboardID The dashboard ID.
		 * @param {string} cellID The cell ID.
		 * @return {View} A dashboard cells view
		 */
		GetDashboardsIDCellsIDView(dashboardID: string, cellID: string): Observable<View> {
			return this.http.get<View>(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/cells/' + (cellID == null ? '' : encodeURIComponent(cellID)) + '/view', {});
		}

		/**
		 * Update the view for a cell
		 * Patch dashboards/{dashboardID}/cells/{cellID}/view
		 * @param {string} dashboardID The ID of the dashboard to update.
		 * @param {string} cellID The ID of the cell to update.
		 * @return {View} Updated cell view
		 */
		PatchDashboardsIDCellsIDView(dashboardID: string, cellID: string, requestBody: View): Observable<View> {
			return this.http.patch<View>(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/cells/' + (cellID == null ? '' : encodeURIComponent(cellID)) + '/view', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all labels for a dashboard
		 * Get dashboards/{dashboardID}/labels
		 * @param {string} dashboardID The dashboard ID.
		 * @return {LabelsResponse} A list of all labels for a dashboard
		 */
		GetDashboardsIDLabels(dashboardID: string): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/labels', {});
		}

		/**
		 * Add a label to a dashboard
		 * Post dashboards/{dashboardID}/labels
		 * @param {string} dashboardID The dashboard ID.
		 * @param {LabelMapping} requestBody Label to add
		 * @return {void} 
		 */
		PostDashboardsIDLabels(dashboardID: string, requestBody: LabelMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a label from a dashboard
		 * Delete dashboards/{dashboardID}/labels/{labelID}
		 * @param {string} dashboardID The dashboard ID.
		 * @param {string} labelID The ID of the label to delete.
		 * @return {void} 
		 */
		DeleteDashboardsIDLabelsID(dashboardID: string, labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all dashboard members
		 * Get dashboards/{dashboardID}/members
		 * @param {string} dashboardID The dashboard ID.
		 * @return {ResourceMembers} A list of users who have member privileges for a dashboard
		 */
		GetDashboardsIDMembers(dashboardID: string): Observable<ResourceMembers> {
			return this.http.get<ResourceMembers>(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/members', {});
		}

		/**
		 * Add a member to a dashboard
		 * Post dashboards/{dashboardID}/members
		 * @param {string} dashboardID The dashboard ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as member
		 * @return {void} 
		 */
		PostDashboardsIDMembers(dashboardID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a member from a dashboard
		 * Delete dashboards/{dashboardID}/members/{userID}
		 * @param {string} userID The ID of the member to remove.
		 * @param {string} dashboardID The dashboard ID.
		 * @return {void} 
		 */
		DeleteDashboardsIDMembersID(userID: string, dashboardID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/members/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all dashboard owners
		 * Get dashboards/{dashboardID}/owners
		 * @param {string} dashboardID The dashboard ID.
		 * @return {ResourceOwners} A list of users who have owner privileges for a dashboard
		 */
		GetDashboardsIDOwners(dashboardID: string): Observable<ResourceOwners> {
			return this.http.get<ResourceOwners>(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/owners', {});
		}

		/**
		 * Add an owner to a dashboard
		 * Post dashboards/{dashboardID}/owners
		 * @param {string} dashboardID The dashboard ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as owner
		 * @return {void} 
		 */
		PostDashboardsIDOwners(dashboardID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/owners', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an owner from a dashboard
		 * Delete dashboards/{dashboardID}/owners/{userID}
		 * @param {string} userID The ID of the owner to remove.
		 * @param {string} dashboardID The dashboard ID.
		 * @return {void} 
		 */
		DeleteDashboardsIDOwnersID(userID: string, dashboardID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dashboards/' + (dashboardID == null ? '' : encodeURIComponent(dashboardID)) + '/owners/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all database retention policy mappings
		 * Get dbrps
		 * @param {string} orgID Specifies the organization ID to filter on
		 * @param {string} id Specifies the mapping ID to filter on
		 * @param {string} bucketID Specifies the bucket ID to filter on
		 * @param {boolean} _default Specifies filtering on default
		 * @param {string} db Specifies the database to filter on
		 * @param {string} rp Specifies the retention policy to filter on
		 * @return {DBRPs} A list of all database retention policy mappings
		 */
		GetDBRPs(orgID: string, id: string | null | undefined, bucketID: string | null | undefined, _default: boolean | null | undefined, db: string | null | undefined, rp: string | null | undefined): Observable<DBRPs> {
			return this.http.get<DBRPs>(this.baseUri + 'dbrps?orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)) + '&id=' + (id == null ? '' : encodeURIComponent(id)) + '&bucketID=' + (bucketID == null ? '' : encodeURIComponent(bucketID)) + '&_default=' + _default + '&db=' + (db == null ? '' : encodeURIComponent(db)) + '&rp=' + (rp == null ? '' : encodeURIComponent(rp)), {});
		}

		/**
		 * Add a database retention policy mapping
		 * Post dbrps
		 * @param {DBRP} requestBody The database retention policy mapping to add
		 * @return {void} 
		 */
		PostDBRP(requestBody: DBRP): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'dbrps', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a database retention policy
		 * Delete dbrps/{dbrpID}
		 * @param {string} orgID Specifies the organization ID of the mapping
		 * @param {string} dbrpID The database retention policy mapping
		 * @return {void} 
		 */
		DeleteDBRPID(orgID: string, dbrpID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'dbrps/' + (dbrpID == null ? '' : encodeURIComponent(dbrpID)) + '?orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a database retention policy mapping
		 * Get dbrps/{dbrpID}
		 * @param {string} orgID Specifies the organization ID of the mapping
		 * @param {string} dbrpID The database retention policy mapping ID
		 * @return {DBRP} The database retention policy requested
		 */
		GetDBRPsID(orgID: string, dbrpID: string): Observable<DBRP> {
			return this.http.get<DBRP>(this.baseUri + 'dbrps/' + (dbrpID == null ? '' : encodeURIComponent(dbrpID)) + '?orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), {});
		}

		/**
		 * Update a database retention policy mapping
		 * Patch dbrps/{dbrpID}
		 * @param {string} orgID Specifies the organization ID of the mapping
		 * @param {string} dbrpID The database retention policy mapping.
		 * @param {DBRPUpdate} requestBody Database retention policy update to apply
		 * @return {DBRP} An updated mapping
		 */
		PatchDBRPID(orgID: string, dbrpID: string, requestBody: DBRPUpdate): Observable<DBRP> {
			return this.http.patch<DBRP>(this.baseUri + 'dbrps/' + (dbrpID == null ? '' : encodeURIComponent(dbrpID)) + '?orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete time series data from InfluxDB
		 * Post delete
		 * @param {string} org Specifies the organization to delete data from.
		 * @param {string} bucket Specifies the bucket to delete data from.
		 * @param {string} orgID Specifies the organization ID of the resource.
		 * @param {string} bucketID Specifies the bucket ID to delete data from.
		 * @param {DeletePredicateRequest} requestBody Predicate delete request
		 * @return {void} 
		 */
		PostDelete(org: string | null | undefined, bucket: string | null | undefined, orgID: string | null | undefined, bucketID: string | null | undefined, requestBody: DeletePredicateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'delete?org=' + (org == null ? '' : encodeURIComponent(org)) + '&bucket=' + (bucket == null ? '' : encodeURIComponent(bucket)) + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)) + '&bucketID=' + (bucketID == null ? '' : encodeURIComponent(bucketID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all templates
		 * Get documents/templates
		 * @param {string} org Specifies the name of the organization of the template.
		 * @param {string} orgID Specifies the organization ID of the template.
		 * @return {Documents} A list of template documents
		 */
		GetDocumentsTemplates(org: string | null | undefined, orgID: string | null | undefined): Observable<Documents> {
			return this.http.get<Documents>(this.baseUri + 'documents/templates?org=' + (org == null ? '' : encodeURIComponent(org)) + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), {});
		}

		/**
		 * Create a template
		 * Post documents/templates
		 * @param {DocumentCreate} requestBody Template that will be created
		 * @return {void} 
		 */
		PostDocumentsTemplates(requestBody: DocumentCreate): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'documents/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a template
		 * Delete documents/templates/{templateID}
		 * @param {string} templateID The template ID.
		 * @return {void} 
		 */
		DeleteDocumentsTemplatesID(templateID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'documents/templates/' + (templateID == null ? '' : encodeURIComponent(templateID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a template
		 * Get documents/templates/{templateID}
		 * @param {string} templateID The template ID.
		 * @return {Document} The template requested
		 */
		GetDocumentsTemplatesID(templateID: string): Observable<Document> {
			return this.http.get<Document>(this.baseUri + 'documents/templates/' + (templateID == null ? '' : encodeURIComponent(templateID)), {});
		}

		/**
		 * Update a template
		 * Put documents/templates/{templateID}
		 * @param {string} templateID The template ID.
		 * @param {DocumentUpdate} requestBody Template that will be updated
		 * @return {Document} The newly updated template
		 */
		PutDocumentsTemplatesID(templateID: string, requestBody: DocumentUpdate): Observable<Document> {
			return this.http.put<Document>(this.baseUri + 'documents/templates/' + (templateID == null ? '' : encodeURIComponent(templateID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all labels for a template
		 * Get documents/templates/{templateID}/labels
		 * @param {string} templateID The template ID.
		 * @return {LabelsResponse} A list of all labels for a template
		 */
		GetDocumentsTemplatesIDLabels(templateID: string): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'documents/templates/' + (templateID == null ? '' : encodeURIComponent(templateID)) + '/labels', {});
		}

		/**
		 * Add a label to a template
		 * Post documents/templates/{templateID}/labels
		 * @param {string} templateID The template ID.
		 * @param {LabelMapping} requestBody Label to add
		 * @return {void} 
		 */
		PostDocumentsTemplatesIDLabels(templateID: string, requestBody: LabelMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'documents/templates/' + (templateID == null ? '' : encodeURIComponent(templateID)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a label from a template
		 * Delete documents/templates/{templateID}/labels/{labelID}
		 * @param {string} templateID The template ID.
		 * @param {string} labelID The label ID.
		 * @return {void} 
		 */
		DeleteDocumentsTemplatesIDLabelsID(templateID: string, labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'documents/templates/' + (templateID == null ? '' : encodeURIComponent(templateID)) + '/labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Return the feature flags for the currently authenticated user
		 * Get flags
		 * @return {Flags} Feature flags for the currently authenticated user
		 */
		GetFlags(): Observable<Flags> {
			return this.http.get<Flags>(this.baseUri + 'flags', {});
		}

		/**
		 * Get the health of an instance
		 * Get health
		 * @return {HealthCheck} The instance is healthy
		 */
		GetHealth(): Observable<HealthCheck> {
			return this.http.get<HealthCheck>(this.baseUri + 'health', {});
		}

		/**
		 * List all labels
		 * Get labels
		 * @param {string} orgID The organization ID.
		 * @return {LabelsResponse} A list of labels
		 */
		GetLabels(orgID: string | null | undefined): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'labels?orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), {});
		}

		/**
		 * Create a label
		 * Post labels
		 * @param {LabelCreateRequest} requestBody Label to create
		 * @return {void} 
		 */
		PostLabels(requestBody: LabelCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a label
		 * Delete labels/{labelID}
		 * @param {string} labelID The ID of the label to delete.
		 * @return {void} 
		 */
		DeleteLabelsID(labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a label
		 * Get labels/{labelID}
		 * @param {string} labelID The ID of the label to update.
		 * @return {LabelResponse} A label
		 */
		GetLabelsID(labelID: string): Observable<LabelResponse> {
			return this.http.get<LabelResponse>(this.baseUri + 'labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), {});
		}

		/**
		 * Update a label
		 * Patch labels/{labelID}
		 * @param {string} labelID The ID of the label to update.
		 * @param {LabelUpdate} requestBody Label update
		 * @return {LabelResponse} Updated label
		 */
		PatchLabelsID(labelID: string, requestBody: LabelUpdate): Observable<LabelResponse> {
			return this.http.patch<LabelResponse>(this.baseUri + 'labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve the currently authenticated user
		 * Get me
		 * @return {UserResponse} The currently authenticated user.
		 */
		GetMe(): Observable<UserResponse> {
			return this.http.get<UserResponse>(this.baseUri + 'me', {});
		}

		/**
		 * Update a password
		 * Put me/password
		 * @param {PasswordResetBody} requestBody New password
		 * @return {void} 
		 */
		PutMePassword(requestBody: PasswordResetBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'me/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all notification endpoints
		 * Get notificationEndpoints
		 * @param {string} orgID Only show notification endpoints that belong to specific organization ID.
		 * @return {NotificationEndpoints} A list of notification endpoints
		 */
		GetNotificationEndpoints(offset: number | null | undefined, limit: number | null | undefined, orgID: string): Observable<NotificationEndpoints> {
			return this.http.get<NotificationEndpoints>(this.baseUri + 'notificationEndpoints?offset=' + offset + '&limit=' + limit + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), {});
		}

		/**
		 * Add a notification endpoint
		 * Post notificationEndpoints
		 * @param {PostNotificationEndpoint} requestBody Notification endpoint to create
		 * @return {void} 
		 */
		CreateNotificationEndpoint(requestBody: PostNotificationEndpoint): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'notificationEndpoints', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a notification endpoint
		 * Delete notificationEndpoints/{endpointID}
		 * @param {string} endpointID The notification endpoint ID.
		 * @return {void} 
		 */
		DeleteNotificationEndpointsID(endpointID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'notificationEndpoints/' + (endpointID == null ? '' : encodeURIComponent(endpointID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a notification endpoint
		 * Get notificationEndpoints/{endpointID}
		 * @param {string} endpointID The notification endpoint ID.
		 * @return {NotificationEndpoint} The notification endpoint requested
		 */
		GetNotificationEndpointsID(endpointID: string): Observable<NotificationEndpoint> {
			return this.http.get<NotificationEndpoint>(this.baseUri + 'notificationEndpoints/' + (endpointID == null ? '' : encodeURIComponent(endpointID)), {});
		}

		/**
		 * Update a notification endpoint
		 * Patch notificationEndpoints/{endpointID}
		 * @param {string} endpointID The notification endpoint ID.
		 * @param {NotificationEndpointUpdate} requestBody Check update to apply
		 * @return {NotificationEndpoint} An updated notification endpoint
		 */
		PatchNotificationEndpointsID(endpointID: string, requestBody: NotificationEndpointUpdate): Observable<NotificationEndpoint> {
			return this.http.patch<NotificationEndpoint>(this.baseUri + 'notificationEndpoints/' + (endpointID == null ? '' : encodeURIComponent(endpointID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a notification endpoint
		 * Put notificationEndpoints/{endpointID}
		 * @param {string} endpointID The notification endpoint ID.
		 * @param {NotificationEndpoint} requestBody A new notification endpoint to replace the existing endpoint with
		 * @return {NotificationEndpoint} An updated notification endpoint
		 */
		PutNotificationEndpointsID(endpointID: string, requestBody: NotificationEndpoint): Observable<NotificationEndpoint> {
			return this.http.put<NotificationEndpoint>(this.baseUri + 'notificationEndpoints/' + (endpointID == null ? '' : encodeURIComponent(endpointID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all labels for a notification endpoint
		 * Get notificationEndpoints/{endpointID}/labels
		 * @param {string} endpointID The notification endpoint ID.
		 * @return {LabelsResponse} A list of all labels for a notification endpoint
		 */
		GetNotificationEndpointsIDLabels(endpointID: string): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'notificationEndpoints/' + (endpointID == null ? '' : encodeURIComponent(endpointID)) + '/labels', {});
		}

		/**
		 * Add a label to a notification endpoint
		 * Post notificationEndpoints/{endpointID}/labels
		 * @param {string} endpointID The notification endpoint ID.
		 * @param {LabelMapping} requestBody Label to add
		 * @return {void} 
		 */
		PostNotificationEndpointIDLabels(endpointID: string, requestBody: LabelMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'notificationEndpoints/' + (endpointID == null ? '' : encodeURIComponent(endpointID)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a label from a notification endpoint
		 * Delete notificationEndpoints/{endpointID}/labels/{labelID}
		 * @param {string} endpointID The notification endpoint ID.
		 * @param {string} labelID The ID of the label to delete.
		 * @return {void} 
		 */
		DeleteNotificationEndpointsIDLabelsID(endpointID: string, labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'notificationEndpoints/' + (endpointID == null ? '' : encodeURIComponent(endpointID)) + '/labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all notification rules
		 * Get notificationRules
		 * @param {string} orgID Only show notification rules that belong to a specific organization ID.
		 * @param {string} checkID Only show notifications that belong to the specific check ID.
		 * @param {string} tag Only return notification rules that "would match" statuses which contain the tag key value pairs provided.
		 * @return {NotificationRules} A list of notification rules
		 */
		GetNotificationRules(offset: number | null | undefined, limit: number | null | undefined, orgID: string, checkID: string | null | undefined, tag: string | null | undefined): Observable<NotificationRules> {
			return this.http.get<NotificationRules>(this.baseUri + 'notificationRules?offset=' + offset + '&limit=' + limit + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)) + '&checkID=' + (checkID == null ? '' : encodeURIComponent(checkID)) + '&tag=' + (tag == null ? '' : encodeURIComponent(tag)), {});
		}

		/**
		 * Add a notification rule
		 * Post notificationRules
		 * @param {PostNotificationRule} requestBody Notification rule to create
		 * @return {void} 
		 */
		CreateNotificationRule(requestBody: PostNotificationRule): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'notificationRules', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a notification rule
		 * Delete notificationRules/{ruleID}
		 * @param {string} ruleID The notification rule ID.
		 * @return {void} 
		 */
		DeleteNotificationRulesID(ruleID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'notificationRules/' + (ruleID == null ? '' : encodeURIComponent(ruleID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a notification rule
		 * Get notificationRules/{ruleID}
		 * @param {string} ruleID The notification rule ID.
		 * @return {NotificationRule} The notification rule requested
		 */
		GetNotificationRulesID(ruleID: string): Observable<NotificationRule> {
			return this.http.get<NotificationRule>(this.baseUri + 'notificationRules/' + (ruleID == null ? '' : encodeURIComponent(ruleID)), {});
		}

		/**
		 * Update a notification rule
		 * Patch notificationRules/{ruleID}
		 * @param {string} ruleID The notification rule ID.
		 * @param {NotificationRuleUpdate} requestBody Notification rule update to apply
		 * @return {NotificationRule} An updated notification rule
		 */
		PatchNotificationRulesID(ruleID: string, requestBody: NotificationRuleUpdate): Observable<NotificationRule> {
			return this.http.patch<NotificationRule>(this.baseUri + 'notificationRules/' + (ruleID == null ? '' : encodeURIComponent(ruleID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a notification rule
		 * Put notificationRules/{ruleID}
		 * @param {string} ruleID The notification rule ID.
		 * @param {NotificationRule} requestBody Notification rule update to apply
		 * @return {NotificationRule} An updated notification rule
		 */
		PutNotificationRulesID(ruleID: string, requestBody: NotificationRule): Observable<NotificationRule> {
			return this.http.put<NotificationRule>(this.baseUri + 'notificationRules/' + (ruleID == null ? '' : encodeURIComponent(ruleID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all labels for a notification rule
		 * Get notificationRules/{ruleID}/labels
		 * @param {string} ruleID The notification rule ID.
		 * @return {LabelsResponse} A list of all labels for a notification rule
		 */
		GetNotificationRulesIDLabels(ruleID: string): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'notificationRules/' + (ruleID == null ? '' : encodeURIComponent(ruleID)) + '/labels', {});
		}

		/**
		 * Add a label to a notification rule
		 * Post notificationRules/{ruleID}/labels
		 * @param {string} ruleID The notification rule ID.
		 * @param {LabelMapping} requestBody Label to add
		 * @return {void} 
		 */
		PostNotificationRuleIDLabels(ruleID: string, requestBody: LabelMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'notificationRules/' + (ruleID == null ? '' : encodeURIComponent(ruleID)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete label from a notification rule
		 * Delete notificationRules/{ruleID}/labels/{labelID}
		 * @param {string} ruleID The notification rule ID.
		 * @param {string} labelID The ID of the label to delete.
		 * @return {void} 
		 */
		DeleteNotificationRulesIDLabelsID(ruleID: string, labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'notificationRules/' + (ruleID == null ? '' : encodeURIComponent(ruleID)) + '/labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a notification rule query
		 * Get notificationRules/{ruleID}/query
		 * @param {string} ruleID The notification rule ID.
		 * @return {FluxResponse} The notification rule query requested
		 */
		GetNotificationRulesIDQuery(ruleID: string): Observable<FluxResponse> {
			return this.http.get<FluxResponse>(this.baseUri + 'notificationRules/' + (ruleID == null ? '' : encodeURIComponent(ruleID)) + '/query', {});
		}

		/**
		 * List all organizations
		 * Get orgs
		 * @param {string} org Filter organizations to a specific organization name.
		 * @param {string} orgID Filter organizations to a specific organization ID.
		 * @param {string} userID Filter organizations to a specific user ID.
		 * @return {Organizations} A list of organizations
		 */
		GetOrgs(offset: number | null | undefined, limit: number | null | undefined, descending: boolean | null | undefined, org: string | null | undefined, orgID: string | null | undefined, userID: string | null | undefined): Observable<Organizations> {
			return this.http.get<Organizations>(this.baseUri + 'orgs?offset=' + offset + '&limit=' + limit + '&descending=' + descending + '&org=' + (org == null ? '' : encodeURIComponent(org)) + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)) + '&userID=' + (userID == null ? '' : encodeURIComponent(userID)), {});
		}

		/**
		 * Create an organization
		 * Post orgs
		 * @param {PostOrganizationRequest} requestBody Organization to create
		 * @return {void} 
		 */
		PostOrgs(requestBody: PostOrganizationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orgs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete an organization
		 * Delete orgs/{orgID}
		 * @param {string} orgID The ID of the organization to delete.
		 * @return {void} 
		 */
		DeleteOrgsID(orgID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve an organization
		 * Get orgs/{orgID}
		 * @param {string} orgID The ID of the organization to get.
		 * @return {Organization} Organization details
		 */
		GetOrgsID(orgID: string): Observable<Organization> {
			return this.http.get<Organization>(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)), {});
		}

		/**
		 * Update an organization
		 * Patch orgs/{orgID}
		 * @param {string} orgID The ID of the organization to get.
		 * @param {PatchOrganizationRequest} requestBody Organization update to apply
		 * @return {Organization} Organization updated
		 */
		PatchOrgsID(orgID: string, requestBody: PatchOrganizationRequest): Observable<Organization> {
			return this.http.patch<Organization>(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all members of an organization
		 * Get orgs/{orgID}/members
		 * @param {string} orgID The organization ID.
		 * @return {ResourceMembers} A list of organization members
		 */
		GetOrgsIDMembers(orgID: string): Observable<ResourceMembers> {
			return this.http.get<ResourceMembers>(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)) + '/members', {});
		}

		/**
		 * Add a member to an organization
		 * Post orgs/{orgID}/members
		 * @param {string} orgID The organization ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as member
		 * @return {void} 
		 */
		PostOrgsIDMembers(orgID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a member from an organization
		 * Delete orgs/{orgID}/members/{userID}
		 * @param {string} userID The ID of the member to remove.
		 * @param {string} orgID The organization ID.
		 * @return {void} 
		 */
		DeleteOrgsIDMembersID(userID: string, orgID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)) + '/members/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all owners of an organization
		 * Get orgs/{orgID}/owners
		 * @param {string} orgID The organization ID.
		 * @return {ResourceOwners} A list of organization owners
		 */
		GetOrgsIDOwners(orgID: string): Observable<ResourceOwners> {
			return this.http.get<ResourceOwners>(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)) + '/owners', {});
		}

		/**
		 * Add an owner to an organization
		 * Post orgs/{orgID}/owners
		 * @param {string} orgID The organization ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as owner
		 * @return {void} 
		 */
		PostOrgsIDOwners(orgID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)) + '/owners', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an owner from an organization
		 * Delete orgs/{orgID}/owners/{userID}
		 * @param {string} userID The ID of the owner to remove.
		 * @param {string} orgID The organization ID.
		 * @return {void} 
		 */
		DeleteOrgsIDOwnersID(userID: string, orgID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)) + '/owners/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all secret keys for an organization
		 * Get orgs/{orgID}/secrets
		 * @param {string} orgID The organization ID.
		 * @return {SecretKeysResponse} A list of all secret keys
		 */
		GetOrgsIDSecrets(orgID: string): Observable<SecretKeysResponse> {
			return this.http.get<SecretKeysResponse>(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)) + '/secrets', {});
		}

		/**
		 * Update secrets in an organization
		 * Patch orgs/{orgID}/secrets
		 * @param {string} orgID The organization ID.
		 * @param {Secrets} requestBody Secret key value pairs to update/add
		 * @return {void} 
		 */
		PatchOrgsIDSecrets(orgID: string, requestBody: Secrets): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)) + '/secrets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete secrets from an organization
		 * Post orgs/{orgID}/secrets/delete
		 * @param {string} orgID The organization ID.
		 * @param {SecretKeys} requestBody Secret key to delete
		 * @return {void} 
		 */
		PostOrgsIDSecrets(orgID: string, requestBody: SecretKeys): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'orgs/' + (orgID == null ? '' : encodeURIComponent(orgID)) + '/secrets/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Query InfluxDB
		 * Post query
		 * @param {string} org Specifies the name of the organization executing the query. Takes either the ID or Name interchangeably. If both `orgID` and `org` are specified, `org` takes precedence.
		 * @param {string} orgID Specifies the ID of the organization executing the query. If both `orgID` and `org` are specified, `org` takes precedence.
		 * @param {Query} requestBody Flux query or specification to execute
		 * @return {void} Query results
		 */
		PostQuery(org: string | null | undefined, orgID: string | null | undefined, requestBody: Query): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'query?org=' + (org == null ? '' : encodeURIComponent(org)) + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Analyze an InfluxQL or Flux query
		 * Post query/analyze
		 * @param {Query} requestBody Flux or InfluxQL query to analyze
		 * @return {AnalyzeQueryResponse} Query analyze results. Errors will be empty if the query is valid.
		 */
		PostQueryAnalyze(requestBody: Query): Observable<AnalyzeQueryResponse> {
			return this.http.post<AnalyzeQueryResponse>(this.baseUri + 'query/analyze', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Generate an Abstract Syntax Tree (AST) from a query
		 * Analyzes flux query and generates a query specification.
		 * Post query/ast
		 * @param {LanguageRequest} requestBody Analyzed Flux query to generate abstract syntax tree.
		 * @return {ASTResponse} Abstract syntax tree of the flux query.
		 */
		PostQueryAst(requestBody: LanguageRequest): Observable<ASTResponse> {
			return this.http.post<ASTResponse>(this.baseUri + 'query/ast', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieve query suggestions
		 * Get query/suggestions
		 * @return {FluxSuggestions} Suggestions for next functions in call chain
		 */
		GetQuerySuggestions(): Observable<FluxSuggestions> {
			return this.http.get<FluxSuggestions>(this.baseUri + 'query/suggestions', {});
		}

		/**
		 * Retrieve query suggestions for a branching suggestion
		 * Get query/suggestions/{name}
		 * @param {string} name The name of the branching suggestion.
		 * @return {FluxSuggestion} Suggestions for next functions in call chain
		 */
		GetQuerySuggestionsName(name: string): Observable<FluxSuggestion> {
			return this.http.get<FluxSuggestion>(this.baseUri + 'query/suggestions/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get the readiness of an instance at startup
		 * Get ready
		 * @return {Ready} The instance is ready
		 */
		GetReady(): Observable<Ready> {
			return this.http.get<Ready>(this.baseUri + 'ready', {});
		}

		/**
		 * List all scraper targets
		 * Get scrapers
		 * @param {string} name Specifies the name of the scraper target.
		 * @param {Array<string>} id List of scraper target IDs to return. If both `id` and `owner` are specified, only `id` is used.
		 * @param {string} orgID Specifies the organization ID of the scraper target.
		 * @param {string} org Specifies the organization name of the scraper target.
		 * @return {ScraperTargetResponses} All scraper targets
		 */
		GetScrapers(name: string | null | undefined, id: Array<string> | null | undefined, orgID: string | null | undefined, org: string | null | undefined): Observable<ScraperTargetResponses> {
			return this.http.get<ScraperTargetResponses>(this.baseUri + 'scrapers?name=' + (name == null ? '' : encodeURIComponent(name)) + '&' + id?.map(z => `id=${encodeURIComponent(z)}`).join('&') + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)) + '&org=' + (org == null ? '' : encodeURIComponent(org)), {});
		}

		/**
		 * Create a scraper target
		 * Post scrapers
		 * @param {ScraperTargetRequest} requestBody Scraper target to create
		 * @return {void} 
		 */
		PostScrapers(requestBody: ScraperTargetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'scrapers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a scraper target
		 * Delete scrapers/{scraperTargetID}
		 * @param {string} scraperTargetID The identifier of the scraper target.
		 * @return {void} 
		 */
		DeleteScrapersID(scraperTargetID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a scraper target
		 * Get scrapers/{scraperTargetID}
		 * @param {string} scraperTargetID The identifier of the scraper target.
		 * @return {ScraperTargetResponse} The scraper target
		 */
		GetScrapersID(scraperTargetID: string): Observable<ScraperTargetResponse> {
			return this.http.get<ScraperTargetResponse>(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)), {});
		}

		/**
		 * Update a scraper target
		 * Patch scrapers/{scraperTargetID}
		 * @param {string} scraperTargetID The identifier of the scraper target.
		 * @param {ScraperTargetRequest} requestBody Scraper target update to apply
		 * @return {ScraperTargetResponse} Scraper target updated
		 */
		PatchScrapersID(scraperTargetID: string, requestBody: ScraperTargetRequest): Observable<ScraperTargetResponse> {
			return this.http.patch<ScraperTargetResponse>(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all labels for a scraper target
		 * Get scrapers/{scraperTargetID}/labels
		 * @param {string} scraperTargetID The scraper target ID.
		 * @return {LabelsResponse} A list of labels for a scraper target.
		 */
		GetScrapersIDLabels(scraperTargetID: string): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)) + '/labels', {});
		}

		/**
		 * Add a label to a scraper target
		 * Post scrapers/{scraperTargetID}/labels
		 * @param {string} scraperTargetID The scraper target ID.
		 * @param {LabelMapping} requestBody Label to add
		 * @return {void} 
		 */
		PostScrapersIDLabels(scraperTargetID: string, requestBody: LabelMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a label from a scraper target
		 * Delete scrapers/{scraperTargetID}/labels/{labelID}
		 * @param {string} scraperTargetID The scraper target ID.
		 * @param {string} labelID The label ID.
		 * @return {void} 
		 */
		DeleteScrapersIDLabelsID(scraperTargetID: string, labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)) + '/labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all users with member privileges for a scraper target
		 * Get scrapers/{scraperTargetID}/members
		 * @param {string} scraperTargetID The scraper target ID.
		 * @return {ResourceMembers} A list of scraper target members
		 */
		GetScrapersIDMembers(scraperTargetID: string): Observable<ResourceMembers> {
			return this.http.get<ResourceMembers>(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)) + '/members', {});
		}

		/**
		 * Add a member to a scraper target
		 * Post scrapers/{scraperTargetID}/members
		 * @param {string} scraperTargetID The scraper target ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as member
		 * @return {void} 
		 */
		PostScrapersIDMembers(scraperTargetID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a member from a scraper target
		 * Delete scrapers/{scraperTargetID}/members/{userID}
		 * @param {string} userID The ID of member to remove.
		 * @param {string} scraperTargetID The scraper target ID.
		 * @return {void} 
		 */
		DeleteScrapersIDMembersID(userID: string, scraperTargetID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)) + '/members/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all owners of a scraper target
		 * Get scrapers/{scraperTargetID}/owners
		 * @param {string} scraperTargetID The scraper target ID.
		 * @return {ResourceOwners} A list of scraper target owners
		 */
		GetScrapersIDOwners(scraperTargetID: string): Observable<ResourceOwners> {
			return this.http.get<ResourceOwners>(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)) + '/owners', {});
		}

		/**
		 * Add an owner to a scraper target
		 * Post scrapers/{scraperTargetID}/owners
		 * @param {string} scraperTargetID The scraper target ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as owner
		 * @return {void} 
		 */
		PostScrapersIDOwners(scraperTargetID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)) + '/owners', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an owner from a scraper target
		 * Delete scrapers/{scraperTargetID}/owners/{userID}
		 * @param {string} userID The ID of owner to remove.
		 * @param {string} scraperTargetID The scraper target ID.
		 * @return {void} 
		 */
		DeleteScrapersIDOwnersID(userID: string, scraperTargetID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'scrapers/' + (scraperTargetID == null ? '' : encodeURIComponent(scraperTargetID)) + '/owners/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Check if database has default user, org, bucket
		 * Returns `true` if no default user, organization, or bucket has been created.
		 * Get setup
		 * @return {IsOnboarding} allowed true or false
		 */
		GetSetup(): Observable<IsOnboarding> {
			return this.http.get<IsOnboarding>(this.baseUri + 'setup', {});
		}

		/**
		 * Set up initial user, org and bucket
		 * Post an onboarding request to set up initial user, org and bucket.
		 * Post setup
		 * @param {OnboardingRequest} requestBody Source to create
		 * @return {void} 
		 */
		PostSetup(requestBody: OnboardingRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'setup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Exchange basic auth credentials for session
		 * Post signin
		 * @return {void} 
		 */
		PostSignin(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'signin', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Expire the current session
		 * Post signout
		 * @return {void} 
		 */
		PostSignout(): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'signout', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all sources
		 * Get sources
		 * @param {string} org The name of the organization.
		 * @return {Sources} A list of sources
		 */
		GetSources(org: string | null | undefined): Observable<Sources> {
			return this.http.get<Sources>(this.baseUri + 'sources?org=' + (org == null ? '' : encodeURIComponent(org)), {});
		}

		/**
		 * Create a source
		 * Post sources
		 * @param {Source} requestBody Source to create
		 * @return {void} 
		 */
		PostSources(requestBody: Source): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'sources', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a source
		 * Delete sources/{sourceID}
		 * @param {string} sourceID The source ID.
		 * @return {void} 
		 */
		DeleteSourcesID(sourceID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'sources/' + (sourceID == null ? '' : encodeURIComponent(sourceID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a source
		 * Get sources/{sourceID}
		 * @param {string} sourceID The source ID.
		 * @return {Source} A source
		 */
		GetSourcesID(sourceID: string): Observable<Source> {
			return this.http.get<Source>(this.baseUri + 'sources/' + (sourceID == null ? '' : encodeURIComponent(sourceID)), {});
		}

		/**
		 * Update a Source
		 * Patch sources/{sourceID}
		 * @param {string} sourceID The source ID.
		 * @param {Source} requestBody Source update
		 * @return {Source} Created Source
		 */
		PatchSourcesID(sourceID: string, requestBody: Source): Observable<Source> {
			return this.http.patch<Source>(this.baseUri + 'sources/' + (sourceID == null ? '' : encodeURIComponent(sourceID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get buckets in a source
		 * Get sources/{sourceID}/buckets
		 * @param {string} sourceID The source ID.
		 * @param {string} org The name of the organization.
		 * @return {Buckets} A source
		 */
		GetSourcesIDBuckets(sourceID: string, org: string | null | undefined): Observable<Buckets> {
			return this.http.get<Buckets>(this.baseUri + 'sources/' + (sourceID == null ? '' : encodeURIComponent(sourceID)) + '/buckets&org=' + (org == null ? '' : encodeURIComponent(org)), {});
		}

		/**
		 * Get the health of a source
		 * Get sources/{sourceID}/health
		 * @param {string} sourceID The source ID.
		 * @return {HealthCheck} The source is healthy
		 */
		GetSourcesIDHealth(sourceID: string): Observable<HealthCheck> {
			return this.http.get<HealthCheck>(this.baseUri + 'sources/' + (sourceID == null ? '' : encodeURIComponent(sourceID)) + '/health', {});
		}

		/**
		 * List all installed InfluxDB templates
		 * Get stacks
		 * @param {string} orgID The organization id of the stacks
		 * @param {string} name A collection of names to filter the list by.
		 * @param {string} stackID A collection of stackIDs to filter the list by.
		 * @return {ListStacksReturn} Influx stacks found
		 */
		ListStacks(orgID: string, name: string | null | undefined, stackID: string | null | undefined): Observable<ListStacksReturn> {
			return this.http.get<ListStacksReturn>(this.baseUri + 'stacks?orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&stackID=' + (stackID == null ? '' : encodeURIComponent(stackID)), {});
		}

		/**
		 * Create a new stack
		 * Post stacks
		 * @param {CreateStackPostBody} requestBody Stack to create.
		 * @return {void} 
		 */
		CreateStack(requestBody: CreateStackPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'stacks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a stack and associated resources
		 * Delete stacks/{stack_id}
		 * @param {string} stack_id Theidentifier of the stack.
		 * @param {string} orgID The identifier of the organization.
		 * @return {void} 
		 */
		DeleteStack(stack_id: string, orgID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'stacks/' + (stack_id == null ? '' : encodeURIComponent(stack_id)) + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a stack
		 * Get stacks/{stack_id}
		 * @param {string} stack_id Theidentifier of the stack.
		 * @return {Stack} The InfluxDB stack
		 */
		ReadStack(stack_id: string): Observable<Stack> {
			return this.http.get<Stack>(this.baseUri + 'stacks/' + (stack_id == null ? '' : encodeURIComponent(stack_id)), {});
		}

		/**
		 * Update an InfluxDB Stack
		 * Patch stacks/{stack_id}
		 * @param {string} stack_id Theidentifier of the stack.
		 * @param {UpdateStackPatchBody} requestBody Influx stack to update.
		 * @return {Stack} Influx stack updated
		 */
		UpdateStack(stack_id: string, requestBody: UpdateStackPatchBody): Observable<Stack> {
			return this.http.patch<Stack>(this.baseUri + 'stacks/' + (stack_id == null ? '' : encodeURIComponent(stack_id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Uninstall an InfluxDB Stack
		 * Post stacks/{stack_id}/uninstall
		 * @param {string} stack_id The stack id
		 * @return {Stack} Influx stack uninstalled
		 */
		UninstallStack(stack_id: string): Observable<Stack> {
			return this.http.post<Stack>(this.baseUri + 'stacks/' + (stack_id == null ? '' : encodeURIComponent(stack_id)) + '/uninstall', null, {});
		}

		/**
		 * List all tasks
		 * Get tasks
		 * @param {string} name Returns task with a specific name.
		 * @param {string} after Return tasks after a specified ID.
		 * @param {string} user Filter tasks to a specific user ID.
		 * @param {string} org Filter tasks to a specific organization name.
		 * @param {string} orgID Filter tasks to a specific organization ID.
		 * @param {AuthorizationUpdateRequestStatus} status Filter tasks by a status--"inactive" or "active".
		 * @param {number} limit The number of tasks to return
		 * @return {Tasks} A list of tasks
		 */
		GetTasks(name: string | null | undefined, after: string | null | undefined, user: string | null | undefined, org: string | null | undefined, orgID: string | null | undefined, status: AuthorizationUpdateRequestStatus | null | undefined, limit: number | null | undefined): Observable<Tasks> {
			return this.http.get<Tasks>(this.baseUri + 'tasks?name=' + (name == null ? '' : encodeURIComponent(name)) + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&user=' + (user == null ? '' : encodeURIComponent(user)) + '&org=' + (org == null ? '' : encodeURIComponent(org)) + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)) + '&status=' + status + '&limit=' + limit, {});
		}

		/**
		 * Create a new task
		 * Post tasks
		 * @param {TaskCreateRequest} requestBody Task to create
		 * @return {void} 
		 */
		PostTasks(requestBody: TaskCreateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tasks', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a task
		 * Deletes a task and all associated records
		 * Delete tasks/{taskID}
		 * @param {string} taskID The ID of the task to delete.
		 * @return {void} 
		 */
		DeleteTasksID(taskID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a task
		 * Get tasks/{taskID}
		 * @param {string} taskID The task ID.
		 * @return {Task_} Task details
		 */
		GetTasksID(taskID: string): Observable<Task_> {
			return this.http.get<Task_>(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)), {});
		}

		/**
		 * Update a task
		 * Update a task. This will cancel all queued runs.
		 * Patch tasks/{taskID}
		 * @param {string} taskID The task ID.
		 * @param {TaskUpdateRequest} requestBody Task update to apply
		 * @return {Task_} Task updated
		 */
		PatchTasksID(taskID: string, requestBody: TaskUpdateRequest): Observable<Task_> {
			return this.http.patch<Task_>(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all labels for a task
		 * Get tasks/{taskID}/labels
		 * @param {string} taskID The task ID.
		 * @return {LabelsResponse} A list of all labels for a task
		 */
		GetTasksIDLabels(taskID: string): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/labels', {});
		}

		/**
		 * Add a label to a task
		 * Post tasks/{taskID}/labels
		 * @param {string} taskID The task ID.
		 * @param {LabelMapping} requestBody Label to add
		 * @return {void} 
		 */
		PostTasksIDLabels(taskID: string, requestBody: LabelMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a label from a task
		 * Delete tasks/{taskID}/labels/{labelID}
		 * @param {string} taskID The task ID.
		 * @param {string} labelID The label ID.
		 * @return {void} 
		 */
		DeleteTasksIDLabelsID(taskID: string, labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve all logs for a task
		 * Get tasks/{taskID}/logs
		 * @param {string} taskID The task ID.
		 * @return {Logs} All logs for a task
		 */
		GetTasksIDLogs(taskID: string): Observable<Logs> {
			return this.http.get<Logs>(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/logs', {});
		}

		/**
		 * List all task members
		 * Get tasks/{taskID}/members
		 * @param {string} taskID The task ID.
		 * @return {ResourceMembers} A list of users who have member privileges for a task
		 */
		GetTasksIDMembers(taskID: string): Observable<ResourceMembers> {
			return this.http.get<ResourceMembers>(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/members', {});
		}

		/**
		 * Add a member to a task
		 * Post tasks/{taskID}/members
		 * @param {string} taskID The task ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as member
		 * @return {void} 
		 */
		PostTasksIDMembers(taskID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a member from a task
		 * Delete tasks/{taskID}/members/{userID}
		 * @param {string} userID The ID of the member to remove.
		 * @param {string} taskID The task ID.
		 * @return {void} 
		 */
		DeleteTasksIDMembersID(userID: string, taskID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/members/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all owners of a task
		 * Get tasks/{taskID}/owners
		 * @param {string} taskID The task ID.
		 * @return {ResourceOwners} A list of users who have owner privileges for a task
		 */
		GetTasksIDOwners(taskID: string): Observable<ResourceOwners> {
			return this.http.get<ResourceOwners>(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/owners', {});
		}

		/**
		 * Add an owner to a task
		 * Post tasks/{taskID}/owners
		 * @param {string} taskID The task ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as owner
		 * @return {void} 
		 */
		PostTasksIDOwners(taskID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/owners', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an owner from a task
		 * Delete tasks/{taskID}/owners/{userID}
		 * @param {string} userID The ID of the owner to remove.
		 * @param {string} taskID The task ID.
		 * @return {void} 
		 */
		DeleteTasksIDOwnersID(userID: string, taskID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/owners/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List runs for a task
		 * Get tasks/{taskID}/runs
		 * @param {string} taskID The ID of the task to get runs for.
		 * @param {string} after Returns runs after a specific ID.
		 * @param {number} limit The number of runs to return
		 * @param {Date} afterTime Filter runs to those scheduled after this time, RFC3339
		 * @param {Date} beforeTime Filter runs to those scheduled before this time, RFC3339
		 * @return {Runs} A list of task runs
		 */
		GetTasksIDRuns(taskID: string, after: string | null | undefined, limit: number | null | undefined, afterTime: Date | null | undefined, beforeTime: Date | null | undefined): Observable<Runs> {
			return this.http.get<Runs>(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/runs&after=' + (after == null ? '' : encodeURIComponent(after)) + '&limit=' + limit + '&afterTime=' + afterTime?.toISOString() + '&beforeTime=' + beforeTime?.toISOString(), {});
		}

		/**
		 * Manually start a task run, overriding the current schedule
		 * Post tasks/{taskID}/runs
		 * @return {void} 
		 */
		PostTasksIDRuns(taskID: string, requestBody: RunManually): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/runs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Cancel a running task
		 * Delete tasks/{taskID}/runs/{runID}
		 * @param {string} taskID The task ID.
		 * @param {string} runID The run ID.
		 * @return {void} 
		 */
		DeleteTasksIDRunsID(taskID: string, runID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/runs/' + (runID == null ? '' : encodeURIComponent(runID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a single run for a task
		 * Get tasks/{taskID}/runs/{runID}
		 * @param {string} taskID The task ID.
		 * @param {string} runID The run ID.
		 * @return {Run} The run record
		 */
		GetTasksIDRunsID(taskID: string, runID: string): Observable<Run> {
			return this.http.get<Run>(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/runs/' + (runID == null ? '' : encodeURIComponent(runID)), {});
		}

		/**
		 * Retrieve all logs for a run
		 * Get tasks/{taskID}/runs/{runID}/logs
		 * @param {string} taskID ID of task to get logs for.
		 * @param {string} runID ID of run to get logs for.
		 * @return {Logs} All logs for a run
		 */
		GetTasksIDRunsIDLogs(taskID: string, runID: string): Observable<Logs> {
			return this.http.get<Logs>(this.baseUri + 'tasks/' + (taskID == null ? '' : encodeURIComponent(taskID)) + '/runs/' + (runID == null ? '' : encodeURIComponent(runID)) + '/logs', {});
		}

		/**
		 * List all Telegraf plugins
		 * Get telegraf/plugins
		 * @param {string} type The type of plugin desired.
		 * @return {TelegrafPlugins} A list of Telegraf plugins.
		 */
		GetTelegrafPlugins(type: string | null | undefined): Observable<TelegrafPlugins> {
			return this.http.get<TelegrafPlugins>(this.baseUri + 'telegraf/plugins?type=' + (type == null ? '' : encodeURIComponent(type)), {});
		}

		/**
		 * List all Telegraf configurations
		 * Get telegrafs
		 * @param {string} orgID The organization ID the Telegraf config belongs to.
		 * @return {Telegrafs} A list of Telegraf configurations
		 */
		GetTelegrafs(orgID: string | null | undefined): Observable<Telegrafs> {
			return this.http.get<Telegrafs>(this.baseUri + 'telegrafs?orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), {});
		}

		/**
		 * Create a Telegraf configuration
		 * Post telegrafs
		 * @param {TelegrafRequest} requestBody Telegraf configuration to create
		 * @return {void} 
		 */
		PostTelegrafs(requestBody: TelegrafRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'telegrafs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a Telegraf configuration
		 * Delete telegrafs/{telegrafID}
		 * @param {string} telegrafID The Telegraf configuration ID.
		 * @return {void} 
		 */
		DeleteTelegrafsID(telegrafID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a Telegraf configuration
		 * Get telegrafs/{telegrafID}
		 * @param {string} telegrafID The Telegraf configuration ID.
		 * @return {Telegraf} Telegraf configuration details
		 */
		GetTelegrafsID(telegrafID: string): Observable<Telegraf> {
			return this.http.get<Telegraf>(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)), {});
		}

		/**
		 * Update a Telegraf configuration
		 * Put telegrafs/{telegrafID}
		 * @param {string} telegrafID The Telegraf config ID.
		 * @param {TelegrafRequest} requestBody Telegraf configuration update to apply
		 * @return {Telegraf} An updated Telegraf configurations
		 */
		PutTelegrafsID(telegrafID: string, requestBody: TelegrafRequest): Observable<Telegraf> {
			return this.http.put<Telegraf>(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all labels for a Telegraf config
		 * Get telegrafs/{telegrafID}/labels
		 * @param {string} telegrafID The Telegraf config ID.
		 * @return {LabelsResponse} A list of all labels for a Telegraf config
		 */
		GetTelegrafsIDLabels(telegrafID: string): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)) + '/labels', {});
		}

		/**
		 * Add a label to a Telegraf config
		 * Post telegrafs/{telegrafID}/labels
		 * @param {string} telegrafID The Telegraf config ID.
		 * @param {LabelMapping} requestBody Label to add
		 * @return {void} 
		 */
		PostTelegrafsIDLabels(telegrafID: string, requestBody: LabelMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a label from a Telegraf config
		 * Delete telegrafs/{telegrafID}/labels/{labelID}
		 * @param {string} telegrafID The Telegraf config ID.
		 * @param {string} labelID The label ID.
		 * @return {void} 
		 */
		DeleteTelegrafsIDLabelsID(telegrafID: string, labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)) + '/labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all users with member privileges for a Telegraf config
		 * Get telegrafs/{telegrafID}/members
		 * @param {string} telegrafID The Telegraf config ID.
		 * @return {ResourceMembers} A list of Telegraf config members
		 */
		GetTelegrafsIDMembers(telegrafID: string): Observable<ResourceMembers> {
			return this.http.get<ResourceMembers>(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)) + '/members', {});
		}

		/**
		 * Add a member to a Telegraf config
		 * Post telegrafs/{telegrafID}/members
		 * @param {string} telegrafID The Telegraf config ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as member
		 * @return {void} 
		 */
		PostTelegrafsIDMembers(telegrafID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)) + '/members', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a member from a Telegraf config
		 * Delete telegrafs/{telegrafID}/members/{userID}
		 * @param {string} userID The ID of the member to remove.
		 * @param {string} telegrafID The Telegraf config ID.
		 * @return {void} 
		 */
		DeleteTelegrafsIDMembersID(userID: string, telegrafID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)) + '/members/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all owners of a Telegraf configuration
		 * Get telegrafs/{telegrafID}/owners
		 * @param {string} telegrafID The Telegraf configuration ID.
		 * @return {ResourceOwners} Returns Telegraf configuration owners as a ResourceOwners list
		 */
		GetTelegrafsIDOwners(telegrafID: string): Observable<ResourceOwners> {
			return this.http.get<ResourceOwners>(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)) + '/owners', {});
		}

		/**
		 * Add an owner to a Telegraf configuration
		 * Post telegrafs/{telegrafID}/owners
		 * @param {string} telegrafID The Telegraf configuration ID.
		 * @param {AddResourceMemberRequestBody} requestBody User to add as owner
		 * @return {void} 
		 */
		PostTelegrafsIDOwners(telegrafID: string, requestBody: AddResourceMemberRequestBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)) + '/owners', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an owner from a Telegraf config
		 * Delete telegrafs/{telegrafID}/owners/{userID}
		 * @param {string} userID The ID of the owner to remove.
		 * @param {string} telegrafID The Telegraf config ID.
		 * @return {void} 
		 */
		DeleteTelegrafsIDOwnersID(userID: string, telegrafID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'telegrafs/' + (telegrafID == null ? '' : encodeURIComponent(telegrafID)) + '/owners/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Apply or dry-run an InfluxDB Template
		 * Post templates/apply
		 * @return {TemplateSummary} Influx package dry-run successful, no new resources created. The provided diff and summary will not have IDs for resources that do not exist at the time of the dry run.
		 */
		ApplyTemplate(requestBody: TemplateApply): Observable<TemplateSummary> {
			return this.http.post<TemplateSummary>(this.baseUri + 'templates/apply', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Export a new Influx Template
		 * Post templates/export
		 * @param {TemplateExportByID} requestBody Export resources as an InfluxDB template.
		 * @return {Array<ExportTemplateReturn>} InfluxDB template created
		 */
		ExportTemplate(requestBody: TemplateExportByID): Observable<Array<ExportTemplateReturn>> {
			return this.http.post<Array<ExportTemplateReturn>>(this.baseUri + 'templates/export', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all users
		 * Get users
		 * @param {string} after The last resource ID from which to seek from (but not including). This is to be used instead of `offset`.
		 * @return {Users} A list of users
		 */
		GetUsers(offset: number | null | undefined, limit: number | null | undefined, after: string | null | undefined, name: string | null | undefined, id: string | null | undefined): Observable<Users> {
			return this.http.get<Users>(this.baseUri + 'users?offset=' + offset + '&limit=' + limit + '&after=' + (after == null ? '' : encodeURIComponent(after)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&id=' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Create a user
		 * Post users
		 * @param {User} requestBody User to create
		 * @return {void} 
		 */
		PostUsers(requestBody: User): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a user
		 * Delete users/{userID}
		 * @param {string} userID The ID of the user to delete.
		 * @return {void} 
		 */
		DeleteUsersID(userID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (userID == null ? '' : encodeURIComponent(userID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a user
		 * Get users/{userID}
		 * @param {string} userID The user ID.
		 * @return {UserResponse} User details
		 */
		GetUsersID(userID: string): Observable<UserResponse> {
			return this.http.get<UserResponse>(this.baseUri + 'users/' + (userID == null ? '' : encodeURIComponent(userID)), {});
		}

		/**
		 * Update a user
		 * Patch users/{userID}
		 * @param {string} userID The ID of the user to update.
		 * @param {User} requestBody User update to apply
		 * @return {UserResponse} User updated
		 */
		PatchUsersID(userID: string, requestBody: User): Observable<UserResponse> {
			return this.http.patch<UserResponse>(this.baseUri + 'users/' + (userID == null ? '' : encodeURIComponent(userID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a password
		 * Post users/{userID}/password
		 * @param {string} userID The user ID.
		 * @param {PasswordResetBody} requestBody New password
		 * @return {void} 
		 */
		PostUsersIDPassword(userID: string, requestBody: PasswordResetBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (userID == null ? '' : encodeURIComponent(userID)) + '/password', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all variables
		 * Get variables
		 * @param {string} org The name of the organization.
		 * @param {string} orgID The organization ID.
		 * @return {Variables} A list of variables for an organization
		 */
		GetVariables(org: string | null | undefined, orgID: string | null | undefined): Observable<Variables> {
			return this.http.get<Variables>(this.baseUri + 'variables?org=' + (org == null ? '' : encodeURIComponent(org)) + '&orgID=' + (orgID == null ? '' : encodeURIComponent(orgID)), {});
		}

		/**
		 * Create a variable
		 * Post variables
		 * @param {Variable} requestBody Variable to create
		 * @return {void} 
		 */
		PostVariables(requestBody: Variable): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'variables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a variable
		 * Delete variables/{variableID}
		 * @param {string} variableID The variable ID.
		 * @return {void} 
		 */
		DeleteVariablesID(variableID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'variables/' + (variableID == null ? '' : encodeURIComponent(variableID)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a variable
		 * Get variables/{variableID}
		 * @param {string} variableID The variable ID.
		 * @return {Variable} Variable found
		 */
		GetVariablesID(variableID: string): Observable<Variable> {
			return this.http.get<Variable>(this.baseUri + 'variables/' + (variableID == null ? '' : encodeURIComponent(variableID)), {});
		}

		/**
		 * Update a variable
		 * Patch variables/{variableID}
		 * @param {string} variableID The variable ID.
		 * @param {Variable} requestBody Variable update to apply
		 * @return {Variable} Variable updated
		 */
		PatchVariablesID(variableID: string, requestBody: Variable): Observable<Variable> {
			return this.http.patch<Variable>(this.baseUri + 'variables/' + (variableID == null ? '' : encodeURIComponent(variableID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Replace a variable
		 * Put variables/{variableID}
		 * @param {string} variableID The variable ID.
		 * @param {Variable} requestBody Variable to replace
		 * @return {Variable} Variable updated
		 */
		PutVariablesID(variableID: string, requestBody: Variable): Observable<Variable> {
			return this.http.put<Variable>(this.baseUri + 'variables/' + (variableID == null ? '' : encodeURIComponent(variableID)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all labels for a variable
		 * Get variables/{variableID}/labels
		 * @param {string} variableID The variable ID.
		 * @return {LabelsResponse} A list of all labels for a variable
		 */
		GetVariablesIDLabels(variableID: string): Observable<LabelsResponse> {
			return this.http.get<LabelsResponse>(this.baseUri + 'variables/' + (variableID == null ? '' : encodeURIComponent(variableID)) + '/labels', {});
		}

		/**
		 * Add a label to a variable
		 * Post variables/{variableID}/labels
		 * @param {string} variableID The variable ID.
		 * @param {LabelMapping} requestBody Label to add
		 * @return {void} 
		 */
		PostVariablesIDLabels(variableID: string, requestBody: LabelMapping): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'variables/' + (variableID == null ? '' : encodeURIComponent(variableID)) + '/labels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a label from a variable
		 * Delete variables/{variableID}/labels/{labelID}
		 * @param {string} variableID The variable ID.
		 * @param {string} labelID The label ID to delete.
		 * @return {void} 
		 */
		DeleteVariablesIDLabelsID(variableID: string, labelID: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'variables/' + (variableID == null ? '' : encodeURIComponent(variableID)) + '/labels/' + (labelID == null ? '' : encodeURIComponent(labelID)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum GetDashboardsSortBy { ID = 0, CreatedAt = 1, UpdatedAt = 2 }

	export enum GetDashboardsIDInclude { properties = 0 }

	export interface PatchDashboardsIDPatchBody {
		cells?: CellWithViewProperties;

		/** optional, when provided will replace the description */
		description?: string | null;

		/** optional, when provided will replace the name */
		name?: string | null;
	}
	export interface PatchDashboardsIDPatchBodyFormProperties {

		/** optional, when provided will replace the description */
		description: FormControl<string | null | undefined>,

		/** optional, when provided will replace the name */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatchDashboardsIDPatchBodyFormGroup() {
		return new FormGroup<PatchDashboardsIDPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PostQueryAccept_Encoding { gzip = 0, identity = 1 }

	export enum PostQueryContent_Type { 'application/json' = 0, 'application/vnd.flux' = 1 }

	export enum PostQueryAnalyzeContent_Type { 'application/json' = 0 }

	export interface ListStacksReturn {
		stacks?: Array<Stack>;
	}
	export interface ListStacksReturnFormProperties {
	}
	export function CreateListStacksReturnFormGroup() {
		return new FormGroup<ListStacksReturnFormProperties>({
		});

	}

	export interface CreateStackPostBody {
		description?: string | null;
		name?: string | null;
		orgID?: string | null;
		urls?: Array<string>;
	}
	export interface CreateStackPostBodyFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		orgID: FormControl<string | null | undefined>,
	}
	export function CreateCreateStackPostBodyFormGroup() {
		return new FormGroup<CreateStackPostBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orgID: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStackPatchBody {
		UpdateStackPatchBodyAdditionalResources?: Array<UpdateStackPatchBodyAdditionalResources>;
		description?: string | null;
		name?: string | null;
		templateURLs?: Array<string>;
	}
	export interface UpdateStackPatchBodyFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackPatchBodyFormGroup() {
		return new FormGroup<UpdateStackPatchBodyFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateStackPatchBodyAdditionalResources {

		/** Required */
		kind: string;

		/** Required */
		resourceID: string;
		templateMetaName?: string | null;
	}
	export interface UpdateStackPatchBodyAdditionalResourcesFormProperties {

		/** Required */
		kind: FormControl<string | null | undefined>,

		/** Required */
		resourceID: FormControl<string | null | undefined>,
		templateMetaName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateStackPatchBodyAdditionalResourcesFormGroup() {
		return new FormGroup<UpdateStackPatchBodyAdditionalResourcesFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			resourceID: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			templateMetaName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GetTelegrafsIDAccept { 'application/toml' = 0, 'application/json' = 1, 'application/octet-stream' = 2 }

	export interface ExportTemplateReturn {
		apiVersion?: string | null;
		kind?: StackEventsResourcesAssociationsKind | null;
		meta?: ExportTemplateReturnMeta;
		spec?: string | null;
	}
	export interface ExportTemplateReturnFormProperties {
		apiVersion: FormControl<string | null | undefined>,
		kind: FormControl<StackEventsResourcesAssociationsKind | null | undefined>,
		spec: FormControl<string | null | undefined>,
	}
	export function CreateExportTemplateReturnFormGroup() {
		return new FormGroup<ExportTemplateReturnFormProperties>({
			apiVersion: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<StackEventsResourcesAssociationsKind | null | undefined>(undefined),
			spec: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportTemplateReturnMeta {
		name?: string | null;
	}
	export interface ExportTemplateReturnMetaFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateExportTemplateReturnMetaFormGroup() {
		return new FormGroup<ExportTemplateReturnMetaFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PostWriteContent_Type { 'text/plain' = 0, 'text/plain; charset=utf-8' = 1, 'application/vnd.influx.arrow' = 2 }

}

