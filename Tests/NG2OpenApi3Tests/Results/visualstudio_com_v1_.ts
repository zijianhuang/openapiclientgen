import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AddForwardedPortSettings {
		privacy?: PrivacyEnum;
		tunnelType?: TunnelType;
	}
	export interface AddForwardedPortSettingsFormProperties {
		privacy: FormControl<PrivacyEnum | null | undefined>,
		tunnelType: FormControl<TunnelType | null | undefined>,
	}
	export function CreateAddForwardedPortSettingsFormGroup() {
		return new FormGroup<AddForwardedPortSettingsFormProperties>({
			privacy: new FormControl<PrivacyEnum | null | undefined>(undefined),
			tunnelType: new FormControl<TunnelType | null | undefined>(undefined),
		});

	}

	export enum PrivacyEnum { '0 (Private)' = '0 (Private)', '1 (Public)' = '1 (Public)', '2 (Org)' = '2 (Org)' }

	export enum TunnelType { '0 (Basis)' = '0 (Basis)', '1 (Liveshare)' = '1 (Liveshare)' }

	export interface AgentResponse {
		assetUri?: string | null;
		family?: string | null;
		name?: string | null;
	}
	export interface AgentResponseFormProperties {
		assetUri: FormControl<string | null | undefined>,
		family: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
	}
	export function CreateAgentResponseFormGroup() {
		return new FormGroup<AgentResponseFormProperties>({
			assetUri: new FormControl<string | null | undefined>(undefined),
			family: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AvailableSettingsResult {
		sku?: Array<string>;
	}
	export interface AvailableSettingsResultFormProperties {
	}
	export function CreateAvailableSettingsResultFormGroup() {
		return new FormGroup<AvailableSettingsResultFormProperties>({
		});

	}

	export enum AzureLocation { '101 (EastAsia)' = '101 (EastAsia)', '102 (SouthEastAsia)' = '102 (SouthEastAsia)', '201 (AustraliaCentral)' = '201 (AustraliaCentral)', '202 (AustraliaCentral2)' = '202 (AustraliaCentral2)', '203 (AustraliaEast)' = '203 (AustraliaEast)', '205 (AustraliaSouthEast)' = '205 (AustraliaSouthEast)', '301 (BrazilSouth)' = '301 (BrazilSouth)', '401 (CanadaCentral)' = '401 (CanadaCentral)', '402 (CanadaEast)' = '402 (CanadaEast)', '501 (NorthEurope)' = '501 (NorthEurope)', '502 (WestEurope)' = '502 (WestEurope)', '601 (FranceCentral)' = '601 (FranceCentral)', '602 (FranceSouth)' = '602 (FranceSouth)', '701 (CentralIndia)' = '701 (CentralIndia)', '702 (SouthIndia)' = '702 (SouthIndia)', '703 (WestIndia)' = '703 (WestIndia)', '801 (JapanEast)' = '801 (JapanEast)', '802 (JapanWest)' = '802 (JapanWest)', '901 (KoreaCentral)' = '901 (KoreaCentral)', '902 (KoreaSouth)' = '902 (KoreaSouth)', '1001 (SouthAfricaNorth)' = '1001 (SouthAfricaNorth)', '1002 (SouthAfricaWest)' = '1002 (SouthAfricaWest)', '1201 (UaeCentral)' = '1201 (UaeCentral)', '1202 (UaeNorth)' = '1202 (UaeNorth)', '1401 (UkSouth)' = '1401 (UkSouth)', '1402 (UkWest)' = '1402 (UkWest)', '1501 (CentralUs)' = '1501 (CentralUs)', '1502 (EastUs)' = '1502 (EastUs)', '1503 (EastUs2)' = '1503 (EastUs2)', '1504 (NorthCentralUs)' = '1504 (NorthCentralUs)', '1505 (SouthCentralUs)' = '1505 (SouthCentralUs)', '1506 (WestCentralUs)' = '1506 (WestCentralUs)', '1507 (WestUs)' = '1507 (WestUs)', '1508 (WestUs2)' = '1508 (WestUs2)', '1509 (WestUs3)' = '1509 (WestUs3)', '1601 (CentralUsEuap)' = '1601 (CentralUsEuap)', '1602 (EastUs2Euap)' = '1602 (EastUs2Euap)', '1701 (SwitzerlandNorth)' = '1701 (SwitzerlandNorth)', '1702 (SwitzerlandWest)' = '1702 (SwitzerlandWest)', '1801 (GermanyNorth)' = '1801 (GermanyNorth)', '1802 (GermanyWestCentral)' = '1802 (GermanyWestCentral)', '1901 (NorwayWest)' = '1901 (NorwayWest)', '1902 (NorwayEast)' = '1902 (NorwayEast)' }

	export interface BillSummary {
		billGenerationTime?: Date | null;
		environmentId?: string | null;
		id?: string | null;
		location?: AzureLocation;
		partitionKey?: string | null;
		periodEnd?: Date | null;
		periodStart?: Date | null;
		plan?: VsoPlanInfo;
		usage?: {[id: string]: number };
		usageDetail?: Array<EnvironmentUsage>;
	}
	export interface BillSummaryFormProperties {
		billGenerationTime: FormControl<Date | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		location: FormControl<AzureLocation | null | undefined>,
		partitionKey: FormControl<string | null | undefined>,
		periodEnd: FormControl<Date | null | undefined>,
		periodStart: FormControl<Date | null | undefined>,
		usage: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateBillSummaryFormGroup() {
		return new FormGroup<BillSummaryFormProperties>({
			billGenerationTime: new FormControl<Date | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<AzureLocation | null | undefined>(undefined),
			partitionKey: new FormControl<string | null | undefined>(undefined),
			periodEnd: new FormControl<Date | null | undefined>(undefined),
			periodStart: new FormControl<Date | null | undefined>(undefined),
			usage: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}

	export interface VsoPlanInfo {
		location?: AzureLocation;
		name?: string | null;
		providerNamespace?: string | null;
		resourceGroup?: string | null;
		resourceId?: string | null;
		subscription?: string | null;
	}
	export interface VsoPlanInfoFormProperties {
		location: FormControl<AzureLocation | null | undefined>,
		name: FormControl<string | null | undefined>,
		providerNamespace: FormControl<string | null | undefined>,
		resourceGroup: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		subscription: FormControl<string | null | undefined>,
	}
	export function CreateVsoPlanInfoFormGroup() {
		return new FormGroup<VsoPlanInfoFormProperties>({
			location: new FormControl<AzureLocation | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			providerNamespace: new FormControl<string | null | undefined>(undefined),
			resourceGroup: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnvironmentUsage {
		endState?: CloudEnvironmentState;
		id?: string | null;
		resourceUsage?: ResourceUsageDetail;
		sku?: Sku;
	}
	export interface EnvironmentUsageFormProperties {
		endState: FormControl<CloudEnvironmentState | null | undefined>,
		id: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentUsageFormGroup() {
		return new FormGroup<EnvironmentUsageFormProperties>({
			endState: new FormControl<CloudEnvironmentState | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CloudEnvironmentState { '0 (None)' = '0 (None)', '1 (Created)' = '1 (Created)', '2 (Queued)' = '2 (Queued)', '3 (Provisioning)' = '3 (Provisioning)', '4 (Available)' = '4 (Available)', '5 (Awaiting)' = '5 (Awaiting)', '6 (Unavailable)' = '6 (Unavailable)', '7 (Deleted)' = '7 (Deleted)', '8 (Moved)' = '8 (Moved)', '9 (Shutdown)' = '9 (Shutdown)', '10 (Archived)' = '10 (Archived)', '11 (Starting)' = '11 (Starting)', '12 (ShuttingDown)' = '12 (ShuttingDown)', '13 (Failed)' = '13 (Failed)', '14 (Exporting)' = '14 (Exporting)', '15 (Updating)' = '15 (Updating)', '16 (Rebuilding)' = '16 (Rebuilding)' }

	export interface ResourceUsageDetail {
		compute?: Array<ComputeUsageDetail>;
		storage?: Array<StorageUsageDetail>;
	}
	export interface ResourceUsageDetailFormProperties {
	}
	export function CreateResourceUsageDetailFormGroup() {
		return new FormGroup<ResourceUsageDetailFormProperties>({
		});

	}

	export interface ComputeUsageDetail {
		sku?: string | null;
		usage?: number | null;
	}
	export interface ComputeUsageDetailFormProperties {
		sku: FormControl<string | null | undefined>,
		usage: FormControl<number | null | undefined>,
	}
	export function CreateComputeUsageDetailFormGroup() {
		return new FormGroup<ComputeUsageDetailFormProperties>({
			sku: new FormControl<string | null | undefined>(undefined),
			usage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface StorageUsageDetail {
		size?: number | null;
		sizeInKB?: number | null;
		sku?: string | null;
		usage?: number | null;
	}
	export interface StorageUsageDetailFormProperties {
		size: FormControl<number | null | undefined>,
		sizeInKB: FormControl<number | null | undefined>,
		sku: FormControl<string | null | undefined>,
		usage: FormControl<number | null | undefined>,
	}
	export function CreateStorageUsageDetailFormGroup() {
		return new FormGroup<StorageUsageDetailFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
			sizeInKB: new FormControl<number | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
			usage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface Sku {
		name?: string | null;
		tier?: string | null;
	}
	export interface SkuFormProperties {
		name: FormControl<string | null | undefined>,
		tier: FormControl<string | null | undefined>,
	}
	export function CreateSkuFormGroup() {
		return new FormGroup<SkuFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface BillableOwnerBody {
		id?: string | null;
		login?: string | null;
		type?: BillableOwnerType;
	}
	export interface BillableOwnerBodyFormProperties {
		id: FormControl<string | null | undefined>,
		login: FormControl<string | null | undefined>,
		type: FormControl<BillableOwnerType | null | undefined>,
	}
	export function CreateBillableOwnerBodyFormGroup() {
		return new FormGroup<BillableOwnerBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			login: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BillableOwnerType | null | undefined>(undefined),
		});

	}

	export enum BillableOwnerType { '0 (User)' = '0 (User)', '1 (Organization)' = '1 (Organization)' }

	export interface BillingProperties {
		billingType?: string | null;
		channelType?: string | null;
		paymentType?: string | null;
		tier?: string | null;
		workloadType?: string | null;
	}
	export interface BillingPropertiesFormProperties {
		billingType: FormControl<string | null | undefined>,
		channelType: FormControl<string | null | undefined>,
		paymentType: FormControl<string | null | undefined>,
		tier: FormControl<string | null | undefined>,
		workloadType: FormControl<string | null | undefined>,
	}
	export function CreateBillingPropertiesFormGroup() {
		return new FormGroup<BillingPropertiesFormProperties>({
			billingType: new FormControl<string | null | undefined>(undefined),
			channelType: new FormControl<string | null | undefined>(undefined),
			paymentType: new FormControl<string | null | undefined>(undefined),
			tier: new FormControl<string | null | undefined>(undefined),
			workloadType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ChangeResourceDeletionRequestBody {
		comment?: string | null;
		enabled?: boolean | null;
		poolCode?: string | null;
		poolType?: string | null;
		region?: string | null;
	}
	export interface ChangeResourceDeletionRequestBodyFormProperties {
		comment: FormControl<string | null | undefined>,
		enabled: FormControl<boolean | null | undefined>,
		poolCode: FormControl<string | null | undefined>,
		poolType: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
	}
	export function CreateChangeResourceDeletionRequestBodyFormGroup() {
		return new FormGroup<ChangeResourceDeletionRequestBodyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			poolCode: new FormControl<string | null | undefined>(undefined),
			poolType: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ClaimVMBody {

		/** Required */
		user: UserIdentity;
	}
	export interface ClaimVMBodyFormProperties {
	}
	export function CreateClaimVMBodyFormGroup() {
		return new FormGroup<ClaimVMBodyFormProperties>({
		});

	}

	export interface UserIdentity {

		/** Required */
		userPrincipalName: string;
	}
	export interface UserIdentityFormProperties {

		/** Required */
		userPrincipalName: FormControl<string | null | undefined>,
	}
	export function CreateUserIdentityFormGroup() {
		return new FormGroup<UserIdentityFormProperties>({
			userPrincipalName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ClientUsageData {
		activeMinutes?: number | null;
		lastActivity?: Date | null;
	}
	export interface ClientUsageDataFormProperties {
		activeMinutes: FormControl<number | null | undefined>,
		lastActivity: FormControl<Date | null | undefined>,
	}
	export function CreateClientUsageDataFormGroup() {
		return new FormGroup<ClientUsageDataFormProperties>({
			activeMinutes: new FormControl<number | null | undefined>(undefined),
			lastActivity: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ClientUsageSession {
		sessionId?: string | null;
		usageData?: {[id: string]: ClientUsageData };
	}
	export interface ClientUsageSessionFormProperties {
		sessionId: FormControl<string | null | undefined>,
		usageData: FormControl<{[id: string]: ClientUsageData } | null | undefined>,
	}
	export function CreateClientUsageSessionFormGroup() {
		return new FormGroup<ClientUsageSessionFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
			usageData: new FormControl<{[id: string]: ClientUsageData } | null | undefined>(undefined),
		});

	}

	export interface CloudEnvironmentFolderBody {
		recentFolderPaths?: Array<string>;
	}
	export interface CloudEnvironmentFolderBodyFormProperties {
	}
	export function CreateCloudEnvironmentFolderBodyFormGroup() {
		return new FormGroup<CloudEnvironmentFolderBodyFormProperties>({
		});

	}

	export interface CloudEnvironmentResult {
		accessToken?: string | null;
		active?: Date | null;
		autoShutdownDelayMinutes?: number | null;
		billableOwnerType?: BillableOwnerType;
		clientUsage?: ClientUsageSession;
		connection?: ConnectionInfoBody;
		container?: ContainerInfoBody;
		containerImage?: string | null;
		createFromPrebuild?: boolean | null;
		created?: Date | null;
		displayStorageUtilizationInKb?: boolean | null;
		exportedBlobUrl?: string | null;
		failoverDetails?: FailoverDetails;
		features?: {[id: string]: string };
		friendlyName?: string | null;
		gitStatus?: GitStatus;
		id?: string | null;
		lastStateUpdateReason?: string | null;
		lastUsed?: Date | null;
		location?: string | null;
		organizationId?: string | null;
		ownerId?: string | null;
		planId?: string | null;
		platform?: string | null;
		portForwardingConnection?: ConnectionInfoBody;
		prebuildType?: string | null;
		recentFolders?: Array<string>;
		resourceTier?: ConsumerType;
		runtimeConstraints?: RuntimeConstraintsBody;
		seed?: SeedInfoBody;
		skuDisplayName?: string | null;
		skuName?: string | null;
		state?: string | null;
		storageUtilizationInKb?: number | null;
		subscriptionData?: SubscriptionData;
		templateStatus?: string | null;
		type?: string | null;
		updated?: Date | null;
	}
	export interface CloudEnvironmentResultFormProperties {
		accessToken: FormControl<string | null | undefined>,
		active: FormControl<Date | null | undefined>,
		autoShutdownDelayMinutes: FormControl<number | null | undefined>,
		billableOwnerType: FormControl<BillableOwnerType | null | undefined>,
		containerImage: FormControl<string | null | undefined>,
		createFromPrebuild: FormControl<boolean | null | undefined>,
		created: FormControl<Date | null | undefined>,
		displayStorageUtilizationInKb: FormControl<boolean | null | undefined>,
		exportedBlobUrl: FormControl<string | null | undefined>,
		features: FormControl<{[id: string]: string } | null | undefined>,
		friendlyName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastStateUpdateReason: FormControl<string | null | undefined>,
		lastUsed: FormControl<Date | null | undefined>,
		location: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
		ownerId: FormControl<string | null | undefined>,
		planId: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
		prebuildType: FormControl<string | null | undefined>,
		resourceTier: FormControl<ConsumerType | null | undefined>,
		skuDisplayName: FormControl<string | null | undefined>,
		skuName: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		storageUtilizationInKb: FormControl<number | null | undefined>,
		templateStatus: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateCloudEnvironmentResultFormGroup() {
		return new FormGroup<CloudEnvironmentResultFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<Date | null | undefined>(undefined),
			autoShutdownDelayMinutes: new FormControl<number | null | undefined>(undefined),
			billableOwnerType: new FormControl<BillableOwnerType | null | undefined>(undefined),
			containerImage: new FormControl<string | null | undefined>(undefined),
			createFromPrebuild: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			displayStorageUtilizationInKb: new FormControl<boolean | null | undefined>(undefined),
			exportedBlobUrl: new FormControl<string | null | undefined>(undefined),
			features: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastStateUpdateReason: new FormControl<string | null | undefined>(undefined),
			lastUsed: new FormControl<Date | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
			ownerId: new FormControl<string | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			prebuildType: new FormControl<string | null | undefined>(undefined),
			resourceTier: new FormControl<ConsumerType | null | undefined>(undefined),
			skuDisplayName: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			storageUtilizationInKb: new FormControl<number | null | undefined>(undefined),
			templateStatus: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ConnectionInfoBody {
		connectionServiceUri?: string | null;
		connectionSessionId?: string | null;
		connectionSessionPath?: string | null;
		hostPublicKeys?: Array<string>;
		relayEndpoint?: string | null;
		relaySasToken?: string | null;
		sessionToken?: string | null;
		tunnelProperties?: TunnelProperties;
	}
	export interface ConnectionInfoBodyFormProperties {
		connectionServiceUri: FormControl<string | null | undefined>,
		connectionSessionId: FormControl<string | null | undefined>,
		connectionSessionPath: FormControl<string | null | undefined>,
		relayEndpoint: FormControl<string | null | undefined>,
		relaySasToken: FormControl<string | null | undefined>,
		sessionToken: FormControl<string | null | undefined>,
	}
	export function CreateConnectionInfoBodyFormGroup() {
		return new FormGroup<ConnectionInfoBodyFormProperties>({
			connectionServiceUri: new FormControl<string | null | undefined>(undefined),
			connectionSessionId: new FormControl<string | null | undefined>(undefined),
			connectionSessionPath: new FormControl<string | null | undefined>(undefined),
			relayEndpoint: new FormControl<string | null | undefined>(undefined),
			relaySasToken: new FormControl<string | null | undefined>(undefined),
			sessionToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TunnelProperties {
		clusterId?: string | null;
		connectAccessToken?: string | null;
		domain?: string | null;
		managePortsAccessToken?: string | null;
		serviceUri?: string | null;
		tunnelId?: string | null;
		tunnelName?: string | null;
	}
	export interface TunnelPropertiesFormProperties {
		clusterId: FormControl<string | null | undefined>,
		connectAccessToken: FormControl<string | null | undefined>,
		domain: FormControl<string | null | undefined>,
		managePortsAccessToken: FormControl<string | null | undefined>,
		serviceUri: FormControl<string | null | undefined>,
		tunnelId: FormControl<string | null | undefined>,
		tunnelName: FormControl<string | null | undefined>,
	}
	export function CreateTunnelPropertiesFormGroup() {
		return new FormGroup<TunnelPropertiesFormProperties>({
			clusterId: new FormControl<string | null | undefined>(undefined),
			connectAccessToken: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			managePortsAccessToken: new FormControl<string | null | undefined>(undefined),
			serviceUri: new FormControl<string | null | undefined>(undefined),
			tunnelId: new FormControl<string | null | undefined>(undefined),
			tunnelName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainerInfoBody {
		id?: string | null;
		schemaVersion?: string | null;
	}
	export interface ContainerInfoBodyFormProperties {
		id: FormControl<string | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateContainerInfoBodyFormGroup() {
		return new FormGroup<ContainerInfoBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface FailoverDetails {
		failoverEnabled?: boolean | null;
		failoverRegion?: AzureLocation;
	}
	export interface FailoverDetailsFormProperties {
		failoverEnabled: FormControl<boolean | null | undefined>,
		failoverRegion: FormControl<AzureLocation | null | undefined>,
	}
	export function CreateFailoverDetailsFormGroup() {
		return new FormGroup<FailoverDetailsFormProperties>({
			failoverEnabled: new FormControl<boolean | null | undefined>(undefined),
			failoverRegion: new FormControl<AzureLocation | null | undefined>(undefined),
		});

	}

	export interface GitStatus {
		ahead?: number | null;
		behind?: number | null;
		branch?: string | null;
		commit?: string | null;
		hasUncommittedChanges?: boolean | null;
		hasUnpushedChanges?: boolean | null;
		noGitRepo?: boolean | null;
	}
	export interface GitStatusFormProperties {
		ahead: FormControl<number | null | undefined>,
		behind: FormControl<number | null | undefined>,
		branch: FormControl<string | null | undefined>,
		commit: FormControl<string | null | undefined>,
		hasUncommittedChanges: FormControl<boolean | null | undefined>,
		hasUnpushedChanges: FormControl<boolean | null | undefined>,
		noGitRepo: FormControl<boolean | null | undefined>,
	}
	export function CreateGitStatusFormGroup() {
		return new FormGroup<GitStatusFormProperties>({
			ahead: new FormControl<number | null | undefined>(undefined),
			behind: new FormControl<number | null | undefined>(undefined),
			branch: new FormControl<string | null | undefined>(undefined),
			commit: new FormControl<string | null | undefined>(undefined),
			hasUncommittedChanges: new FormControl<boolean | null | undefined>(undefined),
			hasUnpushedChanges: new FormControl<boolean | null | undefined>(undefined),
			noGitRepo: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum ConsumerType { '0 (None)' = '0 (None)', '1 (System)' = '1 (System)', '2 (Trusted)' = '2 (Trusted)', '4 (Neutral)' = '4 (Neutral)', '8 (Untrusted)' = '8 (Untrusted)', '9 (Test)' = '9 (Test)' }

	export interface RuntimeConstraintsBody {
		allowedPortPrivacySettings?: Array<PrivacyEnum>;
		imageAllowList?: Array<string>;
	}
	export interface RuntimeConstraintsBodyFormProperties {
	}
	export function CreateRuntimeConstraintsBodyFormGroup() {
		return new FormGroup<RuntimeConstraintsBodyFormProperties>({
		});

	}

	export interface SeedInfoBody {
		cloneUrl?: string | null;
		gitConfig?: GitConfigOptionsBody;
		recurseClone?: boolean | null;
		repository?: RepositoryInfoBody;
		seedMoniker?: string | null;
		seedType?: string | null;
	}
	export interface SeedInfoBodyFormProperties {
		cloneUrl: FormControl<string | null | undefined>,
		recurseClone: FormControl<boolean | null | undefined>,
		seedMoniker: FormControl<string | null | undefined>,
		seedType: FormControl<string | null | undefined>,
	}
	export function CreateSeedInfoBodyFormGroup() {
		return new FormGroup<SeedInfoBodyFormProperties>({
			cloneUrl: new FormControl<string | null | undefined>(undefined),
			recurseClone: new FormControl<boolean | null | undefined>(undefined),
			seedMoniker: new FormControl<string | null | undefined>(undefined),
			seedType: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GitConfigOptionsBody {
		userEmail?: string | null;
		userName?: string | null;
	}
	export interface GitConfigOptionsBodyFormProperties {
		userEmail: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateGitConfigOptionsBodyFormGroup() {
		return new FormGroup<GitConfigOptionsBodyFormProperties>({
			userEmail: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RepositoryInfoBody {
		branchName?: string | null;
		commitId?: string | null;
		createType?: string | null;
		diskUsage?: string | null;
		name?: string | null;
		owner?: string | null;
		prebuildHash?: string | null;
		repoId?: number | null;
		url?: string | null;
	}
	export interface RepositoryInfoBodyFormProperties {
		branchName: FormControl<string | null | undefined>,
		commitId: FormControl<string | null | undefined>,
		createType: FormControl<string | null | undefined>,
		diskUsage: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		owner: FormControl<string | null | undefined>,
		prebuildHash: FormControl<string | null | undefined>,
		repoId: FormControl<number | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateRepositoryInfoBodyFormGroup() {
		return new FormGroup<RepositoryInfoBodyFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
			createType: new FormControl<string | null | undefined>(undefined),
			diskUsage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			prebuildHash: new FormControl<string | null | undefined>(undefined),
			repoId: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionData {
		computeQuota?: number | null;
		computeUsage?: number | null;
		subscriptionId?: string | null;
		subscriptionState?: string | null;
	}
	export interface SubscriptionDataFormProperties {
		computeQuota: FormControl<number | null | undefined>,
		computeUsage: FormControl<number | null | undefined>,
		subscriptionId: FormControl<string | null | undefined>,
		subscriptionState: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionDataFormGroup() {
		return new FormGroup<SubscriptionDataFormProperties>({
			computeQuota: new FormControl<number | null | undefined>(undefined),
			computeUsage: new FormControl<number | null | undefined>(undefined),
			subscriptionId: new FormControl<string | null | undefined>(undefined),
			subscriptionState: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CollectedData {
		environmentId?: string | null;
		name?: string | null;
		parentActivityId?: string | null;
		timestamp?: Date | null;
	}
	export interface CollectedDataFormProperties {
		environmentId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		parentActivityId: FormControl<string | null | undefined>,
		timestamp: FormControl<Date | null | undefined>,
	}
	export function CreateCollectedDataFormGroup() {
		return new FormGroup<CollectedDataFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentActivityId: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ContainerInfo {
		id?: string | null;
		imageName?: string | null;
		schemaVersion?: string | null;
	}
	export interface ContainerInfoFormProperties {
		id: FormControl<string | null | undefined>,
		imageName: FormControl<string | null | undefined>,
		schemaVersion: FormControl<string | null | undefined>,
	}
	export function CreateContainerInfoFormGroup() {
		return new FormGroup<ContainerInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			imageName: new FormControl<string | null | undefined>(undefined),
			schemaVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateCloudEnvironmentBody {
		analyticsTrackingId?: string | null;
		autoShutdownDelayMinutes?: number | null;
		billableOwner?: BillableOwnerBody;
		connection?: ConnectionInfoBody;
		containerImage?: string | null;
		createAsPrebuild?: boolean | null;
		devContainerJson?: string | null;
		devContainerPath?: string | null;
		experimentalFeatures?: ExperimentalFeaturesBody;
		features?: {[id: string]: string };

		/** Required */
		friendlyName: string;
		gitHubApiUrl?: string | null;
		gitHubAppUrl?: string | null;
		gitHubPfsAuthEndpoint?: string | null;
		githubEnvironmentEndpoint?: string | null;
		hasDevcontainerJson?: boolean | null;
		identity?: IdentityBody;
		label?: string | null;
		location?: string | null;
		netmonCorrelationData?: NetmonCorrelationDataBody;
		personalization?: PersonalizationInfoBody;
		planId?: string | null;
		platform?: string | null;
		runtimeConstraints?: RuntimeConstraintsBody;
		secrets?: Array<SecretDataBody>;
		seed?: SeedInfoBody;
		skuName?: string | null;
		testAccount?: boolean | null;

		/** Required */
		type: string;
		userTier?: string | null;
		workingDirectory?: string | null;
	}
	export interface CreateCloudEnvironmentBodyFormProperties {
		analyticsTrackingId: FormControl<string | null | undefined>,
		autoShutdownDelayMinutes: FormControl<number | null | undefined>,
		containerImage: FormControl<string | null | undefined>,
		createAsPrebuild: FormControl<boolean | null | undefined>,
		devContainerJson: FormControl<string | null | undefined>,
		devContainerPath: FormControl<string | null | undefined>,
		features: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		friendlyName: FormControl<string | null | undefined>,
		gitHubApiUrl: FormControl<string | null | undefined>,
		gitHubAppUrl: FormControl<string | null | undefined>,
		gitHubPfsAuthEndpoint: FormControl<string | null | undefined>,
		githubEnvironmentEndpoint: FormControl<string | null | undefined>,
		hasDevcontainerJson: FormControl<boolean | null | undefined>,
		label: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		planId: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
		skuName: FormControl<string | null | undefined>,
		testAccount: FormControl<boolean | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
		userTier: FormControl<string | null | undefined>,
		workingDirectory: FormControl<string | null | undefined>,
	}
	export function CreateCreateCloudEnvironmentBodyFormGroup() {
		return new FormGroup<CreateCloudEnvironmentBodyFormProperties>({
			analyticsTrackingId: new FormControl<string | null | undefined>(undefined),
			autoShutdownDelayMinutes: new FormControl<number | null | undefined>(undefined),
			containerImage: new FormControl<string | null | undefined>(undefined),
			createAsPrebuild: new FormControl<boolean | null | undefined>(undefined),
			devContainerJson: new FormControl<string | null | undefined>(undefined),
			devContainerPath: new FormControl<string | null | undefined>(undefined),
			features: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gitHubApiUrl: new FormControl<string | null | undefined>(undefined),
			gitHubAppUrl: new FormControl<string | null | undefined>(undefined),
			gitHubPfsAuthEndpoint: new FormControl<string | null | undefined>(undefined),
			githubEnvironmentEndpoint: new FormControl<string | null | undefined>(undefined),
			hasDevcontainerJson: new FormControl<boolean | null | undefined>(undefined),
			label: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			testAccount: new FormControl<boolean | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userTier: new FormControl<string | null | undefined>(undefined),
			workingDirectory: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExperimentalFeaturesBody {
		enableDynamicHttpsDetection?: boolean | null;
		queueResourceAllocation?: boolean | null;
		usePrebuildFastPathIfAvailable?: boolean | null;
		usePrebuiltImages?: boolean | null;
		useStorageV2?: boolean | null;
	}
	export interface ExperimentalFeaturesBodyFormProperties {
		enableDynamicHttpsDetection: FormControl<boolean | null | undefined>,
		queueResourceAllocation: FormControl<boolean | null | undefined>,
		usePrebuildFastPathIfAvailable: FormControl<boolean | null | undefined>,
		usePrebuiltImages: FormControl<boolean | null | undefined>,
		useStorageV2: FormControl<boolean | null | undefined>,
	}
	export function CreateExperimentalFeaturesBodyFormGroup() {
		return new FormGroup<ExperimentalFeaturesBodyFormProperties>({
			enableDynamicHttpsDetection: new FormControl<boolean | null | undefined>(undefined),
			queueResourceAllocation: new FormControl<boolean | null | undefined>(undefined),
			usePrebuildFastPathIfAvailable: new FormControl<boolean | null | undefined>(undefined),
			usePrebuiltImages: new FormControl<boolean | null | undefined>(undefined),
			useStorageV2: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface IdentityBody {
		displayName?: string | null;
		id?: string | null;
		userName?: string | null;
	}
	export interface IdentityBodyFormProperties {
		displayName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
	}
	export function CreateIdentityBodyFormGroup() {
		return new FormGroup<IdentityBodyFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetmonCorrelationDataBody {
		billableOwnerCreatedAt?: string | null;
		billableOwnerDatabaseId?: string | null;
		billableOwnerGlobalRelayId?: string | null;
		billableOwnerPlan?: string | null;
		ownerCreatedAt?: string | null;
		ownerDatabaseId?: string | null;
		ownerGlobalRelayId?: string | null;
		ownerPlan?: string | null;
		repositoryCreatedAt?: string | null;
		repositoryDatabaseId?: string | null;
		repositoryGlobalRelayId?: string | null;
		repositoryPrivate?: boolean | null;
	}
	export interface NetmonCorrelationDataBodyFormProperties {
		billableOwnerCreatedAt: FormControl<string | null | undefined>,
		billableOwnerDatabaseId: FormControl<string | null | undefined>,
		billableOwnerGlobalRelayId: FormControl<string | null | undefined>,
		billableOwnerPlan: FormControl<string | null | undefined>,
		ownerCreatedAt: FormControl<string | null | undefined>,
		ownerDatabaseId: FormControl<string | null | undefined>,
		ownerGlobalRelayId: FormControl<string | null | undefined>,
		ownerPlan: FormControl<string | null | undefined>,
		repositoryCreatedAt: FormControl<string | null | undefined>,
		repositoryDatabaseId: FormControl<string | null | undefined>,
		repositoryGlobalRelayId: FormControl<string | null | undefined>,
		repositoryPrivate: FormControl<boolean | null | undefined>,
	}
	export function CreateNetmonCorrelationDataBodyFormGroup() {
		return new FormGroup<NetmonCorrelationDataBodyFormProperties>({
			billableOwnerCreatedAt: new FormControl<string | null | undefined>(undefined),
			billableOwnerDatabaseId: new FormControl<string | null | undefined>(undefined),
			billableOwnerGlobalRelayId: new FormControl<string | null | undefined>(undefined),
			billableOwnerPlan: new FormControl<string | null | undefined>(undefined),
			ownerCreatedAt: new FormControl<string | null | undefined>(undefined),
			ownerDatabaseId: new FormControl<string | null | undefined>(undefined),
			ownerGlobalRelayId: new FormControl<string | null | undefined>(undefined),
			ownerPlan: new FormControl<string | null | undefined>(undefined),
			repositoryCreatedAt: new FormControl<string | null | undefined>(undefined),
			repositoryDatabaseId: new FormControl<string | null | undefined>(undefined),
			repositoryGlobalRelayId: new FormControl<string | null | undefined>(undefined),
			repositoryPrivate: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PersonalizationInfoBody {
		dotfilesInstallCommand?: string | null;
		dotfilesRepository?: string | null;
		dotfilesTargetPath?: string | null;
	}
	export interface PersonalizationInfoBodyFormProperties {
		dotfilesInstallCommand: FormControl<string | null | undefined>,
		dotfilesRepository: FormControl<string | null | undefined>,
		dotfilesTargetPath: FormControl<string | null | undefined>,
	}
	export function CreatePersonalizationInfoBodyFormGroup() {
		return new FormGroup<PersonalizationInfoBodyFormProperties>({
			dotfilesInstallCommand: new FormControl<string | null | undefined>(undefined),
			dotfilesRepository: new FormControl<string | null | undefined>(undefined),
			dotfilesTargetPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SecretDataBody {
		name?: string | null;
		type?: SecretType;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		value?: string | null;
	}
	export interface SecretDataBodyFormProperties {
		name: FormControl<string | null | undefined>,
		type: FormControl<SecretType | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSecretDataBodyFormGroup() {
		return new FormGroup<SecretDataBodyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SecretType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}

	export enum SecretType { '1 (EnvironmentVariable)' = '1 (EnvironmentVariable)', '2 (ContainerRegistry)' = '2 (ContainerRegistry)' }

	export interface CreateEnvironmentPoolResourceBody {
		environmentOptions?: PrebuildEnvironmentOptions;
		secrets?: Array<SecretDataBody>;
	}
	export interface CreateEnvironmentPoolResourceBodyFormProperties {
	}
	export function CreateCreateEnvironmentPoolResourceBodyFormGroup() {
		return new FormGroup<CreateEnvironmentPoolResourceBodyFormProperties>({
		});

	}

	export interface PrebuildEnvironmentOptions {
		correlationId?: string | null;
	}
	export interface PrebuildEnvironmentOptionsFormProperties {
		correlationId: FormControl<string | null | undefined>,
	}
	export function CreatePrebuildEnvironmentOptionsFormGroup() {
		return new FormGroup<PrebuildEnvironmentOptionsFormProperties>({
			correlationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateEnvironmentStateChangeBody {
		newValue?: CloudEnvironmentState;
		oldValue?: CloudEnvironmentState;
		time?: Date | null;
	}
	export interface CreateEnvironmentStateChangeBodyFormProperties {
		newValue: FormControl<CloudEnvironmentState | null | undefined>,
		oldValue: FormControl<CloudEnvironmentState | null | undefined>,
		time: FormControl<Date | null | undefined>,
	}
	export function CreateCreateEnvironmentStateChangeBodyFormGroup() {
		return new FormGroup<CreateEnvironmentStateChangeBodyFormProperties>({
			newValue: new FormControl<CloudEnvironmentState | null | undefined>(undefined),
			oldValue: new FormControl<CloudEnvironmentState | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface CreateOrUpdatePoolBody {
		domainUserCredentials?: DomainUserCredentials;
		hotPoolSettings?: HotPoolSettings;

		/** Required */
		poolGroupName: string;
		tags?: {[id: string]: string };
		userGroupName?: string | null;

		/** Required */
		vmSpecs: VMSpecs;
	}
	export interface CreateOrUpdatePoolBodyFormProperties {

		/** Required */
		poolGroupName: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		userGroupName: FormControl<string | null | undefined>,
	}
	export function CreateCreateOrUpdatePoolBodyFormGroup() {
		return new FormGroup<CreateOrUpdatePoolBodyFormProperties>({
			poolGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			userGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DomainUserCredentials {

		/** Required */
		domain: string;
		organizationalUnit?: string | null;

		/** Required */
		passwordSecretIdentifier: string;

		/** Required */
		userName: string;
	}
	export interface DomainUserCredentialsFormProperties {

		/** Required */
		domain: FormControl<string | null | undefined>,
		organizationalUnit: FormControl<string | null | undefined>,

		/** Required */
		passwordSecretIdentifier: FormControl<string | null | undefined>,

		/** Required */
		userName: FormControl<string | null | undefined>,
	}
	export function CreateDomainUserCredentialsFormGroup() {
		return new FormGroup<DomainUserCredentialsFormProperties>({
			domain: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			organizationalUnit: new FormControl<string | null | undefined>(undefined),
			passwordSecretIdentifier: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			userName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HotPoolSettings {
		size?: number | null;
	}
	export interface HotPoolSettingsFormProperties {
		size: FormControl<number | null | undefined>,
	}
	export function CreateHotPoolSettingsFormGroup() {
		return new FormGroup<HotPoolSettingsFormProperties>({
			size: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface VMSpecs {

		/** Required */
		diskType: VMDiskType;

		/** Required */
		imageResourceId: string;

		/** Required */
		size: string;

		/** Required */
		subnetResourceId: string;
	}
	export interface VMSpecsFormProperties {

		/** Required */
		diskType: FormControl<VMDiskType | null | undefined>,

		/** Required */
		imageResourceId: FormControl<string | null | undefined>,

		/** Required */
		size: FormControl<string | null | undefined>,

		/** Required */
		subnetResourceId: FormControl<string | null | undefined>,
	}
	export function CreateVMSpecsFormGroup() {
		return new FormGroup<VMSpecsFormProperties>({
			diskType: new FormControl<VMDiskType | null | undefined>(undefined, [Validators.required]),
			imageResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			size: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			subnetResourceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum VMDiskType { '0 (StandardHDD)' = '0 (StandardHDD)', '1 (StandardSSD)' = '1 (StandardSSD)', '2 (PremiumSSD)' = '2 (PremiumSSD)' }

	export interface CreatePoolGroupBody {

		/** Required */
		displayName: string;

		/** Required */
		region: AzureLocation;
		tags?: {[id: string]: string };
	}
	export interface CreatePoolGroupBodyFormProperties {

		/** Required */
		displayName: FormControl<string | null | undefined>,

		/** Required */
		region: FormControl<AzureLocation | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateCreatePoolGroupBodyFormGroup() {
		return new FormGroup<CreatePoolGroupBodyFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			region: new FormControl<AzureLocation | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface CreatePrebuildTemplateBody {
		devContainerPath?: string | null;
		experimentalFeatures?: ExperimentalFeaturesBody;
		features?: {[id: string]: string };

		/** Required */
		friendlyName: string;
		gitHubPrebuildInstanceEndpoint?: string | null;
		gitHubPrebuildTemplateEndpoint?: string | null;
		planId?: string | null;
		seed?: SeedInfoBody;
		storageType?: StorageType;
		templateInfo?: PrebuildTemplateInfo;
	}
	export interface CreatePrebuildTemplateBodyFormProperties {
		devContainerPath: FormControl<string | null | undefined>,
		features: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		friendlyName: FormControl<string | null | undefined>,
		gitHubPrebuildInstanceEndpoint: FormControl<string | null | undefined>,
		gitHubPrebuildTemplateEndpoint: FormControl<string | null | undefined>,
		planId: FormControl<string | null | undefined>,
		storageType: FormControl<StorageType | null | undefined>,
	}
	export function CreateCreatePrebuildTemplateBodyFormGroup() {
		return new FormGroup<CreatePrebuildTemplateBodyFormProperties>({
			devContainerPath: new FormControl<string | null | undefined>(undefined),
			features: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			gitHubPrebuildInstanceEndpoint: new FormControl<string | null | undefined>(undefined),
			gitHubPrebuildTemplateEndpoint: new FormControl<string | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
			storageType: new FormControl<StorageType | null | undefined>(undefined),
		});

	}

	export enum StorageType { '0 (V1)' = '0 (V1)', '1 (V2)' = '1 (V2)' }

	export interface PrebuildTemplateInfo {
		container?: ContainerInfo;
		prebuildConfigurationId?: string | null;
		templateSizeInGB?: number | null;
		totalTimeSavingsInSeconds?: string | null;
		workFlowRunId?: string | null;
	}
	export interface PrebuildTemplateInfoFormProperties {
		prebuildConfigurationId: FormControl<string | null | undefined>,
		templateSizeInGB: FormControl<number | null | undefined>,
		totalTimeSavingsInSeconds: FormControl<string | null | undefined>,
		workFlowRunId: FormControl<string | null | undefined>,
	}
	export function CreatePrebuildTemplateInfoFormGroup() {
		return new FormGroup<PrebuildTemplateInfoFormProperties>({
			prebuildConfigurationId: new FormControl<string | null | undefined>(undefined),
			templateSizeInGB: new FormControl<number | null | undefined>(undefined),
			totalTimeSavingsInSeconds: new FormControl<string | null | undefined>(undefined),
			workFlowRunId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateTemplateResult {
		properties?: {[id: string]: string };
		sasUrl?: string | null;
		templateId?: string | null;
	}
	export interface CreateTemplateResultFormProperties {
		properties: FormControl<{[id: string]: string } | null | undefined>,
		sasUrl: FormControl<string | null | undefined>,
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateCreateTemplateResultFormGroup() {
		return new FormGroup<CreateTemplateResultFormProperties>({
			properties: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			sasUrl: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DelegateIdentity {
		displayName?: string | null;
		id?: string | null;
		username?: string | null;
	}
	export interface DelegateIdentityFormProperties {
		displayName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		username: FormControl<string | null | undefined>,
	}
	export function CreateDelegateIdentityFormGroup() {
		return new FormGroup<DelegateIdentityFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeletePrebuildTemplatesBody {

		/** Required */
		branchName: string;
		devContainerPath?: string | null;
		prebuildConfigurationId?: number | null;

		/** Required */
		repoId: number;
	}
	export interface DeletePrebuildTemplatesBodyFormProperties {

		/** Required */
		branchName: FormControl<string | null | undefined>,
		devContainerPath: FormControl<string | null | undefined>,
		prebuildConfigurationId: FormControl<number | null | undefined>,

		/** Required */
		repoId: FormControl<number | null | undefined>,
	}
	export function CreateDeletePrebuildTemplatesBodyFormGroup() {
		return new FormGroup<DeletePrebuildTemplatesBodyFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			devContainerPath: new FormControl<string | null | undefined>(undefined),
			prebuildConfigurationId: new FormControl<number | null | undefined>(undefined),
			repoId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnvironmentBillingInfo {
		id?: string | null;
		name?: string | null;
		sku?: Sku;
		userId?: string | null;
	}
	export interface EnvironmentBillingInfoFormProperties {
		id: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentBillingInfoFormGroup() {
		return new FormGroup<EnvironmentBillingInfoFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnvironmentRegistrationCallbackBody {
		payload?: EnvironmentRegistrationCallbackPayloadBody;

		/** Required */
		type: string;
	}
	export interface EnvironmentRegistrationCallbackBodyFormProperties {

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentRegistrationCallbackBodyFormGroup() {
		return new FormGroup<EnvironmentRegistrationCallbackBodyFormProperties>({
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface EnvironmentRegistrationCallbackPayloadBody {
		sessionId?: string | null;
		sessionPath?: string | null;
	}
	export interface EnvironmentRegistrationCallbackPayloadBodyFormProperties {
		sessionId: FormControl<string | null | undefined>,
		sessionPath: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentRegistrationCallbackPayloadBodyFormGroup() {
		return new FormGroup<EnvironmentRegistrationCallbackPayloadBodyFormProperties>({
			sessionId: new FormControl<string | null | undefined>(undefined),
			sessionPath: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnvironmentStateChange {
		environment?: EnvironmentBillingInfo;
		id?: string | null;
		newValue?: CloudEnvironmentState;
		oldValue?: CloudEnvironmentState;
		partitionKey?: string | null;
		time?: Date | null;
	}
	export interface EnvironmentStateChangeFormProperties {
		id: FormControl<string | null | undefined>,
		newValue: FormControl<CloudEnvironmentState | null | undefined>,
		oldValue: FormControl<CloudEnvironmentState | null | undefined>,
		partitionKey: FormControl<string | null | undefined>,
		time: FormControl<Date | null | undefined>,
	}
	export function CreateEnvironmentStateChangeFormGroup() {
		return new FormGroup<EnvironmentStateChangeFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			newValue: new FormControl<CloudEnvironmentState | null | undefined>(undefined),
			oldValue: new FormControl<CloudEnvironmentState | null | undefined>(undefined),
			partitionKey: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface HeartBeatBody {
		agentVersion?: string | null;
		collectedDataList?: Array<CollectedData>;
		environmentId?: string | null;
		resourceId?: string | null;
		timeStamp?: Date | null;
	}
	export interface HeartBeatBodyFormProperties {
		agentVersion: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		timeStamp: FormControl<Date | null | undefined>,
	}
	export function CreateHeartBeatBodyFormGroup() {
		return new FormGroup<HeartBeatBodyFormProperties>({
			agentVersion: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			timeStamp: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface IssueDelegatePlanAccessTokenBody {
		environmentIds?: Array<string>;
		expiration?: Date | null;
		identity?: DelegateIdentity;
		portNumbers?: Array<number>;
		scope?: string | null;
	}
	export interface IssueDelegatePlanAccessTokenBodyFormProperties {
		expiration: FormControl<Date | null | undefined>,
		scope: FormControl<string | null | undefined>,
	}
	export function CreateIssueDelegatePlanAccessTokenBodyFormGroup() {
		return new FormGroup<IssueDelegatePlanAccessTokenBodyFormProperties>({
			expiration: new FormControl<Date | null | undefined>(undefined),
			scope: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationInfoResult {
		skus?: Array<SkuInfoResult>;
	}
	export interface LocationInfoResultFormProperties {
	}
	export function CreateLocationInfoResultFormGroup() {
		return new FormGroup<LocationInfoResultFormProperties>({
		});

	}

	export interface SkuInfoResult {
		availableSettings?: AvailableSettingsResult;
		displayName?: string | null;
		name?: string | null;
		os?: string | null;
	}
	export interface SkuInfoResultFormProperties {
		displayName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		os: FormControl<string | null | undefined>,
	}
	export function CreateSkuInfoResultFormGroup() {
		return new FormGroup<SkuInfoResultFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			os: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface LocationsResult {
		available?: Array<AzureLocation>;
		current?: AzureLocation;
		hostnames?: {[id: string]: string };
	}
	export interface LocationsResultFormProperties {
		current: FormControl<AzureLocation | null | undefined>,
		hostnames: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateLocationsResultFormGroup() {
		return new FormGroup<LocationsResultFormProperties>({
			current: new FormControl<AzureLocation | null | undefined>(undefined),
			hostnames: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum MessageCodes { '0 (Unknown)' = '0 (Unknown)', '1 (ExceededQuota)' = '1 (ExceededQuota)', '2 (EnvironmentNameAlreadyExists)' = '2 (EnvironmentNameAlreadyExists)', '3 (EnvironmentDoesNotExist)' = '3 (EnvironmentDoesNotExist)', '4 (ShutdownStaticEnvironment)' = '4 (ShutdownStaticEnvironment)', '5 (StartStaticEnvironment)' = '5 (StartStaticEnvironment)', '6 (EnvironmentNotAvailable)' = '6 (EnvironmentNotAvailable)', '7 (EnvironmentNotShutdown)' = '7 (EnvironmentNotShutdown)', '8 (UnableToAllocateResources)' = '8 (UnableToAllocateResources)', '9 (UnableToAllocateResourcesWhileStarting)' = '9 (UnableToAllocateResourcesWhileStarting)', '10 (RequestedAutoShutdownDelayMinutesIsInvalid)' = '10 (RequestedAutoShutdownDelayMinutesIsInvalid)', '11 (UnableToUpdateSku)' = '11 (UnableToUpdateSku)', '12 (RequestedSkuIsInvalid)' = '12 (RequestedSkuIsInvalid)', '13 (HeartbeatUnhealthy)' = '13 (HeartbeatUnhealthy)', '14 (StartEnvironmentGenericError)' = '14 (StartEnvironmentGenericError)', '15 (RestoringFromArchive)' = '15 (RestoringFromArchive)', '16 (FilePathIsInvalid)' = '16 (FilePathIsInvalid)', '17 (TooManyRecentFolders)' = '17 (TooManyRecentFolders)', '18 (SubscriptionIsBanned)' = '18 (SubscriptionIsBanned)', '19 (EnvironmentArchived)' = '19 (EnvironmentArchived)', '20 (SubscriptionStateIsNotRegistered)' = '20 (SubscriptionStateIsNotRegistered)', '21 (FeatureDisabled)' = '21 (FeatureDisabled)', '22 (SubscriptionCannotPerformAction)' = '22 (SubscriptionCannotPerformAction)', '23 (InvalidLocationChange)' = '23 (InvalidLocationChange)', '24 (PlanDoesNotExist)' = '24 (PlanDoesNotExist)', '25 (UnableToResolveEnvironmentNameConflict)' = '25 (UnableToResolveEnvironmentNameConflict)', '26 (ExceededSecretsQuota)' = '26 (ExceededSecretsQuota)', '27 (InvalidPlanTenant)' = '27 (InvalidPlanTenant)', '28 (ExportStaticEnvironment)' = '28 (ExportStaticEnvironment)', '29 (ExportEnvironmentGenericError)' = '29 (ExportEnvironmentGenericError)', '30 (ExceededOrgDevContainerMaxLength)' = '30 (ExceededOrgDevContainerMaxLength)', '31 (ActionNotAllowedInThisState)' = '31 (ActionNotAllowedInThisState)', '32 (ExportRunningEnvironmentError)' = '32 (ExportRunningEnvironmentError)', '34 (EnvironmentCreationIsNotAllowed)' = '34 (EnvironmentCreationIsNotAllowed)', '35 (GitHubProxyError)' = '35 (GitHubProxyError)', '36 (PrebuildTemplateDeletionIsNotAllowed)' = '36 (PrebuildTemplateDeletionIsNotAllowed)', '37 (TierCapacityIsUnavailable)' = '37 (TierCapacityIsUnavailable)', '38 (EnvironmentIsNotRestorable)' = '38 (EnvironmentIsNotRestorable)' }

	export interface NetworkSettingsResource {
		id?: string | null;
		location?: string | null;
		name?: string | null;
		properties?: NetworkSettingsResourceProperties;
		provisioningState?: string | null;
		tags?: {[id: string]: string };
		type?: string | null;
	}
	export interface NetworkSettingsResourceFormProperties {
		id: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		provisioningState: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateNetworkSettingsResourceFormGroup() {
		return new FormGroup<NetworkSettingsResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkSettingsResourceProperties {
		subnetId?: string | null;
	}
	export interface NetworkSettingsResourcePropertiesFormProperties {
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateNetworkSettingsResourcePropertiesFormGroup() {
		return new FormGroup<NetworkSettingsResourcePropertiesFormProperties>({
			subnetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface NetworkSettingsResourceList {
		value?: Array<NetworkSettingsResource>;
	}
	export interface NetworkSettingsResourceListFormProperties {
	}
	export function CreateNetworkSettingsResourceListFormGroup() {
		return new FormGroup<NetworkSettingsResourceListFormProperties>({
		});

	}

	export interface NotificationDataBody {
		details?: string | null;
		displayMode?: string | null;
		message?: string | null;
		modal?: boolean | null;
	}
	export interface NotificationDataBodyFormProperties {
		details: FormControl<string | null | undefined>,
		displayMode: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		modal: FormControl<boolean | null | undefined>,
	}
	export function CreateNotificationDataBodyFormGroup() {
		return new FormGroup<NotificationDataBodyFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
			displayMode: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			modal: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PlanResource {
		id?: string | null;
		identity?: PlanResourceIdentity;
		location?: string | null;
		name?: string | null;
		properties?: PlanResourceProperties;
		provisioningState?: string | null;
		tags?: {[id: string]: string };
		type?: string | null;
	}
	export interface PlanResourceFormProperties {
		id: FormControl<string | null | undefined>,
		location: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		provisioningState: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePlanResourceFormGroup() {
		return new FormGroup<PlanResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			provisioningState: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlanResourceIdentity {
		principalId?: string | null;
		tenantId?: string | null;
		type?: string | null;
	}
	export interface PlanResourceIdentityFormProperties {
		principalId: FormControl<string | null | undefined>,
		tenantId: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreatePlanResourceIdentityFormGroup() {
		return new FormGroup<PlanResourceIdentityFormProperties>({
			principalId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlanResourceProperties {
		defaultCodespaceSku?: string | null;
		defaultEnvironmentSku?: string | null;
		encryption?: PlanResourceEncryptionProperties;
		userId?: string | null;
		vnetProperties?: VnetProperties;
	}
	export interface PlanResourcePropertiesFormProperties {
		defaultCodespaceSku: FormControl<string | null | undefined>,
		defaultEnvironmentSku: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreatePlanResourcePropertiesFormGroup() {
		return new FormGroup<PlanResourcePropertiesFormProperties>({
			defaultCodespaceSku: new FormControl<string | null | undefined>(undefined),
			defaultEnvironmentSku: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlanResourceEncryptionProperties {
		keySource?: string | null;
		keyVaultProperties?: PlanResourceKeyVaultProperties;
	}
	export interface PlanResourceEncryptionPropertiesFormProperties {
		keySource: FormControl<string | null | undefined>,
	}
	export function CreatePlanResourceEncryptionPropertiesFormGroup() {
		return new FormGroup<PlanResourceEncryptionPropertiesFormProperties>({
			keySource: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlanResourceKeyVaultProperties {
		keyName?: string | null;
		keyVaultUri?: string | null;
		keyVersion?: string | null;
	}
	export interface PlanResourceKeyVaultPropertiesFormProperties {
		keyName: FormControl<string | null | undefined>,
		keyVaultUri: FormControl<string | null | undefined>,
		keyVersion: FormControl<string | null | undefined>,
	}
	export function CreatePlanResourceKeyVaultPropertiesFormGroup() {
		return new FormGroup<PlanResourceKeyVaultPropertiesFormProperties>({
			keyName: new FormControl<string | null | undefined>(undefined),
			keyVaultUri: new FormControl<string | null | undefined>(undefined),
			keyVersion: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VnetProperties {
		subnetId?: string | null;
	}
	export interface VnetPropertiesFormProperties {
		subnetId: FormControl<string | null | undefined>,
	}
	export function CreateVnetPropertiesFormGroup() {
		return new FormGroup<VnetPropertiesFormProperties>({
			subnetId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlanResourceHeaders {
		clientTenantId?: string | null;
		homeTenantId?: string | null;
		identityPrincipalId?: string | null;
		identityUrl?: string | null;
	}
	export interface PlanResourceHeadersFormProperties {
		clientTenantId: FormControl<string | null | undefined>,
		homeTenantId: FormControl<string | null | undefined>,
		identityPrincipalId: FormControl<string | null | undefined>,
		identityUrl: FormControl<string | null | undefined>,
	}
	export function CreatePlanResourceHeadersFormGroup() {
		return new FormGroup<PlanResourceHeadersFormProperties>({
			clientTenantId: new FormControl<string | null | undefined>(undefined),
			homeTenantId: new FormControl<string | null | undefined>(undefined),
			identityPrincipalId: new FormControl<string | null | undefined>(undefined),
			identityUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PlanResourceList {
		value?: Array<PlanResource>;
	}
	export interface PlanResourceListFormProperties {
	}
	export function CreatePlanResourceListFormGroup() {
		return new FormGroup<PlanResourceListFormProperties>({
		});

	}

	export interface PlanResourceUpdateBody {
		identity?: PlanResourceIdentity;
		properties?: PlanResourceProperties;
	}
	export interface PlanResourceUpdateBodyFormProperties {
	}
	export function CreatePlanResourceUpdateBodyFormGroup() {
		return new FormGroup<PlanResourceUpdateBodyFormProperties>({
		});

	}

	export interface Pool {
		poolType?: PrebuildMode;
		skuName?: string | null;
		targetCount?: number | null;
	}
	export interface PoolFormProperties {
		poolType: FormControl<PrebuildMode | null | undefined>,
		skuName: FormControl<string | null | undefined>,
		targetCount: FormControl<number | null | undefined>,
	}
	export function CreatePoolFormGroup() {
		return new FormGroup<PoolFormProperties>({
			poolType: new FormControl<PrebuildMode | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			targetCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PrebuildMode { '0 (None)' = '0 (None)', '1 (Blob)' = '1 (Blob)', '2 (CodespacePool)' = '2 (CodespacePool)', '3 (StoragePool)' = '3 (StoragePool)', '4 (CodespaceAndStoragePool)' = '4 (CodespaceAndStoragePool)' }

	export interface PoolConfigRequestBody {
		comment?: string | null;
		maxTargetCount?: string | null;
		minTargetCount?: string | null;
		poolCode?: string | null;
		poolType?: string | null;
		region?: string | null;
		targetCount?: string | null;
	}
	export interface PoolConfigRequestBodyFormProperties {
		comment: FormControl<string | null | undefined>,
		maxTargetCount: FormControl<string | null | undefined>,
		minTargetCount: FormControl<string | null | undefined>,
		poolCode: FormControl<string | null | undefined>,
		poolType: FormControl<string | null | undefined>,
		region: FormControl<string | null | undefined>,
		targetCount: FormControl<string | null | undefined>,
	}
	export function CreatePoolConfigRequestBodyFormGroup() {
		return new FormGroup<PoolConfigRequestBodyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			maxTargetCount: new FormControl<string | null | undefined>(undefined),
			minTargetCount: new FormControl<string | null | undefined>(undefined),
			poolCode: new FormControl<string | null | undefined>(undefined),
			poolType: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<string | null | undefined>(undefined),
			targetCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoolDefinitionInput {

		/** Required */
		dimensions: {[id: string]: string };

		/** Required */
		isEnabled: boolean;

		/** Required */
		location: AzureLocation;
		logicalSkus?: Array<string>;

		/** Required */
		subtype: ResourceSubtype;

		/** Required */
		targetCount: number;

		/** Required */
		type: ResourceType;
	}
	export interface PoolDefinitionInputFormProperties {

		/** Required */
		dimensions: FormControl<{[id: string]: string } | null | undefined>,

		/** Required */
		isEnabled: FormControl<boolean | null | undefined>,

		/** Required */
		location: FormControl<AzureLocation | null | undefined>,

		/** Required */
		subtype: FormControl<ResourceSubtype | null | undefined>,

		/** Required */
		targetCount: FormControl<number | null | undefined>,

		/** Required */
		type: FormControl<ResourceType | null | undefined>,
	}
	export function CreatePoolDefinitionInputFormGroup() {
		return new FormGroup<PoolDefinitionInputFormProperties>({
			dimensions: new FormControl<{[id: string]: string } | null | undefined>(undefined, [Validators.required]),
			isEnabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			location: new FormControl<AzureLocation | null | undefined>(undefined, [Validators.required]),
			subtype: new FormControl<ResourceSubtype | null | undefined>(undefined, [Validators.required]),
			targetCount: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<ResourceType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum ResourceSubtype { '0 (Default)' = '0 (Default)', '2 (ShrunkBlob)' = '2 (ShrunkBlob)', '3 (FullBlob)' = '3 (FullBlob)', '4 (UserParametersBlob)' = '4 (UserParametersBlob)', '5 (PrebuildHash)' = '5 (PrebuildHash)', '6 (VnetInjected)' = '6 (VnetInjected)' }

	export enum ResourceType { '1 (ComputeVM)' = '1 (ComputeVM)', '2 (StorageFileShare)' = '2 (StorageFileShare)', '3 (StorageArchive)' = '3 (StorageArchive)', '4 (KeyVault)' = '4 (KeyVault)', '5 (OSDisk)' = '5 (OSDisk)', '6 (NetworkInterface)' = '6 (NetworkInterface)', '7 (InputQueue)' = '7 (InputQueue)', '8 (Snapshot)' = '8 (Snapshot)', '9 (PoolQueue)' = '9 (PoolQueue)', '10 (VirtualNetwork)' = '10 (VirtualNetwork)', '11 (NetworkSecurityGroup)' = '11 (NetworkSecurityGroup)', '12 (LiveShareWorkspace)' = '12 (LiveShareWorkspace)', '13 (BasisTunnel)' = '13 (BasisTunnel)', '14 (StorageBlockBlob)' = '14 (StorageBlockBlob)', '15 (DataDisk)' = '15 (DataDisk)', '16 (PortForwardingWorkspace)' = '16 (PortForwardingWorkspace)' }

	export interface PoolGroupResult {
		displayName?: string | null;
		region?: AzureLocation;
		tags?: {[id: string]: string };
	}
	export interface PoolGroupResultFormProperties {
		displayName: FormControl<string | null | undefined>,
		region: FormControl<AzureLocation | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePoolGroupResultFormGroup() {
		return new FormGroup<PoolGroupResultFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			region: new FormControl<AzureLocation | null | undefined>(undefined),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface PoolResult {
		domainUserCredentials?: DomainUserCredentials;
		hotPoolSettings?: HotPoolSettings;

		/** Required */
		poolGroupName: string;
		provisioningStatus?: ProvisioningStatusResult;
		tags?: {[id: string]: string };
		userGroupName?: string | null;

		/** Required */
		vmSpecs: VMSpecs;
	}
	export interface PoolResultFormProperties {

		/** Required */
		poolGroupName: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
		userGroupName: FormControl<string | null | undefined>,
	}
	export function CreatePoolResultFormGroup() {
		return new FormGroup<PoolResultFormProperties>({
			poolGroupName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			userGroupName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProvisioningStatusResult {
		completedSteps?: number | null;
		currentStepDescription?: string | null;
		isReady?: boolean | null;
		operationStartedTimeUtc?: string | null;
		totalSteps?: number | null;
	}
	export interface ProvisioningStatusResultFormProperties {
		completedSteps: FormControl<number | null | undefined>,
		currentStepDescription: FormControl<string | null | undefined>,
		isReady: FormControl<boolean | null | undefined>,
		operationStartedTimeUtc: FormControl<string | null | undefined>,
		totalSteps: FormControl<number | null | undefined>,
	}
	export function CreateProvisioningStatusResultFormGroup() {
		return new FormGroup<ProvisioningStatusResultFormProperties>({
			completedSteps: new FormControl<number | null | undefined>(undefined),
			currentStepDescription: new FormControl<string | null | undefined>(undefined),
			isReady: new FormControl<boolean | null | undefined>(undefined),
			operationStartedTimeUtc: new FormControl<string | null | undefined>(undefined),
			totalSteps: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PoolSettingsBody {
		branchName?: string | null;
		devContainerPath?: string | null;
		pools?: Array<Pool>;
		repoId?: string | null;
		storageType?: StorageType;
		subscription?: string | null;
	}
	export interface PoolSettingsBodyFormProperties {
		branchName: FormControl<string | null | undefined>,
		devContainerPath: FormControl<string | null | undefined>,
		repoId: FormControl<string | null | undefined>,
		storageType: FormControl<StorageType | null | undefined>,
		subscription: FormControl<string | null | undefined>,
	}
	export function CreatePoolSettingsBodyFormGroup() {
		return new FormGroup<PoolSettingsBodyFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			devContainerPath: new FormControl<string | null | undefined>(undefined),
			repoId: new FormControl<string | null | undefined>(undefined),
			storageType: new FormControl<StorageType | null | undefined>(undefined),
			subscription: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PoolStatusResponseBody {
		allWithLatestVersion?: boolean | null;
		isEnvironmentPool?: boolean | null;
		location?: string | null;
		poolCode?: string | null;
		readyUnassignedCount?: number | null;
		readyUnassignedLatestVersionCount?: number | null;
		readyUnassignedNotLatestVersionAndIdleCount?: number | null;
		readyUnassignedNotLatestVersionCount?: number | null;
		resourceType?: string | null;
		sku?: string | null;
	}
	export interface PoolStatusResponseBodyFormProperties {
		allWithLatestVersion: FormControl<boolean | null | undefined>,
		isEnvironmentPool: FormControl<boolean | null | undefined>,
		location: FormControl<string | null | undefined>,
		poolCode: FormControl<string | null | undefined>,
		readyUnassignedCount: FormControl<number | null | undefined>,
		readyUnassignedLatestVersionCount: FormControl<number | null | undefined>,
		readyUnassignedNotLatestVersionAndIdleCount: FormControl<number | null | undefined>,
		readyUnassignedNotLatestVersionCount: FormControl<number | null | undefined>,
		resourceType: FormControl<string | null | undefined>,
		sku: FormControl<string | null | undefined>,
	}
	export function CreatePoolStatusResponseBodyFormGroup() {
		return new FormGroup<PoolStatusResponseBodyFormProperties>({
			allWithLatestVersion: new FormControl<boolean | null | undefined>(undefined),
			isEnvironmentPool: new FormControl<boolean | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			poolCode: new FormControl<string | null | undefined>(undefined),
			readyUnassignedCount: new FormControl<number | null | undefined>(undefined),
			readyUnassignedLatestVersionCount: new FormControl<number | null | undefined>(undefined),
			readyUnassignedNotLatestVersionAndIdleCount: new FormControl<number | null | undefined>(undefined),
			readyUnassignedNotLatestVersionCount: new FormControl<number | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
			sku: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrebuildReadinessResult {
		branchName?: string | null;
		devContainerPath?: string | null;
		location?: AzureLocation;
		poolSkus?: Array<string>;
		prebuildHash?: string | null;
		repoId?: string | null;
		supportedSkus?: Array<string>;
		templateSkus?: Array<string>;
	}
	export interface PrebuildReadinessResultFormProperties {
		branchName: FormControl<string | null | undefined>,
		devContainerPath: FormControl<string | null | undefined>,
		location: FormControl<AzureLocation | null | undefined>,
		prebuildHash: FormControl<string | null | undefined>,
		repoId: FormControl<string | null | undefined>,
	}
	export function CreatePrebuildReadinessResultFormGroup() {
		return new FormGroup<PrebuildReadinessResultFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			devContainerPath: new FormControl<string | null | undefined>(undefined),
			location: new FormControl<AzureLocation | null | undefined>(undefined),
			prebuildHash: new FormControl<string | null | undefined>(undefined),
			repoId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PrebuildTemplateInfoResult {
		branchName?: string | null;
		commitId?: string | null;
		devcontainerPath?: string | null;
		id?: string | null;
		isPrebuild?: boolean | null;
		lastUsedTime?: Date | null;
		logicalSkus?: Array<string>;
		prebuildConfigurationId?: string | null;
		prebuildHash?: string | null;
		repoId?: number | null;
		templateStatus?: string | null;
	}
	export interface PrebuildTemplateInfoResultFormProperties {
		branchName: FormControl<string | null | undefined>,
		commitId: FormControl<string | null | undefined>,
		devcontainerPath: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		isPrebuild: FormControl<boolean | null | undefined>,
		lastUsedTime: FormControl<Date | null | undefined>,
		prebuildConfigurationId: FormControl<string | null | undefined>,
		prebuildHash: FormControl<string | null | undefined>,
		repoId: FormControl<number | null | undefined>,
		templateStatus: FormControl<string | null | undefined>,
	}
	export function CreatePrebuildTemplateInfoResultFormGroup() {
		return new FormGroup<PrebuildTemplateInfoResultFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined),
			commitId: new FormControl<string | null | undefined>(undefined),
			devcontainerPath: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			isPrebuild: new FormControl<boolean | null | undefined>(undefined),
			lastUsedTime: new FormControl<Date | null | undefined>(undefined),
			prebuildConfigurationId: new FormControl<string | null | undefined>(undefined),
			prebuildHash: new FormControl<string | null | undefined>(undefined),
			repoId: new FormControl<number | null | undefined>(undefined),
			templateStatus: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProblemDetails {
		detail?: string | null;
		instance?: string | null;
		status?: number | null;
		title?: string | null;
		type?: string | null;
	}
	export interface ProblemDetailsFormProperties {
		detail: FormControl<string | null | undefined>,
		instance: FormControl<string | null | undefined>,
		status: FormControl<number | null | undefined>,
		title: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
	}
	export function CreateProblemDetailsFormGroup() {
		return new FormGroup<ProblemDetailsFormProperties>({
			detail: new FormControl<string | null | undefined>(undefined),
			instance: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProfileSpecifier {
		oid?: string | null;
		provider?: string | null;
		tid?: string | null;
	}
	export interface ProfileSpecifierFormProperties {
		oid: FormControl<string | null | undefined>,
		provider: FormControl<string | null | undefined>,
		tid: FormControl<string | null | undefined>,
	}
	export function CreateProfileSpecifierFormGroup() {
		return new FormGroup<ProfileSpecifierFormProperties>({
			oid: new FormControl<string | null | undefined>(undefined),
			provider: new FormControl<string | null | undefined>(undefined),
			tid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RPSubscriptionNotification {
		properties?: RPSubscriptionProperties;
		registrationDate?: Date | null;
		state?: string | null;
	}
	export interface RPSubscriptionNotificationFormProperties {
		registrationDate: FormControl<Date | null | undefined>,
		state: FormControl<string | null | undefined>,
	}
	export function CreateRPSubscriptionNotificationFormGroup() {
		return new FormGroup<RPSubscriptionNotificationFormProperties>({
			registrationDate: new FormControl<Date | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RPSubscriptionProperties {
		accountOwner?: SubscriptionAccountOwner;
		additionalProperties?: SubscriptionAdditionalProperties;
		locationPlacementId?: string | null;
		managedByTenants?: Array<StringStringKeyValuePair>;
		quotaId?: string | null;
		registeredFeatures?: Array<StringStringKeyValuePair>;
		tenantId?: string | null;
	}
	export interface RPSubscriptionPropertiesFormProperties {
		locationPlacementId: FormControl<string | null | undefined>,
		quotaId: FormControl<string | null | undefined>,
		tenantId: FormControl<string | null | undefined>,
	}
	export function CreateRPSubscriptionPropertiesFormGroup() {
		return new FormGroup<RPSubscriptionPropertiesFormProperties>({
			locationPlacementId: new FormControl<string | null | undefined>(undefined),
			quotaId: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionAccountOwner {
		email?: string | null;
		puid?: string | null;
	}
	export interface SubscriptionAccountOwnerFormProperties {
		email: FormControl<string | null | undefined>,
		puid: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionAccountOwnerFormGroup() {
		return new FormGroup<SubscriptionAccountOwnerFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			puid: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SubscriptionAdditionalProperties {
		billingProperties?: BillingProperties;
		resourceProviderProperties?: string | null;
	}
	export interface SubscriptionAdditionalPropertiesFormProperties {
		resourceProviderProperties: FormControl<string | null | undefined>,
	}
	export function CreateSubscriptionAdditionalPropertiesFormGroup() {
		return new FormGroup<SubscriptionAdditionalPropertiesFormProperties>({
			resourceProviderProperties: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface StringStringKeyValuePair {
		key?: string | null;
		value?: string | null;
	}
	export interface StringStringKeyValuePairFormProperties {
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateStringStringKeyValuePairFormGroup() {
		return new FormGroup<StringStringKeyValuePairFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RefreshProfileTelemetryPropertiesRequest {
		partner?: string | null;
		tenantId?: string | null;
		userIds?: string | null;
	}
	export interface RefreshProfileTelemetryPropertiesRequestFormProperties {
		partner: FormControl<string | null | undefined>,
		tenantId: FormControl<string | null | undefined>,
		userIds: FormControl<string | null | undefined>,
	}
	export function CreateRefreshProfileTelemetryPropertiesRequestFormGroup() {
		return new FormGroup<RefreshProfileTelemetryPropertiesRequestFormProperties>({
			partner: new FormControl<string | null | undefined>(undefined),
			tenantId: new FormControl<string | null | undefined>(undefined),
			userIds: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface RefreshProfileTelemetryPropertiesResponse {
		failed?: Array<ProfileSpecifier>;
		succeeded?: Array<ProfileSpecifier>;
	}
	export interface RefreshProfileTelemetryPropertiesResponseFormProperties {
	}
	export function CreateRefreshProfileTelemetryPropertiesResponseFormGroup() {
		return new FormGroup<RefreshProfileTelemetryPropertiesResponseFormProperties>({
		});

	}

	export interface ReplayBillRequestBody {
		endTime?: Date | null;
		startTime?: Date | null;
	}
	export interface ReplayBillRequestBodyFormProperties {
		endTime: FormControl<Date | null | undefined>,
		startTime: FormControl<Date | null | undefined>,
	}
	export function CreateReplayBillRequestBodyFormGroup() {
		return new FormGroup<ReplayBillRequestBodyFormProperties>({
			endTime: new FormControl<Date | null | undefined>(undefined),
			startTime: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface ScopedCreateSecretBody {
		filters?: Array<SecretFilterBody>;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		notes?: string | null;
		scope?: SecretScope;
		secretName?: string | null;
		type?: SecretType;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		value?: string | null;
	}
	export interface ScopedCreateSecretBodyFormProperties {

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		notes: FormControl<string | null | undefined>,
		scope: FormControl<SecretScope | null | undefined>,
		secretName: FormControl<string | null | undefined>,
		type: FormControl<SecretType | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateScopedCreateSecretBodyFormGroup() {
		return new FormGroup<ScopedCreateSecretBodyFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			scope: new FormControl<SecretScope | null | undefined>(undefined),
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?!CLOUDENV.*$)[a-zA-Z_][a-zA-Z0-9_]{0,199}$')]),
			type: new FormControl<SecretType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}

	export interface SecretFilterBody {
		type?: SecretFilterType;

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		value?: string | null;
	}
	export interface SecretFilterBodyFormProperties {
		type: FormControl<SecretFilterType | null | undefined>,

		/**
		 * Max length: 200
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateSecretFilterBodyFormGroup() {
		return new FormGroup<SecretFilterBodyFormProperties>({
			type: new FormControl<SecretFilterType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(200)]),
		});

	}

	export enum SecretFilterType { '1 (GitRepo)' = '1 (GitRepo)', '2 (CodespaceName)' = '2 (CodespaceName)' }

	export enum SecretScope { '1 (Plan)' = '1 (Plan)', '2 (User)' = '2 (User)' }

	export interface ScopedSecretResultBody {
		filters?: Array<SecretFilterBody>;
		id?: string | null;
		lastModified?: Date | null;
		notes?: string | null;
		scope?: SecretScope;
		secretName?: string | null;
		type?: SecretType;
	}
	export interface ScopedSecretResultBodyFormProperties {
		id: FormControl<string | null | undefined>,
		lastModified: FormControl<Date | null | undefined>,
		notes: FormControl<string | null | undefined>,
		scope: FormControl<SecretScope | null | undefined>,
		secretName: FormControl<string | null | undefined>,
		type: FormControl<SecretType | null | undefined>,
	}
	export function CreateScopedSecretResultBodyFormGroup() {
		return new FormGroup<ScopedSecretResultBodyFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			lastModified: new FormControl<Date | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			scope: new FormControl<SecretScope | null | undefined>(undefined),
			secretName: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SecretType | null | undefined>(undefined),
		});

	}

	export interface ScopedUpdateSecretBody {
		filters?: Array<SecretFilterBody>;

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		notes?: string | null;
		scope?: SecretScope;
		secretName?: string | null;

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		value?: string | null;
	}
	export interface ScopedUpdateSecretBodyFormProperties {

		/**
		 * Max length: 200
		 * Min length: 0
		 */
		notes: FormControl<string | null | undefined>,
		scope: FormControl<SecretScope | null | undefined>,
		secretName: FormControl<string | null | undefined>,

		/**
		 * Max length: 65536
		 * Min length: 1
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateScopedUpdateSecretBodyFormGroup() {
		return new FormGroup<ScopedUpdateSecretBodyFormProperties>({
			notes: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(200)]),
			scope: new FormControl<SecretScope | null | undefined>(undefined),
			secretName: new FormControl<string | null | undefined>(undefined, [Validators.pattern('^(?!CLOUDENV.*$)[a-zA-Z_][a-zA-Z0-9_]{0,199}$')]),
			value: new FormControl<string | null | undefined>(undefined, [Validators.minLength(1), Validators.maxLength(65536)]),
		});

	}

	export interface SystemConfigurationResponse {
		comment?: string | null;
		key?: string | null;
		value?: string | null;
	}
	export interface SystemConfigurationResponseFormProperties {
		comment: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateSystemConfigurationResponseFormGroup() {
		return new FormGroup<SystemConfigurationResponseFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TelemetryData {
		level?: string | null;
		message?: string | null;
		optionalValues?: {[id: string]: string };
		time?: string | null;
	}
	export interface TelemetryDataFormProperties {
		level: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		optionalValues: FormControl<{[id: string]: string } | null | undefined>,
		time: FormControl<string | null | undefined>,
	}
	export function CreateTelemetryDataFormGroup() {
		return new FormGroup<TelemetryDataFormProperties>({
			level: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			optionalValues: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TenantInfoResult {
		id?: string | null;
	}
	export interface TenantInfoResultFormProperties {
		id: FormControl<string | null | undefined>,
	}
	export function CreateTenantInfoResultFormGroup() {
		return new FormGroup<TenantInfoResultFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TunnelPortInfoResult {
		portVisibility?: string | null;
		tunnelToken?: string | null;
	}
	export interface TunnelPortInfoResultFormProperties {
		portVisibility: FormControl<string | null | undefined>,
		tunnelToken: FormControl<string | null | undefined>,
	}
	export function CreateTunnelPortInfoResultFormGroup() {
		return new FormGroup<TunnelPortInfoResultFormProperties>({
			portVisibility: new FormControl<string | null | undefined>(undefined),
			tunnelToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UnderInvestigationResponseBody {
		investigationStarted?: Date | null;
		resourceId?: string | null;
		underInvestigation?: boolean | null;
		updated?: boolean | null;
	}
	export interface UnderInvestigationResponseBodyFormProperties {
		investigationStarted: FormControl<Date | null | undefined>,
		resourceId: FormControl<string | null | undefined>,
		underInvestigation: FormControl<boolean | null | undefined>,
		updated: FormControl<boolean | null | undefined>,
	}
	export function CreateUnderInvestigationResponseBodyFormGroup() {
		return new FormGroup<UnderInvestigationResponseBodyFormProperties>({
			investigationStarted: new FormControl<Date | null | undefined>(undefined),
			resourceId: new FormControl<string | null | undefined>(undefined),
			underInvestigation: new FormControl<boolean | null | undefined>(undefined),
			updated: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface UnfilteredCloudEnvironmentResult {
		accessToken?: string | null;
		active?: Date | null;
		autoShutdownDelayMinutes?: number | null;
		billableOwnerType?: BillableOwnerType;
		clientUsage?: ClientUsageSession;
		connection?: ConnectionInfoBody;
		container?: ContainerInfoBody;
		containerImage?: string | null;
		createFromPrebuild?: boolean | null;
		created?: Date | null;
		displayStorageUtilizationInKb?: boolean | null;
		exportedBlobUrl?: string | null;
		failoverDetails?: FailoverDetails;
		features?: {[id: string]: string };
		friendlyName?: string | null;
		gitStatus?: GitStatus;
		id?: string | null;
		lastStateUpdateReason?: string | null;
		lastUsed?: Date | null;
		location?: string | null;
		organizationId?: string | null;
		ownerId?: string | null;
		planId?: string | null;
		platform?: string | null;
		portForwardingConnection?: ConnectionInfoBody;
		prebuildType?: string | null;
		recentFolders?: Array<string>;
		resourceTier?: ConsumerType;
		runtimeConstraints?: RuntimeConstraintsBody;
		seed?: SeedInfoBody;
		skuDisplayName?: string | null;
		skuName?: string | null;
		state?: string | null;
		storageUtilizationInKb?: number | null;
		subscriptionData?: SubscriptionData;
		templateStatus?: string | null;
		type?: string | null;
		updated?: Date | null;
	}
	export interface UnfilteredCloudEnvironmentResultFormProperties {
		accessToken: FormControl<string | null | undefined>,
		active: FormControl<Date | null | undefined>,
		autoShutdownDelayMinutes: FormControl<number | null | undefined>,
		billableOwnerType: FormControl<BillableOwnerType | null | undefined>,
		containerImage: FormControl<string | null | undefined>,
		createFromPrebuild: FormControl<boolean | null | undefined>,
		created: FormControl<Date | null | undefined>,
		displayStorageUtilizationInKb: FormControl<boolean | null | undefined>,
		exportedBlobUrl: FormControl<string | null | undefined>,
		features: FormControl<{[id: string]: string } | null | undefined>,
		friendlyName: FormControl<string | null | undefined>,
		id: FormControl<string | null | undefined>,
		lastStateUpdateReason: FormControl<string | null | undefined>,
		lastUsed: FormControl<Date | null | undefined>,
		location: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
		ownerId: FormControl<string | null | undefined>,
		planId: FormControl<string | null | undefined>,
		platform: FormControl<string | null | undefined>,
		prebuildType: FormControl<string | null | undefined>,
		resourceTier: FormControl<ConsumerType | null | undefined>,
		skuDisplayName: FormControl<string | null | undefined>,
		skuName: FormControl<string | null | undefined>,
		state: FormControl<string | null | undefined>,
		storageUtilizationInKb: FormControl<number | null | undefined>,
		templateStatus: FormControl<string | null | undefined>,
		type: FormControl<string | null | undefined>,
		updated: FormControl<Date | null | undefined>,
	}
	export function CreateUnfilteredCloudEnvironmentResultFormGroup() {
		return new FormGroup<UnfilteredCloudEnvironmentResultFormProperties>({
			accessToken: new FormControl<string | null | undefined>(undefined),
			active: new FormControl<Date | null | undefined>(undefined),
			autoShutdownDelayMinutes: new FormControl<number | null | undefined>(undefined),
			billableOwnerType: new FormControl<BillableOwnerType | null | undefined>(undefined),
			containerImage: new FormControl<string | null | undefined>(undefined),
			createFromPrebuild: new FormControl<boolean | null | undefined>(undefined),
			created: new FormControl<Date | null | undefined>(undefined),
			displayStorageUtilizationInKb: new FormControl<boolean | null | undefined>(undefined),
			exportedBlobUrl: new FormControl<string | null | undefined>(undefined),
			features: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			lastStateUpdateReason: new FormControl<string | null | undefined>(undefined),
			lastUsed: new FormControl<Date | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
			ownerId: new FormControl<string | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
			platform: new FormControl<string | null | undefined>(undefined),
			prebuildType: new FormControl<string | null | undefined>(undefined),
			resourceTier: new FormControl<ConsumerType | null | undefined>(undefined),
			skuDisplayName: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<string | null | undefined>(undefined),
			storageUtilizationInKb: new FormControl<number | null | undefined>(undefined),
			templateStatus: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updated: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface UpdateCloudEnvironmentBody {
		autoShutdownDelayMinutes?: number | null;
		failoverDetails?: FailoverDetails;
		friendlyName?: string | null;
		planAccessToken?: string | null;
		planId?: string | null;
		skuName?: string | null;
	}
	export interface UpdateCloudEnvironmentBodyFormProperties {
		autoShutdownDelayMinutes: FormControl<number | null | undefined>,
		friendlyName: FormControl<string | null | undefined>,
		planAccessToken: FormControl<string | null | undefined>,
		planId: FormControl<string | null | undefined>,
		skuName: FormControl<string | null | undefined>,
	}
	export function CreateUpdateCloudEnvironmentBodyFormGroup() {
		return new FormGroup<UpdateCloudEnvironmentBodyFormProperties>({
			autoShutdownDelayMinutes: new FormControl<number | null | undefined>(undefined),
			friendlyName: new FormControl<string | null | undefined>(undefined),
			planAccessToken: new FormControl<string | null | undefined>(undefined),
			planId: new FormControl<string | null | undefined>(undefined),
			skuName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdatePoolGroupBody {

		/** Required */
		displayName: string;
		tags?: {[id: string]: string };
	}
	export interface UpdatePoolGroupBodyFormProperties {

		/** Required */
		displayName: FormControl<string | null | undefined>,
		tags: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateUpdatePoolGroupBodyFormGroup() {
		return new FormGroup<UpdatePoolGroupBodyFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export interface UpdatePrebuildTemplateBody {

		/** Required */
		isSuccess: boolean;
	}
	export interface UpdatePrebuildTemplateBodyFormProperties {

		/** Required */
		isSuccess: FormControl<boolean | null | undefined>,
	}
	export function CreateUpdatePrebuildTemplateBodyFormGroup() {
		return new FormGroup<UpdatePrebuildTemplateBodyFormProperties>({
			isSuccess: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdatePrebuildTemplateVersionsBody {

		/** Required */
		branchName: string;
		devContainerPath?: string | null;

		/** Required */
		maxPrebuildTemplateVersions: number;

		/** Required */
		repoId: number;
	}
	export interface UpdatePrebuildTemplateVersionsBodyFormProperties {

		/** Required */
		branchName: FormControl<string | null | undefined>,
		devContainerPath: FormControl<string | null | undefined>,

		/** Required */
		maxPrebuildTemplateVersions: FormControl<number | null | undefined>,

		/** Required */
		repoId: FormControl<number | null | undefined>,
	}
	export function CreateUpdatePrebuildTemplateVersionsBodyFormGroup() {
		return new FormGroup<UpdatePrebuildTemplateVersionsBodyFormProperties>({
			branchName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			devContainerPath: new FormControl<string | null | undefined>(undefined),
			maxPrebuildTemplateVersions: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			repoId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UpdateSystemConfigurationBody {
		comment?: string | null;
		key?: string | null;
		value?: string | null;
	}
	export interface UpdateSystemConfigurationBodyFormProperties {
		comment: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSystemConfigurationBodyFormGroup() {
		return new FormGroup<UpdateSystemConfigurationBodyFormProperties>({
			comment: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateUserSecretsRequestBody {
		secrets?: Array<SecretDataBody>;
	}
	export interface UpdateUserSecretsRequestBodyFormProperties {
	}
	export function CreateUpdateUserSecretsRequestBodyFormGroup() {
		return new FormGroup<UpdateUserSecretsRequestBodyFormProperties>({
		});

	}

	export interface VMConnectionInfo {
		connectionType?: VMConnectionType;
		liveShareWorkspaceId?: string | null;
	}
	export interface VMConnectionInfoFormProperties {
		connectionType: FormControl<VMConnectionType | null | undefined>,
		liveShareWorkspaceId: FormControl<string | null | undefined>,
	}
	export function CreateVMConnectionInfoFormGroup() {
		return new FormGroup<VMConnectionInfoFormProperties>({
			connectionType: new FormControl<VMConnectionType | null | undefined>(undefined),
			liveShareWorkspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VMConnectionType { '0 (LiveShare)' = '0 (LiveShare)', '1 (WVD)' = '1 (WVD)' }

	export interface VMResult {
		connection?: VMConnectionInfo;
		provisioningStatus?: ProvisioningStatusResult;
		status?: VMStatus;
	}
	export interface VMResultFormProperties {
		status: FormControl<VMStatus | null | undefined>,
	}
	export function CreateVMResultFormGroup() {
		return new FormGroup<VMResultFormProperties>({
			status: new FormControl<VMStatus | null | undefined>(undefined),
		});

	}

	export enum VMStatus { '0 (Provisioning)' = '0 (Provisioning)', '1 (Ready)' = '1 (Ready)', '2 (Stopped)' = '2 (Stopped)', '3 (Deleted)' = '3 (Deleted)' }

	export interface VmLogsUploadInfo {
		containerName?: string | null;
		message?: string | null;
		pathInContainer?: string | null;
		storageUri?: string | null;
		vmResourceId?: string | null;
	}
	export interface VmLogsUploadInfoFormProperties {
		containerName: FormControl<string | null | undefined>,
		message: FormControl<string | null | undefined>,
		pathInContainer: FormControl<string | null | undefined>,
		storageUri: FormControl<string | null | undefined>,
		vmResourceId: FormControl<string | null | undefined>,
	}
	export function CreateVmLogsUploadInfoFormGroup() {
		return new FormGroup<VmLogsUploadInfoFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			pathInContainer: new FormControl<string | null | undefined>(undefined),
			storageUri: new FormControl<string | null | undefined>(undefined),
			vmResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Post api/v1/AgentTelemetry
		 * @return {void} 
		 */
		ApiV1AgentTelemetryPost(requestBody: Array<TelemetryData>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/AgentTelemetry', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/AgentTelemetry/standalone
		 * @return {void} 
		 */
		ApiV1AgentTelemetryStandalonePost(requestBody: Array<TelemetryData>, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/AgentTelemetry/standalone', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/Agents/{family}
		 * @return {AgentResponse} Success
		 */
		ApiV1Agents_familyGet(family: string, headersHandler?: () => HttpHeaders): Observable<AgentResponse> {
			return this.http.get<AgentResponse>(this.baseUri + 'api/v1/Agents/' + (family == null ? '' : encodeURIComponent(family)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/v1/Environments
		 * @return {Array<CloudEnvironmentResult>} Success
		 */
		ApiV1EnvironmentsGetByNameAndPlanIdAndDeleted(name: string | null | undefined, planId: string | null | undefined, deleted: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<CloudEnvironmentResult>> {
			return this.http.get<Array<CloudEnvironmentResult>>(this.baseUri + 'api/v1/Environments?name=' + (name == null ? '' : encodeURIComponent(name)) + '&planId=' + (planId == null ? '' : encodeURIComponent(planId)) + '&deleted=' + deleted, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/Environments
		 * @return {void} 
		 */
		ApiV1EnvironmentsPostByAccess(access: boolean | null | undefined, requestBody: CreateCloudEnvironmentBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/Environments?access=' + access, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete api/v1/Environments/{environmentId}
		 * @return {void} 
		 */
		ApiV1Environments_environmentIdDelete(environmentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/Environments/{environmentId}
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentIdGetByConnectAndPfConnectAndDeleted(environmentId: string, connect: boolean | null | undefined, pfConnect: boolean | null | undefined, deleted: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.get<CloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '&connect=' + connect + '&pfConnect=' + pfConnect + '&deleted=' + deleted, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch api/v1/Environments/{environmentId}
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentIdPatch(environmentId: string, requestBody: UpdateCloudEnvironmentBody, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.patch<CloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/v1/Environments/{environmentId}/_callback
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentId_callbackPost(environmentId: string, requestBody: EnvironmentRegistrationCallbackBody, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.post<CloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/_callback', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/v1/Environments/{environmentId}/archive
		 * @return {UnfilteredCloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentIdArchiveGet(environmentId: string, headersHandler?: () => HttpHeaders): Observable<UnfilteredCloudEnvironmentResult> {
			return this.http.get<UnfilteredCloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/archive', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/Environments/{environmentId}/archive
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentIdArchivePost(environmentId: string, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.post<CloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/archive', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/Environments/{environmentId}/export
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentIdExportPost(environmentId: string, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.post<CloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/export', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch api/v1/Environments/{environmentId}/folder
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentIdFolderPatch(environmentId: string, requestBody: CloudEnvironmentFolderBody, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.patch<CloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/folder', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/v1/Environments/{environmentId}/heartbeattoken
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentIdHeartbeattokenGet(environmentId: string, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.get<CloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/heartbeattoken', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/Environments/{environmentId}/notify
		 * @return {string} Success
		 */
		ApiV1Environments_environmentIdNotifyPost(environmentId: string, requestBody: NotificationDataBody, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.post(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/notify', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }),  responseType: 'text' });
		}

		/**
		 * Delete api/v1/Environments/{environmentId}/ports/{port}
		 * @return {void} Success
		 */
		ApiV1Environments_environmentIdPorts_portDelete(environmentId: string, port: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/ports/' + port, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/Environments/{environmentId}/ports/{port}
		 * @return {void} Success
		 */
		ApiV1Environments_environmentIdPorts_portPut(environmentId: string, port: number, requestBody: AddForwardedPortSettings, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/ports/' + port, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch api/v1/Environments/{environmentId}/restore
		 * @return {void} Success
		 */
		ApiV1Environments_environmentIdRestorePatch(environmentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/restore', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/Environments/{environmentId}/secrets
		 * @return {void} 
		 */
		ApiV1Environments_environmentIdSecretsPut(environmentId: string, requestBody: UpdateUserSecretsRequestBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/secrets', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/Environments/{environmentId}/shutdown
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentIdShutdownPost(environmentId: string, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.post<CloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/shutdown', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/Environments/{environmentId}/start
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentIdStartPostByAccess(environmentId: string, access: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.post<CloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/start&access=' + access, null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/v1/Environments/{environmentId}/state
		 * @return {void} Success
		 */
		ApiV1Environments_environmentIdStateGet(environmentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/state', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/Environments/{environmentId}/updates
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1Environments_environmentIdUpdatesGet(environmentId: string, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.get<CloudEnvironmentResult>(this.baseUri + 'api/v1/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/updates', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/GenevaActions/Billing/resend
		 * @return {BillSummary} Success
		 */
		ApiV1GenevaActionsBillingResendPost(requestBody: ReplayBillRequestBody, headersHandler?: () => HttpHeaders): Observable<BillSummary> {
			return this.http.post<BillSummary>(this.baseUri + 'api/v1/GenevaActions/Billing/resend', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get api/v1/GenevaActions/Billing/{environmentId}
		 * @return {BillSummary} Success
		 */
		ApiV1GenevaActionsBilling_environmentIdGetByStartTimeAndEndTime(environmentId: string, startTime: string | null | undefined, endTime: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<BillSummary> {
			return this.http.get<BillSummary>(this.baseUri + 'api/v1/GenevaActions/Billing/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '&startTime=' + (startTime == null ? '' : encodeURIComponent(startTime)) + '&endTime=' + (endTime == null ? '' : encodeURIComponent(endTime)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/v1/GenevaActions/Billing/{environmentId}/state-changes
		 * @return {EnvironmentStateChange} Success
		 */
		ApiV1GenevaActionsBilling_environmentIdState_changesGet(environmentId: string, headersHandler?: () => HttpHeaders): Observable<EnvironmentStateChange> {
			return this.http.get<EnvironmentStateChange>(this.baseUri + 'api/v1/GenevaActions/Billing/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/state-changes', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/GenevaActions/Billing/{environmentId}/state-changes
		 * @return {EnvironmentStateChange} Success
		 */
		ApiV1GenevaActionsBilling_environmentIdState_changesPost(environmentId: string, requestBody: CreateEnvironmentStateChangeBody, headersHandler?: () => HttpHeaders): Observable<EnvironmentStateChange> {
			return this.http.post<EnvironmentStateChange>(this.baseUri + 'api/v1/GenevaActions/Billing/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/state-changes', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/v1/GenevaActions/Configuration/{target}
		 * @return {SystemConfigurationResponse} Success
		 */
		ApiV1GenevaActionsConfiguration_targetPost(target: string, requestBody: UpdateSystemConfigurationBody, headersHandler?: () => HttpHeaders): Observable<SystemConfigurationResponse> {
			return this.http.post<SystemConfigurationResponse>(this.baseUri + 'api/v1/GenevaActions/Configuration/' + (target == null ? '' : encodeURIComponent(target)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/v1/GenevaActions/Configuration/{target}/{key}
		 * @return {void} Success
		 */
		ApiV1GenevaActionsConfiguration_target_keyDelete(target: string, key: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/GenevaActions/Configuration/' + (target == null ? '' : encodeURIComponent(target)) + '/' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/GenevaActions/Configuration/{target}/{key}
		 * @return {SystemConfigurationResponse} Success
		 */
		ApiV1GenevaActionsConfiguration_target_keyGet(target: string, key: string, headersHandler?: () => HttpHeaders): Observable<SystemConfigurationResponse> {
			return this.http.get<SystemConfigurationResponse>(this.baseUri + 'api/v1/GenevaActions/Configuration/' + (target == null ? '' : encodeURIComponent(target)) + '/' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/v1/GenevaActions/Environments/storage/{environmentIdOrFriendlyName}/{targetBlob}
		 * @return {string} Success
		 */
		ApiV1GenevaActionsEnvironmentsStorage_environmentIdOrFriendlyName_targetBlobGet(environmentIdOrFriendlyName: string, targetBlob: string, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'api/v1/GenevaActions/Environments/storage/' + (environmentIdOrFriendlyName == null ? '' : encodeURIComponent(environmentIdOrFriendlyName)) + '/' + (targetBlob == null ? '' : encodeURIComponent(targetBlob)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Delete api/v1/GenevaActions/Environments/{environmentId}
		 * @return {void} 
		 */
		ApiV1GenevaActionsEnvironments_environmentIdDeleteByDeletionType(environmentId: string, deletionType: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/GenevaActions/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '&deletionType=' + (deletionType == null ? '' : encodeURIComponent(deletionType)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/GenevaActions/Environments/{environmentId}
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1GenevaActionsEnvironments_environmentIdGet(environmentId: string, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.get<CloudEnvironmentResult>(this.baseUri + 'api/v1/GenevaActions/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/v1/GenevaActions/Environments/{environmentId}/archive
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1GenevaActionsEnvironments_environmentIdArchivePut(environmentId: string, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.put<CloudEnvironmentResult>(this.baseUri + 'api/v1/GenevaActions/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/archive', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/v1/GenevaActions/Environments/{environmentId}/shutdown
		 * @return {CloudEnvironmentResult} Success
		 */
		ApiV1GenevaActionsEnvironments_environmentIdShutdownPut(environmentId: string, headersHandler?: () => HttpHeaders): Observable<CloudEnvironmentResult> {
			return this.http.put<CloudEnvironmentResult>(this.baseUri + 'api/v1/GenevaActions/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/shutdown', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/GenevaActions/Environments/{environmentId}/upload/running/vm/logs
		 * @return {VmLogsUploadInfo} Success
		 */
		ApiV1GenevaActionsEnvironments_environmentIdUploadRunningVmLogsPost(environmentId: string, headersHandler?: () => HttpHeaders): Observable<VmLogsUploadInfo> {
			return this.http.post<VmLogsUploadInfo>(this.baseUri + 'api/v1/GenevaActions/Environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/upload/running/vm/logs', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/GenevaActions/Pools/change-resource-deletion-setting
		 * @return {SystemConfigurationResponse} Success
		 */
		ApiV1GenevaActionsPoolsChange_resource_deletion_settingPost(requestBody: ChangeResourceDeletionRequestBody, headersHandler?: () => HttpHeaders): Observable<SystemConfigurationResponse> {
			return this.http.post<SystemConfigurationResponse>(this.baseUri + 'api/v1/GenevaActions/Pools/change-resource-deletion-setting', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/v1/GenevaActions/Pools/{poolCode}/rotate-pool
		 * @return {void} Success
		 */
		ApiV1GenevaActionsPools_poolCodeRotate_poolPost(poolCode: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/GenevaActions/Pools/' + (poolCode == null ? '' : encodeURIComponent(poolCode)) + '/rotate-pool', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/GenevaActions/Pools/{target}
		 * @return {SystemConfigurationResponse} Success
		 */
		ApiV1GenevaActionsPools_targetPost(target: string, requestBody: PoolConfigRequestBody, headersHandler?: () => HttpHeaders): Observable<SystemConfigurationResponse> {
			return this.http.post<SystemConfigurationResponse>(this.baseUri + 'api/v1/GenevaActions/Pools/' + (target == null ? '' : encodeURIComponent(target)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings
		 * @return {void} 
		 */
		ApiV1GenevaActionsPrebuildsPoolsCreateorupdatesettingsPost(requestBody: PoolSettingsBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/GenevaActions/Prebuilds/pools/createorupdatesettings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/GenevaActions/Prebuilds/pools/delete
		 * @return {void} 
		 */
		ApiV1GenevaActionsPrebuildsPoolsDeletePost(requestBody: PoolSettingsBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/GenevaActions/Prebuilds/pools/delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties
		 * @return {RefreshProfileTelemetryPropertiesResponse} Success
		 */
		ApiV1GenevaActionsPrivacyRefresh_profile_telemetry_propertiesPost(requestBody: RefreshProfileTelemetryPropertiesRequest, headersHandler?: () => HttpHeaders): Observable<RefreshProfileTelemetryPropertiesResponse> {
			return this.http.post<RefreshProfileTelemetryPropertiesResponse>(this.baseUri + 'api/v1/GenevaActions/Privacy/refresh-profile-telemetry-properties', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/v1/GenevaActions/Resources/{resourceId}/under-investigation
		 * @return {UnderInvestigationResponseBody} Success
		 */
		ApiV1GenevaActionsResources_resourceIdUnder_investigationPost(resourceId: string, headersHandler?: () => HttpHeaders): Observable<UnderInvestigationResponseBody> {
			return this.http.post<UnderInvestigationResponseBody>(this.baseUri + 'api/v1/GenevaActions/Resources/' + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/under-investigation', null, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/v1/GenevaActions/VnetPoolDefinitions
		 * @return {void} Success
		 */
		ApiV1GenevaActionsVnetPoolDefinitionsDelete(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/GenevaActions/VnetPoolDefinitions', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/GenevaActions/VnetPoolDefinitions
		 * @return {void} Success
		 */
		ApiV1GenevaActionsVnetPoolDefinitionsPost(requestBody: PoolDefinitionInput, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/GenevaActions/VnetPoolDefinitions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/HeartBeat
		 * @return {void} 
		 */
		ApiV1HeartBeatPost(requestBody: HeartBeatBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/HeartBeat', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/Locations
		 * @return {LocationsResult} Success
		 */
		ApiV1LocationsGet(headersHandler?: () => HttpHeaders): Observable<LocationsResult> {
			return this.http.get<LocationsResult>(this.baseUri + 'api/v1/Locations', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/v1/Locations/{location}
		 * @return {LocationInfoResult} Success
		 */
		ApiV1Locations_locationGetByPlanId(location: string, planId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<LocationInfoResult> {
			return this.http.get<LocationInfoResult>(this.baseUri + 'api/v1/Locations/' + (location == null ? '' : encodeURIComponent(location)) + '&planId=' + (planId == null ? '' : encodeURIComponent(planId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/Prebuilds/pools/{poolId}/instances
		 * @return {void} 
		 */
		ApiV1PrebuildsPools_poolIdInstancesPost(poolId: string, requestBody: CreateEnvironmentPoolResourceBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/Prebuilds/pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/instances', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/Prebuilds/pools/{poolId}/instances
		 * @return {void} 
		 */
		ApiV1PrebuildsPools_poolIdInstancesPut(poolId: string, requestBody: CreateEnvironmentPoolResourceBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/Prebuilds/pools/' + (poolId == null ? '' : encodeURIComponent(poolId)) + '/instances', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/Prebuilds/template/{environmentId}
		 * @return {PrebuildTemplateInfoResult} Success
		 */
		ApiV1PrebuildsTemplate_environmentIdGet(environmentId: string, headersHandler?: () => HttpHeaders): Observable<PrebuildTemplateInfoResult> {
			return this.http.get<PrebuildTemplateInfoResult>(this.baseUri + 'api/v1/Prebuilds/template/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/v1/Sas
		 * @return {Array<ScopedSecretResultBody>} Success
		 */
		ApiV1SasGet(headersHandler?: () => HttpHeaders): Observable<Array<ScopedSecretResultBody>> {
			return this.http.get<Array<ScopedSecretResultBody>>(this.baseUri + 'api/v1/Sas', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get api/v1/Secrets
		 * @return {Array<ScopedSecretResultBody>} Success
		 */
		ApiV1SecretsGetByPlanId(planId: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<ScopedSecretResultBody>> {
			return this.http.get<Array<ScopedSecretResultBody>>(this.baseUri + 'api/v1/Secrets?planId=' + (planId == null ? '' : encodeURIComponent(planId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v1/Secrets
		 * @return {ScopedSecretResultBody} Success
		 */
		ApiV1SecretsPostByPlanId(planId: string | null | undefined, requestBody: ScopedCreateSecretBody, headersHandler?: () => HttpHeaders): Observable<ScopedSecretResultBody> {
			return this.http.post<ScopedSecretResultBody>(this.baseUri + 'api/v1/Secrets?planId=' + (planId == null ? '' : encodeURIComponent(planId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/v1/Secrets/{secretId}
		 * @return {void} 
		 */
		ApiV1Secrets_secretIdDeleteByPlanIdAndScope(planId: string | null | undefined, scope: SecretScope | null | undefined, secretId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/Secrets/' + (secretId == null ? '' : encodeURIComponent(secretId)) + '?planId=' + (planId == null ? '' : encodeURIComponent(planId)) + '&scope=' + scope, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/Secrets/{secretId}
		 * @return {ScopedSecretResultBody} Success
		 */
		ApiV1Secrets_secretIdPutByPlanId(planId: string | null | undefined, secretId: string, requestBody: ScopedUpdateSecretBody, headersHandler?: () => HttpHeaders): Observable<ScopedSecretResultBody> {
			return this.http.put<ScopedSecretResultBody>(this.baseUri + 'api/v1/Secrets/' + (secretId == null ? '' : encodeURIComponent(secretId)) + '?planId=' + (planId == null ? '' : encodeURIComponent(planId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/v1/Tenant/{tenantId}
		 * @return {void} Success
		 */
		ApiV1Tenant_tenantIdDelete(tenantId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/Tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/Tenant/{tenantId}
		 * @return {TenantInfoResult} Success
		 */
		ApiV1Tenant_tenantIdGet(tenantId: string, headersHandler?: () => HttpHeaders): Observable<TenantInfoResult> {
			return this.http.get<TenantInfoResult>(this.baseUri + 'api/v1/Tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/v1/Tenant/{tenantId}
		 * @return {void} Success
		 */
		ApiV1Tenant_tenantIdPut(tenantId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/Tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/Tokens/plans/{planName}/deleteAllCodespaces
		 * @return {void} Success
		 */
		ApiV1TokensPlans_planNameDeleteAllCodespacesPostByExpiration(planName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/Tokens/plans/' + (planName == null ? '' : encodeURIComponent(planName)) + '/deleteAllCodespaces&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/Tokens/plans/{planName}/readAllCodespaces
		 * @return {void} Success
		 */
		ApiV1TokensPlans_planNameReadAllCodespacesPostByExpiration(planName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/Tokens/plans/' + (planName == null ? '' : encodeURIComponent(planName)) + '/readAllCodespaces&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/Tokens/plans/{planName}/writeCodespaces
		 * @return {void} Success
		 */
		ApiV1TokensPlans_planNameWriteCodespacesPostByExpiration(planName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/Tokens/plans/' + (planName == null ? '' : encodeURIComponent(planName)) + '/writeCodespaces&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/Tokens/plans/{planName}/writeDelegates
		 * @return {void} Success
		 */
		ApiV1TokensPlans_planNameWriteDelegatesPost(planName: string, requestBody: IssueDelegatePlanAccessTokenBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/Tokens/plans/' + (planName == null ? '' : encodeURIComponent(planName)) + '/writeDelegates', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/Tokens/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/{providerNamespace}/plans/{resourceName}
		 * @return {void} Success
		 */
		ApiV1TokensSubscriptions_subscriptionIdResourceGroups_resourceGroupProviders_providerNamespacePlans_resourceNamePut(subscriptionId: string, resourceGroup: string, providerNamespace: string, resourceName: string, requestBody: PlanResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/Tokens/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/' + (providerNamespace == null ? '' : encodeURIComponent(providerNamespace)) + '/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/Tunnel/{environmentId}/portInfo
		 * @return {TunnelPortInfoResult} Success
		 */
		ApiV1Tunnel_environmentIdPortInfoGetByPortNumber(environmentId: string, portNumber: number | null | undefined, headersHandler?: () => HttpHeaders): Observable<TunnelPortInfoResult> {
			return this.http.get<TunnelPortInfoResult>(this.baseUri + 'api/v1/Tunnel/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/portInfo&portNumber=' + portNumber, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/v1/UserSubscriptions
		 * @return {void} Success
		 */
		ApiV1UserSubscriptionsDeleteByEmail(email: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/UserSubscriptions?email=' + (email == null ? '' : encodeURIComponent(email)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/UserSubscriptions
		 * @return {void} Success
		 */
		ApiV1UserSubscriptionsPostByEmail(email: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/UserSubscriptions?email=' + (email == null ? '' : encodeURIComponent(email)), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/pools/default
		 * @return {Array<PoolStatusResponseBody>} Success
		 */
		ApiV1PoolsDefaultGetBySkuName(skuName: Array<string> | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<PoolStatusResponseBody>> {
			return this.http.get<Array<PoolStatusResponseBody>>(this.baseUri + 'api/v1/pools/default?' + skuName?.map(z => `skuName=${encodeURIComponent(z)}`).join('&'), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/v1/subscriptions/{subscriptionId}/providers/GitHub.Network/{resourceType}/SubscriptionLifeCycleNotification
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdProvidersGitHub_Network_resourceTypeSubscriptionLifeCycleNotificationPut(subscriptionId: string, resourceType: string, requestBody: RPSubscriptionNotification, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/SubscriptionLifeCycleNotification', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/providers/GitHub.Network/{resourceType}/resourceReadBegin
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdProvidersGitHub_Network_resourceTypeResourceReadBeginPost(subscriptionId: string, resourceType: string, requestBody: NetworkSettingsResourceList, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/resourceReadBegin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/subscriptions/{subscriptionId}/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdProvidersMicrosoft_CodespacesPlansSubscriptionLifeCycleNotificationPut(subscriptionId: string, requestBody: RPSubscriptionNotification, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Codespaces/plans/SubscriptionLifeCycleNotification', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/providers/Microsoft.Codespaces/plans/resourceReadBegin
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdProvidersMicrosoft_CodespacesPlansResourceReadBeginPost(subscriptionId: string, requestBody: PlanResourceList, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Codespaces/plans/resourceReadBegin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/subscriptions/{subscriptionId}/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdProvidersMicrosoft_VSOnlinePlansSubscriptionLifeCycleNotificationPut(subscriptionId: string, requestBody: RPSubscriptionNotification, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VSOnline/plans/SubscriptionLifeCycleNotification', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/providers/Microsoft.VSOnline/plans/resourceReadBegin
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdProvidersMicrosoft_VSOnlinePlansResourceReadBeginPost(subscriptionId: string, requestBody: PlanResourceList, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.VSOnline/plans/resourceReadBegin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/resourceReadBegin
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceTypeResourceReadBeginPost(subscriptionId: string, resourceGroup: string, resourceType: string, requestBody: NetworkSettingsResourceList, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/resourceReadBegin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceType_resourceNameDelete(subscriptionId: string, resourceGroup: string, resourceType: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Patch api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceType_resourceNamePatch(subscriptionId: string, resourceGroup: string, resourceType: string, resourceName: string, requestBody: NetworkSettingsResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceType_resourceNamePut(subscriptionId: string, resourceGroup: string, resourceType: string, resourceName: string, requestBody: NetworkSettingsResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceCreationCompleted
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceType_resourceNameResourceCreationCompletedPost(subscriptionId: string, resourceGroup: string, resourceType: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceCreationCompleted', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceCreationValidate
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceType_resourceNameResourceCreationValidatePost(subscriptionId: string, resourceGroup: string, resourceType: string, resourceName: string, requestBody: NetworkSettingsResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceCreationValidate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceDeletionCompleted
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceType_resourceNameResourceDeletionCompletedPost(subscriptionId: string, resourceGroup: string, resourceType: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceDeletionCompleted', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceDeletionValidate
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceType_resourceNameResourceDeletionValidatePost(subscriptionId: string, resourceGroup: string, resourceType: string, resourceName: string, requestBody: NetworkSettingsResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceDeletionValidate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourcePatchCompleted
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceType_resourceNameResourcePatchCompletedPost(subscriptionId: string, resourceGroup: string, resourceType: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourcePatchCompleted', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourcePatchValidate
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceType_resourceNameResourcePatchValidatePost(subscriptionId: string, resourceGroup: string, resourceType: string, resourceName: string, requestBody: NetworkSettingsResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourcePatchValidate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/GitHub.Network/{resourceType}/{resourceName}/resourceReadBegin
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersGitHub_Network_resourceType_resourceNameResourceReadBeginPost(subscriptionId: string, resourceGroup: string, resourceType: string, resourceName: string, requestBody: NetworkSettingsResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/GitHub.Network/' + (resourceType == null ? '' : encodeURIComponent(resourceType)) + '/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceReadBegin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/resourceReadBegin
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlansResourceReadBeginPost(subscriptionId: string, resourceGroup: string, requestBody: PlanResourceList, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/resourceReadBegin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNamePut(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: PlanResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteAllCodespaces
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameDeleteAllCodespacesPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/deleteAllCodespaces&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteAllEnvironments
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameDeleteAllEnvironmentsPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/deleteAllEnvironments&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readAllCodespaces
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameReadAllCodespacesPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/readAllCodespaces&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readAllEnvironments
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameReadAllEnvironmentsPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/readAllEnvironments&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/readDelegates
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameReadDelegatesPost(subscriptionId: string, resourceGroup: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/readDelegates', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceCreationCompleted
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameResourceCreationCompletedPost(subscriptionId: string, resourceGroup: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceCreationCompleted', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceCreationValidate
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameResourceCreationValidatePost(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: PlanResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceCreationValidate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceDeletionValidate
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameResourceDeletionValidatePost(subscriptionId: string, resourceGroup: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceDeletionValidate', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourcePatchCompleted
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameResourcePatchCompletedPost(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: PlanResourceUpdateBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourcePatchCompleted', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourcePatchValidate
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameResourcePatchValidatePost(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: PlanResourceUpdateBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourcePatchValidate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/resourceReadBegin
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameResourceReadBeginPost(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: PlanResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceReadBegin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeCodespaces
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameWriteCodespacesPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/writeCodespaces&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeDelegates
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameWriteDelegatesPost(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: IssueDelegatePlanAccessTokenBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/writeDelegates', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/writeEnvironments
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameWriteEnvironmentsPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/writeEnvironments&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/resourceReadBegin
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlansResourceReadBeginPost(subscriptionId: string, resourceGroup: string, requestBody: PlanResourceList, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/resourceReadBegin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNamePut(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: PlanResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteAllCodespaces
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameDeleteAllCodespacesPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/deleteAllCodespaces&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteAllEnvironments
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameDeleteAllEnvironmentsPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/deleteAllEnvironments&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readAllCodespaces
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameReadAllCodespacesPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/readAllCodespaces&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readAllEnvironments
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameReadAllEnvironmentsPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/readAllEnvironments&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/readDelegates
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameReadDelegatesPost(subscriptionId: string, resourceGroup: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/readDelegates', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceCreationCompleted
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameResourceCreationCompletedPost(subscriptionId: string, resourceGroup: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceCreationCompleted', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceCreationValidate
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameResourceCreationValidatePost(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: PlanResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceCreationValidate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceDeletionValidate
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameResourceDeletionValidatePost(subscriptionId: string, resourceGroup: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceDeletionValidate', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourcePatchCompleted
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameResourcePatchCompletedPost(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: PlanResourceUpdateBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourcePatchCompleted', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourcePatchValidate
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameResourcePatchValidatePost(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: PlanResourceUpdateBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourcePatchValidate', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/resourceReadBegin
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameResourceReadBeginPost(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: PlanResource, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/resourceReadBegin', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeCodespaces
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameWriteCodespacesPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/writeCodespaces&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeDelegates
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameWriteDelegatesPost(subscriptionId: string, resourceGroup: string, resourceName: string, requestBody: IssueDelegatePlanAccessTokenBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/writeDelegates', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/writeEnvironments
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionIdResourceGroups_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameWriteEnvironmentsPostByExpiration(subscriptionId: string, resourceGroup: string, resourceName: string, expiration: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/writeEnvironments&expiration=' + expiration?.toISOString(), null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/{resourceGroup}/providers/Microsoft.Codespaces/plans/{resourceName}/deleteDelegates
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionId_resourceGroupProvidersMicrosoft_CodespacesPlans_resourceNameDeleteDelegatesPost(subscriptionId: string, resourceGroup: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.Codespaces/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/deleteDelegates', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/subscriptions/{subscriptionId}/{resourceGroup}/providers/Microsoft.VSOnline/plans/{resourceName}/deleteDelegates
		 * @return {void} Success
		 */
		ApiV1Subscriptions_subscriptionId_resourceGroupProvidersMicrosoft_VSOnlinePlans_resourceNameDeleteDelegatesPost(subscriptionId: string, resourceGroup: string, resourceName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/' + (resourceGroup == null ? '' : encodeURIComponent(resourceGroup)) + '/providers/Microsoft.VSOnline/plans/' + (resourceName == null ? '' : encodeURIComponent(resourceName)) + '/deleteDelegates', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete api/v1/tenant/{tenantId}/Pool/{poolName}
		 * @return {void} Success
		 */
		ApiV1Tenant_tenantIdPool_poolNameDelete(tenantId: string, poolName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/Pool/' + (poolName == null ? '' : encodeURIComponent(poolName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/tenant/{tenantId}/Pool/{poolName}
		 * @return {PoolResult} Success
		 */
		ApiV1Tenant_tenantIdPool_poolNameGet(tenantId: string, poolName: string, headersHandler?: () => HttpHeaders): Observable<PoolResult> {
			return this.http.get<PoolResult>(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/Pool/' + (poolName == null ? '' : encodeURIComponent(poolName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch api/v1/tenant/{tenantId}/Pool/{poolName}
		 * @return {PoolResult} Success
		 */
		ApiV1Tenant_tenantIdPool_poolNamePatch(tenantId: string, poolName: string, requestBody: CreateOrUpdatePoolBody, headersHandler?: () => HttpHeaders): Observable<PoolResult> {
			return this.http.patch<PoolResult>(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/Pool/' + (poolName == null ? '' : encodeURIComponent(poolName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Put api/v1/tenant/{tenantId}/Pool/{poolName}
		 * @return {PoolResult} Success
		 */
		ApiV1Tenant_tenantIdPool_poolNamePut(tenantId: string, poolName: string, requestBody: CreateOrUpdatePoolBody, headersHandler?: () => HttpHeaders): Observable<PoolResult> {
			return this.http.put<PoolResult>(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/Pool/' + (poolName == null ? '' : encodeURIComponent(poolName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}
		 * @return {void} Success
		 */
		ApiV1Tenant_tenantIdPoolGroup_poolGroupNameDelete(tenantId: string, poolGroupName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/PoolGroup/' + (poolGroupName == null ? '' : encodeURIComponent(poolGroupName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}
		 * @return {PoolGroupResult} Success
		 */
		ApiV1Tenant_tenantIdPoolGroup_poolGroupNameGet(tenantId: string, poolGroupName: string, headersHandler?: () => HttpHeaders): Observable<PoolGroupResult> {
			return this.http.get<PoolGroupResult>(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/PoolGroup/' + (poolGroupName == null ? '' : encodeURIComponent(poolGroupName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Patch api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}
		 * @return {void} Success
		 */
		ApiV1Tenant_tenantIdPoolGroup_poolGroupNamePatch(tenantId: string, poolGroupName: string, requestBody: UpdatePoolGroupBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/PoolGroup/' + (poolGroupName == null ? '' : encodeURIComponent(poolGroupName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Put api/v1/tenant/{tenantId}/PoolGroup/{poolGroupName}
		 * @return {void} Success
		 */
		ApiV1Tenant_tenantIdPoolGroup_poolGroupNamePut(tenantId: string, poolGroupName: string, requestBody: CreatePoolGroupBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/PoolGroup/' + (poolGroupName == null ? '' : encodeURIComponent(poolGroupName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/tenant/{tenantId}/pool/{poolName}/Vm
		 * @return {Array<VMResult>} Success
		 */
		ApiV1Tenant_tenantIdPool_poolNameVmGet(tenantId: string, poolName: string, headersHandler?: () => HttpHeaders): Observable<Array<VMResult>> {
			return this.http.get<Array<VMResult>>(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/pool/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/Vm', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}
		 * @return {void} Success
		 */
		ApiV1Tenant_tenantIdPool_poolNameVm_vmNameDelete(tenantId: string, poolName: string, vmName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/pool/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/Vm/' + (vmName == null ? '' : encodeURIComponent(vmName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}
		 * @return {VMResult} Success
		 */
		ApiV1Tenant_tenantIdPool_poolNameVm_vmNameGet(tenantId: string, poolName: string, vmName: string, headersHandler?: () => HttpHeaders): Observable<VMResult> {
			return this.http.get<VMResult>(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/pool/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/Vm/' + (vmName == null ? '' : encodeURIComponent(vmName)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Put api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}
		 * @return {VMResult} Success
		 */
		ApiV1Tenant_tenantIdPool_poolNameVm_vmNamePut(tenantId: string, poolName: string, vmName: string, requestBody: ClaimVMBody, headersHandler?: () => HttpHeaders): Observable<VMResult> {
			return this.http.put<VMResult>(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/pool/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/Vm/' + (vmName == null ? '' : encodeURIComponent(vmName)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Post api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/start
		 * @return {void} Success
		 */
		ApiV1Tenant_tenantIdPool_poolNameVm_vmNameStartPost(tenantId: string, poolName: string, vmName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/pool/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/Vm/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/start', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v1/tenant/{tenantId}/pool/{poolName}/Vm/{vmName}/stop
		 * @return {void} Success
		 */
		ApiV1Tenant_tenantIdPool_poolNameVm_vmNameStopPost(tenantId: string, poolName: string, vmName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v1/tenant/' + (tenantId == null ? '' : encodeURIComponent(tenantId)) + '/pool/' + (poolName == null ? '' : encodeURIComponent(poolName)) + '/Vm/' + (vmName == null ? '' : encodeURIComponent(vmName)) + '/stop', null, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v2/prebuilds/delete
		 * @return {void} Success
		 */
		ApiV2PrebuildsDeletePost(requestBody: DeletePrebuildTemplatesBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/prebuilds/delete', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete api/v2/prebuilds/repository/{repoId}/branch/{branchName}
		 * @return {void} Success
		 */
		ApiV2PrebuildsRepository_repoIdBranch_branchNameDelete(repoId: number, branchName: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/v2/prebuilds/repository/' + repoId + '/branch/' + (branchName == null ? '' : encodeURIComponent(branchName)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v2/prebuilds/templates
		 * @return {void} 
		 */
		ApiV2PrebuildsTemplatesPost(requestBody: CreatePrebuildTemplateBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/prebuilds/templates', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get api/v2/prebuilds/templates/skus/repo/{repoId}/branch/{branchName}/hash/{prebuildHash}/location/{location}/devcontainerpath/{devContainerPath}
		 * @return {PrebuildReadinessResult} Success
		 */
		ApiV2PrebuildsTemplatesSkusRepo_repoIdBranch_branchNameHash_prebuildHashLocation_locationDevcontainerpath_devContainerPathGetByStorageTypeAndFastPathEnabled(repoId: string, branchName: string, prebuildHash: string, location: string, devContainerPath: string, storageType: StorageType | null | undefined, fastPathEnabled: boolean | null | undefined, headersHandler?: () => HttpHeaders): Observable<PrebuildReadinessResult> {
			return this.http.get<PrebuildReadinessResult>(this.baseUri + 'api/v2/prebuilds/templates/skus/repo/' + (repoId == null ? '' : encodeURIComponent(repoId)) + '/branch/' + (branchName == null ? '' : encodeURIComponent(branchName)) + '/hash/' + (prebuildHash == null ? '' : encodeURIComponent(prebuildHash)) + '/location/' + (location == null ? '' : encodeURIComponent(location)) + '/devcontainerpath/' + (devContainerPath == null ? '' : encodeURIComponent(devContainerPath)) + '&storageType=' + storageType + '&fastPathEnabled=' + fastPathEnabled, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post api/v2/prebuilds/templates/updatemaxversions
		 * @return {void} Success
		 */
		ApiV2PrebuildsTemplatesUpdatemaxversionsPost(requestBody: UpdatePrebuildTemplateVersionsBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/prebuilds/templates/updatemaxversions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post api/v2/prebuilds/templates/{templateId}/updatestatus
		 * @return {void} Success
		 */
		ApiV2PrebuildsTemplates_templateIdUpdatestatusPost(templateId: string, requestBody: UpdatePrebuildTemplateBody, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/v2/prebuilds/templates/' + (templateId == null ? '' : encodeURIComponent(templateId)) + '/updatestatus', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Get health
		 * @return {void} Success
		 */
		HealthGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'health', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get internal/Netmon/correlation
		 * @return {string} Success
		 */
		InternalNetmonCorrelationGetByMacAddress(macAddress: string | null | undefined, headersHandler?: () => HttpHeaders): Observable<string> {
			return this.http.get(this.baseUri + 'internal/Netmon/correlation?macAddress=' + (macAddress == null ? '' : encodeURIComponent(macAddress)), { headers: headersHandler ? headersHandler() : undefined, responseType: 'text' });
		}

		/**
		 * Get warmup
		 * @return {void} Success
		 */
		WarmupGet(headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'warmup', { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}
	}

}

