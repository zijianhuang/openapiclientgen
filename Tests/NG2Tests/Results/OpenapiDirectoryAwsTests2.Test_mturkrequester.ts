import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {
	export interface AcceptQualificationRequestResponse {
	}

	export interface AcceptQualificationRequestRequest {
		QualificationRequestId: string;
		IntegerValue?: number;
	}


	/** Amazon Mechanical Turk is temporarily unable to process your request. Try your call again. */
	export interface ServiceFault {
		Message?: string;
		TurkErrorCode?: string;
	}


	/** Your request is invalid. */
	export interface RequestError {
		Message?: string;
		TurkErrorCode?: string;
	}

	export interface ApproveAssignmentResponse {
	}

	export interface ApproveAssignmentRequest {
		AssignmentId: string;
		RequesterFeedback?: string;
		OverrideRejection?: boolean;
	}

	export interface AssociateQualificationWithWorkerResponse {
	}

	export interface AssociateQualificationWithWorkerRequest {
		QualificationTypeId: string;
		WorkerId: string;
		IntegerValue?: number;
		SendNotification?: boolean;
	}

	export interface CreateAdditionalAssignmentsForHITResponse {
	}

	export interface CreateAdditionalAssignmentsForHITRequest {
		HITId: string;
		NumberOfAdditionalAssignments: number;
		UniqueRequestToken?: string;
	}

	export interface CreateHITResponse {

		/** The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT. */
		HIT?: HIT;
	}


	/**  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT. */
	export interface HIT {
		HITId?: string;
		HITTypeId?: string;
		HITGroupId?: string;
		HITLayoutId?: string;
		CreationTime?: Date;
		Title?: string;
		Description?: string;
		Question?: string;
		Keywords?: string;
		HITStatus?: HITHITStatus;
		MaxAssignments?: number;

		/**
		 * A string representing a currency amount.
		 * Pattern: ^[0-9]+(\.)?[0-9]{0,2}$
		 */
		Reward?: string;
		AutoApprovalDelayInSeconds?: number;
		Expiration?: Date;
		AssignmentDurationInSeconds?: number;
		RequesterAnnotation?: string;
		QualificationRequirements?: Array<QualificationRequirement>;
		HITReviewStatus?: HITHITReviewStatus;
		NumberOfAssignmentsPending?: number;
		NumberOfAssignmentsAvailable?: number;
		NumberOfAssignmentsCompleted?: number;
	}

	export enum HITHITStatus { Assignable = 0, Unassignable = 1, Reviewable = 2, Reviewing = 3, Disposed = 4 }


	/**  The QualificationRequirement data structure describes a Qualification that a Worker must have before the Worker is allowed to accept a HIT. A requirement may optionally state that a Worker must have the Qualification in order to preview the HIT, or see the HIT in search results.  */
	export interface QualificationRequirement {
		QualificationTypeId: string;
		Comparator: QualificationRequirementComparator;
		IntegerValues?: Array<number>;
		LocaleValues?: Array<Locale>;
		RequiredToPreview?: boolean;
		ActionsGuarded?: QualificationRequirementActionsGuarded;
	}

	export enum QualificationRequirementComparator { LessThan = 0, LessThanOrEqualTo = 1, GreaterThan = 2, GreaterThanOrEqualTo = 3, EqualTo = 4, NotEqualTo = 5, Exists = 6, DoesNotExist = 7, In = 8, NotIn = 9 }


	/** The Locale data structure represents a geographical region or location. */
	export interface Locale {
		Country: string;
		Subdivision?: string;
	}

	export enum QualificationRequirementActionsGuarded { Accept = 0, PreviewAndAccept = 1, DiscoverPreviewAndAccept = 2 }

	export enum HITHITReviewStatus { NotReviewed = 0, MarkedForReview = 1, ReviewedAppropriate = 2, ReviewedInappropriate = 3 }

	export interface CreateHITRequest {
		MaxAssignments?: number;
		AutoApprovalDelayInSeconds?: number;
		LifetimeInSeconds: number;
		AssignmentDurationInSeconds: number;

		/**
		 * A string representing a currency amount.
		 * Required
		 * Pattern: ^[0-9]+(\.)?[0-9]{0,2}$
		 */
		Reward: string;
		Title: string;
		Keywords?: string;
		Description: string;
		Question?: string;
		RequesterAnnotation?: string;
		QualificationRequirements?: Array<QualificationRequirement>;
		UniqueRequestToken?: string;

		/** HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. */
		AssignmentReviewPolicy?: ReviewPolicy;

		/** HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. */
		HITReviewPolicy?: ReviewPolicy;
		HITLayoutId?: string;
		HITLayoutParameters?: Array<HITLayoutParameter>;
	}


	/**  HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT.  */
	export interface ReviewPolicy {
		PolicyName: string;
		Parameters?: Array<PolicyParameter>;
	}


	/**  Name of the parameter from the Review policy.  */
	export interface PolicyParameter {
		Key?: string;
		Values?: Array<string>;
		MapEntries?: Array<ParameterMapEntry>;
	}


	/**  This data structure is the data type for the AnswerKey parameter of the ScoreMyKnownAnswers/2011-09-01 Review Policy.  */
	export interface ParameterMapEntry {
		Key?: string;
		Values?: Array<string>;
	}


	/**  The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT.  */
	export interface HITLayoutParameter {
		Name: string;
		Value: string;
	}

	export interface CreateHITTypeResponse {
		HITTypeId?: string;
	}

	export interface CreateHITTypeRequest {
		AutoApprovalDelayInSeconds?: number;
		AssignmentDurationInSeconds: number;

		/**
		 * A string representing a currency amount.
		 * Required
		 * Pattern: ^[0-9]+(\.)?[0-9]{0,2}$
		 */
		Reward: string;
		Title: string;
		Keywords?: string;
		Description: string;
		QualificationRequirements?: Array<QualificationRequirement>;
	}

	export interface CreateHITWithHITTypeResponse {

		/** The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT. */
		HIT?: HIT;
	}

	export interface CreateHITWithHITTypeRequest {
		HITTypeId: string;
		MaxAssignments?: number;
		LifetimeInSeconds: number;
		Question?: string;
		RequesterAnnotation?: string;
		UniqueRequestToken?: string;

		/** HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. */
		AssignmentReviewPolicy?: ReviewPolicy;

		/** HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. */
		HITReviewPolicy?: ReviewPolicy;
		HITLayoutId?: string;
		HITLayoutParameters?: Array<HITLayoutParameter>;
	}

	export interface CreateQualificationTypeResponse {

		/** The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. */
		QualificationType?: QualificationType;
	}


	/**  The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test.  */
	export interface QualificationType {
		QualificationTypeId?: string;
		CreationTime?: Date;
		Name?: string;
		Description?: string;
		Keywords?: string;
		QualificationTypeStatus?: QualificationTypeQualificationTypeStatus;
		Test?: string;
		TestDurationInSeconds?: number;
		AnswerKey?: string;
		RetryDelayInSeconds?: number;
		IsRequestable?: boolean;
		AutoGranted?: boolean;
		AutoGrantedValue?: number;
	}

	export enum QualificationTypeQualificationTypeStatus { Active = 0, Inactive = 1 }

	export interface CreateQualificationTypeRequest {
		Name: string;
		Keywords?: string;
		Description: string;
		QualificationTypeStatus: QualificationTypeQualificationTypeStatus;
		RetryDelayInSeconds?: number;
		Test?: string;
		AnswerKey?: string;
		TestDurationInSeconds?: number;
		AutoGranted?: boolean;
		AutoGrantedValue?: number;
	}

	export interface CreateWorkerBlockResponse {
	}

	export interface CreateWorkerBlockRequest {
		WorkerId: string;
		Reason: string;
	}

	export interface DeleteHITResponse {
	}

	export interface DeleteHITRequest {
		HITId: string;
	}

	export interface DeleteQualificationTypeResponse {
	}

	export interface DeleteQualificationTypeRequest {
		QualificationTypeId: string;
	}

	export interface DeleteWorkerBlockResponse {
	}

	export interface DeleteWorkerBlockRequest {
		WorkerId: string;
		Reason?: string;
	}

	export interface DisassociateQualificationFromWorkerResponse {
	}

	export interface DisassociateQualificationFromWorkerRequest {
		WorkerId: string;
		QualificationTypeId: string;
		Reason?: string;
	}

	export interface GetAccountBalanceResponse {

		/**
		 * A string representing a currency amount.
		 * Pattern: ^[0-9]+(\.)?[0-9]{0,2}$
		 */
		AvailableBalance?: string;

		/**
		 * A string representing a currency amount.
		 * Pattern: ^[0-9]+(\.)?[0-9]{0,2}$
		 */
		OnHoldBalance?: string;
	}

	export interface GetAccountBalanceRequest {
	}

	export interface GetAssignmentResponse {

		/** The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval. */
		Assignment?: Assignment;

		/** The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT. */
		HIT?: HIT;
	}


	/**  The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval.  */
	export interface Assignment {
		AssignmentId?: string;
		WorkerId?: string;
		HITId?: string;
		AssignmentStatus?: AssignmentAssignmentStatus;
		AutoApprovalTime?: Date;
		AcceptTime?: Date;
		SubmitTime?: Date;
		ApprovalTime?: Date;
		RejectionTime?: Date;
		Deadline?: Date;
		Answer?: string;
		RequesterFeedback?: string;
	}

	export enum AssignmentAssignmentStatus { Submitted = 0, Approved = 1, Rejected = 2 }

	export interface GetAssignmentRequest {
		AssignmentId: string;
	}

	export interface GetFileUploadURLResponse {
		FileUploadURL?: string;
	}

	export interface GetFileUploadURLRequest {
		AssignmentId: string;
		QuestionIdentifier: string;
	}

	export interface GetHITResponse {

		/** The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT. */
		HIT?: HIT;
	}

	export interface GetHITRequest {
		HITId: string;
	}

	export interface GetQualificationScoreResponse {

		/** The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score). */
		Qualification?: Qualification;
	}


	/** The Qualification data structure represents a Qualification assigned to a user, including the Qualification type and the value (score). */
	export interface Qualification {
		QualificationTypeId?: string;
		WorkerId?: string;
		GrantTime?: Date;
		IntegerValue?: number;

		/** The Locale data structure represents a geographical region or location. */
		LocaleValue?: Locale;
		Status?: QualificationStatus;
	}

	export enum QualificationStatus { Granted = 0, Revoked = 1 }

	export interface GetQualificationScoreRequest {
		QualificationTypeId: string;
		WorkerId: string;
	}

	export interface GetQualificationTypeResponse {

		/** The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. */
		QualificationType?: QualificationType;
	}

	export interface GetQualificationTypeRequest {
		QualificationTypeId: string;
	}

	export interface ListAssignmentsForHITResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		NumResults?: number;
		Assignments?: Array<Assignment>;
	}

	export interface ListAssignmentsForHITRequest {
		HITId: string;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		MaxResults?: number;
		AssignmentStatuses?: Array<AssignmentStatus>;
	}

	export enum AssignmentStatus { Submitted = 0, Approved = 1, Rejected = 2 }

	export interface ListBonusPaymentsResponse {
		NumResults?: number;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		BonusPayments?: Array<BonusPayment>;
	}


	/** An object representing a Bonus payment paid to a Worker. */
	export interface BonusPayment {
		WorkerId?: string;

		/**
		 * A string representing a currency amount.
		 * Pattern: ^[0-9]+(\.)?[0-9]{0,2}$
		 */
		BonusAmount?: string;
		AssignmentId?: string;
		Reason?: string;
		GrantTime?: Date;
	}

	export interface ListBonusPaymentsRequest {
		HITId?: string;
		AssignmentId?: string;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListHITsResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		NumResults?: number;
		HITs?: Array<HIT>;
	}

	export interface ListHITsRequest {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListHITsForQualificationTypeResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		NumResults?: number;
		HITs?: Array<HIT>;
	}

	export interface ListHITsForQualificationTypeRequest {
		QualificationTypeId: string;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListQualificationRequestsResponse {
		NumResults?: number;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		QualificationRequests?: Array<QualificationRequest>;
	}


	/**  The QualificationRequest data structure represents a request a Worker has made for a Qualification.  */
	export interface QualificationRequest {
		QualificationRequestId?: string;
		QualificationTypeId?: string;
		WorkerId?: string;
		Test?: string;
		Answer?: string;
		SubmitTime?: Date;
	}

	export interface ListQualificationRequestsRequest {
		QualificationTypeId?: string;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListQualificationTypesResponse {
		NumResults?: number;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		QualificationTypes?: Array<QualificationType>;
	}

	export interface ListQualificationTypesRequest {
		Query?: string;
		MustBeRequestable: boolean;
		MustBeOwnedByCaller?: boolean;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListReviewPolicyResultsForHITResponse {
		HITId?: string;

		/** HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. */
		AssignmentReviewPolicy?: ReviewPolicy;

		/** HIT Review Policy data structures represent HIT review policies, which you specify when you create a HIT. */
		HITReviewPolicy?: ReviewPolicy;

		/** Contains both ReviewResult and ReviewAction elements for a particular HIT. */
		AssignmentReviewReport?: ReviewReport;

		/** Contains both ReviewResult and ReviewAction elements for a particular HIT. */
		HITReviewReport?: ReviewReport;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
	}


	/**  Contains both ReviewResult and ReviewAction elements for a particular HIT.  */
	export interface ReviewReport {
		ReviewResults?: Array<ReviewResultDetail>;
		ReviewActions?: Array<ReviewActionDetail>;
	}


	/**  This data structure is returned multiple times for each result specified in the Review Policy.  */
	export interface ReviewResultDetail {
		ActionId?: string;
		SubjectId?: string;
		SubjectType?: string;
		QuestionId?: string;
		Key?: string;
		Value?: string;
	}


	/**  Both the AssignmentReviewReport and the HITReviewReport elements contains the ReviewActionDetail data structure. This structure is returned multiple times for each action specified in the Review Policy.  */
	export interface ReviewActionDetail {
		ActionId?: string;
		ActionName?: string;
		TargetId?: string;
		TargetType?: string;
		Status?: ReviewActionDetailStatus;
		CompleteTime?: Date;
		Result?: string;
		ErrorCode?: string;
	}

	export enum ReviewActionDetailStatus { Intended = 0, Succeeded = 1, Failed = 2, Cancelled = 3 }

	export interface ListReviewPolicyResultsForHITRequest {
		HITId: string;
		PolicyLevels?: Array<ReviewPolicyLevel>;
		RetrieveActions?: boolean;
		RetrieveResults?: boolean;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		MaxResults?: number;
	}

	export enum ReviewPolicyLevel { Assignment = 0, HIT = 1 }

	export interface ListReviewableHITsResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		NumResults?: number;
		HITs?: Array<HIT>;
	}

	export interface ListReviewableHITsRequest {
		HITTypeId?: string;
		Status?: ListReviewableHITsRequestStatus;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		MaxResults?: number;
	}

	export enum ListReviewableHITsRequestStatus { Reviewable = 0, Reviewing = 1 }

	export interface ListWorkerBlocksResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		NumResults?: number;
		WorkerBlocks?: Array<WorkerBlock>;
	}


	/**  The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block.  */
	export interface WorkerBlock {
		WorkerId?: string;
		Reason?: string;
	}

	export interface ListWorkerBlocksRequest {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		MaxResults?: number;
	}

	export interface ListWorkersWithQualificationTypeResponse {

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		NumResults?: number;
		Qualifications?: Array<Qualification>;
	}

	export interface ListWorkersWithQualificationTypeRequest {
		QualificationTypeId: string;
		Status?: QualificationStatus;

		/**
		 * If the previous response was incomplete (because there is more data to retrieve), Amazon Mechanical Turk returns a pagination token in the response. You can use this pagination token to retrieve the next set of results.
		 * Max length: 255
		 * Min length: 1
		 */
		NextToken?: string;
		MaxResults?: number;
	}

	export interface NotifyWorkersResponse {
		NotifyWorkersFailureStatuses?: Array<NotifyWorkersFailureStatus>;
	}


	/**  When MTurk encounters an issue with notifying the Workers you specified, it returns back this object with failure details.  */
	export interface NotifyWorkersFailureStatus {
		NotifyWorkersFailureCode?: NotifyWorkersFailureStatusNotifyWorkersFailureCode;
		NotifyWorkersFailureMessage?: string;
		WorkerId?: string;
	}

	export enum NotifyWorkersFailureStatusNotifyWorkersFailureCode { SoftFailure = 0, HardFailure = 1 }

	export interface NotifyWorkersRequest {
		Subject: string;
		MessageText: string;
		WorkerIds: Array<string>;
	}

	export interface RejectAssignmentResponse {
	}

	export interface RejectAssignmentRequest {
		AssignmentId: string;
		RequesterFeedback: string;
	}

	export interface RejectQualificationRequestResponse {
	}

	export interface RejectQualificationRequestRequest {
		QualificationRequestId: string;
		Reason?: string;
	}

	export interface SendBonusResponse {
	}

	export interface SendBonusRequest {
		WorkerId: string;

		/**
		 * A string representing a currency amount.
		 * Required
		 * Pattern: ^[0-9]+(\.)?[0-9]{0,2}$
		 */
		BonusAmount: string;
		AssignmentId: string;
		Reason: string;
		UniqueRequestToken?: string;
	}

	export interface SendTestEventNotificationResponse {
	}

	export interface SendTestEventNotificationRequest {

		/**
		 * The NotificationSpecification data structure describes a HIT event notification for a HIT type.
		 * Required
		 */
		Notification: NotificationSpecification;
		TestEventType: EventType;
	}


	/** The NotificationSpecification data structure describes a HIT event notification for a HIT type. */
	export interface NotificationSpecification {
		Destination: string;
		Transport: NotificationSpecificationTransport;
		Version: string;
		EventTypes: Array<EventType>;
	}

	export enum NotificationSpecificationTransport { Email = 0, SQS = 1, SNS = 2 }

	export enum EventType { AssignmentAccepted = 0, AssignmentAbandoned = 1, AssignmentReturned = 2, AssignmentSubmitted = 3, AssignmentRejected = 4, AssignmentApproved = 5, HITCreated = 6, HITExpired = 7, HITReviewable = 8, HITExtended = 9, HITDisposed = 10, Ping = 11 }

	export interface UpdateExpirationForHITResponse {
	}

	export interface UpdateExpirationForHITRequest {
		HITId: string;
		ExpireAt: Date;
	}

	export interface UpdateHITReviewStatusResponse {
	}

	export interface UpdateHITReviewStatusRequest {
		HITId: string;
		Revert?: boolean;
	}

	export interface UpdateHITTypeOfHITResponse {
	}

	export interface UpdateHITTypeOfHITRequest {
		HITId: string;
		HITTypeId: string;
	}

	export interface UpdateNotificationSettingsResponse {
	}

	export interface UpdateNotificationSettingsRequest {
		HITTypeId: string;

		/** The NotificationSpecification data structure describes a HIT event notification for a HIT type. */
		Notification?: NotificationSpecification;
		Active?: boolean;
	}

	export interface UpdateQualificationTypeResponse {

		/** The QualificationType data structure represents a Qualification type, a description of a property of a Worker that must match the requirements of a HIT for the Worker to be able to accept the HIT. The type also describes how a Worker can obtain a Qualification of that type, such as through a Qualification test. */
		QualificationType?: QualificationType;
	}

	export interface UpdateQualificationTypeRequest {
		QualificationTypeId: string;
		Description?: string;
		QualificationTypeStatus?: QualificationTypeQualificationTypeStatus;
		Test?: string;
		AnswerKey?: string;
		TestDurationInSeconds?: number;
		RetryDelayInSeconds?: number;
		AutoGranted?: boolean;
		AutoGrantedValue?: number;
	}

	export enum Comparator { LessThan = 0, LessThanOrEqualTo = 1, GreaterThan = 2, GreaterThanOrEqualTo = 3, EqualTo = 4, NotEqualTo = 5, Exists = 6, DoesNotExist = 7, In = 8, NotIn = 9 }

	export enum QualificationTypeStatus { Active = 0, Inactive = 1 }

	export enum HITStatus { Assignable = 0, Unassignable = 1, Reviewable = 2, Reviewing = 3, Disposed = 4 }

	export enum HITReviewStatus { NotReviewed = 0, MarkedForReview = 1, ReviewedAppropriate = 2, ReviewedInappropriate = 3 }

	export enum HITAccessActions { Accept = 0, PreviewAndAccept = 1, DiscoverPreviewAndAccept = 2 }

	export enum ReviewableHITStatus { Reviewable = 0, Reviewing = 1 }

	export enum NotificationTransport { Email = 0, SQS = 1, SNS = 2 }

	export enum NotifyWorkersFailureCode { SoftFailure = 0, HardFailure = 1 }

	export enum ReviewActionStatus { Intended = 0, Succeeded = 1, Failed = 2, Cancelled = 3 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * <p> The <code>AcceptQualificationRequest</code> operation approves a Worker's request for a Qualification. </p> <p> Only the owner of the Qualification type can grant a Qualification request for that type. </p> <p> A successful request for the <code>AcceptQualificationRequest</code> operation returns with no errors and an empty body. </p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest
		 * @return {AcceptQualificationRequestResponse} Success
		 */
		AcceptQualificationRequest(requestBody: AcceptQualificationRequestRequest): Observable<AcceptQualificationRequestResponse> {
			return this.http.post<AcceptQualificationRequestResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.AcceptQualificationRequest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>ApproveAssignment</code> operation approves the results of a completed assignment. </p> <p> Approving an assignment initiates two payments from the Requester's Amazon.com account </p> <ul> <li> <p> The Worker who submitted the results is paid the reward specified in the HIT. </p> </li> <li> <p> Amazon Mechanical Turk fees are debited. </p> </li> </ul> <p> If the Requester's account does not have adequate funds for these payments, the call to ApproveAssignment returns an exception, and the approval is not processed. You can include an optional feedback message with the approval, which the Worker can see in the Status section of the web site. </p> <p> You can also call this operation for assignments that were previous rejected and approve them by explicitly overriding the previous rejection. This only works on rejected assignments that were submitted within the previous 30 days and only if the assignment's related HIT has not been deleted. </p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment
		 * @return {ApproveAssignmentResponse} Success
		 */
		ApproveAssignment(requestBody: ApproveAssignmentRequest): Observable<ApproveAssignmentResponse> {
			return this.http.post<ApproveAssignmentResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ApproveAssignment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>AssociateQualificationWithWorker</code> operation gives a Worker a Qualification. <code>AssociateQualificationWithWorker</code> does not require that the Worker submit a Qualification request. It gives the Qualification directly to the Worker. </p> <p> You can only assign a Qualification of a Qualification type that you created (using the <code>CreateQualificationType</code> operation). </p> <note> <p> Note: <code>AssociateQualificationWithWorker</code> does not affect any pending Qualification requests for the Qualification by the Worker. If you assign a Qualification to a Worker, then later grant a Qualification request made by the Worker, the granting of the request may modify the Qualification score. To resolve a pending Qualification request without affecting the Qualification the Worker already has, reject the request with the <code>RejectQualificationRequest</code> operation. </p> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker
		 * @return {AssociateQualificationWithWorkerResponse} Success
		 */
		AssociateQualificationWithWorker(requestBody: AssociateQualificationWithWorkerRequest): Observable<AssociateQualificationWithWorkerResponse> {
			return this.http.post<AssociateQualificationWithWorkerResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.AssociateQualificationWithWorker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>CreateAdditionalAssignmentsForHIT</code> operation increases the maximum number of assignments of an existing HIT. </p> <p> To extend the maximum number of assignments, specify the number of additional assignments.</p> <note> <ul> <li> <p>HITs created with fewer than 10 assignments cannot be extended to have 10 or more assignments. Attempting to add assignments in a way that brings the total number of assignments for a HIT from fewer than 10 assignments to 10 or more assignments will result in an <code>AWS.MechanicalTurk.InvalidMaximumAssignmentsIncrease</code> exception.</p> </li> <li> <p>HITs that were created before July 22, 2015 cannot be extended. Attempting to extend HITs that were created before July 22, 2015 will result in an <code>AWS.MechanicalTurk.HITTooOldForExtension</code> exception. </p> </li> </ul> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT
		 * @return {CreateAdditionalAssignmentsForHITResponse} Success
		 */
		CreateAdditionalAssignmentsForHIT(requestBody: CreateAdditionalAssignmentsForHITRequest): Observable<CreateAdditionalAssignmentsForHITResponse> {
			return this.http.post<CreateAdditionalAssignmentsForHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateAdditionalAssignmentsForHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p>The <code>CreateHIT</code> operation creates a new Human Intelligence Task (HIT). The new HIT is made available for Workers to find and accept on the Amazon Mechanical Turk website. </p> <p> This operation allows you to specify a new HIT by passing in values for the properties of the HIT, such as its title, reward amount and number of assignments. When you pass these values to <code>CreateHIT</code>, a new HIT is created for you, with a new <code>HITTypeID</code>. The HITTypeID can be used to create additional HITs in the future without needing to specify common parameters such as the title, description and reward amount each time.</p> <p> An alternative way to create HITs is to first generate a HITTypeID using the <code>CreateHITType</code> operation and then call the <code>CreateHITWithHITType</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHIT also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>.</p> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT
		 * @return {CreateHITResponse} Success
		 */
		CreateHIT(requestBody: CreateHITRequest): Observable<CreateHITResponse> {
			return this.http.post<CreateHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>CreateHITType</code> operation creates a new HIT type. This operation allows you to define a standard set of HIT properties to use when creating HITs. If you register a HIT type with values that match an existing HIT type, the HIT type ID of the existing type will be returned.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType
		 * @return {CreateHITTypeResponse} Success
		 */
		CreateHITType(requestBody: CreateHITTypeRequest): Observable<CreateHITTypeResponse> {
			return this.http.post<CreateHITTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>CreateHITWithHITType</code> operation creates a new Human Intelligence Task (HIT) using an existing HITTypeID generated by the <code>CreateHITType</code> operation. </p> <p> This is an alternative way to create HITs from the <code>CreateHIT</code> operation. This is the recommended best practice for Requesters who are creating large numbers of HITs. </p> <p>CreateHITWithHITType also supports several ways to provide question data: by providing a value for the <code>Question</code> parameter that fully specifies the contents of the HIT, or by providing a <code>HitLayoutId</code> and associated <code>HitLayoutParameters</code>. </p> <note> <p> If a HIT is created with 10 or more maximum assignments, there is an additional fee. For more information, see <a href="https://requester.mturk.com/pricing">Amazon Mechanical Turk Pricing</a>. </p> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType
		 * @return {CreateHITWithHITTypeResponse} Success
		 */
		CreateHITWithHITType(requestBody: CreateHITWithHITTypeRequest): Observable<CreateHITWithHITTypeResponse> {
			return this.http.post<CreateHITWithHITTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateHITWithHITType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>CreateQualificationType</code> operation creates a new Qualification type, which is represented by a <code>QualificationType</code> data structure.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType
		 * @return {CreateQualificationTypeResponse} Success
		 */
		CreateQualificationType(requestBody: CreateQualificationTypeRequest): Observable<CreateQualificationTypeResponse> {
			return this.http.post<CreateQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateQualificationType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>CreateWorkerBlock</code> operation allows you to prevent a Worker from working on your HITs. For example, you can block a Worker who is producing poor quality work. You can block up to 100,000 Workers.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock
		 * @return {CreateWorkerBlockResponse} Success
		 */
		CreateWorkerBlock(requestBody: CreateWorkerBlockRequest): Observable<CreateWorkerBlockResponse> {
			return this.http.post<CreateWorkerBlockResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.CreateWorkerBlock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>DeleteHIT</code> operation is used to delete HIT that is no longer needed. Only the Requester who created the HIT can delete it. </p> <p> You can only dispose of HITs that are in the <code>Reviewable</code> state, with all of their submitted assignments already either approved or rejected. If you call the DeleteHIT operation on a HIT that is not in the <code>Reviewable</code> state (for example, that has not expired, or still has active assignments), or on a HIT that is Reviewable but without all of its submitted assignments already approved or rejected, the service will return an error. </p> <note> <ul> <li> <p> HITs are automatically disposed of after 120 days. </p> </li> <li> <p> After you dispose of a HIT, you can no longer approve the HIT's rejected assignments. </p> </li> <li> <p> Disposed HITs are not returned in results for the ListHITs operation. </p> </li> <li> <p> Disposing HITs can improve the performance of operations such as ListReviewableHITs and ListHITs. </p> </li> </ul> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT
		 * @return {DeleteHITResponse} Success
		 */
		DeleteHIT(requestBody: DeleteHITRequest): Observable<DeleteHITResponse> {
			return this.http.post<DeleteHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>DeleteQualificationType</code> deletes a Qualification type and deletes any HIT types that are associated with the Qualification type. </p> <p>This operation does not revoke Qualifications already assigned to Workers because the Qualifications might be needed for active HITs. If there are any pending requests for the Qualification type, Amazon Mechanical Turk rejects those requests. After you delete a Qualification type, you can no longer use it to create HITs or HIT types.</p> <note> <p>DeleteQualificationType must wait for all the HITs that use the deleted Qualification type to be deleted before completing. It may take up to 48 hours before DeleteQualificationType completes and the unique name of the Qualification type is available for reuse with CreateQualificationType.</p> </note>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType
		 * @return {DeleteQualificationTypeResponse} Success
		 */
		DeleteQualificationType(requestBody: DeleteQualificationTypeRequest): Observable<DeleteQualificationTypeResponse> {
			return this.http.post<DeleteQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteQualificationType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>DeleteWorkerBlock</code> operation allows you to reinstate a blocked Worker to work on your HITs. This operation reverses the effects of the CreateWorkerBlock operation. You need the Worker ID to use this operation. If the Worker ID is missing or invalid, this operation fails and returns the message “WorkerId is invalid.” If the specified Worker is not blocked, this operation returns successfully.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock
		 * @return {DeleteWorkerBlockResponse} Success
		 */
		DeleteWorkerBlock(requestBody: DeleteWorkerBlockRequest): Observable<DeleteWorkerBlockResponse> {
			return this.http.post<DeleteWorkerBlockResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.DeleteWorkerBlock', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>DisassociateQualificationFromWorker</code> revokes a previously granted Qualification from a user. </p> <p> You can provide a text message explaining why the Qualification was revoked. The user who had the Qualification can see this message. </p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker
		 * @return {DisassociateQualificationFromWorkerResponse} Success
		 */
		DisassociateQualificationFromWorker(requestBody: DisassociateQualificationFromWorkerRequest): Observable<DisassociateQualificationFromWorkerResponse> {
			return this.http.post<DisassociateQualificationFromWorkerResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>GetAccountBalance</code> operation retrieves the amount of money in your Amazon Mechanical Turk account.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance
		 * @return {GetAccountBalanceResponse} Success
		 */
		GetAccountBalance(requestBody: GetAccountBalanceRequest): Observable<GetAccountBalanceResponse> {
			return this.http.post<GetAccountBalanceResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetAccountBalance', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>GetAssignment</code> operation retrieves the details of the specified Assignment.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment
		 * @return {GetAssignmentResponse} Success
		 */
		GetAssignment(requestBody: GetAssignmentRequest): Observable<GetAssignmentResponse> {
			return this.http.post<GetAssignmentResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetAssignment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>GetFileUploadURL</code> operation generates and returns a temporary URL. You use the temporary URL to retrieve a file uploaded by a Worker as an answer to a FileUploadAnswer question for a HIT. The temporary URL is generated the instant the GetFileUploadURL operation is called, and is valid for 60 seconds. You can get a temporary file upload URL any time until the HIT is disposed. After the HIT is disposed, any uploaded files are deleted, and cannot be retrieved. Pending Deprecation on December 12, 2017. The Answer Specification structure will no longer support the <code>FileUploadAnswer</code> element to be used for the QuestionForm data structure. Instead, we recommend that Requesters who want to create HITs asking Workers to upload files to use Amazon S3.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL
		 * @return {GetFileUploadURLResponse} Success
		 */
		GetFileUploadURL(requestBody: GetFileUploadURLRequest): Observable<GetFileUploadURLResponse> {
			return this.http.post<GetFileUploadURLResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetFileUploadURL', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>GetHIT</code> operation retrieves the details of the specified HIT.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT
		 * @return {GetHITResponse} Success
		 */
		GetHIT(requestBody: GetHITRequest): Observable<GetHITResponse> {
			return this.http.post<GetHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>GetQualificationScore</code> operation returns the value of a Worker's Qualification for a given Qualification type. </p> <p> To get a Worker's Qualification, you must know the Worker's ID. The Worker's ID is included in the assignment data returned by the <code>ListAssignmentsForHIT</code> operation. </p> <p>Only the owner of a Qualification type can query the value of a Worker's Qualification of that type.</p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore
		 * @return {GetQualificationScoreResponse} Success
		 */
		GetQualificationScore(requestBody: GetQualificationScoreRequest): Observable<GetQualificationScoreResponse> {
			return this.http.post<GetQualificationScoreResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationScore', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>GetQualificationType</code>operation retrieves information about a Qualification type using its ID.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType
		 * @return {GetQualificationTypeResponse} Success
		 */
		GetQualificationType(requestBody: GetQualificationTypeRequest): Observable<GetQualificationTypeResponse> {
			return this.http.post<GetQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.GetQualificationType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>ListAssignmentsForHIT</code> operation retrieves completed assignments for a HIT. You can use this operation to retrieve the results for a HIT. </p> <p> You can get assignments for a HIT at any time, even if the HIT is not yet Reviewable. If a HIT requested multiple assignments, and has received some results but has not yet become Reviewable, you can still retrieve the partial results with this operation. </p> <p> Use the AssignmentStatus parameter to control which set of assignments for a HIT are returned. The ListAssignmentsForHIT operation can return submitted assignments awaiting approval, or it can return assignments that have already been approved or rejected. You can set AssignmentStatus=Approved,Rejected to get assignments that have already been approved and rejected together in one result set. </p> <p> Only the Requester who created the HIT can retrieve the assignments for that HIT. </p> <p> Results are sorted and divided into numbered pages and the operation returns a single page of results. You can use the parameters of the operation to control sorting and pagination. </p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListAssignmentsForHITResponse} Success
		 */
		ListAssignmentsForHIT(MaxResults: string, NextToken: string, requestBody: ListAssignmentsForHITRequest): Observable<ListAssignmentsForHITResponse> {
			return this.http.post<ListAssignmentsForHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListAssignmentsForHIT?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListBonusPayments</code> operation retrieves the amounts of bonuses you have paid to Workers for a given HIT or assignment.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListBonusPaymentsResponse} Success
		 */
		ListBonusPayments(MaxResults: string, NextToken: string, requestBody: ListBonusPaymentsRequest): Observable<ListBonusPaymentsResponse> {
			return this.http.post<ListBonusPaymentsResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListBonusPayments?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListHITs</code> operation returns all of a Requester's HITs. The operation returns HITs of any status, except for HITs that have been deleted of with the DeleteHIT operation or that have been auto-deleted.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHITsResponse} Success
		 */
		ListHITs(MaxResults: string, NextToken: string, requestBody: ListHITsRequest): Observable<ListHITsResponse> {
			return this.http.post<ListHITsResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListHITsForQualificationType</code> operation returns the HITs that use the given Qualification type for a Qualification requirement. The operation returns HITs of any status, except for HITs that have been deleted with the <code>DeleteHIT</code> operation or that have been auto-deleted.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListHITsForQualificationTypeResponse} Success
		 */
		ListHITsForQualificationType(MaxResults: string, NextToken: string, requestBody: ListHITsForQualificationTypeRequest): Observable<ListHITsForQualificationTypeResponse> {
			return this.http.post<ListHITsForQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListHITsForQualificationType?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListQualificationRequests</code> operation retrieves requests for Qualifications of a particular Qualification type. The owner of the Qualification type calls this operation to poll for pending requests, and accepts them using the AcceptQualification operation.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQualificationRequestsResponse} Success
		 */
		ListQualificationRequests(MaxResults: string, NextToken: string, requestBody: ListQualificationRequestsRequest): Observable<ListQualificationRequestsResponse> {
			return this.http.post<ListQualificationRequestsResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationRequests?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListQualificationTypes</code> operation returns a list of Qualification types, filtered by an optional search term.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListQualificationTypesResponse} Success
		 */
		ListQualificationTypes(MaxResults: string, NextToken: string, requestBody: ListQualificationTypesRequest): Observable<ListQualificationTypesResponse> {
			return this.http.post<ListQualificationTypesResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListQualificationTypes?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results and the actions taken in the course of executing your Review Policies for a given HIT. For information about how to specify Review Policies when you call CreateHIT, see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both Assignment-level and HIT-level review results.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListReviewPolicyResultsForHITResponse} Success
		 */
		ListReviewPolicyResultsForHIT(MaxResults: string, NextToken: string, requestBody: ListReviewPolicyResultsForHITRequest): Observable<ListReviewPolicyResultsForHITResponse> {
			return this.http.post<ListReviewPolicyResultsForHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListReviewableHITs</code> operation retrieves the HITs with Status equal to Reviewable or Status equal to Reviewing that belong to the Requester calling the operation.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListReviewableHITsResponse} Success
		 */
		ListReviewableHITs(MaxResults: string, NextToken: string, requestBody: ListReviewableHITsRequest): Observable<ListReviewableHITsResponse> {
			return this.http.post<ListReviewableHITsResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListReviewableHITs?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListWorkersBlocks</code> operation retrieves a list of Workers who are blocked from working on your HITs.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkerBlocksResponse} Success
		 */
		ListWorkerBlocks(MaxResults: string, NextToken: string, requestBody: ListWorkerBlocksRequest): Observable<ListWorkerBlocksResponse> {
			return this.http.post<ListWorkerBlocksResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkerBlocks?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>ListWorkersWithQualificationType</code> operation returns all of the Workers that have been associated with a given Qualification type.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType
		 * @param {string} MaxResults Pagination limit
		 * @param {string} NextToken Pagination token
		 * @return {ListWorkersWithQualificationTypeResponse} Success
		 */
		ListWorkersWithQualificationType(MaxResults: string, NextToken: string, requestBody: ListWorkersWithQualificationTypeRequest): Observable<ListWorkersWithQualificationTypeResponse> {
			return this.http.post<ListWorkersWithQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.ListWorkersWithQualificationType?MaxResults=' + (MaxResults == null ? '' : encodeURIComponent(MaxResults)) + '&NextToken=' + (NextToken == null ? '' : encodeURIComponent(NextToken)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>NotifyWorkers</code> operation sends an email to one or more Workers that you specify with the Worker ID. You can specify up to 100 Worker IDs to send the same message with a single call to the NotifyWorkers operation. The NotifyWorkers operation will send a notification email to a Worker only if you have previously approved or rejected work from the Worker.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers
		 * @return {NotifyWorkersResponse} Success
		 */
		NotifyWorkers(requestBody: NotifyWorkersRequest): Observable<NotifyWorkersResponse> {
			return this.http.post<NotifyWorkersResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.NotifyWorkers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>RejectAssignment</code> operation rejects the results of a completed assignment. </p> <p> You can include an optional feedback message with the rejection, which the Worker can see in the Status section of the web site. When you include a feedback message with the rejection, it helps the Worker understand why the assignment was rejected, and can improve the quality of the results the Worker submits in the future. </p> <p> Only the Requester who created the HIT can reject an assignment for the HIT. </p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment
		 * @return {RejectAssignmentResponse} Success
		 */
		RejectAssignment(requestBody: RejectAssignmentRequest): Observable<RejectAssignmentResponse> {
			return this.http.post<RejectAssignmentResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.RejectAssignment', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>RejectQualificationRequest</code> operation rejects a user's request for a Qualification. </p> <p> You can provide a text message explaining why the request was rejected. The Worker who made the request can see this message.</p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest
		 * @return {RejectQualificationRequestResponse} Success
		 */
		RejectQualificationRequest(requestBody: RejectQualificationRequestRequest): Observable<RejectQualificationRequestResponse> {
			return this.http.post<RejectQualificationRequestResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.RejectQualificationRequest', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>SendBonus</code> operation issues a payment of money from your account to a Worker. This payment happens separately from the reward you pay to the Worker when you approve the Worker's assignment. The SendBonus operation requires the Worker's ID and the assignment ID as parameters to initiate payment of the bonus. You must include a message that explains the reason for the bonus payment, as the Worker may not be expecting the payment. Amazon Mechanical Turk collects a fee for bonus payments, similar to the HIT listing fee. This operation fails if your account does not have enough funds to pay for both the bonus and the fees.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus
		 * @return {SendBonusResponse} Success
		 */
		SendBonus(requestBody: SendBonusRequest): Observable<SendBonusResponse> {
			return this.http.post<SendBonusResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.SendBonus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>SendTestEventNotification</code> operation causes Amazon Mechanical Turk to send a notification message as if a HIT event occurred, according to the provided notification specification. This allows you to test notifications without setting up notifications for a real HIT type and trying to trigger them using the website. When you call this operation, the service attempts to send the test notification immediately.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification
		 * @return {SendTestEventNotificationResponse} Success
		 */
		SendTestEventNotification(requestBody: SendTestEventNotificationRequest): Observable<SendTestEventNotificationResponse> {
			return this.http.post<SendTestEventNotificationResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.SendTestEventNotification', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>UpdateExpirationForHIT</code> operation allows you update the expiration time of a HIT. If you update it to a time in the past, the HIT will be immediately expired.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT
		 * @return {UpdateExpirationForHITResponse} Success
		 */
		UpdateExpirationForHIT(requestBody: UpdateExpirationForHITRequest): Observable<UpdateExpirationForHITResponse> {
			return this.http.post<UpdateExpirationForHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateExpirationForHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>UpdateHITReviewStatus</code> operation updates the status of a HIT. If the status is Reviewable, this operation can update the status to Reviewing, or it can revert a Reviewing HIT back to the Reviewable status.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus
		 * @return {UpdateHITReviewStatusResponse} Success
		 */
		UpdateHITReviewStatus(requestBody: UpdateHITReviewStatusRequest): Observable<UpdateHITReviewStatusResponse> {
			return this.http.post<UpdateHITReviewStatusResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITReviewStatus', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>UpdateHITTypeOfHIT</code> operation allows you to change the HITType properties of a HIT. This operation disassociates the HIT from its old HITType properties and associates it with the new HITType properties. The HIT takes on the properties of the new HITType in place of the old ones.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT
		 * @return {UpdateHITTypeOfHITResponse} Success
		 */
		UpdateHITTypeOfHIT(requestBody: UpdateHITTypeOfHITRequest): Observable<UpdateHITTypeOfHITResponse> {
			return this.http.post<UpdateHITTypeOfHITResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateHITTypeOfHIT', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The <code>UpdateNotificationSettings</code> operation creates, updates, disables or re-enables notifications for a HIT type. If you call the UpdateNotificationSettings operation for a HIT type that already has a notification specification, the operation replaces the old specification with a new one. You can call the UpdateNotificationSettings operation to enable or disable notifications for the HIT type, without having to modify the notification specification itself by providing updates to the Active status without specifying a new notification specification. To change the Active status of a HIT type's notifications, the HIT type must already have a notification specification, or one must be provided in the same call to <code>UpdateNotificationSettings</code>.
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings
		 * @return {UpdateNotificationSettingsResponse} Success
		 */
		UpdateNotificationSettings(requestBody: UpdateNotificationSettingsRequest): Observable<UpdateNotificationSettingsResponse> {
			return this.http.post<UpdateNotificationSettingsResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateNotificationSettings', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * <p> The <code>UpdateQualificationType</code> operation modifies the attributes of an existing Qualification type, which is represented by a QualificationType data structure. Only the owner of a Qualification type can modify its attributes. </p> <p> Most attributes of a Qualification type can be changed after the type has been created. However, the Name and Keywords fields cannot be modified. The RetryDelayInSeconds parameter can be modified or added to change the delay or to enable retries, but RetryDelayInSeconds cannot be used to disable retries. </p> <p> You can use this operation to update the test for a Qualification type. The test is updated based on the values specified for the Test, TestDurationInSeconds and AnswerKey parameters. All three parameters specify the updated test. If you are updating the test for a type, you must specify the Test and TestDurationInSeconds parameters. The AnswerKey parameter is optional; omitting it specifies that the updated test does not have an answer key. </p> <p> If you omit the Test parameter, the test for the Qualification type is unchanged. There is no way to remove a test from a Qualification type that has one. If the type already has a test, you cannot update it to be AutoGranted. If the Qualification type does not have a test and one is provided by an update, the type will henceforth have a test. </p> <p> If you want to update the test duration or answer key for an existing test without changing the questions, you must specify a Test parameter with the original questions, along with the updated values. </p> <p> If you provide an updated Test but no AnswerKey, the new test will not have an answer key. Requests for such Qualifications must be granted manually. </p> <p> You can also update the AutoGranted and AutoGrantedValue attributes of the Qualification type.</p>
		 * Post #X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType
		 * @return {UpdateQualificationTypeResponse} Success
		 */
		UpdateQualificationType(requestBody: UpdateQualificationTypeRequest): Observable<UpdateQualificationTypeResponse> {
			return this.http.post<UpdateQualificationTypeResponse>(this.baseUri + '#X-Amz-Target=MTurkRequesterServiceV20170117.UpdateQualificationType', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum AcceptQualificationRequestX_Amz_Target { MTurkRequesterServiceV20170117_AcceptQualificationRequest = 0 }

	export enum ApproveAssignmentX_Amz_Target { MTurkRequesterServiceV20170117_ApproveAssignment = 0 }

	export enum AssociateQualificationWithWorkerX_Amz_Target { MTurkRequesterServiceV20170117_AssociateQualificationWithWorker = 0 }

	export enum CreateAdditionalAssignmentsForHITX_Amz_Target { MTurkRequesterServiceV20170117_CreateAdditionalAssignmentsForHIT = 0 }

	export enum CreateHITX_Amz_Target { MTurkRequesterServiceV20170117_CreateHIT = 0 }

	export enum CreateHITTypeX_Amz_Target { MTurkRequesterServiceV20170117_CreateHITType = 0 }

	export enum CreateHITWithHITTypeX_Amz_Target { MTurkRequesterServiceV20170117_CreateHITWithHITType = 0 }

	export enum CreateQualificationTypeX_Amz_Target { MTurkRequesterServiceV20170117_CreateQualificationType = 0 }

	export enum CreateWorkerBlockX_Amz_Target { MTurkRequesterServiceV20170117_CreateWorkerBlock = 0 }

	export enum DeleteHITX_Amz_Target { MTurkRequesterServiceV20170117_DeleteHIT = 0 }

	export enum DeleteQualificationTypeX_Amz_Target { MTurkRequesterServiceV20170117_DeleteQualificationType = 0 }

	export enum DeleteWorkerBlockX_Amz_Target { MTurkRequesterServiceV20170117_DeleteWorkerBlock = 0 }

	export enum DisassociateQualificationFromWorkerX_Amz_Target { MTurkRequesterServiceV20170117_DisassociateQualificationFromWorker = 0 }

	export enum GetAccountBalanceX_Amz_Target { MTurkRequesterServiceV20170117_GetAccountBalance = 0 }

	export enum GetAssignmentX_Amz_Target { MTurkRequesterServiceV20170117_GetAssignment = 0 }

	export enum GetFileUploadURLX_Amz_Target { MTurkRequesterServiceV20170117_GetFileUploadURL = 0 }

	export enum GetHITX_Amz_Target { MTurkRequesterServiceV20170117_GetHIT = 0 }

	export enum GetQualificationScoreX_Amz_Target { MTurkRequesterServiceV20170117_GetQualificationScore = 0 }

	export enum GetQualificationTypeX_Amz_Target { MTurkRequesterServiceV20170117_GetQualificationType = 0 }

	export enum ListAssignmentsForHITX_Amz_Target { MTurkRequesterServiceV20170117_ListAssignmentsForHIT = 0 }

	export enum ListBonusPaymentsX_Amz_Target { MTurkRequesterServiceV20170117_ListBonusPayments = 0 }

	export enum ListHITsX_Amz_Target { MTurkRequesterServiceV20170117_ListHITs = 0 }

	export enum ListHITsForQualificationTypeX_Amz_Target { MTurkRequesterServiceV20170117_ListHITsForQualificationType = 0 }

	export enum ListQualificationRequestsX_Amz_Target { MTurkRequesterServiceV20170117_ListQualificationRequests = 0 }

	export enum ListQualificationTypesX_Amz_Target { MTurkRequesterServiceV20170117_ListQualificationTypes = 0 }

	export enum ListReviewPolicyResultsForHITX_Amz_Target { MTurkRequesterServiceV20170117_ListReviewPolicyResultsForHIT = 0 }

	export enum ListReviewableHITsX_Amz_Target { MTurkRequesterServiceV20170117_ListReviewableHITs = 0 }

	export enum ListWorkerBlocksX_Amz_Target { MTurkRequesterServiceV20170117_ListWorkerBlocks = 0 }

	export enum ListWorkersWithQualificationTypeX_Amz_Target { MTurkRequesterServiceV20170117_ListWorkersWithQualificationType = 0 }

	export enum NotifyWorkersX_Amz_Target { MTurkRequesterServiceV20170117_NotifyWorkers = 0 }

	export enum RejectAssignmentX_Amz_Target { MTurkRequesterServiceV20170117_RejectAssignment = 0 }

	export enum RejectQualificationRequestX_Amz_Target { MTurkRequesterServiceV20170117_RejectQualificationRequest = 0 }

	export enum SendBonusX_Amz_Target { MTurkRequesterServiceV20170117_SendBonus = 0 }

	export enum SendTestEventNotificationX_Amz_Target { MTurkRequesterServiceV20170117_SendTestEventNotification = 0 }

	export enum UpdateExpirationForHITX_Amz_Target { MTurkRequesterServiceV20170117_UpdateExpirationForHIT = 0 }

	export enum UpdateHITReviewStatusX_Amz_Target { MTurkRequesterServiceV20170117_UpdateHITReviewStatus = 0 }

	export enum UpdateHITTypeOfHITX_Amz_Target { MTurkRequesterServiceV20170117_UpdateHITTypeOfHIT = 0 }

	export enum UpdateNotificationSettingsX_Amz_Target { MTurkRequesterServiceV20170117_UpdateNotificationSettings = 0 }

	export enum UpdateQualificationTypeX_Amz_Target { MTurkRequesterServiceV20170117_UpdateQualificationType = 0 }

}

