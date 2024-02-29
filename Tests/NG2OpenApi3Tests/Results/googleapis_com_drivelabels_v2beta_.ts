import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The color derived from BadgeConfig and changed to the closest recommended supported color. */
	export interface GoogleAppsDriveLabelsV2betaBadgeColors {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		backgroundColor?: GoogleTypeColor;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		foregroundColor?: GoogleTypeColor;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		soloColor?: GoogleTypeColor;
	}

	/** The color derived from BadgeConfig and changed to the closest recommended supported color. */
	export interface GoogleAppsDriveLabelsV2betaBadgeColorsFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaBadgeColorsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaBadgeColorsFormProperties>({
		});

	}


	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface GoogleTypeColor {

		/**
		 * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
		 * Type: float
		 */
		alpha?: number | null;

		/**
		 * The amount of blue in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		blue?: number | null;

		/**
		 * The amount of green in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		green?: number | null;

		/**
		 * The amount of red in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		red?: number | null;
	}

	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface GoogleTypeColorFormProperties {

		/**
		 * The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0).
		 * Type: float
		 */
		alpha: FormControl<number | null | undefined>,

		/**
		 * The amount of blue in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		blue: FormControl<number | null | undefined>,

		/**
		 * The amount of green in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		green: FormControl<number | null | undefined>,

		/**
		 * The amount of red in the color as a value in the interval [0, 1].
		 * Type: float
		 */
		red: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeColorFormGroup() {
		return new FormGroup<GoogleTypeColorFormProperties>({
			alpha: new FormControl<number | null | undefined>(undefined),
			blue: new FormControl<number | null | undefined>(undefined),
			green: new FormControl<number | null | undefined>(undefined),
			red: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Badge status of the label. */
	export interface GoogleAppsDriveLabelsV2betaBadgeConfig {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: GoogleTypeColor;

		/** Override the default global priority of this badge. When set to 0, the default priority heuristic is used. */
		priorityOverride?: string | null;
	}

	/** Badge status of the label. */
	export interface GoogleAppsDriveLabelsV2betaBadgeConfigFormProperties {

		/** Override the default global priority of this badge. When set to 0, the default priority heuristic is used. */
		priorityOverride: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaBadgeConfigFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaBadgeConfigFormProperties>({
			priorityOverride: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deletes one of more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest {

		/** Required. The request message specifying the resources to update. */
		requests?: Array<GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest>;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the DeleteLabelPermissionRequest messages must either be empty or match this field. */
		useAdminAccess?: boolean | null;
	}

	/** Deletes one of more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequestFormProperties {

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the DeleteLabelPermissionRequest messages must either be empty or match this field. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequestFormProperties>({
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing. */
	export interface GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequest {

		/** Required. Label Permission resource name. */
		name?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;
	}

	/** Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing. */
	export interface GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequestFormProperties {

		/** Required. Label Permission resource name. */
		name: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeleteLabelPermissionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Updates one or more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest {

		/** Required. The request message specifying the resources to update. */
		requests?: Array<GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest>;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the UpdateLabelPermissionRequest messages must either be empty or match this field. */
		useAdminAccess?: boolean | null;
	}

	/** Updates one or more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequestFormProperties {

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the UpdateLabelPermissionRequest messages must either be empty or match this field. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequestFormProperties>({
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing. */
	export interface GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequest {

		/** The permission that applies to a principal (user, group, audience) on a label. */
		labelPermission?: GoogleAppsDriveLabelsV2betaLabelPermission;

		/** Required. The parent Label resource name. */
		parent?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;
	}

	/** Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing. */
	export interface GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequestFormProperties {

		/** Required. The parent Label resource name. */
		parent: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaUpdateLabelPermissionRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The permission that applies to a principal (user, group, audience) on a label. */
	export interface GoogleAppsDriveLabelsV2betaLabelPermission {

		/** Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the Label. */
		audience?: string | null;

		/** Specifies the email address for a user or group pricinpal. Not populated for audience principals. User and Group permissions may only be inserted using email address. On update requests, if email address is specified, no principal should be specified. */
		email?: string | null;

		/** Group resource name. */
		group?: string | null;

		/** Resource name of this permission. */
		name?: string | null;

		/** Person resource name. */
		person?: string | null;

		/** The role the principal should have. */
		role?: GoogleAppsDriveLabelsV2betaLabelPermissionRole | null;
	}

	/** The permission that applies to a principal (user, group, audience) on a label. */
	export interface GoogleAppsDriveLabelsV2betaLabelPermissionFormProperties {

		/** Audience to grant a role to. The magic value of `audiences/default` may be used to apply the role to the default audience in the context of the organization that owns the Label. */
		audience: FormControl<string | null | undefined>,

		/** Specifies the email address for a user or group pricinpal. Not populated for audience principals. User and Group permissions may only be inserted using email address. On update requests, if email address is specified, no principal should be specified. */
		email: FormControl<string | null | undefined>,

		/** Group resource name. */
		group: FormControl<string | null | undefined>,

		/** Resource name of this permission. */
		name: FormControl<string | null | undefined>,

		/** Person resource name. */
		person: FormControl<string | null | undefined>,

		/** The role the principal should have. */
		role: FormControl<GoogleAppsDriveLabelsV2betaLabelPermissionRole | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLabelPermissionFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLabelPermissionFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			person: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<GoogleAppsDriveLabelsV2betaLabelPermissionRole | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2betaLabelPermissionRole { LABEL_ROLE_UNSPECIFIED = 'LABEL_ROLE_UNSPECIFIED', READER = 'READER', APPLIER = 'APPLIER', ORGANIZER = 'ORGANIZER', EDITOR = 'EDITOR' }


	/** Response for updating one or more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse {

		/** Required. Permissions updated. */
		permissions?: Array<GoogleAppsDriveLabelsV2betaLabelPermission>;
	}

	/** Response for updating one or more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponseFormProperties>({
		});

	}


	/** Limits for date Field type. */
	export interface GoogleAppsDriveLabelsV2betaDateLimits {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		maxValue?: GoogleTypeDate;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		minValue?: GoogleTypeDate;
	}

	/** Limits for date Field type. */
	export interface GoogleAppsDriveLabelsV2betaDateLimitsFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDateLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDateLimitsFormProperties>({
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day?: number | null;

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month?: number | null;

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/**
		 * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest {

		/** The BCP-47 language code to use for evaluating localized Field labels when `include_label_in_response` is `true`. */
		languageCode?: string | null;

		/** A list of updates to apply to the Label. Requests will be applied in the order they are specified. */
		requests?: Array<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest>;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;

		/** When specified, only certain fields belonging to the indicated view will be returned. */
		view?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView | null;

		/** Provides control over how write requests are executed. When not specified, the last write wins. */
		writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
	}

	/** The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestFormProperties {

		/** The BCP-47 language code to use for evaluating localized Field labels when `include_label_in_response` is `true`. */
		languageCode: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,

		/** When specified, only certain fields belonging to the indicated view will be returned. */
		view: FormControl<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
			view: new FormControl<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView | null | undefined>(undefined),
		});

	}


	/** A single kind of update to apply to a Label. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequest {

		/** Request to create a Field within a Label. */
		createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest;

		/** Request to create a Selection Choice. */
		createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest;

		/** Request to delete the Field. */
		deleteField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest;

		/** Request to delete a Choice. */
		deleteSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest;

		/** Request to disable the Field. */
		disableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest;

		/** Request to disable a Choice. */
		disableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest;

		/** Request to enable the Field. */
		enableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest;

		/** Request to enable a Choice. */
		enableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest;

		/** Request to update Field properties. */
		updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest;

		/** Request to change the type of a Field. */
		updateFieldType?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest;

		/** Updates basic properties of a Label. */
		updateLabel?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest;

		/** Request to update a Choice properties. */
		updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
	}

	/** A single kind of update to apply to a Label. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestRequestFormProperties>({
		});

	}


	/** Request to create a Field within a Label. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequest {

		/** Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item. */
		field?: GoogleAppsDriveLabelsV2betaField;
	}

	/** Request to create a Field within a Label. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestFormProperties>({
		});

	}


	/** Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item. */
	export interface GoogleAppsDriveLabelsV2betaField {

		/** The capabilities related to this field on applied metadata. */
		appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities;

		/** Output only. The time this field was created. */
		createTime?: string | null;

		/** Information about a user. */
		creator?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** Options for the date field type. */
		dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptions;

		/** Output only. The time this field was disabled. This value has no meaning when the field is not disabled. */
		disableTime?: string | null;

		/** Information about a user. */
		disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** UI display hints for rendering a field. */
		displayHints?: GoogleAppsDriveLabelsV2betaFieldDisplayHints;

		/** Output only. The key of a field, unique within a label or library. This value is autogenerated. Matches the regex: `([a-zA-Z0-9])+` */
		id?: string | null;

		/** Options for the Integer field type. */
		integerOptions?: GoogleAppsDriveLabelsV2betaFieldIntegerOptions;

		/** The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect. */
		lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;

		/** Contains information about whether a label component should be considered locked. */
		lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;

		/** The basic properties of the field. */
		properties?: GoogleAppsDriveLabelsV2betaFieldProperties;

		/** Information about a user. */
		publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** Output only. The key to use when constructing Drive search queries to find files based on values defined for this field on files. For example, "`{query_key}` > 2001-01-01". */
		queryKey?: string | null;

		/** The capabilities related to this field when editing the field. */
		schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities;

		/** Options for the selection field type. */
		selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptions;

		/** Options for the Text field type. */
		textOptions?: GoogleAppsDriveLabelsV2betaFieldTextOptions;

		/** Output only. The time this field was updated. */
		updateTime?: string | null;

		/** Information about a user. */
		updater?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** Options for the user field type. */
		userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
	}

	/** Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item. */
	export interface GoogleAppsDriveLabelsV2betaFieldFormProperties {

		/** Output only. The time this field was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time this field was disabled. This value has no meaning when the field is not disabled. */
		disableTime: FormControl<string | null | undefined>,

		/** Output only. The key of a field, unique within a label or library. This value is autogenerated. Matches the regex: `([a-zA-Z0-9])+` */
		id: FormControl<string | null | undefined>,

		/** Output only. The key to use when constructing Drive search queries to find files based on values defined for this field on files. For example, "`{query_key}` > 2001-01-01". */
		queryKey: FormControl<string | null | undefined>,

		/** Output only. The time this field was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			disableTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			queryKey: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The capabilities related to this field on applied metadata. */
	export interface GoogleAppsDriveLabelsV2betaFieldAppliedCapabilities {

		/** Whether the user can read related applied metadata on items. */
		canRead?: boolean | null;

		/** Whether the user can search for Drive items referencing this field. */
		canSearch?: boolean | null;

		/** Whether the user can set this field on Drive items. */
		canWrite?: boolean | null;
	}

	/** The capabilities related to this field on applied metadata. */
	export interface GoogleAppsDriveLabelsV2betaFieldAppliedCapabilitiesFormProperties {

		/** Whether the user can read related applied metadata on items. */
		canRead: FormControl<boolean | null | undefined>,

		/** Whether the user can search for Drive items referencing this field. */
		canSearch: FormControl<boolean | null | undefined>,

		/** Whether the user can set this field on Drive items. */
		canWrite: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldAppliedCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldAppliedCapabilitiesFormProperties>({
			canRead: new FormControl<boolean | null | undefined>(undefined),
			canSearch: new FormControl<boolean | null | undefined>(undefined),
			canWrite: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a user. */
	export interface GoogleAppsDriveLabelsV2betaUserInfo {

		/** The identifier for this user that can be used with the People API to get more information. For example, people/12345678. */
		person?: string | null;
	}

	/** Information about a user. */
	export interface GoogleAppsDriveLabelsV2betaUserInfoFormProperties {

		/** The identifier for this user that can be used with the People API to get more information. For example, people/12345678. */
		person: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaUserInfoFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaUserInfoFormProperties>({
			person: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for the date field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldDateOptions {

		/** Output only. ICU date format. */
		dateFormat?: string | null;

		/** Localized date formatting option. Field values are rendered in this format according to their locale. */
		dateFormatType?: GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatType | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		maxValue?: GoogleTypeDate;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		minValue?: GoogleTypeDate;
	}

	/** Options for the date field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldDateOptionsFormProperties {

		/** Output only. ICU date format. */
		dateFormat: FormControl<string | null | undefined>,

		/** Localized date formatting option. Field values are rendered in this format according to their locale. */
		dateFormatType: FormControl<GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatType | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldDateOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldDateOptionsFormProperties>({
			dateFormat: new FormControl<string | null | undefined>(undefined),
			dateFormatType: new FormControl<GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatType | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2betaFieldDateOptionsDateFormatType { DATE_FORMAT_UNSPECIFIED = 'DATE_FORMAT_UNSPECIFIED', LONG_DATE = 'LONG_DATE', SHORT_DATE = 'SHORT_DATE' }


	/** UI display hints for rendering a field. */
	export interface GoogleAppsDriveLabelsV2betaFieldDisplayHints {

		/** Whether the field should be shown in the UI as disabled. */
		disabled?: boolean | null;

		/** This field should be hidden in the search menu when searching for Drive items. */
		hiddenInSearch?: boolean | null;

		/** Whether the field should be shown as required in the UI. */
		required?: boolean | null;

		/** This field should be shown in the apply menu when applying values to a Drive item. */
		shownInApply?: boolean | null;
	}

	/** UI display hints for rendering a field. */
	export interface GoogleAppsDriveLabelsV2betaFieldDisplayHintsFormProperties {

		/** Whether the field should be shown in the UI as disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** This field should be hidden in the search menu when searching for Drive items. */
		hiddenInSearch: FormControl<boolean | null | undefined>,

		/** Whether the field should be shown as required in the UI. */
		required: FormControl<boolean | null | undefined>,

		/** This field should be shown in the apply menu when applying values to a Drive item. */
		shownInApply: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldDisplayHintsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldDisplayHintsFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			hiddenInSearch: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			shownInApply: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for the Integer field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldIntegerOptions {

		/** Output only. The maximum valid value for the integer field. */
		maxValue?: string | null;

		/** Output only. The minimum valid value for the integer field. */
		minValue?: string | null;
	}

	/** Options for the Integer field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldIntegerOptionsFormProperties {

		/** Output only. The maximum valid value for the integer field. */
		maxValue: FormControl<string | null | undefined>,

		/** Output only. The minimum valid value for the integer field. */
		minValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldIntegerOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldIntegerOptionsFormProperties>({
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect. */
	export interface GoogleAppsDriveLabelsV2betaLifecycle {

		/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
		disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;

		/** Output only. Whether the object associated with this lifecycle has unpublished changes. */
		hasUnpublishedChanges?: boolean | null;

		/** Output only. The state of the object associated with this lifecycle. */
		state?: GoogleAppsDriveLabelsV2betaLifecycleState | null;
	}

	/** The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect. */
	export interface GoogleAppsDriveLabelsV2betaLifecycleFormProperties {

		/** Output only. Whether the object associated with this lifecycle has unpublished changes. */
		hasUnpublishedChanges: FormControl<boolean | null | undefined>,

		/** Output only. The state of the object associated with this lifecycle. */
		state: FormControl<GoogleAppsDriveLabelsV2betaLifecycleState | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLifecycleFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLifecycleFormProperties>({
			hasUnpublishedChanges: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<GoogleAppsDriveLabelsV2betaLifecycleState | null | undefined>(undefined),
		});

	}


	/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
	export interface GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy {

		/** Whether to hide this disabled object in the search menu for Drive items. * When `false`, the object is generally shown in the UI as disabled but it appears in the search results when searching for Drive items. * When `true`, the object is generally hidden in the UI when searching for Drive items. */
		hideInSearch?: boolean | null;

		/** Whether to show this disabled object in the apply menu on Drive items. * When `true`, the object is generally shown in the UI as disabled and is unselectable. * When `false`, the object is generally hidden in the UI. */
		showInApply?: boolean | null;
	}

	/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
	export interface GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicyFormProperties {

		/** Whether to hide this disabled object in the search menu for Drive items. * When `false`, the object is generally shown in the UI as disabled but it appears in the search results when searching for Drive items. * When `true`, the object is generally hidden in the UI when searching for Drive items. */
		hideInSearch: FormControl<boolean | null | undefined>,

		/** Whether to show this disabled object in the apply menu on Drive items. * When `true`, the object is generally shown in the UI as disabled and is unselectable. * When `false`, the object is generally hidden in the UI. */
		showInApply: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLifecycleDisabledPolicyFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicyFormProperties>({
			hideInSearch: new FormControl<boolean | null | undefined>(undefined),
			showInApply: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2betaLifecycleState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', UNPUBLISHED_DRAFT = 'UNPUBLISHED_DRAFT', PUBLISHED = 'PUBLISHED', DISABLED = 'DISABLED', DELETED = 'DELETED' }


	/** Contains information about whether a label component should be considered locked. */
	export interface GoogleAppsDriveLabelsV2betaLockStatus {

		/** Output only. Indicates whether this label component is the (direct) target of a LabelLock. A label component can be implicitly locked even if it's not the direct target of a LabelLock, in which case this field is set to false. */
		locked?: boolean | null;
	}

	/** Contains information about whether a label component should be considered locked. */
	export interface GoogleAppsDriveLabelsV2betaLockStatusFormProperties {

		/** Output only. Indicates whether this label component is the (direct) target of a LabelLock. A label component can be implicitly locked even if it's not the direct target of a LabelLock, in which case this field is set to false. */
		locked: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLockStatusFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLockStatusFormProperties>({
			locked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The basic properties of the field. */
	export interface GoogleAppsDriveLabelsV2betaFieldProperties {

		/** Required. The display text to show in the UI identifying this field. */
		displayName?: string | null;

		/** Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list. */
		insertBeforeField?: string | null;

		/** Whether the field should be marked as required. */
		required?: boolean | null;
	}

	/** The basic properties of the field. */
	export interface GoogleAppsDriveLabelsV2betaFieldPropertiesFormProperties {

		/** Required. The display text to show in the UI identifying this field. */
		displayName: FormControl<string | null | undefined>,

		/** Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list. */
		insertBeforeField: FormControl<string | null | undefined>,

		/** Whether the field should be marked as required. */
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldPropertiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldPropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			insertBeforeField: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The capabilities related to this field when editing the field. */
	export interface GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities {

		/** Whether the user can delete this field. The user must have permission and the field must be deprecated. */
		canDelete?: boolean | null;

		/** Whether the user can disable this field. The user must have permission and this field must not already be disabled. */
		canDisable?: boolean | null;

		/** Whether the user can enable this field. The user must have permission and this field must be disabled. */
		canEnable?: boolean | null;

		/** Whether the user can change this field. */
		canUpdate?: boolean | null;
	}

	/** The capabilities related to this field when editing the field. */
	export interface GoogleAppsDriveLabelsV2betaFieldSchemaCapabilitiesFormProperties {

		/** Whether the user can delete this field. The user must have permission and the field must be deprecated. */
		canDelete: FormControl<boolean | null | undefined>,

		/** Whether the user can disable this field. The user must have permission and this field must not already be disabled. */
		canDisable: FormControl<boolean | null | undefined>,

		/** Whether the user can enable this field. The user must have permission and this field must be disabled. */
		canEnable: FormControl<boolean | null | undefined>,

		/** Whether the user can change this field. */
		canUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldSchemaCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldSchemaCapabilitiesFormProperties>({
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			canDisable: new FormControl<boolean | null | undefined>(undefined),
			canEnable: new FormControl<boolean | null | undefined>(undefined),
			canUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for the selection field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptions {

		/** The options available for this selection field. The list order is consistent, and modified with `insert_before_choice`. */
		choices?: Array<GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice>;

		/** Options for a multi-valued variant of an associated field type. */
		listOptions?: GoogleAppsDriveLabelsV2betaFieldListOptions;
	}

	/** Options for the selection field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldSelectionOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldSelectionOptionsFormProperties>({
		});

	}


	/** Selection field choice. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice {

		/** The capabilities related to this choice on applied metadata. */
		appliedCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities;

		/** Output only. The time this choice was created. */
		createTime?: string | null;

		/** Information about a user. */
		creator?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** Output only. The time this choice was disabled. This value has no meaning when the choice is not disabled. */
		disableTime?: string | null;

		/** Information about a user. */
		disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** UI display hints for rendering an option. */
		displayHints?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints;

		/** The unique value of the choice. This ID is autogenerated. Matches the regex: `([a-zA-Z0-9_])+`. */
		id?: string | null;

		/** The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect. */
		lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;

		/** Contains information about whether a label component should be considered locked. */
		lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;

		/** Basic properties of the choice. */
		properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;

		/** Output only. The time this choice was published. This value has no meaning when the choice is not published. */
		publishTime?: string | null;

		/** Information about a user. */
		publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** The capabilities related to this choice when editing the choice. */
		schemaCapabilities?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities;

		/** Output only. The time this choice was updated last. */
		updateTime?: string | null;

		/** Information about a user. */
		updater?: GoogleAppsDriveLabelsV2betaUserInfo;
	}

	/** Selection field choice. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceFormProperties {

		/** Output only. The time this choice was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The time this choice was disabled. This value has no meaning when the choice is not disabled. */
		disableTime: FormControl<string | null | undefined>,

		/** The unique value of the choice. This ID is autogenerated. Matches the regex: `([a-zA-Z0-9_])+`. */
		id: FormControl<string | null | undefined>,

		/** Output only. The time this choice was published. This value has no meaning when the choice is not published. */
		publishTime: FormControl<string | null | undefined>,

		/** Output only. The time this choice was updated last. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			disableTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The capabilities related to this choice on applied metadata. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilities {

		/** Whether the user can read related applied metadata on items. */
		canRead?: boolean | null;

		/** Whether the user can use this choice in search queries. */
		canSearch?: boolean | null;

		/** Whether the user can select this choice on an item. */
		canSelect?: boolean | null;
	}

	/** The capabilities related to this choice on applied metadata. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilitiesFormProperties {

		/** Whether the user can read related applied metadata on items. */
		canRead: FormControl<boolean | null | undefined>,

		/** Whether the user can use this choice in search queries. */
		canSearch: FormControl<boolean | null | undefined>,

		/** Whether the user can select this choice on an item. */
		canSelect: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceAppliedCapabilitiesFormProperties>({
			canRead: new FormControl<boolean | null | undefined>(undefined),
			canSearch: new FormControl<boolean | null | undefined>(undefined),
			canSelect: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** UI display hints for rendering an option. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHints {

		/** The color derived from BadgeConfig and changed to the closest recommended supported color. */
		badgeColors?: GoogleAppsDriveLabelsV2betaBadgeColors;

		/** The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to `BadgeConfig.priority_override` or the default heuristic which prefers creation date of the label, and field and option priority. */
		badgePriority?: string | null;

		/** The color derived from BadgeConfig and changed to the closest recommended supported color. */
		darkBadgeColors?: GoogleAppsDriveLabelsV2betaBadgeColors;

		/** Whether the option should be shown in the UI as disabled. */
		disabled?: boolean | null;

		/** This option should be hidden in the search menu when searching for Drive items. */
		hiddenInSearch?: boolean | null;

		/** This option should be shown in the apply menu when applying values to a Drive item. */
		shownInApply?: boolean | null;
	}

	/** UI display hints for rendering an option. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHintsFormProperties {

		/** The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to `BadgeConfig.priority_override` or the default heuristic which prefers creation date of the label, and field and option priority. */
		badgePriority: FormControl<string | null | undefined>,

		/** Whether the option should be shown in the UI as disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** This option should be hidden in the search menu when searching for Drive items. */
		hiddenInSearch: FormControl<boolean | null | undefined>,

		/** This option should be shown in the apply menu when applying values to a Drive item. */
		shownInApply: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHintsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceDisplayHintsFormProperties>({
			badgePriority: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			hiddenInSearch: new FormControl<boolean | null | undefined>(undefined),
			shownInApply: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Basic properties of the choice. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties {

		/** Badge status of the label. */
		badgeConfig?: GoogleAppsDriveLabelsV2betaBadgeConfig;

		/** The description of this label. */
		description?: string | null;

		/** Required. The display text to show in the UI identifying this field. */
		displayName?: string | null;

		/** Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list. */
		insertBeforeChoice?: string | null;
	}

	/** Basic properties of the choice. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoicePropertiesFormProperties {

		/** The description of this label. */
		description: FormControl<string | null | undefined>,

		/** Required. The display text to show in the UI identifying this field. */
		displayName: FormControl<string | null | undefined>,

		/** Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list. */
		insertBeforeChoice: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoicePropertiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoicePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			insertBeforeChoice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The capabilities related to this choice when editing the choice. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilities {

		/** Whether the user can delete this choice. */
		canDelete?: boolean | null;

		/** Whether the user can disable this choice. */
		canDisable?: boolean | null;

		/** Whether the user can enable this choice. */
		canEnable?: boolean | null;

		/** Whether the user can update this choice. */
		canUpdate?: boolean | null;
	}

	/** The capabilities related to this choice when editing the choice. */
	export interface GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilitiesFormProperties {

		/** Whether the user can delete this choice. */
		canDelete: FormControl<boolean | null | undefined>,

		/** Whether the user can disable this choice. */
		canDisable: FormControl<boolean | null | undefined>,

		/** Whether the user can enable this choice. */
		canEnable: FormControl<boolean | null | undefined>,

		/** Whether the user can update this choice. */
		canUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceSchemaCapabilitiesFormProperties>({
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			canDisable: new FormControl<boolean | null | undefined>(undefined),
			canEnable: new FormControl<boolean | null | undefined>(undefined),
			canUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for a multi-valued variant of an associated field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldListOptions {

		/**
		 * Maximum number of entries permitted.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxEntries?: number | null;
	}

	/** Options for a multi-valued variant of an associated field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldListOptionsFormProperties {

		/**
		 * Maximum number of entries permitted.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxEntries: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldListOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldListOptionsFormProperties>({
			maxEntries: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Options for the Text field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldTextOptions {

		/**
		 * Output only. The maximum valid length of values for the text field.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxLength?: number | null;

		/**
		 * Output only. The minimum valid length of values for the text field.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minLength?: number | null;
	}

	/** Options for the Text field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldTextOptionsFormProperties {

		/**
		 * Output only. The maximum valid length of values for the text field.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxLength: FormControl<number | null | undefined>,

		/**
		 * Output only. The minimum valid length of values for the text field.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldTextOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldTextOptionsFormProperties>({
			maxLength: new FormControl<number | null | undefined>(undefined),
			minLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Options for the user field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldUserOptions {

		/** Options for a multi-valued variant of an associated field type. */
		listOptions?: GoogleAppsDriveLabelsV2betaFieldListOptions;
	}

	/** Options for the user field type. */
	export interface GoogleAppsDriveLabelsV2betaFieldUserOptionsFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldUserOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldUserOptionsFormProperties>({
		});

	}


	/** Request to create a Selection Choice. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequest {

		/** Selection field choice. */
		choice?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice;

		/** Required. The Selection Field in which a Choice will be created. */
		fieldId?: string | null;
	}

	/** Request to create a Selection Choice. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestFormProperties {

		/** Required. The Selection Field in which a Choice will be created. */
		fieldId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateSelectionChoiceRequestFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to delete the Field. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequest {

		/** Required. ID of the Field to delete. */
		id?: string | null;
	}

	/** Request to delete the Field. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequestFormProperties {

		/** Required. ID of the Field to delete. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteFieldRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to delete a Choice. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequest {

		/** Required. The Selection Field from which a Choice will be deleted. */
		fieldId?: string | null;

		/** Required. Choice to delete. */
		id?: string | null;
	}

	/** Request to delete a Choice. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequestFormProperties {

		/** Required. The Selection Field from which a Choice will be deleted. */
		fieldId: FormControl<string | null | undefined>,

		/** Required. Choice to delete. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDeleteSelectionChoiceRequestFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to disable the Field. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequest {

		/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
		disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;

		/** Required. Key of the Field to disable. */
		id?: string | null;

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Request to disable the Field. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequestFormProperties {

		/** Required. Key of the Field to disable. */
		id: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableFieldRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to disable a Choice. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequest {

		/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
		disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;

		/** Required. The Selection Field in which a Choice will be disabled. */
		fieldId?: string | null;

		/** Required. Choice to disable. */
		id?: string | null;

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Request to disable a Choice. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequestFormProperties {

		/** Required. The Selection Field in which a Choice will be disabled. */
		fieldId: FormControl<string | null | undefined>,

		/** Required. Choice to disable. */
		id: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestDisableSelectionChoiceRequestFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to enable the Field. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequest {

		/** Required. ID of the Field to enable. */
		id?: string | null;
	}

	/** Request to enable the Field. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequestFormProperties {

		/** Required. ID of the Field to enable. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableFieldRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to enable a Choice. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequest {

		/** Required. The Selection Field in which a Choice will be enabled. */
		fieldId?: string | null;

		/** Required. Choice to enable. */
		id?: string | null;
	}

	/** Request to enable a Choice. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequestFormProperties {

		/** Required. The Selection Field in which a Choice will be enabled. */
		fieldId: FormControl<string | null | undefined>,

		/** Required. Choice to enable. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestEnableSelectionChoiceRequestFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to update Field properties. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequest {

		/** Required. The Field to update. */
		id?: string | null;

		/** The basic properties of the field. */
		properties?: GoogleAppsDriveLabelsV2betaFieldProperties;

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Request to update Field properties. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequestFormProperties {

		/** Required. The Field to update. */
		id: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldPropertiesRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to change the type of a Field. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequest {

		/** Options for the date field type. */
		dateOptions?: GoogleAppsDriveLabelsV2betaFieldDateOptions;

		/** Required. The Field to update. */
		id?: string | null;

		/** Options for the Integer field type. */
		integerOptions?: GoogleAppsDriveLabelsV2betaFieldIntegerOptions;

		/** Options for the selection field type. */
		selectionOptions?: GoogleAppsDriveLabelsV2betaFieldSelectionOptions;

		/** Options for the Text field type. */
		textOptions?: GoogleAppsDriveLabelsV2betaFieldTextOptions;

		/** The fields that should be updated. At least one field must be specified. The root of `type_options` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;

		/** Options for the user field type. */
		userOptions?: GoogleAppsDriveLabelsV2betaFieldUserOptions;
	}

	/** Request to change the type of a Field. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestFormProperties {

		/** Required. The Field to update. */
		id: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root of `type_options` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates basic properties of a Label. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequest {

		/** Basic properties of the label. */
		properties?: GoogleAppsDriveLabelsV2betaLabelProperties;

		/** The fields that should be updated. At least one field must be specified. The root `label_properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Updates basic properties of a Label. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `label_properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateLabelPropertiesRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic properties of the label. */
	export interface GoogleAppsDriveLabelsV2betaLabelProperties {

		/** The description of the label. */
		description?: string | null;

		/** Required. Title of the label. */
		title?: string | null;
	}

	/** Basic properties of the label. */
	export interface GoogleAppsDriveLabelsV2betaLabelPropertiesFormProperties {

		/** The description of the label. */
		description: FormControl<string | null | undefined>,

		/** Required. Title of the label. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLabelPropertiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLabelPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to update a Choice properties. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest {

		/** Required. The Selection Field to update. */
		fieldId?: string | null;

		/** Required. The Choice to update. */
		id?: string | null;

		/** Basic properties of the choice. */
		properties?: GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceProperties;

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Request to update a Choice properties. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequestFormProperties {

		/** Required. The Selection Field to update. */
		fieldId: FormControl<string | null | undefined>,

		/** Required. The Choice to update. */
		id: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequestFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView { LABEL_VIEW_BASIC = 'LABEL_VIEW_BASIC', LABEL_VIEW_FULL = 'LABEL_VIEW_FULL' }


	/** Provides control over how write requests are executed. When not specified, the last write wins. */
	export interface GoogleAppsDriveLabelsV2betaWriteControl {

		/** The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error. */
		requiredRevisionId?: string | null;
	}

	/** Provides control over how write requests are executed. When not specified, the last write wins. */
	export interface GoogleAppsDriveLabelsV2betaWriteControlFormProperties {

		/** The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error. */
		requiredRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaWriteControlFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaWriteControlFormProperties>({
			requiredRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for Label update. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse {

		/** The reply of the updates. This maps 1:1 with the updates, although responses to some requests may be empty. */
		responses?: Array<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse>;

		/** A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items. */
		updatedLabel?: GoogleAppsDriveLabelsV2betaLabel;
	}

	/** Response for Label update. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseFormProperties>({
		});

	}


	/** A single response from an update. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse {

		/** Response following Field create. */
		createField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse;

		/** Response following Selection Choice create. */
		createSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse;

		/** Response following Field delete. */
		deleteField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponse;

		/** Response following Choice delete. */
		deleteSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponse;

		/** Response following Field disable. */
		disableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponse;

		/** Response following Choice disable. */
		disableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponse;

		/** Response following Field enable. */
		enableField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponse;

		/** Response following Choice enable. */
		enableSelectionChoice?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponse;

		/** Response following update to Field properties. */
		updateField?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse;

		/** Response following update to Field type. */
		updateFieldType?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponse;

		/** Response following update to Label properties. */
		updateLabel?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponse;

		/** Response following update to Selection Choice properties. */
		updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
	}

	/** A single response from an update. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponseFormProperties>({
		});

	}


	/** Response following Field create. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponse {

		/** The field of the created field. When left blank in a create request, a key will be autogenerated and can be identified here. */
		id?: string | null;

		/**
		 * The priority of the created field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;
	}

	/** Response following Field create. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponseFormProperties {

		/** The field of the created field. When left blank in a create request, a key will be autogenerated and can be identified here. */
		id: FormControl<string | null | undefined>,

		/**
		 * The priority of the created field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateFieldResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response following Selection Choice create. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponse {

		/** The server-generated id of the field. */
		fieldId?: string | null;

		/** The server-generated ID of the created choice within the Field */
		id?: string | null;
	}

	/** Response following Selection Choice create. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponseFormProperties {

		/** The server-generated id of the field. */
		fieldId: FormControl<string | null | undefined>,

		/** The server-generated ID of the created choice within the Field */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseCreateSelectionChoiceResponseFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response following Field delete. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponse {
	}

	/** Response following Field delete. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteFieldResponseFormProperties>({
		});

	}


	/** Response following Choice delete. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponse {
	}

	/** Response following Choice delete. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDeleteSelectionChoiceResponseFormProperties>({
		});

	}


	/** Response following Field disable. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponse {
	}

	/** Response following Field disable. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableFieldResponseFormProperties>({
		});

	}


	/** Response following Choice disable. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponse {
	}

	/** Response following Choice disable. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseDisableSelectionChoiceResponseFormProperties>({
		});

	}


	/** Response following Field enable. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponse {
	}

	/** Response following Field enable. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableFieldResponseFormProperties>({
		});

	}


	/** Response following Choice enable. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponse {
	}

	/** Response following Choice enable. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseEnableSelectionChoiceResponseFormProperties>({
		});

	}


	/** Response following update to Field properties. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse {

		/**
		 * The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;
	}

	/** Response following update to Field properties. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponseFormProperties {

		/**
		 * The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponseFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response following update to Field type. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponse {
	}

	/** Response following update to Field type. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldTypeResponseFormProperties>({
		});

	}


	/** Response following update to Label properties. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponse {
	}

	/** Response following update to Label properties. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateLabelPropertiesResponseFormProperties>({
		});

	}


	/** Response following update to Selection Choice properties. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse {

		/**
		 * The priority of the updated choice. The priority may change from what was specified to assure contiguous priorities between choices (1-n).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority?: number | null;
	}

	/** Response following update to Selection Choice properties. */
	export interface GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponseFormProperties {

		/**
		 * The priority of the updated choice. The priority may change from what was specified to assure contiguous priorities between choices (1-n).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponseFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items. */
	export interface GoogleAppsDriveLabelsV2betaLabel {

		/** The capabilities a user has on this label's applied metadata. */
		appliedCapabilities?: GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities;

		/** Behavior of this label when it's applied to Drive items. */
		appliedLabelPolicy?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy;

		/** Output only. The time this label was created. */
		createTime?: string | null;

		/** Information about a user. */
		creator?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** Output only. The customer this label belongs to. For example: "customers/123abc789." */
		customer?: string | null;

		/** Output only. The time this label was disabled. This value has no meaning when the label is not disabled. */
		disableTime?: string | null;

		/** Information about a user. */
		disabler?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** UI display hints for rendering the label. */
		displayHints?: GoogleAppsDriveLabelsV2betaLabelDisplayHints;

		/** List of fields in descending priority order. */
		fields?: Array<GoogleAppsDriveLabelsV2betaField>;

		/** Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+` */
		id?: string | null;

		/** Required. The type of label. */
		labelType?: GoogleAppsDriveLabelsV2betaLabelLabelType | null;

		/** Custom URL to present to users to allow them to learn more about this label and how it should be used. */
		learnMoreUri?: string | null;

		/** The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect. */
		lifecycle?: GoogleAppsDriveLabelsV2betaLifecycle;

		/** Contains information about whether a label component should be considered locked. */
		lockStatus?: GoogleAppsDriveLabelsV2betaLockStatus;

		/** Output only. Resource name of the label. Will be in the form of either: `labels/{id}` or `labels/{id}@{revision_id}` depending on the request. See `id` and `revision_id` below. */
		name?: string | null;

		/** Basic properties of the label. */
		properties?: GoogleAppsDriveLabelsV2betaLabelProperties;

		/** Output only. The time this label was published. This value has no meaning when the label is not published. */
		publishTime?: string | null;

		/** Information about a user. */
		publisher?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** Output only. The time this label revision was created. */
		revisionCreateTime?: string | null;

		/** Information about a user. */
		revisionCreator?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+` */
		revisionId?: string | null;

		/** The capabilities related to this label when editing the label. */
		schemaCapabilities?: GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities;
	}

	/** A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items. */
	export interface GoogleAppsDriveLabelsV2betaLabelFormProperties {

		/** Output only. The time this label was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The customer this label belongs to. For example: "customers/123abc789." */
		customer: FormControl<string | null | undefined>,

		/** Output only. The time this label was disabled. This value has no meaning when the label is not disabled. */
		disableTime: FormControl<string | null | undefined>,

		/** Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+` */
		id: FormControl<string | null | undefined>,

		/** Required. The type of label. */
		labelType: FormControl<GoogleAppsDriveLabelsV2betaLabelLabelType | null | undefined>,

		/** Custom URL to present to users to allow them to learn more about this label and how it should be used. */
		learnMoreUri: FormControl<string | null | undefined>,

		/** Output only. Resource name of the label. Will be in the form of either: `labels/{id}` or `labels/{id}@{revision_id}` depending on the request. See `id` and `revision_id` below. */
		name: FormControl<string | null | undefined>,

		/** Output only. The time this label was published. This value has no meaning when the label is not published. */
		publishTime: FormControl<string | null | undefined>,

		/** Output only. The time this label revision was created. */
		revisionCreateTime: FormControl<string | null | undefined>,

		/** Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+` */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLabelFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLabelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			customer: new FormControl<string | null | undefined>(undefined),
			disableTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			labelType: new FormControl<GoogleAppsDriveLabelsV2betaLabelLabelType | null | undefined>(undefined),
			learnMoreUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The capabilities a user has on this label's applied metadata. */
	export interface GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities {

		/** Whether the user can apply this label to items. */
		canApply?: boolean | null;

		/** Whether the user can read applied metadata related to this label. */
		canRead?: boolean | null;

		/** Whether the user can remove this label from items. */
		canRemove?: boolean | null;
	}

	/** The capabilities a user has on this label's applied metadata. */
	export interface GoogleAppsDriveLabelsV2betaLabelAppliedCapabilitiesFormProperties {

		/** Whether the user can apply this label to items. */
		canApply: FormControl<boolean | null | undefined>,

		/** Whether the user can read applied metadata related to this label. */
		canRead: FormControl<boolean | null | undefined>,

		/** Whether the user can remove this label from items. */
		canRemove: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLabelAppliedCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLabelAppliedCapabilitiesFormProperties>({
			canApply: new FormControl<boolean | null | undefined>(undefined),
			canRead: new FormControl<boolean | null | undefined>(undefined),
			canRemove: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Behavior of this label when it's applied to Drive items. */
	export interface GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy {

		/** Indicates how the applied label and field values should be copied when a Drive item is copied. */
		copyMode?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyMode | null;
	}

	/** Behavior of this label when it's applied to Drive items. */
	export interface GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyFormProperties {

		/** Indicates how the applied label and field values should be copied when a Drive item is copied. */
		copyMode: FormControl<GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyMode | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyFormProperties>({
			copyMode: new FormControl<GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyMode | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyMode { COPY_MODE_UNSPECIFIED = 'COPY_MODE_UNSPECIFIED', DO_NOT_COPY = 'DO_NOT_COPY', ALWAYS_COPY = 'ALWAYS_COPY', COPY_APPLIABLE = 'COPY_APPLIABLE' }


	/** UI display hints for rendering the label. */
	export interface GoogleAppsDriveLabelsV2betaLabelDisplayHints {

		/** Whether the label should be shown in the UI as disabled. */
		disabled?: boolean | null;

		/** This label should be hidden in the search menu when searching for Drive items. */
		hiddenInSearch?: boolean | null;

		/** Order to display label in a list. */
		priority?: string | null;

		/** This label should be shown in the apply menu when applying values to a Drive item. */
		shownInApply?: boolean | null;
	}

	/** UI display hints for rendering the label. */
	export interface GoogleAppsDriveLabelsV2betaLabelDisplayHintsFormProperties {

		/** Whether the label should be shown in the UI as disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** This label should be hidden in the search menu when searching for Drive items. */
		hiddenInSearch: FormControl<boolean | null | undefined>,

		/** Order to display label in a list. */
		priority: FormControl<string | null | undefined>,

		/** This label should be shown in the apply menu when applying values to a Drive item. */
		shownInApply: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLabelDisplayHintsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLabelDisplayHintsFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			hiddenInSearch: new FormControl<boolean | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			shownInApply: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2betaLabelLabelType { LABEL_TYPE_UNSPECIFIED = 'LABEL_TYPE_UNSPECIFIED', SHARED = 'SHARED', ADMIN = 'ADMIN', GOOGLE_APP = 'GOOGLE_APP' }


	/** The capabilities related to this label when editing the label. */
	export interface GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities {

		/** Whether the user can delete this label. The user must have permission and the label must be disabled. */
		canDelete?: boolean | null;

		/** Whether the user can disable this label. The user must have permission and this label must not already be disabled. */
		canDisable?: boolean | null;

		/** Whether the user can enable this label. The user must have permission and this label must be disabled. */
		canEnable?: boolean | null;

		/** Whether the user can change this label. */
		canUpdate?: boolean | null;
	}

	/** The capabilities related to this label when editing the label. */
	export interface GoogleAppsDriveLabelsV2betaLabelSchemaCapabilitiesFormProperties {

		/** Whether the user can delete this label. The user must have permission and the label must be disabled. */
		canDelete: FormControl<boolean | null | undefined>,

		/** Whether the user can disable this label. The user must have permission and this label must not already be disabled. */
		canDisable: FormControl<boolean | null | undefined>,

		/** Whether the user can enable this label. The user must have permission and this label must be disabled. */
		canEnable: FormControl<boolean | null | undefined>,

		/** Whether the user can change this label. */
		canUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLabelSchemaCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLabelSchemaCapabilitiesFormProperties>({
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			canDisable: new FormControl<boolean | null | undefined>(undefined),
			canEnable: new FormControl<boolean | null | undefined>(undefined),
			canUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to deprecate a published Label. */
	export interface GoogleAppsDriveLabelsV2betaDisableLabelRequest {

		/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
		disabledPolicy?: GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy;

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode?: string | null;

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;

		/** Provides control over how write requests are executed. When not specified, the last write wins. */
		writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
	}

	/** Request to deprecate a published Label. */
	export interface GoogleAppsDriveLabelsV2betaDisableLabelRequestFormProperties {

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaDisableLabelRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaDisableLabelRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to enable a label. */
	export interface GoogleAppsDriveLabelsV2betaEnableLabelRequest {

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;

		/** Provides control over how write requests are executed. When not specified, the last write wins. */
		writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
	}

	/** Request to enable a label. */
	export interface GoogleAppsDriveLabelsV2betaEnableLabelRequestFormProperties {

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaEnableLabelRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaEnableLabelRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc. */
	export interface GoogleAppsDriveLabelsV2betaFieldLimits {

		/** Limits for date Field type. */
		dateLimits?: GoogleAppsDriveLabelsV2betaDateLimits;

		/** Limits for integer Field type. */
		integerLimits?: GoogleAppsDriveLabelsV2betaIntegerLimits;

		/** Limits for long text Field type. */
		longTextLimits?: GoogleAppsDriveLabelsV2betaLongTextLimits;

		/**
		 * Limits for Field description, also called help text.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDescriptionLength?: number | null;

		/**
		 * Limits for Field title.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDisplayNameLength?: number | null;

		/**
		 * Max length for the id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxIdLength?: number | null;

		/** Limits for selection Field type. */
		selectionLimits?: GoogleAppsDriveLabelsV2betaSelectionLimits;

		/** Limits for text Field type. */
		textLimits?: GoogleAppsDriveLabelsV2betaTextLimits;

		/** Limits for Field.Type.USER. */
		userLimits?: GoogleAppsDriveLabelsV2betaUserLimits;
	}

	/** Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc. */
	export interface GoogleAppsDriveLabelsV2betaFieldLimitsFormProperties {

		/**
		 * Limits for Field description, also called help text.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDescriptionLength: FormControl<number | null | undefined>,

		/**
		 * Limits for Field title.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDisplayNameLength: FormControl<number | null | undefined>,

		/**
		 * Max length for the id.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxIdLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaFieldLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaFieldLimitsFormProperties>({
			maxDescriptionLength: new FormControl<number | null | undefined>(undefined),
			maxDisplayNameLength: new FormControl<number | null | undefined>(undefined),
			maxIdLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Limits for integer Field type. */
	export interface GoogleAppsDriveLabelsV2betaIntegerLimits {

		/** Maximum value for an integer Field type. */
		maxValue?: string | null;

		/** Minimum value for an integer Field type. */
		minValue?: string | null;
	}

	/** Limits for integer Field type. */
	export interface GoogleAppsDriveLabelsV2betaIntegerLimitsFormProperties {

		/** Maximum value for an integer Field type. */
		maxValue: FormControl<string | null | undefined>,

		/** Minimum value for an integer Field type. */
		minValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaIntegerLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaIntegerLimitsFormProperties>({
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Limits for long text Field type. */
	export interface GoogleAppsDriveLabelsV2betaLongTextLimits {

		/**
		 * Maximum length allowed for a long text Field type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxLength?: number | null;

		/**
		 * Minimum length allowed for a long text Field type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minLength?: number | null;
	}

	/** Limits for long text Field type. */
	export interface GoogleAppsDriveLabelsV2betaLongTextLimitsFormProperties {

		/**
		 * Maximum length allowed for a long text Field type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxLength: FormControl<number | null | undefined>,

		/**
		 * Minimum length allowed for a long text Field type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLongTextLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLongTextLimitsFormProperties>({
			maxLength: new FormControl<number | null | undefined>(undefined),
			minLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Limits for selection Field type. */
	export interface GoogleAppsDriveLabelsV2betaSelectionLimits {

		/** Limits for list-variant of a Field type. */
		listLimits?: GoogleAppsDriveLabelsV2betaListLimits;

		/**
		 * The max number of choices.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxChoices?: number | null;

		/**
		 * Maximum number of deleted choices.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDeletedChoices?: number | null;

		/**
		 * Maximum length for display name.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDisplayNameLength?: number | null;

		/**
		 * Maximum ID length for a selection options.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxIdLength?: number | null;
	}

	/** Limits for selection Field type. */
	export interface GoogleAppsDriveLabelsV2betaSelectionLimitsFormProperties {

		/**
		 * The max number of choices.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxChoices: FormControl<number | null | undefined>,

		/**
		 * Maximum number of deleted choices.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDeletedChoices: FormControl<number | null | undefined>,

		/**
		 * Maximum length for display name.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDisplayNameLength: FormControl<number | null | undefined>,

		/**
		 * Maximum ID length for a selection options.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxIdLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaSelectionLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaSelectionLimitsFormProperties>({
			maxChoices: new FormControl<number | null | undefined>(undefined),
			maxDeletedChoices: new FormControl<number | null | undefined>(undefined),
			maxDisplayNameLength: new FormControl<number | null | undefined>(undefined),
			maxIdLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Limits for list-variant of a Field type. */
	export interface GoogleAppsDriveLabelsV2betaListLimits {

		/**
		 * Maximum number of values allowed for the Field type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxEntries?: number | null;
	}

	/** Limits for list-variant of a Field type. */
	export interface GoogleAppsDriveLabelsV2betaListLimitsFormProperties {

		/**
		 * Maximum number of values allowed for the Field type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxEntries: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaListLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaListLimitsFormProperties>({
			maxEntries: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Limits for text Field type. */
	export interface GoogleAppsDriveLabelsV2betaTextLimits {

		/**
		 * Maximum length allowed for a text Field type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxLength?: number | null;

		/**
		 * Minimum length allowed for a text Field type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minLength?: number | null;
	}

	/** Limits for text Field type. */
	export interface GoogleAppsDriveLabelsV2betaTextLimitsFormProperties {

		/**
		 * Maximum length allowed for a text Field type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxLength: FormControl<number | null | undefined>,

		/**
		 * Minimum length allowed for a text Field type.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaTextLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaTextLimitsFormProperties>({
			maxLength: new FormControl<number | null | undefined>(undefined),
			minLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Limits for Field.Type.USER. */
	export interface GoogleAppsDriveLabelsV2betaUserLimits {

		/** Limits for list-variant of a Field type. */
		listLimits?: GoogleAppsDriveLabelsV2betaListLimits;
	}

	/** Limits for Field.Type.USER. */
	export interface GoogleAppsDriveLabelsV2betaUserLimitsFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2betaUserLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaUserLimitsFormProperties>({
		});

	}


	/** Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title. */
	export interface GoogleAppsDriveLabelsV2betaLabelLimits {

		/** Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc. */
		fieldLimits?: GoogleAppsDriveLabelsV2betaFieldLimits;

		/**
		 * The maximum number of published Fields that can be deleted.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDeletedFields?: number | null;

		/**
		 * The maximum number of characters allowed for the description.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDescriptionLength?: number | null;

		/**
		 * The maximum number of draft revisions that will be kept before deleting old drafts.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDraftRevisions?: number | null;

		/**
		 * The maximum number of Fields allowed within the label.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxFields?: number | null;

		/**
		 * The maximum number of characters allowed for the title.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTitleLength?: number | null;

		/** Resource name. */
		name?: string | null;
	}

	/** Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title. */
	export interface GoogleAppsDriveLabelsV2betaLabelLimitsFormProperties {

		/**
		 * The maximum number of published Fields that can be deleted.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDeletedFields: FormControl<number | null | undefined>,

		/**
		 * The maximum number of characters allowed for the description.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDescriptionLength: FormControl<number | null | undefined>,

		/**
		 * The maximum number of draft revisions that will be kept before deleting old drafts.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxDraftRevisions: FormControl<number | null | undefined>,

		/**
		 * The maximum number of Fields allowed within the label.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxFields: FormControl<number | null | undefined>,

		/**
		 * The maximum number of characters allowed for the title.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		maxTitleLength: FormControl<number | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLabelLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLabelLimitsFormProperties>({
			maxDeletedFields: new FormControl<number | null | undefined>(undefined),
			maxDescriptionLength: new FormControl<number | null | undefined>(undefined),
			maxDraftRevisions: new FormControl<number | null | undefined>(undefined),
			maxFields: new FormControl<number | null | undefined>(undefined),
			maxTitleLength: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Lock that can be applied to a Label, Field, or Choice. */
	export interface GoogleAppsDriveLabelsV2betaLabelLock {

		/** A description of a user's capabilities on a LabelLock. */
		capabilities?: GoogleAppsDriveLabelsV2betaLabelLockCapabilities;

		/** The ID of the Selection Field Choice that should be locked. If present, `field_id` must also be present. */
		choiceId?: string | null;

		/** Output only. The time this LabelLock was created. */
		createTime?: string | null;

		/** Information about a user. */
		creator?: GoogleAppsDriveLabelsV2betaUserInfo;

		/** Output only. A timestamp indicating when this LabelLock was scheduled for deletion. This will be present only if this LabelLock is in the DELETING state. */
		deleteTime?: string | null;

		/** The ID of the Field that should be locked. Empty if the whole Label should be locked. */
		fieldId?: string | null;

		/** Output only. Resource name of this LabelLock. */
		name?: string | null;

		/** Output only. This LabelLock's state. */
		state?: GoogleAppsDriveLabelsV2betaLabelLockState | null;
	}

	/** A Lock that can be applied to a Label, Field, or Choice. */
	export interface GoogleAppsDriveLabelsV2betaLabelLockFormProperties {

		/** The ID of the Selection Field Choice that should be locked. If present, `field_id` must also be present. */
		choiceId: FormControl<string | null | undefined>,

		/** Output only. The time this LabelLock was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. A timestamp indicating when this LabelLock was scheduled for deletion. This will be present only if this LabelLock is in the DELETING state. */
		deleteTime: FormControl<string | null | undefined>,

		/** The ID of the Field that should be locked. Empty if the whole Label should be locked. */
		fieldId: FormControl<string | null | undefined>,

		/** Output only. Resource name of this LabelLock. */
		name: FormControl<string | null | undefined>,

		/** Output only. This LabelLock's state. */
		state: FormControl<GoogleAppsDriveLabelsV2betaLabelLockState | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLabelLockFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLabelLockFormProperties>({
			choiceId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			fieldId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleAppsDriveLabelsV2betaLabelLockState | null | undefined>(undefined),
		});

	}


	/** A description of a user's capabilities on a LabelLock. */
	export interface GoogleAppsDriveLabelsV2betaLabelLockCapabilities {

		/** True if the user is authorized to view the policy. */
		canViewPolicy?: boolean | null;
	}

	/** A description of a user's capabilities on a LabelLock. */
	export interface GoogleAppsDriveLabelsV2betaLabelLockCapabilitiesFormProperties {

		/** True if the user is authorized to view the policy. */
		canViewPolicy: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaLabelLockCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaLabelLockCapabilitiesFormProperties>({
			canViewPolicy: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2betaLabelLockState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETING = 'DELETING' }


	/** The response to a ListLabelLocksRequest. */
	export interface GoogleAppsDriveLabelsV2betaListLabelLocksResponse {

		/** LabelLocks. */
		labelLocks?: Array<GoogleAppsDriveLabelsV2betaLabelLock>;

		/** The token of the next page in the response. */
		nextPageToken?: string | null;
	}

	/** The response to a ListLabelLocksRequest. */
	export interface GoogleAppsDriveLabelsV2betaListLabelLocksResponseFormProperties {

		/** The token of the next page in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaListLabelLocksResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaListLabelLocksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing the permissions on a Label. */
	export interface GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse {

		/** Label permissions. */
		labelPermissions?: Array<GoogleAppsDriveLabelsV2betaLabelPermission>;

		/** The token of the next page in the response. */
		nextPageToken?: string | null;
	}

	/** Response for listing the permissions on a Label. */
	export interface GoogleAppsDriveLabelsV2betaListLabelPermissionsResponseFormProperties {

		/** The token of the next page in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaListLabelPermissionsResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaListLabelPermissionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing Labels. */
	export interface GoogleAppsDriveLabelsV2betaListLabelsResponse {

		/** Labels. */
		labels?: Array<GoogleAppsDriveLabelsV2betaLabel>;

		/** The token of the next page in the response. */
		nextPageToken?: string | null;
	}

	/** Response for listing Labels. */
	export interface GoogleAppsDriveLabelsV2betaListLabelsResponseFormProperties {

		/** The token of the next page in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaListLabelsResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaListLabelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to publish a label. */
	export interface GoogleAppsDriveLabelsV2betaPublishLabelRequest {

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;

		/** Provides control over how write requests are executed. When not specified, the last write wins. */
		writeControl?: GoogleAppsDriveLabelsV2betaWriteControl;
	}

	/** Request to publish a label. */
	export interface GoogleAppsDriveLabelsV2betaPublishLabelRequestFormProperties {

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaPublishLabelRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaPublishLabelRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \ */
	export interface GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest {

		/** Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied. */
		copyMode?: GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyMode | null;

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;

		/** When specified, only certain fields belonging to the indicated view will be returned. */
		view?: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView | null;
	}

	/** Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \ */
	export interface GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestFormProperties {

		/** Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied. */
		copyMode: FormControl<GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyMode | null | undefined>,

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,

		/** When specified, only certain fields belonging to the indicated view will be returned. */
		view: FormControl<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequestFormProperties>({
			copyMode: new FormControl<GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicyCopyMode | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
			view: new FormControl<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView | null | undefined>(undefined),
		});

	}


	/** The capabilities of a user. */
	export interface GoogleAppsDriveLabelsV2betaUserCapabilities {

		/** Output only. Whether the user is allowed access to the label manager. */
		canAccessLabelManager?: boolean | null;

		/** Output only. Whether the user is an administrator for the shared labels feature. */
		canAdministrateLabels?: boolean | null;

		/** Output only. Whether the user is allowed to create new admin labels. */
		canCreateAdminLabels?: boolean | null;

		/** Output only. Whether the user is allowed to create new shared labels. */
		canCreateSharedLabels?: boolean | null;

		/** Output only. Resource name for the user capabilities. */
		name?: string | null;
	}

	/** The capabilities of a user. */
	export interface GoogleAppsDriveLabelsV2betaUserCapabilitiesFormProperties {

		/** Output only. Whether the user is allowed access to the label manager. */
		canAccessLabelManager: FormControl<boolean | null | undefined>,

		/** Output only. Whether the user is an administrator for the shared labels feature. */
		canAdministrateLabels: FormControl<boolean | null | undefined>,

		/** Output only. Whether the user is allowed to create new admin labels. */
		canCreateAdminLabels: FormControl<boolean | null | undefined>,

		/** Output only. Whether the user is allowed to create new shared labels. */
		canCreateSharedLabels: FormControl<boolean | null | undefined>,

		/** Output only. Resource name for the user capabilities. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2betaUserCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2betaUserCapabilitiesFormProperties>({
			canAccessLabelManager: new FormControl<boolean | null | undefined>(undefined),
			canAdministrateLabels: new FormControl<boolean | null | undefined>(undefined),
			canCreateAdminLabels: new FormControl<boolean | null | undefined>(undefined),
			canCreateSharedLabels: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmpty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List labels.
		 * Get v2beta/labels
		 * @param {string} customer The customer to scope this list request to. For example: "customers/abcd1234". If unset, will return all labels within the current customer.
		 * @param {string} languageCode The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
		 * @param {GoogleAppsDriveLabelsV2betaLabelPermissionRole} minimumRole Specifies the level of access the user must have on the returned Labels. The minimum role a user must have on a label. Defaults to `READER`.
		 * @param {number} pageSize Maximum number of labels to return per page. Default: 50. Max: 200.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The token of the page to return.
		 * @param {boolean} publishedOnly Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id}/{revision_id}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id}`).
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. This will return all Labels within the customer.
		 * @param {GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView} view When specified, only certain fields belonging to the indicated view are returned.
		 * @return {GoogleAppsDriveLabelsV2betaListLabelsResponse} Successful response
		 */
		Drivelabels_labels_list(customer: string | null | undefined, languageCode: string | null | undefined, minimumRole: GoogleAppsDriveLabelsV2betaLabelPermissionRole | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, publishedOnly: boolean | null | undefined, useAdminAccess: boolean | null | undefined, view: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView | null | undefined): Observable<GoogleAppsDriveLabelsV2betaListLabelsResponse> {
			return this.http.get<GoogleAppsDriveLabelsV2betaListLabelsResponse>(this.baseUri + 'v2beta/labels?customer=' + (customer == null ? '' : encodeURIComponent(customer)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&minimumRole=' + minimumRole + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&publishedOnly=' + publishedOnly + '&useAdminAccess=' + useAdminAccess + '&view=' + view, {});
		}

		/**
		 * Creates a new Label.
		 * Post v2beta/labels
		 * @param {string} languageCode The BCP-47 language code to use for evaluating localized Field labels in response. When not specified, values in the default configured language will be used.
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access.
		 * @return {GoogleAppsDriveLabelsV2betaLabel} Successful response
		 */
		Drivelabels_labels_create(languageCode: string | null | undefined, useAdminAccess: boolean | null | undefined, requestBody: GoogleAppsDriveLabelsV2betaLabel): Observable<GoogleAppsDriveLabelsV2betaLabel> {
			return this.http.post<GoogleAppsDriveLabelsV2betaLabel>(this.baseUri + 'v2beta/labels?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&useAdminAccess=' + useAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
		 * Get v2beta/limits/label
		 * @param {string} name Required. Label revision resource name Must be: "limits/label"
		 * @return {GoogleAppsDriveLabelsV2betaLabelLimits} Successful response
		 */
		Drivelabels_limits_getLabel(name: string | null | undefined): Observable<GoogleAppsDriveLabelsV2betaLabelLimits> {
			return this.http.get<GoogleAppsDriveLabelsV2betaLabelLimits>(this.baseUri + 'v2beta/limits/label?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
		 * Delete v2beta/{name}
		 * @param {string} name Required. Label Permission resource name.
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
		 * @param {string} writeControl_requiredRevisionId The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Drivelabels_labels_revisions_permissions_delete(name: string, useAdminAccess: boolean | null | undefined, writeControl_requiredRevisionId: string | null | undefined): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + '&useAdminAccess=' + useAdminAccess + '&writeControl_requiredRevisionId=' + (writeControl_requiredRevisionId == null ? '' : encodeURIComponent(writeControl_requiredRevisionId)), {});
		}

		/**
		 * Gets the user capabilities.
		 * Get v2beta/{name}
		 * @param {string} name Required. The resource name of the user. Only "users/me/capabilities" is supported.
		 * @param {string} customer The customer to scope this request to. For example: "customers/abcd1234". If unset, will return settings within the current customer.
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access.
		 * @param {GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView} view When specified, only certain fields belonging to the indicated view are returned.
		 * @return {GoogleAppsDriveLabelsV2betaUserCapabilities} Successful response
		 */
		Drivelabels_users_getCapabilities(name: string, customer: string | null | undefined, useAdminAccess: boolean | null | undefined, view: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestView | null | undefined): Observable<GoogleAppsDriveLabelsV2betaUserCapabilities> {
			return this.http.get<GoogleAppsDriveLabelsV2betaUserCapabilities>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + '&customer=' + (customer == null ? '' : encodeURIComponent(customer)) + '&useAdminAccess=' + useAdminAccess + '&view=' + view, {});
		}

		/**
		 * Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
		 * Post v2beta/{name}:delta
		 * @param {string} name Required. The resource name of the Label to update.
		 * @return {GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse} Successful response
		 */
		Drivelabels_labels_delta(name: string, requestBody: GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequest): Observable<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse> {
			return this.http.post<GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':delta', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
		 * Post v2beta/{name}:disable
		 * @param {string} name Required. Label resource name.
		 * @return {GoogleAppsDriveLabelsV2betaLabel} Successful response
		 */
		Drivelabels_labels_disable(name: string, requestBody: GoogleAppsDriveLabelsV2betaDisableLabelRequest): Observable<GoogleAppsDriveLabelsV2betaLabel> {
			return this.http.post<GoogleAppsDriveLabelsV2betaLabel>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
		 * Post v2beta/{name}:enable
		 * @param {string} name Required. Label resource name.
		 * @return {GoogleAppsDriveLabelsV2betaLabel} Successful response
		 */
		Drivelabels_labels_enable(name: string, requestBody: GoogleAppsDriveLabelsV2betaEnableLabelRequest): Observable<GoogleAppsDriveLabelsV2betaLabel> {
			return this.http.post<GoogleAppsDriveLabelsV2betaLabel>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
		 * Post v2beta/{name}:publish
		 * @param {string} name Required. Label resource name.
		 * @return {GoogleAppsDriveLabelsV2betaLabel} Successful response
		 */
		Drivelabels_labels_publish(name: string, requestBody: GoogleAppsDriveLabelsV2betaPublishLabelRequest): Observable<GoogleAppsDriveLabelsV2betaLabel> {
			return this.http.post<GoogleAppsDriveLabelsV2betaLabel>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':publish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.
		 * Post v2beta/{name}:updateLabelCopyMode
		 * @param {string} name Required. The resource name of the Label to update.
		 * @return {GoogleAppsDriveLabelsV2betaLabel} Successful response
		 */
		Drivelabels_labels_updateLabelCopyMode(name: string, requestBody: GoogleAppsDriveLabelsV2betaUpdateLabelCopyModeRequest): Observable<GoogleAppsDriveLabelsV2betaLabel> {
			return this.http.post<GoogleAppsDriveLabelsV2betaLabel>(this.baseUri + 'v2beta/' + (name == null ? '' : encodeURIComponent(name)) + ':updateLabelCopyMode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the LabelLocks on a Label.
		 * Get v2beta/{parent}/locks
		 * @param {string} parent Required. Label on which Locks are applied. Format: labels/{label}
		 * @param {number} pageSize Maximum number of Locks to return per page. Default: 100. Max: 200.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The token of the page to return.
		 * @return {GoogleAppsDriveLabelsV2betaListLabelLocksResponse} Successful response
		 */
		Drivelabels_labels_revisions_locks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAppsDriveLabelsV2betaListLabelLocksResponse> {
			return this.http.get<GoogleAppsDriveLabelsV2betaListLabelLocksResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists a Label's permissions.
		 * Get v2beta/{parent}/permissions
		 * @param {string} parent Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label}
		 * @param {number} pageSize Maximum number of permissions to return per page. Default: 50. Max: 200.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {string} pageToken The token of the page to return.
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
		 * @return {GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse} Successful response
		 */
		Drivelabels_labels_revisions_permissions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, useAdminAccess: boolean | null | undefined): Observable<GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse> {
			return this.http.get<GoogleAppsDriveLabelsV2betaListLabelPermissionsResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/permissions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&useAdminAccess=' + useAdminAccess, {});
		}

		/**
		 * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
		 * Patch v2beta/{parent}/permissions
		 * @param {string} parent Required. The parent Label resource name.
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
		 * @return {GoogleAppsDriveLabelsV2betaLabelPermission} Successful response
		 */
		Drivelabels_labels_revisions_updatePermissions(parent: string, useAdminAccess: boolean | null | undefined, requestBody: GoogleAppsDriveLabelsV2betaLabelPermission): Observable<GoogleAppsDriveLabelsV2betaLabelPermission> {
			return this.http.patch<GoogleAppsDriveLabelsV2betaLabelPermission>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/permissions&useAdminAccess=' + useAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
		 * Post v2beta/{parent}/permissions
		 * @param {string} parent Required. The parent Label resource name on the Label Permission is created. Format: labels/{label}
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
		 * @return {GoogleAppsDriveLabelsV2betaLabelPermission} Successful response
		 */
		Drivelabels_labels_revisions_permissions_create(parent: string, useAdminAccess: boolean | null | undefined, requestBody: GoogleAppsDriveLabelsV2betaLabelPermission): Observable<GoogleAppsDriveLabelsV2betaLabelPermission> {
			return this.http.post<GoogleAppsDriveLabelsV2betaLabelPermission>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/permissions&useAdminAccess=' + useAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
		 * Post v2beta/{parent}/permissions:batchDelete
		 * @param {string} parent Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Drivelabels_labels_revisions_permissions_batchDelete(parent: string, requestBody: GoogleAppsDriveLabelsV2betaBatchDeleteLabelPermissionsRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/permissions:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
		 * Post v2beta/{parent}/permissions:batchUpdate
		 * @param {string} parent Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
		 * @return {GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse} Successful response
		 */
		Drivelabels_labels_revisions_permissions_batchUpdate(parent: string, requestBody: GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsRequest): Observable<GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse> {
			return this.http.post<GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse>(this.baseUri + 'v2beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/permissions:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

