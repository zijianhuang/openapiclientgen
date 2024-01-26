import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail. */
	export interface AbsoluteDateRange {

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		endDate?: Date;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		startDate?: Date;
	}

	/** An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail. */
	export interface AbsoluteDateRangeFormProperties {
	}
	export function CreateAbsoluteDateRangeFormGroup() {
		return new FormGroup<AbsoluteDateRangeFormProperties>({
		});

	}


	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface Date {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day?: number | null;

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month?: number | null;

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year?: number | null;
	}

	/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
	export interface DateFormProperties {

		/** Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. */
		day: FormControl<number | null | undefined>,

		/** Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. */
		month: FormControl<number | null | undefined>,

		/** Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDateFormGroup() {
		return new FormGroup<DateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to accept a proposal. */
	export interface AcceptProposalRequest {

		/** The last known client revision number of the proposal. */
		proposalRevision?: string | null;
	}

	/** Request to accept a proposal. */
	export interface AcceptProposalRequestFormProperties {

		/** The last known client revision number of the proposal. */
		proposalRevision: FormControl<string | null | undefined>,
	}
	export function CreateAcceptProposalRequestFormGroup() {
		return new FormGroup<AcceptProposalRequestFormProperties>({
			proposalRevision: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents size of a single ad slot, or a creative. */
	export interface AdSize {

		/** The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
		height?: string | null;

		/** The size type of the ad slot. */
		sizeType?: AdSizeSizeType | null;

		/** The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
		width?: string | null;
	}

	/** Represents size of a single ad slot, or a creative. */
	export interface AdSizeFormProperties {

		/** The height of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
		height: FormControl<string | null | undefined>,

		/** The size type of the ad slot. */
		sizeType: FormControl<AdSizeSizeType | null | undefined>,

		/** The width of the ad slot in pixels. This field will be present only when size type is `PIXEL`. */
		width: FormControl<string | null | undefined>,
	}
	export function CreateAdSizeFormGroup() {
		return new FormGroup<AdSizeFormProperties>({
			height: new FormControl<string | null | undefined>(undefined),
			sizeType: new FormControl<AdSizeSizeType | null | undefined>(undefined),
			width: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AdSizeSizeType { SIZE_TYPE_UNSPECIFIED = 0, PIXEL = 1, INTERSTITIAL = 2, NATIVE = 3, FLUID = 4 }


	/** Detected ad technology provider information. */
	export interface AdTechnologyProviders {

		/** The detected ad technology provider IDs for this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/providers.csv for mapping of provider ID to provided name, a privacy policy URL, and a list of domains which can be attributed to the provider. If the creative contains provider IDs that are outside of those listed in the `BidRequest.adslot.consented_providers_settings.consented_providers` field on the (Google bid protocol)[https://developers.google.com/authorized-buyers/rtb/downloads/realtime-bidding-proto] and the `BidRequest.user.ext.consented_providers_settings.consented_providers` field on the (OpenRTB protocol)[https://developers.google.com/authorized-buyers/rtb/downloads/openrtb-adx-proto], and a bid is submitted with that creative for an impression that will serve to an EEA user, the bid will be filtered before the auction. */
		detectedProviderIds?: Array<string>;

		/** Whether the creative contains an unidentified ad technology provider. If true for a given creative, any bid submitted with that creative for an impression that will serve to an EEA user will be filtered before the auction. */
		hasUnidentifiedProvider?: boolean | null;
	}

	/** Detected ad technology provider information. */
	export interface AdTechnologyProvidersFormProperties {

		/** Whether the creative contains an unidentified ad technology provider. If true for a given creative, any bid submitted with that creative for an impression that will serve to an EEA user will be filtered before the auction. */
		hasUnidentifiedProvider: FormControl<boolean | null | undefined>,
	}
	export function CreateAdTechnologyProvidersFormGroup() {
		return new FormGroup<AdTechnologyProvidersFormProperties>({
			hasUnidentifiedProvider: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A request for associating a deal and a creative. */
	export interface AddDealAssociationRequest {

		/** The association between a creative and a deal. */
		association?: CreativeDealAssociation;
	}

	/** A request for associating a deal and a creative. */
	export interface AddDealAssociationRequestFormProperties {
	}
	export function CreateAddDealAssociationRequestFormGroup() {
		return new FormGroup<AddDealAssociationRequestFormProperties>({
		});

	}


	/** The association between a creative and a deal. */
	export interface CreativeDealAssociation {

		/** The account the creative belongs to. */
		accountId?: string | null;

		/** The ID of the creative associated with the deal. */
		creativeId?: string | null;

		/** The externalDealId for the deal associated with the creative. */
		dealsId?: string | null;
	}

	/** The association between a creative and a deal. */
	export interface CreativeDealAssociationFormProperties {

		/** The account the creative belongs to. */
		accountId: FormControl<string | null | undefined>,

		/** The ID of the creative associated with the deal. */
		creativeId: FormControl<string | null | undefined>,

		/** The externalDealId for the deal associated with the creative. */
		dealsId: FormControl<string | null | undefined>,
	}
	export function CreateCreativeDealAssociationFormGroup() {
		return new FormGroup<CreativeDealAssociationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			creativeId: new FormControl<string | null | undefined>(undefined),
			dealsId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for adding a note to a given proposal. */
	export interface AddNoteRequest {

		/** A proposal may be associated to several notes. */
		note?: Note;
	}

	/** Request message for adding a note to a given proposal. */
	export interface AddNoteRequestFormProperties {
	}
	export function CreateAddNoteRequestFormGroup() {
		return new FormGroup<AddNoteRequestFormProperties>({
		});

	}


	/** A proposal may be associated to several notes. */
	export interface Note {

		/** Output only. The timestamp for when this note was created. */
		createTime?: string | null;

		/** Output only. The role of the person (buyer/seller) creating the note. */
		creatorRole?: NoteCreatorRole | null;

		/** The actual note to attach. (max-length: 1024 unicode code units) Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
		note?: string | null;

		/** Output only. The unique ID for the note. */
		noteId?: string | null;

		/** Output only. The revision number of the proposal when the note is created. */
		proposalRevision?: string | null;
	}

	/** A proposal may be associated to several notes. */
	export interface NoteFormProperties {

		/** Output only. The timestamp for when this note was created. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The role of the person (buyer/seller) creating the note. */
		creatorRole: FormControl<NoteCreatorRole | null | undefined>,

		/** The actual note to attach. (max-length: 1024 unicode code units) Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
		note: FormControl<string | null | undefined>,

		/** Output only. The unique ID for the note. */
		noteId: FormControl<string | null | undefined>,

		/** Output only. The revision number of the proposal when the note is created. */
		proposalRevision: FormControl<string | null | undefined>,
	}
	export function CreateNoteFormGroup() {
		return new FormGroup<NoteFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			creatorRole: new FormControl<NoteCreatorRole | null | undefined>(undefined),
			note: new FormControl<string | null | undefined>(undefined),
			noteId: new FormControl<string | null | undefined>(undefined),
			proposalRevision: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum NoteCreatorRole { BUYER_SELLER_ROLE_UNSPECIFIED = 0, BUYER = 1, SELLER = 2 }


	/** Output only. The app type the restriction applies to for mobile device. */
	export interface AppContext {

		/** The app types this restriction applies to. */
		appTypes?: Array<string>;
	}

	/** Output only. The app type the restriction applies to for mobile device. */
	export interface AppContextFormProperties {
	}
	export function CreateAppContextFormGroup() {
		return new FormGroup<AppContextFormProperties>({
		});

	}


	/** Output only. The auction type the restriction applies to. */
	export interface AuctionContext {

		/** The auction types this restriction applies to. */
		auctionTypes?: Array<string>;
	}

	/** Output only. The auction type the restriction applies to. */
	export interface AuctionContextFormProperties {
	}
	export function CreateAuctionContextFormGroup() {
		return new FormGroup<AuctionContextFormProperties>({
		});

	}


	/** The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel; */
	export interface BidMetricsRow {

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		bids?: MetricValue;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		bidsInAuction?: MetricValue;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		billedImpressions?: MetricValue;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		impressionsWon?: MetricValue;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		measurableImpressions?: MetricValue;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		reachedQueries?: MetricValue;

		/** A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row. */
		rowDimensions?: RowDimensions;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		viewableImpressions?: MetricValue;
	}

	/** The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel; */
	export interface BidMetricsRowFormProperties {
	}
	export function CreateBidMetricsRowFormGroup() {
		return new FormGroup<BidMetricsRowFormProperties>({
		});

	}


	/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
	export interface MetricValue {

		/** The expected value of the metric. */
		value?: string | null;

		/** The variance (for example, square of the standard deviation) of the metric value. If value is exact, variance is 0. Can be used to calculate margin of error as a percentage of value, using the following formula, where Z is the standard constant that depends on the preferred size of the confidence interval (for example, for 90% confidence interval, use Z = 1.645): marginOfError = 100 * Z * sqrt(variance) / value */
		variance?: string | null;
	}

	/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
	export interface MetricValueFormProperties {

		/** The expected value of the metric. */
		value: FormControl<string | null | undefined>,

		/** The variance (for example, square of the standard deviation) of the metric value. If value is exact, variance is 0. Can be used to calculate margin of error as a percentage of value, using the following formula, where Z is the standard constant that depends on the preferred size of the confidence interval (for example, for 90% confidence interval, use Z = 1.645): marginOfError = 100 * Z * sqrt(variance) / value */
		variance: FormControl<string | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
			variance: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row. */
	export interface RowDimensions {

		/** The publisher identifier for this row, if a breakdown by [BreakdownDimension.PUBLISHER_IDENTIFIER](https://developers.google.com/authorized-buyers/apis/reference/rest/v2beta1/bidders.accounts.filterSets#FilterSet.BreakdownDimension) was requested. */
		publisherIdentifier?: string | null;

		/** An interval of time, with an absolute start and end. */
		timeInterval?: TimeInterval;
	}

	/** A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row. */
	export interface RowDimensionsFormProperties {

		/** The publisher identifier for this row, if a breakdown by [BreakdownDimension.PUBLISHER_IDENTIFIER](https://developers.google.com/authorized-buyers/apis/reference/rest/v2beta1/bidders.accounts.filterSets#FilterSet.BreakdownDimension) was requested. */
		publisherIdentifier: FormControl<string | null | undefined>,
	}
	export function CreateRowDimensionsFormGroup() {
		return new FormGroup<RowDimensionsFormProperties>({
			publisherIdentifier: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An interval of time, with an absolute start and end. */
	export interface TimeInterval {

		/** The timestamp marking the end of the range (exclusive) for which data is included. */
		endTime?: string | null;

		/** The timestamp marking the start of the range (inclusive) for which data is included. */
		startTime?: string | null;
	}

	/** An interval of time, with an absolute start and end. */
	export interface TimeIntervalFormProperties {

		/** The timestamp marking the end of the range (exclusive) for which data is included. */
		endTime: FormControl<string | null | undefined>,

		/** The timestamp marking the start of the range (inclusive) for which data is included. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimeIntervalFormGroup() {
		return new FormGroup<TimeIntervalFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status. */
	export interface BidResponseWithoutBidsStatusRow {

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		impressionCount?: MetricValue;

		/** A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row. */
		rowDimensions?: RowDimensions;

		/** The status specifying why the bid responses were considered to have no applicable bids. */
		status?: BidResponseWithoutBidsStatusRowStatus | null;
	}

	/** The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status. */
	export interface BidResponseWithoutBidsStatusRowFormProperties {

		/** The status specifying why the bid responses were considered to have no applicable bids. */
		status: FormControl<BidResponseWithoutBidsStatusRowStatus | null | undefined>,
	}
	export function CreateBidResponseWithoutBidsStatusRowFormGroup() {
		return new FormGroup<BidResponseWithoutBidsStatusRowFormProperties>({
			status: new FormControl<BidResponseWithoutBidsStatusRowStatus | null | undefined>(undefined),
		});

	}

	export enum BidResponseWithoutBidsStatusRowStatus { STATUS_UNSPECIFIED = 0, RESPONSES_WITHOUT_BIDS = 1, RESPONSES_WITHOUT_BIDS_FOR_ACCOUNT = 2, RESPONSES_WITHOUT_BIDS_FOR_DEAL = 3 }


	/** Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID. */
	export interface Buyer {

		/** Authorized Buyers account ID of the buyer. */
		accountId?: string | null;
	}

	/** Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID. */
	export interface BuyerFormProperties {

		/** Authorized Buyers account ID of the buyer. */
		accountId: FormControl<string | null | undefined>,
	}
	export function CreateBuyerFormGroup() {
		return new FormGroup<BuyerFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status. */
	export interface CalloutStatusRow {

		/** The ID of the callout status. See [callout-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/callout-status-codes). */
		calloutStatusId?: number | null;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		impressionCount?: MetricValue;

		/** A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row. */
		rowDimensions?: RowDimensions;
	}

	/** The number of impressions with the specified dimension values where the corresponding bid request or bid response was not successful, as described by the specified callout status. */
	export interface CalloutStatusRowFormProperties {

		/** The ID of the callout status. See [callout-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/callout-status-codes). */
		calloutStatusId: FormControl<number | null | undefined>,
	}
	export function CreateCalloutStatusRowFormGroup() {
		return new FormGroup<CalloutStatusRowFormProperties>({
			calloutStatusId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to cancel an ongoing negotiation. */
	export interface CancelNegotiationRequest {
	}

	/** Request to cancel an ongoing negotiation. */
	export interface CancelNegotiationRequestFormProperties {
	}
	export function CreateCancelNegotiationRequestFormGroup() {
		return new FormGroup<CancelNegotiationRequestFormProperties>({
		});

	}


	/** A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified. */
	export interface Client {

		/** The globally-unique numerical ID of the client. The value of this field is ignored in create and update operations. */
		clientAccountId?: string | null;

		/** Name used to represent this client to publishers. You may have multiple clients that map to the same entity, but for each client the combination of `clientName` and entity must be unique. You can specify this field as empty. Maximum length of 255 characters is allowed. */
		clientName?: string | null;

		/** Numerical identifier of the client entity. The entity can be an advertiser, a brand, or an agency. This identifier is unique among all the entities with the same type. The value of this field is ignored if the entity type is not provided. A list of all known advertisers with their identifiers is available in the [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt) file. A list of all known brands with their identifiers is available in the [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt) file. A list of all known agencies with their identifiers is available in the [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt) file. */
		entityId?: string | null;

		/** The name of the entity. This field is automatically fetched based on the type and ID. The value of this field is ignored in create and update operations. */
		entityName?: string | null;

		/** An optional field for specifying the type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`. */
		entityType?: ClientEntityType | null;

		/** Optional arbitrary unique identifier of this client buyer from the standpoint of its Ad Exchange sponsor buyer. This field can be used to associate a client buyer with the identifier in the namespace of its sponsor buyer, lookup client buyers by that identifier and verify whether an Ad Exchange counterpart of a given client buyer already exists. If present, must be unique among all the client buyers for its Ad Exchange sponsor buyer. */
		partnerClientId?: string | null;

		/** The role which is assigned to the client buyer. Each role implies a set of permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`, `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`. */
		role?: ClientRole | null;

		/** The status of the client buyer. */
		status?: ClientStatus | null;

		/** Whether the client buyer will be visible to sellers. */
		visibleToSeller?: boolean | null;
	}

	/** A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified. */
	export interface ClientFormProperties {

		/** The globally-unique numerical ID of the client. The value of this field is ignored in create and update operations. */
		clientAccountId: FormControl<string | null | undefined>,

		/** Name used to represent this client to publishers. You may have multiple clients that map to the same entity, but for each client the combination of `clientName` and entity must be unique. You can specify this field as empty. Maximum length of 255 characters is allowed. */
		clientName: FormControl<string | null | undefined>,

		/** Numerical identifier of the client entity. The entity can be an advertiser, a brand, or an agency. This identifier is unique among all the entities with the same type. The value of this field is ignored if the entity type is not provided. A list of all known advertisers with their identifiers is available in the [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt) file. A list of all known brands with their identifiers is available in the [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt) file. A list of all known agencies with their identifiers is available in the [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt) file. */
		entityId: FormControl<string | null | undefined>,

		/** The name of the entity. This field is automatically fetched based on the type and ID. The value of this field is ignored in create and update operations. */
		entityName: FormControl<string | null | undefined>,

		/** An optional field for specifying the type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`. */
		entityType: FormControl<ClientEntityType | null | undefined>,

		/** Optional arbitrary unique identifier of this client buyer from the standpoint of its Ad Exchange sponsor buyer. This field can be used to associate a client buyer with the identifier in the namespace of its sponsor buyer, lookup client buyers by that identifier and verify whether an Ad Exchange counterpart of a given client buyer already exists. If present, must be unique among all the client buyers for its Ad Exchange sponsor buyer. */
		partnerClientId: FormControl<string | null | undefined>,

		/** The role which is assigned to the client buyer. Each role implies a set of permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`, `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`. */
		role: FormControl<ClientRole | null | undefined>,

		/** The status of the client buyer. */
		status: FormControl<ClientStatus | null | undefined>,

		/** Whether the client buyer will be visible to sellers. */
		visibleToSeller: FormControl<boolean | null | undefined>,
	}
	export function CreateClientFormGroup() {
		return new FormGroup<ClientFormProperties>({
			clientAccountId: new FormControl<string | null | undefined>(undefined),
			clientName: new FormControl<string | null | undefined>(undefined),
			entityId: new FormControl<string | null | undefined>(undefined),
			entityName: new FormControl<string | null | undefined>(undefined),
			entityType: new FormControl<ClientEntityType | null | undefined>(undefined),
			partnerClientId: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<ClientRole | null | undefined>(undefined),
			status: new FormControl<ClientStatus | null | undefined>(undefined),
			visibleToSeller: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ClientEntityType { ENTITY_TYPE_UNSPECIFIED = 0, ADVERTISER = 1, BRAND = 2, AGENCY = 3, ENTITY_TYPE_UNCLASSIFIED = 4 }

	export enum ClientRole { CLIENT_ROLE_UNSPECIFIED = 0, CLIENT_DEAL_VIEWER = 1, CLIENT_DEAL_NEGOTIATOR = 2, CLIENT_DEAL_APPROVER = 3 }

	export enum ClientStatus { CLIENT_STATUS_UNSPECIFIED = 0, DISABLED = 1, ACTIVE = 2 }


	/** A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is through accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified. */
	export interface ClientUser {

		/** Numerical account ID of the client buyer with which the user is associated; the buyer must be a client of the current sponsor buyer. The value of this field is ignored in an update operation. */
		clientAccountId?: string | null;

		/** User's email address. The value of this field is ignored in an update operation. */
		email?: string | null;

		/** The status of the client user. */
		status?: ClientUserStatus | null;

		/** The unique numerical ID of the client user that has accepted an invitation. The value of this field is ignored in an update operation. */
		userId?: string | null;
	}

	/** A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is through accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified. */
	export interface ClientUserFormProperties {

		/** Numerical account ID of the client buyer with which the user is associated; the buyer must be a client of the current sponsor buyer. The value of this field is ignored in an update operation. */
		clientAccountId: FormControl<string | null | undefined>,

		/** User's email address. The value of this field is ignored in an update operation. */
		email: FormControl<string | null | undefined>,

		/** The status of the client user. */
		status: FormControl<ClientUserStatus | null | undefined>,

		/** The unique numerical ID of the client user that has accepted an invitation. The value of this field is ignored in an update operation. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateClientUserFormGroup() {
		return new FormGroup<ClientUserFormProperties>({
			clientAccountId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<ClientUserStatus | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ClientUserStatus { USER_STATUS_UNSPECIFIED = 0, PENDING = 1, ACTIVE = 2, DISABLED = 3 }


	/** An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified. */
	export interface ClientUserInvitation {

		/** Numerical account ID of the client buyer that the invited user is associated with. The value of this field is ignored in create operations. */
		clientAccountId?: string | null;

		/** The email address to which the invitation is sent. Email addresses should be unique among all client users under each sponsor buyer. */
		email?: string | null;

		/** The unique numerical ID of the invitation that is sent to the user. The value of this field is ignored in create operations. */
		invitationId?: string | null;
	}

	/** An invitation for a new client user to get access to the Authorized Buyers UI. All fields are required unless otherwise specified. */
	export interface ClientUserInvitationFormProperties {

		/** Numerical account ID of the client buyer that the invited user is associated with. The value of this field is ignored in create operations. */
		clientAccountId: FormControl<string | null | undefined>,

		/** The email address to which the invitation is sent. Email addresses should be unique among all client users under each sponsor buyer. */
		email: FormControl<string | null | undefined>,

		/** The unique numerical ID of the invitation that is sent to the user. The value of this field is ignored in create operations. */
		invitationId: FormControl<string | null | undefined>,
	}
	export function CreateClientUserInvitationFormGroup() {
		return new FormGroup<ClientUserInvitationFormProperties>({
			clientAccountId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			invitationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for indicating that the proposal's setup step is complete. */
	export interface CompleteSetupRequest {
	}

	/** Request message for indicating that the proposal's setup step is complete. */
	export interface CompleteSetupRequestFormProperties {
	}
	export function CreateCompleteSetupRequestFormGroup() {
		return new FormGroup<CompleteSetupRequestFormProperties>({
		});

	}


	/** Contains information on how a buyer or seller can be reached. */
	export interface ContactInformation {

		/** Email address for the contact. */
		email?: string | null;

		/** The name of the contact. */
		name?: string | null;
	}

	/** Contains information on how a buyer or seller can be reached. */
	export interface ContactInformationFormProperties {

		/** Email address for the contact. */
		email: FormControl<string | null | undefined>,

		/** The name of the contact. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateContactInformationFormGroup() {
		return new FormGroup<ContactInformationFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Output only. Shows any corrections that were applied to this creative. */
	export interface Correction {

		/** The contexts for the correction. */
		contexts?: Array<ServingContext>;

		/** Additional details about what was corrected. */
		details?: Array<string>;

		/** The type of correction that was applied to the creative. */
		type?: CorrectionType | null;
	}

	/** Output only. Shows any corrections that were applied to this creative. */
	export interface CorrectionFormProperties {

		/** The type of correction that was applied to the creative. */
		type: FormControl<CorrectionType | null | undefined>,
	}
	export function CreateCorrectionFormGroup() {
		return new FormGroup<CorrectionFormProperties>({
			type: new FormControl<CorrectionType | null | undefined>(undefined),
		});

	}


	/** The serving context for this restriction. */
	export interface ServingContext {

		/** Matches all contexts. */
		all?: ServingContextAll | null;

		/** Output only. The app type the restriction applies to for mobile device. */
		appType?: AppContext;

		/** Output only. The auction type the restriction applies to. */
		auctionType?: AuctionContext;

		/** Output only. The Geo criteria the restriction applies to. */
		location?: LocationContext;

		/** Output only. The type of platform the restriction applies to. */
		platform?: PlatformContext;

		/** Output only. A security context. */
		securityType?: SecurityContext;
	}

	/** The serving context for this restriction. */
	export interface ServingContextFormProperties {

		/** Matches all contexts. */
		all: FormControl<ServingContextAll | null | undefined>,
	}
	export function CreateServingContextFormGroup() {
		return new FormGroup<ServingContextFormProperties>({
			all: new FormControl<ServingContextAll | null | undefined>(undefined),
		});

	}

	export enum ServingContextAll { SIMPLE_CONTEXT = 0 }


	/** Output only. The Geo criteria the restriction applies to. */
	export interface LocationContext {

		/** IDs representing the geo location for this context. Refer to the [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv) file for different geo criteria IDs. */
		geoCriteriaIds?: Array<number>;
	}

	/** Output only. The Geo criteria the restriction applies to. */
	export interface LocationContextFormProperties {
	}
	export function CreateLocationContextFormGroup() {
		return new FormGroup<LocationContextFormProperties>({
		});

	}


	/** Output only. The type of platform the restriction applies to. */
	export interface PlatformContext {

		/** The platforms this restriction applies to. */
		platforms?: Array<string>;
	}

	/** Output only. The type of platform the restriction applies to. */
	export interface PlatformContextFormProperties {
	}
	export function CreatePlatformContextFormGroup() {
		return new FormGroup<PlatformContextFormProperties>({
		});

	}


	/** Output only. A security context. */
	export interface SecurityContext {

		/** The security types in this context. */
		securities?: Array<string>;
	}

	/** Output only. A security context. */
	export interface SecurityContextFormProperties {
	}
	export function CreateSecurityContextFormGroup() {
		return new FormGroup<SecurityContextFormProperties>({
		});

	}

	export enum CorrectionType { CORRECTION_TYPE_UNSPECIFIED = 0, VENDOR_IDS_ADDED = 1, SSL_ATTRIBUTE_REMOVED = 2, FLASH_FREE_ATTRIBUTE_REMOVED = 3, FLASH_FREE_ATTRIBUTE_ADDED = 4, REQUIRED_ATTRIBUTE_ADDED = 5, REQUIRED_VENDOR_ADDED = 6, SSL_ATTRIBUTE_ADDED = 7, IN_BANNER_VIDEO_ATTRIBUTE_ADDED = 8, MRAID_ATTRIBUTE_ADDED = 9, FLASH_ATTRIBUTE_REMOVED = 10, VIDEO_IN_SNIPPET_ATTRIBUTE_ADDED = 11 }


	/** A creative and its classification data. */
	export interface Creative {

		/** The account that this creative belongs to. Can be used to filter the response of the creatives.list method. */
		accountId?: string | null;

		/** The link to AdChoices destination page. */
		adChoicesDestinationUrl?: string | null;

		/** Detected ad technology provider information. */
		adTechnologyProviders?: AdTechnologyProviders;

		/** The name of the company being advertised in the creative. */
		advertiserName?: string | null;

		/** The agency ID for this creative. */
		agencyId?: string | null;

		/** Output only. The last update timestamp of the creative through the API. */
		apiUpdateTime?: string | null;

		/** All attributes for the ads that may be shown from this creative. Can be used to filter the response of the creatives.list method. */
		attributes?: Array<string>;

		/** The set of destination URLs for the creative. */
		clickThroughUrls?: Array<string>;

		/** Output only. Shows any corrections that were applied to this creative. */
		corrections?: Array<Correction>;

		/** The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method. */
		creativeId?: string | null;

		/** Output only. The top-level deals status of this creative. If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method. */
		dealsStatus?: CreativeDealsStatus | null;

		/** The set of declared destination URLs for the creative. */
		declaredClickThroughUrls?: Array<string>;

		/** Output only. Detected advertiser IDs, if any. */
		detectedAdvertiserIds?: Array<string>;

		/** Output only. The detected domains for this creative. */
		detectedDomains?: Array<string>;

		/** Output only. The detected languages for this creative. The order is arbitrary. The codes are 2 or 5 characters and are documented at https://developers.google.com/adwords/api/docs/appendix/languagecodes. */
		detectedLanguages?: Array<string>;

		/** Output only. Detected product categories, if any. See the ad-product-categories.txt file in the technical documentation for a list of IDs. */
		detectedProductCategories?: Array<number>;

		/** Output only. Detected sensitive categories, if any. See the ad-sensitive-categories.txt file in the technical documentation for a list of IDs. You should use these IDs along with the excluded-sensitive-category field in the bid request to filter your bids. */
		detectedSensitiveCategories?: Array<number>;

		/** HTML content for a creative. */
		html?: HtmlContent;

		/** The set of URLs to be called to record an impression. */
		impressionTrackingUrls?: Array<string>;

		/** Native content for a creative. */
		native?: NativeContent;

		/** Output only. The top-level open auction status of this creative. If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method. */
		openAuctionStatus?: CreativeDealsStatus | null;

		/** All restricted categories for the ads that may be shown from this creative. */
		restrictedCategories?: Array<string>;

		/** Output only. The granular status of this ad in specific contexts. A context here relates to where something ultimately serves (for example, a physical location, a platform, an HTTPS versus HTTP request, or the type of auction). */
		servingRestrictions?: Array<ServingRestriction>;

		/** All vendor IDs for the ads that may be shown from this creative. See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for possible values. */
		vendorIds?: Array<number>;

		/** Output only. The version of this creative. */
		version?: number | null;

		/** Video content for a creative. */
		video?: VideoContent;
	}

	/** A creative and its classification data. */
	export interface CreativeFormProperties {

		/** The account that this creative belongs to. Can be used to filter the response of the creatives.list method. */
		accountId: FormControl<string | null | undefined>,

		/** The link to AdChoices destination page. */
		adChoicesDestinationUrl: FormControl<string | null | undefined>,

		/** The name of the company being advertised in the creative. */
		advertiserName: FormControl<string | null | undefined>,

		/** The agency ID for this creative. */
		agencyId: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of the creative through the API. */
		apiUpdateTime: FormControl<string | null | undefined>,

		/** The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method. */
		creativeId: FormControl<string | null | undefined>,

		/** Output only. The top-level deals status of this creative. If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method. */
		dealsStatus: FormControl<CreativeDealsStatus | null | undefined>,

		/** Output only. The top-level open auction status of this creative. If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in serving_restrictions will also exist. Note that this may be nuanced with other contextual restrictions, in which case, it may be preferable to read from serving_restrictions directly. Can be used to filter the response of the creatives.list method. */
		openAuctionStatus: FormControl<CreativeDealsStatus | null | undefined>,

		/** Output only. The version of this creative. */
		version: FormControl<number | null | undefined>,
	}
	export function CreateCreativeFormGroup() {
		return new FormGroup<CreativeFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			adChoicesDestinationUrl: new FormControl<string | null | undefined>(undefined),
			advertiserName: new FormControl<string | null | undefined>(undefined),
			agencyId: new FormControl<string | null | undefined>(undefined),
			apiUpdateTime: new FormControl<string | null | undefined>(undefined),
			creativeId: new FormControl<string | null | undefined>(undefined),
			dealsStatus: new FormControl<CreativeDealsStatus | null | undefined>(undefined),
			openAuctionStatus: new FormControl<CreativeDealsStatus | null | undefined>(undefined),
			version: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreativeDealsStatus { STATUS_UNSPECIFIED = 0, NOT_CHECKED = 1, CONDITIONALLY_APPROVED = 2, APPROVED = 3, DISAPPROVED = 4, PENDING_REVIEW = 5, STATUS_TYPE_UNSPECIFIED = 6 }


	/** HTML content for a creative. */
	export interface HtmlContent {

		/** The height of the HTML snippet in pixels. */
		height?: number | null;

		/** The HTML snippet that displays the ad when inserted in the web page. */
		snippet?: string | null;

		/** The width of the HTML snippet in pixels. */
		width?: number | null;
	}

	/** HTML content for a creative. */
	export interface HtmlContentFormProperties {

		/** The height of the HTML snippet in pixels. */
		height: FormControl<number | null | undefined>,

		/** The HTML snippet that displays the ad when inserted in the web page. */
		snippet: FormControl<string | null | undefined>,

		/** The width of the HTML snippet in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateHtmlContentFormGroup() {
		return new FormGroup<HtmlContentFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			snippet: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Native content for a creative. */
	export interface NativeContent {

		/** The name of the advertiser or sponsor, to be displayed in the ad creative. */
		advertiserName?: string | null;

		/** An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved. */
		appIcon?: Image;

		/** A long description of the ad. */
		body?: string | null;

		/** A label for the button that the user is supposed to click. */
		callToAction?: string | null;

		/** The URL that the browser/SDK will load when the user clicks the ad. */
		clickLinkUrl?: string | null;

		/** The URL to use for click tracking. */
		clickTrackingUrl?: string | null;

		/** A short title for the ad. */
		headline?: string | null;

		/** An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved. */
		image?: Image;

		/** An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved. */
		logo?: Image;

		/** The price of the promoted app including currency info. */
		priceDisplayText?: string | null;

		/** The app rating in the app store. Must be in the range [0-5]. */
		starRating?: number | null;

		/** The URL to the app store to purchase/download the promoted app. */
		storeUrl?: string | null;

		/** The URL to fetch a native video ad. */
		videoUrl?: string | null;
	}

	/** Native content for a creative. */
	export interface NativeContentFormProperties {

		/** The name of the advertiser or sponsor, to be displayed in the ad creative. */
		advertiserName: FormControl<string | null | undefined>,

		/** A long description of the ad. */
		body: FormControl<string | null | undefined>,

		/** A label for the button that the user is supposed to click. */
		callToAction: FormControl<string | null | undefined>,

		/** The URL that the browser/SDK will load when the user clicks the ad. */
		clickLinkUrl: FormControl<string | null | undefined>,

		/** The URL to use for click tracking. */
		clickTrackingUrl: FormControl<string | null | undefined>,

		/** A short title for the ad. */
		headline: FormControl<string | null | undefined>,

		/** The price of the promoted app including currency info. */
		priceDisplayText: FormControl<string | null | undefined>,

		/** The app rating in the app store. Must be in the range [0-5]. */
		starRating: FormControl<number | null | undefined>,

		/** The URL to the app store to purchase/download the promoted app. */
		storeUrl: FormControl<string | null | undefined>,

		/** The URL to fetch a native video ad. */
		videoUrl: FormControl<string | null | undefined>,
	}
	export function CreateNativeContentFormGroup() {
		return new FormGroup<NativeContentFormProperties>({
			advertiserName: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			callToAction: new FormControl<string | null | undefined>(undefined),
			clickLinkUrl: new FormControl<string | null | undefined>(undefined),
			clickTrackingUrl: new FormControl<string | null | undefined>(undefined),
			headline: new FormControl<string | null | undefined>(undefined),
			priceDisplayText: new FormControl<string | null | undefined>(undefined),
			starRating: new FormControl<number | null | undefined>(undefined),
			storeUrl: new FormControl<string | null | undefined>(undefined),
			videoUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved. */
	export interface Image {

		/** Image height in pixels. */
		height?: number | null;

		/** The URL of the image. */
		url?: string | null;

		/** Image width in pixels. */
		width?: number | null;
	}

	/** An image resource. You may provide a larger image than was requested, so long as the aspect ratio is preserved. */
	export interface ImageFormProperties {

		/** Image height in pixels. */
		height: FormControl<number | null | undefined>,

		/** The URL of the image. */
		url: FormControl<string | null | undefined>,

		/** Image width in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateImageFormGroup() {
		return new FormGroup<ImageFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction). */
	export interface ServingRestriction {

		/** The contexts for the restriction. */
		contexts?: Array<ServingContext>;

		/** Output only. The reason and details for a disapproval. */
		disapproval?: Disapproval;

		/** Any disapprovals bound to this restriction. Only present if status=DISAPPROVED. Can be used to filter the response of the creatives.list method. Deprecated; use disapproval field instead. */
		disapprovalReasons?: Array<Disapproval>;

		/** The status of the creative in this context (for example, it has been explicitly disapproved or is pending review). */
		status?: ServingRestrictionStatus | null;
	}

	/** Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction). */
	export interface ServingRestrictionFormProperties {

		/** The status of the creative in this context (for example, it has been explicitly disapproved or is pending review). */
		status: FormControl<ServingRestrictionStatus | null | undefined>,
	}
	export function CreateServingRestrictionFormGroup() {
		return new FormGroup<ServingRestrictionFormProperties>({
			status: new FormControl<ServingRestrictionStatus | null | undefined>(undefined),
		});

	}


	/** Output only. The reason and details for a disapproval. */
	export interface Disapproval {

		/** Additional details about the reason for disapproval. */
		details?: Array<string>;

		/** The categorized reason for disapproval. */
		reason?: DisapprovalReason | null;
	}

	/** Output only. The reason and details for a disapproval. */
	export interface DisapprovalFormProperties {

		/** The categorized reason for disapproval. */
		reason: FormControl<DisapprovalReason | null | undefined>,
	}
	export function CreateDisapprovalFormGroup() {
		return new FormGroup<DisapprovalFormProperties>({
			reason: new FormControl<DisapprovalReason | null | undefined>(undefined),
		});

	}

	export enum DisapprovalReason { LENGTH_OF_IMAGE_ANIMATION = 0, BROKEN_URL = 1, MEDIA_NOT_FUNCTIONAL = 2, INVALID_FOURTH_PARTY_CALL = 3, INCORRECT_REMARKETING_DECLARATION = 4, LANDING_PAGE_ERROR = 5, AD_SIZE_DOES_NOT_MATCH_AD_SLOT = 6, NO_BORDER = 7, FOURTH_PARTY_BROWSER_COOKIES = 8, LSO_OBJECTS = 9, BLANK_CREATIVE = 10, DESTINATION_URLS_UNDECLARED = 11, PROBLEM_WITH_CLICK_MACRO = 12, INCORRECT_AD_TECHNOLOGY_DECLARATION = 13, INCORRECT_DESTINATION_URL_DECLARATION = 14, EXPANDABLE_INCORRECT_DIRECTION = 15, EXPANDABLE_DIRECTION_NOT_SUPPORTED = 16, EXPANDABLE_INVALID_VENDOR = 17, EXPANDABLE_FUNCTIONALITY = 18, VIDEO_INVALID_VENDOR = 19, VIDEO_UNSUPPORTED_LENGTH = 20, VIDEO_UNSUPPORTED_FORMAT = 21, VIDEO_FUNCTIONALITY = 22, LANDING_PAGE_DISABLED = 23, MALWARE_SUSPECTED = 24, ADULT_IMAGE_OR_VIDEO = 25, INACCURATE_AD_TEXT = 26, COUNTERFEIT_DESIGNER_GOODS = 27, POP_UP = 28, INVALID_RTB_PROTOCOL_USAGE = 29, RAW_IP_ADDRESS_IN_SNIPPET = 30, UNACCEPTABLE_CONTENT_SOFTWARE = 31, UNAUTHORIZED_COOKIE_ON_GOOGLE_DOMAIN = 32, UNDECLARED_FLASH_OBJECTS = 33, INVALID_SSL_DECLARATION = 34, DIRECT_DOWNLOAD_IN_AD = 35, MAXIMUM_DOWNLOAD_SIZE_EXCEEDED = 36, DESTINATION_URL_SITE_NOT_CRAWLABLE = 37, BAD_URL_LEGAL_DISAPPROVAL = 38, PHARMA_GAMBLING_ALCOHOL_NOT_ALLOWED = 39, DYNAMIC_DNS_AT_DESTINATION_URL = 40, POOR_IMAGE_OR_VIDEO_QUALITY = 41, UNACCEPTABLE_IMAGE_CONTENT = 42, INCORRECT_IMAGE_LAYOUT = 43, IRRELEVANT_IMAGE_OR_VIDEO = 44, DESTINATION_SITE_DOES_NOT_ALLOW_GOING_BACK = 45, MISLEADING_CLAIMS_IN_AD = 46, RESTRICTED_PRODUCTS = 47, UNACCEPTABLE_CONTENT = 48, AUTOMATED_AD_CLICKING = 49, INVALID_URL_PROTOCOL = 50, UNDECLARED_RESTRICTED_CONTENT = 51, INVALID_REMARKETING_LIST_USAGE = 52, DESTINATION_SITE_NOT_CRAWLABLE_ROBOTS_TXT = 53, CLICK_TO_DOWNLOAD_NOT_AN_APP = 54, INACCURATE_REVIEW_EXTENSION = 55, SEXUALLY_EXPLICIT_CONTENT = 56, GAINING_AN_UNFAIR_ADVANTAGE = 57, GAMING_THE_GOOGLE_NETWORK = 58, DANGEROUS_PRODUCTS_KNIVES = 59, DANGEROUS_PRODUCTS_EXPLOSIVES = 60, DANGEROUS_PRODUCTS_GUNS = 61, DANGEROUS_PRODUCTS_DRUGS = 62, DANGEROUS_PRODUCTS_TOBACCO = 63, DANGEROUS_PRODUCTS_WEAPONS = 64, UNCLEAR_OR_IRRELEVANT_AD = 65, PROFESSIONAL_STANDARDS = 66, DYSFUNCTIONAL_PROMOTION = 67, INVALID_INTEREST_BASED_AD = 68, MISUSE_OF_PERSONAL_INFORMATION = 69, OMISSION_OF_RELEVANT_INFORMATION = 70, UNAVAILABLE_PROMOTIONS = 71, MISLEADING_PROMOTIONS = 72, INAPPROPRIATE_CONTENT = 73, SENSITIVE_EVENTS = 74, SHOCKING_CONTENT = 75, ENABLING_DISHONEST_BEHAVIOR = 76, TECHNICAL_REQUIREMENTS = 77, RESTRICTED_POLITICAL_CONTENT = 78, UNSUPPORTED_CONTENT = 79, INVALID_BIDDING_METHOD = 80, VIDEO_TOO_LONG = 81, VIOLATES_JAPANESE_PHARMACY_LAW = 82, UNACCREDITED_PET_PHARMACY = 83, ABORTION = 84, CONTRACEPTIVES = 85, NEED_CERTIFICATES_TO_ADVERTISE_IN_CHINA = 86, KCDSP_REGISTRATION = 87, NOT_FAMILY_SAFE = 88, CLINICAL_TRIAL_RECRUITMENT = 89, MAXIMUM_NUMBER_OF_HTTP_CALLS_EXCEEDED = 90, MAXIMUM_NUMBER_OF_COOKIES_EXCEEDED = 91, PERSONAL_LOANS = 92, UNSUPPORTED_FLASH_CONTENT = 93, MISUSE_BY_OMID_SCRIPT = 94, NON_WHITELISTED_OMID_VENDOR = 95, DESTINATION_EXPERIENCE = 96, UNSUPPORTED_LANGUAGE = 97, NON_SSL_COMPLIANT = 98, TEMPORARY_PAUSE = 99, BAIL_BONDS = 100, EXPERIMENTAL_MEDICAL_TREATMENT = 101 }

	export enum ServingRestrictionStatus { STATUS_UNSPECIFIED = 0, DISAPPROVAL = 1, PENDING_REVIEW = 2 }


	/** Video content for a creative. */
	export interface VideoContent {

		/** The URL to fetch a video ad. */
		videoUrl?: string | null;

		/** The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. */
		videoVastXml?: string | null;
	}

	/** Video content for a creative. */
	export interface VideoContentFormProperties {

		/** The URL to fetch a video ad. */
		videoUrl: FormControl<string | null | undefined>,

		/** The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard. */
		videoVastXml: FormControl<string | null | undefined>,
	}
	export function CreateVideoContentFormGroup() {
		return new FormGroup<VideoContentFormProperties>({
			videoUrl: new FormControl<string | null | undefined>(undefined),
			videoVastXml: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals. */
	export interface CreativeRestrictions {

		/** The format of the environment that the creatives will be displayed in. */
		creativeFormat?: CreativeRestrictionsCreativeFormat | null;
		creativeSpecifications?: Array<CreativeSpecification>;

		/** Skippable video ads allow viewers to skip ads after 5 seconds. */
		skippableAdType?: CreativeRestrictionsSkippableAdType | null;
	}

	/** Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals. */
	export interface CreativeRestrictionsFormProperties {

		/** The format of the environment that the creatives will be displayed in. */
		creativeFormat: FormControl<CreativeRestrictionsCreativeFormat | null | undefined>,

		/** Skippable video ads allow viewers to skip ads after 5 seconds. */
		skippableAdType: FormControl<CreativeRestrictionsSkippableAdType | null | undefined>,
	}
	export function CreateCreativeRestrictionsFormGroup() {
		return new FormGroup<CreativeRestrictionsFormProperties>({
			creativeFormat: new FormControl<CreativeRestrictionsCreativeFormat | null | undefined>(undefined),
			skippableAdType: new FormControl<CreativeRestrictionsSkippableAdType | null | undefined>(undefined),
		});

	}

	export enum CreativeRestrictionsCreativeFormat { CREATIVE_FORMAT_UNSPECIFIED = 0, DISPLAY = 1, VIDEO = 2 }


	/** Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager. */
	export interface CreativeSpecification {

		/** Companion sizes may be filled in only when this is a video creative. */
		creativeCompanionSizes?: Array<AdSize>;

		/** Represents size of a single ad slot, or a creative. */
		creativeSize?: AdSize;
	}

	/** Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager. */
	export interface CreativeSpecificationFormProperties {
	}
	export function CreateCreativeSpecificationFormGroup() {
		return new FormGroup<CreativeSpecificationFormProperties>({
		});

	}

	export enum CreativeRestrictionsSkippableAdType { SKIPPABLE_AD_TYPE_UNSPECIFIED = 0, SKIPPABLE = 1, INSTREAM_SELECT = 2, NOT_SKIPPABLE = 3 }


	/** Specifies the size of the creative. */
	export interface CreativeSize {

		/** What formats are allowed by the publisher. If this repeated field is empty then all formats are allowed. For example, if this field contains AllowedFormatType.AUDIO then the publisher only allows an audio ad (without any video). */
		allowedFormats?: Array<string>;

		/** For video creatives specifies the sizes of companion ads (if present). Companion sizes may be filled in only when creative_size_type = VIDEO */
		companionSizes?: Array<Size>;

		/** The creative size type. */
		creativeSizeType?: CreativeSizeCreativeSizeType | null;

		/** Output only. The native template for this creative. It will have a value only if creative_size_type = CreativeSizeType.NATIVE. */
		nativeTemplate?: CreativeSizeNativeTemplate | null;

		/** Message depicting the size of the creative. The units of width and height depend on the type of the targeting. */
		size?: Size;

		/** The type of skippable ad for this creative. It will have a value only if creative_size_type = CreativeSizeType.VIDEO. */
		skippableAdType?: CreativeSizeSkippableAdType | null;
	}

	/** Specifies the size of the creative. */
	export interface CreativeSizeFormProperties {

		/** The creative size type. */
		creativeSizeType: FormControl<CreativeSizeCreativeSizeType | null | undefined>,

		/** Output only. The native template for this creative. It will have a value only if creative_size_type = CreativeSizeType.NATIVE. */
		nativeTemplate: FormControl<CreativeSizeNativeTemplate | null | undefined>,

		/** The type of skippable ad for this creative. It will have a value only if creative_size_type = CreativeSizeType.VIDEO. */
		skippableAdType: FormControl<CreativeSizeSkippableAdType | null | undefined>,
	}
	export function CreateCreativeSizeFormGroup() {
		return new FormGroup<CreativeSizeFormProperties>({
			creativeSizeType: new FormControl<CreativeSizeCreativeSizeType | null | undefined>(undefined),
			nativeTemplate: new FormControl<CreativeSizeNativeTemplate | null | undefined>(undefined),
			skippableAdType: new FormControl<CreativeSizeSkippableAdType | null | undefined>(undefined),
		});

	}


	/** Message depicting the size of the creative. The units of width and height depend on the type of the targeting. */
	export interface Size {

		/** The height of the creative. */
		height?: number | null;

		/** The width of the creative */
		width?: number | null;
	}

	/** Message depicting the size of the creative. The units of width and height depend on the type of the targeting. */
	export interface SizeFormProperties {

		/** The height of the creative. */
		height: FormControl<number | null | undefined>,

		/** The width of the creative */
		width: FormControl<number | null | undefined>,
	}
	export function CreateSizeFormGroup() {
		return new FormGroup<SizeFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum CreativeSizeCreativeSizeType { CREATIVE_SIZE_TYPE_UNSPECIFIED = 0, REGULAR = 1, INTERSTITIAL = 2, VIDEO = 3, NATIVE = 4 }

	export enum CreativeSizeNativeTemplate { UNKNOWN_NATIVE_TEMPLATE = 0, NATIVE_CONTENT_AD = 1, NATIVE_APP_INSTALL_AD = 2, NATIVE_VIDEO_CONTENT_AD = 3, NATIVE_VIDEO_APP_INSTALL_AD = 4 }

	export enum CreativeSizeSkippableAdType { SKIPPABLE_AD_TYPE_UNSPECIFIED = 0, GENERIC = 1, INSTREAM_SELECT = 2, NOT_SKIPPABLE = 3 }


	/** The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status. */
	export interface CreativeStatusRow {

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		bidCount?: MetricValue;

		/** The ID of the creative status. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). */
		creativeStatusId?: number | null;

		/** A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row. */
		rowDimensions?: RowDimensions;
	}

	/** The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status. */
	export interface CreativeStatusRowFormProperties {

		/** The ID of the creative status. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). */
		creativeStatusId: FormControl<number | null | undefined>,
	}
	export function CreateCreativeStatusRowFormGroup() {
		return new FormGroup<CreativeStatusRowFormProperties>({
			creativeStatusId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. */
	export interface CriteriaTargeting {

		/** A list of numeric IDs to be excluded. */
		excludedCriteriaIds?: Array<string>;

		/** A list of numeric IDs to be included. */
		targetedCriteriaIds?: Array<string>;
	}

	/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. */
	export interface CriteriaTargetingFormProperties {
	}
	export function CreateCriteriaTargetingFormGroup() {
		return new FormGroup<CriteriaTargetingFormProperties>({
		});

	}


	/** Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week. */
	export interface DayPart {

		/** The day of the week to target. If unspecified, applicable to all days. */
		dayOfWeek?: DayPartDayOfWeek | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		endTime?: TimeOfDay;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		startTime?: TimeOfDay;
	}

	/** Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week. */
	export interface DayPartFormProperties {

		/** The day of the week to target. If unspecified, applicable to all days. */
		dayOfWeek: FormControl<DayPartDayOfWeek | null | undefined>,
	}
	export function CreateDayPartFormGroup() {
		return new FormGroup<DayPartFormProperties>({
			dayOfWeek: new FormControl<DayPartDayOfWeek | null | undefined>(undefined),
		});

	}

	export enum DayPartDayOfWeek { DAY_OF_WEEK_UNSPECIFIED = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6, SUNDAY = 7 }


	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDay {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds?: number | null;
	}

	/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
	export interface TimeOfDayFormProperties {

		/** Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
		hours: FormControl<number | null | undefined>,

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes: FormControl<number | null | undefined>,

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos: FormControl<number | null | undefined>,

		/** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateTimeOfDayFormGroup() {
		return new FormGroup<TimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Specifies the day part targeting criteria. */
	export interface DayPartTargeting {

		/** A list of day part targeting criterion. */
		dayParts?: Array<DayPart>;

		/** The timezone to use for interpreting the day part targeting. */
		timeZoneType?: DayPartTargetingTimeZoneType | null;
	}

	/** Specifies the day part targeting criteria. */
	export interface DayPartTargetingFormProperties {

		/** The timezone to use for interpreting the day part targeting. */
		timeZoneType: FormControl<DayPartTargetingTimeZoneType | null | undefined>,
	}
	export function CreateDayPartTargetingFormGroup() {
		return new FormGroup<DayPartTargetingFormProperties>({
			timeZoneType: new FormControl<DayPartTargetingTimeZoneType | null | undefined>(undefined),
		});

	}

	export enum DayPartTargetingTimeZoneType { TIME_ZONE_SOURCE_UNSPECIFIED = 0, PUBLISHER = 1, USER = 2 }


	/** A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving. */
	export interface Deal {

		/** Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not required for Private Auction deals or Preferred Deals. */
		availableEndTime?: string | null;

		/** Optional. Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds. */
		availableStartTime?: string | null;

		/** Buyers are allowed to store certain types of private data in a proposal/deal. */
		buyerPrivateData?: PrivateData;

		/** The product ID from which this deal was created. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
		createProductId?: string | null;

		/** Optional. Revision number of the product that the deal was created from. If present on create, and the server `product_revision` has advanced since the passed-in `create_product_revision`, an `ABORTED` error will be returned. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
		createProductRevision?: string | null;

		/** Output only. The time of the deal creation. */
		createTime?: string | null;

		/** Output only. Specifies the creative pre-approval policy. */
		creativePreApprovalPolicy?: DealCreativePreApprovalPolicy | null;

		/** Represents creative restrictions associated to Programmatic Guaranteed/ Preferred Deal in Ad Manager. This doesn't apply to Private Auction and AdX Preferred Deals. */
		creativeRestrictions?: CreativeRestrictions;

		/** Output only. Specifies whether the creative is safeFrame compatible. */
		creativeSafeFrameCompatibility?: DealCreativeSafeFrameCompatibility | null;

		/** Output only. A unique deal ID for the deal (server-assigned). */
		dealId?: string | null;

		/** Message captures metadata about the serving status of a deal. */
		dealServingMetadata?: DealServingMetadata;

		/** The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher. */
		dealTerms?: DealTerms;

		/** Message contains details about how the deals will be paced. */
		deliveryControl?: DeliveryControl;

		/** Description for the deal terms. */
		description?: string | null;

		/** The name of the deal. */
		displayName?: string | null;

		/** Output only. The external deal ID assigned to this deal once the deal is finalized. This is the deal ID that shows up in serving/reporting etc. */
		externalDealId?: string | null;

		/** Output only. True, if the buyside inventory setup is complete for this deal. */
		isSetupComplete?: boolean | null;

		/** Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by buyer. */
		programmaticCreativeSource?: DealProgrammaticCreativeSource | null;

		/** Output only. ID of the proposal that this deal is part of. */
		proposalId?: string | null;

		/** Output only. Seller contact information for the deal. */
		sellerContacts?: Array<ContactInformation>;

		/** The syndication product associated with the deal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
		syndicationProduct?: DealSyndicationProduct | null;

		/** Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise. */
		targeting?: MarketplaceTargeting;

		/** The shared targeting visible to buyers and sellers. Each shared targeting entity is AND'd together. */
		targetingCriterion?: Array<TargetingCriteria>;

		/** Output only. The time when the deal was last updated. */
		updateTime?: string | null;

		/** The web property code for the seller copied over from the product. */
		webPropertyCode?: string | null;
	}

	/** A deal represents a segment of inventory for displaying ads on. A proposal can contain multiple deals. A deal contains the terms and targeting information that is used for serving. */
	export interface DealFormProperties {

		/** Proposed flight end time of the deal. This will generally be stored in a granularity of a second. A value is not required for Private Auction deals or Preferred Deals. */
		availableEndTime: FormControl<string | null | undefined>,

		/** Optional. Proposed flight start time of the deal. This will generally be stored in the granularity of one second since deal serving starts at seconds boundary. Any time specified with more granularity (for example, in milliseconds) will be truncated towards the start of time in seconds. */
		availableStartTime: FormControl<string | null | undefined>,

		/** The product ID from which this deal was created. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
		createProductId: FormControl<string | null | undefined>,

		/** Optional. Revision number of the product that the deal was created from. If present on create, and the server `product_revision` has advanced since the passed-in `create_product_revision`, an `ABORTED` error will be returned. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
		createProductRevision: FormControl<string | null | undefined>,

		/** Output only. The time of the deal creation. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. Specifies the creative pre-approval policy. */
		creativePreApprovalPolicy: FormControl<DealCreativePreApprovalPolicy | null | undefined>,

		/** Output only. Specifies whether the creative is safeFrame compatible. */
		creativeSafeFrameCompatibility: FormControl<DealCreativeSafeFrameCompatibility | null | undefined>,

		/** Output only. A unique deal ID for the deal (server-assigned). */
		dealId: FormControl<string | null | undefined>,

		/** Description for the deal terms. */
		description: FormControl<string | null | undefined>,

		/** The name of the deal. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The external deal ID assigned to this deal once the deal is finalized. This is the deal ID that shows up in serving/reporting etc. */
		externalDealId: FormControl<string | null | undefined>,

		/** Output only. True, if the buyside inventory setup is complete for this deal. */
		isSetupComplete: FormControl<boolean | null | undefined>,

		/** Output only. Specifies the creative source for programmatic deals. PUBLISHER means creative is provided by seller and ADVERTISER means creative is provided by buyer. */
		programmaticCreativeSource: FormControl<DealProgrammaticCreativeSource | null | undefined>,

		/** Output only. ID of the proposal that this deal is part of. */
		proposalId: FormControl<string | null | undefined>,

		/** The syndication product associated with the deal. Note: This field may be set only when creating the resource. Modifying this field while updating the resource will result in an error. */
		syndicationProduct: FormControl<DealSyndicationProduct | null | undefined>,

		/** Output only. The time when the deal was last updated. */
		updateTime: FormControl<string | null | undefined>,

		/** The web property code for the seller copied over from the product. */
		webPropertyCode: FormControl<string | null | undefined>,
	}
	export function CreateDealFormGroup() {
		return new FormGroup<DealFormProperties>({
			availableEndTime: new FormControl<string | null | undefined>(undefined),
			availableStartTime: new FormControl<string | null | undefined>(undefined),
			createProductId: new FormControl<string | null | undefined>(undefined),
			createProductRevision: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			creativePreApprovalPolicy: new FormControl<DealCreativePreApprovalPolicy | null | undefined>(undefined),
			creativeSafeFrameCompatibility: new FormControl<DealCreativeSafeFrameCompatibility | null | undefined>(undefined),
			dealId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			externalDealId: new FormControl<string | null | undefined>(undefined),
			isSetupComplete: new FormControl<boolean | null | undefined>(undefined),
			programmaticCreativeSource: new FormControl<DealProgrammaticCreativeSource | null | undefined>(undefined),
			proposalId: new FormControl<string | null | undefined>(undefined),
			syndicationProduct: new FormControl<DealSyndicationProduct | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			webPropertyCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Buyers are allowed to store certain types of private data in a proposal/deal. */
	export interface PrivateData {

		/** A buyer or seller specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units). */
		referenceId?: string | null;
	}

	/** Buyers are allowed to store certain types of private data in a proposal/deal. */
	export interface PrivateDataFormProperties {

		/** A buyer or seller specified reference ID. This can be queried in the list operations (max-length: 1024 unicode code units). */
		referenceId: FormControl<string | null | undefined>,
	}
	export function CreatePrivateDataFormGroup() {
		return new FormGroup<PrivateDataFormProperties>({
			referenceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DealCreativePreApprovalPolicy { CREATIVE_PRE_APPROVAL_POLICY_UNSPECIFIED = 0, SELLER_PRE_APPROVAL_REQUIRED = 1, SELLER_PRE_APPROVAL_NOT_REQUIRED = 2 }

	export enum DealCreativeSafeFrameCompatibility { CREATIVE_SAFE_FRAME_COMPATIBILITY_UNSPECIFIED = 0, COMPATIBLE = 1, INCOMPATIBLE = 2 }


	/** Message captures metadata about the serving status of a deal. */
	export interface DealServingMetadata {

		/** Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true. */
		dealPauseStatus?: DealPauseStatus;
	}

	/** Message captures metadata about the serving status of a deal. */
	export interface DealServingMetadataFormProperties {
	}
	export function CreateDealServingMetadataFormGroup() {
		return new FormGroup<DealServingMetadataFormProperties>({
		});

	}


	/** Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true. */
	export interface DealPauseStatus {

		/** The buyer's reason for pausing, if the buyer paused the deal. */
		buyerPauseReason?: string | null;

		/** The role of the person who first paused this deal. */
		firstPausedBy?: NoteCreatorRole | null;

		/** True, if the buyer has paused the deal unilaterally. */
		hasBuyerPaused?: boolean | null;

		/** True, if the seller has paused the deal unilaterally. */
		hasSellerPaused?: boolean | null;

		/** The seller's reason for pausing, if the seller paused the deal. */
		sellerPauseReason?: string | null;
	}

	/** Tracks which parties (if any) have paused a deal. The deal is considered paused if either hasBuyerPaused or hasSellPaused is true. */
	export interface DealPauseStatusFormProperties {

		/** The buyer's reason for pausing, if the buyer paused the deal. */
		buyerPauseReason: FormControl<string | null | undefined>,

		/** The role of the person who first paused this deal. */
		firstPausedBy: FormControl<NoteCreatorRole | null | undefined>,

		/** True, if the buyer has paused the deal unilaterally. */
		hasBuyerPaused: FormControl<boolean | null | undefined>,

		/** True, if the seller has paused the deal unilaterally. */
		hasSellerPaused: FormControl<boolean | null | undefined>,

		/** The seller's reason for pausing, if the seller paused the deal. */
		sellerPauseReason: FormControl<string | null | undefined>,
	}
	export function CreateDealPauseStatusFormGroup() {
		return new FormGroup<DealPauseStatusFormProperties>({
			buyerPauseReason: new FormControl<string | null | undefined>(undefined),
			firstPausedBy: new FormControl<NoteCreatorRole | null | undefined>(undefined),
			hasBuyerPaused: new FormControl<boolean | null | undefined>(undefined),
			hasSellerPaused: new FormControl<boolean | null | undefined>(undefined),
			sellerPauseReason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher. */
	export interface DealTerms {

		/** Visibility of the URL in bid requests. (default: BRANDED) */
		brandingType?: DealTermsBrandingType | null;

		/** Publisher provided description for the terms. */
		description?: string | null;

		/** Represents a price and a pricing type for a product / deal. */
		estimatedGrossSpend?: Price;

		/** Non-binding estimate of the impressions served per day. Can be set by buyer or seller. */
		estimatedImpressionsPerDay?: string | null;

		/** Terms for Programmatic Guaranteed Deals. */
		guaranteedFixedPriceTerms?: GuaranteedFixedPriceTerms;

		/** Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request. */
		nonGuaranteedAuctionTerms?: NonGuaranteedAuctionTerms;

		/** Terms for Preferred Deals. */
		nonGuaranteedFixedPriceTerms?: NonGuaranteedFixedPriceTerms;

		/** The time zone name. For deals with Cost Per Day billing, defines the time zone used to mark the boundaries of a day. It should be an IANA TZ name, such as "America/Los_Angeles". For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. */
		sellerTimeZone?: string | null;
	}

	/** The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher. */
	export interface DealTermsFormProperties {

		/** Visibility of the URL in bid requests. (default: BRANDED) */
		brandingType: FormControl<DealTermsBrandingType | null | undefined>,

		/** Publisher provided description for the terms. */
		description: FormControl<string | null | undefined>,

		/** Non-binding estimate of the impressions served per day. Can be set by buyer or seller. */
		estimatedImpressionsPerDay: FormControl<string | null | undefined>,

		/** The time zone name. For deals with Cost Per Day billing, defines the time zone used to mark the boundaries of a day. It should be an IANA TZ name, such as "America/Los_Angeles". For more information, see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones. */
		sellerTimeZone: FormControl<string | null | undefined>,
	}
	export function CreateDealTermsFormGroup() {
		return new FormGroup<DealTermsFormProperties>({
			brandingType: new FormControl<DealTermsBrandingType | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			estimatedImpressionsPerDay: new FormControl<string | null | undefined>(undefined),
			sellerTimeZone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DealTermsBrandingType { BRANDING_TYPE_UNSPECIFIED = 0, BRANDED = 1, SEMI_TRANSPARENT = 2 }


	/** Represents a price and a pricing type for a product / deal. */
	export interface Price {

		/** Represents an amount of money with its currency type. */
		amount?: Money;

		/** The pricing type for the deal/product. (default: CPM) */
		pricingType?: PricePricingType | null;
	}

	/** Represents a price and a pricing type for a product / deal. */
	export interface PriceFormProperties {

		/** The pricing type for the deal/product. (default: CPM) */
		pricingType: FormControl<PricePricingType | null | undefined>,
	}
	export function CreatePriceFormGroup() {
		return new FormGroup<PriceFormProperties>({
			pricingType: new FormControl<PricePricingType | null | undefined>(undefined),
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface Money {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface MoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/** Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000. */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PricePricingType { PRICING_TYPE_UNSPECIFIED = 0, COST_PER_MILLE = 1, COST_PER_DAY = 2 }


	/** Terms for Programmatic Guaranteed Deals. */
	export interface GuaranteedFixedPriceTerms {

		/** Fixed price for the specified buyer. */
		fixedPrices?: Array<PricePerBuyer>;

		/** Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy. */
		guaranteedImpressions?: string | null;

		/** Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored. */
		guaranteedLooks?: string | null;

		/** The lifetime impression cap for CPM sponsorship deals. The deal will stop serving when the cap is reached. */
		impressionCap?: string | null;

		/** Daily minimum looks for CPD deal types. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. */
		minimumDailyLooks?: string | null;

		/** For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached. */
		percentShareOfVoice?: string | null;

		/** The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD. */
		reservationType?: GuaranteedFixedPriceTermsReservationType | null;
	}

	/** Terms for Programmatic Guaranteed Deals. */
	export interface GuaranteedFixedPriceTermsFormProperties {

		/** Guaranteed impressions as a percentage. This is the percentage of guaranteed looks that the buyer is guaranteeing to buy. */
		guaranteedImpressions: FormControl<string | null | undefined>,

		/** Count of guaranteed looks. Required for deal, optional for product. For CPD deals, buyer changes to guaranteed_looks will be ignored. */
		guaranteedLooks: FormControl<string | null | undefined>,

		/** The lifetime impression cap for CPM sponsorship deals. The deal will stop serving when the cap is reached. */
		impressionCap: FormControl<string | null | undefined>,

		/** Daily minimum looks for CPD deal types. For CPD deals, buyer should negotiate on this field instead of guaranteed_looks. */
		minimumDailyLooks: FormControl<string | null | undefined>,

		/** For sponsorship deals, this is the percentage of the seller's eligible impressions that the deal will serve until the cap is reached. */
		percentShareOfVoice: FormControl<string | null | undefined>,

		/** The reservation type for a Programmatic Guaranteed deal. This indicates whether the number of impressions is fixed, or a percent of available impressions. If not specified, the default reservation type is STANDARD. */
		reservationType: FormControl<GuaranteedFixedPriceTermsReservationType | null | undefined>,
	}
	export function CreateGuaranteedFixedPriceTermsFormGroup() {
		return new FormGroup<GuaranteedFixedPriceTermsFormProperties>({
			guaranteedImpressions: new FormControl<string | null | undefined>(undefined),
			guaranteedLooks: new FormControl<string | null | undefined>(undefined),
			impressionCap: new FormControl<string | null | undefined>(undefined),
			minimumDailyLooks: new FormControl<string | null | undefined>(undefined),
			percentShareOfVoice: new FormControl<string | null | undefined>(undefined),
			reservationType: new FormControl<GuaranteedFixedPriceTermsReservationType | null | undefined>(undefined),
		});

	}


	/** Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in a product can become 0 or 1 deals. To check if there is a PricePerBuyer for a particular buyer or buyer/advertiser pair, we look for the most specific matching rule - we first look for a rule matching the buyer and advertiser, next a rule with the buyer but an empty advertiser list, and otherwise look for a matching rule where no buyer is set. */
	export interface PricePerBuyer {

		/** The list of advertisers for this price when associated with this buyer. If empty, all advertisers with this buyer pay this price. */
		advertiserIds?: Array<string>;

		/** Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID. */
		buyer?: Buyer;

		/** Represents a price and a pricing type for a product / deal. */
		price?: Price;
	}

	/** Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in a product can become 0 or 1 deals. To check if there is a PricePerBuyer for a particular buyer or buyer/advertiser pair, we look for the most specific matching rule - we first look for a rule matching the buyer and advertiser, next a rule with the buyer but an empty advertiser list, and otherwise look for a matching rule where no buyer is set. */
	export interface PricePerBuyerFormProperties {
	}
	export function CreatePricePerBuyerFormGroup() {
		return new FormGroup<PricePerBuyerFormProperties>({
		});

	}

	export enum GuaranteedFixedPriceTermsReservationType { RESERVATION_TYPE_UNSPECIFIED = 0, STANDARD = 1, SPONSORSHIP = 2 }


	/** Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request. */
	export interface NonGuaranteedAuctionTerms {

		/** True if open auction buyers are allowed to compete with invited buyers in this private auction. */
		autoOptimizePrivateAuction?: boolean | null;

		/** Reserve price for the specified buyer. */
		reservePricesPerBuyer?: Array<PricePerBuyer>;
	}

	/** Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request. */
	export interface NonGuaranteedAuctionTermsFormProperties {

		/** True if open auction buyers are allowed to compete with invited buyers in this private auction. */
		autoOptimizePrivateAuction: FormControl<boolean | null | undefined>,
	}
	export function CreateNonGuaranteedAuctionTermsFormGroup() {
		return new FormGroup<NonGuaranteedAuctionTermsFormProperties>({
			autoOptimizePrivateAuction: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Terms for Preferred Deals. */
	export interface NonGuaranteedFixedPriceTerms {

		/** Fixed price for the specified buyer. */
		fixedPrices?: Array<PricePerBuyer>;
	}

	/** Terms for Preferred Deals. */
	export interface NonGuaranteedFixedPriceTermsFormProperties {
	}
	export function CreateNonGuaranteedFixedPriceTermsFormGroup() {
		return new FormGroup<NonGuaranteedFixedPriceTermsFormProperties>({
		});

	}


	/** Message contains details about how the deals will be paced. */
	export interface DeliveryControl {

		/** Output only. Specified the creative blocking levels to be applied. */
		creativeBlockingLevel?: DeliveryControlCreativeBlockingLevel | null;

		/** Output only. Specifies how the impression delivery will be paced. */
		deliveryRateType?: DeliveryControlDeliveryRateType | null;

		/** Output only. Specifies any frequency caps. */
		frequencyCaps?: Array<FrequencyCap>;
	}

	/** Message contains details about how the deals will be paced. */
	export interface DeliveryControlFormProperties {

		/** Output only. Specified the creative blocking levels to be applied. */
		creativeBlockingLevel: FormControl<DeliveryControlCreativeBlockingLevel | null | undefined>,

		/** Output only. Specifies how the impression delivery will be paced. */
		deliveryRateType: FormControl<DeliveryControlDeliveryRateType | null | undefined>,
	}
	export function CreateDeliveryControlFormGroup() {
		return new FormGroup<DeliveryControlFormProperties>({
			creativeBlockingLevel: new FormControl<DeliveryControlCreativeBlockingLevel | null | undefined>(undefined),
			deliveryRateType: new FormControl<DeliveryControlDeliveryRateType | null | undefined>(undefined),
		});

	}

	export enum DeliveryControlCreativeBlockingLevel { CREATIVE_BLOCKING_LEVEL_UNSPECIFIED = 0, PUBLISHER_BLOCKING_RULES = 1, ADX_POLICY_BLOCKING_ONLY = 2 }

	export enum DeliveryControlDeliveryRateType { DELIVERY_RATE_TYPE_UNSPECIFIED = 0, EVENLY = 1, FRONT_LOADED = 2, AS_FAST_AS_POSSIBLE = 3 }


	/** Frequency cap. */
	export interface FrequencyCap {

		/** The maximum number of impressions that can be served to a user within the specified time period. */
		maxImpressions?: number | null;

		/** The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped. */
		numTimeUnits?: number | null;

		/** The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped. */
		timeUnitType?: FrequencyCapTimeUnitType | null;
	}

	/** Frequency cap. */
	export interface FrequencyCapFormProperties {

		/** The maximum number of impressions that can be served to a user within the specified time period. */
		maxImpressions: FormControl<number | null | undefined>,

		/** The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped. */
		numTimeUnits: FormControl<number | null | undefined>,

		/** The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped. */
		timeUnitType: FormControl<FrequencyCapTimeUnitType | null | undefined>,
	}
	export function CreateFrequencyCapFormGroup() {
		return new FormGroup<FrequencyCapFormProperties>({
			maxImpressions: new FormControl<number | null | undefined>(undefined),
			numTimeUnits: new FormControl<number | null | undefined>(undefined),
			timeUnitType: new FormControl<FrequencyCapTimeUnitType | null | undefined>(undefined),
		});

	}

	export enum FrequencyCapTimeUnitType { TIME_UNIT_TYPE_UNSPECIFIED = 0, MINUTE = 1, HOUR = 2, DAY = 3, WEEK = 4, MONTH = 5, LIFETIME = 6, POD = 7, STREAM = 8 }

	export enum DealProgrammaticCreativeSource { PROGRAMMATIC_CREATIVE_SOURCE_UNSPECIFIED = 0, ADVERTISER = 1, PUBLISHER = 2 }

	export enum DealSyndicationProduct { SYNDICATION_PRODUCT_UNSPECIFIED = 0, CONTENT = 1, MOBILE = 2, VIDEO = 3, GAMES = 4 }


	/** Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise. */
	export interface MarketplaceTargeting {

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. */
		geoTargeting?: CriteriaTargeting;

		/** Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager. */
		inventorySizeTargeting?: InventorySizeTargeting;

		/** Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed. */
		placementTargeting?: PlacementTargeting;

		/** Represents targeting about various types of technology. */
		technologyTargeting?: TechnologyTargeting;

		/** Represents targeting information about video. */
		videoTargeting?: VideoTargeting;
	}

	/** Targeting represents different criteria that can be used by advertisers to target ad inventory. For example, they can choose to target ad requests only if the user is in the US. Multiple types of targeting are always applied as a logical AND, unless noted otherwise. */
	export interface MarketplaceTargetingFormProperties {
	}
	export function CreateMarketplaceTargetingFormGroup() {
		return new FormGroup<MarketplaceTargetingFormProperties>({
		});

	}


	/** Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager. */
	export interface InventorySizeTargeting {

		/** A list of inventory sizes to be excluded. */
		excludedInventorySizes?: Array<AdSize>;

		/** A list of inventory sizes to be included. */
		targetedInventorySizes?: Array<AdSize>;
	}

	/** Represents the size of an ad unit that can be targeted on an ad request. It only applies to Private Auction, AdX Preferred Deals and Auction Packages. This targeting does not apply to Programmatic Guaranteed and Preferred Deals in Ad Manager. */
	export interface InventorySizeTargetingFormProperties {
	}
	export function CreateInventorySizeTargetingFormGroup() {
		return new FormGroup<InventorySizeTargetingFormProperties>({
		});

	}


	/** Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed. */
	export interface PlacementTargeting {

		/** Mobile application targeting settings. */
		mobileApplicationTargeting?: MobileApplicationTargeting;

		/** Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply. */
		urlTargeting?: UrlTargeting;
	}

	/** Represents targeting about where the ads can appear, for example, certain sites or mobile applications. Different placement targeting types will be logically OR'ed. */
	export interface PlacementTargetingFormProperties {
	}
	export function CreatePlacementTargetingFormGroup() {
		return new FormGroup<PlacementTargetingFormProperties>({
		});

	}


	/** Mobile application targeting settings. */
	export interface MobileApplicationTargeting {

		/** Represents a list of targeted and excluded mobile application IDs that publishers own. Mobile application IDs are from App Store and Google Play Store. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded. */
		firstPartyTargeting?: FirstPartyMobileApplicationTargeting;
	}

	/** Mobile application targeting settings. */
	export interface MobileApplicationTargetingFormProperties {
	}
	export function CreateMobileApplicationTargetingFormGroup() {
		return new FormGroup<MobileApplicationTargetingFormProperties>({
		});

	}


	/** Represents a list of targeted and excluded mobile application IDs that publishers own. Mobile application IDs are from App Store and Google Play Store. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded. */
	export interface FirstPartyMobileApplicationTargeting {

		/** A list of application IDs to be excluded. */
		excludedAppIds?: Array<string>;

		/** A list of application IDs to be included. */
		targetedAppIds?: Array<string>;
	}

	/** Represents a list of targeted and excluded mobile application IDs that publishers own. Mobile application IDs are from App Store and Google Play Store. Android App ID, for example, com.google.android.apps.maps, can be found in Google Play Store URL. iOS App ID (which is a number) can be found at the end of iTunes store URL. First party mobile applications is either included or excluded. */
	export interface FirstPartyMobileApplicationTargetingFormProperties {
	}
	export function CreateFirstPartyMobileApplicationTargetingFormGroup() {
		return new FormGroup<FirstPartyMobileApplicationTargetingFormProperties>({
		});

	}


	/** Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply. */
	export interface UrlTargeting {

		/** A list of URLs to be excluded. */
		excludedUrls?: Array<string>;

		/** A list of URLs to be included. */
		targetedUrls?: Array<string>;
	}

	/** Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply. */
	export interface UrlTargetingFormProperties {
	}
	export function CreateUrlTargetingFormGroup() {
		return new FormGroup<UrlTargetingFormProperties>({
		});

	}


	/** Represents targeting about various types of technology. */
	export interface TechnologyTargeting {

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. */
		deviceCapabilityTargeting?: CriteriaTargeting;

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. */
		deviceCategoryTargeting?: CriteriaTargeting;

		/** Represents targeting information for operating systems. */
		operatingSystemTargeting?: OperatingSystemTargeting;
	}

	/** Represents targeting about various types of technology. */
	export interface TechnologyTargetingFormProperties {
	}
	export function CreateTechnologyTargetingFormGroup() {
		return new FormGroup<TechnologyTargetingFormProperties>({
		});

	}


	/** Represents targeting information for operating systems. */
	export interface OperatingSystemTargeting {

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. */
		operatingSystemCriteria?: CriteriaTargeting;

		/** Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. */
		operatingSystemVersionCriteria?: CriteriaTargeting;
	}

	/** Represents targeting information for operating systems. */
	export interface OperatingSystemTargetingFormProperties {
	}
	export function CreateOperatingSystemTargetingFormGroup() {
		return new FormGroup<OperatingSystemTargetingFormProperties>({
		});

	}


	/** Represents targeting information about video. */
	export interface VideoTargeting {

		/** A list of video positions to be excluded. Position types can either be included or excluded (XOR). */
		excludedPositionTypes?: Array<string>;

		/** A list of video positions to be included. When the included list is present, the excluded list must be empty. When the excluded list is present, the included list must be empty. */
		targetedPositionTypes?: Array<string>;
	}

	/** Represents targeting information about video. */
	export interface VideoTargetingFormProperties {
	}
	export function CreateVideoTargetingFormGroup() {
		return new FormGroup<VideoTargetingFormProperties>({
		});

	}


	/** Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting. */
	export interface TargetingCriteria {

		/** The list of values to exclude from targeting. Each value is AND'd together. */
		exclusions?: Array<TargetingValue>;

		/** The list of value to include as part of the targeting. Each value is OR'd together. */
		inclusions?: Array<TargetingValue>;

		/** The key representing the shared targeting criterion. Targeting criteria defined by Google ad servers will begin with GOOG_. Third parties may define their own keys. A list of permissible keys along with the acceptable values will be provided as part of the external documentation. */
		key?: string | null;
	}

	/** Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting. */
	export interface TargetingCriteriaFormProperties {

		/** The key representing the shared targeting criterion. Targeting criteria defined by Google ad servers will begin with GOOG_. Third parties may define their own keys. A list of permissible keys along with the acceptable values will be provided as part of the external documentation. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateTargetingCriteriaFormGroup() {
		return new FormGroup<TargetingCriteriaFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A polymorphic targeting value used as part of Shared Targeting. */
	export interface TargetingValue {

		/** Specifies the size of the creative. */
		creativeSizeValue?: CreativeSize;

		/** Specifies the day part targeting criteria. */
		dayPartTargetingValue?: DayPartTargeting;

		/** The long value to include/exclude. */
		longValue?: string | null;

		/** The string value to include/exclude. */
		stringValue?: string | null;
	}

	/** A polymorphic targeting value used as part of Shared Targeting. */
	export interface TargetingValueFormProperties {

		/** The long value to include/exclude. */
		longValue: FormControl<string | null | undefined>,

		/** The string value to include/exclude. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateTargetingValueFormGroup() {
		return new FormGroup<TargetingValueFormProperties>({
			longValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface Empty {
	}

	/** A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, "format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)". */
	export interface FilterSet {

		/** An absolute date range, specified by its start date and end date. The supported range of dates begins 30 days before today and ends today. Validity checked upon filter set creation. If a filter set with an absolute date range is run at a later date more than 30 days after start_date, it will fail. */
		absoluteDateRange?: AbsoluteDateRange;

		/** The set of dimensions along which to break down the response; may be empty. If multiple dimensions are requested, the breakdown is along the Cartesian product of the requested dimensions. */
		breakdownDimensions?: Array<string>;

		/** The ID of the creative on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/accounts/filterSets/*` pattern. */
		creativeId?: string | null;

		/** The ID of the deal on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/accounts/filterSets/*` pattern. */
		dealId?: string | null;

		/** The environment on which to filter; optional. */
		environment?: FilterSetEnvironment | null;

		/** Creative format bidded on or allowed to bid on, can be empty. */
		format?: FilterSetFormat | null;

		/** Creative formats bidded on or allowed to bid on, can be empty. Although this field is a list, it can only be populated with a single item. A HTTP 400 bad request error will be returned in the response if you specify multiple items. */
		formats?: Array<FilterSetFormat>;

		/** A user-defined name of the filter set. Filter set names must be unique globally and match one of the patterns: - `bidders/filterSets/*` (for accessing bidder-level troubleshooting data) - `bidders/accounts/filterSets/*` (for accessing account-level troubleshooting data) This field is required in create operations. */
		name?: string | null;

		/** The list of platforms on which to filter; may be empty. The filters represented by multiple platforms are ORed together (for example, if non-empty, results must match any one of the platforms). */
		platforms?: Array<string>;

		/** For Open Bidding partners only. The list of publisher identifiers on which to filter; may be empty. The filters represented by multiple publisher identifiers are ORed together. */
		publisherIdentifiers?: Array<string>;

		/** An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set. */
		realtimeTimeRange?: RealtimeTimeRange;

		/** A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30 */
		relativeDateRange?: RelativeDateRange;

		/** For Authorized Buyers only. The list of IDs of the seller (publisher) networks on which to filter; may be empty. The filters represented by multiple seller network IDs are ORed together (for example, if non-empty, results must match any one of the publisher networks). See [seller-network-ids](https://developers.google.com/authorized-buyers/rtb/downloads/seller-network-ids) file for the set of existing seller network IDs. */
		sellerNetworkIds?: Array<number>;

		/** The granularity of time intervals if a time series breakdown is preferred; optional. */
		timeSeriesGranularity?: FilterSetTimeSeriesGranularity | null;
	}

	/** A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, "format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)". */
	export interface FilterSetFormProperties {

		/** The ID of the creative on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/accounts/filterSets/*` pattern. */
		creativeId: FormControl<string | null | undefined>,

		/** The ID of the deal on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the `bidders/accounts/filterSets/*` pattern. */
		dealId: FormControl<string | null | undefined>,

		/** The environment on which to filter; optional. */
		environment: FormControl<FilterSetEnvironment | null | undefined>,

		/** Creative format bidded on or allowed to bid on, can be empty. */
		format: FormControl<FilterSetFormat | null | undefined>,

		/** A user-defined name of the filter set. Filter set names must be unique globally and match one of the patterns: - `bidders/filterSets/*` (for accessing bidder-level troubleshooting data) - `bidders/accounts/filterSets/*` (for accessing account-level troubleshooting data) This field is required in create operations. */
		name: FormControl<string | null | undefined>,

		/** The granularity of time intervals if a time series breakdown is preferred; optional. */
		timeSeriesGranularity: FormControl<FilterSetTimeSeriesGranularity | null | undefined>,
	}
	export function CreateFilterSetFormGroup() {
		return new FormGroup<FilterSetFormProperties>({
			creativeId: new FormControl<string | null | undefined>(undefined),
			dealId: new FormControl<string | null | undefined>(undefined),
			environment: new FormControl<FilterSetEnvironment | null | undefined>(undefined),
			format: new FormControl<FilterSetFormat | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			timeSeriesGranularity: new FormControl<FilterSetTimeSeriesGranularity | null | undefined>(undefined),
		});

	}

	export enum FilterSetEnvironment { ENVIRONMENT_UNSPECIFIED = 0, WEB = 1, APP = 2 }

	export enum FilterSetFormat { FORMAT_UNSPECIFIED = 0, NATIVE_DISPLAY = 1, NATIVE_VIDEO = 2, NON_NATIVE_DISPLAY = 3, NON_NATIVE_VIDEO = 4 }


	/** An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set. */
	export interface RealtimeTimeRange {

		/** The start timestamp of the real-time RTB metrics aggregation. */
		startTimestamp?: string | null;
	}

	/** An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set. */
	export interface RealtimeTimeRangeFormProperties {

		/** The start timestamp of the real-time RTB metrics aggregation. */
		startTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateRealtimeTimeRangeFormGroup() {
		return new FormGroup<RealtimeTimeRangeFormProperties>({
			startTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30 */
	export interface RelativeDateRange {

		/** The number of days in the requested date range, for example, for a range spanning today: 1. For a range spanning the last 7 days: 7. */
		durationDays?: number | null;

		/** The end date of the filter set, specified as the number of days before today, for example, for a range where the last date is today: 0. */
		offsetDays?: number | null;
	}

	/** A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30 */
	export interface RelativeDateRangeFormProperties {

		/** The number of days in the requested date range, for example, for a range spanning today: 1. For a range spanning the last 7 days: 7. */
		durationDays: FormControl<number | null | undefined>,

		/** The end date of the filter set, specified as the number of days before today, for example, for a range where the last date is today: 0. */
		offsetDays: FormControl<number | null | undefined>,
	}
	export function CreateRelativeDateRangeFormGroup() {
		return new FormGroup<RelativeDateRangeFormProperties>({
			durationDays: new FormControl<number | null | undefined>(undefined),
			offsetDays: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum FilterSetTimeSeriesGranularity { TIME_SERIES_GRANULARITY_UNSPECIFIED = 0, HOURLY = 1, DAILY = 2 }


	/** The number of filtered bids with the specified dimension values that have the specified creative. */
	export interface FilteredBidCreativeRow {

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		bidCount?: MetricValue;

		/** The ID of the creative. */
		creativeId?: string | null;

		/** A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row. */
		rowDimensions?: RowDimensions;
	}

	/** The number of filtered bids with the specified dimension values that have the specified creative. */
	export interface FilteredBidCreativeRowFormProperties {

		/** The ID of the creative. */
		creativeId: FormControl<string | null | undefined>,
	}
	export function CreateFilteredBidCreativeRowFormGroup() {
		return new FormGroup<FilteredBidCreativeRowFormProperties>({
			creativeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail. */
	export interface FilteredBidDetailRow {

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		bidCount?: MetricValue;

		/** The ID of the detail, can be numeric or text. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message. */
		detail?: string | null;

		/** Note: this field will be deprecated, use "detail" field instead. When "detail" field represents an integer value, this field is populated as the same integer value "detail" field represents, otherwise this field will be 0. The ID of the detail. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message. */
		detailId?: number | null;

		/** A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row. */
		rowDimensions?: RowDimensions;
	}

	/** The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail. */
	export interface FilteredBidDetailRowFormProperties {

		/** The ID of the detail, can be numeric or text. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message. */
		detail: FormControl<string | null | undefined>,

		/** Note: this field will be deprecated, use "detail" field instead. When "detail" field represents an integer value, this field is populated as the same integer value "detail" field represents, otherwise this field will be 0. The ID of the detail. The associated value can be looked up in the dictionary file corresponding to the DetailType in the response message. */
		detailId: FormControl<number | null | undefined>,
	}
	export function CreateFilteredBidDetailRowFormGroup() {
		return new FormGroup<FilteredBidDetailRowFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			detailId: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel. */
	export interface ImpressionMetricsRow {

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		availableImpressions?: MetricValue;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		bidRequests?: MetricValue;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		inventoryMatches?: MetricValue;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		responsesWithBids?: MetricValue;

		/** A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row. */
		rowDimensions?: RowDimensions;

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		successfulResponses?: MetricValue;
	}

	/** The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel. */
	export interface ImpressionMetricsRowFormProperties {
	}
	export function CreateImpressionMetricsRowFormGroup() {
		return new FormGroup<ImpressionMetricsRowFormProperties>({
		});

	}


	/** Response message for listing the metrics that are measured in number of bids. */
	export interface ListBidMetricsResponse {

		/** List of rows, each containing a set of bid metrics. */
		bidMetricsRows?: Array<BidMetricsRow>;

		/** A token to retrieve the next page of results. Pass this value in the ListBidMetricsRequest.pageToken field in the subsequent call to the bidMetrics.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing the metrics that are measured in number of bids. */
	export interface ListBidMetricsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListBidMetricsRequest.pageToken field in the subsequent call to the bidMetrics.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBidMetricsResponseFormGroup() {
		return new FormGroup<ListBidMetricsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing all reasons that bid responses resulted in an error. */
	export interface ListBidResponseErrorsResponse {

		/** List of rows, with counts of bid responses aggregated by callout status. */
		calloutStatusRows?: Array<CalloutStatusRow>;

		/** A token to retrieve the next page of results. Pass this value in the ListBidResponseErrorsRequest.pageToken field in the subsequent call to the bidResponseErrors.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing all reasons that bid responses resulted in an error. */
	export interface ListBidResponseErrorsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListBidResponseErrorsRequest.pageToken field in the subsequent call to the bidResponseErrors.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBidResponseErrorsResponseFormGroup() {
		return new FormGroup<ListBidResponseErrorsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing all reasons that bid responses were considered to have no applicable bids. */
	export interface ListBidResponsesWithoutBidsResponse {

		/** List of rows, with counts of bid responses without bids aggregated by status. */
		bidResponseWithoutBidsStatusRows?: Array<BidResponseWithoutBidsStatusRow>;

		/** A token to retrieve the next page of results. Pass this value in the ListBidResponsesWithoutBidsRequest.pageToken field in the subsequent call to the bidResponsesWithoutBids.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing all reasons that bid responses were considered to have no applicable bids. */
	export interface ListBidResponsesWithoutBidsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListBidResponsesWithoutBidsRequest.pageToken field in the subsequent call to the bidResponsesWithoutBids.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListBidResponsesWithoutBidsResponseFormGroup() {
		return new FormGroup<ListBidResponsesWithoutBidsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClientUserInvitationsResponse {

		/** The returned list of client users. */
		invitations?: Array<ClientUserInvitation>;

		/** A token to retrieve the next page of results. Pass this value in the ListClientUserInvitationsRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListClientUserInvitationsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListClientUserInvitationsRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClientUserInvitationsResponseFormGroup() {
		return new FormGroup<ListClientUserInvitationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClientUsersResponse {

		/** A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** The returned list of client users. */
		users?: Array<ClientUser>;
	}
	export interface ListClientUsersResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListClientUsersRequest.pageToken field in the subsequent call to the clients.invitations.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClientUsersResponseFormGroup() {
		return new FormGroup<ListClientUsersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClientsResponse {

		/** The returned list of clients. */
		clients?: Array<Client>;

		/** A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the accounts.clients.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListClientsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListClientsRequest.pageToken field in the subsequent call to the accounts.clients.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClientsResponseFormGroup() {
		return new FormGroup<ListClientsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing all creatives associated with a given filtered bid reason. */
	export interface ListCreativeStatusBreakdownByCreativeResponse {

		/** List of rows, with counts of bids with a given creative status aggregated by creative. */
		filteredBidCreativeRows?: Array<FilteredBidCreativeRow>;

		/** A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByCreativeRequest.pageToken field in the subsequent call to the filteredBids.creatives.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing all creatives associated with a given filtered bid reason. */
	export interface ListCreativeStatusBreakdownByCreativeResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByCreativeRequest.pageToken field in the subsequent call to the filteredBids.creatives.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCreativeStatusBreakdownByCreativeResponseFormGroup() {
		return new FormGroup<ListCreativeStatusBreakdownByCreativeResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing all details associated with a given filtered bid reason. */
	export interface ListCreativeStatusBreakdownByDetailResponse {

		/** The type of detail that the detail IDs represent. */
		detailType?: ListCreativeStatusBreakdownByDetailResponseDetailType | null;

		/** List of rows, with counts of bids with a given creative status aggregated by detail. */
		filteredBidDetailRows?: Array<FilteredBidDetailRow>;

		/** A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByDetailRequest.pageToken field in the subsequent call to the filteredBids.details.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing all details associated with a given filtered bid reason. */
	export interface ListCreativeStatusBreakdownByDetailResponseFormProperties {

		/** The type of detail that the detail IDs represent. */
		detailType: FormControl<ListCreativeStatusBreakdownByDetailResponseDetailType | null | undefined>,

		/** A token to retrieve the next page of results. Pass this value in the ListCreativeStatusBreakdownByDetailRequest.pageToken field in the subsequent call to the filteredBids.details.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCreativeStatusBreakdownByDetailResponseFormGroup() {
		return new FormGroup<ListCreativeStatusBreakdownByDetailResponseFormProperties>({
			detailType: new FormControl<ListCreativeStatusBreakdownByDetailResponseDetailType | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ListCreativeStatusBreakdownByDetailResponseDetailType { DETAIL_TYPE_UNSPECIFIED = 0, CREATIVE_ATTRIBUTE = 1, VENDOR = 2, SENSITIVE_CATEGORY = 3, PRODUCT_CATEGORY = 4, DISAPPROVAL_REASON = 5, POLICY_TOPIC = 6, ATP_VENDOR = 7, VENDOR_DOMAIN = 8, GVL_ID = 9 }


	/** A response for listing creatives. */
	export interface ListCreativesResponse {

		/** The list of creatives. */
		creatives?: Array<Creative>;

		/** A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.page_token field in the subsequent call to `ListCreatives` method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** A response for listing creatives. */
	export interface ListCreativesResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListCreativesRequest.page_token field in the subsequent call to `ListCreatives` method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCreativesResponseFormGroup() {
		return new FormGroup<ListCreativesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response for listing creative and deal associations */
	export interface ListDealAssociationsResponse {

		/** The list of associations. */
		associations?: Array<CreativeDealAssociation>;

		/** A token to retrieve the next page of results. Pass this value in the ListDealAssociationsRequest.page_token field in the subsequent call to 'ListDealAssociation' method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** A response for listing creative and deal associations */
	export interface ListDealAssociationsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListDealAssociationsRequest.page_token field in the subsequent call to 'ListDealAssociation' method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDealAssociationsResponseFormGroup() {
		return new FormGroup<ListDealAssociationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing filter sets. */
	export interface ListFilterSetsResponse {

		/** The filter sets belonging to the buyer. */
		filterSets?: Array<FilterSet>;

		/** A token to retrieve the next page of results. Pass this value in the ListFilterSetsRequest.pageToken field in the subsequent call to the accounts.filterSets.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing filter sets. */
	export interface ListFilterSetsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListFilterSetsRequest.pageToken field in the subsequent call to the accounts.filterSets.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFilterSetsResponseFormGroup() {
		return new FormGroup<ListFilterSetsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing all reasons that bid requests were filtered and not sent to the buyer. */
	export interface ListFilteredBidRequestsResponse {

		/** List of rows, with counts of filtered bid requests aggregated by callout status. */
		calloutStatusRows?: Array<CalloutStatusRow>;

		/** A token to retrieve the next page of results. Pass this value in the ListFilteredBidRequestsRequest.pageToken field in the subsequent call to the filteredBidRequests.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing all reasons that bid requests were filtered and not sent to the buyer. */
	export interface ListFilteredBidRequestsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListFilteredBidRequestsRequest.pageToken field in the subsequent call to the filteredBidRequests.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFilteredBidRequestsResponseFormGroup() {
		return new FormGroup<ListFilteredBidRequestsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing all reasons that bids were filtered from the auction. */
	export interface ListFilteredBidsResponse {

		/** List of rows, with counts of filtered bids aggregated by filtering reason (for example, creative status). */
		creativeStatusRows?: Array<CreativeStatusRow>;

		/** A token to retrieve the next page of results. Pass this value in the ListFilteredBidsRequest.pageToken field in the subsequent call to the filteredBids.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing all reasons that bids were filtered from the auction. */
	export interface ListFilteredBidsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListFilteredBidsRequest.pageToken field in the subsequent call to the filteredBids.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFilteredBidsResponseFormGroup() {
		return new FormGroup<ListFilteredBidsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing the metrics that are measured in number of impressions. */
	export interface ListImpressionMetricsResponse {

		/** List of rows, each containing a set of impression metrics. */
		impressionMetricsRows?: Array<ImpressionMetricsRow>;

		/** A token to retrieve the next page of results. Pass this value in the ListImpressionMetricsRequest.pageToken field in the subsequent call to the impressionMetrics.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing the metrics that are measured in number of impressions. */
	export interface ListImpressionMetricsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListImpressionMetricsRequest.pageToken field in the subsequent call to the impressionMetrics.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListImpressionMetricsResponseFormGroup() {
		return new FormGroup<ListImpressionMetricsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing all reasons that bids lost in the auction. */
	export interface ListLosingBidsResponse {

		/** List of rows, with counts of losing bids aggregated by loss reason (for example, creative status). */
		creativeStatusRows?: Array<CreativeStatusRow>;

		/** A token to retrieve the next page of results. Pass this value in the ListLosingBidsRequest.pageToken field in the subsequent call to the losingBids.list method to retrieve the next page of results. */
		nextPageToken?: string | null;
	}

	/** Response message for listing all reasons that bids lost in the auction. */
	export interface ListLosingBidsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListLosingBidsRequest.pageToken field in the subsequent call to the losingBids.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListLosingBidsResponseFormGroup() {
		return new FormGroup<ListLosingBidsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing all reasons for which a buyer was not billed for a winning bid. */
	export interface ListNonBillableWinningBidsResponse {

		/** A token to retrieve the next page of results. Pass this value in the ListNonBillableWinningBidsRequest.pageToken field in the subsequent call to the nonBillableWinningBids.list method to retrieve the next page of results. */
		nextPageToken?: string | null;

		/** List of rows, with counts of bids not billed aggregated by reason. */
		nonBillableWinningBidStatusRows?: Array<NonBillableWinningBidStatusRow>;
	}

	/** Response message for listing all reasons for which a buyer was not billed for a winning bid. */
	export interface ListNonBillableWinningBidsResponseFormProperties {

		/** A token to retrieve the next page of results. Pass this value in the ListNonBillableWinningBidsRequest.pageToken field in the subsequent call to the nonBillableWinningBids.list method to retrieve the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListNonBillableWinningBidsResponseFormGroup() {
		return new FormGroup<ListNonBillableWinningBidsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status. */
	export interface NonBillableWinningBidStatusRow {

		/** A metric value, with an expected value and a variance; represents a count that may be either exact or estimated (for example, when sampled). */
		bidCount?: MetricValue;

		/** A response may include multiple rows, breaking down along various dimensions. Encapsulates the values of all dimensions for a given row. */
		rowDimensions?: RowDimensions;

		/** The status specifying why the winning bids were not billed. */
		status?: NonBillableWinningBidStatusRowStatus | null;
	}

	/** The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status. */
	export interface NonBillableWinningBidStatusRowFormProperties {

		/** The status specifying why the winning bids were not billed. */
		status: FormControl<NonBillableWinningBidStatusRowStatus | null | undefined>,
	}
	export function CreateNonBillableWinningBidStatusRowFormGroup() {
		return new FormGroup<NonBillableWinningBidStatusRowFormProperties>({
			status: new FormControl<NonBillableWinningBidStatusRowStatus | null | undefined>(undefined),
		});

	}

	export enum NonBillableWinningBidStatusRowStatus { STATUS_UNSPECIFIED = 0, AD_NOT_RENDERED = 1, INVALID_IMPRESSION = 2, FATAL_VAST_ERROR = 3, LOST_IN_MEDIATION = 4 }


	/** Response message for listing products visible to the buyer. */
	export interface ListProductsResponse {

		/** List pagination support. */
		nextPageToken?: string | null;

		/** The list of matching products at their head revision number. */
		products?: Array<Product>;
	}

	/** Response message for listing products visible to the buyer. */
	export interface ListProductsResponseFormProperties {

		/** List pagination support. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProductsResponseFormGroup() {
		return new FormGroup<ListProductsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory. */
	export interface Product {

		/** The proposed end time for the deal. The field will be truncated to the order of seconds during serving. */
		availableEndTime?: string | null;

		/** Inventory availability dates. The start time will be truncated to seconds during serving. Thus, a field specified as 3:23:34.456 (HH:mm:ss.SSS) will be truncated to 3:23:34 when serving. */
		availableStartTime?: string | null;

		/** Creation time. */
		createTime?: string | null;

		/** Optional contact information for the creator of this product. */
		creatorContacts?: Array<ContactInformation>;

		/** The display name for this product as set by the seller. */
		displayName?: string | null;

		/** If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false. */
		hasCreatorSignedOff?: boolean | null;

		/** The unique ID for the product. */
		productId?: string | null;

		/** The revision number of the product (auto-assigned by Marketplace). */
		productRevision?: string | null;

		/** An ID which can be used by the Publisher Profile API to get more information about the seller that created this product. */
		publisherProfileId?: string | null;

		/** Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID. */
		seller?: Seller;

		/** The syndication product associated with the deal. */
		syndicationProduct?: DealSyndicationProduct | null;

		/** Targeting that is shared between the buyer and the seller. Each targeting criterion has a specified key and for each key there is a list of inclusion value or exclusion values. */
		targetingCriterion?: Array<TargetingCriteria>;

		/** The deal terms specify the details of a Product/deal. They specify things like price per buyer, the type of pricing model (for example, fixed price, auction) and expected impressions from the publisher. */
		terms?: DealTerms;

		/** Time of last update. */
		updateTime?: string | null;

		/** The web-property code for the seller. This needs to be copied as is when adding a new deal to a proposal. */
		webPropertyCode?: string | null;
	}

	/** A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory. */
	export interface ProductFormProperties {

		/** The proposed end time for the deal. The field will be truncated to the order of seconds during serving. */
		availableEndTime: FormControl<string | null | undefined>,

		/** Inventory availability dates. The start time will be truncated to seconds during serving. Thus, a field specified as 3:23:34.456 (HH:mm:ss.SSS) will be truncated to 3:23:34 when serving. */
		availableStartTime: FormControl<string | null | undefined>,

		/** Creation time. */
		createTime: FormControl<string | null | undefined>,

		/** The display name for this product as set by the seller. */
		displayName: FormControl<string | null | undefined>,

		/** If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false. */
		hasCreatorSignedOff: FormControl<boolean | null | undefined>,

		/** The unique ID for the product. */
		productId: FormControl<string | null | undefined>,

		/** The revision number of the product (auto-assigned by Marketplace). */
		productRevision: FormControl<string | null | undefined>,

		/** An ID which can be used by the Publisher Profile API to get more information about the seller that created this product. */
		publisherProfileId: FormControl<string | null | undefined>,

		/** The syndication product associated with the deal. */
		syndicationProduct: FormControl<DealSyndicationProduct | null | undefined>,

		/** Time of last update. */
		updateTime: FormControl<string | null | undefined>,

		/** The web-property code for the seller. This needs to be copied as is when adding a new deal to a proposal. */
		webPropertyCode: FormControl<string | null | undefined>,
	}
	export function CreateProductFormGroup() {
		return new FormGroup<ProductFormProperties>({
			availableEndTime: new FormControl<string | null | undefined>(undefined),
			availableStartTime: new FormControl<string | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			hasCreatorSignedOff: new FormControl<boolean | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			productRevision: new FormControl<string | null | undefined>(undefined),
			publisherProfileId: new FormControl<string | null | undefined>(undefined),
			syndicationProduct: new FormControl<DealSyndicationProduct | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			webPropertyCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID. */
	export interface Seller {

		/** The unique ID for the seller. The seller fills in this field. The seller account ID is then available to buyer in the product. */
		accountId?: string | null;

		/** Output only. Ad manager network code for the seller. */
		subAccountId?: string | null;
	}

	/** Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID. */
	export interface SellerFormProperties {

		/** The unique ID for the seller. The seller fills in this field. The seller account ID is then available to buyer in the product. */
		accountId: FormControl<string | null | undefined>,

		/** Output only. Ad manager network code for the seller. */
		subAccountId: FormControl<string | null | undefined>,
	}
	export function CreateSellerFormGroup() {
		return new FormGroup<SellerFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			subAccountId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for listing proposals. */
	export interface ListProposalsResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** The list of proposals. */
		proposals?: Array<Proposal>;
	}

	/** Response message for listing proposals. */
	export interface ListProposalsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListProposalsResponseFormGroup() {
		return new FormGroup<ListProposalsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise. */
	export interface Proposal {

		/** Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID. */
		billedBuyer?: Buyer;

		/** Represents a buyer of inventory. Each buyer is identified by a unique Authorized Buyers account ID. */
		buyer?: Buyer;

		/** Contact information for the buyer. */
		buyerContacts?: Array<ContactInformation>;

		/** Buyers are allowed to store certain types of private data in a proposal/deal. */
		buyerPrivateData?: PrivateData;

		/** The deals associated with this proposal. For Private Auction proposals (whose deals have NonGuaranteedAuctionTerms), there will only be one deal. */
		deals?: Array<Deal>;

		/** The name for the proposal. */
		displayName?: string | null;

		/** Output only. True if the proposal is being renegotiated. */
		isRenegotiating?: boolean | null;

		/** Output only. True, if the buyside inventory setup is complete for this proposal. */
		isSetupComplete?: boolean | null;

		/** Output only. The role of the last user that either updated the proposal or left a comment. */
		lastUpdaterOrCommentorRole?: NoteCreatorRole | null;

		/** Output only. The notes associated with this proposal. */
		notes?: Array<Note>;

		/** Output only. Indicates whether the buyer/seller created the proposal. */
		originatorRole?: NoteCreatorRole | null;

		/** Output only. Private auction ID if this proposal is a private auction proposal. */
		privateAuctionId?: string | null;

		/** Output only. The unique ID of the proposal. */
		proposalId?: string | null;

		/** Output only. The revision number for the proposal. Each update to the proposal or the deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made. */
		proposalRevision?: string | null;

		/** Output only. The current state of the proposal. */
		proposalState?: ProposalProposalState | null;

		/** Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID. */
		seller?: Seller;

		/** Output only. Contact information for the seller. */
		sellerContacts?: Array<ContactInformation>;

		/** Output only. The terms and conditions set by the publisher for this proposal. */
		termsAndConditions?: string | null;

		/** Output only. The time when the proposal was last revised. */
		updateTime?: string | null;
	}

	/** Represents a proposal in the Marketplace. A proposal is the unit of negotiation between a seller and a buyer and contains deals which are served. Note: You can't update, create, or otherwise modify Private Auction deals through the API. Fields are updatable unless noted otherwise. */
	export interface ProposalFormProperties {

		/** The name for the proposal. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. True if the proposal is being renegotiated. */
		isRenegotiating: FormControl<boolean | null | undefined>,

		/** Output only. True, if the buyside inventory setup is complete for this proposal. */
		isSetupComplete: FormControl<boolean | null | undefined>,

		/** Output only. The role of the last user that either updated the proposal or left a comment. */
		lastUpdaterOrCommentorRole: FormControl<NoteCreatorRole | null | undefined>,

		/** Output only. Indicates whether the buyer/seller created the proposal. */
		originatorRole: FormControl<NoteCreatorRole | null | undefined>,

		/** Output only. Private auction ID if this proposal is a private auction proposal. */
		privateAuctionId: FormControl<string | null | undefined>,

		/** Output only. The unique ID of the proposal. */
		proposalId: FormControl<string | null | undefined>,

		/** Output only. The revision number for the proposal. Each update to the proposal or the deal causes the proposal revision number to auto-increment. The buyer keeps track of the last revision number they know of and pass it in when making an update. If the head revision number on the server has since incremented, then an ABORTED error is returned during the update operation to let the buyer know that a subsequent update was made. */
		proposalRevision: FormControl<string | null | undefined>,

		/** Output only. The current state of the proposal. */
		proposalState: FormControl<ProposalProposalState | null | undefined>,

		/** Output only. The terms and conditions set by the publisher for this proposal. */
		termsAndConditions: FormControl<string | null | undefined>,

		/** Output only. The time when the proposal was last revised. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateProposalFormGroup() {
		return new FormGroup<ProposalFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			isRenegotiating: new FormControl<boolean | null | undefined>(undefined),
			isSetupComplete: new FormControl<boolean | null | undefined>(undefined),
			lastUpdaterOrCommentorRole: new FormControl<NoteCreatorRole | null | undefined>(undefined),
			originatorRole: new FormControl<NoteCreatorRole | null | undefined>(undefined),
			privateAuctionId: new FormControl<string | null | undefined>(undefined),
			proposalId: new FormControl<string | null | undefined>(undefined),
			proposalRevision: new FormControl<string | null | undefined>(undefined),
			proposalState: new FormControl<ProposalProposalState | null | undefined>(undefined),
			termsAndConditions: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ProposalProposalState { PROPOSAL_STATE_UNSPECIFIED = 0, PROPOSED = 1, BUYER_ACCEPTED = 2, SELLER_ACCEPTED = 3, CANCELED = 4, FINALIZED = 5 }


	/** Response message for profiles visible to the buyer. */
	export interface ListPublisherProfilesResponse {

		/** List pagination support */
		nextPageToken?: string | null;

		/** The list of matching publisher profiles. */
		publisherProfiles?: Array<PublisherProfile>;
	}

	/** Response message for profiles visible to the buyer. */
	export interface ListPublisherProfilesResponseFormProperties {

		/** List pagination support */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPublisherProfilesResponseFormGroup() {
		return new FormGroup<ListPublisherProfilesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise. */
	export interface PublisherProfile {

		/** Description on the publisher's audience. */
		audienceDescription?: string | null;

		/** Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher. */
		buyerPitchStatement?: string | null;

		/** Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. */
		directDealsContact?: string | null;

		/** Name of the publisher profile. */
		displayName?: string | null;

		/** The list of domains represented in this publisher profile. Empty if this is a parent profile. These are top private domains, meaning that these will not contain a string like "photos.google.co.uk/123", but will instead contain "google.co.uk". */
		domains?: Array<string>;

		/** URL to publisher's Google+ page. */
		googlePlusUrl?: string | null;

		/** Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller should have only one parent publisher profile, and can have multiple child profiles. Publisher profiles for the same seller will have same value of field google.ads.adexchange.buyer.v2beta1.PublisherProfile.seller. See https://support.google.com/admanager/answer/6035806 for details. */
		isParent?: boolean | null;

		/** A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image. */
		logoUrl?: string | null;

		/** URL to additional marketing and sales materials. */
		mediaKitUrl?: string | null;

		/** The list of apps represented in this publisher profile. Empty if this is a parent profile. */
		mobileApps?: Array<PublisherProfileMobileApplication>;

		/** Overview of the publisher. */
		overview?: string | null;

		/** Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. */
		programmaticDealsContact?: string | null;

		/** Unique ID for publisher profile. */
		publisherProfileId?: string | null;

		/** URL to a publisher rate card. */
		rateCardInfoUrl?: string | null;

		/** URL to a sample content page. */
		samplePageUrl?: string | null;

		/** Represents a seller of inventory. Each seller is identified by a unique Ad Manager account ID. */
		seller?: Seller;

		/** Up to three key metrics and rankings. Max 100 characters each. For example "#1 Mobile News Site for 20 Straight Months". */
		topHeadlines?: Array<string>;
	}

	/** Represents a publisher profile (https://support.google.com/admanager/answer/6035806) in Marketplace. All fields are read only. All string fields are free-form text entered by the publisher unless noted otherwise. */
	export interface PublisherProfileFormProperties {

		/** Description on the publisher's audience. */
		audienceDescription: FormControl<string | null | undefined>,

		/** Statement explaining what's unique about publisher's business, and why buyers should partner with the publisher. */
		buyerPitchStatement: FormControl<string | null | undefined>,

		/** Contact information for direct reservation deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. */
		directDealsContact: FormControl<string | null | undefined>,

		/** Name of the publisher profile. */
		displayName: FormControl<string | null | undefined>,

		/** URL to publisher's Google+ page. */
		googlePlusUrl: FormControl<string | null | undefined>,

		/** Indicates if this profile is the parent profile of the seller. A parent profile represents all the inventory from the seller, as opposed to child profile that is created to brand a portion of inventory. One seller should have only one parent publisher profile, and can have multiple child profiles. Publisher profiles for the same seller will have same value of field google.ads.adexchange.buyer.v2beta1.PublisherProfile.seller. See https://support.google.com/admanager/answer/6035806 for details. */
		isParent: FormControl<boolean | null | undefined>,

		/** A Google public URL to the logo for this publisher profile. The logo is stored as a PNG, JPG, or GIF image. */
		logoUrl: FormControl<string | null | undefined>,

		/** URL to additional marketing and sales materials. */
		mediaKitUrl: FormControl<string | null | undefined>,

		/** Overview of the publisher. */
		overview: FormControl<string | null | undefined>,

		/** Contact information for programmatic deals. This is free text entered by the publisher and may include information like names, phone numbers and email addresses. */
		programmaticDealsContact: FormControl<string | null | undefined>,

		/** Unique ID for publisher profile. */
		publisherProfileId: FormControl<string | null | undefined>,

		/** URL to a publisher rate card. */
		rateCardInfoUrl: FormControl<string | null | undefined>,

		/** URL to a sample content page. */
		samplePageUrl: FormControl<string | null | undefined>,
	}
	export function CreatePublisherProfileFormGroup() {
		return new FormGroup<PublisherProfileFormProperties>({
			audienceDescription: new FormControl<string | null | undefined>(undefined),
			buyerPitchStatement: new FormControl<string | null | undefined>(undefined),
			directDealsContact: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			googlePlusUrl: new FormControl<string | null | undefined>(undefined),
			isParent: new FormControl<boolean | null | undefined>(undefined),
			logoUrl: new FormControl<string | null | undefined>(undefined),
			mediaKitUrl: new FormControl<string | null | undefined>(undefined),
			overview: new FormControl<string | null | undefined>(undefined),
			programmaticDealsContact: new FormControl<string | null | undefined>(undefined),
			publisherProfileId: new FormControl<string | null | undefined>(undefined),
			rateCardInfoUrl: new FormControl<string | null | undefined>(undefined),
			samplePageUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A mobile application that contains a external app ID, name, and app store. */
	export interface PublisherProfileMobileApplication {

		/** The app store the app belongs to. */
		appStore?: PublisherProfileMobileApplicationAppStore | null;

		/** The external ID for the app from its app store. */
		externalAppId?: string | null;

		/** The name of the app. */
		name?: string | null;
	}

	/** A mobile application that contains a external app ID, name, and app store. */
	export interface PublisherProfileMobileApplicationFormProperties {

		/** The app store the app belongs to. */
		appStore: FormControl<PublisherProfileMobileApplicationAppStore | null | undefined>,

		/** The external ID for the app from its app store. */
		externalAppId: FormControl<string | null | undefined>,

		/** The name of the app. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePublisherProfileMobileApplicationFormGroup() {
		return new FormGroup<PublisherProfileMobileApplicationFormProperties>({
			appStore: new FormControl<PublisherProfileMobileApplicationAppStore | null | undefined>(undefined),
			externalAppId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PublisherProfileMobileApplicationAppStore { APP_STORE_TYPE_UNSPECIFIED = 0, APPLE_ITUNES = 1, GOOGLE_PLAY = 2, ROKU = 3, AMAZON_FIRETV = 4, PLAYSTATION = 5, XBOX = 6, SAMSUNG_TV = 7, AMAZON = 8, OPPO = 9, SAMSUNG = 10, VIVO = 11, XIAOMI = 12, LG_TV = 13 }


	/** Request message to pause serving for finalized deals. */
	export interface PauseProposalDealsRequest {

		/** The external_deal_id's of the deals to be paused. If empty, all the deals in the proposal will be paused. */
		externalDealIds?: Array<string>;

		/** The reason why the deals are being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.) */
		reason?: string | null;
	}

	/** Request message to pause serving for finalized deals. */
	export interface PauseProposalDealsRequestFormProperties {

		/** The reason why the deals are being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.) */
		reason: FormControl<string | null | undefined>,
	}
	export function CreatePauseProposalDealsRequestFormGroup() {
		return new FormGroup<PauseProposalDealsRequestFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message to pause serving for an already-finalized proposal. */
	export interface PauseProposalRequest {

		/** The reason why the proposal is being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.) */
		reason?: string | null;
	}

	/** Request message to pause serving for an already-finalized proposal. */
	export interface PauseProposalRequestFormProperties {

		/** The reason why the proposal is being paused. This human readable message will be displayed in the seller's UI. (Max length: 1000 unicode code units.) */
		reason: FormControl<string | null | undefined>,
	}
	export function CreatePauseProposalRequestFormGroup() {
		return new FormGroup<PauseProposalRequestFormProperties>({
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request for removing the association between a deal and a creative. */
	export interface RemoveDealAssociationRequest {

		/** The association between a creative and a deal. */
		association?: CreativeDealAssociation;
	}

	/** A request for removing the association between a deal and a creative. */
	export interface RemoveDealAssociationRequestFormProperties {
	}
	export function CreateRemoveDealAssociationRequestFormGroup() {
		return new FormGroup<RemoveDealAssociationRequestFormProperties>({
		});

	}


	/** Request message to resume (unpause) serving for already-finalized deals. */
	export interface ResumeProposalDealsRequest {

		/** The external_deal_id's of the deals to resume. If empty, all the deals in the proposal will be resumed. */
		externalDealIds?: Array<string>;
	}

	/** Request message to resume (unpause) serving for already-finalized deals. */
	export interface ResumeProposalDealsRequestFormProperties {
	}
	export function CreateResumeProposalDealsRequestFormGroup() {
		return new FormGroup<ResumeProposalDealsRequestFormProperties>({
		});

	}


	/** Request message to resume (unpause) serving for an already-finalized proposal. */
	export interface ResumeProposalRequest {
	}

	/** Request message to resume (unpause) serving for an already-finalized proposal. */
	export interface ResumeProposalRequestFormProperties {
	}
	export function CreateResumeProposalRequestFormGroup() {
		return new FormGroup<ResumeProposalRequestFormProperties>({
		});

	}


	/** A request for stopping notifications for changes to creative Status. */
	export interface StopWatchingCreativeRequest {
	}

	/** A request for stopping notifications for changes to creative Status. */
	export interface StopWatchingCreativeRequestFormProperties {
	}
	export function CreateStopWatchingCreativeRequestFormGroup() {
		return new FormGroup<StopWatchingCreativeRequestFormProperties>({
		});

	}


	/** A request for watching changes to creative Status. */
	export interface WatchCreativeRequest {

		/** The Pub/Sub topic to publish notifications to. This topic must already exist and must give permission to ad-exchange-buyside-reports@google.com to write to the topic. This should be the full resource name in "projects/{project_id}/topics/{topic_id}" format. */
		topic?: string | null;
	}

	/** A request for watching changes to creative Status. */
	export interface WatchCreativeRequestFormProperties {

		/** The Pub/Sub topic to publish notifications to. This topic must already exist and must give permission to ad-exchange-buyside-reports@google.com to write to the topic. This should be the full resource name in "projects/{project_id}/topics/{topic_id}" format. */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateWatchCreativeRequestFormGroup() {
		return new FormGroup<WatchCreativeRequestFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all the clients for the current sponsor buyer.
		 * Get v2beta1/accounts/{accountId}/clients
		 * @param {string} accountId Unique numerical account ID of the sponsor buyer to list the clients for.
		 * @param {number} pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
		 * @param {string} partnerClientId Optional unique identifier (from the standpoint of an Ad Exchange sponsor buyer partner) of the client to return. If specified, at most one client will be returned in the response.
		 * @return {ListClientsResponse} Successful response
		 */
		Adexchangebuyer2_accounts_clients_list(accountId: string, pageSize: number | null | undefined, pageToken: string | null | undefined, partnerClientId: string | null | undefined): Observable<ListClientsResponse> {
			return this.http.get<ListClientsResponse>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/clients&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&partnerClientId=' + (partnerClientId == null ? '' : encodeURIComponent(partnerClientId)), {});
		}

		/**
		 * Creates a new client buyer.
		 * Post v2beta1/accounts/{accountId}/clients
		 * @param {string} accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
		 * @return {Client} Successful response
		 */
		Adexchangebuyer2_accounts_clients_create(accountId: string, requestBody: Client): Observable<Client> {
			return this.http.post<Client>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/clients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a client buyer with a given client account ID.
		 * Get v2beta1/accounts/{accountId}/clients/{clientAccountId}
		 * @param {string} accountId Numerical account ID of the client's sponsor buyer. (required)
		 * @param {string} clientAccountId Numerical account ID of the client buyer to retrieve. (required)
		 * @return {Client} Successful response
		 */
		Adexchangebuyer2_accounts_clients_get(accountId: string, clientAccountId: string): Observable<Client> {
			return this.http.get<Client>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/clients/' + (clientAccountId == null ? '' : encodeURIComponent(clientAccountId)), {});
		}

		/**
		 * Updates an existing client buyer.
		 * Put v2beta1/accounts/{accountId}/clients/{clientAccountId}
		 * @param {string} accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
		 * @param {string} clientAccountId Unique numerical account ID of the client to update. (required)
		 * @return {Client} Successful response
		 */
		Adexchangebuyer2_accounts_clients_update(accountId: string, clientAccountId: string, requestBody: Client): Observable<Client> {
			return this.http.put<Client>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/clients/' + (clientAccountId == null ? '' : encodeURIComponent(clientAccountId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all the client users invitations for a client with a given account ID.
		 * Get v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations
		 * @param {string} accountId Numerical account ID of the client's sponsor buyer. (required)
		 * @param {string} clientAccountId Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
		 * @param {number} pageSize Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
		 * @return {ListClientUserInvitationsResponse} Successful response
		 */
		Adexchangebuyer2_accounts_clients_invitations_list(accountId: string, clientAccountId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListClientUserInvitationsResponse> {
			return this.http.get<ListClientUserInvitationsResponse>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/clients/' + (clientAccountId == null ? '' : encodeURIComponent(clientAccountId)) + '/invitations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates and sends out an email invitation to access an Ad Exchange client buyer account.
		 * Post v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations
		 * @param {string} accountId Numerical account ID of the client's sponsor buyer. (required)
		 * @param {string} clientAccountId Numerical account ID of the client buyer that the user should be associated with. (required)
		 * @return {ClientUserInvitation} Successful response
		 */
		Adexchangebuyer2_accounts_clients_invitations_create(accountId: string, clientAccountId: string, requestBody: ClientUserInvitation): Observable<ClientUserInvitation> {
			return this.http.post<ClientUserInvitation>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/clients/' + (clientAccountId == null ? '' : encodeURIComponent(clientAccountId)) + '/invitations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves an existing client user invitation.
		 * Get v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}
		 * @param {string} accountId Numerical account ID of the client's sponsor buyer. (required)
		 * @param {string} clientAccountId Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
		 * @param {string} invitationId Numerical identifier of the user invitation to retrieve. (required)
		 * @return {ClientUserInvitation} Successful response
		 */
		Adexchangebuyer2_accounts_clients_invitations_get(accountId: string, clientAccountId: string, invitationId: string): Observable<ClientUserInvitation> {
			return this.http.get<ClientUserInvitation>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/clients/' + (clientAccountId == null ? '' : encodeURIComponent(clientAccountId)) + '/invitations/' + (invitationId == null ? '' : encodeURIComponent(invitationId)), {});
		}

		/**
		 * Lists all the known client users for a specified sponsor buyer account ID.
		 * Get v2beta1/accounts/{accountId}/clients/{clientAccountId}/users
		 * @param {string} accountId Numerical account ID of the sponsor buyer of the client to list users for. (required)
		 * @param {string} clientAccountId The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
		 * @param {number} pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
		 * @return {ListClientUsersResponse} Successful response
		 */
		Adexchangebuyer2_accounts_clients_users_list(accountId: string, clientAccountId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListClientUsersResponse> {
			return this.http.get<ListClientUsersResponse>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/clients/' + (clientAccountId == null ? '' : encodeURIComponent(clientAccountId)) + '/users&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Retrieves an existing client user.
		 * Get v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}
		 * @param {string} accountId Numerical account ID of the client's sponsor buyer. (required)
		 * @param {string} clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
		 * @param {string} userId Numerical identifier of the user to retrieve. (required)
		 * @return {ClientUser} Successful response
		 */
		Adexchangebuyer2_accounts_clients_users_get(accountId: string, clientAccountId: string, userId: string): Observable<ClientUser> {
			return this.http.get<ClientUser>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/clients/' + (clientAccountId == null ? '' : encodeURIComponent(clientAccountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Updates an existing client user. Only the user status can be changed on update.
		 * Put v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}
		 * @param {string} accountId Numerical account ID of the client's sponsor buyer. (required)
		 * @param {string} clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
		 * @param {string} userId Numerical identifier of the user to retrieve. (required)
		 * @return {ClientUser} Successful response
		 */
		Adexchangebuyer2_accounts_clients_users_update(accountId: string, clientAccountId: string, userId: string, requestBody: ClientUser): Observable<ClientUser> {
			return this.http.put<ClientUser>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/clients/' + (clientAccountId == null ? '' : encodeURIComponent(clientAccountId)) + '/users/' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists creatives.
		 * Get v2beta1/accounts/{accountId}/creatives
		 * @param {string} accountId The account to list the creatives from. Specify "-" to list all creatives the current user has access to.
		 * @param {number} pageSize Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.
		 * @param {string} query An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsStatus: {approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus: {approved, conditionally_approved, disapproved, not_checked} - attribute: {a numeric attribute from the list of attributes} - disapprovalReason: {a reason from DisapprovalReason} Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
		 * @return {ListCreativesResponse} Successful response
		 */
		Adexchangebuyer2_accounts_creatives_list(accountId: string, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<ListCreativesResponse> {
			return this.http.get<ListCreativesResponse>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/creatives&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Creates a creative.
		 * Post v2beta1/accounts/{accountId}/creatives
		 * @param {string} accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
		 * @param {Adexchangebuyer2_accounts_creatives_createDuplicateIdMode} duplicateIdMode Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
		 * @return {Creative} Successful response
		 */
		Adexchangebuyer2_accounts_creatives_create(accountId: string, duplicateIdMode: Adexchangebuyer2_accounts_creatives_createDuplicateIdMode | null | undefined, requestBody: Creative): Observable<Creative> {
			return this.http.post<Creative>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/creatives&duplicateIdMode=' + duplicateIdMode, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a creative.
		 * Get v2beta1/accounts/{accountId}/creatives/{creativeId}
		 * @param {string} accountId The account the creative belongs to.
		 * @param {string} creativeId The ID of the creative to retrieve.
		 * @return {Creative} Successful response
		 */
		Adexchangebuyer2_accounts_creatives_get(accountId: string, creativeId: string): Observable<Creative> {
			return this.http.get<Creative>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/creatives/' + (creativeId == null ? '' : encodeURIComponent(creativeId)), {});
		}

		/**
		 * Updates a creative.
		 * Put v2beta1/accounts/{accountId}/creatives/{creativeId}
		 * @param {string} accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
		 * @param {string} creativeId The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
		 * @return {Creative} Successful response
		 */
		Adexchangebuyer2_accounts_creatives_update(accountId: string, creativeId: string, requestBody: Creative): Observable<Creative> {
			return this.http.put<Creative>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/creatives/' + (creativeId == null ? '' : encodeURIComponent(creativeId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all creative-deal associations.
		 * Get v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations
		 * @param {string} accountId The account to list the associations from. Specify "-" to list all creatives the current user has access to.
		 * @param {string} creativeId The creative ID to list the associations from. Specify "-" to list all creatives under the above account.
		 * @param {number} pageSize Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.
		 * @param {string} query An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsId=*deals_id_string* - dealsStatus:{approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus:{approved, conditionally_approved, disapproved, not_checked} Example: 'dealsId=12345 AND dealsStatus:disapproved'
		 * @return {ListDealAssociationsResponse} Successful response
		 */
		Adexchangebuyer2_accounts_creatives_dealAssociations_list(accountId: string, creativeId: string, pageSize: number | null | undefined, pageToken: string | null | undefined, query: string | null | undefined): Observable<ListDealAssociationsResponse> {
			return this.http.get<ListDealAssociationsResponse>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/creatives/' + (creativeId == null ? '' : encodeURIComponent(creativeId)) + '/dealAssociations&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&query=' + (query == null ? '' : encodeURIComponent(query)), {});
		}

		/**
		 * Associate an existing deal with a creative.
		 * Post v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add
		 * @param {string} accountId The account the creative belongs to.
		 * @param {string} creativeId The ID of the creative associated with the deal.
		 * @return {Empty} Successful response
		 */
		Adexchangebuyer2_accounts_creatives_dealAssociations_add(accountId: string, creativeId: string, requestBody: AddDealAssociationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/creatives/' + (creativeId == null ? '' : encodeURIComponent(creativeId)) + '/dealAssociations:add', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Remove the association between a deal and a creative.
		 * Post v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove
		 * @param {string} accountId The account the creative belongs to.
		 * @param {string} creativeId The ID of the creative associated with the deal.
		 * @return {Empty} Successful response
		 */
		Adexchangebuyer2_accounts_creatives_dealAssociations_remove(accountId: string, creativeId: string, requestBody: RemoveDealAssociationRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/creatives/' + (creativeId == null ? '' : encodeURIComponent(creativeId)) + '/dealAssociations:remove', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
		 * Post v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching
		 * @param {string} accountId The account of the creative to stop notifications for.
		 * @param {string} creativeId The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.
		 * @return {Empty} Successful response
		 */
		Adexchangebuyer2_accounts_creatives_stopWatching(accountId: string, creativeId: string, requestBody: StopWatchingCreativeRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/creatives/' + (creativeId == null ? '' : encodeURIComponent(creativeId)) + ':stopWatching', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
		 * Post v2beta1/accounts/{accountId}/creatives/{creativeId}:watch
		 * @param {string} accountId The account of the creative to watch.
		 * @param {string} creativeId The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.
		 * @return {Empty} Successful response
		 */
		Adexchangebuyer2_accounts_creatives_watch(accountId: string, creativeId: string, requestBody: WatchCreativeRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/creatives/' + (creativeId == null ? '' : encodeURIComponent(creativeId)) + ':watch', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
		 * Get v2beta1/accounts/{accountId}/finalizedProposals
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} filter An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
		 * @param {Adexchangebuyer2_accounts_finalizedProposals_listFilterSyntax} filterSyntax Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken The page token as returned from ListProposalsResponse.
		 * @return {ListProposalsResponse} Successful response
		 */
		Adexchangebuyer2_accounts_finalizedProposals_list(accountId: string, filter: string | null | undefined, filterSyntax: Adexchangebuyer2_accounts_finalizedProposals_listFilterSyntax | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProposalsResponse> {
			return this.http.get<ListProposalsResponse>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/finalizedProposals&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&filterSyntax=' + filterSyntax + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
		 * Post v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:pause
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} proposalId The proposal_id of the proposal containing the deals.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer2_accounts_finalizedProposals_pause(accountId: string, proposalId: string, requestBody: PauseProposalDealsRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/finalizedProposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
		 * Post v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:resume
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} proposalId The proposal_id of the proposal containing the deals.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer2_accounts_finalizedProposals_resume(accountId: string, proposalId: string, requestBody: ResumeProposalDealsRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/finalizedProposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all products visible to the buyer (optionally filtered by the specified PQL query).
		 * Get v2beta1/accounts/{accountId}/products
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} filter An optional PQL query used to query for products. See https://developers.google.com/ad-manager/docs/pqlreference for documentation about PQL and examples. Nested repeated fields, such as product.targetingCriterion.inclusions, cannot be filtered.
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken The page token as returned from ListProductsResponse.
		 * @return {ListProductsResponse} Successful response
		 */
		Adexchangebuyer2_accounts_products_list(accountId: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProductsResponse> {
			return this.http.get<ListProductsResponse>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/products&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the requested product by ID.
		 * Get v2beta1/accounts/{accountId}/products/{productId}
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} productId The ID for the product to get the head revision for.
		 * @return {Product} Successful response
		 */
		Adexchangebuyer2_accounts_products_get(accountId: string, productId: string): Observable<Product> {
			return this.http.get<Product>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/products/' + (productId == null ? '' : encodeURIComponent(productId)), {});
		}

		/**
		 * List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
		 * Get v2beta1/accounts/{accountId}/proposals
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} filter An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
		 * @param {Adexchangebuyer2_accounts_finalizedProposals_listFilterSyntax} filterSyntax Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken The page token as returned from ListProposalsResponse.
		 * @return {ListProposalsResponse} Successful response
		 */
		Adexchangebuyer2_accounts_proposals_list(accountId: string, filter: string | null | undefined, filterSyntax: Adexchangebuyer2_accounts_finalizedProposals_listFilterSyntax | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListProposalsResponse> {
			return this.http.get<ListProposalsResponse>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/proposals&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&filterSyntax=' + filterSyntax + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
		 * Post v2beta1/accounts/{accountId}/proposals
		 * @param {string} accountId Account ID of the buyer.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer2_accounts_proposals_create(accountId: string, requestBody: Proposal): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/proposals', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets a proposal given its ID. The proposal is returned at its head revision.
		 * Get v2beta1/accounts/{accountId}/proposals/{proposalId}
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} proposalId The unique ID of the proposal
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer2_accounts_proposals_get(accountId: string, proposalId: string): Observable<Proposal> {
			return this.http.get<Proposal>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)), {});
		}

		/**
		 * Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
		 * Put v2beta1/accounts/{accountId}/proposals/{proposalId}
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} proposalId The unique ID of the proposal.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer2_accounts_proposals_update(accountId: string, proposalId: string, requestBody: Proposal): Observable<Proposal> {
			return this.http.put<Proposal>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
		 * Post v2beta1/accounts/{accountId}/proposals/{proposalId}:accept
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} proposalId The ID of the proposal to accept.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer2_accounts_proposals_accept(accountId: string, proposalId: string, requestBody: AcceptProposalRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + ':accept', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
		 * Post v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} proposalId The ID of the proposal to attach the note to.
		 * @return {Note} Successful response
		 */
		Adexchangebuyer2_accounts_proposals_addNote(accountId: string, proposalId: string, requestBody: AddNoteRequest): Observable<Note> {
			return this.http.post<Note>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + ':addNote', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
		 * Post v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} proposalId The ID of the proposal to cancel negotiation for.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer2_accounts_proposals_cancelNegotiation(accountId: string, proposalId: string, requestBody: CancelNegotiationRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + ':cancelNegotiation', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
		 * Post v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} proposalId The ID of the proposal to mark as setup completed.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer2_accounts_proposals_completeSetup(accountId: string, proposalId: string, requestBody: CompleteSetupRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + ':completeSetup', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
		 * Post v2beta1/accounts/{accountId}/proposals/{proposalId}:pause
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} proposalId The ID of the proposal to pause.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer2_accounts_proposals_pause(accountId: string, proposalId: string, requestBody: PauseProposalRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
		 * Post v2beta1/accounts/{accountId}/proposals/{proposalId}:resume
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} proposalId The ID of the proposal to resume.
		 * @return {Proposal} Successful response
		 */
		Adexchangebuyer2_accounts_proposals_resume(accountId: string, proposalId: string, requestBody: ResumeProposalRequest): Observable<Proposal> {
			return this.http.post<Proposal>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/proposals/' + (proposalId == null ? '' : encodeURIComponent(proposalId)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all publisher profiles visible to the buyer
		 * Get v2beta1/accounts/{accountId}/publisherProfiles
		 * @param {string} accountId Account ID of the buyer.
		 * @param {number} pageSize Specify the number of results to include per page.
		 * @param {string} pageToken The page token as return from ListPublisherProfilesResponse.
		 * @return {ListPublisherProfilesResponse} Successful response
		 */
		Adexchangebuyer2_accounts_publisherProfiles_list(accountId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPublisherProfilesResponse> {
			return this.http.get<ListPublisherProfilesResponse>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/publisherProfiles&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the requested publisher profile by id.
		 * Get v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}
		 * @param {string} accountId Account ID of the buyer.
		 * @param {string} publisherProfileId The id for the publisher profile to get.
		 * @return {PublisherProfile} Successful response
		 */
		Adexchangebuyer2_accounts_publisherProfiles_get(accountId: string, publisherProfileId: string): Observable<PublisherProfile> {
			return this.http.get<PublisherProfile>(this.baseUri + 'v2beta1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/publisherProfiles/' + (publisherProfileId == null ? '' : encodeURIComponent(publisherProfileId)), {});
		}

		/**
		 * Lists all metrics that are measured in terms of number of bids.
		 * Get v2beta1/{filterSetName}/bidMetrics
		 * @param {string} filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
		 * @return {ListBidMetricsResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_bidMetrics_list(filterSetName: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBidMetricsResponse> {
			return this.http.get<ListBidMetricsResponse>(this.baseUri + 'v2beta1/' + (filterSetName == null ? '' : encodeURIComponent(filterSetName)) + '/bidMetrics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
		 * Get v2beta1/{filterSetName}/bidResponseErrors
		 * @param {string} filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
		 * @return {ListBidResponseErrorsResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_bidResponseErrors_list(filterSetName: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBidResponseErrorsResponse> {
			return this.http.get<ListBidResponseErrorsResponse>(this.baseUri + 'v2beta1/' + (filterSetName == null ? '' : encodeURIComponent(filterSetName)) + '/bidResponseErrors&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
		 * Get v2beta1/{filterSetName}/bidResponsesWithoutBids
		 * @param {string} filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
		 * @return {ListBidResponsesWithoutBidsResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_bidResponsesWithoutBids_list(filterSetName: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListBidResponsesWithoutBidsResponse> {
			return this.http.get<ListBidResponsesWithoutBidsResponse>(this.baseUri + 'v2beta1/' + (filterSetName == null ? '' : encodeURIComponent(filterSetName)) + '/bidResponsesWithoutBids&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
		 * Get v2beta1/{filterSetName}/filteredBidRequests
		 * @param {string} filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
		 * @return {ListFilteredBidRequestsResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_filteredBidRequests_list(filterSetName: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFilteredBidRequestsResponse> {
			return this.http.get<ListFilteredBidRequestsResponse>(this.baseUri + 'v2beta1/' + (filterSetName == null ? '' : encodeURIComponent(filterSetName)) + '/filteredBidRequests&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all reasons for which bids were filtered, with the number of bids filtered for each reason.
		 * Get v2beta1/{filterSetName}/filteredBids
		 * @param {string} filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
		 * @return {ListFilteredBidsResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_filteredBids_list(filterSetName: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFilteredBidsResponse> {
			return this.http.get<ListFilteredBidsResponse>(this.baseUri + 'v2beta1/' + (filterSetName == null ? '' : encodeURIComponent(filterSetName)) + '/filteredBids&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
		 * Get v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/creatives
		 * @param {string} filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @param {number} creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
		 * @return {ListCreativeStatusBreakdownByCreativeResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_filteredBids_creatives_list(filterSetName: string, creativeStatusId: number, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCreativeStatusBreakdownByCreativeResponse> {
			return this.http.get<ListCreativeStatusBreakdownByCreativeResponse>(this.baseUri + 'v2beta1/' + (filterSetName == null ? '' : encodeURIComponent(filterSetName)) + '/filteredBids/' + creativeStatusId + '/creatives&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
		 * Get v2beta1/{filterSetName}/filteredBids/{creativeStatusId}/details
		 * @param {string} filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @param {number} creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
		 * @return {ListCreativeStatusBreakdownByDetailResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_filteredBids_details_list(filterSetName: string, creativeStatusId: number, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCreativeStatusBreakdownByDetailResponse> {
			return this.http.get<ListCreativeStatusBreakdownByDetailResponse>(this.baseUri + 'v2beta1/' + (filterSetName == null ? '' : encodeURIComponent(filterSetName)) + '/filteredBids/' + creativeStatusId + '/details&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Lists all metrics that are measured in terms of number of impressions.
		 * Get v2beta1/{filterSetName}/impressionMetrics
		 * @param {string} filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
		 * @return {ListImpressionMetricsResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_impressionMetrics_list(filterSetName: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListImpressionMetricsResponse> {
			return this.http.get<ListImpressionMetricsResponse>(this.baseUri + 'v2beta1/' + (filterSetName == null ? '' : encodeURIComponent(filterSetName)) + '/impressionMetrics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
		 * Get v2beta1/{filterSetName}/losingBids
		 * @param {string} filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
		 * @return {ListLosingBidsResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_losingBids_list(filterSetName: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListLosingBidsResponse> {
			return this.http.get<ListLosingBidsResponse>(this.baseUri + 'v2beta1/' + (filterSetName == null ? '' : encodeURIComponent(filterSetName)) + '/losingBids&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
		 * Get v2beta1/{filterSetName}/nonBillableWinningBids
		 * @param {string} filterSetName Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
		 * @return {ListNonBillableWinningBidsResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_nonBillableWinningBids_list(filterSetName: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListNonBillableWinningBidsResponse> {
			return this.http.get<ListNonBillableWinningBidsResponse>(this.baseUri + 'v2beta1/' + (filterSetName == null ? '' : encodeURIComponent(filterSetName)) + '/nonBillableWinningBids&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes the requested filter set from the account with the given account ID.
		 * Delete v2beta1/{name}
		 * @param {string} name Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @return {Empty} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v2beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Retrieves the requested filter set for the account with the given account ID.
		 * Get v2beta1/{name}
		 * @param {string} name Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
		 * @return {FilterSet} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_get(name: string): Observable<FilterSet> {
			return this.http.get<FilterSet>(this.baseUri + 'v2beta1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Lists all filter sets for the account with the given account ID.
		 * Get v2beta1/{ownerName}/filterSets
		 * @param {string} ownerName Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
		 * @param {number} pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
		 * @param {string} pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
		 * @return {ListFilterSetsResponse} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_list(ownerName: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListFilterSetsResponse> {
			return this.http.get<ListFilterSetsResponse>(this.baseUri + 'v2beta1/' + (ownerName == null ? '' : encodeURIComponent(ownerName)) + '/filterSets&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates the specified filter set for the account with the given account ID.
		 * Post v2beta1/{ownerName}/filterSets
		 * @param {string} ownerName Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
		 * @param {boolean} isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
		 * @return {FilterSet} Successful response
		 */
		Adexchangebuyer2_buyers_filterSets_create(ownerName: string, isTransient: boolean | null | undefined, requestBody: FilterSet): Observable<FilterSet> {
			return this.http.post<FilterSet>(this.baseUri + 'v2beta1/' + (ownerName == null ? '' : encodeURIComponent(ownerName)) + '/filterSets&isTransient=' + isTransient, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Adexchangebuyer2_accounts_creatives_createDuplicateIdMode { NO_DUPLICATES = 0, FORCE_ENABLE_DUPLICATE_IDS = 1 }

	export enum Adexchangebuyer2_accounts_finalizedProposals_listFilterSyntax { FILTER_SYNTAX_UNSPECIFIED = 0, PQL = 1, LIST_FILTER = 2 }

}

