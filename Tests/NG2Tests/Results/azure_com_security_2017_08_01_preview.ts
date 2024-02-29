import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** The Advanced Threat Protection settings. */
	export interface AdvancedThreatProtectionProperties {

		/** Indicates whether Advanced Threat Protection is enabled. */
		isEnabled?: boolean | null;
	}

	/** The Advanced Threat Protection settings. */
	export interface AdvancedThreatProtectionPropertiesFormProperties {

		/** Indicates whether Advanced Threat Protection is enabled. */
		isEnabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAdvancedThreatProtectionPropertiesFormGroup() {
		return new FormGroup<AdvancedThreatProtectionPropertiesFormProperties>({
			isEnabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The Advanced Threat Protection resource. */
	export interface AdvancedThreatProtectionSetting {

		/** The Advanced Threat Protection settings. */
		properties?: AdvancedThreatProtectionProperties;
	}

	/** The Advanced Threat Protection resource. */
	export interface AdvancedThreatProtectionSettingFormProperties {
	}
	export function CreateAdvancedThreatProtectionSettingFormGroup() {
		return new FormGroup<AdvancedThreatProtectionSettingFormProperties>({
		});

	}


	/** Auto provisioning setting */
	export interface AutoProvisioningSetting {

		/** describes properties of an auto provisioning setting */
		properties?: AutoProvisioningSettingProperties;
	}

	/** Auto provisioning setting */
	export interface AutoProvisioningSettingFormProperties {
	}
	export function CreateAutoProvisioningSettingFormGroup() {
		return new FormGroup<AutoProvisioningSettingFormProperties>({
		});

	}


	/** describes properties of an auto provisioning setting */
	export interface AutoProvisioningSettingProperties {

		/**
		 * Describes what kind of security agent provisioning action to take
		 * Required
		 */
		autoProvision: AutoProvisioningSettingPropertiesAutoProvision;
	}

	/** describes properties of an auto provisioning setting */
	export interface AutoProvisioningSettingPropertiesFormProperties {

		/**
		 * Describes what kind of security agent provisioning action to take
		 * Required
		 */
		autoProvision: FormControl<AutoProvisioningSettingPropertiesAutoProvision | null | undefined>,
	}
	export function CreateAutoProvisioningSettingPropertiesFormGroup() {
		return new FormGroup<AutoProvisioningSettingPropertiesFormProperties>({
			autoProvision: new FormControl<AutoProvisioningSettingPropertiesAutoProvision | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum AutoProvisioningSettingPropertiesAutoProvision { On = 'On', Off = 'Off' }


	/** List of all the auto provisioning settings response */
	export interface AutoProvisioningSettingList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** List of all the auto provisioning settings */
		value?: Array<AutoProvisioningSetting>;
	}

	/** List of all the auto provisioning settings response */
	export interface AutoProvisioningSettingListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateAutoProvisioningSettingListFormGroup() {
		return new FormGroup<AutoProvisioningSettingListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Error response structure. */
	export interface CloudError {

		/** Error details. */
		error?: CloudErrorBody;
	}

	/** Error response structure. */
	export interface CloudErrorFormProperties {
	}
	export function CreateCloudErrorFormGroup() {
		return new FormGroup<CloudErrorFormProperties>({
		});

	}


	/** Error details. */
	export interface CloudErrorBody {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code?: string | null;

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message?: string | null;
	}

	/** Error details. */
	export interface CloudErrorBodyFormProperties {

		/** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
		code: FormControl<string | null | undefined>,

		/** A message describing the error, intended to be suitable for display in a user interface. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateCloudErrorBodyFormGroup() {
		return new FormGroup<CloudErrorBodyFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compliance of a scope */
	export interface Compliance {

		/** The Compliance score (percentage) of a Subscription is a sum of all Resources' Compliances under the given Subscription. A Resource Compliance is defined as the compliant ('healthy') Policy Definitions out of all Policy Definitions applicable to a given resource. */
		properties?: ComplianceProperties;
	}

	/** Compliance of a scope */
	export interface ComplianceFormProperties {
	}
	export function CreateComplianceFormGroup() {
		return new FormGroup<ComplianceFormProperties>({
		});

	}


	/** The Compliance score (percentage) of a Subscription is a sum of all Resources' Compliances under the given Subscription. A Resource Compliance is defined as the compliant ('healthy') Policy Definitions out of all Policy Definitions applicable to a given resource. */
	export interface ComplianceProperties {

		/** An array of segment, which is the actually the compliance assessment. */
		assessmentResult?: Array<ComplianceSegment>;

		/** The timestamp when the Compliance calculation was conducted. */
		assessmentTimestampUtcDate?: Date | null;

		/**
		 * The resource count of the given subscription for which the Compliance calculation was conducted (needed for Management Group Compliance calculation).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resourceCount?: number | null;
	}

	/** The Compliance score (percentage) of a Subscription is a sum of all Resources' Compliances under the given Subscription. A Resource Compliance is defined as the compliant ('healthy') Policy Definitions out of all Policy Definitions applicable to a given resource. */
	export interface CompliancePropertiesFormProperties {

		/** The timestamp when the Compliance calculation was conducted. */
		assessmentTimestampUtcDate: FormControl<Date | null | undefined>,

		/**
		 * The resource count of the given subscription for which the Compliance calculation was conducted (needed for Management Group Compliance calculation).
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		resourceCount: FormControl<number | null | undefined>,
	}
	export function CreateCompliancePropertiesFormGroup() {
		return new FormGroup<CompliancePropertiesFormProperties>({
			assessmentTimestampUtcDate: new FormControl<Date | null | undefined>(undefined),
			resourceCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A segment of a compliance assessment. */
	export interface ComplianceSegment {

		/**
		 * The size (%) of the segment.
		 * Type: double
		 */
		percentage?: number | null;

		/** The segment type, e.g. compliant, non-compliance, insufficient coverage, N/A, etc. */
		segmentType?: string | null;
	}

	/** A segment of a compliance assessment. */
	export interface ComplianceSegmentFormProperties {

		/**
		 * The size (%) of the segment.
		 * Type: double
		 */
		percentage: FormControl<number | null | undefined>,

		/** The segment type, e.g. compliant, non-compliance, insufficient coverage, N/A, etc. */
		segmentType: FormControl<string | null | undefined>,
	}
	export function CreateComplianceSegmentFormGroup() {
		return new FormGroup<ComplianceSegmentFormProperties>({
			percentage: new FormControl<number | null | undefined>(undefined),
			segmentType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of Compliance objects response */
	export interface ComplianceList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** List of Compliance objects */
		value?: Array<Compliance>;
	}

	/** List of Compliance objects response */
	export interface ComplianceListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateComplianceListFormGroup() {
		return new FormGroup<ComplianceListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a data export setting */
	export interface DataExportSetting {

		/** The data export setting properties */
		properties?: DataExportSettingProperties;
	}

	/** Represents a data export setting */
	export interface DataExportSettingFormProperties {
	}
	export function CreateDataExportSettingFormGroup() {
		return new FormGroup<DataExportSettingFormProperties>({
		});

	}


	/** The data export setting properties */
	export interface DataExportSettingProperties {

		/**
		 * Is the data export setting is enabled
		 * Required
		 */
		enabled: boolean;
	}

	/** The data export setting properties */
	export interface DataExportSettingPropertiesFormProperties {

		/**
		 * Is the data export setting is enabled
		 * Required
		 */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateDataExportSettingPropertiesFormGroup() {
		return new FormGroup<DataExportSettingPropertiesFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** The information type keyword. */
	export interface InformationProtectionKeyword {

		/** Indicates whether the keyword can be applied on numeric types or not. */
		canBeNumeric?: boolean | null;

		/** Indicates whether the keyword is custom or not. */
		custom?: boolean | null;

		/** Indicates whether the keyword is excluded or not. */
		excluded?: boolean | null;

		/** The keyword pattern. */
		pattern?: string | null;
	}

	/** The information type keyword. */
	export interface InformationProtectionKeywordFormProperties {

		/** Indicates whether the keyword can be applied on numeric types or not. */
		canBeNumeric: FormControl<boolean | null | undefined>,

		/** Indicates whether the keyword is custom or not. */
		custom: FormControl<boolean | null | undefined>,

		/** Indicates whether the keyword is excluded or not. */
		excluded: FormControl<boolean | null | undefined>,

		/** The keyword pattern. */
		pattern: FormControl<string | null | undefined>,
	}
	export function CreateInformationProtectionKeywordFormGroup() {
		return new FormGroup<InformationProtectionKeywordFormProperties>({
			canBeNumeric: new FormControl<boolean | null | undefined>(undefined),
			custom: new FormControl<boolean | null | undefined>(undefined),
			excluded: new FormControl<boolean | null | undefined>(undefined),
			pattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information protection policy. */
	export interface InformationProtectionPolicy {

		/** describes properties of an information protection policy. */
		properties?: InformationProtectionPolicyProperties;
	}

	/** Information protection policy. */
	export interface InformationProtectionPolicyFormProperties {
	}
	export function CreateInformationProtectionPolicyFormGroup() {
		return new FormGroup<InformationProtectionPolicyFormProperties>({
		});

	}


	/** describes properties of an information protection policy. */
	export interface InformationProtectionPolicyProperties {

		/** The sensitivity information types. */
		informationTypes?: {[id: string]: InformationType };

		/** Dictionary of sensitivity labels. */
		labels?: {[id: string]: SensitivityLabel };

		/** Describes the last UTC time the policy was modified. */
		lastModifiedUtc?: Date | null;
	}

	/** describes properties of an information protection policy. */
	export interface InformationProtectionPolicyPropertiesFormProperties {

		/** The sensitivity information types. */
		informationTypes: FormControl<{[id: string]: InformationType } | null | undefined>,

		/** Dictionary of sensitivity labels. */
		labels: FormControl<{[id: string]: SensitivityLabel } | null | undefined>,

		/** Describes the last UTC time the policy was modified. */
		lastModifiedUtc: FormControl<Date | null | undefined>,
	}
	export function CreateInformationProtectionPolicyPropertiesFormGroup() {
		return new FormGroup<InformationProtectionPolicyPropertiesFormProperties>({
			informationTypes: new FormControl<{[id: string]: InformationType } | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: SensitivityLabel } | null | undefined>(undefined),
			lastModifiedUtc: new FormControl<Date | null | undefined>(undefined),
		});

	}


	/** The information type. */
	export interface InformationType {

		/** Indicates whether the information type is custom or not. */
		custom?: boolean | null;

		/** The name of the information type. */
		displayName?: string | null;

		/** Indicates whether the information type is enabled or not. */
		enabled?: boolean | null;

		/** The information type keywords. */
		keywords?: Array<InformationProtectionKeyword>;

		/**
		 * The order of the information type.
		 * Type: double
		 */
		order?: number | null;

		/** The recommended label id to be associated with this information type. */
		recommendedLabelId?: string | null;
	}

	/** The information type. */
	export interface InformationTypeFormProperties {

		/** Indicates whether the information type is custom or not. */
		custom: FormControl<boolean | null | undefined>,

		/** The name of the information type. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates whether the information type is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The order of the information type.
		 * Type: double
		 */
		order: FormControl<number | null | undefined>,

		/** The recommended label id to be associated with this information type. */
		recommendedLabelId: FormControl<string | null | undefined>,
	}
	export function CreateInformationTypeFormGroup() {
		return new FormGroup<InformationTypeFormProperties>({
			custom: new FormControl<boolean | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
			recommendedLabelId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The sensitivity label. */
	export interface SensitivityLabel {

		/** The name of the sensitivity label. */
		displayName?: string | null;

		/** Indicates whether the label is enabled or not. */
		enabled?: boolean | null;

		/**
		 * The order of the sensitivity label.
		 * Type: double
		 */
		order?: number | null;
	}

	/** The sensitivity label. */
	export interface SensitivityLabelFormProperties {

		/** The name of the sensitivity label. */
		displayName: FormControl<string | null | undefined>,

		/** Indicates whether the label is enabled or not. */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * The order of the sensitivity label.
		 * Type: double
		 */
		order: FormControl<number | null | undefined>,
	}
	export function CreateSensitivityLabelFormGroup() {
		return new FormGroup<SensitivityLabelFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			enabled: new FormControl<boolean | null | undefined>(undefined),
			order: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Information protection policies response. */
	export interface InformationProtectionPolicyList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** List of information protection policies. */
		value?: Array<InformationProtectionPolicy>;
	}

	/** Information protection policies response. */
	export interface InformationProtectionPolicyListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateInformationProtectionPolicyListFormGroup() {
		return new FormGroup<InformationProtectionPolicyListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Azure resource with kind */
	export interface Kind {

		/** Kind of the resource */
		kind?: string | null;
	}

	/** Describes an Azure resource with kind */
	export interface KindFormProperties {

		/** Kind of the resource */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateKindFormGroup() {
		return new FormGroup<KindFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Pricing tier will be applied for the scope based on the resource ID */
	export interface Pricing {

		/** Pricing data */
		properties?: PricingProperties;
	}

	/** Pricing tier will be applied for the scope based on the resource ID */
	export interface PricingFormProperties {
	}
	export function CreatePricingFormGroup() {
		return new FormGroup<PricingFormProperties>({
		});

	}


	/** Pricing data */
	export interface PricingProperties {

		/**
		 * Pricing tier type
		 * Required
		 */
		pricingTier: PricingPropertiesPricingTier;
	}

	/** Pricing data */
	export interface PricingPropertiesFormProperties {

		/**
		 * Pricing tier type
		 * Required
		 */
		pricingTier: FormControl<PricingPropertiesPricingTier | null | undefined>,
	}
	export function CreatePricingPropertiesFormGroup() {
		return new FormGroup<PricingPropertiesFormProperties>({
			pricingTier: new FormControl<PricingPropertiesPricingTier | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum PricingPropertiesPricingTier { Free = 'Free', Standard = 'Standard' }


	/** List of pricing configurations response */
	export interface PricingList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/**
		 * List of pricing configurations
		 * Required
		 */
		value: Array<Pricing>;
	}

	/** List of pricing configurations response */
	export interface PricingListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreatePricingListFormGroup() {
		return new FormGroup<PricingListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes an Azure resource. */
	export interface Resource {

		/** Resource Id */
		id?: string | null;

		/** Resource name */
		name?: string | null;

		/** Resource type */
		type?: string | null;
	}

	/** Describes an Azure resource. */
	export interface ResourceFormProperties {

		/** Resource Id */
		id: FormControl<string | null | undefined>,

		/** Resource name */
		name: FormControl<string | null | undefined>,

		/** Resource type */
		type: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contact details for security issues */
	export interface SecurityContact {

		/** describes security contact properties */
		properties?: SecurityContactProperties;
	}

	/** Contact details for security issues */
	export interface SecurityContactFormProperties {
	}
	export function CreateSecurityContactFormGroup() {
		return new FormGroup<SecurityContactFormProperties>({
		});

	}


	/** describes security contact properties */
	export interface SecurityContactProperties {

		/**
		 * Whether to send security alerts notifications to the security contact
		 * Required
		 */
		alertNotifications: AutoProvisioningSettingPropertiesAutoProvision;

		/**
		 * Whether to send security alerts notifications to subscription admins
		 * Required
		 */
		alertsToAdmins: AutoProvisioningSettingPropertiesAutoProvision;

		/**
		 * The email of this security contact
		 * Required
		 */
		email: string;

		/** The phone number of this security contact */
		phone?: string | null;
	}

	/** describes security contact properties */
	export interface SecurityContactPropertiesFormProperties {

		/**
		 * Whether to send security alerts notifications to the security contact
		 * Required
		 */
		alertNotifications: FormControl<AutoProvisioningSettingPropertiesAutoProvision | null | undefined>,

		/**
		 * Whether to send security alerts notifications to subscription admins
		 * Required
		 */
		alertsToAdmins: FormControl<AutoProvisioningSettingPropertiesAutoProvision | null | undefined>,

		/**
		 * The email of this security contact
		 * Required
		 */
		email: FormControl<string | null | undefined>,

		/** The phone number of this security contact */
		phone: FormControl<string | null | undefined>,
	}
	export function CreateSecurityContactPropertiesFormGroup() {
		return new FormGroup<SecurityContactPropertiesFormProperties>({
			alertNotifications: new FormControl<AutoProvisioningSettingPropertiesAutoProvision | null | undefined>(undefined, [Validators.required]),
			alertsToAdmins: new FormControl<AutoProvisioningSettingPropertiesAutoProvision | null | undefined>(undefined, [Validators.required]),
			email: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			phone: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List of security contacts response */
	export interface SecurityContactList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** List of security contacts */
		value?: Array<SecurityContact>;
	}

	/** List of security contacts response */
	export interface SecurityContactListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSecurityContactListFormGroup() {
		return new FormGroup<SecurityContactListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a security setting in Azure Security Center. */
	export interface Setting {
	}

	/** Represents a security setting in Azure Security Center. */
	export interface SettingFormProperties {
	}
	export function CreateSettingFormGroup() {
		return new FormGroup<SettingFormProperties>({
		});

	}


	/** The kind of the security setting */
	export interface SettingResource {

		/**
		 * the kind of the settings string (DataExportSetting)
		 * Required
		 */
		kind: SettingResourceKind;
	}

	/** The kind of the security setting */
	export interface SettingResourceFormProperties {

		/**
		 * the kind of the settings string (DataExportSetting)
		 * Required
		 */
		kind: FormControl<SettingResourceKind | null | undefined>,
	}
	export function CreateSettingResourceFormGroup() {
		return new FormGroup<SettingResourceFormProperties>({
			kind: new FormControl<SettingResourceKind | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SettingResourceKind { DataExportSetting = 'DataExportSetting', AlertSuppressionSetting = 'AlertSuppressionSetting' }


	/** Subscription settings list. */
	export interface SettingsList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/** The settings list. */
		value?: Array<Setting>;
	}

	/** Subscription settings list. */
	export interface SettingsListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateSettingsListFormGroup() {
		return new FormGroup<SettingsListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Configures where to store the OMS agent data for workspaces under a scope */
	export interface WorkspaceSetting {

		/** Workspace setting data */
		properties?: WorkspaceSettingProperties;
	}

	/** Configures where to store the OMS agent data for workspaces under a scope */
	export interface WorkspaceSettingFormProperties {
	}
	export function CreateWorkspaceSettingFormGroup() {
		return new FormGroup<WorkspaceSettingFormProperties>({
		});

	}


	/** Workspace setting data */
	export interface WorkspaceSettingProperties {

		/**
		 * All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
		 * Required
		 */
		scope: string;

		/**
		 * The full Azure ID of the workspace to save the data in
		 * Required
		 */
		workspaceId: string;
	}

	/** Workspace setting data */
	export interface WorkspaceSettingPropertiesFormProperties {

		/**
		 * All the VMs in this scope will send their security data to the mentioned workspace unless overridden by a setting with more specific scope
		 * Required
		 */
		scope: FormControl<string | null | undefined>,

		/**
		 * The full Azure ID of the workspace to save the data in
		 * Required
		 */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceSettingPropertiesFormGroup() {
		return new FormGroup<WorkspaceSettingPropertiesFormProperties>({
			scope: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			workspaceId: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}


	/** List of workspace settings response */
	export interface WorkspaceSettingList {

		/** The URI to fetch the next page. */
		nextLink?: string | null;

		/**
		 * List of workspace settings
		 * Required
		 */
		value: Array<WorkspaceSetting>;
	}

	/** List of workspace settings response */
	export interface WorkspaceSettingListFormProperties {

		/** The URI to fetch the next page. */
		nextLink: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceSettingListFormGroup() {
		return new FormGroup<WorkspaceSettingListFormProperties>({
			nextLink: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Exposes the auto provisioning settings of the subscriptions
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {AutoProvisioningSettingList} OK
		 */
		AutoProvisioningSettings_List(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string): Observable<AutoProvisioningSettingList> {
			return this.http.get<AutoProvisioningSettingList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/autoProvisioningSettings?api_version=' + api_version, {});
		}

		/**
		 * Details of a specific setting
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings/{settingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} settingName Auto provisioning setting key
		 * @return {AutoProvisioningSetting} OK
		 */
		AutoProvisioningSettings_Get(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, settingName: string): Observable<AutoProvisioningSetting> {
			return this.http.get<AutoProvisioningSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/autoProvisioningSettings/' + (settingName == null ? '' : encodeURIComponent(settingName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Details of a specific setting
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Security/autoProvisioningSettings/{settingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} settingName Auto provisioning setting key
		 * @param {AutoProvisioningSetting} requestBody Auto provisioning setting key
		 * @return {AutoProvisioningSetting} OK
		 */
		AutoProvisioningSettings_Create(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, settingName: string, requestBody: AutoProvisioningSetting): Observable<AutoProvisioningSetting> {
			return this.http.put<AutoProvisioningSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/autoProvisioningSettings/' + (settingName == null ? '' : encodeURIComponent(settingName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Security pricing configurations in the subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {PricingList} OK
		 */
		Pricings_List(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string): Observable<PricingList> {
			return this.http.get<PricingList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/pricings?api_version=' + api_version, {});
		}

		/**
		 * Security pricing configuration in the subscriptionSecurity pricing configuration in the subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings/{pricingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} pricingName name of the pricing configuration
		 * @return {Pricing} OK
		 */
		Pricings_GetSubscriptionPricing(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, pricingName: string): Observable<Pricing> {
			return this.http.get<Pricing>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/pricings/' + (pricingName == null ? '' : encodeURIComponent(pricingName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Security pricing configuration in the subscription
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Security/pricings/{pricingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} pricingName name of the pricing configuration
		 * @param {Pricing} requestBody Pricing object
		 * @return {Pricing} OK
		 */
		Pricings_UpdateSubscriptionPricing(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, pricingName: string, requestBody: Pricing): Observable<Pricing> {
			return this.http.put<Pricing>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/pricings/' + (pricingName == null ? '' : encodeURIComponent(pricingName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Security contact configurations for the subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {SecurityContactList} OK
		 */
		SecurityContacts_List(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string): Observable<SecurityContactList> {
			return this.http.get<SecurityContactList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/securityContacts?api_version=' + api_version, {});
		}

		/**
		 * Security contact configurations for the subscription
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} securityContactName Name of the security contact object
		 * @return {SecurityContact} OK
		 */
		SecurityContacts_Get(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, securityContactName: string): Observable<SecurityContact> {
			return this.http.get<SecurityContact>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/securityContacts/' + (securityContactName == null ? '' : encodeURIComponent(securityContactName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Security contact configurations for the subscription
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} securityContactName Name of the security contact object
		 * @param {SecurityContact} requestBody Security contact object
		 * @return {SecurityContact} OK
		 */
		SecurityContacts_Create(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, securityContactName: string, requestBody: SecurityContact): Observable<SecurityContact> {
			return this.http.put<SecurityContact>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/securityContacts/' + (securityContactName == null ? '' : encodeURIComponent(securityContactName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Security contact configurations for the subscription
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} securityContactName Name of the security contact object
		 * @return {void} 
		 */
		SecurityContacts_Delete(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, securityContactName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/securityContacts/' + (securityContactName == null ? '' : encodeURIComponent(securityContactName)) + '?api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Security contact configurations for the subscription
		 * Patch subscriptions/{subscriptionId}/providers/Microsoft.Security/securityContacts/{securityContactName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} securityContactName Name of the security contact object
		 * @param {SecurityContact} requestBody Security contact object
		 * @return {SecurityContact} OK
		 */
		SecurityContacts_Update(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, securityContactName: string, requestBody: SecurityContact): Observable<SecurityContact> {
			return this.http.patch<SecurityContact>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/securityContacts/' + (securityContactName == null ? '' : encodeURIComponent(securityContactName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Settings about different configurations in security center
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/settings
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {SettingsList} OK
		 */
		Settings_List(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string): Observable<SettingsList> {
			return this.http.get<SettingsList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/settings?api_version=' + api_version, {});
		}

		/**
		 * Settings of different configurations in security center
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/settings/{settingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {Settings_GetSettingName} settingName Name of setting: (MCAS/WDATP)
		 * @return {Setting} OK
		 */
		Settings_Get(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, settingName: Settings_GetSettingName): Observable<Setting> {
			return this.http.get<Setting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/settings/' + settingName + '?api_version=' + api_version, {});
		}

		/**
		 * updating settings about different configurations in security center
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Security/settings/{settingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {Settings_GetSettingName} settingName Name of setting: (MCAS/WDATP)
		 * @param {Setting} requestBody Setting object
		 * @return {Setting} OK
		 */
		Settings_Update(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, settingName: Settings_GetSettingName, requestBody: Setting): Observable<Setting> {
			return this.http.put<Setting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/settings/' + settingName + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @return {WorkspaceSettingList} OK
		 */
		WorkspaceSettings_List(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string): Observable<WorkspaceSettingList> {
			return this.http.get<WorkspaceSettingList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/workspaceSettings?api_version=' + api_version, {});
		}

		/**
		 * Settings about where we should store your security data and logs. If the result is empty, it means that no custom-workspace configuration was set
		 * Get subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} workspaceSettingName Name of the security setting
		 * @return {WorkspaceSetting} OK
		 */
		WorkspaceSettings_Get(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, workspaceSettingName: string): Observable<WorkspaceSetting> {
			return this.http.get<WorkspaceSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/workspaceSettings/' + (workspaceSettingName == null ? '' : encodeURIComponent(workspaceSettingName)) + '?api_version=' + api_version, {});
		}

		/**
		 * creating settings about where we should store your security data and logs
		 * Put subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} workspaceSettingName Name of the security setting
		 * @param {WorkspaceSetting} requestBody Security data setting object
		 * @return {WorkspaceSetting} OK
		 */
		WorkspaceSettings_Create(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, workspaceSettingName: string, requestBody: WorkspaceSetting): Observable<WorkspaceSetting> {
			return this.http.put<WorkspaceSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/workspaceSettings/' + (workspaceSettingName == null ? '' : encodeURIComponent(workspaceSettingName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes the custom workspace settings for this subscription. new VMs will report to the default workspace
		 * Delete subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} workspaceSettingName Name of the security setting
		 * @return {void} 
		 */
		WorkspaceSettings_Delete(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, workspaceSettingName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/workspaceSettings/' + (workspaceSettingName == null ? '' : encodeURIComponent(workspaceSettingName)) + '?api_version=' + api_version, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Settings about where we should store your security data and logs
		 * Patch subscriptions/{subscriptionId}/providers/Microsoft.Security/workspaceSettings/{workspaceSettingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} workspaceSettingName Name of the security setting
		 * @param {WorkspaceSetting} requestBody Security data setting object
		 * @return {WorkspaceSetting} OK
		 */
		WorkspaceSettings_Update(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, workspaceSettingName: string, requestBody: WorkspaceSetting): Observable<WorkspaceSetting> {
			return this.http.patch<WorkspaceSetting>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/providers/Microsoft.Security/workspaceSettings/' + (workspaceSettingName == null ? '' : encodeURIComponent(workspaceSettingName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Security pricing configurations in the resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/pricings
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @return {PricingList} OK
		 */
		Pricings_ListByResourceGroup(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, resourceGroupName: string): Observable<PricingList> {
			return this.http.get<PricingList>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/pricings?api_version=' + api_version, {});
		}

		/**
		 * Security pricing configuration in the resource group
		 * Get subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/pricings/{pricingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} pricingName name of the pricing configuration
		 * @return {Pricing} OK
		 */
		Pricings_GetResourceGroupPricing(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, resourceGroupName: string, pricingName: string): Observable<Pricing> {
			return this.http.get<Pricing>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/pricings/' + (pricingName == null ? '' : encodeURIComponent(pricingName)) + '?api_version=' + api_version, {});
		}

		/**
		 * Security pricing configuration in the resource group
		 * Put subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/pricings/{pricingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} subscriptionId Azure subscription ID
		 * @param {string} resourceGroupName The name of the resource group within the user's subscription. The name is case insensitive.
		 *     Min length: 1    Max length: 90
		 * @param {string} pricingName name of the pricing configuration
		 * @param {Pricing} requestBody Pricing object
		 * @return {Pricing} OK
		 */
		Pricings_CreateOrUpdateResourceGroupPricing(api_version: AutoProvisioningSettings_ListApi_version, subscriptionId: string, resourceGroupName: string, pricingName: string, requestBody: Pricing): Observable<Pricing> {
			return this.http.put<Pricing>(this.baseUri + 'subscriptions/' + (subscriptionId == null ? '' : encodeURIComponent(subscriptionId)) + '/resourceGroups/' + (resourceGroupName == null ? '' : encodeURIComponent(resourceGroupName)) + '/providers/Microsoft.Security/pricings/' + (pricingName == null ? '' : encodeURIComponent(pricingName)) + '?api_version=' + api_version, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Gets the Advanced Threat Protection settings for the specified resource.
		 * Get {resourceId}/providers/Microsoft.Security/advancedThreatProtectionSettings/{settingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} resourceId The identifier of the resource.
		 * @param {AdvancedThreatProtection_GetSettingName} settingName Advanced Threat Protection setting name.
		 * @return {AdvancedThreatProtectionSetting} Successful request to get Advanced Threat Protection settings.
		 */
		AdvancedThreatProtection_Get(api_version: AutoProvisioningSettings_ListApi_version, resourceId: string, settingName: AdvancedThreatProtection_GetSettingName): Observable<AdvancedThreatProtectionSetting> {
			return this.http.get<AdvancedThreatProtectionSetting>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/providers/Microsoft.Security/advancedThreatProtectionSettings/' + settingName + '?api_version=' + api_version + '', {});
		}

		/**
		 * Creates or updates the Advanced Threat Protection settings on a specified resource.
		 * Put {resourceId}/providers/Microsoft.Security/advancedThreatProtectionSettings/{settingName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} resourceId The identifier of the resource.
		 * @param {AdvancedThreatProtection_GetSettingName} settingName Advanced Threat Protection setting name.
		 * @param {AdvancedThreatProtectionSetting} requestBody Advanced Threat Protection Settings
		 * @return {AdvancedThreatProtectionSetting} Successful request to put Advanced Threat Protection settings.
		 */
		AdvancedThreatProtection_Create(api_version: AutoProvisioningSettings_ListApi_version, resourceId: string, settingName: AdvancedThreatProtection_GetSettingName, requestBody: AdvancedThreatProtectionSetting): Observable<AdvancedThreatProtectionSetting> {
			return this.http.put<AdvancedThreatProtectionSetting>(this.baseUri + (resourceId == null ? '' : encodeURIComponent(resourceId)) + '/providers/Microsoft.Security/advancedThreatProtectionSettings/' + settingName + '?api_version=' + api_version + '', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * The Compliance scores of the specific management group.
		 * Get {scope}/providers/Microsoft.Security/compliances
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @return {ComplianceList} OK
		 */
		Compliances_List(api_version: AutoProvisioningSettings_ListApi_version, scope: string): Observable<ComplianceList> {
			return this.http.get<ComplianceList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/compliances?api_version=' + api_version + '', {});
		}

		/**
		 * Details of a specific Compliance.
		 * Get {scope}/providers/Microsoft.Security/compliances/{complianceName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @param {string} complianceName name of the Compliance
		 * @return {Compliance} OK
		 */
		Compliances_Get(api_version: AutoProvisioningSettings_ListApi_version, scope: string, complianceName: string): Observable<Compliance> {
			return this.http.get<Compliance>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/compliances/' + (complianceName == null ? '' : encodeURIComponent(complianceName)) + '?api_version=' + api_version + '', {});
		}

		/**
		 * Information protection policies of a specific management group.
		 * Get {scope}/providers/Microsoft.Security/informationProtectionPolicies
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @return {InformationProtectionPolicyList} OK
		 */
		InformationProtectionPolicies_List(api_version: AutoProvisioningSettings_ListApi_version, scope: string): Observable<InformationProtectionPolicyList> {
			return this.http.get<InformationProtectionPolicyList>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/informationProtectionPolicies?api_version=' + api_version + '', {});
		}

		/**
		 * Details of the information protection policy.
		 * Get {scope}/providers/Microsoft.Security/informationProtectionPolicies/{informationProtectionPolicyName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @param {InformationProtectionPolicies_GetInformationProtectionPolicyName} informationProtectionPolicyName Name of the information protection policy.
		 * @return {InformationProtectionPolicy} OK
		 */
		InformationProtectionPolicies_Get(api_version: AutoProvisioningSettings_ListApi_version, scope: string, informationProtectionPolicyName: InformationProtectionPolicies_GetInformationProtectionPolicyName): Observable<InformationProtectionPolicy> {
			return this.http.get<InformationProtectionPolicy>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/informationProtectionPolicies/' + informationProtectionPolicyName + '?api_version=' + api_version + '', {});
		}

		/**
		 * Details of the information protection policy.
		 * Put {scope}/providers/Microsoft.Security/informationProtectionPolicies/{informationProtectionPolicyName}
		 * @param {AutoProvisioningSettings_ListApi_version} api_version API version for the operation
		 * @param {string} scope Scope of the query, can be subscription (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group (/providers/Microsoft.Management/managementGroups/mgName).
		 * @param {InformationProtectionPolicies_GetInformationProtectionPolicyName} informationProtectionPolicyName Name of the information protection policy.
		 * @return {InformationProtectionPolicy} OK
		 */
		InformationProtectionPolicies_CreateOrUpdate(api_version: AutoProvisioningSettings_ListApi_version, scope: string, informationProtectionPolicyName: InformationProtectionPolicies_GetInformationProtectionPolicyName): Observable<InformationProtectionPolicy> {
			return this.http.put<InformationProtectionPolicy>(this.baseUri + (scope == null ? '' : encodeURIComponent(scope)) + '/providers/Microsoft.Security/informationProtectionPolicies/' + informationProtectionPolicyName + '?api_version=' + api_version + '', null, {});
		}
	}

	export enum AutoProvisioningSettings_ListApi_version { '2017-08-01-preview' = '2017-08-01-preview' }

	export enum Settings_GetSettingName { MCAS = 'MCAS', WDATP = 'WDATP' }

	export enum AdvancedThreatProtection_GetSettingName { current = 'current' }

	export enum InformationProtectionPolicies_GetInformationProtectionPolicyName { effective = 'effective', custom = 'custom' }

}

