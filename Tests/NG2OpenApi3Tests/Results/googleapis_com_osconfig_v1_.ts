import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed. */
	export interface AptSettings {

		/** List of packages to exclude from update. These packages will be excluded */
		excludes?: Array<string>;

		/** An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field cannot be specified with any other patch configuration fields. */
		exclusivePackages?: Array<string>;

		/** By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead. */
		type?: AptSettingsType | null;
	}

	/** Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed. */
	export interface AptSettingsFormProperties {

		/** By changing the type to DIST, the patching is performed using `apt-get dist-upgrade` instead. */
		type: FormControl<AptSettingsType | null | undefined>,
	}
	export function CreateAptSettingsFormGroup() {
		return new FormGroup<AptSettingsFormProperties>({
			type: new FormControl<AptSettingsType | null | undefined>(undefined),
		});

	}

	export enum AptSettingsType { TYPE_UNSPECIFIED = 0, DIST = 1, UPGRADE = 2 }


	/** Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document */
	export interface CVSSv3 {

		/** This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability. */
		attackComplexity?: CVSSv3AttackComplexity | null;

		/** This metric reflects the context by which vulnerability exploitation is possible. */
		attackVector?: CVSSv3AttackVector | null;

		/** This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. */
		availabilityImpact?: CVSSv3AvailabilityImpact | null;

		/** The base score is a function of the base metric scores. https://www.first.org/cvss/specification-document#Base-Metrics */
		baseScore?: number | null;

		/** This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. */
		confidentialityImpact?: CVSSv3AvailabilityImpact | null;

		/** The Exploitability sub-score equation is derived from the Base Exploitability metrics. https://www.first.org/cvss/specification-document#2-1-Exploitability-Metrics */
		exploitabilityScore?: number | null;

		/** The Impact sub-score equation is derived from the Base Impact metrics. */
		impactScore?: number | null;

		/** This metric measures the impact to integrity of a successfully exploited vulnerability. */
		integrityImpact?: CVSSv3AvailabilityImpact | null;

		/** This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. */
		privilegesRequired?: CVSSv3PrivilegesRequired | null;

		/** The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. */
		scope?: CVSSv3Scope | null;

		/** This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. */
		userInteraction?: CVSSv3UserInteraction | null;
	}

	/** Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document */
	export interface CVSSv3FormProperties {

		/** This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability. */
		attackComplexity: FormControl<CVSSv3AttackComplexity | null | undefined>,

		/** This metric reflects the context by which vulnerability exploitation is possible. */
		attackVector: FormControl<CVSSv3AttackVector | null | undefined>,

		/** This metric measures the impact to the availability of the impacted component resulting from a successfully exploited vulnerability. */
		availabilityImpact: FormControl<CVSSv3AvailabilityImpact | null | undefined>,

		/** The base score is a function of the base metric scores. https://www.first.org/cvss/specification-document#Base-Metrics */
		baseScore: FormControl<number | null | undefined>,

		/** This metric measures the impact to the confidentiality of the information resources managed by a software component due to a successfully exploited vulnerability. */
		confidentialityImpact: FormControl<CVSSv3AvailabilityImpact | null | undefined>,

		/** The Exploitability sub-score equation is derived from the Base Exploitability metrics. https://www.first.org/cvss/specification-document#2-1-Exploitability-Metrics */
		exploitabilityScore: FormControl<number | null | undefined>,

		/** The Impact sub-score equation is derived from the Base Impact metrics. */
		impactScore: FormControl<number | null | undefined>,

		/** This metric measures the impact to integrity of a successfully exploited vulnerability. */
		integrityImpact: FormControl<CVSSv3AvailabilityImpact | null | undefined>,

		/** This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability. */
		privilegesRequired: FormControl<CVSSv3PrivilegesRequired | null | undefined>,

		/** The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope. */
		scope: FormControl<CVSSv3Scope | null | undefined>,

		/** This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component. */
		userInteraction: FormControl<CVSSv3UserInteraction | null | undefined>,
	}
	export function CreateCVSSv3FormGroup() {
		return new FormGroup<CVSSv3FormProperties>({
			attackComplexity: new FormControl<CVSSv3AttackComplexity | null | undefined>(undefined),
			attackVector: new FormControl<CVSSv3AttackVector | null | undefined>(undefined),
			availabilityImpact: new FormControl<CVSSv3AvailabilityImpact | null | undefined>(undefined),
			baseScore: new FormControl<number | null | undefined>(undefined),
			confidentialityImpact: new FormControl<CVSSv3AvailabilityImpact | null | undefined>(undefined),
			exploitabilityScore: new FormControl<number | null | undefined>(undefined),
			impactScore: new FormControl<number | null | undefined>(undefined),
			integrityImpact: new FormControl<CVSSv3AvailabilityImpact | null | undefined>(undefined),
			privilegesRequired: new FormControl<CVSSv3PrivilegesRequired | null | undefined>(undefined),
			scope: new FormControl<CVSSv3Scope | null | undefined>(undefined),
			userInteraction: new FormControl<CVSSv3UserInteraction | null | undefined>(undefined),
		});

	}

	export enum CVSSv3AttackComplexity { ATTACK_COMPLEXITY_UNSPECIFIED = 0, ATTACK_COMPLEXITY_LOW = 1, ATTACK_COMPLEXITY_HIGH = 2 }

	export enum CVSSv3AttackVector { ATTACK_VECTOR_UNSPECIFIED = 0, ATTACK_VECTOR_NETWORK = 1, ATTACK_VECTOR_ADJACENT = 2, ATTACK_VECTOR_LOCAL = 3, ATTACK_VECTOR_PHYSICAL = 4 }

	export enum CVSSv3AvailabilityImpact { IMPACT_UNSPECIFIED = 0, IMPACT_HIGH = 1, IMPACT_LOW = 2, IMPACT_NONE = 3 }

	export enum CVSSv3PrivilegesRequired { PRIVILEGES_REQUIRED_UNSPECIFIED = 0, PRIVILEGES_REQUIRED_NONE = 1, PRIVILEGES_REQUIRED_LOW = 2, PRIVILEGES_REQUIRED_HIGH = 3 }

	export enum CVSSv3Scope { SCOPE_UNSPECIFIED = 0, SCOPE_UNCHANGED = 1, SCOPE_CHANGED = 2 }

	export enum CVSSv3UserInteraction { USER_INTERACTION_UNSPECIFIED = 0, USER_INTERACTION_NONE = 1, USER_INTERACTION_REQUIRED = 2 }


	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequest {
	}

	/** The request message for Operations.CancelOperation. */
	export interface CancelOperationRequestFormProperties {
	}
	export function CreateCancelOperationRequestFormGroup() {
		return new FormGroup<CancelOperationRequestFormProperties>({
		});

	}


	/** Message for canceling a patch job. */
	export interface CancelPatchJobRequest {
	}

	/** Message for canceling a patch job. */
	export interface CancelPatchJobRequestFormProperties {
	}
	export function CreateCancelPatchJobRequestFormGroup() {
		return new FormGroup<CancelPatchJobRequestFormProperties>({
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


	/** A step that runs an executable for a PatchJob. */
	export interface ExecStep {

		/** Common configurations for an ExecStep. */
		linuxExecStepConfig?: ExecStepConfig;

		/** Common configurations for an ExecStep. */
		windowsExecStepConfig?: ExecStepConfig;
	}

	/** A step that runs an executable for a PatchJob. */
	export interface ExecStepFormProperties {
	}
	export function CreateExecStepFormGroup() {
		return new FormGroup<ExecStepFormProperties>({
		});

	}


	/** Common configurations for an ExecStep. */
	export interface ExecStepConfig {

		/** Defaults to [0]. A list of possible return values that the execution can return to indicate a success. */
		allowedSuccessCodes?: Array<number>;

		/** Cloud Storage object representation. */
		gcsObject?: GcsObject;

		/** The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)). */
		interpreter?: ExecStepConfigInterpreter | null;

		/** An absolute path to the executable on the VM. */
		localPath?: string | null;
	}

	/** Common configurations for an ExecStep. */
	export interface ExecStepConfigFormProperties {

		/** The script interpreter to use to run the script. If no interpreter is specified the script will be executed directly, which will likely only succeed for scripts with [shebang lines] (https://en.wikipedia.org/wiki/Shebang_\(Unix\)). */
		interpreter: FormControl<ExecStepConfigInterpreter | null | undefined>,

		/** An absolute path to the executable on the VM. */
		localPath: FormControl<string | null | undefined>,
	}
	export function CreateExecStepConfigFormGroup() {
		return new FormGroup<ExecStepConfigFormProperties>({
			interpreter: new FormControl<ExecStepConfigInterpreter | null | undefined>(undefined),
			localPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Cloud Storage object representation. */
	export interface GcsObject {

		/** Required. Bucket of the Cloud Storage object. */
		bucket?: string | null;

		/** Required. Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
		generationNumber?: string | null;

		/** Required. Name of the Cloud Storage object. */
		object?: string | null;
	}

	/** Cloud Storage object representation. */
	export interface GcsObjectFormProperties {

		/** Required. Bucket of the Cloud Storage object. */
		bucket: FormControl<string | null | undefined>,

		/** Required. Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
		generationNumber: FormControl<string | null | undefined>,

		/** Required. Name of the Cloud Storage object. */
		object: FormControl<string | null | undefined>,
	}
	export function CreateGcsObjectFormGroup() {
		return new FormGroup<GcsObjectFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generationNumber: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecStepConfigInterpreter { INTERPRETER_UNSPECIFIED = 0, NONE = 1, SHELL = 2, POWERSHELL = 3 }


	/** A request message to initiate patching across Compute Engine instances. */
	export interface ExecutePatchJobRequest {

		/** Description of the patch job. Length of the description is limited to 1024 characters. */
		description?: string | null;

		/** Display name for this patch job. This does not have to be unique. */
		displayName?: string | null;

		/** If this patch is a dry-run only, instances are contacted but will do nothing. */
		dryRun?: boolean | null;

		/** Duration of the patch job. After the duration ends, the patch job times out. */
		duration?: string | null;

		/** A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones. */
		instanceFilter?: PatchInstanceFilter;

		/** Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance. */
		patchConfig?: PatchConfig;

		/** Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs. */
		rollout?: PatchRollout;
	}

	/** A request message to initiate patching across Compute Engine instances. */
	export interface ExecutePatchJobRequestFormProperties {

		/** Description of the patch job. Length of the description is limited to 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Display name for this patch job. This does not have to be unique. */
		displayName: FormControl<string | null | undefined>,

		/** If this patch is a dry-run only, instances are contacted but will do nothing. */
		dryRun: FormControl<boolean | null | undefined>,

		/** Duration of the patch job. After the duration ends, the patch job times out. */
		duration: FormControl<string | null | undefined>,
	}
	export function CreateExecutePatchJobRequestFormGroup() {
		return new FormGroup<ExecutePatchJobRequestFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			dryRun: new FormControl<boolean | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones. */
	export interface PatchInstanceFilter {

		/** Target all VM instances in the project. If true, no other criteria is permitted. */
		all?: boolean | null;

		/** Targets VM instances matching ANY of these GroupLabels. This allows targeting of disparate groups of VM instances. */
		groupLabels?: Array<PatchInstanceFilterGroupLabel>;

		/** Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group VMs when targeting configs, for example prefix="prod-". */
		instanceNamePrefixes?: Array<string>;

		/** Targets any of the VM instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`, `projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]`, or `https://www.googleapis.com/compute/v1/projects/[PROJECT_ID]/zones/[ZONE]/instances/[INSTANCE_NAME]` */
		instances?: Array<string>;

		/** Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone. */
		zones?: Array<string>;
	}

	/** A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones. */
	export interface PatchInstanceFilterFormProperties {

		/** Target all VM instances in the project. If true, no other criteria is permitted. */
		all: FormControl<boolean | null | undefined>,
	}
	export function CreatePatchInstanceFilterFormGroup() {
		return new FormGroup<PatchInstanceFilterFormProperties>({
			all: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Targets a group of VM instances by using their [assigned labels](https://cloud.google.com/compute/docs/labeling-resources). Labels are key-value pairs. A `GroupLabel` is a combination of labels that is used to target VMs for a patch job. For example, a patch job can target VMs that have the following `GroupLabel`: `{"env":"test", "app":"web"}`. This means that the patch job is applied to VMs that have both the labels `env=test` and `app=web`. */
	export interface PatchInstanceFilterGroupLabel {

		/** Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. */
		labels?: {[id: string]: string };
	}

	/** Targets a group of VM instances by using their [assigned labels](https://cloud.google.com/compute/docs/labeling-resources). Labels are key-value pairs. A `GroupLabel` is a combination of labels that is used to target VMs for a patch job. For example, a patch job can target VMs that have the following `GroupLabel`: `{"env":"test", "app":"web"}`. This means that the patch job is applied to VMs that have both the labels `env=test` and `app=web`. */
	export interface PatchInstanceFilterGroupLabelFormProperties {

		/** Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreatePatchInstanceFilterGroupLabelFormGroup() {
		return new FormGroup<PatchInstanceFilterGroupLabelFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance. */
	export interface PatchConfig {

		/** Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed. */
		apt?: AptSettings;

		/** Googet patching is performed by running `googet update`. */
		goo?: GooSettings;

		/** Allows the patch job to run on Managed instance groups (MIGs). */
		migInstancesAllowed?: boolean | null;

		/** A step that runs an executable for a PatchJob. */
		postStep?: ExecStep;

		/** A step that runs an executable for a PatchJob. */
		preStep?: ExecStep;

		/** Post-patch reboot settings. */
		rebootConfig?: PatchConfigRebootConfig | null;

		/** Windows patching is performed using the Windows Update Agent. */
		windowsUpdate?: WindowsUpdateSettings;

		/** Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms. */
		yum?: YumSettings;

		/** Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual. */
		zypper?: ZypperSettings;
	}

	/** Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance. */
	export interface PatchConfigFormProperties {

		/** Allows the patch job to run on Managed instance groups (MIGs). */
		migInstancesAllowed: FormControl<boolean | null | undefined>,

		/** Post-patch reboot settings. */
		rebootConfig: FormControl<PatchConfigRebootConfig | null | undefined>,
	}
	export function CreatePatchConfigFormGroup() {
		return new FormGroup<PatchConfigFormProperties>({
			migInstancesAllowed: new FormControl<boolean | null | undefined>(undefined),
			rebootConfig: new FormControl<PatchConfigRebootConfig | null | undefined>(undefined),
		});

	}


	/** Googet patching is performed by running `googet update`. */
	export interface GooSettings {
	}

	/** Googet patching is performed by running `googet update`. */
	export interface GooSettingsFormProperties {
	}
	export function CreateGooSettingsFormGroup() {
		return new FormGroup<GooSettingsFormProperties>({
		});

	}

	export enum PatchConfigRebootConfig { REBOOT_CONFIG_UNSPECIFIED = 0, DEFAULT = 1, ALWAYS = 2, NEVER = 3 }


	/** Windows patching is performed using the Windows Update Agent. */
	export interface WindowsUpdateSettings {

		/** Only apply updates of these windows update classifications. If empty, all updates are applied. */
		classifications?: Array<string>;

		/** List of KBs to exclude from update. */
		excludes?: Array<string>;

		/** An exclusive list of kbs to be updated. These are the only patches that will be updated. This field must not be used with other patch configurations. */
		exclusivePatches?: Array<string>;
	}

	/** Windows patching is performed using the Windows Update Agent. */
	export interface WindowsUpdateSettingsFormProperties {
	}
	export function CreateWindowsUpdateSettingsFormGroup() {
		return new FormGroup<WindowsUpdateSettingsFormProperties>({
		});

	}


	/** Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms. */
	export interface YumSettings {

		/** List of packages to exclude from update. These packages are excluded by using the yum `--exclude` flag. */
		excludes?: Array<string>;

		/** An exclusive list of packages to be updated. These are the only packages that will be updated. If these packages are not installed, they will be ignored. This field must not be specified with any other patch configuration fields. */
		exclusivePackages?: Array<string>;

		/** Will cause patch to run `yum update-minimal` instead. */
		minimal?: boolean | null;

		/** Adds the `--security` flag to `yum update`. Not supported on all platforms. */
		security?: boolean | null;
	}

	/** Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms. */
	export interface YumSettingsFormProperties {

		/** Will cause patch to run `yum update-minimal` instead. */
		minimal: FormControl<boolean | null | undefined>,

		/** Adds the `--security` flag to `yum update`. Not supported on all platforms. */
		security: FormControl<boolean | null | undefined>,
	}
	export function CreateYumSettingsFormGroup() {
		return new FormGroup<YumSettingsFormProperties>({
			minimal: new FormControl<boolean | null | undefined>(undefined),
			security: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual. */
	export interface ZypperSettings {

		/** Install only patches with these categories. Common categories include security, recommended, and feature. */
		categories?: Array<string>;

		/** List of patches to exclude from update. */
		excludes?: Array<string>;

		/** An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command. This field must not be used with any other patch configuration fields. */
		exclusivePatches?: Array<string>;

		/** Install only patches with these severities. Common severities include critical, important, moderate, and low. */
		severities?: Array<string>;

		/** Adds the `--with-optional` flag to `zypper patch`. */
		withOptional?: boolean | null;

		/** Adds the `--with-update` flag, to `zypper patch`. */
		withUpdate?: boolean | null;
	}

	/** Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual. */
	export interface ZypperSettingsFormProperties {

		/** Adds the `--with-optional` flag to `zypper patch`. */
		withOptional: FormControl<boolean | null | undefined>,

		/** Adds the `--with-update` flag, to `zypper patch`. */
		withUpdate: FormControl<boolean | null | undefined>,
	}
	export function CreateZypperSettingsFormGroup() {
		return new FormGroup<ZypperSettingsFormProperties>({
			withOptional: new FormControl<boolean | null | undefined>(undefined),
			withUpdate: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs. */
	export interface PatchRollout {

		/** Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value. */
		disruptionBudget?: FixedOrPercent;

		/** Mode of the patch rollout. */
		mode?: PatchRolloutMode | null;
	}

	/** Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs. */
	export interface PatchRolloutFormProperties {

		/** Mode of the patch rollout. */
		mode: FormControl<PatchRolloutMode | null | undefined>,
	}
	export function CreatePatchRolloutFormGroup() {
		return new FormGroup<PatchRolloutFormProperties>({
			mode: new FormControl<PatchRolloutMode | null | undefined>(undefined),
		});

	}


	/** Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value. */
	export interface FixedOrPercent {

		/** Specifies a fixed value. */
		fixed?: number | null;

		/** Specifies the relative value defined as a percentage, which will be multiplied by a reference value. */
		percent?: number | null;
	}

	/** Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value. */
	export interface FixedOrPercentFormProperties {

		/** Specifies a fixed value. */
		fixed: FormControl<number | null | undefined>,

		/** Specifies the relative value defined as a percentage, which will be multiplied by a reference value. */
		percent: FormControl<number | null | undefined>,
	}
	export function CreateFixedOrPercentFormGroup() {
		return new FormGroup<FixedOrPercentFormProperties>({
			fixed: new FormControl<number | null | undefined>(undefined),
			percent: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum PatchRolloutMode { MODE_UNSPECIFIED = 0, ZONE_BY_ZONE = 1, CONCURRENT_ZONES = 2 }


	/** OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations. */
	export interface GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadata {

		/** The OS policy assignment API method. */
		apiMethod?: GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataApiMethod | null;

		/** Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}` */
		osPolicyAssignment?: string | null;

		/** Rollout start time */
		rolloutStartTime?: string | null;

		/** State of the rollout */
		rolloutState?: GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState | null;

		/** Rollout update time */
		rolloutUpdateTime?: string | null;
	}

	/** OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations. */
	export interface GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataFormProperties {

		/** The OS policy assignment API method. */
		apiMethod: FormControl<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataApiMethod | null | undefined>,

		/** Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}` */
		osPolicyAssignment: FormControl<string | null | undefined>,

		/** Rollout start time */
		rolloutStartTime: FormControl<string | null | undefined>,

		/** State of the rollout */
		rolloutState: FormControl<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState | null | undefined>,

		/** Rollout update time */
		rolloutUpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateGoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataFormGroup() {
		return new FormGroup<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataFormProperties>({
			apiMethod: new FormControl<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataApiMethod | null | undefined>(undefined),
			osPolicyAssignment: new FormControl<string | null | undefined>(undefined),
			rolloutStartTime: new FormControl<string | null | undefined>(undefined),
			rolloutState: new FormControl<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState | null | undefined>(undefined),
			rolloutUpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataApiMethod { API_METHOD_UNSPECIFIED = 0, CREATE = 1, UPDATE = 2, DELETE = 3 }

	export enum GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState { ROLLOUT_STATE_UNSPECIFIED = 0, IN_PROGRESS = 1, CANCELLING = 2, CANCELLED = 3, SUCCEEDED = 4 }


	/** This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected). */
	export interface Inventory {

		/** Inventory items related to the VM keyed by an opaque unique identifier for each inventory item. The identifier is unique to each distinct and addressable inventory item and will change, when there is a new package version. */
		items?: {[id: string]: InventoryItem };

		/** Output only. The `Inventory` API resource name. Format: `projects/{project_number}/locations/{location}/instances/{instance_id}/inventory` */
		name?: string | null;

		/** Operating system information for the VM. */
		osInfo?: InventoryOsInfo;

		/** Output only. Timestamp of the last reported inventory for the VM. */
		updateTime?: string | null;
	}

	/** This API resource represents the available inventory data for a Compute Engine virtual machine (VM) instance at a given point in time. You can use this API resource to determine the inventory data of your VM. For more information, see [Information provided by OS inventory management](https://cloud.google.com/compute/docs/instances/os-inventory-management#data-collected). */
	export interface InventoryFormProperties {

		/** Inventory items related to the VM keyed by an opaque unique identifier for each inventory item. The identifier is unique to each distinct and addressable inventory item and will change, when there is a new package version. */
		items: FormControl<{[id: string]: InventoryItem } | null | undefined>,

		/** Output only. The `Inventory` API resource name. Format: `projects/{project_number}/locations/{location}/instances/{instance_id}/inventory` */
		name: FormControl<string | null | undefined>,

		/** Output only. Timestamp of the last reported inventory for the VM. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInventoryFormGroup() {
		return new FormGroup<InventoryFormProperties>({
			items: new FormControl<{[id: string]: InventoryItem } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A single piece of inventory on a VM. */
	export interface InventoryItem {

		/** Software package information of the operating system. */
		availablePackage?: InventorySoftwarePackage;

		/** When this inventory item was first detected. */
		createTime?: string | null;

		/** Identifier for this item, unique across items for this VM. */
		id?: string | null;

		/** Software package information of the operating system. */
		installedPackage?: InventorySoftwarePackage;

		/** The origin of this inventory item. */
		originType?: InventoryItemOriginType | null;

		/** The specific type of inventory, correlating to its specific details. */
		type?: InventoryItemType | null;

		/** When this inventory item was last modified. */
		updateTime?: string | null;
	}

	/** A single piece of inventory on a VM. */
	export interface InventoryItemFormProperties {

		/** When this inventory item was first detected. */
		createTime: FormControl<string | null | undefined>,

		/** Identifier for this item, unique across items for this VM. */
		id: FormControl<string | null | undefined>,

		/** The origin of this inventory item. */
		originType: FormControl<InventoryItemOriginType | null | undefined>,

		/** The specific type of inventory, correlating to its specific details. */
		type: FormControl<InventoryItemType | null | undefined>,

		/** When this inventory item was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateInventoryItemFormGroup() {
		return new FormGroup<InventoryItemFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			originType: new FormControl<InventoryItemOriginType | null | undefined>(undefined),
			type: new FormControl<InventoryItemType | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Software package information of the operating system. */
	export interface InventorySoftwarePackage {

		/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
		aptPackage?: InventoryVersionedPackage;

		/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
		cosPackage?: InventoryVersionedPackage;

		/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
		googetPackage?: InventoryVersionedPackage;

		/** Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering */
		qfePackage?: InventoryWindowsQuickFixEngineeringPackage;

		/** Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key */
		windowsApplication?: InventoryWindowsApplication;

		/** Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated. */
		wuaPackage?: InventoryWindowsUpdatePackage;

		/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
		yumPackage?: InventoryVersionedPackage;

		/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
		zypperPackage?: InventoryVersionedPackage;

		/** Details related to a Zypper Patch. */
		zypperPatch?: InventoryZypperPatch;
	}

	/** Software package information of the operating system. */
	export interface InventorySoftwarePackageFormProperties {
	}
	export function CreateInventorySoftwarePackageFormGroup() {
		return new FormGroup<InventorySoftwarePackageFormProperties>({
		});

	}


	/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
	export interface InventoryVersionedPackage {

		/** The system architecture this package is intended for. */
		architecture?: string | null;

		/** The name of the package. */
		packageName?: string | null;

		/** The version of the package. */
		version?: string | null;
	}

	/** Information related to the a standard versioned package. This includes package info for APT, Yum, Zypper, and Googet package managers. */
	export interface InventoryVersionedPackageFormProperties {

		/** The system architecture this package is intended for. */
		architecture: FormControl<string | null | undefined>,

		/** The name of the package. */
		packageName: FormControl<string | null | undefined>,

		/** The version of the package. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateInventoryVersionedPackageFormGroup() {
		return new FormGroup<InventoryVersionedPackageFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			packageName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering */
	export interface InventoryWindowsQuickFixEngineeringPackage {

		/** A short textual description of the QFE update. */
		caption?: string | null;

		/** A textual description of the QFE update. */
		description?: string | null;

		/** Unique identifier associated with a particular QFE update. */
		hotFixId?: string | null;

		/** Date that the QFE update was installed. Mapped from installed_on field. */
		installTime?: string | null;
	}

	/** Information related to a Quick Fix Engineering package. Fields are taken from Windows QuickFixEngineering Interface and match the source names: https://docs.microsoft.com/en-us/windows/win32/cimwin32prov/win32-quickfixengineering */
	export interface InventoryWindowsQuickFixEngineeringPackageFormProperties {

		/** A short textual description of the QFE update. */
		caption: FormControl<string | null | undefined>,

		/** A textual description of the QFE update. */
		description: FormControl<string | null | undefined>,

		/** Unique identifier associated with a particular QFE update. */
		hotFixId: FormControl<string | null | undefined>,

		/** Date that the QFE update was installed. Mapped from installed_on field. */
		installTime: FormControl<string | null | undefined>,
	}
	export function CreateInventoryWindowsQuickFixEngineeringPackageFormGroup() {
		return new FormGroup<InventoryWindowsQuickFixEngineeringPackageFormProperties>({
			caption: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			hotFixId: new FormControl<string | null | undefined>(undefined),
			installTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key */
	export interface InventoryWindowsApplication {

		/** The name of the application or product. */
		displayName?: string | null;

		/** The version of the product or application in string format. */
		displayVersion?: string | null;

		/** The internet address for technical support. */
		helpLink?: string | null;

		/** Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp */
		installDate?: Date;

		/** The name of the manufacturer for the product or application. */
		publisher?: string | null;
	}

	/** Contains information about a Windows application that is retrieved from the Windows Registry. For more information about these fields, see: https://docs.microsoft.com/en-us/windows/win32/msi/uninstall-registry-key */
	export interface InventoryWindowsApplicationFormProperties {

		/** The name of the application or product. */
		displayName: FormControl<string | null | undefined>,

		/** The version of the product or application in string format. */
		displayVersion: FormControl<string | null | undefined>,

		/** The internet address for technical support. */
		helpLink: FormControl<string | null | undefined>,

		/** The name of the manufacturer for the product or application. */
		publisher: FormControl<string | null | undefined>,
	}
	export function CreateInventoryWindowsApplicationFormGroup() {
		return new FormGroup<InventoryWindowsApplicationFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			displayVersion: new FormControl<string | null | undefined>(undefined),
			helpLink: new FormControl<string | null | undefined>(undefined),
			publisher: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated. */
	export interface InventoryWindowsUpdatePackage {

		/** The categories that are associated with this update package. */
		categories?: Array<InventoryWindowsUpdatePackageWindowsUpdateCategory>;

		/** The localized description of the update package. */
		description?: string | null;

		/** A collection of Microsoft Knowledge Base article IDs that are associated with the update package. */
		kbArticleIds?: Array<string>;

		/** The last published date of the update, in (UTC) date and time. */
		lastDeploymentChangeTime?: string | null;

		/** A collection of URLs that provide more information about the update package. */
		moreInfoUrls?: Array<string>;

		/** The revision number of this update package. */
		revisionNumber?: number | null;

		/** A hyperlink to the language-specific support information for the update. */
		supportUrl?: string | null;

		/** The localized title of the update package. */
		title?: string | null;

		/** Gets the identifier of an update package. Stays the same across revisions. */
		updateId?: string | null;
	}

	/** Details related to a Windows Update package. Field data and names are taken from Windows Update API IUpdate Interface: https://docs.microsoft.com/en-us/windows/win32/api/_wua/ Descriptive fields like title, and description are localized based on the locale of the VM being updated. */
	export interface InventoryWindowsUpdatePackageFormProperties {

		/** The localized description of the update package. */
		description: FormControl<string | null | undefined>,

		/** The last published date of the update, in (UTC) date and time. */
		lastDeploymentChangeTime: FormControl<string | null | undefined>,

		/** The revision number of this update package. */
		revisionNumber: FormControl<number | null | undefined>,

		/** A hyperlink to the language-specific support information for the update. */
		supportUrl: FormControl<string | null | undefined>,

		/** The localized title of the update package. */
		title: FormControl<string | null | undefined>,

		/** Gets the identifier of an update package. Stays the same across revisions. */
		updateId: FormControl<string | null | undefined>,
	}
	export function CreateInventoryWindowsUpdatePackageFormGroup() {
		return new FormGroup<InventoryWindowsUpdatePackageFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			lastDeploymentChangeTime: new FormControl<string | null | undefined>(undefined),
			revisionNumber: new FormControl<number | null | undefined>(undefined),
			supportUrl: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			updateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Categories specified by the Windows Update. */
	export interface InventoryWindowsUpdatePackageWindowsUpdateCategory {

		/** The identifier of the windows update category. */
		id?: string | null;

		/** The name of the windows update category. */
		name?: string | null;
	}

	/** Categories specified by the Windows Update. */
	export interface InventoryWindowsUpdatePackageWindowsUpdateCategoryFormProperties {

		/** The identifier of the windows update category. */
		id: FormControl<string | null | undefined>,

		/** The name of the windows update category. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateInventoryWindowsUpdatePackageWindowsUpdateCategoryFormGroup() {
		return new FormGroup<InventoryWindowsUpdatePackageWindowsUpdateCategoryFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Details related to a Zypper Patch. */
	export interface InventoryZypperPatch {

		/** The category of the patch. */
		category?: string | null;

		/** The name of the patch. */
		patchName?: string | null;

		/** The severity specified for this patch */
		severity?: string | null;

		/** Any summary information provided about this patch. */
		summary?: string | null;
	}

	/** Details related to a Zypper Patch. */
	export interface InventoryZypperPatchFormProperties {

		/** The category of the patch. */
		category: FormControl<string | null | undefined>,

		/** The name of the patch. */
		patchName: FormControl<string | null | undefined>,

		/** The severity specified for this patch */
		severity: FormControl<string | null | undefined>,

		/** Any summary information provided about this patch. */
		summary: FormControl<string | null | undefined>,
	}
	export function CreateInventoryZypperPatchFormGroup() {
		return new FormGroup<InventoryZypperPatchFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			patchName: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
			summary: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum InventoryItemOriginType { ORIGIN_TYPE_UNSPECIFIED = 0, INVENTORY_REPORT = 1 }

	export enum InventoryItemType { TYPE_UNSPECIFIED = 0, INSTALLED_PACKAGE = 1, AVAILABLE_PACKAGE = 2 }


	/** Operating system information for the VM. */
	export interface InventoryOsInfo {

		/** The system architecture of the operating system. */
		architecture?: string | null;

		/** The VM hostname. */
		hostname?: string | null;

		/** The kernel release of the operating system. */
		kernelRelease?: string | null;

		/** The kernel version of the operating system. */
		kernelVersion?: string | null;

		/** The operating system long name. For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019 Datacenter'. */
		longName?: string | null;

		/** The current version of the OS Config agent running on the VM. */
		osconfigAgentVersion?: string | null;

		/** The operating system short name. For example, 'windows' or 'debian'. */
		shortName?: string | null;

		/** The version of the operating system. */
		version?: string | null;
	}

	/** Operating system information for the VM. */
	export interface InventoryOsInfoFormProperties {

		/** The system architecture of the operating system. */
		architecture: FormControl<string | null | undefined>,

		/** The VM hostname. */
		hostname: FormControl<string | null | undefined>,

		/** The kernel release of the operating system. */
		kernelRelease: FormControl<string | null | undefined>,

		/** The kernel version of the operating system. */
		kernelVersion: FormControl<string | null | undefined>,

		/** The operating system long name. For example 'Debian GNU/Linux 9' or 'Microsoft Window Server 2019 Datacenter'. */
		longName: FormControl<string | null | undefined>,

		/** The current version of the OS Config agent running on the VM. */
		osconfigAgentVersion: FormControl<string | null | undefined>,

		/** The operating system short name. For example, 'windows' or 'debian'. */
		shortName: FormControl<string | null | undefined>,

		/** The version of the operating system. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateInventoryOsInfoFormGroup() {
		return new FormGroup<InventoryOsInfoFormProperties>({
			architecture: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			kernelRelease: new FormControl<string | null | undefined>(undefined),
			kernelVersion: new FormControl<string | null | undefined>(undefined),
			longName: new FormControl<string | null | undefined>(undefined),
			osconfigAgentVersion: new FormControl<string | null | undefined>(undefined),
			shortName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for listing inventory data for all VMs in a specified location. */
	export interface ListInventoriesResponse {

		/** List of inventory objects. */
		inventories?: Array<Inventory>;

		/** The pagination token to retrieve the next page of inventory objects. */
		nextPageToken?: string | null;
	}

	/** A response message for listing inventory data for all VMs in a specified location. */
	export interface ListInventoriesResponseFormProperties {

		/** The pagination token to retrieve the next page of inventory objects. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListInventoriesResponseFormGroup() {
		return new FormGroup<ListInventoriesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for listing OS Policy assignment reports including the page of results and page token. */
	export interface ListOSPolicyAssignmentReportsResponse {

		/** The pagination token to retrieve the next page of OS policy assignment report objects. */
		nextPageToken?: string | null;

		/** List of OS policy assignment reports. */
		osPolicyAssignmentReports?: Array<OSPolicyAssignmentReport>;
	}

	/** A response message for listing OS Policy assignment reports including the page of results and page token. */
	export interface ListOSPolicyAssignmentReportsResponseFormProperties {

		/** The pagination token to retrieve the next page of OS policy assignment report objects. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOSPolicyAssignmentReportsResponseFormGroup() {
		return new FormGroup<ListOSPolicyAssignmentReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A report of the OS policy assignment status for a given instance. */
	export interface OSPolicyAssignmentReport {

		/** The Compute Engine VM instance name. */
		instance?: string | null;

		/** Unique identifier of the last attempted run to apply the OS policies associated with this assignment on the VM. This ID is logged by the OS Config agent while applying the OS policies associated with this assignment on the VM. NOTE: If the service is unable to successfully connect to the agent for this run, then this id will not be available in the agent logs. */
		lastRunId?: string | null;

		/** The `OSPolicyAssignmentReport` API resource name. Format: `projects/{project_number}/locations/{location}/instances/{instance_id}/osPolicyAssignments/{os_policy_assignment_id}/report` */
		name?: string | null;

		/** Reference to the `OSPolicyAssignment` API resource that the `OSPolicy` belongs to. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}` */
		osPolicyAssignment?: string | null;

		/** Compliance data for each `OSPolicy` that is applied to the VM. */
		osPolicyCompliances?: Array<OSPolicyAssignmentReportOSPolicyCompliance>;

		/** Timestamp for when the report was last generated. */
		updateTime?: string | null;
	}

	/** A report of the OS policy assignment status for a given instance. */
	export interface OSPolicyAssignmentReportFormProperties {

		/** The Compute Engine VM instance name. */
		instance: FormControl<string | null | undefined>,

		/** Unique identifier of the last attempted run to apply the OS policies associated with this assignment on the VM. This ID is logged by the OS Config agent while applying the OS policies associated with this assignment on the VM. NOTE: If the service is unable to successfully connect to the agent for this run, then this id will not be available in the agent logs. */
		lastRunId: FormControl<string | null | undefined>,

		/** The `OSPolicyAssignmentReport` API resource name. Format: `projects/{project_number}/locations/{location}/instances/{instance_id}/osPolicyAssignments/{os_policy_assignment_id}/report` */
		name: FormControl<string | null | undefined>,

		/** Reference to the `OSPolicyAssignment` API resource that the `OSPolicy` belongs to. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}` */
		osPolicyAssignment: FormControl<string | null | undefined>,

		/** Timestamp for when the report was last generated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyAssignmentReportFormGroup() {
		return new FormGroup<OSPolicyAssignmentReportFormProperties>({
			instance: new FormControl<string | null | undefined>(undefined),
			lastRunId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			osPolicyAssignment: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Compliance data for an OS policy */
	export interface OSPolicyAssignmentReportOSPolicyCompliance {

		/** The compliance state of the OS policy. */
		complianceState?: OSPolicyAssignmentReportOSPolicyComplianceComplianceState | null;

		/** The reason for the OS policy to be in an unknown compliance state. This field is always populated when `compliance_state` is `UNKNOWN`. If populated, the field can contain one of the following values: * `vm-not-running`: The VM was not running. * `os-policies-not-supported-by-agent`: The version of the OS Config agent running on the VM does not support running OS policies. * `no-agent-detected`: The OS Config agent is not detected for the VM. * `resource-execution-errors`: The OS Config agent encountered errors while executing one or more resources in the policy. See `os_policy_resource_compliances` for details. * `task-timeout`: The task sent to the agent to apply the policy timed out. * `unexpected-agent-state`: The OS Config agent did not report the final status of the task that attempted to apply the policy. Instead, the agent unexpectedly started working on a different task. This mostly happens when the agent or VM unexpectedly restarts while applying OS policies. * `internal-service-errors`: Internal service errors were encountered while attempting to apply the policy. */
		complianceStateReason?: string | null;

		/** The OS policy id */
		osPolicyId?: string | null;

		/** Compliance data for each resource within the policy that is applied to the VM. */
		osPolicyResourceCompliances?: Array<OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance>;
	}

	/** Compliance data for an OS policy */
	export interface OSPolicyAssignmentReportOSPolicyComplianceFormProperties {

		/** The compliance state of the OS policy. */
		complianceState: FormControl<OSPolicyAssignmentReportOSPolicyComplianceComplianceState | null | undefined>,

		/** The reason for the OS policy to be in an unknown compliance state. This field is always populated when `compliance_state` is `UNKNOWN`. If populated, the field can contain one of the following values: * `vm-not-running`: The VM was not running. * `os-policies-not-supported-by-agent`: The version of the OS Config agent running on the VM does not support running OS policies. * `no-agent-detected`: The OS Config agent is not detected for the VM. * `resource-execution-errors`: The OS Config agent encountered errors while executing one or more resources in the policy. See `os_policy_resource_compliances` for details. * `task-timeout`: The task sent to the agent to apply the policy timed out. * `unexpected-agent-state`: The OS Config agent did not report the final status of the task that attempted to apply the policy. Instead, the agent unexpectedly started working on a different task. This mostly happens when the agent or VM unexpectedly restarts while applying OS policies. * `internal-service-errors`: Internal service errors were encountered while attempting to apply the policy. */
		complianceStateReason: FormControl<string | null | undefined>,

		/** The OS policy id */
		osPolicyId: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyAssignmentReportOSPolicyComplianceFormGroup() {
		return new FormGroup<OSPolicyAssignmentReportOSPolicyComplianceFormProperties>({
			complianceState: new FormControl<OSPolicyAssignmentReportOSPolicyComplianceComplianceState | null | undefined>(undefined),
			complianceStateReason: new FormControl<string | null | undefined>(undefined),
			osPolicyId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OSPolicyAssignmentReportOSPolicyComplianceComplianceState { UNKNOWN = 0, COMPLIANT = 1, NON_COMPLIANT = 2 }


	/** Compliance data for an OS policy resource. */
	export interface OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceCompliance {

		/** The compliance state of the resource. */
		complianceState?: OSPolicyAssignmentReportOSPolicyComplianceComplianceState | null;

		/** A reason for the resource to be in the given compliance state. This field is always populated when `compliance_state` is `UNKNOWN`. The following values are supported when `compliance_state == UNKNOWN` * `execution-errors`: Errors were encountered by the agent while executing the resource and the compliance state couldn't be determined. * `execution-skipped-by-agent`: Resource execution was skipped by the agent because errors were encountered while executing prior resources in the OS policy. * `os-policy-execution-attempt-failed`: The execution of the OS policy containing this resource failed and the compliance state couldn't be determined. */
		complianceStateReason?: string | null;

		/** Ordered list of configuration completed by the agent for the OS policy resource. */
		configSteps?: Array<OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep>;

		/** ExecResource specific output. */
		execResourceOutput?: OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutput;

		/** The ID of the OS policy resource. */
		osPolicyResourceId?: string | null;
	}

	/** Compliance data for an OS policy resource. */
	export interface OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceFormProperties {

		/** The compliance state of the resource. */
		complianceState: FormControl<OSPolicyAssignmentReportOSPolicyComplianceComplianceState | null | undefined>,

		/** A reason for the resource to be in the given compliance state. This field is always populated when `compliance_state` is `UNKNOWN`. The following values are supported when `compliance_state == UNKNOWN` * `execution-errors`: Errors were encountered by the agent while executing the resource and the compliance state couldn't be determined. * `execution-skipped-by-agent`: Resource execution was skipped by the agent because errors were encountered while executing prior resources in the OS policy. * `os-policy-execution-attempt-failed`: The execution of the OS policy containing this resource failed and the compliance state couldn't be determined. */
		complianceStateReason: FormControl<string | null | undefined>,

		/** The ID of the OS policy resource. */
		osPolicyResourceId: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceFormGroup() {
		return new FormGroup<OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceFormProperties>({
			complianceState: new FormControl<OSPolicyAssignmentReportOSPolicyComplianceComplianceState | null | undefined>(undefined),
			complianceStateReason: new FormControl<string | null | undefined>(undefined),
			osPolicyResourceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Step performed by the OS Config agent for configuring an `OSPolicy` resource to its desired state. */
	export interface OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStep {

		/** An error message recorded during the execution of this step. Only populated if errors were encountered during this step execution. */
		errorMessage?: string | null;

		/** Configuration step type. */
		type?: OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepType | null;
	}

	/** Step performed by the OS Config agent for configuring an `OSPolicy` resource to its desired state. */
	export interface OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepFormProperties {

		/** An error message recorded during the execution of this step. Only populated if errors were encountered during this step execution. */
		errorMessage: FormControl<string | null | undefined>,

		/** Configuration step type. */
		type: FormControl<OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepType | null | undefined>,
	}
	export function CreateOSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepFormGroup() {
		return new FormGroup<OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepFormProperties>({
			errorMessage: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepType | null | undefined>(undefined),
		});

	}

	export enum OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceOSPolicyResourceConfigStepType { TYPE_UNSPECIFIED = 0, VALIDATION = 1, DESIRED_STATE_CHECK = 2, DESIRED_STATE_ENFORCEMENT = 3, DESIRED_STATE_CHECK_POST_ENFORCEMENT = 4 }


	/** ExecResource specific output. */
	export interface OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutput {

		/** Output from enforcement phase output file (if run). Output size is limited to 100K bytes. */
		enforcementOutput?: string | null;
	}

	/** ExecResource specific output. */
	export interface OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutputFormProperties {

		/** Output from enforcement phase output file (if run). Output size is limited to 100K bytes. */
		enforcementOutput: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutputFormGroup() {
		return new FormGroup<OSPolicyAssignmentReportOSPolicyComplianceOSPolicyResourceComplianceExecResourceOutputFormProperties>({
			enforcementOutput: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for listing all revisions for a OS policy assignment. */
	export interface ListOSPolicyAssignmentRevisionsResponse {

		/** The pagination token to retrieve the next page of OS policy assignment revisions. */
		nextPageToken?: string | null;

		/** The OS policy assignment revisions */
		osPolicyAssignments?: Array<OSPolicyAssignment>;
	}

	/** A response message for listing all revisions for a OS policy assignment. */
	export interface ListOSPolicyAssignmentRevisionsResponseFormProperties {

		/** The pagination token to retrieve the next page of OS policy assignment revisions. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOSPolicyAssignmentRevisionsResponseFormGroup() {
		return new FormGroup<ListOSPolicyAssignmentRevisionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies). */
	export interface OSPolicyAssignment {

		/** Output only. Indicates that this revision has been successfully rolled out in this zone and new VMs will be assigned OS policies from this revision. For a given OS policy assignment, there is only one revision with a value of `true` for this field. */
		baseline?: boolean | null;

		/** Output only. Indicates that this revision deletes the OS policy assignment. */
		deleted?: boolean | null;

		/** OS policy assignment description. Length of the description is limited to 1024 characters. */
		description?: string | null;

		/** The etag for this OS policy assignment. If this is provided on update, it must match the server's etag. */
		etag?: string | null;

		/** Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them. */
		instanceFilter?: OSPolicyAssignmentInstanceFilter;

		/** Resource name. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id}` This field is ignored when you create an OS policy assignment. */
		name?: string | null;

		/** Required. List of OS policies to be applied to the VMs. */
		osPolicies?: Array<OSPolicy>;

		/** Output only. Indicates that reconciliation is in progress for the revision. This value is `true` when the `rollout_state` is one of: * IN_PROGRESS * CANCELLING */
		reconciling?: boolean | null;

		/** Output only. The timestamp that the revision was created. */
		revisionCreateTime?: string | null;

		/** Output only. The assignment revision ID A new revision is committed whenever a rollout is triggered for a OS policy assignment */
		revisionId?: string | null;

		/** Message to configure the rollout at the zonal level for the OS policy assignment. */
		rollout?: OSPolicyAssignmentRollout;

		/** Output only. OS policy assignment rollout state */
		rolloutState?: GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState | null;

		/** Output only. Server generated unique id for the OS policy assignment resource. */
		uid?: string | null;
	}

	/** OS policy assignment is an API resource that is used to apply a set of OS policies to a dynamically targeted group of Compute Engine VM instances. An OS policy is used to define the desired state configuration for a Compute Engine VM instance through a set of configuration resources that provide capabilities such as installing or removing software packages, or executing a script. For more information about the OS policy resource definitions and examples, see [OS policy and OS policy assignment](https://cloud.google.com/compute/docs/os-configuration-management/working-with-os-policies). */
	export interface OSPolicyAssignmentFormProperties {

		/** Output only. Indicates that this revision has been successfully rolled out in this zone and new VMs will be assigned OS policies from this revision. For a given OS policy assignment, there is only one revision with a value of `true` for this field. */
		baseline: FormControl<boolean | null | undefined>,

		/** Output only. Indicates that this revision deletes the OS policy assignment. */
		deleted: FormControl<boolean | null | undefined>,

		/** OS policy assignment description. Length of the description is limited to 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** The etag for this OS policy assignment. If this is provided on update, it must match the server's etag. */
		etag: FormControl<string | null | undefined>,

		/** Resource name. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id}` This field is ignored when you create an OS policy assignment. */
		name: FormControl<string | null | undefined>,

		/** Output only. Indicates that reconciliation is in progress for the revision. This value is `true` when the `rollout_state` is one of: * IN_PROGRESS * CANCELLING */
		reconciling: FormControl<boolean | null | undefined>,

		/** Output only. The timestamp that the revision was created. */
		revisionCreateTime: FormControl<string | null | undefined>,

		/** Output only. The assignment revision ID A new revision is committed whenever a rollout is triggered for a OS policy assignment */
		revisionId: FormControl<string | null | undefined>,

		/** Output only. OS policy assignment rollout state */
		rolloutState: FormControl<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState | null | undefined>,

		/** Output only. Server generated unique id for the OS policy assignment resource. */
		uid: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyAssignmentFormGroup() {
		return new FormGroup<OSPolicyAssignmentFormProperties>({
			baseline: new FormControl<boolean | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reconciling: new FormControl<boolean | null | undefined>(undefined),
			revisionCreateTime: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
			rolloutState: new FormControl<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them. */
	export interface OSPolicyAssignmentInstanceFilter {

		/** Target all VMs in the project. If true, no other criteria is permitted. */
		all?: boolean | null;

		/** List of label sets used for VM exclusion. If the list has more than one label set, the VM is excluded if any of the label sets are applicable for the VM. */
		exclusionLabels?: Array<OSPolicyAssignmentLabelSet>;

		/** List of label sets used for VM inclusion. If the list has more than one `LabelSet`, the VM is included if any of the label sets are applicable for the VM. */
		inclusionLabels?: Array<OSPolicyAssignmentLabelSet>;

		/** List of inventories to select VMs. A VM is selected if its inventory data matches at least one of the following inventories. */
		inventories?: Array<OSPolicyAssignmentInstanceFilterInventory>;
	}

	/** Filters to select target VMs for an assignment. If more than one filter criteria is specified below, a VM will be selected if and only if it satisfies all of them. */
	export interface OSPolicyAssignmentInstanceFilterFormProperties {

		/** Target all VMs in the project. If true, no other criteria is permitted. */
		all: FormControl<boolean | null | undefined>,
	}
	export function CreateOSPolicyAssignmentInstanceFilterFormGroup() {
		return new FormGroup<OSPolicyAssignmentInstanceFilterFormProperties>({
			all: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Message representing label set. * A label is a key value pair set for a VM. * A LabelSet is a set of labels. * Labels within a LabelSet are ANDed. In other words, a LabelSet is applicable for a VM only if it matches all the labels in the LabelSet. * Example: A LabelSet with 2 labels: `env=prod` and `type=webserver` will only be applicable for those VMs with both labels present. */
	export interface OSPolicyAssignmentLabelSet {

		/** Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected. */
		labels?: {[id: string]: string };
	}

	/** Message representing label set. * A label is a key value pair set for a VM. * A LabelSet is a set of labels. * Labels within a LabelSet are ANDed. In other words, a LabelSet is applicable for a VM only if it matches all the labels in the LabelSet. * Example: A LabelSet with 2 labels: `env=prod` and `type=webserver` will only be applicable for those VMs with both labels present. */
	export interface OSPolicyAssignmentLabelSetFormProperties {

		/** Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateOSPolicyAssignmentLabelSetFormGroup() {
		return new FormGroup<OSPolicyAssignmentLabelSetFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** VM inventory details. */
	export interface OSPolicyAssignmentInstanceFilterInventory {

		/** Required. The OS short name */
		osShortName?: string | null;

		/** The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions. */
		osVersion?: string | null;
	}

	/** VM inventory details. */
	export interface OSPolicyAssignmentInstanceFilterInventoryFormProperties {

		/** Required. The OS short name */
		osShortName: FormControl<string | null | undefined>,

		/** The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions. */
		osVersion: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyAssignmentInstanceFilterInventoryFormGroup() {
		return new FormGroup<OSPolicyAssignmentInstanceFilterInventoryFormProperties>({
			osShortName: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An OS policy defines the desired state configuration for a VM. */
	export interface OSPolicy {

		/** This flag determines the OS policy compliance status when none of the resource groups within the policy are applicable for a VM. Set this value to `true` if the policy needs to be reported as compliant even if the policy has nothing to validate or enforce. */
		allowNoResourceGroupMatch?: boolean | null;

		/** Policy description. Length of the description is limited to 1024 characters. */
		description?: string | null;

		/** Required. The id of the OS policy with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the assignment. */
		id?: string | null;

		/** Required. Policy mode */
		mode?: OSPolicyMode | null;

		/** Required. List of resource groups for the policy. For a particular VM, resource groups are evaluated in the order specified and the first resource group that is applicable is selected and the rest are ignored. If none of the resource groups are applicable for a VM, the VM is considered to be non-compliant w.r.t this policy. This behavior can be toggled by the flag `allow_no_resource_group_match` */
		resourceGroups?: Array<OSPolicyResourceGroup>;
	}

	/** An OS policy defines the desired state configuration for a VM. */
	export interface OSPolicyFormProperties {

		/** This flag determines the OS policy compliance status when none of the resource groups within the policy are applicable for a VM. Set this value to `true` if the policy needs to be reported as compliant even if the policy has nothing to validate or enforce. */
		allowNoResourceGroupMatch: FormControl<boolean | null | undefined>,

		/** Policy description. Length of the description is limited to 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Required. The id of the OS policy with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the assignment. */
		id: FormControl<string | null | undefined>,

		/** Required. Policy mode */
		mode: FormControl<OSPolicyMode | null | undefined>,
	}
	export function CreateOSPolicyFormGroup() {
		return new FormGroup<OSPolicyFormProperties>({
			allowNoResourceGroupMatch: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			mode: new FormControl<OSPolicyMode | null | undefined>(undefined),
		});

	}

	export enum OSPolicyMode { MODE_UNSPECIFIED = 0, VALIDATION = 1, ENFORCEMENT = 2 }


	/** Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group. */
	export interface OSPolicyResourceGroup {

		/** List of inventory filters for the resource group. The resources in this resource group are applied to the target VM if it satisfies at least one of the following inventory filters. For example, to apply this resource group to VMs running either `RHEL` or `CentOS` operating systems, specify 2 items for the list with following values: inventory_filters[0].os_short_name='rhel' and inventory_filters[1].os_short_name='centos' If the list is empty, this resource group will be applied to the target VM unconditionally. */
		inventoryFilters?: Array<OSPolicyInventoryFilter>;

		/** Required. List of resources configured for this resource group. The resources are executed in the exact order specified here. */
		resources?: Array<OSPolicyResource>;
	}

	/** Resource groups provide a mechanism to group OS policy resources. Resource groups enable OS policy authors to create a single OS policy to be applied to VMs running different operating Systems. When the OS policy is applied to a target VM, the appropriate resource group within the OS policy is selected based on the `OSFilter` specified within the resource group. */
	export interface OSPolicyResourceGroupFormProperties {
	}
	export function CreateOSPolicyResourceGroupFormGroup() {
		return new FormGroup<OSPolicyResourceGroupFormProperties>({
		});

	}


	/** Filtering criteria to select VMs based on inventory details. */
	export interface OSPolicyInventoryFilter {

		/** Required. The OS short name */
		osShortName?: string | null;

		/** The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions. */
		osVersion?: string | null;
	}

	/** Filtering criteria to select VMs based on inventory details. */
	export interface OSPolicyInventoryFilterFormProperties {

		/** Required. The OS short name */
		osShortName: FormControl<string | null | undefined>,

		/** The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions. */
		osVersion: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyInventoryFilterFormGroup() {
		return new FormGroup<OSPolicyInventoryFilterFormProperties>({
			osShortName: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state. */
	export interface OSPolicyResource {

		/** A resource that allows executing scripts on the VM. The `ExecResource` has 2 stages: `validate` and `enforce` and both stages accept a script as an argument to execute. When the `ExecResource` is applied by the agent, it first executes the script in the `validate` stage. The `validate` stage can signal that the `ExecResource` is already in the desired state by returning an exit code of `100`. If the `ExecResource` is not in the desired state, it should return an exit code of `101`. Any other exit code returned by this stage is considered an error. If the `ExecResource` is not in the desired state based on the exit code from the `validate` stage, the agent proceeds to execute the script from the `enforce` stage. If the `ExecResource` is already in the desired state, the `enforce` stage will not be run. Similar to `validate` stage, the `enforce` stage should return an exit code of `100` to indicate that the resource in now in its desired state. Any other exit code is considered an error. NOTE: An exit code of `100` was chosen over `0` (and `101` vs `1`) to have an explicit indicator of `in desired state`, `not in desired state` and errors. Because, for example, Powershell will always return an exit code of `0` unless an `exit` statement is provided in the script. So, for reasons of consistency and being explicit, exit codes `100` and `101` were chosen. */
		exec?: OSPolicyResourceExecResource;

		/** A resource that manages the state of a file. */
		file?: OSPolicyResourceFileResource;

		/** Required. The id of the resource with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the OS policy. */
		id?: string | null;

		/** A resource that manages a system package. */
		pkg?: OSPolicyResourcePackageResource;

		/** A resource that manages a package repository. */
		repository?: OSPolicyResourceRepositoryResource;
	}

	/** An OS policy resource is used to define the desired state configuration and provides a specific functionality like installing/removing packages, executing a script etc. The system ensures that resources are always in their desired state by taking necessary actions if they have drifted from their desired state. */
	export interface OSPolicyResourceFormProperties {

		/** Required. The id of the resource with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the OS policy. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourceFormGroup() {
		return new FormGroup<OSPolicyResourceFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that allows executing scripts on the VM. The `ExecResource` has 2 stages: `validate` and `enforce` and both stages accept a script as an argument to execute. When the `ExecResource` is applied by the agent, it first executes the script in the `validate` stage. The `validate` stage can signal that the `ExecResource` is already in the desired state by returning an exit code of `100`. If the `ExecResource` is not in the desired state, it should return an exit code of `101`. Any other exit code returned by this stage is considered an error. If the `ExecResource` is not in the desired state based on the exit code from the `validate` stage, the agent proceeds to execute the script from the `enforce` stage. If the `ExecResource` is already in the desired state, the `enforce` stage will not be run. Similar to `validate` stage, the `enforce` stage should return an exit code of `100` to indicate that the resource in now in its desired state. Any other exit code is considered an error. NOTE: An exit code of `100` was chosen over `0` (and `101` vs `1`) to have an explicit indicator of `in desired state`, `not in desired state` and errors. Because, for example, Powershell will always return an exit code of `0` unless an `exit` statement is provided in the script. So, for reasons of consistency and being explicit, exit codes `100` and `101` were chosen. */
	export interface OSPolicyResourceExecResource {

		/** A file or script to execute. */
		enforce?: OSPolicyResourceExecResourceExec;

		/** A file or script to execute. */
		validate?: OSPolicyResourceExecResourceExec;
	}

	/** A resource that allows executing scripts on the VM. The `ExecResource` has 2 stages: `validate` and `enforce` and both stages accept a script as an argument to execute. When the `ExecResource` is applied by the agent, it first executes the script in the `validate` stage. The `validate` stage can signal that the `ExecResource` is already in the desired state by returning an exit code of `100`. If the `ExecResource` is not in the desired state, it should return an exit code of `101`. Any other exit code returned by this stage is considered an error. If the `ExecResource` is not in the desired state based on the exit code from the `validate` stage, the agent proceeds to execute the script from the `enforce` stage. If the `ExecResource` is already in the desired state, the `enforce` stage will not be run. Similar to `validate` stage, the `enforce` stage should return an exit code of `100` to indicate that the resource in now in its desired state. Any other exit code is considered an error. NOTE: An exit code of `100` was chosen over `0` (and `101` vs `1`) to have an explicit indicator of `in desired state`, `not in desired state` and errors. Because, for example, Powershell will always return an exit code of `0` unless an `exit` statement is provided in the script. So, for reasons of consistency and being explicit, exit codes `100` and `101` were chosen. */
	export interface OSPolicyResourceExecResourceFormProperties {
	}
	export function CreateOSPolicyResourceExecResourceFormGroup() {
		return new FormGroup<OSPolicyResourceExecResourceFormProperties>({
		});

	}


	/** A file or script to execute. */
	export interface OSPolicyResourceExecResourceExec {

		/** Optional arguments to pass to the source during execution. */
		args?: Array<string>;

		/** A remote or local file. */
		file?: OSPolicyResourceFile;

		/** Required. The script interpreter to use. */
		interpreter?: ExecStepConfigInterpreter | null;

		/** Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes. */
		outputFilePath?: string | null;

		/** An inline script. The size of the script is limited to 32KiB. */
		script?: string | null;
	}

	/** A file or script to execute. */
	export interface OSPolicyResourceExecResourceExecFormProperties {

		/** Required. The script interpreter to use. */
		interpreter: FormControl<ExecStepConfigInterpreter | null | undefined>,

		/** Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes. */
		outputFilePath: FormControl<string | null | undefined>,

		/** An inline script. The size of the script is limited to 32KiB. */
		script: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourceExecResourceExecFormGroup() {
		return new FormGroup<OSPolicyResourceExecResourceExecFormProperties>({
			interpreter: new FormControl<ExecStepConfigInterpreter | null | undefined>(undefined),
			outputFilePath: new FormControl<string | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A remote or local file. */
	export interface OSPolicyResourceFile {

		/** Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified. */
		allowInsecure?: boolean | null;

		/** Specifies a file available as a Cloud Storage Object. */
		gcs?: OSPolicyResourceFileGcs;

		/** A local path within the VM to use. */
		localPath?: string | null;

		/** Specifies a file available via some URI. */
		remote?: OSPolicyResourceFileRemote;
	}

	/** A remote or local file. */
	export interface OSPolicyResourceFileFormProperties {

		/** Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified. */
		allowInsecure: FormControl<boolean | null | undefined>,

		/** A local path within the VM to use. */
		localPath: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourceFileFormGroup() {
		return new FormGroup<OSPolicyResourceFileFormProperties>({
			allowInsecure: new FormControl<boolean | null | undefined>(undefined),
			localPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a file available as a Cloud Storage Object. */
	export interface OSPolicyResourceFileGcs {

		/** Required. Bucket of the Cloud Storage object. */
		bucket?: string | null;

		/** Generation number of the Cloud Storage object. */
		generation?: string | null;

		/** Required. Name of the Cloud Storage object. */
		object?: string | null;
	}

	/** Specifies a file available as a Cloud Storage Object. */
	export interface OSPolicyResourceFileGcsFormProperties {

		/** Required. Bucket of the Cloud Storage object. */
		bucket: FormControl<string | null | undefined>,

		/** Generation number of the Cloud Storage object. */
		generation: FormControl<string | null | undefined>,

		/** Required. Name of the Cloud Storage object. */
		object: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourceFileGcsFormGroup() {
		return new FormGroup<OSPolicyResourceFileGcsFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a file available via some URI. */
	export interface OSPolicyResourceFileRemote {

		/** SHA256 checksum of the remote file. */
		sha256Checksum?: string | null;

		/** Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`. */
		uri?: string | null;
	}

	/** Specifies a file available via some URI. */
	export interface OSPolicyResourceFileRemoteFormProperties {

		/** SHA256 checksum of the remote file. */
		sha256Checksum: FormControl<string | null | undefined>,

		/** Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourceFileRemoteFormGroup() {
		return new FormGroup<OSPolicyResourceFileRemoteFormProperties>({
			sha256Checksum: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that manages the state of a file. */
	export interface OSPolicyResourceFileResource {

		/** A a file with this content. The size of the content is limited to 32KiB. */
		content?: string | null;

		/** A remote or local file. */
		file?: OSPolicyResourceFile;

		/** Required. The absolute path of the file within the VM. */
		path?: string | null;

		/** Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
		permissions?: string | null;

		/** Required. Desired state of the file. */
		state?: OSPolicyResourceFileResourceState | null;
	}

	/** A resource that manages the state of a file. */
	export interface OSPolicyResourceFileResourceFormProperties {

		/** A a file with this content. The size of the content is limited to 32KiB. */
		content: FormControl<string | null | undefined>,

		/** Required. The absolute path of the file within the VM. */
		path: FormControl<string | null | undefined>,

		/** Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
		permissions: FormControl<string | null | undefined>,

		/** Required. Desired state of the file. */
		state: FormControl<OSPolicyResourceFileResourceState | null | undefined>,
	}
	export function CreateOSPolicyResourceFileResourceFormGroup() {
		return new FormGroup<OSPolicyResourceFileResourceFormProperties>({
			content: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			permissions: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<OSPolicyResourceFileResourceState | null | undefined>(undefined),
		});

	}

	export enum OSPolicyResourceFileResourceState { DESIRED_STATE_UNSPECIFIED = 0, PRESENT = 1, ABSENT = 2, CONTENTS_MATCH = 3 }


	/** A resource that manages a system package. */
	export interface OSPolicyResourcePackageResource {

		/** A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]` */
		apt?: OSPolicyResourcePackageResourceAPT;

		/** A deb package file. dpkg packages only support INSTALLED state. */
		deb?: OSPolicyResourcePackageResourceDeb;

		/** Required. The desired state the agent should maintain for this package. */
		desiredState?: OSPolicyResourcePackageResourceDesiredState | null;

		/** A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package` */
		googet?: OSPolicyResourcePackageResourceGooGet;

		/** An MSI package. MSI packages only support INSTALLED state. */
		msi?: OSPolicyResourcePackageResourceMSI;

		/** An RPM package file. RPM packages only support INSTALLED state. */
		rpm?: OSPolicyResourcePackageResourceRPM;

		/** A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package` */
		yum?: OSPolicyResourcePackageResourceYUM;

		/** A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package` */
		zypper?: OSPolicyResourcePackageResourceZypper;
	}

	/** A resource that manages a system package. */
	export interface OSPolicyResourcePackageResourceFormProperties {

		/** Required. The desired state the agent should maintain for this package. */
		desiredState: FormControl<OSPolicyResourcePackageResourceDesiredState | null | undefined>,
	}
	export function CreateOSPolicyResourcePackageResourceFormGroup() {
		return new FormGroup<OSPolicyResourcePackageResourceFormProperties>({
			desiredState: new FormControl<OSPolicyResourcePackageResourceDesiredState | null | undefined>(undefined),
		});

	}


	/** A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]` */
	export interface OSPolicyResourcePackageResourceAPT {

		/** Required. Package name. */
		name?: string | null;
	}

	/** A package managed by APT. - install: `apt-get update && apt-get -y install [name]` - remove: `apt-get -y remove [name]` */
	export interface OSPolicyResourcePackageResourceAPTFormProperties {

		/** Required. Package name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourcePackageResourceAPTFormGroup() {
		return new FormGroup<OSPolicyResourcePackageResourceAPTFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A deb package file. dpkg packages only support INSTALLED state. */
	export interface OSPolicyResourcePackageResourceDeb {

		/** Whether dependencies should also be installed. - install when false: `dpkg -i package` - install when true: `apt-get update && apt-get -y install package.deb` */
		pullDeps?: boolean | null;

		/** A remote or local file. */
		source?: OSPolicyResourceFile;
	}

	/** A deb package file. dpkg packages only support INSTALLED state. */
	export interface OSPolicyResourcePackageResourceDebFormProperties {

		/** Whether dependencies should also be installed. - install when false: `dpkg -i package` - install when true: `apt-get update && apt-get -y install package.deb` */
		pullDeps: FormControl<boolean | null | undefined>,
	}
	export function CreateOSPolicyResourcePackageResourceDebFormGroup() {
		return new FormGroup<OSPolicyResourcePackageResourceDebFormProperties>({
			pullDeps: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export enum OSPolicyResourcePackageResourceDesiredState { DESIRED_STATE_UNSPECIFIED = 0, INSTALLED = 1, REMOVED = 2 }


	/** A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package` */
	export interface OSPolicyResourcePackageResourceGooGet {

		/** Required. Package name. */
		name?: string | null;
	}

	/** A package managed by GooGet. - install: `googet -noconfirm install package` - remove: `googet -noconfirm remove package` */
	export interface OSPolicyResourcePackageResourceGooGetFormProperties {

		/** Required. Package name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourcePackageResourceGooGetFormGroup() {
		return new FormGroup<OSPolicyResourcePackageResourceGooGetFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An MSI package. MSI packages only support INSTALLED state. */
	export interface OSPolicyResourcePackageResourceMSI {

		/** Additional properties to use during installation. This should be in the format of Property=Setting. Appended to the defaults of `ACTION=INSTALL REBOOT=ReallySuppress`. */
		properties?: Array<string>;

		/** A remote or local file. */
		source?: OSPolicyResourceFile;
	}

	/** An MSI package. MSI packages only support INSTALLED state. */
	export interface OSPolicyResourcePackageResourceMSIFormProperties {
	}
	export function CreateOSPolicyResourcePackageResourceMSIFormGroup() {
		return new FormGroup<OSPolicyResourcePackageResourceMSIFormProperties>({
		});

	}


	/** An RPM package file. RPM packages only support INSTALLED state. */
	export interface OSPolicyResourcePackageResourceRPM {

		/** Whether dependencies should also be installed. - install when false: `rpm --upgrade --replacepkgs package.rpm` - install when true: `yum -y install package.rpm` or `zypper -y install package.rpm` */
		pullDeps?: boolean | null;

		/** A remote or local file. */
		source?: OSPolicyResourceFile;
	}

	/** An RPM package file. RPM packages only support INSTALLED state. */
	export interface OSPolicyResourcePackageResourceRPMFormProperties {

		/** Whether dependencies should also be installed. - install when false: `rpm --upgrade --replacepkgs package.rpm` - install when true: `yum -y install package.rpm` or `zypper -y install package.rpm` */
		pullDeps: FormControl<boolean | null | undefined>,
	}
	export function CreateOSPolicyResourcePackageResourceRPMFormGroup() {
		return new FormGroup<OSPolicyResourcePackageResourceRPMFormProperties>({
			pullDeps: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package` */
	export interface OSPolicyResourcePackageResourceYUM {

		/** Required. Package name. */
		name?: string | null;
	}

	/** A package managed by YUM. - install: `yum -y install package` - remove: `yum -y remove package` */
	export interface OSPolicyResourcePackageResourceYUMFormProperties {

		/** Required. Package name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourcePackageResourceYUMFormGroup() {
		return new FormGroup<OSPolicyResourcePackageResourceYUMFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package` */
	export interface OSPolicyResourcePackageResourceZypper {

		/** Required. Package name. */
		name?: string | null;
	}

	/** A package managed by Zypper. - install: `zypper -y install package` - remove: `zypper -y rm package` */
	export interface OSPolicyResourcePackageResourceZypperFormProperties {

		/** Required. Package name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourcePackageResourceZypperFormGroup() {
		return new FormGroup<OSPolicyResourcePackageResourceZypperFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A resource that manages a package repository. */
	export interface OSPolicyResourceRepositoryResource {

		/** Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`. */
		apt?: OSPolicyResourceRepositoryResourceAptRepository;

		/** Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`. */
		goo?: OSPolicyResourceRepositoryResourceGooRepository;

		/** Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`. */
		yum?: OSPolicyResourceRepositoryResourceYumRepository;

		/** Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`. */
		zypper?: OSPolicyResourceRepositoryResourceZypperRepository;
	}

	/** A resource that manages a package repository. */
	export interface OSPolicyResourceRepositoryResourceFormProperties {
	}
	export function CreateOSPolicyResourceRepositoryResourceFormGroup() {
		return new FormGroup<OSPolicyResourceRepositoryResourceFormProperties>({
		});

	}


	/** Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`. */
	export interface OSPolicyResourceRepositoryResourceAptRepository {

		/** Required. Type of archive files in this repository. */
		archiveType?: OSPolicyResourceRepositoryResourceAptRepositoryArchiveType | null;

		/** Required. List of components for this repository. Must contain at least one item. */
		components?: Array<string>;

		/** Required. Distribution of this repository. */
		distribution?: string | null;

		/** URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`. */
		gpgKey?: string | null;

		/** Required. URI for this repository. */
		uri?: string | null;
	}

	/** Represents a single apt package repository. These will be added to a repo file that will be managed at `/etc/apt/sources.list.d/google_osconfig.list`. */
	export interface OSPolicyResourceRepositoryResourceAptRepositoryFormProperties {

		/** Required. Type of archive files in this repository. */
		archiveType: FormControl<OSPolicyResourceRepositoryResourceAptRepositoryArchiveType | null | undefined>,

		/** Required. Distribution of this repository. */
		distribution: FormControl<string | null | undefined>,

		/** URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`. */
		gpgKey: FormControl<string | null | undefined>,

		/** Required. URI for this repository. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourceRepositoryResourceAptRepositoryFormGroup() {
		return new FormGroup<OSPolicyResourceRepositoryResourceAptRepositoryFormProperties>({
			archiveType: new FormControl<OSPolicyResourceRepositoryResourceAptRepositoryArchiveType | null | undefined>(undefined),
			distribution: new FormControl<string | null | undefined>(undefined),
			gpgKey: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum OSPolicyResourceRepositoryResourceAptRepositoryArchiveType { ARCHIVE_TYPE_UNSPECIFIED = 0, DEB = 1, DEB_SRC = 2 }


	/** Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`. */
	export interface OSPolicyResourceRepositoryResourceGooRepository {

		/** Required. The name of the repository. */
		name?: string | null;

		/** Required. The url of the repository. */
		url?: string | null;
	}

	/** Represents a Goo package repository. These are added to a repo file that is managed at `C:/ProgramData/GooGet/repos/google_osconfig.repo`. */
	export interface OSPolicyResourceRepositoryResourceGooRepositoryFormProperties {

		/** Required. The name of the repository. */
		name: FormControl<string | null | undefined>,

		/** Required. The url of the repository. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourceRepositoryResourceGooRepositoryFormGroup() {
		return new FormGroup<OSPolicyResourceRepositoryResourceGooRepositoryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`. */
	export interface OSPolicyResourceRepositoryResourceYumRepository {

		/** Required. The location of the repository directory. */
		baseUrl?: string | null;

		/** The display name of the repository. */
		displayName?: string | null;

		/** URIs of GPG keys. */
		gpgKeys?: Array<string>;

		/** Required. A one word, unique name for this repository. This is the `repo id` in the yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for resource conflicts. */
		id?: string | null;
	}

	/** Represents a single yum package repository. These are added to a repo file that is managed at `/etc/yum.repos.d/google_osconfig.repo`. */
	export interface OSPolicyResourceRepositoryResourceYumRepositoryFormProperties {

		/** Required. The location of the repository directory. */
		baseUrl: FormControl<string | null | undefined>,

		/** The display name of the repository. */
		displayName: FormControl<string | null | undefined>,

		/** Required. A one word, unique name for this repository. This is the `repo id` in the yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for resource conflicts. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourceRepositoryResourceYumRepositoryFormGroup() {
		return new FormGroup<OSPolicyResourceRepositoryResourceYumRepositoryFormProperties>({
			baseUrl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`. */
	export interface OSPolicyResourceRepositoryResourceZypperRepository {

		/** Required. The location of the repository directory. */
		baseUrl?: string | null;

		/** The display name of the repository. */
		displayName?: string | null;

		/** URIs of GPG keys. */
		gpgKeys?: Array<string>;

		/** Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts. */
		id?: string | null;
	}

	/** Represents a single zypper package repository. These are added to a repo file that is managed at `/etc/zypp/repos.d/google_osconfig.repo`. */
	export interface OSPolicyResourceRepositoryResourceZypperRepositoryFormProperties {

		/** Required. The location of the repository directory. */
		baseUrl: FormControl<string | null | undefined>,

		/** The display name of the repository. */
		displayName: FormControl<string | null | undefined>,

		/** Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyResourceRepositoryResourceZypperRepositoryFormGroup() {
		return new FormGroup<OSPolicyResourceRepositoryResourceZypperRepositoryFormProperties>({
			baseUrl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message to configure the rollout at the zonal level for the OS policy assignment. */
	export interface OSPolicyAssignmentRollout {

		/** Message encapsulating a value that can be either absolute ("fixed") or relative ("percent") to a value. */
		disruptionBudget?: FixedOrPercent;

		/** Required. This determines the minimum duration of time to wait after the configuration changes are applied through the current rollout. A VM continues to count towards the `disruption_budget` at least until this duration of time has passed after configuration changes are applied. */
		minWaitDuration?: string | null;
	}

	/** Message to configure the rollout at the zonal level for the OS policy assignment. */
	export interface OSPolicyAssignmentRolloutFormProperties {

		/** Required. This determines the minimum duration of time to wait after the configuration changes are applied through the current rollout. A VM continues to count towards the `disruption_budget` at least until this duration of time has passed after configuration changes are applied. */
		minWaitDuration: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyAssignmentRolloutFormGroup() {
		return new FormGroup<OSPolicyAssignmentRolloutFormProperties>({
			minWaitDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for listing all assignments under given parent. */
	export interface ListOSPolicyAssignmentsResponse {

		/** The pagination token to retrieve the next page of OS policy assignments. */
		nextPageToken?: string | null;

		/** The list of assignments */
		osPolicyAssignments?: Array<OSPolicyAssignment>;
	}

	/** A response message for listing all assignments under given parent. */
	export interface ListOSPolicyAssignmentsResponseFormProperties {

		/** The pagination token to retrieve the next page of OS policy assignments. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListOSPolicyAssignmentsResponseFormGroup() {
		return new FormGroup<ListOSPolicyAssignmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for listing patch deployments. */
	export interface ListPatchDeploymentsResponse {

		/** A pagination token that can be used to get the next page of patch deployments. */
		nextPageToken?: string | null;

		/** The list of patch deployments. */
		patchDeployments?: Array<PatchDeployment>;
	}

	/** A response message for listing patch deployments. */
	export interface ListPatchDeploymentsResponseFormProperties {

		/** A pagination token that can be used to get the next page of patch deployments. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPatchDeploymentsResponseFormGroup() {
		return new FormGroup<ListPatchDeploymentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs). */
	export interface PatchDeployment {

		/** Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		createTime?: string | null;

		/** Optional. Description of the patch deployment. Length of the description is limited to 1024 characters. */
		description?: string | null;

		/** Optional. Duration of the patch. After the duration ends, the patch times out. */
		duration?: string | null;

		/** A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones. */
		instanceFilter?: PatchInstanceFilter;

		/** Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		lastExecuteTime?: string | null;

		/** Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment. */
		name?: string | null;

		/** Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		oneTimeSchedule?: OneTimeSchedule;

		/** Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance. */
		patchConfig?: PatchConfig;

		/** Sets the time for recurring patch deployments. */
		recurringSchedule?: RecurringSchedule;

		/** Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs. */
		rollout?: PatchRollout;

		/** Output only. Current state of the patch deployment. */
		state?: PatchDeploymentState | null;

		/** Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		updateTime?: string | null;
	}

	/** Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs). */
	export interface PatchDeploymentFormProperties {

		/** Output only. Time the patch deployment was created. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		createTime: FormControl<string | null | undefined>,

		/** Optional. Description of the patch deployment. Length of the description is limited to 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Optional. Duration of the patch. After the duration ends, the patch times out. */
		duration: FormControl<string | null | undefined>,

		/** Output only. The last time a patch job was started by this deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		lastExecuteTime: FormControl<string | null | undefined>,

		/** Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment. */
		name: FormControl<string | null | undefined>,

		/** Output only. Current state of the patch deployment. */
		state: FormControl<PatchDeploymentState | null | undefined>,

		/** Output only. Time the patch deployment was last updated. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePatchDeploymentFormGroup() {
		return new FormGroup<PatchDeploymentFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			lastExecuteTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PatchDeploymentState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
	export interface OneTimeSchedule {

		/** Required. The desired patch job execution time. */
		executeTime?: string | null;
	}

	/** Sets the time for a one time patch deployment. Timestamp is in [RFC3339](https://www.ietf.org/rfc/rfc3339.txt) text format. */
	export interface OneTimeScheduleFormProperties {

		/** Required. The desired patch job execution time. */
		executeTime: FormControl<string | null | undefined>,
	}
	export function CreateOneTimeScheduleFormGroup() {
		return new FormGroup<OneTimeScheduleFormProperties>({
			executeTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Sets the time for recurring patch deployments. */
	export interface RecurringSchedule {

		/** Optional. The end time at which a recurring patch deployment schedule is no longer active. */
		endTime?: string | null;

		/** Required. The frequency unit of this recurring schedule. */
		frequency?: RecurringScheduleFrequency | null;

		/** Output only. The time the last patch job ran successfully. */
		lastExecuteTime?: string | null;

		/** Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month". */
		monthly?: MonthlySchedule;

		/** Output only. The time the next patch job is scheduled to run. */
		nextExecuteTime?: string | null;

		/** Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment. */
		startTime?: string | null;

		/** Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`. */
		timeOfDay?: TimeOfDay;

		/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
		timeZone?: TimeZone;

		/** Represents a weekly schedule. */
		weekly?: WeeklySchedule;
	}

	/** Sets the time for recurring patch deployments. */
	export interface RecurringScheduleFormProperties {

		/** Optional. The end time at which a recurring patch deployment schedule is no longer active. */
		endTime: FormControl<string | null | undefined>,

		/** Required. The frequency unit of this recurring schedule. */
		frequency: FormControl<RecurringScheduleFrequency | null | undefined>,

		/** Output only. The time the last patch job ran successfully. */
		lastExecuteTime: FormControl<string | null | undefined>,

		/** Output only. The time the next patch job is scheduled to run. */
		nextExecuteTime: FormControl<string | null | undefined>,

		/** Optional. The time that the recurring schedule becomes effective. Defaults to `create_time` of the patch deployment. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateRecurringScheduleFormGroup() {
		return new FormGroup<RecurringScheduleFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			frequency: new FormControl<RecurringScheduleFrequency | null | undefined>(undefined),
			lastExecuteTime: new FormControl<string | null | undefined>(undefined),
			nextExecuteTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum RecurringScheduleFrequency { FREQUENCY_UNSPECIFIED = 0, WEEKLY = 1, MONTHLY = 2, DAILY = 3 }


	/** Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month". */
	export interface MonthlySchedule {

		/** Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run "every month on the 31st" will not run in February, April, June, etc. */
		monthDay?: number | null;

		/** Represents one week day in a month. An example is "the 4th Sunday". */
		weekDayOfMonth?: WeekDayOfMonth;
	}

	/** Represents a monthly schedule. An example of a valid monthly schedule is "on the third Tuesday of the month" or "on the 15th of the month". */
	export interface MonthlyScheduleFormProperties {

		/** Required. One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month. Months without the target day will be skipped. For example, a schedule to run "every month on the 31st" will not run in February, April, June, etc. */
		monthDay: FormControl<number | null | undefined>,
	}
	export function CreateMonthlyScheduleFormGroup() {
		return new FormGroup<MonthlyScheduleFormProperties>({
			monthDay: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents one week day in a month. An example is "the 4th Sunday". */
	export interface WeekDayOfMonth {

		/** Required. A day of the week. */
		dayOfWeek?: WeekDayOfMonthDayOfWeek | null;

		/** Optional. Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. For example if `week_ordinal` and `day_of_week` values point to the second day of the month and this `day_offset` value is set to `3`, the patch deployment takes place three days after the second Tuesday of the month. If this value is negative, for example -5, the patches are deployed five days before before the second Tuesday of the month. Allowed values are in range [-30, 30]. */
		dayOffset?: number | null;

		/** Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month. */
		weekOrdinal?: number | null;
	}

	/** Represents one week day in a month. An example is "the 4th Sunday". */
	export interface WeekDayOfMonthFormProperties {

		/** Required. A day of the week. */
		dayOfWeek: FormControl<WeekDayOfMonthDayOfWeek | null | undefined>,

		/** Optional. Represents the number of days before or after the given week day of month that the patch deployment is scheduled for. For example if `week_ordinal` and `day_of_week` values point to the second day of the month and this `day_offset` value is set to `3`, the patch deployment takes place three days after the second Tuesday of the month. If this value is negative, for example -5, the patches are deployed five days before before the second Tuesday of the month. Allowed values are in range [-30, 30]. */
		dayOffset: FormControl<number | null | undefined>,

		/** Required. Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month. */
		weekOrdinal: FormControl<number | null | undefined>,
	}
	export function CreateWeekDayOfMonthFormGroup() {
		return new FormGroup<WeekDayOfMonthFormProperties>({
			dayOfWeek: new FormControl<WeekDayOfMonthDayOfWeek | null | undefined>(undefined),
			dayOffset: new FormControl<number | null | undefined>(undefined),
			weekOrdinal: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum WeekDayOfMonthDayOfWeek { DAY_OF_WEEK_UNSPECIFIED = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6, SUNDAY = 7 }


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


	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface TimeZone {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id?: string | null;

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version?: string | null;
	}

	/** Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones). */
	export interface TimeZoneFormProperties {

		/** IANA Time Zone Database time zone, e.g. "America/New_York". */
		id: FormControl<string | null | undefined>,

		/** Optional. IANA Time Zone Database version number, e.g. "2019a". */
		version: FormControl<string | null | undefined>,
	}
	export function CreateTimeZoneFormGroup() {
		return new FormGroup<TimeZoneFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a weekly schedule. */
	export interface WeeklySchedule {

		/** Required. Day of the week. */
		dayOfWeek?: WeekDayOfMonthDayOfWeek | null;
	}

	/** Represents a weekly schedule. */
	export interface WeeklyScheduleFormProperties {

		/** Required. Day of the week. */
		dayOfWeek: FormControl<WeekDayOfMonthDayOfWeek | null | undefined>,
	}
	export function CreateWeeklyScheduleFormGroup() {
		return new FormGroup<WeeklyScheduleFormProperties>({
			dayOfWeek: new FormControl<WeekDayOfMonthDayOfWeek | null | undefined>(undefined),
		});

	}

	export enum PatchDeploymentState { STATE_UNSPECIFIED = 0, ACTIVE = 1, PAUSED = 2 }


	/** A response message for listing the instances details for a patch job. */
	export interface ListPatchJobInstanceDetailsResponse {

		/** A pagination token that can be used to get the next page of results. */
		nextPageToken?: string | null;

		/** A list of instance status. */
		patchJobInstanceDetails?: Array<PatchJobInstanceDetails>;
	}

	/** A response message for listing the instances details for a patch job. */
	export interface ListPatchJobInstanceDetailsResponseFormProperties {

		/** A pagination token that can be used to get the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPatchJobInstanceDetailsResponseFormGroup() {
		return new FormGroup<ListPatchJobInstanceDetailsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details). */
	export interface PatchJobInstanceDetails {

		/** The number of times the agent that the agent attempts to apply the patch. */
		attemptCount?: string | null;

		/** If the patch fails, this field provides the reason. */
		failureReason?: string | null;

		/** The unique identifier for the instance. This identifier is defined by the server. */
		instanceSystemId?: string | null;

		/** The instance name in the form `projects/zones/instances/*` */
		name?: string | null;

		/** Current state of instance patch. */
		state?: PatchJobInstanceDetailsState | null;
	}

	/** Patch details for a VM instance. For more information about reviewing VM instance details, see [Listing all VM instance details for a specific patch job](https://cloud.google.com/compute/docs/os-patch-management/manage-patch-jobs#list-instance-details). */
	export interface PatchJobInstanceDetailsFormProperties {

		/** The number of times the agent that the agent attempts to apply the patch. */
		attemptCount: FormControl<string | null | undefined>,

		/** If the patch fails, this field provides the reason. */
		failureReason: FormControl<string | null | undefined>,

		/** The unique identifier for the instance. This identifier is defined by the server. */
		instanceSystemId: FormControl<string | null | undefined>,

		/** The instance name in the form `projects/zones/instances/*` */
		name: FormControl<string | null | undefined>,

		/** Current state of instance patch. */
		state: FormControl<PatchJobInstanceDetailsState | null | undefined>,
	}
	export function CreatePatchJobInstanceDetailsFormGroup() {
		return new FormGroup<PatchJobInstanceDetailsFormProperties>({
			attemptCount: new FormControl<string | null | undefined>(undefined),
			failureReason: new FormControl<string | null | undefined>(undefined),
			instanceSystemId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<PatchJobInstanceDetailsState | null | undefined>(undefined),
		});

	}

	export enum PatchJobInstanceDetailsState { PATCH_STATE_UNSPECIFIED = 0, PENDING = 1, INACTIVE = 2, NOTIFIED = 3, STARTED = 4, DOWNLOADING_PATCHES = 5, APPLYING_PATCHES = 6, REBOOTING = 7, SUCCEEDED = 8, SUCCEEDED_REBOOT_REQUIRED = 9, FAILED = 10, ACKED = 11, TIMED_OUT = 12, RUNNING_PRE_PATCH_STEP = 13, RUNNING_POST_PATCH_STEP = 14, NO_AGENT_DETECTED = 15 }


	/** A response message for listing patch jobs. */
	export interface ListPatchJobsResponse {

		/** A pagination token that can be used to get the next page of results. */
		nextPageToken?: string | null;

		/** The list of patch jobs. */
		patchJobs?: Array<PatchJob>;
	}

	/** A response message for listing patch jobs. */
	export interface ListPatchJobsResponseFormProperties {

		/** A pagination token that can be used to get the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListPatchJobsResponseFormGroup() {
		return new FormGroup<ListPatchJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job). */
	export interface PatchJob {

		/** Time this patch job was created. */
		createTime?: string | null;

		/** Description of the patch job. Length of the description is limited to 1024 characters. */
		description?: string | null;

		/** Display name for this patch job. This is not a unique identifier. */
		displayName?: string | null;

		/** If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance. */
		dryRun?: boolean | null;

		/** Duration of the patch job. After the duration ends, the patch job times out. */
		duration?: string | null;

		/** If this patch job failed, this message provides information about the failure. */
		errorMessage?: string | null;

		/** A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance. */
		instanceDetailsSummary?: PatchJobInstanceDetailsSummary;

		/** A filter to target VM instances for patching. The targeted VMs must meet all criteria specified. So if both labels and zones are specified, the patch job targets only VMs with those labels and in those zones. */
		instanceFilter?: PatchInstanceFilter;

		/** Unique identifier for this patch job in the form `projects/patchJobs/*` */
		name?: string | null;

		/** Patch configuration specifications. Contains details on how to apply the patch(es) to a VM instance. */
		patchConfig?: PatchConfig;

		/** Output only. Name of the patch deployment that created this patch job. */
		patchDeployment?: string | null;

		/** Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete. */
		percentComplete?: number | null;

		/** Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs. */
		rollout?: PatchRollout;

		/** The current state of the PatchJob. */
		state?: PatchJobState | null;

		/** Last time this patch job was updated. */
		updateTime?: string | null;
	}

	/** A high level representation of a patch job that is either in progress or has completed. Instance details are not included in the job. To paginate through instance details, use `ListPatchJobInstanceDetails`. For more information about patch jobs, see [Creating patch jobs](https://cloud.google.com/compute/docs/os-patch-management/create-patch-job). */
	export interface PatchJobFormProperties {

		/** Time this patch job was created. */
		createTime: FormControl<string | null | undefined>,

		/** Description of the patch job. Length of the description is limited to 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** Display name for this patch job. This is not a unique identifier. */
		displayName: FormControl<string | null | undefined>,

		/** If this patch job is a dry run, the agent reports that it has finished without running any updates on the VM instance. */
		dryRun: FormControl<boolean | null | undefined>,

		/** Duration of the patch job. After the duration ends, the patch job times out. */
		duration: FormControl<string | null | undefined>,

		/** If this patch job failed, this message provides information about the failure. */
		errorMessage: FormControl<string | null | undefined>,

		/** Unique identifier for this patch job in the form `projects/patchJobs/*` */
		name: FormControl<string | null | undefined>,

		/** Output only. Name of the patch deployment that created this patch job. */
		patchDeployment: FormControl<string | null | undefined>,

		/** Reflects the overall progress of the patch job in the range of 0.0 being no progress to 100.0 being complete. */
		percentComplete: FormControl<number | null | undefined>,

		/** The current state of the PatchJob. */
		state: FormControl<PatchJobState | null | undefined>,

		/** Last time this patch job was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreatePatchJobFormGroup() {
		return new FormGroup<PatchJobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			dryRun: new FormControl<boolean | null | undefined>(undefined),
			duration: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			patchDeployment: new FormControl<string | null | undefined>(undefined),
			percentComplete: new FormControl<number | null | undefined>(undefined),
			state: new FormControl<PatchJobState | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance. */
	export interface PatchJobInstanceDetailsSummary {

		/** Number of instances that have acked and will start shortly. */
		ackedInstanceCount?: string | null;

		/** Number of instances that are applying patches. */
		applyingPatchesInstanceCount?: string | null;

		/** Number of instances that are downloading patches. */
		downloadingPatchesInstanceCount?: string | null;

		/** Number of instances that failed. */
		failedInstanceCount?: string | null;

		/** Number of instances that are inactive. */
		inactiveInstanceCount?: string | null;

		/** Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service. */
		noAgentDetectedInstanceCount?: string | null;

		/** Number of instances notified about patch job. */
		notifiedInstanceCount?: string | null;

		/** Number of instances pending patch job. */
		pendingInstanceCount?: string | null;

		/** Number of instances that are running the post-patch step. */
		postPatchStepInstanceCount?: string | null;

		/** Number of instances that are running the pre-patch step. */
		prePatchStepInstanceCount?: string | null;

		/** Number of instances rebooting. */
		rebootingInstanceCount?: string | null;

		/** Number of instances that have started. */
		startedInstanceCount?: string | null;

		/** Number of instances that have completed successfully. */
		succeededInstanceCount?: string | null;

		/** Number of instances that require reboot. */
		succeededRebootRequiredInstanceCount?: string | null;

		/** Number of instances that exceeded the time out while applying the patch. */
		timedOutInstanceCount?: string | null;
	}

	/** A summary of the current patch state across all instances that this patch job affects. Contains counts of instances in different states. These states map to `InstancePatchState`. List patch job instance details to see the specific states of each instance. */
	export interface PatchJobInstanceDetailsSummaryFormProperties {

		/** Number of instances that have acked and will start shortly. */
		ackedInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that are applying patches. */
		applyingPatchesInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that are downloading patches. */
		downloadingPatchesInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that failed. */
		failedInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that are inactive. */
		inactiveInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that do not appear to be running the agent. Check to ensure that the agent is installed, running, and able to communicate with the service. */
		noAgentDetectedInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances notified about patch job. */
		notifiedInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances pending patch job. */
		pendingInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that are running the post-patch step. */
		postPatchStepInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that are running the pre-patch step. */
		prePatchStepInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances rebooting. */
		rebootingInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that have started. */
		startedInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that have completed successfully. */
		succeededInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that require reboot. */
		succeededRebootRequiredInstanceCount: FormControl<string | null | undefined>,

		/** Number of instances that exceeded the time out while applying the patch. */
		timedOutInstanceCount: FormControl<string | null | undefined>,
	}
	export function CreatePatchJobInstanceDetailsSummaryFormGroup() {
		return new FormGroup<PatchJobInstanceDetailsSummaryFormProperties>({
			ackedInstanceCount: new FormControl<string | null | undefined>(undefined),
			applyingPatchesInstanceCount: new FormControl<string | null | undefined>(undefined),
			downloadingPatchesInstanceCount: new FormControl<string | null | undefined>(undefined),
			failedInstanceCount: new FormControl<string | null | undefined>(undefined),
			inactiveInstanceCount: new FormControl<string | null | undefined>(undefined),
			noAgentDetectedInstanceCount: new FormControl<string | null | undefined>(undefined),
			notifiedInstanceCount: new FormControl<string | null | undefined>(undefined),
			pendingInstanceCount: new FormControl<string | null | undefined>(undefined),
			postPatchStepInstanceCount: new FormControl<string | null | undefined>(undefined),
			prePatchStepInstanceCount: new FormControl<string | null | undefined>(undefined),
			rebootingInstanceCount: new FormControl<string | null | undefined>(undefined),
			startedInstanceCount: new FormControl<string | null | undefined>(undefined),
			succeededInstanceCount: new FormControl<string | null | undefined>(undefined),
			succeededRebootRequiredInstanceCount: new FormControl<string | null | undefined>(undefined),
			timedOutInstanceCount: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PatchJobState { STATE_UNSPECIFIED = 0, STARTED = 1, INSTANCE_LOOKUP = 2, PATCHING = 3, SUCCEEDED = 4, COMPLETED_WITH_ERRORS = 5, CANCELED = 6, TIMED_OUT = 7 }


	/** A response message for listing vulnerability reports for all VM instances in the specified location. */
	export interface ListVulnerabilityReportsResponse {

		/** The pagination token to retrieve the next page of vulnerabilityReports object. */
		nextPageToken?: string | null;

		/** List of vulnerabilityReport objects. */
		vulnerabilityReports?: Array<VulnerabilityReport>;
	}

	/** A response message for listing vulnerability reports for all VM instances in the specified location. */
	export interface ListVulnerabilityReportsResponseFormProperties {

		/** The pagination token to retrieve the next page of vulnerabilityReports object. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVulnerabilityReportsResponseFormGroup() {
		return new FormGroup<ListVulnerabilityReportsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This API resource represents the vulnerability report for a specified Compute Engine virtual machine (VM) instance at a given point in time. For more information, see [Vulnerability reports](https://cloud.google.com/compute/docs/instances/os-inventory-management#vulnerability-reports). */
	export interface VulnerabilityReport {

		/** Output only. The `vulnerabilityReport` API resource name. Format: `projects/{project_number}/locations/{location}/instances/{instance_id}/vulnerabilityReport` */
		name?: string | null;

		/** Output only. The timestamp for when the last vulnerability report was generated for the VM. */
		updateTime?: string | null;

		/** Output only. List of vulnerabilities affecting the VM. */
		vulnerabilities?: Array<VulnerabilityReportVulnerability>;
	}

	/** This API resource represents the vulnerability report for a specified Compute Engine virtual machine (VM) instance at a given point in time. For more information, see [Vulnerability reports](https://cloud.google.com/compute/docs/instances/os-inventory-management#vulnerability-reports). */
	export interface VulnerabilityReportFormProperties {

		/** Output only. The `vulnerabilityReport` API resource name. Format: `projects/{project_number}/locations/{location}/instances/{instance_id}/vulnerabilityReport` */
		name: FormControl<string | null | undefined>,

		/** Output only. The timestamp for when the last vulnerability report was generated for the VM. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityReportFormGroup() {
		return new FormGroup<VulnerabilityReportFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A vulnerability affecting the VM instance. */
	export interface VulnerabilityReportVulnerability {

		/** Corresponds to the `AVAILABLE_PACKAGE` inventory item on the VM. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. If there is no available fix, the field is empty. The `inventory_item` value specifies the latest `SoftwarePackage` available to the VM that fixes the vulnerability. */
		availableInventoryItemIds?: Array<string>;

		/** The timestamp for when the vulnerability was first detected. */
		createTime?: string | null;

		/** Contains metadata information for the vulnerability. This information is collected from the upstream feed of the operating system. */
		details?: VulnerabilityReportVulnerabilityDetails;

		/** Corresponds to the `INSTALLED_PACKAGE` inventory item on the VM. This field displays the inventory items affected by this vulnerability. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. For some distros, this field may be empty. */
		installedInventoryItemIds?: Array<string>;

		/** List of items affected by the vulnerability. */
		items?: Array<VulnerabilityReportVulnerabilityItem>;

		/** The timestamp for when the vulnerability was last modified. */
		updateTime?: string | null;
	}

	/** A vulnerability affecting the VM instance. */
	export interface VulnerabilityReportVulnerabilityFormProperties {

		/** The timestamp for when the vulnerability was first detected. */
		createTime: FormControl<string | null | undefined>,

		/** The timestamp for when the vulnerability was last modified. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityReportVulnerabilityFormGroup() {
		return new FormGroup<VulnerabilityReportVulnerabilityFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains metadata information for the vulnerability. This information is collected from the upstream feed of the operating system. */
	export interface VulnerabilityReportVulnerabilityDetails {

		/** The CVE of the vulnerability. CVE cannot be empty and the combination of should be unique across vulnerabilities for a VM. */
		cve?: string | null;

		/** The CVSS V2 score of this vulnerability. CVSS V2 score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity. */
		cvssV2Score?: number | null;

		/** Common Vulnerability Scoring System version 3. For details, see https://www.first.org/cvss/specification-document */
		cvssV3?: CVSSv3;

		/** The note or description describing the vulnerability from the distro. */
		description?: string | null;

		/** Corresponds to the references attached to the `VulnerabilityDetails`. */
		references?: Array<VulnerabilityReportVulnerabilityDetailsReference>;

		/** Assigned severity/impact ranking from the distro. */
		severity?: string | null;
	}

	/** Contains metadata information for the vulnerability. This information is collected from the upstream feed of the operating system. */
	export interface VulnerabilityReportVulnerabilityDetailsFormProperties {

		/** The CVE of the vulnerability. CVE cannot be empty and the combination of should be unique across vulnerabilities for a VM. */
		cve: FormControl<string | null | undefined>,

		/** The CVSS V2 score of this vulnerability. CVSS V2 score is on a scale of 0 - 10 where 0 indicates low severity and 10 indicates high severity. */
		cvssV2Score: FormControl<number | null | undefined>,

		/** The note or description describing the vulnerability from the distro. */
		description: FormControl<string | null | undefined>,

		/** Assigned severity/impact ranking from the distro. */
		severity: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityReportVulnerabilityDetailsFormGroup() {
		return new FormGroup<VulnerabilityReportVulnerabilityDetailsFormProperties>({
			cve: new FormControl<string | null | undefined>(undefined),
			cvssV2Score: new FormControl<number | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A reference for this vulnerability. */
	export interface VulnerabilityReportVulnerabilityDetailsReference {

		/** The source of the reference e.g. NVD. */
		source?: string | null;

		/** The url of the reference. */
		url?: string | null;
	}

	/** A reference for this vulnerability. */
	export interface VulnerabilityReportVulnerabilityDetailsReferenceFormProperties {

		/** The source of the reference e.g. NVD. */
		source: FormControl<string | null | undefined>,

		/** The url of the reference. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityReportVulnerabilityDetailsReferenceFormGroup() {
		return new FormGroup<VulnerabilityReportVulnerabilityDetailsReferenceFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OS inventory item that is affected by a vulnerability or fixed as a result of a vulnerability. */
	export interface VulnerabilityReportVulnerabilityItem {

		/** Corresponds to the `AVAILABLE_PACKAGE` inventory item on the VM. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. If there is no available fix, the field is empty. The `inventory_item` value specifies the latest `SoftwarePackage` available to the VM that fixes the vulnerability. */
		availableInventoryItemId?: string | null;

		/** The recommended [CPE URI](https://cpe.mitre.org/specification/) update that contains a fix for this vulnerability. */
		fixedCpeUri?: string | null;

		/** Corresponds to the `INSTALLED_PACKAGE` inventory item on the VM. This field displays the inventory items affected by this vulnerability. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. For some operating systems, this field might be empty. */
		installedInventoryItemId?: string | null;

		/** The upstream OS patch, packages or KB that fixes the vulnerability. */
		upstreamFix?: string | null;
	}

	/** OS inventory item that is affected by a vulnerability or fixed as a result of a vulnerability. */
	export interface VulnerabilityReportVulnerabilityItemFormProperties {

		/** Corresponds to the `AVAILABLE_PACKAGE` inventory item on the VM. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. If there is no available fix, the field is empty. The `inventory_item` value specifies the latest `SoftwarePackage` available to the VM that fixes the vulnerability. */
		availableInventoryItemId: FormControl<string | null | undefined>,

		/** The recommended [CPE URI](https://cpe.mitre.org/specification/) update that contains a fix for this vulnerability. */
		fixedCpeUri: FormControl<string | null | undefined>,

		/** Corresponds to the `INSTALLED_PACKAGE` inventory item on the VM. This field displays the inventory items affected by this vulnerability. If the vulnerability report was not updated after the VM inventory update, these values might not display in VM inventory. For some operating systems, this field might be empty. */
		installedInventoryItemId: FormControl<string | null | undefined>,

		/** The upstream OS patch, packages or KB that fixes the vulnerability. */
		upstreamFix: FormControl<string | null | undefined>,
	}
	export function CreateVulnerabilityReportVulnerabilityItemFormGroup() {
		return new FormGroup<VulnerabilityReportVulnerabilityItemFormProperties>({
			availableInventoryItemId: new FormControl<string | null | undefined>(undefined),
			fixedCpeUri: new FormControl<string | null | undefined>(undefined),
			installedInventoryItemId: new FormControl<string | null | undefined>(undefined),
			upstreamFix: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations. */
	export interface OSPolicyAssignmentOperationMetadata {

		/** The OS policy assignment API method. */
		apiMethod?: GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataApiMethod | null;

		/** Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}` */
		osPolicyAssignment?: string | null;

		/** Rollout start time */
		rolloutStartTime?: string | null;

		/** State of the rollout */
		rolloutState?: GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState | null;

		/** Rollout update time */
		rolloutUpdateTime?: string | null;
	}

	/** OS policy assignment operation metadata provided by OS policy assignment API methods that return long running operations. */
	export interface OSPolicyAssignmentOperationMetadataFormProperties {

		/** The OS policy assignment API method. */
		apiMethod: FormControl<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataApiMethod | null | undefined>,

		/** Reference to the `OSPolicyAssignment` API resource. Format: `projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id@revision_id}` */
		osPolicyAssignment: FormControl<string | null | undefined>,

		/** Rollout start time */
		rolloutStartTime: FormControl<string | null | undefined>,

		/** State of the rollout */
		rolloutState: FormControl<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState | null | undefined>,

		/** Rollout update time */
		rolloutUpdateTime: FormControl<string | null | undefined>,
	}
	export function CreateOSPolicyAssignmentOperationMetadataFormGroup() {
		return new FormGroup<OSPolicyAssignmentOperationMetadataFormProperties>({
			apiMethod: new FormControl<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataApiMethod | null | undefined>(undefined),
			osPolicyAssignment: new FormControl<string | null | undefined>(undefined),
			rolloutStartTime: new FormControl<string | null | undefined>(undefined),
			rolloutState: new FormControl<GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState | null | undefined>(undefined),
			rolloutUpdateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface Operation {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done?: boolean | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		error?: Status;

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata?: {[id: string]: any };

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name?: string | null;

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response?: {[id: string]: any };
	}

	/** This resource represents a long-running operation that is the result of a network API call. */
	export interface OperationFormProperties {

		/** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
		done: FormControl<boolean | null | undefined>,

		/** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
		name: FormControl<string | null | undefined>,

		/** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
		response: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			done: new FormControl<boolean | null | undefined>(undefined),
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A request message for pausing a patch deployment. */
	export interface PausePatchDeploymentRequest {
	}

	/** A request message for pausing a patch deployment. */
	export interface PausePatchDeploymentRequestFormProperties {
	}
	export function CreatePausePatchDeploymentRequestFormGroup() {
		return new FormGroup<PausePatchDeploymentRequestFormProperties>({
		});

	}


	/** A request message for resuming a patch deployment. */
	export interface ResumePatchDeploymentRequest {
	}

	/** A request message for resuming a patch deployment. */
	export interface ResumePatchDeploymentRequestFormProperties {
	}
	export function CreateResumePatchDeploymentRequestFormGroup() {
		return new FormGroup<ResumePatchDeploymentRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Delete an OS Config patch deployment.
		 * Delete v1/{name}
		 * @param {string} name Required. The resource name of the patch deployment in the form `projects/patchDeployments/*`.
		 * @return {Empty} Successful response
		 */
		Osconfig_projects_patchDeployments_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
		 * Get v1/{name}
		 * @param {string} name Required. Name of the patch in the form `projects/patchJobs/*`
		 * @param {Osconfig_projects_patchJobs_getView} view Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
		 * @return {PatchJob} Successful response
		 */
		Osconfig_projects_patchJobs_get(name: string, view: Osconfig_projects_patchJobs_getView | null | undefined): Observable<PatchJob> {
			return this.http.get<PatchJob>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&view=' + view, {});
		}

		/**
		 * Update an OS Config patch deployment.
		 * Patch v1/{name}
		 * @param {string} name Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.
		 * @param {string} updateMask Optional. Field mask that controls which fields of the patch deployment should be updated.
		 * @return {PatchDeployment} Successful response
		 */
		Osconfig_projects_patchDeployments_patch(name: string, updateMask: string | null | undefined, requestBody: PatchDeployment): Observable<PatchDeployment> {
			return this.http.patch<PatchDeployment>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
		 * Post v1/{name}:cancel
		 * @param {string} name Required. Name of the patch in the form `projects/patchJobs/*`
		 * @return {PatchJob} Successful response
		 */
		Osconfig_projects_patchJobs_cancel(name: string, requestBody: CancelPatchJobRequest): Observable<PatchJob> {
			return this.http.post<PatchJob>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List the OS policy assignment revisions for a given OS policy assignment.
		 * Get v1/{name}:listRevisions
		 * @param {string} name Required. The name of the OS policy assignment to list revisions for.
		 * @param {number} pageSize The maximum number of revisions to return.
		 * @param {string} pageToken A pagination token returned from a previous call to `ListOSPolicyAssignmentRevisions` that indicates where this listing should continue from.
		 * @return {ListOSPolicyAssignmentRevisionsResponse} Successful response
		 */
		Osconfig_projects_locations_osPolicyAssignments_listRevisions(name: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOSPolicyAssignmentRevisionsResponse> {
			return this.http.get<ListOSPolicyAssignmentRevisionsResponse>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':listRevisions&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
		 * Post v1/{name}:pause
		 * @param {string} name Required. The resource name of the patch deployment in the form `projects/patchDeployments/*`.
		 * @return {PatchDeployment} Successful response
		 */
		Osconfig_projects_patchDeployments_pause(name: string, requestBody: PausePatchDeploymentRequest): Observable<PatchDeployment> {
			return this.http.post<PatchDeployment>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
		 * Post v1/{name}:resume
		 * @param {string} name Required. The resource name of the patch deployment in the form `projects/patchDeployments/*`.
		 * @return {PatchDeployment} Successful response
		 */
		Osconfig_projects_patchDeployments_resume(name: string, requestBody: ResumePatchDeploymentRequest): Observable<PatchDeployment> {
			return this.http.post<PatchDeployment>(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of instance details for a given patch job.
		 * Get v1/{parent}/instanceDetails
		 * @param {string} parent Required. The parent for the instances are in the form of `projects/patchJobs/*`.
		 * @param {string} filter A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
		 * @param {number} pageSize The maximum number of instance details records to return. Default is 100.
		 * @param {string} pageToken A pagination token returned from a previous call that indicates where this listing should continue from.
		 * @return {ListPatchJobInstanceDetailsResponse} Successful response
		 */
		Osconfig_projects_patchJobs_instanceDetails_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPatchJobInstanceDetailsResponse> {
			return this.http.get<ListPatchJobInstanceDetailsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instanceDetails&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List inventory data for all VM instances in the specified zone.
		 * Get v1/{parent}/inventories
		 * @param {string} parent Required. The parent resource name. Format: `projects/{project}/locations/{location}/instances/-` For `{project}`, either `project-number` or `project-id` can be provided.
		 * @param {string} filter If provided, this field specifies the criteria that must be met by a `Inventory` API resource to be included in the response.
		 * @param {number} pageSize The maximum number of results to return.
		 * @param {string} pageToken A pagination token returned from a previous call to `ListInventories` that indicates where this listing should continue from.
		 * @param {Osconfig_projects_patchJobs_getView} view Inventory view indicating what information should be included in the inventory resource. If unspecified, the default view is BASIC.
		 * @return {ListInventoriesResponse} Successful response
		 */
		Osconfig_projects_locations_instances_inventories_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, view: Osconfig_projects_patchJobs_getView | null | undefined): Observable<ListInventoriesResponse> {
			return this.http.get<ListInventoriesResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/inventories&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&view=' + view, {});
		}

		/**
		 * List the OS policy assignments under the parent resource. For each OS policy assignment, the latest revision is returned.
		 * Get v1/{parent}/osPolicyAssignments
		 * @param {string} parent Required. The parent resource name.
		 * @param {number} pageSize The maximum number of assignments to return.
		 * @param {string} pageToken A pagination token returned from a previous call to `ListOSPolicyAssignments` that indicates where this listing should continue from.
		 * @return {ListOSPolicyAssignmentsResponse} Successful response
		 */
		Osconfig_projects_locations_osPolicyAssignments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOSPolicyAssignmentsResponse> {
			return this.http.get<ListOSPolicyAssignmentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/osPolicyAssignments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an OS policy assignment. This method also creates the first revision of the OS policy assignment. This method returns a long running operation (LRO) that contains the rollout details. The rollout can be cancelled by cancelling the LRO. For more information, see [Method: projects.locations.osPolicyAssignments.operations.cancel](https://cloud.google.com/compute/docs/osconfig/rest/v1/projects.locations.osPolicyAssignments.operations/cancel).
		 * Post v1/{parent}/osPolicyAssignments
		 * @param {string} parent Required. The parent resource name in the form: projects/{project}/locations/{location}. Note: Specify the zone of your VMs as the location.
		 * @param {string} osPolicyAssignmentId Required. The logical name of the OS policy assignment in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
		 * @return {Operation} Successful response
		 */
		Osconfig_projects_locations_osPolicyAssignments_create(parent: string, osPolicyAssignmentId: string | null | undefined, requestBody: OSPolicyAssignment): Observable<Operation> {
			return this.http.post<Operation>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/osPolicyAssignments&osPolicyAssignmentId=' + (osPolicyAssignmentId == null ? '' : encodeURIComponent(osPolicyAssignmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a page of OS Config patch deployments.
		 * Get v1/{parent}/patchDeployments
		 * @param {string} parent Required. The resource name of the parent in the form `projects/*`.
		 * @param {number} pageSize Optional. The maximum number of patch deployments to return. Default is 100.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
		 * @return {ListPatchDeploymentsResponse} Successful response
		 */
		Osconfig_projects_patchDeployments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPatchDeploymentsResponse> {
			return this.http.get<ListPatchDeploymentsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/patchDeployments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an OS Config patch deployment.
		 * Post v1/{parent}/patchDeployments
		 * @param {string} parent Required. The project to apply this patch deployment to in the form `projects/*`.
		 * @param {string} patchDeploymentId Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
		 * @return {PatchDeployment} Successful response
		 */
		Osconfig_projects_patchDeployments_create(parent: string, patchDeploymentId: string | null | undefined, requestBody: PatchDeployment): Observable<PatchDeployment> {
			return this.http.post<PatchDeployment>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/patchDeployments&patchDeploymentId=' + (patchDeploymentId == null ? '' : encodeURIComponent(patchDeploymentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of patch jobs.
		 * Get v1/{parent}/patchJobs
		 * @param {string} parent Required. In the form of `projects/*`
		 * @param {string} filter If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
		 * @param {number} pageSize The maximum number of instance status to return.
		 * @param {string} pageToken A pagination token returned from a previous call that indicates where this listing should continue from.
		 * @return {ListPatchJobsResponse} Successful response
		 */
		Osconfig_projects_patchJobs_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPatchJobsResponse> {
			return this.http.get<ListPatchJobsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/patchJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Patch VM instances by creating and running a patch job.
		 * Post v1/{parent}/patchJobs:execute
		 * @param {string} parent Required. The project in which to run this patch in the form `projects/*`
		 * @return {PatchJob} Successful response
		 */
		Osconfig_projects_patchJobs_execute(parent: string, requestBody: ExecutePatchJobRequest): Observable<PatchJob> {
			return this.http.post<PatchJob>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/patchJobs:execute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List OS policy assignment reports for all Compute Engine VM instances in the specified zone.
		 * Get v1/{parent}/reports
		 * @param {string} parent Required. The parent resource name. Format: `projects/{project}/locations/{location}/instances/{instance}/osPolicyAssignments/{assignment}/reports` For `{project}`, either `project-number` or `project-id` can be provided. For `{instance}`, either `instance-name`, `instance-id`, or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all instances in the project/location. For `{assignment}`, either `assignment-id` or `-` can be provided. If '-' is provided, the response will include OSPolicyAssignmentReports for all OSPolicyAssignments in the project/location. Either {instance} or {assignment} must be `-`. For example: `projects/{project}/locations/{location}/instances/{instance}/osPolicyAssignments/-/reports` returns all reports for the instance `projects/{project}/locations/{location}/instances/-/osPolicyAssignments/{assignment-id}/reports` returns all the reports for the given assignment across all instances. `projects/{project}/locations/{location}/instances/-/osPolicyAssignments/-/reports` returns all the reports for all assignments across all instances.
		 * @param {string} filter If provided, this field specifies the criteria that must be met by the `OSPolicyAssignmentReport` API resource that is included in the response.
		 * @param {number} pageSize The maximum number of results to return.
		 * @param {string} pageToken A pagination token returned from a previous call to the `ListOSPolicyAssignmentReports` method that indicates where this listing should continue from.
		 * @return {ListOSPolicyAssignmentReportsResponse} Successful response
		 */
		Osconfig_projects_locations_instances_osPolicyAssignments_reports_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListOSPolicyAssignmentReportsResponse> {
			return this.http.get<ListOSPolicyAssignmentReportsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/reports&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * List vulnerability reports for all VM instances in the specified zone.
		 * Get v1/{parent}/vulnerabilityReports
		 * @param {string} parent Required. The parent resource name. Format: `projects/{project}/locations/{location}/instances/-` For `{project}`, either `project-number` or `project-id` can be provided.
		 * @param {string} filter This field supports filtering by the severity level for the vulnerability. For a list of severity levels, see [Severity levels for vulnerabilities](https://cloud.google.com/container-analysis/docs/container-scanning-overview#severity_levels_for_vulnerabilities). The filter field follows the rules described in the [AIP-160](https://google.aip.dev/160) guidelines as follows: + **Filter for a specific severity type**: you can list reports that contain vulnerabilities that are classified as medium by specifying `vulnerabilities.details.severity:MEDIUM`. + **Filter for a range of severities** : you can list reports that have vulnerabilities that are classified as critical or high by specifying `vulnerabilities.details.severity:HIGH OR vulnerabilities.details.severity:CRITICAL`
		 * @param {number} pageSize The maximum number of results to return.
		 * @param {string} pageToken A pagination token returned from a previous call to `ListVulnerabilityReports` that indicates where this listing should continue from.
		 * @return {ListVulnerabilityReportsResponse} Successful response
		 */
		Osconfig_projects_locations_instances_vulnerabilityReports_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListVulnerabilityReportsResponse> {
			return this.http.get<ListVulnerabilityReportsResponse>(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/vulnerabilityReports&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}
	}

	export enum Osconfig_projects_patchJobs_getView { INVENTORY_VIEW_UNSPECIFIED = 0, BASIC = 1, FULL = 2 }

}

