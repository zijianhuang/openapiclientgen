import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Category {
		CategoryName?: string | null;
		Score?: number | null;
	}
	export interface CategoryFormProperties {
		CategoryName: FormControl<string | null | undefined>,
		Score: FormControl<number | null | undefined>,
	}
	export function CreateCategoryFormGroup() {
		return new FormGroup<CategoryFormProperties>({
			CategoryName: new FormControl<string | null | undefined>(undefined),
			Score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Document {
		DocumentLanguage?: string | null;
		DocumentText?: string | null;
		IsTwitterContent?: boolean | null;
		PrivateKey?: string | null;
		Secret?: string | null;
		SerializeFormat?: number | null;
		UserCategoryModelName?: string | null;
	}
	export interface DocumentFormProperties {
		DocumentLanguage: FormControl<string | null | undefined>,
		DocumentText: FormControl<string | null | undefined>,
		IsTwitterContent: FormControl<boolean | null | undefined>,
		PrivateKey: FormControl<string | null | undefined>,
		Secret: FormControl<string | null | undefined>,
		SerializeFormat: FormControl<number | null | undefined>,
		UserCategoryModelName: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			DocumentLanguage: new FormControl<string | null | undefined>(undefined),
			DocumentText: new FormControl<string | null | undefined>(undefined),
			IsTwitterContent: new FormControl<boolean | null | undefined>(undefined),
			PrivateKey: new FormControl<string | null | undefined>(undefined),
			Secret: new FormControl<string | null | undefined>(undefined),
			SerializeFormat: new FormControl<number | null | undefined>(undefined),
			UserCategoryModelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentResult {
		AutoCategories?: Array<Category>;
		Citations?: Array<SentencePart>;
		CloudTagHTML?: string | null;
		CoreSentences?: Array<Sentence>;
		DetectedLanguage?: string | null;
		DocSentimentPolarity?: string | null;
		DocSentimentResultString?: string | null;
		DocSentimentValue?: number | null;
		Entities?: Array<SentencePart>;
		ErrorMessage?: string | null;
		Keywords?: Array<SentencePart>;
		NegativePhraseCount?: number | null;
		NeutralPhraseCount?: number | null;
		PartsOfSpeech?: Array<PartOfSpeech>;
		PositivePhraseCount?: number | null;
		ResultTextHtml?: string | null;
		SlangWords?: Array<SlangWord>;
		Status?: number | null;
		Subjectivity?: string | null;
		Summarization?: string | null;
		SwearWords?: Array<SlangWord>;
		Themes?: Array<SentencePart>;
		TransactionCurrentDay?: number | null;
		TransactionDailyLimit?: number | null;
		TransactionTotalCreditsLeft?: number | null;
		TransactionUseByDate?: Date | null;
		UserCategories?: Array<Category>;
	}
	export interface DocumentResultFormProperties {
		CloudTagHTML: FormControl<string | null | undefined>,
		DetectedLanguage: FormControl<string | null | undefined>,
		DocSentimentPolarity: FormControl<string | null | undefined>,
		DocSentimentResultString: FormControl<string | null | undefined>,
		DocSentimentValue: FormControl<number | null | undefined>,
		ErrorMessage: FormControl<string | null | undefined>,
		NegativePhraseCount: FormControl<number | null | undefined>,
		NeutralPhraseCount: FormControl<number | null | undefined>,
		PositivePhraseCount: FormControl<number | null | undefined>,
		ResultTextHtml: FormControl<string | null | undefined>,
		Status: FormControl<number | null | undefined>,
		Subjectivity: FormControl<string | null | undefined>,
		Summarization: FormControl<string | null | undefined>,
		TransactionCurrentDay: FormControl<number | null | undefined>,
		TransactionDailyLimit: FormControl<number | null | undefined>,
		TransactionTotalCreditsLeft: FormControl<number | null | undefined>,
		TransactionUseByDate: FormControl<Date | null | undefined>,
	}
	export function CreateDocumentResultFormGroup() {
		return new FormGroup<DocumentResultFormProperties>({
			CloudTagHTML: new FormControl<string | null | undefined>(undefined),
			DetectedLanguage: new FormControl<string | null | undefined>(undefined),
			DocSentimentPolarity: new FormControl<string | null | undefined>(undefined),
			DocSentimentResultString: new FormControl<string | null | undefined>(undefined),
			DocSentimentValue: new FormControl<number | null | undefined>(undefined),
			ErrorMessage: new FormControl<string | null | undefined>(undefined),
			NegativePhraseCount: new FormControl<number | null | undefined>(undefined),
			NeutralPhraseCount: new FormControl<number | null | undefined>(undefined),
			PositivePhraseCount: new FormControl<number | null | undefined>(undefined),
			ResultTextHtml: new FormControl<string | null | undefined>(undefined),
			Status: new FormControl<number | null | undefined>(undefined),
			Subjectivity: new FormControl<string | null | undefined>(undefined),
			Summarization: new FormControl<string | null | undefined>(undefined),
			TransactionCurrentDay: new FormControl<number | null | undefined>(undefined),
			TransactionDailyLimit: new FormControl<number | null | undefined>(undefined),
			TransactionTotalCreditsLeft: new FormControl<number | null | undefined>(undefined),
			TransactionUseByDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SentencePart {
		KeywordType?: string | null;
		Mentions?: number | null;
		SentencePartType?: string | null;
		SentenceText?: string | null;
		SentimentPolarity?: string | null;
		SentimentResult?: string | null;
		SentimentValue?: number | null;
		Text?: string | null;
	}
	export interface SentencePartFormProperties {
		KeywordType: FormControl<string | null | undefined>,
		Mentions: FormControl<number | null | undefined>,
		SentencePartType: FormControl<string | null | undefined>,
		SentenceText: FormControl<string | null | undefined>,
		SentimentPolarity: FormControl<string | null | undefined>,
		SentimentResult: FormControl<string | null | undefined>,
		SentimentValue: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSentencePartFormGroup() {
		return new FormGroup<SentencePartFormProperties>({
			KeywordType: new FormControl<string | null | undefined>(undefined),
			Mentions: new FormControl<number | null | undefined>(undefined),
			SentencePartType: new FormControl<string | null | undefined>(undefined),
			SentenceText: new FormControl<string | null | undefined>(undefined),
			SentimentPolarity: new FormControl<string | null | undefined>(undefined),
			SentimentResult: new FormControl<string | null | undefined>(undefined),
			SentimentValue: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sentence {
		Relevance?: number | null;
		SentenceNumber?: number | null;
		SentimentPolarity?: string | null;
		SentimentResultString?: string | null;
		SentimentValue?: number | null;
		Text?: string | null;
	}
	export interface SentenceFormProperties {
		Relevance: FormControl<number | null | undefined>,
		SentenceNumber: FormControl<number | null | undefined>,
		SentimentPolarity: FormControl<string | null | undefined>,
		SentimentResultString: FormControl<string | null | undefined>,
		SentimentValue: FormControl<number | null | undefined>,
		Text: FormControl<string | null | undefined>,
	}
	export function CreateSentenceFormGroup() {
		return new FormGroup<SentenceFormProperties>({
			Relevance: new FormControl<number | null | undefined>(undefined),
			SentenceNumber: new FormControl<number | null | undefined>(undefined),
			SentimentPolarity: new FormControl<string | null | undefined>(undefined),
			SentimentResultString: new FormControl<string | null | undefined>(undefined),
			SentimentValue: new FormControl<number | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PartOfSpeech {
		Action?: string | null;
		Object?: string | null;
		ObjectSentimentPolarity?: string | null;
		ObjectSentimentResultString?: string | null;
		ObjectSentimentValue?: number | null;
		Subject?: string | null;
		Text?: string | null;
	}
	export interface PartOfSpeechFormProperties {
		Action: FormControl<string | null | undefined>,
		Object: FormControl<string | null | undefined>,
		ObjectSentimentPolarity: FormControl<string | null | undefined>,
		ObjectSentimentResultString: FormControl<string | null | undefined>,
		ObjectSentimentValue: FormControl<number | null | undefined>,
		Subject: FormControl<string | null | undefined>,
		Text: FormControl<string | null | undefined>,
	}
	export function CreatePartOfSpeechFormGroup() {
		return new FormGroup<PartOfSpeechFormProperties>({
			Action: new FormControl<string | null | undefined>(undefined),
			Object: new FormControl<string | null | undefined>(undefined),
			ObjectSentimentPolarity: new FormControl<string | null | undefined>(undefined),
			ObjectSentimentResultString: new FormControl<string | null | undefined>(undefined),
			ObjectSentimentValue: new FormControl<number | null | undefined>(undefined),
			Subject: new FormControl<string | null | undefined>(undefined),
			Text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SlangWord {
		SlangWordText?: string | null;
		SlangWordTranslation?: string | null;
	}
	export interface SlangWordFormProperties {
		SlangWordText: FormControl<string | null | undefined>,
		SlangWordTranslation: FormControl<string | null | undefined>,
	}
	export function CreateSlangWordFormGroup() {
		return new FormGroup<SlangWordFormProperties>({
			SlangWordText: new FormControl<string | null | undefined>(undefined),
			SlangWordTranslation: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get api/Root
		 * @return {DocumentResult} OK
		 */
		Root_Get(): Observable<DocumentResult> {
			return this.http.get<DocumentResult>(this.baseUri + 'api/Root', {});
		}

		/**
		 * Post api/Root
		 * @return {DocumentResult} OK
		 */
		Root_Post(requestBody: Document): Observable<DocumentResult> {
			return this.http.post<DocumentResult>(this.baseUri + 'api/Root', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

