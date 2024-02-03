import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`. */
	export interface AptRepository {

		/** Type of archive files in this repository. The default behavior is DEB. */
		archiveType?: AptRepositoryArchiveType | null;

		/** Required. List of components for this repository. Must contain at least one item. */
		components?: Array<string>;

		/** Required. Distribution of this repository. */
		distribution?: string | null;

		/** URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg` containing all the keys in any applied guest policy. */
		gpgKey?: string | null;

		/** Required. URI for this repository. */
		uri?: string | null;
	}

	/** Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`. */
	export interface AptRepositoryFormProperties {

		/** Type of archive files in this repository. The default behavior is DEB. */
		archiveType: FormControl<AptRepositoryArchiveType | null | undefined>,

		/** Required. Distribution of this repository. */
		distribution: FormControl<string | null | undefined>,

		/** URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg` containing all the keys in any applied guest policy. */
		gpgKey: FormControl<string | null | undefined>,

		/** Required. URI for this repository. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateAptRepositoryFormGroup() {
		return new FormGroup<AptRepositoryFormProperties>({
			archiveType: new FormControl<AptRepositoryArchiveType | null | undefined>(undefined),
			distribution: new FormControl<string | null | undefined>(undefined),
			gpgKey: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AptRepositoryArchiveType { ARCHIVE_TYPE_UNSPECIFIED = 'ARCHIVE_TYPE_UNSPECIFIED', DEB = 'DEB', DEB_SRC = 'DEB_SRC' }


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

	export enum AptSettingsType { TYPE_UNSPECIFIED = 'TYPE_UNSPECIFIED', DIST = 'DIST', UPGRADE = 'UPGRADE' }


	/** An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones. */
	export interface Assignment {

		/** Targets instances matching at least one of these label sets. This allows an assignment to target disparate groups, for example "env=prod or env=staging". */
		groupLabels?: Array<AssignmentGroupLabel>;

		/** Targets VM instances whose name starts with one of these prefixes. Like labels, this is another way to group VM instances when targeting configs, for example prefix="prod-". Only supported for project-level policies. */
		instanceNamePrefixes?: Array<string>;

		/** Targets any of the instances specified. Instances are specified by their URI in the form `zones/[ZONE]/instances/[INSTANCE_NAME]`. Instance targeting is uncommon and is supported to facilitate the management of changes by the instance or to target specific VM instances for development and testing. Only supported for project-level policies and must reference instances within this project. */
		instances?: Array<string>;

		/** Targets VM instances matching at least one of the following OS types. VM instances must match all supplied criteria for a given OsType to be included. */
		osTypes?: Array<AssignmentOsType>;

		/** Targets instances in any of these zones. Leave empty to target instances in any zone. Zonal targeting is uncommon and is supported to facilitate the management of changes by zone. */
		zones?: Array<string>;
	}

	/** An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones. */
	export interface AssignmentFormProperties {
	}
	export function CreateAssignmentFormGroup() {
		return new FormGroup<AssignmentFormProperties>({
		});

	}


	/** Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web". */
	export interface AssignmentGroupLabel {

		/** Google Compute Engine instance labels that must be present for an instance to be included in this assignment group. */
		labels?: {[id: string]: string };
	}

	/** Represents a group of VM intances that can be identified as having all these labels, for example "env=prod and app=web". */
	export interface AssignmentGroupLabelFormProperties {

		/** Google Compute Engine instance labels that must be present for an instance to be included in this assignment group. */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateAssignmentGroupLabelFormGroup() {
		return new FormGroup<AssignmentGroupLabelFormProperties>({
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Defines the criteria for selecting VM Instances by OS type. */
	export interface AssignmentOsType {

		/** Targets VM instances with OS Inventory enabled and having the following OS architecture. */
		osArchitecture?: string | null;

		/** Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows". */
		osShortName?: string | null;

		/** Targets VM instances with OS Inventory enabled and having the following following OS version. */
		osVersion?: string | null;
	}

	/** Defines the criteria for selecting VM Instances by OS type. */
	export interface AssignmentOsTypeFormProperties {

		/** Targets VM instances with OS Inventory enabled and having the following OS architecture. */
		osArchitecture: FormControl<string | null | undefined>,

		/** Targets VM instances with OS Inventory enabled and having the following OS short name, for example "debian" or "windows". */
		osShortName: FormControl<string | null | undefined>,

		/** Targets VM instances with OS Inventory enabled and having the following following OS version. */
		osVersion: FormControl<string | null | undefined>,
	}
	export function CreateAssignmentOsTypeFormGroup() {
		return new FormGroup<AssignmentOsTypeFormProperties>({
			osArchitecture: new FormControl<string | null | undefined>(undefined),
			osShortName: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
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


	/** The effective guest policy that applies to a VM instance. */
	export interface EffectiveGuestPolicy {

		/** List of package repository configurations assigned to the VM instance. */
		packageRepositories?: Array<EffectiveGuestPolicySourcedPackageRepository>;

		/** List of package configurations assigned to the VM instance. */
		packages?: Array<EffectiveGuestPolicySourcedPackage>;

		/** List of recipes assigned to the VM instance. */
		softwareRecipes?: Array<EffectiveGuestPolicySourcedSoftwareRecipe>;
	}

	/** The effective guest policy that applies to a VM instance. */
	export interface EffectiveGuestPolicyFormProperties {
	}
	export function CreateEffectiveGuestPolicyFormGroup() {
		return new FormGroup<EffectiveGuestPolicyFormProperties>({
		});

	}


	/** A guest policy package repository including its source. */
	export interface EffectiveGuestPolicySourcedPackageRepository {

		/** A package repository. */
		packageRepository?: PackageRepository;

		/** Name of the guest policy providing this config. */
		source?: string | null;
	}

	/** A guest policy package repository including its source. */
	export interface EffectiveGuestPolicySourcedPackageRepositoryFormProperties {

		/** Name of the guest policy providing this config. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateEffectiveGuestPolicySourcedPackageRepositoryFormGroup() {
		return new FormGroup<EffectiveGuestPolicySourcedPackageRepositoryFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A package repository. */
	export interface PackageRepository {

		/** Represents a single Apt package repository. This repository is added to a repo file that is stored at `/etc/apt/sources.list.d/google_osconfig.list`. */
		apt?: AptRepository;

		/** Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo. */
		goo?: GooRepository;

		/** Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`. */
		yum?: YumRepository;

		/** Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`. */
		zypper?: ZypperRepository;
	}

	/** A package repository. */
	export interface PackageRepositoryFormProperties {
	}
	export function CreatePackageRepositoryFormGroup() {
		return new FormGroup<PackageRepositoryFormProperties>({
		});

	}


	/** Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo. */
	export interface GooRepository {

		/** Required. The name of the repository. */
		name?: string | null;

		/** Required. The url of the repository. */
		url?: string | null;
	}

	/** Represents a Goo package repository. These is added to a repo file that is stored at C:/ProgramData/GooGet/repos/google_osconfig.repo. */
	export interface GooRepositoryFormProperties {

		/** Required. The name of the repository. */
		name: FormControl<string | null | undefined>,

		/** Required. The url of the repository. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGooRepositoryFormGroup() {
		return new FormGroup<GooRepositoryFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`. */
	export interface YumRepository {

		/** Required. The location of the repository directory. */
		baseUrl?: string | null;

		/** The display name of the repository. */
		displayName?: string | null;

		/** URIs of GPG keys. */
		gpgKeys?: Array<string>;

		/** Required. A one word, unique name for this repository. This is the `repo id` in the Yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
		id?: string | null;
	}

	/** Represents a single Yum package repository. This repository is added to a repo file that is stored at `/etc/yum.repos.d/google_osconfig.repo`. */
	export interface YumRepositoryFormProperties {

		/** Required. The location of the repository directory. */
		baseUrl: FormControl<string | null | undefined>,

		/** The display name of the repository. */
		displayName: FormControl<string | null | undefined>,

		/** Required. A one word, unique name for this repository. This is the `repo id` in the Yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateYumRepositoryFormGroup() {
		return new FormGroup<YumRepositoryFormProperties>({
			baseUrl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`. */
	export interface ZypperRepository {

		/** Required. The location of the repository directory. */
		baseUrl?: string | null;

		/** The display name of the repository. */
		displayName?: string | null;

		/** URIs of GPG keys. */
		gpgKeys?: Array<string>;

		/** Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
		id?: string | null;
	}

	/** Represents a single Zypper package repository. This repository is added to a repo file that is stored at `/etc/zypp/repos.d/google_osconfig.repo`. */
	export interface ZypperRepositoryFormProperties {

		/** Required. The location of the repository directory. */
		baseUrl: FormControl<string | null | undefined>,

		/** The display name of the repository. */
		displayName: FormControl<string | null | undefined>,

		/** Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for guest policy conflicts. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateZypperRepositoryFormGroup() {
		return new FormGroup<ZypperRepositoryFormProperties>({
			baseUrl: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A guest policy package including its source. */
	export interface EffectiveGuestPolicySourcedPackage {

		/** Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3` */
		package?: Package;

		/** Name of the guest policy providing this config. */
		source?: string | null;
	}

	/** A guest policy package including its source. */
	export interface EffectiveGuestPolicySourcedPackageFormProperties {

		/** Name of the guest policy providing this config. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateEffectiveGuestPolicySourcedPackageFormGroup() {
		return new FormGroup<EffectiveGuestPolicySourcedPackageFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3` */
	export interface Package {

		/** The desired_state the agent should maintain for this package. The default is to ensure the package is installed. */
		desiredState?: PackageDesiredState | null;

		/** Type of package manager that can be used to install this package. If a system does not have the package manager, the package is not installed or removed no error message is returned. By default, or if you specify `ANY`, the agent attempts to install and remove this package using the default package manager. This is useful when creating a policy that applies to different types of systems. The default behavior is ANY. */
		manager?: PackageManager | null;

		/** Required. The name of the package. A package is uniquely identified for conflict validation by checking the package name and the manager(s) that the package targets. */
		name?: string | null;
	}

	/** Package is a reference to the software package to be installed or removed. The agent on the VM instance uses the system package manager to apply the config. These are the commands that the agent uses to install or remove packages. Apt install: `apt-get update && apt-get -y install package1 package2 package3` remove: `apt-get -y remove package1 package2 package3` Yum install: `yum -y install package1 package2 package3` remove: `yum -y remove package1 package2 package3` Zypper install: `zypper install package1 package2 package3` remove: `zypper rm package1 package2` Googet install: `googet -noconfirm install package1 package2 package3` remove: `googet -noconfirm remove package1 package2 package3` */
	export interface PackageFormProperties {

		/** The desired_state the agent should maintain for this package. The default is to ensure the package is installed. */
		desiredState: FormControl<PackageDesiredState | null | undefined>,

		/** Type of package manager that can be used to install this package. If a system does not have the package manager, the package is not installed or removed no error message is returned. By default, or if you specify `ANY`, the agent attempts to install and remove this package using the default package manager. This is useful when creating a policy that applies to different types of systems. The default behavior is ANY. */
		manager: FormControl<PackageManager | null | undefined>,

		/** Required. The name of the package. A package is uniquely identified for conflict validation by checking the package name and the manager(s) that the package targets. */
		name: FormControl<string | null | undefined>,
	}
	export function CreatePackageFormGroup() {
		return new FormGroup<PackageFormProperties>({
			desiredState: new FormControl<PackageDesiredState | null | undefined>(undefined),
			manager: new FormControl<PackageManager | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PackageDesiredState { DESIRED_STATE_UNSPECIFIED = 'DESIRED_STATE_UNSPECIFIED', INSTALLED = 'INSTALLED', UPDATED = 'UPDATED', REMOVED = 'REMOVED' }

	export enum PackageManager { MANAGER_UNSPECIFIED = 'MANAGER_UNSPECIFIED', ANY = 'ANY', APT = 'APT', YUM = 'YUM', ZYPPER = 'ZYPPER', GOO = 'GOO' }


	/** A guest policy recipe including its source. */
	export interface EffectiveGuestPolicySourcedSoftwareRecipe {

		/** A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step. */
		softwareRecipe?: SoftwareRecipe;

		/** Name of the guest policy providing this config. */
		source?: string | null;
	}

	/** A guest policy recipe including its source. */
	export interface EffectiveGuestPolicySourcedSoftwareRecipeFormProperties {

		/** Name of the guest policy providing this config. */
		source: FormControl<string | null | undefined>,
	}
	export function CreateEffectiveGuestPolicySourcedSoftwareRecipeFormGroup() {
		return new FormGroup<EffectiveGuestPolicySourcedSoftwareRecipeFormProperties>({
			source: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step. */
	export interface SoftwareRecipe {

		/** Resources available to be used in the steps in the recipe. */
		artifacts?: Array<SoftwareRecipeArtifact>;

		/** Default is INSTALLED. The desired state the agent should maintain for this recipe. INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected. */
		desiredState?: PackageDesiredState | null;

		/** Actions to be taken for installing this recipe. On failure it stops executing steps and does not attempt another installation. Any steps taken (including partially completed steps) are not rolled back. */
		installSteps?: Array<SoftwareRecipeStep>;

		/** Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance. Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments. */
		name?: string | null;

		/** Actions to be taken for updating this recipe. On failure it stops executing steps and does not attempt another update for this recipe. Any steps taken (including partially completed steps) are not rolled back. */
		updateSteps?: Array<SoftwareRecipeStep>;

		/** The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78). */
		version?: string | null;
	}

	/** A software recipe is a set of instructions for installing and configuring a piece of software. It consists of a set of artifacts that are downloaded, and a set of steps that install, configure, and/or update the software. Recipes support installing and updating software from artifacts in the following formats: Zip archive, Tar archive, Windows MSI, Debian package, and RPM package. Additionally, recipes support executing a script (either defined in a file or directly in this api) in bash, sh, cmd, and powershell. Updating a software recipe If a recipe is assigned to an instance and there is a recipe with the same name but a lower version already installed and the assigned state of the recipe is `UPDATED`, then the recipe is updated to the new version. Script Working Directories Each script or execution step is run in its own temporary directory which is deleted after completing the step. */
	export interface SoftwareRecipeFormProperties {

		/** Default is INSTALLED. The desired state the agent should maintain for this recipe. INSTALLED: The software recipe is installed on the instance but won't be updated to new versions. UPDATED: The software recipe is installed on the instance. The recipe is updated to a higher version, if a higher version of the recipe is assigned to this instance. REMOVE: Remove is unsupported for software recipes and attempts to create or update a recipe to the REMOVE state is rejected. */
		desiredState: FormControl<PackageDesiredState | null | undefined>,

		/** Required. Unique identifier for the recipe. Only one recipe with a given name is installed on an instance. Names are also used to identify resources which helps to determine whether guest policies have conflicts. This means that requests to create multiple recipes with the same name and version are rejected since they could potentially have conflicting assignments. */
		name: FormControl<string | null | undefined>,

		/** The version of this software recipe. Version can be up to 4 period separated numbers (e.g. 12.34.56.78). */
		version: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareRecipeFormGroup() {
		return new FormGroup<SoftwareRecipeFormProperties>({
			desiredState: new FormControl<PackageDesiredState | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies a resource to be used in the recipe. */
	export interface SoftwareRecipeArtifact {

		/** Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified. */
		allowInsecure?: boolean | null;

		/** Specifies an artifact available as a Google Cloud Storage object. */
		gcs?: SoftwareRecipeArtifactGcs;

		/** Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id. */
		id?: string | null;

		/** Specifies an artifact available via some URI. */
		remote?: SoftwareRecipeArtifactRemote;
	}

	/** Specifies a resource to be used in the recipe. */
	export interface SoftwareRecipeArtifactFormProperties {

		/** Defaults to false. When false, recipes are subject to validations based on the artifact type: Remote: A checksum must be specified, and only protocols with transport-layer security are permitted. GCS: An object generation number must be specified. */
		allowInsecure: FormControl<boolean | null | undefined>,

		/** Required. Id of the artifact, which the installation and update steps of this recipe can reference. Artifacts in a recipe cannot have the same id. */
		id: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareRecipeArtifactFormGroup() {
		return new FormGroup<SoftwareRecipeArtifactFormProperties>({
			allowInsecure: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an artifact available as a Google Cloud Storage object. */
	export interface SoftwareRecipeArtifactGcs {

		/** Bucket of the Google Cloud Storage object. Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `my-bucket`. */
		bucket?: string | null;

		/** Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `1234567`. */
		generation?: string | null;

		/** Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `foo/bar`. */
		object?: string | null;
	}

	/** Specifies an artifact available as a Google Cloud Storage object. */
	export interface SoftwareRecipeArtifactGcsFormProperties {

		/** Bucket of the Google Cloud Storage object. Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `my-bucket`. */
		bucket: FormControl<string | null | undefined>,

		/** Must be provided if allow_insecure is false. Generation number of the Google Cloud Storage object. `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `1234567`. */
		generation: FormControl<string | null | undefined>,

		/** Name of the Google Cloud Storage object. As specified [here] (https://cloud.google.com/storage/docs/naming#objectnames) Given an example URL: `https://storage.googleapis.com/my-bucket/foo/bar#1234567` this value would be `foo/bar`. */
		object: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareRecipeArtifactGcsFormGroup() {
		return new FormGroup<SoftwareRecipeArtifactGcsFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generation: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies an artifact available via some URI. */
	export interface SoftwareRecipeArtifactRemote {

		/** Must be provided if `allow_insecure` is `false`. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any of the steps. */
		checksum?: string | null;

		/** URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}. */
		uri?: string | null;
	}

	/** Specifies an artifact available via some URI. */
	export interface SoftwareRecipeArtifactRemoteFormProperties {

		/** Must be provided if `allow_insecure` is `false`. SHA256 checksum in hex format, to compare to the checksum of the artifact. If the checksum is not empty and it doesn't match the artifact then the recipe installation fails before running any of the steps. */
		checksum: FormControl<string | null | undefined>,

		/** URI from which to fetch the object. It should contain both the protocol and path following the format {protocol}://{location}. */
		uri: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareRecipeArtifactRemoteFormGroup() {
		return new FormGroup<SoftwareRecipeArtifactRemoteFormProperties>({
			checksum: new FormControl<string | null | undefined>(undefined),
			uri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An action that can be taken as part of installing or updating a recipe. */
	export interface SoftwareRecipeStep {

		/** Extracts an archive of the type specified in the specified directory. */
		archiveExtraction?: SoftwareRecipeStepExtractArchive;

		/** Installs a deb via dpkg. */
		dpkgInstallation?: SoftwareRecipeStepInstallDpkg;

		/** Copies the artifact to the specified path on the instance. */
		fileCopy?: SoftwareRecipeStepCopyFile;

		/** Executes an artifact or local file. */
		fileExec?: SoftwareRecipeStepExecFile;

		/** Installs an MSI file. */
		msiInstallation?: SoftwareRecipeStepInstallMsi;

		/** Installs an rpm file via the rpm utility. */
		rpmInstallation?: SoftwareRecipeStepInstallRpm;

		/** Runs a script through an interpreter. */
		scriptRun?: SoftwareRecipeStepRunScript;
	}

	/** An action that can be taken as part of installing or updating a recipe. */
	export interface SoftwareRecipeStepFormProperties {
	}
	export function CreateSoftwareRecipeStepFormGroup() {
		return new FormGroup<SoftwareRecipeStepFormProperties>({
		});

	}


	/** Extracts an archive of the type specified in the specified directory. */
	export interface SoftwareRecipeStepExtractArchive {

		/** Required. The id of the relevant artifact in the recipe. */
		artifactId?: string | null;

		/** Directory to extract archive to. Defaults to `/` on Linux or `C:\` on Windows. */
		destination?: string | null;

		/** Required. The type of the archive to extract. */
		type?: SoftwareRecipeStepExtractArchiveType | null;
	}

	/** Extracts an archive of the type specified in the specified directory. */
	export interface SoftwareRecipeStepExtractArchiveFormProperties {

		/** Required. The id of the relevant artifact in the recipe. */
		artifactId: FormControl<string | null | undefined>,

		/** Directory to extract archive to. Defaults to `/` on Linux or `C:\` on Windows. */
		destination: FormControl<string | null | undefined>,

		/** Required. The type of the archive to extract. */
		type: FormControl<SoftwareRecipeStepExtractArchiveType | null | undefined>,
	}
	export function CreateSoftwareRecipeStepExtractArchiveFormGroup() {
		return new FormGroup<SoftwareRecipeStepExtractArchiveFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<SoftwareRecipeStepExtractArchiveType | null | undefined>(undefined),
		});

	}

	export enum SoftwareRecipeStepExtractArchiveType { ARCHIVE_TYPE_UNSPECIFIED = 'ARCHIVE_TYPE_UNSPECIFIED', TAR = 'TAR', TAR_GZIP = 'TAR_GZIP', TAR_BZIP = 'TAR_BZIP', TAR_LZMA = 'TAR_LZMA', TAR_XZ = 'TAR_XZ', ZIP = 'ZIP' }


	/** Installs a deb via dpkg. */
	export interface SoftwareRecipeStepInstallDpkg {

		/** Required. The id of the relevant artifact in the recipe. */
		artifactId?: string | null;
	}

	/** Installs a deb via dpkg. */
	export interface SoftwareRecipeStepInstallDpkgFormProperties {

		/** Required. The id of the relevant artifact in the recipe. */
		artifactId: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareRecipeStepInstallDpkgFormGroup() {
		return new FormGroup<SoftwareRecipeStepInstallDpkgFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Copies the artifact to the specified path on the instance. */
	export interface SoftwareRecipeStepCopyFile {

		/** Required. The id of the relevant artifact in the recipe. */
		artifactId?: string | null;

		/** Required. The absolute path on the instance to put the file. */
		destination?: string | null;

		/** Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false. */
		overwrite?: boolean | null;

		/** Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
		permissions?: string | null;
	}

	/** Copies the artifact to the specified path on the instance. */
	export interface SoftwareRecipeStepCopyFileFormProperties {

		/** Required. The id of the relevant artifact in the recipe. */
		artifactId: FormControl<string | null | undefined>,

		/** Required. The absolute path on the instance to put the file. */
		destination: FormControl<string | null | undefined>,

		/** Whether to allow this step to overwrite existing files. If this is false and the file already exists the file is not overwritten and the step is considered a success. Defaults to false. */
		overwrite: FormControl<boolean | null | undefined>,

		/** Consists of three octal digits which represent, in order, the permissions of the owner, group, and other users for the file (similarly to the numeric mode used in the linux chmod utility). Each digit represents a three bit number with the 4 bit corresponding to the read permissions, the 2 bit corresponds to the write bit, and the one bit corresponds to the execute permission. Default behavior is 755. Below are some examples of permissions and their associated values: read, write, and execute: 7 read and execute: 5 read and write: 6 read only: 4 */
		permissions: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareRecipeStepCopyFileFormGroup() {
		return new FormGroup<SoftwareRecipeStepCopyFileFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			destination: new FormControl<string | null | undefined>(undefined),
			overwrite: new FormControl<boolean | null | undefined>(undefined),
			permissions: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Executes an artifact or local file. */
	export interface SoftwareRecipeStepExecFile {

		/** Defaults to [0]. A list of possible return values that the program can return to indicate a success. */
		allowedExitCodes?: Array<number>;

		/** Arguments to be passed to the provided executable. */
		args?: Array<string>;

		/** The id of the relevant artifact in the recipe. */
		artifactId?: string | null;

		/** The absolute path of the file on the local filesystem. */
		localPath?: string | null;
	}

	/** Executes an artifact or local file. */
	export interface SoftwareRecipeStepExecFileFormProperties {

		/** The id of the relevant artifact in the recipe. */
		artifactId: FormControl<string | null | undefined>,

		/** The absolute path of the file on the local filesystem. */
		localPath: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareRecipeStepExecFileFormGroup() {
		return new FormGroup<SoftwareRecipeStepExecFileFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
			localPath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Installs an MSI file. */
	export interface SoftwareRecipeStepInstallMsi {

		/** Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
		allowedExitCodes?: Array<number>;

		/** Required. The id of the relevant artifact in the recipe. */
		artifactId?: string | null;

		/** The flags to use when installing the MSI defaults to ["/i"] (i.e. the install flag). */
		flags?: Array<string>;
	}

	/** Installs an MSI file. */
	export interface SoftwareRecipeStepInstallMsiFormProperties {

		/** Required. The id of the relevant artifact in the recipe. */
		artifactId: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareRecipeStepInstallMsiFormGroup() {
		return new FormGroup<SoftwareRecipeStepInstallMsiFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Installs an rpm file via the rpm utility. */
	export interface SoftwareRecipeStepInstallRpm {

		/** Required. The id of the relevant artifact in the recipe. */
		artifactId?: string | null;
	}

	/** Installs an rpm file via the rpm utility. */
	export interface SoftwareRecipeStepInstallRpmFormProperties {

		/** Required. The id of the relevant artifact in the recipe. */
		artifactId: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareRecipeStepInstallRpmFormGroup() {
		return new FormGroup<SoftwareRecipeStepInstallRpmFormProperties>({
			artifactId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Runs a script through an interpreter. */
	export interface SoftwareRecipeStepRunScript {

		/** Return codes that indicate that the software installed or updated successfully. Behaviour defaults to [0] */
		allowedExitCodes?: Array<number>;

		/** The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\(Unix\)). */
		interpreter?: SoftwareRecipeStepRunScriptInterpreter | null;

		/** Required. The shell script to be executed. */
		script?: string | null;
	}

	/** Runs a script through an interpreter. */
	export interface SoftwareRecipeStepRunScriptFormProperties {

		/** The script interpreter to use to run the script. If no interpreter is specified the script is executed directly, which likely only succeed for scripts with [shebang lines](https://en.wikipedia.org/wiki/Shebang_\(Unix\)). */
		interpreter: FormControl<SoftwareRecipeStepRunScriptInterpreter | null | undefined>,

		/** Required. The shell script to be executed. */
		script: FormControl<string | null | undefined>,
	}
	export function CreateSoftwareRecipeStepRunScriptFormGroup() {
		return new FormGroup<SoftwareRecipeStepRunScriptFormProperties>({
			interpreter: new FormControl<SoftwareRecipeStepRunScriptInterpreter | null | undefined>(undefined),
			script: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum SoftwareRecipeStepRunScriptInterpreter { INTERPRETER_UNSPECIFIED = 'INTERPRETER_UNSPECIFIED', SHELL = 'SHELL', POWERSHELL = 'POWERSHELL' }


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

		/** Google Cloud Storage object representation. */
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


	/** Google Cloud Storage object representation. */
	export interface GcsObject {

		/** Required. Bucket of the Google Cloud Storage object. */
		bucket?: string | null;

		/** Required. Generation number of the Google Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
		generationNumber?: string | null;

		/** Required. Name of the Google Cloud Storage object. */
		object?: string | null;
	}

	/** Google Cloud Storage object representation. */
	export interface GcsObjectFormProperties {

		/** Required. Bucket of the Google Cloud Storage object. */
		bucket: FormControl<string | null | undefined>,

		/** Required. Generation number of the Google Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
		generationNumber: FormControl<string | null | undefined>,

		/** Required. Name of the Google Cloud Storage object. */
		object: FormControl<string | null | undefined>,
	}
	export function CreateGcsObjectFormGroup() {
		return new FormGroup<GcsObjectFormProperties>({
			bucket: new FormControl<string | null | undefined>(undefined),
			generationNumber: new FormControl<string | null | undefined>(undefined),
			object: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ExecStepConfigInterpreter { INTERPRETER_UNSPECIFIED = 'INTERPRETER_UNSPECIFIED', NONE = 'NONE', SHELL = 'SHELL', POWERSHELL = 'POWERSHELL' }


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

		/** Targets VM instances matching at least one of these label sets. This allows targeting of disparate groups, for example "env=prod or env=staging". */
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


	/** Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web". */
	export interface PatchInstanceFilterGroupLabel {

		/** Compute Engine instance labels that must be present for a VM instance to be targeted by this filter. */
		labels?: {[id: string]: string };
	}

	/** Represents a group of VMs that can be identified as having all these labels, for example "env=prod and app=web". */
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

	export enum PatchConfigRebootConfig { REBOOT_CONFIG_UNSPECIFIED = 'REBOOT_CONFIG_UNSPECIFIED', DEFAULT = 'DEFAULT', ALWAYS = 'ALWAYS', NEVER = 'NEVER' }


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

	export enum PatchRolloutMode { MODE_UNSPECIFIED = 'MODE_UNSPECIFIED', ZONE_BY_ZONE = 'ZONE_BY_ZONE', CONCURRENT_ZONES = 'CONCURRENT_ZONES' }


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

	export enum GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataApiMethod { API_METHOD_UNSPECIFIED = 'API_METHOD_UNSPECIFIED', CREATE = 'CREATE', UPDATE = 'UPDATE', DELETE = 'DELETE' }

	export enum GoogleCloudOsconfigV1__OSPolicyAssignmentOperationMetadataRolloutState { ROLLOUT_STATE_UNSPECIFIED = 'ROLLOUT_STATE_UNSPECIFIED', IN_PROGRESS = 'IN_PROGRESS', CANCELLING = 'CANCELLING', CANCELLED = 'CANCELLED', SUCCEEDED = 'SUCCEEDED' }


	/** An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install. */
	export interface GuestPolicy {

		/** An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones. */
		assignment?: Assignment;

		/** Output only. Time this guest policy was created. */
		createTime?: string | null;

		/** Description of the guest policy. Length of the description is limited to 1024 characters. */
		description?: string | null;

		/** The etag for this guest policy. If this is provided on update, it must match the server's etag. */
		etag?: string | null;

		/** Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. */
		name?: string | null;

		/** A list of package repositories to configure on the VM instance. This is done before any other configs are applied so they can use these repos. Package repositories are only configured if the corresponding package manager(s) are available. */
		packageRepositories?: Array<PackageRepository>;

		/** The software packages to be managed by this policy. */
		packages?: Array<Package>;

		/** A list of Recipes to install on the VM instance. */
		recipes?: Array<SoftwareRecipe>;

		/** Output only. Last time this guest policy was updated. */
		updateTime?: string | null;
	}

	/** An OS Config resource representing a guest configuration policy. These policies represent the desired state for VM instance guest environments including packages to install or remove, package repository configurations, and software to install. */
	export interface GuestPolicyFormProperties {

		/** Output only. Time this guest policy was created. */
		createTime: FormControl<string | null | undefined>,

		/** Description of the guest policy. Length of the description is limited to 1024 characters. */
		description: FormControl<string | null | undefined>,

		/** The etag for this guest policy. If this is provided on update, it must match the server's etag. */
		etag: FormControl<string | null | undefined>,

		/** Required. Unique name of the resource in this project using one of the following forms: `projects/{project_number}/guestPolicies/{guest_policy_id}`. */
		name: FormControl<string | null | undefined>,

		/** Output only. Last time this guest policy was updated. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGuestPolicyFormGroup() {
		return new FormGroup<GuestPolicyFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A response message for listing guest policies. */
	export interface ListGuestPoliciesResponse {

		/** The list of GuestPolicies. */
		guestPolicies?: Array<GuestPolicy>;

		/** A pagination token that can be used to get the next page of guest policies. */
		nextPageToken?: string | null;
	}

	/** A response message for listing guest policies. */
	export interface ListGuestPoliciesResponseFormProperties {

		/** A pagination token that can be used to get the next page of guest policies. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGuestPoliciesResponseFormGroup() {
		return new FormGroup<ListGuestPoliciesResponseFormProperties>({
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

	export enum RecurringScheduleFrequency { FREQUENCY_UNSPECIFIED = 'FREQUENCY_UNSPECIFIED', WEEKLY = 'WEEKLY', MONTHLY = 'MONTHLY', DAILY = 'DAILY' }


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

	export enum WeekDayOfMonthDayOfWeek { DAY_OF_WEEK_UNSPECIFIED = 'DAY_OF_WEEK_UNSPECIFIED', MONDAY = 'MONDAY', TUESDAY = 'TUESDAY', WEDNESDAY = 'WEDNESDAY', THURSDAY = 'THURSDAY', FRIDAY = 'FRIDAY', SATURDAY = 'SATURDAY', SUNDAY = 'SUNDAY' }


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

	export enum PatchDeploymentState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', ACTIVE = 'ACTIVE', PAUSED = 'PAUSED' }


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

	export enum PatchJobInstanceDetailsState { PATCH_STATE_UNSPECIFIED = 'PATCH_STATE_UNSPECIFIED', PENDING = 'PENDING', INACTIVE = 'INACTIVE', NOTIFIED = 'NOTIFIED', STARTED = 'STARTED', DOWNLOADING_PATCHES = 'DOWNLOADING_PATCHES', APPLYING_PATCHES = 'APPLYING_PATCHES', REBOOTING = 'REBOOTING', SUCCEEDED = 'SUCCEEDED', SUCCEEDED_REBOOT_REQUIRED = 'SUCCEEDED_REBOOT_REQUIRED', FAILED = 'FAILED', ACKED = 'ACKED', TIMED_OUT = 'TIMED_OUT', RUNNING_PRE_PATCH_STEP = 'RUNNING_PRE_PATCH_STEP', RUNNING_POST_PATCH_STEP = 'RUNNING_POST_PATCH_STEP', NO_AGENT_DETECTED = 'NO_AGENT_DETECTED' }


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

	export enum PatchJobState { STATE_UNSPECIFIED = 'STATE_UNSPECIFIED', STARTED = 'STARTED', INSTANCE_LOOKUP = 'INSTANCE_LOOKUP', PATCHING = 'PATCHING', SUCCEEDED = 'SUCCEEDED', COMPLETED_WITH_ERRORS = 'COMPLETED_WITH_ERRORS', CANCELED = 'CANCELED', TIMED_OUT = 'TIMED_OUT' }


	/** A request message for getting the effective guest policy assigned to the instance. */
	export interface LookupEffectiveGuestPolicyRequest {

		/** Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance. */
		osArchitecture?: string | null;

		/** Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance. */
		osShortName?: string | null;

		/** Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance. */
		osVersion?: string | null;
	}

	/** A request message for getting the effective guest policy assigned to the instance. */
	export interface LookupEffectiveGuestPolicyRequestFormProperties {

		/** Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance. */
		osArchitecture: FormControl<string | null | undefined>,

		/** Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance. */
		osShortName: FormControl<string | null | undefined>,

		/** Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance. */
		osVersion: FormControl<string | null | undefined>,
	}
	export function CreateLookupEffectiveGuestPolicyRequestFormGroup() {
		return new FormGroup<LookupEffectiveGuestPolicyRequestFormProperties>({
			osArchitecture: new FormControl<string | null | undefined>(undefined),
			osShortName: new FormControl<string | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
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
		 * Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.
		 * Post v1beta/{instance}:lookupEffectiveGuestPolicy
		 * @param {string} instance Required. The VM instance whose policies are being looked up.
		 * @return {EffectiveGuestPolicy} Successful response
		 */
		Osconfig_projects_zones_instances_lookupEffectiveGuestPolicy(instance: string, requestBody: LookupEffectiveGuestPolicyRequest): Observable<EffectiveGuestPolicy> {
			return this.http.post<EffectiveGuestPolicy>(this.baseUri + 'v1beta/' + (instance == null ? '' : encodeURIComponent(instance)) + ':lookupEffectiveGuestPolicy', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete an OS Config patch deployment.
		 * Delete v1beta/{name}
		 * @param {string} name Required. The resource name of the patch deployment in the form `projects/patchDeployments/*`.
		 * @return {Empty} Successful response
		 */
		Osconfig_projects_patchDeployments_delete(name: string): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
		 * Get v1beta/{name}
		 * @param {string} name Required. Name of the patch in the form `projects/patchJobs/*`
		 * @return {PatchJob} Successful response
		 */
		Osconfig_projects_patchJobs_get(name: string): Observable<PatchJob> {
			return this.http.get<PatchJob>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Update an OS Config patch deployment.
		 * Patch v1beta/{name}
		 * @param {string} name Unique name for the patch deployment resource in a project. The patch deployment name is in the form: `projects/{project_id}/patchDeployments/{patch_deployment_id}`. This field is ignored when you create a new patch deployment.
		 * @param {string} updateMask Optional. Field mask that controls which fields of the patch deployment should be updated.
		 * @return {PatchDeployment} Successful response
		 */
		Osconfig_projects_patchDeployments_patch(name: string, updateMask: string | null | undefined, requestBody: PatchDeployment): Observable<PatchDeployment> {
			return this.http.patch<PatchDeployment>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
		 * Post v1beta/{name}:cancel
		 * @param {string} name Required. Name of the patch in the form `projects/patchJobs/*`
		 * @return {PatchJob} Successful response
		 */
		Osconfig_projects_patchJobs_cancel(name: string, requestBody: CancelPatchJobRequest): Observable<PatchJob> {
			return this.http.post<PatchJob>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
		 * Post v1beta/{name}:pause
		 * @param {string} name Required. The resource name of the patch deployment in the form `projects/patchDeployments/*`.
		 * @return {PatchDeployment} Successful response
		 */
		Osconfig_projects_patchDeployments_pause(name: string, requestBody: PausePatchDeploymentRequest): Observable<PatchDeployment> {
			return this.http.post<PatchDeployment>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':pause', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
		 * Post v1beta/{name}:resume
		 * @param {string} name Required. The resource name of the patch deployment in the form `projects/patchDeployments/*`.
		 * @return {PatchDeployment} Successful response
		 */
		Osconfig_projects_patchDeployments_resume(name: string, requestBody: ResumePatchDeploymentRequest): Observable<PatchDeployment> {
			return this.http.post<PatchDeployment>(this.baseUri + 'v1beta/' + (name == null ? '' : encodeURIComponent(name)) + ':resume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a page of OS Config guest policies.
		 * Get v1beta/{parent}/guestPolicies
		 * @param {string} parent Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.
		 * @param {number} pageSize The maximum number of guest policies to return.
		 * @param {string} pageToken A pagination token returned from a previous call to `ListGuestPolicies` that indicates where this listing should continue from.
		 * @return {ListGuestPoliciesResponse} Successful response
		 */
		Osconfig_projects_guestPolicies_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListGuestPoliciesResponse> {
			return this.http.get<ListGuestPoliciesResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/guestPolicies&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an OS Config guest policy.
		 * Post v1beta/{parent}/guestPolicies
		 * @param {string} parent Required. The resource name of the parent using one of the following forms: `projects/{project_number}`.
		 * @param {string} guestPolicyId Required. The logical name of the guest policy in the project with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
		 * @return {GuestPolicy} Successful response
		 */
		Osconfig_projects_guestPolicies_create(parent: string, guestPolicyId: string | null | undefined, requestBody: GuestPolicy): Observable<GuestPolicy> {
			return this.http.post<GuestPolicy>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/guestPolicies&guestPolicyId=' + (guestPolicyId == null ? '' : encodeURIComponent(guestPolicyId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of instance details for a given patch job.
		 * Get v1beta/{parent}/instanceDetails
		 * @param {string} parent Required. The parent for the instances are in the form of `projects/patchJobs/*`.
		 * @param {string} filter A filter expression that filters results listed in the response. This field supports filtering results by instance zone, name, state, or `failure_reason`.
		 * @param {number} pageSize The maximum number of instance details records to return. Default is 100.
		 * @param {string} pageToken A pagination token returned from a previous call that indicates where this listing should continue from.
		 * @return {ListPatchJobInstanceDetailsResponse} Successful response
		 */
		Osconfig_projects_patchJobs_instanceDetails_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPatchJobInstanceDetailsResponse> {
			return this.http.get<ListPatchJobInstanceDetailsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/instanceDetails&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get a page of OS Config patch deployments.
		 * Get v1beta/{parent}/patchDeployments
		 * @param {string} parent Required. The resource name of the parent in the form `projects/*`.
		 * @param {number} pageSize Optional. The maximum number of patch deployments to return. Default is 100.
		 * @param {string} pageToken Optional. A pagination token returned from a previous call to ListPatchDeployments that indicates where this listing should continue from.
		 * @return {ListPatchDeploymentsResponse} Successful response
		 */
		Osconfig_projects_patchDeployments_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPatchDeploymentsResponse> {
			return this.http.get<ListPatchDeploymentsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/patchDeployments&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Create an OS Config patch deployment.
		 * Post v1beta/{parent}/patchDeployments
		 * @param {string} parent Required. The project to apply this patch deployment to in the form `projects/*`.
		 * @param {string} patchDeploymentId Required. A name for the patch deployment in the project. When creating a name the following rules apply: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the project.
		 * @return {PatchDeployment} Successful response
		 */
		Osconfig_projects_patchDeployments_create(parent: string, patchDeploymentId: string | null | undefined, requestBody: PatchDeployment): Observable<PatchDeployment> {
			return this.http.post<PatchDeployment>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/patchDeployments&patchDeploymentId=' + (patchDeploymentId == null ? '' : encodeURIComponent(patchDeploymentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get a list of patch jobs.
		 * Get v1beta/{parent}/patchJobs
		 * @param {string} parent Required. In the form of `projects/*`
		 * @param {string} filter If provided, this field specifies the criteria that must be met by patch jobs to be included in the response. Currently, filtering is only available on the patch_deployment field.
		 * @param {number} pageSize The maximum number of instance status to return.
		 * @param {string} pageToken A pagination token returned from a previous call that indicates where this listing should continue from.
		 * @return {ListPatchJobsResponse} Successful response
		 */
		Osconfig_projects_patchJobs_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<ListPatchJobsResponse> {
			return this.http.get<ListPatchJobsResponse>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/patchJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Patch VM instances by creating and running a patch job.
		 * Post v1beta/{parent}/patchJobs:execute
		 * @param {string} parent Required. The project in which to run this patch in the form `projects/*`
		 * @return {PatchJob} Successful response
		 */
		Osconfig_projects_patchJobs_execute(parent: string, requestBody: ExecutePatchJobRequest): Observable<PatchJob> {
			return this.http.post<PatchJob>(this.baseUri + 'v1beta/' + (parent == null ? '' : encodeURIComponent(parent)) + '/patchJobs:execute', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

