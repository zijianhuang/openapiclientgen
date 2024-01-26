import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AnsweringBody {
		department?: GovernmentDepartment;
		id?: number | null;
		name?: string | null;
		shortName?: string | null;
		target?: string | null;
	}
	export interface AnsweringBodyFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		shortName: FormControl<string | null | undefined>,
		target: FormControl<string | null | undefined>,
	}
	export function CreateAnsweringBodyFormGroup() {
		return new FormGroup<AnsweringBodyFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
			target: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GovernmentDepartment {
		id?: number | null;
		imageUrl?: string | null;
		name?: string | null;
		url?: string | null;
	}
	export interface GovernmentDepartmentFormProperties {
		id: FormControl<number | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateGovernmentDepartmentFormGroup() {
		return new FormGroup<GovernmentDepartmentFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BiographyExperience {
		endMonth?: number | null;
		endYear?: number | null;
		id?: number | null;
		organisation?: string | null;
		startMonth?: number | null;
		startYear?: number | null;
		title?: string | null;
		type?: string | null;
		typeId?: number | null;
	}
	export interface BiographyExperienceFormProperties {
		endMonth: FormControl<number | null | undefined>,
		endYear: FormControl<number | null | undefined>,
		id: FormControl<number | null | undefined>,
		organisation: FormControl<string | null | undefined>,
		startMonth: FormControl<number | null | undefined>,
		startYear: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateBiographyExperienceFormGroup() {
		return new FormGroup<BiographyExperienceFormProperties>({
			endMonth: new FormControl<number | null | undefined>(undefined),
			endYear: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			organisation: new FormControl<string | null | undefined>(undefined),
			startMonth: new FormControl<number | null | undefined>(undefined),
			startYear: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BiographyExperienceListItem {
		links?: Array<Link>;
		value?: Array<BiographyExperience>;
	}
	export interface BiographyExperienceListItemFormProperties {
	}
	export function CreateBiographyExperienceListItemFormGroup() {
		return new FormGroup<BiographyExperienceListItemFormProperties>({
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

	export interface BiographyItem {
		additionalInfo?: string | null;
		additionalInfoLink?: string | null;
		endDate?: Date | null;
		house?: House;
		id?: number | null;
		name?: string | null;
		startDate?: Date | null;
	}
	export interface BiographyItemFormProperties {
		additionalInfo: FormControl<string | null | undefined>,
		additionalInfoLink: FormControl<string | null | undefined>,
		endDate: FormControl<Date | null | undefined>,
		house: FormControl<House | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateBiographyItemFormGroup() {
		return new FormGroup<BiographyItemFormProperties>({
			additionalInfo: new FormControl<string | null | undefined>(undefined),
			additionalInfoLink: new FormControl<string | null | undefined>(undefined),
			endDate: new FormControl<Date | null | undefined>(undefined),
			house: new FormControl<House | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum House { _1 = 0, _2 = 1 }

	export interface Constituency {
		currentRepresentation?: ConstituencyRepresentation;
		endDate?: Date | null;
		id?: number | null;
		name?: string | null;
		startDate?: Date | null;
	}
	export interface ConstituencyFormProperties {
		endDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateConstituencyFormGroup() {
		return new FormGroup<ConstituencyFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ConstituencyRepresentation {
		member?: MemberItem;
		representation?: HouseMembership;
	}
	export interface ConstituencyRepresentationFormProperties {
	}
	export function CreateConstituencyRepresentationFormGroup() {
		return new FormGroup<ConstituencyRepresentationFormProperties>({
		});

	}

	export interface MemberItem {
		links?: Array<Link>;
		value?: Member;
	}
	export interface MemberItemFormProperties {
	}
	export function CreateMemberItemFormGroup() {
		return new FormGroup<MemberItemFormProperties>({
		});

	}

	export interface Member {
		gender?: string | null;
		id?: number | null;
		latestHouseMembership?: HouseMembership;
		latestParty?: Party;
		nameAddressAs?: string | null;
		nameDisplayAs?: string | null;
		nameFullTitle?: string | null;
		nameListAs?: string | null;
		thumbnailUrl?: string | null;
	}
	export interface MemberFormProperties {
		gender: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		nameAddressAs: FormControl<string | null | undefined>,
		nameDisplayAs: FormControl<string | null | undefined>,
		nameFullTitle: FormControl<string | null | undefined>,
		nameListAs: FormControl<string | null | undefined>,
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			gender: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			nameAddressAs: new FormControl<string | null | undefined>(undefined),
			nameDisplayAs: new FormControl<string | null | undefined>(undefined),
			nameFullTitle: new FormControl<string | null | undefined>(undefined),
			nameListAs: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HouseMembership {
		house?: House;
		membershipEndDate?: Date | null;
		membershipEndReason?: string | null;
		membershipEndReasonId?: number | null;
		membershipEndReasonNotes?: string | null;
		membershipFrom?: string | null;
		membershipFromId?: number | null;
		membershipStartDate?: Date | null;
		membershipStatus?: HouseMembershipStatus;
	}
	export interface HouseMembershipFormProperties {
		house: FormControl<House | null | undefined>,
		membershipEndDate: FormControl<Date | null | undefined>,
		membershipEndReason: FormControl<string | null | undefined>,
		membershipEndReasonId: FormControl<number | null | undefined>,
		membershipEndReasonNotes: FormControl<string | null | undefined>,
		membershipFrom: FormControl<string | null | undefined>,
		membershipFromId: FormControl<number | null | undefined>,
		membershipStartDate: FormControl<Date | null | undefined>,
	}
	export function CreateHouseMembershipFormGroup() {
		return new FormGroup<HouseMembershipFormProperties>({
			house: new FormControl<House | null | undefined>(undefined),
			membershipEndDate: new FormControl<Date | null | undefined>(undefined),
			membershipEndReason: new FormControl<string | null | undefined>(undefined),
			membershipEndReasonId: new FormControl<number | null | undefined>(undefined),
			membershipEndReasonNotes: new FormControl<string | null | undefined>(undefined),
			membershipFrom: new FormControl<string | null | undefined>(undefined),
			membershipFromId: new FormControl<number | null | undefined>(undefined),
			membershipStartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface HouseMembershipStatus {
		status?: MemberStatus;
		statusDescription?: string | null;
		statusId?: number | null;
		statusIsActive?: boolean | null;
		statusNotes?: string | null;
		statusStartDate?: Date | null;
	}
	export interface HouseMembershipStatusFormProperties {
		status: FormControl<MemberStatus | null | undefined>,
		statusDescription: FormControl<string | null | undefined>,
		statusId: FormControl<number | null | undefined>,
		statusIsActive: FormControl<boolean | null | undefined>,
		statusNotes: FormControl<string | null | undefined>,
		statusStartDate: FormControl<Date | null | undefined>,
	}
	export function CreateHouseMembershipStatusFormGroup() {
		return new FormGroup<HouseMembershipStatusFormProperties>({
			status: new FormControl<MemberStatus | null | undefined>(undefined),
			statusDescription: new FormControl<string | null | undefined>(undefined),
			statusId: new FormControl<number | null | undefined>(undefined),
			statusIsActive: new FormControl<boolean | null | undefined>(undefined),
			statusNotes: new FormControl<string | null | undefined>(undefined),
			statusStartDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum MemberStatus { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface Party {
		abbreviation?: string | null;
		backgroundColour?: string | null;
		foregroundColour?: string | null;
		governmentType?: GovernmentType;
		id?: number | null;
		isIndependentParty?: boolean | null;
		isLordsMainParty?: boolean | null;
		isLordsSpiritualParty?: boolean | null;
		name?: string | null;
	}
	export interface PartyFormProperties {
		abbreviation: FormControl<string | null | undefined>,
		backgroundColour: FormControl<string | null | undefined>,
		foregroundColour: FormControl<string | null | undefined>,
		governmentType: FormControl<GovernmentType | null | undefined>,
		id: FormControl<number | null | undefined>,
		isIndependentParty: FormControl<boolean | null | undefined>,
		isLordsMainParty: FormControl<boolean | null | undefined>,
		isLordsSpiritualParty: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePartyFormGroup() {
		return new FormGroup<PartyFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			backgroundColour: new FormControl<string | null | undefined>(undefined),
			foregroundColour: new FormControl<string | null | undefined>(undefined),
			governmentType: new FormControl<GovernmentType | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isIndependentParty: new FormControl<boolean | null | undefined>(undefined),
			isLordsMainParty: new FormControl<boolean | null | undefined>(undefined),
			isLordsSpiritualParty: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GovernmentType { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface ConstituencyItem {
		links?: Array<Link>;
		value?: Constituency;
	}
	export interface ConstituencyItemFormProperties {
	}
	export function CreateConstituencyItemFormGroup() {
		return new FormGroup<ConstituencyItemFormProperties>({
		});

	}

	export interface ConstituencyMembersServiceSearchResult {
		items?: Array<ConstituencyItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface ConstituencyMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateConstituencyMembersServiceSearchResultFormGroup() {
		return new FormGroup<ConstituencyMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConstituencyRepresentationListItem {
		links?: Array<Link>;
		value?: Array<ConstituencyRepresentation>;
	}
	export interface ConstituencyRepresentationListItemFormProperties {
	}
	export function CreateConstituencyRepresentationListItemFormGroup() {
		return new FormGroup<ConstituencyRepresentationListItemFormProperties>({
		});

	}

	export interface ContactInformation {
		email?: string | null;
		fax?: string | null;
		isPreferred?: boolean | null;
		isWebAddress?: boolean | null;
		line1?: string | null;
		line2?: string | null;
		line3?: string | null;
		line4?: string | null;
		line5?: string | null;
		notes?: string | null;
		phone?: string | null;
		postcode?: string | null;
		type?: string | null;
		typeDescription?: string | null;
		typeId?: number | null;
	}
	export interface ContactInformationFormProperties {
		email: FormControl<string | null | undefined>,
		fax: FormControl<string | null | undefined>,
		isPreferred: FormControl<boolean | null | undefined>,
		isWebAddress: FormControl<boolean | null | undefined>,
		line1: FormControl<string | null | undefined>,
		line2: FormControl<string | null | undefined>,
		line3: FormControl<string | null | undefined>,
		line4: FormControl<string | null | undefined>,
		line5: FormControl<string | null | undefined>,
		notes: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,
		postcode: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		typeDescription: FormControl<string | null | undefined>,
		typeId: FormControl<number | null | undefined>,
	}
	export function CreateContactInformationFormGroup() {
		return new FormGroup<ContactInformationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			fax: new FormControl<string | null | undefined>(undefined),
			isPreferred: new FormControl<boolean | null | undefined>(undefined),
			isWebAddress: new FormControl<boolean | null | undefined>(undefined),
			line1: new FormControl<string | null | undefined>(undefined),
			line2: new FormControl<string | null | undefined>(undefined),
			line3: new FormControl<string | null | undefined>(undefined),
			line4: new FormControl<string | null | undefined>(undefined),
			line5: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			postcode: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			typeDescription: new FormControl<string | null | undefined>(undefined),
			typeId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ContactInformationListItem {
		links?: Array<Link>;
		value?: Array<ContactInformation>;
	}
	export interface ContactInformationListItemFormProperties {
	}
	export function CreateContactInformationListItemFormGroup() {
		return new FormGroup<ContactInformationListItemFormProperties>({
		});

	}

	export interface DebateContribution {
		answerCount?: number | null;
		debateId?: number | null;
		debateTitle?: string | null;
		debateWebsiteId?: string | null;
		firstTimecode?: Date | null;
		house?: string | null;
		interventionCount?: number | null;
		pointsOfOrderCount?: number | null;
		questionCount?: number | null;
		section?: string | null;
		sittingDate?: Date | null;
		speechCount?: number | null;
		statementsCount?: number | null;
		supplementaryQuestionCount?: number | null;
		totalContributions?: number | null;
	}
	export interface DebateContributionFormProperties {
		answerCount: FormControl<number | null | undefined>,
		debateId: FormControl<number | null | undefined>,
		debateTitle: FormControl<string | null | undefined>,
		debateWebsiteId: FormControl<string | null | undefined>,
		firstTimecode: FormControl<Date | null | undefined>,
		house: FormControl<string | null | undefined>,
		interventionCount: FormControl<number | null | undefined>,
		pointsOfOrderCount: FormControl<number | null | undefined>,
		questionCount: FormControl<number | null | undefined>,
		section: FormControl<string | null | undefined>,
		sittingDate: FormControl<Date | null | undefined>,
		speechCount: FormControl<number | null | undefined>,
		statementsCount: FormControl<number | null | undefined>,
		supplementaryQuestionCount: FormControl<number | null | undefined>,
		totalContributions: FormControl<number | null | undefined>,
	}
	export function CreateDebateContributionFormGroup() {
		return new FormGroup<DebateContributionFormProperties>({
			answerCount: new FormControl<number | null | undefined>(undefined),
			debateId: new FormControl<number | null | undefined>(undefined),
			debateTitle: new FormControl<string | null | undefined>(undefined),
			debateWebsiteId: new FormControl<string | null | undefined>(undefined),
			firstTimecode: new FormControl<Date | null | undefined>(undefined),
			house: new FormControl<string | null | undefined>(undefined),
			interventionCount: new FormControl<number | null | undefined>(undefined),
			pointsOfOrderCount: new FormControl<number | null | undefined>(undefined),
			questionCount: new FormControl<number | null | undefined>(undefined),
			section: new FormControl<string | null | undefined>(undefined),
			sittingDate: new FormControl<Date | null | undefined>(undefined),
			speechCount: new FormControl<number | null | undefined>(undefined),
			statementsCount: new FormControl<number | null | undefined>(undefined),
			supplementaryQuestionCount: new FormControl<number | null | undefined>(undefined),
			totalContributions: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DebateContributionItem {
		links?: Array<Link>;
		value?: DebateContribution;
	}
	export interface DebateContributionItemFormProperties {
	}
	export function CreateDebateContributionItemFormGroup() {
		return new FormGroup<DebateContributionItemFormProperties>({
		});

	}

	export interface DebateContributionMembersServiceSearchResult {
		items?: Array<DebateContributionItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface DebateContributionMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateDebateContributionMembersServiceSearchResultFormGroup() {
		return new FormGroup<DebateContributionMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EarlyDayMotion {
		dateTabled?: Date | null;
		id?: number | null;
		isAmendment?: boolean | null;
		isPrayer?: boolean | null;
		number?: string | null;
		sponsorsCount?: number | null;
		title?: string | null;
	}
	export interface EarlyDayMotionFormProperties {
		dateTabled: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		isAmendment: FormControl<boolean | null | undefined>,
		isPrayer: FormControl<boolean | null | undefined>,
		number: FormControl<string | null | undefined>,
		sponsorsCount: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateEarlyDayMotionFormGroup() {
		return new FormGroup<EarlyDayMotionFormProperties>({
			dateTabled: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isAmendment: new FormControl<boolean | null | undefined>(undefined),
			isPrayer: new FormControl<boolean | null | undefined>(undefined),
			number: new FormControl<string | null | undefined>(undefined),
			sponsorsCount: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EarlyDayMotionItem {
		links?: Array<Link>;
		value?: EarlyDayMotion;
	}
	export interface EarlyDayMotionItemFormProperties {
	}
	export function CreateEarlyDayMotionItemFormGroup() {
		return new FormGroup<EarlyDayMotionItemFormProperties>({
		});

	}

	export interface EarlyDayMotionMembersServiceSearchResult {
		items?: Array<EarlyDayMotionItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface EarlyDayMotionMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateEarlyDayMotionMembersServiceSearchResultFormGroup() {
		return new FormGroup<EarlyDayMotionMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ElectionCandidate {
		memberId?: number | null;
		name?: string | null;
		party?: Party;
		rankOrder?: number | null;
		resultChange?: string | null;
		voteShare?: number | null;
		votes?: number | null;
	}
	export interface ElectionCandidateFormProperties {
		memberId: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		rankOrder: FormControl<number | null | undefined>,
		resultChange: FormControl<string | null | undefined>,
		voteShare: FormControl<number | null | undefined>,
		votes: FormControl<number | null | undefined>,
	}
	export function CreateElectionCandidateFormGroup() {
		return new FormGroup<ElectionCandidateFormProperties>({
			memberId: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			rankOrder: new FormControl<number | null | undefined>(undefined),
			resultChange: new FormControl<string | null | undefined>(undefined),
			voteShare: new FormControl<number | null | undefined>(undefined),
			votes: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ElectionResult {
		candidates?: Array<ElectionCandidate>;
		constituencyName?: string | null;
		electionDate?: Date | null;
		electionId?: number | null;
		electionTitle?: string | null;
		electorate?: number | null;
		isGeneralElection?: boolean | null;
		isNotional?: boolean | null;
		majority?: number | null;
		result?: string | null;
		turnout?: number | null;
		winningParty?: Party;
	}
	export interface ElectionResultFormProperties {
		constituencyName: FormControl<string | null | undefined>,
		electionDate: FormControl<Date | null | undefined>,
		electionId: FormControl<number | null | undefined>,
		electionTitle: FormControl<string | null | undefined>,
		electorate: FormControl<number | null | undefined>,
		isGeneralElection: FormControl<boolean | null | undefined>,
		isNotional: FormControl<boolean | null | undefined>,
		majority: FormControl<number | null | undefined>,
		result: FormControl<string | null | undefined>,
		turnout: FormControl<number | null | undefined>,
	}
	export function CreateElectionResultFormGroup() {
		return new FormGroup<ElectionResultFormProperties>({
			constituencyName: new FormControl<string | null | undefined>(undefined),
			electionDate: new FormControl<Date | null | undefined>(undefined),
			electionId: new FormControl<number | null | undefined>(undefined),
			electionTitle: new FormControl<string | null | undefined>(undefined),
			electorate: new FormControl<number | null | undefined>(undefined),
			isGeneralElection: new FormControl<boolean | null | undefined>(undefined),
			isNotional: new FormControl<boolean | null | undefined>(undefined),
			majority: new FormControl<number | null | undefined>(undefined),
			result: new FormControl<string | null | undefined>(undefined),
			turnout: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ElectionResultItem {
		links?: Array<Link>;
		value?: ElectionResult;
	}
	export interface ElectionResultItemFormProperties {
	}
	export function CreateElectionResultItemFormGroup() {
		return new FormGroup<ElectionResultItemFormProperties>({
		});

	}

	export interface ElectionResultListItem {
		links?: Array<Link>;
		value?: Array<ElectionResult>;
	}
	export interface ElectionResultListItemFormProperties {
	}
	export function CreateElectionResultListItemFormGroup() {
		return new FormGroup<ElectionResultListItemFormProperties>({
		});

	}

	export interface GenericReferenceData {
		description?: string | null;
		id?: number | null;
	}
	export interface GenericReferenceDataFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreateGenericReferenceDataFormGroup() {
		return new FormGroup<GenericReferenceDataFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface GovernmentOppositionPost {
		createdWhen?: Date | null;
		governmentDepartments?: Array<GovernmentDepartment>;
		hansardName?: string | null;
		id?: number | null;
		name?: string | null;
		order?: number | null;
		postHolders?: Array<GovernmentOppositionPostHolder>;
		type?: PostType;
	}
	export interface GovernmentOppositionPostFormProperties {
		createdWhen: FormControl<Date | null | undefined>,
		hansardName: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		type: FormControl<PostType | null | undefined>,
	}
	export function CreateGovernmentOppositionPostFormGroup() {
		return new FormGroup<GovernmentOppositionPostFormProperties>({
			createdWhen: new FormControl<Date | null | undefined>(undefined),
			hansardName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<PostType | null | undefined>(undefined),
		});

	}

	export interface GovernmentOppositionPostHolder {
		endDate?: Date | null;
		isPaid?: boolean | null;
		layingMinisterName?: string | null;
		member?: MemberItem;
		startDate?: Date | null;
	}
	export interface GovernmentOppositionPostHolderFormProperties {
		endDate: FormControl<Date | null | undefined>,
		isPaid: FormControl<boolean | null | undefined>,
		layingMinisterName: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateGovernmentOppositionPostHolderFormGroup() {
		return new FormGroup<GovernmentOppositionPostHolderFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			isPaid: new FormControl<boolean | null | undefined>(undefined),
			layingMinisterName: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum PostType { _0 = 0, _1 = 1, _2 = 2 }

	export interface GovernmentOppositionPostItem {
		links?: Array<Link>;
		value?: GovernmentOppositionPost;
	}
	export interface GovernmentOppositionPostItemFormProperties {
	}
	export function CreateGovernmentOppositionPostItemFormGroup() {
		return new FormGroup<GovernmentOppositionPostItemFormProperties>({
		});

	}

	export interface GroupedQuestion {
		dateTabled?: Date | null;
		questionUin?: string | null;
	}
	export interface GroupedQuestionFormProperties {
		dateTabled: FormControl<Date | null | undefined>,
		questionUin: FormControl<string | null | undefined>,
	}
	export function CreateGroupedQuestionFormGroup() {
		return new FormGroup<GroupedQuestionFormProperties>({
			dateTabled: new FormControl<Date | null | undefined>(undefined),
			questionUin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Location {
		childContexts?: Array<LocationContext>;
		context?: LocationContext;
		parentContext?: LocationContext;
		stateOfTheParties?: Array<PartySeatCount>;
	}
	export interface LocationFormProperties {
	}
	export function CreateLocationFormGroup() {
		return new FormGroup<LocationFormProperties>({
		});

	}

	export interface LocationContext {
		id?: number | null;
		name?: string | null;
		type?: LocationType;
		typeName?: string | null;
	}
	export interface LocationContextFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<LocationType | null | undefined>,
		typeName: FormControl<string | null | undefined>,
	}
	export function CreateLocationContextFormGroup() {
		return new FormGroup<LocationContextFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LocationType | null | undefined>(undefined),
			typeName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LocationType { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface PartySeatCount {
		female?: number | null;
		male?: number | null;
		nonBinary?: number | null;
		party?: Party;
		total?: number | null;
	}
	export interface PartySeatCountFormProperties {
		female: FormControl<number | null | undefined>,
		male: FormControl<number | null | undefined>,
		nonBinary: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreatePartySeatCountFormGroup() {
		return new FormGroup<PartySeatCountFormProperties>({
			female: new FormControl<number | null | undefined>(undefined),
			male: new FormControl<number | null | undefined>(undefined),
			nonBinary: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LocationItem {
		links?: Array<Link>;
		value?: Location;
	}
	export interface LocationItemFormProperties {
	}
	export function CreateLocationItemFormGroup() {
		return new FormGroup<LocationItemFormProperties>({
		});

	}

	export interface LordsByType {
		bishop?: number | null;
		hereditary?: number | null;
		life?: number | null;
		party?: Party;
		total?: number | null;
	}
	export interface LordsByTypeFormProperties {
		bishop: FormControl<number | null | undefined>,
		hereditary: FormControl<number | null | undefined>,
		life: FormControl<number | null | undefined>,
		total: FormControl<number | null | undefined>,
	}
	export function CreateLordsByTypeFormGroup() {
		return new FormGroup<LordsByTypeFormProperties>({
			bishop: new FormControl<number | null | undefined>(undefined),
			hereditary: new FormControl<number | null | undefined>(undefined),
			life: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LordsByTypeItem {
		links?: Array<Link>;
		value?: LordsByType;
	}
	export interface LordsByTypeItemFormProperties {
	}
	export function CreateLordsByTypeItemFormGroup() {
		return new FormGroup<LordsByTypeItemFormProperties>({
		});

	}

	export interface LordsByTypeMembersServiceSearchResult {
		items?: Array<LordsByTypeItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface LordsByTypeMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateLordsByTypeMembersServiceSearchResultFormGroup() {
		return new FormGroup<LordsByTypeMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MemberBiography {
		committeeMemberships?: Array<BiographyItem>;
		electionsContested?: Array<BiographyItem>;
		governmentPosts?: Array<BiographyItem>;
		houseMemberships?: Array<BiographyItem>;
		oppositionPosts?: Array<BiographyItem>;
		otherPosts?: Array<BiographyItem>;
		partyAffiliations?: Array<BiographyItem>;
		representations?: Array<BiographyItem>;
	}
	export interface MemberBiographyFormProperties {
	}
	export function CreateMemberBiographyFormGroup() {
		return new FormGroup<MemberBiographyFormProperties>({
		});

	}

	export interface MemberBiographyItem {
		links?: Array<Link>;
		value?: MemberBiography;
	}
	export interface MemberBiographyItemFormProperties {
	}
	export function CreateMemberBiographyItemFormGroup() {
		return new FormGroup<MemberBiographyItemFormProperties>({
		});

	}

	export interface MemberFocus {
		category?: string | null;
		focus?: Array<string>;
	}
	export interface MemberFocusFormProperties {
		category: FormControl<string | null | undefined>,
	}
	export function CreateMemberFocusFormGroup() {
		return new FormGroup<MemberFocusFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemberFocusListItem {
		links?: Array<Link>;
		value?: Array<MemberFocus>;
	}
	export interface MemberFocusListItemFormProperties {
	}
	export function CreateMemberFocusListItemFormGroup() {
		return new FormGroup<MemberFocusListItemFormProperties>({
		});

	}

	export interface MemberHistory {
		houseMembershipHistory?: Array<HouseMembership>;
		id?: number | null;
		nameHistory?: Array<MemberName>;
		partyHistory?: Array<MemberParty>;
		thumbnailUrl?: string | null;
	}
	export interface MemberHistoryFormProperties {
		id: FormControl<number | null | undefined>,
		thumbnailUrl: FormControl<string | null | undefined>,
	}
	export function CreateMemberHistoryFormGroup() {
		return new FormGroup<MemberHistoryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemberName {
		endDate?: Date | null;
		nameAddressAs?: string | null;
		nameDisplayAs?: string | null;
		nameFullTitle?: string | null;
		nameListAs?: string | null;
		startDate?: Date | null;
	}
	export interface MemberNameFormProperties {
		endDate: FormControl<Date | null | undefined>,
		nameAddressAs: FormControl<string | null | undefined>,
		nameDisplayAs: FormControl<string | null | undefined>,
		nameFullTitle: FormControl<string | null | undefined>,
		nameListAs: FormControl<string | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateMemberNameFormGroup() {
		return new FormGroup<MemberNameFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			nameAddressAs: new FormControl<string | null | undefined>(undefined),
			nameDisplayAs: new FormControl<string | null | undefined>(undefined),
			nameFullTitle: new FormControl<string | null | undefined>(undefined),
			nameListAs: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MemberParty {
		endDate?: Date | null;
		party?: Party;
		startDate?: Date | null;
	}
	export interface MemberPartyFormProperties {
		endDate: FormControl<Date | null | undefined>,
		startDate: FormControl<Date | null | undefined>,
	}
	export function CreateMemberPartyFormGroup() {
		return new FormGroup<MemberPartyFormProperties>({
			endDate: new FormControl<Date | null | undefined>(undefined),
			startDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MemberHistoryItem {
		links?: Array<Link>;
		value?: MemberHistory;
	}
	export interface MemberHistoryItemFormProperties {
	}
	export function CreateMemberHistoryItemFormGroup() {
		return new FormGroup<MemberHistoryItemFormProperties>({
		});

	}

	export interface MemberMembersServiceSearchResult {
		items?: Array<MemberItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface MemberMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateMemberMembersServiceSearchResultFormGroup() {
		return new FormGroup<MemberMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MembersInterests {
		interestCategories?: Array<RegisteredInterestCategory>;
		member?: Member;
	}
	export interface MembersInterestsFormProperties {
	}
	export function CreateMembersInterestsFormGroup() {
		return new FormGroup<MembersInterestsFormProperties>({
		});

	}

	export interface RegisteredInterestCategory {
		id?: number | null;
		interests?: Array<RegisteredInterest>;
		name?: string | null;
		sortOrder?: number | null;
	}
	export interface RegisteredInterestCategoryFormProperties {
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateRegisteredInterestCategoryFormGroup() {
		return new FormGroup<RegisteredInterestCategoryFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface RegisteredInterest {
		childInterests?: Array<RegisteredInterest>;
		createdWhen?: Date | null;
		deletedWhen?: Date | null;
		id?: number | null;
		interest?: string | null;
		isCorrection?: boolean | null;
		lastAmendedWhen?: Date | null;
	}
	export interface RegisteredInterestFormProperties {
		createdWhen: FormControl<Date | null | undefined>,
		deletedWhen: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		interest: FormControl<string | null | undefined>,
		isCorrection: FormControl<boolean | null | undefined>,
		lastAmendedWhen: FormControl<Date | null | undefined>,
	}
	export function CreateRegisteredInterestFormGroup() {
		return new FormGroup<RegisteredInterestFormProperties>({
			createdWhen: new FormControl<Date | null | undefined>(undefined),
			deletedWhen: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			interest: new FormControl<string | null | undefined>(undefined),
			isCorrection: new FormControl<boolean | null | undefined>(undefined),
			lastAmendedWhen: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface MembersInterestsItem {
		links?: Array<Link>;
		value?: MembersInterests;
	}
	export interface MembersInterestsItemFormProperties {
	}
	export function CreateMembersInterestsItemFormGroup() {
		return new FormGroup<MembersInterestsItemFormProperties>({
		});

	}

	export interface MembersInterestsMembersServiceSearchResult {
		items?: Array<MembersInterestsItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface MembersInterestsMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateMembersInterestsMembersServiceSearchResultFormGroup() {
		return new FormGroup<MembersInterestsMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface MembersStaff {
		member?: Member;
		staff?: Array<Staff>;
	}
	export interface MembersStaffFormProperties {
	}
	export function CreateMembersStaffFormGroup() {
		return new FormGroup<MembersStaffFormProperties>({
		});

	}

	export interface Staff {
		details?: string | null;
		forename?: string | null;
		surname?: string | null;
		title?: string | null;
	}
	export interface StaffFormProperties {
		details: FormControl<string | null | undefined>,
		forename: FormControl<string | null | undefined>,
		surname: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateStaffFormGroup() {
		return new FormGroup<StaffFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			forename: new FormControl<string | null | undefined>(undefined),
			surname: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MembersStaffItem {
		links?: Array<Link>;
		value?: MembersStaff;
	}
	export interface MembersStaffItemFormProperties {
	}
	export function CreateMembersStaffItemFormGroup() {
		return new FormGroup<MembersStaffItemFormProperties>({
		});

	}

	export interface MembersStaffMembersServiceSearchResult {
		items?: Array<MembersStaffItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface MembersStaffMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateMembersStaffMembersServiceSearchResultFormGroup() {
		return new FormGroup<MembersStaffMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartyItem {
		links?: Array<Link>;
		value?: Party;
	}
	export interface PartyItemFormProperties {
	}
	export function CreatePartyItemFormGroup() {
		return new FormGroup<PartyItemFormProperties>({
		});

	}

	export interface PartyMembersServiceSearchResult {
		items?: Array<PartyItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface PartyMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreatePartyMembersServiceSearchResultFormGroup() {
		return new FormGroup<PartyMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PartySeatCountItem {
		links?: Array<Link>;
		value?: PartySeatCount;
	}
	export interface PartySeatCountItemFormProperties {
	}
	export function CreatePartySeatCountItemFormGroup() {
		return new FormGroup<PartySeatCountItemFormProperties>({
		});

	}

	export interface PartySeatCountMembersServiceSearchResult {
		items?: Array<PartySeatCountItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface PartySeatCountMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreatePartySeatCountMembersServiceSearchResultFormGroup() {
		return new FormGroup<PartySeatCountMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PortraitCropEnum { _0 = 0, _1 = 1, _2 = 2, _3 = 3 }

	export interface RegisteredInterestCategoryListItem {
		links?: Array<Link>;
		value?: Array<RegisteredInterestCategory>;
	}
	export interface RegisteredInterestCategoryListItemFormProperties {
	}
	export function CreateRegisteredInterestCategoryListItemFormGroup() {
		return new FormGroup<RegisteredInterestCategoryListItemFormProperties>({
		});

	}

	export interface StaffListItem {
		links?: Array<Link>;
		value?: Array<Staff>;
	}
	export interface StaffListItemFormProperties {
	}
	export function CreateStaffListItemFormGroup() {
		return new FormGroup<StaffListItemFormProperties>({
		});

	}

	export interface StringItem {
		links?: Array<Link>;
		value?: string | null;
	}
	export interface StringItemFormProperties {
		value: FormControl<string | null | undefined>,
	}
	export function CreateStringItemFormGroup() {
		return new FormGroup<StringItemFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Vote {
		actedAsTeller?: boolean | null;
		date?: Date | null;
		divisionNumber?: number | null;
		house?: House;
		id?: number | null;
		inAffirmativeLobby?: boolean | null;
		numberAgainst?: number | null;
		numberInFavour?: number | null;
		title?: string | null;
	}
	export interface VoteFormProperties {
		actedAsTeller: FormControl<boolean | null | undefined>,
		date: FormControl<Date | null | undefined>,
		divisionNumber: FormControl<number | null | undefined>,
		house: FormControl<House | null | undefined>,
		id: FormControl<number | null | undefined>,
		inAffirmativeLobby: FormControl<boolean | null | undefined>,
		numberAgainst: FormControl<number | null | undefined>,
		numberInFavour: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateVoteFormGroup() {
		return new FormGroup<VoteFormProperties>({
			actedAsTeller: new FormControl<boolean | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			divisionNumber: new FormControl<number | null | undefined>(undefined),
			house: new FormControl<House | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			inAffirmativeLobby: new FormControl<boolean | null | undefined>(undefined),
			numberAgainst: new FormControl<number | null | undefined>(undefined),
			numberInFavour: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VoteItem {
		links?: Array<Link>;
		value?: Vote;
	}
	export interface VoteItemFormProperties {
	}
	export function CreateVoteItemFormGroup() {
		return new FormGroup<VoteItemFormProperties>({
		});

	}

	export interface VoteMembersServiceSearchResult {
		items?: Array<VoteItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface VoteMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateVoteMembersServiceSearchResultFormGroup() {
		return new FormGroup<VoteMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WrittenQuestion {
		answerIsCorrection?: boolean | null;
		answerIsHolding?: boolean | null;
		answerText?: string | null;
		answeringBody?: AnsweringBody;
		answeringBodyId?: number | null;
		answeringMember?: Member;
		answeringMemberId?: number | null;
		askingMemberId?: number | null;
		attachmentCount?: number | null;
		correctingMember?: Member;
		correctingMemberId?: number | null;
		dateAnswered?: Date | null;
		dateForAnswer?: Date | null;
		dateTabled?: Date | null;
		groupedQuestions?: Array<string>;
		groupedQuestionsDates?: Array<GroupedQuestion>;
		heading?: string | null;
		house?: House;
		id?: number | null;
		isNamedDay?: boolean | null;
		isWithdrawn?: boolean | null;
		memberHasInterest?: boolean | null;
		questionText?: string | null;
		uin?: string | null;
	}
	export interface WrittenQuestionFormProperties {
		answerIsCorrection: FormControl<boolean | null | undefined>,
		answerIsHolding: FormControl<boolean | null | undefined>,
		answerText: FormControl<string | null | undefined>,
		answeringBodyId: FormControl<number | null | undefined>,
		answeringMemberId: FormControl<number | null | undefined>,
		askingMemberId: FormControl<number | null | undefined>,
		attachmentCount: FormControl<number | null | undefined>,
		correctingMemberId: FormControl<number | null | undefined>,
		dateAnswered: FormControl<Date | null | undefined>,
		dateForAnswer: FormControl<Date | null | undefined>,
		dateTabled: FormControl<Date | null | undefined>,
		heading: FormControl<string | null | undefined>,
		house: FormControl<House | null | undefined>,
		id: FormControl<number | null | undefined>,
		isNamedDay: FormControl<boolean | null | undefined>,
		isWithdrawn: FormControl<boolean | null | undefined>,
		memberHasInterest: FormControl<boolean | null | undefined>,
		questionText: FormControl<string | null | undefined>,
		uin: FormControl<string | null | undefined>,
	}
	export function CreateWrittenQuestionFormGroup() {
		return new FormGroup<WrittenQuestionFormProperties>({
			answerIsCorrection: new FormControl<boolean | null | undefined>(undefined),
			answerIsHolding: new FormControl<boolean | null | undefined>(undefined),
			answerText: new FormControl<string | null | undefined>(undefined),
			answeringBodyId: new FormControl<number | null | undefined>(undefined),
			answeringMemberId: new FormControl<number | null | undefined>(undefined),
			askingMemberId: new FormControl<number | null | undefined>(undefined),
			attachmentCount: new FormControl<number | null | undefined>(undefined),
			correctingMemberId: new FormControl<number | null | undefined>(undefined),
			dateAnswered: new FormControl<Date | null | undefined>(undefined),
			dateForAnswer: new FormControl<Date | null | undefined>(undefined),
			dateTabled: new FormControl<Date | null | undefined>(undefined),
			heading: new FormControl<string | null | undefined>(undefined),
			house: new FormControl<House | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			isNamedDay: new FormControl<boolean | null | undefined>(undefined),
			isWithdrawn: new FormControl<boolean | null | undefined>(undefined),
			memberHasInterest: new FormControl<boolean | null | undefined>(undefined),
			questionText: new FormControl<string | null | undefined>(undefined),
			uin: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WrittenQuestionItem {
		links?: Array<Link>;
		value?: WrittenQuestion;
	}
	export interface WrittenQuestionItemFormProperties {
	}
	export function CreateWrittenQuestionItemFormGroup() {
		return new FormGroup<WrittenQuestionItemFormProperties>({
		});

	}

	export interface WrittenQuestionMembersServiceSearchResult {
		items?: Array<WrittenQuestionItem>;
		links?: Array<Link>;
		resultContext?: string | null;
		skip?: number | null;
		take?: number | null;
		totalResults?: number | null;
	}
	export interface WrittenQuestionMembersServiceSearchResultFormProperties {
		resultContext: FormControl<string | null | undefined>,
		skip: FormControl<number | null | undefined>,
		take: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateWrittenQuestionMembersServiceSearchResultFormGroup() {
		return new FormGroup<WrittenQuestionMembersServiceSearchResultFormProperties>({
			resultContext: new FormControl<string | null | undefined>(undefined),
			skip: new FormControl<number | null | undefined>(undefined),
			take: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of locations, both parent and child
		 * Get api/Location/Browse/{locationType}/{locationName}
		 * @param {LocationType} locationType Location by type of location
		 * @param {string} locationName Location by name specified
		 * @return {LocationItem} Success
		 */
		ApiLocationBrowse_locationType_locationNameGet(locationType: LocationType, locationName: string, headersHandler?: () => HttpHeaders): Observable<LocationItem> {
			return this.http.get<LocationItem>(this.baseUri + 'api/Location/Browse/' + locationType + '/' + (locationName == null ? '' : encodeURIComponent(locationName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of constituencies
		 * Get api/Location/Constituency/Search
		 * @param {string} searchText Constituencies containing serach term in their name
		 * @param {number} skip The number of records to skip from the first, default is 0
		 * @param {number} take The number of records to return, default is 20. Maximum is 20
		 * @return {ConstituencyMembersServiceSearchResult} Success
		 */
		ApiLocationConstituencySearchGetBySearchTextAndSkipAndTake(searchText: string | null | undefined, skip: number | null | undefined, take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<ConstituencyMembersServiceSearchResult> {
			return this.http.get<ConstituencyMembersServiceSearchResult>(this.baseUri + 'api/Location/Constituency/Search?searchText=' + (searchText == null ? '' : encodeURIComponent(searchText)) + '&skip=' + skip + '&take=' + take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a constituency by ID
		 * Get api/Location/Constituency/{id}
		 * @param {number} id Constituency by ID
		 * @return {ConstituencyItem} Success
		 */
		ApiLocationConstituency_idGet(id: number, headersHandler?: () => HttpHeaders): Observable<ConstituencyItem> {
			return this.http.get<ConstituencyItem>(this.baseUri + 'api/Location/Constituency/' + id, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns latest election result by constituency id
		 * Get api/Location/Constituency/{id}/ElectionResult/Latest
		 * @param {number} id Latest election result by constituency id
		 * @return {ElectionResultItem} Success
		 */
		ApiLocationConstituency_idElectionResultLatestGet(id: number, headersHandler?: () => HttpHeaders): Observable<ElectionResultItem> {
			return this.http.get<ElectionResultItem>(this.baseUri + 'api/Location/Constituency/' + id + '/ElectionResult/Latest', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an election result by constituency and election id
		 * Get api/Location/Constituency/{id}/ElectionResult/{electionId}
		 * @param {number} id Election result by constituency id
		 * @param {number} electionId Election result by election id
		 * @return {ElectionResultItem} Success
		 */
		ApiLocationConstituency_idElectionResult_electionIdGet(id: number, electionId: number, headersHandler?: () => HttpHeaders): Observable<ElectionResultItem> {
			return this.http.get<ElectionResultItem>(this.baseUri + 'api/Location/Constituency/' + id + '/ElectionResult/' + electionId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of election results by constituency ID
		 * Get api/Location/Constituency/{id}/ElectionResults
		 * @param {number} id Elections results by constituency ID
		 * @return {ElectionResultListItem} Success
		 */
		ApiLocationConstituency_idElectionResultsGet(id: number, headersHandler?: () => HttpHeaders): Observable<ElectionResultListItem> {
			return this.http.get<ElectionResultListItem>(this.baseUri + 'api/Location/Constituency/' + id + '/ElectionResults', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns geometry by constituency ID
		 * Get api/Location/Constituency/{id}/Geometry
		 * @param {number} id Geometry by constituency ID
		 * @return {StringItem} Success
		 */
		ApiLocationConstituency_idGeometryGet(id: number, headersHandler?: () => HttpHeaders): Observable<StringItem> {
			return this.http.get<StringItem>(this.baseUri + 'api/Location/Constituency/' + id + '/Geometry', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of representations by constituency ID
		 * Get api/Location/Constituency/{id}/Representations
		 * @param {number} id Representations by constituency ID
		 * @return {ConstituencyRepresentationListItem} Success
		 */
		ApiLocationConstituency_idRepresentationsGet(id: number, headersHandler?: () => HttpHeaders): Observable<ConstituencyRepresentationListItem> {
			return this.http.get<ConstituencyRepresentationListItem>(this.baseUri + 'api/Location/Constituency/' + id + '/Representations', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a synopsis by constituency ID
		 * Get api/Location/Constituency/{id}/Synopsis
		 * @param {number} id Synopsis by constituency ID
		 * @return {StringItem} Success
		 */
		ApiLocationConstituency_idSynopsisGet(id: number, headersHandler?: () => HttpHeaders): Observable<StringItem> {
			return this.http.get<StringItem>(this.baseUri + 'api/Location/Constituency/' + id + '/Synopsis', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of registered interests
		 * Get api/LordsInterests/Register
		 * @param {string} searchTerm Registered interests containing search term
		 * @param {number} page Page of results to return, default 0. Results per page 20.
		 * @param {boolean} includeDeleted Registered interests that have been deleted
		 * @return {MembersInterestsMembersServiceSearchResult} Success
		 */
		ApiLordsInterestsRegisterGetBySearchTermAndPageAndIncludeDeleted(searchTerm: string | null | undefined, page: number | null | undefined, includeDeleted: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<MembersInterestsMembersServiceSearchResult> {
			return this.http.get<MembersInterestsMembersServiceSearchResult>(this.baseUri + 'api/LordsInterests/Register?searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&page=' + page + '&includeDeleted=' + includeDeleted, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of staff
		 * Get api/LordsInterests/Staff
		 * @param {string} searchTerm Staff containing search term
		 * @param {number} page Page of results to return, default 0. Results per page 20.
		 * @return {MembersStaffMembersServiceSearchResult} Success
		 */
		ApiLordsInterestsStaffGetBySearchTermAndPage(searchTerm: string | null | undefined, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<MembersStaffMembersServiceSearchResult> {
			return this.http.get<MembersStaffMembersServiceSearchResult>(this.baseUri + 'api/LordsInterests/Staff?searchTerm=' + (searchTerm == null ? '' : encodeURIComponent(searchTerm)) + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return members by ID with list of their historical names, parties and memberships
		 * Get api/Members/History
		 * @param {Array<number>} ids List of MemberIds to find
		 * @return {Array<MemberHistoryItem>} Success
		 */
		ApiMembersHistoryGetByIds(ids: Array<number> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<MemberHistoryItem>> {
			return this.http.get<Array<MemberHistoryItem>>(this.baseUri + 'api/Members/History?' + ids?.map(z => `ids=${z}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of current members of the Commons or Lords
		 * Get api/Members/Search
		 * @param {string} Name Members where name contains term specified
		 * @param {string} Location Members where postcode or geographical location matches the term specified
		 * @param {string} PostTitle Members which have held the post specified
		 * @param {number} PartyId Members which are currently affiliated with party with party ID
		 * @param {House} House Members where their most recent house is the house specified
		 * @param {number} ConstituencyId Members which currently hold the constituency with constituency id
		 * @param {string} NameStartsWith Members with surname begining with letter(s) specified
		 * @param {string} Gender Members with the gender specified
		 * @param {Date} MembershipStartedSince Members who started on or after the date given
		 * @param {Date} MembershipEnded_MembershipEndedSince Members who left the House on or after the date given
		 * @param {Date} MembershipInDateRange_WasMemberOnOrAfter Members who were active on or after the date specified
		 * @param {Date} MembershipInDateRange_WasMemberOnOrBefore Members who were active on or before the date specified
		 * @param {House} MembershipInDateRange_WasMemberOfHouse Members who were active in the house specifid
		 * @param {boolean} IsEligible Members currently Eligible to sit in their House
		 * @param {boolean} IsCurrentMember Members who are current or former members
		 * @param {number} PolicyInterestId Members with specified policy interest
		 * @param {string} Experience Members with specified experience
		 * @param {number} skip The number of records to skip from the first, default is 0
		 * @param {number} take The number of records to return, default is 20. Maximum is 20
		 * @return {MemberMembersServiceSearchResult} Success
		 */
		ApiMembersSearchGetByNameAndLocationAndPostTitleAndPartyIdAndHouseAndConstituencyIdAndNameStartsWithAndGenderAndMembershipStartedSinceAndMembershipEnded_MembershipEndedSinceAndMembershipEnded_MembershipEndReasonIdsAndMembershipInDateRange_WasMemberOnOrAfterAndMembershipInDateRange_WasMemberOnOrBeforeAndMembershipInDateRange_WasMemberOfHouseAndIsEligibleAndIsCurrentMemberAndPolicyInterestIdAndExperienceAndSkipAndTake(Name: string | null | undefined, Location: string | null | undefined, PostTitle: string | null | undefined, PartyId: number | null | undefined, House: House | null | undefined, ConstituencyId: number | null | undefined, NameStartsWith: string | null | undefined, Gender: string | null | undefined, MembershipStartedSince: Date | null | undefined, MembershipEnded_MembershipEndedSince: Date | null | undefined, MembershipEnded_MembershipEndReasonIds: Array<number> | null | undefined, MembershipInDateRange_WasMemberOnOrAfter: Date | null | undefined, MembershipInDateRange_WasMemberOnOrBefore: Date | null | undefined, MembershipInDateRange_WasMemberOfHouse: House | null | undefined, IsEligible: boolean | null | undefined, IsCurrentMember: boolean | null | undefined, PolicyInterestId: number | null | undefined, Experience: string | null | undefined, skip: number | null | undefined, take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<MemberMembersServiceSearchResult> {
			return this.http.get<MemberMembersServiceSearchResult>(this.baseUri + 'api/Members/Search?Name=' + (Name == null ? '' : encodeURIComponent(Name)) + '&Location=' + (Location == null ? '' : encodeURIComponent(Location)) + '&PostTitle=' + (PostTitle == null ? '' : encodeURIComponent(PostTitle)) + '&PartyId=' + PartyId + '&House=' + House + '&ConstituencyId=' + ConstituencyId + '&NameStartsWith=' + (NameStartsWith == null ? '' : encodeURIComponent(NameStartsWith)) + '&Gender=' + (Gender == null ? '' : encodeURIComponent(Gender)) + '&MembershipStartedSince=' + MembershipStartedSince?.toISOString() + '&MembershipEnded_MembershipEndedSince=' + MembershipEnded_MembershipEndedSince?.toISOString() + '&' + MembershipEnded_MembershipEndReasonIds?.map(z => `MembershipEnded.MembershipEndReasonIds=${z}`).join('&') + '&MembershipInDateRange_WasMemberOnOrAfter=' + MembershipInDateRange_WasMemberOnOrAfter?.toISOString() + '&MembershipInDateRange_WasMemberOnOrBefore=' + MembershipInDateRange_WasMemberOnOrBefore?.toISOString() + '&MembershipInDateRange_WasMemberOfHouse=' + MembershipInDateRange_WasMemberOfHouse + '&IsEligible=' + IsEligible + '&IsCurrentMember=' + IsCurrentMember + '&PolicyInterestId=' + PolicyInterestId + '&Experience=' + (Experience == null ? '' : encodeURIComponent(Experience)) + '&skip=' + skip + '&take=' + take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of members of the Commons or Lords
		 * Get api/Members/SearchHistorical
		 * @param {string} name Members with names containing the term specified
		 * @param {Date} dateToSearchFor Members that were an active member of the Commons or Lords on the date specified
		 * @param {number} skip The number of records to skip from the first, default is 0
		 * @param {number} take The number of records to return, default is 20. Maximum is 20
		 * @return {MemberMembersServiceSearchResult} Success
		 */
		ApiMembersSearchHistoricalGetByNameAndDateToSearchForAndSkipAndTake(name: string | null | undefined, dateToSearchFor: Date | null | undefined, skip: number | null | undefined, take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<MemberMembersServiceSearchResult> {
			return this.http.get<MemberMembersServiceSearchResult>(this.baseUri + 'api/Members/SearchHistorical?name=' + (name == null ? '' : encodeURIComponent(name)) + '&dateToSearchFor=' + dateToSearchFor?.toISOString() + '&skip=' + skip + '&take=' + take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return member by ID
		 * Get api/Members/{id}
		 * @param {number} id Member by ID specified
		 * @param {Date} detailsForDate Member object will be populated with details from the date specified
		 * @return {MemberItem} Success
		 */
		ApiMembers_idGetByDetailsForDate(id: number, detailsForDate: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<MemberItem> {
			return this.http.get<MemberItem>(this.baseUri + 'api/Members/' + id + '?detailsForDate=' + detailsForDate?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return biography of member by ID
		 * Get api/Members/{id}/Biography
		 * @param {number} id Biography of Member by ID specified
		 * @return {MemberBiographyItem} Success
		 */
		ApiMembers_idBiographyGet(id: number, headersHandler?: () => HttpHeaders): Observable<MemberBiographyItem> {
			return this.http.get<MemberBiographyItem>(this.baseUri + 'api/Members/' + id + '/Biography', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return list of contact details of member by ID
		 * Get api/Members/{id}/Contact
		 * @param {number} id Contact details of Member by ID specified
		 * @return {ContactInformationListItem} Success
		 */
		ApiMembers_idContactGet(id: number, headersHandler?: () => HttpHeaders): Observable<ContactInformationListItem> {
			return this.http.get<ContactInformationListItem>(this.baseUri + 'api/Members/' + id + '/Contact', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return contribution summary of member by ID
		 * Get api/Members/{id}/ContributionSummary
		 * @param {number} id Contribution summary of Member by ID specified
		 * @return {DebateContributionMembersServiceSearchResult} Success
		 */
		ApiMembers_idContributionSummaryGetByPage(id: number, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<DebateContributionMembersServiceSearchResult> {
			return this.http.get<DebateContributionMembersServiceSearchResult>(this.baseUri + 'api/Members/' + id + '/ContributionSummary?page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return list of early day motions of member by ID
		 * Get api/Members/{id}/Edms
		 * @param {number} id Early day motions of Member by ID specified
		 * @return {EarlyDayMotionMembersServiceSearchResult} Success
		 */
		ApiMembers_idEdmsGetByPage(id: number, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<EarlyDayMotionMembersServiceSearchResult> {
			return this.http.get<EarlyDayMotionMembersServiceSearchResult>(this.baseUri + 'api/Members/' + id + '/Edms?page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return experience of member by ID
		 * Get api/Members/{id}/Experience
		 * @param {number} id Experience of Member by ID specified
		 * @return {BiographyExperienceListItem} Success
		 */
		ApiMembers_idExperienceGet(id: number, headersHandler?: () => HttpHeaders): Observable<BiographyExperienceListItem> {
			return this.http.get<BiographyExperienceListItem>(this.baseUri + 'api/Members/' + id + '/Experience', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return list of areas of focus of member by ID
		 * Get api/Members/{id}/Focus
		 * @param {number} id Areas of focus of Member by ID specified
		 * @return {MemberFocusListItem} Success
		 */
		ApiMembers_idFocusGet(id: number, headersHandler?: () => HttpHeaders): Observable<MemberFocusListItem> {
			return this.http.get<MemberFocusListItem>(this.baseUri + 'api/Members/' + id + '/Focus', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return latest election result of member by ID
		 * Get api/Members/{id}/LatestElectionResult
		 * @param {number} id Latest election result of Member by ID specified
		 * @return {ElectionResultItem} Success
		 */
		ApiMembers_idLatestElectionResultGet(id: number, headersHandler?: () => HttpHeaders): Observable<ElectionResultItem> {
			return this.http.get<ElectionResultItem>(this.baseUri + 'api/Members/' + id + '/LatestElectionResult', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return portrait of member by ID
		 * Get api/Members/{id}/Portrait
		 * @param {number} id Portrait of Member by ID specified
		 * @return {void} Success
		 */
		ApiMembers_idPortraitGetByCropTypeAndWebVersion(id: number, cropType: PortraitCropEnum | null | undefined, webVersion: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Members/' + id + '/Portrait?cropType=' + cropType + '&webVersion=' + webVersion, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return portrait url of member by ID
		 * Get api/Members/{id}/PortraitUrl
		 * @param {number} id Portrait url of Member by ID specified
		 * @return {StringItem} Success
		 */
		ApiMembers_idPortraitUrlGet(id: number, headersHandler?: () => HttpHeaders): Observable<StringItem> {
			return this.http.get<StringItem>(this.baseUri + 'api/Members/' + id + '/PortraitUrl', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return list of registered interests of member by ID
		 * Get api/Members/{id}/RegisteredInterests
		 * @param {number} id Registered interests of Member by ID specified
		 * @param {House} house Registered interests of Member by House specified
		 * @return {RegisteredInterestCategoryListItem} Success
		 */
		ApiMembers_idRegisteredInterestsGetByHouse(id: number, house: House | null | undefined, headersHandler?: () => HttpHeaders): Observable<RegisteredInterestCategoryListItem> {
			return this.http.get<RegisteredInterestCategoryListItem>(this.baseUri + 'api/Members/' + id + '/RegisteredInterests?house=' + house, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return list of staff of member by ID
		 * Get api/Members/{id}/Staff
		 * @param {number} id Staff of Member by ID specified
		 * @return {StaffListItem} Success
		 */
		ApiMembers_idStaffGet(id: number, headersHandler?: () => HttpHeaders): Observable<StaffListItem> {
			return this.http.get<StaffListItem>(this.baseUri + 'api/Members/' + id + '/Staff', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return synopsis of member by ID
		 * Get api/Members/{id}/Synopsis
		 * @param {number} id Synopsis of Member by ID specified
		 * @return {StringItem} Success
		 */
		ApiMembers_idSynopsisGet(id: number, headersHandler?: () => HttpHeaders): Observable<StringItem> {
			return this.http.get<StringItem>(this.baseUri + 'api/Members/' + id + '/Synopsis', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return thumbnail of member by ID
		 * Get api/Members/{id}/Thumbnail
		 * @param {number} id Thumbnail of Member by ID specified
		 * @return {void} Success
		 */
		ApiMembers_idThumbnailGet(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Members/' + id + '/Thumbnail', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Return thumbnail url of member by ID
		 * Get api/Members/{id}/ThumbnailUrl
		 * @param {number} id Thumbnail url of Member by ID specified
		 * @return {StringItem} Success
		 */
		ApiMembers_idThumbnailUrlGet(id: number, headersHandler?: () => HttpHeaders): Observable<StringItem> {
			return this.http.get<StringItem>(this.baseUri + 'api/Members/' + id + '/ThumbnailUrl', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return list of votes by member by ID
		 * Get api/Members/{id}/Voting
		 * @param {number} id Votes by Member by ID specified
		 * @return {VoteMembersServiceSearchResult} Success
		 */
		ApiMembers_idVotingGetByHouseAndPage(id: number, house: House, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<VoteMembersServiceSearchResult> {
			return this.http.get<VoteMembersServiceSearchResult>(this.baseUri + 'api/Members/' + id + '/Voting?house=' + house + '&page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return list of written questions by member by ID
		 * Get api/Members/{id}/WrittenQuestions
		 * @param {number} id Written questions by Member by ID specified
		 * @return {WrittenQuestionMembersServiceSearchResult} Success
		 */
		ApiMembers_idWrittenQuestionsGetByPage(id: number, page: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<WrittenQuestionMembersServiceSearchResult> {
			return this.http.get<WrittenQuestionMembersServiceSearchResult>(this.baseUri + 'api/Members/' + id + '/WrittenQuestions?page=' + page, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of current parties with at least one active member.
		 * Get api/Parties/GetActive/{house}
		 * @param {House} house Current parties by house
		 * @return {PartyMembersServiceSearchResult} Success
		 */
		ApiPartiesGetActive_houseGet(house: House, headersHandler?: () => HttpHeaders): Observable<PartyMembersServiceSearchResult> {
			return this.http.get<PartyMembersServiceSearchResult>(this.baseUri + 'api/Parties/GetActive/' + house, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns the composition of the House of Lords by peerage type.
		 * Get api/Parties/LordsByType/{forDate}
		 * @param {Date} forDate Composition of the Lords for date specified.
		 * @return {LordsByTypeMembersServiceSearchResult} Success
		 */
		ApiPartiesLordsByType_forDateGet(forDate: Date, headersHandler?: () => HttpHeaders): Observable<LordsByTypeMembersServiceSearchResult> {
			return this.http.get<LordsByTypeMembersServiceSearchResult>(this.baseUri + 'api/Parties/LordsByType/' + forDate.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns current state of parties
		 * Get api/Parties/StateOfTheParties/{house}/{forDate}
		 * @param {House} house State of parties in Commons or Lords.
		 * @param {Date} forDate State of parties for the date specified
		 * @return {PartySeatCountMembersServiceSearchResult} Success
		 */
		ApiPartiesStateOfTheParties_house_forDateGet(house: House, forDate: Date, headersHandler?: () => HttpHeaders): Observable<PartySeatCountMembersServiceSearchResult> {
			return this.http.get<PartySeatCountMembersServiceSearchResult>(this.baseUri + 'api/Parties/StateOfTheParties/' + house + '/' + forDate.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of departments.
		 * Get api/Posts/Departments/{type}
		 * @param {PostType} type Departments by type
		 * @return {Array<GovernmentDepartment>} Success
		 */
		ApiPostsDepartments_typeGet(type: PostType, headersHandler?: () => HttpHeaders): Observable<Array<GovernmentDepartment>> {
			return this.http.get<Array<GovernmentDepartment>>(this.baseUri + 'api/Posts/Departments/' + type, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of government posts.
		 * Get api/Posts/GovernmentPosts
		 * @param {number} departmentId Government posts by department ID
		 * @return {Array<GovernmentOppositionPostItem>} Success
		 */
		ApiPostsGovernmentPostsGetByDepartmentId(departmentId: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<GovernmentOppositionPostItem>> {
			return this.http.get<Array<GovernmentOppositionPostItem>>(this.baseUri + 'api/Posts/GovernmentPosts?departmentId=' + departmentId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of opposition posts.
		 * Get api/Posts/OppositionPosts
		 * @param {number} departmentId Opposition posts by department ID
		 * @return {Array<GovernmentOppositionPostItem>} Success
		 */
		ApiPostsOppositionPostsGetByDepartmentId(departmentId: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<GovernmentOppositionPostItem>> {
			return this.http.get<Array<GovernmentOppositionPostItem>>(this.baseUri + 'api/Posts/OppositionPosts?departmentId=' + departmentId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list containing the speaker and deputy speakers.
		 * Get api/Posts/SpeakerAndDeputies/{forDate}
		 * @param {Date} forDate Speaker and deputy speakers for date specified
		 * @return {Array<MemberItem>} Success
		 */
		ApiPostsSpeakerAndDeputies_forDateGet(forDate: Date, headersHandler?: () => HttpHeaders): Observable<Array<MemberItem>> {
			return this.http.get<Array<MemberItem>>(this.baseUri + 'api/Posts/SpeakerAndDeputies/' + forDate.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of spokespersons.
		 * Get api/Posts/Spokespersons
		 * @param {number} partyId Spokespersons by party ID
		 * @return {Array<GovernmentOppositionPostItem>} Success
		 */
		ApiPostsSpokespersonsGetByPartyId(partyId: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<GovernmentOppositionPostItem>> {
			return this.http.get<Array<GovernmentOppositionPostItem>>(this.baseUri + 'api/Posts/Spokespersons?partyId=' + partyId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of answering bodies.
		 * Get api/Reference/AnsweringBodies
		 * @return {Array<AnsweringBody>} Success
		 */
		ApiReferenceAnsweringBodiesGetByIdAndNameContains(id: number | null | undefined, nameContains: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AnsweringBody>> {
			return this.http.get<Array<AnsweringBody>>(this.baseUri + 'api/Reference/AnsweringBodies?id=' + id + '&nameContains=' + (nameContains == null ? '' : encodeURIComponent(nameContains)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of departments.
		 * Get api/Reference/Departments
		 * @return {Array<GovernmentDepartment>} Success
		 */
		ApiReferenceDepartmentsGetByIdAndNameContains(id: number | null | undefined, nameContains: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<GovernmentDepartment>> {
			return this.http.get<Array<GovernmentDepartment>>(this.baseUri + 'api/Reference/Departments?id=' + id + '&nameContains=' + (nameContains == null ? '' : encodeURIComponent(nameContains)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns department logo.
		 * Get api/Reference/Departments/{id}/Logo
		 * @param {number} id Logo by department ID
		 * @return {void} Success
		 */
		ApiReferenceDepartments_idLogoGet(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/Reference/Departments/' + id + '/Logo', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of policy interest.
		 * Get api/Reference/PolicyInterests
		 * @return {Array<GenericReferenceData>} Success
		 */
		ApiReferencePolicyInterestsGet(headersHandler?: () => HttpHeaders): Observable<Array<GenericReferenceData>> {
			return this.http.get<Array<GenericReferenceData>>(this.baseUri + 'api/Reference/PolicyInterests', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

