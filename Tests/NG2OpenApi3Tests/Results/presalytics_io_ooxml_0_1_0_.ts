import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ChartAxes {
		axisDataTypeId?: number | null;
		chartsId?: string | null;
		id?: string | null;
		ooxmlId?: number | null;
	}
	export interface ChartAxesFormProperties {
		axisDataTypeId: FormControl<number | null | undefined>,
		chartsId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
	}
	export function CreateChartAxesFormGroup() {
		return new FormGroup<ChartAxesFormProperties>({
			axisDataTypeId: new FormControl<number | null | undefined>(undefined),
			chartsId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ChartAxesDetails {
		axisDataTypeId?: number | null;
		chart?: ChartChartsDetails;
		chartsId?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		ooxmlId?: number | null;
		titleTextContainer?: SharedTextContainerDetails;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ChartAxesDetailsFormProperties {
		axisDataTypeId: FormControl<number | null | undefined>,
		chartsId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateChartAxesDetailsFormGroup() {
		return new FormGroup<ChartAxesDetailsFormProperties>({
			axisDataTypeId: new FormControl<number | null | undefined>(undefined),
			chartsId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartChartsDetails {
		axes?: Array<ChartAxesDetails>;
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		chartData?: ChartChartDataDetails;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		name?: string | null;
		packageUri?: string | null;

		/**
		 * The graphics class provides a bridge between the Slides and
		 * lower level models including Charts, Tables, Pictures, and SmartArts
		 */
		parentGraphic?: SlideGraphicsDetails;
		parentGraphicId?: string | null;
		svgBlobUrl?: string | null;
		titleTextContainer?: SharedTextContainerDetails;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ChartChartsDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		parentGraphicId: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateChartChartsDetailsFormGroup() {
		return new FormGroup<ChartChartsDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			parentGraphicId: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartChartDataDetails {
		chart?: ChartChartsDetails;
		chartId?: string | null;
		columnCollection?: ChartColumnCollectionsDetails;
		dataPoints?: Array<ChartDataPointsDetails>;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		rowCollection?: ChartRowCollectionsDetails;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ChartChartDataDetailsFormProperties {
		chartId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateChartChartDataDetailsFormGroup() {
		return new FormGroup<ChartChartDataDetailsFormProperties>({
			chartId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartColumnCollectionsDetails {
		chartData?: ChartChartDataDetails;
		chartDataId?: string | null;
		columns?: Array<ChartColumnsDetails>;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ChartColumnCollectionsDetailsFormProperties {
		chartDataId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateChartColumnCollectionsDetailsFormGroup() {
		return new FormGroup<ChartColumnCollectionsDetailsFormProperties>({
			chartDataId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartColumnsDetails {
		axis?: ChartAxesDetails;
		axisId?: string | null;
		columnCollection?: ChartColumnCollectionsDetails;
		columnCollectionId?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		index?: number | null;
		name?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ChartColumnsDetailsFormProperties {
		axisId: FormControl<string | null | undefined>,
		columnCollectionId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateChartColumnsDetailsFormGroup() {
		return new FormGroup<ChartColumnsDetailsFormProperties>({
			axisId: new FormControl<string | null | undefined>(undefined),
			columnCollectionId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartDataPointsDetails {
		chartData?: ChartChartDataDetails;
		chartDataId?: string | null;
		column?: ChartColumnsDetails;
		columnId?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		row?: ChartRowsDetails;
		rowId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
		value?: number | null;
	}
	export interface ChartDataPointsDetailsFormProperties {
		chartDataId: FormControl<string | null | undefined>,
		columnId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		rowId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateChartDataPointsDetailsFormGroup() {
		return new FormGroup<ChartDataPointsDetailsFormProperties>({
			chartDataId: new FormControl<string | null | undefined>(undefined),
			columnId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			rowId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ChartRowsDetails {
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		index?: number | null;
		name?: string | null;
		rowNameCollection?: ChartRowCollectionsDetails;
		rowNameCollectionId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ChartRowsDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		rowNameCollectionId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateChartRowsDetailsFormGroup() {
		return new FormGroup<ChartRowsDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rowNameCollectionId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartRowCollectionsDetails {
		axis?: ChartAxesDetails;
		axisId?: string | null;
		chartData?: ChartChartDataDetails;
		chartDataId?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		nameFormatType?: number | null;
		rows?: Array<ChartRowsDetails>;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ChartRowCollectionsDetailsFormProperties {
		axisId: FormControl<string | null | undefined>,
		chartDataId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		nameFormatType: FormControl<number | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateChartRowCollectionsDetailsFormGroup() {
		return new FormGroup<ChartRowCollectionsDetailsFormProperties>({
			axisId: new FormControl<string | null | undefined>(undefined),
			chartDataId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nameFormatType: new FormControl<number | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The graphics class provides a bridge between the Slides and 
	 * lower level models including Charts, Tables, Pictures, and SmartArts
	 */
	export interface SlideGraphicsDetails {
		chart?: ChartChartsDetails;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		graphicTypeId?: number | null;
		groupElement?: SlideGroupElementsDetails;

		/** Foreign key to the GroupElements object */
		groupElementsId?: string | null;
		height?: number | null;
		id?: string | null;
		name?: string | null;
		ooxmlId?: number | null;
		picture?: SharedPicturesDetails;
		smartArt?: SlideSmartArtsDetails;
		table?: TableTablesDetails;
		userCreated?: string | null;
		userModified?: string | null;
		width?: number | null;
		xOffset?: number | null;
		yOffset?: number | null;
	}

	/**
	 * The graphics class provides a bridge between the Slides and 
	 * lower level models including Charts, Tables, Pictures, and SmartArts
	 */
	export interface SlideGraphicsDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		graphicTypeId: FormControl<number | null | undefined>,

		/** Foreign key to the GroupElements object */
		groupElementsId: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
		xOffset: FormControl<number | null | undefined>,
		yOffset: FormControl<number | null | undefined>,
	}
	export function CreateSlideGraphicsDetailsFormGroup() {
		return new FormGroup<SlideGraphicsDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			graphicTypeId: new FormControl<number | null | undefined>(undefined),
			groupElementsId: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			xOffset: new FormControl<number | null | undefined>(undefined),
			yOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SlideGroupElementsDetails {
		childGroupElements?: Array<SlideGroupElementsDetails>;
		connector?: SlideConnectorDetails;
		dateCreated?: Date | null;
		dateModified?: Date | null;

		/**
		 * The graphics class provides a bridge between the Slides and
		 * lower level models including Charts, Tables, Pictures, and SmartArts
		 */
		graphic?: SlideGraphicsDetails;
		group?: SlideGroupsDetails;
		groupElementTypeId?: number | null;
		groupElementTypePk?: string | null;
		id?: string | null;
		parentGroupElement?: SlideGroupElementsDetails;
		parentGroupElementId?: string | null;
		shape?: SlideShapesDetails;
		shapeTree?: SlideShapeTreesDetails;
		shapeTreeId?: string | null;
		typeInfo?: SlideGroupElementTypesDetails;
		ultimateParentShapeTreeId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SlideGroupElementsDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		groupElementTypeId: FormControl<number | null | undefined>,
		groupElementTypePk: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		parentGroupElementId: FormControl<string | null | undefined>,
		shapeTreeId: FormControl<string | null | undefined>,
		ultimateParentShapeTreeId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSlideGroupElementsDetailsFormGroup() {
		return new FormGroup<SlideGroupElementsDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			groupElementTypeId: new FormControl<number | null | undefined>(undefined),
			groupElementTypePk: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			parentGroupElementId: new FormControl<string | null | undefined>(undefined),
			shapeTreeId: new FormControl<string | null | undefined>(undefined),
			ultimateParentShapeTreeId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideConnectorDetails {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		effect?: SharedEffectsDetails;
		endConnectionIdx?: number | null;
		endConnectionShape?: SlideShapesDetails;
		endConnectionShapeId?: string | null;
		fillMap?: SharedFillMapDetails;
		flipHorizontal?: boolean | null;
		flipVertical?: boolean | null;
		freeFormPathXml?: string | null;
		groupElement?: SlideGroupElementsDetails;
		groupElementsId?: string | null;
		hidden?: boolean | null;
		id?: string | null;
		isThemeEffect?: boolean | null;
		isThemeFill?: boolean | null;
		isThemeLine?: boolean | null;
		line?: SharedLinesDetails;
		name?: string | null;
		ooxmlId?: number | null;
		packageUri?: string | null;
		presetTypeId?: string | null;
		rotation?: number | null;
		startConnectionIdx?: number | null;
		startConnectionShape?: SlideShapesDetails;
		startConnectionShapeId?: string | null;
		svgBlobUrl?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SlideConnectorDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		endConnectionIdx: FormControl<number | null | undefined>,
		endConnectionShapeId: FormControl<string | null | undefined>,
		flipHorizontal: FormControl<boolean | null | undefined>,
		flipVertical: FormControl<boolean | null | undefined>,
		freeFormPathXml: FormControl<string | null | undefined>,
		groupElementsId: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		isThemeEffect: FormControl<boolean | null | undefined>,
		isThemeFill: FormControl<boolean | null | undefined>,
		isThemeLine: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		presetTypeId: FormControl<string | null | undefined>,
		rotation: FormControl<number | null | undefined>,
		startConnectionIdx: FormControl<number | null | undefined>,
		startConnectionShapeId: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSlideConnectorDetailsFormGroup() {
		return new FormGroup<SlideConnectorDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			endConnectionIdx: new FormControl<number | null | undefined>(undefined),
			endConnectionShapeId: new FormControl<string | null | undefined>(undefined),
			flipHorizontal: new FormControl<boolean | null | undefined>(undefined),
			flipVertical: new FormControl<boolean | null | undefined>(undefined),
			freeFormPathXml: new FormControl<string | null | undefined>(undefined),
			groupElementsId: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isThemeEffect: new FormControl<boolean | null | undefined>(undefined),
			isThemeFill: new FormControl<boolean | null | undefined>(undefined),
			isThemeLine: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			presetTypeId: new FormControl<string | null | undefined>(undefined),
			rotation: new FormControl<number | null | undefined>(undefined),
			startConnectionIdx: new FormControl<number | null | undefined>(undefined),
			startConnectionShapeId: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedEffectsDetails {
		connectorId?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		effectAttributes?: Array<SharedEffectAttributesDetails>;
		effectMap?: ThemeEffectMapDetails;
		effectMapId?: string | null;
		id?: string | null;
		name?: string | null;
		parentConnector?: SlideConnectorDetails;
		parentShape?: SlideShapesDetails;
		shapeId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedEffectsDetailsFormProperties {
		connectorId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		effectMapId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		shapeId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedEffectsDetailsFormGroup() {
		return new FormGroup<SharedEffectsDetailsFormProperties>({
			connectorId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			effectMapId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shapeId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedEffectAttributesDetails {
		attributesJson?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		effect?: SharedEffectsDetails;
		effectId?: string | null;
		effectTypeId?: number | null;
		fillMap?: SharedFillMapDetails;
		id?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedEffectAttributesDetailsFormProperties {
		attributesJson: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		effectId: FormControl<string | null | undefined>,
		effectTypeId: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedEffectAttributesDetailsFormGroup() {
		return new FormGroup<SharedEffectAttributesDetailsFormProperties>({
			attributesJson: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			effectId: new FormControl<string | null | undefined>(undefined),
			effectTypeId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedFillMapDetails {
		connector?: SlideConnectorDetails;
		connectorId?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		effectAttribute?: SharedEffectAttributesDetails;
		effectAttributeId?: string | null;
		fillTypeId?: number | null;
		gradientFill?: SharedGradientFillsDetails;
		id?: string | null;
		imageFill?: SharedImageFillsDetails;
		shape?: SlideShapesDetails;
		shapeId?: string | null;
		solidFill?: SharedSolidFillsDetails;
		tableCell?: TableCellsDetails;
		tableCellId?: string | null;
		themeBackgroundFill?: ThemeBackgroundFillsDetails;
		themeBackgroundFillId?: string | null;
		themeFill?: ThemeFillsDetails;
		themeFillId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedFillMapDetailsFormProperties {
		connectorId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		effectAttributeId: FormControl<string | null | undefined>,
		fillTypeId: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		shapeId: FormControl<string | null | undefined>,
		tableCellId: FormControl<string | null | undefined>,
		themeBackgroundFillId: FormControl<string | null | undefined>,
		themeFillId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedFillMapDetailsFormGroup() {
		return new FormGroup<SharedFillMapDetailsFormProperties>({
			connectorId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			effectAttributeId: new FormControl<string | null | undefined>(undefined),
			fillTypeId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			shapeId: new FormControl<string | null | undefined>(undefined),
			tableCellId: new FormControl<string | null | undefined>(undefined),
			themeBackgroundFillId: new FormControl<string | null | undefined>(undefined),
			themeFillId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedGradientFillsDetails {
		angle?: number | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		fillMap?: SharedFillMapDetails;
		fillMapId?: string | null;
		gradientStops?: Array<SharedGradientStopsDetails>;
		id?: string | null;
		isPath?: boolean | null;
		pathType?: string | null;
		rotateWithShape?: boolean | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedGradientFillsDetailsFormProperties {
		angle: FormControl<number | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		fillMapId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isPath: FormControl<boolean | null | undefined>,
		pathType: FormControl<string | null | undefined>,
		rotateWithShape: FormControl<boolean | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedGradientFillsDetailsFormGroup() {
		return new FormGroup<SharedGradientFillsDetailsFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			fillMapId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isPath: new FormControl<boolean | null | undefined>(undefined),
			pathType: new FormControl<string | null | undefined>(undefined),
			rotateWithShape: new FormControl<boolean | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedGradientStopsDetails {
		dateCreated?: Date | null;
		dateModified?: Date | null;
		gradientFill?: SharedGradientFillsDetails;
		gradientFillsId?: string | null;
		id?: string | null;
		position?: number | null;
		solidFill?: SharedSolidFillsDetails;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedGradientStopsDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		gradientFillsId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedGradientStopsDetailsFormGroup() {
		return new FormGroup<SharedGradientStopsDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			gradientFillsId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedSolidFillsDetails {
		colorTransformations?: SharedColorTransformationsDetails;
		colorTypeId?: number | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		fillMapId?: string | null;
		hexValue?: string | null;
		id?: string | null;
		isUserColor?: boolean | null;
		parentFillMap?: SharedFillMapDetails;
		parentGradientStop?: SharedGradientStopsDetails;
		parentGradientStopId?: string | null;
		parentLine?: SharedLinesDetails;
		parentLineId?: string | null;
		parentText?: SharedTextDetails;
		parentTextId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedSolidFillsDetailsFormProperties {
		colorTypeId: FormControl<number | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		fillMapId: FormControl<string | null | undefined>,
		hexValue: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isUserColor: FormControl<boolean | null | undefined>,
		parentGradientStopId: FormControl<string | null | undefined>,
		parentLineId: FormControl<string | null | undefined>,
		parentTextId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedSolidFillsDetailsFormGroup() {
		return new FormGroup<SharedSolidFillsDetailsFormProperties>({
			colorTypeId: new FormControl<number | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			fillMapId: new FormControl<string | null | undefined>(undefined),
			hexValue: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isUserColor: new FormControl<boolean | null | undefined>(undefined),
			parentGradientStopId: new FormControl<string | null | undefined>(undefined),
			parentLineId: new FormControl<string | null | undefined>(undefined),
			parentTextId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedColorTransformationsDetails {
		colorTransformationAttributes?: Array<SharedColorTransformationAttributesDetails>;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		name?: string | null;
		parentSolidFill?: SharedSolidFillsDetails;
		solidFillsId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedColorTransformationsDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		solidFillsId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedColorTransformationsDetailsFormGroup() {
		return new FormGroup<SharedColorTransformationsDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			solidFillsId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedColorTransformationAttributesDetails {
		colorTransformation?: SharedColorTransformationsDetails;
		colorTransformationsId?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		name?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
		value?: string | null;
	}
	export interface SharedColorTransformationAttributesDetailsFormProperties {
		colorTransformationsId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSharedColorTransformationAttributesDetailsFormGroup() {
		return new FormGroup<SharedColorTransformationAttributesDetailsFormProperties>({
			colorTransformationsId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedLinesDetails {
		bLtoTRBorder?: TableBordersDetails;
		bLtoTRBorderId?: string | null;
		bottomBorder?: TableBordersDetails;
		bottomBorderId?: string | null;
		connectorId?: string | null;
		dashTypeId?: number | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		headEndHeightId?: number | null;
		headEndTypeId?: number | null;
		headEndWidthId?: number | null;
		id?: string | null;
		leftBorder?: TableBordersDetails;
		leftBorderId?: string | null;
		lineColorSolidFill?: SharedSolidFillsDetails;
		lineMap?: ThemeLineMapDetails;
		lineMapId?: string | null;
		parentConnector?: SlideConnectorDetails;
		parentShape?: SlideShapesDetails;
		rightBorder?: TableBordersDetails;
		rightBorderId?: string | null;
		shapeId?: string | null;
		tLtoBRBorder?: TableBordersDetails;
		tLtoBRBorderId?: string | null;
		tailEndHeightId?: number | null;
		tailEndTypeId?: number | null;
		tailEndWidthId?: number | null;
		topBorder?: TableBordersDetails;
		topBorderId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
		weight?: number | null;
	}
	export interface SharedLinesDetailsFormProperties {
		bLtoTRBorderId: FormControl<string | null | undefined>,
		bottomBorderId: FormControl<string | null | undefined>,
		connectorId: FormControl<string | null | undefined>,
		dashTypeId: FormControl<number | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		headEndHeightId: FormControl<number | null | undefined>,
		headEndTypeId: FormControl<number | null | undefined>,
		headEndWidthId: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		leftBorderId: FormControl<string | null | undefined>,
		lineMapId: FormControl<string | null | undefined>,
		rightBorderId: FormControl<string | null | undefined>,
		shapeId: FormControl<string | null | undefined>,
		tLtoBRBorderId: FormControl<string | null | undefined>,
		tailEndHeightId: FormControl<number | null | undefined>,
		tailEndTypeId: FormControl<number | null | undefined>,
		tailEndWidthId: FormControl<number | null | undefined>,
		topBorderId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
	}
	export function CreateSharedLinesDetailsFormGroup() {
		return new FormGroup<SharedLinesDetailsFormProperties>({
			bLtoTRBorderId: new FormControl<string | null | undefined>(undefined),
			bottomBorderId: new FormControl<string | null | undefined>(undefined),
			connectorId: new FormControl<string | null | undefined>(undefined),
			dashTypeId: new FormControl<number | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			headEndHeightId: new FormControl<number | null | undefined>(undefined),
			headEndTypeId: new FormControl<number | null | undefined>(undefined),
			headEndWidthId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			leftBorderId: new FormControl<string | null | undefined>(undefined),
			lineMapId: new FormControl<string | null | undefined>(undefined),
			rightBorderId: new FormControl<string | null | undefined>(undefined),
			shapeId: new FormControl<string | null | undefined>(undefined),
			tLtoBRBorderId: new FormControl<string | null | undefined>(undefined),
			tailEndHeightId: new FormControl<number | null | undefined>(undefined),
			tailEndTypeId: new FormControl<number | null | undefined>(undefined),
			tailEndWidthId: new FormControl<number | null | undefined>(undefined),
			topBorderId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TableBordersDetails {
		bLtoTR?: SharedLinesDetails;
		bottom?: SharedLinesDetails;
		cell?: TableCellsDetails;
		cellId?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		left?: SharedLinesDetails;
		right?: SharedLinesDetails;
		tLtoBR?: SharedLinesDetails;
		top?: SharedLinesDetails;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface TableBordersDetailsFormProperties {
		cellId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateTableBordersDetailsFormGroup() {
		return new FormGroup<TableBordersDetailsFormProperties>({
			cellId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableCellsDetails {
		border?: TableBordersDetails;
		column?: TableColumnsDetails;
		columnId?: string | null;
		columnSpan?: number | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		fillMap?: SharedFillMapDetails;
		id?: string | null;
		isMergedHorozontal?: boolean | null;
		isMergedVertical?: boolean | null;
		row?: TableRowsDetails;
		rowId?: string | null;
		rowSpan?: number | null;
		textContainer?: SharedTextContainerDetails;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface TableCellsDetailsFormProperties {
		columnId: FormControl<string | null | undefined>,
		columnSpan: FormControl<number | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		isMergedHorozontal: FormControl<boolean | null | undefined>,
		isMergedVertical: FormControl<boolean | null | undefined>,
		rowId: FormControl<string | null | undefined>,
		rowSpan: FormControl<number | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateTableCellsDetailsFormGroup() {
		return new FormGroup<TableCellsDetailsFormProperties>({
			columnId: new FormControl<string | null | undefined>(undefined),
			columnSpan: new FormControl<number | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isMergedHorozontal: new FormControl<boolean | null | undefined>(undefined),
			isMergedVertical: new FormControl<boolean | null | undefined>(undefined),
			rowId: new FormControl<string | null | undefined>(undefined),
			rowSpan: new FormControl<number | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableColumnsDetails {
		cells?: Array<TableCellsDetails>;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		index?: number | null;
		table?: TableTablesDetails;
		tableId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
		width?: number | null;
	}
	export interface TableColumnsDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
		tableId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateTableColumnsDetailsFormGroup() {
		return new FormGroup<TableColumnsDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TableTablesDetails {
		baseElementBlobUrl?: string | null;
		cells?: Array<TableCellsDetails>;
		changedBaseElementBlobUrl?: string | null;
		columns?: Array<TableColumnsDetails>;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		hasStylePart?: boolean | null;
		id?: string | null;
		name?: string | null;
		packageUri?: string | null;

		/**
		 * The graphics class provides a bridge between the Slides and
		 * lower level models including Charts, Tables, Pictures, and SmartArts
		 */
		parentGraphic?: SlideGraphicsDetails;
		parentGraphicId?: string | null;
		rows?: Array<TableRowsDetails>;
		stylePartOuterXml?: string | null;
		svgBlobUrl?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface TableTablesDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		hasStylePart: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		parentGraphicId: FormControl<string | null | undefined>,
		stylePartOuterXml: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateTableTablesDetailsFormGroup() {
		return new FormGroup<TableTablesDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			hasStylePart: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			parentGraphicId: new FormControl<string | null | undefined>(undefined),
			stylePartOuterXml: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableRowsDetails {
		cells?: Array<TableCellsDetails>;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		height?: number | null;
		id?: string | null;
		index?: number | null;
		table?: TableTablesDetails;
		tableId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface TableRowsDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		height: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
		tableId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateTableRowsDetailsFormGroup() {
		return new FormGroup<TableRowsDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedTextContainerDetails {
		axis?: ChartAxesDetails;
		axisId?: string | null;
		chart?: ChartChartsDetails;
		chartId?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		outerXml?: string | null;
		paragraphs?: Array<SharedParagraphDetails>;
		parentShape?: SlideShapesDetails;
		shapeId?: string | null;
		tableCell?: TableCellsDetails;
		tableCellId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedTextContainerDetailsFormProperties {
		axisId: FormControl<string | null | undefined>,
		chartId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		outerXml: FormControl<string | null | undefined>,
		shapeId: FormControl<string | null | undefined>,
		tableCellId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedTextContainerDetailsFormGroup() {
		return new FormGroup<SharedTextContainerDetailsFormProperties>({
			axisId: new FormControl<string | null | undefined>(undefined),
			chartId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			outerXml: new FormControl<string | null | undefined>(undefined),
			shapeId: new FormControl<string | null | undefined>(undefined),
			tableCellId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedParagraphDetails {
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		number?: number | null;
		text?: Array<SharedTextDetails>;
		textContainer?: SharedTextContainerDetails;
		textContainerId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedParagraphDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
		textContainerId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedParagraphDetailsFormGroup() {
		return new FormGroup<SharedParagraphDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			textContainerId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedTextDetails {
		colorSolidFill?: SharedSolidFillsDetails;
		colorSolidFillsId?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		font?: string | null;
		fontSize?: number | null;
		id?: string | null;
		isBold?: boolean | null;
		isItalic?: boolean | null;
		isThemeFont?: boolean | null;
		isUnderline?: boolean | null;
		paragraph?: SharedParagraphDetails;
		paragraphId?: string | null;
		rawText?: string | null;
		sequence?: number | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedTextDetailsFormProperties {
		colorSolidFillsId: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		font: FormControl<string | null | undefined>,
		fontSize: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		isBold: FormControl<boolean | null | undefined>,
		isItalic: FormControl<boolean | null | undefined>,
		isThemeFont: FormControl<boolean | null | undefined>,
		isUnderline: FormControl<boolean | null | undefined>,
		paragraphId: FormControl<string | null | undefined>,
		rawText: FormControl<string | null | undefined>,
		sequence: FormControl<number | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedTextDetailsFormGroup() {
		return new FormGroup<SharedTextDetailsFormProperties>({
			colorSolidFillsId: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			font: new FormControl<string | null | undefined>(undefined),
			fontSize: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isBold: new FormControl<boolean | null | undefined>(undefined),
			isItalic: new FormControl<boolean | null | undefined>(undefined),
			isThemeFont: new FormControl<boolean | null | undefined>(undefined),
			isUnderline: new FormControl<boolean | null | undefined>(undefined),
			paragraphId: new FormControl<string | null | undefined>(undefined),
			rawText: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideShapesDetails {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		effect?: SharedEffectsDetails;
		fillMap?: SharedFillMapDetails;
		flipHorizontal?: boolean | null;
		flipVertical?: boolean | null;
		freeFormPathXml?: string | null;
		groupElement?: SlideGroupElementsDetails;
		groupElementsId?: string | null;
		height?: number | null;
		hidden?: boolean | null;
		id?: string | null;
		isThemeEffect?: boolean | null;
		isThemeFill?: boolean | null;
		isThemeLine?: boolean | null;
		line?: SharedLinesDetails;
		name?: string | null;
		ooxmlId?: number | null;
		packageUri?: string | null;
		presetTypeId?: string | null;
		rotation?: number | null;
		svgBlobUrl?: string | null;
		textContainer?: SharedTextContainerDetails;
		userCreated?: string | null;
		userModified?: string | null;
		width?: number | null;
		xOffset?: number | null;
		yOffset?: number | null;
	}
	export interface SlideShapesDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		flipHorizontal: FormControl<boolean | null | undefined>,
		flipVertical: FormControl<boolean | null | undefined>,
		freeFormPathXml: FormControl<string | null | undefined>,
		groupElementsId: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		isThemeEffect: FormControl<boolean | null | undefined>,
		isThemeFill: FormControl<boolean | null | undefined>,
		isThemeLine: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		presetTypeId: FormControl<string | null | undefined>,
		rotation: FormControl<number | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
		xOffset: FormControl<number | null | undefined>,
		yOffset: FormControl<number | null | undefined>,
	}
	export function CreateSlideShapesDetailsFormGroup() {
		return new FormGroup<SlideShapesDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			flipHorizontal: new FormControl<boolean | null | undefined>(undefined),
			flipVertical: new FormControl<boolean | null | undefined>(undefined),
			freeFormPathXml: new FormControl<string | null | undefined>(undefined),
			groupElementsId: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isThemeEffect: new FormControl<boolean | null | undefined>(undefined),
			isThemeFill: new FormControl<boolean | null | undefined>(undefined),
			isThemeLine: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			presetTypeId: new FormControl<string | null | undefined>(undefined),
			rotation: new FormControl<number | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			xOffset: new FormControl<number | null | undefined>(undefined),
			yOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ThemeLineMapDetails {
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		intensityId?: number | null;
		line?: SharedLinesDetails;
		theme?: ThemeThemesDetails;
		themeId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ThemeLineMapDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		intensityId: FormControl<number | null | undefined>,
		themeId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateThemeLineMapDetailsFormGroup() {
		return new FormGroup<ThemeLineMapDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			intensityId: new FormControl<number | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeThemesDetails {
		backgroundFills?: Array<ThemeBackgroundFillsDetails>;
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		colors?: ThemeColorsDetails;
		customColors?: Array<ThemeCustomColorsDetails>;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		effectMaps?: Array<ThemeEffectMapDetails>;
		fills?: Array<ThemeFillsDetails>;
		fonts?: ThemeFontsDetails;
		id?: string | null;
		lineMaps?: Array<ThemeLineMapDetails>;
		name?: string | null;
		packageUri?: string | null;
		slide?: SlideSlidesDetails;
		slideId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ThemeThemesDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		slideId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateThemeThemesDetailsFormGroup() {
		return new FormGroup<ThemeThemesDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			slideId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeBackgroundFillsDetails {
		dateCreated?: Date | null;
		dateModified?: Date | null;
		fillMap?: SharedFillMapDetails;
		id?: string | null;
		intensityId?: number | null;
		theme?: ThemeThemesDetails;
		themeId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ThemeBackgroundFillsDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		intensityId: FormControl<number | null | undefined>,
		themeId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateThemeBackgroundFillsDetailsFormGroup() {
		return new FormGroup<ThemeBackgroundFillsDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			intensityId: new FormControl<number | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeColorsDetails {
		accent1?: string | null;
		accent2?: string | null;
		accent3?: string | null;
		accent4?: string | null;
		accent5?: string | null;
		accent6?: string | null;
		dark1?: string | null;
		dark2?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		followedHyperlink?: string | null;
		hyperlink?: string | null;
		id?: string | null;
		light1?: string | null;
		light2?: string | null;
		name?: string | null;
		theme?: ThemeThemesDetails;
		themeId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ThemeColorsDetailsFormProperties {
		accent1: FormControl<string | null | undefined>,
		accent2: FormControl<string | null | undefined>,
		accent3: FormControl<string | null | undefined>,
		accent4: FormControl<string | null | undefined>,
		accent5: FormControl<string | null | undefined>,
		accent6: FormControl<string | null | undefined>,
		dark1: FormControl<string | null | undefined>,
		dark2: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		followedHyperlink: FormControl<string | null | undefined>,
		hyperlink: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		light1: FormControl<string | null | undefined>,
		light2: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		themeId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateThemeColorsDetailsFormGroup() {
		return new FormGroup<ThemeColorsDetailsFormProperties>({
			accent1: new FormControl<string | null | undefined>(undefined),
			accent2: new FormControl<string | null | undefined>(undefined),
			accent3: new FormControl<string | null | undefined>(undefined),
			accent4: new FormControl<string | null | undefined>(undefined),
			accent5: new FormControl<string | null | undefined>(undefined),
			accent6: new FormControl<string | null | undefined>(undefined),
			dark1: new FormControl<string | null | undefined>(undefined),
			dark2: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			followedHyperlink: new FormControl<string | null | undefined>(undefined),
			hyperlink: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			light1: new FormControl<string | null | undefined>(undefined),
			light2: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeCustomColorsDetails {
		dateCreated?: Date | null;
		dateModified?: Date | null;
		hexValue?: string | null;
		id?: string | null;
		name?: string | null;
		theme?: ThemeThemesDetails;
		themeId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ThemeCustomColorsDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		hexValue: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		themeId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateThemeCustomColorsDetailsFormGroup() {
		return new FormGroup<ThemeCustomColorsDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			hexValue: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeEffectMapDetails {
		dateCreated?: Date | null;
		dateModified?: Date | null;
		effect?: SharedEffectsDetails;
		id?: string | null;
		intensityId?: number | null;
		theme?: ThemeThemesDetails;
		themeId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ThemeEffectMapDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		intensityId: FormControl<number | null | undefined>,
		themeId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateThemeEffectMapDetailsFormGroup() {
		return new FormGroup<ThemeEffectMapDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			intensityId: new FormControl<number | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeFillsDetails {
		dateCreated?: Date | null;
		dateModified?: Date | null;
		fillMap?: SharedFillMapDetails;
		id?: string | null;
		intensityId?: number | null;
		theme?: ThemeThemesDetails;
		themeId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ThemeFillsDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		intensityId: FormControl<number | null | undefined>,
		themeId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateThemeFillsDetailsFormGroup() {
		return new FormGroup<ThemeFillsDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			intensityId: new FormControl<number | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeFontsDetails {
		bodyFont?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		headingFont?: string | null;
		id?: string | null;
		theme?: ThemeThemesDetails;
		themeId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface ThemeFontsDetailsFormProperties {
		bodyFont: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		headingFont: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		themeId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateThemeFontsDetailsFormGroup() {
		return new FormGroup<ThemeFontsDetailsFormProperties>({
			bodyFont: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			headingFont: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideSlidesDetails {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		document?: DocumentDetails;
		documentId?: string | null;
		id?: string | null;
		name?: string | null;
		number?: number | null;
		ooxmlId?: number | null;
		packageUri?: string | null;
		shapeTree?: SlideShapeTreesDetails;
		slideDocumentUrl?: string | null;
		slideMaster?: SlideSlideMastersDetails;
		svgBlobUrl?: string | null;
		theme?: ThemeThemesDetails;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SlideSlidesDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		documentId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		slideDocumentUrl: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSlideSlidesDetailsFormGroup() {
		return new FormGroup<SlideSlidesDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			documentId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			slideDocumentUrl: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentDetails {
		baseElementBlobUrl?: string | null;
		blobLocation?: string | null;
		changedBaseElementBlobUrl?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		documentTypeId?: number | null;
		filename?: string | null;
		id?: string | null;
		name?: string | null;
		ownerGuid?: string | null;
		packageUri?: string | null;
		slides?: Array<SlideSlidesDetails>;
		storyId?: string | null;
		tableStylesXmlBlobUrl?: string | null;
		title?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface DocumentDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		blobLocation: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		documentTypeId: FormControl<number | null | undefined>,
		filename: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ownerGuid: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		storyId: FormControl<string | null | undefined>,
		tableStylesXmlBlobUrl: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateDocumentDetailsFormGroup() {
		return new FormGroup<DocumentDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			blobLocation: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			documentTypeId: new FormControl<number | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownerGuid: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			storyId: new FormControl<string | null | undefined>(undefined),
			tableStylesXmlBlobUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideShapeTreesDetails {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		groupElement?: SlideGroupElementsDetails;
		groupElementId?: string | null;
		groupElements?: Array<SlideGroupElementsDetails>;
		hidden?: boolean | null;
		id?: string | null;
		name?: string | null;
		ooxmlId?: number | null;
		packageUri?: string | null;
		slide?: SlideSlidesDetails;
		slideId?: string | null;
		svgBlobUrl?: string | null;
		title?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SlideShapeTreesDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		groupElementId: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		slideId: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSlideShapeTreesDetailsFormGroup() {
		return new FormGroup<SlideShapeTreesDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			groupElementId: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			slideId: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideSlideMastersDetails {
		colorMap?: SlideColorMapsDetails;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		id?: string | null;
		parentSlide?: SlideSlidesDetails;
		slideId?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SlideSlideMastersDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		slideId: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSlideSlideMastersDetailsFormGroup() {
		return new FormGroup<SlideSlideMastersDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			slideId: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideColorMapsDetails {
		accent1?: number | null;
		accent2?: number | null;
		accent3?: number | null;
		accent4?: number | null;
		accent5?: number | null;
		accent6?: number | null;
		background1?: number | null;
		background2?: number | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		followedHyperlink?: number | null;
		hyperlink?: number | null;
		id?: string | null;
		slideMaster?: SlideSlideMastersDetails;
		slideMasterId?: string | null;
		text1?: number | null;
		text2?: number | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SlideColorMapsDetailsFormProperties {
		accent1: FormControl<number | null | undefined>,
		accent2: FormControl<number | null | undefined>,
		accent3: FormControl<number | null | undefined>,
		accent4: FormControl<number | null | undefined>,
		accent5: FormControl<number | null | undefined>,
		accent6: FormControl<number | null | undefined>,
		background1: FormControl<number | null | undefined>,
		background2: FormControl<number | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		followedHyperlink: FormControl<number | null | undefined>,
		hyperlink: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		slideMasterId: FormControl<string | null | undefined>,
		text1: FormControl<number | null | undefined>,
		text2: FormControl<number | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSlideColorMapsDetailsFormGroup() {
		return new FormGroup<SlideColorMapsDetailsFormProperties>({
			accent1: new FormControl<number | null | undefined>(undefined),
			accent2: new FormControl<number | null | undefined>(undefined),
			accent3: new FormControl<number | null | undefined>(undefined),
			accent4: new FormControl<number | null | undefined>(undefined),
			accent5: new FormControl<number | null | undefined>(undefined),
			accent6: new FormControl<number | null | undefined>(undefined),
			background1: new FormControl<number | null | undefined>(undefined),
			background2: new FormControl<number | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			followedHyperlink: new FormControl<number | null | undefined>(undefined),
			hyperlink: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			slideMasterId: new FormControl<string | null | undefined>(undefined),
			text1: new FormControl<number | null | undefined>(undefined),
			text2: new FormControl<number | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedImageFillsDetails {
		compressionState?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		dpi?: number | null;
		effectsJson?: string | null;
		fillMap?: SharedFillMapDetails;
		fillMapId?: string | null;
		id?: string | null;
		picture?: SharedPicturesDetails;
		rotateWithShape?: boolean | null;
		sourceRectangle?: string | null;
		stretch?: boolean | null;
		tile?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedImageFillsDetailsFormProperties {
		compressionState: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		dpi: FormControl<number | null | undefined>,
		effectsJson: FormControl<string | null | undefined>,
		fillMapId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		rotateWithShape: FormControl<boolean | null | undefined>,
		sourceRectangle: FormControl<string | null | undefined>,
		stretch: FormControl<boolean | null | undefined>,
		tile: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedImageFillsDetailsFormGroup() {
		return new FormGroup<SharedImageFillsDetailsFormProperties>({
			compressionState: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			dpi: new FormControl<number | null | undefined>(undefined),
			effectsJson: new FormControl<string | null | undefined>(undefined),
			fillMapId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			rotateWithShape: new FormControl<boolean | null | undefined>(undefined),
			sourceRectangle: new FormControl<string | null | undefined>(undefined),
			stretch: new FormControl<boolean | null | undefined>(undefined),
			tile: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedPicturesDetails {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		fileExtension?: string | null;
		graphicsId?: string | null;
		id?: string | null;
		imageFileBlobUrl?: string | null;
		imageFill?: SharedImageFillsDetails;
		imageFillsId?: string | null;
		name?: string | null;
		packageUri?: string | null;

		/**
		 * The graphics class provides a bridge between the Slides and
		 * lower level models including Charts, Tables, Pictures, and SmartArts
		 */
		parentGraphic?: SlideGraphicsDetails;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SharedPicturesDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		fileExtension: FormControl<string | null | undefined>,
		graphicsId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		imageFileBlobUrl: FormControl<string | null | undefined>,
		imageFillsId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSharedPicturesDetailsFormGroup() {
		return new FormGroup<SharedPicturesDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			fileExtension: new FormControl<string | null | undefined>(undefined),
			graphicsId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageFileBlobUrl: new FormControl<string | null | undefined>(undefined),
			imageFillsId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideGroupsDetails {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		groupElement?: SlideGroupElementsDetails;
		groupElementId?: string | null;
		hidden?: boolean | null;
		id?: string | null;
		name?: string | null;
		ooxmlId?: number | null;
		packageUri?: string | null;
		svgBlobUrl?: string | null;
		title?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SlideGroupsDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		groupElementId: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSlideGroupsDetailsFormGroup() {
		return new FormGroup<SlideGroupsDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			groupElementId: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideGroupElementTypesDetails {
		dateCreated?: Date | null;
		dateModified?: Date | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
		typeId?: number | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SlideGroupElementTypesDetailsFormProperties {
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSlideGroupElementTypesDetailsFormGroup() {
		return new FormGroup<SlideGroupElementTypesDetailsFormProperties>({
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideSmartArtsDetails {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		dateCreated?: Date | null;
		dateModified?: Date | null;
		graphicsId?: string | null;
		id?: string | null;
		name?: string | null;
		packageUri?: string | null;

		/**
		 * The graphics class provides a bridge between the Slides and
		 * lower level models including Charts, Tables, Pictures, and SmartArts
		 */
		parentGraphic?: SlideGraphicsDetails;
		svgBlobUrl?: string | null;
		userCreated?: string | null;
		userModified?: string | null;
	}
	export interface SlideSmartArtsDetailsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		dateCreated: FormControl<Date | null | undefined>,
		dateModified: FormControl<Date | null | undefined>,
		graphicsId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		userCreated: FormControl<string | null | undefined>,
		userModified: FormControl<string | null | undefined>,
	}
	export function CreateSlideSmartArtsDetailsFormGroup() {
		return new FormGroup<SlideSmartArtsDetailsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			dateCreated: new FormControl<Date | null | undefined>(undefined),
			dateModified: new FormControl<Date | null | undefined>(undefined),
			graphicsId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			userCreated: new FormControl<string | null | undefined>(undefined),
			userModified: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartAxisDataTypes {
		description?: string | null;
		id?: string | null;
		name?: string | null;
		ooxmlName?: string | null;
		typeId?: number | null;
	}
	export interface ChartAxisDataTypesFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlName: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateChartAxisDataTypesFormGroup() {
		return new FormGroup<ChartAxisDataTypesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlName: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ChartChartData {
		chartId?: string | null;
		id?: string | null;
	}
	export interface ChartChartDataFormProperties {
		chartId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateChartChartDataFormGroup() {
		return new FormGroup<ChartChartDataFormProperties>({
			chartId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartChartDataDTO {
		categoryNames?: Array<string>;
		chartId?: string | null;
		dataPoints?: Array<string>;
		seriesNames?: Array<string>;
	}
	export interface ChartChartDataDTOFormProperties {
		chartId: FormControl<string | null | undefined>,
	}
	export function CreateChartChartDataDTOFormGroup() {
		return new FormGroup<ChartChartDataDTOFormProperties>({
			chartId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartCharts {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		id?: string | null;
		name?: string | null;
		packageUri?: string | null;
		parentGraphicId?: string | null;
		svgBlobUrl?: string | null;
	}
	export interface ChartChartsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		parentGraphicId: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
	}
	export function CreateChartChartsFormGroup() {
		return new FormGroup<ChartChartsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			parentGraphicId: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartColumnCollections {
		chartDataId?: string | null;
		id?: string | null;
	}
	export interface ChartColumnCollectionsFormProperties {
		chartDataId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateChartColumnCollectionsFormGroup() {
		return new FormGroup<ChartColumnCollectionsFormProperties>({
			chartDataId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartColumns {
		axisId?: string | null;
		columnCollectionId?: string | null;
		id?: string | null;
		index?: number | null;
		name?: string | null;
	}
	export interface ChartColumnsFormProperties {
		axisId: FormControl<string | null | undefined>,
		columnCollectionId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateChartColumnsFormGroup() {
		return new FormGroup<ChartColumnsFormProperties>({
			axisId: new FormControl<string | null | undefined>(undefined),
			columnCollectionId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChartDataPoints {
		chartDataId?: string | null;
		columnId?: string | null;
		id?: string | null;
		rowId?: string | null;
		value?: number | null;
	}
	export interface ChartDataPointsFormProperties {
		chartDataId: FormControl<string | null | undefined>,
		columnId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		rowId: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreateChartDataPointsFormGroup() {
		return new FormGroup<ChartDataPointsFormProperties>({
			chartDataId: new FormControl<string | null | undefined>(undefined),
			columnId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			rowId: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ChartPlotType {
		id?: string | null;
		plotQualifedAssy?: string | null;
		plotTypeName?: string | null;
		rowColTypeId?: number | null;
		typeId?: number | null;
	}
	export interface ChartPlotTypeFormProperties {
		id: FormControl<string | null | undefined>,
		plotQualifedAssy: FormControl<string | null | undefined>,
		plotTypeName: FormControl<string | null | undefined>,
		rowColTypeId: FormControl<number | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateChartPlotTypeFormGroup() {
		return new FormGroup<ChartPlotTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			plotQualifedAssy: new FormControl<string | null | undefined>(undefined),
			plotTypeName: new FormControl<string | null | undefined>(undefined),
			rowColTypeId: new FormControl<number | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ChartRowCol {
		colName?: string | null;
		colQualifiedAssy?: string | null;
		id?: string | null;
		rowName?: string | null;
		rowQualifedAssy?: string | null;
		typeId?: number | null;
	}
	export interface ChartRowColFormProperties {
		colName: FormControl<string | null | undefined>,
		colQualifiedAssy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		rowName: FormControl<string | null | undefined>,
		rowQualifedAssy: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateChartRowColFormGroup() {
		return new FormGroup<ChartRowColFormProperties>({
			colName: new FormControl<string | null | undefined>(undefined),
			colQualifiedAssy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			rowName: new FormControl<string | null | undefined>(undefined),
			rowQualifedAssy: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ChartRowCollections {
		axisId?: string | null;
		chartDataId?: string | null;
		id?: string | null;
		nameFormatType?: number | null;
	}
	export interface ChartRowCollectionsFormProperties {
		axisId: FormControl<string | null | undefined>,
		chartDataId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		nameFormatType: FormControl<number | null | undefined>,
	}
	export function CreateChartRowCollectionsFormGroup() {
		return new FormGroup<ChartRowCollectionsFormProperties>({
			axisId: new FormControl<string | null | undefined>(undefined),
			chartDataId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			nameFormatType: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ChartRowNameFormatTypes {
		formatCode?: string | null;
		id?: string | null;
		powerToolsId?: number | null;
		typeId?: number | null;
	}
	export interface ChartRowNameFormatTypesFormProperties {
		formatCode: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		powerToolsId: FormControl<number | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateChartRowNameFormatTypesFormGroup() {
		return new FormGroup<ChartRowNameFormatTypesFormProperties>({
			formatCode: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			powerToolsId: new FormControl<number | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ChartRows {
		id?: string | null;
		index?: number | null;
		name?: string | null;
		rowNameCollectionId?: string | null;
	}
	export interface ChartRowsFormProperties {
		id: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		rowNameCollectionId: FormControl<string | null | undefined>,
	}
	export function CreateChartRowsFormGroup() {
		return new FormGroup<ChartRowsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rowNameCollectionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChildObjects {
		entityId?: string | null;
		entityName?: string | null;
		objectType?: string | null;
		parentEntityId?: string | null;
		parentObjectType?: string | null;
	}
	export interface ChildObjectsFormProperties {
		entityId: FormControl<string | null | undefined>,
		entityName: FormControl<string | null | undefined>,
		objectType: FormControl<string | null | undefined>,
		parentEntityId: FormControl<string | null | undefined>,
		parentObjectType: FormControl<string | null | undefined>,
	}
	export function CreateChildObjectsFormGroup() {
		return new FormGroup<ChildObjectsFormProperties>({
			entityId: new FormControl<string | null | undefined>(undefined),
			entityName: new FormControl<string | null | undefined>(undefined),
			objectType: new FormControl<string | null | undefined>(undefined),
			parentEntityId: new FormControl<string | null | undefined>(undefined),
			parentObjectType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Document {
		baseElementBlobUrl?: string | null;
		blobLocation?: string | null;
		changedBaseElementBlobUrl?: string | null;
		documentTypeId?: number | null;
		filename?: string | null;
		id?: string | null;
		name?: string | null;
		ownerGuid?: string | null;
		packageUri?: string | null;
		storyId?: string | null;
		tableStylesXmlBlobUrl?: string | null;
		title?: string | null;
	}
	export interface DocumentFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		blobLocation: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		documentTypeId: FormControl<number | null | undefined>,
		filename: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ownerGuid: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		storyId: FormControl<string | null | undefined>,
		tableStylesXmlBlobUrl: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			blobLocation: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			documentTypeId: new FormControl<number | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownerGuid: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			storyId: new FormControl<string | null | undefined>(undefined),
			tableStylesXmlBlobUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentCloneDTO {
		id?: string | null;
		storyId?: string | null;
	}
	export interface DocumentCloneDTOFormProperties {
		id: FormControl<string | null | undefined>,
		storyId: FormControl<string | null | undefined>,
	}
	export function CreateDocumentCloneDTOFormGroup() {
		return new FormGroup<DocumentCloneDTOFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			storyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentType {
		description?: string | null;
		fileExtension?: string | null;
		id?: string | null;
		mimeType?: string | null;
		name?: string | null;
		ooxmlPackageType?: string | null;
		typeId?: number | null;
	}
	export interface DocumentTypeFormProperties {
		description: FormControl<string | null | undefined>,
		fileExtension: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		mimeType: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlPackageType: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateDocumentTypeFormGroup() {
		return new FormGroup<DocumentTypeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			fileExtension: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mimeType: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlPackageType: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface OoxmlDTO {
		id?: string | null;
		openOfficeXml?: string | null;
		type?: string | null;
	}
	export interface OoxmlDTOFormProperties {
		id: FormControl<string | null | undefined>,
		openOfficeXml: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateOoxmlDTOFormGroup() {
		return new FormGroup<OoxmlDTOFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			openOfficeXml: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProblemDetails {
		detail?: string | null;
		instance?: string | null;
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}
	export interface ProblemDetailsFormProperties {
		detail: FormControl<string | null | undefined>,
		instance: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailsFormGroup() {
		return new FormGroup<ProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedColorTransformationAttributes {
		colorTransformationsId?: string | null;
		id?: string | null;
		name?: string | null;
		value?: string | null;
	}
	export interface SharedColorTransformationAttributesFormProperties {
		colorTransformationsId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSharedColorTransformationAttributesFormGroup() {
		return new FormGroup<SharedColorTransformationAttributesFormProperties>({
			colorTransformationsId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedColorTransformations {
		id?: string | null;
		name?: string | null;
		solidFillsId?: string | null;
	}
	export interface SharedColorTransformationsFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		solidFillsId: FormControl<string | null | undefined>,
	}
	export function CreateSharedColorTransformationsFormGroup() {
		return new FormGroup<SharedColorTransformationsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			solidFillsId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedColorTypes {
		colorSchemeIndexValueEnum?: number | null;
		description?: string | null;
		id?: string | null;
		name?: string | null;
		typeId?: number | null;
	}
	export interface SharedColorTypesFormProperties {
		colorSchemeIndexValueEnum: FormControl<number | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateSharedColorTypesFormGroup() {
		return new FormGroup<SharedColorTypesFormProperties>({
			colorSchemeIndexValueEnum: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SharedDashTypes {
		description?: string | null;
		id?: string | null;
		name?: string | null;
		serializedAs?: string | null;
		typeId?: number | null;
	}
	export interface SharedDashTypesFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		serializedAs: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateSharedDashTypesFormGroup() {
		return new FormGroup<SharedDashTypesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serializedAs: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SharedEffectAttributes {
		attributesJson?: string | null;
		effectId?: string | null;
		effectTypeId?: number | null;
		id?: string | null;
	}
	export interface SharedEffectAttributesFormProperties {
		attributesJson: FormControl<string | null | undefined>,
		effectId: FormControl<string | null | undefined>,
		effectTypeId: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateSharedEffectAttributesFormGroup() {
		return new FormGroup<SharedEffectAttributesFormProperties>({
			attributesJson: new FormControl<string | null | undefined>(undefined),
			effectId: new FormControl<string | null | undefined>(undefined),
			effectTypeId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedEffectTypes {
		description?: string | null;
		id?: string | null;
		name?: string | null;
		typeId?: number | null;
	}
	export interface SharedEffectTypesFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateSharedEffectTypesFormGroup() {
		return new FormGroup<SharedEffectTypesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SharedEffects {
		connectorId?: string | null;
		effectMapId?: string | null;
		id?: string | null;
		name?: string | null;
		shapeId?: string | null;
	}
	export interface SharedEffectsFormProperties {
		connectorId: FormControl<string | null | undefined>,
		effectMapId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		shapeId: FormControl<string | null | undefined>,
	}
	export function CreateSharedEffectsFormGroup() {
		return new FormGroup<SharedEffectsFormProperties>({
			connectorId: new FormControl<string | null | undefined>(undefined),
			effectMapId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shapeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedFillMap {
		connectorId?: string | null;
		effectAttributeId?: string | null;
		fillTypeId?: number | null;
		id?: string | null;
		shapeId?: string | null;
		tableCellId?: string | null;
		themeBackgroundFillId?: string | null;
		themeFillId?: string | null;
	}
	export interface SharedFillMapFormProperties {
		connectorId: FormControl<string | null | undefined>,
		effectAttributeId: FormControl<string | null | undefined>,
		fillTypeId: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		shapeId: FormControl<string | null | undefined>,
		tableCellId: FormControl<string | null | undefined>,
		themeBackgroundFillId: FormControl<string | null | undefined>,
		themeFillId: FormControl<string | null | undefined>,
	}
	export function CreateSharedFillMapFormGroup() {
		return new FormGroup<SharedFillMapFormProperties>({
			connectorId: new FormControl<string | null | undefined>(undefined),
			effectAttributeId: new FormControl<string | null | undefined>(undefined),
			fillTypeId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			shapeId: new FormControl<string | null | undefined>(undefined),
			tableCellId: new FormControl<string | null | undefined>(undefined),
			themeBackgroundFillId: new FormControl<string | null | undefined>(undefined),
			themeFillId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedFillTypes {
		description?: string | null;
		id?: string | null;
		name?: string | null;
		typeId?: number | null;
	}
	export interface SharedFillTypesFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateSharedFillTypesFormGroup() {
		return new FormGroup<SharedFillTypesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SharedGradientFills {
		angle?: number | null;
		fillMapId?: string | null;
		id?: string | null;
		isPath?: boolean | null;
		pathType?: string | null;
		rotateWithShape?: boolean | null;
	}
	export interface SharedGradientFillsFormProperties {
		angle: FormControl<number | null | undefined>,
		fillMapId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isPath: FormControl<boolean | null | undefined>,
		pathType: FormControl<string | null | undefined>,
		rotateWithShape: FormControl<boolean | null | undefined>,
	}
	export function CreateSharedGradientFillsFormGroup() {
		return new FormGroup<SharedGradientFillsFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			fillMapId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isPath: new FormControl<boolean | null | undefined>(undefined),
			pathType: new FormControl<string | null | undefined>(undefined),
			rotateWithShape: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SharedGradientStops {
		gradientFillsId?: string | null;
		id?: string | null;
		position?: number | null;
	}
	export interface SharedGradientStopsFormProperties {
		gradientFillsId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		position: FormControl<number | null | undefined>,
	}
	export function CreateSharedGradientStopsFormGroup() {
		return new FormGroup<SharedGradientStopsFormProperties>({
			gradientFillsId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SharedImageFills {
		compressionState?: string | null;
		dpi?: number | null;
		effectsJson?: string | null;
		fillMapId?: string | null;
		id?: string | null;
		rotateWithShape?: boolean | null;
		sourceRectangle?: string | null;
		stretch?: boolean | null;
		tile?: string | null;
	}
	export interface SharedImageFillsFormProperties {
		compressionState: FormControl<string | null | undefined>,
		dpi: FormControl<number | null | undefined>,
		effectsJson: FormControl<string | null | undefined>,
		fillMapId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		rotateWithShape: FormControl<boolean | null | undefined>,
		sourceRectangle: FormControl<string | null | undefined>,
		stretch: FormControl<boolean | null | undefined>,
		tile: FormControl<string | null | undefined>,
	}
	export function CreateSharedImageFillsFormGroup() {
		return new FormGroup<SharedImageFillsFormProperties>({
			compressionState: new FormControl<string | null | undefined>(undefined),
			dpi: new FormControl<number | null | undefined>(undefined),
			effectsJson: new FormControl<string | null | undefined>(undefined),
			fillMapId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			rotateWithShape: new FormControl<boolean | null | undefined>(undefined),
			sourceRectangle: new FormControl<string | null | undefined>(undefined),
			stretch: new FormControl<boolean | null | undefined>(undefined),
			tile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedLineEndSizes {
		description?: string | null;
		id?: string | null;
		name?: string | null;
		serializedAs?: string | null;
		typeId?: number | null;
	}
	export interface SharedLineEndSizesFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		serializedAs: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateSharedLineEndSizesFormGroup() {
		return new FormGroup<SharedLineEndSizesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serializedAs: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SharedLineEndTypes {
		description?: string | null;
		id?: string | null;
		name?: string | null;
		serializedAs?: string | null;
		typeId?: number | null;
	}
	export interface SharedLineEndTypesFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		serializedAs: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateSharedLineEndTypesFormGroup() {
		return new FormGroup<SharedLineEndTypesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			serializedAs: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SharedLines {
		bLtoTRBorderId?: string | null;
		bottomBorderId?: string | null;
		connectorId?: string | null;
		dashTypeId?: number | null;
		headEndHeightId?: number | null;
		headEndTypeId?: number | null;
		headEndWidthId?: number | null;
		id?: string | null;
		leftBorderId?: string | null;
		lineMapId?: string | null;
		rightBorderId?: string | null;
		shapeId?: string | null;
		tLtoBRBorderId?: string | null;
		tailEndHeightId?: number | null;
		tailEndTypeId?: number | null;
		tailEndWidthId?: number | null;
		topBorderId?: string | null;
		weight?: number | null;
	}
	export interface SharedLinesFormProperties {
		bLtoTRBorderId: FormControl<string | null | undefined>,
		bottomBorderId: FormControl<string | null | undefined>,
		connectorId: FormControl<string | null | undefined>,
		dashTypeId: FormControl<number | null | undefined>,
		headEndHeightId: FormControl<number | null | undefined>,
		headEndTypeId: FormControl<number | null | undefined>,
		headEndWidthId: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		leftBorderId: FormControl<string | null | undefined>,
		lineMapId: FormControl<string | null | undefined>,
		rightBorderId: FormControl<string | null | undefined>,
		shapeId: FormControl<string | null | undefined>,
		tLtoBRBorderId: FormControl<string | null | undefined>,
		tailEndHeightId: FormControl<number | null | undefined>,
		tailEndTypeId: FormControl<number | null | undefined>,
		tailEndWidthId: FormControl<number | null | undefined>,
		topBorderId: FormControl<string | null | undefined>,
		weight: FormControl<number | null | undefined>,
	}
	export function CreateSharedLinesFormGroup() {
		return new FormGroup<SharedLinesFormProperties>({
			bLtoTRBorderId: new FormControl<string | null | undefined>(undefined),
			bottomBorderId: new FormControl<string | null | undefined>(undefined),
			connectorId: new FormControl<string | null | undefined>(undefined),
			dashTypeId: new FormControl<number | null | undefined>(undefined),
			headEndHeightId: new FormControl<number | null | undefined>(undefined),
			headEndTypeId: new FormControl<number | null | undefined>(undefined),
			headEndWidthId: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			leftBorderId: new FormControl<string | null | undefined>(undefined),
			lineMapId: new FormControl<string | null | undefined>(undefined),
			rightBorderId: new FormControl<string | null | undefined>(undefined),
			shapeId: new FormControl<string | null | undefined>(undefined),
			tLtoBRBorderId: new FormControl<string | null | undefined>(undefined),
			tailEndHeightId: new FormControl<number | null | undefined>(undefined),
			tailEndTypeId: new FormControl<number | null | undefined>(undefined),
			tailEndWidthId: new FormControl<number | null | undefined>(undefined),
			topBorderId: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SharedParagraph {
		id?: string | null;
		number?: number | null;
		textContainerId?: string | null;
	}
	export interface SharedParagraphFormProperties {
		id: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
		textContainerId: FormControl<string | null | undefined>,
	}
	export function CreateSharedParagraphFormGroup() {
		return new FormGroup<SharedParagraphFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			textContainerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedPictures {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		fileExtension?: string | null;
		graphicsId?: string | null;
		id?: string | null;
		imageFileBlobUrl?: string | null;
		imageFillsId?: string | null;
		name?: string | null;
		packageUri?: string | null;
	}
	export interface SharedPicturesFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		fileExtension: FormControl<string | null | undefined>,
		graphicsId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		imageFileBlobUrl: FormControl<string | null | undefined>,
		imageFillsId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
	}
	export function CreateSharedPicturesFormGroup() {
		return new FormGroup<SharedPicturesFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			fileExtension: new FormControl<string | null | undefined>(undefined),
			graphicsId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			imageFileBlobUrl: new FormControl<string | null | undefined>(undefined),
			imageFillsId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedSolidFills {
		colorTypeId?: number | null;
		fillMapId?: string | null;
		hexValue?: string | null;
		id?: string | null;
		isUserColor?: boolean | null;
		parentGradientStopId?: string | null;
		parentLineId?: string | null;
		parentTextId?: string | null;
	}
	export interface SharedSolidFillsFormProperties {
		colorTypeId: FormControl<number | null | undefined>,
		fillMapId: FormControl<string | null | undefined>,
		hexValue: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isUserColor: FormControl<boolean | null | undefined>,
		parentGradientStopId: FormControl<string | null | undefined>,
		parentLineId: FormControl<string | null | undefined>,
		parentTextId: FormControl<string | null | undefined>,
	}
	export function CreateSharedSolidFillsFormGroup() {
		return new FormGroup<SharedSolidFillsFormProperties>({
			colorTypeId: new FormControl<number | null | undefined>(undefined),
			fillMapId: new FormControl<string | null | undefined>(undefined),
			hexValue: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isUserColor: new FormControl<boolean | null | undefined>(undefined),
			parentGradientStopId: new FormControl<string | null | undefined>(undefined),
			parentLineId: new FormControl<string | null | undefined>(undefined),
			parentTextId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SharedText {
		colorSolidFillsId?: string | null;
		font?: string | null;
		fontSize?: number | null;
		id?: string | null;
		isBold?: boolean | null;
		isItalic?: boolean | null;
		isThemeFont?: boolean | null;
		isUnderline?: boolean | null;
		paragraphId?: string | null;
		rawText?: string | null;
		sequence?: number | null;
	}
	export interface SharedTextFormProperties {
		colorSolidFillsId: FormControl<string | null | undefined>,
		font: FormControl<string | null | undefined>,
		fontSize: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		isBold: FormControl<boolean | null | undefined>,
		isItalic: FormControl<boolean | null | undefined>,
		isThemeFont: FormControl<boolean | null | undefined>,
		isUnderline: FormControl<boolean | null | undefined>,
		paragraphId: FormControl<string | null | undefined>,
		rawText: FormControl<string | null | undefined>,
		sequence: FormControl<number | null | undefined>,
	}
	export function CreateSharedTextFormGroup() {
		return new FormGroup<SharedTextFormProperties>({
			colorSolidFillsId: new FormControl<string | null | undefined>(undefined),
			font: new FormControl<string | null | undefined>(undefined),
			fontSize: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isBold: new FormControl<boolean | null | undefined>(undefined),
			isItalic: new FormControl<boolean | null | undefined>(undefined),
			isThemeFont: new FormControl<boolean | null | undefined>(undefined),
			isUnderline: new FormControl<boolean | null | undefined>(undefined),
			paragraphId: new FormControl<string | null | undefined>(undefined),
			rawText: new FormControl<string | null | undefined>(undefined),
			sequence: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SharedTextContainer {
		axisId?: string | null;
		chartId?: string | null;
		id?: string | null;
		outerXml?: string | null;
		shapeId?: string | null;
		tableCellId?: string | null;
	}
	export interface SharedTextContainerFormProperties {
		axisId: FormControl<string | null | undefined>,
		chartId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		outerXml: FormControl<string | null | undefined>,
		shapeId: FormControl<string | null | undefined>,
		tableCellId: FormControl<string | null | undefined>,
	}
	export function CreateSharedTextContainerFormGroup() {
		return new FormGroup<SharedTextContainerFormProperties>({
			axisId: new FormControl<string | null | undefined>(undefined),
			chartId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			outerXml: new FormControl<string | null | undefined>(undefined),
			shapeId: new FormControl<string | null | undefined>(undefined),
			tableCellId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideColorMaps {
		accent1?: number | null;
		accent2?: number | null;
		accent3?: number | null;
		accent4?: number | null;
		accent5?: number | null;
		accent6?: number | null;
		background1?: number | null;
		background2?: number | null;
		followedHyperlink?: number | null;
		hyperlink?: number | null;
		id?: string | null;
		slideMasterId?: string | null;
		text1?: number | null;
		text2?: number | null;
	}
	export interface SlideColorMapsFormProperties {
		accent1: FormControl<number | null | undefined>,
		accent2: FormControl<number | null | undefined>,
		accent3: FormControl<number | null | undefined>,
		accent4: FormControl<number | null | undefined>,
		accent5: FormControl<number | null | undefined>,
		accent6: FormControl<number | null | undefined>,
		background1: FormControl<number | null | undefined>,
		background2: FormControl<number | null | undefined>,
		followedHyperlink: FormControl<number | null | undefined>,
		hyperlink: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		slideMasterId: FormControl<string | null | undefined>,
		text1: FormControl<number | null | undefined>,
		text2: FormControl<number | null | undefined>,
	}
	export function CreateSlideColorMapsFormGroup() {
		return new FormGroup<SlideColorMapsFormProperties>({
			accent1: new FormControl<number | null | undefined>(undefined),
			accent2: new FormControl<number | null | undefined>(undefined),
			accent3: new FormControl<number | null | undefined>(undefined),
			accent4: new FormControl<number | null | undefined>(undefined),
			accent5: new FormControl<number | null | undefined>(undefined),
			accent6: new FormControl<number | null | undefined>(undefined),
			background1: new FormControl<number | null | undefined>(undefined),
			background2: new FormControl<number | null | undefined>(undefined),
			followedHyperlink: new FormControl<number | null | undefined>(undefined),
			hyperlink: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			slideMasterId: new FormControl<string | null | undefined>(undefined),
			text1: new FormControl<number | null | undefined>(undefined),
			text2: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SlideConnector {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		endConnectionIdx?: number | null;
		endConnectionShapeId?: string | null;
		flipHorizontal?: boolean | null;
		flipVertical?: boolean | null;
		freeFormPathXml?: string | null;
		groupElementsId?: string | null;
		hidden?: boolean | null;
		id?: string | null;
		isThemeEffect?: boolean | null;
		isThemeFill?: boolean | null;
		isThemeLine?: boolean | null;
		name?: string | null;
		ooxmlId?: number | null;
		packageUri?: string | null;
		presetTypeId?: string | null;
		rotation?: number | null;
		startConnectionIdx?: number | null;
		startConnectionShapeId?: string | null;
		svgBlobUrl?: string | null;
	}
	export interface SlideConnectorFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		endConnectionIdx: FormControl<number | null | undefined>,
		endConnectionShapeId: FormControl<string | null | undefined>,
		flipHorizontal: FormControl<boolean | null | undefined>,
		flipVertical: FormControl<boolean | null | undefined>,
		freeFormPathXml: FormControl<string | null | undefined>,
		groupElementsId: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		isThemeEffect: FormControl<boolean | null | undefined>,
		isThemeFill: FormControl<boolean | null | undefined>,
		isThemeLine: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		presetTypeId: FormControl<string | null | undefined>,
		rotation: FormControl<number | null | undefined>,
		startConnectionIdx: FormControl<number | null | undefined>,
		startConnectionShapeId: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
	}
	export function CreateSlideConnectorFormGroup() {
		return new FormGroup<SlideConnectorFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			endConnectionIdx: new FormControl<number | null | undefined>(undefined),
			endConnectionShapeId: new FormControl<string | null | undefined>(undefined),
			flipHorizontal: new FormControl<boolean | null | undefined>(undefined),
			flipVertical: new FormControl<boolean | null | undefined>(undefined),
			freeFormPathXml: new FormControl<string | null | undefined>(undefined),
			groupElementsId: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isThemeEffect: new FormControl<boolean | null | undefined>(undefined),
			isThemeFill: new FormControl<boolean | null | undefined>(undefined),
			isThemeLine: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			presetTypeId: new FormControl<string | null | undefined>(undefined),
			rotation: new FormControl<number | null | undefined>(undefined),
			startConnectionIdx: new FormControl<number | null | undefined>(undefined),
			startConnectionShapeId: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideGraphicTypes {
		description?: string | null;
		id?: string | null;
		name?: string | null;
		typeId?: number | null;
	}
	export interface SlideGraphicTypesFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateSlideGraphicTypesFormGroup() {
		return new FormGroup<SlideGraphicTypesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SlideGraphics {
		graphicTypeId?: number | null;
		groupElementsId?: string | null;
		height?: number | null;
		id?: string | null;
		name?: string | null;
		ooxmlId?: number | null;
		width?: number | null;
		xOffset?: number | null;
		yOffset?: number | null;
	}
	export interface SlideGraphicsFormProperties {
		graphicTypeId: FormControl<number | null | undefined>,
		groupElementsId: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		width: FormControl<number | null | undefined>,
		xOffset: FormControl<number | null | undefined>,
		yOffset: FormControl<number | null | undefined>,
	}
	export function CreateSlideGraphicsFormGroup() {
		return new FormGroup<SlideGraphicsFormProperties>({
			graphicTypeId: new FormControl<number | null | undefined>(undefined),
			groupElementsId: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			xOffset: new FormControl<number | null | undefined>(undefined),
			yOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SlideGroupElementTypes {
		description?: string | null;
		id?: string | null;
		name?: string | null;
		typeId?: number | null;
	}
	export interface SlideGroupElementTypesFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateSlideGroupElementTypesFormGroup() {
		return new FormGroup<SlideGroupElementTypesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SlideGroupElements {
		groupElementTypeId?: number | null;
		groupElementTypePk?: string | null;
		id?: string | null;
		parentGroupElementId?: string | null;
		shapeTreeId?: string | null;
		ultimateParentShapeTreeId?: string | null;
	}
	export interface SlideGroupElementsFormProperties {
		groupElementTypeId: FormControl<number | null | undefined>,
		groupElementTypePk: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		parentGroupElementId: FormControl<string | null | undefined>,
		shapeTreeId: FormControl<string | null | undefined>,
		ultimateParentShapeTreeId: FormControl<string | null | undefined>,
	}
	export function CreateSlideGroupElementsFormGroup() {
		return new FormGroup<SlideGroupElementsFormProperties>({
			groupElementTypeId: new FormControl<number | null | undefined>(undefined),
			groupElementTypePk: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			parentGroupElementId: new FormControl<string | null | undefined>(undefined),
			shapeTreeId: new FormControl<string | null | undefined>(undefined),
			ultimateParentShapeTreeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideGroups {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		groupElementId?: string | null;
		hidden?: boolean | null;
		id?: string | null;
		name?: string | null;
		ooxmlId?: number | null;
		packageUri?: string | null;
		svgBlobUrl?: string | null;
		title?: string | null;
	}
	export interface SlideGroupsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		groupElementId: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSlideGroupsFormGroup() {
		return new FormGroup<SlideGroupsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			groupElementId: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideShapeTrees {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		groupElementId?: string | null;
		hidden?: boolean | null;
		id?: string | null;
		name?: string | null;
		ooxmlId?: number | null;
		packageUri?: string | null;
		slideId?: string | null;
		svgBlobUrl?: string | null;
		title?: string | null;
	}
	export interface SlideShapeTreesFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		groupElementId: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		slideId: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSlideShapeTreesFormGroup() {
		return new FormGroup<SlideShapeTreesFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			groupElementId: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			slideId: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideShapes {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		flipHorizontal?: boolean | null;
		flipVertical?: boolean | null;
		freeFormPathXml?: string | null;
		groupElementsId?: string | null;
		height?: number | null;
		hidden?: boolean | null;
		id?: string | null;
		isThemeEffect?: boolean | null;
		isThemeFill?: boolean | null;
		isThemeLine?: boolean | null;
		name?: string | null;
		ooxmlId?: number | null;
		packageUri?: string | null;
		presetTypeId?: string | null;
		rotation?: number | null;
		svgBlobUrl?: string | null;
		width?: number | null;
		xOffset?: number | null;
		yOffset?: number | null;
	}
	export interface SlideShapesFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		flipHorizontal: FormControl<boolean | null | undefined>,
		flipVertical: FormControl<boolean | null | undefined>,
		freeFormPathXml: FormControl<string | null | undefined>,
		groupElementsId: FormControl<string | null | undefined>,
		height: FormControl<number | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		isThemeEffect: FormControl<boolean | null | undefined>,
		isThemeFill: FormControl<boolean | null | undefined>,
		isThemeLine: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		presetTypeId: FormControl<string | null | undefined>,
		rotation: FormControl<number | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
		xOffset: FormControl<number | null | undefined>,
		yOffset: FormControl<number | null | undefined>,
	}
	export function CreateSlideShapesFormGroup() {
		return new FormGroup<SlideShapesFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			flipHorizontal: new FormControl<boolean | null | undefined>(undefined),
			flipVertical: new FormControl<boolean | null | undefined>(undefined),
			freeFormPathXml: new FormControl<string | null | undefined>(undefined),
			groupElementsId: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isThemeEffect: new FormControl<boolean | null | undefined>(undefined),
			isThemeFill: new FormControl<boolean | null | undefined>(undefined),
			isThemeLine: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			presetTypeId: new FormControl<string | null | undefined>(undefined),
			rotation: new FormControl<number | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
			xOffset: new FormControl<number | null | undefined>(undefined),
			yOffset: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SlideSlideMasters {
		id?: string | null;
		slideId?: string | null;
	}
	export interface SlideSlideMastersFormProperties {
		id: FormControl<string | null | undefined>,
		slideId: FormControl<string | null | undefined>,
	}
	export function CreateSlideSlideMastersFormGroup() {
		return new FormGroup<SlideSlideMastersFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			slideId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideSlides {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		documentId?: string | null;
		id?: string | null;
		name?: string | null;
		number?: number | null;
		ooxmlId?: number | null;
		packageUri?: string | null;
		slideDocumentUrl?: string | null;
		svgBlobUrl?: string | null;
	}
	export interface SlideSlidesFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		documentId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		number: FormControl<number | null | undefined>,
		ooxmlId: FormControl<number | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		slideDocumentUrl: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
	}
	export function CreateSlideSlidesFormGroup() {
		return new FormGroup<SlideSlidesFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			documentId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			ooxmlId: new FormControl<number | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			slideDocumentUrl: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlideSmartArts {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		graphicsId?: string | null;
		id?: string | null;
		name?: string | null;
		packageUri?: string | null;
		svgBlobUrl?: string | null;
	}
	export interface SlideSmartArtsFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		graphicsId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
	}
	export function CreateSlideSmartArtsFormGroup() {
		return new FormGroup<SlideSmartArtsFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			graphicsId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableBorders {
		cellId?: string | null;
		id?: string | null;
	}
	export interface TableBordersFormProperties {
		cellId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateTableBordersFormGroup() {
		return new FormGroup<TableBordersFormProperties>({
			cellId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableCells {
		columnId?: string | null;
		columnSpan?: number | null;
		id?: string | null;
		isMergedHorozontal?: boolean | null;
		isMergedVertical?: boolean | null;
		rowId?: string | null;
		rowSpan?: number | null;
	}
	export interface TableCellsFormProperties {
		columnId: FormControl<string | null | undefined>,
		columnSpan: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		isMergedHorozontal: FormControl<boolean | null | undefined>,
		isMergedVertical: FormControl<boolean | null | undefined>,
		rowId: FormControl<string | null | undefined>,
		rowSpan: FormControl<number | null | undefined>,
	}
	export function CreateTableCellsFormGroup() {
		return new FormGroup<TableCellsFormProperties>({
			columnId: new FormControl<string | null | undefined>(undefined),
			columnSpan: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isMergedHorozontal: new FormControl<boolean | null | undefined>(undefined),
			isMergedVertical: new FormControl<boolean | null | undefined>(undefined),
			rowId: new FormControl<string | null | undefined>(undefined),
			rowSpan: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TableColumns {
		id?: string | null;
		index?: number | null;
		tableId?: string | null;
		width?: number | null;
	}
	export interface TableColumnsFormProperties {
		id: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
		tableId: FormControl<string | null | undefined>,
		width: FormControl<number | null | undefined>,
	}
	export function CreateTableColumnsFormGroup() {
		return new FormGroup<TableColumnsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TableRows {
		height?: number | null;
		id?: string | null;
		index?: number | null;
		tableId?: string | null;
	}
	export interface TableRowsFormProperties {
		height: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		index: FormControl<number | null | undefined>,
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateTableRowsFormGroup() {
		return new FormGroup<TableRowsFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableTableDataDTO {
		tableData?: Array<string>;
		tableId?: string | null;
	}
	export interface TableTableDataDTOFormProperties {
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateTableTableDataDTOFormGroup() {
		return new FormGroup<TableTableDataDTOFormProperties>({
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TableTables {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		hasStylePart?: boolean | null;
		id?: string | null;
		name?: string | null;
		packageUri?: string | null;
		parentGraphicId?: string | null;
		stylePartOuterXml?: string | null;
		svgBlobUrl?: string | null;
	}
	export interface TableTablesFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		hasStylePart: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		parentGraphicId: FormControl<string | null | undefined>,
		stylePartOuterXml: FormControl<string | null | undefined>,
		svgBlobUrl: FormControl<string | null | undefined>,
	}
	export function CreateTableTablesFormGroup() {
		return new FormGroup<TableTablesFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			hasStylePart: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			parentGraphicId: new FormControl<string | null | undefined>(undefined),
			stylePartOuterXml: new FormControl<string | null | undefined>(undefined),
			svgBlobUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeBackgroundFills {
		id?: string | null;
		intensityId?: number | null;
		themeId?: string | null;
	}
	export interface ThemeBackgroundFillsFormProperties {
		id: FormControl<string | null | undefined>,
		intensityId: FormControl<number | null | undefined>,
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateThemeBackgroundFillsFormGroup() {
		return new FormGroup<ThemeBackgroundFillsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			intensityId: new FormControl<number | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeColors {
		accent1?: string | null;
		accent2?: string | null;
		accent3?: string | null;
		accent4?: string | null;
		accent5?: string | null;
		accent6?: string | null;
		dark1?: string | null;
		dark2?: string | null;
		followedHyperlink?: string | null;
		hyperlink?: string | null;
		id?: string | null;
		light1?: string | null;
		light2?: string | null;
		name?: string | null;
		themeId?: string | null;
	}
	export interface ThemeColorsFormProperties {
		accent1: FormControl<string | null | undefined>,
		accent2: FormControl<string | null | undefined>,
		accent3: FormControl<string | null | undefined>,
		accent4: FormControl<string | null | undefined>,
		accent5: FormControl<string | null | undefined>,
		accent6: FormControl<string | null | undefined>,
		dark1: FormControl<string | null | undefined>,
		dark2: FormControl<string | null | undefined>,
		followedHyperlink: FormControl<string | null | undefined>,
		hyperlink: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		light1: FormControl<string | null | undefined>,
		light2: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateThemeColorsFormGroup() {
		return new FormGroup<ThemeColorsFormProperties>({
			accent1: new FormControl<string | null | undefined>(undefined),
			accent2: new FormControl<string | null | undefined>(undefined),
			accent3: new FormControl<string | null | undefined>(undefined),
			accent4: new FormControl<string | null | undefined>(undefined),
			accent5: new FormControl<string | null | undefined>(undefined),
			accent6: new FormControl<string | null | undefined>(undefined),
			dark1: new FormControl<string | null | undefined>(undefined),
			dark2: new FormControl<string | null | undefined>(undefined),
			followedHyperlink: new FormControl<string | null | undefined>(undefined),
			hyperlink: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			light1: new FormControl<string | null | undefined>(undefined),
			light2: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeCustomColors {
		hexValue?: string | null;
		id?: string | null;
		name?: string | null;
		themeId?: string | null;
	}
	export interface ThemeCustomColorsFormProperties {
		hexValue: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateThemeCustomColorsFormGroup() {
		return new FormGroup<ThemeCustomColorsFormProperties>({
			hexValue: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeEffectMap {
		id?: string | null;
		intensityId?: number | null;
		themeId?: string | null;
	}
	export interface ThemeEffectMapFormProperties {
		id: FormControl<string | null | undefined>,
		intensityId: FormControl<number | null | undefined>,
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateThemeEffectMapFormGroup() {
		return new FormGroup<ThemeEffectMapFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			intensityId: new FormControl<number | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeFills {
		id?: string | null;
		intensityId?: number | null;
		themeId?: string | null;
	}
	export interface ThemeFillsFormProperties {
		id: FormControl<string | null | undefined>,
		intensityId: FormControl<number | null | undefined>,
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateThemeFillsFormGroup() {
		return new FormGroup<ThemeFillsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			intensityId: new FormControl<number | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeFonts {
		bodyFont?: string | null;
		headingFont?: string | null;
		id?: string | null;
		themeId?: string | null;
	}
	export interface ThemeFontsFormProperties {
		bodyFont: FormControl<string | null | undefined>,
		headingFont: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateThemeFontsFormGroup() {
		return new FormGroup<ThemeFontsFormProperties>({
			bodyFont: new FormControl<string | null | undefined>(undefined),
			headingFont: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeIntensity {
		description?: string | null;
		id?: string | null;
		name?: string | null;
		typeId?: number | null;
	}
	export interface ThemeIntensityFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateThemeIntensityFormGroup() {
		return new FormGroup<ThemeIntensityFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ThemeLineMap {
		id?: string | null;
		intensityId?: number | null;
		themeId?: string | null;
	}
	export interface ThemeLineMapFormProperties {
		id: FormControl<string | null | undefined>,
		intensityId: FormControl<number | null | undefined>,
		themeId: FormControl<string | null | undefined>,
	}
	export function CreateThemeLineMapFormGroup() {
		return new FormGroup<ThemeLineMapFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			intensityId: new FormControl<number | null | undefined>(undefined),
			themeId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeThemes {
		baseElementBlobUrl?: string | null;
		changedBaseElementBlobUrl?: string | null;
		id?: string | null;
		name?: string | null;
		packageUri?: string | null;
		slideId?: string | null;
	}
	export interface ThemeThemesFormProperties {
		baseElementBlobUrl: FormControl<string | null | undefined>,
		changedBaseElementBlobUrl: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		packageUri: FormControl<string | null | undefined>,
		slideId: FormControl<string | null | undefined>,
	}
	export function CreateThemeThemesFormGroup() {
		return new FormGroup<ThemeThemesFormProperties>({
			baseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			changedBaseElementBlobUrl: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			packageUri: new FormControl<string | null | undefined>(undefined),
			slideId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Axes: Get by Id
		 * Get by Id: Use this method to retrieve a Axes object by its primary key (id)
		 * Get Charts/Axes/{id}
		 * @return {ChartAxes} Success
		 */
		Chart_axes_get_id(id: string): Observable<ChartAxes> {
			return this.http.get<ChartAxes>(this.baseUri + 'Charts/Axes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * AxisDataTypes: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the AxisDataTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.
		 * Get Charts/AxisDataTypes
		 * @return {Array<ChartAxisDataTypes>} Success
		 */
		Chart_axisdatatypes_get(): Observable<Array<ChartAxisDataTypes>> {
			return this.http.get<Array<ChartAxisDataTypes>>(this.baseUri + 'Charts/AxisDataTypes', {});
		}

		/**
		 * AxisDataTypes: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Charts/AxisDataTypes/TypeId/{type_id}
		 * @return {ChartAxisDataTypes} Success
		 */
		Chart_axisdatatypes_typeid_get_type_id(type_id: number): Observable<ChartAxisDataTypes> {
			return this.http.get<ChartAxisDataTypes>(this.baseUri + 'Charts/AxisDataTypes/TypeId/' + type_id, {});
		}

		/**
		 * AxisDataTypes: Get by Id
		 * Get by Id: Use this method to retrieve a AxisDataTypes object by its primary key (id)
		 * Get Charts/AxisDataTypes/{id}
		 * @return {ChartAxisDataTypes} Success
		 */
		Chart_axisdatatypes_get_id(id: string): Observable<ChartAxisDataTypes> {
			return this.http.get<ChartAxisDataTypes>(this.baseUri + 'Charts/AxisDataTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * ChartData: Get by Id
		 * Get by Id: Use this method to retrieve a ChartData object by its primary key (id)
		 * Get Charts/ChartData/{id}
		 * @return {ChartChartData} Success
		 */
		Chart_chartdata_get_id(id: string): Observable<ChartChartData> {
			return this.http.get<ChartChartData>(this.baseUri + 'Charts/ChartData/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Charts: Get Chart Data
		 * Gets a ChartDataDTO object, usually used for downstream analytics and chart updates
		 * Get Charts/ChartUpdate/{id}
		 * @return {ChartChartDataDTO} Success
		 */
		Charts_charts_chartupdate_get_id(id: string): Observable<ChartChartDataDTO> {
			return this.http.get<ChartChartDataDTO>(this.baseUri + 'Charts/ChartUpdate/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Charts: Update Chart Data
		 * Simplifies chart update by allowing users to supply data via ChartDataDTO
		 * Put Charts/ChartUpdate/{id}
		 * @param {string} id The Chart Id
		 * @param {ChartChartDataDTO} requestBody The ChartDataDto Object
		 * @return {void} Success
		 */
		Charts_charts_chartupdate_put_id(id: string, requestBody: ChartChartDataDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Charts/ChartUpdate/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Charts: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this Chart and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get Charts/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Charts_charts_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'Charts/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * ColumnCollections: Get by Id
		 * Get by Id: Use this method to retrieve a ColumnCollections object by its primary key (id)
		 * Get Charts/ColumnCollections/{id}
		 * @return {ChartColumnCollections} Success
		 */
		Chart_columncollections_get_id(id: string): Observable<ChartColumnCollections> {
			return this.http.get<ChartColumnCollections>(this.baseUri + 'Charts/ColumnCollections/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Columns: Get by Id
		 * Get by Id: Use this method to retrieve a Columns object by its primary key (id)
		 * Get Charts/Columns/{id}
		 * @return {ChartColumns} Success
		 */
		Chart_columns_get_id(id: string): Observable<ChartColumns> {
			return this.http.get<ChartColumns>(this.baseUri + 'Charts/Columns/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * DataPoints: Get by Id
		 * Get by Id: Use this method to retrieve a DataPoints object by its primary key (id)
		 * Get Charts/DataPoints/{id}
		 * @return {ChartDataPoints} Success
		 */
		Chart_datapoints_get_id(id: string): Observable<ChartDataPoints> {
			return this.http.get<ChartDataPoints>(this.baseUri + 'Charts/DataPoints/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Charts: Get Details
		 * Returns object metadata and information about relative dependent objects
		 * Get Charts/Details/{id}
		 * @return {ChartChartsDetails} Success
		 */
		Charts_charts_details_get_id(id: string): Observable<ChartChartsDetails> {
			return this.http.get<ChartChartsDetails>(this.baseUri + 'Charts/Details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Charts: Get Underlying Xml
		 * Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Chart object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Chart objects.
		 * Get Charts/OpenOfficeXml/{id}
		 * @param {boolean} updated Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)
		 * @return {OoxmlDTO} Success
		 */
		Charts_charts_openofficexml_get_id_updated(id: string, updated: boolean | null | undefined): Observable<OoxmlDTO> {
			return this.http.get<OoxmlDTO>(this.baseUri + 'Charts/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)) + '&updated=' + updated, {});
		}

		/**
		 * Charts: Modify Underlying Xml
		 * Directly eidt the underlying xml of a Chart object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Chart objects.
		 * Put Charts/OpenOfficeXml/{id}
		 * @return {void} Success
		 */
		Charts_charts_openofficexml_put_id(id: string, requestBody: OoxmlDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Charts/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * PlotType: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the PlotType type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.
		 * Get Charts/PlotType
		 * @return {Array<ChartPlotType>} Success
		 */
		Chart_plottype_get(): Observable<Array<ChartPlotType>> {
			return this.http.get<Array<ChartPlotType>>(this.baseUri + 'Charts/PlotType', {});
		}

		/**
		 * PlotType: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Charts/PlotType/TypeId/{type_id}
		 * @return {ChartPlotType} Success
		 */
		Chart_plottype_typeid_get_type_id(type_id: number): Observable<ChartPlotType> {
			return this.http.get<ChartPlotType>(this.baseUri + 'Charts/PlotType/TypeId/' + type_id, {});
		}

		/**
		 * PlotType: Get by Id
		 * Get by Id: Use this method to retrieve a PlotType object by its primary key (id)
		 * Get Charts/PlotType/{id}
		 * @return {ChartPlotType} Success
		 */
		Chart_plottype_get_id(id: string): Observable<ChartPlotType> {
			return this.http.get<ChartPlotType>(this.baseUri + 'Charts/PlotType/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * RowCol: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the RowCol type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.
		 * Get Charts/RowCol
		 * @return {Array<ChartRowCol>} Success
		 */
		Chart_rowcol_get(): Observable<Array<ChartRowCol>> {
			return this.http.get<Array<ChartRowCol>>(this.baseUri + 'Charts/RowCol', {});
		}

		/**
		 * RowCol: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Charts/RowCol/TypeId/{type_id}
		 * @return {ChartRowCol} Success
		 */
		Chart_rowcol_typeid_get_type_id(type_id: number): Observable<ChartRowCol> {
			return this.http.get<ChartRowCol>(this.baseUri + 'Charts/RowCol/TypeId/' + type_id, {});
		}

		/**
		 * RowCol: Get by Id
		 * Get by Id: Use this method to retrieve a RowCol object by its primary key (id)
		 * Get Charts/RowCol/{id}
		 * @return {ChartRowCol} Success
		 */
		Chart_rowcol_get_id(id: string): Observable<ChartRowCol> {
			return this.http.get<ChartRowCol>(this.baseUri + 'Charts/RowCol/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * RowCollections: Get by Id
		 * Get by Id: Use this method to retrieve a RowCollections object by its primary key (id)
		 * Get Charts/RowCollections/{id}
		 * @return {ChartRowCollections} Success
		 */
		Chart_rowcollections_get_id(id: string): Observable<ChartRowCollections> {
			return this.http.get<ChartRowCollections>(this.baseUri + 'Charts/RowCollections/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * RowNameFormatTypes: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the RowNameFormatTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Chart object space.
		 * Get Charts/RowNameFormatTypes
		 * @return {Array<ChartRowNameFormatTypes>} Success
		 */
		Chart_rownameformattypes_get(): Observable<Array<ChartRowNameFormatTypes>> {
			return this.http.get<Array<ChartRowNameFormatTypes>>(this.baseUri + 'Charts/RowNameFormatTypes', {});
		}

		/**
		 * RowNameFormatTypes: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Charts/RowNameFormatTypes/TypeId/{type_id}
		 * @return {ChartRowNameFormatTypes} Success
		 */
		Chart_rownameformattypes_typeid_get_type_id(type_id: number): Observable<ChartRowNameFormatTypes> {
			return this.http.get<ChartRowNameFormatTypes>(this.baseUri + 'Charts/RowNameFormatTypes/TypeId/' + type_id, {});
		}

		/**
		 * RowNameFormatTypes: Get by Id
		 * Get by Id: Use this method to retrieve a RowNameFormatTypes object by its primary key (id)
		 * Get Charts/RowNameFormatTypes/{id}
		 * @return {ChartRowNameFormatTypes} Success
		 */
		Chart_rownameformattypes_get_id(id: string): Observable<ChartRowNameFormatTypes> {
			return this.http.get<ChartRowNameFormatTypes>(this.baseUri + 'Charts/RowNameFormatTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Rows: Get by Id
		 * Get by Id: Use this method to retrieve a Rows object by its primary key (id)
		 * Get Charts/Rows/{id}
		 * @return {ChartRows} Success
		 */
		Chart_rows_get_id(id: string): Observable<ChartRows> {
			return this.http.get<ChartRows>(this.baseUri + 'Charts/Rows/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Charts: Get Svg file
		 * This endpoint is helpful for rending this Chart as an svg or image object that can then be rendered in a story, dashboard or website.
		 * Get Charts/Svg/{id}
		 * @param {boolean} use_cache Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)
		 * @return {void} Returns an svg formatted-image of this object.
		 */
		Charts_charts_svg_get_id_use_cache(id: string, use_cache: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Charts/Svg/' + (id == null ? '' : encodeURIComponent(id)) + '&use_cache=' + use_cache, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Charts: Get by Id
		 * Get by Id: Use this method to retrieve a Charts object by its primary key (id)
		 * Get Charts/{id}
		 * @param {string} id An Id of the respository DTO elemennt
		 * @return {ChartCharts} Success
		 */
		Charts_charts_get_id(id: string): Observable<ChartCharts> {
			return this.http.get<ChartCharts>(this.baseUri + 'Charts/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get ConnectionShapes/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Slides_connectionshapes_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'ConnectionShapes/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Details
		 * Returns object metadata and information about relative dependent objects
		 * Get ConnectionShapes/Details/{id}
		 * @return {SlideConnectorDetails} Success
		 */
		Slides_connectionshapes_details_get_id(id: string): Observable<SlideConnectorDetails> {
			return this.http.get<SlideConnectorDetails>(this.baseUri + 'ConnectionShapes/Details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Underlying Xml
		 * Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.
		 * Get ConnectionShapes/OpenOfficeXml/{id}
		 * @param {boolean} updated Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)
		 * @return {OoxmlDTO} Success
		 */
		Slides_connectionshapes_openofficexml_get_id_updated(id: string, updated: boolean | null | undefined): Observable<OoxmlDTO> {
			return this.http.get<OoxmlDTO>(this.baseUri + 'ConnectionShapes/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)) + '&updated=' + updated, {});
		}

		/**
		 * Slides: Modify Underlying Xml
		 * Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.
		 * Put ConnectionShapes/OpenOfficeXml/{id}
		 * @return {void} Success
		 */
		Slides_connectionshapes_openofficexml_put_id(id: string, requestBody: OoxmlDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'ConnectionShapes/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Slides: Get Svg file
		 * This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.
		 * Get ConnectionShapes/Svg/{id}
		 * @param {boolean} use_cache Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)
		 * @return {void} Returns an svg formatted-image of this object.
		 */
		Slides_connectionshapes_svg_get_id_use_cache(id: string, use_cache: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ConnectionShapes/Svg/' + (id == null ? '' : encodeURIComponent(id)) + '&use_cache=' + use_cache, { observe: 'response', responseType: 'text' });
		}

		/**
		 * ConnectionShapes: Get by Id
		 * Get by Id: Use this method to retrieve a ConnectionShapes object by its primary key (id)
		 * Get ConnectionShapes/{id}
		 * @param {string} id An Id of the respository DTO elemennt
		 * @return {SlideConnector} Success
		 */
		Slides_connectionshapes_get_id(id: string): Observable<SlideConnector> {
			return this.http.get<SlideConnector>(this.baseUri + 'ConnectionShapes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * DocumentsController: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this DocumentsController and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get Documents/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Documents_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'Documents/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Documents: Clone an existing Ooxml Document to new Parent Story
		 * Clone A Document that has already been uploaded to a new Story
		 * Post Documents/Clone/{id}
		 * @param {string} id the Source document Id
		 * @param {DocumentCloneDTO} requestBody A DocumentCloneDto object with containing information required for cloning the document
		 * @return {Document} Success
		 */
		Documents_clone_post_id(id: string, requestBody: DocumentCloneDTO): Observable<Document> {
			return this.http.post<Document>(this.baseUri + 'Documents/Clone/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DocumentType: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the DocumentType type. Use the Id from oneof the returned elements on to make changes to elements in the Documents object space.
		 * Get Documents/DocumentType
		 * @return {Array<DocumentType>} Success
		 */
		Documents_documenttype_get(): Observable<Array<DocumentType>> {
			return this.http.get<Array<DocumentType>>(this.baseUri + 'Documents/DocumentType', {});
		}

		/**
		 * DocumentType: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Documents/DocumentType/TypeId/{type_id}
		 * @return {DocumentType} Success
		 */
		Documents_documenttype_typeid_get_type_id(type_id: number): Observable<DocumentType> {
			return this.http.get<DocumentType>(this.baseUri + 'Documents/DocumentType/TypeId/' + type_id, {});
		}

		/**
		 * DocumentType: Get by Id
		 * Get by Id: Use this method to retrieve a DocumentType object by its primary key (id)
		 * Get Documents/DocumentType/{id}
		 * @return {DocumentType} Success
		 */
		Documents_documenttype_get_id(id: string): Observable<DocumentType> {
			return this.http.get<DocumentType>(this.baseUri + 'Documents/DocumentType/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Documents: Download
		 * Download the into a bytestream for client-side processing.
		 * Get Documents/Download/{id}
		 * @return {void} Returns an updated version of the OpenOffice Xml file
		 */
		Documents_download_get_id_orginal(id: string, orginal: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Documents/Download/' + (id == null ? '' : encodeURIComponent(id)) + '&orginal=' + orginal, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Documents: Delete by Id
		 * Permantly delete a document from the Ooxml Automation API. Note that is does not make changes to the related Presalytics APIs.
		 * Please use the delete endpoint in the story API to ensure that stories are not left with orphaned references to the Ooxml Automation API.
		 * Delete Documents/{id}
		 * @return {void} 
		 */
		Documents_delete_id(id: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'Documents/' + (id == null ? '' : encodeURIComponent(id)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Documents: Get by Id
		 * Get by Id: Use this method to retrieve a Documents object by its primary key (id)
		 * Get Documents/{id}
		 * @return {Document} Success
		 */
		Documents_get_id(id: string): Observable<Document> {
			return this.http.get<Document>(this.baseUri + 'Documents/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get Groups/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Slides_groups_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'Groups/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Details
		 * Returns object metadata and information about relative dependent objects
		 * Get Groups/Details/{id}
		 * @return {SlideGroupsDetails} Success
		 */
		Slides_groups_details_get_id(id: string): Observable<SlideGroupsDetails> {
			return this.http.get<SlideGroupsDetails>(this.baseUri + 'Groups/Details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Underlying Xml
		 * Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.
		 * Get Groups/OpenOfficeXml/{id}
		 * @param {boolean} updated Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)
		 * @return {OoxmlDTO} Success
		 */
		Slides_groups_openofficexml_get_id_updated(id: string, updated: boolean | null | undefined): Observable<OoxmlDTO> {
			return this.http.get<OoxmlDTO>(this.baseUri + 'Groups/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)) + '&updated=' + updated, {});
		}

		/**
		 * Slides: Modify Underlying Xml
		 * Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.
		 * Put Groups/OpenOfficeXml/{id}
		 * @return {void} Success
		 */
		Slides_groups_openofficexml_put_id(id: string, requestBody: OoxmlDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Groups/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Slides: Get Svg file
		 * This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.
		 * Get Groups/Svg/{id}
		 * @param {boolean} use_cache Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)
		 * @return {void} Returns an svg formatted-image of this object.
		 */
		Slides_groups_svg_get_id_use_cache(id: string, use_cache: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Groups/Svg/' + (id == null ? '' : encodeURIComponent(id)) + '&use_cache=' + use_cache, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Groups: Get by Id
		 * Get by Id: Use this method to retrieve a Groups object by its primary key (id)
		 * Get Groups/{id}
		 * @param {string} id An Id of the respository DTO elemennt
		 * @return {SlideGroups} Success
		 */
		Slides_groups_get_id(id: string): Observable<SlideGroups> {
			return this.http.get<SlideGroups>(this.baseUri + 'Groups/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Shared: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this Shared and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get Images/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Shared_images_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'Images/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Shared: Get Details
		 * Returns object metadata and information about relative dependent objects
		 * Get Images/Details/{id}
		 * @return {SharedPicturesDetails} Success
		 */
		Shared_images_details_get_id(id: string): Observable<SharedPicturesDetails> {
			return this.http.get<SharedPicturesDetails>(this.baseUri + 'Images/Details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Image: Download Image
		 * Download Images extracted from Ooxml Documents
		 * Put Images/GetImage/{Id}
		 * @param {string} Id The Image Id
		 * @return {void} Success
		 */
		Shared_images_getimage_put_id(Id: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Images/GetImage/' + (Id == null ? '' : encodeURIComponent(Id)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Shared: Get Underlying Xml
		 * Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Shared object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Shared objects.
		 * Get Images/OpenOfficeXml/{id}
		 * @param {boolean} updated Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)
		 * @return {OoxmlDTO} Success
		 */
		Shared_images_openofficexml_get_id_updated(id: string, updated: boolean | null | undefined): Observable<OoxmlDTO> {
			return this.http.get<OoxmlDTO>(this.baseUri + 'Images/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)) + '&updated=' + updated, {});
		}

		/**
		 * Shared: Modify Underlying Xml
		 * Directly eidt the underlying xml of a Shared object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Shared objects.
		 * Put Images/OpenOfficeXml/{id}
		 * @return {void} Success
		 */
		Shared_images_openofficexml_put_id(id: string, requestBody: OoxmlDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Images/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Shared: Get Svg file
		 * This endpoint is helpful for rending this Shared as an svg or image object that can then be rendered in a story, dashboard or website.
		 * Get Images/Svg/{id}
		 * @param {boolean} use_cache Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)
		 * @return {void} Returns an svg formatted-image of this object.
		 */
		Shared_images_svg_get_id_use_cache(id: string, use_cache: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Images/Svg/' + (id == null ? '' : encodeURIComponent(id)) + '&use_cache=' + use_cache, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Images: Get by Id
		 * Get by Id: Use this method to retrieve a Images object by its primary key (id)
		 * Get Images/{id}
		 * @param {string} id An Id of the respository DTO elemennt
		 * @return {SharedPictures} Success
		 */
		Shared_images_get_id(id: string): Observable<SharedPictures> {
			return this.http.get<SharedPictures>(this.baseUri + 'Images/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get ShapeTrees/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Slides_shapetrees_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'ShapeTrees/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Details
		 * Returns object metadata and information about relative dependent objects
		 * Get ShapeTrees/Details/{id}
		 * @return {SlideShapeTreesDetails} Success
		 */
		Slides_shapetrees_details_get_id(id: string): Observable<SlideShapeTreesDetails> {
			return this.http.get<SlideShapeTreesDetails>(this.baseUri + 'ShapeTrees/Details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Underlying Xml
		 * Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.
		 * Get ShapeTrees/OpenOfficeXml/{id}
		 * @param {boolean} updated Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)
		 * @return {OoxmlDTO} Success
		 */
		Slides_shapetrees_openofficexml_get_id_updated(id: string, updated: boolean | null | undefined): Observable<OoxmlDTO> {
			return this.http.get<OoxmlDTO>(this.baseUri + 'ShapeTrees/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)) + '&updated=' + updated, {});
		}

		/**
		 * Slides: Modify Underlying Xml
		 * Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.
		 * Put ShapeTrees/OpenOfficeXml/{id}
		 * @return {void} Success
		 */
		Slides_shapetrees_openofficexml_put_id(id: string, requestBody: OoxmlDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'ShapeTrees/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Slides: Get Svg file
		 * This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.
		 * Get ShapeTrees/Svg/{id}
		 * @param {boolean} use_cache Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)
		 * @return {void} Returns an svg formatted-image of this object.
		 */
		Slides_shapetrees_svg_get_id_use_cache(id: string, use_cache: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'ShapeTrees/Svg/' + (id == null ? '' : encodeURIComponent(id)) + '&use_cache=' + use_cache, { observe: 'response', responseType: 'text' });
		}

		/**
		 * ShapeTrees: Get by Id
		 * Get by Id: Use this method to retrieve a ShapeTrees object by its primary key (id)
		 * Get ShapeTrees/{id}
		 * @param {string} id An Id of the respository DTO elemennt
		 * @return {SlideShapeTrees} Success
		 */
		Slides_shapetrees_get_id(id: string): Observable<SlideShapeTrees> {
			return this.http.get<SlideShapeTrees>(this.baseUri + 'ShapeTrees/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get Shapes/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Slides_shapes_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'Shapes/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Details
		 * Returns object metadata and information about relative dependent objects
		 * Get Shapes/Details/{id}
		 * @return {SlideShapesDetails} Success
		 */
		Slides_shapes_details_get_id(id: string): Observable<SlideShapesDetails> {
			return this.http.get<SlideShapesDetails>(this.baseUri + 'Shapes/Details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Underlying Xml
		 * Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.
		 * Get Shapes/OpenOfficeXml/{id}
		 * @param {boolean} updated Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)
		 * @return {OoxmlDTO} Success
		 */
		Slides_shapes_openofficexml_get_id_updated(id: string, updated: boolean | null | undefined): Observable<OoxmlDTO> {
			return this.http.get<OoxmlDTO>(this.baseUri + 'Shapes/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)) + '&updated=' + updated, {});
		}

		/**
		 * Slides: Modify Underlying Xml
		 * Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.
		 * Put Shapes/OpenOfficeXml/{id}
		 * @return {void} Success
		 */
		Slides_shapes_openofficexml_put_id(id: string, requestBody: OoxmlDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Shapes/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Slides: Get Svg file
		 * This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.
		 * Get Shapes/Svg/{id}
		 * @param {boolean} use_cache Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)
		 * @return {void} Returns an svg formatted-image of this object.
		 */
		Slides_shapes_svg_get_id_use_cache(id: string, use_cache: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Shapes/Svg/' + (id == null ? '' : encodeURIComponent(id)) + '&use_cache=' + use_cache, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Shapes: Get by Id
		 * Get by Id: Use this method to retrieve a Shapes object by its primary key (id)
		 * Get Shapes/{id}
		 * @param {string} id An Id of the respository DTO elemennt
		 * @return {SlideShapes} Success
		 */
		Slides_shapes_get_id(id: string): Observable<SlideShapes> {
			return this.http.get<SlideShapes>(this.baseUri + 'Shapes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * ColorTransformationAttributes: Get by Id
		 * Get by Id: Use this method to retrieve a ColorTransformationAttributes object by its primary key (id)
		 * Get Shared/ColorTransformationAttributes/{id}
		 * @return {SharedColorTransformationAttributes} Success
		 */
		Shared_colortransformationattributes_get_id(id: string): Observable<SharedColorTransformationAttributes> {
			return this.http.get<SharedColorTransformationAttributes>(this.baseUri + 'Shared/ColorTransformationAttributes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * ColorTransformations: Get by Id
		 * Get by Id: Use this method to retrieve a ColorTransformations object by its primary key (id)
		 * Get Shared/ColorTransformations/{id}
		 * @return {SharedColorTransformations} Success
		 */
		Shared_colortransformations_get_id(id: string): Observable<SharedColorTransformations> {
			return this.http.get<SharedColorTransformations>(this.baseUri + 'Shared/ColorTransformations/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * ColorTypes: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the ColorTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.
		 * Get Shared/ColorTypes
		 * @return {Array<SharedColorTypes>} Success
		 */
		Shared_colortypes_get(): Observable<Array<SharedColorTypes>> {
			return this.http.get<Array<SharedColorTypes>>(this.baseUri + 'Shared/ColorTypes', {});
		}

		/**
		 * ColorTypes: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Shared/ColorTypes/TypeId/{type_id}
		 * @return {SharedColorTypes} Success
		 */
		Shared_colortypes_typeid_get_type_id(type_id: number): Observable<SharedColorTypes> {
			return this.http.get<SharedColorTypes>(this.baseUri + 'Shared/ColorTypes/TypeId/' + type_id, {});
		}

		/**
		 * ColorTypes: Get by Id
		 * Get by Id: Use this method to retrieve a ColorTypes object by its primary key (id)
		 * Get Shared/ColorTypes/{id}
		 * @return {SharedColorTypes} Success
		 */
		Shared_colortypes_get_id(id: string): Observable<SharedColorTypes> {
			return this.http.get<SharedColorTypes>(this.baseUri + 'Shared/ColorTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * DashTypes: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the DashTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.
		 * Get Shared/DashTypes
		 * @return {Array<SharedDashTypes>} Success
		 */
		Shared_dashtypes_get(): Observable<Array<SharedDashTypes>> {
			return this.http.get<Array<SharedDashTypes>>(this.baseUri + 'Shared/DashTypes', {});
		}

		/**
		 * DashTypes: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Shared/DashTypes/TypeId/{type_id}
		 * @return {SharedDashTypes} Success
		 */
		Shared_dashtypes_typeid_get_type_id(type_id: number): Observable<SharedDashTypes> {
			return this.http.get<SharedDashTypes>(this.baseUri + 'Shared/DashTypes/TypeId/' + type_id, {});
		}

		/**
		 * DashTypes: Get by Id
		 * Get by Id: Use this method to retrieve a DashTypes object by its primary key (id)
		 * Get Shared/DashTypes/{id}
		 * @return {SharedDashTypes} Success
		 */
		Shared_dashtypes_get_id(id: string): Observable<SharedDashTypes> {
			return this.http.get<SharedDashTypes>(this.baseUri + 'Shared/DashTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * EffectAttributes: Get by Id
		 * Get by Id: Use this method to retrieve a EffectAttributes object by its primary key (id)
		 * Get Shared/EffectAttributes/{id}
		 * @return {SharedEffectAttributes} Success
		 */
		Shared_effectattributes_get_id(id: string): Observable<SharedEffectAttributes> {
			return this.http.get<SharedEffectAttributes>(this.baseUri + 'Shared/EffectAttributes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * EffectTypes: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the EffectTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.
		 * Get Shared/EffectTypes
		 * @return {Array<SharedEffectTypes>} Success
		 */
		Shared_effecttypes_get(): Observable<Array<SharedEffectTypes>> {
			return this.http.get<Array<SharedEffectTypes>>(this.baseUri + 'Shared/EffectTypes', {});
		}

		/**
		 * EffectTypes: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Shared/EffectTypes/TypeId/{type_id}
		 * @return {SharedEffectTypes} Success
		 */
		Shared_effecttypes_typeid_get_type_id(type_id: number): Observable<SharedEffectTypes> {
			return this.http.get<SharedEffectTypes>(this.baseUri + 'Shared/EffectTypes/TypeId/' + type_id, {});
		}

		/**
		 * EffectTypes: Get by Id
		 * Get by Id: Use this method to retrieve a EffectTypes object by its primary key (id)
		 * Get Shared/EffectTypes/{id}
		 * @return {SharedEffectTypes} Success
		 */
		Shared_effecttypes_get_id(id: string): Observable<SharedEffectTypes> {
			return this.http.get<SharedEffectTypes>(this.baseUri + 'Shared/EffectTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Effects: Get by Id
		 * Get by Id: Use this method to retrieve a Effects object by its primary key (id)
		 * Get Shared/Effects/{id}
		 * @return {SharedEffects} Success
		 */
		Shared_effects_get_id(id: string): Observable<SharedEffects> {
			return this.http.get<SharedEffects>(this.baseUri + 'Shared/Effects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * FillMap: Get by Id
		 * Get by Id: Use this method to retrieve a FillMap object by its primary key (id)
		 * Get Shared/FillMap/{id}
		 * @return {SharedFillMap} Success
		 */
		Shared_fillmap_get_id(id: string): Observable<SharedFillMap> {
			return this.http.get<SharedFillMap>(this.baseUri + 'Shared/FillMap/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * FillTypes: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the FillTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.
		 * Get Shared/FillTypes
		 * @return {Array<SharedFillTypes>} Success
		 */
		Shared_filltypes_get(): Observable<Array<SharedFillTypes>> {
			return this.http.get<Array<SharedFillTypes>>(this.baseUri + 'Shared/FillTypes', {});
		}

		/**
		 * FillTypes: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Shared/FillTypes/TypeId/{type_id}
		 * @return {SharedFillTypes} Success
		 */
		Shared_filltypes_typeid_get_type_id(type_id: number): Observable<SharedFillTypes> {
			return this.http.get<SharedFillTypes>(this.baseUri + 'Shared/FillTypes/TypeId/' + type_id, {});
		}

		/**
		 * FillTypes: Get by Id
		 * Get by Id: Use this method to retrieve a FillTypes object by its primary key (id)
		 * Get Shared/FillTypes/{id}
		 * @return {SharedFillTypes} Success
		 */
		Shared_filltypes_get_id(id: string): Observable<SharedFillTypes> {
			return this.http.get<SharedFillTypes>(this.baseUri + 'Shared/FillTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * GradientFills: Get by Id
		 * Get by Id: Use this method to retrieve a GradientFills object by its primary key (id)
		 * Get Shared/GradientFills/{id}
		 * @return {SharedGradientFills} Success
		 */
		Shared_gradientfills_get_id(id: string): Observable<SharedGradientFills> {
			return this.http.get<SharedGradientFills>(this.baseUri + 'Shared/GradientFills/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * GradientStops: Get by Id
		 * Get by Id: Use this method to retrieve a GradientStops object by its primary key (id)
		 * Get Shared/GradientStops/{id}
		 * @return {SharedGradientStops} Success
		 */
		Shared_gradientstops_get_id(id: string): Observable<SharedGradientStops> {
			return this.http.get<SharedGradientStops>(this.baseUri + 'Shared/GradientStops/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * ImageFills: Get by Id
		 * Get by Id: Use this method to retrieve a ImageFills object by its primary key (id)
		 * Get Shared/ImageFills/{id}
		 * @return {SharedImageFills} Success
		 */
		Shared_imagefills_get_id(id: string): Observable<SharedImageFills> {
			return this.http.get<SharedImageFills>(this.baseUri + 'Shared/ImageFills/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * LineEndSizes: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the LineEndSizes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.
		 * Get Shared/LineEndSizes
		 * @return {Array<SharedLineEndSizes>} Success
		 */
		Shared_lineendsizes_get(): Observable<Array<SharedLineEndSizes>> {
			return this.http.get<Array<SharedLineEndSizes>>(this.baseUri + 'Shared/LineEndSizes', {});
		}

		/**
		 * LineEndSizes: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Shared/LineEndSizes/TypeId/{type_id}
		 * @return {SharedLineEndSizes} Success
		 */
		Shared_lineendsizes_typeid_get_type_id(type_id: number): Observable<SharedLineEndSizes> {
			return this.http.get<SharedLineEndSizes>(this.baseUri + 'Shared/LineEndSizes/TypeId/' + type_id, {});
		}

		/**
		 * LineEndSizes: Get by Id
		 * Get by Id: Use this method to retrieve a LineEndSizes object by its primary key (id)
		 * Get Shared/LineEndSizes/{id}
		 * @return {SharedLineEndSizes} Success
		 */
		Shared_lineendsizes_get_id(id: string): Observable<SharedLineEndSizes> {
			return this.http.get<SharedLineEndSizes>(this.baseUri + 'Shared/LineEndSizes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * LineEndTypes: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the LineEndTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Shared object space.
		 * Get Shared/LineEndTypes
		 * @return {Array<SharedLineEndTypes>} Success
		 */
		Shared_lineendtypes_get(): Observable<Array<SharedLineEndTypes>> {
			return this.http.get<Array<SharedLineEndTypes>>(this.baseUri + 'Shared/LineEndTypes', {});
		}

		/**
		 * LineEndTypes: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Shared/LineEndTypes/TypeId/{type_id}
		 * @return {SharedLineEndTypes} Success
		 */
		Shared_lineendtypes_typeid_get_type_id(type_id: number): Observable<SharedLineEndTypes> {
			return this.http.get<SharedLineEndTypes>(this.baseUri + 'Shared/LineEndTypes/TypeId/' + type_id, {});
		}

		/**
		 * LineEndTypes: Get by Id
		 * Get by Id: Use this method to retrieve a LineEndTypes object by its primary key (id)
		 * Get Shared/LineEndTypes/{id}
		 * @return {SharedLineEndTypes} Success
		 */
		Shared_lineendtypes_get_id(id: string): Observable<SharedLineEndTypes> {
			return this.http.get<SharedLineEndTypes>(this.baseUri + 'Shared/LineEndTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Lines: Get by Id
		 * Get by Id: Use this method to retrieve a Lines object by its primary key (id)
		 * Get Shared/Lines/{id}
		 * @return {SharedLines} Success
		 */
		Shared_lines_get_id(id: string): Observable<SharedLines> {
			return this.http.get<SharedLines>(this.baseUri + 'Shared/Lines/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Paragraph: Get by Id
		 * Get by Id: Use this method to retrieve a Paragraph object by its primary key (id)
		 * Get Shared/Paragraph/{id}
		 * @return {SharedParagraph} Success
		 */
		Shared_paragraph_get_id(id: string): Observable<SharedParagraph> {
			return this.http.get<SharedParagraph>(this.baseUri + 'Shared/Paragraph/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * SolidFills: Get by Id
		 * Get by Id: Use this method to retrieve a SolidFills object by its primary key (id)
		 * Get Shared/SolidFills/{id}
		 * @return {SharedSolidFills} Success
		 */
		Shared_solidfills_get_id(id: string): Observable<SharedSolidFills> {
			return this.http.get<SharedSolidFills>(this.baseUri + 'Shared/SolidFills/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Text: Get by Id
		 * Get by Id: Use this method to retrieve a Text object by its primary key (id)
		 * Get Shared/Text/{id}
		 * @return {SharedText} Success
		 */
		Shared_text_get_id(id: string): Observable<SharedText> {
			return this.http.get<SharedText>(this.baseUri + 'Shared/Text/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * TextContainer: Get by Id
		 * Get by Id: Use this method to retrieve a TextContainer object by its primary key (id)
		 * Get Shared/TextContainer/{id}
		 * @return {SharedTextContainer} Success
		 */
		Shared_textcontainer_get_id(id: string): Observable<SharedTextContainer> {
			return this.http.get<SharedTextContainer>(this.baseUri + 'Shared/TextContainer/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get Slides/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Slides_slides_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'Slides/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * ColorMaps: Get by Id
		 * Get by Id: Use this method to retrieve a ColorMaps object by its primary key (id)
		 * Get Slides/ColorMaps/{id}
		 * @return {SlideColorMaps} Success
		 */
		Slides_colormaps_get_id(id: string): Observable<SlideColorMaps> {
			return this.http.get<SlideColorMaps>(this.baseUri + 'Slides/ColorMaps/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Details
		 * Returns object metadata and information about relative dependent objects
		 * Get Slides/Details/{id}
		 * @return {SlideSlidesDetails} Success
		 */
		Slides_slides_details_get_id(id: string): Observable<SlideSlidesDetails> {
			return this.http.get<SlideSlidesDetails>(this.baseUri + 'Slides/Details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * GraphicTypes: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the GraphicTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Slides object space.
		 * Get Slides/GraphicTypes
		 * @return {Array<SlideGraphicTypes>} Success
		 */
		Slides_graphictypes_get(): Observable<Array<SlideGraphicTypes>> {
			return this.http.get<Array<SlideGraphicTypes>>(this.baseUri + 'Slides/GraphicTypes', {});
		}

		/**
		 * GraphicTypes: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Slides/GraphicTypes/TypeId/{type_id}
		 * @return {SlideGraphicTypes} Success
		 */
		Slides_graphictypes_typeid_get_type_id(type_id: number): Observable<SlideGraphicTypes> {
			return this.http.get<SlideGraphicTypes>(this.baseUri + 'Slides/GraphicTypes/TypeId/' + type_id, {});
		}

		/**
		 * GraphicTypes: Get by Id
		 * Get by Id: Use this method to retrieve a GraphicTypes object by its primary key (id)
		 * Get Slides/GraphicTypes/{id}
		 * @return {SlideGraphicTypes} Success
		 */
		Slides_graphictypes_get_id(id: string): Observable<SlideGraphicTypes> {
			return this.http.get<SlideGraphicTypes>(this.baseUri + 'Slides/GraphicTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Graphics: Get by Id
		 * Get by Id: Use this method to retrieve a Graphics object by its primary key (id)
		 * Get Slides/Graphics/{id}
		 * @return {SlideGraphics} Success
		 */
		Slides_graphics_get_id(id: string): Observable<SlideGraphics> {
			return this.http.get<SlideGraphics>(this.baseUri + 'Slides/Graphics/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * GroupElementTypes: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the GroupElementTypes type. Use the Id from oneof the returned elements on to make changes to elements in the Slides object space.
		 * Get Slides/GroupElementTypes
		 * @return {Array<SlideGroupElementTypes>} Success
		 */
		Slides_groupelementtypes_get(): Observable<Array<SlideGroupElementTypes>> {
			return this.http.get<Array<SlideGroupElementTypes>>(this.baseUri + 'Slides/GroupElementTypes', {});
		}

		/**
		 * GroupElementTypes: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Slides/GroupElementTypes/TypeId/{type_id}
		 * @return {SlideGroupElementTypes} Success
		 */
		Slides_groupelementtypes_typeid_get_type_id(type_id: number): Observable<SlideGroupElementTypes> {
			return this.http.get<SlideGroupElementTypes>(this.baseUri + 'Slides/GroupElementTypes/TypeId/' + type_id, {});
		}

		/**
		 * GroupElementTypes: Get by Id
		 * Get by Id: Use this method to retrieve a GroupElementTypes object by its primary key (id)
		 * Get Slides/GroupElementTypes/{id}
		 * @return {SlideGroupElementTypes} Success
		 */
		Slides_groupelementtypes_get_id(id: string): Observable<SlideGroupElementTypes> {
			return this.http.get<SlideGroupElementTypes>(this.baseUri + 'Slides/GroupElementTypes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * GroupElements: Get by Id
		 * Get by Id: Use this method to retrieve a GroupElements object by its primary key (id)
		 * Get Slides/GroupElements/{id}
		 * @return {SlideGroupElements} Success
		 */
		Slides_groupelements_get_id(id: string): Observable<SlideGroupElements> {
			return this.http.get<SlideGroupElements>(this.baseUri + 'Slides/GroupElements/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Underlying Xml
		 * Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.
		 * Get Slides/OpenOfficeXml/{id}
		 * @param {boolean} updated Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)
		 * @return {OoxmlDTO} Success
		 */
		Slides_slides_openofficexml_get_id_updated(id: string, updated: boolean | null | undefined): Observable<OoxmlDTO> {
			return this.http.get<OoxmlDTO>(this.baseUri + 'Slides/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)) + '&updated=' + updated, {});
		}

		/**
		 * Slides: Modify Underlying Xml
		 * Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.
		 * Put Slides/OpenOfficeXml/{id}
		 * @return {void} Success
		 */
		Slides_slides_openofficexml_put_id(id: string, requestBody: OoxmlDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Slides/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * SlideMasters: Get by Id
		 * Get by Id: Use this method to retrieve a SlideMasters object by its primary key (id)
		 * Get Slides/SlideMasters/{id}
		 * @return {SlideSlideMasters} Success
		 */
		Slides_slidemasters_get_id(id: string): Observable<SlideSlideMasters> {
			return this.http.get<SlideSlideMasters>(this.baseUri + 'Slides/SlideMasters/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Svg file
		 * This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.
		 * Get Slides/Svg/{id}
		 * @param {boolean} use_cache Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)
		 * @return {void} Returns an svg formatted-image of this object.
		 */
		Slides_slides_svg_get_id_use_cache(id: string, use_cache: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Slides/Svg/' + (id == null ? '' : encodeURIComponent(id)) + '&use_cache=' + use_cache, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Slides: Get by Id
		 * Get by Id: Use this method to retrieve a Slides object by its primary key (id)
		 * Get Slides/{id}
		 * @param {string} id An Id of the respository DTO elemennt
		 * @return {SlideSlides} Success
		 */
		Slides_slides_get_id(id: string): Observable<SlideSlides> {
			return this.http.get<SlideSlides>(this.baseUri + 'Slides/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this Slide and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get SmartArts/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Slides_smartarts_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'SmartArts/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Details
		 * Returns object metadata and information about relative dependent objects
		 * Get SmartArts/Details/{id}
		 * @return {SlideSmartArtsDetails} Success
		 */
		Slides_smartarts_details_get_id(id: string): Observable<SlideSmartArtsDetails> {
			return this.http.get<SlideSmartArtsDetails>(this.baseUri + 'SmartArts/Details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Slides: Get Underlying Xml
		 * Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Slide object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Slide objects.
		 * Get SmartArts/OpenOfficeXml/{id}
		 * @param {boolean} updated Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)
		 * @return {OoxmlDTO} Success
		 */
		Slides_smartarts_openofficexml_get_id_updated(id: string, updated: boolean | null | undefined): Observable<OoxmlDTO> {
			return this.http.get<OoxmlDTO>(this.baseUri + 'SmartArts/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)) + '&updated=' + updated, {});
		}

		/**
		 * Slides: Modify Underlying Xml
		 * Directly eidt the underlying xml of a Slide object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Slide objects.
		 * Put SmartArts/OpenOfficeXml/{id}
		 * @return {void} Success
		 */
		Slides_smartarts_openofficexml_put_id(id: string, requestBody: OoxmlDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'SmartArts/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Slides: Get Svg file
		 * This endpoint is helpful for rending this Slide as an svg or image object that can then be rendered in a story, dashboard or website.
		 * Get SmartArts/Svg/{id}
		 * @param {boolean} use_cache Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)
		 * @return {void} Returns an svg formatted-image of this object.
		 */
		Slides_smartarts_svg_get_id_use_cache(id: string, use_cache: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'SmartArts/Svg/' + (id == null ? '' : encodeURIComponent(id)) + '&use_cache=' + use_cache, { observe: 'response', responseType: 'text' });
		}

		/**
		 * SmartArts: Get by Id
		 * Get by Id: Use this method to retrieve a SmartArts object by its primary key (id)
		 * Get SmartArts/{id}
		 * @param {string} id An Id of the respository DTO elemennt
		 * @return {SlideSmartArts} Success
		 */
		Slides_smartarts_get_id(id: string): Observable<SlideSmartArts> {
			return this.http.get<SlideSmartArts>(this.baseUri + 'SmartArts/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Borders: Get by Id
		 * Get by Id: Use this method to retrieve a Borders object by its primary key (id)
		 * Get Tables/Borders/{id}
		 * @return {TableBorders} Success
		 */
		Tables_borders_get_id(id: string): Observable<TableBorders> {
			return this.http.get<TableBorders>(this.baseUri + 'Tables/Borders/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Cells: Get by Id
		 * Get by Id: Use this method to retrieve a Cells object by its primary key (id)
		 * Get Tables/Cells/{id}
		 * @return {TableCells} Success
		 */
		Tables_cells_get_id(id: string): Observable<TableCells> {
			return this.http.get<TableCells>(this.baseUri + 'Tables/Cells/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Tables: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this Table and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get Tables/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Tables_tables_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'Tables/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Columns: Get by Id
		 * Get by Id: Use this method to retrieve a Columns object by its primary key (id)
		 * Get Tables/Columns/{id}
		 * @return {TableColumns} Success
		 */
		Tables_columns_get_id(id: string): Observable<TableColumns> {
			return this.http.get<TableColumns>(this.baseUri + 'Tables/Columns/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Tables: Get Details
		 * Returns object metadata and information about relative dependent objects
		 * Get Tables/Details/{id}
		 * @return {TableTablesDetails} Success
		 */
		Tables_tables_details_get_id(id: string): Observable<TableTablesDetails> {
			return this.http.get<TableTablesDetails>(this.baseUri + 'Tables/Details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Tables: Get Underlying Xml
		 * Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Table object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Table objects.
		 * Get Tables/OpenOfficeXml/{id}
		 * @param {boolean} updated Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)
		 * @return {OoxmlDTO} Success
		 */
		Tables_tables_openofficexml_get_id_updated(id: string, updated: boolean | null | undefined): Observable<OoxmlDTO> {
			return this.http.get<OoxmlDTO>(this.baseUri + 'Tables/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)) + '&updated=' + updated, {});
		}

		/**
		 * Tables: Modify Underlying Xml
		 * Directly eidt the underlying xml of a Table object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Table objects.
		 * Put Tables/OpenOfficeXml/{id}
		 * @return {void} Success
		 */
		Tables_tables_openofficexml_put_id(id: string, requestBody: OoxmlDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Tables/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Rows: Get by Id
		 * Get by Id: Use this method to retrieve a Rows object by its primary key (id)
		 * Get Tables/Rows/{id}
		 * @return {TableRows} Success
		 */
		Tables_rows_get_id(id: string): Observable<TableRows> {
			return this.http.get<TableRows>(this.baseUri + 'Tables/Rows/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Tables: Get Svg file
		 * This endpoint is helpful for rending this Table as an svg or image object that can then be rendered in a story, dashboard or website.
		 * Get Tables/Svg/{id}
		 * @param {boolean} use_cache Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)
		 * @return {void} Returns an svg formatted-image of this object.
		 */
		Tables_tables_svg_get_id_use_cache(id: string, use_cache: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Tables/Svg/' + (id == null ? '' : encodeURIComponent(id)) + '&use_cache=' + use_cache, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Table: Get Table Data
		 * Gets a TabletDataDTO object, usually used for downstream updates to table content
		 * Get Tables/TableUpdate/{id}
		 * @return {TableTableDataDTO} Success
		 */
		Tables_tables_tableupdate_get_id(id: string): Observable<TableTableDataDTO> {
			return this.http.get<TableTableDataDTO>(this.baseUri + 'Tables/TableUpdate/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Tables: Update Table Data
		 * Simplifies table update by allowing users to supply strings to table cells  via TableDataDTO
		 * Put Tables/TableUpdate/{id}
		 * @return {void} Success
		 */
		Tables_tables_tableupdate_put_id(id: string, requestBody: TableTableDataDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Tables/TableUpdate/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Tables: Get by Id
		 * Get by Id: Use this method to retrieve a Tables object by its primary key (id)
		 * Get Tables/{id}
		 * @param {string} id An Id of the respository DTO elemennt
		 * @return {TableTables} Success
		 */
		Tables_tables_get_id(id: string): Observable<TableTables> {
			return this.http.get<TableTables>(this.baseUri + 'Tables/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * BackgroundFills: Get by Id
		 * Get by Id: Use this method to retrieve a BackgroundFills object by its primary key (id)
		 * Get Themes/BackgroundFills/{id}
		 * @return {ThemeBackgroundFills} Success
		 */
		Themes_backgroundfills_get_id(id: string): Observable<ThemeBackgroundFills> {
			return this.http.get<ThemeBackgroundFills>(this.baseUri + 'Themes/BackgroundFills/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Theme: Get Dependent Objects Tree
		 * This endpoint is helpful for helping users and bots identify dependent objects to this Theme and retreive their corresponding metadata in order to make modifications to those objects in downstream operations.
		 * Get Themes/ChildObjects/{id}
		 * @return {Array<ChildObjects>} Success
		 */
		Theme_themes_childobjects_get_id(id: string): Observable<Array<ChildObjects>> {
			return this.http.get<Array<ChildObjects>>(this.baseUri + 'Themes/ChildObjects/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Colors: Get by Id
		 * Get by Id: Use this method to retrieve a Colors object by its primary key (id)
		 * Get Themes/Colors/{id}
		 * @return {ThemeColors} Success
		 */
		Themes_colors_get_id(id: string): Observable<ThemeColors> {
			return this.http.get<ThemeColors>(this.baseUri + 'Themes/Colors/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * CustomColors: Get by Id
		 * Get by Id: Use this method to retrieve a CustomColors object by its primary key (id)
		 * Get Themes/CustomColors/{id}
		 * @return {ThemeCustomColors} Success
		 */
		Themes_customcolors_get_id(id: string): Observable<ThemeCustomColors> {
			return this.http.get<ThemeCustomColors>(this.baseUri + 'Themes/CustomColors/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Theme: Get Details
		 * Returns object metadata and information about relative dependent objects
		 * Get Themes/Details/{id}
		 * @return {ThemeThemesDetails} Success
		 */
		Theme_themes_details_get_id(id: string): Observable<ThemeThemesDetails> {
			return this.http.get<ThemeThemesDetails>(this.baseUri + 'Themes/Details/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * EffectMap: Get by Id
		 * Get by Id: Use this method to retrieve a EffectMap object by its primary key (id)
		 * Get Themes/EffectMap/{id}
		 * @return {ThemeEffectMap} Success
		 */
		Themes_effectmap_get_id(id: string): Observable<ThemeEffectMap> {
			return this.http.get<ThemeEffectMap>(this.baseUri + 'Themes/EffectMap/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Fills: Get by Id
		 * Get by Id: Use this method to retrieve a Fills object by its primary key (id)
		 * Get Themes/Fills/{id}
		 * @return {ThemeFills} Success
		 */
		Themes_fills_get_id(id: string): Observable<ThemeFills> {
			return this.http.get<ThemeFills>(this.baseUri + 'Themes/Fills/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Fonts: Get by Id
		 * Get by Id: Use this method to retrieve a Fonts object by its primary key (id)
		 * Get Themes/Fonts/{id}
		 * @return {ThemeFonts} Success
		 */
		Themes_fonts_get_id(id: string): Observable<ThemeFonts> {
			return this.http.get<ThemeFonts>(this.baseUri + 'Themes/Fonts/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Intensity: List All Possible Types
		 * List Types: Use this method to retreive a list of possible options for the Intensity type. Use the Id from oneof the returned elements on to make changes to elements in the Themes object space.
		 * Get Themes/Intensity
		 * @return {Array<ThemeIntensity>} Success
		 */
		Themes_intensity_get(): Observable<Array<ThemeIntensity>> {
			return this.http.get<Array<ThemeIntensity>>(this.baseUri + 'Themes/Intensity', {});
		}

		/**
		 * Intensity: Get By Type Id
		 * This endpoint returns Type metadata from an integer type_id that can found on objects throughout the api.
		 * Get Themes/Intensity/TypeId/{type_id}
		 * @return {ThemeIntensity} Success
		 */
		Themes_intensity_typeid_get_type_id(type_id: number): Observable<ThemeIntensity> {
			return this.http.get<ThemeIntensity>(this.baseUri + 'Themes/Intensity/TypeId/' + type_id, {});
		}

		/**
		 * Intensity: Get by Id
		 * Get by Id: Use this method to retrieve a Intensity object by its primary key (id)
		 * Get Themes/Intensity/{id}
		 * @return {ThemeIntensity} Success
		 */
		Themes_intensity_get_id(id: string): Observable<ThemeIntensity> {
			return this.http.get<ThemeIntensity>(this.baseUri + 'Themes/Intensity/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * LineMap: Get by Id
		 * Get by Id: Use this method to retrieve a LineMap object by its primary key (id)
		 * Get Themes/LineMap/{id}
		 * @return {ThemeLineMap} Success
		 */
		Themes_linemap_get_id(id: string): Observable<ThemeLineMap> {
			return this.http.get<ThemeLineMap>(this.baseUri + 'Themes/LineMap/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Theme: Get Underlying Xml
		 * Return the subset of the xml content from within the latest edited version of the OpenXmlDocument from this Theme object.  The returned xml data conforms to the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm).  Use this endpoint a starting point for building client-side extensions that modify Presalytics widgets containing Theme objects.
		 * Get Themes/OpenOfficeXml/{id}
		 * @param {boolean} updated Indicates whether API should return the orginal uploaded xml (false) or the actively updated version (true, default)
		 * @return {OoxmlDTO} Success
		 */
		Theme_themes_openofficexml_get_id_updated(id: string, updated: boolean | null | undefined): Observable<OoxmlDTO> {
			return this.http.get<OoxmlDTO>(this.baseUri + 'Themes/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)) + '&updated=' + updated, {});
		}

		/**
		 * Theme: Modify Underlying Xml
		 * Directly eidt the underlying xml of a Theme object within an OpenOpenXml (e.g. Excel, Powerpoint) document. This endpoint will validatate the submitted xml against the [Ecma-376 standard](http://www.ecma-international.org/publications/standards/Ecma-376.htm) prior to saving modification.  Invalid xml will rejected by this endpoint and a (hopefully) helpful error message will be returned.  Use this endpoint for client-side automation of modifications ot Theme objects.
		 * Put Themes/OpenOfficeXml/{id}
		 * @return {void} Success
		 */
		Theme_themes_openofficexml_put_id(id: string, requestBody: OoxmlDTO): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'Themes/OpenOfficeXml/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Theme: Get Svg file
		 * This endpoint is helpful for rending this Theme as an svg or image object that can then be rendered in a story, dashboard or website.
		 * Get Themes/Svg/{id}
		 * @param {boolean} use_cache Indicates whether API should retrieve content from a cache if aviable (true, default), or force an update (false)
		 * @return {void} Returns an svg formatted-image of this object.
		 */
		Theme_themes_svg_get_id_use_cache(id: string, use_cache: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'Themes/Svg/' + (id == null ? '' : encodeURIComponent(id)) + '&use_cache=' + use_cache, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Themes: Get by Id
		 * Get by Id: Use this method to retrieve a Themes object by its primary key (id)
		 * Get Themes/{id}
		 * @param {string} id An Id of the respository DTO elemennt
		 * @return {ThemeThemes} Success
		 */
		Theme_themes_get_id(id: string): Observable<ThemeThemes> {
			return this.http.get<ThemeThemes>(this.baseUri + 'Themes/' + (id == null ? '' : encodeURIComponent(id)), {});
		}
	}

}

