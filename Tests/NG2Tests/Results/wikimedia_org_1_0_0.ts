import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Absolute_bytes_difference {
		Absolute_bytes_differenceItems?: Array<Absolute_bytes_differenceItems>;
	}
	export interface Absolute_bytes_differenceFormProperties {
	}
	export function CreateAbsolute_bytes_differenceFormGroup() {
		return new FormGroup<Absolute_bytes_differenceFormProperties>({
		});

	}

	export interface Absolute_bytes_differenceItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Absolute_bytes_differenceItemsResults?: Array<Absolute_bytes_differenceItemsResults>;
	}
	export interface Absolute_bytes_differenceItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateAbsolute_bytes_differenceItemsFormGroup() {
		return new FormGroup<Absolute_bytes_differenceItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Absolute_bytes_differenceItemsResults {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		abs_bytes_diff?: string | null;
		timestamp?: string | null;
	}
	export interface Absolute_bytes_differenceItemsResultsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		abs_bytes_diff: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateAbsolute_bytes_differenceItemsResultsFormGroup() {
		return new FormGroup<Absolute_bytes_differenceItemsResultsFormProperties>({
			abs_bytes_diff: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Absolute_bytes_difference_per_editor {
		Absolute_bytes_difference_per_editorItems?: Array<Absolute_bytes_difference_per_editorItems>;
	}
	export interface Absolute_bytes_difference_per_editorFormProperties {
	}
	export function CreateAbsolute_bytes_difference_per_editorFormGroup() {
		return new FormGroup<Absolute_bytes_difference_per_editorFormProperties>({
		});

	}

	export interface Absolute_bytes_difference_per_editorItems {
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Absolute_bytes_difference_per_editorItemsResults?: Array<Absolute_bytes_difference_per_editorItemsResults>;
		'user-text'?: string | null;
	}
	export interface Absolute_bytes_difference_per_editorItemsFormProperties {
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		'user-text': FormControl<string | null | undefined>,
	}
	export function CreateAbsolute_bytes_difference_per_editorItemsFormGroup() {
		return new FormGroup<Absolute_bytes_difference_per_editorItemsFormProperties>({
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			'user-text': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Absolute_bytes_difference_per_editorItemsResults {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		abs_bytes_diff?: string | null;
		timestamp?: string | null;
	}
	export interface Absolute_bytes_difference_per_editorItemsResultsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		abs_bytes_diff: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateAbsolute_bytes_difference_per_editorItemsResultsFormGroup() {
		return new FormGroup<Absolute_bytes_difference_per_editorItemsResultsFormProperties>({
			abs_bytes_diff: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Absolute_bytes_difference_per_page {
		Absolute_bytes_difference_per_pageItems?: Array<Absolute_bytes_difference_per_pageItems>;
	}
	export interface Absolute_bytes_difference_per_pageFormProperties {
	}
	export function CreateAbsolute_bytes_difference_per_pageFormGroup() {
		return new FormGroup<Absolute_bytes_difference_per_pageFormProperties>({
		});

	}

	export interface Absolute_bytes_difference_per_pageItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-title'?: string | null;
		project?: string | null;
		Absolute_bytes_difference_per_pageItemsResults?: Array<Absolute_bytes_difference_per_pageItemsResults>;
	}
	export interface Absolute_bytes_difference_per_pageItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-title': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateAbsolute_bytes_difference_per_pageItemsFormGroup() {
		return new FormGroup<Absolute_bytes_difference_per_pageItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-title': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Absolute_bytes_difference_per_pageItemsResults {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		abs_bytes_diff?: string | null;
		timestamp?: string | null;
	}
	export interface Absolute_bytes_difference_per_pageItemsResultsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		abs_bytes_diff: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateAbsolute_bytes_difference_per_pageItemsResultsFormGroup() {
		return new FormGroup<Absolute_bytes_difference_per_pageItemsResultsFormProperties>({
			abs_bytes_diff: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Availability {

		/**
		 * domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project
		 * Required
		 */
		in_the_news: Array<string>;

		/**
		 * domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project
		 * Required
		 */
		most_read: Array<string>;

		/**
		 * domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project
		 * Required
		 */
		on_this_day: Array<string>;

		/**
		 * domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project
		 * Required
		 */
		picture_of_the_day: Array<string>;

		/**
		 * domains for wikis with this feature enabled, or [ '*.<project>.org' ] for all wikis in a project
		 * Required
		 */
		todays_featured_article: Array<string>;
	}
	export interface AvailabilityFormProperties {
	}
	export function CreateAvailabilityFormGroup() {
		return new FormGroup<AvailabilityFormProperties>({
		});

	}

	export interface By_country {
		By_countryItems?: Array<By_countryItems>;
	}
	export interface By_countryFormProperties {
	}
	export function CreateBy_countryFormGroup() {
		return new FormGroup<By_countryFormProperties>({
		});

	}

	export interface By_countryItems {
		access?: string | null;
		By_countryItemsCountries?: Array<By_countryItemsCountries>;
		month?: string | null;
		project?: string | null;
		year?: string | null;
	}
	export interface By_countryItemsFormProperties {
		access: FormControl<string | null | undefined>,
		month: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		year: FormControl<string | null | undefined>,
	}
	export function CreateBy_countryItemsFormGroup() {
		return new FormGroup<By_countryItemsFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			month: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface By_countryItemsCountries {
		country?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		views?: string | null;
	}
	export interface By_countryItemsCountriesFormProperties {
		country: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		views: FormControl<string | null | undefined>,
	}
	export function CreateBy_countryItemsCountriesFormGroup() {
		return new FormGroup<By_countryItemsCountriesFormProperties>({
			country: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			views: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cx_dict {

		/** the original word to look up */
		source?: string | null;

		/** the translations found */
		Cx_dictTranslations?: Array<Cx_dictTranslations>;
	}
	export interface Cx_dictFormProperties {

		/** the original word to look up */
		source: FormControl<string | null | undefined>,
	}
	export function CreateCx_dictFormGroup() {
		return new FormGroup<Cx_dictFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cx_dictTranslations {

		/** extra information about the phrase */
		info?: string | null;

		/** the translated phrase */
		phrase?: string | null;

		/** the source dictionary used for the translation */
		sources?: string | null;
	}
	export interface Cx_dictTranslationsFormProperties {

		/** extra information about the phrase */
		info: FormControl<string | null | undefined>,

		/** the translated phrase */
		phrase: FormControl<string | null | undefined>,

		/** the source dictionary used for the translation */
		sources: FormControl<string | null | undefined>,
	}
	export function CreateCx_dictTranslationsFormGroup() {
		return new FormGroup<Cx_dictTranslationsFormProperties>({
			info: new FormControl<string | null | undefined>(undefined),
			phrase: new FormControl<string | null | undefined>(undefined),
			sources: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Cx_languagepairs {

		/** the list of available source languages */
		source?: Array<string>;

		/** the list of available destination languages */
		target?: Array<string>;
	}
	export interface Cx_languagepairsFormProperties {
	}
	export function CreateCx_languagepairsFormGroup() {
		return new FormGroup<Cx_languagepairsFormProperties>({
		});

	}

	export interface Cx_list_pairs_for_tool {
	}
	export interface Cx_list_pairs_for_toolFormProperties {
	}
	export function CreateCx_list_pairs_for_toolFormGroup() {
		return new FormGroup<Cx_list_pairs_for_toolFormProperties>({
		});

	}

	export interface Cx_list_tools {

		/** the list of tools available for the given language pair */
		tools?: Array<string>;
	}
	export interface Cx_list_toolsFormProperties {
	}
	export function CreateCx_list_toolsFormGroup() {
		return new FormGroup<Cx_list_toolsFormProperties>({
		});

	}

	export interface Cx_mt {

		/** the translated content */
		contents?: string | null;
	}
	export interface Cx_mtFormProperties {

		/** the translated content */
		contents: FormControl<string | null | undefined>,
	}
	export function CreateCx_mtFormGroup() {
		return new FormGroup<Cx_mtFormProperties>({
			contents: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Edited_pages {
		Edited_pagesItems?: Array<Edited_pagesItems>;
	}
	export interface Edited_pagesFormProperties {
	}
	export function CreateEdited_pagesFormGroup() {
		return new FormGroup<Edited_pagesFormProperties>({
		});

	}

	export interface Edited_pagesItems {
		'activity-level'?: string | null;
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Edited_pagesItemsResults?: Array<Edited_pagesItemsResults>;
	}
	export interface Edited_pagesItemsFormProperties {
		'activity-level': FormControl<string | null | undefined>,
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateEdited_pagesItemsFormGroup() {
		return new FormGroup<Edited_pagesItemsFormProperties>({
			'activity-level': new FormControl<string | null | undefined>(undefined),
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Edited_pagesItemsResults {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		edited_pages?: number | null;
		timestamp?: string | null;
	}
	export interface Edited_pagesItemsResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		edited_pages: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEdited_pagesItemsResultsFormGroup() {
		return new FormGroup<Edited_pagesItemsResultsFormProperties>({
			edited_pages: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Editors {
		EditorsItems?: Array<EditorsItems>;
	}
	export interface EditorsFormProperties {
	}
	export function CreateEditorsFormGroup() {
		return new FormGroup<EditorsFormProperties>({
		});

	}

	export interface EditorsItems {
		'activity-level'?: string | null;
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		EditorsItemsResults?: Array<EditorsItemsResults>;
	}
	export interface EditorsItemsFormProperties {
		'activity-level': FormControl<string | null | undefined>,
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateEditorsItemsFormGroup() {
		return new FormGroup<EditorsItemsFormProperties>({
			'activity-level': new FormControl<string | null | undefined>(undefined),
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EditorsItemsResults {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		editors?: number | null;
		timestamp?: string | null;
	}
	export interface EditorsItemsResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		editors: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEditorsItemsResultsFormGroup() {
		return new FormGroup<EditorsItemsResultsFormProperties>({
			editors: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Edits {
		EditsItems?: Array<EditsItems>;
	}
	export interface EditsFormProperties {
	}
	export function CreateEditsFormGroup() {
		return new FormGroup<EditsFormProperties>({
		});

	}

	export interface EditsItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		EditsItemsResults?: Array<EditsItemsResults>;
	}
	export interface EditsItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateEditsItemsFormGroup() {
		return new FormGroup<EditsItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EditsItemsResults {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		edits?: string | null;
		timestamp?: string | null;
	}
	export interface EditsItemsResultsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		edits: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEditsItemsResultsFormGroup() {
		return new FormGroup<EditsItemsResultsFormProperties>({
			edits: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Edits_per_editor {
		Edits_per_editorItems?: Array<Edits_per_editorItems>;
	}
	export interface Edits_per_editorFormProperties {
	}
	export function CreateEdits_per_editorFormGroup() {
		return new FormGroup<Edits_per_editorFormProperties>({
		});

	}

	export interface Edits_per_editorItems {
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Edits_per_editorItemsResults?: Array<Edits_per_editorItemsResults>;
		'user-text'?: string | null;
	}
	export interface Edits_per_editorItemsFormProperties {
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		'user-text': FormControl<string | null | undefined>,
	}
	export function CreateEdits_per_editorItemsFormGroup() {
		return new FormGroup<Edits_per_editorItemsFormProperties>({
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			'user-text': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Edits_per_editorItemsResults {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		edits?: string | null;
		timestamp?: string | null;
	}
	export interface Edits_per_editorItemsResultsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		edits: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEdits_per_editorItemsResultsFormGroup() {
		return new FormGroup<Edits_per_editorItemsResultsFormProperties>({
			edits: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Edits_per_page {
		Edits_per_pageItems?: Array<Edits_per_pageItems>;
	}
	export interface Edits_per_pageFormProperties {
	}
	export function CreateEdits_per_pageFormGroup() {
		return new FormGroup<Edits_per_pageFormProperties>({
		});

	}

	export interface Edits_per_pageItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-title'?: string | null;
		project?: string | null;
		Edits_per_pageItemsResults?: Array<Edits_per_pageItemsResults>;
	}
	export interface Edits_per_pageItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-title': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateEdits_per_pageItemsFormGroup() {
		return new FormGroup<Edits_per_pageItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-title': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Edits_per_pageItemsResults {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		edits?: string | null;
		timestamp?: string | null;
	}
	export interface Edits_per_pageItemsResultsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		edits: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateEdits_per_pageItemsResultsFormGroup() {
		return new FormGroup<Edits_per_pageItemsResultsFormProperties>({
			edits: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result format for listings */
	export interface Listing {

		/** Required */
		items: Array<string>;
	}

	/** The result format for listings */
	export interface ListingFormProperties {
	}
	export function CreateListingFormGroup() {
		return new FormGroup<ListingFormProperties>({
		});

	}

	export interface Net_bytes_difference {
		Net_bytes_differenceItems?: Array<Net_bytes_differenceItems>;
	}
	export interface Net_bytes_differenceFormProperties {
	}
	export function CreateNet_bytes_differenceFormGroup() {
		return new FormGroup<Net_bytes_differenceFormProperties>({
		});

	}

	export interface Net_bytes_differenceItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Net_bytes_differenceItemsResults?: Array<Net_bytes_differenceItemsResults>;
	}
	export interface Net_bytes_differenceItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateNet_bytes_differenceItemsFormGroup() {
		return new FormGroup<Net_bytes_differenceItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Net_bytes_differenceItemsResults {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		net_bytes_diff?: string | null;
		timestamp?: string | null;
	}
	export interface Net_bytes_differenceItemsResultsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		net_bytes_diff: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateNet_bytes_differenceItemsResultsFormGroup() {
		return new FormGroup<Net_bytes_differenceItemsResultsFormProperties>({
			net_bytes_diff: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Net_bytes_difference_per_editor {
		Net_bytes_difference_per_editorItems?: Array<Net_bytes_difference_per_editorItems>;
	}
	export interface Net_bytes_difference_per_editorFormProperties {
	}
	export function CreateNet_bytes_difference_per_editorFormGroup() {
		return new FormGroup<Net_bytes_difference_per_editorFormProperties>({
		});

	}

	export interface Net_bytes_difference_per_editorItems {
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Net_bytes_difference_per_editorItemsResults?: Array<Net_bytes_difference_per_editorItemsResults>;
		'user-text'?: string | null;
	}
	export interface Net_bytes_difference_per_editorItemsFormProperties {
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		'user-text': FormControl<string | null | undefined>,
	}
	export function CreateNet_bytes_difference_per_editorItemsFormGroup() {
		return new FormGroup<Net_bytes_difference_per_editorItemsFormProperties>({
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			'user-text': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Net_bytes_difference_per_editorItemsResults {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		net_bytes_diff?: string | null;
		timestamp?: string | null;
	}
	export interface Net_bytes_difference_per_editorItemsResultsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		net_bytes_diff: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateNet_bytes_difference_per_editorItemsResultsFormGroup() {
		return new FormGroup<Net_bytes_difference_per_editorItemsResultsFormProperties>({
			net_bytes_diff: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Net_bytes_difference_per_page {
		Net_bytes_difference_per_pageItems?: Array<Net_bytes_difference_per_pageItems>;
	}
	export interface Net_bytes_difference_per_pageFormProperties {
	}
	export function CreateNet_bytes_difference_per_pageFormGroup() {
		return new FormGroup<Net_bytes_difference_per_pageFormProperties>({
		});

	}

	export interface Net_bytes_difference_per_pageItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-title'?: string | null;
		project?: string | null;
		Net_bytes_difference_per_pageItemsResults?: Array<Net_bytes_difference_per_pageItemsResults>;
	}
	export interface Net_bytes_difference_per_pageItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-title': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateNet_bytes_difference_per_pageItemsFormGroup() {
		return new FormGroup<Net_bytes_difference_per_pageItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-title': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Net_bytes_difference_per_pageItemsResults {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		net_bytes_diff?: string | null;
		timestamp?: string | null;
	}
	export interface Net_bytes_difference_per_pageItemsResultsFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		net_bytes_diff: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateNet_bytes_difference_per_pageItemsResultsFormGroup() {
		return new FormGroup<Net_bytes_difference_per_pageItemsResultsFormProperties>({
			net_bytes_diff: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface New_pages {
		New_pagesItems?: Array<New_pagesItems>;
	}
	export interface New_pagesFormProperties {
	}
	export function CreateNew_pagesFormGroup() {
		return new FormGroup<New_pagesFormProperties>({
		});

	}

	export interface New_pagesItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		New_pagesItemsResults?: Array<New_pagesItemsResults>;
	}
	export interface New_pagesItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateNew_pagesItemsFormGroup() {
		return new FormGroup<New_pagesItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface New_pagesItemsResults {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		new_pages?: number | null;
		timestamp?: string | null;
	}
	export interface New_pagesItemsResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		new_pages: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateNew_pagesItemsResultsFormGroup() {
		return new FormGroup<New_pagesItemsResultsFormProperties>({
			new_pages: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface New_registered_users {
		New_registered_usersItems?: Array<New_registered_usersItems>;
	}
	export interface New_registered_usersFormProperties {
	}
	export function CreateNew_registered_usersFormGroup() {
		return new FormGroup<New_registered_usersFormProperties>({
		});

	}

	export interface New_registered_usersItems {
		granularity?: string | null;
		project?: string | null;
		New_registered_usersItemsResults?: Array<New_registered_usersItemsResults>;
	}
	export interface New_registered_usersItemsFormProperties {
		granularity: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateNew_registered_usersItemsFormGroup() {
		return new FormGroup<New_registered_usersItemsFormProperties>({
			granularity: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface New_registered_usersItemsResults {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		new_registered_users?: number | null;
		timestamp?: string | null;
	}
	export interface New_registered_usersItemsResultsFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		new_registered_users: FormControl<number | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateNew_registered_usersItemsResultsFormGroup() {
		return new FormGroup<New_registered_usersItemsResultsFormProperties>({
			new_registered_users: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Originalimage {

		/**
		 * Original image height
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Original image URI
		 * Required
		 */
		source: string;

		/**
		 * Original image width
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface OriginalimageFormProperties {

		/**
		 * Original image height
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Original image URI
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * Original image width
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateOriginalimageFormGroup() {
		return new FormGroup<OriginalimageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Pagecounts_project {
		Pagecounts_projectItems?: Array<Pagecounts_projectItems>;
	}
	export interface Pagecounts_projectFormProperties {
	}
	export function CreatePagecounts_projectFormGroup() {
		return new FormGroup<Pagecounts_projectFormProperties>({
		});

	}

	export interface Pagecounts_projectItems {
		'access-site'?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count?: string | null;
		granularity?: string | null;
		project?: string | null;
		timestamp?: string | null;
	}
	export interface Pagecounts_projectItemsFormProperties {
		'access-site': FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		count: FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreatePagecounts_projectItemsFormGroup() {
		return new FormGroup<Pagecounts_projectItemsFormProperties>({
			'access-site': new FormControl<string | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pageview_article {
		Pageview_articleItems?: Array<Pageview_articleItems>;
	}
	export interface Pageview_articleFormProperties {
	}
	export function CreatePageview_articleFormGroup() {
		return new FormGroup<Pageview_articleFormProperties>({
		});

	}

	export interface Pageview_articleItems {
		access?: string | null;
		agent?: string | null;
		article?: string | null;
		granularity?: string | null;
		project?: string | null;
		timestamp?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		views?: string | null;
	}
	export interface Pageview_articleItemsFormProperties {
		access: FormControl<string | null | undefined>,
		agent: FormControl<string | null | undefined>,
		article: FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		views: FormControl<string | null | undefined>,
	}
	export function CreatePageview_articleItemsFormGroup() {
		return new FormGroup<Pageview_articleItemsFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			agent: new FormControl<string | null | undefined>(undefined),
			article: new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			views: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pageview_project {
		Pageview_projectItems?: Array<Pageview_projectItems>;
	}
	export interface Pageview_projectFormProperties {
	}
	export function CreatePageview_projectFormGroup() {
		return new FormGroup<Pageview_projectFormProperties>({
		});

	}

	export interface Pageview_projectItems {
		access?: string | null;
		agent?: string | null;
		granularity?: string | null;
		project?: string | null;
		timestamp?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		views?: string | null;
	}
	export interface Pageview_projectItemsFormProperties {
		access: FormControl<string | null | undefined>,
		agent: FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		views: FormControl<string | null | undefined>,
	}
	export function CreatePageview_projectItemsFormGroup() {
		return new FormGroup<Pageview_projectItemsFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			agent: new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			views: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pageview_tops {
		Pageview_topsItems?: Array<Pageview_topsItems>;
	}
	export interface Pageview_topsFormProperties {
	}
	export function CreatePageview_topsFormGroup() {
		return new FormGroup<Pageview_topsFormProperties>({
		});

	}

	export interface Pageview_topsItems {
		access?: string | null;
		Pageview_topsItemsArticles?: Array<Pageview_topsItemsArticles>;
		day?: string | null;
		month?: string | null;
		project?: string | null;
		year?: string | null;
	}
	export interface Pageview_topsItemsFormProperties {
		access: FormControl<string | null | undefined>,
		day: FormControl<string | null | undefined>,
		month: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		year: FormControl<string | null | undefined>,
	}
	export function CreatePageview_topsItemsFormGroup() {
		return new FormGroup<Pageview_topsItemsFormProperties>({
			access: new FormControl<string | null | undefined>(undefined),
			day: new FormControl<string | null | undefined>(undefined),
			month: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			year: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Pageview_topsItemsArticles {
		article?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank?: number | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		views?: string | null;
	}
	export interface Pageview_topsItemsArticlesFormProperties {
		article: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank: FormControl<number | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		views: FormControl<string | null | undefined>,
	}
	export function CreatePageview_topsItemsArticlesFormGroup() {
		return new FormGroup<Pageview_topsItemsArticlesFormProperties>({
			article: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			views: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Problem {
		detail?: string | null;
		method?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status?: number | null;
		title?: string | null;

		/** Required */
		type: string;
		uri?: string | null;
	}
	export interface ProblemFormProperties {
		detail: FormControl<string | null | undefined>,
		method: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
		uri: FormControl<string | null | undefined>,
	}
	export function CreateProblemFormGroup() {
		return new FormGroup<ProblemFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Summary {

		/** The coordinates of the item */
		coordinates?: SummaryCoordinates;

		/** Wikidata description for the page */
		description?: string | null;

		/**
		 * The page language direction code
		 * Required
		 */
		dir: string;

		/** The page title how it should be shown to the user */
		displaytitle?: string | null;

		/**
		 * First several sentences of an article in plain text
		 * Required
		 */
		extract: string;

		/** First several sentences of an article in simple HTML format */
		extract_html?: string | null;

		/**
		 * The page language code
		 * Required
		 */
		lang: string;
		originalimage?: Originalimage;

		/**
		 * The page ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageid?: number | null;
		thumbnail?: Thumbnail;

		/** The time when the page was last editted in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format */
		timestamp?: string | null;

		/**
		 * The page title
		 * Required
		 */
		title: string;
	}
	export interface SummaryFormProperties {

		/** Wikidata description for the page */
		description: FormControl<string | null | undefined>,

		/**
		 * The page language direction code
		 * Required
		 */
		dir: FormControl<string | null | undefined>,

		/** The page title how it should be shown to the user */
		displaytitle: FormControl<string | null | undefined>,

		/**
		 * First several sentences of an article in plain text
		 * Required
		 */
		extract: FormControl<string | null | undefined>,

		/** First several sentences of an article in simple HTML format */
		extract_html: FormControl<string | null | undefined>,

		/**
		 * The page language code
		 * Required
		 */
		lang: FormControl<string | null | undefined>,

		/**
		 * The page ID
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		pageid: FormControl<number | null | undefined>,

		/** The time when the page was last editted in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format */
		timestamp: FormControl<string | null | undefined>,

		/**
		 * The page title
		 * Required
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			dir: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			displaytitle: new FormControl<string | null | undefined>(undefined),
			extract: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			extract_html: new FormControl<string | null | undefined>(undefined),
			lang: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			pageid: new FormControl<number | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SummaryCoordinates {

		/**
		 * The latitude
		 * Required
		 * Type: double
		 */
		lat: number;

		/**
		 * The longitude
		 * Required
		 * Type: double
		 */
		lon: number;
	}
	export interface SummaryCoordinatesFormProperties {

		/**
		 * The latitude
		 * Required
		 * Type: double
		 */
		lat: FormControl<number | null | undefined>,

		/**
		 * The longitude
		 * Required
		 * Type: double
		 */
		lon: FormControl<number | null | undefined>,
	}
	export function CreateSummaryCoordinatesFormGroup() {
		return new FormGroup<SummaryCoordinatesFormProperties>({
			lat: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lon: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Thumbnail {

		/**
		 * Thumnail height
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/**
		 * Thumbnail image URI
		 * Required
		 */
		source: string;

		/**
		 * Thumbnail width
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface ThumbnailFormProperties {

		/**
		 * Thumnail height
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/**
		 * Thumbnail image URI
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/**
		 * Thumbnail width
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateThumbnailFormGroup() {
		return new FormGroup<ThumbnailFormProperties>({
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Top_edited_pages_by_abs_bytes_diff {
		Top_edited_pages_by_abs_bytes_diffItems?: Array<Top_edited_pages_by_abs_bytes_diffItems>;
	}
	export interface Top_edited_pages_by_abs_bytes_diffFormProperties {
	}
	export function CreateTop_edited_pages_by_abs_bytes_diffFormGroup() {
		return new FormGroup<Top_edited_pages_by_abs_bytes_diffFormProperties>({
		});

	}

	export interface Top_edited_pages_by_abs_bytes_diffItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Top_edited_pages_by_abs_bytes_diffItemsResults?: Array<Top_edited_pages_by_abs_bytes_diffItemsResults>;
	}
	export interface Top_edited_pages_by_abs_bytes_diffItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateTop_edited_pages_by_abs_bytes_diffItemsFormGroup() {
		return new FormGroup<Top_edited_pages_by_abs_bytes_diffItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_edited_pages_by_abs_bytes_diffItemsResults {
		timestamp?: string | null;
		Top_edited_pages_by_abs_bytes_diffItemsResultsTop?: Array<Top_edited_pages_by_abs_bytes_diffItemsResultsTop>;
	}
	export interface Top_edited_pages_by_abs_bytes_diffItemsResultsFormProperties {
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateTop_edited_pages_by_abs_bytes_diffItemsResultsFormGroup() {
		return new FormGroup<Top_edited_pages_by_abs_bytes_diffItemsResultsFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_edited_pages_by_abs_bytes_diffItemsResultsTop {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		abs_bytes_diff?: string | null;
		page_title?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank?: number | null;
	}
	export interface Top_edited_pages_by_abs_bytes_diffItemsResultsTopFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		abs_bytes_diff: FormControl<string | null | undefined>,
		page_title: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank: FormControl<number | null | undefined>,
	}
	export function CreateTop_edited_pages_by_abs_bytes_diffItemsResultsTopFormGroup() {
		return new FormGroup<Top_edited_pages_by_abs_bytes_diffItemsResultsTopFormProperties>({
			abs_bytes_diff: new FormControl<string | null | undefined>(undefined),
			page_title: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Top_edited_pages_by_edits {
		Top_edited_pages_by_editsItems?: Array<Top_edited_pages_by_editsItems>;
	}
	export interface Top_edited_pages_by_editsFormProperties {
	}
	export function CreateTop_edited_pages_by_editsFormGroup() {
		return new FormGroup<Top_edited_pages_by_editsFormProperties>({
		});

	}

	export interface Top_edited_pages_by_editsItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Top_edited_pages_by_editsItemsResults?: Array<Top_edited_pages_by_editsItemsResults>;
	}
	export interface Top_edited_pages_by_editsItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateTop_edited_pages_by_editsItemsFormGroup() {
		return new FormGroup<Top_edited_pages_by_editsItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_edited_pages_by_editsItemsResults {
		timestamp?: string | null;
		Top_edited_pages_by_editsItemsResultsTop?: Array<Top_edited_pages_by_editsItemsResultsTop>;
	}
	export interface Top_edited_pages_by_editsItemsResultsFormProperties {
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateTop_edited_pages_by_editsItemsResultsFormGroup() {
		return new FormGroup<Top_edited_pages_by_editsItemsResultsFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_edited_pages_by_editsItemsResultsTop {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		edits?: string | null;
		page_title?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank?: number | null;
	}
	export interface Top_edited_pages_by_editsItemsResultsTopFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		edits: FormControl<string | null | undefined>,
		page_title: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank: FormControl<number | null | undefined>,
	}
	export function CreateTop_edited_pages_by_editsItemsResultsTopFormGroup() {
		return new FormGroup<Top_edited_pages_by_editsItemsResultsTopFormProperties>({
			edits: new FormControl<string | null | undefined>(undefined),
			page_title: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Top_edited_pages_by_net_bytes_diff {
		Top_edited_pages_by_net_bytes_diffItems?: Array<Top_edited_pages_by_net_bytes_diffItems>;
	}
	export interface Top_edited_pages_by_net_bytes_diffFormProperties {
	}
	export function CreateTop_edited_pages_by_net_bytes_diffFormGroup() {
		return new FormGroup<Top_edited_pages_by_net_bytes_diffFormProperties>({
		});

	}

	export interface Top_edited_pages_by_net_bytes_diffItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Top_edited_pages_by_net_bytes_diffItemsResults?: Array<Top_edited_pages_by_net_bytes_diffItemsResults>;
	}
	export interface Top_edited_pages_by_net_bytes_diffItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateTop_edited_pages_by_net_bytes_diffItemsFormGroup() {
		return new FormGroup<Top_edited_pages_by_net_bytes_diffItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_edited_pages_by_net_bytes_diffItemsResults {
		timestamp?: string | null;
		Top_edited_pages_by_net_bytes_diffItemsResultsTop?: Array<Top_edited_pages_by_net_bytes_diffItemsResultsTop>;
	}
	export interface Top_edited_pages_by_net_bytes_diffItemsResultsFormProperties {
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateTop_edited_pages_by_net_bytes_diffItemsResultsFormGroup() {
		return new FormGroup<Top_edited_pages_by_net_bytes_diffItemsResultsFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_edited_pages_by_net_bytes_diffItemsResultsTop {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		net_bytes_diff?: string | null;
		page_title?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank?: number | null;
	}
	export interface Top_edited_pages_by_net_bytes_diffItemsResultsTopFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		net_bytes_diff: FormControl<string | null | undefined>,
		page_title: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank: FormControl<number | null | undefined>,
	}
	export function CreateTop_edited_pages_by_net_bytes_diffItemsResultsTopFormGroup() {
		return new FormGroup<Top_edited_pages_by_net_bytes_diffItemsResultsTopFormProperties>({
			net_bytes_diff: new FormControl<string | null | undefined>(undefined),
			page_title: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Top_editors_by_abs_bytes_diff {
		Top_editors_by_abs_bytes_diffItems?: Array<Top_editors_by_abs_bytes_diffItems>;
	}
	export interface Top_editors_by_abs_bytes_diffFormProperties {
	}
	export function CreateTop_editors_by_abs_bytes_diffFormGroup() {
		return new FormGroup<Top_editors_by_abs_bytes_diffFormProperties>({
		});

	}

	export interface Top_editors_by_abs_bytes_diffItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Top_editors_by_abs_bytes_diffItemsResults?: Array<Top_editors_by_abs_bytes_diffItemsResults>;
	}
	export interface Top_editors_by_abs_bytes_diffItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateTop_editors_by_abs_bytes_diffItemsFormGroup() {
		return new FormGroup<Top_editors_by_abs_bytes_diffItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_editors_by_abs_bytes_diffItemsResults {
		timestamp?: string | null;
		Top_editors_by_abs_bytes_diffItemsResultsTop?: Array<Top_editors_by_abs_bytes_diffItemsResultsTop>;
	}
	export interface Top_editors_by_abs_bytes_diffItemsResultsFormProperties {
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateTop_editors_by_abs_bytes_diffItemsResultsFormGroup() {
		return new FormGroup<Top_editors_by_abs_bytes_diffItemsResultsFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_editors_by_abs_bytes_diffItemsResultsTop {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		abs_bytes_diff?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank?: number | null;
		user_text?: string | null;
	}
	export interface Top_editors_by_abs_bytes_diffItemsResultsTopFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		abs_bytes_diff: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank: FormControl<number | null | undefined>,
		user_text: FormControl<string | null | undefined>,
	}
	export function CreateTop_editors_by_abs_bytes_diffItemsResultsTopFormGroup() {
		return new FormGroup<Top_editors_by_abs_bytes_diffItemsResultsTopFormProperties>({
			abs_bytes_diff: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			user_text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_editors_by_edits {
		Top_editors_by_editsItems?: Array<Top_editors_by_editsItems>;
	}
	export interface Top_editors_by_editsFormProperties {
	}
	export function CreateTop_editors_by_editsFormGroup() {
		return new FormGroup<Top_editors_by_editsFormProperties>({
		});

	}

	export interface Top_editors_by_editsItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Top_editors_by_editsItemsResults?: Array<Top_editors_by_editsItemsResults>;
	}
	export interface Top_editors_by_editsItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateTop_editors_by_editsItemsFormGroup() {
		return new FormGroup<Top_editors_by_editsItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_editors_by_editsItemsResults {
		timestamp?: string | null;
		Top_editors_by_editsItemsResultsTop?: Array<Top_editors_by_editsItemsResultsTop>;
	}
	export interface Top_editors_by_editsItemsResultsFormProperties {
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateTop_editors_by_editsItemsResultsFormGroup() {
		return new FormGroup<Top_editors_by_editsItemsResultsFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_editors_by_editsItemsResultsTop {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		edits?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank?: number | null;
		user_text?: string | null;
	}
	export interface Top_editors_by_editsItemsResultsTopFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		edits: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank: FormControl<number | null | undefined>,
		user_text: FormControl<string | null | undefined>,
	}
	export function CreateTop_editors_by_editsItemsResultsTopFormGroup() {
		return new FormGroup<Top_editors_by_editsItemsResultsTopFormProperties>({
			edits: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			user_text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_editors_by_net_bytes_diff {
		Top_editors_by_net_bytes_diffItems?: Array<Top_editors_by_net_bytes_diffItems>;
	}
	export interface Top_editors_by_net_bytes_diffFormProperties {
	}
	export function CreateTop_editors_by_net_bytes_diffFormGroup() {
		return new FormGroup<Top_editors_by_net_bytes_diffFormProperties>({
		});

	}

	export interface Top_editors_by_net_bytes_diffItems {
		'editor-type'?: string | null;
		granularity?: string | null;
		'page-type'?: string | null;
		project?: string | null;
		Top_editors_by_net_bytes_diffItemsResults?: Array<Top_editors_by_net_bytes_diffItemsResults>;
	}
	export interface Top_editors_by_net_bytes_diffItemsFormProperties {
		'editor-type': FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		'page-type': FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
	}
	export function CreateTop_editors_by_net_bytes_diffItemsFormGroup() {
		return new FormGroup<Top_editors_by_net_bytes_diffItemsFormProperties>({
			'editor-type': new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			'page-type': new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_editors_by_net_bytes_diffItemsResults {
		timestamp?: string | null;
		Top_editors_by_net_bytes_diffItemsResultsTop?: Array<Top_editors_by_net_bytes_diffItemsResultsTop>;
	}
	export interface Top_editors_by_net_bytes_diffItemsResultsFormProperties {
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateTop_editors_by_net_bytes_diffItemsResultsFormGroup() {
		return new FormGroup<Top_editors_by_net_bytes_diffItemsResultsFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Top_editors_by_net_bytes_diffItemsResultsTop {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		net_bytes_diff?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank?: number | null;
		user_text?: string | null;
	}
	export interface Top_editors_by_net_bytes_diffItemsResultsTopFormProperties {

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		net_bytes_diff: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		rank: FormControl<number | null | undefined>,
		user_text: FormControl<string | null | undefined>,
	}
	export function CreateTop_editors_by_net_bytes_diffItemsResultsTopFormGroup() {
		return new FormGroup<Top_editors_by_net_bytes_diffItemsResultsTopFormProperties>({
			net_bytes_diff: new FormControl<string | null | undefined>(undefined),
			rank: new FormControl<number | null | undefined>(undefined),
			user_text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Unique_devices {
		Unique_devicesItems?: Array<Unique_devicesItems>;
	}
	export interface Unique_devicesFormProperties {
	}
	export function CreateUnique_devicesFormGroup() {
		return new FormGroup<Unique_devicesFormProperties>({
		});

	}

	export interface Unique_devicesItems {
		'access-site'?: string | null;

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		devices?: string | null;
		granularity?: string | null;
		project?: string | null;
		timestamp?: string | null;
	}
	export interface Unique_devicesItemsFormProperties {
		'access-site': FormControl<string | null | undefined>,

		/** Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 */
		devices: FormControl<string | null | undefined>,
		granularity: FormControl<string | null | undefined>,
		project: FormControl<string | null | undefined>,
		timestamp: FormControl<string | null | undefined>,
	}
	export function CreateUnique_devicesItemsFormGroup() {
		return new FormGroup<Unique_devicesItemsFormProperties>({
			'access-site': new FormControl<string | null | undefined>(undefined),
			devices: new FormControl<string | null | undefined>(undefined),
			granularity: new FormControl<string | null | undefined>(undefined),
			project: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Gets availability of featured feed content for the apps by wiki domain.
		 * Gets availability of featured feed content for the apps by wiki domain.
		 * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * Get feed/availability
		 * @return {void} JSON containing lists of wiki domains for which feed content is available.
		 */
		FeedAvailabilityGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'feed/availability', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a previously-stored formula
		 * Returns the previously-stored formula via `/media/math/check/{type}` for
		 * the given hash.
		 * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
		 * Get media/math/formula/{hash}
		 * @param {string} hash The hash string of the previous POST data
		 * @return {void} Information about the checked formula
		 */
		MediaMathFormula_hashGet(hash: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'media/math/formula/' + (hash == null ? '' : encodeURIComponent(hash)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get rendered formula in the given format.
		 * Given a request hash, renders a TeX formula into its mathematic
		 * representation in the given format. When a request is issued to the
		 * `/media/math/check/{format}` POST endpoint, the response contains the
		 * `x-resource-location` header denoting the hash ID of the POST data. Once
		 * obtained, this endpoint has to be used to obtain the actual render.
		 * Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
		 * Get media/math/render/{format}/{hash}
		 * @param {MediaMathRender_format_hashGetFormat} format The output format; can be svg or mml
		 * @param {string} hash The hash string of the previous POST data
		 * @return {void} The rendered formula
		 */
		MediaMathRender_format_hashGet(format: MediaMathRender_format_hashGetFormat, hash: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'media/math/render/' + format + '/' + (hash == null ? '' : encodeURIComponent(hash)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the sum of absolute value of text bytes difference between current edit and
		 * previous one.
		 * Given a Mediawiki project and a date range, returns a timeseries of absolute bytes
		 * difference sums. You can filter by editors-type (all-editor-types, anonymous, group-bot,
		 * name-bot, user) and page-type (all-page-types, content, non-content). You can choose
		 * between daily and monthly granularity as well.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/bytes-difference/absolute/aggregate/{project}/{editor_type}/{page_type}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org. If you're interested in the aggregation of all projects, use
		 * all-projects.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edits on pages in content
		 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
		 * interested in edits regardless of their page-type, use all-page-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity Time unit for the response data. As of today, supported values are daily and monthly
		 * @param {string} start The date of the first day to include, in YYYYMMDD format
		 * @param {string} end The date of the last day to include, in YYYYMMDD format
		 * @return {Absolute_bytes_difference} The list of values
		 */
		MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Absolute_bytes_difference> {
			return this.http.get<Absolute_bytes_difference>(this.baseUri + 'metrics/bytes-difference/absolute/aggregate/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the sum of absolute text bytes difference per page.
		 * Given a Mediawiki project, a page-title prefixed with canonical namespace (for
		 * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
		 * difference absolute sums. You can filter by editors-type (all-editor-types, anonymous,
		 * group-bot, name-bot, user). You can choose between daily and monthly granularity as well.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/bytes-difference/absolute/per-page/{project}/{page_title}/{editor_type}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org.
		 * @param {string} page_title The page-title to request absolute bytes-difference for. Should be prefixed with the
		 * page canonical namespace.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity Time unit for the response data. As of today, supported values are daily and monthly
		 * @param {string} start The date of the first day to include, in YYYYMMDD format
		 * @param {string} end The date of the last day to include, in YYYYMMDD format
		 * @return {Absolute_bytes_difference_per_page} The list of values
		 */
		MetricsBytes_differenceAbsolutePer_page_project_page_title_editor_type_granularity_start_endGet(project: string, page_title: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Absolute_bytes_difference_per_page> {
			return this.http.get<Absolute_bytes_difference_per_page>(this.baseUri + 'metrics/bytes-difference/absolute/per-page/' + (project == null ? '' : encodeURIComponent(project)) + '/{page_title}/{editor_type}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the sum of net text bytes difference between current edit and previous one.
		 * Given a Mediawiki project and a date range, returns a timeseries of bytes difference net
		 * sums. You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot,
		 * user) and page-type (all-page-types, content or non-content). You can choose between
		 * daily and monthly granularity as well.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/bytes-difference/net/aggregate/{project}/{editor_type}/{page_type}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org. If you're interested in the aggregation of all projects, use
		 * all-projects.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edits on pages in content
		 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
		 * interested in edits regardless of their page-type, use all-page-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity Time unit for the response data. As of today, supported values are daily and monthly
		 * @param {string} start The date of the first day to include, in YYYYMMDD format
		 * @param {string} end The date of the last day to include, in YYYYMMDD format
		 * @return {Net_bytes_difference} The list of values
		 */
		MetricsBytes_differenceNetAggregate_project_editor_type_page_type_granularity_start_endGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Net_bytes_difference> {
			return this.http.get<Net_bytes_difference>(this.baseUri + 'metrics/bytes-difference/net/aggregate/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the sum of net text bytes difference per page.
		 * Given a Mediawiki project, a page-title prefixed with canonical namespace (for
		 * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of bytes
		 * difference net sums. You can filter by editors-type (all-editor-types, anonymous,
		 * group-bot, name-bot, user). You can choose between daily and monthly granularity as well.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/bytes-difference/net/per-page/{project}/{page_title}/{editor_type}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org.
		 * @param {string} page_title The page-title to request net bytes-difference for. Should be prefixed with the
		 * page canonical namespace.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity Time unit for the response data. As of today, supported values are daily and monthly
		 * @param {string} start The date of the first day to include, in YYYYMMDD format
		 * @param {string} end The date of the last day to include, in YYYYMMDD format
		 * @return {Net_bytes_difference_per_page} The list of values
		 */
		MetricsBytes_differenceNetPer_page_project_page_title_editor_type_granularity_start_endGet(project: string, page_title: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Net_bytes_difference_per_page> {
			return this.http.get<Net_bytes_difference_per_page>(this.baseUri + 'metrics/bytes-difference/net/per-page/' + (project == null ? '' : encodeURIComponent(project)) + '/{page_title}/{editor_type}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get edited-pages counts for a project.
		 * Given a Mediawiki project and a date range, returns a timeseries of its edited-pages counts.
		 * You can filter by editor-type (all-editor-types, anonymous, group-bot, name-bot, user),
		 * page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
		 * 5..24-edits, 25..99-edits, 100..-edits). You can choose between daily and monthly
		 * granularity as well.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/edited-pages/aggregate/{project}/{editor_type}/{page_type}/{activity_level}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off.  For projects like commons without language codes, use commons.wikimedia.
		 * For projects like www.mediawiki.org, you can use that full string, or just use
		 * mediawiki or mediawiki.org.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edited-pages in content
		 * namespaces) or non-content (edited-pages in non-content namespaces). If you are
		 * interested in edited-pages regardless of their page-type, use all-page-types.
		 * @param {MetricsEdited_pagesAggregate_project_editor_type_page_type_activity_level_granularity_start_endGetActivity_level} activity_level If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,
		 * 25..99-edits or 100..-edits. If you are interested in edited-pages regardless
		 * of their activity level, use all-activity-levels.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity The time unit for the response data. As of today, supported values are
		 * daily and monthly.
		 * @param {string} start The date of the first day to include, in YYYYMMDD format
		 * @param {string} end The date of the last day to include, in YYYYMMDD format
		 * @return {Edited_pages} The list of values
		 */
		MetricsEdited_pagesAggregate_project_editor_type_page_type_activity_level_granularity_start_endGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, activity_level: MetricsEdited_pagesAggregate_project_editor_type_page_type_activity_level_granularity_start_endGetActivity_level, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Edited_pages> {
			return this.http.get<Edited_pages>(this.baseUri + 'metrics/edited-pages/aggregate/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/{activity_level}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get new pages counts for a project.
		 * Given a Mediawiki project and a date range, returns a timeseries of its new pages counts.
		 * You can filter by editor type (all-editor-types, anonymous, group-bot, name-bot, user)
		 * or page-type (all-page-types, content or non-content). You can choose between daily and
		 * monthly granularity as well.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/edited-pages/new/{project}/{editor_type}/{page_type}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off.  For projects like commons without language codes, use commons.wikimedia.
		 * For projects like www.mediawiki.org, you can use that full string, or just use
		 * mediawiki or mediawiki.org. If you're interested in the aggregation of all
		 * projects, use all-projects.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging
		 * to the bot group but having bot-like names) or user (registered account not in bot
		 * group nor having bot-like name). If you are interested in edits regardless of
		 * their editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (new pages in content
		 * namespaces) or non-content (new pages in non-content namespaces). If you are
		 * interested in new-articles regardless of their page-type, use all-page-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity The time unit for the response data. As of today, supported values are
		 * daily and monthly.
		 * @param {string} start The date of the first day to include, in YYYYMMDD format
		 * @param {string} end The date of the last day to include, in YYYYMMDD format
		 * @return {New_pages} The list of values
		 */
		MetricsEdited_pagesNew_project_editor_type_page_type_granularity_start_endGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<New_pages> {
			return this.http.get<New_pages>(this.baseUri + 'metrics/edited-pages/new/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get top 100 edited-pages by absolute bytes-difference.
		 * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
		 * edited-pages by absolute bytes-difference. You can filter by editor-type (all-editor-types,
		 * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/edited-pages/top-by-absolute-bytes-difference/{project}/{editor_type}/{page_type}/{year}/{month}/{day}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edits on pages in content
		 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
		 * interested in edits regardless of their page-type, use all-page-types.
		 * @param {string} year The year of the date for which to retrieve top edited-pages, in YYYY format.
		 * @param {string} month The month of the date for which to retrieve top edited-pages, in MM format. If you want to get the top edited-pages of a whole month, the day parameter should be all-days.
		 * @param {string} day The day of the date for which to retrieve top edited-pages, in DD format, or all-days for a monthly value.
		 * @return {Top_edited_pages_by_abs_bytes_diff} The list of values
		 */
		MetricsEdited_pagesTop_by_absolute_bytes_difference_project_editor_type_page_type_year_month_dayGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, year: string, month: string, day: string, headersHandler?: () => HttpHeaders): Observable<Top_edited_pages_by_abs_bytes_diff> {
			return this.http.get<Top_edited_pages_by_abs_bytes_diff>(this.baseUri + 'metrics/edited-pages/top-by-absolute-bytes-difference/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/' + (year == null ? '' : encodeURIComponent(year)) + '/' + (month == null ? '' : encodeURIComponent(month)) + '/' + (day == null ? '' : encodeURIComponent(day)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get top 100 edited-pages by edits count.
		 * Given a Mediawiki project and a date (day or month), returns a timeseries of the top
		 * 100 edited-pages by edits count. You can filter by editor-type (all-editor-types,
		 * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
		 * non-content).
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/edited-pages/top-by-edits/{project}/{editor_type}/{page_type}/{year}/{month}/{day}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edits on pages in content
		 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
		 * interested in edits regardless of their page-type, use all-page-types.
		 * @param {string} year The year of the date for which to retrieve top edited-pages, in YYYY format.
		 * @param {string} month The month of the date for which to retrieve top edited-pages, in MM format. If you want to get the top edited-pages of a whole month, the day parameter should be all-days.
		 * @param {string} day The day of the date for which to retrieve top edited-pages, in DD format, or all-days for a monthly value.
		 * @return {Top_edited_pages_by_edits} The list of values
		 */
		MetricsEdited_pagesTop_by_edits_project_editor_type_page_type_year_month_dayGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, year: string, month: string, day: string, headersHandler?: () => HttpHeaders): Observable<Top_edited_pages_by_edits> {
			return this.http.get<Top_edited_pages_by_edits>(this.baseUri + 'metrics/edited-pages/top-by-edits/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/' + (year == null ? '' : encodeURIComponent(year)) + '/' + (month == null ? '' : encodeURIComponent(month)) + '/' + (day == null ? '' : encodeURIComponent(day)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get top 100 edited-pages by net bytes-difference.
		 * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
		 * edited-pages by net bytes-difference. You can filter by editor-type (all-editor-types,
		 * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/edited-pages/top-by-net-bytes-difference/{project}/{editor_type}/{page_type}/{year}/{month}/{day}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edits on pages in content
		 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
		 * interested in edits regardless of their page-type, use all-page-types.
		 * @param {string} year The year of the date for which to retrieve top edited-pages, in YYYY format.
		 * @param {string} month The month of the date for which to retrieve top edited-pages, in MM format. If you want to get the top edited-pages of a whole month, the day parameter should be all-days.
		 * @param {string} day The day of the date for which to retrieve top edited-pages, in DD format, or all-days for a monthly value.
		 * @return {Top_edited_pages_by_net_bytes_diff} The list of values
		 */
		MetricsEdited_pagesTop_by_net_bytes_difference_project_editor_type_page_type_year_month_dayGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, year: string, month: string, day: string, headersHandler?: () => HttpHeaders): Observable<Top_edited_pages_by_net_bytes_diff> {
			return this.http.get<Top_edited_pages_by_net_bytes_diff>(this.baseUri + 'metrics/edited-pages/top-by-net-bytes-difference/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/' + (year == null ? '' : encodeURIComponent(year)) + '/' + (month == null ? '' : encodeURIComponent(month)) + '/' + (day == null ? '' : encodeURIComponent(day)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get editors counts for a project.
		 * Given a Mediawiki project and a date range, returns a timeseries of its editors counts.
		 * You can filter by editory-type (all-editor-types, anonymous, group-bot, name-bot, user),
		 * page-type (all-page-types, content or non-content) or activity-level (1..4-edits,
		 * 5..24-edits, 25..99-edits or 100..-edits). You can choose between daily and monthly
		 * granularity as well.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/editors/aggregate/{project}/{editor_type}/{page_type}/{activity_level}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off.  For projects like commons without language codes, use commons.wikimedia.
		 * For projects like www.mediawiki.org, you can use that full string, or just use
		 * mediawiki or mediawiki.org.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging
		 * to the bot group but having bot-like names) or user (registered account not in bot
		 * group nor having bot-like name). If you are interested in edits regardless
		 * of their editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edits made in content
		 * namespaces) or non-content (edits made in non-content namespaces). If you are
		 * interested in editors regardless of their page-type, use all-page-types.
		 * @param {MetricsEdited_pagesAggregate_project_editor_type_page_type_activity_level_granularity_start_endGetActivity_level} activity_level If you want to filter by activity-level, use one of 1..4-edits, 5..24-edits,
		 * 25..99-edits or 100..-edits. If you are interested in editors regardless
		 * of their activity-level, use all-activity-levels.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity The time unit for the response data. As of today, supported values are
		 * daily and monthly.
		 * @param {string} start The date of the first day to include, in YYYYMMDD format
		 * @param {string} end The date of the last day to include, in YYYYMMDD format
		 * @return {Editors} The list of values
		 */
		MetricsEditorsAggregate_project_editor_type_page_type_activity_level_granularity_start_endGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, activity_level: MetricsEdited_pagesAggregate_project_editor_type_page_type_activity_level_granularity_start_endGetActivity_level, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Editors> {
			return this.http.get<Editors>(this.baseUri + 'metrics/editors/aggregate/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/{activity_level}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get top 100 editors by absolute bytes-difference.
		 * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
		 * editors by absolute bytes-difference. You can filter by editor-type (all-editor-types,
		 * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or non-content).
		 * The user_text returned is either the mediawiki user_text if the user is registered, or
		 * null if user is anonymous.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/editors/top-by-absolute-bytes-difference/{project}/{editor_type}/{page_type}/{year}/{month}/{day}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edits on pages in content
		 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
		 * interested in edits regardless of their page-type, use all-page-types.
		 * @param {string} year The year of the date for which to retrieve top editors, in YYYY format.
		 * @param {string} month The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.
		 * @param {string} day The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.
		 * @return {Top_editors_by_abs_bytes_diff} The list of values
		 */
		MetricsEditorsTop_by_absolute_bytes_difference_project_editor_type_page_type_year_month_dayGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, year: string, month: string, day: string, headersHandler?: () => HttpHeaders): Observable<Top_editors_by_abs_bytes_diff> {
			return this.http.get<Top_editors_by_abs_bytes_diff>(this.baseUri + 'metrics/editors/top-by-absolute-bytes-difference/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/' + (year == null ? '' : encodeURIComponent(year)) + '/' + (month == null ? '' : encodeURIComponent(month)) + '/' + (day == null ? '' : encodeURIComponent(day)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get top 100 editors by edits count.
		 * Given a Mediawiki project and a date (day or month), returns a timeseries of the top
		 * 100 editors by edits count. You can filter by editor-type (all-editor-types,
		 * anonymous, group-bot, name-bot, user) or page-type (all-page-types, content or
		 * non-content). The user_text returned is either the mediawiki user_text if the user is
		 * registered, or null if user is anonymous.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/editors/top-by-edits/{project}/{editor_type}/{page_type}/{year}/{month}/{day}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edits on pages in content
		 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
		 * interested in edits regardless of their page-type, use all-page-types.
		 * @param {string} year The year of the date for which to retrieve top editors, in YYYY format.
		 * @param {string} month The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.
		 * @param {string} day The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.
		 * @return {Top_editors_by_edits} The list of values
		 */
		MetricsEditorsTop_by_edits_project_editor_type_page_type_year_month_dayGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, year: string, month: string, day: string, headersHandler?: () => HttpHeaders): Observable<Top_editors_by_edits> {
			return this.http.get<Top_editors_by_edits>(this.baseUri + 'metrics/editors/top-by-edits/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/' + (year == null ? '' : encodeURIComponent(year)) + '/' + (month == null ? '' : encodeURIComponent(month)) + '/' + (day == null ? '' : encodeURIComponent(day)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get top 100 editors by net bytes-difference.
		 * Given a Mediawiki project and a date (day or month), returns a timeseries of the top 100
		 * editors by net bytes-difference. You can filter by editor-type (all-editor-types, anonymous,
		 * group-bot, name-bot, user) or page-type (all-page-types, content or non-content). The
		 * user_text returned is either the mediawiki user_text if the user is registered, or
		 * "Anonymous Editor" if user is anonymous.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/editors/top-by-net-bytes-difference/{project}/{editor_type}/{page_type}/{year}/{month}/{day}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edits on pages in content
		 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
		 * interested in edits regardless of their page-type, use all-page-types.
		 * @param {string} year The year of the date for which to retrieve top editors, in YYYY format.
		 * @param {string} month The month of the date for which to retrieve top editors, in MM format. If you want to get the top editors of a whole month, the day parameter should be all-days.
		 * @param {string} day The day of the date for which to retrieve top editors, in DD format, or all-days for a monthly value.
		 * @return {Top_editors_by_net_bytes_diff} The list of values
		 */
		MetricsEditorsTop_by_net_bytes_difference_project_editor_type_page_type_year_month_dayGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, year: string, month: string, day: string, headersHandler?: () => HttpHeaders): Observable<Top_editors_by_net_bytes_diff> {
			return this.http.get<Top_editors_by_net_bytes_diff>(this.baseUri + 'metrics/editors/top-by-net-bytes-difference/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/' + (year == null ? '' : encodeURIComponent(year)) + '/' + (month == null ? '' : encodeURIComponent(month)) + '/' + (day == null ? '' : encodeURIComponent(day)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get edits counts for a project.
		 * Given a Mediawiki project and a date range, returns a timeseries of edits counts.
		 * You can filter by editors-type (all-editor-types, anonymous, bot, registered) and
		 * page-type (all-page-types, content or non-content). You can choose between daily and
		 * monthly granularity as well.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/edits/aggregate/{project}/{editor_type}/{page_type}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off.  For projects like commons without language codes, use commons.wikimedia.
		 * For projects like www.mediawiki.org, you can use that full string, or just use
		 * mediawiki or mediawiki.org. If you're interested in the aggregation of
		 * all projects, use all-projects.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging
		 * to the bot group but having bot-like names) or user (registered account not in bot
		 * group nor having bot-like name). If you are interested in edits regardless
		 * of their editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type} page_type If you want to filter by page-type, use one of content (edits on pages in content
		 * namespaces) or non-content (edits on pages in non-content namespaces). If you are
		 * interested in edits regardless of their page-type, use all-page-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity The time unit for the response data. As of today, supported values are
		 * daily and monthly.
		 * @param {string} start The date of the first day to include, in YYYYMMDD format
		 * @param {string} end The date of the last day to include, in YYYYMMDD format
		 * @return {Edits} The list of values
		 */
		MetricsEditsAggregate_project_editor_type_page_type_granularity_start_endGet(project: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, page_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Edits> {
			return this.http.get<Edits>(this.baseUri + 'metrics/edits/aggregate/' + (project == null ? '' : encodeURIComponent(project)) + '/{editor_type}/{page_type}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get edit counts for a page in a project.
		 * Given a Mediawiki project, a page-title prefixed with its canonical namespace (for
		 * instance 'User:Jimbo_Wales') and a date range, returns a timeseries of edit counts.
		 * You can filter by editors-type (all-editor-types, anonymous, group-bot, name-bot, user).
		 * You can choose between daily and monthly granularity as well.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/edits/per-page/{project}/{page_title}/{editor_type}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia. For
		 * projects like www.mediawiki.org, you can use that full string, or just use mediawiki
		 * or mediawiki.org.
		 * @param {string} page_title The page-title to request edits for. It should be prefixed with canonical namespace.
		 * Spaces will be converted to underscores.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type} editor_type If you want to filter by editor-type, use one of anonymous, group-bot (registered
		 * accounts belonging to the bot group), name-bot (registered accounts not belonging to
		 * the bot group but having bot-like names) or user (registered account not in bot group
		 * nor having bot-like name). If you are interested in edits regardless of their
		 * editor-type, use all-editor-types.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity Time unit for the response data. As of today, supported values are daily and monthly
		 * @param {string} start The date of the first day to include, in YYYYMMDD format
		 * @param {string} end The date of the last day to include, in YYYYMMDD format
		 * @return {Edits_per_page} The list of values
		 */
		MetricsEditsPer_page_project_page_title_editor_type_granularity_start_endGet(project: string, page_title: string, editor_type: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Edits_per_page> {
			return this.http.get<Edits_per_page>(this.baseUri + 'metrics/edits/per-page/' + (project == null ? '' : encodeURIComponent(project)) + '/{page_title}/{editor_type}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Given a project and a date range, returns a timeseries of pagecounts.
		 * You can filter by access site (mobile or desktop) and you can choose between monthly,
		 * daily and hourly granularity as well.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 100 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/legacy/pagecounts/aggregate/{project}/{access_site}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off. For projects like commons without language codes, use commons.wikimedia.
		 * @param {MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGetAccess_site} access_site If you want to filter by access site, use one of desktop-site or mobile-site. If you are interested in pagecounts regardless of access site use all-sites.
		 * @param {MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGetGranularity} granularity The time unit for the response data. As of today, the supported granularities for
		 * this endpoint are hourly, daily and monthly.
		 * @param {string} start The timestamp of the first hour/day/month to include, in YYYYMMDDHH format.
		 * @param {string} end The timestamp of the last hour/day/month to include, in YYYYMMDDHH format.
		 * In hourly and daily granularities this value is inclusive, in the monthly granularity
		 * this value is exclusive.
		 * @return {Pagecounts_project} The list of values
		 */
		MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGet(project: string, access_site: MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGetAccess_site, granularity: MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Pagecounts_project> {
			return this.http.get<Pagecounts_project>(this.baseUri + 'metrics/legacy/pagecounts/aggregate/' + (project == null ? '' : encodeURIComponent(project)) + '/{access_site}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get pageview counts for a project.
		 * Given a date range, returns a timeseries of pageview counts. You can filter by project,
		 * access method and/or agent type. You can choose between daily and hourly granularity
		 * as well.
		 * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
		 * - Rate limit: 100 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/pageviews/aggregate/{project}/{access}/{agent}/{granularity}/{start}/{end}
		 * @param {string} project If you want to filter by project, use the domain of any Wikimedia project,
		 * for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.
		 * If you are interested in all pageviews regardless of project, use all-projects.
		 * @param {MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAccess} access If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
		 * If you are interested in pageviews regardless of access method, use all-access.
		 * @param {MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAgent} agent If you want to filter by agent type, use one of user or spider. If you are interested
		 * in pageviews regardless of agent type, use all-agents.
		 * @param {MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGetGranularity} granularity The time unit for the response data. As of today, the supported granularities for this
		 * endpoint are hourly, daily, and monthly.
		 * @param {string} start The timestamp of the first hour/day/month to include, in YYYYMMDDHH format
		 * @param {string} end The timestamp of the last hour/day/month to include, in YYYYMMDDHH format
		 * @return {Pageview_project} The list of values
		 */
		MetricsPageviewsAggregate_project_access_agent_granularity_start_endGet(project: string, access: MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAccess, agent: MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAgent, granularity: MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Pageview_project> {
			return this.http.get<Pageview_project>(this.baseUri + 'metrics/pageviews/aggregate/' + (project == null ? '' : encodeURIComponent(project)) + '/' + access + '/' + agent + '/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get pageview counts for a page.
		 * Given a Mediawiki article and a date range, returns a daily timeseries of its pageview
		 * counts. You can also filter by access method and/or agent type.
		 * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
		 * - Rate limit: 100 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/pageviews/per-article/{project}/{access}/{agent}/{article}/{granularity}/{start}/{end}
		 * @param {string} project If you want to filter by project, use the domain of any Wikimedia project,
		 * for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.
		 * @param {MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAccess} access If you want to filter by access method, use one of desktop, mobile-app
		 * or mobile-web. If you are interested in pageviews regardless of access method,
		 * use all-access.
		 * @param {MetricsPageviewsPer_article_project_access_agent_article_granularity_start_endGetAgent} agent If you want to filter by agent type, use one of user, bot or spider. If you are
		 * interested in pageviews regardless of agent type, use all-agents.
		 * @param {string} article 'The title of any article in the specified project. Any spaces should be replaced
		 * with underscores. It also should be URI-encoded, so that non-URI-safe characters like
		 * %, / or ? are accepted. Example: Are_You_the_One%3F'.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity The time unit for the response data. As of today, the only supported granularity for
		 * this endpoint is daily and monthly.
		 * @param {string} start The date of the first day to include, in YYYYMMDD or YYYYMMDDHH format
		 * @param {string} end The date of the last day to include, in YYYYMMDD or YYYYMMDDHH format
		 * @return {Pageview_article} The list of values
		 */
		MetricsPageviewsPer_article_project_access_agent_article_granularity_start_endGet(project: string, access: MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAccess, agent: MetricsPageviewsPer_article_project_access_agent_article_granularity_start_endGetAgent, article: string, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Pageview_article> {
			return this.http.get<Pageview_article>(this.baseUri + 'metrics/pageviews/per-article/' + (project == null ? '' : encodeURIComponent(project)) + '/' + access + '/' + agent + '/' + (article == null ? '' : encodeURIComponent(article)) + '/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get pageviews by country and access method.
		 * Lists the pageviews to this project, split by country of origin for a given month.
		 * Because of privacy reasons, pageviews are given in a bucketed format, and countries
		 * with less than 100 views do not get reported.
		 * Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 100 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/pageviews/top-by-country/{project}/{access}/{year}/{month}
		 * @param {string} project If you want to filter by project, use the domain of any Wikimedia project,
		 * for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.
		 * @param {MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAccess} access If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
		 * If you are interested in pageviews regardless of access method, use all-access.
		 * @param {string} year The year of the date for which to retrieve top countries, in YYYY format.
		 * @param {string} month The month of the date for which to retrieve top countries, in MM format.
		 * @return {By_country} The list of top countries by pageviews in the project
		 */
		MetricsPageviewsTop_by_country_project_access_year_monthGet(project: string, access: MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAccess, year: string, month: string, headersHandler?: () => HttpHeaders): Observable<By_country> {
			return this.http.get<By_country>(this.baseUri + 'metrics/pageviews/top-by-country/' + (project == null ? '' : encodeURIComponent(project)) + '/' + access + '/' + (year == null ? '' : encodeURIComponent(year)) + '/' + (month == null ? '' : encodeURIComponent(month)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the most viewed articles for a project.
		 * Lists the 1000 most viewed articles for a given project and timespan (month or day).
		 * You can filter by access method.
		 * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
		 * - Rate limit: 100 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/pageviews/top/{project}/{access}/{year}/{month}/{day}
		 * @param {string} project If you want to filter by project, use the domain of any Wikimedia project,
		 * for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.
		 * @param {MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAccess} access If you want to filter by access method, use one of desktop, mobile-app or mobile-web.
		 * If you are interested in pageviews regardless of access method, use all-access.
		 * @param {string} year The year of the date for which to retrieve top articles, in YYYY format.
		 * @param {string} month The month of the date for which to retrieve top articles, in MM format. If you want
		 * to get the top articles of a whole month, the day parameter should be all-days.
		 * @param {string} day The day of the date for which to retrieve top articles, in DD format.
		 * @return {Pageview_tops} The list of top articles in the project
		 */
		MetricsPageviewsTop_project_access_year_month_dayGet(project: string, access: MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAccess, year: string, month: string, day: string, headersHandler?: () => HttpHeaders): Observable<Pageview_tops> {
			return this.http.get<Pageview_tops>(this.baseUri + 'metrics/pageviews/top/' + (project == null ? '' : encodeURIComponent(project)) + '/' + access + '/' + (year == null ? '' : encodeURIComponent(year)) + '/' + (month == null ? '' : encodeURIComponent(month)) + '/' + (day == null ? '' : encodeURIComponent(day)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get newly registered users counts for a project.
		 * Given a Mediawiki project and a date range, returns a timeseries of its newly registered
		 * users counts. You can choose between daily and monthly granularity. The newly registered
		 * users value is computed with self-created users only, not auto-login created ones.
		 * - Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
		 * - Rate limit: 25 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/registered-users/new/{project}/{granularity}/{start}/{end}
		 * @param {string} project The name of any Wikimedia project formatted like {language code}.{project name},
		 * for example en.wikipedia. You may pass en.wikipedia.org and the .org will be stripped
		 * off.  For projects like commons without language codes, use commons.wikimedia.
		 * For projects like www.mediawiki.org, you can use that full string, or just use
		 * mediawiki or mediawiki.org. If you're interested in the aggregation of
		 * all projects, use all.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity The time unit for the response data. As of today, supported values are
		 * daily and monthly.
		 * @param {string} start The date of the first day to include, in YYYYMMDD format
		 * @param {string} end The date of the last day to include, in YYYYMMDD format
		 * @return {New_registered_users} The list of values
		 */
		MetricsRegistered_usersNew_project_granularity_start_endGet(project: string, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<New_registered_users> {
			return this.http.get<New_registered_users>(this.baseUri + 'metrics/registered-users/new/' + (project == null ? '' : encodeURIComponent(project)) + '/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get unique devices count per project
		 * Given a project and a date range, returns a timeseries of unique devices counts.
		 * You need to specify a project, and can filter by accessed site (mobile or desktop).
		 * You can choose between daily and hourly granularity as well.
		 * - Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
		 * - Rate limit: 100 req/s
		 * - License: Data accessible via this endpoint is available under the
		 * [CC0 1.0 license](https://creativecommons.org/publicdomain/zero/1.0/).
		 * Get metrics/unique-devices/{project}/{access_site}/{granularity}/{start}/{end}
		 * @param {string} project If you want to filter by project, use the domain of any Wikimedia project,
		 * for example 'en.wikipedia.org', 'www.mediawiki.org' or 'commons.wikimedia.org'.
		 * @param {MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGetAccess_site} access_site If you want to filter by accessed site, use one of desktop-site or mobile-site.
		 * If you are interested in unique devices regardless of accessed site, use or all-sites.
		 * @param {MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity} granularity The time unit for the response data. As of today, the supported granularities
		 * for this endpoint are daily and monthly.
		 * @param {string} start The timestamp of the first day/month to include, in YYYYMMDD format
		 * @param {string} end The timestamp of the last day/month to include, in YYYYMMDD format
		 * @return {Unique_devices} The list of values
		 */
		MetricsUnique_devices_project_access_site_granularity_start_endGet(project: string, access_site: MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGetAccess_site, granularity: MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity, start: string, end: string, headersHandler?: () => HttpHeaders): Observable<Unique_devices> {
			return this.http.get<Unique_devices>(this.baseUri + 'metrics/unique-devices/' + (project == null ? '' : encodeURIComponent(project)) + '/{access_site}/' + granularity + '/' + (start == null ? '' : encodeURIComponent(start)) + '/' + (end == null ? '' : encodeURIComponent(end)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the language pairs supported by the back-end
		 * Fetches the list of language pairs the back-end service can translate
		 * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
		 * Get transform/list/languagepairs/
		 * @return {Cx_languagepairs} the list of source and target languages supported by the API
		 */
		TransformListLanguagepairsGet(headersHandler?: () => HttpHeaders): Observable<Cx_languagepairs> {
			return this.http.get<Cx_languagepairs>(this.baseUri + 'transform/list/languagepairs/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the tools available for a language pair
		 * Fetches the list of tools that are available for the given pair of languages.
		 * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
		 * Get transform/list/pair/{from}/{to}/
		 * @param {string} from The source language code
		 * @param {string} to The target language code
		 * @return {Cx_list_tools} the list of tools available for the language pair
		 */
		TransformListPair_from_toGet(from: string, to: string, headersHandler?: () => HttpHeaders): Observable<Cx_list_tools> {
			return this.http.get<Cx_list_tools>(this.baseUri + 'transform/list/pair/' + (from == null ? '' : encodeURIComponent(from)) + '/' + (to == null ? '' : encodeURIComponent(to)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the tools and language pairs available for the given tool category
		 * Fetches the list of tools and all of the language pairs it can translate
		 * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
		 * Get transform/list/tool/{tool}
		 * @param {TransformListTool_toolGetTool} tool The tool category to list tools and language pairs for
		 * @return {Cx_list_pairs_for_tool} the list of language pairs available for a given translation tool
		 */
		TransformListTool_toolGet(tool: TransformListTool_toolGetTool, headersHandler?: () => HttpHeaders): Observable<Cx_list_pairs_for_tool> {
			return this.http.get<Cx_list_pairs_for_tool>(this.baseUri + 'transform/list/tool/' + tool, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the tools and language pairs available for the given tool category
		 * Fetches the list of tools and all of the language pairs it can translate
		 * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
		 * Get transform/list/tool/{tool}/{from}
		 * @param {TransformListTool_toolGetTool} tool The tool category to list tools and language pairs for
		 * @param {string} from The source language code
		 * @return {Cx_list_pairs_for_tool} the list of language pairs available for a given translation tool
		 */
		TransformListTool_tool_fromGet(tool: TransformListTool_toolGetTool, from: string, headersHandler?: () => HttpHeaders): Observable<Cx_list_pairs_for_tool> {
			return this.http.get<Cx_list_pairs_for_tool>(this.baseUri + 'transform/list/tool/' + tool + '/' + (from == null ? '' : encodeURIComponent(from)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the tools and language pairs available for the given tool category
		 * Fetches the list of tools and all of the language pairs it can translate
		 * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
		 * Get transform/list/tool/{tool}/{from}/{to}
		 * @param {TransformListTool_toolGetTool} tool The tool category to list tools and language pairs for
		 * @param {string} from The source language code
		 * @param {string} to The target language code
		 * @return {Cx_list_pairs_for_tool} the list of language pairs available for a given translation tool
		 */
		TransformListTool_tool_from_toGet(tool: TransformListTool_toolGetTool, from: string, to: string, headersHandler?: () => HttpHeaders): Observable<Cx_list_pairs_for_tool> {
			return this.http.get<Cx_list_pairs_for_tool>(this.baseUri + 'transform/list/tool/' + tool + '/' + (from == null ? '' : encodeURIComponent(from)) + '/' + (to == null ? '' : encodeURIComponent(to)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch the dictionary meaning of a word
		 * Fetches the dictionary meaning of a word from a language and displays
		 * it in the target language.
		 * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
		 * Get transform/word/from/{from_lang}/to/{to_lang}/{word}
		 * @param {string} from_lang The source language code
		 * @param {string} to_lang The target language code
		 * @param {string} word The word to lookup
		 * @return {Cx_dict} the dictionary translation for the given word
		 */
		TransformWordFrom_from_langTo_to_lang_wordGet(from_lang: string, to_lang: string, word: string, headersHandler?: () => HttpHeaders): Observable<Cx_dict> {
			return this.http.get<Cx_dict>(this.baseUri + 'transform/word/from/' + (from_lang == null ? '' : encodeURIComponent(from_lang)) + '/to/' + (to_lang == null ? '' : encodeURIComponent(to_lang)) + '/' + (word == null ? '' : encodeURIComponent(word)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Fetch the dictionary meaning of a word
		 * Fetches the dictionary meaning of a word from a language and displays
		 * it in the target language.
		 * Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
		 * Get transform/word/from/{from_lang}/to/{to_lang}/{word}/{provider}
		 * @param {string} from_lang The source language code
		 * @param {string} to_lang The target language code
		 * @param {string} word The word to lookup
		 * @param {TransformWordFrom_from_langTo_to_lang_word_providerGetProvider} provider The dictionary provider id
		 * @return {Cx_dict} the dictionary translation for the given word
		 */
		TransformWordFrom_from_langTo_to_lang_word_providerGet(from_lang: string, to_lang: string, word: string, provider: TransformWordFrom_from_langTo_to_lang_word_providerGetProvider, headersHandler?: () => HttpHeaders): Observable<Cx_dict> {
			return this.http.get<Cx_dict>(this.baseUri + 'transform/word/from/' + (from_lang == null ? '' : encodeURIComponent(from_lang)) + '/to/' + (to_lang == null ? '' : encodeURIComponent(to_lang)) + '/' + (word == null ? '' : encodeURIComponent(word)) + '/' + provider, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

	export enum MediaMathCheck_typePostType { tex = 0, 'inline-tex' = 1, chem = 2 }

	export enum MediaMathRender_format_hashGetFormat { svg = 0, mml = 1, png = 2 }

	export enum MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetEditor_type { 'all-editor-types' = 0, anonymous = 1, 'group-bot' = 2, 'name-bot' = 3, user = 4 }

	export enum MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetPage_type { 'all-page-types' = 0, content = 1, 'non-content' = 2 }

	export enum MetricsBytes_differenceAbsoluteAggregate_project_editor_type_page_type_granularity_start_endGetGranularity { daily = 0, monthly = 1 }

	export enum MetricsEdited_pagesAggregate_project_editor_type_page_type_activity_level_granularity_start_endGetActivity_level { 'all-activity-levels' = 0, '1..4-edits' = 1, '5..24-edits' = 2, '25..99-edits' = 3, '100..-edits' = 4 }

	export enum MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGetAccess_site { 'all-sites' = 0, 'desktop-site' = 1, 'mobile-site' = 2 }

	export enum MetricsLegacyPagecountsAggregate_project_access_site_granularity_start_endGetGranularity { hourly = 0, daily = 1, monthly = 2 }

	export enum MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAccess { 'all-access' = 0, desktop = 1, 'mobile-app' = 2, 'mobile-web' = 3 }

	export enum MetricsPageviewsAggregate_project_access_agent_granularity_start_endGetAgent { 'all-agents' = 0, user = 1, spider = 2 }

	export enum MetricsPageviewsPer_article_project_access_agent_article_granularity_start_endGetAgent { 'all-agents' = 0, user = 1, spider = 2, bot = 3 }

	export enum TransformHtmlFrom_from_langTo_to_lang_providerPostProvider { Apertium = 0, Yandex = 1, Youdao = 2 }

	export enum TransformListTool_toolGetTool { mt = 0, dictionary = 1 }

	export enum TransformWordFrom_from_langTo_to_lang_word_providerGetProvider { JsonDict = 0, Dictd = 1 }

}

