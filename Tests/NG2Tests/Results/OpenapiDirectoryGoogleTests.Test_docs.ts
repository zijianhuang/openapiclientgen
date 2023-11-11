import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/**
	 * A ParagraphElement representing a
	 * spot in the text that is dynamically replaced with content that can change
	 * over time, like a page number.
	 */
	export interface AutoText {

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. An AutoText
		 * may have multiple insertion IDs if it is a nested suggested change. If
		 * empty, then this is not a suggested insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;

		/** The suggested text style changes to this AutoText, keyed by suggestion ID. */
		suggestedTextStyleChanges?: {[id: string]: SuggestedTextStyle } | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;

		/** The type of this auto text. */
		type?: AutoTextType | null;
	}


	/** A suggested change to a TextStyle. */
	export interface SuggestedTextStyle {

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;

		/**
		 * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		textStyleSuggestionState?: TextStyleSuggestionState | null;
	}


	/**
	 * Represents the styling that can be applied to text.
	 * Inherited text styles are represented as unset fields in this message. A
	 * text style's parent depends on where the text style is defined:
	 *   * The TextStyle of text in a Paragraph
	 *     inherits from the paragraph's corresponding named style type.
	 *   * The TextStyle on a named style
	 *     inherits from the normal text named style.
	 *   * The TextStyle of the normal text named style inherits
	 *     from the default text style in the Docs editor.
	 *   * The TextStyle on a Paragraph element
	 *     that is contained in a table may inherit its text style from the table
	 *     style.
	 * If the text style does not inherit from a parent, unsetting fields will
	 * revert the style to a value matching the defaults in the Docs editor.
	 */
	export interface TextStyle {

		/** A color that can either be fully opaque or fully transparent. */
		backgroundColor?: OptionalColor | null;

		/**
		 * The text's vertical offset from its normal position.
		 * Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically
		 * rendered in a smaller font size, computed based on the `font_size` field.
		 * The `font_size` itself is not affected by changes in this field.
		 */
		baselineOffset?: TextStyleBaselineOffset | null;

		/** Whether or not the text is rendered as bold. */
		bold?: boolean | null;

		/** A magnitude in a single direction in the specified units. */
		fontSize?: Dimension | null;

		/** A color that can either be fully opaque or fully transparent. */
		foregroundColor?: OptionalColor | null;

		/** Whether or not the text is italicized. */
		italic?: boolean | null;

		/** A reference to another portion of a document or an external URL resource. */
		link?: Link | null;

		/** Whether or not the text is in small capital letters. */
		smallCaps?: boolean | null;

		/** Whether or not the text is struck through. */
		strikethrough?: boolean | null;

		/** Whether or not the text is underlined. */
		underline?: boolean | null;

		/** Represents a font family and weight of text. */
		weightedFontFamily?: WeightedFontFamily | null;
	}


	/** A color that can either be fully opaque or fully transparent. */
	export interface OptionalColor {

		/** A solid color. */
		color?: Color | null;
	}


	/** A solid color. */
	export interface Color {

		/** An RGB color. */
		rgbColor?: RgbColor | null;
	}


	/** An RGB color. */
	export interface RgbColor {

		/** The blue component of the color, from 0.0 to 1.0. */
		blue?: number | null;

		/** The green component of the color, from 0.0 to 1.0. */
		green?: number | null;

		/** The red component of the color, from 0.0 to 1.0. */
		red?: number | null;
	}

	export enum TextStyleBaselineOffset { BASELINE_OFFSET_UNSPECIFIED = 0, NONE = 1, SUPERSCRIPT = 2, SUBSCRIPT = 3 }


	/** A magnitude in a single direction in the specified units. */
	export interface Dimension {

		/** The magnitude. */
		magnitude?: number | null;

		/** The units for magnitude. */
		unit?: DimensionUnit | null;
	}

	export enum DimensionUnit { UNIT_UNSPECIFIED = 0, PT = 1 }


	/** A reference to another portion of a document or an external URL resource. */
	export interface Link {

		/** The ID of a bookmark in this document. */
		bookmarkId?: string | null;

		/** The ID of a heading in this document. */
		headingId?: string | null;

		/** An external URL. */
		url?: string | null;
	}


	/** Represents a font family and weight of text. */
	export interface WeightedFontFamily {

		/**
		 * The font family of the text.
		 * The font family can be any font from the Font menu in Docs or from
		 * [Google Fonts] (https://fonts.google.com/). If the font name is
		 * unrecognized, the text is rendered in `Arial`.
		 */
		fontFamily?: string | null;

		/**
		 * The weight of the font. This field can have any value that is a multiple of
		 * `100` between `100` and `900`, inclusive. This range corresponds to the
		 * numerical values described in the CSS 2.1 Specification,
		 * [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with
		 * non-numerical values disallowed.
		 * The default value is `400` ("normal").
		 * The font weight makes up just one component of the rendered font weight.
		 * The rendered weight is determined by a combination of the `weight` and the
		 * text style's resolved `bold` value, after accounting for inheritance:
		 * * If the text is bold and the weight is less than `400`, the rendered
		 * weight is 400.
		 * * If the text is bold and the weight is greater than or equal to `400` but
		 * is less than `700`, the rendered weight is `700`.
		 * * If the weight is greater than or equal to `700`, the rendered weight is
		 * equal to the weight.
		 * * If the text is not bold, the rendered weight is equal to the weight.
		 */
		weight?: number | null;
	}


	/**
	 * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion.
	 * For any field set to true, there is a new suggested value.
	 */
	export interface TextStyleSuggestionState {

		/** Indicates if there was a suggested change to background_color. */
		backgroundColorSuggested?: boolean | null;

		/** Indicates if there was a suggested change to baseline_offset. */
		baselineOffsetSuggested?: boolean | null;

		/** Indicates if there was a suggested change to bold. */
		boldSuggested?: boolean | null;

		/** Indicates if there was a suggested change to font_size. */
		fontSizeSuggested?: boolean | null;

		/** Indicates if there was a suggested change to foreground_color. */
		foregroundColorSuggested?: boolean | null;

		/** Indicates if there was a suggested change to italic. */
		italicSuggested?: boolean | null;

		/** Indicates if there was a suggested change to link. */
		linkSuggested?: boolean | null;

		/** Indicates if there was a suggested change to small_caps. */
		smallCapsSuggested?: boolean | null;

		/** Indicates if there was a suggested change to strikethrough. */
		strikethroughSuggested?: boolean | null;

		/** Indicates if there was a suggested change to underline. */
		underlineSuggested?: boolean | null;

		/** Indicates if there was a suggested change to weighted_font_family. */
		weightedFontFamilySuggested?: boolean | null;
	}

	export enum AutoTextType { TYPE_UNSPECIFIED = 0, PAGE_NUMBER = 1, PAGE_COUNT = 2 }


	/** Represents the background of a document. */
	export interface Background {

		/** A color that can either be fully opaque or fully transparent. */
		color?: OptionalColor | null;
	}


	/**
	 * A mask that indicates which of the fields on the base Background have been changed in this suggestion.
	 * For any field set to true, the Backgound has a new suggested value.
	 */
	export interface BackgroundSuggestionState {

		/**
		 * Indicates whether the current background color has been modified in this
		 * suggestion.
		 */
		backgroundColorSuggested?: boolean | null;
	}


	/** Request message for BatchUpdateDocument. */
	export interface BatchUpdateDocumentRequest {

		/** A list of updates to apply to the document. */
		requests?: Array<Request> | null;

		/** Provides control over how write requests are executed. */
		writeControl?: WriteControl | null;
	}


	/** A single update to apply to a document. */
	export interface Request {

		/**
		 * Creates a Footer. The new footer is applied to
		 * the SectionStyle at the location of the
		 * SectionBreak if specificed, otherwise
		 * it is applied to the DocumentStyle.
		 * If a footer of the specified type already exists, a 400 bad request error
		 * is returned.
		 */
		createFooter?: CreateFooterRequest | null;

		/**
		 * Creates a Footnote segment
		 * and inserts a new FootnoteReference
		 * to it at the given location.
		 * The new Footnote segment will contain a
		 * space followed by a newline character.
		 */
		createFootnote?: CreateFootnoteRequest | null;

		/**
		 * Creates a Header. The new header is applied to
		 * the SectionStyle at the location of the
		 * SectionBreak if specificed, otherwise
		 * it is applied to the DocumentStyle.
		 * If a header of the specified type already exists, a 400 bad request error
		 * is returned.
		 */
		createHeader?: CreateHeaderRequest | null;

		/**
		 * Creates a NamedRange referencing the given
		 * range.
		 */
		createNamedRange?: CreateNamedRangeRequest | null;

		/**
		 * Creates bullets for all of the paragraphs that overlap with the given range.
		 * The nesting level of each paragraph will be determined by counting leading
		 * tabs in front of each paragraph. To avoid excess space between the bullet and
		 * the corresponding paragraph, these leading tabs are removed by this request.
		 * This may change the indices of parts of the text.
		 * If the paragraph immediately before paragraphs being updated is in a list
		 * with a matching preset, the paragraphs being updated are added to that
		 * preceding list.
		 */
		createParagraphBullets?: CreateParagraphBulletsRequest | null;

		/** Deletes content from the document. */
		deleteContentRange?: DeleteContentRangeRequest | null;

		/** Deletes a Footer from the document. */
		deleteFooter?: DeleteFooterRequest | null;

		/** Deletes a Header from the document. */
		deleteHeader?: DeleteHeaderRequest | null;

		/** Deletes a NamedRange. */
		deleteNamedRange?: DeleteNamedRangeRequest | null;

		/**
		 * Deletes bullets from all of the paragraphs that overlap with the given range.
		 * The nesting level of each paragraph will be visually preserved by adding
		 * indent to the start of the corresponding paragraph.
		 */
		deleteParagraphBullets?: DeleteParagraphBulletsRequest | null;

		/**
		 * Deletes a PositionedObject from the
		 * document.
		 */
		deletePositionedObject?: DeletePositionedObjectRequest | null;

		/** Deletes a column from a table. */
		deleteTableColumn?: DeleteTableColumnRequest | null;

		/** Deletes a row from a table. */
		deleteTableRow?: DeleteTableRowRequest | null;

		/**
		 * Inserts an InlineObject containing an
		 * image at the given location.
		 */
		insertInlineImage?: InsertInlineImageRequest | null;

		/** Inserts a page break followed by a newline at the specified location. */
		insertPageBreak?: InsertPageBreakRequest | null;

		/**
		 * Inserts a section break at the given location.
		 * A newline character will be inserted before the section break.
		 */
		insertSectionBreak?: InsertSectionBreakRequest | null;

		/**
		 * Inserts a table at the specified location.
		 * A newline character will be inserted before the inserted table.
		 */
		insertTable?: InsertTableRequest | null;

		/** Inserts an empty column into a table. */
		insertTableColumn?: InsertTableColumnRequest | null;

		/** Inserts an empty row into a table. */
		insertTableRow?: InsertTableRowRequest | null;

		/** Inserts text at the specified location. */
		insertText?: InsertTextRequest | null;

		/** Merges cells in a Table. */
		mergeTableCells?: MergeTableCellsRequest | null;

		/** Replaces all instances of text matching a criteria with replace text. */
		replaceAllText?: ReplaceAllTextRequest | null;

		/**
		 * Replaces an existing image with a new image.
		 * Replacing an image removes some image effects from the existing image in order to
		 * mirror the behavior of the Docs editor.
		 */
		replaceImage?: ReplaceImageRequest | null;

		/**
		 * Replaces the contents of the specified
		 * NamedRange or
		 * NamedRanges with the given replacement
		 * content.
		 * Note that an individual NamedRange may
		 * consist of multiple discontinuous
		 * ranges. In this case, only the
		 * content in the first range will be replaced. The other ranges and their
		 * content will be deleted.
		 * In cases where replacing or deleting any ranges would result in an invalid
		 * document structure, a 400 bad request error is returned.
		 */
		replaceNamedRangeContent?: ReplaceNamedRangeContentRequest | null;

		/** Unmerges cells in a Table. */
		unmergeTableCells?: UnmergeTableCellsRequest | null;

		/** Updates the DocumentStyle. */
		updateDocumentStyle?: UpdateDocumentStyleRequest | null;

		/** Update the styling of all paragraphs that overlap with the given range. */
		updateParagraphStyle?: UpdateParagraphStyleRequest | null;

		/** Updates the SectionStyle. */
		updateSectionStyle?: UpdateSectionStyleRequest | null;

		/** Updates the style of a range of table cells. */
		updateTableCellStyle?: UpdateTableCellStyleRequest | null;

		/**
		 * Updates the
		 * TableColumnProperties of columns
		 * in a table.
		 */
		updateTableColumnProperties?: UpdateTableColumnPropertiesRequest | null;

		/**
		 * Updates the TableRowStyle of rows in a
		 * table.
		 */
		updateTableRowStyle?: UpdateTableRowStyleRequest | null;

		/** Update the styling of text. */
		updateTextStyle?: UpdateTextStyleRequest | null;
	}


	/**
	 * Creates a Footer. The new footer is applied to
	 * the SectionStyle at the location of the
	 * SectionBreak if specificed, otherwise
	 * it is applied to the DocumentStyle.
	 * If a footer of the specified type already exists, a 400 bad request error
	 * is returned.
	 */
	export interface CreateFooterRequest {

		/** A particular location in the document. */
		sectionBreakLocation?: Location | null;

		/** The type of footer to create. */
		type?: CreateFooterRequestType | null;
	}


	/** A particular location in the document. */
	export interface Location {

		/**
		 * The zero-based index, in UTF-16 code units.
		 * The index is relative to the beginning of the segment specified by
		 * segment_id.
		 */
		index?: number | null;

		/**
		 * The ID of the header, footer or footnote the location is in. An empty
		 * segment ID signifies the document's body.
		 */
		segmentId?: string | null;
	}

	export enum CreateFooterRequestType { HEADER_FOOTER_TYPE_UNSPECIFIED = 0, DEFAULT = 1 }


	/**
	 * Creates a Footnote segment
	 * and inserts a new FootnoteReference
	 * to it at the given location.
	 * The new Footnote segment will contain a
	 * space followed by a newline character.
	 */
	export interface CreateFootnoteRequest {

		/**
		 * Location at the end of a body, header, footer or footnote. The location is
		 * immediately before the last newline in the document segment.
		 */
		endOfSegmentLocation?: EndOfSegmentLocation | null;

		/** A particular location in the document. */
		location?: Location | null;
	}


	/**
	 * Location at the end of a body, header, footer or footnote. The location is
	 * immediately before the last newline in the document segment.
	 */
	export interface EndOfSegmentLocation {

		/**
		 * The ID of the header, footer or footnote the location is in. An empty
		 * segment ID signifies the document's body.
		 */
		segmentId?: string | null;
	}


	/**
	 * Creates a Header. The new header is applied to
	 * the SectionStyle at the location of the
	 * SectionBreak if specificed, otherwise
	 * it is applied to the DocumentStyle.
	 * If a header of the specified type already exists, a 400 bad request error
	 * is returned.
	 */
	export interface CreateHeaderRequest {

		/** A particular location in the document. */
		sectionBreakLocation?: Location | null;

		/** The type of header to create. */
		type?: CreateFooterRequestType | null;
	}


	/**
	 * Creates a NamedRange referencing the given
	 * range.
	 */
	export interface CreateNamedRangeRequest {

		/**
		 * The name of the NamedRange. Names do not need to be unique.
		 * Names must be at least 1 character and no more than 256 characters,
		 * measured in UTF-16 code units.
		 */
		name?: string | null;

		/** Specifies a contiguous range of text. */
		range?: Range | null;
	}


	/** Specifies a contiguous range of text. */
	export interface Range {

		/**
		 * The zero-based end index of this range, exclusive, in UTF-16 code units.
		 * In all current uses, an end index must be provided. This field is an
		 * Int32Value in order to accommodate future use cases with open-ended ranges.
		 */
		endIndex?: number | null;

		/**
		 * The ID of the header, footer or footnote that this range is contained in.
		 * An empty segment ID signifies the document's body.
		 */
		segmentId?: string | null;

		/**
		 * The zero-based start index of this range, in UTF-16 code units.
		 * In all current uses, a start index must be provided. This field is an
		 * Int32Value in order to accommodate future use cases with open-ended ranges.
		 */
		startIndex?: number | null;
	}


	/**
	 * Creates bullets for all of the paragraphs that overlap with the given range.
	 * The nesting level of each paragraph will be determined by counting leading
	 * tabs in front of each paragraph. To avoid excess space between the bullet and
	 * the corresponding paragraph, these leading tabs are removed by this request.
	 * This may change the indices of parts of the text.
	 * If the paragraph immediately before paragraphs being updated is in a list
	 * with a matching preset, the paragraphs being updated are added to that
	 * preceding list.
	 */
	export interface CreateParagraphBulletsRequest {

		/** The kinds of bullet glyphs to be used. */
		bulletPreset?: CreateParagraphBulletsRequestBulletPreset | null;

		/** Specifies a contiguous range of text. */
		range?: Range | null;
	}

	export enum CreateParagraphBulletsRequestBulletPreset { BULLET_GLYPH_PRESET_UNSPECIFIED = 0, BULLET_DISC_CIRCLE_SQUARE = 1, BULLET_DIAMONDX_ARROW3D_SQUARE = 2, BULLET_CHECKBOX = 3, BULLET_ARROW_DIAMOND_DISC = 4, BULLET_STAR_CIRCLE_SQUARE = 5, BULLET_ARROW3D_CIRCLE_SQUARE = 6, BULLET_LEFTTRIANGLE_DIAMOND_DISC = 7, BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE = 8, BULLET_DIAMOND_CIRCLE_SQUARE = 9, NUMBERED_DECIMAL_ALPHA_ROMAN = 10, NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS = 11, NUMBERED_DECIMAL_NESTED = 12, NUMBERED_UPPERALPHA_ALPHA_ROMAN = 13, NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL = 14, NUMBERED_ZERODECIMAL_ALPHA_ROMAN = 15 }


	/** Deletes content from the document. */
	export interface DeleteContentRangeRequest {

		/** Specifies a contiguous range of text. */
		range?: Range | null;
	}


	/** Deletes a Footer from the document. */
	export interface DeleteFooterRequest {

		/**
		 * The id of the footer to delete. If this footer is defined on
		 * DocumentStyle, the reference to
		 * this footer is removed, resulting in no footer of that type for
		 * the first section of the document. If this footer is defined on a
		 * SectionStyle, the reference to this
		 * footer is removed and the footer of that type is now continued from
		 * the previous section.
		 */
		footerId?: string | null;
	}


	/** Deletes a Header from the document. */
	export interface DeleteHeaderRequest {

		/**
		 * The id of the header to delete. If this header is defined on
		 * DocumentStyle, the reference to
		 * this header is removed, resulting in no header of that type for
		 * the first section of the document. If this header is defined on a
		 * SectionStyle, the reference to this
		 * header is removed and the header of that type is now continued from
		 * the previous section.
		 */
		headerId?: string | null;
	}


	/** Deletes a NamedRange. */
	export interface DeleteNamedRangeRequest {

		/**
		 * The name of the range(s) to delete. All named ranges with the given
		 * name will be deleted.
		 */
		name?: string | null;

		/** The ID of the named range to delete. */
		namedRangeId?: string | null;
	}


	/**
	 * Deletes bullets from all of the paragraphs that overlap with the given range.
	 * The nesting level of each paragraph will be visually preserved by adding
	 * indent to the start of the corresponding paragraph.
	 */
	export interface DeleteParagraphBulletsRequest {

		/** Specifies a contiguous range of text. */
		range?: Range | null;
	}


	/**
	 * Deletes a PositionedObject from the
	 * document.
	 */
	export interface DeletePositionedObjectRequest {

		/** The ID of the positioned object to delete. */
		objectId?: string | null;
	}


	/** Deletes a column from a table. */
	export interface DeleteTableColumnRequest {

		/** Location of a single cell within a table. */
		tableCellLocation?: TableCellLocation | null;
	}


	/** Location of a single cell within a table. */
	export interface TableCellLocation {

		/**
		 * The zero-based column index. For example, the second column in the table
		 * has a column index of 1.
		 */
		columnIndex?: number | null;

		/**
		 * The zero-based row index. For example, the second row in the table has a
		 * row index of 1.
		 */
		rowIndex?: number | null;

		/** A particular location in the document. */
		tableStartLocation?: Location | null;
	}


	/** Deletes a row from a table. */
	export interface DeleteTableRowRequest {

		/** Location of a single cell within a table. */
		tableCellLocation?: TableCellLocation | null;
	}


	/**
	 * Inserts an InlineObject containing an
	 * image at the given location.
	 */
	export interface InsertInlineImageRequest {

		/**
		 * Location at the end of a body, header, footer or footnote. The location is
		 * immediately before the last newline in the document segment.
		 */
		endOfSegmentLocation?: EndOfSegmentLocation | null;

		/** A particular location in the document. */
		location?: Location | null;

		/** A width and height. */
		objectSize?: Size | null;

		/**
		 * The image URI.
		 * The image is fetched once at insertion time and a copy is stored for
		 * display inside the document. Images must be less than 50MB in size, cannot
		 * exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format.
		 * The provided URI can be at most 2 kB in length. The URI itself is saved
		 * with the image, and exposed via the ImageProperties.content_uri field.
		 */
		uri?: string | null;
	}


	/** A width and height. */
	export interface Size {

		/** A magnitude in a single direction in the specified units. */
		height?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		width?: Dimension | null;
	}


	/** Inserts a page break followed by a newline at the specified location. */
	export interface InsertPageBreakRequest {

		/**
		 * Location at the end of a body, header, footer or footnote. The location is
		 * immediately before the last newline in the document segment.
		 */
		endOfSegmentLocation?: EndOfSegmentLocation | null;

		/** A particular location in the document. */
		location?: Location | null;
	}


	/**
	 * Inserts a section break at the given location.
	 * A newline character will be inserted before the section break.
	 */
	export interface InsertSectionBreakRequest {

		/**
		 * Location at the end of a body, header, footer or footnote. The location is
		 * immediately before the last newline in the document segment.
		 */
		endOfSegmentLocation?: EndOfSegmentLocation | null;

		/** A particular location in the document. */
		location?: Location | null;

		/** The type of section to insert. */
		sectionType?: InsertSectionBreakRequestSectionType | null;
	}

	export enum InsertSectionBreakRequestSectionType { SECTION_TYPE_UNSPECIFIED = 0, CONTINUOUS = 1, NEXT_PAGE = 2 }


	/**
	 * Inserts a table at the specified location.
	 * A newline character will be inserted before the inserted table.
	 */
	export interface InsertTableRequest {

		/** The number of columns in the table. */
		columns?: number | null;

		/**
		 * Location at the end of a body, header, footer or footnote. The location is
		 * immediately before the last newline in the document segment.
		 */
		endOfSegmentLocation?: EndOfSegmentLocation | null;

		/** A particular location in the document. */
		location?: Location | null;

		/** The number of rows in the table. */
		rows?: number | null;
	}


	/** Inserts an empty column into a table. */
	export interface InsertTableColumnRequest {

		/**
		 * Whether to insert new column to the right of the reference cell location.
		 * - `True`: insert to the right.
		 * - `False`: insert to the left.
		 */
		insertRight?: boolean | null;

		/** Location of a single cell within a table. */
		tableCellLocation?: TableCellLocation | null;
	}


	/** Inserts an empty row into a table. */
	export interface InsertTableRowRequest {

		/**
		 * Whether to insert new row below the reference cell location.
		 * - `True`: insert below the cell.
		 * - `False`: insert above the cell.
		 */
		insertBelow?: boolean | null;

		/** Location of a single cell within a table. */
		tableCellLocation?: TableCellLocation | null;
	}


	/** Inserts text at the specified location. */
	export interface InsertTextRequest {

		/**
		 * Location at the end of a body, header, footer or footnote. The location is
		 * immediately before the last newline in the document segment.
		 */
		endOfSegmentLocation?: EndOfSegmentLocation | null;

		/** A particular location in the document. */
		location?: Location | null;

		/**
		 * The text to be inserted.
		 * Inserting a newline character will implicitly create a new
		 * Paragraph at that index.
		 * The paragraph style of the new paragraph will be copied from the paragraph
		 * at the current insertion index, including lists and bullets.
		 * Text styles for inserted text will be determined automatically, generally
		 * preserving the styling of neighboring text. In most cases, the text style
		 * for the inserted text will match the text immediately before the insertion
		 * index.
		 * Some control characters (U+0000-U+0008, U+000C-U+001F) and characters
		 * from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF)
		 * will be stripped out of the inserted text.
		 */
		text?: string | null;
	}


	/** Merges cells in a Table. */
	export interface MergeTableCellsRequest {

		/**
		 * A table range represents a reference to a subset of a table.
		 * It's important to note that the cells specified by a table range do not
		 * necessarily form a rectangle. For example, let's say we have a 3 x 3 table
		 * where all the cells of the last row are merged together. The table looks
		 * like this:
		 * [             ]
		 * A table range with table cell location = (table_start_location, row = 0,
		 * column = 0), row span = 3 and column span = 2 specifies the following cells:
		 * x     x
		 * [ x    x    x ]
		 */
		tableRange?: TableRange | null;
	}


	/**
	 * A table range represents a reference to a subset of a table.
	 * It's important to note that the cells specified by a table range do not
	 * necessarily form a rectangle. For example, let's say we have a 3 x 3 table
	 * where all the cells of the last row are merged together. The table looks
	 * like this:
	 *               
	 *      [             ]
	 * A table range with table cell location = (table_start_location, row = 0,
	 * column = 0), row span = 3 and column span = 2 specifies the following cells:
	 *       x     x 
	 *      [ x    x    x ]
	 */
	export interface TableRange {

		/** The column span of the table range. */
		columnSpan?: number | null;

		/** The row span of the table range. */
		rowSpan?: number | null;

		/** Location of a single cell within a table. */
		tableCellLocation?: TableCellLocation | null;
	}


	/** Replaces all instances of text matching a criteria with replace text. */
	export interface ReplaceAllTextRequest {

		/** A criteria that matches a specific string of text in the document. */
		containsText?: SubstringMatchCriteria | null;

		/** The text that will replace the matched text. */
		replaceText?: string | null;
	}


	/** A criteria that matches a specific string of text in the document. */
	export interface SubstringMatchCriteria {

		/**
		 * Indicates whether the search should respect case:
		 * - `True`: the search is case sensitive.
		 * - `False`: the search is case insensitive.
		 */
		matchCase?: boolean | null;

		/** The text to search for in the document. */
		text?: string | null;
	}


	/**
	 * Replaces an existing image with a new image.
	 * Replacing an image removes some image effects from the existing image in order to
	 * mirror the behavior of the Docs editor.
	 */
	export interface ReplaceImageRequest {

		/** The ID of the existing image that will be replaced. */
		imageObjectId?: string | null;

		/** The replacement method. */
		imageReplaceMethod?: ReplaceImageRequestImageReplaceMethod | null;

		/**
		 * The URI of the new image.
		 * The image is fetched once at insertion time and a copy is stored for
		 * display inside the document. Images must be less than 50MB in size, cannot
		 * exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format.
		 * The provided URI can be at most 2 kB in length. The URI itself is saved
		 * with the image, and exposed via the ImageProperties.source_uri field.
		 */
		uri?: string | null;
	}

	export enum ReplaceImageRequestImageReplaceMethod { IMAGE_REPLACE_METHOD_UNSPECIFIED = 0, CENTER_CROP = 1 }


	/**
	 * Replaces the contents of the specified
	 * NamedRange or
	 * NamedRanges with the given replacement
	 * content.
	 * Note that an individual NamedRange may
	 * consist of multiple discontinuous
	 * ranges. In this case, only the
	 * content in the first range will be replaced. The other ranges and their
	 * content will be deleted.
	 * In cases where replacing or deleting any ranges would result in an invalid
	 * document structure, a 400 bad request error is returned.
	 */
	export interface ReplaceNamedRangeContentRequest {

		/**
		 * The ID of the named range whose content will be replaced.
		 * If there is no named range with the given ID a 400 bad request error is
		 * returned.
		 */
		namedRangeId?: string | null;

		/**
		 * The name of the NamedRanges whose
		 * content will be replaced.
		 * If there are multiple named ranges with the given name, then
		 * the content of each one will be replaced. If there are no named ranges
		 * with the given name, then the request will be a no-op.
		 */
		namedRangeName?: string | null;

		/** Replaces the content of the specified named range(s) with the given text. */
		text?: string | null;
	}


	/** Unmerges cells in a Table. */
	export interface UnmergeTableCellsRequest {

		/**
		 * A table range represents a reference to a subset of a table.
		 * It's important to note that the cells specified by a table range do not
		 * necessarily form a rectangle. For example, let's say we have a 3 x 3 table
		 * where all the cells of the last row are merged together. The table looks
		 * like this:
		 * [             ]
		 * A table range with table cell location = (table_start_location, row = 0,
		 * column = 0), row span = 3 and column span = 2 specifies the following cells:
		 * x     x
		 * [ x    x    x ]
		 */
		tableRange?: TableRange | null;
	}


	/** Updates the DocumentStyle. */
	export interface UpdateDocumentStyleRequest {

		/** The style of the document. */
		documentStyle?: DocumentStyle | null;

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `document_style` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the background, set `fields` to `"background"`.
		 */
		fields?: string | null;
	}


	/** The style of the document. */
	export interface DocumentStyle {

		/** Represents the background of a document. */
		background?: Background | null;

		/**
		 * The ID of the default footer. If not set, there is no default footer.
		 * This property is read-only.
		 */
		defaultFooterId?: string | null;

		/**
		 * The ID of the default header. If not set, there is no default header.
		 * This property is read-only.
		 */
		defaultHeaderId?: string | null;

		/**
		 * The ID of the footer used only for even pages. The value of
		 * use_even_page_header_footer determines
		 * whether to use the default_footer_id or this value for the
		 * footer on even pages. If not set, there is no even page footer.
		 * This property is read-only.
		 */
		evenPageFooterId?: string | null;

		/**
		 * The ID of the header used only for even pages. The value of
		 * use_even_page_header_footer determines
		 * whether to use the default_header_id or this value for the
		 * header on even pages. If not set, there is no even page header.
		 * This property is read-only.
		 */
		evenPageHeaderId?: string | null;

		/**
		 * The ID of the footer used only for the first page. If not set then
		 * a unique footer for the first page does not exist. The value of
		 * use_first_page_header_footer determines
		 * whether to use the default_footer_id or this value for the
		 * footer on the first page. If not set, there is no first page footer.
		 * This property is read-only.
		 */
		firstPageFooterId?: string | null;

		/**
		 * The ID of the header used only for the first page. If not set then
		 * a unique header for the first page does not exist.
		 * The value of use_first_page_header_footer determines
		 * whether to use the default_header_id or this value for the
		 * header on the first page. If not set, there is no first page header.
		 * This property is read-only.
		 */
		firstPageHeaderId?: string | null;

		/** A magnitude in a single direction in the specified units. */
		marginBottom?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginFooter?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginHeader?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginLeft?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginRight?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginTop?: Dimension | null;

		/** The page number from which to start counting the number of pages. */
		pageNumberStart?: number | null;

		/** A width and height. */
		pageSize?: Size | null;

		/**
		 * Indicates whether DocumentStyle
		 * margin_header,
		 * SectionStyle
		 * margin_header and
		 * DocumentStyle
		 * margin_footer,
		 * SectionStyle
		 * margin_footer are
		 * respected. When false, the default values in the Docs editor for header and
		 * footer margin are used.
		 * This property is read-only.
		 */
		useCustomHeaderFooterMargins?: boolean | null;

		/**
		 * Indicates whether to use the even page header / footer IDs for the even
		 * pages.
		 */
		useEvenPageHeaderFooter?: boolean | null;

		/**
		 * Indicates whether to use the first page header / footer IDs for the first
		 * page.
		 */
		useFirstPageHeaderFooter?: boolean | null;
	}


	/** Update the styling of all paragraphs that overlap with the given range. */
	export interface UpdateParagraphStyleRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `paragraph_style` is implied
		 * and should not be specified.
		 * For example, to update the paragraph style's alignment property, set
		 * `fields` to `"alignment"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string | null;

		/**
		 * Styles that apply to a whole paragraph.
		 * Inherited paragraph styles are represented as unset fields in this message.
		 * A paragraph style's parent depends on where the paragraph style is defined:
		 * * The ParagraphStyle on a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The ParagraphStyle on a named style
		 * inherits from the normal text named style.
		 * * The ParagraphStyle of the normal text named style inherits
		 * from the default paragraph style in the Docs editor.
		 * * The ParagraphStyle on a Paragraph
		 * element that is contained in a table may inherit its paragraph style from
		 * the table style.
		 * If the paragraph style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		paragraphStyle?: ParagraphStyle | null;

		/** Specifies a contiguous range of text. */
		range?: Range | null;
	}


	/**
	 * Styles that apply to a whole paragraph.
	 * Inherited paragraph styles are represented as unset fields in this message.
	 * A paragraph style's parent depends on where the paragraph style is defined:
	 *   * The ParagraphStyle on a Paragraph
	 *     inherits from the paragraph's corresponding named style type.
	 *   * The ParagraphStyle on a named style
	 *     inherits from the normal text named style.
	 *   * The ParagraphStyle of the normal text named style inherits
	 *     from the default paragraph style in the Docs editor.
	 *   * The ParagraphStyle on a Paragraph
	 *     element that is contained in a table may inherit its paragraph style from
	 *     the table style.
	 * If the paragraph style does not inherit from a parent, unsetting fields will
	 * revert the style to a value matching the defaults in the Docs editor.
	 */
	export interface ParagraphStyle {

		/** The text alignment for this paragraph. */
		alignment?: ParagraphStyleAlignment | null;

		/**
		 * Whether to avoid widows and orphans for the paragraph. If unset, the value
		 * is inherited from the parent.
		 */
		avoidWidowAndOrphan?: boolean | null;

		/** A border around a paragraph. */
		borderBetween?: ParagraphBorder | null;

		/** A border around a paragraph. */
		borderBottom?: ParagraphBorder | null;

		/** A border around a paragraph. */
		borderLeft?: ParagraphBorder | null;

		/** A border around a paragraph. */
		borderRight?: ParagraphBorder | null;

		/** A border around a paragraph. */
		borderTop?: ParagraphBorder | null;

		/**
		 * The text direction of this paragraph. If unset, the value defaults to
		 * LEFT_TO_RIGHT since
		 * paragraph direction is not inherited.
		 */
		direction?: ParagraphStyleDirection | null;

		/**
		 * The heading ID of the paragraph. If empty, then this paragraph is not a
		 * heading.
		 * This property is read-only.
		 */
		headingId?: string | null;

		/** A magnitude in a single direction in the specified units. */
		indentEnd?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		indentFirstLine?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		indentStart?: Dimension | null;

		/**
		 * Whether all lines of the paragraph should be laid out on the same page or
		 * column if possible. If unset, the value is inherited from the parent.
		 */
		keepLinesTogether?: boolean | null;

		/**
		 * Whether at least a part of this paragraph should be laid out on the same
		 * page or column as the next paragraph if possible. If unset, the value is
		 * inherited from the parent.
		 */
		keepWithNext?: boolean | null;

		/**
		 * The amount of space between lines, as a percentage of normal, where normal
		 * is represented as 100.0. If unset, the value is inherited from the parent.
		 */
		lineSpacing?: number | null;

		/**
		 * The named style type of the paragraph.
		 * Since updating the named style type affects other properties within
		 * ParagraphStyle, the named style type is applied before the other properties
		 * are updated.
		 */
		namedStyleType?: ParagraphStyleNamedStyleType | null;

		/** The shading of a paragraph. */
		shading?: Shading | null;

		/** A magnitude in a single direction in the specified units. */
		spaceAbove?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		spaceBelow?: Dimension | null;

		/** The spacing mode for the paragraph. */
		spacingMode?: ParagraphStyleSpacingMode | null;

		/**
		 * A list of the tab stops for this paragraph. The list of tab stops is not
		 * inherited.
		 * This property is read-only.
		 */
		tabStops?: Array<TabStop> | null;
	}

	export enum ParagraphStyleAlignment { ALIGNMENT_UNSPECIFIED = 0, START = 1, CENTER = 2, END = 3, JUSTIFIED = 4 }


	/** A border around a paragraph. */
	export interface ParagraphBorder {

		/** A color that can either be fully opaque or fully transparent. */
		color?: OptionalColor | null;

		/** The dash style of the border. */
		dashStyle?: ParagraphBorderDashStyle | null;

		/** A magnitude in a single direction in the specified units. */
		padding?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		width?: Dimension | null;
	}

	export enum ParagraphBorderDashStyle { DASH_STYLE_UNSPECIFIED = 0, SOLID = 1, DOT = 2, DASH = 3 }

	export enum ParagraphStyleDirection { CONTENT_DIRECTION_UNSPECIFIED = 0, LEFT_TO_RIGHT = 1, RIGHT_TO_LEFT = 2 }

	export enum ParagraphStyleNamedStyleType { NAMED_STYLE_TYPE_UNSPECIFIED = 0, NORMAL_TEXT = 1, TITLE = 2, SUBTITLE = 3, HEADING_1 = 4, HEADING_2 = 5, HEADING_3 = 6, HEADING_4 = 7, HEADING_5 = 8, HEADING_6 = 9 }


	/** The shading of a paragraph. */
	export interface Shading {

		/** A color that can either be fully opaque or fully transparent. */
		backgroundColor?: OptionalColor | null;
	}

	export enum ParagraphStyleSpacingMode { SPACING_MODE_UNSPECIFIED = 0, NEVER_COLLAPSE = 1, COLLAPSE_LISTS = 2 }


	/** A tab stop within a paragraph. */
	export interface TabStop {

		/** The alignment of this tab stop. If unset, the value defaults to START. */
		alignment?: TabStopAlignment | null;

		/** A magnitude in a single direction in the specified units. */
		offset?: Dimension | null;
	}

	export enum TabStopAlignment { TAB_STOP_ALIGNMENT_UNSPECIFIED = 0, START = 1, CENTER = 2, END = 3 }


	/** Updates the SectionStyle. */
	export interface UpdateSectionStyleRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `section_style` is
		 * implied and must not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the left margin, set `fields` to `"margin_left"`.
		 */
		fields?: string | null;

		/** Specifies a contiguous range of text. */
		range?: Range | null;

		/** The styling that applies to a section. */
		sectionStyle?: SectionStyle | null;
	}


	/** The styling that applies to a section. */
	export interface SectionStyle {

		/**
		 * The section's columns properties.
		 * If empty, the section contains one column with the default properties in
		 * the Docs editor.
		 * A section can be updated to have no more than three columns.
		 * When updating this property, setting a concrete value is required.
		 * Unsetting this property will result in a 400 bad request error.
		 */
		columnProperties?: Array<SectionColumnProperties> | null;

		/**
		 * The style of column separators.
		 * This style can be set even when there is one column in the section.
		 * When updating this property, setting a concrete value is required.
		 * Unsetting this property results in a 400 bad request error.
		 */
		columnSeparatorStyle?: SectionStyleColumnSeparatorStyle | null;

		/**
		 * The content direction of this section. If unset, the value defaults to
		 * LEFT_TO_RIGHT.
		 * When updating this property, setting a concrete value is required.
		 * Unsetting this property results in a 400 bad request error.
		 */
		contentDirection?: ParagraphStyleDirection | null;

		/**
		 * The ID of the default footer. If unset, the value inherits from the
		 * previous SectionBreak's SectionStyle.
		 * If the value is unset in the first SectionBreak, it inherits from
		 * DocumentStyle's default_footer_id.
		 * This property is read-only.
		 */
		defaultFooterId?: string | null;

		/**
		 * The ID of the default header. If unset, the value inherits from the
		 * previous SectionBreak's SectionStyle.
		 * If the value is unset in the first SectionBreak, it inherits from
		 * DocumentStyle's default_header_id.
		 * This property is read-only.
		 */
		defaultHeaderId?: string | null;

		/**
		 * The ID of the footer used only for even pages. If the value of
		 * DocumentStyle's use_even_page_header_footer is true,
		 * this value is used for the footers on even pages in the section. If it
		 * is false, the footers on even pages uses the default_footer_id. If unset, the value
		 * inherits from the previous SectionBreak's SectionStyle. If the value is unset in
		 * the first SectionBreak, it inherits from DocumentStyle's
		 * even_page_footer_id.
		 * This property is read-only.
		 */
		evenPageFooterId?: string | null;

		/**
		 * The ID of the header used only for even pages. If the value of
		 * DocumentStyle's use_even_page_header_footer is true,
		 * this value is used for the headers on even pages in the section. If it
		 * is false, the headers on even pages uses the default_header_id. If unset, the value
		 * inherits from the previous SectionBreak's SectionStyle. If the value is unset in
		 * the first SectionBreak, it inherits from DocumentStyle's
		 * even_page_header_id.
		 * This property is read-only.
		 */
		evenPageHeaderId?: string | null;

		/**
		 * The ID of the footer used only for the first page of the section.
		 * If use_first_page_header_footer is true,
		 * this value is used for the footer on the first page of the section. If
		 * it is false, the footer on the first page of the section uses the
		 * default_footer_id.
		 * If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in
		 * the first SectionBreak, it inherits from DocumentStyle's
		 * first_page_footer_id.
		 * This property is read-only.
		 */
		firstPageFooterId?: string | null;

		/**
		 * The ID of the header used only for the first page of the section.
		 * If use_first_page_header_footer is true,
		 * this value is used for the header on the first page of the section. If
		 * it is false, the header on the first page of the section uses the
		 * default_header_id.
		 * If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in
		 * the first SectionBreak, it inherits from DocumentStyle's
		 * first_page_header_id.
		 * This property is read-only.
		 */
		firstPageHeaderId?: string | null;

		/** A magnitude in a single direction in the specified units. */
		marginBottom?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginFooter?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginHeader?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginLeft?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginRight?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginTop?: Dimension | null;

		/**
		 * The page number from which to start counting the number of pages for this
		 * section. If unset, page numbering continues from the previous section.
		 * If the value is unset in the first
		 * SectionBreak, refer to DocumentStyle's
		 * page_number_start.
		 * When updating this property, setting a concrete value is required.
		 * Unsetting this property results in a 400 bad request error.
		 */
		pageNumberStart?: number | null;

		/** Output only. The type of section. */
		sectionType?: InsertSectionBreakRequestSectionType | null;

		/**
		 * Indicates whether to use the first page header / footer IDs for the first
		 * page of the section. If unset, it inherits from DocumentStyle's
		 * use_first_page_header_footer for the
		 * first section. If the value is unset for subsequent sectors, it should be
		 * interpreted as false.
		 * When updating this property, setting a concrete value is required.
		 * Unsetting this property results in a 400 bad request error.
		 */
		useFirstPageHeaderFooter?: boolean | null;
	}


	/** Properties that apply to a section's column. */
	export interface SectionColumnProperties {

		/** A magnitude in a single direction in the specified units. */
		paddingEnd?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		width?: Dimension | null;
	}

	export enum SectionStyleColumnSeparatorStyle { COLUMN_SEPARATOR_STYLE_UNSPECIFIED = 0, NONE = 1, BETWEEN_EACH_COLUMN = 2 }


	/** Updates the style of a range of table cells. */
	export interface UpdateTableCellStyleRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `tableCellStyle` is implied
		 * and should not be specified. A single `"*"` can be used as short-hand for
		 * listing every field.
		 * For example to update the table cell background color, set `fields` to
		 * `"backgroundColor"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string | null;

		/**
		 * The style of a TableCell.
		 * Inherited table cell styles are represented as unset fields in this message.
		 * A table cell style can inherit from the table's style.
		 */
		tableCellStyle?: TableCellStyle | null;

		/**
		 * A table range represents a reference to a subset of a table.
		 * It's important to note that the cells specified by a table range do not
		 * necessarily form a rectangle. For example, let's say we have a 3 x 3 table
		 * where all the cells of the last row are merged together. The table looks
		 * like this:
		 * [             ]
		 * A table range with table cell location = (table_start_location, row = 0,
		 * column = 0), row span = 3 and column span = 2 specifies the following cells:
		 * x     x
		 * [ x    x    x ]
		 */
		tableRange?: TableRange | null;

		/** A particular location in the document. */
		tableStartLocation?: Location | null;
	}


	/**
	 * The style of a TableCell.
	 * Inherited table cell styles are represented as unset fields in this message.
	 * A table cell style can inherit from the table's style.
	 */
	export interface TableCellStyle {

		/** A color that can either be fully opaque or fully transparent. */
		backgroundColor?: OptionalColor | null;

		/**
		 * A border around a table cell.
		 * Table cell borders cannot be transparent. To hide a table cell border, make
		 * its width 0.
		 */
		borderBottom?: TableCellBorder | null;

		/**
		 * A border around a table cell.
		 * Table cell borders cannot be transparent. To hide a table cell border, make
		 * its width 0.
		 */
		borderLeft?: TableCellBorder | null;

		/**
		 * A border around a table cell.
		 * Table cell borders cannot be transparent. To hide a table cell border, make
		 * its width 0.
		 */
		borderRight?: TableCellBorder | null;

		/**
		 * A border around a table cell.
		 * Table cell borders cannot be transparent. To hide a table cell border, make
		 * its width 0.
		 */
		borderTop?: TableCellBorder | null;

		/**
		 * The column span of the cell.
		 * This property is read-only.
		 */
		columnSpan?: number | null;

		/**
		 * The alignment of the content in the table cell. The default alignment
		 * matches the alignment for newly created table cells in the Docs editor.
		 */
		contentAlignment?: TableCellStyleContentAlignment | null;

		/** A magnitude in a single direction in the specified units. */
		paddingBottom?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		paddingLeft?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		paddingRight?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		paddingTop?: Dimension | null;

		/**
		 * The row span of the cell.
		 * This property is read-only.
		 */
		rowSpan?: number | null;
	}


	/**
	 * A border around a table cell.
	 * Table cell borders cannot be transparent. To hide a table cell border, make
	 * its width 0.
	 */
	export interface TableCellBorder {

		/** A color that can either be fully opaque or fully transparent. */
		color?: OptionalColor | null;

		/** The dash style of the border. */
		dashStyle?: ParagraphBorderDashStyle | null;

		/** A magnitude in a single direction in the specified units. */
		width?: Dimension | null;
	}

	export enum TableCellStyleContentAlignment { CONTENT_ALIGNMENT_UNSPECIFIED = 0, CONTENT_ALIGNMENT_UNSUPPORTED = 1, TOP = 2, MIDDLE = 3, BOTTOM = 4 }


	/**
	 * Updates the
	 * TableColumnProperties of columns
	 * in a table.
	 */
	export interface UpdateTableColumnPropertiesRequest {

		/**
		 * The list of zero-based column indices whose property should be updated. If
		 * no indices are specified, all columns will be updated.
		 */
		columnIndices?: Array<number> | null;

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `tableColumnProperties` is
		 * implied and should not be specified. A single `"*"` can be used as
		 * short-hand for listing every field.
		 * For example to update the column width, set `fields` to `"width"`.
		 */
		fields?: string | null;

		/** The properties of a column in a table. */
		tableColumnProperties?: TableColumnProperties | null;

		/** A particular location in the document. */
		tableStartLocation?: Location | null;
	}


	/** The properties of a column in a table. */
	export interface TableColumnProperties {

		/** A magnitude in a single direction in the specified units. */
		width?: Dimension | null;

		/** The width type of the column. */
		widthType?: TableColumnPropertiesWidthType | null;
	}

	export enum TableColumnPropertiesWidthType { WIDTH_TYPE_UNSPECIFIED = 0, EVENLY_DISTRIBUTED = 1, FIXED_WIDTH = 2 }


	/**
	 * Updates the TableRowStyle of rows in a
	 * table.
	 */
	export interface UpdateTableRowStyleRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `tableRowStyle` is implied
		 * and should not be specified. A single `"*"` can be used as short-hand for
		 * listing every field.
		 * For example to update the minimum row height, set `fields` to
		 * `"min_row_height"`.
		 */
		fields?: string | null;

		/**
		 * The list of zero-based row indices whose style should be updated. If no
		 * indices are specified, all rows will be updated.
		 */
		rowIndices?: Array<number> | null;

		/** Styles that apply to a table row. */
		tableRowStyle?: TableRowStyle | null;

		/** A particular location in the document. */
		tableStartLocation?: Location | null;
	}


	/** Styles that apply to a table row. */
	export interface TableRowStyle {

		/** A magnitude in a single direction in the specified units. */
		minRowHeight?: Dimension | null;
	}


	/** Update the styling of text. */
	export interface UpdateTextStyleRequest {

		/**
		 * The fields that should be updated.
		 * At least one field must be specified. The root `text_style` is implied and
		 * should not be specified. A single `"*"` can be used as short-hand for
		 * listing every field.
		 * For example, to update the text style to bold, set `fields` to `"bold"`.
		 * To reset a property to its default value, include its field name in the
		 * field mask but leave the field itself unset.
		 */
		fields?: string | null;

		/** Specifies a contiguous range of text. */
		range?: Range | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;
	}


	/** Provides control over how write requests are executed. */
	export interface WriteControl {

		/**
		 * The revision ID of the
		 * document that the write request will be applied to. If this is not the
		 * latest revision of the document, the request will not be processed and
		 * will return a 400 bad request error.
		 * When a required revision ID is returned in a response, it indicates the
		 * revision ID of the document after the request was applied.
		 */
		requiredRevisionId?: string | null;

		/**
		 * The target revision ID of the
		 * document that the write request will be applied to.
		 * If collaborator changes have occurred after the document was read using
		 * the API, the changes produced by this write request will be transformed
		 * against the collaborator changes. This results in a new revision of the
		 * document which incorporates both the changes in the request and the
		 * collaborator changes, and the Docs server will resolve conflicting
		 * changes. When using `target_revision_id`, the API client can be thought
		 * of as another collaborator of the document.
		 * The target revision ID may only be used to write to recent versions of a
		 * document. If the target revision is too far behind the latest revision,
		 * the request will not be processed and will return a 400 bad request error
		 * and the request should be retried after reading the latest version of the
		 * document. In most cases a `revision_id` will remain valid for use as a
		 * target revision for several minutes after it is read, but for
		 * frequently-edited documents this window may be shorter.
		 */
		targetRevisionId?: string | null;
	}


	/** Response message from a BatchUpdateDocument request. */
	export interface BatchUpdateDocumentResponse {

		/** The ID of the document to which the updates were applied to. */
		documentId?: string | null;

		/**
		 * The reply of the updates. This maps 1:1 with the updates, although replies
		 * to some requests may be empty.
		 */
		replies?: Array<Response> | null;

		/** Provides control over how write requests are executed. */
		writeControl?: WriteControl | null;
	}


	/** A single response from an update. */
	export interface Response {

		/** The result of creating a footer. */
		createFooter?: CreateFooterResponse | null;

		/** The result of creating a footnote. */
		createFootnote?: CreateFootnoteResponse | null;

		/** The result of creating a header. */
		createHeader?: CreateHeaderResponse | null;

		/** The result of creating a named range. */
		createNamedRange?: CreateNamedRangeResponse | null;

		/** The result of inserting an inline image. */
		insertInlineImage?: InsertInlineImageResponse | null;

		/** The result of inserting an embedded Google Sheets chart. */
		insertInlineSheetsChart?: InsertInlineSheetsChartResponse | null;

		/** The result of replacing text. */
		replaceAllText?: ReplaceAllTextResponse | null;
	}


	/** The result of creating a footer. */
	export interface CreateFooterResponse {

		/** The ID of the created footer. */
		footerId?: string | null;
	}


	/** The result of creating a footnote. */
	export interface CreateFootnoteResponse {

		/** The ID of the created footnote. */
		footnoteId?: string | null;
	}


	/** The result of creating a header. */
	export interface CreateHeaderResponse {

		/** The ID of the created header. */
		headerId?: string | null;
	}


	/** The result of creating a named range. */
	export interface CreateNamedRangeResponse {

		/** The ID of the created named range. */
		namedRangeId?: string | null;
	}


	/** The result of inserting an inline image. */
	export interface InsertInlineImageResponse {

		/** The ID of the created InlineObject. */
		objectId?: string | null;
	}


	/** The result of inserting an embedded Google Sheets chart. */
	export interface InsertInlineSheetsChartResponse {

		/** The object ID of the inserted chart. */
		objectId?: string | null;
	}


	/** The result of replacing text. */
	export interface ReplaceAllTextResponse {

		/** The number of occurrences changed by replacing all text. */
		occurrencesChanged?: number | null;
	}


	/**
	 * The document body.
	 * The body typically contains the full document contents except for
	 * headers, footers
	 * and footnotes.
	 */
	export interface Body {

		/**
		 * The contents of the body.
		 * The indexes for the body's content begin at zero.
		 */
		content?: Array<StructuralElement> | null;
	}


	/**
	 * A StructuralElement describes content that provides structure to the
	 * document.
	 */
	export interface StructuralElement {

		/**
		 * The zero-based end index of this structural element, exclusive, in UTF-16
		 * code units.
		 */
		endIndex?: number | null;

		/**
		 * A StructuralElement representing a
		 * paragraph. A paragraph is a range of content that is terminated with a
		 * newline character.
		 */
		paragraph?: Paragraph | null;

		/**
		 * A StructuralElement representing a
		 * section break. A section is a range of content which has the same
		 * SectionStyle. A section break represents
		 * the start of a new section, and the section style applies to the section
		 * after the section break.
		 * The document body always begins with a section break.
		 */
		sectionBreak?: SectionBreak | null;

		/**
		 * The zero-based start index of this structural element, in UTF-16 code
		 * units.
		 */
		startIndex?: number | null;

		/**
		 * A StructuralElement representing a
		 * table.
		 */
		table?: Table | null;

		/**
		 * A StructuralElement representing
		 * a table of contents.
		 */
		tableOfContents?: TableOfContents | null;
	}


	/**
	 * A StructuralElement representing a
	 * paragraph. A paragraph is a range of content that is terminated with a
	 * newline character.
	 */
	export interface Paragraph {

		/** Describes the bullet of a paragraph. */
		bullet?: Bullet | null;

		/** The content of the paragraph broken down into its component parts. */
		elements?: Array<ParagraphElement> | null;

		/**
		 * Styles that apply to a whole paragraph.
		 * Inherited paragraph styles are represented as unset fields in this message.
		 * A paragraph style's parent depends on where the paragraph style is defined:
		 * * The ParagraphStyle on a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The ParagraphStyle on a named style
		 * inherits from the normal text named style.
		 * * The ParagraphStyle of the normal text named style inherits
		 * from the default paragraph style in the Docs editor.
		 * * The ParagraphStyle on a Paragraph
		 * element that is contained in a table may inherit its paragraph style from
		 * the table style.
		 * If the paragraph style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		paragraphStyle?: ParagraphStyle | null;

		/** The IDs of the positioned objects tethered to this paragraph. */
		positionedObjectIds?: Array<string> | null;

		/** The suggested changes to this paragraph's bullet. */
		suggestedBulletChanges?: {[id: string]: SuggestedBullet } | null;

		/**
		 * The suggested paragraph style changes to this paragraph, keyed by
		 * suggestion ID.
		 */
		suggestedParagraphStyleChanges?: {[id: string]: SuggestedParagraphStyle } | null;

		/**
		 * The IDs of the positioned objects that are suggested to be attached to this
		 * paragraph, keyed by suggestion ID.
		 */
		suggestedPositionedObjectIds?: {[id: string]: ObjectReferences } | null;
	}


	/** Describes the bullet of a paragraph. */
	export interface Bullet {

		/** The ID of the list this paragraph belongs to. */
		listId?: string | null;

		/** The nesting level of this paragraph in the list. */
		nestingLevel?: number | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;
	}


	/**
	 * A ParagraphElement describes content within a
	 * Paragraph.
	 */
	export interface ParagraphElement {

		/**
		 * A ParagraphElement representing a
		 * spot in the text that is dynamically replaced with content that can change
		 * over time, like a page number.
		 */
		autoText?: AutoText | null;

		/**
		 * A ParagraphElement representing a
		 * column break. A column break makes the subsequent text start at the top of
		 * the next column.
		 */
		columnBreak?: ColumnBreak | null;

		/**
		 * The zero-base end index of this paragraph element, exclusive, in UTF-16
		 * code units.
		 */
		endIndex?: number | null;

		/**
		 * A ParagraphElement representing an
		 * equation.
		 */
		equation?: Equation | null;

		/**
		 * A ParagraphElement representing a
		 * footnote reference. A footnote reference is the inline content rendered with
		 * a number and is used to identify the footnote.
		 */
		footnoteReference?: FootnoteReference | null;

		/**
		 * A ParagraphElement representing a
		 * horizontal line.
		 */
		horizontalRule?: HorizontalRule | null;

		/**
		 * A ParagraphElement that contains
		 * an InlineObject.
		 */
		inlineObjectElement?: InlineObjectElement | null;

		/**
		 * A ParagraphElement representing a
		 * page break. A page break makes the subsequent text start at the top of the
		 * next page.
		 */
		pageBreak?: PageBreak | null;

		/** The zero-based start index of this paragraph element, in UTF-16 code units. */
		startIndex?: number | null;

		/**
		 * A ParagraphElement that represents a
		 * run of text that all has the same styling.
		 */
		textRun?: TextRun | null;
	}


	/**
	 * A ParagraphElement representing a
	 * column break. A column break makes the subsequent text start at the top of
	 * the next column.
	 */
	export interface ColumnBreak {

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A ColumnBreak may have multiple insertion IDs if it is
		 * a nested suggested change. If empty, then this is not a suggested
		 * insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;

		/**
		 * The suggested text style changes to this ColumnBreak, keyed by suggestion
		 * ID.
		 */
		suggestedTextStyleChanges?: {[id: string]: SuggestedTextStyle } | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;
	}


	/**
	 * A ParagraphElement representing an
	 * equation.
	 */
	export interface Equation {

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A Equation
		 * may have multiple insertion IDs if it is a nested suggested change. If
		 * empty, then this is not a suggested insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;
	}


	/**
	 * A ParagraphElement representing a
	 * footnote reference. A footnote reference is the inline content rendered with
	 * a number and is used to identify the footnote.
	 */
	export interface FootnoteReference {

		/**
		 * The ID of the footnote that
		 * contains the content of this footnote reference.
		 */
		footnoteId?: string | null;

		/** The rendered number of this footnote. */
		footnoteNumber?: string | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A FootnoteReference may have multiple insertion IDs if
		 * it is a nested suggested change. If empty, then this is not a suggested
		 * insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;

		/**
		 * The suggested text style changes to this FootnoteReference, keyed by
		 * suggestion ID.
		 */
		suggestedTextStyleChanges?: {[id: string]: SuggestedTextStyle } | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;
	}


	/**
	 * A ParagraphElement representing a
	 * horizontal line.
	 */
	export interface HorizontalRule {

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A HorizontalRule may have multiple insertion IDs if it
		 * is a nested suggested change. If empty, then this is not a suggested
		 * insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;

		/**
		 * The suggested text style changes to this HorizontalRule, keyed by
		 * suggestion ID.
		 */
		suggestedTextStyleChanges?: {[id: string]: SuggestedTextStyle } | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;
	}


	/**
	 * A ParagraphElement that contains
	 * an InlineObject.
	 */
	export interface InlineObjectElement {

		/**
		 * The ID of the InlineObject this
		 * element contains.
		 */
		inlineObjectId?: string | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. An InlineObjectElement may have multiple insertion IDs
		 * if it is a nested suggested change. If empty, then this is not a suggested
		 * insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;

		/**
		 * The suggested text style changes to this InlineObject, keyed by suggestion
		 * ID.
		 */
		suggestedTextStyleChanges?: {[id: string]: SuggestedTextStyle } | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;
	}


	/**
	 * A ParagraphElement representing a
	 * page break. A page break makes the subsequent text start at the top of the
	 * next page.
	 */
	export interface PageBreak {

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A PageBreak
		 * may have multiple insertion IDs if it is a nested suggested change. If
		 * empty, then this is not a suggested insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;

		/** The suggested text style changes to this PageBreak, keyed by suggestion ID. */
		suggestedTextStyleChanges?: {[id: string]: SuggestedTextStyle } | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;
	}


	/**
	 * A ParagraphElement that represents a
	 * run of text that all has the same styling.
	 */
	export interface TextRun {

		/**
		 * The text of this run.
		 * Any non-text elements in the run are replaced with the Unicode character
		 * U+E907.
		 */
		content?: string | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A TextRun may
		 * have multiple insertion IDs if it is a nested suggested change. If empty,
		 * then this is not a suggested insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;

		/** The suggested text style changes to this run, keyed by suggestion ID. */
		suggestedTextStyleChanges?: {[id: string]: SuggestedTextStyle } | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;
	}


	/** A suggested change to a Bullet. */
	export interface SuggestedBullet {

		/** Describes the bullet of a paragraph. */
		bullet?: Bullet | null;

		/**
		 * A mask that indicates which of the fields on the base
		 * Bullet have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		bulletSuggestionState?: BulletSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base
	 * Bullet have been changed in this suggestion.
	 * For any field set to true, there is a new suggested value.
	 */
	export interface BulletSuggestionState {

		/**
		 * Indicates if there was a suggested change to the
		 * list_id.
		 */
		listIdSuggested?: boolean | null;

		/**
		 * Indicates if there was a suggested change to the
		 * nesting_level.
		 */
		nestingLevelSuggested?: boolean | null;

		/**
		 * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		textStyleSuggestionState?: TextStyleSuggestionState | null;
	}


	/**
	 * A suggested change to a
	 * ParagraphStyle.
	 */
	export interface SuggestedParagraphStyle {

		/**
		 * Styles that apply to a whole paragraph.
		 * Inherited paragraph styles are represented as unset fields in this message.
		 * A paragraph style's parent depends on where the paragraph style is defined:
		 * * The ParagraphStyle on a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The ParagraphStyle on a named style
		 * inherits from the normal text named style.
		 * * The ParagraphStyle of the normal text named style inherits
		 * from the default paragraph style in the Docs editor.
		 * * The ParagraphStyle on a Paragraph
		 * element that is contained in a table may inherit its paragraph style from
		 * the table style.
		 * If the paragraph style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		paragraphStyle?: ParagraphStyle | null;

		/**
		 * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		paragraphStyleSuggestionState?: ParagraphStyleSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion.
	 * For any field set to true, there is a new suggested value.
	 */
	export interface ParagraphStyleSuggestionState {

		/** Indicates if there was a suggested change to alignment. */
		alignmentSuggested?: boolean | null;

		/** Indicates if there was a suggested change to avoid_widow_and_orphan. */
		avoidWidowAndOrphanSuggested?: boolean | null;

		/** Indicates if there was a suggested change to border_between. */
		borderBetweenSuggested?: boolean | null;

		/** Indicates if there was a suggested change to border_bottom. */
		borderBottomSuggested?: boolean | null;

		/** Indicates if there was a suggested change to border_left. */
		borderLeftSuggested?: boolean | null;

		/** Indicates if there was a suggested change to border_right. */
		borderRightSuggested?: boolean | null;

		/** Indicates if there was a suggested change to border_top. */
		borderTopSuggested?: boolean | null;

		/** Indicates if there was a suggested change to direction. */
		directionSuggested?: boolean | null;

		/** Indicates if there was a suggested change to heading_id. */
		headingIdSuggested?: boolean | null;

		/** Indicates if there was a suggested change to indent_end. */
		indentEndSuggested?: boolean | null;

		/** Indicates if there was a suggested change to indent_first_line. */
		indentFirstLineSuggested?: boolean | null;

		/** Indicates if there was a suggested change to indent_start. */
		indentStartSuggested?: boolean | null;

		/** Indicates if there was a suggested change to keep_lines_together. */
		keepLinesTogetherSuggested?: boolean | null;

		/** Indicates if there was a suggested change to keep_with_next. */
		keepWithNextSuggested?: boolean | null;

		/** Indicates if there was a suggested change to line_spacing. */
		lineSpacingSuggested?: boolean | null;

		/** Indicates if there was a suggested change to named_style_type. */
		namedStyleTypeSuggested?: boolean | null;

		/**
		 * A mask that indicates which of the fields on the base Shading have been changed in this
		 * suggested change. For any field set to true, there is a new suggested value.
		 */
		shadingSuggestionState?: ShadingSuggestionState | null;

		/** Indicates if there was a suggested change to space_above. */
		spaceAboveSuggested?: boolean | null;

		/** Indicates if there was a suggested change to space_below. */
		spaceBelowSuggested?: boolean | null;

		/** Indicates if there was a suggested change to spacing_mode. */
		spacingModeSuggested?: boolean | null;
	}


	/**
	 * A mask that indicates which of the fields on the base Shading have been changed in this
	 * suggested change. For any field set to true, there is a new suggested value.
	 */
	export interface ShadingSuggestionState {

		/** Indicates if there was a suggested change to the Shading. */
		backgroundColorSuggested?: boolean | null;
	}


	/** A collection of object IDs. */
	export interface ObjectReferences {

		/** The object IDs. */
		objectIds?: Array<string> | null;
	}


	/**
	 * A StructuralElement representing a
	 * section break. A section is a range of content which has the same
	 * SectionStyle. A section break represents
	 * the start of a new section, and the section style applies to the section
	 * after the section break.
	 * The document body always begins with a section break.
	 */
	export interface SectionBreak {

		/** The styling that applies to a section. */
		sectionStyle?: SectionStyle | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A SectionBreak may have multiple insertion IDs if it is
		 * a nested suggested change. If empty, then this is not a suggested
		 * insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;
	}


	/**
	 * A StructuralElement representing a
	 * table.
	 */
	export interface Table {

		/**
		 * Number of columns in the table.
		 * It is possible for a table to be non-rectangular, so some rows may have a
		 * different number of cells.
		 */
		columns?: number | null;

		/** Number of rows in the table. */
		rows?: number | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A Table may have
		 * multiple insertion IDs if it is a nested suggested change. If empty, then
		 * this is not a suggested insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;

		/** The contents and style of each row. */
		tableRows?: Array<TableRow> | null;

		/** Styles that apply to a table. */
		tableStyle?: TableStyle | null;
	}


	/** The contents and style of a row in a Table. */
	export interface TableRow {

		/** The zero-based end index of this row, exclusive, in UTF-16 code units. */
		endIndex?: number | null;

		/** The zero-based start index of this row, in UTF-16 code units. */
		startIndex?: number | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A TableRow
		 * may have multiple insertion IDs if it is a nested suggested change. If
		 * empty, then this is not a suggested insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;

		/** The suggested style changes to this row, keyed by suggestion ID. */
		suggestedTableRowStyleChanges?: {[id: string]: SuggestedTableRowStyle } | null;

		/**
		 * The contents and style of each cell in this row.
		 * It is possible for a table to be non-rectangular, so some rows may have a
		 * different number of cells than other rows in the same table.
		 */
		tableCells?: Array<TableCell> | null;

		/** Styles that apply to a table row. */
		tableRowStyle?: TableRowStyle | null;
	}


	/**
	 * A suggested change to a
	 * TableRowStyle.
	 */
	export interface SuggestedTableRowStyle {

		/** Styles that apply to a table row. */
		tableRowStyle?: TableRowStyle | null;

		/**
		 * A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		tableRowStyleSuggestionState?: TableRowStyleSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion.
	 * For any field set to true, there is a new suggested value.
	 */
	export interface TableRowStyleSuggestionState {

		/** Indicates if there was a suggested change to min_row_height. */
		minRowHeightSuggested?: boolean | null;
	}


	/** The contents and style of a cell in a Table. */
	export interface TableCell {

		/** The content of the cell. */
		content?: Array<StructuralElement> | null;

		/** The zero-based end index of this cell, exclusive, in UTF-16 code units. */
		endIndex?: number | null;

		/** The zero-based start index of this cell, in UTF-16 code units. */
		startIndex?: number | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A TableCell
		 * may have multiple insertion IDs if it is a nested suggested change. If
		 * empty, then this is not a suggested insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;

		/** The suggested changes to the table cell style, keyed by suggestion ID. */
		suggestedTableCellStyleChanges?: {[id: string]: SuggestedTableCellStyle } | null;

		/**
		 * The style of a TableCell.
		 * Inherited table cell styles are represented as unset fields in this message.
		 * A table cell style can inherit from the table's style.
		 */
		tableCellStyle?: TableCellStyle | null;
	}


	/** A suggested change to a TableCellStyle. */
	export interface SuggestedTableCellStyle {

		/**
		 * The style of a TableCell.
		 * Inherited table cell styles are represented as unset fields in this message.
		 * A table cell style can inherit from the table's style.
		 */
		tableCellStyle?: TableCellStyle | null;

		/**
		 * A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		tableCellStyleSuggestionState?: TableCellStyleSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion.
	 * For any field set to true, there is a new suggested value.
	 */
	export interface TableCellStyleSuggestionState {

		/** Indicates if there was a suggested change to background_color. */
		backgroundColorSuggested?: boolean | null;

		/** Indicates if there was a suggested change to border_bottom. */
		borderBottomSuggested?: boolean | null;

		/** Indicates if there was a suggested change to border_left. */
		borderLeftSuggested?: boolean | null;

		/** Indicates if there was a suggested change to border_right. */
		borderRightSuggested?: boolean | null;

		/** Indicates if there was a suggested change to border_top. */
		borderTopSuggested?: boolean | null;

		/** Indicates if there was a suggested change to column_span. */
		columnSpanSuggested?: boolean | null;

		/** Indicates if there was a suggested change to content_alignment. */
		contentAlignmentSuggested?: boolean | null;

		/** Indicates if there was a suggested change to padding_bottom. */
		paddingBottomSuggested?: boolean | null;

		/** Indicates if there was a suggested change to padding_left. */
		paddingLeftSuggested?: boolean | null;

		/** Indicates if there was a suggested change to padding_right. */
		paddingRightSuggested?: boolean | null;

		/** Indicates if there was a suggested change to padding_top. */
		paddingTopSuggested?: boolean | null;

		/** Indicates if there was a suggested change to row_span. */
		rowSpanSuggested?: boolean | null;
	}


	/** Styles that apply to a table. */
	export interface TableStyle {

		/**
		 * The properties of each column.
		 * Note that in Docs, tables contain rows and rows contain cells, similar to
		 * HTML. So the properties for a row can be found on the row's
		 * table_row_style.
		 */
		tableColumnProperties?: Array<TableColumnProperties> | null;
	}


	/**
	 * A StructuralElement representing
	 * a table of contents.
	 */
	export interface TableOfContents {

		/** The content of the table of contents. */
		content?: Array<StructuralElement> | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion IDs. A TableOfContents may have multiple insertion IDs if it
		 * is a nested suggested change. If empty, then this is not a suggested
		 * insertion.
		 */
		suggestedInsertionIds?: Array<string> | null;
	}


	/**
	 * The crop properties of an image.
	 * The crop rectangle is represented using fractional offsets from the original
	 * content's four edges.
	 * - If the offset is in the interval (0, 1), the corresponding edge of crop
	 * rectangle is positioned inside of the image's original bounding rectangle.
	 * - If the offset is negative or greater than 1, the corresponding edge of crop
	 * rectangle is positioned outside of the image's original bounding rectangle.
	 * - If all offsets and rotation angle are 0, the image is not cropped.
	 */
	export interface CropProperties {

		/**
		 * The clockwise rotation angle of the crop rectangle around its center, in
		 * radians. Rotation is applied after the offsets.
		 */
		angle?: number | null;

		/**
		 * The offset specifies how far inwards the bottom edge of the crop rectangle
		 * is from the bottom edge of the original content as a fraction of the
		 * original content's height.
		 */
		offsetBottom?: number | null;

		/**
		 * The offset specifies how far inwards the left edge of the crop rectangle is
		 * from the left edge of the original content as a fraction of the original
		 * content's width.
		 */
		offsetLeft?: number | null;

		/**
		 * The offset specifies how far inwards the right edge of the crop rectangle
		 * is from the right edge of the original content as a fraction of the
		 * original content's width.
		 */
		offsetRight?: number | null;

		/**
		 * The offset specifies how far inwards the top edge of the crop rectangle is
		 * from the top edge of the original content as a fraction of the original
		 * content's height.
		 */
		offsetTop?: number | null;
	}


	/**
	 * A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion.
	 * For any field set to true, there is a new suggested value.
	 */
	export interface CropPropertiesSuggestionState {

		/** Indicates if there was a suggested change to angle. */
		angleSuggested?: boolean | null;

		/** Indicates if there was a suggested change to offset_bottom. */
		offsetBottomSuggested?: boolean | null;

		/** Indicates if there was a suggested change to offset_left. */
		offsetLeftSuggested?: boolean | null;

		/** Indicates if there was a suggested change to offset_right. */
		offsetRightSuggested?: boolean | null;

		/** Indicates if there was a suggested change to offset_top. */
		offsetTopSuggested?: boolean | null;
	}


	/** A Google Docs document. */
	export interface Document {

		/**
		 * The document body.
		 * The body typically contains the full document contents except for
		 * headers, footers
		 * and footnotes.
		 */
		body?: Body | null;

		/** Output only. The ID of the document. */
		documentId?: string | null;

		/** The style of the document. */
		documentStyle?: DocumentStyle | null;

		/** Output only. The footers in the document, keyed by footer ID. */
		footers?: {[id: string]: Footer } | null;

		/** Output only. The footnotes in the document, keyed by footnote ID. */
		footnotes?: {[id: string]: Footnote } | null;

		/** Output only. The headers in the document, keyed by header ID. */
		headers?: {[id: string]: Header } | null;

		/** Output only. The inline objects in the document, keyed by object ID. */
		inlineObjects?: {[id: string]: InlineObject } | null;

		/** Output only. The lists in the document, keyed by list ID. */
		lists?: {[id: string]: List } | null;

		/** Output only. The named ranges in the document, keyed by name. */
		namedRanges?: {[id: string]: NamedRanges } | null;

		/**
		 * The named styles. Paragraphs in the document can inherit their
		 * TextStyle and
		 * ParagraphStyle from these named styles.
		 */
		namedStyles?: NamedStyles | null;

		/** Output only. The positioned objects in the document, keyed by object ID. */
		positionedObjects?: {[id: string]: PositionedObject } | null;

		/**
		 * Output only. The revision ID of the document. Can be used in update
		 * requests to specify which revision of a document to apply updates to and
		 * how the request should behave if the document has been edited since that
		 * revision. Only populated if the user has edit access to the document.
		 * The format of the revision ID may change over time, so it should be treated
		 * opaquely. A returned revision ID is only guaranteed to be valid for 24
		 * hours after it has been returned and cannot be shared across users. If the
		 * revision ID is unchanged between calls, then the document has not changed.
		 * Conversely, a changed ID (for the same document and user) usually means the
		 * document has been updated; however, a changed ID can also be due to
		 * internal factors such as ID format changes.
		 */
		revisionId?: string | null;

		/**
		 * Output only. The suggested changes to the style of the document, keyed by
		 * suggestion ID.
		 */
		suggestedDocumentStyleChanges?: {[id: string]: SuggestedDocumentStyle } | null;

		/**
		 * Output only. The suggested changes to the named styles of the document,
		 * keyed by suggestion ID.
		 */
		suggestedNamedStylesChanges?: {[id: string]: SuggestedNamedStyles } | null;

		/**
		 * Output only. The suggestions view mode applied to the document.
		 * Note: When editing a document, changes must be based on a document with
		 * SUGGESTIONS_INLINE.
		 */
		suggestionsViewMode?: DocumentSuggestionsViewMode | null;

		/** The title of the document. */
		title?: string | null;
	}


	/** A document footer. */
	export interface Footer {

		/**
		 * The contents of the footer.
		 * The indexes for a footer's content begin at zero.
		 */
		content?: Array<StructuralElement> | null;

		/** The ID of the footer. */
		footerId?: string | null;
	}


	/** A document footnote. */
	export interface Footnote {

		/**
		 * The contents of the footnote.
		 * The indexes for a footnote's content begin at zero.
		 */
		content?: Array<StructuralElement> | null;

		/** The ID of the footnote. */
		footnoteId?: string | null;
	}


	/** A document header. */
	export interface Header {

		/**
		 * The contents of the header.
		 * The indexes for a header's content begin at zero.
		 */
		content?: Array<StructuralElement> | null;

		/** The ID of the header. */
		headerId?: string | null;
	}


	/**
	 * An object that appears inline with text. An InlineObject contains
	 * an EmbeddedObject such as an image.
	 */
	export interface InlineObject {

		/** Properties of an InlineObject. */
		inlineObjectProperties?: InlineObjectProperties | null;

		/** The ID of this inline object. */
		objectId?: string | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested changes to the inline object properties, keyed by suggestion
		 * ID.
		 */
		suggestedInlineObjectPropertiesChanges?: {[id: string]: SuggestedInlineObjectProperties } | null;

		/**
		 * The suggested insertion ID. If empty, then this is not a suggested
		 * insertion.
		 */
		suggestedInsertionId?: string | null;
	}


	/** Properties of an InlineObject. */
	export interface InlineObjectProperties {

		/** An embedded object in the document. */
		embeddedObject?: EmbeddedObject | null;
	}


	/** An embedded object in the document. */
	export interface EmbeddedObject {

		/**
		 * The description of the embedded object. The `title` and `description` are
		 * both combined to display alt text.
		 */
		description?: string | null;

		/** The properties of an embedded drawing. */
		embeddedDrawingProperties?: EmbeddedDrawingProperties | null;

		/** A border around an EmbeddedObject. */
		embeddedObjectBorder?: EmbeddedObjectBorder | null;

		/** The properties of an image. */
		imageProperties?: ImageProperties | null;

		/** A reference to the external linked source content. */
		linkedContentReference?: LinkedContentReference | null;

		/** A magnitude in a single direction in the specified units. */
		marginBottom?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginLeft?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginRight?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		marginTop?: Dimension | null;

		/** A width and height. */
		size?: Size | null;

		/**
		 * The title of the embedded object. The `title` and `description` are both
		 * combined to display alt text.
		 */
		title?: string | null;
	}


	/** The properties of an embedded drawing. */
	export interface EmbeddedDrawingProperties {
	}


	/** A border around an EmbeddedObject. */
	export interface EmbeddedObjectBorder {

		/** A color that can either be fully opaque or fully transparent. */
		color?: OptionalColor | null;

		/** The dash style of the border. */
		dashStyle?: ParagraphBorderDashStyle | null;

		/** The property state of the border property. */
		propertyState?: EmbeddedObjectBorderPropertyState | null;

		/** A magnitude in a single direction in the specified units. */
		width?: Dimension | null;
	}

	export enum EmbeddedObjectBorderPropertyState { RENDERED = 0, NOT_RENDERED = 1 }


	/** The properties of an image. */
	export interface ImageProperties {

		/** The clockwise rotation angle of the image, in radians. */
		angle?: number | null;

		/**
		 * The brightness effect of the image. The value should be in the interval
		 * [-1.0, 1.0], where 0 means no effect.
		 */
		brightness?: number | null;

		/**
		 * A URI to the image with a default lifetime of 30 minutes.
		 * This URI is tagged with the account of the requester. Anyone with the URI
		 * effectively accesses the image as the original requester. Access to the
		 * image may be lost if the document's sharing settings change.
		 */
		contentUri?: string | null;

		/**
		 * The contrast effect of the image. The value should be in the interval
		 * [-1.0, 1.0], where 0 means no effect.
		 */
		contrast?: number | null;

		/**
		 * The crop properties of an image.
		 * The crop rectangle is represented using fractional offsets from the original
		 * content's four edges.
		 * - If the offset is in the interval (0, 1), the corresponding edge of crop
		 * rectangle is positioned inside of the image's original bounding rectangle.
		 * - If the offset is negative or greater than 1, the corresponding edge of crop
		 * rectangle is positioned outside of the image's original bounding rectangle.
		 * - If all offsets and rotation angle are 0, the image is not cropped.
		 */
		cropProperties?: CropProperties | null;

		/**
		 * The source URI is the URI used to insert the image. The source URI can be
		 * empty.
		 */
		sourceUri?: string | null;

		/**
		 * The transparency effect of the image. The value should be in the interval
		 * [0.0, 1.0], where 0 means no effect and 1 means completely transparent.
		 */
		transparency?: number | null;
	}


	/** A reference to the external linked source content. */
	export interface LinkedContentReference {

		/** A reference to a linked chart embedded from Google Sheets. */
		sheetsChartReference?: SheetsChartReference | null;
	}


	/** A reference to a linked chart embedded from Google Sheets. */
	export interface SheetsChartReference {

		/**
		 * The ID of the specific chart in the Google Sheets spreadsheet that is
		 * embedded.
		 */
		chartId?: number | null;

		/** The ID of the Google Sheets spreadsheet that contains the source chart. */
		spreadsheetId?: string | null;
	}


	/** A suggested change to InlineObjectProperties. */
	export interface SuggestedInlineObjectProperties {

		/** Properties of an InlineObject. */
		inlineObjectProperties?: InlineObjectProperties | null;

		/**
		 * A mask that indicates which of the fields on the base
		 * InlineObjectProperties have
		 * been changed in this suggestion. For any field set to true, there is a new
		 * suggested value.
		 */
		inlineObjectPropertiesSuggestionState?: InlineObjectPropertiesSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base
	 * InlineObjectProperties have
	 * been changed in this suggestion. For any field set to true, there is a new
	 * suggested value.
	 */
	export interface InlineObjectPropertiesSuggestionState {

		/**
		 * A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion.
	 * For any field set to true, there is a new suggested value.
	 */
	export interface EmbeddedObjectSuggestionState {

		/** Indicates if there was a suggested change to description. */
		descriptionSuggested?: boolean | null;

		/**
		 * A mask that indicates which of the fields on the base
		 * EmbeddedDrawingProperties
		 * have been changed in this suggestion. For any field set to true, there is a
		 * new suggested value.
		 */
		embeddedDrawingPropertiesSuggestionState?: EmbeddedDrawingPropertiesSuggestionState | null;

		/**
		 * A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this
		 * suggestion. For any field set to true, there is a new suggested value.
		 */
		embeddedObjectBorderSuggestionState?: EmbeddedObjectBorderSuggestionState | null;

		/**
		 * A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		imagePropertiesSuggestionState?: ImagePropertiesSuggestionState | null;

		/**
		 * A mask that indicates which of the fields on the base
		 * LinkedContentReference have
		 * been changed in this suggestion. For any field set to true, there is a new
		 * suggested value.
		 */
		linkedContentReferenceSuggestionState?: LinkedContentReferenceSuggestionState | null;

		/** Indicates if there was a suggested change to margin_bottom. */
		marginBottomSuggested?: boolean | null;

		/** Indicates if there was a suggested change to margin_left. */
		marginLeftSuggested?: boolean | null;

		/** Indicates if there was a suggested change to margin_right. */
		marginRightSuggested?: boolean | null;

		/** Indicates if there was a suggested change to margin_top. */
		marginTopSuggested?: boolean | null;

		/**
		 * A mask that indicates which of the fields on the base Size have been changed in this suggestion.
		 * For any field set to true, the Size has
		 * a new suggested value.
		 */
		sizeSuggestionState?: SizeSuggestionState | null;

		/** Indicates if there was a suggested change to title. */
		titleSuggested?: boolean | null;
	}


	/**
	 * A mask that indicates which of the fields on the base
	 * EmbeddedDrawingProperties
	 * have been changed in this suggestion. For any field set to true, there is a
	 * new suggested value.
	 */
	export interface EmbeddedDrawingPropertiesSuggestionState {
	}


	/**
	 * A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this
	 * suggestion. For any field set to true, there is a new suggested value.
	 */
	export interface EmbeddedObjectBorderSuggestionState {

		/** Indicates if there was a suggested change to color. */
		colorSuggested?: boolean | null;

		/** Indicates if there was a suggested change to dash_style. */
		dashStyleSuggested?: boolean | null;

		/** Indicates if there was a suggested change to property_state. */
		propertyStateSuggested?: boolean | null;

		/** Indicates if there was a suggested change to width. */
		widthSuggested?: boolean | null;
	}


	/**
	 * A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion.
	 * For any field set to true, there is a new suggested value.
	 */
	export interface ImagePropertiesSuggestionState {

		/** Indicates if there was a suggested change to angle. */
		angleSuggested?: boolean | null;

		/** Indicates if there was a suggested change to brightness. */
		brightnessSuggested?: boolean | null;

		/**
		 * Indicates if there was a suggested change to
		 * content_uri.
		 */
		contentUriSuggested?: boolean | null;

		/** Indicates if there was a suggested change to contrast. */
		contrastSuggested?: boolean | null;

		/**
		 * A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		cropPropertiesSuggestionState?: CropPropertiesSuggestionState | null;

		/** Indicates if there was a suggested change to source_uri. */
		sourceUriSuggested?: boolean | null;

		/** Indicates if there was a suggested change to transparency. */
		transparencySuggested?: boolean | null;
	}


	/**
	 * A mask that indicates which of the fields on the base
	 * LinkedContentReference have
	 * been changed in this suggestion. For any field set to true, there is a new
	 * suggested value.
	 */
	export interface LinkedContentReferenceSuggestionState {

		/**
		 * A mask that indicates which of the fields on the base SheetsChartReference have been changed in this
		 * suggestion. For any field set to true, there is a new suggested value.
		 */
		sheetsChartReferenceSuggestionState?: SheetsChartReferenceSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base SheetsChartReference have been changed in this
	 * suggestion. For any field set to true, there is a new suggested value.
	 */
	export interface SheetsChartReferenceSuggestionState {

		/** Indicates if there was a suggested change to chart_id. */
		chartIdSuggested?: boolean | null;

		/** Indicates if there was a suggested change to spreadsheet_id. */
		spreadsheetIdSuggested?: boolean | null;
	}


	/**
	 * A mask that indicates which of the fields on the base Size have been changed in this suggestion.
	 * For any field set to true, the Size has
	 * a new suggested value.
	 */
	export interface SizeSuggestionState {

		/** Indicates if there was a suggested change to height. */
		heightSuggested?: boolean | null;

		/** Indicates if there was a suggested change to width. */
		widthSuggested?: boolean | null;
	}


	/**
	 * A List represents the list attributes for a group of paragraphs that all
	 * belong to the same list. A paragraph that is part of a list has a reference
	 * to the list's ID in its bullet.
	 */
	export interface List {

		/**
		 * The properties of a list which describe the look
		 * and feel of bullets belonging to paragraphs associated with a list.
		 */
		listProperties?: ListProperties | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this list.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion ID. If empty, then this is not a suggested
		 * insertion.
		 */
		suggestedInsertionId?: string | null;

		/**
		 * The suggested changes to the list properties, keyed by suggestion
		 * ID.
		 */
		suggestedListPropertiesChanges?: {[id: string]: SuggestedListProperties } | null;
	}


	/**
	 * The properties of a list which describe the look
	 * and feel of bullets belonging to paragraphs associated with a list.
	 */
	export interface ListProperties {

		/**
		 * Describes the properties of the bullets at the associated level.
		 * A list has at most nine levels of nesting with nesting level 0
		 * corresponding to the top-most level and nesting level 8 corresponding to
		 * the most nested level. The nesting levels are returned in ascending order
		 * with the least nested returned first.
		 */
		nestingLevels?: Array<NestingLevel> | null;
	}


	/**
	 * Contains properties describing the look and feel of a list bullet at a given
	 * level of nesting.
	 */
	export interface NestingLevel {

		/**
		 * The alignment of the bullet within the space allotted for rendering the
		 * bullet.
		 */
		bulletAlignment?: NestingLevelBulletAlignment | null;

		/**
		 * The format string used by bullets at this level of nesting.
		 * The glyph format contains one or more placeholders, and these placeholder
		 * are replaced with the appropriate values depending on the glyph_type or glyph_symbol. The placeholders follow
		 * the pattern `%[nesting_level]`. Furthermore, placeholders can have prefixes
		 * and suffixes. Thus, the glyph format follows the pattern
		 * `<prefix>%[nesting_level]<suffix>`. Note that the prefix and suffix are
		 * optional and can be arbitrary strings.
		 * For example, the glyph format `%0.` indicates that the rendered glyph will
		 * replace the placeholder with the corresponding glyph for nesting level 0
		 * followed by a period as the suffix. So a list with a glyph type of
		 * UPPER_ALPHA and
		 * glyph format `%0.` at nesting level 0 will result in a list with rendered
		 * glyphs
		 * <p>`A.`
		 * <p>`B.`
		 * <p>`C.`
		 * The glyph format can contain placeholders for the current nesting level as
		 * well as placeholders for parent nesting levels. For example, a
		 * list can have a glyph format of `%0.` at nesting level 0 and a
		 * glyph format of `%0.%1.` at nesting level 1. Assuming both nesting levels
		 * have DECIMAL glyph
		 * types, this would result in a list with rendered glyphs
		 * <p>`1.`
		 * <p>`2.`
		 * <p>`  2.1.`
		 * <p>`  2.2.`
		 * <p>`3.`
		 * For nesting levels that are ordered, the string that replaces a placeholder
		 * in the glyph format for a particular paragraph depends on the paragraph's
		 * order within the list.
		 */
		glyphFormat?: string | null;

		/**
		 * A custom glyph symbol used by bullets when paragraphs at this level of
		 * nesting are unordered.
		 * The glyph symbol replaces placeholders within the glyph_format. For example, if the
		 * glyph_symbol is the solid circle corresponding to Unicode U+25cf code
		 * point and the glyph_format is `%0`, the rendered
		 * glyph would be the solid circle.
		 */
		glyphSymbol?: string | null;

		/**
		 * The type of glyph used by bullets when paragraphs at this level of
		 * nesting are ordered.
		 * The glyph type determines the type of glyph used to replace placeholders
		 * within the glyph_format
		 * when paragraphs at this level of nesting are ordered. For example, if the
		 * nesting level is 0, the glyph_format is `%0.` and the glyph
		 * type is DECIMAL,
		 * then the rendered glyph would replace the placeholder `%0` in the glyph
		 * format with a number corresponding to list item's order within the list.
		 */
		glyphType?: NestingLevelGlyphType | null;

		/** A magnitude in a single direction in the specified units. */
		indentFirstLine?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		indentStart?: Dimension | null;

		/**
		 * The number of the first list item at this nesting level.
		 * A value of 0 is treated as a value of 1 for lettered lists and roman
		 * numeraled lists, i.e. for values of both 0 and 1, lettered and roman
		 * numeraled lists will begin at `a` and `i` respectively.
		 * This value is ignored for nesting levels with unordered glyphs.
		 */
		startNumber?: number | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;
	}

	export enum NestingLevelBulletAlignment { BULLET_ALIGNMENT_UNSPECIFIED = 0, START = 1, CENTER = 2, END = 3 }

	export enum NestingLevelGlyphType { GLYPH_TYPE_UNSPECIFIED = 0, NONE = 1, DECIMAL = 2, ZERO_DECIMAL = 3, UPPER_ALPHA = 4, ALPHA = 5, UPPER_ROMAN = 6, ROMAN = 7 }


	/** A suggested change to ListProperties. */
	export interface SuggestedListProperties {

		/**
		 * The properties of a list which describe the look
		 * and feel of bullets belonging to paragraphs associated with a list.
		 */
		listProperties?: ListProperties | null;

		/**
		 * A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		listPropertiesSuggestionState?: ListPropertiesSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion.
	 * For any field set to true, there is a new suggested value.
	 */
	export interface ListPropertiesSuggestionState {

		/**
		 * A mask that indicates which of the fields on the corresponding
		 * NestingLevel in nesting_levels have been changed in
		 * this suggestion.
		 * The nesting level suggestion states are returned in ascending order of the
		 * nesting level with the least nested returned first.
		 */
		nestingLevelsSuggestionStates?: Array<NestingLevelSuggestionState> | null;
	}


	/**
	 * A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For
	 * any field set to true, there is a new suggested value.
	 */
	export interface NestingLevelSuggestionState {

		/**
		 * Indicates if there was a suggested change to
		 * bullet_alignment.
		 */
		bulletAlignmentSuggested?: boolean | null;

		/**
		 * Indicates if there was a suggested change to
		 * glyph_format.
		 */
		glyphFormatSuggested?: boolean | null;

		/**
		 * Indicates if there was a suggested change to
		 * glyph_symbol.
		 */
		glyphSymbolSuggested?: boolean | null;

		/**
		 * Indicates if there was a suggested change to
		 * glyph_type.
		 */
		glyphTypeSuggested?: boolean | null;

		/**
		 * Indicates if there was a suggested change to
		 * indent_first_line.
		 */
		indentFirstLineSuggested?: boolean | null;

		/**
		 * Indicates if there was a suggested change to
		 * indent_start.
		 */
		indentStartSuggested?: boolean | null;

		/**
		 * Indicates if there was a suggested change to
		 * start_number.
		 */
		startNumberSuggested?: boolean | null;

		/**
		 * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		textStyleSuggestionState?: TextStyleSuggestionState | null;
	}


	/**
	 * A collection of all the NamedRanges in the
	 * document that share a given name.
	 */
	export interface NamedRanges {

		/** The name that all the named ranges share. */
		name?: string | null;

		/** The NamedRanges that share the same name. */
		namedRanges?: Array<NamedRange> | null;
	}


	/**
	 * A collection of Ranges with the same named range
	 * ID.
	 * Named ranges allow developers to associate parts of a document with an
	 * arbitrary user-defined label so their contents can be programmatically read
	 * or edited at a later time. A document can contain multiple named ranges with
	 * the same name, but every named range has a unique ID.
	 * A named range is created with a single Range,
	 * and content inserted inside a named range generally expands that range.
	 * However, certain document changes can cause the range to be split into
	 * multiple ranges.
	 * Named ranges are not private. All applications and collaborators that have
	 * access to the document can see its named ranges.
	 */
	export interface NamedRange {

		/** The name of the named range. */
		name?: string | null;

		/** The ID of the named range. */
		namedRangeId?: string | null;

		/** The ranges that belong to this named range. */
		ranges?: Array<Range> | null;
	}


	/**
	 * The named styles. Paragraphs in the document can inherit their
	 * TextStyle and
	 * ParagraphStyle from these named styles.
	 */
	export interface NamedStyles {

		/**
		 * The named styles.
		 * There is an entry for each of the possible named style types.
		 */
		styles?: Array<NamedStyle> | null;
	}


	/**
	 * A named style. Paragraphs in the document can inherit their
	 * TextStyle and
	 * ParagraphStyle from this named style
	 * when they have the same named style type.
	 */
	export interface NamedStyle {

		/** The type of this named style. */
		namedStyleType?: ParagraphStyleNamedStyleType | null;

		/**
		 * Styles that apply to a whole paragraph.
		 * Inherited paragraph styles are represented as unset fields in this message.
		 * A paragraph style's parent depends on where the paragraph style is defined:
		 * * The ParagraphStyle on a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The ParagraphStyle on a named style
		 * inherits from the normal text named style.
		 * * The ParagraphStyle of the normal text named style inherits
		 * from the default paragraph style in the Docs editor.
		 * * The ParagraphStyle on a Paragraph
		 * element that is contained in a table may inherit its paragraph style from
		 * the table style.
		 * If the paragraph style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		paragraphStyle?: ParagraphStyle | null;

		/**
		 * Represents the styling that can be applied to text.
		 * Inherited text styles are represented as unset fields in this message. A
		 * text style's parent depends on where the text style is defined:
		 * * The TextStyle of text in a Paragraph
		 * inherits from the paragraph's corresponding named style type.
		 * * The TextStyle on a named style
		 * inherits from the normal text named style.
		 * * The TextStyle of the normal text named style inherits
		 * from the default text style in the Docs editor.
		 * * The TextStyle on a Paragraph element
		 * that is contained in a table may inherit its text style from the table
		 * style.
		 * If the text style does not inherit from a parent, unsetting fields will
		 * revert the style to a value matching the defaults in the Docs editor.
		 */
		textStyle?: TextStyle | null;
	}


	/**
	 * An object that is tethered to a Paragraph
	 * and positioned relative to the beginning of the paragraph. A PositionedObject
	 * contains an EmbeddedObject such as an
	 * image.
	 */
	export interface PositionedObject {

		/** The ID of this positioned object. */
		objectId?: string | null;

		/** Properties of a PositionedObject. */
		positionedObjectProperties?: PositionedObjectProperties | null;

		/**
		 * The suggested deletion IDs. If empty, then there are no suggested deletions
		 * of this content.
		 */
		suggestedDeletionIds?: Array<string> | null;

		/**
		 * The suggested insertion ID. If empty, then this is not a suggested
		 * insertion.
		 */
		suggestedInsertionId?: string | null;

		/**
		 * The suggested changes to the positioned object properties, keyed by
		 * suggestion ID.
		 */
		suggestedPositionedObjectPropertiesChanges?: {[id: string]: SuggestedPositionedObjectProperties } | null;
	}


	/** Properties of a PositionedObject. */
	export interface PositionedObjectProperties {

		/** An embedded object in the document. */
		embeddedObject?: EmbeddedObject | null;

		/**
		 * The positioning of a PositionedObject. The positioned object is positioned
		 * relative to the beginning of the Paragraph
		 * it is tethered to.
		 */
		positioning?: PositionedObjectPositioning | null;
	}


	/**
	 * The positioning of a PositionedObject. The positioned object is positioned
	 * relative to the beginning of the Paragraph
	 * it is tethered to.
	 */
	export interface PositionedObjectPositioning {

		/** The layout of this positioned object. */
		layout?: PositionedObjectPositioningLayout | null;

		/** A magnitude in a single direction in the specified units. */
		leftOffset?: Dimension | null;

		/** A magnitude in a single direction in the specified units. */
		topOffset?: Dimension | null;
	}

	export enum PositionedObjectPositioningLayout { POSITIONED_OBJECT_LAYOUT_UNSPECIFIED = 0, WRAP_TEXT = 1, BREAK_LEFT = 2, BREAK_RIGHT = 3, BREAK_LEFT_RIGHT = 4, IN_FRONT_OF_TEXT = 5 }


	/** A suggested change to PositionedObjectProperties. */
	export interface SuggestedPositionedObjectProperties {

		/** Properties of a PositionedObject. */
		positionedObjectProperties?: PositionedObjectProperties | null;

		/**
		 * A mask that indicates which of the fields on the base
		 * PositionedObjectProperties
		 * have been changed in this suggestion. For any field set to true, there is a
		 * new suggested value.
		 */
		positionedObjectPropertiesSuggestionState?: PositionedObjectPropertiesSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base
	 * PositionedObjectProperties
	 * have been changed in this suggestion. For any field set to true, there is a
	 * new suggested value.
	 */
	export interface PositionedObjectPropertiesSuggestionState {

		/**
		 * A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		embeddedObjectSuggestionState?: EmbeddedObjectSuggestionState | null;

		/**
		 * A mask that indicates which of the fields on the base
		 * PositionedObjectPositioning have been changed in this
		 * suggestion. For any field set to true, there is a new suggested value.
		 */
		positioningSuggestionState?: PositionedObjectPositioningSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base
	 * PositionedObjectPositioning have been changed in this
	 * suggestion. For any field set to true, there is a new suggested value.
	 */
	export interface PositionedObjectPositioningSuggestionState {

		/** Indicates if there was a suggested change to layout. */
		layoutSuggested?: boolean | null;

		/** Indicates if there was a suggested change to left_offset. */
		leftOffsetSuggested?: boolean | null;

		/** Indicates if there was a suggested change to top_offset. */
		topOffsetSuggested?: boolean | null;
	}


	/** A suggested change to the DocumentStyle. */
	export interface SuggestedDocumentStyle {

		/** The style of the document. */
		documentStyle?: DocumentStyle | null;

		/**
		 * A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		documentStyleSuggestionState?: DocumentStyleSuggestionState | null;
	}


	/**
	 * A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion.
	 * For any field set to true, there is a new suggested value.
	 */
	export interface DocumentStyleSuggestionState {

		/**
		 * A mask that indicates which of the fields on the base Background have been changed in this suggestion.
		 * For any field set to true, the Backgound has a new suggested value.
		 */
		backgroundSuggestionState?: BackgroundSuggestionState | null;

		/** Indicates if there was a suggested change to default_footer_id. */
		defaultFooterIdSuggested?: boolean | null;

		/** Indicates if there was a suggested change to default_header_id. */
		defaultHeaderIdSuggested?: boolean | null;

		/** Indicates if there was a suggested change to even_page_footer_id. */
		evenPageFooterIdSuggested?: boolean | null;

		/** Indicates if there was a suggested change to even_page_header_id. */
		evenPageHeaderIdSuggested?: boolean | null;

		/** Indicates if there was a suggested change to first_page_footer_id. */
		firstPageFooterIdSuggested?: boolean | null;

		/** Indicates if there was a suggested change to first_page_header_id. */
		firstPageHeaderIdSuggested?: boolean | null;

		/** Indicates if there was a suggested change to margin_bottom. */
		marginBottomSuggested?: boolean | null;

		/** Indicates if there was a suggested change to margin_footer. */
		marginFooterSuggested?: boolean | null;

		/** Indicates if there was a suggested change to margin_header. */
		marginHeaderSuggested?: boolean | null;

		/** Indicates if there was a suggested change to margin_left. */
		marginLeftSuggested?: boolean | null;

		/** Indicates if there was a suggested change to margin_right. */
		marginRightSuggested?: boolean | null;

		/** Indicates if there was a suggested change to margin_top. */
		marginTopSuggested?: boolean | null;

		/** Indicates if there was a suggested change to page_number_start. */
		pageNumberStartSuggested?: boolean | null;

		/**
		 * A mask that indicates which of the fields on the base Size have been changed in this suggestion.
		 * For any field set to true, the Size has
		 * a new suggested value.
		 */
		pageSizeSuggestionState?: SizeSuggestionState | null;

		/**
		 * Indicates if there was a suggested change to
		 * use_custom_header_footer_margins.
		 */
		useCustomHeaderFooterMarginsSuggested?: boolean | null;

		/** Indicates if there was a suggested change to use_even_page_header_footer. */
		useEvenPageHeaderFooterSuggested?: boolean | null;

		/** Indicates if there was a suggested change to use_first_page_header_footer. */
		useFirstPageHeaderFooterSuggested?: boolean | null;
	}


	/** A suggested change to the NamedStyles. */
	export interface SuggestedNamedStyles {

		/**
		 * The named styles. Paragraphs in the document can inherit their
		 * TextStyle and
		 * ParagraphStyle from these named styles.
		 */
		namedStyles?: NamedStyles | null;

		/**
		 * The suggestion state of a NamedStyles
		 * message.
		 */
		namedStylesSuggestionState?: NamedStylesSuggestionState | null;
	}


	/**
	 * The suggestion state of a NamedStyles
	 * message.
	 */
	export interface NamedStylesSuggestionState {

		/**
		 * A mask that indicates which of the fields on the corresponding NamedStyle in styles have been changed in this
		 * suggestion.
		 * The order of these named style suggestion states match the order of the
		 * corresponding named style within the named styles suggestion.
		 */
		stylesSuggestionStates?: Array<NamedStyleSuggestionState> | null;
	}


	/** A suggestion state of a NamedStyle message. */
	export interface NamedStyleSuggestionState {

		/**
		 * The named style type that this suggestion state corresponds to.
		 * This field is provided as a convenience for matching the
		 * NamedStyleSuggestionState with its corresponding NamedStyle.
		 */
		namedStyleType?: ParagraphStyleNamedStyleType | null;

		/**
		 * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		paragraphStyleSuggestionState?: ParagraphStyleSuggestionState | null;

		/**
		 * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion.
		 * For any field set to true, there is a new suggested value.
		 */
		textStyleSuggestionState?: TextStyleSuggestionState | null;
	}

	export enum DocumentSuggestionsViewMode { DEFAULT_FOR_CURRENT_ACCESS = 0, SUGGESTIONS_INLINE = 1, PREVIEW_SUGGESTIONS_ACCEPTED = 2, PREVIEW_WITHOUT_SUGGESTIONS = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a blank document using the title given in the request. Other fields
		 * in the request, including any provided content, are ignored.
		 * Returns the created document.
		 * Post v1/documents
		 * @return {void} Successful response
		 */
		Docs_documents_create(requestBody: Document): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets the latest version of the specified document.
		 * Get v1/documents/{documentId}
		 * @param {string} documentId The ID of the document to retrieve.
		 * @param {DocumentSuggestionsViewMode} suggestionsViewMode The suggestions view mode to apply to the document. This allows viewing the
		 * document with all suggestions inline, accepted or rejected. If one is not
		 * specified, DEFAULT_FOR_CURRENT_ACCESS is
		 * used.
		 * @return {void} Successful response
		 */
		Docs_documents_get(documentId: string, suggestionsViewMode: DocumentSuggestionsViewMode): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/documents/' + (documentId == null ? '' : encodeURIComponent(documentId)) + '&suggestionsViewMode=' + suggestionsViewMode, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies one or more updates to the document.
		 * Each request is validated before
		 * being applied. If any request is not valid, then the entire request will
		 * fail and nothing will be applied.
		 * Some requests have replies to
		 * give you some information about how they are applied. Other requests do
		 * not need to return information; these each return an empty reply.
		 * The order of replies matches that of the requests.
		 * For example, suppose you call batchUpdate with four updates, and only the
		 * third one returns information. The response would have two empty replies,
		 * the reply to the third request, and another empty reply, in that order.
		 * Because other users may be editing the document, the document
		 * might not exactly reflect your changes: your changes may
		 * be altered with respect to collaborator changes. If there are no
		 * collaborators, the document should reflect your changes. In any case,
		 * the updates in your request are guaranteed to be applied together
		 * atomically.
		 * Post v1/documents/{documentId}:batchUpdate
		 * @param {string} documentId The ID of the document to update.
		 * @return {void} Successful response
		 */
		Docs_documents_batchUpdate(documentId: string, requestBody: BatchUpdateDocumentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/documents/' + (documentId == null ? '' : encodeURIComponent(documentId)) + ':batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

