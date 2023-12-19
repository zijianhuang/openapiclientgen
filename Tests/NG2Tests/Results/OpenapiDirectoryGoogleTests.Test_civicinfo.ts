import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Describes information about a regional election administrative area. */
	export interface AdministrationRegion {

		/** Information about an election administrative body (e.g. County Board of Elections). */
		electionAdministrationBody?: AdministrativeBody;

		/** An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page. */
		id?: string | null;

		/** Describes information about a regional election administrative area. */
		local_jurisdiction?: AdministrationRegion;

		/** The name of the jurisdiction. */
		name?: string | null;

		/** A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources. */
		sources?: Array<Source>;
	}

	/** Describes information about a regional election administrative area. */
	export interface AdministrationRegionFormProperties {

		/** An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page. */
		id: FormControl<string | null | undefined>,

		/** The name of the jurisdiction. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAdministrationRegionFormGroup() {
		return new FormGroup<AdministrationRegionFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an election administrative body (e.g. County Board of Elections). */
	export interface AdministrativeBody {

		/** A URL provided by this administrative body for information on absentee voting. */
		absenteeVotingInfoUrl?: string | null;
		addressLines?: Array<string>;

		/** A URL provided by this administrative body to give contest information to the voter. */
		ballotInfoUrl?: string | null;

		/** A simple representation of an address. */
		correspondenceAddress?: SimpleAddressType;

		/** A URL provided by this administrative body for looking up general election information. */
		electionInfoUrl?: string | null;

		/** The election officials for this election administrative body. */
		electionOfficials?: Array<ElectionOfficial>;

		/** A URL provided by this administrative body for confirming that the voter is registered to vote. */
		electionRegistrationConfirmationUrl?: string | null;

		/** A URL provided by this administrative body for looking up how to register to vote. */
		electionRegistrationUrl?: string | null;

		/** A URL provided by this administrative body describing election rules to the voter. */
		electionRulesUrl?: string | null;

		/** A description of the hours of operation for this administrative body. */
		hoursOfOperation?: string | null;

		/** The name of this election administrative body. */
		name?: string | null;

		/** A simple representation of an address. */
		physicalAddress?: SimpleAddressType;

		/** A description of the services this administrative body may provide. */
		voter_services?: Array<string>;

		/** A URL provided by this administrative body for looking up where to vote. */
		votingLocationFinderUrl?: string | null;
	}

	/** Information about an election administrative body (e.g. County Board of Elections). */
	export interface AdministrativeBodyFormProperties {

		/** A URL provided by this administrative body for information on absentee voting. */
		absenteeVotingInfoUrl: FormControl<string | null | undefined>,

		/** A URL provided by this administrative body to give contest information to the voter. */
		ballotInfoUrl: FormControl<string | null | undefined>,

		/** A URL provided by this administrative body for looking up general election information. */
		electionInfoUrl: FormControl<string | null | undefined>,

		/** A URL provided by this administrative body for confirming that the voter is registered to vote. */
		electionRegistrationConfirmationUrl: FormControl<string | null | undefined>,

		/** A URL provided by this administrative body for looking up how to register to vote. */
		electionRegistrationUrl: FormControl<string | null | undefined>,

		/** A URL provided by this administrative body describing election rules to the voter. */
		electionRulesUrl: FormControl<string | null | undefined>,

		/** A description of the hours of operation for this administrative body. */
		hoursOfOperation: FormControl<string | null | undefined>,

		/** The name of this election administrative body. */
		name: FormControl<string | null | undefined>,

		/** A URL provided by this administrative body for looking up where to vote. */
		votingLocationFinderUrl: FormControl<string | null | undefined>,
	}
	export function CreateAdministrativeBodyFormGroup() {
		return new FormGroup<AdministrativeBodyFormProperties>({
			absenteeVotingInfoUrl: new FormControl<string | null | undefined>(undefined),
			ballotInfoUrl: new FormControl<string | null | undefined>(undefined),
			electionInfoUrl: new FormControl<string | null | undefined>(undefined),
			electionRegistrationConfirmationUrl: new FormControl<string | null | undefined>(undefined),
			electionRegistrationUrl: new FormControl<string | null | undefined>(undefined),
			electionRulesUrl: new FormControl<string | null | undefined>(undefined),
			hoursOfOperation: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			votingLocationFinderUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A simple representation of an address. */
	export interface SimpleAddressType {

		/** The city or town for the address. */
		city?: string | null;

		/** The street name and number of this address. */
		line1?: string | null;

		/** The second line the address, if needed. */
		line2?: string | null;

		/** The third line of the address, if needed. */
		line3?: string | null;

		/** The name of the location. */
		locationName?: string | null;

		/** The US two letter state abbreviation of the address. */
		state?: string | null;

		/** The US Postal Zip Code of the address. */
		zip?: string | null;
	}

	/** A simple representation of an address. */
	export interface SimpleAddressTypeFormProperties {

		/** The city or town for the address. */
		city: FormControl<string | null | undefined>,

		/** The street name and number of this address. */
		line1: FormControl<string | null | undefined>,

		/** The second line the address, if needed. */
		line2: FormControl<string | null | undefined>,

		/** The third line of the address, if needed. */
		line3: FormControl<string | null | undefined>,

		/** The name of the location. */
		locationName: FormControl<string | null | undefined>,

		/** The US two letter state abbreviation of the address. */
		state: FormControl<string | null | undefined>,

		/** The US Postal Zip Code of the address. */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateSimpleAddressTypeFormGroup() {
		return new FormGroup<SimpleAddressTypeFormProperties>({
			city: new FormControl<string | null | undefined>(undefined),
			line1: new FormControl<string | null | undefined>(undefined),
			line2: new FormControl<string | null | undefined>(undefined),
			line3: new FormControl<string | null | undefined>(undefined),
			locationName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about individual election officials. */
	export interface ElectionOfficial {

		/** The email address of the election official. */
		emailAddress?: string | null;

		/** The fax number of the election official. */
		faxNumber?: string | null;

		/** The full name of the election official. */
		name?: string | null;

		/** The office phone number of the election official. */
		officePhoneNumber?: string | null;

		/** The title of the election official. */
		title?: string | null;
	}

	/** Information about individual election officials. */
	export interface ElectionOfficialFormProperties {

		/** The email address of the election official. */
		emailAddress: FormControl<string | null | undefined>,

		/** The fax number of the election official. */
		faxNumber: FormControl<string | null | undefined>,

		/** The full name of the election official. */
		name: FormControl<string | null | undefined>,

		/** The office phone number of the election official. */
		officePhoneNumber: FormControl<string | null | undefined>,

		/** The title of the election official. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateElectionOfficialFormGroup() {
		return new FormGroup<ElectionOfficialFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			faxNumber: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			officePhoneNumber: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about the data source for the element containing it. */
	export interface Source {

		/** The name of the data source. */
		name?: string | null;

		/** Whether this data comes from an official government source. */
		official?: boolean | null;
	}

	/** Contains information about the data source for the element containing it. */
	export interface SourceFormProperties {

		/** The name of the data source. */
		name: FormControl<string | null | undefined>,

		/** Whether this data comes from an official government source. */
		official: FormControl<boolean | null | undefined>,
	}
	export function CreateSourceFormGroup() {
		return new FormGroup<SourceFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			official: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Information about a candidate running for elected office. */
	export interface Candidate {

		/** The URL for the candidate's campaign web site. */
		candidateUrl?: string | null;

		/** A list of known (social) media channels for this candidate. */
		channels?: Array<Channel>;

		/** The email address for the candidate's campaign. */
		email?: string | null;

		/** The candidate's name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. "Mitt Romney / Paul Ryan" */
		name?: string | null;

		/** The order the candidate appears on the ballot for this contest. */
		orderOnBallot?: string | null;

		/** The full name of the party the candidate is a member of. */
		party?: string | null;

		/** The voice phone number for the candidate's campaign office. */
		phone?: string | null;

		/** A URL for a photo of the candidate. */
		photoUrl?: string | null;
	}

	/** Information about a candidate running for elected office. */
	export interface CandidateFormProperties {

		/** The URL for the candidate's campaign web site. */
		candidateUrl: FormControl<string | null | undefined>,

		/** The email address for the candidate's campaign. */
		email: FormControl<string | null | undefined>,

		/** The candidate's name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. "Mitt Romney / Paul Ryan" */
		name: FormControl<string | null | undefined>,

		/** The order the candidate appears on the ballot for this contest. */
		orderOnBallot: FormControl<string | null | undefined>,

		/** The full name of the party the candidate is a member of. */
		party: FormControl<string | null | undefined>,

		/** The voice phone number for the candidate's campaign office. */
		phone: FormControl<string | null | undefined>,

		/** A URL for a photo of the candidate. */
		photoUrl: FormControl<string | null | undefined>,
	}
	export function CreateCandidateFormGroup() {
		return new FormGroup<CandidateFormProperties>({
			candidateUrl: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			orderOnBallot: new FormControl<string | null | undefined>(undefined),
			party: new FormControl<string | null | undefined>(undefined),
			phone: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A social media or web channel for a candidate. */
	export interface Channel {

		/** The unique public identifier for the candidate's channel. */
		id?: string | null;

		/** The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter */
		type?: string | null;
	}

	/** A social media or web channel for a candidate. */
	export interface ChannelFormProperties {

		/** The unique public identifier for the candidate's channel. */
		id: FormControl<string | null | undefined>,

		/** The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter */
		type: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a contest that appears on a voter's ballot. */
	export interface Contest {

		/** A number specifying the position of this contest on the voter's ballot. */
		ballotPlacement?: string | null;

		/** The official title on the ballot for this contest, only where available. */
		ballotTitle?: string | null;

		/** The candidate choices for this contest. */
		candidates?: Array<Candidate>;

		/** Describes the geographic scope of a contest. */
		district?: ElectoralDistrict;

		/** A description of any additional eligibility requirements for voting in this contest. */
		electorateSpecifications?: string | null;

		/** An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page. */
		id?: string | null;

		/** The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1". */
		level?: Array<string>;

		/** The number of candidates that will be elected to office in this contest. */
		numberElected?: string | null;

		/** The number of candidates that a voter may vote for in this contest. */
		numberVotingFor?: string | null;

		/** The name of the office for this contest. */
		office?: string | null;

		/** If this is a partisan election, the name of the party it is for. */
		primaryParty?: string | null;

		/** The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include "yes" or "no" for referenda. This field is only populated for contests of type 'Referendum'. */
		referendumBallotResponses?: Array<string>;

		/** Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'. */
		referendumBrief?: string | null;

		/** A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'. */
		referendumConStatement?: string | null;

		/** Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type 'Referendum'. */
		referendumEffectOfAbstain?: string | null;

		/** The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type 'Referendum'. */
		referendumPassageThreshold?: string | null;

		/** A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'. */
		referendumProStatement?: string | null;

		/** A brief description of the referendum. This field is only populated for contests of type 'Referendum'. */
		referendumSubtitle?: string | null;

		/** The full text of the referendum. This field is only populated for contests of type 'Referendum'. */
		referendumText?: string | null;

		/** The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'. */
		referendumTitle?: string | null;

		/** A link to the referendum. This field is only populated for contests of type 'Referendum'. */
		referendumUrl?: string | null;

		/** The roles which this office fulfills. */
		roles?: Array<string>;

		/** A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources. */
		sources?: Array<Source>;

		/** "Yes" or "No" depending on whether this a contest being held outside the normal election cycle. */
		special?: string | null;

		/** The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will typically be 'Retention'. */
		type?: string | null;
	}

	/** Information about a contest that appears on a voter's ballot. */
	export interface ContestFormProperties {

		/** A number specifying the position of this contest on the voter's ballot. */
		ballotPlacement: FormControl<string | null | undefined>,

		/** The official title on the ballot for this contest, only where available. */
		ballotTitle: FormControl<string | null | undefined>,

		/** A description of any additional eligibility requirements for voting in this contest. */
		electorateSpecifications: FormControl<string | null | undefined>,

		/** An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page. */
		id: FormControl<string | null | undefined>,

		/** The number of candidates that will be elected to office in this contest. */
		numberElected: FormControl<string | null | undefined>,

		/** The number of candidates that a voter may vote for in this contest. */
		numberVotingFor: FormControl<string | null | undefined>,

		/** The name of the office for this contest. */
		office: FormControl<string | null | undefined>,

		/** If this is a partisan election, the name of the party it is for. */
		primaryParty: FormControl<string | null | undefined>,

		/** Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'. */
		referendumBrief: FormControl<string | null | undefined>,

		/** A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'. */
		referendumConStatement: FormControl<string | null | undefined>,

		/** Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type 'Referendum'. */
		referendumEffectOfAbstain: FormControl<string | null | undefined>,

		/** The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type 'Referendum'. */
		referendumPassageThreshold: FormControl<string | null | undefined>,

		/** A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'. */
		referendumProStatement: FormControl<string | null | undefined>,

		/** A brief description of the referendum. This field is only populated for contests of type 'Referendum'. */
		referendumSubtitle: FormControl<string | null | undefined>,

		/** The full text of the referendum. This field is only populated for contests of type 'Referendum'. */
		referendumText: FormControl<string | null | undefined>,

		/** The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'. */
		referendumTitle: FormControl<string | null | undefined>,

		/** A link to the referendum. This field is only populated for contests of type 'Referendum'. */
		referendumUrl: FormControl<string | null | undefined>,

		/** "Yes" or "No" depending on whether this a contest being held outside the normal election cycle. */
		special: FormControl<string | null | undefined>,

		/** The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will typically be 'Retention'. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateContestFormGroup() {
		return new FormGroup<ContestFormProperties>({
			ballotPlacement: new FormControl<string | null | undefined>(undefined),
			ballotTitle: new FormControl<string | null | undefined>(undefined),
			electorateSpecifications: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			numberElected: new FormControl<string | null | undefined>(undefined),
			numberVotingFor: new FormControl<string | null | undefined>(undefined),
			office: new FormControl<string | null | undefined>(undefined),
			primaryParty: new FormControl<string | null | undefined>(undefined),
			referendumBrief: new FormControl<string | null | undefined>(undefined),
			referendumConStatement: new FormControl<string | null | undefined>(undefined),
			referendumEffectOfAbstain: new FormControl<string | null | undefined>(undefined),
			referendumPassageThreshold: new FormControl<string | null | undefined>(undefined),
			referendumProStatement: new FormControl<string | null | undefined>(undefined),
			referendumSubtitle: new FormControl<string | null | undefined>(undefined),
			referendumText: new FormControl<string | null | undefined>(undefined),
			referendumTitle: new FormControl<string | null | undefined>(undefined),
			referendumUrl: new FormControl<string | null | undefined>(undefined),
			special: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes the geographic scope of a contest. */
	export interface ElectoralDistrict {

		/** An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper. */
		id?: string | null;
		kgForeignKey?: string | null;

		/** The name of the district. */
		name?: string | null;

		/** The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special */
		scope?: string | null;
	}

	/** Describes the geographic scope of a contest. */
	export interface ElectoralDistrictFormProperties {

		/** An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper. */
		id: FormControl<string | null | undefined>,
		kgForeignKey: FormControl<string | null | undefined>,

		/** The name of the district. */
		name: FormControl<string | null | undefined>,

		/** The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special */
		scope: FormControl<string | null | undefined>,
	}
	export function CreateElectoralDistrictFormGroup() {
		return new FormGroup<ElectoralDistrictFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kgForeignKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContextParams {
		clientProfile?: string | null;
	}
	export interface ContextParamsFormProperties {
		clientProfile: FormControl<string | null | undefined>,
	}
	export function CreateContextParamsFormGroup() {
		return new FormGroup<ContextParamsFormProperties>({
			clientProfile: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request to look up representative information for a single division. */
	export interface DivisionRepresentativeInfoRequest {
		contextParams?: ContextParams;
	}

	/** A request to look up representative information for a single division. */
	export interface DivisionRepresentativeInfoRequestFormProperties {
	}
	export function CreateDivisionRepresentativeInfoRequestFormGroup() {
		return new FormGroup<DivisionRepresentativeInfoRequestFormProperties>({
		});

	}


	/** A search request for political geographies. */
	export interface DivisionSearchRequest {
		contextParams?: ContextParams;
	}

	/** A search request for political geographies. */
	export interface DivisionSearchRequestFormProperties {
	}
	export function CreateDivisionSearchRequestFormGroup() {
		return new FormGroup<DivisionSearchRequestFormProperties>({
		});

	}


	/** The result of a division search query. */
	export interface DivisionSearchResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse". */
		kind?: string | null;
		results?: Array<DivisionSearchResult>;
	}

	/** The result of a division search query. */
	export interface DivisionSearchResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateDivisionSearchResponseFormGroup() {
		return new FormGroup<DivisionSearchResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a political geographic division that matches the requested query. */
	export interface DivisionSearchResult {

		/** Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district. */
		aliases?: Array<string>;

		/** The name of the division. */
		name?: string | null;

		/** The unique Open Civic Data identifier for this division. */
		ocdId?: string | null;
	}

	/** Represents a political geographic division that matches the requested query. */
	export interface DivisionSearchResultFormProperties {

		/** The name of the division. */
		name: FormControl<string | null | undefined>,

		/** The unique Open Civic Data identifier for this division. */
		ocdId: FormControl<string | null | undefined>,
	}
	export function CreateDivisionSearchResultFormGroup() {
		return new FormGroup<DivisionSearchResultFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			ocdId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about the election that was queried. */
	export interface Election {

		/** Day of the election in YYYY-MM-DD format. */
		electionDay?: string | null;

		/** The unique ID of this election. */
		id?: string | null;

		/** A displayable name for the election. */
		name?: string | null;

		/** The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us). */
		ocdDivisionId?: string | null;
	}

	/** Information about the election that was queried. */
	export interface ElectionFormProperties {

		/** Day of the election in YYYY-MM-DD format. */
		electionDay: FormControl<string | null | undefined>,

		/** The unique ID of this election. */
		id: FormControl<string | null | undefined>,

		/** A displayable name for the election. */
		name: FormControl<string | null | undefined>,

		/** The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us). */
		ocdDivisionId: FormControl<string | null | undefined>,
	}
	export function CreateElectionFormGroup() {
		return new FormGroup<ElectionFormProperties>({
			electionDay: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ocdDivisionId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ElectionsQueryRequest {
		contextParams?: ContextParams;
	}
	export interface ElectionsQueryRequestFormProperties {
	}
	export function CreateElectionsQueryRequestFormGroup() {
		return new FormGroup<ElectionsQueryRequestFormProperties>({
		});

	}


	/** The list of elections available for this version of the API. */
	export interface ElectionsQueryResponse {

		/** A list of available elections */
		elections?: Array<Election>;

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse". */
		kind?: string | null;
	}

	/** The list of elections available for this version of the API. */
	export interface ElectionsQueryResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateElectionsQueryResponseFormGroup() {
		return new FormGroup<ElectionsQueryResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FieldMetadataProto {
		internal?: InternalFieldMetadataProto;
	}
	export interface FieldMetadataProtoFormProperties {
	}
	export function CreateFieldMetadataProtoFormGroup() {
		return new FormGroup<FieldMetadataProtoFormProperties>({
		});

	}

	export interface InternalFieldMetadataProto {
		isAuto?: boolean | null;
		sourceSummary?: InternalSourceSummaryProto;
	}
	export interface InternalFieldMetadataProtoFormProperties {
		isAuto: FormControl<boolean | null | undefined>,
	}
	export function CreateInternalFieldMetadataProtoFormGroup() {
		return new FormGroup<InternalFieldMetadataProtoFormProperties>({
			isAuto: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface InternalSourceSummaryProto {
		dataset?: string | null;
		provider?: string | null;
	}
	export interface InternalSourceSummaryProtoFormProperties {
		dataset: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
	}
	export function CreateInternalSourceSummaryProtoFormGroup() {
		return new FormGroup<InternalSourceSummaryProtoFormProperties>({
			dataset: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes a political geography. */
	export interface GeographicDivision {

		/**
		 * Any other valid OCD IDs that refer to the same division.
		 * Because OCD IDs are meant to be human-readable and at least somewhat predictable, there are occasionally several identifiers for a single division. These identifiers are defined to be equivalent to one another, and one is always indicated as the primary identifier. The primary identifier will be returned in ocd_id above, and any other equivalent valid identifiers will be returned in this list.
		 * For example, if this division's OCD ID is ocd-division/country:us/district:dc, this will contain ocd-division/country:us/state:dc.
		 */
		alsoKnownAs?: Array<string>;

		/** The name of the division. */
		name?: string | null;

		/** List of indices in the offices array, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request. */
		officeIndices?: Array<number>;
	}

	/** Describes a political geography. */
	export interface GeographicDivisionFormProperties {

		/** The name of the division. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGeographicDivisionFormGroup() {
		return new FormGroup<GeographicDivisionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about an Office held by one or more Officials. */
	export interface Office {

		/** The OCD ID of the division with which this office is associated. */
		divisionId?: string | null;

		/** The levels of government of which this office is part. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1". */
		levels?: Array<string>;

		/** The human-readable name of the office. */
		name?: string | null;

		/** List of indices in the officials array of people who presently hold this office. */
		officialIndices?: Array<number>;

		/** The roles which this office fulfills. Roles are not meant to be exhaustive, or to exactly specify the entire set of responsibilities of a given office, but are meant to be rough categories that are useful for general selection from or sorting of a list of offices. */
		roles?: Array<string>;

		/** A list of sources for this office. If multiple sources are listed, the data has been aggregated from those sources. */
		sources?: Array<Source>;
	}

	/** Information about an Office held by one or more Officials. */
	export interface OfficeFormProperties {

		/** The OCD ID of the division with which this office is associated. */
		divisionId: FormControl<string | null | undefined>,

		/** The human-readable name of the office. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOfficeFormGroup() {
		return new FormGroup<OfficeFormProperties>({
			divisionId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a person holding an elected office. */
	export interface Official {

		/** Addresses at which to contact the official. */
		address?: Array<SimpleAddressType>;

		/** A list of known (social) media channels for this official. */
		channels?: Array<Channel>;

		/** The direct email addresses for the official. */
		emails?: Array<string>;

		/** The official's name. */
		name?: string | null;

		/** The full name of the party the official belongs to. */
		party?: string | null;

		/** The official's public contact phone numbers. */
		phones?: Array<string>;

		/** A URL for a photo of the official. */
		photoUrl?: string | null;

		/** The official's public website URLs. */
		urls?: Array<string>;
	}

	/** Information about a person holding an elected office. */
	export interface OfficialFormProperties {

		/** The official's name. */
		name: FormControl<string | null | undefined>,

		/** The full name of the party the official belongs to. */
		party: FormControl<string | null | undefined>,

		/** A URL for a photo of the official. */
		photoUrl: FormControl<string | null | undefined>,
	}
	export function CreateOfficialFormGroup() {
		return new FormGroup<OfficialFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			party: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PointProto {
		latE7?: string | null;
		lngE7?: string | null;
		metadata?: FieldMetadataProto;
	}
	export interface PointProtoFormProperties {
		latE7: FormControl<string | null | undefined>,
		lngE7: FormControl<string | null | undefined>,
	}
	export function CreatePointProtoFormGroup() {
		return new FormGroup<PointProtoFormProperties>({
			latE7: new FormControl<string | null | undefined>(undefined),
			lngE7: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot. */
	export interface PollingLocation {

		/** A simple representation of an address. */
		address?: SimpleAddressType;

		/** The last date that this early vote site or drop off location may be used. This field is not populated for polling locations. */
		endDate?: string | null;

		/** An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page. */
		id?: string | null;

		/** Latitude of the location, in degrees north of the equator. Only some locations -- generally, ballot drop boxes for vote-by-mail elections -- will have this set; for others, use a geocoding service like the Google Maps API to resolve the address to a geographic point. */
		latitude?: number | null;

		/** Longitude of the location, in degrees east of the Prime Meridian. Only some locations -- generally, ballot drop boxes for vote-by-mail elections -- will have this set; for others, use a geocoding service like the Google Maps API to resolve the address to a geographic point. */
		longitude?: number | null;

		/** The name of the early vote site or drop off location. This field is not populated for polling locations. */
		name?: string | null;

		/** Notes about this location (e.g. accessibility ramp or entrance to use). */
		notes?: string | null;

		/** A description of when this location is open. */
		pollingHours?: string | null;

		/** A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources. */
		sources?: Array<Source>;

		/** The first date that this early vote site or drop off location may be used. This field is not populated for polling locations. */
		startDate?: string | null;

		/** The services provided by this early vote site or drop off location. This field is not populated for polling locations. */
		voterServices?: string | null;
	}

	/** A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot. */
	export interface PollingLocationFormProperties {

		/** The last date that this early vote site or drop off location may be used. This field is not populated for polling locations. */
		endDate: FormControl<string | null | undefined>,

		/** An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page. */
		id: FormControl<string | null | undefined>,

		/** Latitude of the location, in degrees north of the equator. Only some locations -- generally, ballot drop boxes for vote-by-mail elections -- will have this set; for others, use a geocoding service like the Google Maps API to resolve the address to a geographic point. */
		latitude: FormControl<number | null | undefined>,

		/** Longitude of the location, in degrees east of the Prime Meridian. Only some locations -- generally, ballot drop boxes for vote-by-mail elections -- will have this set; for others, use a geocoding service like the Google Maps API to resolve the address to a geographic point. */
		longitude: FormControl<number | null | undefined>,

		/** The name of the early vote site or drop off location. This field is not populated for polling locations. */
		name: FormControl<string | null | undefined>,

		/** Notes about this location (e.g. accessibility ramp or entrance to use). */
		notes: FormControl<string | null | undefined>,

		/** A description of when this location is open. */
		pollingHours: FormControl<string | null | undefined>,

		/** The first date that this early vote site or drop off location may be used. This field is not populated for polling locations. */
		startDate: FormControl<string | null | undefined>,

		/** The services provided by this early vote site or drop off location. This field is not populated for polling locations. */
		voterServices: FormControl<string | null | undefined>,
	}
	export function CreatePollingLocationFormGroup() {
		return new FormGroup<PollingLocationFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			latitude: new FormControl<number | null | undefined>(undefined),
			longitude: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			pollingHours: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
			voterServices: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PostalAddress {
		addressLines?: Array<string>;
		administrativeAreaName?: string | null;
		countryName?: string | null;
		countryNameCode?: string | null;
		dependentLocalityName?: string | null;
		dependentThoroughfareName?: string | null;
		firmName?: string | null;
		isDisputed?: boolean | null;
		languageCode?: string | null;
		localityName?: string | null;
		postBoxNumber?: string | null;
		postalCodeNumber?: string | null;
		postalCodeNumberExtension?: string | null;
		premiseName?: string | null;
		recipientName?: string | null;
		sortingCode?: string | null;
		subAdministrativeAreaName?: string | null;
		subPremiseName?: string | null;
		thoroughfareName?: string | null;
		thoroughfareNumber?: string | null;
	}
	export interface PostalAddressFormProperties {
		administrativeAreaName: FormControl<string | null | undefined>,
		countryName: FormControl<string | null | undefined>,
		countryNameCode: FormControl<string | null | undefined>,
		dependentLocalityName: FormControl<string | null | undefined>,
		dependentThoroughfareName: FormControl<string | null | undefined>,
		firmName: FormControl<string | null | undefined>,
		isDisputed: FormControl<boolean | null | undefined>,
		languageCode: FormControl<string | null | undefined>,
		localityName: FormControl<string | null | undefined>,
		postBoxNumber: FormControl<string | null | undefined>,
		postalCodeNumber: FormControl<string | null | undefined>,
		postalCodeNumberExtension: FormControl<string | null | undefined>,
		premiseName: FormControl<string | null | undefined>,
		recipientName: FormControl<string | null | undefined>,
		sortingCode: FormControl<string | null | undefined>,
		subAdministrativeAreaName: FormControl<string | null | undefined>,
		subPremiseName: FormControl<string | null | undefined>,
		thoroughfareName: FormControl<string | null | undefined>,
		thoroughfareNumber: FormControl<string | null | undefined>,
	}
	export function CreatePostalAddressFormGroup() {
		return new FormGroup<PostalAddressFormProperties>({
			administrativeAreaName: new FormControl<string | null | undefined>(undefined),
			countryName: new FormControl<string | null | undefined>(undefined),
			countryNameCode: new FormControl<string | null | undefined>(undefined),
			dependentLocalityName: new FormControl<string | null | undefined>(undefined),
			dependentThoroughfareName: new FormControl<string | null | undefined>(undefined),
			firmName: new FormControl<string | null | undefined>(undefined),
			isDisputed: new FormControl<boolean | null | undefined>(undefined),
			languageCode: new FormControl<string | null | undefined>(undefined),
			localityName: new FormControl<string | null | undefined>(undefined),
			postBoxNumber: new FormControl<string | null | undefined>(undefined),
			postalCodeNumber: new FormControl<string | null | undefined>(undefined),
			postalCodeNumberExtension: new FormControl<string | null | undefined>(undefined),
			premiseName: new FormControl<string | null | undefined>(undefined),
			recipientName: new FormControl<string | null | undefined>(undefined),
			sortingCode: new FormControl<string | null | undefined>(undefined),
			subAdministrativeAreaName: new FormControl<string | null | undefined>(undefined),
			subPremiseName: new FormControl<string | null | undefined>(undefined),
			thoroughfareName: new FormControl<string | null | undefined>(undefined),
			thoroughfareNumber: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Provenance {
		collidedSegmentSource?: StreetSegmentList;
		ctclContestUuid?: string | null;
		ctclOfficeUuid?: string | null;
		datasetId?: string | null;
		precinctId?: string | null;
		precinctSplitId?: string | null;
		tsStreetSegmentId?: string | null;
		vip5PrecinctId?: string | null;
		vip5StreetSegmentId?: string | null;
		vipStreetSegmentId?: string | null;
	}
	export interface ProvenanceFormProperties {
		ctclContestUuid: FormControl<string | null | undefined>,
		ctclOfficeUuid: FormControl<string | null | undefined>,
		datasetId: FormControl<string | null | undefined>,
		precinctId: FormControl<string | null | undefined>,
		precinctSplitId: FormControl<string | null | undefined>,
		tsStreetSegmentId: FormControl<string | null | undefined>,
		vip5PrecinctId: FormControl<string | null | undefined>,
		vip5StreetSegmentId: FormControl<string | null | undefined>,
		vipStreetSegmentId: FormControl<string | null | undefined>,
	}
	export function CreateProvenanceFormGroup() {
		return new FormGroup<ProvenanceFormProperties>({
			ctclContestUuid: new FormControl<string | null | undefined>(undefined),
			ctclOfficeUuid: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			precinctId: new FormControl<string | null | undefined>(undefined),
			precinctSplitId: new FormControl<string | null | undefined>(undefined),
			tsStreetSegmentId: new FormControl<string | null | undefined>(undefined),
			vip5PrecinctId: new FormControl<string | null | undefined>(undefined),
			vip5StreetSegmentId: new FormControl<string | null | undefined>(undefined),
			vipStreetSegmentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StreetSegmentList {
		segments?: Array<StreetSegment>;
	}
	export interface StreetSegmentListFormProperties {
	}
	export function CreateStreetSegmentListFormGroup() {
		return new FormGroup<StreetSegmentListFormProperties>({
		});

	}

	export interface StreetSegment {
		administrationRegionIds?: Array<string>;
		beforeGeocodeId?: string | null;
		catalistUniquePrecinctCode?: string | null;
		city?: string | null;
		cityCouncilDistrict?: string | null;
		congressionalDistrict?: string | null;
		contestIds?: Array<string>;
		countyCouncilDistrict?: string | null;
		countyFips?: string | null;
		datasetId?: string | null;
		earlyVoteSiteByIds?: Array<string>;
		endHouseNumber?: string | null;
		geocodedPoint?: PointProto;
		geographicDivisionOcdIds?: Array<string>;
		id?: string | null;
		judicialDistrict?: string | null;
		mailOnly?: boolean | null;
		municipalDistrict?: string | null;
		ncoaAddress?: string | null;
		oddOrEvens?: Array<string>;
		originalId?: string | null;
		pollinglocationByIds?: Array<string>;
		precinctName?: string | null;
		precinctOcdId?: string | null;
		provenances?: Array<Provenance>;
		published?: boolean | null;
		schoolDistrict?: string | null;
		startHouseNumber?: string | null;
		startLatE7?: number | null;
		startLngE7?: number | null;
		state?: string | null;
		stateHouseDistrict?: string | null;
		stateSenateDistrict?: string | null;
		streetName?: string | null;
		subAdministrativeAreaName?: string | null;
		surrogateId?: string | null;
		targetsmartUniquePrecinctCode?: string | null;
		townshipDistrict?: string | null;
		unitNumber?: string | null;
		unitType?: string | null;
		vanPrecinctCode?: string | null;
		voterGeographicDivisionOcdIds?: Array<string>;
		wardDistrict?: string | null;
		wildcard?: boolean | null;
		zip?: string | null;
	}
	export interface StreetSegmentFormProperties {
		beforeGeocodeId: FormControl<string | null | undefined>,
		catalistUniquePrecinctCode: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		cityCouncilDistrict: FormControl<string | null | undefined>,
		congressionalDistrict: FormControl<string | null | undefined>,
		countyCouncilDistrict: FormControl<string | null | undefined>,
		countyFips: FormControl<string | null | undefined>,
		datasetId: FormControl<string | null | undefined>,
		endHouseNumber: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		judicialDistrict: FormControl<string | null | undefined>,
		mailOnly: FormControl<boolean | null | undefined>,
		municipalDistrict: FormControl<string | null | undefined>,
		ncoaAddress: FormControl<string | null | undefined>,
		originalId: FormControl<string | null | undefined>,
		precinctName: FormControl<string | null | undefined>,
		precinctOcdId: FormControl<string | null | undefined>,
		published: FormControl<boolean | null | undefined>,
		schoolDistrict: FormControl<string | null | undefined>,
		startHouseNumber: FormControl<string | null | undefined>,
		startLatE7: FormControl<number | null | undefined>,
		startLngE7: FormControl<number | null | undefined>,
		state: FormControl<string | null | undefined>,
		stateHouseDistrict: FormControl<string | null | undefined>,
		stateSenateDistrict: FormControl<string | null | undefined>,
		streetName: FormControl<string | null | undefined>,
		subAdministrativeAreaName: FormControl<string | null | undefined>,
		surrogateId: FormControl<string | null | undefined>,
		targetsmartUniquePrecinctCode: FormControl<string | null | undefined>,
		townshipDistrict: FormControl<string | null | undefined>,
		unitNumber: FormControl<string | null | undefined>,
		unitType: FormControl<string | null | undefined>,
		vanPrecinctCode: FormControl<string | null | undefined>,
		wardDistrict: FormControl<string | null | undefined>,
		wildcard: FormControl<boolean | null | undefined>,
		zip: FormControl<string | null | undefined>,
	}
	export function CreateStreetSegmentFormGroup() {
		return new FormGroup<StreetSegmentFormProperties>({
			beforeGeocodeId: new FormControl<string | null | undefined>(undefined),
			catalistUniquePrecinctCode: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			cityCouncilDistrict: new FormControl<string | null | undefined>(undefined),
			congressionalDistrict: new FormControl<string | null | undefined>(undefined),
			countyCouncilDistrict: new FormControl<string | null | undefined>(undefined),
			countyFips: new FormControl<string | null | undefined>(undefined),
			datasetId: new FormControl<string | null | undefined>(undefined),
			endHouseNumber: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			judicialDistrict: new FormControl<string | null | undefined>(undefined),
			mailOnly: new FormControl<boolean | null | undefined>(undefined),
			municipalDistrict: new FormControl<string | null | undefined>(undefined),
			ncoaAddress: new FormControl<string | null | undefined>(undefined),
			originalId: new FormControl<string | null | undefined>(undefined),
			precinctName: new FormControl<string | null | undefined>(undefined),
			precinctOcdId: new FormControl<string | null | undefined>(undefined),
			published: new FormControl<boolean | null | undefined>(undefined),
			schoolDistrict: new FormControl<string | null | undefined>(undefined),
			startHouseNumber: new FormControl<string | null | undefined>(undefined),
			startLatE7: new FormControl<number | null | undefined>(undefined),
			startLngE7: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			stateHouseDistrict: new FormControl<string | null | undefined>(undefined),
			stateSenateDistrict: new FormControl<string | null | undefined>(undefined),
			streetName: new FormControl<string | null | undefined>(undefined),
			subAdministrativeAreaName: new FormControl<string | null | undefined>(undefined),
			surrogateId: new FormControl<string | null | undefined>(undefined),
			targetsmartUniquePrecinctCode: new FormControl<string | null | undefined>(undefined),
			townshipDistrict: new FormControl<string | null | undefined>(undefined),
			unitNumber: new FormControl<string | null | undefined>(undefined),
			unitType: new FormControl<string | null | undefined>(undefined),
			vanPrecinctCode: new FormControl<string | null | undefined>(undefined),
			wardDistrict: new FormControl<string | null | undefined>(undefined),
			wildcard: new FormControl<boolean | null | undefined>(undefined),
			zip: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepresentativeInfoData {

		/** Political geographic divisions that contain the requested address. */
		divisions?: {[id: string]: GeographicDivision };

		/** Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request. */
		offices?: Array<Office>;

		/** Officials holding the offices listed above. Will only be present if includeOffices was true in the request. */
		officials?: Array<Official>;
	}
	export interface RepresentativeInfoDataFormProperties {

		/** Political geographic divisions that contain the requested address. */
		divisions: FormControl<{[id: string]: GeographicDivision } | null | undefined>,
	}
	export function CreateRepresentativeInfoDataFormGroup() {
		return new FormGroup<RepresentativeInfoDataFormProperties>({
			divisions: new FormControl<{[id: string]: GeographicDivision } | null | undefined>(undefined),
		});

	}


	/** A request for political geography and representative information for an address. */
	export interface RepresentativeInfoRequest {
		contextParams?: ContextParams;
	}

	/** A request for political geography and representative information for an address. */
	export interface RepresentativeInfoRequestFormProperties {
	}
	export function CreateRepresentativeInfoRequestFormGroup() {
		return new FormGroup<RepresentativeInfoRequestFormProperties>({
		});

	}


	/** The result of a representative info lookup query. */
	export interface RepresentativeInfoResponse {

		/** Political geographic divisions that contain the requested address. */
		divisions?: {[id: string]: GeographicDivision };

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#representativeInfoResponse". */
		kind?: string | null;

		/** A simple representation of an address. */
		normalizedInput?: SimpleAddressType;

		/** Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request. */
		offices?: Array<Office>;

		/** Officials holding the offices listed above. Will only be present if includeOffices was true in the request. */
		officials?: Array<Official>;
	}

	/** The result of a representative info lookup query. */
	export interface RepresentativeInfoResponseFormProperties {

		/** Political geographic divisions that contain the requested address. */
		divisions: FormControl<{[id: string]: GeographicDivision } | null | undefined>,

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#representativeInfoResponse". */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateRepresentativeInfoResponseFormGroup() {
		return new FormGroup<RepresentativeInfoResponseFormProperties>({
			divisions: new FormControl<{[id: string]: GeographicDivision } | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request for information about a voter. */
	export interface VoterInfoRequest {
		contextParams?: ContextParams;
		voterInfoSegmentResult?: VoterInfoSegmentResult;
	}

	/** A request for information about a voter. */
	export interface VoterInfoRequestFormProperties {
	}
	export function CreateVoterInfoRequestFormGroup() {
		return new FormGroup<VoterInfoRequestFormProperties>({
		});

	}

	export interface VoterInfoSegmentResult {
		generatedMillis?: string | null;
		postalAddress?: PostalAddress;

		/** A request for information about a voter. */
		request?: VoterInfoRequest;

		/** The result of a voter info lookup query. */
		response?: VoterInfoResponse;
	}
	export interface VoterInfoSegmentResultFormProperties {
		generatedMillis: FormControl<string | null | undefined>,
	}
	export function CreateVoterInfoSegmentResultFormGroup() {
		return new FormGroup<VoterInfoSegmentResultFormProperties>({
			generatedMillis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The result of a voter info lookup query. */
	export interface VoterInfoResponse {

		/** Contests that will appear on the voter's ballot. */
		contests?: Array<Contest>;

		/** Locations where a voter is eligible to drop off a completed ballot. The voter must have received and completed a ballot prior to arriving at the location. The location may not have ballots available on the premises. These locations could be open on or before election day as indicated in the pollingHours field. */
		dropOffLocations?: Array<PollingLocation>;

		/** Locations where the voter is eligible to vote early, prior to election day. */
		earlyVoteSites?: Array<PollingLocation>;

		/** Information about the election that was queried. */
		election?: Election;

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse". */
		kind?: string | null;

		/** Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well). */
		mailOnly?: boolean | null;

		/** A simple representation of an address. */
		normalizedInput?: SimpleAddressType;

		/** When there are multiple elections for a voter address, the otherElections field is populated in the API response and there are two possibilities: 1. If the earliest election is not the intended election, specify the election ID of the desired election in a second API request using the electionId field. 2. If these elections occur on the same day, the API doesn?t return any polling location, contest, or election official information to ensure that an additional query is made. For user-facing applications, we recommend displaying these elections to the user to disambiguate. A second API request using the electionId field should be made for the election that is relevant to the user. */
		otherElections?: Array<Election>;

		/** Locations where the voter is eligible to vote on election day. */
		pollingLocations?: Array<PollingLocation>;
		precinctId?: string | null;
		segments?: Array<StreetSegment>;

		/** Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array. */
		state?: Array<AdministrationRegion>;
	}

	/** The result of a voter info lookup query. */
	export interface VoterInfoResponseFormProperties {

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse". */
		kind: FormControl<string | null | undefined>,

		/** Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well). */
		mailOnly: FormControl<boolean | null | undefined>,
		precinctId: FormControl<string | null | undefined>,
	}
	export function CreateVoterInfoResponseFormGroup() {
		return new FormGroup<VoterInfoResponseFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			mailOnly: new FormControl<boolean | null | undefined>(undefined),
			precinctId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Searches for political divisions by their natural name or OCD ID.
		 * Get divisions
		 * @param {string} query The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html
		 * @return {void} Successful response
		 */
		Civicinfo_divisions_search(query: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'divisions?query=' + (query == null ? '' : encodeURIComponent(query)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List of available elections to query.
		 * Get elections
		 * @return {void} Successful response
		 */
		Civicinfo_elections_electionQuery(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'elections', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Looks up political geography and representative information for a single address.
		 * Get representatives
		 * @param {string} address The address to look up. May only be specified if the field ocdId is not given in the URL.
		 * @param {boolean} includeOffices Whether to return information about offices and officials. If false, only the top-level district information will be returned.
		 * @param {Array<string>} levels A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
		 * @param {Array<string>} roles A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
		 * @return {void} Successful response
		 */
		Civicinfo_representatives_representativeInfoByAddress(address: string | null | undefined, includeOffices: boolean | null | undefined, levels: Array<string> | null | undefined, roles: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'representatives?address=' + (address == null ? '' : encodeURIComponent(address)) + '&includeOffices=' + includeOffices + '&' + levels?.map(z => `levels=${encodeURIComponent(z)}`).join('&') + '&' + roles?.map(z => `roles=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Looks up representative information for a single geographic division.
		 * Get representatives/{ocdId}
		 * @param {string} ocdId The Open Civic Data division identifier of the division to look up.
		 * @param {Array<string>} levels A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
		 * @param {boolean} recursive If true, information about all divisions contained in the division requested will be included as well. For example, if querying ocd-division/country:us/district:dc, this would also return all DC's wards and ANCs.
		 * @param {Array<string>} roles A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
		 * @return {void} Successful response
		 */
		Civicinfo_representatives_representativeInfoByDivision(ocdId: string, levels: Array<string> | null | undefined, recursive: boolean | null | undefined, roles: Array<string> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'representatives/' + (ocdId == null ? '' : encodeURIComponent(ocdId)) + '&' + levels?.map(z => `levels=${encodeURIComponent(z)}`).join('&') + '&recursive=' + recursive + '&' + roles?.map(z => `roles=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Looks up information relevant to a voter based on the voter's registered address.
		 * Get voterinfo
		 * @param {string} address The registered address of the voter to look up.
		 * @param {string} electionId The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/electionsIf no election ID is specified in the query and there is more than one election with data for the given voter, the additional elections are provided in the otherElections response field.
		 * @param {boolean} officialOnly If set to true, only data from official state sources will be returned.
		 * @param {boolean} returnAllAvailableData If set to true, the query will return the success codeand include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries.
		 * @return {void} Successful response
		 */
		Civicinfo_elections_voterInfoQuery(address: string, electionId: string | null | undefined, officialOnly: boolean | null | undefined, returnAllAvailableData: boolean | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'voterinfo?address=' + (address == null ? '' : encodeURIComponent(address)) + '&electionId=' + (electionId == null ? '' : encodeURIComponent(electionId)) + '&officialOnly=' + officialOnly + '&returnAllAvailableData=' + returnAllAvailableData, { observe: 'response', responseType: 'text' });
		}
	}

}

