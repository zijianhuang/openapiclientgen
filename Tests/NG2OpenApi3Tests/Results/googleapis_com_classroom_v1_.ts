import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Announcement created by a teacher for students of the course */
	export interface Announcement {

		/** Absolute link to this announcement in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only. */
		alternateLink?: string | null;

		/** Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`. */
		assigneeMode?: AnnouncementAssigneeMode | null;

		/** Identifier of the course. Read-only. */
		courseId?: string | null;

		/** Timestamp when this announcement was created. Read-only. */
		creationTime?: string | null;

		/** Identifier for the user that created the announcement. Read-only. */
		creatorUserId?: string | null;

		/** Classroom-assigned identifier of this announcement, unique per course. Read-only. */
		id?: string | null;

		/** Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. */
		individualStudentsOptions?: IndividualStudentsOptions;

		/** Additional materials. Announcements must have no more than 20 material items. */
		materials?: Array<Material>;

		/** Optional timestamp when this announcement is scheduled to be published. */
		scheduledTime?: string | null;

		/** Status of this announcement. If unspecified, the default state is `DRAFT`. */
		state?: AnnouncementState | null;

		/** Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters. */
		text?: string | null;

		/** Timestamp of the most recent change to this announcement. Read-only. */
		updateTime?: string | null;
	}

	/** Announcement created by a teacher for students of the course */
	export interface AnnouncementFormProperties {

		/** Absolute link to this announcement in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only. */
		alternateLink: FormControl<string | null | undefined>,

		/** Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`. */
		assigneeMode: FormControl<AnnouncementAssigneeMode | null | undefined>,

		/** Identifier of the course. Read-only. */
		courseId: FormControl<string | null | undefined>,

		/** Timestamp when this announcement was created. Read-only. */
		creationTime: FormControl<string | null | undefined>,

		/** Identifier for the user that created the announcement. Read-only. */
		creatorUserId: FormControl<string | null | undefined>,

		/** Classroom-assigned identifier of this announcement, unique per course. Read-only. */
		id: FormControl<string | null | undefined>,

		/** Optional timestamp when this announcement is scheduled to be published. */
		scheduledTime: FormControl<string | null | undefined>,

		/** Status of this announcement. If unspecified, the default state is `DRAFT`. */
		state: FormControl<AnnouncementState | null | undefined>,

		/** Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters. */
		text: FormControl<string | null | undefined>,

		/** Timestamp of the most recent change to this announcement. Read-only. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateAnnouncementFormGroup() {
		return new FormGroup<AnnouncementFormProperties>({
			alternateLink: new FormControl<string | null | undefined>(undefined),
			assigneeMode: new FormControl<AnnouncementAssigneeMode | null | undefined>(undefined),
			courseId: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			creatorUserId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			scheduledTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<AnnouncementState | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnnouncementAssigneeMode { ASSIGNEE_MODE_UNSPECIFIED = 0, ALL_STUDENTS = 1, INDIVIDUAL_STUDENTS = 2 }


	/** Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. */
	export interface IndividualStudentsOptions {

		/** Identifiers for the students that have access to the coursework/announcement. */
		studentIds?: Array<string>;
	}

	/** Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. */
	export interface IndividualStudentsOptionsFormProperties {
	}
	export function CreateIndividualStudentsOptionsFormGroup() {
		return new FormGroup<IndividualStudentsOptionsFormProperties>({
		});

	}


	/** Material attached to course work. When creating attachments, setting the `form` field is not supported. */
	export interface Material {

		/** Drive file that is used as material for course work. */
		driveFile?: SharedDriveFile;

		/** Google Forms item. */
		form?: Form;

		/** URL item. */
		link?: Link;

		/** YouTube video item. */
		youtubeVideo?: YouTubeVideo;
	}

	/** Material attached to course work. When creating attachments, setting the `form` field is not supported. */
	export interface MaterialFormProperties {
	}
	export function CreateMaterialFormGroup() {
		return new FormGroup<MaterialFormProperties>({
		});

	}


	/** Drive file that is used as material for course work. */
	export interface SharedDriveFile {

		/** Representation of a Google Drive file. */
		driveFile?: DriveFile;

		/** Mechanism by which students access the Drive item. */
		shareMode?: SharedDriveFileShareMode | null;
	}

	/** Drive file that is used as material for course work. */
	export interface SharedDriveFileFormProperties {

		/** Mechanism by which students access the Drive item. */
		shareMode: FormControl<SharedDriveFileShareMode | null | undefined>,
	}
	export function CreateSharedDriveFileFormGroup() {
		return new FormGroup<SharedDriveFileFormProperties>({
			shareMode: new FormControl<SharedDriveFileShareMode | null | undefined>(undefined),
		});

	}


	/** Representation of a Google Drive file. */
	export interface DriveFile {

		/** URL that can be used to access the Drive item. Read-only. */
		alternateLink?: string | null;

		/** Drive API resource ID. */
		id?: string | null;

		/** URL of a thumbnail image of the Drive item. Read-only. */
		thumbnailUrl?: string | null;

		/** Title of the Drive item. Read-only. */
		title?: string | null;
	}

	/** Representation of a Google Drive file. */
	export interface DriveFileFormProperties {

		/** URL that can be used to access the Drive item. Read-only. */
		alternateLink: FormControl<string | null | undefined>,

		/** Drive API resource ID. */
		id: FormControl<string | null | undefined>,

		/** URL of a thumbnail image of the Drive item. Read-only. */
		thumbnailUrl: FormControl<string | null | undefined>,

		/** Title of the Drive item. Read-only. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateDriveFileFormGroup() {
		return new FormGroup<DriveFileFormProperties>({
			alternateLink: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SharedDriveFileShareMode { UNKNOWN_SHARE_MODE = 0, VIEW = 1, EDIT = 2, STUDENT_COPY = 3 }


	/** Google Forms item. */
	export interface Form {

		/** URL of the form. */
		formUrl?: string | null;

		/** URL of the form responses document. Only set if responses have been recorded and only when the requesting user is an editor of the form. Read-only. */
		responseUrl?: string | null;

		/** URL of a thumbnail image of the Form. Read-only. */
		thumbnailUrl?: string | null;

		/** Title of the Form. Read-only. */
		title?: string | null;
	}

	/** Google Forms item. */
	export interface FormFormProperties {

		/** URL of the form. */
		formUrl: FormControl<string | null | undefined>,

		/** URL of the form responses document. Only set if responses have been recorded and only when the requesting user is an editor of the form. Read-only. */
		responseUrl: FormControl<string | null | undefined>,

		/** URL of a thumbnail image of the Form. Read-only. */
		thumbnailUrl: FormControl<string | null | undefined>,

		/** Title of the Form. Read-only. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateFormFormGroup() {
		return new FormGroup<FormFormProperties>({
			formUrl: new FormControl<string | null | undefined>(undefined),
			responseUrl: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** URL item. */
	export interface Link {

		/** URL of a thumbnail image of the target URL. Read-only. */
		thumbnailUrl?: string | null;

		/** Title of the target of the URL. Read-only. */
		title?: string | null;

		/** URL to link to. This must be a valid UTF-8 string containing between 1 and 2024 characters. */
		url?: string | null;
	}

	/** URL item. */
	export interface LinkFormProperties {

		/** URL of a thumbnail image of the target URL. Read-only. */
		thumbnailUrl: FormControl<string | null | undefined>,

		/** Title of the target of the URL. Read-only. */
		title: FormControl<string | null | undefined>,

		/** URL to link to. This must be a valid UTF-8 string containing between 1 and 2024 characters. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** YouTube video item. */
	export interface YouTubeVideo {

		/** URL that can be used to view the YouTube video. Read-only. */
		alternateLink?: string | null;

		/** YouTube API resource ID. */
		id?: string | null;

		/** URL of a thumbnail image of the YouTube video. Read-only. */
		thumbnailUrl?: string | null;

		/** Title of the YouTube video. Read-only. */
		title?: string | null;
	}

	/** YouTube video item. */
	export interface YouTubeVideoFormProperties {

		/** URL that can be used to view the YouTube video. Read-only. */
		alternateLink: FormControl<string | null | undefined>,

		/** YouTube API resource ID. */
		id: FormControl<string | null | undefined>,

		/** URL of a thumbnail image of the YouTube video. Read-only. */
		thumbnailUrl: FormControl<string | null | undefined>,

		/** Title of the YouTube video. Read-only. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateYouTubeVideoFormGroup() {
		return new FormGroup<YouTubeVideoFormProperties>({
			alternateLink: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			thumbnailUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AnnouncementState { ANNOUNCEMENT_STATE_UNSPECIFIED = 0, PUBLISHED = 1, DRAFT = 2, DELETED = 3 }


	/** Additional details for assignments. */
	export interface Assignment {

		/** Representation of a Google Drive folder. */
		studentWorkFolder?: DriveFolder;
	}

	/** Additional details for assignments. */
	export interface AssignmentFormProperties {
	}
	export function CreateAssignmentFormGroup() {
		return new FormGroup<AssignmentFormProperties>({
		});

	}


	/** Representation of a Google Drive folder. */
	export interface DriveFolder {

		/** URL that can be used to access the Drive folder. Read-only. */
		alternateLink?: string | null;

		/** Drive API resource ID. */
		id?: string | null;

		/** Title of the Drive folder. Read-only. */
		title?: string | null;
	}

	/** Representation of a Google Drive folder. */
	export interface DriveFolderFormProperties {

		/** URL that can be used to access the Drive folder. Read-only. */
		alternateLink: FormControl<string | null | undefined>,

		/** Drive API resource ID. */
		id: FormControl<string | null | undefined>,

		/** Title of the Drive folder. Read-only. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateDriveFolderFormGroup() {
		return new FormGroup<DriveFolderFormProperties>({
			alternateLink: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Student work for an assignment. */
	export interface AssignmentSubmission {

		/** Attachments added by the student. Drive files that correspond to materials with a share mode of STUDENT_COPY may not exist yet if the student has not accessed the assignment in Classroom. Some attachment metadata is only populated if the requesting user has permission to access it. Identifier and alternate_link fields are always available, but others (for example, title) may not be. */
		attachments?: Array<Attachment>;
	}

	/** Student work for an assignment. */
	export interface AssignmentSubmissionFormProperties {
	}
	export function CreateAssignmentSubmissionFormGroup() {
		return new FormGroup<AssignmentSubmissionFormProperties>({
		});

	}


	/** Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported. */
	export interface Attachment {

		/** Representation of a Google Drive file. */
		driveFile?: DriveFile;

		/** Google Forms item. */
		form?: Form;

		/** URL item. */
		link?: Link;

		/** YouTube video item. */
		youTubeVideo?: YouTubeVideo;
	}

	/** Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported. */
	export interface AttachmentFormProperties {
	}
	export function CreateAttachmentFormGroup() {
		return new FormGroup<AttachmentFormProperties>({
		});

	}


	/** A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission. */
	export interface CloudPubsubTopic {

		/** The `name` field of a Cloud Pub/Sub [Topic](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic). */
		topicName?: string | null;
	}

	/** A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission. */
	export interface CloudPubsubTopicFormProperties {

		/** The `name` field of a Cloud Pub/Sub [Topic](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic). */
		topicName: FormControl<string | null | undefined>,
	}
	export function CreateCloudPubsubTopicFormGroup() {
		return new FormGroup<CloudPubsubTopicFormProperties>({
			topicName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A Course in Classroom. */
	export interface Course {

		/** Absolute link to this course in the Classroom web UI. Read-only. */
		alternateLink?: string | null;

		/** The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. The Calendar for a course is created asynchronously when the course is set to `CourseState.ACTIVE` for the first time (at creation time or when it is updated to `ACTIVE` through the UI or the API). The Calendar ID will not be populated until the creation process is completed. Read-only. */
		calendarId?: string | null;

		/** The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only. */
		courseGroupEmail?: string | null;

		/** Sets of materials that appear on the "about" page of this course. Read-only. */
		courseMaterialSets?: Array<CourseMaterialSet>;

		/** State of the course. If unspecified, the default state is `PROVISIONED`. */
		courseState?: CourseCourseState | null;

		/** Creation time of the course. Specifying this field in a course update mask results in an error. Read-only. */
		creationTime?: string | null;

		/** Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters. */
		description?: string | null;

		/** Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters. */
		descriptionHeading?: string | null;

		/** Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only. */
		enrollmentCode?: string | null;

		/** The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details. */
		gradebookSettings?: GradebookSettings;

		/** Whether or not guardian notifications are enabled for this course. Read-only. */
		guardiansEnabled?: boolean | null;

		/** Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error. */
		id?: string | null;

		/** Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string. */
		name?: string | null;

		/** The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only. */
		ownerId?: string | null;

		/** Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters. */
		room?: string | null;

		/** Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters. */
		section?: string | null;

		/** Representation of a Google Drive folder. */
		teacherFolder?: DriveFolder;

		/** The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only. */
		teacherGroupEmail?: string | null;

		/** Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only. */
		updateTime?: string | null;
	}

	/** A Course in Classroom. */
	export interface CourseFormProperties {

		/** Absolute link to this course in the Classroom web UI. Read-only. */
		alternateLink: FormControl<string | null | undefined>,

		/** The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. The Calendar for a course is created asynchronously when the course is set to `CourseState.ACTIVE` for the first time (at creation time or when it is updated to `ACTIVE` through the UI or the API). The Calendar ID will not be populated until the creation process is completed. Read-only. */
		calendarId: FormControl<string | null | undefined>,

		/** The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only. */
		courseGroupEmail: FormControl<string | null | undefined>,

		/** State of the course. If unspecified, the default state is `PROVISIONED`. */
		courseState: FormControl<CourseCourseState | null | undefined>,

		/** Creation time of the course. Specifying this field in a course update mask results in an error. Read-only. */
		creationTime: FormControl<string | null | undefined>,

		/** Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters. */
		descriptionHeading: FormControl<string | null | undefined>,

		/** Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only. */
		enrollmentCode: FormControl<string | null | undefined>,

		/** Whether or not guardian notifications are enabled for this course. Read-only. */
		guardiansEnabled: FormControl<boolean | null | undefined>,

		/** Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error. */
		id: FormControl<string | null | undefined>,

		/** Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string. */
		name: FormControl<string | null | undefined>,

		/** The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only. */
		ownerId: FormControl<string | null | undefined>,

		/** Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters. */
		room: FormControl<string | null | undefined>,

		/** Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters. */
		section: FormControl<string | null | undefined>,

		/** The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only. */
		teacherGroupEmail: FormControl<string | null | undefined>,

		/** Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCourseFormGroup() {
		return new FormGroup<CourseFormProperties>({
			alternateLink: new FormControl<string | null | undefined>(undefined),
			calendarId: new FormControl<string | null | undefined>(undefined),
			courseGroupEmail: new FormControl<string | null | undefined>(undefined),
			courseState: new FormControl<CourseCourseState | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			descriptionHeading: new FormControl<string | null | undefined>(undefined),
			enrollmentCode: new FormControl<string | null | undefined>(undefined),
			guardiansEnabled: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			ownerId: new FormControl<string | null | undefined>(undefined),
			room: new FormControl<string | null | undefined>(undefined),
			section: new FormControl<string | null | undefined>(undefined),
			teacherGroupEmail: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole. */
	export interface CourseMaterialSet {

		/** Materials attached to this set. */
		materials?: Array<CourseMaterial>;

		/** Title for this set. */
		title?: string | null;
	}

	/** A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole. */
	export interface CourseMaterialSetFormProperties {

		/** Title for this set. */
		title: FormControl<string | null | undefined>,
	}
	export function CreateCourseMaterialSetFormGroup() {
		return new FormGroup<CourseMaterialSetFormProperties>({
			title: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A material attached to a course as part of a material set. */
	export interface CourseMaterial {

		/** Representation of a Google Drive file. */
		driveFile?: DriveFile;

		/** Google Forms item. */
		form?: Form;

		/** URL item. */
		link?: Link;

		/** YouTube video item. */
		youTubeVideo?: YouTubeVideo;
	}

	/** A material attached to a course as part of a material set. */
	export interface CourseMaterialFormProperties {
	}
	export function CreateCourseMaterialFormGroup() {
		return new FormGroup<CourseMaterialFormProperties>({
		});

	}

	export enum CourseCourseState { COURSE_STATE_UNSPECIFIED = 0, ACTIVE = 1, ARCHIVED = 2, PROVISIONED = 3, DECLINED = 4, SUSPENDED = 5 }


	/** The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details. */
	export interface GradebookSettings {

		/** Indicates how the overall grade is calculated. */
		calculationType?: GradebookSettingsCalculationType | null;

		/** Indicates who can see the overall grade.. */
		displaySetting?: GradebookSettingsDisplaySetting | null;

		/** Grade categories that are available for coursework in the course. */
		gradeCategories?: Array<GradeCategory>;
	}

	/** The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details. */
	export interface GradebookSettingsFormProperties {

		/** Indicates how the overall grade is calculated. */
		calculationType: FormControl<GradebookSettingsCalculationType | null | undefined>,

		/** Indicates who can see the overall grade.. */
		displaySetting: FormControl<GradebookSettingsDisplaySetting | null | undefined>,
	}
	export function CreateGradebookSettingsFormGroup() {
		return new FormGroup<GradebookSettingsFormProperties>({
			calculationType: new FormControl<GradebookSettingsCalculationType | null | undefined>(undefined),
			displaySetting: new FormControl<GradebookSettingsDisplaySetting | null | undefined>(undefined),
		});

	}

	export enum GradebookSettingsCalculationType { CALCULATION_TYPE_UNSPECIFIED = 0, TOTAL_POINTS = 1, WEIGHTED_CATEGORIES = 2 }

	export enum GradebookSettingsDisplaySetting { DISPLAY_SETTING_UNSPECIFIED = 0, SHOW_OVERALL_GRADE = 1, HIDE_OVERALL_GRADE = 2, SHOW_TEACHERS_ONLY = 3 }


	/** Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details. */
	export interface GradeCategory {

		/** Default value of denominator. Only applicable when grade calculation type is TOTAL_POINTS. */
		defaultGradeDenominator?: number | null;

		/** ID of the grade category. */
		id?: string | null;

		/** Name of the grade category. */
		name?: string | null;

		/** The weight of the category average as part of overall average. A weight of 12.34% is represented as 123400 (100% is 1,000,000). The last two digits should always be zero since we use two decimal precision. Only applicable when grade calculation type is WEIGHTED_CATEGORIES. */
		weight?: number | null;
	}

	/** Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details. */
	export interface GradeCategoryFormProperties {

		/** Default value of denominator. Only applicable when grade calculation type is TOTAL_POINTS. */
		defaultGradeDenominator: FormControl<number | null | undefined>,

		/** ID of the grade category. */
		id: FormControl<string | null | undefined>,

		/** Name of the grade category. */
		name: FormControl<string | null | undefined>,

		/** The weight of the category average as part of overall average. A weight of 12.34% is represented as 123400 (100% is 1,000,000). The last two digits should always be zero since we use two decimal precision. Only applicable when grade calculation type is WEIGHTED_CATEGORIES. */
		weight: FormControl<number | null | undefined>,
	}
	export function CreateGradeCategoryFormGroup() {
		return new FormGroup<GradeCategoryFormProperties>({
			defaultGradeDenominator: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			weight: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Alternative identifier for a course. An alias uniquely identifies a course. It must be unique within one of the following scopes: * domain: A domain-scoped alias is visible to all users within the alias creator's domain and can be created only by a domain admin. A domain-scoped alias is often used when a course has an identifier external to Classroom. * project: A project-scoped alias is visible to any request from an application using the Developer Console project ID that created the alias and can be created by any project. A project-scoped alias is often used when an application has alternative identifiers. A random value can also be used to avoid duplicate courses in the event of transmission failures, as retrying a request will return `ALREADY_EXISTS` if a previous one has succeeded. */
	export interface CourseAlias {

		/** Alias string. The format of the string indicates the desired alias scoping. * `d:` indicates a domain-scoped alias. Example: `d:math_101` * `p:` indicates a project-scoped alias. Example: `p:abc123` This field has a maximum length of 256 characters. */
		alias?: string | null;
	}

	/** Alternative identifier for a course. An alias uniquely identifies a course. It must be unique within one of the following scopes: * domain: A domain-scoped alias is visible to all users within the alias creator's domain and can be created only by a domain admin. A domain-scoped alias is often used when a course has an identifier external to Classroom. * project: A project-scoped alias is visible to any request from an application using the Developer Console project ID that created the alias and can be created by any project. A project-scoped alias is often used when an application has alternative identifiers. A random value can also be used to avoid duplicate courses in the event of transmission failures, as retrying a request will return `ALREADY_EXISTS` if a previous one has succeeded. */
	export interface CourseAliasFormProperties {

		/** Alias string. The format of the string indicates the desired alias scoping. * `d:` indicates a domain-scoped alias. Example: `d:math_101` * `p:` indicates a project-scoped alias. Example: `p:abc123` This field has a maximum length of 256 characters. */
		alias: FormControl<string | null | undefined>,
	}
	export function CreateCourseAliasFormGroup() {
		return new FormGroup<CourseAliasFormProperties>({
			alias: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`. */
	export interface CourseRosterChangesInfo {

		/** The `course_id` of the course to subscribe to roster changes for. */
		courseId?: string | null;
	}

	/** Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`. */
	export interface CourseRosterChangesInfoFormProperties {

		/** The `course_id` of the course to subscribe to roster changes for. */
		courseId: FormControl<string | null | undefined>,
	}
	export function CreateCourseRosterChangesInfoFormGroup() {
		return new FormGroup<CourseRosterChangesInfoFormProperties>({
			courseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Course work created by a teacher for students of the course. */
	export interface CourseWork {

		/** Absolute link to this course work in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only. */
		alternateLink?: string | null;

		/** Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`. */
		assigneeMode?: AnnouncementAssigneeMode | null;

		/** Additional details for assignments. */
		assignment?: Assignment;

		/** Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only. */
		associatedWithDeveloper?: boolean | null;

		/** Identifier of the course. Read-only. */
		courseId?: string | null;

		/** Timestamp when this course work was created. Read-only. */
		creationTime?: string | null;

		/** Identifier for the user that created the coursework. Read-only. */
		creatorUserId?: string | null;

		/** Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters. */
		description?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		dueDate?: Date;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		dueTime?: TimeOfDay;

		/** Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details. */
		gradeCategory?: GradeCategory;

		/** Classroom-assigned identifier of this course work, unique per course. Read-only. */
		id?: string | null;

		/** Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. */
		individualStudentsOptions?: IndividualStudentsOptions;

		/** Additional materials. CourseWork must have no more than 20 material items. */
		materials?: Array<Material>;

		/** Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value. */
		maxPoints?: number | null;

		/** Additional details for multiple-choice questions. */
		multipleChoiceQuestion?: MultipleChoiceQuestion;

		/** Optional timestamp when this course work is scheduled to be published. */
		scheduledTime?: string | null;

		/** Status of this course work. If unspecified, the default state is `DRAFT`. */
		state?: CourseWorkState | null;

		/** Setting to determine when students are allowed to modify submissions. If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`. */
		submissionModificationMode?: CourseWorkSubmissionModificationMode | null;

		/** Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters. */
		title?: string | null;

		/** Identifier for the topic that this coursework is associated with. Must match an existing topic in the course. */
		topicId?: string | null;

		/** Timestamp of the most recent change to this course work. Read-only. */
		updateTime?: string | null;

		/** Type of this course work. The type is set when the course work is created and cannot be changed. */
		workType?: CourseWorkWorkType | null;
	}

	/** Course work created by a teacher for students of the course. */
	export interface CourseWorkFormProperties {

		/** Absolute link to this course work in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only. */
		alternateLink: FormControl<string | null | undefined>,

		/** Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`. */
		assigneeMode: FormControl<AnnouncementAssigneeMode | null | undefined>,

		/** Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only. */
		associatedWithDeveloper: FormControl<boolean | null | undefined>,

		/** Identifier of the course. Read-only. */
		courseId: FormControl<string | null | undefined>,

		/** Timestamp when this course work was created. Read-only. */
		creationTime: FormControl<string | null | undefined>,

		/** Identifier for the user that created the coursework. Read-only. */
		creatorUserId: FormControl<string | null | undefined>,

		/** Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters. */
		description: FormControl<string | null | undefined>,

		/** Classroom-assigned identifier of this course work, unique per course. Read-only. */
		id: FormControl<string | null | undefined>,

		/** Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value. */
		maxPoints: FormControl<number | null | undefined>,

		/** Optional timestamp when this course work is scheduled to be published. */
		scheduledTime: FormControl<string | null | undefined>,

		/** Status of this course work. If unspecified, the default state is `DRAFT`. */
		state: FormControl<CourseWorkState | null | undefined>,

		/** Setting to determine when students are allowed to modify submissions. If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`. */
		submissionModificationMode: FormControl<CourseWorkSubmissionModificationMode | null | undefined>,

		/** Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters. */
		title: FormControl<string | null | undefined>,

		/** Identifier for the topic that this coursework is associated with. Must match an existing topic in the course. */
		topicId: FormControl<string | null | undefined>,

		/** Timestamp of the most recent change to this course work. Read-only. */
		updateTime: FormControl<string | null | undefined>,

		/** Type of this course work. The type is set when the course work is created and cannot be changed. */
		workType: FormControl<CourseWorkWorkType | null | undefined>,
	}
	export function CreateCourseWorkFormGroup() {
		return new FormGroup<CourseWorkFormProperties>({
			alternateLink: new FormControl<string | null | undefined>(undefined),
			assigneeMode: new FormControl<AnnouncementAssigneeMode | null | undefined>(undefined),
			associatedWithDeveloper: new FormControl<boolean | null | undefined>(undefined),
			courseId: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			creatorUserId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			maxPoints: new FormControl<number | null | undefined>(undefined),
			scheduledTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CourseWorkState | null | undefined>(undefined),
			submissionModificationMode: new FormControl<CourseWorkSubmissionModificationMode | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			topicId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			workType: new FormControl<CourseWorkWorkType | null | undefined>(undefined),
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


	/** Additional details for multiple-choice questions. */
	export interface MultipleChoiceQuestion {

		/** Possible choices. */
		choices?: Array<string>;
	}

	/** Additional details for multiple-choice questions. */
	export interface MultipleChoiceQuestionFormProperties {
	}
	export function CreateMultipleChoiceQuestionFormGroup() {
		return new FormGroup<MultipleChoiceQuestionFormProperties>({
		});

	}

	export enum CourseWorkState { COURSE_WORK_STATE_UNSPECIFIED = 0, PUBLISHED = 1, DRAFT = 2, DELETED = 3 }

	export enum CourseWorkSubmissionModificationMode { SUBMISSION_MODIFICATION_MODE_UNSPECIFIED = 0, MODIFIABLE_UNTIL_TURNED_IN = 1, MODIFIABLE = 2 }

	export enum CourseWorkWorkType { COURSE_WORK_TYPE_UNSPECIFIED = 0, ASSIGNMENT = 1, SHORT_ANSWER_QUESTION = 2, MULTIPLE_CHOICE_QUESTION = 3 }


	/** Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`. */
	export interface CourseWorkChangesInfo {

		/** The `course_id` of the course to subscribe to work changes for. */
		courseId?: string | null;
	}

	/** Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`. */
	export interface CourseWorkChangesInfoFormProperties {

		/** The `course_id` of the course to subscribe to work changes for. */
		courseId: FormControl<string | null | undefined>,
	}
	export function CreateCourseWorkChangesInfoFormGroup() {
		return new FormGroup<CourseWorkChangesInfoFormProperties>({
			courseId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Course work material created by a teacher for students of the course */
	export interface CourseWorkMaterial {

		/** Absolute link to this course work material in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only. */
		alternateLink?: string | null;

		/** Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`. */
		assigneeMode?: AnnouncementAssigneeMode | null;

		/** Identifier of the course. Read-only. */
		courseId?: string | null;

		/** Timestamp when this course work material was created. Read-only. */
		creationTime?: string | null;

		/** Identifier for the user that created the course work material. Read-only. */
		creatorUserId?: string | null;

		/** Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters. */
		description?: string | null;

		/** Classroom-assigned identifier of this course work material, unique per course. Read-only. */
		id?: string | null;

		/** Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`. */
		individualStudentsOptions?: IndividualStudentsOptions;

		/** Additional materials. A course work material must have no more than 20 material items. */
		materials?: Array<Material>;

		/** Optional timestamp when this course work material is scheduled to be published. */
		scheduledTime?: string | null;

		/** Status of this course work material. If unspecified, the default state is `DRAFT`. */
		state?: CourseWorkMaterialState | null;

		/** Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters. */
		title?: string | null;

		/** Identifier for the topic that this course work material is associated with. Must match an existing topic in the course. */
		topicId?: string | null;

		/** Timestamp of the most recent change to this course work material. Read-only. */
		updateTime?: string | null;
	}

	/** Course work material created by a teacher for students of the course */
	export interface CourseWorkMaterialFormProperties {

		/** Absolute link to this course work material in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only. */
		alternateLink: FormControl<string | null | undefined>,

		/** Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`. */
		assigneeMode: FormControl<AnnouncementAssigneeMode | null | undefined>,

		/** Identifier of the course. Read-only. */
		courseId: FormControl<string | null | undefined>,

		/** Timestamp when this course work material was created. Read-only. */
		creationTime: FormControl<string | null | undefined>,

		/** Identifier for the user that created the course work material. Read-only. */
		creatorUserId: FormControl<string | null | undefined>,

		/** Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters. */
		description: FormControl<string | null | undefined>,

		/** Classroom-assigned identifier of this course work material, unique per course. Read-only. */
		id: FormControl<string | null | undefined>,

		/** Optional timestamp when this course work material is scheduled to be published. */
		scheduledTime: FormControl<string | null | undefined>,

		/** Status of this course work material. If unspecified, the default state is `DRAFT`. */
		state: FormControl<CourseWorkMaterialState | null | undefined>,

		/** Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters. */
		title: FormControl<string | null | undefined>,

		/** Identifier for the topic that this course work material is associated with. Must match an existing topic in the course. */
		topicId: FormControl<string | null | undefined>,

		/** Timestamp of the most recent change to this course work material. Read-only. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateCourseWorkMaterialFormGroup() {
		return new FormGroup<CourseWorkMaterialFormProperties>({
			alternateLink: new FormControl<string | null | undefined>(undefined),
			assigneeMode: new FormControl<AnnouncementAssigneeMode | null | undefined>(undefined),
			courseId: new FormControl<string | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			creatorUserId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			scheduledTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<CourseWorkMaterialState | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			topicId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CourseWorkMaterialState { COURSEWORK_MATERIAL_STATE_UNSPECIFIED = 0, PUBLISHED = 1, DRAFT = 2, DELETED = 3 }


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


	/** A class of notifications that an application can register to receive. For example: "all roster changes for a domain". */
	export interface Feed {

		/** Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`. */
		courseRosterChangesInfo?: CourseRosterChangesInfo;

		/** Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`. */
		courseWorkChangesInfo?: CourseWorkChangesInfo;

		/** The type of feed. */
		feedType?: FeedFeedType | null;
	}

	/** A class of notifications that an application can register to receive. For example: "all roster changes for a domain". */
	export interface FeedFormProperties {

		/** The type of feed. */
		feedType: FormControl<FeedFeedType | null | undefined>,
	}
	export function CreateFeedFormGroup() {
		return new FormGroup<FeedFormProperties>({
			feedType: new FormControl<FeedFeedType | null | undefined>(undefined),
		});

	}

	export enum FeedFeedType { FEED_TYPE_UNSPECIFIED = 0, DOMAIN_ROSTER_CHANGES = 1, COURSE_ROSTER_CHANGES = 2, COURSE_WORK_CHANGES = 3 }


	/** Global user permission description. */
	export interface GlobalPermission {

		/** Permission value. */
		permission?: GlobalPermissionPermission | null;
	}

	/** Global user permission description. */
	export interface GlobalPermissionFormProperties {

		/** Permission value. */
		permission: FormControl<GlobalPermissionPermission | null | undefined>,
	}
	export function CreateGlobalPermissionFormGroup() {
		return new FormGroup<GlobalPermissionFormProperties>({
			permission: new FormControl<GlobalPermissionPermission | null | undefined>(undefined),
		});

	}

	export enum GlobalPermissionPermission { PERMISSION_UNSPECIFIED = 0, CREATE_COURSE = 1 }


	/** The history of each grade on this submission. */
	export interface GradeHistory {

		/** The teacher who made the grade change. */
		actorUserId?: string | null;

		/** The type of grade change at this time in the submission grade history. */
		gradeChangeType?: GradeHistoryGradeChangeType | null;

		/** When the grade of the submission was changed. */
		gradeTimestamp?: string | null;

		/** The denominator of the grade at this time in the submission grade history. */
		maxPoints?: number | null;

		/** The numerator of the grade at this time in the submission grade history. */
		pointsEarned?: number | null;
	}

	/** The history of each grade on this submission. */
	export interface GradeHistoryFormProperties {

		/** The teacher who made the grade change. */
		actorUserId: FormControl<string | null | undefined>,

		/** The type of grade change at this time in the submission grade history. */
		gradeChangeType: FormControl<GradeHistoryGradeChangeType | null | undefined>,

		/** When the grade of the submission was changed. */
		gradeTimestamp: FormControl<string | null | undefined>,

		/** The denominator of the grade at this time in the submission grade history. */
		maxPoints: FormControl<number | null | undefined>,

		/** The numerator of the grade at this time in the submission grade history. */
		pointsEarned: FormControl<number | null | undefined>,
	}
	export function CreateGradeHistoryFormGroup() {
		return new FormGroup<GradeHistoryFormProperties>({
			actorUserId: new FormControl<string | null | undefined>(undefined),
			gradeChangeType: new FormControl<GradeHistoryGradeChangeType | null | undefined>(undefined),
			gradeTimestamp: new FormControl<string | null | undefined>(undefined),
			maxPoints: new FormControl<number | null | undefined>(undefined),
			pointsEarned: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GradeHistoryGradeChangeType { UNKNOWN_GRADE_CHANGE_TYPE = 0, DRAFT_GRADE_POINTS_EARNED_CHANGE = 1, ASSIGNED_GRADE_POINTS_EARNED_CHANGE = 2, MAX_POINTS_CHANGE = 3 }


	/** Association between a student and a guardian of that student. The guardian may receive information about the student's course work. */
	export interface Guardian {

		/** Identifier for the guardian. */
		guardianId?: string | null;

		/** Global information for a user. */
		guardianProfile?: UserProfile;

		/** The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators. */
		invitedEmailAddress?: string | null;

		/** Identifier for the student to whom the guardian relationship applies. */
		studentId?: string | null;
	}

	/** Association between a student and a guardian of that student. The guardian may receive information about the student's course work. */
	export interface GuardianFormProperties {

		/** Identifier for the guardian. */
		guardianId: FormControl<string | null | undefined>,

		/** The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators. */
		invitedEmailAddress: FormControl<string | null | undefined>,

		/** Identifier for the student to whom the guardian relationship applies. */
		studentId: FormControl<string | null | undefined>,
	}
	export function CreateGuardianFormGroup() {
		return new FormGroup<GuardianFormProperties>({
			guardianId: new FormControl<string | null | undefined>(undefined),
			invitedEmailAddress: new FormControl<string | null | undefined>(undefined),
			studentId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Global information for a user. */
	export interface UserProfile {

		/** Email address of the user. Must request `https://www.googleapis.com/auth/classroom.profile.emails` scope for this field to be populated in a response body. Read-only. */
		emailAddress?: string | null;

		/** Identifier of the user. Read-only. */
		id?: string | null;

		/** Details of the user's name. */
		name?: Name;

		/** Global permissions of the user. Read-only. */
		permissions?: Array<GlobalPermission>;

		/** URL of user's profile photo. Must request `https://www.googleapis.com/auth/classroom.profile.photos` scope for this field to be populated in a response body. Read-only. */
		photoUrl?: string | null;

		/** Represents whether a Google Workspace for Education user's domain administrator has explicitly verified them as being a teacher. This field is always false if the user is not a member of a Google Workspace for Education domain. Read-only */
		verifiedTeacher?: boolean | null;
	}

	/** Global information for a user. */
	export interface UserProfileFormProperties {

		/** Email address of the user. Must request `https://www.googleapis.com/auth/classroom.profile.emails` scope for this field to be populated in a response body. Read-only. */
		emailAddress: FormControl<string | null | undefined>,

		/** Identifier of the user. Read-only. */
		id: FormControl<string | null | undefined>,

		/** URL of user's profile photo. Must request `https://www.googleapis.com/auth/classroom.profile.photos` scope for this field to be populated in a response body. Read-only. */
		photoUrl: FormControl<string | null | undefined>,

		/** Represents whether a Google Workspace for Education user's domain administrator has explicitly verified them as being a teacher. This field is always false if the user is not a member of a Google Workspace for Education domain. Read-only */
		verifiedTeacher: FormControl<boolean | null | undefined>,
	}
	export function CreateUserProfileFormGroup() {
		return new FormGroup<UserProfileFormProperties>({
			emailAddress: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			photoUrl: new FormControl<string | null | undefined>(undefined),
			verifiedTeacher: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Details of the user's name. */
	export interface Name {

		/** The user's last name. Read-only. */
		familyName?: string | null;

		/** The user's full name formed by concatenating the first and last name values. Read-only. */
		fullName?: string | null;

		/** The user's first name. Read-only. */
		givenName?: string | null;
	}

	/** Details of the user's name. */
	export interface NameFormProperties {

		/** The user's last name. Read-only. */
		familyName: FormControl<string | null | undefined>,

		/** The user's full name formed by concatenating the first and last name values. Read-only. */
		fullName: FormControl<string | null | undefined>,

		/** The user's first name. Read-only. */
		givenName: FormControl<string | null | undefined>,
	}
	export function CreateNameFormGroup() {
		return new FormGroup<NameFormProperties>({
			familyName: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			givenName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An invitation to become the guardian of a specified user, sent to a specified email address. */
	export interface GuardianInvitation {

		/** The time that this invitation was created. Read-only. */
		creationTime?: string | null;

		/** Unique identifier for this invitation. Read-only. */
		invitationId?: string | null;

		/** Email address that the invitation was sent to. This field is only visible to domain administrators. */
		invitedEmailAddress?: string | null;

		/** The state that this invitation is in. */
		state?: GuardianInvitationState | null;

		/** ID of the student (in standard format) */
		studentId?: string | null;
	}

	/** An invitation to become the guardian of a specified user, sent to a specified email address. */
	export interface GuardianInvitationFormProperties {

		/** The time that this invitation was created. Read-only. */
		creationTime: FormControl<string | null | undefined>,

		/** Unique identifier for this invitation. Read-only. */
		invitationId: FormControl<string | null | undefined>,

		/** Email address that the invitation was sent to. This field is only visible to domain administrators. */
		invitedEmailAddress: FormControl<string | null | undefined>,

		/** The state that this invitation is in. */
		state: FormControl<GuardianInvitationState | null | undefined>,

		/** ID of the student (in standard format) */
		studentId: FormControl<string | null | undefined>,
	}
	export function CreateGuardianInvitationFormGroup() {
		return new FormGroup<GuardianInvitationFormProperties>({
			creationTime: new FormControl<string | null | undefined>(undefined),
			invitationId: new FormControl<string | null | undefined>(undefined),
			invitedEmailAddress: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GuardianInvitationState | null | undefined>(undefined),
			studentId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GuardianInvitationState { GUARDIAN_INVITATION_STATE_UNSPECIFIED = 0, PENDING = 1, COMPLETE = 2 }


	/** An invitation to join a course. */
	export interface Invitation {

		/** Identifier of the course to invite the user to. */
		courseId?: string | null;

		/** Identifier assigned by Classroom. Read-only. */
		id?: string | null;

		/** Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`. */
		role?: InvitationRole | null;

		/** Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user */
		userId?: string | null;
	}

	/** An invitation to join a course. */
	export interface InvitationFormProperties {

		/** Identifier of the course to invite the user to. */
		courseId: FormControl<string | null | undefined>,

		/** Identifier assigned by Classroom. Read-only. */
		id: FormControl<string | null | undefined>,

		/** Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`. */
		role: FormControl<InvitationRole | null | undefined>,

		/** Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateInvitationFormGroup() {
		return new FormGroup<InvitationFormProperties>({
			courseId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<InvitationRole | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InvitationRole { COURSE_ROLE_UNSPECIFIED = 0, STUDENT = 1, TEACHER = 2, OWNER = 3 }


	/** Response when listing course work. */
	export interface ListAnnouncementsResponse {

		/** Announcement items that match the request. */
		announcements?: Array<Announcement>;

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;
	}

	/** Response when listing course work. */
	export interface ListAnnouncementsResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAnnouncementsResponseFormGroup() {
		return new FormGroup<ListAnnouncementsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when listing course aliases. */
	export interface ListCourseAliasesResponse {

		/** The course aliases. */
		aliases?: Array<CourseAlias>;

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;
	}

	/** Response when listing course aliases. */
	export interface ListCourseAliasesResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCourseAliasesResponseFormGroup() {
		return new FormGroup<ListCourseAliasesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when listing course work material. */
	export interface ListCourseWorkMaterialResponse {

		/** Course work material items that match the request. */
		courseWorkMaterial?: Array<CourseWorkMaterial>;

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;
	}

	/** Response when listing course work material. */
	export interface ListCourseWorkMaterialResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCourseWorkMaterialResponseFormGroup() {
		return new FormGroup<ListCourseWorkMaterialResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when listing course work. */
	export interface ListCourseWorkResponse {

		/** Course work items that match the request. */
		courseWork?: Array<CourseWork>;

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;
	}

	/** Response when listing course work. */
	export interface ListCourseWorkResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCourseWorkResponseFormGroup() {
		return new FormGroup<ListCourseWorkResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when listing courses. */
	export interface ListCoursesResponse {

		/** Courses that match the list request. */
		courses?: Array<Course>;

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;
	}

	/** Response when listing courses. */
	export interface ListCoursesResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCoursesResponseFormGroup() {
		return new FormGroup<ListCoursesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when listing guardian invitations. */
	export interface ListGuardianInvitationsResponse {

		/** Guardian invitations that matched the list request. */
		guardianInvitations?: Array<GuardianInvitation>;

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;
	}

	/** Response when listing guardian invitations. */
	export interface ListGuardianInvitationsResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGuardianInvitationsResponseFormGroup() {
		return new FormGroup<ListGuardianInvitationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when listing guardians. */
	export interface ListGuardiansResponse {

		/** Guardians on this page of results that met the criteria specified in the request. */
		guardians?: Array<Guardian>;

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;
	}

	/** Response when listing guardians. */
	export interface ListGuardiansResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGuardiansResponseFormGroup() {
		return new FormGroup<ListGuardiansResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when listing invitations. */
	export interface ListInvitationsResponse {

		/** Invitations that match the list request. */
		invitations?: Array<Invitation>;

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;
	}

	/** Response when listing invitations. */
	export interface ListInvitationsResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInvitationsResponseFormGroup() {
		return new FormGroup<ListInvitationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when listing student submissions. */
	export interface ListStudentSubmissionsResponse {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;

		/** Student work that matches the request. */
		studentSubmissions?: Array<StudentSubmission>;
	}

	/** Response when listing student submissions. */
	export interface ListStudentSubmissionsResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListStudentSubmissionsResponseFormGroup() {
		return new FormGroup<ListStudentSubmissionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Student submission for course work. `StudentSubmission` items are generated when a `CourseWork` item is created. Student submissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time. */
	export interface StudentSubmission {

		/** Absolute link to the submission in the Classroom web UI. Read-only. */
		alternateLink?: string | null;

		/** Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers. */
		assignedGrade?: number | null;

		/** Student work for an assignment. */
		assignmentSubmission?: AssignmentSubmission;

		/** Whether this student submission is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only. */
		associatedWithDeveloper?: boolean | null;

		/** Identifier of the course. Read-only. */
		courseId?: string | null;

		/** Identifier for the course work this corresponds to. Read-only. */
		courseWorkId?: string | null;

		/** Type of course work this submission is for. Read-only. */
		courseWorkType?: CourseWorkWorkType | null;

		/** Creation time of this submission. This may be unset if the student has not accessed this item. Read-only. */
		creationTime?: string | null;

		/** Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers. */
		draftGrade?: number | null;

		/** Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work. Read-only. */
		id?: string | null;

		/** Whether this submission is late. Read-only. */
		late?: boolean | null;

		/** Student work for a multiple-choice question. */
		multipleChoiceSubmission?: MultipleChoiceSubmission;

		/** Student work for a short answer question. */
		shortAnswerSubmission?: ShortAnswerSubmission;

		/** State of this submission. Read-only. */
		state?: StudentSubmissionState | null;

		/** The history of the submission (includes state and grade histories). Read-only. */
		submissionHistory?: Array<SubmissionHistory>;

		/** Last update time of this submission. This may be unset if the student has not accessed this item. Read-only. */
		updateTime?: string | null;

		/** Identifier for the student that owns this submission. Read-only. */
		userId?: string | null;
	}

	/** Student submission for course work. `StudentSubmission` items are generated when a `CourseWork` item is created. Student submissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time. */
	export interface StudentSubmissionFormProperties {

		/** Absolute link to the submission in the Classroom web UI. Read-only. */
		alternateLink: FormControl<string | null | undefined>,

		/** Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers. */
		assignedGrade: FormControl<number | null | undefined>,

		/** Whether this student submission is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only. */
		associatedWithDeveloper: FormControl<boolean | null | undefined>,

		/** Identifier of the course. Read-only. */
		courseId: FormControl<string | null | undefined>,

		/** Identifier for the course work this corresponds to. Read-only. */
		courseWorkId: FormControl<string | null | undefined>,

		/** Type of course work this submission is for. Read-only. */
		courseWorkType: FormControl<CourseWorkWorkType | null | undefined>,

		/** Creation time of this submission. This may be unset if the student has not accessed this item. Read-only. */
		creationTime: FormControl<string | null | undefined>,

		/** Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers. */
		draftGrade: FormControl<number | null | undefined>,

		/** Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work. Read-only. */
		id: FormControl<string | null | undefined>,

		/** Whether this submission is late. Read-only. */
		late: FormControl<boolean | null | undefined>,

		/** State of this submission. Read-only. */
		state: FormControl<StudentSubmissionState | null | undefined>,

		/** Last update time of this submission. This may be unset if the student has not accessed this item. Read-only. */
		updateTime: FormControl<string | null | undefined>,

		/** Identifier for the student that owns this submission. Read-only. */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateStudentSubmissionFormGroup() {
		return new FormGroup<StudentSubmissionFormProperties>({
			alternateLink: new FormControl<string | null | undefined>(undefined),
			assignedGrade: new FormControl<number | null | undefined>(undefined),
			associatedWithDeveloper: new FormControl<boolean | null | undefined>(undefined),
			courseId: new FormControl<string | null | undefined>(undefined),
			courseWorkId: new FormControl<string | null | undefined>(undefined),
			courseWorkType: new FormControl<CourseWorkWorkType | null | undefined>(undefined),
			creationTime: new FormControl<string | null | undefined>(undefined),
			draftGrade: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			late: new FormControl<boolean | null | undefined>(undefined),
			state: new FormControl<StudentSubmissionState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Student work for a multiple-choice question. */
	export interface MultipleChoiceSubmission {

		/** Student's select choice. */
		answer?: string | null;
	}

	/** Student work for a multiple-choice question. */
	export interface MultipleChoiceSubmissionFormProperties {

		/** Student's select choice. */
		answer: FormControl<string | null | undefined>,
	}
	export function CreateMultipleChoiceSubmissionFormGroup() {
		return new FormGroup<MultipleChoiceSubmissionFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Student work for a short answer question. */
	export interface ShortAnswerSubmission {

		/** Student response to a short-answer question. */
		answer?: string | null;
	}

	/** Student work for a short answer question. */
	export interface ShortAnswerSubmissionFormProperties {

		/** Student response to a short-answer question. */
		answer: FormControl<string | null | undefined>,
	}
	export function CreateShortAnswerSubmissionFormGroup() {
		return new FormGroup<ShortAnswerSubmissionFormProperties>({
			answer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StudentSubmissionState { SUBMISSION_STATE_UNSPECIFIED = 0, NEW = 1, CREATED = 2, TURNED_IN = 3, RETURNED = 4, RECLAIMED_BY_STUDENT = 5 }


	/** The history of the submission. This currently includes state and grade histories. */
	export interface SubmissionHistory {

		/** The history of each grade on this submission. */
		gradeHistory?: GradeHistory;

		/** The history of each state this submission has been in. */
		stateHistory?: StateHistory;
	}

	/** The history of the submission. This currently includes state and grade histories. */
	export interface SubmissionHistoryFormProperties {
	}
	export function CreateSubmissionHistoryFormGroup() {
		return new FormGroup<SubmissionHistoryFormProperties>({
		});

	}


	/** The history of each state this submission has been in. */
	export interface StateHistory {

		/** The teacher or student who made the change. */
		actorUserId?: string | null;

		/** The workflow pipeline stage. */
		state?: StateHistoryState | null;

		/** When the submission entered this state. */
		stateTimestamp?: string | null;
	}

	/** The history of each state this submission has been in. */
	export interface StateHistoryFormProperties {

		/** The teacher or student who made the change. */
		actorUserId: FormControl<string | null | undefined>,

		/** The workflow pipeline stage. */
		state: FormControl<StateHistoryState | null | undefined>,

		/** When the submission entered this state. */
		stateTimestamp: FormControl<string | null | undefined>,
	}
	export function CreateStateHistoryFormGroup() {
		return new FormGroup<StateHistoryFormProperties>({
			actorUserId: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<StateHistoryState | null | undefined>(undefined),
			stateTimestamp: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum StateHistoryState { STATE_UNSPECIFIED = 0, CREATED = 1, TURNED_IN = 2, RETURNED = 3, RECLAIMED_BY_STUDENT = 4, STUDENT_EDITED_AFTER_TURN_IN = 5 }


	/** Response when listing students. */
	export interface ListStudentsResponse {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;

		/** Students who match the list request. */
		students?: Array<Student>;
	}

	/** Response when listing students. */
	export interface ListStudentsResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListStudentsResponseFormGroup() {
		return new FormGroup<ListStudentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Student in a course. */
	export interface Student {

		/** Identifier of the course. Read-only. */
		courseId?: string | null;

		/** Global information for a user. */
		profile?: UserProfile;

		/** Representation of a Google Drive folder. */
		studentWorkFolder?: DriveFolder;

		/** Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user */
		userId?: string | null;
	}

	/** Student in a course. */
	export interface StudentFormProperties {

		/** Identifier of the course. Read-only. */
		courseId: FormControl<string | null | undefined>,

		/** Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateStudentFormGroup() {
		return new FormGroup<StudentFormProperties>({
			courseId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when listing teachers. */
	export interface ListTeachersResponse {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;

		/** Teachers who match the list request. */
		teachers?: Array<Teacher>;
	}

	/** Response when listing teachers. */
	export interface ListTeachersResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTeachersResponseFormGroup() {
		return new FormGroup<ListTeachersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Teacher of a course. */
	export interface Teacher {

		/** Identifier of the course. Read-only. */
		courseId?: string | null;

		/** Global information for a user. */
		profile?: UserProfile;

		/** Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user */
		userId?: string | null;
	}

	/** Teacher of a course. */
	export interface TeacherFormProperties {

		/** Identifier of the course. Read-only. */
		courseId: FormControl<string | null | undefined>,

		/** Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateTeacherFormGroup() {
		return new FormGroup<TeacherFormProperties>({
			courseId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response when listing topics. */
	export interface ListTopicResponse {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken?: string | null;

		/** Topic items that match the request. */
		topic?: Array<Topic>;
	}

	/** Response when listing topics. */
	export interface ListTopicResponseFormProperties {

		/** Token identifying the next page of results to return. If empty, no further results are available. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTopicResponseFormGroup() {
		return new FormGroup<ListTopicResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Topic created by a teacher for the course */
	export interface Topic {

		/** Identifier of the course. Read-only. */
		courseId?: string | null;

		/** The name of the topic, generated by the user. Leading and trailing whitespaces, if any, are trimmed. Also, multiple consecutive whitespaces are collapsed into one inside the name. The result must be a non-empty string. Topic names are case sensitive, and must be no longer than 100 characters. */
		name?: string | null;

		/** Unique identifier for the topic. Read-only. */
		topicId?: string | null;

		/** The time the topic was last updated by the system. Read-only. */
		updateTime?: string | null;
	}

	/** Topic created by a teacher for the course */
	export interface TopicFormProperties {

		/** Identifier of the course. Read-only. */
		courseId: FormControl<string | null | undefined>,

		/** The name of the topic, generated by the user. Leading and trailing whitespaces, if any, are trimmed. Also, multiple consecutive whitespaces are collapsed into one inside the name. The result must be a non-empty string. Topic names are case sensitive, and must be no longer than 100 characters. */
		name: FormControl<string | null | undefined>,

		/** Unique identifier for the topic. Read-only. */
		topicId: FormControl<string | null | undefined>,

		/** The time the topic was last updated by the system. Read-only. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateTopicFormGroup() {
		return new FormGroup<TopicFormProperties>({
			courseId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			topicId: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to modify assignee mode and options of an announcement. */
	export interface ModifyAnnouncementAssigneesRequest {

		/** Mode of the announcement describing whether it is accessible by all students or specified individual students. */
		assigneeMode?: AnnouncementAssigneeMode | null;

		/** Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`. */
		modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions;
	}

	/** Request to modify assignee mode and options of an announcement. */
	export interface ModifyAnnouncementAssigneesRequestFormProperties {

		/** Mode of the announcement describing whether it is accessible by all students or specified individual students. */
		assigneeMode: FormControl<AnnouncementAssigneeMode | null | undefined>,
	}
	export function CreateModifyAnnouncementAssigneesRequestFormGroup() {
		return new FormGroup<ModifyAnnouncementAssigneesRequestFormProperties>({
			assigneeMode: new FormControl<AnnouncementAssigneeMode | null | undefined>(undefined),
		});

	}


	/** Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`. */
	export interface ModifyIndividualStudentsOptions {

		/** IDs of students to be added as having access to this coursework/announcement. */
		addStudentIds?: Array<string>;

		/** IDs of students to be removed from having access to this coursework/announcement. */
		removeStudentIds?: Array<string>;
	}

	/** Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`. */
	export interface ModifyIndividualStudentsOptionsFormProperties {
	}
	export function CreateModifyIndividualStudentsOptionsFormGroup() {
		return new FormGroup<ModifyIndividualStudentsOptionsFormProperties>({
		});

	}


	/** Request to modify the attachments of a student submission. */
	export interface ModifyAttachmentsRequest {

		/** Attachments to add. A student submission may not have more than 20 attachments. Form attachments are not supported. */
		addAttachments?: Array<Attachment>;
	}

	/** Request to modify the attachments of a student submission. */
	export interface ModifyAttachmentsRequestFormProperties {
	}
	export function CreateModifyAttachmentsRequestFormGroup() {
		return new FormGroup<ModifyAttachmentsRequestFormProperties>({
		});

	}


	/** Request to modify assignee mode and options of a coursework. */
	export interface ModifyCourseWorkAssigneesRequest {

		/** Mode of the coursework describing whether it will be assigned to all students or specified individual students. */
		assigneeMode?: AnnouncementAssigneeMode | null;

		/** Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`. */
		modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions;
	}

	/** Request to modify assignee mode and options of a coursework. */
	export interface ModifyCourseWorkAssigneesRequestFormProperties {

		/** Mode of the coursework describing whether it will be assigned to all students or specified individual students. */
		assigneeMode: FormControl<AnnouncementAssigneeMode | null | undefined>,
	}
	export function CreateModifyCourseWorkAssigneesRequestFormGroup() {
		return new FormGroup<ModifyCourseWorkAssigneesRequestFormProperties>({
			assigneeMode: new FormControl<AnnouncementAssigneeMode | null | undefined>(undefined),
		});

	}


	/** Request to reclaim a student submission. */
	export interface ReclaimStudentSubmissionRequest {
	}

	/** Request to reclaim a student submission. */
	export interface ReclaimStudentSubmissionRequestFormProperties {
	}
	export function CreateReclaimStudentSubmissionRequestFormGroup() {
		return new FormGroup<ReclaimStudentSubmissionRequestFormProperties>({
		});

	}


	/** An instruction to Classroom to send notifications from the `feed` to the provided destination. */
	export interface Registration {

		/** A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission. */
		cloudPubsubTopic?: CloudPubsubTopic;

		/** The time until which the `Registration` is effective. This is a read-only field assigned by the server. */
		expiryTime?: string | null;

		/** A class of notifications that an application can register to receive. For example: "all roster changes for a domain". */
		feed?: Feed;

		/** A server-generated unique identifier for this `Registration`. Read-only. */
		registrationId?: string | null;
	}

	/** An instruction to Classroom to send notifications from the `feed` to the provided destination. */
	export interface RegistrationFormProperties {

		/** The time until which the `Registration` is effective. This is a read-only field assigned by the server. */
		expiryTime: FormControl<string | null | undefined>,

		/** A server-generated unique identifier for this `Registration`. Read-only. */
		registrationId: FormControl<string | null | undefined>,
	}
	export function CreateRegistrationFormGroup() {
		return new FormGroup<RegistrationFormProperties>({
			expiryTime: new FormControl<string | null | undefined>(undefined),
			registrationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to return a student submission. */
	export interface ReturnStudentSubmissionRequest {
	}

	/** Request to return a student submission. */
	export interface ReturnStudentSubmissionRequestFormProperties {
	}
	export function CreateReturnStudentSubmissionRequestFormGroup() {
		return new FormGroup<ReturnStudentSubmissionRequestFormProperties>({
		});

	}


	/** Request to turn in a student submission. */
	export interface TurnInStudentSubmissionRequest {
	}

	/** Request to turn in a student submission. */
	export interface TurnInStudentSubmissionRequestFormProperties {
	}
	export function CreateTurnInStudentSubmissionRequestFormGroup() {
		return new FormGroup<TurnInStudentSubmissionRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.
		 * Get v1/courses
		 * @param {Array<CourseCourseState>} courseStates Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED.
		 * @param {number} pageSize Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @param {string} studentId Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @param {string} teacherId Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @return {ListCoursesResponse} Successful response
		 */
		Classroom_courses_list(courseStates: Array<CourseCourseState> | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, studentId: string | null | undefined, teacherId: string | null | undefined): Observable<ListCoursesResponse> {
			return this.http.get<ListCoursesResponse>(this.baseUri + 'v1/courses?' + courseStates?.map(z => `courseStates=${z}`).join('&') + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&studentId=' + (studentId == null ? '' : encodeURIComponent(studentId)) + '&teacherId=' + (teacherId == null ? '' : encodeURIComponent(teacherId)), {});
		}

		/**
		 * Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserCannotOwnCourse * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.
		 * Post v1/courses
		 * @return {Course} Successful response
		 */
		Classroom_courses_create(requestBody: Course): Observable<Course> {
			return this.http.post<Course>(this.baseUri + 'v1/courses', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.
		 * Get v1/courses/{courseId}/aliases
		 * @param {string} courseId The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {number} pageSize Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @return {ListCourseAliasesResponse} Successful response
		 */
		Classroom_courses_aliases_list(courseId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCourseAliasesResponse> {
			return this.http.get<ListCourseAliasesResponse>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/aliases&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).
		 * Post v1/courses/{courseId}/aliases
		 * @param {string} courseId Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @return {CourseAlias} Successful response
		 */
		Classroom_courses_aliases_create(courseId: string, requestBody: CourseAlias): Observable<CourseAlias> {
			return this.http.post<CourseAlias>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/aliases', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).
		 * Delete v1/courses/{courseId}/aliases/{alias}
		 * @param {string} courseId Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} alias Alias to delete. This may not be the Classroom-assigned identifier.
		 * @return {Empty} Successful response
		 */
		Classroom_courses_aliases_delete(courseId: string, alias: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/aliases/' + (alias == null ? '' : encodeURIComponent(alias)), {});
		}

		/**
		 * Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
		 * Get v1/courses/{courseId}/announcements
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {Array<AnnouncementState>} announcementStates Restriction on the `state` of announcements returned. If this argument is left unspecified, the default value is `PUBLISHED`.
		 * @param {string} orderBy Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
		 * @param {number} pageSize Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @return {ListAnnouncementsResponse} Successful response
		 */
		Classroom_courses_announcements_list(courseId: string, announcementStates: Array<AnnouncementState> | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListAnnouncementsResponse> {
			return this.http.get<ListAnnouncementsResponse>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/announcements&' + announcementStates?.map(z => `announcementStates=${z}`).join('&') + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
		 * Post v1/courses/{courseId}/announcements
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @return {Announcement} Successful response
		 */
		Classroom_courses_announcements_create(courseId: string, requestBody: Announcement): Observable<Announcement> {
			return this.http.post<Announcement>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/announcements', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
		 * Delete v1/courses/{courseId}/announcements/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier.
		 * @return {Empty} Successful response
		 */
		Classroom_courses_announcements_delete(courseId: string, id: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/announcements/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.
		 * Get v1/courses/{courseId}/announcements/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the announcement.
		 * @return {Announcement} Successful response
		 */
		Classroom_courses_announcements_get(courseId: string, id: string): Observable<Announcement> {
			return this.http.get<Announcement>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/announcements/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist
		 * Patch v1/courses/{courseId}/announcements/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the announcement.
		 * @param {string} updateMask Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `text` * `state` * `scheduled_time`
		 * @return {Announcement} Successful response
		 */
		Classroom_courses_announcements_patch(courseId: string, id: string, updateMask: string | null | undefined, requestBody: Announcement): Observable<Announcement> {
			return this.http.patch<Announcement>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/announcements/' + (id == null ? '' : encodeURIComponent(id)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
		 * Post v1/courses/{courseId}/announcements/{id}:modifyAssignees
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the announcement.
		 * @return {Announcement} Successful response
		 */
		Classroom_courses_announcements_modifyAssignees(courseId: string, id: string, requestBody: ModifyAnnouncementAssigneesRequest): Observable<Announcement> {
			return this.http.post<Announcement>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/announcements/' + (id == null ? '' : encodeURIComponent(id)) + ':modifyAssignees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
		 * Get v1/courses/{courseId}/courseWork
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {Array<CourseWorkState>} courseWorkStates Restriction on the work status to return. Only courseWork that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
		 * @param {string} orderBy Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported fields are `updateTime` and `dueDate`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc`
		 * @param {number} pageSize Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @return {ListCourseWorkResponse} Successful response
		 */
		Classroom_courses_courseWork_list(courseId: string, courseWorkStates: Array<CourseWorkState> | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCourseWorkResponse> {
			return this.http.get<ListCourseWorkResponse>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork&' + courseWorkStates?.map(z => `courseWorkStates=${z}`).join('&') + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
		 * Post v1/courses/{courseId}/courseWork
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @return {CourseWork} Successful response
		 */
		Classroom_courses_courseWork_create(courseId: string, requestBody: CourseWork): Observable<CourseWork> {
			return this.http.post<CourseWork>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
		 * Get v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} courseWorkId Identifier of the student work to request. This may be set to the string literal `"-"` to request student work for all course work in the specified course.
		 * @param {Classroom_courses_courseWork_studentSubmissions_listLate} late Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of `late` value.
		 * @param {number} pageSize Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @param {Array<StudentSubmissionState>} states Requested submission states. If specified, returned student submissions match one of the specified submission states.
		 * @param {string} userId Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @return {ListStudentSubmissionsResponse} Successful response
		 */
		Classroom_courses_courseWork_studentSubmissions_list(courseId: string, courseWorkId: string, late: Classroom_courses_courseWork_studentSubmissions_listLate | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, states: Array<StudentSubmissionState> | null | undefined, userId: string | null | undefined): Observable<ListStudentSubmissionsResponse> {
			return this.http.get<ListStudentSubmissionsResponse>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (courseWorkId == null ? '' : encodeURIComponent(courseWorkId)) + '/studentSubmissions&late=' + late + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + states?.map(z => `states=${z}`).join('&') + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
		 * Get v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} courseWorkId Identifier of the course work.
		 * @param {string} id Identifier of the student submission.
		 * @return {StudentSubmission} Successful response
		 */
		Classroom_courses_courseWork_studentSubmissions_get(courseId: string, courseWorkId: string, id: string): Observable<StudentSubmission> {
			return this.http.get<StudentSubmission>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (courseWorkId == null ? '' : encodeURIComponent(courseWorkId)) + '/studentSubmissions/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
		 * Patch v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} courseWorkId Identifier of the course work.
		 * @param {string} id Identifier of the student submission.
		 * @param {string} updateMask Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields may be specified by teachers: * `draft_grade` * `assigned_grade`
		 * @return {StudentSubmission} Successful response
		 */
		Classroom_courses_courseWork_studentSubmissions_patch(courseId: string, courseWorkId: string, id: string, updateMask: string | null | undefined, requestBody: StudentSubmission): Observable<StudentSubmission> {
			return this.http.patch<StudentSubmission>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (courseWorkId == null ? '' : encodeURIComponent(courseWorkId)) + '/studentSubmissions/' + (id == null ? '' : encodeURIComponent(id)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
		 * Post v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} courseWorkId Identifier of the course work.
		 * @param {string} id Identifier of the student submission.
		 * @return {StudentSubmission} Successful response
		 */
		Classroom_courses_courseWork_studentSubmissions_modifyAttachments(courseId: string, courseWorkId: string, id: string, requestBody: ModifyAttachmentsRequest): Observable<StudentSubmission> {
			return this.http.post<StudentSubmission>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (courseWorkId == null ? '' : encodeURIComponent(courseWorkId)) + '/studentSubmissions/' + (id == null ? '' : encodeURIComponent(id)) + ':modifyAttachments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
		 * Post v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} courseWorkId Identifier of the course work.
		 * @param {string} id Identifier of the student submission.
		 * @return {Empty} Successful response
		 */
		Classroom_courses_courseWork_studentSubmissions_reclaim(courseId: string, courseWorkId: string, id: string, requestBody: ReclaimStudentSubmissionRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (courseWorkId == null ? '' : encodeURIComponent(courseWorkId)) + '/studentSubmissions/' + (id == null ? '' : encodeURIComponent(id)) + ':reclaim', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
		 * Post v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:return
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} courseWorkId Identifier of the course work.
		 * @param {string} id Identifier of the student submission.
		 * @return {Empty} Successful response
		 */
		Classroom_courses_courseWork_studentSubmissions_return(courseId: string, courseWorkId: string, id: string, requestBody: ReturnStudentSubmissionRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (courseWorkId == null ? '' : encodeURIComponent(courseWorkId)) + '/studentSubmissions/' + (id == null ? '' : encodeURIComponent(id)) + ':return', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
		 * Post v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:turnIn
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} courseWorkId Identifier of the course work.
		 * @param {string} id Identifier of the student submission.
		 * @return {Empty} Successful response
		 */
		Classroom_courses_courseWork_studentSubmissions_turnIn(courseId: string, courseWorkId: string, id: string, requestBody: TurnInStudentSubmissionRequest): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (courseWorkId == null ? '' : encodeURIComponent(courseWorkId)) + '/studentSubmissions/' + (id == null ? '' : encodeURIComponent(id)) + ':turnIn', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
		 * Delete v1/courses/{courseId}/courseWork/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the course work to delete. This identifier is a Classroom-assigned identifier.
		 * @return {Empty} Successful response
		 */
		Classroom_courses_courseWork_delete(courseId: string, id: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
		 * Get v1/courses/{courseId}/courseWork/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the course work.
		 * @return {CourseWork} Successful response
		 */
		Classroom_courses_courseWork_get(courseId: string, id: string): Observable<CourseWork> {
			return this.http.get<CourseWork>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
		 * Patch v1/courses/{courseId}/courseWork/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the course work.
		 * @param {string} updateMask Mask that identifies which fields on the course work to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `CourseWork` object. If a field that does not support empty values is included in the update mask and not set in the `CourseWork` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `due_date` * `due_time` * `max_points` * `scheduled_time` * `submission_modification_mode` * `topic_id`
		 * @return {CourseWork} Successful response
		 */
		Classroom_courses_courseWork_patch(courseId: string, id: string, updateMask: string | null | undefined, requestBody: CourseWork): Observable<CourseWork> {
			return this.http.patch<CourseWork>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (id == null ? '' : encodeURIComponent(id)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
		 * Post v1/courses/{courseId}/courseWork/{id}:modifyAssignees
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the coursework.
		 * @return {CourseWork} Successful response
		 */
		Classroom_courses_courseWork_modifyAssignees(courseId: string, id: string, requestBody: ModifyCourseWorkAssigneesRequest): Observable<CourseWork> {
			return this.http.post<CourseWork>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWork/' + (id == null ? '' : encodeURIComponent(id)) + ':modifyAssignees', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
		 * Get v1/courses/{courseId}/courseWorkMaterials
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {Array<CourseWorkMaterialState>} courseWorkMaterialStates Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
		 * @param {string} materialDriveId Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If `material_link` is also specified, course work material must have materials matching both filters.
		 * @param {string} materialLink Optional filtering for course work material with at least one link material whose URL partially matches the provided string.
		 * @param {string} orderBy Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
		 * @param {number} pageSize Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @return {ListCourseWorkMaterialResponse} Successful response
		 */
		Classroom_courses_courseWorkMaterials_list(courseId: string, courseWorkMaterialStates: Array<CourseWorkMaterialState> | null | undefined, materialDriveId: string | null | undefined, materialLink: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListCourseWorkMaterialResponse> {
			return this.http.get<ListCourseWorkMaterialResponse>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWorkMaterials&' + courseWorkMaterialStates?.map(z => `courseWorkMaterialStates=${z}`).join('&') + '&materialDriveId=' + (materialDriveId == null ? '' : encodeURIComponent(materialDriveId)) + '&materialLink=' + (materialLink == null ? '' : encodeURIComponent(materialLink)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
		 * Post v1/courses/{courseId}/courseWorkMaterials
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @return {CourseWorkMaterial} Successful response
		 */
		Classroom_courses_courseWorkMaterials_create(courseId: string, requestBody: CourseWorkMaterial): Observable<CourseWorkMaterial> {
			return this.http.post<CourseWorkMaterial>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWorkMaterials', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
		 * Delete v1/courses/{courseId}/courseWorkMaterials/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the course work material to delete. This identifier is a Classroom-assigned identifier.
		 * @return {Empty} Successful response
		 */
		Classroom_courses_courseWorkMaterials_delete(courseId: string, id: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWorkMaterials/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.
		 * Get v1/courses/{courseId}/courseWorkMaterials/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the course work material.
		 * @return {CourseWorkMaterial} Successful response
		 */
		Classroom_courses_courseWorkMaterials_get(courseId: string, id: string): Observable<CourseWorkMaterial> {
			return this.http.get<CourseWorkMaterial>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWorkMaterials/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist
		 * Patch v1/courses/{courseId}/courseWorkMaterials/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the course work material.
		 * @param {string} updateMask Mask that identifies which fields on the course work material to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the course work material object. If a field that does not support empty values is included in the update mask and not set in the course work material object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `scheduled_time` * `topic_id`
		 * @return {CourseWorkMaterial} Successful response
		 */
		Classroom_courses_courseWorkMaterials_patch(courseId: string, id: string, updateMask: string | null | undefined, requestBody: CourseWorkMaterial): Observable<CourseWorkMaterial> {
			return this.http.patch<CourseWorkMaterial>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/courseWorkMaterials/' + (id == null ? '' : encodeURIComponent(id)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
		 * Get v1/courses/{courseId}/students
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {number} pageSize Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @return {ListStudentsResponse} Successful response
		 */
		Classroom_courses_students_list(courseId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListStudentsResponse> {
			return this.http.get<ListStudentsResponse>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/students&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.
		 * Post v1/courses/{courseId}/students
		 * @param {string} courseId Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} enrollmentCode Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.
		 * @return {Student} Successful response
		 */
		Classroom_courses_students_create(courseId: string, enrollmentCode: string | null | undefined, requestBody: Student): Observable<Student> {
			return this.http.post<Student>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/students&enrollmentCode=' + (enrollmentCode == null ? '' : encodeURIComponent(enrollmentCode)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
		 * Delete v1/courses/{courseId}/students/{userId}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} userId Identifier of the student to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @return {Empty} Successful response
		 */
		Classroom_courses_students_delete(courseId: string, userId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/students/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
		 * Get v1/courses/{courseId}/students/{userId}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} userId Identifier of the student to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @return {Student} Successful response
		 */
		Classroom_courses_students_get(courseId: string, userId: string): Observable<Student> {
			return this.http.get<Student>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/students/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
		 * Get v1/courses/{courseId}/teachers
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {number} pageSize Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @return {ListTeachersResponse} Successful response
		 */
		Classroom_courses_teachers_list(courseId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTeachersResponse> {
			return this.http.get<ListTeachersResponse>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/teachers&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.
		 * Post v1/courses/{courseId}/teachers
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @return {Teacher} Successful response
		 */
		Classroom_courses_teachers_create(courseId: string, requestBody: Teacher): Observable<Teacher> {
			return this.http.post<Teacher>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/teachers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.
		 * Delete v1/courses/{courseId}/teachers/{userId}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} userId Identifier of the teacher to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @return {Empty} Successful response
		 */
		Classroom_courses_teachers_delete(courseId: string, userId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/teachers/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.
		 * Get v1/courses/{courseId}/teachers/{userId}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} userId Identifier of the teacher to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @return {Teacher} Successful response
		 */
		Classroom_courses_teachers_get(courseId: string, userId: string): Observable<Teacher> {
			return this.http.get<Teacher>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/teachers/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
		 * Get v1/courses/{courseId}/topics
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {number} pageSize Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @return {ListTopicResponse} Successful response
		 */
		Classroom_courses_topics_list(courseId: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListTopicResponse> {
			return this.http.get<ListTopicResponse>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/topics&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
		 * Post v1/courses/{courseId}/topics
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @return {Topic} Successful response
		 */
		Classroom_courses_topics_create(courseId: string, requestBody: Topic): Observable<Topic> {
			return this.http.post<Topic>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/topics', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.
		 * Delete v1/courses/{courseId}/topics/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the topic to delete.
		 * @return {Empty} Successful response
		 */
		Classroom_courses_topics_delete(courseId: string, id: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/topics/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.
		 * Get v1/courses/{courseId}/topics/{id}
		 * @param {string} courseId Identifier of the course.
		 * @param {string} id Identifier of the topic.
		 * @return {Topic} Successful response
		 */
		Classroom_courses_topics_get(courseId: string, id: string): Observable<Topic> {
			return this.http.get<Topic>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/topics/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist
		 * Patch v1/courses/{courseId}/topics/{id}
		 * @param {string} courseId Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} id Identifier of the topic.
		 * @param {string} updateMask Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified: * `name`
		 * @return {Topic} Successful response
		 */
		Classroom_courses_topics_patch(courseId: string, id: string, updateMask: string | null | undefined, requestBody: Topic): Observable<Topic> {
			return this.http.patch<Topic>(this.baseUri + 'v1/courses/' + (courseId == null ? '' : encodeURIComponent(courseId)) + '/topics/' + (id == null ? '' : encodeURIComponent(id)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
		 * Delete v1/courses/{id}
		 * @param {string} id Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @return {Empty} Successful response
		 */
		Classroom_courses_delete(id: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/courses/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
		 * Get v1/courses/{id}
		 * @param {string} id Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @return {Course} Successful response
		 */
		Classroom_courses_get(id: string): Observable<Course> {
			return this.http.get<Course>(this.baseUri + 'v1/courses/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner
		 * Patch v1/courses/{id}
		 * @param {string} id Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @param {string} updateMask Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid: * `name` * `section` * `descriptionHeading` * `description` * `room` * `courseState` * `ownerId` Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete. When set in a query parameter, this field should be specified as `updateMask=,,...`
		 * @return {Course} Successful response
		 */
		Classroom_courses_patch(id: string, updateMask: string | null | undefined, requestBody: Course): Observable<Course> {
			return this.http.patch<Course>(this.baseUri + 'v1/courses/' + (id == null ? '' : encodeURIComponent(id)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
		 * Put v1/courses/{id}
		 * @param {string} id Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
		 * @return {Course} Successful response
		 */
		Classroom_courses_update(id: string, requestBody: Course): Observable<Course> {
			return this.http.put<Course>(this.baseUri + 'v1/courses/' + (id == null ? '' : encodeURIComponent(id)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.
		 * Get v1/invitations
		 * @param {string} courseId Restricts returned invitations to those for a course with the specified identifier.
		 * @param {number} pageSize Maximum number of items to return. The default is 500 if unspecified or `0`. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @param {string} userId Restricts returned invitations to those for a specific user. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @return {ListInvitationsResponse} Successful response
		 */
		Classroom_invitations_list(courseId: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, userId: string | null | undefined): Observable<ListInvitationsResponse> {
			return this.http.get<ListInvitationsResponse>(this.baseUri + 'v1/invitations?courseId=' + (courseId == null ? '' : encodeURIComponent(courseId)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&userId=' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}

		/**
		 * Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION`: * if the requested user's account is disabled. * if the user already has this role or a role with greater permissions. * for the following request errors: * IneligibleOwner * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.
		 * Post v1/invitations
		 * @return {Invitation} Successful response
		 */
		Classroom_invitations_create(requestBody: Invitation): Observable<Invitation> {
			return this.http.post<Invitation>(this.baseUri + 'v1/invitations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
		 * Delete v1/invitations/{id}
		 * @param {string} id Identifier of the invitation to delete.
		 * @return {Empty} Successful response
		 */
		Classroom_invitations_delete(id: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/invitations/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
		 * Get v1/invitations/{id}
		 * @param {string} id Identifier of the invitation to return.
		 * @return {Invitation} Successful response
		 */
		Classroom_invitations_get(id: string): Observable<Invitation> {
			return this.http.get<Invitation>(this.baseUri + 'v1/invitations/' + (id == null ? '' : encodeURIComponent(id)), {});
		}

		/**
		 * Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.
		 * Post v1/invitations/{id}:accept
		 * @param {string} id Identifier of the invitation to accept.
		 * @return {Empty} Successful response
		 */
		Classroom_invitations_accept(id: string): Observable<Empty> {
			return this.http.post<Empty>(this.baseUri + 'v1/invitations/' + (id == null ? '' : encodeURIComponent(id)) + ':accept', null, {});
		}

		/**
		 * Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.
		 * Post v1/registrations
		 * @return {Registration} Successful response
		 */
		Classroom_registrations_create(requestBody: Registration): Observable<Registration> {
			return this.http.post<Registration>(this.baseUri + 'v1/registrations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.
		 * Delete v1/registrations/{registrationId}
		 * @param {string} registrationId The `registration_id` of the `Registration` to be deleted.
		 * @return {Empty} Successful response
		 */
		Classroom_registrations_delete(registrationId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/registrations/' + (registrationId == null ? '' : encodeURIComponent(registrationId)), {});
		}

		/**
		 * Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.
		 * Get v1/userProfiles/{studentId}/guardianInvitations
		 * @param {string} studentId The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations.
		 * @param {string} invitedEmailAddress If specified, only results with the specified `invited_email_address` are returned.
		 * @param {number} pageSize Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @param {Array<GuardianInvitationState>} states If specified, only results with the specified `state` values are returned. Otherwise, results with a `state` of `PENDING` are returned.
		 * @return {ListGuardianInvitationsResponse} Successful response
		 */
		Classroom_userProfiles_guardianInvitations_list(studentId: string, invitedEmailAddress: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, states: Array<GuardianInvitationState> | null | undefined): Observable<ListGuardianInvitationsResponse> {
			return this.http.get<ListGuardianInvitationsResponse>(this.baseUri + 'v1/userProfiles/' + (studentId == null ? '' : encodeURIComponent(studentId)) + '/guardianInvitations&invitedEmailAddress=' + (invitedEmailAddress == null ? '' : encodeURIComponent(invitedEmailAddress)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&' + states?.map(z => `states=${z}`).join('&'), {});
		}

		/**
		 * Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.
		 * Post v1/userProfiles/{studentId}/guardianInvitations
		 * @param {string} studentId ID of the student (in standard format)
		 * @return {GuardianInvitation} Successful response
		 */
		Classroom_userProfiles_guardianInvitations_create(studentId: string, requestBody: GuardianInvitation): Observable<GuardianInvitation> {
			return this.http.post<GuardianInvitation>(this.baseUri + 'v1/userProfiles/' + (studentId == null ? '' : encodeURIComponent(studentId)) + '/guardianInvitations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.
		 * Get v1/userProfiles/{studentId}/guardianInvitations/{invitationId}
		 * @param {string} studentId The ID of the student whose guardian invitation is being requested.
		 * @param {string} invitationId The `id` field of the `GuardianInvitation` being requested.
		 * @return {GuardianInvitation} Successful response
		 */
		Classroom_userProfiles_guardianInvitations_get(studentId: string, invitationId: string): Observable<GuardianInvitation> {
			return this.http.get<GuardianInvitation>(this.baseUri + 'v1/userProfiles/' + (studentId == null ? '' : encodeURIComponent(studentId)) + '/guardianInvitations/' + (invitationId == null ? '' : encodeURIComponent(invitationId)), {});
		}

		/**
		 * Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.
		 * Patch v1/userProfiles/{studentId}/guardianInvitations/{invitationId}
		 * @param {string} studentId The ID of the student whose guardian invitation is to be modified.
		 * @param {string} invitationId The `id` field of the `GuardianInvitation` to be modified.
		 * @param {string} updateMask Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid: * `state` When set in a query parameter, this field should be specified as `updateMask=,,...`
		 * @return {GuardianInvitation} Successful response
		 */
		Classroom_userProfiles_guardianInvitations_patch(studentId: string, invitationId: string, updateMask: string | null | undefined, requestBody: GuardianInvitation): Observable<GuardianInvitation> {
			return this.http.patch<GuardianInvitation>(this.baseUri + 'v1/userProfiles/' + (studentId == null ? '' : encodeURIComponent(studentId)) + '/guardianInvitations/' + (invitationId == null ? '' : encodeURIComponent(invitationId)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.
		 * Get v1/userProfiles/{studentId}/guardians
		 * @param {string} studentId Filter results by the student who the guardian is linked to. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user has access to view.
		 * @param {string} invitedEmailAddress Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators.
		 * @param {number} pageSize Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
		 * @param {string} pageToken nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
		 * @return {ListGuardiansResponse} Successful response
		 */
		Classroom_userProfiles_guardians_list(studentId: string, invitedEmailAddress: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGuardiansResponse> {
			return this.http.get<ListGuardiansResponse>(this.baseUri + 'v1/userProfiles/' + (studentId == null ? '' : encodeURIComponent(studentId)) + '/guardians&invitedEmailAddress=' + (invitedEmailAddress == null ? '' : encodeURIComponent(invitedEmailAddress)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.
		 * Delete v1/userProfiles/{studentId}/guardians/{guardianId}
		 * @param {string} studentId The student whose guardian is to be deleted. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @param {string} guardianId The `id` field from a `Guardian`.
		 * @return {Empty} Successful response
		 */
		Classroom_userProfiles_guardians_delete(studentId: string, guardianId: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/userProfiles/' + (studentId == null ? '' : encodeURIComponent(studentId)) + '/guardians/' + (guardianId == null ? '' : encodeURIComponent(guardianId)), {});
		}

		/**
		 * Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.
		 * Get v1/userProfiles/{studentId}/guardians/{guardianId}
		 * @param {string} studentId The student whose guardian is being requested. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @param {string} guardianId The `id` field from a `Guardian`.
		 * @return {Guardian} Successful response
		 */
		Classroom_userProfiles_guardians_get(studentId: string, guardianId: string): Observable<Guardian> {
			return this.http.get<Guardian>(this.baseUri + 'v1/userProfiles/' + (studentId == null ? '' : encodeURIComponent(studentId)) + '/guardians/' + (guardianId == null ? '' : encodeURIComponent(guardianId)), {});
		}

		/**
		 * Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.
		 * Get v1/userProfiles/{userId}
		 * @param {string} userId Identifier of the profile to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
		 * @return {UserProfile} Successful response
		 */
		Classroom_userProfiles_get(userId: string): Observable<UserProfile> {
			return this.http.get<UserProfile>(this.baseUri + 'v1/userProfiles/' + (userId == null ? '' : encodeURIComponent(userId)), {});
		}
	}

	export enum Classroom_courses_courseWork_studentSubmissions_listLate { LATE_VALUES_UNSPECIFIED = 0, LATE_ONLY = 1, NOT_LATE_ONLY = 2 }

}

