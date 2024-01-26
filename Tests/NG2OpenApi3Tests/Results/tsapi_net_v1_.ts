import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AltLabel {
		langIdent?: string | null;
		mode?: AltLabelMode;
		text?: string | null;
	}
	export interface AltLabelFormProperties {
		langIdent: FormControl<string | null | undefined>,
		mode: FormControl<AltLabelMode | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateAltLabelFormGroup() {
		return new FormGroup<AltLabelFormProperties>({
			langIdent: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<AltLabelMode | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AltLabelMode { _1 = 0, _2 = 1 }

	export interface DataItem {
		ident?: string | null;
		parentIdent?: ParentRef;
		values?: Array<string>;
	}
	export interface DataItemFormProperties {
		ident: FormControl<string | null | undefined>,
	}
	export function CreateDataItemFormGroup() {
		return new FormGroup<DataItemFormProperties>({
			ident: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ParentRef {
		parentValueIdent?: string | null;
		parentVariableIdent?: string | null;
	}
	export interface ParentRefFormProperties {
		parentValueIdent: FormControl<string | null | undefined>,
		parentVariableIdent: FormControl<string | null | undefined>,
	}
	export function CreateParentRefFormGroup() {
		return new FormGroup<ParentRefFormProperties>({
			parentValueIdent: new FormControl<string | null | undefined>(undefined),
			parentVariableIdent: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HierarchicalInterview {
		dataItems?: Array<DataItem>;
		hierarchicalInterviews?: Array<HierarchicalInterview>;
		ident?: string | null;
		level?: Level;
	}
	export interface HierarchicalInterviewFormProperties {
		ident: FormControl<string | null | undefined>,
	}
	export function CreateHierarchicalInterviewFormGroup() {
		return new FormGroup<HierarchicalInterviewFormProperties>({
			ident: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Level {
		ident?: string | null;
	}
	export interface LevelFormProperties {
		ident: FormControl<string | null | undefined>,
	}
	export function CreateLevelFormGroup() {
		return new FormGroup<LevelFormProperties>({
			ident: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Hierarchy {
		ident?: string | null;
		metadata?: SurveyMetadataBase;
		parent?: ParentDetails;
	}
	export interface HierarchyFormProperties {
		ident: FormControl<string | null | undefined>,
	}
	export function CreateHierarchyFormGroup() {
		return new FormGroup<HierarchyFormProperties>({
			ident: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SurveyMetadataBase {
		interviewCount?: number | null;
		languages?: Array<Language>;
		name?: string | null;
		title?: string | null;
		variables?: Array<Variable>;
	}
	export interface SurveyMetadataBaseFormProperties {
		interviewCount: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSurveyMetadataBaseFormGroup() {
		return new FormGroup<SurveyMetadataBaseFormProperties>({
			interviewCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Language {
		ident?: string | null;
		name?: string | null;
		subLanguages?: Array<Language>;
	}
	export interface LanguageFormProperties {
		ident: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateLanguageFormGroup() {
		return new FormGroup<LanguageFormProperties>({
			ident: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Variable {
		ident?: string | null;
		label?: Label;
		maxResponses?: number | null;
		name?: string | null;
		parentType?: ParentType;
		questions?: Array<Variable>;
		type?: VariableType;
		use?: UseType;
		variableValues?: VariableValues;
	}
	export interface VariableFormProperties {
		ident: FormControl<string | null | undefined>,
		maxResponses: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		parentType: FormControl<ParentType | null | undefined>,
		type: FormControl<VariableType | null | undefined>,
		use: FormControl<UseType | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			ident: new FormControl<string | null | undefined>(undefined),
			maxResponses: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentType: new FormControl<ParentType | null | undefined>(undefined),
			type: new FormControl<VariableType | null | undefined>(undefined),
			use: new FormControl<UseType | null | undefined>(undefined),
		});

	}

	export interface Label {
		altLabels?: Array<AltLabel>;
		text?: string | null;
	}
	export interface LabelFormProperties {
		text: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParentType { _1 = 0, _2 = 1, _3 = 2 }

	export enum VariableType { _1 = 0, _2 = 1, _3 = 2, _4 = 3, _5 = 4, _6 = 5, _7 = 6, _8 = 7 }

	export enum UseType { _1 = 0, _2 = 1, _3 = 2, _4 = 3 }

	export interface VariableValues {
		range?: ValueRange;
		values?: Array<Value>;
	}
	export interface VariableValuesFormProperties {
	}
	export function CreateVariableValuesFormGroup() {
		return new FormGroup<VariableValuesFormProperties>({
		});

	}

	export interface ValueRange {
		from?: string | null;
		to?: string | null;
	}
	export interface ValueRangeFormProperties {
		from: FormControl<string | null | undefined>,
		to: FormControl<string | null | undefined>,
	}
	export function CreateValueRangeFormGroup() {
		return new FormGroup<ValueRangeFormProperties>({
			from: new FormControl<string | null | undefined>(undefined),
			to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Value {
		code?: string | null;
		ident?: string | null;
		label?: Label;
		score?: number | null;
	}
	export interface ValueFormProperties {
		code: FormControl<string | null | undefined>,
		ident: FormControl<string | null | undefined>,
		score: FormControl<number | null | undefined>,
	}
	export function CreateValueFormGroup() {
		return new FormGroup<ValueFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			ident: new FormControl<string | null | undefined>(undefined),
			score: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ParentDetails {
		level?: string | null;
		linkVar?: string | null;
		ordered?: boolean | null;
	}
	export interface ParentDetailsFormProperties {
		level: FormControl<string | null | undefined>,
		linkVar: FormControl<string | null | undefined>,
		ordered: FormControl<boolean | null | undefined>,
	}
	export function CreateParentDetailsFormGroup() {
		return new FormGroup<ParentDetailsFormProperties>({
			level: new FormControl<string | null | undefined>(undefined),
			linkVar: new FormControl<string | null | undefined>(undefined),
			ordered: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Interview {
		dataItems?: Array<DataItem>;
		hierarchicalInterviews?: Array<HierarchicalInterview>;
		ident?: string | null;
	}
	export interface InterviewFormProperties {
		ident: FormControl<string | null | undefined>,
	}
	export function CreateInterviewFormGroup() {
		return new FormGroup<InterviewFormProperties>({
			ident: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SurveyDetail {
		id?: string | null;
		name?: string | null;
		title?: string | null;
	}
	export interface SurveyDetailFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSurveyDetailFormGroup() {
		return new FormGroup<SurveyDetailFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SurveyMetadata {
		hierarchies?: Array<Hierarchy>;
		interviewCount?: number | null;
		languages?: Array<Language>;
		name?: string | null;
		title?: string | null;
		variables?: Array<Variable>;
	}
	export interface SurveyMetadataFormProperties {
		interviewCount: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateSurveyMetadataFormGroup() {
		return new FormGroup<SurveyMetadataFormProperties>({
			interviewCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of available Surveys
		 * Get Surveys
		 * @return {Array<SurveyDetail>} Success
		 */
		SurveysGet(): Observable<Array<SurveyDetail>> {
			return this.http.get<Array<SurveyDetail>>(this.baseUri + 'Surveys', {});
		}

		/**
		 * Fetches some interview records for a specific survey
		 * Get Surveys/{surveyId}/Interviews
		 * @return {Array<Interview>} Success
		 */
		SurveysGetBySurveyIdAndStartAndMaxLength(surveyId: string, start: number | null | undefined, maxLength: number | null | undefined): Observable<Array<Interview>> {
			return this.http.get<Array<Interview>>(this.baseUri + 'Surveys/' + (surveyId == null ? '' : encodeURIComponent(surveyId)) + '/Interviews&start=' + start + '&maxLength=' + maxLength, {});
		}

		/**
		 * Fetches the metadata for a specific survey
		 * Get Surveys/{surveyId}/Metadata
		 * @return {SurveyMetadata} Success
		 */
		SurveysGetBySurveyId(surveyId: string): Observable<SurveyMetadata> {
			return this.http.get<SurveyMetadata>(this.baseUri + 'Surveys/' + (surveyId == null ? '' : encodeURIComponent(surveyId)) + '/Metadata', {});
		}
	}

}

