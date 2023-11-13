import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface CreateUserResponse {
		UserId?: string | null;
		UserArn?: string | null;
	}

	export enum PhoneType { SOFT_PHONE = 0, DESK_PHONE = 1 }

	export interface InvalidRequestException {
	}

	export interface InvalidParameterException {
	}

	export interface LimitExceededException {
	}

	export interface DuplicateResourceException {
	}

	export interface ResourceNotFoundException {
	}

	export interface ThrottlingException {
	}

	export interface InternalServiceException {
	}

	export interface DescribeUserResponse {

		/** Contains information about a user account for a Amazon Connect instance. */
		User?: User | null;
	}


	/** Contains information about a user account for a Amazon Connect instance. */
	export interface User {
		Id?: string | null;
		Arn?: string | null;
		Username?: string | null;

		/** Contains information about the identity of a user. */
		IdentityInfo?: UserIdentityInfo | null;

		/** Contains information about the phone configuration settings for a user. */
		PhoneConfig?: UserPhoneConfig | null;
		DirectoryUserId?: string | null;
		SecurityProfileIds?: Array<string> | null;
		RoutingProfileId?: string | null;
		HierarchyGroupId?: string | null;
		Tags?: TagMap | null;
	}


	/** Contains information about the identity of a user. */
	export interface UserIdentityInfo {
		FirstName?: string | null;
		LastName?: string | null;
		Email?: string | null;
	}


	/** Contains information about the phone configuration settings for a user. */
	export interface UserPhoneConfig {
		PhoneType: PhoneType;
		AutoAccept?: boolean | null;
		AfterContactWorkTimeLimit?: number | null;
		DeskPhoneNumber?: string | null;
	}

	export interface TagMap {
	}

	export interface DescribeUserHierarchyGroupResponse {

		/** Contains information about a hierarchy group. */
		HierarchyGroup?: HierarchyGroup | null;
	}


	/** Contains information about a hierarchy group. */
	export interface HierarchyGroup {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
		LevelId?: string | null;

		/** Contains information about the levels of a hierarchy group. */
		HierarchyPath?: HierarchyPath | null;
	}


	/** Contains information about the levels of a hierarchy group. */
	export interface HierarchyPath {

		/** Contains summary information about a hierarchy group. */
		LevelOne?: HierarchyGroupSummary | null;

		/** Contains summary information about a hierarchy group. */
		LevelTwo?: HierarchyGroupSummary | null;

		/** Contains summary information about a hierarchy group. */
		LevelThree?: HierarchyGroupSummary | null;

		/** Contains summary information about a hierarchy group. */
		LevelFour?: HierarchyGroupSummary | null;

		/** Contains summary information about a hierarchy group. */
		LevelFive?: HierarchyGroupSummary | null;
	}


	/** Contains summary information about a hierarchy group. */
	export interface HierarchyGroupSummary {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
	}

	export interface DescribeUserHierarchyStructureResponse {

		/** Contains information about a hierarchy structure. */
		HierarchyStructure?: HierarchyStructure | null;
	}


	/** Contains information about a hierarchy structure. */
	export interface HierarchyStructure {

		/** Contains information about a hierarchy level. */
		LevelOne?: HierarchyLevel | null;

		/** Contains information about a hierarchy level. */
		LevelTwo?: HierarchyLevel | null;

		/** Contains information about a hierarchy level. */
		LevelThree?: HierarchyLevel | null;

		/** Contains information about a hierarchy level. */
		LevelFour?: HierarchyLevel | null;

		/** Contains information about a hierarchy level. */
		LevelFive?: HierarchyLevel | null;
	}


	/** Contains information about a hierarchy level. */
	export interface HierarchyLevel {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
	}

	export interface GetContactAttributesResponse {
		Attributes?: Attributes | null;
	}

	export interface Attributes {
	}

	export interface GetCurrentMetricDataResponse {
		NextToken?: string | null;
		MetricResults?: Array<CurrentMetricResult> | null;
		DataSnapshotTime?: Date | null;
	}


	/** Contains information about a set of real-time metrics. */
	export interface CurrentMetricResult {

		/** Contains information about the dimensions for a set of metrics. */
		Dimensions?: Dimensions | null;
		Collections?: Array<CurrentMetricData> | null;
	}


	/** Contains information about the dimensions for a set of metrics. */
	export interface Dimensions {

		/** Contains information about a queue resource for which metrics are returned. */
		Queue?: QueueReference | null;
		Channel?: DimensionsChannel | null;
	}


	/** Contains information about a queue resource for which metrics are returned. */
	export interface QueueReference {
		Id?: string | null;
		Arn?: string | null;
	}

	export enum DimensionsChannel { VOICE = 0, CHAT = 1 }


	/** Contains the data for a real-time metric. */
	export interface CurrentMetricData {

		/** Contains information about a real-time metric. */
		Metric?: CurrentMetric | null;
		Value?: number | null;
	}


	/** Contains information about a real-time metric. */
	export interface CurrentMetric {

		/** The current metric names. */
		Name?: CurrentMetricName | null;
		Unit?: CurrentMetricUnit | null;
	}

	export enum CurrentMetricName { AGENTS_ONLINE = 0, AGENTS_AVAILABLE = 1, AGENTS_ON_CALL = 2, AGENTS_NON_PRODUCTIVE = 3, AGENTS_AFTER_CONTACT_WORK = 4, AGENTS_ERROR = 5, AGENTS_STAFFED = 6, CONTACTS_IN_QUEUE = 7, OLDEST_CONTACT_AGE = 8, CONTACTS_SCHEDULED = 9, AGENTS_ON_CONTACT = 10, SLOTS_ACTIVE = 11, SLOTS_AVAILABLE = 12 }

	export enum CurrentMetricUnit { SECONDS = 0, COUNT = 1, PERCENT = 2 }

	export enum Channel { VOICE = 0, CHAT = 1 }

	export enum Grouping { QUEUE = 0, CHANNEL = 1 }

	export interface GetFederationTokenResponse {

		/** Contains credentials to use for federation. */
		Credentials?: Credentials | null;
	}


	/** Contains credentials to use for federation. */
	export interface Credentials {
		AccessToken?: string | null;
		AccessTokenExpiration?: Date | null;
		RefreshToken?: string | null;
		RefreshTokenExpiration?: Date | null;
	}

	export interface UserNotFoundException {
	}

	export interface GetMetricDataResponse {
		NextToken?: string | null;
		MetricResults?: Array<HistoricalMetricResult> | null;
	}


	/** Contains information about the historical metrics retrieved. */
	export interface HistoricalMetricResult {

		/** Contains information about the dimensions for a set of metrics. */
		Dimensions?: Dimensions | null;
		Collections?: Array<HistoricalMetricData> | null;
	}


	/** Contains the data for a historical metric. */
	export interface HistoricalMetricData {

		/** Contains information about a historical metric. */
		Metric?: HistoricalMetric | null;
		Value?: number | null;
	}


	/** Contains information about a historical metric. */
	export interface HistoricalMetric {

		/** The historical metric names. */
		Name?: HistoricalMetricName | null;

		/** Contains information about the threshold for service level metrics. */
		Threshold?: Threshold | null;
		Statistic?: HistoricalMetricStatistic | null;
		Unit?: CurrentMetricUnit | null;
	}

	export enum HistoricalMetricName { CONTACTS_QUEUED = 0, CONTACTS_HANDLED = 1, CONTACTS_ABANDONED = 2, CONTACTS_CONSULTED = 3, CONTACTS_AGENT_HUNG_UP_FIRST = 4, CONTACTS_HANDLED_INCOMING = 5, CONTACTS_HANDLED_OUTBOUND = 6, CONTACTS_HOLD_ABANDONS = 7, CONTACTS_TRANSFERRED_IN = 8, CONTACTS_TRANSFERRED_OUT = 9, CONTACTS_TRANSFERRED_IN_FROM_QUEUE = 10, CONTACTS_TRANSFERRED_OUT_FROM_QUEUE = 11, CONTACTS_MISSED = 12, CALLBACK_CONTACTS_HANDLED = 13, API_CONTACTS_HANDLED = 14, OCCUPANCY = 15, HANDLE_TIME = 16, AFTER_CONTACT_WORK_TIME = 17, QUEUED_TIME = 18, ABANDON_TIME = 19, QUEUE_ANSWER_TIME = 20, HOLD_TIME = 21, INTERACTION_TIME = 22, INTERACTION_AND_HOLD_TIME = 23, SERVICE_LEVEL = 24 }


	/** Contains information about the threshold for service level metrics. */
	export interface Threshold {
		Comparison?: ThresholdComparison | null;
		ThresholdValue?: number | null;
	}

	export enum ThresholdComparison { LT = 0 }

	export enum HistoricalMetricStatistic { SUM = 0, MAX = 1, AVG = 2 }

	export interface ListContactFlowsResponse {
		ContactFlowSummaryList?: Array<ContactFlowSummary> | null;
		NextToken?: string | null;
	}


	/** Contains summary information about a contact flow. */
	export interface ContactFlowSummary {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
		ContactFlowType?: ContactFlowSummaryContactFlowType | null;
	}

	export enum ContactFlowSummaryContactFlowType { CONTACT_FLOW = 0, CUSTOMER_QUEUE = 1, CUSTOMER_HOLD = 2, CUSTOMER_WHISPER = 3, AGENT_HOLD = 4, AGENT_WHISPER = 5, OUTBOUND_WHISPER = 6, AGENT_TRANSFER = 7, QUEUE_TRANSFER = 8 }

	export enum ContactFlowType { CONTACT_FLOW = 0, CUSTOMER_QUEUE = 1, CUSTOMER_HOLD = 2, CUSTOMER_WHISPER = 3, AGENT_HOLD = 4, AGENT_WHISPER = 5, OUTBOUND_WHISPER = 6, AGENT_TRANSFER = 7, QUEUE_TRANSFER = 8 }

	export interface ListHoursOfOperationsResponse {
		HoursOfOperationSummaryList?: Array<HoursOfOperationSummary> | null;
		NextToken?: string | null;
	}


	/** Contains summary information about hours of operation for a contact center. */
	export interface HoursOfOperationSummary {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
	}

	export interface ListPhoneNumbersResponse {
		PhoneNumberSummaryList?: Array<PhoneNumberSummary> | null;
		NextToken?: string | null;
	}


	/** Contains summary information about a phone number for a contact center. */
	export interface PhoneNumberSummary {
		Id?: string | null;
		Arn?: string | null;
		PhoneNumber?: string | null;
		PhoneNumberType?: PhoneNumberSummaryPhoneNumberType | null;
		PhoneNumberCountryCode?: PhoneNumberSummaryPhoneNumberCountryCode | null;
	}

	export enum PhoneNumberSummaryPhoneNumberType { TOLL_FREE = 0, DID = 1 }

	export enum PhoneNumberSummaryPhoneNumberCountryCode { AF = 0, AL = 1, DZ = 2, AS = 3, AD = 4, AO = 5, AI = 6, AQ = 7, AG = 8, AR = 9, AM = 10, AW = 11, AU = 12, AT = 13, AZ = 14, BS = 15, BH = 16, BD = 17, BB = 18, BY = 19, BE = 20, BZ = 21, BJ = 22, BM = 23, BT = 24, BO = 25, BA = 26, BW = 27, BR = 28, IO = 29, VG = 30, BN = 31, BG = 32, BF = 33, BI = 34, KH = 35, CM = 36, CA = 37, CV = 38, KY = 39, CF = 40, TD = 41, CL = 42, CN = 43, CX = 44, CC = 45, CO = 46, KM = 47, CK = 48, CR = 49, HR = 50, CU = 51, CW = 52, CY = 53, CZ = 54, CD = 55, DK = 56, DJ = 57, DM = 58, DO = 59, TL = 60, EC = 61, EG = 62, SV = 63, GQ = 64, ER = 65, EE = 66, ET = 67, FK = 68, FO = 69, FJ = 70, FI = 71, FR = 72, PF = 73, GA = 74, GM = 75, GE = 76, DE = 77, GH = 78, GI = 79, GR = 80, GL = 81, GD = 82, GU = 83, GT = 84, GG = 85, GN = 86, GW = 87, GY = 88, HT = 89, HN = 90, HK = 91, HU = 92, IS = 93, IN = 94, ID = 95, IR = 96, IQ = 97, IE = 98, IM = 99, IL = 100, IT = 101, CI = 102, JM = 103, JP = 104, JE = 105, JO = 106, KZ = 107, KE = 108, KI = 109, KW = 110, KG = 111, LA = 112, LV = 113, LB = 114, LS = 115, LR = 116, LY = 117, LI = 118, LT = 119, LU = 120, MO = 121, MK = 122, MG = 123, MW = 124, MY = 125, MV = 126, ML = 127, MT = 128, MH = 129, MR = 130, MU = 131, YT = 132, MX = 133, FM = 134, MD = 135, MC = 136, MN = 137, ME = 138, MS = 139, MA = 140, MZ = 141, MM = 142, NA = 143, NR = 144, NP = 145, NL = 146, AN = 147, NC = 148, NZ = 149, NI = 150, NE = 151, NG = 152, NU = 153, KP = 154, MP = 155, NO = 156, OM = 157, PK = 158, PW = 159, PA = 160, PG = 161, PY = 162, PE = 163, PH = 164, PN = 165, PL = 166, PT = 167, PR = 168, QA = 169, CG = 170, RE = 171, RO = 172, RU = 173, RW = 174, BL = 175, SH = 176, KN = 177, LC = 178, MF = 179, PM = 180, VC = 181, WS = 182, SM = 183, ST = 184, SA = 185, SN = 186, RS = 187, SC = 188, SL = 189, SG = 190, SX = 191, SK = 192, SI = 193, SB = 194, SO = 195, ZA = 196, KR = 197, ES = 198, LK = 199, SD = 200, SR = 201, SJ = 202, SZ = 203, SE = 204, CH = 205, SY = 206, TW = 207, TJ = 208, TZ = 209, TH = 210, TG = 211, TK = 212, TO = 213, TT = 214, TN = 215, TR = 216, TM = 217, TC = 218, TV = 219, VI = 220, UG = 221, UA = 222, AE = 223, GB = 224, US = 225, UY = 226, UZ = 227, VU = 228, VA = 229, VE = 230, VN = 231, WF = 232, EH = 233, YE = 234, ZM = 235, ZW = 236 }

	export enum PhoneNumberType { TOLL_FREE = 0, DID = 1 }

	export enum PhoneNumberCountryCode { AF = 0, AL = 1, DZ = 2, AS = 3, AD = 4, AO = 5, AI = 6, AQ = 7, AG = 8, AR = 9, AM = 10, AW = 11, AU = 12, AT = 13, AZ = 14, BS = 15, BH = 16, BD = 17, BB = 18, BY = 19, BE = 20, BZ = 21, BJ = 22, BM = 23, BT = 24, BO = 25, BA = 26, BW = 27, BR = 28, IO = 29, VG = 30, BN = 31, BG = 32, BF = 33, BI = 34, KH = 35, CM = 36, CA = 37, CV = 38, KY = 39, CF = 40, TD = 41, CL = 42, CN = 43, CX = 44, CC = 45, CO = 46, KM = 47, CK = 48, CR = 49, HR = 50, CU = 51, CW = 52, CY = 53, CZ = 54, CD = 55, DK = 56, DJ = 57, DM = 58, DO = 59, TL = 60, EC = 61, EG = 62, SV = 63, GQ = 64, ER = 65, EE = 66, ET = 67, FK = 68, FO = 69, FJ = 70, FI = 71, FR = 72, PF = 73, GA = 74, GM = 75, GE = 76, DE = 77, GH = 78, GI = 79, GR = 80, GL = 81, GD = 82, GU = 83, GT = 84, GG = 85, GN = 86, GW = 87, GY = 88, HT = 89, HN = 90, HK = 91, HU = 92, IS = 93, IN = 94, ID = 95, IR = 96, IQ = 97, IE = 98, IM = 99, IL = 100, IT = 101, CI = 102, JM = 103, JP = 104, JE = 105, JO = 106, KZ = 107, KE = 108, KI = 109, KW = 110, KG = 111, LA = 112, LV = 113, LB = 114, LS = 115, LR = 116, LY = 117, LI = 118, LT = 119, LU = 120, MO = 121, MK = 122, MG = 123, MW = 124, MY = 125, MV = 126, ML = 127, MT = 128, MH = 129, MR = 130, MU = 131, YT = 132, MX = 133, FM = 134, MD = 135, MC = 136, MN = 137, ME = 138, MS = 139, MA = 140, MZ = 141, MM = 142, NA = 143, NR = 144, NP = 145, NL = 146, AN = 147, NC = 148, NZ = 149, NI = 150, NE = 151, NG = 152, NU = 153, KP = 154, MP = 155, NO = 156, OM = 157, PK = 158, PW = 159, PA = 160, PG = 161, PY = 162, PE = 163, PH = 164, PN = 165, PL = 166, PT = 167, PR = 168, QA = 169, CG = 170, RE = 171, RO = 172, RU = 173, RW = 174, BL = 175, SH = 176, KN = 177, LC = 178, MF = 179, PM = 180, VC = 181, WS = 182, SM = 183, ST = 184, SA = 185, SN = 186, RS = 187, SC = 188, SL = 189, SG = 190, SX = 191, SK = 192, SI = 193, SB = 194, SO = 195, ZA = 196, KR = 197, ES = 198, LK = 199, SD = 200, SR = 201, SJ = 202, SZ = 203, SE = 204, CH = 205, SY = 206, TW = 207, TJ = 208, TZ = 209, TH = 210, TG = 211, TK = 212, TO = 213, TT = 214, TN = 215, TR = 216, TM = 217, TC = 218, TV = 219, VI = 220, UG = 221, UA = 222, AE = 223, GB = 224, US = 225, UY = 226, UZ = 227, VU = 228, VA = 229, VE = 230, VN = 231, WF = 232, EH = 233, YE = 234, ZM = 235, ZW = 236 }

	export interface ListQueuesResponse {
		QueueSummaryList?: Array<QueueSummary> | null;
		NextToken?: string | null;
	}


	/** Contains summary information about a queue. */
	export interface QueueSummary {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
		QueueType?: QueueSummaryQueueType | null;
	}

	export enum QueueSummaryQueueType { STANDARD = 0, AGENT = 1 }

	export enum QueueType { STANDARD = 0, AGENT = 1 }

	export interface ListRoutingProfilesResponse {
		RoutingProfileSummaryList?: Array<RoutingProfileSummary> | null;
		NextToken?: string | null;
	}


	/** Contains summary information about a routing profile. */
	export interface RoutingProfileSummary {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
	}

	export interface ListSecurityProfilesResponse {
		SecurityProfileSummaryList?: Array<SecurityProfileSummary> | null;
		NextToken?: string | null;
	}


	/** Contains information about a security profile. */
	export interface SecurityProfileSummary {
		Id?: string | null;
		Arn?: string | null;
		Name?: string | null;
	}

	export interface ListTagsForResourceResponse {
		tags?: TagMap | null;
	}

	export interface ListUserHierarchyGroupsResponse {
		UserHierarchyGroupSummaryList?: Array<HierarchyGroupSummary> | null;
		NextToken?: string | null;
	}

	export interface ListUsersResponse {
		UserSummaryList?: Array<UserSummary> | null;
		NextToken?: string | null;
	}


	/** Contains summary information about a user. */
	export interface UserSummary {
		Id?: string | null;
		Arn?: string | null;
		Username?: string | null;
	}

	export interface StartChatContactResponse {
		ContactId?: string | null;
		ParticipantId?: string | null;
		ParticipantToken?: string | null;
	}

	export interface StartOutboundVoiceContactResponse {
		ContactId?: string | null;
	}

	export interface DestinationNotAllowedException {
	}

	export interface OutboundContactNotPermittedException {
	}

	export interface StopContactResponse {
	}

	export interface ContactNotFoundException {
	}

	export interface UpdateContactAttributesResponse {
	}


	/** A chat message. */
	export interface ChatMessage {
		ContentType: string;
		Content: string;
	}

	export enum Comparison { LT = 0 }

	export interface CreateUserRequest {
		Username: string;
		Password?: string | null;

		/** Contains information about the identity of a user. */
		IdentityInfo?: UserIdentityInfo | null;

		/**
		 * Contains information about the phone configuration settings for a user.
		 * Required
		 */
		PhoneConfig: UserPhoneConfig;
		DirectoryUserId?: string | null;
		SecurityProfileIds: Array<string>;
		RoutingProfileId: string;
		HierarchyGroupId?: string | null;
		Tags?: TagMap | null;
	}

	export enum Unit { SECONDS = 0, COUNT = 1, PERCENT = 2 }

	export interface DeleteUserRequest {
	}

	export interface DescribeUserHierarchyGroupRequest {
	}

	export interface DescribeUserHierarchyStructureRequest {
	}

	export interface DescribeUserRequest {
	}


	/** Contains the filter to apply when retrieving metrics. */
	export interface Filters {
		Queues?: Array<string> | null;
		Channels?: Array<Channel> | null;
	}

	export interface GetContactAttributesRequest {
	}

	export interface GetCurrentMetricDataRequest {

		/**
		 * Contains the filter to apply when retrieving metrics.
		 * Required
		 */
		Filters: Filters;
		Groupings?: Array<Grouping> | null;
		CurrentMetrics: Array<CurrentMetric>;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export interface GetFederationTokenRequest {
	}

	export interface GetMetricDataRequest {
		StartTime: Date;
		EndTime: Date;

		/**
		 * Contains the filter to apply when retrieving metrics.
		 * Required
		 */
		Filters: Filters;
		Groupings?: Array<Grouping> | null;
		HistoricalMetrics: Array<HistoricalMetric>;
		NextToken?: string | null;
		MaxResults?: number | null;
	}

	export enum Statistic { SUM = 0, MAX = 1, AVG = 2 }

	export interface ListContactFlowsRequest {
	}

	export interface ListHoursOfOperationsRequest {
	}

	export interface ListPhoneNumbersRequest {
	}

	export interface ListQueuesRequest {
	}

	export interface ListRoutingProfilesRequest {
	}

	export interface ListSecurityProfilesRequest {
	}

	export interface ListTagsForResourceRequest {
	}

	export interface ListUserHierarchyGroupsRequest {
	}

	export interface ListUsersRequest {
	}


	/** The customer's details. */
	export interface ParticipantDetails {
		DisplayName: string;
	}

	export interface StartChatContactRequest {
		InstanceId: string;
		ContactFlowId: string;
		Attributes?: Attributes | null;

		/**
		 * The customer's details.
		 * Required
		 */
		ParticipantDetails: ParticipantDetails;

		/** A chat message. */
		InitialMessage?: ChatMessage | null;
		ClientToken?: string | null;
	}

	export interface StartOutboundVoiceContactRequest {
		DestinationPhoneNumber: string;
		ContactFlowId: string;
		InstanceId: string;
		ClientToken?: string | null;
		SourcePhoneNumber?: string | null;
		QueueId?: string | null;
		Attributes?: Attributes | null;
	}

	export interface StopContactRequest {
		ContactId: string;
		InstanceId: string;
	}

	export interface TagResourceRequest {
		tags: TagMap;
	}

	export interface UntagResourceRequest {
	}

	export interface UpdateContactAttributesRequest {
		InitialContactId: string;
		InstanceId: string;
		Attributes: Attributes;
	}

	export interface UpdateUserHierarchyRequest {
		HierarchyGroupId?: string | null;
	}

	export interface UpdateUserIdentityInfoRequest {

		/**
		 * Contains information about the identity of a user.
		 * Required
		 */
		IdentityInfo: UserIdentityInfo;
	}

	export interface UpdateUserPhoneConfigRequest {

		/**
		 * Contains information about the phone configuration settings for a user.
		 * Required
		 */
		PhoneConfig: UserPhoneConfig;
	}

	export interface UpdateUserRoutingProfileRequest {
		RoutingProfileId: string;
	}

	export interface UpdateUserSecurityProfilesRequest {
		SecurityProfileIds: Array<string>;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a user account for the specified Amazon Connect instance.
		 * Put users/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {CreateUserResponse} Success
		 */
		CreateUser(InstanceId: string, requestBody: CreateUserPutBody): Observable<CreateUserResponse> {
			return this.http.put<CreateUserResponse>(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a user account from the specified Amazon Connect instance.
		 * Delete users/{InstanceId}/{UserId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} UserId The identifier of the user.
		 * @return {void} Success
		 */
		DeleteUser(InstanceId: string, UserId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Describes the specified user account. You can find the instance ID in the console (it’s the final part of the ARN). The console does not display the user IDs. Instead, list the users and note the IDs provided in the output.
		 * Get users/{InstanceId}/{UserId}
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {DescribeUserResponse} Success
		 */
		DescribeUser(UserId: string, InstanceId: string): Observable<DescribeUserResponse> {
			return this.http.get<DescribeUserResponse>(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)), {});
		}

		/**
		 * Describes the specified hierarchy group.
		 * Get user-hierarchy-groups/{InstanceId}/{HierarchyGroupId}
		 * @param {string} HierarchyGroupId The identifier of the hierarchy group.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {DescribeUserHierarchyGroupResponse} Success
		 */
		DescribeUserHierarchyGroup(HierarchyGroupId: string, InstanceId: string): Observable<DescribeUserHierarchyGroupResponse> {
			return this.http.get<DescribeUserHierarchyGroupResponse>(this.baseUri + 'user-hierarchy-groups/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (HierarchyGroupId == null ? '' : encodeURIComponent(HierarchyGroupId)), {});
		}

		/**
		 * Describes the hierarchy structure of the specified Amazon Connect instance.
		 * Get user-hierarchy-structure/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {DescribeUserHierarchyStructureResponse} Success
		 */
		DescribeUserHierarchyStructure(InstanceId: string): Observable<DescribeUserHierarchyStructureResponse> {
			return this.http.get<DescribeUserHierarchyStructureResponse>(this.baseUri + 'user-hierarchy-structure/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), {});
		}

		/**
		 * Retrieves the contact attributes for the specified contact.
		 * Get contact/attributes/{InstanceId}/{InitialContactId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} InitialContactId The identifier of the initial contact.
		 * @return {GetContactAttributesResponse} Success
		 */
		GetContactAttributes(InstanceId: string, InitialContactId: string): Observable<GetContactAttributesResponse> {
			return this.http.get<GetContactAttributesResponse>(this.baseUri + 'contact/attributes/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (InitialContactId == null ? '' : encodeURIComponent(InitialContactId)), {});
		}

		/**
		 * <p>Gets the real-time metric data from the specified Amazon Connect instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-reports.html">Real-time Metrics Reports</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Post metrics/current/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetCurrentMetricDataResponse} Success
		 */
		GetCurrentMetricData(InstanceId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetCurrentMetricDataPostBody): Observable<GetCurrentMetricDataResponse> {
			return this.http.post<GetCurrentMetricDataResponse>(this.baseUri + 'metrics/current/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves a token for federation.
		 * Get user/federate/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {GetFederationTokenResponse} Success
		 */
		GetFederationToken(InstanceId: string): Observable<GetFederationTokenResponse> {
			return this.http.get<GetFederationTokenResponse>(this.baseUri + 'user/federate/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)), {});
		}

		/**
		 * <p>Gets historical metric data from the specified Amazon Connect instance.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics.html">Historical Metrics Reports</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
		 * Post metrics/historical/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {GetMetricDataResponse} Success
		 */
		GetMetricData(InstanceId: string, MaxResults: string | null | undefined, NextToken: string | null | undefined, requestBody: GetMetricDataPostBody): Observable<GetMetricDataResponse> {
			return this.http.post<GetMetricDataResponse>(this.baseUri + 'metrics/historical/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Provides information about the contact flows for the specified Amazon Connect instance.
		 * Get contact-flows-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {Array<ContactFlowType>} contactFlowTypes The type of contact flow.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximimum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListContactFlowsResponse} Success
		 */
		ListContactFlows(InstanceId: string, contactFlowTypes: Array<ContactFlowType> | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListContactFlowsResponse> {
			return this.http.get<ListContactFlowsResponse>(this.baseUri + 'contact-flows-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&' + contactFlowTypes.map(z => `contactFlowTypes=${z}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provides information about the hours of operation for the specified Amazon Connect instance.
		 * Get hours-of-operations-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximimum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHoursOfOperationsResponse} Success
		 */
		ListHoursOfOperations(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListHoursOfOperationsResponse> {
			return this.http.get<ListHoursOfOperationsResponse>(this.baseUri + 'hours-of-operations-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provides information about the phone numbers for the specified Amazon Connect instance.
		 * Get phone-numbers-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {Array<PhoneNumberType>} phoneNumberTypes The type of phone number.
		 * @param {Array<PhoneNumberCountryCode>} phoneNumberCountryCodes The ISO country code.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximimum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListPhoneNumbersResponse} Success
		 */
		ListPhoneNumbers(InstanceId: string, phoneNumberTypes: Array<PhoneNumberType> | null | undefined, phoneNumberCountryCodes: Array<PhoneNumberCountryCode> | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListPhoneNumbersResponse> {
			return this.http.get<ListPhoneNumbersResponse>(this.baseUri + 'phone-numbers-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&' + phoneNumberTypes.map(z => `phoneNumberTypes=${z}`).join('&') + '&' + phoneNumberCountryCodes.map(z => `phoneNumberCountryCodes=${z}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provides information about the queues for the specified Amazon Connect instance.
		 * Get queues-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {Array<QueueType>} queueTypes The type of queue.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximimum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQueuesResponse} Success
		 */
		ListQueues(InstanceId: string, queueTypes: Array<QueueType> | null | undefined, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListQueuesResponse> {
			return this.http.get<ListQueuesResponse>(this.baseUri + 'queues-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&' + queueTypes.map(z => `queueTypes=${z}`).join('&') + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provides summary information about the routing profiles for the specified Amazon Connect instance.
		 * Get routing-profiles-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximimum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListRoutingProfilesResponse} Success
		 */
		ListRoutingProfiles(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListRoutingProfilesResponse> {
			return this.http.get<ListRoutingProfilesResponse>(this.baseUri + 'routing-profiles-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provides summary information about the security profiles for the specified Amazon Connect instance.
		 * Get security-profiles-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximimum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListSecurityProfilesResponse} Success
		 */
		ListSecurityProfiles(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListSecurityProfilesResponse> {
			return this.http.get<ListSecurityProfilesResponse>(this.baseUri + 'security-profiles-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Lists the tags for the specified resource.
		 * Get tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {ListTagsForResourceResponse} Success
		 */
		ListTagsForResource(resourceArn: string): Observable<ListTagsForResourceResponse> {
			return this.http.get<ListTagsForResourceResponse>(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), {});
		}

		/**
		 * <p>Adds the specified tags to the specified resource.</p> <p>The supported resource type is users.</p>
		 * Post tags/{resourceArn}
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @return {void} Success
		 */
		TagResource(resourceArn: string, requestBody: TagResourcePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Provides summary information about the hierarchy groups for the specified Amazon Connect instance.
		 * Get user-hierarchy-groups-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximimum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUserHierarchyGroupsResponse} Success
		 */
		ListUserHierarchyGroups(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListUserHierarchyGroupsResponse> {
			return this.http.get<ListUserHierarchyGroupsResponse>(this.baseUri + 'user-hierarchy-groups-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * Provides summary information about the users for the specified Amazon Connect instance.
		 * Get users-summary/{InstanceId}
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @param {string} nextToken The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
		 * @param {number} maxResults The maximimum number of results to return per page.
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListUsersResponse} Success
		 */
		ListUsers(InstanceId: string, nextToken: string | null | undefined, maxResults: number | null | undefined, MaxResults: string | null | undefined, NextToken: string | null | undefined): Observable<ListUsersResponse> {
			return this.http.get<ListUsersResponse>(this.baseUri + 'users-summary/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + maxResults + '&MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), {});
		}

		/**
		 * <p>Initiates a contact flow to start a new chat for the customer. Response of this API provides a token required to obtain credentials from the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API in the Amazon Connect Participant Service.</p> <p>When a new chat contact is successfully created, clients need to subscribe to the participant’s connection for the created chat within 5 minutes. This is achieved by invoking <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> with WEBSOCKET and CONNECTION_CREDENTIALS. </p>
		 * Put contact/chat
		 * @return {StartChatContactResponse} Success
		 */
		StartChatContact(requestBody: StartChatContactPutBody): Observable<StartChatContactResponse> {
			return this.http.put<StartChatContactResponse>(this.baseUri + 'contact/chat', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>Initiates a contact flow to place an outbound call to a customer.</p> <p>There is a 60 second dialing timeout for this operation. If the call is not connected after 60 seconds, it fails.</p>
		 * Put contact/outbound-voice
		 * @return {StartOutboundVoiceContactResponse} Success
		 */
		StartOutboundVoiceContact(requestBody: StartOutboundVoiceContactPutBody): Observable<StartOutboundVoiceContactResponse> {
			return this.http.put<StartOutboundVoiceContactResponse>(this.baseUri + 'contact/outbound-voice', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Ends the specified contact.
		 * Post contact/stop
		 * @return {StopContactResponse} Success
		 */
		StopContact(requestBody: StopContactPostBody): Observable<StopContactResponse> {
			return this.http.post<StopContactResponse>(this.baseUri + 'contact/stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified tags from the specified resource.
		 * Delete tags/{resourceArn}#tagKeys
		 * @param {string} resourceArn The Amazon Resource Name (ARN) of the resource.
		 * @param {Array<string>} tagKeys The tag keys.
		 * @return {void} Success
		 */
		UntagResource(resourceArn: string, tagKeys: Array<string>): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tags/' + (resourceArn == null ? '' : encodeURIComponent(resourceArn)) + '#tagKeys&' + tagKeys.map(z => `tagKeys=${encodeURIComponent(z)}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * <p>Creates or updates the contact attributes associated with the specified contact.</p> <p>You can add or update attributes for both ongoing and completed contacts. For example, you can update the customer's name or the reason the customer called while the call is active, or add notes about steps that the agent took during the call that are displayed to the next agent that takes the call. You can also update attributes for a contact using data from your CRM application and save the data with the contact in Amazon Connect. You could also flag calls for additional analysis, such as legal review or identifying abusive callers.</p> <p>Contact attributes are available in Amazon Connect for 24 months, and are then deleted.</p> <p> <b>Important:</b> You cannot use the operation to update attributes for contacts that occurred prior to the release of the API, September 12, 2018. You can update attributes only for contacts that started after the release of the API. If you attempt to update attributes for a contact that occurred prior to the release of the API, a 400 error is returned. This applies also to queued callbacks that were initiated prior to the release of the API but are still active in your instance.</p>
		 * Post contact/attributes
		 * @return {UpdateContactAttributesResponse} Success
		 */
		UpdateContactAttributes(requestBody: UpdateContactAttributesPostBody): Observable<UpdateContactAttributesResponse> {
			return this.http.post<UpdateContactAttributesResponse>(this.baseUri + 'contact/attributes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Assigns the specified hierarchy group to the specified user.
		 * Post users/{InstanceId}/{UserId}/hierarchy
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {void} Success
		 */
		UpdateUserHierarchy(UserId: string, InstanceId: string, requestBody: UpdateUserHierarchyPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/hierarchy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the identity information for the specified user.
		 * Post users/{InstanceId}/{UserId}/identity-info
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {void} Success
		 */
		UpdateUserIdentityInfo(UserId: string, InstanceId: string, requestBody: UpdateUserIdentityInfoPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/identity-info', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates the phone configuration settings for the specified user.
		 * Post users/{InstanceId}/{UserId}/phone-config
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {void} Success
		 */
		UpdateUserPhoneConfig(UserId: string, InstanceId: string, requestBody: UpdateUserPhoneConfigPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/phone-config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Assigns the specified routing profile to the specified user.
		 * Post users/{InstanceId}/{UserId}/routing-profile
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {void} Success
		 */
		UpdateUserRoutingProfile(UserId: string, InstanceId: string, requestBody: UpdateUserRoutingProfilePostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/routing-profile', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Assigns the specified security profiles to the specified user.
		 * Post users/{InstanceId}/{UserId}/security-profiles
		 * @param {string} UserId The identifier of the user account.
		 * @param {string} InstanceId The identifier of the Amazon Connect instance.
		 * @return {void} Success
		 */
		UpdateUserSecurityProfiles(UserId: string, InstanceId: string, requestBody: UpdateUserSecurityProfilesPostBody): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (InstanceId == null ? '' : encodeURIComponent(InstanceId)) + '/' + (UserId == null ? '' : encodeURIComponent(UserId)) + '/security-profiles', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	export interface CreateUserPutBody {

		/**
		 * The user name for the account. For instances not using SAML for identity management, the user name can include up to 20 characters. If you are using SAML for identity management, the user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		Username: string;

		/**
		 * The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.
		 * Pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,64}$/
		 */
		Password?: string | null;

		/** Contains information about the identity of a user. */
		IdentityInfo?: CreateUserPutBodyIdentityInfo | null;

		/**
		 * Contains information about the phone configuration settings for a user.
		 * Required
		 */
		PhoneConfig: CreateUserPutBodyPhoneConfig;

		/** <p>The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users. If you include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity information is used to authenticate users from your directory.</p> <p>This parameter is required if you are using an existing directory for identity management in Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for identity management and include this parameter, an error is returned.</p> */
		DirectoryUserId?: string | null;

		/**
		 * The identifier of the security profile for the user.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		SecurityProfileIds: Array<string>;

		/**
		 * The identifier of the routing profile for the user.
		 * Required
		 */
		RoutingProfileId: string;

		/** The identifier of the hierarchy group for the user. */
		HierarchyGroupId?: string | null;

		/** One or more tags. */
		Tags?: {[id: string]: string } | null;
	}

	export interface CreateUserPutBodyIdentityInfo {
		FirstName?: string | null;
		LastName?: string | null;
		Email?: string | null;
	}

	export interface CreateUserPutBodyPhoneConfig {
		PhoneType?: PhoneType | null;
		AutoAccept?: boolean | null;
		AfterContactWorkTimeLimit?: number | null;
		DeskPhoneNumber?: string | null;
	}

	export interface GetCurrentMetricDataPostBody {

		/**
		 * Contains the filter to apply when retrieving metrics.
		 * Required
		 */
		Filters: GetCurrentMetricDataPostBodyFilters;

		/**
		 * <p>The grouping applied to the metrics returned. For example, when grouped by <code>QUEUE</code>, the metrics returned apply to each queue rather than aggregated for all queues. If you group by <code>CHANNEL</code>, you should include a Channels filter. The only supported channel is <code>VOICE</code>.</p> <p>If no <code>Grouping</code> is included in the request, a summary of metrics is returned.</p>
		 * Maximum items: 2
		 */
		Groupings?: Array<Grouping> | null;

		/**
		 * <p>The metrics to retrieve. Specify the name and unit for each metric. The following metrics are available:</p> <dl> <dt>AGENTS_AFTER_CONTACT_WORK</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_AVAILABLE</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_ERROR</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_NON_PRODUCTIVE</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_ON_CALL</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_ON_CONTACT</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_ONLINE</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>AGENTS_STAFFED</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>CONTACTS_IN_QUEUE</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>CONTACTS_SCHEDULED</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>OLDEST_CONTACT_AGE</dt> <dd> <p>Unit: SECONDS</p> </dd> <dt>SLOTS_ACTIVE</dt> <dd> <p>Unit: COUNT</p> </dd> <dt>SLOTS_AVAILABLE</dt> <dd> <p>Unit: COUNT</p> </dd> </dl>
		 * Required
		 */
		CurrentMetrics: Array<CurrentMetric>;

		/** <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p> <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use the token must use the same request parameters as the request that generated the token.</p> */
		NextToken?: string | null;

		/**
		 * The maximimum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}

	export interface GetCurrentMetricDataPostBodyFilters {
		Queues?: Array<string> | null;
		Channels?: Array<Channel> | null;
	}

	export interface GetMetricDataPostBody {

		/**
		 * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes, such as 10:05, 10:10, 10:15.</p> <p>The start time cannot be earlier than 24 hours before the time of the request. Historical metrics are available only for 24 hours.</p>
		 * Required
		 */
		StartTime: Date;

		/**
		 * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the retrieval of historical metrics data. The time must be specified using an interval of 5 minutes, such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p> <p>The time range between the start and end time must be less than 24 hours.</p>
		 * Required
		 */
		EndTime: Date;

		/**
		 * Contains the filter to apply when retrieving metrics.
		 * Required
		 */
		Filters: GetMetricDataPostBodyFilters;

		/**
		 * <p>The grouping applied to the metrics returned. For example, when results are grouped by queue, the metrics returned are grouped by queue. The values returned apply to the metrics for each queue rather than aggregated for all queues.</p> <p>The only supported grouping is <code>QUEUE</code>.</p> <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
		 * Maximum items: 2
		 */
		Groupings?: Array<Grouping> | null;

		/**
		 * <p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The following historical metrics are available:</p> <dl> <dt>ABANDON_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>AFTER_CONTACT_WORK_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>API_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CALLBACK_CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_ABANDONED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_CONSULTED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED_INCOMING</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HANDLED_OUTBOUND</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_HOLD_ABANDONS</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_MISSED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_QUEUED</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_IN</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt> <dd> <p>Unit: COUNT</p> <p>Statistic: SUM</p> </dd> <dt>HANDLE_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>HOLD_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>INTERACTION_AND_HOLD_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>INTERACTION_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>OCCUPANCY</dt> <dd> <p>Unit: PERCENT</p> <p>Statistic: AVG</p> </dd> <dt>QUEUE_ANSWER_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: AVG</p> </dd> <dt>QUEUED_TIME</dt> <dd> <p>Unit: SECONDS</p> <p>Statistic: MAX</p> </dd> <dt>SERVICE_LEVEL</dt> <dd> <p>Unit: PERCENT</p> <p>Statistic: AVG</p> <p>Threshold: Only "Less than" comparisons are supported, with the following service level thresholds: 15, 20, 25, 30, 45, 60, 90, 120, 180, 240, 300, 600</p> </dd> </dl>
		 * Required
		 */
		HistoricalMetrics: Array<HistoricalMetric>;

		/** The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results. */
		NextToken?: string | null;

		/**
		 * The maximimum number of results to return per page.
		 * Minimum: 1
		 * Maximum: 100
		 */
		MaxResults?: number | null;
	}

	export interface GetMetricDataPostBodyFilters {
		Queues?: Array<string> | null;
		Channels?: Array<Channel> | null;
	}

	export interface TagResourcePostBody {

		/**
		 * One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
		 * Required
		 */
		tags: {[id: string]: string };
	}

	export interface StartChatContactPutBody {

		/**
		 * The identifier of the Amazon Connect instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * The identifier of the contact flow for the chat.
		 * Required
		 * Max length: 500
		 */
		ContactFlowId: string;

		/** <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes. </p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p> */
		Attributes?: {[id: string]: string } | null;

		/**
		 * The customer's details.
		 * Required
		 */
		ParticipantDetails: StartChatContactPutBodyParticipantDetails;

		/** A chat message. */
		InitialMessage?: StartChatContactPutBodyInitialMessage | null;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
		 * Max length: 500
		 */
		ClientToken?: string | null;
	}

	export interface StartChatContactPutBodyParticipantDetails {
		DisplayName?: string | null;
	}

	export interface StartChatContactPutBodyInitialMessage {
		ContentType?: string | null;
		Content?: string | null;
	}

	export interface StartOutboundVoiceContactPutBody {

		/**
		 * The phone number of the customer, in E.164 format.
		 * Required
		 */
		DestinationPhoneNumber: string;

		/**
		 * The identifier of the contact flow for the outbound call.
		 * Required
		 * Max length: 500
		 */
		ContactFlowId: string;

		/**
		 * The identifier of the Amazon Connect instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. The token is valid for 7 days after creation. If a contact is already started, the contact ID is returned. If the contact is disconnected, a new contact is started.
		 * Max length: 500
		 */
		ClientToken?: string | null;

		/** The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue. */
		SourcePhoneNumber?: string | null;

		/** The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number. */
		QueueId?: string | null;

		/** <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.</p> <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p> */
		Attributes?: {[id: string]: string } | null;
	}

	export interface StopContactPostBody {

		/**
		 * The ID of the contact.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		ContactId: string;

		/**
		 * The identifier of the Amazon Connect instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;
	}

	export interface UpdateContactAttributesPostBody {

		/**
		 * The identifier of the contact. This is the identifier of the contact associated with the first interaction with the contact center.
		 * Required
		 * Max length: 256
		 * Min length: 1
		 */
		InitialContactId: string;

		/**
		 * The identifier of the Amazon Connect instance.
		 * Required
		 * Max length: 100
		 * Min length: 1
		 */
		InstanceId: string;

		/**
		 * <p>The Amazon Connect attributes. These attributes can be accessed in contact flows just like any other contact attributes.</p> <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys can include only alphanumeric, dash, and underscore characters.</p>
		 * Required
		 */
		Attributes: {[id: string]: string };
	}

	export interface UpdateUserHierarchyPostBody {

		/** The identifier of the hierarchy group. */
		HierarchyGroupId?: string | null;
	}

	export interface UpdateUserIdentityInfoPostBody {

		/**
		 * Contains information about the identity of a user.
		 * Required
		 */
		IdentityInfo: UpdateUserIdentityInfoPostBodyIdentityInfo;
	}

	export interface UpdateUserIdentityInfoPostBodyIdentityInfo {
		FirstName?: string | null;
		LastName?: string | null;
		Email?: string | null;
	}

	export interface UpdateUserPhoneConfigPostBody {

		/**
		 * Contains information about the phone configuration settings for a user.
		 * Required
		 */
		PhoneConfig: UpdateUserPhoneConfigPostBodyPhoneConfig;
	}

	export interface UpdateUserPhoneConfigPostBodyPhoneConfig {
		PhoneType?: PhoneType | null;
		AutoAccept?: boolean | null;
		AfterContactWorkTimeLimit?: number | null;
		DeskPhoneNumber?: string | null;
	}

	export interface UpdateUserRoutingProfilePostBody {

		/**
		 * The identifier of the routing profile for the user.
		 * Required
		 */
		RoutingProfileId: string;
	}

	export interface UpdateUserSecurityProfilesPostBody {

		/**
		 * The identifiers of the security profiles for the user.
		 * Required
		 * Minimum items: 1
		 * Maximum items: 10
		 */
		SecurityProfileIds: Array<string>;
	}

}

