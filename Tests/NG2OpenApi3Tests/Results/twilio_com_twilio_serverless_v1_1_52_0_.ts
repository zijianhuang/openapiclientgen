import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum Asset_version_enum_visibility { public = 'public', private = 'private', protected = 'protected' }

	export enum Build_enum_runtime { node8 = 'node8', node10 = 'node10', node12 = 'node12', node14 = 'node14', node16 = 'node16', node18 = 'node18' }

	export enum Build_enum_status { building = 'building', completed = 'completed', failed = 'failed' }

	export enum Build_status_enum_status { building = 'building', completed = 'completed', failed = 'failed' }

	export enum Function_version_enum_visibility { public = 'public', private = 'private', protected = 'protected' }

	export enum Log_enum_level { info = 'info', warn = 'warn', error = 'error' }

	export interface Serverlessv1service {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the Service resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Service resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The base domain name for this Service, which is a combination of the unique name and a randomly generated string. */
		domain_base?: string | null;

		/** The string that you assigned to describe the Service resource. */
		friendly_name?: string | null;

		/** Whether to inject Account credentials into a function invocation context. */
		include_credentials?: boolean | null;

		/** The URLs of the Service's nested resources. */
		links?: string | null;

		/**
		 * The unique string that we created to identify the Service resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** Whether the Service resource's properties and subresources can be edited via the UI. */
		ui_editable?: boolean | null;

		/** A user-defined string that uniquely identifies the Service resource. It can be used in place of the Service resource's `sid` in the URL to address the Service resource. */
		unique_name?: string | null;

		/** The absolute URL of the Service resource. */
		url?: string | null;
	}
	export interface Serverlessv1serviceFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Service resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Service resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Service resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The base domain name for this Service, which is a combination of the unique name and a randomly generated string. */
		domain_base: FormControl<string | null | undefined>,

		/** The string that you assigned to describe the Service resource. */
		friendly_name: FormControl<string | null | undefined>,

		/** Whether to inject Account credentials into a function invocation context. */
		include_credentials: FormControl<boolean | null | undefined>,

		/** The URLs of the Service's nested resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Service resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** Whether the Service resource's properties and subresources can be edited via the UI. */
		ui_editable: FormControl<boolean | null | undefined>,

		/** A user-defined string that uniquely identifies the Service resource. It can be used in place of the Service resource's `sid` in the URL to address the Service resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Service resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServerlessv1serviceFormGroup() {
		return new FormGroup<Serverlessv1serviceFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			domain_base: new FormControl<string | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			include_credentials: new FormControl<boolean | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			ui_editable: new FormControl<boolean | null | undefined>(undefined),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1serviceasset {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Asset resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the Asset resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Asset resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the Asset resource. It can be a maximum of 255 characters. */
		friendly_name?: string | null;

		/** The URLs of the Asset resource's nested resources. */
		links?: string | null;

		/**
		 * The SID of the Service that the Asset resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Asset resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Asset resource. */
		url?: string | null;
	}
	export interface Serverlessv1serviceassetFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Asset resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Asset resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Asset resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the Asset resource. It can be a maximum of 255 characters. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of the Asset resource's nested resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The SID of the Service that the Asset resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Asset resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Asset resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServerlessv1serviceassetFormGroup() {
		return new FormGroup<Serverlessv1serviceassetFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZH[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1serviceassetasset_version {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Asset Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the Asset resource that is the parent of the Asset Version.
		 * Min length: 34
		 * Max length: 34
		 */
		asset_sid?: string | null;

		/** The date and time in GMT when the Asset Version resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The URL-friendly string by which the Asset Version can be referenced. It can be a maximum of 255 characters. All paths begin with a forward slash ('/'). If an Asset Version creation request is submitted with a path not containing a leading slash, the path will automatically be prepended with one. */
		path?: string | null;

		/**
		 * The SID of the Service that the Asset Version resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Asset Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Asset Version resource. */
		url?: string | null;
		visibility?: Asset_version_enum_visibility | null;
	}
	export interface Serverlessv1serviceassetasset_versionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Asset Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Asset resource that is the parent of the Asset Version.
		 * Min length: 34
		 * Max length: 34
		 */
		asset_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Asset Version resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The URL-friendly string by which the Asset Version can be referenced. It can be a maximum of 255 characters. All paths begin with a forward slash ('/'). If an Asset Version creation request is submitted with a path not containing a leading slash, the path will automatically be prepended with one. */
		path: FormControl<string | null | undefined>,

		/**
		 * The SID of the Service that the Asset Version resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Asset Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Asset Version resource. */
		url: FormControl<string | null | undefined>,
		visibility: FormControl<Asset_version_enum_visibility | null | undefined>,
	}
	export function CreateServerlessv1serviceassetasset_versionFormGroup() {
		return new FormGroup<Serverlessv1serviceassetasset_versionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			asset_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZH[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZN[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<Asset_version_enum_visibility | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1servicebuild {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Build resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The list of Asset Version resource SIDs that are included in the Build. */
		asset_versions?: Array<string>;

		/** The date and time in GMT when the Build resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Build resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** A list of objects that describe the Dependencies included in the Build. Each object contains the `name` and `version` of the dependency. */
		dependencies?: Array<string>;

		/** The list of Function Version resource SIDs that are included in the Build. */
		function_versions?: Array<string>;
		links?: string | null;
		runtime?: Build_enum_runtime | null;

		/**
		 * The SID of the Service that the Build resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Build resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
		status?: Build_enum_status | null;

		/** The absolute URL of the Build resource. */
		url?: string | null;
	}
	export interface Serverlessv1servicebuildFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Build resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Build resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Build resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,
		links: FormControl<string | null | undefined>,
		runtime: FormControl<Build_enum_runtime | null | undefined>,

		/**
		 * The SID of the Service that the Build resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Build resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Build_enum_status | null | undefined>,

		/** The absolute URL of the Build resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServerlessv1servicebuildFormGroup() {
		return new FormGroup<Serverlessv1servicebuildFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			runtime: new FormControl<Build_enum_runtime | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZB[0-9a-fA-F]{32}$')]),
			status: new FormControl<Build_enum_status | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1servicebuildbuild_status {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Build resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the Service that the Build resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Build resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
		status?: Build_enum_status | null;

		/** The absolute URL of the Build Status resource. */
		url?: string | null;
	}
	export interface Serverlessv1servicebuildbuild_statusFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Build resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Service that the Build resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Build resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
		status: FormControl<Build_enum_status | null | undefined>,

		/** The absolute URL of the Build Status resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServerlessv1servicebuildbuild_statusFormGroup() {
		return new FormGroup<Serverlessv1servicebuildbuild_statusFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZB[0-9a-fA-F]{32}$')]),
			status: new FormControl<Build_enum_status | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1serviceenvironment {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Environment resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the build deployed in the environment.
		 * Min length: 34
		 * Max length: 34
		 */
		build_sid?: string | null;

		/** The date and time in GMT when the Environment resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Environment resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The domain name for all Functions and Assets deployed in the Environment, using the Service unique name, a randomly-generated Service suffix, and an optional Environment domain suffix. */
		domain_name?: string | null;

		/** A URL-friendly name that represents the environment and forms part of the domain name. */
		domain_suffix?: string | null;

		/** The URLs of the Environment resource's nested resources. */
		links?: string | null;

		/**
		 * The SID of the Service that the Environment resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Environment resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** A user-defined string that uniquely identifies the Environment resource. */
		unique_name?: string | null;

		/** The absolute URL of the Environment resource. */
		url?: string | null;
	}
	export interface Serverlessv1serviceenvironmentFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Environment resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the build deployed in the environment.
		 * Min length: 34
		 * Max length: 34
		 */
		build_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Environment resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Environment resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The domain name for all Functions and Assets deployed in the Environment, using the Service unique name, a randomly-generated Service suffix, and an optional Environment domain suffix. */
		domain_name: FormControl<string | null | undefined>,

		/** A URL-friendly name that represents the environment and forms part of the domain name. */
		domain_suffix: FormControl<string | null | undefined>,

		/** The URLs of the Environment resource's nested resources. */
		links: FormControl<string | null | undefined>,

		/**
		 * The SID of the Service that the Environment resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Environment resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** A user-defined string that uniquely identifies the Environment resource. */
		unique_name: FormControl<string | null | undefined>,

		/** The absolute URL of the Environment resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServerlessv1serviceenvironmentFormGroup() {
		return new FormGroup<Serverlessv1serviceenvironmentFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			build_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZB[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			domain_name: new FormControl<string | null | undefined>(undefined),
			domain_suffix: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZE[0-9a-fA-F]{32}$')]),
			unique_name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1serviceenvironmentdeployment {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Deployment resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the Build for the deployment.
		 * Min length: 34
		 * Max length: 34
		 */
		build_sid?: string | null;

		/** The date and time in GMT when the Deployment resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Deployment resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/**
		 * The SID of the Environment for the Deployment.
		 * Min length: 34
		 * Max length: 34
		 */
		environment_sid?: string | null;

		/**
		 * The SID of the Service that the Deployment resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Deployment resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Deployment resource. */
		url?: string | null;
	}
	export interface Serverlessv1serviceenvironmentdeploymentFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Deployment resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Build for the deployment.
		 * Min length: 34
		 * Max length: 34
		 */
		build_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Deployment resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Deployment resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the Environment for the Deployment.
		 * Min length: 34
		 * Max length: 34
		 */
		environment_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Service that the Deployment resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Deployment resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Deployment resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServerlessv1serviceenvironmentdeploymentFormGroup() {
		return new FormGroup<Serverlessv1serviceenvironmentdeploymentFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			build_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZB[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			environment_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZE[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZD[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1serviceenvironmentlog {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Log resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/**
		 * The SID of the build that corresponds to the log.
		 * Min length: 34
		 * Max length: 34
		 */
		build_sid?: string | null;

		/** The date and time in GMT when the Log resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/**
		 * The SID of the deployment that corresponds to the log.
		 * Min length: 34
		 * Max length: 34
		 */
		deployment_sid?: string | null;

		/**
		 * The SID of the environment in which the log occurred.
		 * Min length: 34
		 * Max length: 34
		 */
		environment_sid?: string | null;

		/**
		 * The SID of the function whose invocation produced the log.
		 * Min length: 34
		 * Max length: 34
		 */
		function_sid?: string | null;
		level?: Log_enum_level | null;

		/** The log message. */
		message?: string | null;

		/**
		 * The SID of the request associated with the log.
		 * Min length: 34
		 * Max length: 34
		 */
		request_sid?: string | null;

		/**
		 * The SID of the Service that the Log resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Log resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Log resource. */
		url?: string | null;
	}
	export interface Serverlessv1serviceenvironmentlogFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Log resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the build that corresponds to the log.
		 * Min length: 34
		 * Max length: 34
		 */
		build_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Log resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/**
		 * The SID of the deployment that corresponds to the log.
		 * Min length: 34
		 * Max length: 34
		 */
		deployment_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the environment in which the log occurred.
		 * Min length: 34
		 * Max length: 34
		 */
		environment_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the function whose invocation produced the log.
		 * Min length: 34
		 * Max length: 34
		 */
		function_sid: FormControl<string | null | undefined>,
		level: FormControl<Log_enum_level | null | undefined>,

		/** The log message. */
		message: FormControl<string | null | undefined>,

		/**
		 * The SID of the request associated with the log.
		 * Min length: 34
		 * Max length: 34
		 */
		request_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Service that the Log resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Log resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Log resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServerlessv1serviceenvironmentlogFormGroup() {
		return new FormGroup<Serverlessv1serviceenvironmentlogFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			build_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZB[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			deployment_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZD[0-9a-fA-F]{32}$')]),
			environment_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZE[0-9a-fA-F]{32}$')]),
			function_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZH[0-9a-fA-F]{32}$')]),
			level: new FormControl<Log_enum_level | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			request_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^RQ[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^NO[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1serviceenvironmentvariable {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Variable resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the Variable resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Variable resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/**
		 * The SID of the Environment in which the Variable exists.
		 * Min length: 34
		 * Max length: 34
		 */
		environment_sid?: string | null;

		/** A string by which the Variable resource can be referenced. */
		key?: string | null;

		/**
		 * The SID of the Service that the Variable resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Variable resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Variable resource. */
		url?: string | null;

		/** A string that contains the actual value of the Variable. */
		value?: string | null;
	}
	export interface Serverlessv1serviceenvironmentvariableFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Variable resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Variable resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Variable resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/**
		 * The SID of the Environment in which the Variable exists.
		 * Min length: 34
		 * Max length: 34
		 */
		environment_sid: FormControl<string | null | undefined>,

		/** A string by which the Variable resource can be referenced. */
		key: FormControl<string | null | undefined>,

		/**
		 * The SID of the Service that the Variable resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Variable resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Variable resource. */
		url: FormControl<string | null | undefined>,

		/** A string that contains the actual value of the Variable. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateServerlessv1serviceenvironmentvariableFormGroup() {
		return new FormGroup<Serverlessv1serviceenvironmentvariableFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			environment_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZE[0-9a-fA-F]{32}$')]),
			key: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZV[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1servicefunction {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the Function resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/** The date and time in GMT when the Function resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated?: Date | null;

		/** The string that you assigned to describe the Function resource. It can be a maximum of 255 characters. */
		friendly_name?: string | null;

		/** The URLs of nested resources of the Function resource. */
		links?: string | null;

		/**
		 * The SID of the Service that the Function resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Function resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Function resource. */
		url?: string | null;
	}
	export interface Serverlessv1servicefunctionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Function resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/** The date and time in GMT when the Function resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_updated: FormControl<Date | null | undefined>,

		/** The string that you assigned to describe the Function resource. It can be a maximum of 255 characters. */
		friendly_name: FormControl<string | null | undefined>,

		/** The URLs of nested resources of the Function resource. */
		links: FormControl<string | null | undefined>,

		/**
		 * The SID of the Service that the Function resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Function resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Function resource. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateServerlessv1servicefunctionFormGroup() {
		return new FormGroup<Serverlessv1servicefunctionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			date_updated: new FormControl<Date | null | undefined>(undefined),
			friendly_name: new FormControl<string | null | undefined>(undefined),
			links: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZH[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1servicefunctionfunction_version {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The date and time in GMT when the Function Version resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created?: Date | null;

		/**
		 * The SID of the Function resource that is the parent of the Function Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		function_sid?: string | null;
		links?: string | null;

		/** The URL-friendly string by which the Function Version resource can be referenced. It can be a maximum of 255 characters. All paths begin with a forward slash ('/'). If a Function Version creation request is submitted with a path not containing a leading slash, the path will automatically be prepended with one. */
		path?: string | null;

		/**
		 * The SID of the Service that the Function Version resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Function Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;

		/** The absolute URL of the Function Version resource. */
		url?: string | null;
		visibility?: Asset_version_enum_visibility | null;
	}
	export interface Serverlessv1servicefunctionfunction_versionFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The date and time in GMT when the Function Version resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. */
		date_created: FormControl<Date | null | undefined>,

		/**
		 * The SID of the Function resource that is the parent of the Function Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		function_sid: FormControl<string | null | undefined>,
		links: FormControl<string | null | undefined>,

		/** The URL-friendly string by which the Function Version resource can be referenced. It can be a maximum of 255 characters. All paths begin with a forward slash ('/'). If a Function Version creation request is submitted with a path not containing a leading slash, the path will automatically be prepended with one. */
		path: FormControl<string | null | undefined>,

		/**
		 * The SID of the Service that the Function Version resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Function Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,

		/** The absolute URL of the Function Version resource. */
		url: FormControl<string | null | undefined>,
		visibility: FormControl<Asset_version_enum_visibility | null | undefined>,
	}
	export function CreateServerlessv1servicefunctionfunction_versionFormGroup() {
		return new FormGroup<Serverlessv1servicefunctionfunction_versionFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			date_created: new FormControl<Date | null | undefined>(undefined),
			function_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZH[0-9a-fA-F]{32}$')]),
			links: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZN[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
			visibility: new FormControl<Asset_version_enum_visibility | null | undefined>(undefined),
		});

	}

	export interface Serverlessv1servicefunctionfunction_versionfunction_version_content {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid?: string | null;

		/** The content of the Function Version resource. */
		content?: string | null;

		/**
		 * The SID of the Function that is the parent of the Function Version.
		 * Min length: 34
		 * Max length: 34
		 */
		function_sid?: string | null;

		/**
		 * The SID of the Service that the Function Version resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid?: string | null;

		/**
		 * The unique string that we created to identify the Function Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid?: string | null;
		url?: string | null;
	}
	export interface Serverlessv1servicefunctionfunction_versionfunction_version_contentFormProperties {

		/**
		 * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Function Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		account_sid: FormControl<string | null | undefined>,

		/** The content of the Function Version resource. */
		content: FormControl<string | null | undefined>,

		/**
		 * The SID of the Function that is the parent of the Function Version.
		 * Min length: 34
		 * Max length: 34
		 */
		function_sid: FormControl<string | null | undefined>,

		/**
		 * The SID of the Service that the Function Version resource is associated with.
		 * Min length: 34
		 * Max length: 34
		 */
		service_sid: FormControl<string | null | undefined>,

		/**
		 * The unique string that we created to identify the Function Version resource.
		 * Min length: 34
		 * Max length: 34
		 */
		sid: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateServerlessv1servicefunctionfunction_versionfunction_version_contentFormGroup() {
		return new FormGroup<Serverlessv1servicefunctionfunction_versionfunction_version_contentFormProperties>({
			account_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^AC[0-9a-fA-F]{32}$')]),
			content: new FormControl<string | null | undefined>(undefined),
			function_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZH[0-9a-fA-F]{32}$')]),
			service_sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZS[0-9a-fA-F]{32}$')]),
			sid: new FormControl<string | null | undefined>(undefined, [Validators.minLength(34), Validators.maxLength(34), Validators.pattern('^ZN[0-9a-fA-F]{32}$')]),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Retrieve a list of all Services.
		 * Get v1/Services
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListServiceReturn} OK
		 */
		ListService(PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListServiceReturn> {
			return this.http.get<ListServiceReturn>(this.baseUri + 'v1/Services?PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a list of all Assets.
		 * Get v1/Services/{ServiceSid}/Assets
		 * @param {string} ServiceSid The SID of the Service to read the Asset resources from.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListAssetReturn} OK
		 */
		ListAsset(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListAssetReturn> {
			return this.http.get<ListAssetReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Assets&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a list of all Asset Versions.
		 * Get v1/Services/{ServiceSid}/Assets/{AssetSid}/Versions
		 * @param {string} ServiceSid The SID of the Service to read the Asset Version resource from.
		 * @param {string} AssetSid The SID of the Asset resource that is the parent of the Asset Version resources to read.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListAssetVersionReturn} OK
		 */
		ListAssetVersion(ServiceSid: string, AssetSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListAssetVersionReturn> {
			return this.http.get<ListAssetVersionReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Assets/' + (AssetSid == null ? '' : encodeURIComponent(AssetSid)) + '/Versions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a specific Asset Version.
		 * Get v1/Services/{ServiceSid}/Assets/{AssetSid}/Versions/{Sid}
		 * @param {string} ServiceSid The SID of the Service to fetch the Asset Version resource from.
		 * @param {string} AssetSid The SID of the Asset resource that is the parent of the Asset Version resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The SID of the Asset Version resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1serviceassetasset_version} OK
		 */
		FetchAssetVersion(ServiceSid: string, AssetSid: string, Sid: string): Observable<Serverlessv1serviceassetasset_version> {
			return this.http.get<Serverlessv1serviceassetasset_version>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Assets/' + (AssetSid == null ? '' : encodeURIComponent(AssetSid)) + '/Versions/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete an Asset resource.
		 * Delete v1/Services/{ServiceSid}/Assets/{Sid}
		 * @param {string} ServiceSid The SID of the Service to delete the Asset resource from.
		 * @param {string} Sid The SID that identifies the Asset resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteAsset(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Assets/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a specific Asset resource.
		 * Get v1/Services/{ServiceSid}/Assets/{Sid}
		 * @param {string} ServiceSid The SID of the Service to fetch the Asset resource from.
		 * @param {string} Sid The SID that identifies the Asset resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1serviceasset} OK
		 */
		FetchAsset(ServiceSid: string, Sid: string): Observable<Serverlessv1serviceasset> {
			return this.http.get<Serverlessv1serviceasset>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Assets/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Builds.
		 * Get v1/Services/{ServiceSid}/Builds
		 * @param {string} ServiceSid The SID of the Service to read the Build resources from.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListBuildReturn} OK
		 */
		ListBuild(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListBuildReturn> {
			return this.http.get<ListBuildReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Builds&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a Build resource.
		 * Delete v1/Services/{ServiceSid}/Builds/{Sid}
		 * @param {string} ServiceSid The SID of the Service to delete the Build resource from.
		 * @param {string} Sid The SID of the Build resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteBuild(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Builds/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a specific Build resource.
		 * Get v1/Services/{ServiceSid}/Builds/{Sid}
		 * @param {string} ServiceSid The SID of the Service to fetch the Build resource from.
		 * @param {string} Sid The SID of the Build resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1servicebuild} OK
		 */
		FetchBuild(ServiceSid: string, Sid: string): Observable<Serverlessv1servicebuild> {
			return this.http.get<Serverlessv1servicebuild>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Builds/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a specific Build resource.
		 * Get v1/Services/{ServiceSid}/Builds/{Sid}/Status
		 * @param {string} ServiceSid The SID of the Service to fetch the Build resource from.
		 * @param {string} Sid The SID of the Build resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1servicebuildbuild_status} OK
		 */
		FetchBuildStatus(ServiceSid: string, Sid: string): Observable<Serverlessv1servicebuildbuild_status> {
			return this.http.get<Serverlessv1servicebuildbuild_status>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Builds/' + (Sid == null ? '' : encodeURIComponent(Sid)) + '/Status', {});
		}

		/**
		 * Retrieve a list of all environments.
		 * Get v1/Services/{ServiceSid}/Environments
		 * @param {string} ServiceSid The SID of the Service to read the Environment resources from.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListEnvironmentReturn} OK
		 */
		ListEnvironment(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListEnvironmentReturn> {
			return this.http.get<ListEnvironmentReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Environments&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a list of all Deployments.
		 * Get v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments
		 * @param {string} ServiceSid The SID of the Service to read the Deployment resources from.
		 * @param {string} EnvironmentSid The SID of the Environment used by the Deployment resources to read.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListDeploymentReturn} OK
		 */
		ListDeployment(ServiceSid: string, EnvironmentSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListDeploymentReturn> {
			return this.http.get<ListDeploymentReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Environments/' + (EnvironmentSid == null ? '' : encodeURIComponent(EnvironmentSid)) + '/Deployments&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a specific Deployment.
		 * Get v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Deployments/{Sid}
		 * @param {string} ServiceSid The SID of the Service to fetch the Deployment resource from.
		 * @param {string} EnvironmentSid The SID of the Environment used by the Deployment to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The SID that identifies the Deployment resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1serviceenvironmentdeployment} OK
		 */
		FetchDeployment(ServiceSid: string, EnvironmentSid: string, Sid: string): Observable<Serverlessv1serviceenvironmentdeployment> {
			return this.http.get<Serverlessv1serviceenvironmentdeployment>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Environments/' + (EnvironmentSid == null ? '' : encodeURIComponent(EnvironmentSid)) + '/Deployments/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all logs.
		 * Get v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Logs
		 * @param {string} ServiceSid The SID of the Service to read the Log resource from.
		 * @param {string} EnvironmentSid The SID of the environment with the Log resources to read.
		 *     Min length: 34    Max length: 34
		 * @param {string} FunctionSid The SID of the function whose invocation produced the Log resources to read.
		 *     Min length: 34    Max length: 34
		 * @param {Date} StartDate The date/time (in GMT, ISO 8601) after which the Log resources must have been created. Defaults to 1 day prior to current date/time.
		 * @param {Date} EndDate The date/time (in GMT, ISO 8601) before which the Log resources must have been created. Defaults to current date/time.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListLogReturn} OK
		 */
		ListLog(ServiceSid: string, EnvironmentSid: string, FunctionSid: string | null | undefined, StartDate: Date | null | undefined, EndDate: Date | null | undefined, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListLogReturn> {
			return this.http.get<ListLogReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Environments/' + (EnvironmentSid == null ? '' : encodeURIComponent(EnvironmentSid)) + '/Logs&FunctionSid=' + (FunctionSid == null ? '' : encodeURIComponent(FunctionSid)) + '&StartDate=' + StartDate?.toISOString() + '&EndDate=' + EndDate?.toISOString() + '&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a specific log.
		 * Get v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Logs/{Sid}
		 * @param {string} ServiceSid The SID of the Service to fetch the Log resource from.
		 * @param {string} EnvironmentSid The SID of the environment with the Log resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The SID of the Log resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1serviceenvironmentlog} OK
		 */
		FetchLog(ServiceSid: string, EnvironmentSid: string, Sid: string): Observable<Serverlessv1serviceenvironmentlog> {
			return this.http.get<Serverlessv1serviceenvironmentlog>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Environments/' + (EnvironmentSid == null ? '' : encodeURIComponent(EnvironmentSid)) + '/Logs/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Variables.
		 * Get v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables
		 * @param {string} ServiceSid The SID of the Service to read the Variable resources from.
		 * @param {string} EnvironmentSid The SID of the Environment with the Variable resources to read.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListVariableReturn} OK
		 */
		ListVariable(ServiceSid: string, EnvironmentSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListVariableReturn> {
			return this.http.get<ListVariableReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Environments/' + (EnvironmentSid == null ? '' : encodeURIComponent(EnvironmentSid)) + '/Variables&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Delete a specific Variable.
		 * Delete v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables/{Sid}
		 * @param {string} ServiceSid The SID of the Service to delete the Variable resource from.
		 * @param {string} EnvironmentSid The SID of the Environment with the Variables to delete.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The SID of the Variable resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteVariable(ServiceSid: string, EnvironmentSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Environments/' + (EnvironmentSid == null ? '' : encodeURIComponent(EnvironmentSid)) + '/Variables/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a specific Variable.
		 * Get v1/Services/{ServiceSid}/Environments/{EnvironmentSid}/Variables/{Sid}
		 * @param {string} ServiceSid The SID of the Service to fetch the Variable resource from.
		 * @param {string} EnvironmentSid The SID of the Environment with the Variable resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The SID of the Variable resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1serviceenvironmentvariable} OK
		 */
		FetchVariable(ServiceSid: string, EnvironmentSid: string, Sid: string): Observable<Serverlessv1serviceenvironmentvariable> {
			return this.http.get<Serverlessv1serviceenvironmentvariable>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Environments/' + (EnvironmentSid == null ? '' : encodeURIComponent(EnvironmentSid)) + '/Variables/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete a specific environment.
		 * Delete v1/Services/{ServiceSid}/Environments/{Sid}
		 * @param {string} ServiceSid The SID of the Service to delete the Environment resource from.
		 * @param {string} Sid The SID of the Environment resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteEnvironment(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Environments/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a specific environment.
		 * Get v1/Services/{ServiceSid}/Environments/{Sid}
		 * @param {string} ServiceSid The SID of the Service to fetch the Environment resource from.
		 * @param {string} Sid The SID of the Environment resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1serviceenvironment} OK
		 */
		FetchEnvironment(ServiceSid: string, Sid: string): Observable<Serverlessv1serviceenvironment> {
			return this.http.get<Serverlessv1serviceenvironment>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Environments/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a list of all Functions.
		 * Get v1/Services/{ServiceSid}/Functions
		 * @param {string} ServiceSid The SID of the Service to read the Function resources from.
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListFunctionReturn} OK
		 */
		ListFunction(ServiceSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListFunctionReturn> {
			return this.http.get<ListFunctionReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Functions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a list of all Function Version resources.
		 * Get v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions
		 * @param {string} ServiceSid The SID of the Service to read the Function Version resources from.
		 * @param {string} FunctionSid The SID of the function that is the parent of the Function Version resources to read.
		 *     Min length: 34    Max length: 34
		 * @param {number} PageSize How many resources to return in each list page. The default is 50, and the maximum is 1000.
		 *     Minimum: 1    Maximum: 1000
		 * @param {number} Page The page index. This value is simply for client state.
		 *     Minimum: 0
		 * @param {string} PageToken The page token. This is provided by the API.
		 * @return {ListFunctionVersionReturn} OK
		 */
		ListFunctionVersion(ServiceSid: string, FunctionSid: string, PageSize: number | null | undefined, Page: number | null | undefined, PageToken: string | null | undefined): Observable<ListFunctionVersionReturn> {
			return this.http.get<ListFunctionVersionReturn>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Functions/' + (FunctionSid == null ? '' : encodeURIComponent(FunctionSid)) + '/Versions&PageSize=' + PageSize + '&Page=' + Page + '&PageToken=' + (PageToken == null ? '' : encodeURIComponent(PageToken)), {});
		}

		/**
		 * Retrieve a specific Function Version resource.
		 * Get v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions/{Sid}
		 * @param {string} ServiceSid The SID of the Service to fetch the Function Version resource from.
		 * @param {string} FunctionSid The SID of the function that is the parent of the Function Version resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The SID of the Function Version resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1servicefunctionfunction_version} OK
		 */
		FetchFunctionVersion(ServiceSid: string, FunctionSid: string, Sid: string): Observable<Serverlessv1servicefunctionfunction_version> {
			return this.http.get<Serverlessv1servicefunctionfunction_version>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Functions/' + (FunctionSid == null ? '' : encodeURIComponent(FunctionSid)) + '/Versions/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Retrieve a the content of a specific Function Version resource.
		 * Get v1/Services/{ServiceSid}/Functions/{FunctionSid}/Versions/{Sid}/Content
		 * @param {string} ServiceSid The SID of the Service to fetch the Function Version content from.
		 * @param {string} FunctionSid The SID of the Function that is the parent of the Function Version content to fetch.
		 *     Min length: 34    Max length: 34
		 * @param {string} Sid The SID of the Function Version content to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1servicefunctionfunction_versionfunction_version_content} OK
		 */
		FetchFunctionVersionContent(ServiceSid: string, FunctionSid: string, Sid: string): Observable<Serverlessv1servicefunctionfunction_versionfunction_version_content> {
			return this.http.get<Serverlessv1servicefunctionfunction_versionfunction_version_content>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Functions/' + (FunctionSid == null ? '' : encodeURIComponent(FunctionSid)) + '/Versions/' + (Sid == null ? '' : encodeURIComponent(Sid)) + '/Content', {});
		}

		/**
		 * Delete a Function resource.
		 * Delete v1/Services/{ServiceSid}/Functions/{Sid}
		 * @param {string} ServiceSid The SID of the Service to delete the Function resource from.
		 * @param {string} Sid The SID of the Function resource to delete.
		 *     Min length: 34    Max length: 34
		 * @return {void} 
		 */
		DeleteFunction(ServiceSid: string, Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Functions/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a specific Function resource.
		 * Get v1/Services/{ServiceSid}/Functions/{Sid}
		 * @param {string} ServiceSid The SID of the Service to fetch the Function resource from.
		 * @param {string} Sid The SID of the Function resource to fetch.
		 *     Min length: 34    Max length: 34
		 * @return {Serverlessv1servicefunction} OK
		 */
		FetchFunction(ServiceSid: string, Sid: string): Observable<Serverlessv1servicefunction> {
			return this.http.get<Serverlessv1servicefunction>(this.baseUri + 'v1/Services/' + (ServiceSid == null ? '' : encodeURIComponent(ServiceSid)) + '/Functions/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}

		/**
		 * Delete a Service resource.
		 * Delete v1/Services/{Sid}
		 * @param {string} Sid The `sid` or `unique_name` of the Service resource to delete.
		 * @return {void} 
		 */
		DeleteService(Sid: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve a specific Service resource.
		 * Get v1/Services/{Sid}
		 * @param {string} Sid The `sid` or `unique_name` of the Service resource to fetch.
		 * @return {Serverlessv1service} OK
		 */
		FetchService(Sid: string): Observable<Serverlessv1service> {
			return this.http.get<Serverlessv1service>(this.baseUri + 'v1/Services/' + (Sid == null ? '' : encodeURIComponent(Sid)), {});
		}
	}

	export interface ListServiceReturn {
		meta?: ListServiceReturnMeta;
		services?: Array<Serverlessv1service>;
	}
	export interface ListServiceReturnFormProperties {
	}
	export function CreateListServiceReturnFormGroup() {
		return new FormGroup<ListServiceReturnFormProperties>({
		});

	}

	export interface ListServiceReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListServiceReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListServiceReturnMetaFormGroup() {
		return new FormGroup<ListServiceReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssetReturn {
		assets?: Array<Serverlessv1serviceasset>;
		meta?: ListAssetReturnMeta;
	}
	export interface ListAssetReturnFormProperties {
	}
	export function CreateListAssetReturnFormGroup() {
		return new FormGroup<ListAssetReturnFormProperties>({
		});

	}

	export interface ListAssetReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListAssetReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListAssetReturnMetaFormGroup() {
		return new FormGroup<ListAssetReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListAssetVersionReturn {
		asset_versions?: Array<Serverlessv1serviceassetasset_version>;
		meta?: ListAssetVersionReturnMeta;
	}
	export interface ListAssetVersionReturnFormProperties {
	}
	export function CreateListAssetVersionReturnFormGroup() {
		return new FormGroup<ListAssetVersionReturnFormProperties>({
		});

	}

	export interface ListAssetVersionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListAssetVersionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListAssetVersionReturnMetaFormGroup() {
		return new FormGroup<ListAssetVersionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListBuildReturn {
		builds?: Array<Serverlessv1servicebuild>;
		meta?: ListBuildReturnMeta;
	}
	export interface ListBuildReturnFormProperties {
	}
	export function CreateListBuildReturnFormGroup() {
		return new FormGroup<ListBuildReturnFormProperties>({
		});

	}

	export interface ListBuildReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListBuildReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListBuildReturnMetaFormGroup() {
		return new FormGroup<ListBuildReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListEnvironmentReturn {
		environments?: Array<Serverlessv1serviceenvironment>;
		meta?: ListEnvironmentReturnMeta;
	}
	export interface ListEnvironmentReturnFormProperties {
	}
	export function CreateListEnvironmentReturnFormGroup() {
		return new FormGroup<ListEnvironmentReturnFormProperties>({
		});

	}

	export interface ListEnvironmentReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListEnvironmentReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentReturnMetaFormGroup() {
		return new FormGroup<ListEnvironmentReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDeploymentReturn {
		deployments?: Array<Serverlessv1serviceenvironmentdeployment>;
		meta?: ListDeploymentReturnMeta;
	}
	export interface ListDeploymentReturnFormProperties {
	}
	export function CreateListDeploymentReturnFormGroup() {
		return new FormGroup<ListDeploymentReturnFormProperties>({
		});

	}

	export interface ListDeploymentReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListDeploymentReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListDeploymentReturnMetaFormGroup() {
		return new FormGroup<ListDeploymentReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListLogReturn {
		logs?: Array<Serverlessv1serviceenvironmentlog>;
		meta?: ListLogReturnMeta;
	}
	export interface ListLogReturnFormProperties {
	}
	export function CreateListLogReturnFormGroup() {
		return new FormGroup<ListLogReturnFormProperties>({
		});

	}

	export interface ListLogReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListLogReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListLogReturnMetaFormGroup() {
		return new FormGroup<ListLogReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListVariableReturn {
		meta?: ListVariableReturnMeta;
		variables?: Array<Serverlessv1serviceenvironmentvariable>;
	}
	export interface ListVariableReturnFormProperties {
	}
	export function CreateListVariableReturnFormGroup() {
		return new FormGroup<ListVariableReturnFormProperties>({
		});

	}

	export interface ListVariableReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListVariableReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListVariableReturnMetaFormGroup() {
		return new FormGroup<ListVariableReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFunctionReturn {
		functions?: Array<Serverlessv1servicefunction>;
		meta?: ListFunctionReturnMeta;
	}
	export interface ListFunctionReturnFormProperties {
	}
	export function CreateListFunctionReturnFormGroup() {
		return new FormGroup<ListFunctionReturnFormProperties>({
		});

	}

	export interface ListFunctionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListFunctionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionReturnMetaFormGroup() {
		return new FormGroup<ListFunctionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListFunctionVersionReturn {
		function_versions?: Array<Serverlessv1servicefunctionfunction_version>;
		meta?: ListFunctionVersionReturnMeta;
	}
	export interface ListFunctionVersionReturnFormProperties {
	}
	export function CreateListFunctionVersionReturnFormGroup() {
		return new FormGroup<ListFunctionVersionReturnFormProperties>({
		});

	}

	export interface ListFunctionVersionReturnMeta {
		first_page_url?: string | null;
		key?: string | null;
		next_page_url?: string | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page?: number | null;

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size?: number | null;
		previous_page_url?: string | null;
		url?: string | null;
	}
	export interface ListFunctionVersionReturnMetaFormProperties {
		first_page_url: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		next_page_url: FormControl<string | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page: FormControl<number | null | undefined>,

		/** Type: int, -2,147,483,648 to 2,147,483,647 */
		page_size: FormControl<number | null | undefined>,
		previous_page_url: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateListFunctionVersionReturnMetaFormGroup() {
		return new FormGroup<ListFunctionVersionReturnMetaFormProperties>({
			first_page_url: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			next_page_url: new FormControl<string | null | undefined>(undefined),
			page: new FormControl<number | null | undefined>(undefined),
			page_size: new FormControl<number | null | undefined>(undefined),
			previous_page_url: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

}

