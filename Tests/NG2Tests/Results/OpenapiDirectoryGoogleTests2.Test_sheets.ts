import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Adds a new banded range to the spreadsheet. */
	export interface AddBandingRequest {

		/** A banded (alternating colors) range in a sheet. */
		bandedRange?: BandedRange;
	}


	/** A banded (alternating colors) range in a sheet. */
	export interface BandedRange {

		/** The id of the banded range. */
		bandedRangeId?: number;

		/**
		 * Properties referring a single dimension (either row or column). If both
		 * BandedRange.row_properties and BandedRange.column_properties are
		 * set, the fill colors are applied to cells according to the following rules:
		 * * header_color and footer_color take priority over band colors.
		 * * first_band_color takes priority over second_band_color.
		 * * row_properties takes priority over column_properties.
		 * For example, the first row color takes priority over the first column
		 * color, but the first column color takes priority over the second row color.
		 * Similarly, the row header takes priority over the column header in the
		 * top left cell, but the column header takes priority over the first row
		 * color if the row header is not set.
		 */
		columnProperties?: BandingProperties;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/**
		 * Properties referring a single dimension (either row or column). If both
		 * BandedRange.row_properties and BandedRange.column_properties are
		 * set, the fill colors are applied to cells according to the following rules:
		 * * header_color and footer_color take priority over band colors.
		 * * first_band_color takes priority over second_band_color.
		 * * row_properties takes priority over column_properties.
		 * For example, the first row color takes priority over the first column
		 * color, but the first column color takes priority over the second row color.
		 * Similarly, the row header takes priority over the column header in the
		 * top left cell, but the column header takes priority over the first row
		 * color if the row header is not set.
		 */
		rowProperties?: BandingProperties;
	}


	/**
	 * Properties referring a single dimension (either row or column). If both
	 * BandedRange.row_properties and BandedRange.column_properties are
	 * set, the fill colors are applied to cells according to the following rules:
	 * * header_color and footer_color take priority over band colors.
	 * * first_band_color takes priority over second_band_color.
	 * * row_properties takes priority over column_properties.
	 * For example, the first row color takes priority over the first column
	 * color, but the first column color takes priority over the second row color.
	 * Similarly, the row header takes priority over the column header in the
	 * top left cell, but the column header takes priority over the first row
	 * color if the row header is not set.
	 */
	export interface BandingProperties {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		firstBandColor?: Color;

		/** A color value. */
		firstBandColorStyle?: ColorStyle;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		footerColor?: Color;

		/** A color value. */
		footerColorStyle?: ColorStyle;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		headerColor?: Color;

		/** A color value. */
		headerColorStyle?: ColorStyle;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		secondBandColor?: Color;

		/** A color value. */
		secondBandColorStyle?: ColorStyle;
	}


	/**
	 * Represents a color in the RGBA color space. This representation is designed
	 * for simplicity of conversion to/from color representations in various
	 * languages over compactness; for example, the fields of this representation
	 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
	 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
	 * method in iOS; and, with just a little work, it can be easily formatted into
	 * a CSS "rgba()" string in JavaScript, as well.
	 * Note: this proto does not carry information about the absolute color space
	 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
	 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
	 * space.
	 * Example (Java):
	 *      import com.google.type.Color;
	 *      // ...
	 *      public static java.awt.Color fromProto(Color protocolor) {
	 *        float alpha = protocolor.hasAlpha()
	 *            ? protocolor.getAlpha().getValue()
	 *            : 1.0;
	 *        return new java.awt.Color(
	 *            protocolor.getRed(),
	 *            protocolor.getGreen(),
	 *            protocolor.getBlue(),
	 *            alpha);
	 *      }
	 *      public static Color toProto(java.awt.Color color) {
	 *        float red = (float) color.getRed();
	 *        float green = (float) color.getGreen();
	 *        float blue = (float) color.getBlue();
	 *        float denominator = 255.0;
	 *        Color.Builder resultBuilder =
	 *            Color
	 *                .newBuilder()
	 *                .setRed(red / denominator)
	 *                .setGreen(green / denominator)
	 *                .setBlue(blue / denominator);
	 *        int alpha = color.getAlpha();
	 *        if (alpha != 255) {
	 *          result.setAlpha(
	 *              FloatValue
	 *                  .newBuilder()
	 *                  .setValue(((float) alpha) / denominator)
	 *                  .build());
	 *        }
	 *        return resultBuilder.build();
	 *      }
	 *      // ...
	 * Example (iOS / Obj-C):
	 *      // ...
	 *      static UIColor* fromProto(Color* protocolor) {
	 *         float red = [protocolor red];
	 *         float green = [protocolor green];
	 *         float blue = [protocolor blue];
	 *         FloatValue* alpha_wrapper = [protocolor alpha];
	 *         float alpha = 1.0;
	 *         if (alpha_wrapper != nil) {
	 *           alpha = [alpha_wrapper value];
	 *         }
	 *         return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
	 *      }
	 *      static Color* toProto(UIColor* color) {
	 *          CGFloat red, green, blue, alpha;
	 *          if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
	 *            return nil;
	 *          }
	 *          Color* result = [[Color alloc] init];
	 *          [result setRed:red];
	 *          [result setGreen:green];
	 *          [result setBlue:blue];
	 *          if (alpha <= 0.9999) {
	 *            [result setAlpha:floatWrapperWithValue(alpha)];
	 *          }
	 *          [result autorelease];
	 *          return result;
	 *     }
	 *     // ...
	 *  Example (JavaScript):
	 *     // ...
	 *     var protoToCssColor = function(rgb_color) {
	 *        var redFrac = rgb_color.red || 0.0;
	 *        var greenFrac = rgb_color.green || 0.0;
	 *        var blueFrac = rgb_color.blue || 0.0;
	 *        var red = Math.floor(redFrac * 255);
	 *        var green = Math.floor(greenFrac * 255);
	 *        var blue = Math.floor(blueFrac * 255);
	 *        if (!('alpha' in rgb_color)) {
	 *           return rgbToCssColor_(red, green, blue);
	 *        }
	 *        var alphaFrac = rgb_color.alpha.value || 0.0;
	 *        var rgbParams = [red, green, blue].join(',');
	 *        return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
	 *     };
	 *     var rgbToCssColor_ = function(red, green, blue) {
	 *       var rgbNumber = new Number((red << 16) | (green << 8) | blue);
	 *       var hexString = rgbNumber.toString(16);
	 *       var missingZeros = 6 - hexString.length;
	 *       var resultBuilder = ['#'];
	 *       for (var i = 0; i < missingZeros; i++) {
	 *          resultBuilder.push('0');
	 *       }
	 *       resultBuilder.push(hexString);
	 *       return resultBuilder.join('');
	 *     };
	 *     // ...
	 */
	export interface Color {

		/**
		 * The fraction of this color that should be applied to the pixel. That is,
		 * the final pixel color is defined by the equation:
		 * pixel color = alpha * (this color) + (1.0 - alpha) * (background color)
		 * This means that a value of 1.0 corresponds to a solid color, whereas
		 * a value of 0.0 corresponds to a completely transparent color. This
		 * uses a wrapper message rather than a simple float scalar so that it is
		 * possible to distinguish between a default value and the value being unset.
		 * If omitted, this color object is to be rendered as a solid color
		 * (as if the alpha value had been explicitly given with a value of 1.0).
		 */
		alpha?: number;

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue?: number;

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green?: number;

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red?: number;
	}


	/** A color value. */
	export interface ColorStyle {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		rgbColor?: Color;

		/** Theme color. */
		themeColor?: ColorStyleThemeColor;
	}

	export enum ColorStyleThemeColor { THEME_COLOR_TYPE_UNSPECIFIED = 0, TEXT = 1, BACKGROUND = 2, ACCENT1 = 3, ACCENT2 = 4, ACCENT3 = 5, ACCENT4 = 6, ACCENT5 = 7, ACCENT6 = 8, LINK = 9 }


	/**
	 * A range on a sheet.
	 * All indexes are zero-based.
	 * Indexes are half open, e.g the start index is inclusive
	 * and the end index is exclusive -- [start_index, end_index).
	 * Missing indexes indicate the range is unbounded on that side.
	 * For example, if `"Sheet1"` is sheet ID 0, then:
	 *   `Sheet1!A1:A1 == sheet_id: 0,
	 *                   start_row_index: 0, end_row_index: 1,
	 *                   start_column_index: 0, end_column_index: 1`
	 *   `Sheet1!A3:B4 == sheet_id: 0,
	 *                   start_row_index: 2, end_row_index: 4,
	 *                   start_column_index: 0, end_column_index: 2`
	 *   `Sheet1!A:B == sheet_id: 0,
	 *                 start_column_index: 0, end_column_index: 2`
	 *   `Sheet1!A5:B == sheet_id: 0,
	 *                  start_row_index: 4,
	 *                  start_column_index: 0, end_column_index: 2`
	 *   `Sheet1 == sheet_id:0`
	 * The start index must always be less than or equal to the end index.
	 * If the start index equals the end index, then the range is empty.
	 * Empty ranges are typically not meaningful and are usually rendered in the
	 * UI as `#REF!`.
	 */
	export interface GridRange {

		/** The end column (exclusive) of the range, or not set if unbounded. */
		endColumnIndex?: number;

		/** The end row (exclusive) of the range, or not set if unbounded. */
		endRowIndex?: number;

		/** The sheet this range is on. */
		sheetId?: number;

		/** The start column (inclusive) of the range, or not set if unbounded. */
		startColumnIndex?: number;

		/** The start row (inclusive) of the range, or not set if unbounded. */
		startRowIndex?: number;
	}


	/** The result of adding a banded range. */
	export interface AddBandingResponse {

		/** A banded (alternating colors) range in a sheet. */
		bandedRange?: BandedRange;
	}


	/** Adds a chart to a sheet in the spreadsheet. */
	export interface AddChartRequest {

		/** A chart embedded in a sheet. */
		chart?: EmbeddedChart;
	}


	/** A chart embedded in a sheet. */
	export interface EmbeddedChart {

		/** The ID of the chart. */
		chartId?: number;

		/** The position of an embedded object such as a chart. */
		position?: EmbeddedObjectPosition;

		/** The specifications of a chart. */
		spec?: ChartSpec;
	}


	/** The position of an embedded object such as a chart. */
	export interface EmbeddedObjectPosition {

		/**
		 * If true, the embedded object is put on a new sheet whose ID
		 * is chosen for you. Used only when writing.
		 */
		newSheet?: boolean;

		/** The location an object is overlaid on top of a grid. */
		overlayPosition?: OverlayPosition;

		/**
		 * The sheet this is on. Set only if the embedded object
		 * is on its own sheet. Must be non-negative.
		 */
		sheetId?: number;
	}


	/** The location an object is overlaid on top of a grid. */
	export interface OverlayPosition {

		/**
		 * A coordinate in a sheet.
		 * All indexes are zero-based.
		 */
		anchorCell?: GridCoordinate;

		/** The height of the object, in pixels. Defaults to 371. */
		heightPixels?: number;

		/**
		 * The horizontal offset, in pixels, that the object is offset
		 * from the anchor cell.
		 */
		offsetXPixels?: number;

		/**
		 * The vertical offset, in pixels, that the object is offset
		 * from the anchor cell.
		 */
		offsetYPixels?: number;

		/** The width of the object, in pixels. Defaults to 600. */
		widthPixels?: number;
	}


	/**
	 * A coordinate in a sheet.
	 * All indexes are zero-based.
	 */
	export interface GridCoordinate {

		/** The column index of the coordinate. */
		columnIndex?: number;

		/** The row index of the coordinate. */
		rowIndex?: number;

		/** The sheet this coordinate is on. */
		sheetId?: number;
	}


	/** The specifications of a chart. */
	export interface ChartSpec {

		/**
		 * The alternative text that describes the chart.  This is often used
		 * for accessibility.
		 */
		altText?: string;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		backgroundColor?: Color;

		/** A color value. */
		backgroundColorStyle?: ColorStyle;

		/**
		 * The specification for a basic chart.  See BasicChartType for the list
		 * of charts this supports.
		 */
		basicChart?: BasicChartSpec;

		/** A <a href="/chart/interactive/docs/gallery/bubblechart">bubble chart</a>. */
		bubbleChart?: BubbleChartSpec;

		/**
		 * A <a href="/chart/interactive/docs/gallery/candlestickchart">candlestick
		 * chart</a>.
		 */
		candlestickChart?: CandlestickChartSpec;

		/**
		 * The name of the font to use by default for all chart text (e.g. title,
		 * axis labels, legend).  If a font is specified for a specific part of the
		 * chart it will override this font name.
		 */
		fontName?: string;

		/** Determines how the charts will use hidden rows or columns. */
		hiddenDimensionStrategy?: ChartSpecHiddenDimensionStrategy;

		/**
		 * A <a href="/chart/interactive/docs/gallery/histogram">histogram chart</a>.
		 * A histogram chart groups data items into bins, displaying each bin as a
		 * column of stacked items.  Histograms are used to display the distribution
		 * of a dataset.  Each column of items represents a range into which those
		 * items fall.  The number of bins can be chosen automatically or specified
		 * explicitly.
		 */
		histogramChart?: HistogramChartSpec;

		/**
		 * True to make a chart fill the entire space in which it's rendered with
		 * minimum padding.  False to use the default padding.
		 * (Not applicable to Geo and Org charts.)
		 */
		maximized?: boolean;

		/**
		 * An <a href="/chart/interactive/docs/gallery/orgchart">org chart</a>.
		 * Org charts require a unique set of labels in labels and may
		 * optionally include parent_labels and tooltips.
		 * parent_labels contain, for each node, the label identifying the parent
		 * node.  tooltips contain, for each node, an optional tooltip.
		 * For example, to describe an OrgChart with Alice as the CEO, Bob as the
		 * President (reporting to Alice) and Cathy as VP of Sales (also reporting to
		 * Alice), have labels contain "Alice", "Bob", "Cathy",
		 * parent_labels contain "", "Alice", "Alice" and tooltips contain
		 * "CEO", "President", "VP Sales".
		 */
		orgChart?: OrgChartSpec;

		/** A <a href="/chart/interactive/docs/gallery/piechart">pie chart</a>. */
		pieChart?: PieChartSpec;

		/**
		 * A scorecard chart. Scorecard charts are used to highlight key performance
		 * indicators, known as KPIs, on the spreadsheet. A scorecard chart can
		 * represent things like total sales, average cost, or a top selling item. You
		 * can specify a single data value, or aggregate over a range of data.
		 * Percentage or absolute difference from a baseline value can be highlighted,
		 * like changes over time.
		 */
		scorecardChart?: ScorecardChartSpec;

		/** The subtitle of the chart. */
		subtitle?: string;

		/**
		 * The format of a run of text in a cell.
		 * Absent values indicate that the field isn't specified.
		 */
		subtitleTextFormat?: TextFormat;

		/** Position settings for text. */
		subtitleTextPosition?: TextPosition;

		/** The title of the chart. */
		title?: string;

		/**
		 * The format of a run of text in a cell.
		 * Absent values indicate that the field isn't specified.
		 */
		titleTextFormat?: TextFormat;

		/** Position settings for text. */
		titleTextPosition?: TextPosition;

		/** A <a href="/chart/interactive/docs/gallery/treemap">Treemap chart</a>. */
		treemapChart?: TreemapChartSpec;

		/** A waterfall chart. */
		waterfallChart?: WaterfallChartSpec;
	}


	/**
	 * The specification for a basic chart.  See BasicChartType for the list
	 * of charts this supports.
	 */
	export interface BasicChartSpec {

		/** The axis on the chart. */
		axis?: Array<BasicChartAxis>;

		/** The type of the chart. */
		chartType?: BasicChartSpecChartType;

		/**
		 * The behavior of tooltips and data highlighting when hovering on data and
		 * chart area.
		 */
		compareMode?: BasicChartSpecCompareMode;

		/**
		 * The domain of data this is charting.
		 * Only a single domain is supported.
		 */
		domains?: Array<BasicChartDomain>;

		/**
		 * The number of rows or columns in the data that are "headers".
		 * If not set, Google Sheets will guess how many rows are headers based
		 * on the data.
		 * (Note that BasicChartAxis.title may override the axis title
		 * inferred from the header values.)
		 */
		headerCount?: number;

		/**
		 * If some values in a series are missing, gaps may appear in the chart (e.g,
		 * segments of lines in a line chart will be missing).  To eliminate these
		 * gaps set this to true.
		 * Applies to Line, Area, and Combo charts.
		 */
		interpolateNulls?: boolean;

		/** The position of the chart legend. */
		legendPosition?: BasicChartSpecLegendPosition;

		/**
		 * Gets whether all lines should be rendered smooth or straight by default.
		 * Applies to Line charts.
		 */
		lineSmoothing?: boolean;

		/** The data this chart is visualizing. */
		series?: Array<BasicChartSeries>;

		/**
		 * The stacked type for charts that support vertical stacking.
		 * Applies to Area, Bar, Column, Combo, and Stepped Area charts.
		 */
		stackedType?: BasicChartSpecStackedType;

		/**
		 * True to make the chart 3D.
		 * Applies to Bar and Column charts.
		 */
		threeDimensional?: boolean;
	}


	/**
	 * An axis of the chart.
	 * A chart may not have more than one axis per
	 * axis position.
	 */
	export interface BasicChartAxis {

		/**
		 * The format of a run of text in a cell.
		 * Absent values indicate that the field isn't specified.
		 */
		format?: TextFormat;

		/** The position of this axis. */
		position?: BasicChartAxisPosition;

		/**
		 * The title of this axis. If set, this overrides any title inferred
		 * from headers of the data.
		 */
		title?: string;

		/** Position settings for text. */
		titleTextPosition?: TextPosition;

		/**
		 * The options that define a "view window" for a chart (such as the visible
		 * values in an axis).
		 */
		viewWindowOptions?: ChartAxisViewWindowOptions;
	}


	/**
	 * The format of a run of text in a cell.
	 * Absent values indicate that the field isn't specified.
	 */
	export interface TextFormat {

		/** True if the text is bold. */
		bold?: boolean;

		/** The font family. */
		fontFamily?: string;

		/** The size of the font. */
		fontSize?: number;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		foregroundColor?: Color;

		/** A color value. */
		foregroundColorStyle?: ColorStyle;

		/** True if the text is italicized. */
		italic?: boolean;

		/** True if the text has a strikethrough. */
		strikethrough?: boolean;

		/** True if the text is underlined. */
		underline?: boolean;
	}

	export enum BasicChartAxisPosition { BASIC_CHART_AXIS_POSITION_UNSPECIFIED = 0, BOTTOM_AXIS = 1, LEFT_AXIS = 2, RIGHT_AXIS = 3 }


	/** Position settings for text. */
	export interface TextPosition {

		/** Horizontal alignment setting for the piece of text. */
		horizontalAlignment?: TextPositionHorizontalAlignment;
	}

	export enum TextPositionHorizontalAlignment { HORIZONTAL_ALIGN_UNSPECIFIED = 0, LEFT = 1, CENTER = 2, RIGHT = 3 }


	/**
	 * The options that define a "view window" for a chart (such as the visible
	 * values in an axis).
	 */
	export interface ChartAxisViewWindowOptions {

		/**
		 * The maximum numeric value to be shown in this view window. If unset, will
		 * automatically determine a maximum value that looks good for the data.
		 */
		viewWindowMax?: number;

		/**
		 * The minimum numeric value to be shown in this view window. If unset, will
		 * automatically determine a minimum value that looks good for the data.
		 */
		viewWindowMin?: number;

		/** The view window's mode. */
		viewWindowMode?: ChartAxisViewWindowOptionsViewWindowMode;
	}

	export enum ChartAxisViewWindowOptionsViewWindowMode { DEFAULT_VIEW_WINDOW_MODE = 0, VIEW_WINDOW_MODE_UNSUPPORTED = 1, EXPLICIT = 2, PRETTY = 3 }

	export enum BasicChartSpecChartType { BASIC_CHART_TYPE_UNSPECIFIED = 0, BAR = 1, LINE = 2, AREA = 3, COLUMN = 4, SCATTER = 5, COMBO = 6, STEPPED_AREA = 7 }

	export enum BasicChartSpecCompareMode { BASIC_CHART_COMPARE_MODE_UNSPECIFIED = 0, DATUM = 1, CATEGORY = 2 }


	/**
	 * The domain of a chart.
	 * For example, if charting stock prices over time, this would be the date.
	 */
	export interface BasicChartDomain {

		/** The data included in a domain or series. */
		domain?: ChartData;

		/** True to reverse the order of the domain values (horizontal axis). */
		reversed?: boolean;
	}


	/** The data included in a domain or series. */
	export interface ChartData {

		/** Source ranges for a chart. */
		sourceRange?: ChartSourceRange;
	}


	/** Source ranges for a chart. */
	export interface ChartSourceRange {

		/**
		 * The ranges of data for a series or domain.
		 * Exactly one dimension must have a length of 1,
		 * and all sources in the list must have the same dimension
		 * with length 1.
		 * The domain (if it exists) & all series must have the same number
		 * of source ranges. If using more than one source range, then the source
		 * range at a given offset must be in order and contiguous across the domain
		 * and series.
		 * For example, these are valid configurations:
		 * domain sources: A1:A5
		 * series1 sources: B1:B5
		 * series2 sources: D6:D10
		 * domain sources: A1:A5, C10:C12
		 * series1 sources: B1:B5, D10:D12
		 * series2 sources: C1:C5, E10:E12
		 */
		sources?: Array<GridRange>;
	}

	export enum BasicChartSpecLegendPosition { BASIC_CHART_LEGEND_POSITION_UNSPECIFIED = 0, BOTTOM_LEGEND = 1, LEFT_LEGEND = 2, RIGHT_LEGEND = 3, TOP_LEGEND = 4, NO_LEGEND = 5 }


	/**
	 * A single series of data in a chart.
	 * For example, if charting stock prices over time, multiple series may exist,
	 * one for the "Open Price", "High Price", "Low Price" and "Close Price".
	 */
	export interface BasicChartSeries {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		color?: Color;

		/** A color value. */
		colorStyle?: ColorStyle;

		/** Properties that describe the style of a line. */
		lineStyle?: LineStyle;

		/** The data included in a domain or series. */
		series?: ChartData;

		/**
		 * The minor axis that will specify the range of values for this series.
		 * For example, if charting stocks over time, the "Volume" series
		 * may want to be pinned to the right with the prices pinned to the left,
		 * because the scale of trading volume is different than the scale of
		 * prices.
		 * It is an error to specify an axis that isn't a valid minor axis
		 * for the chart's type.
		 */
		targetAxis?: BasicChartAxisPosition;

		/**
		 * The type of this series. Valid only if the
		 * chartType is
		 * COMBO.
		 * Different types will change the way the series is visualized.
		 * Only LINE, AREA,
		 * and COLUMN are supported.
		 */
		type?: BasicChartSpecChartType;
	}


	/** Properties that describe the style of a line. */
	export interface LineStyle {

		/** The dash type of the line. */
		type?: LineStyleType;

		/** The thickness of the line, in px. */
		width?: number;
	}

	export enum LineStyleType { LINE_DASH_TYPE_UNSPECIFIED = 0, INVISIBLE = 1, CUSTOM = 2, SOLID = 3, DOTTED = 4, MEDIUM_DASHED = 5, MEDIUM_DASHED_DOTTED = 6, LONG_DASHED = 7, LONG_DASHED_DOTTED = 8 }

	export enum BasicChartSpecStackedType { BASIC_CHART_STACKED_TYPE_UNSPECIFIED = 0, NOT_STACKED = 1, STACKED = 2, PERCENT_STACKED = 3 }


	/** A <a href="/chart/interactive/docs/gallery/bubblechart">bubble chart</a>. */
	export interface BubbleChartSpec {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		bubbleBorderColor?: Color;

		/** A color value. */
		bubbleBorderColorStyle?: ColorStyle;

		/** The data included in a domain or series. */
		bubbleLabels?: ChartData;

		/**
		 * The max radius size of the bubbles, in pixels.
		 * If specified, the field must be a positive value.
		 */
		bubbleMaxRadiusSize?: number;

		/**
		 * The minimum radius size of the bubbles, in pixels.
		 * If specific, the field must be a positive value.
		 */
		bubbleMinRadiusSize?: number;

		/**
		 * The opacity of the bubbles between 0 and 1.0.
		 * 0 is fully transparent and 1 is fully opaque.
		 */
		bubbleOpacity?: number;

		/** The data included in a domain or series. */
		bubbleSizes?: ChartData;

		/**
		 * The format of a run of text in a cell.
		 * Absent values indicate that the field isn't specified.
		 */
		bubbleTextStyle?: TextFormat;

		/** The data included in a domain or series. */
		domain?: ChartData;

		/** The data included in a domain or series. */
		groupIds?: ChartData;

		/** Where the legend of the chart should be drawn. */
		legendPosition?: BubbleChartSpecLegendPosition;

		/** The data included in a domain or series. */
		series?: ChartData;
	}

	export enum BubbleChartSpecLegendPosition { BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED = 0, BOTTOM_LEGEND = 1, LEFT_LEGEND = 2, RIGHT_LEGEND = 3, TOP_LEGEND = 4, NO_LEGEND = 5, INSIDE_LEGEND = 6 }


	/**
	 * A <a href="/chart/interactive/docs/gallery/candlestickchart">candlestick
	 * chart</a>.
	 */
	export interface CandlestickChartSpec {

		/**
		 * The Candlestick chart data.
		 * Only one CandlestickData is supported.
		 */
		data?: Array<CandlestickData>;

		/** The domain of a CandlestickChart. */
		domain?: CandlestickDomain;
	}


	/**
	 * The Candlestick chart data, each containing the low, open, close, and high
	 * values for a series.
	 */
	export interface CandlestickData {

		/** The series of a CandlestickData. */
		closeSeries?: CandlestickSeries;

		/** The series of a CandlestickData. */
		highSeries?: CandlestickSeries;

		/** The series of a CandlestickData. */
		lowSeries?: CandlestickSeries;

		/** The series of a CandlestickData. */
		openSeries?: CandlestickSeries;
	}


	/** The series of a CandlestickData. */
	export interface CandlestickSeries {

		/** The data included in a domain or series. */
		data?: ChartData;
	}


	/** The domain of a CandlestickChart. */
	export interface CandlestickDomain {

		/** The data included in a domain or series. */
		data?: ChartData;

		/** True to reverse the order of the domain values (horizontal axis). */
		reversed?: boolean;
	}

	export enum ChartSpecHiddenDimensionStrategy { CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED = 0, SKIP_HIDDEN_ROWS_AND_COLUMNS = 1, SKIP_HIDDEN_ROWS = 2, SKIP_HIDDEN_COLUMNS = 3, SHOW_ALL = 4 }


	/**
	 * A <a href="/chart/interactive/docs/gallery/histogram">histogram chart</a>.
	 * A histogram chart groups data items into bins, displaying each bin as a
	 * column of stacked items.  Histograms are used to display the distribution
	 * of a dataset.  Each column of items represents a range into which those
	 * items fall.  The number of bins can be chosen automatically or specified
	 * explicitly.
	 */
	export interface HistogramChartSpec {

		/**
		 * By default the bucket size (the range of values stacked in a single
		 * column) is chosen automatically, but it may be overridden here.
		 * E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc.
		 * Cannot be negative.
		 * This field is optional.
		 */
		bucketSize?: number;

		/** The position of the chart legend. */
		legendPosition?: HistogramChartSpecLegendPosition;

		/**
		 * The outlier percentile is used to ensure that outliers do not adversely
		 * affect the calculation of bucket sizes.  For example, setting an outlier
		 * percentile of 0.05 indicates that the top and bottom 5% of values when
		 * calculating buckets.  The values are still included in the chart, they will
		 * be added to the first or last buckets instead of their own buckets.
		 * Must be between 0.0 and 0.5.
		 */
		outlierPercentile?: number;

		/**
		 * The series for a histogram may be either a single series of values to be
		 * bucketed or multiple series, each of the same length, containing the name
		 * of the series followed by the values to be bucketed for that series.
		 */
		series?: Array<HistogramSeries>;

		/**
		 * Whether horizontal divider lines should be displayed between items in each
		 * column.
		 */
		showItemDividers?: boolean;
	}

	export enum HistogramChartSpecLegendPosition { HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED = 0, BOTTOM_LEGEND = 1, LEFT_LEGEND = 2, RIGHT_LEGEND = 3, TOP_LEGEND = 4, NO_LEGEND = 5, INSIDE_LEGEND = 6 }


	/** A histogram series containing the series color and data. */
	export interface HistogramSeries {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		barColor?: Color;

		/** A color value. */
		barColorStyle?: ColorStyle;

		/** The data included in a domain or series. */
		data?: ChartData;
	}


	/**
	 * An <a href="/chart/interactive/docs/gallery/orgchart">org chart</a>.
	 * Org charts require a unique set of labels in labels and may
	 * optionally include parent_labels and tooltips.
	 * parent_labels contain, for each node, the label identifying the parent
	 * node.  tooltips contain, for each node, an optional tooltip.
	 * For example, to describe an OrgChart with Alice as the CEO, Bob as the
	 * President (reporting to Alice) and Cathy as VP of Sales (also reporting to
	 * Alice), have labels contain "Alice", "Bob", "Cathy",
	 * parent_labels contain "", "Alice", "Alice" and tooltips contain
	 * "CEO", "President", "VP Sales".
	 */
	export interface OrgChartSpec {

		/** The data included in a domain or series. */
		labels?: ChartData;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		nodeColor?: Color;

		/** A color value. */
		nodeColorStyle?: ColorStyle;

		/** The size of the org chart nodes. */
		nodeSize?: OrgChartSpecNodeSize;

		/** The data included in a domain or series. */
		parentLabels?: ChartData;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		selectedNodeColor?: Color;

		/** A color value. */
		selectedNodeColorStyle?: ColorStyle;

		/** The data included in a domain or series. */
		tooltips?: ChartData;
	}

	export enum OrgChartSpecNodeSize { ORG_CHART_LABEL_SIZE_UNSPECIFIED = 0, SMALL = 1, MEDIUM = 2, LARGE = 3 }


	/** A <a href="/chart/interactive/docs/gallery/piechart">pie chart</a>. */
	export interface PieChartSpec {

		/** The data included in a domain or series. */
		domain?: ChartData;

		/** Where the legend of the pie chart should be drawn. */
		legendPosition?: PieChartSpecLegendPosition;

		/** The size of the hole in the pie chart. */
		pieHole?: number;

		/** The data included in a domain or series. */
		series?: ChartData;

		/** True if the pie is three dimensional. */
		threeDimensional?: boolean;
	}

	export enum PieChartSpecLegendPosition { PIE_CHART_LEGEND_POSITION_UNSPECIFIED = 0, BOTTOM_LEGEND = 1, LEFT_LEGEND = 2, RIGHT_LEGEND = 3, TOP_LEGEND = 4, NO_LEGEND = 5, LABELED_LEGEND = 6 }


	/**
	 * A scorecard chart. Scorecard charts are used to highlight key performance
	 * indicators, known as KPIs, on the spreadsheet. A scorecard chart can
	 * represent things like total sales, average cost, or a top selling item. You
	 * can specify a single data value, or aggregate over a range of data.
	 * Percentage or absolute difference from a baseline value can be highlighted,
	 * like changes over time.
	 */
	export interface ScorecardChartSpec {

		/**
		 * The aggregation type for key and baseline chart data in scorecard chart.
		 * This field is optional.
		 */
		aggregateType?: ScorecardChartSpecAggregateType;

		/** The data included in a domain or series. */
		baselineValueData?: ChartData;

		/** Formatting options for baseline value. */
		baselineValueFormat?: BaselineValueFormat;

		/** Custom number formatting options for chart attributes. */
		customFormatOptions?: ChartCustomNumberFormatOptions;

		/** The data included in a domain or series. */
		keyValueData?: ChartData;

		/** Formatting options for key value. */
		keyValueFormat?: KeyValueFormat;

		/**
		 * The number format source used in the scorecard chart.
		 * This field is optional.
		 */
		numberFormatSource?: ScorecardChartSpecNumberFormatSource;

		/**
		 * Value to scale scorecard key and baseline value. For example, a factor of
		 * 10 can be used to divide all values in the chart by 10.
		 * This field is optional.
		 */
		scaleFactor?: number;
	}

	export enum ScorecardChartSpecAggregateType { CHART_AGGREGATE_TYPE_UNSPECIFIED = 0, AVERAGE = 1, COUNT = 2, MAX = 3, MEDIAN = 4, MIN = 5, SUM = 6 }


	/** Formatting options for baseline value. */
	export interface BaselineValueFormat {

		/** The comparison type of key value with baseline value. */
		comparisonType?: BaselineValueFormatComparisonType;

		/**
		 * Description which is appended after the baseline value.
		 * This field is optional.
		 */
		description?: string;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		negativeColor?: Color;

		/** A color value. */
		negativeColorStyle?: ColorStyle;

		/** Position settings for text. */
		position?: TextPosition;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		positiveColor?: Color;

		/** A color value. */
		positiveColorStyle?: ColorStyle;

		/**
		 * The format of a run of text in a cell.
		 * Absent values indicate that the field isn't specified.
		 */
		textFormat?: TextFormat;
	}

	export enum BaselineValueFormatComparisonType { COMPARISON_TYPE_UNDEFINED = 0, ABSOLUTE_DIFFERENCE = 1, PERCENTAGE_DIFFERENCE = 2 }


	/** Custom number formatting options for chart attributes. */
	export interface ChartCustomNumberFormatOptions {

		/**
		 * Custom prefix to be prepended to the chart attribute.
		 * This field is optional.
		 */
		prefix?: string;

		/**
		 * Custom suffix to be appended to the chart attribute.
		 * This field is optional.
		 */
		suffix?: string;
	}


	/** Formatting options for key value. */
	export interface KeyValueFormat {

		/** Position settings for text. */
		position?: TextPosition;

		/**
		 * The format of a run of text in a cell.
		 * Absent values indicate that the field isn't specified.
		 */
		textFormat?: TextFormat;
	}

	export enum ScorecardChartSpecNumberFormatSource { CHART_NUMBER_FORMAT_SOURCE_UNDEFINED = 0, FROM_DATA = 1, CUSTOM = 2 }


	/** A <a href="/chart/interactive/docs/gallery/treemap">Treemap chart</a>. */
	export interface TreemapChartSpec {

		/** The data included in a domain or series. */
		colorData?: ChartData;

		/** A color scale for a treemap chart. */
		colorScale?: TreemapChartColorScale;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		headerColor?: Color;

		/** A color value. */
		headerColorStyle?: ColorStyle;

		/** True to hide tooltips. */
		hideTooltips?: boolean;

		/**
		 * The number of additional data levels beyond the labeled levels to be shown
		 * on the treemap chart. These levels are not interactive and are shown
		 * without their labels. Defaults to 0 if not specified.
		 */
		hintedLevels?: number;

		/** The data included in a domain or series. */
		labels?: ChartData;

		/**
		 * The number of data levels to show on the treemap chart. These levels are
		 * interactive and are shown with their labels. Defaults to 2 if not
		 * specified.
		 */
		levels?: number;

		/**
		 * The maximum possible data value. Cells with values greater than this will
		 * have the same color as cells with this value. If not specified, defaults
		 * to the actual maximum value from color_data, or the maximum value from
		 * size_data if color_data is not specified.
		 */
		maxValue?: number;

		/**
		 * The minimum possible data value. Cells with values less than this will
		 * have the same color as cells with this value. If not specified, defaults
		 * to the actual minimum value from color_data, or the minimum value from
		 * size_data if color_data is not specified.
		 */
		minValue?: number;

		/** The data included in a domain or series. */
		parentLabels?: ChartData;

		/** The data included in a domain or series. */
		sizeData?: ChartData;

		/**
		 * The format of a run of text in a cell.
		 * Absent values indicate that the field isn't specified.
		 */
		textFormat?: TextFormat;
	}


	/** A color scale for a treemap chart. */
	export interface TreemapChartColorScale {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		maxValueColor?: Color;

		/** A color value. */
		maxValueColorStyle?: ColorStyle;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		midValueColor?: Color;

		/** A color value. */
		midValueColorStyle?: ColorStyle;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		minValueColor?: Color;

		/** A color value. */
		minValueColorStyle?: ColorStyle;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		noDataColor?: Color;

		/** A color value. */
		noDataColorStyle?: ColorStyle;
	}


	/** A waterfall chart. */
	export interface WaterfallChartSpec {

		/** Properties that describe the style of a line. */
		connectorLineStyle?: LineStyle;

		/** The domain of a waterfall chart. */
		domain?: WaterfallChartDomain;

		/** True to interpret the first value as a total. */
		firstValueIsTotal?: boolean;

		/** True to hide connector lines between columns. */
		hideConnectorLines?: boolean;

		/** The data this waterfall chart is visualizing. */
		series?: Array<WaterfallChartSeries>;

		/** The stacked type. */
		stackedType?: WaterfallChartSpecStackedType;
	}


	/** The domain of a waterfall chart. */
	export interface WaterfallChartDomain {

		/** The data included in a domain or series. */
		data?: ChartData;

		/** True to reverse the order of the domain values (horizontal axis). */
		reversed?: boolean;
	}


	/** A single series of data for a waterfall chart. */
	export interface WaterfallChartSeries {

		/**
		 * Custom subtotal columns appearing in this series. The order in which
		 * subtotals are defined is not significant. Only one subtotal may be
		 * defined for each data point.
		 */
		customSubtotals?: Array<WaterfallChartCustomSubtotal>;

		/** The data included in a domain or series. */
		data?: ChartData;

		/**
		 * True to hide the subtotal column from the end of the series. By default,
		 * a subtotal column will appear at the end of each series. Setting this
		 * field to true will hide that subtotal column for this series.
		 */
		hideTrailingSubtotal?: boolean;

		/** Styles for a waterfall chart column. */
		negativeColumnsStyle?: WaterfallChartColumnStyle;

		/** Styles for a waterfall chart column. */
		positiveColumnsStyle?: WaterfallChartColumnStyle;

		/** Styles for a waterfall chart column. */
		subtotalColumnsStyle?: WaterfallChartColumnStyle;
	}


	/** A custom subtotal column for a waterfall chart series. */
	export interface WaterfallChartCustomSubtotal {

		/**
		 * True if the data point at subtotal_index is the subtotal. If false,
		 * the subtotal will be computed and appear after the data point.
		 */
		dataIsSubtotal?: boolean;

		/** A label for the subtotal column. */
		label?: string;

		/**
		 * The 0-based index of a data point within the series. If
		 * data_is_subtotal is true, the data point at this index is the
		 * subtotal. Otherwise, the subtotal appears after the data point with
		 * this index. A series can have multiple subtotals at arbitrary indices,
		 * but subtotals do not affect the indices of the data points. For
		 * example, if a series has three data points, their indices will always
		 * be 0, 1, and 2, regardless of how many subtotals exist on the series or
		 * what data points they are associated with.
		 */
		subtotalIndex?: number;
	}


	/** Styles for a waterfall chart column. */
	export interface WaterfallChartColumnStyle {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		color?: Color;

		/** A color value. */
		colorStyle?: ColorStyle;

		/** The label of the column's legend. */
		label?: string;
	}

	export enum WaterfallChartSpecStackedType { WATERFALL_STACKED_TYPE_UNSPECIFIED = 0, STACKED = 1, SEQUENTIAL = 2 }


	/** The result of adding a chart to a spreadsheet. */
	export interface AddChartResponse {

		/** A chart embedded in a sheet. */
		chart?: EmbeddedChart;
	}


	/**
	 * Adds a new conditional format rule at the given index.
	 * All subsequent rules' indexes are incremented.
	 */
	export interface AddConditionalFormatRuleRequest {

		/** The zero-based index where the rule should be inserted. */
		index?: number;

		/** A rule describing a conditional format. */
		rule?: ConditionalFormatRule;
	}


	/** A rule describing a conditional format. */
	export interface ConditionalFormatRule {

		/** A rule that may or may not match, depending on the condition. */
		booleanRule?: BooleanRule;

		/**
		 * A rule that applies a gradient color scale format, based on
		 * the interpolation points listed. The format of a cell will vary
		 * based on its contents as compared to the values of the interpolation
		 * points.
		 */
		gradientRule?: GradientRule;

		/**
		 * The ranges that are formatted if the condition is true.
		 * All the ranges must be on the same grid.
		 */
		ranges?: Array<GridRange>;
	}


	/** A rule that may or may not match, depending on the condition. */
	export interface BooleanRule {

		/**
		 * A condition that can evaluate to true or false.
		 * BooleanConditions are used by conditional formatting,
		 * data validation, and the criteria in filters.
		 */
		condition?: BooleanCondition;

		/** The format of a cell. */
		format?: CellFormat;
	}


	/**
	 * A condition that can evaluate to true or false.
	 * BooleanConditions are used by conditional formatting,
	 * data validation, and the criteria in filters.
	 */
	export interface BooleanCondition {

		/** The type of condition. */
		type?: BooleanConditionType;

		/**
		 * The values of the condition. The number of supported values depends
		 * on the condition type.  Some support zero values,
		 * others one or two values,
		 * and ConditionType.ONE_OF_LIST supports an arbitrary number of values.
		 */
		values?: Array<ConditionValue>;
	}

	export enum BooleanConditionType { CONDITION_TYPE_UNSPECIFIED = 0, NUMBER_GREATER = 1, NUMBER_GREATER_THAN_EQ = 2, NUMBER_LESS = 3, NUMBER_LESS_THAN_EQ = 4, NUMBER_EQ = 5, NUMBER_NOT_EQ = 6, NUMBER_BETWEEN = 7, NUMBER_NOT_BETWEEN = 8, TEXT_CONTAINS = 9, TEXT_NOT_CONTAINS = 10, TEXT_STARTS_WITH = 11, TEXT_ENDS_WITH = 12, TEXT_EQ = 13, TEXT_IS_EMAIL = 14, TEXT_IS_URL = 15, DATE_EQ = 16, DATE_BEFORE = 17, DATE_AFTER = 18, DATE_ON_OR_BEFORE = 19, DATE_ON_OR_AFTER = 20, DATE_BETWEEN = 21, DATE_NOT_BETWEEN = 22, DATE_IS_VALID = 23, ONE_OF_RANGE = 24, ONE_OF_LIST = 25, BLANK = 26, NOT_BLANK = 27, CUSTOM_FORMULA = 28, BOOLEAN = 29 }


	/** The value of the condition. */
	export interface ConditionValue {

		/**
		 * A relative date (based on the current date).
		 * Valid only if the type is
		 * DATE_BEFORE,
		 * DATE_AFTER,
		 * DATE_ON_OR_BEFORE or
		 * DATE_ON_OR_AFTER.
		 * Relative dates are not supported in data validation.
		 * They are supported only in conditional formatting and
		 * conditional filters.
		 */
		relativeDate?: ConditionValueRelativeDate;

		/**
		 * A value the condition is based on.
		 * The value is parsed as if the user typed into a cell.
		 * Formulas are supported (and must begin with an `=` or a '+').
		 */
		userEnteredValue?: string;
	}

	export enum ConditionValueRelativeDate { RELATIVE_DATE_UNSPECIFIED = 0, PAST_YEAR = 1, PAST_MONTH = 2, PAST_WEEK = 3, YESTERDAY = 4, TODAY = 5, TOMORROW = 6 }


	/** The format of a cell. */
	export interface CellFormat {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		backgroundColor?: Color;

		/** A color value. */
		backgroundColorStyle?: ColorStyle;

		/** The borders of the cell. */
		borders?: Borders;

		/** The horizontal alignment of the value in the cell. */
		horizontalAlignment?: TextPositionHorizontalAlignment;

		/** How a hyperlink, if it exists, should be displayed in the cell. */
		hyperlinkDisplayType?: CellFormatHyperlinkDisplayType;

		/** The number format of a cell. */
		numberFormat?: NumberFormat;

		/**
		 * The amount of padding around the cell, in pixels.
		 * When updating padding, every field must be specified.
		 */
		padding?: Padding;

		/** The direction of the text in the cell. */
		textDirection?: CellFormatTextDirection;

		/**
		 * The format of a run of text in a cell.
		 * Absent values indicate that the field isn't specified.
		 */
		textFormat?: TextFormat;

		/** The rotation applied to text in a cell. */
		textRotation?: TextRotation;

		/** The vertical alignment of the value in the cell. */
		verticalAlignment?: CellFormatVerticalAlignment;

		/** The wrap strategy for the value in the cell. */
		wrapStrategy?: CellFormatWrapStrategy;
	}


	/** The borders of the cell. */
	export interface Borders {

		/** A border along a cell. */
		bottom?: Border;

		/** A border along a cell. */
		left?: Border;

		/** A border along a cell. */
		right?: Border;

		/** A border along a cell. */
		top?: Border;
	}


	/** A border along a cell. */
	export interface Border {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		color?: Color;

		/** A color value. */
		colorStyle?: ColorStyle;

		/** The style of the border. */
		style?: BorderStyle;

		/**
		 * The width of the border, in pixels.
		 * Deprecated; the width is determined by the "style" field.
		 */
		width?: number;
	}

	export enum BorderStyle { STYLE_UNSPECIFIED = 0, DOTTED = 1, DASHED = 2, SOLID = 3, SOLID_MEDIUM = 4, SOLID_THICK = 5, NONE = 6, DOUBLE = 7 }

	export enum CellFormatHyperlinkDisplayType { HYPERLINK_DISPLAY_TYPE_UNSPECIFIED = 0, LINKED = 1, PLAIN_TEXT = 2 }


	/** The number format of a cell. */
	export interface NumberFormat {

		/**
		 * Pattern string used for formatting.  If not set, a default pattern based on
		 * the user's locale will be used if necessary for the given type.
		 * See the [Date and Number Formats guide](/sheets/api/guides/formats) for
		 * more information about the supported patterns.
		 */
		pattern?: string;

		/**
		 * The type of the number format.
		 * When writing, this field must be set.
		 */
		type?: NumberFormatType;
	}

	export enum NumberFormatType { NUMBER_FORMAT_TYPE_UNSPECIFIED = 0, TEXT = 1, NUMBER = 2, PERCENT = 3, CURRENCY = 4, DATE = 5, TIME = 6, DATE_TIME = 7, SCIENTIFIC = 8 }


	/**
	 * The amount of padding around the cell, in pixels.
	 * When updating padding, every field must be specified.
	 */
	export interface Padding {

		/** The bottom padding of the cell. */
		bottom?: number;

		/** The left padding of the cell. */
		left?: number;

		/** The right padding of the cell. */
		right?: number;

		/** The top padding of the cell. */
		top?: number;
	}

	export enum CellFormatTextDirection { TEXT_DIRECTION_UNSPECIFIED = 0, LEFT_TO_RIGHT = 1, RIGHT_TO_LEFT = 2 }


	/** The rotation applied to text in a cell. */
	export interface TextRotation {

		/**
		 * The angle between the standard orientation and the desired orientation.
		 * Measured in degrees. Valid values are between -90 and 90. Positive
		 * angles are angled upwards, negative are angled downwards.
		 * Note: For LTR text direction positive angles are in the
		 * counterclockwise direction, whereas for RTL they are in the clockwise
		 * direction
		 */
		angle?: number;

		/**
		 * If true, text reads top to bottom, but the orientation of individual
		 * characters is unchanged.
		 * For example:
		 * | V |
		 * | e |
		 * | r |
		 * | t |
		 * | i |
		 * | c |
		 * | a |
		 * | l |
		 */
		vertical?: boolean;
	}

	export enum CellFormatVerticalAlignment { VERTICAL_ALIGN_UNSPECIFIED = 0, TOP = 1, MIDDLE = 2, BOTTOM = 3 }

	export enum CellFormatWrapStrategy { WRAP_STRATEGY_UNSPECIFIED = 0, OVERFLOW_CELL = 1, LEGACY_WRAP = 2, CLIP = 3, WRAP = 4 }


	/**
	 * A rule that applies a gradient color scale format, based on
	 * the interpolation points listed. The format of a cell will vary
	 * based on its contents as compared to the values of the interpolation
	 * points.
	 */
	export interface GradientRule {

		/**
		 * A single interpolation point on a gradient conditional format.
		 * These pin the gradient color scale according to the color,
		 * type and value chosen.
		 */
		maxpoint?: InterpolationPoint;

		/**
		 * A single interpolation point on a gradient conditional format.
		 * These pin the gradient color scale according to the color,
		 * type and value chosen.
		 */
		midpoint?: InterpolationPoint;

		/**
		 * A single interpolation point on a gradient conditional format.
		 * These pin the gradient color scale according to the color,
		 * type and value chosen.
		 */
		minpoint?: InterpolationPoint;
	}


	/**
	 * A single interpolation point on a gradient conditional format.
	 * These pin the gradient color scale according to the color,
	 * type and value chosen.
	 */
	export interface InterpolationPoint {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		color?: Color;

		/** A color value. */
		colorStyle?: ColorStyle;

		/** How the value should be interpreted. */
		type?: InterpolationPointType;

		/**
		 * The value this interpolation point uses.  May be a formula.
		 * Unused if type is MIN or
		 * MAX.
		 */
		value?: string;
	}

	export enum InterpolationPointType { INTERPOLATION_POINT_TYPE_UNSPECIFIED = 0, MIN = 1, MAX = 2, NUMBER = 3, PERCENT = 4, PERCENTILE = 5 }


	/**
	 * Creates a group over the specified range.
	 * If the requested range is a superset of the range of an existing group G,
	 * then the depth of G is incremented and this new group G' has the
	 * depth of that group. For example, a group [C:D, depth 1] + [B:E] results in
	 * groups [B:E, depth 1] and [C:D, depth 2].
	 * If the requested range is a subset of the range of an existing group G,
	 * then the depth of the new group G' becomes one greater than the depth of G.
	 * For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1]
	 * and [C:D, depth 2].
	 * If the requested range starts before and ends within, or starts within and
	 * ends after, the range of an existing group G, then the range of the existing
	 * group G becomes the union of the ranges, and the new group G' has
	 * depth one greater than the depth of G and range as the intersection of the
	 * ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E,
	 * depth 1] and [C:D, depth 2].
	 */
	export interface AddDimensionGroupRequest {

		/**
		 * A range along a single dimension on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open: the start index is inclusive
		 * and the end index is exclusive.
		 * Missing indexes indicate the range is unbounded on that side.
		 */
		range?: DimensionRange;
	}


	/**
	 * A range along a single dimension on a sheet.
	 * All indexes are zero-based.
	 * Indexes are half open: the start index is inclusive
	 * and the end index is exclusive.
	 * Missing indexes indicate the range is unbounded on that side.
	 */
	export interface DimensionRange {

		/** The dimension of the span. */
		dimension?: DimensionRangeDimension;

		/** The end (exclusive) of the span, or not set if unbounded. */
		endIndex?: number;

		/** The sheet this span is on. */
		sheetId?: number;

		/** The start (inclusive) of the span, or not set if unbounded. */
		startIndex?: number;
	}

	export enum DimensionRangeDimension { DIMENSION_UNSPECIFIED = 0, ROWS = 1, COLUMNS = 2 }


	/** The result of adding a group. */
	export interface AddDimensionGroupResponse {

		/** All groups of a dimension after adding a group to that dimension. */
		dimensionGroups?: Array<DimensionGroup>;
	}


	/**
	 * A group over an interval of rows or columns on a sheet, which can contain or
	 * be contained within other groups. A group can be collapsed or expanded as a
	 * unit on the sheet.
	 */
	export interface DimensionGroup {

		/**
		 * This field is true if this group is collapsed. A collapsed group remains
		 * collapsed if an overlapping group at a shallower depth is expanded.
		 * A true value does not imply that all dimensions within the group are
		 * hidden, since a dimension's visibility can change independently from this
		 * group property. However, when this property is updated, all dimensions
		 * within it are set to hidden if this field is true, or set to visible if
		 * this field is false.
		 */
		collapsed?: boolean;

		/**
		 * The depth of the group, representing how many groups have a range that
		 * wholly contains the range of this group.
		 */
		depth?: number;

		/**
		 * A range along a single dimension on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open: the start index is inclusive
		 * and the end index is exclusive.
		 * Missing indexes indicate the range is unbounded on that side.
		 */
		range?: DimensionRange;
	}


	/** Adds a filter view. */
	export interface AddFilterViewRequest {

		/** A filter view. */
		filter?: FilterView;
	}


	/** A filter view. */
	export interface FilterView {

		/**
		 * The criteria for showing/hiding values per column.
		 * The map's key is the column index, and the value is the criteria for
		 * that column.
		 */
		criteria?: {[id: string]: FilterCriteria };

		/** The ID of the filter view. */
		filterViewId?: number;

		/**
		 * The named range this filter view is backed by, if any.
		 * When writing, only one of range or named_range_id
		 * may be set.
		 */
		namedRangeId?: string;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/**
		 * The sort order per column. Later specifications are used when values
		 * are equal in the earlier specifications.
		 */
		sortSpecs?: Array<SortSpec>;

		/** The name of the filter view. */
		title?: string;
	}


	/** Criteria for showing/hiding rows in a filter or filter view. */
	export interface FilterCriteria {

		/**
		 * A condition that can evaluate to true or false.
		 * BooleanConditions are used by conditional formatting,
		 * data validation, and the criteria in filters.
		 */
		condition?: BooleanCondition;

		/** Values that should be hidden. */
		hiddenValues?: Array<string>;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		visibleBackgroundColor?: Color;

		/** A color value. */
		visibleBackgroundColorStyle?: ColorStyle;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		visibleForegroundColor?: Color;

		/** A color value. */
		visibleForegroundColorStyle?: ColorStyle;
	}


	/** A sort order associated with a specific column or row. */
	export interface SortSpec {

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		backgroundColor?: Color;

		/** A color value. */
		backgroundColorStyle?: ColorStyle;

		/** The dimension the sort should be applied to. */
		dimensionIndex?: number;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		foregroundColor?: Color;

		/** A color value. */
		foregroundColorStyle?: ColorStyle;

		/** The order data should be sorted. */
		sortOrder?: SortSpecSortOrder;
	}

	export enum SortSpecSortOrder { SORT_ORDER_UNSPECIFIED = 0, ASCENDING = 1, DESCENDING = 2 }


	/** The result of adding a filter view. */
	export interface AddFilterViewResponse {

		/** A filter view. */
		filter?: FilterView;
	}


	/** Adds a named range to the spreadsheet. */
	export interface AddNamedRangeRequest {

		/** A named range. */
		namedRange?: NamedRange;
	}


	/** A named range. */
	export interface NamedRange {

		/** The name of the named range. */
		name?: string;

		/** The ID of the named range. */
		namedRangeId?: string;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;
	}


	/** The result of adding a named range. */
	export interface AddNamedRangeResponse {

		/** A named range. */
		namedRange?: NamedRange;
	}


	/** Adds a new protected range. */
	export interface AddProtectedRangeRequest {

		/** A protected range. */
		protectedRange?: ProtectedRange;
	}


	/** A protected range. */
	export interface ProtectedRange {

		/** The description of this protected range. */
		description?: string;

		/** The editors of a protected range. */
		editors?: Editors;

		/**
		 * The named range this protected range is backed by, if any.
		 * When writing, only one of range or named_range_id
		 * may be set.
		 */
		namedRangeId?: string;

		/**
		 * The ID of the protected range.
		 * This field is read-only.
		 */
		protectedRangeId?: number;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/**
		 * True if the user who requested this protected range can edit the
		 * protected area.
		 * This field is read-only.
		 */
		requestingUserCanEdit?: boolean;

		/**
		 * The list of unprotected ranges within a protected sheet.
		 * Unprotected ranges are only supported on protected sheets.
		 */
		unprotectedRanges?: Array<GridRange>;

		/**
		 * True if this protected range will show a warning when editing.
		 * Warning-based protection means that every user can edit data in the
		 * protected range, except editing will prompt a warning asking the user
		 * to confirm the edit.
		 * When writing: if this field is true, then editors is ignored.
		 * Additionally, if this field is changed from true to false and the
		 * `editors` field is not set (nor included in the field mask), then
		 * the editors will be set to all the editors in the document.
		 */
		warningOnly?: boolean;
	}


	/** The editors of a protected range. */
	export interface Editors {

		/**
		 * True if anyone in the document's domain has edit access to the protected
		 * range.  Domain protection is only supported on documents within a domain.
		 */
		domainUsersCanEdit?: boolean;

		/** The email addresses of groups with edit access to the protected range. */
		groups?: Array<string>;

		/** The email addresses of users with edit access to the protected range. */
		users?: Array<string>;
	}


	/** The result of adding a new protected range. */
	export interface AddProtectedRangeResponse {

		/** A protected range. */
		protectedRange?: ProtectedRange;
	}


	/**
	 * Adds a new sheet.
	 * When a sheet is added at a given index,
	 * all subsequent sheets' indexes are incremented.
	 * To add an object sheet, use AddChartRequest instead and specify
	 * EmbeddedObjectPosition.sheetId or
	 * EmbeddedObjectPosition.newSheet.
	 */
	export interface AddSheetRequest {

		/** Properties of a sheet. */
		properties?: SheetProperties;
	}


	/** Properties of a sheet. */
	export interface SheetProperties {

		/** Properties of a grid. */
		gridProperties?: GridProperties;

		/** True if the sheet is hidden in the UI, false if it's visible. */
		hidden?: boolean;

		/**
		 * The index of the sheet within the spreadsheet.
		 * When adding or updating sheet properties, if this field
		 * is excluded then the sheet is added or moved to the end
		 * of the sheet list. When updating sheet indices or inserting
		 * sheets, movement is considered in "before the move" indexes.
		 * For example, if there were 3 sheets (S1, S2, S3) in order to
		 * move S1 ahead of S2 the index would have to be set to 2. A sheet
		 * index update request is ignored if the requested index is
		 * identical to the sheets current index or if the requested new
		 * index is equal to the current sheet index + 1.
		 */
		index?: number;

		/** True if the sheet is an RTL sheet instead of an LTR sheet. */
		rightToLeft?: boolean;

		/**
		 * The ID of the sheet. Must be non-negative.
		 * This field cannot be changed once set.
		 */
		sheetId?: number;

		/**
		 * The type of sheet. Defaults to GRID.
		 * This field cannot be changed once set.
		 */
		sheetType?: SheetPropertiesSheetType;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		tabColor?: Color;

		/** A color value. */
		tabColorStyle?: ColorStyle;

		/** The name of the sheet. */
		title?: string;
	}


	/** Properties of a grid. */
	export interface GridProperties {

		/** The number of columns in the grid. */
		columnCount?: number;

		/** True if the column grouping control toggle is shown after the group. */
		columnGroupControlAfter?: boolean;

		/** The number of columns that are frozen in the grid. */
		frozenColumnCount?: number;

		/** The number of rows that are frozen in the grid. */
		frozenRowCount?: number;

		/** True if the grid isn't showing gridlines in the UI. */
		hideGridlines?: boolean;

		/** The number of rows in the grid. */
		rowCount?: number;

		/** True if the row grouping control toggle is shown after the group. */
		rowGroupControlAfter?: boolean;
	}

	export enum SheetPropertiesSheetType { SHEET_TYPE_UNSPECIFIED = 0, GRID = 1, OBJECT = 2 }


	/** The result of adding a sheet. */
	export interface AddSheetResponse {

		/** Properties of a sheet. */
		properties?: SheetProperties;
	}


	/** Adds a slicer to a sheet in the spreadsheet. */
	export interface AddSlicerRequest {

		/** A slicer in a sheet. */
		slicer?: Slicer;
	}


	/** A slicer in a sheet. */
	export interface Slicer {

		/** The position of an embedded object such as a chart. */
		position?: EmbeddedObjectPosition;

		/** The ID of the slicer. */
		slicerId?: number;

		/** The specifications of a slicer. */
		spec?: SlicerSpec;
	}


	/** The specifications of a slicer. */
	export interface SlicerSpec {

		/**
		 * True if the filter should apply to pivot tables.
		 * If not set, default to `True`.
		 */
		applyToPivotTables?: boolean;

		/**
		 * Represents a color in the RGBA color space. This representation is designed
		 * for simplicity of conversion to/from color representations in various
		 * languages over compactness; for example, the fields of this representation
		 * can be trivially provided to the constructor of "java.awt.Color" in Java; it
		 * can also be trivially provided to UIColor's "+colorWithRed:green:blue:alpha"
		 * method in iOS; and, with just a little work, it can be easily formatted into
		 * a CSS "rgba()" string in JavaScript, as well.
		 * Note: this proto does not carry information about the absolute color space
		 * that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,
		 * DCI-P3, BT.2020, etc.). By default, applications SHOULD assume the sRGB color
		 * space.
		 * Example (Java):
		 * import com.google.type.Color;
		 * // ...
		 * public static java.awt.Color fromProto(Color protocolor) {
		 * float alpha = protocolor.hasAlpha()
		 * ? protocolor.getAlpha().getValue()
		 * : 1.0;
		 * return new java.awt.Color(
		 * protocolor.getRed(),
		 * protocolor.getGreen(),
		 * protocolor.getBlue(),
		 * alpha);
		 * }
		 * public static Color toProto(java.awt.Color color) {
		 * float red = (float) color.getRed();
		 * float green = (float) color.getGreen();
		 * float blue = (float) color.getBlue();
		 * float denominator = 255.0;
		 * Color.Builder resultBuilder =
		 * Color
		 * .newBuilder()
		 * .setRed(red / denominator)
		 * .setGreen(green / denominator)
		 * .setBlue(blue / denominator);
		 * int alpha = color.getAlpha();
		 * if (alpha != 255) {
		 * result.setAlpha(
		 * FloatValue
		 * .newBuilder()
		 * .setValue(((float) alpha) / denominator)
		 * .build());
		 * }
		 * return resultBuilder.build();
		 * }
		 * // ...
		 * Example (iOS / Obj-C):
		 * // ...
		 * static UIColor* fromProto(Color* protocolor) {
		 * float red = [protocolor red];
		 * float green = [protocolor green];
		 * float blue = [protocolor blue];
		 * FloatValue* alpha_wrapper = [protocolor alpha];
		 * float alpha = 1.0;
		 * if (alpha_wrapper != nil) {
		 * alpha = [alpha_wrapper value];
		 * }
		 * return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];
		 * }
		 * static Color* toProto(UIColor* color) {
		 * CGFloat red, green, blue, alpha;
		 * if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {
		 * return nil;
		 * }
		 * Color* result = [[Color alloc] init];
		 * [result setRed:red];
		 * [result setGreen:green];
		 * [result setBlue:blue];
		 * if (alpha <= 0.9999) {
		 * [result setAlpha:floatWrapperWithValue(alpha)];
		 * }
		 * [result autorelease];
		 * return result;
		 * }
		 * // ...
		 * Example (JavaScript):
		 * // ...
		 * var protoToCssColor = function(rgb_color) {
		 * var redFrac = rgb_color.red || 0.0;
		 * var greenFrac = rgb_color.green || 0.0;
		 * var blueFrac = rgb_color.blue || 0.0;
		 * var red = Math.floor(redFrac * 255);
		 * var green = Math.floor(greenFrac * 255);
		 * var blue = Math.floor(blueFrac * 255);
		 * if (!('alpha' in rgb_color)) {
		 * return rgbToCssColor_(red, green, blue);
		 * }
		 * var alphaFrac = rgb_color.alpha.value || 0.0;
		 * var rgbParams = [red, green, blue].join(',');
		 * return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');
		 * };
		 * var rgbToCssColor_ = function(red, green, blue) {
		 * var rgbNumber = new Number((red << 16) | (green << 8) | blue);
		 * var hexString = rgbNumber.toString(16);
		 * var missingZeros = 6 - hexString.length;
		 * var resultBuilder = ['#'];
		 * for (var i = 0; i < missingZeros; i++) {
		 * resultBuilder.push('0');
		 * }
		 * resultBuilder.push(hexString);
		 * return resultBuilder.join('');
		 * };
		 * // ...
		 */
		backgroundColor?: Color;

		/** A color value. */
		backgroundColorStyle?: ColorStyle;

		/** The column index in the data table on which the filter is applied to. */
		columnIndex?: number;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		dataRange?: GridRange;

		/** Criteria for showing/hiding rows in a filter or filter view. */
		filterCriteria?: FilterCriteria;

		/**
		 * The horizontal alignment of title in the slicer.
		 * If unspecified, defaults to `LEFT`
		 */
		horizontalAlignment?: TextPositionHorizontalAlignment;

		/**
		 * The format of a run of text in a cell.
		 * Absent values indicate that the field isn't specified.
		 */
		textFormat?: TextFormat;

		/** The title of the slicer. */
		title?: string;
	}


	/** The result of adding a slicer to a spreadsheet. */
	export interface AddSlicerResponse {

		/** A slicer in a sheet. */
		slicer?: Slicer;
	}


	/**
	 * Adds new cells after the last row with data in a sheet,
	 * inserting new rows into the sheet if necessary.
	 */
	export interface AppendCellsRequest {

		/**
		 * The fields of CellData that should be updated.
		 * At least one field must be specified.
		 * The root is the CellData; 'row.values.' should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;

		/** The data to append. */
		rows?: Array<RowData>;

		/** The sheet ID to append the data to. */
		sheetId?: number;
	}


	/** Data about each cell in a row. */
	export interface RowData {

		/** The values in the row, one per column. */
		values?: Array<CellData>;
	}


	/** Data about a specific cell. */
	export interface CellData {

		/** A data validation rule. */
		dataValidation?: DataValidationRule;

		/** The format of a cell. */
		effectiveFormat?: CellFormat;

		/** The kinds of value that a cell in a spreadsheet can have. */
		effectiveValue?: ExtendedValue;

		/**
		 * The formatted value of the cell.
		 * This is the value as it's shown to the user.
		 * This field is read-only.
		 */
		formattedValue?: string;

		/**
		 * A hyperlink this cell points to, if any.
		 * This field is read-only.  (To set it, use a `=HYPERLINK` formula
		 * in the userEnteredValue.formulaValue
		 * field.)
		 */
		hyperlink?: string;

		/** Any note on the cell. */
		note?: string;

		/** A pivot table. */
		pivotTable?: PivotTable;

		/**
		 * Runs of rich text applied to subsections of the cell.  Runs are only valid
		 * on user entered strings, not formulas, bools, or numbers.
		 * Runs start at specific indexes in the text and continue until the next
		 * run. Properties of a run will continue unless explicitly changed
		 * in a subsequent run (and properties of the first run will continue
		 * the properties of the cell unless explicitly changed).
		 * When writing, the new runs will overwrite any prior runs.  When writing a
		 * new user_entered_value, previous runs are erased.
		 */
		textFormatRuns?: Array<TextFormatRun>;

		/** The format of a cell. */
		userEnteredFormat?: CellFormat;

		/** The kinds of value that a cell in a spreadsheet can have. */
		userEnteredValue?: ExtendedValue;
	}


	/** A data validation rule. */
	export interface DataValidationRule {

		/**
		 * A condition that can evaluate to true or false.
		 * BooleanConditions are used by conditional formatting,
		 * data validation, and the criteria in filters.
		 */
		condition?: BooleanCondition;

		/** A message to show the user when adding data to the cell. */
		inputMessage?: string;

		/**
		 * True if the UI should be customized based on the kind of condition.
		 * If true, "List" conditions will show a dropdown.
		 */
		showCustomUi?: boolean;

		/** True if invalid data should be rejected. */
		strict?: boolean;
	}


	/** The kinds of value that a cell in a spreadsheet can have. */
	export interface ExtendedValue {

		/** Represents a boolean value. */
		boolValue?: boolean;

		/** An error in a cell. */
		errorValue?: ErrorValue;

		/** Represents a formula. */
		formulaValue?: string;

		/**
		 * Represents a double value.
		 * Note: Dates, Times and DateTimes are represented as doubles in
		 * "serial number" format.
		 */
		numberValue?: number;

		/**
		 * Represents a string value.
		 * Leading single quotes are not included. For example, if the user typed
		 * `'123` into the UI, this would be represented as a `stringValue` of
		 * `"123"`.
		 */
		stringValue?: string;
	}


	/** An error in a cell. */
	export interface ErrorValue {

		/**
		 * A message with more information about the error
		 * (in the spreadsheet's locale).
		 */
		message?: string;

		/** The type of error. */
		type?: ErrorValueType;
	}

	export enum ErrorValueType { ERROR_TYPE_UNSPECIFIED = 0, ERROR = 1, NULL_VALUE = 2, DIVIDE_BY_ZERO = 3, VALUE = 4, REF = 5, NAME = 6, NUM = 7, N_A = 8, LOADING = 9 }


	/** A pivot table. */
	export interface PivotTable {

		/** Each column grouping in the pivot table. */
		columns?: Array<PivotGroup>;

		/**
		 * An optional mapping of filters per source column offset.
		 * The filters are applied before aggregating data into the pivot table.
		 * The map's key is the column offset of the source range that you want to
		 * filter, and the value is the criteria for that column.
		 * For example, if the source was `C10:E15`, a key of `0` will have the filter
		 * for column `C`, whereas the key `1` is for column `D`.
		 */
		criteria?: {[id: string]: PivotFilterCriteria };

		/** Each row grouping in the pivot table. */
		rows?: Array<PivotGroup>;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		source?: GridRange;

		/**
		 * Whether values should be listed horizontally (as columns)
		 * or vertically (as rows).
		 */
		valueLayout?: PivotTableValueLayout;

		/** A list of values to include in the pivot table. */
		values?: Array<PivotValue>;
	}


	/** A single grouping (either row or column) in a pivot table. */
	export interface PivotGroup {

		/**
		 * An optional setting on a PivotGroup that defines buckets for the values
		 * in the source data column rather than breaking out each individual value.
		 * Only one PivotGroup with a group rule may be added for each column in
		 * the source data, though on any given column you may add both a
		 * PivotGroup that has a rule and a PivotGroup that does not.
		 */
		groupRule?: PivotGroupRule;

		/**
		 * The labels to use for the row/column groups which can be customized. For
		 * example, in the following pivot table, the row label is `Region` (which
		 * could be renamed to `State`) and the column label is `Product` (which
		 * could be renamed `Item`). Pivot tables created before December 2017 do
		 * not have header labels. If you'd like to add header labels to an existing
		 * pivot table, please delete the existing pivot table and then create a new
		 * pivot table with same parameters.
		 * +--------------+---------+-------+
		 * | SUM of Units | Product |       |
		 * | Region       | Pen     | Paper |
		 * +--------------+---------+-------+
		 * | New York     |     345 |    98 |
		 * | Oregon       |     234 |   123 |
		 * | Tennessee    |     531 |   415 |
		 * +--------------+---------+-------+
		 * | Grand Total  |    1110 |   636 |
		 * +--------------+---------+-------+
		 */
		label?: string;

		/**
		 * True if the headings in this pivot group should be repeated.
		 * This is only valid for row groupings and is ignored by columns.
		 * By default, we minimize repitition of headings by not showing higher
		 * level headings where they are the same. For example, even though the
		 * third row below corresponds to "Q1 Mar", "Q1" is not shown because
		 * it is redundant with previous rows. Setting repeat_headings to true
		 * would cause "Q1" to be repeated for "Feb" and "Mar".
		 * +--------------+
		 * | Q1     | Jan |
		 * |        | Feb |
		 * |        | Mar |
		 * +--------+-----+
		 * | Q1 Total     |
		 * +--------------+
		 */
		repeatHeadings?: boolean;

		/** True if the pivot table should include the totals for this grouping. */
		showTotals?: boolean;

		/** The order the values in this group should be sorted. */
		sortOrder?: SortSpecSortOrder;

		/**
		 * The column offset of the source range that this grouping is based on.
		 * For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0`
		 * means this group refers to column `C`, whereas the offset `1` would refer
		 * to column `D`.
		 */
		sourceColumnOffset?: number;

		/** Information about which values in a pivot group should be used for sorting. */
		valueBucket?: PivotGroupSortValueBucket;

		/** Metadata about values in the grouping. */
		valueMetadata?: Array<PivotGroupValueMetadata>;
	}


	/**
	 * An optional setting on a PivotGroup that defines buckets for the values
	 * in the source data column rather than breaking out each individual value.
	 * Only one PivotGroup with a group rule may be added for each column in
	 * the source data, though on any given column you may add both a
	 * PivotGroup that has a rule and a PivotGroup that does not.
	 */
	export interface PivotGroupRule {

		/**
		 * Allows you to organize the date-time values in a source data column into
		 * buckets based on selected parts of their date or time values. For example,
		 * consider a pivot table showing sales transactions by date:
		 * +----------+--------------+
		 * | Date     | SUM of Sales |
		 * +----------+--------------+
		 * | 1/1/2017 |      $621.14 |
		 * | 2/3/2017 |      $708.84 |
		 * | 5/8/2017 |      $326.84 |
		 * ...
		 * +----------+--------------+
		 * Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH
		 * results in the following pivot table.
		 * +--------------+--------------+
		 * | Grouped Date | SUM of Sales |
		 * +--------------+--------------+
		 * | 2017-Jan     |   $53,731.78 |
		 * | 2017-Feb     |   $83,475.32 |
		 * | 2017-Mar     |   $94,385.05 |
		 * ...
		 * +--------------+--------------+
		 */
		dateTimeRule?: DateTimeRule;

		/**
		 * Allows you to organize the numeric values in a source data column into
		 * buckets of a constant size. All values from HistogramRule.start to
		 * HistogramRule.end are placed into groups of size
		 * HistogramRule.interval. In addition, all values below
		 * HistogramRule.start are placed in one group, and all values above
		 * HistogramRule.end are placed in another. Only
		 * HistogramRule.interval is required, though if HistogramRule.start
		 * and HistogramRule.end are both provided, HistogramRule.start must
		 * be less than HistogramRule.end. For example, a pivot table showing
		 * average purchase amount by age that has 50+ rows:
		 * +-----+-------------------+
		 * | Age | AVERAGE of Amount |
		 * +-----+-------------------+
		 * | 16  |            $27.13 |
		 * | 17  |             $5.24 |
		 * | 18  |            $20.15 |
		 * ...
		 * +-----+-------------------+
		 * could be turned into a pivot table that looks like the one below by
		 * applying a histogram group rule with a HistogramRule.start of 25,
		 * an HistogramRule.interval of 20, and an HistogramRule.end
		 * of 65.
		 * +-------------+-------------------+
		 * | Grouped Age | AVERAGE of Amount |
		 * +-------------+-------------------+
		 * | < 25        |            $19.34 |
		 * | 25-45       |            $31.43 |
		 * | 45-65       |            $35.87 |
		 * | > 65        |            $27.55 |
		 * +-------------+-------------------+
		 * | Grand Total |            $29.12 |
		 * +-------------+-------------------+
		 */
		histogramRule?: HistogramRule;

		/**
		 * Allows you to manually organize the values in a source data column into
		 * buckets with names of your choosing. For example, a pivot table that
		 * aggregates population by state:
		 * +-------+-------------------+
		 * | State | SUM of Population |
		 * +-------+-------------------+
		 * | AK    |               0.7 |
		 * | AL    |               4.8 |
		 * | AR    |               2.9 |
		 * ...
		 * +-------+-------------------+
		 * could be turned into a pivot table that aggregates population by time zone
		 * by providing a list of groups (for example, groupName = 'Central',
		 * items = ['AL', 'AR', 'IA', ...]) to a manual group rule.
		 * Note that a similar effect could be achieved by adding a time zone column
		 * to the source data and adjusting the pivot table.
		 * +-----------+-------------------+
		 * | Time Zone | SUM of Population |
		 * +-----------+-------------------+
		 * | Central   |             106.3 |
		 * | Eastern   |             151.9 |
		 * | Mountain  |              17.4 |
		 * ...
		 * +-----------+-------------------+
		 */
		manualRule?: ManualRule;
	}


	/**
	 * Allows you to organize the date-time values in a source data column into
	 * buckets based on selected parts of their date or time values. For example,
	 * consider a pivot table showing sales transactions by date:
	 *     +----------+--------------+
	 *     | Date     | SUM of Sales |
	 *     +----------+--------------+
	 *     | 1/1/2017 |      $621.14 |
	 *     | 2/3/2017 |      $708.84 |
	 *     | 5/8/2017 |      $326.84 |
	 *     ...
	 *     +----------+--------------+
	 * Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH
	 * results in the following pivot table.
	 *     +--------------+--------------+
	 *     | Grouped Date | SUM of Sales |
	 *     +--------------+--------------+
	 *     | 2017-Jan     |   $53,731.78 |
	 *     | 2017-Feb     |   $83,475.32 |
	 *     | 2017-Mar     |   $94,385.05 |
	 *     ...
	 *     +--------------+--------------+
	 */
	export interface DateTimeRule {

		/** The type of date-time grouping to apply. */
		type?: DateTimeRuleType;
	}

	export enum DateTimeRuleType { DATE_TIME_RULE_TYPE_UNSPECIFIED = 0, SECOND = 1, MINUTE = 2, HOUR = 3, HOUR_MINUTE = 4, HOUR_MINUTE_AMPM = 5, DAY_OF_WEEK = 6, DAY_OF_YEAR = 7, DAY_OF_MONTH = 8, DAY_MONTH = 9, MONTH = 10, QUARTER = 11, YEAR = 12, YEAR_MONTH = 13, YEAR_QUARTER = 14, YEAR_MONTH_DAY = 15 }


	/**
	 * Allows you to organize the numeric values in a source data column into
	 * buckets of a constant size. All values from HistogramRule.start to
	 * HistogramRule.end are placed into groups of size
	 * HistogramRule.interval. In addition, all values below
	 * HistogramRule.start are placed in one group, and all values above
	 * HistogramRule.end are placed in another. Only
	 * HistogramRule.interval is required, though if HistogramRule.start
	 * and HistogramRule.end are both provided, HistogramRule.start must
	 * be less than HistogramRule.end. For example, a pivot table showing
	 * average purchase amount by age that has 50+ rows:
	 *     +-----+-------------------+
	 *     | Age | AVERAGE of Amount |
	 *     +-----+-------------------+
	 *     | 16  |            $27.13 |
	 *     | 17  |             $5.24 |
	 *     | 18  |            $20.15 |
	 *     ...
	 *     +-----+-------------------+
	 * could be turned into a pivot table that looks like the one below by
	 * applying a histogram group rule with a HistogramRule.start of 25,
	 * an HistogramRule.interval of 20, and an HistogramRule.end
	 * of 65.
	 *     +-------------+-------------------+
	 *     | Grouped Age | AVERAGE of Amount |
	 *     +-------------+-------------------+
	 *     | < 25        |            $19.34 |
	 *     | 25-45       |            $31.43 |
	 *     | 45-65       |            $35.87 |
	 *     | > 65        |            $27.55 |
	 *     +-------------+-------------------+
	 *     | Grand Total |            $29.12 |
	 *     +-------------+-------------------+
	 */
	export interface HistogramRule {

		/**
		 * The maximum value at which items are placed into buckets
		 * of constant size. Values above end are lumped into a single bucket.
		 * This field is optional.
		 */
		end?: number;

		/** The size of the buckets that are created. Must be positive. */
		interval?: number;

		/**
		 * The minimum value at which items are placed into buckets
		 * of constant size. Values below start are lumped into a single bucket.
		 * This field is optional.
		 */
		start?: number;
	}


	/**
	 * Allows you to manually organize the values in a source data column into
	 * buckets with names of your choosing. For example, a pivot table that
	 * aggregates population by state:
	 *     +-------+-------------------+
	 *     | State | SUM of Population |
	 *     +-------+-------------------+
	 *     | AK    |               0.7 |
	 *     | AL    |               4.8 |
	 *     | AR    |               2.9 |
	 *     ...
	 *     +-------+-------------------+
	 * could be turned into a pivot table that aggregates population by time zone
	 * by providing a list of groups (for example, groupName = 'Central',
	 * items = ['AL', 'AR', 'IA', ...]) to a manual group rule.
	 * Note that a similar effect could be achieved by adding a time zone column
	 * to the source data and adjusting the pivot table.
	 *     +-----------+-------------------+
	 *     | Time Zone | SUM of Population |
	 *     +-----------+-------------------+
	 *     | Central   |             106.3 |
	 *     | Eastern   |             151.9 |
	 *     | Mountain  |              17.4 |
	 *     ...
	 *     +-----------+-------------------+
	 */
	export interface ManualRule {

		/**
		 * The list of group names and the corresponding items from the source data
		 * that map to each group name.
		 */
		groups?: Array<ManualRuleGroup>;
	}


	/**
	 * A group name and a list of items from the source data that should be placed
	 * in the group with this name.
	 */
	export interface ManualRuleGroup {

		/** The kinds of value that a cell in a spreadsheet can have. */
		groupName?: ExtendedValue;

		/**
		 * The items in the source data that should be placed into this group. Each
		 * item may be a string, number, or boolean. Items may appear in at most one
		 * group within a given ManualRule. Items that do not appear in any
		 * group will appear on their own.
		 */
		items?: Array<ExtendedValue>;
	}


	/** Information about which values in a pivot group should be used for sorting. */
	export interface PivotGroupSortValueBucket {

		/**
		 * Determines the bucket from which values are chosen to sort.
		 * For example, in a pivot table with one row group & two column groups,
		 * the row group can list up to two values. The first value corresponds
		 * to a value within the first column group, and the second value
		 * corresponds to a value in the second column group.  If no values
		 * are listed, this would indicate that the row should be sorted according
		 * to the "Grand Total" over the column groups. If a single value is listed,
		 * this would correspond to using the "Total" of that bucket.
		 */
		buckets?: Array<ExtendedValue>;

		/**
		 * The offset in the PivotTable.values list which the values in this
		 * grouping should be sorted by.
		 */
		valuesIndex?: number;
	}


	/** Metadata about a value in a pivot grouping. */
	export interface PivotGroupValueMetadata {

		/** True if the data corresponding to the value is collapsed. */
		collapsed?: boolean;

		/** The kinds of value that a cell in a spreadsheet can have. */
		value?: ExtendedValue;
	}


	/** Criteria for showing/hiding rows in a pivot table. */
	export interface PivotFilterCriteria {

		/** Values that should be included.  Values not listed here are excluded. */
		visibleValues?: Array<string>;
	}

	export enum PivotTableValueLayout { HORIZONTAL = 0, VERTICAL = 1 }


	/** The definition of how a value in a pivot table should be calculated. */
	export interface PivotValue {

		/**
		 * If specified, indicates that pivot values should be displayed as
		 * the result of a calculation with another pivot value. For example, if
		 * calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the
		 * pivot values are displayed as the percentage of the grand total. In
		 * the Sheets UI, this is referred to as "Show As" in the value section of a
		 * pivot table.
		 */
		calculatedDisplayType?: PivotValueCalculatedDisplayType;

		/**
		 * A custom formula to calculate the value.  The formula must start
		 * with an `=` character.
		 */
		formula?: string;

		/** A name to use for the value. */
		name?: string;

		/**
		 * The column offset of the source range that this value reads from.
		 * For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0`
		 * means this value refers to column `C`, whereas the offset `1` would
		 * refer to column `D`.
		 */
		sourceColumnOffset?: number;

		/**
		 * A function to summarize the value.
		 * If formula is set, the only supported values are
		 * SUM and
		 * CUSTOM.
		 * If sourceColumnOffset is set, then `CUSTOM`
		 * is not supported.
		 */
		summarizeFunction?: PivotValueSummarizeFunction;
	}

	export enum PivotValueCalculatedDisplayType { PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED = 0, PERCENT_OF_ROW_TOTAL = 1, PERCENT_OF_COLUMN_TOTAL = 2, PERCENT_OF_GRAND_TOTAL = 3 }

	export enum PivotValueSummarizeFunction { PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED = 0, SUM = 1, COUNTA = 2, COUNT = 3, COUNTUNIQUE = 4, AVERAGE = 5, MAX = 6, MIN = 7, MEDIAN = 8, PRODUCT = 9, STDEV = 10, STDEVP = 11, VAR = 12, VARP = 13, CUSTOM = 14 }


	/**
	 * A run of a text format. The format of this run continues until the start
	 * index of the next run.
	 * When updating, all fields must be set.
	 */
	export interface TextFormatRun {

		/**
		 * The format of a run of text in a cell.
		 * Absent values indicate that the field isn't specified.
		 */
		format?: TextFormat;

		/** The character index where this run starts. */
		startIndex?: number;
	}


	/** Appends rows or columns to the end of a sheet. */
	export interface AppendDimensionRequest {

		/** Whether rows or columns should be appended. */
		dimension?: DimensionRangeDimension;

		/** The number of rows or columns to append. */
		length?: number;

		/** The sheet to append rows or columns to. */
		sheetId?: number;
	}


	/** The response when updating a range of values in a spreadsheet. */
	export interface AppendValuesResponse {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string;

		/**
		 * The range (in A1 notation) of the table that values are being appended to
		 * (before the values were appended).
		 * Empty if no table was found.
		 */
		tableRange?: string;

		/** The response when updating a range of values in a spreadsheet. */
		updates?: UpdateValuesResponse;
	}


	/** The response when updating a range of values in a spreadsheet. */
	export interface UpdateValuesResponse {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string;

		/** The number of cells updated. */
		updatedCells?: number;

		/** The number of columns where at least one cell in the column was updated. */
		updatedColumns?: number;

		/** Data within a range of the spreadsheet. */
		updatedData?: ValueRange;

		/** The range (in A1 notation) that updates were applied to. */
		updatedRange?: string;

		/** The number of rows where at least one cell in the row was updated. */
		updatedRows?: number;
	}


	/** Data within a range of the spreadsheet. */
	export interface ValueRange {

		/**
		 * The major dimension of the values.
		 * For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,
		 * then requesting `range=A1:B2,majorDimension=ROWS` will return
		 * `[[1,2],[3,4]]`,
		 * whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return
		 * `[[1,3],[2,4]]`.
		 * For input, with `range=A1:B2,majorDimension=ROWS` then `[[1,2],[3,4]]`
		 * will set `A1=1,B1=2,A2=3,B2=4`. With `range=A1:B2,majorDimension=COLUMNS`
		 * then `[[1,2],[3,4]]` will set `A1=1,B1=3,A2=2,B2=4`.
		 * When writing, if this field is not set, it defaults to ROWS.
		 */
		majorDimension?: DimensionRangeDimension;

		/**
		 * The range the values cover, in A1 notation.
		 * For output, this range indicates the entire requested range,
		 * even though the values will exclude trailing rows and columns.
		 * When appending values, this field represents the range to search for a
		 * table, after which values will be appended.
		 */
		range?: string;

		/**
		 * The data that was read or to be written.  This is an array of arrays,
		 * the outer array representing all the data and each inner array
		 * representing a major dimension. Each item in the inner array
		 * corresponds with one cell.
		 * For output, empty trailing rows and columns will not be included.
		 * For input, supported value types are: bool, string, and double.
		 * Null values will be skipped.
		 * To set a cell to an empty value, set the string value to an empty string.
		 */
		values?: Array<string>;
	}


	/** Fills in more data based on existing data. */
	export interface AutoFillRequest {

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/** A combination of a source range and how to extend that source. */
		sourceAndDestination?: SourceAndDestination;

		/**
		 * True if we should generate data with the "alternate" series.
		 * This differs based on the type and amount of source data.
		 */
		useAlternateSeries?: boolean;
	}


	/** A combination of a source range and how to extend that source. */
	export interface SourceAndDestination {

		/** The dimension that data should be filled into. */
		dimension?: DimensionRangeDimension;

		/**
		 * The number of rows or columns that data should be filled into.
		 * Positive numbers expand beyond the last row or last column
		 * of the source.  Negative numbers expand before the first row
		 * or first column of the source.
		 */
		fillLength?: number;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		source?: GridRange;
	}


	/**
	 * Automatically resizes one or more dimensions based on the contents
	 * of the cells in that dimension.
	 */
	export interface AutoResizeDimensionsRequest {

		/**
		 * A range along a single dimension on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open: the start index is inclusive
		 * and the end index is exclusive.
		 * Missing indexes indicate the range is unbounded on that side.
		 */
		dimensions?: DimensionRange;
	}


	/** The default filter associated with a sheet. */
	export interface BasicFilter {

		/**
		 * The criteria for showing/hiding values per column.
		 * The map's key is the column index, and the value is the criteria for
		 * that column.
		 */
		criteria?: {[id: string]: FilterCriteria };

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/**
		 * The sort order per column. Later specifications are used when values
		 * are equal in the earlier specifications.
		 */
		sortSpecs?: Array<SortSpec>;
	}


	/**
	 * The request for clearing more than one range selected by a
	 * DataFilter in a spreadsheet.
	 */
	export interface BatchClearValuesByDataFilterRequest {

		/** The DataFilters used to determine which ranges to clear. */
		dataFilters?: Array<DataFilter>;
	}


	/**
	 * Filter that describes what data should be selected or returned from a
	 * request.
	 */
	export interface DataFilter {

		/** Selects data that matches the specified A1 range. */
		a1Range?: string;

		/**
		 * Selects DeveloperMetadata that matches all of the specified fields.  For
		 * example, if only a metadata ID is specified this considers the
		 * DeveloperMetadata with that particular unique ID. If a metadata key is
		 * specified, this considers all developer metadata with that key.  If a
		 * key, visibility, and location type are all specified, this considers all
		 * developer metadata with that key and visibility that are associated with a
		 * location of that type.  In general, this
		 * selects all DeveloperMetadata that matches the intersection of all the
		 * specified fields; any field or combination of fields may be specified.
		 */
		developerMetadataLookup?: DeveloperMetadataLookup;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		gridRange?: GridRange;
	}


	/**
	 * Selects DeveloperMetadata that matches all of the specified fields.  For
	 * example, if only a metadata ID is specified this considers the
	 * DeveloperMetadata with that particular unique ID. If a metadata key is
	 * specified, this considers all developer metadata with that key.  If a
	 * key, visibility, and location type are all specified, this considers all
	 * developer metadata with that key and visibility that are associated with a
	 * location of that type.  In general, this
	 * selects all DeveloperMetadata that matches the intersection of all the
	 * specified fields; any field or combination of fields may be specified.
	 */
	export interface DeveloperMetadataLookup {

		/**
		 * Determines how this lookup matches the location.  If this field is
		 * specified as EXACT, only developer metadata associated on the exact
		 * location specified is matched.  If this field is specified to INTERSECTING,
		 * developer metadata associated on intersecting locations is also
		 * matched.  If left unspecified, this field assumes a default value of
		 * INTERSECTING.
		 * If this field is specified, a metadataLocation
		 * must also be specified.
		 */
		locationMatchingStrategy?: DeveloperMetadataLookupLocationMatchingStrategy;

		/**
		 * Limits the selected developer metadata to those entries which are
		 * associated with locations of the specified type.  For example, when this
		 * field is specified as ROW this lookup
		 * only considers developer metadata associated on rows.  If the field is left
		 * unspecified, all location types are considered.  This field cannot be
		 * specified as SPREADSHEET when
		 * the locationMatchingStrategy
		 * is specified as INTERSECTING or when the
		 * metadataLocation is specified as a
		 * non-spreadsheet location: spreadsheet metadata cannot intersect any other
		 * developer metadata location.  This field also must be left unspecified when
		 * the locationMatchingStrategy
		 * is specified as EXACT.
		 */
		locationType?: DeveloperMetadataLookupLocationType;

		/**
		 * Limits the selected developer metadata to that which has a matching
		 * DeveloperMetadata.metadata_id.
		 */
		metadataId?: number;

		/**
		 * Limits the selected developer metadata to that which has a matching
		 * DeveloperMetadata.metadata_key.
		 */
		metadataKey?: string;

		/** A location where metadata may be associated in a spreadsheet. */
		metadataLocation?: DeveloperMetadataLocation;

		/**
		 * Limits the selected developer metadata to that which has a matching
		 * DeveloperMetadata.metadata_value.
		 */
		metadataValue?: string;

		/**
		 * Limits the selected developer metadata to that which has a matching
		 * DeveloperMetadata.visibility.  If left unspecified, all developer
		 * metadata visibile to the requesting project is considered.
		 */
		visibility?: DeveloperMetadataLookupVisibility;
	}

	export enum DeveloperMetadataLookupLocationMatchingStrategy { DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED = 0, EXACT_LOCATION = 1, INTERSECTING_LOCATION = 2 }

	export enum DeveloperMetadataLookupLocationType { DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED = 0, ROW = 1, COLUMN = 2, SHEET = 3, SPREADSHEET = 4 }


	/** A location where metadata may be associated in a spreadsheet. */
	export interface DeveloperMetadataLocation {

		/**
		 * A range along a single dimension on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open: the start index is inclusive
		 * and the end index is exclusive.
		 * Missing indexes indicate the range is unbounded on that side.
		 */
		dimensionRange?: DimensionRange;

		/** The type of location this object represents.  This field is read-only. */
		locationType?: DeveloperMetadataLookupLocationType;

		/** The ID of the sheet when metadata is associated with an entire sheet. */
		sheetId?: number;

		/** True when metadata is associated with an entire spreadsheet. */
		spreadsheet?: boolean;
	}

	export enum DeveloperMetadataLookupVisibility { DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED = 0, DOCUMENT = 1, PROJECT = 2 }


	/**
	 * The response when clearing a range of values selected with
	 * DataFilters in a spreadsheet.
	 */
	export interface BatchClearValuesByDataFilterResponse {

		/**
		 * The ranges that were cleared, in A1 notation. If the requests are for an
		 * unbounded range or a ranger larger than the bounds of the sheet, this is
		 * the actual ranges that were cleared, bounded to the sheet's limits.
		 */
		clearedRanges?: Array<string>;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string;
	}


	/** The request for clearing more than one range of values in a spreadsheet. */
	export interface BatchClearValuesRequest {

		/** The ranges to clear, in A1 notation. */
		ranges?: Array<string>;
	}


	/** The response when clearing a range of values in a spreadsheet. */
	export interface BatchClearValuesResponse {

		/**
		 * The ranges that were cleared, in A1 notation. If the requests are for an
		 * unbounded range or a ranger larger than the bounds of the sheet, this is
		 * the actual ranges that were cleared, bounded to the sheet's limits.
		 */
		clearedRanges?: Array<string>;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string;
	}


	/**
	 * The request for retrieving a range of values in a spreadsheet selected by a
	 * set of DataFilters.
	 */
	export interface BatchGetValuesByDataFilterRequest {

		/**
		 * The data filters used to match the ranges of values to retrieve. Ranges
		 * that match any of the specified data filters are included in the response.
		 */
		dataFilters?: Array<DataFilter>;

		/**
		 * How dates, times, and durations should be represented in the output.
		 * This is ignored if value_render_option is
		 * FORMATTED_VALUE.
		 * The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
		 */
		dateTimeRenderOption?: BatchGetValuesByDataFilterRequestDateTimeRenderOption;

		/**
		 * The major dimension that results should use.
		 * For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,
		 * then a request that selects that range and sets `majorDimension=ROWS`
		 * returns `[[1,2],[3,4]]`, whereas a request that sets
		 * `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
		 */
		majorDimension?: DimensionRangeDimension;

		/**
		 * How values should be represented in the output.
		 * The default render option is ValueRenderOption.FORMATTED_VALUE.
		 */
		valueRenderOption?: BatchGetValuesByDataFilterRequestValueRenderOption;
	}

	export enum BatchGetValuesByDataFilterRequestDateTimeRenderOption { SERIAL_NUMBER = 0, FORMATTED_STRING = 1 }

	export enum BatchGetValuesByDataFilterRequestValueRenderOption { FORMATTED_VALUE = 0, UNFORMATTED_VALUE = 1, FORMULA = 2 }


	/**
	 * The response when retrieving more than one range of values in a spreadsheet
	 * selected by DataFilters.
	 */
	export interface BatchGetValuesByDataFilterResponse {

		/** The ID of the spreadsheet the data was retrieved from. */
		spreadsheetId?: string;

		/** The requested values with the list of data filters that matched them. */
		valueRanges?: Array<MatchedValueRange>;
	}


	/** A value range that was matched by one or more data filers. */
	export interface MatchedValueRange {

		/**
		 * The DataFilters from the request that matched the range of
		 * values.
		 */
		dataFilters?: Array<DataFilter>;

		/** Data within a range of the spreadsheet. */
		valueRange?: ValueRange;
	}


	/** The response when retrieving more than one range of values in a spreadsheet. */
	export interface BatchGetValuesResponse {

		/** The ID of the spreadsheet the data was retrieved from. */
		spreadsheetId?: string;

		/**
		 * The requested values. The order of the ValueRanges is the same as the
		 * order of the requested ranges.
		 */
		valueRanges?: Array<ValueRange>;
	}


	/** The request for updating any aspect of a spreadsheet. */
	export interface BatchUpdateSpreadsheetRequest {

		/**
		 * Determines if the update response should include the spreadsheet
		 * resource.
		 */
		includeSpreadsheetInResponse?: boolean;

		/**
		 * A list of updates to apply to the spreadsheet.
		 * Requests will be applied in the order they are specified.
		 * If any request is not valid, no requests will be applied.
		 */
		requests?: Array<Request>;

		/**
		 * True if grid data should be returned. Meaningful only if
		 * include_spreadsheet_in_response is 'true'.
		 * This parameter is ignored if a field mask was set in the request.
		 */
		responseIncludeGridData?: boolean;

		/**
		 * Limits the ranges included in the response spreadsheet.
		 * Meaningful only if include_spreadsheet_in_response is 'true'.
		 */
		responseRanges?: Array<string>;
	}


	/** A single kind of update to apply to a spreadsheet. */
	export interface Request {

		/** Adds a new banded range to the spreadsheet. */
		addBanding?: AddBandingRequest;

		/** Adds a chart to a sheet in the spreadsheet. */
		addChart?: AddChartRequest;

		/**
		 * Adds a new conditional format rule at the given index.
		 * All subsequent rules' indexes are incremented.
		 */
		addConditionalFormatRule?: AddConditionalFormatRuleRequest;

		/**
		 * Creates a group over the specified range.
		 * If the requested range is a superset of the range of an existing group G,
		 * then the depth of G is incremented and this new group G' has the
		 * depth of that group. For example, a group [C:D, depth 1] + [B:E] results in
		 * groups [B:E, depth 1] and [C:D, depth 2].
		 * If the requested range is a subset of the range of an existing group G,
		 * then the depth of the new group G' becomes one greater than the depth of G.
		 * For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1]
		 * and [C:D, depth 2].
		 * If the requested range starts before and ends within, or starts within and
		 * ends after, the range of an existing group G, then the range of the existing
		 * group G becomes the union of the ranges, and the new group G' has
		 * depth one greater than the depth of G and range as the intersection of the
		 * ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E,
		 * depth 1] and [C:D, depth 2].
		 */
		addDimensionGroup?: AddDimensionGroupRequest;

		/** Adds a filter view. */
		addFilterView?: AddFilterViewRequest;

		/** Adds a named range to the spreadsheet. */
		addNamedRange?: AddNamedRangeRequest;

		/** Adds a new protected range. */
		addProtectedRange?: AddProtectedRangeRequest;

		/**
		 * Adds a new sheet.
		 * When a sheet is added at a given index,
		 * all subsequent sheets' indexes are incremented.
		 * To add an object sheet, use AddChartRequest instead and specify
		 * EmbeddedObjectPosition.sheetId or
		 * EmbeddedObjectPosition.newSheet.
		 */
		addSheet?: AddSheetRequest;

		/** Adds a slicer to a sheet in the spreadsheet. */
		addSlicer?: AddSlicerRequest;

		/**
		 * Adds new cells after the last row with data in a sheet,
		 * inserting new rows into the sheet if necessary.
		 */
		appendCells?: AppendCellsRequest;

		/** Appends rows or columns to the end of a sheet. */
		appendDimension?: AppendDimensionRequest;

		/** Fills in more data based on existing data. */
		autoFill?: AutoFillRequest;

		/**
		 * Automatically resizes one or more dimensions based on the contents
		 * of the cells in that dimension.
		 */
		autoResizeDimensions?: AutoResizeDimensionsRequest;

		/** Clears the basic filter, if any exists on the sheet. */
		clearBasicFilter?: ClearBasicFilterRequest;

		/** Copies data from the source to the destination. */
		copyPaste?: CopyPasteRequest;

		/** A request to create developer metadata. */
		createDeveloperMetadata?: CreateDeveloperMetadataRequest;

		/** Moves data from the source to the destination. */
		cutPaste?: CutPasteRequest;

		/** Removes the banded range with the given ID from the spreadsheet. */
		deleteBanding?: DeleteBandingRequest;

		/**
		 * Deletes a conditional format rule at the given index.
		 * All subsequent rules' indexes are decremented.
		 */
		deleteConditionalFormatRule?: DeleteConditionalFormatRuleRequest;

		/** A request to delete developer metadata. */
		deleteDeveloperMetadata?: DeleteDeveloperMetadataRequest;

		/** Deletes the dimensions from the sheet. */
		deleteDimension?: DeleteDimensionRequest;

		/**
		 * Deletes a group over the specified range by decrementing the depth of the
		 * dimensions in the range.
		 * For example, assume the sheet has a depth-1 group over B:E and a depth-2
		 * group over C:D. Deleting a group over D:E leaves the sheet with a
		 * depth-1 group over B:D and a depth-2 group over C:C.
		 */
		deleteDimensionGroup?: DeleteDimensionGroupRequest;

		/**
		 * Removes rows within this range that contain values in the specified columns
		 * that are duplicates of values in any previous row. Rows with identical values
		 * but different letter cases, formatting, or formulas are considered to be
		 * duplicates.
		 * This request also removes duplicate rows hidden from view (for example, due
		 * to a filter). When removing duplicates, the first instance of each duplicate
		 * row scanning from the top downwards is kept in the resulting range. Content
		 * outside of the specified range isn't removed, and rows considered duplicates
		 * do not have to be adjacent to each other in the range.
		 */
		deleteDuplicates?: DeleteDuplicatesRequest;

		/** Deletes the embedded object with the given ID. */
		deleteEmbeddedObject?: DeleteEmbeddedObjectRequest;

		/** Deletes a particular filter view. */
		deleteFilterView?: DeleteFilterViewRequest;

		/** Removes the named range with the given ID from the spreadsheet. */
		deleteNamedRange?: DeleteNamedRangeRequest;

		/** Deletes the protected range with the given ID. */
		deleteProtectedRange?: DeleteProtectedRangeRequest;

		/** Deletes a range of cells, shifting other cells into the deleted area. */
		deleteRange?: DeleteRangeRequest;

		/** Deletes the requested sheet. */
		deleteSheet?: DeleteSheetRequest;

		/** Duplicates a particular filter view. */
		duplicateFilterView?: DuplicateFilterViewRequest;

		/** Duplicates the contents of a sheet. */
		duplicateSheet?: DuplicateSheetRequest;

		/** Finds and replaces data in cells over a range, sheet, or all sheets. */
		findReplace?: FindReplaceRequest;

		/** Inserts rows or columns in a sheet at a particular index. */
		insertDimension?: InsertDimensionRequest;

		/** Inserts cells into a range, shifting the existing cells over or down. */
		insertRange?: InsertRangeRequest;

		/** Merges all cells in the range. */
		mergeCells?: MergeCellsRequest;

		/** Moves one or more rows or columns. */
		moveDimension?: MoveDimensionRequest;

		/** Inserts data into the spreadsheet starting at the specified coordinate. */
		pasteData?: PasteDataRequest;

		/** Randomizes the order of the rows in a range. */
		randomizeRange?: RandomizeRangeRequest;

		/**
		 * Updates all cells in the range to the values in the given Cell object.
		 * Only the fields listed in the fields field are updated; others are
		 * unchanged.
		 * If writing a cell with a formula, the formula's ranges will automatically
		 * increment for each field in the range.
		 * For example, if writing a cell with formula `=A1` into range B2:C4,
		 * B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`,
		 * C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`.
		 * To keep the formula's ranges static, use the `$` indicator.
		 * For example, use the formula `=$A$1` to prevent both the row and the
		 * column from incrementing.
		 */
		repeatCell?: RepeatCellRequest;

		/** Sets the basic filter associated with a sheet. */
		setBasicFilter?: SetBasicFilterRequest;

		/**
		 * Sets a data validation rule to every cell in the range.
		 * To clear validation in a range, call this with no rule specified.
		 */
		setDataValidation?: SetDataValidationRequest;

		/** Sorts data in rows based on a sort order per column. */
		sortRange?: SortRangeRequest;

		/**
		 * Splits a column of text into multiple columns,
		 * based on a delimiter in each cell.
		 */
		textToColumns?: TextToColumnsRequest;

		/**
		 * Trims the whitespace (such as spaces, tabs, or new lines) in every cell in
		 * the specified range. This request removes all whitespace from the start and
		 * end of each cell's text, and reduces any subsequence of remaining whitespace
		 * characters to a single space. If the resulting trimmed text starts with a '+'
		 * or '=' character, the text remains as a string value and isn't interpreted
		 * as a formula.
		 */
		trimWhitespace?: TrimWhitespaceRequest;

		/** Unmerges cells in the given range. */
		unmergeCells?: UnmergeCellsRequest;

		/** Updates properties of the supplied banded range. */
		updateBanding?: UpdateBandingRequest;

		/**
		 * Updates the borders of a range.
		 * If a field is not set in the request, that means the border remains as-is.
		 * For example, with two subsequent UpdateBordersRequest:
		 * 1. range: A1:A5 `{ top: RED, bottom: WHITE }`
		 * 2. range: A1:A5 `{ left: BLUE }`
		 * That would result in A1:A5 having a borders of
		 * `{ top: RED, bottom: WHITE, left: BLUE }`.
		 * If you want to clear a border, explicitly set the style to
		 * NONE.
		 */
		updateBorders?: UpdateBordersRequest;

		/** Updates all cells in a range with new data. */
		updateCells?: UpdateCellsRequest;

		/**
		 * Updates a chart's specifications.
		 * (This does not move or resize a chart. To move or resize a chart, use
		 * UpdateEmbeddedObjectPositionRequest.)
		 */
		updateChartSpec?: UpdateChartSpecRequest;

		/**
		 * Updates a conditional format rule at the given index,
		 * or moves a conditional format rule to another index.
		 */
		updateConditionalFormatRule?: UpdateConditionalFormatRuleRequest;

		/**
		 * A request to update properties of developer metadata.
		 * Updates the properties of the developer metadata selected by the filters to
		 * the values provided in the DeveloperMetadata resource.  Callers must
		 * specify the properties they wish to update in the fields parameter, as well
		 * as specify at least one DataFilter matching the metadata they wish to
		 * update.
		 */
		updateDeveloperMetadata?: UpdateDeveloperMetadataRequest;

		/** Updates the state of the specified group. */
		updateDimensionGroup?: UpdateDimensionGroupRequest;

		/** Updates properties of dimensions within the specified range. */
		updateDimensionProperties?: UpdateDimensionPropertiesRequest;

		/**
		 * Update an embedded object's position (such as a moving or resizing a
		 * chart or image).
		 */
		updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionRequest;

		/** Updates properties of the filter view. */
		updateFilterView?: UpdateFilterViewRequest;

		/**
		 * Updates properties of the named range with the specified
		 * namedRangeId.
		 */
		updateNamedRange?: UpdateNamedRangeRequest;

		/**
		 * Updates an existing protected range with the specified
		 * protectedRangeId.
		 */
		updateProtectedRange?: UpdateProtectedRangeRequest;

		/**
		 * Updates properties of the sheet with the specified
		 * sheetId.
		 */
		updateSheetProperties?: UpdateSheetPropertiesRequest;

		/**
		 * Updates a slicer's specifications.
		 * (This does not move or resize a slicer. To move or resize a slicer use
		 * UpdateEmbeddedObjectPositionRequest.
		 */
		updateSlicerSpec?: UpdateSlicerSpecRequest;

		/** Updates properties of a spreadsheet. */
		updateSpreadsheetProperties?: UpdateSpreadsheetPropertiesRequest;
	}


	/** Clears the basic filter, if any exists on the sheet. */
	export interface ClearBasicFilterRequest {

		/** The sheet ID on which the basic filter should be cleared. */
		sheetId?: number;
	}


	/** Copies data from the source to the destination. */
	export interface CopyPasteRequest {

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		destination?: GridRange;

		/** How that data should be oriented when pasting. */
		pasteOrientation?: CopyPasteRequestPasteOrientation;

		/** What kind of data to paste. */
		pasteType?: CopyPasteRequestPasteType;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		source?: GridRange;
	}

	export enum CopyPasteRequestPasteOrientation { NORMAL = 0, TRANSPOSE = 1 }

	export enum CopyPasteRequestPasteType { PASTE_NORMAL = 0, PASTE_VALUES = 1, PASTE_FORMAT = 2, PASTE_NO_BORDERS = 3, PASTE_FORMULA = 4, PASTE_DATA_VALIDATION = 5, PASTE_CONDITIONAL_FORMATTING = 6 }


	/** A request to create developer metadata. */
	export interface CreateDeveloperMetadataRequest {

		/**
		 * Developer metadata associated with a location or object in a spreadsheet.
		 * Developer metadata may be used to associate arbitrary data with various
		 * parts of a spreadsheet and will remain associated at those locations as they
		 * move around and the spreadsheet is edited.  For example, if developer
		 * metadata is associated with row 5 and another row is then subsequently
		 * inserted above row 5, that original metadata will still be associated with
		 * the row it was first associated with (what is now row 6). If the associated
		 * object is deleted its metadata is deleted too.
		 */
		developerMetadata?: DeveloperMetadata;
	}


	/**
	 * Developer metadata associated with a location or object in a spreadsheet.
	 * Developer metadata may be used to associate arbitrary data with various
	 * parts of a spreadsheet and will remain associated at those locations as they
	 * move around and the spreadsheet is edited.  For example, if developer
	 * metadata is associated with row 5 and another row is then subsequently
	 * inserted above row 5, that original metadata will still be associated with
	 * the row it was first associated with (what is now row 6). If the associated
	 * object is deleted its metadata is deleted too.
	 */
	export interface DeveloperMetadata {

		/** A location where metadata may be associated in a spreadsheet. */
		location?: DeveloperMetadataLocation;

		/**
		 * The spreadsheet-scoped unique ID that identifies the metadata. IDs may be
		 * specified when metadata is created, otherwise one will be randomly
		 * generated and assigned. Must be positive.
		 */
		metadataId?: number;

		/**
		 * The metadata key. There may be multiple metadata in a spreadsheet with the
		 * same key.  Developer metadata must always have a key specified.
		 */
		metadataKey?: string;

		/** Data associated with the metadata's key. */
		metadataValue?: string;

		/**
		 * The metadata visibility.  Developer metadata must always have a visibility
		 * specified.
		 */
		visibility?: DeveloperMetadataLookupVisibility;
	}


	/** Moves data from the source to the destination. */
	export interface CutPasteRequest {

		/**
		 * A coordinate in a sheet.
		 * All indexes are zero-based.
		 */
		destination?: GridCoordinate;

		/**
		 * What kind of data to paste.  All the source data will be cut, regardless
		 * of what is pasted.
		 */
		pasteType?: CopyPasteRequestPasteType;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		source?: GridRange;
	}


	/** Removes the banded range with the given ID from the spreadsheet. */
	export interface DeleteBandingRequest {

		/** The ID of the banded range to delete. */
		bandedRangeId?: number;
	}


	/**
	 * Deletes a conditional format rule at the given index.
	 * All subsequent rules' indexes are decremented.
	 */
	export interface DeleteConditionalFormatRuleRequest {

		/** The zero-based index of the rule to be deleted. */
		index?: number;

		/** The sheet the rule is being deleted from. */
		sheetId?: number;
	}


	/** A request to delete developer metadata. */
	export interface DeleteDeveloperMetadataRequest {

		/**
		 * Filter that describes what data should be selected or returned from a
		 * request.
		 */
		dataFilter?: DataFilter;
	}


	/** Deletes the dimensions from the sheet. */
	export interface DeleteDimensionRequest {

		/**
		 * A range along a single dimension on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open: the start index is inclusive
		 * and the end index is exclusive.
		 * Missing indexes indicate the range is unbounded on that side.
		 */
		range?: DimensionRange;
	}


	/**
	 * Deletes a group over the specified range by decrementing the depth of the
	 * dimensions in the range.
	 * For example, assume the sheet has a depth-1 group over B:E and a depth-2
	 * group over C:D. Deleting a group over D:E leaves the sheet with a
	 * depth-1 group over B:D and a depth-2 group over C:C.
	 */
	export interface DeleteDimensionGroupRequest {

		/**
		 * A range along a single dimension on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open: the start index is inclusive
		 * and the end index is exclusive.
		 * Missing indexes indicate the range is unbounded on that side.
		 */
		range?: DimensionRange;
	}


	/**
	 * Removes rows within this range that contain values in the specified columns
	 * that are duplicates of values in any previous row. Rows with identical values
	 * but different letter cases, formatting, or formulas are considered to be
	 * duplicates.
	 * This request also removes duplicate rows hidden from view (for example, due
	 * to a filter). When removing duplicates, the first instance of each duplicate
	 * row scanning from the top downwards is kept in the resulting range. Content
	 * outside of the specified range isn't removed, and rows considered duplicates
	 * do not have to be adjacent to each other in the range.
	 */
	export interface DeleteDuplicatesRequest {

		/**
		 * The columns in the range to analyze for duplicate values. If no columns are
		 * selected then all columns are analyzed for duplicates.
		 */
		comparisonColumns?: Array<DimensionRange>;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;
	}


	/** Deletes the embedded object with the given ID. */
	export interface DeleteEmbeddedObjectRequest {

		/** The ID of the embedded object to delete. */
		objectId?: number;
	}


	/** Deletes a particular filter view. */
	export interface DeleteFilterViewRequest {

		/** The ID of the filter to delete. */
		filterId?: number;
	}


	/** Removes the named range with the given ID from the spreadsheet. */
	export interface DeleteNamedRangeRequest {

		/** The ID of the named range to delete. */
		namedRangeId?: string;
	}


	/** Deletes the protected range with the given ID. */
	export interface DeleteProtectedRangeRequest {

		/** The ID of the protected range to delete. */
		protectedRangeId?: number;
	}


	/** Deletes a range of cells, shifting other cells into the deleted area. */
	export interface DeleteRangeRequest {

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/**
		 * The dimension from which deleted cells will be replaced with.
		 * If ROWS, existing cells will be shifted upward to
		 * replace the deleted cells. If COLUMNS, existing cells
		 * will be shifted left to replace the deleted cells.
		 */
		shiftDimension?: DimensionRangeDimension;
	}


	/** Deletes the requested sheet. */
	export interface DeleteSheetRequest {

		/** The ID of the sheet to delete. */
		sheetId?: number;
	}


	/** Duplicates a particular filter view. */
	export interface DuplicateFilterViewRequest {

		/** The ID of the filter being duplicated. */
		filterId?: number;
	}


	/** Duplicates the contents of a sheet. */
	export interface DuplicateSheetRequest {

		/**
		 * The zero-based index where the new sheet should be inserted.
		 * The index of all sheets after this are incremented.
		 */
		insertSheetIndex?: number;

		/**
		 * If set, the ID of the new sheet. If not set, an ID is chosen.
		 * If set, the ID must not conflict with any existing sheet ID.
		 * If set, it must be non-negative.
		 */
		newSheetId?: number;

		/** The name of the new sheet.  If empty, a new name is chosen for you. */
		newSheetName?: string;

		/** The sheet to duplicate. */
		sourceSheetId?: number;
	}


	/** Finds and replaces data in cells over a range, sheet, or all sheets. */
	export interface FindReplaceRequest {

		/** True to find/replace over all sheets. */
		allSheets?: boolean;

		/** The value to search. */
		find?: string;

		/**
		 * True if the search should include cells with formulas.
		 * False to skip cells with formulas.
		 */
		includeFormulas?: boolean;

		/** True if the search is case sensitive. */
		matchCase?: boolean;

		/** True if the find value should match the entire cell. */
		matchEntireCell?: boolean;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/** The value to use as the replacement. */
		replacement?: string;

		/**
		 * True if the find value is a regex.
		 * The regular expression and replacement should follow Java regex rules
		 * at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html.
		 * The replacement string is allowed to refer to capturing groups.
		 * For example, if one cell has the contents `"Google Sheets"` and another
		 * has `"Google Docs"`, then searching for `"o.* (.*)"` with a replacement of
		 * `"$1 Rocks"` would change the contents of the cells to
		 * `"GSheets Rocks"` and `"GDocs Rocks"` respectively.
		 */
		searchByRegex?: boolean;

		/** The sheet to find/replace over. */
		sheetId?: number;
	}


	/** Inserts rows or columns in a sheet at a particular index. */
	export interface InsertDimensionRequest {

		/**
		 * Whether dimension properties should be extended from the dimensions
		 * before or after the newly inserted dimensions.
		 * True to inherit from the dimensions before (in which case the start
		 * index must be greater than 0), and false to inherit from the dimensions
		 * after.
		 * For example, if row index 0 has red background and row index 1
		 * has a green background, then inserting 2 rows at index 1 can inherit
		 * either the green or red background.  If `inheritFromBefore` is true,
		 * the two new rows will be red (because the row before the insertion point
		 * was red), whereas if `inheritFromBefore` is false, the two new rows will
		 * be green (because the row after the insertion point was green).
		 */
		inheritFromBefore?: boolean;

		/**
		 * A range along a single dimension on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open: the start index is inclusive
		 * and the end index is exclusive.
		 * Missing indexes indicate the range is unbounded on that side.
		 */
		range?: DimensionRange;
	}


	/** Inserts cells into a range, shifting the existing cells over or down. */
	export interface InsertRangeRequest {

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/**
		 * The dimension which will be shifted when inserting cells.
		 * If ROWS, existing cells will be shifted down.
		 * If COLUMNS, existing cells will be shifted right.
		 */
		shiftDimension?: DimensionRangeDimension;
	}


	/** Merges all cells in the range. */
	export interface MergeCellsRequest {

		/** How the cells should be merged. */
		mergeType?: MergeCellsRequestMergeType;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;
	}

	export enum MergeCellsRequestMergeType { MERGE_ALL = 0, MERGE_COLUMNS = 1, MERGE_ROWS = 2 }


	/** Moves one or more rows or columns. */
	export interface MoveDimensionRequest {

		/**
		 * The zero-based start index of where to move the source data to,
		 * based on the coordinates *before* the source data is removed
		 * from the grid.  Existing data will be shifted down or right
		 * (depending on the dimension) to make room for the moved dimensions.
		 * The source dimensions are removed from the grid, so the
		 * the data may end up in a different index than specified.
		 * For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to move
		 * `"1"` and `"2"` to between `"3"` and `"4"`, the source would be
		 * `ROWS [1..3)`,and the destination index would be `"4"`
		 * (the zero-based index of row 5).
		 * The end result would be `A1..A5` of `0, 3, 1, 2, 4`.
		 */
		destinationIndex?: number;

		/**
		 * A range along a single dimension on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open: the start index is inclusive
		 * and the end index is exclusive.
		 * Missing indexes indicate the range is unbounded on that side.
		 */
		source?: DimensionRange;
	}


	/** Inserts data into the spreadsheet starting at the specified coordinate. */
	export interface PasteDataRequest {

		/**
		 * A coordinate in a sheet.
		 * All indexes are zero-based.
		 */
		coordinate?: GridCoordinate;

		/** The data to insert. */
		data?: string;

		/** The delimiter in the data. */
		delimiter?: string;

		/** True if the data is HTML. */
		html?: boolean;

		/** How the data should be pasted. */
		type?: CopyPasteRequestPasteType;
	}


	/** Randomizes the order of the rows in a range. */
	export interface RandomizeRangeRequest {

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;
	}


	/**
	 * Updates all cells in the range to the values in the given Cell object.
	 * Only the fields listed in the fields field are updated; others are
	 * unchanged.
	 * If writing a cell with a formula, the formula's ranges will automatically
	 * increment for each field in the range.
	 * For example, if writing a cell with formula `=A1` into range B2:C4,
	 * B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`,
	 * C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`.
	 * To keep the formula's ranges static, use the `$` indicator.
	 * For example, use the formula `=$A$1` to prevent both the row and the
	 * column from incrementing.
	 */
	export interface RepeatCellRequest {

		/** Data about a specific cell. */
		cell?: CellData;

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root `cell` is implied and should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;
	}


	/** Sets the basic filter associated with a sheet. */
	export interface SetBasicFilterRequest {

		/** The default filter associated with a sheet. */
		filter?: BasicFilter;
	}


	/**
	 * Sets a data validation rule to every cell in the range.
	 * To clear validation in a range, call this with no rule specified.
	 */
	export interface SetDataValidationRequest {

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/** A data validation rule. */
		rule?: DataValidationRule;
	}


	/** Sorts data in rows based on a sort order per column. */
	export interface SortRangeRequest {

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/**
		 * The sort order per column. Later specifications are used when values
		 * are equal in the earlier specifications.
		 */
		sortSpecs?: Array<SortSpec>;
	}


	/**
	 * Splits a column of text into multiple columns,
	 * based on a delimiter in each cell.
	 */
	export interface TextToColumnsRequest {

		/**
		 * The delimiter to use. Used only if delimiterType is
		 * CUSTOM.
		 */
		delimiter?: string;

		/** The delimiter type to use. */
		delimiterType?: TextToColumnsRequestDelimiterType;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		source?: GridRange;
	}

	export enum TextToColumnsRequestDelimiterType { DELIMITER_TYPE_UNSPECIFIED = 0, COMMA = 1, SEMICOLON = 2, PERIOD = 3, SPACE = 4, CUSTOM = 5, AUTODETECT = 6 }


	/**
	 * Trims the whitespace (such as spaces, tabs, or new lines) in every cell in
	 * the specified range. This request removes all whitespace from the start and
	 * end of each cell's text, and reduces any subsequence of remaining whitespace
	 * characters to a single space. If the resulting trimmed text starts with a '+'
	 * or '=' character, the text remains as a string value and isn't interpreted
	 * as a formula.
	 */
	export interface TrimWhitespaceRequest {

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;
	}


	/** Unmerges cells in the given range. */
	export interface UnmergeCellsRequest {

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;
	}


	/** Updates properties of the supplied banded range. */
	export interface UpdateBandingRequest {

		/** A banded (alternating colors) range in a sheet. */
		bandedRange?: BandedRange;

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root `bandedRange` is implied and should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;
	}


	/**
	 * Updates the borders of a range.
	 * If a field is not set in the request, that means the border remains as-is.
	 * For example, with two subsequent UpdateBordersRequest:
	 *  1. range: A1:A5 `{ top: RED, bottom: WHITE }`
	 *  2. range: A1:A5 `{ left: BLUE }`
	 * That would result in A1:A5 having a borders of
	 * `{ top: RED, bottom: WHITE, left: BLUE }`.
	 * If you want to clear a border, explicitly set the style to
	 * NONE.
	 */
	export interface UpdateBordersRequest {

		/** A border along a cell. */
		bottom?: Border;

		/** A border along a cell. */
		innerHorizontal?: Border;

		/** A border along a cell. */
		innerVertical?: Border;

		/** A border along a cell. */
		left?: Border;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/** A border along a cell. */
		right?: Border;

		/** A border along a cell. */
		top?: Border;
	}


	/** Updates all cells in a range with new data. */
	export interface UpdateCellsRequest {

		/**
		 * The fields of CellData that should be updated.
		 * At least one field must be specified.
		 * The root is the CellData; 'row.values.' should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;

		/**
		 * A range on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open, e.g the start index is inclusive
		 * and the end index is exclusive -- [start_index, end_index).
		 * Missing indexes indicate the range is unbounded on that side.
		 * For example, if `"Sheet1"` is sheet ID 0, then:
		 * `Sheet1!A1:A1 == sheet_id: 0,
		 * start_row_index: 0, end_row_index: 1,
		 * start_column_index: 0, end_column_index: 1`
		 * `Sheet1!A3:B4 == sheet_id: 0,
		 * start_row_index: 2, end_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A:B == sheet_id: 0,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1!A5:B == sheet_id: 0,
		 * start_row_index: 4,
		 * start_column_index: 0, end_column_index: 2`
		 * `Sheet1 == sheet_id:0`
		 * The start index must always be less than or equal to the end index.
		 * If the start index equals the end index, then the range is empty.
		 * Empty ranges are typically not meaningful and are usually rendered in the
		 * UI as `#REF!`.
		 */
		range?: GridRange;

		/** The data to write. */
		rows?: Array<RowData>;

		/**
		 * A coordinate in a sheet.
		 * All indexes are zero-based.
		 */
		start?: GridCoordinate;
	}


	/**
	 * Updates a chart's specifications.
	 * (This does not move or resize a chart. To move or resize a chart, use
	 *  UpdateEmbeddedObjectPositionRequest.)
	 */
	export interface UpdateChartSpecRequest {

		/** The ID of the chart to update. */
		chartId?: number;

		/** The specifications of a chart. */
		spec?: ChartSpec;
	}


	/**
	 * Updates a conditional format rule at the given index,
	 * or moves a conditional format rule to another index.
	 */
	export interface UpdateConditionalFormatRuleRequest {

		/** The zero-based index of the rule that should be replaced or moved. */
		index?: number;

		/** The zero-based new index the rule should end up at. */
		newIndex?: number;

		/** A rule describing a conditional format. */
		rule?: ConditionalFormatRule;

		/**
		 * The sheet of the rule to move.  Required if new_index is set,
		 * unused otherwise.
		 */
		sheetId?: number;
	}


	/**
	 * A request to update properties of developer metadata.
	 * Updates the properties of the developer metadata selected by the filters to
	 * the values provided in the DeveloperMetadata resource.  Callers must
	 * specify the properties they wish to update in the fields parameter, as well
	 * as specify at least one DataFilter matching the metadata they wish to
	 * update.
	 */
	export interface UpdateDeveloperMetadataRequest {

		/** The filters matching the developer metadata entries to update. */
		dataFilters?: Array<DataFilter>;

		/**
		 * Developer metadata associated with a location or object in a spreadsheet.
		 * Developer metadata may be used to associate arbitrary data with various
		 * parts of a spreadsheet and will remain associated at those locations as they
		 * move around and the spreadsheet is edited.  For example, if developer
		 * metadata is associated with row 5 and another row is then subsequently
		 * inserted above row 5, that original metadata will still be associated with
		 * the row it was first associated with (what is now row 6). If the associated
		 * object is deleted its metadata is deleted too.
		 */
		developerMetadata?: DeveloperMetadata;

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root `developerMetadata` is implied and should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;
	}


	/** Updates the state of the specified group. */
	export interface UpdateDimensionGroupRequest {

		/**
		 * A group over an interval of rows or columns on a sheet, which can contain or
		 * be contained within other groups. A group can be collapsed or expanded as a
		 * unit on the sheet.
		 */
		dimensionGroup?: DimensionGroup;

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root `dimensionGroup` is implied and should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;
	}


	/** Updates properties of dimensions within the specified range. */
	export interface UpdateDimensionPropertiesRequest {

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root `properties` is implied and should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;

		/** Properties about a dimension. */
		properties?: DimensionProperties;

		/**
		 * A range along a single dimension on a sheet.
		 * All indexes are zero-based.
		 * Indexes are half open: the start index is inclusive
		 * and the end index is exclusive.
		 * Missing indexes indicate the range is unbounded on that side.
		 */
		range?: DimensionRange;
	}


	/** Properties about a dimension. */
	export interface DimensionProperties {

		/** The developer metadata associated with a single row or column. */
		developerMetadata?: Array<DeveloperMetadata>;

		/**
		 * True if this dimension is being filtered.
		 * This field is read-only.
		 */
		hiddenByFilter?: boolean;

		/** True if this dimension is explicitly hidden. */
		hiddenByUser?: boolean;

		/** The height (if a row) or width (if a column) of the dimension in pixels. */
		pixelSize?: number;
	}


	/**
	 * Update an embedded object's position (such as a moving or resizing a
	 * chart or image).
	 */
	export interface UpdateEmbeddedObjectPositionRequest {

		/**
		 * The fields of OverlayPosition
		 * that should be updated when setting a new position. Used only if
		 * newPosition.overlayPosition
		 * is set, in which case at least one field must
		 * be specified.  The root `newPosition.overlayPosition` is implied and
		 * should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;

		/** The position of an embedded object such as a chart. */
		newPosition?: EmbeddedObjectPosition;

		/** The ID of the object to moved. */
		objectId?: number;
	}


	/** Updates properties of the filter view. */
	export interface UpdateFilterViewRequest {

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root `filter` is implied and should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;

		/** A filter view. */
		filter?: FilterView;
	}


	/**
	 * Updates properties of the named range with the specified
	 * namedRangeId.
	 */
	export interface UpdateNamedRangeRequest {

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root `namedRange` is implied and should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;

		/** A named range. */
		namedRange?: NamedRange;
	}


	/**
	 * Updates an existing protected range with the specified
	 * protectedRangeId.
	 */
	export interface UpdateProtectedRangeRequest {

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root `protectedRange` is implied and should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;

		/** A protected range. */
		protectedRange?: ProtectedRange;
	}


	/**
	 * Updates properties of the sheet with the specified
	 * sheetId.
	 */
	export interface UpdateSheetPropertiesRequest {

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root `properties` is implied and should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;

		/** Properties of a sheet. */
		properties?: SheetProperties;
	}


	/**
	 * Updates a slicer's specifications.
	 * (This does not move or resize a slicer. To move or resize a slicer use
	 * UpdateEmbeddedObjectPositionRequest.
	 */
	export interface UpdateSlicerSpecRequest {

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root `SlicerSpec` is implied and should not be specified. A single "*"`
		 * can be used as short-hand for listing every field.
		 */
		fields?: string;

		/** The id of the slicer to update. */
		slicerId?: number;

		/** The specifications of a slicer. */
		spec?: SlicerSpec;
	}


	/** Updates properties of a spreadsheet. */
	export interface UpdateSpreadsheetPropertiesRequest {

		/**
		 * The fields that should be updated.  At least one field must be specified.
		 * The root 'properties' is implied and should not be specified.
		 * A single `"*"` can be used as short-hand for listing every field.
		 */
		fields?: string;

		/** Properties of a spreadsheet. */
		properties?: SpreadsheetProperties;
	}


	/** Properties of a spreadsheet. */
	export interface SpreadsheetProperties {

		/** The amount of time to wait before volatile functions are recalculated. */
		autoRecalc?: SpreadsheetPropertiesAutoRecalc;

		/** The format of a cell. */
		defaultFormat?: CellFormat;

		/**
		 * Settings to control how circular dependencies are resolved with iterative
		 * calculation.
		 */
		iterativeCalculationSettings?: IterativeCalculationSettings;

		/**
		 * The locale of the spreadsheet in one of the following formats:
		 * * an ISO 639-1 language code such as `en`
		 * * an ISO 639-2 language code such as `fil`, if no 639-1 code exists
		 * * a combination of the ISO language code and country code, such as `en_US`
		 * Note: when updating this field, not all locales/languages are supported.
		 */
		locale?: string;

		/** Represents spreadsheet theme */
		spreadsheetTheme?: SpreadsheetTheme;

		/**
		 * The time zone of the spreadsheet, in CLDR format such as
		 * `America/New_York`. If the time zone isn't recognized, this may
		 * be a custom time zone such as `GMT-07:00`.
		 */
		timeZone?: string;

		/** The title of the spreadsheet. */
		title?: string;
	}

	export enum SpreadsheetPropertiesAutoRecalc { RECALCULATION_INTERVAL_UNSPECIFIED = 0, ON_CHANGE = 1, MINUTE = 2, HOUR = 3 }


	/**
	 * Settings to control how circular dependencies are resolved with iterative
	 * calculation.
	 */
	export interface IterativeCalculationSettings {

		/**
		 * When iterative calculation is enabled and successive results differ by
		 * less than this threshold value, the calculation rounds stop.
		 */
		convergenceThreshold?: number;

		/**
		 * When iterative calculation is enabled, the maximum number of calculation
		 * rounds to perform.
		 */
		maxIterations?: number;
	}


	/** Represents spreadsheet theme */
	export interface SpreadsheetTheme {

		/** / Name of the primary font family. */
		primaryFontFamily?: string;

		/**
		 * The spreadsheet theme color pairs. To update you must provide all theme
		 * color pairs.
		 */
		themeColors?: Array<ThemeColorPair>;
	}


	/**
	 * A pair mapping a spreadsheet theme color type to the concrete color it
	 * represents.
	 */
	export interface ThemeColorPair {

		/** A color value. */
		color?: ColorStyle;

		/** The type of the spreadsheet theme color. */
		colorType?: ColorStyleThemeColor;
	}


	/** The reply for batch updating a spreadsheet. */
	export interface BatchUpdateSpreadsheetResponse {

		/**
		 * The reply of the updates.  This maps 1:1 with the updates, although
		 * replies to some requests may be empty.
		 */
		replies?: Array<Response>;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string;

		/** Resource that represents a spreadsheet. */
		updatedSpreadsheet?: Spreadsheet;
	}


	/** A single response from an update. */
	export interface Response {

		/** The result of adding a banded range. */
		addBanding?: AddBandingResponse;

		/** The result of adding a chart to a spreadsheet. */
		addChart?: AddChartResponse;

		/** The result of adding a group. */
		addDimensionGroup?: AddDimensionGroupResponse;

		/** The result of adding a filter view. */
		addFilterView?: AddFilterViewResponse;

		/** The result of adding a named range. */
		addNamedRange?: AddNamedRangeResponse;

		/** The result of adding a new protected range. */
		addProtectedRange?: AddProtectedRangeResponse;

		/** The result of adding a sheet. */
		addSheet?: AddSheetResponse;

		/** The result of adding a slicer to a spreadsheet. */
		addSlicer?: AddSlicerResponse;

		/** The response from creating developer metadata. */
		createDeveloperMetadata?: CreateDeveloperMetadataResponse;

		/** The result of deleting a conditional format rule. */
		deleteConditionalFormatRule?: DeleteConditionalFormatRuleResponse;

		/** The response from deleting developer metadata. */
		deleteDeveloperMetadata?: DeleteDeveloperMetadataResponse;

		/** The result of deleting a group. */
		deleteDimensionGroup?: DeleteDimensionGroupResponse;

		/** The result of removing duplicates in a range. */
		deleteDuplicates?: DeleteDuplicatesResponse;

		/** The result of a filter view being duplicated. */
		duplicateFilterView?: DuplicateFilterViewResponse;

		/** The result of duplicating a sheet. */
		duplicateSheet?: DuplicateSheetResponse;

		/** The result of the find/replace. */
		findReplace?: FindReplaceResponse;

		/** The result of trimming whitespace in cells. */
		trimWhitespace?: TrimWhitespaceResponse;

		/** The result of updating a conditional format rule. */
		updateConditionalFormatRule?: UpdateConditionalFormatRuleResponse;

		/** The response from updating developer metadata. */
		updateDeveloperMetadata?: UpdateDeveloperMetadataResponse;

		/** The result of updating an embedded object's position. */
		updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionResponse;
	}


	/** The response from creating developer metadata. */
	export interface CreateDeveloperMetadataResponse {

		/**
		 * Developer metadata associated with a location or object in a spreadsheet.
		 * Developer metadata may be used to associate arbitrary data with various
		 * parts of a spreadsheet and will remain associated at those locations as they
		 * move around and the spreadsheet is edited.  For example, if developer
		 * metadata is associated with row 5 and another row is then subsequently
		 * inserted above row 5, that original metadata will still be associated with
		 * the row it was first associated with (what is now row 6). If the associated
		 * object is deleted its metadata is deleted too.
		 */
		developerMetadata?: DeveloperMetadata;
	}


	/** The result of deleting a conditional format rule. */
	export interface DeleteConditionalFormatRuleResponse {

		/** A rule describing a conditional format. */
		rule?: ConditionalFormatRule;
	}


	/** The response from deleting developer metadata. */
	export interface DeleteDeveloperMetadataResponse {

		/** The metadata that was deleted. */
		deletedDeveloperMetadata?: Array<DeveloperMetadata>;
	}


	/** The result of deleting a group. */
	export interface DeleteDimensionGroupResponse {

		/** All groups of a dimension after deleting a group from that dimension. */
		dimensionGroups?: Array<DimensionGroup>;
	}


	/** The result of removing duplicates in a range. */
	export interface DeleteDuplicatesResponse {

		/** The number of duplicate rows removed. */
		duplicatesRemovedCount?: number;
	}


	/** The result of a filter view being duplicated. */
	export interface DuplicateFilterViewResponse {

		/** A filter view. */
		filter?: FilterView;
	}


	/** The result of duplicating a sheet. */
	export interface DuplicateSheetResponse {

		/** Properties of a sheet. */
		properties?: SheetProperties;
	}


	/** The result of the find/replace. */
	export interface FindReplaceResponse {

		/** The number of formula cells changed. */
		formulasChanged?: number;

		/**
		 * The number of occurrences (possibly multiple within a cell) changed.
		 * For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would
		 * be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`.
		 */
		occurrencesChanged?: number;

		/** The number of rows changed. */
		rowsChanged?: number;

		/** The number of sheets changed. */
		sheetsChanged?: number;

		/** The number of non-formula cells changed. */
		valuesChanged?: number;
	}


	/** The result of trimming whitespace in cells. */
	export interface TrimWhitespaceResponse {

		/** The number of cells that were trimmed of whitespace. */
		cellsChangedCount?: number;
	}


	/** The result of updating a conditional format rule. */
	export interface UpdateConditionalFormatRuleResponse {

		/** The index of the new rule. */
		newIndex?: number;

		/** A rule describing a conditional format. */
		newRule?: ConditionalFormatRule;

		/**
		 * The old index of the rule. Not set if a rule was replaced
		 * (because it is the same as new_index).
		 */
		oldIndex?: number;

		/** A rule describing a conditional format. */
		oldRule?: ConditionalFormatRule;
	}


	/** The response from updating developer metadata. */
	export interface UpdateDeveloperMetadataResponse {

		/** The updated developer metadata. */
		developerMetadata?: Array<DeveloperMetadata>;
	}


	/** The result of updating an embedded object's position. */
	export interface UpdateEmbeddedObjectPositionResponse {

		/** The position of an embedded object such as a chart. */
		position?: EmbeddedObjectPosition;
	}


	/** Resource that represents a spreadsheet. */
	export interface Spreadsheet {

		/** The developer metadata associated with a spreadsheet. */
		developerMetadata?: Array<DeveloperMetadata>;

		/** The named ranges defined in a spreadsheet. */
		namedRanges?: Array<NamedRange>;

		/** Properties of a spreadsheet. */
		properties?: SpreadsheetProperties;

		/** The sheets that are part of a spreadsheet. */
		sheets?: Array<Sheet>;

		/**
		 * The ID of the spreadsheet.
		 * This field is read-only.
		 */
		spreadsheetId?: string;

		/**
		 * The url of the spreadsheet.
		 * This field is read-only.
		 */
		spreadsheetUrl?: string;
	}


	/** A sheet in a spreadsheet. */
	export interface Sheet {

		/** The banded (alternating colors) ranges on this sheet. */
		bandedRanges?: Array<BandedRange>;

		/** The default filter associated with a sheet. */
		basicFilter?: BasicFilter;

		/** The specifications of every chart on this sheet. */
		charts?: Array<EmbeddedChart>;

		/**
		 * All column groups on this sheet, ordered by increasing range start index,
		 * then by group depth.
		 */
		columnGroups?: Array<DimensionGroup>;

		/** The conditional format rules in this sheet. */
		conditionalFormats?: Array<ConditionalFormatRule>;

		/**
		 * Data in the grid, if this is a grid sheet.
		 * The number of GridData objects returned is dependent on the number of
		 * ranges requested on this sheet. For example, if this is representing
		 * `Sheet1`, and the spreadsheet was requested with ranges
		 * `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a
		 * startRow/startColumn of `0`,
		 * while the second one will have `startRow 14` (zero-based row 15),
		 * and `startColumn 3` (zero-based column D).
		 */
		data?: Array<GridData>;

		/** The developer metadata associated with a sheet. */
		developerMetadata?: Array<DeveloperMetadata>;

		/** The filter views in this sheet. */
		filterViews?: Array<FilterView>;

		/** The ranges that are merged together. */
		merges?: Array<GridRange>;

		/** Properties of a sheet. */
		properties?: SheetProperties;

		/** The protected ranges in this sheet. */
		protectedRanges?: Array<ProtectedRange>;

		/**
		 * All row groups on this sheet, ordered by increasing range start index, then
		 * by group depth.
		 */
		rowGroups?: Array<DimensionGroup>;

		/** The slicers on this sheet. */
		slicers?: Array<Slicer>;
	}


	/** Data in the grid, as well as metadata about the dimensions. */
	export interface GridData {

		/**
		 * Metadata about the requested columns in the grid, starting with the column
		 * in start_column.
		 */
		columnMetadata?: Array<DimensionProperties>;

		/**
		 * The data in the grid, one entry per row,
		 * starting with the row in startRow.
		 * The values in RowData will correspond to columns starting
		 * at start_column.
		 */
		rowData?: Array<RowData>;

		/**
		 * Metadata about the requested rows in the grid, starting with the row
		 * in start_row.
		 */
		rowMetadata?: Array<DimensionProperties>;

		/** The first column this GridData refers to, zero-based. */
		startColumn?: number;

		/** The first row this GridData refers to, zero-based. */
		startRow?: number;
	}


	/** The request for updating more than one range of values in a spreadsheet. */
	export interface BatchUpdateValuesByDataFilterRequest {

		/**
		 * The new values to apply to the spreadsheet.  If more than one range is
		 * matched by the specified DataFilter the specified values are applied to
		 * all of those ranges.
		 */
		data?: Array<DataFilterValueRange>;

		/**
		 * Determines if the update response should include the values
		 * of the cells that were updated. By default, responses
		 * do not include the updated values. The `updatedData` field within
		 * each of the BatchUpdateValuesResponse.responses contains the updated
		 * values. If the range to write was larger than the range actually written,
		 * the response includes all values in the requested range (excluding trailing
		 * empty rows and columns).
		 */
		includeValuesInResponse?: boolean;

		/**
		 * Determines how dates, times, and durations in the response should be
		 * rendered. This is ignored if response_value_render_option is
		 * FORMATTED_VALUE.
		 * The default dateTime render option is
		 * DateTimeRenderOption.SERIAL_NUMBER.
		 */
		responseDateTimeRenderOption?: BatchGetValuesByDataFilterRequestDateTimeRenderOption;

		/**
		 * Determines how values in the response should be rendered.
		 * The default render option is ValueRenderOption.FORMATTED_VALUE.
		 */
		responseValueRenderOption?: BatchGetValuesByDataFilterRequestValueRenderOption;

		/** How the input data should be interpreted. */
		valueInputOption?: BatchUpdateValuesByDataFilterRequestValueInputOption;
	}


	/** A range of values whose location is specified by a DataFilter. */
	export interface DataFilterValueRange {

		/**
		 * Filter that describes what data should be selected or returned from a
		 * request.
		 */
		dataFilter?: DataFilter;

		/** The major dimension of the values. */
		majorDimension?: DimensionRangeDimension;

		/**
		 * The data to be written.  If the provided values exceed any of the ranges
		 * matched by the data filter then the request fails.  If the provided values
		 * are less than the matched ranges only the specified values are written,
		 * existing values in the matched ranges remain unaffected.
		 */
		values?: Array<string>;
	}

	export enum BatchUpdateValuesByDataFilterRequestValueInputOption { INPUT_VALUE_OPTION_UNSPECIFIED = 0, RAW = 1, USER_ENTERED = 2 }


	/** The response when updating a range of values in a spreadsheet. */
	export interface BatchUpdateValuesByDataFilterResponse {

		/** The response for each range updated. */
		responses?: Array<UpdateValuesByDataFilterResponse>;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string;

		/** The total number of cells updated. */
		totalUpdatedCells?: number;

		/**
		 * The total number of columns where at least one cell in the column was
		 * updated.
		 */
		totalUpdatedColumns?: number;

		/** The total number of rows where at least one cell in the row was updated. */
		totalUpdatedRows?: number;

		/**
		 * The total number of sheets where at least one cell in the sheet was
		 * updated.
		 */
		totalUpdatedSheets?: number;
	}


	/**
	 * The response when updating a range of values by a data filter in a
	 * spreadsheet.
	 */
	export interface UpdateValuesByDataFilterResponse {

		/**
		 * Filter that describes what data should be selected or returned from a
		 * request.
		 */
		dataFilter?: DataFilter;

		/** The number of cells updated. */
		updatedCells?: number;

		/** The number of columns where at least one cell in the column was updated. */
		updatedColumns?: number;

		/** Data within a range of the spreadsheet. */
		updatedData?: ValueRange;

		/** The range (in A1 notation) that updates were applied to. */
		updatedRange?: string;

		/** The number of rows where at least one cell in the row was updated. */
		updatedRows?: number;
	}


	/** The request for updating more than one range of values in a spreadsheet. */
	export interface BatchUpdateValuesRequest {

		/** The new values to apply to the spreadsheet. */
		data?: Array<ValueRange>;

		/**
		 * Determines if the update response should include the values
		 * of the cells that were updated. By default, responses
		 * do not include the updated values. The `updatedData` field within
		 * each of the BatchUpdateValuesResponse.responses contains the updated
		 * values. If the range to write was larger than the range actually written,
		 * the response includes all values in the requested range (excluding trailing
		 * empty rows and columns).
		 */
		includeValuesInResponse?: boolean;

		/**
		 * Determines how dates, times, and durations in the response should be
		 * rendered. This is ignored if response_value_render_option is
		 * FORMATTED_VALUE.
		 * The default dateTime render option is
		 * DateTimeRenderOption.SERIAL_NUMBER.
		 */
		responseDateTimeRenderOption?: BatchGetValuesByDataFilterRequestDateTimeRenderOption;

		/**
		 * Determines how values in the response should be rendered.
		 * The default render option is ValueRenderOption.FORMATTED_VALUE.
		 */
		responseValueRenderOption?: BatchGetValuesByDataFilterRequestValueRenderOption;

		/** How the input data should be interpreted. */
		valueInputOption?: BatchUpdateValuesByDataFilterRequestValueInputOption;
	}


	/** The response when updating a range of values in a spreadsheet. */
	export interface BatchUpdateValuesResponse {

		/**
		 * One UpdateValuesResponse per requested range, in the same order as
		 * the requests appeared.
		 */
		responses?: Array<UpdateValuesResponse>;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string;

		/** The total number of cells updated. */
		totalUpdatedCells?: number;

		/**
		 * The total number of columns where at least one cell in the column was
		 * updated.
		 */
		totalUpdatedColumns?: number;

		/** The total number of rows where at least one cell in the row was updated. */
		totalUpdatedRows?: number;

		/**
		 * The total number of sheets where at least one cell in the sheet was
		 * updated.
		 */
		totalUpdatedSheets?: number;
	}


	/** The request for clearing a range of values in a spreadsheet. */
	export interface ClearValuesRequest {
	}


	/** The response when clearing a range of values in a spreadsheet. */
	export interface ClearValuesResponse {

		/**
		 * The range (in A1 notation) that was cleared.
		 * (If the request was for an unbounded range or a ranger larger
		 * than the bounds of the sheet, this will be the actual range
		 * that was cleared, bounded to the sheet's limits.)
		 */
		clearedRange?: string;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string;
	}


	/** The request to copy a sheet across spreadsheets. */
	export interface CopySheetToAnotherSpreadsheetRequest {

		/** The ID of the spreadsheet to copy the sheet to. */
		destinationSpreadsheetId?: string;
	}


	/** The request for retrieving a Spreadsheet. */
	export interface GetSpreadsheetByDataFilterRequest {

		/**
		 * The DataFilters used to select which ranges to retrieve from
		 * the spreadsheet.
		 */
		dataFilters?: Array<DataFilter>;

		/**
		 * True if grid data should be returned.
		 * This parameter is ignored if a field mask was set in the request.
		 */
		includeGridData?: boolean;
	}


	/**
	 * A developer metadata entry and the data filters specified in the original
	 * request that matched it.
	 */
	export interface MatchedDeveloperMetadata {

		/** All filters matching the returned developer metadata. */
		dataFilters?: Array<DataFilter>;

		/**
		 * Developer metadata associated with a location or object in a spreadsheet.
		 * Developer metadata may be used to associate arbitrary data with various
		 * parts of a spreadsheet and will remain associated at those locations as they
		 * move around and the spreadsheet is edited.  For example, if developer
		 * metadata is associated with row 5 and another row is then subsequently
		 * inserted above row 5, that original metadata will still be associated with
		 * the row it was first associated with (what is now row 6). If the associated
		 * object is deleted its metadata is deleted too.
		 */
		developerMetadata?: DeveloperMetadata;
	}


	/**
	 * A request to retrieve all developer metadata matching the set of specified
	 * criteria.
	 */
	export interface SearchDeveloperMetadataRequest {

		/**
		 * The data filters describing the criteria used to determine which
		 * DeveloperMetadata entries to return.  DeveloperMetadata matching any of the
		 * specified filters are included in the response.
		 */
		dataFilters?: Array<DataFilter>;
	}


	/** A reply to a developer metadata search request. */
	export interface SearchDeveloperMetadataResponse {

		/** The metadata matching the criteria of the search request. */
		matchedDeveloperMetadata?: Array<MatchedDeveloperMetadata>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a spreadsheet, returning the newly created spreadsheet.
		 * Post v4/spreadsheets
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_create(requestBody: Spreadsheet): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the spreadsheet at the given ID.
		 * The caller must specify the spreadsheet ID.
		 * By default, data within grids will not be returned.
		 * You can include grid data one of two ways:
		 * * Specify a field mask listing your desired fields using the `fields` URL
		 * parameter in HTTP
		 * * Set the includeGridData
		 * URL parameter to true.  If a field mask is set, the `includeGridData`
		 * parameter is ignored
		 * For large spreadsheets, it is recommended to retrieve only the specific
		 * fields of the spreadsheet that you want.
		 * To retrieve only subsets of the spreadsheet, use the
		 * ranges URL parameter.
		 * Multiple ranges can be specified.  Limiting the range will
		 * return only the portions of the spreadsheet that intersect the requested
		 * ranges. Ranges are specified using A1 notation.
		 * Get v4/spreadsheets/{spreadsheetId}
		 * @param {string} spreadsheetId The spreadsheet to request.
		 * @param {boolean} includeGridData True if grid data should be returned.
		 * This parameter is ignored if a field mask was set in the request.
		 * @param {Array<string>} ranges The ranges to retrieve from the spreadsheet.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_get(spreadsheetId: string, includeGridData: boolean, ranges: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '&includeGridData=' + includeGridData + '&' + ranges.map(z => `ranges=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the developer metadata with the specified ID.
		 * The caller must specify the spreadsheet ID and the developer metadata's
		 * unique metadataId.
		 * Get v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}
		 * @param {string} spreadsheetId The ID of the spreadsheet to retrieve metadata from.
		 * @param {number} metadataId The ID of the developer metadata to retrieve.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_developerMetadata_get(spreadsheetId: string, metadataId: number): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/developerMetadata/' + metadataId, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns all developer metadata matching the specified DataFilter.
		 * If the provided DataFilter represents a DeveloperMetadataLookup object,
		 * this will return all DeveloperMetadata entries selected by it. If the
		 * DataFilter represents a location in a spreadsheet, this will return all
		 * developer metadata associated with locations intersecting that region.
		 * Post v4/spreadsheets/{spreadsheetId}/developerMetadata:search
		 * @param {string} spreadsheetId The ID of the spreadsheet to retrieve metadata from.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_developerMetadata_search(spreadsheetId: string, requestBody: SearchDeveloperMetadataRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/developerMetadata:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Copies a single sheet from a spreadsheet to another spreadsheet.
		 * Returns the properties of the newly created sheet.
		 * Post v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo
		 * @param {string} spreadsheetId The ID of the spreadsheet containing the sheet to copy.
		 * @param {number} sheetId The ID of the sheet to copy.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_sheets_copyTo(spreadsheetId: string, sheetId: number, requestBody: CopySheetToAnotherSpreadsheetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/sheets/' + sheetId + ':copyTo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a range of values from a spreadsheet.
		 * The caller must specify the spreadsheet ID and a range.
		 * Get v4/spreadsheets/{spreadsheetId}/values/{range}
		 * @param {string} spreadsheetId The ID of the spreadsheet to retrieve data from.
		 * @param {string} range The A1 notation of the values to retrieve.
		 * @param {BatchGetValuesByDataFilterRequestDateTimeRenderOption} dateTimeRenderOption How dates, times, and durations should be represented in the output.
		 * This is ignored if value_render_option is
		 * FORMATTED_VALUE.
		 * The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
		 * @param {DimensionRangeDimension} majorDimension The major dimension that results should use.
		 * For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then
		 * requesting `range=A1:B2,majorDimension=ROWS` returns `[[1,2],[3,4]]`,
		 * whereas requesting `range=A1:B2,majorDimension=COLUMNS` returns
		 * `[[1,3],[2,4]]`.
		 * @param {BatchGetValuesByDataFilterRequestValueRenderOption} valueRenderOption How values should be represented in the output.
		 * The default render option is ValueRenderOption.FORMATTED_VALUE.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_values_get(spreadsheetId: string, range: string, dateTimeRenderOption: BatchGetValuesByDataFilterRequestDateTimeRenderOption, majorDimension: DimensionRangeDimension, valueRenderOption: BatchGetValuesByDataFilterRequestValueRenderOption): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values/' + (range == null ? '' : encodeURIComponent(range)) + '&dateTimeRenderOption=' + dateTimeRenderOption + '&majorDimension=' + majorDimension + '&valueRenderOption=' + valueRenderOption, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets values in a range of a spreadsheet.
		 * The caller must specify the spreadsheet ID, range, and
		 * a valueInputOption.
		 * Put v4/spreadsheets/{spreadsheetId}/values/{range}
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @param {string} range The A1 notation of the values to update.
		 * @param {boolean} includeValuesInResponse Determines if the update response should include the values
		 * of the cells that were updated. By default, responses
		 * do not include the updated values.
		 * If the range to write was larger than the range actually written, the
		 * response includes all values in the requested range (excluding trailing
		 * empty rows and columns).
		 * @param {BatchGetValuesByDataFilterRequestDateTimeRenderOption} responseDateTimeRenderOption Determines how dates, times, and durations in the response should be
		 * rendered. This is ignored if response_value_render_option is
		 * FORMATTED_VALUE.
		 * The default dateTime render option is
		 * DateTimeRenderOption.SERIAL_NUMBER.
		 * @param {BatchGetValuesByDataFilterRequestValueRenderOption} responseValueRenderOption Determines how values in the response should be rendered.
		 * The default render option is ValueRenderOption.FORMATTED_VALUE.
		 * @param {BatchUpdateValuesByDataFilterRequestValueInputOption} valueInputOption How the input data should be interpreted.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_values_update(spreadsheetId: string, range: string, includeValuesInResponse: boolean, responseDateTimeRenderOption: BatchGetValuesByDataFilterRequestDateTimeRenderOption, responseValueRenderOption: BatchGetValuesByDataFilterRequestValueRenderOption, valueInputOption: BatchUpdateValuesByDataFilterRequestValueInputOption, requestBody: ValueRange): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values/' + (range == null ? '' : encodeURIComponent(range)) + '&includeValuesInResponse=' + includeValuesInResponse + '&responseDateTimeRenderOption=' + responseDateTimeRenderOption + '&responseValueRenderOption=' + responseValueRenderOption + '&valueInputOption=' + valueInputOption, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Appends values to a spreadsheet. The input range is used to search for
		 * existing data and find a "table" within that range. Values will be
		 * appended to the next row of the table, starting with the first column of
		 * the table. See the
		 * [guide](/sheets/api/guides/values#appending_values)
		 * and
		 * [sample code](/sheets/api/samples/writing#append_values)
		 * for specific details of how tables are detected and data is appended.
		 * The caller must specify the spreadsheet ID, range, and
		 * a valueInputOption.  The `valueInputOption` only
		 * controls how the input data will be added to the sheet (column-wise or
		 * row-wise), it does not influence what cell the data starts being written
		 * to.
		 * Post v4/spreadsheets/{spreadsheetId}/values/{range}:append
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @param {string} range The A1 notation of a range to search for a logical table of data.
		 * Values are appended after the last row of the table.
		 * @param {boolean} includeValuesInResponse Determines if the update response should include the values
		 * of the cells that were appended. By default, responses
		 * do not include the updated values.
		 * @param {Sheets_spreadsheets_values_appendInsertDataOption} insertDataOption How the input data should be inserted.
		 * @param {BatchGetValuesByDataFilterRequestDateTimeRenderOption} responseDateTimeRenderOption Determines how dates, times, and durations in the response should be
		 * rendered. This is ignored if response_value_render_option is
		 * FORMATTED_VALUE.
		 * The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
		 * @param {BatchGetValuesByDataFilterRequestValueRenderOption} responseValueRenderOption Determines how values in the response should be rendered.
		 * The default render option is ValueRenderOption.FORMATTED_VALUE.
		 * @param {BatchUpdateValuesByDataFilterRequestValueInputOption} valueInputOption How the input data should be interpreted.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_values_append(spreadsheetId: string, range: string, includeValuesInResponse: boolean, insertDataOption: Sheets_spreadsheets_values_appendInsertDataOption, responseDateTimeRenderOption: BatchGetValuesByDataFilterRequestDateTimeRenderOption, responseValueRenderOption: BatchGetValuesByDataFilterRequestValueRenderOption, valueInputOption: BatchUpdateValuesByDataFilterRequestValueInputOption, requestBody: ValueRange): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values/' + (range == null ? '' : encodeURIComponent(range)) + ':append&includeValuesInResponse=' + includeValuesInResponse + '&insertDataOption=' + insertDataOption + '&responseDateTimeRenderOption=' + responseDateTimeRenderOption + '&responseValueRenderOption=' + responseValueRenderOption + '&valueInputOption=' + valueInputOption, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clears values from a spreadsheet.
		 * The caller must specify the spreadsheet ID and range.
		 * Only values are cleared -- all other properties of the cell (such as
		 * formatting, data validation, etc..) are kept.
		 * Post v4/spreadsheets/{spreadsheetId}/values/{range}:clear
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @param {string} range The A1 notation of the values to clear.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_values_clear(spreadsheetId: string, range: string, requestBody: ClearValuesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values/' + (range == null ? '' : encodeURIComponent(range)) + ':clear', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clears one or more ranges of values from a spreadsheet.
		 * The caller must specify the spreadsheet ID and one or more ranges.
		 * Only values are cleared -- all other properties of the cell (such as
		 * formatting, data validation, etc..) are kept.
		 * Post v4/spreadsheets/{spreadsheetId}/values:batchClear
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_values_batchClear(spreadsheetId: string, requestBody: BatchClearValuesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchClear', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Clears one or more ranges of values from a spreadsheet.
		 * The caller must specify the spreadsheet ID and one or more
		 * DataFilters. Ranges matching any of the specified data
		 * filters will be cleared.  Only values are cleared -- all other properties
		 * of the cell (such as formatting, data validation, etc..) are kept.
		 * Post v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_values_batchClearByDataFilter(spreadsheetId: string, requestBody: BatchClearValuesByDataFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchClearByDataFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns one or more ranges of values from a spreadsheet.
		 * The caller must specify the spreadsheet ID and one or more ranges.
		 * Get v4/spreadsheets/{spreadsheetId}/values:batchGet
		 * @param {string} spreadsheetId The ID of the spreadsheet to retrieve data from.
		 * @param {BatchGetValuesByDataFilterRequestDateTimeRenderOption} dateTimeRenderOption How dates, times, and durations should be represented in the output.
		 * This is ignored if value_render_option is
		 * FORMATTED_VALUE.
		 * The default dateTime render option is [DateTimeRenderOption.SERIAL_NUMBER].
		 * @param {DimensionRangeDimension} majorDimension The major dimension that results should use.
		 * For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`,
		 * then requesting `range=A1:B2,majorDimension=ROWS` returns `[[1,2],[3,4]]`,
		 * whereas requesting `range=A1:B2,majorDimension=COLUMNS` returns
		 * `[[1,3],[2,4]]`.
		 * @param {Array<string>} ranges The A1 notation of the values to retrieve.
		 * @param {BatchGetValuesByDataFilterRequestValueRenderOption} valueRenderOption How values should be represented in the output.
		 * The default render option is ValueRenderOption.FORMATTED_VALUE.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_values_batchGet(spreadsheetId: string, dateTimeRenderOption: BatchGetValuesByDataFilterRequestDateTimeRenderOption, majorDimension: DimensionRangeDimension, ranges: Array<string>, valueRenderOption: BatchGetValuesByDataFilterRequestValueRenderOption): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchGet&dateTimeRenderOption=' + dateTimeRenderOption + '&majorDimension=' + majorDimension + '&' + ranges.map(z => `ranges=${encodeURIComponent(z)}`).join('&') + '&valueRenderOption=' + valueRenderOption, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns one or more ranges of values that match the specified data filters.
		 * The caller must specify the spreadsheet ID and one or more
		 * DataFilters.  Ranges that match any of the data filters in
		 * the request will be returned.
		 * Post v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter
		 * @param {string} spreadsheetId The ID of the spreadsheet to retrieve data from.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_values_batchGetByDataFilter(spreadsheetId: string, requestBody: BatchGetValuesByDataFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchGetByDataFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets values in one or more ranges of a spreadsheet.
		 * The caller must specify the spreadsheet ID,
		 * a valueInputOption, and one or more
		 * ValueRanges.
		 * Post v4/spreadsheets/{spreadsheetId}/values:batchUpdate
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_values_batchUpdate(spreadsheetId: string, requestBody: BatchUpdateValuesRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sets values in one or more ranges of a spreadsheet.
		 * The caller must specify the spreadsheet ID,
		 * a valueInputOption, and one or more
		 * DataFilterValueRanges.
		 * Post v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_values_batchUpdateByDataFilter(spreadsheetId: string, requestBody: BatchUpdateValuesByDataFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchUpdateByDataFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Applies one or more updates to the spreadsheet.
		 * Each request is validated before
		 * being applied. If any request is not valid then the entire request will
		 * fail and nothing will be applied.
		 * Some requests have replies to
		 * give you some information about how
		 * they are applied. The replies will mirror the requests.  For example,
		 * if you applied 4 updates and the 3rd one had a reply, then the
		 * response will have 2 empty replies, the actual reply, and another empty
		 * reply, in that order.
		 * Due to the collaborative nature of spreadsheets, it is not guaranteed that
		 * the spreadsheet will reflect exactly your changes after this completes,
		 * however it is guaranteed that the updates in the request will be
		 * applied together atomically. Your changes may be altered with respect to
		 * collaborator changes. If there are no collaborators, the spreadsheet
		 * should reflect your changes.
		 * Post v4/spreadsheets/{spreadsheetId}:batchUpdate
		 * @param {string} spreadsheetId The spreadsheet to apply the updates to.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_batchUpdate(spreadsheetId: string, requestBody: BatchUpdateSpreadsheetRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + ':batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns the spreadsheet at the given ID.
		 * The caller must specify the spreadsheet ID.
		 * This method differs from GetSpreadsheet in that it allows selecting
		 * which subsets of spreadsheet data to return by specifying a
		 * dataFilters parameter.
		 * Multiple DataFilters can be specified.  Specifying one or
		 * more data filters will return the portions of the spreadsheet that
		 * intersect ranges matched by any of the filters.
		 * By default, data within grids will not be returned.
		 * You can include grid data one of two ways:
		 * * Specify a field mask listing your desired fields using the `fields` URL
		 * parameter in HTTP
		 * * Set the includeGridData
		 * parameter to true.  If a field mask is set, the `includeGridData`
		 * parameter is ignored
		 * For large spreadsheets, it is recommended to retrieve only the specific
		 * fields of the spreadsheet that you want.
		 * Post v4/spreadsheets/{spreadsheetId}:getByDataFilter
		 * @param {string} spreadsheetId The spreadsheet to request.
		 * @return {void} Successful response
		 */
		Sheets_spreadsheets_getByDataFilter(spreadsheetId: string, requestBody: GetSpreadsheetByDataFilterRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + ':getByDataFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export enum Sheets_spreadsheets_values_appendInsertDataOption { OVERWRITE = 0, INSERT_ROWS = 1 }

}

