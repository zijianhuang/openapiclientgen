import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** An addon */
	export interface Addon {

		/**
		 * Environments variables link to the addon.
		 * Required
		 */
		configKeys: Array<string>;

		/**
		 * The creation timestamp of the addon
		 * Required
		 */
		creationDate: Date;

		/**
		 * `addon_${uuid}`
		 * Required
		 */
		id: string;

		/** Required */
		name: string;

		/** Required */
		plan: Plan;

		/**
		 * A provider
		 * Required
		 */
		provider: Provider;

		/**
		 * `${provider}_${uuid2}`
		 * Required
		 */
		realId: string;

		/** Required */
		region: string;
	}

	/** An addon */
	export interface AddonFormProperties {

		/**
		 * The creation timestamp of the addon
		 * Required
		 */
		creationDate: FormControl<Date | null | undefined>,

		/**
		 * `addon_${uuid}`
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * `${provider}_${uuid2}`
		 * Required
		 */
		realId: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
	}
	export function CreateAddonFormGroup() {
		return new FormGroup<AddonFormProperties>({
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			realId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Plan {

		/**
		 * The list of the feature in the addon
		 * Required
		 */
		features: Array<Feature>;

		/**
		 * `plan_${uuid}`
		 * Required
		 */
		id: string;

		/**
		 * Name of the pan
		 * Required
		 */
		name: string;

		/** Required */
		price: number;

		/** Required */
		slug: string;
	}
	export interface PlanFormProperties {

		/**
		 * `plan_${uuid}`
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Name of the pan
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		price: FormControl<number | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Feature {

		/**
		 * The name of the properties
		 * Required
		 */
		name: string;

		/**
		 * The type of the feature
		 * Required
		 */
		type: string;

		/**
		 * The value of the feature
		 * Required
		 */
		value: string;
	}
	export interface FeatureFormProperties {

		/**
		 * The name of the properties
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The type of the feature
		 * Required
		 */
		type: FormControl<string | null | undefined>,

		/**
		 * The value of the feature
		 * Required
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateFeatureFormGroup() {
		return new FormGroup<FeatureFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A provider */
	export interface Provider {

		/**
		 * The id of the analytics page link to this addon
		 * Required
		 */
		analyticsId: string;

		/**
		 * Can the addon be upgraded
		 * Required
		 */
		canUpgrade: boolean;
		features?: Array<Feature>;

		/**
		 * The name of the google + page link to this addon (could be empty)
		 * Required
		 */
		googlePlusName: string;

		/**
		 * The id of the provider
		 * Required
		 */
		id: string;

		/**
		 * The url of the addon's logo
		 * Required
		 */
		logoUrl: string;

		/**
		 * A less concise description of the addon
		 * Required
		 */
		longDesc: string;

		/** Required */
		name: string;

		/**
		 * Does the addon panel need to be open in a new tab
		 * Required
		 */
		openInNewTab: boolean;
		plans?: Array<Plan>;

		/**
		 * The differents regions where the addon is available
		 * Required
		 */
		regions: Array<string>;

		/**
		 * A short description of the addon
		 * Required
		 */
		shortDesc: string;

		/**
		 * The status of this addon (RELEASE, BETA, ...)
		 * Required
		 */
		status: string;

		/**
		 * The mail to contact in case of issue with this addon
		 * Required
		 */
		supportEmail: string;

		/**
		 * The name of the user to contact on twitter for this addon (could be empty)
		 * Required
		 */
		twitterName: string;

		/**
		 * The website of the provider. If the addon is developped by clever-cloud, the site is "http://www.clever-cloud.com/"
		 * Required
		 */
		website: string;
	}

	/** A provider */
	export interface ProviderFormProperties {

		/**
		 * The id of the analytics page link to this addon
		 * Required
		 */
		analyticsId: FormControl<string | null | undefined>,

		/**
		 * Can the addon be upgraded
		 * Required
		 */
		canUpgrade: FormControl<boolean | null | undefined>,

		/**
		 * The name of the google + page link to this addon (could be empty)
		 * Required
		 */
		googlePlusName: FormControl<string | null | undefined>,

		/**
		 * The id of the provider
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The url of the addon's logo
		 * Required
		 */
		logoUrl: FormControl<string | null | undefined>,

		/**
		 * A less concise description of the addon
		 * Required
		 */
		longDesc: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Does the addon panel need to be open in a new tab
		 * Required
		 */
		openInNewTab: FormControl<boolean | null | undefined>,

		/**
		 * A short description of the addon
		 * Required
		 */
		shortDesc: FormControl<string | null | undefined>,

		/**
		 * The status of this addon (RELEASE, BETA, ...)
		 * Required
		 */
		status: FormControl<string | null | undefined>,

		/**
		 * The mail to contact in case of issue with this addon
		 * Required
		 */
		supportEmail: FormControl<string | null | undefined>,

		/**
		 * The name of the user to contact on twitter for this addon (could be empty)
		 * Required
		 */
		twitterName: FormControl<string | null | undefined>,

		/**
		 * The website of the provider. If the addon is developped by clever-cloud, the site is "http://www.clever-cloud.com/"
		 * Required
		 */
		website: FormControl<string | null | undefined>,
	}
	export function CreateProviderFormGroup() {
		return new FormGroup<ProviderFormProperties>({
			analyticsId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			canUpgrade: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			googlePlusName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logoUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			longDesc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			openInNewTab: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			shortDesc: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			supportEmail: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			twitterName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			website: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AddonConfigProviderView {
	}
	export interface AddonConfigProviderViewFormProperties {
	}
	export function CreateAddonConfigProviderViewFormGroup() {
		return new FormGroup<AddonConfigProviderViewFormProperties>({
		});

	}

	export interface AddonMigration {
		addon_id?: string | null;
		callback_url?: string | null;
		database?: string | null;
		database_user?: string | null;
		dump_restore_finished_date?: string | null;
		dump_restore_start_date?: string | null;
		end_date?: string | null;
		exit_message?: string | null;
		hostname?: string | null;
		id?: string | null;
		kind?: string | null;
		last_state_update_date?: string | null;
		new_cluster_id?: string | null;
		new_cluster_label?: string | null;
		new_instance_id?: string | null;
		new_plan?: string | null;
		new_recipient_hostname?: string | null;
		new_zone?: string | null;
		old_cluster_id?: string | null;
		old_cluster_label?: string | null;
		old_instance_id?: string | null;
		old_plan?: string | null;
		old_recipient_hostname?: string | null;
		old_zone?: string | null;
		port?: number | null;
		request_date?: string | null;
		state?: string | null;
	}
	export interface AddonMigrationFormProperties {
		addon_id: FormControl<string | null | undefined>,
		callback_url: FormControl<string | null | undefined>,
		database: FormControl<string | null | undefined>,
		database_user: FormControl<string | null | undefined>,
		dump_restore_finished_date: FormControl<string | null | undefined>,
		dump_restore_start_date: FormControl<string | null | undefined>,
		end_date: FormControl<string | null | undefined>,
		exit_message: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		kind: FormControl<string | null | undefined>,
		last_state_update_date: FormControl<string | null | undefined>,
		new_cluster_id: FormControl<string | null | undefined>,
		new_cluster_label: FormControl<string | null | undefined>,
		new_instance_id: FormControl<string | null | undefined>,
		new_plan: FormControl<string | null | undefined>,
		new_recipient_hostname: FormControl<string | null | undefined>,
		new_zone: FormControl<string | null | undefined>,
		old_cluster_id: FormControl<string | null | undefined>,
		old_cluster_label: FormControl<string | null | undefined>,
		old_instance_id: FormControl<string | null | undefined>,
		old_plan: FormControl<string | null | undefined>,
		old_recipient_hostname: FormControl<string | null | undefined>,
		old_zone: FormControl<string | null | undefined>,
		port: FormControl<number | null | undefined>,
		request_date: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateAddonMigrationFormGroup() {
		return new FormGroup<AddonMigrationFormProperties>({
			addon_id: new FormControl<string | null | undefined>(undefined),
			callback_url: new FormControl<string | null | undefined>(undefined),
			database: new FormControl<string | null | undefined>(undefined),
			database_user: new FormControl<string | null | undefined>(undefined),
			dump_restore_finished_date: new FormControl<string | null | undefined>(undefined),
			dump_restore_start_date: new FormControl<string | null | undefined>(undefined),
			end_date: new FormControl<string | null | undefined>(undefined),
			exit_message: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			last_state_update_date: new FormControl<string | null | undefined>(undefined),
			new_cluster_id: new FormControl<string | null | undefined>(undefined),
			new_cluster_label: new FormControl<string | null | undefined>(undefined),
			new_instance_id: new FormControl<string | null | undefined>(undefined),
			new_plan: new FormControl<string | null | undefined>(undefined),
			new_recipient_hostname: new FormControl<string | null | undefined>(undefined),
			new_zone: new FormControl<string | null | undefined>(undefined),
			old_cluster_id: new FormControl<string | null | undefined>(undefined),
			old_cluster_label: new FormControl<string | null | undefined>(undefined),
			old_instance_id: new FormControl<string | null | undefined>(undefined),
			old_plan: new FormControl<string | null | undefined>(undefined),
			old_recipient_hostname: new FormControl<string | null | undefined>(undefined),
			old_zone: new FormControl<string | null | undefined>(undefined),
			port: new FormControl<number | null | undefined>(undefined),
			request_date: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AddonProviderSso {

		/** Required */
		macaroon: string;

		/** Required */
		url: string;
	}
	export interface AddonProviderSsoFormProperties {

		/** Required */
		macaroon: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAddonProviderSsoFormGroup() {
		return new FormGroup<AddonProviderSsoFormProperties>({
			macaroon: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppInstance {
		appId?: string | null;
		appPort?: number | null;
		commit?: string | null;
		deployNumber?: number | null;
		flavor?: Flavor;
		id?: string | null;
		ip?: string | null;
		state?: string | null;
	}
	export interface AppInstanceFormProperties {
		appId: FormControl<string | null | undefined>,
		appPort: FormControl<number | null | undefined>,
		commit: FormControl<string | null | undefined>,
		deployNumber: FormControl<number | null | undefined>,
		id: FormControl<string | null | undefined>,
		ip: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateAppInstanceFormGroup() {
		return new FormGroup<AppInstanceFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			appPort: new FormControl<number | null | undefined>(undefined),
			commit: new FormControl<string | null | undefined>(undefined),
			deployNumber: new FormControl<number | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Flavor {
		available?: boolean | null;

		/** Required */
		cpus: number;
		disk?: number | null;

		/** Required */
		mem: number;
		microservice?: boolean | null;

		/** Required */
		name: string;
		nice?: number | null;

		/** Required */
		price: number;
	}
	export interface FlavorFormProperties {
		available: FormControl<boolean | null | undefined>,

		/** Required */
		cpus: FormControl<number | null | undefined>,
		disk: FormControl<number | null | undefined>,

		/** Required */
		mem: FormControl<number | null | undefined>,
		microservice: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		nice: FormControl<number | null | undefined>,

		/** Required */
		price: FormControl<number | null | undefined>,
	}
	export function CreateFlavorFormGroup() {
		return new FormGroup<FlavorFormProperties>({
			available: new FormControl<boolean | null | undefined>(undefined),
			cpus: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			disk: new FormControl<number | null | undefined>(undefined),
			mem: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			microservice: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nice: new FormControl<number | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Application {

		/** Required */
		archived: boolean;

		/** Required */
		branch: string;

		/** Required */
		buildFlavor: Flavor;

		/** Required */
		cancelOnPush: boolean;

		/** Required */
		commitId: string;

		/** Required */
		creationDate: Date;

		/** Required */
		deployUrl: string;

		/** Required */
		deployment: Deployment;

		/** Required */
		description: string;

		/** Required */
		favourite: boolean;

		/** Required */
		homogeneous: boolean;

		/** Required */
		id: string;

		/** Required */
		instance: Instance;

		/** Required */
		last_deploy: number;

		/** Required */
		name: string;

		/** Required */
		ownerId: string;

		/** Required */
		separateBuild: boolean;

		/** Required */
		state: string;

		/** Required */
		stickySessions: boolean;

		/** Required */
		vhosts: Array<Vhost>;

		/** Required */
		webhookSecret: string;

		/** Required */
		webhookUrl: string;

		/**
		 * `par` ou `mtl`
		 * Required
		 */
		zone: string;
	}
	export interface ApplicationFormProperties {

		/** Required */
		archived: FormControl<boolean | null | undefined>,

		/** Required */
		branch: FormControl<string | null | undefined>,

		/** Required */
		cancelOnPush: FormControl<boolean | null | undefined>,

		/** Required */
		commitId: FormControl<string | null | undefined>,

		/** Required */
		creationDate: FormControl<Date | null | undefined>,

		/** Required */
		deployUrl: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		favourite: FormControl<boolean | null | undefined>,

		/** Required */
		homogeneous: FormControl<boolean | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		last_deploy: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		ownerId: FormControl<string | null | undefined>,

		/** Required */
		separateBuild: FormControl<boolean | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		stickySessions: FormControl<boolean | null | undefined>,

		/** Required */
		webhookSecret: FormControl<string | null | undefined>,

		/** Required */
		webhookUrl: FormControl<string | null | undefined>,

		/**
		 * `par` ou `mtl`
		 * Required
		 */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateApplicationFormGroup() {
		return new FormGroup<ApplicationFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cancelOnPush: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			commitId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			deployUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			favourite: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			homogeneous: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			last_deploy: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			separateBuild: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			stickySessions: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			webhookSecret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			webhookUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Deployment {
		httpUrl?: string | null;

		/** Required */
		repoState: string;

		/** Required */
		shutdownable: boolean;

		/** Required */
		type: string;

		/** Required */
		url: string;
	}
	export interface DeploymentFormProperties {
		httpUrl: FormControl<string | null | undefined>,

		/** Required */
		repoState: FormControl<string | null | undefined>,

		/** Required */
		shutdownable: FormControl<boolean | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentFormGroup() {
		return new FormGroup<DeploymentFormProperties>({
			httpUrl: new FormControl<string | null | undefined>(undefined),
			repoState: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			shutdownable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Instance {
		buildFlavor?: Flavor;
		comingSoon?: boolean | null;

		/** Required */
		defaultEnv: Map;
		defaultFlavor?: Flavor;
		deployments?: Array<string>;
		description?: string | null;
		enabled?: boolean | null;

		/** Required */
		flavors: Array<Flavor>;

		/** Required */
		instanceAndVersion: string;

		/** Required */
		maxAllowedInstances: number;

		/** Required */
		maxFlavor: Flavor;

		/** Required */
		maxInstances: number;

		/** Required */
		minFlavor: Flavor;

		/** Required */
		minInstances: number;
		name?: string | null;
		tags?: Array<string>;

		/** Required */
		type: string;

		/** Required */
		variant: Variant;

		/** Required */
		version: string;
	}
	export interface InstanceFormProperties {
		comingSoon: FormControl<boolean | null | undefined>,
		description: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,

		/** Required */
		instanceAndVersion: FormControl<string | null | undefined>,

		/** Required */
		maxAllowedInstances: FormControl<number | null | undefined>,

		/** Required */
		maxInstances: FormControl<number | null | undefined>,

		/** Required */
		minInstances: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		version: FormControl<string | null | undefined>,
	}
	export function CreateInstanceFormGroup() {
		return new FormGroup<InstanceFormProperties>({
			comingSoon: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			instanceAndVersion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			maxAllowedInstances: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			maxInstances: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minInstances: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Map {
	}
	export interface MapFormProperties {
	}
	export function CreateMapFormGroup() {
		return new FormGroup<MapFormProperties>({
		});

	}

	export interface Variant {

		/** Required */
		deployType: string;

		/** Required */
		id: string;

		/** Required */
		logo: string;

		/** Required */
		name: string;

		/** Required */
		slug: string;
	}
	export interface VariantFormProperties {

		/** Required */
		deployType: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		logo: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateVariantFormGroup() {
		return new FormGroup<VariantFormProperties>({
			deployType: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logo: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Vhost {

		/** Required */
		fqdn: string;
	}
	export interface VhostFormProperties {

		/** Required */
		fqdn: FormControl<string | null | undefined>,
	}
	export function CreateVhostFormGroup() {
		return new FormGroup<VhostFormProperties>({
			fqdn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** If you want to upload an image from your computer, send the image in the body of the request without anything else. */
	export interface Avatar {

		/** Required */
		source: AvatarSource;
	}

	/** If you want to upload an image from your computer, send the image in the body of the request without anything else. */
	export interface AvatarFormProperties {
	}
	export function CreateAvatarFormGroup() {
		return new FormGroup<AvatarFormProperties>({
		});

	}

	export interface AvatarSource {

		/**
		 * github or gravatar
		 * Required
		 */
		source: string;

		/**
		 * Must be a valid HTTP URL
		 * Required
		 */
		value: URL;
	}
	export interface AvatarSourceFormProperties {

		/**
		 * github or gravatar
		 * Required
		 */
		source: FormControl<string | null | undefined>,
	}
	export function CreateAvatarSourceFormGroup() {
		return new FormGroup<AvatarSourceFormProperties>({
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** Must be a valid HTTP URL */
	export interface URL {

		/** Required */
		url: string;
	}

	/** Must be a valid HTTP URL */
	export interface URLFormProperties {

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateURLFormGroup() {
		return new FormGroup<URLFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Body {

		/** Required */
		body: string;
	}
	export interface BodyFormProperties {

		/** Required */
		body: FormControl<string | null | undefined>,
	}
	export function CreateBodyFormGroup() {
		return new FormGroup<BodyFormProperties>({
			body: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Change_Password {

		/** Required */
		newPassword: string;

		/** Required */
		oldPassword: string;
	}
	export interface Change_PasswordFormProperties {

		/** Required */
		newPassword: FormControl<string | null | undefined>,

		/** Required */
		oldPassword: FormControl<string | null | undefined>,
	}
	export function CreateChange_PasswordFormGroup() {
		return new FormGroup<Change_PasswordFormProperties>({
			newPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oldPassword: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Conso {

		/** Required */
		appId: string;

		/** Required */
		conso: ConsoConso;
	}
	export interface ConsoFormProperties {

		/** Required */
		appId: FormControl<string | null | undefined>,
	}
	export function CreateConsoFormGroup() {
		return new FormGroup<ConsoFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsoConso {

		/**
		 * One day consumption
		 * Required
		 */
		conso: string;

		/** Required */
		date: string;
	}
	export interface ConsoConsoFormProperties {

		/**
		 * One day consumption
		 * Required
		 */
		conso: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<string | null | undefined>,
	}
	export function CreateConsoConsoFormGroup() {
		return new FormGroup<ConsoConsoFormProperties>({
			conso: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Consumer {

		/** Required */
		baseUrl: string;

		/** Required */
		description: string;
		key?: string | null;

		/** Required */
		name: string;
		picture?: string | null;

		/** Required */
		rights: ConsumerRights;

		/** Required */
		url: string;
	}
	export interface ConsumerFormProperties {

		/** Required */
		baseUrl: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		picture: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateConsumerFormGroup() {
		return new FormGroup<ConsumerFormProperties>({
			baseUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			picture: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConsumerRights {
		access_bills?: boolean | null;
		access_consumption_statistics?: boolean | null;
		access_credit_count?: boolean | null;
		access_organisations?: boolean | null;
		access_organisations_bills?: boolean | null;
		access_organisations_consumption_statistics?: boolean | null;
		access_organisations_credit_count?: boolean | null;
		access_personal_information?: boolean | null;
		almighty?: boolean | null;
		manage_applications?: boolean | null;
		manage_organisations?: boolean | null;
		manage_organisations_applications?: boolean | null;
		manage_organisations_members?: boolean | null;
		manage_organisations_services?: boolean | null;
		manage_personal_information?: boolean | null;
		manage_services?: boolean | null;
		manage_ssh_keys?: boolean | null;
	}
	export interface ConsumerRightsFormProperties {
		access_bills: FormControl<boolean | null | undefined>,
		access_consumption_statistics: FormControl<boolean | null | undefined>,
		access_credit_count: FormControl<boolean | null | undefined>,
		access_organisations: FormControl<boolean | null | undefined>,
		access_organisations_bills: FormControl<boolean | null | undefined>,
		access_organisations_consumption_statistics: FormControl<boolean | null | undefined>,
		access_organisations_credit_count: FormControl<boolean | null | undefined>,
		access_personal_information: FormControl<boolean | null | undefined>,
		almighty: FormControl<boolean | null | undefined>,
		manage_applications: FormControl<boolean | null | undefined>,
		manage_organisations: FormControl<boolean | null | undefined>,
		manage_organisations_applications: FormControl<boolean | null | undefined>,
		manage_organisations_members: FormControl<boolean | null | undefined>,
		manage_organisations_services: FormControl<boolean | null | undefined>,
		manage_personal_information: FormControl<boolean | null | undefined>,
		manage_services: FormControl<boolean | null | undefined>,
		manage_ssh_keys: FormControl<boolean | null | undefined>,
	}
	export function CreateConsumerRightsFormGroup() {
		return new FormGroup<ConsumerRightsFormProperties>({
			access_bills: new FormControl<boolean | null | undefined>(undefined),
			access_consumption_statistics: new FormControl<boolean | null | undefined>(undefined),
			access_credit_count: new FormControl<boolean | null | undefined>(undefined),
			access_organisations: new FormControl<boolean | null | undefined>(undefined),
			access_organisations_bills: new FormControl<boolean | null | undefined>(undefined),
			access_organisations_consumption_statistics: new FormControl<boolean | null | undefined>(undefined),
			access_organisations_credit_count: new FormControl<boolean | null | undefined>(undefined),
			access_personal_information: new FormControl<boolean | null | undefined>(undefined),
			almighty: new FormControl<boolean | null | undefined>(undefined),
			manage_applications: new FormControl<boolean | null | undefined>(undefined),
			manage_organisations: new FormControl<boolean | null | undefined>(undefined),
			manage_organisations_applications: new FormControl<boolean | null | undefined>(undefined),
			manage_organisations_members: new FormControl<boolean | null | undefined>(undefined),
			manage_organisations_services: new FormControl<boolean | null | undefined>(undefined),
			manage_personal_information: new FormControl<boolean | null | undefined>(undefined),
			manage_services: new FormControl<boolean | null | undefined>(undefined),
			manage_ssh_keys: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface Country {

		/**
		 * Code ISO 3166
		 * Required
		 */
		code: string;

		/** Required */
		name: string;
	}
	export interface CountryFormProperties {

		/**
		 * Code ISO 3166
		 * Required
		 */
		code: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCountryFormGroup() {
		return new FormGroup<CountryFormProperties>({
			code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Credits {

		/** Required */
		count: number;

		/** Required */
		dropPrice: CreditsDropPrice;

		/** Required */
		ownerId: string;
	}
	export interface CreditsFormProperties {

		/** Required */
		count: FormControl<number | null | undefined>,

		/** Required */
		ownerId: FormControl<string | null | undefined>,
	}
	export function CreateCreditsFormGroup() {
		return new FormGroup<CreditsFormProperties>({
			count: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ownerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CreditsDropPrice {

		/** Required */
		currency: string;

		/** Required */
		value: number;
	}
	export interface CreditsDropPriceFormProperties {

		/** Required */
		currency: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<number | null | undefined>,
	}
	export function CreateCreditsDropPriceFormGroup() {
		return new FormGroup<CreditsDropPriceFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeploymentSummary {
		'{app_id}'?: Array<DeploymentView>;
	}
	export interface DeploymentSummaryFormProperties {
	}
	export function CreateDeploymentSummaryFormGroup() {
		return new FormGroup<DeploymentSummaryFormProperties>({
		});

	}

	export interface DeploymentView {

		/** Required */
		action: string;
		author?: DeploymentViewAuthor;

		/** Required */
		cause: string;

		/** Required */
		commit: string;

		/** Required */
		date: Date;

		/** Required */
		id: number;

		/** Required */
		instances: number;

		/** Required */
		state: string;

		/** Required */
		uuid: string;
	}
	export interface DeploymentViewFormProperties {

		/** Required */
		action: FormControl<string | null | undefined>,

		/** Required */
		cause: FormControl<string | null | undefined>,

		/** Required */
		commit: FormControl<string | null | undefined>,

		/** Required */
		date: FormControl<Date | null | undefined>,

		/** Required */
		id: FormControl<number | null | undefined>,

		/** Required */
		instances: FormControl<number | null | undefined>,

		/** Required */
		state: FormControl<string | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentViewFormGroup() {
		return new FormGroup<DeploymentViewFormProperties>({
			action: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cause: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			commit: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			date: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			instances: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			state: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeploymentViewAuthor {

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface DeploymentViewAuthorFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentViewAuthorFormGroup() {
		return new FormGroup<DeploymentViewAuthorFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Env {

		/** Required */
		addon_id: string;

		/** Required */
		addon_name: string;

		/** Required */
		env: Array<WannabeEnv>;

		/** Required */
		provider_id: string;
	}
	export interface EnvFormProperties {

		/** Required */
		addon_id: FormControl<string | null | undefined>,

		/** Required */
		addon_name: FormControl<string | null | undefined>,

		/** Required */
		provider_id: FormControl<string | null | undefined>,
	}
	export function CreateEnvFormGroup() {
		return new FormGroup<EnvFormProperties>({
			addon_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			addon_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			provider_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeEnv {

		/** Required */
		name: string;

		/** Required */
		value: string;
	}
	export interface WannabeEnvFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWannabeEnvFormGroup() {
		return new FormGroup<WannabeEnvFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnvVar {
	}
	export interface EnvVarFormProperties {
	}
	export function CreateEnvVarFormGroup() {
		return new FormGroup<EnvVarFormProperties>({
		});

	}

	export interface Error {

		/** Unique numeric id of this error type. Eg. id = 10 is "Serialization failed". */
		id?: number | null;

		/** Description of the error. */
		message?: string | null;

		/** Value should be "error" */
		type?: string | null;
	}
	export interface ErrorFormProperties {

		/** Unique numeric id of this error type. Eg. id = 10 is "Serialization failed". */
		id: FormControl<number | null | undefined>,

		/** Description of the error. */
		message: FormControl<string | null | undefined>,

		/** Value should be "error" */
		type: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			id: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Function1RequestContextFutureRouteResult {
	}
	export interface Function1RequestContextFutureRouteResultFormProperties {
	}
	export function CreateFunction1RequestContextFutureRouteResultFormGroup() {
		return new FormGroup<Function1RequestContextFutureRouteResultFormProperties>({
		});

	}

	export interface Key {

		/** Required */
		fingerprint: string;

		/** Required */
		key: string;

		/** Required */
		name: string;
	}
	export interface KeyFormProperties {

		/** Required */
		fingerprint: FormControl<string | null | undefined>,

		/** Required */
		key: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateKeyFormGroup() {
		return new FormGroup<KeyFormProperties>({
			fingerprint: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LinkedAppEnv {

		/** Required */
		app_id: string;

		/** Required */
		app_name: string;

		/** Required */
		env: Array<WannabeEnv>;
	}
	export interface LinkedAppEnvFormProperties {

		/** Required */
		app_id: FormControl<string | null | undefined>,

		/** Required */
		app_name: FormControl<string | null | undefined>,
	}
	export function CreateLinkedAppEnvFormGroup() {
		return new FormGroup<LinkedAppEnvFormProperties>({
			app_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			app_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ListEnv {
		name?: string | null;
		value?: string | null;
	}
	export interface ListEnvFormProperties {
		name: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateListEnvFormGroup() {
		return new FormGroup<ListEnvFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Member {

		/** Required */
		job: string;

		/** Required */
		member: MemberMember;

		/** Required */
		role: string;
	}
	export interface MemberFormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,

		/** Required */
		role: FormControl<string | null | undefined>,
	}
	export function CreateMemberFormGroup() {
		return new FormGroup<MemberFormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface MemberMember {
		avatar?: string | null;

		/** Required */
		email: string;

		/** Required */
		id: string;
		name?: string | null;
	}
	export interface MemberMemberFormProperties {
		avatar: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateMemberMemberFormGroup() {
		return new FormGroup<MemberMemberFormProperties>({
			avatar: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkGroup {
	}
	export interface NetworkGroupFormProperties {
	}
	export function CreateNetworkGroupFormGroup() {
		return new FormGroup<NetworkGroupFormProperties>({
		});

	}

	export interface OVDHttpRequestContext {
	}
	export interface OVDHttpRequestContextFormProperties {
	}
	export function CreateOVDHttpRequestContextFormGroup() {
		return new FormGroup<OVDHttpRequestContextFormProperties>({
		});

	}

	export interface Organisation {

		/** Required */
		VAT: string;

		/** Required */
		address: string;

		/** Required */
		avatar: string;

		/** Required */
		city: string;

		/** Required */
		company: string;

		/** Required */
		country: string;

		/** Required */
		description: string;

		/** Required */
		id: string;

		/** Required */
		name: string;

		/** Required */
		vatState: string;

		/** Required */
		zipcode: string;
	}
	export interface OrganisationFormProperties {

		/** Required */
		VAT: FormControl<string | null | undefined>,

		/** Required */
		address: FormControl<string | null | undefined>,

		/** Required */
		avatar: FormControl<string | null | undefined>,

		/** Required */
		city: FormControl<string | null | undefined>,

		/** Required */
		company: FormControl<string | null | undefined>,

		/** Required */
		country: FormControl<string | null | undefined>,

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		vatState: FormControl<string | null | undefined>,

		/** Required */
		zipcode: FormControl<string | null | undefined>,
	}
	export function CreateOrganisationFormGroup() {
		return new FormGroup<OrganisationFormProperties>({
			VAT: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			avatar: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			company: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			vatState: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipcode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PaymentData {
		deviceData?: string | null;

		/** Required */
		token: string;

		/** Required */
		type: PaymentDataType;
	}
	export interface PaymentDataFormProperties {
		deviceData: FormControl<string | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<PaymentDataType | null | undefined>,
	}
	export function CreatePaymentDataFormGroup() {
		return new FormGroup<PaymentDataFormProperties>({
			deviceData: new FormControl<string | null | undefined>(undefined),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<PaymentDataType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PaymentDataType { NEW_CARD = 'NEW_CARD', EXISTING_CARD = 'EXISTING_CARD' }

	export interface Payment_Provider {

		/** Required */
		comingSoon: boolean;

		/** Required */
		imgUrl: string;

		/** Required */
		name: string;

		/** Required */
		title: string;
	}
	export interface Payment_ProviderFormProperties {

		/** Required */
		comingSoon: FormControl<boolean | null | undefined>,

		/** Required */
		imgUrl: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		title: FormControl<string | null | undefined>,
	}
	export function CreatePayment_ProviderFormGroup() {
		return new FormGroup<Payment_ProviderFormProperties>({
			comingSoon: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			imgUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			title: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Peer {
	}
	export interface PeerFormProperties {
	}
	export function CreatePeerFormGroup() {
		return new FormGroup<PeerFormProperties>({
		});

	}

	export interface ProvisionRequest {
	}
	export interface ProvisionRequestFormProperties {
	}
	export function CreateProvisionRequestFormGroup() {
		return new FormGroup<ProvisionRequestFormProperties>({
		});

	}

	export interface Rights {

		/** Required */
		description: string;

		/** Required */
		name: string;
	}
	export interface RightsFormProperties {

		/** Required */
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateRightsFormGroup() {
		return new FormGroup<RightsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Secret {

		/** Required */
		secret: string;

		/** Required */
		value: string;
	}
	export interface SecretFormProperties {

		/** Required */
		secret: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
			secret: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sso {

		/** Required */
		email: string;

		/** Required */
		id: string;

		/** Required */
		'nav-data': string;

		/** Required */
		timestamp: Date;

		/** Required */
		token: string;

		/** Required */
		url: string;
	}
	export interface SsoFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		'nav-data': FormControl<string | null | undefined>,

		/** Required */
		timestamp: FormControl<Date | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateSsoFormGroup() {
		return new FormGroup<SsoFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			'nav-data': new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timestamp: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Summary {

		/** Required */
		SummaryOrganisations: Array<SummaryOrganisations>;

		/** Required */
		user: SummaryUser;
	}
	export interface SummaryFormProperties {
	}
	export function CreateSummaryFormGroup() {
		return new FormGroup<SummaryFormProperties>({
		});

	}

	export interface SummaryOrganisations {
		SummaryOrganisationsAddons?: Array<SummaryOrganisationsAddons>;
		SummaryOrganisationsApplications?: Array<SummaryOrganisationsApplications>;
		avatar?: string | null;
		SummaryOrganisationsConsumers?: Array<SummaryOrganisationsConsumers>;
		id?: string | null;
		name?: string | null;
		providers?: Array<string>;
		role?: string | null;
	}
	export interface SummaryOrganisationsFormProperties {
		avatar: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		role: FormControl<string | null | undefined>,
	}
	export function CreateSummaryOrganisationsFormGroup() {
		return new FormGroup<SummaryOrganisationsFormProperties>({
			avatar: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SummaryOrganisationsAddons {
		id?: string | null;
		logoUrl?: string | null;
		name?: string | null;
		providerId?: string | null;
	}
	export interface SummaryOrganisationsAddonsFormProperties {
		id: FormControl<string | null | undefined>,
		logoUrl: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		providerId: FormControl<string | null | undefined>,
	}
	export function CreateSummaryOrganisationsAddonsFormGroup() {
		return new FormGroup<SummaryOrganisationsAddonsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			logoUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SummaryOrganisationsApplications {
		archived?: boolean | null;
		commit?: string | null;
		id?: string | null;
		instanceType?: string | null;
		instanceVariant?: string | null;
		name?: string | null;
		state?: string | null;
		variantSlug?: string | null;
	}
	export interface SummaryOrganisationsApplicationsFormProperties {
		archived: FormControl<boolean | null | undefined>,
		commit: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
		instanceVariant: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		variantSlug: FormControl<string | null | undefined>,
	}
	export function CreateSummaryOrganisationsApplicationsFormGroup() {
		return new FormGroup<SummaryOrganisationsApplicationsFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			commit: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			instanceVariant: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			variantSlug: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SummaryOrganisationsConsumers {
		key?: string | null;
		name?: string | null;
		picture?: string | null;
	}
	export interface SummaryOrganisationsConsumersFormProperties {
		key: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		picture: FormControl<string | null | undefined>,
	}
	export function CreateSummaryOrganisationsConsumersFormGroup() {
		return new FormGroup<SummaryOrganisationsConsumersFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SummaryUser {

		/** Required */
		SummaryUserAddons: Array<SummaryUserAddons>;

		/** Required */
		admin: boolean;

		/** Required */
		SummaryUserApplications: Array<SummaryUserApplications>;

		/** Required */
		avatar: string;
		SummaryUserConsumers?: Array<SummaryUserConsumers>;

		/** Required */
		id: string;

		/** Required */
		lang: string;

		/** Required */
		name: string;
	}
	export interface SummaryUserFormProperties {

		/** Required */
		admin: FormControl<boolean | null | undefined>,

		/** Required */
		avatar: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		lang: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSummaryUserFormGroup() {
		return new FormGroup<SummaryUserFormProperties>({
			admin: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			avatar: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lang: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SummaryUserAddons {
		id?: string | null;
		logoUrl?: string | null;
		name?: string | null;
		providerId?: string | null;
	}
	export interface SummaryUserAddonsFormProperties {
		id: FormControl<string | null | undefined>,
		logoUrl: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		providerId: FormControl<string | null | undefined>,
	}
	export function CreateSummaryUserAddonsFormGroup() {
		return new FormGroup<SummaryUserAddonsFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			logoUrl: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			providerId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SummaryUserApplications {
		archived?: boolean | null;
		commit?: string | null;
		id?: string | null;
		instanceType?: string | null;
		instanceVariant?: string | null;
		name?: string | null;
		state?: string | null;
		variantSlug?: string | null;
	}
	export interface SummaryUserApplicationsFormProperties {
		archived: FormControl<boolean | null | undefined>,
		commit: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
		instanceVariant: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		variantSlug: FormControl<string | null | undefined>,
	}
	export function CreateSummaryUserApplicationsFormGroup() {
		return new FormGroup<SummaryUserApplicationsFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			commit: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			instanceVariant: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			variantSlug: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SummaryUserConsumers {
		key?: string | null;
		name?: string | null;
		picture?: string | null;
	}
	export interface SummaryUserConsumersFormProperties {
		key: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		picture: FormControl<string | null | undefined>,
	}
	export function CreateSummaryUserConsumersFormGroup() {
		return new FormGroup<SummaryUserConsumersFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			picture: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SupernovaInstanceView {

		/** Identifier of running app/add-on */
		appId?: string | null;

		/**
		 * Port of the HV that's redirected to 8080 on VM
		 * Required
		 */
		appPort: number;
		commitId?: string | null;

		/** Integer unix timestamp */
		createdAt?: number | null;
		deployId?: string | null;
		deployNumber?: number | null;

		/** Generated PokéName. This name is generated from the uuid. */
		displayName?: string | null;

		/**
		 * The instance "flavor": memory, cpu, disk size…
		 * Required
		 */
		flavor: SupernovaInstanceViewFlavor;

		/**
		 * String name of hv.
		 * Required
		 */
		hv: string;

		/**
		 * Base system image. E.g. java-20181030, node-20180912…
		 * Required
		 */
		image: string;
		instanceNumber?: number | null;
		internalIP?: string | null;

		/**
		 * Public IP of the HV
		 * Required
		 */
		ip: string;

		/** Identifier of the owner of the app/add-on running */
		ownerId?: string | null;

		/**
		 * Who/what started this instance? E.g. "app", "cli"
		 * Required
		 */
		source: string;

		/** Port of the HV that's redirected to 22 on VM */
		sshPort?: number | null;
		state?: string | null;

		/** Required */
		uuid: string;

		/**
		 * Port of the HV that's redirected to 10050 on VM
		 * Required
		 */
		zabbixPort: number;
		zone?: string | null;
	}
	export interface SupernovaInstanceViewFormProperties {

		/** Identifier of running app/add-on */
		appId: FormControl<string | null | undefined>,

		/**
		 * Port of the HV that's redirected to 8080 on VM
		 * Required
		 */
		appPort: FormControl<number | null | undefined>,
		commitId: FormControl<string | null | undefined>,

		/** Integer unix timestamp */
		createdAt: FormControl<number | null | undefined>,
		deployId: FormControl<string | null | undefined>,
		deployNumber: FormControl<number | null | undefined>,

		/** Generated PokéName. This name is generated from the uuid. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * String name of hv.
		 * Required
		 */
		hv: FormControl<string | null | undefined>,

		/**
		 * Base system image. E.g. java-20181030, node-20180912…
		 * Required
		 */
		image: FormControl<string | null | undefined>,
		instanceNumber: FormControl<number | null | undefined>,
		internalIP: FormControl<string | null | undefined>,

		/**
		 * Public IP of the HV
		 * Required
		 */
		ip: FormControl<string | null | undefined>,

		/** Identifier of the owner of the app/add-on running */
		ownerId: FormControl<string | null | undefined>,

		/**
		 * Who/what started this instance? E.g. "app", "cli"
		 * Required
		 */
		source: FormControl<string | null | undefined>,

		/** Port of the HV that's redirected to 22 on VM */
		sshPort: FormControl<number | null | undefined>,
		state: FormControl<string | null | undefined>,

		/** Required */
		uuid: FormControl<string | null | undefined>,

		/**
		 * Port of the HV that's redirected to 10050 on VM
		 * Required
		 */
		zabbixPort: FormControl<number | null | undefined>,
		zone: FormControl<string | null | undefined>,
	}
	export function CreateSupernovaInstanceViewFormGroup() {
		return new FormGroup<SupernovaInstanceViewFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
			appPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			commitId: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<number | null | undefined>(undefined),
			deployId: new FormControl<string | null | undefined>(undefined),
			deployNumber: new FormControl<number | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			hv: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			image: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			instanceNumber: new FormControl<number | null | undefined>(undefined),
			internalIP: new FormControl<string | null | undefined>(undefined),
			ip: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ownerId: new FormControl<string | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sshPort: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			uuid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zabbixPort: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			zone: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SupernovaInstanceViewFlavor {
		cpus?: number | null;
		mem?: number | null;

		/** Name of flavor. For indication only. */
		name?: string | null;
		price?: number | null;
	}
	export interface SupernovaInstanceViewFlavorFormProperties {
		cpus: FormControl<number | null | undefined>,
		mem: FormControl<number | null | undefined>,

		/** Name of flavor. For indication only. */
		name: FormControl<string | null | undefined>,
		price: FormControl<number | null | undefined>,
	}
	export function CreateSupernovaInstanceViewFlavorFormGroup() {
		return new FormGroup<SupernovaInstanceViewFlavorFormProperties>({
			cpus: new FormControl<number | null | undefined>(undefined),
			mem: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			price: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Token {

		/** Required */
		consumer: Consumer;

		/** Required */
		creationDate: number;

		/** Required */
		lastUtilisation: string;

		/** Required */
		rights: Rights;

		/** Required */
		token: string;
	}
	export interface TokenFormProperties {

		/** Required */
		creationDate: FormControl<number | null | undefined>,

		/** Required */
		lastUtilisation: FormControl<string | null | undefined>,

		/** Required */
		token: FormControl<string | null | undefined>,
	}
	export function CreateTokenFormGroup() {
		return new FormGroup<TokenFormProperties>({
			creationDate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lastUtilisation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A simple transaction id */
	export interface Transaction_Id {

		/**
		 * The transaction Id
		 * Required
		 */
		transactionId: string;
	}

	/** A simple transaction id */
	export interface Transaction_IdFormProperties {

		/**
		 * The transaction Id
		 * Required
		 */
		transactionId: FormControl<string | null | undefined>,
	}
	export function CreateTransaction_IdFormGroup() {
		return new FormGroup<Transaction_IdFormProperties>({
			transactionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** A user representation */
	export interface User {

		/**
		 * The address of the user
		 * Required
		 */
		address: string;

		/**
		 * Is the user an administrator ?
		 * Required
		 */
		admin: boolean;

		/**
		 * The location of the user's avatar
		 * Required
		 */
		avatar: string;

		/**
		 * Does the user can pay ?
		 * Required
		 */
		canPay: boolean;

		/**
		 * The city of the user
		 * Required
		 */
		city: string;

		/**
		 * The country of the user
		 * Required
		 */
		country: string;

		/**
		 * The creation timestamp of the user
		 * Required
		 */
		creationDate: number;

		/**
		 * The email of the user
		 * Required
		 */
		email: string;

		/**
		 * Does the user email is validate
		 * Required
		 */
		emailValidated: boolean;
		hasPassword?: boolean | null;

		/**
		 * The id of the user : `user_${uuid}`
		 * Required
		 */
		id: string;

		/**
		 * The lang of the user
		 * Required
		 */
		lang: string;

		/**
		 * The name of the user
		 * Required
		 */
		name: string;

		/**
		 * The list of token oauth
		 * Required
		 */
		oauthApps: Array<string>;

		/**
		 * The phone of the user
		 * Required
		 */
		phone: string;
		preferredMFA?: string | null;

		/**
		 * The zipcode of the user
		 * Required
		 */
		zipcode: string;
	}

	/** A user representation */
	export interface UserFormProperties {

		/**
		 * The address of the user
		 * Required
		 */
		address: FormControl<string | null | undefined>,

		/**
		 * Is the user an administrator ?
		 * Required
		 */
		admin: FormControl<boolean | null | undefined>,

		/**
		 * The location of the user's avatar
		 * Required
		 */
		avatar: FormControl<string | null | undefined>,

		/**
		 * Does the user can pay ?
		 * Required
		 */
		canPay: FormControl<boolean | null | undefined>,

		/**
		 * The city of the user
		 * Required
		 */
		city: FormControl<string | null | undefined>,

		/**
		 * The country of the user
		 * Required
		 */
		country: FormControl<string | null | undefined>,

		/**
		 * The creation timestamp of the user
		 * Required
		 */
		creationDate: FormControl<number | null | undefined>,

		/**
		 * The email of the user
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/**
		 * Does the user email is validate
		 * Required
		 */
		emailValidated: FormControl<boolean | null | undefined>,
		hasPassword: FormControl<boolean | null | undefined>,

		/**
		 * The id of the user : `user_${uuid}`
		 * Required
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The lang of the user
		 * Required
		 */
		lang: FormControl<string | null | undefined>,

		/**
		 * The name of the user
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The phone of the user
		 * Required
		 */
		phone: FormControl<string | null | undefined>,
		preferredMFA: FormControl<string | null | undefined>,

		/**
		 * The zipcode of the user
		 * Required
		 */
		zipcode: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			admin: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			avatar: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			canPay: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			city: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			country: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			creationDate: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			emailValidated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hasPassword: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lang: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			preferredMFA: new FormControl<string | null | undefined>(undefined),
			zipcode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeAddon {

		/** Required */
		name: string;

		/** Required */
		payment: PaymentData;

		/** Required */
		plan: string;

		/** Required */
		providerId: string;

		/** Required */
		region: string;
	}
	export interface WannabeAddonFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		plan: FormControl<string | null | undefined>,

		/** Required */
		providerId: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<string | null | undefined>,
	}
	export function CreateWannabeAddonFormGroup() {
		return new FormGroup<WannabeAddonFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			plan: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			providerId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeAddonBilling {

		/** Required */
		cost: number;
	}
	export interface WannabeAddonBillingFormProperties {

		/** Required */
		cost: FormControl<number | null | undefined>,
	}
	export function CreateWannabeAddonBillingFormGroup() {
		return new FormGroup<WannabeAddonBillingFormProperties>({
			cost: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeAddonProvider {

		/** Required */
		api: WannabeAddonProviderAPI;

		/** Required */
		id: string;

		/** Required */
		name: string;
	}
	export interface WannabeAddonProviderFormProperties {

		/** Required */
		id: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateWannabeAddonProviderFormGroup() {
		return new FormGroup<WannabeAddonProviderFormProperties>({
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeAddonProviderAPI {

		/** Required */
		config_vars: Array<string>;

		/** Required */
		password: string;
		production?: WannabeAddonProviderAPIUrl;
		regions?: Array<string>;

		/** Required */
		sso_salt: string;
		test?: WannabeAddonProviderAPIUrl;
	}
	export interface WannabeAddonProviderAPIFormProperties {

		/** Required */
		password: FormControl<string | null | undefined>,

		/** Required */
		sso_salt: FormControl<string | null | undefined>,
	}
	export function CreateWannabeAddonProviderAPIFormGroup() {
		return new FormGroup<WannabeAddonProviderAPIFormProperties>({
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sso_salt: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeAddonProviderAPIUrl {

		/** Required */
		base_url: string;

		/** Required */
		sso_url: string;
	}
	export interface WannabeAddonProviderAPIUrlFormProperties {

		/** Required */
		base_url: FormControl<string | null | undefined>,

		/** Required */
		sso_url: FormControl<string | null | undefined>,
	}
	export function CreateWannabeAddonProviderAPIUrlFormGroup() {
		return new FormGroup<WannabeAddonProviderAPIUrlFormProperties>({
			base_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			sso_url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeApplication {
		archived?: boolean | null;
		cancelOnPush?: boolean | null;

		/** Required */
		deploy: string;
		description?: string | null;

		/** Required */
		enabled: boolean;
		favourite?: boolean | null;
		homogeneous?: boolean | null;
		instanceType?: string | null;
		instanceVariant?: string | null;
		instanceVersion?: string | null;
		maxFlavor?: string | null;

		/** Required */
		maxInstances: number;
		minFlavor?: string | null;

		/** Required */
		minInstances: number;

		/** Required */
		name: string;
		oauthApp?: WannabeOauthApp;
		oauthAppId?: string | null;
		oauthService?: string | null;
		separateBuild?: boolean | null;
		shutdownable?: boolean | null;
		stickySessions?: boolean | null;
		tags?: Array<string>;

		/** Required */
		zone: string;
	}
	export interface WannabeApplicationFormProperties {
		archived: FormControl<boolean | null | undefined>,
		cancelOnPush: FormControl<boolean | null | undefined>,

		/** Required */
		deploy: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,
		favourite: FormControl<boolean | null | undefined>,
		homogeneous: FormControl<boolean | null | undefined>,
		instanceType: FormControl<string | null | undefined>,
		instanceVariant: FormControl<string | null | undefined>,
		instanceVersion: FormControl<string | null | undefined>,
		maxFlavor: FormControl<string | null | undefined>,

		/** Required */
		maxInstances: FormControl<number | null | undefined>,
		minFlavor: FormControl<string | null | undefined>,

		/** Required */
		minInstances: FormControl<number | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		oauthAppId: FormControl<string | null | undefined>,
		oauthService: FormControl<string | null | undefined>,
		separateBuild: FormControl<boolean | null | undefined>,
		shutdownable: FormControl<boolean | null | undefined>,
		stickySessions: FormControl<boolean | null | undefined>,

		/** Required */
		zone: FormControl<string | null | undefined>,
	}
	export function CreateWannabeApplicationFormGroup() {
		return new FormGroup<WannabeApplicationFormProperties>({
			archived: new FormControl<boolean | null | undefined>(undefined),
			cancelOnPush: new FormControl<boolean | null | undefined>(undefined),
			deploy: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			favourite: new FormControl<boolean | null | undefined>(undefined),
			homogeneous: new FormControl<boolean | null | undefined>(undefined),
			instanceType: new FormControl<string | null | undefined>(undefined),
			instanceVariant: new FormControl<string | null | undefined>(undefined),
			instanceVersion: new FormControl<string | null | undefined>(undefined),
			maxFlavor: new FormControl<string | null | undefined>(undefined),
			maxInstances: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minFlavor: new FormControl<string | null | undefined>(undefined),
			minInstances: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			oauthAppId: new FormControl<string | null | undefined>(undefined),
			oauthService: new FormControl<string | null | undefined>(undefined),
			separateBuild: new FormControl<boolean | null | undefined>(undefined),
			shutdownable: new FormControl<boolean | null | undefined>(undefined),
			stickySessions: new FormControl<boolean | null | undefined>(undefined),
			zone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeOauthApp {
		name?: string | null;
		owner?: string | null;
	}
	export interface WannabeOauthAppFormProperties {
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
	}
	export function CreateWannabeOauthAppFormGroup() {
		return new FormGroup<WannabeOauthAppFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WannabeConsumer {

		/**
		 * Must be a valid HTTP URL
		 * Required
		 */
		baseUrl: URL;
		description?: string | null;

		/** Required */
		name: string;
		picture?: string | null;

		/** Required */
		rights: WannabeConsumerRights;

		/**
		 * Must be a valid HTTP URL
		 * Required
		 */
		url: URL;
	}
	export interface WannabeConsumerFormProperties {
		description: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
		picture: FormControl<string | null | undefined>,
	}
	export function CreateWannabeConsumerFormGroup() {
		return new FormGroup<WannabeConsumerFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			picture: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WannabeConsumerRights {

		/** Required */
		activated: boolean;

		/** Required */
		right: string;
	}
	export interface WannabeConsumerRightsFormProperties {

		/** Required */
		activated: FormControl<boolean | null | undefined>,

		/** Required */
		right: FormControl<string | null | undefined>,
	}
	export function CreateWannabeConsumerRightsFormGroup() {
		return new FormGroup<WannabeConsumerRightsFormProperties>({
			activated: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			right: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeEnvVar {
	}
	export interface WannabeEnvVarFormProperties {
	}
	export function CreateWannabeEnvVarFormGroup() {
		return new FormGroup<WannabeEnvVarFormProperties>({
		});

	}

	export interface WannabeExternalPeer {
	}
	export interface WannabeExternalPeerFormProperties {
	}
	export function CreateWannabeExternalPeerFormGroup() {
		return new FormGroup<WannabeExternalPeerFormProperties>({
		});

	}

	export interface WannabeFeature {

		/** Required */
		name: string;

		/**
		 * BOOLEAN, INTERVAL, FILESIZE, NUMBER, PERCENTAGE
		 * Required
		 */
		type: string;
	}
	export interface WannabeFeatureFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * BOOLEAN, INTERVAL, FILESIZE, NUMBER, PERCENTAGE
		 * Required
		 */
		type: FormControl<string | null | undefined>,
	}
	export function CreateWannabeFeatureFormGroup() {
		return new FormGroup<WannabeFeatureFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeMember {

		/** Required */
		email: string;
		job?: string | null;

		/** Required */
		role: string;
	}
	export interface WannabeMemberFormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,
		job: FormControl<string | null | undefined>,

		/** Required */
		role: FormControl<string | null | undefined>,
	}
	export function CreateWannabeMemberFormGroup() {
		return new FormGroup<WannabeMemberFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			job: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeNetworkGroup {
	}
	export interface WannabeNetworkGroupFormProperties {
	}
	export function CreateWannabeNetworkGroupFormGroup() {
		return new FormGroup<WannabeNetworkGroupFormProperties>({
		});

	}

	export interface WannabeOrganisation {
		VAT?: string | null;

		/** The address of the organisation. */
		address?: string | null;

		/** The city of the organisation. */
		city?: string | null;

		/** The company's name of the organisation. */
		company?: string | null;

		/** The country of the organisation. */
		country?: string | null;

		/**
		 * The description of the organisation.
		 * Required
		 */
		description: string;

		/**
		 * The name of the organisation.
		 * Required
		 */
		name: string;

		/** The zipcode of the city's organisation. */
		zipcode?: string | null;
	}
	export interface WannabeOrganisationFormProperties {
		VAT: FormControl<string | null | undefined>,

		/** The address of the organisation. */
		address: FormControl<string | null | undefined>,

		/** The city of the organisation. */
		city: FormControl<string | null | undefined>,

		/** The company's name of the organisation. */
		company: FormControl<string | null | undefined>,

		/** The country of the organisation. */
		country: FormControl<string | null | undefined>,

		/**
		 * The description of the organisation.
		 * Required
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * The name of the organisation.
		 * Required
		 */
		name: FormControl<string | null | undefined>,

		/** The zipcode of the city's organisation. */
		zipcode: FormControl<string | null | undefined>,
	}
	export function CreateWannabeOrganisationFormGroup() {
		return new FormGroup<WannabeOrganisationFormProperties>({
			VAT: new FormControl<string | null | undefined>(undefined),
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			company: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			zipcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WannabePlan {

		/** Required */
		features: Array<WannabePlanFeature>;

		/** Required */
		name: string;

		/** Required */
		price: number;

		/** Required */
		slug: string;
	}
	export interface WannabePlanFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		price: FormControl<number | null | undefined>,

		/** Required */
		slug: FormControl<string | null | undefined>,
	}
	export function CreateWannabePlanFormGroup() {
		return new FormGroup<WannabePlanFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			price: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			slug: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabePlanFeature {

		/** Required */
		name: string;

		/** Required */
		type: string;

		/** Required */
		value: string;
	}
	export interface WannabePlanFeatureFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateWannabePlanFeatureFormGroup() {
		return new FormGroup<WannabePlanFeatureFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WannabeUser {
		address?: string | null;
		city?: string | null;
		country?: string | null;

		/** Required */
		email: string;
		lang?: string | null;
		name?: string | null;

		/** Required */
		password: string;
		phone?: string | null;

		/** Required */
		terms: boolean;
		zipcode?: string | null;
	}
	export interface WannabeUserFormProperties {
		address: FormControl<string | null | undefined>,
		city: FormControl<string | null | undefined>,
		country: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,
		lang: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,

		/** Required */
		password: FormControl<string | null | undefined>,
		phone: FormControl<string | null | undefined>,

		/** Required */
		terms: FormControl<boolean | null | undefined>,
		zipcode: FormControl<string | null | undefined>,
	}
	export function CreateWannabeUserFormGroup() {
		return new FormGroup<WannabeUserFormProperties>({
			address: new FormControl<string | null | undefined>(undefined),
			city: new FormControl<string | null | undefined>(undefined),
			country: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			lang: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined),
			terms: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			zipcode: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface WireGuardConfiguration {
	}
	export interface WireGuardConfigurationFormProperties {
	}
	export function CreateWireGuardConfigurationFormGroup() {
		return new FormGroup<WireGuardConfigurationFormProperties>({
		});

	}

	export interface Zone {

		/** Required */
		correspondingRegion: string;

		/** Required */
		internal: boolean;

		/** Required */
		name: string;
	}
	export interface ZoneFormProperties {

		/** Required */
		correspondingRegion: FormControl<string | null | undefined>,

		/** Required */
		internal: FormControl<boolean | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateZoneFormGroup() {
		return new FormGroup<ZoneFormProperties>({
			correspondingRegion: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			internal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Schema1 {

		/** Required */
		job: string;

		/** Required */
		member: Schema1Member;

		/** Required */
		role: string;
	}
	export interface Schema1FormProperties {

		/** Required */
		job: FormControl<string | null | undefined>,

		/** Required */
		role: FormControl<string | null | undefined>,
	}
	export function CreateSchema1FormGroup() {
		return new FormGroup<Schema1FormProperties>({
			job: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Schema1Member {
		avatar?: string | null;

		/** Required */
		email: string;

		/** Required */
		id: string;
		name?: string | null;
	}
	export interface Schema1MemberFormProperties {
		avatar: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateSchema1MemberFormGroup() {
		return new FormGroup<Schema1MemberFormProperties>({
			avatar: new FormControl<string | null | undefined>(undefined),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Schema2 {

		/** Required */
		email: string;
		job?: string | null;

		/** Required */
		role: string;
	}
	export interface Schema2FormProperties {

		/** Required */
		email: FormControl<string | null | undefined>,
		job: FormControl<string | null | undefined>,

		/** Required */
		role: FormControl<string | null | undefined>,
	}
	export function CreateSchema2FormGroup() {
		return new FormGroup<Schema2FormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			job: new FormControl<string | null | undefined>(undefined),
			role: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get /openapi
		 * @return {void} The swagger documenting this API in yaml format.
		 */
		OpenapiGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + '/openapi', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get application/{appId}/environment
		 * @return {void} Status 200
		 */
		Application_appIdEnvironmentGetByToken(token: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'application/{appId}/environment?token=' + (token == null ? '' : encodeURIComponent(token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put application/{appId}/environment
		 * @return {void} Status 200
		 */
		Application_appIdEnvironmentPutByToken(token: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'application/{appId}/environment?token=' + (token == null ? '' : encodeURIComponent(token)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Handled by our API.
		 * Post authorize
		 * @return {void} authorize
		 */
		AuthorizePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'authorize', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve events as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message
		 * Get events/event-socket
		 * @return {void} 
		 */
		EventsEvent_socketGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'events/event-socket', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get github
		 * @return {Transaction_Id} startGithub
		 */
		GithubGet(headersHandler?: () => HttpHeaders): Observable<Transaction_Id> {
			return this.http.get<Transaction_Id>(this.baseUri + 'github', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get github/applications
		 * @return {Array<Application>} getGithubApplications
		 */
		GithubApplicationsGet(headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'github/applications', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get github/callback
		 * @return {void} githubCallback
		 */
		GithubCallbackGetByCodeAndStateAndErrorAndError_descriptionAndError_uri(code: string | null | undefined, state: string | null | undefined, error: string | null | undefined, error_description: string | null | undefined, error_uri: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'github/callback?code=' + (code == null ? '' : encodeURIComponent(code)) + '&state=' + (state == null ? '' : encodeURIComponent(state)) + '&error=' + (error == null ? '' : encodeURIComponent(error)) + '&error_description=' + (error_description == null ? '' : encodeURIComponent(error_description)) + '&error_uri=' + (error_uri == null ? '' : encodeURIComponent(error_uri)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get github/emails
		 * @return {void} getGithubEmails
		 */
		GithubEmailsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'github/emails', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get github/keys
		 * @return {Array<Key>} getGithubKeys
		 */
		GithubKeysGet(headersHandler?: () => HttpHeaders): Observable<Array<Key>> {
			return this.http.get<Array<Key>>(this.baseUri + 'github/keys', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete github/link
		 * @return {void} unlinkGithub
		 */
		GithubLinkDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'github/link', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get github/link
		 * @param {string} transactionId From GET /github
		 * @return {void} linkGithub
		 */
		GithubLinkGetByTransactionIdAndRedirectUrl(transactionId: string | null | undefined, redirectUrl: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'github/link?transactionId=' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '&redirectUrl=' + (redirectUrl == null ? '' : encodeURIComponent(redirectUrl)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get github/login
		 * @return {void} githubLogin
		 */
		GithubLoginGetByRedirectUrlAndFromAuthorize(redirectUrl: string | null | undefined, fromAuthorize: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'github/login?redirectUrl=' + (redirectUrl == null ? '' : encodeURIComponent(redirectUrl)) + '&fromAuthorize=' + (fromAuthorize == null ? '' : encodeURIComponent(fromAuthorize)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post github/redeploy
		 * @return {void} redeployApp
		 */
		GithubRedeployPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'github/redeploy', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get github/signup
		 * @return {void} githubSignup
		 */
		GithubSignupGetByRedirectUrlAndFromAuthorize(redirectUrl: string | null | undefined, fromAuthorize: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'github/signup?redirectUrl=' + (redirectUrl == null ? '' : encodeURIComponent(redirectUrl)) + '&fromAuthorize=' + (fromAuthorize == null ? '' : encodeURIComponent(fromAuthorize)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post github/signup
		 * @return {void} finsihGithubSignup
		 */
		GithubSignupPostByTransactionIdAndNameAndOtherIdAndOtherEmailAndPasswordAndAutoLinkAndTerms(transactionId: string | null | undefined, name: string | null | undefined, otherId: string | null | undefined, otherEmail: string | null | undefined, password: string | null | undefined, autoLink: string | null | undefined, terms: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'github/signup?transactionId=' + (transactionId == null ? '' : encodeURIComponent(transactionId)) + '&name=' + (name == null ? '' : encodeURIComponent(name)) + '&otherId=' + (otherId == null ? '' : encodeURIComponent(otherId)) + '&otherEmail=' + (otherEmail == null ? '' : encodeURIComponent(otherEmail)) + '&password=' + (password == null ? '' : encodeURIComponent(password)) + '&autoLink=' + (autoLink == null ? '' : encodeURIComponent(autoLink)) + '&terms=' + (terms == null ? '' : encodeURIComponent(terms)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get github/username
		 * @return {void} getGithubUsername
		 */
		GithubUsernameGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'github/username', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * WebSocket to get logs for :appID. Optional queryString arg bind_to_es=true to bind WS on log storage and not real time AMQP broker
		 * Get logs-socket/{appId}
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		Logs_socket_appIdGet(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'logs-socket/' + (appId == null ? '' : encodeURIComponent(appId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch all the logs drains (ccadmin dedicated route)
		 * Get logs/drains
		 * @return {void} 
		 */
		LogsDrainsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'logs/drains', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch all the logs drains (ccadmin dedicated route)
		 * Put logs/drains/{drainId}
		 * @param {string} drainId Automatically added
		 * @return {void} 
		 */
		LogsDrains_drainIdPut(drainId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'logs/drains/' + (drainId == null ? '' : encodeURIComponent(drainId)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve logs as they come through a chunked, never-ending response
		 * Get logs/logs-chunked/{appId}
		 * @param {string} appId Application Id
		 * @param {boolean} download Tell the user-agent to download the body as a file
		 * @return {void} 
		 */
		LogsLogs_chunked_appIdGetByDownload(appId: string, download: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'logs/logs-chunked/' + (appId == null ? '' : encodeURIComponent(appId)) + '&download=' + download, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message
		 * Get logs/logs-socket/{appId}
		 * @param {string} appId Application Id
		 * @param {Date} since Only fetch logs newer than this (ISO-8601 formatted) date
		 * @param {string} filter A pattern to filter with
		 * @param {string} deployment_id Only fetch logs emitted by this deployment
		 * @return {void} 
		 */
		LogsLogs_socket_appIdGetBySinceAndFilterAndDeployment_id(appId: string, since: Date | null | undefined, filter: string | null | undefined, deployment_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'logs/logs-socket/' + (appId == null ? '' : encodeURIComponent(appId)) + '&since=' + since?.toISOString() + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&deployment_id=' + (deployment_id == null ? '' : encodeURIComponent(deployment_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the logs for a given application
		 * Get logs/{appId}
		 * @param {string} appId Application Id
		 * @param {number} limit Number of lines to return
		 * @param {Logs_appIdGetByLimitAndOrderAndAfterAndBeforeAndFilterAndDeployment_idOrder} order Logs order
		 * @param {Date} after Lowest bound for logs date, ISO 8601
		 * @param {Date} before Highest bounds for logs date, ISO 8601
		 * @param {string} filter A pattern to filter with
		 * @param {string} deployment_id Only fetch logs emitted by this deployment
		 * @return {void} 
		 */
		Logs_appIdGetByLimitAndOrderAndAfterAndBeforeAndFilterAndDeployment_id(appId: string, limit: number | null | undefined, order: Logs_appIdGetByLimitAndOrderAndAfterAndBeforeAndFilterAndDeployment_idOrder | null | undefined, after: Date | null | undefined, before: Date | null | undefined, filter: string | null | undefined, deployment_id: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '&limit=' + limit + '&order=' + order + '&after=' + after?.toISOString() + '&before=' + before?.toISOString() + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&deployment_id=' + (deployment_id == null ? '' : encodeURIComponent(deployment_id)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the logs drains for a given application
		 * Get logs/{appId}/drains
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		Logs_appIdDrainsGet(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/drains', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a log drain for a given application
		 * Post logs/{appId}/drains
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		Logs_appIdDrainsPost(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/drains', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the logs drain by id or url for a given application
		 * Delete logs/{appId}/drains/:idOrUrl
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		Logs_appIdDrains_idOrUrlDelete(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/drains/:idOrUrl', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the logs drain by id or url for a given application
		 * Get logs/{appId}/drains/:idOrUrl
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		Logs_appIdDrains_idOrUrlGet(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/drains/:idOrUrl', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve logs as they come through a sse connection. To have authorization, you have to add `authorization=oAuthAuthorizationString` as query param.
		 * Get logs/{appId}/sse
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		Logs_appIdSseGet(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/sse', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get newsfeeds/blog
		 * @return {void} getBlogFeed
		 */
		NewsfeedsBlogGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'newsfeeds/blog', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get newsfeeds/engineering
		 * @return {void} getEngineeringFeed
		 */
		NewsfeedsEngineeringGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'newsfeeds/engineering', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * list created e-mail hooks
		 * Get notifications/emailhooks/{ownerId}
		 * @param {string} ownerId Automatically added
		 * @return {void} 
		 */
		NotificationsEmailhooks_ownerIdGet(ownerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'notifications/emailhooks/' + (ownerId == null ? '' : encodeURIComponent(ownerId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * create a hook for e-mail notifications
		 * Post notifications/emailhooks/{ownerId}
		 * @param {string} ownerId Automatically added
		 * @return {void} 
		 */
		NotificationsEmailhooks_ownerIdPost(ownerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'notifications/emailhooks/' + (ownerId == null ? '' : encodeURIComponent(ownerId)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * delete an e-mail hook
		 * Delete notifications/emailhooks/{ownerId}/:id
		 * @param {string} ownerId Automatically added
		 * @return {void} 
		 */
		NotificationsEmailhooks_ownerId_idDelete(ownerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'notifications/emailhooks/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/:id', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * edit an e-mail hook
		 * Put notifications/emailhooks/{ownerId}/:id
		 * @param {string} ownerId Automatically added
		 * @return {void} 
		 */
		NotificationsEmailhooks_ownerId_idPut(ownerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'notifications/emailhooks/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/:id', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * list available events
		 * Get notifications/info/events
		 * @return {void} 
		 */
		NotificationsInfoEventsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'notifications/info/events', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * list available webhook formats
		 * Get notifications/info/webhookformats
		 * @return {void} 
		 */
		NotificationsInfoWebhookformatsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'notifications/info/webhookformats', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * list created hooks
		 * Get notifications/webhooks/{ownerId}
		 * @param {string} ownerId Automatically added
		 * @return {void} 
		 */
		NotificationsWebhooks_ownerIdGet(ownerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'notifications/webhooks/' + (ownerId == null ? '' : encodeURIComponent(ownerId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * create a hook for notifications
		 * Post notifications/webhooks/{ownerId}
		 * @param {string} ownerId Automatically added
		 * @return {void} 
		 */
		NotificationsWebhooks_ownerIdPost(ownerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'notifications/webhooks/' + (ownerId == null ? '' : encodeURIComponent(ownerId)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * delete a hook
		 * Delete notifications/webhooks/{ownerId}/:id
		 * @param {string} ownerId Automatically added
		 * @return {void} 
		 */
		NotificationsWebhooks_ownerId_idDelete(ownerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'notifications/webhooks/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/:id', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * edit a hook
		 * Put notifications/webhooks/{ownerId}/:id
		 * @param {string} ownerId Automatically added
		 * @return {void} 
		 */
		NotificationsWebhooks_ownerId_idPut(ownerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'notifications/webhooks/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/:id', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post oauth/access_token
		 * @return {void} postAccessTokenRequest
		 */
		OauthAccess_tokenPostByOauth_consumer_keyAndOauth_tokenAndOauth_signature_methodAndOauth_signatureAndOauth_timestampAndOauth_nonceAndOauth_versionAndOauth_verifierAndOauth_callbackAndOauth_token_secretAndOauth_callback_confirmed(oauth_consumer_key: string | null | undefined, oauth_token: string | null | undefined, oauth_signature_method: string | null | undefined, oauth_signature: string | null | undefined, oauth_timestamp: string | null | undefined, oauth_nonce: string | null | undefined, oauth_version: string | null | undefined, oauth_verifier: string | null | undefined, oauth_callback: string | null | undefined, oauth_token_secret: string | null | undefined, oauth_callback_confirmed: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth/access_token?oauth_consumer_key=' + (oauth_consumer_key == null ? '' : encodeURIComponent(oauth_consumer_key)) + '&oauth_token=' + (oauth_token == null ? '' : encodeURIComponent(oauth_token)) + '&oauth_signature_method=' + (oauth_signature_method == null ? '' : encodeURIComponent(oauth_signature_method)) + '&oauth_signature=' + (oauth_signature == null ? '' : encodeURIComponent(oauth_signature)) + '&oauth_timestamp=' + (oauth_timestamp == null ? '' : encodeURIComponent(oauth_timestamp)) + '&oauth_nonce=' + (oauth_nonce == null ? '' : encodeURIComponent(oauth_nonce)) + '&oauth_version=' + (oauth_version == null ? '' : encodeURIComponent(oauth_version)) + '&oauth_verifier=' + (oauth_verifier == null ? '' : encodeURIComponent(oauth_verifier)) + '&oauth_callback=' + (oauth_callback == null ? '' : encodeURIComponent(oauth_callback)) + '&oauth_token_secret=' + (oauth_token_secret == null ? '' : encodeURIComponent(oauth_token_secret)) + '&oauth_callback_confirmed=' + (oauth_callback_confirmed == null ? '' : encodeURIComponent(oauth_callback_confirmed)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post oauth/access_token_query
		 * @return {void} Status 200
		 */
		OauthAccess_token_queryPostByOauth_consumer_keyAndOauth_tokenAndOauth_signature_methodAndOauth_signatureAndOauth_timestampAndOauth_nonceAndOauth_versionAndOauth_verifierAndOauth_callbackAndOauth_token_secretAndOauth_callback_confirmed(oauth_consumer_key: string | null | undefined, oauth_token: string | null | undefined, oauth_signature_method: string | null | undefined, oauth_signature: string | null | undefined, oauth_timestamp: string | null | undefined, oauth_nonce: string | null | undefined, oauth_version: string | null | undefined, oauth_verifier: string | null | undefined, oauth_callback: string | null | undefined, oauth_token_secret: string | null | undefined, oauth_callback_confirmed: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth/access_token_query?oauth_consumer_key=' + (oauth_consumer_key == null ? '' : encodeURIComponent(oauth_consumer_key)) + '&oauth_token=' + (oauth_token == null ? '' : encodeURIComponent(oauth_token)) + '&oauth_signature_method=' + (oauth_signature_method == null ? '' : encodeURIComponent(oauth_signature_method)) + '&oauth_signature=' + (oauth_signature == null ? '' : encodeURIComponent(oauth_signature)) + '&oauth_timestamp=' + (oauth_timestamp == null ? '' : encodeURIComponent(oauth_timestamp)) + '&oauth_nonce=' + (oauth_nonce == null ? '' : encodeURIComponent(oauth_nonce)) + '&oauth_version=' + (oauth_version == null ? '' : encodeURIComponent(oauth_version)) + '&oauth_verifier=' + (oauth_verifier == null ? '' : encodeURIComponent(oauth_verifier)) + '&oauth_callback=' + (oauth_callback == null ? '' : encodeURIComponent(oauth_callback)) + '&oauth_token_secret=' + (oauth_token_secret == null ? '' : encodeURIComponent(oauth_token_secret)) + '&oauth_callback_confirmed=' + (oauth_callback_confirmed == null ? '' : encodeURIComponent(oauth_callback_confirmed)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get oauth/authorize
		 * @return {void} authorizeForm
		 */
		OauthAuthorizeGetByOauth_token(oauth_token: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'oauth/authorize?oauth_token=' + (oauth_token == null ? '' : encodeURIComponent(oauth_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post oauth/authorize
		 * @return {void} authorizeToken
		 */
		OauthAuthorizePostByAlmightyAndAccess_organisationsAndManage_organisationsAndManage_organisations_servicesAndManage_organisations_applicationsAndManage_organisations_membersAndAccess_organisations_billsAndAccess_organisations_credit_countAndAccess_organisations_consumption_statisticsAndAccess_personal_informationAndManage_personal_informationAndManage_ssh_keysAndManage_servicesAndManage_applicationsAndAccess_billsAndAccess_credit_countAndAccess_consumption_statistics(almighty: string | null | undefined, access_organisations: string | null | undefined, manage_organisations: string | null | undefined, manage_organisations_services: string | null | undefined, manage_organisations_applications: string | null | undefined, manage_organisations_members: string | null | undefined, access_organisations_bills: string | null | undefined, access_organisations_credit_count: string | null | undefined, access_organisations_consumption_statistics: string | null | undefined, access_personal_information: string | null | undefined, manage_personal_information: string | null | undefined, manage_ssh_keys: string | null | undefined, manage_services: string | null | undefined, manage_applications: string | null | undefined, access_bills: string | null | undefined, access_credit_count: string | null | undefined, access_consumption_statistics: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth/authorize?almighty=' + (almighty == null ? '' : encodeURIComponent(almighty)) + '&access_organisations=' + (access_organisations == null ? '' : encodeURIComponent(access_organisations)) + '&manage_organisations=' + (manage_organisations == null ? '' : encodeURIComponent(manage_organisations)) + '&manage_organisations_services=' + (manage_organisations_services == null ? '' : encodeURIComponent(manage_organisations_services)) + '&manage_organisations_applications=' + (manage_organisations_applications == null ? '' : encodeURIComponent(manage_organisations_applications)) + '&manage_organisations_members=' + (manage_organisations_members == null ? '' : encodeURIComponent(manage_organisations_members)) + '&access_organisations_bills=' + (access_organisations_bills == null ? '' : encodeURIComponent(access_organisations_bills)) + '&access_organisations_credit_count=' + (access_organisations_credit_count == null ? '' : encodeURIComponent(access_organisations_credit_count)) + '&access_organisations_consumption_statistics=' + (access_organisations_consumption_statistics == null ? '' : encodeURIComponent(access_organisations_consumption_statistics)) + '&access_personal_information=' + (access_personal_information == null ? '' : encodeURIComponent(access_personal_information)) + '&manage_personal_information=' + (manage_personal_information == null ? '' : encodeURIComponent(manage_personal_information)) + '&manage_ssh_keys=' + (manage_ssh_keys == null ? '' : encodeURIComponent(manage_ssh_keys)) + '&manage_services=' + (manage_services == null ? '' : encodeURIComponent(manage_services)) + '&manage_applications=' + (manage_applications == null ? '' : encodeURIComponent(manage_applications)) + '&access_bills=' + (access_bills == null ? '' : encodeURIComponent(access_bills)) + '&access_credit_count=' + (access_credit_count == null ? '' : encodeURIComponent(access_credit_count)) + '&access_consumption_statistics=' + (access_consumption_statistics == null ? '' : encodeURIComponent(access_consumption_statistics)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post oauth/request_token
		 * @return {void} postReqTokenRequest
		 */
		OauthRequest_tokenPostByOauth_consumer_keyAndOauth_tokenAndOauth_signature_methodAndOauth_signatureAndOauth_timestampAndOauth_nonceAndOauth_versionAndOauth_verifierAndOauth_callbackAndOauth_token_secretAndOauth_callback_confirmed(oauth_consumer_key: string | null | undefined, oauth_token: string | null | undefined, oauth_signature_method: string | null | undefined, oauth_signature: string | null | undefined, oauth_timestamp: string | null | undefined, oauth_nonce: string | null | undefined, oauth_version: string | null | undefined, oauth_verifier: string | null | undefined, oauth_callback: string | null | undefined, oauth_token_secret: string | null | undefined, oauth_callback_confirmed: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth/request_token?oauth_consumer_key=' + (oauth_consumer_key == null ? '' : encodeURIComponent(oauth_consumer_key)) + '&oauth_token=' + (oauth_token == null ? '' : encodeURIComponent(oauth_token)) + '&oauth_signature_method=' + (oauth_signature_method == null ? '' : encodeURIComponent(oauth_signature_method)) + '&oauth_signature=' + (oauth_signature == null ? '' : encodeURIComponent(oauth_signature)) + '&oauth_timestamp=' + (oauth_timestamp == null ? '' : encodeURIComponent(oauth_timestamp)) + '&oauth_nonce=' + (oauth_nonce == null ? '' : encodeURIComponent(oauth_nonce)) + '&oauth_version=' + (oauth_version == null ? '' : encodeURIComponent(oauth_version)) + '&oauth_verifier=' + (oauth_verifier == null ? '' : encodeURIComponent(oauth_verifier)) + '&oauth_callback=' + (oauth_callback == null ? '' : encodeURIComponent(oauth_callback)) + '&oauth_token_secret=' + (oauth_token_secret == null ? '' : encodeURIComponent(oauth_token_secret)) + '&oauth_callback_confirmed=' + (oauth_callback_confirmed == null ? '' : encodeURIComponent(oauth_callback_confirmed)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post oauth/request_token_query
		 * @return {void} Status 200
		 */
		OauthRequest_token_queryPostByOauth_consumer_keyAndOauth_tokenAndOauth_signature_methodAndOauth_signatureAndOauth_timestampAndOauth_nonceAndOauth_versionAndOauth_verifierAndOauth_callbackAndOauth_token_secretAndOauth_callback_confirmed(oauth_consumer_key: string | null | undefined, oauth_token: string | null | undefined, oauth_signature_method: string | null | undefined, oauth_signature: string | null | undefined, oauth_timestamp: string | null | undefined, oauth_nonce: string | null | undefined, oauth_version: string | null | undefined, oauth_verifier: string | null | undefined, oauth_callback: string | null | undefined, oauth_token_secret: string | null | undefined, oauth_callback_confirmed: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'oauth/request_token_query?oauth_consumer_key=' + (oauth_consumer_key == null ? '' : encodeURIComponent(oauth_consumer_key)) + '&oauth_token=' + (oauth_token == null ? '' : encodeURIComponent(oauth_token)) + '&oauth_signature_method=' + (oauth_signature_method == null ? '' : encodeURIComponent(oauth_signature_method)) + '&oauth_signature=' + (oauth_signature == null ? '' : encodeURIComponent(oauth_signature)) + '&oauth_timestamp=' + (oauth_timestamp == null ? '' : encodeURIComponent(oauth_timestamp)) + '&oauth_nonce=' + (oauth_nonce == null ? '' : encodeURIComponent(oauth_nonce)) + '&oauth_version=' + (oauth_version == null ? '' : encodeURIComponent(oauth_version)) + '&oauth_verifier=' + (oauth_verifier == null ? '' : encodeURIComponent(oauth_verifier)) + '&oauth_callback=' + (oauth_callback == null ? '' : encodeURIComponent(oauth_callback)) + '&oauth_token_secret=' + (oauth_token_secret == null ? '' : encodeURIComponent(oauth_token_secret)) + '&oauth_callback_confirmed=' + (oauth_callback_confirmed == null ? '' : encodeURIComponent(oauth_callback_confirmed)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get oauth/rights
		 * @return {Rights} getAvailableRights
		 */
		OauthRightsGet(headersHandler?: () => HttpHeaders): Observable<Rights> {
			return this.http.get<Rights>(this.baseUri + 'oauth/rights', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get the swagger for this API as {type}
		 * Get the swagger for this API as {type}. Type can be either "yml" or "json".
		 * Get openapi.{type}
		 * @return {void} This API swagger documentation in {type} format.
		 */
		Openapi__typeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'openapi.{type}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations
		 * @return {Array<Organisation>} getUserOrganisations
		 */
		OrganisationsGetByUser(user: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Organisation>> {
			return this.http.get<Array<Organisation>>(this.baseUri + 'organisations?user=' + (user == null ? '' : encodeURIComponent(user)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post organisations
		 * @return {void} createOrganisation
		 */
		OrganisationsPost(requestBody: WannabeOrganisation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}
		 * @return {void} deleteOrganisation
		 */
		Organisations_idDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}
		 * @return {Organisation} getOrganisation
		 */
		Organisations_idGet(headersHandler?: () => HttpHeaders): Observable<Organisation> {
			return this.http.get<Organisation>(this.baseUri + 'organisations/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put organisations/{id}
		 * @return {void} editOrganisation
		 */
		Organisations_idPut(requestBody: WannabeOrganisation, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/addonproviders
		 * @return {Array<Provider>} Get all informations about all providers.
		 */
		Organisations_idAddonprovidersGet(headersHandler?: () => HttpHeaders): Observable<Array<Provider>> {
			return this.http.get<Array<Provider>>(this.baseUri + 'organisations/{id}/addonproviders', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post organisations/{id}/addonproviders
		 * @return {void} createProvider
		 */
		Organisations_idAddonprovidersPost(requestBody: WannabeAddonProvider, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/addonproviders', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove an add-on provider
		 * Remove a given add-on provider. providerId must be owned by organisation {id}.
		 * Delete organisations/{id}/addonproviders/{providerId}
		 * @return {void} 
		 */
		Organisations_idAddonproviders_providerIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/addonproviders/{providerId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/addonproviders/{providerId}
		 * @return {Provider} Get all informations about given provider.
		 */
		Organisations_idAddonproviders_providerIdGet(headersHandler?: () => HttpHeaders): Observable<Provider> {
			return this.http.get<Provider>(this.baseUri + 'organisations/{id}/addonproviders/{providerId}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put organisations/{id}/addonproviders/{providerId}
		 * @return {void} updateProviderInfos
		 */
		Organisations_idAddonproviders_providerIdPut(requestBody: WannabeAddonProvider, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/addonproviders/{providerId}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/addonproviders/{providerId}/features
		 * @return {Array<Feature>} getProviderFeatures
		 */
		Organisations_idAddonproviders_providerIdFeaturesGet(headersHandler?: () => HttpHeaders): Observable<Array<Feature>> {
			return this.http.get<Array<Feature>>(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/features', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post organisations/{id}/addonproviders/{providerId}/features
		 * @return {void} addProviderFeature
		 */
		Organisations_idAddonproviders_providerIdFeaturesPost(requestBody: WannabeFeature, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/features', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/addonproviders/{providerId}/features/{featureId}
		 * @return {void} deleteProviderFeature
		 */
		Organisations_idAddonproviders_providerIdFeatures_featureIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/features/{featureId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/addonproviders/{providerId}/plans
		 * @return {Array<Plan>} getProviderPlans
		 */
		Organisations_idAddonproviders_providerIdPlansGet(headersHandler?: () => HttpHeaders): Observable<Array<Plan>> {
			return this.http.get<Array<Plan>>(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/plans', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post organisations/{id}/addonproviders/{providerId}/plans
		 * @return {void} addProviderPlan
		 */
		Organisations_idAddonproviders_providerIdPlansPost(requestBody: WannabePlan, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/plans', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/addonproviders/{providerId}/plans/{planId}
		 * @return {void} deleteProviderPlan
		 */
		Organisations_idAddonproviders_providerIdPlans_planIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/plans/{planId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/addonproviders/{providerId}/plans/{planId}
		 * @return {Plan} getProviderPlan
		 */
		Organisations_idAddonproviders_providerIdPlans_planIdGet(headersHandler?: () => HttpHeaders): Observable<Plan> {
			return this.http.get<Plan>(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/plans/{planId}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put organisations/{id}/addonproviders/{providerId}/plans/{planId}
		 * @return {void} editProviderPlan
		 */
		Organisations_idAddonproviders_providerIdPlans_planIdPut(requestBody: WannabePlan, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/plans/{planId}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName}
		 * @return {void} deleteProviderPlanFeature
		 */
		Organisations_idAddonproviders_providerIdPlans_planIdFeatures_featureNameDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName}
		 * @return {void} editProviderPlanFeature
		 */
		Organisations_idAddonproviders_providerIdPlans_planIdFeatures_featureNamePut(requestBody: WannabePlanFeature, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/plans/{planId}/features/{featureName}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/addonproviders/{providerId}/sso
		 * @return {AddonProviderSso} getSSOData
		 */
		Organisations_idAddonproviders_providerIdSsoGet(headersHandler?: () => HttpHeaders): Observable<AddonProviderSso> {
			return this.http.get<AddonProviderSso>(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/sso', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/addonproviders/{providerId}/tags
		 * @return {void} getProviderTags
		 */
		Organisations_idAddonproviders_providerIdTagsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/tags', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post organisations/{id}/addonproviders/{providerId}/testers
		 * @return {void} addBetaTester
		 */
		Organisations_idAddonproviders_providerIdTestersPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/addonproviders/{providerId}/testers', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/addons
		 * @return {Array<Addon>} getAddons
		 */
		Organisations_idAddonsGet(headersHandler?: () => HttpHeaders): Observable<Array<Addon>> {
			return this.http.get<Array<Addon>>(this.baseUri + 'organisations/{id}/addons', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post organisations/{id}/addons
		 * @return {void} provisionAddon
		 */
		Organisations_idAddonsPost(requestBody: WannabeAddon, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/addons', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post organisations/{id}/addons/preorders
		 * @return {void} Status 200
		 */
		Organisations_idAddonsPreordersPost(requestBody: WannabeAddon, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/addons/preorders', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/addons/{addonId}
		 * @return {void} deprovisionAddon
		 */
		Organisations_idAddons_addonIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/addons/{addonId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/addons/{addonId}
		 * @return {Addon} getAddon
		 */
		Organisations_idAddons_addonIdGet(headersHandler?: () => HttpHeaders): Observable<Addon> {
			return this.http.get<Addon>(this.baseUri + 'organisations/{id}/addons/{addonId}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put organisations/{id}/addons/{addonId}
		 * @return {void} Update addon information
		 */
		Organisations_idAddons_addonIdPut(requestBody: WannabeAddon, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/addons/{addonId}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/addons/{addonId}/applications
		 * @return {Array<Application>} getApplicationsLinkedToAddon
		 */
		Organisations_idAddons_addonIdApplicationsGet(headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'organisations/{id}/addons/{addonId}/applications', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/addons/{addonId}/env
		 * @return {Array<ListEnv>} getAddonEnv
		 */
		Organisations_idAddons_addonIdEnvGet(headersHandler?: () => HttpHeaders): Observable<Array<ListEnv>> {
			return this.http.get<Array<ListEnv>>(this.baseUri + 'organisations/{id}/addons/{addonId}/env', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List instances for this add-on.
		 * Get organisations/{id}/addons/{addonId}/instances
		 * @return {Array<SupernovaInstanceView>} The instance list
		 */
		Organisations_idAddons_addonIdInstancesGetByDeploymentIdAndWithDeleted(deploymentId: string | null | undefined, withDeleted: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<SupernovaInstanceView>> {
			return this.http.get<Array<SupernovaInstanceView>>(this.baseUri + 'organisations/{id}/addons/{addonId}/instances?deploymentId=' + (deploymentId == null ? '' : encodeURIComponent(deploymentId)) + '&withDeleted=' + (withDeleted == null ? '' : encodeURIComponent(withDeleted)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get a specific instance for {addonId}
		 * Get organisations/{id}/addons/{addonId}/instances/{instanceId}
		 * @return {SupernovaInstanceView} An instance
		 */
		Organisations_idAddons_addonIdInstances_instanceIdGet(headersHandler?: () => HttpHeaders): Observable<SupernovaInstanceView> {
			return this.http.get<SupernovaInstanceView>(this.baseUri + 'organisations/{id}/addons/{addonId}/instances/{instanceId}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get past migrations from add-on.
		 * Get organisations/{id}/addons/{addonId}/migrations
		 * @return {Array<AddonMigration>} List of migrations
		 */
		Organisations_idAddons_addonIdMigrationsGet(headersHandler?: () => HttpHeaders): Observable<Array<AddonMigration>> {
			return this.http.get<Array<AddonMigration>>(this.baseUri + 'organisations/{id}/addons/{addonId}/migrations', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Start a new add-on migration
		 * Post organisations/{id}/addons/{addonId}/migrations
		 * @return {string} Migration has started.
		 */
		Organisations_idAddons_addonIdMigrationsPost(requestBody: Organisations_idAddons_addonIdMigrationsPostPostBody, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'organisations/{id}/addons/{addonId}/migrations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Get a given migration
		 * Get organisations/{id}/addons/{addonId}/migrations/{migrationId}
		 * @return {AddonMigration} The migration object
		 */
		Organisations_idAddons_addonIdMigrations_migrationIdGet(headersHandler?: () => HttpHeaders): Observable<AddonMigration> {
			return this.http.get<AddonMigration>(this.baseUri + 'organisations/{id}/addons/{addonId}/migrations/{migrationId}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/addons/{addonId}/sso
		 * @return {Sso} getSSOData
		 */
		Organisations_idAddons_addonIdSsoGet(headersHandler?: () => HttpHeaders): Observable<Sso> {
			return this.http.get<Sso>(this.baseUri + 'organisations/{id}/addons/{addonId}/sso', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/addons/{addonId}/tags
		 * @return {void} getAddonTags
		 */
		Organisations_idAddons_addonIdTagsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/addons/{addonId}/tags', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/addons/{addonId}/tags/{tag}
		 * @return {void} deleteAddonTag
		 */
		Organisations_idAddons_addonIdTags_tagDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/addons/{addonId}/tags/{tag}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/addons/{addonId}/tags/{tag}
		 * @return {void} addAddonTag
		 */
		Organisations_idAddons_addonIdTags_tagPut(requestBody: Body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/addons/{addonId}/tags/{tag}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications
		 * @return {Array<Application>} getAllApplications
		 */
		Organisations_idApplicationsGet(headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'organisations/{id}/applications', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates an application. If you want to create a Github app, you need to replace the oauthApp field with what you will find here: https://github.com/CleverCloud/doc.clever-cloud.com/issues/179
		 * Post organisations/{id}/applications
		 * @return {void} addApplication
		 */
		Organisations_idApplicationsPost(requestBody: WannabeApplication, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/applications', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/applications/{appId}
		 * @return {void} deleteApplication
		 */
		Organisations_idApplications_appIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/applications/{appId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}
		 * @return {Application} getApplication
		 */
		Organisations_idApplications_appIdGet(headersHandler?: () => HttpHeaders): Observable<Application> {
			return this.http.get<Application>(this.baseUri + 'organisations/{id}/applications/{appId}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put organisations/{id}/applications/{appId}
		 * @return {void} editApplication
		 */
		Organisations_idApplications_appIdPut(requestBody: WannabeApplication, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/applications/{appId}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/addons
		 * @return {Array<Addon>} getAddonsLinkedToApplication
		 */
		Organisations_idApplications_appIdAddonsGet(headersHandler?: () => HttpHeaders): Observable<Array<Addon>> {
			return this.http.get<Array<Addon>>(this.baseUri + 'organisations/{id}/applications/{appId}/addons', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post organisations/{id}/applications/{appId}/addons
		 * @return {void} linkAddonToApplication
		 */
		Organisations_idApplications_appIdAddonsPost(requestBody: Body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/applications/{appId}/addons', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/addons/env
		 * @return {Array<Env>} getEnvOfAddonsLinkedToApplication
		 */
		Organisations_idApplications_appIdAddonsEnvGet(headersHandler?: () => HttpHeaders): Observable<Array<Env>> {
			return this.http.get<Array<Env>>(this.baseUri + 'organisations/{id}/applications/{appId}/addons/env', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete organisations/{id}/applications/{appId}/addons/{addonId}
		 * @return {void} unlinkAddonFromApplication
		 */
		Organisations_idApplications_appIdAddons_addonIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/applications/{appId}/addons/{addonId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/applications/{appId}/branch
		 * @return {void} Status 200
		 */
		Organisations_idApplications_appIdBranchPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/applications/{appId}/branch', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/branches
		 * @return {void} Status 200
		 */
		Organisations_idApplications_appIdBranchesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/applications/{appId}/branches', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/applications/{appId}/buildflavor
		 * @return {void} Status 200
		 */
		Organisations_idApplications_appIdBuildflavorPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/applications/{appId}/buildflavor', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/dependencies
		 * @return {Array<Application>} getApplicationDependencies
		 */
		Organisations_idApplications_appIdDependenciesGet(headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'organisations/{id}/applications/{appId}/dependencies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/dependencies/env
		 * @return {void} Get env variables defined by application dependencies
		 */
		Organisations_idApplications_appIdDependenciesEnvGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/applications/{appId}/dependencies/env', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/applications/{appId}/dependencies/{dependencyId}
		 * @return {void} deleteApplicationDependency
		 */
		Organisations_idApplications_appIdDependencies_dependencyIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/applications/{appId}/dependencies/{dependencyId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/applications/{appId}/dependencies/{dependencyId}
		 * @return {void} addApplicationDependency
		 */
		Organisations_idApplications_appIdDependencies_dependencyIdPut(requestBody: Body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/applications/{appId}/dependencies/{dependencyId}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/dependents
		 * @return {Array<Application>} getApplicationDependents
		 */
		Organisations_idApplications_appIdDependentsGet(headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'organisations/{id}/applications/{appId}/dependents', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/deployments
		 * @return {Array<Deployment>} getApplicationDeploymentsForOrga
		 */
		Organisations_idApplications_appIdDeploymentsGetByLimitAndOffsetAndAction(limit: string | null | undefined, offset: string | null | undefined, action: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Deployment>> {
			return this.http.get<Array<Deployment>>(this.baseUri + 'organisations/{id}/applications/{appId}/deployments?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&action=' + (action == null ? '' : encodeURIComponent(action)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/deployments/{deploymentId}
		 * @return {void} Status 200
		 */
		Organisations_idApplications_appIdDeployments_deploymentIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/applications/{appId}/deployments/{deploymentId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/applications/{appId}/deployments/{deploymentId}/instances
		 * @return {void} getApplicationDeploymentsForOrga
		 */
		Organisations_idApplications_appIdDeployments_deploymentIdInstancesDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/applications/{appId}/deployments/{deploymentId}/instances', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/env
		 * @return {Array<ListEnv>} getApplicationEnv
		 */
		Organisations_idApplications_appIdEnvGet(headersHandler?: () => HttpHeaders): Observable<Array<ListEnv>> {
			return this.http.get<Array<ListEnv>>(this.baseUri + 'organisations/{id}/applications/{appId}/env', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put organisations/{id}/applications/{appId}/env
		 * @return {void} editApplicationEnvironment
		 */
		Organisations_idApplications_appIdEnvPut(requestBody: WannabeEnv, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/applications/{appId}/env', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/applications/{appId}/env/{envName}
		 * @return {void} removeApplicationEnv
		 */
		Organisations_idApplications_appIdEnv_envNameDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/applications/{appId}/env/{envName}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/applications/{appId}/env/{envName}
		 * @return {void} editApplicationEnv
		 */
		Organisations_idApplications_appIdEnv_envNamePut(requestBody: WannabeEnv, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/applications/{appId}/env/{envName}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/exposed_env
		 * @return {void} Status 200
		 */
		Organisations_idApplications_appIdExposed_envGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/applications/{appId}/exposed_env', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/applications/{appId}/exposed_env
		 * @return {void} Status 200
		 */
		Organisations_idApplications_appIdExposed_envPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/applications/{appId}/exposed_env', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/applications/{appId}/instances
		 * @return {void} undeployApplication
		 */
		Organisations_idApplications_appIdInstancesDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/applications/{appId}/instances', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/instances
		 * @return {Array<AppInstance>} getApplicationInstances
		 */
		Organisations_idApplications_appIdInstancesGet(headersHandler?: () => HttpHeaders): Observable<Array<AppInstance>> {
			return this.http.get<Array<AppInstance>>(this.baseUri + 'organisations/{id}/applications/{appId}/instances', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post organisations/{id}/applications/{appId}/instances
		 * @return {void} redeployApplication
		 */
		Organisations_idApplications_appIdInstancesPostByCommit(commit: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/applications/{appId}/instances?commit=' + (commit == null ? '' : encodeURIComponent(commit)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/instances/{instanceId}
		 * @return {void} Status 200
		 */
		Organisations_idApplications_appIdInstances_instanceIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/applications/{appId}/instances/{instanceId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/tags
		 * @return {void} getApplicationTags
		 */
		Organisations_idApplications_appIdTagsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/applications/{appId}/tags', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/applications/{appId}/tags/{tag}
		 * @return {void} deleteApplicationTag
		 */
		Organisations_idApplications_appIdTags_tagDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/applications/{appId}/tags/{tag}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/applications/{appId}/tags/{tag}
		 * @return {void} addApplicationTag
		 */
		Organisations_idApplications_appIdTags_tagPut(requestBody: Body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/applications/{appId}/tags/{tag}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/vhosts
		 * @return {Array<Vhost>} getVhosts
		 */
		Organisations_idApplications_appIdVhostsGet(headersHandler?: () => HttpHeaders): Observable<Array<Vhost>> {
			return this.http.get<Array<Vhost>>(this.baseUri + 'organisations/{id}/applications/{appId}/vhosts', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete organisations/{id}/applications/{appId}/vhosts/favourite
		 * @return {void} unmarkFavouriteVhost
		 */
		Organisations_idApplications_appIdVhostsFavouriteDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/applications/{appId}/vhosts/favourite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/applications/{appId}/vhosts/favourite
		 * @return {Vhost} getFavouriteVhost
		 */
		Organisations_idApplications_appIdVhostsFavouriteGet(headersHandler?: () => HttpHeaders): Observable<Vhost> {
			return this.http.get<Vhost>(this.baseUri + 'organisations/{id}/applications/{appId}/vhosts/favourite', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put organisations/{id}/applications/{appId}/vhosts/favourite
		 * @return {void} markFavouriteVhost
		 */
		Organisations_idApplications_appIdVhostsFavouritePut(requestBody: Vhost, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/applications/{appId}/vhosts/favourite', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/applications/{appId}/vhosts/{domain}
		 * @return {void} removeVhost
		 */
		Organisations_idApplications_appIdVhosts_domainDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/applications/{appId}/vhosts/{domain}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/applications/{appId}/vhosts/{domain}
		 * @return {void} addVhost
		 */
		Organisations_idApplications_appIdVhosts_domainPut(requestBody: Vhost, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/applications/{appId}/vhosts/{domain}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * If you want to upload an image from your computer, send the image in the body of the request without anything else.
		 * Put organisations/{id}/avatar
		 * @return {void} setOrgaAvatar
		 * setOrgaAvatarFromSource
		 */
		Organisations_idAvatarPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/avatar', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/consumers
		 * @return {Array<Consumer>} getConsumers
		 */
		Organisations_idConsumersGet(headersHandler?: () => HttpHeaders): Observable<Array<Consumer>> {
			return this.http.get<Array<Consumer>>(this.baseUri + 'organisations/{id}/consumers', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post organisations/{id}/consumers
		 * @return {void} createConsumer
		 */
		Organisations_idConsumersPost(requestBody: WannabeConsumer, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/consumers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/consumers/{key}
		 * @return {void} deleteConsumer
		 */
		Organisations_idConsumers_keyDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/consumers/{key}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/consumers/{key}
		 * @return {Consumer} getConsumer
		 */
		Organisations_idConsumers_keyGet(headersHandler?: () => HttpHeaders): Observable<Consumer> {
			return this.http.get<Consumer>(this.baseUri + 'organisations/{id}/consumers/{key}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put organisations/{id}/consumers/{key}
		 * @return {void} PUT the same data as in POST.
		 */
		Organisations_idConsumers_keyPut(requestBody: WannabeConsumer, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/consumers/{key}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/consumers/{key}/secret
		 * @return {Secret} getConsumerSecret
		 */
		Organisations_idConsumers_keySecretGet(headersHandler?: () => HttpHeaders): Observable<Secret> {
			return this.http.get<Secret>(this.baseUri + 'organisations/{id}/consumers/{key}/secret', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/consumptions
		 * @return {Conso} getAmount
		 */
		Organisations_idConsumptionsGetByAppIdAndFromAndTo(appId: string | null | undefined, from: string | null | undefined, to: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Conso> {
			return this.http.get<Conso>(this.baseUri + 'organisations/{id}/consumptions?appId=' + (appId == null ? '' : encodeURIComponent(appId)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/credits
		 * @return {Credits} getAmount
		 */
		Organisations_idCreditsGet(headersHandler?: () => HttpHeaders): Observable<Credits> {
			return this.http.get<Credits>(this.baseUri + 'organisations/{id}/credits', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/deployments
		 * @return {DeploymentSummary} getDeploymentsForAllApps
		 */
		Organisations_idDeploymentsGet(headersHandler?: () => HttpHeaders): Observable<DeploymentSummary> {
			return this.http.get<DeploymentSummary>(this.baseUri + 'organisations/{id}/deployments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get organisations/{id}/instances
		 * @return {string} getInstancesForAllApps
		 */
		Organisations_idInstancesGet(headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'organisations/{id}/instances', { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/members
		 * @return {Array<Schema1>} getOrganisationMembers
		 */
		Organisations_idMembersGet(headersHandler?: () => HttpHeaders): Observable<Array<Schema1>> {
			return this.http.get<Array<Schema1>>(this.baseUri + 'organisations/{id}/members', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post organisations/{id}/members
		 * @return {void} addOrganisationMember
		 */
		Organisations_idMembersPostByInvitationKey(invitationKey: string | null | undefined, requestBody: WannabeMember, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/members?invitationKey=' + (invitationKey == null ? '' : encodeURIComponent(invitationKey)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/members/{userId}
		 * @return {void} removeOrganisationMember
		 */
		Organisations_idMembers_userIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/members/{userId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/members/{userId}
		 * @return {void} editOrganisationMember
		 */
		Organisations_idMembers_userIdPut(requestBody: WannabeMember, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/members/{userId}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/payment-info
		 * @return {void} getPaymentInfo
		 */
		Organisations_idPayment_infoGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/payment-info', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/payments/billings
		 * @return {void} getInvoices
		 */
		Organisations_idPaymentsBillingsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/payments/billings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post organisations/{id}/payments/billings
		 * @return {void} buyDrops
		 */
		Organisations_idPaymentsBillingsPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/payments/billings', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/payments/billings/unpaid
		 * @return {void} Status 200
		 */
		Organisations_idPaymentsBillingsUnpaidGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/payments/billings/unpaid', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/payments/billings/{bid}
		 * @return {void} deletePurchaseOrder
		 */
		Organisations_idPaymentsBillings_bidDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/payments/billings/{bid}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/payments/billings/{bid}
		 * @return {void} getInvoice
		 */
		Organisations_idPaymentsBillings_bidGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/payments/billings/{bid}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/payments/billings/{bid}
		 * @return {void} choosePaymentProvider
		 */
		Organisations_idPaymentsBillings_bidPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/payments/billings/{bid}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/payments/billings/{bid}.pdf
		 * @return {void} getPdfInvoice
		 */
		Organisations_idPaymentsBillings_bid_pdfGetByToken(token: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/payments/billings/{bid}.pdf?token=' + (token == null ? '' : encodeURIComponent(token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/payments/fullprice/{price}
		 * @return {void} priceWithTax
		 */
		Organisations_idPaymentsFullprice_priceGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/payments/fullprice/{price}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/payments/methods
		 * @return {void} Status 200
		 */
		Organisations_idPaymentsMethodsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/payments/methods', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post organisations/{id}/payments/methods
		 * @return {void} Status 200
		 */
		Organisations_idPaymentsMethodsPost(requestBody: Body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'organisations/{id}/payments/methods', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/payments/methods/default
		 * @return {void} Status 200
		 */
		Organisations_idPaymentsMethodsDefaultGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/payments/methods/default', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/payments/methods/default
		 * @return {void} Status 200
		 */
		Organisations_idPaymentsMethodsDefaultPut(requestBody: PaymentData, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/payments/methods/default', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/payments/methods/{mId}
		 * @return {void} Status 200
		 */
		Organisations_idPaymentsMethods_mIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/payments/methods/{mId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/payments/monthlyinvoice
		 * @return {void} Status 200
		 */
		Organisations_idPaymentsMonthlyinvoiceGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/payments/monthlyinvoice', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put organisations/{id}/payments/monthlyinvoice/maxcredit
		 * @return {void} Status 200
		 */
		Organisations_idPaymentsMonthlyinvoiceMaxcreditPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'organisations/{id}/payments/monthlyinvoice/maxcredit', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete organisations/{id}/payments/recurring
		 * @return {void} deleteRecurrentPayment
		 */
		Organisations_idPaymentsRecurringDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'organisations/{id}/payments/recurring', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get organisations/{id}/payments/recurring
		 * @return {void} Status 200
		 */
		Organisations_idPaymentsRecurringGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'organisations/{id}/payments/recurring', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get password_forgotten
		 * @return {void} getPasswordForgottenForm
		 */
		Password_forgottenGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'password_forgotten', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post password_forgotten
		 * @return {void} askForPasswordResetViaForm
		 */
		Password_forgottenPostByLoginAndDrop_tokens(login: string | null | undefined, drop_tokens: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'password_forgotten?login=' + (login == null ? '' : encodeURIComponent(login)) + '&drop_tokens=' + (drop_tokens == null ? '' : encodeURIComponent(drop_tokens)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get password_forgotten/{key}
		 * @return {void} confirmPasswordResetRequest
		 */
		Password_forgotten_keyGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'password_forgotten/{key}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post password_forgotten/{key}
		 * @return {void} resetPasswordForgotten
		 */
		Password_forgotten_keyPostByPassAndPass2(pass: string | null | undefined, pass2: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'password_forgotten/{key}?pass=' + (pass == null ? '' : encodeURIComponent(pass)) + '&pass2=' + (pass2 == null ? '' : encodeURIComponent(pass2)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get payments/assets/pay_button/{token}/button.png
		 * @return {void} Status 200
		 */
		PaymentsAssetsPay_button_tokenButton_pngGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'payments/assets/pay_button/{token}/button.png', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get payments/coupons/{name}
		 * @return {void} getCoupon
		 */
		PaymentsCoupons_nameGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'payments/coupons/{name}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get payments/providers
		 * @return {Array<Payment_Provider>} getAvailablePaymentProviders
		 */
		PaymentsProvidersGet(headersHandler?: () => HttpHeaders): Observable<Array<Payment_Provider>> {
			return this.http.get<Array<Payment_Provider>>(this.baseUri + 'payments/providers', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get payments/tokens/stripe
		 * @return {void} getStripeToken
		 */
		PaymentsTokensStripeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'payments/tokens/stripe', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post payments/{bid}/end/stripe
		 * @return {void} endPaymentWithStripe
		 */
		Payments_bidEndStripePost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'payments/{bid}/end/stripe', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get products/addonproviders
		 * @return {Array<Provider>} getAddonProviders
		 */
		ProductsAddonprovidersGet(headersHandler?: () => HttpHeaders): Observable<Array<Provider>> {
			return this.http.get<Array<Provider>>(this.baseUri + 'products/addonproviders', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get products/addonproviders/{provider_id}
		 * @return {Provider} getAddonProvider
		 */
		ProductsAddonproviders_provider_idGet(headersHandler?: () => HttpHeaders): Observable<Provider> {
			return this.http.get<Provider>(this.baseUri + 'products/addonproviders/{provider_id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get products/addonproviders/{provider_id}/versions
		 * @return {void} Status 200
		 */
		ProductsAddonproviders_provider_idVersionsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/addonproviders/{provider_id}/versions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get products/countries
		 * @return {Country} getCountries
		 */
		ProductsCountriesGet(headersHandler?: () => HttpHeaders): Observable<Country> {
			return this.http.get<Country>(this.baseUri + 'products/countries', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get products/countrycodes
		 * @return {Country} getCountryCodes
		 */
		ProductsCountrycodesGet(headersHandler?: () => HttpHeaders): Observable<Country> {
			return this.http.get<Country>(this.baseUri + 'products/countrycodes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get products/instances
		 * @return {Array<Instance>} getAvailableInstances
		 */
		ProductsInstancesGetBy_for(_for: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Instance>> {
			return this.http.get<Array<Instance>>(this.baseUri + 'products/instances?_for=' + (_for == null ? '' : encodeURIComponent(_for)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get products/instances/{type}-{version}
		 * @return {Instance} getAvailableInstance
		 */
		ProductsInstances_type__versionGetBy_forAndApp(_for: string | null | undefined, app: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Instance> {
			return this.http.get<Instance>(this.baseUri + 'products/instances/{type}-{version}?_for=' + (_for == null ? '' : encodeURIComponent(_for)) + '&app=' + (app == null ? '' : encodeURIComponent(app)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get products/mfa_kinds
		 * @return {void} Status 200
		 */
		ProductsMfa_kindsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/mfa_kinds', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get products/packages
		 * @return {void} getAvailablePackages
		 */
		ProductsPackagesGetByCouponAndOrgaIdAndCurrency(coupon: string | null | undefined, orgaId: string | null | undefined, currency: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/packages?coupon=' + (coupon == null ? '' : encodeURIComponent(coupon)) + '&orgaId=' + (orgaId == null ? '' : encodeURIComponent(orgaId)) + '&currency=' + (currency == null ? '' : encodeURIComponent(currency)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get products/prices
		 * @return {void} getExchangeRates
		 */
		ProductsPricesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'products/prices', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get products/zones
		 * @return {Array<Zone>} getZones
		 */
		ProductsZonesGet(headersHandler?: () => HttpHeaders): Observable<Array<Zone>> {
			return this.http.get<Array<Zone>>(this.baseUri + 'products/zones', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete self
		 * @return {void} deleteUser
		 */
		SelfDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get information about yourself
		 * Get self
		 * @return {User} getUser
		 */
		SelfGet(headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'self', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put self
		 * @return {void} editUser
		 */
		SelfPut(requestBody: WannabeUser, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Addon
		 * Get all the addons
		 * Get self/addons
		 * @return {Array<Addon>} getAddons
		 */
		SelfAddonsGet(headersHandler?: () => HttpHeaders): Observable<Array<Addon>> {
			return this.http.get<Array<Addon>>(this.baseUri + 'self/addons', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post self/addons
		 * @return {void} provisionAddon
		 */
		SelfAddonsPost(requestBody: WannabeAddon, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/addons', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post self/addons/preorders
		 * @return {void} Status 200
		 */
		SelfAddonsPreordersPost(requestBody: WannabeAddon, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/addons/preorders', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/addons/{addonId}
		 * @return {void} deprovisionAddon
		 */
		SelfAddons_addonIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/addons/{addonId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Specific addon
		 * Get a specific addon
		 * Get self/addons/{addonId}
		 * @return {Addon} getAddon
		 */
		SelfAddons_addonIdGet(headersHandler?: () => HttpHeaders): Observable<Addon> {
			return this.http.get<Addon>(this.baseUri + 'self/addons/{addonId}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put self/addons/{addonId}
		 * @return {void} Update addon informations
		 */
		SelfAddons_addonIdPut(requestBody: WannabeAddon, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/addons/{addonId}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/addons/{addonId}/applications
		 * @return {Array<Application>} getApplicationsLinkedToAddon
		 */
		SelfAddons_addonIdApplicationsGet(headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'self/addons/{addonId}/applications', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get self/addons/{addonId}/env
		 * @return {Array<ListEnv>} getAddonEnv
		 */
		SelfAddons_addonIdEnvGet(headersHandler?: () => HttpHeaders): Observable<Array<ListEnv>> {
			return this.http.get<Array<ListEnv>>(this.baseUri + 'self/addons/{addonId}/env', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put self/addons/{addonId}/plan
		 * @return {void} Update plan of an add-on.
		 */
		SelfAddons_addonIdPlanPut(requestBody: WannabePlan, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/addons/{addonId}/plan', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/addons/{addonId}/sso
		 * @return {Sso} getSSOData
		 */
		SelfAddons_addonIdSsoGet(headersHandler?: () => HttpHeaders): Observable<Sso> {
			return this.http.get<Sso>(this.baseUri + 'self/addons/{addonId}/sso', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get self/addons/{addonId}/tags
		 * @return {void} getAddonTags
		 */
		SelfAddons_addonIdTagsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/addons/{addonId}/tags', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/addons/{addonId}/tags/{tag}
		 * @return {void} deleteAddonTag
		 */
		SelfAddons_addonIdTags_tagDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/addons/{addonId}/tags/{tag}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/addons/{addonId}/tags/{tag}
		 * @return {void} addAddonTag
		 */
		SelfAddons_addonIdTags_tagPut(requestBody: Body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/addons/{addonId}/tags/{tag}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications
		 * @return {Array<Application>} getApplications
		 */
		SelfApplicationsGet(headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'self/applications', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Creates an application. If you want to create a Github app, you need to replace the oauthApp field with what you will find here: https://github.com/CleverCloud/doc.clever-cloud.com/issues/179
		 * Post self/applications
		 * @return {void} addApplication
		 */
		SelfApplicationsPost(requestBody: WannabeApplication, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/applications', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/applications/{appId}
		 * @return {void} deleteApplication
		 */
		SelfApplications_appIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/applications/{appId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}
		 * @return {Application} getApplication
		 */
		SelfApplications_appIdGet(headersHandler?: () => HttpHeaders): Observable<Application> {
			return this.http.get<Application>(this.baseUri + 'self/applications/{appId}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put self/applications/{appId}
		 * @return {void} editApplication
		 */
		SelfApplications_appIdPut(requestBody: WannabeApplication, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/applications/{appId}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/addons
		 * @return {Array<Addon>} getAddonsLinkedToApplication
		 */
		SelfApplications_appIdAddonsGet(headersHandler?: () => HttpHeaders): Observable<Array<Addon>> {
			return this.http.get<Array<Addon>>(this.baseUri + 'self/applications/{appId}/addons', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post self/applications/{appId}/addons
		 * @return {void} linkAddonToApplication
		 */
		SelfApplications_appIdAddonsPost(requestBody: Body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/applications/{appId}/addons', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/addons/env
		 * @return {Array<Env>} getEnvOfAddonsLinkedToApplication
		 */
		SelfApplications_appIdAddonsEnvGet(headersHandler?: () => HttpHeaders): Observable<Array<Env>> {
			return this.http.get<Array<Env>>(this.baseUri + 'self/applications/{appId}/addons/env', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete self/applications/{appId}/addons/{addonId}
		 * @return {void} unlinkAddonFromApplication
		 */
		SelfApplications_appIdAddons_addonIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/applications/{appId}/addons/{addonId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/applications/{appId}/branch
		 * @return {void} Status 200
		 */
		SelfApplications_appIdBranchPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/applications/{appId}/branch', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/branches
		 * @return {void} Status 200
		 */
		SelfApplications_appIdBranchesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/applications/{appId}/branches', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/applications/{appId}/buildflavor
		 * @return {void} Status 200
		 */
		SelfApplications_appIdBuildflavorPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/applications/{appId}/buildflavor', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/dependencies
		 * @return {Array<Application>} getApplicationDependencies
		 */
		SelfApplications_appIdDependenciesGet(headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'self/applications/{appId}/dependencies', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get self/applications/{appId}/dependencies/env
		 * @return {void} Get env variables defined by application dependencies
		 */
		SelfApplications_appIdDependenciesEnvGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/applications/{appId}/dependencies/env', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/applications/{appId}/dependencies/{dependencyId}
		 * @return {void} deleteApplicationDependency
		 */
		SelfApplications_appIdDependencies_dependencyIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/applications/{appId}/dependencies/{dependencyId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/applications/{appId}/dependencies/{dependencyId}
		 * @return {void} addApplicationDependency
		 */
		SelfApplications_appIdDependencies_dependencyIdPut(requestBody: WannabeApplication, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/applications/{appId}/dependencies/{dependencyId}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/dependents
		 * @return {Array<Application>} getApplicationDependents
		 */
		SelfApplications_appIdDependentsGet(headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'self/applications/{appId}/dependents', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get self/applications/{appId}/deployments
		 * @return {Array<Deployment>} getApplicationDeployments
		 */
		SelfApplications_appIdDeploymentsGetByLimitAndOffsetAndAction(limit: string | null | undefined, offset: string | null | undefined, action: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Deployment>> {
			return this.http.get<Array<Deployment>>(this.baseUri + 'self/applications/{appId}/deployments?limit=' + (limit == null ? '' : encodeURIComponent(limit)) + '&offset=' + (offset == null ? '' : encodeURIComponent(offset)) + '&action=' + (action == null ? '' : encodeURIComponent(action)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get self/applications/{appId}/deployments/{deploymentId}
		 * @return {void} Status 200
		 */
		SelfApplications_appIdDeployments_deploymentIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/applications/{appId}/deployments/{deploymentId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/applications/{appId}/deployments/{deploymentId}/instances
		 * @return {void} cancelDeploy
		 */
		SelfApplications_appIdDeployments_deploymentIdInstancesDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/applications/{appId}/deployments/{deploymentId}/instances', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/env
		 * @return {Array<ListEnv>} editApplicationEnv
		 */
		SelfApplications_appIdEnvGet(headersHandler?: () => HttpHeaders): Observable<Array<ListEnv>> {
			return this.http.get<Array<ListEnv>>(this.baseUri + 'self/applications/{appId}/env', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put self/applications/{appId}/env
		 * @return {void} editApplicationEnvironment
		 */
		SelfApplications_appIdEnvPut(requestBody: WannabeEnv, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/applications/{appId}/env', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/applications/{appId}/env/{envName}
		 * @return {void} removeApplicationEnv
		 */
		SelfApplications_appIdEnv_envNameDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/applications/{appId}/env/{envName}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/applications/{appId}/env/{envName}
		 * @return {void} editApplicationEnv
		 */
		SelfApplications_appIdEnv_envNamePut(requestBody: WannabeEnv, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/applications/{appId}/env/{envName}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/exposed_env
		 * @return {void} Status 200
		 */
		SelfApplications_appIdExposed_envGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/applications/{appId}/exposed_env', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/applications/{appId}/exposed_env
		 * @return {void} Status 200
		 */
		SelfApplications_appIdExposed_envPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/applications/{appId}/exposed_env', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/applications/{appId}/instances
		 * @return {void} undeployApplication
		 */
		SelfApplications_appIdInstancesDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/applications/{appId}/instances', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/instances
		 * @return {Array<Instance>} getApplicationInstances
		 */
		SelfApplications_appIdInstancesGet(headersHandler?: () => HttpHeaders): Observable<Array<Instance>> {
			return this.http.get<Array<Instance>>(this.baseUri + 'self/applications/{appId}/instances', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post self/applications/{appId}/instances
		 * @return {void} redeployApplication
		 */
		SelfApplications_appIdInstancesPostByCommit(commit: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/applications/{appId}/instances?commit=' + (commit == null ? '' : encodeURIComponent(commit)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/instances/{instanceId}
		 * @return {void} Status 200
		 */
		SelfApplications_appIdInstances_instanceIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/applications/{appId}/instances/{instanceId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/tags
		 * @return {void} getApplicationTags
		 */
		SelfApplications_appIdTagsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/applications/{appId}/tags', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/applications/{appId}/tags/{tag}
		 * @return {void} deleteApplicationTag
		 */
		SelfApplications_appIdTags_tagDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/applications/{appId}/tags/{tag}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/applications/{appId}/tags/{tag}
		 * @return {void} addApplicationTag
		 */
		SelfApplications_appIdTags_tagPut(requestBody: Body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/applications/{appId}/tags/{tag}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/vhosts
		 * @return {Array<Vhost>} getVhosts
		 */
		SelfApplications_appIdVhostsGet(headersHandler?: () => HttpHeaders): Observable<Array<Vhost>> {
			return this.http.get<Array<Vhost>>(this.baseUri + 'self/applications/{appId}/vhosts', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete self/applications/{appId}/vhosts/favourite
		 * @return {void} unmarkFavouriteVhost
		 */
		SelfApplications_appIdVhostsFavouriteDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/applications/{appId}/vhosts/favourite', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/applications/{appId}/vhosts/favourite
		 * @return {Vhost} getFavouriteVhost
		 */
		SelfApplications_appIdVhostsFavouriteGet(headersHandler?: () => HttpHeaders): Observable<Vhost> {
			return this.http.get<Vhost>(this.baseUri + 'self/applications/{appId}/vhosts/favourite', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put self/applications/{appId}/vhosts/favourite
		 * @return {void} markFavouriteVhost
		 */
		SelfApplications_appIdVhostsFavouritePut(requestBody: Vhost, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/applications/{appId}/vhosts/favourite', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/applications/{appId}/vhosts/{domain}
		 * @return {void} removeVhost
		 */
		SelfApplications_appIdVhosts_domainDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/applications/{appId}/vhosts/{domain}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/applications/{appId}/vhosts/{domain}
		 * @return {void} addVhost
		 */
		SelfApplications_appIdVhosts_domainPut(requestBody: Vhost, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/applications/{appId}/vhosts/{domain}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/avatar
		 * @return {void} setUserAvatar
		 * setUserAvatarFromSource
		 */
		SelfAvatarPut(requestBody: Avatar, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/avatar', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/change_password
		 * @return {Change_Password} changeUserPassword
		 */
		SelfChange_passwordPut(headersHandler?: () => HttpHeaders): Observable<Change_Password> {
			return this.http.put<Change_Password>(this.baseUri + 'self/change_password', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get self/cli_tokens
		 * @return {void} Status 200
		 */
		SelfCli_tokensGetByCli_token(cli_token: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/cli_tokens?cli_token=' + (cli_token == null ? '' : encodeURIComponent(cli_token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/confirmation_email
		 * @return {void} getConfirmationEmail
		 */
		SelfConfirmation_emailGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/confirmation_email', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/consumers
		 * @return {Array<Consumer>} getConsumers
		 */
		SelfConsumersGet(headersHandler?: () => HttpHeaders): Observable<Array<Consumer>> {
			return this.http.get<Array<Consumer>>(this.baseUri + 'self/consumers', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post self/consumers
		 * @return {void} createConsumer
		 */
		SelfConsumersPost(requestBody: WannabeConsumer, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/consumers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/consumers/{key}
		 * @return {void} deleteConsumer
		 */
		SelfConsumers_keyDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/consumers/{key}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/consumers/{key}
		 * @return {Consumer} getConsumer
		 */
		SelfConsumers_keyGet(headersHandler?: () => HttpHeaders): Observable<Consumer> {
			return this.http.get<Consumer>(this.baseUri + 'self/consumers/{key}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put self/consumers/{key}
		 * @return {void} PUT same consumer data as in POST.
		 */
		SelfConsumers_keyPut(requestBody: WannabeConsumer, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/consumers/{key}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/consumers/{key}/secret
		 * @return {Secret} getConsumerSecret
		 */
		SelfConsumers_keySecretGet(headersHandler?: () => HttpHeaders): Observable<Secret> {
			return this.http.get<Secret>(this.baseUri + 'self/consumers/{key}/secret', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get self/consumptions
		 * @return {Conso} getConsumptions
		 */
		SelfConsumptionsGetByAppIdAndFromAndTo(appId: string | null | undefined, from: string | null | undefined, to: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Conso> {
			return this.http.get<Conso>(this.baseUri + 'self/consumptions?appId=' + (appId == null ? '' : encodeURIComponent(appId)) + '&from=' + (from == null ? '' : encodeURIComponent(from)) + '&to=' + (to == null ? '' : encodeURIComponent(to)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get self/credits
		 * @return {Credits} getAmount
		 */
		SelfCreditsGet(headersHandler?: () => HttpHeaders): Observable<Credits> {
			return this.http.get<Credits>(this.baseUri + 'self/credits', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get self/emails
		 * @return {void} getEmailAddresses
		 */
		SelfEmailsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/emails', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/emails/{email}
		 * @return {void} removeEmailAddress
		 */
		SelfEmails_emailDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/emails/{email}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/emails/{email}
		 * @return {void} addEmailAddress
		 */
		SelfEmails_emailPut(requestBody: Body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/emails/{email}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/id
		 * @return {void} getId
		 */
		SelfIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/id', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/instances
		 * @return {Array<Instance>} getInstancesForAllApps
		 */
		SelfInstancesGet(headersHandler?: () => HttpHeaders): Observable<Array<Instance>> {
			return this.http.get<Array<Instance>>(this.baseUri + 'self/instances', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get self/keys
		 * @return {Array<Key>} getSshKeys
		 */
		SelfKeysGet(headersHandler?: () => HttpHeaders): Observable<Array<Key>> {
			return this.http.get<Array<Key>>(this.baseUri + 'self/keys', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete self/keys/{key}
		 * @return {void} removeSshKey
		 */
		SelfKeys_keyDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/keys/{key}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/keys/{key}
		 * @return {void} addSshKey
		 */
		SelfKeys_keyPut(requestBody: Body, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/keys/{key}', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/mfa/{kind}
		 * @return {void} Status 200
		 */
		SelfMfa_kindDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/mfa/{kind}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post self/mfa/{kind}
		 * @return {void} Status 200
		 */
		SelfMfa_kindPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/mfa/{kind}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/mfa/{kind}
		 * @return {void} Status 200
		 */
		SelfMfa_kindPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/mfa/{kind}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/mfa/{kind}/backupcodes
		 * @return {void} Status 200
		 */
		SelfMfa_kindBackupcodesGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/mfa/{kind}/backupcodes', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post self/mfa/{kind}/confirmation
		 * @return {void} Status 200
		 */
		SelfMfa_kindConfirmationPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/mfa/{kind}/confirmation', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/payment-info
		 * @return {void} getPaymentInfo
		 */
		SelfPayment_infoGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/payment-info', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/payments/billings
		 * @return {void} getInvoices
		 */
		SelfPaymentsBillingsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/payments/billings', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post self/payments/billings
		 * @return {void} buyDrops
		 */
		SelfPaymentsBillingsPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/payments/billings', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/payments/billings/{bid}
		 * @return {void} deletePurchaseOrder
		 */
		SelfPaymentsBillings_bidDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/payments/billings/{bid}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/payments/billings/{bid}
		 * @return {void} getInvoice
		 */
		SelfPaymentsBillings_bidGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/payments/billings/{bid}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/payments/billings/{bid}
		 * @return {void} choosePaymentProvider
		 */
		SelfPaymentsBillings_bidPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/payments/billings/{bid}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/payments/billings/{bid}.pdf
		 * @return {void} getPdfInvoice
		 */
		SelfPaymentsBillings_bid_pdfGetByToken(token: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/payments/billings/{bid}.pdf?token=' + (token == null ? '' : encodeURIComponent(token)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/payments/fullprice/{price}
		 * @return {void} priceWithTax
		 */
		SelfPaymentsFullprice_priceGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/payments/fullprice/{price}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/payments/methods
		 * @return {void} getUserPaymentMethods
		 */
		SelfPaymentsMethodsGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/payments/methods', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post self/payments/methods
		 * @return {void} addUserMethod
		 */
		SelfPaymentsMethodsPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'self/payments/methods', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/payments/methods/default
		 * @return {void} Status 200
		 */
		SelfPaymentsMethodsDefaultGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/payments/methods/default', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/payments/methods/default
		 * @return {void} Status 200
		 */
		SelfPaymentsMethodsDefaultPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/payments/methods/default', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/payments/methods/{mId}
		 * @return {void} deleteUserCard
		 */
		SelfPaymentsMethods_mIdDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/payments/methods/{mId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/payments/monthlyinvoice
		 * @return {void} Status 200
		 */
		SelfPaymentsMonthlyinvoiceGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/payments/monthlyinvoice', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put self/payments/monthlyinvoice/maxcredit
		 * @return {void} Status 200
		 */
		SelfPaymentsMonthlyinvoiceMaxcreditPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'self/payments/monthlyinvoice/maxcredit', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/payments/recurring
		 * @return {void} deleteRecurrentPayment
		 */
		SelfPaymentsRecurringDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/payments/recurring', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/payments/recurring
		 * @return {void} Status 200
		 */
		SelfPaymentsRecurringGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/payments/recurring', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/payments/tokens/stripe
		 * @return {void} Status 200
		 */
		SelfPaymentsTokensStripeGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/payments/tokens/stripe', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete self/tokens
		 * @return {void} revokeAllTokens
		 */
		SelfTokensDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/tokens', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/tokens
		 * @return {Array<Token>} getSelfTokens
		 */
		SelfTokensGet(headersHandler?: () => HttpHeaders): Observable<Array<Token>> {
			return this.http.get<Array<Token>>(this.baseUri + 'self/tokens', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete self/tokens/{token}
		 * @return {void} revokeToken
		 */
		SelfTokens_tokenDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'self/tokens/{token}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get self/validate_email
		 * @return {void} validateEmail
		 */
		SelfValidate_emailGetByValidationKey(validationKey: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'self/validate_email?validationKey=' + (validationKey == null ? '' : encodeURIComponent(validationKey)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get summary
		 * @return {Summary} getSummary
		 */
		SummaryGet(headersHandler?: () => HttpHeaders): Observable<Summary> {
			return this.http.get<Summary>(this.baseUri + 'summary', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post users
		 * @return {void} createUser
		 * createUserFromForm
		 */
		UsersPostByInvitationKeyAndAddonBetaInvitationKeyAndEmailAndPassAndUrl_nextAndTerms(invitationKey: string | null | undefined, addonBetaInvitationKey: string | null | undefined, email: string | null | undefined, pass: string | null | undefined, url_next: string | null | undefined, terms: string | null | undefined, requestBody: WannabeUser, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'users?invitationKey=' + (invitationKey == null ? '' : encodeURIComponent(invitationKey)) + '&addonBetaInvitationKey=' + (addonBetaInvitationKey == null ? '' : encodeURIComponent(addonBetaInvitationKey)) + '&email=' + (email == null ? '' : encodeURIComponent(email)) + '&pass=' + (pass == null ? '' : encodeURIComponent(pass)) + '&url_next=' + (url_next == null ? '' : encodeURIComponent(url_next)) + '&terms=' + (terms == null ? '' : encodeURIComponent(terms)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get users/{id}
		 * @return {User} getUser
		 */
		Users_idGet(headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'users/{id}', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get users/{id}/applications
		 * @return {Array<Application>} getApplications
		 */
		Users_idApplicationsGet(headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'users/{id}/applications', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get users/{userId}/git-info
		 * @return {void} getGitInfo
		 */
		Users_userIdGit_infoGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'users/{userId}/git-info', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Matomo addon
		 * Delete v2/providers/addon-matomo/resources/{matomoId}
		 * @param {string} matomoId Automatically added
		 * @return {void} 
		 */
		V2ProvidersAddon_matomoResources_matomoIdDelete(matomoId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/providers/addon-matomo/resources/' + (matomoId == null ? '' : encodeURIComponent(matomoId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the logs for a given application
		 * Get v3/logs/{appId}
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		V3Logs_appIdGet(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/logs/' + (appId == null ? '' : encodeURIComponent(appId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the logs drains for a given application
		 * Get v3/logs/{appId}/drains
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		V3Logs_appIdDrainsGet(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/drains', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Add a log drain for a given application
		 * Post v3/logs/{appId}/drains
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		V3Logs_appIdDrainsPost(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v3/logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/drains', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete the logs drain by id or url for a given application
		 * Delete v3/logs/{appId}/drains/:idOrUrl
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		V3Logs_appIdDrains_idOrUrlDelete(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v3/logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/drains/:idOrUrl', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Fetch the logs drain by id or url for a given application
		 * Get v3/logs/{appId}/drains/:idOrUrl
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		V3Logs_appIdDrains_idOrUrlGet(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/drains/:idOrUrl', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve logs as they come through a chunked, never-ending response
		 * Get v3/logs/{appId}/logs-chunked
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		V3Logs_appIdLogs_chunkedGet(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/logs-chunked', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieve logs as they come through a websocket connection. To have authorization, you have to send a `{ "message_type": "oauth", "authorization": "oauth authorization string" }` message
		 * Get v3/logs/{appId}/logs-socket
		 * @param {string} appId Automatically added
		 * @return {void} 
		 */
		V3Logs_appIdLogs_socketGet(appId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v3/logs/' + (appId == null ? '' : encodeURIComponent(appId)) + '/logs-socket', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Matomo addon
		 * Get v4/addon-providers/addon-matomo/addons/{matomoId}
		 * @param {string} matomoId Automatically added
		 * @return {void} 
		 */
		V4Addon_providersAddon_matomoAddons_matomoIdGet(matomoId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/addon-providers/addon-matomo/addons/' + (matomoId == null ? '' : encodeURIComponent(matomoId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Validate a keycloak token
		 * Get v4/addon-providers/addon-matomo/token/validate
		 * @param {string} keycloakToken Environment variable injected on the app with 'KEYCLOAK_TOKEN' name
		 * @return {void} 
		 */
		V4Addon_providersAddon_matomoTokenValidateGetByKeycloakToken(keycloakToken: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/addon-providers/addon-matomo/token/validate?keycloakToken=' + (keycloakToken == null ? '' : encodeURIComponent(keycloakToken)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Addon provider configuration
		 * Get v4/addon-providers/config-provider/addons/{configurationProviderId}
		 * @param {string} configurationProviderId Automatically added
		 * @return {AddonConfigProviderView} requested config provider object
		 */
		V4Addon_providersConfig_providerAddons_configurationProviderIdGet(configurationProviderId: string, headersHandler?: () => HttpHeaders): Observable<AddonConfigProviderView> {
			return this.http.get<AddonConfigProviderView>(this.baseUri + 'v4/addon-providers/config-provider/addons/' + (configurationProviderId == null ? '' : encodeURIComponent(configurationProviderId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get provider's addon environment
		 * Get v4/addon-providers/config-provider/addons/{configurationProviderId}/env
		 * @param {string} configurationProviderId Automatically added
		 * @return {Array<EnvVar>} config provider environment variables
		 */
		V4Addon_providersConfig_providerAddons_configurationProviderIdEnvGet(configurationProviderId: string, headersHandler?: () => HttpHeaders): Observable<Array<EnvVar>> {
			return this.http.get<Array<EnvVar>>(this.baseUri + 'v4/addon-providers/config-provider/addons/' + (configurationProviderId == null ? '' : encodeURIComponent(configurationProviderId)) + '/env', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update provider's addon environment
		 * Put v4/addon-providers/config-provider/addons/{configurationProviderId}/env
		 * @param {string} configurationProviderId Automatically added
		 * @return {Array<EnvVar>} updated config providers environment variables
		 */
		V4Addon_providersConfig_providerAddons_configurationProviderIdEnvPut(configurationProviderId: string, requestBody: Array<WannabeEnvVar>, headersHandler?: () => HttpHeaders): Observable<Array<EnvVar>> {
			return this.http.put<Array<EnvVar>>(this.baseUri + 'v4/addon-providers/config-provider/addons/' + (configurationProviderId == null ? '' : encodeURIComponent(configurationProviderId)) + '/env', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Network Groups
		 * Lists Network Groups from an owner.
		 * Get v4/networkgroups/organisations/{ownerId}/networkgroups
		 * @param {string} ownerId Automatically added
		 * @return {Array<NetworkGroup>} Success
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroupsGet(ownerId: string, headersHandler?: () => HttpHeaders): Observable<Array<NetworkGroup>> {
			return this.http.get<Array<NetworkGroup>>(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Network Group
		 * Creates a Network Group.
		 * Post v4/networkgroups/organisations/{ownerId}/networkgroups
		 * @param {string} ownerId Automatically added
		 * @return {void} 
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroupsPost(ownerId: string, requestBody: WannabeNetworkGroup, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Network Group
		 * Deletes a Network Group.
		 * Delete v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @return {void} 
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdDelete(ownerId: string, networkGroupId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Network Group
		 * Gets details of a Network Group.
		 * Get v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @return {NetworkGroup} Success
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdGet(ownerId: string, networkGroupId: string, headersHandler?: () => HttpHeaders): Observable<NetworkGroup> {
			return this.http.get<NetworkGroup>(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add external peer
		 * Adds an external peer to a Network Group.
		 * Post v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @return {Peer} Success
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdExternal_peersPost(ownerId: string, networkGroupId: string, requestBody: WannabeExternalPeer, headersHandler?: () => HttpHeaders): Observable<Peer> {
			return this.http.post<Peer>(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/external-peers', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Remove external peer
		 * Removes an external peer from a Network Group.
		 * Delete v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/external-peers/{peerId}
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @param {string} peerId Automatically added
		 * @return {void} 
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdExternal_peers_peerIdDelete(ownerId: string, networkGroupId: string, peerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/external-peers/' + (peerId == null ? '' : encodeURIComponent(peerId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List members
		 * Lists members in a Network Group.
		 * Get v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @return {Array<Schema1>} Success
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdMembersGet(ownerId: string, networkGroupId: string, headersHandler?: () => HttpHeaders): Observable<Array<Schema1>> {
			return this.http.get<Array<Schema1>>(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/members', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add member
		 * Adds a member to a Network Group.
		 * Post v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @return {void} 
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdMembersPost(ownerId: string, networkGroupId: string, requestBody: Schema2, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/members', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Remove member
		 * Removes a member from a Network Group.
		 * Delete v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId}
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @param {string} memberId Automatically added
		 * @return {void} 
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdMembers_memberIdDelete(ownerId: string, networkGroupId: string, memberId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get member
		 * Gets details of a Network Group member.
		 * Get v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/members/{memberId}
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @param {string} memberId Automatically added
		 * @return {Schema1} Success
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdMembers_memberIdGet(ownerId: string, networkGroupId: string, memberId: string, headersHandler?: () => HttpHeaders): Observable<Schema1> {
			return this.http.get<Schema1>(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/members/' + (memberId == null ? '' : encodeURIComponent(memberId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List peers
		 * Lists peers in a Network Group.
		 * Get v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @return {Array<Peer>} Success
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdPeersGet(ownerId: string, networkGroupId: string, headersHandler?: () => HttpHeaders): Observable<Array<Peer>> {
			return this.http.get<Array<Peer>>(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/peers', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Remove peer
		 * Removes a peer from a Network Group.
		 * Delete v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @param {string} peerId Automatically added
		 * @return {void} 
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdPeers_peerIdDelete(ownerId: string, networkGroupId: string, peerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/peers/' + (peerId == null ? '' : encodeURIComponent(peerId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get peer
		 * Gets details of a Network Group peer.
		 * Get v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @param {string} peerId Automatically added
		 * @return {Peer} Success
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdPeers_peerIdGet(ownerId: string, networkGroupId: string, peerId: string, headersHandler?: () => HttpHeaders): Observable<Peer> {
			return this.http.get<Peer>(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/peers/' + (peerId == null ? '' : encodeURIComponent(peerId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get WireGuard® configuration
		 * Gets the current WireGuard® tunnel configuration file for a Network Group peer.
		 * Get v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @param {string} peerId Automatically added
		 * @return {WireGuardConfiguration} Success
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdPeers_peerIdWireguardConfigurationGet(ownerId: string, networkGroupId: string, peerId: string, headersHandler?: () => HttpHeaders): Observable<WireGuardConfiguration> {
			return this.http.get<WireGuardConfiguration>(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/peers/' + (peerId == null ? '' : encodeURIComponent(peerId)) + '/wireguard/configuration', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get WireGuard® configuration
		 * Gets the current WireGuard® tunnel configuration file for a Network Group peer as a Server Sent Event.
		 * Get v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/peers/{peerId}/wireguard/configuration/stream
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @param {string} peerId Automatically added
		 * @return {void} Success
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdPeers_peerIdWireguardConfigurationStreamGet(ownerId: string, networkGroupId: string, peerId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/peers/' + (peerId == null ? '' : encodeURIComponent(peerId)) + '/wireguard/configuration/stream', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Network Group SSE
		 * Retrieves the current Network Group details as a Server Sent Event.
		 * Get v4/networkgroups/organisations/{ownerId}/networkgroups/{networkGroupId}/stream
		 * @param {string} ownerId Automatically added
		 * @param {string} networkGroupId Automatically added
		 * @return {void} Success
		 */
		V4NetworkgroupsOrganisations_ownerIdNetworkgroups_networkGroupIdStreamGet(ownerId: string, networkGroupId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v4/networkgroups/organisations/' + (ownerId == null ? '' : encodeURIComponent(ownerId)) + '/networkgroups/' + (networkGroupId == null ? '' : encodeURIComponent(networkGroupId)) + '/stream', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post vendor//addons
		 * @return {void} Status 200
		 */
		VendorAddonsPost(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'vendor//addons', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get vendor//apps/{addonId}/logscollector
		 * @return {void} Status 200
		 */
		VendorApps_addonIdLogscollectorGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'vendor//apps/{addonId}/logscollector', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get vendor/apps
		 * @return {Array<Application>} listApps
		 */
		VendorAppsGetByOffset(offset: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<Application>> {
			return this.http.get<Array<Application>>(this.baseUri + 'vendor/apps?offset=' + offset, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get vendor/apps/{addonId}
		 * @return {void} getApplicationInfo
		 */
		VendorApps_addonIdGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'vendor/apps/{addonId}', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put vendor/apps/{addonId}
		 * @return {void} editApplicationConfiguration
		 */
		VendorApps_addonIdPut(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'vendor/apps/{addonId}', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post vendor/apps/{addonId}/consumptions
		 * @return {void} Status 200
		 */
		VendorApps_addonIdConsumptionsPost(requestBody: WannabeAddonBilling, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'vendor/apps/{addonId}/consumptions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put vendor/apps/{addonId}/migration_callback
		 * @return {void} Status 200
		 */
		VendorApps_addonIdMigration_callbackPutByPlan_idAndRegion(plan_id: string | null | undefined, region: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'vendor/apps/{addonId}/migration_callback?plan_id=' + (plan_id == null ? '' : encodeURIComponent(plan_id)) + '&region=' + (region == null ? '' : encodeURIComponent(region)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

	export enum Logs_appIdGetByLimitAndOrderAndAfterAndBeforeAndFilterAndDeployment_idOrder { asc = 'asc', desc = 'desc' }

	export interface Organisations_idAddons_addonIdMigrationsPostPostBody {

		/** Id of the new plan. E.g. "plan_acddc485-79c2-4c6b-a617-c92a06c0cb0b" */
		planId?: string | null;

		/** New region. E.g. "EU", "US", "Par2" */
		region?: string | null;
	}
	export interface Organisations_idAddons_addonIdMigrationsPostPostBodyFormProperties {

		/** Id of the new plan. E.g. "plan_acddc485-79c2-4c6b-a617-c92a06c0cb0b" */
		planId: FormControl<string | null | undefined>,

		/** New region. E.g. "EU", "US", "Par2" */
		region: FormControl<string | null | undefined>,
	}
	export function CreateOrganisations_idAddons_addonIdMigrationsPostPostBodyFormGroup() {
		return new FormGroup<Organisations_idAddons_addonIdMigrationsPostPostBodyFormProperties>({
			planId: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

}

