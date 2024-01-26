import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** API Key object */
	export interface APIKey {

		/** Object id. */
		id?: string | null;

		/** Authentication token */
		key?: string | null;

		/** Custom name for the resource */
		name?: string | null;
	}

	/** API Key object */
	export interface APIKeyFormProperties {

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Authentication token */
		key: FormControl<string | null | undefined>,

		/** Custom name for the resource */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAPIKeyFormGroup() {
		return new FormGroup<APIKeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Account {

		/** Collection for the next billing period is autommatic/manual */
		auto_collection?: AccountAuto_collection | null;

		/** Account balance in cents */
		balance?: number | null;

		/** 3 letter currency code */
		balance_currency_code?: string | null;

		/** Number of free targets */
		free_target_quantity?: number | null;

		/** Has account used up it's trial */
		has_used_trial?: boolean | null;

		/** Heroku accounts (for future use) */
		heroku?: boolean | null;

		/** Date of next billing */
		next_billing_at?: Date | null;
		plan?: Plan;

		/** Number of subscribed targets */
		plan_target_quantity?: number | null;

		/** Maximum number of subscribed target for pool plans */
		pool_size?: number | null;

		/**
		 * * active - active subscription, either trial or paying
		 * * trial_ended - trial ended and subscription was discontinued
		 * * canceled - subscription canceled
		 */
		status?: AccountStatus | null;

		/** Trial termination date */
		trialEnd?: Date | null;
	}
	export interface AccountFormProperties {

		/** Collection for the next billing period is autommatic/manual */
		auto_collection: FormControl<AccountAuto_collection | null | undefined>,

		/** Account balance in cents */
		balance: FormControl<number | null | undefined>,

		/** 3 letter currency code */
		balance_currency_code: FormControl<string | null | undefined>,

		/** Number of free targets */
		free_target_quantity: FormControl<number | null | undefined>,

		/** Has account used up it's trial */
		has_used_trial: FormControl<boolean | null | undefined>,

		/** Heroku accounts (for future use) */
		heroku: FormControl<boolean | null | undefined>,

		/** Date of next billing */
		next_billing_at: FormControl<Date | null | undefined>,

		/** Number of subscribed targets */
		plan_target_quantity: FormControl<number | null | undefined>,

		/** Maximum number of subscribed target for pool plans */
		pool_size: FormControl<number | null | undefined>,

		/**
		 * * active - active subscription, either trial or paying
		 * * trial_ended - trial ended and subscription was discontinued
		 * * canceled - subscription canceled
		 */
		status: FormControl<AccountStatus | null | undefined>,

		/** Trial termination date */
		trialEnd: FormControl<Date | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			auto_collection: new FormControl<AccountAuto_collection | null | undefined>(undefined),
			balance: new FormControl<number | null | undefined>(undefined),
			balance_currency_code: new FormControl<string | null | undefined>(undefined),
			free_target_quantity: new FormControl<number | null | undefined>(undefined),
			has_used_trial: new FormControl<boolean | null | undefined>(undefined),
			heroku: new FormControl<boolean | null | undefined>(undefined),
			next_billing_at: new FormControl<Date | null | undefined>(undefined),
			plan_target_quantity: new FormControl<number | null | undefined>(undefined),
			pool_size: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<AccountStatus | null | undefined>(undefined),
			trialEnd: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export enum AccountAuto_collection { on = 'on', off = 'off' }

	export interface Plan {

		/** List of scan profiles allowed by the plan */
		allowed_scan_profiles?: Array<string>;

		/**
		 * * per_unit - each target is paid independently
		 * * flat_fee - targets are paid as a pool
		 */
		charge_model?: PlanCharge_model | null;

		/** 3 letter currency code */
		currency_code?: string | null;

		/** Custom description for the resource */
		description?: string | null;

		/** Object id. */
		id?: string | null;

		/** Is this a trial plan */
		is_trial?: boolean | null;

		/** Custom name for the resource */
		name?: string | null;

		/** Number of of period unit between charges */
		period?: string | null;

		/** Unit of billing period */
		period_unit?: PlanPeriod_unit | null;

		/** Price in cents */
		price?: number | null;
	}
	export interface PlanFormProperties {

		/**
		 * * per_unit - each target is paid independently
		 * * flat_fee - targets are paid as a pool
		 */
		charge_model: FormControl<PlanCharge_model | null | undefined>,

		/** 3 letter currency code */
		currency_code: FormControl<string | null | undefined>,

		/** Custom description for the resource */
		description: FormControl<string | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Is this a trial plan */
		is_trial: FormControl<boolean | null | undefined>,

		/** Custom name for the resource */
		name: FormControl<string | null | undefined>,

		/** Number of of period unit between charges */
		period: FormControl<string | null | undefined>,

		/** Unit of billing period */
		period_unit: FormControl<PlanPeriod_unit | null | undefined>,

		/** Price in cents */
		price: FormControl<number | null | undefined>,
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
			charge_model: new FormControl<PlanCharge_model | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_trial: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			period: new FormControl<string | null | undefined>(undefined),
			period_unit: new FormControl<PlanPeriod_unit | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PlanCharge_model { per_unit = 'per_unit', flat_fee = 'flat_fee' }

	export enum PlanPeriod_unit { month = 'month', year = 'year' }

	export enum AccountStatus { active = 'active', trial_ended = 'trial_ended', canceled = 'canceled' }

	export interface Action {

		/**
		 * Action to enable targets:
		 * * null - no action required
		 * * trial - start a trial
		 * * plan - select a plan to subscribe
		 * * subscribe - add target to subscribed plan
		 */
		action?: ActionAction | null;
	}
	export interface ActionFormProperties {

		/**
		 * Action to enable targets:
		 * * null - no action required
		 * * trial - start a trial
		 * * plan - select a plan to subscribe
		 * * subscribe - add target to subscribed plan
		 */
		action: FormControl<ActionAction | null | undefined>,
	}
	export function CreateActionFormGroup() {
		return new FormGroup<ActionFormProperties>({
			action: new FormControl<ActionAction | null | undefined>(undefined),
		});

	}

	export enum ActionAction { _null = 0, trial = 'trial', plan = 'plan', subscribe = 'subscribe' }

	export interface ActionsElement {

		/**
		 * Actions are:
		 * * edit - edit target
		 * * delete - delete target
		 * * trial - start a trial with this target
		 * * plan - select a subscipition plan with this target
		 * * subscribe - add target to subscribed plan
		 * * unsubscribe - remove target from subscription
		 * * archive - archive target
		 * * activate - unarchive target
		 */
		action?: ActionsElementAction | null;

		/** Label or the action */
		label?: string | null;
	}
	export interface ActionsElementFormProperties {

		/**
		 * Actions are:
		 * * edit - edit target
		 * * delete - delete target
		 * * trial - start a trial with this target
		 * * plan - select a subscipition plan with this target
		 * * subscribe - add target to subscribed plan
		 * * unsubscribe - remove target from subscription
		 * * archive - archive target
		 * * activate - unarchive target
		 */
		action: FormControl<ActionsElementAction | null | undefined>,

		/** Label or the action */
		label: FormControl<string | null | undefined>,
	}
	export function CreateActionsElementFormGroup() {
		return new FormGroup<ActionsElementFormProperties>({
			action: new FormControl<ActionsElementAction | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActionsElementAction { edit = 'edit', delete = 'delete', trial = 'trial', plan = 'plan', subscribe = 'subscribe', unsubscribe = 'unsubscribe', archive = 'archive', activate = 'activate' }

	export interface Activity {

		/**
		 * Type of change:
		 * * created - First time the issue is found
		 * * comment - User left a comment in the timeline
		 * * found - Found again in a later scan
		 * * changed - One of the parameters of the finding was changed
		 * (e.g. severity)
		 */
		change?: ActivityChange;

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/** Field that was changed */
		field?: string | null;

		/** Previous value */
		old_value?: string | null;

		/** New value */
		value?: string | null;
	}
	export interface ActivityFormProperties {

		/**
		 * Type of change:
		 * * created - First time the issue is found
		 * * comment - User left a comment in the timeline
		 * * found - Found again in a later scan
		 * * changed - One of the parameters of the finding was changed
		 * (e.g. severity)
		 */
		change: FormControl<ActivityChange | null | undefined>,

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** Field that was changed */
		field: FormControl<string | null | undefined>,

		/** Previous value */
		old_value: FormControl<string | null | undefined>,

		/** New value */
		value: FormControl<string | null | undefined>,
	}
	export function CreateActivityFormGroup() {
		return new FormGroup<ActivityFormProperties>({
			change: new FormControl<ActivityChange | null | undefined>(undefined),
			changed: new FormControl<Date | null | undefined>(undefined),
			field: new FormControl<string | null | undefined>(undefined),
			old_value: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ActivityChange { created = 'created', comment = 'comment', found = 'found', changed = 'changed' }


	/** User that last modified the object */
	export interface ChangedBy {

		/** User's email (changing this resets the user's password and revokes existing tokens) */
		email?: string | null;

		/** User's id */
		id?: string | null;

		/** User's name */
		name?: string | null;
	}

	/** User that last modified the object */
	export interface ChangedByFormProperties {

		/** User's email (changing this resets the user's password and revokes existing tokens) */
		email: FormControl<string | null | undefined>,

		/** User's id */
		id: FormControl<string | null | undefined>,

		/** User's name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateChangedByFormGroup() {
		return new FormGroup<ChangedByFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Secondary domain of a target */
	export interface Asset {

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/** Custom cookies name/value pairs */
		AssetCookies?: Array<AssetCookies>;

		/** Custom description for the resource */
		desc?: string | null;

		/** Custom headers name value pairs */
		AssetHeaders?: Array<AssetHeaders>;

		/** Fully qualified hostname */
		host?: string | null;

		/** Object id. */
		id?: string | null;

		/** Use this asset in scans. */
		include?: boolean | null;

		/** Custom name for the resource */
		name?: string | null;

		/** List of frameworks detected on this resource */
		stack?: Array<string>;

		/** Verification date time */
		verification_date?: Date | null;

		/** Reason for last verification failure. */
		verification_last_error?: string | null;

		/**
		 * Type of verification:
		 * * dns - we look or a TXT record on the host you registered containing
		 * `Probely=<verification_token>`
		 * * file - on the root of the path you registered we look for a file
		 * named `<verification token>` containing `Probely`.
		 */
		verification_method?: AssetVerification_method | null;

		/** Token used to verify */
		verification_token?: string | null;

		/** Has resource ownership been verified */
		verified?: boolean | null;
	}

	/** Secondary domain of a target */
	export interface AssetFormProperties {

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** Custom description for the resource */
		desc: FormControl<string | null | undefined>,

		/** Fully qualified hostname */
		host: FormControl<string | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Use this asset in scans. */
		include: FormControl<boolean | null | undefined>,

		/** Custom name for the resource */
		name: FormControl<string | null | undefined>,

		/** Verification date time */
		verification_date: FormControl<Date | null | undefined>,

		/** Reason for last verification failure. */
		verification_last_error: FormControl<string | null | undefined>,

		/**
		 * Type of verification:
		 * * dns - we look or a TXT record on the host you registered containing
		 * `Probely=<verification_token>`
		 * * file - on the root of the path you registered we look for a file
		 * named `<verification token>` containing `Probely`.
		 */
		verification_method: FormControl<AssetVerification_method | null | undefined>,

		/** Token used to verify */
		verification_token: FormControl<string | null | undefined>,

		/** Has resource ownership been verified */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			include: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			verification_date: new FormControl<Date | null | undefined>(undefined),
			verification_last_error: new FormControl<string | null | undefined>(undefined),
			verification_method: new FormControl<AssetVerification_method | null | undefined>(undefined),
			verification_token: new FormControl<string | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AssetCookies {

		/** Cookie name. */
		name?: string | null;

		/** Cookie value. */
		value?: string | null;
	}
	export interface AssetCookiesFormProperties {

		/** Cookie name. */
		name: FormControl<string | null | undefined>,

		/** Cookie value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAssetCookiesFormGroup() {
		return new FormGroup<AssetCookiesFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssetHeaders {

		/** Header name. */
		name?: string | null;

		/** Header value. */
		value?: string | null;
	}
	export interface AssetHeadersFormProperties {

		/** Header name. */
		name: FormControl<string | null | undefined>,

		/** Header value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateAssetHeadersFormGroup() {
		return new FormGroup<AssetHeadersFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AssetVerification_method { dns = 'dns', file = 'file' }


	/** Assigned user */
	export interface Assignee {

		/** User's email (changing this resets the user's password and revokes existing tokens) */
		email?: string | null;

		/** User's id */
		id?: string | null;

		/** User's name */
		name?: string | null;
	}

	/** Assigned user */
	export interface AssigneeFormProperties {

		/** User's email (changing this resets the user's password and revokes existing tokens) */
		email: FormControl<string | null | undefined>,

		/** User's id */
		id: FormControl<string | null | undefined>,

		/** User's name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateAssigneeFormGroup() {
		return new FormGroup<AssigneeFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Basic authentication credentials */
	export interface BasicAuth {
		password?: string | null;

		/** Username */
		username?: string | null;
	}

	/** Basic authentication credentials */
	export interface BasicAuthFormProperties {
		password: FormControl<string | null | undefined>,

		/** Username */
		username: FormControl<string | null | undefined>,
	}
	export function CreateBasicAuthFormGroup() {
		return new FormGroup<BasicAuthFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Billing {

		/**
		 * Address
		 * Required
		 */
		address: string;

		/**
		 * City
		 * Required
		 */
		city: string;

		/**
		 * ISO 3166 alpha-2 country code
		 * Required
		 */
		country: string;

		/**
		 * Contact email
		 * Required
		 */
		email: string;

		/**
		 * First name
		 * Required
		 */
		first_name: string;

		/**
		 * Last name
		 * Required
		 */
		last_name: string;

		/** Extra data */
		other?: string | null;

		/** Company registration number */
		reg_number?: string | null;

		/**
		 * Company VAT registration number
		 * Required
		 */
		vat_number: string;

		/**
		 * Address ZIP code
		 * Required
		 */
		zip: string;
	}
	export interface BillingFormProperties {

		/**
		 * Address
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * City
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * ISO 3166 alpha-2 country code
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * Contact email
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * First name
		 * Required
		 */
		first_name: FormControl<string | null | undefined>,

		/**
		 * Last name
		 * Required
		 */
		last_name: FormControl<string | null | undefined>,

		/** Extra data */
		other: FormControl<string | null | undefined>,

		/** Company registration number */
		reg_number: FormControl<string | null | undefined>,

		/**
		 * Company VAT registration number
		 * Required
		 */
		vat_number: FormControl<string | null | undefined>,

		/**
		 * Address ZIP code
		 * Required
		 */
		zip: FormControl<string | null | undefined>,
	}
	export function CreateBillingFormGroup() {
		return new FormGroup<BillingFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			first_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			other: new FormControl<string | null | undefined>(undefined),
			reg_number: new FormControl<string | null | undefined>(undefined),
			vat_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CookiesElement {

		/** Cookie name. */
		name?: string | null;

		/** Cookie value. */
		value?: string | null;
	}
	export interface CookiesElementFormProperties {

		/** Cookie name. */
		name: FormControl<string | null | undefined>,

		/** Cookie value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateCookiesElementFormGroup() {
		return new FormGroup<CookiesElementFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** User that created the object */
	export interface CreatedBy {

		/** User's email (changing this resets the user's password and revokes existing tokens) */
		email?: string | null;

		/** User's id */
		id?: string | null;

		/** User's name */
		name?: string | null;
	}

	/** User that created the object */
	export interface CreatedByFormProperties {

		/** User's email (changing this resets the user's password and revokes existing tokens) */
		email: FormControl<string | null | undefined>,

		/** User's id */
		id: FormControl<string | null | undefined>,

		/** User's name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreatedByFormGroup() {
		return new FormGroup<CreatedByFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Definition {

		/** Vulnerability definition description. */
		desc?: string | null;

		/** Vulnerability definition id. */
		id?: string | null;

		/** Vulnerability definition name. */
		name?: string | null;
	}
	export interface DefinitionFormProperties {

		/** Vulnerability definition description. */
		desc: FormControl<string | null | undefined>,

		/** Vulnerability definition id. */
		id: FormControl<string | null | undefined>,

		/** Vulnerability definition name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDefinitionFormGroup() {
		return new FormGroup<DefinitionFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Event {

		/** Event object. */
		content?: EventContent;

		/**
		 * Event type:
		 * - `user_created` new user added to account
		 * - `user_deleted` user deleted from account
		 * - `target_created` new target added to account
		 * - `target_deleted` target deleted from account
		 * - `target_verified` target ownership verified
		 * - `target_verification_failed` target ownership verification failed
		 * - `scan_started` scan started on target
		 * - `scan_canceled` scan on target canceled
		 * - `scan_completed` scan finished with successfuly
		 * - `scan_failed` scan finished unsuccessfuly
		 * - `finding_detected` new finding detected (not found before)
		 * - `finding_fixed` finding was fixed
		 */
		event_type?: EventEvent_type | null;

		/** Object id. */
		id?: string | null;

		/**
		 * Type of object in the event content.
		 */
		object_type?: EventObject_type | null;

		/** Date time of when the event occurred */
		ocurred_at?: Date | null;
		webhooks?: Array<Webhook>;
	}
	export interface EventFormProperties {

		/**
		 * Event type:
		 * - `user_created` new user added to account
		 * - `user_deleted` user deleted from account
		 * - `target_created` new target added to account
		 * - `target_deleted` target deleted from account
		 * - `target_verified` target ownership verified
		 * - `target_verification_failed` target ownership verification failed
		 * - `scan_started` scan started on target
		 * - `scan_canceled` scan on target canceled
		 * - `scan_completed` scan finished with successfuly
		 * - `scan_failed` scan finished unsuccessfuly
		 * - `finding_detected` new finding detected (not found before)
		 * - `finding_fixed` finding was fixed
		 */
		event_type: FormControl<EventEvent_type | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/**
		 * Type of object in the event content.
		 */
		object_type: FormControl<EventObject_type | null | undefined>,

		/** Date time of when the event occurred */
		ocurred_at: FormControl<Date | null | undefined>,
	}
	export function CreateEventFormGroup() {
		return new FormGroup<EventFormProperties>({
			event_type: new FormControl<EventEvent_type | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			object_type: new FormControl<EventObject_type | null | undefined>(undefined),
			ocurred_at: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** Event object. */
	export interface EventContent {
	}

	/** Event object. */
	export interface EventContentFormProperties {
	}
	export function CreateEventContentFormGroup() {
		return new FormGroup<EventContentFormProperties>({
		});

	}

	export enum EventEvent_type { user_created = 'user_created', user_deleted = 'user_deleted', target_created = 'target_created', target_deleted = 'target_deleted', target_verified = 'target_verified', target_verification_failed = 'target_verification_failed', scan_started = 'scan_started', scan_canceled = 'scan_canceled', scan_completed = 'scan_completed', scan_failed = 'scan_failed', finding_detected = 'finding_detected', finding_fixed = 'finding_fixed' }

	export enum EventObject_type { user = 'user', target = 'target', scan = 'scan', finding = 'finding' }

	export interface Webhook {

		/** API version for the webhook */
		api_version?: WebhookApi_version | null;

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/** Verify webhook URL HTTPS certificate */
		check_cert?: boolean | null;

		/** Date time of the last change */
		created?: Date | null;

		/** User that last modified the object */
		created_by?: ChangedBy;

		/** Object id. */
		id?: string | null;

		/** Custom name for the resource */
		name?: string | null;

		/**
		 * URL to post events to (must be https)
		 * Required
		 */
		url: string;
	}
	export interface WebhookFormProperties {

		/** API version for the webhook */
		api_version: FormControl<WebhookApi_version | null | undefined>,

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** Verify webhook URL HTTPS certificate */
		check_cert: FormControl<boolean | null | undefined>,

		/** Date time of the last change */
		created: FormControl<Date | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Custom name for the resource */
		name: FormControl<string | null | undefined>,

		/**
		 * URL to post events to (must be https)
		 * Required
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateWebhookFormGroup() {
		return new FormGroup<WebhookFormProperties>({
			api_version: new FormControl<WebhookApi_version | null | undefined>(undefined),
			changed: new FormControl<Date | null | undefined>(undefined),
			check_cert: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum WebhookApi_version { v1 = 'v1' }

	export interface Finding {

		/** Assigned user */
		assignee?: Assignee;

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/** User comment left on the finding. */
		comment?: string | null;

		/** CVSS score */
		cvss_score?: number | null;

		/** CVSS vector */
		cvss_vector?: string | null;
		definition?: Definition;

		/** Evidence for the finding. */
		evidence?: string | null;

		/** Extra data for the finding. */
		extra?: string | null;

		/** Fix sugestion for the vulnerability and framework */
		fix?: string | null;

		/** Object id. */
		id?: string | null;

		/**
		 * An insertion point is the place in the HTTP request where the
		 * malicious payload is injected to exploit the vulnerability.
		 * * cookie - Payload injected into the value of an HTTP cookie
		 * * header - Payload injected into the header of an HTTP request
		 * * parameter - Payload injected into the value of a query string
		 * parameter
		 * * arbitrary_url_param - Payload injected into the value of an
		 * arbitrarily added query string parameter
		 * * url_filename - Payload injected into the URL filename part
		 * * url_folder - Payload injected into the URL folder part
		 * * multipart_parameter - Payload is inserted into the value of a
		 * parameter attribute within a multi-part message body (such as
		 * the name of an uploaded file).
		 * * <empty> - No payload to inject.
		 */
		insertion_point?: FindingInsertion_point | null;

		/** User labels for the finding. */
		labels?: Array<string>;

		/** Date time of the last time the vulnerability was found. */
		last_found?: Date | null;

		/** HTTP method */
		method?: FindingMethod | null;

		/** Vulnerable paramenter. */
		parameter?: string | null;

		/** Request parameters */
		params?: string | null;

		/** Finding path. */
		path?: string | null;

		/** Reporting user */
		reporter?: Reporter;

		/** Request response pairs that produced the finding */
		FindingRequests?: Array<FindingRequests>;

		/** Scan ids where this finding was present. */
		scans?: Array<string>;

		/**
		 * Severity, how serious the issue is considered:
		 * * 10 - low
		 * * 20 - medium
		 * * 30 - high
		 */
		severity?: FindingSeverity | null;

		/**
		 * Finding state:
		 * * notfixed - Issue can still be exploited
		 * * invalid - Issue determined to be a false positive
		 * * accepted - Issue will not be solved and the risk was accepted
		 * * fixed - No problem here anymore
		 */
		state?: FindingState | null;
		target?: TargetSimple;

		/** Full finding URL */
		url?: string | null;

		/** Value for parameter. */
		value?: string | null;
	}
	export interface FindingFormProperties {

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** User comment left on the finding. */
		comment: FormControl<string | null | undefined>,

		/** CVSS score */
		cvss_score: FormControl<number | null | undefined>,

		/** CVSS vector */
		cvss_vector: FormControl<string | null | undefined>,

		/** Evidence for the finding. */
		evidence: FormControl<string | null | undefined>,

		/** Extra data for the finding. */
		extra: FormControl<string | null | undefined>,

		/** Fix sugestion for the vulnerability and framework */
		fix: FormControl<string | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/**
		 * An insertion point is the place in the HTTP request where the
		 * malicious payload is injected to exploit the vulnerability.
		 * * cookie - Payload injected into the value of an HTTP cookie
		 * * header - Payload injected into the header of an HTTP request
		 * * parameter - Payload injected into the value of a query string
		 * parameter
		 * * arbitrary_url_param - Payload injected into the value of an
		 * arbitrarily added query string parameter
		 * * url_filename - Payload injected into the URL filename part
		 * * url_folder - Payload injected into the URL folder part
		 * * multipart_parameter - Payload is inserted into the value of a
		 * parameter attribute within a multi-part message body (such as
		 * the name of an uploaded file).
		 * * <empty> - No payload to inject.
		 */
		insertion_point: FormControl<FindingInsertion_point | null | undefined>,

		/** Date time of the last time the vulnerability was found. */
		last_found: FormControl<Date | null | undefined>,

		/** HTTP method */
		method: FormControl<FindingMethod | null | undefined>,

		/** Vulnerable paramenter. */
		parameter: FormControl<string | null | undefined>,

		/** Request parameters */
		params: FormControl<string | null | undefined>,

		/** Finding path. */
		path: FormControl<string | null | undefined>,

		/**
		 * Severity, how serious the issue is considered:
		 * * 10 - low
		 * * 20 - medium
		 * * 30 - high
		 */
		severity: FormControl<FindingSeverity | null | undefined>,

		/**
		 * Finding state:
		 * * notfixed - Issue can still be exploited
		 * * invalid - Issue determined to be a false positive
		 * * accepted - Issue will not be solved and the risk was accepted
		 * * fixed - No problem here anymore
		 */
		state: FormControl<FindingState | null | undefined>,

		/** Full finding URL */
		url: FormControl<string | null | undefined>,

		/** Value for parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			cvss_score: new FormControl<number | null | undefined>(undefined),
			cvss_vector: new FormControl<string | null | undefined>(undefined),
			evidence: new FormControl<string | null | undefined>(undefined),
			extra: new FormControl<string | null | undefined>(undefined),
			fix: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertion_point: new FormControl<FindingInsertion_point | null | undefined>(undefined),
			last_found: new FormControl<Date | null | undefined>(undefined),
			method: new FormControl<FindingMethod | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingSeverity | null | undefined>(undefined),
			state: new FormControl<FindingState | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingInsertion_point { cookie = 'cookie', header = 'header', parameter = 'parameter', arbitrary_url_param_name = 'arbitrary_url_param_name', url_path_folder = 'url_path_folder', '' = '' }

	export enum FindingMethod { GET = 'GET', OPTIONS = 'OPTIONS', POST = 'POST', PUT = 'PUT', PATCH = 'PATCH', DELETE = 'DELETE', HEAD = 'HEAD' }


	/** Reporting user */
	export interface Reporter {

		/** User's email (changing this resets the user's password and revokes existing tokens) */
		email?: string | null;

		/** User's id */
		id?: string | null;

		/** User's name */
		name?: string | null;
	}

	/** Reporting user */
	export interface ReporterFormProperties {

		/** User's email (changing this resets the user's password and revokes existing tokens) */
		email: FormControl<string | null | undefined>,

		/** User's id */
		id: FormControl<string | null | undefined>,

		/** User's name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateReporterFormGroup() {
		return new FormGroup<ReporterFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FindingRequests {
		request?: string | null;
		response?: string | null;
	}
	export interface FindingRequestsFormProperties {
		request: FormControl<string | null | undefined>,
		response: FormControl<string | null | undefined>,
	}
	export function CreateFindingRequestsFormGroup() {
		return new FormGroup<FindingRequestsFormProperties>({
			request: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingSeverity { _10 = '10', _20 = '20', _30 = '30' }

	export enum FindingState { notfixed = 'notfixed', invalid = 'invalid', accepted = 'accepted', fixed = 'fixed' }

	export interface TargetSimple {

		/** Custom description for the resource */
		desc?: string | null;

		/** Object id. */
		id?: string | null;

		/** Custom name for the resource */
		name?: string | null;

		/** List of frameworks detected on this resource */
		stack?: Array<string>;

		/** Target's site URL */
		url?: string | null;
	}
	export interface TargetSimpleFormProperties {

		/** Custom description for the resource */
		desc: FormControl<string | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Custom name for the resource */
		name: FormControl<string | null | undefined>,

		/** Target's site URL */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTargetSimpleFormGroup() {
		return new FormGroup<TargetSimpleFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FindingBulkIds {

		/**
		 * Array of finding ids
		 * Required
		 */
		ids: Array<string>;
	}
	export interface FindingBulkIdsFormProperties {
	}
	export function CreateFindingBulkIdsFormGroup() {
		return new FormGroup<FindingBulkIdsFormProperties>({
		});

	}

	export interface FindingBulkRetest extends FindingBulkIds {

		/**
		 * * lightning - fast simple scan
		 * * normal - default profile
		 * * full - does everything the default profile does and adds boolean based
		 * SQL injection tests
		 * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
		 * and tries fewer payloads for SQL injection tests
		 */
		scan_profile?: FindingBulkRetestScan_profile | null;
	}
	export interface FindingBulkRetestFormProperties extends FindingBulkIdsFormProperties {

		/**
		 * * lightning - fast simple scan
		 * * normal - default profile
		 * * full - does everything the default profile does and adds boolean based
		 * SQL injection tests
		 * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
		 * and tries fewer payloads for SQL injection tests
		 */
		scan_profile: FormControl<FindingBulkRetestScan_profile | null | undefined>,
	}
	export function CreateFindingBulkRetestFormGroup() {
		return new FormGroup<FindingBulkRetestFormProperties>({
			scan_profile: new FormControl<FindingBulkRetestScan_profile | null | undefined>(undefined),
		});

	}

	export enum FindingBulkRetestScan_profile { safe = 'safe', normal = 'normal', full = 'full', lightning = 'lightning' }

	export interface FindingBulkUpdate extends FindingBulkIds {

		/** Assigned user */
		assignee?: Assignee;

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/** User comment left on the finding. */
		comment?: string | null;

		/** CVSS score */
		cvss_score?: number | null;

		/** CVSS vector */
		cvss_vector?: string | null;
		definition?: Definition;

		/** Evidence for the finding. */
		evidence?: string | null;

		/** Extra data for the finding. */
		extra?: string | null;

		/** Fix sugestion for the vulnerability and framework */
		fix?: string | null;

		/** Object id. */
		id?: string | null;

		/**
		 * An insertion point is the place in the HTTP request where the
		 * malicious payload is injected to exploit the vulnerability.
		 * * cookie - Payload injected into the value of an HTTP cookie
		 * * header - Payload injected into the header of an HTTP request
		 * * parameter - Payload injected into the value of a query string
		 * parameter
		 * * arbitrary_url_param - Payload injected into the value of an
		 * arbitrarily added query string parameter
		 * * url_filename - Payload injected into the URL filename part
		 * * url_folder - Payload injected into the URL folder part
		 * * multipart_parameter - Payload is inserted into the value of a
		 * parameter attribute within a multi-part message body (such as
		 * the name of an uploaded file).
		 * * <empty> - No payload to inject.
		 */
		insertion_point?: FindingInsertion_point | null;

		/** User labels for the finding. */
		labels?: Array<string>;

		/** Date time of the last time the vulnerability was found. */
		last_found?: Date | null;

		/** HTTP method */
		method?: FindingMethod | null;

		/** Vulnerable paramenter. */
		parameter?: string | null;

		/** Request parameters */
		params?: string | null;

		/** Finding path. */
		path?: string | null;

		/** Reporting user */
		reporter?: Reporter;

		/** Request response pairs that produced the finding */
		FindingBulkUpdateRequests?: Array<FindingBulkUpdateRequests>;

		/** Scan ids where this finding was present. */
		scans?: Array<string>;

		/**
		 * Severity, how serious the issue is considered:
		 * * 10 - low
		 * * 20 - medium
		 * * 30 - high
		 */
		severity?: FindingSeverity | null;

		/**
		 * Finding state:
		 * * notfixed - Issue can still be exploited
		 * * invalid - Issue determined to be a false positive
		 * * accepted - Issue will not be solved and the risk was accepted
		 * * fixed - No problem here anymore
		 */
		state?: FindingState | null;
		target?: TargetSimple;

		/** Full finding URL */
		url?: string | null;

		/** Value for parameter. */
		value?: string | null;
	}
	export interface FindingBulkUpdateFormProperties extends FindingBulkIdsFormProperties {

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** User comment left on the finding. */
		comment: FormControl<string | null | undefined>,

		/** CVSS score */
		cvss_score: FormControl<number | null | undefined>,

		/** CVSS vector */
		cvss_vector: FormControl<string | null | undefined>,

		/** Evidence for the finding. */
		evidence: FormControl<string | null | undefined>,

		/** Extra data for the finding. */
		extra: FormControl<string | null | undefined>,

		/** Fix sugestion for the vulnerability and framework */
		fix: FormControl<string | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/**
		 * An insertion point is the place in the HTTP request where the
		 * malicious payload is injected to exploit the vulnerability.
		 * * cookie - Payload injected into the value of an HTTP cookie
		 * * header - Payload injected into the header of an HTTP request
		 * * parameter - Payload injected into the value of a query string
		 * parameter
		 * * arbitrary_url_param - Payload injected into the value of an
		 * arbitrarily added query string parameter
		 * * url_filename - Payload injected into the URL filename part
		 * * url_folder - Payload injected into the URL folder part
		 * * multipart_parameter - Payload is inserted into the value of a
		 * parameter attribute within a multi-part message body (such as
		 * the name of an uploaded file).
		 * * <empty> - No payload to inject.
		 */
		insertion_point: FormControl<FindingInsertion_point | null | undefined>,

		/** Date time of the last time the vulnerability was found. */
		last_found: FormControl<Date | null | undefined>,

		/** HTTP method */
		method: FormControl<FindingMethod | null | undefined>,

		/** Vulnerable paramenter. */
		parameter: FormControl<string | null | undefined>,

		/** Request parameters */
		params: FormControl<string | null | undefined>,

		/** Finding path. */
		path: FormControl<string | null | undefined>,

		/**
		 * Severity, how serious the issue is considered:
		 * * 10 - low
		 * * 20 - medium
		 * * 30 - high
		 */
		severity: FormControl<FindingSeverity | null | undefined>,

		/**
		 * Finding state:
		 * * notfixed - Issue can still be exploited
		 * * invalid - Issue determined to be a false positive
		 * * accepted - Issue will not be solved and the risk was accepted
		 * * fixed - No problem here anymore
		 */
		state: FormControl<FindingState | null | undefined>,

		/** Full finding URL */
		url: FormControl<string | null | undefined>,

		/** Value for parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFindingBulkUpdateFormGroup() {
		return new FormGroup<FindingBulkUpdateFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			cvss_score: new FormControl<number | null | undefined>(undefined),
			cvss_vector: new FormControl<string | null | undefined>(undefined),
			evidence: new FormControl<string | null | undefined>(undefined),
			extra: new FormControl<string | null | undefined>(undefined),
			fix: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertion_point: new FormControl<FindingInsertion_point | null | undefined>(undefined),
			last_found: new FormControl<Date | null | undefined>(undefined),
			method: new FormControl<FindingMethod | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingSeverity | null | undefined>(undefined),
			state: new FormControl<FindingState | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FindingBulkUpdateRequests {
		request?: string | null;
		response?: string | null;
	}
	export interface FindingBulkUpdateRequestsFormProperties {
		request: FormControl<string | null | undefined>,
		response: FormControl<string | null | undefined>,
	}
	export function CreateFindingBulkUpdateRequestsFormGroup() {
		return new FormGroup<FindingBulkUpdateRequestsFormProperties>({
			request: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FindingUpdate {

		/** Assigned user */
		assignee?: Assignee;

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/** User comment left on the finding. */
		comment?: string | null;

		/** CVSS score */
		cvss_score?: number | null;

		/** CVSS vector */
		cvss_vector?: string | null;
		definition?: Definition;

		/** Evidence for the finding. */
		evidence?: string | null;

		/** Extra data for the finding. */
		extra?: string | null;

		/** Fix sugestion for the vulnerability and framework */
		fix?: string | null;

		/** Object id. */
		id?: string | null;

		/**
		 * An insertion point is the place in the HTTP request where the
		 * malicious payload is injected to exploit the vulnerability.
		 * * cookie - Payload injected into the value of an HTTP cookie
		 * * header - Payload injected into the header of an HTTP request
		 * * parameter - Payload injected into the value of a query string
		 * parameter
		 * * arbitrary_url_param - Payload injected into the value of an
		 * arbitrarily added query string parameter
		 * * url_filename - Payload injected into the URL filename part
		 * * url_folder - Payload injected into the URL folder part
		 * * multipart_parameter - Payload is inserted into the value of a
		 * parameter attribute within a multi-part message body (such as
		 * the name of an uploaded file).
		 * * <empty> - No payload to inject.
		 */
		insertion_point?: FindingInsertion_point | null;

		/** User labels for the finding. */
		labels?: Array<string>;

		/** Date time of the last time the vulnerability was found. */
		last_found?: Date | null;

		/** HTTP method */
		method?: FindingMethod | null;

		/** Vulnerable paramenter. */
		parameter?: string | null;

		/** Request parameters */
		params?: string | null;

		/** Finding path. */
		path?: string | null;

		/** Reporting user */
		reporter?: Reporter;

		/** Request response pairs that produced the finding */
		FindingUpdateRequests?: Array<FindingUpdateRequests>;

		/** Scan ids where this finding was present. */
		scans?: Array<string>;

		/**
		 * Severity, how serious the issue is considered:
		 * * 10 - low
		 * * 20 - medium
		 * * 30 - high
		 */
		severity?: FindingSeverity | null;

		/**
		 * Finding state:
		 * * notfixed - Issue can still be exploited
		 * * invalid - Issue determined to be a false positive
		 * * accepted - Issue will not be solved and the risk was accepted
		 * * fixed - No problem here anymore
		 */
		state?: FindingState | null;
		target?: TargetSimple;

		/** Full finding URL */
		url?: string | null;

		/** Value for parameter. */
		value?: string | null;
	}
	export interface FindingUpdateFormProperties {

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** User comment left on the finding. */
		comment: FormControl<string | null | undefined>,

		/** CVSS score */
		cvss_score: FormControl<number | null | undefined>,

		/** CVSS vector */
		cvss_vector: FormControl<string | null | undefined>,

		/** Evidence for the finding. */
		evidence: FormControl<string | null | undefined>,

		/** Extra data for the finding. */
		extra: FormControl<string | null | undefined>,

		/** Fix sugestion for the vulnerability and framework */
		fix: FormControl<string | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/**
		 * An insertion point is the place in the HTTP request where the
		 * malicious payload is injected to exploit the vulnerability.
		 * * cookie - Payload injected into the value of an HTTP cookie
		 * * header - Payload injected into the header of an HTTP request
		 * * parameter - Payload injected into the value of a query string
		 * parameter
		 * * arbitrary_url_param - Payload injected into the value of an
		 * arbitrarily added query string parameter
		 * * url_filename - Payload injected into the URL filename part
		 * * url_folder - Payload injected into the URL folder part
		 * * multipart_parameter - Payload is inserted into the value of a
		 * parameter attribute within a multi-part message body (such as
		 * the name of an uploaded file).
		 * * <empty> - No payload to inject.
		 */
		insertion_point: FormControl<FindingInsertion_point | null | undefined>,

		/** Date time of the last time the vulnerability was found. */
		last_found: FormControl<Date | null | undefined>,

		/** HTTP method */
		method: FormControl<FindingMethod | null | undefined>,

		/** Vulnerable paramenter. */
		parameter: FormControl<string | null | undefined>,

		/** Request parameters */
		params: FormControl<string | null | undefined>,

		/** Finding path. */
		path: FormControl<string | null | undefined>,

		/**
		 * Severity, how serious the issue is considered:
		 * * 10 - low
		 * * 20 - medium
		 * * 30 - high
		 */
		severity: FormControl<FindingSeverity | null | undefined>,

		/**
		 * Finding state:
		 * * notfixed - Issue can still be exploited
		 * * invalid - Issue determined to be a false positive
		 * * accepted - Issue will not be solved and the risk was accepted
		 * * fixed - No problem here anymore
		 */
		state: FormControl<FindingState | null | undefined>,

		/** Full finding URL */
		url: FormControl<string | null | undefined>,

		/** Value for parameter. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFindingUpdateFormGroup() {
		return new FormGroup<FindingUpdateFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			comment: new FormControl<string | null | undefined>(undefined),
			cvss_score: new FormControl<number | null | undefined>(undefined),
			cvss_vector: new FormControl<string | null | undefined>(undefined),
			evidence: new FormControl<string | null | undefined>(undefined),
			extra: new FormControl<string | null | undefined>(undefined),
			fix: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			insertion_point: new FormControl<FindingInsertion_point | null | undefined>(undefined),
			last_found: new FormControl<Date | null | undefined>(undefined),
			method: new FormControl<FindingMethod | null | undefined>(undefined),
			parameter: new FormControl<string | null | undefined>(undefined),
			params: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingSeverity | null | undefined>(undefined),
			state: new FormControl<FindingState | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FindingUpdateRequests {
		request?: string | null;
		response?: string | null;
	}
	export interface FindingUpdateRequestsFormProperties {
		request: FormControl<string | null | undefined>,
		response: FormControl<string | null | undefined>,
	}
	export function CreateFindingUpdateRequestsFormGroup() {
		return new FormGroup<FindingUpdateRequestsFormProperties>({
			request: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FormLoginElement {

		/** Field name/id */
		name?: string | null;

		/** Field input */
		value?: string | null;
	}
	export interface FormLoginElementFormProperties {

		/** Field name/id */
		name: FormControl<string | null | undefined>,

		/** Field input */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFormLoginElementFormGroup() {
		return new FormGroup<FormLoginElementFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Framework {

		/** Framework description */
		desc?: string | null;

		/** Object id. */
		id?: string | null;

		/** Object id. */
		name?: string | null;
	}
	export interface FrameworkFormProperties {

		/** Framework description */
		desc: FormControl<string | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Object id. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFrameworkFormGroup() {
		return new FormGroup<FrameworkFormProperties>({
			desc: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HeadersElement {

		/** Header name. */
		name?: string | null;

		/** Header value. */
		value?: string | null;
	}
	export interface HeadersElementFormProperties {

		/** Header name. */
		name: FormControl<string | null | undefined>,

		/** Header value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHeadersElementFormGroup() {
		return new FormGroup<HeadersElementFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationFields {
		heroku?: boolean | null;
		jira_cloud?: boolean | null;
		jira_server?: boolean | null;
		slack?: boolean | null;
	}
	export interface IntegrationFieldsFormProperties {
		heroku: FormControl<boolean | null | undefined>,
		jira_cloud: FormControl<boolean | null | undefined>,
		jira_server: FormControl<boolean | null | undefined>,
		slack: FormControl<boolean | null | undefined>,
	}
	export function CreateIntegrationFieldsFormGroup() {
		return new FormGroup<IntegrationFieldsFormProperties>({
			heroku: new FormControl<boolean | null | undefined>(undefined),
			jira_cloud: new FormControl<boolean | null | undefined>(undefined),
			jira_server: new FormControl<boolean | null | undefined>(undefined),
			slack: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Available and installed integrations */
	export interface Integrations {
		available?: IntegrationFields;
		installed?: IntegrationFields;
	}

	/** Available and installed integrations */
	export interface IntegrationsFormProperties {
	}
	export function CreateIntegrationsFormGroup() {
		return new FormGroup<IntegrationsFormProperties>({
		});

	}

	export interface Invoice {

		/** Amount remaining to pay in cents */
		amount_due?: number | null;

		/** Amount already paid in cents */
		amount_paid?: number | null;

		/** 3 letter currency code */
		currency_code?: string | null;
		InvoiceDiscounts?: Array<InvoiceDiscounts>;
		InvoiceLine_items?: Array<InvoiceLine_items>;

		/** Plan name */
		plan?: string | null;

		/** Current plan id */
		plan_id?: string | null;

		/** Price before taxes in cents */
		sub_total?: number | null;
		InvoiceTaxes?: Array<InvoiceTaxes>;

		/** Price after taxes in cents */
		total?: number | null;
	}
	export interface InvoiceFormProperties {

		/** Amount remaining to pay in cents */
		amount_due: FormControl<number | null | undefined>,

		/** Amount already paid in cents */
		amount_paid: FormControl<number | null | undefined>,

		/** 3 letter currency code */
		currency_code: FormControl<string | null | undefined>,

		/** Plan name */
		plan: FormControl<string | null | undefined>,

		/** Current plan id */
		plan_id: FormControl<string | null | undefined>,

		/** Price before taxes in cents */
		sub_total: FormControl<number | null | undefined>,

		/** Price after taxes in cents */
		total: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceFormGroup() {
		return new FormGroup<InvoiceFormProperties>({
			amount_due: new FormControl<number | null | undefined>(undefined),
			amount_paid: new FormControl<number | null | undefined>(undefined),
			currency_code: new FormControl<string | null | undefined>(undefined),
			plan: new FormControl<string | null | undefined>(undefined),
			plan_id: new FormControl<string | null | undefined>(undefined),
			sub_total: new FormControl<number | null | undefined>(undefined),
			total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceDiscounts {

		/** Discounted amount in cents */
		amount?: number | null;

		/** Discount description */
		description?: string | null;
	}
	export interface InvoiceDiscountsFormProperties {

		/** Discounted amount in cents */
		amount: FormControl<number | null | undefined>,

		/** Discount description */
		description: FormControl<string | null | undefined>,
	}
	export function CreateInvoiceDiscountsFormGroup() {
		return new FormGroup<InvoiceDiscountsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface InvoiceLine_items {

		/** Total amount in cents */
		amount?: number | null;

		/** Charge description */
		description?: string | null;

		/** Discount amount in cents */
		discount_amount?: number | null;

		/** Units charged */
		quantity?: number | null;

		/** Tax amount in cents */
		tax_amount?: number | null;

		/** Price per unit in cents */
		unit_amount?: number | null;
	}
	export interface InvoiceLine_itemsFormProperties {

		/** Total amount in cents */
		amount: FormControl<number | null | undefined>,

		/** Charge description */
		description: FormControl<string | null | undefined>,

		/** Discount amount in cents */
		discount_amount: FormControl<number | null | undefined>,

		/** Units charged */
		quantity: FormControl<number | null | undefined>,

		/** Tax amount in cents */
		tax_amount: FormControl<number | null | undefined>,

		/** Price per unit in cents */
		unit_amount: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceLine_itemsFormGroup() {
		return new FormGroup<InvoiceLine_itemsFormProperties>({
			amount: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			discount_amount: new FormControl<number | null | undefined>(undefined),
			quantity: new FormControl<number | null | undefined>(undefined),
			tax_amount: new FormControl<number | null | undefined>(undefined),
			unit_amount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface InvoiceTaxes {

		/** Amount of tax in cents */
		tax_amount?: number | null;

		/** Name of applied tax */
		tax_name?: string | null;

		/** Tax rate */
		tax_rate?: number | null;
	}
	export interface InvoiceTaxesFormProperties {

		/** Amount of tax in cents */
		tax_amount: FormControl<number | null | undefined>,

		/** Name of applied tax */
		tax_name: FormControl<string | null | undefined>,

		/** Tax rate */
		tax_rate: FormControl<number | null | undefined>,
	}
	export function CreateInvoiceTaxesFormGroup() {
		return new FormGroup<InvoiceTaxesFormProperties>({
			tax_amount: new FormControl<number | null | undefined>(undefined),
			tax_name: new FormControl<string | null | undefined>(undefined),
			tax_rate: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface JiraFinding {

		/** Jira issue id connected to this finding */
		issue_id?: string | null;

		/** Selective sync active for this finding. */
		selective_sync?: boolean | null;
	}
	export interface JiraFindingFormProperties {

		/** Jira issue id connected to this finding */
		issue_id: FormControl<string | null | undefined>,

		/** Selective sync active for this finding. */
		selective_sync: FormControl<boolean | null | undefined>,
	}
	export function CreateJiraFindingFormGroup() {
		return new FormGroup<JiraFindingFormProperties>({
			issue_id: new FormControl<string | null | undefined>(undefined),
			selective_sync: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Jira issue priority. */
	export interface JiraIssuePriority {

		/** Jira issue priority id */
		id?: string | null;

		/** Jira issue priority name */
		name?: string | null;
	}

	/** Jira issue priority. */
	export interface JiraIssuePriorityFormProperties {

		/** Jira issue priority id */
		id: FormControl<string | null | undefined>,

		/** Jira issue priority name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateJiraIssuePriorityFormGroup() {
		return new FormGroup<JiraIssuePriorityFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Jira issue status. */
	export interface JiraIssueStatus {

		/** Jira issue status id */
		id?: string | null;

		/** Jira issue status name */
		name?: string | null;
	}

	/** Jira issue status. */
	export interface JiraIssueStatusFormProperties {

		/** Jira issue status id */
		id: FormControl<string | null | undefined>,

		/** Jira issue status name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateJiraIssueStatusFormGroup() {
		return new FormGroup<JiraIssueStatusFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Jira issue type. */
	export interface JiraIssueType {

		/** Jira issue type id */
		id?: string | null;

		/** Jira issue type name */
		name?: string | null;
	}

	/** Jira issue type. */
	export interface JiraIssueTypeFormProperties {

		/** Jira issue type id */
		id: FormControl<string | null | undefined>,

		/** Jira issue type name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateJiraIssueTypeFormGroup() {
		return new FormGroup<JiraIssueTypeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Jira project. */
	export interface JiraProject {

		/** Jira project id */
		id?: string | null;

		/** Jira project name */
		name?: string | null;
	}

	/** Jira project. */
	export interface JiraProjectFormProperties {

		/** Jira project id */
		id: FormControl<string | null | undefined>,

		/** Jira project name */
		name: FormControl<string | null | undefined>,
	}
	export function CreateJiraProjectFormGroup() {
		return new FormGroup<JiraProjectFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JiraScope {

		/** Is this target allowed Jira integration. */
		allow_jira?: boolean | null;

		/** Automatically synchronise all findings to Jira issues. */
		auto_sync?: boolean | null;

		/** Id of the issue type to be created in Jira. */
		issue_type_id?: string | null;
		priority_mapping?: Jira_priority_mapping;

		/** Id of the Jira project where issues for this target will be created. */
		project_id?: string | null;
		status_mapping?: Jira_status_mapping;
	}
	export interface JiraScopeFormProperties {

		/** Is this target allowed Jira integration. */
		allow_jira: FormControl<boolean | null | undefined>,

		/** Automatically synchronise all findings to Jira issues. */
		auto_sync: FormControl<boolean | null | undefined>,

		/** Id of the issue type to be created in Jira. */
		issue_type_id: FormControl<string | null | undefined>,

		/** Id of the Jira project where issues for this target will be created. */
		project_id: FormControl<string | null | undefined>,
	}
	export function CreateJiraScopeFormGroup() {
		return new FormGroup<JiraScopeFormProperties>({
			allow_jira: new FormControl<boolean | null | undefined>(undefined),
			auto_sync: new FormControl<boolean | null | undefined>(undefined),
			issue_type_id: new FormControl<string | null | undefined>(undefined),
			project_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Jira_priority_mapping {

		/** Id of the Jira priority that low severity findings should be mapped to. */
		'10'?: string | null;

		/** Id of the Jira priority that medium severity findings should be mapped to. */
		'20'?: string | null;

		/** Id of the Jira status that high severity findings should be mapped to. */
		'30'?: string | null;
	}
	export interface Jira_priority_mappingFormProperties {

		/** Id of the Jira priority that low severity findings should be mapped to. */
		'10': FormControl<string | null | undefined>,

		/** Id of the Jira priority that medium severity findings should be mapped to. */
		'20': FormControl<string | null | undefined>,

		/** Id of the Jira status that high severity findings should be mapped to. */
		'30': FormControl<string | null | undefined>,
	}
	export function CreateJira_priority_mappingFormGroup() {
		return new FormGroup<Jira_priority_mappingFormProperties>({
			'10': new FormControl<string | null | undefined>(undefined),
			'20': new FormControl<string | null | undefined>(undefined),
			'30': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Jira_status_mapping {

		/** Id of the Jira status that `accepted` findings should be mapped to. */
		accepted?: string | null;

		/** Id of the Jira status that `fixed` findings should be mapped to. */
		fixed?: string | null;

		/** Id of the Jira status that `invalid` findings should be mapped to. */
		invalid?: string | null;

		/** Id of the Jira status that `notfixed` findings should be mapped to. */
		notfixed?: string | null;
	}
	export interface Jira_status_mappingFormProperties {

		/** Id of the Jira status that `accepted` findings should be mapped to. */
		accepted: FormControl<string | null | undefined>,

		/** Id of the Jira status that `fixed` findings should be mapped to. */
		fixed: FormControl<string | null | undefined>,

		/** Id of the Jira status that `invalid` findings should be mapped to. */
		invalid: FormControl<string | null | undefined>,

		/** Id of the Jira status that `notfixed` findings should be mapped to. */
		notfixed: FormControl<string | null | undefined>,
	}
	export function CreateJira_status_mappingFormGroup() {
		return new FormGroup<Jira_status_mappingFormProperties>({
			accepted: new FormControl<string | null | undefined>(undefined),
			fixed: new FormControl<string | null | undefined>(undefined),
			invalid: new FormControl<string | null | undefined>(undefined),
			notfixed: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Key {

		/** Object id. */
		id?: string | null;

		/** Authentication token */
		key?: string | null;

		/** Object id. */
		name?: string | null;
	}
	export interface KeyFormProperties {

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Authentication token */
		key: FormControl<string | null | undefined>,

		/** Object id. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Label {

		/** Object id. */
		id?: string | null;

		/** Custom name for the resource */
		name?: string | null;
	}
	export interface LabelFormProperties {

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Custom name for the resource */
		name: FormControl<string | null | undefined>,
	}
	export function CreateLabelFormGroup() {
		return new FormGroup<LabelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Login {

		/** Required */
		password: string;

		/** Required */
		username: string;
	}
	export interface LoginFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		username: FormControl<string | null | undefined>,
	}
	export function CreateLoginFormGroup() {
		return new FormGroup<LoginFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			username: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RequestsElement {
		request?: string | null;
		response?: string | null;
	}
	export interface RequestsElementFormProperties {
		request: FormControl<string | null | undefined>,
		response: FormControl<string | null | undefined>,
	}
	export function CreateRequestsElementFormGroup() {
		return new FormGroup<RequestsElementFormProperties>({
			request: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Scan {

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/** Date time of scan completion */
		completed?: Date | null;

		/** Information on the status of the crawling step of the scanning process */
		crawler?: ScanCrawler;

		/** Date time of creation */
		created?: Date | null;

		/** User that created the object */
		created_by?: CreatedBy;

		/** Information on the status of the crawling step of the scanning process */
		fingerprinter?: ScanFingerprinter;

		/** Number of high severity findings in this scan */
		highs?: number | null;

		/** Object id. */
		id?: string | null;

		/** Number of low severity findings in this scan */
		lows?: number | null;

		/** Number of medium severity findings in this scan */
		mediums?: number | null;

		/**
		 * * lightning - fast simple scan
		 * * normal - default profile
		 * * full - does everything the default profile does and adds boolean based
		 * SQL injection tests
		 * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
		 * and tries fewer payloads for SQL injection tests
		 */
		scan_profile?: FindingBulkRetestScan_profile | null;

		/** Information on the status of the search for vulnerabilities of the scanning process */
		scanner?: ScanScanner;

		/** Date time of scan start */
		started?: Date | null;

		/**
		 * Current scan status:
		 * * queued - Scan queued to start
		 * * started - Scan currently running
		 * * under_review - Scan is complete but we need to verify some findings
		 * * completed - Scan complete
		 * * completed_with_errors - Scan complete with error(s) in non essential modules
		 * * failed - Something went seriously wrong during the scan
		 * * canceled - Scan was canceled
		 * * canceling - Stopping scan
		 */
		status?: ScanStatus | null;
		target?: TargetSimple;
	}
	export interface ScanFormProperties {

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** Date time of scan completion */
		completed: FormControl<Date | null | undefined>,

		/** Date time of creation */
		created: FormControl<Date | null | undefined>,

		/** Number of high severity findings in this scan */
		highs: FormControl<number | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Number of low severity findings in this scan */
		lows: FormControl<number | null | undefined>,

		/** Number of medium severity findings in this scan */
		mediums: FormControl<number | null | undefined>,

		/**
		 * * lightning - fast simple scan
		 * * normal - default profile
		 * * full - does everything the default profile does and adds boolean based
		 * SQL injection tests
		 * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
		 * and tries fewer payloads for SQL injection tests
		 */
		scan_profile: FormControl<FindingBulkRetestScan_profile | null | undefined>,

		/** Date time of scan start */
		started: FormControl<Date | null | undefined>,

		/**
		 * Current scan status:
		 * * queued - Scan queued to start
		 * * started - Scan currently running
		 * * under_review - Scan is complete but we need to verify some findings
		 * * completed - Scan complete
		 * * completed_with_errors - Scan complete with error(s) in non essential modules
		 * * failed - Something went seriously wrong during the scan
		 * * canceled - Scan was canceled
		 * * canceling - Stopping scan
		 */
		status: FormControl<ScanStatus | null | undefined>,
	}
	export function CreateScanFormGroup() {
		return new FormGroup<ScanFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			completed: new FormControl<Date | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			highs: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lows: new FormControl<number | null | undefined>(undefined),
			mediums: new FormControl<number | null | undefined>(undefined),
			scan_profile: new FormControl<FindingBulkRetestScan_profile | null | undefined>(undefined),
			started: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<ScanStatus | null | undefined>(undefined),
		});

	}

	export interface ScanCrawler {

		/** List of possible errors from the crawler */
		error?: Array<string>;

		/** The current state of the crawler */
		state?: ScanCrawlerState | null;

		/** The number of crawled URLs and total number of URLs in the queue */
		status?: ScanCrawlerStatus;

		/** List of possible warnings from the crawler */
		warning?: Array<string>;
	}
	export interface ScanCrawlerFormProperties {

		/** The current state of the crawler */
		state: FormControl<ScanCrawlerState | null | undefined>,
	}
	export function CreateScanCrawlerFormGroup() {
		return new FormGroup<ScanCrawlerFormProperties>({
			state: new FormControl<ScanCrawlerState | null | undefined>(undefined),
		});

	}

	export enum ScanCrawlerState { started = 'started', ended = 'ended' }

	export interface ScanCrawlerStatus {

		/** Number of crawled URLs */
		'0'?: number | null;

		/** Total number of URLs in the queue */
		'1'?: number | null;
	}
	export interface ScanCrawlerStatusFormProperties {

		/** Number of crawled URLs */
		'0': FormControl<number | null | undefined>,

		/** Total number of URLs in the queue */
		'1': FormControl<number | null | undefined>,
	}
	export function CreateScanCrawlerStatusFormGroup() {
		return new FormGroup<ScanCrawlerStatusFormProperties>({
			'0': new FormControl<number | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ScanFingerprinter {

		/** The number of detected frameworks/software on the target */
		count?: number | null;

		/** List of possible errors from the fingerprinter */
		error?: Array<string>;

		/** The current state of the fingerprinter */
		state?: ScanCrawlerState | null;

		/** List of possible warnings from the fingerprinter */
		warning?: Array<string>;
	}
	export interface ScanFingerprinterFormProperties {

		/** The number of detected frameworks/software on the target */
		count: FormControl<number | null | undefined>,

		/** The current state of the fingerprinter */
		state: FormControl<ScanCrawlerState | null | undefined>,
	}
	export function CreateScanFingerprinterFormGroup() {
		return new FormGroup<ScanFingerprinterFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<ScanCrawlerState | null | undefined>(undefined),
		});

	}

	export interface ScanScanner {

		/** List of possible errors from the scanner */
		error?: Array<string>;

		/** The current state of the scanner */
		state?: ScanCrawlerState | null;

		/** The number of scanner tasks completed and total number of tasks in the queue */
		status?: ScanScannerStatus;

		/** List of possible warnings from the scanner */
		warning?: Array<string>;
	}
	export interface ScanScannerFormProperties {

		/** The current state of the scanner */
		state: FormControl<ScanCrawlerState | null | undefined>,
	}
	export function CreateScanScannerFormGroup() {
		return new FormGroup<ScanScannerFormProperties>({
			state: new FormControl<ScanCrawlerState | null | undefined>(undefined),
		});

	}

	export interface ScanScannerStatus {

		/** Number of completed tasks */
		'0'?: number | null;

		/** Total number of tasks in the queue */
		'1'?: number | null;
	}
	export interface ScanScannerStatusFormProperties {

		/** Number of completed tasks */
		'0': FormControl<number | null | undefined>,

		/** Total number of tasks in the queue */
		'1': FormControl<number | null | undefined>,
	}
	export function CreateScanScannerStatusFormGroup() {
		return new FormGroup<ScanScannerStatusFormProperties>({
			'0': new FormControl<number | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ScanStatus { queued = 'queued', started = 'started', under_review = 'under_review', completed = 'completed', completed_with_errors = 'completed_with_errors', failed = 'failed', canceled = 'canceled', canceling = 'canceling' }

	export interface Scheduled {

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/** Date time of next scan */
		date_time?: Date | null;

		/** Scheduled object id */
		id?: string | null;

		/**
		 * Scan recurrence:
		 * * d - daily
		 * * w - weekly
		 * * m - monthly
		 * * q - quarterly
		 * * '' - no recurrence
		 */
		recurrence?: ScheduledRecurrence | null;
		target?: TargetSimple;
	}
	export interface ScheduledFormProperties {

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** Date time of next scan */
		date_time: FormControl<Date | null | undefined>,

		/** Scheduled object id */
		id: FormControl<string | null | undefined>,

		/**
		 * Scan recurrence:
		 * * d - daily
		 * * w - weekly
		 * * m - monthly
		 * * q - quarterly
		 * * '' - no recurrence
		 */
		recurrence: FormControl<ScheduledRecurrence | null | undefined>,
	}
	export function CreateScheduledFormGroup() {
		return new FormGroup<ScheduledFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			date_time: new FormControl<Date | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			recurrence: new FormControl<ScheduledRecurrence | null | undefined>(undefined),
		});

	}

	export enum ScheduledRecurrence { d = 'd', w = 'w', m = 'm', q = 'q', '' = '' }


	/** Main resource associated with a target */
	export interface Site {

		/** Basic authentication credentials */
		basic_auth?: BasicAuth;

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/** Custom cookies name/value pairs */
		cookies?: Array<CookiesElement>;

		/** Custom description for the resource */
		desc?: string | null;

		/** Form login field name, field input pairs */
		form_login?: Array<FormLoginElement>;

		/** Pattern to check successful authentication (not used) */
		form_login_check_pattern?: string | null;

		/** URL for the form login */
		form_login_url?: string | null;

		/** Use basic authentication in scan */
		has_basic_auth?: boolean | null;

		/** Does the resource use form login */
		has_form_login?: boolean | null;

		/** Custom headers name value pairs */
		headers?: Array<HeadersElement>;

		/** Site host */
		host?: string | null;

		/** Object id. */
		id?: string | null;

		/** Custom name for the resource */
		name?: string | null;

		/** List of frameworks detected on this resource */
		stack?: Array<string>;

		/**
		 * Site URL, it should include the path if the site is not located at the root. This URL can only be set once.
		 */
		url?: string | null;

		/** Verification date time */
		verification_date?: Date | null;

		/** Reason for last verification failure. */
		verification_last_error?: string | null;

		/**
		 * Type of verification:
		 * * dns - we look or a TXT record on the host you registered containing
		 * `Probely=<verification_token>`
		 * * file - on the root of the path you registered we look for a file
		 * named `<verification token>` containing `Probely`.
		 */
		verification_method?: AssetVerification_method | null;

		/** Token used to verify */
		verification_token?: string | null;

		/** Has resource ownership been verified */
		verified?: boolean | null;
		whitelist?: Array<string>;
	}

	/** Main resource associated with a target */
	export interface SiteFormProperties {

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** Custom description for the resource */
		desc: FormControl<string | null | undefined>,

		/** Pattern to check successful authentication (not used) */
		form_login_check_pattern: FormControl<string | null | undefined>,

		/** URL for the form login */
		form_login_url: FormControl<string | null | undefined>,

		/** Use basic authentication in scan */
		has_basic_auth: FormControl<boolean | null | undefined>,

		/** Does the resource use form login */
		has_form_login: FormControl<boolean | null | undefined>,

		/** Site host */
		host: FormControl<string | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Custom name for the resource */
		name: FormControl<string | null | undefined>,

		/**
		 * Site URL, it should include the path if the site is not located at the root. This URL can only be set once.
		 */
		url: FormControl<string | null | undefined>,

		/** Verification date time */
		verification_date: FormControl<Date | null | undefined>,

		/** Reason for last verification failure. */
		verification_last_error: FormControl<string | null | undefined>,

		/**
		 * Type of verification:
		 * * dns - we look or a TXT record on the host you registered containing
		 * `Probely=<verification_token>`
		 * * file - on the root of the path you registered we look for a file
		 * named `<verification token>` containing `Probely`.
		 */
		verification_method: FormControl<AssetVerification_method | null | undefined>,

		/** Token used to verify */
		verification_token: FormControl<string | null | undefined>,

		/** Has resource ownership been verified */
		verified: FormControl<boolean | null | undefined>,
	}
	export function CreateSiteFormGroup() {
		return new FormGroup<SiteFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
			form_login_check_pattern: new FormControl<string | null | undefined>(undefined),
			form_login_url: new FormControl<string | null | undefined>(undefined),
			has_basic_auth: new FormControl<boolean | null | undefined>(undefined),
			has_form_login: new FormControl<boolean | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			verification_date: new FormControl<Date | null | undefined>(undefined),
			verification_last_error: new FormControl<string | null | undefined>(undefined),
			verification_method: new FormControl<AssetVerification_method | null | undefined>(undefined),
			verification_token: new FormControl<string | null | undefined>(undefined),
			verified: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Options for slack notifications */
	export interface Slack {

		/** Notify of fixed findings. */
		notify_finding_fixed?: boolean | null;

		/** Notify of new high severity findings. */
		notify_high_findings?: boolean | null;

		/** Notify of new low severity findings. */
		notify_low_findings?: boolean | null;

		/** Notify of new medium severity findings. */
		notify_medium_findings?: boolean | null;

		/** Notify of completed scans. */
		notify_scan_completed?: boolean | null;

		/** Notify of started scans. */
		notify_scan_started?: boolean | null;

		/** Slack notification webhook url. */
		webhook_url?: string | null;
	}

	/** Options for slack notifications */
	export interface SlackFormProperties {

		/** Notify of fixed findings. */
		notify_finding_fixed: FormControl<boolean | null | undefined>,

		/** Notify of new high severity findings. */
		notify_high_findings: FormControl<boolean | null | undefined>,

		/** Notify of new low severity findings. */
		notify_low_findings: FormControl<boolean | null | undefined>,

		/** Notify of new medium severity findings. */
		notify_medium_findings: FormControl<boolean | null | undefined>,

		/** Notify of completed scans. */
		notify_scan_completed: FormControl<boolean | null | undefined>,

		/** Notify of started scans. */
		notify_scan_started: FormControl<boolean | null | undefined>,

		/** Slack notification webhook url. */
		webhook_url: FormControl<string | null | undefined>,
	}
	export function CreateSlackFormGroup() {
		return new FormGroup<SlackFormProperties>({
			notify_finding_fixed: new FormControl<boolean | null | undefined>(undefined),
			notify_high_findings: new FormControl<boolean | null | undefined>(undefined),
			notify_low_findings: new FormControl<boolean | null | undefined>(undefined),
			notify_medium_findings: new FormControl<boolean | null | undefined>(undefined),
			notify_scan_completed: new FormControl<boolean | null | undefined>(undefined),
			notify_scan_started: new FormControl<boolean | null | undefined>(undefined),
			webhook_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Subscription {

		/** Coupon ids */
		coupon_ids?: Array<string>;

		/** Current plan id */
		plan_id?: string | null;
		target_ids?: Array<string>;
	}
	export interface SubscriptionFormProperties {

		/** Current plan id */
		plan_id: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionFormGroup() {
		return new FormGroup<SubscriptionFormProperties>({
			plan_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Target {

		/** Valid scan profiles for the target. */
		TargetAllowed_scan_profiles?: Array<TargetAllowed_scan_profiles>;

		/** Secondary domains that should be scanned */
		assets?: Array<Asset>;

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/**
		 * Id of the connected target in a multi-environment targets.
		 */
		connected_target?: string | null;

		/**
		 * Certain operations (e.g. changing a target's `type`) may require going through billing. Until the change is reverted or the billing is settled.
		 */
		enabled?: boolean | null;

		/**
		 * Multi-environment targets can identify environments using this property.
		 */
		environment?: TargetEnvironment | null;

		/** Object id. */
		id?: string | null;

		/**
		 * User labels for the scope. (This feature is currently only available for certain accounts,
		 * please contact our support if you are interested in using it)
		 */
		labels?: Array<string>;

		/** Custom name for the resource */
		name?: string | null;

		/**
		 * * default - default report, no extra information added
		 * * owasp - adds table on OWASP Top 10 most critical web application risks
		 * * pci - adds table on PCI requirements
		 */
		report_type?: TargetReport_type | null;

		/**
		 * * lightning - fast simple scan
		 * * normal - default profile
		 * * full - does everything the default profile does and adds boolean based
		 * SQL injection tests
		 * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
		 * and tries fewer payloads for SQL injection tests
		 */
		scan_profile?: FindingBulkRetestScan_profile | null;

		/** Main resource associated with a target */
		site?: Site;

		/**
		 * The type of a target determines what the limitations imposed on a
		 * target.
		 * * free - Every account is allowed to have 5 free targets, these targets
		 * do not need to be verified but can only perform lightning
		 * scans.
		 * * single - Single environment targets need to be verified but are
		 * allowed to run any type of scan allowed by the plan.
		 * * multi - Multi environment targets are used when you want
		 * to scan the same application in different environments.
		 */
		type?: TargetType | null;
	}
	export interface TargetFormProperties {

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/**
		 * Id of the connected target in a multi-environment targets.
		 */
		connected_target: FormControl<string | null | undefined>,

		/**
		 * Certain operations (e.g. changing a target's `type`) may require going through billing. Until the change is reverted or the billing is settled.
		 */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Multi-environment targets can identify environments using this property.
		 */
		environment: FormControl<TargetEnvironment | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Custom name for the resource */
		name: FormControl<string | null | undefined>,

		/**
		 * * default - default report, no extra information added
		 * * owasp - adds table on OWASP Top 10 most critical web application risks
		 * * pci - adds table on PCI requirements
		 */
		report_type: FormControl<TargetReport_type | null | undefined>,

		/**
		 * * lightning - fast simple scan
		 * * normal - default profile
		 * * full - does everything the default profile does and adds boolean based
		 * SQL injection tests
		 * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
		 * and tries fewer payloads for SQL injection tests
		 */
		scan_profile: FormControl<FindingBulkRetestScan_profile | null | undefined>,

		/**
		 * The type of a target determines what the limitations imposed on a
		 * target.
		 * * free - Every account is allowed to have 5 free targets, these targets
		 * do not need to be verified but can only perform lightning
		 * scans.
		 * * single - Single environment targets need to be verified but are
		 * allowed to run any type of scan allowed by the plan.
		 * * multi - Multi environment targets are used when you want
		 * to scan the same application in different environments.
		 */
		type: FormControl<TargetType | null | undefined>,
	}
	export function CreateTargetFormGroup() {
		return new FormGroup<TargetFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			connected_target: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			environment: new FormControl<TargetEnvironment | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			report_type: new FormControl<TargetReport_type | null | undefined>(undefined),
			scan_profile: new FormControl<FindingBulkRetestScan_profile | null | undefined>(undefined),
			type: new FormControl<TargetType | null | undefined>(undefined),
		});

	}

	export interface TargetAllowed_scan_profiles {

		/**
		 * * lightning - fast simple scan
		 * * normal - default profile
		 * * full - does everything the default profile does and adds boolean based
		 * SQL injection tests
		 * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
		 * and tries fewer payloads for SQL injection tests
		 */
		id?: FindingBulkRetestScan_profile | null;

		/** Name of the scan profile. */
		name?: string | null;
	}
	export interface TargetAllowed_scan_profilesFormProperties {

		/**
		 * * lightning - fast simple scan
		 * * normal - default profile
		 * * full - does everything the default profile does and adds boolean based
		 * SQL injection tests
		 * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
		 * and tries fewer payloads for SQL injection tests
		 */
		id: FormControl<FindingBulkRetestScan_profile | null | undefined>,

		/** Name of the scan profile. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateTargetAllowed_scan_profilesFormGroup() {
		return new FormGroup<TargetAllowed_scan_profilesFormProperties>({
			id: new FormControl<FindingBulkRetestScan_profile | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TargetEnvironment { testing = 'testing', production = 'production' }

	export enum TargetReport_type { default = 'default', owasp = 'owasp', pci = 'pci' }

	export enum TargetType { free = 'free', single = 'single', multi = 'multi' }

	export interface User {

		/** Date time of the last change */
		changed?: Date | null;

		/** User that last modified the object */
		changed_by?: ChangedBy;

		/** User's email (changing this resets the user's password and revokes existing tokens) */
		email?: string | null;

		/** Object id. */
		id?: string | null;

		/** Deleted users are marked as not active */
		is_active?: boolean | null;

		/** Account admin */
		is_admin?: boolean | null;

		/** Billing contact for the account */
		is_billing_admin?: boolean | null;

		/** User's name */
		name?: string | null;
		title?: UserTitle | null;
	}
	export interface UserFormProperties {

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** User's email (changing this resets the user's password and revokes existing tokens) */
		email: FormControl<string | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Deleted users are marked as not active */
		is_active: FormControl<boolean | null | undefined>,

		/** Account admin */
		is_admin: FormControl<boolean | null | undefined>,

		/** Billing contact for the account */
		is_billing_admin: FormControl<boolean | null | undefined>,

		/** User's name */
		name: FormControl<string | null | undefined>,
		title: FormControl<UserTitle | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			is_active: new FormControl<boolean | null | undefined>(undefined),
			is_admin: new FormControl<boolean | null | undefined>(undefined),
			is_billing_admin: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<UserTitle | null | undefined>(undefined),
		});

	}

	export enum UserTitle { ceo = 'ceo', cto = 'cto', cso = 'cso', seceng = 'seceng', dev = 'dev', devop = 'devop', manager = 'manager', other = 'other' }

	export interface VulnerabilityDefinition {

		/** Date time of the last change */
		changed?: Date | null;

		/** Custom description for the resource */
		desc?: string | null;

		/** Object id. */
		id?: string | null;

		/** Custom name for the resource */
		name?: string | null;
	}
	export interface VulnerabilityDefinitionFormProperties {

		/** Date time of the last change */
		changed: FormControl<Date | null | undefined>,

		/** Custom description for the resource */
		desc: FormControl<string | null | undefined>,

		/** Object id. */
		id: FormControl<string | null | undefined>,

		/** Custom name for the resource */
		name: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityDefinitionFormGroup() {
		return new FormGroup<VulnerabilityDefinitionFormProperties>({
			changed: new FormControl<Date | null | undefined>(undefined),
			desc: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Collection for the next billing period is autommatic/manual */
	export enum AccountAutoCollection { on = 'on', off = 'off' }


	/** Unit of billing period */
	export enum BillingPeriodUnit { month = 'month', year = 'year' }


	/**
	 * Multi-environment targets can identify environments using this property.
	 */
	export enum Environment { testing = 'testing', production = 'production' }


	/**
	 * Type of object in the event content.
	 */
	export enum EventObjectType { user = 'user', target = 'target', scan = 'scan', finding = 'finding' }


	/**
	 * Event type:
	 * - `user_created` new user added to account
	 * - `user_deleted` user deleted from account
	 * - `target_created` new target added to account
	 * - `target_deleted` target deleted from account
	 * - `target_verified` target ownership verified
	 * - `target_verification_failed` target ownership verification failed
	 * - `scan_started` scan started on target
	 * - `scan_canceled` scan on target canceled
	 * - `scan_completed` scan finished with successfuly
	 * - `scan_failed` scan finished unsuccessfuly
	 * - `finding_detected` new finding detected (not found before)
	 * - `finding_fixed` finding was fixed
	 */
	export enum EventType { user_created = 'user_created', user_deleted = 'user_deleted', target_created = 'target_created', target_deleted = 'target_deleted', target_verified = 'target_verified', target_verification_failed = 'target_verification_failed', scan_started = 'scan_started', scan_canceled = 'scan_canceled', scan_completed = 'scan_completed', scan_failed = 'scan_failed', finding_detected = 'finding_detected', finding_fixed = 'finding_fixed' }


	/**
	 * An insertion point is the place in the HTTP request where the
	 * malicious payload is injected to exploit the vulnerability.
	 *   * cookie - Payload injected into the value of an HTTP cookie
	 *   * header - Payload injected into the header of an HTTP request
	 *   * parameter - Payload injected into the value of a query string
	 *   parameter
	 *   * arbitrary_url_param - Payload injected into the value of an
	 *   arbitrarily added query string parameter
	 *   * url_filename - Payload injected into the URL filename part
	 *   * url_folder - Payload injected into the URL folder part
	 *   * multipart_parameter - Payload is inserted into the value of a
	 *   parameter attribute within a multi-part message body (such as
	 *   the name of an uploaded file).
	 *   * <empty> - No payload to inject.
	 */
	export enum FindingInsertionPoint { cookie = 'cookie', header = 'header', parameter = 'parameter', arbitrary_url_param_name = 'arbitrary_url_param_name', url_path_folder = 'url_path_folder', '' = '' }


	/** HTTP method */
	export enum Method { GET = 'GET', OPTIONS = 'OPTIONS', POST = 'POST', PUT = 'PUT', PATCH = 'PATCH', DELETE = 'DELETE', HEAD = 'HEAD' }


	/**
	 * * per_unit - each target is paid independently
	 * * flat_fee - targets are paid as a pool
	 */
	export enum PlanChargeModel { per_unit = 'per_unit', flat_fee = 'flat_fee' }


	/**
	 * Scan recurrence:
	 *   * d - daily
	 *   * w - weekly
	 *   * m - monthly
	 *   * q - quarterly
	 *   * '' - no recurrence
	 */
	export enum Recurrence { d = 'd', w = 'w', m = 'm', q = 'q', '' = '' }


	/**
	 * * default - default report, no extra information added
	 * * owasp - adds table on OWASP Top 10 most critical web application risks
	 * * pci - adds table on PCI requirements
	 */
	export enum ReportType { default = 'default', owasp = 'owasp', pci = 'pci' }


	/**
	 * * lightning - fast simple scan
	 * * normal - default profile
	 * * full - does everything the default profile does and adds boolean based
	 * SQL injection tests
	 * * safe - doesn't use any content changing methods (no POST, DELETE, etc)
	 * and tries fewer payloads for SQL injection tests
	 */
	export enum ScanProfile { safe = 'safe', normal = 'normal', full = 'full', lightning = 'lightning' }


	/**
	 * Type of verification:
	 * * dns - we look or a TXT record on the host you registered containing
	 * `Probely=<verification_token>`
	 * * file - on the root of the path you registered we look for a file
	 * named `<verification token>` containing `Probely`.
	 */
	export enum VerificationMethod { dns = 'dns', file = 'file' }


	/**
	 * Type of verification:
	 * * dns - we look or a TXT record on the host you registered containing
	 * `Probely=<verification_token>`
	 * * file - on the root of the path you registered we look for a file
	 * named `<verification token>` containing `Probely`.
	 */
	export enum VerificationType { dns = 'dns', file = 'file' }


	/** API version for the webhook */
	export enum WebhookApiVersion { v1 = 'v1' }

	export interface Email {

		/** Required */
		email: string;
	}
	export interface EmailFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,
	}
	export function CreateEmailFormGroup() {
		return new FormGroup<EmailFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EmailToken {

		/**
		 * Reset token received in the user email
		 * Required
		 */
		token: string;
	}
	export interface EmailTokenFormProperties {

		/**
		 * Reset token received in the user email
		 * Required
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreateEmailTokenFormGroup() {
		return new FormGroup<EmailTokenFormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JiraCloudFinding {

		/** Jira issue id connected to this finding */
		issue_id?: string | null;

		/** Selective sync active for this finding. */
		selective_sync?: boolean | null;
	}
	export interface JiraCloudFindingFormProperties {

		/** Jira issue id connected to this finding */
		issue_id: FormControl<string | null | undefined>,

		/** Selective sync active for this finding. */
		selective_sync: FormControl<boolean | null | undefined>,
	}
	export function CreateJiraCloudFindingFormGroup() {
		return new FormGroup<JiraCloudFindingFormProperties>({
			issue_id: new FormControl<string | null | undefined>(undefined),
			selective_sync: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface JiraCloudScope {

		/** Is this target allowed Jira integration. */
		allow_jira?: boolean | null;

		/** Automatically synchronise all findings to Jira issues. */
		auto_sync?: boolean | null;

		/** Id of the issue type to be created in Jira. */
		issue_type_id?: string | null;
		priority_mapping?: Jira_priority_mapping;

		/** Id of the Jira project where issues for this target will be created. */
		project_id?: string | null;
		status_mapping?: Jira_status_mapping;
	}
	export interface JiraCloudScopeFormProperties {

		/** Is this target allowed Jira integration. */
		allow_jira: FormControl<boolean | null | undefined>,

		/** Automatically synchronise all findings to Jira issues. */
		auto_sync: FormControl<boolean | null | undefined>,

		/** Id of the issue type to be created in Jira. */
		issue_type_id: FormControl<string | null | undefined>,

		/** Id of the Jira project where issues for this target will be created. */
		project_id: FormControl<string | null | undefined>,
	}
	export function CreateJiraCloudScopeFormGroup() {
		return new FormGroup<JiraCloudScopeFormProperties>({
			allow_jira: new FormControl<boolean | null | undefined>(undefined),
			auto_sync: new FormControl<boolean | null | undefined>(undefined),
			issue_type_id: new FormControl<string | null | undefined>(undefined),
			project_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface JiraServerFinding {

		/** Jira issue id connected to this finding */
		issue_id?: string | null;

		/** Selective sync active for this finding. */
		selective_sync?: boolean | null;
	}
	export interface JiraServerFindingFormProperties {

		/** Jira issue id connected to this finding */
		issue_id: FormControl<string | null | undefined>,

		/** Selective sync active for this finding. */
		selective_sync: FormControl<boolean | null | undefined>,
	}
	export function CreateJiraServerFindingFormGroup() {
		return new FormGroup<JiraServerFindingFormProperties>({
			issue_id: new FormControl<string | null | undefined>(undefined),
			selective_sync: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface JiraServerScope {

		/** Is this target allowed Jira integration. */
		allow_jira?: boolean | null;

		/** Automatically synchronise all findings to Jira issues. */
		auto_sync?: boolean | null;

		/** Id of the issue type to be created in Jira. */
		issue_type_id?: string | null;
		priority_mapping?: Jira_priority_mapping;

		/** Id of the Jira project where issues for this target will be created. */
		project_id?: string | null;
		status_mapping?: Jira_status_mapping;
	}
	export interface JiraServerScopeFormProperties {

		/** Is this target allowed Jira integration. */
		allow_jira: FormControl<boolean | null | undefined>,

		/** Automatically synchronise all findings to Jira issues. */
		auto_sync: FormControl<boolean | null | undefined>,

		/** Id of the issue type to be created in Jira. */
		issue_type_id: FormControl<string | null | undefined>,

		/** Id of the Jira project where issues for this target will be created. */
		project_id: FormControl<string | null | undefined>,
	}
	export function CreateJiraServerScopeFormGroup() {
		return new FormGroup<JiraServerScopeFormProperties>({
			allow_jira: new FormControl<boolean | null | undefined>(undefined),
			auto_sync: new FormControl<boolean | null | undefined>(undefined),
			issue_type_id: new FormControl<string | null | undefined>(undefined),
			project_id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PasswordChange {

		/** Required */
		confpassword: any;

		/** Required */
		current_password: any;

		/** Required */
		password: any;
	}
	export interface PasswordChangeFormProperties {

		/** Required */
		confpassword: FormControl<any | null | undefined>,

		/** Required */
		current_password: FormControl<any | null | undefined>,

		/** Required */
		password: FormControl<any | null | undefined>,
	}
	export function CreatePasswordChangeFormGroup() {
		return new FormGroup<PasswordChangeFormProperties>({
			confpassword: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			current_password: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<any | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PasswordSet {

		/** Required */
		confpassword: any;

		/** Required */
		password: any;

		/**
		 * Reset token received in the user email
		 * Required
		 */
		token: string;
	}
	export interface PasswordSetFormProperties {

		/** Required */
		confpassword: FormControl<any | null | undefined>,

		/** Required */
		password: FormControl<any | null | undefined>,

		/**
		 * Reset token received in the user email
		 * Required
		 */
		token: FormControl<string | null | undefined>,
	}
	export function CreatePasswordSetFormGroup() {
		return new FormGroup<PasswordSetFormProperties>({
			confpassword: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			password: new FormControl<any | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScanOptions {

		/**
		 * Override the target's `scan_profile`.
		 */
		scan_profile?: FindingBulkRetestScan_profile | null;
	}
	export interface ScanOptionsFormProperties {

		/**
		 * Override the target's `scan_profile`.
		 */
		scan_profile: FormControl<FindingBulkRetestScan_profile | null | undefined>,
	}
	export function CreateScanOptionsFormGroup() {
		return new FormGroup<ScanOptionsFormProperties>({
			scan_profile: new FormControl<FindingBulkRetestScan_profile | null | undefined>(undefined),
		});

	}

	export interface SiteVerify {

		/**
		 * Type of verification:
		 * * dns - we look or a TXT record on the host you registered containing
		 * `Probely=<verification_token>`
		 * * file - on the root of the path you registered we look for a file
		 * named `<verification token>` containing `Probely`.
		 * Required
		 */
		type: AssetVerification_method;
	}
	export interface SiteVerifyFormProperties {

		/**
		 * Type of verification:
		 * * dns - we look or a TXT record on the host you registered containing
		 * `Probely=<verification_token>`
		 * * file - on the root of the path you registered we look for a file
		 * named `<verification token>` containing `Probely`.
		 * Required
		 */
		type: FormControl<AssetVerification_method | null | undefined>,
	}
	export function CreateSiteVerifyFormGroup() {
		return new FormGroup<SiteVerifyFormProperties>({
			type: new FormControl<AssetVerification_method | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Token {

		/** Authentication token */
		token?: string | null;
	}
	export interface TokenFormProperties {

		/** Authentication token */
		token: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve account information
		 * Get account/
		 * @return {Account} Account data
		 */
		AccountGet(headersHandler?: () => HttpHeaders): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'account/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Authenticate user
		 * The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.
		 * Post auth/obtain/
		 * @return {AuthObtainPostReturn} Token and respective time to live
		 */
		AuthObtainPost(requestBody: Login, headersHandler?: () => HttpHeaders): Observable<AuthObtainPostReturn> {
			return this.http.post<AuthObtainPostReturn>(this.baseUri + 'auth/obtain/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Replace token with a new one
		 * Post auth/refresh/
		 * @return {AuthRefreshPostReturn} Token and respective time to live
		 */
		AuthRefreshPost(requestBody: Token, headersHandler?: () => HttpHeaders): Observable<AuthRefreshPostReturn> {
			return this.http.post<AuthRefreshPostReturn>(this.baseUri + 'auth/refresh/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Revoke a token
		 * Post auth/revoke/
		 * @return {AuthRevokePostReturn} Token and respective time to live
		 */
		AuthRevokePost(requestBody: Token, headersHandler?: () => HttpHeaders): Observable<AuthRevokePostReturn> {
			return this.http.post<AuthRevokePostReturn>(this.baseUri + 'auth/revoke/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Verify a token
		 * Check for the validity of a user token.
		 * Post auth/verify/
		 * @return {AuthVerifyPostReturn} Token and respective time to live
		 */
		AuthVerifyPost(requestBody: Token, headersHandler?: () => HttpHeaders): Observable<AuthVerifyPostReturn> {
			return this.http.post<AuthVerifyPostReturn>(this.baseUri + 'auth/verify/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve billing information
		 * Get billing/
		 * @return {Billing} Billing information
		 */
		BillingGet(headersHandler?: () => HttpHeaders): Observable<Billing> {
			return this.http.get<Billing>(this.baseUri + 'billing/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Partial update billing information
		 * Patch billing/
		 * @return {Billing} Billing information
		 */
		BillingPatch(requestBody: Billing, headersHandler?: () => HttpHeaders): Observable<Billing> {
			return this.http.patch<Billing>(this.baseUri + 'billing/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update billing information
		 * Put billing/
		 * @return {Billing} Billing information
		 */
		BillingPut(requestBody: Billing, headersHandler?: () => HttpHeaders): Observable<Billing> {
			return this.http.put<Billing>(this.baseUri + 'billing/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Action that should be taken to enable the selected targets
		 * Post billing/actions/
		 * @return {Action} Required action to enable targets
		 */
		BillingActionsPost(requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<Action> {
			return this.http.post<Action>(this.baseUri + 'billing/actions/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Estimate costs of updating a subscription
		 * Post billing/estimate/
		 * @return {Invoice} Charges
		 */
		BillingEstimatePost(requestBody: Subscription, headersHandler?: () => HttpHeaders): Observable<Invoice> {
			return this.http.post<Invoice>(this.baseUri + 'billing/estimate/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update a subscription
		 * Post billing/subscribe/
		 * @return {Invoice} Charges
		 */
		BillingSubscribePost(requestBody: Subscription, headersHandler?: () => HttpHeaders): Observable<Invoice> {
			return this.http.post<Invoice>(this.baseUri + 'billing/subscribe/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Check validity of password reset token
		 * Post check/
		 * @return {CheckPostReturn} Success
		 */
		CheckPost(requestBody: EmailToken, headersHandler?: () => HttpHeaders): Observable<CheckPostReturn> {
			return this.http.post<CheckPostReturn>(this.baseUri + 'check/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Enterprise user authentication
		 * The received token should be used for authenticated requests by including in the Authorization header as `Authorization: JWT <token>`.
		 * Post enterprise/auth/obtain/
		 * @return {EnterpriseAuthObtainPostReturn} Token and respective time to live
		 */
		EnterpriseAuthObtainPost(requestBody: Login, headersHandler?: () => HttpHeaders): Observable<EnterpriseAuthObtainPostReturn> {
			return this.http.post<EnterpriseAuthObtainPostReturn>(this.baseUri + 'enterprise/auth/obtain/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Enterprise token refresh
		 * Post enterprise/auth/refresh/
		 * @return {EnterpriseAuthRefreshPostReturn} Token and respective time to live
		 */
		EnterpriseAuthRefreshPost(requestBody: Token, headersHandler?: () => HttpHeaders): Observable<EnterpriseAuthRefreshPostReturn> {
			return this.http.post<EnterpriseAuthRefreshPostReturn>(this.baseUri + 'enterprise/auth/refresh/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Enterprise token revokation
		 * Post enterprise/auth/revoke/
		 * @return {EnterpriseAuthRevokePostReturn} Token and respective time to live
		 */
		EnterpriseAuthRevokePost(requestBody: Token, headersHandler?: () => HttpHeaders): Observable<EnterpriseAuthRevokePostReturn> {
			return this.http.post<EnterpriseAuthRevokePostReturn>(this.baseUri + 'enterprise/auth/revoke/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Enterprise token verification
		 * Check for the validity of a user token.
		 * Post enterprise/auth/verify/
		 * @return {EnterpriseAuthVerifyPostReturn} Token and respective time to live
		 */
		EnterpriseAuthVerifyPost(requestBody: Token, headersHandler?: () => HttpHeaders): Observable<EnterpriseAuthVerifyPostReturn> {
			return this.http.post<EnterpriseAuthVerifyPostReturn>(this.baseUri + 'enterprise/auth/verify/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List account events
		 * Get events/
		 * @return {EventsGetReturn} Event list
		 */
		EventsGet(headersHandler?: () => HttpHeaders): Observable<EventsGetReturn> {
			return this.http.get<EventsGetReturn>(this.baseUri + 'events/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve account event
		 * Get events/{id}/
		 * @param {string} id Object Id
		 * @return {Event} A Probely event
		 */
		Events_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Event> {
			return this.http.get<Event>(this.baseUri + 'events/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List frameworks
		 * Get frameworks/
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {FrameworksGetByPageAndLengthAndOrderingAndSearchReturn} Framework list
		 */
		FrameworksGetByPageAndLengthAndOrderingAndSearch(page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<FrameworksGetByPageAndLengthAndOrderingAndSearchReturn> {
			return this.http.get<FrameworksGetByPageAndLengthAndOrderingAndSearchReturn>(this.baseUri + 'frameworks/?page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve framework
		 * Get frameworks/{id}/
		 * @param {string} id Object Id
		 * @return {Framework} Framework object
		 */
		Frameworks_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Framework> {
			return this.http.get<Framework>(this.baseUri + 'frameworks/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Integrations available and installed in the account
		 * Get integrations/
		 * @return {Integrations} Available and installed integrations in the account
		 */
		IntegrationsGet(headersHandler?: () => HttpHeaders): Observable<Integrations> {
			return this.http.get<Integrations>(this.baseUri + 'integrations/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Jira Projects
		 * Get integrations/jira-cloud/projects/
		 * @return {Array<JiraProject>} Jira projects
		 */
		IntegrationsJira_cloudProjectsGet(headersHandler?: () => HttpHeaders): Observable<Array<JiraProject>> {
			return this.http.get<Array<JiraProject>>(this.baseUri + 'integrations/jira-cloud/projects/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve project issue types
		 * Get integrations/jira-cloud/projects/{project_id}/issue_types/
		 * @param {string} project_id Jira Project Id
		 * @return {Array<JiraIssueType>} Jira issue types available in project
		 */
		IntegrationsJira_cloudProjects_project_idIssue_typesGet(project_id: string, headersHandler?: () => HttpHeaders): Observable<Array<JiraIssueType>> {
			return this.http.get<Array<JiraIssueType>>(this.baseUri + 'integrations/jira-cloud/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/issue_types/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve issue priorities
		 * Get integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/priorities/
		 * @param {string} project_id Jira Project Id
		 * @param {string} issue_type_id Jira issue type id
		 * @return {Array<JiraIssuePriority>} Jira issue priorities
		 */
		IntegrationsJira_cloudProjects_project_idIssue_types_issue_type_idPrioritiesGet(project_id: string, issue_type_id: string, headersHandler?: () => HttpHeaders): Observable<Array<JiraIssuePriority>> {
			return this.http.get<Array<JiraIssuePriority>>(this.baseUri + 'integrations/jira-cloud/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/issue_types/' + (issue_type_id == null ? '' : encodeURIComponent(issue_type_id)) + '/priorities/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve issue statuses
		 * Get integrations/jira-cloud/projects/{project_id}/issue_types/{issue_type_id}/status/
		 * @param {string} project_id Jira Project Id
		 * @param {string} issue_type_id Jira issue type id
		 * @return {Array<JiraIssueStatus>} Jira issue statuses
		 */
		IntegrationsJira_cloudProjects_project_idIssue_types_issue_type_idStatusGet(project_id: string, issue_type_id: string, headersHandler?: () => HttpHeaders): Observable<Array<JiraIssueStatus>> {
			return this.http.get<Array<JiraIssueStatus>>(this.baseUri + 'integrations/jira-cloud/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/issue_types/' + (issue_type_id == null ? '' : encodeURIComponent(issue_type_id)) + '/status/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Jira Projects
		 * Get integrations/jira-server/projects/
		 * @return {Array<JiraProject>} Jira projects
		 */
		IntegrationsJira_serverProjectsGet(headersHandler?: () => HttpHeaders): Observable<Array<JiraProject>> {
			return this.http.get<Array<JiraProject>>(this.baseUri + 'integrations/jira-server/projects/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve project issue types
		 * Get integrations/jira-server/projects/{project_id}/issue_types/
		 * @param {string} project_id Jira Project Id
		 * @return {Array<JiraIssueType>} Jira issue types available in project
		 */
		IntegrationsJira_serverProjects_project_idIssue_typesGet(project_id: string, headersHandler?: () => HttpHeaders): Observable<Array<JiraIssueType>> {
			return this.http.get<Array<JiraIssueType>>(this.baseUri + 'integrations/jira-server/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/issue_types/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve issue priorities
		 * Get integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/priorities/
		 * @param {string} project_id Jira Project Id
		 * @param {string} issue_type_id Jira issue type id
		 * @return {Array<JiraIssuePriority>} Jira issue priorities
		 */
		IntegrationsJira_serverProjects_project_idIssue_types_issue_type_idPrioritiesGet(project_id: string, issue_type_id: string, headersHandler?: () => HttpHeaders): Observable<Array<JiraIssuePriority>> {
			return this.http.get<Array<JiraIssuePriority>>(this.baseUri + 'integrations/jira-server/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/issue_types/' + (issue_type_id == null ? '' : encodeURIComponent(issue_type_id)) + '/priorities/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve issue statuses
		 * Get integrations/jira-server/projects/{project_id}/issue_types/{issue_type_id}/status/
		 * @param {string} project_id Jira Project Id
		 * @param {string} issue_type_id Jira issue type id
		 * @return {Array<JiraIssueStatus>} Jira issue statuses
		 */
		IntegrationsJira_serverProjects_project_idIssue_types_issue_type_idStatusGet(project_id: string, issue_type_id: string, headersHandler?: () => HttpHeaders): Observable<Array<JiraIssueStatus>> {
			return this.http.get<Array<JiraIssueStatus>>(this.baseUri + 'integrations/jira-server/projects/' + (project_id == null ? '' : encodeURIComponent(project_id)) + '/issue_types/' + (issue_type_id == null ? '' : encodeURIComponent(issue_type_id)) + '/status/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List API keys allowed to operate on account
		 * Get keys/
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {KeysGetByPageAndLengthAndOrderingAndSearchReturn} API Key list
		 */
		KeysGetByPageAndLengthAndOrderingAndSearch(page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<KeysGetByPageAndLengthAndOrderingAndSearchReturn> {
			return this.http.get<KeysGetByPageAndLengthAndOrderingAndSearchReturn>(this.baseUri + 'keys/?page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create account API key
		 * Post keys/
		 * @return {void} 
		 */
		KeysPost(requestBody: APIKey, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'keys/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete account API key
		 * Delete keys/{id}/
		 * @param {string} id Object Id
		 * @return {void} 
		 */
		Keys_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'keys/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve account API key
		 * Get keys/{id}/
		 * @param {string} id Object Id
		 * @return {APIKey} API Key object
		 */
		Keys_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<APIKey> {
			return this.http.get<APIKey>(this.baseUri + 'keys/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List labels
		 * Get labels/
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {LabelsGetByPageAndLengthAndOrderingAndSearchReturn} Label list
		 */
		LabelsGetByPageAndLengthAndOrderingAndSearch(page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<LabelsGetByPageAndLengthAndOrderingAndSearchReturn> {
			return this.http.get<LabelsGetByPageAndLengthAndOrderingAndSearchReturn>(this.baseUri + 'labels/?page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create label
		 * Post labels/
		 * @return {void} 
		 */
		LabelsPost(requestBody: Label, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'labels/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete label
		 * Delete labels/{id}/
		 * @param {string} id Object Id
		 * @return {void} 
		 */
		Labels_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'labels/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve framework
		 * Get labels/{id}/
		 * @param {string} id Object Id
		 * @return {Label} Label object
		 */
		Labels_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Label> {
			return this.http.get<Label>(this.baseUri + 'labels/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Partial update
		 * Patch labels/{id}/
		 * @param {string} id Object Id
		 * @return {Label} Label object
		 */
		Labels_idPatch(id: string, requestBody: Label, headersHandler?: () => HttpHeaders): Observable<Label> {
			return this.http.patch<Label>(this.baseUri + 'labels/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update label
		 * Put labels/{id}/
		 * @param {string} id Object Id
		 * @return {Label} Label object
		 */
		Labels_idPut(id: string, requestBody: Label, headersHandler?: () => HttpHeaders): Observable<Label> {
			return this.http.put<Label>(this.baseUri + 'labels/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Subscription plans
		 * Get plans/
		 * @return {Array<Plan>} Plan list
		 */
		PlansGet(headersHandler?: () => HttpHeaders): Observable<Array<Plan>> {
			return this.http.get<Array<Plan>>(this.baseUri + 'plans/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * User data
		 * Get profile/
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {User} User object
		 */
		ProfileGetByPageAndLengthAndOrderingAndSearch(page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'profile/?page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Change user password
		 * Our password policy requires a minimum password length of 10 chars with
		 * at least one symbol or number.
		 * Post profile/change_password/
		 * @return {ProfileChange_passwordPostReturn} Success
		 */
		ProfileChange_passwordPost(requestBody: PasswordChange, headersHandler?: () => HttpHeaders): Observable<ProfileChange_passwordPostReturn> {
			return this.http.post<ProfileChange_passwordPostReturn>(this.baseUri + 'profile/change_password/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Send reset password email
		 * Post reset/
		 * @return {ResetPostReturn} Success
		 */
		ResetPost(requestBody: Email, headersHandler?: () => HttpHeaders): Observable<ResetPostReturn> {
			return this.http.post<ResetPostReturn>(this.baseUri + 'reset/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Reset password after asking for a reset (with the token sent by email).
		 * Post setpassword/
		 * @return {SetpasswordPostReturn} Success
		 */
		SetpasswordPost(requestBody: PasswordSet, headersHandler?: () => HttpHeaders): Observable<SetpasswordPostReturn> {
			return this.http.post<SetpasswordPostReturn>(this.baseUri + 'setpassword/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Available actions for the selected targets
		 * Post target-actions/
		 * @return {Array<Target_actionsPostReturn>} Available actions for targets
		 */
		Target_actionsPost(requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<Array<Target_actionsPostReturn>> {
			return this.http.post<Array<Target_actionsPostReturn>>(this.baseUri + 'target-actions/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List targets
		 * Get targets/
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {TargetsGetByPageAndLengthAndOrderingAndSearchReturn} List of targets
		 */
		TargetsGetByPageAndLengthAndOrderingAndSearch(page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<TargetsGetByPageAndLengthAndOrderingAndSearchReturn> {
			return this.http.get<TargetsGetByPageAndLengthAndOrderingAndSearchReturn>(this.baseUri + 'targets/?page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create target
		 * Post targets/
		 * @return {void} 
		 */
		TargetsPost(requestBody: Target, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'targets/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Activate targets
		 * Post targets/activate/
		 * @return {Array<string>} Target id list
		 */
		TargetsActivatePost(requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.post<Array<string>>(this.baseUri + 'targets/activate/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Average fix time graph data (all targets)
		 * Get targets/all/average_fix_time/
		 * @return {TargetsAllAverage_fix_timeGetReturn} Average fix time plot data
		 */
		TargetsAllAverage_fix_timeGet(headersHandler?: () => HttpHeaders): Observable<TargetsAllAverage_fix_timeGetReturn> {
			return this.http.get<TargetsAllAverage_fix_timeGetReturn>(this.baseUri + 'targets/all/average_fix_time/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Targets with open vulnerabilities pie chart data
		 * Get targets/all/needs_attention_pie/
		 * @return {TargetsAllNeeds_attention_pieGetReturn} Success
		 */
		TargetsAllNeeds_attention_pieGet(headersHandler?: () => HttpHeaders): Observable<TargetsAllNeeds_attention_pieGetReturn> {
			return this.http.get<TargetsAllNeeds_attention_pieGetReturn>(this.baseUri + 'targets/all/needs_attention_pie/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Targets with open vulnerabilities
		 * Get targets/all/needs_attention_top/
		 * @return {Array<TargetsAllNeeds_attention_topGetReturn>} Success
		 */
		TargetsAllNeeds_attention_topGet(headersHandler?: () => HttpHeaders): Observable<Array<TargetsAllNeeds_attention_topGetReturn>> {
			return this.http.get<Array<TargetsAllNeeds_attention_topGetReturn>>(this.baseUri + 'targets/all/needs_attention_top/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Risk trend graph data (all targets)
		 * Get targets/all/risk_trend/
		 * @return {Array<TargetsAllRisk_trendGetReturn>} Risk trend plot data
		 */
		TargetsAllRisk_trendGet(headersHandler?: () => HttpHeaders): Observable<Array<TargetsAllRisk_trendGetReturn>> {
			return this.http.get<Array<TargetsAllRisk_trendGetReturn>>(this.baseUri + 'targets/all/risk_trend/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List scans for all targets
		 * Get targets/all/scans/
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @param {Array<string>} started Filter by scan start dates
		 * @param {ScanStatus} status Filter by scan statuses
		 * @return {TargetsAllScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturn} Scan list
		 */
		TargetsAllScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatus(page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, started: Array<string> | null | undefined, status: ScanStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<TargetsAllScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturn> {
			return this.http.get<TargetsAllScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturn>(this.baseUri + 'targets/all/scans/?page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&' + started?.map(z => `started=${encodeURIComponent(z)}`).join('&') + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List scheduled scans for all targets expanding recurrence
		 * Get targets/all/scheduledscans/expanded/
		 * @param {number} length Number of results to return per page
		 * @return {TargetsAllScheduledscansExpandedGetByLengthReturn} Next scheduled scans
		 */
		TargetsAllScheduledscansExpandedGetByLength(length: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<TargetsAllScheduledscansExpandedGetByLengthReturn> {
			return this.http.get<TargetsAllScheduledscansExpandedGetByLengthReturn>(this.baseUri + 'targets/all/scheduledscans/expanded/?length=' + length, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Severity trend graph data (all targets)
		 * Get targets/all/severity_trend/
		 * @return {TargetsAllSeverity_trendGetReturn} Severity trend plot data
		 */
		TargetsAllSeverity_trendGet(headersHandler?: () => HttpHeaders): Observable<TargetsAllSeverity_trendGetReturn> {
			return this.http.get<TargetsAllSeverity_trendGetReturn>(this.baseUri + 'targets/all/severity_trend/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Top 5 vulnerabilities (all targets).
		 * Get targets/all/top_vulns/
		 * @return {Array<TargetsAllTop_vulnsGetReturn>} Top vulnerabilities plot data
		 */
		TargetsAllTop_vulnsGet(headersHandler?: () => HttpHeaders): Observable<Array<TargetsAllTop_vulnsGetReturn>> {
			return this.http.get<Array<TargetsAllTop_vulnsGetReturn>>(this.baseUri + 'targets/all/top_vulns/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Archive targets
		 * Post targets/archive/
		 * @return {Array<string>} Target id list
		 */
		TargetsArchivePost(requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.post<Array<string>>(this.baseUri + 'targets/archive/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List archived targets
		 * Post targets/archived/
		 * @return {TargetsArchivedPostReturn} List of targets
		 */
		TargetsArchivedPost(requestBody: Array<string>, headersHandler?: () => HttpHeaders): Observable<TargetsArchivedPostReturn> {
			return this.http.post<TargetsArchivedPostReturn>(this.baseUri + 'targets/archived/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete target
		 * Delete targets/{id}/
		 * @param {string} id Object Id
		 * @return {void} 
		 */
		Targets_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'targets/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve target
		 * Get targets/{id}/
		 * @param {string} id Object Id
		 * @return {Target} Target object
		 */
		Targets_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Target> {
			return this.http.get<Target>(this.baseUri + 'targets/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Partial update target
		 * Patch targets/{id}/
		 * @param {string} id Object Id
		 * @return {Target} Target object
		 */
		Targets_idPatch(id: string, requestBody: Target, headersHandler?: () => HttpHeaders): Observable<Target> {
			return this.http.patch<Target>(this.baseUri + 'targets/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update target
		 * Put targets/{id}/
		 * @param {string} id Object Id
		 * @return {Target} Target object
		 */
		Targets_idPut(id: string, requestBody: Target, headersHandler?: () => HttpHeaders): Observable<Target> {
			return this.http.put<Target>(this.baseUri + 'targets/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List target's assets
		 * Get targets/{target_id}/assets/
		 * @param {string} target_id Target id
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {Targets_target_idAssetsGetByPageAndLengthAndOrderingAndSearchReturn} Asset list
		 */
		Targets_target_idAssetsGetByPageAndLengthAndOrderingAndSearch(target_id: string, page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Targets_target_idAssetsGetByPageAndLengthAndOrderingAndSearchReturn> {
			return this.http.get<Targets_target_idAssetsGetByPageAndLengthAndOrderingAndSearchReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/assets/&page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create new asset
		 * Post targets/{target_id}/assets/
		 * @param {string} target_id Target id
		 * @return {void} 
		 */
		Targets_target_idAssetsPost(target_id: string, requestBody: Asset, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/assets/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete asset
		 * Delete targets/{target_id}/assets/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {void} 
		 */
		Targets_target_idAssets_idDelete(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/assets/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve asset
		 * Get targets/{target_id}/assets/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Asset} Asset object
		 */
		Targets_target_idAssets_idGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<Asset> {
			return this.http.get<Asset>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/assets/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Partial update assets
		 * Patch targets/{target_id}/assets/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Asset} Asset object
		 */
		Targets_target_idAssets_idPatch(target_id: string, id: string, requestBody: Asset, headersHandler?: () => HttpHeaders): Observable<Asset> {
			return this.http.patch<Asset>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/assets/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update asset
		 * Put targets/{target_id}/assets/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Asset} Asset object
		 */
		Targets_target_idAssets_idPut(target_id: string, id: string, requestBody: Asset, headersHandler?: () => HttpHeaders): Observable<Asset> {
			return this.http.put<Asset>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/assets/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Verify asset ownership
		 * Post targets/{target_id}/assets/{id}/verify/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Targets_target_idAssets_idVerifyPostReturn} Success
		 */
		Targets_target_idAssets_idVerifyPost(target_id: string, id: string, requestBody: SiteVerify, headersHandler?: () => HttpHeaders): Observable<Targets_target_idAssets_idVerifyPostReturn> {
			return this.http.post<Targets_target_idAssets_idVerifyPostReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/assets/' + (id == null ? '' : encodeURIComponent(id)) + '/verify/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Average vulnerability trend graph data
		 * Get targets/{target_id}/average_fix_time/
		 * @param {string} target_id Target id
		 * @return {Targets_target_idAverage_fix_timeGetReturn} Average fix time plot data
		 */
		Targets_target_idAverage_fix_timeGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<Targets_target_idAverage_fix_timeGetReturn> {
			return this.http.get<Targets_target_idAverage_fix_timeGetReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/average_fix_time/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List target events
		 * Get targets/{target_id}/events/
		 * @param {string} target_id Target id
		 * @return {Targets_target_idEventsGetReturn} Event list
		 */
		Targets_target_idEventsGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<Targets_target_idEventsGetReturn> {
			return this.http.get<Targets_target_idEventsGetReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/events/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve target event
		 * Get targets/{target_id}/events/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Event} A Probely event
		 */
		Targets_target_idEvents_idGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<Event> {
			return this.http.get<Event>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/events/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List target findings
		 * Get targets/{target_id}/findings/
		 * @param {string} target_id Target id
		 * @param {Array<string>} scan Filter by scan ids
		 * @param {FindingSeverity} severity Filter by finding severity
		 * @param {FindingState} state Filter by finding states
		 * @param {Array<string>} assignee Filter by assignee ids
		 * @param {Array<string>} label Filter by finding labels
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {Targets_target_idFindingsGetByScanAndSeverityAndStateAndAssigneeAndLabelAndPageAndLengthAndOrderingAndSearchReturn} Finding list
		 */
		Targets_target_idFindingsGetByScanAndSeverityAndStateAndAssigneeAndLabelAndPageAndLengthAndOrderingAndSearch(target_id: string, scan: Array<string> | null | undefined, severity: FindingSeverity | null | undefined, state: FindingState | null | undefined, assignee: Array<string> | null | undefined, label: Array<string> | null | undefined, page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Targets_target_idFindingsGetByScanAndSeverityAndStateAndAssigneeAndLabelAndPageAndLengthAndOrderingAndSearchReturn> {
			return this.http.get<Targets_target_idFindingsGetByScanAndSeverityAndStateAndAssigneeAndLabelAndPageAndLengthAndOrderingAndSearchReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/&' + scan?.map(z => `scan=${encodeURIComponent(z)}`).join('&') + '&severity=' + severity + '&state=' + state + '&' + assignee?.map(z => `assignee=${encodeURIComponent(z)}`).join('&') + '&' + label?.map(z => `label=${encodeURIComponent(z)}`).join('&') + '&page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Finding report
		 * Post targets/{target_id}/findings/bulk/report/
		 * @param {string} target_id Target id
		 * @return {void} Token to retrieve report.
		 */
		Targets_target_idFindingsBulkReportPost(target_id: string, requestBody: FindingBulkIds, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/bulk/report/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Bulk retest findings
		 * Post targets/{target_id}/findings/bulk/retest/
		 * @param {string} target_id Target id
		 * @return {void} List of assessment IDs.
		 */
		Targets_target_idFindingsBulkRetestPost(target_id: string, requestBody: FindingBulkRetest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/bulk/retest/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Bulk update findings
		 * Patch targets/{target_id}/findings/bulk/update/
		 * @param {string} target_id Target id
		 * @return {void} Success
		 */
		Targets_target_idFindingsBulkUpdatePatch(target_id: string, requestBody: FindingBulkUpdate, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/bulk/update/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve finding report PDF format
		 * Get targets/{target_id}/findings/report/
		 * @param {string} target_id Target id
		 * @param {string} token Token received from the finding report endpoint.
		 * @return {void} Scan report PDF
		 */
		Targets_target_idFindingsReportGetByToken(target_id: string, token: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/report/&token=' + (token == null ? '' : encodeURIComponent(token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve finding
		 * Get targets/{target_id}/findings/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Finding} Finding object
		 */
		Targets_target_idFindings_idGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<Finding> {
			return this.http.get<Finding>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Partial update finding
		 * Patch targets/{target_id}/findings/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Finding} Finding object
		 */
		Targets_target_idFindings_idPatch(target_id: string, id: string, requestBody: Finding, headersHandler?: () => HttpHeaders): Observable<Finding> {
			return this.http.patch<Finding>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update finding
		 * Put targets/{target_id}/findings/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Finding} Finding object
		 */
		Targets_target_idFindings_idPut(target_id: string, id: string, requestBody: Finding, headersHandler?: () => HttpHeaders): Observable<Finding> {
			return this.http.put<Finding>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Jira Cloud finding configuration
		 * Get targets/{target_id}/findings/{id}/integrations/jira-cloud/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {JiraFinding} Jira Cloud Finding configuration
		 */
		Targets_target_idFindings_idIntegrationsJira_cloudGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<JiraFinding> {
			return this.http.get<JiraFinding>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/integrations/jira-cloud/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Jira Cloud finding configuration
		 * Patch targets/{target_id}/findings/{id}/integrations/jira-cloud/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {JiraFinding} Jira Cloud Finding configuration
		 */
		Targets_target_idFindings_idIntegrationsJira_cloudPatch(target_id: string, id: string, requestBody: JiraCloudFinding, headersHandler?: () => HttpHeaders): Observable<JiraFinding> {
			return this.http.patch<JiraFinding>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/integrations/jira-cloud/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update Jira Cloud finding configuration
		 * Put targets/{target_id}/findings/{id}/integrations/jira-cloud/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {JiraFinding} Jira Cloud Finding configuration
		 */
		Targets_target_idFindings_idIntegrationsJira_cloudPut(target_id: string, id: string, requestBody: JiraCloudFinding, headersHandler?: () => HttpHeaders): Observable<JiraFinding> {
			return this.http.put<JiraFinding>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/integrations/jira-cloud/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Jira Server finding configuration
		 * Get targets/{target_id}/findings/{id}/integrations/jira-server/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {JiraFinding} Jira Server finding configuration
		 */
		Targets_target_idFindings_idIntegrationsJira_serverGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<JiraFinding> {
			return this.http.get<JiraFinding>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/integrations/jira-server/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Jira Server finding configuration
		 * Patch targets/{target_id}/findings/{id}/integrations/jira-server/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {JiraFinding} Jira Server finding configuration
		 */
		Targets_target_idFindings_idIntegrationsJira_serverPatch(target_id: string, id: string, requestBody: JiraServerFinding, headersHandler?: () => HttpHeaders): Observable<JiraFinding> {
			return this.http.patch<JiraFinding>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/integrations/jira-server/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update Jira Server finding configuration
		 * Put targets/{target_id}/findings/{id}/integrations/jira-server/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {JiraFinding} Jira Server finding configuration
		 */
		Targets_target_idFindings_idIntegrationsJira_serverPut(target_id: string, id: string, requestBody: JiraServerFinding, headersHandler?: () => HttpHeaders): Observable<JiraFinding> {
			return this.http.put<JiraFinding>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/integrations/jira-server/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Finding activity log.
		 * Finding activity log.
		 * Get targets/{target_id}/findings/{id}/log/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Array<Activity>} Finding activity log
		 */
		Targets_target_idFindings_idLogGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<Array<Activity>> {
			return this.http.get<Array<Activity>>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/log/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retest finding
		 * Post targets/{target_id}/findings/{id}/retest/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {void} 
		 */
		Targets_target_idFindings_idRetestPost(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/findings/' + (id == null ? '' : encodeURIComponent(id)) + '/retest/', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Integrations available and installed for the target
		 * Get targets/{target_id}/integrations/
		 * @param {string} target_id Target id
		 * @return {Integrations} Available and installed integrations for the target
		 */
		Targets_target_idIntegrationsGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<Integrations> {
			return this.http.get<Integrations>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/integrations/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve Jira Cloud Target configuration
		 * Get targets/{target_id}/integrations/jira-cloud/
		 * @param {string} target_id Target id
		 * @return {JiraScope} Jira Cloud Target configuration
		 */
		Targets_target_idIntegrationsJira_cloudGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<JiraScope> {
			return this.http.get<JiraScope>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/integrations/jira-cloud/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Jira Cloud target configuration
		 * Patch targets/{target_id}/integrations/jira-cloud/
		 * @param {string} target_id Target id
		 * @return {JiraScope} Jira Cloud Target configuration
		 */
		Targets_target_idIntegrationsJira_cloudPatch(target_id: string, requestBody: JiraCloudScope, headersHandler?: () => HttpHeaders): Observable<JiraScope> {
			return this.http.patch<JiraScope>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/integrations/jira-cloud/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update Jira Cloud target configuration
		 * Put targets/{target_id}/integrations/jira-cloud/
		 * @param {string} target_id Target id
		 * @return {JiraScope} Jira Cloud Target configuration
		 */
		Targets_target_idIntegrationsJira_cloudPut(target_id: string, requestBody: JiraCloudScope, headersHandler?: () => HttpHeaders): Observable<JiraScope> {
			return this.http.put<JiraScope>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/integrations/jira-cloud/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve Jira Server Target configuration
		 * Get targets/{target_id}/integrations/jira-server/
		 * @param {string} target_id Target id
		 * @return {JiraScope} Jira Server target configuration
		 */
		Targets_target_idIntegrationsJira_serverGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<JiraScope> {
			return this.http.get<JiraScope>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/integrations/jira-server/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Jira Server target configuration
		 * Patch targets/{target_id}/integrations/jira-server/
		 * @param {string} target_id Target id
		 * @return {JiraScope} Jira Server target configuration
		 */
		Targets_target_idIntegrationsJira_serverPatch(target_id: string, requestBody: JiraServerScope, headersHandler?: () => HttpHeaders): Observable<JiraScope> {
			return this.http.patch<JiraScope>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/integrations/jira-server/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update Jira Server target configuration
		 * Put targets/{target_id}/integrations/jira-server/
		 * @param {string} target_id Target id
		 * @return {JiraScope} Jira Server target configuration
		 */
		Targets_target_idIntegrationsJira_serverPut(target_id: string, requestBody: JiraServerScope, headersHandler?: () => HttpHeaders): Observable<JiraScope> {
			return this.http.put<JiraScope>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/integrations/jira-server/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Retrieve slack integration data
		 * Get targets/{target_id}/integrations/slack/
		 * @param {string} target_id Target id
		 * @return {Slack} Slack integration
		 */
		Targets_target_idIntegrationsSlackGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<Slack> {
			return this.http.get<Slack>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/integrations/slack/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update slack integration data
		 * Patch targets/{target_id}/integrations/slack/
		 * @param {string} target_id Target id
		 * @return {Slack} Slack integration
		 */
		Targets_target_idIntegrationsSlackPatch(target_id: string, requestBody: Slack, headersHandler?: () => HttpHeaders): Observable<Slack> {
			return this.http.patch<Slack>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/integrations/slack/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update slack integration data
		 * Put targets/{target_id}/integrations/slack/
		 * @param {string} target_id Target id
		 * @return {Slack} Slack integration
		 */
		Targets_target_idIntegrationsSlackPut(target_id: string, requestBody: Slack, headersHandler?: () => HttpHeaders): Observable<Slack> {
			return this.http.put<Slack>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/integrations/slack/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List target specific API keys
		 * Get targets/{target_id}/keys/
		 * @param {string} target_id Target id
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {Targets_target_idKeysGetByPageAndLengthAndOrderingAndSearchReturn} API Key list
		 */
		Targets_target_idKeysGetByPageAndLengthAndOrderingAndSearch(target_id: string, page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Targets_target_idKeysGetByPageAndLengthAndOrderingAndSearchReturn> {
			return this.http.get<Targets_target_idKeysGetByPageAndLengthAndOrderingAndSearchReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/keys/&page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create target API key
		 * Post targets/{target_id}/keys/
		 * @param {string} target_id Target id
		 * @return {void} 
		 */
		Targets_target_idKeysPost(target_id: string, requestBody: APIKey, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/keys/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete target API key
		 * Delete targets/{target_id}/keys/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {void} 
		 */
		Targets_target_idKeys_idDelete(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/keys/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve target API key
		 * Get targets/{target_id}/keys/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {APIKey} API Key object
		 */
		Targets_target_idKeys_idGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<APIKey> {
			return this.http.get<APIKey>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/keys/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Risk trend graph data
		 * Get targets/{target_id}/risk_trend/
		 * @param {string} target_id Target id
		 * @return {Array<Targets_target_idRisk_trendGetReturn>} Risk trend plot data
		 */
		Targets_target_idRisk_trendGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<Array<Targets_target_idRisk_trendGetReturn>> {
			return this.http.get<Array<Targets_target_idRisk_trendGetReturn>>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/risk_trend/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Start a scan on the target
		 * Post targets/{target_id}/scan_now/
		 * @param {string} target_id Target id
		 * @return {Scan} Scan object
		 */
		Targets_target_idScan_nowPost(target_id: string, requestBody: ScanOptions, headersHandler?: () => HttpHeaders): Observable<Scan> {
			return this.http.post<Scan>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scan_now/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List scans
		 * Get targets/{target_id}/scans/
		 * @param {string} target_id Target id
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @param {Array<string>} started Filter by scan start dates
		 * @param {ScanStatus} status Filter by scan statuses
		 * @return {Targets_target_idScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturn} Scan list
		 */
		Targets_target_idScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatus(target_id: string, page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, started: Array<string> | null | undefined, status: ScanStatus | null | undefined, headersHandler?: () => HttpHeaders): Observable<Targets_target_idScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturn> {
			return this.http.get<Targets_target_idScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scans/&page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)) + '&' + started?.map(z => `started=${encodeURIComponent(z)}`).join('&') + '&status=' + status, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Dates where scans have ocurred
		 * Get targets/{target_id}/scans/dates/
		 * @param {string} target_id Target id
		 * @return {Array<string>} Dates for which there are scans
		 */
		Targets_target_idScansDatesGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scans/dates/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Scan page
		 * Given a date return the page number
		 * Get targets/{target_id}/scans/retrieve_page/
		 * @param {string} target_id Target id
		 * @param {number} length Number of results to return per page
		 * @param {Date} date Date
		 * @return {Targets_target_idScansRetrieve_pageGetByLengthAndDateReturn} Page number for supplied date
		 */
		Targets_target_idScansRetrieve_pageGetByLengthAndDate(target_id: string, length: number | null | undefined, date: Date, headersHandler?: () => HttpHeaders): Observable<Targets_target_idScansRetrieve_pageGetByLengthAndDateReturn> {
			return this.http.get<Targets_target_idScansRetrieve_pageGetByLengthAndDateReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scans/retrieve_page/&length=' + length + '&date=' + date.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve scan
		 * Get targets/{target_id}/scans/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Scan} Scan object
		 */
		Targets_target_idScans_idGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<Scan> {
			return this.http.get<Scan>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scans/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Cancel running scan
		 * Post targets/{target_id}/scans/{id}/cancel/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Scan} Scan object
		 */
		Targets_target_idScans_idCancelPost(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<Scan> {
			return this.http.post<Scan>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scans/' + (id == null ? '' : encodeURIComponent(id)) + '/cancel/', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Scan endpoints file
		 * Get targets/{target_id}/scans/{id}/endpoints/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {void} Endpoint list CSV file
		 */
		Targets_target_idScans_idEndpointsGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scans/' + (id == null ? '' : encodeURIComponent(id)) + '/endpoints/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Scan report PDF, using the report type specified for the target
		 * Get targets/{target_id}/scans/{id}/report/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {void} Scan report PDF
		 */
		Targets_target_idScans_idReportGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scans/' + (id == null ? '' : encodeURIComponent(id)) + '/report/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Scan report PDF, using the default report type
		 * Get targets/{target_id}/scans/{id}/report/default/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {void} Scan report PDF
		 */
		Targets_target_idScans_idReportDefaultGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scans/' + (id == null ? '' : encodeURIComponent(id)) + '/report/default/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Scan report PDF, using the OWASP report type
		 * Get targets/{target_id}/scans/{id}/report/owasp/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {void} Scan report PDF
		 */
		Targets_target_idScans_idReportOwaspGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scans/' + (id == null ? '' : encodeURIComponent(id)) + '/report/owasp/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Scan report PDF, using the PCI report type
		 * Get targets/{target_id}/scans/{id}/report/pci/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {void} Scan report PDF
		 */
		Targets_target_idScans_idReportPciGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scans/' + (id == null ? '' : encodeURIComponent(id)) + '/report/pci/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List scheduled scans
		 * Get targets/{target_id}/scheduledscans/
		 * @param {string} target_id Target id
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {Targets_target_idScheduledscansGetByPageAndLengthAndOrderingAndSearchReturn} Scheduled scan list
		 */
		Targets_target_idScheduledscansGetByPageAndLengthAndOrderingAndSearch(target_id: string, page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Targets_target_idScheduledscansGetByPageAndLengthAndOrderingAndSearchReturn> {
			return this.http.get<Targets_target_idScheduledscansGetByPageAndLengthAndOrderingAndSearchReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scheduledscans/&page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create new scheduled scan
		 * Post targets/{target_id}/scheduledscans/
		 * @param {string} target_id Target id
		 * @return {void} 
		 */
		Targets_target_idScheduledscansPost(target_id: string, requestBody: Scheduled, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scheduledscans/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List scheduled scans expanding recurrence
		 * Get targets/{target_id}/scheduledscans/expanded/
		 * @param {string} target_id Target id
		 * @param {number} length Number of results to return per page
		 * @return {Targets_target_idScheduledscansExpandedGetByLengthReturn} Next scheduled scans
		 */
		Targets_target_idScheduledscansExpandedGetByLength(target_id: string, length: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Targets_target_idScheduledscansExpandedGetByLengthReturn> {
			return this.http.get<Targets_target_idScheduledscansExpandedGetByLengthReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scheduledscans/expanded/&length=' + length, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete
		 * Delete targets/{target_id}/scheduledscans/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {void} 
		 */
		Targets_target_idScheduledscans_idDelete(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scheduledscans/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a scheduled scan
		 * Get targets/{target_id}/scheduledscans/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Scheduled} Scheduled scan object
		 */
		Targets_target_idScheduledscans_idGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<Scheduled> {
			return this.http.get<Scheduled>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scheduledscans/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Partial update
		 * Patch targets/{target_id}/scheduledscans/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Scheduled} Scheduled scan object
		 */
		Targets_target_idScheduledscans_idPatch(target_id: string, id: string, requestBody: Scheduled, headersHandler?: () => HttpHeaders): Observable<Scheduled> {
			return this.http.patch<Scheduled>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scheduledscans/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update a scheduled scan
		 * Put targets/{target_id}/scheduledscans/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Scheduled} Scheduled scan object
		 */
		Targets_target_idScheduledscans_idPut(target_id: string, id: string, requestBody: Scheduled, headersHandler?: () => HttpHeaders): Observable<Scheduled> {
			return this.http.put<Scheduled>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/scheduledscans/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Severity trend graph data.
		 * Get targets/{target_id}/severity_trend/
		 * @param {string} target_id Target id
		 * @return {Targets_target_idSeverity_trendGetReturn} Severity trend plot data
		 */
		Targets_target_idSeverity_trendGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<Targets_target_idSeverity_trendGetReturn> {
			return this.http.get<Targets_target_idSeverity_trendGetReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/severity_trend/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve target's site
		 * Get targets/{target_id}/site/
		 * @param {string} target_id Target id
		 * @return {Site} Site object
		 */
		Targets_target_idSiteGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<Site> {
			return this.http.get<Site>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/site/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Partial update target's site
		 * Note that the URL can only be set once.
		 * Patch targets/{target_id}/site/
		 * @param {string} target_id Target id
		 * @return {Site} Site object
		 */
		Targets_target_idSitePatch(target_id: string, requestBody: Site, headersHandler?: () => HttpHeaders): Observable<Site> {
			return this.http.patch<Site>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/site/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update target's site
		 * Note that the URL can only be set once.
		 * Put targets/{target_id}/site/
		 * @param {string} target_id Target id
		 * @return {Site} Site object
		 */
		Targets_target_idSitePut(target_id: string, requestBody: Site, headersHandler?: () => HttpHeaders): Observable<Site> {
			return this.http.put<Site>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/site/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Verify site ownership
		 * Post targets/{target_id}/site/verify/
		 * @param {string} target_id Target id
		 * @return {Targets_target_idSiteVerifyPostReturn} Success
		 */
		Targets_target_idSiteVerifyPost(target_id: string, requestBody: SiteVerify, headersHandler?: () => HttpHeaders): Observable<Targets_target_idSiteVerifyPostReturn> {
			return this.http.post<Targets_target_idSiteVerifyPostReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/site/verify/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Top 5 vulnerabilities
		 * Get targets/{target_id}/top_vulns/
		 * @param {string} target_id Target id
		 * @return {Array<Targets_target_idTop_vulnsGetReturn>} Top vulnerabilities plot data
		 */
		Targets_target_idTop_vulnsGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<Array<Targets_target_idTop_vulnsGetReturn>> {
			return this.http.get<Array<Targets_target_idTop_vulnsGetReturn>>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/top_vulns/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List target webhooks
		 * Get targets/{target_id}/webhooks/
		 * @param {string} target_id Target id
		 * @return {Targets_target_idWebhooksGetReturn} Webhook list
		 */
		Targets_target_idWebhooksGet(target_id: string, headersHandler?: () => HttpHeaders): Observable<Targets_target_idWebhooksGetReturn> {
			return this.http.get<Targets_target_idWebhooksGetReturn>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/webhooks/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create new target webhook
		 * Post targets/{target_id}/webhooks/
		 * @param {string} target_id Target id
		 * @return {void} 
		 */
		Targets_target_idWebhooksPost(target_id: string, requestBody: Webhook, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/webhooks/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete target webhook
		 * Delete targets/{target_id}/webhooks/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {void} 
		 */
		Targets_target_idWebhooks_idDelete(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve target webhook
		 * Get targets/{target_id}/webhooks/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Webhook} Webhooks
		 */
		Targets_target_idWebhooks_idGet(target_id: string, id: string, headersHandler?: () => HttpHeaders): Observable<Webhook> {
			return this.http.get<Webhook>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Partial update target webhook
		 * Patch targets/{target_id}/webhooks/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Webhook} Webhooks
		 */
		Targets_target_idWebhooks_idPatch(target_id: string, id: string, requestBody: Webhook, headersHandler?: () => HttpHeaders): Observable<Webhook> {
			return this.http.patch<Webhook>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update target webhook
		 * Put targets/{target_id}/webhooks/{id}/
		 * @param {string} target_id Target id
		 * @param {string} id Object Id
		 * @return {Webhook} Webhooks
		 */
		Targets_target_idWebhooks_idPut(target_id: string, id: string, requestBody: Webhook, headersHandler?: () => HttpHeaders): Observable<Webhook> {
			return this.http.put<Webhook>(this.baseUri + 'targets/' + (target_id == null ? '' : encodeURIComponent(target_id)) + '/webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List users
		 * Get users/
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {UsersGetByPageAndLengthAndOrderingAndSearchReturn} User list
		 */
		UsersGetByPageAndLengthAndOrderingAndSearch(page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<UsersGetByPageAndLengthAndOrderingAndSearchReturn> {
			return this.http.get<UsersGetByPageAndLengthAndOrderingAndSearchReturn>(this.baseUri + 'users/?page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create/Reactivate a user.
		 * Post users/
		 * @return {void} 
		 */
		UsersPost(requestBody: User, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Deactivate a user
		 * Delete users/{id}/
		 * @param {string} id Object Id
		 * @return {void} 
		 */
		Users_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve user
		 * Get users/{id}/
		 * @param {string} id Object Id
		 * @return {User} User object
		 */
		Users_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Partial update user
		 * Patch users/{id}/
		 * @param {string} id Object Id
		 * @return {User} User object
		 */
		Users_idPatch(id: string, requestBody: User, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update user
		 * Put users/{id}/
		 * @param {string} id Object Id
		 * @return {User} User object
		 */
		Users_idPut(id: string, requestBody: User, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.put<User>(this.baseUri + 'users/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List vulnerability definitions
		 * Get vulnerability_definitions/
		 * @param {number} page Page number within the paginated result set
		 * @param {number} length Number of results to return per page
		 * @param {string} ordering Which field to use when ordering the results, prefix with `-` to invert ordering.
		 * @param {string} search Search term
		 * @return {Vulnerability_definitionsGetByPageAndLengthAndOrderingAndSearchReturn} Vulnerability defitions list
		 */
		Vulnerability_definitionsGetByPageAndLengthAndOrderingAndSearch(page: number | null | undefined, length: number | null | undefined, ordering: string | null | undefined, search: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Vulnerability_definitionsGetByPageAndLengthAndOrderingAndSearchReturn> {
			return this.http.get<Vulnerability_definitionsGetByPageAndLengthAndOrderingAndSearchReturn>(this.baseUri + 'vulnerability_definitions/?page=' + page + '&length=' + length + '&ordering=' + (ordering == null ? '' : encodeURIComponent(ordering)) + '&search=' + (search == null ? '' : encodeURIComponent(search)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retrieve vulnerability definition
		 * Get vulnerability_definitions/{id}/
		 * @param {string} id Object Id
		 * @return {VulnerabilityDefinition} Vulnerability definition object
		 */
		Vulnerability_definitions_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<VulnerabilityDefinition> {
			return this.http.get<VulnerabilityDefinition>(this.baseUri + 'vulnerability_definitions/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List account webhooks
		 * Get webhooks/
		 * @return {WebhooksGetReturn} Webhook list
		 */
		WebhooksGet(headersHandler?: () => HttpHeaders): Observable<WebhooksGetReturn> {
			return this.http.get<WebhooksGetReturn>(this.baseUri + 'webhooks/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create new account webhook
		 * Post webhooks/
		 * @return {void} 
		 */
		WebhooksPost(requestBody: Webhook, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'webhooks/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete account webhook
		 * Delete webhooks/{id}/
		 * @param {string} id Object Id
		 * @return {void} 
		 */
		Webhooks_idDelete(id: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve account webhook
		 * Get webhooks/{id}/
		 * @param {string} id Object Id
		 * @return {Webhook} Webhooks
		 */
		Webhooks_idGet(id: string, headersHandler?: () => HttpHeaders): Observable<Webhook> {
			return this.http.get<Webhook>(this.baseUri + 'webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Partial update account webhook
		 * Patch webhooks/{id}/
		 * @param {string} id Object Id
		 * @return {Webhook} Webhooks
		 */
		Webhooks_idPatch(id: string, requestBody: Webhook, headersHandler?: () => HttpHeaders): Observable<Webhook> {
			return this.http.patch<Webhook>(this.baseUri + 'webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Update account webhook
		 * Put webhooks/{id}/
		 * @param {string} id Object Id
		 * @return {Webhook} Webhooks
		 */
		Webhooks_idPut(id: string, requestBody: Webhook, headersHandler?: () => HttpHeaders): Observable<Webhook> {
			return this.http.put<Webhook>(this.baseUri + 'webhooks/' + (id == null ? '' : encodeURIComponent(id)) + '/', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

	export interface AuthObtainPostReturn {

		/** Authentication token */
		token?: string | null;

		/** Token time to live in seconds */
		ttl?: number | null;
	}
	export interface AuthObtainPostReturnFormProperties {

		/** Authentication token */
		token: FormControl<string | null | undefined>,

		/** Token time to live in seconds */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateAuthObtainPostReturnFormGroup() {
		return new FormGroup<AuthObtainPostReturnFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AuthRefreshPostReturn {

		/** Authentication token */
		token?: string | null;

		/** Token time to live in seconds */
		ttl?: number | null;
	}
	export interface AuthRefreshPostReturnFormProperties {

		/** Authentication token */
		token: FormControl<string | null | undefined>,

		/** Token time to live in seconds */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateAuthRefreshPostReturnFormGroup() {
		return new FormGroup<AuthRefreshPostReturnFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AuthRevokePostReturn {

		/** Authentication token */
		token?: string | null;

		/** Token time to live in seconds */
		ttl?: number | null;
	}
	export interface AuthRevokePostReturnFormProperties {

		/** Authentication token */
		token: FormControl<string | null | undefined>,

		/** Token time to live in seconds */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateAuthRevokePostReturnFormGroup() {
		return new FormGroup<AuthRevokePostReturnFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface AuthVerifyPostReturn {

		/** Authentication token */
		token?: string | null;

		/** Token time to live in seconds */
		ttl?: number | null;
	}
	export interface AuthVerifyPostReturnFormProperties {

		/** Authentication token */
		token: FormControl<string | null | undefined>,

		/** Token time to live in seconds */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateAuthVerifyPostReturnFormGroup() {
		return new FormGroup<AuthVerifyPostReturnFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface CheckPostReturn {

		/** Message */
		message?: string | null;
	}
	export interface CheckPostReturnFormProperties {

		/** Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCheckPostReturnFormGroup() {
		return new FormGroup<CheckPostReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnterpriseAuthObtainPostReturn {

		/** Authentication token */
		token?: string | null;

		/** Token time to live in seconds */
		ttl?: number | null;
	}
	export interface EnterpriseAuthObtainPostReturnFormProperties {

		/** Authentication token */
		token: FormControl<string | null | undefined>,

		/** Token time to live in seconds */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseAuthObtainPostReturnFormGroup() {
		return new FormGroup<EnterpriseAuthObtainPostReturnFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnterpriseAuthRefreshPostReturn {

		/** Authentication token */
		token?: string | null;

		/** Token time to live in seconds */
		ttl?: number | null;
	}
	export interface EnterpriseAuthRefreshPostReturnFormProperties {

		/** Authentication token */
		token: FormControl<string | null | undefined>,

		/** Token time to live in seconds */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseAuthRefreshPostReturnFormGroup() {
		return new FormGroup<EnterpriseAuthRefreshPostReturnFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnterpriseAuthRevokePostReturn {

		/** Authentication token */
		token?: string | null;

		/** Token time to live in seconds */
		ttl?: number | null;
	}
	export interface EnterpriseAuthRevokePostReturnFormProperties {

		/** Authentication token */
		token: FormControl<string | null | undefined>,

		/** Token time to live in seconds */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseAuthRevokePostReturnFormGroup() {
		return new FormGroup<EnterpriseAuthRevokePostReturnFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnterpriseAuthVerifyPostReturn {

		/** Authentication token */
		token?: string | null;

		/** Token time to live in seconds */
		ttl?: number | null;
	}
	export interface EnterpriseAuthVerifyPostReturnFormProperties {

		/** Authentication token */
		token: FormControl<string | null | undefined>,

		/** Token time to live in seconds */
		ttl: FormControl<number | null | undefined>,
	}
	export function CreateEnterpriseAuthVerifyPostReturnFormGroup() {
		return new FormGroup<EnterpriseAuthVerifyPostReturnFormProperties>({
			token: new FormControl<string | null | undefined>(undefined),
			ttl: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EventsGetReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Event objects */
		results?: Array<Event>;
	}
	export interface EventsGetReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateEventsGetReturnFormGroup() {
		return new FormGroup<EventsGetReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FrameworksGetByPageAndLengthAndOrderingAndSearchReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Framework objects */
		results?: Array<Framework>;
	}
	export interface FrameworksGetByPageAndLengthAndOrderingAndSearchReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateFrameworksGetByPageAndLengthAndOrderingAndSearchReturnFormGroup() {
		return new FormGroup<FrameworksGetByPageAndLengthAndOrderingAndSearchReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface KeysGetByPageAndLengthAndOrderingAndSearchReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** API key objects */
		results?: Array<Key>;
	}
	export interface KeysGetByPageAndLengthAndOrderingAndSearchReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateKeysGetByPageAndLengthAndOrderingAndSearchReturnFormGroup() {
		return new FormGroup<KeysGetByPageAndLengthAndOrderingAndSearchReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface LabelsGetByPageAndLengthAndOrderingAndSearchReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** label objects. */
		results?: Array<Label>;
	}
	export interface LabelsGetByPageAndLengthAndOrderingAndSearchReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateLabelsGetByPageAndLengthAndOrderingAndSearchReturnFormGroup() {
		return new FormGroup<LabelsGetByPageAndLengthAndOrderingAndSearchReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProfileChange_passwordPostReturn {

		/** Message */
		message?: string | null;
	}
	export interface ProfileChange_passwordPostReturnFormProperties {

		/** Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateProfileChange_passwordPostReturnFormGroup() {
		return new FormGroup<ProfileChange_passwordPostReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ResetPostReturn {

		/** Message */
		message?: string | null;
	}
	export interface ResetPostReturnFormProperties {

		/** Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateResetPostReturnFormGroup() {
		return new FormGroup<ResetPostReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetpasswordPostReturn {

		/** Message */
		message?: string | null;
	}
	export interface SetpasswordPostReturnFormProperties {

		/** Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateSetpasswordPostReturnFormGroup() {
		return new FormGroup<SetpasswordPostReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Target_actionsPostReturn {

		/**
		 * Actions are:
		 * * edit - edit target
		 * * delete - delete target
		 * * trial - start a trial with this target
		 * * plan - select a subscipition plan with this target
		 * * subscribe - add target to subscribed plan
		 * * unsubscribe - remove target from subscription
		 * * archive - archive target
		 * * activate - unarchive target
		 */
		action?: ActionsElementAction | null;

		/** Label or the action */
		label?: string | null;
	}
	export interface Target_actionsPostReturnFormProperties {

		/**
		 * Actions are:
		 * * edit - edit target
		 * * delete - delete target
		 * * trial - start a trial with this target
		 * * plan - select a subscipition plan with this target
		 * * subscribe - add target to subscribed plan
		 * * unsubscribe - remove target from subscription
		 * * archive - archive target
		 * * activate - unarchive target
		 */
		action: FormControl<ActionsElementAction | null | undefined>,

		/** Label or the action */
		label: FormControl<string | null | undefined>,
	}
	export function CreateTarget_actionsPostReturnFormGroup() {
		return new FormGroup<Target_actionsPostReturnFormProperties>({
			action: new FormControl<ActionsElementAction | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetsGetByPageAndLengthAndOrderingAndSearchReturn {

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Number of objects in the response. */
		pagination_count?: number | null;

		/** Target objects */
		results?: Array<Target>;
	}
	export interface TargetsGetByPageAndLengthAndOrderingAndSearchReturnFormProperties {

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,

		/** Number of objects in the response. */
		pagination_count: FormControl<number | null | undefined>,
	}
	export function CreateTargetsGetByPageAndLengthAndOrderingAndSearchReturnFormGroup() {
		return new FormGroup<TargetsGetByPageAndLengthAndOrderingAndSearchReturnFormProperties>({
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
			pagination_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TargetsAllAverage_fix_timeGetReturn {
		results?: TargetsAllAverage_fix_timeGetReturnResults;
	}
	export interface TargetsAllAverage_fix_timeGetReturnFormProperties {
	}
	export function CreateTargetsAllAverage_fix_timeGetReturnFormGroup() {
		return new FormGroup<TargetsAllAverage_fix_timeGetReturnFormProperties>({
		});

	}

	export interface TargetsAllAverage_fix_timeGetReturnResults {

		/** Average fix time in seconds for high severity findings */
		high?: number | null;

		/** Average fix time in seconds for low severity findings */
		low?: number | null;

		/** Average fix time in seconds for medium severity findings */
		medium?: number | null;
	}
	export interface TargetsAllAverage_fix_timeGetReturnResultsFormProperties {

		/** Average fix time in seconds for high severity findings */
		high: FormControl<number | null | undefined>,

		/** Average fix time in seconds for low severity findings */
		low: FormControl<number | null | undefined>,

		/** Average fix time in seconds for medium severity findings */
		medium: FormControl<number | null | undefined>,
	}
	export function CreateTargetsAllAverage_fix_timeGetReturnResultsFormGroup() {
		return new FormGroup<TargetsAllAverage_fix_timeGetReturnResultsFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			medium: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TargetsAllNeeds_attention_pieGetReturn {

		/**
		 * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
		 */
		'0'?: TargetsAllNeeds_attention_pieGetReturn_0_;

		/**
		 * These are arrays, they are being displayed as objects with numerical indexes due to limitations of the framework.
		 */
		'1'?: TargetsAllNeeds_attention_pieGetReturn_1_;
	}
	export interface TargetsAllNeeds_attention_pieGetReturnFormProperties {
	}
	export function CreateTargetsAllNeeds_attention_pieGetReturnFormGroup() {
		return new FormGroup<TargetsAllNeeds_attention_pieGetReturnFormProperties>({
		});

	}

	export interface TargetsAllNeeds_attention_pieGetReturn_0_ {

		/** needing attention */
		'0'?: string | null;

		/** Number of targets */
		'1'?: number | null;

		/** needs_atention */
		'2'?: string | null;
	}
	export interface TargetsAllNeeds_attention_pieGetReturn_0_FormProperties {

		/** needing attention */
		'0': FormControl<string | null | undefined>,

		/** Number of targets */
		'1': FormControl<number | null | undefined>,

		/** needs_atention */
		'2': FormControl<string | null | undefined>,
	}
	export function CreateTargetsAllNeeds_attention_pieGetReturn_0_FormGroup() {
		return new FormGroup<TargetsAllNeeds_attention_pieGetReturn_0_FormProperties>({
			'0': new FormControl<string | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
			'2': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetsAllNeeds_attention_pieGetReturn_1_ {

		/** no issues found */
		'0'?: string | null;

		/** Number of targets */
		'1'?: number | null;

		/** no_issues_found */
		'2'?: string | null;
	}
	export interface TargetsAllNeeds_attention_pieGetReturn_1_FormProperties {

		/** no issues found */
		'0': FormControl<string | null | undefined>,

		/** Number of targets */
		'1': FormControl<number | null | undefined>,

		/** no_issues_found */
		'2': FormControl<string | null | undefined>,
	}
	export function CreateTargetsAllNeeds_attention_pieGetReturn_1_FormGroup() {
		return new FormGroup<TargetsAllNeeds_attention_pieGetReturn_1_FormProperties>({
			'0': new FormControl<string | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
			'2': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetsAllNeeds_attention_topGetReturn {

		/** Number of high severity findings */
		highs?: number | null;

		/** Target id */
		id?: string | null;

		/** Number of low severity findings */
		lows?: number | null;

		/** Number of medium severity findings */
		mediums?: number | null;

		/** Name */
		name?: string | null;

		/** Target's site URL */
		url?: string | null;
	}
	export interface TargetsAllNeeds_attention_topGetReturnFormProperties {

		/** Number of high severity findings */
		highs: FormControl<number | null | undefined>,

		/** Target id */
		id: FormControl<string | null | undefined>,

		/** Number of low severity findings */
		lows: FormControl<number | null | undefined>,

		/** Number of medium severity findings */
		mediums: FormControl<number | null | undefined>,

		/** Name */
		name: FormControl<string | null | undefined>,

		/** Target's site URL */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTargetsAllNeeds_attention_topGetReturnFormGroup() {
		return new FormGroup<TargetsAllNeeds_attention_topGetReturnFormProperties>({
			highs: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lows: new FormControl<number | null | undefined>(undefined),
			mediums: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetsAllRisk_trendGetReturn {

		/** Date time */
		'0'?: Date | null;

		/** Risk score */
		'1'?: number | null;
	}
	export interface TargetsAllRisk_trendGetReturnFormProperties {

		/** Date time */
		'0': FormControl<Date | null | undefined>,

		/** Risk score */
		'1': FormControl<number | null | undefined>,
	}
	export function CreateTargetsAllRisk_trendGetReturnFormGroup() {
		return new FormGroup<TargetsAllRisk_trendGetReturnFormProperties>({
			'0': new FormControl<Date | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TargetsAllScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Scan objects */
		results?: Array<Scan>;
	}
	export interface TargetsAllScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateTargetsAllScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturnFormGroup() {
		return new FormGroup<TargetsAllScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TargetsAllScheduledscansExpandedGetByLengthReturn {

		/** Scheduled scan objects */
		results?: Array<Scheduled>;
	}
	export interface TargetsAllScheduledscansExpandedGetByLengthReturnFormProperties {
	}
	export function CreateTargetsAllScheduledscansExpandedGetByLengthReturnFormGroup() {
		return new FormGroup<TargetsAllScheduledscansExpandedGetByLengthReturnFormProperties>({
		});

	}

	export interface TargetsAllSeverity_trendGetReturn {
		results?: TargetsAllSeverity_trendGetReturnResults;
		step?: number | null;
	}
	export interface TargetsAllSeverity_trendGetReturnFormProperties {
		step: FormControl<number | null | undefined>,
	}
	export function CreateTargetsAllSeverity_trendGetReturnFormGroup() {
		return new FormGroup<TargetsAllSeverity_trendGetReturnFormProperties>({
			step: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TargetsAllSeverity_trendGetReturnResults {
		TargetsAllSeverity_trendGetReturnResultsHigh?: Array<TargetsAllSeverity_trendGetReturnResultsHigh>;
		TargetsAllSeverity_trendGetReturnResultsLow?: Array<TargetsAllSeverity_trendGetReturnResultsLow>;
		TargetsAllSeverity_trendGetReturnResultsMedium?: Array<TargetsAllSeverity_trendGetReturnResultsMedium>;
	}
	export interface TargetsAllSeverity_trendGetReturnResultsFormProperties {
	}
	export function CreateTargetsAllSeverity_trendGetReturnResultsFormGroup() {
		return new FormGroup<TargetsAllSeverity_trendGetReturnResultsFormProperties>({
		});

	}

	export interface TargetsAllSeverity_trendGetReturnResultsHigh {

		/** Date time */
		'0'?: Date | null;

		/** Risk score */
		'1'?: number | null;
	}
	export interface TargetsAllSeverity_trendGetReturnResultsHighFormProperties {

		/** Date time */
		'0': FormControl<Date | null | undefined>,

		/** Risk score */
		'1': FormControl<number | null | undefined>,
	}
	export function CreateTargetsAllSeverity_trendGetReturnResultsHighFormGroup() {
		return new FormGroup<TargetsAllSeverity_trendGetReturnResultsHighFormProperties>({
			'0': new FormControl<Date | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TargetsAllSeverity_trendGetReturnResultsLow {

		/** Date time */
		'0'?: Date | null;

		/** Risk score */
		'1'?: number | null;
	}
	export interface TargetsAllSeverity_trendGetReturnResultsLowFormProperties {

		/** Date time */
		'0': FormControl<Date | null | undefined>,

		/** Risk score */
		'1': FormControl<number | null | undefined>,
	}
	export function CreateTargetsAllSeverity_trendGetReturnResultsLowFormGroup() {
		return new FormGroup<TargetsAllSeverity_trendGetReturnResultsLowFormProperties>({
			'0': new FormControl<Date | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TargetsAllSeverity_trendGetReturnResultsMedium {

		/** Date time */
		'0'?: Date | null;

		/** Risk score */
		'1'?: number | null;
	}
	export interface TargetsAllSeverity_trendGetReturnResultsMediumFormProperties {

		/** Date time */
		'0': FormControl<Date | null | undefined>,

		/** Risk score */
		'1': FormControl<number | null | undefined>,
	}
	export function CreateTargetsAllSeverity_trendGetReturnResultsMediumFormGroup() {
		return new FormGroup<TargetsAllSeverity_trendGetReturnResultsMediumFormProperties>({
			'0': new FormControl<Date | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TargetsAllTop_vulnsGetReturn {

		/** Vulnerability name */
		'0'?: string | null;

		/** Vulnerability count */
		'1'?: string | null;
	}
	export interface TargetsAllTop_vulnsGetReturnFormProperties {

		/** Vulnerability name */
		'0': FormControl<string | null | undefined>,

		/** Vulnerability count */
		'1': FormControl<string | null | undefined>,
	}
	export function CreateTargetsAllTop_vulnsGetReturnFormGroup() {
		return new FormGroup<TargetsAllTop_vulnsGetReturnFormProperties>({
			'0': new FormControl<string | null | undefined>(undefined),
			'1': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TargetsArchivedPostReturn {

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Number of objects in the response. */
		pagination_count?: number | null;

		/** Target objects */
		results?: Array<Target>;
	}
	export interface TargetsArchivedPostReturnFormProperties {

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,

		/** Number of objects in the response. */
		pagination_count: FormControl<number | null | undefined>,
	}
	export function CreateTargetsArchivedPostReturnFormGroup() {
		return new FormGroup<TargetsArchivedPostReturnFormProperties>({
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
			pagination_count: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idAssetsGetByPageAndLengthAndOrderingAndSearchReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Asset objects. */
		results?: Array<Asset>;
	}
	export interface Targets_target_idAssetsGetByPageAndLengthAndOrderingAndSearchReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idAssetsGetByPageAndLengthAndOrderingAndSearchReturnFormGroup() {
		return new FormGroup<Targets_target_idAssetsGetByPageAndLengthAndOrderingAndSearchReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idAssets_idVerifyPostReturn {

		/** Message */
		message?: string | null;
	}
	export interface Targets_target_idAssets_idVerifyPostReturnFormProperties {

		/** Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateTargets_target_idAssets_idVerifyPostReturnFormGroup() {
		return new FormGroup<Targets_target_idAssets_idVerifyPostReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idAverage_fix_timeGetReturn {
		results?: Targets_target_idAverage_fix_timeGetReturnResults;
	}
	export interface Targets_target_idAverage_fix_timeGetReturnFormProperties {
	}
	export function CreateTargets_target_idAverage_fix_timeGetReturnFormGroup() {
		return new FormGroup<Targets_target_idAverage_fix_timeGetReturnFormProperties>({
		});

	}

	export interface Targets_target_idAverage_fix_timeGetReturnResults {

		/** Average fix time in seconds for high severity findings */
		high?: number | null;

		/** Average fix time in seconds for low severity findings */
		low?: number | null;

		/** Average fix time in seconds for medium severity findings */
		medium?: number | null;
	}
	export interface Targets_target_idAverage_fix_timeGetReturnResultsFormProperties {

		/** Average fix time in seconds for high severity findings */
		high: FormControl<number | null | undefined>,

		/** Average fix time in seconds for low severity findings */
		low: FormControl<number | null | undefined>,

		/** Average fix time in seconds for medium severity findings */
		medium: FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idAverage_fix_timeGetReturnResultsFormGroup() {
		return new FormGroup<Targets_target_idAverage_fix_timeGetReturnResultsFormProperties>({
			high: new FormControl<number | null | undefined>(undefined),
			low: new FormControl<number | null | undefined>(undefined),
			medium: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idEventsGetReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Event objects */
		results?: Array<Event>;
	}
	export interface Targets_target_idEventsGetReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idEventsGetReturnFormGroup() {
		return new FormGroup<Targets_target_idEventsGetReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idFindingsGetByScanAndSeverityAndStateAndAssigneeAndLabelAndPageAndLengthAndOrderingAndSearchReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Finding objects. */
		results?: Array<Finding>;
	}
	export interface Targets_target_idFindingsGetByScanAndSeverityAndStateAndAssigneeAndLabelAndPageAndLengthAndOrderingAndSearchReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idFindingsGetByScanAndSeverityAndStateAndAssigneeAndLabelAndPageAndLengthAndOrderingAndSearchReturnFormGroup() {
		return new FormGroup<Targets_target_idFindingsGetByScanAndSeverityAndStateAndAssigneeAndLabelAndPageAndLengthAndOrderingAndSearchReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idKeysGetByPageAndLengthAndOrderingAndSearchReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** API key objects */
		results?: Array<Key>;
	}
	export interface Targets_target_idKeysGetByPageAndLengthAndOrderingAndSearchReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idKeysGetByPageAndLengthAndOrderingAndSearchReturnFormGroup() {
		return new FormGroup<Targets_target_idKeysGetByPageAndLengthAndOrderingAndSearchReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idRisk_trendGetReturn {

		/** Date time */
		'0'?: Date | null;

		/** Risk score */
		'1'?: number | null;
	}
	export interface Targets_target_idRisk_trendGetReturnFormProperties {

		/** Date time */
		'0': FormControl<Date | null | undefined>,

		/** Risk score */
		'1': FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idRisk_trendGetReturnFormGroup() {
		return new FormGroup<Targets_target_idRisk_trendGetReturnFormProperties>({
			'0': new FormControl<Date | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Scan objects */
		results?: Array<Scan>;
	}
	export interface Targets_target_idScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturnFormGroup() {
		return new FormGroup<Targets_target_idScansGetByPageAndLengthAndOrderingAndSearchAndStartedAndStatusReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idScansRetrieve_pageGetByLengthAndDateReturn {

		/** Page number */
		page?: number | null;
	}
	export interface Targets_target_idScansRetrieve_pageGetByLengthAndDateReturnFormProperties {

		/** Page number */
		page: FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idScansRetrieve_pageGetByLengthAndDateReturnFormGroup() {
		return new FormGroup<Targets_target_idScansRetrieve_pageGetByLengthAndDateReturnFormProperties>({
			page: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idScheduledscansGetByPageAndLengthAndOrderingAndSearchReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Scheduled scan objects */
		results?: Array<Scheduled>;
	}
	export interface Targets_target_idScheduledscansGetByPageAndLengthAndOrderingAndSearchReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idScheduledscansGetByPageAndLengthAndOrderingAndSearchReturnFormGroup() {
		return new FormGroup<Targets_target_idScheduledscansGetByPageAndLengthAndOrderingAndSearchReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idScheduledscansExpandedGetByLengthReturn {

		/** Scheduled scan objects */
		results?: Array<Scheduled>;
	}
	export interface Targets_target_idScheduledscansExpandedGetByLengthReturnFormProperties {
	}
	export function CreateTargets_target_idScheduledscansExpandedGetByLengthReturnFormGroup() {
		return new FormGroup<Targets_target_idScheduledscansExpandedGetByLengthReturnFormProperties>({
		});

	}

	export interface Targets_target_idSeverity_trendGetReturn {
		results?: Targets_target_idSeverity_trendGetReturnResults;
		step?: number | null;
	}
	export interface Targets_target_idSeverity_trendGetReturnFormProperties {
		step: FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idSeverity_trendGetReturnFormGroup() {
		return new FormGroup<Targets_target_idSeverity_trendGetReturnFormProperties>({
			step: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idSeverity_trendGetReturnResults {
		Targets_target_idSeverity_trendGetReturnResultsHigh?: Array<Targets_target_idSeverity_trendGetReturnResultsHigh>;
		Targets_target_idSeverity_trendGetReturnResultsLow?: Array<Targets_target_idSeverity_trendGetReturnResultsLow>;
		Targets_target_idSeverity_trendGetReturnResultsMedium?: Array<Targets_target_idSeverity_trendGetReturnResultsMedium>;
	}
	export interface Targets_target_idSeverity_trendGetReturnResultsFormProperties {
	}
	export function CreateTargets_target_idSeverity_trendGetReturnResultsFormGroup() {
		return new FormGroup<Targets_target_idSeverity_trendGetReturnResultsFormProperties>({
		});

	}

	export interface Targets_target_idSeverity_trendGetReturnResultsHigh {

		/** Date time */
		'0'?: Date | null;

		/** Risk score */
		'1'?: number | null;
	}
	export interface Targets_target_idSeverity_trendGetReturnResultsHighFormProperties {

		/** Date time */
		'0': FormControl<Date | null | undefined>,

		/** Risk score */
		'1': FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idSeverity_trendGetReturnResultsHighFormGroup() {
		return new FormGroup<Targets_target_idSeverity_trendGetReturnResultsHighFormProperties>({
			'0': new FormControl<Date | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idSeverity_trendGetReturnResultsLow {

		/** Date time */
		'0'?: Date | null;

		/** Risk score */
		'1'?: number | null;
	}
	export interface Targets_target_idSeverity_trendGetReturnResultsLowFormProperties {

		/** Date time */
		'0': FormControl<Date | null | undefined>,

		/** Risk score */
		'1': FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idSeverity_trendGetReturnResultsLowFormGroup() {
		return new FormGroup<Targets_target_idSeverity_trendGetReturnResultsLowFormProperties>({
			'0': new FormControl<Date | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idSeverity_trendGetReturnResultsMedium {

		/** Date time */
		'0'?: Date | null;

		/** Risk score */
		'1'?: number | null;
	}
	export interface Targets_target_idSeverity_trendGetReturnResultsMediumFormProperties {

		/** Date time */
		'0': FormControl<Date | null | undefined>,

		/** Risk score */
		'1': FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idSeverity_trendGetReturnResultsMediumFormGroup() {
		return new FormGroup<Targets_target_idSeverity_trendGetReturnResultsMediumFormProperties>({
			'0': new FormControl<Date | null | undefined>(undefined),
			'1': new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idSiteVerifyPostReturn {

		/** Message */
		message?: string | null;
	}
	export interface Targets_target_idSiteVerifyPostReturnFormProperties {

		/** Message */
		message: FormControl<string | null | undefined>,
	}
	export function CreateTargets_target_idSiteVerifyPostReturnFormGroup() {
		return new FormGroup<Targets_target_idSiteVerifyPostReturnFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idTop_vulnsGetReturn {

		/** Vulnerability name */
		'0'?: string | null;

		/** Vulnerability count */
		'1'?: string | null;
	}
	export interface Targets_target_idTop_vulnsGetReturnFormProperties {

		/** Vulnerability name */
		'0': FormControl<string | null | undefined>,

		/** Vulnerability count */
		'1': FormControl<string | null | undefined>,
	}
	export function CreateTargets_target_idTop_vulnsGetReturnFormGroup() {
		return new FormGroup<Targets_target_idTop_vulnsGetReturnFormProperties>({
			'0': new FormControl<string | null | undefined>(undefined),
			'1': new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Targets_target_idWebhooksGetReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Webhook objects */
		results?: Array<Webhook>;
	}
	export interface Targets_target_idWebhooksGetReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateTargets_target_idWebhooksGetReturnFormGroup() {
		return new FormGroup<Targets_target_idWebhooksGetReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface UsersGetByPageAndLengthAndOrderingAndSearchReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** User objects */
		results?: Array<User>;
	}
	export interface UsersGetByPageAndLengthAndOrderingAndSearchReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateUsersGetByPageAndLengthAndOrderingAndSearchReturnFormGroup() {
		return new FormGroup<UsersGetByPageAndLengthAndOrderingAndSearchReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Vulnerability_definitionsGetByPageAndLengthAndOrderingAndSearchReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Vulnerability definition objects. */
		results?: Array<VulnerabilityDefinition>;
	}
	export interface Vulnerability_definitionsGetByPageAndLengthAndOrderingAndSearchReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateVulnerability_definitionsGetByPageAndLengthAndOrderingAndSearchReturnFormGroup() {
		return new FormGroup<Vulnerability_definitionsGetByPageAndLengthAndOrderingAndSearchReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface WebhooksGetReturn {

		/** Number of objects in the response. */
		count?: number | null;

		/** Number of objects per page. */
		length?: number | null;

		/** Current page. */
		page?: number | null;

		/** Number of pages. */
		page_total?: number | null;

		/** Webhook objects */
		results?: Array<Webhook>;
	}
	export interface WebhooksGetReturnFormProperties {

		/** Number of objects in the response. */
		count: FormControl<number | null | undefined>,

		/** Number of objects per page. */
		length: FormControl<number | null | undefined>,

		/** Current page. */
		page: FormControl<number | null | undefined>,

		/** Number of pages. */
		page_total: FormControl<number | null | undefined>,
	}
	export function CreateWebhooksGetReturnFormGroup() {
		return new FormGroup<WebhooksGetReturnFormProperties>({
			count: new FormControl<number | null | undefined>(undefined),
			length: new FormControl<number | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_total: new FormControl<number | null | undefined>(undefined),
		});

	}

}

