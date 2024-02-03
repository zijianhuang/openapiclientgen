import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a Google Tag Manager Account. */
	export interface Account {

		/** The Account ID uniquely identifies the GTM Account. */
		accountId?: string | null;

		/** The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified. */
		fingerprint?: string | null;

		/** Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update */
		name?: string | null;

		/** Whether the account shares data anonymously with Google and others. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update */
		shareData?: boolean | null;
	}

	/** Represents a Google Tag Manager Account. */
	export interface AccountFormProperties {

		/** The Account ID uniquely identifies the GTM Account. */
		accountId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update */
		name: FormControl<string | null | undefined>,

		/** Whether the account shares data anonymously with Google and others. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update */
		shareData: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			shareData: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the Google Tag Manager Account access permissions. */
	export interface AccountAccess {

		/** List of Account permissions. Valid account permissions are read and manage. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		permission?: Array<string>;
	}

	/** Defines the Google Tag Manager Account access permissions. */
	export interface AccountAccessFormProperties {
	}
	export function CreateAccountAccessFormGroup() {
		return new FormGroup<AccountAccessFormProperties>({
		});

	}


	/** Represents a predicate. */
	export interface Condition {

		/** A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update */
		parameter?: Array<Parameter>;

		/** The type of operator for this condition. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update */
		type?: ConditionType | null;
	}

	/** Represents a predicate. */
	export interface ConditionFormProperties {

		/** The type of operator for this condition. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update */
		type: FormControl<ConditionType | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			type: new FormControl<ConditionType | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Parameter. */
	export interface Parameter {

		/** The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		key?: string | null;

		/** This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		list?: Array<Parameter>;

		/** This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		map?: Array<Parameter>;

		/** The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		type?: ParameterType | null;

		/** A parameter's value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		value?: string | null;
	}

	/** Represents a Google Tag Manager Parameter. */
	export interface ParameterFormProperties {

		/** The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		key: FormControl<string | null | undefined>,

		/** The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		type: FormControl<ParameterType | null | undefined>,

		/** A parameter's value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		value: FormControl<string | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ParameterType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParameterType { template = 'template', integer = 'integer', boolean = 'boolean', list = 'list', map = 'map', triggerReference = 'triggerReference', tagReference = 'tagReference' }

	export enum ConditionType { equals = 'equals', contains = 'contains', startsWith = 'startsWith', endsWith = 'endsWith', matchRegex = 'matchRegex', greater = 'greater', greaterOrEquals = 'greaterOrEquals', less = 'less', lessOrEquals = 'lessOrEquals', cssSelector = 'cssSelector', urlMatches = 'urlMatches' }


	/** Represents a Google Tag Manager Container. */
	export interface Container {

		/** GTM Account ID. */
		accountId?: string | null;

		/** The Container ID uniquely identifies the GTM Container. */
		containerId?: string | null;

		/** Optional list of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		domainName?: Array<string>;

		/** List of enabled built-in variables. Valid values include: pageUrl, pageHostname, pagePath, referrer, event, clickElement, clickClasses, clickId, clickTarget, clickUrl, clickText, formElement, formClasses, formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine, newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState, historySource, containerVersion, debugMode, randomNumber, containerId. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		enabledBuiltInVariable?: Array<string>;

		/** The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified. */
		fingerprint?: string | null;

		/** Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		name?: string | null;

		/** Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		notes?: string | null;

		/** Container Public ID. */
		publicId?: string | null;

		/** Container Country ID. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		timeZoneCountryId?: string | null;

		/** Container Time Zone ID. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		timeZoneId?: string | null;

		/** List of Usage Contexts for the Container. Valid values include: web, android, ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		usageContext?: Array<string>;
	}

	/** Represents a Google Tag Manager Container. */
	export interface ContainerFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** The Container ID uniquely identifies the GTM Container. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		name: FormControl<string | null | undefined>,

		/** Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		notes: FormControl<string | null | undefined>,

		/** Container Public ID. */
		publicId: FormControl<string | null | undefined>,

		/** Container Country ID. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		timeZoneCountryId: FormControl<string | null | undefined>,

		/** Container Time Zone ID. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		timeZoneId: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			publicId: new FormControl<string | null | undefined>(undefined),
			timeZoneCountryId: new FormControl<string | null | undefined>(undefined),
			timeZoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Defines the Google Tag Manager Container access permissions. */
	export interface ContainerAccess {

		/** GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		containerId?: string | null;

		/** List of Container permissions. Valid container permissions are: read, edit, delete, publish. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		permission?: Array<string>;
	}

	/** Defines the Google Tag Manager Container access permissions. */
	export interface ContainerAccessFormProperties {

		/** GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		containerId: FormControl<string | null | undefined>,
	}
	export function CreateContainerAccessFormGroup() {
		return new FormGroup<ContainerAccessFormProperties>({
			containerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Container Version. */
	export interface ContainerVersion {

		/** GTM Account ID. */
		accountId?: string | null;

		/** Represents a Google Tag Manager Container. */
		container?: Container;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The Container Version ID uniquely identifies the GTM Container Version. */
		containerVersionId?: string | null;

		/** A value of true indicates this container version has been deleted. */
		deleted?: boolean | null;

		/** The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified. */
		fingerprint?: string | null;

		/** The folders in the container that this version was taken from. */
		folder?: Array<Folder>;

		/** The macros in the container that this version was taken from. */
		macro?: Array<Macro>;

		/** Container version display name. @mutable tagmanager.accounts.containers.versions.update */
		name?: string | null;

		/** User notes on how to apply this container version in the container. @mutable tagmanager.accounts.containers.versions.update */
		notes?: string | null;

		/** The rules in the container that this version was taken from. */
		rule?: Array<Rule>;

		/** The tags in the container that this version was taken from. */
		tag?: Array<Tag>;

		/** The triggers in the container that this version was taken from. */
		trigger?: Array<Trigger>;

		/** The variables in the container that this version was taken from. */
		variable?: Array<Variable>;
	}

	/** Represents a Google Tag Manager Container Version. */
	export interface ContainerVersionFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The Container Version ID uniquely identifies the GTM Container Version. */
		containerVersionId: FormControl<string | null | undefined>,

		/** A value of true indicates this container version has been deleted. */
		deleted: FormControl<boolean | null | undefined>,

		/** The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Container version display name. @mutable tagmanager.accounts.containers.versions.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this container version in the container. @mutable tagmanager.accounts.containers.versions.update */
		notes: FormControl<string | null | undefined>,
	}
	export function CreateContainerVersionFormGroup() {
		return new FormGroup<ContainerVersionFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			containerVersionId: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Folder. */
	export interface Folder {

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified. */
		fingerprint?: string | null;

		/** The Folder ID uniquely identifies the GTM Folder. */
		folderId?: string | null;

		/** Folder display name. @mutable tagmanager.accounts.containers.folders.create @mutable tagmanager.accounts.containers.folders.update */
		name?: string | null;
	}

	/** Represents a Google Tag Manager Folder. */
	export interface FolderFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** The Folder ID uniquely identifies the GTM Folder. */
		folderId: FormControl<string | null | undefined>,

		/** Folder display name. @mutable tagmanager.accounts.containers.folders.create @mutable tagmanager.accounts.containers.folders.update */
		name: FormControl<string | null | undefined>,
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			folderId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Macro. */
	export interface Macro {

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** For mobile containers only: A list of rule IDs for disabling conditional macros; the macro is enabled if one of the enabling rules is true while all the disabling rules are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		disablingRuleId?: Array<string>;

		/** For mobile containers only: A list of rule IDs for enabling conditional macros; the macro is enabled if one of the enabling rules is true while all the disabling rules are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		enablingRuleId?: Array<string>;

		/** The fingerprint of the GTM Macro as computed at storage time. This value is recomputed whenever the macro is modified. */
		fingerprint?: string | null;

		/** The Macro ID uniquely identifies the GTM Macro. */
		macroId?: string | null;

		/** Macro display name. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		name?: string | null;

		/** User notes on how to apply this macro in the container. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		notes?: string | null;

		/** The macro's parameters. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string | null;

		/** The end timestamp in milliseconds to schedule a macro. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		scheduleEndMs?: string | null;

		/** The start timestamp in milliseconds to schedule a macro. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		scheduleStartMs?: string | null;

		/** GTM Macro Type. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		type?: string | null;
	}

	/** Represents a Google Tag Manager Macro. */
	export interface MacroFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Macro as computed at storage time. This value is recomputed whenever the macro is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** The Macro ID uniquely identifies the GTM Macro. */
		macroId: FormControl<string | null | undefined>,

		/** Macro display name. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this macro in the container. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		notes: FormControl<string | null | undefined>,

		/** Parent folder id. */
		parentFolderId: FormControl<string | null | undefined>,

		/** The end timestamp in milliseconds to schedule a macro. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		scheduleEndMs: FormControl<string | null | undefined>,

		/** The start timestamp in milliseconds to schedule a macro. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		scheduleStartMs: FormControl<string | null | undefined>,

		/** GTM Macro Type. @mutable tagmanager.accounts.containers.macros.create @mutable tagmanager.accounts.containers.macros.update */
		type: FormControl<string | null | undefined>,
	}
	export function CreateMacroFormGroup() {
		return new FormGroup<MacroFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			macroId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			scheduleEndMs: new FormControl<string | null | undefined>(undefined),
			scheduleStartMs: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Rule. */
	export interface Rule {

		/** GTM Account ID. */
		accountId?: string | null;

		/** The list of conditions that make up this rule (implicit AND between them). @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update */
		condition?: Array<Condition>;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The fingerprint of the GTM Rule as computed at storage time. This value is recomputed whenever the rule is modified. */
		fingerprint?: string | null;

		/** Rule display name. @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update */
		name?: string | null;

		/** User notes on how to apply this rule in the container. @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update */
		notes?: string | null;

		/** The Rule ID uniquely identifies the GTM Rule. */
		ruleId?: string | null;
	}

	/** Represents a Google Tag Manager Rule. */
	export interface RuleFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Rule as computed at storage time. This value is recomputed whenever the rule is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Rule display name. @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this rule in the container. @mutable tagmanager.accounts.containers.rules.create @mutable tagmanager.accounts.containers.rules.update */
		notes: FormControl<string | null | undefined>,

		/** The Rule ID uniquely identifies the GTM Rule. */
		ruleId: FormControl<string | null | undefined>,
	}
	export function CreateRuleFormGroup() {
		return new FormGroup<RuleFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			ruleId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Tag. */
	export interface Tag {

		/** GTM Account ID. */
		accountId?: string | null;

		/** Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		blockingRuleId?: Array<string>;

		/** Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		blockingTriggerId?: Array<string>;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified. */
		fingerprint?: string | null;

		/** Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		firingRuleId?: Array<string>;

		/** Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		firingTriggerId?: Array<string>;

		/** If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		liveOnly?: boolean | null;

		/** Tag display name. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		name?: string | null;

		/** User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		notes?: string | null;

		/** The tag's parameters. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string | null;

		/** True if the tag is paused. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		paused?: boolean | null;

		/** Represents a Google Tag Manager Parameter. */
		priority?: Parameter;

		/** The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		scheduleEndMs?: string | null;

		/** The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		scheduleStartMs?: string | null;

		/** The list of setup tags. Currently we only allow one. */
		setupTag?: Array<SetupTag>;

		/** Option to fire this tag. */
		tagFiringOption?: TagTagFiringOption | null;

		/** The Tag ID uniquely identifies the GTM Tag. */
		tagId?: string | null;

		/** The list of teardown tags. Currently we only allow one. */
		teardownTag?: Array<TeardownTag>;

		/** GTM Tag Type. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		type?: string | null;
	}

	/** Represents a Google Tag Manager Tag. */
	export interface TagFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		liveOnly: FormControl<boolean | null | undefined>,

		/** Tag display name. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		notes: FormControl<string | null | undefined>,

		/** Parent folder id. */
		parentFolderId: FormControl<string | null | undefined>,

		/** True if the tag is paused. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		paused: FormControl<boolean | null | undefined>,

		/** The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		scheduleEndMs: FormControl<string | null | undefined>,

		/** The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		scheduleStartMs: FormControl<string | null | undefined>,

		/** Option to fire this tag. */
		tagFiringOption: FormControl<TagTagFiringOption | null | undefined>,

		/** The Tag ID uniquely identifies the GTM Tag. */
		tagId: FormControl<string | null | undefined>,

		/** GTM Tag Type. @mutable tagmanager.accounts.containers.tags.create @mutable tagmanager.accounts.containers.tags.update */
		type: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			liveOnly: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			paused: new FormControl<boolean | null | undefined>(undefined),
			scheduleEndMs: new FormControl<string | null | undefined>(undefined),
			scheduleStartMs: new FormControl<string | null | undefined>(undefined),
			tagFiringOption: new FormControl<TagTagFiringOption | null | undefined>(undefined),
			tagId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SetupTag {

		/** If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status. */
		stopOnSetupFailure?: boolean | null;

		/** The name of the setup tag. */
		tagName?: string | null;
	}
	export interface SetupTagFormProperties {

		/** If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status. */
		stopOnSetupFailure: FormControl<boolean | null | undefined>,

		/** The name of the setup tag. */
		tagName: FormControl<string | null | undefined>,
	}
	export function CreateSetupTagFormGroup() {
		return new FormGroup<SetupTagFormProperties>({
			stopOnSetupFailure: new FormControl<boolean | null | undefined>(undefined),
			tagName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TagTagFiringOption { unlimited = 'unlimited', oncePerEvent = 'oncePerEvent', oncePerLoad = 'oncePerLoad' }

	export interface TeardownTag {

		/** If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status. */
		stopTeardownOnFailure?: boolean | null;

		/** The name of the teardown tag. */
		tagName?: string | null;
	}
	export interface TeardownTagFormProperties {

		/** If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status. */
		stopTeardownOnFailure: FormControl<boolean | null | undefined>,

		/** The name of the teardown tag. */
		tagName: FormControl<string | null | undefined>,
	}
	export function CreateTeardownTagFormGroup() {
		return new FormGroup<TeardownTagFormProperties>({
			stopTeardownOnFailure: new FormControl<boolean | null | undefined>(undefined),
			tagName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Trigger */
	export interface Trigger {

		/** GTM Account ID. */
		accountId?: string | null;

		/** Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update */
		autoEventFilter?: Array<Condition>;

		/** Represents a Google Tag Manager Parameter. */
		checkValidation?: Parameter;

		/** GTM Container ID. */
		containerId?: string | null;

		/** Represents a Google Tag Manager Parameter. */
		continuousTimeMinMilliseconds?: Parameter;

		/** Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update */
		customEventFilter?: Array<Condition>;

		/** Represents a Google Tag Manager Parameter. */
		eventName?: Parameter;

		/** The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update */
		filter?: Array<Condition>;

		/** The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified. */
		fingerprint?: string | null;

		/** Represents a Google Tag Manager Parameter. */
		horizontalScrollPercentageList?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		interval?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		intervalSeconds?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		limit?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		maxTimerLengthSeconds?: Parameter;

		/** Trigger display name. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update */
		name?: string | null;

		/** Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string | null;

		/** Represents a Google Tag Manager Parameter. */
		selector?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		totalTimeMinMilliseconds?: Parameter;

		/** The Trigger ID uniquely identifies the GTM Trigger. */
		triggerId?: string | null;

		/** Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update */
		type?: TriggerType | null;

		/** Represents a Google Tag Manager Parameter. */
		uniqueTriggerId?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		verticalScrollPercentageList?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		visibilitySelector?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		visiblePercentageMax?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		visiblePercentageMin?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		waitForTags?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		waitForTagsTimeout?: Parameter;
	}

	/** Represents a Google Tag Manager Trigger */
	export interface TriggerFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Trigger display name. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update */
		name: FormControl<string | null | undefined>,

		/** Parent folder id. */
		parentFolderId: FormControl<string | null | undefined>,

		/** The Trigger ID uniquely identifies the GTM Trigger. */
		triggerId: FormControl<string | null | undefined>,

		/** Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.triggers.create @mutable tagmanager.accounts.containers.triggers.update */
		type: FormControl<TriggerType | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TriggerType | null | undefined>(undefined),
		});

	}

	export enum TriggerType { pageview = 'pageview', domReady = 'domReady', windowLoaded = 'windowLoaded', customEvent = 'customEvent', triggerGroup = 'triggerGroup', always = 'always', formSubmission = 'formSubmission', click = 'click', linkClick = 'linkClick', jsError = 'jsError', historyChange = 'historyChange', timer = 'timer', ampClick = 'ampClick', ampTimer = 'ampTimer', ampScroll = 'ampScroll', ampVisibility = 'ampVisibility', youTubeVideo = 'youTubeVideo', scrollDepth = 'scrollDepth', elementVisibility = 'elementVisibility' }


	/** Represents a Google Tag Manager Variable. */
	export interface Variable {

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		disablingTriggerId?: Array<string>;

		/** For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		enablingTriggerId?: Array<string>;

		/** The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified. */
		fingerprint?: string | null;

		/** Variable display name. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		name?: string | null;

		/** User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		notes?: string | null;

		/** The variable's parameters. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string | null;

		/** The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		scheduleEndMs?: string | null;

		/** The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		scheduleStartMs?: string | null;

		/** GTM Variable Type. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		type?: string | null;

		/** The Variable ID uniquely identifies the GTM Variable. */
		variableId?: string | null;
	}

	/** Represents a Google Tag Manager Variable. */
	export interface VariableFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Variable display name. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		notes: FormControl<string | null | undefined>,

		/** Parent folder id. */
		parentFolderId: FormControl<string | null | undefined>,

		/** The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		scheduleEndMs: FormControl<string | null | undefined>,

		/** The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		scheduleStartMs: FormControl<string | null | undefined>,

		/** GTM Variable Type. @mutable tagmanager.accounts.containers.variables.create @mutable tagmanager.accounts.containers.variables.update */
		type: FormControl<string | null | undefined>,

		/** The Variable ID uniquely identifies the GTM Variable. */
		variableId: FormControl<string | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			scheduleEndMs: new FormControl<string | null | undefined>(undefined),
			scheduleStartMs: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			variableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Container Version Header. */
	export interface ContainerVersionHeader {

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The Container Version ID uniquely identifies the GTM Container Version. */
		containerVersionId?: string | null;

		/** A value of true indicates this container version has been deleted. */
		deleted?: boolean | null;

		/** Container version display name. */
		name?: string | null;

		/** Number of macros in the container version. */
		numMacros?: string | null;

		/** Number of rules in the container version. */
		numRules?: string | null;

		/** Number of tags in the container version. */
		numTags?: string | null;

		/** Number of triggers in the container version. */
		numTriggers?: string | null;

		/** Number of variables in the container version. */
		numVariables?: string | null;
	}

	/** Represents a Google Tag Manager Container Version Header. */
	export interface ContainerVersionHeaderFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The Container Version ID uniquely identifies the GTM Container Version. */
		containerVersionId: FormControl<string | null | undefined>,

		/** A value of true indicates this container version has been deleted. */
		deleted: FormControl<boolean | null | undefined>,

		/** Container version display name. */
		name: FormControl<string | null | undefined>,

		/** Number of macros in the container version. */
		numMacros: FormControl<string | null | undefined>,

		/** Number of rules in the container version. */
		numRules: FormControl<string | null | undefined>,

		/** Number of tags in the container version. */
		numTags: FormControl<string | null | undefined>,

		/** Number of triggers in the container version. */
		numTriggers: FormControl<string | null | undefined>,

		/** Number of variables in the container version. */
		numVariables: FormControl<string | null | undefined>,
	}
	export function CreateContainerVersionHeaderFormGroup() {
		return new FormGroup<ContainerVersionHeaderFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			containerVersionId: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numMacros: new FormControl<string | null | undefined>(undefined),
			numRules: new FormControl<string | null | undefined>(undefined),
			numTags: new FormControl<string | null | undefined>(undefined),
			numTriggers: new FormControl<string | null | undefined>(undefined),
			numVariables: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options for new container versions. */
	export interface CreateContainerVersionRequestVersionOptions {

		/** The name of the container version to be created. */
		name?: string | null;

		/** The notes of the container version to be created. */
		notes?: string | null;

		/** The creation of this version may be for quick preview and shouldn't be saved. */
		quickPreview?: boolean | null;
	}

	/** Options for new container versions. */
	export interface CreateContainerVersionRequestVersionOptionsFormProperties {

		/** The name of the container version to be created. */
		name: FormControl<string | null | undefined>,

		/** The notes of the container version to be created. */
		notes: FormControl<string | null | undefined>,

		/** The creation of this version may be for quick preview and shouldn't be saved. */
		quickPreview: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateContainerVersionRequestVersionOptionsFormGroup() {
		return new FormGroup<CreateContainerVersionRequestVersionOptionsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			quickPreview: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Create container versions response. */
	export interface CreateContainerVersionResponse {

		/** Compiler errors or not. */
		compilerError?: boolean | null;

		/** Represents a Google Tag Manager Container Version. */
		containerVersion?: ContainerVersion;
	}

	/** Create container versions response. */
	export interface CreateContainerVersionResponseFormProperties {

		/** Compiler errors or not. */
		compilerError: FormControl<boolean | null | undefined>,
	}
	export function CreateCreateContainerVersionResponseFormGroup() {
		return new FormGroup<CreateContainerVersionResponseFormProperties>({
			compilerError: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types. */
	export interface Environment {

		/** GTM Account ID. */
		accountId?: string | null;

		/** The environment authorization code. */
		authorizationCode?: string | null;

		/** The last update time-stamp for the authorization code. */
		authorizationTimestampMs?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;
		containerVersionId?: string | null;

		/** The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		description?: string | null;

		/** Whether or not to enable debug by default on for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		enableDebug?: boolean | null;

		/** GTM Environment ID uniquely identifies the GTM Environment. */
		environmentId?: string | null;

		/** The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified. */
		fingerprint?: string | null;

		/** The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		name?: string | null;

		/** The type of this environment. */
		type?: EnvironmentType | null;

		/** Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		url?: string | null;
	}

	/** Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types. */
	export interface EnvironmentFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** The environment authorization code. */
		authorizationCode: FormControl<string | null | undefined>,

		/** The last update time-stamp for the authorization code. */
		authorizationTimestampMs: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,
		containerVersionId: FormControl<string | null | undefined>,

		/** The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		description: FormControl<string | null | undefined>,

		/** Whether or not to enable debug by default on for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		enableDebug: FormControl<boolean | null | undefined>,

		/** GTM Environment ID uniquely identifies the GTM Environment. */
		environmentId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		name: FormControl<string | null | undefined>,

		/** The type of this environment. */
		type: FormControl<EnvironmentType | null | undefined>,

		/** Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		url: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			authorizationCode: new FormControl<string | null | undefined>(undefined),
			authorizationTimestampMs: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			containerVersionId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enableDebug: new FormControl<boolean | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EnvironmentType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnvironmentType { user = 'user', live = 'live', latest = 'latest', draft = 'draft' }


	/** Represents a Google Tag Manager Folder's contents. */
	export interface FolderEntities {

		/** The list of tags inside the folder. */
		tag?: Array<Tag>;

		/** The list of triggers inside the folder. */
		trigger?: Array<Trigger>;

		/** The list of variables inside the folder. */
		variable?: Array<Variable>;
	}

	/** Represents a Google Tag Manager Folder's contents. */
	export interface FolderEntitiesFormProperties {
	}
	export function CreateFolderEntitiesFormGroup() {
		return new FormGroup<FolderEntitiesFormProperties>({
		});

	}


	/** List AccountUsers Response. */
	export interface ListAccountUsersResponse {

		/** All GTM AccountUsers of a GTM Account. */
		userAccess?: Array<UserAccess>;
	}

	/** List AccountUsers Response. */
	export interface ListAccountUsersResponseFormProperties {
	}
	export function CreateListAccountUsersResponseFormGroup() {
		return new FormGroup<ListAccountUsersResponseFormProperties>({
		});

	}


	/** Represents a user's permissions to an account and its container. */
	export interface UserAccess {

		/** Defines the Google Tag Manager Account access permissions. */
		accountAccess?: AccountAccess;

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		containerAccess?: Array<ContainerAccess>;

		/** User's email address. @mutable tagmanager.accounts.permissions.create */
		emailAddress?: string | null;

		/** Account Permission ID. */
		permissionId?: string | null;
	}

	/** Represents a user's permissions to an account and its container. */
	export interface UserAccessFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** User's email address. @mutable tagmanager.accounts.permissions.create */
		emailAddress: FormControl<string | null | undefined>,

		/** Account Permission ID. */
		permissionId: FormControl<string | null | undefined>,
	}
	export function CreateUserAccessFormGroup() {
		return new FormGroup<UserAccessFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			permissionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Accounts Response. */
	export interface ListAccountsResponse {

		/** List of GTM Accounts that a user has access to. */
		accounts?: Array<Account>;
	}

	/** List Accounts Response. */
	export interface ListAccountsResponseFormProperties {
	}
	export function CreateListAccountsResponseFormGroup() {
		return new FormGroup<ListAccountsResponseFormProperties>({
		});

	}


	/** List container versions response. */
	export interface ListContainerVersionsResponse {

		/** All versions of a GTM Container. */
		containerVersion?: Array<ContainerVersion>;

		/** All container version headers of a GTM Container. */
		containerVersionHeader?: Array<ContainerVersionHeader>;
	}

	/** List container versions response. */
	export interface ListContainerVersionsResponseFormProperties {
	}
	export function CreateListContainerVersionsResponseFormGroup() {
		return new FormGroup<ListContainerVersionsResponseFormProperties>({
		});

	}


	/** List Containers Response. */
	export interface ListContainersResponse {

		/** All Containers of a GTM Account. */
		containers?: Array<Container>;
	}

	/** List Containers Response. */
	export interface ListContainersResponseFormProperties {
	}
	export function CreateListContainersResponseFormGroup() {
		return new FormGroup<ListContainersResponseFormProperties>({
		});

	}


	/** List Environments Response. */
	export interface ListEnvironmentsResponse {

		/** All Environments of a GTM Container. */
		environments?: Array<Environment>;
	}

	/** List Environments Response. */
	export interface ListEnvironmentsResponseFormProperties {
	}
	export function CreateListEnvironmentsResponseFormGroup() {
		return new FormGroup<ListEnvironmentsResponseFormProperties>({
		});

	}


	/** List Folders Response. */
	export interface ListFoldersResponse {

		/** All GTM Folders of a GTM Container. */
		folders?: Array<Folder>;
	}

	/** List Folders Response. */
	export interface ListFoldersResponseFormProperties {
	}
	export function CreateListFoldersResponseFormGroup() {
		return new FormGroup<ListFoldersResponseFormProperties>({
		});

	}


	/** List Tags Response. */
	export interface ListTagsResponse {

		/** All GTM Tags of a GTM Container. */
		tags?: Array<Tag>;
	}

	/** List Tags Response. */
	export interface ListTagsResponseFormProperties {
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
		});

	}


	/** List triggers response. */
	export interface ListTriggersResponse {

		/** All GTM Triggers of a GTM Container. */
		triggers?: Array<Trigger>;
	}

	/** List triggers response. */
	export interface ListTriggersResponseFormProperties {
	}
	export function CreateListTriggersResponseFormGroup() {
		return new FormGroup<ListTriggersResponseFormProperties>({
		});

	}


	/** List Variables Response. */
	export interface ListVariablesResponse {

		/** All GTM Variables of a GTM Container. */
		variables?: Array<Variable>;
	}

	/** List Variables Response. */
	export interface ListVariablesResponseFormProperties {
	}
	export function CreateListVariablesResponseFormGroup() {
		return new FormGroup<ListVariablesResponseFormProperties>({
		});

	}


	/** Publish container version response. */
	export interface PublishContainerVersionResponse {

		/** Compiler errors or not. */
		compilerError?: boolean | null;

		/** Represents a Google Tag Manager Container Version. */
		containerVersion?: ContainerVersion;
	}

	/** Publish container version response. */
	export interface PublishContainerVersionResponseFormProperties {

		/** Compiler errors or not. */
		compilerError: FormControl<boolean | null | undefined>,
	}
	export function CreatePublishContainerVersionResponseFormGroup() {
		return new FormGroup<PublishContainerVersionResponseFormProperties>({
			compilerError: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all GTM Accounts that a user has access to.
		 * Get tagmanager/v1/accounts
		 * @return {ListAccountsResponse} Successful response
		 */
		Tagmanager_accounts_list(): Observable<ListAccountsResponse> {
			return this.http.get<ListAccountsResponse>(this.baseUri + 'tagmanager/v1/accounts', {});
		}

		/**
		 * Gets a GTM Account.
		 * Get tagmanager/v1/accounts/{accountId}
		 * @param {string} accountId The GTM Account ID.
		 * @return {Account} Successful response
		 */
		Tagmanager_accounts_get(accountId: string): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), {});
		}

		/**
		 * Updates a GTM Account.
		 * Put tagmanager/v1/accounts/{accountId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the account in storage.
		 * @return {Account} Successful response
		 */
		Tagmanager_accounts_update(accountId: string, fingerprint: string | null | undefined, requestBody: Account): Observable<Account> {
			return this.http.put<Account>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Containers that belongs to a GTM Account.
		 * Get tagmanager/v1/accounts/{accountId}/containers
		 * @param {string} accountId The GTM Account ID.
		 * @return {ListContainersResponse} Successful response
		 */
		Tagmanager_accounts_containers_list(accountId: string): Observable<ListContainersResponse> {
			return this.http.get<ListContainersResponse>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers', {});
		}

		/**
		 * Creates a Container.
		 * Post tagmanager/v1/accounts/{accountId}/containers
		 * @param {string} accountId The GTM Account ID.
		 * @return {Container} Successful response
		 */
		Tagmanager_accounts_containers_create(accountId: string, requestBody: Container): Observable<Container> {
			return this.http.post<Container>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Container.
		 * Delete tagmanager/v1/accounts/{accountId}/containers/{containerId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_delete(accountId: string, containerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {Container} Successful response
		 */
		Tagmanager_accounts_containers_get(accountId: string, containerId: string): Observable<Container> {
			return this.http.get<Container>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)), {});
		}

		/**
		 * Updates a Container.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the container in storage.
		 * @return {Container} Successful response
		 */
		Tagmanager_accounts_containers_update(accountId: string, containerId: string, fingerprint: string | null | undefined, requestBody: Container): Observable<Container> {
			return this.http.put<Container>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Environments of a GTM Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {ListEnvironmentsResponse} Successful response
		 */
		Tagmanager_accounts_containers_environments_list(accountId: string, containerId: string): Observable<ListEnvironmentsResponse> {
			return this.http.get<ListEnvironmentsResponse>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/environments', {});
		}

		/**
		 * Creates a GTM Environment.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {Environment} Successful response
		 */
		Tagmanager_accounts_containers_environments_create(accountId: string, containerId: string, requestBody: Environment): Observable<Environment> {
			return this.http.post<Environment>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a GTM Environment.
		 * Delete tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} environmentId The GTM Environment ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_environments_delete(accountId: string, containerId: string, environmentId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a GTM Environment.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} environmentId The GTM Environment ID.
		 * @return {Environment} Successful response
		 */
		Tagmanager_accounts_containers_environments_get(accountId: string, containerId: string, environmentId: string): Observable<Environment> {
			return this.http.get<Environment>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), {});
		}

		/**
		 * Updates a GTM Environment.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} environmentId The GTM Environment ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the environment in storage.
		 * @return {Environment} Successful response
		 */
		Tagmanager_accounts_containers_environments_update(accountId: string, containerId: string, environmentId: string, fingerprint: string | null | undefined, requestBody: Environment): Observable<Environment> {
			return this.http.put<Environment>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Folders of a Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {ListFoldersResponse} Successful response
		 */
		Tagmanager_accounts_containers_folders_list(accountId: string, containerId: string): Observable<ListFoldersResponse> {
			return this.http.get<ListFoldersResponse>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders', {});
		}

		/**
		 * Creates a GTM Folder.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {Folder} Successful response
		 */
		Tagmanager_accounts_containers_folders_create(accountId: string, containerId: string, requestBody: Folder): Observable<Folder> {
			return this.http.post<Folder>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a GTM Folder.
		 * Delete tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} folderId The GTM Folder ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_folders_delete(accountId: string, containerId: string, folderId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders/' + (folderId == null ? '' : encodeURIComponent(folderId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a GTM Folder.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} folderId The GTM Folder ID.
		 * @return {Folder} Successful response
		 */
		Tagmanager_accounts_containers_folders_get(accountId: string, containerId: string, folderId: string): Observable<Folder> {
			return this.http.get<Folder>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders/' + (folderId == null ? '' : encodeURIComponent(folderId)), {});
		}

		/**
		 * Updates a GTM Folder.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} folderId The GTM Folder ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the folder in storage.
		 * @return {Folder} Successful response
		 */
		Tagmanager_accounts_containers_folders_update(accountId: string, containerId: string, folderId: string, fingerprint: string | null | undefined, requestBody: Folder): Observable<Folder> {
			return this.http.put<Folder>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all entities in a GTM Folder.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}/entities
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} folderId The GTM Folder ID.
		 * @return {FolderEntities} Successful response
		 */
		Tagmanager_accounts_containers_folders_entities_list(accountId: string, containerId: string, folderId: string): Observable<FolderEntities> {
			return this.http.get<FolderEntities>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '/entities', {});
		}

		/**
		 * Moves entities to a GTM Folder.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/move_folders/{folderId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} folderId The GTM Folder ID.
		 * @param {Array<string>} tagId The tags to be moved to the folder.
		 * @param {Array<string>} triggerId The triggers to be moved to the folder.
		 * @param {Array<string>} variableId The variables to be moved to the folder.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_move_folders_update(accountId: string, containerId: string, folderId: string, tagId: Array<string> | null | undefined, triggerId: Array<string> | null | undefined, variableId: Array<string> | null | undefined, requestBody: Folder): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/move_folders/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '&' + tagId?.map(z => `tagId=${encodeURIComponent(z)}`).join('&') + '&' + triggerId?.map(z => `triggerId=${encodeURIComponent(z)}`).join('&') + '&' + variableId?.map(z => `variableId=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Re-generates the authorization code for a GTM Environment.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/reauthorize_environments/{environmentId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} environmentId The GTM Environment ID.
		 * @return {Environment} Successful response
		 */
		Tagmanager_accounts_containers_reauthorize_environments_update(accountId: string, containerId: string, environmentId: string, requestBody: Environment): Observable<Environment> {
			return this.http.put<Environment>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/reauthorize_environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Tags of a Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {ListTagsResponse} Successful response
		 */
		Tagmanager_accounts_containers_tags_list(accountId: string, containerId: string): Observable<ListTagsResponse> {
			return this.http.get<ListTagsResponse>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/tags', {});
		}

		/**
		 * Creates a GTM Tag.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {Tag} Successful response
		 */
		Tagmanager_accounts_containers_tags_create(accountId: string, containerId: string, requestBody: Tag): Observable<Tag> {
			return this.http.post<Tag>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a GTM Tag.
		 * Delete tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} tagId The GTM Tag ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_tags_delete(accountId: string, containerId: string, tagId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a GTM Tag.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} tagId The GTM Tag ID.
		 * @return {Tag} Successful response
		 */
		Tagmanager_accounts_containers_tags_get(accountId: string, containerId: string, tagId: string): Observable<Tag> {
			return this.http.get<Tag>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)), {});
		}

		/**
		 * Updates a GTM Tag.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} tagId The GTM Tag ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the tag in storage.
		 * @return {Tag} Successful response
		 */
		Tagmanager_accounts_containers_tags_update(accountId: string, containerId: string, tagId: string, fingerprint: string | null | undefined, requestBody: Tag): Observable<Tag> {
			return this.http.put<Tag>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Triggers of a Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {ListTriggersResponse} Successful response
		 */
		Tagmanager_accounts_containers_triggers_list(accountId: string, containerId: string): Observable<ListTriggersResponse> {
			return this.http.get<ListTriggersResponse>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/triggers', {});
		}

		/**
		 * Creates a GTM Trigger.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {Trigger} Successful response
		 */
		Tagmanager_accounts_containers_triggers_create(accountId: string, containerId: string, requestBody: Trigger): Observable<Trigger> {
			return this.http.post<Trigger>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/triggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a GTM Trigger.
		 * Delete tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} triggerId The GTM Trigger ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_triggers_delete(accountId: string, containerId: string, triggerId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a GTM Trigger.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} triggerId The GTM Trigger ID.
		 * @return {Trigger} Successful response
		 */
		Tagmanager_accounts_containers_triggers_get(accountId: string, containerId: string, triggerId: string): Observable<Trigger> {
			return this.http.get<Trigger>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)), {});
		}

		/**
		 * Updates a GTM Trigger.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} triggerId The GTM Trigger ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the trigger in storage.
		 * @return {Trigger} Successful response
		 */
		Tagmanager_accounts_containers_triggers_update(accountId: string, containerId: string, triggerId: string, fingerprint: string | null | undefined, requestBody: Trigger): Observable<Trigger> {
			return this.http.put<Trigger>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Variables of a Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {ListVariablesResponse} Successful response
		 */
		Tagmanager_accounts_containers_variables_list(accountId: string, containerId: string): Observable<ListVariablesResponse> {
			return this.http.get<ListVariablesResponse>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/variables', {});
		}

		/**
		 * Creates a GTM Variable.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {Variable} Successful response
		 */
		Tagmanager_accounts_containers_variables_create(accountId: string, containerId: string, requestBody: Variable): Observable<Variable> {
			return this.http.post<Variable>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/variables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a GTM Variable.
		 * Delete tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} variableId The GTM Variable ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_variables_delete(accountId: string, containerId: string, variableId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/variables/' + (variableId == null ? '' : encodeURIComponent(variableId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a GTM Variable.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} variableId The GTM Variable ID.
		 * @return {Variable} Successful response
		 */
		Tagmanager_accounts_containers_variables_get(accountId: string, containerId: string, variableId: string): Observable<Variable> {
			return this.http.get<Variable>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/variables/' + (variableId == null ? '' : encodeURIComponent(variableId)), {});
		}

		/**
		 * Updates a GTM Variable.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} variableId The GTM Variable ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the variable in storage.
		 * @return {Variable} Successful response
		 */
		Tagmanager_accounts_containers_variables_update(accountId: string, containerId: string, variableId: string, fingerprint: string | null | undefined, requestBody: Variable): Observable<Variable> {
			return this.http.put<Variable>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/variables/' + (variableId == null ? '' : encodeURIComponent(variableId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Container Versions of a GTM Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {boolean} headers Retrieve headers only when true.
		 * @param {boolean} includeDeleted Also retrieve deleted (archived) versions when true.
		 * @return {ListContainerVersionsResponse} Successful response
		 */
		Tagmanager_accounts_containers_versions_list(accountId: string, containerId: string, headers: boolean | null | undefined, includeDeleted: boolean | null | undefined): Observable<ListContainerVersionsResponse> {
			return this.http.get<ListContainerVersionsResponse>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions&headers=' + headers + '&includeDeleted=' + includeDeleted, {});
		}

		/**
		 * Creates a Container Version.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {CreateContainerVersionResponse} Successful response
		 */
		Tagmanager_accounts_containers_versions_create(accountId: string, containerId: string, requestBody: CreateContainerVersionRequestVersionOptions): Observable<CreateContainerVersionResponse> {
			return this.http.post<CreateContainerVersionResponse>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Deletes a Container Version.
		 * Delete tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} containerVersionId The GTM Container Version ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_versions_delete(accountId: string, containerId: string, containerVersionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Container Version.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} containerVersionId The GTM Container Version ID. Specify published to retrieve the currently published version.
		 * @return {ContainerVersion} Successful response
		 */
		Tagmanager_accounts_containers_versions_get(accountId: string, containerId: string, containerVersionId: string): Observable<ContainerVersion> {
			return this.http.get<ContainerVersion>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)), {});
		}

		/**
		 * Updates a Container Version.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} containerVersionId The GTM Container Version ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
		 * @return {ContainerVersion} Successful response
		 */
		Tagmanager_accounts_containers_versions_update(accountId: string, containerId: string, containerVersionId: string, fingerprint: string | null | undefined, requestBody: ContainerVersion): Observable<ContainerVersion> {
			return this.http.put<ContainerVersion>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Publishes a Container Version.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/publish
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} containerVersionId The GTM Container Version ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
		 * @return {PublishContainerVersionResponse} Successful response
		 */
		Tagmanager_accounts_containers_versions_publish(accountId: string, containerId: string, containerVersionId: string, fingerprint: string | null | undefined): Observable<PublishContainerVersionResponse> {
			return this.http.post<PublishContainerVersionResponse>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)) + '/publish&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), null, {});
		}

		/**
		 * Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/restore
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} containerVersionId The GTM Container Version ID.
		 * @return {ContainerVersion} Successful response
		 */
		Tagmanager_accounts_containers_versions_restore(accountId: string, containerId: string, containerVersionId: string): Observable<ContainerVersion> {
			return this.http.post<ContainerVersion>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)) + '/restore', null, {});
		}

		/**
		 * Undeletes a Container Version.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/undelete
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} containerVersionId The GTM Container Version ID.
		 * @return {ContainerVersion} Successful response
		 */
		Tagmanager_accounts_containers_versions_undelete(accountId: string, containerId: string, containerVersionId: string): Observable<ContainerVersion> {
			return this.http.post<ContainerVersion>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)) + '/undelete', null, {});
		}

		/**
		 * List all users that have access to the account along with Account and Container Permissions granted to each of them.
		 * Get tagmanager/v1/accounts/{accountId}/permissions
		 * @param {string} accountId The GTM Account ID.
		 * @return {ListAccountUsersResponse} Successful response
		 */
		Tagmanager_accounts_permissions_list(accountId: string): Observable<ListAccountUsersResponse> {
			return this.http.get<ListAccountUsersResponse>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/permissions', {});
		}

		/**
		 * Creates a user's Account & Container Permissions.
		 * Post tagmanager/v1/accounts/{accountId}/permissions
		 * @param {string} accountId The GTM Account ID.
		 * @return {UserAccess} Successful response
		 */
		Tagmanager_accounts_permissions_create(accountId: string, requestBody: UserAccess): Observable<UserAccess> {
			return this.http.post<UserAccess>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a user from the account, revoking access to it and all of its containers.
		 * Delete tagmanager/v1/accounts/{accountId}/permissions/{permissionId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} permissionId The GTM User ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_permissions_delete(accountId: string, permissionId: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a user's Account & Container Permissions.
		 * Get tagmanager/v1/accounts/{accountId}/permissions/{permissionId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} permissionId The GTM User ID.
		 * @return {UserAccess} Successful response
		 */
		Tagmanager_accounts_permissions_get(accountId: string, permissionId: string): Observable<UserAccess> {
			return this.http.get<UserAccess>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)), {});
		}

		/**
		 * Updates a user's Account & Container Permissions.
		 * Put tagmanager/v1/accounts/{accountId}/permissions/{permissionId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} permissionId The GTM User ID.
		 * @return {UserAccess} Successful response
		 */
		Tagmanager_accounts_permissions_update(accountId: string, permissionId: string, requestBody: UserAccess): Observable<UserAccess> {
			return this.http.put<UserAccess>(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

