import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Answered { Any = 'Any', Answered = 'Answered', Unanswered = 'Unanswered' }

	export interface AttachmentViewModel {
		fileSizeBytes?: number | null;
		fileType?: string | null;
		title?: string | null;
		url?: string | null;
	}
	export interface AttachmentViewModelFormProperties {
		fileSizeBytes: FormControl<number | null | undefined>,
		fileType: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateAttachmentViewModelFormGroup() {
		return new FormGroup<AttachmentViewModelFormProperties>({
			fileSizeBytes: new FormControl<number | null | undefined>(undefined),
			fileType: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DailyReportViewModel {
		date?: Date | null;
		fileSizeBytes?: number | null;
		house?: DailyReportViewModelHouse | null;
		url?: string | null;
	}
	export interface DailyReportViewModelFormProperties {
		date: FormControl<Date | null | undefined>,
		fileSizeBytes: FormControl<number | null | undefined>,
		house: FormControl<DailyReportViewModelHouse | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateDailyReportViewModelFormGroup() {
		return new FormGroup<DailyReportViewModelFormProperties>({
			date: new FormControl<Date | null | undefined>(undefined),
			fileSizeBytes: new FormControl<number | null | undefined>(undefined),
			house: new FormControl<DailyReportViewModelHouse | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DailyReportViewModelHouse { Bicameral = 'Bicameral', Commons = 'Commons', Lords = 'Lords' }

	export interface DailyReportViewModelItem {
		links?: Array<Link>;
		value?: DailyReportViewModel;
	}
	export interface DailyReportViewModelItemFormProperties {
	}
	export function CreateDailyReportViewModelItemFormGroup() {
		return new FormGroup<DailyReportViewModelItemFormProperties>({
		});

	}

	export interface Link {
		href?: string | null;
		method?: string | null;
		rel?: string | null;
	}
	export interface LinkFormProperties {
		href: FormControl<string | null | undefined>,
		method: FormControl<string | null | undefined>,
		rel: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			href: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			rel: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DailyReportViewModelSearchResult {
		results?: Array<DailyReportViewModelItem>;
		totalResults?: number | null;
	}
	export interface DailyReportViewModelSearchResultFormProperties {
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateDailyReportViewModelSearchResultFormGroup() {
		return new FormGroup<DailyReportViewModelSearchResultFormProperties>({
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GroupedQuestionViewModel {
		dateTabled?: Date | null;
		questionUin?: string | null;
	}
	export interface GroupedQuestionViewModelFormProperties {
		dateTabled: FormControl<Date | null | undefined>,
		questionUin: FormControl<string | null | undefined>,
	}
	export function CreateGroupedQuestionViewModelFormGroup() {
		return new FormGroup<GroupedQuestionViewModelFormProperties>({
			dateTabled: new FormControl<Date | null | undefined>(undefined),
			questionUin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum HouseEnum { Bicameral = 'Bicameral', Commons = 'Commons', Lords = 'Lords' }

	export interface LinkedStatements {
		linkDate?: Date | null;
		linkType?: LinkedStatementsLinkType | null;
		linkedStatementId?: number | null;
	}
	export interface LinkedStatementsFormProperties {
		linkDate: FormControl<Date | null | undefined>,
		linkType: FormControl<LinkedStatementsLinkType | null | undefined>,
		linkedStatementId: FormControl<number | null | undefined>,
	}
	export function CreateLinkedStatementsFormGroup() {
		return new FormGroup<LinkedStatementsFormProperties>({
			linkDate: new FormControl<Date | null | undefined>(undefined),
			linkType: new FormControl<LinkedStatementsLinkType | null | undefined>(undefined),
			linkedStatementId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum LinkedStatementsLinkType { CorrectedStatement = 'CorrectedStatement', CorrectedAnswer = 'CorrectedAnswer', JointStatement = 'JointStatement' }

	export interface MemberViewModel {
		id?: number | null;
		listAs?: string | null;
		memberFrom?: string | null;
		name?: string | null;
		party?: string | null;
		partyAbbreviation?: string | null;
		partyColour?: string | null;
		thumbnailUrl?: string | null;
	}
	export interface MemberViewModelFormProperties {
		id: FormControl<number | null | undefined>,
		listAs: FormControl<string | null | undefined>,
		memberFrom: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		party: FormControl<string | null | undefined>,
		partyAbbreviation: FormControl<string | null | undefined>,
		partyColour: FormControl<string | null | undefined>,
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateMemberViewModelFormGroup() {
		return new FormGroup<MemberViewModelFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			listAs: new FormControl<string | null | undefined>(undefined),
			memberFrom: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			party: new FormControl<string | null | undefined>(undefined),
			partyAbbreviation: new FormControl<string | null | undefined>(undefined),
			partyColour: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProblemDetails {
		detail?: string | null;
		instance?: string | null;
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}
	export interface ProblemDetailsFormProperties {
		detail: FormControl<string | null | undefined>,
		instance: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailsFormGroup() {
		return new FormGroup<ProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QuestionStatusEnum { NotAnswered = 'NotAnswered', AnsweredOnly = 'AnsweredOnly', AllQuestions = 'AllQuestions' }

	export interface QuestionsViewModel {
		answerIsCorrection?: boolean | null;
		answerIsHolding?: boolean | null;
		answerText?: string | null;
		answeringBodyId?: number | null;
		answeringBodyName?: string | null;
		answeringMember?: MemberViewModel;
		answeringMemberId?: number | null;
		askingMember?: MemberViewModel;
		askingMemberId?: number | null;
		attachmentCount?: number | null;
		attachments?: Array<AttachmentViewModel>;
		comparableAnswerText?: string | null;
		correctingMember?: MemberViewModel;
		correctingMemberId?: number | null;
		dateAnswerCorrected?: Date | null;
		dateAnswered?: Date | null;
		dateForAnswer?: Date | null;
		dateHoldingAnswer?: Date | null;
		dateTabled?: Date | null;
		groupedQuestions?: Array<string>;
		groupedQuestionsDates?: Array<GroupedQuestionViewModel>;
		heading?: string | null;
		house?: DailyReportViewModelHouse | null;
		id?: number | null;
		isNamedDay?: boolean | null;
		isWithdrawn?: boolean | null;
		memberHasInterest?: boolean | null;
		originalAnswerText?: string | null;
		questionText?: string | null;
		uin?: string | null;
	}
	export interface QuestionsViewModelFormProperties {
		answerIsCorrection: FormControl<boolean | null | undefined>,
		answerIsHolding: FormControl<boolean | null | undefined>,
		answerText: FormControl<string | null | undefined>,
		answeringBodyId: FormControl<number | null | undefined>,
		answeringBodyName: FormControl<string | null | undefined>,
		answeringMemberId: FormControl<number | null | undefined>,
		askingMemberId: FormControl<number | null | undefined>,
		attachmentCount: FormControl<number | null | undefined>,
		comparableAnswerText: FormControl<string | null | undefined>,
		correctingMemberId: FormControl<number | null | undefined>,
		dateAnswerCorrected: FormControl<Date | null | undefined>,
		dateAnswered: FormControl<Date | null | undefined>,
		dateForAnswer: FormControl<Date | null | undefined>,
		dateHoldingAnswer: FormControl<Date | null | undefined>,
		dateTabled: FormControl<Date | null | undefined>,
		heading: FormControl<string | null | undefined>,
		house: FormControl<DailyReportViewModelHouse | null | undefined>,
		id: FormControl<number | null | undefined>,
		isNamedDay: FormControl<boolean | null | undefined>,
		isWithdrawn: FormControl<boolean | null | undefined>,
		memberHasInterest: FormControl<boolean | null | undefined>,
		originalAnswerText: FormControl<string | null | undefined>,
		questionText: FormControl<string | null | undefined>,
		uin: FormControl<string | null | undefined>,
	}
	export function CreateQuestionsViewModelFormGroup() {
		return new FormGroup<QuestionsViewModelFormProperties>({
			answerIsCorrection: new FormControl<boolean | null | undefined>(undefined),
			answerIsHolding: new FormControl<boolean | null | undefined>(undefined),
			answerText: new FormControl<string | null | undefined>(undefined),
			answeringBodyId: new FormControl<number | null | undefined>(undefined),
			answeringBodyName: new FormControl<string | null | undefined>(undefined),
			answeringMemberId: new FormControl<number | null | undefined>(undefined),
			askingMemberId: new FormControl<number | null | undefined>(undefined),
			attachmentCount: new FormControl<number | null | undefined>(undefined),
			comparableAnswerText: new FormControl<string | null | undefined>(undefined),
			correctingMemberId: new FormControl<number | null | undefined>(undefined),
			dateAnswerCorrected: new FormControl<Date | null | undefined>(undefined),
			dateAnswered: new FormControl<Date | null | undefined>(undefined),
			dateForAnswer: new FormControl<Date | null | undefined>(undefined),
			dateHoldingAnswer: new FormControl<Date | null | undefined>(undefined),
			dateTabled: new FormControl<Date | null | undefined>(undefined),
			heading: new FormControl<string | null | undefined>(undefined),
			house: new FormControl<DailyReportViewModelHouse | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isNamedDay: new FormControl<boolean | null | undefined>(undefined),
			isWithdrawn: new FormControl<boolean | null | undefined>(undefined),
			memberHasInterest: new FormControl<boolean | null | undefined>(undefined),
			originalAnswerText: new FormControl<string | null | undefined>(undefined),
			questionText: new FormControl<string | null | undefined>(undefined),
			uin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface QuestionsViewModelItem {
		links?: Array<Link>;
		value?: QuestionsViewModel;
	}
	export interface QuestionsViewModelItemFormProperties {
	}
	export function CreateQuestionsViewModelItemFormGroup() {
		return new FormGroup<QuestionsViewModelItemFormProperties>({
		});

	}

	export interface QuestionsViewModelSearchResult {
		results?: Array<QuestionsViewModelItem>;
		totalResults?: number | null;
	}
	export interface QuestionsViewModelSearchResultFormProperties {
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateQuestionsViewModelSearchResultFormGroup() {
		return new FormGroup<QuestionsViewModelSearchResultFormProperties>({
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum StatementLinkTypeEnum { CorrectedStatement = 'CorrectedStatement', CorrectedAnswer = 'CorrectedAnswer', JointStatement = 'JointStatement' }

	export interface StatementsViewModel {
		answeringBodyId?: number | null;
		answeringBodyName?: string | null;
		attachments?: Array<AttachmentViewModel>;
		dateMade?: Date | null;
		hasAttachments?: boolean | null;
		hasLinkedStatements?: boolean | null;
		house?: DailyReportViewModelHouse | null;
		id?: number | null;
		linkedStatements?: Array<LinkedStatements>;
		member?: MemberViewModel;
		memberId?: number | null;
		memberRole?: string | null;
		noticeNumber?: number | null;
		text?: string | null;
		title?: string | null;
		uin?: string | null;
	}
	export interface StatementsViewModelFormProperties {
		answeringBodyId: FormControl<number | null | undefined>,
		answeringBodyName: FormControl<string | null | undefined>,
		dateMade: FormControl<Date | null | undefined>,
		hasAttachments: FormControl<boolean | null | undefined>,
		hasLinkedStatements: FormControl<boolean | null | undefined>,
		house: FormControl<DailyReportViewModelHouse | null | undefined>,
		id: FormControl<number | null | undefined>,
		memberId: FormControl<number | null | undefined>,
		memberRole: FormControl<string | null | undefined>,
		noticeNumber: FormControl<number | null | undefined>,
		text: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		uin: FormControl<string | null | undefined>,
	}
	export function CreateStatementsViewModelFormGroup() {
		return new FormGroup<StatementsViewModelFormProperties>({
			answeringBodyId: new FormControl<number | null | undefined>(undefined),
			answeringBodyName: new FormControl<string | null | undefined>(undefined),
			dateMade: new FormControl<Date | null | undefined>(undefined),
			hasAttachments: new FormControl<boolean | null | undefined>(undefined),
			hasLinkedStatements: new FormControl<boolean | null | undefined>(undefined),
			house: new FormControl<DailyReportViewModelHouse | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			memberId: new FormControl<number | null | undefined>(undefined),
			memberRole: new FormControl<string | null | undefined>(undefined),
			noticeNumber: new FormControl<number | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			uin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StatementsViewModelItem {
		links?: Array<Link>;
		value?: StatementsViewModel;
	}
	export interface StatementsViewModelItemFormProperties {
	}
	export function CreateStatementsViewModelItemFormGroup() {
		return new FormGroup<StatementsViewModelItemFormProperties>({
		});

	}

	export interface StatementsViewModelSearchResult {
		results?: Array<StatementsViewModelItem>;
		totalResults?: number | null;
	}
	export interface StatementsViewModelSearchResultFormProperties {
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateStatementsViewModelSearchResultFormGroup() {
		return new FormGroup<StatementsViewModelSearchResultFormProperties>({
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of daily reports
		 * Get api/dailyreports/dailyreports
		 * @param {Date} dateFrom Daily report with report date on or after the date specified. Date format yyyy-mm-dd
		 * @param {Date} dateTo Daily report with report date on or before the date specified. Date format yyyy-mm-dd
		 * @param {DailyReportViewModelHouse} house Daily report relating to the House specified. Defaults to Bicameral
		 * @param {number} skip Number of records to skip, default is 0
		 * @param {number} take Number of records to take, default is 20
		 * @return {DailyReportViewModelSearchResult} Success
		 */
		DailyReportsGetByDateFromAndDateToAndHouseAndSkipAndTake(dateFrom: Date | null | undefined, dateTo: Date | null | undefined, house: DailyReportViewModelHouse | null | undefined, skip: number | null | undefined, take: number | null | undefined): Observable<DailyReportViewModelSearchResult> {
			return this.http.get<DailyReportViewModelSearchResult>(this.baseUri + 'api/dailyreports/dailyreports?dateFrom=' + dateFrom?.toISOString() + '&dateTo=' + dateTo?.toISOString() + '&house=' + house + '&skip=' + skip + '&take=' + take, {});
		}

		/**
		 * Returns a list of written questions
		 * Get api/writtenquestions/questions
		 * @param {number} askingMemberId Written questions asked by member with member ID specified
		 * @param {number} answeringMemberId Written questions answered by member with member ID specified
		 * @param {Date} tabledWhenFrom Written questions tabled on or after the date specified. Date format yyyy-mm-dd
		 * @param {Date} tabledWhenTo Written questions tabled on or before the date specified. Date format yyyy-mm-dd
		 * @param {Answered} answered Written questions that have been answered, unanswered or either.
		 * @param {Date} answeredWhenFrom Written questions answered on or after the date specified. Date format yyyy-mm-dd
		 * @param {Date} answeredWhenTo Written questions answered on or before the date specified. Date format yyyy-mm-dd
		 * @param {QuestionStatusEnum} questionStatus Written questions with the status specified
		 * @param {boolean} includeWithdrawn Include written questions that have been withdrawn
		 * @param {boolean} expandMember Expand the details of Members in the results
		 * @param {Date} correctedWhenFrom Written questions corrected on or after the date specified. Date format yyyy-mm-dd
		 * @param {Date} correctedWhenTo Written questions corrected on or before the date specified. Date format yyyy-mm-dd
		 * @param {string} searchTerm Written questions / statements containing the search term specified, searches item content
		 * @param {string} uIN Written questions / statements with the uin specified
		 * @param {Array<number>} answeringBodies Written questions / statements relating to the answering bodies with the IDs specified
		 * @param {Array<number>} members Written questions / statements relating to the members with the IDs specified
		 * @param {DailyReportViewModelHouse} house Written questions / statements relating to the House specified
		 * @param {number} skip Number of records to skip, default is 0
		 * @param {number} take Number of records to take, default is 20
		 * @return {QuestionsViewModelSearchResult} Success
		 */
		WrittenQuestionsGetByAskingMemberIdAndAnsweringMemberIdAndTabledWhenFromAndTabledWhenToAndAnsweredAndAnsweredWhenFromAndAnsweredWhenToAndQuestionStatusAndIncludeWithdrawnAndExpandMemberAndCorrectedWhenFromAndCorrectedWhenToAndSearchTermAndUINAndAnsweringBodiesAndMembersAndHouseAndSkipAndTake(askingMemberId: number | null | undefined, answeringMemberId: number | null | undefined, tabledWhenFrom: Date | null | undefined, tabledWhenTo: Date | null | undefined, answered: Answered | null | undefined, answeredWhenFrom: Date | null | undefined, answeredWhenTo: Date | null | undefined, questionStatus: QuestionStatusEnum | null | undefined, includeWithdrawn: boolean | null | undefined, expandMember: boolean | null | undefined, correctedWhenFrom: Date | null | undefined, correctedWhenTo: Date | null | undefined, searchTerm: string | null | undefined, uIN: string | null | undefined, answeringBodies: Array<number> | null | undefined, members: Array<number> | null | undefined, house: DailyReportViewModelHouse | null | undefined, skip: number | null | undefined, take: number | null | undefined): Observable<QuestionsViewModelSearchResult> {
			return this.http.get<QuestionsViewModelSearchResult>(this.baseUri + 'api/writtenquestions/questions?askingMemberId=' + askingMemberId + '&answeringMemberId=' + answeringMemberId + '&tabledWhenFrom=' + tabledWhenFrom?.toISOString() + '&tabledWhenTo=' + tabledWhenTo?.toISOString() + '&answered=' + answered + '&answeredWhenFrom=' + answeredWhenFrom?.toISOString() + '&answeredWhenTo=' + answeredWhenTo?.toISOString() + '&questionStatus=' + questionStatus + '&includeWithdrawn=' + includeWithdrawn + '&expandMember=' + expandMember + '&correctedWhenFrom=' + correctedWhenFrom?.toISOString() + '&correctedWhenTo=' + correctedWhenTo?.toISOString() + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&uIN=' + (uIN == null ? '' : encodeURIComponent(uIN)) + '&' + answeringBodies?.map(z => `answeringBodies=${z}`).join('&') + '&' + members?.map(z => `members=${z}`).join('&') + '&house=' + house + '&skip=' + skip + '&take=' + take, {});
		}

		/**
		 * Returns a written question
		 * Get api/writtenquestions/questions/{date}/{uin}
		 * @param {Date} date Written question on date specified
		 * @param {string} uin Written question with uid specified
		 * @param {boolean} expandMember Expand the details of Members in the results
		 * @return {QuestionsViewModelItem} Success
		 */
		WrittenQuestionsGetByDateAndUinAndExpandMember(date: Date, uin: string, expandMember: boolean | null | undefined): Observable<QuestionsViewModelItem> {
			return this.http.get<QuestionsViewModelItem>(this.baseUri + 'api/writtenquestions/questions/' + date.toISOString() + '/' + (uin == null ? '' : encodeURIComponent(uin)) + '&expandMember=' + expandMember, {});
		}

		/**
		 * Returns a written question
		 * Get api/writtenquestions/questions/{id}
		 * @param {number} id written question with ID specified
		 * @param {boolean} expandMember Expand the details of Members in the result
		 * @return {QuestionsViewModelItem} Success
		 */
		WrittenQuestionsGetByIdAndExpandMember(id: number, expandMember: boolean | null | undefined): Observable<QuestionsViewModelItem> {
			return this.http.get<QuestionsViewModelItem>(this.baseUri + 'api/writtenquestions/questions/' + id + '?expandMember=' + expandMember, {});
		}

		/**
		 * Returns a list of written statements
		 * Get api/writtenstatements/statements
		 * @param {Date} madeWhenFrom Written statements made on or after the date specified. Date format yyyy-mm-dd
		 * @param {Date} madeWhenTo Written statements made on or before the date specified. Date format yyyy-mm-dd
		 * @param {string} searchTerm Written questions / statements containing the search term specified, searches item content
		 * @param {string} uIN Written questions / statements with the uin specified
		 * @param {Array<number>} answeringBodies Written questions / statements relating to the answering bodies with the IDs specified
		 * @param {Array<number>} members Written questions / statements relating to the members with the IDs specified
		 * @param {DailyReportViewModelHouse} house Written questions / statements relating to the House specified
		 * @param {number} skip Number of records to skip, default is 0
		 * @param {number} take Number of records to take, default is 20
		 * @param {boolean} expandMember Expand the details of Members in the results
		 * @return {StatementsViewModelSearchResult} Success
		 */
		WrittenStatementsGetByMadeWhenFromAndMadeWhenToAndSearchTermAndUINAndAnsweringBodiesAndMembersAndHouseAndSkipAndTakeAndExpandMember(madeWhenFrom: Date | null | undefined, madeWhenTo: Date | null | undefined, searchTerm: string | null | undefined, uIN: string | null | undefined, answeringBodies: Array<number> | null | undefined, members: Array<number> | null | undefined, house: DailyReportViewModelHouse | null | undefined, skip: number | null | undefined, take: number | null | undefined, expandMember: boolean | null | undefined): Observable<StatementsViewModelSearchResult> {
			return this.http.get<StatementsViewModelSearchResult>(this.baseUri + 'api/writtenstatements/statements?madeWhenFrom=' + madeWhenFrom?.toISOString() + '&madeWhenTo=' + madeWhenTo?.toISOString() + '&searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&uIN=' + (uIN == null ? '' : encodeURIComponent(uIN)) + '&' + answeringBodies?.map(z => `answeringBodies=${z}`).join('&') + '&' + members?.map(z => `members=${z}`).join('&') + '&house=' + house + '&skip=' + skip + '&take=' + take + '&expandMember=' + expandMember, {});
		}

		/**
		 * Returns a written statemnet
		 * Get api/writtenstatements/statements/{date}/{uin}
		 * @param {Date} date Written statement on date specified
		 * @param {string} uin Written statement with uid specified
		 * @param {boolean} expandMember Expand the details of Members in the results
		 * @return {StatementsViewModelItem} Success
		 */
		WrittenStatementsGetByDateAndUinAndExpandMember(date: Date, uin: string, expandMember: boolean | null | undefined): Observable<StatementsViewModelItem> {
			return this.http.get<StatementsViewModelItem>(this.baseUri + 'api/writtenstatements/statements/' + date.toISOString() + '/' + (uin == null ? '' : encodeURIComponent(uin)) + '&expandMember=' + expandMember, {});
		}

		/**
		 * Returns a written statement
		 * Get api/writtenstatements/statements/{id}
		 * @param {number} id Written statement with ID specified
		 * @param {boolean} expandMember Expand the details of Members in the results
		 * @return {StatementsViewModelSearchResult} Success
		 */
		WrittenStatementsGetByIdAndExpandMember(id: number, expandMember: boolean | null | undefined): Observable<StatementsViewModelSearchResult> {
			return this.http.get<StatementsViewModelSearchResult>(this.baseUri + 'api/writtenstatements/statements/' + id + '?expandMember=' + expandMember, {});
		}
	}

}

