import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AppClient {

		/** Required */
		appClientId: string;

		/** Required */
		callbackUrls: Array<string>;

		/** Required */
		clientId: string;
		clientSecret?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/** Required */
		defaultLoginUrl: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		hasSecret: boolean;

		/** Required */
		loginUrls: Array<string>;

		/** Required */
		logoutUrls: Array<string>;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface AppClientFormProperties {

		/** Required */
		appClientId: FormControl<string | null | undefined>,

		/** Required */
		clientId: FormControl<string | null | undefined>,
		clientSecret: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		defaultLoginUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		hasSecret: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateAppClientFormGroup() {
		return new FormGroup<AppClientFormProperties>({
			appClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:app-client:[a-z0-9-_]+$')]),
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			defaultLoginUrl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^http://localhost.*|^https://.*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			hasSecret: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface AppClients {

		/** Required */
		AppClientsAppClients: Array<AppClientsAppClients>;

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
	}
	export interface AppClientsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateAppClientsFormGroup() {
		return new FormGroup<AppClientsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface AppClientsAppClients {

		/** Required */
		appClientId: string;

		/** Required */
		callbackUrls: Array<string>;

		/** Required */
		clientId: string;
		clientSecret?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/** Required */
		defaultLoginUrl: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		hasSecret: boolean;

		/** Required */
		loginUrls: Array<string>;

		/** Required */
		logoutUrls: Array<string>;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface AppClientsAppClientsFormProperties {

		/** Required */
		appClientId: FormControl<string | null | undefined>,

		/** Required */
		clientId: FormControl<string | null | undefined>,
		clientSecret: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		defaultLoginUrl: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		hasSecret: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateAppClientsAppClientsFormGroup() {
		return new FormGroup<AppClientsAppClientsFormProperties>({
			appClientId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:app-client:[a-z0-9-_]+$')]),
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			clientSecret: new FormControl<string | null | undefined>(undefined),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			defaultLoginUrl: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^http://localhost.*|^https://.*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			hasSecret: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface Asset {

		/** Required */
		assetId: string;

		/** Min length: 1 */
		content?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		contentMD5: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface AssetFormProperties {

		/** Required */
		assetId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		content: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		contentMD5: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateAssetFormGroup() {
		return new FormGroup<AssetFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:asset:[a-f0-9]{32}$')]),
			content: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			contentMD5: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface Assets {

		/** Required */
		AssetsAssets: Array<AssetsAssets>;

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
	}
	export interface AssetsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateAssetsFormGroup() {
		return new FormGroup<AssetsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface AssetsAssets {

		/** Required */
		assetId: string;

		/** Min length: 1 */
		content?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		contentMD5: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface AssetsAssetsFormProperties {

		/** Required */
		assetId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		content: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		contentMD5: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateAssetsAssetsFormGroup() {
		return new FormGroup<AssetsAssetsFormProperties>({
			assetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:asset:[a-f0-9]{32}$')]),
			content: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			contentMD5: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface DataBundle {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/** Required */
		dataBundleId: string;

		/** Required */
		DataBundleDatasets: Array<DataBundleDatasets>;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		modelId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Minimum: 1 */
		retentionInDays?: number | null;

		/** Required */
		status: DataBundleStatus;

		/** Required */
		summary: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface DataBundleFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		dataBundleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		retentionInDays: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<DataBundleStatus | null | undefined>,

		/** Required */
		summary: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateDataBundleFormGroup() {
		return new FormGroup<DataBundleFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			dataBundleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model-data-bundle:[a-f0-9]{32}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model:[a-z0-9-_]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			status: new FormControl<DataBundleStatus | null | undefined>(undefined, [Validators.required]),
			summary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface DataBundleDatasets {

		/** Required */
		containsPersonallyIdentifiableInformation: boolean;

		/** Max length: 4096 */
		createdBy?: string | null;
		createdTime?: string | null;

		/** Required */
		datasetId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;
		groundTruthSummary?: string | null;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDocuments: number;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1825
		 */
		retentionInDays: number;

		/** Required */
		storageLocation: DataBundleDatasetsStorageLocation;

		/** Max length: 4096 */
		updatedBy?: string | null;
		updatedTime?: string | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		version: number;
	}
	export interface DataBundleDatasetsFormProperties {

		/** Required */
		containsPersonallyIdentifiableInformation: FormControl<boolean | null | undefined>,

		/** Max length: 4096 */
		createdBy: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		datasetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,
		groundTruthSummary: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDocuments: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1825
		 */
		retentionInDays: FormControl<number | null | undefined>,

		/** Required */
		storageLocation: FormControl<DataBundleDatasetsStorageLocation | null | undefined>,

		/** Max length: 4096 */
		updatedBy: FormControl<string | null | undefined>,
		updatedTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateDataBundleDatasetsFormGroup() {
		return new FormGroup<DataBundleDatasetsFormProperties>({
			containsPersonallyIdentifiableInformation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			datasetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:dataset:[a-f0-9]{32}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			groundTruthSummary: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			numberOfDocuments: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1825)]),
			storageLocation: new FormControl<DataBundleDatasetsStorageLocation | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export enum DataBundleDatasetsStorageLocation { EU = 'EU' }

	export enum DataBundleStatus { running = 'running', succeeded = 'succeeded', failed = 'failed' }

	export interface DataBundles {

		/** Required */
		DataBundlesDataBundles: Array<DataBundlesDataBundles>;

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
		status?: Array<DataBundleStatus>;
	}
	export interface DataBundlesFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDataBundlesFormGroup() {
		return new FormGroup<DataBundlesFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface DataBundlesDataBundles {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/** Required */
		dataBundleId: string;

		/** Required */
		DataBundlesDataBundlesDatasets: Array<DataBundlesDataBundlesDatasets>;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		modelId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Minimum: 1 */
		retentionInDays?: number | null;

		/** Required */
		status: DataBundleStatus;

		/** Required */
		summary: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface DataBundlesDataBundlesFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		dataBundleId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		retentionInDays: FormControl<number | null | undefined>,

		/** Required */
		status: FormControl<DataBundleStatus | null | undefined>,

		/** Required */
		summary: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateDataBundlesDataBundlesFormGroup() {
		return new FormGroup<DataBundlesDataBundlesFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			dataBundleId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model-data-bundle:[a-f0-9]{32}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model:[a-z0-9-_]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
			status: new FormControl<DataBundleStatus | null | undefined>(undefined, [Validators.required]),
			summary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface DataBundlesDataBundlesDatasets {

		/** Required */
		containsPersonallyIdentifiableInformation: boolean;

		/** Max length: 4096 */
		createdBy?: string | null;
		createdTime?: string | null;

		/** Required */
		datasetId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;
		groundTruthSummary?: string | null;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDocuments: number;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1825
		 */
		retentionInDays: number;

		/** Required */
		storageLocation: DataBundleDatasetsStorageLocation;

		/** Max length: 4096 */
		updatedBy?: string | null;
		updatedTime?: string | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		version: number;
	}
	export interface DataBundlesDataBundlesDatasetsFormProperties {

		/** Required */
		containsPersonallyIdentifiableInformation: FormControl<boolean | null | undefined>,

		/** Max length: 4096 */
		createdBy: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		datasetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,
		groundTruthSummary: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDocuments: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1825
		 */
		retentionInDays: FormControl<number | null | undefined>,

		/** Required */
		storageLocation: FormControl<DataBundleDatasetsStorageLocation | null | undefined>,

		/** Max length: 4096 */
		updatedBy: FormControl<string | null | undefined>,
		updatedTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateDataBundlesDataBundlesDatasetsFormGroup() {
		return new FormGroup<DataBundlesDataBundlesDatasetsFormProperties>({
			containsPersonallyIdentifiableInformation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			datasetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:dataset:[a-f0-9]{32}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			groundTruthSummary: new FormControl<string | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			numberOfDocuments: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1825)]),
			storageLocation: new FormControl<DataBundleDatasetsStorageLocation | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface Dataset {

		/** Required */
		containsPersonallyIdentifiableInformation: boolean;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/** Required */
		datasetId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		groundTruthSummary: string;

		/** Required */
		metadata: string;

		/** Max length: 4096 */
		name?: string | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDocuments: number;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1825
		 */
		retentionInDays: number;

		/** Required */
		storageLocation: DataBundleDatasetsStorageLocation;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		version: number;
	}
	export interface DatasetFormProperties {

		/** Required */
		containsPersonallyIdentifiableInformation: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		datasetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		groundTruthSummary: FormControl<string | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDocuments: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1825
		 */
		retentionInDays: FormControl<number | null | undefined>,

		/** Required */
		storageLocation: FormControl<DataBundleDatasetsStorageLocation | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateDatasetFormGroup() {
		return new FormGroup<DatasetFormProperties>({
			containsPersonallyIdentifiableInformation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			datasetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:dataset:[a-f0-9]{32}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			groundTruthSummary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			numberOfDocuments: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1825)]),
			storageLocation: new FormControl<DataBundleDatasetsStorageLocation | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface Datasets {

		/** Required */
		DatasetsDatasets: Array<DatasetsDatasets>;

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
	}
	export interface DatasetsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDatasetsFormGroup() {
		return new FormGroup<DatasetsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface DatasetsDatasets {

		/** Required */
		containsPersonallyIdentifiableInformation: boolean;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/** Required */
		datasetId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		groundTruthSummary: string;

		/** Required */
		metadata: string;

		/** Max length: 4096 */
		name?: string | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDocuments: number;

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1825
		 */
		retentionInDays: number;

		/** Required */
		storageLocation: DataBundleDatasetsStorageLocation;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		version: number;
	}
	export interface DatasetsDatasetsFormProperties {

		/** Required */
		containsPersonallyIdentifiableInformation: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		datasetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		groundTruthSummary: FormControl<string | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDocuments: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 * Maximum: 1825
		 */
		retentionInDays: FormControl<number | null | undefined>,

		/** Required */
		storageLocation: FormControl<DataBundleDatasetsStorageLocation | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateDatasetsDatasetsFormGroup() {
		return new FormGroup<DatasetsDatasetsFormProperties>({
			containsPersonallyIdentifiableInformation: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			datasetId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:dataset:[a-f0-9]{32}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			groundTruthSummary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			numberOfDocuments: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0), Validators.max(1825)]),
			storageLocation: new FormControl<DataBundleDatasetsStorageLocation | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
		});

	}

	export interface DeploymentEnvironment {

		/** Required */
		deploymentEnvironmentId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		modelDeploymentUnits: number;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		organizationId: string;

		/** Required */
		status: DeploymentEnvironmentStatus;
	}
	export interface DeploymentEnvironmentFormProperties {

		/** Required */
		deploymentEnvironmentId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		modelDeploymentUnits: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		organizationId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DeploymentEnvironmentStatus | null | undefined>,
	}
	export function CreateDeploymentEnvironmentFormGroup() {
		return new FormGroup<DeploymentEnvironmentFormProperties>({
			deploymentEnvironmentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			modelDeploymentUnits: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:organization:[a-z0-9-_]+$')]),
			status: new FormControl<DeploymentEnvironmentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DeploymentEnvironmentStatus { available = 'available', unavailable = 'unavailable' }

	export interface DeploymentEnvironments {

		/** Required */
		DeploymentEnvironmentsDeploymentEnvironments: Array<DeploymentEnvironmentsDeploymentEnvironments>;

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
	}
	export interface DeploymentEnvironmentsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateDeploymentEnvironmentsFormGroup() {
		return new FormGroup<DeploymentEnvironmentsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface DeploymentEnvironmentsDeploymentEnvironments {

		/** Required */
		deploymentEnvironmentId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		modelDeploymentUnits: number;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		organizationId: string;

		/** Required */
		status: DeploymentEnvironmentStatus;
	}
	export interface DeploymentEnvironmentsDeploymentEnvironmentsFormProperties {

		/** Required */
		deploymentEnvironmentId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		modelDeploymentUnits: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		organizationId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<DeploymentEnvironmentStatus | null | undefined>,
	}
	export function CreateDeploymentEnvironmentsDeploymentEnvironmentsFormGroup() {
		return new FormGroup<DeploymentEnvironmentsDeploymentEnvironmentsFormProperties>({
			deploymentEnvironmentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			modelDeploymentUnits: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:organization:[a-z0-9-_]+$')]),
			status: new FormControl<DeploymentEnvironmentStatus | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Document {
		consentId?: string | null;

		/** Min length: 1 */
		content?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		contentMD5: string;

		/** Required */
		contentType: DocumentContentType;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;
		datasetId?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		documentId: string;
		DocumentGroundTruth?: Array<DocumentGroundTruth>;

		/** Required */
		metadata: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		retentionInDays: number;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface DocumentFormProperties {
		consentId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		content: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		contentMD5: FormControl<string | null | undefined>,

		/** Required */
		contentType: FormControl<DocumentContentType | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,
		datasetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		documentId: FormControl<string | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		retentionInDays: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateDocumentFormGroup() {
		return new FormGroup<DocumentFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:consent:[a-f0-9]{32}$')]),
			content: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			contentMD5: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			contentType: new FormControl<DocumentContentType | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			datasetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:dataset:[a-f0-9]{32}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			documentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:document:[a-f0-9]{32}$')]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export enum DocumentContentType { 'application/pdf' = 'application/pdf', 'image/jpeg' = 'image/jpeg', 'image/png' = 'image/png', 'image/tiff' = 'image/tiff' }

	export interface DocumentGroundTruth {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		label: string;

		/** Required */
		value: string;
	}
	export interface DocumentGroundTruthFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDocumentGroundTruthFormGroup() {
		return new FormGroup<DocumentGroundTruthFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z-_]+$')]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Documents {
		consentId?: Array<string>;
		datasetId?: Array<string>;

		/** Required */
		DocumentsDocuments: Array<DocumentsDocuments>;

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
		order?: DocumentsOrder | null;
		sortBy?: DocumentsSortBy | null;
	}
	export interface DocumentsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
		order: FormControl<DocumentsOrder | null | undefined>,
		sortBy: FormControl<DocumentsSortBy | null | undefined>,
	}
	export function CreateDocumentsFormGroup() {
		return new FormGroup<DocumentsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			order: new FormControl<DocumentsOrder | null | undefined>(undefined),
			sortBy: new FormControl<DocumentsSortBy | null | undefined>(undefined),
		});

	}

	export interface DocumentsDocuments {
		consentId?: string | null;

		/** Min length: 1 */
		content?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		contentMD5: string;

		/** Required */
		contentType: DocumentContentType;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;
		datasetId?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		documentId: string;
		DocumentsDocumentsGroundTruth?: Array<DocumentsDocumentsGroundTruth>;

		/** Required */
		metadata: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		retentionInDays: number;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface DocumentsDocumentsFormProperties {
		consentId: FormControl<string | null | undefined>,

		/** Min length: 1 */
		content: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		contentMD5: FormControl<string | null | undefined>,

		/** Required */
		contentType: FormControl<DocumentContentType | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,
		datasetId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		documentId: FormControl<string | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		retentionInDays: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateDocumentsDocumentsFormGroup() {
		return new FormGroup<DocumentsDocumentsFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:consent:[a-f0-9]{32}$')]),
			content: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			contentMD5: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			contentType: new FormControl<DocumentContentType | null | undefined>(undefined, [Validators.required]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			datasetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:dataset:[a-f0-9]{32}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			documentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:document:[a-f0-9]{32}$')]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface DocumentsDocumentsGroundTruth {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		label: string;

		/** Required */
		value: string;
	}
	export interface DocumentsDocumentsGroundTruthFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDocumentsDocumentsGroundTruthFormGroup() {
		return new FormGroup<DocumentsDocumentsGroundTruthFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z-_]+$')]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DocumentsOrder { ascending = 'ascending', descending = 'descending' }

	export enum DocumentsSortBy { createdTime = 'createdTime' }

	export interface Empty {
	}
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}

	export interface Error {
		message?: string | null;
	}
	export interface ErrorFormProperties {
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Log {
		events?: Array<string>;

		/** Required */
		logId: string;

		/** Required */
		startTime: string;

		/** Required */
		transitionExecutionId: string;

		/** Required */
		transitionId: string;

		/** Required */
		workflowExecutionId: string;

		/** Required */
		workflowId: string;
	}
	export interface LogFormProperties {

		/** Required */
		logId: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<string | null | undefined>,

		/** Required */
		transitionExecutionId: FormControl<string | null | undefined>,

		/** Required */
		transitionId: FormControl<string | null | undefined>,

		/** Required */
		workflowExecutionId: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateLogFormGroup() {
		return new FormGroup<LogFormProperties>({
			logId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:log:[a-f0-9]{32}$')]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			transitionExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:transition-execution:[a-f0-9]{32}$')]),
			transitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow-execution:[a-f0-9]{32}$')]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow:[a-f0-9]{32}$')]),
		});

	}

	export interface Logs {

		/** Required */
		LogsLogs: Array<LogsLogs>;

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
		order?: DocumentsOrder | null;
		transitionExecutionId?: string | null;
		transitionId?: string;
		workflowExecutionId?: string | null;
		workflowId?: string | null;
	}
	export interface LogsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
		order: FormControl<DocumentsOrder | null | undefined>,
		transitionExecutionId: FormControl<string | null | undefined>,
		transitionId: FormControl<string | null | undefined>,
		workflowExecutionId: FormControl<string | null | undefined>,
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateLogsFormGroup() {
		return new FormGroup<LogsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			order: new FormControl<DocumentsOrder | null | undefined>(undefined),
			transitionExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:transition-execution:[a-f0-9]{32}$')]),
			transitionId: new FormControl<string | null | undefined>(undefined),
			workflowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:workflow-execution:[a-f0-9]{32}$')]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:workflow:[a-f0-9]{32}$')]),
		});

	}

	export interface LogsLogs {
		events?: Array<string>;

		/** Required */
		logId: string;

		/** Required */
		startTime: string;

		/** Required */
		transitionExecutionId: string;

		/** Required */
		transitionId: string;

		/** Required */
		workflowExecutionId: string;

		/** Required */
		workflowId: string;
	}
	export interface LogsLogsFormProperties {

		/** Required */
		logId: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<string | null | undefined>,

		/** Required */
		transitionExecutionId: FormControl<string | null | undefined>,

		/** Required */
		transitionId: FormControl<string | null | undefined>,

		/** Required */
		workflowExecutionId: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateLogsLogsFormGroup() {
		return new FormGroup<LogsLogsFormProperties>({
			logId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:log:[a-f0-9]{32}$')]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			transitionExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:transition-execution:[a-f0-9]{32}$')]),
			transitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowExecutionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow-execution:[a-f0-9]{32}$')]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow:[a-f0-9]{32}$')]),
		});

	}

	export interface Model {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		fieldConfig: {[id: string]: any };

		/** Required */
		metadata: string;

		/** Required */
		modelId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDataBundles: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfRunningTrainings: number;

		/** Required */
		organizationId: string;
		postprocessConfig?: ModelPostprocessConfig;

		/** Required */
		preprocessConfig: ModelPreprocessConfig;

		/** Required */
		status: ModelStatus;

		/** Required */
		trainingId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface ModelFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		fieldConfig: FormControl<{[id: string]: any } | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDataBundles: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfRunningTrainings: FormControl<number | null | undefined>,

		/** Required */
		organizationId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ModelStatus | null | undefined>,

		/** Required */
		trainingId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateModelFormGroup() {
		return new FormGroup<ModelFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			fieldConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model:[a-z0-9-_]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			numberOfDataBundles: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfRunningTrainings: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:organization:[a-z0-9-_]+$')]),
			status: new FormControl<ModelStatus | null | undefined>(undefined, [Validators.required]),
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface ModelPostprocessConfig {

		/** Required */
		strategy: ModelPostprocessConfigStrategy;
	}
	export interface ModelPostprocessConfigFormProperties {

		/** Required */
		strategy: FormControl<ModelPostprocessConfigStrategy | null | undefined>,
	}
	export function CreateModelPostprocessConfigFormGroup() {
		return new FormGroup<ModelPostprocessConfigFormProperties>({
			strategy: new FormControl<ModelPostprocessConfigStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ModelPostprocessConfigStrategy { BEST_FIRST = 'BEST_FIRST' }

	export interface ModelPreprocessConfig {

		/** Required */
		autoRotate: boolean;

		/** Required */
		imageQuality: ModelPreprocessConfigImageQuality;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: number;
	}
	export interface ModelPreprocessConfigFormProperties {

		/** Required */
		autoRotate: FormControl<boolean | null | undefined>,

		/** Required */
		imageQuality: FormControl<ModelPreprocessConfigImageQuality | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: FormControl<number | null | undefined>,
	}
	export function CreateModelPreprocessConfigFormGroup() {
		return new FormGroup<ModelPreprocessConfigFormProperties>({
			autoRotate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			imageQuality: new FormControl<ModelPreprocessConfigImageQuality | null | undefined>(undefined, [Validators.required]),
			maxPages: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(3)]),
		});

	}

	export enum ModelPreprocessConfigImageQuality { LOW = 'LOW', HIGH = 'HIGH' }

	export enum ModelStatus { active = 'active', inactive = 'inactive' }

	export interface Models {

		/** Required */
		ModelsModels: Array<ModelsModels>;

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
	}
	export interface ModelsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateModelsFormGroup() {
		return new FormGroup<ModelsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface ModelsModels {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		fieldConfig: {[id: string]: any };

		/** Required */
		metadata: string;

		/** Required */
		modelId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDataBundles: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfRunningTrainings: number;

		/** Required */
		organizationId: string;
		postprocessConfig?: ModelsModelsPostprocessConfig;

		/** Required */
		preprocessConfig: ModelsModelsPreprocessConfig;

		/** Required */
		status: ModelStatus;

		/** Required */
		trainingId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface ModelsModelsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		fieldConfig: FormControl<{[id: string]: any } | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfDataBundles: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfRunningTrainings: FormControl<number | null | undefined>,

		/** Required */
		organizationId: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<ModelStatus | null | undefined>,

		/** Required */
		trainingId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateModelsModelsFormGroup() {
		return new FormGroup<ModelsModelsFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			fieldConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model:[a-z0-9-_]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			numberOfDataBundles: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfRunningTrainings: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:organization:[a-z0-9-_]+$')]),
			status: new FormControl<ModelStatus | null | undefined>(undefined, [Validators.required]),
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface ModelsModelsPostprocessConfig {

		/** Required */
		strategy: ModelPostprocessConfigStrategy;
	}
	export interface ModelsModelsPostprocessConfigFormProperties {

		/** Required */
		strategy: FormControl<ModelPostprocessConfigStrategy | null | undefined>,
	}
	export function CreateModelsModelsPostprocessConfigFormGroup() {
		return new FormGroup<ModelsModelsPostprocessConfigFormProperties>({
			strategy: new FormControl<ModelPostprocessConfigStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ModelsModelsPreprocessConfig {

		/** Required */
		autoRotate: boolean;

		/** Required */
		imageQuality: ModelPreprocessConfigImageQuality;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: number;
	}
	export interface ModelsModelsPreprocessConfigFormProperties {

		/** Required */
		autoRotate: FormControl<boolean | null | undefined>,

		/** Required */
		imageQuality: FormControl<ModelPreprocessConfigImageQuality | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: FormControl<number | null | undefined>,
	}
	export function CreateModelsModelsPreprocessConfigFormGroup() {
		return new FormGroup<ModelsModelsPreprocessConfigFormProperties>({
			autoRotate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			imageQuality: new FormControl<ModelPreprocessConfigImageQuality | null | undefined>(undefined, [Validators.required]),
			maxPages: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(3)]),
		});

	}

	export interface Organization {
		clientId?: string | null;
		deploymentsAllowed?: string | null;
		deploymentsCreated?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		documentRetentionInDays: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfActiveModelsUsed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDataBundlesAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDataBundlesCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDocumentsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDocumentsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfFieldPredictionsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfFieldPredictionsUsed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfGpuHoursUsed: number;

		/** Minimum: 0 */
		monthlyNumberOfModelDeploymentUnitsUsed?: number | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfPredictionsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfPredictionsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTrainingsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTrainingsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTransitionExecutionsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTransitionExecutionsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfWorkflowExecutionsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfWorkflowExecutionsCreated: number;

		/** Required */
		monthlyUsageSummary: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAppClientsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAppClientsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAssetsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAssetsCreated: number;

		/** Minimum: 0 */
		numberOfDatasetsAllowed?: number | null;

		/** Minimum: 0 */
		numberOfDatasetsCreated?: number | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfModelsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfModelsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfSecretsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfSecretsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfTransitionsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfTransitionsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfUsersAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfUsersCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfWorkflowsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfWorkflowsCreated: number;

		/** Required */
		organizationId: string;

		/** Required */
		paymentMethodId: string;

		/** Required */
		planId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface OrganizationFormProperties {
		clientId: FormControl<string | null | undefined>,
		deploymentsAllowed: FormControl<string | null | undefined>,
		deploymentsCreated: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		documentRetentionInDays: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfActiveModelsUsed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDataBundlesAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDataBundlesCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDocumentsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDocumentsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfFieldPredictionsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfFieldPredictionsUsed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfGpuHoursUsed: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		monthlyNumberOfModelDeploymentUnitsUsed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfPredictionsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfPredictionsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTrainingsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTrainingsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTransitionExecutionsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTransitionExecutionsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfWorkflowExecutionsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfWorkflowExecutionsCreated: FormControl<number | null | undefined>,

		/** Required */
		monthlyUsageSummary: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAppClientsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAppClientsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAssetsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAssetsCreated: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		numberOfDatasetsAllowed: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		numberOfDatasetsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfModelsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfModelsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfSecretsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfSecretsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfTransitionsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfTransitionsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfUsersAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfUsersCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfWorkflowsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfWorkflowsCreated: FormControl<number | null | undefined>,

		/** Required */
		organizationId: FormControl<string | null | undefined>,

		/** Required */
		paymentMethodId: FormControl<string | null | undefined>,

		/** Required */
		planId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationFormGroup() {
		return new FormGroup<OrganizationFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9a-z]+$')]),
			deploymentsAllowed: new FormControl<string | null | undefined>(undefined),
			deploymentsCreated: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			documentRetentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			monthlyNumberOfActiveModelsUsed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfDataBundlesAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfDataBundlesCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfDocumentsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfDocumentsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfFieldPredictionsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfFieldPredictionsUsed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfGpuHoursUsed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfModelDeploymentUnitsUsed: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			monthlyNumberOfPredictionsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfPredictionsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfTrainingsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfTrainingsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfTransitionExecutionsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfTransitionExecutionsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfWorkflowExecutionsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfWorkflowExecutionsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyUsageSummary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			numberOfAppClientsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfAppClientsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfAssetsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfAssetsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfDatasetsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			numberOfDatasetsCreated: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			numberOfModelsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfModelsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfSecretsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfSecretsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfTransitionsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfTransitionsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfUsersAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfUsersCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfWorkflowsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfWorkflowsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:organization:[a-z0-9-_]+$')]),
			paymentMethodId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:payment-method:[a-f0-9]{32}$')]),
			planId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(|las:organization:[a-z0-9-_]+/)las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$')]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface Organizations {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;

		/** Required */
		OrganizationsOrganizations: Array<OrganizationsOrganizations>;
	}
	export interface OrganizationsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationsFormGroup() {
		return new FormGroup<OrganizationsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface OrganizationsOrganizations {
		clientId?: string | null;
		deploymentsAllowed?: string | null;
		deploymentsCreated?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/**
		 * Required
		 * Minimum: 1
		 */
		documentRetentionInDays: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfActiveModelsUsed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDataBundlesAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDataBundlesCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDocumentsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDocumentsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfFieldPredictionsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfFieldPredictionsUsed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfGpuHoursUsed: number;

		/** Minimum: 0 */
		monthlyNumberOfModelDeploymentUnitsUsed?: number | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfPredictionsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfPredictionsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTrainingsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTrainingsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTransitionExecutionsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTransitionExecutionsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfWorkflowExecutionsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfWorkflowExecutionsCreated: number;

		/** Required */
		monthlyUsageSummary: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAppClientsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAppClientsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAssetsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAssetsCreated: number;

		/** Minimum: 0 */
		numberOfDatasetsAllowed?: number | null;

		/** Minimum: 0 */
		numberOfDatasetsCreated?: number | null;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfModelsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfModelsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfSecretsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfSecretsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfTransitionsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfTransitionsCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfUsersAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfUsersCreated: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfWorkflowsAllowed: number;

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfWorkflowsCreated: number;

		/** Required */
		organizationId: string;

		/** Required */
		paymentMethodId: string;

		/** Required */
		planId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface OrganizationsOrganizationsFormProperties {
		clientId: FormControl<string | null | undefined>,
		deploymentsAllowed: FormControl<string | null | undefined>,
		deploymentsCreated: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		documentRetentionInDays: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfActiveModelsUsed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDataBundlesAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDataBundlesCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDocumentsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfDocumentsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfFieldPredictionsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfFieldPredictionsUsed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfGpuHoursUsed: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		monthlyNumberOfModelDeploymentUnitsUsed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfPredictionsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfPredictionsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTrainingsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTrainingsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTransitionExecutionsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfTransitionExecutionsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfWorkflowExecutionsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		monthlyNumberOfWorkflowExecutionsCreated: FormControl<number | null | undefined>,

		/** Required */
		monthlyUsageSummary: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAppClientsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAppClientsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAssetsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfAssetsCreated: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		numberOfDatasetsAllowed: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		numberOfDatasetsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfModelsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfModelsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfSecretsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfSecretsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfTransitionsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfTransitionsCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfUsersAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfUsersCreated: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfWorkflowsAllowed: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		numberOfWorkflowsCreated: FormControl<number | null | undefined>,

		/** Required */
		organizationId: FormControl<string | null | undefined>,

		/** Required */
		paymentMethodId: FormControl<string | null | undefined>,

		/** Required */
		planId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationsOrganizationsFormGroup() {
		return new FormGroup<OrganizationsOrganizationsFormProperties>({
			clientId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9a-z]+$')]),
			deploymentsAllowed: new FormControl<string | null | undefined>(undefined),
			deploymentsCreated: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			documentRetentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			monthlyNumberOfActiveModelsUsed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfDataBundlesAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfDataBundlesCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfDocumentsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfDocumentsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfFieldPredictionsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfFieldPredictionsUsed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfGpuHoursUsed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfModelDeploymentUnitsUsed: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			monthlyNumberOfPredictionsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfPredictionsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfTrainingsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfTrainingsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfTransitionExecutionsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfTransitionExecutionsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfWorkflowExecutionsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyNumberOfWorkflowExecutionsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			monthlyUsageSummary: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			numberOfAppClientsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfAppClientsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfAssetsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfAssetsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfDatasetsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			numberOfDatasetsCreated: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			numberOfModelsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfModelsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfSecretsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfSecretsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfTransitionsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfTransitionsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfUsersAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfUsersCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfWorkflowsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			numberOfWorkflowsCreated: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:organization:[a-z0-9-_]+$')]),
			paymentMethodId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:payment-method:[a-f0-9]{32}$')]),
			planId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(|las:organization:[a-z0-9-_]+/)las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$')]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface PatchAppClientId {
		defaultLoginUrl?: string | null;

		/** Max length: 4096 */
		description?: string | null;
		loginUrls?: Array<string>;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PatchAppClientIdFormProperties {
		defaultLoginUrl: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatchAppClientIdFormGroup() {
		return new FormGroup<PatchAppClientIdFormProperties>({
			defaultLoginUrl: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^http://localhost.*|^https://.*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PatchAssetId {

		/** Min length: 1 */
		content?: string | null;

		/** Max length: 4096 */
		description?: string | null;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PatchAssetIdFormProperties {

		/** Min length: 1 */
		content: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatchAssetIdFormGroup() {
		return new FormGroup<PatchAssetIdFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PatchDataBundleId {

		/** Max length: 4096 */
		description?: string | null;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PatchDataBundleIdFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatchDataBundleIdFormGroup() {
		return new FormGroup<PatchDataBundleIdFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PatchDatasetId {
		containsPersonallyIdentifiableInformation?: boolean | null;

		/** Max length: 4096 */
		description?: string | null;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;

		/** Minimum: 1 */
		retentionInDays?: number | null;
	}
	export interface PatchDatasetIdFormProperties {
		containsPersonallyIdentifiableInformation: FormControl<boolean | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		retentionInDays: FormControl<number | null | undefined>,
	}
	export function CreatePatchDatasetIdFormGroup() {
		return new FormGroup<PatchDatasetIdFormProperties>({
			containsPersonallyIdentifiableInformation: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface PatchDocumentId {
		datasetId?: string | null;

		/** Max length: 4096 */
		description?: string | null;
		PatchDocumentIdGroundTruth?: Array<PatchDocumentIdGroundTruth>;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;

		/** Minimum: 1 */
		retentionInDays?: number | null;
	}
	export interface PatchDocumentIdFormProperties {
		datasetId: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		retentionInDays: FormControl<number | null | undefined>,
	}
	export function CreatePatchDocumentIdFormGroup() {
		return new FormGroup<PatchDocumentIdFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:dataset:[a-f0-9]{32}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface PatchDocumentIdGroundTruth {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		label: string;

		/** Required */
		value: string;
	}
	export interface PatchDocumentIdGroundTruthFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePatchDocumentIdGroundTruthFormGroup() {
		return new FormGroup<PatchDocumentIdGroundTruthFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z-_]+$')]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatchModelId {

		/** Max length: 4096 */
		description?: string | null;
		fieldConfig?: {[id: string]: any };
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;
		postprocessConfig?: PatchModelIdPostprocessConfig;
		preprocessConfig?: PatchModelIdPreprocessConfig;
		trainingId?: string | null;
	}
	export interface PatchModelIdFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		fieldConfig: FormControl<{[id: string]: any } | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
		trainingId: FormControl<string | null | undefined>,
	}
	export function CreatePatchModelIdFormGroup() {
		return new FormGroup<PatchModelIdFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			fieldConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
		});

	}

	export interface PatchModelIdPostprocessConfig {

		/** Required */
		strategy: ModelPostprocessConfigStrategy;
	}
	export interface PatchModelIdPostprocessConfigFormProperties {

		/** Required */
		strategy: FormControl<ModelPostprocessConfigStrategy | null | undefined>,
	}
	export function CreatePatchModelIdPostprocessConfigFormGroup() {
		return new FormGroup<PatchModelIdPostprocessConfigFormProperties>({
			strategy: new FormControl<ModelPostprocessConfigStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatchModelIdPreprocessConfig {

		/** Required */
		autoRotate: boolean;

		/** Required */
		imageQuality: ModelPreprocessConfigImageQuality;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: number;
	}
	export interface PatchModelIdPreprocessConfigFormProperties {

		/** Required */
		autoRotate: FormControl<boolean | null | undefined>,

		/** Required */
		imageQuality: FormControl<ModelPreprocessConfigImageQuality | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: FormControl<number | null | undefined>,
	}
	export function CreatePatchModelIdPreprocessConfigFormGroup() {
		return new FormGroup<PatchModelIdPreprocessConfigFormProperties>({
			autoRotate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			imageQuality: new FormControl<ModelPreprocessConfigImageQuality | null | undefined>(undefined, [Validators.required]),
			maxPages: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(3)]),
		});

	}

	export interface PatchOrganizationId {

		/** Max length: 4096 */
		description?: string | null;

		/** Max length: 4096 */
		name?: string | null;
		paymentMethodId?: string | null;
		planId?: string | null;
	}
	export interface PatchOrganizationIdFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
		paymentMethodId: FormControl<string | null | undefined>,
		planId: FormControl<string | null | undefined>,
	}
	export function CreatePatchOrganizationIdFormGroup() {
		return new FormGroup<PatchOrganizationIdFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			paymentMethodId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:payment-method:[a-f0-9]{32}$')]),
			planId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(|las:organization:[a-z0-9-_]+/)las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$')]),
		});

	}

	export interface PatchPaymentMethodId {

		/** Max length: 4096 */
		description?: string | null;

		/** Max length: 4096 */
		name?: string | null;

		/** Min length: 1 */
		stripeSetupIntentSecret?: string | null;
	}
	export interface PatchPaymentMethodIdFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,

		/** Min length: 1 */
		stripeSetupIntentSecret: FormControl<string | null | undefined>,
	}
	export function CreatePatchPaymentMethodIdFormGroup() {
		return new FormGroup<PatchPaymentMethodIdFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			stripeSetupIntentSecret: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1)]),
		});

	}

	export interface PatchSecretId {
		data?: string | null;

		/** Max length: 4096 */
		description?: string | null;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PatchSecretIdFormProperties {
		data: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatchSecretIdFormGroup() {
		return new FormGroup<PatchSecretIdFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PatchTrainingId {
		deploymentEnvironmentId?: string | null;

		/** Max length: 4096 */
		description?: string | null;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;
		status?: PatchTrainingIdStatus | null;
	}
	export interface PatchTrainingIdFormProperties {
		deploymentEnvironmentId: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
		status: FormControl<PatchTrainingIdStatus | null | undefined>,
	}
	export function CreatePatchTrainingIdFormGroup() {
		return new FormGroup<PatchTrainingIdFormProperties>({
			deploymentEnvironmentId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(|las:organization:[a-z0-9-_]+/)las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			status: new FormControl<PatchTrainingIdStatus | null | undefined>(undefined),
		});

	}

	export enum PatchTrainingIdStatus { cancelled = 'cancelled' }

	export interface PatchTransistionExecutionId {
		error?: PatchTransistionExecutionIdError;
		output?: string | null;
		startTime?: string | null;
		status?: string | null;
	}
	export interface PatchTransistionExecutionIdFormProperties {
		output: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreatePatchTransistionExecutionIdFormGroup() {
		return new FormGroup<PatchTransistionExecutionIdFormProperties>({
			output: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchTransistionExecutionIdError {

		/**
		 * Required
		 * Max length: 4096
		 */
		message: string;
	}
	export interface PatchTransistionExecutionIdErrorFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreatePatchTransistionExecutionIdErrorFormGroup() {
		return new FormGroup<PatchTransistionExecutionIdErrorFormProperties>({
			message: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface PatchTransitionId {
		assets?: PatchTransitionIdAssets;

		/** Max length: 4096 */
		description?: string | null;
		environment?: {[id: string]: string };
		environmentSecrets?: Array<string>;
		inputJsonSchema?: string | null;

		/** Max length: 4096 */
		name?: string | null;
		outputJsonSchema?: string | null;
		parameters?: PatchTransitionIdParameters;
	}
	export interface PatchTransitionIdFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		environment: FormControl<{[id: string]: string } | null | undefined>,
		inputJsonSchema: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
		outputJsonSchema: FormControl<string | null | undefined>,
	}
	export function CreatePatchTransitionIdFormGroup() {
		return new FormGroup<PatchTransitionIdFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			environment: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			inputJsonSchema: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			outputJsonSchema: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PatchTransitionIdAssets {
		jsRemoteComponent?: string | null;
	}
	export interface PatchTransitionIdAssetsFormProperties {
		jsRemoteComponent: FormControl<string | null | undefined>,
	}
	export function CreatePatchTransitionIdAssetsFormGroup() {
		return new FormGroup<PatchTransitionIdAssetsFormProperties>({
			jsRemoteComponent: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:asset:[a-f0-9]{32}$')]),
		});

	}

	export interface PatchTransitionIdParameters {
		cpu?: PatchTransitionIdParametersCpu;
		environment?: {[id: string]: string };
		environmentSecrets?: Array<string>;
		imageUrl?: string | null;
		memory?: PatchTransitionIdParametersMemory;
		secretId?: string | null;
	}
	export interface PatchTransitionIdParametersFormProperties {
		cpu: FormControl<PatchTransitionIdParametersCpu | null | undefined>,
		environment: FormControl<{[id: string]: string } | null | undefined>,
		imageUrl: FormControl<string | null | undefined>,
		memory: FormControl<PatchTransitionIdParametersMemory | null | undefined>,
		secretId: FormControl<string | null | undefined>,
	}
	export function CreatePatchTransitionIdParametersFormGroup() {
		return new FormGroup<PatchTransitionIdParametersFormProperties>({
			cpu: new FormControl<PatchTransitionIdParametersCpu | null | undefined>(undefined),
			environment: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined),
			memory: new FormControl<PatchTransitionIdParametersMemory | null | undefined>(undefined),
			secretId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:secret:[a-f0-9]{32}$')]),
		});

	}

	export enum PatchTransitionIdParametersCpu { _256 = 0, _512 = 1, _1024 = 2 }

	export enum PatchTransitionIdParametersMemory { _512 = 0, _1024 = 1, _2048 = 2, _4096 = 3, _8192 = 4 }

	export interface PatchUserId {

		/** Max length: 131072 */
		avatar?: string | null;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PatchUserIdFormProperties {

		/** Max length: 131072 */
		avatar: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatchUserIdFormGroup() {
		return new FormGroup<PatchUserIdFormProperties>({
			avatar: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131072)]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PatchWorkflowExecutionId {

		/** Required */
		nextTransitionId: string;
	}
	export interface PatchWorkflowExecutionIdFormProperties {

		/** Required */
		nextTransitionId: FormControl<string | null | undefined>,
	}
	export function CreatePatchWorkflowExecutionIdFormGroup() {
		return new FormGroup<PatchWorkflowExecutionIdFormProperties>({
			nextTransitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PatchWorkflowId {
		completedConfig?: PatchWorkflowIdCompletedConfig;

		/** Max length: 4096 */
		description?: string | null;
		errorConfig?: PatchWorkflowIdErrorConfig;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PatchWorkflowIdFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePatchWorkflowIdFormGroup() {
		return new FormGroup<PatchWorkflowIdFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PatchWorkflowIdCompletedConfig {
		environment?: {[id: string]: string };
		environmentSecrets?: Array<string>;

		/** Required */
		imageUrl: string;
		secretId?: string | null;
	}
	export interface PatchWorkflowIdCompletedConfigFormProperties {
		environment: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		imageUrl: FormControl<string | null | undefined>,
		secretId: FormControl<string | null | undefined>,
	}
	export function CreatePatchWorkflowIdCompletedConfigFormGroup() {
		return new FormGroup<PatchWorkflowIdCompletedConfigFormProperties>({
			environment: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:secret:[a-f0-9]{32}$')]),
		});

	}

	export interface PatchWorkflowIdErrorConfig {
		email?: string | null;
		manualRetry?: boolean | null;
	}
	export interface PatchWorkflowIdErrorConfigFormProperties {
		email: FormControl<string | null | undefined>,
		manualRetry: FormControl<boolean | null | undefined>,
	}
	export function CreatePatchWorkflowIdErrorConfigFormGroup() {
		return new FormGroup<PatchWorkflowIdErrorConfigFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$')]),
			manualRetry: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PaymentMethod {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		details: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		paymentMethodId: string;

		/** Max length: 4096 */
		stripePublishableKey?: string | null;

		/** Max length: 4096 */
		stripeSetupIntentSecret?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface PaymentMethodFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		details: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		paymentMethodId: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		stripePublishableKey: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		stripeSetupIntentSecret: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreatePaymentMethodFormGroup() {
		return new FormGroup<PaymentMethodFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			paymentMethodId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:payment-method:[a-f0-9]{32}$')]),
			stripePublishableKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			stripeSetupIntentSecret: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface PaymentMethods {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;

		/** Required */
		PaymentMethodsPaymentMethods: Array<PaymentMethodsPaymentMethods>;
	}
	export interface PaymentMethodsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreatePaymentMethodsFormGroup() {
		return new FormGroup<PaymentMethodsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface PaymentMethodsPaymentMethods {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		details: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		paymentMethodId: string;

		/** Max length: 4096 */
		stripePublishableKey?: string | null;

		/** Max length: 4096 */
		stripeSetupIntentSecret?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface PaymentMethodsPaymentMethodsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		details: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		paymentMethodId: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		stripePublishableKey: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		stripeSetupIntentSecret: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreatePaymentMethodsPaymentMethodsFormGroup() {
		return new FormGroup<PaymentMethodsPaymentMethodsFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			details: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			paymentMethodId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:payment-method:[a-f0-9]{32}$')]),
			stripePublishableKey: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			stripeSetupIntentSecret: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface Plan {
		activeModels?: string | null;

		/** Required */
		available: boolean;

		/** Required */
		currency: PlanCurrency;

		/** Max length: 4096 */
		description?: string | null;
		fieldPredictions?: string | null;
		gpuHours?: string | null;

		/**
		 * Required
		 * Minimum: 1
		 */
		latest: number;
		license?: string | null;
		modelDeploymentUnits?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		organizationId: string;

		/** Required */
		planId: string;
	}
	export interface PlanFormProperties {
		activeModels: FormControl<string | null | undefined>,

		/** Required */
		available: FormControl<boolean | null | undefined>,

		/** Required */
		currency: FormControl<PlanCurrency | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		fieldPredictions: FormControl<string | null | undefined>,
		gpuHours: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		latest: FormControl<number | null | undefined>,
		license: FormControl<string | null | undefined>,
		modelDeploymentUnits: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		organizationId: FormControl<string | null | undefined>,

		/** Required */
		planId: FormControl<string | null | undefined>,
	}
	export function CreatePlanFormGroup() {
		return new FormGroup<PlanFormProperties>({
			activeModels: new FormControl<string | null | undefined>(undefined),
			available: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<PlanCurrency | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			fieldPredictions: new FormControl<string | null | undefined>(undefined),
			gpuHours: new FormControl<string | null | undefined>(undefined),
			latest: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			license: new FormControl<string | null | undefined>(undefined),
			modelDeploymentUnits: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:organization:[a-z0-9-_]+$')]),
			planId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$')]),
		});

	}

	export enum PlanCurrency { USD = 'USD', EUR = 'EUR', NOK = 'NOK' }

	export interface Plans {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;

		/** Required */
		PlansPlans: Array<PlansPlans>;
	}
	export interface PlansFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreatePlansFormGroup() {
		return new FormGroup<PlansFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface PlansPlans {
		activeModels?: string | null;

		/** Required */
		available: boolean;

		/** Required */
		currency: PlanCurrency;

		/** Max length: 4096 */
		description?: string | null;
		fieldPredictions?: string | null;
		gpuHours?: string | null;

		/**
		 * Required
		 * Minimum: 1
		 */
		latest: number;
		license?: string | null;
		modelDeploymentUnits?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		organizationId: string;

		/** Required */
		planId: string;
	}
	export interface PlansPlansFormProperties {
		activeModels: FormControl<string | null | undefined>,

		/** Required */
		available: FormControl<boolean | null | undefined>,

		/** Required */
		currency: FormControl<PlanCurrency | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		fieldPredictions: FormControl<string | null | undefined>,
		gpuHours: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 */
		latest: FormControl<number | null | undefined>,
		license: FormControl<string | null | undefined>,
		modelDeploymentUnits: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		organizationId: FormControl<string | null | undefined>,

		/** Required */
		planId: FormControl<string | null | undefined>,
	}
	export function CreatePlansPlansFormGroup() {
		return new FormGroup<PlansPlansFormProperties>({
			activeModels: new FormControl<string | null | undefined>(undefined),
			available: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			currency: new FormControl<PlanCurrency | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			fieldPredictions: new FormControl<string | null | undefined>(undefined),
			gpuHours: new FormControl<string | null | undefined>(undefined),
			latest: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1)]),
			license: new FormControl<string | null | undefined>(undefined),
			modelDeploymentUnits: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			organizationId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:organization:[a-z0-9-_]+$')]),
			planId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:plan:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$')]),
		});

	}

	export interface PostAppClients {
		callbackUrls?: Array<string>;
		defaultLoginUrl?: string | null;

		/** Max length: 4096 */
		description?: string | null;
		generateSecret?: boolean | null;
		loginUrls?: Array<string>;
		logoutUrls?: Array<string>;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PostAppClientsFormProperties {
		defaultLoginUrl: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		generateSecret: FormControl<boolean | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostAppClientsFormGroup() {
		return new FormGroup<PostAppClientsFormProperties>({
			defaultLoginUrl: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^http://localhost.*|^https://.*')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			generateSecret: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PostAssets {

		/**
		 * Required
		 * Max length: 6250000
		 * Min length: 1
		 */
		content: string;

		/** Max length: 4096 */
		description?: string | null;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PostAssetsFormProperties {

		/**
		 * Required
		 * Max length: 6250000
		 * Min length: 1
		 */
		content: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostAssetsFormGroup() {
		return new FormGroup<PostAssetsFormProperties>({
			content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(6250000)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PostDataBundles {

		/** Minimum items: 1 */
		datasetIds?: Array<string>;

		/** Max length: 4096 */
		description?: string | null;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PostDataBundlesFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostDataBundlesFormGroup() {
		return new FormGroup<PostDataBundlesFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PostDatasets {
		containsPersonallyIdentifiableInformation?: boolean | null;

		/** Max length: 4096 */
		description?: string | null;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;

		/** Minimum: 1 */
		retentionInDays?: number | null;
	}
	export interface PostDatasetsFormProperties {
		containsPersonallyIdentifiableInformation: FormControl<boolean | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		retentionInDays: FormControl<number | null | undefined>,
	}
	export function CreatePostDatasetsFormGroup() {
		return new FormGroup<PostDatasetsFormProperties>({
			containsPersonallyIdentifiableInformation: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface PostDocuments {
		consentId?: string | null;

		/**
		 * Required
		 * Max length: 6250000
		 * Min length: 1
		 */
		content: string;

		/** Required */
		contentType: DocumentContentType;
		datasetId?: string | null;

		/** Max length: 4096 */
		description?: string | null;
		PostDocumentsGroundTruth?: Array<PostDocumentsGroundTruth>;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;

		/** Minimum: 1 */
		retentionInDays?: number | null;
	}
	export interface PostDocumentsFormProperties {
		consentId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 6250000
		 * Min length: 1
		 */
		content: FormControl<string | null | undefined>,

		/** Required */
		contentType: FormControl<DocumentContentType | null | undefined>,
		datasetId: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,

		/** Minimum: 1 */
		retentionInDays: FormControl<number | null | undefined>,
	}
	export function CreatePostDocumentsFormGroup() {
		return new FormGroup<PostDocumentsFormProperties>({
			consentId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:consent:[a-f0-9]{32}$')]),
			content: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(6250000)]),
			contentType: new FormControl<DocumentContentType | null | undefined>(undefined, [Validators.required]),
			datasetId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:dataset:[a-f0-9]{32}$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			retentionInDays: new FormControl<number | null | undefined>(undefined, [Validators.min(1)]),
		});

	}

	export interface PostDocumentsGroundTruth {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		label: string;

		/** Required */
		value: string;
	}
	export interface PostDocumentsGroundTruthFormProperties {

		/**
		 * Required
		 * Max length: 36
		 * Min length: 1
		 */
		label: FormControl<string | null | undefined>,

		/** Required */
		value: FormControl<string | null | undefined>,
	}
	export function CreatePostDocumentsGroundTruthFormGroup() {
		return new FormGroup<PostDocumentsGroundTruthFormProperties>({
			label: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(36), Validators.pattern('^[0-9A-Za-z-_]+$')]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostHeartbeats {
	}
	export interface PostHeartbeatsFormProperties {
	}
	export function CreatePostHeartbeatsFormGroup() {
		return new FormGroup<PostHeartbeatsFormProperties>({
		});

	}

	export interface PostModels {

		/** Max length: 4096 */
		description?: string | null;

		/** Required */
		fieldConfig: {[id: string]: any };
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;
		postprocessConfig?: PostModelsPostprocessConfig;
		preprocessConfig?: PostModelsPreprocessConfig;
	}
	export interface PostModelsFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Required */
		fieldConfig: FormControl<{[id: string]: any } | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostModelsFormGroup() {
		return new FormGroup<PostModelsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			fieldConfig: new FormControl<{[id: string]: any } | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PostModelsPostprocessConfig {

		/** Required */
		strategy: ModelPostprocessConfigStrategy;
	}
	export interface PostModelsPostprocessConfigFormProperties {

		/** Required */
		strategy: FormControl<ModelPostprocessConfigStrategy | null | undefined>,
	}
	export function CreatePostModelsPostprocessConfigFormGroup() {
		return new FormGroup<PostModelsPostprocessConfigFormProperties>({
			strategy: new FormControl<ModelPostprocessConfigStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostModelsPreprocessConfig {

		/** Required */
		autoRotate: boolean;

		/** Required */
		imageQuality: ModelPreprocessConfigImageQuality;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: number;
	}
	export interface PostModelsPreprocessConfigFormProperties {

		/** Required */
		autoRotate: FormControl<boolean | null | undefined>,

		/** Required */
		imageQuality: FormControl<ModelPreprocessConfigImageQuality | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: FormControl<number | null | undefined>,
	}
	export function CreatePostModelsPreprocessConfigFormGroup() {
		return new FormGroup<PostModelsPreprocessConfigFormProperties>({
			autoRotate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			imageQuality: new FormControl<ModelPreprocessConfigImageQuality | null | undefined>(undefined, [Validators.required]),
			maxPages: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(3)]),
		});

	}

	export interface PostOrganizations {

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PostOrganizationsFormProperties {

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostOrganizationsFormGroup() {
		return new FormGroup<PostOrganizationsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PostPaymentMethods {

		/** Max length: 4096 */
		description?: string | null;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PostPaymentMethodsFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostPaymentMethodsFormGroup() {
		return new FormGroup<PostPaymentMethodsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PostPredictions {
		autoRotate?: boolean | null;

		/** Required */
		documentId: string;
		imageQuality?: ModelPreprocessConfigImageQuality | null;

		/**
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages?: number | null;

		/** Required */
		modelId: string;
		postprocessConfig?: PostPredictionsPostprocessConfig;
		rotation?: PostPredictionsRotation;
		trainingId?: string | null;
	}
	export interface PostPredictionsFormProperties {
		autoRotate: FormControl<boolean | null | undefined>,

		/** Required */
		documentId: FormControl<string | null | undefined>,
		imageQuality: FormControl<ModelPreprocessConfigImageQuality | null | undefined>,

		/**
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: FormControl<number | null | undefined>,

		/** Required */
		modelId: FormControl<string | null | undefined>,
		rotation: FormControl<PostPredictionsRotation | null | undefined>,
		trainingId: FormControl<string | null | undefined>,
	}
	export function CreatePostPredictionsFormGroup() {
		return new FormGroup<PostPredictionsFormProperties>({
			autoRotate: new FormControl<boolean | null | undefined>(undefined),
			documentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:document:[a-f0-9]{32}$')]),
			imageQuality: new FormControl<ModelPreprocessConfigImageQuality | null | undefined>(undefined),
			maxPages: new FormControl<number | null | undefined>(undefined, [Validators.min(1), Validators.max(3)]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(|las:organization:[a-z0-9-_]+/)las:model:[a-z0-9-_]+$')]),
			rotation: new FormControl<PostPredictionsRotation | null | undefined>(undefined),
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
		});

	}

	export interface PostPredictionsPostprocessConfig {

		/** Required */
		strategy: ModelPostprocessConfigStrategy;
	}
	export interface PostPredictionsPostprocessConfigFormProperties {

		/** Required */
		strategy: FormControl<ModelPostprocessConfigStrategy | null | undefined>,
	}
	export function CreatePostPredictionsPostprocessConfigFormGroup() {
		return new FormGroup<PostPredictionsPostprocessConfigFormProperties>({
			strategy: new FormControl<ModelPostprocessConfigStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PostPredictionsRotation { _0 = 0, _90 = 1, _180 = 2, _270 = 3 }

	export interface PostSecrets {

		/** Required */
		data: string;

		/** Max length: 4096 */
		description?: string | null;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PostSecretsFormProperties {

		/** Required */
		data: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostSecretsFormGroup() {
		return new FormGroup<PostSecretsFormProperties>({
			data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PostTrainings {

		/** Minimum items: 1 */
		dataBundleIds?: Array<string>;
		dataScientistAssistance?: boolean | null;

		/** Max length: 4096 */
		description?: string | null;
		instanceType?: PostTrainingsInstanceType | null;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;
		warmStartConfig?: PostTrainingsWarmStartConfig;
	}
	export interface PostTrainingsFormProperties {
		dataScientistAssistance: FormControl<boolean | null | undefined>,

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		instanceType: FormControl<PostTrainingsInstanceType | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostTrainingsFormGroup() {
		return new FormGroup<PostTrainingsFormProperties>({
			dataScientistAssistance: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			instanceType: new FormControl<PostTrainingsInstanceType | null | undefined>(undefined),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export enum PostTrainingsInstanceType { 'small-gpu' = 'small-gpu', 'medium-gpu' = 'medium-gpu', 'large-gpu' = 'large-gpu' }

	export interface PostTrainingsWarmStartConfig {

		/** Required */
		trainingId: string;
	}
	export interface PostTrainingsWarmStartConfigFormProperties {

		/** Required */
		trainingId: FormControl<string | null | undefined>,
	}
	export function CreatePostTrainingsWarmStartConfigFormGroup() {
		return new FormGroup<PostTrainingsWarmStartConfigFormProperties>({
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
		});

	}

	export interface PostTransitionExecution {
	}
	export interface PostTransitionExecutionFormProperties {
	}
	export function CreatePostTransitionExecutionFormGroup() {
		return new FormGroup<PostTransitionExecutionFormProperties>({
		});

	}

	export interface PostTransitions {

		/** Max length: 4096 */
		description?: string | null;
		inputJsonSchema?: string | null;

		/** Max length: 4096 */
		name?: string | null;
		outputJsonSchema?: string | null;
		parameters?: PostTransitionsParameters;

		/**
		 * Minimum: 60
		 * Maximum: 1800
		 */
		timeoutInSeconds?: number | null;

		/** Required */
		transitionType: PostTransitionsTransitionType;
	}
	export interface PostTransitionsFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,
		inputJsonSchema: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
		outputJsonSchema: FormControl<string | null | undefined>,

		/**
		 * Minimum: 60
		 * Maximum: 1800
		 */
		timeoutInSeconds: FormControl<number | null | undefined>,

		/** Required */
		transitionType: FormControl<PostTransitionsTransitionType | null | undefined>,
	}
	export function CreatePostTransitionsFormGroup() {
		return new FormGroup<PostTransitionsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			inputJsonSchema: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			outputJsonSchema: new FormControl<string | null | undefined>(undefined),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.min(60), Validators.max(1800)]),
			transitionType: new FormControl<PostTransitionsTransitionType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostTransitionsParameters {
		cpu?: PostTransitionsParametersCpu;
		environment?: {[id: string]: string };
		environmentSecrets?: Array<string>;

		/** Required */
		imageUrl: string;
		memory?: PostTransitionsParametersMemory;
		secretId?: string | null;
	}
	export interface PostTransitionsParametersFormProperties {
		cpu: FormControl<PostTransitionsParametersCpu | null | undefined>,
		environment: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		imageUrl: FormControl<string | null | undefined>,
		memory: FormControl<PostTransitionsParametersMemory | null | undefined>,
		secretId: FormControl<string | null | undefined>,
	}
	export function CreatePostTransitionsParametersFormGroup() {
		return new FormGroup<PostTransitionsParametersFormProperties>({
			cpu: new FormControl<PostTransitionsParametersCpu | null | undefined>(undefined),
			environment: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			memory: new FormControl<PostTransitionsParametersMemory | null | undefined>(undefined),
			secretId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:secret:[a-f0-9]{32}$')]),
		});

	}

	export enum PostTransitionsParametersCpu { _256 = 0, _512 = 1, _1024 = 2 }

	export enum PostTransitionsParametersMemory { _512 = 0, _1024 = 1, _2048 = 2, _4096 = 3, _8192 = 4 }

	export enum PostTransitionsTransitionType { docker = 'docker', manual = 'manual' }

	export interface PostUsers {
		appClientId?: string | null;

		/** Max length: 131072 */
		avatar?: string | null;

		/** Required */
		email: string;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;
	}
	export interface PostUsersFormProperties {
		appClientId: FormControl<string | null | undefined>,

		/** Max length: 131072 */
		avatar: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostUsersFormGroup() {
		return new FormGroup<PostUsersFormProperties>({
			appClientId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:app-client:[a-z0-9-_]+$')]),
			avatar: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131072)]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$')]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PostWorkflowExecutions {

		/** Required */
		input: string;
	}
	export interface PostWorkflowExecutionsFormProperties {

		/** Required */
		input: FormControl<string | null | undefined>,
	}
	export function CreatePostWorkflowExecutionsFormGroup() {
		return new FormGroup<PostWorkflowExecutionsFormProperties>({
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PostWorkflows {
		completedConfig?: PostWorkflowsCompletedConfig;

		/** Max length: 4096 */
		description?: string | null;
		errorConfig?: PostWorkflowsErrorConfig;

		/** Max length: 4096 */
		name?: string | null;

		/** Required */
		specification: PostWorkflowsSpecification;
	}
	export interface PostWorkflowsFormProperties {

		/** Max length: 4096 */
		description: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePostWorkflowsFormGroup() {
		return new FormGroup<PostWorkflowsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
		});

	}

	export interface PostWorkflowsCompletedConfig {
		environment?: {[id: string]: string };
		environmentSecrets?: Array<string>;

		/** Required */
		imageUrl: string;
		secretId?: string | null;
	}
	export interface PostWorkflowsCompletedConfigFormProperties {
		environment: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		imageUrl: FormControl<string | null | undefined>,
		secretId: FormControl<string | null | undefined>,
	}
	export function CreatePostWorkflowsCompletedConfigFormGroup() {
		return new FormGroup<PostWorkflowsCompletedConfigFormProperties>({
			environment: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:secret:[a-f0-9]{32}$')]),
		});

	}

	export interface PostWorkflowsErrorConfig {
		email?: string | null;
		manualRetry?: boolean | null;
	}
	export interface PostWorkflowsErrorConfigFormProperties {
		email: FormControl<string | null | undefined>,
		manualRetry: FormControl<boolean | null | undefined>,
	}
	export function CreatePostWorkflowsErrorConfigFormGroup() {
		return new FormGroup<PostWorkflowsErrorConfigFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$')]),
			manualRetry: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PostWorkflowsSpecification {

		/** Required */
		definition: string;
		language?: PostWorkflowsSpecificationLanguage | null;
		version?: PostWorkflowsSpecificationVersion | null;
	}
	export interface PostWorkflowsSpecificationFormProperties {

		/** Required */
		definition: FormControl<string | null | undefined>,
		language: FormControl<PostWorkflowsSpecificationLanguage | null | undefined>,
		version: FormControl<PostWorkflowsSpecificationVersion | null | undefined>,
	}
	export function CreatePostWorkflowsSpecificationFormGroup() {
		return new FormGroup<PostWorkflowsSpecificationFormProperties>({
			definition: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			language: new FormControl<PostWorkflowsSpecificationLanguage | null | undefined>(undefined),
			version: new FormControl<PostWorkflowsSpecificationVersion | null | undefined>(undefined),
		});

	}

	export enum PostWorkflowsSpecificationLanguage { ASL = 'ASL' }

	export enum PostWorkflowsSpecificationVersion { '1.0.0' = '1.0.0' }

	export interface Prediction {

		/** Max length: 4096 */
		createdBy?: string | null;
		createdTime?: string | null;

		/** Required */
		documentId: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		inferenceTime: number;

		/** Required */
		modelId: string;
		postprocessConfig?: PredictionPostprocessConfig;

		/** Required */
		predictionId: string;

		/** Required */
		predictions: Array<string>;
		preprocessConfig?: PredictionPreprocessConfig;
		trainingId?: string | null;
	}
	export interface PredictionFormProperties {

		/** Max length: 4096 */
		createdBy: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		documentId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		inferenceTime: FormControl<number | null | undefined>,

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		predictionId: FormControl<string | null | undefined>,
		trainingId: FormControl<string | null | undefined>,
	}
	export function CreatePredictionFormGroup() {
		return new FormGroup<PredictionFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			documentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:document:[a-f0-9]{32}$')]),
			inferenceTime: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(|las:organization:[a-z0-9-_]+/)las:model:[a-z0-9-_]+$')]),
			predictionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:prediction:[a-f0-9]{32}$')]),
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
		});

	}

	export interface PredictionPostprocessConfig {

		/** Required */
		strategy: ModelPostprocessConfigStrategy;
	}
	export interface PredictionPostprocessConfigFormProperties {

		/** Required */
		strategy: FormControl<ModelPostprocessConfigStrategy | null | undefined>,
	}
	export function CreatePredictionPostprocessConfigFormGroup() {
		return new FormGroup<PredictionPostprocessConfigFormProperties>({
			strategy: new FormControl<ModelPostprocessConfigStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PredictionPreprocessConfig {

		/** Required */
		autoRotate: boolean;

		/** Required */
		imageQuality: ModelPreprocessConfigImageQuality;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: number;
	}
	export interface PredictionPreprocessConfigFormProperties {

		/** Required */
		autoRotate: FormControl<boolean | null | undefined>,

		/** Required */
		imageQuality: FormControl<ModelPreprocessConfigImageQuality | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: FormControl<number | null | undefined>,
	}
	export function CreatePredictionPreprocessConfigFormGroup() {
		return new FormGroup<PredictionPreprocessConfigFormProperties>({
			autoRotate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			imageQuality: new FormControl<ModelPreprocessConfigImageQuality | null | undefined>(undefined, [Validators.required]),
			maxPages: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(3)]),
		});

	}

	export interface Predictions {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
		order?: DocumentsOrder | null;

		/** Required */
		PredictionsPredictions: Array<PredictionsPredictions>;
		sortBy?: DocumentsSortBy | null;
	}
	export interface PredictionsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
		order: FormControl<DocumentsOrder | null | undefined>,
		sortBy: FormControl<DocumentsSortBy | null | undefined>,
	}
	export function CreatePredictionsFormGroup() {
		return new FormGroup<PredictionsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			order: new FormControl<DocumentsOrder | null | undefined>(undefined),
			sortBy: new FormControl<DocumentsSortBy | null | undefined>(undefined),
		});

	}

	export interface PredictionsPredictions {

		/** Max length: 4096 */
		createdBy?: string | null;
		createdTime?: string | null;

		/** Required */
		documentId: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		inferenceTime: number;

		/** Required */
		modelId: string;
		postprocessConfig?: PredictionsPredictionsPostprocessConfig;

		/** Required */
		predictionId: string;

		/** Required */
		predictions: Array<string>;
		preprocessConfig?: PredictionsPredictionsPreprocessConfig;
		trainingId?: string | null;
	}
	export interface PredictionsPredictionsFormProperties {

		/** Max length: 4096 */
		createdBy: FormControl<string | null | undefined>,
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		documentId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		inferenceTime: FormControl<number | null | undefined>,

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/** Required */
		predictionId: FormControl<string | null | undefined>,
		trainingId: FormControl<string | null | undefined>,
	}
	export function CreatePredictionsPredictionsFormGroup() {
		return new FormGroup<PredictionsPredictionsFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			documentId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:document:[a-f0-9]{32}$')]),
			inferenceTime: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^(|las:organization:[a-z0-9-_]+/)las:model:[a-z0-9-_]+$')]),
			predictionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:prediction:[a-f0-9]{32}$')]),
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
		});

	}

	export interface PredictionsPredictionsPostprocessConfig {

		/** Required */
		strategy: ModelPostprocessConfigStrategy;
	}
	export interface PredictionsPredictionsPostprocessConfigFormProperties {

		/** Required */
		strategy: FormControl<ModelPostprocessConfigStrategy | null | undefined>,
	}
	export function CreatePredictionsPredictionsPostprocessConfigFormGroup() {
		return new FormGroup<PredictionsPredictionsPostprocessConfigFormProperties>({
			strategy: new FormControl<ModelPostprocessConfigStrategy | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PredictionsPredictionsPreprocessConfig {

		/** Required */
		autoRotate: boolean;

		/** Required */
		imageQuality: ModelPreprocessConfigImageQuality;

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: number;
	}
	export interface PredictionsPredictionsPreprocessConfigFormProperties {

		/** Required */
		autoRotate: FormControl<boolean | null | undefined>,

		/** Required */
		imageQuality: FormControl<ModelPreprocessConfigImageQuality | null | undefined>,

		/**
		 * Required
		 * Minimum: 1
		 * Maximum: 3
		 */
		maxPages: FormControl<number | null | undefined>,
	}
	export function CreatePredictionsPredictionsPreprocessConfigFormGroup() {
		return new FormGroup<PredictionsPredictionsPreprocessConfigFormProperties>({
			autoRotate: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			imageQuality: new FormControl<ModelPreprocessConfigImageQuality | null | undefined>(undefined, [Validators.required]),
			maxPages: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(1), Validators.max(3)]),
		});

	}

	export interface Profile {
		createdTime?: string | null;
		email?: string | null;

		/** Max length: 4096 */
		familyName?: string | null;

		/** Max length: 4096 */
		givenName?: string | null;

		/** Max length: 4096 */
		locale?: string | null;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;

		/** Minimum: 0 */
		numberOfOrganizationsAllowed?: number | null;

		/** Minimum: 0 */
		numberOfOrganizationsCreated?: number | null;

		/** Max length: 4096 */
		picture?: string | null;

		/** Required */
		profileId: string;
		updatedTime?: string | null;
	}
	export interface ProfileFormProperties {
		createdTime: FormControl<string | null | undefined>,
		email: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		familyName: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		givenName: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		locale: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,

		/** Minimum: 0 */
		numberOfOrganizationsAllowed: FormControl<number | null | undefined>,

		/** Minimum: 0 */
		numberOfOrganizationsCreated: FormControl<number | null | undefined>,

		/** Max length: 4096 */
		picture: FormControl<string | null | undefined>,

		/** Required */
		profileId: FormControl<string | null | undefined>,
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateProfileFormGroup() {
		return new FormGroup<ProfileFormProperties>({
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$')]),
			familyName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			givenName: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			numberOfOrganizationsAllowed: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			numberOfOrganizationsCreated: new FormControl<number | null | undefined>(undefined, [Validators.min(0)]),
			picture: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			profileId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:profile:[a-f0-9]{32}$')]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface Secret {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		secretId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface SecretFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		secretId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateSecretFormGroup() {
		return new FormGroup<SecretFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			secretId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:secret:[a-f0-9]{32}$')]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface Secrets {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;

		/** Required */
		SecretsSecrets: Array<SecretsSecrets>;
	}
	export interface SecretsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateSecretsFormGroup() {
		return new FormGroup<SecretsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface SecretsSecrets {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		secretId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface SecretsSecretsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		secretId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateSecretsSecretsFormGroup() {
		return new FormGroup<SecretsSecretsFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			secretId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:secret:[a-f0-9]{32}$')]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface Training {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/** Required */
		dataBundleIds: Array<string>;
		dataScientistAssistance?: boolean | null;
		deploymentEnvironmentId?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		evaluation: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		gpuHours: number;

		/** Required */
		instanceType: PostTrainingsInstanceType;

		/** Required */
		metadata: string;

		/** Required */
		modelId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		status: TrainingStatus;

		/** Required */
		trainingId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
		warmStartConfig?: TrainingWarmStartConfig;
	}
	export interface TrainingFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,
		dataScientistAssistance: FormControl<boolean | null | undefined>,
		deploymentEnvironmentId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		evaluation: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		gpuHours: FormControl<number | null | undefined>,

		/** Required */
		instanceType: FormControl<PostTrainingsInstanceType | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TrainingStatus | null | undefined>,

		/** Required */
		trainingId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateTrainingFormGroup() {
		return new FormGroup<TrainingFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			dataScientistAssistance: new FormControl<boolean | null | undefined>(undefined),
			deploymentEnvironmentId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(|las:organization:[a-z0-9-_]+/)las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			evaluation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gpuHours: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			instanceType: new FormControl<PostTrainingsInstanceType | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model:[a-z0-9-_]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			status: new FormControl<TrainingStatus | null | undefined>(undefined, [Validators.required]),
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export enum TrainingStatus { 'waiting-for-approval' = 'waiting-for-approval', pending = 'pending', running = 'running', succeeded = 'succeeded', failed = 'failed', cancelled = 'cancelled' }

	export interface TrainingWarmStartConfig {

		/** Required */
		trainingId: string;
	}
	export interface TrainingWarmStartConfigFormProperties {

		/** Required */
		trainingId: FormControl<string | null | undefined>,
	}
	export function CreateTrainingWarmStartConfigFormGroup() {
		return new FormGroup<TrainingWarmStartConfigFormProperties>({
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
		});

	}

	export interface Trainings {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
		status?: Array<TrainingStatus>;

		/** Required */
		TrainingsTrainings: Array<TrainingsTrainings>;
	}
	export interface TrainingsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateTrainingsFormGroup() {
		return new FormGroup<TrainingsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface TrainingsTrainings {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/** Required */
		dataBundleIds: Array<string>;
		dataScientistAssistance?: boolean | null;
		deploymentEnvironmentId?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		evaluation: string;

		/**
		 * Required
		 * Minimum: 0
		 */
		gpuHours: number;

		/** Required */
		instanceType: PostTrainingsInstanceType;

		/** Required */
		metadata: string;

		/** Required */
		modelId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		status: TrainingStatus;

		/** Required */
		trainingId: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
		warmStartConfig?: TrainingsTrainingsWarmStartConfig;
	}
	export interface TrainingsTrainingsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,
		dataScientistAssistance: FormControl<boolean | null | undefined>,
		deploymentEnvironmentId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/** Required */
		evaluation: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 0
		 */
		gpuHours: FormControl<number | null | undefined>,

		/** Required */
		instanceType: FormControl<PostTrainingsInstanceType | null | undefined>,

		/** Required */
		metadata: FormControl<string | null | undefined>,

		/** Required */
		modelId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TrainingStatus | null | undefined>,

		/** Required */
		trainingId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateTrainingsTrainingsFormGroup() {
		return new FormGroup<TrainingsTrainingsFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			dataScientistAssistance: new FormControl<boolean | null | undefined>(undefined),
			deploymentEnvironmentId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(|las:organization:[a-z0-9-_]+/)las:deployment-environment:[a-z0-9-_]+(|:@[a-z0-9-_]+|:[0-9]+)$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			evaluation: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gpuHours: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(0)]),
			instanceType: new FormControl<PostTrainingsInstanceType | null | undefined>(undefined, [Validators.required]),
			metadata: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			modelId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model:[a-z0-9-_]+$')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			status: new FormControl<TrainingStatus | null | undefined>(undefined, [Validators.required]),
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface TrainingsTrainingsWarmStartConfig {

		/** Required */
		trainingId: string;
	}
	export interface TrainingsTrainingsWarmStartConfigFormProperties {

		/** Required */
		trainingId: FormControl<string | null | undefined>,
	}
	export function CreateTrainingsTrainingsWarmStartConfigFormGroup() {
		return new FormGroup<TrainingsTrainingsWarmStartConfigFormProperties>({
			trainingId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:model-training:[a-f0-9]{32}$')]),
		});

	}

	export interface Transition {
		assets?: TransitionAssets;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;
		inputJsonSchema?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;
		outputJsonSchema?: string | null;

		/** Required */
		parameters: string;

		/**
		 * Required
		 * Minimum: 60
		 * Maximum: 1800
		 */
		timeoutInSeconds: number;

		/** Required */
		transitionId: string;

		/** Required */
		transitionType: PostTransitionsTransitionType;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface TransitionFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,
		inputJsonSchema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,
		outputJsonSchema: FormControl<string | null | undefined>,

		/** Required */
		parameters: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 60
		 * Maximum: 1800
		 */
		timeoutInSeconds: FormControl<number | null | undefined>,

		/** Required */
		transitionId: FormControl<string | null | undefined>,

		/** Required */
		transitionType: FormControl<PostTransitionsTransitionType | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateTransitionFormGroup() {
		return new FormGroup<TransitionFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			inputJsonSchema: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			outputJsonSchema: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(60), Validators.max(1800)]),
			transitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transitionType: new FormControl<PostTransitionsTransitionType | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface TransitionAssets {
		jsRemoteComponent?: string | null;
	}
	export interface TransitionAssetsFormProperties {
		jsRemoteComponent: FormControl<string | null | undefined>,
	}
	export function CreateTransitionAssetsFormGroup() {
		return new FormGroup<TransitionAssetsFormProperties>({
			jsRemoteComponent: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:asset:[a-f0-9]{32}$')]),
		});

	}

	export interface TransitionExecution {

		/**
		 * Required
		 * Max length: 4096
		 */
		completedBy: string;
		endTime?: string | null;

		/** Required */
		executionId: string;

		/** Required */
		input: string;
		logId?: string | null;
		startTime?: string | null;

		/** Required */
		status: TransitionExecutionStatus;

		/** Required */
		transitionId: string;
	}
	export interface TransitionExecutionFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		completedBy: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,

		/** Required */
		executionId: FormControl<string | null | undefined>,

		/** Required */
		input: FormControl<string | null | undefined>,
		logId: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TransitionExecutionStatus | null | undefined>,

		/** Required */
		transitionId: FormControl<string | null | undefined>,
	}
	export function CreateTransitionExecutionFormGroup() {
		return new FormGroup<TransitionExecutionFormProperties>({
			completedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			executionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:transition-execution:[a-f0-9]{32}$')]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:log:[a-f0-9]{32}$')]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			status: new FormControl<TransitionExecutionStatus | null | undefined>(undefined, [Validators.required]),
			transitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum TransitionExecutionStatus { running = 'running', succeeded = 'succeeded', failed = 'failed', rejected = 'rejected', retry = 'retry' }

	export interface TransitionExecutions {

		/** Required */
		TransitionExecutionsExecutions: Array<TransitionExecutionsExecutions>;

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
		status?: Array<TransitionExecutionStatus>;

		/** Required */
		transitionId: string;
	}
	export interface TransitionExecutionsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,

		/** Required */
		transitionId: FormControl<string | null | undefined>,
	}
	export function CreateTransitionExecutionsFormGroup() {
		return new FormGroup<TransitionExecutionsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			transitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TransitionExecutionsExecutions {

		/**
		 * Required
		 * Max length: 4096
		 */
		completedBy: string;
		endTime?: string | null;

		/** Required */
		executionId: string;

		/** Required */
		input: string;
		logId?: string | null;
		startTime?: string | null;

		/** Required */
		status: TransitionExecutionStatus;

		/** Required */
		transitionId: string;
	}
	export interface TransitionExecutionsExecutionsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		completedBy: FormControl<string | null | undefined>,
		endTime: FormControl<string | null | undefined>,

		/** Required */
		executionId: FormControl<string | null | undefined>,

		/** Required */
		input: FormControl<string | null | undefined>,
		logId: FormControl<string | null | undefined>,
		startTime: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<TransitionExecutionStatus | null | undefined>,

		/** Required */
		transitionId: FormControl<string | null | undefined>,
	}
	export function CreateTransitionExecutionsExecutionsFormGroup() {
		return new FormGroup<TransitionExecutionsExecutionsFormProperties>({
			completedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			executionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:transition-execution:[a-f0-9]{32}$')]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:log:[a-f0-9]{32}$')]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			status: new FormControl<TransitionExecutionStatus | null | undefined>(undefined, [Validators.required]),
			transitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Transitions {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
		transitionType?: Array<PostTransitionsTransitionType>;

		/** Required */
		TransitionsTransitions: Array<TransitionsTransitions>;
	}
	export interface TransitionsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateTransitionsFormGroup() {
		return new FormGroup<TransitionsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface TransitionsTransitions {
		assets?: TransitionsTransitionsAssets;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;
		inputJsonSchema?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;
		outputJsonSchema?: string | null;

		/** Required */
		parameters: string;

		/**
		 * Required
		 * Minimum: 60
		 * Maximum: 1800
		 */
		timeoutInSeconds: number;

		/** Required */
		transitionId: string;

		/** Required */
		transitionType: PostTransitionsTransitionType;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;
	}
	export interface TransitionsTransitionsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,
		inputJsonSchema: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,
		outputJsonSchema: FormControl<string | null | undefined>,

		/** Required */
		parameters: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Minimum: 60
		 * Maximum: 1800
		 */
		timeoutInSeconds: FormControl<number | null | undefined>,

		/** Required */
		transitionId: FormControl<string | null | undefined>,

		/** Required */
		transitionType: FormControl<PostTransitionsTransitionType | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,
	}
	export function CreateTransitionsTransitionsFormGroup() {
		return new FormGroup<TransitionsTransitionsFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			inputJsonSchema: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			outputJsonSchema: new FormControl<string | null | undefined>(undefined),
			parameters: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			timeoutInSeconds: new FormControl<number | null | undefined>(undefined, [Validators.required, Validators.min(60), Validators.max(1800)]),
			transitionId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			transitionType: new FormControl<PostTransitionsTransitionType | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
		});

	}

	export interface TransitionsTransitionsAssets {
		jsRemoteComponent?: string | null;
	}
	export interface TransitionsTransitionsAssetsFormProperties {
		jsRemoteComponent: FormControl<string | null | undefined>,
	}
	export function CreateTransitionsTransitionsAssetsFormGroup() {
		return new FormGroup<TransitionsTransitionsAssetsFormProperties>({
			jsRemoteComponent: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:asset:[a-f0-9]{32}$')]),
		});

	}

	export interface User {

		/** Max length: 131072 */
		avatar?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/** Required */
		email: string;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;
		profileId?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;

		/** Required */
		userId: string;
	}
	export interface UserFormProperties {

		/** Max length: 131072 */
		avatar: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
		profileId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,

		/** Required */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserFormGroup() {
		return new FormGroup<UserFormProperties>({
			avatar: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131072)]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$')]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			profileId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:profile:[a-f0-9]{32}$')]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:user:[a-f0-9]{32}$')]),
		});

	}

	export interface Users {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;

		/** Required */
		UsersUsers: Array<UsersUsers>;
	}
	export interface UsersFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateUsersFormGroup() {
		return new FormGroup<UsersFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface UsersUsers {

		/** Max length: 131072 */
		avatar?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/** Required */
		email: string;
		metadata?: string | null;

		/** Max length: 4096 */
		name?: string | null;
		profileId?: string | null;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;

		/** Required */
		userId: string;
	}
	export interface UsersUsersFormProperties {

		/** Max length: 131072 */
		avatar: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/** Required */
		email: FormControl<string | null | undefined>,
		metadata: FormControl<string | null | undefined>,

		/** Max length: 4096 */
		name: FormControl<string | null | undefined>,
		profileId: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,

		/** Required */
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUsersUsersFormGroup() {
		return new FormGroup<UsersUsersFormProperties>({
			avatar: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(131072)]),
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$')]),
			metadata: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(4096)]),
			profileId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:profile:[a-f0-9]{32}$')]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			userId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:user:[a-f0-9]{32}$')]),
		});

	}

	export interface Workflow {

		/** Required */
		completedConfig: WorkflowCompletedConfig;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		errorConfig: WorkflowErrorConfig;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		numberOfRunningExecutions: number;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;

		/** Required */
		workflowId: string;
	}
	export interface WorkflowFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		numberOfRunningExecutions: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowFormGroup() {
		return new FormGroup<WorkflowFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			numberOfRunningExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow:[a-f0-9]{32}$')]),
		});

	}

	export interface WorkflowCompletedConfig {
		environment?: {[id: string]: string };
		environmentSecrets?: Array<string>;

		/** Required */
		imageUrl: string;
		secretId?: string | null;
	}
	export interface WorkflowCompletedConfigFormProperties {
		environment: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		imageUrl: FormControl<string | null | undefined>,
		secretId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowCompletedConfigFormGroup() {
		return new FormGroup<WorkflowCompletedConfigFormProperties>({
			environment: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:secret:[a-f0-9]{32}$')]),
		});

	}

	export interface WorkflowErrorConfig {
		email?: string | null;
		manualRetry?: boolean | null;
	}
	export interface WorkflowErrorConfigFormProperties {
		email: FormControl<string | null | undefined>,
		manualRetry: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkflowErrorConfigFormGroup() {
		return new FormGroup<WorkflowErrorConfigFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$')]),
			manualRetry: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface WorkflowExecution {
		completedBy?: Array<string>;
		completedTaskLogId?: string | null;

		/** Required */
		endTime: string;
		events?: Array<string>;

		/** Required */
		executionId: string;

		/** Required */
		input: string;
		logId?: string | null;

		/** Required */
		output: string;

		/** Required */
		startTime: string;

		/** Required */
		status: WorkflowExecutionStatus;

		/** Required */
		transitionExecutions: string;

		/** Required */
		workflowId: string;
	}
	export interface WorkflowExecutionFormProperties {
		completedTaskLogId: FormControl<string | null | undefined>,

		/** Required */
		endTime: FormControl<string | null | undefined>,

		/** Required */
		executionId: FormControl<string | null | undefined>,

		/** Required */
		input: FormControl<string | null | undefined>,
		logId: FormControl<string | null | undefined>,

		/** Required */
		output: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<WorkflowExecutionStatus | null | undefined>,

		/** Required */
		transitionExecutions: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionFormGroup() {
		return new FormGroup<WorkflowExecutionFormProperties>({
			completedTaskLogId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:log:[a-f0-9]{32}$')]),
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			executionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow-execution:[a-f0-9]{32}$')]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:log:[a-f0-9]{32}$')]),
			output: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			status: new FormControl<WorkflowExecutionStatus | null | undefined>(undefined, [Validators.required]),
			transitionExecutions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow:[a-f0-9]{32}$')]),
		});

	}

	export enum WorkflowExecutionStatus { running = 'running', succeeded = 'succeeded', failed = 'failed', rejected = 'rejected', retry = 'retry', error = 'error' }

	export interface WorkflowExecutions {

		/** Required */
		WorkflowExecutionsExecutions: Array<WorkflowExecutionsExecutions>;

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;
		order?: DocumentsOrder | null;
		sortBy?: WorkflowExecutionsSortBy | null;
		status?: Array<WorkflowExecutionStatus>;

		/** Required */
		workflowId: string;
	}
	export interface WorkflowExecutionsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
		order: FormControl<DocumentsOrder | null | undefined>,
		sortBy: FormControl<WorkflowExecutionsSortBy | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionsFormGroup() {
		return new FormGroup<WorkflowExecutionsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			order: new FormControl<DocumentsOrder | null | undefined>(undefined),
			sortBy: new FormControl<WorkflowExecutionsSortBy | null | undefined>(undefined),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow:[a-f0-9]{32}$')]),
		});

	}

	export interface WorkflowExecutionsExecutions {
		completedBy?: Array<string>;
		completedTaskLogId?: string | null;

		/** Required */
		endTime: string;
		events?: Array<string>;

		/** Required */
		executionId: string;

		/** Required */
		input: string;
		logId?: string | null;

		/** Required */
		output: string;

		/** Required */
		startTime: string;

		/** Required */
		status: WorkflowExecutionStatus;

		/** Required */
		transitionExecutions: string;

		/** Required */
		workflowId: string;
	}
	export interface WorkflowExecutionsExecutionsFormProperties {
		completedTaskLogId: FormControl<string | null | undefined>,

		/** Required */
		endTime: FormControl<string | null | undefined>,

		/** Required */
		executionId: FormControl<string | null | undefined>,

		/** Required */
		input: FormControl<string | null | undefined>,
		logId: FormControl<string | null | undefined>,

		/** Required */
		output: FormControl<string | null | undefined>,

		/** Required */
		startTime: FormControl<string | null | undefined>,

		/** Required */
		status: FormControl<WorkflowExecutionStatus | null | undefined>,

		/** Required */
		transitionExecutions: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowExecutionsExecutionsFormGroup() {
		return new FormGroup<WorkflowExecutionsExecutionsFormProperties>({
			completedTaskLogId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:log:[a-f0-9]{32}$')]),
			endTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			executionId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow-execution:[a-f0-9]{32}$')]),
			input: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			logId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:log:[a-f0-9]{32}$')]),
			output: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			startTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			status: new FormControl<WorkflowExecutionStatus | null | undefined>(undefined, [Validators.required]),
			transitionExecutions: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow:[a-f0-9]{32}$')]),
		});

	}

	export enum WorkflowExecutionsSortBy { startTime = 'startTime', endTime = 'endTime' }

	export interface Workflows {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: string;

		/** Required */
		WorkflowsWorkflows: Array<WorkflowsWorkflows>;
	}
	export interface WorkflowsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		nextToken: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowsFormGroup() {
		return new FormGroup<WorkflowsFormProperties>({
			nextToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
		});

	}

	export interface WorkflowsWorkflows {

		/** Required */
		completedConfig: WorkflowsWorkflowsCompletedConfig;

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: string;

		/** Required */
		createdTime: string;

		/**
		 * Required
		 * Max length: 4096
		 */
		description: string;

		/** Required */
		errorConfig: WorkflowsWorkflowsErrorConfig;

		/**
		 * Required
		 * Max length: 4096
		 */
		name: string;

		/** Required */
		numberOfRunningExecutions: number;

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: string;

		/** Required */
		updatedTime: string;

		/** Required */
		workflowId: string;
	}
	export interface WorkflowsWorkflowsFormProperties {

		/**
		 * Required
		 * Max length: 4096
		 */
		createdBy: FormControl<string | null | undefined>,

		/** Required */
		createdTime: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		numberOfRunningExecutions: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Max length: 4096
		 */
		updatedBy: FormControl<string | null | undefined>,

		/** Required */
		updatedTime: FormControl<string | null | undefined>,

		/** Required */
		workflowId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowsWorkflowsFormGroup() {
		return new FormGroup<WorkflowsWorkflowsFormProperties>({
			createdBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			createdTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			numberOfRunningExecutions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			updatedBy: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.maxLength(4096)]),
			updatedTime: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^[0-9]{4}-?[0-9]{2}-?[0-9]{2}( |T)?[0-9]{2}:?[0-9]{2}:?[0-9]{2}(.[0-9]{1,6})?(Z|[+][0-9]{2}(:|)[0-9]{2})$')]),
			workflowId: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.pattern('^las:workflow:[a-f0-9]{32}$')]),
		});

	}

	export interface WorkflowsWorkflowsCompletedConfig {
		environment?: {[id: string]: string };
		environmentSecrets?: Array<string>;

		/** Required */
		imageUrl: string;
		secretId?: string | null;
	}
	export interface WorkflowsWorkflowsCompletedConfigFormProperties {
		environment: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		imageUrl: FormControl<string | null | undefined>,
		secretId: FormControl<string | null | undefined>,
	}
	export function CreateWorkflowsWorkflowsCompletedConfigFormGroup() {
		return new FormGroup<WorkflowsWorkflowsCompletedConfigFormProperties>({
			environment: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			imageUrl: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			secretId: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^las:secret:[a-f0-9]{32}$')]),
		});

	}

	export interface WorkflowsWorkflowsErrorConfig {
		email?: string | null;
		manualRetry?: boolean | null;
	}
	export interface WorkflowsWorkflowsErrorConfigFormProperties {
		email: FormControl<string | null | undefined>,
		manualRetry: FormControl<boolean | null | undefined>,
	}
	export function CreateWorkflowsWorkflowsErrorConfigFormGroup() {
		return new FormGroup<WorkflowsWorkflowsErrorConfigFormProperties>({
			email: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^[A-Za-z0-9][-+._A-Za-z0-9]*@([-_.A-Za-z0-9]+\.)+[A-Za-z]{2,}$')]),
			manualRetry: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface GroundTruthList {
	}
	export interface GroundTruthListFormProperties {
	}
	export function CreateGroundTruthListFormGroup() {
		return new FormGroup<GroundTruthListFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get appClients
		 * @return {AppClients} 200 response
		 */
		AppClientsGetByNextTokenAndMaxResults(nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<AppClients> {
			return this.http.get<AppClients>(this.baseUri + 'appClients?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post appClients
		 * @return {AppClient} 200 response
		 */
		AppClientsPost(requestBody: PostAppClients, headersHandler?: () => HttpHeaders): Observable<AppClient> {
			return this.http.post<AppClient>(this.baseUri + 'appClients', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete appClients/{appClientId}
		 * @return {AppClient} 200 response
		 */
		AppClients_appClientIdDelete(appClientId: string, headersHandler?: () => HttpHeaders): Observable<AppClient> {
			return this.http.delete<AppClient>(this.baseUri + 'appClients/' + (appClientId == null ? '' : encodeURIComponent(appClientId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch appClients/{appClientId}
		 * @return {AppClient} 200 response
		 */
		AppClients_appClientIdPatch(appClientId: string, requestBody: PatchAppClientId, headersHandler?: () => HttpHeaders): Observable<AppClient> {
			return this.http.patch<AppClient>(this.baseUri + 'appClients/' + (appClientId == null ? '' : encodeURIComponent(appClientId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get assets
		 * @return {Assets} 200 response
		 */
		AssetsGetByNextTokenAndMaxResults(nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Assets> {
			return this.http.get<Assets>(this.baseUri + 'assets?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post assets
		 * @return {Asset} 200 response
		 */
		AssetsPost(requestBody: PostAssets, headersHandler?: () => HttpHeaders): Observable<Asset> {
			return this.http.post<Asset>(this.baseUri + 'assets', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete assets/{assetId}
		 * @return {Asset} 200 response
		 */
		Assets_assetIdDelete(assetId: string, headersHandler?: () => HttpHeaders): Observable<Asset> {
			return this.http.delete<Asset>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get assets/{assetId}
		 * @return {Asset} 200 response
		 */
		Assets_assetIdGet(assetId: string, headersHandler?: () => HttpHeaders): Observable<Asset> {
			return this.http.get<Asset>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch assets/{assetId}
		 * @return {Asset} 200 response
		 */
		Assets_assetIdPatch(assetId: string, requestBody: PatchAssetId, headersHandler?: () => HttpHeaders): Observable<Asset> {
			return this.http.patch<Asset>(this.baseUri + 'assets/' + (assetId == null ? '' : encodeURIComponent(assetId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get datasets
		 * @return {Datasets} 200 response
		 */
		DatasetsGetByNextTokenAndMaxResults(nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Datasets> {
			return this.http.get<Datasets>(this.baseUri + 'datasets?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post datasets
		 * @return {Dataset} 200 response
		 */
		DatasetsPost(requestBody: PostDatasets, headersHandler?: () => HttpHeaders): Observable<Dataset> {
			return this.http.post<Dataset>(this.baseUri + 'datasets', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete datasets/{datasetId}
		 * @return {Dataset} 200 response
		 */
		Datasets_datasetIdDelete(datasetId: string, headersHandler?: () => HttpHeaders): Observable<Dataset> {
			return this.http.delete<Dataset>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get datasets/{datasetId}
		 * @return {Dataset} 200 response
		 */
		Datasets_datasetIdGet(datasetId: string, headersHandler?: () => HttpHeaders): Observable<Dataset> {
			return this.http.get<Dataset>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch datasets/{datasetId}
		 * @return {Dataset} 200 response
		 */
		Datasets_datasetIdPatch(datasetId: string, requestBody: PatchDatasetId, headersHandler?: () => HttpHeaders): Observable<Dataset> {
			return this.http.patch<Dataset>(this.baseUri + 'datasets/' + (datasetId == null ? '' : encodeURIComponent(datasetId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get deploymentEnvironments
		 * @return {DeploymentEnvironments} 200 response
		 */
		DeploymentEnvironmentsGetByOwnerAndNextTokenAndMaxResults(owner: string | null | undefined, nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<DeploymentEnvironments> {
			return this.http.get<DeploymentEnvironments>(this.baseUri + 'deploymentEnvironments?owner=' + (owner == null ? '' : encodeURIComponent(owner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get deploymentEnvironments/{deploymentEnvironmentId}
		 * @return {DeploymentEnvironment} 200 response
		 */
		DeploymentEnvironments_deploymentEnvironmentIdGet(deploymentEnvironmentId: string, headersHandler?: () => HttpHeaders): Observable<DeploymentEnvironment> {
			return this.http.get<DeploymentEnvironment>(this.baseUri + 'deploymentEnvironments/' + (deploymentEnvironmentId == null ? '' : encodeURIComponent(deploymentEnvironmentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete documents
		 * @return {Documents} 200 response
		 */
		DocumentsDeleteByConsentIdAndDatasetIdAndNextTokenAndMaxResults(consentId: string | null | undefined, datasetId: string | null | undefined, nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Documents> {
			return this.http.delete<Documents>(this.baseUri + 'documents?consentId=' + (consentId == null ? '' : encodeURIComponent(consentId)) + '&datasetId=' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get documents
		 * @return {Documents} 200 response
		 */
		DocumentsGetByDatasetIdAndNextTokenAndOrderAndDocumentIdAndConsentIdAndMaxResultsAndSortBy(datasetId: string | null | undefined, nextToken: string | null | undefined, order: string | null | undefined, documentId: string | null | undefined, consentId: string | null | undefined, maxResults: string | null | undefined, sortBy: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Documents> {
			return this.http.get<Documents>(this.baseUri + 'documents?datasetId=' + (datasetId == null ? '' : encodeURIComponent(datasetId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&documentId=' + (documentId == null ? '' : encodeURIComponent(documentId)) + '&consentId=' + (consentId == null ? '' : encodeURIComponent(consentId)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post documents
		 * @return {Document} 200 response
		 */
		DocumentsPost(requestBody: PostDocuments, headersHandler?: () => HttpHeaders): Observable<Document> {
			return this.http.post<Document>(this.baseUri + 'documents', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete documents/{documentId}
		 * @return {Document} 200 response
		 */
		Documents_documentIdDelete(documentId: string, headersHandler?: () => HttpHeaders): Observable<Document> {
			return this.http.delete<Document>(this.baseUri + 'documents/' + (documentId == null ? '' : encodeURIComponent(documentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get documents/{documentId}
		 * @return {Document} 200 response
		 */
		Documents_documentIdGet(documentId: string, headersHandler?: () => HttpHeaders): Observable<Document> {
			return this.http.get<Document>(this.baseUri + 'documents/' + (documentId == null ? '' : encodeURIComponent(documentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch documents/{documentId}
		 * @return {Document} 200 response
		 */
		Documents_documentIdPatch(documentId: string, requestBody: PatchDocumentId, headersHandler?: () => HttpHeaders): Observable<Document> {
			return this.http.patch<Document>(this.baseUri + 'documents/' + (documentId == null ? '' : encodeURIComponent(documentId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get logs
		 * @return {Logs} 200 response
		 */
		LogsGetByWorkflowIdAndNextTokenAndOrderAndTransitionExecutionIdAndTransitionIdAndMaxResultsAndWorkflowExecutionId(workflowId: string | null | undefined, nextToken: string | null | undefined, order: string | null | undefined, transitionExecutionId: string | null | undefined, transitionId: string | null | undefined, maxResults: string | null | undefined, workflowExecutionId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Logs> {
			return this.http.get<Logs>(this.baseUri + 'logs?workflowId=' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&transitionExecutionId=' + (transitionExecutionId == null ? '' : encodeURIComponent(transitionExecutionId)) + '&transitionId=' + (transitionId == null ? '' : encodeURIComponent(transitionId)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&workflowExecutionId=' + (workflowExecutionId == null ? '' : encodeURIComponent(workflowExecutionId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get logs/{logId}
		 * @return {Log} 200 response
		 */
		Logs_logIdGet(logId: string, headersHandler?: () => HttpHeaders): Observable<Log> {
			return this.http.get<Log>(this.baseUri + 'logs/' + (logId == null ? '' : encodeURIComponent(logId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get models
		 * @return {Models} 200 response
		 */
		ModelsGetByOwnerAndNextTokenAndMaxResults(owner: string | null | undefined, nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Models> {
			return this.http.get<Models>(this.baseUri + 'models?owner=' + (owner == null ? '' : encodeURIComponent(owner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post models
		 * @return {Model} 200 response
		 */
		ModelsPost(requestBody: PostModels, headersHandler?: () => HttpHeaders): Observable<Model> {
			return this.http.post<Model>(this.baseUri + 'models', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete models/{modelId}
		 * @return {Model} 200 response
		 */
		Models_modelIdDelete(modelId: string, headersHandler?: () => HttpHeaders): Observable<Model> {
			return this.http.delete<Model>(this.baseUri + 'models/' + (modelId == null ? '' : encodeURIComponent(modelId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get models/{modelId}
		 * @return {Model} 200 response
		 */
		Models_modelIdGet(modelId: string, headersHandler?: () => HttpHeaders): Observable<Model> {
			return this.http.get<Model>(this.baseUri + 'models/' + (modelId == null ? '' : encodeURIComponent(modelId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch models/{modelId}
		 * @return {Model} 200 response
		 */
		Models_modelIdPatch(modelId: string, requestBody: PatchModelId, headersHandler?: () => HttpHeaders): Observable<Model> {
			return this.http.patch<Model>(this.baseUri + 'models/' + (modelId == null ? '' : encodeURIComponent(modelId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get models/{modelId}/dataBundles
		 * @return {DataBundles} 200 response
		 */
		Models_modelIdDataBundlesGetByStatusAndNextTokenAndMaxResults(modelId: string, status: string | null | undefined, nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<DataBundles> {
			return this.http.get<DataBundles>(this.baseUri + 'models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/dataBundles&status=' + (status == null ? '' : encodeURIComponent(status)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post models/{modelId}/dataBundles
		 * @return {DataBundle} 200 response
		 */
		Models_modelIdDataBundlesPost(modelId: string, requestBody: PostDataBundles, headersHandler?: () => HttpHeaders): Observable<DataBundle> {
			return this.http.post<DataBundle>(this.baseUri + 'models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/dataBundles', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete models/{modelId}/dataBundles/{dataBundleId}
		 * @return {DataBundle} 200 response
		 */
		Models_modelIdDataBundles_dataBundleIdDelete(dataBundleId: string, modelId: string, headersHandler?: () => HttpHeaders): Observable<DataBundle> {
			return this.http.delete<DataBundle>(this.baseUri + 'models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/dataBundles/' + (dataBundleId == null ? '' : encodeURIComponent(dataBundleId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch models/{modelId}/dataBundles/{dataBundleId}
		 * @return {DataBundle} 200 response
		 */
		Models_modelIdDataBundles_dataBundleIdPatch(dataBundleId: string, modelId: string, requestBody: PatchDataBundleId, headersHandler?: () => HttpHeaders): Observable<DataBundle> {
			return this.http.patch<DataBundle>(this.baseUri + 'models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/dataBundles/' + (dataBundleId == null ? '' : encodeURIComponent(dataBundleId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get models/{modelId}/trainings
		 * @return {Trainings} 200 response
		 */
		Models_modelIdTrainingsGetByStatusAndNextTokenAndMaxResults(modelId: string, status: string | null | undefined, nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Trainings> {
			return this.http.get<Trainings>(this.baseUri + 'models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/trainings&status=' + (status == null ? '' : encodeURIComponent(status)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post models/{modelId}/trainings
		 * @return {Training} 200 response
		 */
		Models_modelIdTrainingsPost(modelId: string, requestBody: PostTrainings, headersHandler?: () => HttpHeaders): Observable<Training> {
			return this.http.post<Training>(this.baseUri + 'models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/trainings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Patch models/{modelId}/trainings/{trainingId}
		 * @return {Training} 200 response
		 */
		Models_modelIdTrainings_trainingIdPatch(modelId: string, trainingId: string, requestBody: PatchTrainingId, headersHandler?: () => HttpHeaders): Observable<Training> {
			return this.http.patch<Training>(this.baseUri + 'models/' + (modelId == null ? '' : encodeURIComponent(modelId)) + '/trainings/' + (trainingId == null ? '' : encodeURIComponent(trainingId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get organizations
		 * @return {Organizations} 200 response
		 */
		OrganizationsGetByNextTokenAndMaxResults(nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Organizations> {
			return this.http.get<Organizations>(this.baseUri + 'organizations?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post organizations
		 * @return {Organization} 200 response
		 */
		OrganizationsPost(requestBody: PostOrganizations, headersHandler?: () => HttpHeaders): Observable<Organization> {
			return this.http.post<Organization>(this.baseUri + 'organizations', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get organizations/{organizationId}
		 * @return {Organization} 200 response
		 */
		Organizations_organizationIdGet(organizationId: string, headersHandler?: () => HttpHeaders): Observable<Organization> {
			return this.http.get<Organization>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch organizations/{organizationId}
		 * @return {Organization} 200 response
		 */
		Organizations_organizationIdPatch(organizationId: string, requestBody: PatchOrganizationId, headersHandler?: () => HttpHeaders): Observable<Organization> {
			return this.http.patch<Organization>(this.baseUri + 'organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get paymentMethods
		 * @return {PaymentMethods} 200 response
		 */
		PaymentMethodsGetByNextTokenAndMaxResults(nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<PaymentMethods> {
			return this.http.get<PaymentMethods>(this.baseUri + 'paymentMethods?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post paymentMethods
		 * @return {PaymentMethod} 200 response
		 */
		PaymentMethodsPost(requestBody: PostPaymentMethods, headersHandler?: () => HttpHeaders): Observable<PaymentMethod> {
			return this.http.post<PaymentMethod>(this.baseUri + 'paymentMethods', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete paymentMethods/{paymentMethodId}
		 * @return {PaymentMethod} 200 response
		 */
		PaymentMethods_paymentMethodIdDelete(paymentMethodId: string, headersHandler?: () => HttpHeaders): Observable<PaymentMethod> {
			return this.http.delete<PaymentMethod>(this.baseUri + 'paymentMethods/' + (paymentMethodId == null ? '' : encodeURIComponent(paymentMethodId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get paymentMethods/{paymentMethodId}
		 * @return {PaymentMethod} 200 response
		 */
		PaymentMethods_paymentMethodIdGet(paymentMethodId: string, headersHandler?: () => HttpHeaders): Observable<PaymentMethod> {
			return this.http.get<PaymentMethod>(this.baseUri + 'paymentMethods/' + (paymentMethodId == null ? '' : encodeURIComponent(paymentMethodId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch paymentMethods/{paymentMethodId}
		 * @return {PaymentMethod} 200 response
		 */
		PaymentMethods_paymentMethodIdPatch(paymentMethodId: string, requestBody: PatchPaymentMethodId, headersHandler?: () => HttpHeaders): Observable<PaymentMethod> {
			return this.http.patch<PaymentMethod>(this.baseUri + 'paymentMethods/' + (paymentMethodId == null ? '' : encodeURIComponent(paymentMethodId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get plans
		 * @return {Plans} 200 response
		 */
		PlansGetByOwnerAndNextTokenAndMaxResults(owner: string | null | undefined, nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Plans> {
			return this.http.get<Plans>(this.baseUri + 'plans?owner=' + (owner == null ? '' : encodeURIComponent(owner)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get plans/{planId}
		 * @return {Plan} 200 response
		 */
		Plans_planIdGet(planId: string, headersHandler?: () => HttpHeaders): Observable<Plan> {
			return this.http.get<Plan>(this.baseUri + 'plans/' + (planId == null ? '' : encodeURIComponent(planId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get predictions
		 * @return {Predictions} 200 response
		 */
		PredictionsGetByNextTokenAndMaxResultsAndSortByAndOrder(nextToken: string | null | undefined, maxResults: string | null | undefined, sortBy: string | null | undefined, order: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Predictions> {
			return this.http.get<Predictions>(this.baseUri + 'predictions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)) + '&order=' + (order == null ? '' : encodeURIComponent(order)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post predictions
		 * @return {Prediction} 200 response
		 */
		PredictionsPost(requestBody: PostPredictions, headersHandler?: () => HttpHeaders): Observable<Prediction> {
			return this.http.post<Prediction>(this.baseUri + 'predictions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get profiles/{profileId}
		 * @return {Profile} 200 response
		 */
		Profiles_profileIdGet(profileId: string, headersHandler?: () => HttpHeaders): Observable<Profile> {
			return this.http.get<Profile>(this.baseUri + 'profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch profiles/{profileId}
		 * @return {Profile} 200 response
		 */
		Profiles_profileIdPatch(profileId: string, headersHandler?: () => HttpHeaders): Observable<Profile> {
			return this.http.patch<Profile>(this.baseUri + 'profiles/' + (profileId == null ? '' : encodeURIComponent(profileId)), null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get secrets
		 * @return {Secrets} 200 response
		 */
		SecretsGetByNextTokenAndMaxResults(nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Secrets> {
			return this.http.get<Secrets>(this.baseUri + 'secrets?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post secrets
		 * @return {Secret} 200 response
		 */
		SecretsPost(requestBody: PostSecrets, headersHandler?: () => HttpHeaders): Observable<Secret> {
			return this.http.post<Secret>(this.baseUri + 'secrets', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete secrets/{secretId}
		 * @return {Secret} 200 response
		 */
		Secrets_secretIdDelete(secretId: string, headersHandler?: () => HttpHeaders): Observable<Secret> {
			return this.http.delete<Secret>(this.baseUri + 'secrets/' + (secretId == null ? '' : encodeURIComponent(secretId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch secrets/{secretId}
		 * @return {Secret} 200 response
		 */
		Secrets_secretIdPatch(secretId: string, requestBody: PatchSecretId, headersHandler?: () => HttpHeaders): Observable<Secret> {
			return this.http.patch<Secret>(this.baseUri + 'secrets/' + (secretId == null ? '' : encodeURIComponent(secretId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get transitions
		 * @return {Transitions} 200 response
		 */
		TransitionsGetByTransitionTypeAndNextTokenAndMaxResults(transitionType: string | null | undefined, nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Transitions> {
			return this.http.get<Transitions>(this.baseUri + 'transitions?transitionType=' + (transitionType == null ? '' : encodeURIComponent(transitionType)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post transitions
		 * @return {Transition} 200 response
		 */
		TransitionsPost(requestBody: PostTransitions, headersHandler?: () => HttpHeaders): Observable<Transition> {
			return this.http.post<Transition>(this.baseUri + 'transitions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete transitions/{transitionId}
		 * @return {Transition} 200 response
		 */
		Transitions_transitionIdDelete(transitionId: string, headersHandler?: () => HttpHeaders): Observable<Transition> {
			return this.http.delete<Transition>(this.baseUri + 'transitions/' + (transitionId == null ? '' : encodeURIComponent(transitionId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get transitions/{transitionId}
		 * @return {Transition} 200 response
		 */
		Transitions_transitionIdGet(transitionId: string, headersHandler?: () => HttpHeaders): Observable<Transition> {
			return this.http.get<Transition>(this.baseUri + 'transitions/' + (transitionId == null ? '' : encodeURIComponent(transitionId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch transitions/{transitionId}
		 * @return {Transition} 200 response
		 */
		Transitions_transitionIdPatch(transitionId: string, requestBody: PatchTransitionId, headersHandler?: () => HttpHeaders): Observable<Transition> {
			return this.http.patch<Transition>(this.baseUri + 'transitions/' + (transitionId == null ? '' : encodeURIComponent(transitionId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get transitions/{transitionId}/executions
		 * @return {TransitionExecutions} 200 response
		 */
		Transitions_transitionIdExecutionsGetByNextTokenAndOrderAndExecutionIdAndStatusAndMaxResultsAndSortBy(nextToken: string | null | undefined, order: string | null | undefined, executionId: string | null | undefined, transitionId: string, status: string | null | undefined, maxResults: string | null | undefined, sortBy: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<TransitionExecutions> {
			return this.http.get<TransitionExecutions>(this.baseUri + 'transitions/' + (transitionId == null ? '' : encodeURIComponent(transitionId)) + '/executions?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&executionId=' + (executionId == null ? '' : encodeURIComponent(executionId)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post transitions/{transitionId}/executions
		 * @return {TransitionExecution} 200 response
		 */
		Transitions_transitionIdExecutionsPost(transitionId: string, requestBody: PostTransitionExecution, headersHandler?: () => HttpHeaders): Observable<TransitionExecution> {
			return this.http.post<TransitionExecution>(this.baseUri + 'transitions/' + (transitionId == null ? '' : encodeURIComponent(transitionId)) + '/executions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get transitions/{transitionId}/executions/{executionId}
		 * @return {TransitionExecution} 200 response
		 */
		Transitions_transitionIdExecutions_executionIdGet(transitionId: string, executionId: string, headersHandler?: () => HttpHeaders): Observable<TransitionExecution> {
			return this.http.get<TransitionExecution>(this.baseUri + 'transitions/' + (transitionId == null ? '' : encodeURIComponent(transitionId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch transitions/{transitionId}/executions/{executionId}
		 * @return {TransitionExecution} 200 response
		 */
		Transitions_transitionIdExecutions_executionIdPatch(transitionId: string, executionId: string, requestBody: PatchTransistionExecutionId, headersHandler?: () => HttpHeaders): Observable<TransitionExecution> {
			return this.http.patch<TransitionExecution>(this.baseUri + 'transitions/' + (transitionId == null ? '' : encodeURIComponent(transitionId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post transitions/{transitionId}/executions/{executionId}/heartbeats
		 * @return {void} 
		 */
		Transitions_transitionIdExecutions_executionIdHeartbeatsPost(transitionId: string, executionId: string, requestBody: PostHeartbeats, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'transitions/' + (transitionId == null ? '' : encodeURIComponent(transitionId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)) + '/heartbeats', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get users
		 * @return {Users} 200 response
		 */
		UsersGetByNextTokenAndMaxResults(nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Users> {
			return this.http.get<Users>(this.baseUri + 'users?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post users
		 * @return {User} 200 response
		 */
		UsersPost(requestBody: PostUsers, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.post<User>(this.baseUri + 'users', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete users/{userId}
		 * @return {User} 200 response
		 */
		Users_userIdDelete(userId: string, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.delete<User>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get users/{userId}
		 * @return {User} 200 response
		 */
		Users_userIdGet(userId: string, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.get<User>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch users/{userId}
		 * @return {User} 200 response
		 */
		Users_userIdPatch(userId: string, requestBody: PatchUserId, headersHandler?: () => HttpHeaders): Observable<User> {
			return this.http.patch<User>(this.baseUri + 'users/' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get workflows
		 * @return {Workflows} 200 response
		 */
		WorkflowsGetByNextTokenAndMaxResults(nextToken: string | null | undefined, maxResults: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Workflows> {
			return this.http.get<Workflows>(this.baseUri + 'workflows?nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post workflows
		 * @return {Workflow} 200 response
		 */
		WorkflowsPost(requestBody: PostWorkflows, headersHandler?: () => HttpHeaders): Observable<Workflow> {
			return this.http.post<Workflow>(this.baseUri + 'workflows', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete workflows/{workflowId}
		 * @return {Workflow} 200 response
		 */
		Workflows_workflowIdDelete(workflowId: string, headersHandler?: () => HttpHeaders): Observable<Workflow> {
			return this.http.delete<Workflow>(this.baseUri + 'workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get workflows/{workflowId}
		 * @return {Workflow} 200 response
		 */
		Workflows_workflowIdGet(workflowId: string, headersHandler?: () => HttpHeaders): Observable<Workflow> {
			return this.http.get<Workflow>(this.baseUri + 'workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch workflows/{workflowId}
		 * @return {Workflow} 200 response
		 */
		Workflows_workflowIdPatch(workflowId: string, requestBody: PatchWorkflowId, headersHandler?: () => HttpHeaders): Observable<Workflow> {
			return this.http.patch<Workflow>(this.baseUri + 'workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get workflows/{workflowId}/executions
		 * @return {WorkflowExecutions} 200 response
		 */
		Workflows_workflowIdExecutionsGetByFromStartTimeAndToStartTimeAndNextTokenAndOrderAndStatusAndMaxResultsAndSortBy(fromStartTime: string | null | undefined, toStartTime: string | null | undefined, workflowId: string, nextToken: string | null | undefined, order: string | null | undefined, status: string | null | undefined, maxResults: string | null | undefined, sortBy: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<WorkflowExecutions> {
			return this.http.get<WorkflowExecutions>(this.baseUri + 'workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '/executions?fromStartTime=' + (fromStartTime == null ? '' : encodeURIComponent(fromStartTime)) + '&toStartTime=' + (toStartTime == null ? '' : encodeURIComponent(toStartTime)) + '&nextToken=' + (nextToken == null ? '' : encodeURIComponent(nextToken)) + '&order=' + (order == null ? '' : encodeURIComponent(order)) + '&status=' + (status == null ? '' : encodeURIComponent(status)) + '&maxResults=' + (maxResults == null ? '' : encodeURIComponent(maxResults)) + '&sortBy=' + (sortBy == null ? '' : encodeURIComponent(sortBy)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post workflows/{workflowId}/executions
		 * @return {WorkflowExecution} 200 response
		 */
		Workflows_workflowIdExecutionsPost(workflowId: string, requestBody: PostWorkflowExecutions, headersHandler?: () => HttpHeaders): Observable<WorkflowExecution> {
			return this.http.post<WorkflowExecution>(this.baseUri + 'workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '/executions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete workflows/{workflowId}/executions/{executionId}
		 * @return {WorkflowExecution} 200 response
		 */
		Workflows_workflowIdExecutions_executionIdDelete(executionId: string, workflowId: string, headersHandler?: () => HttpHeaders): Observable<WorkflowExecution> {
			return this.http.delete<WorkflowExecution>(this.baseUri + 'workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get workflows/{workflowId}/executions/{executionId}
		 * @return {WorkflowExecution} 200 response
		 */
		Workflows_workflowIdExecutions_executionIdGet(executionId: string, workflowId: string, headersHandler?: () => HttpHeaders): Observable<WorkflowExecution> {
			return this.http.get<WorkflowExecution>(this.baseUri + 'workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch workflows/{workflowId}/executions/{executionId}
		 * @return {WorkflowExecution} 200 response
		 */
		Workflows_workflowIdExecutions_executionIdPatch(executionId: string, workflowId: string, requestBody: PatchWorkflowExecutionId, headersHandler?: () => HttpHeaders): Observable<WorkflowExecution> {
			return this.http.patch<WorkflowExecution>(this.baseUri + 'workflows/' + (workflowId == null ? '' : encodeURIComponent(workflowId)) + '/executions/' + (executionId == null ? '' : encodeURIComponent(executionId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}
	}

}

