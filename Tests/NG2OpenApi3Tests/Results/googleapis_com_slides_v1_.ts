import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements. */
	export interface AffineTransform {

		/**
		 * The X coordinate scaling element.
		 * Type: double
		 */
		scaleX?: number | null;

		/**
		 * The Y coordinate scaling element.
		 * Type: double
		 */
		scaleY?: number | null;

		/**
		 * The X coordinate shearing element.
		 * Type: double
		 */
		shearX?: number | null;

		/**
		 * The Y coordinate shearing element.
		 * Type: double
		 */
		shearY?: number | null;

		/**
		 * The X coordinate translation element.
		 * Type: double
		 */
		translateX?: number | null;

		/**
		 * The Y coordinate translation element.
		 * Type: double
		 */
		translateY?: number | null;

		/** The units for translate elements. */
		unit?: AffineTransformUnit | null;
	}

	/** AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements. */
	export interface AffineTransformFormProperties {

		/**
		 * The X coordinate scaling element.
		 * Type: double
		 */
		scaleX: FormControl<number | null | undefined>,

		/**
		 * The Y coordinate scaling element.
		 * Type: double
		 */
		scaleY: FormControl<number | null | undefined>,

		/**
		 * The X coordinate shearing element.
		 * Type: double
		 */
		shearX: FormControl<number | null | undefined>,

		/**
		 * The Y coordinate shearing element.
		 * Type: double
		 */
		shearY: FormControl<number | null | undefined>,

		/**
		 * The X coordinate translation element.
		 * Type: double
		 */
		translateX: FormControl<number | null | undefined>,

		/**
		 * The Y coordinate translation element.
		 * Type: double
		 */
		translateY: FormControl<number | null | undefined>,

		/** The units for translate elements. */
		unit: FormControl<AffineTransformUnit | null | undefined>,
	}
	export function CreateAffineTransformFormGroup() {
		return new FormGroup<AffineTransformFormProperties>({
			scaleX: new FormControl<number | null | undefined>(undefined),
			scaleY: new FormControl<number | null | undefined>(undefined),
			shearX: new FormControl<number | null | undefined>(undefined),
			shearY: new FormControl<number | null | undefined>(undefined),
			translateX: new FormControl<number | null | undefined>(undefined),
			translateY: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<AffineTransformUnit | null | undefined>(undefined),
		});

	}

	export enum AffineTransformUnit { UNIT_UNSPECIFIED = 'UNIT_UNSPECIFIED', EMU = 'EMU', PT = 'PT' }


	/** A TextElement kind that represents auto text. */
	export interface AutoText {

		/** The rendered content of this auto text, if available. */
		content?: string | null;

		/** Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor. */
		style?: TextStyle;

		/** The type of this auto text. */
		type?: AutoTextType | null;
	}

	/** A TextElement kind that represents auto text. */
	export interface AutoTextFormProperties {

		/** The rendered content of this auto text, if available. */
		content: FormControl<string | null | undefined>,

		/** The type of this auto text. */
		type: FormControl<AutoTextType | null | undefined>,
	}
	export function CreateAutoTextFormGroup() {
		return new FormGroup<AutoTextFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<AutoTextType | null | undefined>(undefined),
		});

	}


	/** Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor. */
	export interface TextStyle {

		/** A color that can either be fully opaque or fully transparent. */
		backgroundColor?: OptionalColor;

		/** The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field. */
		baselineOffset?: TextStyleBaselineOffset | null;

		/** Whether or not the text is rendered as bold. */
		bold?: boolean | null;

		/** The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used. */
		fontFamily?: string | null;

		/** A magnitude in a single direction in the specified units. */
		fontSize?: Dimension;

		/** A color that can either be fully opaque or fully transparent. */
		foregroundColor?: OptionalColor;

		/** Whether or not the text is italicized. */
		italic?: boolean | null;

		/** A hypertext link. */
		link?: Link;

		/** Whether or not the text is in small capital letters. */
		smallCaps?: boolean | null;

		/** Whether or not the text is struck through. */
		strikethrough?: boolean | null;

		/** Whether or not the text is underlined. */
		underline?: boolean | null;

		/** Represents a font family and weight used to style a TextRun. */
		weightedFontFamily?: WeightedFontFamily;
	}

	/** Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor. */
	export interface TextStyleFormProperties {

		/** The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. The `font_size` itself is not affected by changes in this field. */
		baselineOffset: FormControl<TextStyleBaselineOffset | null | undefined>,

		/** Whether or not the text is rendered as bold. */
		bold: FormControl<boolean | null | undefined>,

		/** The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. Some fonts can affect the weight of the text. If an update request specifies values for both `font_family` and `bold`, the explicitly-set `bold` value is used. */
		fontFamily: FormControl<string | null | undefined>,

		/** Whether or not the text is italicized. */
		italic: FormControl<boolean | null | undefined>,

		/** Whether or not the text is in small capital letters. */
		smallCaps: FormControl<boolean | null | undefined>,

		/** Whether or not the text is struck through. */
		strikethrough: FormControl<boolean | null | undefined>,

		/** Whether or not the text is underlined. */
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateTextStyleFormGroup() {
		return new FormGroup<TextStyleFormProperties>({
			baselineOffset: new FormControl<TextStyleBaselineOffset | null | undefined>(undefined),
			bold: new FormControl<boolean | null | undefined>(undefined),
			fontFamily: new FormControl<string | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			smallCaps: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A color that can either be fully opaque or fully transparent. */
	export interface OptionalColor {

		/** A themeable solid color value. */
		opaqueColor?: OpaqueColor;
	}

	/** A color that can either be fully opaque or fully transparent. */
	export interface OptionalColorFormProperties {
	}
	export function CreateOptionalColorFormGroup() {
		return new FormGroup<OptionalColorFormProperties>({
		});

	}


	/** A themeable solid color value. */
	export interface OpaqueColor {

		/** An RGB color. */
		rgbColor?: RgbColor;

		/** An opaque theme color. */
		themeColor?: OpaqueColorThemeColor | null;
	}

	/** A themeable solid color value. */
	export interface OpaqueColorFormProperties {

		/** An opaque theme color. */
		themeColor: FormControl<OpaqueColorThemeColor | null | undefined>,
	}
	export function CreateOpaqueColorFormGroup() {
		return new FormGroup<OpaqueColorFormProperties>({
			themeColor: new FormControl<OpaqueColorThemeColor | null | undefined>(undefined),
		});

	}


	/** An RGB color. */
	export interface RgbColor {

		/**
		 * The blue component of the color, from 0.0 to 1.0.
		 * Type: float
		 */
		blue?: number | null;

		/**
		 * The green component of the color, from 0.0 to 1.0.
		 * Type: float
		 */
		green?: number | null;

		/**
		 * The red component of the color, from 0.0 to 1.0.
		 * Type: float
		 */
		red?: number | null;
	}

	/** An RGB color. */
	export interface RgbColorFormProperties {

		/**
		 * The blue component of the color, from 0.0 to 1.0.
		 * Type: float
		 */
		blue: FormControl<number | null | undefined>,

		/**
		 * The green component of the color, from 0.0 to 1.0.
		 * Type: float
		 */
		green: FormControl<number | null | undefined>,

		/**
		 * The red component of the color, from 0.0 to 1.0.
		 * Type: float
		 */
		red: FormControl<number | null | undefined>,
	}
	export function CreateRgbColorFormGroup() {
		return new FormGroup<RgbColorFormProperties>({
			blue: new FormControl<number | null | undefined>(undefined),
			green: new FormControl<number | null | undefined>(undefined),
			red: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OpaqueColorThemeColor { THEME_COLOR_TYPE_UNSPECIFIED = 'THEME_COLOR_TYPE_UNSPECIFIED', DARK1 = 'DARK1', LIGHT1 = 'LIGHT1', DARK2 = 'DARK2', LIGHT2 = 'LIGHT2', ACCENT1 = 'ACCENT1', ACCENT2 = 'ACCENT2', ACCENT3 = 'ACCENT3', ACCENT4 = 'ACCENT4', ACCENT5 = 'ACCENT5', ACCENT6 = 'ACCENT6', HYPERLINK = 'HYPERLINK', FOLLOWED_HYPERLINK = 'FOLLOWED_HYPERLINK', TEXT1 = 'TEXT1', BACKGROUND1 = 'BACKGROUND1', TEXT2 = 'TEXT2', BACKGROUND2 = 'BACKGROUND2' }

	export enum TextStyleBaselineOffset { BASELINE_OFFSET_UNSPECIFIED = 'BASELINE_OFFSET_UNSPECIFIED', NONE = 'NONE', SUPERSCRIPT = 'SUPERSCRIPT', SUBSCRIPT = 'SUBSCRIPT' }


	/** A magnitude in a single direction in the specified units. */
	export interface Dimension {

		/**
		 * The magnitude.
		 * Type: double
		 */
		magnitude?: number | null;

		/** The units for magnitude. */
		unit?: AffineTransformUnit | null;
	}

	/** A magnitude in a single direction in the specified units. */
	export interface DimensionFormProperties {

		/**
		 * The magnitude.
		 * Type: double
		 */
		magnitude: FormControl<number | null | undefined>,

		/** The units for magnitude. */
		unit: FormControl<AffineTransformUnit | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			magnitude: new FormControl<number | null | undefined>(undefined),
			unit: new FormControl<AffineTransformUnit | null | undefined>(undefined),
		});

	}


	/** A hypertext link. */
	export interface Link {

		/** If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist. */
		pageObjectId?: string | null;

		/** If set, indicates this is a link to a slide in this presentation, addressed by its position. */
		relativeLink?: LinkRelativeLink | null;

		/**
		 * If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		slideIndex?: number | null;

		/** If set, indicates this is a link to the external web page at this URL. */
		url?: string | null;
	}

	/** A hypertext link. */
	export interface LinkFormProperties {

		/** If set, indicates this is a link to the specific page in this presentation with this ID. A page with this ID may not exist. */
		pageObjectId: FormControl<string | null | undefined>,

		/** If set, indicates this is a link to a slide in this presentation, addressed by its position. */
		relativeLink: FormControl<LinkRelativeLink | null | undefined>,

		/**
		 * If set, indicates this is a link to the slide at this zero-based index in the presentation. There may not be a slide at this index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		slideIndex: FormControl<number | null | undefined>,

		/** If set, indicates this is a link to the external web page at this URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			pageObjectId: new FormControl<string | null | undefined>(undefined),
			relativeLink: new FormControl<LinkRelativeLink | null | undefined>(undefined),
			slideIndex: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LinkRelativeLink { RELATIVE_SLIDE_LINK_UNSPECIFIED = 'RELATIVE_SLIDE_LINK_UNSPECIFIED', NEXT_SLIDE = 'NEXT_SLIDE', PREVIOUS_SLIDE = 'PREVIOUS_SLIDE', FIRST_SLIDE = 'FIRST_SLIDE', LAST_SLIDE = 'LAST_SLIDE' }


	/** Represents a font family and weight used to style a TextRun. */
	export interface WeightedFontFamily {

		/** The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. */
		fontFamily?: string | null;

		/**
		 * The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight?: number | null;
	}

	/** Represents a font family and weight used to style a TextRun. */
	export interface WeightedFontFamilyFormProperties {

		/** The font family of the text. The font family can be any font from the Font menu in Slides or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`. */
		fontFamily: FormControl<string | null | undefined>,

		/**
		 * The rendered weight of the text. This field can have any value that is a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. Weights greater than or equal to `700` are considered bold, and weights less than `700`are not bold. The default value is `400` ("normal").
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateWeightedFontFamilyFormGroup() {
		return new FormGroup<WeightedFontFamilyFormProperties>({
			fontFamily: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AutoTextType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', SLIDE_NUMBER = 'SLIDE_NUMBER' }


	/** The autofit properties of a Shape. */
	export interface Autofit {

		/** The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values. */
		autofitType?: AutofitAutofitType | null;

		/**
		 * The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size gives the font size that is rendered in the editor. This property is read-only.
		 * Type: float
		 */
		fontScale?: number | null;

		/**
		 * The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing gives the line spacing that is rendered in the editor. This property is read-only.
		 * Type: float
		 */
		lineSpacingReduction?: number | null;
	}

	/** The autofit properties of a Shape. */
	export interface AutofitFormProperties {

		/** The autofit type of the shape. If the autofit type is AUTOFIT_TYPE_UNSPECIFIED, the autofit type is inherited from a parent placeholder if it exists. The field is automatically set to NONE if a request is made that might affect text fitting within its bounding text box. In this case the font_scale is applied to the font_size and the line_spacing_reduction is applied to the line_spacing. Both properties are also reset to default values. */
		autofitType: FormControl<AutofitAutofitType | null | undefined>,

		/**
		 * The font scale applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 1. For TEXT_AUTOFIT, this value multiplied by the font_size gives the font size that is rendered in the editor. This property is read-only.
		 * Type: float
		 */
		fontScale: FormControl<number | null | undefined>,

		/**
		 * The line spacing reduction applied to the shape. For shapes with autofit_type NONE or SHAPE_AUTOFIT, this value is the default value of 0. For TEXT_AUTOFIT, this value subtracted from the line_spacing gives the line spacing that is rendered in the editor. This property is read-only.
		 * Type: float
		 */
		lineSpacingReduction: FormControl<number | null | undefined>,
	}
	export function CreateAutofitFormGroup() {
		return new FormGroup<AutofitFormProperties>({
			autofitType: new FormControl<AutofitAutofitType | null | undefined>(undefined),
			fontScale: new FormControl<number | null | undefined>(undefined),
			lineSpacingReduction: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AutofitAutofitType { AUTOFIT_TYPE_UNSPECIFIED = 'AUTOFIT_TYPE_UNSPECIFIED', NONE = 'NONE', TEXT_AUTOFIT = 'TEXT_AUTOFIT', SHAPE_AUTOFIT = 'SHAPE_AUTOFIT' }


	/** Request message for PresentationsService.BatchUpdatePresentation. */
	export interface BatchUpdatePresentationRequest {

		/** A list of updates to apply to the presentation. */
		requests?: Array<Request>;

		/** Provides control over how write requests are executed. */
		writeControl?: WriteControl;
	}

	/** Request message for PresentationsService.BatchUpdatePresentation. */
	export interface BatchUpdatePresentationRequestFormProperties {
	}
	export function CreateBatchUpdatePresentationRequestFormGroup() {
		return new FormGroup<BatchUpdatePresentationRequestFormProperties>({
		});

	}


	/** A single kind of update to apply to a presentation. */
	export interface Request {

		/** Creates an image. */
		createImage?: CreateImageRequest;

		/** Creates a line. */
		createLine?: CreateLineRequest;

		/** Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list. */
		createParagraphBullets?: CreateParagraphBulletsRequest;

		/** Creates a new shape. */
		createShape?: CreateShapeRequest;

		/** Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes. */
		createSheetsChart?: CreateSheetsChartRequest;

		/** Creates a slide. */
		createSlide?: CreateSlideRequest;

		/** Creates a new table. */
		createTable?: CreateTableRequest;

		/** Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes. */
		createVideo?: CreateVideoRequest;

		/** Deletes an object, either pages or page elements, from the presentation. */
		deleteObject?: DeleteObjectRequest;

		/** Deletes bullets from all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph. */
		deleteParagraphBullets?: DeleteParagraphBulletsRequest;

		/** Deletes a column from a table. */
		deleteTableColumn?: DeleteTableColumnRequest;

		/** Deletes a row from a table. */
		deleteTableRow?: DeleteTableRowRequest;

		/** Deletes text from a shape or a table cell. */
		deleteText?: DeleteTextRequest;

		/** Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original. */
		duplicateObject?: DuplicateObjectRequest;

		/** Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children. */
		groupObjects?: GroupObjectsRequest;

		/** Inserts columns into a table. Other columns in the table will be resized to fit the new column. */
		insertTableColumns?: InsertTableColumnsRequest;

		/** Inserts rows into a table. */
		insertTableRows?: InsertTableRowsRequest;

		/** Inserts text into a shape or a table cell. */
		insertText?: InsertTextRequest;

		/** Merges cells in a Table. */
		mergeTableCells?: MergeTableCellsRequest;

		/** Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes. */
		refreshSheetsChart?: RefreshSheetsChartRequest;

		/** Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes. */
		replaceAllShapesWithImage?: ReplaceAllShapesWithImageRequest;

		/** Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes. */
		replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartRequest;

		/** Replaces all instances of text matching a criteria with replace text. */
		replaceAllText?: ReplaceAllTextRequest;

		/** Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image. */
		replaceImage?: ReplaceImageRequest;

		/** Reroutes a line such that it's connected at the two closest connection sites on the connected page elements. */
		rerouteLine?: RerouteLineRequest;

		/** Ungroups objects, such as groups. */
		ungroupObjects?: UngroupObjectsRequest;

		/** Unmerges cells in a Table. */
		unmergeTableCells?: UnmergeTableCellsRequest;

		/** Update the properties of an Image. */
		updateImageProperties?: UpdateImagePropertiesRequest;

		/** Updates the category of a line. */
		updateLineCategory?: UpdateLineCategoryRequest;

		/** Updates the properties of a Line. */
		updateLineProperties?: UpdateLinePropertiesRequest;

		/** Updates the alt text title and/or description of a page element. */
		updatePageElementAltText?: UpdatePageElementAltTextRequest;

		/** Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details. */
		updatePageElementTransform?: UpdatePageElementTransformRequest;

		/** Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it. */
		updatePageElementsZOrder?: UpdatePageElementsZOrderRequest;

		/** Updates the properties of a Page. */
		updatePageProperties?: UpdatePagePropertiesRequest;

		/** Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range. */
		updateParagraphStyle?: UpdateParagraphStyleRequest;

		/** Update the properties of a Shape. */
		updateShapeProperties?: UpdateShapePropertiesRequest;

		/** Updates the properties of a Slide. */
		updateSlideProperties?: UpdateSlidePropertiesRequest;

		/** Updates the position of slides in the presentation. */
		updateSlidesPosition?: UpdateSlidesPositionRequest;

		/** Updates the properties of the table borders in a Table. */
		updateTableBorderProperties?: UpdateTableBorderPropertiesRequest;

		/** Update the properties of a TableCell. */
		updateTableCellProperties?: UpdateTableCellPropertiesRequest;

		/** Updates the properties of a Table column. */
		updateTableColumnProperties?: UpdateTableColumnPropertiesRequest;

		/** Updates the properties of a Table row. */
		updateTableRowProperties?: UpdateTableRowPropertiesRequest;

		/** Update the styling of text in a Shape or Table. */
		updateTextStyle?: UpdateTextStyleRequest;

		/** Update the properties of a Video. */
		updateVideoProperties?: UpdateVideoPropertiesRequest;
	}

	/** A single kind of update to apply to a presentation. */
	export interface RequestFormProperties {
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
		});

	}


	/** Creates an image. */
	export interface CreateImageRequest {

		/** Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged. */
		elementProperties?: PageElementProperties;

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		objectId?: string | null;

		/** The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50 MB in size, can't exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF formats. The provided URL must be publicly accessible and up to 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field. */
		url?: string | null;
	}

	/** Creates an image. */
	export interface CreateImageRequestFormProperties {

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		objectId: FormControl<string | null | undefined>,

		/** The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50 MB in size, can't exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF formats. The provided URL must be publicly accessible and up to 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageRequestFormGroup() {
		return new FormGroup<CreateImageRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged. */
	export interface PageElementProperties {

		/** The object ID of the page where the element is located. */
		pageObjectId?: string | null;

		/** A width and height. */
		size?: Size;

		/** AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements. */
		transform?: AffineTransform;
	}

	/** Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged. */
	export interface PageElementPropertiesFormProperties {

		/** The object ID of the page where the element is located. */
		pageObjectId: FormControl<string | null | undefined>,
	}
	export function CreatePageElementPropertiesFormGroup() {
		return new FormGroup<PageElementPropertiesFormProperties>({
			pageObjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A width and height. */
	export interface Size {

		/** A magnitude in a single direction in the specified units. */
		height?: Dimension;

		/** A magnitude in a single direction in the specified units. */
		width?: Dimension;
	}

	/** A width and height. */
	export interface SizeFormProperties {
	}
	export function CreateSizeFormGroup() {
		return new FormGroup<SizeFormProperties>({
		});

	}


	/** Creates a line. */
	export interface CreateLineRequest {

		/** The category of the line to be created. The exact line type created is determined based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes precedence. If you do not specify a value for `category`, but specify a value for `line_category`, then the specified `line_category` value is used. If you do not specify either, then STRAIGHT is used. */
		category?: CreateLineRequestCategory | null;

		/** Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged. */
		elementProperties?: PageElementProperties;

		/** The category of the line to be created. *Deprecated*: use `category` instead. The exact line type created is determined based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes precedence. */
		lineCategory?: CreateLineRequestLineCategory | null;

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		objectId?: string | null;
	}

	/** Creates a line. */
	export interface CreateLineRequestFormProperties {

		/** The category of the line to be created. The exact line type created is determined based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes precedence. If you do not specify a value for `category`, but specify a value for `line_category`, then the specified `line_category` value is used. If you do not specify either, then STRAIGHT is used. */
		category: FormControl<CreateLineRequestCategory | null | undefined>,

		/** The category of the line to be created. *Deprecated*: use `category` instead. The exact line type created is determined based on the category and how it's routed to connect to other page elements. If you specify both a `category` and a `line_category`, the `category` takes precedence. */
		lineCategory: FormControl<CreateLineRequestLineCategory | null | undefined>,

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLineRequestFormGroup() {
		return new FormGroup<CreateLineRequestFormProperties>({
			category: new FormControl<CreateLineRequestCategory | null | undefined>(undefined),
			lineCategory: new FormControl<CreateLineRequestLineCategory | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateLineRequestCategory { LINE_CATEGORY_UNSPECIFIED = 'LINE_CATEGORY_UNSPECIFIED', STRAIGHT = 'STRAIGHT', BENT = 'BENT', CURVED = 'CURVED' }

	export enum CreateLineRequestLineCategory { STRAIGHT = 'STRAIGHT', BENT = 'BENT', CURVED = 'CURVED' }


	/** Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list. */
	export interface CreateParagraphBulletsRequest {

		/** The kinds of bullet glyphs to be used. Defaults to the `BULLET_DISC_CIRCLE_SQUARE` preset. */
		bulletPreset?: CreateParagraphBulletsRequestBulletPreset | null;

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The object ID of the shape or table containing the text to add bullets to. */
		objectId?: string | null;

		/** Specifies a contiguous range of an indexed collection, such as characters in text. */
		textRange?: Range;
	}

	/** Creates bullets for all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list. */
	export interface CreateParagraphBulletsRequestFormProperties {

		/** The kinds of bullet glyphs to be used. Defaults to the `BULLET_DISC_CIRCLE_SQUARE` preset. */
		bulletPreset: FormControl<CreateParagraphBulletsRequestBulletPreset | null | undefined>,

		/** The object ID of the shape or table containing the text to add bullets to. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateParagraphBulletsRequestFormGroup() {
		return new FormGroup<CreateParagraphBulletsRequestFormProperties>({
			bulletPreset: new FormControl<CreateParagraphBulletsRequestBulletPreset | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateParagraphBulletsRequestBulletPreset { BULLET_DISC_CIRCLE_SQUARE = 'BULLET_DISC_CIRCLE_SQUARE', BULLET_DIAMONDX_ARROW3D_SQUARE = 'BULLET_DIAMONDX_ARROW3D_SQUARE', BULLET_CHECKBOX = 'BULLET_CHECKBOX', BULLET_ARROW_DIAMOND_DISC = 'BULLET_ARROW_DIAMOND_DISC', BULLET_STAR_CIRCLE_SQUARE = 'BULLET_STAR_CIRCLE_SQUARE', BULLET_ARROW3D_CIRCLE_SQUARE = 'BULLET_ARROW3D_CIRCLE_SQUARE', BULLET_LEFTTRIANGLE_DIAMOND_DISC = 'BULLET_LEFTTRIANGLE_DIAMOND_DISC', BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE = 'BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE', BULLET_DIAMOND_CIRCLE_SQUARE = 'BULLET_DIAMOND_CIRCLE_SQUARE', NUMBERED_DIGIT_ALPHA_ROMAN = 'NUMBERED_DIGIT_ALPHA_ROMAN', NUMBERED_DIGIT_ALPHA_ROMAN_PARENS = 'NUMBERED_DIGIT_ALPHA_ROMAN_PARENS', NUMBERED_DIGIT_NESTED = 'NUMBERED_DIGIT_NESTED', NUMBERED_UPPERALPHA_ALPHA_ROMAN = 'NUMBERED_UPPERALPHA_ALPHA_ROMAN', NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT = 'NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT', NUMBERED_ZERODIGIT_ALPHA_ROMAN = 'NUMBERED_ZERODIGIT_ALPHA_ROMAN' }


	/** A location of a single table cell within a table. */
	export interface TableCellLocation {

		/**
		 * The 0-based column index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columnIndex?: number | null;

		/**
		 * The 0-based row index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowIndex?: number | null;
	}

	/** A location of a single table cell within a table. */
	export interface TableCellLocationFormProperties {

		/**
		 * The 0-based column index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columnIndex: FormControl<number | null | undefined>,

		/**
		 * The 0-based row index.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowIndex: FormControl<number | null | undefined>,
	}
	export function CreateTableCellLocationFormGroup() {
		return new FormGroup<TableCellLocationFormProperties>({
			columnIndex: new FormControl<number | null | undefined>(undefined),
			rowIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies a contiguous range of an indexed collection, such as characters in text. */
	export interface Range {

		/**
		 * The optional zero-based index of the end of the collection. Required for `FIXED_RANGE` ranges.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endIndex?: number | null;

		/**
		 * The optional zero-based index of the beginning of the collection. Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startIndex?: number | null;

		/** The type of range. */
		type?: RangeType | null;
	}

	/** Specifies a contiguous range of an indexed collection, such as characters in text. */
	export interface RangeFormProperties {

		/**
		 * The optional zero-based index of the end of the collection. Required for `FIXED_RANGE` ranges.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endIndex: FormControl<number | null | undefined>,

		/**
		 * The optional zero-based index of the beginning of the collection. Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startIndex: FormControl<number | null | undefined>,

		/** The type of range. */
		type: FormControl<RangeType | null | undefined>,
	}
	export function CreateRangeFormGroup() {
		return new FormGroup<RangeFormProperties>({
			endIndex: new FormControl<number | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<RangeType | null | undefined>(undefined),
		});

	}

	export enum RangeType { RANGE_TYPE_UNSPECIFIED = 'RANGE_TYPE_UNSPECIFIED', FIXED_RANGE = 'FIXED_RANGE', FROM_START_INDEX = 'FROM_START_INDEX', ALL = 'ALL' }


	/** Creates a new shape. */
	export interface CreateShapeRequest {

		/** Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged. */
		elementProperties?: PageElementProperties;

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If empty, a unique identifier will be generated. */
		objectId?: string | null;

		/** The shape type. */
		shapeType?: CreateShapeRequestShapeType | null;
	}

	/** Creates a new shape. */
	export interface CreateShapeRequestFormProperties {

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If empty, a unique identifier will be generated. */
		objectId: FormControl<string | null | undefined>,

		/** The shape type. */
		shapeType: FormControl<CreateShapeRequestShapeType | null | undefined>,
	}
	export function CreateCreateShapeRequestFormGroup() {
		return new FormGroup<CreateShapeRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
			shapeType: new FormControl<CreateShapeRequestShapeType | null | undefined>(undefined),
		});

	}

	export enum CreateShapeRequestShapeType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', TEXT_BOX = 'TEXT_BOX', RECTANGLE = 'RECTANGLE', ROUND_RECTANGLE = 'ROUND_RECTANGLE', ELLIPSE = 'ELLIPSE', ARC = 'ARC', BENT_ARROW = 'BENT_ARROW', BENT_UP_ARROW = 'BENT_UP_ARROW', BEVEL = 'BEVEL', BLOCK_ARC = 'BLOCK_ARC', BRACE_PAIR = 'BRACE_PAIR', BRACKET_PAIR = 'BRACKET_PAIR', CAN = 'CAN', CHEVRON = 'CHEVRON', CHORD = 'CHORD', CLOUD = 'CLOUD', CORNER = 'CORNER', CUBE = 'CUBE', CURVED_DOWN_ARROW = 'CURVED_DOWN_ARROW', CURVED_LEFT_ARROW = 'CURVED_LEFT_ARROW', CURVED_RIGHT_ARROW = 'CURVED_RIGHT_ARROW', CURVED_UP_ARROW = 'CURVED_UP_ARROW', DECAGON = 'DECAGON', DIAGONAL_STRIPE = 'DIAGONAL_STRIPE', DIAMOND = 'DIAMOND', DODECAGON = 'DODECAGON', DONUT = 'DONUT', DOUBLE_WAVE = 'DOUBLE_WAVE', DOWN_ARROW = 'DOWN_ARROW', DOWN_ARROW_CALLOUT = 'DOWN_ARROW_CALLOUT', FOLDED_CORNER = 'FOLDED_CORNER', FRAME = 'FRAME', HALF_FRAME = 'HALF_FRAME', HEART = 'HEART', HEPTAGON = 'HEPTAGON', HEXAGON = 'HEXAGON', HOME_PLATE = 'HOME_PLATE', HORIZONTAL_SCROLL = 'HORIZONTAL_SCROLL', IRREGULAR_SEAL_1 = 'IRREGULAR_SEAL_1', IRREGULAR_SEAL_2 = 'IRREGULAR_SEAL_2', LEFT_ARROW = 'LEFT_ARROW', LEFT_ARROW_CALLOUT = 'LEFT_ARROW_CALLOUT', LEFT_BRACE = 'LEFT_BRACE', LEFT_BRACKET = 'LEFT_BRACKET', LEFT_RIGHT_ARROW = 'LEFT_RIGHT_ARROW', LEFT_RIGHT_ARROW_CALLOUT = 'LEFT_RIGHT_ARROW_CALLOUT', LEFT_RIGHT_UP_ARROW = 'LEFT_RIGHT_UP_ARROW', LEFT_UP_ARROW = 'LEFT_UP_ARROW', LIGHTNING_BOLT = 'LIGHTNING_BOLT', MATH_DIVIDE = 'MATH_DIVIDE', MATH_EQUAL = 'MATH_EQUAL', MATH_MINUS = 'MATH_MINUS', MATH_MULTIPLY = 'MATH_MULTIPLY', MATH_NOT_EQUAL = 'MATH_NOT_EQUAL', MATH_PLUS = 'MATH_PLUS', MOON = 'MOON', NO_SMOKING = 'NO_SMOKING', NOTCHED_RIGHT_ARROW = 'NOTCHED_RIGHT_ARROW', OCTAGON = 'OCTAGON', PARALLELOGRAM = 'PARALLELOGRAM', PENTAGON = 'PENTAGON', PIE = 'PIE', PLAQUE = 'PLAQUE', PLUS = 'PLUS', QUAD_ARROW = 'QUAD_ARROW', QUAD_ARROW_CALLOUT = 'QUAD_ARROW_CALLOUT', RIBBON = 'RIBBON', RIBBON_2 = 'RIBBON_2', RIGHT_ARROW = 'RIGHT_ARROW', RIGHT_ARROW_CALLOUT = 'RIGHT_ARROW_CALLOUT', RIGHT_BRACE = 'RIGHT_BRACE', RIGHT_BRACKET = 'RIGHT_BRACKET', ROUND_1_RECTANGLE = 'ROUND_1_RECTANGLE', ROUND_2_DIAGONAL_RECTANGLE = 'ROUND_2_DIAGONAL_RECTANGLE', ROUND_2_SAME_RECTANGLE = 'ROUND_2_SAME_RECTANGLE', RIGHT_TRIANGLE = 'RIGHT_TRIANGLE', SMILEY_FACE = 'SMILEY_FACE', SNIP_1_RECTANGLE = 'SNIP_1_RECTANGLE', SNIP_2_DIAGONAL_RECTANGLE = 'SNIP_2_DIAGONAL_RECTANGLE', SNIP_2_SAME_RECTANGLE = 'SNIP_2_SAME_RECTANGLE', SNIP_ROUND_RECTANGLE = 'SNIP_ROUND_RECTANGLE', STAR_10 = 'STAR_10', STAR_12 = 'STAR_12', STAR_16 = 'STAR_16', STAR_24 = 'STAR_24', STAR_32 = 'STAR_32', STAR_4 = 'STAR_4', STAR_5 = 'STAR_5', STAR_6 = 'STAR_6', STAR_7 = 'STAR_7', STAR_8 = 'STAR_8', STRIPED_RIGHT_ARROW = 'STRIPED_RIGHT_ARROW', SUN = 'SUN', TRAPEZOID = 'TRAPEZOID', TRIANGLE = 'TRIANGLE', UP_ARROW = 'UP_ARROW', UP_ARROW_CALLOUT = 'UP_ARROW_CALLOUT', UP_DOWN_ARROW = 'UP_DOWN_ARROW', UTURN_ARROW = 'UTURN_ARROW', VERTICAL_SCROLL = 'VERTICAL_SCROLL', WAVE = 'WAVE', WEDGE_ELLIPSE_CALLOUT = 'WEDGE_ELLIPSE_CALLOUT', WEDGE_RECTANGLE_CALLOUT = 'WEDGE_RECTANGLE_CALLOUT', WEDGE_ROUND_RECTANGLE_CALLOUT = 'WEDGE_ROUND_RECTANGLE_CALLOUT', FLOW_CHART_ALTERNATE_PROCESS = 'FLOW_CHART_ALTERNATE_PROCESS', FLOW_CHART_COLLATE = 'FLOW_CHART_COLLATE', FLOW_CHART_CONNECTOR = 'FLOW_CHART_CONNECTOR', FLOW_CHART_DECISION = 'FLOW_CHART_DECISION', FLOW_CHART_DELAY = 'FLOW_CHART_DELAY', FLOW_CHART_DISPLAY = 'FLOW_CHART_DISPLAY', FLOW_CHART_DOCUMENT = 'FLOW_CHART_DOCUMENT', FLOW_CHART_EXTRACT = 'FLOW_CHART_EXTRACT', FLOW_CHART_INPUT_OUTPUT = 'FLOW_CHART_INPUT_OUTPUT', FLOW_CHART_INTERNAL_STORAGE = 'FLOW_CHART_INTERNAL_STORAGE', FLOW_CHART_MAGNETIC_DISK = 'FLOW_CHART_MAGNETIC_DISK', FLOW_CHART_MAGNETIC_DRUM = 'FLOW_CHART_MAGNETIC_DRUM', FLOW_CHART_MAGNETIC_TAPE = 'FLOW_CHART_MAGNETIC_TAPE', FLOW_CHART_MANUAL_INPUT = 'FLOW_CHART_MANUAL_INPUT', FLOW_CHART_MANUAL_OPERATION = 'FLOW_CHART_MANUAL_OPERATION', FLOW_CHART_MERGE = 'FLOW_CHART_MERGE', FLOW_CHART_MULTIDOCUMENT = 'FLOW_CHART_MULTIDOCUMENT', FLOW_CHART_OFFLINE_STORAGE = 'FLOW_CHART_OFFLINE_STORAGE', FLOW_CHART_OFFPAGE_CONNECTOR = 'FLOW_CHART_OFFPAGE_CONNECTOR', FLOW_CHART_ONLINE_STORAGE = 'FLOW_CHART_ONLINE_STORAGE', FLOW_CHART_OR = 'FLOW_CHART_OR', FLOW_CHART_PREDEFINED_PROCESS = 'FLOW_CHART_PREDEFINED_PROCESS', FLOW_CHART_PREPARATION = 'FLOW_CHART_PREPARATION', FLOW_CHART_PROCESS = 'FLOW_CHART_PROCESS', FLOW_CHART_PUNCHED_CARD = 'FLOW_CHART_PUNCHED_CARD', FLOW_CHART_PUNCHED_TAPE = 'FLOW_CHART_PUNCHED_TAPE', FLOW_CHART_SORT = 'FLOW_CHART_SORT', FLOW_CHART_SUMMING_JUNCTION = 'FLOW_CHART_SUMMING_JUNCTION', FLOW_CHART_TERMINATOR = 'FLOW_CHART_TERMINATOR', ARROW_EAST = 'ARROW_EAST', ARROW_NORTH_EAST = 'ARROW_NORTH_EAST', ARROW_NORTH = 'ARROW_NORTH', SPEECH = 'SPEECH', STARBURST = 'STARBURST', TEARDROP = 'TEARDROP', ELLIPSE_RIBBON = 'ELLIPSE_RIBBON', ELLIPSE_RIBBON_2 = 'ELLIPSE_RIBBON_2', CLOUD_CALLOUT = 'CLOUD_CALLOUT', CUSTOM = 'CUSTOM' }


	/** Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes. */
	export interface CreateSheetsChartRequest {

		/**
		 * The ID of the specific chart in the Google Sheets spreadsheet.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		chartId?: number | null;

		/** Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged. */
		elementProperties?: PageElementProperties;

		/** The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked. */
		linkingMode?: CreateSheetsChartRequestLinkingMode | null;

		/** A user-supplied object ID. If specified, the ID must be unique among all pages and page elements in the presentation. The ID should start with a word character [a-zA-Z0-9_] and then followed by any number of the following characters [a-zA-Z0-9_-:]. The length of the ID should not be less than 5 or greater than 50. If empty, a unique identifier will be generated. */
		objectId?: string | null;

		/** The ID of the Google Sheets spreadsheet that contains the chart. You might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys). */
		spreadsheetId?: string | null;
	}

	/** Creates an embedded Google Sheets chart. NOTE: Chart creation requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, drive.file, or drive OAuth scopes. */
	export interface CreateSheetsChartRequestFormProperties {

		/**
		 * The ID of the specific chart in the Google Sheets spreadsheet.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		chartId: FormControl<number | null | undefined>,

		/** The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked. */
		linkingMode: FormControl<CreateSheetsChartRequestLinkingMode | null | undefined>,

		/** A user-supplied object ID. If specified, the ID must be unique among all pages and page elements in the presentation. The ID should start with a word character [a-zA-Z0-9_] and then followed by any number of the following characters [a-zA-Z0-9_-:]. The length of the ID should not be less than 5 or greater than 50. If empty, a unique identifier will be generated. */
		objectId: FormControl<string | null | undefined>,

		/** The ID of the Google Sheets spreadsheet that contains the chart. You might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys). */
		spreadsheetId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSheetsChartRequestFormGroup() {
		return new FormGroup<CreateSheetsChartRequestFormProperties>({
			chartId: new FormControl<number | null | undefined>(undefined),
			linkingMode: new FormControl<CreateSheetsChartRequestLinkingMode | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CreateSheetsChartRequestLinkingMode { NOT_LINKED_IMAGE = 'NOT_LINKED_IMAGE', LINKED = 'LINKED' }


	/** Creates a slide. */
	export interface CreateSlideRequest {

		/**
		 * The optional zero-based index indicating where to insert the slides. If you don't specify an index, the slide is created at the end.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		insertionIndex?: number | null;

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The ID length must be between 5 and 50 characters, inclusive. If you don't specify an ID, a unique one is generated. */
		objectId?: string | null;

		/** An optional list of object ID mappings from the placeholder(s) on the layout to the placeholders that are created on the slide from the specified layout. Can only be used when `slide_layout_reference` is specified. */
		placeholderIdMappings?: Array<LayoutPlaceholderIdMapping>;

		/** Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation. */
		slideLayoutReference?: LayoutReference;
	}

	/** Creates a slide. */
	export interface CreateSlideRequestFormProperties {

		/**
		 * The optional zero-based index indicating where to insert the slides. If you don't specify an index, the slide is created at the end.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		insertionIndex: FormControl<number | null | undefined>,

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The ID length must be between 5 and 50 characters, inclusive. If you don't specify an ID, a unique one is generated. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlideRequestFormGroup() {
		return new FormGroup<CreateSlideRequestFormProperties>({
			insertionIndex: new FormControl<number | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout. */
	export interface LayoutPlaceholderIdMapping {

		/** The placeholder information that uniquely identifies a placeholder shape. */
		layoutPlaceholder?: Placeholder;

		/** The object ID of the placeholder on a layout that will be applied to a slide. */
		layoutPlaceholderObjectId?: string | null;

		/** A user-supplied object ID for the placeholder identified above that to be created onto a slide. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		objectId?: string | null;
	}

	/** The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout. */
	export interface LayoutPlaceholderIdMappingFormProperties {

		/** The object ID of the placeholder on a layout that will be applied to a slide. */
		layoutPlaceholderObjectId: FormControl<string | null | undefined>,

		/** A user-supplied object ID for the placeholder identified above that to be created onto a slide. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateLayoutPlaceholderIdMappingFormGroup() {
		return new FormGroup<LayoutPlaceholderIdMappingFormProperties>({
			layoutPlaceholderObjectId: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The placeholder information that uniquely identifies a placeholder shape. */
	export interface Placeholder {

		/**
		 * The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index?: number | null;

		/** The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape. */
		parentObjectId?: string | null;

		/** The type of the placeholder. */
		type?: PlaceholderType | null;
	}

	/** The placeholder information that uniquely identifies a placeholder shape. */
	export interface PlaceholderFormProperties {

		/**
		 * The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		index: FormControl<number | null | undefined>,

		/** The object ID of this shape's parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape. */
		parentObjectId: FormControl<string | null | undefined>,

		/** The type of the placeholder. */
		type: FormControl<PlaceholderType | null | undefined>,
	}
	export function CreatePlaceholderFormGroup() {
		return new FormGroup<PlaceholderFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
			parentObjectId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<PlaceholderType | null | undefined>(undefined),
		});

	}

	export enum PlaceholderType { NONE = 'NONE', BODY = 'BODY', CHART = 'CHART', CLIP_ART = 'CLIP_ART', CENTERED_TITLE = 'CENTERED_TITLE', DIAGRAM = 'DIAGRAM', DATE_AND_TIME = 'DATE_AND_TIME', FOOTER = 'FOOTER', HEADER = 'HEADER', MEDIA = 'MEDIA', OBJECT = 'OBJECT', PICTURE = 'PICTURE', SLIDE_NUMBER = 'SLIDE_NUMBER', SUBTITLE = 'SUBTITLE', TABLE = 'TABLE', TITLE = 'TITLE', SLIDE_IMAGE = 'SLIDE_IMAGE' }


	/** Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation. */
	export interface LayoutReference {

		/** Layout ID: the object ID of one of the layouts in the presentation. */
		layoutId?: string | null;

		/** Predefined layout. */
		predefinedLayout?: LayoutReferencePredefinedLayout | null;
	}

	/** Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation. */
	export interface LayoutReferenceFormProperties {

		/** Layout ID: the object ID of one of the layouts in the presentation. */
		layoutId: FormControl<string | null | undefined>,

		/** Predefined layout. */
		predefinedLayout: FormControl<LayoutReferencePredefinedLayout | null | undefined>,
	}
	export function CreateLayoutReferenceFormGroup() {
		return new FormGroup<LayoutReferenceFormProperties>({
			layoutId: new FormControl<string | null | undefined>(undefined),
			predefinedLayout: new FormControl<LayoutReferencePredefinedLayout | null | undefined>(undefined),
		});

	}

	export enum LayoutReferencePredefinedLayout { PREDEFINED_LAYOUT_UNSPECIFIED = 'PREDEFINED_LAYOUT_UNSPECIFIED', BLANK = 'BLANK', CAPTION_ONLY = 'CAPTION_ONLY', TITLE = 'TITLE', TITLE_AND_BODY = 'TITLE_AND_BODY', TITLE_AND_TWO_COLUMNS = 'TITLE_AND_TWO_COLUMNS', TITLE_ONLY = 'TITLE_ONLY', SECTION_HEADER = 'SECTION_HEADER', SECTION_TITLE_AND_DESCRIPTION = 'SECTION_TITLE_AND_DESCRIPTION', ONE_COLUMN_TEXT = 'ONE_COLUMN_TEXT', MAIN_POINT = 'MAIN_POINT', BIG_NUMBER = 'BIG_NUMBER' }


	/** Creates a new table. */
	export interface CreateTableRequest {

		/**
		 * Number of columns in the table.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columns?: number | null;

		/** Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged. */
		elementProperties?: PageElementProperties;

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		objectId?: string | null;

		/**
		 * Number of rows in the table.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rows?: number | null;
	}

	/** Creates a new table. */
	export interface CreateTableRequestFormProperties {

		/**
		 * Number of columns in the table.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columns: FormControl<number | null | undefined>,

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		objectId: FormControl<string | null | undefined>,

		/**
		 * Number of rows in the table.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rows: FormControl<number | null | undefined>,
	}
	export function CreateCreateTableRequestFormGroup() {
		return new FormGroup<CreateTableRequestFormProperties>({
			columns: new FormControl<number | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			rows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes. */
	export interface CreateVideoRequest {

		/** Common properties for a page element. Note: When you initially create a PageElement, the API may modify the values of both `size` and `transform`, but the visual size will be unchanged. */
		elementProperties?: PageElementProperties;

		/** The video source's unique identifier for this video. e.g. For YouTube video https://www.youtube.com/watch?v=7U3axjORYZ0, the ID is 7U3axjORYZ0. For a Google Drive video https://drive.google.com/file/d/1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q the ID is 1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q. To access a Google Drive video file, you might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys). */
		id?: string | null;

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		objectId?: string | null;

		/** The video source. */
		source?: CreateVideoRequestSource | null;
	}

	/** Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes. */
	export interface CreateVideoRequestFormProperties {

		/** The video source's unique identifier for this video. e.g. For YouTube video https://www.youtube.com/watch?v=7U3axjORYZ0, the ID is 7U3axjORYZ0. For a Google Drive video https://drive.google.com/file/d/1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q the ID is 1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q. To access a Google Drive video file, you might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys). */
		id: FormControl<string | null | undefined>,

		/** A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		objectId: FormControl<string | null | undefined>,

		/** The video source. */
		source: FormControl<CreateVideoRequestSource | null | undefined>,
	}
	export function CreateCreateVideoRequestFormGroup() {
		return new FormGroup<CreateVideoRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<CreateVideoRequestSource | null | undefined>(undefined),
		});

	}

	export enum CreateVideoRequestSource { SOURCE_UNSPECIFIED = 'SOURCE_UNSPECIFIED', YOUTUBE = 'YOUTUBE', DRIVE = 'DRIVE' }


	/** Deletes an object, either pages or page elements, from the presentation. */
	export interface DeleteObjectRequest {

		/** The object ID of the page or page element to delete. If after a delete operation a group contains only 1 or no page elements, the group is also deleted. If a placeholder is deleted on a layout, any empty inheriting placeholders are also deleted. */
		objectId?: string | null;
	}

	/** Deletes an object, either pages or page elements, from the presentation. */
	export interface DeleteObjectRequestFormProperties {

		/** The object ID of the page or page element to delete. If after a delete operation a group contains only 1 or no page elements, the group is also deleted. If a placeholder is deleted on a layout, any empty inheriting placeholders are also deleted. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteObjectRequestFormGroup() {
		return new FormGroup<DeleteObjectRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deletes bullets from all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph. */
	export interface DeleteParagraphBulletsRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The object ID of the shape or table containing the text to delete bullets from. */
		objectId?: string | null;

		/** Specifies a contiguous range of an indexed collection, such as characters in text. */
		textRange?: Range;
	}

	/** Deletes bullets from all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph. */
	export interface DeleteParagraphBulletsRequestFormProperties {

		/** The object ID of the shape or table containing the text to delete bullets from. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteParagraphBulletsRequestFormGroup() {
		return new FormGroup<DeleteParagraphBulletsRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deletes a column from a table. */
	export interface DeleteTableColumnRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The table to delete columns from. */
		tableObjectId?: string | null;
	}

	/** Deletes a column from a table. */
	export interface DeleteTableColumnRequestFormProperties {

		/** The table to delete columns from. */
		tableObjectId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableColumnRequestFormGroup() {
		return new FormGroup<DeleteTableColumnRequestFormProperties>({
			tableObjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deletes a row from a table. */
	export interface DeleteTableRowRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The table to delete rows from. */
		tableObjectId?: string | null;
	}

	/** Deletes a row from a table. */
	export interface DeleteTableRowRequestFormProperties {

		/** The table to delete rows from. */
		tableObjectId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTableRowRequestFormGroup() {
		return new FormGroup<DeleteTableRowRequestFormProperties>({
			tableObjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deletes text from a shape or a table cell. */
	export interface DeleteTextRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The object ID of the shape or table from which the text will be deleted. */
		objectId?: string | null;

		/** Specifies a contiguous range of an indexed collection, such as characters in text. */
		textRange?: Range;
	}

	/** Deletes text from a shape or a table cell. */
	export interface DeleteTextRequestFormProperties {

		/** The object ID of the shape or table from which the text will be deleted. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteTextRequestFormGroup() {
		return new FormGroup<DeleteTextRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original. */
	export interface DuplicateObjectRequest {

		/** The ID of the object to duplicate. */
		objectId?: string | null;

		/** The object being duplicated may contain other objects, for example when duplicating a slide or a group page element. This map defines how the IDs of duplicated objects are generated: the keys are the IDs of the original objects and its values are the IDs that will be assigned to the corresponding duplicate object. The ID of the source object's duplicate may be specified in this map as well, using the same value of the `object_id` field as a key and the newly desired ID as the value. All keys must correspond to existing IDs in the presentation. All values must be unique in the presentation and must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or greater than 50. If any IDs of source objects are omitted from the map, a new random ID will be assigned. If the map is empty or unset, all duplicate objects will receive a new random ID. */
		objectIds?: {[id: string]: string };
	}

	/** Duplicates a slide or page element. When duplicating a slide, the duplicate slide will be created immediately following the specified slide. When duplicating a page element, the duplicate will be placed on the same page at the same position as the original. */
	export interface DuplicateObjectRequestFormProperties {

		/** The ID of the object to duplicate. */
		objectId: FormControl<string | null | undefined>,

		/** The object being duplicated may contain other objects, for example when duplicating a slide or a group page element. This map defines how the IDs of duplicated objects are generated: the keys are the IDs of the original objects and its values are the IDs that will be assigned to the corresponding duplicate object. The ID of the source object's duplicate may be specified in this map as well, using the same value of the `object_id` field as a key and the newly desired ID as the value. All keys must correspond to existing IDs in the presentation. All values must be unique in the presentation and must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or greater than 50. If any IDs of source objects are omitted from the map, a new random ID will be assigned. If the map is empty or unset, all duplicate objects will receive a new random ID. */
		objectIds: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateDuplicateObjectRequestFormGroup() {
		return new FormGroup<DuplicateObjectRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
			objectIds: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children. */
	export interface GroupObjectsRequest {

		/** The object IDs of the objects to group. Only page elements can be grouped. There should be at least two page elements on the same page that are not already in another group. Some page elements, such as videos, tables and placeholders cannot be grouped. */
		childrenObjectIds?: Array<string>;

		/** A user-supplied object ID for the group to be created. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		groupObjectId?: string | null;
	}

	/** Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children. */
	export interface GroupObjectsRequestFormProperties {

		/** A user-supplied object ID for the group to be created. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining characters may include those as well as a hyphen or colon (matches regex `[a-zA-Z0-9_-:]`). The length of the ID must not be less than 5 or greater than 50. If you don't specify an ID, a unique one is generated. */
		groupObjectId: FormControl<string | null | undefined>,
	}
	export function CreateGroupObjectsRequestFormGroup() {
		return new FormGroup<GroupObjectsRequestFormProperties>({
			groupObjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Inserts columns into a table. Other columns in the table will be resized to fit the new column. */
	export interface InsertTableColumnsRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** Whether to insert new columns to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left. */
		insertRight?: boolean | null;

		/**
		 * The number of columns to be inserted. Maximum 20 per request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number?: number | null;

		/** The table to insert columns into. */
		tableObjectId?: string | null;
	}

	/** Inserts columns into a table. Other columns in the table will be resized to fit the new column. */
	export interface InsertTableColumnsRequestFormProperties {

		/** Whether to insert new columns to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left. */
		insertRight: FormControl<boolean | null | undefined>,

		/**
		 * The number of columns to be inserted. Maximum 20 per request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: FormControl<number | null | undefined>,

		/** The table to insert columns into. */
		tableObjectId: FormControl<string | null | undefined>,
	}
	export function CreateInsertTableColumnsRequestFormGroup() {
		return new FormGroup<InsertTableColumnsRequestFormProperties>({
			insertRight: new FormControl<boolean | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			tableObjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Inserts rows into a table. */
	export interface InsertTableRowsRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** Whether to insert new rows below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell. */
		insertBelow?: boolean | null;

		/**
		 * The number of rows to be inserted. Maximum 20 per request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number?: number | null;

		/** The table to insert rows into. */
		tableObjectId?: string | null;
	}

	/** Inserts rows into a table. */
	export interface InsertTableRowsRequestFormProperties {

		/** Whether to insert new rows below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell. */
		insertBelow: FormControl<boolean | null | undefined>,

		/**
		 * The number of rows to be inserted. Maximum 20 per request.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		number: FormControl<number | null | undefined>,

		/** The table to insert rows into. */
		tableObjectId: FormControl<string | null | undefined>,
	}
	export function CreateInsertTableRowsRequestFormGroup() {
		return new FormGroup<InsertTableRowsRequestFormProperties>({
			insertBelow: new FormControl<boolean | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			tableObjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Inserts text into a shape or a table cell. */
	export interface InsertTextRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/**
		 * The index where the text will be inserted, in Unicode code units, based on TextElement indexes. The index is zero-based and is computed from the start of the string. The index may be adjusted to prevent insertions inside Unicode grapheme clusters. In these cases, the text will be inserted immediately after the grapheme cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		insertionIndex?: number | null;

		/** The object ID of the shape or table where the text will be inserted. */
		objectId?: string | null;

		/** The text to be inserted. Inserting a newline character will implicitly create a new ParagraphMarker at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text will be added to the TextRun that exists at the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text. */
		text?: string | null;
	}

	/** Inserts text into a shape or a table cell. */
	export interface InsertTextRequestFormProperties {

		/**
		 * The index where the text will be inserted, in Unicode code units, based on TextElement indexes. The index is zero-based and is computed from the start of the string. The index may be adjusted to prevent insertions inside Unicode grapheme clusters. In these cases, the text will be inserted immediately after the grapheme cluster.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		insertionIndex: FormControl<number | null | undefined>,

		/** The object ID of the shape or table where the text will be inserted. */
		objectId: FormControl<string | null | undefined>,

		/** The text to be inserted. Inserting a newline character will implicitly create a new ParagraphMarker at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text will be added to the TextRun that exists at the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateInsertTextRequestFormGroup() {
		return new FormGroup<InsertTextRequestFormProperties>({
			insertionIndex: new FormControl<number | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Merges cells in a Table. */
	export interface MergeTableCellsRequest {

		/** The object ID of the table. */
		objectId?: string | null;

		/** A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ] */
		tableRange?: TableRange;
	}

	/** Merges cells in a Table. */
	export interface MergeTableCellsRequestFormProperties {

		/** The object ID of the table. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateMergeTableCellsRequestFormGroup() {
		return new FormGroup<MergeTableCellsRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ] */
	export interface TableRange {

		/**
		 * The column span of the table range.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columnSpan?: number | null;

		/** A location of a single table cell within a table. */
		location?: TableCellLocation;

		/**
		 * The row span of the table range.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowSpan?: number | null;
	}

	/** A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ] */
	export interface TableRangeFormProperties {

		/**
		 * The column span of the table range.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columnSpan: FormControl<number | null | undefined>,

		/**
		 * The row span of the table range.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowSpan: FormControl<number | null | undefined>,
	}
	export function CreateTableRangeFormGroup() {
		return new FormGroup<TableRangeFormProperties>({
			columnSpan: new FormControl<number | null | undefined>(undefined),
			rowSpan: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes. */
	export interface RefreshSheetsChartRequest {

		/** The object ID of the chart to refresh. */
		objectId?: string | null;
	}

	/** Refreshes an embedded Google Sheets chart by replacing it with the latest version of the chart from Google Sheets. NOTE: Refreshing charts requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes. */
	export interface RefreshSheetsChartRequestFormProperties {

		/** The object ID of the chart to refresh. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateRefreshSheetsChartRequestFormGroup() {
		return new FormGroup<RefreshSheetsChartRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes. */
	export interface ReplaceAllShapesWithImageRequest {

		/** A criteria that matches a specific string of text in a shape or table. */
		containsText?: SubstringMatchCriteria;

		/** The image replace method. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence. If you do not specify a value for `image_replace_method`, but specify a value for `replace_method`, then the specified `replace_method` value is used. If you do not specify either, then CENTER_INSIDE is used. */
		imageReplaceMethod?: ReplaceAllShapesWithImageRequestImageReplaceMethod | null;

		/** The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url field. */
		imageUrl?: string | null;

		/** If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation. */
		pageObjectIds?: Array<string>;

		/** The replace method. *Deprecated*: use `image_replace_method` instead. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence. */
		replaceMethod?: ReplaceAllShapesWithImageRequestReplaceMethod | null;
	}

	/** Replaces all shapes that match the given criteria with the provided image. The images replacing the shapes are rectangular after being inserted into the presentation and do not take on the forms of the shapes. */
	export interface ReplaceAllShapesWithImageRequestFormProperties {

		/** The image replace method. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence. If you do not specify a value for `image_replace_method`, but specify a value for `replace_method`, then the specified `replace_method` value is used. If you do not specify either, then CENTER_INSIDE is used. */
		imageReplaceMethod: FormControl<ReplaceAllShapesWithImageRequestImageReplaceMethod | null | undefined>,

		/** The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. The URL itself is saved with the image, and exposed via the Image.source_url field. */
		imageUrl: FormControl<string | null | undefined>,

		/** The replace method. *Deprecated*: use `image_replace_method` instead. If you specify both a `replace_method` and an `image_replace_method`, the `image_replace_method` takes precedence. */
		replaceMethod: FormControl<ReplaceAllShapesWithImageRequestReplaceMethod | null | undefined>,
	}
	export function CreateReplaceAllShapesWithImageRequestFormGroup() {
		return new FormGroup<ReplaceAllShapesWithImageRequestFormProperties>({
			imageReplaceMethod: new FormControl<ReplaceAllShapesWithImageRequestImageReplaceMethod | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			replaceMethod: new FormControl<ReplaceAllShapesWithImageRequestReplaceMethod | null | undefined>(undefined),
		});

	}


	/** A criteria that matches a specific string of text in a shape or table. */
	export interface SubstringMatchCriteria {

		/** Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive. */
		matchCase?: boolean | null;

		/** The text to search for in the shape or table. */
		text?: string | null;
	}

	/** A criteria that matches a specific string of text in a shape or table. */
	export interface SubstringMatchCriteriaFormProperties {

		/** Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive. */
		matchCase: FormControl<boolean | null | undefined>,

		/** The text to search for in the shape or table. */
		text: FormControl<string | null | undefined>,
	}
	export function CreateSubstringMatchCriteriaFormGroup() {
		return new FormGroup<SubstringMatchCriteriaFormProperties>({
			matchCase: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ReplaceAllShapesWithImageRequestImageReplaceMethod { IMAGE_REPLACE_METHOD_UNSPECIFIED = 'IMAGE_REPLACE_METHOD_UNSPECIFIED', CENTER_INSIDE = 'CENTER_INSIDE', CENTER_CROP = 'CENTER_CROP' }

	export enum ReplaceAllShapesWithImageRequestReplaceMethod { CENTER_INSIDE = 'CENTER_INSIDE', CENTER_CROP = 'CENTER_CROP' }


	/** Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes. */
	export interface ReplaceAllShapesWithSheetsChartRequest {

		/**
		 * The ID of the specific chart in the Google Sheets spreadsheet.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		chartId?: number | null;

		/** A criteria that matches a specific string of text in a shape or table. */
		containsText?: SubstringMatchCriteria;

		/** The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked. */
		linkingMode?: CreateSheetsChartRequestLinkingMode | null;

		/** If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes page or a notes master, or if a page with that object ID doesn't exist in the presentation. */
		pageObjectIds?: Array<string>;

		/** The ID of the Google Sheets spreadsheet that contains the chart. */
		spreadsheetId?: string | null;
	}

	/** Replaces all shapes that match the given criteria with the provided Google Sheets chart. The chart will be scaled and centered to fit within the bounds of the original shape. NOTE: Replacing shapes with a chart requires at least one of the spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes. */
	export interface ReplaceAllShapesWithSheetsChartRequestFormProperties {

		/**
		 * The ID of the specific chart in the Google Sheets spreadsheet.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		chartId: FormControl<number | null | undefined>,

		/** The mode with which the chart is linked to the source spreadsheet. When not specified, the chart will be an image that is not linked. */
		linkingMode: FormControl<CreateSheetsChartRequestLinkingMode | null | undefined>,

		/** The ID of the Google Sheets spreadsheet that contains the chart. */
		spreadsheetId: FormControl<string | null | undefined>,
	}
	export function CreateReplaceAllShapesWithSheetsChartRequestFormGroup() {
		return new FormGroup<ReplaceAllShapesWithSheetsChartRequestFormProperties>({
			chartId: new FormControl<number | null | undefined>(undefined),
			linkingMode: new FormControl<CreateSheetsChartRequestLinkingMode | null | undefined>(undefined),
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Replaces all instances of text matching a criteria with replace text. */
	export interface ReplaceAllTextRequest {

		/** A criteria that matches a specific string of text in a shape or table. */
		containsText?: SubstringMatchCriteria;

		/** If non-empty, limits the matches to page elements only on the given pages. Returns a 400 bad request error if given the page object ID of a notes master, or if a page with that object ID doesn't exist in the presentation. */
		pageObjectIds?: Array<string>;

		/** The text that will replace the matched text. */
		replaceText?: string | null;
	}

	/** Replaces all instances of text matching a criteria with replace text. */
	export interface ReplaceAllTextRequestFormProperties {

		/** The text that will replace the matched text. */
		replaceText: FormControl<string | null | undefined>,
	}
	export function CreateReplaceAllTextRequestFormGroup() {
		return new FormGroup<ReplaceAllTextRequestFormProperties>({
			replaceText: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image. */
	export interface ReplaceImageRequest {

		/** The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request. */
		imageObjectId?: string | null;

		/** The replacement method. */
		imageReplaceMethod?: ReplaceAllShapesWithImageRequestImageReplaceMethod | null;

		/** The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URL can't surpass 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field. */
		url?: string | null;
	}

	/** Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image. */
	export interface ReplaceImageRequestFormProperties {

		/** The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request. */
		imageObjectId: FormControl<string | null | undefined>,

		/** The replacement method. */
		imageReplaceMethod: FormControl<ReplaceAllShapesWithImageRequestImageReplaceMethod | null | undefined>,

		/** The image URL. The image is fetched once at insertion time and a copy is stored for display inside the presentation. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URL can't surpass 2 KB in length. The URL is saved with the image, and exposed through the Image.source_url field. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateReplaceImageRequestFormGroup() {
		return new FormGroup<ReplaceImageRequestFormProperties>({
			imageObjectId: new FormControl<string | null | undefined>(undefined),
			imageReplaceMethod: new FormControl<ReplaceAllShapesWithImageRequestImageReplaceMethod | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Reroutes a line such that it's connected at the two closest connection sites on the connected page elements. */
	export interface RerouteLineRequest {

		/** The object ID of the line to reroute. Only a line with a category indicating it is a "connector" can be rerouted. The start and end connections of the line must be on different page elements. */
		objectId?: string | null;
	}

	/** Reroutes a line such that it's connected at the two closest connection sites on the connected page elements. */
	export interface RerouteLineRequestFormProperties {

		/** The object ID of the line to reroute. Only a line with a category indicating it is a "connector" can be rerouted. The start and end connections of the line must be on different page elements. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateRerouteLineRequestFormGroup() {
		return new FormGroup<RerouteLineRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Ungroups objects, such as groups. */
	export interface UngroupObjectsRequest {

		/** The object IDs of the objects to ungroup. Only groups that are not inside other groups can be ungrouped. All the groups should be on the same page. The group itself is deleted. The visual sizes and positions of all the children are preserved. */
		objectIds?: Array<string>;
	}

	/** Ungroups objects, such as groups. */
	export interface UngroupObjectsRequestFormProperties {
	}
	export function CreateUngroupObjectsRequestFormGroup() {
		return new FormGroup<UngroupObjectsRequestFormProperties>({
		});

	}


	/** Unmerges cells in a Table. */
	export interface UnmergeTableCellsRequest {

		/** The object ID of the table. */
		objectId?: string | null;

		/** A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ] */
		tableRange?: TableRange;
	}

	/** Unmerges cells in a Table. */
	export interface UnmergeTableCellsRequestFormProperties {

		/** The object ID of the table. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUnmergeTableCellsRequestFormGroup() {
		return new FormGroup<UnmergeTableCellsRequestFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update the properties of an Image. */
	export interface UpdateImagePropertiesRequest {

		/** The fields that should be updated. At least one field must be specified. The root `imageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the image outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields?: string | null;

		/** The properties of the Image. */
		imageProperties?: ImageProperties;

		/** The object ID of the image the updates are applied to. */
		objectId?: string | null;
	}

	/** Update the properties of an Image. */
	export interface UpdateImagePropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `imageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the image outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the image the updates are applied to. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateImagePropertiesRequestFormGroup() {
		return new FormGroup<UpdateImagePropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the Image. */
	export interface ImageProperties {

		/**
		 * The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
		 * Type: float
		 */
		brightness?: number | null;

		/**
		 * The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
		 * Type: float
		 */
		contrast?: number | null;

		/** The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped. After cropping, the content in the crop rectangle will be stretched to fit its container. */
		cropProperties?: CropProperties;

		/** A hypertext link. */
		link?: Link;

		/** The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind. */
		outline?: Outline;

		/** A recolor effect applied on an image. */
		recolor?: Recolor;

		/** The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind. */
		shadow?: Shadow;

		/**
		 * The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.
		 * Type: float
		 */
		transparency?: number | null;
	}

	/** The properties of the Image. */
	export interface ImagePropertiesFormProperties {

		/**
		 * The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
		 * Type: float
		 */
		brightness: FormControl<number | null | undefined>,

		/**
		 * The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect. This property is read-only.
		 * Type: float
		 */
		contrast: FormControl<number | null | undefined>,

		/**
		 * The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means completely transparent. This property is read-only.
		 * Type: float
		 */
		transparency: FormControl<number | null | undefined>,
	}
	export function CreateImagePropertiesFormGroup() {
		return new FormGroup<ImagePropertiesFormProperties>({
			brightness: new FormControl<number | null | undefined>(undefined),
			contrast: new FormControl<number | null | undefined>(undefined),
			transparency: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped. After cropping, the content in the crop rectangle will be stretched to fit its container. */
	export interface CropProperties {

		/**
		 * The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.
		 * Type: float
		 */
		angle?: number | null;

		/**
		 * The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.
		 * Type: float
		 */
		bottomOffset?: number | null;

		/**
		 * The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.
		 * Type: float
		 */
		leftOffset?: number | null;

		/**
		 * The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.
		 * Type: float
		 */
		rightOffset?: number | null;

		/**
		 * The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.
		 * Type: float
		 */
		topOffset?: number | null;
	}

	/** The crop properties of an object enclosed in a container. For example, an Image. The crop properties is represented by the offsets of four edges which define a crop rectangle. The offsets are measured in percentage from the corresponding edges of the object's original bounding rectangle towards inside, relative to the object's original dimensions. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the object's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the object's original bounding rectangle. - If the left edge of the crop rectangle is on the right side of its right edge, the object will be flipped horizontally. - If the top edge of the crop rectangle is below its bottom edge, the object will be flipped vertically. - If all offsets and rotation angle is 0, the object is not cropped. After cropping, the content in the crop rectangle will be stretched to fit its container. */
	export interface CropPropertiesFormProperties {

		/**
		 * The rotation angle of the crop window around its center, in radians. Rotation angle is applied after the offset.
		 * Type: float
		 */
		angle: FormControl<number | null | undefined>,

		/**
		 * The offset specifies the bottom edge of the crop rectangle that is located above the original bounding rectangle bottom edge, relative to the object's original height.
		 * Type: float
		 */
		bottomOffset: FormControl<number | null | undefined>,

		/**
		 * The offset specifies the left edge of the crop rectangle that is located to the right of the original bounding rectangle left edge, relative to the object's original width.
		 * Type: float
		 */
		leftOffset: FormControl<number | null | undefined>,

		/**
		 * The offset specifies the right edge of the crop rectangle that is located to the left of the original bounding rectangle right edge, relative to the object's original width.
		 * Type: float
		 */
		rightOffset: FormControl<number | null | undefined>,

		/**
		 * The offset specifies the top edge of the crop rectangle that is located below the original bounding rectangle top edge, relative to the object's original height.
		 * Type: float
		 */
		topOffset: FormControl<number | null | undefined>,
	}
	export function CreateCropPropertiesFormGroup() {
		return new FormGroup<CropPropertiesFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			bottomOffset: new FormControl<number | null | undefined>(undefined),
			leftOffset: new FormControl<number | null | undefined>(undefined),
			rightOffset: new FormControl<number | null | undefined>(undefined),
			topOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind. */
	export interface Outline {

		/** The dash style of the outline. */
		dashStyle?: OutlineDashStyle | null;

		/** The fill of the outline. */
		outlineFill?: OutlineFill;

		/** The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored. */
		propertyState?: OutlinePropertyState | null;

		/** A magnitude in a single direction in the specified units. */
		weight?: Dimension;
	}

	/** The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind. */
	export interface OutlineFormProperties {

		/** The dash style of the outline. */
		dashStyle: FormControl<OutlineDashStyle | null | undefined>,

		/** The outline property state. Updating the outline on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no outline on a page element, set this field to `NOT_RENDERED`. In this case, any other outline fields set in the same request will be ignored. */
		propertyState: FormControl<OutlinePropertyState | null | undefined>,
	}
	export function CreateOutlineFormGroup() {
		return new FormGroup<OutlineFormProperties>({
			dashStyle: new FormControl<OutlineDashStyle | null | undefined>(undefined),
			propertyState: new FormControl<OutlinePropertyState | null | undefined>(undefined),
		});

	}

	export enum OutlineDashStyle { DASH_STYLE_UNSPECIFIED = 'DASH_STYLE_UNSPECIFIED', SOLID = 'SOLID', DOT = 'DOT', DASH = 'DASH', DASH_DOT = 'DASH_DOT', LONG_DASH = 'LONG_DASH', LONG_DASH_DOT = 'LONG_DASH_DOT' }


	/** The fill of the outline. */
	export interface OutlineFill {

		/** A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists. */
		solidFill?: SolidFill;
	}

	/** The fill of the outline. */
	export interface OutlineFillFormProperties {
	}
	export function CreateOutlineFillFormGroup() {
		return new FormGroup<OutlineFillFormProperties>({
		});

	}


	/** A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists. */
	export interface SolidFill {

		/**
		 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
		 * Type: float
		 */
		alpha?: number | null;

		/** A themeable solid color value. */
		color?: OpaqueColor;
	}

	/** A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists. */
	export interface SolidFillFormProperties {

		/**
		 * The fraction of this `color` that should be applied to the pixel. That is, the final pixel color is defined by the equation: pixel color = alpha * (color) + (1.0 - alpha) * (background color) This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color.
		 * Type: float
		 */
		alpha: FormControl<number | null | undefined>,
	}
	export function CreateSolidFillFormGroup() {
		return new FormGroup<SolidFillFormProperties>({
			alpha: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OutlinePropertyState { RENDERED = 'RENDERED', NOT_RENDERED = 'NOT_RENDERED', INHERIT = 'INHERIT' }


	/** A recolor effect applied on an image. */
	export interface Recolor {

		/** The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only. */
		name?: RecolorName | null;

		/** The recolor effect is represented by a gradient, which is a list of color stops. The colors in the gradient will replace the corresponding colors at the same position in the color palette and apply to the image. This property is read-only. */
		recolorStops?: Array<ColorStop>;
	}

	/** A recolor effect applied on an image. */
	export interface RecolorFormProperties {

		/** The name of the recolor effect. The name is determined from the `recolor_stops` by matching the gradient against the colors in the page's current color scheme. This property is read-only. */
		name: FormControl<RecolorName | null | undefined>,
	}
	export function CreateRecolorFormGroup() {
		return new FormGroup<RecolorFormProperties>({
			name: new FormControl<RecolorName | null | undefined>(undefined),
		});

	}

	export enum RecolorName { NONE = 'NONE', LIGHT1 = 'LIGHT1', LIGHT2 = 'LIGHT2', LIGHT3 = 'LIGHT3', LIGHT4 = 'LIGHT4', LIGHT5 = 'LIGHT5', LIGHT6 = 'LIGHT6', LIGHT7 = 'LIGHT7', LIGHT8 = 'LIGHT8', LIGHT9 = 'LIGHT9', LIGHT10 = 'LIGHT10', DARK1 = 'DARK1', DARK2 = 'DARK2', DARK3 = 'DARK3', DARK4 = 'DARK4', DARK5 = 'DARK5', DARK6 = 'DARK6', DARK7 = 'DARK7', DARK8 = 'DARK8', DARK9 = 'DARK9', DARK10 = 'DARK10', GRAYSCALE = 'GRAYSCALE', NEGATIVE = 'NEGATIVE', SEPIA = 'SEPIA', CUSTOM = 'CUSTOM' }


	/** A color and position in a gradient band. */
	export interface ColorStop {

		/**
		 * The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.
		 * Type: float
		 */
		alpha?: number | null;

		/** A themeable solid color value. */
		color?: OpaqueColor;

		/**
		 * The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].
		 * Type: float
		 */
		position?: number | null;
	}

	/** A color and position in a gradient band. */
	export interface ColorStopFormProperties {

		/**
		 * The alpha value of this color in the gradient band. Defaults to 1.0, fully opaque.
		 * Type: float
		 */
		alpha: FormControl<number | null | undefined>,

		/**
		 * The relative position of the color stop in the gradient band measured in percentage. The value should be in the interval [0.0, 1.0].
		 * Type: float
		 */
		position: FormControl<number | null | undefined>,
	}
	export function CreateColorStopFormGroup() {
		return new FormGroup<ColorStopFormProperties>({
			alpha: new FormControl<number | null | undefined>(undefined),
			position: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind. */
	export interface Shadow {

		/** The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only. */
		alignment?: ShadowAlignment | null;

		/**
		 * The alpha of the shadow's color, from 0.0 to 1.0.
		 * Type: float
		 */
		alpha?: number | null;

		/** A magnitude in a single direction in the specified units. */
		blurRadius?: Dimension;

		/** A themeable solid color value. */
		color?: OpaqueColor;

		/** The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored. */
		propertyState?: OutlinePropertyState | null;

		/** Whether the shadow should rotate with the shape. This property is read-only. */
		rotateWithShape?: boolean | null;

		/** AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements. */
		transform?: AffineTransform;

		/** The type of the shadow. This property is read-only. */
		type?: ShadowType | null;
	}

	/** The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind. */
	export interface ShadowFormProperties {

		/** The alignment point of the shadow, that sets the origin for translate, scale and skew of the shadow. This property is read-only. */
		alignment: FormControl<ShadowAlignment | null | undefined>,

		/**
		 * The alpha of the shadow's color, from 0.0 to 1.0.
		 * Type: float
		 */
		alpha: FormControl<number | null | undefined>,

		/** The shadow property state. Updating the shadow on a page element will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no shadow on a page element, set this field to `NOT_RENDERED`. In this case, any other shadow fields set in the same request will be ignored. */
		propertyState: FormControl<OutlinePropertyState | null | undefined>,

		/** Whether the shadow should rotate with the shape. This property is read-only. */
		rotateWithShape: FormControl<boolean | null | undefined>,

		/** The type of the shadow. This property is read-only. */
		type: FormControl<ShadowType | null | undefined>,
	}
	export function CreateShadowFormGroup() {
		return new FormGroup<ShadowFormProperties>({
			alignment: new FormControl<ShadowAlignment | null | undefined>(undefined),
			alpha: new FormControl<number | null | undefined>(undefined),
			propertyState: new FormControl<OutlinePropertyState | null | undefined>(undefined),
			rotateWithShape: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<ShadowType | null | undefined>(undefined),
		});

	}

	export enum ShadowAlignment { RECTANGLE_POSITION_UNSPECIFIED = 'RECTANGLE_POSITION_UNSPECIFIED', TOP_LEFT = 'TOP_LEFT', TOP_CENTER = 'TOP_CENTER', TOP_RIGHT = 'TOP_RIGHT', LEFT_CENTER = 'LEFT_CENTER', CENTER = 'CENTER', RIGHT_CENTER = 'RIGHT_CENTER', BOTTOM_LEFT = 'BOTTOM_LEFT', BOTTOM_CENTER = 'BOTTOM_CENTER', BOTTOM_RIGHT = 'BOTTOM_RIGHT' }

	export enum ShadowType { SHADOW_TYPE_UNSPECIFIED = 'SHADOW_TYPE_UNSPECIFIED', OUTER = 'OUTER' }


	/** Updates the category of a line. */
	export interface UpdateLineCategoryRequest {

		/** The line category to update to. The exact line type is determined based on the category to update to and how it's routed to connect to other page elements. */
		lineCategory?: CreateLineRequestCategory | null;

		/** The object ID of the line the update is applied to. Only a line with a category indicating it is a "connector" can be updated. The line may be rerouted after updating its category. */
		objectId?: string | null;
	}

	/** Updates the category of a line. */
	export interface UpdateLineCategoryRequestFormProperties {

		/** The line category to update to. The exact line type is determined based on the category to update to and how it's routed to connect to other page elements. */
		lineCategory: FormControl<CreateLineRequestCategory | null | undefined>,

		/** The object ID of the line the update is applied to. Only a line with a category indicating it is a "connector" can be updated. The line may be rerouted after updating its category. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLineCategoryRequestFormGroup() {
		return new FormGroup<UpdateLineCategoryRequestFormProperties>({
			lineCategory: new FormControl<CreateLineRequestCategory | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates the properties of a Line. */
	export interface UpdateLinePropertiesRequest {

		/** The fields that should be updated. At least one field must be specified. The root `lineProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the line solid fill color, set `fields` to `"lineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields?: string | null;

		/** The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor. */
		lineProperties?: LineProperties;

		/** The object ID of the line the update is applied to. */
		objectId?: string | null;
	}

	/** Updates the properties of a Line. */
	export interface UpdateLinePropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `lineProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the line solid fill color, set `fields` to `"lineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the line the update is applied to. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateLinePropertiesRequestFormGroup() {
		return new FormGroup<UpdateLinePropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor. */
	export interface LineProperties {

		/** The dash style of the line. */
		dashStyle?: OutlineDashStyle | null;

		/** The style of the arrow at the end of the line. */
		endArrow?: LinePropertiesEndArrow | null;

		/** The properties for one end of a Line connection. */
		endConnection?: LineConnection;

		/** The fill of the line. */
		lineFill?: LineFill;

		/** A hypertext link. */
		link?: Link;

		/** The style of the arrow at the beginning of the line. */
		startArrow?: LinePropertiesEndArrow | null;

		/** The properties for one end of a Line connection. */
		startConnection?: LineConnection;

		/** A magnitude in a single direction in the specified units. */
		weight?: Dimension;
	}

	/** The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor. */
	export interface LinePropertiesFormProperties {

		/** The dash style of the line. */
		dashStyle: FormControl<OutlineDashStyle | null | undefined>,

		/** The style of the arrow at the end of the line. */
		endArrow: FormControl<LinePropertiesEndArrow | null | undefined>,

		/** The style of the arrow at the beginning of the line. */
		startArrow: FormControl<LinePropertiesEndArrow | null | undefined>,
	}
	export function CreateLinePropertiesFormGroup() {
		return new FormGroup<LinePropertiesFormProperties>({
			dashStyle: new FormControl<OutlineDashStyle | null | undefined>(undefined),
			endArrow: new FormControl<LinePropertiesEndArrow | null | undefined>(undefined),
			startArrow: new FormControl<LinePropertiesEndArrow | null | undefined>(undefined),
		});

	}

	export enum LinePropertiesEndArrow { ARROW_STYLE_UNSPECIFIED = 'ARROW_STYLE_UNSPECIFIED', NONE = 'NONE', STEALTH_ARROW = 'STEALTH_ARROW', FILL_ARROW = 'FILL_ARROW', FILL_CIRCLE = 'FILL_CIRCLE', FILL_SQUARE = 'FILL_SQUARE', FILL_DIAMOND = 'FILL_DIAMOND', OPEN_ARROW = 'OPEN_ARROW', OPEN_CIRCLE = 'OPEN_CIRCLE', OPEN_SQUARE = 'OPEN_SQUARE', OPEN_DIAMOND = 'OPEN_DIAMOND' }


	/** The properties for one end of a Line connection. */
	export interface LineConnection {

		/** The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line. */
		connectedObjectId?: string | null;

		/**
		 * The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in the description of the "cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats-Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition] (http://www.ecma-international.org/publications/standards/Ecma-376.htm). The position of each connection site can also be viewed from Slides editor.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connectionSiteIndex?: number | null;
	}

	/** The properties for one end of a Line connection. */
	export interface LineConnectionFormProperties {

		/** The object ID of the connected page element. Some page elements, such as groups, tables, and lines do not have connection sites and therefore cannot be connected to a connector line. */
		connectedObjectId: FormControl<string | null | undefined>,

		/**
		 * The index of the connection site on the connected page element. In most cases, it corresponds to the predefined connection site index from the ECMA-376 standard. More information on those connection sites can be found in the description of the "cnx" attribute in section 20.1.9.9 and Annex H. "Predefined DrawingML Shape and Text Geometries" of "Office Open XML File Formats-Fundamentals and Markup Language Reference", part 1 of [ECMA-376 5th edition] (http://www.ecma-international.org/publications/standards/Ecma-376.htm). The position of each connection site can also be viewed from Slides editor.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		connectionSiteIndex: FormControl<number | null | undefined>,
	}
	export function CreateLineConnectionFormGroup() {
		return new FormGroup<LineConnectionFormProperties>({
			connectedObjectId: new FormControl<string | null | undefined>(undefined),
			connectionSiteIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The fill of the line. */
	export interface LineFill {

		/** A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists. */
		solidFill?: SolidFill;
	}

	/** The fill of the line. */
	export interface LineFillFormProperties {
	}
	export function CreateLineFillFormGroup() {
		return new FormGroup<LineFillFormProperties>({
		});

	}


	/** Updates the alt text title and/or description of a page element. */
	export interface UpdatePageElementAltTextRequest {

		/** The updated alt text description of the page element. If unset the existing value will be maintained. The description is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element. */
		description?: string | null;

		/** The object ID of the page element the updates are applied to. */
		objectId?: string | null;

		/** The updated alt text title of the page element. If unset the existing value will be maintained. The title is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element. */
		title?: string | null;
	}

	/** Updates the alt text title and/or description of a page element. */
	export interface UpdatePageElementAltTextRequestFormProperties {

		/** The updated alt text description of the page element. If unset the existing value will be maintained. The description is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element. */
		description: FormControl<string | null | undefined>,

		/** The object ID of the page element the updates are applied to. */
		objectId: FormControl<string | null | undefined>,

		/** The updated alt text title of the page element. If unset the existing value will be maintained. The title is exposed to screen readers and other accessibility interfaces. Only use human readable values related to the content of the page element. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePageElementAltTextRequestFormGroup() {
		return new FormGroup<UpdatePageElementAltTextRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details. */
	export interface UpdatePageElementTransformRequest {

		/** The apply mode of the transform update. */
		applyMode?: UpdatePageElementTransformRequestApplyMode | null;

		/** The object ID of the page element to update. */
		objectId?: string | null;

		/** AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements. */
		transform?: AffineTransform;
	}

	/** Updates the transform of a page element. Updating the transform of a group will change the absolute transform of the page elements in that group, which can change their visual appearance. See the documentation for PageElement.transform for more details. */
	export interface UpdatePageElementTransformRequestFormProperties {

		/** The apply mode of the transform update. */
		applyMode: FormControl<UpdatePageElementTransformRequestApplyMode | null | undefined>,

		/** The object ID of the page element to update. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePageElementTransformRequestFormGroup() {
		return new FormGroup<UpdatePageElementTransformRequestFormProperties>({
			applyMode: new FormControl<UpdatePageElementTransformRequestApplyMode | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdatePageElementTransformRequestApplyMode { APPLY_MODE_UNSPECIFIED = 'APPLY_MODE_UNSPECIFIED', RELATIVE = 'RELATIVE', ABSOLUTE = 'ABSOLUTE' }


	/** Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it. */
	export interface UpdatePageElementsZOrderRequest {

		/** The Z-order operation to apply on the page elements. When applying the operation on multiple page elements, the relative Z-orders within these page elements before the operation is maintained. */
		operation?: UpdatePageElementsZOrderRequestOperation | null;

		/** The object IDs of the page elements to update. All the page elements must be on the same page and must not be grouped. */
		pageElementObjectIds?: Array<string>;
	}

	/** Updates the Z-order of page elements. Z-order is an ordering of the elements on the page from back to front. The page element in the front may cover the elements that are behind it. */
	export interface UpdatePageElementsZOrderRequestFormProperties {

		/** The Z-order operation to apply on the page elements. When applying the operation on multiple page elements, the relative Z-orders within these page elements before the operation is maintained. */
		operation: FormControl<UpdatePageElementsZOrderRequestOperation | null | undefined>,
	}
	export function CreateUpdatePageElementsZOrderRequestFormGroup() {
		return new FormGroup<UpdatePageElementsZOrderRequestFormProperties>({
			operation: new FormControl<UpdatePageElementsZOrderRequestOperation | null | undefined>(undefined),
		});

	}

	export enum UpdatePageElementsZOrderRequestOperation { Z_ORDER_OPERATION_UNSPECIFIED = 'Z_ORDER_OPERATION_UNSPECIFIED', BRING_TO_FRONT = 'BRING_TO_FRONT', BRING_FORWARD = 'BRING_FORWARD', SEND_BACKWARD = 'SEND_BACKWARD', SEND_TO_BACK = 'SEND_TO_BACK' }


	/** Updates the properties of a Page. */
	export interface UpdatePagePropertiesRequest {

		/** The fields that should be updated. At least one field must be specified. The root `pageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the page background solid fill color, set `fields` to `"pageBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields?: string | null;

		/** The object ID of the page the update is applied to. */
		objectId?: string | null;

		/** The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties. */
		pageProperties?: PageProperties;
	}

	/** Updates the properties of a Page. */
	export interface UpdatePagePropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `pageProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the page background solid fill color, set `fields` to `"pageBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the page the update is applied to. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdatePagePropertiesRequestFormGroup() {
		return new FormGroup<UpdatePagePropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties. */
	export interface PageProperties {

		/** The palette of predefined colors for a page. */
		colorScheme?: ColorScheme;

		/** The page background fill. */
		pageBackgroundFill?: PageBackgroundFill;
	}

	/** The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties. */
	export interface PagePropertiesFormProperties {
	}
	export function CreatePagePropertiesFormGroup() {
		return new FormGroup<PagePropertiesFormProperties>({
		});

	}


	/** The palette of predefined colors for a page. */
	export interface ColorScheme {

		/** The ThemeColorType and corresponding concrete color pairs. */
		colors?: Array<ThemeColorPair>;
	}

	/** The palette of predefined colors for a page. */
	export interface ColorSchemeFormProperties {
	}
	export function CreateColorSchemeFormGroup() {
		return new FormGroup<ColorSchemeFormProperties>({
		});

	}


	/** A pair mapping a theme color type to the concrete color it represents. */
	export interface ThemeColorPair {

		/** An RGB color. */
		color?: RgbColor;

		/** The type of the theme color. */
		type?: OpaqueColorThemeColor | null;
	}

	/** A pair mapping a theme color type to the concrete color it represents. */
	export interface ThemeColorPairFormProperties {

		/** The type of the theme color. */
		type: FormControl<OpaqueColorThemeColor | null | undefined>,
	}
	export function CreateThemeColorPairFormGroup() {
		return new FormGroup<ThemeColorPairFormProperties>({
			type: new FormControl<OpaqueColorThemeColor | null | undefined>(undefined),
		});

	}


	/** The page background fill. */
	export interface PageBackgroundFill {

		/** The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored. */
		propertyState?: OutlinePropertyState | null;

		/** A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists. */
		solidFill?: SolidFill;

		/** The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container. */
		stretchedPictureFill?: StretchedPictureFill;
	}

	/** The page background fill. */
	export interface PageBackgroundFillFormProperties {

		/** The background fill property state. Updating the fill on a page will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a page, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored. */
		propertyState: FormControl<OutlinePropertyState | null | undefined>,
	}
	export function CreatePageBackgroundFillFormGroup() {
		return new FormGroup<PageBackgroundFillFormProperties>({
			propertyState: new FormControl<OutlinePropertyState | null | undefined>(undefined),
		});

	}


	/** The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container. */
	export interface StretchedPictureFill {

		/** Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. */
		contentUrl?: string | null;

		/** A width and height. */
		size?: Size;
	}

	/** The stretched picture fill. The page or page element is filled entirely with the specified picture. The picture is stretched to fit its container. */
	export interface StretchedPictureFillFormProperties {

		/** Reading the content_url: An URL to a picture with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the picture as the original requester. Access to the picture may be lost if the presentation's sharing settings change. Writing the content_url: The picture is fetched once at insertion time and a copy is stored for display inside the presentation. Pictures must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URL can be at most 2 kB in length. */
		contentUrl: FormControl<string | null | undefined>,
	}
	export function CreateStretchedPictureFillFormGroup() {
		return new FormGroup<StretchedPictureFillFormProperties>({
			contentUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range. */
	export interface UpdateParagraphStyleRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the paragraph alignment, set `fields` to `"alignment"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields?: string | null;

		/** The object ID of the shape or table with the text to be styled. */
		objectId?: string | null;

		/** Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message. */
		style?: ParagraphStyle;

		/** Specifies a contiguous range of an indexed collection, such as characters in text. */
		textRange?: Range;
	}

	/** Updates the styling for all of the paragraphs within a Shape or Table that overlap with the given text index range. */
	export interface UpdateParagraphStyleRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the paragraph alignment, set `fields` to `"alignment"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the shape or table with the text to be styled. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateParagraphStyleRequestFormGroup() {
		return new FormGroup<UpdateParagraphStyleRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message. */
	export interface ParagraphStyle {

		/** The text alignment for this paragraph. */
		alignment?: ParagraphStyleAlignment | null;

		/** The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited. */
		direction?: ParagraphStyleDirection | null;

		/** A magnitude in a single direction in the specified units. */
		indentEnd?: Dimension;

		/** A magnitude in a single direction in the specified units. */
		indentFirstLine?: Dimension;

		/** A magnitude in a single direction in the specified units. */
		indentStart?: Dimension;

		/**
		 * The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.
		 * Type: float
		 */
		lineSpacing?: number | null;

		/** A magnitude in a single direction in the specified units. */
		spaceAbove?: Dimension;

		/** A magnitude in a single direction in the specified units. */
		spaceBelow?: Dimension;

		/** The spacing mode for the paragraph. */
		spacingMode?: ParagraphStyleSpacingMode | null;
	}

	/** Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message. */
	export interface ParagraphStyleFormProperties {

		/** The text alignment for this paragraph. */
		alignment: FormControl<ParagraphStyleAlignment | null | undefined>,

		/** The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since text direction is not inherited. */
		direction: FormControl<ParagraphStyleDirection | null | undefined>,

		/**
		 * The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.
		 * Type: float
		 */
		lineSpacing: FormControl<number | null | undefined>,

		/** The spacing mode for the paragraph. */
		spacingMode: FormControl<ParagraphStyleSpacingMode | null | undefined>,
	}
	export function CreateParagraphStyleFormGroup() {
		return new FormGroup<ParagraphStyleFormProperties>({
			alignment: new FormControl<ParagraphStyleAlignment | null | undefined>(undefined),
			direction: new FormControl<ParagraphStyleDirection | null | undefined>(undefined),
			lineSpacing: new FormControl<number | null | undefined>(undefined),
			spacingMode: new FormControl<ParagraphStyleSpacingMode | null | undefined>(undefined),
		});

	}

	export enum ParagraphStyleAlignment { ALIGNMENT_UNSPECIFIED = 'ALIGNMENT_UNSPECIFIED', START = 'START', CENTER = 'CENTER', END = 'END', JUSTIFIED = 'JUSTIFIED' }

	export enum ParagraphStyleDirection { TEXT_DIRECTION_UNSPECIFIED = 'TEXT_DIRECTION_UNSPECIFIED', LEFT_TO_RIGHT = 'LEFT_TO_RIGHT', RIGHT_TO_LEFT = 'RIGHT_TO_LEFT' }

	export enum ParagraphStyleSpacingMode { SPACING_MODE_UNSPECIFIED = 'SPACING_MODE_UNSPECIFIED', NEVER_COLLAPSE = 'NEVER_COLLAPSE', COLLAPSE_LISTS = 'COLLAPSE_LISTS' }


	/** Update the properties of a Shape. */
	export interface UpdateShapePropertiesRequest {

		/** The fields that should be updated. At least one field must be specified. The root `shapeProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the shape background solid fill color, set `fields` to `"shapeBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields?: string | null;

		/** The object ID of the shape the updates are applied to. */
		objectId?: string | null;

		/** The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape. */
		shapeProperties?: ShapeProperties;
	}

	/** Update the properties of a Shape. */
	export interface UpdateShapePropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `shapeProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the shape background solid fill color, set `fields` to `"shapeBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the shape the updates are applied to. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateShapePropertiesRequestFormGroup() {
		return new FormGroup<UpdateShapePropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape. */
	export interface ShapeProperties {

		/** The autofit properties of a Shape. */
		autofit?: Autofit;

		/** The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor. */
		contentAlignment?: ShapePropertiesContentAlignment | null;

		/** A hypertext link. */
		link?: Link;

		/** The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind. */
		outline?: Outline;

		/** The shadow properties of a page element. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind. */
		shadow?: Shadow;

		/** The shape background fill. */
		shapeBackgroundFill?: ShapeBackgroundFill;
	}

	/** The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape. */
	export interface ShapePropertiesFormProperties {

		/** The alignment of the content in the shape. If unspecified, the alignment is inherited from a parent placeholder if it exists. If the shape has no parent, the default alignment matches the alignment for new shapes created in the Slides editor. */
		contentAlignment: FormControl<ShapePropertiesContentAlignment | null | undefined>,
	}
	export function CreateShapePropertiesFormGroup() {
		return new FormGroup<ShapePropertiesFormProperties>({
			contentAlignment: new FormControl<ShapePropertiesContentAlignment | null | undefined>(undefined),
		});

	}

	export enum ShapePropertiesContentAlignment { CONTENT_ALIGNMENT_UNSPECIFIED = 'CONTENT_ALIGNMENT_UNSPECIFIED', CONTENT_ALIGNMENT_UNSUPPORTED = 'CONTENT_ALIGNMENT_UNSUPPORTED', TOP = 'TOP', MIDDLE = 'MIDDLE', BOTTOM = 'BOTTOM' }


	/** The shape background fill. */
	export interface ShapeBackgroundFill {

		/** The background fill property state. Updating the fill on a shape will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a shape, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored. */
		propertyState?: OutlinePropertyState | null;

		/** A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists. */
		solidFill?: SolidFill;
	}

	/** The shape background fill. */
	export interface ShapeBackgroundFillFormProperties {

		/** The background fill property state. Updating the fill on a shape will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a shape, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored. */
		propertyState: FormControl<OutlinePropertyState | null | undefined>,
	}
	export function CreateShapeBackgroundFillFormGroup() {
		return new FormGroup<ShapeBackgroundFillFormProperties>({
			propertyState: new FormControl<OutlinePropertyState | null | undefined>(undefined),
		});

	}


	/** Updates the properties of a Slide. */
	export interface UpdateSlidePropertiesRequest {

		/** The fields that should be updated. At least one field must be specified. The root 'slideProperties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update whether a slide is skipped, set `fields` to `"isSkipped"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields?: string | null;

		/** The object ID of the slide the update is applied to. */
		objectId?: string | null;

		/** The properties of Page that are only relevant for pages with page_type SLIDE. */
		slideProperties?: SlideProperties;
	}

	/** Updates the properties of a Slide. */
	export interface UpdateSlidePropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root 'slideProperties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update whether a slide is skipped, set `fields` to `"isSkipped"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the slide the update is applied to. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSlidePropertiesRequestFormGroup() {
		return new FormGroup<UpdateSlidePropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of Page that are only relevant for pages with page_type SLIDE. */
	export interface SlideProperties {

		/** Whether the slide is skipped in the presentation mode. Defaults to false. */
		isSkipped?: boolean | null;

		/** The object ID of the layout that this slide is based on. This property is read-only. */
		layoutObjectId?: string | null;

		/** The object ID of the master that this slide is based on. This property is read-only. */
		masterObjectId?: string | null;

		/** A page in a presentation. */
		notesPage?: Page;
	}

	/** The properties of Page that are only relevant for pages with page_type SLIDE. */
	export interface SlidePropertiesFormProperties {

		/** Whether the slide is skipped in the presentation mode. Defaults to false. */
		isSkipped: FormControl<boolean | null | undefined>,

		/** The object ID of the layout that this slide is based on. This property is read-only. */
		layoutObjectId: FormControl<string | null | undefined>,

		/** The object ID of the master that this slide is based on. This property is read-only. */
		masterObjectId: FormControl<string | null | undefined>,
	}
	export function CreateSlidePropertiesFormGroup() {
		return new FormGroup<SlidePropertiesFormProperties>({
			isSkipped: new FormControl<boolean | null | undefined>(undefined),
			layoutObjectId: new FormControl<string | null | undefined>(undefined),
			masterObjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A page in a presentation. */
	export interface Page {

		/** The properties of Page are only relevant for pages with page_type LAYOUT. */
		layoutProperties?: LayoutProperties;

		/** The properties of Page that are only relevant for pages with page_type MASTER. */
		masterProperties?: MasterProperties;

		/** The properties of Page that are only relevant for pages with page_type NOTES. */
		notesProperties?: NotesProperties;

		/** The object ID for this page. Object IDs used by Page and PageElement share the same namespace. */
		objectId?: string | null;

		/** The page elements rendered on the page. */
		pageElements?: Array<PageElement>;

		/** The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties. */
		pageProperties?: PageProperties;

		/** The type of the page. */
		pageType?: PagePageType | null;

		/** Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes. */
		revisionId?: string | null;

		/** The properties of Page that are only relevant for pages with page_type SLIDE. */
		slideProperties?: SlideProperties;
	}

	/** A page in a presentation. */
	export interface PageFormProperties {

		/** The object ID for this page. Object IDs used by Page and PageElement share the same namespace. */
		objectId: FormControl<string | null | undefined>,

		/** The type of the page. */
		pageType: FormControl<PagePageType | null | undefined>,

		/** Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes. */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreatePageFormGroup() {
		return new FormGroup<PageFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
			pageType: new FormControl<PagePageType | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of Page are only relevant for pages with page_type LAYOUT. */
	export interface LayoutProperties {

		/** The human-readable name of the layout. */
		displayName?: string | null;

		/** The object ID of the master that this layout is based on. */
		masterObjectId?: string | null;

		/** The name of the layout. */
		name?: string | null;
	}

	/** The properties of Page are only relevant for pages with page_type LAYOUT. */
	export interface LayoutPropertiesFormProperties {

		/** The human-readable name of the layout. */
		displayName: FormControl<string | null | undefined>,

		/** The object ID of the master that this layout is based on. */
		masterObjectId: FormControl<string | null | undefined>,

		/** The name of the layout. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLayoutPropertiesFormGroup() {
		return new FormGroup<LayoutPropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			masterObjectId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of Page that are only relevant for pages with page_type MASTER. */
	export interface MasterProperties {

		/** The human-readable name of the master. */
		displayName?: string | null;
	}

	/** The properties of Page that are only relevant for pages with page_type MASTER. */
	export interface MasterPropertiesFormProperties {

		/** The human-readable name of the master. */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateMasterPropertiesFormGroup() {
		return new FormGroup<MasterPropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of Page that are only relevant for pages with page_type NOTES. */
	export interface NotesProperties {

		/** The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID. */
		speakerNotesObjectId?: string | null;
	}

	/** The properties of Page that are only relevant for pages with page_type NOTES. */
	export interface NotesPropertiesFormProperties {

		/** The object ID of the shape on this notes page that contains the speaker notes for the corresponding slide. The actual shape may not always exist on the notes page. Inserting text using this object ID will automatically create the shape. In this case, the actual shape may have different object ID. The `GetPresentation` or `GetPage` action will always return the latest object ID. */
		speakerNotesObjectId: FormControl<string | null | undefined>,
	}
	export function CreateNotesPropertiesFormGroup() {
		return new FormGroup<NotesPropertiesFormProperties>({
			speakerNotesObjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A visual element rendered on a page. */
	export interface PageElement {

		/** The description of the page element. Combined with title to display alt text. The field is not supported for Group elements. */
		description?: string | null;

		/** A PageElement kind representing a joined collection of PageElements. */
		elementGroup?: Group;

		/** A PageElement kind representing an image. */
		image?: Image;

		/** A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector. */
		line?: Line;

		/** The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace. */
		objectId?: string | null;

		/** A PageElement kind representing a generic shape that does not have a more specific classification. */
		shape?: Shape;

		/** A PageElement kind representing a linked chart embedded from Google Sheets. */
		sheetsChart?: SheetsChart;

		/** A width and height. */
		size?: Size;

		/** A PageElement kind representing a table. */
		table?: Table;

		/** The title of the page element. Combined with description to display alt text. The field is not supported for Group elements. */
		title?: string | null;

		/** AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ] to transform source coordinates (x,y) into destination coordinates (x', y') according to: x' x = shear_y scale_y translate_y 1 [ 1 ] After transformation, x' = scale_x * x + shear_x * y + translate_x; y' = scale_y * y + shear_y * x + translate_y; This message is therefore composed of these six matrix elements. */
		transform?: AffineTransform;

		/** A PageElement kind representing a video. */
		video?: Video;

		/** A PageElement kind representing word art. */
		wordArt?: WordArt;
	}

	/** A visual element rendered on a page. */
	export interface PageElementFormProperties {

		/** The description of the page element. Combined with title to display alt text. The field is not supported for Group elements. */
		description: FormControl<string | null | undefined>,

		/** The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace. */
		objectId: FormControl<string | null | undefined>,

		/** The title of the page element. Combined with description to display alt text. The field is not supported for Group elements. */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePageElementFormGroup() {
		return new FormGroup<PageElementFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A PageElement kind representing a joined collection of PageElements. */
	export interface Group {

		/** The collection of elements in the group. The minimum size of a group is 2. */
		children?: Array<PageElement>;
	}

	/** A PageElement kind representing a joined collection of PageElements. */
	export interface GroupFormProperties {
	}
	export function CreateGroupFormGroup() {
		return new FormGroup<GroupFormProperties>({
		});

	}


	/** A PageElement kind representing an image. */
	export interface Image {

		/** An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. */
		contentUrl?: string | null;

		/** The properties of the Image. */
		imageProperties?: ImageProperties;

		/** The placeholder information that uniquely identifies a placeholder shape. */
		placeholder?: Placeholder;

		/** The source URL is the URL used to insert the image. The source URL can be empty. */
		sourceUrl?: string | null;
	}

	/** A PageElement kind representing an image. */
	export interface ImageFormProperties {

		/** An URL to an image with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. */
		contentUrl: FormControl<string | null | undefined>,

		/** The source URL is the URL used to insert the image. The source URL can be empty. */
		sourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			contentUrl: new FormControl<string | null | undefined>(undefined),
			sourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector. */
	export interface Line {

		/** The category of the line. It matches the `category` specified in CreateLineRequest, and can be updated with UpdateLineCategoryRequest. */
		lineCategory?: CreateLineRequestCategory | null;

		/** The properties of the Line. When unset, these fields default to values that match the appearance of new lines created in the Slides editor. */
		lineProperties?: LineProperties;

		/** The type of the line. */
		lineType?: LineLineType | null;
	}

	/** A PageElement kind representing a non-connector line, straight connector, curved connector, or bent connector. */
	export interface LineFormProperties {

		/** The category of the line. It matches the `category` specified in CreateLineRequest, and can be updated with UpdateLineCategoryRequest. */
		lineCategory: FormControl<CreateLineRequestCategory | null | undefined>,

		/** The type of the line. */
		lineType: FormControl<LineLineType | null | undefined>,
	}
	export function CreateLineFormGroup() {
		return new FormGroup<LineFormProperties>({
			lineCategory: new FormControl<CreateLineRequestCategory | null | undefined>(undefined),
			lineType: new FormControl<LineLineType | null | undefined>(undefined),
		});

	}

	export enum LineLineType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', STRAIGHT_CONNECTOR_1 = 'STRAIGHT_CONNECTOR_1', BENT_CONNECTOR_2 = 'BENT_CONNECTOR_2', BENT_CONNECTOR_3 = 'BENT_CONNECTOR_3', BENT_CONNECTOR_4 = 'BENT_CONNECTOR_4', BENT_CONNECTOR_5 = 'BENT_CONNECTOR_5', CURVED_CONNECTOR_2 = 'CURVED_CONNECTOR_2', CURVED_CONNECTOR_3 = 'CURVED_CONNECTOR_3', CURVED_CONNECTOR_4 = 'CURVED_CONNECTOR_4', CURVED_CONNECTOR_5 = 'CURVED_CONNECTOR_5', STRAIGHT_LINE = 'STRAIGHT_LINE' }


	/** A PageElement kind representing a generic shape that does not have a more specific classification. */
	export interface Shape {

		/** The placeholder information that uniquely identifies a placeholder shape. */
		placeholder?: Placeholder;

		/** The properties of a Shape. If the shape is a placeholder shape as determined by the placeholder field, then these properties may be inherited from a parent placeholder shape. Determining the rendered value of the property depends on the corresponding property_state field value. Any text autofit settings on the shape are automatically deactivated by requests that can impact how text fits in the shape. */
		shapeProperties?: ShapeProperties;

		/** The type of the shape. */
		shapeType?: CreateShapeRequestShapeType | null;

		/** The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page. */
		text?: TextContent;
	}

	/** A PageElement kind representing a generic shape that does not have a more specific classification. */
	export interface ShapeFormProperties {

		/** The type of the shape. */
		shapeType: FormControl<CreateShapeRequestShapeType | null | undefined>,
	}
	export function CreateShapeFormGroup() {
		return new FormGroup<ShapeFormProperties>({
			shapeType: new FormControl<CreateShapeRequestShapeType | null | undefined>(undefined),
		});

	}


	/** The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page. */
	export interface TextContent {

		/** The bulleted lists contained in this text, keyed by list ID. */
		lists?: {[id: string]: List };

		/** The text contents broken down into its component parts, including styling information. This property is read-only. */
		textElements?: Array<TextElement>;
	}

	/** The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page. */
	export interface TextContentFormProperties {

		/** The bulleted lists contained in this text, keyed by list ID. */
		lists: FormControl<{[id: string]: List } | null | undefined>,
	}
	export function CreateTextContentFormGroup() {
		return new FormGroup<TextContentFormProperties>({
			lists: new FormControl<{[id: string]: List } | null | undefined>(undefined),
		});

	}


	/** A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID. */
	export interface List {

		/** The ID of the list. */
		listId?: string | null;

		/** A map of nesting levels to the properties of bullets at the associated level. A list has at most nine levels of nesting, so the possible values for the keys of this map are 0 through 8, inclusive. */
		nestingLevel?: {[id: string]: NestingLevel };
	}

	/** A List describes the look and feel of bullets belonging to paragraphs associated with a list. A paragraph that is part of a list has an implicit reference to that list's ID. */
	export interface ListFormProperties {

		/** The ID of the list. */
		listId: FormControl<string | null | undefined>,

		/** A map of nesting levels to the properties of bullets at the associated level. A list has at most nine levels of nesting, so the possible values for the keys of this map are 0 through 8, inclusive. */
		nestingLevel: FormControl<{[id: string]: NestingLevel } | null | undefined>,
	}
	export function CreateListFormGroup() {
		return new FormGroup<ListFormProperties>({
			listId: new FormControl<string | null | undefined>(undefined),
			nestingLevel: new FormControl<{[id: string]: NestingLevel } | null | undefined>(undefined),
		});

	}


	/** Contains properties describing the look and feel of a list bullet at a given level of nesting. */
	export interface NestingLevel {

		/** Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor. */
		bulletStyle?: TextStyle;
	}

	/** Contains properties describing the look and feel of a list bullet at a given level of nesting. */
	export interface NestingLevelFormProperties {
	}
	export function CreateNestingLevelFormGroup() {
		return new FormGroup<NestingLevelFormProperties>({
		});

	}


	/** A TextElement describes the content of a range of indices in the text content of a Shape or TableCell. */
	export interface TextElement {

		/** A TextElement kind that represents auto text. */
		autoText?: AutoText;

		/**
		 * The zero-based end index of this text element, exclusive, in Unicode code units.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endIndex?: number | null;

		/** A TextElement kind that represents the beginning of a new paragraph. */
		paragraphMarker?: ParagraphMarker;

		/**
		 * The zero-based start index of this text element, in Unicode code units.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startIndex?: number | null;

		/** A TextElement kind that represents a run of text that all has the same styling. */
		textRun?: TextRun;
	}

	/** A TextElement describes the content of a range of indices in the text content of a Shape or TableCell. */
	export interface TextElementFormProperties {

		/**
		 * The zero-based end index of this text element, exclusive, in Unicode code units.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		endIndex: FormControl<number | null | undefined>,

		/**
		 * The zero-based start index of this text element, in Unicode code units.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		startIndex: FormControl<number | null | undefined>,
	}
	export function CreateTextElementFormGroup() {
		return new FormGroup<TextElementFormProperties>({
			endIndex: new FormControl<number | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A TextElement kind that represents the beginning of a new paragraph. */
	export interface ParagraphMarker {

		/** Describes the bullet of a paragraph. */
		bullet?: Bullet;

		/** Styles that apply to a whole paragraph. If this text is contained in a shape with a parent placeholder, then these paragraph styles may be inherited from the parent. Which paragraph styles are inherited depend on the nesting level of lists: * A paragraph not in a list will inherit its paragraph style from the paragraph at the 0 nesting level of the list inside the parent placeholder. * A paragraph in a list will inherit its paragraph style from the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited paragraph styles are represented as unset fields in this message. */
		style?: ParagraphStyle;
	}

	/** A TextElement kind that represents the beginning of a new paragraph. */
	export interface ParagraphMarkerFormProperties {
	}
	export function CreateParagraphMarkerFormGroup() {
		return new FormGroup<ParagraphMarkerFormProperties>({
		});

	}


	/** Describes the bullet of a paragraph. */
	export interface Bullet {

		/** Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor. */
		bulletStyle?: TextStyle;

		/** The rendered bullet glyph for this paragraph. */
		glyph?: string | null;

		/** The ID of the list this paragraph belongs to. */
		listId?: string | null;

		/**
		 * The nesting level of this paragraph in the list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nestingLevel?: number | null;
	}

	/** Describes the bullet of a paragraph. */
	export interface BulletFormProperties {

		/** The rendered bullet glyph for this paragraph. */
		glyph: FormControl<string | null | undefined>,

		/** The ID of the list this paragraph belongs to. */
		listId: FormControl<string | null | undefined>,

		/**
		 * The nesting level of this paragraph in the list.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nestingLevel: FormControl<number | null | undefined>,
	}
	export function CreateBulletFormGroup() {
		return new FormGroup<BulletFormProperties>({
			glyph: new FormControl<string | null | undefined>(undefined),
			listId: new FormControl<string | null | undefined>(undefined),
			nestingLevel: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A TextElement kind that represents a run of text that all has the same styling. */
	export interface TextRun {

		/** The text of this run. */
		content?: string | null;

		/** Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor. */
		style?: TextStyle;
	}

	/** A TextElement kind that represents a run of text that all has the same styling. */
	export interface TextRunFormProperties {

		/** The text of this run. */
		content: FormControl<string | null | undefined>,
	}
	export function CreateTextRunFormGroup() {
		return new FormGroup<TextRunFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A PageElement kind representing a linked chart embedded from Google Sheets. */
	export interface SheetsChart {

		/**
		 * The ID of the specific chart in the Google Sheets spreadsheet that is embedded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		chartId?: number | null;

		/** The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. */
		contentUrl?: string | null;

		/** The properties of the SheetsChart. */
		sheetsChartProperties?: SheetsChartProperties;

		/** The ID of the Google Sheets spreadsheet that contains the source chart. */
		spreadsheetId?: string | null;
	}

	/** A PageElement kind representing a linked chart embedded from Google Sheets. */
	export interface SheetsChartFormProperties {

		/**
		 * The ID of the specific chart in the Google Sheets spreadsheet that is embedded.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		chartId: FormControl<number | null | undefined>,

		/** The URL of an image of the embedded chart, with a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. */
		contentUrl: FormControl<string | null | undefined>,

		/** The ID of the Google Sheets spreadsheet that contains the source chart. */
		spreadsheetId: FormControl<string | null | undefined>,
	}
	export function CreateSheetsChartFormGroup() {
		return new FormGroup<SheetsChartFormProperties>({
			chartId: new FormControl<number | null | undefined>(undefined),
			contentUrl: new FormControl<string | null | undefined>(undefined),
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the SheetsChart. */
	export interface SheetsChartProperties {

		/** The properties of the Image. */
		chartImageProperties?: ImageProperties;
	}

	/** The properties of the SheetsChart. */
	export interface SheetsChartPropertiesFormProperties {
	}
	export function CreateSheetsChartPropertiesFormGroup() {
		return new FormGroup<SheetsChartPropertiesFormProperties>({
		});

	}


	/** A PageElement kind representing a table. */
	export interface Table {

		/**
		 * Number of columns in the table.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columns?: number | null;

		/** Properties of horizontal cell borders. A table's horizontal cell borders are represented as a grid. The grid has one more row than the number of rows in the table and the same number of columns as the table. For example, if the table is 3 x 3, its horizontal borders will be represented as a grid with 4 rows and 3 columns. */
		horizontalBorderRows?: Array<TableBorderRow>;

		/**
		 * Number of rows in the table.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rows?: number | null;

		/** Properties of each column. */
		tableColumns?: Array<TableColumnProperties>;

		/** Properties and contents of each row. Cells that span multiple rows are contained in only one of these rows and have a row_span greater than 1. */
		tableRows?: Array<TableRow>;

		/** Properties of vertical cell borders. A table's vertical cell borders are represented as a grid. The grid has the same number of rows as the table and one more column than the number of columns in the table. For example, if the table is 3 x 3, its vertical borders will be represented as a grid with 3 rows and 4 columns. */
		verticalBorderRows?: Array<TableBorderRow>;
	}

	/** A PageElement kind representing a table. */
	export interface TableFormProperties {

		/**
		 * Number of columns in the table.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columns: FormControl<number | null | undefined>,

		/**
		 * Number of rows in the table.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rows: FormControl<number | null | undefined>,
	}
	export function CreateTableFormGroup() {
		return new FormGroup<TableFormProperties>({
			columns: new FormControl<number | null | undefined>(undefined),
			rows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Contents of each border row in a table. */
	export interface TableBorderRow {

		/** Properties of each border cell. When a border's adjacent table cells are merged, it is not included in the response. */
		tableBorderCells?: Array<TableBorderCell>;
	}

	/** Contents of each border row in a table. */
	export interface TableBorderRowFormProperties {
	}
	export function CreateTableBorderRowFormGroup() {
		return new FormGroup<TableBorderRowFormProperties>({
		});

	}


	/** The properties of each border cell. */
	export interface TableBorderCell {

		/** A location of a single table cell within a table. */
		location?: TableCellLocation;

		/** The border styling properties of the TableBorderCell. */
		tableBorderProperties?: TableBorderProperties;
	}

	/** The properties of each border cell. */
	export interface TableBorderCellFormProperties {
	}
	export function CreateTableBorderCellFormGroup() {
		return new FormGroup<TableBorderCellFormProperties>({
		});

	}


	/** The border styling properties of the TableBorderCell. */
	export interface TableBorderProperties {

		/** The dash style of the border. */
		dashStyle?: OutlineDashStyle | null;

		/** The fill of the border. */
		tableBorderFill?: TableBorderFill;

		/** A magnitude in a single direction in the specified units. */
		weight?: Dimension;
	}

	/** The border styling properties of the TableBorderCell. */
	export interface TableBorderPropertiesFormProperties {

		/** The dash style of the border. */
		dashStyle: FormControl<OutlineDashStyle | null | undefined>,
	}
	export function CreateTableBorderPropertiesFormGroup() {
		return new FormGroup<TableBorderPropertiesFormProperties>({
			dashStyle: new FormControl<OutlineDashStyle | null | undefined>(undefined),
		});

	}


	/** The fill of the border. */
	export interface TableBorderFill {

		/** A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists. */
		solidFill?: SolidFill;
	}

	/** The fill of the border. */
	export interface TableBorderFillFormProperties {
	}
	export function CreateTableBorderFillFormGroup() {
		return new FormGroup<TableBorderFillFormProperties>({
		});

	}


	/** Properties of each column in a table. */
	export interface TableColumnProperties {

		/** A magnitude in a single direction in the specified units. */
		columnWidth?: Dimension;
	}

	/** Properties of each column in a table. */
	export interface TableColumnPropertiesFormProperties {
	}
	export function CreateTableColumnPropertiesFormGroup() {
		return new FormGroup<TableColumnPropertiesFormProperties>({
		});

	}


	/** Properties and contents of each row in a table. */
	export interface TableRow {

		/** A magnitude in a single direction in the specified units. */
		rowHeight?: Dimension;

		/** Properties and contents of each cell. Cells that span multiple columns are represented only once with a column_span greater than 1. As a result, the length of this collection does not always match the number of columns of the entire table. */
		tableCells?: Array<TableCell>;

		/** Properties of each row in a table. */
		tableRowProperties?: TableRowProperties;
	}

	/** Properties and contents of each row in a table. */
	export interface TableRowFormProperties {
	}
	export function CreateTableRowFormGroup() {
		return new FormGroup<TableRowFormProperties>({
		});

	}


	/** Properties and contents of each table cell. */
	export interface TableCell {

		/**
		 * Column span of the cell.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columnSpan?: number | null;

		/** A location of a single table cell within a table. */
		location?: TableCellLocation;

		/**
		 * Row span of the cell.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowSpan?: number | null;

		/** The properties of the TableCell. */
		tableCellProperties?: TableCellProperties;

		/** The general text content. The text must reside in a compatible shape (e.g. text box or rectangle) or a table cell in a page. */
		text?: TextContent;
	}

	/** Properties and contents of each table cell. */
	export interface TableCellFormProperties {

		/**
		 * Column span of the cell.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		columnSpan: FormControl<number | null | undefined>,

		/**
		 * Row span of the cell.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rowSpan: FormControl<number | null | undefined>,
	}
	export function CreateTableCellFormGroup() {
		return new FormGroup<TableCellFormProperties>({
			columnSpan: new FormControl<number | null | undefined>(undefined),
			rowSpan: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The properties of the TableCell. */
	export interface TableCellProperties {

		/** The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor. */
		contentAlignment?: ShapePropertiesContentAlignment | null;

		/** The table cell background fill. */
		tableCellBackgroundFill?: TableCellBackgroundFill;
	}

	/** The properties of the TableCell. */
	export interface TableCellPropertiesFormProperties {

		/** The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Slides editor. */
		contentAlignment: FormControl<ShapePropertiesContentAlignment | null | undefined>,
	}
	export function CreateTableCellPropertiesFormGroup() {
		return new FormGroup<TableCellPropertiesFormProperties>({
			contentAlignment: new FormControl<ShapePropertiesContentAlignment | null | undefined>(undefined),
		});

	}


	/** The table cell background fill. */
	export interface TableCellBackgroundFill {

		/** The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored. */
		propertyState?: OutlinePropertyState | null;

		/** A solid color fill. The page or page element is filled entirely with the specified color value. If any field is unset, its value may be inherited from a parent placeholder if it exists. */
		solidFill?: SolidFill;
	}

	/** The table cell background fill. */
	export interface TableCellBackgroundFillFormProperties {

		/** The background fill property state. Updating the fill on a table cell will implicitly update this field to `RENDERED`, unless another value is specified in the same request. To have no fill on a table cell, set this field to `NOT_RENDERED`. In this case, any other fill fields set in the same request will be ignored. */
		propertyState: FormControl<OutlinePropertyState | null | undefined>,
	}
	export function CreateTableCellBackgroundFillFormGroup() {
		return new FormGroup<TableCellBackgroundFillFormProperties>({
			propertyState: new FormControl<OutlinePropertyState | null | undefined>(undefined),
		});

	}


	/** Properties of each row in a table. */
	export interface TableRowProperties {

		/** A magnitude in a single direction in the specified units. */
		minRowHeight?: Dimension;
	}

	/** Properties of each row in a table. */
	export interface TableRowPropertiesFormProperties {
	}
	export function CreateTableRowPropertiesFormGroup() {
		return new FormGroup<TableRowPropertiesFormProperties>({
		});

	}


	/** A PageElement kind representing a video. */
	export interface Video {

		/** The video source's unique identifier for this video. */
		id?: string | null;

		/** The video source. */
		source?: CreateVideoRequestSource | null;

		/** An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change. */
		url?: string | null;

		/** The properties of the Video. */
		videoProperties?: VideoProperties;
	}

	/** A PageElement kind representing a video. */
	export interface VideoFormProperties {

		/** The video source's unique identifier for this video. */
		id: FormControl<string | null | undefined>,

		/** The video source. */
		source: FormControl<CreateVideoRequestSource | null | undefined>,

		/** An URL to a video. The URL is valid as long as the source video exists and sharing settings do not change. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVideoFormGroup() {
		return new FormGroup<VideoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<CreateVideoRequestSource | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The properties of the Video. */
	export interface VideoProperties {

		/** Whether to enable video autoplay when the page is displayed in present mode. Defaults to false. */
		autoPlay?: boolean | null;

		/**
		 * The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played until its end.
		 * Type: uint, 0 to 4,294,967,295
		 */
		end?: number | null;

		/** Whether to mute the audio during video playback. Defaults to false. */
		mute?: boolean | null;

		/** The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind. */
		outline?: Outline;

		/**
		 * The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning.
		 * Type: uint, 0 to 4,294,967,295
		 */
		start?: number | null;
	}

	/** The properties of the Video. */
	export interface VideoPropertiesFormProperties {

		/** Whether to enable video autoplay when the page is displayed in present mode. Defaults to false. */
		autoPlay: FormControl<boolean | null | undefined>,

		/**
		 * The time at which to end playback, measured in seconds from the beginning of the video. If set, the end time should be after the start time. If not set or if you set this to a value that exceeds the video's length, the video will be played until its end.
		 * Type: uint, 0 to 4,294,967,295
		 */
		end: FormControl<number | null | undefined>,

		/** Whether to mute the audio during video playback. Defaults to false. */
		mute: FormControl<boolean | null | undefined>,

		/**
		 * The time at which to start playback, measured in seconds from the beginning of the video. If set, the start time should be before the end time. If you set this to a value that exceeds the video's length in seconds, the video will be played from the last second. If not set, the video will be played from the beginning.
		 * Type: uint, 0 to 4,294,967,295
		 */
		start: FormControl<number | null | undefined>,
	}
	export function CreateVideoPropertiesFormGroup() {
		return new FormGroup<VideoPropertiesFormProperties>({
			autoPlay: new FormControl<boolean | null | undefined>(undefined),
			end: new FormControl<number | null | undefined>(undefined),
			mute: new FormControl<boolean | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A PageElement kind representing word art. */
	export interface WordArt {

		/** The text rendered as word art. */
		renderedText?: string | null;
	}

	/** A PageElement kind representing word art. */
	export interface WordArtFormProperties {

		/** The text rendered as word art. */
		renderedText: FormControl<string | null | undefined>,
	}
	export function CreateWordArtFormGroup() {
		return new FormGroup<WordArtFormProperties>({
			renderedText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PagePageType { SLIDE = 'SLIDE', MASTER = 'MASTER', LAYOUT = 'LAYOUT', NOTES = 'NOTES', NOTES_MASTER = 'NOTES_MASTER' }


	/** Updates the position of slides in the presentation. */
	export interface UpdateSlidesPositionRequest {

		/**
		 * The index where the slides should be inserted, based on the slide arrangement before the move takes place. Must be between zero and the number of slides in the presentation, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		insertionIndex?: number | null;

		/** The IDs of the slides in the presentation that should be moved. The slides in this list must be in existing presentation order, without duplicates. */
		slideObjectIds?: Array<string>;
	}

	/** Updates the position of slides in the presentation. */
	export interface UpdateSlidesPositionRequestFormProperties {

		/**
		 * The index where the slides should be inserted, based on the slide arrangement before the move takes place. Must be between zero and the number of slides in the presentation, inclusive.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		insertionIndex: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSlidesPositionRequestFormGroup() {
		return new FormGroup<UpdateSlidesPositionRequestFormProperties>({
			insertionIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates the properties of the table borders in a Table. */
	export interface UpdateTableBorderPropertiesRequest {

		/** The border position in the table range the updates should apply to. If a border position is not specified, the updates will apply to all borders in the table range. */
		borderPosition?: UpdateTableBorderPropertiesRequestBorderPosition | null;

		/** The fields that should be updated. At least one field must be specified. The root `tableBorderProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table border solid fill color, set `fields` to `"tableBorderFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields?: string | null;

		/** The object ID of the table. */
		objectId?: string | null;

		/** The border styling properties of the TableBorderCell. */
		tableBorderProperties?: TableBorderProperties;

		/** A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ] */
		tableRange?: TableRange;
	}

	/** Updates the properties of the table borders in a Table. */
	export interface UpdateTableBorderPropertiesRequestFormProperties {

		/** The border position in the table range the updates should apply to. If a border position is not specified, the updates will apply to all borders in the table range. */
		borderPosition: FormControl<UpdateTableBorderPropertiesRequestBorderPosition | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `tableBorderProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table border solid fill color, set `fields` to `"tableBorderFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the table. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableBorderPropertiesRequestFormGroup() {
		return new FormGroup<UpdateTableBorderPropertiesRequestFormProperties>({
			borderPosition: new FormControl<UpdateTableBorderPropertiesRequestBorderPosition | null | undefined>(undefined),
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum UpdateTableBorderPropertiesRequestBorderPosition { ALL = 'ALL', BOTTOM = 'BOTTOM', INNER = 'INNER', INNER_HORIZONTAL = 'INNER_HORIZONTAL', INNER_VERTICAL = 'INNER_VERTICAL', LEFT = 'LEFT', OUTER = 'OUTER', RIGHT = 'RIGHT', TOP = 'TOP' }


	/** Update the properties of a TableCell. */
	export interface UpdateTableCellPropertiesRequest {

		/** The fields that should be updated. At least one field must be specified. The root `tableCellProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table cell background solid fill color, set `fields` to `"tableCellBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields?: string | null;

		/** The object ID of the table. */
		objectId?: string | null;

		/** The properties of the TableCell. */
		tableCellProperties?: TableCellProperties;

		/** A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with location = (0, 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ] */
		tableRange?: TableRange;
	}

	/** Update the properties of a TableCell. */
	export interface UpdateTableCellPropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `tableCellProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table cell background solid fill color, set `fields` to `"tableCellBackgroundFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the table. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableCellPropertiesRequestFormGroup() {
		return new FormGroup<UpdateTableCellPropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates the properties of a Table column. */
	export interface UpdateTableColumnPropertiesRequest {

		/** The list of zero-based indices specifying which columns to update. If no indices are provided, all columns in the table will be updated. */
		columnIndices?: Array<number>;

		/** The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"column_width"`. If '"column_width"' is included in the field mask but the property is left unset, the column width will default to 406,400 EMU (32 points). */
		fields?: string | null;

		/** The object ID of the table. */
		objectId?: string | null;

		/** Properties of each column in a table. */
		tableColumnProperties?: TableColumnProperties;
	}

	/** Updates the properties of a Table column. */
	export interface UpdateTableColumnPropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"column_width"`. If '"column_width"' is included in the field mask but the property is left unset, the column width will default to 406,400 EMU (32 points). */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the table. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableColumnPropertiesRequestFormGroup() {
		return new FormGroup<UpdateTableColumnPropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates the properties of a Table row. */
	export interface UpdateTableRowPropertiesRequest {

		/** The fields that should be updated. At least one field must be specified. The root `tableRowProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`. If '"min_row_height"' is included in the field mask but the property is left unset, the minimum row height will default to 0. */
		fields?: string | null;

		/** The object ID of the table. */
		objectId?: string | null;

		/** The list of zero-based indices specifying which rows to update. If no indices are provided, all rows in the table will be updated. */
		rowIndices?: Array<number>;

		/** Properties of each row in a table. */
		tableRowProperties?: TableRowProperties;
	}

	/** Updates the properties of a Table row. */
	export interface UpdateTableRowPropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `tableRowProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`. If '"min_row_height"' is included in the field mask but the property is left unset, the minimum row height will default to 0. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the table. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTableRowPropertiesRequestFormGroup() {
		return new FormGroup<UpdateTableRowPropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update the styling of text in a Shape or Table. */
	export interface UpdateTextStyleRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields?: string | null;

		/** The object ID of the shape or table with the text to be styled. */
		objectId?: string | null;

		/** Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor. */
		style?: TextStyle;

		/** Specifies a contiguous range of an indexed collection, such as characters in text. */
		textRange?: Range;
	}

	/** Update the styling of text in a Shape or Table. */
	export interface UpdateTextStyleRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the shape or table with the text to be styled. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTextStyleRequestFormGroup() {
		return new FormGroup<UpdateTextStyleRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Update the properties of a Video. */
	export interface UpdateVideoPropertiesRequest {

		/** The fields that should be updated. At least one field must be specified. The root `videoProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the video outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields?: string | null;

		/** The object ID of the video the updates are applied to. */
		objectId?: string | null;

		/** The properties of the Video. */
		videoProperties?: VideoProperties;
	}

	/** Update the properties of a Video. */
	export interface UpdateVideoPropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `videoProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the video outline color, set `fields` to `"outline.outlineFill.solidFill.color"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset. */
		fields: FormControl<string | null | undefined>,

		/** The object ID of the video the updates are applied to. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateUpdateVideoPropertiesRequestFormGroup() {
		return new FormGroup<UpdateVideoPropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides control over how write requests are executed. */
	export interface WriteControl {

		/** The revision ID of the presentation required for the write request. If specified and the required revision ID doesn't match the presentation's current revision ID, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied. */
		requiredRevisionId?: string | null;
	}

	/** Provides control over how write requests are executed. */
	export interface WriteControlFormProperties {

		/** The revision ID of the presentation required for the write request. If specified and the required revision ID doesn't match the presentation's current revision ID, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied. */
		requiredRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateWriteControlFormGroup() {
		return new FormGroup<WriteControlFormProperties>({
			requiredRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message from a batch update. */
	export interface BatchUpdatePresentationResponse {

		/** The presentation the updates were applied to. */
		presentationId?: string | null;

		/** The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty. */
		replies?: Array<Response>;

		/** Provides control over how write requests are executed. */
		writeControl?: WriteControl;
	}

	/** Response message from a batch update. */
	export interface BatchUpdatePresentationResponseFormProperties {

		/** The presentation the updates were applied to. */
		presentationId: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdatePresentationResponseFormGroup() {
		return new FormGroup<BatchUpdatePresentationResponseFormProperties>({
			presentationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single response from an update. */
	export interface Response {

		/** The result of creating an image. */
		createImage?: CreateImageResponse;

		/** The result of creating a line. */
		createLine?: CreateLineResponse;

		/** The result of creating a shape. */
		createShape?: CreateShapeResponse;

		/** The result of creating an embedded Google Sheets chart. */
		createSheetsChart?: CreateSheetsChartResponse;

		/** The result of creating a slide. */
		createSlide?: CreateSlideResponse;

		/** The result of creating a table. */
		createTable?: CreateTableResponse;

		/** The result of creating a video. */
		createVideo?: CreateVideoResponse;

		/** The response of duplicating an object. */
		duplicateObject?: DuplicateObjectResponse;

		/** The result of grouping objects. */
		groupObjects?: GroupObjectsResponse;

		/** The result of replacing shapes with an image. */
		replaceAllShapesWithImage?: ReplaceAllShapesWithImageResponse;

		/** The result of replacing shapes with a Google Sheets chart. */
		replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartResponse;

		/** The result of replacing text. */
		replaceAllText?: ReplaceAllTextResponse;
	}

	/** A single response from an update. */
	export interface ResponseFormProperties {
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
		});

	}


	/** The result of creating an image. */
	export interface CreateImageResponse {

		/** The object ID of the created image. */
		objectId?: string | null;
	}

	/** The result of creating an image. */
	export interface CreateImageResponseFormProperties {

		/** The object ID of the created image. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateImageResponseFormGroup() {
		return new FormGroup<CreateImageResponseFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of creating a line. */
	export interface CreateLineResponse {

		/** The object ID of the created line. */
		objectId?: string | null;
	}

	/** The result of creating a line. */
	export interface CreateLineResponseFormProperties {

		/** The object ID of the created line. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateLineResponseFormGroup() {
		return new FormGroup<CreateLineResponseFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of creating a shape. */
	export interface CreateShapeResponse {

		/** The object ID of the created shape. */
		objectId?: string | null;
	}

	/** The result of creating a shape. */
	export interface CreateShapeResponseFormProperties {

		/** The object ID of the created shape. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateShapeResponseFormGroup() {
		return new FormGroup<CreateShapeResponseFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of creating an embedded Google Sheets chart. */
	export interface CreateSheetsChartResponse {

		/** The object ID of the created chart. */
		objectId?: string | null;
	}

	/** The result of creating an embedded Google Sheets chart. */
	export interface CreateSheetsChartResponseFormProperties {

		/** The object ID of the created chart. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSheetsChartResponseFormGroup() {
		return new FormGroup<CreateSheetsChartResponseFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of creating a slide. */
	export interface CreateSlideResponse {

		/** The object ID of the created slide. */
		objectId?: string | null;
	}

	/** The result of creating a slide. */
	export interface CreateSlideResponseFormProperties {

		/** The object ID of the created slide. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateSlideResponseFormGroup() {
		return new FormGroup<CreateSlideResponseFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of creating a table. */
	export interface CreateTableResponse {

		/** The object ID of the created table. */
		objectId?: string | null;
	}

	/** The result of creating a table. */
	export interface CreateTableResponseFormProperties {

		/** The object ID of the created table. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTableResponseFormGroup() {
		return new FormGroup<CreateTableResponseFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of creating a video. */
	export interface CreateVideoResponse {

		/** The object ID of the created video. */
		objectId?: string | null;
	}

	/** The result of creating a video. */
	export interface CreateVideoResponseFormProperties {

		/** The object ID of the created video. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateCreateVideoResponseFormGroup() {
		return new FormGroup<CreateVideoResponseFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response of duplicating an object. */
	export interface DuplicateObjectResponse {

		/** The ID of the new duplicate object. */
		objectId?: string | null;
	}

	/** The response of duplicating an object. */
	export interface DuplicateObjectResponseFormProperties {

		/** The ID of the new duplicate object. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateDuplicateObjectResponseFormGroup() {
		return new FormGroup<DuplicateObjectResponseFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of grouping objects. */
	export interface GroupObjectsResponse {

		/** The object ID of the created group. */
		objectId?: string | null;
	}

	/** The result of grouping objects. */
	export interface GroupObjectsResponseFormProperties {

		/** The object ID of the created group. */
		objectId: FormControl<string | null | undefined>,
	}
	export function CreateGroupObjectsResponseFormGroup() {
		return new FormGroup<GroupObjectsResponseFormProperties>({
			objectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of replacing shapes with an image. */
	export interface ReplaceAllShapesWithImageResponse {

		/**
		 * The number of shapes replaced with images.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		occurrencesChanged?: number | null;
	}

	/** The result of replacing shapes with an image. */
	export interface ReplaceAllShapesWithImageResponseFormProperties {

		/**
		 * The number of shapes replaced with images.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		occurrencesChanged: FormControl<number | null | undefined>,
	}
	export function CreateReplaceAllShapesWithImageResponseFormGroup() {
		return new FormGroup<ReplaceAllShapesWithImageResponseFormProperties>({
			occurrencesChanged: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of replacing shapes with a Google Sheets chart. */
	export interface ReplaceAllShapesWithSheetsChartResponse {

		/**
		 * The number of shapes replaced with charts.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		occurrencesChanged?: number | null;
	}

	/** The result of replacing shapes with a Google Sheets chart. */
	export interface ReplaceAllShapesWithSheetsChartResponseFormProperties {

		/**
		 * The number of shapes replaced with charts.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		occurrencesChanged: FormControl<number | null | undefined>,
	}
	export function CreateReplaceAllShapesWithSheetsChartResponseFormGroup() {
		return new FormGroup<ReplaceAllShapesWithSheetsChartResponseFormProperties>({
			occurrencesChanged: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of replacing text. */
	export interface ReplaceAllTextResponse {

		/**
		 * The number of occurrences changed by replacing all text.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		occurrencesChanged?: number | null;
	}

	/** The result of replacing text. */
	export interface ReplaceAllTextResponseFormProperties {

		/**
		 * The number of occurrences changed by replacing all text.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		occurrencesChanged: FormControl<number | null | undefined>,
	}
	export function CreateReplaceAllTextResponseFormGroup() {
		return new FormGroup<ReplaceAllTextResponseFormProperties>({
			occurrencesChanged: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A Google Slides presentation. */
	export interface Presentation {

		/** The layouts in the presentation. A layout is a template that determines how content is arranged and styled on the slides that inherit from that layout. */
		layouts?: Array<Page>;

		/** The locale of the presentation, as an IETF BCP 47 language tag. */
		locale?: string | null;

		/** The slide masters in the presentation. A slide master contains all common page elements and the common properties for a set of layouts. They serve three purposes: - Placeholder shapes on a master contain the default text styles and shape properties of all placeholder shapes on pages that use that master. - The master page properties define the common page properties inherited by its layouts. - Any other shapes on the master slide appear on all slides using that master, regardless of their layout. */
		masters?: Array<Page>;

		/** A page in a presentation. */
		notesMaster?: Page;

		/** A width and height. */
		pageSize?: Size;

		/** The ID of the presentation. */
		presentationId?: string | null;

		/** Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but a nebulous string. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes. */
		revisionId?: string | null;

		/** The slides in the presentation. A slide inherits properties from a slide layout. */
		slides?: Array<Page>;

		/** The title of the presentation. */
		title?: string | null;
	}

	/** A Google Slides presentation. */
	export interface PresentationFormProperties {

		/** The locale of the presentation, as an IETF BCP 47 language tag. */
		locale: FormControl<string | null | undefined>,

		/** The ID of the presentation. */
		presentationId: FormControl<string | null | undefined>,

		/** Output only. The revision ID of the presentation. Can be used in update requests to assert the presentation revision hasn't changed since the last read operation. Only populated if the user has edit access to the presentation. The revision ID is not a sequential number but a nebulous string. The format of the revision ID may change over time, so it should be treated opaquely. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the presentation has not changed. Conversely, a changed ID (for the same presentation and user) usually means the presentation has been updated. However, a changed ID can also be due to internal factors such as ID format changes. */
		revisionId: FormControl<string | null | undefined>,

		/** The title of the presentation. */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePresentationFormGroup() {
		return new FormGroup<PresentationFormProperties>({
			locale: new FormControl<string | null | undefined>(undefined),
			presentationId: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The thumbnail of a page. */
	export interface Thumbnail {

		/** The content URL of the thumbnail image. The URL to the image has a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. The mime type of the thumbnail image is the same as specified in the `GetPageThumbnailRequest`. */
		contentUrl?: string | null;

		/**
		 * The positive height in pixels of the thumbnail image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height?: number | null;

		/**
		 * The positive width in pixels of the thumbnail image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width?: number | null;
	}

	/** The thumbnail of a page. */
	export interface ThumbnailFormProperties {

		/** The content URL of the thumbnail image. The URL to the image has a default lifetime of 30 minutes. This URL is tagged with the account of the requester. Anyone with the URL effectively accesses the image as the original requester. Access to the image may be lost if the presentation's sharing settings change. The mime type of the thumbnail image is the same as specified in the `GetPageThumbnailRequest`. */
		contentUrl: FormControl<string | null | undefined>,

		/**
		 * The positive height in pixels of the thumbnail image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * The positive width in pixels of the thumbnail image.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateThumbnailFormGroup() {
		return new FormGroup<ThumbnailFormProperties>({
			contentUrl: new FormControl<string | null | undefined>(undefined),
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.
		 * Post v1/presentations
		 * @return {Presentation} Successful response
		 */
		Slides_presentations_create(requestBody: Presentation): Observable<Presentation> {
			return this.http.post<Presentation>(this.baseUri + 'v1/presentations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the latest version of the specified presentation.
		 * Get v1/presentations/{presentationId}
		 * @param {string} presentationId The ID of the presentation to retrieve.
		 * @return {Presentation} Successful response
		 */
		Slides_presentations_get(presentationId: string): Observable<Presentation> {
			return this.http.get<Presentation>(this.baseUri + 'v1/presentations/' + (presentationId == null ? '' : encodeURIComponent(presentationId)), {});
		}

		/**
		 * Gets the latest version of the specified page in the presentation.
		 * Get v1/presentations/{presentationId}/pages/{pageObjectId}
		 * @param {string} presentationId The ID of the presentation to retrieve.
		 * @param {string} pageObjectId The object ID of the page to retrieve.
		 * @return {Page} Successful response
		 */
		Slides_presentations_pages_get(presentationId: string, pageObjectId: string): Observable<Page> {
			return this.http.get<Page>(this.baseUri + 'v1/presentations/' + (presentationId == null ? '' : encodeURIComponent(presentationId)) + '/pages/' + (pageObjectId == null ? '' : encodeURIComponent(pageObjectId)), {});
		}

		/**
		 * Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.
		 * Get v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail
		 * @param {string} presentationId The ID of the presentation to retrieve.
		 * @param {string} pageObjectId The object ID of the page whose thumbnail to retrieve.
		 * @param {Slides_presentations_pages_getThumbnailThumbnailProperties_mimeType} thumbnailProperties_mimeType The optional mime type of the thumbnail image. If you don't specify the mime type, the mime type defaults to PNG.
		 * @param {Slides_presentations_pages_getThumbnailThumbnailProperties_thumbnailSize} thumbnailProperties_thumbnailSize The optional thumbnail image size. If you don't specify the size, the server chooses a default size of the image.
		 * @return {Thumbnail} Successful response
		 */
		Slides_presentations_pages_getThumbnail(presentationId: string, pageObjectId: string, thumbnailProperties_mimeType: Slides_presentations_pages_getThumbnailThumbnailProperties_mimeType | null | undefined, thumbnailProperties_thumbnailSize: Slides_presentations_pages_getThumbnailThumbnailProperties_thumbnailSize | null | undefined): Observable<Thumbnail> {
			return this.http.get<Thumbnail>(this.baseUri + 'v1/presentations/' + (presentationId == null ? '' : encodeURIComponent(presentationId)) + '/pages/' + (pageObjectId == null ? '' : encodeURIComponent(pageObjectId)) + '/thumbnail&thumbnailProperties_mimeType=' + thumbnailProperties_mimeType + '&thumbnailProperties_thumbnailSize=' + thumbnailProperties_thumbnailSize, {});
		}

		/**
		 * Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
		 * Post v1/presentations/{presentationId}:batchUpdate
		 * @param {string} presentationId The presentation to apply the updates to.
		 * @return {BatchUpdatePresentationResponse} Successful response
		 */
		Slides_presentations_batchUpdate(presentationId: string, requestBody: BatchUpdatePresentationRequest): Observable<BatchUpdatePresentationResponse> {
			return this.http.post<BatchUpdatePresentationResponse>(this.baseUri + 'v1/presentations/' + (presentationId == null ? '' : encodeURIComponent(presentationId)) + ':batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Slides_presentations_pages_getThumbnailThumbnailProperties_mimeType { PNG = 'PNG' }

	export enum Slides_presentations_pages_getThumbnailThumbnailProperties_thumbnailSize { THUMBNAIL_SIZE_UNSPECIFIED = 'THUMBNAIL_SIZE_UNSPECIFIED', LARGE = 'LARGE', MEDIUM = 'MEDIUM', SMALL = 'SMALL' }

}
