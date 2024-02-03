import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The color derived from BadgeConfig and changed to the closest recommended supported color. */
	export interface GoogleAppsDriveLabelsV2BadgeColors {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		backgroundColor?: GoogleTypeColor;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		foregroundColor?: GoogleTypeColor;

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		soloColor?: GoogleTypeColor;
	}

	/** The color derived from BadgeConfig and changed to the closest recommended supported color. */
	export interface GoogleAppsDriveLabelsV2BadgeColorsFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2BadgeColorsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2BadgeColorsFormProperties>({
		});

	}


	/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
	export interface GoogleTypeColor {

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
	export interface GoogleTypeColorFormProperties {

		/** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
		alpha: FormControl<number | null | undefined>,

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue: FormControl<number | null | undefined>,

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green: FormControl<number | null | undefined>,

		/** The amount of red in the color as a value in the interval [0, 1]. */
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
	export interface GoogleAppsDriveLabelsV2BadgeConfig {

		/** Represents a color in the RGBA color space. This representation is designed for simplicity of conversion to and from color representations in various languages over compactness. For example, the fields of this representation can be trivially provided to the constructor of `java.awt.Color` in Java; it can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha` method in iOS; and, with just a little work, it can be easily formatted into a CSS `rgba()` string in JavaScript. This reference page doesn't have information about the absolute color space that should be used to interpret the RGB value—for example, sRGB, Adobe RGB, DCI-P3, and BT.2020. By default, applications should assume the sRGB color space. When color equality needs to be decided, implementations, unless documented otherwise, treat two colors as equal if all their red, green, blue, and alpha values each differ by at most `1e-5`. Example (Java): import com.google.type.Color; // ... public static java.awt.Color fromProto(Color protocolor) { float alpha = protocolor.hasAlpha() ? protocolor.getAlpha().getValue() : 1.0; return new java.awt.Color( protocolor.getRed(), protocolor.getGreen(), protocolor.getBlue(), alpha); } public static Color toProto(java.awt.Color color) { float red = (float) color.getRed(); float green = (float) color.getGreen(); float blue = (float) color.getBlue(); float denominator = 255.0; Color.Builder resultBuilder = Color .newBuilder() .setRed(red / denominator) .setGreen(green / denominator) .setBlue(blue / denominator); int alpha = color.getAlpha(); if (alpha != 255) { result.setAlpha( FloatValue .newBuilder() .setValue(((float) alpha) / denominator) .build()); } return resultBuilder.build(); } // ... Example (iOS / Obj-C): // ... static UIColor* fromProto(Color* protocolor) { float red = [protocolor red]; float green = [protocolor green]; float blue = [protocolor blue]; FloatValue* alpha_wrapper = [protocolor alpha]; float alpha = 1.0; if (alpha_wrapper != nil) { alpha = [alpha_wrapper value]; } return [UIColor colorWithRed:red green:green blue:blue alpha:alpha]; } static Color* toProto(UIColor* color) { CGFloat red, green, blue, alpha; if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) { return nil; } Color* result = [[Color alloc] init]; [result setRed:red]; [result setGreen:green]; [result setBlue:blue]; if (alpha <= 0.9999) { [result setAlpha:floatWrapperWithValue(alpha)]; } [result autorelease]; return result; } // ... Example (JavaScript): // ... var protoToCssColor = function(rgb_color) { var redFrac = rgb_color.red || 0.0; var greenFrac = rgb_color.green || 0.0; var blueFrac = rgb_color.blue || 0.0; var red = Math.floor(redFrac * 255); var green = Math.floor(greenFrac * 255); var blue = Math.floor(blueFrac * 255); if (!('alpha' in rgb_color)) { return rgbToCssColor(red, green, blue); } var alphaFrac = rgb_color.alpha.value || 0.0; var rgbParams = [red, green, blue].join(','); return ['rgba(', rgbParams, ',', alphaFrac, ')'].join(''); }; var rgbToCssColor = function(red, green, blue) { var rgbNumber = new Number((red << 16) | (green << 8) | blue); var hexString = rgbNumber.toString(16); var missingZeros = 6 - hexString.length; var resultBuilder = ['#']; for (var i = 0; i < missingZeros; i++) { resultBuilder.push('0'); } resultBuilder.push(hexString); return resultBuilder.join(''); }; // ... */
		color?: GoogleTypeColor;

		/** Override the default global priority of this badge. When set to 0, the default priority heuristic is used. */
		priorityOverride?: string | null;
	}

	/** Badge status of the label. */
	export interface GoogleAppsDriveLabelsV2BadgeConfigFormProperties {

		/** Override the default global priority of this badge. When set to 0, the default priority heuristic is used. */
		priorityOverride: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2BadgeConfigFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2BadgeConfigFormProperties>({
			priorityOverride: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Deletes one of more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest {

		/** Required. The request message specifying the resources to update. */
		requests?: Array<GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest>;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the DeleteLabelPermissionRequest messages must either be empty or match this field. */
		useAdminAccess?: boolean | null;
	}

	/** Deletes one of more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequestFormProperties {

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the DeleteLabelPermissionRequest messages must either be empty or match this field. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequestFormProperties>({
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing. */
	export interface GoogleAppsDriveLabelsV2DeleteLabelPermissionRequest {

		/** Required. Label Permission resource name. */
		name?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;
	}

	/** Deletes a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing. */
	export interface GoogleAppsDriveLabelsV2DeleteLabelPermissionRequestFormProperties {

		/** Required. Label Permission resource name. */
		name: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeleteLabelPermissionRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeleteLabelPermissionRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Updates one or more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest {

		/** Required. The request message specifying the resources to update. */
		requests?: Array<GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest>;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the UpdateLabelPermissionRequest messages must either be empty or match this field. */
		useAdminAccess?: boolean | null;
	}

	/** Updates one or more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequestFormProperties {

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. If this is set, the use_admin_access field in the UpdateLabelPermissionRequest messages must either be empty or match this field. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequestFormProperties>({
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing. */
	export interface GoogleAppsDriveLabelsV2UpdateLabelPermissionRequest {

		/** The permission that applies to a principal (user, group, audience) on a label. */
		labelPermission?: GoogleAppsDriveLabelsV2LabelPermission;

		/** Required. The parent Label resource name. */
		parent?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;
	}

	/** Updates a Label Permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing. */
	export interface GoogleAppsDriveLabelsV2UpdateLabelPermissionRequestFormProperties {

		/** Required. The parent Label resource name. */
		parent: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2UpdateLabelPermissionRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2UpdateLabelPermissionRequestFormProperties>({
			parent: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The permission that applies to a principal (user, group, audience) on a label. */
	export interface GoogleAppsDriveLabelsV2LabelPermission {

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
		role?: GoogleAppsDriveLabelsV2LabelPermissionRole | null;
	}

	/** The permission that applies to a principal (user, group, audience) on a label. */
	export interface GoogleAppsDriveLabelsV2LabelPermissionFormProperties {

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
		role: FormControl<GoogleAppsDriveLabelsV2LabelPermissionRole | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LabelPermissionFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LabelPermissionFormProperties>({
			audience: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			group: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			person: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<GoogleAppsDriveLabelsV2LabelPermissionRole | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2LabelPermissionRole { LABEL_ROLE_UNSPECIFIED = 'LABEL_ROLE_UNSPECIFIED', READER = 'READER', APPLIER = 'APPLIER', ORGANIZER = 'ORGANIZER', EDITOR = 'EDITOR' }


	/** Response for updating one or more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse {

		/** Required. Permissions updated. */
		permissions?: Array<GoogleAppsDriveLabelsV2LabelPermission>;
	}

	/** Response for updating one or more Label Permissions. */
	export interface GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponseFormProperties>({
		});

	}


	/** Limits for date Field type. */
	export interface GoogleAppsDriveLabelsV2DateLimits {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		maxValue?: GoogleTypeDate;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		minValue?: GoogleTypeDate;
	}

	/** Limits for date Field type. */
	export interface GoogleAppsDriveLabelsV2DateLimitsFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DateLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DateLimitsFormProperties>({
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDate {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface GoogleTypeDateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
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
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequest {

		/** The BCP-47 language code to use for evaluating localized Field labels when `include_label_in_response` is `true`. */
		languageCode?: string | null;

		/** A list of updates to apply to the Label. Requests will be applied in the order they are specified. */
		requests?: Array<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest>;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;

		/** When specified, only certain fields belonging to the indicated view will be returned. */
		view?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView | null;

		/** Provides control over how write requests are executed. When not specified, the last write wins. */
		writeControl?: GoogleAppsDriveLabelsV2WriteControl;
	}

	/** The set of requests for updating aspects of a Label. If any request is not valid, no requests will be applied. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestFormProperties {

		/** The BCP-47 language code to use for evaluating localized Field labels when `include_label_in_response` is `true`. */
		languageCode: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,

		/** When specified, only certain fields belonging to the indicated view will be returned. */
		view: FormControl<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
			view: new FormControl<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView | null | undefined>(undefined),
		});

	}


	/** A single kind of update to apply to a Label. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequest {

		/** Request to create a Field within a Label. */
		createField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest;

		/** Request to create a Selection Choice. */
		createSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest;

		/** Request to delete the Field. */
		deleteField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest;

		/** Request to delete a Choice. */
		deleteSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest;

		/** Request to disable the Field. */
		disableField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest;

		/** Request to disable a Choice. */
		disableSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest;

		/** Request to enable the Field. */
		enableField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest;

		/** Request to enable a Choice. */
		enableSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest;

		/** Request to update Field properties. */
		updateField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest;

		/** Request to change the type of a Field. */
		updateFieldType?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest;

		/** Updates basic properties of a Label. */
		updateLabel?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest;

		/** Request to update a Choice properties. */
		updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest;
	}

	/** A single kind of update to apply to a Label. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestRequestFormProperties>({
		});

	}


	/** Request to create a Field within a Label. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequest {

		/** Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item. */
		field?: GoogleAppsDriveLabelsV2Field;
	}

	/** Request to create a Field within a Label. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequestFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateFieldRequestFormProperties>({
		});

	}


	/** Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item. */
	export interface GoogleAppsDriveLabelsV2Field {

		/** The capabilities related to this field on applied metadata. */
		appliedCapabilities?: GoogleAppsDriveLabelsV2FieldAppliedCapabilities;

		/** Output only. The time this field was created. */
		createTime?: string | null;

		/** Information about a user. */
		creator?: GoogleAppsDriveLabelsV2UserInfo;

		/** Options for the date field type. */
		dateOptions?: GoogleAppsDriveLabelsV2FieldDateOptions;

		/** Output only. The time this field was disabled. This value has no meaning when the field is not disabled. */
		disableTime?: string | null;

		/** Information about a user. */
		disabler?: GoogleAppsDriveLabelsV2UserInfo;

		/** UI display hints for rendering a field. */
		displayHints?: GoogleAppsDriveLabelsV2FieldDisplayHints;

		/** Output only. The key of a field, unique within a label or library. This value is autogenerated. Matches the regex: `([a-zA-Z0-9])+` */
		id?: string | null;

		/** Options for the Integer field type. */
		integerOptions?: GoogleAppsDriveLabelsV2FieldIntegerOptions;

		/** The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect. */
		lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;

		/** Contains information about whether a label component should be considered locked. */
		lockStatus?: GoogleAppsDriveLabelsV2LockStatus;

		/** The basic properties of the field. */
		properties?: GoogleAppsDriveLabelsV2FieldProperties;

		/** Information about a user. */
		publisher?: GoogleAppsDriveLabelsV2UserInfo;

		/** Output only. The key to use when constructing Drive search queries to find files based on values defined for this field on files. For example, "`{query_key}` > 2001-01-01". */
		queryKey?: string | null;

		/** The capabilities related to this field when editing the field. */
		schemaCapabilities?: GoogleAppsDriveLabelsV2FieldSchemaCapabilities;

		/** Options for the selection field type. */
		selectionOptions?: GoogleAppsDriveLabelsV2FieldSelectionOptions;

		/** Options for the Text field type. */
		textOptions?: GoogleAppsDriveLabelsV2FieldTextOptions;

		/** Output only. The time this field was updated. */
		updateTime?: string | null;

		/** Information about a user. */
		updater?: GoogleAppsDriveLabelsV2UserInfo;

		/** Options for the user field type. */
		userOptions?: GoogleAppsDriveLabelsV2FieldUserOptions;
	}

	/** Defines a field that has a display name, data type, and other configuration options. This field defines the kind of metadata that may be set on a Drive item. */
	export interface GoogleAppsDriveLabelsV2FieldFormProperties {

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
	export function CreateGoogleAppsDriveLabelsV2FieldFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			disableTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			queryKey: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The capabilities related to this field on applied metadata. */
	export interface GoogleAppsDriveLabelsV2FieldAppliedCapabilities {

		/** Whether the user can read related applied metadata on items. */
		canRead?: boolean | null;

		/** Whether the user can search for Drive items referencing this field. */
		canSearch?: boolean | null;

		/** Whether the user can set this field on Drive items. */
		canWrite?: boolean | null;
	}

	/** The capabilities related to this field on applied metadata. */
	export interface GoogleAppsDriveLabelsV2FieldAppliedCapabilitiesFormProperties {

		/** Whether the user can read related applied metadata on items. */
		canRead: FormControl<boolean | null | undefined>,

		/** Whether the user can search for Drive items referencing this field. */
		canSearch: FormControl<boolean | null | undefined>,

		/** Whether the user can set this field on Drive items. */
		canWrite: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldAppliedCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldAppliedCapabilitiesFormProperties>({
			canRead: new FormControl<boolean | null | undefined>(undefined),
			canSearch: new FormControl<boolean | null | undefined>(undefined),
			canWrite: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a user. */
	export interface GoogleAppsDriveLabelsV2UserInfo {

		/** The identifier for this user that can be used with the People API to get more information. For example, people/12345678. */
		person?: string | null;
	}

	/** Information about a user. */
	export interface GoogleAppsDriveLabelsV2UserInfoFormProperties {

		/** The identifier for this user that can be used with the People API to get more information. For example, people/12345678. */
		person: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2UserInfoFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2UserInfoFormProperties>({
			person: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for the date field type. */
	export interface GoogleAppsDriveLabelsV2FieldDateOptions {

		/** Output only. ICU date format. */
		dateFormat?: string | null;

		/** Localized date formatting option. Field values are rendered in this format according to their locale. */
		dateFormatType?: GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatType | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		maxValue?: GoogleTypeDate;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		minValue?: GoogleTypeDate;
	}

	/** Options for the date field type. */
	export interface GoogleAppsDriveLabelsV2FieldDateOptionsFormProperties {

		/** Output only. ICU date format. */
		dateFormat: FormControl<string | null | undefined>,

		/** Localized date formatting option. Field values are rendered in this format according to their locale. */
		dateFormatType: FormControl<GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatType | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldDateOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldDateOptionsFormProperties>({
			dateFormat: new FormControl<string | null | undefined>(undefined),
			dateFormatType: new FormControl<GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatType | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2FieldDateOptionsDateFormatType { DATE_FORMAT_UNSPECIFIED = 'DATE_FORMAT_UNSPECIFIED', LONG_DATE = 'LONG_DATE', SHORT_DATE = 'SHORT_DATE' }


	/** UI display hints for rendering a field. */
	export interface GoogleAppsDriveLabelsV2FieldDisplayHints {

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
	export interface GoogleAppsDriveLabelsV2FieldDisplayHintsFormProperties {

		/** Whether the field should be shown in the UI as disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** This field should be hidden in the search menu when searching for Drive items. */
		hiddenInSearch: FormControl<boolean | null | undefined>,

		/** Whether the field should be shown as required in the UI. */
		required: FormControl<boolean | null | undefined>,

		/** This field should be shown in the apply menu when applying values to a Drive item. */
		shownInApply: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldDisplayHintsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldDisplayHintsFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			hiddenInSearch: new FormControl<boolean | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
			shownInApply: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for the Integer field type. */
	export interface GoogleAppsDriveLabelsV2FieldIntegerOptions {

		/** Output only. The maximum valid value for the integer field. */
		maxValue?: string | null;

		/** Output only. The minimum valid value for the integer field. */
		minValue?: string | null;
	}

	/** Options for the Integer field type. */
	export interface GoogleAppsDriveLabelsV2FieldIntegerOptionsFormProperties {

		/** Output only. The maximum valid value for the integer field. */
		maxValue: FormControl<string | null | undefined>,

		/** Output only. The minimum valid value for the integer field. */
		minValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldIntegerOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldIntegerOptionsFormProperties>({
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect. */
	export interface GoogleAppsDriveLabelsV2Lifecycle {

		/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
		disabledPolicy?: GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;

		/** Output only. Whether the object associated with this lifecycle has unpublished changes. */
		hasUnpublishedChanges?: boolean | null;

		/** Output only. The state of the object associated with this lifecycle. */
		state?: GoogleAppsDriveLabelsV2LifecycleState | null;
	}

	/** The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect. */
	export interface GoogleAppsDriveLabelsV2LifecycleFormProperties {

		/** Output only. Whether the object associated with this lifecycle has unpublished changes. */
		hasUnpublishedChanges: FormControl<boolean | null | undefined>,

		/** Output only. The state of the object associated with this lifecycle. */
		state: FormControl<GoogleAppsDriveLabelsV2LifecycleState | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LifecycleFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LifecycleFormProperties>({
			hasUnpublishedChanges: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<GoogleAppsDriveLabelsV2LifecycleState | null | undefined>(undefined),
		});

	}


	/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
	export interface GoogleAppsDriveLabelsV2LifecycleDisabledPolicy {

		/** Whether to hide this disabled object in the search menu for Drive items. * When `false`, the object is generally shown in the UI as disabled but it appears in the search results when searching for Drive items. * When `true`, the object is generally hidden in the UI when searching for Drive items. */
		hideInSearch?: boolean | null;

		/** Whether to show this disabled object in the apply menu on Drive items. * When `true`, the object is generally shown in the UI as disabled and is unselectable. * When `false`, the object is generally hidden in the UI. */
		showInApply?: boolean | null;
	}

	/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
	export interface GoogleAppsDriveLabelsV2LifecycleDisabledPolicyFormProperties {

		/** Whether to hide this disabled object in the search menu for Drive items. * When `false`, the object is generally shown in the UI as disabled but it appears in the search results when searching for Drive items. * When `true`, the object is generally hidden in the UI when searching for Drive items. */
		hideInSearch: FormControl<boolean | null | undefined>,

		/** Whether to show this disabled object in the apply menu on Drive items. * When `true`, the object is generally shown in the UI as disabled and is unselectable. * When `false`, the object is generally hidden in the UI. */
		showInApply: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LifecycleDisabledPolicyFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LifecycleDisabledPolicyFormProperties>({
			hideInSearch: new FormControl<boolean | null | undefined>(undefined),
			showInApply: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2LifecycleState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', UNPUBLISHED_DRAFT = 'UNPUBLISHED_DRAFT', PUBLISHED = 'PUBLISHED', DISABLED = 'DISABLED', DELETED = 'DELETED' }


	/** Contains information about whether a label component should be considered locked. */
	export interface GoogleAppsDriveLabelsV2LockStatus {

		/** Output only. Indicates whether this label component is the (direct) target of a LabelLock. A label component can be implicitly locked even if it's not the direct target of a LabelLock, in which case this field is set to false. */
		locked?: boolean | null;
	}

	/** Contains information about whether a label component should be considered locked. */
	export interface GoogleAppsDriveLabelsV2LockStatusFormProperties {

		/** Output only. Indicates whether this label component is the (direct) target of a LabelLock. A label component can be implicitly locked even if it's not the direct target of a LabelLock, in which case this field is set to false. */
		locked: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LockStatusFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LockStatusFormProperties>({
			locked: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The basic properties of the field. */
	export interface GoogleAppsDriveLabelsV2FieldProperties {

		/** Required. The display text to show in the UI identifying this field. */
		displayName?: string | null;

		/** Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list. */
		insertBeforeField?: string | null;

		/** Whether the field should be marked as required. */
		required?: boolean | null;
	}

	/** The basic properties of the field. */
	export interface GoogleAppsDriveLabelsV2FieldPropertiesFormProperties {

		/** Required. The display text to show in the UI identifying this field. */
		displayName: FormControl<string | null | undefined>,

		/** Input only. Insert or move this field before the indicated field. If empty, the field is placed at the end of the list. */
		insertBeforeField: FormControl<string | null | undefined>,

		/** Whether the field should be marked as required. */
		required: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldPropertiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldPropertiesFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			insertBeforeField: new FormControl<string | null | undefined>(undefined),
			required: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The capabilities related to this field when editing the field. */
	export interface GoogleAppsDriveLabelsV2FieldSchemaCapabilities {

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
	export interface GoogleAppsDriveLabelsV2FieldSchemaCapabilitiesFormProperties {

		/** Whether the user can delete this field. The user must have permission and the field must be deprecated. */
		canDelete: FormControl<boolean | null | undefined>,

		/** Whether the user can disable this field. The user must have permission and this field must not already be disabled. */
		canDisable: FormControl<boolean | null | undefined>,

		/** Whether the user can enable this field. The user must have permission and this field must be disabled. */
		canEnable: FormControl<boolean | null | undefined>,

		/** Whether the user can change this field. */
		canUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldSchemaCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldSchemaCapabilitiesFormProperties>({
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			canDisable: new FormControl<boolean | null | undefined>(undefined),
			canEnable: new FormControl<boolean | null | undefined>(undefined),
			canUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for the selection field type. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptions {

		/** The options available for this selection field. The list order is consistent, and modified with `insert_before_choice`. */
		choices?: Array<GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice>;

		/** Options for a multi-valued variant of an associated field type. */
		listOptions?: GoogleAppsDriveLabelsV2FieldListOptions;
	}

	/** Options for the selection field type. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2FieldSelectionOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldSelectionOptionsFormProperties>({
		});

	}


	/** Selection field choice. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice {

		/** The capabilities related to this choice on applied metadata. */
		appliedCapabilities?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities;

		/** Output only. The time this choice was created. */
		createTime?: string | null;

		/** Information about a user. */
		creator?: GoogleAppsDriveLabelsV2UserInfo;

		/** Output only. The time this choice was disabled. This value has no meaning when the choice is not disabled. */
		disableTime?: string | null;

		/** Information about a user. */
		disabler?: GoogleAppsDriveLabelsV2UserInfo;

		/** UI display hints for rendering an option. */
		displayHints?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints;

		/** The unique value of the choice. This ID is autogenerated. Matches the regex: `([a-zA-Z0-9_])+`. */
		id?: string | null;

		/** The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect. */
		lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;

		/** Contains information about whether a label component should be considered locked. */
		lockStatus?: GoogleAppsDriveLabelsV2LockStatus;

		/** Basic properties of the choice. */
		properties?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;

		/** Output only. The time this choice was published. This value has no meaning when the choice is not published. */
		publishTime?: string | null;

		/** Information about a user. */
		publisher?: GoogleAppsDriveLabelsV2UserInfo;

		/** The capabilities related to this choice when editing the choice. */
		schemaCapabilities?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities;

		/** Output only. The time this choice was updated last. */
		updateTime?: string | null;

		/** Information about a user. */
		updater?: GoogleAppsDriveLabelsV2UserInfo;
	}

	/** Selection field choice. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceFormProperties {

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
	export function CreateGoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			disableTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The capabilities related to this choice on applied metadata. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities {

		/** Whether the user can read related applied metadata on items. */
		canRead?: boolean | null;

		/** Whether the user can use this choice in search queries. */
		canSearch?: boolean | null;

		/** Whether the user can select this choice on an item. */
		canSelect?: boolean | null;
	}

	/** The capabilities related to this choice on applied metadata. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilitiesFormProperties {

		/** Whether the user can read related applied metadata on items. */
		canRead: FormControl<boolean | null | undefined>,

		/** Whether the user can use this choice in search queries. */
		canSearch: FormControl<boolean | null | undefined>,

		/** Whether the user can select this choice on an item. */
		canSelect: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilitiesFormProperties>({
			canRead: new FormControl<boolean | null | undefined>(undefined),
			canSearch: new FormControl<boolean | null | undefined>(undefined),
			canSelect: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** UI display hints for rendering an option. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHints {

		/** The color derived from BadgeConfig and changed to the closest recommended supported color. */
		badgeColors?: GoogleAppsDriveLabelsV2BadgeColors;

		/** The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to `BadgeConfig.priority_override` or the default heuristic which prefers creation date of the label, and field and option priority. */
		badgePriority?: string | null;

		/** The color derived from BadgeConfig and changed to the closest recommended supported color. */
		darkBadgeColors?: GoogleAppsDriveLabelsV2BadgeColors;

		/** Whether the option should be shown in the UI as disabled. */
		disabled?: boolean | null;

		/** This option should be hidden in the search menu when searching for Drive items. */
		hiddenInSearch?: boolean | null;

		/** This option should be shown in the apply menu when applying values to a Drive item. */
		shownInApply?: boolean | null;
	}

	/** UI display hints for rendering an option. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHintsFormProperties {

		/** The priority of this badge. Used to compare and sort between multiple badges. A lower number means the badge should be shown first. When a badging configuration is not present, this will be 0. Otherwise, this will be set to `BadgeConfig.priority_override` or the default heuristic which prefers creation date of the label, and field and option priority. */
		badgePriority: FormControl<string | null | undefined>,

		/** Whether the option should be shown in the UI as disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** This option should be hidden in the search menu when searching for Drive items. */
		hiddenInSearch: FormControl<boolean | null | undefined>,

		/** This option should be shown in the apply menu when applying values to a Drive item. */
		shownInApply: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHintsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceDisplayHintsFormProperties>({
			badgePriority: new FormControl<string | null | undefined>(undefined),
			disabled: new FormControl<boolean | null | undefined>(undefined),
			hiddenInSearch: new FormControl<boolean | null | undefined>(undefined),
			shownInApply: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Basic properties of the choice. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties {

		/** Badge status of the label. */
		badgeConfig?: GoogleAppsDriveLabelsV2BadgeConfig;

		/** The description of this label. */
		description?: string | null;

		/** Required. The display text to show in the UI identifying this field. */
		displayName?: string | null;

		/** Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list. */
		insertBeforeChoice?: string | null;
	}

	/** Basic properties of the choice. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoicePropertiesFormProperties {

		/** The description of this label. */
		description: FormControl<string | null | undefined>,

		/** Required. The display text to show in the UI identifying this field. */
		displayName: FormControl<string | null | undefined>,

		/** Input only. Insert or move this choice before the indicated choice. If empty, the choice is placed at the end of the list. */
		insertBeforeChoice: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldSelectionOptionsChoicePropertiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldSelectionOptionsChoicePropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			insertBeforeChoice: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The capabilities related to this choice when editing the choice. */
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilities {

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
	export interface GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilitiesFormProperties {

		/** Whether the user can delete this choice. */
		canDelete: FormControl<boolean | null | undefined>,

		/** Whether the user can disable this choice. */
		canDisable: FormControl<boolean | null | undefined>,

		/** Whether the user can enable this choice. */
		canEnable: FormControl<boolean | null | undefined>,

		/** Whether the user can update this choice. */
		canUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceSchemaCapabilitiesFormProperties>({
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			canDisable: new FormControl<boolean | null | undefined>(undefined),
			canEnable: new FormControl<boolean | null | undefined>(undefined),
			canUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for a multi-valued variant of an associated field type. */
	export interface GoogleAppsDriveLabelsV2FieldListOptions {

		/** Maximum number of entries permitted. */
		maxEntries?: number | null;
	}

	/** Options for a multi-valued variant of an associated field type. */
	export interface GoogleAppsDriveLabelsV2FieldListOptionsFormProperties {

		/** Maximum number of entries permitted. */
		maxEntries: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldListOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldListOptionsFormProperties>({
			maxEntries: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Options for the Text field type. */
	export interface GoogleAppsDriveLabelsV2FieldTextOptions {

		/** Output only. The maximum valid length of values for the text field. */
		maxLength?: number | null;

		/** Output only. The minimum valid length of values for the text field. */
		minLength?: number | null;
	}

	/** Options for the Text field type. */
	export interface GoogleAppsDriveLabelsV2FieldTextOptionsFormProperties {

		/** Output only. The maximum valid length of values for the text field. */
		maxLength: FormControl<number | null | undefined>,

		/** Output only. The minimum valid length of values for the text field. */
		minLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldTextOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldTextOptionsFormProperties>({
			maxLength: new FormControl<number | null | undefined>(undefined),
			minLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Options for the user field type. */
	export interface GoogleAppsDriveLabelsV2FieldUserOptions {

		/** Options for a multi-valued variant of an associated field type. */
		listOptions?: GoogleAppsDriveLabelsV2FieldListOptions;
	}

	/** Options for the user field type. */
	export interface GoogleAppsDriveLabelsV2FieldUserOptionsFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2FieldUserOptionsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldUserOptionsFormProperties>({
		});

	}


	/** Request to create a Selection Choice. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequest {

		/** Selection field choice. */
		choice?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice;

		/** Required. The Selection Field in which a Choice will be created. */
		fieldId?: string | null;
	}

	/** Request to create a Selection Choice. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequestFormProperties {

		/** Required. The Selection Field in which a Choice will be created. */
		fieldId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestCreateSelectionChoiceRequestFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to delete the Field. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequest {

		/** Required. ID of the Field to delete. */
		id?: string | null;
	}

	/** Request to delete the Field. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequestFormProperties {

		/** Required. ID of the Field to delete. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteFieldRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to delete a Choice. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequest {

		/** Required. The Selection Field from which a Choice will be deleted. */
		fieldId?: string | null;

		/** Required. Choice to delete. */
		id?: string | null;
	}

	/** Request to delete a Choice. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequestFormProperties {

		/** Required. The Selection Field from which a Choice will be deleted. */
		fieldId: FormControl<string | null | undefined>,

		/** Required. Choice to delete. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDeleteSelectionChoiceRequestFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to disable the Field. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequest {

		/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
		disabledPolicy?: GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;

		/** Required. Key of the Field to disable. */
		id?: string | null;

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Request to disable the Field. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequestFormProperties {

		/** Required. Key of the Field to disable. */
		id: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableFieldRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to disable a Choice. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequest {

		/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
		disabledPolicy?: GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;

		/** Required. The Selection Field in which a Choice will be disabled. */
		fieldId?: string | null;

		/** Required. Choice to disable. */
		id?: string | null;

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Request to disable a Choice. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequestFormProperties {

		/** Required. The Selection Field in which a Choice will be disabled. */
		fieldId: FormControl<string | null | undefined>,

		/** Required. Choice to disable. */
		id: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestDisableSelectionChoiceRequestFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to enable the Field. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequest {

		/** Required. ID of the Field to enable. */
		id?: string | null;
	}

	/** Request to enable the Field. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequestFormProperties {

		/** Required. ID of the Field to enable. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableFieldRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to enable a Choice. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequest {

		/** Required. The Selection Field in which a Choice will be enabled. */
		fieldId?: string | null;

		/** Required. Choice to enable. */
		id?: string | null;
	}

	/** Request to enable a Choice. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequestFormProperties {

		/** Required. The Selection Field in which a Choice will be enabled. */
		fieldId: FormControl<string | null | undefined>,

		/** Required. Choice to enable. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestEnableSelectionChoiceRequestFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to update Field properties. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequest {

		/** Required. The Field to update. */
		id?: string | null;

		/** The basic properties of the field. */
		properties?: GoogleAppsDriveLabelsV2FieldProperties;

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Request to update Field properties. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequestFormProperties {

		/** Required. The Field to update. */
		id: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldPropertiesRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to change the type of a Field. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequest {

		/** Options for the date field type. */
		dateOptions?: GoogleAppsDriveLabelsV2FieldDateOptions;

		/** Required. The Field to update. */
		id?: string | null;

		/** Options for the Integer field type. */
		integerOptions?: GoogleAppsDriveLabelsV2FieldIntegerOptions;

		/** Options for the selection field type. */
		selectionOptions?: GoogleAppsDriveLabelsV2FieldSelectionOptions;

		/** Options for the Text field type. */
		textOptions?: GoogleAppsDriveLabelsV2FieldTextOptions;

		/** The fields that should be updated. At least one field must be specified. The root of `type_options` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;

		/** Options for the user field type. */
		userOptions?: GoogleAppsDriveLabelsV2FieldUserOptions;
	}

	/** Request to change the type of a Field. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequestFormProperties {

		/** Required. The Field to update. */
		id: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root of `type_options` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateFieldTypeRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Updates basic properties of a Label. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequest {

		/** Basic properties of the label. */
		properties?: GoogleAppsDriveLabelsV2LabelProperties;

		/** The fields that should be updated. At least one field must be specified. The root `label_properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Updates basic properties of a Label. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequestFormProperties {

		/** The fields that should be updated. At least one field must be specified. The root `label_properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateLabelPropertiesRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic properties of the label. */
	export interface GoogleAppsDriveLabelsV2LabelProperties {

		/** The description of the label. */
		description?: string | null;

		/** Required. Title of the label. */
		title?: string | null;
	}

	/** Basic properties of the label. */
	export interface GoogleAppsDriveLabelsV2LabelPropertiesFormProperties {

		/** The description of the label. */
		description: FormControl<string | null | undefined>,

		/** Required. Title of the label. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LabelPropertiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LabelPropertiesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to update a Choice properties. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequest {

		/** Required. The Selection Field to update. */
		fieldId?: string | null;

		/** Required. The Choice to update. */
		id?: string | null;

		/** Basic properties of the choice. */
		properties?: GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceProperties;

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;
	}

	/** Request to update a Choice properties. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequestFormProperties {

		/** Required. The Selection Field to update. */
		fieldId: FormControl<string | null | undefined>,

		/** Required. The Choice to update. */
		id: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `properties` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestUpdateSelectionChoicePropertiesRequestFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView { LABEL_VIEW_BASIC = 'LABEL_VIEW_BASIC', LABEL_VIEW_FULL = 'LABEL_VIEW_FULL' }


	/** Provides control over how write requests are executed. When not specified, the last write wins. */
	export interface GoogleAppsDriveLabelsV2WriteControl {

		/** The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error. */
		requiredRevisionId?: string | null;
	}

	/** Provides control over how write requests are executed. When not specified, the last write wins. */
	export interface GoogleAppsDriveLabelsV2WriteControlFormProperties {

		/** The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error. */
		requiredRevisionId: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2WriteControlFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2WriteControlFormProperties>({
			requiredRevisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for Label update. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse {

		/** The reply of the updates. This maps 1:1 with the updates, although responses to some requests may be empty. */
		responses?: Array<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse>;

		/** A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items. */
		updatedLabel?: GoogleAppsDriveLabelsV2Label;
	}

	/** Response for Label update. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseFormProperties>({
		});

	}


	/** A single response from an update. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponse {

		/** Response following Field create. */
		createField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse;

		/** Response following Selection Choice create. */
		createSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse;

		/** Response following Field delete. */
		deleteField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponse;

		/** Response following Choice delete. */
		deleteSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponse;

		/** Response following Field disable. */
		disableField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponse;

		/** Response following Choice disable. */
		disableSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponse;

		/** Response following Field enable. */
		enableField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponse;

		/** Response following Choice enable. */
		enableSelectionChoice?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponse;

		/** Response following update to Field properties. */
		updateField?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse;

		/** Response following update to Field type. */
		updateFieldType?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponse;

		/** Response following update to Label properties. */
		updateLabel?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponse;

		/** Response following update to Selection Choice properties. */
		updateSelectionChoiceProperties?: GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse;
	}

	/** A single response from an update. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseResponseFormProperties>({
		});

	}


	/** Response following Field create. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponse {

		/** The field of the created field. When left blank in a create request, a key will be autogenerated and can be identified here. */
		id?: string | null;

		/** The priority of the created field. The priority may change from what was specified to assure contiguous priorities between fields (1-n). */
		priority?: number | null;
	}

	/** Response following Field create. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponseFormProperties {

		/** The field of the created field. When left blank in a create request, a key will be autogenerated and can be identified here. */
		id: FormControl<string | null | undefined>,

		/** The priority of the created field. The priority may change from what was specified to assure contiguous priorities between fields (1-n). */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateFieldResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response following Selection Choice create. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponse {

		/** The server-generated id of the field. */
		fieldId?: string | null;

		/** The server-generated ID of the created choice within the Field */
		id?: string | null;
	}

	/** Response following Selection Choice create. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponseFormProperties {

		/** The server-generated id of the field. */
		fieldId: FormControl<string | null | undefined>,

		/** The server-generated ID of the created choice within the Field */
		id: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseCreateSelectionChoiceResponseFormProperties>({
			fieldId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response following Field delete. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponse {
	}

	/** Response following Field delete. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteFieldResponseFormProperties>({
		});

	}


	/** Response following Choice delete. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponse {
	}

	/** Response following Choice delete. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDeleteSelectionChoiceResponseFormProperties>({
		});

	}


	/** Response following Field disable. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponse {
	}

	/** Response following Field disable. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableFieldResponseFormProperties>({
		});

	}


	/** Response following Choice disable. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponse {
	}

	/** Response following Choice disable. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseDisableSelectionChoiceResponseFormProperties>({
		});

	}


	/** Response following Field enable. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponse {
	}

	/** Response following Field enable. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableFieldResponseFormProperties>({
		});

	}


	/** Response following Choice enable. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponse {
	}

	/** Response following Choice enable. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseEnableSelectionChoiceResponseFormProperties>({
		});

	}


	/** Response following update to Field properties. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponse {

		/** The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n). */
		priority?: number | null;
	}

	/** Response following update to Field properties. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponseFormProperties {

		/** The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n). */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldPropertiesResponseFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Response following update to Field type. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponse {
	}

	/** Response following update to Field type. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateFieldTypeResponseFormProperties>({
		});

	}


	/** Response following update to Label properties. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponse {
	}

	/** Response following update to Label properties. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponseFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateLabelPropertiesResponseFormProperties>({
		});

	}


	/** Response following update to Selection Choice properties. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponse {

		/** The priority of the updated choice. The priority may change from what was specified to assure contiguous priorities between choices (1-n). */
		priority?: number | null;
	}

	/** Response following update to Selection Choice properties. */
	export interface GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponseFormProperties {

		/** The priority of the updated choice. The priority may change from what was specified to assure contiguous priorities between choices (1-n). */
		priority: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponseUpdateSelectionChoicePropertiesResponseFormProperties>({
			priority: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items. */
	export interface GoogleAppsDriveLabelsV2Label {

		/** The capabilities a user has on this label's applied metadata. */
		appliedCapabilities?: GoogleAppsDriveLabelsV2LabelAppliedCapabilities;

		/** Behavior of this label when it's applied to Drive items. */
		appliedLabelPolicy?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy;

		/** Output only. The time this label was created. */
		createTime?: string | null;

		/** Information about a user. */
		creator?: GoogleAppsDriveLabelsV2UserInfo;

		/** Output only. The customer this label belongs to. For example: "customers/123abc789." */
		customer?: string | null;

		/** Output only. The time this label was disabled. This value has no meaning when the label is not disabled. */
		disableTime?: string | null;

		/** Information about a user. */
		disabler?: GoogleAppsDriveLabelsV2UserInfo;

		/** UI display hints for rendering the label. */
		displayHints?: GoogleAppsDriveLabelsV2LabelDisplayHints;

		/** List of fields in descending priority order. */
		fields?: Array<GoogleAppsDriveLabelsV2Field>;

		/** Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+` */
		id?: string | null;

		/** Required. The type of label. */
		labelType?: GoogleAppsDriveLabelsV2LabelLabelType | null;

		/** Custom URL to present to users to allow them to learn more about this label and how it should be used. */
		learnMoreUri?: string | null;

		/** The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect. */
		lifecycle?: GoogleAppsDriveLabelsV2Lifecycle;

		/** Contains information about whether a label component should be considered locked. */
		lockStatus?: GoogleAppsDriveLabelsV2LockStatus;

		/** Output only. Resource name of the label. Will be in the form of either: `labels/{id}` or `labels/{id}@{revision_id}` depending on the request. See `id` and `revision_id` below. */
		name?: string | null;

		/** Basic properties of the label. */
		properties?: GoogleAppsDriveLabelsV2LabelProperties;

		/** Output only. The time this label was published. This value has no meaning when the label is not published. */
		publishTime?: string | null;

		/** Information about a user. */
		publisher?: GoogleAppsDriveLabelsV2UserInfo;

		/** Output only. The time this label revision was created. */
		revisionCreateTime?: string | null;

		/** Information about a user. */
		revisionCreator?: GoogleAppsDriveLabelsV2UserInfo;

		/** Output only. Revision ID of the label. Revision ID might be part of the label `name` depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: `([a-zA-Z0-9])+` */
		revisionId?: string | null;

		/** The capabilities related to this label when editing the label. */
		schemaCapabilities?: GoogleAppsDriveLabelsV2LabelSchemaCapabilities;
	}

	/** A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items. */
	export interface GoogleAppsDriveLabelsV2LabelFormProperties {

		/** Output only. The time this label was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The customer this label belongs to. For example: "customers/123abc789." */
		customer: FormControl<string | null | undefined>,

		/** Output only. The time this label was disabled. This value has no meaning when the label is not disabled. */
		disableTime: FormControl<string | null | undefined>,

		/** Output only. Globally unique identifier of this label. ID makes up part of the label `name`, but unlike `name`, ID is consistent between revisions. Matches the regex: `([a-zA-Z0-9])+` */
		id: FormControl<string | null | undefined>,

		/** Required. The type of label. */
		labelType: FormControl<GoogleAppsDriveLabelsV2LabelLabelType | null | undefined>,

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
	export function CreateGoogleAppsDriveLabelsV2LabelFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LabelFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			customer: new FormControl<string | null | undefined>(undefined),
			disableTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			labelType: new FormControl<GoogleAppsDriveLabelsV2LabelLabelType | null | undefined>(undefined),
			learnMoreUri: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			publishTime: new FormControl<string | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The capabilities a user has on this label's applied metadata. */
	export interface GoogleAppsDriveLabelsV2LabelAppliedCapabilities {

		/** Whether the user can apply this label to items. */
		canApply?: boolean | null;

		/** Whether the user can read applied metadata related to this label. */
		canRead?: boolean | null;

		/** Whether the user can remove this label from items. */
		canRemove?: boolean | null;
	}

	/** The capabilities a user has on this label's applied metadata. */
	export interface GoogleAppsDriveLabelsV2LabelAppliedCapabilitiesFormProperties {

		/** Whether the user can apply this label to items. */
		canApply: FormControl<boolean | null | undefined>,

		/** Whether the user can read applied metadata related to this label. */
		canRead: FormControl<boolean | null | undefined>,

		/** Whether the user can remove this label from items. */
		canRemove: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LabelAppliedCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LabelAppliedCapabilitiesFormProperties>({
			canApply: new FormControl<boolean | null | undefined>(undefined),
			canRead: new FormControl<boolean | null | undefined>(undefined),
			canRemove: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Behavior of this label when it's applied to Drive items. */
	export interface GoogleAppsDriveLabelsV2LabelAppliedLabelPolicy {

		/** Indicates how the applied label and field values should be copied when a Drive item is copied. */
		copyMode?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyMode | null;
	}

	/** Behavior of this label when it's applied to Drive items. */
	export interface GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyFormProperties {

		/** Indicates how the applied label and field values should be copied when a Drive item is copied. */
		copyMode: FormControl<GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyMode | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LabelAppliedLabelPolicyFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyFormProperties>({
			copyMode: new FormControl<GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyMode | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyMode { COPY_MODE_UNSPECIFIED = 'COPY_MODE_UNSPECIFIED', DO_NOT_COPY = 'DO_NOT_COPY', ALWAYS_COPY = 'ALWAYS_COPY', COPY_APPLIABLE = 'COPY_APPLIABLE' }


	/** UI display hints for rendering the label. */
	export interface GoogleAppsDriveLabelsV2LabelDisplayHints {

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
	export interface GoogleAppsDriveLabelsV2LabelDisplayHintsFormProperties {

		/** Whether the label should be shown in the UI as disabled. */
		disabled: FormControl<boolean | null | undefined>,

		/** This label should be hidden in the search menu when searching for Drive items. */
		hiddenInSearch: FormControl<boolean | null | undefined>,

		/** Order to display label in a list. */
		priority: FormControl<string | null | undefined>,

		/** This label should be shown in the apply menu when applying values to a Drive item. */
		shownInApply: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LabelDisplayHintsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LabelDisplayHintsFormProperties>({
			disabled: new FormControl<boolean | null | undefined>(undefined),
			hiddenInSearch: new FormControl<boolean | null | undefined>(undefined),
			priority: new FormControl<string | null | undefined>(undefined),
			shownInApply: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2LabelLabelType { LABEL_TYPE_UNSPECIFIED = 'LABEL_TYPE_UNSPECIFIED', SHARED = 'SHARED', ADMIN = 'ADMIN', GOOGLE_APP = 'GOOGLE_APP' }


	/** The capabilities related to this label when editing the label. */
	export interface GoogleAppsDriveLabelsV2LabelSchemaCapabilities {

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
	export interface GoogleAppsDriveLabelsV2LabelSchemaCapabilitiesFormProperties {

		/** Whether the user can delete this label. The user must have permission and the label must be disabled. */
		canDelete: FormControl<boolean | null | undefined>,

		/** Whether the user can disable this label. The user must have permission and this label must not already be disabled. */
		canDisable: FormControl<boolean | null | undefined>,

		/** Whether the user can enable this label. The user must have permission and this label must be disabled. */
		canEnable: FormControl<boolean | null | undefined>,

		/** Whether the user can change this label. */
		canUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LabelSchemaCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LabelSchemaCapabilitiesFormProperties>({
			canDelete: new FormControl<boolean | null | undefined>(undefined),
			canDisable: new FormControl<boolean | null | undefined>(undefined),
			canEnable: new FormControl<boolean | null | undefined>(undefined),
			canUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to deprecate a published Label. */
	export interface GoogleAppsDriveLabelsV2DisableLabelRequest {

		/** The policy that governs how to treat a disabled label, field, or selection choice in different contexts. */
		disabledPolicy?: GoogleAppsDriveLabelsV2LifecycleDisabledPolicy;

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode?: string | null;

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;

		/** Provides control over how write requests are executed. When not specified, the last write wins. */
		writeControl?: GoogleAppsDriveLabelsV2WriteControl;
	}

	/** Request to deprecate a published Label. */
	export interface GoogleAppsDriveLabelsV2DisableLabelRequestFormProperties {

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode: FormControl<string | null | undefined>,

		/** The fields that should be updated. At least one field must be specified. The root `disabled_policy` is implied and should not be specified. A single `*` can be used as short-hand for updating every field. */
		updateMask: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2DisableLabelRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2DisableLabelRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			updateMask: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to enable a label. */
	export interface GoogleAppsDriveLabelsV2EnableLabelRequest {

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;

		/** Provides control over how write requests are executed. When not specified, the last write wins. */
		writeControl?: GoogleAppsDriveLabelsV2WriteControl;
	}

	/** Request to enable a label. */
	export interface GoogleAppsDriveLabelsV2EnableLabelRequestFormProperties {

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2EnableLabelRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2EnableLabelRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc. */
	export interface GoogleAppsDriveLabelsV2FieldLimits {

		/** Limits for date Field type. */
		dateLimits?: GoogleAppsDriveLabelsV2DateLimits;

		/** Limits for integer Field type. */
		integerLimits?: GoogleAppsDriveLabelsV2IntegerLimits;

		/** Limits for long text Field type. */
		longTextLimits?: GoogleAppsDriveLabelsV2LongTextLimits;

		/** Limits for Field description, also called help text. */
		maxDescriptionLength?: number | null;

		/** Limits for Field title. */
		maxDisplayNameLength?: number | null;

		/** Max length for the id. */
		maxIdLength?: number | null;

		/** Limits for selection Field type. */
		selectionLimits?: GoogleAppsDriveLabelsV2SelectionLimits;

		/** Limits for text Field type. */
		textLimits?: GoogleAppsDriveLabelsV2TextLimits;

		/** Limits for Field.Type.USER. */
		userLimits?: GoogleAppsDriveLabelsV2UserLimits;
	}

	/** Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc. */
	export interface GoogleAppsDriveLabelsV2FieldLimitsFormProperties {

		/** Limits for Field description, also called help text. */
		maxDescriptionLength: FormControl<number | null | undefined>,

		/** Limits for Field title. */
		maxDisplayNameLength: FormControl<number | null | undefined>,

		/** Max length for the id. */
		maxIdLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2FieldLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2FieldLimitsFormProperties>({
			maxDescriptionLength: new FormControl<number | null | undefined>(undefined),
			maxDisplayNameLength: new FormControl<number | null | undefined>(undefined),
			maxIdLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Limits for integer Field type. */
	export interface GoogleAppsDriveLabelsV2IntegerLimits {

		/** Maximum value for an integer Field type. */
		maxValue?: string | null;

		/** Minimum value for an integer Field type. */
		minValue?: string | null;
	}

	/** Limits for integer Field type. */
	export interface GoogleAppsDriveLabelsV2IntegerLimitsFormProperties {

		/** Maximum value for an integer Field type. */
		maxValue: FormControl<string | null | undefined>,

		/** Minimum value for an integer Field type. */
		minValue: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2IntegerLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2IntegerLimitsFormProperties>({
			maxValue: new FormControl<string | null | undefined>(undefined),
			minValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Limits for long text Field type. */
	export interface GoogleAppsDriveLabelsV2LongTextLimits {

		/** Maximum length allowed for a long text Field type. */
		maxLength?: number | null;

		/** Minimum length allowed for a long text Field type. */
		minLength?: number | null;
	}

	/** Limits for long text Field type. */
	export interface GoogleAppsDriveLabelsV2LongTextLimitsFormProperties {

		/** Maximum length allowed for a long text Field type. */
		maxLength: FormControl<number | null | undefined>,

		/** Minimum length allowed for a long text Field type. */
		minLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LongTextLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LongTextLimitsFormProperties>({
			maxLength: new FormControl<number | null | undefined>(undefined),
			minLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Limits for selection Field type. */
	export interface GoogleAppsDriveLabelsV2SelectionLimits {

		/** Limits for list-variant of a Field type. */
		listLimits?: GoogleAppsDriveLabelsV2ListLimits;

		/** The max number of choices. */
		maxChoices?: number | null;

		/** Maximum number of deleted choices. */
		maxDeletedChoices?: number | null;

		/** Maximum length for display name. */
		maxDisplayNameLength?: number | null;

		/** Maximum ID length for a selection options. */
		maxIdLength?: number | null;
	}

	/** Limits for selection Field type. */
	export interface GoogleAppsDriveLabelsV2SelectionLimitsFormProperties {

		/** The max number of choices. */
		maxChoices: FormControl<number | null | undefined>,

		/** Maximum number of deleted choices. */
		maxDeletedChoices: FormControl<number | null | undefined>,

		/** Maximum length for display name. */
		maxDisplayNameLength: FormControl<number | null | undefined>,

		/** Maximum ID length for a selection options. */
		maxIdLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2SelectionLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2SelectionLimitsFormProperties>({
			maxChoices: new FormControl<number | null | undefined>(undefined),
			maxDeletedChoices: new FormControl<number | null | undefined>(undefined),
			maxDisplayNameLength: new FormControl<number | null | undefined>(undefined),
			maxIdLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Limits for list-variant of a Field type. */
	export interface GoogleAppsDriveLabelsV2ListLimits {

		/** Maximum number of values allowed for the Field type. */
		maxEntries?: number | null;
	}

	/** Limits for list-variant of a Field type. */
	export interface GoogleAppsDriveLabelsV2ListLimitsFormProperties {

		/** Maximum number of values allowed for the Field type. */
		maxEntries: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2ListLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2ListLimitsFormProperties>({
			maxEntries: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Limits for text Field type. */
	export interface GoogleAppsDriveLabelsV2TextLimits {

		/** Maximum length allowed for a text Field type. */
		maxLength?: number | null;

		/** Minimum length allowed for a text Field type. */
		minLength?: number | null;
	}

	/** Limits for text Field type. */
	export interface GoogleAppsDriveLabelsV2TextLimitsFormProperties {

		/** Maximum length allowed for a text Field type. */
		maxLength: FormControl<number | null | undefined>,

		/** Minimum length allowed for a text Field type. */
		minLength: FormControl<number | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2TextLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2TextLimitsFormProperties>({
			maxLength: new FormControl<number | null | undefined>(undefined),
			minLength: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Limits for Field.Type.USER. */
	export interface GoogleAppsDriveLabelsV2UserLimits {

		/** Limits for list-variant of a Field type. */
		listLimits?: GoogleAppsDriveLabelsV2ListLimits;
	}

	/** Limits for Field.Type.USER. */
	export interface GoogleAppsDriveLabelsV2UserLimitsFormProperties {
	}
	export function CreateGoogleAppsDriveLabelsV2UserLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2UserLimitsFormProperties>({
		});

	}


	/** Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title. */
	export interface GoogleAppsDriveLabelsV2LabelLimits {

		/** Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc. */
		fieldLimits?: GoogleAppsDriveLabelsV2FieldLimits;

		/** The maximum number of published Fields that can be deleted. */
		maxDeletedFields?: number | null;

		/** The maximum number of characters allowed for the description. */
		maxDescriptionLength?: number | null;

		/** The maximum number of draft revisions that will be kept before deleting old drafts. */
		maxDraftRevisions?: number | null;

		/** The maximum number of Fields allowed within the label. */
		maxFields?: number | null;

		/** The maximum number of characters allowed for the title. */
		maxTitleLength?: number | null;

		/** Resource name. */
		name?: string | null;
	}

	/** Label constraints governing the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title. */
	export interface GoogleAppsDriveLabelsV2LabelLimitsFormProperties {

		/** The maximum number of published Fields that can be deleted. */
		maxDeletedFields: FormControl<number | null | undefined>,

		/** The maximum number of characters allowed for the description. */
		maxDescriptionLength: FormControl<number | null | undefined>,

		/** The maximum number of draft revisions that will be kept before deleting old drafts. */
		maxDraftRevisions: FormControl<number | null | undefined>,

		/** The maximum number of Fields allowed within the label. */
		maxFields: FormControl<number | null | undefined>,

		/** The maximum number of characters allowed for the title. */
		maxTitleLength: FormControl<number | null | undefined>,

		/** Resource name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LabelLimitsFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LabelLimitsFormProperties>({
			maxDeletedFields: new FormControl<number | null | undefined>(undefined),
			maxDescriptionLength: new FormControl<number | null | undefined>(undefined),
			maxDraftRevisions: new FormControl<number | null | undefined>(undefined),
			maxFields: new FormControl<number | null | undefined>(undefined),
			maxTitleLength: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Lock that can be applied to a Label, Field, or Choice. */
	export interface GoogleAppsDriveLabelsV2LabelLock {

		/** A description of a user's capabilities on a LabelLock. */
		capabilities?: GoogleAppsDriveLabelsV2LabelLockCapabilities;

		/** The ID of the Selection Field Choice that should be locked. If present, `field_id` must also be present. */
		choiceId?: string | null;

		/** Output only. The time this LabelLock was created. */
		createTime?: string | null;

		/** Information about a user. */
		creator?: GoogleAppsDriveLabelsV2UserInfo;

		/** Output only. A timestamp indicating when this LabelLock was scheduled for deletion. This will be present only if this LabelLock is in the DELETING state. */
		deleteTime?: string | null;

		/** The ID of the Field that should be locked. Empty if the whole Label should be locked. */
		fieldId?: string | null;

		/** Output only. Resource name of this LabelLock. */
		name?: string | null;

		/** Output only. This LabelLock's state. */
		state?: GoogleAppsDriveLabelsV2LabelLockState | null;
	}

	/** A Lock that can be applied to a Label, Field, or Choice. */
	export interface GoogleAppsDriveLabelsV2LabelLockFormProperties {

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
		state: FormControl<GoogleAppsDriveLabelsV2LabelLockState | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LabelLockFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LabelLockFormProperties>({
			choiceId: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			fieldId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GoogleAppsDriveLabelsV2LabelLockState | null | undefined>(undefined),
		});

	}


	/** A description of a user's capabilities on a LabelLock. */
	export interface GoogleAppsDriveLabelsV2LabelLockCapabilities {

		/** True if the user is authorized to view the policy. */
		canViewPolicy?: boolean | null;
	}

	/** A description of a user's capabilities on a LabelLock. */
	export interface GoogleAppsDriveLabelsV2LabelLockCapabilitiesFormProperties {

		/** True if the user is authorized to view the policy. */
		canViewPolicy: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2LabelLockCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2LabelLockCapabilitiesFormProperties>({
			canViewPolicy: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum GoogleAppsDriveLabelsV2LabelLockState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', DELETING = 'DELETING' }


	/** The response to a ListLabelLocksRequest. */
	export interface GoogleAppsDriveLabelsV2ListLabelLocksResponse {

		/** LabelLocks. */
		labelLocks?: Array<GoogleAppsDriveLabelsV2LabelLock>;

		/** The token of the next page in the response. */
		nextPageToken?: string | null;
	}

	/** The response to a ListLabelLocksRequest. */
	export interface GoogleAppsDriveLabelsV2ListLabelLocksResponseFormProperties {

		/** The token of the next page in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2ListLabelLocksResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2ListLabelLocksResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing the permissions on a Label. */
	export interface GoogleAppsDriveLabelsV2ListLabelPermissionsResponse {

		/** Label permissions. */
		labelPermissions?: Array<GoogleAppsDriveLabelsV2LabelPermission>;

		/** The token of the next page in the response. */
		nextPageToken?: string | null;
	}

	/** Response for listing the permissions on a Label. */
	export interface GoogleAppsDriveLabelsV2ListLabelPermissionsResponseFormProperties {

		/** The token of the next page in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2ListLabelPermissionsResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2ListLabelPermissionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for listing Labels. */
	export interface GoogleAppsDriveLabelsV2ListLabelsResponse {

		/** Labels. */
		labels?: Array<GoogleAppsDriveLabelsV2Label>;

		/** The token of the next page in the response. */
		nextPageToken?: string | null;
	}

	/** Response for listing Labels. */
	export interface GoogleAppsDriveLabelsV2ListLabelsResponseFormProperties {

		/** The token of the next page in the response. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2ListLabelsResponseFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2ListLabelsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to publish a label. */
	export interface GoogleAppsDriveLabelsV2PublishLabelRequest {

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;

		/** Provides control over how write requests are executed. When not specified, the last write wins. */
		writeControl?: GoogleAppsDriveLabelsV2WriteControl;
	}

	/** Request to publish a label. */
	export interface GoogleAppsDriveLabelsV2PublishLabelRequestFormProperties {

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2PublishLabelRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2PublishLabelRequestFormProperties>({
			languageCode: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \ */
	export interface GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest {

		/** Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied. */
		copyMode?: GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyMode | null;

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode?: string | null;

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess?: boolean | null;

		/** When specified, only certain fields belonging to the indicated view will be returned. */
		view?: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView | null;
	}

	/** Request to update the `CopyMode` of the given Label. Changes to this policy are not revisioned, do not require publishing, and take effect immediately. \ */
	export interface GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestFormProperties {

		/** Required. Indicates how the applied Label, and Field values should be copied when a Drive item is copied. */
		copyMode: FormControl<GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyMode | null | undefined>,

		/** The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language will be used. */
		languageCode: FormControl<string | null | undefined>,

		/** Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. */
		useAdminAccess: FormControl<boolean | null | undefined>,

		/** When specified, only certain fields belonging to the indicated view will be returned. */
		view: FormControl<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView | null | undefined>,
	}
	export function CreateGoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequestFormProperties>({
			copyMode: new FormControl<GoogleAppsDriveLabelsV2LabelAppliedLabelPolicyCopyMode | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			useAdminAccess: new FormControl<boolean | null | undefined>(undefined),
			view: new FormControl<GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView | null | undefined>(undefined),
		});

	}


	/** The capabilities of a user. */
	export interface GoogleAppsDriveLabelsV2UserCapabilities {

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
	export interface GoogleAppsDriveLabelsV2UserCapabilitiesFormProperties {

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
	export function CreateGoogleAppsDriveLabelsV2UserCapabilitiesFormGroup() {
		return new FormGroup<GoogleAppsDriveLabelsV2UserCapabilitiesFormProperties>({
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
		 * Get v2/labels
		 * @param {string} customer The customer to scope this list request to. For example: "customers/abcd1234". If unset, will return all labels within the current customer.
		 * @param {string} languageCode The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used.
		 * @param {GoogleAppsDriveLabelsV2LabelPermissionRole} minimumRole Specifies the level of access the user must have on the returned Labels. The minimum role a user must have on a label. Defaults to `READER`.
		 * @param {number} pageSize Maximum number of labels to return per page. Default: 50. Max: 200.
		 * @param {string} pageToken The token of the page to return.
		 * @param {boolean} publishedOnly Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id}/{revision_id}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id}`).
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. This will return all Labels within the customer.
		 * @param {GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView} view When specified, only certain fields belonging to the indicated view are returned.
		 * @return {GoogleAppsDriveLabelsV2ListLabelsResponse} Successful response
		 */
		Drivelabels_labels_list(customer: string | null | undefined, languageCode: string | null | undefined, minimumRole: GoogleAppsDriveLabelsV2LabelPermissionRole | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, publishedOnly: boolean | null | undefined, useAdminAccess: boolean | null | undefined, view: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView | null | undefined): Observable<GoogleAppsDriveLabelsV2ListLabelsResponse> {
			return this.http.get<GoogleAppsDriveLabelsV2ListLabelsResponse>(this.baseUri + 'v2/labels?customer=' + (customer == null ? '' : encodeURIComponent(customer)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&minimumRole=' + minimumRole + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&publishedOnly=' + publishedOnly + '&useAdminAccess=' + useAdminAccess + '&view=' + view, {});
		}

		/**
		 * Creates a new Label.
		 * Post v2/labels
		 * @param {string} languageCode The BCP-47 language code to use for evaluating localized Field labels in response. When not specified, values in the default configured language will be used.
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access.
		 * @return {GoogleAppsDriveLabelsV2Label} Successful response
		 */
		Drivelabels_labels_create(languageCode: string | null | undefined, useAdminAccess: boolean | null | undefined, requestBody: GoogleAppsDriveLabelsV2Label): Observable<GoogleAppsDriveLabelsV2Label> {
			return this.http.post<GoogleAppsDriveLabelsV2Label>(this.baseUri + 'v2/labels?languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&useAdminAccess=' + useAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.
		 * Get v2/limits/label
		 * @param {string} name Required. Label revision resource name Must be: "limits/label"
		 * @return {GoogleAppsDriveLabelsV2LabelLimits} Successful response
		 */
		Drivelabels_limits_getLabel(name: string | null | undefined): Observable<GoogleAppsDriveLabelsV2LabelLimits> {
			return this.http.get<GoogleAppsDriveLabelsV2LabelLimits>(this.baseUri + 'v2/limits/label?name=' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
		 * Delete v2/{name}
		 * @param {string} name Required. Label Permission resource name.
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
		 * @param {string} writeControl_requiredRevisionId The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Drivelabels_labels_revisions_permissions_delete(name: string, useAdminAccess: boolean | null | undefined, writeControl_requiredRevisionId: string | null | undefined): Observable<GoogleProtobufEmpty> {
			return this.http.delete<GoogleProtobufEmpty>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&useAdminAccess=' + useAdminAccess + '&writeControl_requiredRevisionId=' + (writeControl_requiredRevisionId == null ? '' : encodeURIComponent(writeControl_requiredRevisionId)), {});
		}

		/**
		 * Gets the user capabilities.
		 * Get v2/{name}
		 * @param {string} name Required. The resource name of the user. Only "users/me/capabilities" is supported.
		 * @param {string} customer The customer to scope this request to. For example: "customers/abcd1234". If unset, will return settings within the current customer.
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access.
		 * @param {GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView} view When specified, only certain fields belonging to the indicated view are returned.
		 * @return {GoogleAppsDriveLabelsV2UserCapabilities} Successful response
		 */
		Drivelabels_users_getCapabilities(name: string, customer: string | null | undefined, useAdminAccess: boolean | null | undefined, view: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequestView | null | undefined): Observable<GoogleAppsDriveLabelsV2UserCapabilities> {
			return this.http.get<GoogleAppsDriveLabelsV2UserCapabilities>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '&customer=' + (customer == null ? '' : encodeURIComponent(customer)) + '&useAdminAccess=' + useAdminAccess + '&view=' + view, {});
		}

		/**
		 * Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.
		 * Post v2/{name}:delta
		 * @param {string} name Required. The resource name of the Label to update.
		 * @return {GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse} Successful response
		 */
		Drivelabels_labels_delta(name: string, requestBody: GoogleAppsDriveLabelsV2DeltaUpdateLabelRequest): Observable<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse> {
			return this.http.post<GoogleAppsDriveLabelsV2DeltaUpdateLabelResponse>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':delta', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.
		 * Post v2/{name}:disable
		 * @param {string} name Required. Label resource name.
		 * @return {GoogleAppsDriveLabelsV2Label} Successful response
		 */
		Drivelabels_labels_disable(name: string, requestBody: GoogleAppsDriveLabelsV2DisableLabelRequest): Observable<GoogleAppsDriveLabelsV2Label> {
			return this.http.post<GoogleAppsDriveLabelsV2Label>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':disable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.
		 * Post v2/{name}:enable
		 * @param {string} name Required. Label resource name.
		 * @return {GoogleAppsDriveLabelsV2Label} Successful response
		 */
		Drivelabels_labels_enable(name: string, requestBody: GoogleAppsDriveLabelsV2EnableLabelRequest): Observable<GoogleAppsDriveLabelsV2Label> {
			return this.http.post<GoogleAppsDriveLabelsV2Label>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':enable', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published: * The label cannot be directly deleted. It must be disabled first, then deleted. * Field.FieldType cannot be changed. * Changes to Field validation options cannot reject something that was previously accepted. * Reducing the max entries.
		 * Post v2/{name}:publish
		 * @param {string} name Required. Label resource name.
		 * @return {GoogleAppsDriveLabelsV2Label} Successful response
		 */
		Drivelabels_labels_publish(name: string, requestBody: GoogleAppsDriveLabelsV2PublishLabelRequest): Observable<GoogleAppsDriveLabelsV2Label> {
			return this.http.post<GoogleAppsDriveLabelsV2Label>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':publish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.
		 * Post v2/{name}:updateLabelCopyMode
		 * @param {string} name Required. The resource name of the Label to update.
		 * @return {GoogleAppsDriveLabelsV2Label} Successful response
		 */
		Drivelabels_labels_updateLabelCopyMode(name: string, requestBody: GoogleAppsDriveLabelsV2UpdateLabelCopyModeRequest): Observable<GoogleAppsDriveLabelsV2Label> {
			return this.http.post<GoogleAppsDriveLabelsV2Label>(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':updateLabelCopyMode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists the LabelLocks on a Label.
		 * Get v2/{parent}/locks
		 * @param {string} parent Required. Label on which Locks are applied. Format: labels/{label}
		 * @param {number} pageSize Maximum number of Locks to return per page. Default: 100. Max: 200.
		 * @param {string} pageToken The token of the page to return.
		 * @return {GoogleAppsDriveLabelsV2ListLabelLocksResponse} Successful response
		 */
		Drivelabels_labels_revisions_locks_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<GoogleAppsDriveLabelsV2ListLabelLocksResponse> {
			return this.http.get<GoogleAppsDriveLabelsV2ListLabelLocksResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locks&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists a Label's permissions.
		 * Get v2/{parent}/permissions
		 * @param {string} parent Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label}
		 * @param {number} pageSize Maximum number of permissions to return per page. Default: 50. Max: 200.
		 * @param {string} pageToken The token of the page to return.
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
		 * @return {GoogleAppsDriveLabelsV2ListLabelPermissionsResponse} Successful response
		 */
		Drivelabels_labels_revisions_permissions_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined, useAdminAccess: boolean | null | undefined): Observable<GoogleAppsDriveLabelsV2ListLabelPermissionsResponse> {
			return this.http.get<GoogleAppsDriveLabelsV2ListLabelPermissionsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/permissions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&useAdminAccess=' + useAdminAccess, {});
		}

		/**
		 * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
		 * Patch v2/{parent}/permissions
		 * @param {string} parent Required. The parent Label resource name.
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
		 * @return {GoogleAppsDriveLabelsV2LabelPermission} Successful response
		 */
		Drivelabels_labels_revisions_updatePermissions(parent: string, useAdminAccess: boolean | null | undefined, requestBody: GoogleAppsDriveLabelsV2LabelPermission): Observable<GoogleAppsDriveLabelsV2LabelPermission> {
			return this.http.patch<GoogleAppsDriveLabelsV2LabelPermission>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/permissions&useAdminAccess=' + useAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
		 * Post v2/{parent}/permissions
		 * @param {string} parent Required. The parent Label resource name on the Label Permission is created. Format: labels/{label}
		 * @param {boolean} useAdminAccess Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access.
		 * @return {GoogleAppsDriveLabelsV2LabelPermission} Successful response
		 */
		Drivelabels_labels_revisions_permissions_create(parent: string, useAdminAccess: boolean | null | undefined, requestBody: GoogleAppsDriveLabelsV2LabelPermission): Observable<GoogleAppsDriveLabelsV2LabelPermission> {
			return this.http.post<GoogleAppsDriveLabelsV2LabelPermission>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/permissions&useAdminAccess=' + useAdminAccess, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
		 * Post v2/{parent}/permissions:batchDelete
		 * @param {string} parent Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
		 * @return {GoogleProtobufEmpty} Successful response
		 */
		Drivelabels_labels_revisions_permissions_batchDelete(parent: string, requestBody: GoogleAppsDriveLabelsV2BatchDeleteLabelPermissionsRequest): Observable<GoogleProtobufEmpty> {
			return this.http.post<GoogleProtobufEmpty>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/permissions:batchDelete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.
		 * Post v2/{parent}/permissions:batchUpdate
		 * @param {string} parent Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field.
		 * @return {GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse} Successful response
		 */
		Drivelabels_labels_revisions_permissions_batchUpdate(parent: string, requestBody: GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsRequest): Observable<GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse> {
			return this.http.post<GoogleAppsDriveLabelsV2BatchUpdateLabelPermissionsResponse>(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/permissions:batchUpdate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

