import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum AnnunciatorMessageType { CommonsMain = 'CommonsMain', LordsMain = 'LordsMain' }

	export enum ContentStyle { DividerSolid = 'DividerSolid', EmptyLine = 'EmptyLine', Member = 'Member', Footer = 'Footer', AnsweringBody = 'AnsweringBody', WestminsterHallInfo = 'WestminsterHallInfo', GrandCommitteeInfo = 'GrandCommitteeInfo', DividerDotted = 'DividerDotted', DividerDashed = 'DividerDashed', Division = 'Division', Text150 = 'Text150', Text140 = 'Text140', Text130 = 'Text130', Text120 = 'Text120', Text110 = 'Text110', Text100 = 'Text100', Text90 = 'Text90', Text80 = 'Text80', Text70 = 'Text70' }

	export enum ContentType { Generic = 'Generic', Member = 'Member', OralQuestionTime = 'OralQuestionTime', AnsweringBody = 'AnsweringBody', Bill = 'Bill' }

	export enum HorizontalAlignment { Left = 'Left', Right = 'Right', Centre = 'Centre' }

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

	export enum LineViewModelVerticalAlignment { Top = 'Top', Middle = 'Middle', Bottom = 'Bottom' }

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

	export enum ScrollingMessageViewModelAlertType { Standard = 'Standard', SecondaryChamber = 'SecondaryChamber', Alert = 'Alert', SecurityNormal = 'SecurityNormal', SecurityHigh = 'SecurityHigh' }

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

	export enum SlideViewModelSoundToPlay { NewSlide = 'NewSlide', DivisionBell = 'DivisionBell', Alert = 'Alert', GenericBeep = 'GenericBeep' }

	export enum SlideViewModelType { Debate = 'Debate', Division = 'Division', OralQuestionTime = 'OralQuestionTime', UrgentQuestion = 'UrgentQuestion', Statement = 'Statement', Prayers = 'Prayers', HouseRisen = 'HouseRisen', Generic = 'Generic', NotSitting = 'NotSitting', PrimeMinistersQuestions = 'PrimeMinistersQuestions', PointsOfOrder = 'PointsOfOrder', BlankSlide = 'BlankSlide' }

	export enum ScrollingMessageAlertType { Standard = 'Standard', SecondaryChamber = 'SecondaryChamber', Alert = 'Alert', SecurityNormal = 'SecurityNormal', SecurityHigh = 'SecurityHigh' }

	export enum SlideType { Debate = 'Debate', Division = 'Division', OralQuestionTime = 'OralQuestionTime', UrgentQuestion = 'UrgentQuestion', Statement = 'Statement', Prayers = 'Prayers', HouseRisen = 'HouseRisen', Generic = 'Generic', NotSitting = 'NotSitting', PrimeMinistersQuestions = 'PrimeMinistersQuestions', PointsOfOrder = 'PointsOfOrder', BlankSlide = 'BlankSlide' }

	export enum Sounds { NewSlide = 'NewSlide', DivisionBell = 'DivisionBell', Alert = 'Alert', GenericBeep = 'GenericBeep' }

	export enum VerticalAlignment { Top = 'Top', Middle = 'Middle', Bottom = 'Bottom' }

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

