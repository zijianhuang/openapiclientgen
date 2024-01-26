import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Result message for VerifiedAccess.GenerateChallenge. */
	export interface Challenge {

		/** Generated challenge, the bytes representation of SignedData. */
		challenge?: string | null;
	}

	/** Result message for VerifiedAccess.GenerateChallenge. */
	export interface ChallengeFormProperties {

		/** Generated challenge, the bytes representation of SignedData. */
		challenge: FormControl<string | null | undefined>,
	}
	export function CreateChallengeFormGroup() {
		return new FormGroup<ChallengeFormProperties>({
			challenge: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Properties of the CrowdStrike agent installed on a device. */
	export interface CrowdStrikeAgent {

		/** The Agent ID of the Crowdstrike agent. */
		agentId?: string | null;

		/** The Customer ID to which the agent belongs to. */
		customerId?: string | null;
	}

	/** Properties of the CrowdStrike agent installed on a device. */
	export interface CrowdStrikeAgentFormProperties {

		/** The Agent ID of the Crowdstrike agent. */
		agentId: FormControl<string | null | undefined>,

		/** The Customer ID to which the agent belongs to. */
		customerId: FormControl<string | null | undefined>,
	}
	export function CreateCrowdStrikeAgentFormGroup() {
		return new FormGroup<CrowdStrikeAgentFormProperties>({
			agentId: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The device signals as reported by Chrome. Unless otherwise specified, signals are available on all platforms. */
	export interface DeviceSignals {

		/** Value of the AllowScreenLock policy on the device. See https://chromeenterprise.google/policies/?policy=AllowScreenLock for more details. Available on ChromeOS only. */
		allowScreenLock?: boolean | null;

		/** Current version of the Chrome browser which generated this set of signals. Example value: "107.0.5286.0". */
		browserVersion?: string | null;

		/** Whether Chrome's built-in DNS client is used. The OS DNS client is otherwise used. This value may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#BuiltInDnsClientEnabled. */
		builtInDnsClientEnabled?: boolean | null;

		/** Whether access to the Chrome Remote Desktop application is blocked via a policy. */
		chromeRemoteDesktopAppBlocked?: boolean | null;

		/** Properties of the CrowdStrike agent installed on a device. */
		crowdStrikeAgent?: CrowdStrikeAgent;

		/** Affiliation IDs of the organizations that are affiliated with the organization that is currently managing the device. When the sets of device and profile affiliation IDs overlap, it means that the organizations managing the device and user are affiliated. To learn more about user affiliation, visit https://support.google.com/chrome/a/answer/12801245?ref_topic=9027936. */
		deviceAffiliationIds?: Array<string>;

		/** Enrollment domain of the customer which is currently managing the device. */
		deviceEnrollmentDomain?: string | null;

		/** The name of the device's manufacturer. */
		deviceManufacturer?: string | null;

		/** The name of the device's model. */
		deviceModel?: string | null;

		/** The encryption state of the disk. On ChromeOS, the main disk is always ENCRYPTED. */
		diskEncryption?: DeviceSignalsDiskEncryption | null;

		/** The display name of the device, as defined by the user. */
		displayName?: string | null;

		/** Hostname of the device. */
		hostname?: string | null;

		/** International Mobile Equipment Identity (IMEI) of the device. Available on ChromeOS only. */
		imei?: Array<string>;

		/** MAC addresses of the device. */
		macAddresses?: Array<string>;

		/** Mobile Equipment Identifier (MEID) of the device. Available on ChromeOS only. */
		meid?: Array<string>;

		/** The type of the Operating System currently running on the device. */
		operatingSystem?: DeviceSignalsOperatingSystem | null;

		/** The state of the OS level firewall. On ChromeOS, the value will always be ENABLED on regular devices and UNKNOWN on devices in developer mode. */
		osFirewall?: DeviceSignalsOsFirewall | null;

		/** The current version of the Operating System. On Windows and linux, the value will also include the security patch information. */
		osVersion?: string | null;

		/** Whether the Password Protection Warning feature is enabled or not. Password protection alerts users when they reuse their protected password on potentially suspicious sites. This setting is controlled by an enterprise policy: https://chromeenterprise.google/policies/#PasswordProtectionWarningTrigger. Note that the policy unset does not have the same effects as having the policy explicitly set to `PASSWORD_PROTECTION_OFF`. */
		passwordProtectionWarningTrigger?: DeviceSignalsPasswordProtectionWarningTrigger | null;

		/** Affiliation IDs of the organizations that are affiliated with the organization that is currently managing the Chrome Profile’s user or ChromeOS user. */
		profileAffiliationIds?: Array<string>;

		/** Whether Enterprise-grade (i.e. custom) unsafe URL scanning is enabled or not. This setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#EnterpriseRealTimeUrlCheckMode */
		realtimeUrlCheckMode?: DeviceSignalsRealtimeUrlCheckMode | null;

		/** Safe Browsing Protection Level. That setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel. */
		safeBrowsingProtectionLevel?: DeviceSignalsSafeBrowsingProtectionLevel | null;

		/** The state of the Screen Lock password protection. On ChromeOS, this value will always be ENABLED as there is not way to disable requiring a password or pin when unlocking the device. */
		screenLockSecured?: DeviceSignalsScreenLockSecured | null;

		/** Whether the device's startup software has its Secure Boot feature enabled. Available on Windows only. */
		secureBootMode?: DeviceSignalsSecureBootMode | null;

		/** The serial number of the device. On Windows, this represents the BIOS's serial number. Not available on most Linux distributions. */
		serialNumber?: string | null;

		/** Whether the Site Isolation (a.k.a Site Per Process) setting is enabled. That setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#SitePerProcess */
		siteIsolationEnabled?: boolean | null;

		/** List of the addesses of all OS level DNS servers configured in the device's network settings. */
		systemDnsServers?: Array<string>;

		/** Whether Chrome is blocking third-party software injection or not. This setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/?policy=ThirdPartyBlockingEnabled. Available on Windows only. */
		thirdPartyBlockingEnabled?: boolean | null;

		/** The trigger which generated this set of signals. */
		trigger?: DeviceSignalsTrigger | null;

		/** Windows domain that the current machine has joined. Available on Windows only. */
		windowsMachineDomain?: string | null;

		/** Windows domain for the current OS user. Available on Windows only. */
		windowsUserDomain?: string | null;
	}

	/** The device signals as reported by Chrome. Unless otherwise specified, signals are available on all platforms. */
	export interface DeviceSignalsFormProperties {

		/** Value of the AllowScreenLock policy on the device. See https://chromeenterprise.google/policies/?policy=AllowScreenLock for more details. Available on ChromeOS only. */
		allowScreenLock: FormControl<boolean | null | undefined>,

		/** Current version of the Chrome browser which generated this set of signals. Example value: "107.0.5286.0". */
		browserVersion: FormControl<string | null | undefined>,

		/** Whether Chrome's built-in DNS client is used. The OS DNS client is otherwise used. This value may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#BuiltInDnsClientEnabled. */
		builtInDnsClientEnabled: FormControl<boolean | null | undefined>,

		/** Whether access to the Chrome Remote Desktop application is blocked via a policy. */
		chromeRemoteDesktopAppBlocked: FormControl<boolean | null | undefined>,

		/** Enrollment domain of the customer which is currently managing the device. */
		deviceEnrollmentDomain: FormControl<string | null | undefined>,

		/** The name of the device's manufacturer. */
		deviceManufacturer: FormControl<string | null | undefined>,

		/** The name of the device's model. */
		deviceModel: FormControl<string | null | undefined>,

		/** The encryption state of the disk. On ChromeOS, the main disk is always ENCRYPTED. */
		diskEncryption: FormControl<DeviceSignalsDiskEncryption | null | undefined>,

		/** The display name of the device, as defined by the user. */
		displayName: FormControl<string | null | undefined>,

		/** Hostname of the device. */
		hostname: FormControl<string | null | undefined>,

		/** The type of the Operating System currently running on the device. */
		operatingSystem: FormControl<DeviceSignalsOperatingSystem | null | undefined>,

		/** The state of the OS level firewall. On ChromeOS, the value will always be ENABLED on regular devices and UNKNOWN on devices in developer mode. */
		osFirewall: FormControl<DeviceSignalsOsFirewall | null | undefined>,

		/** The current version of the Operating System. On Windows and linux, the value will also include the security patch information. */
		osVersion: FormControl<string | null | undefined>,

		/** Whether the Password Protection Warning feature is enabled or not. Password protection alerts users when they reuse their protected password on potentially suspicious sites. This setting is controlled by an enterprise policy: https://chromeenterprise.google/policies/#PasswordProtectionWarningTrigger. Note that the policy unset does not have the same effects as having the policy explicitly set to `PASSWORD_PROTECTION_OFF`. */
		passwordProtectionWarningTrigger: FormControl<DeviceSignalsPasswordProtectionWarningTrigger | null | undefined>,

		/** Whether Enterprise-grade (i.e. custom) unsafe URL scanning is enabled or not. This setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#EnterpriseRealTimeUrlCheckMode */
		realtimeUrlCheckMode: FormControl<DeviceSignalsRealtimeUrlCheckMode | null | undefined>,

		/** Safe Browsing Protection Level. That setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#SafeBrowsingProtectionLevel. */
		safeBrowsingProtectionLevel: FormControl<DeviceSignalsSafeBrowsingProtectionLevel | null | undefined>,

		/** The state of the Screen Lock password protection. On ChromeOS, this value will always be ENABLED as there is not way to disable requiring a password or pin when unlocking the device. */
		screenLockSecured: FormControl<DeviceSignalsScreenLockSecured | null | undefined>,

		/** Whether the device's startup software has its Secure Boot feature enabled. Available on Windows only. */
		secureBootMode: FormControl<DeviceSignalsSecureBootMode | null | undefined>,

		/** The serial number of the device. On Windows, this represents the BIOS's serial number. Not available on most Linux distributions. */
		serialNumber: FormControl<string | null | undefined>,

		/** Whether the Site Isolation (a.k.a Site Per Process) setting is enabled. That setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/#SitePerProcess */
		siteIsolationEnabled: FormControl<boolean | null | undefined>,

		/** Whether Chrome is blocking third-party software injection or not. This setting may be controlled by an enterprise policy: https://chromeenterprise.google/policies/?policy=ThirdPartyBlockingEnabled. Available on Windows only. */
		thirdPartyBlockingEnabled: FormControl<boolean | null | undefined>,

		/** The trigger which generated this set of signals. */
		trigger: FormControl<DeviceSignalsTrigger | null | undefined>,

		/** Windows domain that the current machine has joined. Available on Windows only. */
		windowsMachineDomain: FormControl<string | null | undefined>,

		/** Windows domain for the current OS user. Available on Windows only. */
		windowsUserDomain: FormControl<string | null | undefined>,
	}
	export function CreateDeviceSignalsFormGroup() {
		return new FormGroup<DeviceSignalsFormProperties>({
			allowScreenLock: new FormControl<boolean | null | undefined>(undefined),
			browserVersion: new FormControl<string | null | undefined>(undefined),
			builtInDnsClientEnabled: new FormControl<boolean | null | undefined>(undefined),
			chromeRemoteDesktopAppBlocked: new FormControl<boolean | null | undefined>(undefined),
			deviceEnrollmentDomain: new FormControl<string | null | undefined>(undefined),
			deviceManufacturer: new FormControl<string | null | undefined>(undefined),
			deviceModel: new FormControl<string | null | undefined>(undefined),
			diskEncryption: new FormControl<DeviceSignalsDiskEncryption | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			operatingSystem: new FormControl<DeviceSignalsOperatingSystem | null | undefined>(undefined),
			osFirewall: new FormControl<DeviceSignalsOsFirewall | null | undefined>(undefined),
			osVersion: new FormControl<string | null | undefined>(undefined),
			passwordProtectionWarningTrigger: new FormControl<DeviceSignalsPasswordProtectionWarningTrigger | null | undefined>(undefined),
			realtimeUrlCheckMode: new FormControl<DeviceSignalsRealtimeUrlCheckMode | null | undefined>(undefined),
			safeBrowsingProtectionLevel: new FormControl<DeviceSignalsSafeBrowsingProtectionLevel | null | undefined>(undefined),
			screenLockSecured: new FormControl<DeviceSignalsScreenLockSecured | null | undefined>(undefined),
			secureBootMode: new FormControl<DeviceSignalsSecureBootMode | null | undefined>(undefined),
			serialNumber: new FormControl<string | null | undefined>(undefined),
			siteIsolationEnabled: new FormControl<boolean | null | undefined>(undefined),
			thirdPartyBlockingEnabled: new FormControl<boolean | null | undefined>(undefined),
			trigger: new FormControl<DeviceSignalsTrigger | null | undefined>(undefined),
			windowsMachineDomain: new FormControl<string | null | undefined>(undefined),
			windowsUserDomain: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum DeviceSignalsDiskEncryption { DISK_ENCRYPTION_UNSPECIFIED = 0, DISK_ENCRYPTION_UNKNOWN = 1, DISK_ENCRYPTION_DISABLED = 2, DISK_ENCRYPTION_ENCRYPTED = 3 }

	export enum DeviceSignalsOperatingSystem { OPERATING_SYSTEM_UNSPECIFIED = 0, CHROME_OS = 1, CHROMIUM_OS = 2, WINDOWS = 3, MAC_OS_X = 4, LINUX = 5 }

	export enum DeviceSignalsOsFirewall { OS_FIREWALL_UNSPECIFIED = 0, OS_FIREWALL_UNKNOWN = 1, OS_FIREWALL_DISABLED = 2, OS_FIREWALL_ENABLED = 3 }

	export enum DeviceSignalsPasswordProtectionWarningTrigger { PASSWORD_PROTECTION_WARNING_TRIGGER_UNSPECIFIED = 0, POLICY_UNSET = 1, PASSWORD_PROTECTION_OFF = 2, PASSWORD_REUSE = 3, PHISHING_REUSE = 4 }

	export enum DeviceSignalsRealtimeUrlCheckMode { REALTIME_URL_CHECK_MODE_UNSPECIFIED = 0, REALTIME_URL_CHECK_MODE_DISABLED = 1, REALTIME_URL_CHECK_MODE_ENABLED_MAIN_FRAME = 2 }

	export enum DeviceSignalsSafeBrowsingProtectionLevel { SAFE_BROWSING_PROTECTION_LEVEL_UNSPECIFIED = 0, INACTIVE = 1, STANDARD = 2, ENHANCED = 3 }

	export enum DeviceSignalsScreenLockSecured { SCREEN_LOCK_SECURED_UNSPECIFIED = 0, SCREEN_LOCK_SECURED_UNKNOWN = 1, SCREEN_LOCK_SECURED_DISABLED = 2, SCREEN_LOCK_SECURED_ENABLED = 3 }

	export enum DeviceSignalsSecureBootMode { SECURE_BOOT_MODE_UNSPECIFIED = 0, SECURE_BOOT_MODE_UNKNOWN = 1, SECURE_BOOT_MODE_DISABLED = 2, SECURE_BOOT_MODE_ENABLED = 3 }

	export enum DeviceSignalsTrigger { TRIGGER_UNSPECIFIED = 0, TRIGGER_BROWSER_NAVIGATION = 1, TRIGGER_LOGIN_SCREEN = 2 }


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


	/** Signed ChallengeResponse. */
	export interface VerifyChallengeResponseRequest {

		/** Required. The generated response to the challenge, the bytes representation of SignedData. */
		challengeResponse?: string | null;

		/** Optional. Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match. */
		expectedIdentity?: string | null;
	}

	/** Signed ChallengeResponse. */
	export interface VerifyChallengeResponseRequestFormProperties {

		/** Required. The generated response to the challenge, the bytes representation of SignedData. */
		challengeResponse: FormControl<string | null | undefined>,

		/** Optional. Service can optionally provide identity information about the device or user associated with the key. For an EMK, this value is the enrolled domain. For an EUK, this value is the user's email address. If present, this value will be checked against contents of the response, and verification will fail if there is no match. */
		expectedIdentity: FormControl<string | null | undefined>,
	}
	export function CreateVerifyChallengeResponseRequestFormGroup() {
		return new FormGroup<VerifyChallengeResponseRequestFormProperties>({
			challengeResponse: new FormControl<string | null | undefined>(undefined),
			expectedIdentity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result message for VerifiedAccess.VerifyChallengeResponse. */
	export interface VerifyChallengeResponseResult {

		/** Attested device ID (ADID). */
		attestedDeviceId?: string | null;

		/** Unique customer id that this device belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers */
		customerId?: string | null;

		/** Device enrollment id for ChromeOS devices. */
		deviceEnrollmentId?: string | null;

		/** Device permanent id is returned in this field (for the machine response only). */
		devicePermanentId?: string | null;

		/** Deprecated. Device signal in json string representation. Prefer using `device_signals` instead. */
		deviceSignal?: string | null;

		/** The device signals as reported by Chrome. Unless otherwise specified, signals are available on all platforms. */
		deviceSignals?: DeviceSignals;

		/** Device attested key trust level. */
		keyTrustLevel?: VerifyChallengeResponseResultKeyTrustLevel | null;

		/** Unique customer id that this profile belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers */
		profileCustomerId?: string | null;

		/** Profile attested key trust level. */
		profileKeyTrustLevel?: VerifyChallengeResponseResultKeyTrustLevel | null;

		/** Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses) */
		signedPublicKeyAndChallenge?: string | null;

		/** Virtual device id of the device. The definition of virtual device id is platform-specific. */
		virtualDeviceId?: string | null;

		/** The ID of a profile on the device. */
		virtualProfileId?: string | null;
	}

	/** Result message for VerifiedAccess.VerifyChallengeResponse. */
	export interface VerifyChallengeResponseResultFormProperties {

		/** Attested device ID (ADID). */
		attestedDeviceId: FormControl<string | null | undefined>,

		/** Unique customer id that this device belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers */
		customerId: FormControl<string | null | undefined>,

		/** Device enrollment id for ChromeOS devices. */
		deviceEnrollmentId: FormControl<string | null | undefined>,

		/** Device permanent id is returned in this field (for the machine response only). */
		devicePermanentId: FormControl<string | null | undefined>,

		/** Deprecated. Device signal in json string representation. Prefer using `device_signals` instead. */
		deviceSignal: FormControl<string | null | undefined>,

		/** Device attested key trust level. */
		keyTrustLevel: FormControl<VerifyChallengeResponseResultKeyTrustLevel | null | undefined>,

		/** Unique customer id that this profile belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers */
		profileCustomerId: FormControl<string | null | undefined>,

		/** Profile attested key trust level. */
		profileKeyTrustLevel: FormControl<VerifyChallengeResponseResultKeyTrustLevel | null | undefined>,

		/** Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses) */
		signedPublicKeyAndChallenge: FormControl<string | null | undefined>,

		/** Virtual device id of the device. The definition of virtual device id is platform-specific. */
		virtualDeviceId: FormControl<string | null | undefined>,

		/** The ID of a profile on the device. */
		virtualProfileId: FormControl<string | null | undefined>,
	}
	export function CreateVerifyChallengeResponseResultFormGroup() {
		return new FormGroup<VerifyChallengeResponseResultFormProperties>({
			attestedDeviceId: new FormControl<string | null | undefined>(undefined),
			customerId: new FormControl<string | null | undefined>(undefined),
			deviceEnrollmentId: new FormControl<string | null | undefined>(undefined),
			devicePermanentId: new FormControl<string | null | undefined>(undefined),
			deviceSignal: new FormControl<string | null | undefined>(undefined),
			keyTrustLevel: new FormControl<VerifyChallengeResponseResultKeyTrustLevel | null | undefined>(undefined),
			profileCustomerId: new FormControl<string | null | undefined>(undefined),
			profileKeyTrustLevel: new FormControl<VerifyChallengeResponseResultKeyTrustLevel | null | undefined>(undefined),
			signedPublicKeyAndChallenge: new FormControl<string | null | undefined>(undefined),
			virtualDeviceId: new FormControl<string | null | undefined>(undefined),
			virtualProfileId: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum VerifyChallengeResponseResultKeyTrustLevel { KEY_TRUST_LEVEL_UNSPECIFIED = 0, CHROME_OS_VERIFIED_MODE = 1, CHROME_OS_DEVELOPER_MODE = 2, CHROME_BROWSER_HW_KEY = 3, CHROME_BROWSER_OS_KEY = 4, CHROME_BROWSER_NO_KEY = 5 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Generates a new challenge.
		 * Post v2/challenge:generate
		 * @return {Challenge} Successful response
		 */
		Verifiedaccess_challenge_generate(requestBody: Empty): Observable<Challenge> {
			return this.http.post<Challenge>(this.baseUri + 'v2/challenge:generate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Verifies the challenge response.
		 * Post v2/challenge:verify
		 * @return {VerifyChallengeResponseResult} Successful response
		 */
		Verifiedaccess_challenge_verify(requestBody: VerifyChallengeResponseRequest): Observable<VerifyChallengeResponseResult> {
			return this.http.post<VerifyChallengeResponseResult>(this.baseUri + 'v2/challenge:verify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

