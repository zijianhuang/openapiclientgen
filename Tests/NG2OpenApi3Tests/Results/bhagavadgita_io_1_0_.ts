import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ChapterSchema {
		chapter_number?: number | null;
		chapter_summary?: string | null;
		name?: string | null;
		name_meaning?: string | null;
		name_translation?: string | null;
		name_transliterated?: string | null;
		verses_count?: number | null;
	}
	export interface ChapterSchemaFormProperties {
		chapter_number: FormControl<number | null | undefined>,
		chapter_summary: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		name_meaning: FormControl<string | null | undefined>,
		name_translation: FormControl<string | null | undefined>,
		name_transliterated: FormControl<string | null | undefined>,
		verses_count: FormControl<number | null | undefined>,
	}
	export function CreateChapterSchemaFormGroup() {
		return new FormGroup<ChapterSchemaFormProperties>({
			chapter_number: new FormControl<number | null | undefined>(undefined),
			chapter_summary: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			name_meaning: new FormControl<string | null | undefined>(undefined),
			name_translation: new FormControl<string | null | undefined>(undefined),
			name_transliterated: new FormControl<string | null | undefined>(undefined),
			verses_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VerseSchema {
		meaning?: string | null;
		text?: string | null;
		transliteration?: string | null;
		verse_number?: string | null;
		word_meanings?: string | null;
	}
	export interface VerseSchemaFormProperties {
		meaning: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
		transliteration: FormControl<string | null | undefined>,
		verse_number: FormControl<string | null | undefined>,
		word_meanings: FormControl<string | null | undefined>,
	}
	export function CreateVerseSchemaFormGroup() {
		return new FormGroup<VerseSchemaFormProperties>({
			meaning: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			transliteration: new FormControl<string | null | undefined>(undefined),
			verse_number: new FormControl<string | null | undefined>(undefined),
			word_meanings: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get all the 18 Chapters of the Bhagavad Gita.
		 * Get a list of all the 18 Chapters of the Bhagavad Gita.<br/>
		 * Get api/v1/chapters
		 * @param {string} access_token Your app's access token.
		 * @param {ChapterGetByAccess_tokenAndLanguageLanguage} language Language to query. Leave blank for english.
		 * @return {ChapterSchema} Success: Everything worked as expected.
		 */
		ChapterGetByAccess_tokenAndLanguage(access_token: string, language: ChapterGetByAccess_tokenAndLanguageLanguage | null | undefined): Observable<ChapterSchema> {
			return this.http.get<ChapterSchema>(this.baseUri + 'api/v1/chapters?access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&language=' + language, {});
		}

		/**
		 * Get a specific chapter from the Bhagavad Gita.
		 * Get information about a specific chapter from the Bhagavad Gita.<br/>
		 * Get api/v1/chapters/{chapter_number}
		 * @param {string} access_token Your app's access token.
		 * @param {ChapterGetByAccess_tokenAndChapter_numberAndLanguageChapter_number} chapter_number Which Chapter Number to filter?
		 * @param {ChapterGetByAccess_tokenAndLanguageLanguage} language Language to query. Leave blank for english.
		 * @return {ChapterSchema} Success: Everything worked as expected.
		 */
		ChapterGetByAccess_tokenAndChapter_numberAndLanguage(access_token: string, chapter_number: ChapterGetByAccess_tokenAndChapter_numberAndLanguageChapter_number, language: ChapterGetByAccess_tokenAndLanguageLanguage | null | undefined): Observable<ChapterSchema> {
			return this.http.get<ChapterSchema>(this.baseUri + 'api/v1/chapters/' + chapter_number + '?access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&language=' + language, {});
		}

		/**
		 * Get all the Verses from a Chapter.
		 * Get a list of all Verses from a particular Chapter.<br/>
		 * Get api/v1/chapters/{chapter_number}/verses
		 * @param {string} access_token Your app's access token.
		 * @param {VerseGetByAccess_tokenAndChapter_numberAndLanguageChapter_number} chapter_number Which Chapter Number to filter?
		 * @param {ChapterGetByAccess_tokenAndLanguageLanguage} language Language to query. Leave blank for english.
		 * @return {VerseSchema} Success: Everything worked as expected.
		 */
		VerseGetByAccess_tokenAndChapter_numberAndLanguage(access_token: string, chapter_number: VerseGetByAccess_tokenAndChapter_numberAndLanguageChapter_number, language: ChapterGetByAccess_tokenAndLanguageLanguage | null | undefined): Observable<VerseSchema> {
			return this.http.get<VerseSchema>(this.baseUri + 'api/v1/chapters/' + chapter_number + '/verses?access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&language=' + language, {});
		}

		/**
		 * Get a particular verse from a chapter.
		 * Get a specific verse from a specific chapter.<br/>
		 * Get api/v1/chapters/{chapter_number}/verses/{verse_number}
		 * @param {string} access_token Your app's access token.
		 * @param {VerseGetByAccess_tokenAndChapter_numberAndVerse_numberAndLanguageChapter_number} chapter_number Which Chapter Number to filter?
		 * @param {ChapterGetByAccess_tokenAndChapter_numberAndLanguageChapter_number} verse_number Which Verse Number to filter?
		 * @param {ChapterGetByAccess_tokenAndLanguageLanguage} language Language to query. Leave blank for english.
		 * @return {VerseSchema} Success: Everything worked as expected.
		 */
		VerseGetByAccess_tokenAndChapter_numberAndVerse_numberAndLanguage(access_token: string, chapter_number: VerseGetByAccess_tokenAndChapter_numberAndVerse_numberAndLanguageChapter_number, verse_number: ChapterGetByAccess_tokenAndChapter_numberAndLanguageChapter_number, language: ChapterGetByAccess_tokenAndLanguageLanguage | null | undefined): Observable<VerseSchema> {
			return this.http.get<VerseSchema>(this.baseUri + 'api/v1/chapters/' + chapter_number + '/verses/' + verse_number + '?access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&language=' + language, {});
		}

		/**
		 * Get all the Verses.
		 * Get a list of all Verses.<br/>
		 * Get api/v1/verses
		 * @param {string} access_token Your app's access token.
		 * @param {ChapterGetByAccess_tokenAndLanguageLanguage} language Language to query. Leave blank for english.
		 * @return {VerseSchema} Success: Everything worked as expected.
		 */
		VerseGetByAccess_tokenAndLanguage(access_token: string, language: ChapterGetByAccess_tokenAndLanguageLanguage | null | undefined): Observable<VerseSchema> {
			return this.http.get<VerseSchema>(this.baseUri + 'api/v1/verses?access_token=' + (access_token == null ? '' : encodeURIComponent(access_token)) + '&language=' + language, {});
		}
	}

	export enum ChapterGetByAccess_tokenAndLanguageLanguage { hi = 'hi' }

	export enum ChapterGetByAccess_tokenAndChapter_numberAndLanguageChapter_number { _1 = 0, _2 = 1, _3 = 2 }

	export enum VerseGetByAccess_tokenAndChapter_numberAndLanguageChapter_number { _1 = 0, _2 = 1, _3 = 2 }

	export enum VerseGetByAccess_tokenAndChapter_numberAndVerse_numberAndLanguageChapter_number { _1 = 0, _2 = 1, _3 = 2 }

}

