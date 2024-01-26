import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum AnnunciatorMessageType { CommonsMain = 0, LordsMain = 1 }

	export enum ContentStyle { DividerSolid = 0, EmptyLine = 1, Member = 2, Footer = 3, AnsweringBody = 4, WestminsterHallInfo = 5, GrandCommitteeInfo = 6, DividerDotted = 7, DividerDashed = 8, Division = 9, Text150 = 10, Text140 = 11, Text130 = 12, Text120 = 13, Text110 = 14, Text100 = 15, Text90 = 16, Text80 = 17, Text70 = 18 }

	export enum ContentType { Generic = 0, Member = 1, OralQuestionTime = 2, AnsweringBody = 3, Bill = 4 }

	export enum HorizontalAlignment { Left = 0, Right = 1, Centre = 2 }

	export interface HouseMembershipViewModel {
		membershipFrom?: string | null;
	}
	export interface HouseMembershipViewModelFormProperties {
		membershipFrom: FormControl<string | null | undefined>,
	}
	export function CreateHouseMembershipViewModelFormGroup() {
		return new FormGroup<HouseMembershipViewModelFormProperties>({
			membershipFrom: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LineViewModel {
		content?: string | null;
		contentAdditionalJson?: string | null;
		contentType?: ContentType | null;
		contentUrl?: string | null;
		displayOrder?: number | null;
		forceCapitalisation?: boolean | null;
		horizontalAlignment?: HorizontalAlignment | null;
		member?: MemberViewModel;
		style?: ContentStyle | null;
		verticalAlignment?: LineViewModelVerticalAlignment | null;
	}
	export interface LineViewModelFormProperties {
		content: FormControl<string | null | undefined>,
		contentAdditionalJson: FormControl<string | null | undefined>,
		contentType: FormControl<ContentType | null | undefined>,
		contentUrl: FormControl<string | null | undefined>,
		displayOrder: FormControl<number | null | undefined>,
		forceCapitalisation: FormControl<boolean | null | undefined>,
		horizontalAlignment: FormControl<HorizontalAlignment | null | undefined>,
		style: FormControl<ContentStyle | null | undefined>,
		verticalAlignment: FormControl<LineViewModelVerticalAlignment | null | undefined>,
	}
	export function CreateLineViewModelFormGroup() {
		return new FormGroup<LineViewModelFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			contentAdditionalJson: new FormControl<string | null | undefined>(undefined),
			contentType: new FormControl<ContentType | null | undefined>(undefined),
			contentUrl: new FormControl<string | null | undefined>(undefined),
			displayOrder: new FormControl<number | null | undefined>(undefined),
			forceCapitalisation: new FormControl<boolean | null | undefined>(undefined),
			horizontalAlignment: new FormControl<HorizontalAlignment | null | undefined>(undefined),
			style: new FormControl<ContentStyle | null | undefined>(undefined),
			verticalAlignment: new FormControl<LineViewModelVerticalAlignment | null | undefined>(undefined),
		});

	}

	export interface MemberViewModel {
		id?: number | null;
		latestHouseMembership?: HouseMembershipViewModel;
		latestParty?: PartyViewModel;
		nameAddressAs?: string | null;
		nameDisplayAs?: string | null;
		nameFullTitle?: string | null;
		nameListAs?: string | null;
		thumbnailUrl?: string | null;
	}
	export interface MemberViewModelFormProperties {
		id: FormControl<number | null | undefined>,
		nameAddressAs: FormControl<string | null | undefined>,
		nameDisplayAs: FormControl<string | null | undefined>,
		nameFullTitle: FormControl<string | null | undefined>,
		nameListAs: FormControl<string | null | undefined>,
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateMemberViewModelFormGroup() {
		return new FormGroup<MemberViewModelFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			nameAddressAs: new FormControl<string | null | undefined>(undefined),
			nameDisplayAs: new FormControl<string | null | undefined>(undefined),
			nameFullTitle: new FormControl<string | null | undefined>(undefined),
			nameListAs: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PartyViewModel {
		backgroundColour?: string | null;
		id?: number | null;
		name?: string | null;
	}
	export interface PartyViewModelFormProperties {
		backgroundColour: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePartyViewModelFormGroup() {
		return new FormGroup<PartyViewModelFormProperties>({
			backgroundColour: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LineViewModelVerticalAlignment { Top = 0, Middle = 1, Bottom = 2 }

	export interface MessageViewModel {
		annunciatorDisabled?: boolean | null;
		annunciatorType?: AnnunciatorMessageType | null;
		id?: number | null;
		isSecurityOverride?: boolean | null;
		publishTime?: Date | null;
		scrollingMessages?: Array<ScrollingMessageViewModel>;
		showCommonsBell?: boolean | null;
		showLordsBell?: boolean | null;
		slides?: Array<SlideViewModel>;
	}
	export interface MessageViewModelFormProperties {
		annunciatorDisabled: FormControl<boolean | null | undefined>,
		annunciatorType: FormControl<AnnunciatorMessageType | null | undefined>,
		id: FormControl<number | null | undefined>,
		isSecurityOverride: FormControl<boolean | null | undefined>,
		publishTime: FormControl<Date | null | undefined>,
		showCommonsBell: FormControl<boolean | null | undefined>,
		showLordsBell: FormControl<boolean | null | undefined>,
	}
	export function CreateMessageViewModelFormGroup() {
		return new FormGroup<MessageViewModelFormProperties>({
			annunciatorDisabled: new FormControl<boolean | null | undefined>(undefined),
			annunciatorType: new FormControl<AnnunciatorMessageType | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isSecurityOverride: new FormControl<boolean | null | undefined>(undefined),
			publishTime: new FormControl<Date | null | undefined>(undefined),
			showCommonsBell: new FormControl<boolean | null | undefined>(undefined),
			showLordsBell: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ScrollingMessageViewModel {
		alertType?: ScrollingMessageViewModelAlertType | null;
		content?: string | null;
		displayFrom?: Date | null;
		displayTo?: Date | null;
		id?: number | null;
		verticalAlignment?: LineViewModelVerticalAlignment | null;
	}
	export interface ScrollingMessageViewModelFormProperties {
		alertType: FormControl<ScrollingMessageViewModelAlertType | null | undefined>,
		content: FormControl<string | null | undefined>,
		displayFrom: FormControl<Date | null | undefined>,
		displayTo: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		verticalAlignment: FormControl<LineViewModelVerticalAlignment | null | undefined>,
	}
	export function CreateScrollingMessageViewModelFormGroup() {
		return new FormGroup<ScrollingMessageViewModelFormProperties>({
			alertType: new FormControl<ScrollingMessageViewModelAlertType | null | undefined>(undefined),
			content: new FormControl<string | null | undefined>(undefined),
			displayFrom: new FormControl<Date | null | undefined>(undefined),
			displayTo: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			verticalAlignment: new FormControl<LineViewModelVerticalAlignment | null | undefined>(undefined),
		});

	}

	export enum ScrollingMessageViewModelAlertType { Standard = 0, SecondaryChamber = 1, Alert = 2, SecurityNormal = 3, SecurityHigh = 4 }

	export interface SlideViewModel {
		carouselDisplaySeconds?: number | null;
		carouselOrder?: number | null;
		id?: number | null;
		lines?: Array<LineViewModel>;
		slideTime?: Date | null;
		soundToPlay?: SlideViewModelSoundToPlay | null;
		speakerTime?: Date | null;
		type?: SlideViewModelType | null;
	}
	export interface SlideViewModelFormProperties {
		carouselDisplaySeconds: FormControl<number | null | undefined>,
		carouselOrder: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		slideTime: FormControl<Date | null | undefined>,
		soundToPlay: FormControl<SlideViewModelSoundToPlay | null | undefined>,
		speakerTime: FormControl<Date | null | undefined>,
		type: FormControl<SlideViewModelType | null | undefined>,
	}
	export function CreateSlideViewModelFormGroup() {
		return new FormGroup<SlideViewModelFormProperties>({
			carouselDisplaySeconds: new FormControl<number | null | undefined>(undefined),
			carouselOrder: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			slideTime: new FormControl<Date | null | undefined>(undefined),
			soundToPlay: new FormControl<SlideViewModelSoundToPlay | null | undefined>(undefined),
			speakerTime: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<SlideViewModelType | null | undefined>(undefined),
		});

	}

	export enum SlideViewModelSoundToPlay { NewSlide = 0, DivisionBell = 1, Alert = 2, GenericBeep = 3 }

	export enum SlideViewModelType { Debate = 0, Division = 1, OralQuestionTime = 2, UrgentQuestion = 3, Statement = 4, Prayers = 5, HouseRisen = 6, Generic = 7, NotSitting = 8, PrimeMinistersQuestions = 9, PointsOfOrder = 10, BlankSlide = 11 }

	export enum ScrollingMessageAlertType { Standard = 0, SecondaryChamber = 1, Alert = 2, SecurityNormal = 3, SecurityHigh = 4 }

	export enum SlideType { Debate = 0, Division = 1, OralQuestionTime = 2, UrgentQuestion = 3, Statement = 4, Prayers = 5, HouseRisen = 6, Generic = 7, NotSitting = 8, PrimeMinistersQuestions = 9, PointsOfOrder = 10, BlankSlide = 11 }

	export enum Sounds { NewSlide = 0, DivisionBell = 1, Alert = 2, GenericBeep = 3 }

	export enum VerticalAlignment { Top = 0, Middle = 1, Bottom = 2 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return the current message by annunciator type
		 * Get api/Message/message/{annunciator}/current
		 * @param {AnnunciatorMessageType} annunciator Current message by annunciator
		 * @return {MessageViewModel} Success
		 */
		MessageGetByAnnunciator(annunciator: AnnunciatorMessageType): Observable<MessageViewModel> {
			return this.http.get<MessageViewModel>(this.baseUri + 'api/Message/message/' + annunciator + '/current', {});
		}

		/**
		 * Return the most recent message by annunciator after date time specified
		 * Get api/Message/message/{annunciator}/{date}
		 * @param {AnnunciatorMessageType} annunciator Message by annunciator type
		 * @param {Date} date First message after date time specified
		 * @return {MessageViewModel} Latest message for given annunciator was issued before specified date
		 */
		MessageGetByAnnunciatorAndDate(annunciator: AnnunciatorMessageType, date: Date): Observable<MessageViewModel> {
			return this.http.get<MessageViewModel>(this.baseUri + 'api/Message/message/' + annunciator + '/' + date.toISOString(), {});
		}
	}

}

