import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Artifact {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		node_index?: number | null;
		path?: string | null;
		pretty_path?: string | null;
		url?: string | null;
	}
	export interface ArtifactFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		node_index: FormControl<number | null | undefined>,
		path: FormControl<string | null | undefined>,
		pretty_path: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateArtifactFormGroup() {
		return new FormGroup<ArtifactFormProperties>({
			node_index: new FormControl<number | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			pretty_path: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Aws {
		keypair?: string | null;
	}
	export interface AwsFormProperties {
		keypair: FormControl<string | null | undefined>,
	}
	export function CreateAwsFormGroup() {
		return new FormGroup<AwsFormProperties>({
			keypair: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Build {

		/** commit message body */
		body?: string | null;
		branch?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		build_time_millis?: number | null;
		build_url?: string | null;
		committer_email?: string | null;
		committer_name?: string | null;

		/** reason why we didn't build, if we didn't build */
		dont_build?: string | null;
		lifecycle?: BuildLifecycle | null;

		/** previous build */
		previous?: PreviousBuild;

		/** time build was queued */
		queued_at?: Date | null;
		reponame?: string | null;

		/**
		 * build_num of the build this is a retry of
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retry_of?: number | null;

		/** time build started */
		start_time?: Date | null;

		/** time build finished */
		stop_time?: Date | null;
		subject?: string | null;
		username?: string | null;
		vcs_url?: string | null;

		/** short string explaining the reason we built */
		why?: string | null;
	}
	export interface BuildFormProperties {

		/** commit message body */
		body: FormControl<string | null | undefined>,
		branch: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		build_time_millis: FormControl<number | null | undefined>,
		build_url: FormControl<string | null | undefined>,
		committer_email: FormControl<string | null | undefined>,
		committer_name: FormControl<string | null | undefined>,

		/** reason why we didn't build, if we didn't build */
		dont_build: FormControl<string | null | undefined>,
		lifecycle: FormControl<BuildLifecycle | null | undefined>,

		/** time build was queued */
		queued_at: FormControl<Date | null | undefined>,
		reponame: FormControl<string | null | undefined>,

		/**
		 * build_num of the build this is a retry of
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		retry_of: FormControl<number | null | undefined>,

		/** time build started */
		start_time: FormControl<Date | null | undefined>,

		/** time build finished */
		stop_time: FormControl<Date | null | undefined>,
		subject: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		vcs_url: FormControl<string | null | undefined>,

		/** short string explaining the reason we built */
		why: FormControl<string | null | undefined>,
	}
	export function CreateBuildFormGroup() {
		return new FormGroup<BuildFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			branch: new FormControl<string | null | undefined>(undefined),
			build_time_millis: new FormControl<number | null | undefined>(undefined),
			build_url: new FormControl<string | null | undefined>(undefined),
			committer_email: new FormControl<string | null | undefined>(undefined),
			committer_name: new FormControl<string | null | undefined>(undefined),
			dont_build: new FormControl<string | null | undefined>(undefined),
			lifecycle: new FormControl<BuildLifecycle | null | undefined>(undefined),
			queued_at: new FormControl<Date | null | undefined>(undefined),
			reponame: new FormControl<string | null | undefined>(undefined),
			retry_of: new FormControl<number | null | undefined>(undefined),
			start_time: new FormControl<Date | null | undefined>(undefined),
			stop_time: new FormControl<Date | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			vcs_url: new FormControl<string | null | undefined>(undefined),
			why: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildLifecycle { queued = 'queued', scheduled = 'scheduled', not_run = 'not_run', not_running = 'not_running', running = 'running', finished = 'finished' }


	/** previous build */
	export interface PreviousBuild {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		build_num?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		build_time_millis?: number | null;
		status?: PreviousBuildStatus | null;
	}

	/** previous build */
	export interface PreviousBuildFormProperties {

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		build_num: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		build_time_millis: FormControl<number | null | undefined>,
		status: FormControl<PreviousBuildStatus | null | undefined>,
	}
	export function CreatePreviousBuildFormGroup() {
		return new FormGroup<PreviousBuildFormProperties>({
			build_num: new FormControl<number | null | undefined>(undefined),
			build_time_millis: new FormControl<number | null | undefined>(undefined),
			status: new FormControl<PreviousBuildStatus | null | undefined>(undefined),
		});

	}

	export enum PreviousBuildStatus { retried = 'retried', canceled = 'canceled', infrastructure_fail = 'infrastructure_fail', timedout = 'timedout', not_run = 'not_run', running = 'running', failed = 'failed', queued = 'queued', scheduled = 'scheduled', not_running = 'not_running', no_tests = 'no_tests', fixed = 'fixed', success = 'success' }


	/** previous build */
	export interface BuildDetail {
		all_commit_details?: Array<CommitDetail>;
		compare?: string | null;
		job_name?: string | null;
		node?: any;

		/** previous build */
		previous_successful_build?: PreviousBuild;
		retries?: boolean | null;
		ssh_enabled?: boolean | null;
		timedout?: boolean | null;
		usage_queued_at?: Date | null;
		user?: User;
	}

	/** previous build */
	export interface BuildDetailFormProperties {
		compare: FormControl<string | null | undefined>,
		job_name: FormControl<string | null | undefined>,
		node: FormControl<any | null | undefined>,
		retries: FormControl<boolean | null | undefined>,
		ssh_enabled: FormControl<boolean | null | undefined>,
		timedout: FormControl<boolean | null | undefined>,
		usage_queued_at: FormControl<Date | null | undefined>,
	}
	export function CreateBuildDetailFormGroup() {
		return new FormGroup<BuildDetailFormProperties>({
			compare: new FormControl<string | null | undefined>(undefined),
			job_name: new FormControl<string | null | undefined>(undefined),
			node: new FormControl<any | null | undefined>(undefined),
			retries: new FormControl<boolean | null | undefined>(undefined),
			ssh_enabled: new FormControl<boolean | null | undefined>(undefined),
			timedout: new FormControl<boolean | null | undefined>(undefined),
			usage_queued_at: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CommitDetail {
		author_date?: Date | null;
		author_email?: string | null;
		author_login?: string | null;
		author_name?: string | null;
		body?: string | null;
		commit?: string | null;
		commit_url?: string | null;
		committer_date?: Date | null;
		committer_email?: string | null;
		committer_login?: string | null;
		committer_name?: string | null;
		subject?: string | null;
	}
	export interface CommitDetailFormProperties {
		author_date: FormControl<Date | null | undefined>,
		author_email: FormControl<string | null | undefined>,
		author_login: FormControl<string | null | undefined>,
		author_name: FormControl<string | null | undefined>,
		body: FormControl<string | null | undefined>,
		commit: FormControl<string | null | undefined>,
		commit_url: FormControl<string | null | undefined>,
		committer_date: FormControl<Date | null | undefined>,
		committer_email: FormControl<string | null | undefined>,
		committer_login: FormControl<string | null | undefined>,
		committer_name: FormControl<string | null | undefined>,
		subject: FormControl<string | null | undefined>,
	}
	export function CreateCommitDetailFormGroup() {
		return new FormGroup<CommitDetailFormProperties>({
			author_date: new FormControl<Date | null | undefined>(undefined),
			author_email: new FormControl<string | null | undefined>(undefined),
			author_login: new FormControl<string | null | undefined>(undefined),
			author_name: new FormControl<string | null | undefined>(undefined),
			body: new FormControl<string | null | undefined>(undefined),
			commit: new FormControl<string | null | undefined>(undefined),
			commit_url: new FormControl<string | null | undefined>(undefined),
			committer_date: new FormControl<Date | null | undefined>(undefined),
			committer_email: new FormControl<string | null | undefined>(undefined),
			committer_login: new FormControl<string | null | undefined>(undefined),
			committer_name: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface User {
		admin?: boolean | null;
		all_emails?: Array<string>;
		analytics_id?: string | null;
		avatar_url?: string | null;
		basic_email_prefs?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bitbucket?: number | null;
		bitbucket_authorized?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		containers?: number | null;
		created_at?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		days_left_in_trial?: number | null;
		dev_admin?: boolean | null;
		enrolled_betas?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		github_id?: number | null;
		github_oauth_scopes?: Array<string>;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gravatar_id?: number | null;
		heroku_api_key?: string | null;
		in_beta_program?: boolean | null;
		login?: string | null;
		name?: string | null;
		organization_prefs?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parallelism?: number | null;
		plan?: string | null;
		projects?: string | null;
		pusher_id?: string | null;
		selected_email?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sign_in_count?: number | null;
		trial_end?: Date | null;
	}
	export interface UserFormProperties {
		admin: FormControl<boolean | null | undefined>,
		analytics_id: FormControl<string | null | undefined>,
		avatar_url: FormControl<string | null | undefined>,
		basic_email_prefs: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		bitbucket: FormControl<number | null | undefined>,
		bitbucket_authorized: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		containers: FormControl<number | null | undefined>,
		created_at: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		days_left_in_trial: FormControl<number | null | undefined>,
		dev_admin: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		github_id: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		gravatar_id: FormControl<number | null | undefined>,
		heroku_api_key: FormControl<string | null | undefined>,
		in_beta_program: FormControl<boolean | null | undefined>,
		login: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		organization_prefs: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parallelism: FormControl<number | null | undefined>,
		plan: FormControl<string | null | undefined>,
		projects: FormControl<string | null | undefined>,
		pusher_id: FormControl<string | null | undefined>,
		selected_email: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		sign_in_count: FormControl<number | null | undefined>,
		trial_end: FormControl<Date | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			admin: new FormControl<boolean | null | undefined>(undefined),
			analytics_id: new FormControl<string | null | undefined>(undefined),
			avatar_url: new FormControl<string | null | undefined>(undefined),
			basic_email_prefs: new FormControl<string | null | undefined>(undefined),
			bitbucket: new FormControl<number | null | undefined>(undefined),
			bitbucket_authorized: new FormControl<boolean | null | undefined>(undefined),
			containers: new FormControl<number | null | undefined>(undefined),
			created_at: new FormControl<Date | null | undefined>(undefined),
			days_left_in_trial: new FormControl<number | null | undefined>(undefined),
			dev_admin: new FormControl<boolean | null | undefined>(undefined),
			github_id: new FormControl<number | null | undefined>(undefined),
			gravatar_id: new FormControl<number | null | undefined>(undefined),
			heroku_api_key: new FormControl<string | null | undefined>(undefined),
			in_beta_program: new FormControl<boolean | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			organization_prefs: new FormControl<string | null | undefined>(undefined),
			parallelism: new FormControl<number | null | undefined>(undefined),
			plan: new FormControl<string | null | undefined>(undefined),
			projects: new FormControl<string | null | undefined>(undefined),
			pusher_id: new FormControl<string | null | undefined>(undefined),
			selected_email: new FormControl<string | null | undefined>(undefined),
			sign_in_count: new FormControl<number | null | undefined>(undefined),
			trial_end: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/**
	 * Additional environment variables to inject into the build environment. A map of names to values.
	 */
	export interface BuildParameters {
	}

	/**
	 * Additional environment variables to inject into the build environment. A map of names to values.
	 */
	export interface BuildParametersFormProperties {
	}
	export function CreateBuildParametersFormGroup() {
		return new FormGroup<BuildParametersFormProperties>({
		});

	}

	export interface BuildSummary {
		added_at?: Date | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		build_num?: number | null;
		outcome?: BuildSummaryOutcome | null;
		pushed_at?: Date | null;
		status?: PreviousBuildStatus | null;
		vcs_revision?: string | null;
	}
	export interface BuildSummaryFormProperties {
		added_at: FormControl<Date | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		build_num: FormControl<number | null | undefined>,
		outcome: FormControl<BuildSummaryOutcome | null | undefined>,
		pushed_at: FormControl<Date | null | undefined>,
		status: FormControl<PreviousBuildStatus | null | undefined>,
		vcs_revision: FormControl<string | null | undefined>,
	}
	export function CreateBuildSummaryFormGroup() {
		return new FormGroup<BuildSummaryFormProperties>({
			added_at: new FormControl<Date | null | undefined>(undefined),
			build_num: new FormControl<number | null | undefined>(undefined),
			outcome: new FormControl<BuildSummaryOutcome | null | undefined>(undefined),
			pushed_at: new FormControl<Date | null | undefined>(undefined),
			status: new FormControl<PreviousBuildStatus | null | undefined>(undefined),
			vcs_revision: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuildSummaryOutcome { canceled = 'canceled', infrastructure_fail = 'infrastructure_fail', timedout = 'timedout', failed = 'failed', no_tests = 'no_tests', success = 'success' }

	export interface Envvar {
		name?: string | null;
		value?: string | null;
	}
	export interface EnvvarFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateEnvvarFormGroup() {
		return new FormGroup<EnvvarFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Key {
		fingerprint?: string | null;
		preferred?: boolean | null;
		public_key?: string | null;

		/** when the key was issued */
		time?: Date | null;

		/**
		 * can be "deploy-key" or "github-user-key"
		 */
		type?: KeyType | null;
	}
	export interface KeyFormProperties {
		fingerprint: FormControl<string | null | undefined>,
		preferred: FormControl<boolean | null | undefined>,
		public_key: FormControl<string | null | undefined>,

		/** when the key was issued */
		time: FormControl<Date | null | undefined>,

		/**
		 * can be "deploy-key" or "github-user-key"
		 */
		type: FormControl<KeyType | null | undefined>,
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
			fingerprint: new FormControl<string | null | undefined>(undefined),
			preferred: new FormControl<boolean | null | undefined>(undefined),
			public_key: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
			type: new FormControl<KeyType | null | undefined>(undefined),
		});

	}

	export enum KeyType { 'deploy-key' = 'deploy-key', 'github-user-key' = 'github-user-key' }

	export enum Lifecycle { queued = 'queued', scheduled = 'scheduled', not_run = 'not_run', not_running = 'not_running', running = 'running', finished = 'finished' }

	export enum Outcome { canceled = 'canceled', infrastructure_fail = 'infrastructure_fail', timedout = 'timedout', failed = 'failed', no_tests = 'no_tests', success = 'success' }

	export interface Project {
		aws?: Aws;
		branches?: string | null;
		campfire_notify_prefs?: string | null;
		campfire_room?: string | null;
		campfire_subdomain?: string | null;
		campfire_token?: string | null;
		compile?: string | null;
		default_branch?: string | null;
		dependencies?: string | null;
		extra?: string | null;
		feature_flags?: ProjectFeature_flags;
		flowdock_api_token?: string | null;
		followed?: boolean | null;
		has_usable_key?: boolean | null;
		heroku_deploy_user?: string | null;
		hipchat_api_token?: string | null;
		hipchat_notify?: string | null;
		hipchat_notify_prefs?: string | null;
		hipchat_room?: string | null;
		irc_channel?: string | null;
		irc_keyword?: string | null;
		irc_notify_prefs?: string | null;
		irc_password?: string | null;
		irc_server?: string | null;
		irc_username?: string | null;
		language?: string | null;
		oss?: boolean | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parallel?: number | null;
		reponame?: string | null;
		scopes?: Array<Scope>;
		setup?: string | null;
		slack_api_token?: string | null;
		slack_channel?: string | null;
		slack_channel_override?: string | null;
		slack_notify_prefs?: string | null;
		slack_subdomain?: string | null;
		slack_webhook_url?: string | null;
		ssh_keys?: Array<string>;
		test?: string | null;
		username?: string | null;
		vcs_type?: string | null;
		vcs_url?: string | null;
	}
	export interface ProjectFormProperties {
		branches: FormControl<string | null | undefined>,
		campfire_notify_prefs: FormControl<string | null | undefined>,
		campfire_room: FormControl<string | null | undefined>,
		campfire_subdomain: FormControl<string | null | undefined>,
		campfire_token: FormControl<string | null | undefined>,
		compile: FormControl<string | null | undefined>,
		default_branch: FormControl<string | null | undefined>,
		dependencies: FormControl<string | null | undefined>,
		extra: FormControl<string | null | undefined>,
		flowdock_api_token: FormControl<string | null | undefined>,
		followed: FormControl<boolean | null | undefined>,
		has_usable_key: FormControl<boolean | null | undefined>,
		heroku_deploy_user: FormControl<string | null | undefined>,
		hipchat_api_token: FormControl<string | null | undefined>,
		hipchat_notify: FormControl<string | null | undefined>,
		hipchat_notify_prefs: FormControl<string | null | undefined>,
		hipchat_room: FormControl<string | null | undefined>,
		irc_channel: FormControl<string | null | undefined>,
		irc_keyword: FormControl<string | null | undefined>,
		irc_notify_prefs: FormControl<string | null | undefined>,
		irc_password: FormControl<string | null | undefined>,
		irc_server: FormControl<string | null | undefined>,
		irc_username: FormControl<string | null | undefined>,
		language: FormControl<string | null | undefined>,
		oss: FormControl<boolean | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		parallel: FormControl<number | null | undefined>,
		reponame: FormControl<string | null | undefined>,
		setup: FormControl<string | null | undefined>,
		slack_api_token: FormControl<string | null | undefined>,
		slack_channel: FormControl<string | null | undefined>,
		slack_channel_override: FormControl<string | null | undefined>,
		slack_notify_prefs: FormControl<string | null | undefined>,
		slack_subdomain: FormControl<string | null | undefined>,
		slack_webhook_url: FormControl<string | null | undefined>,
		test: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
		vcs_type: FormControl<string | null | undefined>,
		vcs_url: FormControl<string | null | undefined>,
	}
	export function CreateProjectFormGroup() {
		return new FormGroup<ProjectFormProperties>({
			branches: new FormControl<string | null | undefined>(undefined),
			campfire_notify_prefs: new FormControl<string | null | undefined>(undefined),
			campfire_room: new FormControl<string | null | undefined>(undefined),
			campfire_subdomain: new FormControl<string | null | undefined>(undefined),
			campfire_token: new FormControl<string | null | undefined>(undefined),
			compile: new FormControl<string | null | undefined>(undefined),
			default_branch: new FormControl<string | null | undefined>(undefined),
			dependencies: new FormControl<string | null | undefined>(undefined),
			extra: new FormControl<string | null | undefined>(undefined),
			flowdock_api_token: new FormControl<string | null | undefined>(undefined),
			followed: new FormControl<boolean | null | undefined>(undefined),
			has_usable_key: new FormControl<boolean | null | undefined>(undefined),
			heroku_deploy_user: new FormControl<string | null | undefined>(undefined),
			hipchat_api_token: new FormControl<string | null | undefined>(undefined),
			hipchat_notify: new FormControl<string | null | undefined>(undefined),
			hipchat_notify_prefs: new FormControl<string | null | undefined>(undefined),
			hipchat_room: new FormControl<string | null | undefined>(undefined),
			irc_channel: new FormControl<string | null | undefined>(undefined),
			irc_keyword: new FormControl<string | null | undefined>(undefined),
			irc_notify_prefs: new FormControl<string | null | undefined>(undefined),
			irc_password: new FormControl<string | null | undefined>(undefined),
			irc_server: new FormControl<string | null | undefined>(undefined),
			irc_username: new FormControl<string | null | undefined>(undefined),
			language: new FormControl<string | null | undefined>(undefined),
			oss: new FormControl<boolean | null | undefined>(undefined),
			parallel: new FormControl<number | null | undefined>(undefined),
			reponame: new FormControl<string | null | undefined>(undefined),
			setup: new FormControl<string | null | undefined>(undefined),
			slack_api_token: new FormControl<string | null | undefined>(undefined),
			slack_channel: new FormControl<string | null | undefined>(undefined),
			slack_channel_override: new FormControl<string | null | undefined>(undefined),
			slack_notify_prefs: new FormControl<string | null | undefined>(undefined),
			slack_subdomain: new FormControl<string | null | undefined>(undefined),
			slack_webhook_url: new FormControl<string | null | undefined>(undefined),
			test: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
			vcs_type: new FormControl<string | null | undefined>(undefined),
			vcs_url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProjectFeature_flags {
		'build-fork-prs'?: boolean | null;
		fleet?: boolean | null;
		junit?: boolean | null;
		oss?: boolean | null;
		osx?: boolean | null;
		'set-github-status'?: boolean | null;
		'trusty-beta'?: boolean | null;
	}
	export interface ProjectFeature_flagsFormProperties {
		'build-fork-prs': FormControl<boolean | null | undefined>,
		fleet: FormControl<boolean | null | undefined>,
		junit: FormControl<boolean | null | undefined>,
		oss: FormControl<boolean | null | undefined>,
		osx: FormControl<boolean | null | undefined>,
		'set-github-status': FormControl<boolean | null | undefined>,
		'trusty-beta': FormControl<boolean | null | undefined>,
	}
	export function CreateProjectFeature_flagsFormGroup() {
		return new FormGroup<ProjectFeature_flagsFormProperties>({
			'build-fork-prs': new FormControl<boolean | null | undefined>(undefined),
			fleet: new FormControl<boolean | null | undefined>(undefined),
			junit: new FormControl<boolean | null | undefined>(undefined),
			oss: new FormControl<boolean | null | undefined>(undefined),
			osx: new FormControl<boolean | null | undefined>(undefined),
			'set-github-status': new FormControl<boolean | null | undefined>(undefined),
			'trusty-beta': new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum Scope { 'write-settings' = 'write-settings', 'view-builds' = 'view-builds', 'read-settings' = 'read-settings', 'trigger-builds' = 'trigger-builds', all = 'all', status = 'status', none = 'none' }

	export enum Status { retried = 'retried', canceled = 'canceled', infrastructure_fail = 'infrastructure_fail', timedout = 'timedout', not_run = 'not_run', running = 'running', failed = 'failed', queued = 'queued', scheduled = 'scheduled', not_running = 'not_running', no_tests = 'no_tests', fixed = 'fixed', success = 'success' }

	export interface Tests {
		TestsTests?: Array<TestsTests>;
	}
	export interface TestsFormProperties {
	}
	export function CreateTestsFormGroup() {
		return new FormGroup<TestsFormProperties>({
		});

	}

	export interface TestsTests {
		classname?: string | null;
		file?: string | null;
		message?: string | null;
		name?: string | null;
		result?: PreviousBuildStatus | null;

		/** Type: double */
		run_time?: number | null;
		source?: string | null;
	}
	export interface TestsTestsFormProperties {
		classname: FormControl<string | null | undefined>,
		file: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		result: FormControl<PreviousBuildStatus | null | undefined>,

		/** Type: double */
		run_time: FormControl<number | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateTestsTestsFormGroup() {
		return new FormGroup<TestsTestsFormProperties>({
			classname: new FormControl<string | null | undefined>(undefined),
			file: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			result: new FormControl<PreviousBuildStatus | null | undefined>(undefined),
			run_time: new FormControl<number | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Provides information about the signed in user.
		 * Get me
		 * @return {User} signed in user
		 */
		MeGet(headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'me', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Build summary for each of the last 30 builds for a single git repo.
		 * Get project/{username}/{project}
		 * @param {number} limit The number of builds to return. Maximum 100, defaults to 30.
		 *     Maximum: 100
		 * @param {number} offset The API returns builds starting from this offset, defaults to 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @param {Project_username_projectGetByLimitAndOffsetAndFilterFilter} filter Restricts which builds are returned.
		 * Set to "completed", "successful", "failed", "running", or defaults to no filter.
		 * @return {Array<Build>} Build summary for each of the last 30 builds
		 */
		Project_username_projectGetByLimitAndOffsetAndFilter(limit: number | null | undefined, offset: number | null | undefined, filter: Project_username_projectGetByLimitAndOffsetAndFilterFilter | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Build>> {
			return this.http.get<Array<Build>>(this.baseUri + 'project/{username}/{project}?limit=' + limit + '&offset=' + offset + '&filter=' + filter, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Triggers a new build, returns a summary of the build.
		 * Post project/{username}/{project}
		 * @return {void} 
		 */
		Project_username_projectPost(requestBody: Project_username_projectPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'project/{username}/{project}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Clears the cache for a project.
		 * Delete project/{username}/{project}/build-cache
		 * @return {Project_username_projectBuild_cacheDeleteReturn} status message
		 */
		Project_username_projectBuild_cacheDelete(headersHandler?: () => HttpHeaders): Observable<Project_username_projectBuild_cacheDeleteReturn> {
			return this.http.delete<Project_username_projectBuild_cacheDeleteReturn>(this.baseUri + 'project/{username}/{project}/build-cache', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists checkout keys.
		 * Get project/{username}/{project}/checkout-key
		 * @return {Array<Key>} checkout keys
		 */
		Project_username_projectCheckout_keyGet(headersHandler?: () => HttpHeaders): Observable<Array<Key>> {
			return this.http.get<Array<Key>>(this.baseUri + 'project/{username}/{project}/checkout-key', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new checkout key.
		 * Only usable with a user API token.
		 * Post project/{username}/{project}/checkout-key
		 * @param {KeyType} requestBody The type of key to create. Can be 'deploy-key' or 'github-user-key'.
		 * @return {Key} checkout key
		 */
		Project_username_projectCheckout_keyPost(requestBody: KeyType, headersHandler?: () => HttpHeaders): Observable<Key> {
			return this.http.post<Key>(this.baseUri + 'project/{username}/{project}/checkout-key', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete a checkout key.
		 * Delete project/{username}/{project}/checkout-key/{fingerprint}
		 * @return {Project_username_projectCheckout_key_fingerprintDeleteReturn} status message
		 */
		Project_username_projectCheckout_key_fingerprintDelete(headersHandler?: () => HttpHeaders): Observable<Project_username_projectCheckout_key_fingerprintDeleteReturn> {
			return this.http.delete<Project_username_projectCheckout_key_fingerprintDeleteReturn>(this.baseUri + 'project/{username}/{project}/checkout-key/{fingerprint}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a checkout key.
		 * Get project/{username}/{project}/checkout-key/{fingerprint}
		 * @return {Key} checkout key
		 */
		Project_username_projectCheckout_key_fingerprintGet(headersHandler?: () => HttpHeaders): Observable<Key> {
			return this.http.get<Key>(this.baseUri + 'project/{username}/{project}/checkout-key/{fingerprint}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Lists the environment variables for :project
		 * Get project/{username}/{project}/envvar
		 * @return {Array<Envvar>} XXX
		 */
		Project_username_projectEnvvarGet(headersHandler?: () => HttpHeaders): Observable<Array<Envvar>> {
			return this.http.get<Array<Envvar>>(this.baseUri + 'project/{username}/{project}/envvar', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates a new environment variable
		 * Post project/{username}/{project}/envvar
		 * @return {Envvar} XXX
		 */
		Project_username_projectEnvvarPost(headersHandler?: () => HttpHeaders): Observable<Envvar> {
			return this.http.post<Envvar>(this.baseUri + 'project/{username}/{project}/envvar', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Deletes the environment variable named ':name'
		 * Delete project/{username}/{project}/envvar/{name}
		 * @return {Project_username_projectEnvvar_nameDeleteReturn} Deletes the environment variable named ':name'
		 */
		Project_username_projectEnvvar_nameDelete(headersHandler?: () => HttpHeaders): Observable<Project_username_projectEnvvar_nameDeleteReturn> {
			return this.http.delete<Project_username_projectEnvvar_nameDeleteReturn>(this.baseUri + 'project/{username}/{project}/envvar/{name}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Gets the hidden value of environment variable :name
		 * Get project/{username}/{project}/envvar/{name}
		 * @return {Envvar} XXX
		 */
		Project_username_projectEnvvar_nameGet(headersHandler?: () => HttpHeaders): Observable<Envvar> {
			return this.http.get<Envvar>(this.baseUri + 'project/{username}/{project}/envvar/{name}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create an ssh key used to access external systems that require SSH key-based authentication
		 * Post project/{username}/{project}/ssh-key
		 * @return {void} 
		 */
		Project_username_projectSsh_keyPost(requestBody: Project_username_projectSsh_keyPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'project/{username}/{project}/ssh-key', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Triggers a new build, returns a summary of the build.
		 * Optional build parameters can be set using an experimental API.
		 * Note: For more about build parameters, read about [using parameterized builds](https://circleci.com/docs/parameterized-builds/)
		 * Post project/{username}/{project}/tree/{branch}
		 * @return {void} 
		 */
		Project_username_projectTree_branchPost(requestBody: Project_username_projectTree_branchPostPostBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'project/{username}/{project}/tree/{branch}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Full details for a single build. The response includes all of the fields from the build summary.
		 * This is also the payload for the [notification webhooks](/docs/configuration/#notify), in which case this object is the value to a key named 'payload'.
		 * Get project/{username}/{project}/{build_num}
		 * @return {BuildDetail} Full details for a single build
		 */
		Project_username_project_build_numGet(headersHandler?: () => HttpHeaders): Observable<BuildDetail> {
			return this.http.get<BuildDetail>(this.baseUri + 'project/{username}/{project}/{build_num}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List the artifacts produced by a given build.
		 * Get project/{username}/{project}/{build_num}/artifacts
		 * @return {Array<Artifact>} List the artifacts produced by a given build
		 */
		Project_username_project_build_numArtifactsGet(headersHandler?: () => HttpHeaders): Observable<Array<Artifact>> {
			return this.http.get<Array<Artifact>>(this.baseUri + 'project/{username}/{project}/{build_num}/artifacts', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Cancels the build, returns a summary of the build.
		 * Post project/{username}/{project}/{build_num}/cancel
		 * @return {Build} returns a summary of the build
		 */
		Project_username_project_build_numCancelPost(headersHandler?: () => HttpHeaders): Observable<Build> {
			return this.http.post<Build>(this.baseUri + 'project/{username}/{project}/{build_num}/cancel', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Retries the build, returns a summary of the new build.
		 * Post project/{username}/{project}/{build_num}/retry
		 * @return {Build} returns a summary of the new build
		 */
		Project_username_project_build_numRetryPost(headersHandler?: () => HttpHeaders): Observable<Build> {
			return this.http.post<Build>(this.baseUri + 'project/{username}/{project}/{build_num}/retry', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Provides test metadata for a build
		 * Note: [Learn how to set up your builds to collect test metadata](https://circleci.com/docs/test-metadata/)
		 * Get project/{username}/{project}/{build_num}/tests
		 * @return {Tests} test metadata for a build
		 */
		Project_username_project_build_numTestsGet(headersHandler?: () => HttpHeaders): Observable<Tests> {
			return this.http.get<Tests>(this.baseUri + 'project/{username}/{project}/{build_num}/tests', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List of all the projects you're following on CircleCI, with build information organized by branch.
		 * Get projects
		 * @return {Array<Project>} List of all the projects you're following on CircleCI
		 */
		ProjectsGet(headersHandler?: () => HttpHeaders): Observable<Array<Project>> {
			return this.http.get<Array<Project>>(this.baseUri + 'projects', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Build summary for each of the last 30 recent builds, ordered by build_num.
		 * Get recent-builds
		 * @param {number} limit The number of builds to return. Maximum 100, defaults to 30.
		 *     Maximum: 100
		 * @param {number} offset The API returns builds starting from this offset, defaults to 0.
		 *     Type: int, -2,147,483,648 to 2,147,483,647
		 * @return {Array<Build>} Build summary for each of the last 30 recent builds
		 */
		Recent_buildsGetByLimitAndOffset(limit: number | null | undefined, offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Build>> {
			return this.http.get<Array<Build>>(this.baseUri + 'recent-builds?limit=' + limit + '&offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Adds your Heroku API key to CircleCI, takes apikey as form param name.
		 * Post user/heroku-key
		 * @return {void} 
		 */
		UserHeroku_keyPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'user/heroku-key', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum Project_username_projectGetByLimitAndOffsetAndFilterFilter { completed = 'completed', successful = 'successful', failed = 'failed', running = 'running' }

	export interface Project_username_projectPostPostBody {

		/**
		 * Additional environment variables to inject into the build environment. A map of names to values.
		 */
		build_parameters?: BuildParameters;

		/**
		 * The number of containers to use to run the build. Default is null and the project default is used.
		 */
		parallel?: string | null;

		/**
		 * The specific revision to build.
		 * Default is null and the head of the branch is used. Cannot be used with tag parameter.
		 */
		revision?: string | null;

		/**
		 * The tag to build. Default is null. Cannot be used with revision parameter.
		 */
		tag?: string | null;
	}
	export interface Project_username_projectPostPostBodyFormProperties {

		/**
		 * The number of containers to use to run the build. Default is null and the project default is used.
		 */
		parallel: FormControl<string | null | undefined>,

		/**
		 * The specific revision to build.
		 * Default is null and the head of the branch is used. Cannot be used with tag parameter.
		 */
		revision: FormControl<string | null | undefined>,

		/**
		 * The tag to build. Default is null. Cannot be used with revision parameter.
		 */
		tag: FormControl<string | null | undefined>,
	}
	export function CreateProject_username_projectPostPostBodyFormGroup() {
		return new FormGroup<Project_username_projectPostPostBodyFormProperties>({
			parallel: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
			tag: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Project_username_projectBuild_cacheDeleteReturn {
		status?: string | null;
	}
	export interface Project_username_projectBuild_cacheDeleteReturnFormProperties {
		status: FormControl<string | null | undefined>,
	}
	export function CreateProject_username_projectBuild_cacheDeleteReturnFormGroup() {
		return new FormGroup<Project_username_projectBuild_cacheDeleteReturnFormProperties>({
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Project_username_projectCheckout_key_fingerprintDeleteReturn {
		message?: Project_username_projectCheckout_key_fingerprintDeleteReturnMessage | null;
	}
	export interface Project_username_projectCheckout_key_fingerprintDeleteReturnFormProperties {
		message: FormControl<Project_username_projectCheckout_key_fingerprintDeleteReturnMessage | null | undefined>,
	}
	export function CreateProject_username_projectCheckout_key_fingerprintDeleteReturnFormGroup() {
		return new FormGroup<Project_username_projectCheckout_key_fingerprintDeleteReturnFormProperties>({
			message: new FormControl<Project_username_projectCheckout_key_fingerprintDeleteReturnMessage | null | undefined>(undefined),
		});

	}

	export enum Project_username_projectCheckout_key_fingerprintDeleteReturnMessage { OK = 'OK' }

	export interface Project_username_projectEnvvar_nameDeleteReturn {
		message?: Project_username_projectCheckout_key_fingerprintDeleteReturnMessage | null;
	}
	export interface Project_username_projectEnvvar_nameDeleteReturnFormProperties {
		message: FormControl<Project_username_projectCheckout_key_fingerprintDeleteReturnMessage | null | undefined>,
	}
	export function CreateProject_username_projectEnvvar_nameDeleteReturnFormGroup() {
		return new FormGroup<Project_username_projectEnvvar_nameDeleteReturnFormProperties>({
			message: new FormControl<Project_username_projectCheckout_key_fingerprintDeleteReturnMessage | null | undefined>(undefined),
		});

	}

	export enum Project_username_projectSsh_keyPostContent_Type { 'application/json' = 'application/json' }

	export interface Project_username_projectSsh_keyPostPostBody {
		hostname?: string | null;
		private_key?: string | null;
	}
	export interface Project_username_projectSsh_keyPostPostBodyFormProperties {
		hostname: FormControl<string | null | undefined>,
		private_key: FormControl<string | null | undefined>,
	}
	export function CreateProject_username_projectSsh_keyPostPostBodyFormGroup() {
		return new FormGroup<Project_username_projectSsh_keyPostPostBodyFormProperties>({
			hostname: new FormControl<string | null | undefined>(undefined),
			private_key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Project_username_projectTree_branchPostPostBody {

		/**
		 * Additional environment variables to inject into the build environment. A map of names to values.
		 */
		build_parameters?: BuildParameters;

		/**
		 * The number of containers to use to run the build. Default is null and the project default is used.
		 */
		parallel?: string | null;

		/**
		 * The specific revision to build.
		 * Default is null and the head of the branch is used. Cannot be used with tag parameter.
		 */
		revision?: string | null;
	}
	export interface Project_username_projectTree_branchPostPostBodyFormProperties {

		/**
		 * The number of containers to use to run the build. Default is null and the project default is used.
		 */
		parallel: FormControl<string | null | undefined>,

		/**
		 * The specific revision to build.
		 * Default is null and the head of the branch is used. Cannot be used with tag parameter.
		 */
		revision: FormControl<string | null | undefined>,
	}
	export function CreateProject_username_projectTree_branchPostPostBodyFormGroup() {
		return new FormGroup<Project_username_projectTree_branchPostPostBodyFormProperties>({
			parallel: new FormControl<string | null | undefined>(undefined),
			revision: new FormControl<string | null | undefined>(undefined),
		});

	}

}

