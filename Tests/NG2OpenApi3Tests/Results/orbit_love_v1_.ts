import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Activity {

		/** The type of activity - what action was done by the member. This is a legacy field, use activity_type_key instead. */
		activity_type?: string | null;

		/** The key for a custom activity type for the workspace. Will create a new activity type if it does not exist. */
		activity_type_key?: string | null;

		/** A description of the activity; displayed in the timeline */
		description?: string | null;

		/** Supply a key that must be unique or leave blank to have one generated. */
		key?: string | null;

		/** A URL for the activity; displayed in the timeline */
		link?: string | null;

		/** The text for the timeline link */
		link_text?: string | null;

		/** The date and time the activity occurred; defaults to now */
		occurred_at?: string | null;

		/** Key-value pairs to provide contextual metadata about an activity. */
		properties?: string | null;

		/**
		 * A title for the activity; displayed in the timeline
		 * Required
		 */
		title: string;

		/** A custom weight to be used in filters and reports; defaults to 1. */
		weight?: string | null;
	}
	export interface ActivityFormProperties {

		/** The type of activity - what action was done by the member. This is a legacy field, use activity_type_key instead. */
		activity_type: FormControl<string | null | undefined>,

		/** The key for a custom activity type for the workspace. Will create a new activity type if it does not exist. */
		activity_type_key: FormControl<string | null | undefined>,

		/** A description of the activity; displayed in the timeline */
		description: FormControl<string | null | undefined>,

		/** Supply a key that must be unique or leave blank to have one generated. */
		key: FormControl<string | null | undefined>,

		/** A URL for the activity; displayed in the timeline */
		link: FormControl<string | null | undefined>,

		/** The text for the timeline link */
		link_text: FormControl<string | null | undefined>,

		/** The date and time the activity occurred; defaults to now */
		occurred_at: FormControl<string | null | undefined>,

		/** Key-value pairs to provide contextual metadata about an activity. */
		properties: FormControl<string | null | undefined>,

		/**
		 * A title for the activity; displayed in the timeline
		 * Required
		 */
		title: FormControl<string | null | undefined>,

		/** A custom weight to be used in filters and reports; defaults to 1. */
		weight: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			activity_type: new FormControl<string | null | undefined>(undefined),
			activity_type_key: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			link_text: new FormControl<string | null | undefined>(undefined),
			occurred_at: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Activity_and_identity {
		activity?: Activity_with_member;

		/** Represents an email address, a profile on networks like github and twitter, or a record in another system. */
		identity?: Identity;
	}
	export interface Activity_and_identityFormProperties {
	}
	export function CreateActivity_and_identityFormGroup() {
		return new FormGroup<Activity_and_identityFormProperties>({
		});

	}


	/** Represents an email address, a profile on networks like github and twitter, or a record in another system. */
	export interface Identity {

		/** The email of the person in the source system */
		email?: string | null;

		/** The name of the person in the source system */
		name?: string | null;

		/**
		 * The type of source: known values include github, twitter, discourse, email, linkedin, devto. Custom values can also be used
		 * Required
		 */
		source: string;

		/** Specifies the location of the source, such as the host of a Discourse instance */
		source_host?: string | null;

		/** The uid of the person in the source system */
		uid?: string | null;

		/** For custom identities, an optional link to the profile on the source system */
		url?: string | null;

		/** The username of the person in the source system */
		username?: string | null;
	}

	/** Represents an email address, a profile on networks like github and twitter, or a record in another system. */
	export interface IdentityFormProperties {

		/** The email of the person in the source system */
		email: FormControl<string | null | undefined>,

		/** The name of the person in the source system */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of source: known values include github, twitter, discourse, email, linkedin, devto. Custom values can also be used
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/** Specifies the location of the source, such as the host of a Discourse instance */
		source_host: FormControl<string | null | undefined>,

		/** The uid of the person in the source system */
		uid: FormControl<string | null | undefined>,

		/** For custom identities, an optional link to the profile on the source system */
		url: FormControl<string | null | undefined>,

		/** The username of the person in the source system */
		username: FormControl<string | null | undefined>,
	}
	export function CreateIdentityFormGroup() {
		return new FormGroup<IdentityFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			source_host: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Activity_with_member extends Activity {
		member?: Member;
	}
	export interface Activity_with_memberFormProperties extends ActivityFormProperties {
	}
	export function CreateActivity_with_memberFormGroup() {
		return new FormGroup<Activity_with_memberFormProperties>({
			activity_type: new FormControl<string | null | undefined>(undefined),
			activity_type_key: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			link: new FormControl<string | null | undefined>(undefined),
			link_text: new FormControl<string | null | undefined>(undefined),
			occurred_at: new FormControl<string | null | undefined>(undefined),
			properties: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			weight: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Member {
		bio?: string | null;
		birthday?: string | null;
		company?: string | null;

		/** The member's DEV username */
		devto?: string | null;

		/** The member's email */
		email?: string | null;

		/** The member's GitHub username */
		github?: string | null;

		/** The member's LinkedIn username, without the in/ or pub/ */
		linkedin?: string | null;
		location?: string | null;
		name?: string | null;
		pronouns?: string | null;
		shipping_address?: string | null;
		slug?: string | null;

		/** Deprecated: Please use the tags attribute instead */
		tag_list?: string | null;

		/** Replaces all tags for the member; comma-separated string or array */
		tags?: string | null;

		/** Adds tags to member; comma-separated string or array */
		tags_to_add?: string | null;
		teammate?: boolean | null;
		title?: string | null;
		tshirt?: string | null;

		/** The member's Twitter username */
		twitter?: string | null;
		url?: string | null;
	}
	export interface MemberFormProperties {
		bio: FormControl<string | null | undefined>,
		birthday: FormControl<string | null | undefined>,
		company: FormControl<string | null | undefined>,

		/** The member's DEV username */
		devto: FormControl<string | null | undefined>,

		/** The member's email */
		email: FormControl<string | null | undefined>,

		/** The member's GitHub username */
		github: FormControl<string | null | undefined>,

		/** The member's LinkedIn username, without the in/ or pub/ */
		linkedin: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		pronouns: FormControl<string | null | undefined>,
		shipping_address: FormControl<string | null | undefined>,
		slug: FormControl<string | null | undefined>,

		/** Deprecated: Please use the tags attribute instead */
		tag_list: FormControl<string | null | undefined>,

		/** Replaces all tags for the member; comma-separated string or array */
		tags: FormControl<string | null | undefined>,

		/** Adds tags to member; comma-separated string or array */
		tags_to_add: FormControl<string | null | undefined>,
		teammate: FormControl<boolean | null | undefined>,
		title: FormControl<string | null | undefined>,
		tshirt: FormControl<string | null | undefined>,

		/** The member's Twitter username */
		twitter: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			bio: new FormControl<string | null | undefined>(undefined),
			birthday: new FormControl<string | null | undefined>(undefined),
			company: new FormControl<string | null | undefined>(undefined),
			devto: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			github: new FormControl<string | null | undefined>(undefined),
			linkedin: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pronouns: new FormControl<string | null | undefined>(undefined),
			shipping_address: new FormControl<string | null | undefined>(undefined),
			slug: new FormControl<string | null | undefined>(undefined),
			tag_list: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
			tags_to_add: new FormControl<string | null | undefined>(undefined),
			teammate: new FormControl<boolean | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			tshirt: new FormControl<string | null | undefined>(undefined),
			twitter: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Alert {
		activity_types?: Array<string>;
		event_type?: string | null;
		member_tags?: Array<string>;

		/** Required */
		name: string;
	}
	export interface AlertFormProperties {
		event_type: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAlertFormGroup() {
		return new FormGroup<AlertFormProperties>({
			event_type: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Custom_or_post_activity {
	}
	export interface Custom_or_post_activityFormProperties {
	}
	export function CreateCustom_or_post_activityFormGroup() {
		return new FormGroup<Custom_or_post_activityFormProperties>({
		});

	}

	export interface Destination {
		alerts?: Array<Alert>;

		/** Required */
		name: string;

		/** Required */
		url: string;
	}
	export interface DestinationFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Member_and_identity {

		/** Represents an email address, a profile on networks like github and twitter, or a record in another system. */
		identity?: Identity;
		member?: Member;
	}
	export interface Member_and_identityFormProperties {
	}
	export function CreateMember_and_identityFormGroup() {
		return new FormGroup<Member_and_identityFormProperties>({
		});

	}

	export interface Note {

		/** Required */
		body: string;
	}
	export interface NoteFormProperties {

		/** Required */
		body: FormControl<string | null | undefined>,
	}
	export function CreateNoteFormGroup() {
		return new FormGroup<NoteFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Organization {

		/** The unique identifier of the organization in your CRM. */
		crm_uid?: string | null;

		/**
		 * A link to the organization profile in your CRM.
		 * Required
		 */
		crm_url: string;

		/** The date the organization became a customer. */
		deal_closed_date?: string | null;

		/**
		 * The current stage of the organization in the marketing or sales process.
		 * Required
		 */
		lifecycle_stage: string;

		/** The email of the team member who is in charge of the organization. */
		owner_email?: string | null;

		/** The name of the team member who is in charge of the organization. */
		owner_name?: string | null;

		/** The pricing plan the organization is on. */
		price_plan?: string | null;

		/**
		 * The name of the CRM you use for tracking the organization.
		 * Required
		 */
		source: string;
	}
	export interface OrganizationFormProperties {

		/** The unique identifier of the organization in your CRM. */
		crm_uid: FormControl<string | null | undefined>,

		/**
		 * A link to the organization profile in your CRM.
		 * Required
		 */
		crm_url: FormControl<string | null | undefined>,

		/** The date the organization became a customer. */
		deal_closed_date: FormControl<string | null | undefined>,

		/**
		 * The current stage of the organization in the marketing or sales process.
		 * Required
		 */
		lifecycle_stage: FormControl<string | null | undefined>,

		/** The email of the team member who is in charge of the organization. */
		owner_email: FormControl<string | null | undefined>,

		/** The name of the team member who is in charge of the organization. */
		owner_name: FormControl<string | null | undefined>,

		/** The pricing plan the organization is on. */
		price_plan: FormControl<string | null | undefined>,

		/**
		 * The name of the CRM you use for tracking the organization.
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			crm_uid: new FormControl<string | null | undefined>(undefined),
			crm_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			deal_closed_date: new FormControl<string | null | undefined>(undefined),
			lifecycle_stage: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			owner_email: new FormControl<string | null | undefined>(undefined),
			owner_name: new FormControl<string | null | undefined>(undefined),
			price_plan: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Post_activity {

		/** Required */
		activity_type: Post_activityActivity_type;

		/** The date and time at which the content was published; defaults to now */
		occurred_at?: string | null;

		/**
		 * The url representing the post
		 * Required
		 */
		url: string;
	}
	export interface Post_activityFormProperties {

		/** Required */
		activity_type: FormControl<Post_activityActivity_type | null | undefined>,

		/** The date and time at which the content was published; defaults to now */
		occurred_at: FormControl<string | null | undefined>,

		/**
		 * The url representing the post
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreatePost_activityFormGroup() {
		return new FormGroup<Post_activityFormProperties>({
			activity_type: new FormControl<Post_activityActivity_type | null | undefined>(undefined, [Validators.required]),
			occurred_at: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum Post_activityActivity_type { content = 'content' }

	export interface Post_activity_with_member extends Post_activity {
		member?: Member;
	}
	export interface Post_activity_with_memberFormProperties extends Post_activityFormProperties {
	}
	export function CreatePost_activity_with_memberFormGroup() {
		return new FormGroup<Post_activity_with_memberFormProperties>({
			activity_type: new FormControl<Post_activityActivity_type | null | undefined>(undefined, [Validators.required]),
			occurred_at: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Webhook_subscription {
		activity_tags?: Array<string>;
		activity_types?: Array<string>;

		/** Required */
		event_type: string;
		member_tags?: Array<string>;

		/** Required */
		name: string;
		secret?: string | null;

		/** Required */
		url: string;
	}
	export interface Webhook_subscriptionFormProperties {

		/** Required */
		event_type: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		secret: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhook_subscriptionFormGroup() {
		return new FormGroup<Webhook_subscriptionFormProperties>({
			event_type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secret: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get info about the current user
		 * Get user
		 * @return {void} success
		 */
		UserGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'user', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all workspaces for the current user
		 * Get workspaces
		 * @return {void} success
		 */
		WorkspacesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'workspaces', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a workspace
		 * Get workspaces/{workspace_slug}
		 * @param {boolean} include_orbit_level_counts Include the number of members by Orbit Level in the attributes
		 * @return {void} success
		 */
		Workspaces_workspace_slugGetByInclude_orbit_level_counts(workspace_slug: string, include_orbit_level_counts: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'workspaces/' + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '&include_orbit_level_counts=' + include_orbit_level_counts, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List activities for a workspace
		 * Get {workspace_slug}/activities
		 * @param {string} member_tags The list of tags to filter against. Separate tags with `,` to do an intersection (AND), or with `|` to do a union (OR)
		 * @param {string} orbit The list of orbit levels to filter against. Accepted values are 1, 2, 3, 4, n. In the request, a format like `23` would include levels 2 and 3. `n` is for members with no orbit level.
		 * @param {_workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeActivity_type} activity_type Comma separated list of activity types
		 * @param {string} company_ Comma separated list of companies. The union (OR) of companies is applied.
		 * @param {string} title_ Comma separated list of job titles. The union (OR) of job titles is applied.
		 * @param {string} regions_ Comma separated list of regions. The union (OR) of regions is applied.
		 * @param {string} countries_ Comma separated list of countries. The union (OR) of countries is applied.
		 * @param {string} cities_ Comma separated list of cities. The union (OR) of cities is applied.
		 * @param {string} start_date Filter activities after this date. Format: YYYY-MM-DD.
		 * @param {string} end_date Filter activities before this date. Format: YYYY-MM-DD.
		 * @param {string} relative Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.
		 * @param {string} type Deprecated in favor of the activity_type parameter.
		 * @return {void} success
		 */
		_workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndType(workspace_slug: string, affiliation: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeAffiliation | null | undefined, member_tags: string | null | undefined, orbit: string | null | undefined, activity_type: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeActivity_type | null | undefined, identity: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeIdentity | null | undefined, company_: string | null | undefined, title_: string | null | undefined, regions_: string | null | undefined, countries_: string | null | undefined, cities_: string | null | undefined, start_date: string | null | undefined, end_date: string | null | undefined, relative: string | null | undefined, page: string | null | undefined, direction: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeDirection | null | undefined, items: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeItems | null | undefined, sort: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeSort | null | undefined, type: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/activities&affiliation=' + affiliation + '&member_tags=' + (member_tags == null ? '' : encodeURIComponent(member_tags)) + '&orbit=' + (orbit == null ? '' : encodeURIComponent(orbit)) + '&activity_type=' + activity_type + '&identity=' + identity + '&company_=' + (company_ == null ? '' : encodeURIComponent(company_)) + '&title_=' + (title_ == null ? '' : encodeURIComponent(title_)) + '&regions_=' + (regions_ == null ? '' : encodeURIComponent(regions_)) + '&countries_=' + (countries_ == null ? '' : encodeURIComponent(countries_)) + '&cities_=' + (cities_ == null ? '' : encodeURIComponent(cities_)) + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&relative=' + (relative == null ? '' : encodeURIComponent(relative)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&direction=' + direction + '&items=' + items + '&sort=' + sort + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a Custom or a Content activity for a new or existing member
		 * Use this method when you know an identity of the member (github, email, twitter, etc.) but not their Orbit ID. Pass fields in the member object to update the member in addition to creating the activity.
		 * Post {workspace_slug}/activities
		 * @return {void} 
		 */
		_workspace_slugActivitiesPost(workspace_slug: string, requestBody: Activity_and_identity, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/activities', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an activity in the workspace
		 * Get {workspace_slug}/activities/{id}
		 * @return {void} success
		 */
		_workspace_slugActivities_idGet(workspace_slug: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/activities/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all activity types for a workspace
		 * Get {workspace_slug}/activity_types
		 * @return {void} success
		 */
		_workspace_slugActivity_typesGet(workspace_slug: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/activity_types', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List members in a workspace
		 * Get {workspace_slug}/members
		 * @param {string} member_tags The list of tags to filter against. Separate tags with `,` to do an intersection (AND), or with `|` to do a union (OR)
		 * @param {string} orbit The list of orbit levels to filter against. Accepted values are 1, 2, 3, 4, n. In the request, a format like `23` would include levels 2 and 3. `n` is for members with no orbit level.
		 * @param {_workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeActivity_type} activity_type Comma separated list of activity types
		 * @param {string} company_ Comma separated list of companies. The union (OR) of companies is applied.
		 * @param {string} title_ Comma separated list of job titles. The union (OR) of job titles is applied.
		 * @param {string} regions_ Comma separated list of regions. The union (OR) of regions is applied.
		 * @param {string} countries_ Comma separated list of countries. The union (OR) of countries is applied.
		 * @param {string} cities_ Comma separated list of cities. The union (OR) of cities is applied.
		 * @param {string} start_date Filter activities after this date. Format: YYYY-MM-DD.
		 * @param {string} end_date Filter activities before this date. Format: YYYY-MM-DD.
		 * @param {string} relative Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.
		 * @param {string} type Deprecated in favor of the activity_type parameter.
		 * @return {void} success
		 */
		_workspace_slugMembersGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndQueryAndPageAndDirectionAndItemsAndActivities_count_minAndActivities_count_maxAndSortAndType(workspace_slug: string, affiliation: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeAffiliation | null | undefined, member_tags: string | null | undefined, orbit: string | null | undefined, activity_type: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeActivity_type | null | undefined, identity: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeIdentity | null | undefined, company_: string | null | undefined, title_: string | null | undefined, regions_: string | null | undefined, countries_: string | null | undefined, cities_: string | null | undefined, start_date: string | null | undefined, end_date: string | null | undefined, relative: string | null | undefined, query: string | null | undefined, page: string | null | undefined, direction: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeDirection | null | undefined, items: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeItems | null | undefined, activities_count_min: string | null | undefined, activities_count_max: string | null | undefined, sort: _workspace_slugMembersGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndQueryAndPageAndDirectionAndItemsAndActivities_count_minAndActivities_count_maxAndSortAndTypeSort | null | undefined, type: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members&affiliation=' + affiliation + '&member_tags=' + (member_tags == null ? '' : encodeURIComponent(member_tags)) + '&orbit=' + (orbit == null ? '' : encodeURIComponent(orbit)) + '&activity_type=' + activity_type + '&identity=' + identity + '&company_=' + (company_ == null ? '' : encodeURIComponent(company_)) + '&title_=' + (title_ == null ? '' : encodeURIComponent(title_)) + '&regions_=' + (regions_ == null ? '' : encodeURIComponent(regions_)) + '&countries_=' + (countries_ == null ? '' : encodeURIComponent(countries_)) + '&cities_=' + (cities_ == null ? '' : encodeURIComponent(cities_)) + '&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&relative=' + (relative == null ? '' : encodeURIComponent(relative)) + '&query=' + (query == null ? '' : encodeURIComponent(query)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&direction=' + direction + '&items=' + items + '&activities_count_min=' + (activities_count_min == null ? '' : encodeURIComponent(activities_count_min)) + '&activities_count_max=' + (activities_count_max == null ? '' : encodeURIComponent(activities_count_max)) + '&sort=' + sort + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create or update a member
		 * This method is useful when you know a member's identity in another system and want to create or update the corresponding Orbit member. Identities can be specified in the identity object or member attributes like member.github. If no member exists, a new member will be created and linked to any provided identities.
		 * Post {workspace_slug}/members
		 * @return {void} success
		 */
		_workspace_slugMembersPost(workspace_slug: string, requestBody: Member_and_identity, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Find a member by an identity
		 * Provide a source and one of username/uid/email params to return a member with that identity, if one exists. Common values for source include github, twitter, and email.
		 * Get {workspace_slug}/members/find
		 * @param {string} github Deprecated, please use source=github and username=<username> instead
		 * @return {void} success
		 */
		_workspace_slugMembersFindGetBySourceAndSource_hostAndUidAndUsernameAndEmailAndGithub(workspace_slug: string, source: string | null | undefined, source_host: string | null | undefined, uid: string | null | undefined, username: string | null | undefined, email: string | null | undefined, github: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/find&source=' + (source == null ? '' : encodeURIComponent(source)) + '&source_host=' + (source_host == null ? '' : encodeURIComponent(source_host)) + '&uid=' + (uid == null ? '' : encodeURIComponent(uid)) + '&username=' + (username == null ? '' : encodeURIComponent(username)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&github=' + (github == null ? '' : encodeURIComponent(github)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a member
		 * Delete {workspace_slug}/members/{member_slug}
		 * @return {void} 
		 */
		_workspace_slugMembers_member_slugDelete(workspace_slug: string, member_slug: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a member
		 * Get {workspace_slug}/members/{member_slug}
		 * @return {void} success
		 */
		_workspace_slugMembers_member_slugGet(workspace_slug: string, member_slug: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a member
		 * Put {workspace_slug}/members/{member_slug}
		 * @return {void} 
		 */
		_workspace_slugMembers_member_slugPut(workspace_slug: string, member_slug: string, requestBody: Member, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List activities for a member
		 * Get {workspace_slug}/members/{member_slug}/activities
		 * @param {string} type Deprecated in favor of the activity_type parameter.
		 * @return {void} success
		 */
		_workspace_slugMembers_member_slugActivitiesGetByPageAndDirectionAndItemsAndSortAndActivity_typeAndType(workspace_slug: string, member_slug: string, page: string | null | undefined, direction: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeDirection | null | undefined, items: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeItems | null | undefined, sort: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeSort | null | undefined, activity_type: string | null | undefined, type: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '/activities&page=' + (page == null ? '' : encodeURIComponent(page)) + '&direction=' + direction + '&items=' + items + '&sort=' + sort + '&activity_type=' + (activity_type == null ? '' : encodeURIComponent(activity_type)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a Custom or a Content activity for a member
		 * Post {workspace_slug}/members/{member_slug}/activities
		 * @return {void} 
		 */
		_workspace_slugMembers_member_slugActivitiesPost(workspace_slug: string, member_slug: string, requestBody: Custom_or_post_activity, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '/activities', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a post activity
		 * Delete {workspace_slug}/members/{member_slug}/activities/{id}
		 * @return {void} 
		 */
		_workspace_slugMembers_member_slugActivities_idDelete(workspace_slug: string, member_slug: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '/activities/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a custom activity for a member
		 * Put {workspace_slug}/members/{member_slug}/activities/{id}
		 * @return {void} 
		 */
		_workspace_slugMembers_member_slugActivities_idPut(workspace_slug: string, member_slug: string, id: string, requestBody: Activity, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '/activities/' + (id == null ? '' : encodeURIComponent(id)) + '', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove identity from a member
		 * Delete {workspace_slug}/members/{member_slug}/identities
		 * @return {void} 
		 */
		_workspace_slugMembers_member_slugIdentitiesDelete(workspace_slug: string, member_slug: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '/identities', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add identity to a member
		 * Post {workspace_slug}/members/{member_slug}/identities
		 * @return {void} 
		 */
		_workspace_slugMembers_member_slugIdentitiesPost(workspace_slug: string, member_slug: string, requestBody: Identity, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '/identities', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get the member's notes
		 * Get {workspace_slug}/members/{member_slug}/notes
		 * @return {void} success
		 */
		_workspace_slugMembers_member_slugNotesGetByPage(workspace_slug: string, member_slug: string, page: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '/notes&page=' + (page == null ? '' : encodeURIComponent(page)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a note
		 * Post {workspace_slug}/members/{member_slug}/notes
		 * @return {void} 
		 */
		_workspace_slugMembers_member_slugNotesPost(workspace_slug: string, member_slug: string, requestBody: Note, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '/notes', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a note
		 * Put {workspace_slug}/members/{member_slug}/notes/{id}
		 * @return {void} 
		 */
		_workspace_slugMembers_member_slugNotes_idPut(workspace_slug: string, member_slug: string, id: string, requestBody: Note, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/members/' + (member_slug == null ? '' : encodeURIComponent(member_slug)) + '/notes/' + (id == null ? '' : encodeURIComponent(id)) + '', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List organizations in a workspace
		 * Get {workspace_slug}/organizations
		 * @return {void} success
		 */
		_workspace_slugOrganizationsGetByQueryAndPageAndDirectionAndItemsAndSort(workspace_slug: string, query: string | null | undefined, page: string | null | undefined, direction: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeDirection | null | undefined, items: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeItems | null | undefined, sort: _workspace_slugOrganizationsGetByQueryAndPageAndDirectionAndItemsAndSortSort | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/organizations&query=' + (query == null ? '' : encodeURIComponent(query)) + '&page=' + (page == null ? '' : encodeURIComponent(page)) + '&direction=' + direction + '&items=' + items + '&sort=' + sort + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get an organization
		 * Get {workspace_slug}/organizations/{organization_id}
		 * @return {void} success
		 */
		_workspace_slugOrganizations_organization_idGet(workspace_slug: string, organization_id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/organizations/' + (organization_id == null ? '' : encodeURIComponent(organization_id)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update an organization
		 * Put {workspace_slug}/organizations/{organization_id}
		 * @return {void} 
		 */
		_workspace_slugOrganizations_organization_idPut(workspace_slug: string, organization_id: string, requestBody: Organization, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/organizations/' + (organization_id == null ? '' : encodeURIComponent(organization_id)) + '', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List member activities in an organization
		 * Get {workspace_slug}/organizations/{organization_id}/activities
		 * @return {void} success
		 */
		_workspace_slugOrganizations_organization_idActivitiesGetByPageAndDirectionAndItemsAndSortAndActivity_type(workspace_slug: string, organization_id: string, page: string | null | undefined, direction: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeDirection | null | undefined, items: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeItems | null | undefined, sort: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeSort | null | undefined, activity_type: _workspace_slugOrganizations_organization_idActivitiesGetByPageAndDirectionAndItemsAndSortAndActivity_typeActivity_type | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/organizations/' + (organization_id == null ? '' : encodeURIComponent(organization_id)) + '/activities&page=' + (page == null ? '' : encodeURIComponent(page)) + '&direction=' + direction + '&items=' + items + '&sort=' + sort + '&activity_type=' + activity_type + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List members in an organization
		 * Get {workspace_slug}/organizations/{organization_id}/members
		 * @return {void} success
		 */
		_workspace_slugOrganizations_organization_idMembersGetByPageAndItems(workspace_slug: string, organization_id: string, page: string | null | undefined, items: _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeItems | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/organizations/' + (organization_id == null ? '' : encodeURIComponent(organization_id)) + '/members&page=' + (page == null ? '' : encodeURIComponent(page)) + '&items=' + items + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a workspace stats
		 * Get {workspace_slug}/reports
		 * @param {string} start_date Filter activities after this date. Format: YYYY-MM-DD.
		 * @param {string} end_date Filter activities before this date. Format: YYYY-MM-DD.
		 * @param {string} relative Relative timeframes. Format: this_<integer>_<period>, with period in [days, weeks, months, years]. For example, this_30_days.
		 * @param {string} type Deprecated in favor of the activity_type parameter.
		 * @return {void} success
		 */
		_workspace_slugReportsGetByStart_dateAndEnd_dateAndRelativeAndPropertiesAndActivity_typeAndType(workspace_slug: string, start_date: string | null | undefined, end_date: string | null | undefined, relative: string | null | undefined, properties: string | null | undefined, activity_type: string | null | undefined, type: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/reports&start_date=' + (start_date == null ? '' : encodeURIComponent(start_date)) + '&end_date=' + (end_date == null ? '' : encodeURIComponent(end_date)) + '&relative=' + (relative == null ? '' : encodeURIComponent(relative)) + '&properties=' + (properties == null ? '' : encodeURIComponent(properties)) + '&activity_type=' + (activity_type == null ? '' : encodeURIComponent(activity_type)) + '&type=' + (type == null ? '' : encodeURIComponent(type)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List webhooks in a workspace
		 * Get {workspace_slug}/webhooks
		 * @return {void} success
		 */
		_workspace_slugWebhooksGet(workspace_slug: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/webhooks', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Create a webhook
		 * Post {workspace_slug}/webhooks
		 * @return {void} 
		 */
		_workspace_slugWebhooksPost(workspace_slug: string, requestBody: Webhook_subscription, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/webhooks', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete a webhook
		 * Delete {workspace_slug}/webhooks/{id}
		 * @return {void} 
		 */
		_workspace_slugWebhooks_idDelete(workspace_slug: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get a webhook
		 * Get {workspace_slug}/webhooks/{id}
		 * @return {void} success
		 */
		_workspace_slugWebhooks_idGet(workspace_slug: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update a webhook
		 * Put {workspace_slug}/webhooks/{id}
		 * @return {void} 
		 */
		_workspace_slugWebhooks_idPut(workspace_slug: string, id: string, requestBody: Webhook_subscription, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + (workspace_slug == null ? '' : encodeURIComponent(workspace_slug)) + '/webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}
	}

	export enum _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeAffiliation { member = 'member', teammate = 'teammate' }

	export enum _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeActivity_type { 'discourse:topic:created' = 'discourse:topic:created', 'discourse:post:liked' = 'discourse:post:liked', 'discourse:user:created' = 'discourse:user:created', 'discourse:post:created' = 'discourse:post:created', 'slack:message:sent' = 'slack:message:sent', 'slack:thread:replied' = 'slack:thread:replied', 'slack:channel:joined' = 'slack:channel:joined', 'note:created' = 'note:created', 'post:created' = 'post:created', 'issues:opened' = 'issues:opened', 'discord:message:sent' = 'discord:message:sent', 'issue_comment:created' = 'issue_comment:created', 'discord:thread:replied' = 'discord:thread:replied', 'custom:happened' = 'custom:happened', 'dev:comment' = 'dev:comment', 'discord:message:replied' = 'discord:message:replied', 'discord:server:joined' = 'discord:server:joined', 'insided:conversation:started' = 'insided:conversation:started', 'fork:created' = 'fork:created', 'insided:idea:replied' = 'insided:idea:replied', 'insided:article:created' = 'insided:article:created', 'discussions:discussion_created' = 'discussions:discussion_created', 'insided:question:replied' = 'insided:question:replied', 'discussions:comment' = 'discussions:comment', 'discussions:reply' = 'discussions:reply', 'insided:article:replied' = 'insided:article:replied', 'insided:question:asked' = 'insided:question:asked', 'insided:conversation:replied' = 'insided:conversation:replied', 'insided:idea:submitted' = 'insided:idea:submitted', 'reddit:comment' = 'reddit:comment', 'reddit:post' = 'reddit:post', 'stackoverflow:answer' = 'stackoverflow:answer', 'linkedin:comment' = 'linkedin:comment', 'pull_requests:opened' = 'pull_requests:opened', 'pull_requests:merged' = 'pull_requests:merged', 'star:created' = 'star:created', 'stackoverflow:question' = 'stackoverflow:question', 'tweet:sent' = 'tweet:sent', 'twitter:followed' = 'twitter:followed', 'youtube:comment' = 'youtube:comment' }

	export enum _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeIdentity { github = 'github', twitter = 'twitter', email = 'email', discourse = 'discourse', linkedin = 'linkedin', devto = 'devto', slack = 'slack', discord = 'discord' }

	export enum _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeDirection { ASC = 'ASC', DESC = 'DESC' }

	export enum _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeItems { _10 = '10', _50 = '50', _100 = '100' }

	export enum _workspace_slugActivitiesGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndPageAndDirectionAndItemsAndSortAndTypeSort { occurred_at = 'occurred_at', member = 'member' }

	export enum _workspace_slugMembersGetByAffiliationAndMember_tagsAndOrbitAndActivity_typeAndIdentityAndCompany_AndTitle_AndRegions_AndCountries_AndCities_AndStart_dateAndEnd_dateAndRelativeAndQueryAndPageAndDirectionAndItemsAndActivities_count_minAndActivities_count_maxAndSortAndTypeSort { activities_count = 'activities_count', company = 'company', created_at = 'created_at', first_activity = 'first_activity', github_followers = 'github_followers', id = 'id', last_activity = 'last_activity', location = 'location', love = 'love', name = 'name', orbit = 'orbit', reach = 'reach', title = 'title', twitter_followers = 'twitter_followers', updated_at = 'updated_at' }

	export enum _workspace_slugOrganizationsGetByQueryAndPageAndDirectionAndItemsAndSortSort { name = 'name', website = 'website', members_count = 'members_count', employees_count = 'employees_count' }

	export enum _workspace_slugOrganizations_organization_idActivitiesGetByPageAndDirectionAndItemsAndSortAndActivity_typeActivity_type { content = 'content', custom = 'custom', discord = 'discord', discourse = 'discourse', github = 'github', slack = 'slack', twitter = 'twitter' }

}

