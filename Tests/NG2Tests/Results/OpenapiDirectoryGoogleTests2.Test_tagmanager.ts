import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace MyNS {

	/** Represents a Google Tag Manager Account. */
	export interface Account {

		/** The Account ID uniquely identifies the GTM Account. */
		accountId?: string;

		/**
		 * The fingerprint of the GTM Account as computed at storage time.
		 * This value is recomputed whenever the account is modified.
		 */
		fingerprint?: string;

		/**
		 * Account display name.
		 * @mutable tagmanager.accounts.create
		 * @mutable tagmanager.accounts.update
		 */
		name?: string;

		/**
		 * Whether the account shares data anonymously with Google and others.
		 * @mutable tagmanager.accounts.create
		 * @mutable tagmanager.accounts.update
		 */
		shareData?: boolean;
	}


	/** Defines the Google Tag Manager Account access permissions. */
	export interface AccountAccess {

		/**
		 * List of Account permissions.
		 * Valid account permissions are <code>read</code> and <code>manage</code>.
		 * @mutable tagmanager.accounts.permissions.create
		 * @mutable tagmanager.accounts.permissions.update
		 */
		permission?: Array<string>;
	}


	/** Represents a predicate. */
	export interface Condition {

		/**
		 * A list of named parameters (key/value), depending on the condition's type.
		 * Notes:<ul>
		 * <li>For binary operators, include parameters named <code>arg0</code> and
		 * <code>arg1</code> for specifying the left and right operands,
		 * respectively.</li>
		 * <li>At this time, the left operand (<code>arg0</code>) must be a reference
		 * to a variable.</li>
		 * <li>For case-insensitive Regex matching, include a boolean parameter named
		 * <code>ignore_case</code> that is set to <code>true</code>.
		 * If not specified or set to any other value, the matching will be case
		 * sensitive.</li>
		 * <li>To negate an operator, include a boolean parameter named
		 * <code>negate</code> boolean parameter that is set to <code>true</code>.
		 * </li>
		 * </ul>
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 */
		parameter?: Array<Parameter>;

		/**
		 * The type of operator for this condition.
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 */
		type?: ConditionType;
	}


	/** Represents a Google Tag Manager Parameter. */
	export interface Parameter {

		/**
		 * The named key that uniquely identifies a parameter.  Required for top-level
		 * parameters, as well as map values.  Ignored for list values.
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		key?: string;

		/**
		 * This list parameter's parameters (keys will be ignored).
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		list?: Array<Parameter>;

		/**
		 * This map parameter's parameters (must have keys; keys must be unique).
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		map?: Array<Parameter>;

		/**
		 * The parameter type.  Valid values are:<ul>
		 * <li><code>boolean</code>: The value represents a boolean, represented as
		 * 'true' or 'false'</li>
		 * <li><code>integer</code>: The value represents a 64-bit signed integer
		 * value, in base 10</li>
		 * <li><code>list</code>: A list of parameters should be specified</li>
		 * <li><code>map</code>: A map of parameters should be specified</li>
		 * <li><code>template</code>: The value represents any text; this can include
		 * variable references (even variable references that might return
		 * non-string types)</li>
		 * <li><code>trigger_reference</code>: The value represents a trigger,
		 * represented as the trigger id</li>
		 * <li><code>tag_reference</code>: The value represents a tag, represented as
		 * the tag name</li>
		 * </ul>
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		type?: ParameterType;

		/**
		 * A parameter's value (may contain variable references such as
		 * "{{myVariable}}")
		 * as appropriate to the specified type.
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		value?: string;
	}

	export enum ParameterType { template = 0, integer = 1, boolean = 2, list = 3, map = 4, triggerReference = 5, tagReference = 6 }

	export enum ConditionType { equals = 0, contains = 1, startsWith = 2, endsWith = 3, matchRegex = 4, greater = 5, greaterOrEquals = 6, less = 7, lessOrEquals = 8, cssSelector = 9, urlMatches = 10 }


	/** Represents a Google Tag Manager Container. */
	export interface Container {

		/** GTM Account ID. */
		accountId?: string;

		/** The Container ID uniquely identifies the GTM Container. */
		containerId?: string;

		/**
		 * Optional list of domain names associated with the Container.
		 * @mutable tagmanager.accounts.containers.create
		 * @mutable tagmanager.accounts.containers.update
		 */
		domainName?: Array<string>;

		/**
		 * List of enabled built-in variables. Valid values include: <code>pageUrl,
		 * pageHostname, pagePath, referrer, event, clickElement, clickClasses,
		 * clickId, clickTarget, clickUrl, clickText, formElement, formClasses,
		 * formId, formTarget, formUrl, formText, errorMessage, errorUrl, errorLine,
		 * newHistoryFragment, oldHistoryFragment, newHistoryState, oldHistoryState,
		 * historySource, containerVersion, debugMode, randomNumber,
		 * containerId</code>.
		 * @mutable tagmanager.accounts.containers.create
		 * @mutable tagmanager.accounts.containers.update
		 */
		enabledBuiltInVariable?: Array<string>;

		/**
		 * The fingerprint of the GTM Container as computed at storage time.  This
		 * value is recomputed whenever the account is modified.
		 */
		fingerprint?: string;

		/**
		 * Container display name.
		 * @mutable tagmanager.accounts.containers.create
		 * @mutable tagmanager.accounts.containers.update
		 */
		name?: string;

		/**
		 * Container Notes.
		 * @mutable tagmanager.accounts.containers.create
		 * @mutable tagmanager.accounts.containers.update
		 */
		notes?: string;

		/** Container Public ID. */
		publicId?: string;

		/**
		 * Container Country ID.
		 * @mutable tagmanager.accounts.containers.create
		 * @mutable tagmanager.accounts.containers.update
		 */
		timeZoneCountryId?: string;

		/**
		 * Container Time Zone ID.
		 * @mutable tagmanager.accounts.containers.create
		 * @mutable tagmanager.accounts.containers.update
		 */
		timeZoneId?: string;

		/**
		 * List of Usage Contexts for the Container. Valid values include: <code>web,
		 * android, ios</code>.
		 * @mutable tagmanager.accounts.containers.create
		 * @mutable tagmanager.accounts.containers.update
		 */
		usageContext?: Array<string>;
	}


	/** Defines the Google Tag Manager Container access permissions. */
	export interface ContainerAccess {

		/**
		 * GTM Container ID.
		 * @mutable tagmanager.accounts.permissions.create
		 * @mutable tagmanager.accounts.permissions.update
		 */
		containerId?: string;

		/**
		 * List of Container permissions.
		 * Valid container permissions are: <code>read, edit, delete, publish</code>.
		 * @mutable tagmanager.accounts.permissions.create
		 * @mutable tagmanager.accounts.permissions.update
		 */
		permission?: Array<string>;
	}


	/** Represents a Google Tag Manager Container Version. */
	export interface ContainerVersion {

		/** GTM Account ID. */
		accountId?: string;

		/** Represents a Google Tag Manager Container. */
		container?: Container;

		/** GTM Container ID. */
		containerId?: string;

		/** The Container Version ID uniquely identifies the GTM Container Version. */
		containerVersionId?: string;

		/** A value of true indicates this container version has been deleted. */
		deleted?: boolean;

		/**
		 * The fingerprint of the GTM Container Version as computed at
		 * storage time. This value is recomputed whenever the container version is
		 * modified.
		 */
		fingerprint?: string;

		/** The folders in the container that this version was taken from. */
		folder?: Array<Folder>;

		/** The macros in the container that this version was taken from. */
		macro?: Array<Macro>;

		/**
		 * Container version display name.
		 * @mutable tagmanager.accounts.containers.versions.update
		 */
		name?: string;

		/**
		 * User notes on how to apply this container version in the
		 * container.
		 * @mutable tagmanager.accounts.containers.versions.update
		 */
		notes?: string;

		/** The rules in the container that this version was taken from. */
		rule?: Array<Rule>;

		/** The tags in the container that this version was taken from. */
		tag?: Array<Tag>;

		/** The triggers in the container that this version was taken from. */
		trigger?: Array<Trigger>;

		/** The variables in the container that this version was taken from. */
		variable?: Array<Variable>;
	}


	/** Represents a Google Tag Manager Folder. */
	export interface Folder {

		/** GTM Account ID. */
		accountId?: string;

		/** GTM Container ID. */
		containerId?: string;

		/**
		 * The fingerprint of the GTM Folder as computed at storage time.
		 * This value is recomputed whenever the folder is modified.
		 */
		fingerprint?: string;

		/** The Folder ID uniquely identifies the GTM Folder. */
		folderId?: string;

		/**
		 * Folder display name.
		 * @mutable tagmanager.accounts.containers.folders.create
		 * @mutable tagmanager.accounts.containers.folders.update
		 */
		name?: string;
	}


	/** Represents a Google Tag Manager Macro. */
	export interface Macro {

		/** GTM Account ID. */
		accountId?: string;

		/** GTM Container ID. */
		containerId?: string;

		/**
		 * For mobile containers only: A list of rule IDs for disabling conditional
		 * macros; the macro is enabled if one of the enabling rules is true while all
		 * the disabling rules are false. Treated as an unordered set.
		 * @mutable tagmanager.accounts.containers.macros.create
		 * @mutable tagmanager.accounts.containers.macros.update
		 */
		disablingRuleId?: Array<string>;

		/**
		 * For mobile containers only: A list of rule IDs for enabling conditional
		 * macros; the macro is enabled if one of the enabling rules is true while all
		 * the disabling rules are false. Treated as an unordered set.
		 * @mutable tagmanager.accounts.containers.macros.create
		 * @mutable tagmanager.accounts.containers.macros.update
		 */
		enablingRuleId?: Array<string>;

		/**
		 * The fingerprint of the GTM Macro as computed at storage time.
		 * This value is recomputed whenever the macro is modified.
		 */
		fingerprint?: string;

		/** The Macro ID uniquely identifies the GTM Macro. */
		macroId?: string;

		/**
		 * Macro display name.
		 * @mutable tagmanager.accounts.containers.macros.create
		 * @mutable tagmanager.accounts.containers.macros.update
		 */
		name?: string;

		/**
		 * User notes on how to apply this macro in the container.
		 * @mutable tagmanager.accounts.containers.macros.create
		 * @mutable tagmanager.accounts.containers.macros.update
		 */
		notes?: string;

		/**
		 * The macro's parameters.
		 * @mutable tagmanager.accounts.containers.macros.create
		 * @mutable tagmanager.accounts.containers.macros.update
		 */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string;

		/**
		 * The end timestamp in milliseconds to schedule a macro.
		 * @mutable tagmanager.accounts.containers.macros.create
		 * @mutable tagmanager.accounts.containers.macros.update
		 */
		scheduleEndMs?: string;

		/**
		 * The start timestamp in milliseconds to schedule a macro.
		 * @mutable tagmanager.accounts.containers.macros.create
		 * @mutable tagmanager.accounts.containers.macros.update
		 */
		scheduleStartMs?: string;

		/**
		 * GTM Macro Type.
		 * @mutable tagmanager.accounts.containers.macros.create
		 * @mutable tagmanager.accounts.containers.macros.update
		 */
		type?: string;
	}


	/** Represents a Google Tag Manager Rule. */
	export interface Rule {

		/** GTM Account ID. */
		accountId?: string;

		/**
		 * The list of conditions that make up this rule (implicit AND between them).
		 * @mutable tagmanager.accounts.containers.rules.create
		 * @mutable tagmanager.accounts.containers.rules.update
		 */
		condition?: Array<Condition>;

		/** GTM Container ID. */
		containerId?: string;

		/**
		 * The fingerprint of the GTM Rule as computed at storage time.
		 * This value is recomputed whenever the rule is modified.
		 */
		fingerprint?: string;

		/**
		 * Rule display name.
		 * @mutable tagmanager.accounts.containers.rules.create
		 * @mutable tagmanager.accounts.containers.rules.update
		 */
		name?: string;

		/**
		 * User notes on how to apply this rule in the container.
		 * @mutable tagmanager.accounts.containers.rules.create
		 * @mutable tagmanager.accounts.containers.rules.update
		 */
		notes?: string;

		/** The Rule ID uniquely identifies the GTM Rule. */
		ruleId?: string;
	}


	/** Represents a Google Tag Manager Tag. */
	export interface Tag {

		/** GTM Account ID. */
		accountId?: string;

		/**
		 * Blocking rule IDs. If any of the listed rules evaluate to true, the tag
		 * will not fire.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		blockingRuleId?: Array<string>;

		/**
		 * Blocking trigger IDs. If any of the listed triggers evaluate to true, the
		 * tag
		 * will not fire.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		blockingTriggerId?: Array<string>;

		/** GTM Container ID. */
		containerId?: string;

		/**
		 * The fingerprint of the GTM Tag as computed at storage time.
		 * This value is recomputed whenever the tag is modified.
		 */
		fingerprint?: string;

		/**
		 * Firing rule IDs. A tag will fire when any of the listed rules are true and
		 * all of its <code>blockingRuleIds</code> (if any specified) are false.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		firingRuleId?: Array<string>;

		/**
		 * Firing trigger IDs. A tag will fire when any of the listed triggers are
		 * true and all of its <code>blockingTriggerIds</code> (if any specified) are
		 * false.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		firingTriggerId?: Array<string>;

		/**
		 * If set to true, this tag will only fire in the live environment (e.g. not
		 * in preview or debug mode).
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		liveOnly?: boolean;

		/**
		 * Tag display name.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		name?: string;

		/**
		 * User notes on how to apply this tag in the container.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		notes?: string;

		/**
		 * The tag's parameters.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string;

		/**
		 * True if the tag is paused.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		paused?: boolean;

		/** Represents a Google Tag Manager Parameter. */
		priority?: Parameter;

		/**
		 * The end timestamp in milliseconds to schedule a tag.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		scheduleEndMs?: string;

		/**
		 * The start timestamp in milliseconds to schedule a tag.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		scheduleStartMs?: string;

		/** The list of setup tags. Currently we only allow one. */
		setupTag?: Array<SetupTag>;

		/** Option to fire this tag. */
		tagFiringOption?: TagTagFiringOption;

		/** The Tag ID uniquely identifies the GTM Tag. */
		tagId?: string;

		/** The list of teardown tags. Currently we only allow one. */
		teardownTag?: Array<TeardownTag>;

		/**
		 * GTM Tag Type.
		 * @mutable tagmanager.accounts.containers.tags.create
		 * @mutable tagmanager.accounts.containers.tags.update
		 */
		type?: string;
	}

	export interface SetupTag {

		/**
		 * If true, fire the main tag if and only if the setup tag fires
		 * successfully.
		 * If false, fire the main tag regardless of setup tag firing status.
		 */
		stopOnSetupFailure?: boolean;

		/** The name of the setup tag. */
		tagName?: string;
	}

	export enum TagTagFiringOption { unlimited = 0, oncePerEvent = 1, oncePerLoad = 2 }

	export interface TeardownTag {

		/**
		 * If true, fire the teardown tag if and only if the main tag fires
		 * successfully.
		 * If false, fire the teardown tag regardless of main tag firing status.
		 */
		stopTeardownOnFailure?: boolean;

		/** The name of the teardown tag. */
		tagName?: string;
	}


	/** Represents a Google Tag Manager Trigger */
	export interface Trigger {

		/** GTM Account ID. */
		accountId?: string;

		/**
		 * Used in the case of auto event tracking.
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 */
		autoEventFilter?: Array<Condition>;

		/** Represents a Google Tag Manager Parameter. */
		checkValidation?: Parameter;

		/** GTM Container ID. */
		containerId?: string;

		/** Represents a Google Tag Manager Parameter. */
		continuousTimeMinMilliseconds?: Parameter;

		/**
		 * Used in the case of custom event, which is fired iff all Conditions are
		 * true.
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 */
		customEventFilter?: Array<Condition>;

		/** Represents a Google Tag Manager Parameter. */
		eventName?: Parameter;

		/**
		 * The trigger will only fire iff all Conditions are true.
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 */
		filter?: Array<Condition>;

		/**
		 * The fingerprint of the GTM Trigger as computed at storage time.
		 * This value is recomputed whenever the trigger is modified.
		 */
		fingerprint?: string;

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

		/**
		 * Trigger display name.
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 */
		name?: string;

		/**
		 * Additional parameters.
		 * @mutable tagmanager.accounts.containers.workspaces.triggers.create
		 * @mutable tagmanager.accounts.containers.workspaces.triggers.update
		 */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string;

		/** Represents a Google Tag Manager Parameter. */
		selector?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		totalTimeMinMilliseconds?: Parameter;

		/** The Trigger ID uniquely identifies the GTM Trigger. */
		triggerId?: string;

		/**
		 * Defines the data layer event that causes this trigger.
		 * @mutable tagmanager.accounts.containers.triggers.create
		 * @mutable tagmanager.accounts.containers.triggers.update
		 */
		type?: TriggerType;

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

	export enum TriggerType { pageview = 0, domReady = 1, windowLoaded = 2, customEvent = 3, triggerGroup = 4, always = 5, formSubmission = 6, click = 7, linkClick = 8, jsError = 9, historyChange = 10, timer = 11, ampClick = 12, ampTimer = 13, ampScroll = 14, ampVisibility = 15, youTubeVideo = 16, scrollDepth = 17, elementVisibility = 18 }


	/** Represents a Google Tag Manager Variable. */
	export interface Variable {

		/** GTM Account ID. */
		accountId?: string;

		/** GTM Container ID. */
		containerId?: string;

		/**
		 * For mobile containers only: A list of trigger IDs for disabling conditional
		 * variables; the variable is enabled if one of the enabling trigger is true
		 * while all the disabling trigger are false. Treated as an unordered set.
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 */
		disablingTriggerId?: Array<string>;

		/**
		 * For mobile containers only: A list of trigger IDs for enabling conditional
		 * variables; the variable is enabled if one of the enabling triggers is true
		 * while all the disabling triggers are false. Treated as an unordered set.
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 */
		enablingTriggerId?: Array<string>;

		/**
		 * The fingerprint of the GTM Variable as computed at storage time.
		 * This value is recomputed whenever the variable is modified.
		 */
		fingerprint?: string;

		/**
		 * Variable display name.
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 */
		name?: string;

		/**
		 * User notes on how to apply this variable in the container.
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 */
		notes?: string;

		/**
		 * The variable's parameters.
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string;

		/**
		 * The end timestamp in milliseconds to schedule a variable.
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 */
		scheduleEndMs?: string;

		/**
		 * The start timestamp in milliseconds to schedule a variable.
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 */
		scheduleStartMs?: string;

		/**
		 * GTM Variable Type.
		 * @mutable tagmanager.accounts.containers.variables.create
		 * @mutable tagmanager.accounts.containers.variables.update
		 */
		type?: string;

		/** The Variable ID uniquely identifies the GTM Variable. */
		variableId?: string;
	}


	/** Represents a Google Tag Manager Container Version Header. */
	export interface ContainerVersionHeader {

		/** GTM Account ID. */
		accountId?: string;

		/** GTM Container ID. */
		containerId?: string;

		/** The Container Version ID uniquely identifies the GTM Container Version. */
		containerVersionId?: string;

		/** A value of true indicates this container version has been deleted. */
		deleted?: boolean;

		/** Container version display name. */
		name?: string;

		/** Number of macros in the container version. */
		numMacros?: string;

		/** Number of rules in the container version. */
		numRules?: string;

		/** Number of tags in the container version. */
		numTags?: string;

		/** Number of triggers in the container version. */
		numTriggers?: string;

		/** Number of variables in the container version. */
		numVariables?: string;
	}


	/** Options for new container versions. */
	export interface CreateContainerVersionRequestVersionOptions {

		/** The name of the container version to be created. */
		name?: string;

		/** The notes of the container version to be created. */
		notes?: string;

		/**
		 * The creation of this version may be for quick preview and
		 * shouldn't be saved.
		 */
		quickPreview?: boolean;
	}


	/** Create container versions response. */
	export interface CreateContainerVersionResponse {

		/** Compiler errors or not. */
		compilerError?: boolean;

		/** Represents a Google Tag Manager Container Version. */
		containerVersion?: ContainerVersion;
	}


	/**
	 * Represents a Google Tag Manager Environment. Note that a user can create,
	 * delete and update environments of type USER, but can only update the
	 * enable_debug and url fields of environments of other types.
	 */
	export interface Environment {

		/** GTM Account ID. */
		accountId?: string;

		/** The environment authorization code. */
		authorizationCode?: string;

		/** The last update time-stamp for the authorization code. */
		authorizationTimestampMs?: string;

		/** GTM Container ID. */
		containerId?: string;
		containerVersionId?: string;

		/**
		 * The environment description. Can be set or changed only on USER type
		 * environments.
		 * @mutable tagmanager.accounts.containers.environments.create
		 * @mutable tagmanager.accounts.containers.environments.update
		 */
		description?: string;

		/**
		 * Whether or not to enable debug by default on for the environment.
		 * @mutable tagmanager.accounts.containers.environments.create
		 * @mutable tagmanager.accounts.containers.environments.update
		 */
		enableDebug?: boolean;

		/** GTM Environment ID uniquely identifies the GTM Environment. */
		environmentId?: string;

		/**
		 * The fingerprint of the GTM environment as computed at storage time.
		 * This value is recomputed whenever the environment is modified.
		 */
		fingerprint?: string;

		/**
		 * The environment display name. Can be set or changed only on USER type
		 * environments.
		 * @mutable tagmanager.accounts.containers.environments.create
		 * @mutable tagmanager.accounts.containers.environments.update
		 */
		name?: string;

		/** The type of this environment. */
		type?: EnvironmentType;

		/**
		 * Default preview page url for the environment.
		 * @mutable tagmanager.accounts.containers.environments.create
		 * @mutable tagmanager.accounts.containers.environments.update
		 */
		url?: string;
	}

	export enum EnvironmentType { user = 0, live = 1, latest = 2, draft = 3 }


	/** Represents a Google Tag Manager Folder's contents. */
	export interface FolderEntities {

		/** The list of tags inside the folder. */
		tag?: Array<Tag>;

		/** The list of triggers inside the folder. */
		trigger?: Array<Trigger>;

		/** The list of variables inside the folder. */
		variable?: Array<Variable>;
	}


	/** List AccountUsers Response. */
	export interface ListAccountUsersResponse {

		/** All GTM AccountUsers of a GTM Account. */
		userAccess?: Array<UserAccess>;
	}


	/** Represents a user's permissions to an account and its container. */
	export interface UserAccess {

		/** Defines the Google Tag Manager Account access permissions. */
		accountAccess?: AccountAccess;

		/** GTM Account ID. */
		accountId?: string;

		/**
		 * GTM Container access permissions.
		 * @mutable tagmanager.accounts.permissions.create
		 * @mutable tagmanager.accounts.permissions.update
		 */
		containerAccess?: Array<ContainerAccess>;

		/**
		 * User's email address.
		 * @mutable tagmanager.accounts.permissions.create
		 */
		emailAddress?: string;

		/** Account Permission ID. */
		permissionId?: string;
	}


	/** List Accounts Response. */
	export interface ListAccountsResponse {

		/** List of GTM Accounts that a user has access to. */
		accounts?: Array<Account>;
	}


	/** List container versions response. */
	export interface ListContainerVersionsResponse {

		/** All versions of a GTM Container. */
		containerVersion?: Array<ContainerVersion>;

		/** All container version headers of a GTM Container. */
		containerVersionHeader?: Array<ContainerVersionHeader>;
	}


	/** List Containers Response. */
	export interface ListContainersResponse {

		/** All Containers of a GTM Account. */
		containers?: Array<Container>;
	}


	/** List Environments Response. */
	export interface ListEnvironmentsResponse {

		/** All Environments of a GTM Container. */
		environments?: Array<Environment>;
	}


	/** List Folders Response. */
	export interface ListFoldersResponse {

		/** All GTM Folders of a GTM Container. */
		folders?: Array<Folder>;
	}


	/** List Tags Response. */
	export interface ListTagsResponse {

		/** All GTM Tags of a GTM Container. */
		tags?: Array<Tag>;
	}


	/** List triggers response. */
	export interface ListTriggersResponse {

		/** All GTM Triggers of a GTM Container. */
		triggers?: Array<Trigger>;
	}


	/** List Variables Response. */
	export interface ListVariablesResponse {

		/** All GTM Variables of a GTM Container. */
		variables?: Array<Variable>;
	}


	/** Publish container version response. */
	export interface PublishContainerVersionResponse {

		/** Compiler errors or not. */
		compilerError?: boolean;

		/** Represents a Google Tag Manager Container Version. */
		containerVersion?: ContainerVersion;
	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all GTM Accounts that a user has access to.
		 * Get tagmanager/v1/accounts
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_list(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a GTM Account.
		 * Get tagmanager/v1/accounts/{accountId}
		 * @param {string} accountId The GTM Account ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_get(accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a GTM Account.
		 * Put tagmanager/v1/accounts/{accountId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the account
		 * in storage.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_update(accountId: string, fingerprint: string, requestBody: Account): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all Containers that belongs to a GTM Account.
		 * Get tagmanager/v1/accounts/{accountId}/containers
		 * @param {string} accountId The GTM Account ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_list(accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Container.
		 * Post tagmanager/v1/accounts/{accountId}/containers
		 * @param {string} accountId The GTM Account ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_create(accountId: string, requestBody: Container): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_get(accountId: string, containerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Container.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the
		 * container in storage.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_update(accountId: string, containerId: string, fingerprint: string, requestBody: Container): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all GTM Environments of a GTM Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_environments_list(accountId: string, containerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/environments', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a GTM Environment.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_environments_create(accountId: string, containerId: string, requestBody: Environment): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_environments_get(accountId: string, containerId: string, environmentId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a GTM Environment.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} environmentId The GTM Environment ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the
		 * environment in storage.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_environments_update(accountId: string, containerId: string, environmentId: string, fingerprint: string, requestBody: Environment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all GTM Folders of a Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_folders_list(accountId: string, containerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a GTM Folder.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_folders_create(accountId: string, containerId: string, requestBody: Folder): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_folders_get(accountId: string, containerId: string, folderId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders/' + (folderId == null ? '' : encodeURIComponent(folderId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a GTM Folder.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} folderId The GTM Folder ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the folder in
		 * storage.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_folders_update(accountId: string, containerId: string, folderId: string, fingerprint: string, requestBody: Folder): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List all entities in a GTM Folder.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}/entities
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} folderId The GTM Folder ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_folders_entities_list(accountId: string, containerId: string, folderId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/folders/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '/entities', { observe: 'response', responseType: 'text' });
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
		Tagmanager_accounts_containers_move_folders_update(accountId: string, containerId: string, folderId: string, tagId: Array<string>, triggerId: Array<string>, variableId: Array<string>, requestBody: Folder): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/move_folders/' + (folderId == null ? '' : encodeURIComponent(folderId)) + '&' + tagId.map(z => `tagId=${encodeURIComponent(z)}`).join('&') + '&' + triggerId.map(z => `triggerId=${encodeURIComponent(z)}`).join('&') + '&' + variableId.map(z => `variableId=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Re-generates the authorization code for a GTM Environment.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/reauthorize_environments/{environmentId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} environmentId The GTM Environment ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_reauthorize_environments_update(accountId: string, containerId: string, environmentId: string, requestBody: Environment): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/reauthorize_environments/' + (environmentId == null ? '' : encodeURIComponent(environmentId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all GTM Tags of a Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_tags_list(accountId: string, containerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/tags', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a GTM Tag.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_tags_create(accountId: string, containerId: string, requestBody: Tag): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_tags_get(accountId: string, containerId: string, tagId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a GTM Tag.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} tagId The GTM Tag ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the tag in
		 * storage.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_tags_update(accountId: string, containerId: string, tagId: string, fingerprint: string, requestBody: Tag): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/tags/' + (tagId == null ? '' : encodeURIComponent(tagId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all GTM Triggers of a Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_triggers_list(accountId: string, containerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/triggers', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a GTM Trigger.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_triggers_create(accountId: string, containerId: string, requestBody: Trigger): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/triggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_triggers_get(accountId: string, containerId: string, triggerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a GTM Trigger.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} triggerId The GTM Trigger ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the trigger
		 * in storage.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_triggers_update(accountId: string, containerId: string, triggerId: string, fingerprint: string, requestBody: Trigger): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/triggers/' + (triggerId == null ? '' : encodeURIComponent(triggerId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all GTM Variables of a Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_variables_list(accountId: string, containerId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/variables', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a GTM Variable.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_variables_create(accountId: string, containerId: string, requestBody: Variable): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/variables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_variables_get(accountId: string, containerId: string, variableId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/variables/' + (variableId == null ? '' : encodeURIComponent(variableId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a GTM Variable.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} variableId The GTM Variable ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the variable
		 * in storage.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_variables_update(accountId: string, containerId: string, variableId: string, fingerprint: string, requestBody: Variable): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/variables/' + (variableId == null ? '' : encodeURIComponent(variableId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists all Container Versions of a GTM Container.
		 * Get tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {boolean} headers Retrieve headers only when true.
		 * @param {boolean} includeDeleted Also retrieve deleted (archived) versions when true.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_versions_list(accountId: string, containerId: string, headers: boolean, includeDeleted: boolean): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions&headers=' + headers + '&includeDeleted=' + includeDeleted, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a Container Version.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_versions_create(accountId: string, containerId: string, requestBody: CreateContainerVersionRequestVersionOptions): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
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
		 * @param {string} containerVersionId The GTM Container Version ID. Specify <code>published</code> to retrieve
		 * the currently published version.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_versions_get(accountId: string, containerId: string, containerVersionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a Container Version.
		 * Put tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} containerVersionId The GTM Container Version ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the
		 * container version in storage.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_versions_update(accountId: string, containerId: string, containerVersionId: string, fingerprint: string, requestBody: ContainerVersion): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Publishes a Container Version.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/publish
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} containerVersionId The GTM Container Version ID.
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the
		 * container version in storage.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_versions_publish(accountId: string, containerId: string, containerVersionId: string, fingerprint: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)) + '/publish&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Restores a Container Version. This will overwrite the container's current
		 * configuration (including its variables, triggers and tags). The operation
		 * will not have any effect on the version that is being served (i.e. the
		 * published version).
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/restore
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} containerVersionId The GTM Container Version ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_versions_restore(accountId: string, containerId: string, containerVersionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)) + '/restore', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Undeletes a Container Version.
		 * Post tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/undelete
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} containerId The GTM Container ID.
		 * @param {string} containerVersionId The GTM Container Version ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_versions_undelete(accountId: string, containerId: string, containerVersionId: string): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/containers/' + (containerId == null ? '' : encodeURIComponent(containerId)) + '/versions/' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)) + '/undelete', null, { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all users that have access to the account along with Account and
		 * Container Permissions granted to each of them.
		 * Get tagmanager/v1/accounts/{accountId}/permissions
		 * @param {string} accountId The GTM Account ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_permissions_list(accountId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/permissions', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a user's Account & Container Permissions.
		 * Post tagmanager/v1/accounts/{accountId}/permissions
		 * @param {string} accountId The GTM Account ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_permissions_create(accountId: string, requestBody: UserAccess): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Removes a user from the account, revoking access to it and all of its
		 * containers.
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
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_permissions_get(accountId: string, permissionId: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a user's Account & Container Permissions.
		 * Put tagmanager/v1/accounts/{accountId}/permissions/{permissionId}
		 * @param {string} accountId The GTM Account ID.
		 * @param {string} permissionId The GTM User ID.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_permissions_update(accountId: string, permissionId: string, requestBody: UserAccess): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'tagmanager/v1/accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/permissions/' + (permissionId == null ? '' : encodeURIComponent(permissionId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

