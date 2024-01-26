import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ActivationResponse {
		end?: string | null;
		id?: string | null;
		info?: string | null;

		/** number of learners in the offering, excluding facilitators and coaches */
		learnersCount?: string | null;
		metadata?: ActivationResponseMetadata;
		name?: string | null;
		start?: string | null;
	}
	export interface ActivationResponseFormProperties {
		end: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		info: FormControl<string | null | undefined>,

		/** number of learners in the offering, excluding facilitators and coaches */
		learnersCount: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		start: FormControl<string | null | undefined>,
	}
	export function CreateActivationResponseFormGroup() {
		return new FormGroup<ActivationResponseFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			learnersCount: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivationResponseMetadata {
		rootContentId?: string | null;
	}
	export interface ActivationResponseMetadataFormProperties {
		rootContentId: FormControl<string | null | undefined>,
	}
	export function CreateActivationResponseMetadataFormGroup() {
		return new FormGroup<ActivationResponseMetadataFormProperties>({
			rootContentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityAttemptOpenResponse {
		activityId?: string | null;
		activityType?: string | null;
		feedback?: ActivityAttemptOpenResponseFeedback;
		learnerEmail?: string | null;
		offeringId?: string | null;
		responseText?: string | null;
		uploadedFiles?: ActivityAttemptOpenResponseFiles;
	}
	export interface ActivityAttemptOpenResponseFormProperties {
		activityId: FormControl<string | null | undefined>,
		activityType: FormControl<string | null | undefined>,
		learnerEmail: FormControl<string | null | undefined>,
		offeringId: FormControl<string | null | undefined>,
		responseText: FormControl<string | null | undefined>,
	}
	export function CreateActivityAttemptOpenResponseFormGroup() {
		return new FormGroup<ActivityAttemptOpenResponseFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined),
			activityType: new FormControl<string | null | undefined>(undefined),
			learnerEmail: new FormControl<string | null | undefined>(undefined),
			offeringId: new FormControl<string | null | undefined>(undefined),
			responseText: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityAttemptOpenResponseFeedback {
		facilitatorEmail?: string | null;
		text?: string | null;
	}
	export interface ActivityAttemptOpenResponseFeedbackFormProperties {
		facilitatorEmail: FormControl<string | null | undefined>,
		text: FormControl<string | null | undefined>,
	}
	export function CreateActivityAttemptOpenResponseFeedbackFormGroup() {
		return new FormGroup<ActivityAttemptOpenResponseFeedbackFormProperties>({
			facilitatorEmail: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ActivityAttemptOpenResponseFiles {
		filename?: string | null;
		mimetype?: string | null;
		size?: string | null;
		url?: string | null;
	}
	export interface ActivityAttemptOpenResponseFilesFormProperties {
		filename: FormControl<string | null | undefined>,
		mimetype: FormControl<string | null | undefined>,
		size: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateActivityAttemptOpenResponseFilesFormGroup() {
		return new FormGroup<ActivityAttemptOpenResponseFilesFormProperties>({
			filename: new FormControl<string | null | undefined>(undefined),
			mimetype: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Assessment {
		content?: string | null;
		dueDate?: Date | null;

		/** Min length: 1 */
		markNumber?: string | null;

		/** Min length: 1 */
		markType?: string | null;
		openDate?: Date | null;
	}
	export interface AssessmentFormProperties {
		content: FormControl<string | null | undefined>,
		dueDate: FormControl<Date | null | undefined>,

		/** Min length: 1 */
		markNumber: FormControl<string | null | undefined>,

		/** Min length: 1 */
		markType: FormControl<string | null | undefined>,
		openDate: FormControl<Date | null | undefined>,
	}
	export function CreateAssessmentFormGroup() {
		return new FormGroup<AssessmentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			dueDate: new FormControl<Date | null | undefined>(undefined),
			markNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			markType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			openDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface AssessmentGroupRequired {

		/**
		 * Required
		 * Min length: 1
		 */
		title: string;
	}
	export interface AssessmentGroupRequiredFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentGroupRequiredFormGroup() {
		return new FormGroup<AssessmentGroupRequiredFormProperties>({
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface AssessmentGroupResponse {
		createdAt?: string | null;
		id?: string | null;

		/** Min length: 1 */
		title?: string | null;
	}
	export interface AssessmentGroupResponseFormProperties {
		createdAt: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Min length: 1 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentGroupResponseFormGroup() {
		return new FormGroup<AssessmentGroupResponseFormProperties>({
			createdAt: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface AssessmentPendingSubmission {
		content?: string | null;
		documents?: Array<Document>;
		dueDate?: Date | null;
		durationMinutes?: number | null;
		filename?: string | null;
		hidden?: boolean | null;
		id?: string | null;

		/** Min length: 1 */
		markNumber?: string | null;

		/** Min length: 1 */
		markType?: string | null;
		maxAttempts?: number | null;
		offeringId?: string | null;
		offeringName?: string | null;
		openDate?: Date | null;
		pid?: string | null;
		points?: string | null;
		themes?: Array<ThemeResponse>;
		title?: string | null;
		totalQuestions?: number | null;
		totalThemes?: number | null;
		type?: string | null;
		users?: Array<User>;
	}
	export interface AssessmentPendingSubmissionFormProperties {
		content: FormControl<string | null | undefined>,
		dueDate: FormControl<Date | null | undefined>,
		durationMinutes: FormControl<number | null | undefined>,
		filename: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Min length: 1 */
		markNumber: FormControl<string | null | undefined>,

		/** Min length: 1 */
		markType: FormControl<string | null | undefined>,
		maxAttempts: FormControl<number | null | undefined>,
		offeringId: FormControl<string | null | undefined>,
		offeringName: FormControl<string | null | undefined>,
		openDate: FormControl<Date | null | undefined>,
		pid: FormControl<string | null | undefined>,
		points: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		totalQuestions: FormControl<number | null | undefined>,
		totalThemes: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentPendingSubmissionFormGroup() {
		return new FormGroup<AssessmentPendingSubmissionFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			dueDate: new FormControl<Date | null | undefined>(undefined),
			durationMinutes: new FormControl<number | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			markNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			markType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			maxAttempts: new FormControl<number | null | undefined>(undefined),
			offeringId: new FormControl<string | null | undefined>(undefined),
			offeringName: new FormControl<string | null | undefined>(undefined),
			openDate: new FormControl<Date | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			points: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			totalQuestions: new FormControl<number | null | undefined>(undefined),
			totalThemes: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Document {
		createdAt?: Date | null;
		filename?: string | null;
		id?: string | null;
		mimetype?: string | null;
		size?: number | null;
		url?: string | null;
	}
	export interface DocumentFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		filename: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		mimetype: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mimetype: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ThemeResponse {
		filter?: string | null;
		numberOfQuestions?: string | null;
	}
	export interface ThemeResponseFormProperties {
		filter: FormControl<string | null | undefined>,
		numberOfQuestions: FormControl<string | null | undefined>,
	}
	export function CreateThemeResponseFormGroup() {
		return new FormGroup<ThemeResponseFormProperties>({
			filter: new FormControl<string | null | undefined>(undefined),
			numberOfQuestions: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {

		/** Min length: 1 */
		email?: string | null;

		/** Min length: 1 */
		firstName?: string | null;

		/** Min length: 1 */
		lastName?: string | null;
		metadata?: UserMetadata;

		/** Min length: 1 */
		personId?: string | null;
		profile?: UserProfileRequest;
		sendInvite?: boolean | null;
	}
	export interface UserFormProperties {

		/** Min length: 1 */
		email: FormControl<string | null | undefined>,

		/** Min length: 1 */
		firstName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		lastName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		personId: FormControl<string | null | undefined>,
		sendInvite: FormControl<boolean | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			personId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			sendInvite: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UserMetadata {
		tags?: Array<string>;
	}
	export interface UserMetadataFormProperties {
	}
	export function CreateUserMetadataFormGroup() {
		return new FormGroup<UserMetadataFormProperties>({
		});

	}

	export interface UserProfileRequest {
		displayName?: string | null;
	}
	export interface UserProfileRequestFormProperties {
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateUserProfileRequestFormGroup() {
		return new FormGroup<UserProfileRequestFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssessmentResponse {
		content?: string | null;
		documents?: Array<Document>;
		dueDate?: Date | null;
		durationMinutes?: number | null;
		filename?: string | null;
		hidden?: boolean | null;
		id?: string | null;

		/** Min length: 1 */
		markNumber?: string | null;

		/** Min length: 1 */
		markType?: string | null;
		maxAttempts?: number | null;
		openDate?: Date | null;
		pid?: string | null;
		points?: string | null;
		themes?: Array<ThemeResponse>;
		title?: string | null;
		totalQuestions?: number | null;
		totalThemes?: number | null;
		type?: string | null;
	}
	export interface AssessmentResponseFormProperties {
		content: FormControl<string | null | undefined>,
		dueDate: FormControl<Date | null | undefined>,
		durationMinutes: FormControl<number | null | undefined>,
		filename: FormControl<string | null | undefined>,
		hidden: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,

		/** Min length: 1 */
		markNumber: FormControl<string | null | undefined>,

		/** Min length: 1 */
		markType: FormControl<string | null | undefined>,
		maxAttempts: FormControl<number | null | undefined>,
		openDate: FormControl<Date | null | undefined>,
		pid: FormControl<string | null | undefined>,
		points: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
		totalQuestions: FormControl<number | null | undefined>,
		totalThemes: FormControl<number | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateAssessmentResponseFormGroup() {
		return new FormGroup<AssessmentResponseFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			dueDate: new FormControl<Date | null | undefined>(undefined),
			durationMinutes: new FormControl<number | null | undefined>(undefined),
			filename: new FormControl<string | null | undefined>(undefined),
			hidden: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			markNumber: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			markType: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			maxAttempts: new FormControl<number | null | undefined>(undefined),
			openDate: new FormControl<Date | null | undefined>(undefined),
			pid: new FormControl<string | null | undefined>(undefined),
			points: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			totalQuestions: new FormControl<number | null | undefined>(undefined),
			totalThemes: new FormControl<number | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssignmentMarkResponse {
		assessmentId?: string | null;
		assessmentItemDetails?: string | null;
		assessmentItemName?: string | null;
		courseName?: string | null;
		learnerEmail?: string | null;
		learnerFirstName?: string | null;
		learnerLastName?: string | null;
		learnerPersonId?: string | null;
		mark?: string | null;
		markFeedback?: string | null;
		markedBy?: string | null;
		markedByEvaluator?: boolean | null;
		markedByFacilitator?: boolean | null;
		markedByMarker?: boolean | null;
		markedDateTime?: Date | null;
		submissionDateTime?: Date | null;
	}
	export interface AssignmentMarkResponseFormProperties {
		assessmentId: FormControl<string | null | undefined>,
		assessmentItemDetails: FormControl<string | null | undefined>,
		assessmentItemName: FormControl<string | null | undefined>,
		courseName: FormControl<string | null | undefined>,
		learnerEmail: FormControl<string | null | undefined>,
		learnerFirstName: FormControl<string | null | undefined>,
		learnerLastName: FormControl<string | null | undefined>,
		learnerPersonId: FormControl<string | null | undefined>,
		mark: FormControl<string | null | undefined>,
		markFeedback: FormControl<string | null | undefined>,
		markedBy: FormControl<string | null | undefined>,
		markedByEvaluator: FormControl<boolean | null | undefined>,
		markedByFacilitator: FormControl<boolean | null | undefined>,
		markedByMarker: FormControl<boolean | null | undefined>,
		markedDateTime: FormControl<Date | null | undefined>,
		submissionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateAssignmentMarkResponseFormGroup() {
		return new FormGroup<AssignmentMarkResponseFormProperties>({
			assessmentId: new FormControl<string | null | undefined>(undefined),
			assessmentItemDetails: new FormControl<string | null | undefined>(undefined),
			assessmentItemName: new FormControl<string | null | undefined>(undefined),
			courseName: new FormControl<string | null | undefined>(undefined),
			learnerEmail: new FormControl<string | null | undefined>(undefined),
			learnerFirstName: new FormControl<string | null | undefined>(undefined),
			learnerLastName: new FormControl<string | null | undefined>(undefined),
			learnerPersonId: new FormControl<string | null | undefined>(undefined),
			mark: new FormControl<string | null | undefined>(undefined),
			markFeedback: new FormControl<string | null | undefined>(undefined),
			markedBy: new FormControl<string | null | undefined>(undefined),
			markedByEvaluator: new FormControl<boolean | null | undefined>(undefined),
			markedByFacilitator: new FormControl<boolean | null | undefined>(undefined),
			markedByMarker: new FormControl<boolean | null | undefined>(undefined),
			markedDateTime: new FormControl<Date | null | undefined>(undefined),
			submissionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Assignments {
		files?: Array<Document>;
		marks?: Array<Mark>;
		status?: string | null;
		submittedAt?: Date | null;
		updatedAt?: Date | null;
	}
	export interface AssignmentsFormProperties {
		status: FormControl<string | null | undefined>,
		submittedAt: FormControl<Date | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateAssignmentsFormGroup() {
		return new FormGroup<AssignmentsFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
			submittedAt: new FormControl<Date | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Mark {
		createdAt?: Date | null;
		feedback?: string | null;
		id?: string | null;
		mark?: string | null;
		markFeedback?: Array<MarkFeedback>;
		markedBy?: string | null;
		markerId?: string | null;
	}
	export interface MarkFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		feedback: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		mark: FormControl<string | null | undefined>,
		markedBy: FormControl<string | null | undefined>,
		markerId: FormControl<string | null | undefined>,
	}
	export function CreateMarkFormGroup() {
		return new FormGroup<MarkFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			feedback: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mark: new FormControl<string | null | undefined>(undefined),
			markedBy: new FormControl<string | null | undefined>(undefined),
			markerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MarkFeedback {
		createdAt?: Date | null;
		feedback?: string | null;
		feedbackBy?: string | null;
		id?: string | null;
		mark?: string | null;
		markerId?: string | null;
	}
	export interface MarkFeedbackFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		feedback: FormControl<string | null | undefined>,
		feedbackBy: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		mark: FormControl<string | null | undefined>,
		markerId: FormControl<string | null | undefined>,
	}
	export function CreateMarkFeedbackFormGroup() {
		return new FormGroup<MarkFeedbackFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			feedback: new FormControl<string | null | undefined>(undefined),
			feedbackBy: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mark: new FormControl<string | null | undefined>(undefined),
			markerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AwardedResponse {
		awarded?: boolean | null;
		badgeId?: string | null;
		badgeUrl?: string | null;
	}
	export interface AwardedResponseFormProperties {
		awarded: FormControl<boolean | null | undefined>,
		badgeId: FormControl<string | null | undefined>,
		badgeUrl: FormControl<string | null | undefined>,
	}
	export function CreateAwardedResponseFormGroup() {
		return new FormGroup<AwardedResponseFormProperties>({
			awarded: new FormControl<boolean | null | undefined>(undefined),
			badgeId: new FormControl<string | null | undefined>(undefined),
			badgeUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Badge {
		badgeExpiry?: BadgeExpiry;
		badgeUrl?: string | null;
		criterias?: Criteria;
		description?: string | null;
		openBadge?: OpenBadgeClass;
		title?: string | null;
	}
	export interface BadgeFormProperties {
		badgeUrl: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateBadgeFormGroup() {
		return new FormGroup<BadgeFormProperties>({
			badgeUrl: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BadgeExpiry {
		expirationDate?: Date | null;
		expires?: boolean | null;
		expiryType?: BadgeExpiryExpiryType | null;
		timeframeAmount?: number | null;
		timeframeUnit?: BadgeExpiryTimeframeUnit | null;
	}
	export interface BadgeExpiryFormProperties {
		expirationDate: FormControl<Date | null | undefined>,
		expires: FormControl<boolean | null | undefined>,
		expiryType: FormControl<BadgeExpiryExpiryType | null | undefined>,
		timeframeAmount: FormControl<number | null | undefined>,
		timeframeUnit: FormControl<BadgeExpiryTimeframeUnit | null | undefined>,
	}
	export function CreateBadgeExpiryFormGroup() {
		return new FormGroup<BadgeExpiryFormProperties>({
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			expires: new FormControl<boolean | null | undefined>(undefined),
			expiryType: new FormControl<BadgeExpiryExpiryType | null | undefined>(undefined),
			timeframeAmount: new FormControl<number | null | undefined>(undefined),
			timeframeUnit: new FormControl<BadgeExpiryTimeframeUnit | null | undefined>(undefined),
		});

	}

	export enum BadgeExpiryExpiryType { date = 'date', timeframe = 'timeframe' }

	export enum BadgeExpiryTimeframeUnit { days = 'days', months = 'months', years = 'years' }

	export interface Criteria {
		hasCompletedCourse?: boolean | null;
		hasPassedMandatoryAssessedQuizzes?: boolean | null;
	}
	export interface CriteriaFormProperties {
		hasCompletedCourse: FormControl<boolean | null | undefined>,
		hasPassedMandatoryAssessedQuizzes: FormControl<boolean | null | undefined>,
	}
	export function CreateCriteriaFormGroup() {
		return new FormGroup<CriteriaFormProperties>({
			hasCompletedCourse: new FormControl<boolean | null | undefined>(undefined),
			hasPassedMandatoryAssessedQuizzes: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OpenBadgeClass {
		criteria?: OpenBadgeClassCriteria;
		description?: string | null;
		id?: string | null;
		image?: string | null;
		issuer?: string | null;
		name?: string | null;
		type?: string | null;
	}
	export interface OpenBadgeClassFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		image: FormControl<string | null | undefined>,
		issuer: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateOpenBadgeClassFormGroup() {
		return new FormGroup<OpenBadgeClassFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			image: new FormControl<string | null | undefined>(undefined),
			issuer: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OpenBadgeClassCriteria {
		narrative?: string | null;
	}
	export interface OpenBadgeClassCriteriaFormProperties {
		narrative: FormControl<string | null | undefined>,
	}
	export function CreateOpenBadgeClassCriteriaFormGroup() {
		return new FormGroup<OpenBadgeClassCriteriaFormProperties>({
			narrative: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Channel {
		group?: ChannelGroup;
		groupDiscussion?: boolean | null;
		isBroadcastOnly?: boolean | null;
		privateSupport?: boolean | null;

		/** Min length: 1 */
		title?: string | null;
	}
	export interface ChannelFormProperties {
		groupDiscussion: FormControl<boolean | null | undefined>,
		isBroadcastOnly: FormControl<boolean | null | undefined>,
		privateSupport: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateChannelFormGroup() {
		return new FormGroup<ChannelFormProperties>({
			groupDiscussion: new FormControl<boolean | null | undefined>(undefined),
			isBroadcastOnly: new FormControl<boolean | null | undefined>(undefined),
			privateSupport: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface ChannelGroup {
		autoAssign?: boolean | null;
	}
	export interface ChannelGroupFormProperties {
		autoAssign: FormControl<boolean | null | undefined>,
	}
	export function CreateChannelGroupFormGroup() {
		return new FormGroup<ChannelGroupFormProperties>({
			autoAssign: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ChannelRequired {
		isBroadcastOnly?: boolean | null;

		/**
		 * Required
		 * Min length: 1
		 */
		title: string;
	}
	export interface ChannelRequiredFormProperties {
		isBroadcastOnly: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateChannelRequiredFormGroup() {
		return new FormGroup<ChannelRequiredFormProperties>({
			isBroadcastOnly: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export interface ChannelResponse {
		id?: string | null;
		isBroadcastOnly?: boolean | null;

		/** Min length: 1 */
		title?: string | null;
	}
	export interface ChannelResponseFormProperties {
		id: FormControl<string | null | undefined>,
		isBroadcastOnly: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		title: FormControl<string | null | undefined>,
	}
	export function CreateChannelResponseFormGroup() {
		return new FormGroup<ChannelResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			isBroadcastOnly: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface Comment {
		content?: string | null;
		createdAt?: Date | null;
		email?: string | null;
		id?: string | null;
		isFacilitatorPost?: boolean | null;
		moderation?: Moderation;
		parentCommentId?: string | null;
		postId?: string | null;
	}
	export interface CommentFormProperties {
		content: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isFacilitatorPost: FormControl<boolean | null | undefined>,
		parentCommentId: FormControl<string | null | undefined>,
		postId: FormControl<string | null | undefined>,
	}
	export function CreateCommentFormGroup() {
		return new FormGroup<CommentFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isFacilitatorPost: new FormControl<boolean | null | undefined>(undefined),
			parentCommentId: new FormControl<string | null | undefined>(undefined),
			postId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Moderation {
		isMuted?: boolean | null;
		moderator?: Moderator;
		reason?: string | null;
	}
	export interface ModerationFormProperties {
		isMuted: FormControl<boolean | null | undefined>,
		reason: FormControl<string | null | undefined>,
	}
	export function CreateModerationFormGroup() {
		return new FormGroup<ModerationFormProperties>({
			isMuted: new FormControl<boolean | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Moderator {
		avatarUrl?: string | null;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
	}
	export interface ModeratorFormProperties {
		avatarUrl: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateModeratorFormGroup() {
		return new FormGroup<ModeratorFormProperties>({
			avatarUrl: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CourseMetaResponse {
		coverImageUrl?: string | null;
		createdAt?: Date | null;
		id?: string | null;
		metadata?: any;
		name?: string | null;
		tasksEnabled?: boolean | null;
	}
	export interface CourseMetaResponseFormProperties {
		coverImageUrl: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		metadata: FormControl<any | null | undefined>,
		name: FormControl<string | null | undefined>,
		tasksEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateCourseMetaResponseFormGroup() {
		return new FormGroup<CourseMetaResponseFormProperties>({
			coverImageUrl: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tasksEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface CourseResponse {
		coverImageUrl?: string | null;
		createdAt?: Date | null;
		id?: string | null;
		metadata?: any;
		name?: string | null;
	}
	export interface CourseResponseFormProperties {
		coverImageUrl: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		metadata: FormControl<any | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateCourseResponseFormGroup() {
		return new FormGroup<CourseResponseFormProperties>({
			coverImageUrl: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<any | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DocumentResponse {
		id?: string | null;
		mimetype?: string | null;
		size?: number | null;
		url?: string | null;
	}
	export interface DocumentResponseFormProperties {
		id: FormControl<string | null | undefined>,
		mimetype: FormControl<string | null | undefined>,
		size: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateDocumentResponseFormGroup() {
		return new FormGroup<DocumentResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			mimetype: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Error {
		error?: ErrorError;
	}
	export interface ErrorFormProperties {
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
		});

	}

	export interface ErrorError {
		details?: string | null;
		name?: string | null;
	}
	export interface ErrorErrorFormProperties {
		details: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateErrorErrorFormGroup() {
		return new FormGroup<ErrorErrorFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Invite {

		/** if sendInvite in request is false */
		url?: string | null;
	}
	export interface InviteFormProperties {

		/** if sendInvite in request is false */
		url: FormControl<string | null | undefined>,
	}
	export function CreateInviteFormGroup() {
		return new FormGroup<InviteFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LearnerOfferingDates {
		start?: Date | null;
	}
	export interface LearnerOfferingDatesFormProperties {
		start: FormControl<Date | null | undefined>,
	}
	export function CreateLearnerOfferingDatesFormGroup() {
		return new FormGroup<LearnerOfferingDatesFormProperties>({
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface LearnerProgressResponse {
		completion?: string | null;
		courseId?: string | null;
		email?: string | null;
		firstName?: string | null;
		lastLoggedInAt?: Date | null;
		lastName?: string | null;
		personId?: string | null;
	}
	export interface LearnerProgressResponseFormProperties {
		completion: FormControl<string | null | undefined>,
		courseId: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastLoggedInAt: FormControl<Date | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		personId: FormControl<string | null | undefined>,
	}
	export function CreateLearnerProgressResponseFormGroup() {
		return new FormGroup<LearnerProgressResponseFormProperties>({
			completion: new FormControl<string | null | undefined>(undefined),
			courseId: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastLoggedInAt: new FormControl<Date | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			personId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LearnerResponse {
		email?: string | null;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
		offerings?: Array<OfferingProgressRow>;
		personId?: string | null;
	}
	export interface LearnerResponseFormProperties {
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		personId: FormControl<string | null | undefined>,
	}
	export function CreateLearnerResponseFormGroup() {
		return new FormGroup<LearnerResponseFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			personId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OfferingProgressRow {
		completion?: string | null;
		id?: string | null;
	}
	export interface OfferingProgressRowFormProperties {
		completion: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateOfferingProgressRowFormGroup() {
		return new FormGroup<OfferingProgressRowFormProperties>({
			completion: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LearningOutcomes {
		description?: string | null;
		id?: string | null;
	}
	export interface LearningOutcomesFormProperties {
		description: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateLearningOutcomesFormGroup() {
		return new FormGroup<LearningOutcomesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Offering {
		badge?: OfferingBadge;

		/**
		 * The identifier for a specific version of a course
		 * Min length: 1
		 */
		contentId?: string | null;

		/** Min length: 1 */
		description?: string | null;
		earlyCloseOffDate?: Date | null;
		end?: Date | null;
		hasEarlyCloseOff?: boolean | null;
		identifier?: string | null;
		isReadonly?: boolean | null;
		metadata?: OfferingMetadata;

		/** Min length: 1 */
		name?: string | null;
		overview?: string | null;

		/** Every time a course is republished it is assigned a new contentId. rootContentId is the first original contentId associated with a course. */
		rootContentId?: string | null;
		start?: Date | null;

		/** Min length: 1 */
		trailerVideoUrl?: string | null;
		useRelativeDates?: boolean | null;
	}
	export interface OfferingFormProperties {

		/**
		 * The identifier for a specific version of a course
		 * Min length: 1
		 */
		contentId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		description: FormControl<string | null | undefined>,
		earlyCloseOffDate: FormControl<Date | null | undefined>,
		end: FormControl<Date | null | undefined>,
		hasEarlyCloseOff: FormControl<boolean | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		isReadonly: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,
		overview: FormControl<string | null | undefined>,

		/** Every time a course is republished it is assigned a new contentId. rootContentId is the first original contentId associated with a course. */
		rootContentId: FormControl<string | null | undefined>,
		start: FormControl<Date | null | undefined>,

		/** Min length: 1 */
		trailerVideoUrl: FormControl<string | null | undefined>,
		useRelativeDates: FormControl<boolean | null | undefined>,
	}
	export function CreateOfferingFormGroup() {
		return new FormGroup<OfferingFormProperties>({
			contentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			earlyCloseOffDate: new FormControl<Date | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			hasEarlyCloseOff: new FormControl<boolean | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			isReadonly: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			overview: new FormControl<string | null | undefined>(undefined),
			rootContentId: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			trailerVideoUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			useRelativeDates: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OfferingBadge {
		badgeExpiry?: BadgeExpiry;
		description?: string | null;
		requiresApproval?: boolean | null;
		title?: string | null;
	}
	export interface OfferingBadgeFormProperties {
		description: FormControl<string | null | undefined>,
		requiresApproval: FormControl<boolean | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateOfferingBadgeFormGroup() {
		return new FormGroup<OfferingBadgeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			requiresApproval: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OfferingMetadata {
		category?: string | null;
		level?: string | null;
		tags?: Array<string>;
		topic?: string | null;
	}
	export interface OfferingMetadataFormProperties {
		category: FormControl<string | null | undefined>,
		level: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
	}
	export function CreateOfferingMetadataFormGroup() {
		return new FormGroup<OfferingMetadataFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OfferingActivitiesResponse {
		activityId?: string | null;

		/** expected minutes to complete */
		time?: number | null;
		title?: string | null;
	}
	export interface OfferingActivitiesResponseFormProperties {
		activityId: FormControl<string | null | undefined>,

		/** expected minutes to complete */
		time: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateOfferingActivitiesResponseFormGroup() {
		return new FormGroup<OfferingActivitiesResponseFormProperties>({
			activityId: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OfferingMetadataResponse {

		/** Min length: 1 */
		contentId?: string | null;

		/** Min length: 1 */
		coverImageUrl?: string | null;
		currency?: string | null;

		/** Min length: 1 */
		description?: string | null;
		earlyCloseOffDate?: Date | null;
		end?: Date | null;
		enrollmentLimit?: number | null;
		hasEarlyCloseOff?: boolean | null;
		id?: string | null;
		identifier?: string | null;
		isReadonly?: boolean | null;
		metadata?: OfferingMetadata;

		/** Min length: 1 */
		name?: string | null;

		/**
		 * content can contain html
		 * Min length: 1
		 */
		overview?: string | null;
		price?: number | null;
		start?: Date | null;
		tasksEnabled?: boolean | null;

		/** Min length: 1 */
		trailerVideoUrl?: string | null;
		useRelativeDates?: boolean | null;
	}
	export interface OfferingMetadataResponseFormProperties {

		/** Min length: 1 */
		contentId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		coverImageUrl: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,

		/** Min length: 1 */
		description: FormControl<string | null | undefined>,
		earlyCloseOffDate: FormControl<Date | null | undefined>,
		end: FormControl<Date | null | undefined>,
		enrollmentLimit: FormControl<number | null | undefined>,
		hasEarlyCloseOff: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		isReadonly: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,

		/**
		 * content can contain html
		 * Min length: 1
		 */
		overview: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		start: FormControl<Date | null | undefined>,
		tasksEnabled: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		trailerVideoUrl: FormControl<string | null | undefined>,
		useRelativeDates: FormControl<boolean | null | undefined>,
	}
	export function CreateOfferingMetadataResponseFormGroup() {
		return new FormGroup<OfferingMetadataResponseFormProperties>({
			contentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			coverImageUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			currency: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			earlyCloseOffDate: new FormControl<Date | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			enrollmentLimit: new FormControl<number | null | undefined>(undefined),
			hasEarlyCloseOff: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			isReadonly: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			overview: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			price: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			tasksEnabled: new FormControl<boolean | null | undefined>(undefined),
			trailerVideoUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			useRelativeDates: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OfferingRequired {
		badge?: OfferingRequiredBadge;

		/**
		 * The identifier for a specific version of a course
		 * Min length: 1
		 */
		contentId?: string | null;
		createDefaultChannels?: boolean | null;

		/** Min length: 1 */
		description?: string | null;
		earlyCloseOffDate?: Date | null;
		end?: Date | null;
		hasEarlyCloseOff?: boolean | null;
		identifier?: string | null;
		isReadonly?: boolean | null;
		metadata?: OfferingRequiredMetadata;

		/** Min length: 1 */
		name?: string | null;

		/** Every time a course is republished it's assigned a new contentId. rootContentId is the first original contentId associated with a course. */
		rootContentId?: string | null;

		/** Required */
		start: Date;

		/** Min length: 1 */
		trailerVideoUrl?: string | null;
		useRelativeDates?: boolean | null;
	}
	export interface OfferingRequiredFormProperties {

		/**
		 * The identifier for a specific version of a course
		 * Min length: 1
		 */
		contentId: FormControl<string | null | undefined>,
		createDefaultChannels: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		description: FormControl<string | null | undefined>,
		earlyCloseOffDate: FormControl<Date | null | undefined>,
		end: FormControl<Date | null | undefined>,
		hasEarlyCloseOff: FormControl<boolean | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		isReadonly: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,

		/** Every time a course is republished it's assigned a new contentId. rootContentId is the first original contentId associated with a course. */
		rootContentId: FormControl<string | null | undefined>,

		/** Required */
		start: FormControl<Date | null | undefined>,

		/** Min length: 1 */
		trailerVideoUrl: FormControl<string | null | undefined>,
		useRelativeDates: FormControl<boolean | null | undefined>,
	}
	export function CreateOfferingRequiredFormGroup() {
		return new FormGroup<OfferingRequiredFormProperties>({
			contentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			createDefaultChannels: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			earlyCloseOffDate: new FormControl<Date | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			hasEarlyCloseOff: new FormControl<boolean | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			isReadonly: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			rootContentId: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			trailerVideoUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			useRelativeDates: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OfferingRequiredBadge {
		badgeExpiry?: BadgeExpiry;
		description?: string | null;
		requiresApproval?: boolean | null;
		title?: string | null;
	}
	export interface OfferingRequiredBadgeFormProperties {
		description: FormControl<string | null | undefined>,
		requiresApproval: FormControl<boolean | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateOfferingRequiredBadgeFormGroup() {
		return new FormGroup<OfferingRequiredBadgeFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			requiresApproval: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OfferingRequiredMetadata {
		category?: string | null;
		level?: string | null;
		tags?: Array<string>;
		topic?: string | null;
	}
	export interface OfferingRequiredMetadataFormProperties {
		category: FormControl<string | null | undefined>,
		level: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
	}
	export function CreateOfferingRequiredMetadataFormGroup() {
		return new FormGroup<OfferingRequiredMetadataFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OfferingResponse {

		/** Min length: 1 */
		contentId?: string | null;

		/** Min length: 1 */
		coverImageUrl?: string | null;
		currency?: string | null;

		/** Min length: 1 */
		description?: string | null;
		earlyCloseOffDate?: Date | null;
		end?: Date | null;
		enrollmentLimit?: number | null;
		hasEarlyCloseOff?: boolean | null;
		id?: string | null;
		identifier?: string | null;
		isReadonly?: boolean | null;

		/** Min length: 1 */
		name?: string | null;
		price?: number | null;
		start?: Date | null;
		tasksEnabled?: boolean | null;

		/** Min length: 1 */
		trailerVideoUrl?: string | null;
	}
	export interface OfferingResponseFormProperties {

		/** Min length: 1 */
		contentId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		coverImageUrl: FormControl<string | null | undefined>,
		currency: FormControl<string | null | undefined>,

		/** Min length: 1 */
		description: FormControl<string | null | undefined>,
		earlyCloseOffDate: FormControl<Date | null | undefined>,
		end: FormControl<Date | null | undefined>,
		enrollmentLimit: FormControl<number | null | undefined>,
		hasEarlyCloseOff: FormControl<boolean | null | undefined>,
		id: FormControl<string | null | undefined>,
		identifier: FormControl<string | null | undefined>,
		isReadonly: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		name: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
		start: FormControl<Date | null | undefined>,
		tasksEnabled: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		trailerVideoUrl: FormControl<string | null | undefined>,
	}
	export function CreateOfferingResponseFormGroup() {
		return new FormGroup<OfferingResponseFormProperties>({
			contentId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			coverImageUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			currency: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			earlyCloseOffDate: new FormControl<Date | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			enrollmentLimit: new FormControl<number | null | undefined>(undefined),
			hasEarlyCloseOff: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			identifier: new FormControl<string | null | undefined>(undefined),
			isReadonly: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			price: new FormControl<number | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
			tasksEnabled: new FormControl<boolean | null | undefined>(undefined),
			trailerVideoUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface OfferingUser {

		/**
		 * Required
		 * Min length: 1
		 */
		email: string;

		/** Min length: 1 */
		firstName?: string | null;
		isFacilitator?: boolean | null;
		isMarker?: boolean | null;
		isReadonly?: boolean | null;

		/** Min length: 1 */
		lastName?: string | null;
		metadata?: UserMetadata;

		/** Min length: 1 */
		personId?: string | null;
		profile?: UserProfileRequest;
		sendInvite?: boolean | null;
		sendNotificationEmail?: boolean | null;
	}
	export interface OfferingUserFormProperties {

		/**
		 * Required
		 * Min length: 1
		 */
		email: FormControl<string | null | undefined>,

		/** Min length: 1 */
		firstName: FormControl<string | null | undefined>,
		isFacilitator: FormControl<boolean | null | undefined>,
		isMarker: FormControl<boolean | null | undefined>,
		isReadonly: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		lastName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		personId: FormControl<string | null | undefined>,
		sendInvite: FormControl<boolean | null | undefined>,
		sendNotificationEmail: FormControl<boolean | null | undefined>,
	}
	export function CreateOfferingUserFormGroup() {
		return new FormGroup<OfferingUserFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			isFacilitator: new FormControl<boolean | null | undefined>(undefined),
			isMarker: new FormControl<boolean | null | undefined>(undefined),
			isReadonly: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			personId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			sendInvite: new FormControl<boolean | null | undefined>(undefined),
			sendNotificationEmail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OfferingUserAddResponse {

		/** Min length: 1 */
		email?: string | null;

		/** Min length: 1 */
		firstName?: string | null;
		invite?: Invite;
		isFacilitator?: boolean | null;
		isMarker?: boolean | null;
		isReadonly?: boolean | null;

		/** Min length: 1 */
		lastName?: string | null;
		metadata?: UserMetadata;

		/** Min length: 1 */
		personId?: string | null;
		profile?: UserProfileRequest;
		sendInvite?: boolean | null;
		sendNotificationEmail?: boolean | null;
	}
	export interface OfferingUserAddResponseFormProperties {

		/** Min length: 1 */
		email: FormControl<string | null | undefined>,

		/** Min length: 1 */
		firstName: FormControl<string | null | undefined>,
		isFacilitator: FormControl<boolean | null | undefined>,
		isMarker: FormControl<boolean | null | undefined>,
		isReadonly: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		lastName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		personId: FormControl<string | null | undefined>,
		sendInvite: FormControl<boolean | null | undefined>,
		sendNotificationEmail: FormControl<boolean | null | undefined>,
	}
	export function CreateOfferingUserAddResponseFormGroup() {
		return new FormGroup<OfferingUserAddResponseFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			isFacilitator: new FormControl<boolean | null | undefined>(undefined),
			isMarker: new FormControl<boolean | null | undefined>(undefined),
			isReadonly: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			personId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			sendInvite: new FormControl<boolean | null | undefined>(undefined),
			sendNotificationEmail: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OfferingUserResponse {
		avatarUrl?: string | null;

		/** Min length: 1 */
		email?: string | null;
		evaluatedBy?: Array<string>;
		evaluates?: Array<string>;

		/** Min length: 1 */
		firstName?: string | null;
		id?: string | null;
		isFacilitator?: boolean | null;
		isMarker?: boolean | null;
		isReadonly?: boolean | null;

		/** Min length: 1 */
		lastName?: string | null;
		markedBy?: Array<string>;
		marks?: Array<string>;

		/** Min length: 1 */
		personId?: string | null;
		profile?: UserProfile;
	}
	export interface OfferingUserResponseFormProperties {
		avatarUrl: FormControl<string | null | undefined>,

		/** Min length: 1 */
		email: FormControl<string | null | undefined>,

		/** Min length: 1 */
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isFacilitator: FormControl<boolean | null | undefined>,
		isMarker: FormControl<boolean | null | undefined>,
		isReadonly: FormControl<boolean | null | undefined>,

		/** Min length: 1 */
		lastName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		personId: FormControl<string | null | undefined>,
	}
	export function CreateOfferingUserResponseFormGroup() {
		return new FormGroup<OfferingUserResponseFormProperties>({
			avatarUrl: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			id: new FormControl<string | null | undefined>(undefined),
			isFacilitator: new FormControl<boolean | null | undefined>(undefined),
			isMarker: new FormControl<boolean | null | undefined>(undefined),
			isReadonly: new FormControl<boolean | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			personId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface UserProfile {
		displayName?: string | null;
		mobile?: string | null;
	}
	export interface UserProfileFormProperties {
		displayName: FormControl<string | null | undefined>,
		mobile: FormControl<string | null | undefined>,
	}
	export function CreateUserProfileFormGroup() {
		return new FormGroup<UserProfileFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			mobile: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrgRequest {
		id?: string | null;

		/** Required */
		name: string;
	}
	export interface OrgRequestFormProperties {
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrgRequestFormGroup() {
		return new FormGroup<OrgRequestFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OrgResponse {
		id?: string | null;
		name?: string | null;
	}
	export interface OrgResponseFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateOrgResponseFormGroup() {
		return new FormGroup<OrgResponseFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PortfolioActivations {
		contentId?: string | null;
		end?: Date | null;
		id?: string | null;
		info?: string | null;

		/** number of learners in the offering, excluding facilitators and coaches */
		learnersCount?: number | null;
		metadata?: PortfolioActivationsMetadata;
		name?: string | null;
		start?: Date | null;
	}
	export interface PortfolioActivationsFormProperties {
		contentId: FormControl<string | null | undefined>,
		end: FormControl<Date | null | undefined>,
		id: FormControl<string | null | undefined>,
		info: FormControl<string | null | undefined>,

		/** number of learners in the offering, excluding facilitators and coaches */
		learnersCount: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		start: FormControl<Date | null | undefined>,
	}
	export function CreatePortfolioActivationsFormGroup() {
		return new FormGroup<PortfolioActivationsFormProperties>({
			contentId: new FormControl<string | null | undefined>(undefined),
			end: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			info: new FormControl<string | null | undefined>(undefined),
			learnersCount: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface PortfolioActivationsMetadata {
		rootContentId?: string | null;
	}
	export interface PortfolioActivationsMetadataFormProperties {
		rootContentId: FormControl<string | null | undefined>,
	}
	export function CreatePortfolioActivationsMetadataFormGroup() {
		return new FormGroup<PortfolioActivationsMetadataFormProperties>({
			rootContentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PortfolioLicenseResponse {
		licenses?: Array<string>;
		owner?: string | null;
	}
	export interface PortfolioLicenseResponseFormProperties {
		owner: FormControl<string | null | undefined>,
	}
	export function CreatePortfolioLicenseResponseFormGroup() {
		return new FormGroup<PortfolioLicenseResponseFormProperties>({
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PortfolioMetadata {
		category?: string | null;
		level?: string | null;
		tags?: Array<string>;
		topic?: string | null;
	}
	export interface PortfolioMetadataFormProperties {
		category: FormControl<string | null | undefined>,
		level: FormControl<string | null | undefined>,
		topic: FormControl<string | null | undefined>,
	}
	export function CreatePortfolioMetadataFormGroup() {
		return new FormGroup<PortfolioMetadataFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			level: new FormControl<string | null | undefined>(undefined),
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PulseAnswer {
		multiChoiceAnswer?: Array<PulseMCQOption>;
		spatialAnswer?: Array<PulseSpatialOption>;
		textAnswer?: string | null;
	}
	export interface PulseAnswerFormProperties {
		textAnswer: FormControl<string | null | undefined>,
	}
	export function CreatePulseAnswerFormGroup() {
		return new FormGroup<PulseAnswerFormProperties>({
			textAnswer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PulseMCQOption {
		option?: string | null;
		value?: boolean | null;
	}
	export interface PulseMCQOptionFormProperties {
		option: FormControl<string | null | undefined>,
		value: FormControl<boolean | null | undefined>,
	}
	export function CreatePulseMCQOptionFormGroup() {
		return new FormGroup<PulseMCQOptionFormProperties>({
			option: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PulseSpatialOption {
		option?: string | null;
		value?: number | null;
	}
	export interface PulseSpatialOptionFormProperties {
		option: FormControl<string | null | undefined>,
		value: FormControl<number | null | undefined>,
	}
	export function CreatePulseSpatialOptionFormGroup() {
		return new FormGroup<PulseSpatialOptionFormProperties>({
			option: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PulseResponse {
		learnerFirstName?: string | null;
		learnerId?: string | null;
		learnerLastName?: string | null;
		pulseBaseId?: string | null;
		pulseInstanceId?: string | null;
		pulseQuestion?: string | null;
		pulseRunDurationMinutes?: number | null;
		pulseRunStart?: Date | null;
		pulseType?: string | null;
		response?: PulseAnswer;
		responseTime?: Date | null;
	}
	export interface PulseResponseFormProperties {
		learnerFirstName: FormControl<string | null | undefined>,
		learnerId: FormControl<string | null | undefined>,
		learnerLastName: FormControl<string | null | undefined>,
		pulseBaseId: FormControl<string | null | undefined>,
		pulseInstanceId: FormControl<string | null | undefined>,
		pulseQuestion: FormControl<string | null | undefined>,
		pulseRunDurationMinutes: FormControl<number | null | undefined>,
		pulseRunStart: FormControl<Date | null | undefined>,
		pulseType: FormControl<string | null | undefined>,
		responseTime: FormControl<Date | null | undefined>,
	}
	export function CreatePulseResponseFormGroup() {
		return new FormGroup<PulseResponseFormProperties>({
			learnerFirstName: new FormControl<string | null | undefined>(undefined),
			learnerId: new FormControl<string | null | undefined>(undefined),
			learnerLastName: new FormControl<string | null | undefined>(undefined),
			pulseBaseId: new FormControl<string | null | undefined>(undefined),
			pulseInstanceId: new FormControl<string | null | undefined>(undefined),
			pulseQuestion: new FormControl<string | null | undefined>(undefined),
			pulseRunDurationMinutes: new FormControl<number | null | undefined>(undefined),
			pulseRunStart: new FormControl<Date | null | undefined>(undefined),
			pulseType: new FormControl<string | null | undefined>(undefined),
			responseTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface QuizMarkResponse {
		attempts?: number | null;
		lastAttemptAt?: Date | null;
		learnerEmail?: string | null;
		learnerFullname?: string | null;
		learnerPersonId?: string | null;
		mark?: string | null;
		quizId?: string | null;
		quizTitle?: string | null;
	}
	export interface QuizMarkResponseFormProperties {
		attempts: FormControl<number | null | undefined>,
		lastAttemptAt: FormControl<Date | null | undefined>,
		learnerEmail: FormControl<string | null | undefined>,
		learnerFullname: FormControl<string | null | undefined>,
		learnerPersonId: FormControl<string | null | undefined>,
		mark: FormControl<string | null | undefined>,
		quizId: FormControl<string | null | undefined>,
		quizTitle: FormControl<string | null | undefined>,
	}
	export function CreateQuizMarkResponseFormGroup() {
		return new FormGroup<QuizMarkResponseFormProperties>({
			attempts: new FormControl<number | null | undefined>(undefined),
			lastAttemptAt: new FormControl<Date | null | undefined>(undefined),
			learnerEmail: new FormControl<string | null | undefined>(undefined),
			learnerFullname: new FormControl<string | null | undefined>(undefined),
			learnerPersonId: new FormControl<string | null | undefined>(undefined),
			mark: new FormControl<string | null | undefined>(undefined),
			quizId: new FormControl<string | null | undefined>(undefined),
			quizTitle: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RevokedResponse {
		badgeId?: string | null;
		badgeUrl?: string | null;
		revocationReason?: string | null;
		revoked?: boolean | null;
	}
	export interface RevokedResponseFormProperties {
		badgeId: FormControl<string | null | undefined>,
		badgeUrl: FormControl<string | null | undefined>,
		revocationReason: FormControl<string | null | undefined>,
		revoked: FormControl<boolean | null | undefined>,
	}
	export function CreateRevokedResponseFormGroup() {
		return new FormGroup<RevokedResponseFormProperties>({
			badgeId: new FormControl<string | null | undefined>(undefined),
			badgeUrl: new FormControl<string | null | undefined>(undefined),
			revocationReason: new FormControl<string | null | undefined>(undefined),
			revoked: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SocialNotesResponse {
		email?: string | null;
		firstName?: string | null;
		lastName?: string | null;
		pageId?: string | null;
		personId?: string | null;
		'social-note-content'?: string | null;
		'social-note-paragraphId'?: string | null;
		userId?: string | null;
	}
	export interface SocialNotesResponseFormProperties {
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
		pageId: FormControl<string | null | undefined>,
		personId: FormControl<string | null | undefined>,
		'social-note-content': FormControl<string | null | undefined>,
		'social-note-paragraphId': FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateSocialNotesResponseFormGroup() {
		return new FormGroup<SocialNotesResponseFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
			pageId: new FormControl<string | null | undefined>(undefined),
			personId: new FormControl<string | null | undefined>(undefined),
			'social-note-content': new FormControl<string | null | undefined>(undefined),
			'social-note-paragraphId': new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubmissionMarkResponse {
		assessmentId?: string | null;
		assessmentItemDetails?: string | null;
		assessmentItemName?: string | null;
		courseName?: string | null;
		files?: Array<Document>;
		html?: string | null;
		learnerEmail?: string | null;
		learnerFirstName?: string | null;
		learnerLastName?: string | null;
		learnerPersonId?: string | null;
		marks?: Array<Mark>;
		status?: string | null;
		submissionDateTime?: Date | null;
	}
	export interface SubmissionMarkResponseFormProperties {
		assessmentId: FormControl<string | null | undefined>,
		assessmentItemDetails: FormControl<string | null | undefined>,
		assessmentItemName: FormControl<string | null | undefined>,
		courseName: FormControl<string | null | undefined>,
		html: FormControl<string | null | undefined>,
		learnerEmail: FormControl<string | null | undefined>,
		learnerFirstName: FormControl<string | null | undefined>,
		learnerLastName: FormControl<string | null | undefined>,
		learnerPersonId: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
		submissionDateTime: FormControl<Date | null | undefined>,
	}
	export function CreateSubmissionMarkResponseFormGroup() {
		return new FormGroup<SubmissionMarkResponseFormProperties>({
			assessmentId: new FormControl<string | null | undefined>(undefined),
			assessmentItemDetails: new FormControl<string | null | undefined>(undefined),
			assessmentItemName: new FormControl<string | null | undefined>(undefined),
			courseName: new FormControl<string | null | undefined>(undefined),
			html: new FormControl<string | null | undefined>(undefined),
			learnerEmail: new FormControl<string | null | undefined>(undefined),
			learnerFirstName: new FormControl<string | null | undefined>(undefined),
			learnerLastName: new FormControl<string | null | undefined>(undefined),
			learnerPersonId: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			submissionDateTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SuspendedRequest {
		suspended?: boolean | null;
	}
	export interface SuspendedRequestFormProperties {
		suspended: FormControl<boolean | null | undefined>,
	}
	export function CreateSuspendedRequestFormGroup() {
		return new FormGroup<SuspendedRequestFormProperties>({
			suspended: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TransferRequest {
		fromOfferingId?: string | null;
		sendInvite?: boolean | null;
		toOfferingId?: string | null;
	}
	export interface TransferRequestFormProperties {
		fromOfferingId: FormControl<string | null | undefined>,
		sendInvite: FormControl<boolean | null | undefined>,
		toOfferingId: FormControl<string | null | undefined>,
	}
	export function CreateTransferRequestFormGroup() {
		return new FormGroup<TransferRequestFormProperties>({
			fromOfferingId: new FormControl<string | null | undefined>(undefined),
			sendInvite: new FormControl<boolean | null | undefined>(undefined),
			toOfferingId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnitReactionsAnalyticsResponse {
		feedback?: UnitReactionsFeedback;
		pageId?: boolean | null;
	}
	export interface UnitReactionsAnalyticsResponseFormProperties {
		pageId: FormControl<boolean | null | undefined>,
	}
	export function CreateUnitReactionsAnalyticsResponseFormGroup() {
		return new FormGroup<UnitReactionsAnalyticsResponseFormProperties>({
			pageId: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UnitReactionsFeedback {
		'thumbs-down'?: number | null;
		'thumbs-up'?: number | null;
	}
	export interface UnitReactionsFeedbackFormProperties {
		'thumbs-down': FormControl<number | null | undefined>,
		'thumbs-up': FormControl<number | null | undefined>,
	}
	export function CreateUnitReactionsFeedbackFormGroup() {
		return new FormGroup<UnitReactionsFeedbackFormProperties>({
			'thumbs-down': new FormControl<number | null | undefined>(undefined),
			'thumbs-up': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UserBadge {
		awardedAt?: Date | null;
		badgeExpiry?: UserBadgeBadgeExpiry;
		badgeUrl?: string | null;
		criterias?: Criteria;
		description?: string | null;
		offeringId?: string | null;
		openBadge?: OpenBadgeClass;
		title?: string | null;
	}
	export interface UserBadgeFormProperties {
		awardedAt: FormControl<Date | null | undefined>,
		badgeUrl: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		offeringId: FormControl<string | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateUserBadgeFormGroup() {
		return new FormGroup<UserBadgeFormProperties>({
			awardedAt: new FormControl<Date | null | undefined>(undefined),
			badgeUrl: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			offeringId: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserBadgeBadgeExpiry {
		expirationDate?: Date | null;
		expires?: boolean | null;
	}
	export interface UserBadgeBadgeExpiryFormProperties {
		expirationDate: FormControl<Date | null | undefined>,
		expires: FormControl<boolean | null | undefined>,
	}
	export function CreateUserBadgeBadgeExpiryFormGroup() {
		return new FormGroup<UserBadgeBadgeExpiryFormProperties>({
			expirationDate: new FormControl<Date | null | undefined>(undefined),
			expires: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UserPermission {
		email?: string | null;
		isBuilder?: boolean | null;
		isReviewer?: boolean | null;
		name?: string | null;
	}
	export interface UserPermissionFormProperties {
		email: FormControl<string | null | undefined>,
		isBuilder: FormControl<boolean | null | undefined>,
		isReviewer: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateUserPermissionFormGroup() {
		return new FormGroup<UserPermissionFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			isBuilder: new FormControl<boolean | null | undefined>(undefined),
			isReviewer: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UserResponse {
		avatarUrl?: string | null;

		/** Min length: 1 */
		email?: string | null;
		firstAccessAt?: Date | null;

		/** Min length: 1 */
		firstName?: string | null;
		id?: string | null;
		invite?: Invite;
		lastAccessAt?: Date | null;

		/** Min length: 1 */
		lastName?: string | null;
		metadata?: UserMetadata;

		/** Min length: 1 */
		personId?: string | null;
		profile?: UserProfile;
	}
	export interface UserResponseFormProperties {
		avatarUrl: FormControl<string | null | undefined>,

		/** Min length: 1 */
		email: FormControl<string | null | undefined>,
		firstAccessAt: FormControl<Date | null | undefined>,

		/** Min length: 1 */
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastAccessAt: FormControl<Date | null | undefined>,

		/** Min length: 1 */
		lastName: FormControl<string | null | undefined>,

		/** Min length: 1 */
		personId: FormControl<string | null | undefined>,
	}
	export function CreateUserResponseFormGroup() {
		return new FormGroup<UserResponseFormProperties>({
			avatarUrl: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			firstAccessAt: new FormControl<Date | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			id: new FormControl<string | null | undefined>(undefined),
			lastAccessAt: new FormControl<Date | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			personId: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface HttpPost {
		attachments?: Array<DocumentResponse>;
		content?: string | null;
		createdAt?: Date | null;
		email?: string | null;
		id?: string | null;
		isFacilitatorPost?: boolean | null;
		moderation?: Moderation;
		title?: string | null;
	}
	export interface HttpPostFormProperties {
		content: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		email: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isFacilitatorPost: FormControl<boolean | null | undefined>,
		title: FormControl<string | null | undefined>,
	}
	export function CreateHttpPostFormGroup() {
		return new FormGroup<HttpPostFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isFacilitatorPost: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List supported endpoints URLs
		 * Responds with all supported endpoints URLs for v2 version.
		 * Get 
		 * @return {string} Supported endpoints
		 */
		Get(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + '', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Find course mappings
		 * Returns all course mappings for course offerings.
		 * Get course-mappings
		 * @return {{[id: string]: string }} Course Mappings
		 */
		Course_mappingsGet(headersHandler?: () => HttpHeaders): Observable<{[id: string]: string }> {
			return this.http.get<{[id: string]: string }>(this.baseUri + 'course-mappings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find course mappings by externalCourseId
		 * Responds with course mapping details by externalCourseId.
		 * Get course-mappings/externalcourse/{externalCourseId}
		 * @param {string} externalCourseId external course's id
		 * @return {Array<string>} Course Mapping
		 */
		Course_mappingsExternalcourse_externalCourseIdGet(externalCourseId: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'course-mappings/externalcourse/' + (externalCourseId == null ? '' : encodeURIComponent(externalCourseId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find course mappings by offeringId
		 * Responds with course mapping details by offeringId.
		 * Get course-mappings/{offeringId}
		 * @param {string} offeringId offering's id
		 * @return {Array<string>} Course Mapping
		 */
		Course_mappings_offeringIdGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'course-mappings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove course mapping
		 * Removes the course mapping between the offering and the externalCourseId.
		 * Delete course-mappings/{offeringId}/{externalCourseId}
		 * @param {string} offeringId offering's id
		 * @param {string} externalCourseId external course's id
		 * @return {Array<string>} Course Mapping
		 */
		Course_mappings_offeringId_externalCourseIdDelete(offeringId: string, externalCourseId: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.delete<Array<string>>(this.baseUri + 'course-mappings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/' + (externalCourseId == null ? '' : encodeURIComponent(externalCourseId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add course mapping
		 * Creates a mapping between the offering and the externalCourseId.
		 * Put course-mappings/{offeringId}/{externalCourseId}
		 * @param {string} offeringId offering's id
		 * @param {string} externalCourseId external course's id
		 * @return {Array<string>} Course Mapping
		 */
		Course_mappings_offeringId_externalCourseIdPut(offeringId: string, externalCourseId: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.put<Array<string>>(this.baseUri + 'course-mappings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/' + (externalCourseId == null ? '' : encodeURIComponent(externalCourseId)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find courses
		 * Responds with all courses (draft and published.)
		 * Get courses
		 * @return {Array<CourseResponse>} All courses (draft and published) in the organisation.
		 */
		CoursesGet(headersHandler?: () => HttpHeaders): Observable<Array<CourseResponse>> {
			return this.http.get<Array<CourseResponse>>(this.baseUri + 'courses', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find course by contentId
		 * Responds with a course matching the contentId.
		 * Get courses/{contentId}
		 * @param {string} contentId The content Id
		 * @return {CourseMetaResponse} Course detail
		 */
		Courses_contentIdGet(contentId: string, headersHandler?: () => HttpHeaders): Observable<CourseMetaResponse> {
			return this.http.get<CourseMetaResponse>(this.baseUri + 'courses/' + (contentId == null ? '' : encodeURIComponent(contentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find activations for a contentId
		 * Responds with all activations for the contentId provided.
		 * Get courses/{contentId}/activations
		 * @param {string} contentId The content Id
		 * @return {ActivationResponse} Activation list.
		 */
		Courses_contentIdActivationsGet(contentId: string, headersHandler?: () => HttpHeaders): Observable<ActivationResponse> {
			return this.http.get<ActivationResponse>(this.baseUri + 'courses/' + (contentId == null ? '' : encodeURIComponent(contentId)) + '/activations', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update course category
		 * Add or update course category in the metadata of a course.
		 * Put courses/{contentId}/metadata/category
		 * @param {string} contentId The content Id
		 * @return {CourseMetaResponse} Course detail
		 */
		Courses_contentIdMetadataCategoryPut(contentId: string, requestBody: Courses_contentIdMetadataCategoryPutPutBody, headersHandler?: () => HttpHeaders): Observable<CourseMetaResponse> {
			return this.http.put<CourseMetaResponse>(this.baseUri + 'courses/' + (contentId == null ? '' : encodeURIComponent(contentId)) + '/metadata/category', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update course level
		 * Add or update the course level in the metadata of a course.
		 * Put courses/{contentId}/metadata/level
		 * @param {string} contentId The content Id
		 * @return {CourseMetaResponse} Course detail
		 */
		Courses_contentIdMetadataLevelPut(contentId: string, requestBody: Courses_contentIdMetadataLevelPutPutBody, headersHandler?: () => HttpHeaders): Observable<CourseMetaResponse> {
			return this.http.put<CourseMetaResponse>(this.baseUri + 'courses/' + (contentId == null ? '' : encodeURIComponent(contentId)) + '/metadata/level', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update course tags
		 * Add or update course tags in the metadata of a course.
		 * Put courses/{contentId}/metadata/tags
		 * @param {string} contentId The content Id
		 * @return {CourseMetaResponse} Course detail
		 */
		Courses_contentIdMetadataTagsPut(contentId: string, requestBody: Courses_contentIdMetadataTagsPutPutBody, headersHandler?: () => HttpHeaders): Observable<CourseMetaResponse> {
			return this.http.put<CourseMetaResponse>(this.baseUri + 'courses/' + (contentId == null ? '' : encodeURIComponent(contentId)) + '/metadata/tags', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update course topic
		 * Add or update the course topic in the metadata of a course.
		 * Put courses/{contentId}/metadata/topic
		 * @param {string} contentId The content Id
		 * @return {CourseMetaResponse} Course detail
		 */
		Courses_contentIdMetadataTopicPut(contentId: string, requestBody: Courses_contentIdMetadataTopicPutPutBody, headersHandler?: () => HttpHeaders): Observable<CourseMetaResponse> {
			return this.http.put<CourseMetaResponse>(this.baseUri + 'courses/' + (contentId == null ? '' : encodeURIComponent(contentId)) + '/metadata/topic', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Find users who have access to the contentId provided
		 * Responds with users who have access to a specific course by contentId.
		 * Get courses/{contentId}/permissions
		 * @param {string} contentId The content Id
		 * @return {UserPermission} List of users who have access to the content ID provided.
		 */
		Courses_contentIdPermissionsGet(contentId: string, headersHandler?: () => HttpHeaders): Observable<UserPermission> {
			return this.http.get<UserPermission>(this.baseUri + 'courses/' + (contentId == null ? '' : encodeURIComponent(contentId)) + '/permissions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update course access
		 * Provide a user with access to a specific course by rootContentId.
		 * Post courses/{rootContentId}/permissions/{userEmail}
		 * @param {string} rootContentId The content Id
		 * @param {string} userEmail The user email
		 * @return {void} 
		 */
		Courses_rootContentIdPermissions_userEmailPost(rootContentId: string, userEmail: string, requestBody: Courses_rootContentIdPermissions_userEmailPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'courses/' + (rootContentId == null ? '' : encodeURIComponent(rootContentId)) + '/permissions/' + (userEmail == null ? '' : encodeURIComponent(userEmail)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Find current, past and future offerings
		 * Responds with all offerings for your organisation.
		 * Get offerings
		 * @return {Array<OfferingMetadataResponse>} all offerings (current, past and future ones)
		 */
		OfferingsGet(headersHandler?: () => HttpHeaders): Observable<Array<OfferingMetadataResponse>> {
			return this.http.get<Array<OfferingMetadataResponse>>(this.baseUri + 'offerings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create offering
		 * Creates a new offering.
		 * Post offerings
		 * @return {void} 
		 */
		OfferingsPost(requestBody: OfferingRequired, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'offerings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Find active offerings
		 * Responds with active offerings for your organisation.
		 * Get offerings/current
		 * @return {Array<OfferingMetadataResponse>} current offerings
		 */
		OfferingsCurrentGet(headersHandler?: () => HttpHeaders): Observable<Array<OfferingMetadataResponse>> {
			return this.http.get<Array<OfferingMetadataResponse>>(this.baseUri + 'offerings/current', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find scheduled offerings
		 * Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).
		 * Get offerings/future
		 * @return {Array<OfferingMetadataResponse>} future offerings
		 */
		OfferingsFutureGet(headersHandler?: () => HttpHeaders): Observable<Array<OfferingMetadataResponse>> {
			return this.http.get<Array<OfferingMetadataResponse>>(this.baseUri + 'offerings/future', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find offerings where info field matches the specified textPattern
		 * Find offerings where info field matches the specified text pattern.
		 * Get offerings/info/{textPattern}
		 * @param {string} textPattern Text pattern to search for (minimum of 3 characters length).
		 * @return {Array<PortfolioActivations>} Offerings
		 */
		OfferingsInfo_textPatternGet(textPattern: string, headersHandler?: () => HttpHeaders): Observable<Array<PortfolioActivations>> {
			return this.http.get<Array<PortfolioActivations>>(this.baseUri + 'offerings/info/' + (textPattern == null ? '' : encodeURIComponent(textPattern)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find past offerings
		 * Responds with past offerings for your organisation.
		 * Get offerings/past
		 * @return {Array<OfferingMetadataResponse>} past offerings
		 */
		OfferingsPastGet(headersHandler?: () => HttpHeaders): Observable<Array<OfferingMetadataResponse>> {
			return this.http.get<Array<OfferingMetadataResponse>>(this.baseUri + 'offerings/past', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Offerings summary
		 * Responds with a summary of all offerings for your organisation.
		 * Get offerings/summary
		 * @param {string} top Returns only the first n results.
		 * @param {string} orderby Sorts the results.
		 * @param {string} filter Filters the results, based on a Boolean condition.
		 * @return {Array<PortfolioActivations>} all offerings.
		 */
		OfferingsSummaryGetByTopAndOrderbyAndFilter(top: string | null | undefined, orderby: string | null | undefined, filter: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<PortfolioActivations>> {
			return this.http.get<Array<PortfolioActivations>>(this.baseUri + 'offerings/summary?top=' + (top == null ? '' : encodeURIComponent(top)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find offering by ID
		 * Responds with an offering matching the offeringId.
		 * Get offerings/{offeringId}
		 * @param {string} offeringId offering's id
		 * @return {OfferingMetadataResponse} offering
		 */
		Offerings_offeringIdGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<OfferingMetadataResponse> {
			return this.http.get<OfferingMetadataResponse>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update offering
		 * Updates the offering.
		 * Patch offerings/{offeringId}
		 * @param {string} offeringId offering's id
		 * @return {OfferingMetadataResponse} offering updated
		 */
		Offerings_offeringIdPatch(offeringId: string, requestBody: Offering, headersHandler?: () => HttpHeaders): Observable<OfferingMetadataResponse> {
			return this.http.patch<OfferingMetadataResponse>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Find offering's activities
		 * Responds with the activities in a specific offering.
		 * Get offerings/{offeringId}/activities/openresponse
		 * @param {string} offeringId offering's id
		 * @return {Array<OfferingActivitiesResponse>} offering's learners
		 */
		Offerings_offeringIdActivitiesOpenresponseGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<OfferingActivitiesResponse>> {
			return this.http.get<Array<OfferingActivitiesResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/activities/openresponse', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find open response activity attempts
		 * Responds with all learner activity attempts for open response activities in an offering matching the offeringId.
		 * Get offerings/{offeringId}/analytics/activities/responses
		 * @param {string} offeringId offering's id
		 * @return {Array<ActivityAttemptOpenResponse>} Offering activity attempt open responses
		 */
		Offerings_offeringIdAnalyticsActivitiesResponsesGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<ActivityAttemptOpenResponse>> {
			return this.http.get<Array<ActivityAttemptOpenResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/activities/responses', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find comments
		 * Responds with a list of comments made in any posts in a specified channel, within an offering.
		 * Get offerings/{offeringId}/analytics/channels/{channelId}/comments
		 * @param {string} offeringId offering's id
		 * @param {string} channelId channel's id
		 * @return {Array<Comment>} Successful response
		 */
		Offerings_offeringIdAnalyticsChannels_channelIdCommentsGet(offeringId: string, channelId: string, headersHandler?: () => HttpHeaders): Observable<Array<Comment>> {
			return this.http.get<Array<Comment>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/comments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find posts
		 * Responds with a list of posts made in a specified channel, within an offering.
		 * Get offerings/{offeringId}/analytics/channels/{channelId}/posts
		 * @param {string} offeringId offering's id
		 * @param {string} channelId channel's id
		 * @return {Array<HttpPost>} Successful response
		 */
		Offerings_offeringIdAnalyticsChannels_channelIdPostsGet(offeringId: string, channelId: string, headersHandler?: () => HttpHeaders): Observable<Array<HttpPost>> {
			return this.http.get<Array<HttpPost>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/posts', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find replies
		 * Responds with a list of replies to comments in any posts in a specified channel, within an offering.
		 * Get offerings/{offeringId}/analytics/channels/{channelId}/replies
		 * @param {string} offeringId offering's id
		 * @param {string} channelId channel's id
		 * @return {Array<Comment>} Successful response
		 */
		Offerings_offeringIdAnalyticsChannels_channelIdRepliesGet(offeringId: string, channelId: string, headersHandler?: () => HttpHeaders): Observable<Array<Comment>> {
			return this.http.get<Array<Comment>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/replies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find learner progress in a specified offering
		 * Responds with all learner progress in the offering.
		 * Get offerings/{offeringId}/analytics/learners-progress
		 * @param {string} offeringId offering's id
		 * @return {Array<LearnerProgressResponse>} Learners progress
		 */
		Offerings_offeringIdAnalyticsLearners_progressGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<LearnerProgressResponse>> {
			return this.http.get<Array<LearnerProgressResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/learners-progress', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find assessment marks
		 * Responds with all learner assessment marks in an offering matching the offeringId.
		 * Get offerings/{offeringId}/analytics/marks/assignments
		 * @param {string} offeringId offering's id
		 * @return {Array<AssignmentMarkResponse>} Assignments marks
		 */
		Offerings_offeringIdAnalyticsMarksAssignmentsGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<AssignmentMarkResponse>> {
			return this.http.get<Array<AssignmentMarkResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/marks/assignments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find quiz marks
		 * Responds with all learner quiz marks in an offering matching the offeringId.
		 * Get offerings/{offeringId}/analytics/marks/quizzes
		 * @param {string} offeringId offering's id
		 * @return {Array<QuizMarkResponse>} Quizzes marks
		 */
		Offerings_offeringIdAnalyticsMarksQuizzesGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<QuizMarkResponse>> {
			return this.http.get<Array<QuizMarkResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/marks/quizzes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find all pulse IDs in the specified offering
		 * Responds with the IDs of all pulses that learners have responded to in a specified offering.
		 * Get offerings/{offeringId}/analytics/pulses
		 * @param {string} offeringId offering's id
		 * @return {Array<string>} Pulses' ids
		 */
		Offerings_offeringIdAnalyticsPulsesGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/pulses', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find pulses by offeringId
		 * Responds with pulse's responses in an offering matching the offeringId.
		 * Get offerings/{offeringId}/analytics/pulses/responses
		 * @param {string} offeringId offering's id
		 * @param {Offerings_offeringIdAnalyticsPulsesResponsesGetByPulseTypeAndResponseTimePulseType} pulseType Filter pulse responses by type.
		 * @param {string} responseTime Filter pulse responses by responseTime. Lower then (`lt`), lower then or equal (`lte`), greater then (`gt`) and greater then or equal (`gte`) operators are available. Example of filtering by time range __gte__2017-03-14T07:30:00Z__
		 * @return {Array<PulseResponse>} All pulses' responses
		 */
		Offerings_offeringIdAnalyticsPulsesResponsesGetByPulseTypeAndResponseTime(offeringId: string, pulseType: Offerings_offeringIdAnalyticsPulsesResponsesGetByPulseTypeAndResponseTimePulseType | null | undefined, responseTime: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<PulseResponse>> {
			return this.http.get<Array<PulseResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/pulses/responses&pulseType=' + pulseType + '&responseTime=' + (responseTime == null ? '' : encodeURIComponent(responseTime)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find pulses by offeringId and pulseId
		 * Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.
		 * Get offerings/{offeringId}/analytics/pulses/{pulseId}/responses
		 * @param {string} offeringId offering's id
		 * @param {string} pulseId pulse's base id
		 * @return {Array<PulseResponse>} Pulse data matching pulseId
		 */
		Offerings_offeringIdAnalyticsPulses_pulseIdResponsesGet(offeringId: string, pulseId: string, headersHandler?: () => HttpHeaders): Observable<Array<PulseResponse>> {
			return this.http.get<Array<PulseResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/pulses/' + (pulseId == null ? '' : encodeURIComponent(pulseId)) + '/responses', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find shared social notes in an offering
		 * Responds with all shared social notes in a specified offering.
		 * Get offerings/{offeringId}/analytics/social-notes
		 * @param {string} offeringId offering's id
		 * @return {Array<SocialNotesResponse>} Offering social notes
		 */
		Offerings_offeringIdAnalyticsSocial_notesGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<SocialNotesResponse>> {
			return this.http.get<Array<SocialNotesResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/social-notes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find submissions to assessments, including marks if any
		 * Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.
		 * Get offerings/{offeringId}/analytics/submissions/assignments
		 * @param {string} offeringId offering's id
		 * @return {Array<AssignmentMarkResponse>} Assignments submissions
		 */
		Offerings_offeringIdAnalyticsSubmissionsAssignmentsGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<AssignmentMarkResponse>> {
			return this.http.get<Array<AssignmentMarkResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/submissions/assignments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find submissions to a specified open response assessment, including marks if any
		 * Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.
		 * Get offerings/{offeringId}/analytics/submissions/open-response/{assessmentId}
		 * @param {string} offeringId offering's id
		 * @param {string} assessmentId assessment's id
		 * @return {Array<SubmissionMarkResponse>} Responds with assignment submissions for the specified assignment.
		 */
		Offerings_offeringIdAnalyticsSubmissionsOpen_response_assessmentIdGet(offeringId: string, assessmentId: string, headersHandler?: () => HttpHeaders): Observable<Array<SubmissionMarkResponse>> {
			return this.http.get<Array<SubmissionMarkResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/submissions/open-response/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find a learner's submission to a specified assessment, including marks if any
		 * Responds with the learner's assessment submission and any marks for the submission.
		 * Get offerings/{offeringId}/analytics/submissions/{userEmail}/assignments/{assessmentId}
		 * @param {string} offeringId offering's id
		 * @param {string} userEmail user's email
		 * @param {string} assessmentId assessment's id
		 * @return {Array<SubmissionMarkResponse>} Responds with the learner's assessment submission and any marks for the submission.
		 */
		Offerings_offeringIdAnalyticsSubmissions_userEmailAssignments_assessmentIdGet(offeringId: string, userEmail: string, assessmentId: string, headersHandler?: () => HttpHeaders): Observable<Array<SubmissionMarkResponse>> {
			return this.http.get<Array<SubmissionMarkResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/submissions/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/assignments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find unit reactions
		 * Responds with user reactions to units in a specified offering.
		 * Get offerings/{offeringId}/analytics/unit-reactions
		 * @param {string} offeringId offering's id
		 * @return {Array<UnitReactionsAnalyticsResponse>} Unit Reactions
		 */
		Offerings_offeringIdAnalyticsUnit_reactionsGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<UnitReactionsAnalyticsResponse>> {
			return this.http.get<Array<UnitReactionsAnalyticsResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/analytics/unit-reactions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find offering's assessments
		 * Responds with all assessments in an offering matching the offeringId.
		 * Get offerings/{offeringId}/assessments
		 * @param {string} offeringId offering's id
		 * @return {Array<AssessmentResponse>} offering's assessments
		 */
		Offerings_offeringIdAssessmentsGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<AssessmentResponse>> {
			return this.http.get<Array<AssessmentResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/assessments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update assessment details
		 * Updates the assessment details for a specified assessment in an offering.
		 * Patch offerings/{offeringId}/assessments/{assessmentId}
		 * @param {string} offeringId offering's id
		 * @param {string} assessmentId assessment's id
		 * @return {AssessmentResponse} assessment successfully updated
		 */
		Offerings_offeringIdAssessments_assessmentIdPatch(offeringId: string, assessmentId: string, requestBody: Assessment, headersHandler?: () => HttpHeaders): Observable<AssessmentResponse> {
			return this.http.patch<AssessmentResponse>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Remove assessment document
		 * Removes the assessment document file for a specified assessment in an offering.
		 * Delete offerings/{offeringId}/assessments/{assessmentId}/documents/{documentId}
		 * @param {string} offeringId offering's id
		 * @param {string} assessmentId assessment's id
		 * @param {string} documentId documents's id
		 * @return {void} 
		 */
		Offerings_offeringIdAssessments_assessmentIdDocuments_documentIdDelete(offeringId: string, assessmentId: string, documentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/documents/' + (documentId == null ? '' : encodeURIComponent(documentId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update the due dates for a learner's quiz attempt
		 * Updates the due dates for a learner's quiz attempt specified by the assessmentId.
		 * Patch offerings/{offeringId}/assessments/{assessmentId}/{userEmail}
		 * @param {string} offeringId offering's id
		 * @param {string} assessmentId assessment's id
		 * @param {string} userEmail user's email
		 * @return {void} 
		 */
		Offerings_offeringIdAssessments_assessmentId_userEmailPatch(offeringId: string, assessmentId: string, userEmail: string, requestBody: Offerings_offeringIdAssessments_assessmentId_userEmailPatchPatchBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)) + '/' + (userEmail == null ? '' : encodeURIComponent(userEmail)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Find offering badges
		 * Responds with the badge for an offering matching the offeringId.
		 * Get offerings/{offeringId}/badges
		 * @param {string} offeringId offering's id
		 * @return {Badge} badges
		 */
		Offerings_offeringIdBadgesGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Badge> {
			return this.http.get<Badge>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/badges', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find channels
		 * Responds with a list of channels in an offering.
		 * Get offerings/{offeringId}/channels
		 * @param {string} offeringId offering's id
		 * @return {Array<ChannelResponse>} Succesful response
		 */
		Offerings_offeringIdChannelsGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<ChannelResponse>> {
			return this.http.get<Array<ChannelResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/channels', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add channel
		 * Adds new channel to the specified offering.
		 * Post offerings/{offeringId}/channels
		 * @param {string} offeringId offering's id
		 * @return {void} 
		 */
		Offerings_offeringIdChannelsPost(offeringId: string, requestBody: ChannelRequired, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/channels', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update channel
		 * Updates a channel in an offering.
		 * Patch offerings/{offeringId}/channels/{channelId}
		 * @param {string} offeringId offering's id
		 * @param {string} channelId channel's id
		 * @return {ChannelResponse} channel successfully updated
		 */
		Offerings_offeringIdChannels_channelIdPatch(offeringId: string, channelId: string, requestBody: Channel, headersHandler?: () => HttpHeaders): Observable<ChannelResponse> {
			return this.http.patch<ChannelResponse>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Remove learners from a group channel
		 * Removes a learner from the specified group channel.
		 * Delete offerings/{offeringId}/channels/{channelId}/learners
		 * @param {string} offeringId offering's id
		 * @param {string} channelId channel's id
		 * @return {void} 
		 */
		Offerings_offeringIdChannels_channelIdLearnersDelete(offeringId: string, channelId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/learners', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find learners in a group channel
		 * Finds all learners in a specified group channel.
		 * Get offerings/{offeringId}/channels/{channelId}/learners
		 * @param {string} offeringId offering's id
		 * @param {string} channelId channel's id
		 * @return {ChannelResponse} channel data
		 */
		Offerings_offeringIdChannels_channelIdLearnersGet(offeringId: string, channelId: string, headersHandler?: () => HttpHeaders): Observable<ChannelResponse> {
			return this.http.get<ChannelResponse>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/learners', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add learners to a group channel
		 * Adds a learner to a specified group channel.
		 * Post offerings/{offeringId}/channels/{channelId}/learners
		 * @param {string} offeringId offering's id
		 * @param {string} channelId channel's id
		 * @return {void} 
		 */
		Offerings_offeringIdChannels_channelIdLearnersPost(offeringId: string, channelId: string, requestBody: Offerings_offeringIdChannels_channelIdLearnersPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/channels/' + (channelId == null ? '' : encodeURIComponent(channelId)) + '/learners', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Find assessment groups
		 * Responds with a list of assessment groups in an offering.
		 * Get offerings/{offeringId}/groups
		 * @param {string} offeringId offering's id
		 * @return {Array<AssessmentGroupResponse>} Succesful response
		 */
		Offerings_offeringIdGroupsGet(offeringId: string, headersHandler?: () => HttpHeaders): Observable<Array<AssessmentGroupResponse>> {
			return this.http.get<Array<AssessmentGroupResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/groups', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add an assessment group
		 * Creates a new assessment group in an offering.
		 * Post offerings/{offeringId}/groups
		 * @param {string} offeringId offering's id
		 * @return {void} 
		 */
		Offerings_offeringIdGroupsPost(offeringId: string, requestBody: AssessmentGroupRequired, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/groups', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Find learners in an assessment group
		 * Responds with a list of learners in a specified assessment group.
		 * Get offerings/{offeringId}/groups/{groupId}/learners
		 * @param {string} offeringId offering's id
		 * @param {string} groupId Assessment group id
		 * @return {Array<UserResponse>} Succesful response
		 */
		Offerings_offeringIdGroups_groupIdLearnersGet(offeringId: string, groupId: string, headersHandler?: () => HttpHeaders): Observable<Array<UserResponse>> {
			return this.http.get<Array<UserResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/learners', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add a learner to an assessment group
		 * Adds a learner into the specified assessment group.
		 * Post offerings/{offeringId}/groups/{groupId}/learners
		 * @param {string} offeringId offering's id
		 * @param {string} groupId Assessment group id
		 * @return {void} 
		 */
		Offerings_offeringIdGroups_groupIdLearnersPost(offeringId: string, groupId: string, requestBody: Offerings_offeringIdGroups_groupIdLearnersPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/learners', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove a learner from an assessment group
		 * Removes a learner from the specified assessment group.
		 * Delete offerings/{offeringId}/groups/{groupId}/learners/{userEmail}
		 * @param {string} offeringId offering's id
		 * @param {string} groupId Assessment group id
		 * @param {string} userEmail user's email
		 * @return {void} 
		 */
		Offerings_offeringIdGroups_groupIdLearners_userEmailDelete(offeringId: string, groupId: string, userEmail: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/groups/' + (groupId == null ? '' : encodeURIComponent(groupId)) + '/learners/' + (userEmail == null ? '' : encodeURIComponent(userEmail)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find learners with assessments pending x days before due date within the specified offeringId
		 * Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.
		 * Get offerings/{offeringId}/learners/pending-submission
		 * @param {string} offeringId offering's id
		 * @param {string} days days to assessment due date. Default is 3 days
		 * @return {Array<AssessmentPendingSubmission>} offering's learners
		 */
		Offerings_offeringIdLearnersPending_submissionGetByDays(offeringId: string, days: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AssessmentPendingSubmission>> {
			return this.http.get<Array<AssessmentPendingSubmission>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/learners/pending-submission&days=' + (days == null ? '' : encodeURIComponent(days)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update offering category metadata
		 * Updates the offering category metadata.
		 * Put offerings/{offeringId}/metadata/category
		 * @param {string} offeringId offering's id
		 * @return {OfferingMetadataResponse} offering updated
		 */
		Offerings_offeringIdMetadataCategoryPut(offeringId: string, requestBody: Offerings_offeringIdMetadataCategoryPutPutBody, headersHandler?: () => HttpHeaders): Observable<OfferingMetadataResponse> {
			return this.http.put<OfferingMetadataResponse>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/metadata/category', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update offering level metadata
		 * Updates the offering level metadata.
		 * Put offerings/{offeringId}/metadata/level
		 * @param {string} offeringId offering's id
		 * @return {OfferingMetadataResponse} offering updated
		 */
		Offerings_offeringIdMetadataLevelPut(offeringId: string, requestBody: Offerings_offeringIdMetadataLevelPutPutBody, headersHandler?: () => HttpHeaders): Observable<OfferingMetadataResponse> {
			return this.http.put<OfferingMetadataResponse>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/metadata/level', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update offering tags metadata
		 * Updates the offering tags metadata.
		 * Put offerings/{offeringId}/metadata/tags
		 * @param {string} offeringId offering's id
		 * @return {OfferingMetadataResponse} offering updated
		 */
		Offerings_offeringIdMetadataTagsPut(offeringId: string, requestBody: Offerings_offeringIdMetadataTagsPutPutBody, headersHandler?: () => HttpHeaders): Observable<OfferingMetadataResponse> {
			return this.http.put<OfferingMetadataResponse>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/metadata/tags', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update offering topic metadata
		 * Updates the offering topic metadata.
		 * Put offerings/{offeringId}/metadata/topic
		 * @param {string} offeringId offering's id
		 * @return {OfferingMetadataResponse} offering updated
		 */
		Offerings_offeringIdMetadataTopicPut(offeringId: string, requestBody: Offerings_offeringIdMetadataTopicPutPutBody, headersHandler?: () => HttpHeaders): Observable<OfferingMetadataResponse> {
			return this.http.put<OfferingMetadataResponse>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/metadata/topic', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Find offering's users
		 * Responds with a list of users in the offering (facilitators, learners and markers.).
		 * Get offerings/{offeringId}/users
		 * @param {string} offeringId offering's id
		 * @param {Offerings_offeringIdUsersGetByFacilitatorsAndLearnersAndMarkersFacilitators} facilitators If true, facilitators are included in the results.
		 * @param {Offerings_offeringIdUsersGetByFacilitatorsAndLearnersAndMarkersFacilitators} learners If true, learners are included in the results.
		 * @param {Offerings_offeringIdUsersGetByFacilitatorsAndLearnersAndMarkersFacilitators} markers If true, markers are included in the results.
		 * @return {Array<OfferingUserResponse>} offering's users
		 */
		Offerings_offeringIdUsersGetByFacilitatorsAndLearnersAndMarkers(offeringId: string, facilitators: Offerings_offeringIdUsersGetByFacilitatorsAndLearnersAndMarkersFacilitators | null | undefined, learners: Offerings_offeringIdUsersGetByFacilitatorsAndLearnersAndMarkersFacilitators | null | undefined, markers: Offerings_offeringIdUsersGetByFacilitatorsAndLearnersAndMarkersFacilitators | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<OfferingUserResponse>> {
			return this.http.get<Array<OfferingUserResponse>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/users&facilitators=' + facilitators + '&learners=' + learners + '&markers=' + markers, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds user to the offering
		 * Adds one or more users to the offering.
		 * Post offerings/{offeringId}/users
		 * @param {string} offeringId offering's id
		 * @return {void} 
		 */
		Offerings_offeringIdUsersPost(offeringId: string, requestBody: Array<OfferingUser>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/users', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove learners from coach's marking list
		 * Removes an array of learners from coach's marking list.
		 * Delete offerings/{offeringId}/users/{markerEmail}/marks
		 * @param {string} offeringId offering's id
		 * @param {string} markerEmail marker's email
		 * @return {Array<OfferingUser>} learners marked by the marker
		 */
		Offerings_offeringIdUsers_markerEmailMarksDelete(offeringId: string, markerEmail: string, headersHandler?: () => HttpHeaders): Observable<Array<OfferingUser>> {
			return this.http.delete<Array<OfferingUser>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/users/' + (markerEmail == null ? '' : encodeURIComponent(markerEmail)) + '/marks', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find Learners marked by a coach
		 * Responds with all learners marked by the specified coach.
		 * Get offerings/{offeringId}/users/{markerEmail}/marks
		 * @param {string} offeringId offering's id
		 * @param {string} markerEmail marker's email
		 * @return {Array<OfferingUser>} learners marked by the marker
		 */
		Offerings_offeringIdUsers_markerEmailMarksGet(offeringId: string, markerEmail: string, headersHandler?: () => HttpHeaders): Observable<Array<OfferingUser>> {
			return this.http.get<Array<OfferingUser>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/users/' + (markerEmail == null ? '' : encodeURIComponent(markerEmail)) + '/marks', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add learners to be marked by a coach
		 * Adds an array of learners to be marked by the specified coach.
		 * Post offerings/{offeringId}/users/{markerEmail}/marks
		 * @param {string} offeringId offering's id
		 * @param {string} markerEmail marker's email
		 * @param {Array<string>} requestBody array of learners e-mails
		 * @return {Array<OfferingUser>} learners marked by the marker
		 */
		Offerings_offeringIdUsers_markerEmailMarksPost(offeringId: string, markerEmail: string, requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<Array<OfferingUser>> {
			return this.http.post<Array<OfferingUser>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/users/' + (markerEmail == null ? '' : encodeURIComponent(markerEmail)) + '/marks', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Removes user from the offering
		 * Removes a user from the offering.
		 * Delete offerings/{offeringId}/users/{userEmail}
		 * @param {string} offeringId offering's id
		 * @param {string} userEmail user's email
		 * @return {void} 
		 */
		Offerings_offeringIdUsers_userEmailDelete(offeringId: string, userEmail: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reset user's assessment to draft state
		 * Resets the user's submitted assessment to a draft state.
		 * Delete offerings/{offeringId}/users/{userEmail}/assessments/{assessmentId}
		 * @param {string} offeringId offering's id
		 * @param {string} userEmail user's email
		 * @param {string} assessmentId assessment's id
		 * @return {void} 
		 */
		Offerings_offeringIdUsers_userEmailAssessments_assessmentIdDelete(offeringId: string, userEmail: string, assessmentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/assessments/' + (assessmentId == null ? '' : encodeURIComponent(assessmentId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Award badge
		 * Awards a badge to a user in the offering.
		 * Post offerings/{offeringId}/users/{userEmail}/badges/award
		 * @param {string} offeringId offering's id
		 * @param {string} userEmail user's email
		 * @return {void} 
		 */
		Offerings_offeringIdUsers_userEmailBadgesAwardPost(offeringId: string, userEmail: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/badges/award', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find learner's open response assessment submissions
		 * Responds with open response assessment submissions by a learner in an offering.
		 * Get offerings/{offeringId}/users/{userEmail}/submissions/open-response
		 * @param {string} offeringId offering's id
		 * @param {string} userEmail user's email
		 * @return {Array<Assignments>} user open response submission and mark details
		 */
		Offerings_offeringIdUsers_userEmailSubmissionsOpen_responseGet(offeringId: string, userEmail: string, headersHandler?: () => HttpHeaders): Observable<Array<Assignments>> {
			return this.http.get<Array<Assignments>>(this.baseUri + 'offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/submissions/open-response', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the current organisation
		 * Returns the current organisation info.
		 * Get org
		 * @return {OrgResponse} organisation summary data
		 */
		OrgGet(headersHandler?: () => HttpHeaders): Observable<OrgResponse> {
			return this.http.get<OrgResponse>(this.baseUri + 'org', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add new user
		 * Creates a new user.
		 * Post users
		 * @param {User} requestBody user
		 * @return {void} 
		 */
		UsersPost(requestBody: User, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Find learner progress in all offerings
		 * Responds with all learners' progress in all offerings.
		 * Get users/all/progress
		 * @param {string} top Returns only the first n results.
		 * @param {string} orderby Sorts the results.
		 * @param {string} filter Filters the results, based on a Boolean condition.
		 * @return {any} Learners progress
		 */
		UsersAllProgressGetByTopAndOrderbyAndFilter(top: string | null | undefined, orderby: string | null | undefined, filter: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/all/progress?top=' + (top == null ? '' : encodeURIComponent(top)) + '&orderby=' + (orderby == null ? '' : encodeURIComponent(orderby)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find user by email
		 * Responds with a user matching the specified email.
		 * Get users/{userEmail}
		 * @param {string} userEmail user's email
		 * @return {UserResponse} user data
		 */
		Users_userEmailGet(userEmail: string, headersHandler?: () => HttpHeaders): Observable<UserResponse> {
			return this.http.get<UserResponse>(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update user
		 * Updates the specified user by email.
		 * Patch users/{userEmail}
		 * @param {string} userEmail user's email
		 * @return {UserResponse} user updated
		 */
		Users_userEmailPatch(userEmail: string, requestBody: User, headersHandler?: () => HttpHeaders): Observable<UserResponse> {
			return this.http.patch<UserResponse>(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Find user's badges
		 * Responds with all badges that the specified user has been awarded.
		 * Get users/{userEmail}/badges
		 * @param {string} userEmail user's email
		 * @return {Array<UserBadge>} user's badges
		 */
		Users_userEmailBadgesGet(userEmail: string, headersHandler?: () => HttpHeaders): Observable<Array<UserBadge>> {
			return this.http.get<Array<UserBadge>>(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/badges', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Resend invitation email
		 * Re-sends an invitation e-mail to the specified user.
		 * Post users/{userEmail}/invite-email
		 * @param {string} userEmail user's email
		 * @return {void} 
		 */
		Users_userEmailInvite_emailPost(userEmail: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/invite-email', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Find user's offerings
		 * Responds with all offerings that the user in.
		 * Get users/{userEmail}/offerings
		 * @param {string} userEmail user's email
		 * @return {Array<OfferingMetadataResponse>} user's offerings
		 */
		Users_userEmailOfferingsGet(userEmail: string, headersHandler?: () => HttpHeaders): Observable<Array<OfferingMetadataResponse>> {
			return this.http.get<Array<OfferingMetadataResponse>>(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/offerings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds the user to the specified offerings as a learner
		 * Adds a user to an array of offerings by offeringId.
		 * Post users/{userEmail}/offerings
		 * @param {string} userEmail user's email
		 * @param {Array<string>} requestBody offering ids
		 * @return {Array<OfferingMetadataResponse>} user's offerings
		 */
		Users_userEmailOfferingsPost(userEmail: string, requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<Array<OfferingMetadataResponse>> {
			return this.http.post<Array<OfferingMetadataResponse>>(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/offerings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Find learner's progress in a specified offering
		 * Responds with the learner's progress in a specified offering.
		 * Get users/{userEmail}/offerings/{offeringId}/progress
		 * @param {string} userEmail user's email
		 * @param {string} offeringId offering's id
		 * @return {Users_userEmailOfferings_offeringIdProgressGetReturn} user's offerings
		 */
		Users_userEmailOfferings_offeringIdProgressGet(userEmail: string, offeringId: string, headersHandler?: () => HttpHeaders): Observable<Users_userEmailOfferings_offeringIdProgressGetReturn> {
			return this.http.get<Users_userEmailOfferings_offeringIdProgressGetReturn>(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/offerings/' + (offeringId == null ? '' : encodeURIComponent(offeringId)) + '/progress', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add permission to user
		 * Adds additional permissions to the specified user.
		 * Post users/{userEmail}/permissions/{permissionName}
		 * @param {string} userEmail user's email
		 * @param {Users_userEmailPermissions_permissionNamePostPermissionName} permissionName permission name
		 * @return {UserResponse} permission successfully added to user
		 */
		Users_userEmailPermissions_permissionNamePost(userEmail: string, permissionName: Users_userEmailPermissions_permissionNamePostPermissionName, headersHandler?: () => HttpHeaders): Observable<UserResponse> {
			return this.http.post<UserResponse>(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/permissions/' + permissionName, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Find learner's progress in offerings
		 * Responds with the specified learner's progress in all offerings.
		 * Get users/{userEmail}/progress
		 * @param {string} userEmail user's email
		 * @return {LearnerResponse} Learner Progress
		 */
		Users_userEmailProgressGet(userEmail: string, headersHandler?: () => HttpHeaders): Observable<LearnerResponse> {
			return this.http.get<LearnerResponse>(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/progress', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Suspend user
		 * Suspends the specified user's account.
		 * Put users/{userEmail}/suspend
		 * @param {string} userEmail user's email
		 * @return {void} 
		 */
		Users_userEmailSuspendPut(userEmail: string, requestBody: SuspendedRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/suspend', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Transfer a user between offerings
		 * Moves the user's access and progress from one offering to another.
		 * Patch users/{userEmail}/transfer
		 * @param {string} userEmail user's email
		 * @param {TransferRequest} requestBody transfer_data
		 * @return {void} Updated user information
		 */
		Users_userEmailTransferPatch(userEmail: string, requestBody: TransferRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'users/' + (userEmail == null ? '' : encodeURIComponent(userEmail)) + '/transfer', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	export interface Courses_contentIdMetadataCategoryPutPutBody {
		category?: string | null;
	}
	export interface Courses_contentIdMetadataCategoryPutPutBodyFormProperties {
		category: FormControl<string | null | undefined>,
	}
	export function CreateCourses_contentIdMetadataCategoryPutPutBodyFormGroup() {
		return new FormGroup<Courses_contentIdMetadataCategoryPutPutBodyFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Courses_contentIdMetadataLevelPutPutBody {
		level?: string | null;
	}
	export interface Courses_contentIdMetadataLevelPutPutBodyFormProperties {
		level: FormControl<string | null | undefined>,
	}
	export function CreateCourses_contentIdMetadataLevelPutPutBodyFormGroup() {
		return new FormGroup<Courses_contentIdMetadataLevelPutPutBodyFormProperties>({
			level: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Courses_contentIdMetadataTagsPutPutBody {
		tags?: Array<string>;
	}
	export interface Courses_contentIdMetadataTagsPutPutBodyFormProperties {
	}
	export function CreateCourses_contentIdMetadataTagsPutPutBodyFormGroup() {
		return new FormGroup<Courses_contentIdMetadataTagsPutPutBodyFormProperties>({
		});

	}

	export interface Courses_contentIdMetadataTopicPutPutBody {
		topic?: string | null;
	}
	export interface Courses_contentIdMetadataTopicPutPutBodyFormProperties {
		topic: FormControl<string | null | undefined>,
	}
	export function CreateCourses_contentIdMetadataTopicPutPutBodyFormGroup() {
		return new FormGroup<Courses_contentIdMetadataTopicPutPutBodyFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Courses_rootContentIdPermissions_userEmailPostPostBody {
		isBuilder?: boolean | null;
		isReviewer?: boolean | null;
	}
	export interface Courses_rootContentIdPermissions_userEmailPostPostBodyFormProperties {
		isBuilder: FormControl<boolean | null | undefined>,
		isReviewer: FormControl<boolean | null | undefined>,
	}
	export function CreateCourses_rootContentIdPermissions_userEmailPostPostBodyFormGroup() {
		return new FormGroup<Courses_rootContentIdPermissions_userEmailPostPostBodyFormProperties>({
			isBuilder: new FormControl<boolean | null | undefined>(undefined),
			isReviewer: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Offerings_offeringIdAnalyticsPulsesResponsesGetByPulseTypeAndResponseTimePulseType { submit_text = 'submit_text', MCQ = 'MCQ', spatial_triangular = 'spatial_triangular', spatial_planar = 'spatial_planar', spatial_linear = 'spatial_linear' }

	export interface Offerings_offeringIdAssessments_assessmentId_userEmailPatchPatchBody {
		dueDate?: Date | null;
	}
	export interface Offerings_offeringIdAssessments_assessmentId_userEmailPatchPatchBodyFormProperties {
		dueDate: FormControl<Date | null | undefined>,
	}
	export function CreateOfferings_offeringIdAssessments_assessmentId_userEmailPatchPatchBodyFormGroup() {
		return new FormGroup<Offerings_offeringIdAssessments_assessmentId_userEmailPatchPatchBodyFormProperties>({
			dueDate: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface Offerings_offeringIdChannels_channelIdLearnersPostPostBody {
		email?: string | null;
	}
	export interface Offerings_offeringIdChannels_channelIdLearnersPostPostBodyFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateOfferings_offeringIdChannels_channelIdLearnersPostPostBodyFormGroup() {
		return new FormGroup<Offerings_offeringIdChannels_channelIdLearnersPostPostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Offerings_offeringIdGroups_groupIdLearnersPostPostBody {
		email?: string | null;
	}
	export interface Offerings_offeringIdGroups_groupIdLearnersPostPostBodyFormProperties {
		email: FormControl<string | null | undefined>,
	}
	export function CreateOfferings_offeringIdGroups_groupIdLearnersPostPostBodyFormGroup() {
		return new FormGroup<Offerings_offeringIdGroups_groupIdLearnersPostPostBodyFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Offerings_offeringIdMetadataCategoryPutPutBody {
		category?: string | null;
	}
	export interface Offerings_offeringIdMetadataCategoryPutPutBodyFormProperties {
		category: FormControl<string | null | undefined>,
	}
	export function CreateOfferings_offeringIdMetadataCategoryPutPutBodyFormGroup() {
		return new FormGroup<Offerings_offeringIdMetadataCategoryPutPutBodyFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Offerings_offeringIdMetadataLevelPutPutBody {
		level?: string | null;
	}
	export interface Offerings_offeringIdMetadataLevelPutPutBodyFormProperties {
		level: FormControl<string | null | undefined>,
	}
	export function CreateOfferings_offeringIdMetadataLevelPutPutBodyFormGroup() {
		return new FormGroup<Offerings_offeringIdMetadataLevelPutPutBodyFormProperties>({
			level: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Offerings_offeringIdMetadataTagsPutPutBody {
		tags?: Array<string>;
	}
	export interface Offerings_offeringIdMetadataTagsPutPutBodyFormProperties {
	}
	export function CreateOfferings_offeringIdMetadataTagsPutPutBodyFormGroup() {
		return new FormGroup<Offerings_offeringIdMetadataTagsPutPutBodyFormProperties>({
		});

	}

	export interface Offerings_offeringIdMetadataTopicPutPutBody {
		topic?: string | null;
	}
	export interface Offerings_offeringIdMetadataTopicPutPutBodyFormProperties {
		topic: FormControl<string | null | undefined>,
	}
	export function CreateOfferings_offeringIdMetadataTopicPutPutBodyFormGroup() {
		return new FormGroup<Offerings_offeringIdMetadataTopicPutPutBodyFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Offerings_offeringIdUsersGetByFacilitatorsAndLearnersAndMarkersFacilitators { true = 'true', false = 'false' }

	export interface Users_userEmailOfferings_offeringIdProgressGetReturn {
		completion?: string | null;
		email?: string | null;
		firstName?: string | null;
		id?: string | null;
		lastName?: string | null;
	}
	export interface Users_userEmailOfferings_offeringIdProgressGetReturnFormProperties {
		completion: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,
		firstName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastName: FormControl<string | null | undefined>,
	}
	export function CreateUsers_userEmailOfferings_offeringIdProgressGetReturnFormGroup() {
		return new FormGroup<Users_userEmailOfferings_offeringIdProgressGetReturnFormProperties>({
			completion: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			firstName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum Users_userEmailPermissions_permissionNamePostPermissionName { builder = 'builder', manager = 'manager' }

}

