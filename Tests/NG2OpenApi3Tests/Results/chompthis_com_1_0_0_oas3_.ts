import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists. */
	export interface BrandedFoodObject {

		/** An array containing an object for each individual item returned by your API call. */
		BrandedFoodObjectItems?: Array<BrandedFoodObjectItems>;
	}

	/** Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists. */
	export interface BrandedFoodObjectFormProperties {
	}
	export function CreateBrandedFoodObjectFormGroup() {
		return new FormGroup<BrandedFoodObjectFormProperties>({
		});

	}

	export interface BrandedFoodObjectItems {

		/** An array of ingredients in this item that may cause allergic reactions in people */
		allergens?: Array<string>;

		/** EAN/UPC barcode */
		barcode?: string | null;

		/** The brand name that owns this item */
		brand?: string | null;

		/** An array of brands we have associated with this item. Some items are sold by more than 1 brand. */
		brand_list?: Array<string>;
		categories?: Array<string>;

		/** An array of countries where this item is sold */
		countries?: Array<string>;

		/** An object containing additional information on the countries where this item is found */
		country_details?: BrandedFoodObjectItemsCountry_details;

		/** A description of this item */
		description?: string | null;

		/** An array of ingredient objects that were flagged while grading this item for compatibility with each diet */
		BrandedFoodObjectItemsDiet_flags?: Array<BrandedFoodObjectItemsDiet_flags>;

		/** An object containing this item's compatibility grades for each supported diet */
		diet_labels?: BrandedFoodObjectItemsDiet_labels;

		/** A boolean indicating if we have English ingredients for this item */
		has_english_ingredients?: boolean | null;

		/** An array of this item's ingredients */
		ingredient_list?: Array<string>;

		/** This food item's ingredients from greatest quantity to least */
		ingredients?: string | null;

		/** An array of keywords that can be used to describe this item */
		keywords?: Array<string>;

		/** An array of minerals that this item contains */
		minerals?: Array<string>;

		/** Item name as provided by brand owner or as shown on packaging */
		name?: string | null;

		/** An array containing nutrient informatio objects for this food item */
		BrandedFoodObjectItemsNutrients?: Array<BrandedFoodObjectItemsNutrients>;

		/** An object containing basic packaging information about this item */
		package?: BrandedFoodObjectItemsPackage;

		/** A object containing a collection of photos of this item's packaging */
		packaging_photos?: BrandedFoodObjectItemsPackaging_photos;

		/** An array of ingredients made from palm oil */
		palm_oil_ingredients?: Array<string>;

		/** An object containing serving information for this item */
		serving?: BrandedFoodObjectItemsServing;

		/** An array of trace ingredients that may be found in this item */
		traces?: Array<string>;

		/** An array of vitamins that are found in this item */
		vitamins?: Array<string>;
	}
	export interface BrandedFoodObjectItemsFormProperties {

		/** EAN/UPC barcode */
		barcode: FormControl<string | null | undefined>,

		/** The brand name that owns this item */
		brand: FormControl<string | null | undefined>,

		/** A description of this item */
		description: FormControl<string | null | undefined>,

		/** A boolean indicating if we have English ingredients for this item */
		has_english_ingredients: FormControl<boolean | null | undefined>,

		/** This food item's ingredients from greatest quantity to least */
		ingredients: FormControl<string | null | undefined>,

		/** Item name as provided by brand owner or as shown on packaging */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsFormProperties>({
			barcode: new FormControl<string | null | undefined>(undefined),
			brand: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			has_english_ingredients: new FormControl<boolean | null | undefined>(undefined),
			ingredients: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsCountry_details {

		/**
		 * The number of countries where English is the country's primary language
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		english_speaking?: number | null;

		/**
		 * The number of countries where English is not the country's primary language
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		non_english_speaking?: number | null;
	}
	export interface BrandedFoodObjectItemsCountry_detailsFormProperties {

		/**
		 * The number of countries where English is the country's primary language
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		english_speaking: FormControl<number | null | undefined>,

		/**
		 * The number of countries where English is not the country's primary language
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		non_english_speaking: FormControl<number | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsCountry_detailsFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsCountry_detailsFormProperties>({
			english_speaking: new FormControl<number | null | undefined>(undefined),
			non_english_speaking: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsDiet_flags {

		/** A description of how we graded this ingredient for compatibility with the diet */
		compatibility_description?: string | null;

		/**
		 * A numeric representation of if we believe this ingredient is compatible with the diet. Higher values indicate more compatibility
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibility_level?: number | null;

		/** Name of the diet with which this ingredient may not be compatible */
		diet_label?: string | null;

		/** Ingredient name */
		ingredient?: string | null;

		/** Description of the ingredient */
		ingredient_description?: string | null;

		/** Boolean representing if the ingredient is a known allergen */
		is_allergen?: boolean | null;

		/** A description of if we believe this ingredient is compatible with the diet */
		is_compatible?: string | null;
	}
	export interface BrandedFoodObjectItemsDiet_flagsFormProperties {

		/** A description of how we graded this ingredient for compatibility with the diet */
		compatibility_description: FormControl<string | null | undefined>,

		/**
		 * A numeric representation of if we believe this ingredient is compatible with the diet. Higher values indicate more compatibility
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibility_level: FormControl<number | null | undefined>,

		/** Name of the diet with which this ingredient may not be compatible */
		diet_label: FormControl<string | null | undefined>,

		/** Ingredient name */
		ingredient: FormControl<string | null | undefined>,

		/** Description of the ingredient */
		ingredient_description: FormControl<string | null | undefined>,

		/** Boolean representing if the ingredient is a known allergen */
		is_allergen: FormControl<boolean | null | undefined>,

		/** A description of if we believe this ingredient is compatible with the diet */
		is_compatible: FormControl<string | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsDiet_flagsFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsDiet_flagsFormProperties>({
			compatibility_description: new FormControl<string | null | undefined>(undefined),
			compatibility_level: new FormControl<number | null | undefined>(undefined),
			diet_label: new FormControl<string | null | undefined>(undefined),
			ingredient: new FormControl<string | null | undefined>(undefined),
			ingredient_description: new FormControl<string | null | undefined>(undefined),
			is_allergen: new FormControl<boolean | null | undefined>(undefined),
			is_compatible: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsDiet_labels {

		/** An object containing information on this item's compatibility with Gluten Free diets */
		gluten_free?: BrandedFoodObjectItemsDiet_labelsGluten_free;

		/** An object containing information on this item's compatibility with the Vegan diets */
		vegan?: BrandedFoodObjectItemsDiet_labelsVegan;

		/** An object containing information on this item's compatibility with Vegetarian diets */
		vegetarian?: BrandedFoodObjectItemsDiet_labelsVegetarian;
	}
	export interface BrandedFoodObjectItemsDiet_labelsFormProperties {
	}
	export function CreateBrandedFoodObjectItemsDiet_labelsFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsDiet_labelsFormProperties>({
		});

	}

	export interface BrandedFoodObjectItemsDiet_labelsGluten_free {

		/**
		 * Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibility_level?: number | null;

		/**
		 * Boolean that indicates if we are confident in how this item is graded for this diet
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		confidence?: number | null;

		/** Description of our confidence that this item was graded correctly */
		confidence_description?: string | null;

		/** Boolean describing if this item is compatible with this diet */
		is_compatible?: boolean | null;

		/** Diet name */
		name?: string | null;
	}
	export interface BrandedFoodObjectItemsDiet_labelsGluten_freeFormProperties {

		/**
		 * Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibility_level: FormControl<number | null | undefined>,

		/**
		 * Boolean that indicates if we are confident in how this item is graded for this diet
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		confidence: FormControl<number | null | undefined>,

		/** Description of our confidence that this item was graded correctly */
		confidence_description: FormControl<string | null | undefined>,

		/** Boolean describing if this item is compatible with this diet */
		is_compatible: FormControl<boolean | null | undefined>,

		/** Diet name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsDiet_labelsGluten_freeFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsDiet_labelsGluten_freeFormProperties>({
			compatibility_level: new FormControl<number | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			confidence_description: new FormControl<string | null | undefined>(undefined),
			is_compatible: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsDiet_labelsVegan {

		/**
		 * Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibility_level?: number | null;

		/**
		 * Boolean that indicates if we are confident in how this item is graded for this diet
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		confidence?: number | null;

		/** Description of our confidence that this item was graded correctly */
		confidence_description?: string | null;

		/** Boolean describing if this item is compatible with this diet */
		is_compatible?: boolean | null;

		/** Diet name */
		name?: string | null;
	}
	export interface BrandedFoodObjectItemsDiet_labelsVeganFormProperties {

		/**
		 * Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibility_level: FormControl<number | null | undefined>,

		/**
		 * Boolean that indicates if we are confident in how this item is graded for this diet
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		confidence: FormControl<number | null | undefined>,

		/** Description of our confidence that this item was graded correctly */
		confidence_description: FormControl<string | null | undefined>,

		/** Boolean describing if this item is compatible with this diet */
		is_compatible: FormControl<boolean | null | undefined>,

		/** Diet name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsDiet_labelsVeganFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsDiet_labelsVeganFormProperties>({
			compatibility_level: new FormControl<number | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			confidence_description: new FormControl<string | null | undefined>(undefined),
			is_compatible: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsDiet_labelsVegetarian {

		/**
		 * Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibility_level?: number | null;

		/**
		 * Boolean that indicates if we are confident in how this item is graded for this diet
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		confidence?: number | null;

		/** Description of our confidence that this item was graded correctly */
		confidence_description?: string | null;

		/** Boolean describing if this item is compatible with this diet */
		is_compatible?: boolean | null;

		/** Diet name */
		name?: string | null;
	}
	export interface BrandedFoodObjectItemsDiet_labelsVegetarianFormProperties {

		/**
		 * Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		compatibility_level: FormControl<number | null | undefined>,

		/**
		 * Boolean that indicates if we are confident in how this item is graded for this diet
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		confidence: FormControl<number | null | undefined>,

		/** Description of our confidence that this item was graded correctly */
		confidence_description: FormControl<string | null | undefined>,

		/** Boolean describing if this item is compatible with this diet */
		is_compatible: FormControl<boolean | null | undefined>,

		/** Diet name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsDiet_labelsVegetarianFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsDiet_labelsVegetarianFormProperties>({
			compatibility_level: new FormControl<number | null | undefined>(undefined),
			confidence: new FormControl<number | null | undefined>(undefined),
			confidence_description: new FormControl<string | null | undefined>(undefined),
			is_compatible: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsNutrients {

		/**
		 * Number of observations on which the value is based
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		data_points?: number | null;

		/** Description of the nutrient source */
		description?: string | null;

		/** The unit used for the measure of this nutrient */
		measurement_unit?: string | null;

		/** Nutrient name */
		name?: string | null;

		/**
		 * Amount of the nutrient per 100g of food
		 * Type: double
		 */
		per_100g?: number | null;

		/**
		 * Nutrient rank
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rank?: number | null;
	}
	export interface BrandedFoodObjectItemsNutrientsFormProperties {

		/**
		 * Number of observations on which the value is based
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		data_points: FormControl<number | null | undefined>,

		/** Description of the nutrient source */
		description: FormControl<string | null | undefined>,

		/** The unit used for the measure of this nutrient */
		measurement_unit: FormControl<string | null | undefined>,

		/** Nutrient name */
		name: FormControl<string | null | undefined>,

		/**
		 * Amount of the nutrient per 100g of food
		 * Type: double
		 */
		per_100g: FormControl<number | null | undefined>,

		/**
		 * Nutrient rank
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rank: FormControl<number | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsNutrientsFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsNutrientsFormProperties>({
			data_points: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			measurement_unit: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			per_100g: new FormControl<number | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsPackage {

		/**
		 * Package quantity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity?: number | null;

		/** Package size */
		size?: string | null;
	}
	export interface BrandedFoodObjectItemsPackageFormProperties {

		/**
		 * Package quantity
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		quantity: FormControl<number | null | undefined>,

		/** Package size */
		size: FormControl<string | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsPackageFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsPackageFormProperties>({
			quantity: new FormControl<number | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsPackaging_photos {

		/** An object containing photos of the front of this item's packaging */
		front?: BrandedFoodObjectItemsPackaging_photosFront;

		/** An object containing photos of the ingredients on this item's packaging */
		ingredients?: BrandedFoodObjectItemsPackaging_photosIngredients;

		/** An object containing photos of this item's nutrition label */
		nutrition?: BrandedFoodObjectItemsPackaging_photosNutrition;
	}
	export interface BrandedFoodObjectItemsPackaging_photosFormProperties {
	}
	export function CreateBrandedFoodObjectItemsPackaging_photosFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsPackaging_photosFormProperties>({
		});

	}

	export interface BrandedFoodObjectItemsPackaging_photosFront {

		/** Full-sized photo of the front of this item's packaging */
		display?: string | null;

		/** Small photo of the front of this item's packaging */
		small?: string | null;

		/** Thumbnail photo of the front of this item's packaging */
		thumb?: string | null;
	}
	export interface BrandedFoodObjectItemsPackaging_photosFrontFormProperties {

		/** Full-sized photo of the front of this item's packaging */
		display: FormControl<string | null | undefined>,

		/** Small photo of the front of this item's packaging */
		small: FormControl<string | null | undefined>,

		/** Thumbnail photo of the front of this item's packaging */
		thumb: FormControl<string | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsPackaging_photosFrontFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsPackaging_photosFrontFormProperties>({
			display: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
			thumb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsPackaging_photosIngredients {

		/** Full-sized photo of the ingredients on this item's packaging */
		display?: string | null;

		/** Small photo of the ingredients on this item's packaging */
		small?: string | null;

		/** Thumbnail photo of the ingredients on this item's packaging */
		thumb?: string | null;
	}
	export interface BrandedFoodObjectItemsPackaging_photosIngredientsFormProperties {

		/** Full-sized photo of the ingredients on this item's packaging */
		display: FormControl<string | null | undefined>,

		/** Small photo of the ingredients on this item's packaging */
		small: FormControl<string | null | undefined>,

		/** Thumbnail photo of the ingredients on this item's packaging */
		thumb: FormControl<string | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsPackaging_photosIngredientsFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsPackaging_photosIngredientsFormProperties>({
			display: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
			thumb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsPackaging_photosNutrition {

		/** Full-sized photo of this item's nutrition label */
		display?: string | null;

		/** Small photo of this item's nutrition label */
		small?: string | null;

		/** Thumbnail photo of this item's nutrition label */
		thumb?: string | null;
	}
	export interface BrandedFoodObjectItemsPackaging_photosNutritionFormProperties {

		/** Full-sized photo of this item's nutrition label */
		display: FormControl<string | null | undefined>,

		/** Small photo of this item's nutrition label */
		small: FormControl<string | null | undefined>,

		/** Thumbnail photo of this item's nutrition label */
		thumb: FormControl<string | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsPackaging_photosNutritionFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsPackaging_photosNutritionFormProperties>({
			display: new FormControl<string | null | undefined>(undefined),
			small: new FormControl<string | null | undefined>(undefined),
			thumb: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BrandedFoodObjectItemsServing {

		/** Measurement unit for each serving (e.g. if measure is 3 tsp, the unit is tsp) */
		measurement_unit?: string | null;

		/** Serving size */
		size?: string | null;

		/** Serving size description */
		size_fulltext?: string | null;
	}
	export interface BrandedFoodObjectItemsServingFormProperties {

		/** Measurement unit for each serving (e.g. if measure is 3 tsp, the unit is tsp) */
		measurement_unit: FormControl<string | null | undefined>,

		/** Serving size */
		size: FormControl<string | null | undefined>,

		/** Serving size description */
		size_fulltext: FormControl<string | null | undefined>,
	}
	export function CreateBrandedFoodObjectItemsServingFormGroup() {
		return new FormGroup<BrandedFoodObjectItemsServingFormProperties>({
			measurement_unit: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			size_fulltext: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists. */
	export interface IngredientObject {

		/** An array containing an object for each individual item returned by your API call. */
		IngredientObjectItems?: Array<IngredientObjectItems>;
	}

	/** Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists. */
	export interface IngredientObjectFormProperties {
	}
	export function CreateIngredientObjectFormGroup() {
		return new FormGroup<IngredientObjectFormProperties>({
		});

	}

	export interface IngredientObjectItems {

		/** An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food. */
		calorie_conversion_factor?: IngredientObjectItemsCalorie_conversion_factor;
		categories?: Array<string>;

		/** Common name associated with this item. These generally clarify what the item is (e.g. when the brand name is "BRAND's Spicy Enchilada" the common name may be "Chicken enchilada") */
		common_name?: string | null;

		/** An array of objects containing the constituent parts of a food (e.g. bone is a component of meat) */
		IngredientObjectItemsComponents?: Array<IngredientObjectItemsComponents>;

		/** Comments on any unusual aspects of this item. Examples might include unusual aspects of the food overall */
		footnote?: string | null;

		/** Item name as provided by brand owner or as shown on packaging */
		name?: string | null;

		/** An array containing nutrient informatio objects for this food item */
		IngredientObjectItemsNutrients?: Array<IngredientObjectItemsNutrients>;

		/** An array of objects containing information on discrete amounts of a food found in this item */
		IngredientObjectItemsPortions?: Array<IngredientObjectItemsPortions>;

		/**
		 * The multiplication factor used to calculate protein from nitrogen
		 * Type: double
		 */
		protein_conversion_factor?: number | null;

		/** A value that represents how similar the name of this food item is to the original search term. The lower the value the closer this item's name is to the original search term. */
		score?: string | null;

		/** The original search term that found this food item */
		search_term?: string | null;
	}
	export interface IngredientObjectItemsFormProperties {

		/** Common name associated with this item. These generally clarify what the item is (e.g. when the brand name is "BRAND's Spicy Enchilada" the common name may be "Chicken enchilada") */
		common_name: FormControl<string | null | undefined>,

		/** Comments on any unusual aspects of this item. Examples might include unusual aspects of the food overall */
		footnote: FormControl<string | null | undefined>,

		/** Item name as provided by brand owner or as shown on packaging */
		name: FormControl<string | null | undefined>,

		/**
		 * The multiplication factor used to calculate protein from nitrogen
		 * Type: double
		 */
		protein_conversion_factor: FormControl<number | null | undefined>,

		/** A value that represents how similar the name of this food item is to the original search term. The lower the value the closer this item's name is to the original search term. */
		score: FormControl<string | null | undefined>,

		/** The original search term that found this food item */
		search_term: FormControl<string | null | undefined>,
	}
	export function CreateIngredientObjectItemsFormGroup() {
		return new FormGroup<IngredientObjectItemsFormProperties>({
			common_name: new FormControl<string | null | undefined>(undefined),
			footnote: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protein_conversion_factor: new FormControl<number | null | undefined>(undefined),
			score: new FormControl<string | null | undefined>(undefined),
			search_term: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IngredientObjectItemsCalorie_conversion_factor {

		/**
		 * The multiplication factor for carbohydrates
		 * Type: double
		 */
		carbohydrate_value?: number | null;

		/**
		 * The multiplication factor for fat
		 * Type: double
		 */
		fat_value?: number | null;

		/**
		 * The multiplication factor for protein
		 * Type: double
		 */
		protein_value?: number | null;
	}
	export interface IngredientObjectItemsCalorie_conversion_factorFormProperties {

		/**
		 * The multiplication factor for carbohydrates
		 * Type: double
		 */
		carbohydrate_value: FormControl<number | null | undefined>,

		/**
		 * The multiplication factor for fat
		 * Type: double
		 */
		fat_value: FormControl<number | null | undefined>,

		/**
		 * The multiplication factor for protein
		 * Type: double
		 */
		protein_value: FormControl<number | null | undefined>,
	}
	export function CreateIngredientObjectItemsCalorie_conversion_factorFormGroup() {
		return new FormGroup<IngredientObjectItemsCalorie_conversion_factorFormProperties>({
			carbohydrate_value: new FormControl<number | null | undefined>(undefined),
			fat_value: new FormControl<number | null | undefined>(undefined),
			protein_value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IngredientObjectItemsComponents {

		/**
		 * The number of obersvations on which the measure is based
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		data_points?: number | null;

		/**
		 * The weight of the component in grams
		 * Type: double
		 */
		gram_weight?: number | null;

		/** Whether the component is refuse, i.e. not edible */
		is_refuse?: boolean | null;

		/** The kind of component, e.g. bone */
		name?: string | null;

		/**
		 * The weight of the component as a percentage of the total weight of the food
		 * Type: double
		 */
		pct_weight?: number | null;
	}
	export interface IngredientObjectItemsComponentsFormProperties {

		/**
		 * The number of obersvations on which the measure is based
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		data_points: FormControl<number | null | undefined>,

		/**
		 * The weight of the component in grams
		 * Type: double
		 */
		gram_weight: FormControl<number | null | undefined>,

		/** Whether the component is refuse, i.e. not edible */
		is_refuse: FormControl<boolean | null | undefined>,

		/** The kind of component, e.g. bone */
		name: FormControl<string | null | undefined>,

		/**
		 * The weight of the component as a percentage of the total weight of the food
		 * Type: double
		 */
		pct_weight: FormControl<number | null | undefined>,
	}
	export function CreateIngredientObjectItemsComponentsFormGroup() {
		return new FormGroup<IngredientObjectItemsComponentsFormProperties>({
			data_points: new FormControl<number | null | undefined>(undefined),
			gram_weight: new FormControl<number | null | undefined>(undefined),
			is_refuse: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pct_weight: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IngredientObjectItemsNutrients {

		/**
		 * Number of observations on which the value is based
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		data_points?: number | null;

		/** Description of the nutrient source */
		description?: string | null;

		/** Comments on any unusual aspect of the food nutrient. Examples might include why a nutrient value is different than typically expected. */
		footnote?: string | null;

		/**
		 * Maximum nutrient value
		 * Type: double
		 */
		max?: number | null;

		/** The unit used for the measure of this nutrient */
		measurement_unit?: string | null;

		/**
		 * Median nutrient value
		 * Type: double
		 */
		median?: number | null;

		/**
		 * Minimum nutrient value
		 * Type: double
		 */
		min?: number | null;

		/** Nutrient name */
		name?: string | null;

		/**
		 * Amount of the nutrient per 100g of food
		 * Type: double
		 */
		per_100g?: number | null;

		/**
		 * Nutrient rank
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rank?: number | null;
	}
	export interface IngredientObjectItemsNutrientsFormProperties {

		/**
		 * Number of observations on which the value is based
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		data_points: FormControl<number | null | undefined>,

		/** Description of the nutrient source */
		description: FormControl<string | null | undefined>,

		/** Comments on any unusual aspect of the food nutrient. Examples might include why a nutrient value is different than typically expected. */
		footnote: FormControl<string | null | undefined>,

		/**
		 * Maximum nutrient value
		 * Type: double
		 */
		max: FormControl<number | null | undefined>,

		/** The unit used for the measure of this nutrient */
		measurement_unit: FormControl<string | null | undefined>,

		/**
		 * Median nutrient value
		 * Type: double
		 */
		median: FormControl<number | null | undefined>,

		/**
		 * Minimum nutrient value
		 * Type: double
		 */
		min: FormControl<number | null | undefined>,

		/** Nutrient name */
		name: FormControl<string | null | undefined>,

		/**
		 * Amount of the nutrient per 100g of food
		 * Type: double
		 */
		per_100g: FormControl<number | null | undefined>,

		/**
		 * Nutrient rank
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rank: FormControl<number | null | undefined>,
	}
	export function CreateIngredientObjectItemsNutrientsFormGroup() {
		return new FormGroup<IngredientObjectItemsNutrientsFormProperties>({
			data_points: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			footnote: new FormControl<string | null | undefined>(undefined),
			max: new FormControl<number | null | undefined>(undefined),
			measurement_unit: new FormControl<string | null | undefined>(undefined),
			median: new FormControl<number | null | undefined>(undefined),
			min: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			per_100g: new FormControl<number | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface IngredientObjectItemsPortions {

		/**
		 * The number of observations on which the measure is based
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		data_points?: number | null;

		/** Comments that provide more specificity on the measure. For example, for a pizza measure the dissemination text might be 1 slice is 1/8th of a 14 inch pizza. */
		description?: string | null;

		/** Comments on any unusual aspects of the measure. Examples might includes caveats on the usage of a measure, or reasons why a measure gram weight is an unexpected value. */
		footnote?: string | null;

		/**
		 * The weight of the measure in grams
		 * Type: double
		 */
		gram_weight?: number | null;

		/** The unit used for measure (e.g. if mesure is 3 tsp, the unit is tsp) */
		measurement_unit?: string | null;

		/** Qualifier of the measure (e.g. related to food shape or form) (e.g. melted, crushed, diced) */
		modifier?: string | null;
	}
	export interface IngredientObjectItemsPortionsFormProperties {

		/**
		 * The number of observations on which the measure is based
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		data_points: FormControl<number | null | undefined>,

		/** Comments that provide more specificity on the measure. For example, for a pizza measure the dissemination text might be 1 slice is 1/8th of a 14 inch pizza. */
		description: FormControl<string | null | undefined>,

		/** Comments on any unusual aspects of the measure. Examples might includes caveats on the usage of a measure, or reasons why a measure gram weight is an unexpected value. */
		footnote: FormControl<string | null | undefined>,

		/**
		 * The weight of the measure in grams
		 * Type: double
		 */
		gram_weight: FormControl<number | null | undefined>,

		/** The unit used for measure (e.g. if mesure is 3 tsp, the unit is tsp) */
		measurement_unit: FormControl<string | null | undefined>,

		/** Qualifier of the measure (e.g. related to food shape or form) (e.g. melted, crushed, diced) */
		modifier: FormControl<string | null | undefined>,
	}
	export function CreateIngredientObjectItemsPortionsFormGroup() {
		return new FormGroup<IngredientObjectItemsPortionsFormProperties>({
			data_points: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			footnote: new FormControl<string | null | undefined>(undefined),
			gram_weight: new FormControl<number | null | undefined>(undefined),
			measurement_unit: new FormControl<string | null | undefined>(undefined),
			modifier: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get a branded food item using a barcode
		 * ## Get data for a branded food using the food's UPC/EAN barcode.
		 * **Example**
		 * > ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```
		 * **Tips**
		 * * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks.
		 * Get food/branded/barcode.php
		 * @param {string} code #### UPC/EAN barcode
		 * **Example**
		 * > ```&code=0842234000988```
		 * @return {BrandedFoodObject} **Valid** - Will return an object containing any matching foods. 
		 */
		FoodBrandedBarcode_phpGetByCode(code: string, headersHandler?: () => HttpHeaders): Observable<BrandedFoodObject> {
			return this.http.get<BrandedFoodObject>(this.baseUri + 'food/branded/barcode.php?code=' + (code == null ? '' : encodeURIComponent(code)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a branded food item by name
		 * ## Search for branded food items by name.
		 * **Example**
		 * > ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```
		 * **Tips**
		 * * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.
		 * > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
		 * Get food/branded/name.php
		 * @param {string} name #### Search for branded food items using a general food name keyword. This does not have to exactly match the "official" name for the food.
		 * **Example**
		 * > ```&name=Starburst```
		 * @param {FoodBrandedName_phpGetByNameAndLimitAndPageLimit} limit #### Set maximum number of records you want the API to return. The default value is "**10**."
		 * **Example**
		 * > ```&limit=10```
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is "**1**."
		 * **Example**
		 * > ```&page=1```
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BrandedFoodObject} **Valid** - Will return an object containing any matching foods. 
		 */
		FoodBrandedName_phpGetByNameAndLimitAndPage(name: string, limit: FoodBrandedName_phpGetByNameAndLimitAndPageLimit | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BrandedFoodObject> {
			return this.http.get<BrandedFoodObject>(this.baseUri + 'food/branded/name.php?name=' + (name == null ? '' : encodeURIComponent(name)) + '&limit=' + limit + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get data for branded food items using various search parameters
		 * ## Search for branded food items using various parameters.
		 * **Example**
		 * > ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```
		 * **Tips**
		 * * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.
		 * > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
		 * Get food/branded/search.php
		 * @param {string} allergen #### Filter the search to only include branded foods that contain a specific allergen.
		 * **Example**
		 * > ```&allergen=Peanuts```
		 * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
		 * @param {string} brand #### Filter the search to only include branded foods that are owned by a specific brand.
		 * **Example**
		 * > ```&brand=Starbucks```
		 * @param {string} category #### Filter the search to only include branded foods from a specific category.
		 * **Example**
		 * > ```&category=Plant Based Foods```
		 * @param {string} country #### Filter the search to only include branded foods that are sold in a specific country.
		 * **Example**
		 * > ```&country=United States```
		 * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
		 * @param {FoodBrandedSearch_phpGetByAllergenAndBrandAndCategoryAndCountryAndDietAndIngredientAndKeywordAndMineralAndNutrientAndPalm_oilAndTraceAndVitaminAndLimitAndPageDiet} diet #### Filter the search to only include branded foods that are considered compatible with a specific diet.
		 * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
		 * @param {string} ingredient #### Filter the search to only include branded foods that contain a specific ingredient.
		 * **Example**
		 * > ```&ingredient=Salt```
		 * @param {string} keyword #### Filter the search to only include branded foods that are associated with a specific keyword.
		 * **Example**
		 * > ```&keyword=Organic```
		 * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
		 * @param {string} mineral #### Filter the search to only include branded foods that contain a specific mineral.
		 * **Example**
		 * > ```&mineral=Potassium```
		 * @param {string} nutrient #### Filter the search to only include branded foods that contain a specific nutrient.
		 * **Example**
		 * > ```&nutrient=Caffeine```
		 * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
		 * @param {string} palm_oil #### Filter the search to only include branded foods that contain a specific ingredient made using palm oil.
		 * **Example**
		 * > ```&palm_oil=E160a Beta Carotene```
		 * @param {string} trace ### Filter the search to only include branded foods that contain a specific trace ingredient.
		 * **Example**
		 * > ```&trace=Tree Nuts```
		 * **Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.
		 * @param {string} vitamin #### Filter the search to only include branded foods that contain a specific vitamin.
		 * **Example**
		 * > ```&vitamin=Biotin```
		 * @param {FoodBrandedSearch_phpGetByAllergenAndBrandAndCategoryAndCountryAndDietAndIngredientAndKeywordAndMineralAndNutrientAndPalm_oilAndTraceAndVitaminAndLimitAndPageLimit} limit #### Set maximum number of records you want the API to return. The default value is "**10**."
		 * **Example**
		 * > ```&limit=10```
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} page #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is "**1**."
		 * **Example**
		 * > ```&page=1```
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {BrandedFoodObject} **Valid** - Will return an object containing any matching foods. 
		 */
		FoodBrandedSearch_phpGetByAllergenAndBrandAndCategoryAndCountryAndDietAndIngredientAndKeywordAndMineralAndNutrientAndPalm_oilAndTraceAndVitaminAndLimitAndPage(allergen: string | null | undefined, brand: string | null | undefined, category: string | null | undefined, country: string | null | undefined, diet: FoodBrandedSearch_phpGetByAllergenAndBrandAndCategoryAndCountryAndDietAndIngredientAndKeywordAndMineralAndNutrientAndPalm_oilAndTraceAndVitaminAndLimitAndPageDiet | null | undefined, ingredient: string | null | undefined, keyword: string | null | undefined, mineral: string | null | undefined, nutrient: string | null | undefined, palm_oil: string | null | undefined, trace: string | null | undefined, vitamin: string | null | undefined, limit: FoodBrandedSearch_phpGetByAllergenAndBrandAndCategoryAndCountryAndDietAndIngredientAndKeywordAndMineralAndNutrientAndPalm_oilAndTraceAndVitaminAndLimitAndPageLimit | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BrandedFoodObject> {
			return this.http.get<BrandedFoodObject>(this.baseUri + 'food/branded/search.php?allergen=' + (allergen == null ? '' : encodeURIComponent(allergen)) + '&brand=' + (brand == null ? '' : encodeURIComponent(brand)) + '&category=' + (category == null ? '' : encodeURIComponent(category)) + '&country=' + (country == null ? '' : encodeURIComponent(country)) + '&diet=' + diet + '&ingredient=' + (ingredient == null ? '' : encodeURIComponent(ingredient)) + '&keyword=' + (keyword == null ? '' : encodeURIComponent(keyword)) + '&mineral=' + (mineral == null ? '' : encodeURIComponent(mineral)) + '&nutrient=' + (nutrient == null ? '' : encodeURIComponent(nutrient)) + '&palm_oil=' + (palm_oil == null ? '' : encodeURIComponent(palm_oil)) + '&trace=' + (trace == null ? '' : encodeURIComponent(trace)) + '&vitamin=' + (vitamin == null ? '' : encodeURIComponent(vitamin)) + '&limit=' + limit + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get raw/generic food ingredient item(s)
		 * ## Get data for a specific ingredient or a specific set of ingredients.
		 * **Example #1: Single Ingredient**
		 * > ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli```
		 * **Example #2: Set of Ingredients**
		 * > ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli,mashed potatoes,chicken drumstick```
		 * **Tips**
		 * * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.
		 * > This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.
		 * Get food/ingredient/search.php
		 * @param {string} find Search our database for a single ingredient or a specific set of ingredients.
		 * **Example #1: Single Ingredient**
		 * > ```&find=raw broccoli```
		 * **Example #2: Set of Ingredients**
		 * > ```&find=raw broccoli,buttermilk waffle,mashed potatoes```
		 * **Important Notes** 
		 *   * Comma-separated lists cannot contain more than **10 ingredients**. You must perform additional API calls if you are looking up more than 10 ingredients.
		 * @param {FoodIngredientSearch_phpGetByFindAndLimitLimit} limit #### Set maximum number of records you want the API to return, per search term. The default value is "**1**."
		 * **Example**
		 * > ```&limit=3```
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {IngredientObject} **Valid** - Will return an object containing any matching ingredient foods. 
		 */
		FoodIngredientSearch_phpGetByFindAndLimit(find: string, limit: FoodIngredientSearch_phpGetByFindAndLimitLimit | null | undefined, headersHandler?: () => HttpHeaders): Observable<IngredientObject> {
			return this.http.get<IngredientObject>(this.baseUri + 'food/ingredient/search.php?find=' + (find == null ? '' : encodeURIComponent(find)) + '&limit=' + limit, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum FoodBrandedName_phpGetByNameAndLimitAndPageLimit { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _6 = 5, _7 = 6, _8 = 7, _9 = 8, _10 = 9 }

	export enum FoodBrandedSearch_phpGetByAllergenAndBrandAndCategoryAndCountryAndDietAndIngredientAndKeywordAndMineralAndNutrientAndPalm_oilAndTraceAndVitaminAndLimitAndPageDiet { Vegan = 'Vegan', Vegetarian = 'Vegetarian', 'Gluten Free' = 'Gluten Free' }

	export enum FoodBrandedSearch_phpGetByAllergenAndBrandAndCategoryAndCountryAndDietAndIngredientAndKeywordAndMineralAndNutrientAndPalm_oilAndTraceAndVitaminAndLimitAndPageLimit { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _6 = 5, _7 = 6, _8 = 7, _9 = 8, _10 = 9 }

	export enum FoodIngredientSearch_phpGetByFindAndLimitLimit { _1 = 0, _2 = 1, _3 = 2 }

}

