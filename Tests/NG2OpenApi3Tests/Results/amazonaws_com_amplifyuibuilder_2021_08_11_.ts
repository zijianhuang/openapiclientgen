import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface CreateComponentResponse {
		entity?: Component;
	}
	export interface CreateComponentResponseFormProperties {
	}
	export function CreateCreateComponentResponseFormGroup() {
		return new FormGroup<CreateComponentResponseFormProperties>({
		});

	}


	/** Contains the configuration settings for a user interface (UI) element for an Amplify app. A component is configured as a primary, stand-alone UI element. Use <code>ComponentChild</code> to configure an instance of a <code>Component</code>. A <code>ComponentChild</code> instance inherits the configuration of the main <code>Component</code>. */
	export interface Component {

		/** Required */
		appId: string;

		/** Required */
		environmentName: string;
		sourceId?: string;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		componentType: string;

		/**
		 * Describes the component's properties. You can't specify <code>tags</code> as a valid property for <code>properties</code>.
		 * Required
		 */
		properties: any;
		children?: Array<ComponentChild>;

		/** Required */
		variants: Array<ComponentVariant>;

		/** Required */
		overrides: ComponentOverrides;

		/** Required */
		bindingProperties: ComponentBindingProperties;
		collectionProperties?: ComponentCollectionProperties;

		/** Required */
		createdAt: Date;
		modifiedAt?: Date;
		tags?: Tags;
		events?: ComponentEvents;
		schemaVersion?: string;
	}

	/** Contains the configuration settings for a user interface (UI) element for an Amplify app. A component is configured as a primary, stand-alone UI element. Use <code>ComponentChild</code> to configure an instance of a <code>Component</code>. A <code>ComponentChild</code> instance inherits the configuration of the main <code>Component</code>. */
	export interface ComponentFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		componentType: FormControl<string | null | undefined>,

		/**
		 * Describes the component's properties. You can't specify <code>tags</code> as a valid property for <code>properties</code>.
		 * Required
		 */
		properties: FormControl<any | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		modifiedAt: FormControl<Date | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateComponentFormGroup() {
		return new FormGroup<ComponentFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			componentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			modifiedAt: new FormControl<Date | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A nested UI configuration within a parent <code>Component</code>. */
	export interface ComponentChild {

		/** Required */
		componentType: string;

		/** Required */
		name: string;

		/**
		 * Describes the properties of the child component. You can't specify <code>tags</code> as a valid property for <code>properties</code>.
		 * Required
		 */
		properties: any;
		children?: Array<ComponentChild>;
		events?: ComponentEvents;
		sourceId?: string;
	}

	/** A nested UI configuration within a parent <code>Component</code>. */
	export interface ComponentChildFormProperties {

		/** Required */
		componentType: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Describes the properties of the child component. You can't specify <code>tags</code> as a valid property for <code>properties</code>.
		 * Required
		 */
		properties: FormControl<any | null | undefined>,
		sourceId: FormControl<string | null | undefined>,
	}
	export function CreateComponentChildFormGroup() {
		return new FormGroup<ComponentChildFormProperties>({
			componentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComponentEvents {
	}
	export interface ComponentEventsFormProperties {
	}
	export function CreateComponentEventsFormGroup() {
		return new FormGroup<ComponentEventsFormProperties>({
		});

	}


	/** Describes the style configuration of a unique variation of a main component. */
	export interface ComponentVariant {
		variantValues?: ComponentVariantValues;
		overrides?: ComponentOverrides;
	}

	/** Describes the style configuration of a unique variation of a main component. */
	export interface ComponentVariantFormProperties {
	}
	export function CreateComponentVariantFormGroup() {
		return new FormGroup<ComponentVariantFormProperties>({
		});

	}

	export interface ComponentVariantValues {
	}
	export interface ComponentVariantValuesFormProperties {
	}
	export function CreateComponentVariantValuesFormGroup() {
		return new FormGroup<ComponentVariantValuesFormProperties>({
		});

	}

	export interface ComponentOverrides {
	}
	export interface ComponentOverridesFormProperties {
	}
	export function CreateComponentOverridesFormGroup() {
		return new FormGroup<ComponentOverridesFormProperties>({
		});

	}

	export interface ComponentBindingProperties {
	}
	export interface ComponentBindingPropertiesFormProperties {
	}
	export function CreateComponentBindingPropertiesFormGroup() {
		return new FormGroup<ComponentBindingPropertiesFormProperties>({
		});

	}

	export interface ComponentCollectionProperties {
	}
	export interface ComponentCollectionPropertiesFormProperties {
	}
	export function CreateComponentCollectionPropertiesFormGroup() {
		return new FormGroup<ComponentCollectionPropertiesFormProperties>({
		});

	}

	export interface Tags {
	}
	export interface TagsFormProperties {
	}
	export function CreateTagsFormGroup() {
		return new FormGroup<TagsFormProperties>({
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

	export interface ResourceConflictException {
	}
	export interface ResourceConflictExceptionFormProperties {
	}
	export function CreateResourceConflictExceptionFormGroup() {
		return new FormGroup<ResourceConflictExceptionFormProperties>({
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

	export interface InvalidParameterException {
	}
	export interface InvalidParameterExceptionFormProperties {
	}
	export function CreateInvalidParameterExceptionFormGroup() {
		return new FormGroup<InvalidParameterExceptionFormProperties>({
		});

	}

	export interface CreateFormResponse {
		entity?: Form;
	}
	export interface CreateFormResponseFormProperties {
	}
	export function CreateCreateFormResponseFormGroup() {
		return new FormGroup<CreateFormResponseFormProperties>({
		});

	}


	/** Contains the configuration settings for a <code>Form</code> user interface (UI) element for an Amplify app. A form is a component you can add to your project by specifying a data source as the default configuration for the form. */
	export interface Form {

		/** Required */
		appId: string;

		/** Required */
		environmentName: string;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		formActionType: FormActionType;

		/** Required */
		style: FormStyle;

		/** Required */
		dataType: FormDataTypeConfig;

		/** Required */
		fields: FieldsMap;

		/** Required */
		sectionalElements: SectionalElementMap;

		/** Required */
		schemaVersion: string;
		tags?: Tags;
		cta?: FormCTA;
		labelDecorator?: LabelDecorator;
	}

	/** Contains the configuration settings for a <code>Form</code> user interface (UI) element for an Amplify app. A form is a component you can add to your project by specifying a data source as the default configuration for the form. */
	export interface FormFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		formActionType: FormControl<FormActionType | null | undefined>,

		/** Required */
		schemaVersion: FormControl<string | null | undefined>,
		labelDecorator: FormControl<LabelDecorator | null | undefined>,
	}
	export function CreateFormFormGroup() {
		return new FormGroup<FormFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			formActionType: new FormControl<FormActionType | null | undefined>(undefined, [Validators.required]),
			schemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labelDecorator: new FormControl<LabelDecorator | null | undefined>(undefined),
		});

	}

	export enum FormActionType { create = 'create', update = 'update' }


	/** Describes the configuration for the form's style. */
	export interface FormStyle {
		horizontalGap?: FormStyleConfig;
		verticalGap?: FormStyleConfig;
		outerPadding?: FormStyleConfig;
	}

	/** Describes the configuration for the form's style. */
	export interface FormStyleFormProperties {
	}
	export function CreateFormStyleFormGroup() {
		return new FormGroup<FormStyleFormProperties>({
		});

	}


	/** Describes the configuration settings for the form's style properties. */
	export interface FormStyleConfig {
		tokenReference?: string;
		value?: string;
	}

	/** Describes the configuration settings for the form's style properties. */
	export interface FormStyleConfigFormProperties {
		tokenReference: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateFormStyleConfigFormGroup() {
		return new FormGroup<FormStyleConfigFormProperties>({
			tokenReference: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the data type configuration for the data source associated with a form. */
	export interface FormDataTypeConfig {

		/** Required */
		dataSourceType: FormDataSourceType;

		/** Required */
		dataTypeName: string;
	}

	/** Describes the data type configuration for the data source associated with a form. */
	export interface FormDataTypeConfigFormProperties {

		/** Required */
		dataSourceType: FormControl<FormDataSourceType | null | undefined>,

		/** Required */
		dataTypeName: FormControl<string | null | undefined>,
	}
	export function CreateFormDataTypeConfigFormGroup() {
		return new FormGroup<FormDataTypeConfigFormProperties>({
			dataSourceType: new FormControl<FormDataSourceType | null | undefined>(undefined, [Validators.required]),
			dataTypeName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum FormDataSourceType { DataStore = 'DataStore', Custom = 'Custom' }

	export interface FieldsMap {
	}
	export interface FieldsMapFormProperties {
	}
	export function CreateFieldsMapFormGroup() {
		return new FormGroup<FieldsMapFormProperties>({
		});

	}

	export interface SectionalElementMap {
	}
	export interface SectionalElementMapFormProperties {
	}
	export function CreateSectionalElementMapFormGroup() {
		return new FormGroup<SectionalElementMapFormProperties>({
		});

	}


	/** Describes the call to action button configuration for the form. */
	export interface FormCTA {
		position?: FormButtonsPosition;
		clear?: FormButton;
		cancel?: FormButton;
		submit?: FormButton;
	}

	/** Describes the call to action button configuration for the form. */
	export interface FormCTAFormProperties {
		position: FormControl<FormButtonsPosition | null | undefined>,
	}
	export function CreateFormCTAFormGroup() {
		return new FormGroup<FormCTAFormProperties>({
			position: new FormControl<FormButtonsPosition | null | undefined>(undefined),
		});

	}

	export enum FormButtonsPosition { top = 'top', bottom = 'bottom', top_and_bottom = 'top_and_bottom' }


	/** Describes the configuration for a button UI element that is a part of a form. */
	export interface FormButton {
		excluded?: boolean | null;
		children?: string;
		position?: FieldPosition;
	}

	/** Describes the configuration for a button UI element that is a part of a form. */
	export interface FormButtonFormProperties {
		excluded: FormControl<boolean | null | undefined>,
		children: FormControl<string | null | undefined>,
	}
	export function CreateFormButtonFormGroup() {
		return new FormGroup<FormButtonFormProperties>({
			excluded: new FormControl<boolean | null | undefined>(undefined),
			children: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the field position. */
	export interface FieldPosition {
		fixed?: FixedPosition;
		rightOf?: string;
		below?: string;
	}

	/** Describes the field position. */
	export interface FieldPositionFormProperties {
		fixed: FormControl<FixedPosition | null | undefined>,
		rightOf: FormControl<string | null | undefined>,
		below: FormControl<string | null | undefined>,
	}
	export function CreateFieldPositionFormGroup() {
		return new FormGroup<FieldPositionFormProperties>({
			fixed: new FormControl<FixedPosition | null | undefined>(undefined),
			rightOf: new FormControl<string | null | undefined>(undefined),
			below: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FixedPosition { first = 'first' }

	export enum LabelDecorator { required = 'required', optional = 'optional', none = 'none' }

	export interface CreateThemeResponse {
		entity?: Theme;
	}
	export interface CreateThemeResponseFormProperties {
	}
	export function CreateCreateThemeResponseFormGroup() {
		return new FormGroup<CreateThemeResponseFormProperties>({
		});

	}


	/** A theme is a collection of style settings that apply globally to the components associated with an Amplify application. */
	export interface Theme {

		/** Required */
		appId: string;

		/** Required */
		environmentName: string;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		createdAt: Date;
		modifiedAt?: Date;

		/** Required */
		values: Array<ThemeValues>;
		overrides?: Array<ThemeValues>;
		tags?: Tags;
	}

	/** A theme is a collection of style settings that apply globally to the components associated with an Amplify application. */
	export interface ThemeFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		createdAt: FormControl<Date | null | undefined>,
		modifiedAt: FormControl<Date | null | undefined>,
	}
	export function CreateThemeFormGroup() {
		return new FormGroup<ThemeFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			modifiedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** A key-value pair that defines a property of a theme. */
	export interface ThemeValues {
		key?: string;
		value?: ThemeValue;
	}

	/** A key-value pair that defines a property of a theme. */
	export interface ThemeValuesFormProperties {
		key: FormControl<string | null | undefined>,
	}
	export function CreateThemeValuesFormGroup() {
		return new FormGroup<ThemeValuesFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the configuration of a theme's properties. */
	export interface ThemeValue {
		value?: string;
		children?: Array<ThemeValues>;
	}

	/** Describes the configuration of a theme's properties. */
	export interface ThemeValueFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateThemeValueFormGroup() {
		return new FormGroup<ThemeValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
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

	export interface ExchangeCodeForTokenResponse {

		/** Required */
		accessToken: string;

		/** Required */
		expiresIn: number;

		/** Required */
		refreshToken: string;
	}
	export interface ExchangeCodeForTokenResponseFormProperties {

		/** Required */
		accessToken: FormControl<string | null | undefined>,

		/** Required */
		expiresIn: FormControl<number | null | undefined>,

		/** Required */
		refreshToken: FormControl<string | null | undefined>,
	}
	export function CreateExchangeCodeForTokenResponseFormGroup() {
		return new FormGroup<ExchangeCodeForTokenResponseFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiresIn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			refreshToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ExportComponentsResponse {

		/** Required */
		entities: Array<Component>;
		nextToken?: string;
	}
	export interface ExportComponentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateExportComponentsResponseFormGroup() {
		return new FormGroup<ExportComponentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportFormsResponse {

		/** Required */
		entities: Array<Form>;
		nextToken?: string;
	}
	export interface ExportFormsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateExportFormsResponseFormGroup() {
		return new FormGroup<ExportFormsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExportThemesResponse {

		/** Required */
		entities: Array<Theme>;
		nextToken?: string;
	}
	export interface ExportThemesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateExportThemesResponseFormGroup() {
		return new FormGroup<ExportThemesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCodegenJobResponse {
		job?: CodegenJob;
	}
	export interface GetCodegenJobResponseFormProperties {
	}
	export function CreateGetCodegenJobResponseFormGroup() {
		return new FormGroup<GetCodegenJobResponseFormProperties>({
		});

	}


	/** Describes the configuration for a code generation job that is associated with an Amplify app. */
	export interface CodegenJob {

		/** Required */
		id: string;

		/** Required */
		appId: string;

		/** Required */
		environmentName: string;

		/** Describes the configuration information for rendering the UI component associated with the code generation job. */
		renderConfig?: CodegenJobRenderConfig;

		/** Describes the data schema for a code generation job. */
		genericDataSchema?: CodegenJobGenericDataSchema;
		autoGenerateForms?: boolean | null;

		/** Describes the feature flags that you can specify for a code generation job. */
		features?: CodegenFeatureFlags;
		status?: CodegenJobStatus;
		statusMessage?: string;
		asset?: CodegenJobAsset;
		tags?: Tags;
		createdAt?: Date;
		modifiedAt?: Date;
	}

	/** Describes the configuration for a code generation job that is associated with an Amplify app. */
	export interface CodegenJobFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		appId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,
		autoGenerateForms: FormControl<boolean | null | undefined>,
		status: FormControl<CodegenJobStatus | null | undefined>,
		statusMessage: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		modifiedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCodegenJobFormGroup() {
		return new FormGroup<CodegenJobFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			autoGenerateForms: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<CodegenJobStatus | null | undefined>(undefined),
			statusMessage: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			modifiedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Describes the configuration information for rendering the UI component associated with the code generation job. */
	export interface CodegenJobRenderConfig {
		react?: ReactStartCodegenJobData;
	}

	/** Describes the configuration information for rendering the UI component associated with the code generation job. */
	export interface CodegenJobRenderConfigFormProperties {
	}
	export function CreateCodegenJobRenderConfigFormGroup() {
		return new FormGroup<CodegenJobRenderConfigFormProperties>({
		});

	}


	/** Describes the code generation job configuration for a React project. */
	export interface ReactStartCodegenJobData {
		module?: JSModule;
		target?: JSTarget;
		script?: JSScript;
		renderTypeDeclarations?: boolean | null;
		inlineSourceMap?: boolean | null;
		apiConfiguration?: ApiConfiguration;
	}

	/** Describes the code generation job configuration for a React project. */
	export interface ReactStartCodegenJobDataFormProperties {
		module: FormControl<JSModule | null | undefined>,
		target: FormControl<JSTarget | null | undefined>,
		script: FormControl<JSScript | null | undefined>,
		renderTypeDeclarations: FormControl<boolean | null | undefined>,
		inlineSourceMap: FormControl<boolean | null | undefined>,
	}
	export function CreateReactStartCodegenJobDataFormGroup() {
		return new FormGroup<ReactStartCodegenJobDataFormProperties>({
			module: new FormControl<JSModule | null | undefined>(undefined),
			target: new FormControl<JSTarget | null | undefined>(undefined),
			script: new FormControl<JSScript | null | undefined>(undefined),
			renderTypeDeclarations: new FormControl<boolean | null | undefined>(undefined),
			inlineSourceMap: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum JSModule { es2020 = 'es2020', esnext = 'esnext' }

	export enum JSTarget { es2015 = 'es2015', es2020 = 'es2020' }

	export enum JSScript { jsx = 'jsx', tsx = 'tsx', js = 'js' }


	/** Describes the API configuration for a code generation job. */
	export interface ApiConfiguration {
		graphQLConfig?: GraphQLRenderConfig;
		dataStoreConfig?: DataStoreRenderConfig;
		noApiConfig?: NoApiRenderConfig;
	}

	/** Describes the API configuration for a code generation job. */
	export interface ApiConfigurationFormProperties {
	}
	export function CreateApiConfigurationFormGroup() {
		return new FormGroup<ApiConfigurationFormProperties>({
		});

	}


	/** Describes the GraphQL configuration for an API for a code generation job. */
	export interface GraphQLRenderConfig {

		/** Required */
		typesFilePath: string;

		/** Required */
		queriesFilePath: string;

		/** Required */
		mutationsFilePath: string;

		/** Required */
		subscriptionsFilePath: string;

		/** Required */
		fragmentsFilePath: string;
	}

	/** Describes the GraphQL configuration for an API for a code generation job. */
	export interface GraphQLRenderConfigFormProperties {

		/** Required */
		typesFilePath: FormControl<string | null | undefined>,

		/** Required */
		queriesFilePath: FormControl<string | null | undefined>,

		/** Required */
		mutationsFilePath: FormControl<string | null | undefined>,

		/** Required */
		subscriptionsFilePath: FormControl<string | null | undefined>,

		/** Required */
		fragmentsFilePath: FormControl<string | null | undefined>,
	}
	export function CreateGraphQLRenderConfigFormGroup() {
		return new FormGroup<GraphQLRenderConfigFormProperties>({
			typesFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			queriesFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mutationsFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subscriptionsFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			fragmentsFilePath: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes the DataStore configuration for an API for a code generation job. */
	export interface DataStoreRenderConfig {
	}

	/** Describes the DataStore configuration for an API for a code generation job. */
	export interface DataStoreRenderConfigFormProperties {
	}
	export function CreateDataStoreRenderConfigFormGroup() {
		return new FormGroup<DataStoreRenderConfigFormProperties>({
		});

	}


	/** Describes the configuration for an application with no API being used. */
	export interface NoApiRenderConfig {
	}

	/** Describes the configuration for an application with no API being used. */
	export interface NoApiRenderConfigFormProperties {
	}
	export function CreateNoApiRenderConfigFormGroup() {
		return new FormGroup<NoApiRenderConfigFormProperties>({
		});

	}


	/** Describes the data schema for a code generation job. */
	export interface CodegenJobGenericDataSchema {

		/** Required */
		dataSourceType: CodegenJobGenericDataSourceType;

		/** Required */
		models: CodegenGenericDataModels;

		/** Required */
		enums: CodegenGenericDataEnums;

		/** Required */
		nonModels: CodegenGenericDataNonModels;
	}

	/** Describes the data schema for a code generation job. */
	export interface CodegenJobGenericDataSchemaFormProperties {

		/** Required */
		dataSourceType: FormControl<CodegenJobGenericDataSourceType | null | undefined>,
	}
	export function CreateCodegenJobGenericDataSchemaFormGroup() {
		return new FormGroup<CodegenJobGenericDataSchemaFormProperties>({
			dataSourceType: new FormControl<CodegenJobGenericDataSourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum CodegenJobGenericDataSourceType { DataStore = 'DataStore' }

	export interface CodegenGenericDataModels {
	}
	export interface CodegenGenericDataModelsFormProperties {
	}
	export function CreateCodegenGenericDataModelsFormGroup() {
		return new FormGroup<CodegenGenericDataModelsFormProperties>({
		});

	}

	export interface CodegenGenericDataEnums {
	}
	export interface CodegenGenericDataEnumsFormProperties {
	}
	export function CreateCodegenGenericDataEnumsFormGroup() {
		return new FormGroup<CodegenGenericDataEnumsFormProperties>({
		});

	}

	export interface CodegenGenericDataNonModels {
	}
	export interface CodegenGenericDataNonModelsFormProperties {
	}
	export function CreateCodegenGenericDataNonModelsFormGroup() {
		return new FormGroup<CodegenGenericDataNonModelsFormProperties>({
		});

	}


	/** Describes the feature flags that you can specify for a code generation job. */
	export interface CodegenFeatureFlags {
		isRelationshipSupported?: boolean | null;
		isNonModelSupported?: boolean | null;
	}

	/** Describes the feature flags that you can specify for a code generation job. */
	export interface CodegenFeatureFlagsFormProperties {
		isRelationshipSupported: FormControl<boolean | null | undefined>,
		isNonModelSupported: FormControl<boolean | null | undefined>,
	}
	export function CreateCodegenFeatureFlagsFormGroup() {
		return new FormGroup<CodegenFeatureFlagsFormProperties>({
			isRelationshipSupported: new FormControl<boolean | null | undefined>(undefined),
			isNonModelSupported: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CodegenJobStatus { in_progress = 'in_progress', failed = 'failed', succeeded = 'succeeded' }


	/** Describes an asset for a code generation job. */
	export interface CodegenJobAsset {
		downloadUrl?: string;
	}

	/** Describes an asset for a code generation job. */
	export interface CodegenJobAssetFormProperties {
		downloadUrl: FormControl<string | null | undefined>,
	}
	export function CreateCodegenJobAssetFormGroup() {
		return new FormGroup<CodegenJobAssetFormProperties>({
			downloadUrl: new FormControl<string | null | undefined>(undefined),
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

	export interface GetComponentResponse {
		component?: Component;
	}
	export interface GetComponentResponseFormProperties {
	}
	export function CreateGetComponentResponseFormGroup() {
		return new FormGroup<GetComponentResponseFormProperties>({
		});

	}

	export interface GetFormResponse {
		form?: Form;
	}
	export interface GetFormResponseFormProperties {
	}
	export function CreateGetFormResponseFormGroup() {
		return new FormGroup<GetFormResponseFormProperties>({
		});

	}

	export interface GetMetadataResponse {

		/** Required */
		features: FeaturesMap;
	}
	export interface GetMetadataResponseFormProperties {
	}
	export function CreateGetMetadataResponseFormGroup() {
		return new FormGroup<GetMetadataResponseFormProperties>({
		});

	}

	export interface FeaturesMap {
	}
	export interface FeaturesMapFormProperties {
	}
	export function CreateFeaturesMapFormGroup() {
		return new FormGroup<FeaturesMapFormProperties>({
		});

	}

	export interface UnauthorizedException {
	}
	export interface UnauthorizedExceptionFormProperties {
	}
	export function CreateUnauthorizedExceptionFormGroup() {
		return new FormGroup<UnauthorizedExceptionFormProperties>({
		});

	}

	export interface GetThemeResponse {
		theme?: Theme;
	}
	export interface GetThemeResponseFormProperties {
	}
	export function CreateGetThemeResponseFormGroup() {
		return new FormGroup<GetThemeResponseFormProperties>({
		});

	}

	export interface ListCodegenJobsResponse {

		/** Required */
		entities: Array<CodegenJobSummary>;
		nextToken?: string;
	}
	export interface ListCodegenJobsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListCodegenJobsResponseFormGroup() {
		return new FormGroup<ListCodegenJobsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the basic information about the code generation job. */
	export interface CodegenJobSummary {

		/** Required */
		appId: string;

		/** Required */
		environmentName: string;

		/** Required */
		id: string;
		createdAt?: Date;
		modifiedAt?: Date;
	}

	/** A summary of the basic information about the code generation job. */
	export interface CodegenJobSummaryFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		modifiedAt: FormControl<Date | null | undefined>,
	}
	export function CreateCodegenJobSummaryFormGroup() {
		return new FormGroup<CodegenJobSummaryFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			modifiedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ListComponentsResponse {

		/** Required */
		entities: Array<ComponentSummary>;
		nextToken?: string;
	}
	export interface ListComponentsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListComponentsResponseFormGroup() {
		return new FormGroup<ListComponentsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a summary of a component. This is a read-only data type that is returned by <code>ListComponents</code>. */
	export interface ComponentSummary {

		/** Required */
		appId: string;

		/** Required */
		environmentName: string;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		componentType: string;
	}

	/** Contains a summary of a component. This is a read-only data type that is returned by <code>ListComponents</code>. */
	export interface ComponentSummaryFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		componentType: FormControl<string | null | undefined>,
	}
	export function CreateComponentSummaryFormGroup() {
		return new FormGroup<ComponentSummaryFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			componentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListFormsResponse {

		/** Required */
		entities: Array<FormSummary>;
		nextToken?: string;
	}
	export interface ListFormsResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListFormsResponseFormGroup() {
		return new FormGroup<ListFormsResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the basic information about a form. */
	export interface FormSummary {

		/** Required */
		appId: string;

		/** Required */
		dataType: FormDataTypeConfig;

		/** Required */
		environmentName: string;

		/** Required */
		formActionType: FormActionType;

		/** Required */
		id: string;

		/** Required */
		name: string;
	}

	/** Describes the basic information about a form. */
	export interface FormSummaryFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		formActionType: FormControl<FormActionType | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFormSummaryFormGroup() {
		return new FormGroup<FormSummaryFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			formActionType: new FormControl<FormActionType | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListThemesResponse {

		/** Required */
		entities: Array<ThemeSummary>;
		nextToken?: string;
	}
	export interface ListThemesResponseFormProperties {
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateListThemesResponseFormGroup() {
		return new FormGroup<ListThemesResponseFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the basic information about a theme. */
	export interface ThemeSummary {

		/** Required */
		appId: string;

		/** Required */
		environmentName: string;

		/** Required */
		id: string;

		/** Required */
		name: string;
	}

	/** Describes the basic information about a theme. */
	export interface ThemeSummaryFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,

		/** Required */
		environmentName: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateThemeSummaryFormGroup() {
		return new FormGroup<ThemeSummaryFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			environmentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RefreshTokenResponse {

		/** Required */
		accessToken: string;

		/** Required */
		expiresIn: number;
	}
	export interface RefreshTokenResponseFormProperties {

		/** Required */
		accessToken: FormControl<string | null | undefined>,

		/** Required */
		expiresIn: FormControl<number | null | undefined>,
	}
	export function CreateRefreshTokenResponseFormGroup() {
		return new FormGroup<RefreshTokenResponseFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			expiresIn: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface StartCodegenJobResponse {
		entity?: CodegenJob;
	}
	export interface StartCodegenJobResponseFormProperties {
	}
	export function CreateStartCodegenJobResponseFormGroup() {
		return new FormGroup<StartCodegenJobResponseFormProperties>({
		});

	}

	export interface UpdateComponentResponse {
		entity?: Component;
	}
	export interface UpdateComponentResponseFormProperties {
	}
	export function CreateUpdateComponentResponseFormGroup() {
		return new FormGroup<UpdateComponentResponseFormProperties>({
		});

	}

	export interface UpdateFormResponse {
		entity?: Form;
	}
	export interface UpdateFormResponseFormProperties {
	}
	export function CreateUpdateFormResponseFormGroup() {
		return new FormGroup<UpdateFormResponseFormProperties>({
		});

	}

	export interface UpdateThemeResponse {
		entity?: Theme;
	}
	export interface UpdateThemeResponseFormProperties {
	}
	export function CreateUpdateThemeResponseFormGroup() {
		return new FormGroup<UpdateThemeResponseFormProperties>({
		});

	}


	/** Describes the configuration for all of a component's properties. Use <code>ComponentProperty</code> to specify the values to render or bind by default. */
	export interface ComponentProperty {
		value?: string;
		bindingProperties?: ComponentPropertyBindingProperties;
		collectionBindingProperties?: ComponentPropertyBindingProperties;
		defaultValue?: string;
		model?: string;
		bindings?: FormBindings;
		event?: string;
		userAttribute?: string;
		concat?: Array<ComponentProperty>;
		condition?: ComponentConditionProperty;
		configured?: boolean | null;
		type?: string;
		importedValue?: string;
		componentName?: string;
		property?: string;
	}

	/** Describes the configuration for all of a component's properties. Use <code>ComponentProperty</code> to specify the values to render or bind by default. */
	export interface ComponentPropertyFormProperties {
		value: FormControl<string | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
		model: FormControl<string | null | undefined>,
		event: FormControl<string | null | undefined>,
		userAttribute: FormControl<string | null | undefined>,
		configured: FormControl<boolean | null | undefined>,
		type: FormControl<string | null | undefined>,
		importedValue: FormControl<string | null | undefined>,
		componentName: FormControl<string | null | undefined>,
		property: FormControl<string | null | undefined>,
	}
	export function CreateComponentPropertyFormGroup() {
		return new FormGroup<ComponentPropertyFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			model: new FormControl<string | null | undefined>(undefined),
			event: new FormControl<string | null | undefined>(undefined),
			userAttribute: new FormControl<string | null | undefined>(undefined),
			configured: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			importedValue: new FormControl<string | null | undefined>(undefined),
			componentName: new FormControl<string | null | undefined>(undefined),
			property: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Associates a component property to a binding property. This enables exposed properties on the top level component to propagate data to the component's property values. */
	export interface ComponentPropertyBindingProperties {

		/** Required */
		property: string;
		field?: string;
	}

	/** Associates a component property to a binding property. This enables exposed properties on the top level component to propagate data to the component's property values. */
	export interface ComponentPropertyBindingPropertiesFormProperties {

		/** Required */
		property: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
	}
	export function CreateComponentPropertyBindingPropertiesFormGroup() {
		return new FormGroup<ComponentPropertyBindingPropertiesFormProperties>({
			property: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			field: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FormBindings {
	}
	export interface FormBindingsFormProperties {
	}
	export function CreateFormBindingsFormGroup() {
		return new FormGroup<FormBindingsFormProperties>({
		});

	}


	/** Represents a conditional expression to set a component property. Use <code>ComponentConditionProperty</code> to set a property to different values conditionally, based on the value of another property. */
	export interface ComponentConditionProperty {
		property?: string;
		field?: string;
		operator?: string;
		operand?: string;
		then?: ComponentProperty;
		else?: ComponentProperty;
		operandType?: string;
	}

	/** Represents a conditional expression to set a component property. Use <code>ComponentConditionProperty</code> to set a property to different values conditionally, based on the value of another property. */
	export interface ComponentConditionPropertyFormProperties {
		property: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		operator: FormControl<string | null | undefined>,
		operand: FormControl<string | null | undefined>,
		operandType: FormControl<string | null | undefined>,
	}
	export function CreateComponentConditionPropertyFormGroup() {
		return new FormGroup<ComponentConditionPropertyFormProperties>({
			property: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			operand: new FormControl<string | null | undefined>(undefined),
			operandType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComponentProperties {
	}
	export interface ComponentPropertiesFormProperties {
	}
	export function CreateComponentPropertiesFormGroup() {
		return new FormGroup<ComponentPropertiesFormProperties>({
		});

	}


	/** Represents the state configuration when an action modifies a property of another element within the same component. */
	export interface MutationActionSetStateParameter {

		/** Required */
		componentName: string;

		/** Required */
		property: string;

		/** Required */
		set: ComponentProperty;
	}

	/** Represents the state configuration when an action modifies a property of another element within the same component. */
	export interface MutationActionSetStateParameterFormProperties {

		/** Required */
		componentName: FormControl<string | null | undefined>,

		/** Required */
		property: FormControl<string | null | undefined>,
	}
	export function CreateMutationActionSetStateParameterFormGroup() {
		return new FormGroup<MutationActionSetStateParameterFormProperties>({
			componentName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			property: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the event action configuration for an element of a <code>Component</code> or <code>ComponentChild</code>. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components. <code>ActionParameters</code> defines the action that is performed when an event occurs on the component. */
	export interface ActionParameters {
		type?: ComponentProperty;
		url?: ComponentProperty;
		anchor?: ComponentProperty;
		target?: ComponentProperty;
		global?: ComponentProperty;
		model?: string;
		id?: ComponentProperty;
		fields?: ComponentProperties;
		state?: MutationActionSetStateParameter;
	}

	/** Represents the event action configuration for an element of a <code>Component</code> or <code>ComponentChild</code>. Use for the workflow feature in Amplify Studio that allows you to bind events and actions to components. <code>ActionParameters</code> defines the action that is performed when an event occurs on the component. */
	export interface ActionParametersFormProperties {
		model: FormControl<string | null | undefined>,
	}
	export function CreateActionParametersFormGroup() {
		return new FormGroup<ActionParametersFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the enums in a generic data schema. */
	export interface CodegenGenericDataEnum {

		/** Required */
		values: Array<string>;
	}

	/** Describes the enums in a generic data schema. */
	export interface CodegenGenericDataEnumFormProperties {
	}
	export function CreateCodegenGenericDataEnumFormGroup() {
		return new FormGroup<CodegenGenericDataEnumFormProperties>({
		});

	}

	export enum CodegenGenericDataFieldDataType { ID = 'ID', String = 'String', Int = 'Int', Float = 'Float', AWSDate = 'AWSDate', AWSTime = 'AWSTime', AWSDateTime = 'AWSDateTime', AWSTimestamp = 'AWSTimestamp', AWSEmail = 'AWSEmail', AWSURL = 'AWSURL', AWSIPAddress = 'AWSIPAddress', Boolean = 'Boolean', AWSJSON = 'AWSJSON', AWSPhone = 'AWSPhone', Enum = 'Enum', Model = 'Model', NonModel = 'NonModel' }


	/** Describes the relationship between generic data models. */
	export interface CodegenGenericDataRelationshipType {

		/** Required */
		type: GenericDataRelationshipType;

		/** Required */
		relatedModelName: string;
		relatedModelFields?: Array<string>;
		canUnlinkAssociatedModel?: boolean | null;
		relatedJoinFieldName?: string;
		relatedJoinTableName?: string;
		belongsToFieldOnRelatedModel?: string;
		associatedFields?: Array<string>;
		isHasManyIndex?: boolean | null;
	}

	/** Describes the relationship between generic data models. */
	export interface CodegenGenericDataRelationshipTypeFormProperties {

		/** Required */
		type: FormControl<GenericDataRelationshipType | null | undefined>,

		/** Required */
		relatedModelName: FormControl<string | null | undefined>,
		canUnlinkAssociatedModel: FormControl<boolean | null | undefined>,
		relatedJoinFieldName: FormControl<string | null | undefined>,
		relatedJoinTableName: FormControl<string | null | undefined>,
		belongsToFieldOnRelatedModel: FormControl<string | null | undefined>,
		isHasManyIndex: FormControl<boolean | null | undefined>,
	}
	export function CreateCodegenGenericDataRelationshipTypeFormGroup() {
		return new FormGroup<CodegenGenericDataRelationshipTypeFormProperties>({
			type: new FormControl<GenericDataRelationshipType | null | undefined>(undefined, [Validators.required]),
			relatedModelName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			canUnlinkAssociatedModel: new FormControl<boolean | null | undefined>(undefined),
			relatedJoinFieldName: new FormControl<string | null | undefined>(undefined),
			relatedJoinTableName: new FormControl<string | null | undefined>(undefined),
			belongsToFieldOnRelatedModel: new FormControl<string | null | undefined>(undefined),
			isHasManyIndex: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GenericDataRelationshipType { HAS_MANY = 'HAS_MANY', HAS_ONE = 'HAS_ONE', BELONGS_TO = 'BELONGS_TO' }


	/** Describes a field in a generic data schema. */
	export interface CodegenGenericDataField {

		/** Required */
		dataType: CodegenGenericDataFieldDataType;

		/** Required */
		dataTypeValue: string;

		/** Required */
		required: boolean;

		/** Required */
		readOnly: boolean;

		/** Required */
		isArray: boolean;
		relationship?: CodegenGenericDataRelationshipType;
	}

	/** Describes a field in a generic data schema. */
	export interface CodegenGenericDataFieldFormProperties {

		/** Required */
		dataType: FormControl<CodegenGenericDataFieldDataType | null | undefined>,

		/** Required */
		dataTypeValue: FormControl<string | null | undefined>,

		/** Required */
		required: FormControl<boolean | null | undefined>,

		/** Required */
		readOnly: FormControl<boolean | null | undefined>,

		/** Required */
		isArray: FormControl<boolean | null | undefined>,
	}
	export function CreateCodegenGenericDataFieldFormGroup() {
		return new FormGroup<CodegenGenericDataFieldFormProperties>({
			dataType: new FormControl<CodegenGenericDataFieldDataType | null | undefined>(undefined, [Validators.required]),
			dataTypeValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			required: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			readOnly: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			isArray: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CodegenGenericDataFields {
	}
	export interface CodegenGenericDataFieldsFormProperties {
	}
	export function CreateCodegenGenericDataFieldsFormGroup() {
		return new FormGroup<CodegenGenericDataFieldsFormProperties>({
		});

	}


	/** Describes a model in a generic data schema. */
	export interface CodegenGenericDataModel {

		/** Required */
		fields: CodegenGenericDataFields;
		isJoinTable?: boolean | null;

		/** Required */
		primaryKeys: Array<string>;
	}

	/** Describes a model in a generic data schema. */
	export interface CodegenGenericDataModelFormProperties {
		isJoinTable: FormControl<boolean | null | undefined>,
	}
	export function CreateCodegenGenericDataModelFormGroup() {
		return new FormGroup<CodegenGenericDataModelFormProperties>({
			isJoinTable: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CodegenGenericDataNonModelFields {
	}
	export interface CodegenGenericDataNonModelFieldsFormProperties {
	}
	export function CreateCodegenGenericDataNonModelFieldsFormGroup() {
		return new FormGroup<CodegenGenericDataNonModelFieldsFormProperties>({
		});

	}


	/** Describes a non-model in a generic data schema. */
	export interface CodegenGenericDataNonModel {

		/** Required */
		fields: CodegenGenericDataNonModelFields;
	}

	/** Describes a non-model in a generic data schema. */
	export interface CodegenGenericDataNonModelFormProperties {
	}
	export function CreateCodegenGenericDataNonModelFormGroup() {
		return new FormGroup<CodegenGenericDataNonModelFormProperties>({
		});

	}


	/** Represents the data binding configuration for a component at runtime. You can use <code>ComponentBindingPropertiesValue</code> to add exposed properties to a component to allow different values to be entered when a component is reused in different places in an app. */
	export interface ComponentBindingPropertiesValue {
		type?: string;
		bindingProperties?: ComponentBindingPropertiesValueProperties;
		defaultValue?: string;
	}

	/** Represents the data binding configuration for a component at runtime. You can use <code>ComponentBindingPropertiesValue</code> to add exposed properties to a component to allow different values to be entered when a component is reused in different places in an app. */
	export interface ComponentBindingPropertiesValueFormProperties {
		type: FormControl<string | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
	}
	export function CreateComponentBindingPropertiesValueFormGroup() {
		return new FormGroup<ComponentBindingPropertiesValueFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the data binding configuration for a specific property using data stored in Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to data stored in an Amazon S3 bucket, an Amplify DataStore model or an authenticated user attribute. */
	export interface ComponentBindingPropertiesValueProperties {
		model?: string;
		field?: string;
		predicates?: Array<Predicate>;
		userAttribute?: string;
		bucket?: string;
		key?: string;
		defaultValue?: string;
		slotName?: string;
	}

	/** Represents the data binding configuration for a specific property using data stored in Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to data stored in an Amazon S3 bucket, an Amplify DataStore model or an authenticated user attribute. */
	export interface ComponentBindingPropertiesValuePropertiesFormProperties {
		model: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
		userAttribute: FormControl<string | null | undefined>,
		bucket: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
		slotName: FormControl<string | null | undefined>,
	}
	export function CreateComponentBindingPropertiesValuePropertiesFormGroup() {
		return new FormGroup<ComponentBindingPropertiesValuePropertiesFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			userAttribute: new FormControl<string | null | undefined>(undefined),
			bucket: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			slotName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Stores information for generating Amplify DataStore queries. Use a <code>Predicate</code> to retrieve a subset of the data in a collection. */
	export interface Predicate {
		or?: Array<Predicate>;
		and?: Array<Predicate>;
		field?: string;
		operator?: string;
		operand?: string;
		operandType?: string;
	}

	/** Stores information for generating Amplify DataStore queries. Use a <code>Predicate</code> to retrieve a subset of the data in a collection. */
	export interface PredicateFormProperties {
		field: FormControl<string | null | undefined>,
		operator: FormControl<string | null | undefined>,
		operand: FormControl<string | null | undefined>,
		operandType: FormControl<string | null | undefined>,
	}
	export function CreatePredicateFormGroup() {
		return new FormGroup<PredicateFormProperties>({
			field: new FormControl<string | null | undefined>(undefined),
			operator: new FormControl<string | null | undefined>(undefined),
			operand: new FormControl<string | null | undefined>(undefined),
			operandType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the configuration for binding a component's properties to data. */
	export interface ComponentDataConfiguration {

		/** Required */
		model: string;
		sort?: Array<SortProperty>;
		predicate?: Predicate;
		identifiers?: Array<string>;
	}

	/** Describes the configuration for binding a component's properties to data. */
	export interface ComponentDataConfigurationFormProperties {

		/** Required */
		model: FormControl<string | null | undefined>,
	}
	export function CreateComponentDataConfigurationFormGroup() {
		return new FormGroup<ComponentDataConfigurationFormProperties>({
			model: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Describes how to sort the data that you bind to a component. */
	export interface SortProperty {

		/** Required */
		field: string;

		/** Required */
		direction: SortDirection;
	}

	/** Describes how to sort the data that you bind to a component. */
	export interface SortPropertyFormProperties {

		/** Required */
		field: FormControl<string | null | undefined>,

		/** Required */
		direction: FormControl<SortDirection | null | undefined>,
	}
	export function CreateSortPropertyFormGroup() {
		return new FormGroup<SortPropertyFormProperties>({
			field: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			direction: new FormControl<SortDirection | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SortDirection { ASC = 'ASC', DESC = 'DESC' }


	/** Describes the configuration of an event. You can bind an event and a corresponding action to a <code>Component</code> or a <code>ComponentChild</code>. A button click is an example of an event.  */
	export interface ComponentEvent {
		action?: string;
		parameters?: ActionParameters;
		bindingEvent?: string;
	}

	/** Describes the configuration of an event. You can bind an event and a corresponding action to a <code>Component</code> or a <code>ComponentChild</code>. A button click is an example of an event.  */
	export interface ComponentEventFormProperties {
		action: FormControl<string | null | undefined>,
		bindingEvent: FormControl<string | null | undefined>,
	}
	export function CreateComponentEventFormGroup() {
		return new FormGroup<ComponentEventFormProperties>({
			action: new FormControl<string | null | undefined>(undefined),
			bindingEvent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ComponentOverridesValue {
	}
	export interface ComponentOverridesValueFormProperties {
	}
	export function CreateComponentOverridesValueFormGroup() {
		return new FormGroup<ComponentOverridesValueFormProperties>({
		});

	}


	/** Represents all of the information that is required to create a component. */
	export interface CreateComponentData {

		/** Required */
		name: string;
		sourceId?: string;

		/** Required */
		componentType: string;

		/**
		 * Describes the component's properties.
		 * Required
		 */
		properties: any;
		children?: Array<ComponentChild>;

		/** Required */
		variants: Array<ComponentVariant>;

		/** Required */
		overrides: ComponentOverrides;

		/** Required */
		bindingProperties: ComponentBindingProperties;
		collectionProperties?: ComponentCollectionProperties;
		tags?: Tags;
		events?: ComponentEvents;
		schemaVersion?: string;
	}

	/** Represents all of the information that is required to create a component. */
	export interface CreateComponentDataFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,

		/** Required */
		componentType: FormControl<string | null | undefined>,

		/**
		 * Describes the component's properties.
		 * Required
		 */
		properties: FormControl<any | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentDataFormGroup() {
		return new FormGroup<CreateComponentDataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sourceId: new FormControl<string | null | undefined>(undefined),
			componentType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			properties: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateComponentRequest {

		/** Required */
		componentToCreate: CreateComponentData;
	}
	export interface CreateComponentRequestFormProperties {
	}
	export function CreateCreateComponentRequestFormGroup() {
		return new FormGroup<CreateComponentRequestFormProperties>({
		});

	}


	/** Represents all of the information that is required to create a form. */
	export interface CreateFormData {

		/** Required */
		name: string;

		/** Required */
		dataType: FormDataTypeConfig;

		/** Required */
		formActionType: FormActionType;

		/** Required */
		fields: FieldsMap;

		/** Required */
		style: FormStyle;

		/** Required */
		sectionalElements: SectionalElementMap;

		/** Required */
		schemaVersion: string;
		cta?: FormCTA;
		tags?: Tags;
		labelDecorator?: LabelDecorator;
	}

	/** Represents all of the information that is required to create a form. */
	export interface CreateFormDataFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		formActionType: FormControl<FormActionType | null | undefined>,

		/** Required */
		schemaVersion: FormControl<string | null | undefined>,
		labelDecorator: FormControl<LabelDecorator | null | undefined>,
	}
	export function CreateCreateFormDataFormGroup() {
		return new FormGroup<CreateFormDataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			formActionType: new FormControl<FormActionType | null | undefined>(undefined, [Validators.required]),
			schemaVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			labelDecorator: new FormControl<LabelDecorator | null | undefined>(undefined),
		});

	}

	export interface CreateFormRequest {

		/** Required */
		formToCreate: CreateFormData;
	}
	export interface CreateFormRequestFormProperties {
	}
	export function CreateCreateFormRequestFormGroup() {
		return new FormGroup<CreateFormRequestFormProperties>({
		});

	}


	/** Represents all of the information that is required to create a theme. */
	export interface CreateThemeData {

		/** Required */
		name: string;

		/** Required */
		values: Array<ThemeValues>;
		overrides?: Array<ThemeValues>;
		tags?: Tags;
	}

	/** Represents all of the information that is required to create a theme. */
	export interface CreateThemeDataFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateThemeDataFormGroup() {
		return new FormGroup<CreateThemeDataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreateThemeRequest {

		/** Required */
		themeToCreate: CreateThemeData;
	}
	export interface CreateThemeRequestFormProperties {
	}
	export function CreateCreateThemeRequestFormGroup() {
		return new FormGroup<CreateThemeRequestFormProperties>({
		});

	}

	export interface DeleteComponentRequest {
	}
	export interface DeleteComponentRequestFormProperties {
	}
	export function CreateDeleteComponentRequestFormGroup() {
		return new FormGroup<DeleteComponentRequestFormProperties>({
		});

	}

	export interface DeleteFormRequest {
	}
	export interface DeleteFormRequestFormProperties {
	}
	export function CreateDeleteFormRequestFormGroup() {
		return new FormGroup<DeleteFormRequestFormProperties>({
		});

	}

	export interface DeleteThemeRequest {
	}
	export interface DeleteThemeRequestFormProperties {
	}
	export function CreateDeleteThemeRequestFormGroup() {
		return new FormGroup<DeleteThemeRequestFormProperties>({
		});

	}

	export enum TokenProviders { figma = 'figma' }


	/** Describes the configuration of a request to exchange an access code for a token. */
	export interface ExchangeCodeForTokenRequestBody {

		/** Required */
		code: string;

		/** Required */
		redirectUri: string;
		clientId?: string;
	}

	/** Describes the configuration of a request to exchange an access code for a token. */
	export interface ExchangeCodeForTokenRequestBodyFormProperties {

		/** Required */
		code: FormControl<string | null | undefined>,

		/** Required */
		redirectUri: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
	}
	export function CreateExchangeCodeForTokenRequestBodyFormGroup() {
		return new FormGroup<ExchangeCodeForTokenRequestBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			redirectUri: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExchangeCodeForTokenRequest {

		/** Required */
		request: ExchangeCodeForTokenRequestBody;
	}
	export interface ExchangeCodeForTokenRequestFormProperties {
	}
	export function CreateExchangeCodeForTokenRequestFormGroup() {
		return new FormGroup<ExchangeCodeForTokenRequestFormProperties>({
		});

	}

	export interface ExportComponentsRequest {
	}
	export interface ExportComponentsRequestFormProperties {
	}
	export function CreateExportComponentsRequestFormGroup() {
		return new FormGroup<ExportComponentsRequestFormProperties>({
		});

	}

	export interface ExportFormsRequest {
	}
	export interface ExportFormsRequestFormProperties {
	}
	export function CreateExportFormsRequestFormGroup() {
		return new FormGroup<ExportFormsRequestFormProperties>({
		});

	}

	export interface ExportThemesRequest {
	}
	export interface ExportThemesRequestFormProperties {
	}
	export function CreateExportThemesRequestFormGroup() {
		return new FormGroup<ExportThemesRequestFormProperties>({
		});

	}


	/** Describes the configuration for the default input values to display for a field. */
	export interface FieldInputConfig {

		/** Required */
		type: string;
		required?: boolean | null;
		readOnly?: boolean | null;
		placeholder?: string;
		defaultValue?: string;
		descriptiveText?: string;
		defaultChecked?: boolean | null;
		defaultCountryCode?: string;
		valueMappings?: ValueMappings;
		name?: string;
		minValue?: number;
		maxValue?: number;
		step?: number;
		value?: string;
		isArray?: boolean | null;
		fileUploaderConfig?: FileUploaderFieldConfig;
	}

	/** Describes the configuration for the default input values to display for a field. */
	export interface FieldInputConfigFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
		required: FormControl<boolean | null | undefined>,
		readOnly: FormControl<boolean | null | undefined>,
		placeholder: FormControl<string | null | undefined>,
		defaultValue: FormControl<string | null | undefined>,
		descriptiveText: FormControl<string | null | undefined>,
		defaultChecked: FormControl<boolean | null | undefined>,
		defaultCountryCode: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		minValue: FormControl<number | null | undefined>,
		maxValue: FormControl<number | null | undefined>,
		step: FormControl<number | null | undefined>,
		value: FormControl<string | null | undefined>,
		isArray: FormControl<boolean | null | undefined>,
	}
	export function CreateFieldInputConfigFormGroup() {
		return new FormGroup<FieldInputConfigFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			required: new FormControl<boolean | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			placeholder: new FormControl<string | null | undefined>(undefined),
			defaultValue: new FormControl<string | null | undefined>(undefined),
			descriptiveText: new FormControl<string | null | undefined>(undefined),
			defaultChecked: new FormControl<boolean | null | undefined>(undefined),
			defaultCountryCode: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
			step: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
			isArray: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents the data binding configuration for a value map. */
	export interface ValueMappings {

		/** Required */
		values: Array<ValueMapping>;
		bindingProperties?: FormInputBindingProperties;
	}

	/** Represents the data binding configuration for a value map. */
	export interface ValueMappingsFormProperties {
	}
	export function CreateValueMappingsFormGroup() {
		return new FormGroup<ValueMappingsFormProperties>({
		});

	}


	/** Associates a complex object with a display value. Use <code>ValueMapping</code> to store how to represent complex objects when they are displayed. */
	export interface ValueMapping {
		displayValue?: FormInputValueProperty;

		/** Required */
		value: FormInputValueProperty;
	}

	/** Associates a complex object with a display value. Use <code>ValueMapping</code> to store how to represent complex objects when they are displayed. */
	export interface ValueMappingFormProperties {
	}
	export function CreateValueMappingFormGroup() {
		return new FormGroup<ValueMappingFormProperties>({
		});

	}


	/** Describes the configuration for an input field on a form. Use <code>FormInputValueProperty</code> to specify the values to render or bind by default. */
	export interface FormInputValueProperty {
		value?: string;
		bindingProperties?: FormInputValuePropertyBindingProperties;
		concat?: Array<FormInputValueProperty>;
	}

	/** Describes the configuration for an input field on a form. Use <code>FormInputValueProperty</code> to specify the values to render or bind by default. */
	export interface FormInputValuePropertyFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateFormInputValuePropertyFormGroup() {
		return new FormGroup<FormInputValuePropertyFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Associates a form property to a binding property. This enables exposed properties on the top level form to propagate data to the form's property values. */
	export interface FormInputValuePropertyBindingProperties {

		/** Required */
		property: string;
		field?: string;
	}

	/** Associates a form property to a binding property. This enables exposed properties on the top level form to propagate data to the form's property values. */
	export interface FormInputValuePropertyBindingPropertiesFormProperties {

		/** Required */
		property: FormControl<string | null | undefined>,
		field: FormControl<string | null | undefined>,
	}
	export function CreateFormInputValuePropertyBindingPropertiesFormGroup() {
		return new FormGroup<FormInputValuePropertyBindingPropertiesFormProperties>({
			property: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			field: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FormInputBindingProperties {
	}
	export interface FormInputBindingPropertiesFormProperties {
	}
	export function CreateFormInputBindingPropertiesFormGroup() {
		return new FormGroup<FormInputBindingPropertiesFormProperties>({
		});

	}


	/** Describes the configuration for the file uploader field. */
	export interface FileUploaderFieldConfig {

		/** Required */
		accessLevel: StorageAccessLevel;

		/** Required */
		acceptedFileTypes: Array<string>;
		showThumbnails?: boolean | null;
		isResumable?: boolean | null;
		maxFileCount?: number | null;
		maxSize?: number | null;
	}

	/** Describes the configuration for the file uploader field. */
	export interface FileUploaderFieldConfigFormProperties {

		/** Required */
		accessLevel: FormControl<StorageAccessLevel | null | undefined>,
		showThumbnails: FormControl<boolean | null | undefined>,
		isResumable: FormControl<boolean | null | undefined>,
		maxFileCount: FormControl<number | null | undefined>,
		maxSize: FormControl<number | null | undefined>,
	}
	export function CreateFileUploaderFieldConfigFormGroup() {
		return new FormGroup<FileUploaderFieldConfigFormProperties>({
			accessLevel: new FormControl<StorageAccessLevel | null | undefined>(undefined, [Validators.required]),
			showThumbnails: new FormControl<boolean | null | undefined>(undefined),
			isResumable: new FormControl<boolean | null | undefined>(undefined),
			maxFileCount: new FormControl<number | null | undefined>(undefined),
			maxSize: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StorageAccessLevel { public = 'public', protected = 'protected', private = 'private' }


	/** Describes the validation configuration for a field. */
	export interface FieldValidationConfiguration {

		/** Required */
		type: string;
		strValues?: Array<string>;
		numValues?: Array<number> | null;
		validationMessage?: string;
	}

	/** Describes the validation configuration for a field. */
	export interface FieldValidationConfigurationFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
		validationMessage: FormControl<string | null | undefined>,
	}
	export function CreateFieldValidationConfigurationFormGroup() {
		return new FormGroup<FieldValidationConfigurationFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			validationMessage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the configuration information for a field in a table. */
	export interface FieldConfig {
		label?: string;
		position?: FieldPosition;
		excluded?: boolean | null;
		inputType?: FieldInputConfig;
		validations?: Array<FieldValidationConfiguration>;
	}

	/** Describes the configuration information for a field in a table. */
	export interface FieldConfigFormProperties {
		label: FormControl<string | null | undefined>,
		excluded: FormControl<boolean | null | undefined>,
	}
	export function CreateFieldConfigFormGroup() {
		return new FormGroup<FieldConfigFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			excluded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Describes how to bind a component property to form data. */
	export interface FormBindingElement {

		/** Required */
		element: string;

		/** Required */
		property: string;
	}

	/** Describes how to bind a component property to form data. */
	export interface FormBindingElementFormProperties {

		/** Required */
		element: FormControl<string | null | undefined>,

		/** Required */
		property: FormControl<string | null | undefined>,
	}
	export function CreateFormBindingElementFormGroup() {
		return new FormGroup<FormBindingElementFormProperties>({
			element: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			property: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Represents the data binding configuration for a form's input fields at runtime.You can use <code>FormInputBindingPropertiesValue</code> to add exposed properties to a form to allow different values to be entered when a form is reused in different places in an app. */
	export interface FormInputBindingPropertiesValue {
		type?: string;
		bindingProperties?: FormInputBindingPropertiesValueProperties;
	}

	/** Represents the data binding configuration for a form's input fields at runtime.You can use <code>FormInputBindingPropertiesValue</code> to add exposed properties to a form to allow different values to be entered when a form is reused in different places in an app. */
	export interface FormInputBindingPropertiesValueFormProperties {
		type: FormControl<string | null | undefined>,
	}
	export function CreateFormInputBindingPropertiesValueFormGroup() {
		return new FormGroup<FormInputBindingPropertiesValueFormProperties>({
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the data binding configuration for a specific property using data stored in Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to data stored in an Amplify DataStore model. */
	export interface FormInputBindingPropertiesValueProperties {
		model?: string;
	}

	/** Represents the data binding configuration for a specific property using data stored in Amazon Web Services. For Amazon Web Services connected properties, you can bind a property to data stored in an Amplify DataStore model. */
	export interface FormInputBindingPropertiesValuePropertiesFormProperties {
		model: FormControl<string | null | undefined>,
	}
	export function CreateFormInputBindingPropertiesValuePropertiesFormGroup() {
		return new FormGroup<FormInputBindingPropertiesValuePropertiesFormProperties>({
			model: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetCodegenJobRequest {
	}
	export interface GetCodegenJobRequestFormProperties {
	}
	export function CreateGetCodegenJobRequestFormGroup() {
		return new FormGroup<GetCodegenJobRequestFormProperties>({
		});

	}

	export interface GetComponentRequest {
	}
	export interface GetComponentRequestFormProperties {
	}
	export function CreateGetComponentRequestFormGroup() {
		return new FormGroup<GetComponentRequestFormProperties>({
		});

	}

	export interface GetFormRequest {
	}
	export interface GetFormRequestFormProperties {
	}
	export function CreateGetFormRequestFormGroup() {
		return new FormGroup<GetFormRequestFormProperties>({
		});

	}

	export interface GetMetadataRequest {
	}
	export interface GetMetadataRequestFormProperties {
	}
	export function CreateGetMetadataRequestFormGroup() {
		return new FormGroup<GetMetadataRequestFormProperties>({
		});

	}

	export interface GetThemeRequest {
	}
	export interface GetThemeRequestFormProperties {
	}
	export function CreateGetThemeRequestFormGroup() {
		return new FormGroup<GetThemeRequestFormProperties>({
		});

	}

	export interface ListCodegenJobsRequest {
	}
	export interface ListCodegenJobsRequestFormProperties {
	}
	export function CreateListCodegenJobsRequestFormGroup() {
		return new FormGroup<ListCodegenJobsRequestFormProperties>({
		});

	}

	export interface ListComponentsRequest {
	}
	export interface ListComponentsRequestFormProperties {
	}
	export function CreateListComponentsRequestFormGroup() {
		return new FormGroup<ListComponentsRequestFormProperties>({
		});

	}

	export interface ListFormsRequest {
	}
	export interface ListFormsRequestFormProperties {
	}
	export function CreateListFormsRequestFormGroup() {
		return new FormGroup<ListFormsRequestFormProperties>({
		});

	}

	export interface ListThemesRequest {
	}
	export interface ListThemesRequestFormProperties {
	}
	export function CreateListThemesRequestFormGroup() {
		return new FormGroup<ListThemesRequestFormProperties>({
		});

	}


	/** Stores the metadata information about a feature on a form. */
	export interface PutMetadataFlagBody {

		/** Required */
		newValue: string;
	}

	/** Stores the metadata information about a feature on a form. */
	export interface PutMetadataFlagBodyFormProperties {

		/** Required */
		newValue: FormControl<string | null | undefined>,
	}
	export function CreatePutMetadataFlagBodyFormGroup() {
		return new FormGroup<PutMetadataFlagBodyFormProperties>({
			newValue: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PutMetadataFlagRequest {

		/** Required */
		body: PutMetadataFlagBody;
	}
	export interface PutMetadataFlagRequestFormProperties {
	}
	export function CreatePutMetadataFlagRequestFormGroup() {
		return new FormGroup<PutMetadataFlagRequestFormProperties>({
		});

	}


	/** Describes a refresh token. */
	export interface RefreshTokenRequestBody {

		/** Required */
		token: string;
		clientId?: string;
	}

	/** Describes a refresh token. */
	export interface RefreshTokenRequestBodyFormProperties {

		/** Required */
		token: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
	}
	export function CreateRefreshTokenRequestBodyFormGroup() {
		return new FormGroup<RefreshTokenRequestBodyFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RefreshTokenRequest {

		/** Required */
		refreshTokenBody: RefreshTokenRequestBody;
	}
	export interface RefreshTokenRequestFormProperties {
	}
	export function CreateRefreshTokenRequestFormGroup() {
		return new FormGroup<RefreshTokenRequestFormProperties>({
		});

	}


	/** Stores the configuration information for a visual helper element for a form. A sectional element can be a header, a text block, or a divider. These elements are static and not associated with any data. */
	export interface SectionalElement {

		/** Required */
		type: string;
		position?: FieldPosition;
		text?: string;
		level?: number | null;
		orientation?: string;
		excluded?: boolean | null;
	}

	/** Stores the configuration information for a visual helper element for a form. A sectional element can be a header, a text block, or a divider. These elements are static and not associated with any data. */
	export interface SectionalElementFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		level: FormControl<number | null | undefined>,
		orientation: FormControl<string | null | undefined>,
		excluded: FormControl<boolean | null | undefined>,
	}
	export function CreateSectionalElementFormGroup() {
		return new FormGroup<SectionalElementFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			text: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<number | null | undefined>(undefined),
			orientation: new FormControl<string | null | undefined>(undefined),
			excluded: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The code generation job resource configuration. */
	export interface StartCodegenJobData {

		/** Required */
		renderConfig: CodegenJobRenderConfig;
		genericDataSchema?: CodegenJobGenericDataSchema;
		autoGenerateForms?: boolean | null;
		features?: CodegenFeatureFlags;
		tags?: Tags;
	}

	/** The code generation job resource configuration. */
	export interface StartCodegenJobDataFormProperties {
		autoGenerateForms: FormControl<boolean | null | undefined>,
	}
	export function CreateStartCodegenJobDataFormGroup() {
		return new FormGroup<StartCodegenJobDataFormProperties>({
			autoGenerateForms: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface StartCodegenJobRequest {

		/** Required */
		codegenJobToCreate: StartCodegenJobData;
	}
	export interface StartCodegenJobRequestFormProperties {
	}
	export function CreateStartCodegenJobRequestFormGroup() {
		return new FormGroup<StartCodegenJobRequestFormProperties>({
		});

	}


	/** Updates and saves all of the information about a component, based on component ID. */
	export interface UpdateComponentData {
		id?: string;
		name?: string;
		sourceId?: string;
		componentType?: string;

		/** Describes the component's properties. */
		properties?: any;
		children?: Array<ComponentChild>;
		variants?: Array<ComponentVariant>;
		overrides?: ComponentOverrides;
		bindingProperties?: ComponentBindingProperties;
		collectionProperties?: ComponentCollectionProperties;
		events?: ComponentEvents;
		schemaVersion?: string;
	}

	/** Updates and saves all of the information about a component, based on component ID. */
	export interface UpdateComponentDataFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,
		componentType: FormControl<string | null | undefined>,

		/** Describes the component's properties. */
		properties: FormControl<any | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComponentDataFormGroup() {
		return new FormGroup<UpdateComponentDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			componentType: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateComponentRequest {

		/** Required */
		updatedComponent: UpdateComponentData;
	}
	export interface UpdateComponentRequestFormProperties {
	}
	export function CreateUpdateComponentRequestFormGroup() {
		return new FormGroup<UpdateComponentRequestFormProperties>({
		});

	}


	/** Updates and saves all of the information about a form, based on form ID. */
	export interface UpdateFormData {
		name?: string;
		dataType?: FormDataTypeConfig;
		formActionType?: FormActionType;
		fields?: FieldsMap;
		style?: FormStyle;
		sectionalElements?: SectionalElementMap;
		schemaVersion?: string;
		cta?: FormCTA;
		labelDecorator?: LabelDecorator;
	}

	/** Updates and saves all of the information about a form, based on form ID. */
	export interface UpdateFormDataFormProperties {
		name: FormControl<string | null | undefined>,
		formActionType: FormControl<FormActionType | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
		labelDecorator: FormControl<LabelDecorator | null | undefined>,
	}
	export function CreateUpdateFormDataFormGroup() {
		return new FormGroup<UpdateFormDataFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			formActionType: new FormControl<FormActionType | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
			labelDecorator: new FormControl<LabelDecorator | null | undefined>(undefined),
		});

	}

	export interface UpdateFormRequest {

		/** Required */
		updatedForm: UpdateFormData;
	}
	export interface UpdateFormRequestFormProperties {
	}
	export function CreateUpdateFormRequestFormGroup() {
		return new FormGroup<UpdateFormRequestFormProperties>({
		});

	}


	/** Saves the data binding information for a theme. */
	export interface UpdateThemeData {
		id?: string;
		name?: string;

		/** Required */
		values: Array<ThemeValues>;
		overrides?: Array<ThemeValues>;
	}

	/** Saves the data binding information for a theme. */
	export interface UpdateThemeDataFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateThemeDataFormGroup() {
		return new FormGroup<UpdateThemeDataFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateThemeRequest {

		/** Required */
		updatedTheme: UpdateThemeData;
	}
	export interface UpdateThemeRequestFormProperties {
	}
	export function CreateUpdateThemeRequestFormGroup() {
		return new FormGroup<UpdateThemeRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new component for an Amplify app.
		 * Post app/{appId}/environment/{environmentName}/components
		 * @param {string} appId The unique ID of the Amplify app to associate with the component.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} clientToken The unique client token.
		 * @return {CreateComponentResponse} Success
		 */
		CreateComponent(appId: string, environmentName: string, clientToken: string | null | undefined, requestBody: CreateComponentPostBody): Observable<CreateComponentResponse> {
			return this.http.post<CreateComponentResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/components&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of components for a specified Amplify app and backend environment.
		 * Get app/{appId}/environment/{environmentName}/components
		 * @param {string} appId The unique ID for the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} nextToken The token to request the next page of results.
		 * @param {number} maxResults The maximum number of components to retrieve.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListComponentsResponse} Success
		 */
		ListComponents(appId: string, environmentName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListComponentsResponse> {
			return this.http.get<ListComponentsResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/components&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a new form for an Amplify app.
		 * Post app/{appId}/environment/{environmentName}/forms
		 * @param {string} appId The unique ID of the Amplify app to associate with the form.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} clientToken The unique client token.
		 * @return {CreateFormResponse} Success
		 */
		CreateForm(appId: string, environmentName: string, clientToken: string | null | undefined, requestBody: CreateFormPostBody): Observable<CreateFormResponse> {
			return this.http.post<CreateFormResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/forms&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of forms for a specified Amplify app and backend environment.
		 * Get app/{appId}/environment/{environmentName}/forms
		 * @param {string} appId The unique ID for the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} nextToken The token to request the next page of results.
		 * @param {number} maxResults The maximum number of forms to retrieve.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListFormsResponse} Success
		 */
		ListForms(appId: string, environmentName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListFormsResponse> {
			return this.http.get<ListFormsResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/forms&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Creates a theme to apply to the components in an Amplify app.
		 * Post app/{appId}/environment/{environmentName}/themes
		 * @param {string} appId The unique ID of the Amplify app associated with the theme.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} clientToken The unique client token.
		 * @return {CreateThemeResponse} Success
		 */
		CreateTheme(appId: string, environmentName: string, clientToken: string | null | undefined, requestBody: CreateThemePostBody): Observable<CreateThemeResponse> {
			return this.http.post<CreateThemeResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/themes&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a list of themes for a specified Amplify app and backend environment.
		 * Get app/{appId}/environment/{environmentName}/themes
		 * @param {string} appId The unique ID for the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} nextToken The token to request the next page of results.
		 * @param {number} maxResults The maximum number of theme results to return in the response.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListThemesResponse} Success
		 */
		ListThemes(appId: string, environmentName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListThemesResponse> {
			return this.http.get<ListThemesResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/themes&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Deletes a component from an Amplify app.
		 * Delete app/{appId}/environment/{environmentName}/components/{id}
		 * @param {string} appId The unique ID of the Amplify app associated with the component to delete.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} id The unique ID of the component to delete.
		 * @return {void} Success
		 */
		DeleteComponent(appId: string, environmentName: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/components/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an existing component for an Amplify app.
		 * Get app/{appId}/environment/{environmentName}/components/{id}
		 * @param {string} appId The unique ID of the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is part of the Amplify app.
		 * @param {string} id The unique ID of the component.
		 * @return {GetComponentResponse} Success
		 */
		GetComponent(appId: string, environmentName: string, id: string): Observable<GetComponentResponse> {
			return this.http.get<GetComponentResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/components/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates an existing component.
		 * Patch app/{appId}/environment/{environmentName}/components/{id}
		 * @param {string} appId The unique ID for the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is part of the Amplify app.
		 * @param {string} id The unique ID for the component.
		 * @param {string} clientToken The unique client token.
		 * @return {UpdateComponentResponse} Success
		 */
		UpdateComponent(appId: string, environmentName: string, id: string, clientToken: string | null | undefined, requestBody: UpdateComponentPatchBody): Observable<UpdateComponentResponse> {
			return this.http.patch<UpdateComponentResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/components/' + (id == null ? '' : encodeURIComponent(id)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a form from an Amplify app.
		 * Delete app/{appId}/environment/{environmentName}/forms/{id}
		 * @param {string} appId The unique ID of the Amplify app associated with the form to delete.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} id The unique ID of the form to delete.
		 * @return {void} Success
		 */
		DeleteForm(appId: string, environmentName: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/forms/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an existing form for an Amplify app.
		 * Get app/{appId}/environment/{environmentName}/forms/{id}
		 * @param {string} appId The unique ID of the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is part of the Amplify app.
		 * @param {string} id The unique ID of the form.
		 * @return {GetFormResponse} Success
		 */
		GetForm(appId: string, environmentName: string, id: string): Observable<GetFormResponse> {
			return this.http.get<GetFormResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/forms/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates an existing form.
		 * Patch app/{appId}/environment/{environmentName}/forms/{id}
		 * @param {string} appId The unique ID for the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is part of the Amplify app.
		 * @param {string} id The unique ID for the form.
		 * @param {string} clientToken The unique client token.
		 * @return {UpdateFormResponse} Success
		 */
		UpdateForm(appId: string, environmentName: string, id: string, clientToken: string | null | undefined, requestBody: UpdateFormPatchBody): Observable<UpdateFormResponse> {
			return this.http.patch<UpdateFormResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/forms/' + (id == null ? '' : encodeURIComponent(id)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a theme from an Amplify app.
		 * Delete app/{appId}/environment/{environmentName}/themes/{id}
		 * @param {string} appId The unique ID of the Amplify app associated with the theme to delete.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} id The unique ID of the theme to delete.
		 * @return {void} Success
		 */
		DeleteTheme(appId: string, environmentName: string, id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/themes/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an existing theme for an Amplify app.
		 * Get app/{appId}/environment/{environmentName}/themes/{id}
		 * @param {string} appId The unique ID of the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is part of the Amplify app.
		 * @param {string} id The unique ID for the theme.
		 * @return {GetThemeResponse} Success
		 */
		GetTheme(appId: string, environmentName: string, id: string): Observable<GetThemeResponse> {
			return this.http.get<GetThemeResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/themes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates an existing theme.
		 * Patch app/{appId}/environment/{environmentName}/themes/{id}
		 * @param {string} appId The unique ID for the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is part of the Amplify app.
		 * @param {string} id The unique ID for the theme.
		 * @param {string} clientToken The unique client token.
		 * @return {UpdateThemeResponse} Success
		 */
		UpdateTheme(appId: string, environmentName: string, id: string, clientToken: string | null | undefined, requestBody: UpdateThemePatchBody): Observable<UpdateThemeResponse> {
			return this.http.patch<UpdateThemeResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/themes/' + (id == null ? '' : encodeURIComponent(id)) + '&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exchanges an access code for a token.
		 * Post tokens/{provider}
		 * @param {TokenProviders} provider The third-party provider for the token. The only valid value is <code>figma</code>.
		 * @return {ExchangeCodeForTokenResponse} Success
		 */
		ExchangeCodeForToken(provider: TokenProviders, requestBody: ExchangeCodeForTokenPostBody): Observable<ExchangeCodeForTokenResponse> {
			return this.http.post<ExchangeCodeForTokenResponse>(this.baseUri + 'tokens/' + provider, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Exports component configurations to code that is ready to integrate into an Amplify app.
		 * Get export/app/{appId}/environment/{environmentName}/components
		 * @param {string} appId The unique ID of the Amplify app to export components to.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} nextToken The token to request the next page of results.
		 * @return {ExportComponentsResponse} Success
		 */
		ExportComponents(appId: string, environmentName: string, nextToken: string | null | undefined): Observable<ExportComponentsResponse> {
			return this.http.get<ExportComponentsResponse>(this.baseUri + 'export/app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/components&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Exports form configurations to code that is ready to integrate into an Amplify app.
		 * Get export/app/{appId}/environment/{environmentName}/forms
		 * @param {string} appId The unique ID of the Amplify app to export forms to.
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} nextToken The token to request the next page of results.
		 * @return {ExportFormsResponse} Success
		 */
		ExportForms(appId: string, environmentName: string, nextToken: string | null | undefined): Observable<ExportFormsResponse> {
			return this.http.get<ExportFormsResponse>(this.baseUri + 'export/app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/forms&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Exports theme configurations to code that is ready to integrate into an Amplify app.
		 * Get export/app/{appId}/environment/{environmentName}/themes
		 * @param {string} appId The unique ID of the Amplify app to export the themes to.
		 * @param {string} environmentName The name of the backend environment that is part of the Amplify app.
		 * @param {string} nextToken The token to request the next page of results.
		 * @return {ExportThemesResponse} Success
		 */
		ExportThemes(appId: string, environmentName: string, nextToken: string | null | undefined): Observable<ExportThemesResponse> {
			return this.http.get<ExportThemesResponse>(this.baseUri + 'export/app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/themes&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)), {});
		}

		/**
		 * Returns an existing code generation job.
		 * Get app/{appId}/environment/{environmentName}/codegen-jobs/{id}
		 * @param {string} appId The unique ID of the Amplify app associated with the code generation job.
		 *     Min length: 1    Max length: 20
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app associated with the code generation job.
		 * @param {string} id The unique ID of the code generation job.
		 * @return {GetCodegenJobResponse} Success
		 */
		GetCodegenJob(appId: string, environmentName: string, id: string): Observable<GetCodegenJobResponse> {
			return this.http.get<GetCodegenJobResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/codegen-jobs/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns existing metadata for an Amplify app.
		 * Get app/{appId}/environment/{environmentName}/metadata
		 * @param {string} appId The unique ID of the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is part of the Amplify app.
		 * @return {GetMetadataResponse} Success
		 */
		GetMetadata(appId: string, environmentName: string): Observable<GetMetadataResponse> {
			return this.http.get<GetMetadataResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/metadata', {});
		}

		/**
		 * Retrieves a list of code generation jobs for a specified Amplify app and backend environment.
		 * Get app/{appId}/environment/{environmentName}/codegen-jobs
		 * @param {string} appId The unique ID for the Amplify app.
		 *     Min length: 1    Max length: 20
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} nextToken The token to request the next page of results.
		 * @param {number} maxResults The maximum number of jobs to retrieve.
		 *     Minimum: 1    Maximum: 100
		 * @return {ListCodegenJobsResponse} Success
		 */
		ListCodegenJobs(appId: string, environmentName: string, nextToken: string | null | undefined, maxResults: number | null | undefined): Observable<ListCodegenJobsResponse> {
			return this.http.get<ListCodegenJobsResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/codegen-jobs&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults, {});
		}

		/**
		 * Starts a code generation job for a specified Amplify app and backend environment.
		 * Post app/{appId}/environment/{environmentName}/codegen-jobs
		 * @param {string} appId The unique ID for the Amplify app.
		 *     Min length: 1    Max length: 20
		 * @param {string} environmentName The name of the backend environment that is a part of the Amplify app.
		 * @param {string} clientToken The idempotency token used to ensure that the code generation job request completes only once.
		 * @return {StartCodegenJobResponse} Success
		 */
		StartCodegenJob(appId: string, environmentName: string, clientToken: string | null | undefined, requestBody: StartCodegenJobPostBody): Observable<StartCodegenJobResponse> {
			return this.http.post<StartCodegenJobResponse>(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/codegen-jobs&clientToken=' + (clientToken == null ? '' : encodeURIComponent(clientToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stores the metadata information about a feature on a form.
		 * Put app/{appId}/environment/{environmentName}/metadata/features/{featureName}
		 * @param {string} appId The unique ID for the Amplify app.
		 * @param {string} environmentName The name of the backend environment that is part of the Amplify app.
		 * @param {string} featureName The name of the feature associated with the metadata.
		 * @return {void} Success
		 */
		PutMetadataFlag(appId: string, environmentName: string, featureName: string, requestBody: PutMetadataFlagPutBody): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'app/' + (appId == null ? '' : encodeURIComponent(appId)) + '/environment/' + (environmentName == null ? '' : encodeURIComponent(environmentName)) + '/metadata/features/' + (featureName == null ? '' : encodeURIComponent(featureName)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Refreshes a previously issued access token that might have expired.
		 * Post tokens/{provider}/refresh
		 * @param {TokenProviders} provider The third-party provider for the token. The only valid value is <code>figma</code>.
		 * @return {RefreshTokenResponse} Success
		 */
		RefreshToken(provider: TokenProviders, requestBody: RefreshTokenPostBody): Observable<RefreshTokenResponse> {
			return this.http.post<RefreshTokenResponse>(this.baseUri + 'tokens/' + provider + '/refresh', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export interface CreateComponentPostBody {

		/**
		 * Represents all of the information that is required to create a component.
		 * Required
		 */
		componentToCreate: CreateComponentPostBodyComponentToCreate;
	}
	export interface CreateComponentPostBodyFormProperties {
	}
	export function CreateCreateComponentPostBodyFormGroup() {
		return new FormGroup<CreateComponentPostBodyFormProperties>({
		});

	}

	export interface CreateComponentPostBodyComponentToCreate {
		name?: string;
		sourceId?: string;
		componentType?: string;

		/** Describes the component's properties. */
		properties?: any;
		children?: Array<ComponentChild>;
		variants?: Array<ComponentVariant>;
		overrides?: ComponentOverrides;
		bindingProperties?: ComponentBindingProperties;
		collectionProperties?: ComponentCollectionProperties;
		tags?: Tags;
		events?: ComponentEvents;
		schemaVersion?: string;
	}
	export interface CreateComponentPostBodyComponentToCreateFormProperties {
		name: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,
		componentType: FormControl<string | null | undefined>,

		/** Describes the component's properties. */
		properties: FormControl<any | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateCreateComponentPostBodyComponentToCreateFormGroup() {
		return new FormGroup<CreateComponentPostBodyComponentToCreateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			componentType: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateFormPostBody {

		/**
		 * Represents all of the information that is required to create a form.
		 * Required
		 */
		formToCreate: CreateFormPostBodyFormToCreate;
	}
	export interface CreateFormPostBodyFormProperties {
	}
	export function CreateCreateFormPostBodyFormGroup() {
		return new FormGroup<CreateFormPostBodyFormProperties>({
		});

	}

	export interface CreateFormPostBodyFormToCreate {
		name?: string;
		dataType?: FormDataTypeConfig;
		formActionType?: FormActionType;
		fields?: FieldsMap;
		style?: FormStyle;
		sectionalElements?: SectionalElementMap;
		schemaVersion?: string;
		cta?: FormCTA;
		tags?: Tags;
		labelDecorator?: LabelDecorator;
	}
	export interface CreateFormPostBodyFormToCreateFormProperties {
		name: FormControl<string | null | undefined>,
		formActionType: FormControl<FormActionType | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
		labelDecorator: FormControl<LabelDecorator | null | undefined>,
	}
	export function CreateCreateFormPostBodyFormToCreateFormGroup() {
		return new FormGroup<CreateFormPostBodyFormToCreateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			formActionType: new FormControl<FormActionType | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
			labelDecorator: new FormControl<LabelDecorator | null | undefined>(undefined),
		});

	}

	export interface CreateThemePostBody {

		/**
		 * Represents all of the information that is required to create a theme.
		 * Required
		 */
		themeToCreate: CreateThemePostBodyThemeToCreate;
	}
	export interface CreateThemePostBodyFormProperties {
	}
	export function CreateCreateThemePostBodyFormGroup() {
		return new FormGroup<CreateThemePostBodyFormProperties>({
		});

	}

	export interface CreateThemePostBodyThemeToCreate {
		name?: string;
		values?: Array<ThemeValues>;
		overrides?: Array<ThemeValues>;
		tags?: Tags;
	}
	export interface CreateThemePostBodyThemeToCreateFormProperties {
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateThemePostBodyThemeToCreateFormGroup() {
		return new FormGroup<CreateThemePostBodyThemeToCreateFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateComponentPatchBody {

		/**
		 * Updates and saves all of the information about a component, based on component ID.
		 * Required
		 */
		updatedComponent: UpdateComponentPatchBodyUpdatedComponent;
	}
	export interface UpdateComponentPatchBodyFormProperties {
	}
	export function CreateUpdateComponentPatchBodyFormGroup() {
		return new FormGroup<UpdateComponentPatchBodyFormProperties>({
		});

	}

	export interface UpdateComponentPatchBodyUpdatedComponent {
		id?: string;
		name?: string;
		sourceId?: string;
		componentType?: string;

		/** Describes the component's properties. */
		properties?: any;
		children?: Array<ComponentChild>;
		variants?: Array<ComponentVariant>;
		overrides?: ComponentOverrides;
		bindingProperties?: ComponentBindingProperties;
		collectionProperties?: ComponentCollectionProperties;
		events?: ComponentEvents;
		schemaVersion?: string;
	}
	export interface UpdateComponentPatchBodyUpdatedComponentFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		sourceId: FormControl<string | null | undefined>,
		componentType: FormControl<string | null | undefined>,

		/** Describes the component's properties. */
		properties: FormControl<any | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateUpdateComponentPatchBodyUpdatedComponentFormGroup() {
		return new FormGroup<UpdateComponentPatchBodyUpdatedComponentFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceId: new FormControl<string | null | undefined>(undefined),
			componentType: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<any | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateFormPatchBody {

		/**
		 * Updates and saves all of the information about a form, based on form ID.
		 * Required
		 */
		updatedForm: UpdateFormPatchBodyUpdatedForm;
	}
	export interface UpdateFormPatchBodyFormProperties {
	}
	export function CreateUpdateFormPatchBodyFormGroup() {
		return new FormGroup<UpdateFormPatchBodyFormProperties>({
		});

	}

	export interface UpdateFormPatchBodyUpdatedForm {
		name?: string;
		dataType?: FormDataTypeConfig;
		formActionType?: FormActionType;
		fields?: FieldsMap;
		style?: FormStyle;
		sectionalElements?: SectionalElementMap;
		schemaVersion?: string;
		cta?: FormCTA;
		labelDecorator?: LabelDecorator;
	}
	export interface UpdateFormPatchBodyUpdatedFormFormProperties {
		name: FormControl<string | null | undefined>,
		formActionType: FormControl<FormActionType | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
		labelDecorator: FormControl<LabelDecorator | null | undefined>,
	}
	export function CreateUpdateFormPatchBodyUpdatedFormFormGroup() {
		return new FormGroup<UpdateFormPatchBodyUpdatedFormFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			formActionType: new FormControl<FormActionType | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
			labelDecorator: new FormControl<LabelDecorator | null | undefined>(undefined),
		});

	}

	export interface UpdateThemePatchBody {

		/**
		 * Saves the data binding information for a theme.
		 * Required
		 */
		updatedTheme: UpdateThemePatchBodyUpdatedTheme;
	}
	export interface UpdateThemePatchBodyFormProperties {
	}
	export function CreateUpdateThemePatchBodyFormGroup() {
		return new FormGroup<UpdateThemePatchBodyFormProperties>({
		});

	}

	export interface UpdateThemePatchBodyUpdatedTheme {
		id?: string;
		name?: string;
		values?: Array<ThemeValues>;
		overrides?: Array<ThemeValues>;
	}
	export interface UpdateThemePatchBodyUpdatedThemeFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateThemePatchBodyUpdatedThemeFormGroup() {
		return new FormGroup<UpdateThemePatchBodyUpdatedThemeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExchangeCodeForTokenPostBody {

		/**
		 * Describes the configuration of a request to exchange an access code for a token.
		 * Required
		 */
		request: ExchangeCodeForTokenPostBodyRequest;
	}
	export interface ExchangeCodeForTokenPostBodyFormProperties {
	}
	export function CreateExchangeCodeForTokenPostBodyFormGroup() {
		return new FormGroup<ExchangeCodeForTokenPostBodyFormProperties>({
		});

	}

	export interface ExchangeCodeForTokenPostBodyRequest {
		code?: string;
		redirectUri?: string;
		clientId?: string;
	}
	export interface ExchangeCodeForTokenPostBodyRequestFormProperties {
		code: FormControl<string | null | undefined>,
		redirectUri: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
	}
	export function CreateExchangeCodeForTokenPostBodyRequestFormGroup() {
		return new FormGroup<ExchangeCodeForTokenPostBodyRequestFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			redirectUri: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StartCodegenJobPostBody {

		/**
		 * The code generation job resource configuration.
		 * Required
		 */
		codegenJobToCreate: StartCodegenJobPostBodyCodegenJobToCreate;
	}
	export interface StartCodegenJobPostBodyFormProperties {
	}
	export function CreateStartCodegenJobPostBodyFormGroup() {
		return new FormGroup<StartCodegenJobPostBodyFormProperties>({
		});

	}

	export interface StartCodegenJobPostBodyCodegenJobToCreate {
		renderConfig?: CodegenJobRenderConfig;
		genericDataSchema?: CodegenJobGenericDataSchema;
		autoGenerateForms?: boolean | null;
		features?: CodegenFeatureFlags;
		tags?: Tags;
	}
	export interface StartCodegenJobPostBodyCodegenJobToCreateFormProperties {
		autoGenerateForms: FormControl<boolean | null | undefined>,
	}
	export function CreateStartCodegenJobPostBodyCodegenJobToCreateFormGroup() {
		return new FormGroup<StartCodegenJobPostBodyCodegenJobToCreateFormProperties>({
			autoGenerateForms: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PutMetadataFlagPutBody {

		/**
		 * Stores the metadata information about a feature on a form.
		 * Required
		 */
		body: PutMetadataFlagPutBodyBody;
	}
	export interface PutMetadataFlagPutBodyFormProperties {
	}
	export function CreatePutMetadataFlagPutBodyFormGroup() {
		return new FormGroup<PutMetadataFlagPutBodyFormProperties>({
		});

	}

	export interface PutMetadataFlagPutBodyBody {
		newValue?: string;
	}
	export interface PutMetadataFlagPutBodyBodyFormProperties {
		newValue: FormControl<string | null | undefined>,
	}
	export function CreatePutMetadataFlagPutBodyBodyFormGroup() {
		return new FormGroup<PutMetadataFlagPutBodyBodyFormProperties>({
			newValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RefreshTokenPostBody {

		/**
		 * Describes a refresh token.
		 * Required
		 */
		refreshTokenBody: RefreshTokenPostBodyRefreshTokenBody;
	}
	export interface RefreshTokenPostBodyFormProperties {
	}
	export function CreateRefreshTokenPostBodyFormGroup() {
		return new FormGroup<RefreshTokenPostBodyFormProperties>({
		});

	}

	export interface RefreshTokenPostBodyRefreshTokenBody {
		token?: string;
		clientId?: string;
	}
	export interface RefreshTokenPostBodyRefreshTokenBodyFormProperties {
		token: FormControl<string | null | undefined>,
		clientId: FormControl<string | null | undefined>,
	}
	export function CreateRefreshTokenPostBodyRefreshTokenBodyFormGroup() {
		return new FormGroup<RefreshTokenPostBodyRefreshTokenBodyFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
		});

	}

}

