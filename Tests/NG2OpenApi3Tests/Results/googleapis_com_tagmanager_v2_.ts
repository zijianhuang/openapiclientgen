import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Represents a Google Tag Manager Account. */
	export interface Account {

		/** The Account ID uniquely identifies the GTM Account. */
		accountId?: string | null;
		features?: AccountFeatures;

		/** The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified. */
		fingerprint?: string | null;

		/** Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update */
		name?: string | null;

		/** GTM Account's API relative path. */
		path?: string | null;

		/** Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update */
		shareData?: boolean | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;
	}

	/** Represents a Google Tag Manager Account. */
	export interface AccountFormProperties {

		/** The Account ID uniquely identifies the GTM Account. */
		accountId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Account display name. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update */
		name: FormControl<string | null | undefined>,

		/** GTM Account's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the benchmarking service. @mutable tagmanager.accounts.create @mutable tagmanager.accounts.update */
		shareData: FormControl<boolean | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			shareData: new FormControl<boolean | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AccountFeatures {

		/** Whether this Account supports multiple Containers. */
		supportMultipleContainers?: boolean | null;

		/** Whether this Account supports user permissions managed by GTM. */
		supportUserPermissions?: boolean | null;
	}
	export interface AccountFeaturesFormProperties {

		/** Whether this Account supports multiple Containers. */
		supportMultipleContainers: FormControl<boolean | null | undefined>,

		/** Whether this Account supports user permissions managed by GTM. */
		supportUserPermissions: FormControl<boolean | null | undefined>,
	}
	export function CreateAccountFeaturesFormGroup() {
		return new FormGroup<AccountFeaturesFormProperties>({
			supportMultipleContainers: new FormControl<boolean | null | undefined>(undefined),
			supportUserPermissions: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the Google Tag Manager Account access permissions. */
	export interface AccountAccess {

		/** Whether the user has no access, user access, or admin access to an account. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		permission?: AccountAccessPermission | null;
	}

	/** Defines the Google Tag Manager Account access permissions. */
	export interface AccountAccessFormProperties {

		/** Whether the user has no access, user access, or admin access to an account. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		permission: FormControl<AccountAccessPermission | null | undefined>,
	}
	export function CreateAccountAccessFormGroup() {
		return new FormGroup<AccountAccessFormProperties>({
			permission: new FormControl<AccountAccessPermission | null | undefined>(undefined),
		});

	}

	export enum AccountAccessPermission { accountPermissionUnspecified = 'accountPermissionUnspecified', noAccess = 'noAccess', user = 'user', admin = 'admin' }


	/** Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing properties of the gtm data layer, monitoring clicks, or accessing elements of a page URL. */
	export interface BuiltInVariable {

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** Name of the built-in variable to be used to refer to the built-in variable. */
		name?: string | null;

		/** GTM BuiltInVariable's API relative path. */
		path?: string | null;

		/** Type of built-in variable. @required.tagmanager.accounts.containers.workspaces.built_in_variable.update @mutable tagmanager.accounts.containers.workspaces.built_in_variable.update */
		type?: BuiltInVariableType | null;

		/** GTM Workspace ID. */
		workspaceId?: string | null;
	}

	/** Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing properties of the gtm data layer, monitoring clicks, or accessing elements of a page URL. */
	export interface BuiltInVariableFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** Name of the built-in variable to be used to refer to the built-in variable. */
		name: FormControl<string | null | undefined>,

		/** GTM BuiltInVariable's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Type of built-in variable. @required.tagmanager.accounts.containers.workspaces.built_in_variable.update @mutable tagmanager.accounts.containers.workspaces.built_in_variable.update */
		type: FormControl<BuiltInVariableType | null | undefined>,

		/** GTM Workspace ID. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateBuiltInVariableFormGroup() {
		return new FormGroup<BuiltInVariableFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<BuiltInVariableType | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum BuiltInVariableType { builtInVariableTypeUnspecified = 'builtInVariableTypeUnspecified', pageUrl = 'pageUrl', pageHostname = 'pageHostname', pagePath = 'pagePath', referrer = 'referrer', event = 'event', clickElement = 'clickElement', clickClasses = 'clickClasses', clickId = 'clickId', clickTarget = 'clickTarget', clickUrl = 'clickUrl', clickText = 'clickText', firstPartyServingUrl = 'firstPartyServingUrl', formElement = 'formElement', formClasses = 'formClasses', formId = 'formId', formTarget = 'formTarget', formUrl = 'formUrl', formText = 'formText', errorMessage = 'errorMessage', errorUrl = 'errorUrl', errorLine = 'errorLine', newHistoryUrl = 'newHistoryUrl', oldHistoryUrl = 'oldHistoryUrl', newHistoryFragment = 'newHistoryFragment', oldHistoryFragment = 'oldHistoryFragment', newHistoryState = 'newHistoryState', oldHistoryState = 'oldHistoryState', historySource = 'historySource', containerVersion = 'containerVersion', debugMode = 'debugMode', randomNumber = 'randomNumber', containerId = 'containerId', appId = 'appId', appName = 'appName', appVersionCode = 'appVersionCode', appVersionName = 'appVersionName', language = 'language', osVersion = 'osVersion', platform = 'platform', sdkVersion = 'sdkVersion', deviceName = 'deviceName', resolution = 'resolution', advertiserId = 'advertiserId', advertisingTrackingEnabled = 'advertisingTrackingEnabled', htmlId = 'htmlId', environmentName = 'environmentName', ampBrowserLanguage = 'ampBrowserLanguage', ampCanonicalPath = 'ampCanonicalPath', ampCanonicalUrl = 'ampCanonicalUrl', ampCanonicalHost = 'ampCanonicalHost', ampReferrer = 'ampReferrer', ampTitle = 'ampTitle', ampClientId = 'ampClientId', ampClientTimezone = 'ampClientTimezone', ampClientTimestamp = 'ampClientTimestamp', ampClientScreenWidth = 'ampClientScreenWidth', ampClientScreenHeight = 'ampClientScreenHeight', ampClientScrollX = 'ampClientScrollX', ampClientScrollY = 'ampClientScrollY', ampClientMaxScrollX = 'ampClientMaxScrollX', ampClientMaxScrollY = 'ampClientMaxScrollY', ampTotalEngagedTime = 'ampTotalEngagedTime', ampPageViewId = 'ampPageViewId', ampPageLoadTime = 'ampPageLoadTime', ampPageDownloadTime = 'ampPageDownloadTime', ampGtmEvent = 'ampGtmEvent', eventName = 'eventName', firebaseEventParameterCampaign = 'firebaseEventParameterCampaign', firebaseEventParameterCampaignAclid = 'firebaseEventParameterCampaignAclid', firebaseEventParameterCampaignAnid = 'firebaseEventParameterCampaignAnid', firebaseEventParameterCampaignClickTimestamp = 'firebaseEventParameterCampaignClickTimestamp', firebaseEventParameterCampaignContent = 'firebaseEventParameterCampaignContent', firebaseEventParameterCampaignCp1 = 'firebaseEventParameterCampaignCp1', firebaseEventParameterCampaignGclid = 'firebaseEventParameterCampaignGclid', firebaseEventParameterCampaignSource = 'firebaseEventParameterCampaignSource', firebaseEventParameterCampaignTerm = 'firebaseEventParameterCampaignTerm', firebaseEventParameterCurrency = 'firebaseEventParameterCurrency', firebaseEventParameterDynamicLinkAcceptTime = 'firebaseEventParameterDynamicLinkAcceptTime', firebaseEventParameterDynamicLinkLinkid = 'firebaseEventParameterDynamicLinkLinkid', firebaseEventParameterNotificationMessageDeviceTime = 'firebaseEventParameterNotificationMessageDeviceTime', firebaseEventParameterNotificationMessageId = 'firebaseEventParameterNotificationMessageId', firebaseEventParameterNotificationMessageName = 'firebaseEventParameterNotificationMessageName', firebaseEventParameterNotificationMessageTime = 'firebaseEventParameterNotificationMessageTime', firebaseEventParameterNotificationTopic = 'firebaseEventParameterNotificationTopic', firebaseEventParameterPreviousAppVersion = 'firebaseEventParameterPreviousAppVersion', firebaseEventParameterPreviousOsVersion = 'firebaseEventParameterPreviousOsVersion', firebaseEventParameterPrice = 'firebaseEventParameterPrice', firebaseEventParameterProductId = 'firebaseEventParameterProductId', firebaseEventParameterQuantity = 'firebaseEventParameterQuantity', firebaseEventParameterValue = 'firebaseEventParameterValue', videoProvider = 'videoProvider', videoUrl = 'videoUrl', videoTitle = 'videoTitle', videoDuration = 'videoDuration', videoPercent = 'videoPercent', videoVisible = 'videoVisible', videoStatus = 'videoStatus', videoCurrentTime = 'videoCurrentTime', scrollDepthThreshold = 'scrollDepthThreshold', scrollDepthUnits = 'scrollDepthUnits', scrollDepthDirection = 'scrollDepthDirection', elementVisibilityRatio = 'elementVisibilityRatio', elementVisibilityTime = 'elementVisibilityTime', elementVisibilityFirstTime = 'elementVisibilityFirstTime', elementVisibilityRecentTime = 'elementVisibilityRecentTime', requestPath = 'requestPath', requestMethod = 'requestMethod', clientName = 'clientName', queryString = 'queryString', serverPageLocationUrl = 'serverPageLocationUrl', serverPageLocationPath = 'serverPageLocationPath', serverPageLocationHostname = 'serverPageLocationHostname', visitorRegion = 'visitorRegion' }

	export interface Client {

		/** GTM Account ID. */
		accountId?: string | null;

		/** The Client ID uniquely identifies the GTM client. */
		clientId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified. */
		fingerprint?: string | null;

		/** Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update */
		name?: string | null;

		/** User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		notes?: string | null;

		/** The client's parameters. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string | null;

		/** GTM client's API relative path. */
		path?: string | null;

		/** Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update */
		priority?: number | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update */
		type?: string | null;

		/** GTM Workspace ID. */
		workspaceId?: string | null;
	}
	export interface ClientFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** The Client ID uniquely identifies the GTM client. */
		clientId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Client as computed at storage time. This value is recomputed whenever the client is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Client display name. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		notes: FormControl<string | null | undefined>,

		/** Parent folder id. */
		parentFolderId: FormControl<string | null | undefined>,

		/** GTM client's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Priority determines relative firing order. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update */
		priority: FormControl<number | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** Client type. @mutable tagmanager.accounts.containers.workspaces.clients.create @mutable tagmanager.accounts.containers.workspaces.clients.update */
		type: FormControl<string | null | undefined>,

		/** GTM Workspace ID. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateClientFormGroup() {
		return new FormGroup<ClientFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			clientId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			priority: new FormControl<number | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Parameter. */
	export interface Parameter {

		/** Whether or not a reference type parameter is strongly or weakly referenced. Only used by Transformations. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update */
		isWeakReference?: boolean | null;

		/** The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		key?: string | null;

		/** This list parameter's parameters (keys will be ignored). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		list?: Array<Parameter>;

		/** This map parameter's parameters (must have keys; keys must be unique). @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		map?: Array<Parameter>;

		/** The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		type?: ParameterType | null;

		/** A parameter's value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		value?: string | null;
	}

	/** Represents a Google Tag Manager Parameter. */
	export interface ParameterFormProperties {

		/** Whether or not a reference type parameter is strongly or weakly referenced. Only used by Transformations. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update */
		isWeakReference: FormControl<boolean | null | undefined>,

		/** The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		key: FormControl<string | null | undefined>,

		/** The parameter type. Valid values are: - boolean: The value represents a boolean, represented as 'true' or 'false' - integer: The value represents a 64-bit signed integer value, in base 10 - list: A list of parameters should be specified - map: A map of parameters should be specified - template: The value represents any text; this can include variable references (even variable references that might return non-string types) - trigger_reference: The value represents a trigger, represented as the trigger id - tag_reference: The value represents a tag, represented as the tag name @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		type: FormControl<ParameterType | null | undefined>,

		/** A parameter's value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		value: FormControl<string | null | undefined>,
	}
	export function CreateParameterFormGroup() {
		return new FormGroup<ParameterFormProperties>({
			isWeakReference: new FormControl<boolean | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ParameterType | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ParameterType { typeUnspecified = 'typeUnspecified', template = 'template', integer = 'integer', boolean = 'boolean', list = 'list', map = 'map', triggerReference = 'triggerReference', tagReference = 'tagReference' }


	/** Represents a predicate. */
	export interface Condition {

		/** A list of named parameters (key/value), depending on the condition's type. Notes: - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively. - At this time, the left operand (arg0) must be a reference to a variable. - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value, the matching will be case sensitive. - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		parameter?: Array<Parameter>;

		/** The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		type?: ConditionType | null;
	}

	/** Represents a predicate. */
	export interface ConditionFormProperties {

		/** The type of operator for this condition. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		type: FormControl<ConditionType | null | undefined>,
	}
	export function CreateConditionFormGroup() {
		return new FormGroup<ConditionFormProperties>({
			type: new FormControl<ConditionType | null | undefined>(undefined),
		});

	}

	export enum ConditionType { conditionTypeUnspecified = 'conditionTypeUnspecified', equals = 'equals', contains = 'contains', startsWith = 'startsWith', endsWith = 'endsWith', matchRegex = 'matchRegex', greater = 'greater', greaterOrEquals = 'greaterOrEquals', less = 'less', lessOrEquals = 'lessOrEquals', cssSelector = 'cssSelector', urlMatches = 'urlMatches' }


	/** Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions. */
	export interface Container {

		/** GTM Account ID. */
		accountId?: string | null;

		/** The Container ID uniquely identifies the GTM Container. */
		containerId?: string | null;

		/** List of domain names associated with the Container. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		domainName?: Array<string>;
		features?: ContainerFeatures;

		/** The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified. */
		fingerprint?: string | null;

		/** Container display name. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		name?: string | null;

		/** Container Notes. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		notes?: string | null;

		/** GTM Container's API relative path. */
		path?: string | null;

		/** Container Public ID. */
		publicId?: string | null;

		/** All Tag IDs that refer to this Container. */
		tagIds?: Array<string>;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** List of server-side container URLs for the Container. If multiple URLs are provided, all URL paths must match. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		taggingServerUrls?: Array<string>;

		/** List of Usage Contexts for the Container. Valid values include: web, android, or ios. @mutable tagmanager.accounts.containers.create @mutable tagmanager.accounts.containers.update */
		usageContext?: Array<string>;
	}

	/** Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions. */
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

		/** GTM Container's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Container Public ID. */
		publicId: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,
	}
	export function CreateContainerFormGroup() {
		return new FormGroup<ContainerFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			publicId: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ContainerFeatures {

		/** Whether this Container supports built-in variables */
		supportBuiltInVariables?: boolean | null;

		/** Whether this Container supports clients. */
		supportClients?: boolean | null;

		/** Whether this Container supports environments. */
		supportEnvironments?: boolean | null;

		/** Whether this Container supports folders. */
		supportFolders?: boolean | null;

		/** Whether this Container supports Google tag config. */
		supportGtagConfigs?: boolean | null;

		/** Whether this Container supports tags. */
		supportTags?: boolean | null;

		/** Whether this Container supports templates. */
		supportTemplates?: boolean | null;

		/** Whether this Container supports transformations. */
		supportTransformations?: boolean | null;

		/** Whether this Container supports triggers. */
		supportTriggers?: boolean | null;

		/** Whether this Container supports user permissions managed by GTM. */
		supportUserPermissions?: boolean | null;

		/** Whether this Container supports variables. */
		supportVariables?: boolean | null;

		/** Whether this Container supports Container versions. */
		supportVersions?: boolean | null;

		/** Whether this Container supports workspaces. */
		supportWorkspaces?: boolean | null;

		/** Whether this Container supports zones. */
		supportZones?: boolean | null;
	}
	export interface ContainerFeaturesFormProperties {

		/** Whether this Container supports built-in variables */
		supportBuiltInVariables: FormControl<boolean | null | undefined>,

		/** Whether this Container supports clients. */
		supportClients: FormControl<boolean | null | undefined>,

		/** Whether this Container supports environments. */
		supportEnvironments: FormControl<boolean | null | undefined>,

		/** Whether this Container supports folders. */
		supportFolders: FormControl<boolean | null | undefined>,

		/** Whether this Container supports Google tag config. */
		supportGtagConfigs: FormControl<boolean | null | undefined>,

		/** Whether this Container supports tags. */
		supportTags: FormControl<boolean | null | undefined>,

		/** Whether this Container supports templates. */
		supportTemplates: FormControl<boolean | null | undefined>,

		/** Whether this Container supports transformations. */
		supportTransformations: FormControl<boolean | null | undefined>,

		/** Whether this Container supports triggers. */
		supportTriggers: FormControl<boolean | null | undefined>,

		/** Whether this Container supports user permissions managed by GTM. */
		supportUserPermissions: FormControl<boolean | null | undefined>,

		/** Whether this Container supports variables. */
		supportVariables: FormControl<boolean | null | undefined>,

		/** Whether this Container supports Container versions. */
		supportVersions: FormControl<boolean | null | undefined>,

		/** Whether this Container supports workspaces. */
		supportWorkspaces: FormControl<boolean | null | undefined>,

		/** Whether this Container supports zones. */
		supportZones: FormControl<boolean | null | undefined>,
	}
	export function CreateContainerFeaturesFormGroup() {
		return new FormGroup<ContainerFeaturesFormProperties>({
			supportBuiltInVariables: new FormControl<boolean | null | undefined>(undefined),
			supportClients: new FormControl<boolean | null | undefined>(undefined),
			supportEnvironments: new FormControl<boolean | null | undefined>(undefined),
			supportFolders: new FormControl<boolean | null | undefined>(undefined),
			supportGtagConfigs: new FormControl<boolean | null | undefined>(undefined),
			supportTags: new FormControl<boolean | null | undefined>(undefined),
			supportTemplates: new FormControl<boolean | null | undefined>(undefined),
			supportTransformations: new FormControl<boolean | null | undefined>(undefined),
			supportTriggers: new FormControl<boolean | null | undefined>(undefined),
			supportUserPermissions: new FormControl<boolean | null | undefined>(undefined),
			supportVariables: new FormControl<boolean | null | undefined>(undefined),
			supportVersions: new FormControl<boolean | null | undefined>(undefined),
			supportWorkspaces: new FormControl<boolean | null | undefined>(undefined),
			supportZones: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Defines the Google Tag Manager Container access permissions. */
	export interface ContainerAccess {

		/** GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		containerId?: string | null;

		/** List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		permission?: ContainerAccessPermission | null;
	}

	/** Defines the Google Tag Manager Container access permissions. */
	export interface ContainerAccessFormProperties {

		/** GTM Container ID. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		containerId: FormControl<string | null | undefined>,

		/** List of Container permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		permission: FormControl<ContainerAccessPermission | null | undefined>,
	}
	export function CreateContainerAccessFormGroup() {
		return new FormGroup<ContainerAccessFormProperties>({
			containerId: new FormControl<string | null | undefined>(undefined),
			permission: new FormControl<ContainerAccessPermission | null | undefined>(undefined),
		});

	}

	export enum ContainerAccessPermission { containerPermissionUnspecified = 'containerPermissionUnspecified', noAccess = 'noAccess', read = 'read', edit = 'edit', approve = 'approve', publish = 'publish' }


	/** Represents a Google Tag Manager Container Version. */
	export interface ContainerVersion {

		/** GTM Account ID. */
		accountId?: string | null;

		/** The built-in variables in the container that this version was taken from. */
		builtInVariable?: Array<BuiltInVariable>;

		/** The clients in the container that this version was taken from. */
		client?: Array<Client>;

		/** Represents a Google Tag Manager Container, which specifies the platform tags will run on, manages workspaces, and retains container versions. */
		container?: Container;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The Container Version ID uniquely identifies the GTM Container Version. */
		containerVersionId?: string | null;

		/** The custom templates in the container that this version was taken from. */
		customTemplate?: Array<CustomTemplate>;

		/** A value of true indicates this container version has been deleted. */
		deleted?: boolean | null;

		/** Container version description. @mutable tagmanager.accounts.containers.versions.update */
		description?: string | null;

		/** The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified. */
		fingerprint?: string | null;

		/** The folders in the container that this version was taken from. */
		folder?: Array<Folder>;

		/** The Google tag configs in the container that this version was taken from. */
		gtagConfig?: Array<GtagConfig>;

		/** Container version display name. @mutable tagmanager.accounts.containers.versions.update */
		name?: string | null;

		/** GTM Container Version's API relative path. */
		path?: string | null;

		/** The tags in the container that this version was taken from. */
		tag?: Array<Tag>;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** The transformations in the container that this version was taken from. */
		transformation?: Array<Transformation>;

		/** The triggers in the container that this version was taken from. */
		trigger?: Array<Trigger>;

		/** The variables in the container that this version was taken from. */
		variable?: Array<Variable>;

		/** The zones in the container that this version was taken from. */
		zone?: Array<Zone>;
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

		/** Container version description. @mutable tagmanager.accounts.containers.versions.update */
		description: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Container version display name. @mutable tagmanager.accounts.containers.versions.update */
		name: FormControl<string | null | undefined>,

		/** GTM Container Version's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,
	}
	export function CreateContainerVersionFormGroup() {
		return new FormGroup<ContainerVersionFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			containerVersionId: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Custom Template's contents. */
	export interface CustomTemplate {

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified. */
		fingerprint?: string | null;

		/** Represents the link between a custom template and an entry on the Community Template Gallery site. */
		galleryReference?: GalleryReference;

		/** Custom Template display name. */
		name?: string | null;

		/** GTM Custom Template's API relative path. */
		path?: string | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** The custom template in text format. */
		templateData?: string | null;

		/** The Custom Template ID uniquely identifies the GTM custom template. */
		templateId?: string | null;

		/** GTM Workspace ID. */
		workspaceId?: string | null;
	}

	/** Represents a Google Tag Manager Custom Template's contents. */
	export interface CustomTemplateFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Custom Template as computed at storage time. This value is recomputed whenever the template is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Custom Template display name. */
		name: FormControl<string | null | undefined>,

		/** GTM Custom Template's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** The custom template in text format. */
		templateData: FormControl<string | null | undefined>,

		/** The Custom Template ID uniquely identifies the GTM custom template. */
		templateId: FormControl<string | null | undefined>,

		/** GTM Workspace ID. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateCustomTemplateFormGroup() {
		return new FormGroup<CustomTemplateFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			templateData: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the link between a custom template and an entry on the Community Template Gallery site. */
	export interface GalleryReference {

		/** The name of the host for the community gallery template. */
		host?: string | null;

		/** If a user has manually edited the community gallery template. */
		isModified?: boolean | null;

		/** The name of the owner for the community gallery template. */
		owner?: string | null;

		/** The name of the repository for the community gallery template. */
		repository?: string | null;

		/** The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery. */
		signature?: string | null;

		/** The version of the community gallery template. */
		version?: string | null;
	}

	/** Represents the link between a custom template and an entry on the Community Template Gallery site. */
	export interface GalleryReferenceFormProperties {

		/** The name of the host for the community gallery template. */
		host: FormControl<string | null | undefined>,

		/** If a user has manually edited the community gallery template. */
		isModified: FormControl<boolean | null | undefined>,

		/** The name of the owner for the community gallery template. */
		owner: FormControl<string | null | undefined>,

		/** The name of the repository for the community gallery template. */
		repository: FormControl<string | null | undefined>,

		/** The signature of the community gallery template as computed at import time. This value is recomputed whenever the template is updated from the gallery. */
		signature: FormControl<string | null | undefined>,

		/** The version of the community gallery template. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGalleryReferenceFormGroup() {
		return new FormGroup<GalleryReferenceFormProperties>({
			host: new FormControl<string | null | undefined>(undefined),
			isModified: new FormControl<boolean | null | undefined>(undefined),
			owner: new FormControl<string | null | undefined>(undefined),
			repository: new FormControl<string | null | undefined>(undefined),
			signature: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
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

		/** Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update */
		name?: string | null;

		/** User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update */
		notes?: string | null;

		/** GTM Folder's API relative path. */
		path?: string | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** GTM Workspace ID. */
		workspaceId?: string | null;
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

		/** Folder display name. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this folder in the container. @mutable tagmanager.accounts.containers.workspaces.folders.create @mutable tagmanager.accounts.containers.workspaces.folders.update */
		notes: FormControl<string | null | undefined>,

		/** GTM Folder's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** GTM Workspace ID. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateFolderFormGroup() {
		return new FormGroup<FolderFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			folderId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google tag configuration. */
	export interface GtagConfig {

		/** Google tag account ID. */
		accountId?: string | null;

		/** Google tag container ID. */
		containerId?: string | null;

		/** The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified. */
		fingerprint?: string | null;

		/** The ID uniquely identifies the Google tag config. */
		gtagConfigId?: string | null;

		/** The Google tag config's parameters. @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update */
		parameter?: Array<Parameter>;

		/** Google tag config's API relative path. */
		path?: string | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** Google tag config type. @required tagmanager.accounts.containers.workspaces.gtag_config.create @required tagmanager.accounts.containers.workspaces.gtag_config.update @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update */
		type?: string | null;

		/** Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise. */
		workspaceId?: string | null;
	}

	/** Represents a Google tag configuration. */
	export interface GtagConfigFormProperties {

		/** Google tag account ID. */
		accountId: FormControl<string | null | undefined>,

		/** Google tag container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the Google tag config as computed at storage time. This value is recomputed whenever the config is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** The ID uniquely identifies the Google tag config. */
		gtagConfigId: FormControl<string | null | undefined>,

		/** Google tag config's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** Google tag config type. @required tagmanager.accounts.containers.workspaces.gtag_config.create @required tagmanager.accounts.containers.workspaces.gtag_config.update @mutable tagmanager.accounts.containers.workspaces.gtag_config.create @mutable tagmanager.accounts.containers.workspaces.gtag_config.update */
		type: FormControl<string | null | undefined>,

		/** Google tag workspace ID. Only used by GTM containers. Set to 0 otherwise. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateGtagConfigFormGroup() {
		return new FormGroup<GtagConfigFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			gtagConfigId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Tag. */
	export interface Tag {

		/** GTM Account ID. */
		accountId?: string | null;

		/** Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		blockingRuleId?: Array<string>;

		/** Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		blockingTriggerId?: Array<string>;
		consentSettings?: TagConsentSetting;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified. */
		fingerprint?: string | null;

		/** Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		firingRuleId?: Array<string>;

		/** Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		firingTriggerId?: Array<string>;

		/** If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		liveOnly?: boolean | null;

		/** Represents a Google Tag Manager Parameter. */
		monitoringMetadata?: Parameter;

		/** If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		monitoringMetadataTagNameKey?: string | null;

		/** Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		name?: string | null;

		/** User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		notes?: string | null;

		/** The tag's parameters. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string | null;

		/** GTM Tag's API relative path. */
		path?: string | null;

		/** Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		paused?: boolean | null;

		/** Represents a Google Tag Manager Parameter. */
		priority?: Parameter;

		/** The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		scheduleEndMs?: string | null;

		/** The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		scheduleStartMs?: string | null;

		/** The list of setup tags. Currently we only allow one. */
		setupTag?: Array<SetupTag>;

		/** Option to fire this tag. */
		tagFiringOption?: TagTagFiringOption | null;

		/** The Tag ID uniquely identifies the GTM Tag. */
		tagId?: string | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** The list of teardown tags. Currently we only allow one. */
		teardownTag?: Array<TeardownTag>;

		/** GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		type?: string | null;

		/** GTM Workspace ID. */
		workspaceId?: string | null;
	}

	/** Represents a Google Tag Manager Tag. */
	export interface TagFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode). @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		liveOnly: FormControl<boolean | null | undefined>,

		/** If non-empty, then the tag display name will be included in the monitoring metadata map using the key specified. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		monitoringMetadataTagNameKey: FormControl<string | null | undefined>,

		/** Tag display name. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this tag in the container. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		notes: FormControl<string | null | undefined>,

		/** Parent folder id. */
		parentFolderId: FormControl<string | null | undefined>,

		/** GTM Tag's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Indicates whether the tag is paused, which prevents the tag from firing. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		paused: FormControl<boolean | null | undefined>,

		/** The end timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		scheduleEndMs: FormControl<string | null | undefined>,

		/** The start timestamp in milliseconds to schedule a tag. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		scheduleStartMs: FormControl<string | null | undefined>,

		/** Option to fire this tag. */
		tagFiringOption: FormControl<TagTagFiringOption | null | undefined>,

		/** The Tag ID uniquely identifies the GTM Tag. */
		tagId: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** GTM Tag Type. @mutable tagmanager.accounts.containers.workspaces.tags.create @mutable tagmanager.accounts.containers.workspaces.tags.update */
		type: FormControl<string | null | undefined>,

		/** GTM Workspace ID. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateTagFormGroup() {
		return new FormGroup<TagFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			liveOnly: new FormControl<boolean | null | undefined>(undefined),
			monitoringMetadataTagNameKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			paused: new FormControl<boolean | null | undefined>(undefined),
			scheduleEndMs: new FormControl<string | null | undefined>(undefined),
			scheduleStartMs: new FormControl<string | null | undefined>(undefined),
			tagFiringOption: new FormControl<TagTagFiringOption | null | undefined>(undefined),
			tagId: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface TagConsentSetting {

		/** The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted. */
		consentStatus?: TagConsentSettingConsentStatus | null;

		/** Represents a Google Tag Manager Parameter. */
		consentType?: Parameter;
	}
	export interface TagConsentSettingFormProperties {

		/** The tag's consent status. If set to NEEDED, the runtime will check that the consent types specified by the consent_type field have been granted. */
		consentStatus: FormControl<TagConsentSettingConsentStatus | null | undefined>,
	}
	export function CreateTagConsentSettingFormGroup() {
		return new FormGroup<TagConsentSettingFormProperties>({
			consentStatus: new FormControl<TagConsentSettingConsentStatus | null | undefined>(undefined),
		});

	}

	export enum TagConsentSettingConsentStatus { notSet = 'notSet', notNeeded = 'notNeeded', needed = 'needed' }


	/** Represents a reference to atag that fires before another tag in order to set up dependencies. */
	export interface SetupTag {

		/** If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status. */
		stopOnSetupFailure?: boolean | null;

		/** The name of the setup tag. */
		tagName?: string | null;
	}

	/** Represents a reference to atag that fires before another tag in order to set up dependencies. */
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

	export enum TagTagFiringOption { tagFiringOptionUnspecified = 'tagFiringOptionUnspecified', unlimited = 'unlimited', oncePerEvent = 'oncePerEvent', oncePerLoad = 'oncePerLoad' }


	/** Represents a tag that fires after another tag in order to tear down dependencies. */
	export interface TeardownTag {

		/** If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status. */
		stopTeardownOnFailure?: boolean | null;

		/** The name of the teardown tag. */
		tagName?: string | null;
	}

	/** Represents a tag that fires after another tag in order to tear down dependencies. */
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


	/** Represents a Google Tag Manager Transformation. */
	export interface Transformation {

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The fingerprint of the GTM Transformation as computed at storage time. This value is recomputed whenever the transformation is modified. */
		fingerprint?: string | null;

		/** Transformation display name. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update */
		name?: string | null;

		/** User notes on how to apply this transformation in the container. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update */
		notes?: string | null;

		/** The transformation's parameters. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string | null;

		/** GTM transformation's API relative path. */
		path?: string | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** The Transformation ID uniquely identifies the GTM transformation. */
		transformationId?: string | null;

		/** Transformation type. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update */
		type?: string | null;

		/** GTM Workspace ID. */
		workspaceId?: string | null;
	}

	/** Represents a Google Tag Manager Transformation. */
	export interface TransformationFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Transformation as computed at storage time. This value is recomputed whenever the transformation is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Transformation display name. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this transformation in the container. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update */
		notes: FormControl<string | null | undefined>,

		/** Parent folder id. */
		parentFolderId: FormControl<string | null | undefined>,

		/** GTM transformation's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** The Transformation ID uniquely identifies the GTM transformation. */
		transformationId: FormControl<string | null | undefined>,

		/** Transformation type. @mutable tagmanager.accounts.containers.workspaces.transformations.create @mutable tagmanager.accounts.containers.workspaces.transformations.update */
		type: FormControl<string | null | undefined>,

		/** GTM Workspace ID. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateTransformationFormGroup() {
		return new FormGroup<TransformationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			transformationId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Trigger */
	export interface Trigger {

		/** GTM Account ID. */
		accountId?: string | null;

		/** Used in the case of auto event tracking. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		autoEventFilter?: Array<Condition>;

		/** Represents a Google Tag Manager Parameter. */
		checkValidation?: Parameter;

		/** GTM Container ID. */
		containerId?: string | null;

		/** Represents a Google Tag Manager Parameter. */
		continuousTimeMinMilliseconds?: Parameter;

		/** Used in the case of custom event, which is fired iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		customEventFilter?: Array<Condition>;

		/** Represents a Google Tag Manager Parameter. */
		eventName?: Parameter;

		/** The trigger will only fire iff all Conditions are true. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
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

		/** Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		name?: string | null;

		/** User notes on how to apply this trigger in the container. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		notes?: string | null;

		/** Additional parameters. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string | null;

		/** GTM Trigger's API relative path. */
		path?: string | null;

		/** Represents a Google Tag Manager Parameter. */
		selector?: Parameter;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** Represents a Google Tag Manager Parameter. */
		totalTimeMinMilliseconds?: Parameter;

		/** The Trigger ID uniquely identifies the GTM Trigger. */
		triggerId?: string | null;

		/** Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
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

		/** GTM Workspace ID. */
		workspaceId?: string | null;
	}

	/** Represents a Google Tag Manager Trigger */
	export interface TriggerFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Trigger display name. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this trigger in the container. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		notes: FormControl<string | null | undefined>,

		/** Parent folder id. */
		parentFolderId: FormControl<string | null | undefined>,

		/** GTM Trigger's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** The Trigger ID uniquely identifies the GTM Trigger. */
		triggerId: FormControl<string | null | undefined>,

		/** Defines the data layer event that causes this trigger. @mutable tagmanager.accounts.containers.workspaces.triggers.create @mutable tagmanager.accounts.containers.workspaces.triggers.update */
		type: FormControl<TriggerType | null | undefined>,

		/** GTM Workspace ID. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateTriggerFormGroup() {
		return new FormGroup<TriggerFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<TriggerType | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TriggerType { eventTypeUnspecified = 'eventTypeUnspecified', pageview = 'pageview', domReady = 'domReady', windowLoaded = 'windowLoaded', customEvent = 'customEvent', triggerGroup = 'triggerGroup', init = 'init', consentInit = 'consentInit', serverPageview = 'serverPageview', always = 'always', firebaseAppException = 'firebaseAppException', firebaseAppUpdate = 'firebaseAppUpdate', firebaseCampaign = 'firebaseCampaign', firebaseFirstOpen = 'firebaseFirstOpen', firebaseInAppPurchase = 'firebaseInAppPurchase', firebaseNotificationDismiss = 'firebaseNotificationDismiss', firebaseNotificationForeground = 'firebaseNotificationForeground', firebaseNotificationOpen = 'firebaseNotificationOpen', firebaseNotificationReceive = 'firebaseNotificationReceive', firebaseOsUpdate = 'firebaseOsUpdate', firebaseSessionStart = 'firebaseSessionStart', firebaseUserEngagement = 'firebaseUserEngagement', formSubmission = 'formSubmission', click = 'click', linkClick = 'linkClick', jsError = 'jsError', historyChange = 'historyChange', timer = 'timer', ampClick = 'ampClick', ampTimer = 'ampTimer', ampScroll = 'ampScroll', ampVisibility = 'ampVisibility', youTubeVideo = 'youTubeVideo', scrollDepth = 'scrollDepth', elementVisibility = 'elementVisibility' }


	/** Represents a Google Tag Manager Variable. */
	export interface Variable {

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true while all the disabling trigger are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		disablingTriggerId?: Array<string>;

		/** For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true while all the disabling triggers are false. Treated as an unordered set. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		enablingTriggerId?: Array<string>;

		/** The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified. */
		fingerprint?: string | null;
		formatValue?: VariableFormatValue;

		/** Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		name?: string | null;

		/** User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		notes?: string | null;

		/** The variable's parameters. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		parameter?: Array<Parameter>;

		/** Parent folder id. */
		parentFolderId?: string | null;

		/** GTM Variable's API relative path. */
		path?: string | null;

		/** The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		scheduleEndMs?: string | null;

		/** The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		scheduleStartMs?: string | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		type?: string | null;

		/** The Variable ID uniquely identifies the GTM Variable. */
		variableId?: string | null;

		/** GTM Workspace ID. */
		workspaceId?: string | null;
	}

	/** Represents a Google Tag Manager Variable. */
	export interface VariableFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Variable display name. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this variable in the container. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		notes: FormControl<string | null | undefined>,

		/** Parent folder id. */
		parentFolderId: FormControl<string | null | undefined>,

		/** GTM Variable's API relative path. */
		path: FormControl<string | null | undefined>,

		/** The end timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		scheduleEndMs: FormControl<string | null | undefined>,

		/** The start timestamp in milliseconds to schedule a variable. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		scheduleStartMs: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** GTM Variable Type. @mutable tagmanager.accounts.containers.workspaces.variables.create @mutable tagmanager.accounts.containers.workspaces.variables.update */
		type: FormControl<string | null | undefined>,

		/** The Variable ID uniquely identifies the GTM Variable. */
		variableId: FormControl<string | null | undefined>,

		/** GTM Workspace ID. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateVariableFormGroup() {
		return new FormGroup<VariableFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			parentFolderId: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			scheduleEndMs: new FormControl<string | null | undefined>(undefined),
			scheduleStartMs: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			variableId: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VariableFormatValue {

		/** The option to convert a string-type variable value to either lowercase or uppercase. */
		caseConversionType?: VariableFormatValueCaseConversionType | null;

		/** Represents a Google Tag Manager Parameter. */
		convertFalseToValue?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		convertNullToValue?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		convertTrueToValue?: Parameter;

		/** Represents a Google Tag Manager Parameter. */
		convertUndefinedToValue?: Parameter;
	}
	export interface VariableFormatValueFormProperties {

		/** The option to convert a string-type variable value to either lowercase or uppercase. */
		caseConversionType: FormControl<VariableFormatValueCaseConversionType | null | undefined>,
	}
	export function CreateVariableFormatValueFormGroup() {
		return new FormGroup<VariableFormatValueFormProperties>({
			caseConversionType: new FormControl<VariableFormatValueCaseConversionType | null | undefined>(undefined),
		});

	}

	export enum VariableFormatValueCaseConversionType { none = 'none', lowercase = 'lowercase', uppercase = 'uppercase' }


	/** Represents a Google Tag Manager Zone's contents. */
	export interface Zone {

		/** GTM Account ID. */
		accountId?: string | null;

		/** Represents a Zone's boundaries. */
		boundary?: ZoneBoundary;

		/** Containers that are children of this Zone. */
		childContainer?: Array<ZoneChildContainer>;

		/** GTM Container ID. */
		containerId?: string | null;

		/** The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified. */
		fingerprint?: string | null;

		/** Zone display name. */
		name?: string | null;

		/** User notes on how to apply this zone in the container. */
		notes?: string | null;

		/** GTM Zone's API relative path. */
		path?: string | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** Represents a Zone's type restrictions. */
		typeRestriction?: ZoneTypeRestriction;

		/** GTM Workspace ID. */
		workspaceId?: string | null;

		/** The Zone ID uniquely identifies the GTM Zone. */
		zoneId?: string | null;
	}

	/** Represents a Google Tag Manager Zone's contents. */
	export interface ZoneFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Zone display name. */
		name: FormControl<string | null | undefined>,

		/** User notes on how to apply this zone in the container. */
		notes: FormControl<string | null | undefined>,

		/** GTM Zone's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** GTM Workspace ID. */
		workspaceId: FormControl<string | null | undefined>,

		/** The Zone ID uniquely identifies the GTM Zone. */
		zoneId: FormControl<string | null | undefined>,
	}
	export function CreateZoneFormGroup() {
		return new FormGroup<ZoneFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
			zoneId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Zone's boundaries. */
	export interface ZoneBoundary {

		/** The conditions that, when conjoined, make up the boundary. */
		condition?: Array<Condition>;

		/** Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true. */
		customEvaluationTriggerId?: Array<string>;
	}

	/** Represents a Zone's boundaries. */
	export interface ZoneBoundaryFormProperties {
	}
	export function CreateZoneBoundaryFormGroup() {
		return new FormGroup<ZoneBoundaryFormProperties>({
		});

	}


	/** Represents a child container of a Zone. */
	export interface ZoneChildContainer {

		/** The zone's nickname for the child container. */
		nickname?: string | null;

		/** The child container's public id. */
		publicId?: string | null;
	}

	/** Represents a child container of a Zone. */
	export interface ZoneChildContainerFormProperties {

		/** The zone's nickname for the child container. */
		nickname: FormControl<string | null | undefined>,

		/** The child container's public id. */
		publicId: FormControl<string | null | undefined>,
	}
	export function CreateZoneChildContainerFormGroup() {
		return new FormGroup<ZoneChildContainerFormProperties>({
			nickname: new FormControl<string | null | undefined>(undefined),
			publicId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Zone's type restrictions. */
	export interface ZoneTypeRestriction {

		/** True if type restrictions have been enabled for this Zone. */
		enable?: boolean | null;

		/** List of type public ids that have been whitelisted for use in this Zone. */
		whitelistedTypeId?: Array<string>;
	}

	/** Represents a Zone's type restrictions. */
	export interface ZoneTypeRestrictionFormProperties {

		/** True if type restrictions have been enabled for this Zone. */
		enable: FormControl<boolean | null | undefined>,
	}
	export function CreateZoneTypeRestrictionFormGroup() {
		return new FormGroup<ZoneTypeRestrictionFormProperties>({
			enable: new FormControl<boolean | null | undefined>(undefined),
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

		/** Number of clients in the container version. */
		numClients?: string | null;

		/** Number of custom templates in the container version. */
		numCustomTemplates?: string | null;

		/** Number of Google tag configs in the container version. */
		numGtagConfigs?: string | null;

		/** Number of macros in the container version. */
		numMacros?: string | null;

		/** Number of rules in the container version. */
		numRules?: string | null;

		/** Number of tags in the container version. */
		numTags?: string | null;

		/** Number of transformations in the container version. */
		numTransformations?: string | null;

		/** Number of triggers in the container version. */
		numTriggers?: string | null;

		/** Number of variables in the container version. */
		numVariables?: string | null;

		/** Number of zones in the container version. */
		numZones?: string | null;

		/** GTM Container Version's API relative path. */
		path?: string | null;
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

		/** Number of clients in the container version. */
		numClients: FormControl<string | null | undefined>,

		/** Number of custom templates in the container version. */
		numCustomTemplates: FormControl<string | null | undefined>,

		/** Number of Google tag configs in the container version. */
		numGtagConfigs: FormControl<string | null | undefined>,

		/** Number of macros in the container version. */
		numMacros: FormControl<string | null | undefined>,

		/** Number of rules in the container version. */
		numRules: FormControl<string | null | undefined>,

		/** Number of tags in the container version. */
		numTags: FormControl<string | null | undefined>,

		/** Number of transformations in the container version. */
		numTransformations: FormControl<string | null | undefined>,

		/** Number of triggers in the container version. */
		numTriggers: FormControl<string | null | undefined>,

		/** Number of variables in the container version. */
		numVariables: FormControl<string | null | undefined>,

		/** Number of zones in the container version. */
		numZones: FormControl<string | null | undefined>,

		/** GTM Container Version's API relative path. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateContainerVersionHeaderFormGroup() {
		return new FormGroup<ContainerVersionHeaderFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			containerVersionId: new FormControl<string | null | undefined>(undefined),
			deleted: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			numClients: new FormControl<string | null | undefined>(undefined),
			numCustomTemplates: new FormControl<string | null | undefined>(undefined),
			numGtagConfigs: new FormControl<string | null | undefined>(undefined),
			numMacros: new FormControl<string | null | undefined>(undefined),
			numRules: new FormControl<string | null | undefined>(undefined),
			numTags: new FormControl<string | null | undefined>(undefined),
			numTransformations: new FormControl<string | null | undefined>(undefined),
			numTriggers: new FormControl<string | null | undefined>(undefined),
			numVariables: new FormControl<string | null | undefined>(undefined),
			numZones: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CreateBuiltInVariableResponse {

		/** List of created built-in variables. */
		builtInVariable?: Array<BuiltInVariable>;
	}
	export interface CreateBuiltInVariableResponseFormProperties {
	}
	export function CreateCreateBuiltInVariableResponseFormGroup() {
		return new FormGroup<CreateBuiltInVariableResponseFormProperties>({
		});

	}


	/** Options for new container versions. */
	export interface CreateContainerVersionRequestVersionOptions {

		/** The name of the container version to be created. */
		name?: string | null;

		/** The notes of the container version to be created. */
		notes?: string | null;
	}

	/** Options for new container versions. */
	export interface CreateContainerVersionRequestVersionOptionsFormProperties {

		/** The name of the container version to be created. */
		name: FormControl<string | null | undefined>,

		/** The notes of the container version to be created. */
		notes: FormControl<string | null | undefined>,
	}
	export function CreateCreateContainerVersionRequestVersionOptionsFormGroup() {
		return new FormGroup<CreateContainerVersionRequestVersionOptionsFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			notes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Create container versions response. */
	export interface CreateContainerVersionResponse {

		/** Compiler errors or not. */
		compilerError?: boolean | null;

		/** Represents a Google Tag Manager Container Version. */
		containerVersion?: ContainerVersion;

		/** Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview. */
		newWorkspacePath?: string | null;

		/** The status of a workspace after synchronization. */
		syncStatus?: SyncStatus;
	}

	/** Create container versions response. */
	export interface CreateContainerVersionResponseFormProperties {

		/** Compiler errors or not. */
		compilerError: FormControl<boolean | null | undefined>,

		/** Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick preview. */
		newWorkspacePath: FormControl<string | null | undefined>,
	}
	export function CreateCreateContainerVersionResponseFormGroup() {
		return new FormGroup<CreateContainerVersionResponseFormProperties>({
			compilerError: new FormControl<boolean | null | undefined>(undefined),
			newWorkspacePath: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The status of a workspace after synchronization. */
	export interface SyncStatus {

		/** Synchornization operation detected a merge conflict. */
		mergeConflict?: boolean | null;

		/** An error occurred during the synchronization operation. */
		syncError?: boolean | null;
	}

	/** The status of a workspace after synchronization. */
	export interface SyncStatusFormProperties {

		/** Synchornization operation detected a merge conflict. */
		mergeConflict: FormControl<boolean | null | undefined>,

		/** An error occurred during the synchronization operation. */
		syncError: FormControl<boolean | null | undefined>,
	}
	export function CreateSyncStatusFormGroup() {
		return new FormGroup<SyncStatusFormProperties>({
			mergeConflict: new FormControl<boolean | null | undefined>(undefined),
			syncError: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Destination. */
	export interface Destination {

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** Destination ID. */
		destinationId?: string | null;

		/** The Destination link ID uniquely identifies the Destination. */
		destinationLinkId?: string | null;

		/** The fingerprint of the Google Tag Destination as computed at storage time. This value is recomputed whenever the destination is modified. */
		fingerprint?: string | null;

		/** Destination display name. */
		name?: string | null;

		/** Destination's API relative path. */
		path?: string | null;

		/** Auto generated link to the tag manager UI. */
		tagManagerUrl?: string | null;
	}

	/** Represents a Google Tag Destination. */
	export interface DestinationFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** Destination ID. */
		destinationId: FormControl<string | null | undefined>,

		/** The Destination link ID uniquely identifies the Destination. */
		destinationLinkId: FormControl<string | null | undefined>,

		/** The fingerprint of the Google Tag Destination as computed at storage time. This value is recomputed whenever the destination is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Destination display name. */
		name: FormControl<string | null | undefined>,

		/** Destination's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI. */
		tagManagerUrl: FormControl<string | null | undefined>,
	}
	export function CreateDestinationFormGroup() {
		return new FormGroup<DestinationFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			destinationId: new FormControl<string | null | undefined>(undefined),
			destinationLinkId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace. */
	export interface Entity {

		/** Built-in variables are a special category of variables that are pre-created and non-customizable. They provide common functionality like accessing properties of the gtm data layer, monitoring clicks, or accessing elements of a page URL. */
		builtInVariable?: BuiltInVariable;

		/** Represents how the entity has been changed in the workspace. */
		changeStatus?: EntityChangeStatus | null;
		client?: Client;

		/** Represents a Google Tag Manager Custom Template's contents. */
		customTemplate?: CustomTemplate;

		/** Represents a Google Tag Manager Folder. */
		folder?: Folder;

		/** Represents a Google tag configuration. */
		gtagConfig?: GtagConfig;

		/** Represents a Google Tag Manager Tag. */
		tag?: Tag;

		/** Represents a Google Tag Manager Transformation. */
		transformation?: Transformation;

		/** Represents a Google Tag Manager Trigger */
		trigger?: Trigger;

		/** Represents a Google Tag Manager Variable. */
		variable?: Variable;

		/** Represents a Google Tag Manager Zone's contents. */
		zone?: Zone;
	}

	/** A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace. */
	export interface EntityFormProperties {

		/** Represents how the entity has been changed in the workspace. */
		changeStatus: FormControl<EntityChangeStatus | null | undefined>,
	}
	export function CreateEntityFormGroup() {
		return new FormGroup<EntityFormProperties>({
			changeStatus: new FormControl<EntityChangeStatus | null | undefined>(undefined),
		});

	}

	export enum EntityChangeStatus { changeStatusUnspecified = 'changeStatusUnspecified', none = 'none', added = 'added', deleted = 'deleted', updated = 'updated' }


	/** Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types. */
	export interface Environment {

		/** GTM Account ID. */
		accountId?: string | null;

		/** The environment authorization code. */
		authorizationCode?: string | null;

		/** The last update time-stamp for the authorization code. */
		authorizationTimestamp?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** Represents a link to a container version. */
		containerVersionId?: string | null;

		/** The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		description?: string | null;

		/** Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		enableDebug?: boolean | null;

		/** GTM Environment ID uniquely identifies the GTM Environment. */
		environmentId?: string | null;

		/** The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified. */
		fingerprint?: string | null;

		/** The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		name?: string | null;

		/** GTM Environment's API relative path. */
		path?: string | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** The type of this environment. */
		type?: EnvironmentType | null;

		/** Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		url?: string | null;

		/** Represents a link to a quick preview of a workspace. */
		workspaceId?: string | null;
	}

	/** Represents a Google Tag Manager Environment. Note that a user can create, delete and update environments of type USER, but can only update the enable_debug and url fields of environments of other types. */
	export interface EnvironmentFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** The environment authorization code. */
		authorizationCode: FormControl<string | null | undefined>,

		/** The last update time-stamp for the authorization code. */
		authorizationTimestamp: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** Represents a link to a container version. */
		containerVersionId: FormControl<string | null | undefined>,

		/** The environment description. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		description: FormControl<string | null | undefined>,

		/** Whether or not to enable debug by default for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		enableDebug: FormControl<boolean | null | undefined>,

		/** GTM Environment ID uniquely identifies the GTM Environment. */
		environmentId: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** The environment display name. Can be set or changed only on USER type environments. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		name: FormControl<string | null | undefined>,

		/** GTM Environment's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** The type of this environment. */
		type: FormControl<EnvironmentType | null | undefined>,

		/** Default preview page url for the environment. @mutable tagmanager.accounts.containers.environments.create @mutable tagmanager.accounts.containers.environments.update */
		url: FormControl<string | null | undefined>,

		/** Represents a link to a quick preview of a workspace. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateEnvironmentFormGroup() {
		return new FormGroup<EnvironmentFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			authorizationCode: new FormControl<string | null | undefined>(undefined),
			authorizationTimestamp: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			containerVersionId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			enableDebug: new FormControl<boolean | null | undefined>(undefined),
			environmentId: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<EnvironmentType | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum EnvironmentType { user = 'user', live = 'live', latest = 'latest', workspace = 'workspace' }


	/** Represents a Google Tag Manager Folder's contents. */
	export interface FolderEntities {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** The list of tags inside the folder. */
		tag?: Array<Tag>;

		/** The list of triggers inside the folder. */
		trigger?: Array<Trigger>;

		/** The list of variables inside the folder. */
		variable?: Array<Variable>;
	}

	/** Represents a Google Tag Manager Folder's contents. */
	export interface FolderEntitiesFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateFolderEntitiesFormGroup() {
		return new FormGroup<FolderEntitiesFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface GetContainerSnippetResponse {

		/** Tagging snippet for a Container. */
		snippet?: string | null;
	}
	export interface GetContainerSnippetResponseFormProperties {

		/** Tagging snippet for a Container. */
		snippet: FormControl<string | null | undefined>,
	}
	export function CreateGetContainerSnippetResponseFormGroup() {
		return new FormGroup<GetContainerSnippetResponseFormProperties>({
			snippet: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The changes that have occurred in the workspace since the base container version. */
	export interface GetWorkspaceStatusResponse {

		/** The merge conflict after sync. */
		mergeConflict?: Array<MergeConflict>;

		/** Entities that have been changed in the workspace. */
		workspaceChange?: Array<Entity>;
	}

	/** The changes that have occurred in the workspace since the base container version. */
	export interface GetWorkspaceStatusResponseFormProperties {
	}
	export function CreateGetWorkspaceStatusResponseFormGroup() {
		return new FormGroup<GetWorkspaceStatusResponseFormProperties>({
		});

	}


	/** Represents a merge conflict. */
	export interface MergeConflict {

		/** A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace. */
		entityInBaseVersion?: Entity;

		/** A workspace entity that may represent a tag, trigger, variable, or folder in addition to its status in the workspace. */
		entityInWorkspace?: Entity;
	}

	/** Represents a merge conflict. */
	export interface MergeConflictFormProperties {
	}
	export function CreateMergeConflictFormGroup() {
		return new FormGroup<MergeConflictFormProperties>({
		});

	}


	/** List Accounts Response. */
	export interface ListAccountsResponse {

		/** List of GTM Accounts that a user has access to. */
		account?: Array<Account>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}

	/** List Accounts Response. */
	export interface ListAccountsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListAccountsResponseFormGroup() {
		return new FormGroup<ListAccountsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListClientsResponse {

		/** All GTM Clients of a GTM Container. */
		client?: Array<Client>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListClientsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListClientsResponseFormGroup() {
		return new FormGroup<ListClientsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List container versions response. */
	export interface ListContainerVersionsResponse {

		/** All container version headers of a GTM Container. */
		containerVersionHeader?: Array<ContainerVersionHeader>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}

	/** List container versions response. */
	export interface ListContainerVersionsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListContainerVersionsResponseFormGroup() {
		return new FormGroup<ListContainerVersionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Containers Response. */
	export interface ListContainersResponse {

		/** All Containers of a GTM Account. */
		container?: Array<Container>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}

	/** List Containers Response. */
	export interface ListContainersResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListContainersResponseFormGroup() {
		return new FormGroup<ListContainersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListDestinationsResponse {

		/** All Destinations linked to a GTM Container. */
		destination?: Array<Destination>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListDestinationsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListDestinationsResponseFormGroup() {
		return new FormGroup<ListDestinationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of enabled built-in variables. */
	export interface ListEnabledBuiltInVariablesResponse {

		/** All GTM BuiltInVariables of a GTM container. */
		builtInVariable?: Array<BuiltInVariable>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}

	/** A list of enabled built-in variables. */
	export interface ListEnabledBuiltInVariablesResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnabledBuiltInVariablesResponseFormGroup() {
		return new FormGroup<ListEnabledBuiltInVariablesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Environments Response. */
	export interface ListEnvironmentsResponse {

		/** All Environments of a GTM Container. */
		environment?: Array<Environment>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}

	/** List Environments Response. */
	export interface ListEnvironmentsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListEnvironmentsResponseFormGroup() {
		return new FormGroup<ListEnvironmentsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Folders Response. */
	export interface ListFoldersResponse {

		/** All GTM Folders of a GTM Container. */
		folder?: Array<Folder>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}

	/** List Folders Response. */
	export interface ListFoldersResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFoldersResponseFormGroup() {
		return new FormGroup<ListFoldersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListGtagConfigResponse {

		/** All Google tag configs in a Container. */
		gtagConfig?: Array<GtagConfig>;

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;
	}
	export interface ListGtagConfigResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListGtagConfigResponseFormGroup() {
		return new FormGroup<ListGtagConfigResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Tags Response. */
	export interface ListTagsResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** All GTM Tags of a GTM Container. */
		tag?: Array<Tag>;
	}

	/** List Tags Response. */
	export interface ListTagsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTagsResponseFormGroup() {
		return new FormGroup<ListTagsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTemplatesResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** All GTM Custom Templates of a GTM Container. */
		template?: Array<CustomTemplate>;
	}
	export interface ListTemplatesResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTemplatesResponseFormGroup() {
		return new FormGroup<ListTemplatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListTransformationsResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** All GTM Transformations of a GTM Container. */
		transformation?: Array<Transformation>;
	}
	export interface ListTransformationsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTransformationsResponseFormGroup() {
		return new FormGroup<ListTransformationsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List triggers response. */
	export interface ListTriggersResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** All GTM Triggers of a GTM Container. */
		trigger?: Array<Trigger>;
	}

	/** List triggers response. */
	export interface ListTriggersResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListTriggersResponseFormGroup() {
		return new FormGroup<ListTriggersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List user permissions response. */
	export interface ListUserPermissionsResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** All GTM UserPermissions of a GTM Account. */
		userPermission?: Array<UserPermission>;
	}

	/** List user permissions response. */
	export interface ListUserPermissionsResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListUserPermissionsResponseFormGroup() {
		return new FormGroup<ListUserPermissionsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a user's permissions to an account and its container. */
	export interface UserPermission {

		/** Defines the Google Tag Manager Account access permissions. */
		accountAccess?: AccountAccess;

		/** The Account ID uniquely identifies the GTM Account. */
		accountId?: string | null;

		/** GTM Container access permissions. @mutable tagmanager.accounts.permissions.create @mutable tagmanager.accounts.permissions.update */
		containerAccess?: Array<ContainerAccess>;

		/** User's email address. @mutable tagmanager.accounts.permissions.create */
		emailAddress?: string | null;

		/** GTM UserPermission's API relative path. */
		path?: string | null;
	}

	/** Represents a user's permissions to an account and its container. */
	export interface UserPermissionFormProperties {

		/** The Account ID uniquely identifies the GTM Account. */
		accountId: FormControl<string | null | undefined>,

		/** User's email address. @mutable tagmanager.accounts.permissions.create */
		emailAddress: FormControl<string | null | undefined>,

		/** GTM UserPermission's API relative path. */
		path: FormControl<string | null | undefined>,
	}
	export function CreateUserPermissionFormGroup() {
		return new FormGroup<UserPermissionFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			emailAddress: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** List Variables Response. */
	export interface ListVariablesResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** All GTM Variables of a GTM Container. */
		variable?: Array<Variable>;
	}

	/** List Variables Response. */
	export interface ListVariablesResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListVariablesResponseFormGroup() {
		return new FormGroup<ListVariablesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A list of workspaces in a container. */
	export interface ListWorkspacesResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** All Workspaces of a GTM Container. */
		workspace?: Array<Workspace>;
	}

	/** A list of workspaces in a container. */
	export interface ListWorkspacesResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListWorkspacesResponseFormGroup() {
		return new FormGroup<ListWorkspacesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a Google Tag Manager Container Workspace. */
	export interface Workspace {

		/** GTM Account ID. */
		accountId?: string | null;

		/** GTM Container ID. */
		containerId?: string | null;

		/** Workspace description. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update */
		description?: string | null;

		/** The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified. */
		fingerprint?: string | null;

		/** Workspace display name. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update */
		name?: string | null;

		/** GTM Workspace's API relative path. */
		path?: string | null;

		/** Auto generated link to the tag manager UI */
		tagManagerUrl?: string | null;

		/** The Workspace ID uniquely identifies the GTM Workspace. */
		workspaceId?: string | null;
	}

	/** Represents a Google Tag Manager Container Workspace. */
	export interface WorkspaceFormProperties {

		/** GTM Account ID. */
		accountId: FormControl<string | null | undefined>,

		/** GTM Container ID. */
		containerId: FormControl<string | null | undefined>,

		/** Workspace description. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update */
		description: FormControl<string | null | undefined>,

		/** The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified. */
		fingerprint: FormControl<string | null | undefined>,

		/** Workspace display name. @mutable tagmanager.accounts.containers.workspaces.create @mutable tagmanager.accounts.containers.workspaces.update */
		name: FormControl<string | null | undefined>,

		/** GTM Workspace's API relative path. */
		path: FormControl<string | null | undefined>,

		/** Auto generated link to the tag manager UI */
		tagManagerUrl: FormControl<string | null | undefined>,

		/** The Workspace ID uniquely identifies the GTM Workspace. */
		workspaceId: FormControl<string | null | undefined>,
	}
	export function CreateWorkspaceFormGroup() {
		return new FormGroup<WorkspaceFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			containerId: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			tagManagerUrl: new FormControl<string | null | undefined>(undefined),
			workspaceId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ListZonesResponse {

		/** Continuation token for fetching the next page of results. */
		nextPageToken?: string | null;

		/** All GTM Zones of a GTM Container. */
		zone?: Array<Zone>;
	}
	export interface ListZonesResponseFormProperties {

		/** Continuation token for fetching the next page of results. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListZonesResponseFormGroup() {
		return new FormGroup<ListZonesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
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


	/** Response to quick previewing a workspace. */
	export interface QuickPreviewResponse {

		/** Were there compiler errors or not. */
		compilerError?: boolean | null;

		/** Represents a Google Tag Manager Container Version. */
		containerVersion?: ContainerVersion;

		/** The status of a workspace after synchronization. */
		syncStatus?: SyncStatus;
	}

	/** Response to quick previewing a workspace. */
	export interface QuickPreviewResponseFormProperties {

		/** Were there compiler errors or not. */
		compilerError: FormControl<boolean | null | undefined>,
	}
	export function CreateQuickPreviewResponseFormGroup() {
		return new FormGroup<QuickPreviewResponseFormProperties>({
			compilerError: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The result of reverting a built-in variable in a workspace. */
	export interface RevertBuiltInVariableResponse {

		/** Whether the built-in variable is enabled after reversion. */
		enabled?: boolean | null;
	}

	/** The result of reverting a built-in variable in a workspace. */
	export interface RevertBuiltInVariableResponseFormProperties {

		/** Whether the built-in variable is enabled after reversion. */
		enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateRevertBuiltInVariableResponseFormGroup() {
		return new FormGroup<RevertBuiltInVariableResponseFormProperties>({
			enabled: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** The result of reverting a client in a workspace. */
	export interface RevertClientResponse {
		client?: Client;
	}

	/** The result of reverting a client in a workspace. */
	export interface RevertClientResponseFormProperties {
	}
	export function CreateRevertClientResponseFormGroup() {
		return new FormGroup<RevertClientResponseFormProperties>({
		});

	}


	/** The result of reverting folder changes in a workspace. */
	export interface RevertFolderResponse {

		/** Represents a Google Tag Manager Folder. */
		folder?: Folder;
	}

	/** The result of reverting folder changes in a workspace. */
	export interface RevertFolderResponseFormProperties {
	}
	export function CreateRevertFolderResponseFormGroup() {
		return new FormGroup<RevertFolderResponseFormProperties>({
		});

	}


	/** The result of reverting a tag in a workspace. */
	export interface RevertTagResponse {

		/** Represents a Google Tag Manager Tag. */
		tag?: Tag;
	}

	/** The result of reverting a tag in a workspace. */
	export interface RevertTagResponseFormProperties {
	}
	export function CreateRevertTagResponseFormGroup() {
		return new FormGroup<RevertTagResponseFormProperties>({
		});

	}


	/** The result of reverting a template in a workspace. */
	export interface RevertTemplateResponse {

		/** Represents a Google Tag Manager Custom Template's contents. */
		template?: CustomTemplate;
	}

	/** The result of reverting a template in a workspace. */
	export interface RevertTemplateResponseFormProperties {
	}
	export function CreateRevertTemplateResponseFormGroup() {
		return new FormGroup<RevertTemplateResponseFormProperties>({
		});

	}


	/** The result of reverting a transformation in a workspace. */
	export interface RevertTransformationResponse {

		/** Represents a Google Tag Manager Transformation. */
		transformation?: Transformation;
	}

	/** The result of reverting a transformation in a workspace. */
	export interface RevertTransformationResponseFormProperties {
	}
	export function CreateRevertTransformationResponseFormGroup() {
		return new FormGroup<RevertTransformationResponseFormProperties>({
		});

	}


	/** The result of reverting a trigger in a workspace. */
	export interface RevertTriggerResponse {

		/** Represents a Google Tag Manager Trigger */
		trigger?: Trigger;
	}

	/** The result of reverting a trigger in a workspace. */
	export interface RevertTriggerResponseFormProperties {
	}
	export function CreateRevertTriggerResponseFormGroup() {
		return new FormGroup<RevertTriggerResponseFormProperties>({
		});

	}


	/** The result of reverting a variable in a workspace. */
	export interface RevertVariableResponse {

		/** Represents a Google Tag Manager Variable. */
		variable?: Variable;
	}

	/** The result of reverting a variable in a workspace. */
	export interface RevertVariableResponseFormProperties {
	}
	export function CreateRevertVariableResponseFormGroup() {
		return new FormGroup<RevertVariableResponseFormProperties>({
		});

	}


	/** The result of reverting a zone in a workspace. */
	export interface RevertZoneResponse {

		/** Represents a Google Tag Manager Zone's contents. */
		zone?: Zone;
	}

	/** The result of reverting a zone in a workspace. */
	export interface RevertZoneResponseFormProperties {
	}
	export function CreateRevertZoneResponseFormGroup() {
		return new FormGroup<RevertZoneResponseFormProperties>({
		});

	}


	/** A response after synchronizing the workspace to the latest container version. */
	export interface SyncWorkspaceResponse {

		/** The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts are resolved. */
		mergeConflict?: Array<MergeConflict>;

		/** The status of a workspace after synchronization. */
		syncStatus?: SyncStatus;
	}

	/** A response after synchronizing the workspace to the latest container version. */
	export interface SyncWorkspaceResponseFormProperties {
	}
	export function CreateSyncWorkspaceResponseFormGroup() {
		return new FormGroup<SyncWorkspaceResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Lists all GTM Accounts that a user has access to.
		 * Get tagmanager/v2/accounts
		 * @param {boolean} includeGoogleTags Also retrieve accounts associated with Google Tag when true.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListAccountsResponse} Successful response
		 */
		Tagmanager_accounts_list(includeGoogleTags: boolean | null | undefined, pageToken: string | null | undefined): Observable<ListAccountsResponse> {
			return this.http.get<ListAccountsResponse>(this.baseUri + 'tagmanager/v2/accounts?includeGoogleTags=' + includeGoogleTags + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Looks up a Container by destination ID.
		 * Get tagmanager/v2/accounts/containers:lookup
		 * @param {string} destinationId Destination ID linked to a GTM Container, e.g. AW-123456789. Example: accounts/containers:lookup?destination_id={destination_id}.
		 * @return {Container} Successful response
		 */
		Tagmanager_accounts_containers_lookup(destinationId: string | null | undefined): Observable<Container> {
			return this.http.get<Container>(this.baseUri + 'tagmanager/v2/accounts/containers:lookup?destinationId=' + (destinationId == null ? '' : encodeURIComponent(destinationId)), {});
		}

		/**
		 * Lists all the enabled Built-In Variables of a GTM Container.
		 * Get tagmanager/v2/{parent}/built_in_variables
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListEnabledBuiltInVariablesResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_built_in_variables_list(parent: string, pageToken: string | null | undefined): Observable<ListEnabledBuiltInVariablesResponse> {
			return this.http.get<ListEnabledBuiltInVariablesResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/built_in_variables&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates one or more GTM Built-In Variables.
		 * Post tagmanager/v2/{parent}/built_in_variables
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {Array<BuiltInVariableType>} type The types of built-in variables to enable.
		 * @return {CreateBuiltInVariableResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_built_in_variables_create(parent: string, type: Array<BuiltInVariableType> | null | undefined): Observable<CreateBuiltInVariableResponse> {
			return this.http.post<CreateBuiltInVariableResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/built_in_variables&' + type?.map(z => `type=${z}`).join('&'), null, {});
		}

		/**
		 * Lists all GTM Clients of a GTM container workspace.
		 * Get tagmanager/v2/{parent}/clients
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListClientsResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_clients_list(parent: string, pageToken: string | null | undefined): Observable<ListClientsResponse> {
			return this.http.get<ListClientsResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clients&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GTM Client.
		 * Post tagmanager/v2/{parent}/clients
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {Client} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_clients_create(parent: string, requestBody: Client): Observable<Client> {
			return this.http.post<Client>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/clients', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Containers that belongs to a GTM Account.
		 * Get tagmanager/v2/{parent}/containers
		 * @param {string} parent GTM Account's API relative path. Example: accounts/{account_id}.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListContainersResponse} Successful response
		 */
		Tagmanager_accounts_containers_list(parent: string, pageToken: string | null | undefined): Observable<ListContainersResponse> {
			return this.http.get<ListContainersResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/containers&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Container.
		 * Post tagmanager/v2/{parent}/containers
		 * @param {string} parent GTM Account's API relative path. Example: accounts/{account_id}.
		 * @return {Container} Successful response
		 */
		Tagmanager_accounts_containers_create(parent: string, requestBody: Container): Observable<Container> {
			return this.http.post<Container>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/containers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Destinations linked to a GTM Container.
		 * Get tagmanager/v2/{parent}/destinations
		 * @param {string} parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @return {ListDestinationsResponse} Successful response
		 */
		Tagmanager_accounts_containers_destinations_list(parent: string): Observable<ListDestinationsResponse> {
			return this.http.get<ListDestinationsResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/destinations', {});
		}

		/**
		 * Adds a Destination to this Container and removes it from the Container to which it is currently linked.
		 * Post tagmanager/v2/{parent}/destinations:link
		 * @param {string} parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @param {boolean} allowUserPermissionFeatureUpdate Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
		 * @param {string} destinationId Destination ID to be linked to the current container.
		 * @return {Destination} Successful response
		 */
		Tagmanager_accounts_containers_destinations_link(parent: string, allowUserPermissionFeatureUpdate: boolean | null | undefined, destinationId: string | null | undefined): Observable<Destination> {
			return this.http.post<Destination>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/destinations:link&allowUserPermissionFeatureUpdate=' + allowUserPermissionFeatureUpdate + '&destinationId=' + (destinationId == null ? '' : encodeURIComponent(destinationId)), null, {});
		}

		/**
		 * Lists all GTM Environments of a GTM Container.
		 * Get tagmanager/v2/{parent}/environments
		 * @param {string} parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListEnvironmentsResponse} Successful response
		 */
		Tagmanager_accounts_containers_environments_list(parent: string, pageToken: string | null | undefined): Observable<ListEnvironmentsResponse> {
			return this.http.get<ListEnvironmentsResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GTM Environment.
		 * Post tagmanager/v2/{parent}/environments
		 * @param {string} parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @return {Environment} Successful response
		 */
		Tagmanager_accounts_containers_environments_create(parent: string, requestBody: Environment): Observable<Environment> {
			return this.http.post<Environment>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/environments', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Folders of a Container.
		 * Get tagmanager/v2/{parent}/folders
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListFoldersResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_folders_list(parent: string, pageToken: string | null | undefined): Observable<ListFoldersResponse> {
			return this.http.get<ListFoldersResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/folders&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GTM Folder.
		 * Post tagmanager/v2/{parent}/folders
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {Folder} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_folders_create(parent: string, requestBody: Folder): Observable<Folder> {
			return this.http.post<Folder>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/folders', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Google tag configs in a Container.
		 * Get tagmanager/v2/{parent}/gtag_config
		 * @param {string} parent Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListGtagConfigResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_gtag_config_list(parent: string, pageToken: string | null | undefined): Observable<ListGtagConfigResponse> {
			return this.http.get<ListGtagConfigResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gtag_config&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Google tag config.
		 * Post tagmanager/v2/{parent}/gtag_config
		 * @param {string} parent Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {GtagConfig} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_gtag_config_create(parent: string, requestBody: GtagConfig): Observable<GtagConfig> {
			return this.http.post<GtagConfig>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/gtag_config', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Tags of a Container.
		 * Get tagmanager/v2/{parent}/tags
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListTagsResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_tags_list(parent: string, pageToken: string | null | undefined): Observable<ListTagsResponse> {
			return this.http.get<ListTagsResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tags&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GTM Tag.
		 * Post tagmanager/v2/{parent}/tags
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {Tag} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_tags_create(parent: string, requestBody: Tag): Observable<Tag> {
			return this.http.post<Tag>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/tags', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Templates of a GTM container workspace.
		 * Get tagmanager/v2/{parent}/templates
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListTemplatesResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_templates_list(parent: string, pageToken: string | null | undefined): Observable<ListTemplatesResponse> {
			return this.http.get<ListTemplatesResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/templates&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GTM Custom Template.
		 * Post tagmanager/v2/{parent}/templates
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {CustomTemplate} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_templates_create(parent: string, requestBody: CustomTemplate): Observable<CustomTemplate> {
			return this.http.post<CustomTemplate>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/templates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Transformations of a GTM container workspace.
		 * Get tagmanager/v2/{parent}/transformations
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListTransformationsResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_transformations_list(parent: string, pageToken: string | null | undefined): Observable<ListTransformationsResponse> {
			return this.http.get<ListTransformationsResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/transformations&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GTM Transformation.
		 * Post tagmanager/v2/{parent}/transformations
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {Transformation} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_transformations_create(parent: string, requestBody: Transformation): Observable<Transformation> {
			return this.http.post<Transformation>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/transformations', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Triggers of a Container.
		 * Get tagmanager/v2/{parent}/triggers
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListTriggersResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_triggers_list(parent: string, pageToken: string | null | undefined): Observable<ListTriggersResponse> {
			return this.http.get<ListTriggersResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/triggers&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GTM Trigger.
		 * Post tagmanager/v2/{parent}/triggers
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {Trigger} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_triggers_create(parent: string, requestBody: Trigger): Observable<Trigger> {
			return this.http.post<Trigger>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/triggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all users that have access to the account along with Account and Container user access granted to each of them.
		 * Get tagmanager/v2/{parent}/user_permissions
		 * @param {string} parent GTM Account's API relative path. Example: accounts/{account_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListUserPermissionsResponse} Successful response
		 */
		Tagmanager_accounts_user_permissions_list(parent: string, pageToken: string | null | undefined): Observable<ListUserPermissionsResponse> {
			return this.http.get<ListUserPermissionsResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/user_permissions&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a user's Account & Container access.
		 * Post tagmanager/v2/{parent}/user_permissions
		 * @param {string} parent GTM Account's API relative path. Example: accounts/{account_id}
		 * @return {UserPermission} Successful response
		 */
		Tagmanager_accounts_user_permissions_create(parent: string, requestBody: UserPermission): Observable<UserPermission> {
			return this.http.post<UserPermission>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/user_permissions', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Variables of a Container.
		 * Get tagmanager/v2/{parent}/variables
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListVariablesResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_variables_list(parent: string, pageToken: string | null | undefined): Observable<ListVariablesResponse> {
			return this.http.get<ListVariablesResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/variables&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GTM Variable.
		 * Post tagmanager/v2/{parent}/variables
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {Variable} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_variables_create(parent: string, requestBody: Variable): Observable<Variable> {
			return this.http.post<Variable>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/variables', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all Container Versions of a GTM Container.
		 * Get tagmanager/v2/{parent}/version_headers
		 * @param {string} parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @param {boolean} includeDeleted Also retrieve deleted (archived) versions when true.
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListContainerVersionsResponse} Successful response
		 */
		Tagmanager_accounts_containers_version_headers_list(parent: string, includeDeleted: boolean | null | undefined, pageToken: string | null | undefined): Observable<ListContainerVersionsResponse> {
			return this.http.get<ListContainerVersionsResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/version_headers&includeDeleted=' + includeDeleted + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Gets the latest container version header
		 * Get tagmanager/v2/{parent}/version_headers:latest
		 * @param {string} parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @return {ContainerVersionHeader} Successful response
		 */
		Tagmanager_accounts_containers_version_headers_latest(parent: string): Observable<ContainerVersionHeader> {
			return this.http.get<ContainerVersionHeader>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/version_headers:latest', {});
		}

		/**
		 * Gets the live (i.e. published) container version
		 * Get tagmanager/v2/{parent}/versions:live
		 * @param {string} parent GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @return {ContainerVersion} Successful response
		 */
		Tagmanager_accounts_containers_versions_live(parent: string): Observable<ContainerVersion> {
			return this.http.get<ContainerVersion>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/versions:live', {});
		}

		/**
		 * Lists all Workspaces that belong to a GTM Container.
		 * Get tagmanager/v2/{parent}/workspaces
		 * @param {string} parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListWorkspacesResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_list(parent: string, pageToken: string | null | undefined): Observable<ListWorkspacesResponse> {
			return this.http.get<ListWorkspacesResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workspaces&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a Workspace.
		 * Post tagmanager/v2/{parent}/workspaces
		 * @param {string} parent GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @return {Workspace} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_create(parent: string, requestBody: Workspace): Observable<Workspace> {
			return this.http.post<Workspace>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/workspaces', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Lists all GTM Zones of a GTM container workspace.
		 * Get tagmanager/v2/{parent}/zones
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {ListZonesResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_zones_list(parent: string, pageToken: string | null | undefined): Observable<ListZonesResponse> {
			return this.http.get<ListZonesResponse>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/zones&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Creates a GTM Zone.
		 * Post tagmanager/v2/{parent}/zones
		 * @param {string} parent GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {Zone} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_zones_create(parent: string, requestBody: Zone): Observable<Zone> {
			return this.http.post<Zone>(this.baseUri + 'tagmanager/v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/zones', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Removes a user from the account, revoking access to it and all of its containers.
		 * Delete tagmanager/v2/{path}
		 * @param {string} path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
		 * @param {Array<BuiltInVariableType>} type The types of built-in variables to delete.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_user_permissions_delete(path: string, type: Array<BuiltInVariableType> | null | undefined): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + '&' + type?.map(z => `type=${z}`).join('&'), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a user's Account & Container access.
		 * Get tagmanager/v2/{path}
		 * @param {string} path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
		 * @param {string} containerVersionId The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
		 * @return {UserPermission} Successful response
		 */
		Tagmanager_accounts_user_permissions_get(path: string, containerVersionId: string | null | undefined): Observable<UserPermission> {
			return this.http.get<UserPermission>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + '&containerVersionId=' + (containerVersionId == null ? '' : encodeURIComponent(containerVersionId)), {});
		}

		/**
		 * Updates a user's Account & Container access.
		 * Put tagmanager/v2/{path}
		 * @param {string} path GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the zone in storage.
		 * @return {UserPermission} Successful response
		 */
		Tagmanager_accounts_user_permissions_update(path: string, fingerprint: string | null | undefined, requestBody: UserPermission): Observable<UserPermission> {
			return this.http.put<UserPermission>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + '&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reverts changes to a GTM Built-In Variables in a GTM Workspace.
		 * Post tagmanager/v2/{path}/built_in_variables:revert
		 * @param {string} path GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
		 * @param {BuiltInVariableType} type The type of built-in variable to revert.
		 * @return {RevertBuiltInVariableResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_built_in_variables_revert(path: string, type: BuiltInVariableType | null | undefined): Observable<RevertBuiltInVariableResponse> {
			return this.http.post<RevertBuiltInVariableResponse>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + '/built_in_variables:revert&type=' + type, null, {});
		}

		/**
		 * Finds conflicting and modified entities in the workspace.
		 * Get tagmanager/v2/{path}/status
		 * @param {string} path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {GetWorkspaceStatusResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_getStatus(path: string): Observable<GetWorkspaceStatusResponse> {
			return this.http.get<GetWorkspaceStatusResponse>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + '/status', {});
		}

		/**
		 * Combines Containers.
		 * Post tagmanager/v2/{path}:combine
		 * @param {string} path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @param {boolean} allowUserPermissionFeatureUpdate Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
		 * @param {string} containerId ID of container that will be merged into the current container.
		 * @param {Tagmanager_accounts_containers_combineSettingSource} settingSource Specify the source of config setting after combine
		 * @return {Container} Successful response
		 */
		Tagmanager_accounts_containers_combine(path: string, allowUserPermissionFeatureUpdate: boolean | null | undefined, containerId: string | null | undefined, settingSource: Tagmanager_accounts_containers_combineSettingSource | null | undefined): Observable<Container> {
			return this.http.post<Container>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':combine&allowUserPermissionFeatureUpdate=' + allowUserPermissionFeatureUpdate + '&containerId=' + (containerId == null ? '' : encodeURIComponent(containerId)) + '&settingSource=' + settingSource, null, {});
		}

		/**
		 * Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.
		 * Post tagmanager/v2/{path}:create_version
		 * @param {string} path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {CreateContainerVersionResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_create_version(path: string, requestBody: CreateContainerVersionRequestVersionOptions): Observable<CreateContainerVersionResponse> {
			return this.http.post<CreateContainerVersionResponse>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':create_version', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * List all entities in a GTM Folder.
		 * Post tagmanager/v2/{path}:entities
		 * @param {string} path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
		 * @param {string} pageToken Continuation token for fetching the next page of results.
		 * @return {FolderEntities} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_folders_entities(path: string, pageToken: string | null | undefined): Observable<FolderEntities> {
			return this.http.post<FolderEntities>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':entities&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), null, {});
		}

		/**
		 * Moves entities to a GTM Folder. If {folder_id} in the request path equals 0, this will instead move entities out of the folder they currently belong to.
		 * Post tagmanager/v2/{path}:move_entities_to_folder
		 * @param {string} path GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
		 * @param {Array<string>} tagId The tags to be moved to the folder.
		 * @param {Array<string>} triggerId The triggers to be moved to the folder.
		 * @param {Array<string>} variableId The variables to be moved to the folder.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_folders_move_entities_to_folder(path: string, tagId: Array<string> | null | undefined, triggerId: Array<string> | null | undefined, variableId: Array<string> | null | undefined, requestBody: Folder): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':move_entities_to_folder&' + tagId?.map(z => `tagId=${encodeURIComponent(z)}`).join('&') + '&' + triggerId?.map(z => `triggerId=${encodeURIComponent(z)}`).join('&') + '&' + variableId?.map(z => `variableId=${encodeURIComponent(z)}`).join('&'), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Move Tag ID out of a Container.
		 * Post tagmanager/v2/{path}:move_tag_id
		 * @param {string} path GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
		 * @param {boolean} allowUserPermissionFeatureUpdate Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail.
		 * @param {boolean} copySettings Whether or not to copy tag settings from this tag to the new tag.
		 * @param {boolean} copyTermsOfService Must be set to true to accept all terms of service agreements copied from the current tag to the newly created tag. If this bit is false, the operation will fail.
		 * @param {boolean} copyUsers Whether or not to copy users from this tag to the new tag.
		 * @param {string} tagId Tag ID to be removed from the current Container.
		 * @param {string} tagName The name for the newly created tag.
		 * @return {Container} Successful response
		 */
		Tagmanager_accounts_containers_move_tag_id(path: string, allowUserPermissionFeatureUpdate: boolean | null | undefined, copySettings: boolean | null | undefined, copyTermsOfService: boolean | null | undefined, copyUsers: boolean | null | undefined, tagId: string | null | undefined, tagName: string | null | undefined): Observable<Container> {
			return this.http.post<Container>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':move_tag_id&allowUserPermissionFeatureUpdate=' + allowUserPermissionFeatureUpdate + '&copySettings=' + copySettings + '&copyTermsOfService=' + copyTermsOfService + '&copyUsers=' + copyUsers + '&tagId=' + (tagId == null ? '' : encodeURIComponent(tagId)) + '&tagName=' + (tagName == null ? '' : encodeURIComponent(tagName)), null, {});
		}

		/**
		 * Publishes a Container Version.
		 * Post tagmanager/v2/{path}:publish
		 * @param {string} path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the container version in storage.
		 * @return {PublishContainerVersionResponse} Successful response
		 */
		Tagmanager_accounts_containers_versions_publish(path: string, fingerprint: string | null | undefined): Observable<PublishContainerVersionResponse> {
			return this.http.post<PublishContainerVersionResponse>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':publish&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), null, {});
		}

		/**
		 * Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
		 * Post tagmanager/v2/{path}:quick_preview
		 * @param {string} path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {QuickPreviewResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_quick_preview(path: string): Observable<QuickPreviewResponse> {
			return this.http.post<QuickPreviewResponse>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':quick_preview', null, {});
		}

		/**
		 * Re-generates the authorization code for a GTM Environment.
		 * Post tagmanager/v2/{path}:reauthorize
		 * @param {string} path GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
		 * @return {Environment} Successful response
		 */
		Tagmanager_accounts_containers_environments_reauthorize(path: string, requestBody: Environment): Observable<Environment> {
			return this.http.post<Environment>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':reauthorize', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
		 * Post tagmanager/v2/{path}:resolve_conflict
		 * @param {string} path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
		 * @return {void} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_resolve_conflict(path: string, fingerprint: string | null | undefined, requestBody: Entity): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':resolve_conflict&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Reverts changes to a GTM Zone in a GTM Workspace.
		 * Post tagmanager/v2/{path}:revert
		 * @param {string} path GTM Zone's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/zones/{zone_id}
		 * @param {string} fingerprint When provided, this fingerprint must match the fingerprint of the zone in storage.
		 * @return {RevertZoneResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_zones_revert(path: string, fingerprint: string | null | undefined): Observable<RevertZoneResponse> {
			return this.http.post<RevertZoneResponse>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':revert&fingerprint=' + (fingerprint == null ? '' : encodeURIComponent(fingerprint)), null, {});
		}

		/**
		 * Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
		 * Post tagmanager/v2/{path}:set_latest
		 * @param {string} path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
		 * @return {ContainerVersion} Successful response
		 */
		Tagmanager_accounts_containers_versions_set_latest(path: string): Observable<ContainerVersion> {
			return this.http.post<ContainerVersion>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':set_latest', null, {});
		}

		/**
		 * Gets the tagging snippet for a Container.
		 * Get tagmanager/v2/{path}:snippet
		 * @param {string} path Container snippet's API relative path. Example: accounts/{account_id}/containers/{container_id}:snippet
		 * @return {GetContainerSnippetResponse} Successful response
		 */
		Tagmanager_accounts_containers_snippet(path: string): Observable<GetContainerSnippetResponse> {
			return this.http.get<GetContainerSnippetResponse>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':snippet', {});
		}

		/**
		 * Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
		 * Post tagmanager/v2/{path}:sync
		 * @param {string} path GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
		 * @return {SyncWorkspaceResponse} Successful response
		 */
		Tagmanager_accounts_containers_workspaces_sync(path: string): Observable<SyncWorkspaceResponse> {
			return this.http.post<SyncWorkspaceResponse>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':sync', null, {});
		}

		/**
		 * Undeletes a Container Version.
		 * Post tagmanager/v2/{path}:undelete
		 * @param {string} path GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
		 * @return {ContainerVersion} Successful response
		 */
		Tagmanager_accounts_containers_versions_undelete(path: string): Observable<ContainerVersion> {
			return this.http.post<ContainerVersion>(this.baseUri + 'tagmanager/v2/' + (path == null ? '' : encodeURIComponent(path)) + ':undelete', null, {});
		}
	}

	export enum Tagmanager_accounts_containers_combineSettingSource { settingSourceUnspecified = 'settingSourceUnspecified', current = 'current', other = 'other' }

}

