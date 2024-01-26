import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export enum AccessType { readOnly = 'readOnly', full = 'full', custom = 'custom' }

	export interface AddOrUpdateIntegrationLinkModel {

		/** Max length: 1000 */
		description?: string | null;

		/** Max length: 1000 */
		url?: string | null;
	}
	export interface AddOrUpdateIntegrationLinkModelFormProperties {

		/** Max length: 1000 */
		description: FormControl<string | null | undefined>,

		/** Max length: 1000 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAddOrUpdateIntegrationLinkModelFormGroup() {
		return new FormGroup<AddOrUpdateIntegrationLinkModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000)]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.maxLength(1000)]),
		});

	}

	export interface AddOrUpdateJiraIntegrationLinkModel {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		clientKey: string;

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 15000
		 * Min length: 0
		 */
		jiraJwtToken: string;

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		url?: string | null;
	}
	export interface AddOrUpdateJiraIntegrationLinkModelFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		clientKey: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 15000
		 * Min length: 0
		 */
		jiraJwtToken: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAddOrUpdateJiraIntegrationLinkModelFormGroup() {
		return new FormGroup<AddOrUpdateJiraIntegrationLinkModelFormProperties>({
			clientKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			jiraJwtToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(15000)]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
		});

	}

	export interface AddUserToGroupRequest {

		/** Required */
		permissionGroupIds: Array<number>;
	}
	export interface AddUserToGroupRequestFormProperties {
	}
	export function CreateAddUserToGroupRequestFormGroup() {
		return new FormGroup<AddUserToGroupRequestFormProperties>({
		});

	}

	export interface AuditLogItemModel {
		actionTarget?: string | null;
		auditLogDateTime?: Date | null;
		auditLogId?: number | null;
		auditLogType?: string | null;
		auditLogTypeEnum?: AuditLogItemModelAuditLogTypeEnum | null;
		details?: string | null;
		userEmail?: string | null;
		userName?: string | null;
		where?: string | null;
		why?: string | null;
	}
	export interface AuditLogItemModelFormProperties {
		actionTarget: FormControl<string | null | undefined>,
		auditLogDateTime: FormControl<Date | null | undefined>,
		auditLogId: FormControl<number | null | undefined>,
		auditLogType: FormControl<string | null | undefined>,
		auditLogTypeEnum: FormControl<AuditLogItemModelAuditLogTypeEnum | null | undefined>,
		details: FormControl<string | null | undefined>,
		userEmail: FormControl<string | null | undefined>,
		userName: FormControl<string | null | undefined>,
		where: FormControl<string | null | undefined>,
		why: FormControl<string | null | undefined>,
	}
	export function CreateAuditLogItemModelFormGroup() {
		return new FormGroup<AuditLogItemModelFormProperties>({
			actionTarget: new FormControl<string | null | undefined>(undefined),
			auditLogDateTime: new FormControl<Date | null | undefined>(undefined),
			auditLogId: new FormControl<number | null | undefined>(undefined),
			auditLogType: new FormControl<string | null | undefined>(undefined),
			auditLogTypeEnum: new FormControl<AuditLogItemModelAuditLogTypeEnum | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
			userEmail: new FormControl<string | null | undefined>(undefined),
			userName: new FormControl<string | null | undefined>(undefined),
			where: new FormControl<string | null | undefined>(undefined),
			why: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AuditLogItemModelAuditLogTypeEnum { productCreated = 'productCreated', productChanged = 'productChanged', productOwnershipTransferred = 'productOwnershipTransferred', productDeleted = 'productDeleted', productsReordered = 'productsReordered', teamMemberInvited = 'teamMemberInvited', teamMemberInvitationRevoked = 'teamMemberInvitationRevoked', teamMemberJoined = 'teamMemberJoined', teamMemberPermissionGroupChanged = 'teamMemberPermissionGroupChanged', teamMemberRemoved = 'teamMemberRemoved', teamMemberLeft = 'teamMemberLeft', teamMemberInvitationChanged = 'teamMemberInvitationChanged', teamMemberInvitationResent = 'teamMemberInvitationResent', teamMemberInvitationRejected = 'teamMemberInvitationRejected', configCreated = 'configCreated', configChanged = 'configChanged', configDeleted = 'configDeleted', configsReordered = 'configsReordered', environmentCreated = 'environmentCreated', environmentChanged = 'environmentChanged', environmentDeleted = 'environmentDeleted', environmentsReordered = 'environmentsReordered', settingCreated = 'settingCreated', settingChanged = 'settingChanged', settingDeleted = 'settingDeleted', settingsReordered = 'settingsReordered', settingValueChanged = 'settingValueChanged', webHookCreated = 'webHookCreated', webHookChanged = 'webHookChanged', webHookDeleted = 'webHookDeleted', subscriptionChanged = 'subscriptionChanged', permissionGroupCreated = 'permissionGroupCreated', permissionGroupChanged = 'permissionGroupChanged', permissionGroupDeleted = 'permissionGroupDeleted', permissionGroupDefault = 'permissionGroupDefault', apiKeyAdded = 'apiKeyAdded', apiKeyRemoved = 'apiKeyRemoved', integrationAdded = 'integrationAdded', integrationChanged = 'integrationChanged', integrationRemoved = 'integrationRemoved', apiKeyConnected = 'apiKeyConnected', integrationLinkAdded = 'integrationLinkAdded', integrationLinkRemoved = 'integrationLinkRemoved', organizationAdded = 'organizationAdded', organizationRemoved = 'organizationRemoved', organizationChanged = 'organizationChanged', organizationSubscriptionTypeChanged = 'organizationSubscriptionTypeChanged', organizationAdminChanged = 'organizationAdminChanged', organizationAdminLeft = 'organizationAdminLeft', organizationAdminDisabled2FA = 'organizationAdminDisabled2FA', tagAdded = 'tagAdded', tagChanged = 'tagChanged', tagRemoved = 'tagRemoved', settingTagAdded = 'settingTagAdded', settingTagRemoved = 'settingTagRemoved', publicApiAccessTokenAdded = 'publicApiAccessTokenAdded', publicApiAccessTokenRemoved = 'publicApiAccessTokenRemoved', domainAdded = 'domainAdded', domainVerified = 'domainVerified', domainRemoved = 'domainRemoved', domainSamlConfigured = 'domainSamlConfigured', domainSamlDeleted = 'domainSamlDeleted', autoProvisioningConfigurationChanged = 'autoProvisioningConfigurationChanged', organizationMemberJoined = 'organizationMemberJoined', organizationMemberProductJoinRequested = 'organizationMemberProductJoinRequested', organizationMemberProductJoinRequestRejected = 'organizationMemberProductJoinRequestRejected', organizationMemberProductJoinRequestApproved = 'organizationMemberProductJoinRequestApproved', codeReferencesUploaded = 'codeReferencesUploaded', codeReferenceDeleted = 'codeReferenceDeleted', codeReferenceStaleBranchDeleted = 'codeReferenceStaleBranchDeleted', segmentCreated = 'segmentCreated', segmentChanged = 'segmentChanged', segmentDeleted = 'segmentDeleted', webhookSigningKeyDeleted = 'webhookSigningKeyDeleted', webhookSigningKeyCreated = 'webhookSigningKeyCreated' }

	export enum AuditLogType { productCreated = 'productCreated', productChanged = 'productChanged', productOwnershipTransferred = 'productOwnershipTransferred', productDeleted = 'productDeleted', productsReordered = 'productsReordered', teamMemberInvited = 'teamMemberInvited', teamMemberInvitationRevoked = 'teamMemberInvitationRevoked', teamMemberJoined = 'teamMemberJoined', teamMemberPermissionGroupChanged = 'teamMemberPermissionGroupChanged', teamMemberRemoved = 'teamMemberRemoved', teamMemberLeft = 'teamMemberLeft', teamMemberInvitationChanged = 'teamMemberInvitationChanged', teamMemberInvitationResent = 'teamMemberInvitationResent', teamMemberInvitationRejected = 'teamMemberInvitationRejected', configCreated = 'configCreated', configChanged = 'configChanged', configDeleted = 'configDeleted', configsReordered = 'configsReordered', environmentCreated = 'environmentCreated', environmentChanged = 'environmentChanged', environmentDeleted = 'environmentDeleted', environmentsReordered = 'environmentsReordered', settingCreated = 'settingCreated', settingChanged = 'settingChanged', settingDeleted = 'settingDeleted', settingsReordered = 'settingsReordered', settingValueChanged = 'settingValueChanged', webHookCreated = 'webHookCreated', webHookChanged = 'webHookChanged', webHookDeleted = 'webHookDeleted', subscriptionChanged = 'subscriptionChanged', permissionGroupCreated = 'permissionGroupCreated', permissionGroupChanged = 'permissionGroupChanged', permissionGroupDeleted = 'permissionGroupDeleted', permissionGroupDefault = 'permissionGroupDefault', apiKeyAdded = 'apiKeyAdded', apiKeyRemoved = 'apiKeyRemoved', integrationAdded = 'integrationAdded', integrationChanged = 'integrationChanged', integrationRemoved = 'integrationRemoved', apiKeyConnected = 'apiKeyConnected', integrationLinkAdded = 'integrationLinkAdded', integrationLinkRemoved = 'integrationLinkRemoved', organizationAdded = 'organizationAdded', organizationRemoved = 'organizationRemoved', organizationChanged = 'organizationChanged', organizationSubscriptionTypeChanged = 'organizationSubscriptionTypeChanged', organizationAdminChanged = 'organizationAdminChanged', organizationAdminLeft = 'organizationAdminLeft', organizationAdminDisabled2FA = 'organizationAdminDisabled2FA', tagAdded = 'tagAdded', tagChanged = 'tagChanged', tagRemoved = 'tagRemoved', settingTagAdded = 'settingTagAdded', settingTagRemoved = 'settingTagRemoved', publicApiAccessTokenAdded = 'publicApiAccessTokenAdded', publicApiAccessTokenRemoved = 'publicApiAccessTokenRemoved', domainAdded = 'domainAdded', domainVerified = 'domainVerified', domainRemoved = 'domainRemoved', domainSamlConfigured = 'domainSamlConfigured', domainSamlDeleted = 'domainSamlDeleted', autoProvisioningConfigurationChanged = 'autoProvisioningConfigurationChanged', organizationMemberJoined = 'organizationMemberJoined', organizationMemberProductJoinRequested = 'organizationMemberProductJoinRequested', organizationMemberProductJoinRequestRejected = 'organizationMemberProductJoinRequestRejected', organizationMemberProductJoinRequestApproved = 'organizationMemberProductJoinRequestApproved', codeReferencesUploaded = 'codeReferencesUploaded', codeReferenceDeleted = 'codeReferenceDeleted', codeReferenceStaleBranchDeleted = 'codeReferenceStaleBranchDeleted', segmentCreated = 'segmentCreated', segmentChanged = 'segmentChanged', segmentDeleted = 'segmentDeleted', webhookSigningKeyDeleted = 'webhookSigningKeyDeleted', webhookSigningKeyCreated = 'webhookSigningKeyCreated' }

	export interface CodeReferenceRequest {

		/** The currently active branches of the repository. Each previously uploaded report that belongs to a non-reported active branch is being deleted. */
		activeBranches?: Array<string>;

		/**
		 * The source control branch on where the scan was performed. (Source of the branch selector on the ConfigCat Dashboard)
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		branch: string;

		/**
		 * The related commit's hash. (Appears on the ConfigCat Dashboard)
		 * Max length: 255
		 * Min length: 0
		 */
		commitHash?: string | null;

		/**
		 * The related commit's URL. (Appears on the ConfigCat Dashboard)
		 * Max length: 1000
		 * Min length: 0
		 */
		commitUrl?: string | null;

		/**
		 * The Config's identifier the scanning was performed against.
		 * Required
		 */
		configId: string;

		/** The actual code reference collection. */
		flagReferences?: Array<FlagReference>;

		/**
		 * The source control repository that contains the scanned code. (Source of the repository selector on the ConfigCat Dashboard)
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		repository: string;

		/**
		 * The scanning tool's name. (Appears on the ConfigCat Dashboard)
		 * Max length: 255
		 * Min length: 0
		 */
		uploader?: string | null;
	}
	export interface CodeReferenceRequestFormProperties {

		/**
		 * The source control branch on where the scan was performed. (Source of the branch selector on the ConfigCat Dashboard)
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		branch: FormControl<string | null | undefined>,

		/**
		 * The related commit's hash. (Appears on the ConfigCat Dashboard)
		 * Max length: 255
		 * Min length: 0
		 */
		commitHash: FormControl<string | null | undefined>,

		/**
		 * The related commit's URL. (Appears on the ConfigCat Dashboard)
		 * Max length: 1000
		 * Min length: 0
		 */
		commitUrl: FormControl<string | null | undefined>,

		/**
		 * The Config's identifier the scanning was performed against.
		 * Required
		 */
		configId: FormControl<string | null | undefined>,

		/**
		 * The source control repository that contains the scanned code. (Source of the repository selector on the ConfigCat Dashboard)
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		repository: FormControl<string | null | undefined>,

		/**
		 * The scanning tool's name. (Appears on the ConfigCat Dashboard)
		 * Max length: 255
		 * Min length: 0
		 */
		uploader: FormControl<string | null | undefined>,
	}
	export function CreateCodeReferenceRequestFormGroup() {
		return new FormGroup<CodeReferenceRequestFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			commitHash: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			commitUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			configId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repository: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			uploader: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface FlagReference {

		/**
		 * The actual references to the given Feature Flag or Setting.
		 * Required
		 */
		references: Array<ReferenceLines>;

		/**
		 * The identifier of the Feature Flag or Setting the code reference belongs to.
		 * Required
		 */
		settingId: number;
	}
	export interface FlagReferenceFormProperties {

		/**
		 * The identifier of the Feature Flag or Setting the code reference belongs to.
		 * Required
		 */
		settingId: FormControl<number | null | undefined>,
	}
	export function CreateFlagReferenceFormGroup() {
		return new FormGroup<FlagReferenceFormProperties>({
			settingId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ReferenceLines {

		/**
		 * The file's name in where the code reference has been found. (Appears on the ConfigCat Dashboard)
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		file: string;

		/**
		 * The file's url. (Used to point to the file on the repository's website)
		 * Max length: 1000
		 * Min length: 0
		 */
		fileUrl?: string | null;

		/** The lines after the actual reference line. */
		postLines?: Array<ReferenceLine>;

		/** The lines before the actual reference line. */
		preLines?: Array<ReferenceLine>;

		/** Required */
		referenceLine: ReferenceLine;
	}
	export interface ReferenceLinesFormProperties {

		/**
		 * The file's name in where the code reference has been found. (Appears on the ConfigCat Dashboard)
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		file: FormControl<string | null | undefined>,

		/**
		 * The file's url. (Used to point to the file on the repository's website)
		 * Max length: 1000
		 * Min length: 0
		 */
		fileUrl: FormControl<string | null | undefined>,
	}
	export function CreateReferenceLinesFormGroup() {
		return new FormGroup<ReferenceLinesFormProperties>({
			file: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			fileUrl: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
		});

	}

	export interface ReferenceLine {

		/**
		 * The line number of the reference line.
		 * Required
		 */
		lineNumber: number;

		/**
		 * The content of the reference line.
		 * Max length: 1000
		 * Min length: 0
		 */
		lineText?: string | null;
	}
	export interface ReferenceLineFormProperties {

		/**
		 * The line number of the reference line.
		 * Required
		 */
		lineNumber: FormControl<number | null | undefined>,

		/**
		 * The content of the reference line.
		 * Max length: 1000
		 * Min length: 0
		 */
		lineText: FormControl<string | null | undefined>,
	}
	export function CreateReferenceLineFormGroup() {
		return new FormGroup<ReferenceLineFormProperties>({
			lineNumber: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			lineText: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
		});

	}

	export interface ConfigModel {
		configId?: string | null;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		product?: ProductModel;
	}
	export interface ConfigModelFormProperties {
		configId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
	}
	export function CreateConfigModelFormGroup() {
		return new FormGroup<ConfigModelFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ProductModel {
		description?: string | null;
		name?: string | null;
		order?: number | null;
		organization?: OrganizationModel;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface ProductModelFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateProductModelFormGroup() {
		return new FormGroup<ProductModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface OrganizationModel {
		name?: string | null;
		organizationId?: string | null;
	}
	export interface OrganizationModelFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationModelFormGroup() {
		return new FormGroup<OrganizationModelFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigModel_haljson {
		_embedded?: ConfigModel_haljson_embedded;
		_links?: ConfigModel_haljson_links;
		configId?: string | null;
		description?: string | null;
		name?: string | null;
		order?: number | null;
	}
	export interface ConfigModel_haljsonFormProperties {
		configId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
	}
	export function CreateConfigModel_haljsonFormGroup() {
		return new FormGroup<ConfigModel_haljsonFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConfigModel_haljson_embedded {
		product?: ConfigModel_haljson_embeddedProduct;
	}
	export interface ConfigModel_haljson_embeddedFormProperties {
	}
	export function CreateConfigModel_haljson_embeddedFormGroup() {
		return new FormGroup<ConfigModel_haljson_embeddedFormProperties>({
		});

	}

	export interface ConfigModel_haljson_embeddedProduct {
		_embedded?: ConfigModel_haljson_embeddedProduct_embedded;
		_links?: ConfigModel_haljson_embeddedProduct_links;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface ConfigModel_haljson_embeddedProductFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigModel_haljson_embeddedProductFormGroup() {
		return new FormGroup<ConfigModel_haljson_embeddedProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ConfigModel_haljson_embeddedProduct_embedded {
		organization?: ConfigModel_haljson_embeddedProduct_embeddedOrganization;
	}
	export interface ConfigModel_haljson_embeddedProduct_embeddedFormProperties {
	}
	export function CreateConfigModel_haljson_embeddedProduct_embeddedFormGroup() {
		return new FormGroup<ConfigModel_haljson_embeddedProduct_embeddedFormProperties>({
		});

	}

	export interface ConfigModel_haljson_embeddedProduct_embeddedOrganization {
		_links?: ConfigModel_haljson_embeddedProduct_embeddedOrganization_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface ConfigModel_haljson_embeddedProduct_embeddedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateConfigModel_haljson_embeddedProduct_embeddedOrganizationFormGroup() {
		return new FormGroup<ConfigModel_haljson_embeddedProduct_embeddedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigModel_haljson_embeddedProduct_embeddedOrganization_links {
		members?: string | null;
		products?: string | null;
	}
	export interface ConfigModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreateConfigModel_haljson_embeddedProduct_embeddedOrganization_linksFormGroup() {
		return new FormGroup<ConfigModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigModel_haljson_embeddedProduct_links {
		configs?: string | null;
		environments?: string | null;
		members?: string | null;
		'permission-groups'?: string | null;
		segments?: string | null;
		self?: string | null;
		tags?: string | null;
	}
	export interface ConfigModel_haljson_embeddedProduct_linksFormProperties {
		configs: FormControl<string | null | undefined>,
		environments: FormControl<string | null | undefined>,
		members: FormControl<string | null | undefined>,
		'permission-groups': FormControl<string | null | undefined>,
		segments: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateConfigModel_haljson_embeddedProduct_linksFormGroup() {
		return new FormGroup<ConfigModel_haljson_embeddedProduct_linksFormProperties>({
			configs: new FormControl<string | null | undefined>(undefined),
			environments: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			'permission-groups': new FormControl<string | null | undefined>(undefined),
			segments: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigModel_haljson_links {
		self?: string | null;
		settings?: string | null;
	}
	export interface ConfigModel_haljson_linksFormProperties {
		self: FormControl<string | null | undefined>,
		settings: FormControl<string | null | undefined>,
	}
	export function CreateConfigModel_haljson_linksFormGroup() {
		return new FormGroup<ConfigModel_haljson_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ConfigSettingValueModel {
		integrationLinks?: Array<IntegrationLinkModel>;
		lastUpdaterUserEmail?: string | null;
		lastUpdaterUserFullName?: string | null;

		/** The percentage rule collection. */
		rolloutPercentageItems?: Array<RolloutPercentageItemModel>;

		/** The targeting rule collection. */
		rolloutRules?: Array<RolloutRuleModel>;
		setting?: SettingDataModel;
		settingTags?: Array<SettingTagModel>;
		updatedAt?: Date | null;

		/** The value to serve. It must respect the setting type. */
		value?: any;
	}
	export interface ConfigSettingValueModelFormProperties {
		lastUpdaterUserEmail: FormControl<string | null | undefined>,
		lastUpdaterUserFullName: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,

		/** The value to serve. It must respect the setting type. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateConfigSettingValueModelFormGroup() {
		return new FormGroup<ConfigSettingValueModelFormProperties>({
			lastUpdaterUserEmail: new FormControl<string | null | undefined>(undefined),
			lastUpdaterUserFullName: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface IntegrationLinkModel {
		description?: string | null;
		integrationLinkType?: IntegrationLinkModelIntegrationLinkType | null;
		key?: string | null;
		url?: string | null;
	}
	export interface IntegrationLinkModelFormProperties {
		description: FormControl<string | null | undefined>,
		integrationLinkType: FormControl<IntegrationLinkModelIntegrationLinkType | null | undefined>,
		key: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationLinkModelFormGroup() {
		return new FormGroup<IntegrationLinkModelFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			integrationLinkType: new FormControl<IntegrationLinkModelIntegrationLinkType | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum IntegrationLinkModelIntegrationLinkType { trello = 'trello', jira = 'jira', monday = 'monday' }

	export interface RolloutPercentageItemModel {

		/**
		 * The percentage value for the rule.
		 * Required
		 */
		percentage: number;

		/** The value to serve when the user falls in the percentage rule. It must respect the setting type. */
		value?: any;
	}
	export interface RolloutPercentageItemModelFormProperties {

		/**
		 * The percentage value for the rule.
		 * Required
		 */
		percentage: FormControl<number | null | undefined>,

		/** The value to serve when the user falls in the percentage rule. It must respect the setting type. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateRolloutPercentageItemModelFormGroup() {
		return new FormGroup<RolloutPercentageItemModelFormProperties>({
			percentage: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface RolloutRuleModel {
		comparator?: RolloutRuleModelComparator | null;

		/**
		 * The user attribute to compare.
		 * Max length: 1000
		 * Min length: 0
		 */
		comparisonAttribute?: string | null;

		/**
		 * The value to compare against.
		 * Max length: 65535
		 * Min length: 0
		 */
		comparisonValue?: string | null;
		segmentComparator?: RolloutRuleModelSegmentComparator | null;

		/** The segment to compare against. */
		segmentId?: string | null;

		/** The value to serve when the comparison matches. It must respect the setting type. */
		value?: any;
	}
	export interface RolloutRuleModelFormProperties {
		comparator: FormControl<RolloutRuleModelComparator | null | undefined>,

		/**
		 * The user attribute to compare.
		 * Max length: 1000
		 * Min length: 0
		 */
		comparisonAttribute: FormControl<string | null | undefined>,

		/**
		 * The value to compare against.
		 * Max length: 65535
		 * Min length: 0
		 */
		comparisonValue: FormControl<string | null | undefined>,
		segmentComparator: FormControl<RolloutRuleModelSegmentComparator | null | undefined>,

		/** The segment to compare against. */
		segmentId: FormControl<string | null | undefined>,

		/** The value to serve when the comparison matches. It must respect the setting type. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateRolloutRuleModelFormGroup() {
		return new FormGroup<RolloutRuleModelFormProperties>({
			comparator: new FormControl<RolloutRuleModelComparator | null | undefined>(undefined),
			comparisonAttribute: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			comparisonValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(65535)]),
			segmentComparator: new FormControl<RolloutRuleModelSegmentComparator | null | undefined>(undefined),
			segmentId: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export enum RolloutRuleModelComparator { isOneOf = 'isOneOf', isNotOneOf = 'isNotOneOf', contains = 'contains', doesNotContain = 'doesNotContain', semVerIsOneOf = 'semVerIsOneOf', semVerIsNotOneOf = 'semVerIsNotOneOf', semVerLess = 'semVerLess', semVerLessOrEquals = 'semVerLessOrEquals', semVerGreater = 'semVerGreater', semVerGreaterOrEquals = 'semVerGreaterOrEquals', numberEquals = 'numberEquals', numberDoesNotEqual = 'numberDoesNotEqual', numberLess = 'numberLess', numberLessOrEquals = 'numberLessOrEquals', numberGreater = 'numberGreater', numberGreaterOrEquals = 'numberGreaterOrEquals', sensitiveIsOneOf = 'sensitiveIsOneOf', sensitiveIsNotOneOf = 'sensitiveIsNotOneOf' }

	export enum RolloutRuleModelSegmentComparator { isIn = 'isIn', isNotIn = 'isNotIn' }

	export interface SettingDataModel {
		createdAt?: Date | null;
		creatorEmail?: string | null;
		creatorFullName?: string | null;
		hint?: string | null;
		isWatching?: boolean | null;
		key?: string | null;
		name?: string | null;
		order?: number | null;
		settingId?: number | null;
		settingType?: SettingDataModelSettingType | null;
	}
	export interface SettingDataModelFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		creatorEmail: FormControl<string | null | undefined>,
		creatorFullName: FormControl<string | null | undefined>,
		hint: FormControl<string | null | undefined>,
		isWatching: FormControl<boolean | null | undefined>,
		key: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		settingId: FormControl<number | null | undefined>,
		settingType: FormControl<SettingDataModelSettingType | null | undefined>,
	}
	export function CreateSettingDataModelFormGroup() {
		return new FormGroup<SettingDataModelFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			creatorEmail: new FormControl<string | null | undefined>(undefined),
			creatorFullName: new FormControl<string | null | undefined>(undefined),
			hint: new FormControl<string | null | undefined>(undefined),
			isWatching: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			settingId: new FormControl<number | null | undefined>(undefined),
			settingType: new FormControl<SettingDataModelSettingType | null | undefined>(undefined),
		});

	}

	export enum SettingDataModelSettingType { boolean = 'boolean', string = 'string', int = 'int', double = 'double' }

	export interface SettingTagModel {
		color?: string | null;
		name?: string | null;
		settingTagId?: number | null;
		tagId?: number | null;
	}
	export interface SettingTagModelFormProperties {
		color: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		settingTagId: FormControl<number | null | undefined>,
		tagId: FormControl<number | null | undefined>,
	}
	export function CreateSettingTagModelFormGroup() {
		return new FormGroup<SettingTagModelFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			settingTagId: new FormControl<number | null | undefined>(undefined),
			tagId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface ConfigSettingValuesModel {
		config?: ConfigModel;
		environment?: EnvironmentModel;
		readOnly?: boolean | null;
		settingValues?: Array<ConfigSettingValueModel>;
	}
	export interface ConfigSettingValuesModelFormProperties {
		readOnly: FormControl<boolean | null | undefined>,
	}
	export function CreateConfigSettingValuesModelFormGroup() {
		return new FormGroup<ConfigSettingValuesModelFormProperties>({
			readOnly: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EnvironmentModel {
		color?: string | null;
		description?: string | null;
		environmentId?: string | null;
		name?: string | null;
		order?: number | null;
		product?: ProductModel;
		reasonRequired?: boolean | null;
	}
	export interface EnvironmentModelFormProperties {
		color: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateEnvironmentModelFormGroup() {
		return new FormGroup<EnvironmentModelFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ConnectRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		clientKey: string;

		/**
		 * Required
		 * Max length: 15000
		 * Min length: 0
		 */
		jiraJwtToken: string;
	}
	export interface ConnectRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		clientKey: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 15000
		 * Min length: 0
		 */
		jiraJwtToken: FormControl<string | null | undefined>,
	}
	export function CreateConnectRequestFormGroup() {
		return new FormGroup<ConnectRequestFormProperties>({
			clientKey: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			jiraJwtToken: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(15000)]),
		});

	}

	export interface CreateConfigRequest {

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: string;
	}
	export interface CreateConfigRequestFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateConfigRequestFormGroup() {
		return new FormGroup<CreateConfigRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface CreateEnvironmentModel {

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		color?: string | null;

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: string;
	}
	export interface CreateEnvironmentModelFormProperties {

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateEnvironmentModelFormGroup() {
		return new FormGroup<CreateEnvironmentModelFormProperties>({
			color: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface CreateOrUpdateEnvironmentAccessModel {
		color?: string | null;
		description?: string | null;
		environmentAccessType?: CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null;
		environmentId?: string | null;
		name?: string | null;
		order?: number | null;
		reasonRequired?: boolean | null;
	}
	export interface CreateOrUpdateEnvironmentAccessModelFormProperties {
		color: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentAccessType: FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateOrUpdateEnvironmentAccessModelFormGroup() {
		return new FormGroup<CreateOrUpdateEnvironmentAccessModelFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentAccessType: new FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType { full = 'full', readOnly = 'readOnly', none = 'none' }

	export interface CreatePermissionGroupRequest {
		accessType?: AccessType | null;
		canCreateOrUpdateConfig?: boolean | null;
		canCreateOrUpdateEnvironment?: boolean | null;
		canCreateOrUpdateSegments?: boolean | null;
		canCreateOrUpdateSetting?: boolean | null;
		canCreateOrUpdateTag?: boolean | null;
		canDeleteConfig?: boolean | null;
		canDeleteEnvironment?: boolean | null;
		canDeleteSegments?: boolean | null;
		canDeleteSetting?: boolean | null;
		canDeleteTag?: boolean | null;
		canManageIntegrations?: boolean | null;
		canManageMembers?: boolean | null;
		canManageProductPreferences?: boolean | null;
		canManageWebhook?: boolean | null;
		canRotateSdkKey?: boolean | null;
		canTagSetting?: boolean | null;
		canUseExportImport?: boolean | null;
		canViewProductAuditLog?: boolean | null;
		canViewProductStatistics?: boolean | null;
		canViewSdkKey?: boolean | null;
		environmentAccesses?: Array<CreateOrUpdateEnvironmentAccessModel>;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: string;
		newEnvironmentAccessType?: CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null;
	}
	export interface CreatePermissionGroupRequestFormProperties {
		accessType: FormControl<AccessType | null | undefined>,
		canCreateOrUpdateConfig: FormControl<boolean | null | undefined>,
		canCreateOrUpdateEnvironment: FormControl<boolean | null | undefined>,
		canCreateOrUpdateSegments: FormControl<boolean | null | undefined>,
		canCreateOrUpdateSetting: FormControl<boolean | null | undefined>,
		canCreateOrUpdateTag: FormControl<boolean | null | undefined>,
		canDeleteConfig: FormControl<boolean | null | undefined>,
		canDeleteEnvironment: FormControl<boolean | null | undefined>,
		canDeleteSegments: FormControl<boolean | null | undefined>,
		canDeleteSetting: FormControl<boolean | null | undefined>,
		canDeleteTag: FormControl<boolean | null | undefined>,
		canManageIntegrations: FormControl<boolean | null | undefined>,
		canManageMembers: FormControl<boolean | null | undefined>,
		canManageProductPreferences: FormControl<boolean | null | undefined>,
		canManageWebhook: FormControl<boolean | null | undefined>,
		canRotateSdkKey: FormControl<boolean | null | undefined>,
		canTagSetting: FormControl<boolean | null | undefined>,
		canUseExportImport: FormControl<boolean | null | undefined>,
		canViewProductAuditLog: FormControl<boolean | null | undefined>,
		canViewProductStatistics: FormControl<boolean | null | undefined>,
		canViewSdkKey: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
		newEnvironmentAccessType: FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>,
	}
	export function CreateCreatePermissionGroupRequestFormGroup() {
		return new FormGroup<CreatePermissionGroupRequestFormProperties>({
			accessType: new FormControl<AccessType | null | undefined>(undefined),
			canCreateOrUpdateConfig: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateEnvironment: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateSegments: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateSetting: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateTag: new FormControl<boolean | null | undefined>(undefined),
			canDeleteConfig: new FormControl<boolean | null | undefined>(undefined),
			canDeleteEnvironment: new FormControl<boolean | null | undefined>(undefined),
			canDeleteSegments: new FormControl<boolean | null | undefined>(undefined),
			canDeleteSetting: new FormControl<boolean | null | undefined>(undefined),
			canDeleteTag: new FormControl<boolean | null | undefined>(undefined),
			canManageIntegrations: new FormControl<boolean | null | undefined>(undefined),
			canManageMembers: new FormControl<boolean | null | undefined>(undefined),
			canManageProductPreferences: new FormControl<boolean | null | undefined>(undefined),
			canManageWebhook: new FormControl<boolean | null | undefined>(undefined),
			canRotateSdkKey: new FormControl<boolean | null | undefined>(undefined),
			canTagSetting: new FormControl<boolean | null | undefined>(undefined),
			canUseExportImport: new FormControl<boolean | null | undefined>(undefined),
			canViewProductAuditLog: new FormControl<boolean | null | undefined>(undefined),
			canViewProductStatistics: new FormControl<boolean | null | undefined>(undefined),
			canViewSdkKey: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			newEnvironmentAccessType: new FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>(undefined),
		});

	}

	export interface CreateProductRequest {

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		name: string;
	}
	export interface CreateProductRequestFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateProductRequestFormGroup() {
		return new FormGroup<CreateProductRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000)]),
		});

	}

	export interface CreateSegmentModel {

		/** Required */
		comparator: RolloutRuleModelComparator;

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		comparisonAttribute: string;

		/**
		 * Required
		 * Max length: 65535
		 * Min length: 0
		 */
		comparisonValue: string;

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: string;
	}
	export interface CreateSegmentModelFormProperties {

		/** Required */
		comparator: FormControl<RolloutRuleModelComparator | null | undefined>,

		/**
		 * Required
		 * Max length: 1000
		 * Min length: 0
		 */
		comparisonAttribute: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 65535
		 * Min length: 0
		 */
		comparisonValue: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateSegmentModelFormGroup() {
		return new FormGroup<CreateSegmentModelFormProperties>({
			comparator: new FormControl<RolloutRuleModelComparator | null | undefined>(undefined, [Validators.required]),
			comparisonAttribute: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(1000)]),
			comparisonValue: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(65535)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface CreateSettingInitialValues {

		/**
		 * A short description for the setting, shown on the Dashboard UI.
		 * Max length: 1000
		 * Min length: 0
		 */
		hint?: string | null;

		/** Optional, initial values of the feature flag or setting in the given Environments. */
		initialValues?: Array<InitialValue>;

		/**
		 * The key of the setting.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		key: string;

		/**
		 * The name of the setting, shown on the Dashboard UI.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: string;

		/** Required */
		settingType: SettingDataModelSettingType;

		/** The IDs of the tags which are attached to the setting. */
		tags?: Array<number>;
	}
	export interface CreateSettingInitialValuesFormProperties {

		/**
		 * A short description for the setting, shown on the Dashboard UI.
		 * Max length: 1000
		 * Min length: 0
		 */
		hint: FormControl<string | null | undefined>,

		/**
		 * The key of the setting.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		key: FormControl<string | null | undefined>,

		/**
		 * The name of the setting, shown on the Dashboard UI.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,

		/** Required */
		settingType: FormControl<SettingDataModelSettingType | null | undefined>,
	}
	export function CreateCreateSettingInitialValuesFormGroup() {
		return new FormGroup<CreateSettingInitialValuesFormProperties>({
			hint: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			key: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255), Validators.pattern('^[a-zA-Z]+[a-zA-Z0-9_]*')]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			settingType: new FormControl<SettingDataModelSettingType | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface InitialValue {

		/** The ID of the Environment where the initial value should be set. */
		environmentId?: string | null;

		/** The initial value in the given Environment. It must respect the setting type. */
		value?: any;
	}
	export interface InitialValueFormProperties {

		/** The ID of the Environment where the initial value should be set. */
		environmentId: FormControl<string | null | undefined>,

		/** The initial value in the given Environment. It must respect the setting type. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateInitialValueFormGroup() {
		return new FormGroup<InitialValueFormProperties>({
			environmentId: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface CreateTagModel {

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		color?: string | null;

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: string;
	}
	export interface CreateTagModelFormProperties {

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCreateTagModelFormGroup() {
		return new FormGroup<CreateTagModelFormProperties>({
			color: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface DeleteIntegrationLinkModel {
		hasRemainingIntegrationLink?: boolean | null;
	}
	export interface DeleteIntegrationLinkModelFormProperties {
		hasRemainingIntegrationLink: FormControl<boolean | null | undefined>,
	}
	export function CreateDeleteIntegrationLinkModelFormGroup() {
		return new FormGroup<DeleteIntegrationLinkModelFormProperties>({
			hasRemainingIntegrationLink: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface DeleteRepositoryReportsRequest {

		/**
		 * If it's set, only this branch's reports belonging to the given repository will be deleted.
		 * Max length: 255
		 * Min length: 0
		 */
		branch?: string | null;

		/**
		 * The Config's identifier from where the reports should be deleted.
		 * Required
		 */
		configId: string;

		/**
		 * The source control repository which's reports should be deleted.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		repository: string;

		/** If it's set, only this setting's reports belonging to the given repository will be deleted. */
		settingId?: number | null;
	}
	export interface DeleteRepositoryReportsRequestFormProperties {

		/**
		 * If it's set, only this branch's reports belonging to the given repository will be deleted.
		 * Max length: 255
		 * Min length: 0
		 */
		branch: FormControl<string | null | undefined>,

		/**
		 * The Config's identifier from where the reports should be deleted.
		 * Required
		 */
		configId: FormControl<string | null | undefined>,

		/**
		 * The source control repository which's reports should be deleted.
		 * Required
		 * Max length: 255
		 * Min length: 0
		 */
		repository: FormControl<string | null | undefined>,

		/** If it's set, only this setting's reports belonging to the given repository will be deleted. */
		settingId: FormControl<number | null | undefined>,
	}
	export function CreateDeleteRepositoryReportsRequestFormGroup() {
		return new FormGroup<DeleteRepositoryReportsRequestFormProperties>({
			branch: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			configId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			repository: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(0), Validators.maxLength(255)]),
			settingId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface EnvironmentAccessModel {
		color?: string | null;
		description?: string | null;
		environmentAccessType?: CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null;
		environmentId?: string | null;
		name?: string | null;
		order?: number | null;
		reasonRequired?: boolean | null;
	}
	export interface EnvironmentAccessModelFormProperties {
		color: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentAccessType: FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateEnvironmentAccessModelFormGroup() {
		return new FormGroup<EnvironmentAccessModelFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentAccessType: new FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum EnvironmentAccessType { full = 'full', readOnly = 'readOnly', none = 'none' }

	export interface EnvironmentModel_haljson {
		_embedded?: EnvironmentModel_haljson_embedded;
		_links?: EnvironmentModel_haljson_links;
		color?: string | null;
		description?: string | null;
		environmentId?: string | null;
		name?: string | null;
		order?: number | null;
		reasonRequired?: boolean | null;
	}
	export interface EnvironmentModel_haljsonFormProperties {
		color: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateEnvironmentModel_haljsonFormGroup() {
		return new FormGroup<EnvironmentModel_haljsonFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EnvironmentModel_haljson_embedded {
		product?: EnvironmentModel_haljson_embeddedProduct;
	}
	export interface EnvironmentModel_haljson_embeddedFormProperties {
	}
	export function CreateEnvironmentModel_haljson_embeddedFormGroup() {
		return new FormGroup<EnvironmentModel_haljson_embeddedFormProperties>({
		});

	}

	export interface EnvironmentModel_haljson_embeddedProduct {
		_embedded?: EnvironmentModel_haljson_embeddedProduct_embedded;
		_links?: EnvironmentModel_haljson_embeddedProduct_links;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface EnvironmentModel_haljson_embeddedProductFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateEnvironmentModel_haljson_embeddedProductFormGroup() {
		return new FormGroup<EnvironmentModel_haljson_embeddedProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface EnvironmentModel_haljson_embeddedProduct_embedded {
		organization?: EnvironmentModel_haljson_embeddedProduct_embeddedOrganization;
	}
	export interface EnvironmentModel_haljson_embeddedProduct_embeddedFormProperties {
	}
	export function CreateEnvironmentModel_haljson_embeddedProduct_embeddedFormGroup() {
		return new FormGroup<EnvironmentModel_haljson_embeddedProduct_embeddedFormProperties>({
		});

	}

	export interface EnvironmentModel_haljson_embeddedProduct_embeddedOrganization {
		_links?: EnvironmentModel_haljson_embeddedProduct_embeddedOrganization_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface EnvironmentModel_haljson_embeddedProduct_embeddedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentModel_haljson_embeddedProduct_embeddedOrganizationFormGroup() {
		return new FormGroup<EnvironmentModel_haljson_embeddedProduct_embeddedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnvironmentModel_haljson_embeddedProduct_embeddedOrganization_links {
		members?: string | null;
		products?: string | null;
	}
	export interface EnvironmentModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentModel_haljson_embeddedProduct_embeddedOrganization_linksFormGroup() {
		return new FormGroup<EnvironmentModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnvironmentModel_haljson_embeddedProduct_links {
		configs?: string | null;
		environments?: string | null;
		members?: string | null;
		'permission-groups'?: string | null;
		segments?: string | null;
		self?: string | null;
		tags?: string | null;
	}
	export interface EnvironmentModel_haljson_embeddedProduct_linksFormProperties {
		configs: FormControl<string | null | undefined>,
		environments: FormControl<string | null | undefined>,
		members: FormControl<string | null | undefined>,
		'permission-groups': FormControl<string | null | undefined>,
		segments: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentModel_haljson_embeddedProduct_linksFormGroup() {
		return new FormGroup<EnvironmentModel_haljson_embeddedProduct_linksFormProperties>({
			configs: new FormControl<string | null | undefined>(undefined),
			environments: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			'permission-groups': new FormControl<string | null | undefined>(undefined),
			segments: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface EnvironmentModel_haljson_links {
		self?: string | null;
	}
	export interface EnvironmentModel_haljson_linksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentModel_haljson_linksFormGroup() {
		return new FormGroup<EnvironmentModel_haljson_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationLinkDetail {
		config?: ConfigModel;
		environment?: EnvironmentModel;
		product?: ProductModel;
		readOnly?: boolean | null;
		setting?: SettingDataModel;
		status?: string | null;
	}
	export interface IntegrationLinkDetailFormProperties {
		readOnly: FormControl<boolean | null | undefined>,
		status: FormControl<string | null | undefined>,
	}
	export function CreateIntegrationLinkDetailFormGroup() {
		return new FormGroup<IntegrationLinkDetailFormProperties>({
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface IntegrationLinkDetailsModel {
		allIntegrationLinkCount?: number | null;
		details?: Array<IntegrationLinkDetail>;
	}
	export interface IntegrationLinkDetailsModelFormProperties {
		allIntegrationLinkCount: FormControl<number | null | undefined>,
	}
	export function CreateIntegrationLinkDetailsModelFormGroup() {
		return new FormGroup<IntegrationLinkDetailsModelFormProperties>({
			allIntegrationLinkCount: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum IntegrationLinkType { trello = 'trello', jira = 'jira', monday = 'monday' }

	export interface InviteMembersRequest {

		/** Required */
		emails: Array<string>;

		/** Required */
		permissionGroupId: number;
	}
	export interface InviteMembersRequestFormProperties {

		/** Required */
		permissionGroupId: FormControl<number | null | undefined>,
	}
	export function CreateInviteMembersRequestFormGroup() {
		return new FormGroup<InviteMembersRequestFormProperties>({
			permissionGroupId: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface JsonNode {
		options?: JsonNodeOptions;
		parent?: JsonNode;
		root?: JsonNode;
	}
	export interface JsonNodeFormProperties {
	}
	export function CreateJsonNodeFormGroup() {
		return new FormGroup<JsonNodeFormProperties>({
		});

	}

	export interface JsonNodeOptions {
		propertyNameCaseInsensitive?: boolean | null;
	}
	export interface JsonNodeOptionsFormProperties {
		propertyNameCaseInsensitive: FormControl<boolean | null | undefined>,
	}
	export function CreateJsonNodeOptionsFormGroup() {
		return new FormGroup<JsonNodeOptionsFormProperties>({
			propertyNameCaseInsensitive: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface JsonPatch {
		operations?: Array<PatchOperation>;
	}
	export interface JsonPatchFormProperties {
	}
	export function CreateJsonPatchFormGroup() {
		return new FormGroup<JsonPatchFormProperties>({
		});

	}

	export interface PatchOperation {
		from?: JsonPointer;
		op?: PatchOperationOp | null;
		path?: JsonPointer;
		value?: JsonNode;
	}
	export interface PatchOperationFormProperties {
		op: FormControl<PatchOperationOp | null | undefined>,
	}
	export function CreatePatchOperationFormGroup() {
		return new FormGroup<PatchOperationFormProperties>({
			op: new FormControl<PatchOperationOp | null | undefined>(undefined),
		});

	}

	export interface JsonPointer {
		isUriEncoded?: boolean | null;
		kind?: JsonPointerKind | null;
		segments?: Array<PointerSegment>;
		source?: string | null;
	}
	export interface JsonPointerFormProperties {
		isUriEncoded: FormControl<boolean | null | undefined>,
		kind: FormControl<JsonPointerKind | null | undefined>,
		source: FormControl<string | null | undefined>,
	}
	export function CreateJsonPointerFormGroup() {
		return new FormGroup<JsonPointerFormProperties>({
			isUriEncoded: new FormControl<boolean | null | undefined>(undefined),
			kind: new FormControl<JsonPointerKind | null | undefined>(undefined),
			source: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum JsonPointerKind { unspecified = 'unspecified', plain = 'plain', uriEncoded = 'uriEncoded' }

	export interface PointerSegment {
		source?: string | null;
		value?: string | null;
	}
	export interface PointerSegmentFormProperties {
		source: FormControl<string | null | undefined>,
		value: FormControl<string | null | undefined>,
	}
	export function CreatePointerSegmentFormGroup() {
		return new FormGroup<PointerSegmentFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PatchOperationOp { unknown = 'unknown', add = 'add', remove = 'remove', replace = 'replace', move = 'move', copy = 'copy', test = 'test' }

	export interface MeModel {
		email?: string | null;
		fullName?: string | null;
	}
	export interface MeModelFormProperties {
		email: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,
	}
	export function CreateMeModelFormGroup() {
		return new FormGroup<MeModelFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface MemberModel {
		email?: string | null;
		fullName?: string | null;
		permissionGroupId?: number | null;
		productId?: string | null;
		userId?: string | null;
	}
	export interface MemberModelFormProperties {
		email: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,
		permissionGroupId: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateMemberModelFormGroup() {
		return new FormGroup<MemberModelFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			permissionGroupId: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OperationType { unknown = 'unknown', add = 'add', remove = 'remove', replace = 'replace', move = 'move', copy = 'copy', test = 'test' }

	export interface OrganizationModel_haljson {
		_links?: OrganizationModel_haljson_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface OrganizationModel_haljsonFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationModel_haljsonFormGroup() {
		return new FormGroup<OrganizationModel_haljsonFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface OrganizationModel_haljson_links {
		members?: string | null;
		products?: string | null;
	}
	export interface OrganizationModel_haljson_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreateOrganizationModel_haljson_linksFormGroup() {
		return new FormGroup<OrganizationModel_haljson_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PermissionGroupModel {
		accessType?: AccessType | null;
		canCreateOrUpdateConfig?: boolean | null;
		canCreateOrUpdateEnvironment?: boolean | null;
		canCreateOrUpdateSegments?: boolean | null;
		canCreateOrUpdateSetting?: boolean | null;
		canCreateOrUpdateTag?: boolean | null;
		canDeleteConfig?: boolean | null;
		canDeleteEnvironment?: boolean | null;
		canDeleteSegments?: boolean | null;
		canDeleteSetting?: boolean | null;
		canDeleteTag?: boolean | null;
		canManageIntegrations?: boolean | null;
		canManageMembers?: boolean | null;
		canManageProductPreferences?: boolean | null;
		canManageWebhook?: boolean | null;
		canRotateSdkKey?: boolean | null;
		canTagSetting?: boolean | null;
		canUseExportImport?: boolean | null;
		canViewProductAuditLog?: boolean | null;
		canViewProductStatistics?: boolean | null;
		canViewSdkKey?: boolean | null;
		environmentAccesses?: Array<EnvironmentAccessModel>;
		name?: string | null;
		newEnvironmentAccessType?: CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null;
		permissionGroupId?: number | null;
		product?: ProductModel;
	}
	export interface PermissionGroupModelFormProperties {
		accessType: FormControl<AccessType | null | undefined>,
		canCreateOrUpdateConfig: FormControl<boolean | null | undefined>,
		canCreateOrUpdateEnvironment: FormControl<boolean | null | undefined>,
		canCreateOrUpdateSegments: FormControl<boolean | null | undefined>,
		canCreateOrUpdateSetting: FormControl<boolean | null | undefined>,
		canCreateOrUpdateTag: FormControl<boolean | null | undefined>,
		canDeleteConfig: FormControl<boolean | null | undefined>,
		canDeleteEnvironment: FormControl<boolean | null | undefined>,
		canDeleteSegments: FormControl<boolean | null | undefined>,
		canDeleteSetting: FormControl<boolean | null | undefined>,
		canDeleteTag: FormControl<boolean | null | undefined>,
		canManageIntegrations: FormControl<boolean | null | undefined>,
		canManageMembers: FormControl<boolean | null | undefined>,
		canManageProductPreferences: FormControl<boolean | null | undefined>,
		canManageWebhook: FormControl<boolean | null | undefined>,
		canRotateSdkKey: FormControl<boolean | null | undefined>,
		canTagSetting: FormControl<boolean | null | undefined>,
		canUseExportImport: FormControl<boolean | null | undefined>,
		canViewProductAuditLog: FormControl<boolean | null | undefined>,
		canViewProductStatistics: FormControl<boolean | null | undefined>,
		canViewSdkKey: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		newEnvironmentAccessType: FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>,
		permissionGroupId: FormControl<number | null | undefined>,
	}
	export function CreatePermissionGroupModelFormGroup() {
		return new FormGroup<PermissionGroupModelFormProperties>({
			accessType: new FormControl<AccessType | null | undefined>(undefined),
			canCreateOrUpdateConfig: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateEnvironment: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateSegments: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateSetting: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateTag: new FormControl<boolean | null | undefined>(undefined),
			canDeleteConfig: new FormControl<boolean | null | undefined>(undefined),
			canDeleteEnvironment: new FormControl<boolean | null | undefined>(undefined),
			canDeleteSegments: new FormControl<boolean | null | undefined>(undefined),
			canDeleteSetting: new FormControl<boolean | null | undefined>(undefined),
			canDeleteTag: new FormControl<boolean | null | undefined>(undefined),
			canManageIntegrations: new FormControl<boolean | null | undefined>(undefined),
			canManageMembers: new FormControl<boolean | null | undefined>(undefined),
			canManageProductPreferences: new FormControl<boolean | null | undefined>(undefined),
			canManageWebhook: new FormControl<boolean | null | undefined>(undefined),
			canRotateSdkKey: new FormControl<boolean | null | undefined>(undefined),
			canTagSetting: new FormControl<boolean | null | undefined>(undefined),
			canUseExportImport: new FormControl<boolean | null | undefined>(undefined),
			canViewProductAuditLog: new FormControl<boolean | null | undefined>(undefined),
			canViewProductStatistics: new FormControl<boolean | null | undefined>(undefined),
			canViewSdkKey: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newEnvironmentAccessType: new FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>(undefined),
			permissionGroupId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PermissionGroupModel_haljson {
		_embedded?: PermissionGroupModel_haljson_embedded;
		_links?: PermissionGroupModel_haljson_links;
		accessType?: AccessType | null;
		canCreateOrUpdateConfig?: boolean | null;
		canCreateOrUpdateEnvironment?: boolean | null;
		canCreateOrUpdateSegments?: boolean | null;
		canCreateOrUpdateSetting?: boolean | null;
		canCreateOrUpdateTag?: boolean | null;
		canDeleteConfig?: boolean | null;
		canDeleteEnvironment?: boolean | null;
		canDeleteSegments?: boolean | null;
		canDeleteSetting?: boolean | null;
		canDeleteTag?: boolean | null;
		canManageIntegrations?: boolean | null;
		canManageMembers?: boolean | null;
		canManageProductPreferences?: boolean | null;
		canManageWebhook?: boolean | null;
		canRotateSdkKey?: boolean | null;
		canTagSetting?: boolean | null;
		canUseExportImport?: boolean | null;
		canViewProductAuditLog?: boolean | null;
		canViewProductStatistics?: boolean | null;
		canViewSdkKey?: boolean | null;
		environmentAccesses?: Array<EnvironmentAccessModel>;
		name?: string | null;
		newEnvironmentAccessType?: CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null;
		permissionGroupId?: number | null;
	}
	export interface PermissionGroupModel_haljsonFormProperties {
		accessType: FormControl<AccessType | null | undefined>,
		canCreateOrUpdateConfig: FormControl<boolean | null | undefined>,
		canCreateOrUpdateEnvironment: FormControl<boolean | null | undefined>,
		canCreateOrUpdateSegments: FormControl<boolean | null | undefined>,
		canCreateOrUpdateSetting: FormControl<boolean | null | undefined>,
		canCreateOrUpdateTag: FormControl<boolean | null | undefined>,
		canDeleteConfig: FormControl<boolean | null | undefined>,
		canDeleteEnvironment: FormControl<boolean | null | undefined>,
		canDeleteSegments: FormControl<boolean | null | undefined>,
		canDeleteSetting: FormControl<boolean | null | undefined>,
		canDeleteTag: FormControl<boolean | null | undefined>,
		canManageIntegrations: FormControl<boolean | null | undefined>,
		canManageMembers: FormControl<boolean | null | undefined>,
		canManageProductPreferences: FormControl<boolean | null | undefined>,
		canManageWebhook: FormControl<boolean | null | undefined>,
		canRotateSdkKey: FormControl<boolean | null | undefined>,
		canTagSetting: FormControl<boolean | null | undefined>,
		canUseExportImport: FormControl<boolean | null | undefined>,
		canViewProductAuditLog: FormControl<boolean | null | undefined>,
		canViewProductStatistics: FormControl<boolean | null | undefined>,
		canViewSdkKey: FormControl<boolean | null | undefined>,
		name: FormControl<string | null | undefined>,
		newEnvironmentAccessType: FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>,
		permissionGroupId: FormControl<number | null | undefined>,
	}
	export function CreatePermissionGroupModel_haljsonFormGroup() {
		return new FormGroup<PermissionGroupModel_haljsonFormProperties>({
			accessType: new FormControl<AccessType | null | undefined>(undefined),
			canCreateOrUpdateConfig: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateEnvironment: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateSegments: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateSetting: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateTag: new FormControl<boolean | null | undefined>(undefined),
			canDeleteConfig: new FormControl<boolean | null | undefined>(undefined),
			canDeleteEnvironment: new FormControl<boolean | null | undefined>(undefined),
			canDeleteSegments: new FormControl<boolean | null | undefined>(undefined),
			canDeleteSetting: new FormControl<boolean | null | undefined>(undefined),
			canDeleteTag: new FormControl<boolean | null | undefined>(undefined),
			canManageIntegrations: new FormControl<boolean | null | undefined>(undefined),
			canManageMembers: new FormControl<boolean | null | undefined>(undefined),
			canManageProductPreferences: new FormControl<boolean | null | undefined>(undefined),
			canManageWebhook: new FormControl<boolean | null | undefined>(undefined),
			canRotateSdkKey: new FormControl<boolean | null | undefined>(undefined),
			canTagSetting: new FormControl<boolean | null | undefined>(undefined),
			canUseExportImport: new FormControl<boolean | null | undefined>(undefined),
			canViewProductAuditLog: new FormControl<boolean | null | undefined>(undefined),
			canViewProductStatistics: new FormControl<boolean | null | undefined>(undefined),
			canViewSdkKey: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			newEnvironmentAccessType: new FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>(undefined),
			permissionGroupId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface PermissionGroupModel_haljson_embedded {
		product?: PermissionGroupModel_haljson_embeddedProduct;
	}
	export interface PermissionGroupModel_haljson_embeddedFormProperties {
	}
	export function CreatePermissionGroupModel_haljson_embeddedFormGroup() {
		return new FormGroup<PermissionGroupModel_haljson_embeddedFormProperties>({
		});

	}

	export interface PermissionGroupModel_haljson_embeddedProduct {
		_embedded?: PermissionGroupModel_haljson_embeddedProduct_embedded;
		_links?: PermissionGroupModel_haljson_embeddedProduct_links;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface PermissionGroupModel_haljson_embeddedProductFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreatePermissionGroupModel_haljson_embeddedProductFormGroup() {
		return new FormGroup<PermissionGroupModel_haljson_embeddedProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface PermissionGroupModel_haljson_embeddedProduct_embedded {
		organization?: PermissionGroupModel_haljson_embeddedProduct_embeddedOrganization;
	}
	export interface PermissionGroupModel_haljson_embeddedProduct_embeddedFormProperties {
	}
	export function CreatePermissionGroupModel_haljson_embeddedProduct_embeddedFormGroup() {
		return new FormGroup<PermissionGroupModel_haljson_embeddedProduct_embeddedFormProperties>({
		});

	}

	export interface PermissionGroupModel_haljson_embeddedProduct_embeddedOrganization {
		_links?: PermissionGroupModel_haljson_embeddedProduct_embeddedOrganization_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface PermissionGroupModel_haljson_embeddedProduct_embeddedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreatePermissionGroupModel_haljson_embeddedProduct_embeddedOrganizationFormGroup() {
		return new FormGroup<PermissionGroupModel_haljson_embeddedProduct_embeddedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PermissionGroupModel_haljson_embeddedProduct_embeddedOrganization_links {
		members?: string | null;
		products?: string | null;
	}
	export interface PermissionGroupModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreatePermissionGroupModel_haljson_embeddedProduct_embeddedOrganization_linksFormGroup() {
		return new FormGroup<PermissionGroupModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PermissionGroupModel_haljson_embeddedProduct_links {
		configs?: string | null;
		environments?: string | null;
		members?: string | null;
		'permission-groups'?: string | null;
		segments?: string | null;
		self?: string | null;
		tags?: string | null;
	}
	export interface PermissionGroupModel_haljson_embeddedProduct_linksFormProperties {
		configs: FormControl<string | null | undefined>,
		environments: FormControl<string | null | undefined>,
		members: FormControl<string | null | undefined>,
		'permission-groups': FormControl<string | null | undefined>,
		segments: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreatePermissionGroupModel_haljson_embeddedProduct_linksFormGroup() {
		return new FormGroup<PermissionGroupModel_haljson_embeddedProduct_linksFormProperties>({
			configs: new FormControl<string | null | undefined>(undefined),
			environments: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			'permission-groups': new FormControl<string | null | undefined>(undefined),
			segments: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PermissionGroupModel_haljson_links {
		self?: string | null;
	}
	export interface PermissionGroupModel_haljson_linksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreatePermissionGroupModel_haljson_linksFormGroup() {
		return new FormGroup<PermissionGroupModel_haljson_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductModel_haljson {
		_embedded?: ProductModel_haljson_embedded;
		_links?: ProductModel_haljson_links;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface ProductModel_haljsonFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateProductModel_haljsonFormGroup() {
		return new FormGroup<ProductModel_haljsonFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface ProductModel_haljson_embedded {
		organization?: ProductModel_haljson_embeddedOrganization;
	}
	export interface ProductModel_haljson_embeddedFormProperties {
	}
	export function CreateProductModel_haljson_embeddedFormGroup() {
		return new FormGroup<ProductModel_haljson_embeddedFormProperties>({
		});

	}

	export interface ProductModel_haljson_embeddedOrganization {
		_links?: ProductModel_haljson_embeddedOrganization_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface ProductModel_haljson_embeddedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateProductModel_haljson_embeddedOrganizationFormGroup() {
		return new FormGroup<ProductModel_haljson_embeddedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductModel_haljson_embeddedOrganization_links {
		members?: string | null;
		products?: string | null;
	}
	export interface ProductModel_haljson_embeddedOrganization_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreateProductModel_haljson_embeddedOrganization_linksFormGroup() {
		return new FormGroup<ProductModel_haljson_embeddedOrganization_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ProductModel_haljson_links {
		configs?: string | null;
		environments?: string | null;
		members?: string | null;
		'permission-groups'?: string | null;
		segments?: string | null;
		self?: string | null;
		tags?: string | null;
	}
	export interface ProductModel_haljson_linksFormProperties {
		configs: FormControl<string | null | undefined>,
		environments: FormControl<string | null | undefined>,
		members: FormControl<string | null | undefined>,
		'permission-groups': FormControl<string | null | undefined>,
		segments: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateProductModel_haljson_linksFormGroup() {
		return new FormGroup<ProductModel_haljson_linksFormProperties>({
			configs: new FormControl<string | null | undefined>(undefined),
			environments: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			'permission-groups': new FormControl<string | null | undefined>(undefined),
			segments: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RolloutRuleComparator { isOneOf = 'isOneOf', isNotOneOf = 'isNotOneOf', contains = 'contains', doesNotContain = 'doesNotContain', semVerIsOneOf = 'semVerIsOneOf', semVerIsNotOneOf = 'semVerIsNotOneOf', semVerLess = 'semVerLess', semVerLessOrEquals = 'semVerLessOrEquals', semVerGreater = 'semVerGreater', semVerGreaterOrEquals = 'semVerGreaterOrEquals', numberEquals = 'numberEquals', numberDoesNotEqual = 'numberDoesNotEqual', numberLess = 'numberLess', numberLessOrEquals = 'numberLessOrEquals', numberGreater = 'numberGreater', numberGreaterOrEquals = 'numberGreaterOrEquals', sensitiveIsOneOf = 'sensitiveIsOneOf', sensitiveIsNotOneOf = 'sensitiveIsNotOneOf' }

	export interface SdkKeysModel {
		primary?: string | null;
		secondary?: string | null;
	}
	export interface SdkKeysModelFormProperties {
		primary: FormControl<string | null | undefined>,
		secondary: FormControl<string | null | undefined>,
	}
	export function CreateSdkKeysModelFormGroup() {
		return new FormGroup<SdkKeysModelFormProperties>({
			primary: new FormControl<string | null | undefined>(undefined),
			secondary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SegmentComparator { isIn = 'isIn', isNotIn = 'isNotIn' }

	export interface SegmentListModel {
		createdAt?: Date | null;
		creatorEmail?: string | null;
		creatorFullName?: string | null;
		description?: string | null;
		lastUpdaterEmail?: string | null;
		lastUpdaterFullName?: string | null;
		name?: string | null;
		product?: ProductModel;
		segmentId?: string | null;
		updatedAt?: Date | null;
		usage?: number | null;
	}
	export interface SegmentListModelFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		creatorEmail: FormControl<string | null | undefined>,
		creatorFullName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastUpdaterEmail: FormControl<string | null | undefined>,
		lastUpdaterFullName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		segmentId: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		usage: FormControl<number | null | undefined>,
	}
	export function CreateSegmentListModelFormGroup() {
		return new FormGroup<SegmentListModelFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			creatorEmail: new FormControl<string | null | undefined>(undefined),
			creatorFullName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdaterEmail: new FormControl<string | null | undefined>(undefined),
			lastUpdaterFullName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			segmentId: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			usage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SegmentListModel_haljson {
		_embedded?: SegmentListModel_haljson_embedded;
		_links?: SegmentListModel_haljson_links;
		createdAt?: Date | null;
		creatorEmail?: string | null;
		creatorFullName?: string | null;
		description?: string | null;
		lastUpdaterEmail?: string | null;
		lastUpdaterFullName?: string | null;
		name?: string | null;
		segmentId?: string | null;
		updatedAt?: Date | null;
		usage?: number | null;
	}
	export interface SegmentListModel_haljsonFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		creatorEmail: FormControl<string | null | undefined>,
		creatorFullName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastUpdaterEmail: FormControl<string | null | undefined>,
		lastUpdaterFullName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		segmentId: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
		usage: FormControl<number | null | undefined>,
	}
	export function CreateSegmentListModel_haljsonFormGroup() {
		return new FormGroup<SegmentListModel_haljsonFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			creatorEmail: new FormControl<string | null | undefined>(undefined),
			creatorFullName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdaterEmail: new FormControl<string | null | undefined>(undefined),
			lastUpdaterFullName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			segmentId: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			usage: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SegmentListModel_haljson_embedded {
		product?: SegmentListModel_haljson_embeddedProduct;
	}
	export interface SegmentListModel_haljson_embeddedFormProperties {
	}
	export function CreateSegmentListModel_haljson_embeddedFormGroup() {
		return new FormGroup<SegmentListModel_haljson_embeddedFormProperties>({
		});

	}

	export interface SegmentListModel_haljson_embeddedProduct {
		_embedded?: SegmentListModel_haljson_embeddedProduct_embedded;
		_links?: SegmentListModel_haljson_embeddedProduct_links;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface SegmentListModel_haljson_embeddedProductFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateSegmentListModel_haljson_embeddedProductFormGroup() {
		return new FormGroup<SegmentListModel_haljson_embeddedProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SegmentListModel_haljson_embeddedProduct_embedded {
		organization?: SegmentListModel_haljson_embeddedProduct_embeddedOrganization;
	}
	export interface SegmentListModel_haljson_embeddedProduct_embeddedFormProperties {
	}
	export function CreateSegmentListModel_haljson_embeddedProduct_embeddedFormGroup() {
		return new FormGroup<SegmentListModel_haljson_embeddedProduct_embeddedFormProperties>({
		});

	}

	export interface SegmentListModel_haljson_embeddedProduct_embeddedOrganization {
		_links?: SegmentListModel_haljson_embeddedProduct_embeddedOrganization_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface SegmentListModel_haljson_embeddedProduct_embeddedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateSegmentListModel_haljson_embeddedProduct_embeddedOrganizationFormGroup() {
		return new FormGroup<SegmentListModel_haljson_embeddedProduct_embeddedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SegmentListModel_haljson_embeddedProduct_embeddedOrganization_links {
		members?: string | null;
		products?: string | null;
	}
	export interface SegmentListModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreateSegmentListModel_haljson_embeddedProduct_embeddedOrganization_linksFormGroup() {
		return new FormGroup<SegmentListModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SegmentListModel_haljson_embeddedProduct_links {
		configs?: string | null;
		environments?: string | null;
		members?: string | null;
		'permission-groups'?: string | null;
		segments?: string | null;
		self?: string | null;
		tags?: string | null;
	}
	export interface SegmentListModel_haljson_embeddedProduct_linksFormProperties {
		configs: FormControl<string | null | undefined>,
		environments: FormControl<string | null | undefined>,
		members: FormControl<string | null | undefined>,
		'permission-groups': FormControl<string | null | undefined>,
		segments: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateSegmentListModel_haljson_embeddedProduct_linksFormGroup() {
		return new FormGroup<SegmentListModel_haljson_embeddedProduct_linksFormProperties>({
			configs: new FormControl<string | null | undefined>(undefined),
			environments: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			'permission-groups': new FormControl<string | null | undefined>(undefined),
			segments: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SegmentListModel_haljson_links {
		self?: string | null;
	}
	export interface SegmentListModel_haljson_linksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateSegmentListModel_haljson_linksFormGroup() {
		return new FormGroup<SegmentListModel_haljson_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SegmentModel {
		comparator?: RolloutRuleModelComparator | null;
		comparisonAttribute?: string | null;
		comparisonValue?: string | null;
		createdAt?: Date | null;
		creatorEmail?: string | null;
		creatorFullName?: string | null;
		description?: string | null;
		lastUpdaterEmail?: string | null;
		lastUpdaterFullName?: string | null;
		name?: string | null;
		product?: ProductModel;
		segmentId?: string | null;
		updatedAt?: Date | null;
	}
	export interface SegmentModelFormProperties {
		comparator: FormControl<RolloutRuleModelComparator | null | undefined>,
		comparisonAttribute: FormControl<string | null | undefined>,
		comparisonValue: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		creatorEmail: FormControl<string | null | undefined>,
		creatorFullName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastUpdaterEmail: FormControl<string | null | undefined>,
		lastUpdaterFullName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		segmentId: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSegmentModelFormGroup() {
		return new FormGroup<SegmentModelFormProperties>({
			comparator: new FormControl<RolloutRuleModelComparator | null | undefined>(undefined),
			comparisonAttribute: new FormControl<string | null | undefined>(undefined),
			comparisonValue: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			creatorEmail: new FormControl<string | null | undefined>(undefined),
			creatorFullName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdaterEmail: new FormControl<string | null | undefined>(undefined),
			lastUpdaterFullName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			segmentId: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SegmentModel_haljson {
		_embedded?: SegmentModel_haljson_embedded;
		_links?: SegmentModel_haljson_links;
		comparator?: RolloutRuleModelComparator | null;
		comparisonAttribute?: string | null;
		comparisonValue?: string | null;
		createdAt?: Date | null;
		creatorEmail?: string | null;
		creatorFullName?: string | null;
		description?: string | null;
		lastUpdaterEmail?: string | null;
		lastUpdaterFullName?: string | null;
		name?: string | null;
		segmentId?: string | null;
		updatedAt?: Date | null;
	}
	export interface SegmentModel_haljsonFormProperties {
		comparator: FormControl<RolloutRuleModelComparator | null | undefined>,
		comparisonAttribute: FormControl<string | null | undefined>,
		comparisonValue: FormControl<string | null | undefined>,
		createdAt: FormControl<Date | null | undefined>,
		creatorEmail: FormControl<string | null | undefined>,
		creatorFullName: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		lastUpdaterEmail: FormControl<string | null | undefined>,
		lastUpdaterFullName: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		segmentId: FormControl<string | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,
	}
	export function CreateSegmentModel_haljsonFormGroup() {
		return new FormGroup<SegmentModel_haljsonFormProperties>({
			comparator: new FormControl<RolloutRuleModelComparator | null | undefined>(undefined),
			comparisonAttribute: new FormControl<string | null | undefined>(undefined),
			comparisonValue: new FormControl<string | null | undefined>(undefined),
			createdAt: new FormControl<Date | null | undefined>(undefined),
			creatorEmail: new FormControl<string | null | undefined>(undefined),
			creatorFullName: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			lastUpdaterEmail: new FormControl<string | null | undefined>(undefined),
			lastUpdaterFullName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			segmentId: new FormControl<string | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
		});

	}

	export interface SegmentModel_haljson_embedded {
		product?: SegmentModel_haljson_embeddedProduct;
	}
	export interface SegmentModel_haljson_embeddedFormProperties {
	}
	export function CreateSegmentModel_haljson_embeddedFormGroup() {
		return new FormGroup<SegmentModel_haljson_embeddedFormProperties>({
		});

	}

	export interface SegmentModel_haljson_embeddedProduct {
		_embedded?: SegmentModel_haljson_embeddedProduct_embedded;
		_links?: SegmentModel_haljson_embeddedProduct_links;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface SegmentModel_haljson_embeddedProductFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateSegmentModel_haljson_embeddedProductFormGroup() {
		return new FormGroup<SegmentModel_haljson_embeddedProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SegmentModel_haljson_embeddedProduct_embedded {
		organization?: SegmentModel_haljson_embeddedProduct_embeddedOrganization;
	}
	export interface SegmentModel_haljson_embeddedProduct_embeddedFormProperties {
	}
	export function CreateSegmentModel_haljson_embeddedProduct_embeddedFormGroup() {
		return new FormGroup<SegmentModel_haljson_embeddedProduct_embeddedFormProperties>({
		});

	}

	export interface SegmentModel_haljson_embeddedProduct_embeddedOrganization {
		_links?: SegmentModel_haljson_embeddedProduct_embeddedOrganization_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface SegmentModel_haljson_embeddedProduct_embeddedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateSegmentModel_haljson_embeddedProduct_embeddedOrganizationFormGroup() {
		return new FormGroup<SegmentModel_haljson_embeddedProduct_embeddedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SegmentModel_haljson_embeddedProduct_embeddedOrganization_links {
		members?: string | null;
		products?: string | null;
	}
	export interface SegmentModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreateSegmentModel_haljson_embeddedProduct_embeddedOrganization_linksFormGroup() {
		return new FormGroup<SegmentModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SegmentModel_haljson_embeddedProduct_links {
		configs?: string | null;
		environments?: string | null;
		members?: string | null;
		'permission-groups'?: string | null;
		segments?: string | null;
		self?: string | null;
		tags?: string | null;
	}
	export interface SegmentModel_haljson_embeddedProduct_linksFormProperties {
		configs: FormControl<string | null | undefined>,
		environments: FormControl<string | null | undefined>,
		members: FormControl<string | null | undefined>,
		'permission-groups': FormControl<string | null | undefined>,
		segments: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateSegmentModel_haljson_embeddedProduct_linksFormGroup() {
		return new FormGroup<SegmentModel_haljson_embeddedProduct_linksFormProperties>({
			configs: new FormControl<string | null | undefined>(undefined),
			environments: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			'permission-groups': new FormControl<string | null | undefined>(undefined),
			segments: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SegmentModel_haljson_links {
		self?: string | null;
	}
	export interface SegmentModel_haljson_linksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateSegmentModel_haljson_linksFormGroup() {
		return new FormGroup<SegmentModel_haljson_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingModel {
		configId?: string | null;
		configName?: string | null;
		hint?: string | null;
		key?: string | null;
		name?: string | null;
		order?: number | null;
		settingId?: number | null;
		settingType?: SettingDataModelSettingType | null;
		tags?: Array<TagModel>;
	}
	export interface SettingModelFormProperties {
		configId: FormControl<string | null | undefined>,
		configName: FormControl<string | null | undefined>,
		hint: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		settingId: FormControl<number | null | undefined>,
		settingType: FormControl<SettingDataModelSettingType | null | undefined>,
	}
	export function CreateSettingModelFormGroup() {
		return new FormGroup<SettingModelFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined),
			configName: new FormControl<string | null | undefined>(undefined),
			hint: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			settingId: new FormControl<number | null | undefined>(undefined),
			settingType: new FormControl<SettingDataModelSettingType | null | undefined>(undefined),
		});

	}

	export interface TagModel {
		color?: string | null;
		name?: string | null;
		product?: ProductModel;
		tagId?: number | null;
	}
	export interface TagModelFormProperties {
		color: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		tagId: FormControl<number | null | undefined>,
	}
	export function CreateTagModelFormGroup() {
		return new FormGroup<TagModelFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tagId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SettingModel_haljson {
		_embedded?: SettingModel_haljson_embedded;
		_links?: SettingModel_haljson_links;
		configId?: string | null;
		configName?: string | null;
		hint?: string | null;
		key?: string | null;
		name?: string | null;
		order?: number | null;
		settingId?: number | null;
		settingType?: SettingDataModelSettingType | null;
	}
	export interface SettingModel_haljsonFormProperties {
		configId: FormControl<string | null | undefined>,
		configName: FormControl<string | null | undefined>,
		hint: FormControl<string | null | undefined>,
		key: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		settingId: FormControl<number | null | undefined>,
		settingType: FormControl<SettingDataModelSettingType | null | undefined>,
	}
	export function CreateSettingModel_haljsonFormGroup() {
		return new FormGroup<SettingModel_haljsonFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined),
			configName: new FormControl<string | null | undefined>(undefined),
			hint: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			settingId: new FormControl<number | null | undefined>(undefined),
			settingType: new FormControl<SettingDataModelSettingType | null | undefined>(undefined),
		});

	}

	export interface SettingModel_haljson_embedded {
		SettingModel_haljson_embeddedTags?: Array<SettingModel_haljson_embeddedTags>;
	}
	export interface SettingModel_haljson_embeddedFormProperties {
	}
	export function CreateSettingModel_haljson_embeddedFormGroup() {
		return new FormGroup<SettingModel_haljson_embeddedFormProperties>({
		});

	}

	export interface SettingModel_haljson_embeddedTags {
		_embedded?: SettingModel_haljson_embeddedTags_embedded;
		_links?: SettingModel_haljson_embeddedTags_links;
		color?: string | null;
		name?: string | null;
		tagId?: number | null;
	}
	export interface SettingModel_haljson_embeddedTagsFormProperties {
		color: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		tagId: FormControl<number | null | undefined>,
	}
	export function CreateSettingModel_haljson_embeddedTagsFormGroup() {
		return new FormGroup<SettingModel_haljson_embeddedTagsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tagId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SettingModel_haljson_embeddedTags_embedded {
		product?: SettingModel_haljson_embeddedTags_embeddedProduct;
	}
	export interface SettingModel_haljson_embeddedTags_embeddedFormProperties {
	}
	export function CreateSettingModel_haljson_embeddedTags_embeddedFormGroup() {
		return new FormGroup<SettingModel_haljson_embeddedTags_embeddedFormProperties>({
		});

	}

	export interface SettingModel_haljson_embeddedTags_embeddedProduct {
		_embedded?: SettingModel_haljson_embeddedTags_embeddedProduct_embedded;
		_links?: SettingModel_haljson_embeddedTags_embeddedProduct_links;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface SettingModel_haljson_embeddedTags_embeddedProductFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateSettingModel_haljson_embeddedTags_embeddedProductFormGroup() {
		return new FormGroup<SettingModel_haljson_embeddedTags_embeddedProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SettingModel_haljson_embeddedTags_embeddedProduct_embedded {
		organization?: SettingModel_haljson_embeddedTags_embeddedProduct_embeddedOrganization;
	}
	export interface SettingModel_haljson_embeddedTags_embeddedProduct_embeddedFormProperties {
	}
	export function CreateSettingModel_haljson_embeddedTags_embeddedProduct_embeddedFormGroup() {
		return new FormGroup<SettingModel_haljson_embeddedTags_embeddedProduct_embeddedFormProperties>({
		});

	}

	export interface SettingModel_haljson_embeddedTags_embeddedProduct_embeddedOrganization {
		_links?: SettingModel_haljson_embeddedTags_embeddedProduct_embeddedOrganization_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface SettingModel_haljson_embeddedTags_embeddedProduct_embeddedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateSettingModel_haljson_embeddedTags_embeddedProduct_embeddedOrganizationFormGroup() {
		return new FormGroup<SettingModel_haljson_embeddedTags_embeddedProduct_embeddedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingModel_haljson_embeddedTags_embeddedProduct_embeddedOrganization_links {
		members?: string | null;
		products?: string | null;
	}
	export interface SettingModel_haljson_embeddedTags_embeddedProduct_embeddedOrganization_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreateSettingModel_haljson_embeddedTags_embeddedProduct_embeddedOrganization_linksFormGroup() {
		return new FormGroup<SettingModel_haljson_embeddedTags_embeddedProduct_embeddedOrganization_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingModel_haljson_embeddedTags_embeddedProduct_links {
		configs?: string | null;
		environments?: string | null;
		members?: string | null;
		'permission-groups'?: string | null;
		segments?: string | null;
		self?: string | null;
		tags?: string | null;
	}
	export interface SettingModel_haljson_embeddedTags_embeddedProduct_linksFormProperties {
		configs: FormControl<string | null | undefined>,
		environments: FormControl<string | null | undefined>,
		members: FormControl<string | null | undefined>,
		'permission-groups': FormControl<string | null | undefined>,
		segments: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateSettingModel_haljson_embeddedTags_embeddedProduct_linksFormGroup() {
		return new FormGroup<SettingModel_haljson_embeddedTags_embeddedProduct_linksFormProperties>({
			configs: new FormControl<string | null | undefined>(undefined),
			environments: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			'permission-groups': new FormControl<string | null | undefined>(undefined),
			segments: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingModel_haljson_embeddedTags_links {
		self?: string | null;
	}
	export interface SettingModel_haljson_embeddedTags_linksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateSettingModel_haljson_embeddedTags_linksFormGroup() {
		return new FormGroup<SettingModel_haljson_embeddedTags_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingModel_haljson_links {
		self?: string | null;
	}
	export interface SettingModel_haljson_linksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateSettingModel_haljson_linksFormGroup() {
		return new FormGroup<SettingModel_haljson_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SettingType { boolean = 'boolean', string = 'string', int = 'int', double = 'double' }

	export interface SettingValueModel {
		config?: ConfigModel;
		environment?: EnvironmentModel;
		integrationLinks?: Array<IntegrationLinkModel>;
		lastUpdaterUserEmail?: string | null;
		lastUpdaterUserFullName?: string | null;
		readOnly?: boolean | null;

		/** The percentage rule collection. */
		rolloutPercentageItems?: Array<RolloutPercentageItemModel>;

		/** The targeting rule collection. */
		rolloutRules?: Array<RolloutRuleModel>;
		setting?: SettingDataModel;
		settingTags?: Array<SettingTagModel>;
		updatedAt?: Date | null;

		/** The value to serve. It must respect the setting type. */
		value?: any;
	}
	export interface SettingValueModelFormProperties {
		lastUpdaterUserEmail: FormControl<string | null | undefined>,
		lastUpdaterUserFullName: FormControl<string | null | undefined>,
		readOnly: FormControl<boolean | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,

		/** The value to serve. It must respect the setting type. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateSettingValueModelFormGroup() {
		return new FormGroup<SettingValueModelFormProperties>({
			lastUpdaterUserEmail: new FormControl<string | null | undefined>(undefined),
			lastUpdaterUserFullName: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson {
		_embedded?: SettingValueModel_haljson_embedded;
		_links?: SettingValueModel_haljson_links;
		lastUpdaterUserEmail?: string | null;
		lastUpdaterUserFullName?: string | null;
		readOnly?: boolean | null;

		/** The percentage rule collection. */
		rolloutPercentageItems?: Array<RolloutPercentageItemModel>;

		/** The targeting rule collection. */
		rolloutRules?: Array<RolloutRuleModel>;
		updatedAt?: Date | null;

		/** The value to serve. It must respect the setting type. */
		value?: any;
	}
	export interface SettingValueModel_haljsonFormProperties {
		lastUpdaterUserEmail: FormControl<string | null | undefined>,
		lastUpdaterUserFullName: FormControl<string | null | undefined>,
		readOnly: FormControl<boolean | null | undefined>,
		updatedAt: FormControl<Date | null | undefined>,

		/** The value to serve. It must respect the setting type. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateSettingValueModel_haljsonFormGroup() {
		return new FormGroup<SettingValueModel_haljsonFormProperties>({
			lastUpdaterUserEmail: new FormControl<string | null | undefined>(undefined),
			lastUpdaterUserFullName: new FormControl<string | null | undefined>(undefined),
			readOnly: new FormControl<boolean | null | undefined>(undefined),
			updatedAt: new FormControl<Date | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embedded {
		config?: SettingValueModel_haljson_embeddedConfig;
		environment?: SettingValueModel_haljson_embeddedEnvironment;
		SettingValueModel_haljson_embeddedIntegrationLinks?: Array<SettingValueModel_haljson_embeddedIntegrationLinks>;
		setting?: SettingValueModel_haljson_embeddedSetting;
		SettingValueModel_haljson_embeddedSettingTags?: Array<SettingValueModel_haljson_embeddedSettingTags>;
	}
	export interface SettingValueModel_haljson_embeddedFormProperties {
	}
	export function CreateSettingValueModel_haljson_embeddedFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedFormProperties>({
		});

	}

	export interface SettingValueModel_haljson_embeddedConfig {
		_embedded?: SettingValueModel_haljson_embeddedConfig_embedded;
		_links?: SettingValueModel_haljson_embeddedConfig_links;
		configId?: string | null;
		description?: string | null;
		name?: string | null;
		order?: number | null;
	}
	export interface SettingValueModel_haljson_embeddedConfigFormProperties {
		configId: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedConfigFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedConfigFormProperties>({
			configId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedConfig_embedded {
		product?: SettingValueModel_haljson_embeddedConfig_embeddedProduct;
	}
	export interface SettingValueModel_haljson_embeddedConfig_embeddedFormProperties {
	}
	export function CreateSettingValueModel_haljson_embeddedConfig_embeddedFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedConfig_embeddedFormProperties>({
		});

	}

	export interface SettingValueModel_haljson_embeddedConfig_embeddedProduct {
		_embedded?: SettingValueModel_haljson_embeddedConfig_embeddedProduct_embedded;
		_links?: SettingValueModel_haljson_embeddedConfig_embeddedProduct_links;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface SettingValueModel_haljson_embeddedConfig_embeddedProductFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedConfig_embeddedProductFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedConfig_embeddedProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedConfig_embeddedProduct_embedded {
		organization?: SettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedOrganization;
	}
	export interface SettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedFormProperties {
	}
	export function CreateSettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedFormProperties>({
		});

	}

	export interface SettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedOrganization {
		_links?: SettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedOrganization_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface SettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedOrganizationFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedOrganization_links {
		members?: string | null;
		products?: string | null;
	}
	export interface SettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedOrganization_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedOrganization_linksFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedConfig_embeddedProduct_embeddedOrganization_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedConfig_embeddedProduct_links {
		configs?: string | null;
		environments?: string | null;
		members?: string | null;
		'permission-groups'?: string | null;
		segments?: string | null;
		self?: string | null;
		tags?: string | null;
	}
	export interface SettingValueModel_haljson_embeddedConfig_embeddedProduct_linksFormProperties {
		configs: FormControl<string | null | undefined>,
		environments: FormControl<string | null | undefined>,
		members: FormControl<string | null | undefined>,
		'permission-groups': FormControl<string | null | undefined>,
		segments: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedConfig_embeddedProduct_linksFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedConfig_embeddedProduct_linksFormProperties>({
			configs: new FormControl<string | null | undefined>(undefined),
			environments: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			'permission-groups': new FormControl<string | null | undefined>(undefined),
			segments: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedConfig_links {
		self?: string | null;
		settings?: string | null;
	}
	export interface SettingValueModel_haljson_embeddedConfig_linksFormProperties {
		self: FormControl<string | null | undefined>,
		settings: FormControl<string | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedConfig_linksFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedConfig_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
			settings: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedEnvironment {
		_embedded?: SettingValueModel_haljson_embeddedEnvironment_embedded;
		_links?: SettingValueModel_haljson_embeddedEnvironment_links;
		color?: string | null;
		description?: string | null;
		environmentId?: string | null;
		name?: string | null;
		order?: number | null;
		reasonRequired?: boolean | null;
	}
	export interface SettingValueModel_haljson_embeddedEnvironmentFormProperties {
		color: FormControl<string | null | undefined>,
		description: FormControl<string | null | undefined>,
		environmentId: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedEnvironmentFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedEnvironmentFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedEnvironment_embedded {
		product?: SettingValueModel_haljson_embeddedEnvironment_embeddedProduct;
	}
	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedFormProperties {
	}
	export function CreateSettingValueModel_haljson_embeddedEnvironment_embeddedFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedEnvironment_embeddedFormProperties>({
		});

	}

	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedProduct {
		_embedded?: SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embedded;
		_links?: SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_links;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedProductFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedEnvironment_embeddedProductFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedEnvironment_embeddedProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embedded {
		organization?: SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedOrganization;
	}
	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedFormProperties {
	}
	export function CreateSettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedFormProperties>({
		});

	}

	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedOrganization {
		_links?: SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedOrganization_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedOrganizationFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedOrganization_links {
		members?: string | null;
		products?: string | null;
	}
	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedOrganization_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedOrganization_linksFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_embeddedOrganization_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_links {
		configs?: string | null;
		environments?: string | null;
		members?: string | null;
		'permission-groups'?: string | null;
		segments?: string | null;
		self?: string | null;
		tags?: string | null;
	}
	export interface SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_linksFormProperties {
		configs: FormControl<string | null | undefined>,
		environments: FormControl<string | null | undefined>,
		members: FormControl<string | null | undefined>,
		'permission-groups': FormControl<string | null | undefined>,
		segments: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedEnvironment_embeddedProduct_linksFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedEnvironment_embeddedProduct_linksFormProperties>({
			configs: new FormControl<string | null | undefined>(undefined),
			environments: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			'permission-groups': new FormControl<string | null | undefined>(undefined),
			segments: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedEnvironment_links {
		self?: string | null;
	}
	export interface SettingValueModel_haljson_embeddedEnvironment_linksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedEnvironment_linksFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedEnvironment_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedIntegrationLinks {
		description?: string | null;
		integrationLinkType?: IntegrationLinkModelIntegrationLinkType | null;
		key?: string | null;
		url?: string | null;
	}
	export interface SettingValueModel_haljson_embeddedIntegrationLinksFormProperties {
		description: FormControl<string | null | undefined>,
		integrationLinkType: FormControl<IntegrationLinkModelIntegrationLinkType | null | undefined>,
		key: FormControl<string | null | undefined>,
		url: FormControl<string | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedIntegrationLinksFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedIntegrationLinksFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			integrationLinkType: new FormControl<IntegrationLinkModelIntegrationLinkType | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedSetting {
		createdAt?: Date | null;
		creatorEmail?: string | null;
		creatorFullName?: string | null;
		hint?: string | null;
		isWatching?: boolean | null;
		key?: string | null;
		name?: string | null;
		order?: number | null;
		settingId?: number | null;
		settingType?: SettingDataModelSettingType | null;
	}
	export interface SettingValueModel_haljson_embeddedSettingFormProperties {
		createdAt: FormControl<Date | null | undefined>,
		creatorEmail: FormControl<string | null | undefined>,
		creatorFullName: FormControl<string | null | undefined>,
		hint: FormControl<string | null | undefined>,
		isWatching: FormControl<boolean | null | undefined>,
		key: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		settingId: FormControl<number | null | undefined>,
		settingType: FormControl<SettingDataModelSettingType | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedSettingFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedSettingFormProperties>({
			createdAt: new FormControl<Date | null | undefined>(undefined),
			creatorEmail: new FormControl<string | null | undefined>(undefined),
			creatorFullName: new FormControl<string | null | undefined>(undefined),
			hint: new FormControl<string | null | undefined>(undefined),
			isWatching: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			settingId: new FormControl<number | null | undefined>(undefined),
			settingType: new FormControl<SettingDataModelSettingType | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_embeddedSettingTags {
		color?: string | null;
		name?: string | null;
		settingTagId?: number | null;
		tagId?: number | null;
	}
	export interface SettingValueModel_haljson_embeddedSettingTagsFormProperties {
		color: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		settingTagId: FormControl<number | null | undefined>,
		tagId: FormControl<number | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_embeddedSettingTagsFormGroup() {
		return new FormGroup<SettingValueModel_haljson_embeddedSettingTagsFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			settingTagId: new FormControl<number | null | undefined>(undefined),
			tagId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface SettingValueModel_haljson_links {
		self?: string | null;
	}
	export interface SettingValueModel_haljson_linksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateSettingValueModel_haljson_linksFormGroup() {
		return new FormGroup<SettingValueModel_haljson_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagModel_haljson {
		_embedded?: TagModel_haljson_embedded;
		_links?: TagModel_haljson_links;
		color?: string | null;
		name?: string | null;
		tagId?: number | null;
	}
	export interface TagModel_haljsonFormProperties {
		color: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		tagId: FormControl<number | null | undefined>,
	}
	export function CreateTagModel_haljsonFormGroup() {
		return new FormGroup<TagModel_haljsonFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			tagId: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface TagModel_haljson_embedded {
		product?: TagModel_haljson_embeddedProduct;
	}
	export interface TagModel_haljson_embeddedFormProperties {
	}
	export function CreateTagModel_haljson_embeddedFormGroup() {
		return new FormGroup<TagModel_haljson_embeddedFormProperties>({
		});

	}

	export interface TagModel_haljson_embeddedProduct {
		_embedded?: TagModel_haljson_embeddedProduct_embedded;
		_links?: TagModel_haljson_embeddedProduct_links;
		description?: string | null;
		name?: string | null;
		order?: number | null;
		productId?: string | null;
		reasonRequired?: boolean | null;
	}
	export interface TagModel_haljson_embeddedProductFormProperties {
		description: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		order: FormControl<number | null | undefined>,
		productId: FormControl<string | null | undefined>,
		reasonRequired: FormControl<boolean | null | undefined>,
	}
	export function CreateTagModel_haljson_embeddedProductFormGroup() {
		return new FormGroup<TagModel_haljson_embeddedProductFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			productId: new FormControl<string | null | undefined>(undefined),
			reasonRequired: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface TagModel_haljson_embeddedProduct_embedded {
		organization?: TagModel_haljson_embeddedProduct_embeddedOrganization;
	}
	export interface TagModel_haljson_embeddedProduct_embeddedFormProperties {
	}
	export function CreateTagModel_haljson_embeddedProduct_embeddedFormGroup() {
		return new FormGroup<TagModel_haljson_embeddedProduct_embeddedFormProperties>({
		});

	}

	export interface TagModel_haljson_embeddedProduct_embeddedOrganization {
		_links?: TagModel_haljson_embeddedProduct_embeddedOrganization_links;
		name?: string | null;
		organizationId?: string | null;
	}
	export interface TagModel_haljson_embeddedProduct_embeddedOrganizationFormProperties {
		name: FormControl<string | null | undefined>,
		organizationId: FormControl<string | null | undefined>,
	}
	export function CreateTagModel_haljson_embeddedProduct_embeddedOrganizationFormGroup() {
		return new FormGroup<TagModel_haljson_embeddedProduct_embeddedOrganizationFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			organizationId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagModel_haljson_embeddedProduct_embeddedOrganization_links {
		members?: string | null;
		products?: string | null;
	}
	export interface TagModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties {
		members: FormControl<string | null | undefined>,
		products: FormControl<string | null | undefined>,
	}
	export function CreateTagModel_haljson_embeddedProduct_embeddedOrganization_linksFormGroup() {
		return new FormGroup<TagModel_haljson_embeddedProduct_embeddedOrganization_linksFormProperties>({
			members: new FormControl<string | null | undefined>(undefined),
			products: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagModel_haljson_embeddedProduct_links {
		configs?: string | null;
		environments?: string | null;
		members?: string | null;
		'permission-groups'?: string | null;
		segments?: string | null;
		self?: string | null;
		tags?: string | null;
	}
	export interface TagModel_haljson_embeddedProduct_linksFormProperties {
		configs: FormControl<string | null | undefined>,
		environments: FormControl<string | null | undefined>,
		members: FormControl<string | null | undefined>,
		'permission-groups': FormControl<string | null | undefined>,
		segments: FormControl<string | null | undefined>,
		self: FormControl<string | null | undefined>,
		tags: FormControl<string | null | undefined>,
	}
	export function CreateTagModel_haljson_embeddedProduct_linksFormGroup() {
		return new FormGroup<TagModel_haljson_embeddedProduct_linksFormProperties>({
			configs: new FormControl<string | null | undefined>(undefined),
			environments: new FormControl<string | null | undefined>(undefined),
			members: new FormControl<string | null | undefined>(undefined),
			'permission-groups': new FormControl<string | null | undefined>(undefined),
			segments: new FormControl<string | null | undefined>(undefined),
			self: new FormControl<string | null | undefined>(undefined),
			tags: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagModel_haljson_links {
		self?: string | null;
	}
	export interface TagModel_haljson_linksFormProperties {
		self: FormControl<string | null | undefined>,
	}
	export function CreateTagModel_haljson_linksFormGroup() {
		return new FormGroup<TagModel_haljson_linksFormProperties>({
			self: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UpdateConfigRequest {

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		name?: string | null;
	}
	export interface UpdateConfigRequestFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateConfigRequestFormGroup() {
		return new FormGroup<UpdateConfigRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface UpdateEnvironmentModel {

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		color?: string | null;

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		name?: string | null;
	}
	export interface UpdateEnvironmentModelFormProperties {

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateEnvironmentModelFormGroup() {
		return new FormGroup<UpdateEnvironmentModelFormProperties>({
			color: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface UpdatePermissionGroupRequest {
		accessType?: AccessType | null;
		canCreateOrUpdateConfig?: boolean | null;
		canCreateOrUpdateEnvironment?: boolean | null;
		canCreateOrUpdateSegments?: boolean | null;
		canCreateOrUpdateSetting?: boolean | null;
		canCreateOrUpdateTag?: boolean | null;
		canDeleteConfig?: boolean | null;
		canDeleteEnvironment?: boolean | null;
		canDeleteSegments?: boolean | null;
		canDeleteSetting?: boolean | null;
		canDeleteTag?: boolean | null;
		canManageIntegrations?: boolean | null;
		canManageMembers?: boolean | null;
		canManageProductPreferences?: boolean | null;
		canManageWebhook?: boolean | null;
		canRotateSdkKey?: boolean | null;
		canTagSetting?: boolean | null;
		canUseExportImport?: boolean | null;
		canViewProductAuditLog?: boolean | null;
		canViewProductStatistics?: boolean | null;
		canViewSdkKey?: boolean | null;
		environmentAccesses?: Array<CreateOrUpdateEnvironmentAccessModel>;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		name?: string | null;
		newEnvironmentAccessType?: CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null;
	}
	export interface UpdatePermissionGroupRequestFormProperties {
		accessType: FormControl<AccessType | null | undefined>,
		canCreateOrUpdateConfig: FormControl<boolean | null | undefined>,
		canCreateOrUpdateEnvironment: FormControl<boolean | null | undefined>,
		canCreateOrUpdateSegments: FormControl<boolean | null | undefined>,
		canCreateOrUpdateSetting: FormControl<boolean | null | undefined>,
		canCreateOrUpdateTag: FormControl<boolean | null | undefined>,
		canDeleteConfig: FormControl<boolean | null | undefined>,
		canDeleteEnvironment: FormControl<boolean | null | undefined>,
		canDeleteSegments: FormControl<boolean | null | undefined>,
		canDeleteSetting: FormControl<boolean | null | undefined>,
		canDeleteTag: FormControl<boolean | null | undefined>,
		canManageIntegrations: FormControl<boolean | null | undefined>,
		canManageMembers: FormControl<boolean | null | undefined>,
		canManageProductPreferences: FormControl<boolean | null | undefined>,
		canManageWebhook: FormControl<boolean | null | undefined>,
		canRotateSdkKey: FormControl<boolean | null | undefined>,
		canTagSetting: FormControl<boolean | null | undefined>,
		canUseExportImport: FormControl<boolean | null | undefined>,
		canViewProductAuditLog: FormControl<boolean | null | undefined>,
		canViewProductStatistics: FormControl<boolean | null | undefined>,
		canViewSdkKey: FormControl<boolean | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
		newEnvironmentAccessType: FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>,
	}
	export function CreateUpdatePermissionGroupRequestFormGroup() {
		return new FormGroup<UpdatePermissionGroupRequestFormProperties>({
			accessType: new FormControl<AccessType | null | undefined>(undefined),
			canCreateOrUpdateConfig: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateEnvironment: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateSegments: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateSetting: new FormControl<boolean | null | undefined>(undefined),
			canCreateOrUpdateTag: new FormControl<boolean | null | undefined>(undefined),
			canDeleteConfig: new FormControl<boolean | null | undefined>(undefined),
			canDeleteEnvironment: new FormControl<boolean | null | undefined>(undefined),
			canDeleteSegments: new FormControl<boolean | null | undefined>(undefined),
			canDeleteSetting: new FormControl<boolean | null | undefined>(undefined),
			canDeleteTag: new FormControl<boolean | null | undefined>(undefined),
			canManageIntegrations: new FormControl<boolean | null | undefined>(undefined),
			canManageMembers: new FormControl<boolean | null | undefined>(undefined),
			canManageProductPreferences: new FormControl<boolean | null | undefined>(undefined),
			canManageWebhook: new FormControl<boolean | null | undefined>(undefined),
			canRotateSdkKey: new FormControl<boolean | null | undefined>(undefined),
			canTagSetting: new FormControl<boolean | null | undefined>(undefined),
			canUseExportImport: new FormControl<boolean | null | undefined>(undefined),
			canViewProductAuditLog: new FormControl<boolean | null | undefined>(undefined),
			canViewProductStatistics: new FormControl<boolean | null | undefined>(undefined),
			canViewSdkKey: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			newEnvironmentAccessType: new FormControl<CreateOrUpdateEnvironmentAccessModelEnvironmentAccessType | null | undefined>(undefined),
		});

	}

	export interface UpdateProductRequest {

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		name?: string | null;
	}
	export interface UpdateProductRequestFormProperties {

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateProductRequestFormGroup() {
		return new FormGroup<UpdateProductRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
		});

	}

	export interface UpdateSegmentModel {
		comparator?: RolloutRuleModelComparator | null;

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		comparisonAttribute?: string | null;

		/**
		 * Max length: 65535
		 * Min length: 0
		 */
		comparisonValue?: string | null;

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		name?: string | null;
	}
	export interface UpdateSegmentModelFormProperties {
		comparator: FormControl<RolloutRuleModelComparator | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		comparisonAttribute: FormControl<string | null | undefined>,

		/**
		 * Max length: 65535
		 * Min length: 0
		 */
		comparisonValue: FormControl<string | null | undefined>,

		/**
		 * Max length: 1000
		 * Min length: 0
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateSegmentModelFormGroup() {
		return new FormGroup<UpdateSegmentModelFormProperties>({
			comparator: new FormControl<RolloutRuleModelComparator | null | undefined>(undefined),
			comparisonAttribute: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			comparisonValue: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(65535)]),
			description: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(1000)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface UpdateSettingValueModel {

		/** The percentage rule collection. */
		rolloutPercentageItems?: Array<RolloutPercentageItemModel>;

		/** The targeting rule collection. */
		rolloutRules?: Array<RolloutRuleModel>;

		/** The value to serve. It must respect the setting type. */
		value?: any;
	}
	export interface UpdateSettingValueModelFormProperties {

		/** The value to serve. It must respect the setting type. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateUpdateSettingValueModelFormGroup() {
		return new FormGroup<UpdateSettingValueModelFormProperties>({
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface UpdateSettingValueWithSettingIdModel {

		/** The percentage rule collection. */
		rolloutPercentageItems?: Array<RolloutPercentageItemModel>;

		/** The targeting rule collection. */
		rolloutRules?: Array<RolloutRuleModel>;

		/** The id of the Setting. */
		settingId?: number | null;

		/** The value to serve. It must respect the setting type. */
		value?: any;
	}
	export interface UpdateSettingValueWithSettingIdModelFormProperties {

		/** The id of the Setting. */
		settingId: FormControl<number | null | undefined>,

		/** The value to serve. It must respect the setting type. */
		value: FormControl<any | null | undefined>,
	}
	export function CreateUpdateSettingValueWithSettingIdModelFormGroup() {
		return new FormGroup<UpdateSettingValueWithSettingIdModelFormProperties>({
			settingId: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<any | null | undefined>(undefined),
		});

	}

	export interface UpdateSettingValuesWithIdModel {

		/** The values to update. */
		settingValues?: Array<UpdateSettingValueWithSettingIdModel>;
	}
	export interface UpdateSettingValuesWithIdModelFormProperties {
	}
	export function CreateUpdateSettingValuesWithIdModelFormGroup() {
		return new FormGroup<UpdateSettingValuesWithIdModelFormProperties>({
		});

	}

	export interface UpdateTagModel {

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		color?: string | null;

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		name?: string | null;
	}
	export interface UpdateTagModelFormProperties {

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		color: FormControl<string | null | undefined>,

		/**
		 * Max length: 255
		 * Min length: 0
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateUpdateTagModelFormGroup() {
		return new FormGroup<UpdateTagModelFormProperties>({
			color: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.minLength(0), Validators.maxLength(255)]),
		});

	}

	export interface UserModel {
		email?: string | null;
		fullName?: string | null;
		userId?: string | null;
	}
	export interface UserModelFormProperties {
		email: FormControl<string | null | undefined>,
		fullName: FormControl<string | null | undefined>,
		userId: FormControl<string | null | undefined>,
	}
	export function CreateUserModelFormGroup() {
		return new FormGroup<UserModelFormProperties>({
			email: new FormControl<string | null | undefined>(undefined),
			fullName: new FormControl<string | null | undefined>(undefined),
			userId: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Post v1/code-references
		 * @return {void} Success
		 */
		V1Code_referencesPost(requestBody: CodeReferenceRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/code-references', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/code-references/delete-reports
		 * @return {void} Success
		 */
		V1Code_referencesDelete_reportsPost(requestBody: DeleteRepositoryReportsRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/code-references/delete-reports', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Config
		 * This endpoint removes a Config identified by the `configId` parameter.
		 * Delete v1/configs/{configId}
		 * @param {string} configId The identifier of the Config.
		 * @return {void} 
		 */
		V1Configs_configIdDelete(configId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/configs/' + (configId == null ? '' : encodeURIComponent(configId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Config
		 * This endpoint returns the metadata of a Config
		 * identified by the `configId`.
		 * Get v1/configs/{configId}
		 * @param {string} configId The identifier of the Config.
		 * @return {ConfigModel} When everything is ok, the config data returned.
		 */
		V1Configs_configIdGet(configId: string, headersHandler?: () => HttpHeaders): Observable<ConfigModel> {
			return this.http.get<ConfigModel>(this.baseUri + 'v1/configs/' + (configId == null ? '' : encodeURIComponent(configId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Config
		 * This endpoint updates a Config identified by the `configId` parameter.
		 * Put v1/configs/{configId}
		 * @param {string} configId The identifier of the Config.
		 * @return {ConfigModel} 
		 */
		V1Configs_configIdPut(configId: string, requestBody: UpdateConfigRequest, headersHandler?: () => HttpHeaders): Observable<ConfigModel> {
			return this.http.put<ConfigModel>(this.baseUri + 'v1/configs/' + (configId == null ? '' : encodeURIComponent(configId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Deleted Settings
		 * This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.
		 * Get v1/configs/{configId}/deleted-settings
		 * @param {string} configId The identifier of the Config.
		 * @return {Array<SettingModel>} 
		 */
		V1Configs_configIdDeleted_settingsGet(configId: string, headersHandler?: () => HttpHeaders): Observable<Array<SettingModel>> {
			return this.http.get<Array<SettingModel>>(this.baseUri + 'v1/configs/' + (configId == null ? '' : encodeURIComponent(configId)) + '/deleted-settings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get SDK Key
		 * This endpoint returns the SDK Key for your Config in a specified Environment.
		 * Get v1/configs/{configId}/environments/{environmentId}
		 * @param {string} configId The identifier of the Config.
		 * @param {string} environmentId The identifier of the Environment.
		 * @return {SdkKeysModel} 
		 */
		V1Configs_configIdEnvironments_environmentIdGet(configId: string, environmentId: string, headersHandler?: () => HttpHeaders): Observable<SdkKeysModel> {
			return this.http.get<SdkKeysModel>(this.baseUri + 'v1/configs/' + (configId == null ? '' : encodeURIComponent(configId)) + '/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Get values
		 * This endpoint returns the value of a specified Config's Feature Flags or Settings identified by the `configId` parameter
		 * in a specified Environment identified by the `environmentId` parameter.
		 * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
		 * The `value` represents what the clients will get when the evaluation requests of our SDKs
		 * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
		 * The `rolloutRules` and `percentageRules` attributes are representing the current
		 * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
		 * in an **ordered** collection, which means the order of the returned rules is matching to the
		 * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
		 * Get v1/configs/{configId}/environments/{environmentId}/values
		 * @param {string} configId The identifier of the Config.
		 * @param {string} environmentId The identifier of the Environment.
		 * @return {ConfigSettingValuesModel} When everything is ok, the setting values returned.
		 */
		V1Configs_configIdEnvironments_environmentIdValuesGet(configId: string, environmentId: string, headersHandler?: () => HttpHeaders): Observable<ConfigSettingValuesModel> {
			return this.http.get<ConfigSettingValuesModel>(this.baseUri + 'v1/configs/' + (configId == null ? '' : encodeURIComponent(configId)) + '/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/values', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post values
		 * This endpoint replaces the values of a specified Config's Feature Flags or Settings identified by the `configId` parameter
		 * in a specified Environment identified by the `environmentId` parameter.
		 * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
		 * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't
		 * want to change in its original state. Not listing one means that it will reset.
		 * For example: We have the following resource.
		 * ```
		 * {
		 * "settingValues": [
		 * {
		 * "rolloutPercentageItems": [
		 * {
		 * "percentage": 30,
		 * "value": true
		 * },
		 * {
		 * "percentage": 70,
		 * "value": false
		 * }
		 * ],
		 * "rolloutRules": [],
		 * "value": false,
		 * "settingId": 1
		 * }
		 * ]
		 * }
		 * ```
		 * If we send a replace request body as below:
		 * ```
		 * {
		 * "settingValues": [
		 * {
		 * "value": true,
		 * "settingId": 1
		 * }
		 * ]
		 * }
		 * ```
		 * Then besides that the default value is set to `true`, all the Percentage Rules are deleted.
		 * So we get a response like this:
		 * ```
		 * {
		 * "settingValues": [
		 * {
		 * "rolloutPercentageItems": [],
		 * "rolloutRules": [],
		 * "value": true,
		 * "setting":
		 * {
		 * "settingId": 1
		 * }
		 * }
		 * ]
		 * }
		 * ```
		 * The `rolloutRules` property describes two types of rules:
		 * - **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
		 * - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.
		 * Post v1/configs/{configId}/environments/{environmentId}/values
		 * @param {string} configId The identifier of the Config.
		 * @param {string} environmentId The identifier of the Environment.
		 * @param {string} reason The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
		 * @return {ConfigSettingValuesModel} When everything is ok, the updated setting values returned.
		 */
		V1Configs_configIdEnvironments_environmentIdValuesPostByReason(configId: string, environmentId: string, reason: string | null | undefined, requestBody: UpdateSettingValuesWithIdModel, headersHandler?: () => HttpHeaders): Observable<ConfigSettingValuesModel> {
			return this.http.post<ConfigSettingValuesModel>(this.baseUri + 'v1/configs/' + (configId == null ? '' : encodeURIComponent(configId)) + '/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/values&reason=' + (reason == null ? '' : encodeURIComponent(reason)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Flags
		 * This endpoint returns the list of the Feature Flags and Settings defined in a
		 * specified Config, identified by the `configId` parameter.
		 * Get v1/configs/{configId}/settings
		 * @param {string} configId The identifier of the Config.
		 * @return {Array<SettingModel>} 
		 */
		V1Configs_configIdSettingsGet(configId: string, headersHandler?: () => HttpHeaders): Observable<Array<SettingModel>> {
			return this.http.get<Array<SettingModel>>(this.baseUri + 'v1/configs/' + (configId == null ? '' : encodeURIComponent(configId)) + '/settings', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Flag
		 * This endpoint creates a new Feature Flag or Setting in a specified Config
		 * identified by the `configId` parameter.
		 * **Important:** The `key` attribute must be unique within the given Config.
		 * Post v1/configs/{configId}/settings
		 * @param {string} configId The identifier of the Config.
		 * @return {void} 
		 */
		V1Configs_configIdSettingsPost(configId: string, requestBody: CreateSettingInitialValues, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/configs/' + (configId == null ? '' : encodeURIComponent(configId)) + '/settings', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Environment
		 * This endpoint removes an Environment identified by the `environmentId` parameter.
		 * Delete v1/environments/{environmentId}
		 * @param {string} environmentId The identifier of the Environment.
		 * @return {void} 
		 */
		V1Environments_environmentIdDelete(environmentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Environment
		 * This endpoint returns the metadata of an Environment
		 * identified by the `environmentId`.
		 * Get v1/environments/{environmentId}
		 * @param {string} environmentId The identifier of the Environment.
		 * @return {EnvironmentModel} When everything is ok, the environment data returned.
		 */
		V1Environments_environmentIdGet(environmentId: string, headersHandler?: () => HttpHeaders): Observable<EnvironmentModel> {
			return this.http.get<EnvironmentModel>(this.baseUri + 'v1/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Environment
		 * This endpoint updates an Environment identified by the `environmentId` parameter.
		 * Put v1/environments/{environmentId}
		 * @param {string} environmentId The identifier of the Environment.
		 * @return {EnvironmentModel} 
		 */
		V1Environments_environmentIdPut(environmentId: string, requestBody: UpdateEnvironmentModel, headersHandler?: () => HttpHeaders): Observable<EnvironmentModel> {
			return this.http.put<EnvironmentModel>(this.baseUri + 'v1/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Integration link
		 * Delete v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}
		 * @param {string} environmentId The identifier of the Environment.
		 * @param {number} settingId The id of the Setting.
		 * @param {IntegrationLinkModelIntegrationLinkType} integrationLinkType The integration's type.
		 * @param {string} key The key of the integration link.
		 * @return {DeleteIntegrationLinkModel} When everything is ok.
		 */
		V1Environments_environmentIdSettings_settingIdIntegrationLinks_integrationLinkType_keyDelete(environmentId: string, settingId: number, integrationLinkType: IntegrationLinkModelIntegrationLinkType, key: string, headersHandler?: () => HttpHeaders): Observable<DeleteIntegrationLinkModel> {
			return this.http.delete<DeleteIntegrationLinkModel>(this.baseUri + 'v1/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/settings/' + settingId + '/integrationLinks/' + integrationLinkType + '/' + (key == null ? '' : encodeURIComponent(key)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Add or update Integration link
		 * Post v1/environments/{environmentId}/settings/{settingId}/integrationLinks/{integrationLinkType}/{key}
		 * @param {string} environmentId The identifier of the Environment.
		 * @param {number} settingId The id of the Setting.
		 * @param {IntegrationLinkModelIntegrationLinkType} integrationLinkType The integration link's type.
		 * @param {string} key The key of the integration link.
		 * @return {IntegrationLinkModel} When everything is ok, the integration link data returned.
		 */
		V1Environments_environmentIdSettings_settingIdIntegrationLinks_integrationLinkType_keyPost(environmentId: string, settingId: number, integrationLinkType: IntegrationLinkModelIntegrationLinkType, key: string, requestBody: AddOrUpdateIntegrationLinkModel, headersHandler?: () => HttpHeaders): Observable<IntegrationLinkModel> {
			return this.http.post<IntegrationLinkModel>(this.baseUri + 'v1/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/settings/' + settingId + '/integrationLinks/' + integrationLinkType + '/' + (key == null ? '' : encodeURIComponent(key)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get value
		 * This endpoint returns the value of a Feature Flag or Setting
		 * in a specified Environment identified by the `environmentId` parameter.
		 * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
		 * The `value` represents what the clients will get when the evaluation requests of our SDKs
		 * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
		 * The `rolloutRules` and `percentageRules` attributes are representing the current
		 * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
		 * in an **ordered** collection, which means the order of the returned rules is matching to the
		 * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
		 * Get v1/environments/{environmentId}/settings/{settingId}/value
		 * @param {string} environmentId The identifier of the Environment.
		 * @param {number} settingId The id of the Setting.
		 * @return {SettingValueModel} When everything is ok, the setting value data returned.
		 */
		V1Environments_environmentIdSettings_settingIdValueGet(environmentId: string, settingId: number, headersHandler?: () => HttpHeaders): Observable<SettingValueModel> {
			return this.http.get<SettingValueModel>(this.baseUri + 'v1/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/settings/' + settingId + '/value', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update value
		 * This endpoint updates the value of a Feature Flag or Setting
		 * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment.
		 * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
		 * The advantage of using JSON Patch is that you can describe individual update operations on a resource
		 * without touching attributes that you don't want to change. It supports collection reordering, so it also
		 * can be used for reordering the targeting rules of a Feature Flag or Setting.
		 * For example: We have the following resource.
		 * ```
		 * {
		 * "rolloutPercentageItems": [
		 * {
		 * "percentage": 30,
		 * "value": true
		 * },
		 * {
		 * "percentage": 70,
		 * "value": false
		 * }
		 * ],
		 * "rolloutRules": [],
		 * "value": false
		 * }
		 * ```
		 * If we send an update request body as below:
		 * ```
		 * [
		 * {
		 * "op": "replace",
		 * "path": "/value",
		 * "value": true
		 * }
		 * ]
		 * ```
		 * Only the default value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
		 * So we get a response like this:
		 * ```
		 * {
		 * "rolloutPercentageItems": [
		 * {
		 * "percentage": 30,
		 * "value": true
		 * },
		 * {
		 * "percentage": 70,
		 * "value": false
		 * }
		 * ],
		 * "rolloutRules": [],
		 * "value": true
		 * }
		 * ```
		 * The `rolloutRules` property describes two types of rules:
		 * - **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
		 * - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.
		 * Patch v1/environments/{environmentId}/settings/{settingId}/value
		 * @param {string} environmentId The identifier of the Environment.
		 * @param {number} settingId The id of the Setting.
		 * @param {string} reason The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
		 * @return {SettingValueModel} When the patch was successful.
		 */
		V1Environments_environmentIdSettings_settingIdValuePatchByReason(environmentId: string, settingId: number, reason: string | null | undefined, requestBody: JsonPatch, headersHandler?: () => HttpHeaders): Observable<SettingValueModel> {
			return this.http.patch<SettingValueModel>(this.baseUri + 'v1/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/settings/' + settingId + '/value&reason=' + (reason == null ? '' : encodeURIComponent(reason)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Replace value
		 * This endpoint replaces the whole value of a Feature Flag or Setting in a specified Environment.
		 * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
		 * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't
		 * want to change in its original state. Not listing one means that it will reset.
		 * For example: We have the following resource.
		 * ```
		 * {
		 * "rolloutPercentageItems": [
		 * {
		 * "percentage": 30,
		 * "value": true
		 * },
		 * {
		 * "percentage": 70,
		 * "value": false
		 * }
		 * ],
		 * "rolloutRules": [],
		 * "value": false
		 * }
		 * ```
		 * If we send a replace request body as below:
		 * ```
		 * {
		 * "value": true
		 * }
		 * ```
		 * Then besides that the default value is set to `true`, all the Percentage Rules are deleted.
		 * So we get a response like this:
		 * ```
		 * {
		 * "rolloutPercentageItems": [],
		 * "rolloutRules": [],
		 * "value": true
		 * }
		 * ```
		 * The `rolloutRules` property describes two types of rules:
		 * - **Targeting rules**: When you want to add or update a targenting rule, the `comparator`, `comparisonAttribute`, and `comparisonValue` members are required.
		 * - **Segment rules**: When you want to add add or update a segment rule, the `segmentId` which identifies the desired segment and the `segmentComparator` members are required.
		 * Put v1/environments/{environmentId}/settings/{settingId}/value
		 * @param {string} environmentId The identifier of the Environment.
		 * @param {number} settingId The id of the Setting.
		 * @param {string} reason The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
		 * @return {SettingValueModel} 
		 */
		V1Environments_environmentIdSettings_settingIdValuePutByReason(environmentId: string, settingId: number, reason: string | null | undefined, requestBody: UpdateSettingValueModel, headersHandler?: () => HttpHeaders): Observable<SettingValueModel> {
			return this.http.put<SettingValueModel>(this.baseUri + 'v1/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/settings/' + settingId + '/value&reason=' + (reason == null ? '' : encodeURIComponent(reason)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get Integration link
		 * Get v1/integrationLink/{integrationLinkType}/{key}/details
		 * @param {IntegrationLinkModelIntegrationLinkType} integrationLinkType The integration link's type.
		 * @param {string} key The key of the integration link.
		 * @return {IntegrationLinkDetailsModel} When everything is ok, the details for the integration link returned.
		 */
		V1IntegrationLink_integrationLinkType_keyDetailsGet(integrationLinkType: IntegrationLinkModelIntegrationLinkType, key: string, headersHandler?: () => HttpHeaders): Observable<IntegrationLinkDetailsModel> {
			return this.http.get<IntegrationLinkDetailsModel>(this.baseUri + 'v1/integrationLink/' + integrationLinkType + '/' + (key == null ? '' : encodeURIComponent(key)) + '/details', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Post v1/jira/Connect
		 * @return {void} Success
		 */
		V1JiraConnectPost(requestBody: ConnectRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/jira/Connect', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Post v1/jira/environments/{environmentId}/settings/{settingId}/integrationLinks/{key}
		 * @param {string} environmentId The identifier of the Environment.
		 * @param {number} settingId The id of the Setting.
		 * @param {string} key The key of the integration link.
		 * @return {IntegrationLinkModel} When everything is ok, the integration link data returned.
		 */
		V1JiraEnvironments_environmentIdSettings_settingIdIntegrationLinks_keyPost(environmentId: string, settingId: number, key: string, requestBody: AddOrUpdateJiraIntegrationLinkModel, headersHandler?: () => HttpHeaders): Observable<IntegrationLinkModel> {
			return this.http.post<IntegrationLinkModel>(this.baseUri + 'v1/jira/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '/settings/' + settingId + '/integrationLinks/' + (key == null ? '' : encodeURIComponent(key)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get authenticated user details
		 * Get v1/me
		 * @return {MeModel} 
		 */
		V1MeGet(headersHandler?: () => HttpHeaders): Observable<MeModel> {
			return this.http.get<MeModel>(this.baseUri + 'v1/me', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Organizations
		 * This endpoint returns the list of the Organizations that belongs to the user.
		 * Get v1/organizations
		 * @return {Array<OrganizationModel>} 
		 */
		V1OrganizationsGet(headersHandler?: () => HttpHeaders): Observable<Array<OrganizationModel>> {
			return this.http.get<Array<OrganizationModel>>(this.baseUri + 'v1/organizations', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Audit log items for Organization
		 * This endpoint returns the list of Audit log items for a given Organization
		 * and the result can be optionally filtered by Product and/or Config and/or Environment.
		 * Get v1/organizations/{organizationId}/auditlogs
		 * @param {string} organizationId The identifier of the Organization.
		 * @param {string} productId The identifier of the Product.
		 * @param {string} configId The identifier of the Config.
		 * @param {string} environmentId The identifier of the Environment.
		 * @param {AuditLogItemModelAuditLogTypeEnum} auditLogType Filter Audit logs by Audit log type.
		 * @param {Date} fromUtcDateTime Filter Audit logs by starting UTC date.
		 * @param {Date} toUtcDateTime Filter Audit logs by ending UTC date.
		 * @return {Array<AuditLogItemModel>} 
		 */
		V1Organizations_organizationIdAuditlogsGetByProductIdAndConfigIdAndEnvironmentIdAndAuditLogTypeAndFromUtcDateTimeAndToUtcDateTime(organizationId: string, productId: string | null | undefined, configId: string | null | undefined, environmentId: string | null | undefined, auditLogType: AuditLogItemModelAuditLogTypeEnum | null | undefined, fromUtcDateTime: Date | null | undefined, toUtcDateTime: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AuditLogItemModel>> {
			return this.http.get<Array<AuditLogItemModel>>(this.baseUri + 'v1/organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/auditlogs&productId=' + (productId == null ? '' : encodeURIComponent(productId)) + '&configId=' + (configId == null ? '' : encodeURIComponent(configId)) + '&environmentId=' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '&auditLogType=' + auditLogType + '&fromUtcDateTime=' + fromUtcDateTime?.toISOString() + '&toUtcDateTime=' + toUtcDateTime?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Organization Members
		 * This endpoint returns the list of Members that belongs
		 * to the given Organization, identified by the `organizationId` parameter.
		 * Get v1/organizations/{organizationId}/members
		 * @param {string} organizationId The identifier of the Organization.
		 * @return {Array<UserModel>} 
		 */
		V1Organizations_organizationIdMembersGet(organizationId: string, headersHandler?: () => HttpHeaders): Observable<Array<UserModel>> {
			return this.http.get<Array<UserModel>>(this.baseUri + 'v1/organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/members', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Member from Organization
		 * This endpoint removes a Member identified by the `userId` from the
		 * given Organization identified by the `organizationId` parameter.
		 * Delete v1/organizations/{organizationId}/members/{userId}
		 * @param {string} organizationId The identifier of the Organization.
		 * @param {string} userId The identifier of the Member.
		 * @return {void} 
		 */
		V1Organizations_organizationIdMembers_userIdDelete(organizationId: string, userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/members/' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Update Member Permissions
		 * This endpoint adds a Member identified by the `userId` to one or more Permission Groups.
		 * This endpoint can also be used to move a Member between Permission Groups within a Product.
		 * Only a single Permission Group can be set per Product.
		 * Post v1/organizations/{organizationId}/members/{userId}
		 * @param {string} organizationId The identifier of the Organization.
		 * @param {string} userId The identifier of the Member.
		 * @return {void} When the addition was successful.
		 */
		V1Organizations_organizationIdMembers_userIdPost(organizationId: string, userId: string, requestBody: AddUserToGroupRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/members/' + (userId == null ? '' : encodeURIComponent(userId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Create Product
		 * This endpoint creates a new Product in a specified Organization
		 * identified by the `organizationId` parameter, which can be obtained from the [List Organizations](#operation/get-organizations) endpoint.
		 * Post v1/organizations/{organizationId}/products
		 * @param {string} organizationId The identifier of the Organization.
		 * @return {void} 
		 */
		V1Organizations_organizationIdProductsPost(organizationId: string, requestBody: CreateProductRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/organizations/' + (organizationId == null ? '' : encodeURIComponent(organizationId)) + '/products', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Permission Group
		 * This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
		 * Delete v1/permissions/{permissionGroupId}
		 * @param {number} permissionGroupId The identifier of the Permission Group.
		 * @return {void} 
		 */
		V1Permissions_permissionGroupIdDelete(permissionGroupId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/permissions/' + permissionGroupId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Permission Group
		 * This endpoint returns the metadata of a Permission Group
		 * identified by the `permissionGroupId`.
		 * Get v1/permissions/{permissionGroupId}
		 * @param {number} permissionGroupId The identifier of the Permission Group.
		 * @return {PermissionGroupModel} When everything is ok, the permission group data returned.
		 */
		V1Permissions_permissionGroupIdGet(permissionGroupId: number, headersHandler?: () => HttpHeaders): Observable<PermissionGroupModel> {
			return this.http.get<PermissionGroupModel>(this.baseUri + 'v1/permissions/' + permissionGroupId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Permission Group
		 * This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
		 * Put v1/permissions/{permissionGroupId}
		 * @param {number} permissionGroupId The identifier of the Permission Group.
		 * @return {PermissionGroupModel} 
		 */
		V1Permissions_permissionGroupIdPut(permissionGroupId: number, requestBody: UpdatePermissionGroupRequest, headersHandler?: () => HttpHeaders): Observable<PermissionGroupModel> {
			return this.http.put<PermissionGroupModel>(this.baseUri + 'v1/permissions/' + permissionGroupId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Products
		 * This endpoint returns the list of the Products that belongs to the user.
		 * Get v1/products
		 * @return {Array<ProductModel>} 
		 */
		V1ProductsGet(headersHandler?: () => HttpHeaders): Observable<Array<ProductModel>> {
			return this.http.get<Array<ProductModel>>(this.baseUri + 'v1/products', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Delete Product
		 * This endpoint removes a Product identified by the `productId` parameter.
		 * Delete v1/products/{productId}
		 * @param {string} productId The identifier of the Product.
		 * @return {void} 
		 */
		V1Products_productIdDelete(productId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Product
		 * This endpoint returns the metadata of a Product
		 * identified by the `productId`.
		 * Get v1/products/{productId}
		 * @param {string} productId The identifier of the Product.
		 * @return {ProductModel} When everything is ok, the product data returned.
		 */
		V1Products_productIdGet(productId: string, headersHandler?: () => HttpHeaders): Observable<ProductModel> {
			return this.http.get<ProductModel>(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Product
		 * This endpoint updates a Product identified by the `productId` parameter.
		 * Put v1/products/{productId}
		 * @param {string} productId The identifier of the Product.
		 * @return {ProductModel} 
		 */
		V1Products_productIdPut(productId: string, requestBody: UpdateProductRequest, headersHandler?: () => HttpHeaders): Observable<ProductModel> {
			return this.http.put<ProductModel>(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Audit log items for Product
		 * This endpoint returns the list of Audit log items for a given Product
		 * and the result can be optionally filtered by Config and/or Environment.
		 * Get v1/products/{productId}/auditlogs
		 * @param {string} productId The identifier of the Product.
		 * @param {string} configId The identifier of the Config.
		 * @param {string} environmentId The identifier of the Environment.
		 * @param {AuditLogItemModelAuditLogTypeEnum} auditLogType Filter Audit logs by Audit log type.
		 * @param {Date} fromUtcDateTime Filter Audit logs by starting UTC date.
		 * @param {Date} toUtcDateTime Filter Audit logs by ending UTC date.
		 * @return {Array<AuditLogItemModel>} 
		 */
		V1Products_productIdAuditlogsGetByConfigIdAndEnvironmentIdAndAuditLogTypeAndFromUtcDateTimeAndToUtcDateTime(productId: string, configId: string | null | undefined, environmentId: string | null | undefined, auditLogType: AuditLogItemModelAuditLogTypeEnum | null | undefined, fromUtcDateTime: Date | null | undefined, toUtcDateTime: Date | null | undefined, headersHandler?: () => HttpHeaders): Observable<Array<AuditLogItemModel>> {
			return this.http.get<Array<AuditLogItemModel>>(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/auditlogs&configId=' + (configId == null ? '' : encodeURIComponent(configId)) + '&environmentId=' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '&auditLogType=' + auditLogType + '&fromUtcDateTime=' + fromUtcDateTime?.toISOString() + '&toUtcDateTime=' + toUtcDateTime?.toISOString(), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * List Configs
		 * This endpoint returns the list of the Configs that belongs to the given Product identified by the
		 * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
		 * Get v1/products/{productId}/configs
		 * @param {string} productId The identifier of the Product.
		 * @return {Array<ConfigModel>} 
		 */
		V1Products_productIdConfigsGet(productId: string, headersHandler?: () => HttpHeaders): Observable<Array<ConfigModel>> {
			return this.http.get<Array<ConfigModel>>(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/configs', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Config
		 * This endpoint creates a new Config in a specified Product
		 * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
		 * Post v1/products/{productId}/configs
		 * @param {string} productId The identifier of the Product.
		 * @return {void} 
		 */
		V1Products_productIdConfigsPost(productId: string, requestBody: CreateConfigRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/configs', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Environments
		 * This endpoint returns the list of the Environments that belongs to the given Product identified by the
		 * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
		 * Get v1/products/{productId}/environments
		 * @param {string} productId The identifier of the Product.
		 * @return {Array<EnvironmentModel>} 
		 */
		V1Products_productIdEnvironmentsGet(productId: string, headersHandler?: () => HttpHeaders): Observable<Array<EnvironmentModel>> {
			return this.http.get<Array<EnvironmentModel>>(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/environments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Environment
		 * This endpoint creates a new Environment in a specified Product
		 * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
		 * Post v1/products/{productId}/environments
		 * @param {string} productId The identifier of the Product.
		 * @return {void} 
		 */
		V1Products_productIdEnvironmentsPost(productId: string, requestBody: CreateEnvironmentModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/environments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Product Members
		 * This endpoint returns the list of Members that belongs
		 * to the given Product, identified by the `productId` parameter.
		 * Get v1/products/{productId}/members
		 * @param {string} productId The identifier of the Product.
		 * @return {Array<MemberModel>} 
		 */
		V1Products_productIdMembersGet(productId: string, headersHandler?: () => HttpHeaders): Observable<Array<MemberModel>> {
			return this.http.get<Array<MemberModel>>(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/members', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Invite Member
		 * This endpoint invites a Member into the given Product identified by the `productId` parameter.
		 * Post v1/products/{productId}/members/invite
		 * @param {string} productId The identifier of the Product.
		 * @return {void} When the invite was successful.
		 */
		V1Products_productIdMembersInvitePost(productId: string, requestBody: InviteMembersRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/members/invite', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Member from Product
		 * This endpoint removes a Member identified by the `userId` from the
		 * given Product identified by the `productId` parameter.
		 * Delete v1/products/{productId}/members/{userId}
		 * @param {string} productId The identifier of the Product.
		 * @param {string} userId The identifier of the Member.
		 * @return {void} 
		 */
		V1Products_productIdMembers_userIdDelete(productId: string, userId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/members/' + (userId == null ? '' : encodeURIComponent(userId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * List Permission Groups
		 * This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
		 * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
		 * Get v1/products/{productId}/permissions
		 * @param {string} productId The identifier of the Product.
		 * @return {Array<PermissionGroupModel>} 
		 */
		V1Products_productIdPermissionsGet(productId: string, headersHandler?: () => HttpHeaders): Observable<Array<PermissionGroupModel>> {
			return this.http.get<Array<PermissionGroupModel>>(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/permissions', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Permission Group
		 * This endpoint creates a new Permission Group in a specified Product
		 * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
		 * Post v1/products/{productId}/permissions
		 * @param {string} productId The identifier of the Product.
		 * @return {void} 
		 */
		V1Products_productIdPermissionsPost(productId: string, requestBody: CreatePermissionGroupRequest, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/permissions', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Segments
		 * This endpoint returns the list of the Segments that belongs to the given Product identified by the
		 * `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
		 * Get v1/products/{productId}/segments
		 * @param {string} productId The identifier of the Product.
		 * @return {Array<SegmentListModel>} 
		 */
		V1Products_productIdSegmentsGet(productId: string, headersHandler?: () => HttpHeaders): Observable<Array<SegmentListModel>> {
			return this.http.get<Array<SegmentListModel>>(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/segments', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Segment
		 * This endpoint creates a new Segment in a specified Product
		 * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
		 * Post v1/products/{productId}/segments
		 * @param {string} productId The identifier of the Product.
		 * @return {void} 
		 */
		V1Products_productIdSegmentsPost(productId: string, requestBody: CreateSegmentModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/segments', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * List Tags
		 * This endpoint returns the list of the Tags in a
		 * specified Product, identified by the `productId` parameter.
		 * Get v1/products/{productId}/tags
		 * @param {string} productId The identifier of the Product.
		 * @return {Array<TagModel>} 
		 */
		V1Products_productIdTagsGet(productId: string, headersHandler?: () => HttpHeaders): Observable<Array<TagModel>> {
			return this.http.get<Array<TagModel>>(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/tags', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Create Tag
		 * This endpoint creates a new Tag in a specified Product
		 * identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
		 * Post v1/products/{productId}/tags
		 * @param {string} productId The identifier of the Organization.
		 * @return {void} 
		 */
		V1Products_productIdTagsPost(productId: string, requestBody: CreateTagModel, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/products/' + (productId == null ? '' : encodeURIComponent(productId)) + '/tags', JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }), observe: 'response', responseType: 'text' });
		}

		/**
		 * Delete Segment
		 * This endpoint removes a Segment identified by the `segmentId` parameter.
		 * Delete v1/segments/{segmentId}
		 * @param {string} segmentId The identifier of the Segment.
		 * @return {void} 
		 */
		V1Segments_segmentIdDelete(segmentId: string, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/segments/' + (segmentId == null ? '' : encodeURIComponent(segmentId)), { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Segment
		 * This endpoint returns the metadata of a Segment
		 * identified by the `segmentId`.
		 * Get v1/segments/{segmentId}
		 * @param {string} segmentId The identifier of the Segment.
		 * @return {SegmentModel} When everything is ok, the config data returned.
		 */
		V1Segments_segmentIdGet(segmentId: string, headersHandler?: () => HttpHeaders): Observable<SegmentModel> {
			return this.http.get<SegmentModel>(this.baseUri + 'v1/segments/' + (segmentId == null ? '' : encodeURIComponent(segmentId)), { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Segment
		 * This endpoint updates a Segment identified by the `segmentId` parameter.
		 * Put v1/segments/{segmentId}
		 * @param {string} segmentId The identifier of the Segment.
		 * @return {SegmentModel} 
		 */
		V1Segments_segmentIdPut(segmentId: string, requestBody: UpdateSegmentModel, headersHandler?: () => HttpHeaders): Observable<SegmentModel> {
			return this.http.put<SegmentModel>(this.baseUri + 'v1/segments/' + (segmentId == null ? '' : encodeURIComponent(segmentId)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Flag
		 * This endpoint removes a Feature Flag or Setting from a specified Config,
		 * identified by the `configId` parameter.
		 * Delete v1/settings/{settingId}
		 * @param {number} settingId The identifier of the Setting.
		 * @return {void} 
		 */
		V1Settings_settingIdDelete(settingId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/settings/' + settingId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Flag
		 * This endpoint returns the metadata attributes of a Feature Flag or Setting
		 * identified by the `settingId` parameter.
		 * Get v1/settings/{settingId}
		 * @param {number} settingId The identifier of the Setting.
		 * @return {SettingModel} When everything is ok, the setting data returned.
		 */
		V1Settings_settingIdGet(settingId: number, headersHandler?: () => HttpHeaders): Observable<SettingModel> {
			return this.http.get<SettingModel>(this.baseUri + 'v1/settings/' + settingId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Flag
		 * This endpoint updates the metadata of a Feature Flag or Setting
		 * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Config.
		 * Only the `name`, `hint` and `tags` attributes are modifiable by this endpoint.
		 * The `tags` attribute is a simple collection of the [tag IDs](#operation/get-tags) attached to the given setting.
		 * The advantage of using JSON Patch is that you can describe individual update operations on a resource
		 * without touching attributes that you don't want to change.
		 * For example: We have the following resource.
		 * ```
		 * {
		 * "settingId": 5345,
		 * "key": "myGrandFeature",
		 * "name": "Tihs is a naem with soem typos.",
		 * "hint": "This flag controls my grandioso feature.",
		 * "settingType": "boolean",
		 * "tags": [
		 * {
		 * "tagId": 0,
		 * "name": "sample tag",
		 * "color": "whale"
		 * }
		 * ]
		 * }
		 * ```
		 * If we send an update request body as below (it changes the name and adds the already existing tag with the id 2):
		 * ```
		 * [
		 * {
		 * "op": "replace",
		 * "path": "/name",
		 * "value": "This is the name without typos."
		 * },
		 * {
		 * "op": "add",
		 * "path": "/tags/-",
		 * "value": 2
		 * }
		 * ]
		 * ```
		 * Only the `name` and `tags` are going to be updated and all the other attributes are remaining unchanged.
		 * So we get a response like this:
		 * ```
		 * {
		 * "settingId": 5345,
		 * "key": "myGrandFeature",
		 * "name": "This is the name without typos.",
		 * "hint": "This flag controls my grandioso feature.",
		 * "settingType": "boolean",
		 * "tags": [
		 * {
		 * "tagId": 0,
		 * "name": "sample tag",
		 * "color": "whale"
		 * },
		 * {
		 * "tagId": 2,
		 * "name": "another tag",
		 * "color": "koala"
		 * }
		 * ]
		 * }
		 * ```
		 * Patch v1/settings/{settingId}
		 * @param {number} settingId The identifier of the Setting.
		 * @return {SettingModel} When the update was successful.
		 */
		V1Settings_settingIdPatch(settingId: number, requestBody: JsonPatch, headersHandler?: () => HttpHeaders): Observable<SettingModel> {
			return this.http.patch<SettingModel>(this.baseUri + 'v1/settings/' + settingId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Get value
		 * This endpoint returns the value of a Feature Flag or Setting
		 * in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
		 * The most important attributes in the response are the `value`, `rolloutRules` and `percentageRules`.
		 * The `value` represents what the clients will get when the evaluation requests of our SDKs
		 * are not matching to any of the defined Targeting or Percentage Rules, or when there are no additional rules to evaluate.
		 * The `rolloutRules` and `percentageRules` attributes are representing the current
		 * Targeting and Percentage Rules configuration of the actual Feature Flag or Setting
		 * in an **ordered** collection, which means the order of the returned rules is matching to the
		 * evaluation order. You can read more about these rules [here](https://configcat.com/docs/advanced/targeting/).
		 * Get v1/settings/{settingKeyOrId}/value
		 * @param {string} settingKeyOrId The key or id of the Setting.
		 * @return {SettingValueModel} 
		 */
		V1Settings_settingKeyOrIdValueGet(settingKeyOrId: string, headersHandler?: () => HttpHeaders): Observable<SettingValueModel> {
			return this.http.get<SettingValueModel>(this.baseUri + 'v1/settings/' + (settingKeyOrId == null ? '' : encodeURIComponent(settingKeyOrId)) + '/value', { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update value
		 * This endpoint updates the value of a Feature Flag or Setting
		 * with a collection of [JSON Patch](http://jsonpatch.com) operations in a specified Environment
		 * identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
		 * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
		 * The advantage of using JSON Patch is that you can describe individual update operations on a resource
		 * without touching attributes that you don't want to change. It supports collection reordering, so it also
		 * can be used for reordering the targeting rules of a Feature Flag or Setting.
		 * For example: We have the following resource.
		 * ```
		 * {
		 * "rolloutPercentageItems": [
		 * {
		 * "percentage": 30,
		 * "value": true
		 * },
		 * {
		 * "percentage": 70,
		 * "value": false
		 * }
		 * ],
		 * "rolloutRules": [],
		 * "value": false
		 * }
		 * ```
		 * If we send an update request body as below:
		 * ```
		 * [
		 * {
		 * "op": "replace",
		 * "path": "/value",
		 * "value": true
		 * }
		 * ]
		 * ```
		 * Only the default served value is going to be set to `true` and all the Percentage Rules are remaining unchanged.
		 * So we get a response like this:
		 * ```
		 * {
		 * "rolloutPercentageItems": [
		 * {
		 * "percentage": 30,
		 * "value": true
		 * },
		 * {
		 * "percentage": 70,
		 * "value": false
		 * }
		 * ],
		 * "rolloutRules": [],
		 * "value": true
		 * }
		 * ```
		 * Patch v1/settings/{settingKeyOrId}/value
		 * @param {string} settingKeyOrId The key or id of the Setting.
		 * @param {string} reason The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
		 * @return {SettingValueModel} 
		 */
		V1Settings_settingKeyOrIdValuePatchByReason(settingKeyOrId: string, reason: string | null | undefined, requestBody: JsonPatch, headersHandler?: () => HttpHeaders): Observable<SettingValueModel> {
			return this.http.patch<SettingValueModel>(this.baseUri + 'v1/settings/' + (settingKeyOrId == null ? '' : encodeURIComponent(settingKeyOrId)) + '/value&reason=' + (reason == null ? '' : encodeURIComponent(reason)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Replace value
		 * This endpoint replaces the value of a Feature Flag or Setting
		 * in a specified Environment identified by the <a target="_blank" rel="noopener noreferrer" href="https://app.configcat.com/sdkkey">SDK key</a> passed in the `X-CONFIGCAT-SDKKEY` header.
		 * Only the `value`, `rolloutRules` and `percentageRules` attributes are modifiable by this endpoint.
		 * **Important:** As this endpoint is doing a complete replace, it's important to set every other attribute that you don't
		 * want to change to its original state. Not listing one means that it will reset.
		 * For example: We have the following resource.
		 * ```
		 * {
		 * "rolloutPercentageItems": [
		 * {
		 * "percentage": 30,
		 * "value": true
		 * },
		 * {
		 * "percentage": 70,
		 * "value": false
		 * }
		 * ],
		 * "rolloutRules": [],
		 * "value": false
		 * }
		 * ```
		 * If we send a replace request body as below:
		 * ```
		 * {
		 * "value": true
		 * }
		 * ```
		 * Then besides that the default served value is set to `true`, all the Percentage Rules are deleted.
		 * So we get a response like this:
		 * ```
		 * {
		 * "rolloutPercentageItems": [],
		 * "rolloutRules": [],
		 * "value": true
		 * }
		 * ```
		 * Put v1/settings/{settingKeyOrId}/value
		 * @param {string} settingKeyOrId The key or id of the Setting.
		 * @param {string} reason The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
		 * @return {SettingValueModel} 
		 */
		V1Settings_settingKeyOrIdValuePutByReason(settingKeyOrId: string, reason: string | null | undefined, requestBody: UpdateSettingValueModel, headersHandler?: () => HttpHeaders): Observable<SettingValueModel> {
			return this.http.put<SettingValueModel>(this.baseUri + 'v1/settings/' + (settingKeyOrId == null ? '' : encodeURIComponent(settingKeyOrId)) + '/value&reason=' + (reason == null ? '' : encodeURIComponent(reason)), JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * Delete Tag
		 * This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.
		 * Delete v1/tags/{tagId}
		 * @param {number} tagId The identifier of the Tag.
		 * @return {void} 
		 */
		V1Tags_tagIdDelete(tagId: number, headersHandler?: () => HttpHeaders): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/tags/' + tagId, { headers: headersHandler ? headersHandler() : undefined, observe: 'response', responseType: 'text' });
		}

		/**
		 * Get Tag
		 * This endpoint returns the metadata of a Tag
		 * identified by the `tagId`.
		 * Get v1/tags/{tagId}
		 * @param {number} tagId The identifier of the Tag.
		 * @return {TagModel} When everything is ok, the tag data returned.
		 */
		V1Tags_tagIdGet(tagId: number, headersHandler?: () => HttpHeaders): Observable<TagModel> {
			return this.http.get<TagModel>(this.baseUri + 'v1/tags/' + tagId, { headers: headersHandler ? headersHandler() : undefined });
		}

		/**
		 * Update Tag
		 * This endpoint updates a Tag identified by the `tagId` parameter.
		 * Put v1/tags/{tagId}
		 * @param {number} tagId The identifier of the Tag.
		 * @return {TagModel} 
		 */
		V1Tags_tagIdPut(tagId: number, requestBody: UpdateTagModel, headersHandler?: () => HttpHeaders): Observable<TagModel> {
			return this.http.put<TagModel>(this.baseUri + 'v1/tags/' + tagId, JSON.stringify(requestBody), { headers: headersHandler ? headersHandler().append('Content-Type', 'application/json;charset=UTF-8') : new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' }) });
		}

		/**
		 * List Settings by Tag
		 * This endpoint returns the list of the Settings that
		 * has the specified Tag, identified by the `tagId` parameter.
		 * Get v1/tags/{tagId}/settings
		 * @param {number} tagId The identifier of the Tag.
		 * @return {Array<SettingModel>} When everything is ok, the settings data returned.
		 */
		V1Tags_tagIdSettingsGet(tagId: number, headersHandler?: () => HttpHeaders): Observable<Array<SettingModel>> {
			return this.http.get<Array<SettingModel>>(this.baseUri + 'v1/tags/' + tagId + '/settings', { headers: headersHandler ? headersHandler() : undefined });
		}
	}

}

