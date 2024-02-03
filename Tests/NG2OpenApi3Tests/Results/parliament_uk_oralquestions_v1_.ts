import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ApiResponse_List_PublishedEarlyDayMotion_ {
		Errors?: Array<string>;
		PagingInfo?: PagingInfo;
		Response?: Array<PublishedEarlyDayMotion>;
		StatusCode?: ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null;
		Success?: boolean | null;
	}
	export interface ApiResponse_List_PublishedEarlyDayMotion_FormProperties {
		StatusCode: FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>,
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateApiResponse_List_PublishedEarlyDayMotion_FormGroup() {
		return new FormGroup<ApiResponse_List_PublishedEarlyDayMotion_FormProperties>({
			StatusCode: new FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>(undefined),
			Success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PagingInfo {
		GlobalStatusCounts?: Array<StatusCount>;
		GlobalTotal?: number | null;
		Skip?: number | null;
		StatusCounts?: Array<StatusCount>;
		Take?: number | null;
		Total?: number | null;
	}
	export interface PagingInfoFormProperties {
		GlobalTotal: FormControl<number | null | undefined>,
		Skip: FormControl<number | null | undefined>,
		Take: FormControl<number | null | undefined>,
		Total: FormControl<number | null | undefined>,
	}
	export function CreatePagingInfoFormGroup() {
		return new FormGroup<PagingInfoFormProperties>({
			GlobalTotal: new FormControl<number | null | undefined>(undefined),
			Skip: new FormControl<number | null | undefined>(undefined),
			Take: new FormControl<number | null | undefined>(undefined),
			Total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StatusCount {
		Count?: number | null;
		StatusId?: number | null;
	}
	export interface StatusCountFormProperties {
		Count: FormControl<number | null | undefined>,
		StatusId: FormControl<number | null | undefined>,
	}
	export function CreateStatusCountFormGroup() {
		return new FormGroup<StatusCountFormProperties>({
			Count: new FormControl<number | null | undefined>(undefined),
			StatusId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PublishedEarlyDayMotion {
		AmendmentSuffix?: string | null;
		AmendmentToMotionId?: number | null;
		DateTabled?: Date | null;
		Id?: number | null;
		MemberId?: number | null;
		MotionText?: string | null;
		PrayingAgainstNegativeStatutoryInstrumentId?: number | null;
		PrimarySponsor?: MemberForDate;
		SponsorsCount?: number | null;
		Status?: PublishedEarlyDayMotionStatus | null;
		StatusDate?: Date | null;
		StatutoryInstrumentNumber?: number | null;
		StatutoryInstrumentTitle?: string | null;
		StatutoryInstrumentYear?: string | null;
		Title?: string | null;
		UIN?: number | null;
		UINWithAmendmentSuffix?: string | null;
	}
	export interface PublishedEarlyDayMotionFormProperties {
		AmendmentSuffix: FormControl<string | null | undefined>,
		AmendmentToMotionId: FormControl<number | null | undefined>,
		DateTabled: FormControl<Date | null | undefined>,
		Id: FormControl<number | null | undefined>,
		MemberId: FormControl<number | null | undefined>,
		MotionText: FormControl<string | null | undefined>,
		PrayingAgainstNegativeStatutoryInstrumentId: FormControl<number | null | undefined>,
		SponsorsCount: FormControl<number | null | undefined>,
		Status: FormControl<PublishedEarlyDayMotionStatus | null | undefined>,
		StatusDate: FormControl<Date | null | undefined>,
		StatutoryInstrumentNumber: FormControl<number | null | undefined>,
		StatutoryInstrumentTitle: FormControl<string | null | undefined>,
		StatutoryInstrumentYear: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		UIN: FormControl<number | null | undefined>,
		UINWithAmendmentSuffix: FormControl<string | null | undefined>,
	}
	export function CreatePublishedEarlyDayMotionFormGroup() {
		return new FormGroup<PublishedEarlyDayMotionFormProperties>({
			AmendmentSuffix: new FormControl<string | null | undefined>(undefined),
			AmendmentToMotionId: new FormControl<number | null | undefined>(undefined),
			DateTabled: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			MemberId: new FormControl<number | null | undefined>(undefined),
			MotionText: new FormControl<string | null | undefined>(undefined),
			PrayingAgainstNegativeStatutoryInstrumentId: new FormControl<number | null | undefined>(undefined),
			SponsorsCount: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<PublishedEarlyDayMotionStatus | null | undefined>(undefined),
			StatusDate: new FormControl<Date | null | undefined>(undefined),
			StatutoryInstrumentNumber: new FormControl<number | null | undefined>(undefined),
			StatutoryInstrumentTitle: new FormControl<string | null | undefined>(undefined),
			StatutoryInstrumentYear: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			UIN: new FormControl<number | null | undefined>(undefined),
			UINWithAmendmentSuffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemberForDate {
		Constituency?: string | null;
		ListAs?: string | null;
		MnisId?: number | null;
		Name?: string | null;
		Party?: string | null;
		PartyColour?: string | null;
		PartyId?: number | null;
		PhotoUrl?: string | null;
		PimsId?: number | null;
		Status?: string | null;
	}
	export interface MemberForDateFormProperties {
		Constituency: FormControl<string | null | undefined>,
		ListAs: FormControl<string | null | undefined>,
		MnisId: FormControl<number | null | undefined>,
		Name: FormControl<string | null | undefined>,
		Party: FormControl<string | null | undefined>,
		PartyColour: FormControl<string | null | undefined>,
		PartyId: FormControl<number | null | undefined>,
		PhotoUrl: FormControl<string | null | undefined>,
		PimsId: FormControl<number | null | undefined>,
		Status: FormControl<string | null | undefined>,
	}
	export function CreateMemberForDateFormGroup() {
		return new FormGroup<MemberForDateFormProperties>({
			Constituency: new FormControl<string | null | undefined>(undefined),
			ListAs: new FormControl<string | null | undefined>(undefined),
			MnisId: new FormControl<number | null | undefined>(undefined),
			Name: new FormControl<string | null | undefined>(undefined),
			Party: new FormControl<string | null | undefined>(undefined),
			PartyColour: new FormControl<string | null | undefined>(undefined),
			PartyId: new FormControl<number | null | undefined>(undefined),
			PhotoUrl: new FormControl<string | null | undefined>(undefined),
			PimsId: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PublishedEarlyDayMotionStatus { Published = 'Published', Withdrawn = 'Withdrawn' }

	export enum ApiResponse_List_PublishedEarlyDayMotion_StatusCode { Continue = 'Continue', SwitchingProtocols = 'SwitchingProtocols', OK = 'OK', Created = 'Created', Accepted = 'Accepted', NonAuthoritativeInformation = 'NonAuthoritativeInformation', NoContent = 'NoContent', ResetContent = 'ResetContent', PartialContent = 'PartialContent', MultipleChoices = 'MultipleChoices', Ambiguous = 'Ambiguous', MovedPermanently = 'MovedPermanently', Moved = 'Moved', Found = 'Found', Redirect = 'Redirect', SeeOther = 'SeeOther', RedirectMethod = 'RedirectMethod', NotModified = 'NotModified', UseProxy = 'UseProxy', Unused = 'Unused', TemporaryRedirect = 'TemporaryRedirect', RedirectKeepVerb = 'RedirectKeepVerb', BadRequest = 'BadRequest', Unauthorized = 'Unauthorized', PaymentRequired = 'PaymentRequired', Forbidden = 'Forbidden', NotFound = 'NotFound', MethodNotAllowed = 'MethodNotAllowed', NotAcceptable = 'NotAcceptable', ProxyAuthenticationRequired = 'ProxyAuthenticationRequired', RequestTimeout = 'RequestTimeout', Conflict = 'Conflict', Gone = 'Gone', LengthRequired = 'LengthRequired', PreconditionFailed = 'PreconditionFailed', RequestEntityTooLarge = 'RequestEntityTooLarge', RequestUriTooLong = 'RequestUriTooLong', UnsupportedMediaType = 'UnsupportedMediaType', RequestedRangeNotSatisfiable = 'RequestedRangeNotSatisfiable', ExpectationFailed = 'ExpectationFailed', UpgradeRequired = 'UpgradeRequired', InternalServerError = 'InternalServerError', NotImplemented = 'NotImplemented', BadGateway = 'BadGateway', ServiceUnavailable = 'ServiceUnavailable', GatewayTimeout = 'GatewayTimeout', HttpVersionNotSupported = 'HttpVersionNotSupported' }

	export interface ApiResponse_List_PublishedOralQuestionTime_ {
		Errors?: Array<string>;
		PagingInfo?: PagingInfo;
		Response?: Array<PublishedOralQuestionTime>;
		StatusCode?: ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null;
		Success?: boolean | null;
	}
	export interface ApiResponse_List_PublishedOralQuestionTime_FormProperties {
		StatusCode: FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>,
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateApiResponse_List_PublishedOralQuestionTime_FormGroup() {
		return new FormGroup<ApiResponse_List_PublishedOralQuestionTime_FormProperties>({
			StatusCode: new FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>(undefined),
			Success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PublishedOralQuestionTime {
		AnsweringBodyNames?: string | null;
		AnsweringMinisterTitles?: string | null;
		AnsweringWhen?: Date | null;
		DeadlineWhen?: Date | null;
		Id?: number | null;
		SubstantiveTime?: string | null;
		TopicalTime?: string | null;
	}
	export interface PublishedOralQuestionTimeFormProperties {
		AnsweringBodyNames: FormControl<string | null | undefined>,
		AnsweringMinisterTitles: FormControl<string | null | undefined>,
		AnsweringWhen: FormControl<Date | null | undefined>,
		DeadlineWhen: FormControl<Date | null | undefined>,
		Id: FormControl<number | null | undefined>,
		SubstantiveTime: FormControl<string | null | undefined>,
		TopicalTime: FormControl<string | null | undefined>,
	}
	export function CreatePublishedOralQuestionTimeFormGroup() {
		return new FormGroup<PublishedOralQuestionTimeFormProperties>({
			AnsweringBodyNames: new FormControl<string | null | undefined>(undefined),
			AnsweringMinisterTitles: new FormControl<string | null | undefined>(undefined),
			AnsweringWhen: new FormControl<Date | null | undefined>(undefined),
			DeadlineWhen: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			SubstantiveTime: new FormControl<string | null | undefined>(undefined),
			TopicalTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ApiResponse_List_PublishedOralQuestion_ {
		Errors?: Array<string>;
		PagingInfo?: PagingInfo;
		Response?: Array<PublishedOralQuestion>;
		StatusCode?: ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null;
		Success?: boolean | null;
	}
	export interface ApiResponse_List_PublishedOralQuestion_FormProperties {
		StatusCode: FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>,
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateApiResponse_List_PublishedOralQuestion_FormGroup() {
		return new FormGroup<ApiResponse_List_PublishedOralQuestion_FormProperties>({
			StatusCode: new FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>(undefined),
			Success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PublishedOralQuestion {
		AnsweringBody?: string | null;
		AnsweringBodyId?: number | null;
		AnsweringMinister?: MemberForDate;
		AnsweringMinisterId?: number | null;
		AnsweringMinisterTitle?: string | null;
		AnsweringWhen?: Date | null;
		AskingMember?: MemberForDate;
		AskingMemberId?: number | null;
		DeclarableInterestDetail?: string | null;
		HansardLink?: string | null;
		Id?: number | null;
		Number?: number | null;
		QuestionText?: string | null;
		QuestionType?: PublishedOralQuestionQuestionType | null;
		RemovedFromToBeAskedWhen?: Date | null;
		Status?: PublishedOralQuestionStatus | null;
		TabledWhen?: Date | null;
		UIN?: number | null;
	}
	export interface PublishedOralQuestionFormProperties {
		AnsweringBody: FormControl<string | null | undefined>,
		AnsweringBodyId: FormControl<number | null | undefined>,
		AnsweringMinisterId: FormControl<number | null | undefined>,
		AnsweringMinisterTitle: FormControl<string | null | undefined>,
		AnsweringWhen: FormControl<Date | null | undefined>,
		AskingMemberId: FormControl<number | null | undefined>,
		DeclarableInterestDetail: FormControl<string | null | undefined>,
		HansardLink: FormControl<string | null | undefined>,
		Id: FormControl<number | null | undefined>,
		Number: FormControl<number | null | undefined>,
		QuestionText: FormControl<string | null | undefined>,
		QuestionType: FormControl<PublishedOralQuestionQuestionType | null | undefined>,
		RemovedFromToBeAskedWhen: FormControl<Date | null | undefined>,
		Status: FormControl<PublishedOralQuestionStatus | null | undefined>,
		TabledWhen: FormControl<Date | null | undefined>,
		UIN: FormControl<number | null | undefined>,
	}
	export function CreatePublishedOralQuestionFormGroup() {
		return new FormGroup<PublishedOralQuestionFormProperties>({
			AnsweringBody: new FormControl<string | null | undefined>(undefined),
			AnsweringBodyId: new FormControl<number | null | undefined>(undefined),
			AnsweringMinisterId: new FormControl<number | null | undefined>(undefined),
			AnsweringMinisterTitle: new FormControl<string | null | undefined>(undefined),
			AnsweringWhen: new FormControl<Date | null | undefined>(undefined),
			AskingMemberId: new FormControl<number | null | undefined>(undefined),
			DeclarableInterestDetail: new FormControl<string | null | undefined>(undefined),
			HansardLink: new FormControl<string | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			Number: new FormControl<number | null | undefined>(undefined),
			QuestionText: new FormControl<string | null | undefined>(undefined),
			QuestionType: new FormControl<PublishedOralQuestionQuestionType | null | undefined>(undefined),
			RemovedFromToBeAskedWhen: new FormControl<Date | null | undefined>(undefined),
			Status: new FormControl<PublishedOralQuestionStatus | null | undefined>(undefined),
			TabledWhen: new FormControl<Date | null | undefined>(undefined),
			UIN: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PublishedOralQuestionQuestionType { Substantive = 'Substantive', Topical = 'Topical' }

	export enum PublishedOralQuestionStatus { Submitted = 'Submitted', Carded = 'Carded', Unsaved = 'Unsaved', ReadyForShuffle = 'ReadyForShuffle', ToBeAsked = 'ToBeAsked', ShuffleUnsuccessful = 'ShuffleUnsuccessful', Withdrawn = 'Withdrawn', Unstarred = 'Unstarred', Draft = 'Draft', ForReview = 'ForReview', Unasked = 'Unasked', Transferred = 'Transferred' }

	export interface ApiResponse_List_PublishedWrittenQuestion_ {
		Errors?: Array<string>;
		PagingInfo?: PagingInfo;
		Response?: Array<PublishedWrittenQuestion>;
		StatusCode?: ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null;
		Success?: boolean | null;
	}
	export interface ApiResponse_List_PublishedWrittenQuestion_FormProperties {
		StatusCode: FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>,
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateApiResponse_List_PublishedWrittenQuestion_FormGroup() {
		return new FormGroup<ApiResponse_List_PublishedWrittenQuestion_FormProperties>({
			StatusCode: new FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>(undefined),
			Success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PublishedWrittenQuestion {
		Answer?: string | null;
		AnsweredWhen?: Date | null;
		AnsweringBody?: string | null;
		AnsweringBodyId?: number | null;
		AnsweringMinister?: MemberForDate;
		AnsweringMinisterId?: number | null;
		AnsweringMinisterTitle?: string | null;
		AskingMember?: MemberForDate;
		AskingMemberId?: number | null;
		DueForAnswer?: Date | null;
		Id?: number | null;
		QuestionText?: string | null;
		QuestionType?: PublishedWrittenQuestionQuestionType | null;
		TabledWhen?: Date | null;
		UIN?: number | null;
	}
	export interface PublishedWrittenQuestionFormProperties {
		Answer: FormControl<string | null | undefined>,
		AnsweredWhen: FormControl<Date | null | undefined>,
		AnsweringBody: FormControl<string | null | undefined>,
		AnsweringBodyId: FormControl<number | null | undefined>,
		AnsweringMinisterId: FormControl<number | null | undefined>,
		AnsweringMinisterTitle: FormControl<string | null | undefined>,
		AskingMemberId: FormControl<number | null | undefined>,
		DueForAnswer: FormControl<Date | null | undefined>,
		Id: FormControl<number | null | undefined>,
		QuestionText: FormControl<string | null | undefined>,
		QuestionType: FormControl<PublishedWrittenQuestionQuestionType | null | undefined>,
		TabledWhen: FormControl<Date | null | undefined>,
		UIN: FormControl<number | null | undefined>,
	}
	export function CreatePublishedWrittenQuestionFormGroup() {
		return new FormGroup<PublishedWrittenQuestionFormProperties>({
			Answer: new FormControl<string | null | undefined>(undefined),
			AnsweredWhen: new FormControl<Date | null | undefined>(undefined),
			AnsweringBody: new FormControl<string | null | undefined>(undefined),
			AnsweringBodyId: new FormControl<number | null | undefined>(undefined),
			AnsweringMinisterId: new FormControl<number | null | undefined>(undefined),
			AnsweringMinisterTitle: new FormControl<string | null | undefined>(undefined),
			AskingMemberId: new FormControl<number | null | undefined>(undefined),
			DueForAnswer: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			QuestionText: new FormControl<string | null | undefined>(undefined),
			QuestionType: new FormControl<PublishedWrittenQuestionQuestionType | null | undefined>(undefined),
			TabledWhen: new FormControl<Date | null | undefined>(undefined),
			UIN: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PublishedWrittenQuestionQuestionType { NamedDay = 'NamedDay', Ordinary = 'Ordinary' }

	export interface ApiResponse_Object_ {
		Errors?: Array<string>;
		PagingInfo?: PagingInfo;
		Response?: string | null;
		StatusCode?: ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null;
		Success?: boolean | null;
	}
	export interface ApiResponse_Object_FormProperties {
		Response: FormControl<string | null | undefined>,
		StatusCode: FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>,
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateApiResponse_Object_FormGroup() {
		return new FormGroup<ApiResponse_Object_FormProperties>({
			Response: new FormControl<string | null | undefined>(undefined),
			StatusCode: new FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>(undefined),
			Success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ApiResponse_PublishedEarlyDayMotionDetails_ {
		Errors?: Array<string>;
		PagingInfo?: PagingInfo;
		Response?: PublishedEarlyDayMotionDetails;
		StatusCode?: ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null;
		Success?: boolean | null;
	}
	export interface ApiResponse_PublishedEarlyDayMotionDetails_FormProperties {
		StatusCode: FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>,
		Success: FormControl<boolean | null | undefined>,
	}
	export function CreateApiResponse_PublishedEarlyDayMotionDetails_FormGroup() {
		return new FormGroup<ApiResponse_PublishedEarlyDayMotionDetails_FormProperties>({
			StatusCode: new FormControl<ApiResponse_List_PublishedEarlyDayMotion_StatusCode | null | undefined>(undefined),
			Success: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PublishedEarlyDayMotionDetails {
		AmendmentSuffix?: string | null;
		AmendmentToMotionId?: number | null;
		Amendments?: Array<PublishedEarlyDayMotionDetails>;
		DateTabled?: Date | null;
		Id?: number | null;
		MemberId?: number | null;
		MotionText?: string | null;
		PrayingAgainstNegativeStatutoryInstrumentId?: number | null;
		PrimarySponsor?: MemberForDate;
		Sponsors?: Array<PublishedEarlyDayMotionSponsor>;
		SponsorsCount?: number | null;
		Status?: PublishedEarlyDayMotionStatus | null;
		StatusDate?: Date | null;
		StatutoryInstrumentNumber?: number | null;
		StatutoryInstrumentTitle?: string | null;
		StatutoryInstrumentYear?: string | null;
		Title?: string | null;
		UIN?: number | null;
		UINWithAmendmentSuffix?: string | null;
	}
	export interface PublishedEarlyDayMotionDetailsFormProperties {
		AmendmentSuffix: FormControl<string | null | undefined>,
		AmendmentToMotionId: FormControl<number | null | undefined>,
		DateTabled: FormControl<Date | null | undefined>,
		Id: FormControl<number | null | undefined>,
		MemberId: FormControl<number | null | undefined>,
		MotionText: FormControl<string | null | undefined>,
		PrayingAgainstNegativeStatutoryInstrumentId: FormControl<number | null | undefined>,
		SponsorsCount: FormControl<number | null | undefined>,
		Status: FormControl<PublishedEarlyDayMotionStatus | null | undefined>,
		StatusDate: FormControl<Date | null | undefined>,
		StatutoryInstrumentNumber: FormControl<number | null | undefined>,
		StatutoryInstrumentTitle: FormControl<string | null | undefined>,
		StatutoryInstrumentYear: FormControl<string | null | undefined>,
		Title: FormControl<string | null | undefined>,
		UIN: FormControl<number | null | undefined>,
		UINWithAmendmentSuffix: FormControl<string | null | undefined>,
	}
	export function CreatePublishedEarlyDayMotionDetailsFormGroup() {
		return new FormGroup<PublishedEarlyDayMotionDetailsFormProperties>({
			AmendmentSuffix: new FormControl<string | null | undefined>(undefined),
			AmendmentToMotionId: new FormControl<number | null | undefined>(undefined),
			DateTabled: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			MemberId: new FormControl<number | null | undefined>(undefined),
			MotionText: new FormControl<string | null | undefined>(undefined),
			PrayingAgainstNegativeStatutoryInstrumentId: new FormControl<number | null | undefined>(undefined),
			SponsorsCount: new FormControl<number | null | undefined>(undefined),
			Status: new FormControl<PublishedEarlyDayMotionStatus | null | undefined>(undefined),
			StatusDate: new FormControl<Date | null | undefined>(undefined),
			StatutoryInstrumentNumber: new FormControl<number | null | undefined>(undefined),
			StatutoryInstrumentTitle: new FormControl<string | null | undefined>(undefined),
			StatutoryInstrumentYear: new FormControl<string | null | undefined>(undefined),
			Title: new FormControl<string | null | undefined>(undefined),
			UIN: new FormControl<number | null | undefined>(undefined),
			UINWithAmendmentSuffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublishedEarlyDayMotionSponsor {
		CreatedWhen?: Date | null;
		Id?: number | null;
		IsWithdrawn?: boolean | null;
		Member?: MemberForDate;
		MemberId?: number | null;
		SponsoringOrder?: number | null;
		WithdrawnDate?: Date | null;
	}
	export interface PublishedEarlyDayMotionSponsorFormProperties {
		CreatedWhen: FormControl<Date | null | undefined>,
		Id: FormControl<number | null | undefined>,
		IsWithdrawn: FormControl<boolean | null | undefined>,
		MemberId: FormControl<number | null | undefined>,
		SponsoringOrder: FormControl<number | null | undefined>,
		WithdrawnDate: FormControl<Date | null | undefined>,
	}
	export function CreatePublishedEarlyDayMotionSponsorFormGroup() {
		return new FormGroup<PublishedEarlyDayMotionSponsorFormProperties>({
			CreatedWhen: new FormControl<Date | null | undefined>(undefined),
			Id: new FormControl<number | null | undefined>(undefined),
			IsWithdrawn: new FormControl<boolean | null | undefined>(undefined),
			MemberId: new FormControl<number | null | undefined>(undefined),
			SponsoringOrder: new FormControl<number | null | undefined>(undefined),
			WithdrawnDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PublishedEarlyDayMotionQueryParameters {

		/** Early Day Motions where the current status has been set on or before the date provided. Date format YYYY-MM-DD. */
		CurrentStatusDateEnd?: Date | null;

		/** Early Day Motions where the current status has been set on or after the date provided. Date format YYYY-MM-DD. */
		CurrentStatusDateStart?: Date | null;

		/** Early Day Motions with an ID in the list provided. */
		EdmIds?: Array<number>;

		/** Include Early Day Motions sponsored by Member specified */
		IncludeSponsoredByMember?: boolean | null;

		/** Early Day Motions which are a prayer against a Negative Statutory Instrument. */
		IsPrayer?: boolean | null;

		/** Return Early Day Motions tabled by Member with ID provided. */
		MemberId?: number | null;

		/** Order results by date tabled, title or signature count. Default is date tabled. */
		OrderBy?: PublishedEarlyDayMotionQueryParametersOrderBy | null;

		/** Early Day Motions where the title includes the search term provided. */
		SearchTerm?: string | null;

		/** The number of records to skip from the first, default is 0. */
		Skip?: number | null;

		/** Early Day Motions where current status is in the selected list. */
		Statuses?: Array<PublishedEarlyDayMotionStatus>;

		/** Early Day Motions where the date tabled is on or before the date provided. Date format YYYY-MM-DD. */
		TabledEndDate?: Date | null;

		/** Early Day Motions where the date tabled is on or after the date provided. Date format YYYY-MM-DD. */
		TabledStartDate?: Date | null;

		/** The number of records to return, default is 25, maximum is 100. */
		Take?: number | null;

		/** Early Day Motions with an UINWithAmendmentSuffix provided. */
		UINWithAmendmentSuffix?: string | null;
	}
	export interface PublishedEarlyDayMotionQueryParametersFormProperties {

		/** Early Day Motions where the current status has been set on or before the date provided. Date format YYYY-MM-DD. */
		CurrentStatusDateEnd: FormControl<Date | null | undefined>,

		/** Early Day Motions where the current status has been set on or after the date provided. Date format YYYY-MM-DD. */
		CurrentStatusDateStart: FormControl<Date | null | undefined>,

		/** Include Early Day Motions sponsored by Member specified */
		IncludeSponsoredByMember: FormControl<boolean | null | undefined>,

		/** Early Day Motions which are a prayer against a Negative Statutory Instrument. */
		IsPrayer: FormControl<boolean | null | undefined>,

		/** Return Early Day Motions tabled by Member with ID provided. */
		MemberId: FormControl<number | null | undefined>,

		/** Order results by date tabled, title or signature count. Default is date tabled. */
		OrderBy: FormControl<PublishedEarlyDayMotionQueryParametersOrderBy | null | undefined>,

		/** Early Day Motions where the title includes the search term provided. */
		SearchTerm: FormControl<string | null | undefined>,

		/** The number of records to skip from the first, default is 0. */
		Skip: FormControl<number | null | undefined>,

		/** Early Day Motions where the date tabled is on or before the date provided. Date format YYYY-MM-DD. */
		TabledEndDate: FormControl<Date | null | undefined>,

		/** Early Day Motions where the date tabled is on or after the date provided. Date format YYYY-MM-DD. */
		TabledStartDate: FormControl<Date | null | undefined>,

		/** The number of records to return, default is 25, maximum is 100. */
		Take: FormControl<number | null | undefined>,

		/** Early Day Motions with an UINWithAmendmentSuffix provided. */
		UINWithAmendmentSuffix: FormControl<string | null | undefined>,
	}
	export function CreatePublishedEarlyDayMotionQueryParametersFormGroup() {
		return new FormGroup<PublishedEarlyDayMotionQueryParametersFormProperties>({
			CurrentStatusDateEnd: new FormControl<Date | null | undefined>(undefined),
			CurrentStatusDateStart: new FormControl<Date | null | undefined>(undefined),
			IncludeSponsoredByMember: new FormControl<boolean | null | undefined>(undefined),
			IsPrayer: new FormControl<boolean | null | undefined>(undefined),
			MemberId: new FormControl<number | null | undefined>(undefined),
			OrderBy: new FormControl<PublishedEarlyDayMotionQueryParametersOrderBy | null | undefined>(undefined),
			SearchTerm: new FormControl<string | null | undefined>(undefined),
			Skip: new FormControl<number | null | undefined>(undefined),
			TabledEndDate: new FormControl<Date | null | undefined>(undefined),
			TabledStartDate: new FormControl<Date | null | undefined>(undefined),
			Take: new FormControl<number | null | undefined>(undefined),
			UINWithAmendmentSuffix: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PublishedEarlyDayMotionQueryParametersOrderBy { DateTabledAsc = 'DateTabledAsc', DateTabledDesc = 'DateTabledDesc', TitleAsc = 'TitleAsc', TitleDesc = 'TitleDesc', SignatureCountAsc = 'SignatureCountAsc', SignatureCountDesc = 'SignatureCountDesc' }

	export interface PublishedOralQuestionQueryParameters {

		/** Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>. */
		AnsweringBodyIds?: Array<number>;

		/** Oral Questions where the answering date has been set on or before the date provided. Date format YYYY-MM-DD. */
		AnsweringDateEnd?: Date | null;

		/** Oral Questions where the answering date has been set on or after the date provided. Date format YYYY-MM-DD. */
		AnsweringDateStart?: Date | null;

		/** The ID of the member asking the question. Lists of member IDs for each house are available <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Commons" target="_blank">Commons</a> and <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Lords" target="_blank">Lords</a>. */
		AskingMemberIds?: Array<number>;

		/** Oral Questions where the question is within the question time with the ID provided */
		OralQuestionTimeId?: number | null;

		/** Oral Questions where the question type is the selected type, substantive or topical. */
		QuestionType?: PublishedOralQuestionQuestionType | null;

		/** The number of records to skip from the first, default is 0. */
		Skip?: number | null;

		/** The number of records to return, default is 25, maximum is 100. */
		Take?: number | null;

		/** The UIN for the question - note that UINs reset at the start of each Parliamentary session. */
		UINs?: Array<number>;
	}
	export interface PublishedOralQuestionQueryParametersFormProperties {

		/** Oral Questions where the answering date has been set on or before the date provided. Date format YYYY-MM-DD. */
		AnsweringDateEnd: FormControl<Date | null | undefined>,

		/** Oral Questions where the answering date has been set on or after the date provided. Date format YYYY-MM-DD. */
		AnsweringDateStart: FormControl<Date | null | undefined>,

		/** Oral Questions where the question is within the question time with the ID provided */
		OralQuestionTimeId: FormControl<number | null | undefined>,

		/** Oral Questions where the question type is the selected type, substantive or topical. */
		QuestionType: FormControl<PublishedOralQuestionQuestionType | null | undefined>,

		/** The number of records to skip from the first, default is 0. */
		Skip: FormControl<number | null | undefined>,

		/** The number of records to return, default is 25, maximum is 100. */
		Take: FormControl<number | null | undefined>,
	}
	export function CreatePublishedOralQuestionQueryParametersFormGroup() {
		return new FormGroup<PublishedOralQuestionQueryParametersFormProperties>({
			AnsweringDateEnd: new FormControl<Date | null | undefined>(undefined),
			AnsweringDateStart: new FormControl<Date | null | undefined>(undefined),
			OralQuestionTimeId: new FormControl<number | null | undefined>(undefined),
			QuestionType: new FormControl<PublishedOralQuestionQuestionType | null | undefined>(undefined),
			Skip: new FormControl<number | null | undefined>(undefined),
			Take: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PublishedOralQuestionTimeQueryParameters {

		/** Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>. */
		AnsweringBodyIds?: Array<number>;

		/** Oral Questions Time where the answering date has been set on or before the date provided. Date format YYYY-MM-DD. */
		AnsweringDateEnd?: Date | null;

		/** Oral Questions Time where the answering date has been set on or after the date provided. Date format YYYY-MM-DD. */
		AnsweringDateStart?: Date | null;

		/** Oral Questions Time where the deadline date has been set on or before the date provided. Date format YYYY-MM-DD. */
		DeadlineDateEnd?: Date | null;

		/** Oral Questions Time where the deadline date has been set on or after the date provided. Date format YYYY-MM-DD. */
		DeadlineDateStart?: Date | null;

		/** Identifier of the OQT */
		OralQuestionTimeId?: number | null;

		/** The number of records to skip from the first, default is 0. */
		Skip?: number | null;

		/** The number of records to return, default is 25, maximum is 100. */
		Take?: number | null;
	}
	export interface PublishedOralQuestionTimeQueryParametersFormProperties {

		/** Oral Questions Time where the answering date has been set on or before the date provided. Date format YYYY-MM-DD. */
		AnsweringDateEnd: FormControl<Date | null | undefined>,

		/** Oral Questions Time where the answering date has been set on or after the date provided. Date format YYYY-MM-DD. */
		AnsweringDateStart: FormControl<Date | null | undefined>,

		/** Oral Questions Time where the deadline date has been set on or before the date provided. Date format YYYY-MM-DD. */
		DeadlineDateEnd: FormControl<Date | null | undefined>,

		/** Oral Questions Time where the deadline date has been set on or after the date provided. Date format YYYY-MM-DD. */
		DeadlineDateStart: FormControl<Date | null | undefined>,

		/** Identifier of the OQT */
		OralQuestionTimeId: FormControl<number | null | undefined>,

		/** The number of records to skip from the first, default is 0. */
		Skip: FormControl<number | null | undefined>,

		/** The number of records to return, default is 25, maximum is 100. */
		Take: FormControl<number | null | undefined>,
	}
	export function CreatePublishedOralQuestionTimeQueryParametersFormGroup() {
		return new FormGroup<PublishedOralQuestionTimeQueryParametersFormProperties>({
			AnsweringDateEnd: new FormControl<Date | null | undefined>(undefined),
			AnsweringDateStart: new FormControl<Date | null | undefined>(undefined),
			DeadlineDateEnd: new FormControl<Date | null | undefined>(undefined),
			DeadlineDateStart: new FormControl<Date | null | undefined>(undefined),
			OralQuestionTimeId: new FormControl<number | null | undefined>(undefined),
			Skip: new FormControl<number | null | undefined>(undefined),
			Take: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a single Early Day Motion by ID
		 * Get a single Early Day Motion which has the ID specified.
		 * Get EarlyDayMotion/{id}
		 * @param {number} id Early Day Motion with the ID specified.
		 * @return {ApiResponse_List_PublishedWrittenQuestion_} OK
		 */
		PublishedEarlyDayMotion_Get(id: number): Observable<ApiResponse_List_PublishedWrittenQuestion_> {
			return this.http.get<ApiResponse_List_PublishedWrittenQuestion_>(this.baseUri + 'EarlyDayMotion/' + id, {});
		}

		/**
		 * Returns a list of Early Day Motions
		 * Get a list of Early Day Motions which meet the specified criteria. Only supports Published and Withdrawn status.
		 * Get EarlyDayMotions/list
		 * @param {Array<number>} parameters_edmIds Early Day Motions with an ID in the list provided.
		 * @param {string} parameters_uINWithAmendmentSuffix Early Day Motions with an UINWithAmendmentSuffix provided.
		 * @param {string} parameters_searchTerm Early Day Motions where the title includes the search term provided.
		 * @param {Date} parameters_currentStatusDateStart Early Day Motions where the current status has been set on or after the date provided. Date format YYYY-MM-DD.
		 * @param {Date} parameters_currentStatusDateEnd Early Day Motions where the current status has been set on or before the date provided. Date format YYYY-MM-DD.
		 * @param {boolean} parameters_isPrayer Early Day Motions which are a prayer against a Negative Statutory Instrument.
		 * @param {number} parameters_memberId Return Early Day Motions tabled by Member with ID provided.
		 * @param {boolean} parameters_includeSponsoredByMember Include Early Day Motions sponsored by Member specified
		 * @param {Date} parameters_tabledStartDate Early Day Motions where the date tabled is on or after the date provided. Date format YYYY-MM-DD.
		 * @param {Date} parameters_tabledEndDate Early Day Motions where the date tabled is on or before the date provided. Date format YYYY-MM-DD.
		 * @param {Array<PublishedEarlyDayMotionStatus>} parameters_statuses Early Day Motions where current status is in the selected list.
		 * @param {PublishedEarlyDayMotionQueryParametersOrderBy} parameters_orderBy Order results by date tabled, title or signature count. Default is date tabled.
		 * @param {number} parameters_skip The number of records to skip from the first, default is 0.
		 * @param {number} parameters_take The number of records to return, default is 25, maximum is 100.
		 * @return {ApiResponse_List_PublishedWrittenQuestion_} OK
		 */
		Early_Day_MotionsGetByParameters_edmIdsAndParameters_uINWithAmendmentSuffixAndParameters_searchTermAndParameters_currentStatusDateStartAndParameters_currentStatusDateEndAndParameters_isPrayerAndParameters_memberIdAndParameters_includeSponsoredByMemberAndParameters_tabledStartDateAndParameters_tabledEndDateAndParameters_statusesAndParameters_orderByAndParameters_skipAndParameters_take(parameters_edmIds: Array<number> | null | undefined, parameters_uINWithAmendmentSuffix: string | null | undefined, parameters_searchTerm: string | null | undefined, parameters_currentStatusDateStart: Date | null | undefined, parameters_currentStatusDateEnd: Date | null | undefined, parameters_isPrayer: boolean | null | undefined, parameters_memberId: number | null | undefined, parameters_includeSponsoredByMember: boolean | null | undefined, parameters_tabledStartDate: Date | null | undefined, parameters_tabledEndDate: Date | null | undefined, parameters_statuses: Array<PublishedEarlyDayMotionStatus> | null | undefined, parameters_orderBy: PublishedEarlyDayMotionQueryParametersOrderBy | null | undefined, parameters_skip: number | null | undefined, parameters_take: number | null | undefined): Observable<ApiResponse_List_PublishedWrittenQuestion_> {
			return this.http.get<ApiResponse_List_PublishedWrittenQuestion_>(this.baseUri + 'EarlyDayMotions/list?' + parameters_edmIds?.map(z => `parameters.edmIds=${z}`).join('&') + '&parameters_uINWithAmendmentSuffix=' + (parameters_uINWithAmendmentSuffix == null ? '' : encodeURIComponent(parameters_uINWithAmendmentSuffix)) + '&parameters_searchTerm=' + (parameters_searchTerm == null ? '' : encodeURIComponent(parameters_searchTerm)) + '&parameters_currentStatusDateStart=' + parameters_currentStatusDateStart?.toISOString() + '&parameters_currentStatusDateEnd=' + parameters_currentStatusDateEnd?.toISOString() + '&parameters_isPrayer=' + parameters_isPrayer + '&parameters_memberId=' + parameters_memberId + '&parameters_includeSponsoredByMember=' + parameters_includeSponsoredByMember + '&parameters_tabledStartDate=' + parameters_tabledStartDate?.toISOString() + '&parameters_tabledEndDate=' + parameters_tabledEndDate?.toISOString() + '&' + parameters_statuses?.map(z => `parameters.statuses=${z}`).join('&') + '&parameters_orderBy=' + parameters_orderBy + '&parameters_skip=' + parameters_skip + '&parameters_take=' + parameters_take, {});
		}

		/**
		 * Returns a list of oral questions
		 * A list of oral questions meeting the specified criteria.
		 * Get oralquestions/list
		 * @param {Date} parameters_answeringDateStart Oral Questions where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.
		 * @param {Date} parameters_answeringDateEnd Oral Questions where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.
		 * @param {PublishedOralQuestionQuestionType} parameters_questionType Oral Questions where the question type is the selected type, substantive or topical.
		 * @param {number} parameters_oralQuestionTimeId Oral Questions where the question is within the question time with the ID provided
		 * @param {Array<number>} parameters_askingMemberIds The ID of the member asking the question. Lists of member IDs for each house are available <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Commons" target="_blank">Commons</a> and <a href="http://data.parliament.uk/membersdataplatform/services/mnis/members/query/house=Lords" target="_blank">Lords</a>.
		 * @param {Array<number>} parameters_uINs The UIN for the question - note that UINs reset at the start of each Parliamentary session.
		 * @param {Array<number>} parameters_answeringBodyIds Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.
		 * @param {number} parameters_skip The number of records to skip from the first, default is 0.
		 * @param {number} parameters_take The number of records to return, default is 25, maximum is 100.
		 * @return {ApiResponse_List_PublishedWrittenQuestion_} OK
		 */
		PublishedOralQuestion_Get(parameters_answeringDateStart: Date | null | undefined, parameters_answeringDateEnd: Date | null | undefined, parameters_questionType: PublishedOralQuestionQuestionType | null | undefined, parameters_oralQuestionTimeId: number | null | undefined, parameters_askingMemberIds: Array<number> | null | undefined, parameters_uINs: Array<number> | null | undefined, parameters_answeringBodyIds: Array<number> | null | undefined, parameters_skip: number | null | undefined, parameters_take: number | null | undefined): Observable<ApiResponse_List_PublishedWrittenQuestion_> {
			return this.http.get<ApiResponse_List_PublishedWrittenQuestion_>(this.baseUri + 'oralquestions/list?parameters_answeringDateStart=' + parameters_answeringDateStart?.toISOString() + '&parameters_answeringDateEnd=' + parameters_answeringDateEnd?.toISOString() + '&parameters_questionType=' + parameters_questionType + '&parameters_oralQuestionTimeId=' + parameters_oralQuestionTimeId + '&' + parameters_askingMemberIds?.map(z => `parameters.askingMemberIds=${z}`).join('&') + '&' + parameters_uINs?.map(z => `parameters.uINs=${z}`).join('&') + '&' + parameters_answeringBodyIds?.map(z => `parameters.answeringBodyIds=${z}`).join('&') + '&parameters_skip=' + parameters_skip + '&parameters_take=' + parameters_take, {});
		}

		/**
		 * Returns a list of oral question times
		 * A list of oral question times meeting the specified criteria.
		 * Get oralquestiontimes/list
		 * @param {Date} parameters_answeringDateStart Oral Questions Time where the answering date has been set on or after the date provided. Date format YYYY-MM-DD.
		 * @param {Date} parameters_answeringDateEnd Oral Questions Time where the answering date has been set on or before the date provided. Date format YYYY-MM-DD.
		 * @param {Date} parameters_deadlineDateStart Oral Questions Time where the deadline date has been set on or after the date provided. Date format YYYY-MM-DD.
		 * @param {Date} parameters_deadlineDateEnd Oral Questions Time where the deadline date has been set on or before the date provided. Date format YYYY-MM-DD.
		 * @param {number} parameters_oralQuestionTimeId Identifier of the OQT
		 * @param {Array<number>} parameters_answeringBodyIds Which answering body is to respond. A list of answering bodies can be found <a target="_blank" href="http://data.parliament.uk/membersdataplatform/services/mnis/referencedata/AnsweringBodies/">here</a>.
		 * @param {number} parameters_skip The number of records to skip from the first, default is 0.
		 * @param {number} parameters_take The number of records to return, default is 25, maximum is 100.
		 * @return {ApiResponse_List_PublishedWrittenQuestion_} OK
		 */
		PublishedOralQuestionTime_Get(parameters_answeringDateStart: Date | null | undefined, parameters_answeringDateEnd: Date | null | undefined, parameters_deadlineDateStart: Date | null | undefined, parameters_deadlineDateEnd: Date | null | undefined, parameters_oralQuestionTimeId: number | null | undefined, parameters_answeringBodyIds: Array<number> | null | undefined, parameters_skip: number | null | undefined, parameters_take: number | null | undefined): Observable<ApiResponse_List_PublishedWrittenQuestion_> {
			return this.http.get<ApiResponse_List_PublishedWrittenQuestion_>(this.baseUri + 'oralquestiontimes/list?parameters_answeringDateStart=' + parameters_answeringDateStart?.toISOString() + '&parameters_answeringDateEnd=' + parameters_answeringDateEnd?.toISOString() + '&parameters_deadlineDateStart=' + parameters_deadlineDateStart?.toISOString() + '&parameters_deadlineDateEnd=' + parameters_deadlineDateEnd?.toISOString() + '&parameters_oralQuestionTimeId=' + parameters_oralQuestionTimeId + '&' + parameters_answeringBodyIds?.map(z => `parameters.answeringBodyIds=${z}`).join('&') + '&parameters_skip=' + parameters_skip + '&parameters_take=' + parameters_take, {});
		}
	}

}

