import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Describes information about a regional election administrative area. */
	export interface AdministrationRegion {

		/** Information about an election administrative body (e.g. County Board of Elections). */
		electionAdministrationBody?: AdministrativeBody;

		/** An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page. */
		id?: string;

		/** Describes information about a regional election administrative area. */
		local_jurisdiction?: AdministrationRegion;

		/** The name of the jurisdiction. */
		name?: string;

		/** A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources. */
		sources?: Array<Source>;
	}


	/** Information about an election administrative body (e.g. County Board of Elections). */
	export interface AdministrativeBody {

		/** A URL provided by this administrative body for information on absentee voting. */
		absenteeVotingInfoUrl?: string;
		addressLines?: Array<string>;

		/** A URL provided by this administrative body to give contest information to the voter. */
		ballotInfoUrl?: string;

		/** A simple representation of an address. */
		correspondenceAddress?: SimpleAddressType;

		/** A URL provided by this administrative body for looking up general election information. */
		electionInfoUrl?: string;

		/** The election officials for this election administrative body. */
		electionOfficials?: Array<ElectionOfficial>;

		/** A URL provided by this administrative body for confirming that the voter is registered to vote. */
		electionRegistrationConfirmationUrl?: string;

		/** A URL provided by this administrative body for looking up how to register to vote. */
		electionRegistrationUrl?: string;

		/** A URL provided by this administrative body describing election rules to the voter. */
		electionRulesUrl?: string;

		/** A description of the hours of operation for this administrative body. */
		hoursOfOperation?: string;

		/** The name of this election administrative body. */
		name?: string;

		/** A simple representation of an address. */
		physicalAddress?: SimpleAddressType;

		/** A description of the services this administrative body may provide. */
		voter_services?: Array<string>;

		/** A URL provided by this administrative body for looking up where to vote. */
		votingLocationFinderUrl?: string;
	}


	/** A simple representation of an address. */
	export interface SimpleAddressType {

		/** The city or town for the address. */
		city?: string;

		/** The street name and number of this address. */
		line1?: string;

		/** The second line the address, if needed. */
		line2?: string;

		/** The third line of the address, if needed. */
		line3?: string;

		/** The name of the location. */
		locationName?: string;

		/** The US two letter state abbreviation of the address. */
		state?: string;

		/** The US Postal Zip Code of the address. */
		zip?: string;
	}


	/** Information about individual election officials. */
	export interface ElectionOfficial {

		/** The email address of the election official. */
		emailAddress?: string;

		/** The fax number of the election official. */
		faxNumber?: string;

		/** The full name of the election official. */
		name?: string;

		/** The office phone number of the election official. */
		officePhoneNumber?: string;

		/** The title of the election official. */
		title?: string;
	}


	/** Contains information about the data source for the element containing it. */
	export interface Source {

		/** The name of the data source. */
		name?: string;

		/** Whether this data comes from an official government source. */
		official?: boolean;
	}


	/** Information about a candidate running for elected office. */
	export interface Candidate {

		/** The URL for the candidate's campaign web site. */
		candidateUrl?: string;

		/** A list of known (social) media channels for this candidate. */
		channels?: Array<Channel>;

		/** The email address for the candidate's campaign. */
		email?: string;

		/** The candidate's name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. "Mitt Romney / Paul Ryan" */
		name?: string;

		/** The order the candidate appears on the ballot for this contest. */
		orderOnBallot?: string;

		/** The full name of the party the candidate is a member of. */
		party?: string;

		/** The voice phone number for the candidate's campaign office. */
		phone?: string;

		/** A URL for a photo of the candidate. */
		photoUrl?: string;
	}


	/** A social media or web channel for a candidate. */
	export interface Channel {

		/** The unique public identifier for the candidate's channel. */
		id?: string;

		/** The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter */
		type?: string;
	}


	/** Information about a contest that appears on a voter's ballot. */
	export interface Contest {

		/** A number specifying the position of this contest on the voter's ballot. */
		ballotPlacement?: string;

		/** The official title on the ballot for this contest, only where available. */
		ballotTitle?: string;

		/** The candidate choices for this contest. */
		candidates?: Array<Candidate>;

		/** Describes the geographic scope of a contest. */
		district?: ElectoralDistrict;

		/** A description of any additional eligibility requirements for voting in this contest. */
		electorateSpecifications?: string;

		/** An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page. */
		id?: string;

		/** The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1". */
		level?: Array<string>;

		/** The number of candidates that will be elected to office in this contest. */
		numberElected?: string;

		/** The number of candidates that a voter may vote for in this contest. */
		numberVotingFor?: string;

		/** The name of the office for this contest. */
		office?: string;

		/** If this is a partisan election, the name of the party it is for. */
		primaryParty?: string;

		/** The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include "yes" or "no" for referenda. This field is only populated for contests of type 'Referendum'. */
		referendumBallotResponses?: Array<string>;

		/** Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'. */
		referendumBrief?: string;

		/** A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'. */
		referendumConStatement?: string;

		/** Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type 'Referendum'. */
		referendumEffectOfAbstain?: string;

		/** The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type 'Referendum'. */
		referendumPassageThreshold?: string;

		/** A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'. */
		referendumProStatement?: string;

		/** A brief description of the referendum. This field is only populated for contests of type 'Referendum'. */
		referendumSubtitle?: string;

		/** The full text of the referendum. This field is only populated for contests of type 'Referendum'. */
		referendumText?: string;

		/** The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'. */
		referendumTitle?: string;

		/** A link to the referendum. This field is only populated for contests of type 'Referendum'. */
		referendumUrl?: string;

		/** The roles which this office fulfills. */
		roles?: Array<string>;

		/** A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources. */
		sources?: Array<Source>;

		/** "Yes" or "No" depending on whether this a contest being held outside the normal election cycle. */
		special?: string;

		/** The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will typically be 'Retention'. */
		type?: string;
	}


	/** Describes the geographic scope of a contest. */
	export interface ElectoralDistrict {

		/** An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper. */
		id?: string;
		kgForeignKey?: string;

		/** The name of the district. */
		name?: string;

		/** The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special */
		scope?: string;
	}

	export interface ContextParams {
		clientProfile?: string;
	}


	/** A request to look up representative information for a single division. */
	export interface DivisionRepresentativeInfoRequest {
		contextParams?: ContextParams;
	}


	/** A search request for political geographies. */
	export interface DivisionSearchRequest {
		contextParams?: ContextParams;
	}


	/** The result of a division search query. */
	export interface DivisionSearchResponse {

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse". */
		kind?: string;
		results?: Array<DivisionSearchResult>;
	}


	/** Represents a political geographic division that matches the requested query. */
	export interface DivisionSearchResult {

		/** Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district. */
		aliases?: Array<string>;

		/** The name of the division. */
		name?: string;

		/** The unique Open Civic Data identifier for this division. */
		ocdId?: string;
	}


	/** Information about the election that was queried. */
	export interface Election {

		/** Day of the election in YYYY-MM-DD format. */
		electionDay?: string;

		/** The unique ID of this election. */
		id?: string;

		/** A displayable name for the election. */
		name?: string;

		/** The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us). */
		ocdDivisionId?: string;
	}

	export interface ElectionsQueryRequest {
		contextParams?: ContextParams;
	}


	/** The list of elections available for this version of the API. */
	export interface ElectionsQueryResponse {

		/** A list of available elections */
		elections?: Array<Election>;

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse". */
		kind?: string;
	}

	export interface FieldMetadataProto {
		internal?: InternalFieldMetadataProto;
	}

	export interface InternalFieldMetadataProto {
		isAuto?: boolean;
		sourceSummary?: InternalSourceSummaryProto;
	}

	export interface InternalSourceSummaryProto {
		dataset?: string;
		provider?: string;
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
		name?: string;

		/** List of indices in the offices array, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request. */
		officeIndices?: Array<number>;
	}


	/** Information about an Office held by one or more Officials. */
	export interface Office {

		/** The OCD ID of the division with which this office is associated. */
		divisionId?: string;

		/** The levels of government of which this office is part. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1". */
		levels?: Array<string>;

		/** The human-readable name of the office. */
		name?: string;

		/** List of indices in the officials array of people who presently hold this office. */
		officialIndices?: Array<number>;

		/** The roles which this office fulfills. Roles are not meant to be exhaustive, or to exactly specify the entire set of responsibilities of a given office, but are meant to be rough categories that are useful for general selection from or sorting of a list of offices. */
		roles?: Array<string>;

		/** A list of sources for this office. If multiple sources are listed, the data has been aggregated from those sources. */
		sources?: Array<Source>;
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
		name?: string;

		/** The full name of the party the official belongs to. */
		party?: string;

		/** The official's public contact phone numbers. */
		phones?: Array<string>;

		/** A URL for a photo of the official. */
		photoUrl?: string;

		/** The official's public website URLs. */
		urls?: Array<string>;
	}

	export interface PointProto {
		latE7?: string;
		lngE7?: string;
		metadata?: FieldMetadataProto;
	}


	/** A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot. */
	export interface PollingLocation {

		/** A simple representation of an address. */
		address?: SimpleAddressType;

		/** The last date that this early vote site or drop off location may be used. This field is not populated for polling locations. */
		endDate?: string;

		/** An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page. */
		id?: string;

		/** Latitude of the location, in degrees north of the equator. Only some locations -- generally, ballot drop boxes for vote-by-mail elections -- will have this set; for others, use a geocoding service like the Google Maps API to resolve the address to a geographic point. */
		latitude?: number;

		/** Longitude of the location, in degrees east of the Prime Meridian. Only some locations -- generally, ballot drop boxes for vote-by-mail elections -- will have this set; for others, use a geocoding service like the Google Maps API to resolve the address to a geographic point. */
		longitude?: number;

		/** The name of the early vote site or drop off location. This field is not populated for polling locations. */
		name?: string;

		/** Notes about this location (e.g. accessibility ramp or entrance to use). */
		notes?: string;

		/** A description of when this location is open. */
		pollingHours?: string;

		/** A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources. */
		sources?: Array<Source>;

		/** The first date that this early vote site or drop off location may be used. This field is not populated for polling locations. */
		startDate?: string;

		/** The services provided by this early vote site or drop off location. This field is not populated for polling locations. */
		voterServices?: string;
	}

	export interface PostalAddress {
		addressLines?: Array<string>;
		administrativeAreaName?: string;
		countryName?: string;
		countryNameCode?: string;
		dependentLocalityName?: string;
		dependentThoroughfareName?: string;
		firmName?: string;
		isDisputed?: boolean;
		languageCode?: string;
		localityName?: string;
		postBoxNumber?: string;
		postalCodeNumber?: string;
		postalCodeNumberExtension?: string;
		premiseName?: string;
		recipientName?: string;
		sortingCode?: string;
		subAdministrativeAreaName?: string;
		subPremiseName?: string;
		thoroughfareName?: string;
		thoroughfareNumber?: string;
	}

	export interface Provenance {
		collidedSegmentSource?: StreetSegmentList;
		ctclContestUuid?: string;
		ctclOfficeUuid?: string;
		datasetId?: string;
		precinctId?: string;
		precinctSplitId?: string;
		tsStreetSegmentId?: string;
		vip5PrecinctId?: string;
		vip5StreetSegmentId?: string;
		vipStreetSegmentId?: string;
	}

	export interface StreetSegmentList {
		segments?: Array<StreetSegment>;
	}

	export interface StreetSegment {
		administrationRegionIds?: Array<string>;
		beforeGeocodeId?: string;
		catalistUniquePrecinctCode?: string;
		city?: string;
		cityCouncilDistrict?: string;
		congressionalDistrict?: string;
		contestIds?: Array<string>;
		countyCouncilDistrict?: string;
		countyFips?: string;
		datasetId?: string;
		earlyVoteSiteByIds?: Array<string>;
		endHouseNumber?: string;
		geocodedPoint?: PointProto;
		geographicDivisionOcdIds?: Array<string>;
		id?: string;
		judicialDistrict?: string;
		mailOnly?: boolean;
		municipalDistrict?: string;
		ncoaAddress?: string;
		oddOrEvens?: Array<string>;
		originalId?: string;
		pollinglocationByIds?: Array<string>;
		precinctName?: string;
		precinctOcdId?: string;
		provenances?: Array<Provenance>;
		published?: boolean;
		schoolDistrict?: string;
		startHouseNumber?: string;
		startLatE7?: number;
		startLngE7?: number;
		state?: string;
		stateHouseDistrict?: string;
		stateSenateDistrict?: string;
		streetName?: string;
		subAdministrativeAreaName?: string;
		surrogateId?: string;
		targetsmartUniquePrecinctCode?: string;
		townshipDistrict?: string;
		unitNumber?: string;
		unitType?: string;
		vanPrecinctCode?: string;
		voterGeographicDivisionOcdIds?: Array<string>;
		wardDistrict?: string;
		wildcard?: boolean;
		zip?: string;
	}

	export interface RepresentativeInfoData {

		/** Political geographic divisions that contain the requested address. */
		divisions?: {[id: string]: GeographicDivision };

		/** Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request. */
		offices?: Array<Office>;

		/** Officials holding the offices listed above. Will only be present if includeOffices was true in the request. */
		officials?: Array<Official>;
	}


	/** A request for political geography and representative information for an address. */
	export interface RepresentativeInfoRequest {
		contextParams?: ContextParams;
	}


	/** The result of a representative info lookup query. */
	export interface RepresentativeInfoResponse {

		/** Political geographic divisions that contain the requested address. */
		divisions?: {[id: string]: GeographicDivision };

		/** Identifies what kind of resource this is. Value: the fixed string "civicinfo#representativeInfoResponse". */
		kind?: string;

		/** A simple representation of an address. */
		normalizedInput?: SimpleAddressType;

		/** Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request. */
		offices?: Array<Office>;

		/** Officials holding the offices listed above. Will only be present if includeOffices was true in the request. */
		officials?: Array<Official>;
	}


	/** A request for information about a voter. */
	export interface VoterInfoRequest {
		contextParams?: ContextParams;
		voterInfoSegmentResult?: VoterInfoSegmentResult;
	}

	export interface VoterInfoSegmentResult {
		generatedMillis?: string;
		postalAddress?: PostalAddress;

		/** A request for information about a voter. */
		request?: VoterInfoRequest;

		/** The result of a voter info lookup query. */
		response?: VoterInfoResponse;
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
		kind?: string;

		/** Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well). */
		mailOnly?: boolean;

		/** A simple representation of an address. */
		normalizedInput?: SimpleAddressType;

		/** When there are multiple elections for a voter address, the otherElections field is populated in the API response and there are two possibilities: 1. If the earliest election is not the intended election, specify the election ID of the desired election in a second API request using the electionId field. 2. If these elections occur on the same day, the API doesn?t return any polling location, contest, or election official information to ensure that an additional query is made. For user-facing applications, we recommend displaying these elections to the user to disambiguate. A second API request using the electionId field should be made for the election that is relevant to the user. */
		otherElections?: Array<Election>;

		/** Locations where the voter is eligible to vote on election day. */
		pollingLocations?: Array<PollingLocation>;
		precinctId?: string;
		segments?: Array<StreetSegment>;

		/** Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array. */
		state?: Array<AdministrationRegion>;
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
		Civicinfo_divisions_search(query: string): Observable<HttpResponse<string>> {
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
		Civicinfo_representatives_representativeInfoByAddress(address: string, includeOffices: boolean, levels: Array<string>, roles: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'representatives?address=' + (address == null ? '' : encodeURIComponent(address)) + '&includeOffices=' + includeOffices + '&' + levels.map(z => `levels=${encodeURIComponent(z)}`).join('&') + '&' + roles.map(z => `roles=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
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
		Civicinfo_representatives_representativeInfoByDivision(ocdId: string, levels: Array<string>, recursive: boolean, roles: Array<string>): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'representatives/' + (ocdId == null ? '' : encodeURIComponent(ocdId)) + '&' + levels.map(z => `levels=${encodeURIComponent(z)}`).join('&') + '&recursive=' + recursive + '&' + roles.map(z => `roles=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
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
		Civicinfo_elections_voterInfoQuery(address: string, electionId: string, officialOnly: boolean, returnAllAvailableData: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'voterinfo?address=' + (address == null ? '' : encodeURIComponent(address)) + '&electionId=' + (electionId == null ? '' : encodeURIComponent(electionId)) + '&officialOnly=' + officialOnly + '&returnAllAvailableData=' + returnAllAvailableData, { observe: 'response', responseType: 'text' });
		}
	}

}

