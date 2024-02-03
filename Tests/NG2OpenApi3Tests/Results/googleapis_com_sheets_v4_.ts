import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Adds a new banded range to the spreadsheet. */
	export interface AddBandingRequest {

		/** A banded (alternating colors) range in a sheet. */
		bandedRange?: BandedRange;
	}

	/** Adds a new banded range to the spreadsheet. */
	export interface AddBandingRequestFormProperties {
	}
	export function CreateAddBandingRequestFormGroup() {
		return new FormGroup<AddBandingRequestFormProperties>({
		});

	}


	/** A banded (alternating colors) range in a sheet. */
	export interface BandedRange {

		/** The ID of the banded range. */
		bandedRangeId?: number | null;

		/** Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set. */
		columnProperties?: BandingProperties;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set. */
		rowProperties?: BandingProperties;
	}

	/** A banded (alternating colors) range in a sheet. */
	export interface BandedRangeFormProperties {

		/** The ID of the banded range. */
		bandedRangeId: FormControl<number | null | undefined>,
	}
	export function CreateBandedRangeFormGroup() {
		return new FormGroup<BandedRangeFormProperties>({
			bandedRangeId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set. */
	export interface BandingProperties {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		firstBandColor?: Color;

		/** A color value. */
		firstBandColorStyle?: ColorStyle;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		footerColor?: Color;

		/** A color value. */
		footerColorStyle?: ColorStyle;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		headerColor?: Color;

		/** A color value. */
		headerColorStyle?: ColorStyle;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		secondBandColor?: Color;

		/** A color value. */
		secondBandColorStyle?: ColorStyle;
	}

	/** Properties referring a single dimension (either row or column). If both BandedRange.row_properties and BandedRange.column_properties are set, the fill colors are applied to cells according to the following rules: * header_color and footer_color take priority over band colors. * first_band_color takes priority over second_band_color. * row_properties takes priority over column_properties. For example, the first row color takes priority over the first column color, but the first column color takes priority over the second row color. Similarly, the row header takes priority over the column header in the top left cell, but the column header takes priority over the first row color if the row header is not set. */
	export interface BandingPropertiesFormProperties {
	}
	export function CreateBandingPropertiesFormGroup() {
		return new FormGroup<BandingPropertiesFormProperties>({
		});

	}


	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface Color {

		/** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
		alpha?: number | null;

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue?: number | null;

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green?: number | null;

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red?: number | null;
	}

	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface ColorFormProperties {

		/** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
		alpha: FormControl<number | null | undefined>,

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue: FormControl<number | null | undefined>,

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green: FormControl<number | null | undefined>,

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red: FormControl<number | null | undefined>,
	}
	export function CreateColorFormGroup() {
		return new FormGroup<ColorFormProperties>({
			alpha: new FormControl<number | null | undefined>(undefined),
			blue: new FormControl<number | null | undefined>(undefined),
			green: new FormControl<number | null | undefined>(undefined),
			red: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A color value. */
	export interface ColorStyle {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		rgbColor?: Color;

		/** Theme color. */
		themeColor?: ColorStyleThemeColor | null;
	}

	/** A color value. */
	export interface ColorStyleFormProperties {

		/** Theme color. */
		themeColor: FormControl<ColorStyleThemeColor | null | undefined>,
	}
	export function CreateColorStyleFormGroup() {
		return new FormGroup<ColorStyleFormProperties>({
			themeColor: new FormControl<ColorStyleThemeColor | null | undefined>(undefined),
		});

	}

	export enum ColorStyleThemeColor { THEME_COLOR_TYPE_UNSPECIFIED = 'THEME_COLOR_TYPE_UNSPECIFIED', TEXT = 'TEXT', BACKGROUND = 'BACKGROUND', ACCENT1 = 'ACCENT1', ACCENT2 = 'ACCENT2', ACCENT3 = 'ACCENT3', ACCENT4 = 'ACCENT4', ACCENT5 = 'ACCENT5', ACCENT6 = 'ACCENT6', LINK = 'LINK' }


	/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
	export interface GridRange {

		/** The end column (exclusive) of the range, or not set if unbounded. */
		endColumnIndex?: number | null;

		/** The end row (exclusive) of the range, or not set if unbounded. */
		endRowIndex?: number | null;

		/** The sheet this range is on. */
		sheetId?: number | null;

		/** The start column (inclusive) of the range, or not set if unbounded. */
		startColumnIndex?: number | null;

		/** The start row (inclusive) of the range, or not set if unbounded. */
		startRowIndex?: number | null;
	}

	/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
	export interface GridRangeFormProperties {

		/** The end column (exclusive) of the range, or not set if unbounded. */
		endColumnIndex: FormControl<number | null | undefined>,

		/** The end row (exclusive) of the range, or not set if unbounded. */
		endRowIndex: FormControl<number | null | undefined>,

		/** The sheet this range is on. */
		sheetId: FormControl<number | null | undefined>,

		/** The start column (inclusive) of the range, or not set if unbounded. */
		startColumnIndex: FormControl<number | null | undefined>,

		/** The start row (inclusive) of the range, or not set if unbounded. */
		startRowIndex: FormControl<number | null | undefined>,
	}
	export function CreateGridRangeFormGroup() {
		return new FormGroup<GridRangeFormProperties>({
			endColumnIndex: new FormControl<number | null | undefined>(undefined),
			endRowIndex: new FormControl<number | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
			startColumnIndex: new FormControl<number | null | undefined>(undefined),
			startRowIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of adding a banded range. */
	export interface AddBandingResponse {

		/** A banded (alternating colors) range in a sheet. */
		bandedRange?: BandedRange;
	}

	/** The result of adding a banded range. */
	export interface AddBandingResponseFormProperties {
	}
	export function CreateAddBandingResponseFormGroup() {
		return new FormGroup<AddBandingResponseFormProperties>({
		});

	}


	/** Adds a chart to a sheet in the spreadsheet. */
	export interface AddChartRequest {

		/** A chart embedded in a sheet. */
		chart?: EmbeddedChart;
	}

	/** Adds a chart to a sheet in the spreadsheet. */
	export interface AddChartRequestFormProperties {
	}
	export function CreateAddChartRequestFormGroup() {
		return new FormGroup<AddChartRequestFormProperties>({
		});

	}


	/** A chart embedded in a sheet. */
	export interface EmbeddedChart {

		/** A border along an embedded object. */
		border?: EmbeddedObjectBorder;

		/** The ID of the chart. */
		chartId?: number | null;

		/** The position of an embedded object such as a chart. */
		position?: EmbeddedObjectPosition;

		/** The specifications of a chart. */
		spec?: ChartSpec;
	}

	/** A chart embedded in a sheet. */
	export interface EmbeddedChartFormProperties {

		/** The ID of the chart. */
		chartId: FormControl<number | null | undefined>,
	}
	export function CreateEmbeddedChartFormGroup() {
		return new FormGroup<EmbeddedChartFormProperties>({
			chartId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A border along an embedded object. */
	export interface EmbeddedObjectBorder {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/** A color value. */
		colorStyle?: ColorStyle;
	}

	/** A border along an embedded object. */
	export interface EmbeddedObjectBorderFormProperties {
	}
	export function CreateEmbeddedObjectBorderFormGroup() {
		return new FormGroup<EmbeddedObjectBorderFormProperties>({
		});

	}


	/** The position of an embedded object such as a chart. */
	export interface EmbeddedObjectPosition {

		/** If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing. */
		newSheet?: boolean | null;

		/** The location an object is overlaid on top of a grid. */
		overlayPosition?: OverlayPosition;

		/** The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative. */
		sheetId?: number | null;
	}

	/** The position of an embedded object such as a chart. */
	export interface EmbeddedObjectPositionFormProperties {

		/** If true, the embedded object is put on a new sheet whose ID is chosen for you. Used only when writing. */
		newSheet: FormControl<boolean | null | undefined>,

		/** The sheet this is on. Set only if the embedded object is on its own sheet. Must be non-negative. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateEmbeddedObjectPositionFormGroup() {
		return new FormGroup<EmbeddedObjectPositionFormProperties>({
			newSheet: new FormControl<boolean | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The location an object is overlaid on top of a grid. */
	export interface OverlayPosition {

		/** A coordinate in a sheet. All indexes are zero-based. */
		anchorCell?: GridCoordinate;

		/** The height of the object, in pixels. Defaults to 371. */
		heightPixels?: number | null;

		/** The horizontal offset, in pixels, that the object is offset from the anchor cell. */
		offsetXPixels?: number | null;

		/** The vertical offset, in pixels, that the object is offset from the anchor cell. */
		offsetYPixels?: number | null;

		/** The width of the object, in pixels. Defaults to 600. */
		widthPixels?: number | null;
	}

	/** The location an object is overlaid on top of a grid. */
	export interface OverlayPositionFormProperties {

		/** The height of the object, in pixels. Defaults to 371. */
		heightPixels: FormControl<number | null | undefined>,

		/** The horizontal offset, in pixels, that the object is offset from the anchor cell. */
		offsetXPixels: FormControl<number | null | undefined>,

		/** The vertical offset, in pixels, that the object is offset from the anchor cell. */
		offsetYPixels: FormControl<number | null | undefined>,

		/** The width of the object, in pixels. Defaults to 600. */
		widthPixels: FormControl<number | null | undefined>,
	}
	export function CreateOverlayPositionFormGroup() {
		return new FormGroup<OverlayPositionFormProperties>({
			heightPixels: new FormControl<number | null | undefined>(undefined),
			offsetXPixels: new FormControl<number | null | undefined>(undefined),
			offsetYPixels: new FormControl<number | null | undefined>(undefined),
			widthPixels: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A coordinate in a sheet. All indexes are zero-based. */
	export interface GridCoordinate {

		/** The column index of the coordinate. */
		columnIndex?: number | null;

		/** The row index of the coordinate. */
		rowIndex?: number | null;

		/** The sheet this coordinate is on. */
		sheetId?: number | null;
	}

	/** A coordinate in a sheet. All indexes are zero-based. */
	export interface GridCoordinateFormProperties {

		/** The column index of the coordinate. */
		columnIndex: FormControl<number | null | undefined>,

		/** The row index of the coordinate. */
		rowIndex: FormControl<number | null | undefined>,

		/** The sheet this coordinate is on. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateGridCoordinateFormGroup() {
		return new FormGroup<GridCoordinateFormProperties>({
			columnIndex: new FormControl<number | null | undefined>(undefined),
			rowIndex: new FormControl<number | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specifications of a chart. */
	export interface ChartSpec {

		/** The alternative text that describes the chart. This is often used for accessibility. */
		altText?: string | null;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		backgroundColor?: Color;

		/** A color value. */
		backgroundColorStyle?: ColorStyle;

		/** The specification for a basic chart. See BasicChartType for the list of charts this supports. */
		basicChart?: BasicChartSpec;

		/** A bubble chart. */
		bubbleChart?: BubbleChartSpec;

		/** A candlestick chart. */
		candlestickChart?: CandlestickChartSpec;

		/** Properties of a data source chart. */
		dataSourceChartProperties?: DataSourceChartProperties;

		/** The filters applied to the source data of the chart. Only supported for data source charts. */
		filterSpecs?: Array<FilterSpec>;

		/** The name of the font to use by default for all chart text (e.g. title, axis labels, legend). If a font is specified for a specific part of the chart it will override this font name. */
		fontName?: string | null;

		/** Determines how the charts will use hidden rows or columns. */
		hiddenDimensionStrategy?: ChartSpecHiddenDimensionStrategy | null;

		/** A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly. */
		histogramChart?: HistogramChartSpec;

		/** True to make a chart fill the entire space in which it's rendered with minimum padding. False to use the default padding. (Not applicable to Geo and Org charts.) */
		maximized?: boolean | null;

		/** An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales". */
		orgChart?: OrgChartSpec;

		/** A pie chart. */
		pieChart?: PieChartSpec;

		/** A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time. */
		scorecardChart?: ScorecardChartSpec;

		/** The order to sort the chart data by. Only a single sort spec is supported. Only supported for data source charts. */
		sortSpecs?: Array<SortSpec>;

		/** The subtitle of the chart. */
		subtitle?: string | null;

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		subtitleTextFormat?: TextFormat;

		/** Position settings for text. */
		subtitleTextPosition?: TextPosition;

		/** The title of the chart. */
		title?: string | null;

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		titleTextFormat?: TextFormat;

		/** Position settings for text. */
		titleTextPosition?: TextPosition;

		/** A Treemap chart. */
		treemapChart?: TreemapChartSpec;

		/** A waterfall chart. */
		waterfallChart?: WaterfallChartSpec;
	}

	/** The specifications of a chart. */
	export interface ChartSpecFormProperties {

		/** The alternative text that describes the chart. This is often used for accessibility. */
		altText: FormControl<string | null | undefined>,

		/** The name of the font to use by default for all chart text (e.g. title, axis labels, legend). If a font is specified for a specific part of the chart it will override this font name. */
		fontName: FormControl<string | null | undefined>,

		/** Determines how the charts will use hidden rows or columns. */
		hiddenDimensionStrategy: FormControl<ChartSpecHiddenDimensionStrategy | null | undefined>,

		/** True to make a chart fill the entire space in which it's rendered with minimum padding. False to use the default padding. (Not applicable to Geo and Org charts.) */
		maximized: FormControl<boolean | null | undefined>,

		/** The subtitle of the chart. */
		subtitle: FormControl<string | null | undefined>,

		/** The title of the chart. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateChartSpecFormGroup() {
		return new FormGroup<ChartSpecFormProperties>({
			altText: new FormControl<string | null | undefined>(undefined),
			fontName: new FormControl<string | null | undefined>(undefined),
			hiddenDimensionStrategy: new FormControl<ChartSpecHiddenDimensionStrategy | null | undefined>(undefined),
			maximized: new FormControl<boolean | null | undefined>(undefined),
			subtitle: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The specification for a basic chart. See BasicChartType for the list of charts this supports. */
	export interface BasicChartSpec {

		/** The axis on the chart. */
		axis?: Array<BasicChartAxis>;

		/** The type of the chart. */
		chartType?: BasicChartSpecChartType | null;

		/** The behavior of tooltips and data highlighting when hovering on data and chart area. */
		compareMode?: BasicChartSpecCompareMode | null;

		/** The domain of data this is charting. Only a single domain is supported. */
		domains?: Array<BasicChartDomain>;

		/** The number of rows or columns in the data that are "headers". If not set, Google Sheets will guess how many rows are headers based on the data. (Note that BasicChartAxis.title may override the axis title inferred from the header values.) */
		headerCount?: number | null;

		/** If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts. */
		interpolateNulls?: boolean | null;

		/** The position of the chart legend. */
		legendPosition?: BasicChartSpecLegendPosition | null;

		/** Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts. */
		lineSmoothing?: boolean | null;

		/** The data this chart is visualizing. */
		series?: Array<BasicChartSeries>;

		/** The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts. */
		stackedType?: BasicChartSpecStackedType | null;

		/** True to make the chart 3D. Applies to Bar and Column charts. */
		threeDimensional?: boolean | null;

		/** Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph. */
		totalDataLabel?: DataLabel;
	}

	/** The specification for a basic chart. See BasicChartType for the list of charts this supports. */
	export interface BasicChartSpecFormProperties {

		/** The type of the chart. */
		chartType: FormControl<BasicChartSpecChartType | null | undefined>,

		/** The behavior of tooltips and data highlighting when hovering on data and chart area. */
		compareMode: FormControl<BasicChartSpecCompareMode | null | undefined>,

		/** The number of rows or columns in the data that are "headers". If not set, Google Sheets will guess how many rows are headers based on the data. (Note that BasicChartAxis.title may override the axis title inferred from the header values.) */
		headerCount: FormControl<number | null | undefined>,

		/** If some values in a series are missing, gaps may appear in the chart (e.g, segments of lines in a line chart will be missing). To eliminate these gaps set this to true. Applies to Line, Area, and Combo charts. */
		interpolateNulls: FormControl<boolean | null | undefined>,

		/** The position of the chart legend. */
		legendPosition: FormControl<BasicChartSpecLegendPosition | null | undefined>,

		/** Gets whether all lines should be rendered smooth or straight by default. Applies to Line charts. */
		lineSmoothing: FormControl<boolean | null | undefined>,

		/** The stacked type for charts that support vertical stacking. Applies to Area, Bar, Column, Combo, and Stepped Area charts. */
		stackedType: FormControl<BasicChartSpecStackedType | null | undefined>,

		/** True to make the chart 3D. Applies to Bar and Column charts. */
		threeDimensional: FormControl<boolean | null | undefined>,
	}
	export function CreateBasicChartSpecFormGroup() {
		return new FormGroup<BasicChartSpecFormProperties>({
			chartType: new FormControl<BasicChartSpecChartType | null | undefined>(undefined),
			compareMode: new FormControl<BasicChartSpecCompareMode | null | undefined>(undefined),
			headerCount: new FormControl<number | null | undefined>(undefined),
			interpolateNulls: new FormControl<boolean | null | undefined>(undefined),
			legendPosition: new FormControl<BasicChartSpecLegendPosition | null | undefined>(undefined),
			lineSmoothing: new FormControl<boolean | null | undefined>(undefined),
			stackedType: new FormControl<BasicChartSpecStackedType | null | undefined>(undefined),
			threeDimensional: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An axis of the chart. A chart may not have more than one axis per axis position. */
	export interface BasicChartAxis {

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		format?: TextFormat;

		/** The position of this axis. */
		position?: BasicChartAxisPosition | null;

		/** The title of this axis. If set, this overrides any title inferred from headers of the data. */
		title?: string | null;

		/** Position settings for text. */
		titleTextPosition?: TextPosition;

		/** The options that define a "view window" for a chart (such as the visible values in an axis). */
		viewWindowOptions?: ChartAxisViewWindowOptions;
	}

	/** An axis of the chart. A chart may not have more than one axis per axis position. */
	export interface BasicChartAxisFormProperties {

		/** The position of this axis. */
		position: FormControl<BasicChartAxisPosition | null | undefined>,

		/** The title of this axis. If set, this overrides any title inferred from headers of the data. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateBasicChartAxisFormGroup() {
		return new FormGroup<BasicChartAxisFormProperties>({
			position: new FormControl<BasicChartAxisPosition | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
	export interface TextFormat {

		/** True if the text is bold. */
		bold?: boolean | null;

		/** The font family. */
		fontFamily?: string | null;

		/** The size of the font. */
		fontSize?: number | null;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		foregroundColor?: Color;

		/** A color value. */
		foregroundColorStyle?: ColorStyle;

		/** True if the text is italicized. */
		italic?: boolean | null;

		/** An external or local reference. */
		link?: Link;

		/** True if the text has a strikethrough. */
		strikethrough?: boolean | null;

		/** True if the text is underlined. */
		underline?: boolean | null;
	}

	/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
	export interface TextFormatFormProperties {

		/** True if the text is bold. */
		bold: FormControl<boolean | null | undefined>,

		/** The font family. */
		fontFamily: FormControl<string | null | undefined>,

		/** The size of the font. */
		fontSize: FormControl<number | null | undefined>,

		/** True if the text is italicized. */
		italic: FormControl<boolean | null | undefined>,

		/** True if the text has a strikethrough. */
		strikethrough: FormControl<boolean | null | undefined>,

		/** True if the text is underlined. */
		underline: FormControl<boolean | null | undefined>,
	}
	export function CreateTextFormatFormGroup() {
		return new FormGroup<TextFormatFormProperties>({
			bold: new FormControl<boolean | null | undefined>(undefined),
			fontFamily: new FormControl<string | null | undefined>(undefined),
			fontSize: new FormControl<number | null | undefined>(undefined),
			italic: new FormControl<boolean | null | undefined>(undefined),
			strikethrough: new FormControl<boolean | null | undefined>(undefined),
			underline: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** An external or local reference. */
	export interface Link {

		/** The link identifier. */
		uri?: string | null;
	}

	/** An external or local reference. */
	export interface LinkFormProperties {

		/** The link identifier. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BasicChartAxisPosition { BASIC_CHART_AXIS_POSITION_UNSPECIFIED = 'BASIC_CHART_AXIS_POSITION_UNSPECIFIED', BOTTOM_AXIS = 'BOTTOM_AXIS', LEFT_AXIS = 'LEFT_AXIS', RIGHT_AXIS = 'RIGHT_AXIS' }


	/** Position settings for text. */
	export interface TextPosition {

		/** Horizontal alignment setting for the piece of text. */
		horizontalAlignment?: TextPositionHorizontalAlignment | null;
	}

	/** Position settings for text. */
	export interface TextPositionFormProperties {

		/** Horizontal alignment setting for the piece of text. */
		horizontalAlignment: FormControl<TextPositionHorizontalAlignment | null | undefined>,
	}
	export function CreateTextPositionFormGroup() {
		return new FormGroup<TextPositionFormProperties>({
			horizontalAlignment: new FormControl<TextPositionHorizontalAlignment | null | undefined>(undefined),
		});

	}

	export enum TextPositionHorizontalAlignment { HORIZONTAL_ALIGN_UNSPECIFIED = 'HORIZONTAL_ALIGN_UNSPECIFIED', LEFT = 'LEFT', CENTER = 'CENTER', RIGHT = 'RIGHT' }


	/** The options that define a "view window" for a chart (such as the visible values in an axis). */
	export interface ChartAxisViewWindowOptions {

		/** The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that looks good for the data. */
		viewWindowMax?: number | null;

		/** The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that looks good for the data. */
		viewWindowMin?: number | null;

		/** The view window's mode. */
		viewWindowMode?: ChartAxisViewWindowOptionsViewWindowMode | null;
	}

	/** The options that define a "view window" for a chart (such as the visible values in an axis). */
	export interface ChartAxisViewWindowOptionsFormProperties {

		/** The maximum numeric value to be shown in this view window. If unset, will automatically determine a maximum value that looks good for the data. */
		viewWindowMax: FormControl<number | null | undefined>,

		/** The minimum numeric value to be shown in this view window. If unset, will automatically determine a minimum value that looks good for the data. */
		viewWindowMin: FormControl<number | null | undefined>,

		/** The view window's mode. */
		viewWindowMode: FormControl<ChartAxisViewWindowOptionsViewWindowMode | null | undefined>,
	}
	export function CreateChartAxisViewWindowOptionsFormGroup() {
		return new FormGroup<ChartAxisViewWindowOptionsFormProperties>({
			viewWindowMax: new FormControl<number | null | undefined>(undefined),
			viewWindowMin: new FormControl<number | null | undefined>(undefined),
			viewWindowMode: new FormControl<ChartAxisViewWindowOptionsViewWindowMode | null | undefined>(undefined),
		});

	}

	export enum ChartAxisViewWindowOptionsViewWindowMode { DEFAULT_VIEW_WINDOW_MODE = 'DEFAULT_VIEW_WINDOW_MODE', VIEW_WINDOW_MODE_UNSUPPORTED = 'VIEW_WINDOW_MODE_UNSUPPORTED', EXPLICIT = 'EXPLICIT', PRETTY = 'PRETTY' }

	export enum BasicChartSpecChartType { BASIC_CHART_TYPE_UNSPECIFIED = 'BASIC_CHART_TYPE_UNSPECIFIED', BAR = 'BAR', LINE = 'LINE', AREA = 'AREA', COLUMN = 'COLUMN', SCATTER = 'SCATTER', COMBO = 'COMBO', STEPPED_AREA = 'STEPPED_AREA' }

	export enum BasicChartSpecCompareMode { BASIC_CHART_COMPARE_MODE_UNSPECIFIED = 'BASIC_CHART_COMPARE_MODE_UNSPECIFIED', DATUM = 'DATUM', CATEGORY = 'CATEGORY' }


	/** The domain of a chart. For example, if charting stock prices over time, this would be the date. */
	export interface BasicChartDomain {

		/** The data included in a domain or series. */
		domain?: ChartData;

		/** True to reverse the order of the domain values (horizontal axis). */
		reversed?: boolean | null;
	}

	/** The domain of a chart. For example, if charting stock prices over time, this would be the date. */
	export interface BasicChartDomainFormProperties {

		/** True to reverse the order of the domain values (horizontal axis). */
		reversed: FormControl<boolean | null | undefined>,
	}
	export function CreateBasicChartDomainFormGroup() {
		return new FormGroup<BasicChartDomainFormProperties>({
			reversed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The data included in a domain or series. */
	export interface ChartData {

		/** The aggregation type for the series of a data source chart. Only supported for data source charts. */
		aggregateType?: ChartDataAggregateType | null;

		/** An unique identifier that references a data source column. */
		columnReference?: DataSourceColumnReference;

		/** An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type. */
		groupRule?: ChartGroupRule;

		/** Source ranges for a chart. */
		sourceRange?: ChartSourceRange;
	}

	/** The data included in a domain or series. */
	export interface ChartDataFormProperties {

		/** The aggregation type for the series of a data source chart. Only supported for data source charts. */
		aggregateType: FormControl<ChartDataAggregateType | null | undefined>,
	}
	export function CreateChartDataFormGroup() {
		return new FormGroup<ChartDataFormProperties>({
			aggregateType: new FormControl<ChartDataAggregateType | null | undefined>(undefined),
		});

	}

	export enum ChartDataAggregateType { CHART_AGGREGATE_TYPE_UNSPECIFIED = 'CHART_AGGREGATE_TYPE_UNSPECIFIED', AVERAGE = 'AVERAGE', COUNT = 'COUNT', MAX = 'MAX', MEDIAN = 'MEDIAN', MIN = 'MIN', SUM = 'SUM' }


	/** An unique identifier that references a data source column. */
	export interface DataSourceColumnReference {

		/** The display name of the column. It should be unique within a data source. */
		name?: string | null;
	}

	/** An unique identifier that references a data source column. */
	export interface DataSourceColumnReferenceFormProperties {

		/** The display name of the column. It should be unique within a data source. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceColumnReferenceFormGroup() {
		return new FormGroup<DataSourceColumnReferenceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type. */
	export interface ChartGroupRule {

		/** Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. */
		dateTimeRule?: ChartDateTimeRule;

		/** Allows you to organize numeric values in a source data column into buckets of constant size. */
		histogramRule?: ChartHistogramRule;
	}

	/** An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type. */
	export interface ChartGroupRuleFormProperties {
	}
	export function CreateChartGroupRuleFormGroup() {
		return new FormGroup<ChartGroupRuleFormProperties>({
		});

	}


	/** Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. */
	export interface ChartDateTimeRule {

		/** The type of date-time grouping to apply. */
		type?: ChartDateTimeRuleType | null;
	}

	/** Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. */
	export interface ChartDateTimeRuleFormProperties {

		/** The type of date-time grouping to apply. */
		type: FormControl<ChartDateTimeRuleType | null | undefined>,
	}
	export function CreateChartDateTimeRuleFormGroup() {
		return new FormGroup<ChartDateTimeRuleFormProperties>({
			type: new FormControl<ChartDateTimeRuleType | null | undefined>(undefined),
		});

	}

	export enum ChartDateTimeRuleType { CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED = 'CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED', SECOND = 'SECOND', MINUTE = 'MINUTE', HOUR = 'HOUR', HOUR_MINUTE = 'HOUR_MINUTE', HOUR_MINUTE_AMPM = 'HOUR_MINUTE_AMPM', DAY_OF_WEEK = 'DAY_OF_WEEK', DAY_OF_YEAR = 'DAY_OF_YEAR', DAY_OF_MONTH = 'DAY_OF_MONTH', DAY_MONTH = 'DAY_MONTH', MONTH = 'MONTH', QUARTER = 'QUARTER', YEAR = 'YEAR', YEAR_MONTH = 'YEAR_MONTH', YEAR_QUARTER = 'YEAR_QUARTER', YEAR_MONTH_DAY = 'YEAR_MONTH_DAY' }


	/** Allows you to organize numeric values in a source data column into buckets of constant size. */
	export interface ChartHistogramRule {

		/** The size of the buckets that are created. Must be positive. */
		intervalSize?: number | null;

		/** The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single bucket. If omitted, it is determined by the maximum item value. */
		maxValue?: number | null;

		/** The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a single bucket. If omitted, it is determined by the minimum item value. */
		minValue?: number | null;
	}

	/** Allows you to organize numeric values in a source data column into buckets of constant size. */
	export interface ChartHistogramRuleFormProperties {

		/** The size of the buckets that are created. Must be positive. */
		intervalSize: FormControl<number | null | undefined>,

		/** The maximum value at which items are placed into buckets. Values greater than the maximum are grouped into a single bucket. If omitted, it is determined by the maximum item value. */
		maxValue: FormControl<number | null | undefined>,

		/** The minimum value at which items are placed into buckets. Values that are less than the minimum are grouped into a single bucket. If omitted, it is determined by the minimum item value. */
		minValue: FormControl<number | null | undefined>,
	}
	export function CreateChartHistogramRuleFormGroup() {
		return new FormGroup<ChartHistogramRuleFormProperties>({
			intervalSize: new FormControl<number | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Source ranges for a chart. */
	export interface ChartSourceRange {

		/** The ranges of data for a series or domain. Exactly one dimension must have a length of 1, and all sources in the list must have the same dimension with length 1. The domain (if it exists) & all series must have the same number of source ranges. If using more than one source range, then the source range at a given offset must be in order and contiguous across the domain and series. For example, these are valid configurations: domain sources: A1:A5 series1 sources: B1:B5 series2 sources: D6:D10 domain sources: A1:A5, C10:C12 series1 sources: B1:B5, D10:D12 series2 sources: C1:C5, E10:E12 */
		sources?: Array<GridRange>;
	}

	/** Source ranges for a chart. */
	export interface ChartSourceRangeFormProperties {
	}
	export function CreateChartSourceRangeFormGroup() {
		return new FormGroup<ChartSourceRangeFormProperties>({
		});

	}

	export enum BasicChartSpecLegendPosition { BASIC_CHART_LEGEND_POSITION_UNSPECIFIED = 'BASIC_CHART_LEGEND_POSITION_UNSPECIFIED', BOTTOM_LEGEND = 'BOTTOM_LEGEND', LEFT_LEGEND = 'LEFT_LEGEND', RIGHT_LEGEND = 'RIGHT_LEGEND', TOP_LEGEND = 'TOP_LEGEND', NO_LEGEND = 'NO_LEGEND' }


	/** A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price". */
	export interface BasicChartSeries {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/** A color value. */
		colorStyle?: ColorStyle;

		/** Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph. */
		dataLabel?: DataLabel;

		/** Properties that describe the style of a line. */
		lineStyle?: LineStyle;

		/** The style of a point on the chart. */
		pointStyle?: PointStyle;

		/** The data included in a domain or series. */
		series?: ChartData;

		/** Style override settings for series data points. */
		styleOverrides?: Array<BasicSeriesDataPointStyleOverride>;

		/** The minor axis that will specify the range of values for this series. For example, if charting stocks over time, the "Volume" series may want to be pinned to the right with the prices pinned to the left, because the scale of trading volume is different than the scale of prices. It is an error to specify an axis that isn't a valid minor axis for the chart's type. */
		targetAxis?: BasicChartAxisPosition | null;

		/** The type of this series. Valid only if the chartType is COMBO. Different types will change the way the series is visualized. Only LINE, AREA, and COLUMN are supported. */
		type?: BasicChartSpecChartType | null;
	}

	/** A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price". */
	export interface BasicChartSeriesFormProperties {

		/** The minor axis that will specify the range of values for this series. For example, if charting stocks over time, the "Volume" series may want to be pinned to the right with the prices pinned to the left, because the scale of trading volume is different than the scale of prices. It is an error to specify an axis that isn't a valid minor axis for the chart's type. */
		targetAxis: FormControl<BasicChartAxisPosition | null | undefined>,

		/** The type of this series. Valid only if the chartType is COMBO. Different types will change the way the series is visualized. Only LINE, AREA, and COLUMN are supported. */
		type: FormControl<BasicChartSpecChartType | null | undefined>,
	}
	export function CreateBasicChartSeriesFormGroup() {
		return new FormGroup<BasicChartSeriesFormProperties>({
			targetAxis: new FormControl<BasicChartAxisPosition | null | undefined>(undefined),
			type: new FormControl<BasicChartSpecChartType | null | undefined>(undefined),
		});

	}


	/** Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph. */
	export interface DataLabel {

		/** The data included in a domain or series. */
		customLabelData?: ChartData;

		/** The placement of the data label relative to the labeled data. */
		placement?: DataLabelPlacement | null;

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		textFormat?: TextFormat;

		/** The type of the data label. */
		type?: DataLabelType | null;
	}

	/** Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph. */
	export interface DataLabelFormProperties {

		/** The placement of the data label relative to the labeled data. */
		placement: FormControl<DataLabelPlacement | null | undefined>,

		/** The type of the data label. */
		type: FormControl<DataLabelType | null | undefined>,
	}
	export function CreateDataLabelFormGroup() {
		return new FormGroup<DataLabelFormProperties>({
			placement: new FormControl<DataLabelPlacement | null | undefined>(undefined),
			type: new FormControl<DataLabelType | null | undefined>(undefined),
		});

	}

	export enum DataLabelPlacement { DATA_LABEL_PLACEMENT_UNSPECIFIED = 'DATA_LABEL_PLACEMENT_UNSPECIFIED', CENTER = 'CENTER', LEFT = 'LEFT', RIGHT = 'RIGHT', ABOVE = 'ABOVE', BELOW = 'BELOW', INSIDE_END = 'INSIDE_END', INSIDE_BASE = 'INSIDE_BASE', OUTSIDE_END = 'OUTSIDE_END' }

	export enum DataLabelType { DATA_LABEL_TYPE_UNSPECIFIED = 'DATA_LABEL_TYPE_UNSPECIFIED', NONE = 'NONE', DATA = 'DATA', CUSTOM = 'CUSTOM' }


	/** Properties that describe the style of a line. */
	export interface LineStyle {

		/** The dash type of the line. */
		type?: LineStyleType | null;

		/** The thickness of the line, in px. */
		width?: number | null;
	}

	/** Properties that describe the style of a line. */
	export interface LineStyleFormProperties {

		/** The dash type of the line. */
		type: FormControl<LineStyleType | null | undefined>,

		/** The thickness of the line, in px. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateLineStyleFormGroup() {
		return new FormGroup<LineStyleFormProperties>({
			type: new FormControl<LineStyleType | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LineStyleType { LINE_DASH_TYPE_UNSPECIFIED = 'LINE_DASH_TYPE_UNSPECIFIED', INVISIBLE = 'INVISIBLE', CUSTOM = 'CUSTOM', SOLID = 'SOLID', DOTTED = 'DOTTED', MEDIUM_DASHED = 'MEDIUM_DASHED', MEDIUM_DASHED_DOTTED = 'MEDIUM_DASHED_DOTTED', LONG_DASHED = 'LONG_DASHED', LONG_DASHED_DOTTED = 'LONG_DASHED_DOTTED' }


	/** The style of a point on the chart. */
	export interface PointStyle {

		/** The point shape. If empty or unspecified, a default shape is used. */
		shape?: PointStyleShape | null;

		/** The point size. If empty, a default size is used. */
		size?: number | null;
	}

	/** The style of a point on the chart. */
	export interface PointStyleFormProperties {

		/** The point shape. If empty or unspecified, a default shape is used. */
		shape: FormControl<PointStyleShape | null | undefined>,

		/** The point size. If empty, a default size is used. */
		size: FormControl<number | null | undefined>,
	}
	export function CreatePointStyleFormGroup() {
		return new FormGroup<PointStyleFormProperties>({
			shape: new FormControl<PointStyleShape | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PointStyleShape { POINT_SHAPE_UNSPECIFIED = 'POINT_SHAPE_UNSPECIFIED', CIRCLE = 'CIRCLE', DIAMOND = 'DIAMOND', HEXAGON = 'HEXAGON', PENTAGON = 'PENTAGON', SQUARE = 'SQUARE', STAR = 'STAR', TRIANGLE = 'TRIANGLE', X_MARK = 'X_MARK' }


	/** Style override settings for a single series data point. */
	export interface BasicSeriesDataPointStyleOverride {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/** A color value. */
		colorStyle?: ColorStyle;

		/** The zero-based index of the series data point. */
		index?: number | null;

		/** The style of a point on the chart. */
		pointStyle?: PointStyle;
	}

	/** Style override settings for a single series data point. */
	export interface BasicSeriesDataPointStyleOverrideFormProperties {

		/** The zero-based index of the series data point. */
		index: FormControl<number | null | undefined>,
	}
	export function CreateBasicSeriesDataPointStyleOverrideFormGroup() {
		return new FormGroup<BasicSeriesDataPointStyleOverrideFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BasicChartSpecStackedType { BASIC_CHART_STACKED_TYPE_UNSPECIFIED = 'BASIC_CHART_STACKED_TYPE_UNSPECIFIED', NOT_STACKED = 'NOT_STACKED', STACKED = 'STACKED', PERCENT_STACKED = 'PERCENT_STACKED' }


	/** A bubble chart. */
	export interface BubbleChartSpec {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		bubbleBorderColor?: Color;

		/** A color value. */
		bubbleBorderColorStyle?: ColorStyle;

		/** The data included in a domain or series. */
		bubbleLabels?: ChartData;

		/** The max radius size of the bubbles, in pixels. If specified, the field must be a positive value. */
		bubbleMaxRadiusSize?: number | null;

		/** The minimum radius size of the bubbles, in pixels. If specific, the field must be a positive value. */
		bubbleMinRadiusSize?: number | null;

		/** The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and 1 is fully opaque. */
		bubbleOpacity?: number | null;

		/** The data included in a domain or series. */
		bubbleSizes?: ChartData;

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		bubbleTextStyle?: TextFormat;

		/** The data included in a domain or series. */
		domain?: ChartData;

		/** The data included in a domain or series. */
		groupIds?: ChartData;

		/** Where the legend of the chart should be drawn. */
		legendPosition?: BubbleChartSpecLegendPosition | null;

		/** The data included in a domain or series. */
		series?: ChartData;
	}

	/** A bubble chart. */
	export interface BubbleChartSpecFormProperties {

		/** The max radius size of the bubbles, in pixels. If specified, the field must be a positive value. */
		bubbleMaxRadiusSize: FormControl<number | null | undefined>,

		/** The minimum radius size of the bubbles, in pixels. If specific, the field must be a positive value. */
		bubbleMinRadiusSize: FormControl<number | null | undefined>,

		/** The opacity of the bubbles between 0 and 1.0. 0 is fully transparent and 1 is fully opaque. */
		bubbleOpacity: FormControl<number | null | undefined>,

		/** Where the legend of the chart should be drawn. */
		legendPosition: FormControl<BubbleChartSpecLegendPosition | null | undefined>,
	}
	export function CreateBubbleChartSpecFormGroup() {
		return new FormGroup<BubbleChartSpecFormProperties>({
			bubbleMaxRadiusSize: new FormControl<number | null | undefined>(undefined),
			bubbleMinRadiusSize: new FormControl<number | null | undefined>(undefined),
			bubbleOpacity: new FormControl<number | null | undefined>(undefined),
			legendPosition: new FormControl<BubbleChartSpecLegendPosition | null | undefined>(undefined),
		});

	}

	export enum BubbleChartSpecLegendPosition { BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED = 'BUBBLE_CHART_LEGEND_POSITION_UNSPECIFIED', BOTTOM_LEGEND = 'BOTTOM_LEGEND', LEFT_LEGEND = 'LEFT_LEGEND', RIGHT_LEGEND = 'RIGHT_LEGEND', TOP_LEGEND = 'TOP_LEGEND', NO_LEGEND = 'NO_LEGEND', INSIDE_LEGEND = 'INSIDE_LEGEND' }


	/** A candlestick chart. */
	export interface CandlestickChartSpec {

		/** The Candlestick chart data. Only one CandlestickData is supported. */
		data?: Array<CandlestickData>;

		/** The domain of a CandlestickChart. */
		domain?: CandlestickDomain;
	}

	/** A candlestick chart. */
	export interface CandlestickChartSpecFormProperties {
	}
	export function CreateCandlestickChartSpecFormGroup() {
		return new FormGroup<CandlestickChartSpecFormProperties>({
		});

	}


	/** The Candlestick chart data, each containing the low, open, close, and high values for a series. */
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

	/** The Candlestick chart data, each containing the low, open, close, and high values for a series. */
	export interface CandlestickDataFormProperties {
	}
	export function CreateCandlestickDataFormGroup() {
		return new FormGroup<CandlestickDataFormProperties>({
		});

	}


	/** The series of a CandlestickData. */
	export interface CandlestickSeries {

		/** The data included in a domain or series. */
		data?: ChartData;
	}

	/** The series of a CandlestickData. */
	export interface CandlestickSeriesFormProperties {
	}
	export function CreateCandlestickSeriesFormGroup() {
		return new FormGroup<CandlestickSeriesFormProperties>({
		});

	}


	/** The domain of a CandlestickChart. */
	export interface CandlestickDomain {

		/** The data included in a domain or series. */
		data?: ChartData;

		/** True to reverse the order of the domain values (horizontal axis). */
		reversed?: boolean | null;
	}

	/** The domain of a CandlestickChart. */
	export interface CandlestickDomainFormProperties {

		/** True to reverse the order of the domain values (horizontal axis). */
		reversed: FormControl<boolean | null | undefined>,
	}
	export function CreateCandlestickDomainFormGroup() {
		return new FormGroup<CandlestickDomainFormProperties>({
			reversed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Properties of a data source chart. */
	export interface DataSourceChartProperties {

		/** The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
		dataExecutionStatus?: DataExecutionStatus;

		/** ID of the data source that the chart is associated with. */
		dataSourceId?: string | null;
	}

	/** Properties of a data source chart. */
	export interface DataSourceChartPropertiesFormProperties {

		/** ID of the data source that the chart is associated with. */
		dataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceChartPropertiesFormGroup() {
		return new FormGroup<DataSourceChartPropertiesFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
	export interface DataExecutionStatus {

		/** The error code. */
		errorCode?: DataExecutionStatusErrorCode | null;

		/** The error message, which may be empty. */
		errorMessage?: string | null;

		/** Gets the time the data last successfully refreshed. */
		lastRefreshTime?: string | null;

		/** The state of the data execution. */
		state?: DataExecutionStatusState | null;
	}

	/** The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
	export interface DataExecutionStatusFormProperties {

		/** The error code. */
		errorCode: FormControl<DataExecutionStatusErrorCode | null | undefined>,

		/** The error message, which may be empty. */
		errorMessage: FormControl<string | null | undefined>,

		/** Gets the time the data last successfully refreshed. */
		lastRefreshTime: FormControl<string | null | undefined>,

		/** The state of the data execution. */
		state: FormControl<DataExecutionStatusState | null | undefined>,
	}
	export function CreateDataExecutionStatusFormGroup() {
		return new FormGroup<DataExecutionStatusFormProperties>({
			errorCode: new FormControl<DataExecutionStatusErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			lastRefreshTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<DataExecutionStatusState | null | undefined>(undefined),
		});

	}

	export enum DataExecutionStatusErrorCode { DATA_EXECUTION_ERROR_CODE_UNSPECIFIED = 'DATA_EXECUTION_ERROR_CODE_UNSPECIFIED', TIMED_OUT = 'TIMED_OUT', TOO_MANY_ROWS = 'TOO_MANY_ROWS', TOO_MANY_COLUMNS = 'TOO_MANY_COLUMNS', TOO_MANY_CELLS = 'TOO_MANY_CELLS', ENGINE = 'ENGINE', PARAMETER_INVALID = 'PARAMETER_INVALID', UNSUPPORTED_DATA_TYPE = 'UNSUPPORTED_DATA_TYPE', DUPLICATE_COLUMN_NAMES = 'DUPLICATE_COLUMN_NAMES', INTERRUPTED = 'INTERRUPTED', CONCURRENT_QUERY = 'CONCURRENT_QUERY', OTHER = 'OTHER', TOO_MANY_CHARS_PER_CELL = 'TOO_MANY_CHARS_PER_CELL', DATA_NOT_FOUND = 'DATA_NOT_FOUND', PERMISSION_DENIED = 'PERMISSION_DENIED', MISSING_COLUMN_ALIAS = 'MISSING_COLUMN_ALIAS', OBJECT_NOT_FOUND = 'OBJECT_NOT_FOUND', OBJECT_IN_ERROR_STATE = 'OBJECT_IN_ERROR_STATE', OBJECT_SPEC_INVALID = 'OBJECT_SPEC_INVALID' }

	export enum DataExecutionStatusState { DATA_EXECUTION_STATE_UNSPECIFIED = 'DATA_EXECUTION_STATE_UNSPECIFIED', NOT_STARTED = 'NOT_STARTED', RUNNING = 'RUNNING', SUCCEEDED = 'SUCCEEDED', FAILED = 'FAILED' }


	/** The filter criteria associated with a specific column. */
	export interface FilterSpec {

		/** The zero-based column index. */
		columnIndex?: number | null;

		/** An unique identifier that references a data source column. */
		dataSourceColumnReference?: DataSourceColumnReference;

		/** Criteria for showing/hiding rows in a filter or filter view. */
		filterCriteria?: FilterCriteria;
	}

	/** The filter criteria associated with a specific column. */
	export interface FilterSpecFormProperties {

		/** The zero-based column index. */
		columnIndex: FormControl<number | null | undefined>,
	}
	export function CreateFilterSpecFormGroup() {
		return new FormGroup<FilterSpecFormProperties>({
			columnIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Criteria for showing/hiding rows in a filter or filter view. */
	export interface FilterCriteria {

		/** A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters. */
		condition?: BooleanCondition;

		/** Values that should be hidden. */
		hiddenValues?: Array<string>;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		visibleBackgroundColor?: Color;

		/** A color value. */
		visibleBackgroundColorStyle?: ColorStyle;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		visibleForegroundColor?: Color;

		/** A color value. */
		visibleForegroundColorStyle?: ColorStyle;
	}

	/** Criteria for showing/hiding rows in a filter or filter view. */
	export interface FilterCriteriaFormProperties {
	}
	export function CreateFilterCriteriaFormGroup() {
		return new FormGroup<FilterCriteriaFormProperties>({
		});

	}


	/** A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters. */
	export interface BooleanCondition {

		/** The type of condition. */
		type?: BooleanConditionType | null;

		/** The values of the condition. The number of supported values depends on the condition type. Some support zero values, others one or two values, and ConditionType.ONE_OF_LIST supports an arbitrary number of values. */
		values?: Array<ConditionValue>;
	}

	/** A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters. */
	export interface BooleanConditionFormProperties {

		/** The type of condition. */
		type: FormControl<BooleanConditionType | null | undefined>,
	}
	export function CreateBooleanConditionFormGroup() {
		return new FormGroup<BooleanConditionFormProperties>({
			type: new FormControl<BooleanConditionType | null | undefined>(undefined),
		});

	}

	export enum BooleanConditionType { CONDITION_TYPE_UNSPECIFIED = 'CONDITION_TYPE_UNSPECIFIED', NUMBER_GREATER = 'NUMBER_GREATER', NUMBER_GREATER_THAN_EQ = 'NUMBER_GREATER_THAN_EQ', NUMBER_LESS = 'NUMBER_LESS', NUMBER_LESS_THAN_EQ = 'NUMBER_LESS_THAN_EQ', NUMBER_EQ = 'NUMBER_EQ', NUMBER_NOT_EQ = 'NUMBER_NOT_EQ', NUMBER_BETWEEN = 'NUMBER_BETWEEN', NUMBER_NOT_BETWEEN = 'NUMBER_NOT_BETWEEN', TEXT_CONTAINS = 'TEXT_CONTAINS', TEXT_NOT_CONTAINS = 'TEXT_NOT_CONTAINS', TEXT_STARTS_WITH = 'TEXT_STARTS_WITH', TEXT_ENDS_WITH = 'TEXT_ENDS_WITH', TEXT_EQ = 'TEXT_EQ', TEXT_IS_EMAIL = 'TEXT_IS_EMAIL', TEXT_IS_URL = 'TEXT_IS_URL', DATE_EQ = 'DATE_EQ', DATE_BEFORE = 'DATE_BEFORE', DATE_AFTER = 'DATE_AFTER', DATE_ON_OR_BEFORE = 'DATE_ON_OR_BEFORE', DATE_ON_OR_AFTER = 'DATE_ON_OR_AFTER', DATE_BETWEEN = 'DATE_BETWEEN', DATE_NOT_BETWEEN = 'DATE_NOT_BETWEEN', DATE_IS_VALID = 'DATE_IS_VALID', ONE_OF_RANGE = 'ONE_OF_RANGE', ONE_OF_LIST = 'ONE_OF_LIST', BLANK = 'BLANK', NOT_BLANK = 'NOT_BLANK', CUSTOM_FORMULA = 'CUSTOM_FORMULA', BOOLEAN = 'BOOLEAN', TEXT_NOT_EQ = 'TEXT_NOT_EQ', DATE_NOT_EQ = 'DATE_NOT_EQ', FILTER_EXPRESSION = 'FILTER_EXPRESSION' }


	/** The value of the condition. */
	export interface ConditionValue {

		/** A relative date (based on the current date). Valid only if the type is DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE or DATE_ON_OR_AFTER. Relative dates are not supported in data validation. They are supported only in conditional formatting and conditional filters. */
		relativeDate?: ConditionValueRelativeDate | null;

		/** A value the condition is based on. The value is parsed as if the user typed into a cell. Formulas are supported (and must begin with an `=` or a '+'). */
		userEnteredValue?: string | null;
	}

	/** The value of the condition. */
	export interface ConditionValueFormProperties {

		/** A relative date (based on the current date). Valid only if the type is DATE_BEFORE, DATE_AFTER, DATE_ON_OR_BEFORE or DATE_ON_OR_AFTER. Relative dates are not supported in data validation. They are supported only in conditional formatting and conditional filters. */
		relativeDate: FormControl<ConditionValueRelativeDate | null | undefined>,

		/** A value the condition is based on. The value is parsed as if the user typed into a cell. Formulas are supported (and must begin with an `=` or a '+'). */
		userEnteredValue: FormControl<string | null | undefined>,
	}
	export function CreateConditionValueFormGroup() {
		return new FormGroup<ConditionValueFormProperties>({
			relativeDate: new FormControl<ConditionValueRelativeDate | null | undefined>(undefined),
			userEnteredValue: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ConditionValueRelativeDate { RELATIVE_DATE_UNSPECIFIED = 'RELATIVE_DATE_UNSPECIFIED', PAST_YEAR = 'PAST_YEAR', PAST_MONTH = 'PAST_MONTH', PAST_WEEK = 'PAST_WEEK', YESTERDAY = 'YESTERDAY', TODAY = 'TODAY', TOMORROW = 'TOMORROW' }

	export enum ChartSpecHiddenDimensionStrategy { CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED = 'CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED', SKIP_HIDDEN_ROWS_AND_COLUMNS = 'SKIP_HIDDEN_ROWS_AND_COLUMNS', SKIP_HIDDEN_ROWS = 'SKIP_HIDDEN_ROWS', SKIP_HIDDEN_COLUMNS = 'SKIP_HIDDEN_COLUMNS', SHOW_ALL = 'SHOW_ALL' }


	/** A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly. */
	export interface HistogramChartSpec {

		/** By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This field is optional. */
		bucketSize?: number | null;

		/** The position of the chart legend. */
		legendPosition?: HistogramChartSpecLegendPosition | null;

		/** The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets. The values are still included in the chart, they will be added to the first or last buckets instead of their own buckets. Must be between 0.0 and 0.5. */
		outlierPercentile?: number | null;

		/** The series for a histogram may be either a single series of values to be bucketed or multiple series, each of the same length, containing the name of the series followed by the values to be bucketed for that series. */
		series?: Array<HistogramSeries>;

		/** Whether horizontal divider lines should be displayed between items in each column. */
		showItemDividers?: boolean | null;
	}

	/** A histogram chart. A histogram chart groups data items into bins, displaying each bin as a column of stacked items. Histograms are used to display the distribution of a dataset. Each column of items represents a range into which those items fall. The number of bins can be chosen automatically or specified explicitly. */
	export interface HistogramChartSpecFormProperties {

		/** By default the bucket size (the range of values stacked in a single column) is chosen automatically, but it may be overridden here. E.g., A bucket size of 1.5 results in buckets from 0 - 1.5, 1.5 - 3.0, etc. Cannot be negative. This field is optional. */
		bucketSize: FormControl<number | null | undefined>,

		/** The position of the chart legend. */
		legendPosition: FormControl<HistogramChartSpecLegendPosition | null | undefined>,

		/** The outlier percentile is used to ensure that outliers do not adversely affect the calculation of bucket sizes. For example, setting an outlier percentile of 0.05 indicates that the top and bottom 5% of values when calculating buckets. The values are still included in the chart, they will be added to the first or last buckets instead of their own buckets. Must be between 0.0 and 0.5. */
		outlierPercentile: FormControl<number | null | undefined>,

		/** Whether horizontal divider lines should be displayed between items in each column. */
		showItemDividers: FormControl<boolean | null | undefined>,
	}
	export function CreateHistogramChartSpecFormGroup() {
		return new FormGroup<HistogramChartSpecFormProperties>({
			bucketSize: new FormControl<number | null | undefined>(undefined),
			legendPosition: new FormControl<HistogramChartSpecLegendPosition | null | undefined>(undefined),
			outlierPercentile: new FormControl<number | null | undefined>(undefined),
			showItemDividers: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum HistogramChartSpecLegendPosition { HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED = 'HISTOGRAM_CHART_LEGEND_POSITION_UNSPECIFIED', BOTTOM_LEGEND = 'BOTTOM_LEGEND', LEFT_LEGEND = 'LEFT_LEGEND', RIGHT_LEGEND = 'RIGHT_LEGEND', TOP_LEGEND = 'TOP_LEGEND', NO_LEGEND = 'NO_LEGEND', INSIDE_LEGEND = 'INSIDE_LEGEND' }


	/** A histogram series containing the series color and data. */
	export interface HistogramSeries {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		barColor?: Color;

		/** A color value. */
		barColorStyle?: ColorStyle;

		/** The data included in a domain or series. */
		data?: ChartData;
	}

	/** A histogram series containing the series color and data. */
	export interface HistogramSeriesFormProperties {
	}
	export function CreateHistogramSeriesFormGroup() {
		return new FormGroup<HistogramSeriesFormProperties>({
		});

	}


	/** An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales". */
	export interface OrgChartSpec {

		/** The data included in a domain or series. */
		labels?: ChartData;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		nodeColor?: Color;

		/** A color value. */
		nodeColorStyle?: ColorStyle;

		/** The size of the org chart nodes. */
		nodeSize?: OrgChartSpecNodeSize | null;

		/** The data included in a domain or series. */
		parentLabels?: ChartData;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		selectedNodeColor?: Color;

		/** A color value. */
		selectedNodeColorStyle?: ColorStyle;

		/** The data included in a domain or series. */
		tooltips?: ChartData;
	}

	/** An org chart. Org charts require a unique set of labels in labels and may optionally include parent_labels and tooltips. parent_labels contain, for each node, the label identifying the parent node. tooltips contain, for each node, an optional tooltip. For example, to describe an OrgChart with Alice as the CEO, Bob as the President (reporting to Alice) and Cathy as VP of Sales (also reporting to Alice), have labels contain "Alice", "Bob", "Cathy", parent_labels contain "", "Alice", "Alice" and tooltips contain "CEO", "President", "VP Sales". */
	export interface OrgChartSpecFormProperties {

		/** The size of the org chart nodes. */
		nodeSize: FormControl<OrgChartSpecNodeSize | null | undefined>,
	}
	export function CreateOrgChartSpecFormGroup() {
		return new FormGroup<OrgChartSpecFormProperties>({
			nodeSize: new FormControl<OrgChartSpecNodeSize | null | undefined>(undefined),
		});

	}

	export enum OrgChartSpecNodeSize { ORG_CHART_LABEL_SIZE_UNSPECIFIED = 'ORG_CHART_LABEL_SIZE_UNSPECIFIED', SMALL = 'SMALL', MEDIUM = 'MEDIUM', LARGE = 'LARGE' }


	/** A pie chart. */
	export interface PieChartSpec {

		/** The data included in a domain or series. */
		domain?: ChartData;

		/** Where the legend of the pie chart should be drawn. */
		legendPosition?: PieChartSpecLegendPosition | null;

		/** The size of the hole in the pie chart. */
		pieHole?: number | null;

		/** The data included in a domain or series. */
		series?: ChartData;

		/** True if the pie is three dimensional. */
		threeDimensional?: boolean | null;
	}

	/** A pie chart. */
	export interface PieChartSpecFormProperties {

		/** Where the legend of the pie chart should be drawn. */
		legendPosition: FormControl<PieChartSpecLegendPosition | null | undefined>,

		/** The size of the hole in the pie chart. */
		pieHole: FormControl<number | null | undefined>,

		/** True if the pie is three dimensional. */
		threeDimensional: FormControl<boolean | null | undefined>,
	}
	export function CreatePieChartSpecFormGroup() {
		return new FormGroup<PieChartSpecFormProperties>({
			legendPosition: new FormControl<PieChartSpecLegendPosition | null | undefined>(undefined),
			pieHole: new FormControl<number | null | undefined>(undefined),
			threeDimensional: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum PieChartSpecLegendPosition { PIE_CHART_LEGEND_POSITION_UNSPECIFIED = 'PIE_CHART_LEGEND_POSITION_UNSPECIFIED', BOTTOM_LEGEND = 'BOTTOM_LEGEND', LEFT_LEGEND = 'LEFT_LEGEND', RIGHT_LEGEND = 'RIGHT_LEGEND', TOP_LEGEND = 'TOP_LEGEND', NO_LEGEND = 'NO_LEGEND', LABELED_LEGEND = 'LABELED_LEGEND' }


	/** A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time. */
	export interface ScorecardChartSpec {

		/** The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source charts. This field is optional. */
		aggregateType?: ChartDataAggregateType | null;

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

		/** The number format source used in the scorecard chart. This field is optional. */
		numberFormatSource?: ScorecardChartSpecNumberFormatSource | null;

		/** Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the chart by 10. This field is optional. */
		scaleFactor?: number | null;
	}

	/** A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time. */
	export interface ScorecardChartSpecFormProperties {

		/** The aggregation type for key and baseline chart data in scorecard chart. This field is not supported for data source charts. Use the ChartData.aggregateType field of the key_value_data or baseline_value_data instead for data source charts. This field is optional. */
		aggregateType: FormControl<ChartDataAggregateType | null | undefined>,

		/** The number format source used in the scorecard chart. This field is optional. */
		numberFormatSource: FormControl<ScorecardChartSpecNumberFormatSource | null | undefined>,

		/** Value to scale scorecard key and baseline value. For example, a factor of 10 can be used to divide all values in the chart by 10. This field is optional. */
		scaleFactor: FormControl<number | null | undefined>,
	}
	export function CreateScorecardChartSpecFormGroup() {
		return new FormGroup<ScorecardChartSpecFormProperties>({
			aggregateType: new FormControl<ChartDataAggregateType | null | undefined>(undefined),
			numberFormatSource: new FormControl<ScorecardChartSpecNumberFormatSource | null | undefined>(undefined),
			scaleFactor: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Formatting options for baseline value. */
	export interface BaselineValueFormat {

		/** The comparison type of key value with baseline value. */
		comparisonType?: BaselineValueFormatComparisonType | null;

		/** Description which is appended after the baseline value. This field is optional. */
		description?: string | null;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		negativeColor?: Color;

		/** A color value. */
		negativeColorStyle?: ColorStyle;

		/** Position settings for text. */
		position?: TextPosition;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		positiveColor?: Color;

		/** A color value. */
		positiveColorStyle?: ColorStyle;

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		textFormat?: TextFormat;
	}

	/** Formatting options for baseline value. */
	export interface BaselineValueFormatFormProperties {

		/** The comparison type of key value with baseline value. */
		comparisonType: FormControl<BaselineValueFormatComparisonType | null | undefined>,

		/** Description which is appended after the baseline value. This field is optional. */
		description: FormControl<string | null | undefined>,
	}
	export function CreateBaselineValueFormatFormGroup() {
		return new FormGroup<BaselineValueFormatFormProperties>({
			comparisonType: new FormControl<BaselineValueFormatComparisonType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BaselineValueFormatComparisonType { COMPARISON_TYPE_UNDEFINED = 'COMPARISON_TYPE_UNDEFINED', ABSOLUTE_DIFFERENCE = 'ABSOLUTE_DIFFERENCE', PERCENTAGE_DIFFERENCE = 'PERCENTAGE_DIFFERENCE' }


	/** Custom number formatting options for chart attributes. */
	export interface ChartCustomNumberFormatOptions {

		/** Custom prefix to be prepended to the chart attribute. This field is optional. */
		prefix?: string | null;

		/** Custom suffix to be appended to the chart attribute. This field is optional. */
		suffix?: string | null;
	}

	/** Custom number formatting options for chart attributes. */
	export interface ChartCustomNumberFormatOptionsFormProperties {

		/** Custom prefix to be prepended to the chart attribute. This field is optional. */
		prefix: FormControl<string | null | undefined>,

		/** Custom suffix to be appended to the chart attribute. This field is optional. */
		suffix: FormControl<string | null | undefined>,
	}
	export function CreateChartCustomNumberFormatOptionsFormGroup() {
		return new FormGroup<ChartCustomNumberFormatOptionsFormProperties>({
			prefix: new FormControl<string | null | undefined>(undefined),
			suffix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Formatting options for key value. */
	export interface KeyValueFormat {

		/** Position settings for text. */
		position?: TextPosition;

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		textFormat?: TextFormat;
	}

	/** Formatting options for key value. */
	export interface KeyValueFormatFormProperties {
	}
	export function CreateKeyValueFormatFormGroup() {
		return new FormGroup<KeyValueFormatFormProperties>({
		});

	}

	export enum ScorecardChartSpecNumberFormatSource { CHART_NUMBER_FORMAT_SOURCE_UNDEFINED = 'CHART_NUMBER_FORMAT_SOURCE_UNDEFINED', FROM_DATA = 'FROM_DATA', CUSTOM = 'CUSTOM' }


	/** A sort order associated with a specific column or row. */
	export interface SortSpec {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		backgroundColor?: Color;

		/** A color value. */
		backgroundColorStyle?: ColorStyle;

		/** An unique identifier that references a data source column. */
		dataSourceColumnReference?: DataSourceColumnReference;

		/** The dimension the sort should be applied to. */
		dimensionIndex?: number | null;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		foregroundColor?: Color;

		/** A color value. */
		foregroundColorStyle?: ColorStyle;

		/** The order data should be sorted. */
		sortOrder?: SortSpecSortOrder | null;
	}

	/** A sort order associated with a specific column or row. */
	export interface SortSpecFormProperties {

		/** The dimension the sort should be applied to. */
		dimensionIndex: FormControl<number | null | undefined>,

		/** The order data should be sorted. */
		sortOrder: FormControl<SortSpecSortOrder | null | undefined>,
	}
	export function CreateSortSpecFormGroup() {
		return new FormGroup<SortSpecFormProperties>({
			dimensionIndex: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<SortSpecSortOrder | null | undefined>(undefined),
		});

	}

	export enum SortSpecSortOrder { SORT_ORDER_UNSPECIFIED = 'SORT_ORDER_UNSPECIFIED', ASCENDING = 'ASCENDING', DESCENDING = 'DESCENDING' }


	/** A Treemap chart. */
	export interface TreemapChartSpec {

		/** The data included in a domain or series. */
		colorData?: ChartData;

		/** A color scale for a treemap chart. */
		colorScale?: TreemapChartColorScale;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		headerColor?: Color;

		/** A color value. */
		headerColorStyle?: ColorStyle;

		/** True to hide tooltips. */
		hideTooltips?: boolean | null;

		/** The number of additional data levels beyond the labeled levels to be shown on the treemap chart. These levels are not interactive and are shown without their labels. Defaults to 0 if not specified. */
		hintedLevels?: number | null;

		/** The data included in a domain or series. */
		labels?: ChartData;

		/** The number of data levels to show on the treemap chart. These levels are interactive and are shown with their labels. Defaults to 2 if not specified. */
		levels?: number | null;

		/** The maximum possible data value. Cells with values greater than this will have the same color as cells with this value. If not specified, defaults to the actual maximum value from color_data, or the maximum value from size_data if color_data is not specified. */
		maxValue?: number | null;

		/** The minimum possible data value. Cells with values less than this will have the same color as cells with this value. If not specified, defaults to the actual minimum value from color_data, or the minimum value from size_data if color_data is not specified. */
		minValue?: number | null;

		/** The data included in a domain or series. */
		parentLabels?: ChartData;

		/** The data included in a domain or series. */
		sizeData?: ChartData;

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		textFormat?: TextFormat;
	}

	/** A Treemap chart. */
	export interface TreemapChartSpecFormProperties {

		/** True to hide tooltips. */
		hideTooltips: FormControl<boolean | null | undefined>,

		/** The number of additional data levels beyond the labeled levels to be shown on the treemap chart. These levels are not interactive and are shown without their labels. Defaults to 0 if not specified. */
		hintedLevels: FormControl<number | null | undefined>,

		/** The number of data levels to show on the treemap chart. These levels are interactive and are shown with their labels. Defaults to 2 if not specified. */
		levels: FormControl<number | null | undefined>,

		/** The maximum possible data value. Cells with values greater than this will have the same color as cells with this value. If not specified, defaults to the actual maximum value from color_data, or the maximum value from size_data if color_data is not specified. */
		maxValue: FormControl<number | null | undefined>,

		/** The minimum possible data value. Cells with values less than this will have the same color as cells with this value. If not specified, defaults to the actual minimum value from color_data, or the minimum value from size_data if color_data is not specified. */
		minValue: FormControl<number | null | undefined>,
	}
	export function CreateTreemapChartSpecFormGroup() {
		return new FormGroup<TreemapChartSpecFormProperties>({
			hideTooltips: new FormControl<boolean | null | undefined>(undefined),
			hintedLevels: new FormControl<number | null | undefined>(undefined),
			levels: new FormControl<number | null | undefined>(undefined),
			maxValue: new FormControl<number | null | undefined>(undefined),
			minValue: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A color scale for a treemap chart. */
	export interface TreemapChartColorScale {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		maxValueColor?: Color;

		/** A color value. */
		maxValueColorStyle?: ColorStyle;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		midValueColor?: Color;

		/** A color value. */
		midValueColorStyle?: ColorStyle;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		minValueColor?: Color;

		/** A color value. */
		minValueColorStyle?: ColorStyle;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		noDataColor?: Color;

		/** A color value. */
		noDataColorStyle?: ColorStyle;
	}

	/** A color scale for a treemap chart. */
	export interface TreemapChartColorScaleFormProperties {
	}
	export function CreateTreemapChartColorScaleFormGroup() {
		return new FormGroup<TreemapChartColorScaleFormProperties>({
		});

	}


	/** A waterfall chart. */
	export interface WaterfallChartSpec {

		/** Properties that describe the style of a line. */
		connectorLineStyle?: LineStyle;

		/** The domain of a waterfall chart. */
		domain?: WaterfallChartDomain;

		/** True to interpret the first value as a total. */
		firstValueIsTotal?: boolean | null;

		/** True to hide connector lines between columns. */
		hideConnectorLines?: boolean | null;

		/** The data this waterfall chart is visualizing. */
		series?: Array<WaterfallChartSeries>;

		/** The stacked type. */
		stackedType?: WaterfallChartSpecStackedType | null;

		/** Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph. */
		totalDataLabel?: DataLabel;
	}

	/** A waterfall chart. */
	export interface WaterfallChartSpecFormProperties {

		/** True to interpret the first value as a total. */
		firstValueIsTotal: FormControl<boolean | null | undefined>,

		/** True to hide connector lines between columns. */
		hideConnectorLines: FormControl<boolean | null | undefined>,

		/** The stacked type. */
		stackedType: FormControl<WaterfallChartSpecStackedType | null | undefined>,
	}
	export function CreateWaterfallChartSpecFormGroup() {
		return new FormGroup<WaterfallChartSpecFormProperties>({
			firstValueIsTotal: new FormControl<boolean | null | undefined>(undefined),
			hideConnectorLines: new FormControl<boolean | null | undefined>(undefined),
			stackedType: new FormControl<WaterfallChartSpecStackedType | null | undefined>(undefined),
		});

	}


	/** The domain of a waterfall chart. */
	export interface WaterfallChartDomain {

		/** The data included in a domain or series. */
		data?: ChartData;

		/** True to reverse the order of the domain values (horizontal axis). */
		reversed?: boolean | null;
	}

	/** The domain of a waterfall chart. */
	export interface WaterfallChartDomainFormProperties {

		/** True to reverse the order of the domain values (horizontal axis). */
		reversed: FormControl<boolean | null | undefined>,
	}
	export function CreateWaterfallChartDomainFormGroup() {
		return new FormGroup<WaterfallChartDomainFormProperties>({
			reversed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A single series of data for a waterfall chart. */
	export interface WaterfallChartSeries {

		/** Custom subtotal columns appearing in this series. The order in which subtotals are defined is not significant. Only one subtotal may be defined for each data point. */
		customSubtotals?: Array<WaterfallChartCustomSubtotal>;

		/** The data included in a domain or series. */
		data?: ChartData;

		/** Settings for one set of data labels. Data labels are annotations that appear next to a set of data, such as the points on a line chart, and provide additional information about what the data represents, such as a text representation of the value behind that point on the graph. */
		dataLabel?: DataLabel;

		/** True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of each series. Setting this field to true will hide that subtotal column for this series. */
		hideTrailingSubtotal?: boolean | null;

		/** Styles for a waterfall chart column. */
		negativeColumnsStyle?: WaterfallChartColumnStyle;

		/** Styles for a waterfall chart column. */
		positiveColumnsStyle?: WaterfallChartColumnStyle;

		/** Styles for a waterfall chart column. */
		subtotalColumnsStyle?: WaterfallChartColumnStyle;
	}

	/** A single series of data for a waterfall chart. */
	export interface WaterfallChartSeriesFormProperties {

		/** True to hide the subtotal column from the end of the series. By default, a subtotal column will appear at the end of each series. Setting this field to true will hide that subtotal column for this series. */
		hideTrailingSubtotal: FormControl<boolean | null | undefined>,
	}
	export function CreateWaterfallChartSeriesFormGroup() {
		return new FormGroup<WaterfallChartSeriesFormProperties>({
			hideTrailingSubtotal: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A custom subtotal column for a waterfall chart series. */
	export interface WaterfallChartCustomSubtotal {

		/** True if the data point at subtotal_index is the subtotal. If false, the subtotal will be computed and appear after the data point. */
		dataIsSubtotal?: boolean | null;

		/** A label for the subtotal column. */
		label?: string | null;

		/** The zero-based index of a data point within the series. If data_is_subtotal is true, the data point at this index is the subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at arbitrary indices, but subtotals do not affect the indices of the data points. For example, if a series has three data points, their indices will always be 0, 1, and 2, regardless of how many subtotals exist on the series or what data points they are associated with. */
		subtotalIndex?: number | null;
	}

	/** A custom subtotal column for a waterfall chart series. */
	export interface WaterfallChartCustomSubtotalFormProperties {

		/** True if the data point at subtotal_index is the subtotal. If false, the subtotal will be computed and appear after the data point. */
		dataIsSubtotal: FormControl<boolean | null | undefined>,

		/** A label for the subtotal column. */
		label: FormControl<string | null | undefined>,

		/** The zero-based index of a data point within the series. If data_is_subtotal is true, the data point at this index is the subtotal. Otherwise, the subtotal appears after the data point with this index. A series can have multiple subtotals at arbitrary indices, but subtotals do not affect the indices of the data points. For example, if a series has three data points, their indices will always be 0, 1, and 2, regardless of how many subtotals exist on the series or what data points they are associated with. */
		subtotalIndex: FormControl<number | null | undefined>,
	}
	export function CreateWaterfallChartCustomSubtotalFormGroup() {
		return new FormGroup<WaterfallChartCustomSubtotalFormProperties>({
			dataIsSubtotal: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			subtotalIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Styles for a waterfall chart column. */
	export interface WaterfallChartColumnStyle {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/** A color value. */
		colorStyle?: ColorStyle;

		/** The label of the column's legend. */
		label?: string | null;
	}

	/** Styles for a waterfall chart column. */
	export interface WaterfallChartColumnStyleFormProperties {

		/** The label of the column's legend. */
		label: FormControl<string | null | undefined>,
	}
	export function CreateWaterfallChartColumnStyleFormGroup() {
		return new FormGroup<WaterfallChartColumnStyleFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum WaterfallChartSpecStackedType { WATERFALL_STACKED_TYPE_UNSPECIFIED = 'WATERFALL_STACKED_TYPE_UNSPECIFIED', STACKED = 'STACKED', SEQUENTIAL = 'SEQUENTIAL' }


	/** The result of adding a chart to a spreadsheet. */
	export interface AddChartResponse {

		/** A chart embedded in a sheet. */
		chart?: EmbeddedChart;
	}

	/** The result of adding a chart to a spreadsheet. */
	export interface AddChartResponseFormProperties {
	}
	export function CreateAddChartResponseFormGroup() {
		return new FormGroup<AddChartResponseFormProperties>({
		});

	}


	/** Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented. */
	export interface AddConditionalFormatRuleRequest {

		/** The zero-based index where the rule should be inserted. */
		index?: number | null;

		/** A rule describing a conditional format. */
		rule?: ConditionalFormatRule;
	}

	/** Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented. */
	export interface AddConditionalFormatRuleRequestFormProperties {

		/** The zero-based index where the rule should be inserted. */
		index: FormControl<number | null | undefined>,
	}
	export function CreateAddConditionalFormatRuleRequestFormGroup() {
		return new FormGroup<AddConditionalFormatRuleRequestFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A rule describing a conditional format. */
	export interface ConditionalFormatRule {

		/** A rule that may or may not match, depending on the condition. */
		booleanRule?: BooleanRule;

		/** A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points. */
		gradientRule?: GradientRule;

		/** The ranges that are formatted if the condition is true. All the ranges must be on the same grid. */
		ranges?: Array<GridRange>;
	}

	/** A rule describing a conditional format. */
	export interface ConditionalFormatRuleFormProperties {
	}
	export function CreateConditionalFormatRuleFormGroup() {
		return new FormGroup<ConditionalFormatRuleFormProperties>({
		});

	}


	/** A rule that may or may not match, depending on the condition. */
	export interface BooleanRule {

		/** A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters. */
		condition?: BooleanCondition;

		/** The format of a cell. */
		format?: CellFormat;
	}

	/** A rule that may or may not match, depending on the condition. */
	export interface BooleanRuleFormProperties {
	}
	export function CreateBooleanRuleFormGroup() {
		return new FormGroup<BooleanRuleFormProperties>({
		});

	}


	/** The format of a cell. */
	export interface CellFormat {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		backgroundColor?: Color;

		/** A color value. */
		backgroundColorStyle?: ColorStyle;

		/** The borders of the cell. */
		borders?: Borders;

		/** The horizontal alignment of the value in the cell. */
		horizontalAlignment?: TextPositionHorizontalAlignment | null;

		/** If one exists, how a hyperlink should be displayed in the cell. */
		hyperlinkDisplayType?: CellFormatHyperlinkDisplayType | null;

		/** The number format of a cell. */
		numberFormat?: NumberFormat;

		/** The amount of padding around the cell, in pixels. When updating padding, every field must be specified. */
		padding?: Padding;

		/** The direction of the text in the cell. */
		textDirection?: CellFormatTextDirection | null;

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		textFormat?: TextFormat;

		/** The rotation applied to text in a cell. */
		textRotation?: TextRotation;

		/** The vertical alignment of the value in the cell. */
		verticalAlignment?: CellFormatVerticalAlignment | null;

		/** The wrap strategy for the value in the cell. */
		wrapStrategy?: CellFormatWrapStrategy | null;
	}

	/** The format of a cell. */
	export interface CellFormatFormProperties {

		/** The horizontal alignment of the value in the cell. */
		horizontalAlignment: FormControl<TextPositionHorizontalAlignment | null | undefined>,

		/** If one exists, how a hyperlink should be displayed in the cell. */
		hyperlinkDisplayType: FormControl<CellFormatHyperlinkDisplayType | null | undefined>,

		/** The direction of the text in the cell. */
		textDirection: FormControl<CellFormatTextDirection | null | undefined>,

		/** The vertical alignment of the value in the cell. */
		verticalAlignment: FormControl<CellFormatVerticalAlignment | null | undefined>,

		/** The wrap strategy for the value in the cell. */
		wrapStrategy: FormControl<CellFormatWrapStrategy | null | undefined>,
	}
	export function CreateCellFormatFormGroup() {
		return new FormGroup<CellFormatFormProperties>({
			horizontalAlignment: new FormControl<TextPositionHorizontalAlignment | null | undefined>(undefined),
			hyperlinkDisplayType: new FormControl<CellFormatHyperlinkDisplayType | null | undefined>(undefined),
			textDirection: new FormControl<CellFormatTextDirection | null | undefined>(undefined),
			verticalAlignment: new FormControl<CellFormatVerticalAlignment | null | undefined>(undefined),
			wrapStrategy: new FormControl<CellFormatWrapStrategy | null | undefined>(undefined),
		});

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

	/** The borders of the cell. */
	export interface BordersFormProperties {
	}
	export function CreateBordersFormGroup() {
		return new FormGroup<BordersFormProperties>({
		});

	}


	/** A border along a cell. */
	export interface Border {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/** A color value. */
		colorStyle?: ColorStyle;

		/** The style of the border. */
		style?: BorderStyle | null;

		/** The width of the border, in pixels. Deprecated; the width is determined by the "style" field. */
		width?: number | null;
	}

	/** A border along a cell. */
	export interface BorderFormProperties {

		/** The style of the border. */
		style: FormControl<BorderStyle | null | undefined>,

		/** The width of the border, in pixels. Deprecated; the width is determined by the "style" field. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateBorderFormGroup() {
		return new FormGroup<BorderFormProperties>({
			style: new FormControl<BorderStyle | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BorderStyle { STYLE_UNSPECIFIED = 'STYLE_UNSPECIFIED', DOTTED = 'DOTTED', DASHED = 'DASHED', SOLID = 'SOLID', SOLID_MEDIUM = 'SOLID_MEDIUM', SOLID_THICK = 'SOLID_THICK', NONE = 'NONE', DOUBLE = 'DOUBLE' }

	export enum CellFormatHyperlinkDisplayType { HYPERLINK_DISPLAY_TYPE_UNSPECIFIED = 'HYPERLINK_DISPLAY_TYPE_UNSPECIFIED', LINKED = 'LINKED', PLAIN_TEXT = 'PLAIN_TEXT' }


	/** The number format of a cell. */
	export interface NumberFormat {

		/** Pattern string used for formatting. If not set, a default pattern based on the user's locale will be used if necessary for the given type. See the [Date and Number Formats guide](/sheets/api/guides/formats) for more information about the supported patterns. */
		pattern?: string | null;

		/** The type of the number format. When writing, this field must be set. */
		type?: NumberFormatType | null;
	}

	/** The number format of a cell. */
	export interface NumberFormatFormProperties {

		/** Pattern string used for formatting. If not set, a default pattern based on the user's locale will be used if necessary for the given type. See the [Date and Number Formats guide](/sheets/api/guides/formats) for more information about the supported patterns. */
		pattern: FormControl<string | null | undefined>,

		/** The type of the number format. When writing, this field must be set. */
		type: FormControl<NumberFormatType | null | undefined>,
	}
	export function CreateNumberFormatFormGroup() {
		return new FormGroup<NumberFormatFormProperties>({
			pattern: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<NumberFormatType | null | undefined>(undefined),
		});

	}

	export enum NumberFormatType { NUMBER_FORMAT_TYPE_UNSPECIFIED = 'NUMBER_FORMAT_TYPE_UNSPECIFIED', TEXT = 'TEXT', NUMBER = 'NUMBER', PERCENT = 'PERCENT', CURRENCY = 'CURRENCY', DATE = 'DATE', TIME = 'TIME', DATE_TIME = 'DATE_TIME', SCIENTIFIC = 'SCIENTIFIC' }


	/** The amount of padding around the cell, in pixels. When updating padding, every field must be specified. */
	export interface Padding {

		/** The bottom padding of the cell. */
		bottom?: number | null;

		/** The left padding of the cell. */
		left?: number | null;

		/** The right padding of the cell. */
		right?: number | null;

		/** The top padding of the cell. */
		top?: number | null;
	}

	/** The amount of padding around the cell, in pixels. When updating padding, every field must be specified. */
	export interface PaddingFormProperties {

		/** The bottom padding of the cell. */
		bottom: FormControl<number | null | undefined>,

		/** The left padding of the cell. */
		left: FormControl<number | null | undefined>,

		/** The right padding of the cell. */
		right: FormControl<number | null | undefined>,

		/** The top padding of the cell. */
		top: FormControl<number | null | undefined>,
	}
	export function CreatePaddingFormGroup() {
		return new FormGroup<PaddingFormProperties>({
			bottom: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			right: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CellFormatTextDirection { TEXT_DIRECTION_UNSPECIFIED = 'TEXT_DIRECTION_UNSPECIFIED', LEFT_TO_RIGHT = 'LEFT_TO_RIGHT', RIGHT_TO_LEFT = 'RIGHT_TO_LEFT' }


	/** The rotation applied to text in a cell. */
	export interface TextRotation {

		/** The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards. Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction */
		angle?: number | null;

		/** If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example: | V | | e | | r | | t | | i | | c | | a | | l | */
		vertical?: boolean | null;
	}

	/** The rotation applied to text in a cell. */
	export interface TextRotationFormProperties {

		/** The angle between the standard orientation and the desired orientation. Measured in degrees. Valid values are between -90 and 90. Positive angles are angled upwards, negative are angled downwards. Note: For LTR text direction positive angles are in the counterclockwise direction, whereas for RTL they are in the clockwise direction */
		angle: FormControl<number | null | undefined>,

		/** If true, text reads top to bottom, but the orientation of individual characters is unchanged. For example: | V | | e | | r | | t | | i | | c | | a | | l | */
		vertical: FormControl<boolean | null | undefined>,
	}
	export function CreateTextRotationFormGroup() {
		return new FormGroup<TextRotationFormProperties>({
			angle: new FormControl<number | null | undefined>(undefined),
			vertical: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CellFormatVerticalAlignment { VERTICAL_ALIGN_UNSPECIFIED = 'VERTICAL_ALIGN_UNSPECIFIED', TOP = 'TOP', MIDDLE = 'MIDDLE', BOTTOM = 'BOTTOM' }

	export enum CellFormatWrapStrategy { WRAP_STRATEGY_UNSPECIFIED = 'WRAP_STRATEGY_UNSPECIFIED', OVERFLOW_CELL = 'OVERFLOW_CELL', LEGACY_WRAP = 'LEGACY_WRAP', CLIP = 'CLIP', WRAP = 'WRAP' }


	/** A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points. */
	export interface GradientRule {

		/** A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen. */
		maxpoint?: InterpolationPoint;

		/** A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen. */
		midpoint?: InterpolationPoint;

		/** A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen. */
		minpoint?: InterpolationPoint;
	}

	/** A rule that applies a gradient color scale format, based on the interpolation points listed. The format of a cell will vary based on its contents as compared to the values of the interpolation points. */
	export interface GradientRuleFormProperties {
	}
	export function CreateGradientRuleFormGroup() {
		return new FormGroup<GradientRuleFormProperties>({
		});

	}


	/** A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen. */
	export interface InterpolationPoint {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: Color;

		/** A color value. */
		colorStyle?: ColorStyle;

		/** How the value should be interpreted. */
		type?: InterpolationPointType | null;

		/** The value this interpolation point uses. May be a formula. Unused if type is MIN or MAX. */
		value?: string | null;
	}

	/** A single interpolation point on a gradient conditional format. These pin the gradient color scale according to the color, type and value chosen. */
	export interface InterpolationPointFormProperties {

		/** How the value should be interpreted. */
		type: FormControl<InterpolationPointType | null | undefined>,

		/** The value this interpolation point uses. May be a formula. Unused if type is MIN or MAX. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateInterpolationPointFormGroup() {
		return new FormGroup<InterpolationPointFormProperties>({
			type: new FormControl<InterpolationPointType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InterpolationPointType { INTERPOLATION_POINT_TYPE_UNSPECIFIED = 'INTERPOLATION_POINT_TYPE_UNSPECIFIED', MIN = 'MIN', MAX = 'MAX', NUMBER = 'NUMBER', PERCENT = 'PERCENT', PERCENTILE = 'PERCENTILE' }


	/** Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope. */
	export interface AddDataSourceRequest {

		/** Information about an external data source in the spreadsheet. */
		dataSource?: DataSource;
	}

	/** Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope. */
	export interface AddDataSourceRequestFormProperties {
	}
	export function CreateAddDataSourceRequestFormGroup() {
		return new FormGroup<AddDataSourceRequestFormProperties>({
		});

	}


	/** Information about an external data source in the spreadsheet. */
	export interface DataSource {

		/** All calculated columns in the data source. */
		calculatedColumns?: Array<DataSourceColumn>;

		/** The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365. */
		dataSourceId?: string | null;

		/** The ID of the Sheet connected with the data source. The field cannot be changed once set. When creating a data source, an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated. */
		sheetId?: number | null;

		/** This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source. */
		spec?: DataSourceSpec;
	}

	/** Information about an external data source in the spreadsheet. */
	export interface DataSourceFormProperties {

		/** The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365. */
		dataSourceId: FormControl<string | null | undefined>,

		/** The ID of the Sheet connected with the data source. The field cannot be changed once set. When creating a data source, an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateDataSourceFormGroup() {
		return new FormGroup<DataSourceFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A column in a data source. */
	export interface DataSourceColumn {

		/** The formula of the calculated column. */
		formula?: string | null;

		/** An unique identifier that references a data source column. */
		reference?: DataSourceColumnReference;
	}

	/** A column in a data source. */
	export interface DataSourceColumnFormProperties {

		/** The formula of the calculated column. */
		formula: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceColumnFormGroup() {
		return new FormGroup<DataSourceColumnFormProperties>({
			formula: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source. */
	export interface DataSourceSpec {

		/** The specification of a BigQuery data source that's connected to a sheet. */
		bigQuery?: BigQueryDataSourceSpec;

		/** The parameters of the data source, used when querying the data source. */
		parameters?: Array<DataSourceParameter>;
	}

	/** This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source. */
	export interface DataSourceSpecFormProperties {
	}
	export function CreateDataSourceSpecFormGroup() {
		return new FormGroup<DataSourceSpecFormProperties>({
		});

	}


	/** The specification of a BigQuery data source that's connected to a sheet. */
	export interface BigQueryDataSourceSpec {

		/** The ID of a BigQuery enabled Google Cloud project with a billing account attached. For any queries executed against the data source, the project is charged. */
		projectId?: string | null;

		/** Specifies a custom BigQuery query. */
		querySpec?: BigQueryQuerySpec;

		/** Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) are allowed. */
		tableSpec?: BigQueryTableSpec;
	}

	/** The specification of a BigQuery data source that's connected to a sheet. */
	export interface BigQueryDataSourceSpecFormProperties {

		/** The ID of a BigQuery enabled Google Cloud project with a billing account attached. For any queries executed against the data source, the project is charged. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryDataSourceSpecFormGroup() {
		return new FormGroup<BigQueryDataSourceSpecFormProperties>({
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a custom BigQuery query. */
	export interface BigQueryQuerySpec {

		/** The raw query string. */
		rawQuery?: string | null;
	}

	/** Specifies a custom BigQuery query. */
	export interface BigQueryQuerySpecFormProperties {

		/** The raw query string. */
		rawQuery: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryQuerySpecFormGroup() {
		return new FormGroup<BigQueryQuerySpecFormProperties>({
			rawQuery: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) are allowed. */
	export interface BigQueryTableSpec {

		/** The BigQuery dataset id. */
		datasetId?: string | null;

		/** The BigQuery table id. */
		tableId?: string | null;

		/** The ID of a BigQuery project the table belongs to. If not specified, the project_id is assumed. */
		tableProjectId?: string | null;
	}

	/** Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) are allowed. */
	export interface BigQueryTableSpecFormProperties {

		/** The BigQuery dataset id. */
		datasetId: FormControl<string | null | undefined>,

		/** The BigQuery table id. */
		tableId: FormControl<string | null | undefined>,

		/** The ID of a BigQuery project the table belongs to. If not specified, the project_id is assumed. */
		tableProjectId: FormControl<string | null | undefined>,
	}
	export function CreateBigQueryTableSpecFormGroup() {
		return new FormGroup<BigQueryTableSpecFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
			tableProjectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query. */
	export interface DataSourceParameter {

		/** Named parameter. Must be a legitimate identifier for the DataSource that supports it. For example, [BigQuery identifier](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#identifiers). */
		name?: string | null;

		/** ID of a NamedRange. Its size must be 1x1. */
		namedRangeId?: string | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;
	}

	/** A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query. */
	export interface DataSourceParameterFormProperties {

		/** Named parameter. Must be a legitimate identifier for the DataSource that supports it. For example, [BigQuery identifier](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#identifiers). */
		name: FormControl<string | null | undefined>,

		/** ID of a NamedRange. Its size must be 1x1. */
		namedRangeId: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceParameterFormGroup() {
		return new FormGroup<DataSourceParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			namedRangeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of adding a data source. */
	export interface AddDataSourceResponse {

		/** The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
		dataExecutionStatus?: DataExecutionStatus;

		/** Information about an external data source in the spreadsheet. */
		dataSource?: DataSource;
	}

	/** The result of adding a data source. */
	export interface AddDataSourceResponseFormProperties {
	}
	export function CreateAddDataSourceResponseFormGroup() {
		return new FormGroup<AddDataSourceResponseFormProperties>({
		});

	}


	/** Creates a group over the specified range. If the requested range is a superset of the range of an existing group G, then the depth of G is incremented and this new group G' has the depth of that group. For example, a group [C:D, depth 1] + [B:E] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range is a subset of the range of an existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range starts before and ends within, or starts within and ends after, the range of an existing group G, then the range of the existing group G becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the intersection of the ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D, depth 2]. */
	export interface AddDimensionGroupRequest {

		/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
		range?: DimensionRange;
	}

	/** Creates a group over the specified range. If the requested range is a superset of the range of an existing group G, then the depth of G is incremented and this new group G' has the depth of that group. For example, a group [C:D, depth 1] + [B:E] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range is a subset of the range of an existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range starts before and ends within, or starts within and ends after, the range of an existing group G, then the range of the existing group G becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the intersection of the ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D, depth 2]. */
	export interface AddDimensionGroupRequestFormProperties {
	}
	export function CreateAddDimensionGroupRequestFormGroup() {
		return new FormGroup<AddDimensionGroupRequestFormProperties>({
		});

	}


	/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
	export interface DimensionRange {

		/** The dimension of the span. */
		dimension?: DimensionRangeDimension | null;

		/** The end (exclusive) of the span, or not set if unbounded. */
		endIndex?: number | null;

		/** The sheet this span is on. */
		sheetId?: number | null;

		/** The start (inclusive) of the span, or not set if unbounded. */
		startIndex?: number | null;
	}

	/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
	export interface DimensionRangeFormProperties {

		/** The dimension of the span. */
		dimension: FormControl<DimensionRangeDimension | null | undefined>,

		/** The end (exclusive) of the span, or not set if unbounded. */
		endIndex: FormControl<number | null | undefined>,

		/** The sheet this span is on. */
		sheetId: FormControl<number | null | undefined>,

		/** The start (inclusive) of the span, or not set if unbounded. */
		startIndex: FormControl<number | null | undefined>,
	}
	export function CreateDimensionRangeFormGroup() {
		return new FormGroup<DimensionRangeFormProperties>({
			dimension: new FormControl<DimensionRangeDimension | null | undefined>(undefined),
			endIndex: new FormControl<number | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
			startIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DimensionRangeDimension { DIMENSION_UNSPECIFIED = 'DIMENSION_UNSPECIFIED', ROWS = 'ROWS', COLUMNS = 'COLUMNS' }


	/** The result of adding a group. */
	export interface AddDimensionGroupResponse {

		/** All groups of a dimension after adding a group to that dimension. */
		dimensionGroups?: Array<DimensionGroup>;
	}

	/** The result of adding a group. */
	export interface AddDimensionGroupResponseFormProperties {
	}
	export function CreateAddDimensionGroupResponseFormGroup() {
		return new FormGroup<AddDimensionGroupResponseFormProperties>({
		});

	}


	/** A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet. */
	export interface DimensionGroup {

		/** This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a shallower depth is expanded. A true value does not imply that all dimensions within the group are hidden, since a dimension's visibility can change independently from this group property. However, when this property is updated, all dimensions within it are set to hidden if this field is true, or set to visible if this field is false. */
		collapsed?: boolean | null;

		/** The depth of the group, representing how many groups have a range that wholly contains the range of this group. */
		depth?: number | null;

		/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
		range?: DimensionRange;
	}

	/** A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet. */
	export interface DimensionGroupFormProperties {

		/** This field is true if this group is collapsed. A collapsed group remains collapsed if an overlapping group at a shallower depth is expanded. A true value does not imply that all dimensions within the group are hidden, since a dimension's visibility can change independently from this group property. However, when this property is updated, all dimensions within it are set to hidden if this field is true, or set to visible if this field is false. */
		collapsed: FormControl<boolean | null | undefined>,

		/** The depth of the group, representing how many groups have a range that wholly contains the range of this group. */
		depth: FormControl<number | null | undefined>,
	}
	export function CreateDimensionGroupFormGroup() {
		return new FormGroup<DimensionGroupFormProperties>({
			collapsed: new FormControl<boolean | null | undefined>(undefined),
			depth: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Adds a filter view. */
	export interface AddFilterViewRequest {

		/** A filter view. */
		filter?: FilterView;
	}

	/** Adds a filter view. */
	export interface AddFilterViewRequestFormProperties {
	}
	export function CreateAddFilterViewRequestFormGroup() {
		return new FormGroup<AddFilterViewRequestFormProperties>({
		});

	}


	/** A filter view. */
	export interface FilterView {

		/** The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. */
		criteria?: {[id: string]: FilterCriteria };

		/** The filter criteria for showing/hiding values per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. */
		filterSpecs?: Array<FilterSpec>;

		/** The ID of the filter view. */
		filterViewId?: number | null;

		/** The named range this filter view is backed by, if any. When writing, only one of range or named_range_id may be set. */
		namedRangeId?: string | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** The sort order per column. Later specifications are used when values are equal in the earlier specifications. */
		sortSpecs?: Array<SortSpec>;

		/** The name of the filter view. */
		title?: string | null;
	}

	/** A filter view. */
	export interface FilterViewFormProperties {

		/** The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. */
		criteria: FormControl<{[id: string]: FilterCriteria } | null | undefined>,

		/** The ID of the filter view. */
		filterViewId: FormControl<number | null | undefined>,

		/** The named range this filter view is backed by, if any. When writing, only one of range or named_range_id may be set. */
		namedRangeId: FormControl<string | null | undefined>,

		/** The name of the filter view. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateFilterViewFormGroup() {
		return new FormGroup<FilterViewFormProperties>({
			criteria: new FormControl<{[id: string]: FilterCriteria } | null | undefined>(undefined),
			filterViewId: new FormControl<number | null | undefined>(undefined),
			namedRangeId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of adding a filter view. */
	export interface AddFilterViewResponse {

		/** A filter view. */
		filter?: FilterView;
	}

	/** The result of adding a filter view. */
	export interface AddFilterViewResponseFormProperties {
	}
	export function CreateAddFilterViewResponseFormGroup() {
		return new FormGroup<AddFilterViewResponseFormProperties>({
		});

	}


	/** Adds a named range to the spreadsheet. */
	export interface AddNamedRangeRequest {

		/** A named range. */
		namedRange?: NamedRange;
	}

	/** Adds a named range to the spreadsheet. */
	export interface AddNamedRangeRequestFormProperties {
	}
	export function CreateAddNamedRangeRequestFormGroup() {
		return new FormGroup<AddNamedRangeRequestFormProperties>({
		});

	}


	/** A named range. */
	export interface NamedRange {

		/** The name of the named range. */
		name?: string | null;

		/** The ID of the named range. */
		namedRangeId?: string | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;
	}

	/** A named range. */
	export interface NamedRangeFormProperties {

		/** The name of the named range. */
		name: FormControl<string | null | undefined>,

		/** The ID of the named range. */
		namedRangeId: FormControl<string | null | undefined>,
	}
	export function CreateNamedRangeFormGroup() {
		return new FormGroup<NamedRangeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			namedRangeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of adding a named range. */
	export interface AddNamedRangeResponse {

		/** A named range. */
		namedRange?: NamedRange;
	}

	/** The result of adding a named range. */
	export interface AddNamedRangeResponseFormProperties {
	}
	export function CreateAddNamedRangeResponseFormGroup() {
		return new FormGroup<AddNamedRangeResponseFormProperties>({
		});

	}


	/** Adds a new protected range. */
	export interface AddProtectedRangeRequest {

		/** A protected range. */
		protectedRange?: ProtectedRange;
	}

	/** Adds a new protected range. */
	export interface AddProtectedRangeRequestFormProperties {
	}
	export function CreateAddProtectedRangeRequestFormGroup() {
		return new FormGroup<AddProtectedRangeRequestFormProperties>({
		});

	}


	/** A protected range. */
	export interface ProtectedRange {

		/** The description of this protected range. */
		description?: string | null;

		/** The editors of a protected range. */
		editors?: Editors;

		/** The named range this protected range is backed by, if any. When writing, only one of range or named_range_id may be set. */
		namedRangeId?: string | null;

		/** The ID of the protected range. This field is read-only. */
		protectedRangeId?: number | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** True if the user who requested this protected range can edit the protected area. This field is read-only. */
		requestingUserCanEdit?: boolean | null;

		/** The list of unprotected ranges within a protected sheet. Unprotected ranges are only supported on protected sheets. */
		unprotectedRanges?: Array<GridRange>;

		/** True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit. When writing: if this field is true, then editors are ignored. Additionally, if this field is changed from true to false and the `editors` field is not set (nor included in the field mask), then the editors will be set to all the editors in the document. */
		warningOnly?: boolean | null;
	}

	/** A protected range. */
	export interface ProtectedRangeFormProperties {

		/** The description of this protected range. */
		description: FormControl<string | null | undefined>,

		/** The named range this protected range is backed by, if any. When writing, only one of range or named_range_id may be set. */
		namedRangeId: FormControl<string | null | undefined>,

		/** The ID of the protected range. This field is read-only. */
		protectedRangeId: FormControl<number | null | undefined>,

		/** True if the user who requested this protected range can edit the protected area. This field is read-only. */
		requestingUserCanEdit: FormControl<boolean | null | undefined>,

		/** True if this protected range will show a warning when editing. Warning-based protection means that every user can edit data in the protected range, except editing will prompt a warning asking the user to confirm the edit. When writing: if this field is true, then editors are ignored. Additionally, if this field is changed from true to false and the `editors` field is not set (nor included in the field mask), then the editors will be set to all the editors in the document. */
		warningOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateProtectedRangeFormGroup() {
		return new FormGroup<ProtectedRangeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			namedRangeId: new FormControl<string | null | undefined>(undefined),
			protectedRangeId: new FormControl<number | null | undefined>(undefined),
			requestingUserCanEdit: new FormControl<boolean | null | undefined>(undefined),
			warningOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The editors of a protected range. */
	export interface Editors {

		/** True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on documents within a domain. */
		domainUsersCanEdit?: boolean | null;

		/** The email addresses of groups with edit access to the protected range. */
		groups?: Array<string>;

		/** The email addresses of users with edit access to the protected range. */
		users?: Array<string>;
	}

	/** The editors of a protected range. */
	export interface EditorsFormProperties {

		/** True if anyone in the document's domain has edit access to the protected range. Domain protection is only supported on documents within a domain. */
		domainUsersCanEdit: FormControl<boolean | null | undefined>,
	}
	export function CreateEditorsFormGroup() {
		return new FormGroup<EditorsFormProperties>({
			domainUsersCanEdit: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The result of adding a new protected range. */
	export interface AddProtectedRangeResponse {

		/** A protected range. */
		protectedRange?: ProtectedRange;
	}

	/** The result of adding a new protected range. */
	export interface AddProtectedRangeResponseFormProperties {
	}
	export function CreateAddProtectedRangeResponseFormGroup() {
		return new FormGroup<AddProtectedRangeResponseFormProperties>({
		});

	}


	/** Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet. */
	export interface AddSheetRequest {

		/** Properties of a sheet. */
		properties?: SheetProperties;
	}

	/** Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet. */
	export interface AddSheetRequestFormProperties {
	}
	export function CreateAddSheetRequestFormGroup() {
		return new FormGroup<AddSheetRequestFormProperties>({
		});

	}


	/** Properties of a sheet. */
	export interface SheetProperties {

		/** Additional properties of a DATA_SOURCE sheet. */
		dataSourceSheetProperties?: DataSourceSheetProperties;

		/** Properties of a grid. */
		gridProperties?: GridProperties;

		/** True if the sheet is hidden in the UI, false if it's visible. */
		hidden?: boolean | null;

		/** The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is considered in "before the move" indexes. For example, if there were three sheets (S1, S2, S3) in order to move S1 ahead of S2 the index would have to be set to 2. A sheet index update request is ignored if the requested index is identical to the sheets current index or if the requested new index is equal to the current sheet index + 1. */
		index?: number | null;

		/** True if the sheet is an RTL sheet instead of an LTR sheet. */
		rightToLeft?: boolean | null;

		/** The ID of the sheet. Must be non-negative. This field cannot be changed once set. */
		sheetId?: number | null;

		/** The type of sheet. Defaults to GRID. This field cannot be changed once set. */
		sheetType?: SheetPropertiesSheetType | null;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		tabColor?: Color;

		/** A color value. */
		tabColorStyle?: ColorStyle;

		/** The name of the sheet. */
		title?: string | null;
	}

	/** Properties of a sheet. */
	export interface SheetPropertiesFormProperties {

		/** True if the sheet is hidden in the UI, false if it's visible. */
		hidden: FormControl<boolean | null | undefined>,

		/** The index of the sheet within the spreadsheet. When adding or updating sheet properties, if this field is excluded then the sheet is added or moved to the end of the sheet list. When updating sheet indices or inserting sheets, movement is considered in "before the move" indexes. For example, if there were three sheets (S1, S2, S3) in order to move S1 ahead of S2 the index would have to be set to 2. A sheet index update request is ignored if the requested index is identical to the sheets current index or if the requested new index is equal to the current sheet index + 1. */
		index: FormControl<number | null | undefined>,

		/** True if the sheet is an RTL sheet instead of an LTR sheet. */
		rightToLeft: FormControl<boolean | null | undefined>,

		/** The ID of the sheet. Must be non-negative. This field cannot be changed once set. */
		sheetId: FormControl<number | null | undefined>,

		/** The type of sheet. Defaults to GRID. This field cannot be changed once set. */
		sheetType: FormControl<SheetPropertiesSheetType | null | undefined>,

		/** The name of the sheet. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSheetPropertiesFormGroup() {
		return new FormGroup<SheetPropertiesFormProperties>({
			hidden: new FormControl<boolean | null | undefined>(undefined),
			index: new FormControl<number | null | undefined>(undefined),
			rightToLeft: new FormControl<boolean | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
			sheetType: new FormControl<SheetPropertiesSheetType | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional properties of a DATA_SOURCE sheet. */
	export interface DataSourceSheetProperties {

		/** The columns displayed on the sheet, corresponding to the values in RowData. */
		columns?: Array<DataSourceColumn>;

		/** The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
		dataExecutionStatus?: DataExecutionStatus;

		/** ID of the DataSource the sheet is connected to. */
		dataSourceId?: string | null;
	}

	/** Additional properties of a DATA_SOURCE sheet. */
	export interface DataSourceSheetPropertiesFormProperties {

		/** ID of the DataSource the sheet is connected to. */
		dataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceSheetPropertiesFormGroup() {
		return new FormGroup<DataSourceSheetPropertiesFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a grid. */
	export interface GridProperties {

		/** The number of columns in the grid. */
		columnCount?: number | null;

		/** True if the column grouping control toggle is shown after the group. */
		columnGroupControlAfter?: boolean | null;

		/** The number of columns that are frozen in the grid. */
		frozenColumnCount?: number | null;

		/** The number of rows that are frozen in the grid. */
		frozenRowCount?: number | null;

		/** True if the grid isn't showing gridlines in the UI. */
		hideGridlines?: boolean | null;

		/** The number of rows in the grid. */
		rowCount?: number | null;

		/** True if the row grouping control toggle is shown after the group. */
		rowGroupControlAfter?: boolean | null;
	}

	/** Properties of a grid. */
	export interface GridPropertiesFormProperties {

		/** The number of columns in the grid. */
		columnCount: FormControl<number | null | undefined>,

		/** True if the column grouping control toggle is shown after the group. */
		columnGroupControlAfter: FormControl<boolean | null | undefined>,

		/** The number of columns that are frozen in the grid. */
		frozenColumnCount: FormControl<number | null | undefined>,

		/** The number of rows that are frozen in the grid. */
		frozenRowCount: FormControl<number | null | undefined>,

		/** True if the grid isn't showing gridlines in the UI. */
		hideGridlines: FormControl<boolean | null | undefined>,

		/** The number of rows in the grid. */
		rowCount: FormControl<number | null | undefined>,

		/** True if the row grouping control toggle is shown after the group. */
		rowGroupControlAfter: FormControl<boolean | null | undefined>,
	}
	export function CreateGridPropertiesFormGroup() {
		return new FormGroup<GridPropertiesFormProperties>({
			columnCount: new FormControl<number | null | undefined>(undefined),
			columnGroupControlAfter: new FormControl<boolean | null | undefined>(undefined),
			frozenColumnCount: new FormControl<number | null | undefined>(undefined),
			frozenRowCount: new FormControl<number | null | undefined>(undefined),
			hideGridlines: new FormControl<boolean | null | undefined>(undefined),
			rowCount: new FormControl<number | null | undefined>(undefined),
			rowGroupControlAfter: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum SheetPropertiesSheetType { SHEET_TYPE_UNSPECIFIED = 'SHEET_TYPE_UNSPECIFIED', GRID = 'GRID', OBJECT = 'OBJECT', DATA_SOURCE = 'DATA_SOURCE' }


	/** The result of adding a sheet. */
	export interface AddSheetResponse {

		/** Properties of a sheet. */
		properties?: SheetProperties;
	}

	/** The result of adding a sheet. */
	export interface AddSheetResponseFormProperties {
	}
	export function CreateAddSheetResponseFormGroup() {
		return new FormGroup<AddSheetResponseFormProperties>({
		});

	}


	/** Adds a slicer to a sheet in the spreadsheet. */
	export interface AddSlicerRequest {

		/** A slicer in a sheet. */
		slicer?: Slicer;
	}

	/** Adds a slicer to a sheet in the spreadsheet. */
	export interface AddSlicerRequestFormProperties {
	}
	export function CreateAddSlicerRequestFormGroup() {
		return new FormGroup<AddSlicerRequestFormProperties>({
		});

	}


	/** A slicer in a sheet. */
	export interface Slicer {

		/** The position of an embedded object such as a chart. */
		position?: EmbeddedObjectPosition;

		/** The ID of the slicer. */
		slicerId?: number | null;

		/** The specifications of a slicer. */
		spec?: SlicerSpec;
	}

	/** A slicer in a sheet. */
	export interface SlicerFormProperties {

		/** The ID of the slicer. */
		slicerId: FormControl<number | null | undefined>,
	}
	export function CreateSlicerFormGroup() {
		return new FormGroup<SlicerFormProperties>({
			slicerId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The specifications of a slicer. */
	export interface SlicerSpec {

		/** True if the filter should apply to pivot tables. If not set, default to `True`. */
		applyToPivotTables?: boolean | null;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		backgroundColor?: Color;

		/** A color value. */
		backgroundColorStyle?: ColorStyle;

		/** The zero-based column index in the data table on which the filter is applied to. */
		columnIndex?: number | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		dataRange?: GridRange;

		/** Criteria for showing/hiding rows in a filter or filter view. */
		filterCriteria?: FilterCriteria;

		/** The horizontal alignment of title in the slicer. If unspecified, defaults to `LEFT` */
		horizontalAlignment?: TextPositionHorizontalAlignment | null;

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		textFormat?: TextFormat;

		/** The title of the slicer. */
		title?: string | null;
	}

	/** The specifications of a slicer. */
	export interface SlicerSpecFormProperties {

		/** True if the filter should apply to pivot tables. If not set, default to `True`. */
		applyToPivotTables: FormControl<boolean | null | undefined>,

		/** The zero-based column index in the data table on which the filter is applied to. */
		columnIndex: FormControl<number | null | undefined>,

		/** The horizontal alignment of title in the slicer. If unspecified, defaults to `LEFT` */
		horizontalAlignment: FormControl<TextPositionHorizontalAlignment | null | undefined>,

		/** The title of the slicer. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSlicerSpecFormGroup() {
		return new FormGroup<SlicerSpecFormProperties>({
			applyToPivotTables: new FormControl<boolean | null | undefined>(undefined),
			columnIndex: new FormControl<number | null | undefined>(undefined),
			horizontalAlignment: new FormControl<TextPositionHorizontalAlignment | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of adding a slicer to a spreadsheet. */
	export interface AddSlicerResponse {

		/** A slicer in a sheet. */
		slicer?: Slicer;
	}

	/** The result of adding a slicer to a spreadsheet. */
	export interface AddSlicerResponseFormProperties {
	}
	export function CreateAddSlicerResponseFormGroup() {
		return new FormGroup<AddSlicerResponseFormProperties>({
		});

	}


	/** Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary. */
	export interface AppendCellsRequest {

		/** The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** The data to append. */
		rows?: Array<RowData>;

		/** The sheet ID to append the data to. */
		sheetId?: number | null;
	}

	/** Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary. */
	export interface AppendCellsRequestFormProperties {

		/** The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,

		/** The sheet ID to append the data to. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateAppendCellsRequestFormGroup() {
		return new FormGroup<AppendCellsRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Data about each cell in a row. */
	export interface RowData {

		/** The values in the row, one per column. */
		values?: Array<CellData>;
	}

	/** Data about each cell in a row. */
	export interface RowDataFormProperties {
	}
	export function CreateRowDataFormGroup() {
		return new FormGroup<RowDataFormProperties>({
		});

	}


	/** Data about a specific cell. */
	export interface CellData {

		/** A data source formula. */
		dataSourceFormula?: DataSourceFormula;

		/** A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor. */
		dataSourceTable?: DataSourceTable;

		/** A data validation rule. */
		dataValidation?: DataValidationRule;

		/** The format of a cell. */
		effectiveFormat?: CellFormat;

		/** The kinds of value that a cell in a spreadsheet can have. */
		effectiveValue?: ExtendedValue;

		/** The formatted value of the cell. This is the value as it's shown to the user. This field is read-only. */
		formattedValue?: string | null;

		/** A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a `=HYPERLINK` formula in the userEnteredValue.formulaValue field. A cell-level link can also be set from the userEnteredFormat.textFormat field. Alternatively, set a hyperlink in the textFormatRun.format.link field that spans the entire cell. */
		hyperlink?: string | null;

		/** Any note on the cell. */
		note?: string | null;

		/** A pivot table. */
		pivotTable?: PivotTable;

		/** Runs of rich text applied to subsections of the cell. Runs are only valid on user entered strings, not formulas, bools, or numbers. Properties of a run start at a specific index in the text and continue until the next run. Runs will inherit the properties of the cell unless explicitly changed. When writing, the new runs will overwrite any prior runs. When writing a new user_entered_value, previous runs are erased. */
		textFormatRuns?: Array<TextFormatRun>;

		/** The format of a cell. */
		userEnteredFormat?: CellFormat;

		/** The kinds of value that a cell in a spreadsheet can have. */
		userEnteredValue?: ExtendedValue;
	}

	/** Data about a specific cell. */
	export interface CellDataFormProperties {

		/** The formatted value of the cell. This is the value as it's shown to the user. This field is read-only. */
		formattedValue: FormControl<string | null | undefined>,

		/** A hyperlink this cell points to, if any. If the cell contains multiple hyperlinks, this field will be empty. This field is read-only. To set it, use a `=HYPERLINK` formula in the userEnteredValue.formulaValue field. A cell-level link can also be set from the userEnteredFormat.textFormat field. Alternatively, set a hyperlink in the textFormatRun.format.link field that spans the entire cell. */
		hyperlink: FormControl<string | null | undefined>,

		/** Any note on the cell. */
		note: FormControl<string | null | undefined>,
	}
	export function CreateCellDataFormGroup() {
		return new FormGroup<CellDataFormProperties>({
			formattedValue: new FormControl<string | null | undefined>(undefined),
			hyperlink: new FormControl<string | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data source formula. */
	export interface DataSourceFormula {

		/** The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
		dataExecutionStatus?: DataExecutionStatus;

		/** The ID of the data source the formula is associated with. */
		dataSourceId?: string | null;
	}

	/** A data source formula. */
	export interface DataSourceFormulaFormProperties {

		/** The ID of the data source the formula is associated with. */
		dataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceFormulaFormGroup() {
		return new FormGroup<DataSourceFormulaFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor. */
	export interface DataSourceTable {

		/** The type to select columns for the data source table. Defaults to SELECTED. */
		columnSelectionType?: DataSourceTableColumnSelectionType | null;

		/** Columns selected for the data source table. The column_selection_type must be SELECTED. */
		columns?: Array<DataSourceColumnReference>;

		/** The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
		dataExecutionStatus?: DataExecutionStatus;

		/** The ID of the data source the data source table is associated with. */
		dataSourceId?: string | null;

		/** Filter specifications in the data source table. */
		filterSpecs?: Array<FilterSpec>;

		/** The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit. */
		rowLimit?: number | null;

		/** Sort specifications in the data source table. The result of the data source table is sorted based on the sort specifications in order. */
		sortSpecs?: Array<SortSpec>;
	}

	/** A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as "Extract" in the Sheets editor. */
	export interface DataSourceTableFormProperties {

		/** The type to select columns for the data source table. Defaults to SELECTED. */
		columnSelectionType: FormControl<DataSourceTableColumnSelectionType | null | undefined>,

		/** The ID of the data source the data source table is associated with. */
		dataSourceId: FormControl<string | null | undefined>,

		/** The limit of rows to return. If not set, a default limit is applied. Please refer to the Sheets editor for the default and max limit. */
		rowLimit: FormControl<number | null | undefined>,
	}
	export function CreateDataSourceTableFormGroup() {
		return new FormGroup<DataSourceTableFormProperties>({
			columnSelectionType: new FormControl<DataSourceTableColumnSelectionType | null | undefined>(undefined),
			dataSourceId: new FormControl<string | null | undefined>(undefined),
			rowLimit: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum DataSourceTableColumnSelectionType { DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED = 'DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED', SELECTED = 'SELECTED', SYNC_ALL = 'SYNC_ALL' }


	/** A data validation rule. */
	export interface DataValidationRule {

		/** A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters. */
		condition?: BooleanCondition;

		/** A message to show the user when adding data to the cell. */
		inputMessage?: string | null;

		/** True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown. */
		showCustomUi?: boolean | null;

		/** True if invalid data should be rejected. */
		strict?: boolean | null;
	}

	/** A data validation rule. */
	export interface DataValidationRuleFormProperties {

		/** A message to show the user when adding data to the cell. */
		inputMessage: FormControl<string | null | undefined>,

		/** True if the UI should be customized based on the kind of condition. If true, "List" conditions will show a dropdown. */
		showCustomUi: FormControl<boolean | null | undefined>,

		/** True if invalid data should be rejected. */
		strict: FormControl<boolean | null | undefined>,
	}
	export function CreateDataValidationRuleFormGroup() {
		return new FormGroup<DataValidationRuleFormProperties>({
			inputMessage: new FormControl<string | null | undefined>(undefined),
			showCustomUi: new FormControl<boolean | null | undefined>(undefined),
			strict: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The kinds of value that a cell in a spreadsheet can have. */
	export interface ExtendedValue {

		/** Represents a boolean value. */
		boolValue?: boolean | null;

		/** An error in a cell. */
		errorValue?: ErrorValue;

		/** Represents a formula. */
		formulaValue?: string | null;

		/** Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in SERIAL_NUMBER format. */
		numberValue?: number | null;

		/** Represents a string value. Leading single quotes are not included. For example, if the user typed `'123` into the UI, this would be represented as a `stringValue` of `"123"`. */
		stringValue?: string | null;
	}

	/** The kinds of value that a cell in a spreadsheet can have. */
	export interface ExtendedValueFormProperties {

		/** Represents a boolean value. */
		boolValue: FormControl<boolean | null | undefined>,

		/** Represents a formula. */
		formulaValue: FormControl<string | null | undefined>,

		/** Represents a double value. Note: Dates, Times and DateTimes are represented as doubles in SERIAL_NUMBER format. */
		numberValue: FormControl<number | null | undefined>,

		/** Represents a string value. Leading single quotes are not included. For example, if the user typed `'123` into the UI, this would be represented as a `stringValue` of `"123"`. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateExtendedValueFormGroup() {
		return new FormGroup<ExtendedValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			formulaValue: new FormControl<string | null | undefined>(undefined),
			numberValue: new FormControl<number | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error in a cell. */
	export interface ErrorValue {

		/** A message with more information about the error (in the spreadsheet's locale). */
		message?: string | null;

		/** The type of error. */
		type?: ErrorValueType | null;
	}

	/** An error in a cell. */
	export interface ErrorValueFormProperties {

		/** A message with more information about the error (in the spreadsheet's locale). */
		message: FormControl<string | null | undefined>,

		/** The type of error. */
		type: FormControl<ErrorValueType | null | undefined>,
	}
	export function CreateErrorValueFormGroup() {
		return new FormGroup<ErrorValueFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ErrorValueType | null | undefined>(undefined),
		});

	}

	export enum ErrorValueType { ERROR_TYPE_UNSPECIFIED = 'ERROR_TYPE_UNSPECIFIED', ERROR = 'ERROR', NULL_VALUE = 'NULL_VALUE', DIVIDE_BY_ZERO = 'DIVIDE_BY_ZERO', VALUE = 'VALUE', REF = 'REF', NAME = 'NAME', NUM = 'NUM', N_A = 'N_A', LOADING = 'LOADING' }


	/** A pivot table. */
	export interface PivotTable {

		/** Each column grouping in the pivot table. */
		columns?: Array<PivotGroup>;

		/** An optional mapping of filters per source column offset. The filters are applied before aggregating data into the pivot table. The map's key is the column offset of the source range that you want to filter, and the value is the criteria for that column. For example, if the source was `C10:E15`, a key of `0` will have the filter for column `C`, whereas the key `1` is for column `D`. This field is deprecated in favor of filter_specs. */
		criteria?: {[id: string]: PivotFilterCriteria };

		/** The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
		dataExecutionStatus?: DataExecutionStatus;

		/** The ID of the data source the pivot table is reading data from. */
		dataSourceId?: string | null;

		/** The filters applied to the source columns before aggregating data for the pivot table. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. */
		filterSpecs?: Array<PivotFilterSpec>;

		/** Each row grouping in the pivot table. */
		rows?: Array<PivotGroup>;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		source?: GridRange;

		/** Whether values should be listed horizontally (as columns) or vertically (as rows). */
		valueLayout?: PivotTableValueLayout | null;

		/** A list of values to include in the pivot table. */
		values?: Array<PivotValue>;
	}

	/** A pivot table. */
	export interface PivotTableFormProperties {

		/** An optional mapping of filters per source column offset. The filters are applied before aggregating data into the pivot table. The map's key is the column offset of the source range that you want to filter, and the value is the criteria for that column. For example, if the source was `C10:E15`, a key of `0` will have the filter for column `C`, whereas the key `1` is for column `D`. This field is deprecated in favor of filter_specs. */
		criteria: FormControl<{[id: string]: PivotFilterCriteria } | null | undefined>,

		/** The ID of the data source the pivot table is reading data from. */
		dataSourceId: FormControl<string | null | undefined>,

		/** Whether values should be listed horizontally (as columns) or vertically (as rows). */
		valueLayout: FormControl<PivotTableValueLayout | null | undefined>,
	}
	export function CreatePivotTableFormGroup() {
		return new FormGroup<PivotTableFormProperties>({
			criteria: new FormControl<{[id: string]: PivotFilterCriteria } | null | undefined>(undefined),
			dataSourceId: new FormControl<string | null | undefined>(undefined),
			valueLayout: new FormControl<PivotTableValueLayout | null | undefined>(undefined),
		});

	}


	/** A single grouping (either row or column) in a pivot table. */
	export interface PivotGroup {

		/** An unique identifier that references a data source column. */
		dataSourceColumnReference?: DataSourceColumnReference;

		/** The count limit on rows or columns in the pivot group. */
		groupLimit?: PivotGroupLimit;

		/** An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not. */
		groupRule?: PivotGroupRule;

		/** The labels to use for the row/column groups which can be customized. For example, in the following pivot table, the row label is `Region` (which could be renamed to `State`) and the column label is `Product` (which could be renamed `Item`). Pivot tables created before December 2017 do not have header labels. If you'd like to add header labels to an existing pivot table, please delete the existing pivot table and then create a new pivot table with same parameters. +--------------+---------+-------+ | SUM of Units | Product | | | Region | Pen | Paper | +--------------+---------+-------+ | New York | 345 | 98 | | Oregon | 234 | 123 | | Tennessee | 531 | 415 | +--------------+---------+-------+ | Grand Total | 1110 | 636 | +--------------+---------+-------+ */
		label?: string | null;

		/** True if the headings in this pivot group should be repeated. This is only valid for row groupings and is ignored by columns. By default, we minimize repetition of headings by not showing higher level headings where they are the same. For example, even though the third row below corresponds to "Q1 Mar", "Q1" is not shown because it is redundant with previous rows. Setting repeat_headings to true would cause "Q1" to be repeated for "Feb" and "Mar". +--------------+ | Q1 | Jan | | | Feb | | | Mar | +--------+-----+ | Q1 Total | +--------------+ */
		repeatHeadings?: boolean | null;

		/** True if the pivot table should include the totals for this grouping. */
		showTotals?: boolean | null;

		/** The order the values in this group should be sorted. */
		sortOrder?: SortSpecSortOrder | null;

		/** The column offset of the source range that this grouping is based on. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this group refers to column `C`, whereas the offset `1` would refer to column `D`. */
		sourceColumnOffset?: number | null;

		/** Information about which values in a pivot group should be used for sorting. */
		valueBucket?: PivotGroupSortValueBucket;

		/** Metadata about values in the grouping. */
		valueMetadata?: Array<PivotGroupValueMetadata>;
	}

	/** A single grouping (either row or column) in a pivot table. */
	export interface PivotGroupFormProperties {

		/** The labels to use for the row/column groups which can be customized. For example, in the following pivot table, the row label is `Region` (which could be renamed to `State`) and the column label is `Product` (which could be renamed `Item`). Pivot tables created before December 2017 do not have header labels. If you'd like to add header labels to an existing pivot table, please delete the existing pivot table and then create a new pivot table with same parameters. +--------------+---------+-------+ | SUM of Units | Product | | | Region | Pen | Paper | +--------------+---------+-------+ | New York | 345 | 98 | | Oregon | 234 | 123 | | Tennessee | 531 | 415 | +--------------+---------+-------+ | Grand Total | 1110 | 636 | +--------------+---------+-------+ */
		label: FormControl<string | null | undefined>,

		/** True if the headings in this pivot group should be repeated. This is only valid for row groupings and is ignored by columns. By default, we minimize repetition of headings by not showing higher level headings where they are the same. For example, even though the third row below corresponds to "Q1 Mar", "Q1" is not shown because it is redundant with previous rows. Setting repeat_headings to true would cause "Q1" to be repeated for "Feb" and "Mar". +--------------+ | Q1 | Jan | | | Feb | | | Mar | +--------+-----+ | Q1 Total | +--------------+ */
		repeatHeadings: FormControl<boolean | null | undefined>,

		/** True if the pivot table should include the totals for this grouping. */
		showTotals: FormControl<boolean | null | undefined>,

		/** The order the values in this group should be sorted. */
		sortOrder: FormControl<SortSpecSortOrder | null | undefined>,

		/** The column offset of the source range that this grouping is based on. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this group refers to column `C`, whereas the offset `1` would refer to column `D`. */
		sourceColumnOffset: FormControl<number | null | undefined>,
	}
	export function CreatePivotGroupFormGroup() {
		return new FormGroup<PivotGroupFormProperties>({
			label: new FormControl<string | null | undefined>(undefined),
			repeatHeadings: new FormControl<boolean | null | undefined>(undefined),
			showTotals: new FormControl<boolean | null | undefined>(undefined),
			sortOrder: new FormControl<SortSpecSortOrder | null | undefined>(undefined),
			sourceColumnOffset: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The count limit on rows or columns in the pivot group. */
	export interface PivotGroupLimit {

		/** The order in which the group limit is applied to the pivot table. Pivot group limits are applied from lower to higher order number. Order numbers are normalized to consecutive integers from 0. For write request, to fully customize the applying orders, all pivot group limits should have this field set with an unique number. Otherwise, the order is determined by the index in the PivotTable.rows list and then the PivotTable.columns list. */
		applyOrder?: number | null;

		/** The count limit. */
		countLimit?: number | null;
	}

	/** The count limit on rows or columns in the pivot group. */
	export interface PivotGroupLimitFormProperties {

		/** The order in which the group limit is applied to the pivot table. Pivot group limits are applied from lower to higher order number. Order numbers are normalized to consecutive integers from 0. For write request, to fully customize the applying orders, all pivot group limits should have this field set with an unique number. Otherwise, the order is determined by the index in the PivotTable.rows list and then the PivotTable.columns list. */
		applyOrder: FormControl<number | null | undefined>,

		/** The count limit. */
		countLimit: FormControl<number | null | undefined>,
	}
	export function CreatePivotGroupLimitFormGroup() {
		return new FormGroup<PivotGroupLimitFormProperties>({
			applyOrder: new FormControl<number | null | undefined>(undefined),
			countLimit: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not. */
	export interface PivotGroupRule {

		/** Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+ */
		dateTimeRule?: DateTimeRule;

		/** Allows you to organize the numeric values in a source data column into buckets of a constant size. All values from HistogramRule.start to HistogramRule.end are placed into groups of size HistogramRule.interval. In addition, all values below HistogramRule.start are placed in one group, and all values above HistogramRule.end are placed in another. Only HistogramRule.interval is required, though if HistogramRule.start and HistogramRule.end are both provided, HistogramRule.start must be less than HistogramRule.end. For example, a pivot table showing average purchase amount by age that has 50+ rows: +-----+-------------------+ | Age | AVERAGE of Amount | +-----+-------------------+ | 16 | $27.13 | | 17 | $5.24 | | 18 | $20.15 | ... +-----+-------------------+ could be turned into a pivot table that looks like the one below by applying a histogram group rule with a HistogramRule.start of 25, an HistogramRule.interval of 20, and an HistogramRule.end of 65. +-------------+-------------------+ | Grouped Age | AVERAGE of Amount | +-------------+-------------------+ | < 25 | $19.34 | | 25-45 | $31.43 | | 45-65 | $35.87 | | > 65 | $27.55 | +-------------+-------------------+ | Grand Total | $29.12 | +-------------+-------------------+ */
		histogramRule?: HistogramRule;

		/** Allows you to manually organize the values in a source data column into buckets with names of your choosing. For example, a pivot table that aggregates population by state: +-------+-------------------+ | State | SUM of Population | +-------+-------------------+ | AK | 0.7 | | AL | 4.8 | | AR | 2.9 | ... +-------+-------------------+ could be turned into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName = 'Central', items = ['AL', 'AR', 'IA', ...]) to a manual group rule. Note that a similar effect could be achieved by adding a time zone column to the source data and adjusting the pivot table. +-----------+-------------------+ | Time Zone | SUM of Population | +-----------+-------------------+ | Central | 106.3 | | Eastern | 151.9 | | Mountain | 17.4 | ... +-----------+-------------------+ */
		manualRule?: ManualRule;
	}

	/** An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not. */
	export interface PivotGroupRuleFormProperties {
	}
	export function CreatePivotGroupRuleFormGroup() {
		return new FormGroup<PivotGroupRuleFormProperties>({
		});

	}


	/** Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+ */
	export interface DateTimeRule {

		/** The type of date-time grouping to apply. */
		type?: DateTimeRuleType | null;
	}

	/** Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+ */
	export interface DateTimeRuleFormProperties {

		/** The type of date-time grouping to apply. */
		type: FormControl<DateTimeRuleType | null | undefined>,
	}
	export function CreateDateTimeRuleFormGroup() {
		return new FormGroup<DateTimeRuleFormProperties>({
			type: new FormControl<DateTimeRuleType | null | undefined>(undefined),
		});

	}

	export enum DateTimeRuleType { DATE_TIME_RULE_TYPE_UNSPECIFIED = 'DATE_TIME_RULE_TYPE_UNSPECIFIED', SECOND = 'SECOND', MINUTE = 'MINUTE', HOUR = 'HOUR', HOUR_MINUTE = 'HOUR_MINUTE', HOUR_MINUTE_AMPM = 'HOUR_MINUTE_AMPM', DAY_OF_WEEK = 'DAY_OF_WEEK', DAY_OF_YEAR = 'DAY_OF_YEAR', DAY_OF_MONTH = 'DAY_OF_MONTH', DAY_MONTH = 'DAY_MONTH', MONTH = 'MONTH', QUARTER = 'QUARTER', YEAR = 'YEAR', YEAR_MONTH = 'YEAR_MONTH', YEAR_QUARTER = 'YEAR_QUARTER', YEAR_MONTH_DAY = 'YEAR_MONTH_DAY' }


	/** Allows you to organize the numeric values in a source data column into buckets of a constant size. All values from HistogramRule.start to HistogramRule.end are placed into groups of size HistogramRule.interval. In addition, all values below HistogramRule.start are placed in one group, and all values above HistogramRule.end are placed in another. Only HistogramRule.interval is required, though if HistogramRule.start and HistogramRule.end are both provided, HistogramRule.start must be less than HistogramRule.end. For example, a pivot table showing average purchase amount by age that has 50+ rows: +-----+-------------------+ | Age | AVERAGE of Amount | +-----+-------------------+ | 16 | $27.13 | | 17 | $5.24 | | 18 | $20.15 | ... +-----+-------------------+ could be turned into a pivot table that looks like the one below by applying a histogram group rule with a HistogramRule.start of 25, an HistogramRule.interval of 20, and an HistogramRule.end of 65. +-------------+-------------------+ | Grouped Age | AVERAGE of Amount | +-------------+-------------------+ | < 25 | $19.34 | | 25-45 | $31.43 | | 45-65 | $35.87 | | > 65 | $27.55 | +-------------+-------------------+ | Grand Total | $29.12 | +-------------+-------------------+ */
	export interface HistogramRule {

		/** The maximum value at which items are placed into buckets of constant size. Values above end are lumped into a single bucket. This field is optional. */
		end?: number | null;

		/** The size of the buckets that are created. Must be positive. */
		interval?: number | null;

		/** The minimum value at which items are placed into buckets of constant size. Values below start are lumped into a single bucket. This field is optional. */
		start?: number | null;
	}

	/** Allows you to organize the numeric values in a source data column into buckets of a constant size. All values from HistogramRule.start to HistogramRule.end are placed into groups of size HistogramRule.interval. In addition, all values below HistogramRule.start are placed in one group, and all values above HistogramRule.end are placed in another. Only HistogramRule.interval is required, though if HistogramRule.start and HistogramRule.end are both provided, HistogramRule.start must be less than HistogramRule.end. For example, a pivot table showing average purchase amount by age that has 50+ rows: +-----+-------------------+ | Age | AVERAGE of Amount | +-----+-------------------+ | 16 | $27.13 | | 17 | $5.24 | | 18 | $20.15 | ... +-----+-------------------+ could be turned into a pivot table that looks like the one below by applying a histogram group rule with a HistogramRule.start of 25, an HistogramRule.interval of 20, and an HistogramRule.end of 65. +-------------+-------------------+ | Grouped Age | AVERAGE of Amount | +-------------+-------------------+ | < 25 | $19.34 | | 25-45 | $31.43 | | 45-65 | $35.87 | | > 65 | $27.55 | +-------------+-------------------+ | Grand Total | $29.12 | +-------------+-------------------+ */
	export interface HistogramRuleFormProperties {

		/** The maximum value at which items are placed into buckets of constant size. Values above end are lumped into a single bucket. This field is optional. */
		end: FormControl<number | null | undefined>,

		/** The size of the buckets that are created. Must be positive. */
		interval: FormControl<number | null | undefined>,

		/** The minimum value at which items are placed into buckets of constant size. Values below start are lumped into a single bucket. This field is optional. */
		start: FormControl<number | null | undefined>,
	}
	export function CreateHistogramRuleFormGroup() {
		return new FormGroup<HistogramRuleFormProperties>({
			end: new FormControl<number | null | undefined>(undefined),
			interval: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Allows you to manually organize the values in a source data column into buckets with names of your choosing. For example, a pivot table that aggregates population by state: +-------+-------------------+ | State | SUM of Population | +-------+-------------------+ | AK | 0.7 | | AL | 4.8 | | AR | 2.9 | ... +-------+-------------------+ could be turned into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName = 'Central', items = ['AL', 'AR', 'IA', ...]) to a manual group rule. Note that a similar effect could be achieved by adding a time zone column to the source data and adjusting the pivot table. +-----------+-------------------+ | Time Zone | SUM of Population | +-----------+-------------------+ | Central | 106.3 | | Eastern | 151.9 | | Mountain | 17.4 | ... +-----------+-------------------+ */
	export interface ManualRule {

		/** The list of group names and the corresponding items from the source data that map to each group name. */
		groups?: Array<ManualRuleGroup>;
	}

	/** Allows you to manually organize the values in a source data column into buckets with names of your choosing. For example, a pivot table that aggregates population by state: +-------+-------------------+ | State | SUM of Population | +-------+-------------------+ | AK | 0.7 | | AL | 4.8 | | AR | 2.9 | ... +-------+-------------------+ could be turned into a pivot table that aggregates population by time zone by providing a list of groups (for example, groupName = 'Central', items = ['AL', 'AR', 'IA', ...]) to a manual group rule. Note that a similar effect could be achieved by adding a time zone column to the source data and adjusting the pivot table. +-----------+-------------------+ | Time Zone | SUM of Population | +-----------+-------------------+ | Central | 106.3 | | Eastern | 151.9 | | Mountain | 17.4 | ... +-----------+-------------------+ */
	export interface ManualRuleFormProperties {
	}
	export function CreateManualRuleFormGroup() {
		return new FormGroup<ManualRuleFormProperties>({
		});

	}


	/** A group name and a list of items from the source data that should be placed in the group with this name. */
	export interface ManualRuleGroup {

		/** The kinds of value that a cell in a spreadsheet can have. */
		groupName?: ExtendedValue;

		/** The items in the source data that should be placed into this group. Each item may be a string, number, or boolean. Items may appear in at most one group within a given ManualRule. Items that do not appear in any group will appear on their own. */
		items?: Array<ExtendedValue>;
	}

	/** A group name and a list of items from the source data that should be placed in the group with this name. */
	export interface ManualRuleGroupFormProperties {
	}
	export function CreateManualRuleGroupFormGroup() {
		return new FormGroup<ManualRuleGroupFormProperties>({
		});

	}


	/** Information about which values in a pivot group should be used for sorting. */
	export interface PivotGroupSortValueBucket {

		/** Determines the bucket from which values are chosen to sort. For example, in a pivot table with one row group & two column groups, the row group can list up to two values. The first value corresponds to a value within the first column group, and the second value corresponds to a value in the second column group. If no values are listed, this would indicate that the row should be sorted according to the "Grand Total" over the column groups. If a single value is listed, this would correspond to using the "Total" of that bucket. */
		buckets?: Array<ExtendedValue>;

		/** The offset in the PivotTable.values list which the values in this grouping should be sorted by. */
		valuesIndex?: number | null;
	}

	/** Information about which values in a pivot group should be used for sorting. */
	export interface PivotGroupSortValueBucketFormProperties {

		/** The offset in the PivotTable.values list which the values in this grouping should be sorted by. */
		valuesIndex: FormControl<number | null | undefined>,
	}
	export function CreatePivotGroupSortValueBucketFormGroup() {
		return new FormGroup<PivotGroupSortValueBucketFormProperties>({
			valuesIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Metadata about a value in a pivot grouping. */
	export interface PivotGroupValueMetadata {

		/** True if the data corresponding to the value is collapsed. */
		collapsed?: boolean | null;

		/** The kinds of value that a cell in a spreadsheet can have. */
		value?: ExtendedValue;
	}

	/** Metadata about a value in a pivot grouping. */
	export interface PivotGroupValueMetadataFormProperties {

		/** True if the data corresponding to the value is collapsed. */
		collapsed: FormControl<boolean | null | undefined>,
	}
	export function CreatePivotGroupValueMetadataFormGroup() {
		return new FormGroup<PivotGroupValueMetadataFormProperties>({
			collapsed: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Criteria for showing/hiding rows in a pivot table. */
	export interface PivotFilterCriteria {

		/** A condition that can evaluate to true or false. BooleanConditions are used by conditional formatting, data validation, and the criteria in filters. */
		condition?: BooleanCondition;

		/** Whether values are visible by default. If true, the visible_values are ignored, all values that meet condition (if specified) are shown. If false, values that are both in visible_values and meet condition are shown. */
		visibleByDefault?: boolean | null;

		/** Values that should be included. Values not listed here are excluded. */
		visibleValues?: Array<string>;
	}

	/** Criteria for showing/hiding rows in a pivot table. */
	export interface PivotFilterCriteriaFormProperties {

		/** Whether values are visible by default. If true, the visible_values are ignored, all values that meet condition (if specified) are shown. If false, values that are both in visible_values and meet condition are shown. */
		visibleByDefault: FormControl<boolean | null | undefined>,
	}
	export function CreatePivotFilterCriteriaFormGroup() {
		return new FormGroup<PivotFilterCriteriaFormProperties>({
			visibleByDefault: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The pivot table filter criteria associated with a specific source column offset. */
	export interface PivotFilterSpec {

		/** The zero-based column offset of the source range. */
		columnOffsetIndex?: number | null;

		/** An unique identifier that references a data source column. */
		dataSourceColumnReference?: DataSourceColumnReference;

		/** Criteria for showing/hiding rows in a pivot table. */
		filterCriteria?: PivotFilterCriteria;
	}

	/** The pivot table filter criteria associated with a specific source column offset. */
	export interface PivotFilterSpecFormProperties {

		/** The zero-based column offset of the source range. */
		columnOffsetIndex: FormControl<number | null | undefined>,
	}
	export function CreatePivotFilterSpecFormGroup() {
		return new FormGroup<PivotFilterSpecFormProperties>({
			columnOffsetIndex: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PivotTableValueLayout { HORIZONTAL = 'HORIZONTAL', VERTICAL = 'VERTICAL' }


	/** The definition of how a value in a pivot table should be calculated. */
	export interface PivotValue {

		/** If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this is referred to as "Show As" in the value section of a pivot table. */
		calculatedDisplayType?: PivotValueCalculatedDisplayType | null;

		/** An unique identifier that references a data source column. */
		dataSourceColumnReference?: DataSourceColumnReference;

		/** A custom formula to calculate the value. The formula must start with an `=` character. */
		formula?: string | null;

		/** A name to use for the value. */
		name?: string | null;

		/** The column offset of the source range that this value reads from. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this value refers to column `C`, whereas the offset `1` would refer to column `D`. */
		sourceColumnOffset?: number | null;

		/** A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If sourceColumnOffset is set, then `CUSTOM` is not supported. */
		summarizeFunction?: PivotValueSummarizeFunction | null;
	}

	/** The definition of how a value in a pivot table should be calculated. */
	export interface PivotValueFormProperties {

		/** If specified, indicates that pivot values should be displayed as the result of a calculation with another pivot value. For example, if calculated_display_type is specified as PERCENT_OF_GRAND_TOTAL, all the pivot values are displayed as the percentage of the grand total. In the Sheets editor, this is referred to as "Show As" in the value section of a pivot table. */
		calculatedDisplayType: FormControl<PivotValueCalculatedDisplayType | null | undefined>,

		/** A custom formula to calculate the value. The formula must start with an `=` character. */
		formula: FormControl<string | null | undefined>,

		/** A name to use for the value. */
		name: FormControl<string | null | undefined>,

		/** The column offset of the source range that this value reads from. For example, if the source was `C10:E15`, a `sourceColumnOffset` of `0` means this value refers to column `C`, whereas the offset `1` would refer to column `D`. */
		sourceColumnOffset: FormControl<number | null | undefined>,

		/** A function to summarize the value. If formula is set, the only supported values are SUM and CUSTOM. If sourceColumnOffset is set, then `CUSTOM` is not supported. */
		summarizeFunction: FormControl<PivotValueSummarizeFunction | null | undefined>,
	}
	export function CreatePivotValueFormGroup() {
		return new FormGroup<PivotValueFormProperties>({
			calculatedDisplayType: new FormControl<PivotValueCalculatedDisplayType | null | undefined>(undefined),
			formula: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sourceColumnOffset: new FormControl<number | null | undefined>(undefined),
			summarizeFunction: new FormControl<PivotValueSummarizeFunction | null | undefined>(undefined),
		});

	}

	export enum PivotValueCalculatedDisplayType { PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED = 'PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED', PERCENT_OF_ROW_TOTAL = 'PERCENT_OF_ROW_TOTAL', PERCENT_OF_COLUMN_TOTAL = 'PERCENT_OF_COLUMN_TOTAL', PERCENT_OF_GRAND_TOTAL = 'PERCENT_OF_GRAND_TOTAL' }

	export enum PivotValueSummarizeFunction { PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED = 'PIVOT_STANDARD_VALUE_FUNCTION_UNSPECIFIED', SUM = 'SUM', COUNTA = 'COUNTA', COUNT = 'COUNT', COUNTUNIQUE = 'COUNTUNIQUE', AVERAGE = 'AVERAGE', MAX = 'MAX', MIN = 'MIN', MEDIAN = 'MEDIAN', PRODUCT = 'PRODUCT', STDEV = 'STDEV', STDEVP = 'STDEVP', VAR = 'VAR', VARP = 'VARP', CUSTOM = 'CUSTOM' }


	/** A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set. */
	export interface TextFormatRun {

		/** The format of a run of text in a cell. Absent values indicate that the field isn't specified. */
		format?: TextFormat;

		/** The zero-based character index where this run starts, in UTF-16 code units. */
		startIndex?: number | null;
	}

	/** A run of a text format. The format of this run continues until the start index of the next run. When updating, all fields must be set. */
	export interface TextFormatRunFormProperties {

		/** The zero-based character index where this run starts, in UTF-16 code units. */
		startIndex: FormControl<number | null | undefined>,
	}
	export function CreateTextFormatRunFormGroup() {
		return new FormGroup<TextFormatRunFormProperties>({
			startIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Appends rows or columns to the end of a sheet. */
	export interface AppendDimensionRequest {

		/** Whether rows or columns should be appended. */
		dimension?: DimensionRangeDimension | null;

		/** The number of rows or columns to append. */
		length?: number | null;

		/** The sheet to append rows or columns to. */
		sheetId?: number | null;
	}

	/** Appends rows or columns to the end of a sheet. */
	export interface AppendDimensionRequestFormProperties {

		/** Whether rows or columns should be appended. */
		dimension: FormControl<DimensionRangeDimension | null | undefined>,

		/** The number of rows or columns to append. */
		length: FormControl<number | null | undefined>,

		/** The sheet to append rows or columns to. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateAppendDimensionRequestFormGroup() {
		return new FormGroup<AppendDimensionRequestFormProperties>({
			dimension: new FormControl<DimensionRangeDimension | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response when updating a range of values in a spreadsheet. */
	export interface AppendValuesResponse {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string | null;

		/** The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found. */
		tableRange?: string | null;

		/** The response when updating a range of values in a spreadsheet. */
		updates?: UpdateValuesResponse;
	}

	/** The response when updating a range of values in a spreadsheet. */
	export interface AppendValuesResponseFormProperties {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId: FormControl<string | null | undefined>,

		/** The range (in A1 notation) of the table that values are being appended to (before the values were appended). Empty if no table was found. */
		tableRange: FormControl<string | null | undefined>,
	}
	export function CreateAppendValuesResponseFormGroup() {
		return new FormGroup<AppendValuesResponseFormProperties>({
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
			tableRange: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response when updating a range of values in a spreadsheet. */
	export interface UpdateValuesResponse {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string | null;

		/** The number of cells updated. */
		updatedCells?: number | null;

		/** The number of columns where at least one cell in the column was updated. */
		updatedColumns?: number | null;

		/** Data within a range of the spreadsheet. */
		updatedData?: ValueRange;

		/** The range (in A1 notation) that updates were applied to. */
		updatedRange?: string | null;

		/** The number of rows where at least one cell in the row was updated. */
		updatedRows?: number | null;
	}

	/** The response when updating a range of values in a spreadsheet. */
	export interface UpdateValuesResponseFormProperties {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId: FormControl<string | null | undefined>,

		/** The number of cells updated. */
		updatedCells: FormControl<number | null | undefined>,

		/** The number of columns where at least one cell in the column was updated. */
		updatedColumns: FormControl<number | null | undefined>,

		/** The range (in A1 notation) that updates were applied to. */
		updatedRange: FormControl<string | null | undefined>,

		/** The number of rows where at least one cell in the row was updated. */
		updatedRows: FormControl<number | null | undefined>,
	}
	export function CreateUpdateValuesResponseFormGroup() {
		return new FormGroup<UpdateValuesResponseFormProperties>({
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
			updatedCells: new FormControl<number | null | undefined>(undefined),
			updatedColumns: new FormControl<number | null | undefined>(undefined),
			updatedRange: new FormControl<string | null | undefined>(undefined),
			updatedRows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Data within a range of the spreadsheet. */
	export interface ValueRange {

		/** The major dimension of the values. For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`. For input, with `range=A1:B2,majorDimension=ROWS` then `[[1,2],[3,4]]` will set `A1=1,B1=2,A2=3,B2=4`. With `range=A1:B2,majorDimension=COLUMNS` then `[[1,2],[3,4]]` will set `A1=1,B1=3,A2=2,B2=4`. When writing, if this field is not set, it defaults to ROWS. */
		majorDimension?: DimensionRangeDimension | null;

		/** The range the values cover, in [A1 notation](/sheets/api/guides/concepts#cell). For output, this range indicates the entire requested range, even though the values will exclude trailing rows and columns. When appending values, this field represents the range to search for a table, after which values will be appended. */
		range?: string | null;

		/** The data that was read or to be written. This is an array of arrays, the outer array representing all the data and each inner array representing a major dimension. Each item in the inner array corresponds with one cell. For output, empty trailing rows and columns will not be included. For input, supported value types are: bool, string, and double. Null values will be skipped. To set a cell to an empty value, set the string value to an empty string. */
		values?: Array<string>;
	}

	/** Data within a range of the spreadsheet. */
	export interface ValueRangeFormProperties {

		/** The major dimension of the values. For output, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=A1:B2,majorDimension=ROWS` will return `[[1,2],[3,4]]`, whereas requesting `range=A1:B2,majorDimension=COLUMNS` will return `[[1,3],[2,4]]`. For input, with `range=A1:B2,majorDimension=ROWS` then `[[1,2],[3,4]]` will set `A1=1,B1=2,A2=3,B2=4`. With `range=A1:B2,majorDimension=COLUMNS` then `[[1,2],[3,4]]` will set `A1=1,B1=3,A2=2,B2=4`. When writing, if this field is not set, it defaults to ROWS. */
		majorDimension: FormControl<DimensionRangeDimension | null | undefined>,

		/** The range the values cover, in [A1 notation](/sheets/api/guides/concepts#cell). For output, this range indicates the entire requested range, even though the values will exclude trailing rows and columns. When appending values, this field represents the range to search for a table, after which values will be appended. */
		range: FormControl<string | null | undefined>,
	}
	export function CreateValueRangeFormGroup() {
		return new FormGroup<ValueRangeFormProperties>({
			majorDimension: new FormControl<DimensionRangeDimension | null | undefined>(undefined),
			range: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Fills in more data based on existing data. */
	export interface AutoFillRequest {

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** A combination of a source range and how to extend that source. */
		sourceAndDestination?: SourceAndDestination;

		/** True if we should generate data with the "alternate" series. This differs based on the type and amount of source data. */
		useAlternateSeries?: boolean | null;
	}

	/** Fills in more data based on existing data. */
	export interface AutoFillRequestFormProperties {

		/** True if we should generate data with the "alternate" series. This differs based on the type and amount of source data. */
		useAlternateSeries: FormControl<boolean | null | undefined>,
	}
	export function CreateAutoFillRequestFormGroup() {
		return new FormGroup<AutoFillRequestFormProperties>({
			useAlternateSeries: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A combination of a source range and how to extend that source. */
	export interface SourceAndDestination {

		/** The dimension that data should be filled into. */
		dimension?: DimensionRangeDimension | null;

		/** The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last column of the source. Negative numbers expand before the first row or first column of the source. */
		fillLength?: number | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		source?: GridRange;
	}

	/** A combination of a source range and how to extend that source. */
	export interface SourceAndDestinationFormProperties {

		/** The dimension that data should be filled into. */
		dimension: FormControl<DimensionRangeDimension | null | undefined>,

		/** The number of rows or columns that data should be filled into. Positive numbers expand beyond the last row or last column of the source. Negative numbers expand before the first row or first column of the source. */
		fillLength: FormControl<number | null | undefined>,
	}
	export function CreateSourceAndDestinationFormGroup() {
		return new FormGroup<SourceAndDestinationFormProperties>({
			dimension: new FormControl<DimensionRangeDimension | null | undefined>(undefined),
			fillLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Automatically resizes one or more dimensions based on the contents of the cells in that dimension. */
	export interface AutoResizeDimensionsRequest {

		/** A range along a single dimension on a DATA_SOURCE sheet. */
		dataSourceSheetDimensions?: DataSourceSheetDimensionRange;

		/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
		dimensions?: DimensionRange;
	}

	/** Automatically resizes one or more dimensions based on the contents of the cells in that dimension. */
	export interface AutoResizeDimensionsRequestFormProperties {
	}
	export function CreateAutoResizeDimensionsRequestFormGroup() {
		return new FormGroup<AutoResizeDimensionsRequestFormProperties>({
		});

	}


	/** A range along a single dimension on a DATA_SOURCE sheet. */
	export interface DataSourceSheetDimensionRange {

		/** The columns on the data source sheet. */
		columnReferences?: Array<DataSourceColumnReference>;

		/** The ID of the data source sheet the range is on. */
		sheetId?: number | null;
	}

	/** A range along a single dimension on a DATA_SOURCE sheet. */
	export interface DataSourceSheetDimensionRangeFormProperties {

		/** The ID of the data source sheet the range is on. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateDataSourceSheetDimensionRangeFormGroup() {
		return new FormGroup<DataSourceSheetDimensionRangeFormProperties>({
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The default filter associated with a sheet. */
	export interface BasicFilter {

		/** The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. */
		criteria?: {[id: string]: FilterCriteria };

		/** The filter criteria per column. Both criteria and filter_specs are populated in responses. If both fields are specified in an update request, this field takes precedence. */
		filterSpecs?: Array<FilterSpec>;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** The sort order per column. Later specifications are used when values are equal in the earlier specifications. */
		sortSpecs?: Array<SortSpec>;
	}

	/** The default filter associated with a sheet. */
	export interface BasicFilterFormProperties {

		/** The criteria for showing/hiding values per column. The map's key is the column index, and the value is the criteria for that column. This field is deprecated in favor of filter_specs. */
		criteria: FormControl<{[id: string]: FilterCriteria } | null | undefined>,
	}
	export function CreateBasicFilterFormGroup() {
		return new FormGroup<BasicFilterFormProperties>({
			criteria: new FormControl<{[id: string]: FilterCriteria } | null | undefined>(undefined),
		});

	}


	/** The request for clearing more than one range selected by a DataFilter in a spreadsheet. */
	export interface BatchClearValuesByDataFilterRequest {

		/** The DataFilters used to determine which ranges to clear. */
		dataFilters?: Array<DataFilter>;
	}

	/** The request for clearing more than one range selected by a DataFilter in a spreadsheet. */
	export interface BatchClearValuesByDataFilterRequestFormProperties {
	}
	export function CreateBatchClearValuesByDataFilterRequestFormGroup() {
		return new FormGroup<BatchClearValuesByDataFilterRequestFormProperties>({
		});

	}


	/** Filter that describes what data should be selected or returned from a request. */
	export interface DataFilter {

		/** Selects data that matches the specified A1 range. */
		a1Range?: string | null;

		/** Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified. */
		developerMetadataLookup?: DeveloperMetadataLookup;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		gridRange?: GridRange;
	}

	/** Filter that describes what data should be selected or returned from a request. */
	export interface DataFilterFormProperties {

		/** Selects data that matches the specified A1 range. */
		a1Range: FormControl<string | null | undefined>,
	}
	export function CreateDataFilterFormGroup() {
		return new FormGroup<DataFilterFormProperties>({
			a1Range: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified. */
	export interface DeveloperMetadataLookup {

		/** Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecified, this field assumes a default value of INTERSECTING. If this field is specified, a metadataLocation must also be specified. */
		locationMatchingStrategy?: DeveloperMetadataLookupLocationMatchingStrategy | null;

		/** Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered. This field cannot be specified as SPREADSHEET when the locationMatchingStrategy is specified as INTERSECTING or when the metadataLocation is specified as a non-spreadsheet location: spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left unspecified when the locationMatchingStrategy is specified as EXACT. */
		locationType?: DeveloperMetadataLookupLocationType | null;

		/** Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id. */
		metadataId?: number | null;

		/** Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key. */
		metadataKey?: string | null;

		/** A location where metadata may be associated in a spreadsheet. */
		metadataLocation?: DeveloperMetadataLocation;

		/** Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value. */
		metadataValue?: string | null;

		/** Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified, all developer metadata visibile to the requesting project is considered. */
		visibility?: DeveloperMetadataLookupVisibility | null;
	}

	/** Selects DeveloperMetadata that matches all of the specified fields. For example, if only a metadata ID is specified this considers the DeveloperMetadata with that particular unique ID. If a metadata key is specified, this considers all developer metadata with that key. If a key, visibility, and location type are all specified, this considers all developer metadata with that key and visibility that are associated with a location of that type. In general, this selects all DeveloperMetadata that matches the intersection of all the specified fields; any field or combination of fields may be specified. */
	export interface DeveloperMetadataLookupFormProperties {

		/** Determines how this lookup matches the location. If this field is specified as EXACT, only developer metadata associated on the exact location specified is matched. If this field is specified to INTERSECTING, developer metadata associated on intersecting locations is also matched. If left unspecified, this field assumes a default value of INTERSECTING. If this field is specified, a metadataLocation must also be specified. */
		locationMatchingStrategy: FormControl<DeveloperMetadataLookupLocationMatchingStrategy | null | undefined>,

		/** Limits the selected developer metadata to those entries which are associated with locations of the specified type. For example, when this field is specified as ROW this lookup only considers developer metadata associated on rows. If the field is left unspecified, all location types are considered. This field cannot be specified as SPREADSHEET when the locationMatchingStrategy is specified as INTERSECTING or when the metadataLocation is specified as a non-spreadsheet location: spreadsheet metadata cannot intersect any other developer metadata location. This field also must be left unspecified when the locationMatchingStrategy is specified as EXACT. */
		locationType: FormControl<DeveloperMetadataLookupLocationType | null | undefined>,

		/** Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_id. */
		metadataId: FormControl<number | null | undefined>,

		/** Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_key. */
		metadataKey: FormControl<string | null | undefined>,

		/** Limits the selected developer metadata to that which has a matching DeveloperMetadata.metadata_value. */
		metadataValue: FormControl<string | null | undefined>,

		/** Limits the selected developer metadata to that which has a matching DeveloperMetadata.visibility. If left unspecified, all developer metadata visibile to the requesting project is considered. */
		visibility: FormControl<DeveloperMetadataLookupVisibility | null | undefined>,
	}
	export function CreateDeveloperMetadataLookupFormGroup() {
		return new FormGroup<DeveloperMetadataLookupFormProperties>({
			locationMatchingStrategy: new FormControl<DeveloperMetadataLookupLocationMatchingStrategy | null | undefined>(undefined),
			locationType: new FormControl<DeveloperMetadataLookupLocationType | null | undefined>(undefined),
			metadataId: new FormControl<number | null | undefined>(undefined),
			metadataKey: new FormControl<string | null | undefined>(undefined),
			metadataValue: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<DeveloperMetadataLookupVisibility | null | undefined>(undefined),
		});

	}

	export enum DeveloperMetadataLookupLocationMatchingStrategy { DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED = 'DEVELOPER_METADATA_LOCATION_MATCHING_STRATEGY_UNSPECIFIED', EXACT_LOCATION = 'EXACT_LOCATION', INTERSECTING_LOCATION = 'INTERSECTING_LOCATION' }

	export enum DeveloperMetadataLookupLocationType { DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED = 'DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED', ROW = 'ROW', COLUMN = 'COLUMN', SHEET = 'SHEET', SPREADSHEET = 'SPREADSHEET' }


	/** A location where metadata may be associated in a spreadsheet. */
	export interface DeveloperMetadataLocation {

		/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
		dimensionRange?: DimensionRange;

		/** The type of location this object represents. This field is read-only. */
		locationType?: DeveloperMetadataLookupLocationType | null;

		/** The ID of the sheet when metadata is associated with an entire sheet. */
		sheetId?: number | null;

		/** True when metadata is associated with an entire spreadsheet. */
		spreadsheet?: boolean | null;
	}

	/** A location where metadata may be associated in a spreadsheet. */
	export interface DeveloperMetadataLocationFormProperties {

		/** The type of location this object represents. This field is read-only. */
		locationType: FormControl<DeveloperMetadataLookupLocationType | null | undefined>,

		/** The ID of the sheet when metadata is associated with an entire sheet. */
		sheetId: FormControl<number | null | undefined>,

		/** True when metadata is associated with an entire spreadsheet. */
		spreadsheet: FormControl<boolean | null | undefined>,
	}
	export function CreateDeveloperMetadataLocationFormGroup() {
		return new FormGroup<DeveloperMetadataLocationFormProperties>({
			locationType: new FormControl<DeveloperMetadataLookupLocationType | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
			spreadsheet: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum DeveloperMetadataLookupVisibility { DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED = 'DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED', DOCUMENT = 'DOCUMENT', PROJECT = 'PROJECT' }


	/** The response when clearing a range of values selected with DataFilters in a spreadsheet. */
	export interface BatchClearValuesByDataFilterResponse {

		/** The ranges that were cleared, in [A1 notation](/sheets/api/guides/concepts#cell). If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits. */
		clearedRanges?: Array<string>;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string | null;
	}

	/** The response when clearing a range of values selected with DataFilters in a spreadsheet. */
	export interface BatchClearValuesByDataFilterResponseFormProperties {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId: FormControl<string | null | undefined>,
	}
	export function CreateBatchClearValuesByDataFilterResponseFormGroup() {
		return new FormGroup<BatchClearValuesByDataFilterResponseFormProperties>({
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for clearing more than one range of values in a spreadsheet. */
	export interface BatchClearValuesRequest {

		/** The ranges to clear, in [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell). */
		ranges?: Array<string>;
	}

	/** The request for clearing more than one range of values in a spreadsheet. */
	export interface BatchClearValuesRequestFormProperties {
	}
	export function CreateBatchClearValuesRequestFormGroup() {
		return new FormGroup<BatchClearValuesRequestFormProperties>({
		});

	}


	/** The response when clearing a range of values in a spreadsheet. */
	export interface BatchClearValuesResponse {

		/** The ranges that were cleared, in A1 notation. If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits. */
		clearedRanges?: Array<string>;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string | null;
	}

	/** The response when clearing a range of values in a spreadsheet. */
	export interface BatchClearValuesResponseFormProperties {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId: FormControl<string | null | undefined>,
	}
	export function CreateBatchClearValuesResponseFormGroup() {
		return new FormGroup<BatchClearValuesResponseFormProperties>({
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters. */
	export interface BatchGetValuesByDataFilterRequest {

		/** The data filters used to match the ranges of values to retrieve. Ranges that match any of the specified data filters are included in the response. */
		dataFilters?: Array<DataFilter>;

		/** How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
		dateTimeRenderOption?: BatchGetValuesByDataFilterRequestDateTimeRenderOption | null;

		/** The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a request that selects that range and sets `majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas a request that sets `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. */
		majorDimension?: DimensionRangeDimension | null;

		/** How values should be represented in the output. The default render option is FORMATTED_VALUE. */
		valueRenderOption?: BatchGetValuesByDataFilterRequestValueRenderOption | null;
	}

	/** The request for retrieving a range of values in a spreadsheet selected by a set of DataFilters. */
	export interface BatchGetValuesByDataFilterRequestFormProperties {

		/** How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
		dateTimeRenderOption: FormControl<BatchGetValuesByDataFilterRequestDateTimeRenderOption | null | undefined>,

		/** The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then a request that selects that range and sets `majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas a request that sets `majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. */
		majorDimension: FormControl<DimensionRangeDimension | null | undefined>,

		/** How values should be represented in the output. The default render option is FORMATTED_VALUE. */
		valueRenderOption: FormControl<BatchGetValuesByDataFilterRequestValueRenderOption | null | undefined>,
	}
	export function CreateBatchGetValuesByDataFilterRequestFormGroup() {
		return new FormGroup<BatchGetValuesByDataFilterRequestFormProperties>({
			dateTimeRenderOption: new FormControl<BatchGetValuesByDataFilterRequestDateTimeRenderOption | null | undefined>(undefined),
			majorDimension: new FormControl<DimensionRangeDimension | null | undefined>(undefined),
			valueRenderOption: new FormControl<BatchGetValuesByDataFilterRequestValueRenderOption | null | undefined>(undefined),
		});

	}

	export enum BatchGetValuesByDataFilterRequestDateTimeRenderOption { SERIAL_NUMBER = 'SERIAL_NUMBER', FORMATTED_STRING = 'FORMATTED_STRING' }

	export enum BatchGetValuesByDataFilterRequestValueRenderOption { FORMATTED_VALUE = 'FORMATTED_VALUE', UNFORMATTED_VALUE = 'UNFORMATTED_VALUE', FORMULA = 'FORMULA' }


	/** The response when retrieving more than one range of values in a spreadsheet selected by DataFilters. */
	export interface BatchGetValuesByDataFilterResponse {

		/** The ID of the spreadsheet the data was retrieved from. */
		spreadsheetId?: string | null;

		/** The requested values with the list of data filters that matched them. */
		valueRanges?: Array<MatchedValueRange>;
	}

	/** The response when retrieving more than one range of values in a spreadsheet selected by DataFilters. */
	export interface BatchGetValuesByDataFilterResponseFormProperties {

		/** The ID of the spreadsheet the data was retrieved from. */
		spreadsheetId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetValuesByDataFilterResponseFormGroup() {
		return new FormGroup<BatchGetValuesByDataFilterResponseFormProperties>({
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A value range that was matched by one or more data filers. */
	export interface MatchedValueRange {

		/** The DataFilters from the request that matched the range of values. */
		dataFilters?: Array<DataFilter>;

		/** Data within a range of the spreadsheet. */
		valueRange?: ValueRange;
	}

	/** A value range that was matched by one or more data filers. */
	export interface MatchedValueRangeFormProperties {
	}
	export function CreateMatchedValueRangeFormGroup() {
		return new FormGroup<MatchedValueRangeFormProperties>({
		});

	}


	/** The response when retrieving more than one range of values in a spreadsheet. */
	export interface BatchGetValuesResponse {

		/** The ID of the spreadsheet the data was retrieved from. */
		spreadsheetId?: string | null;

		/** The requested values. The order of the ValueRanges is the same as the order of the requested ranges. */
		valueRanges?: Array<ValueRange>;
	}

	/** The response when retrieving more than one range of values in a spreadsheet. */
	export interface BatchGetValuesResponseFormProperties {

		/** The ID of the spreadsheet the data was retrieved from. */
		spreadsheetId: FormControl<string | null | undefined>,
	}
	export function CreateBatchGetValuesResponseFormGroup() {
		return new FormGroup<BatchGetValuesResponseFormProperties>({
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for updating any aspect of a spreadsheet. */
	export interface BatchUpdateSpreadsheetRequest {

		/** Determines if the update response should include the spreadsheet resource. */
		includeSpreadsheetInResponse?: boolean | null;

		/** A list of updates to apply to the spreadsheet. Requests will be applied in the order they are specified. If any request is not valid, no requests will be applied. */
		requests?: Array<Request>;

		/** True if grid data should be returned. Meaningful only if include_spreadsheet_in_response is 'true'. This parameter is ignored if a field mask was set in the request. */
		responseIncludeGridData?: boolean | null;

		/** Limits the ranges included in the response spreadsheet. Meaningful only if include_spreadsheet_in_response is 'true'. */
		responseRanges?: Array<string>;
	}

	/** The request for updating any aspect of a spreadsheet. */
	export interface BatchUpdateSpreadsheetRequestFormProperties {

		/** Determines if the update response should include the spreadsheet resource. */
		includeSpreadsheetInResponse: FormControl<boolean | null | undefined>,

		/** True if grid data should be returned. Meaningful only if include_spreadsheet_in_response is 'true'. This parameter is ignored if a field mask was set in the request. */
		responseIncludeGridData: FormControl<boolean | null | undefined>,
	}
	export function CreateBatchUpdateSpreadsheetRequestFormGroup() {
		return new FormGroup<BatchUpdateSpreadsheetRequestFormProperties>({
			includeSpreadsheetInResponse: new FormControl<boolean | null | undefined>(undefined),
			responseIncludeGridData: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A single kind of update to apply to a spreadsheet. */
	export interface Request {

		/** Adds a new banded range to the spreadsheet. */
		addBanding?: AddBandingRequest;

		/** Adds a chart to a sheet in the spreadsheet. */
		addChart?: AddChartRequest;

		/** Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented. */
		addConditionalFormatRule?: AddConditionalFormatRuleRequest;

		/** Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope. */
		addDataSource?: AddDataSourceRequest;

		/** Creates a group over the specified range. If the requested range is a superset of the range of an existing group G, then the depth of G is incremented and this new group G' has the depth of that group. For example, a group [C:D, depth 1] + [B:E] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range is a subset of the range of an existing group G, then the depth of the new group G' becomes one greater than the depth of G. For example, a group [B:E, depth 1] + [C:D] results in groups [B:E, depth 1] and [C:D, depth 2]. If the requested range starts before and ends within, or starts within and ends after, the range of an existing group G, then the range of the existing group G becomes the union of the ranges, and the new group G' has depth one greater than the depth of G and range as the intersection of the ranges. For example, a group [B:D, depth 1] + [C:E] results in groups [B:E, depth 1] and [C:D, depth 2]. */
		addDimensionGroup?: AddDimensionGroupRequest;

		/** Adds a filter view. */
		addFilterView?: AddFilterViewRequest;

		/** Adds a named range to the spreadsheet. */
		addNamedRange?: AddNamedRangeRequest;

		/** Adds a new protected range. */
		addProtectedRange?: AddProtectedRangeRequest;

		/** Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet. */
		addSheet?: AddSheetRequest;

		/** Adds a slicer to a sheet in the spreadsheet. */
		addSlicer?: AddSlicerRequest;

		/** Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary. */
		appendCells?: AppendCellsRequest;

		/** Appends rows or columns to the end of a sheet. */
		appendDimension?: AppendDimensionRequest;

		/** Fills in more data based on existing data. */
		autoFill?: AutoFillRequest;

		/** Automatically resizes one or more dimensions based on the contents of the cells in that dimension. */
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

		/** Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented. */
		deleteConditionalFormatRule?: DeleteConditionalFormatRuleRequest;

		/** Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects. */
		deleteDataSource?: DeleteDataSourceRequest;

		/** A request to delete developer metadata. */
		deleteDeveloperMetadata?: DeleteDeveloperMetadataRequest;

		/** Deletes the dimensions from the sheet. */
		deleteDimension?: DeleteDimensionRequest;

		/** Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C. */
		deleteDimensionGroup?: DeleteDimensionGroupRequest;

		/** Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range. */
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

		/** Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly. */
		refreshDataSource?: RefreshDataSourceRequest;

		/** Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing. */
		repeatCell?: RepeatCellRequest;

		/** Sets the basic filter associated with a sheet. */
		setBasicFilter?: SetBasicFilterRequest;

		/** Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified. */
		setDataValidation?: SetDataValidationRequest;

		/** Sorts data in rows based on a sort order per column. */
		sortRange?: SortRangeRequest;

		/** Splits a column of text into multiple columns, based on a delimiter in each cell. */
		textToColumns?: TextToColumnsRequest;

		/** Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula. */
		trimWhitespace?: TrimWhitespaceRequest;

		/** Unmerges cells in the given range. */
		unmergeCells?: UnmergeCellsRequest;

		/** Updates properties of the supplied banded range. */
		updateBanding?: UpdateBandingRequest;

		/** Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE. */
		updateBorders?: UpdateBordersRequest;

		/** Updates all cells in a range with new data. */
		updateCells?: UpdateCellsRequest;

		/** Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.) */
		updateChartSpec?: UpdateChartSpecRequest;

		/** Updates a conditional format rule at the given index, or moves a conditional format rule to another index. */
		updateConditionalFormatRule?: UpdateConditionalFormatRuleRequest;

		/** Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope. */
		updateDataSource?: UpdateDataSourceRequest;

		/** A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update. */
		updateDeveloperMetadata?: UpdateDeveloperMetadataRequest;

		/** Updates the state of the specified group. */
		updateDimensionGroup?: UpdateDimensionGroupRequest;

		/** Updates properties of dimensions within the specified range. */
		updateDimensionProperties?: UpdateDimensionPropertiesRequest;

		/** Updates an embedded object's border property. */
		updateEmbeddedObjectBorder?: UpdateEmbeddedObjectBorderRequest;

		/** Update an embedded object's position (such as a moving or resizing a chart or image). */
		updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionRequest;

		/** Updates properties of the filter view. */
		updateFilterView?: UpdateFilterViewRequest;

		/** Updates properties of the named range with the specified namedRangeId. */
		updateNamedRange?: UpdateNamedRangeRequest;

		/** Updates an existing protected range with the specified protectedRangeId. */
		updateProtectedRange?: UpdateProtectedRangeRequest;

		/** Updates properties of the sheet with the specified sheetId. */
		updateSheetProperties?: UpdateSheetPropertiesRequest;

		/** Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest. */
		updateSlicerSpec?: UpdateSlicerSpecRequest;

		/** Updates properties of a spreadsheet. */
		updateSpreadsheetProperties?: UpdateSpreadsheetPropertiesRequest;
	}

	/** A single kind of update to apply to a spreadsheet. */
	export interface RequestFormProperties {
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
		});

	}


	/** Clears the basic filter, if any exists on the sheet. */
	export interface ClearBasicFilterRequest {

		/** The sheet ID on which the basic filter should be cleared. */
		sheetId?: number | null;
	}

	/** Clears the basic filter, if any exists on the sheet. */
	export interface ClearBasicFilterRequestFormProperties {

		/** The sheet ID on which the basic filter should be cleared. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateClearBasicFilterRequestFormGroup() {
		return new FormGroup<ClearBasicFilterRequestFormProperties>({
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Copies data from the source to the destination. */
	export interface CopyPasteRequest {

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		destination?: GridRange;

		/** How that data should be oriented when pasting. */
		pasteOrientation?: CopyPasteRequestPasteOrientation | null;

		/** What kind of data to paste. */
		pasteType?: CopyPasteRequestPasteType | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		source?: GridRange;
	}

	/** Copies data from the source to the destination. */
	export interface CopyPasteRequestFormProperties {

		/** How that data should be oriented when pasting. */
		pasteOrientation: FormControl<CopyPasteRequestPasteOrientation | null | undefined>,

		/** What kind of data to paste. */
		pasteType: FormControl<CopyPasteRequestPasteType | null | undefined>,
	}
	export function CreateCopyPasteRequestFormGroup() {
		return new FormGroup<CopyPasteRequestFormProperties>({
			pasteOrientation: new FormControl<CopyPasteRequestPasteOrientation | null | undefined>(undefined),
			pasteType: new FormControl<CopyPasteRequestPasteType | null | undefined>(undefined),
		});

	}

	export enum CopyPasteRequestPasteOrientation { NORMAL = 'NORMAL', TRANSPOSE = 'TRANSPOSE' }

	export enum CopyPasteRequestPasteType { PASTE_NORMAL = 'PASTE_NORMAL', PASTE_VALUES = 'PASTE_VALUES', PASTE_FORMAT = 'PASTE_FORMAT', PASTE_NO_BORDERS = 'PASTE_NO_BORDERS', PASTE_FORMULA = 'PASTE_FORMULA', PASTE_DATA_VALIDATION = 'PASTE_DATA_VALIDATION', PASTE_CONDITIONAL_FORMATTING = 'PASTE_CONDITIONAL_FORMATTING' }


	/** A request to create developer metadata. */
	export interface CreateDeveloperMetadataRequest {

		/** Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too. */
		developerMetadata?: DeveloperMetadata;
	}

	/** A request to create developer metadata. */
	export interface CreateDeveloperMetadataRequestFormProperties {
	}
	export function CreateCreateDeveloperMetadataRequestFormGroup() {
		return new FormGroup<CreateDeveloperMetadataRequestFormProperties>({
		});

	}


	/** Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too. */
	export interface DeveloperMetadata {

		/** A location where metadata may be associated in a spreadsheet. */
		location?: DeveloperMetadataLocation;

		/** The spreadsheet-scoped unique ID that identifies the metadata. IDs may be specified when metadata is created, otherwise one will be randomly generated and assigned. Must be positive. */
		metadataId?: number | null;

		/** The metadata key. There may be multiple metadata in a spreadsheet with the same key. Developer metadata must always have a key specified. */
		metadataKey?: string | null;

		/** Data associated with the metadata's key. */
		metadataValue?: string | null;

		/** The metadata visibility. Developer metadata must always have a visibility specified. */
		visibility?: DeveloperMetadataLookupVisibility | null;
	}

	/** Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too. */
	export interface DeveloperMetadataFormProperties {

		/** The spreadsheet-scoped unique ID that identifies the metadata. IDs may be specified when metadata is created, otherwise one will be randomly generated and assigned. Must be positive. */
		metadataId: FormControl<number | null | undefined>,

		/** The metadata key. There may be multiple metadata in a spreadsheet with the same key. Developer metadata must always have a key specified. */
		metadataKey: FormControl<string | null | undefined>,

		/** Data associated with the metadata's key. */
		metadataValue: FormControl<string | null | undefined>,

		/** The metadata visibility. Developer metadata must always have a visibility specified. */
		visibility: FormControl<DeveloperMetadataLookupVisibility | null | undefined>,
	}
	export function CreateDeveloperMetadataFormGroup() {
		return new FormGroup<DeveloperMetadataFormProperties>({
			metadataId: new FormControl<number | null | undefined>(undefined),
			metadataKey: new FormControl<string | null | undefined>(undefined),
			metadataValue: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<DeveloperMetadataLookupVisibility | null | undefined>(undefined),
		});

	}


	/** Moves data from the source to the destination. */
	export interface CutPasteRequest {

		/** A coordinate in a sheet. All indexes are zero-based. */
		destination?: GridCoordinate;

		/** What kind of data to paste. All the source data will be cut, regardless of what is pasted. */
		pasteType?: CopyPasteRequestPasteType | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		source?: GridRange;
	}

	/** Moves data from the source to the destination. */
	export interface CutPasteRequestFormProperties {

		/** What kind of data to paste. All the source data will be cut, regardless of what is pasted. */
		pasteType: FormControl<CopyPasteRequestPasteType | null | undefined>,
	}
	export function CreateCutPasteRequestFormGroup() {
		return new FormGroup<CutPasteRequestFormProperties>({
			pasteType: new FormControl<CopyPasteRequestPasteType | null | undefined>(undefined),
		});

	}


	/** Removes the banded range with the given ID from the spreadsheet. */
	export interface DeleteBandingRequest {

		/** The ID of the banded range to delete. */
		bandedRangeId?: number | null;
	}

	/** Removes the banded range with the given ID from the spreadsheet. */
	export interface DeleteBandingRequestFormProperties {

		/** The ID of the banded range to delete. */
		bandedRangeId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteBandingRequestFormGroup() {
		return new FormGroup<DeleteBandingRequestFormProperties>({
			bandedRangeId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented. */
	export interface DeleteConditionalFormatRuleRequest {

		/** The zero-based index of the rule to be deleted. */
		index?: number | null;

		/** The sheet the rule is being deleted from. */
		sheetId?: number | null;
	}

	/** Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented. */
	export interface DeleteConditionalFormatRuleRequestFormProperties {

		/** The zero-based index of the rule to be deleted. */
		index: FormControl<number | null | undefined>,

		/** The sheet the rule is being deleted from. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteConditionalFormatRuleRequestFormGroup() {
		return new FormGroup<DeleteConditionalFormatRuleRequestFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects. */
	export interface DeleteDataSourceRequest {

		/** The ID of the data source to delete. */
		dataSourceId?: string | null;
	}

	/** Deletes a data source. The request also deletes the associated data source sheet, and unlinks all associated data source objects. */
	export interface DeleteDataSourceRequestFormProperties {

		/** The ID of the data source to delete. */
		dataSourceId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteDataSourceRequestFormGroup() {
		return new FormGroup<DeleteDataSourceRequestFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to delete developer metadata. */
	export interface DeleteDeveloperMetadataRequest {

		/** Filter that describes what data should be selected or returned from a request. */
		dataFilter?: DataFilter;
	}

	/** A request to delete developer metadata. */
	export interface DeleteDeveloperMetadataRequestFormProperties {
	}
	export function CreateDeleteDeveloperMetadataRequestFormGroup() {
		return new FormGroup<DeleteDeveloperMetadataRequestFormProperties>({
		});

	}


	/** Deletes the dimensions from the sheet. */
	export interface DeleteDimensionRequest {

		/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
		range?: DimensionRange;
	}

	/** Deletes the dimensions from the sheet. */
	export interface DeleteDimensionRequestFormProperties {
	}
	export function CreateDeleteDimensionRequestFormGroup() {
		return new FormGroup<DeleteDimensionRequestFormProperties>({
		});

	}


	/** Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C. */
	export interface DeleteDimensionGroupRequest {

		/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
		range?: DimensionRange;
	}

	/** Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C. */
	export interface DeleteDimensionGroupRequestFormProperties {
	}
	export function CreateDeleteDimensionGroupRequestFormGroup() {
		return new FormGroup<DeleteDimensionGroupRequestFormProperties>({
		});

	}


	/** Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range. */
	export interface DeleteDuplicatesRequest {

		/** The columns in the range to analyze for duplicate values. If no columns are selected then all columns are analyzed for duplicates. */
		comparisonColumns?: Array<DimensionRange>;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;
	}

	/** Removes rows within this range that contain values in the specified columns that are duplicates of values in any previous row. Rows with identical values but different letter cases, formatting, or formulas are considered to be duplicates. This request also removes duplicate rows hidden from view (for example, due to a filter). When removing duplicates, the first instance of each duplicate row scanning from the top downwards is kept in the resulting range. Content outside of the specified range isn't removed, and rows considered duplicates do not have to be adjacent to each other in the range. */
	export interface DeleteDuplicatesRequestFormProperties {
	}
	export function CreateDeleteDuplicatesRequestFormGroup() {
		return new FormGroup<DeleteDuplicatesRequestFormProperties>({
		});

	}


	/** Deletes the embedded object with the given ID. */
	export interface DeleteEmbeddedObjectRequest {

		/** The ID of the embedded object to delete. */
		objectId?: number | null;
	}

	/** Deletes the embedded object with the given ID. */
	export interface DeleteEmbeddedObjectRequestFormProperties {

		/** The ID of the embedded object to delete. */
		objectId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteEmbeddedObjectRequestFormGroup() {
		return new FormGroup<DeleteEmbeddedObjectRequestFormProperties>({
			objectId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Deletes a particular filter view. */
	export interface DeleteFilterViewRequest {

		/** The ID of the filter to delete. */
		filterId?: number | null;
	}

	/** Deletes a particular filter view. */
	export interface DeleteFilterViewRequestFormProperties {

		/** The ID of the filter to delete. */
		filterId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteFilterViewRequestFormGroup() {
		return new FormGroup<DeleteFilterViewRequestFormProperties>({
			filterId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Removes the named range with the given ID from the spreadsheet. */
	export interface DeleteNamedRangeRequest {

		/** The ID of the named range to delete. */
		namedRangeId?: string | null;
	}

	/** Removes the named range with the given ID from the spreadsheet. */
	export interface DeleteNamedRangeRequestFormProperties {

		/** The ID of the named range to delete. */
		namedRangeId: FormControl<string | null | undefined>,
	}
	export function CreateDeleteNamedRangeRequestFormGroup() {
		return new FormGroup<DeleteNamedRangeRequestFormProperties>({
			namedRangeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deletes the protected range with the given ID. */
	export interface DeleteProtectedRangeRequest {

		/** The ID of the protected range to delete. */
		protectedRangeId?: number | null;
	}

	/** Deletes the protected range with the given ID. */
	export interface DeleteProtectedRangeRequestFormProperties {

		/** The ID of the protected range to delete. */
		protectedRangeId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteProtectedRangeRequestFormGroup() {
		return new FormGroup<DeleteProtectedRangeRequestFormProperties>({
			protectedRangeId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Deletes a range of cells, shifting other cells into the deleted area. */
	export interface DeleteRangeRequest {

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** The dimension from which deleted cells will be replaced with. If ROWS, existing cells will be shifted upward to replace the deleted cells. If COLUMNS, existing cells will be shifted left to replace the deleted cells. */
		shiftDimension?: DimensionRangeDimension | null;
	}

	/** Deletes a range of cells, shifting other cells into the deleted area. */
	export interface DeleteRangeRequestFormProperties {

		/** The dimension from which deleted cells will be replaced with. If ROWS, existing cells will be shifted upward to replace the deleted cells. If COLUMNS, existing cells will be shifted left to replace the deleted cells. */
		shiftDimension: FormControl<DimensionRangeDimension | null | undefined>,
	}
	export function CreateDeleteRangeRequestFormGroup() {
		return new FormGroup<DeleteRangeRequestFormProperties>({
			shiftDimension: new FormControl<DimensionRangeDimension | null | undefined>(undefined),
		});

	}


	/** Deletes the requested sheet. */
	export interface DeleteSheetRequest {

		/** The ID of the sheet to delete. If the sheet is of DATA_SOURCE type, the associated DataSource is also deleted. */
		sheetId?: number | null;
	}

	/** Deletes the requested sheet. */
	export interface DeleteSheetRequestFormProperties {

		/** The ID of the sheet to delete. If the sheet is of DATA_SOURCE type, the associated DataSource is also deleted. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteSheetRequestFormGroup() {
		return new FormGroup<DeleteSheetRequestFormProperties>({
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Duplicates a particular filter view. */
	export interface DuplicateFilterViewRequest {

		/** The ID of the filter being duplicated. */
		filterId?: number | null;
	}

	/** Duplicates a particular filter view. */
	export interface DuplicateFilterViewRequestFormProperties {

		/** The ID of the filter being duplicated. */
		filterId: FormControl<number | null | undefined>,
	}
	export function CreateDuplicateFilterViewRequestFormGroup() {
		return new FormGroup<DuplicateFilterViewRequestFormProperties>({
			filterId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Duplicates the contents of a sheet. */
	export interface DuplicateSheetRequest {

		/** The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented. */
		insertSheetIndex?: number | null;

		/** If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet ID. If set, it must be non-negative. */
		newSheetId?: number | null;

		/** The name of the new sheet. If empty, a new name is chosen for you. */
		newSheetName?: string | null;

		/** The sheet to duplicate. If the source sheet is of DATA_SOURCE type, its backing DataSource is also duplicated and associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied over but only available after the batch request completes. */
		sourceSheetId?: number | null;
	}

	/** Duplicates the contents of a sheet. */
	export interface DuplicateSheetRequestFormProperties {

		/** The zero-based index where the new sheet should be inserted. The index of all sheets after this are incremented. */
		insertSheetIndex: FormControl<number | null | undefined>,

		/** If set, the ID of the new sheet. If not set, an ID is chosen. If set, the ID must not conflict with any existing sheet ID. If set, it must be non-negative. */
		newSheetId: FormControl<number | null | undefined>,

		/** The name of the new sheet. If empty, a new name is chosen for you. */
		newSheetName: FormControl<string | null | undefined>,

		/** The sheet to duplicate. If the source sheet is of DATA_SOURCE type, its backing DataSource is also duplicated and associated with the new copy of the sheet. No data execution is triggered, the grid data of this sheet is also copied over but only available after the batch request completes. */
		sourceSheetId: FormControl<number | null | undefined>,
	}
	export function CreateDuplicateSheetRequestFormGroup() {
		return new FormGroup<DuplicateSheetRequestFormProperties>({
			insertSheetIndex: new FormControl<number | null | undefined>(undefined),
			newSheetId: new FormControl<number | null | undefined>(undefined),
			newSheetName: new FormControl<string | null | undefined>(undefined),
			sourceSheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Finds and replaces data in cells over a range, sheet, or all sheets. */
	export interface FindReplaceRequest {

		/** True to find/replace over all sheets. */
		allSheets?: boolean | null;

		/** The value to search. */
		find?: string | null;

		/** True if the search should include cells with formulas. False to skip cells with formulas. */
		includeFormulas?: boolean | null;

		/** True if the search is case sensitive. */
		matchCase?: boolean | null;

		/** True if the find value should match the entire cell. */
		matchEntireCell?: boolean | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** The value to use as the replacement. */
		replacement?: string | null;

		/** True if the find value is a regex. The regular expression and replacement should follow Java regex rules at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html. The replacement string is allowed to refer to capturing groups. For example, if one cell has the contents `"Google Sheets"` and another has `"Google Docs"`, then searching for `"o.* (.*)"` with a replacement of `"$1 Rocks"` would change the contents of the cells to `"GSheets Rocks"` and `"GDocs Rocks"` respectively. */
		searchByRegex?: boolean | null;

		/** The sheet to find/replace over. */
		sheetId?: number | null;
	}

	/** Finds and replaces data in cells over a range, sheet, or all sheets. */
	export interface FindReplaceRequestFormProperties {

		/** True to find/replace over all sheets. */
		allSheets: FormControl<boolean | null | undefined>,

		/** The value to search. */
		find: FormControl<string | null | undefined>,

		/** True if the search should include cells with formulas. False to skip cells with formulas. */
		includeFormulas: FormControl<boolean | null | undefined>,

		/** True if the search is case sensitive. */
		matchCase: FormControl<boolean | null | undefined>,

		/** True if the find value should match the entire cell. */
		matchEntireCell: FormControl<boolean | null | undefined>,

		/** The value to use as the replacement. */
		replacement: FormControl<string | null | undefined>,

		/** True if the find value is a regex. The regular expression and replacement should follow Java regex rules at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html. The replacement string is allowed to refer to capturing groups. For example, if one cell has the contents `"Google Sheets"` and another has `"Google Docs"`, then searching for `"o.* (.*)"` with a replacement of `"$1 Rocks"` would change the contents of the cells to `"GSheets Rocks"` and `"GDocs Rocks"` respectively. */
		searchByRegex: FormControl<boolean | null | undefined>,

		/** The sheet to find/replace over. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateFindReplaceRequestFormGroup() {
		return new FormGroup<FindReplaceRequestFormProperties>({
			allSheets: new FormControl<boolean | null | undefined>(undefined),
			find: new FormControl<string | null | undefined>(undefined),
			includeFormulas: new FormControl<boolean | null | undefined>(undefined),
			matchCase: new FormControl<boolean | null | undefined>(undefined),
			matchEntireCell: new FormControl<boolean | null | undefined>(undefined),
			replacement: new FormControl<string | null | undefined>(undefined),
			searchByRegex: new FormControl<boolean | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Inserts rows or columns in a sheet at a particular index. */
	export interface InsertDimensionRequest {

		/** Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions. True to inherit from the dimensions before (in which case the start index must be greater than 0), and false to inherit from the dimensions after. For example, if row index 0 has red background and row index 1 has a green background, then inserting 2 rows at index 1 can inherit either the green or red background. If `inheritFromBefore` is true, the two new rows will be red (because the row before the insertion point was red), whereas if `inheritFromBefore` is false, the two new rows will be green (because the row after the insertion point was green). */
		inheritFromBefore?: boolean | null;

		/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
		range?: DimensionRange;
	}

	/** Inserts rows or columns in a sheet at a particular index. */
	export interface InsertDimensionRequestFormProperties {

		/** Whether dimension properties should be extended from the dimensions before or after the newly inserted dimensions. True to inherit from the dimensions before (in which case the start index must be greater than 0), and false to inherit from the dimensions after. For example, if row index 0 has red background and row index 1 has a green background, then inserting 2 rows at index 1 can inherit either the green or red background. If `inheritFromBefore` is true, the two new rows will be red (because the row before the insertion point was red), whereas if `inheritFromBefore` is false, the two new rows will be green (because the row after the insertion point was green). */
		inheritFromBefore: FormControl<boolean | null | undefined>,
	}
	export function CreateInsertDimensionRequestFormGroup() {
		return new FormGroup<InsertDimensionRequestFormProperties>({
			inheritFromBefore: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Inserts cells into a range, shifting the existing cells over or down. */
	export interface InsertRangeRequest {

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** The dimension which will be shifted when inserting cells. If ROWS, existing cells will be shifted down. If COLUMNS, existing cells will be shifted right. */
		shiftDimension?: DimensionRangeDimension | null;
	}

	/** Inserts cells into a range, shifting the existing cells over or down. */
	export interface InsertRangeRequestFormProperties {

		/** The dimension which will be shifted when inserting cells. If ROWS, existing cells will be shifted down. If COLUMNS, existing cells will be shifted right. */
		shiftDimension: FormControl<DimensionRangeDimension | null | undefined>,
	}
	export function CreateInsertRangeRequestFormGroup() {
		return new FormGroup<InsertRangeRequestFormProperties>({
			shiftDimension: new FormControl<DimensionRangeDimension | null | undefined>(undefined),
		});

	}


	/** Merges all cells in the range. */
	export interface MergeCellsRequest {

		/** How the cells should be merged. */
		mergeType?: MergeCellsRequestMergeType | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;
	}

	/** Merges all cells in the range. */
	export interface MergeCellsRequestFormProperties {

		/** How the cells should be merged. */
		mergeType: FormControl<MergeCellsRequestMergeType | null | undefined>,
	}
	export function CreateMergeCellsRequestFormGroup() {
		return new FormGroup<MergeCellsRequestFormProperties>({
			mergeType: new FormControl<MergeCellsRequestMergeType | null | undefined>(undefined),
		});

	}

	export enum MergeCellsRequestMergeType { MERGE_ALL = 'MERGE_ALL', MERGE_COLUMNS = 'MERGE_COLUMNS', MERGE_ROWS = 'MERGE_ROWS' }


	/** Moves one or more rows or columns. */
	export interface MoveDimensionRequest {

		/** The zero-based start index of where to move the source data to, based on the coordinates *before* the source data is removed from the grid. Existing data will be shifted down or right (depending on the dimension) to make room for the moved dimensions. The source dimensions are removed from the grid, so the the data may end up in a different index than specified. For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to move `"1"` and `"2"` to between `"3"` and `"4"`, the source would be `ROWS [1..3)`,and the destination index would be `"4"` (the zero-based index of row 5). The end result would be `A1..A5` of `0, 3, 1, 2, 4`. */
		destinationIndex?: number | null;

		/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
		source?: DimensionRange;
	}

	/** Moves one or more rows or columns. */
	export interface MoveDimensionRequestFormProperties {

		/** The zero-based start index of where to move the source data to, based on the coordinates *before* the source data is removed from the grid. Existing data will be shifted down or right (depending on the dimension) to make room for the moved dimensions. The source dimensions are removed from the grid, so the the data may end up in a different index than specified. For example, given `A1..A5` of `0, 1, 2, 3, 4` and wanting to move `"1"` and `"2"` to between `"3"` and `"4"`, the source would be `ROWS [1..3)`,and the destination index would be `"4"` (the zero-based index of row 5). The end result would be `A1..A5` of `0, 3, 1, 2, 4`. */
		destinationIndex: FormControl<number | null | undefined>,
	}
	export function CreateMoveDimensionRequestFormGroup() {
		return new FormGroup<MoveDimensionRequestFormProperties>({
			destinationIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Inserts data into the spreadsheet starting at the specified coordinate. */
	export interface PasteDataRequest {

		/** A coordinate in a sheet. All indexes are zero-based. */
		coordinate?: GridCoordinate;

		/** The data to insert. */
		data?: string | null;

		/** The delimiter in the data. */
		delimiter?: string | null;

		/** True if the data is HTML. */
		html?: boolean | null;

		/** How the data should be pasted. */
		type?: CopyPasteRequestPasteType | null;
	}

	/** Inserts data into the spreadsheet starting at the specified coordinate. */
	export interface PasteDataRequestFormProperties {

		/** The data to insert. */
		data: FormControl<string | null | undefined>,

		/** The delimiter in the data. */
		delimiter: FormControl<string | null | undefined>,

		/** True if the data is HTML. */
		html: FormControl<boolean | null | undefined>,

		/** How the data should be pasted. */
		type: FormControl<CopyPasteRequestPasteType | null | undefined>,
	}
	export function CreatePasteDataRequestFormGroup() {
		return new FormGroup<PasteDataRequestFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			delimiter: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<CopyPasteRequestPasteType | null | undefined>(undefined),
		});

	}


	/** Randomizes the order of the rows in a range. */
	export interface RandomizeRangeRequest {

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;
	}

	/** Randomizes the order of the rows in a range. */
	export interface RandomizeRangeRequestFormProperties {
	}
	export function CreateRandomizeRangeRequestFormGroup() {
		return new FormGroup<RandomizeRangeRequestFormProperties>({
		});

	}


	/** Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly. */
	export interface RefreshDataSourceRequest {

		/** Reference to a DataSource. If specified, refreshes all associated data source objects for the data source. */
		dataSourceId?: string | null;

		/** Refreshes the data source objects regardless of the current state. If not set and a referenced data source object was in error state, the refresh will fail immediately. */
		force?: boolean | null;

		/** Refreshes all existing data source objects in the spreadsheet. */
		isAll?: boolean | null;

		/** A list of references to data source objects. */
		references?: DataSourceObjectReferences;
	}

	/** Refreshes one or multiple data source objects in the spreadsheet by the specified references. The request requires an additional `bigquery.readonly` OAuth scope. If there are multiple refresh requests referencing the same data source objects in one batch, only the last refresh request is processed, and all those requests will have the same response accordingly. */
	export interface RefreshDataSourceRequestFormProperties {

		/** Reference to a DataSource. If specified, refreshes all associated data source objects for the data source. */
		dataSourceId: FormControl<string | null | undefined>,

		/** Refreshes the data source objects regardless of the current state. If not set and a referenced data source object was in error state, the refresh will fail immediately. */
		force: FormControl<boolean | null | undefined>,

		/** Refreshes all existing data source objects in the spreadsheet. */
		isAll: FormControl<boolean | null | undefined>,
	}
	export function CreateRefreshDataSourceRequestFormGroup() {
		return new FormGroup<RefreshDataSourceRequestFormProperties>({
			dataSourceId: new FormControl<string | null | undefined>(undefined),
			force: new FormControl<boolean | null | undefined>(undefined),
			isAll: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A list of references to data source objects. */
	export interface DataSourceObjectReferences {

		/** The references. */
		references?: Array<DataSourceObjectReference>;
	}

	/** A list of references to data source objects. */
	export interface DataSourceObjectReferencesFormProperties {
	}
	export function CreateDataSourceObjectReferencesFormGroup() {
		return new FormGroup<DataSourceObjectReferencesFormProperties>({
		});

	}


	/** Reference to a data source object. */
	export interface DataSourceObjectReference {

		/** References to a data source chart. */
		chartId?: number | null;

		/** A coordinate in a sheet. All indexes are zero-based. */
		dataSourceFormulaCell?: GridCoordinate;

		/** A coordinate in a sheet. All indexes are zero-based. */
		dataSourcePivotTableAnchorCell?: GridCoordinate;

		/** A coordinate in a sheet. All indexes are zero-based. */
		dataSourceTableAnchorCell?: GridCoordinate;

		/** References to a DATA_SOURCE sheet. */
		sheetId?: string | null;
	}

	/** Reference to a data source object. */
	export interface DataSourceObjectReferenceFormProperties {

		/** References to a data source chart. */
		chartId: FormControl<number | null | undefined>,

		/** References to a DATA_SOURCE sheet. */
		sheetId: FormControl<string | null | undefined>,
	}
	export function CreateDataSourceObjectReferenceFormGroup() {
		return new FormGroup<DataSourceObjectReferenceFormProperties>({
			chartId: new FormControl<number | null | undefined>(undefined),
			sheetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing. */
	export interface RepeatCellRequest {

		/** Data about a specific cell. */
		cell?: CellData;

		/** The fields that should be updated. At least one field must be specified. The root `cell` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;
	}

	/** Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing. */
	export interface RepeatCellRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `cell` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateRepeatCellRequestFormGroup() {
		return new FormGroup<RepeatCellRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sets the basic filter associated with a sheet. */
	export interface SetBasicFilterRequest {

		/** The default filter associated with a sheet. */
		filter?: BasicFilter;
	}

	/** Sets the basic filter associated with a sheet. */
	export interface SetBasicFilterRequestFormProperties {
	}
	export function CreateSetBasicFilterRequestFormGroup() {
		return new FormGroup<SetBasicFilterRequestFormProperties>({
		});

	}


	/** Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified. */
	export interface SetDataValidationRequest {

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** A data validation rule. */
		rule?: DataValidationRule;
	}

	/** Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified. */
	export interface SetDataValidationRequestFormProperties {
	}
	export function CreateSetDataValidationRequestFormGroup() {
		return new FormGroup<SetDataValidationRequestFormProperties>({
		});

	}


	/** Sorts data in rows based on a sort order per column. */
	export interface SortRangeRequest {

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** The sort order per column. Later specifications are used when values are equal in the earlier specifications. */
		sortSpecs?: Array<SortSpec>;
	}

	/** Sorts data in rows based on a sort order per column. */
	export interface SortRangeRequestFormProperties {
	}
	export function CreateSortRangeRequestFormGroup() {
		return new FormGroup<SortRangeRequestFormProperties>({
		});

	}


	/** Splits a column of text into multiple columns, based on a delimiter in each cell. */
	export interface TextToColumnsRequest {

		/** The delimiter to use. Used only if delimiterType is CUSTOM. */
		delimiter?: string | null;

		/** The delimiter type to use. */
		delimiterType?: TextToColumnsRequestDelimiterType | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		source?: GridRange;
	}

	/** Splits a column of text into multiple columns, based on a delimiter in each cell. */
	export interface TextToColumnsRequestFormProperties {

		/** The delimiter to use. Used only if delimiterType is CUSTOM. */
		delimiter: FormControl<string | null | undefined>,

		/** The delimiter type to use. */
		delimiterType: FormControl<TextToColumnsRequestDelimiterType | null | undefined>,
	}
	export function CreateTextToColumnsRequestFormGroup() {
		return new FormGroup<TextToColumnsRequestFormProperties>({
			delimiter: new FormControl<string | null | undefined>(undefined),
			delimiterType: new FormControl<TextToColumnsRequestDelimiterType | null | undefined>(undefined),
		});

	}

	export enum TextToColumnsRequestDelimiterType { DELIMITER_TYPE_UNSPECIFIED = 'DELIMITER_TYPE_UNSPECIFIED', COMMA = 'COMMA', SEMICOLON = 'SEMICOLON', PERIOD = 'PERIOD', SPACE = 'SPACE', CUSTOM = 'CUSTOM', AUTODETECT = 'AUTODETECT' }


	/** Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula. */
	export interface TrimWhitespaceRequest {

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;
	}

	/** Trims the whitespace (such as spaces, tabs, or new lines) in every cell in the specified range. This request removes all whitespace from the start and end of each cell's text, and reduces any subsequence of remaining whitespace characters to a single space. If the resulting trimmed text starts with a '+' or '=' character, the text remains as a string value and isn't interpreted as a formula. */
	export interface TrimWhitespaceRequestFormProperties {
	}
	export function CreateTrimWhitespaceRequestFormGroup() {
		return new FormGroup<TrimWhitespaceRequestFormProperties>({
		});

	}


	/** Unmerges cells in the given range. */
	export interface UnmergeCellsRequest {

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;
	}

	/** Unmerges cells in the given range. */
	export interface UnmergeCellsRequestFormProperties {
	}
	export function CreateUnmergeCellsRequestFormGroup() {
		return new FormGroup<UnmergeCellsRequestFormProperties>({
		});

	}


	/** Updates properties of the supplied banded range. */
	export interface UpdateBandingRequest {

		/** A banded (alternating colors) range in a sheet. */
		bandedRange?: BandedRange;

		/** The fields that should be updated. At least one field must be specified. The root `bandedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;
	}

	/** Updates properties of the supplied banded range. */
	export interface UpdateBandingRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `bandedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateBandingRequestFormGroup() {
		return new FormGroup<UpdateBandingRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE. */
	export interface UpdateBordersRequest {

		/** A border along a cell. */
		bottom?: Border;

		/** A border along a cell. */
		innerHorizontal?: Border;

		/** A border along a cell. */
		innerVertical?: Border;

		/** A border along a cell. */
		left?: Border;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** A border along a cell. */
		right?: Border;

		/** A border along a cell. */
		top?: Border;
	}

	/** Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE. */
	export interface UpdateBordersRequestFormProperties {
	}
	export function CreateUpdateBordersRequestFormGroup() {
		return new FormGroup<UpdateBordersRequestFormProperties>({
		});

	}


	/** Updates all cells in a range with new data. */
	export interface UpdateCellsRequest {

		/** The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`. */
		range?: GridRange;

		/** The data to write. */
		rows?: Array<RowData>;

		/** A coordinate in a sheet. All indexes are zero-based. */
		start?: GridCoordinate;
	}

	/** Updates all cells in a range with new data. */
	export interface UpdateCellsRequestFormProperties {

		/** The fields of CellData that should be updated. At least one field must be specified. The root is the CellData; 'row.values.' should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCellsRequestFormGroup() {
		return new FormGroup<UpdateCellsRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.) */
	export interface UpdateChartSpecRequest {

		/** The ID of the chart to update. */
		chartId?: number | null;

		/** The specifications of a chart. */
		spec?: ChartSpec;
	}

	/** Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.) */
	export interface UpdateChartSpecRequestFormProperties {

		/** The ID of the chart to update. */
		chartId: FormControl<number | null | undefined>,
	}
	export function CreateUpdateChartSpecRequestFormGroup() {
		return new FormGroup<UpdateChartSpecRequestFormProperties>({
			chartId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates a conditional format rule at the given index, or moves a conditional format rule to another index. */
	export interface UpdateConditionalFormatRuleRequest {

		/** The zero-based index of the rule that should be replaced or moved. */
		index?: number | null;

		/** The zero-based new index the rule should end up at. */
		newIndex?: number | null;

		/** A rule describing a conditional format. */
		rule?: ConditionalFormatRule;

		/** The sheet of the rule to move. Required if new_index is set, unused otherwise. */
		sheetId?: number | null;
	}

	/** Updates a conditional format rule at the given index, or moves a conditional format rule to another index. */
	export interface UpdateConditionalFormatRuleRequestFormProperties {

		/** The zero-based index of the rule that should be replaced or moved. */
		index: FormControl<number | null | undefined>,

		/** The zero-based new index the rule should end up at. */
		newIndex: FormControl<number | null | undefined>,

		/** The sheet of the rule to move. Required if new_index is set, unused otherwise. */
		sheetId: FormControl<number | null | undefined>,
	}
	export function CreateUpdateConditionalFormatRuleRequestFormGroup() {
		return new FormGroup<UpdateConditionalFormatRuleRequestFormProperties>({
			index: new FormControl<number | null | undefined>(undefined),
			newIndex: new FormControl<number | null | undefined>(undefined),
			sheetId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope. */
	export interface UpdateDataSourceRequest {

		/** Information about an external data source in the spreadsheet. */
		dataSource?: DataSource;

		/** The fields that should be updated. At least one field must be specified. The root `dataSource` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;
	}

	/** Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope. */
	export interface UpdateDataSourceRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `dataSource` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDataSourceRequestFormGroup() {
		return new FormGroup<UpdateDataSourceRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update. */
	export interface UpdateDeveloperMetadataRequest {

		/** The filters matching the developer metadata entries to update. */
		dataFilters?: Array<DataFilter>;

		/** Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too. */
		developerMetadata?: DeveloperMetadata;

		/** The fields that should be updated. At least one field must be specified. The root `developerMetadata` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;
	}

	/** A request to update properties of developer metadata. Updates the properties of the developer metadata selected by the filters to the values provided in the DeveloperMetadata resource. Callers must specify the properties they wish to update in the fields parameter, as well as specify at least one DataFilter matching the metadata they wish to update. */
	export interface UpdateDeveloperMetadataRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `developerMetadata` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDeveloperMetadataRequestFormGroup() {
		return new FormGroup<UpdateDeveloperMetadataRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates the state of the specified group. */
	export interface UpdateDimensionGroupRequest {

		/** A group over an interval of rows or columns on a sheet, which can contain or be contained within other groups. A group can be collapsed or expanded as a unit on the sheet. */
		dimensionGroup?: DimensionGroup;

		/** The fields that should be updated. At least one field must be specified. The root `dimensionGroup` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;
	}

	/** Updates the state of the specified group. */
	export interface UpdateDimensionGroupRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `dimensionGroup` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDimensionGroupRequestFormGroup() {
		return new FormGroup<UpdateDimensionGroupRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates properties of dimensions within the specified range. */
	export interface UpdateDimensionPropertiesRequest {

		/** A range along a single dimension on a DATA_SOURCE sheet. */
		dataSourceSheetRange?: DataSourceSheetDimensionRange;

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** Properties about a dimension. */
		properties?: DimensionProperties;

		/** A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side. */
		range?: DimensionRange;
	}

	/** Updates properties of dimensions within the specified range. */
	export interface UpdateDimensionPropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateDimensionPropertiesRequestFormGroup() {
		return new FormGroup<UpdateDimensionPropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties about a dimension. */
	export interface DimensionProperties {

		/** An unique identifier that references a data source column. */
		dataSourceColumnReference?: DataSourceColumnReference;

		/** The developer metadata associated with a single row or column. */
		developerMetadata?: Array<DeveloperMetadata>;

		/** True if this dimension is being filtered. This field is read-only. */
		hiddenByFilter?: boolean | null;

		/** True if this dimension is explicitly hidden. */
		hiddenByUser?: boolean | null;

		/** The height (if a row) or width (if a column) of the dimension in pixels. */
		pixelSize?: number | null;
	}

	/** Properties about a dimension. */
	export interface DimensionPropertiesFormProperties {

		/** True if this dimension is being filtered. This field is read-only. */
		hiddenByFilter: FormControl<boolean | null | undefined>,

		/** True if this dimension is explicitly hidden. */
		hiddenByUser: FormControl<boolean | null | undefined>,

		/** The height (if a row) or width (if a column) of the dimension in pixels. */
		pixelSize: FormControl<number | null | undefined>,
	}
	export function CreateDimensionPropertiesFormGroup() {
		return new FormGroup<DimensionPropertiesFormProperties>({
			hiddenByFilter: new FormControl<boolean | null | undefined>(undefined),
			hiddenByUser: new FormControl<boolean | null | undefined>(undefined),
			pixelSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates an embedded object's border property. */
	export interface UpdateEmbeddedObjectBorderRequest {

		/** A border along an embedded object. */
		border?: EmbeddedObjectBorder;

		/** The fields that should be updated. At least one field must be specified. The root `border` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** The ID of the embedded object to update. */
		objectId?: number | null;
	}

	/** Updates an embedded object's border property. */
	export interface UpdateEmbeddedObjectBorderRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `border` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,

		/** The ID of the embedded object to update. */
		objectId: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEmbeddedObjectBorderRequestFormGroup() {
		return new FormGroup<UpdateEmbeddedObjectBorderRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Update an embedded object's position (such as a moving or resizing a chart or image). */
	export interface UpdateEmbeddedObjectPositionRequest {

		/** The fields of OverlayPosition that should be updated when setting a new position. Used only if newPosition.overlayPosition is set, in which case at least one field must be specified. The root `newPosition.overlayPosition` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** The position of an embedded object such as a chart. */
		newPosition?: EmbeddedObjectPosition;

		/** The ID of the object to moved. */
		objectId?: number | null;
	}

	/** Update an embedded object's position (such as a moving or resizing a chart or image). */
	export interface UpdateEmbeddedObjectPositionRequestFormProperties {

		/** The fields of OverlayPosition that should be updated when setting a new position. Used only if newPosition.overlayPosition is set, in which case at least one field must be specified. The root `newPosition.overlayPosition` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,

		/** The ID of the object to moved. */
		objectId: FormControl<number | null | undefined>,
	}
	export function CreateUpdateEmbeddedObjectPositionRequestFormGroup() {
		return new FormGroup<UpdateEmbeddedObjectPositionRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			objectId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates properties of the filter view. */
	export interface UpdateFilterViewRequest {

		/** The fields that should be updated. At least one field must be specified. The root `filter` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** A filter view. */
		filter?: FilterView;
	}

	/** Updates properties of the filter view. */
	export interface UpdateFilterViewRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `filter` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateFilterViewRequestFormGroup() {
		return new FormGroup<UpdateFilterViewRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates properties of the named range with the specified namedRangeId. */
	export interface UpdateNamedRangeRequest {

		/** The fields that should be updated. At least one field must be specified. The root `namedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** A named range. */
		namedRange?: NamedRange;
	}

	/** Updates properties of the named range with the specified namedRangeId. */
	export interface UpdateNamedRangeRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `namedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateNamedRangeRequestFormGroup() {
		return new FormGroup<UpdateNamedRangeRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates an existing protected range with the specified protectedRangeId. */
	export interface UpdateProtectedRangeRequest {

		/** The fields that should be updated. At least one field must be specified. The root `protectedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** A protected range. */
		protectedRange?: ProtectedRange;
	}

	/** Updates an existing protected range with the specified protectedRangeId. */
	export interface UpdateProtectedRangeRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `protectedRange` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProtectedRangeRequestFormGroup() {
		return new FormGroup<UpdateProtectedRangeRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates properties of the sheet with the specified sheetId. */
	export interface UpdateSheetPropertiesRequest {

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** Properties of a sheet. */
		properties?: SheetProperties;
	}

	/** Updates properties of the sheet with the specified sheetId. */
	export interface UpdateSheetPropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSheetPropertiesRequestFormGroup() {
		return new FormGroup<UpdateSheetPropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest. */
	export interface UpdateSlicerSpecRequest {

		/** The fields that should be updated. At least one field must be specified. The root `SlicerSpec` is implied and should not be specified. A single "*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** The id of the slicer to update. */
		slicerId?: number | null;

		/** The specifications of a slicer. */
		spec?: SlicerSpec;
	}

	/** Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest. */
	export interface UpdateSlicerSpecRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `SlicerSpec` is implied and should not be specified. A single "*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,

		/** The id of the slicer to update. */
		slicerId: FormControl<number | null | undefined>,
	}
	export function CreateUpdateSlicerSpecRequestFormGroup() {
		return new FormGroup<UpdateSlicerSpecRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
			slicerId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Updates properties of a spreadsheet. */
	export interface UpdateSpreadsheetPropertiesRequest {

		/** The fields that should be updated. At least one field must be specified. The root 'properties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields?: string | null;

		/** Properties of a spreadsheet. */
		properties?: SpreadsheetProperties;
	}

	/** Updates properties of a spreadsheet. */
	export interface UpdateSpreadsheetPropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root 'properties' is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. */
		fields: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSpreadsheetPropertiesRequestFormGroup() {
		return new FormGroup<UpdateSpreadsheetPropertiesRequestFormProperties>({
			fields: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of a spreadsheet. */
	export interface SpreadsheetProperties {

		/** The amount of time to wait before volatile functions are recalculated. */
		autoRecalc?: SpreadsheetPropertiesAutoRecalc | null;

		/** The format of a cell. */
		defaultFormat?: CellFormat;

		/** Settings to control how circular dependencies are resolved with iterative calculation. */
		iterativeCalculationSettings?: IterativeCalculationSettings;

		/** The locale of the spreadsheet in one of the following formats: * an ISO 639-1 language code such as `en` * an ISO 639-2 language code such as `fil`, if no 639-1 code exists * a combination of the ISO language code and country code, such as `en_US` Note: when updating this field, not all locales/languages are supported. */
		locale?: string | null;

		/** Represents spreadsheet theme */
		spreadsheetTheme?: SpreadsheetTheme;

		/** The time zone of the spreadsheet, in CLDR format such as `America/New_York`. If the time zone isn't recognized, this may be a custom time zone such as `GMT-07:00`. */
		timeZone?: string | null;

		/** The title of the spreadsheet. */
		title?: string | null;
	}

	/** Properties of a spreadsheet. */
	export interface SpreadsheetPropertiesFormProperties {

		/** The amount of time to wait before volatile functions are recalculated. */
		autoRecalc: FormControl<SpreadsheetPropertiesAutoRecalc | null | undefined>,

		/** The locale of the spreadsheet in one of the following formats: * an ISO 639-1 language code such as `en` * an ISO 639-2 language code such as `fil`, if no 639-1 code exists * a combination of the ISO language code and country code, such as `en_US` Note: when updating this field, not all locales/languages are supported. */
		locale: FormControl<string | null | undefined>,

		/** The time zone of the spreadsheet, in CLDR format such as `America/New_York`. If the time zone isn't recognized, this may be a custom time zone such as `GMT-07:00`. */
		timeZone: FormControl<string | null | undefined>,

		/** The title of the spreadsheet. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSpreadsheetPropertiesFormGroup() {
		return new FormGroup<SpreadsheetPropertiesFormProperties>({
			autoRecalc: new FormControl<SpreadsheetPropertiesAutoRecalc | null | undefined>(undefined),
			locale: new FormControl<string | null | undefined>(undefined),
			timeZone: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SpreadsheetPropertiesAutoRecalc { RECALCULATION_INTERVAL_UNSPECIFIED = 'RECALCULATION_INTERVAL_UNSPECIFIED', ON_CHANGE = 'ON_CHANGE', MINUTE = 'MINUTE', HOUR = 'HOUR' }


	/** Settings to control how circular dependencies are resolved with iterative calculation. */
	export interface IterativeCalculationSettings {

		/** When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop. */
		convergenceThreshold?: number | null;

		/** When iterative calculation is enabled, the maximum number of calculation rounds to perform. */
		maxIterations?: number | null;
	}

	/** Settings to control how circular dependencies are resolved with iterative calculation. */
	export interface IterativeCalculationSettingsFormProperties {

		/** When iterative calculation is enabled and successive results differ by less than this threshold value, the calculation rounds stop. */
		convergenceThreshold: FormControl<number | null | undefined>,

		/** When iterative calculation is enabled, the maximum number of calculation rounds to perform. */
		maxIterations: FormControl<number | null | undefined>,
	}
	export function CreateIterativeCalculationSettingsFormGroup() {
		return new FormGroup<IterativeCalculationSettingsFormProperties>({
			convergenceThreshold: new FormControl<number | null | undefined>(undefined),
			maxIterations: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents spreadsheet theme */
	export interface SpreadsheetTheme {

		/** Name of the primary font family. */
		primaryFontFamily?: string | null;

		/** The spreadsheet theme color pairs. To update you must provide all theme color pairs. */
		themeColors?: Array<ThemeColorPair>;
	}

	/** Represents spreadsheet theme */
	export interface SpreadsheetThemeFormProperties {

		/** Name of the primary font family. */
		primaryFontFamily: FormControl<string | null | undefined>,
	}
	export function CreateSpreadsheetThemeFormGroup() {
		return new FormGroup<SpreadsheetThemeFormProperties>({
			primaryFontFamily: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A pair mapping a spreadsheet theme color type to the concrete color it represents. */
	export interface ThemeColorPair {

		/** A color value. */
		color?: ColorStyle;

		/** The type of the spreadsheet theme color. */
		colorType?: ColorStyleThemeColor | null;
	}

	/** A pair mapping a spreadsheet theme color type to the concrete color it represents. */
	export interface ThemeColorPairFormProperties {

		/** The type of the spreadsheet theme color. */
		colorType: FormControl<ColorStyleThemeColor | null | undefined>,
	}
	export function CreateThemeColorPairFormGroup() {
		return new FormGroup<ThemeColorPairFormProperties>({
			colorType: new FormControl<ColorStyleThemeColor | null | undefined>(undefined),
		});

	}


	/** The reply for batch updating a spreadsheet. */
	export interface BatchUpdateSpreadsheetResponse {

		/** The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty. */
		replies?: Array<Response>;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string | null;

		/** Resource that represents a spreadsheet. */
		updatedSpreadsheet?: Spreadsheet;
	}

	/** The reply for batch updating a spreadsheet. */
	export interface BatchUpdateSpreadsheetResponseFormProperties {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId: FormControl<string | null | undefined>,
	}
	export function CreateBatchUpdateSpreadsheetResponseFormGroup() {
		return new FormGroup<BatchUpdateSpreadsheetResponseFormProperties>({
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single response from an update. */
	export interface Response {

		/** The result of adding a banded range. */
		addBanding?: AddBandingResponse;

		/** The result of adding a chart to a spreadsheet. */
		addChart?: AddChartResponse;

		/** The result of adding a data source. */
		addDataSource?: AddDataSourceResponse;

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

		/** The response from refreshing one or multiple data source objects. */
		refreshDataSource?: RefreshDataSourceResponse;

		/** The result of trimming whitespace in cells. */
		trimWhitespace?: TrimWhitespaceResponse;

		/** The result of updating a conditional format rule. */
		updateConditionalFormatRule?: UpdateConditionalFormatRuleResponse;

		/** The response from updating data source. */
		updateDataSource?: UpdateDataSourceResponse;

		/** The response from updating developer metadata. */
		updateDeveloperMetadata?: UpdateDeveloperMetadataResponse;

		/** The result of updating an embedded object's position. */
		updateEmbeddedObjectPosition?: UpdateEmbeddedObjectPositionResponse;
	}

	/** A single response from an update. */
	export interface ResponseFormProperties {
	}
	export function CreateResponseFormGroup() {
		return new FormGroup<ResponseFormProperties>({
		});

	}


	/** The response from creating developer metadata. */
	export interface CreateDeveloperMetadataResponse {

		/** Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too. */
		developerMetadata?: DeveloperMetadata;
	}

	/** The response from creating developer metadata. */
	export interface CreateDeveloperMetadataResponseFormProperties {
	}
	export function CreateCreateDeveloperMetadataResponseFormGroup() {
		return new FormGroup<CreateDeveloperMetadataResponseFormProperties>({
		});

	}


	/** The result of deleting a conditional format rule. */
	export interface DeleteConditionalFormatRuleResponse {

		/** A rule describing a conditional format. */
		rule?: ConditionalFormatRule;
	}

	/** The result of deleting a conditional format rule. */
	export interface DeleteConditionalFormatRuleResponseFormProperties {
	}
	export function CreateDeleteConditionalFormatRuleResponseFormGroup() {
		return new FormGroup<DeleteConditionalFormatRuleResponseFormProperties>({
		});

	}


	/** The response from deleting developer metadata. */
	export interface DeleteDeveloperMetadataResponse {

		/** The metadata that was deleted. */
		deletedDeveloperMetadata?: Array<DeveloperMetadata>;
	}

	/** The response from deleting developer metadata. */
	export interface DeleteDeveloperMetadataResponseFormProperties {
	}
	export function CreateDeleteDeveloperMetadataResponseFormGroup() {
		return new FormGroup<DeleteDeveloperMetadataResponseFormProperties>({
		});

	}


	/** The result of deleting a group. */
	export interface DeleteDimensionGroupResponse {

		/** All groups of a dimension after deleting a group from that dimension. */
		dimensionGroups?: Array<DimensionGroup>;
	}

	/** The result of deleting a group. */
	export interface DeleteDimensionGroupResponseFormProperties {
	}
	export function CreateDeleteDimensionGroupResponseFormGroup() {
		return new FormGroup<DeleteDimensionGroupResponseFormProperties>({
		});

	}


	/** The result of removing duplicates in a range. */
	export interface DeleteDuplicatesResponse {

		/** The number of duplicate rows removed. */
		duplicatesRemovedCount?: number | null;
	}

	/** The result of removing duplicates in a range. */
	export interface DeleteDuplicatesResponseFormProperties {

		/** The number of duplicate rows removed. */
		duplicatesRemovedCount: FormControl<number | null | undefined>,
	}
	export function CreateDeleteDuplicatesResponseFormGroup() {
		return new FormGroup<DeleteDuplicatesResponseFormProperties>({
			duplicatesRemovedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of a filter view being duplicated. */
	export interface DuplicateFilterViewResponse {

		/** A filter view. */
		filter?: FilterView;
	}

	/** The result of a filter view being duplicated. */
	export interface DuplicateFilterViewResponseFormProperties {
	}
	export function CreateDuplicateFilterViewResponseFormGroup() {
		return new FormGroup<DuplicateFilterViewResponseFormProperties>({
		});

	}


	/** The result of duplicating a sheet. */
	export interface DuplicateSheetResponse {

		/** Properties of a sheet. */
		properties?: SheetProperties;
	}

	/** The result of duplicating a sheet. */
	export interface DuplicateSheetResponseFormProperties {
	}
	export function CreateDuplicateSheetResponseFormGroup() {
		return new FormGroup<DuplicateSheetResponseFormProperties>({
		});

	}


	/** The result of the find/replace. */
	export interface FindReplaceResponse {

		/** The number of formula cells changed. */
		formulasChanged?: number | null;

		/** The number of occurrences (possibly multiple within a cell) changed. For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`. */
		occurrencesChanged?: number | null;

		/** The number of rows changed. */
		rowsChanged?: number | null;

		/** The number of sheets changed. */
		sheetsChanged?: number | null;

		/** The number of non-formula cells changed. */
		valuesChanged?: number | null;
	}

	/** The result of the find/replace. */
	export interface FindReplaceResponseFormProperties {

		/** The number of formula cells changed. */
		formulasChanged: FormControl<number | null | undefined>,

		/** The number of occurrences (possibly multiple within a cell) changed. For example, if replacing `"e"` with `"o"` in `"Google Sheets"`, this would be `"3"` because `"Google Sheets"` -> `"Googlo Shoots"`. */
		occurrencesChanged: FormControl<number | null | undefined>,

		/** The number of rows changed. */
		rowsChanged: FormControl<number | null | undefined>,

		/** The number of sheets changed. */
		sheetsChanged: FormControl<number | null | undefined>,

		/** The number of non-formula cells changed. */
		valuesChanged: FormControl<number | null | undefined>,
	}
	export function CreateFindReplaceResponseFormGroup() {
		return new FormGroup<FindReplaceResponseFormProperties>({
			formulasChanged: new FormControl<number | null | undefined>(undefined),
			occurrencesChanged: new FormControl<number | null | undefined>(undefined),
			rowsChanged: new FormControl<number | null | undefined>(undefined),
			sheetsChanged: new FormControl<number | null | undefined>(undefined),
			valuesChanged: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response from refreshing one or multiple data source objects. */
	export interface RefreshDataSourceResponse {

		/** All the refresh status for the data source object references specified in the request. If is_all is specified, the field contains only those in failure status. */
		statuses?: Array<RefreshDataSourceObjectExecutionStatus>;
	}

	/** The response from refreshing one or multiple data source objects. */
	export interface RefreshDataSourceResponseFormProperties {
	}
	export function CreateRefreshDataSourceResponseFormGroup() {
		return new FormGroup<RefreshDataSourceResponseFormProperties>({
		});

	}


	/** The execution status of refreshing one data source object. */
	export interface RefreshDataSourceObjectExecutionStatus {

		/** The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
		dataExecutionStatus?: DataExecutionStatus;

		/** Reference to a data source object. */
		reference?: DataSourceObjectReference;
	}

	/** The execution status of refreshing one data source object. */
	export interface RefreshDataSourceObjectExecutionStatusFormProperties {
	}
	export function CreateRefreshDataSourceObjectExecutionStatusFormGroup() {
		return new FormGroup<RefreshDataSourceObjectExecutionStatusFormProperties>({
		});

	}


	/** The result of trimming whitespace in cells. */
	export interface TrimWhitespaceResponse {

		/** The number of cells that were trimmed of whitespace. */
		cellsChangedCount?: number | null;
	}

	/** The result of trimming whitespace in cells. */
	export interface TrimWhitespaceResponseFormProperties {

		/** The number of cells that were trimmed of whitespace. */
		cellsChangedCount: FormControl<number | null | undefined>,
	}
	export function CreateTrimWhitespaceResponseFormGroup() {
		return new FormGroup<TrimWhitespaceResponseFormProperties>({
			cellsChangedCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The result of updating a conditional format rule. */
	export interface UpdateConditionalFormatRuleResponse {

		/** The index of the new rule. */
		newIndex?: number | null;

		/** A rule describing a conditional format. */
		newRule?: ConditionalFormatRule;

		/** The old index of the rule. Not set if a rule was replaced (because it is the same as new_index). */
		oldIndex?: number | null;

		/** A rule describing a conditional format. */
		oldRule?: ConditionalFormatRule;
	}

	/** The result of updating a conditional format rule. */
	export interface UpdateConditionalFormatRuleResponseFormProperties {

		/** The index of the new rule. */
		newIndex: FormControl<number | null | undefined>,

		/** The old index of the rule. Not set if a rule was replaced (because it is the same as new_index). */
		oldIndex: FormControl<number | null | undefined>,
	}
	export function CreateUpdateConditionalFormatRuleResponseFormGroup() {
		return new FormGroup<UpdateConditionalFormatRuleResponseFormProperties>({
			newIndex: new FormControl<number | null | undefined>(undefined),
			oldIndex: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response from updating data source. */
	export interface UpdateDataSourceResponse {

		/** The data execution status. A data execution is created to sync a data source object with the latest data from a DataSource. It is usually scheduled to run at background, you can check its state to tell if an execution completes There are several scenarios where a data execution is triggered to run: * Adding a data source creates an associated data source sheet as well as a data execution to sync the data from the data source to the sheet. * Updating a data source creates a data execution to refresh the associated data source sheet similarly. * You can send refresh request to explicitly refresh one or multiple data source objects. */
		dataExecutionStatus?: DataExecutionStatus;

		/** Information about an external data source in the spreadsheet. */
		dataSource?: DataSource;
	}

	/** The response from updating data source. */
	export interface UpdateDataSourceResponseFormProperties {
	}
	export function CreateUpdateDataSourceResponseFormGroup() {
		return new FormGroup<UpdateDataSourceResponseFormProperties>({
		});

	}


	/** The response from updating developer metadata. */
	export interface UpdateDeveloperMetadataResponse {

		/** The updated developer metadata. */
		developerMetadata?: Array<DeveloperMetadata>;
	}

	/** The response from updating developer metadata. */
	export interface UpdateDeveloperMetadataResponseFormProperties {
	}
	export function CreateUpdateDeveloperMetadataResponseFormGroup() {
		return new FormGroup<UpdateDeveloperMetadataResponseFormProperties>({
		});

	}


	/** The result of updating an embedded object's position. */
	export interface UpdateEmbeddedObjectPositionResponse {

		/** The position of an embedded object such as a chart. */
		position?: EmbeddedObjectPosition;
	}

	/** The result of updating an embedded object's position. */
	export interface UpdateEmbeddedObjectPositionResponseFormProperties {
	}
	export function CreateUpdateEmbeddedObjectPositionResponseFormGroup() {
		return new FormGroup<UpdateEmbeddedObjectPositionResponseFormProperties>({
		});

	}


	/** Resource that represents a spreadsheet. */
	export interface Spreadsheet {

		/** Output only. A list of data source refresh schedules. */
		dataSourceSchedules?: Array<DataSourceRefreshSchedule>;

		/** A list of external data sources connected with the spreadsheet. */
		dataSources?: Array<DataSource>;

		/** The developer metadata associated with a spreadsheet. */
		developerMetadata?: Array<DeveloperMetadata>;

		/** The named ranges defined in a spreadsheet. */
		namedRanges?: Array<NamedRange>;

		/** Properties of a spreadsheet. */
		properties?: SpreadsheetProperties;

		/** The sheets that are part of a spreadsheet. */
		sheets?: Array<Sheet>;

		/** The ID of the spreadsheet. This field is read-only. */
		spreadsheetId?: string | null;

		/** The url of the spreadsheet. This field is read-only. */
		spreadsheetUrl?: string | null;
	}

	/** Resource that represents a spreadsheet. */
	export interface SpreadsheetFormProperties {

		/** The ID of the spreadsheet. This field is read-only. */
		spreadsheetId: FormControl<string | null | undefined>,

		/** The url of the spreadsheet. This field is read-only. */
		spreadsheetUrl: FormControl<string | null | undefined>,
	}
	export function CreateSpreadsheetFormGroup() {
		return new FormGroup<SpreadsheetFormProperties>({
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
			spreadsheetUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8 AM , the refresh will take place between 8 AM and 12 PM every day. */
	export interface DataSourceRefreshSchedule {

		/** A schedule for data to refresh every day in a given time interval. */
		dailySchedule?: DataSourceRefreshDailySchedule;

		/** True if the refresh schedule is enabled, or false otherwise. */
		enabled?: boolean | null;

		/** A monthly schedule for data to refresh on specific days in the month in a given time interval. */
		monthlySchedule?: DataSourceRefreshMonthlySchedule;

		/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
		nextRun?: Interval;

		/** The scope of the refresh. Must be ALL_DATA_SOURCES. */
		refreshScope?: DataSourceRefreshScheduleRefreshScope | null;

		/** A weekly schedule for data to refresh on specific days in a given time interval. */
		weeklySchedule?: DataSourceRefreshWeeklySchedule;
	}

	/** Schedule for refreshing the data source. Data sources in the spreadsheet are refreshed within a time interval. You can specify the start time by clicking the Scheduled Refresh button in the Sheets editor, but the interval is fixed at 4 hours. For example, if you specify a start time of 8 AM , the refresh will take place between 8 AM and 12 PM every day. */
	export interface DataSourceRefreshScheduleFormProperties {

		/** True if the refresh schedule is enabled, or false otherwise. */
		enabled: FormControl<boolean | null | undefined>,

		/** The scope of the refresh. Must be ALL_DATA_SOURCES. */
		refreshScope: FormControl<DataSourceRefreshScheduleRefreshScope | null | undefined>,
	}
	export function CreateDataSourceRefreshScheduleFormGroup() {
		return new FormGroup<DataSourceRefreshScheduleFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
			refreshScope: new FormControl<DataSourceRefreshScheduleRefreshScope | null | undefined>(undefined),
		});

	}


	/** A schedule for data to refresh every day in a given time interval. */
	export interface DataSourceRefreshDailySchedule {

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** A schedule for data to refresh every day in a given time interval. */
	export interface DataSourceRefreshDailyScheduleFormProperties {
	}
	export function CreateDataSourceRefreshDailyScheduleFormGroup() {
		return new FormGroup<DataSourceRefreshDailyScheduleFormProperties>({
		});

	}


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes: FormControl<number | null | undefined>,

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos: FormControl<number | null | undefined>,

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A monthly schedule for data to refresh on specific days in the month in a given time interval. */
	export interface DataSourceRefreshMonthlySchedule {

		/** Days of the month to refresh. Only 1-28 are supported, mapping to the 1st to the 28th day. At least one day must be specified. */
		daysOfMonth?: Array<number>;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** A monthly schedule for data to refresh on specific days in the month in a given time interval. */
	export interface DataSourceRefreshMonthlyScheduleFormProperties {
	}
	export function CreateDataSourceRefreshMonthlyScheduleFormGroup() {
		return new FormGroup<DataSourceRefreshMonthlyScheduleFormProperties>({
		});

	}


	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface Interval {

		/** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
		endTime?: string | null;

		/** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime?: string | null;
	}

	/** Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time. */
	export interface IntervalFormProperties {

		/** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
		endTime: FormControl<string | null | undefined>,

		/** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateIntervalFormGroup() {
		return new FormGroup<IntervalFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DataSourceRefreshScheduleRefreshScope { DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED = 'DATA_SOURCE_REFRESH_SCOPE_UNSPECIFIED', ALL_DATA_SOURCES = 'ALL_DATA_SOURCES' }


	/** A weekly schedule for data to refresh on specific days in a given time interval. */
	export interface DataSourceRefreshWeeklySchedule {

		/** Days of the week to refresh. At least one day must be specified. */
		daysOfWeek?: Array<string>;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** A weekly schedule for data to refresh on specific days in a given time interval. */
	export interface DataSourceRefreshWeeklyScheduleFormProperties {
	}
	export function CreateDataSourceRefreshWeeklyScheduleFormGroup() {
		return new FormGroup<DataSourceRefreshWeeklyScheduleFormProperties>({
		});

	}


	/** A sheet in a spreadsheet. */
	export interface Sheet {

		/** The banded (alternating colors) ranges on this sheet. */
		bandedRanges?: Array<BandedRange>;

		/** The default filter associated with a sheet. */
		basicFilter?: BasicFilter;

		/** The specifications of every chart on this sheet. */
		charts?: Array<EmbeddedChart>;

		/** All column groups on this sheet, ordered by increasing range start index, then by group depth. */
		columnGroups?: Array<DimensionGroup>;

		/** The conditional format rules in this sheet. */
		conditionalFormats?: Array<ConditionalFormatRule>;

		/** Data in the grid, if this is a grid sheet. The number of GridData objects returned is dependent on the number of ranges requested on this sheet. For example, if this is representing `Sheet1`, and the spreadsheet was requested with ranges `Sheet1!A1:C10` and `Sheet1!D15:E20`, then the first GridData will have a startRow/startColumn of `0`, while the second one will have `startRow 14` (zero-based row 15), and `startColumn 3` (zero-based column D). For a DATA_SOURCE sheet, you can not request a specific range, the GridData contains all the values. */
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

		/** All row groups on this sheet, ordered by increasing range start index, then by group depth. */
		rowGroups?: Array<DimensionGroup>;

		/** The slicers on this sheet. */
		slicers?: Array<Slicer>;
	}

	/** A sheet in a spreadsheet. */
	export interface SheetFormProperties {
	}
	export function CreateSheetFormGroup() {
		return new FormGroup<SheetFormProperties>({
		});

	}


	/** Data in the grid, as well as metadata about the dimensions. */
	export interface GridData {

		/** Metadata about the requested columns in the grid, starting with the column in start_column. */
		columnMetadata?: Array<DimensionProperties>;

		/** The data in the grid, one entry per row, starting with the row in startRow. The values in RowData will correspond to columns starting at start_column. */
		rowData?: Array<RowData>;

		/** Metadata about the requested rows in the grid, starting with the row in start_row. */
		rowMetadata?: Array<DimensionProperties>;

		/** The first column this GridData refers to, zero-based. */
		startColumn?: number | null;

		/** The first row this GridData refers to, zero-based. */
		startRow?: number | null;
	}

	/** Data in the grid, as well as metadata about the dimensions. */
	export interface GridDataFormProperties {

		/** The first column this GridData refers to, zero-based. */
		startColumn: FormControl<number | null | undefined>,

		/** The first row this GridData refers to, zero-based. */
		startRow: FormControl<number | null | undefined>,
	}
	export function CreateGridDataFormGroup() {
		return new FormGroup<GridDataFormProperties>({
			startColumn: new FormControl<number | null | undefined>(undefined),
			startRow: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request for updating more than one range of values in a spreadsheet. */
	export interface BatchUpdateValuesByDataFilterRequest {

		/** The new values to apply to the spreadsheet. If more than one range is matched by the specified DataFilter the specified values are applied to all of those ranges. */
		data?: Array<DataFilterValueRange>;

		/** Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). */
		includeValuesInResponse?: boolean | null;

		/** Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
		responseDateTimeRenderOption?: BatchGetValuesByDataFilterRequestDateTimeRenderOption | null;

		/** Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. */
		responseValueRenderOption?: BatchGetValuesByDataFilterRequestValueRenderOption | null;

		/** How the input data should be interpreted. */
		valueInputOption?: BatchUpdateValuesByDataFilterRequestValueInputOption | null;
	}

	/** The request for updating more than one range of values in a spreadsheet. */
	export interface BatchUpdateValuesByDataFilterRequestFormProperties {

		/** Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). */
		includeValuesInResponse: FormControl<boolean | null | undefined>,

		/** Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
		responseDateTimeRenderOption: FormControl<BatchGetValuesByDataFilterRequestDateTimeRenderOption | null | undefined>,

		/** Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. */
		responseValueRenderOption: FormControl<BatchGetValuesByDataFilterRequestValueRenderOption | null | undefined>,

		/** How the input data should be interpreted. */
		valueInputOption: FormControl<BatchUpdateValuesByDataFilterRequestValueInputOption | null | undefined>,
	}
	export function CreateBatchUpdateValuesByDataFilterRequestFormGroup() {
		return new FormGroup<BatchUpdateValuesByDataFilterRequestFormProperties>({
			includeValuesInResponse: new FormControl<boolean | null | undefined>(undefined),
			responseDateTimeRenderOption: new FormControl<BatchGetValuesByDataFilterRequestDateTimeRenderOption | null | undefined>(undefined),
			responseValueRenderOption: new FormControl<BatchGetValuesByDataFilterRequestValueRenderOption | null | undefined>(undefined),
			valueInputOption: new FormControl<BatchUpdateValuesByDataFilterRequestValueInputOption | null | undefined>(undefined),
		});

	}


	/** A range of values whose location is specified by a DataFilter. */
	export interface DataFilterValueRange {

		/** Filter that describes what data should be selected or returned from a request. */
		dataFilter?: DataFilter;

		/** The major dimension of the values. */
		majorDimension?: DimensionRangeDimension | null;

		/** The data to be written. If the provided values exceed any of the ranges matched by the data filter then the request fails. If the provided values are less than the matched ranges only the specified values are written, existing values in the matched ranges remain unaffected. */
		values?: Array<string>;
	}

	/** A range of values whose location is specified by a DataFilter. */
	export interface DataFilterValueRangeFormProperties {

		/** The major dimension of the values. */
		majorDimension: FormControl<DimensionRangeDimension | null | undefined>,
	}
	export function CreateDataFilterValueRangeFormGroup() {
		return new FormGroup<DataFilterValueRangeFormProperties>({
			majorDimension: new FormControl<DimensionRangeDimension | null | undefined>(undefined),
		});

	}

	export enum BatchUpdateValuesByDataFilterRequestValueInputOption { INPUT_VALUE_OPTION_UNSPECIFIED = 'INPUT_VALUE_OPTION_UNSPECIFIED', RAW = 'RAW', USER_ENTERED = 'USER_ENTERED' }


	/** The response when updating a range of values in a spreadsheet. */
	export interface BatchUpdateValuesByDataFilterResponse {

		/** The response for each range updated. */
		responses?: Array<UpdateValuesByDataFilterResponse>;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string | null;

		/** The total number of cells updated. */
		totalUpdatedCells?: number | null;

		/** The total number of columns where at least one cell in the column was updated. */
		totalUpdatedColumns?: number | null;

		/** The total number of rows where at least one cell in the row was updated. */
		totalUpdatedRows?: number | null;

		/** The total number of sheets where at least one cell in the sheet was updated. */
		totalUpdatedSheets?: number | null;
	}

	/** The response when updating a range of values in a spreadsheet. */
	export interface BatchUpdateValuesByDataFilterResponseFormProperties {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId: FormControl<string | null | undefined>,

		/** The total number of cells updated. */
		totalUpdatedCells: FormControl<number | null | undefined>,

		/** The total number of columns where at least one cell in the column was updated. */
		totalUpdatedColumns: FormControl<number | null | undefined>,

		/** The total number of rows where at least one cell in the row was updated. */
		totalUpdatedRows: FormControl<number | null | undefined>,

		/** The total number of sheets where at least one cell in the sheet was updated. */
		totalUpdatedSheets: FormControl<number | null | undefined>,
	}
	export function CreateBatchUpdateValuesByDataFilterResponseFormGroup() {
		return new FormGroup<BatchUpdateValuesByDataFilterResponseFormProperties>({
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
			totalUpdatedCells: new FormControl<number | null | undefined>(undefined),
			totalUpdatedColumns: new FormControl<number | null | undefined>(undefined),
			totalUpdatedRows: new FormControl<number | null | undefined>(undefined),
			totalUpdatedSheets: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The response when updating a range of values by a data filter in a spreadsheet. */
	export interface UpdateValuesByDataFilterResponse {

		/** Filter that describes what data should be selected or returned from a request. */
		dataFilter?: DataFilter;

		/** The number of cells updated. */
		updatedCells?: number | null;

		/** The number of columns where at least one cell in the column was updated. */
		updatedColumns?: number | null;

		/** Data within a range of the spreadsheet. */
		updatedData?: ValueRange;

		/** The range (in [A1 notation](/sheets/api/guides/concepts#cell)) that updates were applied to. */
		updatedRange?: string | null;

		/** The number of rows where at least one cell in the row was updated. */
		updatedRows?: number | null;
	}

	/** The response when updating a range of values by a data filter in a spreadsheet. */
	export interface UpdateValuesByDataFilterResponseFormProperties {

		/** The number of cells updated. */
		updatedCells: FormControl<number | null | undefined>,

		/** The number of columns where at least one cell in the column was updated. */
		updatedColumns: FormControl<number | null | undefined>,

		/** The range (in [A1 notation](/sheets/api/guides/concepts#cell)) that updates were applied to. */
		updatedRange: FormControl<string | null | undefined>,

		/** The number of rows where at least one cell in the row was updated. */
		updatedRows: FormControl<number | null | undefined>,
	}
	export function CreateUpdateValuesByDataFilterResponseFormGroup() {
		return new FormGroup<UpdateValuesByDataFilterResponseFormProperties>({
			updatedCells: new FormControl<number | null | undefined>(undefined),
			updatedColumns: new FormControl<number | null | undefined>(undefined),
			updatedRange: new FormControl<string | null | undefined>(undefined),
			updatedRows: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request for updating more than one range of values in a spreadsheet. */
	export interface BatchUpdateValuesRequest {

		/** The new values to apply to the spreadsheet. */
		data?: Array<ValueRange>;

		/** Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). */
		includeValuesInResponse?: boolean | null;

		/** Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
		responseDateTimeRenderOption?: BatchGetValuesByDataFilterRequestDateTimeRenderOption | null;

		/** Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. */
		responseValueRenderOption?: BatchGetValuesByDataFilterRequestValueRenderOption | null;

		/** How the input data should be interpreted. */
		valueInputOption?: BatchUpdateValuesByDataFilterRequestValueInputOption | null;
	}

	/** The request for updating more than one range of values in a spreadsheet. */
	export interface BatchUpdateValuesRequestFormProperties {

		/** Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. The `updatedData` field within each of the BatchUpdateValuesResponse.responses contains the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). */
		includeValuesInResponse: FormControl<boolean | null | undefined>,

		/** Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. */
		responseDateTimeRenderOption: FormControl<BatchGetValuesByDataFilterRequestDateTimeRenderOption | null | undefined>,

		/** Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. */
		responseValueRenderOption: FormControl<BatchGetValuesByDataFilterRequestValueRenderOption | null | undefined>,

		/** How the input data should be interpreted. */
		valueInputOption: FormControl<BatchUpdateValuesByDataFilterRequestValueInputOption | null | undefined>,
	}
	export function CreateBatchUpdateValuesRequestFormGroup() {
		return new FormGroup<BatchUpdateValuesRequestFormProperties>({
			includeValuesInResponse: new FormControl<boolean | null | undefined>(undefined),
			responseDateTimeRenderOption: new FormControl<BatchGetValuesByDataFilterRequestDateTimeRenderOption | null | undefined>(undefined),
			responseValueRenderOption: new FormControl<BatchGetValuesByDataFilterRequestValueRenderOption | null | undefined>(undefined),
			valueInputOption: new FormControl<BatchUpdateValuesByDataFilterRequestValueInputOption | null | undefined>(undefined),
		});

	}


	/** The response when updating a range of values in a spreadsheet. */
	export interface BatchUpdateValuesResponse {

		/** One UpdateValuesResponse per requested range, in the same order as the requests appeared. */
		responses?: Array<UpdateValuesResponse>;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string | null;

		/** The total number of cells updated. */
		totalUpdatedCells?: number | null;

		/** The total number of columns where at least one cell in the column was updated. */
		totalUpdatedColumns?: number | null;

		/** The total number of rows where at least one cell in the row was updated. */
		totalUpdatedRows?: number | null;

		/** The total number of sheets where at least one cell in the sheet was updated. */
		totalUpdatedSheets?: number | null;
	}

	/** The response when updating a range of values in a spreadsheet. */
	export interface BatchUpdateValuesResponseFormProperties {

		/** The spreadsheet the updates were applied to. */
		spreadsheetId: FormControl<string | null | undefined>,

		/** The total number of cells updated. */
		totalUpdatedCells: FormControl<number | null | undefined>,

		/** The total number of columns where at least one cell in the column was updated. */
		totalUpdatedColumns: FormControl<number | null | undefined>,

		/** The total number of rows where at least one cell in the row was updated. */
		totalUpdatedRows: FormControl<number | null | undefined>,

		/** The total number of sheets where at least one cell in the sheet was updated. */
		totalUpdatedSheets: FormControl<number | null | undefined>,
	}
	export function CreateBatchUpdateValuesResponseFormGroup() {
		return new FormGroup<BatchUpdateValuesResponseFormProperties>({
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
			totalUpdatedCells: new FormControl<number | null | undefined>(undefined),
			totalUpdatedColumns: new FormControl<number | null | undefined>(undefined),
			totalUpdatedRows: new FormControl<number | null | undefined>(undefined),
			totalUpdatedSheets: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The request for clearing a range of values in a spreadsheet. */
	export interface ClearValuesRequest {
	}

	/** The request for clearing a range of values in a spreadsheet. */
	export interface ClearValuesRequestFormProperties {
	}
	export function CreateClearValuesRequestFormGroup() {
		return new FormGroup<ClearValuesRequestFormProperties>({
		});

	}


	/** The response when clearing a range of values in a spreadsheet. */
	export interface ClearValuesResponse {

		/** The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a ranger larger than the bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet's limits.) */
		clearedRange?: string | null;

		/** The spreadsheet the updates were applied to. */
		spreadsheetId?: string | null;
	}

	/** The response when clearing a range of values in a spreadsheet. */
	export interface ClearValuesResponseFormProperties {

		/** The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a ranger larger than the bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet's limits.) */
		clearedRange: FormControl<string | null | undefined>,

		/** The spreadsheet the updates were applied to. */
		spreadsheetId: FormControl<string | null | undefined>,
	}
	export function CreateClearValuesResponseFormGroup() {
		return new FormGroup<ClearValuesResponseFormProperties>({
			clearedRange: new FormControl<string | null | undefined>(undefined),
			spreadsheetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request to copy a sheet across spreadsheets. */
	export interface CopySheetToAnotherSpreadsheetRequest {

		/** The ID of the spreadsheet to copy the sheet to. */
		destinationSpreadsheetId?: string | null;
	}

	/** The request to copy a sheet across spreadsheets. */
	export interface CopySheetToAnotherSpreadsheetRequestFormProperties {

		/** The ID of the spreadsheet to copy the sheet to. */
		destinationSpreadsheetId: FormControl<string | null | undefined>,
	}
	export function CreateCopySheetToAnotherSpreadsheetRequestFormGroup() {
		return new FormGroup<CopySheetToAnotherSpreadsheetRequestFormProperties>({
			destinationSpreadsheetId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request for retrieving a Spreadsheet. */
	export interface GetSpreadsheetByDataFilterRequest {

		/** The DataFilters used to select which ranges to retrieve from the spreadsheet. */
		dataFilters?: Array<DataFilter>;

		/** True if grid data should be returned. This parameter is ignored if a field mask was set in the request. */
		includeGridData?: boolean | null;
	}

	/** The request for retrieving a Spreadsheet. */
	export interface GetSpreadsheetByDataFilterRequestFormProperties {

		/** True if grid data should be returned. This parameter is ignored if a field mask was set in the request. */
		includeGridData: FormControl<boolean | null | undefined>,
	}
	export function CreateGetSpreadsheetByDataFilterRequestFormGroup() {
		return new FormGroup<GetSpreadsheetByDataFilterRequestFormProperties>({
			includeGridData: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A developer metadata entry and the data filters specified in the original request that matched it. */
	export interface MatchedDeveloperMetadata {

		/** All filters matching the returned developer metadata. */
		dataFilters?: Array<DataFilter>;

		/** Developer metadata associated with a location or object in a spreadsheet. Developer metadata may be used to associate arbitrary data with various parts of a spreadsheet and will remain associated at those locations as they move around and the spreadsheet is edited. For example, if developer metadata is associated with row 5 and another row is then subsequently inserted above row 5, that original metadata will still be associated with the row it was first associated with (what is now row 6). If the associated object is deleted its metadata is deleted too. */
		developerMetadata?: DeveloperMetadata;
	}

	/** A developer metadata entry and the data filters specified in the original request that matched it. */
	export interface MatchedDeveloperMetadataFormProperties {
	}
	export function CreateMatchedDeveloperMetadataFormGroup() {
		return new FormGroup<MatchedDeveloperMetadataFormProperties>({
		});

	}


	/** A request to retrieve all developer metadata matching the set of specified criteria. */
	export interface SearchDeveloperMetadataRequest {

		/** The data filters describing the criteria used to determine which DeveloperMetadata entries to return. DeveloperMetadata matching any of the specified filters are included in the response. */
		dataFilters?: Array<DataFilter>;
	}

	/** A request to retrieve all developer metadata matching the set of specified criteria. */
	export interface SearchDeveloperMetadataRequestFormProperties {
	}
	export function CreateSearchDeveloperMetadataRequestFormGroup() {
		return new FormGroup<SearchDeveloperMetadataRequestFormProperties>({
		});

	}


	/** A reply to a developer metadata search request. */
	export interface SearchDeveloperMetadataResponse {

		/** The metadata matching the criteria of the search request. */
		matchedDeveloperMetadata?: Array<MatchedDeveloperMetadata>;
	}

	/** A reply to a developer metadata search request. */
	export interface SearchDeveloperMetadataResponseFormProperties {
	}
	export function CreateSearchDeveloperMetadataResponseFormGroup() {
		return new FormGroup<SearchDeveloperMetadataResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a spreadsheet, returning the newly created spreadsheet.
		 * Post v4/spreadsheets
		 * @return {Spreadsheet} Successful response
		 */
		Sheets_spreadsheets_create(requestBody: Spreadsheet): Observable<Spreadsheet> {
			return this.http.post<Spreadsheet>(this.baseUri + 'v4/spreadsheets', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
		 * Get v4/spreadsheets/{spreadsheetId}
		 * @param {string} spreadsheetId The spreadsheet to request.
		 * @param {boolean} includeGridData True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
		 * @param {Array<string>} ranges The ranges to retrieve from the spreadsheet.
		 * @return {Spreadsheet} Successful response
		 */
		Sheets_spreadsheets_get(spreadsheetId: string, includeGridData: boolean | null | undefined, ranges: Array<string> | null | undefined): Observable<Spreadsheet> {
			return this.http.get<Spreadsheet>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '&includeGridData=' + includeGridData + '&' + ranges?.map(z => `ranges=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.
		 * Get v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}
		 * @param {string} spreadsheetId The ID of the spreadsheet to retrieve metadata from.
		 * @param {number} metadataId The ID of the developer metadata to retrieve.
		 * @return {DeveloperMetadata} Successful response
		 */
		Sheets_spreadsheets_developerMetadata_get(spreadsheetId: string, metadataId: number): Observable<DeveloperMetadata> {
			return this.http.get<DeveloperMetadata>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/developerMetadata/' + metadataId, {});
		}

		/**
		 * Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.
		 * Post v4/spreadsheets/{spreadsheetId}/developerMetadata:search
		 * @param {string} spreadsheetId The ID of the spreadsheet to retrieve metadata from.
		 * @return {SearchDeveloperMetadataResponse} Successful response
		 */
		Sheets_spreadsheets_developerMetadata_search(spreadsheetId: string, requestBody: SearchDeveloperMetadataRequest): Observable<SearchDeveloperMetadataResponse> {
			return this.http.post<SearchDeveloperMetadataResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/developerMetadata:search', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
		 * Post v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo
		 * @param {string} spreadsheetId The ID of the spreadsheet containing the sheet to copy.
		 * @param {number} sheetId The ID of the sheet to copy.
		 * @return {SheetProperties} Successful response
		 */
		Sheets_spreadsheets_sheets_copyTo(spreadsheetId: string, sheetId: number, requestBody: CopySheetToAnotherSpreadsheetRequest): Observable<SheetProperties> {
			return this.http.post<SheetProperties>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/sheets/' + sheetId + ':copyTo', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
		 * Get v4/spreadsheets/{spreadsheetId}/values/{range}
		 * @param {string} spreadsheetId The ID of the spreadsheet to retrieve data from.
		 * @param {string} range The [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell) of the range to retrieve values from.
		 * @param {BatchGetValuesByDataFilterRequestDateTimeRenderOption} dateTimeRenderOption How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
		 * @param {DimensionRangeDimension} majorDimension The major dimension that results should use. For example, if the spreadsheet data in Sheet1 is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=Sheet1!A1:B2?majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=Sheet1!A1:B2?majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
		 * @param {BatchGetValuesByDataFilterRequestValueRenderOption} valueRenderOption How values should be represented in the output. The default render option is FORMATTED_VALUE.
		 * @return {ValueRange} Successful response
		 */
		Sheets_spreadsheets_values_get(spreadsheetId: string, range: string, dateTimeRenderOption: BatchGetValuesByDataFilterRequestDateTimeRenderOption | null | undefined, majorDimension: DimensionRangeDimension | null | undefined, valueRenderOption: BatchGetValuesByDataFilterRequestValueRenderOption | null | undefined): Observable<ValueRange> {
			return this.http.get<ValueRange>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values/' + (range == null ? '' : encodeURIComponent(range)) + '&dateTimeRenderOption=' + dateTimeRenderOption + '&majorDimension=' + majorDimension + '&valueRenderOption=' + valueRenderOption, {});
		}

		/**
		 * Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
		 * Put v4/spreadsheets/{spreadsheetId}/values/{range}
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @param {string} range The [A1 notation](/sheets/api/guides/concepts#cell) of the values to update.
		 * @param {boolean} includeValuesInResponse Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
		 * @param {BatchGetValuesByDataFilterRequestDateTimeRenderOption} responseDateTimeRenderOption Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
		 * @param {BatchGetValuesByDataFilterRequestValueRenderOption} responseValueRenderOption Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
		 * @param {BatchUpdateValuesByDataFilterRequestValueInputOption} valueInputOption How the input data should be interpreted.
		 * @return {UpdateValuesResponse} Successful response
		 */
		Sheets_spreadsheets_values_update(spreadsheetId: string, range: string, includeValuesInResponse: boolean | null | undefined, responseDateTimeRenderOption: BatchGetValuesByDataFilterRequestDateTimeRenderOption | null | undefined, responseValueRenderOption: BatchGetValuesByDataFilterRequestValueRenderOption | null | undefined, valueInputOption: BatchUpdateValuesByDataFilterRequestValueInputOption | null | undefined, requestBody: ValueRange): Observable<UpdateValuesResponse> {
			return this.http.put<UpdateValuesResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values/' + (range == null ? '' : encodeURIComponent(range)) + '&includeValuesInResponse=' + includeValuesInResponse + '&responseDateTimeRenderOption=' + responseDateTimeRenderOption + '&responseValueRenderOption=' + responseValueRenderOption + '&valueInputOption=' + valueInputOption, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
		 * Post v4/spreadsheets/{spreadsheetId}/values/{range}:append
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @param {string} range The [A1 notation](/sheets/api/guides/concepts#cell) of a range to search for a logical table of data. Values are appended after the last row of the table.
		 * @param {boolean} includeValuesInResponse Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
		 * @param {Sheets_spreadsheets_values_appendInsertDataOption} insertDataOption How the input data should be inserted.
		 * @param {BatchGetValuesByDataFilterRequestDateTimeRenderOption} responseDateTimeRenderOption Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
		 * @param {BatchGetValuesByDataFilterRequestValueRenderOption} responseValueRenderOption Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
		 * @param {BatchUpdateValuesByDataFilterRequestValueInputOption} valueInputOption How the input data should be interpreted.
		 * @return {AppendValuesResponse} Successful response
		 */
		Sheets_spreadsheets_values_append(spreadsheetId: string, range: string, includeValuesInResponse: boolean | null | undefined, insertDataOption: Sheets_spreadsheets_values_appendInsertDataOption | null | undefined, responseDateTimeRenderOption: BatchGetValuesByDataFilterRequestDateTimeRenderOption | null | undefined, responseValueRenderOption: BatchGetValuesByDataFilterRequestValueRenderOption | null | undefined, valueInputOption: BatchUpdateValuesByDataFilterRequestValueInputOption | null | undefined, requestBody: ValueRange): Observable<AppendValuesResponse> {
			return this.http.post<AppendValuesResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values/' + (range == null ? '' : encodeURIComponent(range)) + ':append&includeValuesInResponse=' + includeValuesInResponse + '&insertDataOption=' + insertDataOption + '&responseDateTimeRenderOption=' + responseDateTimeRenderOption + '&responseValueRenderOption=' + responseValueRenderOption + '&valueInputOption=' + valueInputOption, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
		 * Post v4/spreadsheets/{spreadsheetId}/values/{range}:clear
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @param {string} range The [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell) of the values to clear.
		 * @return {ClearValuesResponse} Successful response
		 */
		Sheets_spreadsheets_values_clear(spreadsheetId: string, range: string, requestBody: ClearValuesRequest): Observable<ClearValuesResponse> {
			return this.http.post<ClearValuesResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values/' + (range == null ? '' : encodeURIComponent(range)) + ':clear', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.
		 * Post v4/spreadsheets/{spreadsheetId}/values:batchClear
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @return {BatchClearValuesResponse} Successful response
		 */
		Sheets_spreadsheets_values_batchClear(spreadsheetId: string, requestBody: BatchClearValuesRequest): Observable<BatchClearValuesResponse> {
			return this.http.post<BatchClearValuesResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchClear', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
		 * Post v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @return {BatchClearValuesByDataFilterResponse} Successful response
		 */
		Sheets_spreadsheets_values_batchClearByDataFilter(spreadsheetId: string, requestBody: BatchClearValuesByDataFilterRequest): Observable<BatchClearValuesByDataFilterResponse> {
			return this.http.post<BatchClearValuesByDataFilterResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchClearByDataFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
		 * Get v4/spreadsheets/{spreadsheetId}/values:batchGet
		 * @param {string} spreadsheetId The ID of the spreadsheet to retrieve data from.
		 * @param {BatchGetValuesByDataFilterRequestDateTimeRenderOption} dateTimeRenderOption How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
		 * @param {DimensionRangeDimension} majorDimension The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
		 * @param {Array<string>} ranges The [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell) of the range to retrieve values from.
		 * @param {BatchGetValuesByDataFilterRequestValueRenderOption} valueRenderOption How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
		 * @return {BatchGetValuesResponse} Successful response
		 */
		Sheets_spreadsheets_values_batchGet(spreadsheetId: string, dateTimeRenderOption: BatchGetValuesByDataFilterRequestDateTimeRenderOption | null | undefined, majorDimension: DimensionRangeDimension | null | undefined, ranges: Array<string> | null | undefined, valueRenderOption: BatchGetValuesByDataFilterRequestValueRenderOption | null | undefined): Observable<BatchGetValuesResponse> {
			return this.http.get<BatchGetValuesResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchGet&dateTimeRenderOption=' + dateTimeRenderOption + '&majorDimension=' + majorDimension + '&' + ranges?.map(z => `ranges=${encodeURIComponent(z)}`).join('&') + '&valueRenderOption=' + valueRenderOption, {});
		}

		/**
		 * Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
		 * Post v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter
		 * @param {string} spreadsheetId The ID of the spreadsheet to retrieve data from.
		 * @return {BatchGetValuesByDataFilterResponse} Successful response
		 */
		Sheets_spreadsheets_values_batchGetByDataFilter(spreadsheetId: string, requestBody: BatchGetValuesByDataFilterRequest): Observable<BatchGetValuesByDataFilterResponse> {
			return this.http.post<BatchGetValuesByDataFilterResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchGetByDataFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
		 * Post v4/spreadsheets/{spreadsheetId}/values:batchUpdate
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @return {BatchUpdateValuesResponse} Successful response
		 */
		Sheets_spreadsheets_values_batchUpdate(spreadsheetId: string, requestBody: BatchUpdateValuesRequest): Observable<BatchUpdateValuesResponse> {
			return this.http.post<BatchUpdateValuesResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.
		 * Post v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter
		 * @param {string} spreadsheetId The ID of the spreadsheet to update.
		 * @return {BatchUpdateValuesByDataFilterResponse} Successful response
		 */
		Sheets_spreadsheets_values_batchUpdateByDataFilter(spreadsheetId: string, requestBody: BatchUpdateValuesByDataFilterRequest): Observable<BatchUpdateValuesByDataFilterResponse> {
			return this.http.post<BatchUpdateValuesByDataFilterResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + '/values:batchUpdateByDataFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
		 * Post v4/spreadsheets/{spreadsheetId}:batchUpdate
		 * @param {string} spreadsheetId The spreadsheet to apply the updates to.
		 * @return {BatchUpdateSpreadsheetResponse} Successful response
		 */
		Sheets_spreadsheets_batchUpdate(spreadsheetId: string, requestBody: BatchUpdateSpreadsheetRequest): Observable<BatchUpdateSpreadsheetResponse> {
			return this.http.post<BatchUpdateSpreadsheetResponse>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + ':batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a [field mask](https://developers.google.com/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.
		 * Post v4/spreadsheets/{spreadsheetId}:getByDataFilter
		 * @param {string} spreadsheetId The spreadsheet to request.
		 * @return {Spreadsheet} Successful response
		 */
		Sheets_spreadsheets_getByDataFilter(spreadsheetId: string, requestBody: GetSpreadsheetByDataFilterRequest): Observable<Spreadsheet> {
			return this.http.post<Spreadsheet>(this.baseUri + 'v4/spreadsheets/' + (spreadsheetId == null ? '' : encodeURIComponent(spreadsheetId)) + ':getByDataFilter', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Sheets_spreadsheets_values_appendInsertDataOption { OVERWRITE = 'OVERWRITE', INSERT_ROWS = 'INSERT_ROWS' }

}

