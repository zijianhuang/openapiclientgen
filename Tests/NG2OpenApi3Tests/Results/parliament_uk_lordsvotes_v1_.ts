import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Comparators { LessThan = 'LessThan', LessThanOrEqualTo = 'LessThanOrEqualTo', EqualTo = 'EqualTo', GreaterThanOrEqualTo = 'GreaterThanOrEqualTo', GreaterThan = 'GreaterThan' }

	export interface DivisionGroupByPartyViewModel {
		content?: Array<PartyVoteResultViewModel>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		contentCount?: number | null;
		date?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		divisionId?: number | null;
		notContent?: Array<PartyVoteResultViewModel>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		notContentCount?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number?: number | null;
		title?: string | null;
	}
	export interface DivisionGroupByPartyViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		contentCount: FormControl<number | null | undefined>,
		date: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		divisionId: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		notContentCount: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateDivisionGroupByPartyViewModelFormGroup() {
		return new FormGroup<DivisionGroupByPartyViewModelFormProperties>({
			contentCount: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			divisionId: new FormControl<number | null | undefined>(undefined),
			notContentCount: new FormControl<number | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PartyVoteResultViewModel {
		partyName?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		voteCount?: number | null;
	}
	export interface PartyVoteResultViewModelFormProperties {
		partyName: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		voteCount: FormControl<number | null | undefined>,
	}
	export function CreatePartyVoteResultViewModelFormGroup() {
		return new FormGroup<PartyVoteResultViewModelFormProperties>({
			partyName: new FormControl<string | null | undefined>(undefined),
			voteCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DivisionViewModel {
		amendmentMotionNotes?: string | null;

		/**
		 * Authoritative content count is the official count. This is the teller content count when tellers are present, but member content count when there are no tellers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		authoritativeContentCount?: number | null;

		/**
		 * Authoritative not content count is the official count. This is the teller not content count when tellers are present, but member not content count when there are no tellers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		authoritativeNotContentCount?: number | null;
		contentTellers?: Array<MemberViewModel>;
		contents?: Array<MemberViewModel>;
		date?: Date | null;

		/** Whether the division had tellers or not */
		divisionHadTellers?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		divisionId?: number | null;
		divisionWasExclusivelyRemote?: boolean | null;
		isGovernmentContent?: boolean | null;
		isGovernmentWin?: boolean | null;
		isHouse?: boolean | null;
		isWhipped?: boolean | null;

		/**
		 * Member content count is the total tally of all members that voted content
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memberContentCount?: number | null;

		/**
		 * Member not content count is the total tally of all members that voted not content
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memberNotContentCount?: number | null;
		notContentTellers?: Array<MemberViewModel>;
		notContents?: Array<MemberViewModel>;
		notes?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number?: number | null;
		remoteVotingEnd?: Date | null;
		remoteVotingStart?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sponsoringMemberId?: number | null;

		/**
		 * Content count is count recorded by the tellers
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tellerContentCount?: number | null;

		/**
		 * Not Content count recorded by the tellers
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tellerNotContentCount?: number | null;
		title?: string | null;
	}
	export interface DivisionViewModelFormProperties {
		amendmentMotionNotes: FormControl<string | null | undefined>,

		/**
		 * Authoritative content count is the official count. This is the teller content count when tellers are present, but member content count when there are no tellers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		authoritativeContentCount: FormControl<number | null | undefined>,

		/**
		 * Authoritative not content count is the official count. This is the teller not content count when tellers are present, but member not content count when there are no tellers.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		authoritativeNotContentCount: FormControl<number | null | undefined>,
		date: FormControl<Date | null | undefined>,

		/** Whether the division had tellers or not */
		divisionHadTellers: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		divisionId: FormControl<number | null | undefined>,
		divisionWasExclusivelyRemote: FormControl<boolean | null | undefined>,
		isGovernmentContent: FormControl<boolean | null | undefined>,
		isGovernmentWin: FormControl<boolean | null | undefined>,
		isHouse: FormControl<boolean | null | undefined>,
		isWhipped: FormControl<boolean | null | undefined>,

		/**
		 * Member content count is the total tally of all members that voted content
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memberContentCount: FormControl<number | null | undefined>,

		/**
		 * Member not content count is the total tally of all members that voted not content
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		memberNotContentCount: FormControl<number | null | undefined>,
		notes: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		number: FormControl<number | null | undefined>,
		remoteVotingEnd: FormControl<Date | null | undefined>,
		remoteVotingStart: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sponsoringMemberId: FormControl<number | null | undefined>,

		/**
		 * Content count is count recorded by the tellers
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tellerContentCount: FormControl<number | null | undefined>,

		/**
		 * Not Content count recorded by the tellers
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		tellerNotContentCount: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateDivisionViewModelFormGroup() {
		return new FormGroup<DivisionViewModelFormProperties>({
			amendmentMotionNotes: new FormControl<string | null | undefined>(undefined),
			authoritativeContentCount: new FormControl<number | null | undefined>(undefined),
			authoritativeNotContentCount: new FormControl<number | null | undefined>(undefined),
			date: new FormControl<Date | null | undefined>(undefined),
			divisionHadTellers: new FormControl<boolean | null | undefined>(undefined),
			divisionId: new FormControl<number | null | undefined>(undefined),
			divisionWasExclusivelyRemote: new FormControl<boolean | null | undefined>(undefined),
			isGovernmentContent: new FormControl<boolean | null | undefined>(undefined),
			isGovernmentWin: new FormControl<boolean | null | undefined>(undefined),
			isHouse: new FormControl<boolean | null | undefined>(undefined),
			isWhipped: new FormControl<boolean | null | undefined>(undefined),
			memberContentCount: new FormControl<number | null | undefined>(undefined),
			memberNotContentCount: new FormControl<number | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			number: new FormControl<number | null | undefined>(undefined),
			remoteVotingEnd: new FormControl<Date | null | undefined>(undefined),
			remoteVotingStart: new FormControl<Date | null | undefined>(undefined),
			sponsoringMemberId: new FormControl<number | null | undefined>(undefined),
			tellerContentCount: new FormControl<number | null | undefined>(undefined),
			tellerNotContentCount: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemberViewModel {
		listAs?: string | null;
		memberFrom?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		memberId?: number | null;
		name?: string | null;
		party?: string | null;
		partyAbbreviation?: string | null;
		partyColour?: string | null;
		partyIsMainParty?: boolean | null;
	}
	export interface MemberViewModelFormProperties {
		listAs: FormControl<string | null | undefined>,
		memberFrom: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		memberId: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		party: FormControl<string | null | undefined>,
		partyAbbreviation: FormControl<string | null | undefined>,
		partyColour: FormControl<string | null | undefined>,
		partyIsMainParty: FormControl<boolean | null | undefined>,
	}
	export function CreateMemberViewModelFormGroup() {
		return new FormGroup<MemberViewModelFormProperties>({
			listAs: new FormControl<string | null | undefined>(undefined),
			memberFrom: new FormControl<string | null | undefined>(undefined),
			memberId: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			party: new FormControl<string | null | undefined>(undefined),
			partyAbbreviation: new FormControl<string | null | undefined>(undefined),
			partyColour: new FormControl<string | null | undefined>(undefined),
			partyIsMainParty: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface MemberVotingRecordViewModel {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		memberId?: number | null;
		memberWasContent?: boolean | null;
		memberWasTeller?: boolean | null;
		publishedDivision?: DivisionViewModel;
	}
	export interface MemberVotingRecordViewModelFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		memberId: FormControl<number | null | undefined>,
		memberWasContent: FormControl<boolean | null | undefined>,
		memberWasTeller: FormControl<boolean | null | undefined>,
	}
	export function CreateMemberVotingRecordViewModelFormGroup() {
		return new FormGroup<MemberVotingRecordViewModelFormProperties>({
			memberId: new FormControl<number | null | undefined>(undefined),
			memberWasContent: new FormControl<boolean | null | undefined>(undefined),
			memberWasTeller: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Return Divisions results grouped by party
		 * Get a list of Divisions which contain grouped by party
		 * Get data/Divisions/groupedbyparty
		 * @param {string} SearchTerm Divisions containing search term within title or number
		 * @param {number} MemberId Divisions returning Member with Member ID voting records
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} IncludeWhenMemberWasTeller Divisions where member was a teller as well as if they actually voted
		 * @param {Date} StartDate Divisions where division date in one or after date provided. Date format is yyyy-MM-dd
		 * @param {Date} EndDate Divisions where division date in one or before date provided. Date format is yyyy-MM-dd
		 * @param {number} DivisionNumber Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Comparators} TotalVotesCast_Comparator comparison operator to use
		 * @param {number} TotalVotesCast_ValueToCompare value to compare to with the operator provided
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Comparators} Majority_Comparator comparison operator to use
		 * @param {number} Majority_ValueToCompare value to compare to with the operator provided
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DivisionGroupByPartyViewModel} List of divisions with votes grouped by party
		 */
		DataDivisionsGroupedbypartyGetBySearchTermAndMemberIdAndIncludeWhenMemberWasTellerAndStartDateAndEndDateAndDivisionNumberAndTotalVotesCast_ComparatorAndTotalVotesCast_ValueToCompareAndMajority_ComparatorAndMajority_ValueToCompare(SearchTerm: string | null | undefined, MemberId: number | null | undefined, IncludeWhenMemberWasTeller: boolean | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, DivisionNumber: number | null | undefined, TotalVotesCast_Comparator: Comparators | null | undefined, TotalVotesCast_ValueToCompare: number | null | undefined, Majority_Comparator: Comparators | null | undefined, Majority_ValueToCompare: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<DivisionGroupByPartyViewModel> {
			return this.http.get<DivisionGroupByPartyViewModel>(this.baseUri + 'data/Divisions/groupedbyparty?SearchTerm=' + (SearchTerm == null ? '' : encodeURIComponent(SearchTerm)) + '&MemberId=' + MemberId + '&IncludeWhenMemberWasTeller=' + IncludeWhenMemberWasTeller + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&DivisionNumber=' + DivisionNumber + '&TotalVotesCast_Comparator=' + TotalVotesCast_Comparator + '&TotalVotesCast_ValueToCompare=' + TotalVotesCast_ValueToCompare + '&Majority_Comparator=' + Majority_Comparator + '&Majority_ValueToCompare=' + Majority_ValueToCompare, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return voting records for a Member
		 * Get a list of voting records for a Member.
		 * Get data/Divisions/membervoting
		 * @param {number} MemberId Id number of a Member whose voting records are to be returned
		 *     Minimum: 1    Maximum: 2147483647
		 * @param {string} SearchTerm Divisions containing search term within title or number
		 * @param {boolean} IncludeWhenMemberWasTeller Divisions where member was a teller as well as if they actually voted
		 * @param {Date} StartDate Divisions where division date in one or after date provided. Date format is yyyy-MM-dd
		 * @param {Date} EndDate Divisions where division date in one or before date provided. Date format is yyyy-MM-dd
		 * @param {number} DivisionNumber Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Comparators} TotalVotesCast_Comparator comparison operator to use
		 * @param {number} TotalVotesCast_ValueToCompare value to compare to with the operator provided
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Comparators} Majority_Comparator comparison operator to use
		 * @param {number} Majority_ValueToCompare value to compare to with the operator provided
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} skip The number of records to skip. Must be a positive integer. Default is 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} take The number of records to return per page. Must be more than 0. Default is 25
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {MemberVotingRecordViewModel} List of voting records for a member
		 */
		DataDivisionsMembervotingGetByMemberIdAndSearchTermAndIncludeWhenMemberWasTellerAndStartDateAndEndDateAndDivisionNumberAndTotalVotesCast_ComparatorAndTotalVotesCast_ValueToCompareAndMajority_ComparatorAndMajority_ValueToCompareAndSkipAndTake(MemberId: number, SearchTerm: string | null | undefined, IncludeWhenMemberWasTeller: boolean | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, DivisionNumber: number | null | undefined, TotalVotesCast_Comparator: Comparators | null | undefined, TotalVotesCast_ValueToCompare: number | null | undefined, Majority_Comparator: Comparators | null | undefined, Majority_ValueToCompare: number | null | undefined, skip: number | null | undefined, take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<MemberVotingRecordViewModel> {
			return this.http.get<MemberVotingRecordViewModel>(this.baseUri + 'data/Divisions/membervoting?MemberId=' + MemberId + '&SearchTerm=' + (SearchTerm == null ? '' : encodeURIComponent(SearchTerm)) + '&IncludeWhenMemberWasTeller=' + IncludeWhenMemberWasTeller + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&DivisionNumber=' + DivisionNumber + '&TotalVotesCast_Comparator=' + TotalVotesCast_Comparator + '&TotalVotesCast_ValueToCompare=' + TotalVotesCast_ValueToCompare + '&Majority_Comparator=' + Majority_Comparator + '&Majority_ValueToCompare=' + Majority_ValueToCompare + '&skip=' + skip + '&take=' + take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return a list of Divisions
		 * Get a list of Divisions which meet the specified criteria.
		 * Get data/Divisions/search
		 * @param {string} SearchTerm Divisions containing search term within title or number
		 * @param {number} MemberId Divisions returning Member with Member ID voting records
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} IncludeWhenMemberWasTeller Divisions where member was a teller as well as if they actually voted
		 * @param {Date} StartDate Divisions where division date in one or after date provided. Date format is yyyy-MM-dd
		 * @param {Date} EndDate Divisions where division date in one or before date provided. Date format is yyyy-MM-dd
		 * @param {number} DivisionNumber Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Comparators} TotalVotesCast_Comparator comparison operator to use
		 * @param {number} TotalVotesCast_ValueToCompare value to compare to with the operator provided
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Comparators} Majority_Comparator comparison operator to use
		 * @param {number} Majority_ValueToCompare value to compare to with the operator provided
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} skip The number of records to skip. Must be a positive integer. Default is 0
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {number} take The number of records to return per page. Must be more than 0. Default is 25
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<DivisionViewModel>} List of divisions matching specified parameters
		 */
		DataDivisionsSearchGetBySearchTermAndMemberIdAndIncludeWhenMemberWasTellerAndStartDateAndEndDateAndDivisionNumberAndTotalVotesCast_ComparatorAndTotalVotesCast_ValueToCompareAndMajority_ComparatorAndMajority_ValueToCompareAndSkipAndTake(SearchTerm: string | null | undefined, MemberId: number | null | undefined, IncludeWhenMemberWasTeller: boolean | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, DivisionNumber: number | null | undefined, TotalVotesCast_Comparator: Comparators | null | undefined, TotalVotesCast_ValueToCompare: number | null | undefined, Majority_Comparator: Comparators | null | undefined, Majority_ValueToCompare: number | null | undefined, skip: number | null | undefined, take: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<DivisionViewModel>> {
			return this.http.get<Array<DivisionViewModel>>(this.baseUri + 'data/Divisions/search?SearchTerm=' + (SearchTerm == null ? '' : encodeURIComponent(SearchTerm)) + '&MemberId=' + MemberId + '&IncludeWhenMemberWasTeller=' + IncludeWhenMemberWasTeller + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&DivisionNumber=' + DivisionNumber + '&TotalVotesCast_Comparator=' + TotalVotesCast_Comparator + '&TotalVotesCast_ValueToCompare=' + TotalVotesCast_ValueToCompare + '&Majority_Comparator=' + Majority_Comparator + '&Majority_ValueToCompare=' + Majority_ValueToCompare + '&skip=' + skip + '&take=' + take, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return total results count
		 * Get total count of Divisions meeting the specified query, useful for paging lists etc...
		 * Get data/Divisions/searchTotalResults
		 * @param {string} SearchTerm Divisions containing search term within title or number
		 * @param {number} MemberId Divisions returning Member with Member ID voting records
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {boolean} IncludeWhenMemberWasTeller Divisions where member was a teller as well as if they actually voted
		 * @param {Date} StartDate Divisions where division date in one or after date provided. Date format is yyyy-MM-dd
		 * @param {Date} EndDate Divisions where division date in one or before date provided. Date format is yyyy-MM-dd
		 * @param {number} DivisionNumber Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Comparators} TotalVotesCast_Comparator comparison operator to use
		 * @param {number} TotalVotesCast_ValueToCompare value to compare to with the operator provided
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Comparators} Majority_Comparator comparison operator to use
		 * @param {number} Majority_ValueToCompare value to compare to with the operator provided
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {number} Division with id matching given divisionId
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 */
		DataDivisionsSearchTotalResultsGetBySearchTermAndMemberIdAndIncludeWhenMemberWasTellerAndStartDateAndEndDateAndDivisionNumberAndTotalVotesCast_ComparatorAndTotalVotesCast_ValueToCompareAndMajority_ComparatorAndMajority_ValueToCompare(SearchTerm: string | null | undefined, MemberId: number | null | undefined, IncludeWhenMemberWasTeller: boolean | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, DivisionNumber: number | null | undefined, TotalVotesCast_Comparator: Comparators | null | undefined, TotalVotesCast_ValueToCompare: number | null | undefined, Majority_Comparator: Comparators | null | undefined, Majority_ValueToCompare: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<number> {
			return this.http.get<number>(this.baseUri + 'data/Divisions/searchTotalResults?SearchTerm=' + (SearchTerm == null ? '' : encodeURIComponent(SearchTerm)) + '&MemberId=' + MemberId + '&IncludeWhenMemberWasTeller=' + IncludeWhenMemberWasTeller + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&DivisionNumber=' + DivisionNumber + '&TotalVotesCast_Comparator=' + TotalVotesCast_Comparator + '&TotalVotesCast_ValueToCompare=' + TotalVotesCast_ValueToCompare + '&Majority_Comparator=' + Majority_Comparator + '&Majority_ValueToCompare=' + Majority_ValueToCompare, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Return a Division
		 * Get a single Division which has the Id specified.
		 * Get data/Divisions/{divisionId}
		 * @param {number} divisionId Division with ID specified
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {DivisionViewModel} Division with id matching given divisionId
		 */
		DataDivisions_divisionIdGet(divisionId: number, headersHandler?: () => HttpHeaders): Observable<DivisionViewModel> {
			return this.http.get<DivisionViewModel>(this.baseUri + 'data/Divisions/' + divisionId, { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

