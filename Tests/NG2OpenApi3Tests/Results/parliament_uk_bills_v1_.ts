import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum AmendmentDecision { NoDecision = 'NoDecision', Withdrawn = 'Withdrawn', Disagreed = 'Disagreed', NotMoved = 'NotMoved', Agreed = 'Agreed' }

	export interface AmendmentDetail {
		amendmentId?: number | null;
		amendmentLines?: Array<AmendmentLine>;
		amendmentNote?: string | null;
		amendmentPosition?: string | null;
		amendmentType?: AmendmentDetailAmendmentType | null;
		billId?: number | null;
		billStageId?: number | null;
		clause?: number | null;
		decision?: AmendmentDecision | null;
		explanatoryText?: string | null;
		explanatoryTextPrefix?: string | null;
		lineNumber?: number | null;
		marshalledListText?: string | null;
		pageNumber?: number | null;
		schedule?: number | null;
		sponsors?: Array<AmendmentMember>;
	}
	export interface AmendmentDetailFormProperties {
		amendmentId: FormControl<number | null | undefined>,
		amendmentNote: FormControl<string | null | undefined>,
		amendmentPosition: FormControl<string | null | undefined>,
		amendmentType: FormControl<AmendmentDetailAmendmentType | null | undefined>,
		billId: FormControl<number | null | undefined>,
		billStageId: FormControl<number | null | undefined>,
		clause: FormControl<number | null | undefined>,
		decision: FormControl<AmendmentDecision | null | undefined>,
		explanatoryText: FormControl<string | null | undefined>,
		explanatoryTextPrefix: FormControl<string | null | undefined>,
		lineNumber: FormControl<number | null | undefined>,
		marshalledListText: FormControl<string | null | undefined>,
		pageNumber: FormControl<number | null | undefined>,
		schedule: FormControl<number | null | undefined>,
	}
	export function CreateAmendmentDetailFormGroup() {
		return new FormGroup<AmendmentDetailFormProperties>({
			amendmentId: new FormControl<number | null | undefined>(undefined),
			amendmentNote: new FormControl<string | null | undefined>(undefined),
			amendmentPosition: new FormControl<string | null | undefined>(undefined),
			amendmentType: new FormControl<AmendmentDetailAmendmentType | null | undefined>(undefined),
			billId: new FormControl<number | null | undefined>(undefined),
			billStageId: new FormControl<number | null | undefined>(undefined),
			clause: new FormControl<number | null | undefined>(undefined),
			decision: new FormControl<AmendmentDecision | null | undefined>(undefined),
			explanatoryText: new FormControl<string | null | undefined>(undefined),
			explanatoryTextPrefix: new FormControl<string | null | undefined>(undefined),
			lineNumber: new FormControl<number | null | undefined>(undefined),
			marshalledListText: new FormControl<string | null | undefined>(undefined),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			schedule: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AmendmentLine {
		hangingIndentation?: string | null;
		imageType?: string | null;
		indentation?: number | null;
		isImage?: boolean | null;
		text?: string | null;
	}
	export interface AmendmentLineFormProperties {
		hangingIndentation: FormControl<string | null | undefined>,
		imageType: FormControl<string | null | undefined>,
		indentation: FormControl<number | null | undefined>,
		isImage: FormControl<boolean | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateAmendmentLineFormGroup() {
		return new FormGroup<AmendmentLineFormProperties>({
			hangingIndentation: new FormControl<string | null | undefined>(undefined),
			imageType: new FormControl<string | null | undefined>(undefined),
			indentation: new FormControl<number | null | undefined>(undefined),
			isImage: new FormControl<boolean | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AmendmentDetailAmendmentType { EditLongTitle = 'EditLongTitle', EditBillBody = 'EditBillBody', AddClauseOrSchedule = 'AddClauseOrSchedule', DeleteClauseOrSchedule = 'DeleteClauseOrSchedule' }

	export interface AmendmentMember {
		house?: AmendmentMemberHouse | null;
		isLead?: boolean | null;
		memberFrom?: string | null;
		memberId?: number | null;
		memberPage?: string | null;
		memberPhoto?: string | null;
		name?: string | null;
		party?: string | null;
		partyColour?: string | null;
		sortOrder?: number | null;
	}
	export interface AmendmentMemberFormProperties {
		house: FormControl<AmendmentMemberHouse | null | undefined>,
		isLead: FormControl<boolean | null | undefined>,
		memberFrom: FormControl<string | null | undefined>,
		memberId: FormControl<number | null | undefined>,
		memberPage: FormControl<string | null | undefined>,
		memberPhoto: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		party: FormControl<string | null | undefined>,
		partyColour: FormControl<string | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateAmendmentMemberFormGroup() {
		return new FormGroup<AmendmentMemberFormProperties>({
			house: new FormControl<AmendmentMemberHouse | null | undefined>(undefined),
			isLead: new FormControl<boolean | null | undefined>(undefined),
			memberFrom: new FormControl<string | null | undefined>(undefined),
			memberId: new FormControl<number | null | undefined>(undefined),
			memberPage: new FormControl<string | null | undefined>(undefined),
			memberPhoto: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			party: new FormControl<string | null | undefined>(undefined),
			partyColour: new FormControl<string | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AmendmentMemberHouse { All = 'All', Commons = 'Commons', Lords = 'Lords', Unassigned = 'Unassigned' }

	export interface AmendmentSearchItem {
		amendmentId?: number | null;
		amendmentPosition?: string | null;
		amendmentType?: AmendmentDetailAmendmentType | null;
		billId?: number | null;
		billStageId?: number | null;
		clause?: number | null;
		decision?: AmendmentDecision | null;
		lineNumber?: number | null;
		marshalledListText?: string | null;
		pageNumber?: number | null;
		schedule?: number | null;
		sponsors?: Array<AmendmentMember>;
		summaryText?: Array<string>;
	}
	export interface AmendmentSearchItemFormProperties {
		amendmentId: FormControl<number | null | undefined>,
		amendmentPosition: FormControl<string | null | undefined>,
		amendmentType: FormControl<AmendmentDetailAmendmentType | null | undefined>,
		billId: FormControl<number | null | undefined>,
		billStageId: FormControl<number | null | undefined>,
		clause: FormControl<number | null | undefined>,
		decision: FormControl<AmendmentDecision | null | undefined>,
		lineNumber: FormControl<number | null | undefined>,
		marshalledListText: FormControl<string | null | undefined>,
		pageNumber: FormControl<number | null | undefined>,
		schedule: FormControl<number | null | undefined>,
	}
	export function CreateAmendmentSearchItemFormGroup() {
		return new FormGroup<AmendmentSearchItemFormProperties>({
			amendmentId: new FormControl<number | null | undefined>(undefined),
			amendmentPosition: new FormControl<string | null | undefined>(undefined),
			amendmentType: new FormControl<AmendmentDetailAmendmentType | null | undefined>(undefined),
			billId: new FormControl<number | null | undefined>(undefined),
			billStageId: new FormControl<number | null | undefined>(undefined),
			clause: new FormControl<number | null | undefined>(undefined),
			decision: new FormControl<AmendmentDecision | null | undefined>(undefined),
			lineNumber: new FormControl<number | null | undefined>(undefined),
			marshalledListText: new FormControl<string | null | undefined>(undefined),
			pageNumber: new FormControl<number | null | undefined>(undefined),
			schedule: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AmendmentSearchItemSearchResult {
		items?: Array<AmendmentSearchItem>;
		itemsPerPage?: number | null;
		totalResults?: number | null;
	}
	export interface AmendmentSearchItemSearchResultFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateAmendmentSearchItemSearchResultFormGroup() {
		return new FormGroup<AmendmentSearchItemSearchResultFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum AmendmentType { EditLongTitle = 'EditLongTitle', EditBillBody = 'EditBillBody', AddClauseOrSchedule = 'AddClauseOrSchedule', DeleteClauseOrSchedule = 'DeleteClauseOrSchedule' }

	export interface Bill {
		agent?: BillAgent;
		billId?: number | null;
		billTypeId?: number | null;
		billWithdrawn?: Date | null;
		currentHouse?: AmendmentMemberHouse | null;
		currentStage?: StageSummary;
		includedSessionIds?: Array<number>;
		introducedSessionId?: number | null;
		isAct?: boolean | null;
		isDefeated?: boolean | null;
		lastUpdate?: Date | null;
		longTitle?: string | null;
		originatingHouse?: AmendmentMemberHouse | null;
		petitionInformation?: string | null;
		petitioningPeriod?: string | null;
		promoters?: Array<Promoter>;
		shortTitle?: string | null;
		sponsors?: Array<Sponsor>;
		summary?: string | null;
	}
	export interface BillFormProperties {
		billId: FormControl<number | null | undefined>,
		billTypeId: FormControl<number | null | undefined>,
		billWithdrawn: FormControl<Date | null | undefined>,
		currentHouse: FormControl<AmendmentMemberHouse | null | undefined>,
		introducedSessionId: FormControl<number | null | undefined>,
		isAct: FormControl<boolean | null | undefined>,
		isDefeated: FormControl<boolean | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		longTitle: FormControl<string | null | undefined>,
		originatingHouse: FormControl<AmendmentMemberHouse | null | undefined>,
		petitionInformation: FormControl<string | null | undefined>,
		petitioningPeriod: FormControl<string | null | undefined>,
		shortTitle: FormControl<string | null | undefined>,
		summary: FormControl<string | null | undefined>,
	}
	export function CreateBillFormGroup() {
		return new FormGroup<BillFormProperties>({
			billId: new FormControl<number | null | undefined>(undefined),
			billTypeId: new FormControl<number | null | undefined>(undefined),
			billWithdrawn: new FormControl<Date | null | undefined>(undefined),
			currentHouse: new FormControl<AmendmentMemberHouse | null | undefined>(undefined),
			introducedSessionId: new FormControl<number | null | undefined>(undefined),
			isAct: new FormControl<boolean | null | undefined>(undefined),
			isDefeated: new FormControl<boolean | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			longTitle: new FormControl<string | null | undefined>(undefined),
			originatingHouse: new FormControl<AmendmentMemberHouse | null | undefined>(undefined),
			petitionInformation: new FormControl<string | null | undefined>(undefined),
			petitioningPeriod: new FormControl<string | null | undefined>(undefined),
			shortTitle: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillAgent {
		address?: string | null;
		email?: string | null;
		name?: string | null;
		phoneNo?: string | null;
		website?: string | null;
	}
	export interface BillAgentFormProperties {
		address: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		phoneNo: FormControl<string | null | undefined>,
		website: FormControl<string | null | undefined>,
	}
	export function CreateBillAgentFormGroup() {
		return new FormGroup<BillAgentFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			phoneNo: new FormControl<string | null | undefined>(undefined),
			website: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StageSummary {
		abbreviation?: string | null;
		description?: string | null;
		house?: AmendmentMemberHouse | null;
		id?: number | null;
		sessionId?: number | null;
		sortOrder?: number | null;
		stageId?: number | null;
		stageSittings?: Array<BillStageSitting>;
	}
	export interface StageSummaryFormProperties {
		abbreviation: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		house: FormControl<AmendmentMemberHouse | null | undefined>,
		id: FormControl<number | null | undefined>,
		sessionId: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
		stageId: FormControl<number | null | undefined>,
	}
	export function CreateStageSummaryFormGroup() {
		return new FormGroup<StageSummaryFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			house: new FormControl<AmendmentMemberHouse | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			sessionId: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			stageId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BillStageSitting {
		billId?: number | null;
		billStageId?: number | null;
		date?: Date | null;
		id?: number | null;
		stageId?: number | null;
	}
	export interface BillStageSittingFormProperties {
		billId: FormControl<number | null | undefined>,
		billStageId: FormControl<number | null | undefined>,
		date: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		stageId: FormControl<number | null | undefined>,
	}
	export function CreateBillStageSittingFormGroup() {
		return new FormGroup<BillStageSittingFormProperties>({
			billId: new FormControl<number | null | undefined>(undefined),
			billStageId: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			stageId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Promoter {
		organisationName?: string | null;
		organisationUrl?: string | null;
	}
	export interface PromoterFormProperties {
		organisationName: FormControl<string | null | undefined>,
		organisationUrl: FormControl<string | null | undefined>,
	}
	export function CreatePromoterFormGroup() {
		return new FormGroup<PromoterFormProperties>({
			organisationName: new FormControl<string | null | undefined>(undefined),
			organisationUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Sponsor {
		member?: Member;
		organisation?: Organisation;
		sortOrder?: number | null;
	}
	export interface SponsorFormProperties {
		sortOrder: FormControl<number | null | undefined>,
	}
	export function CreateSponsorFormGroup() {
		return new FormGroup<SponsorFormProperties>({
			sortOrder: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Member {
		house?: AmendmentMemberHouse | null;
		memberFrom?: string | null;
		memberId?: number | null;
		memberPage?: string | null;
		memberPhoto?: string | null;
		name?: string | null;
		party?: string | null;
		partyColour?: string | null;
	}
	export interface MemberFormProperties {
		house: FormControl<AmendmentMemberHouse | null | undefined>,
		memberFrom: FormControl<string | null | undefined>,
		memberId: FormControl<number | null | undefined>,
		memberPage: FormControl<string | null | undefined>,
		memberPhoto: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		party: FormControl<string | null | undefined>,
		partyColour: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			house: new FormControl<AmendmentMemberHouse | null | undefined>(undefined),
			memberFrom: new FormControl<string | null | undefined>(undefined),
			memberId: new FormControl<number | null | undefined>(undefined),
			memberPage: new FormControl<string | null | undefined>(undefined),
			memberPhoto: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			party: new FormControl<string | null | undefined>(undefined),
			partyColour: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Organisation {
		name?: string | null;
		url?: string | null;
	}
	export interface OrganisationFormProperties {
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateOrganisationFormGroup() {
		return new FormGroup<OrganisationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillPublication {
		displayDate?: Date | null;
		files?: Array<PublicationDocument>;
		house?: AmendmentMemberHouse | null;
		id?: number | null;
		links?: Array<PublicationLink>;
		publicationType?: PublicationType;
		title?: string | null;
	}
	export interface BillPublicationFormProperties {
		displayDate: FormControl<Date | null | undefined>,
		house: FormControl<AmendmentMemberHouse | null | undefined>,
		id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateBillPublicationFormGroup() {
		return new FormGroup<BillPublicationFormProperties>({
			displayDate: new FormControl<Date | null | undefined>(undefined),
			house: new FormControl<AmendmentMemberHouse | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicationDocument {
		contentLength?: number | null;
		contentType?: string | null;
		filename?: string | null;
		id?: number | null;
	}
	export interface PublicationDocumentFormProperties {
		contentLength: FormControl<number | null | undefined>,
		contentType: FormControl<string | null | undefined>,
		filename: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
	}
	export function CreatePublicationDocumentFormGroup() {
		return new FormGroup<PublicationDocumentFormProperties>({
			contentLength: new FormControl<number | null | undefined>(undefined),
			contentType: new FormControl<string | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PublicationLink {
		contentType?: string | null;
		id?: number | null;
		title?: string | null;
		url?: string | null;
	}
	export interface PublicationLinkFormProperties {
		contentType: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreatePublicationLinkFormGroup() {
		return new FormGroup<PublicationLinkFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicationType {
		description?: string | null;
		id?: number | null;
		name?: string | null;
	}
	export interface PublicationTypeFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreatePublicationTypeFormGroup() {
		return new FormGroup<PublicationTypeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillPublicationList {
		billId?: number | null;
		publications?: Array<BillPublication>;
	}
	export interface BillPublicationListFormProperties {
		billId: FormControl<number | null | undefined>,
	}
	export function CreateBillPublicationListFormGroup() {
		return new FormGroup<BillPublicationListFormProperties>({
			billId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum BillSortOrder { TitleAscending = 'TitleAscending', TitleDescending = 'TitleDescending', DateUpdatedAscending = 'DateUpdatedAscending', DateUpdatedDescending = 'DateUpdatedDescending' }

	export interface BillStageDetails {
		abbreviation?: string | null;
		committee?: Committee;
		description?: string | null;
		house?: AmendmentMemberHouse | null;
		id?: number | null;
		lastUpdate?: Date | null;
		nextStageBillStageId?: number | null;
		previousStageBillStageId?: number | null;
		sessionId?: number | null;
		sortOrder?: number | null;
		stageId?: number | null;
		stageSittings?: Array<BillStageSitting>;
	}
	export interface BillStageDetailsFormProperties {
		abbreviation: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		house: FormControl<AmendmentMemberHouse | null | undefined>,
		id: FormControl<number | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		nextStageBillStageId: FormControl<number | null | undefined>,
		previousStageBillStageId: FormControl<number | null | undefined>,
		sessionId: FormControl<number | null | undefined>,
		sortOrder: FormControl<number | null | undefined>,
		stageId: FormControl<number | null | undefined>,
	}
	export function CreateBillStageDetailsFormGroup() {
		return new FormGroup<BillStageDetailsFormProperties>({
			abbreviation: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			house: new FormControl<AmendmentMemberHouse | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			nextStageBillStageId: new FormControl<number | null | undefined>(undefined),
			previousStageBillStageId: new FormControl<number | null | undefined>(undefined),
			sessionId: new FormControl<number | null | undefined>(undefined),
			sortOrder: new FormControl<number | null | undefined>(undefined),
			stageId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Committee {
		category?: string | null;
		house?: CommitteeHouse | null;
		id?: number | null;
		name?: string | null;
		url?: string | null;
	}
	export interface CommitteeFormProperties {
		category: FormControl<string | null | undefined>,
		house: FormControl<CommitteeHouse | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateCommitteeFormGroup() {
		return new FormGroup<CommitteeFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			house: new FormControl<CommitteeHouse | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CommitteeHouse { Commons = 'Commons', Lords = 'Lords', Joint = 'Joint' }

	export interface BillStagePublicationList {
		billStageId?: number | null;
		publications?: Array<Publication>;
		sittings?: Array<BillStageSittingPublicationList>;
	}
	export interface BillStagePublicationListFormProperties {
		billStageId: FormControl<number | null | undefined>,
	}
	export function CreateBillStagePublicationListFormGroup() {
		return new FormGroup<BillStagePublicationListFormProperties>({
			billStageId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Publication {
		displayDate?: Date | null;
		files?: Array<PublicationDocument>;
		id?: number | null;
		links?: Array<PublicationLink>;
		publicationType?: PublicationType;
		title?: string | null;
	}
	export interface PublicationFormProperties {
		displayDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreatePublicationFormGroup() {
		return new FormGroup<PublicationFormProperties>({
			displayDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillStageSittingPublicationList {
		publications?: Array<Publication>;
		sittingId?: number | null;
	}
	export interface BillStageSittingPublicationListFormProperties {
		sittingId: FormControl<number | null | undefined>,
	}
	export function CreateBillStageSittingPublicationListFormGroup() {
		return new FormGroup<BillStageSittingPublicationListFormProperties>({
			sittingId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BillStageSittingSearchResult {
		items?: Array<BillStageSitting>;
		itemsPerPage?: number | null;
		totalResults?: number | null;
	}
	export interface BillStageSittingSearchResultFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateBillStageSittingSearchResultFormGroup() {
		return new FormGroup<BillStageSittingSearchResultFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BillSummary {
		billId?: number | null;
		billTypeId?: number | null;
		billWithdrawn?: Date | null;
		currentHouse?: AmendmentMemberHouse | null;
		currentStage?: StageSummary;
		includedSessionIds?: Array<number>;
		introducedSessionId?: number | null;
		isAct?: boolean | null;
		isDefeated?: boolean | null;
		lastUpdate?: Date | null;
		originatingHouse?: AmendmentMemberHouse | null;
		shortTitle?: string | null;
	}
	export interface BillSummaryFormProperties {
		billId: FormControl<number | null | undefined>,
		billTypeId: FormControl<number | null | undefined>,
		billWithdrawn: FormControl<Date | null | undefined>,
		currentHouse: FormControl<AmendmentMemberHouse | null | undefined>,
		introducedSessionId: FormControl<number | null | undefined>,
		isAct: FormControl<boolean | null | undefined>,
		isDefeated: FormControl<boolean | null | undefined>,
		lastUpdate: FormControl<Date | null | undefined>,
		originatingHouse: FormControl<AmendmentMemberHouse | null | undefined>,
		shortTitle: FormControl<string | null | undefined>,
	}
	export function CreateBillSummaryFormGroup() {
		return new FormGroup<BillSummaryFormProperties>({
			billId: new FormControl<number | null | undefined>(undefined),
			billTypeId: new FormControl<number | null | undefined>(undefined),
			billWithdrawn: new FormControl<Date | null | undefined>(undefined),
			currentHouse: new FormControl<AmendmentMemberHouse | null | undefined>(undefined),
			introducedSessionId: new FormControl<number | null | undefined>(undefined),
			isAct: new FormControl<boolean | null | undefined>(undefined),
			isDefeated: new FormControl<boolean | null | undefined>(undefined),
			lastUpdate: new FormControl<Date | null | undefined>(undefined),
			originatingHouse: new FormControl<AmendmentMemberHouse | null | undefined>(undefined),
			shortTitle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillSummarySearchResult {
		items?: Array<BillSummary>;
		itemsPerPage?: number | null;
		totalResults?: number | null;
	}
	export interface BillSummarySearchResultFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateBillSummarySearchResultFormGroup() {
		return new FormGroup<BillSummarySearchResultFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface BillType {
		category?: BillTypeCategory | null;
		description?: string | null;
		id?: number | null;
		name?: string | null;
	}
	export interface BillTypeFormProperties {
		category: FormControl<BillTypeCategory | null | undefined>,
		description: FormControl<string | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateBillTypeFormGroup() {
		return new FormGroup<BillTypeFormProperties>({
			category: new FormControl<BillTypeCategory | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BillTypeCategory { Public = 'Public', Private = 'Private', Hybrid = 'Hybrid' }

	export interface BillTypeSearchResult {
		items?: Array<BillType>;
		itemsPerPage?: number | null;
		totalResults?: number | null;
	}
	export interface BillTypeSearchResultFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateBillTypeSearchResultFormGroup() {
		return new FormGroup<BillTypeSearchResultFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum Decision { All = 'All', NoDecision = 'NoDecision', Withdrawn = 'Withdrawn', Disagreed = 'Disagreed', NotMoved = 'NotMoved', Agreed = 'Agreed' }

	export enum House { All = 'All', Commons = 'Commons', Lords = 'Lords', Unassigned = 'Unassigned' }

	export interface NewsArticlesSummary {
		content?: string | null;
		displayDate?: Date | null;
		id?: number | null;
		title?: string | null;
	}
	export interface NewsArticlesSummaryFormProperties {
		content: FormControl<string | null | undefined>,
		displayDate: FormControl<Date | null | undefined>,
		id: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateNewsArticlesSummaryFormGroup() {
		return new FormGroup<NewsArticlesSummaryFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			displayDate: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NewsArticlesSummarySearchResult {
		items?: Array<NewsArticlesSummary>;
		itemsPerPage?: number | null;
		totalResults?: number | null;
	}
	export interface NewsArticlesSummarySearchResultFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateNewsArticlesSummarySearchResultFormGroup() {
		return new FormGroup<NewsArticlesSummarySearchResultFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum OriginatingHouse { All = 'All', Commons = 'Commons', Lords = 'Lords' }

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

	export interface PublicationTypeSearchResult {
		items?: Array<PublicationType>;
		itemsPerPage?: number | null;
		totalResults?: number | null;
	}
	export interface PublicationTypeSearchResultFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreatePublicationTypeSearchResultFormGroup() {
		return new FormGroup<PublicationTypeSearchResultFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StageReference {
		house?: AmendmentMemberHouse | null;
		id?: number | null;
		name?: string | null;
	}
	export interface StageReferenceFormProperties {
		house: FormControl<AmendmentMemberHouse | null | undefined>,
		id: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateStageReferenceFormGroup() {
		return new FormGroup<StageReferenceFormProperties>({
			house: new FormControl<AmendmentMemberHouse | null | undefined>(undefined),
			id: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StageReferenceSearchResult {
		items?: Array<StageReference>;
		itemsPerPage?: number | null;
		totalResults?: number | null;
	}
	export interface StageReferenceSearchResultFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateStageReferenceSearchResultFormGroup() {
		return new FormGroup<StageReferenceSearchResultFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StageSummarySearchResult {
		items?: Array<StageSummary>;
		itemsPerPage?: number | null;
		totalResults?: number | null;
	}
	export interface StageSummarySearchResultFormProperties {
		itemsPerPage: FormControl<number | null | undefined>,
		totalResults: FormControl<number | null | undefined>,
	}
	export function CreateStageSummarySearchResultFormGroup() {
		return new FormGroup<StageSummarySearchResultFormProperties>({
			itemsPerPage: new FormControl<number | null | undefined>(undefined),
			totalResults: new FormControl<number | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of Bill types.
		 * Get api/v1/BillTypes
		 * @return {BillTypeSearchResult} Success
		 */
		ApiV1BillTypesGetByCategoryAndSkipAndTake(Category: BillTypeCategory | null | undefined, Skip: number | null | undefined, Take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BillTypeSearchResult> {
			return this.http.get<BillTypeSearchResult>(this.baseUri + 'api/v1/BillTypes?Category=' + Category + '&Skip=' + Skip + '&Take=' + Take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of Bills.
		 * Get api/v1/Bills
		 * @return {BillSummarySearchResult} Success
		 */
		ApiV1BillsGetBySearchTermAndSessionAndCurrentHouseAndOriginatingHouseAndMemberIdAndDepartmentIdAndBillStageAndBillStagesExcludedAndIsDefeatedAndIsWithdrawnAndBillTypeAndSortOrderAndBillIdsAndSkipAndTake(SearchTerm: string | null | undefined, Session: number | null | undefined, CurrentHouse: AmendmentMemberHouse | null | undefined, OriginatingHouse: OriginatingHouse | null | undefined, MemberId: number | null | undefined, DepartmentId: number | null | undefined, BillStage: Array<number> | null | undefined, BillStagesExcluded: Array<number> | null | undefined, IsDefeated: boolean | null | undefined, IsWithdrawn: boolean | null | undefined, BillType: Array<number> | null | undefined, SortOrder: BillSortOrder | null | undefined, BillIds: Array<number> | null | undefined, Skip: number | null | undefined, Take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BillSummarySearchResult> {
			return this.http.get<BillSummarySearchResult>(this.baseUri + 'api/v1/Bills?SearchTerm=' + (SearchTerm == null ? '' : encodeURIComponent(SearchTerm)) + '&Session=' + Session + '&CurrentHouse=' + CurrentHouse + '&OriginatingHouse=' + OriginatingHouse + '&MemberId=' + MemberId + '&DepartmentId=' + DepartmentId + '&' + BillStage?.map(z => `BillStage=${z}`).join('&') + '&' + BillStagesExcluded?.map(z => `BillStagesExcluded=${z}`).join('&') + '&IsDefeated=' + IsDefeated + '&IsWithdrawn=' + IsWithdrawn + '&' + BillType?.map(z => `BillType=${z}`).join('&') + '&SortOrder=' + SortOrder + '&' + BillIds?.map(z => `BillIds=${z}`).join('&') + '&Skip=' + Skip + '&Take=' + Take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return a Bill.
		 * Get api/v1/Bills/{billId}
		 * @param {number} billId Bill with ID specified
		 * @return {Bill} Success
		 */
		ApiV1Bills_billIdGet(billId: number, headersHandler?: () => HttpHeaders): Observable<Bill> {
			return this.http.get<Bill>(this.baseUri + 'api/v1/Bills/' + billId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of news articles for a Bill.
		 * Get api/v1/Bills/{billId}/NewsArticles
		 * @return {NewsArticlesSummarySearchResult} Success
		 */
		ApiV1Bills_billIdNewsArticlesGetBySkipAndTake(billId: number, Skip: number | null | undefined, Take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<NewsArticlesSummarySearchResult> {
			return this.http.get<NewsArticlesSummarySearchResult>(this.baseUri + 'api/v1/Bills/' + billId + '/NewsArticles?Skip=' + Skip + '&Take=' + Take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return a list of Bill publications.
		 * Get api/v1/Bills/{billId}/Publications
		 * @param {number} billId Publications relating to Bill with Bill ID specified
		 * @return {BillPublicationList} Success
		 */
		ApiV1Bills_billIdPublicationsGet(billId: number, headersHandler?: () => HttpHeaders): Observable<BillPublicationList> {
			return this.http.get<BillPublicationList>(this.baseUri + 'api/v1/Bills/' + billId + '/Publications', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns all Bill stages.
		 * Get api/v1/Bills/{billId}/Stages
		 * @param {number} billId Stages relating to a Bill with Bill ID specified
		 * @return {StageSummarySearchResult} Success
		 */
		ApiV1Bills_billIdStagesGetBySkipAndTake(billId: number, Skip: number | null | undefined, Take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<StageSummarySearchResult> {
			return this.http.get<StageSummarySearchResult>(this.baseUri + 'api/v1/Bills/' + billId + '/Stages?Skip=' + Skip + '&Take=' + Take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a Bill stage.
		 * Get api/v1/Bills/{billId}/Stages/{billStageId}
		 * @param {number} billId Bill stage relating to Bill with Bill ID specified
		 * @param {number} billStageId Bill stage with ID specified
		 * @return {BillStageDetails} Success
		 */
		ApiV1Bills_billIdStages_billStageIdGet(billId: number, billStageId: number, headersHandler?: () => HttpHeaders): Observable<BillStageDetails> {
			return this.http.get<BillStageDetails>(this.baseUri + 'api/v1/Bills/' + billId + '/Stages/' + billStageId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of amendments.
		 * Get api/v1/Bills/{billId}/Stages/{billStageId}/Amendments
		 * @param {number} billId Amendments relating to a Bill with Bill ID specified
		 * @param {number} billStageId Amendments relating to a Bill stage with Bill stage ID specified
		 * @return {AmendmentSearchItemSearchResult} Success
		 */
		ApiV1Bills_billIdStages_billStageIdAmendmentsGetBySearchTermAndDecisionAndMemberIdAndSkipAndTake(billId: number, billStageId: number, SearchTerm: string | null | undefined, Decision: Decision | null | undefined, MemberId: number | null | undefined, Skip: number | null | undefined, Take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<AmendmentSearchItemSearchResult> {
			return this.http.get<AmendmentSearchItemSearchResult>(this.baseUri + 'api/v1/Bills/' + billId + '/Stages/' + billStageId + '/Amendments?SearchTerm=' + (SearchTerm == null ? '' : encodeURIComponent(SearchTerm)) + '&Decision=' + Decision + '&MemberId=' + MemberId + '&Skip=' + Skip + '&Take=' + Take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns an amendment.
		 * Get api/v1/Bills/{billId}/Stages/{billStageId}/Amendments/{amendmentId}
		 * @param {number} billId Amendment relating to a bill with bill ID specified
		 * @param {number} billStageId Amendment relating to a bill stage with bill stage ID specified
		 * @param {number} amendmentId Amendment with amendment ID specified
		 * @return {AmendmentDetail} Success
		 */
		ApiV1Bills_billIdStages_billStageIdAmendments_amendmentIdGet(billId: number, billStageId: number, amendmentId: number, headersHandler?: () => HttpHeaders): Observable<AmendmentDetail> {
			return this.http.get<AmendmentDetail>(this.baseUri + 'api/v1/Bills/' + billId + '/Stages/' + billStageId + '/Amendments/' + amendmentId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return a list of Bill stage publications.
		 * Get api/v1/Bills/{billId}/Stages/{stageId}/Publications
		 * @return {BillStagePublicationList} Success
		 */
		ApiV1Bills_billIdStages_stageIdPublicationsGet(billId: number, stageId: number, headersHandler?: () => HttpHeaders): Observable<BillStagePublicationList> {
			return this.http.get<BillStagePublicationList>(this.baseUri + 'api/v1/Bills/' + billId + '/Stages/' + stageId + '/Publications', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of publication types.
		 * Get api/v1/PublicationTypes
		 * @return {PublicationTypeSearchResult} Success
		 */
		ApiV1PublicationTypesGetBySkipAndTake(Skip: number | null | undefined, Take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<PublicationTypeSearchResult> {
			return this.http.get<PublicationTypeSearchResult>(this.baseUri + 'api/v1/PublicationTypes?Skip=' + Skip + '&Take=' + Take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return information on a document.
		 * Get api/v1/Publications/{publicationId}/Documents/{documentId}
		 * @param {number} publicationId Document with publication Id specified
		 * @param {number} documentId Document with Id specified
		 * @return {PublicationDocument} Success
		 */
		ApiV1Publications_publicationIdDocuments_documentIdGet(publicationId: number, documentId: number, headersHandler?: () => HttpHeaders): Observable<PublicationDocument> {
			return this.http.get<PublicationDocument>(this.baseUri + 'api/v1/Publications/' + publicationId + '/Documents/' + documentId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return a document.
		 * Get api/v1/Publications/{publicationId}/Documents/{documentId}/Download
		 * @param {number} publicationId Document with publication Id specified
		 * @param {number} documentId Document with Id specified
		 * @return {void} Success
		 */
		ApiV1Publications_publicationIdDocuments_documentIdDownloadGet(publicationId: number, documentId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/Publications/' + publicationId + '/Documents/' + documentId + '/Download', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an Rss feed of a certain Bill.
		 * Get api/v1/Rss/Bills/{id}.rss
		 * @param {number} id Id of Bill
		 * @return {void} Success
		 */
		ApiV1RssBills_id_rssGet(id: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/Rss/Bills/' + id + '.rss', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an Rss feed of all Bills.
		 * Get api/v1/Rss/allbills.rss
		 * @return {void} Success
		 */
		ApiV1RssAllbills_rssGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/Rss/allbills.rss', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an Rss feed of private Bills.
		 * Get api/v1/Rss/privatebills.rss
		 * @return {void} Success
		 */
		ApiV1RssPrivatebills_rssGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/Rss/privatebills.rss', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns an Rss feed of public Bills.
		 * Get api/v1/Rss/publicbills.rss
		 * @return {void} Success
		 */
		ApiV1RssPublicbills_rssGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/Rss/publicbills.rss', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of Sittings.
		 * Get api/v1/Sittings
		 * @return {BillStageSittingSearchResult} Success
		 */
		ApiV1SittingsGetByHouseAndDateFromAndDateToAndSkipAndTake(House: AmendmentMemberHouse | null | undefined, DateFrom: Date | null | undefined, DateTo: Date | null | undefined, Skip: number | null | undefined, Take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<BillStageSittingSearchResult> {
			return this.http.get<BillStageSittingSearchResult>(this.baseUri + 'api/v1/Sittings?House=' + House + '&DateFrom=' + DateFrom?.toISOString() + '&DateTo=' + DateTo?.toISOString() + '&Skip=' + Skip + '&Take=' + Take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Returns a list of Bill stages.
		 * Get api/v1/Stages
		 * @return {StageReferenceSearchResult} Success
		 */
		ApiV1StagesGetBySkipAndTake(Skip: number | null | undefined, Take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<StageReferenceSearchResult> {
			return this.http.get<StageReferenceSearchResult>(this.baseUri + 'api/v1/Stages?Skip=' + Skip + '&Take=' + Take, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

