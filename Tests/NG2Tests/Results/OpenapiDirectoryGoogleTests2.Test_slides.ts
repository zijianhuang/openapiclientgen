import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ]
	 * to transform source coordinates (x,y) into destination coordinates (x', y')
	 * according to:
	 *       x'  x  =   shear_y  scale_y  translate_y  
	 *       1  [ 1 ]
	 * After transformation,
	 *      x' = scale_x * x + shear_x * y + translate_x;
	 *      y' = scale_y * y + shear_y * x + translate_y;
	 * This message is therefore composed of these six matrix elements.
	 */
	export interface AffineTransform {

		/** The X coordinate scaling element. */
		scaleX?: number;

		/** The Y coordinate scaling element. */
		scaleY?: number;

		/** The X coordinate shearing element. */
		shearX?: number;

		/** The Y coordinate shearing element. */
		shearY?: number;

		/** The X coordinate translation element. */
		translateX?: number;

		/** The Y coordinate translation element. */
		translateY?: number;

		/** The units for translate elements. */
		unit?: AffineTransformUnit;
	}

	export enum AffineTransformUnit { UNIT_UNSPECIFIED = 0, EMU = 1, PT = 2 }


	/** A TextElement kind that represents auto text. */
	export interface AutoText {

		/** The rendered content of this auto text, if available. */
		content?: string;

		/**
		 * Represents the styling that can be applied to a TextRun.
		 * If this text is contained in a shape with a parent placeholder, then these text styles may be
		 * inherited from the parent. Which text styles are inherited depend on the
		 * nesting level of lists:
		 * * A text run in a paragraph that is not in a list will inherit its text style
		 * from the the newline character in the paragraph at the 0 nesting level of
		 * the list inside the parent placeholder.
		 * * A text run in a paragraph that is in a list will inherit its text style
		 * from the newline character in the paragraph at its corresponding nesting
		 * level of the list inside the parent placeholder.
		 * Inherited text styles are represented as unset fields in this message. If
		 * text is contained in a shape without a parent placeholder, unsetting these
		 * fields will revert the style to a value matching the defaults in the Slides
		 * editor.
		 */
		style?: TextStyle;

		/** The type of this auto text. */
		type?: AutoTextType;
	}


	/**
	 * Represents the styling that can be applied to a TextRun.
	 * If this text is contained in a shape with a parent placeholder, then these text styles may be
	 * inherited from the parent. Which text styles are inherited depend on the
	 * nesting level of lists:
	 * * A text run in a paragraph that is not in a list will inherit its text style
	 *   from the the newline character in the paragraph at the 0 nesting level of
	 *   the list inside the parent placeholder.
	 * * A text run in a paragraph that is in a list will inherit its text style
	 *   from the newline character in the paragraph at its corresponding nesting
	 *   level of the list inside the parent placeholder.
	 * Inherited text styles are represented as unset fields in this message. If
	 * text is contained in a shape without a parent placeholder, unsetting these
	 * fields will revert the style to a value matching the defaults in the Slides
	 * editor.
	 */
	export interface TextStyle {

		/** A color that can either be fully opaque or fully transparent. */
		backgroundColor?: OptionalColor;

		/**
		 * The text's vertical offset from its normal position.
		 * Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically
		 * rendered in a smaller font size, computed based on the `font_size` field.
		 * The `font_size` itself is not affected by changes in this field.
		 */
		baselineOffset?: TextStyleBaselineOffset;

		/** Whether or not the text is rendered as bold. */
		bold?: boolean;

		/**
		 * The font family of the text.
		 * The font family can be any font from the Font menu in Slides or from
		 * [Google Fonts] (https://fonts.google.com/). If the font name is
		 * unrecognized, the text is rendered in `Arial`.
		 * Some fonts can affect the weight of the text. If an update request
		 * specifies values for both `font_family` and `bold`, the explicitly-set
		 * `bold` value is used.
		 */
		fontFamily?: string;

		/** A magnitude in a single direction in the specified units. */
		fontSize?: Dimension;

		/** A color that can either be fully opaque or fully transparent. */
		foregroundColor?: OptionalColor;

		/** Whether or not the text is italicized. */
		italic?: boolean;

		/** A hypertext link. */
		link?: Link;

		/** Whether or not the text is in small capital letters. */
		smallCaps?: boolean;

		/** Whether or not the text is struck through. */
		strikethrough?: boolean;

		/** Whether or not the text is underlined. */
		underline?: boolean;

		/** Represents a font family and weight used to style a TextRun. */
		weightedFontFamily?: WeightedFontFamily;
	}


	/** A color that can either be fully opaque or fully transparent. */
	export interface OptionalColor {

		/** A themeable solid color value. */
		opaqueColor?: OpaqueColor;
	}


	/** A themeable solid color value. */
	export interface OpaqueColor {

		/** An RGB color. */
		rgbColor?: RgbColor;

		/** An opaque theme color. */
		themeColor?: OpaqueColorThemeColor;
	}


	/** An RGB color. */
	export interface RgbColor {

		/** The blue component of the color, from 0.0 to 1.0. */
		blue?: number;

		/** The green component of the color, from 0.0 to 1.0. */
		green?: number;

		/** The red component of the color, from 0.0 to 1.0. */
		red?: number;
	}

	export enum OpaqueColorThemeColor { THEME_COLOR_TYPE_UNSPECIFIED = 0, DARK1 = 1, LIGHT1 = 2, DARK2 = 3, LIGHT2 = 4, ACCENT1 = 5, ACCENT2 = 6, ACCENT3 = 7, ACCENT4 = 8, ACCENT5 = 9, ACCENT6 = 10, HYPERLINK = 11, FOLLOWED_HYPERLINK = 12, TEXT1 = 13, BACKGROUND1 = 14, TEXT2 = 15, BACKGROUND2 = 16 }

	export enum TextStyleBaselineOffset { BASELINE_OFFSET_UNSPECIFIED = 0, NONE = 1, SUPERSCRIPT = 2, SUBSCRIPT = 3 }


	/** A magnitude in a single direction in the specified units. */
	export interface Dimension {

		/** The magnitude. */
		magnitude?: number;

		/** The units for magnitude. */
		unit?: AffineTransformUnit;
	}


	/** A hypertext link. */
	export interface Link {

		/**
		 * If set, indicates this is a link to the specific page in this
		 * presentation with this ID. A page with this ID may not exist.
		 */
		pageObjectId?: string;

		/**
		 * If set, indicates this is a link to a slide in this presentation,
		 * addressed by its position.
		 */
		relativeLink?: LinkRelativeLink;

		/**
		 * If set, indicates this is a link to the slide at this zero-based index
		 * in the presentation. There may not be a slide at this index.
		 */
		slideIndex?: number;

		/** If set, indicates this is a link to the external web page at this URL. */
		url?: string;
	}

	export enum LinkRelativeLink { RELATIVE_SLIDE_LINK_UNSPECIFIED = 0, NEXT_SLIDE = 1, PREVIOUS_SLIDE = 2, FIRST_SLIDE = 3, LAST_SLIDE = 4 }


	/** Represents a font family and weight used to style a TextRun. */
	export interface WeightedFontFamily {

		/**
		 * The font family of the text.
		 * The font family can be any font from the Font menu in Slides or from
		 * [Google Fonts] (https://fonts.google.com/). If the font name is
		 * unrecognized, the text is rendered in `Arial`.
		 */
		fontFamily?: string;

		/**
		 * The rendered weight of the text. This field can have any value that is a
		 * multiple of `100` between `100` and `900`, inclusive. This range
		 * corresponds to the numerical values described in the CSS 2.1
		 * Specification,
		 * [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness),
		 * with non-numerical values disallowed. Weights greater than or equal to
		 * `700` are considered bold, and weights less than `700`are not bold. The
		 * default value is `400` ("normal").
		 */
		weight?: number;
	}

	export enum AutoTextType { TYPE_UNSPECIFIED = 0, SLIDE_NUMBER = 1 }


	/** Request message for PresentationsService.BatchUpdatePresentation. */
	export interface BatchUpdatePresentationRequest {

		/** A list of updates to apply to the presentation. */
		requests?: Array<Request>;

		/** Provides control over how write requests are executed. */
		writeControl?: WriteControl;
	}


	/** A single kind of update to apply to a presentation. */
	export interface Request {

		/** Creates an image. */
		createImage?: CreateImageRequest;

		/** Creates a line. */
		createLine?: CreateLineRequest;

		/**
		 * Creates bullets for all of the paragraphs that overlap with the given
		 * text index range.
		 * The nesting level of each paragraph will be determined by counting leading
		 * tabs in front of each paragraph. To avoid excess space between the bullet and
		 * the corresponding paragraph, these leading tabs are removed by this request.
		 * This may change the indices of parts of the text.
		 * If the paragraph immediately before paragraphs being updated is in a list
		 * with a matching preset, the paragraphs being updated are added to that
		 * preceding list.
		 */
		createParagraphBullets?: CreateParagraphBulletsRequest;

		/** Creates a new shape. */
		createShape?: CreateShapeRequest;

		/**
		 * Creates an embedded Google Sheets chart.
		 * NOTE: Chart creation requires at least one of the spreadsheets.readonly,
		 * spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
		 */
		createSheetsChart?: CreateSheetsChartRequest;

		/** Creates a new slide. */
		createSlide?: CreateSlideRequest;

		/** Creates a new table. */
		createTable?: CreateTableRequest;

		/**
		 * Creates a video.
		 * NOTE: Creating a video from Google Drive requires that the requesting app
		 * have at least one of the drive, drive.readonly, or drive.file OAuth scopes.
		 */
		createVideo?: CreateVideoRequest;

		/**
		 * Deletes an object, either pages or
		 * page elements, from the
		 * presentation.
		 */
		deleteObject?: DeleteObjectRequest;

		/**
		 * Deletes bullets from all of the paragraphs that overlap with the given text
		 * index range.
		 * The nesting level of each paragraph will be visually preserved by adding
		 * indent to the start of the corresponding paragraph.
		 */
		deleteParagraphBullets?: DeleteParagraphBulletsRequest;

		/** Deletes a column from a table. */
		deleteTableColumn?: DeleteTableColumnRequest;

		/** Deletes a row from a table. */
		deleteTableRow?: DeleteTableRowRequest;

		/** Deletes text from a shape or a table cell. */
		deleteText?: DeleteTextRequest;

		/**
		 * Duplicates a slide or page element.
		 * When duplicating a slide, the duplicate slide will be created immediately
		 * following the specified slide. When duplicating a page element, the duplicate
		 * will be placed on the same page at the same position as the original.
		 */
		duplicateObject?: DuplicateObjectRequest;

		/** Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children. */
		groupObjects?: GroupObjectsRequest;

		/**
		 * Inserts columns into a table.
		 * Other columns in the table will be resized to fit the new column.
		 */
		insertTableColumns?: InsertTableColumnsRequest;

		/** Inserts rows into a table. */
		insertTableRows?: InsertTableRowsRequest;

		/** Inserts text into a shape or a table cell. */
		insertText?: InsertTextRequest;

		/** Merges cells in a Table. */
		mergeTableCells?: MergeTableCellsRequest;

		/**
		 * Refreshes an embedded Google Sheets chart by replacing it with the latest
		 * version of the chart from Google Sheets.
		 * NOTE: Refreshing charts requires  at least one of the spreadsheets.readonly,
		 * spreadsheets, drive.readonly, or drive OAuth scopes.
		 */
		refreshSheetsChart?: RefreshSheetsChartRequest;

		/**
		 * Replaces all shapes that match the given criteria with the provided image.
		 * The images replacing the shapes are rectangular after being inserted into
		 * the presentation and do not take on the forms of the shapes.
		 */
		replaceAllShapesWithImage?: ReplaceAllShapesWithImageRequest;

		/**
		 * Replaces all shapes that match the given criteria with the provided Google
		 * Sheets chart. The chart will be scaled and centered to fit within the bounds
		 * of the original shape.
		 * NOTE: Replacing shapes with a chart requires at least one of the
		 * spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
		 */
		replaceAllShapesWithSheetsChart?: ReplaceAllShapesWithSheetsChartRequest;

		/** Replaces all instances of text matching a criteria with replace text. */
		replaceAllText?: ReplaceAllTextRequest;

		/**
		 * Replaces an existing image with a new image.
		 * Replacing an image removes some image effects from the existing image.
		 */
		replaceImage?: ReplaceImageRequest;

		/**
		 * Reroutes a line such that it's connected at the
		 * two closest connection sites on the connected page elements.
		 */
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

		/**
		 * Updates the alt text title and/or description of a
		 * page element.
		 */
		updatePageElementAltText?: UpdatePageElementAltTextRequest;

		/**
		 * Updates the transform of a page element.
		 * Updating the transform of a group will change the absolute transform of the
		 * page elements in that group, which can change their visual appearance. See
		 * the documentation for PageElement.transform for more details.
		 */
		updatePageElementTransform?: UpdatePageElementTransformRequest;

		/**
		 * Updates the Z-order of page elements. Z-order is an ordering of the elements
		 * on the page from back to front. The page element in the front may cover the
		 * elements that are behind it.
		 */
		updatePageElementsZOrder?: UpdatePageElementsZOrderRequest;

		/** Updates the properties of a Page. */
		updatePageProperties?: UpdatePagePropertiesRequest;

		/**
		 * Updates the styling for all of the paragraphs within a Shape or Table that
		 * overlap with the given text index range.
		 */
		updateParagraphStyle?: UpdateParagraphStyleRequest;

		/** Update the properties of a Shape. */
		updateShapeProperties?: UpdateShapePropertiesRequest;

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

		/**
		 * Update the styling of text in a Shape or
		 * Table.
		 */
		updateTextStyle?: UpdateTextStyleRequest;

		/** Update the properties of a Video. */
		updateVideoProperties?: UpdateVideoPropertiesRequest;
	}


	/** Creates an image. */
	export interface CreateImageRequest {

		/**
		 * Common properties for a page element.
		 * Note: When you initially create a
		 * PageElement, the API may modify
		 * the values of both `size` and `transform`, but the
		 * visual size will be unchanged.
		 */
		elementProperties?: PageElementProperties;

		/**
		 * A user-supplied object ID.
		 * If you specify an ID, it must be unique among all pages and page elements
		 * in the presentation. The ID must start with an alphanumeric character or an
		 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
		 * may include those as well as a hyphen or colon (matches regex
		 * `[a-zA-Z0-9_-:]`).
		 * The length of the ID must not be less than 5 or greater than 50.
		 * If you don't specify an ID, a unique one is generated.
		 */
		objectId?: string;

		/**
		 * The image URL.
		 * The image is fetched once at insertion time and a copy is stored for
		 * display inside the presentation. Images must be less than 50MB in size,
		 * cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF
		 * format.
		 * The provided URL can be at most 2 kB in length. The URL itself is saved
		 * with the image, and exposed via the Image.source_url field.
		 */
		url?: string;
	}


	/**
	 * Common properties for a page element.
	 * Note: When you initially create a
	 * PageElement, the API may modify
	 * the values of both `size` and `transform`, but the
	 * visual size will be unchanged.
	 */
	export interface PageElementProperties {

		/** The object ID of the page where the element is located. */
		pageObjectId?: string;

		/** A width and height. */
		size?: Size;

		/**
		 * AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ]
		 * to transform source coordinates (x,y) into destination coordinates (x', y')
		 * according to:
		 * x'  x  =   shear_y  scale_y  translate_y
		 * 1  [ 1 ]
		 * After transformation,
		 * x' = scale_x * x + shear_x * y + translate_x;
		 * y' = scale_y * y + shear_y * x + translate_y;
		 * This message is therefore composed of these six matrix elements.
		 */
		transform?: AffineTransform;
	}


	/** A width and height. */
	export interface Size {

		/** A magnitude in a single direction in the specified units. */
		height?: Dimension;

		/** A magnitude in a single direction in the specified units. */
		width?: Dimension;
	}


	/** Creates a line. */
	export interface CreateLineRequest {

		/**
		 * The category of the line to be created.
		 * The exact line type created is
		 * determined based on the category and how it's routed to connect to other
		 * page elements.
		 * If you specify both a `category` and a `line_category`, the `category`
		 * takes precedence.
		 * If you do not specify a value for `category`, but specify a value for
		 * `line_category`, then the specified `line_category` value is used.
		 * If you do not specify either, then STRAIGHT is used.
		 */
		category?: CreateLineRequestCategory;

		/**
		 * Common properties for a page element.
		 * Note: When you initially create a
		 * PageElement, the API may modify
		 * the values of both `size` and `transform`, but the
		 * visual size will be unchanged.
		 */
		elementProperties?: PageElementProperties;

		/**
		 * The category of the line to be created.
		 * <b>Deprecated</b>: use `category` instead.
		 * The exact line type created is
		 * determined based on the category and how it's routed to connect to other
		 * page elements.
		 * If you specify both a `category` and a `line_category`, the `category`
		 * takes precedence.
		 */
		lineCategory?: CreateLineRequestLineCategory;

		/**
		 * A user-supplied object ID.
		 * If you specify an ID, it must be unique among all pages and page elements
		 * in the presentation. The ID must start with an alphanumeric character or an
		 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
		 * may include those as well as a hyphen or colon (matches regex
		 * `[a-zA-Z0-9_-:]`).
		 * The length of the ID must not be less than 5 or greater than 50.
		 * If you don't specify an ID, a unique one is generated.
		 */
		objectId?: string;
	}

	export enum CreateLineRequestCategory { LINE_CATEGORY_UNSPECIFIED = 0, STRAIGHT = 1, BENT = 2, CURVED = 3 }

	export enum CreateLineRequestLineCategory { STRAIGHT = 0, BENT = 1, CURVED = 2 }


	/**
	 * Creates bullets for all of the paragraphs that overlap with the given
	 * text index range.
	 * The nesting level of each paragraph will be determined by counting leading
	 * tabs in front of each paragraph. To avoid excess space between the bullet and
	 * the corresponding paragraph, these leading tabs are removed by this request.
	 * This may change the indices of parts of the text.
	 * If the paragraph immediately before paragraphs being updated is in a list
	 * with a matching preset, the paragraphs being updated are added to that
	 * preceding list.
	 */
	export interface CreateParagraphBulletsRequest {

		/**
		 * The kinds of bullet glyphs to be used. Defaults to the
		 * `BULLET_DISC_CIRCLE_SQUARE` preset.
		 */
		bulletPreset?: CreateParagraphBulletsRequestBulletPreset;

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The object ID of the shape or table containing the text to add bullets to. */
		objectId?: string;

		/**
		 * Specifies a contiguous range of an indexed collection, such as characters in
		 * text.
		 */
		textRange?: Range;
	}

	export enum CreateParagraphBulletsRequestBulletPreset { BULLET_DISC_CIRCLE_SQUARE = 0, BULLET_DIAMONDX_ARROW3D_SQUARE = 1, BULLET_CHECKBOX = 2, BULLET_ARROW_DIAMOND_DISC = 3, BULLET_STAR_CIRCLE_SQUARE = 4, BULLET_ARROW3D_CIRCLE_SQUARE = 5, BULLET_LEFTTRIANGLE_DIAMOND_DISC = 6, BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE = 7, BULLET_DIAMOND_CIRCLE_SQUARE = 8, NUMBERED_DIGIT_ALPHA_ROMAN = 9, NUMBERED_DIGIT_ALPHA_ROMAN_PARENS = 10, NUMBERED_DIGIT_NESTED = 11, NUMBERED_UPPERALPHA_ALPHA_ROMAN = 12, NUMBERED_UPPERROMAN_UPPERALPHA_DIGIT = 13, NUMBERED_ZERODIGIT_ALPHA_ROMAN = 14 }


	/** A location of a single table cell within a table. */
	export interface TableCellLocation {

		/** The 0-based column index. */
		columnIndex?: number;

		/** The 0-based row index. */
		rowIndex?: number;
	}


	/**
	 * Specifies a contiguous range of an indexed collection, such as characters in
	 * text.
	 */
	export interface Range {

		/**
		 * The optional zero-based index of the end of the collection.
		 * Required for `FIXED_RANGE` ranges.
		 */
		endIndex?: number;

		/**
		 * The optional zero-based index of the beginning of the collection.
		 * Required for `FIXED_RANGE` and `FROM_START_INDEX` ranges.
		 */
		startIndex?: number;

		/** The type of range. */
		type?: RangeType;
	}

	export enum RangeType { RANGE_TYPE_UNSPECIFIED = 0, FIXED_RANGE = 1, FROM_START_INDEX = 2, ALL = 3 }


	/** Creates a new shape. */
	export interface CreateShapeRequest {

		/**
		 * Common properties for a page element.
		 * Note: When you initially create a
		 * PageElement, the API may modify
		 * the values of both `size` and `transform`, but the
		 * visual size will be unchanged.
		 */
		elementProperties?: PageElementProperties;

		/**
		 * A user-supplied object ID.
		 * If you specify an ID, it must be unique among all pages and page elements
		 * in the presentation. The ID must start with an alphanumeric character or an
		 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
		 * may include those as well as a hyphen or colon (matches regex
		 * `[a-zA-Z0-9_-:]`).
		 * The length of the ID must not be less than 5 or greater than 50.
		 * If empty, a unique identifier will be generated.
		 */
		objectId?: string;

		/** The shape type. */
		shapeType?: CreateShapeRequestShapeType;
	}

	export enum CreateShapeRequestShapeType { TYPE_UNSPECIFIED = 0, TEXT_BOX = 1, RECTANGLE = 2, ROUND_RECTANGLE = 3, ELLIPSE = 4, ARC = 5, BENT_ARROW = 6, BENT_UP_ARROW = 7, BEVEL = 8, BLOCK_ARC = 9, BRACE_PAIR = 10, BRACKET_PAIR = 11, CAN = 12, CHEVRON = 13, CHORD = 14, CLOUD = 15, CORNER = 16, CUBE = 17, CURVED_DOWN_ARROW = 18, CURVED_LEFT_ARROW = 19, CURVED_RIGHT_ARROW = 20, CURVED_UP_ARROW = 21, DECAGON = 22, DIAGONAL_STRIPE = 23, DIAMOND = 24, DODECAGON = 25, DONUT = 26, DOUBLE_WAVE = 27, DOWN_ARROW = 28, DOWN_ARROW_CALLOUT = 29, FOLDED_CORNER = 30, FRAME = 31, HALF_FRAME = 32, HEART = 33, HEPTAGON = 34, HEXAGON = 35, HOME_PLATE = 36, HORIZONTAL_SCROLL = 37, IRREGULAR_SEAL_1 = 38, IRREGULAR_SEAL_2 = 39, LEFT_ARROW = 40, LEFT_ARROW_CALLOUT = 41, LEFT_BRACE = 42, LEFT_BRACKET = 43, LEFT_RIGHT_ARROW = 44, LEFT_RIGHT_ARROW_CALLOUT = 45, LEFT_RIGHT_UP_ARROW = 46, LEFT_UP_ARROW = 47, LIGHTNING_BOLT = 48, MATH_DIVIDE = 49, MATH_EQUAL = 50, MATH_MINUS = 51, MATH_MULTIPLY = 52, MATH_NOT_EQUAL = 53, MATH_PLUS = 54, MOON = 55, NO_SMOKING = 56, NOTCHED_RIGHT_ARROW = 57, OCTAGON = 58, PARALLELOGRAM = 59, PENTAGON = 60, PIE = 61, PLAQUE = 62, PLUS = 63, QUAD_ARROW = 64, QUAD_ARROW_CALLOUT = 65, RIBBON = 66, RIBBON_2 = 67, RIGHT_ARROW = 68, RIGHT_ARROW_CALLOUT = 69, RIGHT_BRACE = 70, RIGHT_BRACKET = 71, ROUND_1_RECTANGLE = 72, ROUND_2_DIAGONAL_RECTANGLE = 73, ROUND_2_SAME_RECTANGLE = 74, RIGHT_TRIANGLE = 75, SMILEY_FACE = 76, SNIP_1_RECTANGLE = 77, SNIP_2_DIAGONAL_RECTANGLE = 78, SNIP_2_SAME_RECTANGLE = 79, SNIP_ROUND_RECTANGLE = 80, STAR_10 = 81, STAR_12 = 82, STAR_16 = 83, STAR_24 = 84, STAR_32 = 85, STAR_4 = 86, STAR_5 = 87, STAR_6 = 88, STAR_7 = 89, STAR_8 = 90, STRIPED_RIGHT_ARROW = 91, SUN = 92, TRAPEZOID = 93, TRIANGLE = 94, UP_ARROW = 95, UP_ARROW_CALLOUT = 96, UP_DOWN_ARROW = 97, UTURN_ARROW = 98, VERTICAL_SCROLL = 99, WAVE = 100, WEDGE_ELLIPSE_CALLOUT = 101, WEDGE_RECTANGLE_CALLOUT = 102, WEDGE_ROUND_RECTANGLE_CALLOUT = 103, FLOW_CHART_ALTERNATE_PROCESS = 104, FLOW_CHART_COLLATE = 105, FLOW_CHART_CONNECTOR = 106, FLOW_CHART_DECISION = 107, FLOW_CHART_DELAY = 108, FLOW_CHART_DISPLAY = 109, FLOW_CHART_DOCUMENT = 110, FLOW_CHART_EXTRACT = 111, FLOW_CHART_INPUT_OUTPUT = 112, FLOW_CHART_INTERNAL_STORAGE = 113, FLOW_CHART_MAGNETIC_DISK = 114, FLOW_CHART_MAGNETIC_DRUM = 115, FLOW_CHART_MAGNETIC_TAPE = 116, FLOW_CHART_MANUAL_INPUT = 117, FLOW_CHART_MANUAL_OPERATION = 118, FLOW_CHART_MERGE = 119, FLOW_CHART_MULTIDOCUMENT = 120, FLOW_CHART_OFFLINE_STORAGE = 121, FLOW_CHART_OFFPAGE_CONNECTOR = 122, FLOW_CHART_ONLINE_STORAGE = 123, FLOW_CHART_OR = 124, FLOW_CHART_PREDEFINED_PROCESS = 125, FLOW_CHART_PREPARATION = 126, FLOW_CHART_PROCESS = 127, FLOW_CHART_PUNCHED_CARD = 128, FLOW_CHART_PUNCHED_TAPE = 129, FLOW_CHART_SORT = 130, FLOW_CHART_SUMMING_JUNCTION = 131, FLOW_CHART_TERMINATOR = 132, ARROW_EAST = 133, ARROW_NORTH_EAST = 134, ARROW_NORTH = 135, SPEECH = 136, STARBURST = 137, TEARDROP = 138, ELLIPSE_RIBBON = 139, ELLIPSE_RIBBON_2 = 140, CLOUD_CALLOUT = 141, CUSTOM = 142 }


	/**
	 * Creates an embedded Google Sheets chart.
	 * NOTE: Chart creation requires at least one of the spreadsheets.readonly,
	 * spreadsheets, drive.readonly, drive.file, or drive OAuth scopes.
	 */
	export interface CreateSheetsChartRequest {

		/** The ID of the specific chart in the Google Sheets spreadsheet. */
		chartId?: number;

		/**
		 * Common properties for a page element.
		 * Note: When you initially create a
		 * PageElement, the API may modify
		 * the values of both `size` and `transform`, but the
		 * visual size will be unchanged.
		 */
		elementProperties?: PageElementProperties;

		/**
		 * The mode with which the chart is linked to the source spreadsheet. When
		 * not specified, the chart will be an image that is not linked.
		 */
		linkingMode?: CreateSheetsChartRequestLinkingMode;

		/**
		 * A user-supplied object ID.
		 * If specified, the ID must be unique among all pages and page elements in
		 * the presentation. The ID should start with a word character [a-zA-Z0-9_]
		 * and then followed by any number of the following characters [a-zA-Z0-9_-:].
		 * The length of the ID should not be less than 5 or greater than 50.
		 * If empty, a unique identifier will be generated.
		 */
		objectId?: string;

		/** The ID of the Google Sheets spreadsheet that contains the chart. */
		spreadsheetId?: string;
	}

	export enum CreateSheetsChartRequestLinkingMode { NOT_LINKED_IMAGE = 0, LINKED = 1 }


	/** Creates a new slide. */
	export interface CreateSlideRequest {

		/**
		 * The optional zero-based index indicating where to insert the slides.
		 * If you don't specify an index, the new slide is created at the end.
		 */
		insertionIndex?: number;

		/**
		 * A user-supplied object ID.
		 * If you specify an ID, it must be unique among all pages and page elements
		 * in the presentation. The ID must start with an alphanumeric character or an
		 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
		 * may include those as well as a hyphen or colon (matches regex
		 * `[a-zA-Z0-9_-:]`).
		 * The length of the ID must not be less than 5 or greater than 50.
		 * If you don't specify an ID, a unique one is generated.
		 */
		objectId?: string;

		/**
		 * An optional list of object ID mappings from the placeholder(s) on the layout to the placeholder(s)
		 * that will be created on the new slide from that specified layout. Can only
		 * be used when `slide_layout_reference` is specified.
		 */
		placeholderIdMappings?: Array<LayoutPlaceholderIdMapping>;

		/**
		 * Slide layout reference. This may reference either:
		 * - A predefined layout
		 * - One of the layouts in the presentation.
		 */
		slideLayoutReference?: LayoutReference;
	}


	/**
	 * The user-specified ID mapping for a placeholder that will be created on a
	 * slide from a specified layout.
	 */
	export interface LayoutPlaceholderIdMapping {

		/** The placeholder information that uniquely identifies a placeholder shape. */
		layoutPlaceholder?: Placeholder;

		/**
		 * The object ID of the placeholder on a layout that will be applied
		 * to a slide.
		 */
		layoutPlaceholderObjectId?: string;

		/**
		 * A user-supplied object ID for the placeholder identified above that to be
		 * created onto a slide.
		 * If you specify an ID, it must be unique among all pages and page elements
		 * in the presentation. The ID must start with an alphanumeric character or an
		 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
		 * may include those as well as a hyphen or colon (matches regex
		 * `[a-zA-Z0-9_-:]`).
		 * The length of the ID must not be less than 5 or greater than 50.
		 * If you don't specify an ID, a unique one is generated.
		 */
		objectId?: string;
	}


	/** The placeholder information that uniquely identifies a placeholder shape. */
	export interface Placeholder {

		/**
		 * The index of the placeholder. If the same placeholder types are present in
		 * the same page, they would have different index values.
		 */
		index?: number;

		/**
		 * The object ID of this shape's parent placeholder.
		 * If unset, the parent placeholder shape does not exist, so the shape does
		 * not inherit properties from any other shape.
		 */
		parentObjectId?: string;

		/** The type of the placeholder. */
		type?: PlaceholderType;
	}

	export enum PlaceholderType { NONE = 0, BODY = 1, CHART = 2, CLIP_ART = 3, CENTERED_TITLE = 4, DIAGRAM = 5, DATE_AND_TIME = 6, FOOTER = 7, HEADER = 8, MEDIA = 9, OBJECT = 10, PICTURE = 11, SLIDE_NUMBER = 12, SUBTITLE = 13, TABLE = 14, TITLE = 15, SLIDE_IMAGE = 16 }


	/**
	 * Slide layout reference. This may reference either:
	 * - A predefined layout
	 * - One of the layouts in the presentation.
	 */
	export interface LayoutReference {

		/** Layout ID: the object ID of one of the layouts in the presentation. */
		layoutId?: string;

		/** Predefined layout. */
		predefinedLayout?: LayoutReferencePredefinedLayout;
	}

	export enum LayoutReferencePredefinedLayout { PREDEFINED_LAYOUT_UNSPECIFIED = 0, BLANK = 1, CAPTION_ONLY = 2, TITLE = 3, TITLE_AND_BODY = 4, TITLE_AND_TWO_COLUMNS = 5, TITLE_ONLY = 6, SECTION_HEADER = 7, SECTION_TITLE_AND_DESCRIPTION = 8, ONE_COLUMN_TEXT = 9, MAIN_POINT = 10, BIG_NUMBER = 11 }


	/** Creates a new table. */
	export interface CreateTableRequest {

		/** Number of columns in the table. */
		columns?: number;

		/**
		 * Common properties for a page element.
		 * Note: When you initially create a
		 * PageElement, the API may modify
		 * the values of both `size` and `transform`, but the
		 * visual size will be unchanged.
		 */
		elementProperties?: PageElementProperties;

		/**
		 * A user-supplied object ID.
		 * If you specify an ID, it must be unique among all pages and page elements
		 * in the presentation. The ID must start with an alphanumeric character or an
		 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
		 * may include those as well as a hyphen or colon (matches regex
		 * `[a-zA-Z0-9_-:]`).
		 * The length of the ID must not be less than 5 or greater than 50.
		 * If you don't specify an ID, a unique one is generated.
		 */
		objectId?: string;

		/** Number of rows in the table. */
		rows?: number;
	}


	/**
	 * Creates a video.
	 * NOTE: Creating a video from Google Drive requires that the requesting app
	 * have at least one of the drive, drive.readonly, or drive.file OAuth scopes.
	 */
	export interface CreateVideoRequest {

		/**
		 * Common properties for a page element.
		 * Note: When you initially create a
		 * PageElement, the API may modify
		 * the values of both `size` and `transform`, but the
		 * visual size will be unchanged.
		 */
		elementProperties?: PageElementProperties;

		/**
		 * The video source's unique identifier for this video.
		 * e.g. For YouTube video https://www.youtube.com/watch?v=7U3axjORYZ0,
		 * the ID is 7U3axjORYZ0. For a Google Drive video
		 * https://drive.google.com/file/d/1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q the ID
		 * is 1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q.
		 */
		id?: string;

		/**
		 * A user-supplied object ID.
		 * If you specify an ID, it must be unique among all pages and page elements
		 * in the presentation. The ID must start with an alphanumeric character or an
		 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
		 * may include those as well as a hyphen or colon (matches regex
		 * `[a-zA-Z0-9_-:]`).
		 * The length of the ID must not be less than 5 or greater than 50.
		 * If you don't specify an ID, a unique one is generated.
		 */
		objectId?: string;

		/** The video source. */
		source?: CreateVideoRequestSource;
	}

	export enum CreateVideoRequestSource { SOURCE_UNSPECIFIED = 0, YOUTUBE = 1, DRIVE = 2 }


	/**
	 * Deletes an object, either pages or
	 * page elements, from the
	 * presentation.
	 */
	export interface DeleteObjectRequest {

		/**
		 * The object ID of the page or page element to delete.
		 * If after a delete operation a group contains
		 * only 1 or no page elements, the group is also deleted.
		 * If a placeholder is deleted on a layout, any empty inheriting shapes are
		 * also deleted.
		 */
		objectId?: string;
	}


	/**
	 * Deletes bullets from all of the paragraphs that overlap with the given text
	 * index range.
	 * The nesting level of each paragraph will be visually preserved by adding
	 * indent to the start of the corresponding paragraph.
	 */
	export interface DeleteParagraphBulletsRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/**
		 * The object ID of the shape or table containing the text to delete bullets
		 * from.
		 */
		objectId?: string;

		/**
		 * Specifies a contiguous range of an indexed collection, such as characters in
		 * text.
		 */
		textRange?: Range;
	}


	/** Deletes a column from a table. */
	export interface DeleteTableColumnRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The table to delete columns from. */
		tableObjectId?: string;
	}


	/** Deletes a row from a table. */
	export interface DeleteTableRowRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The table to delete rows from. */
		tableObjectId?: string;
	}


	/** Deletes text from a shape or a table cell. */
	export interface DeleteTextRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/** The object ID of the shape or table from which the text will be deleted. */
		objectId?: string;

		/**
		 * Specifies a contiguous range of an indexed collection, such as characters in
		 * text.
		 */
		textRange?: Range;
	}


	/**
	 * Duplicates a slide or page element.
	 * When duplicating a slide, the duplicate slide will be created immediately
	 * following the specified slide. When duplicating a page element, the duplicate
	 * will be placed on the same page at the same position as the original.
	 */
	export interface DuplicateObjectRequest {

		/** The ID of the object to duplicate. */
		objectId?: string;

		/**
		 * The object being duplicated may contain other objects, for example when
		 * duplicating a slide or a group page element. This map defines how the IDs
		 * of duplicated objects are generated: the keys are the IDs of the original
		 * objects and its values are the IDs that will be assigned to the
		 * corresponding duplicate object. The ID of the source object's duplicate
		 * may be specified in this map as well, using the same value of the
		 * `object_id` field as a key and the newly desired ID as the value.
		 * All keys must correspond to existing IDs in the presentation. All values
		 * must be unique in the presentation and must start with an alphanumeric
		 * character or an underscore (matches regex `[a-zA-Z0-9_]`); remaining
		 * characters may include those as well as a hyphen or colon (matches regex
		 * `[a-zA-Z0-9_-:]`). The length of the new ID must not be less than 5 or
		 * greater than 50.
		 * If any IDs of source objects are omitted from the map, a new random ID will
		 * be assigned. If the map is empty or unset, all duplicate objects will
		 * receive a new random ID.
		 */
		objectIds?: {[id: string]: string };
	}


	/** Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children. */
	export interface GroupObjectsRequest {

		/**
		 * The object IDs of the objects to group.
		 * Only page elements can be grouped. There should be at least two page
		 * elements on the same page that are not already in another group. Some page
		 * elements, such as videos, tables and placeholder shapes cannot be grouped.
		 */
		childrenObjectIds?: Array<string>;

		/**
		 * A user-supplied object ID for the group to be created.
		 * If you specify an ID, it must be unique among all pages and page elements
		 * in the presentation. The ID must start with an alphanumeric character or an
		 * underscore (matches regex `[a-zA-Z0-9_]`); remaining characters
		 * may include those as well as a hyphen or colon (matches regex
		 * `[a-zA-Z0-9_-:]`).
		 * The length of the ID must not be less than 5 or greater than 50.
		 * If you don't specify an ID, a unique one is generated.
		 */
		groupObjectId?: string;
	}


	/**
	 * Inserts columns into a table.
	 * Other columns in the table will be resized to fit the new column.
	 */
	export interface InsertTableColumnsRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/**
		 * Whether to insert new columns to the right of the reference cell location.
		 * - `True`: insert to the right.
		 * - `False`: insert to the left.
		 */
		insertRight?: boolean;

		/** The number of columns to be inserted. Maximum 20 per request. */
		number?: number;

		/** The table to insert columns into. */
		tableObjectId?: string;
	}


	/** Inserts rows into a table. */
	export interface InsertTableRowsRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/**
		 * Whether to insert new rows below the reference cell location.
		 * - `True`: insert below the cell.
		 * - `False`: insert above the cell.
		 */
		insertBelow?: boolean;

		/** The number of rows to be inserted. Maximum 20 per request. */
		number?: number;

		/** The table to insert rows into. */
		tableObjectId?: string;
	}


	/** Inserts text into a shape or a table cell. */
	export interface InsertTextRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/**
		 * The index where the text will be inserted, in Unicode code units, based
		 * on TextElement indexes.
		 * The index is zero-based and is computed from the start of the string.
		 * The index may be adjusted to prevent insertions inside Unicode grapheme
		 * clusters. In these cases, the text will be inserted immediately after the
		 * grapheme cluster.
		 */
		insertionIndex?: number;

		/** The object ID of the shape or table where the text will be inserted. */
		objectId?: string;

		/**
		 * The text to be inserted.
		 * Inserting a newline character will implicitly create a new
		 * ParagraphMarker at that index.
		 * The paragraph style of the new paragraph will be copied from the paragraph
		 * at the current insertion index, including lists and bullets.
		 * Text styles for inserted text will be determined automatically, generally
		 * preserving the styling of neighboring text. In most cases, the text will be
		 * added to the TextRun that exists at the
		 * insertion index.
		 * Some control characters (U+0000-U+0008, U+000C-U+001F) and characters
		 * from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF)
		 * will be stripped out of the inserted text.
		 */
		text?: string;
	}


	/** Merges cells in a Table. */
	export interface MergeTableCellsRequest {

		/** The object ID of the table. */
		objectId?: string;

		/**
		 * A table range represents a reference to a subset of a table.
		 * It's important to note that the cells specified by a table range do not
		 * necessarily form a rectangle. For example, let's say we have a 3 x 3 table
		 * where all the cells of the last row are merged together. The table looks
		 * like this:
		 * [             ]
		 * A table range with location = (0, 0), row span = 3 and column span = 2
		 * specifies the following cells:
		 * x     x
		 * [ x    x    x ]
		 */
		tableRange?: TableRange;
	}


	/**
	 * A table range represents a reference to a subset of a table.
	 * It's important to note that the cells specified by a table range do not
	 * necessarily form a rectangle. For example, let's say we have a 3 x 3 table
	 * where all the cells of the last row are merged together. The table looks
	 * like this:
	 *               
	 *      [             ]
	 * A table range with location = (0, 0), row span = 3 and column span = 2
	 * specifies the following cells:
	 *       x     x 
	 *      [ x    x    x ]
	 */
	export interface TableRange {

		/** The column span of the table range. */
		columnSpan?: number;

		/** A location of a single table cell within a table. */
		location?: TableCellLocation;

		/** The row span of the table range. */
		rowSpan?: number;
	}


	/**
	 * Refreshes an embedded Google Sheets chart by replacing it with the latest
	 * version of the chart from Google Sheets.
	 * NOTE: Refreshing charts requires  at least one of the spreadsheets.readonly,
	 * spreadsheets, drive.readonly, or drive OAuth scopes.
	 */
	export interface RefreshSheetsChartRequest {

		/** The object ID of the chart to refresh. */
		objectId?: string;
	}


	/**
	 * Replaces all shapes that match the given criteria with the provided image.
	 * The images replacing the shapes are rectangular after being inserted into
	 * the presentation and do not take on the forms of the shapes.
	 */
	export interface ReplaceAllShapesWithImageRequest {

		/** A criteria that matches a specific string of text in a shape or table. */
		containsText?: SubstringMatchCriteria;

		/**
		 * The image replace method.
		 * If you specify both a `replace_method` and an `image_replace_method`, the
		 * `image_replace_method` takes precedence.
		 * If you do not specify a value for `image_replace_method`, but specify a
		 * value for `replace_method`, then the specified `replace_method` value is
		 * used.
		 * If you do not specify either, then CENTER_INSIDE is used.
		 */
		imageReplaceMethod?: ReplaceAllShapesWithImageRequestImageReplaceMethod;

		/**
		 * The image URL.
		 * The image is fetched once at insertion time and a copy is stored for
		 * display inside the presentation. Images must be less than 50MB in size,
		 * cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF
		 * format.
		 * The provided URL can be at most 2 kB in length. The URL itself is saved
		 * with the image, and exposed via the Image.source_url field.
		 */
		imageUrl?: string;

		/**
		 * If non-empty, limits the matches to page elements only on the given pages.
		 * Returns a 400 bad request error if given the page object ID of a
		 * notes page or a
		 * notes master, or if a
		 * page with that object ID doesn't exist in the presentation.
		 */
		pageObjectIds?: Array<string>;

		/**
		 * The replace method.
		 * <b>Deprecated</b>: use `image_replace_method` instead.
		 * If you specify both a `replace_method` and an `image_replace_method`, the
		 * `image_replace_method` takes precedence.
		 */
		replaceMethod?: ReplaceAllShapesWithImageRequestReplaceMethod;
	}


	/** A criteria that matches a specific string of text in a shape or table. */
	export interface SubstringMatchCriteria {

		/**
		 * Indicates whether the search should respect case:
		 * - `True`: the search is case sensitive.
		 * - `False`: the search is case insensitive.
		 */
		matchCase?: boolean;

		/** The text to search for in the shape or table. */
		text?: string;
	}

	export enum ReplaceAllShapesWithImageRequestImageReplaceMethod { IMAGE_REPLACE_METHOD_UNSPECIFIED = 0, CENTER_INSIDE = 1, CENTER_CROP = 2 }

	export enum ReplaceAllShapesWithImageRequestReplaceMethod { CENTER_INSIDE = 0, CENTER_CROP = 1 }


	/**
	 * Replaces all shapes that match the given criteria with the provided Google
	 * Sheets chart. The chart will be scaled and centered to fit within the bounds
	 * of the original shape.
	 * NOTE: Replacing shapes with a chart requires at least one of the
	 * spreadsheets.readonly, spreadsheets, drive.readonly, or drive OAuth scopes.
	 */
	export interface ReplaceAllShapesWithSheetsChartRequest {

		/** The ID of the specific chart in the Google Sheets spreadsheet. */
		chartId?: number;

		/** A criteria that matches a specific string of text in a shape or table. */
		containsText?: SubstringMatchCriteria;

		/**
		 * The mode with which the chart is linked to the source spreadsheet. When
		 * not specified, the chart will be an image that is not linked.
		 */
		linkingMode?: CreateSheetsChartRequestLinkingMode;

		/**
		 * If non-empty, limits the matches to page elements only on the given pages.
		 * Returns a 400 bad request error if given the page object ID of a
		 * notes page or a
		 * notes master, or if a
		 * page with that object ID doesn't exist in the presentation.
		 */
		pageObjectIds?: Array<string>;

		/** The ID of the Google Sheets spreadsheet that contains the chart. */
		spreadsheetId?: string;
	}


	/** Replaces all instances of text matching a criteria with replace text. */
	export interface ReplaceAllTextRequest {

		/** A criteria that matches a specific string of text in a shape or table. */
		containsText?: SubstringMatchCriteria;

		/**
		 * If non-empty, limits the matches to page elements only on the given pages.
		 * Returns a 400 bad request error if given the page object ID of a
		 * notes master,
		 * or if a page with that object ID doesn't exist in the presentation.
		 */
		pageObjectIds?: Array<string>;

		/** The text that will replace the matched text. */
		replaceText?: string;
	}


	/**
	 * Replaces an existing image with a new image.
	 * Replacing an image removes some image effects from the existing image.
	 */
	export interface ReplaceImageRequest {

		/** The ID of the existing image that will be replaced. */
		imageObjectId?: string;

		/** The replacement method. */
		imageReplaceMethod?: ReplaceAllShapesWithImageRequestImageReplaceMethod;

		/**
		 * The image URL.
		 * The image is fetched once at insertion time and a copy is stored for
		 * display inside the presentation. Images must be less than 50MB in size,
		 * cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF
		 * format.
		 * The provided URL can be at most 2 kB in length. The URL itself is saved
		 * with the image, and exposed via the Image.source_url field.
		 */
		url?: string;
	}


	/**
	 * Reroutes a line such that it's connected at the
	 * two closest connection sites on the connected page elements.
	 */
	export interface RerouteLineRequest {

		/**
		 * The object ID of the line to reroute.
		 * Only a line with a category
		 * indicating it is a "connector" can be rerouted. The start and end
		 * connections of the line must be on different page elements.
		 */
		objectId?: string;
	}


	/** Ungroups objects, such as groups. */
	export interface UngroupObjectsRequest {

		/**
		 * The object IDs of the objects to ungroup.
		 * Only groups that are not inside other
		 * groups can be ungrouped. All the groups
		 * should be on the same page. The group itself is deleted. The visual sizes
		 * and positions of all the children are preserved.
		 */
		objectIds?: Array<string>;
	}


	/** Unmerges cells in a Table. */
	export interface UnmergeTableCellsRequest {

		/** The object ID of the table. */
		objectId?: string;

		/**
		 * A table range represents a reference to a subset of a table.
		 * It's important to note that the cells specified by a table range do not
		 * necessarily form a rectangle. For example, let's say we have a 3 x 3 table
		 * where all the cells of the last row are merged together. The table looks
		 * like this:
		 * [             ]
		 * A table range with location = (0, 0), row span = 3 and column span = 2
		 * specifies the following cells:
		 * x     x
		 * [ x    x    x ]
		 */
		tableRange?: TableRange;
	}


	/** Update the properties of an Image. */
	export interface UpdateImagePropertiesRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `imageProperties` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the image outline color, set `fields` to
		 * `"outline.outlineFill.solidFill.color"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string;

		/** The properties of the Image. */
		imageProperties?: ImageProperties;

		/** The object ID of the image the updates are applied to. */
		objectId?: string;
	}


	/** The properties of the Image. */
	export interface ImageProperties {

		/**
		 * The brightness effect of the image. The value should be in the interval
		 * [-1.0, 1.0], where 0 means no effect. This property is read-only.
		 */
		brightness?: number;

		/**
		 * The contrast effect of the image. The value should be in the interval
		 * [-1.0, 1.0], where 0 means no effect. This property is read-only.
		 */
		contrast?: number;

		/**
		 * The crop properties of an object enclosed in a container. For example, an
		 * Image.
		 * The crop properties is represented by the offsets of four edges which define
		 * a crop rectangle. The offsets are measured in percentage from the
		 * corresponding edges of the object's original bounding rectangle towards
		 * inside, relative to the object's original dimensions.
		 * - If the offset is in the interval (0, 1), the corresponding edge of crop
		 * rectangle is positioned inside of the object's original bounding rectangle.
		 * - If the offset is negative or greater than 1, the corresponding edge of crop
		 * rectangle is positioned outside of the object's original bounding rectangle.
		 * - If the left edge of the crop rectangle is on the right side of its right
		 * edge, the object will be flipped horizontally.
		 * - If the top edge of the crop rectangle is below its bottom edge, the object
		 * will be flipped vertically.
		 * - If all offsets and rotation angle is 0, the object is not cropped.
		 * After cropping, the content in the crop rectangle will be stretched to fit
		 * its container.
		 */
		cropProperties?: CropProperties;

		/** A hypertext link. */
		link?: Link;

		/**
		 * The outline of a PageElement.
		 * If these fields are unset, they may be inherited from a parent placeholder
		 * if it exists. If there is no parent, the fields will default to the value
		 * used for new page elements created in the Slides editor, which may depend on
		 * the page element kind.
		 */
		outline?: Outline;

		/** A recolor effect applied on an image. */
		recolor?: Recolor;

		/**
		 * The shadow properties of a page element.
		 * If these fields are unset, they may be inherited from a parent placeholder
		 * if it exists. If there is no parent, the fields will default to the value
		 * used for new page elements created in the Slides editor, which may depend on
		 * the page element kind.
		 */
		shadow?: Shadow;

		/**
		 * The transparency effect of the image. The value should be in the interval
		 * [0.0, 1.0], where 0 means no effect and 1 means completely transparent.
		 * This property is read-only.
		 */
		transparency?: number;
	}


	/**
	 * The crop properties of an object enclosed in a container. For example, an
	 * Image.
	 * The crop properties is represented by the offsets of four edges which define
	 * a crop rectangle. The offsets are measured in percentage from the
	 * corresponding edges of the object's original bounding rectangle towards
	 * inside, relative to the object's original dimensions.
	 * - If the offset is in the interval (0, 1), the corresponding edge of crop
	 * rectangle is positioned inside of the object's original bounding rectangle.
	 * - If the offset is negative or greater than 1, the corresponding edge of crop
	 * rectangle is positioned outside of the object's original bounding rectangle.
	 * - If the left edge of the crop rectangle is on the right side of its right
	 * edge, the object will be flipped horizontally.
	 * - If the top edge of the crop rectangle is below its bottom edge, the object
	 * will be flipped vertically.
	 * - If all offsets and rotation angle is 0, the object is not cropped.
	 * After cropping, the content in the crop rectangle will be stretched to fit
	 * its container.
	 */
	export interface CropProperties {

		/**
		 * The rotation angle of the crop window around its center, in radians.
		 * Rotation angle is applied after the offset.
		 */
		angle?: number;

		/**
		 * The offset specifies the bottom edge of the crop rectangle that is located
		 * above the original bounding rectangle bottom edge, relative to the object's
		 * original height.
		 */
		bottomOffset?: number;

		/**
		 * The offset specifies the left edge of the crop rectangle that is located to
		 * the right of the original bounding rectangle left edge, relative to the
		 * object's original width.
		 */
		leftOffset?: number;

		/**
		 * The offset specifies the right edge of the crop rectangle that is located
		 * to the left of the original bounding rectangle right edge, relative to the
		 * object's original width.
		 */
		rightOffset?: number;

		/**
		 * The offset specifies the top edge of the crop rectangle that is located
		 * below the original bounding rectangle top edge, relative to the object's
		 * original height.
		 */
		topOffset?: number;
	}


	/**
	 * The outline of a PageElement.
	 * If these fields are unset, they may be inherited from a parent placeholder
	 * if it exists. If there is no parent, the fields will default to the value
	 * used for new page elements created in the Slides editor, which may depend on
	 * the page element kind.
	 */
	export interface Outline {

		/** The dash style of the outline. */
		dashStyle?: OutlineDashStyle;

		/** The fill of the outline. */
		outlineFill?: OutlineFill;

		/**
		 * The outline property state.
		 * Updating the outline on a page element will implicitly update this field
		 * to `RENDERED`, unless another value is specified in the same request. To
		 * have no outline on a page element, set this field to `NOT_RENDERED`. In
		 * this case, any other outline fields set in the same request will be
		 * ignored.
		 */
		propertyState?: OutlinePropertyState;

		/** A magnitude in a single direction in the specified units. */
		weight?: Dimension;
	}

	export enum OutlineDashStyle { DASH_STYLE_UNSPECIFIED = 0, SOLID = 1, DOT = 2, DASH = 3, DASH_DOT = 4, LONG_DASH = 5, LONG_DASH_DOT = 6 }


	/** The fill of the outline. */
	export interface OutlineFill {

		/**
		 * A solid color fill. The page or page element is filled entirely with the
		 * specified color value.
		 * If any field is unset, its value may be inherited from a parent placeholder
		 * if it exists.
		 */
		solidFill?: SolidFill;
	}


	/**
	 * A solid color fill. The page or page element is filled entirely with the
	 * specified color value.
	 * If any field is unset, its value may be inherited from a parent placeholder
	 * if it exists.
	 */
	export interface SolidFill {

		/**
		 * The fraction of this `color` that should be applied to the pixel.
		 * That is, the final pixel color is defined by the equation:
		 * pixel color = alpha * (color) + (1.0 - alpha) * (background color)
		 * This means that a value of 1.0 corresponds to a solid color, whereas
		 * a value of 0.0 corresponds to a completely transparent color.
		 */
		alpha?: number;

		/** A themeable solid color value. */
		color?: OpaqueColor;
	}

	export enum OutlinePropertyState { RENDERED = 0, NOT_RENDERED = 1, INHERIT = 2 }


	/** A recolor effect applied on an image. */
	export interface Recolor {

		/**
		 * The name of the recolor effect.
		 * The name is determined from the `recolor_stops` by matching the gradient
		 * against the colors in the page's current color scheme. This property is
		 * read-only.
		 */
		name?: RecolorName;

		/**
		 * The recolor effect is represented by a gradient, which is a list of color
		 * stops.
		 * The colors in the gradient will replace the corresponding colors at
		 * the same position in the color palette and apply to the image. This
		 * property is read-only.
		 */
		recolorStops?: Array<ColorStop>;
	}

	export enum RecolorName { NONE = 0, LIGHT1 = 1, LIGHT2 = 2, LIGHT3 = 3, LIGHT4 = 4, LIGHT5 = 5, LIGHT6 = 6, LIGHT7 = 7, LIGHT8 = 8, LIGHT9 = 9, LIGHT10 = 10, DARK1 = 11, DARK2 = 12, DARK3 = 13, DARK4 = 14, DARK5 = 15, DARK6 = 16, DARK7 = 17, DARK8 = 18, DARK9 = 19, DARK10 = 20, GRAYSCALE = 21, NEGATIVE = 22, SEPIA = 23, CUSTOM = 24 }


	/** A color and position in a gradient band. */
	export interface ColorStop {

		/**
		 * The alpha value of this color in the gradient band. Defaults to 1.0,
		 * fully opaque.
		 */
		alpha?: number;

		/** A themeable solid color value. */
		color?: OpaqueColor;

		/**
		 * The relative position of the color stop in the gradient band measured
		 * in percentage. The value should be in the interval [0.0, 1.0].
		 */
		position?: number;
	}


	/**
	 * The shadow properties of a page element.
	 * If these fields are unset, they may be inherited from a parent placeholder
	 * if it exists. If there is no parent, the fields will default to the value
	 * used for new page elements created in the Slides editor, which may depend on
	 * the page element kind.
	 */
	export interface Shadow {

		/**
		 * The alignment point of the shadow, that sets the origin for translate,
		 * scale and skew of the shadow. This property is read-only.
		 */
		alignment?: ShadowAlignment;

		/** The alpha of the shadow's color, from 0.0 to 1.0. */
		alpha?: number;

		/** A magnitude in a single direction in the specified units. */
		blurRadius?: Dimension;

		/** A themeable solid color value. */
		color?: OpaqueColor;

		/**
		 * The shadow property state.
		 * Updating the shadow on a page element will implicitly update this field to
		 * `RENDERED`, unless another value is specified in the same request. To have
		 * no shadow on a page element, set this field to `NOT_RENDERED`. In this
		 * case, any other shadow fields set in the same request will be ignored.
		 */
		propertyState?: OutlinePropertyState;

		/**
		 * Whether the shadow should rotate with the shape. This property is
		 * read-only.
		 */
		rotateWithShape?: boolean;

		/**
		 * AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ]
		 * to transform source coordinates (x,y) into destination coordinates (x', y')
		 * according to:
		 * x'  x  =   shear_y  scale_y  translate_y
		 * 1  [ 1 ]
		 * After transformation,
		 * x' = scale_x * x + shear_x * y + translate_x;
		 * y' = scale_y * y + shear_y * x + translate_y;
		 * This message is therefore composed of these six matrix elements.
		 */
		transform?: AffineTransform;

		/** The type of the shadow. This property is read-only. */
		type?: ShadowType;
	}

	export enum ShadowAlignment { RECTANGLE_POSITION_UNSPECIFIED = 0, TOP_LEFT = 1, TOP_CENTER = 2, TOP_RIGHT = 3, LEFT_CENTER = 4, CENTER = 5, RIGHT_CENTER = 6, BOTTOM_LEFT = 7, BOTTOM_CENTER = 8, BOTTOM_RIGHT = 9 }

	export enum ShadowType { SHADOW_TYPE_UNSPECIFIED = 0, OUTER = 1 }


	/** Updates the category of a line. */
	export interface UpdateLineCategoryRequest {

		/**
		 * The line category to update to.
		 * The exact line type is determined based
		 * on the category to update to and how it's routed to connect to other page
		 * elements.
		 */
		lineCategory?: CreateLineRequestCategory;

		/**
		 * The object ID of the line the update is applied to.
		 * Only a line with a category
		 * indicating it is a "connector" can be updated.
		 * The line may be rerouted after updating its category.
		 */
		objectId?: string;
	}


	/** Updates the properties of a Line. */
	export interface UpdateLinePropertiesRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `lineProperties` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the line solid fill color, set `fields` to
		 * `"lineFill.solidFill.color"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string;

		/**
		 * The properties of the Line.
		 * When unset, these fields default to values that match the appearance of
		 * new lines created in the Slides editor.
		 */
		lineProperties?: LineProperties;

		/** The object ID of the line the update is applied to. */
		objectId?: string;
	}


	/**
	 * The properties of the Line.
	 * When unset, these fields default to values that match the appearance of
	 * new lines created in the Slides editor.
	 */
	export interface LineProperties {

		/** The dash style of the line. */
		dashStyle?: OutlineDashStyle;

		/** The style of the arrow at the end of the line. */
		endArrow?: LinePropertiesEndArrow;

		/**
		 * The properties for one end of a Line
		 * connection.
		 */
		endConnection?: LineConnection;

		/** The fill of the line. */
		lineFill?: LineFill;

		/** A hypertext link. */
		link?: Link;

		/** The style of the arrow at the beginning of the line. */
		startArrow?: LinePropertiesEndArrow;

		/**
		 * The properties for one end of a Line
		 * connection.
		 */
		startConnection?: LineConnection;

		/** A magnitude in a single direction in the specified units. */
		weight?: Dimension;
	}

	export enum LinePropertiesEndArrow { ARROW_STYLE_UNSPECIFIED = 0, NONE = 1, STEALTH_ARROW = 2, FILL_ARROW = 3, FILL_CIRCLE = 4, FILL_SQUARE = 5, FILL_DIAMOND = 6, OPEN_ARROW = 7, OPEN_CIRCLE = 8, OPEN_SQUARE = 9, OPEN_DIAMOND = 10 }


	/**
	 * The properties for one end of a Line
	 * connection.
	 */
	export interface LineConnection {

		/**
		 * The object ID of the connected page element.
		 * Some page elements, such as groups, tables, and lines
		 * do not have connection sites and therefore cannot be connected to a
		 * connector line.
		 */
		connectedObjectId?: string;

		/**
		 * The index of the connection site on the connected page element.
		 * In most cases, it corresponds to the predefined connection site index from
		 * the ECMA-376 standard. More information on those connection sites can be
		 * found in the description of the "cnx" attribute in section 20.1.9.9 and
		 * Annex H. "Predefined DrawingML Shape and Text Geometries" of "Office Open
		 * XML File Formats-Fundamentals and Markup Language Reference", part 1 of
		 * [ECMA-376 5th edition]
		 * (http://www.ecma-international.org/publications/standards/Ecma-376.htm).
		 * The position of each connection site can also be viewed from Slides editor.
		 */
		connectionSiteIndex?: number;
	}


	/** The fill of the line. */
	export interface LineFill {

		/**
		 * A solid color fill. The page or page element is filled entirely with the
		 * specified color value.
		 * If any field is unset, its value may be inherited from a parent placeholder
		 * if it exists.
		 */
		solidFill?: SolidFill;
	}


	/**
	 * Updates the alt text title and/or description of a
	 * page element.
	 */
	export interface UpdatePageElementAltTextRequest {

		/**
		 * The updated alt text description of the page element. If unset the existing
		 * value will be maintained. The description is exposed to screen readers
		 * and other accessibility interfaces. Only use human readable values related
		 * to the content of the page element.
		 */
		description?: string;

		/** The object ID of the page element the updates are applied to. */
		objectId?: string;

		/**
		 * The updated alt text title of the page element. If unset the
		 * existing value will be maintained. The title is exposed to screen readers
		 * and other accessibility interfaces. Only use human readable values related
		 * to the content of the page element.
		 */
		title?: string;
	}


	/**
	 * Updates the transform of a page element.
	 * Updating the transform of a group will change the absolute transform of the
	 * page elements in that group, which can change their visual appearance. See
	 * the documentation for PageElement.transform for more details.
	 */
	export interface UpdatePageElementTransformRequest {

		/** The apply mode of the transform update. */
		applyMode?: UpdatePageElementTransformRequestApplyMode;

		/** The object ID of the page element to update. */
		objectId?: string;

		/**
		 * AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ]
		 * to transform source coordinates (x,y) into destination coordinates (x', y')
		 * according to:
		 * x'  x  =   shear_y  scale_y  translate_y
		 * 1  [ 1 ]
		 * After transformation,
		 * x' = scale_x * x + shear_x * y + translate_x;
		 * y' = scale_y * y + shear_y * x + translate_y;
		 * This message is therefore composed of these six matrix elements.
		 */
		transform?: AffineTransform;
	}

	export enum UpdatePageElementTransformRequestApplyMode { APPLY_MODE_UNSPECIFIED = 0, RELATIVE = 1, ABSOLUTE = 2 }


	/**
	 * Updates the Z-order of page elements. Z-order is an ordering of the elements
	 * on the page from back to front. The page element in the front may cover the
	 * elements that are behind it.
	 */
	export interface UpdatePageElementsZOrderRequest {

		/**
		 * The Z-order operation to apply on the page elements.
		 * When applying the operation on multiple page elements, the relative
		 * Z-orders within these page elements before the operation is maintained.
		 */
		operation?: UpdatePageElementsZOrderRequestOperation;

		/**
		 * The object IDs of the page elements to update.
		 * All the page elements must be on the same page and must not be grouped.
		 */
		pageElementObjectIds?: Array<string>;
	}

	export enum UpdatePageElementsZOrderRequestOperation { Z_ORDER_OPERATION_UNSPECIFIED = 0, BRING_TO_FRONT = 1, BRING_FORWARD = 2, SEND_BACKWARD = 3, SEND_TO_BACK = 4 }


	/** Updates the properties of a Page. */
	export interface UpdatePagePropertiesRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `pageProperties` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the page background solid fill color, set `fields`
		 * to `"pageBackgroundFill.solidFill.color"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string;

		/** The object ID of the page the update is applied to. */
		objectId?: string;

		/**
		 * The properties of the Page.
		 * The page will inherit properties from the parent page. Depending on the page
		 * type the hierarchy is defined in either
		 * SlideProperties or
		 * LayoutProperties.
		 */
		pageProperties?: PageProperties;
	}


	/**
	 * The properties of the Page.
	 * The page will inherit properties from the parent page. Depending on the page
	 * type the hierarchy is defined in either
	 * SlideProperties or
	 * LayoutProperties.
	 */
	export interface PageProperties {

		/** The palette of predefined colors for a page. */
		colorScheme?: ColorScheme;

		/** The page background fill. */
		pageBackgroundFill?: PageBackgroundFill;
	}


	/** The palette of predefined colors for a page. */
	export interface ColorScheme {

		/** The ThemeColorType and corresponding concrete color pairs. */
		colors?: Array<ThemeColorPair>;
	}


	/** A pair mapping a theme color type to the concrete color it represents. */
	export interface ThemeColorPair {

		/** An RGB color. */
		color?: RgbColor;

		/** The type of the theme color. */
		type?: OpaqueColorThemeColor;
	}


	/** The page background fill. */
	export interface PageBackgroundFill {

		/**
		 * The background fill property state.
		 * Updating the fill on a page will implicitly update this field to
		 * `RENDERED`, unless another value is specified in the same request. To
		 * have no fill on a page, set this field to `NOT_RENDERED`. In this case,
		 * any other fill fields set in the same request will be ignored.
		 */
		propertyState?: OutlinePropertyState;

		/**
		 * A solid color fill. The page or page element is filled entirely with the
		 * specified color value.
		 * If any field is unset, its value may be inherited from a parent placeholder
		 * if it exists.
		 */
		solidFill?: SolidFill;

		/**
		 * The stretched picture fill. The page or page element is filled entirely with
		 * the specified picture. The picture is stretched to fit its container.
		 */
		stretchedPictureFill?: StretchedPictureFill;
	}


	/**
	 * The stretched picture fill. The page or page element is filled entirely with
	 * the specified picture. The picture is stretched to fit its container.
	 */
	export interface StretchedPictureFill {

		/**
		 * Reading the content_url:
		 * An URL to a picture with a default lifetime of 30 minutes.
		 * This URL is tagged with the account of the requester. Anyone with the URL
		 * effectively accesses the picture as the original requester. Access to the
		 * picture may be lost if the presentation's sharing settings change.
		 * Writing the content_url:
		 * The picture is fetched once at insertion time and a copy is stored for
		 * display inside the presentation. Pictures must be less than 50MB in size,
		 * cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF
		 * format.
		 * The provided URL can be at most 2 kB in length.
		 */
		contentUrl?: string;

		/** A width and height. */
		size?: Size;
	}


	/**
	 * Updates the styling for all of the paragraphs within a Shape or Table that
	 * overlap with the given text index range.
	 */
	export interface UpdateParagraphStyleRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `style` is implied and
		 * should not be specified. A single `"*"` can be used as short-hand for
		 * listing every field.
		 * For example, to update the paragraph alignment, set `fields` to
		 * `"alignment"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string;

		/** The object ID of the shape or table with the text to be styled. */
		objectId?: string;

		/**
		 * Styles that apply to a whole paragraph.
		 * If this text is contained in a shape with a parent placeholder, then these paragraph styles may be
		 * inherited from the parent. Which paragraph styles are inherited depend on the
		 * nesting level of lists:
		 * * A paragraph not in a list will inherit its paragraph style from the
		 * paragraph at the 0 nesting level of the list inside the parent placeholder.
		 * * A paragraph in a list will inherit its paragraph style from the paragraph
		 * at its corresponding nesting level of the list inside the parent
		 * placeholder.
		 * Inherited paragraph styles are represented as unset fields in this message.
		 */
		style?: ParagraphStyle;

		/**
		 * Specifies a contiguous range of an indexed collection, such as characters in
		 * text.
		 */
		textRange?: Range;
	}


	/**
	 * Styles that apply to a whole paragraph.
	 * If this text is contained in a shape with a parent placeholder, then these paragraph styles may be
	 * inherited from the parent. Which paragraph styles are inherited depend on the
	 * nesting level of lists:
	 * * A paragraph not in a list will inherit its paragraph style from the
	 *   paragraph at the 0 nesting level of the list inside the parent placeholder.
	 * * A paragraph in a list will inherit its paragraph style from the paragraph
	 *   at its corresponding nesting level of the list inside the parent
	 *   placeholder.
	 * Inherited paragraph styles are represented as unset fields in this message.
	 */
	export interface ParagraphStyle {

		/** The text alignment for this paragraph. */
		alignment?: ParagraphStyleAlignment;

		/**
		 * The text direction of this paragraph. If unset, the value defaults to
		 * LEFT_TO_RIGHT since
		 * text direction is not inherited.
		 */
		direction?: ParagraphStyleDirection;

		/** A magnitude in a single direction in the specified units. */
		indentEnd?: Dimension;

		/** A magnitude in a single direction in the specified units. */
		indentFirstLine?: Dimension;

		/** A magnitude in a single direction in the specified units. */
		indentStart?: Dimension;

		/**
		 * The amount of space between lines, as a percentage of normal, where normal
		 * is represented as 100.0. If unset, the value is inherited from the parent.
		 */
		lineSpacing?: number;

		/** A magnitude in a single direction in the specified units. */
		spaceAbove?: Dimension;

		/** A magnitude in a single direction in the specified units. */
		spaceBelow?: Dimension;

		/** The spacing mode for the paragraph. */
		spacingMode?: ParagraphStyleSpacingMode;
	}

	export enum ParagraphStyleAlignment { ALIGNMENT_UNSPECIFIED = 0, START = 1, CENTER = 2, END = 3, JUSTIFIED = 4 }

	export enum ParagraphStyleDirection { TEXT_DIRECTION_UNSPECIFIED = 0, LEFT_TO_RIGHT = 1, RIGHT_TO_LEFT = 2 }

	export enum ParagraphStyleSpacingMode { SPACING_MODE_UNSPECIFIED = 0, NEVER_COLLAPSE = 1, COLLAPSE_LISTS = 2 }


	/** Update the properties of a Shape. */
	export interface UpdateShapePropertiesRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `shapeProperties` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the shape background solid fill color, set `fields`
		 * to `"shapeBackgroundFill.solidFill.color"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string;

		/** The object ID of the shape the updates are applied to. */
		objectId?: string;

		/**
		 * The properties of a Shape.
		 * If the shape is a placeholder shape as determined by the
		 * placeholder field, then these
		 * properties may be inherited from a parent placeholder shape.
		 * Determining the rendered value of the property depends on the corresponding
		 * property_state field value.
		 */
		shapeProperties?: ShapeProperties;
	}


	/**
	 * The properties of a Shape.
	 * If the shape is a placeholder shape as determined by the
	 * placeholder field, then these
	 * properties may be inherited from a parent placeholder shape.
	 * Determining the rendered value of the property depends on the corresponding
	 * property_state field value.
	 */
	export interface ShapeProperties {

		/**
		 * The alignment of the content in the shape. If unspecified,
		 * the alignment is inherited from a parent placeholder if it exists. If the
		 * shape has no parent, the default alignment matches the alignment for new
		 * shapes created in the Slides editor.
		 */
		contentAlignment?: ShapePropertiesContentAlignment;

		/** A hypertext link. */
		link?: Link;

		/**
		 * The outline of a PageElement.
		 * If these fields are unset, they may be inherited from a parent placeholder
		 * if it exists. If there is no parent, the fields will default to the value
		 * used for new page elements created in the Slides editor, which may depend on
		 * the page element kind.
		 */
		outline?: Outline;

		/**
		 * The shadow properties of a page element.
		 * If these fields are unset, they may be inherited from a parent placeholder
		 * if it exists. If there is no parent, the fields will default to the value
		 * used for new page elements created in the Slides editor, which may depend on
		 * the page element kind.
		 */
		shadow?: Shadow;

		/** The shape background fill. */
		shapeBackgroundFill?: ShapeBackgroundFill;
	}

	export enum ShapePropertiesContentAlignment { CONTENT_ALIGNMENT_UNSPECIFIED = 0, CONTENT_ALIGNMENT_UNSUPPORTED = 1, TOP = 2, MIDDLE = 3, BOTTOM = 4 }


	/** The shape background fill. */
	export interface ShapeBackgroundFill {

		/**
		 * The background fill property state.
		 * Updating the fill on a shape will implicitly update this field to
		 * `RENDERED`, unless another value is specified in the same request. To
		 * have no fill on a shape, set this field to `NOT_RENDERED`. In this case,
		 * any other fill fields set in the same request will be ignored.
		 */
		propertyState?: OutlinePropertyState;

		/**
		 * A solid color fill. The page or page element is filled entirely with the
		 * specified color value.
		 * If any field is unset, its value may be inherited from a parent placeholder
		 * if it exists.
		 */
		solidFill?: SolidFill;
	}


	/** Updates the position of slides in the presentation. */
	export interface UpdateSlidesPositionRequest {

		/**
		 * The index where the slides should be inserted, based on the slide
		 * arrangement before the move takes place. Must be between zero and the
		 * number of slides in the presentation, inclusive.
		 */
		insertionIndex?: number;

		/**
		 * The IDs of the slides in the presentation that should be moved.
		 * The slides in this list must be in existing presentation order, without
		 * duplicates.
		 */
		slideObjectIds?: Array<string>;
	}


	/** Updates the properties of the table borders in a Table. */
	export interface UpdateTableBorderPropertiesRequest {

		/**
		 * The border position in the table range the updates should apply to. If a
		 * border position is not specified, the updates will apply to all borders in
		 * the table range.
		 */
		borderPosition?: UpdateTableBorderPropertiesRequestBorderPosition;

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `tableBorderProperties` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the table border solid fill color, set
		 * `fields` to `"tableBorderFill.solidFill.color"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string;

		/** The object ID of the table. */
		objectId?: string;

		/**
		 * The border styling properties of the
		 * TableBorderCell.
		 */
		tableBorderProperties?: TableBorderProperties;

		/**
		 * A table range represents a reference to a subset of a table.
		 * It's important to note that the cells specified by a table range do not
		 * necessarily form a rectangle. For example, let's say we have a 3 x 3 table
		 * where all the cells of the last row are merged together. The table looks
		 * like this:
		 * [             ]
		 * A table range with location = (0, 0), row span = 3 and column span = 2
		 * specifies the following cells:
		 * x     x
		 * [ x    x    x ]
		 */
		tableRange?: TableRange;
	}

	export enum UpdateTableBorderPropertiesRequestBorderPosition { ALL = 0, BOTTOM = 1, INNER = 2, INNER_HORIZONTAL = 3, INNER_VERTICAL = 4, LEFT = 5, OUTER = 6, RIGHT = 7, TOP = 8 }


	/**
	 * The border styling properties of the
	 * TableBorderCell.
	 */
	export interface TableBorderProperties {

		/** The dash style of the border. */
		dashStyle?: OutlineDashStyle;

		/** The fill of the border. */
		tableBorderFill?: TableBorderFill;

		/** A magnitude in a single direction in the specified units. */
		weight?: Dimension;
	}


	/** The fill of the border. */
	export interface TableBorderFill {

		/**
		 * A solid color fill. The page or page element is filled entirely with the
		 * specified color value.
		 * If any field is unset, its value may be inherited from a parent placeholder
		 * if it exists.
		 */
		solidFill?: SolidFill;
	}


	/** Update the properties of a TableCell. */
	export interface UpdateTableCellPropertiesRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `tableCellProperties` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the table cell background solid fill color, set
		 * `fields` to `"tableCellBackgroundFill.solidFill.color"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string;

		/** The object ID of the table. */
		objectId?: string;

		/** The properties of the TableCell. */
		tableCellProperties?: TableCellProperties;

		/**
		 * A table range represents a reference to a subset of a table.
		 * It's important to note that the cells specified by a table range do not
		 * necessarily form a rectangle. For example, let's say we have a 3 x 3 table
		 * where all the cells of the last row are merged together. The table looks
		 * like this:
		 * [             ]
		 * A table range with location = (0, 0), row span = 3 and column span = 2
		 * specifies the following cells:
		 * x     x
		 * [ x    x    x ]
		 */
		tableRange?: TableRange;
	}


	/** The properties of the TableCell. */
	export interface TableCellProperties {

		/**
		 * The alignment of the content in the table cell. The default alignment
		 * matches the alignment for newly created table cells in the Slides editor.
		 */
		contentAlignment?: ShapePropertiesContentAlignment;

		/** The table cell background fill. */
		tableCellBackgroundFill?: TableCellBackgroundFill;
	}


	/** The table cell background fill. */
	export interface TableCellBackgroundFill {

		/**
		 * The background fill property state.
		 * Updating the fill on a table cell will implicitly update this field
		 * to `RENDERED`, unless another value is specified in the same request. To
		 * have no fill on a table cell, set this field to `NOT_RENDERED`. In this
		 * case, any other fill fields set in the same request will be ignored.
		 */
		propertyState?: OutlinePropertyState;

		/**
		 * A solid color fill. The page or page element is filled entirely with the
		 * specified color value.
		 * If any field is unset, its value may be inherited from a parent placeholder
		 * if it exists.
		 */
		solidFill?: SolidFill;
	}


	/** Updates the properties of a Table column. */
	export interface UpdateTableColumnPropertiesRequest {

		/**
		 * The list of zero-based indices specifying which columns to update. If no
		 * indices are provided, all columns in the table will be updated.
		 */
		columnIndices?: Array<number>;

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `tableColumnProperties` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the column width, set `fields` to `"column_width"`.
		 * If '"column_width"' is included in the field mask but the property is left
		 * unset, the column width will default to 406,400 EMU (32 points).
		 */
		fields?: string;

		/** The object ID of the table. */
		objectId?: string;

		/** Properties of each column in a table. */
		tableColumnProperties?: TableColumnProperties;
	}


	/** Properties of each column in a table. */
	export interface TableColumnProperties {

		/** A magnitude in a single direction in the specified units. */
		columnWidth?: Dimension;
	}


	/** Updates the properties of a Table row. */
	export interface UpdateTableRowPropertiesRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `tableRowProperties` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the minimum row height, set `fields` to
		 * `"min_row_height"`.
		 * If '"min_row_height"' is included in the field mask but the property is
		 * left unset, the minimum row height will default to 0.
		 */
		fields?: string;

		/** The object ID of the table. */
		objectId?: string;

		/**
		 * The list of zero-based indices specifying which rows to update. If no
		 * indices are provided, all rows in the table will be updated.
		 */
		rowIndices?: Array<number>;

		/** Properties of each row in a table. */
		tableRowProperties?: TableRowProperties;
	}


	/** Properties of each row in a table. */
	export interface TableRowProperties {

		/** A magnitude in a single direction in the specified units. */
		minRowHeight?: Dimension;
	}


	/**
	 * Update the styling of text in a Shape or
	 * Table.
	 */
	export interface UpdateTextStyleRequest {

		/** A location of a single table cell within a table. */
		cellLocation?: TableCellLocation;

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `style` is implied and
		 * should not be specified. A single `"*"` can be used as short-hand for
		 * listing every field.
		 * For example, to update the text style to bold, set `fields` to `"bold"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string;

		/** The object ID of the shape or table with the text to be styled. */
		objectId?: string;

		/**
		 * Represents the styling that can be applied to a TextRun.
		 * If this text is contained in a shape with a parent placeholder, then these text styles may be
		 * inherited from the parent. Which text styles are inherited depend on the
		 * nesting level of lists:
		 * * A text run in a paragraph that is not in a list will inherit its text style
		 * from the the newline character in the paragraph at the 0 nesting level of
		 * the list inside the parent placeholder.
		 * * A text run in a paragraph that is in a list will inherit its text style
		 * from the newline character in the paragraph at its corresponding nesting
		 * level of the list inside the parent placeholder.
		 * Inherited text styles are represented as unset fields in this message. If
		 * text is contained in a shape without a parent placeholder, unsetting these
		 * fields will revert the style to a value matching the defaults in the Slides
		 * editor.
		 */
		style?: TextStyle;

		/**
		 * Specifies a contiguous range of an indexed collection, such as characters in
		 * text.
		 */
		textRange?: Range;
	}


	/** Update the properties of a Video. */
	export interface UpdateVideoPropertiesRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `videoProperties` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the video outline color, set `fields` to
		 * `"outline.outlineFill.solidFill.color"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string;

		/** The object ID of the video the updates are applied to. */
		objectId?: string;

		/** The properties of the Video. */
		videoProperties?: VideoProperties;
	}


	/** The properties of the Video. */
	export interface VideoProperties {

		/**
		 * Whether to enable video autoplay when the page is displayed in present
		 * mode. Defaults to false.
		 */
		autoPlay?: boolean;

		/**
		 * The time at which to end playback, measured in seconds from the beginning
		 * of the video.
		 * If set, the end time should be after the start time.
		 * If not set or if you set this to a value that exceeds the video's length,
		 * the video will be played until its end.
		 */
		end?: string;

		/** Whether to mute the audio during video playback. Defaults to false. */
		mute?: boolean;

		/**
		 * The outline of a PageElement.
		 * If these fields are unset, they may be inherited from a parent placeholder
		 * if it exists. If there is no parent, the fields will default to the value
		 * used for new page elements created in the Slides editor, which may depend on
		 * the page element kind.
		 */
		outline?: Outline;

		/**
		 * The time at which to start playback, measured in seconds from the beginning
		 * of the video.
		 * If set, the start time should be before the end time.
		 * If you set this to a value that exceeds the video's length in seconds, the
		 * video will be played from the last second.
		 * If not set, the video will be played from the beginning.
		 */
		start?: string;
	}


	/** Provides control over how write requests are executed. */
	export interface WriteControl {

		/**
		 * The revision ID of the presentation required for the write request. If
		 * specified and the `required_revision_id` doesn't exactly match the
		 * presentation's current `revision_id`, the request will not be processed and
		 * will return a 400 bad request error.
		 */
		requiredRevisionId?: string;
	}


	/** Response message from a batch update. */
	export interface BatchUpdatePresentationResponse {

		/** The presentation the updates were applied to. */
		presentationId?: string;

		/**
		 * The reply of the updates.  This maps 1:1 with the updates, although
		 * replies to some requests may be empty.
		 */
		replies?: Array<Response>;

		/** Provides control over how write requests are executed. */
		writeControl?: WriteControl;
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


	/** The result of creating an image. */
	export interface CreateImageResponse {

		/** The object ID of the created image. */
		objectId?: string;
	}


	/** The result of creating a line. */
	export interface CreateLineResponse {

		/** The object ID of the created line. */
		objectId?: string;
	}


	/** The result of creating a shape. */
	export interface CreateShapeResponse {

		/** The object ID of the created shape. */
		objectId?: string;
	}


	/** The result of creating an embedded Google Sheets chart. */
	export interface CreateSheetsChartResponse {

		/** The object ID of the created chart. */
		objectId?: string;
	}


	/** The result of creating a slide. */
	export interface CreateSlideResponse {

		/** The object ID of the created slide. */
		objectId?: string;
	}


	/** The result of creating a table. */
	export interface CreateTableResponse {

		/** The object ID of the created table. */
		objectId?: string;
	}


	/** The result of creating a video. */
	export interface CreateVideoResponse {

		/** The object ID of the created video. */
		objectId?: string;
	}


	/** The response of duplicating an object. */
	export interface DuplicateObjectResponse {

		/** The ID of the new duplicate object. */
		objectId?: string;
	}


	/** The result of grouping objects. */
	export interface GroupObjectsResponse {

		/** The object ID of the created group. */
		objectId?: string;
	}


	/** The result of replacing shapes with an image. */
	export interface ReplaceAllShapesWithImageResponse {

		/** The number of shapes replaced with images. */
		occurrencesChanged?: number;
	}


	/** The result of replacing shapes with a Google Sheets chart. */
	export interface ReplaceAllShapesWithSheetsChartResponse {

		/** The number of shapes replaced with charts. */
		occurrencesChanged?: number;
	}


	/** The result of replacing text. */
	export interface ReplaceAllTextResponse {

		/** The number of occurrences changed by replacing all text. */
		occurrencesChanged?: number;
	}


	/** Describes the bullet of a paragraph. */
	export interface Bullet {

		/**
		 * Represents the styling that can be applied to a TextRun.
		 * If this text is contained in a shape with a parent placeholder, then these text styles may be
		 * inherited from the parent. Which text styles are inherited depend on the
		 * nesting level of lists:
		 * * A text run in a paragraph that is not in a list will inherit its text style
		 * from the the newline character in the paragraph at the 0 nesting level of
		 * the list inside the parent placeholder.
		 * * A text run in a paragraph that is in a list will inherit its text style
		 * from the newline character in the paragraph at its corresponding nesting
		 * level of the list inside the parent placeholder.
		 * Inherited text styles are represented as unset fields in this message. If
		 * text is contained in a shape without a parent placeholder, unsetting these
		 * fields will revert the style to a value matching the defaults in the Slides
		 * editor.
		 */
		bulletStyle?: TextStyle;

		/** The rendered bullet glyph for this paragraph. */
		glyph?: string;

		/** The ID of the list this paragraph belongs to. */
		listId?: string;

		/** The nesting level of this paragraph in the list. */
		nestingLevel?: number;
	}


	/**
	 * A PageElement kind representing a
	 * joined collection of PageElements.
	 */
	export interface Group {

		/** The collection of elements in the group. The minimum size of a group is 2. */
		children?: Array<PageElement>;
	}


	/** A visual element rendered on a page. */
	export interface PageElement {

		/**
		 * The description of the page element. Combined with title to display alt
		 * text.
		 */
		description?: string;

		/**
		 * A PageElement kind representing a
		 * joined collection of PageElements.
		 */
		elementGroup?: Group;

		/**
		 * A PageElement kind representing an
		 * image.
		 */
		image?: Image;

		/**
		 * A PageElement kind representing a
		 * non-connector line, straight connector, curved connector, or bent connector.
		 */
		line?: Line;

		/**
		 * The object ID for this page element. Object IDs used by
		 * google.apps.slides.v1.Page and
		 * google.apps.slides.v1.PageElement share the same namespace.
		 */
		objectId?: string;

		/**
		 * A PageElement kind representing a
		 * generic shape that does not have a more specific classification.
		 */
		shape?: Shape;

		/**
		 * A PageElement kind representing
		 * a linked chart embedded from Google Sheets.
		 */
		sheetsChart?: SheetsChart;

		/** A width and height. */
		size?: Size;

		/**
		 * A PageElement kind representing a
		 * table.
		 */
		table?: Table;

		/**
		 * The title of the page element. Combined with description to display alt
		 * text.
		 */
		title?: string;

		/**
		 * AffineTransform uses a 3x3 matrix with an implied last row of [ 0 0 1 ]
		 * to transform source coordinates (x,y) into destination coordinates (x', y')
		 * according to:
		 * x'  x  =   shear_y  scale_y  translate_y
		 * 1  [ 1 ]
		 * After transformation,
		 * x' = scale_x * x + shear_x * y + translate_x;
		 * y' = scale_y * y + shear_y * x + translate_y;
		 * This message is therefore composed of these six matrix elements.
		 */
		transform?: AffineTransform;

		/**
		 * A PageElement kind representing a
		 * video.
		 */
		video?: Video;

		/**
		 * A PageElement kind representing
		 * word art.
		 */
		wordArt?: WordArt;
	}


	/**
	 * A PageElement kind representing an
	 * image.
	 */
	export interface Image {

		/**
		 * An URL to an image with a default lifetime of 30 minutes.
		 * This URL is tagged with the account of the requester. Anyone with the URL
		 * effectively accesses the image as the original requester. Access to the
		 * image may be lost if the presentation's sharing settings change.
		 */
		contentUrl?: string;

		/** The properties of the Image. */
		imageProperties?: ImageProperties;

		/**
		 * The source URL is the URL used to insert the image. The source URL can be
		 * empty.
		 */
		sourceUrl?: string;
	}


	/**
	 * A PageElement kind representing a
	 * non-connector line, straight connector, curved connector, or bent connector.
	 */
	export interface Line {

		/**
		 * The category of the line.
		 * It matches the `category` specified in CreateLineRequest, and can be updated with
		 * UpdateLineCategoryRequest.
		 */
		lineCategory?: CreateLineRequestCategory;

		/**
		 * The properties of the Line.
		 * When unset, these fields default to values that match the appearance of
		 * new lines created in the Slides editor.
		 */
		lineProperties?: LineProperties;

		/** The type of the line. */
		lineType?: LineLineType;
	}

	export enum LineLineType { TYPE_UNSPECIFIED = 0, STRAIGHT_CONNECTOR_1 = 1, BENT_CONNECTOR_2 = 2, BENT_CONNECTOR_3 = 3, BENT_CONNECTOR_4 = 4, BENT_CONNECTOR_5 = 5, CURVED_CONNECTOR_2 = 6, CURVED_CONNECTOR_3 = 7, CURVED_CONNECTOR_4 = 8, CURVED_CONNECTOR_5 = 9, STRAIGHT_LINE = 10 }


	/**
	 * A PageElement kind representing a
	 * generic shape that does not have a more specific classification.
	 */
	export interface Shape {

		/** The placeholder information that uniquely identifies a placeholder shape. */
		placeholder?: Placeholder;

		/**
		 * The properties of a Shape.
		 * If the shape is a placeholder shape as determined by the
		 * placeholder field, then these
		 * properties may be inherited from a parent placeholder shape.
		 * Determining the rendered value of the property depends on the corresponding
		 * property_state field value.
		 */
		shapeProperties?: ShapeProperties;

		/** The type of the shape. */
		shapeType?: CreateShapeRequestShapeType;

		/**
		 * The general text content. The text must reside in a compatible shape (e.g.
		 * text box or rectangle) or a table cell in a page.
		 */
		text?: TextContent;
	}


	/**
	 * The general text content. The text must reside in a compatible shape (e.g.
	 * text box or rectangle) or a table cell in a page.
	 */
	export interface TextContent {

		/** The bulleted lists contained in this text, keyed by list ID. */
		lists?: {[id: string]: List };

		/**
		 * The text contents broken down into its component parts, including styling
		 * information. This property is read-only.
		 */
		textElements?: Array<TextElement>;
	}


	/**
	 * A List describes the look and feel of bullets belonging to paragraphs
	 * associated with a list. A paragraph that is part of a list has an implicit
	 * reference to that list's ID.
	 */
	export interface List {

		/** The ID of the list. */
		listId?: string;

		/**
		 * A map of nesting levels to the properties of bullets at the associated
		 * level. A list has at most nine levels of nesting, so the possible values
		 * for the keys of this map are 0 through 8, inclusive.
		 */
		nestingLevel?: {[id: string]: NestingLevel };
	}


	/**
	 * Contains properties describing the look and feel of a list bullet at a given
	 * level of nesting.
	 */
	export interface NestingLevel {

		/**
		 * Represents the styling that can be applied to a TextRun.
		 * If this text is contained in a shape with a parent placeholder, then these text styles may be
		 * inherited from the parent. Which text styles are inherited depend on the
		 * nesting level of lists:
		 * * A text run in a paragraph that is not in a list will inherit its text style
		 * from the the newline character in the paragraph at the 0 nesting level of
		 * the list inside the parent placeholder.
		 * * A text run in a paragraph that is in a list will inherit its text style
		 * from the newline character in the paragraph at its corresponding nesting
		 * level of the list inside the parent placeholder.
		 * Inherited text styles are represented as unset fields in this message. If
		 * text is contained in a shape without a parent placeholder, unsetting these
		 * fields will revert the style to a value matching the defaults in the Slides
		 * editor.
		 */
		bulletStyle?: TextStyle;
	}


	/**
	 * A TextElement describes the content of a range of indices in the text content
	 * of a Shape or TableCell.
	 */
	export interface TextElement {

		/** A TextElement kind that represents auto text. */
		autoText?: AutoText;

		/**
		 * The zero-based end index of this text element, exclusive, in Unicode code
		 * units.
		 */
		endIndex?: number;

		/** A TextElement kind that represents the beginning of a new paragraph. */
		paragraphMarker?: ParagraphMarker;

		/** The zero-based start index of this text element, in Unicode code units. */
		startIndex?: number;

		/**
		 * A TextElement kind that represents a run of text that all has the same
		 * styling.
		 */
		textRun?: TextRun;
	}


	/** A TextElement kind that represents the beginning of a new paragraph. */
	export interface ParagraphMarker {

		/** Describes the bullet of a paragraph. */
		bullet?: Bullet;

		/**
		 * Styles that apply to a whole paragraph.
		 * If this text is contained in a shape with a parent placeholder, then these paragraph styles may be
		 * inherited from the parent. Which paragraph styles are inherited depend on the
		 * nesting level of lists:
		 * * A paragraph not in a list will inherit its paragraph style from the
		 * paragraph at the 0 nesting level of the list inside the parent placeholder.
		 * * A paragraph in a list will inherit its paragraph style from the paragraph
		 * at its corresponding nesting level of the list inside the parent
		 * placeholder.
		 * Inherited paragraph styles are represented as unset fields in this message.
		 */
		style?: ParagraphStyle;
	}


	/**
	 * A TextElement kind that represents a run of text that all has the same
	 * styling.
	 */
	export interface TextRun {

		/** The text of this run. */
		content?: string;

		/**
		 * Represents the styling that can be applied to a TextRun.
		 * If this text is contained in a shape with a parent placeholder, then these text styles may be
		 * inherited from the parent. Which text styles are inherited depend on the
		 * nesting level of lists:
		 * * A text run in a paragraph that is not in a list will inherit its text style
		 * from the the newline character in the paragraph at the 0 nesting level of
		 * the list inside the parent placeholder.
		 * * A text run in a paragraph that is in a list will inherit its text style
		 * from the newline character in the paragraph at its corresponding nesting
		 * level of the list inside the parent placeholder.
		 * Inherited text styles are represented as unset fields in this message. If
		 * text is contained in a shape without a parent placeholder, unsetting these
		 * fields will revert the style to a value matching the defaults in the Slides
		 * editor.
		 */
		style?: TextStyle;
	}


	/**
	 * A PageElement kind representing
	 * a linked chart embedded from Google Sheets.
	 */
	export interface SheetsChart {

		/**
		 * The ID of the specific chart in the Google Sheets spreadsheet that is
		 * embedded.
		 */
		chartId?: number;

		/**
		 * The URL of an image of the embedded chart, with a default lifetime of 30
		 * minutes. This URL is tagged with the account of the requester. Anyone with
		 * the URL effectively accesses the image as the original requester. Access to
		 * the image may be lost if the presentation's sharing settings change.
		 */
		contentUrl?: string;

		/** The properties of the SheetsChart. */
		sheetsChartProperties?: SheetsChartProperties;

		/** The ID of the Google Sheets spreadsheet that contains the source chart. */
		spreadsheetId?: string;
	}


	/** The properties of the SheetsChart. */
	export interface SheetsChartProperties {

		/** The properties of the Image. */
		chartImageProperties?: ImageProperties;
	}


	/**
	 * A PageElement kind representing a
	 * table.
	 */
	export interface Table {

		/** Number of columns in the table. */
		columns?: number;

		/**
		 * Properties of horizontal cell borders.
		 * A table's horizontal cell borders are represented as a grid. The grid has
		 * one more row than the number of rows in the table and the same number of
		 * columns as the table. For example, if the table is 3 x 3, its horizontal
		 * borders will be represented as a grid with 4 rows and 3 columns.
		 */
		horizontalBorderRows?: Array<TableBorderRow>;

		/** Number of rows in the table. */
		rows?: number;

		/** Properties of each column. */
		tableColumns?: Array<TableColumnProperties>;

		/**
		 * Properties and contents of each row.
		 * Cells that span multiple rows are contained in only one of these rows and
		 * have a row_span greater
		 * than 1.
		 */
		tableRows?: Array<TableRow>;

		/**
		 * Properties of vertical cell borders.
		 * A table's vertical cell borders are represented as a grid. The grid has the
		 * same number of rows as the table and one more column than the number of
		 * columns in the table. For example, if the table is 3 x 3, its vertical
		 * borders will be represented as a grid with 3 rows and 4 columns.
		 */
		verticalBorderRows?: Array<TableBorderRow>;
	}


	/** Contents of each border row in a table. */
	export interface TableBorderRow {

		/**
		 * Properties of each border cell. When a border's adjacent table cells are
		 * merged, it is not included in the response.
		 */
		tableBorderCells?: Array<TableBorderCell>;
	}


	/** The properties of each border cell. */
	export interface TableBorderCell {

		/** A location of a single table cell within a table. */
		location?: TableCellLocation;

		/**
		 * The border styling properties of the
		 * TableBorderCell.
		 */
		tableBorderProperties?: TableBorderProperties;
	}


	/** Properties and contents of each row in a table. */
	export interface TableRow {

		/** A magnitude in a single direction in the specified units. */
		rowHeight?: Dimension;

		/**
		 * Properties and contents of each cell.
		 * Cells that span multiple columns are represented only once with a
		 * column_span greater
		 * than 1. As a result, the length of this collection does not always match
		 * the number of columns of the entire table.
		 */
		tableCells?: Array<TableCell>;

		/** Properties of each row in a table. */
		tableRowProperties?: TableRowProperties;
	}


	/** Properties and contents of each table cell. */
	export interface TableCell {

		/** Column span of the cell. */
		columnSpan?: number;

		/** A location of a single table cell within a table. */
		location?: TableCellLocation;

		/** Row span of the cell. */
		rowSpan?: number;

		/** The properties of the TableCell. */
		tableCellProperties?: TableCellProperties;

		/**
		 * The general text content. The text must reside in a compatible shape (e.g.
		 * text box or rectangle) or a table cell in a page.
		 */
		text?: TextContent;
	}


	/**
	 * A PageElement kind representing a
	 * video.
	 */
	export interface Video {

		/** The video source's unique identifier for this video. */
		id?: string;

		/** The video source. */
		source?: CreateVideoRequestSource;

		/**
		 * An URL to a video. The URL is valid as long as the source video exists and
		 * sharing settings do not change.
		 */
		url?: string;

		/** The properties of the Video. */
		videoProperties?: VideoProperties;
	}


	/**
	 * A PageElement kind representing
	 * word art.
	 */
	export interface WordArt {

		/** The text rendered as word art. */
		renderedText?: string;
	}


	/**
	 * The properties of Page are only
	 * relevant for pages with page_type LAYOUT.
	 */
	export interface LayoutProperties {

		/** The human-readable name of the layout. */
		displayName?: string;

		/** The object ID of the master that this layout is based on. */
		masterObjectId?: string;

		/** The name of the layout. */
		name?: string;
	}


	/**
	 * The properties of Page that are only
	 * relevant for pages with page_type MASTER.
	 */
	export interface MasterProperties {

		/** The human-readable name of the master. */
		displayName?: string;
	}


	/**
	 * The properties of Page that are only
	 * relevant for pages with page_type NOTES.
	 */
	export interface NotesProperties {

		/**
		 * The object ID of the shape on this notes page that contains the speaker
		 * notes for the corresponding slide.
		 * The actual shape may not always exist on the notes page. Inserting text
		 * using this object ID will automatically create the shape. In this case, the
		 * actual shape may have different object ID. The `GetPresentation` or
		 * `GetPage` action will always return the latest object ID.
		 */
		speakerNotesObjectId?: string;
	}


	/** A page in a presentation. */
	export interface Page {

		/**
		 * The properties of Page are only
		 * relevant for pages with page_type LAYOUT.
		 */
		layoutProperties?: LayoutProperties;

		/**
		 * The properties of Page that are only
		 * relevant for pages with page_type MASTER.
		 */
		masterProperties?: MasterProperties;

		/**
		 * The properties of Page that are only
		 * relevant for pages with page_type NOTES.
		 */
		notesProperties?: NotesProperties;

		/**
		 * The object ID for this page. Object IDs used by
		 * Page and
		 * PageElement share the same namespace.
		 */
		objectId?: string;

		/** The page elements rendered on the page. */
		pageElements?: Array<PageElement>;

		/**
		 * The properties of the Page.
		 * The page will inherit properties from the parent page. Depending on the page
		 * type the hierarchy is defined in either
		 * SlideProperties or
		 * LayoutProperties.
		 */
		pageProperties?: PageProperties;

		/** The type of the page. */
		pageType?: PagePageType;

		/**
		 * The revision ID of the presentation containing this page. Can be used in
		 * update requests to assert that the presentation revision hasn't changed
		 * since the last read operation. Only populated if the user has edit access
		 * to the presentation.
		 * The format of the revision ID may change over time, so it should be treated
		 * opaquely. A returned revision ID is only guaranteed to be valid for 24
		 * hours after it has been returned and cannot be shared across users. If the
		 * revision ID is unchanged between calls, then the presentation has not
		 * changed. Conversely, a changed ID (for the same presentation and user)
		 * usually means the presentation has been updated; however, a changed ID can
		 * also be due to internal factors such as ID format changes.
		 */
		revisionId?: string;

		/**
		 * The properties of Page that are only
		 * relevant for pages with page_type SLIDE.
		 */
		slideProperties?: SlideProperties;
	}

	export enum PagePageType { SLIDE = 0, MASTER = 1, LAYOUT = 2, NOTES = 3, NOTES_MASTER = 4 }


	/**
	 * The properties of Page that are only
	 * relevant for pages with page_type SLIDE.
	 */
	export interface SlideProperties {

		/**
		 * The object ID of the layout that this slide is based on. This property is
		 * read-only.
		 */
		layoutObjectId?: string;

		/**
		 * The object ID of the master that this slide is based on. This property is
		 * read-only.
		 */
		masterObjectId?: string;

		/** A page in a presentation. */
		notesPage?: Page;
	}


	/** A Google Slides presentation. */
	export interface Presentation {

		/**
		 * The layouts in the presentation. A layout is a template that determines
		 * how content is arranged and styled on the slides that inherit from that
		 * layout.
		 */
		layouts?: Array<Page>;

		/** The locale of the presentation, as an IETF BCP 47 language tag. */
		locale?: string;

		/**
		 * The slide masters in the presentation. A slide master contains all common
		 * page elements and the common properties for a set of layouts. They serve
		 * three purposes:
		 * - Placeholder shapes on a master contain the default text styles and shape
		 * properties of all placeholder shapes on pages that use that master.
		 * - The master page properties define the common page properties inherited by
		 * its layouts.
		 * - Any other shapes on the master slide appear on all slides using that
		 * master, regardless of their layout.
		 */
		masters?: Array<Page>;

		/** A page in a presentation. */
		notesMaster?: Page;

		/** A width and height. */
		pageSize?: Size;

		/** The ID of the presentation. */
		presentationId?: string;

		/**
		 * The revision ID of the presentation. Can be used in update requests
		 * to assert that the presentation revision hasn't changed since the last
		 * read operation. Only populated if the user has edit access to the
		 * presentation.
		 * The format of the revision ID may change over time, so it should be treated
		 * opaquely. A returned revision ID is only guaranteed to be valid for 24
		 * hours after it has been returned and cannot be shared across users. If the
		 * revision ID is unchanged between calls, then the presentation has not
		 * changed. Conversely, a changed ID (for the same presentation and user)
		 * usually means the presentation has been updated; however, a changed ID can
		 * also be due to internal factors such as ID format changes.
		 */
		revisionId?: string;

		/**
		 * The slides in the presentation.
		 * A slide inherits properties from a slide layout.
		 */
		slides?: Array<Page>;

		/** The title of the presentation. */
		title?: string;
	}


	/** The thumbnail of a page. */
	export interface Thumbnail {

		/**
		 * The content URL of the thumbnail image.
		 * The URL to the image has a default lifetime of 30 minutes.
		 * This URL is tagged with the account of the requester. Anyone with the URL
		 * effectively accesses the image as the original requester. Access to the
		 * image may be lost if the presentation's sharing settings change.
		 * The mime type of the thumbnail image is the same as specified in the
		 * `GetPageThumbnailRequest`.
		 */
		contentUrl?: string;

		/** The positive height in pixels of the thumbnail image. */
		height?: number;

		/** The positive width in pixels of the thumbnail image. */
		width?: number;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a blank presentation using the title given in the request. If a
		 * `presentationId` is provided, it is used as the ID of the new presentation.
		 * Otherwise, a new ID is generated. Other fields in the request, including
		 * any provided content, are ignored.
		 * Returns the created presentation.
		 * Post v1/presentations
		 * @return {void} Successful response
		 */
		Slides_presentations_create(requestBody: Presentation): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/presentations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest version of the specified presentation.
		 * Get v1/presentations/{presentationId}
		 * @param {string} presentationId The ID of the presentation to retrieve.
		 * @return {void} Successful response
		 */
		Slides_presentations_get(presentationId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/presentations/' + (presentationId == null ? '' : encodeURIComponent(presentationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest version of the specified page in the presentation.
		 * Get v1/presentations/{presentationId}/pages/{pageObjectId}
		 * @param {string} presentationId The ID of the presentation to retrieve.
		 * @param {string} pageObjectId The object ID of the page to retrieve.
		 * @return {void} Successful response
		 */
		Slides_presentations_pages_get(presentationId: string, pageObjectId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/presentations/' + (presentationId == null ? '' : encodeURIComponent(presentationId)) + '/pages/' + (pageObjectId == null ? '' : encodeURIComponent(pageObjectId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Generates a thumbnail of the latest version of the specified page in the
		 * presentation and returns a URL to the thumbnail image.
		 * This request counts as an [expensive read request](/slides/limits) for
		 * quota purposes.
		 * Get v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail
		 * @param {string} presentationId The ID of the presentation to retrieve.
		 * @param {string} pageObjectId The object ID of the page whose thumbnail to retrieve.
		 * @param {Slides_presentations_pages_getThumbnailThumbnailProperties_mimeType} thumbnailProperties_mimeType The optional mime type of the thumbnail image.
		 * If you don't specify the mime type, the mime type defaults to PNG.
		 * @param {Slides_presentations_pages_getThumbnailThumbnailProperties_thumbnailSize} thumbnailProperties_thumbnailSize The optional thumbnail image size.
		 * If you don't specify the size, the server chooses a default size of the
		 * image.
		 * @return {void} Successful response
		 */
		Slides_presentations_pages_getThumbnail(presentationId: string, pageObjectId: string, thumbnailProperties_mimeType: Slides_presentations_pages_getThumbnailThumbnailProperties_mimeType, thumbnailProperties_thumbnailSize: Slides_presentations_pages_getThumbnailThumbnailProperties_thumbnailSize): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/presentations/' + (presentationId == null ? '' : encodeURIComponent(presentationId)) + '/pages/' + (pageObjectId == null ? '' : encodeURIComponent(pageObjectId)) + '/thumbnail&thumbnailProperties_mimeType=' + thumbnailProperties_mimeType + '&thumbnailProperties_thumbnailSize=' + thumbnailProperties_thumbnailSize, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies one or more updates to the presentation.
		 * Each request is validated before
		 * being applied. If any request is not valid, then the entire request will
		 * fail and nothing will be applied.
		 * Some requests have replies to
		 * give you some information about how they are applied. Other requests do
		 * not need to return information; these each return an empty reply.
		 * The order of replies matches that of the requests.
		 * For example, suppose you call batchUpdate with four updates, and only the
		 * third one returns information. The response would have two empty replies:
		 * the reply to the third request, and another empty reply, in that order.
		 * Because other users may be editing the presentation, the presentation
		 * might not exactly reflect your changes: your changes may
		 * be altered with respect to collaborator changes. If there are no
		 * collaborators, the presentation should reflect your changes. In any case,
		 * the updates in your request are guaranteed to be applied together
		 * atomically.
		 * Post v1/presentations/{presentationId}:batchUpdate
		 * @param {string} presentationId The presentation to apply the updates to.
		 * @return {void} Successful response
		 */
		Slides_presentations_batchUpdate(presentationId: string, requestBody: BatchUpdatePresentationRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/presentations/' + (presentationId == null ? '' : encodeURIComponent(presentationId)) + ':batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Slides_presentations_pages_getThumbnailThumbnailProperties_mimeType { PNG = 0 }

	export enum Slides_presentations_pages_getThumbnailThumbnailProperties_thumbnailSize { THUMBNAIL_SIZE_UNSPECIFIED = 0, LARGE = 1, MEDIUM = 2, SMALL = 3 }

}

