import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

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


	/** A response message for importing an SSH public key. */
	export interface ImportSshPublicKeyResponse {

		/** Detailed information about import results. */
		details?: string | null;

		/** The user profile information used for logging in to a virtual machine on Google Compute Engine. */
		loginProfile?: LoginProfile;
	}

	/** A response message for importing an SSH public key. */
	export interface ImportSshPublicKeyResponseFormProperties {

		/** Detailed information about import results. */
		details: FormControl<string | null | undefined>,
	}
	export function CreateImportSshPublicKeyResponseFormGroup() {
		return new FormGroup<ImportSshPublicKeyResponseFormProperties>({
			details: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The user profile information used for logging in to a virtual machine on Google Compute Engine. */
	export interface LoginProfile {

		/** Required. A unique user ID. */
		name?: string | null;

		/** The list of POSIX accounts associated with the user. */
		posixAccounts?: Array<PosixAccount>;

		/** The registered security key credentials for a user. */
		securityKeys?: Array<SecurityKey>;

		/** A map from SSH public key fingerprint to the associated key object. */
		sshPublicKeys?: {[id: string]: SshPublicKey };
	}

	/** The user profile information used for logging in to a virtual machine on Google Compute Engine. */
	export interface LoginProfileFormProperties {

		/** Required. A unique user ID. */
		name: FormControl<string | null | undefined>,

		/** A map from SSH public key fingerprint to the associated key object. */
		sshPublicKeys: FormControl<{[id: string]: SshPublicKey } | null | undefined>,
	}
	export function CreateLoginProfileFormGroup() {
		return new FormGroup<LoginProfileFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			sshPublicKeys: new FormControl<{[id: string]: SshPublicKey } | null | undefined>(undefined),
		});

	}


	/** The POSIX account information associated with a Google account. */
	export interface PosixAccount {

		/** Output only. A POSIX account identifier. */
		accountId?: string | null;

		/** The GECOS (user information) entry for this account. */
		gecos?: string | null;

		/** The default group ID. */
		gid?: string | null;

		/** The path to the home directory for this account. */
		homeDirectory?: string | null;

		/** Output only. The canonical resource name. */
		name?: string | null;

		/** The operating system type where this account applies. */
		operatingSystemType?: PosixAccountOperatingSystemType | null;

		/** Only one POSIX account can be marked as primary. */
		primary?: boolean | null;

		/** The path to the logic shell for this account. */
		shell?: string | null;

		/** System identifier for which account the username or uid applies to. By default, the empty value is used. */
		systemId?: string | null;

		/** The user ID. */
		uid?: string | null;

		/** The username of the POSIX account. */
		username?: string | null;
	}

	/** The POSIX account information associated with a Google account. */
	export interface PosixAccountFormProperties {

		/** Output only. A POSIX account identifier. */
		accountId: FormControl<string | null | undefined>,

		/** The GECOS (user information) entry for this account. */
		gecos: FormControl<string | null | undefined>,

		/** The default group ID. */
		gid: FormControl<string | null | undefined>,

		/** The path to the home directory for this account. */
		homeDirectory: FormControl<string | null | undefined>,

		/** Output only. The canonical resource name. */
		name: FormControl<string | null | undefined>,

		/** The operating system type where this account applies. */
		operatingSystemType: FormControl<PosixAccountOperatingSystemType | null | undefined>,

		/** Only one POSIX account can be marked as primary. */
		primary: FormControl<boolean | null | undefined>,

		/** The path to the logic shell for this account. */
		shell: FormControl<string | null | undefined>,

		/** System identifier for which account the username or uid applies to. By default, the empty value is used. */
		systemId: FormControl<string | null | undefined>,

		/** The user ID. */
		uid: FormControl<string | null | undefined>,

		/** The username of the POSIX account. */
		username: FormControl<string | null | undefined>,
	}
	export function CreatePosixAccountFormGroup() {
		return new FormGroup<PosixAccountFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			gecos: new FormControl<string | null | undefined>(undefined),
			gid: new FormControl<string | null | undefined>(undefined),
			homeDirectory: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			operatingSystemType: new FormControl<PosixAccountOperatingSystemType | null | undefined>(undefined),
			primary: new FormControl<boolean | null | undefined>(undefined),
			shell: new FormControl<string | null | undefined>(undefined),
			systemId: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum PosixAccountOperatingSystemType { OPERATING_SYSTEM_TYPE_UNSPECIFIED = 'OPERATING_SYSTEM_TYPE_UNSPECIFIED', LINUX = 'LINUX', WINDOWS = 'WINDOWS' }


	/** The credential information for a Google registered security key. */
	export interface SecurityKey {

		/** The security key nickname explicitly set by the user. */
		deviceNickname?: string | null;

		/** Hardware-backed private key text in SSH format. */
		privateKey?: string | null;

		/** Public key text in SSH format, defined by [RFC4253]("https://www.ietf.org/rfc/rfc4253.txt") section 6.6. */
		publicKey?: string | null;

		/** Security key information specific to the U2F protocol. */
		universalTwoFactor?: UniversalTwoFactor;

		/** Security key information specific to the Web Authentication protocol. */
		webAuthn?: WebAuthn;
	}

	/** The credential information for a Google registered security key. */
	export interface SecurityKeyFormProperties {

		/** The security key nickname explicitly set by the user. */
		deviceNickname: FormControl<string | null | undefined>,

		/** Hardware-backed private key text in SSH format. */
		privateKey: FormControl<string | null | undefined>,

		/** Public key text in SSH format, defined by [RFC4253]("https://www.ietf.org/rfc/rfc4253.txt") section 6.6. */
		publicKey: FormControl<string | null | undefined>,
	}
	export function CreateSecurityKeyFormGroup() {
		return new FormGroup<SecurityKeyFormProperties>({
			deviceNickname: new FormControl<string | null | undefined>(undefined),
			privateKey: new FormControl<string | null | undefined>(undefined),
			publicKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Security key information specific to the U2F protocol. */
	export interface UniversalTwoFactor {

		/** Application ID for the U2F protocol. */
		appId?: string | null;
	}

	/** Security key information specific to the U2F protocol. */
	export interface UniversalTwoFactorFormProperties {

		/** Application ID for the U2F protocol. */
		appId: FormControl<string | null | undefined>,
	}
	export function CreateUniversalTwoFactorFormGroup() {
		return new FormGroup<UniversalTwoFactorFormProperties>({
			appId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Security key information specific to the Web Authentication protocol. */
	export interface WebAuthn {

		/** Relying party ID for Web Authentication. */
		rpId?: string | null;
	}

	/** Security key information specific to the Web Authentication protocol. */
	export interface WebAuthnFormProperties {

		/** Relying party ID for Web Authentication. */
		rpId: FormControl<string | null | undefined>,
	}
	export function CreateWebAuthnFormGroup() {
		return new FormGroup<WebAuthnFormProperties>({
			rpId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The SSH public key information associated with a Google account. */
	export interface SshPublicKey {

		/** An expiration time in microseconds since epoch. */
		expirationTimeUsec?: string | null;

		/** Output only. The SHA-256 fingerprint of the SSH public key. */
		fingerprint?: string | null;

		/** Public key text in SSH format, defined by RFC4253 section 6.6. */
		key?: string | null;

		/** Output only. The canonical resource name. */
		name?: string | null;
	}

	/** The SSH public key information associated with a Google account. */
	export interface SshPublicKeyFormProperties {

		/** An expiration time in microseconds since epoch. */
		expirationTimeUsec: FormControl<string | null | undefined>,

		/** Output only. The SHA-256 fingerprint of the SSH public key. */
		fingerprint: FormControl<string | null | undefined>,

		/** Public key text in SSH format, defined by RFC4253 section 6.6. */
		key: FormControl<string | null | undefined>,

		/** Output only. The canonical resource name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSshPublicKeyFormGroup() {
		return new FormGroup<SshPublicKeyFormProperties>({
			expirationTimeUsec: new FormControl<string | null | undefined>(undefined),
			fingerprint: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignSshPublicKeyRequest {

		/** The SSH public key to sign. */
		sshPublicKey?: string | null;
	}
	export interface SignSshPublicKeyRequestFormProperties {

		/** The SSH public key to sign. */
		sshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateSignSshPublicKeyRequestFormGroup() {
		return new FormGroup<SignSshPublicKeyRequestFormProperties>({
			sshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface SignSshPublicKeyResponse {

		/** The signed SSH public key to use in the SSH handshake. */
		signedSshPublicKey?: string | null;
	}
	export interface SignSshPublicKeyResponseFormProperties {

		/** The signed SSH public key to use in the SSH handshake. */
		signedSshPublicKey: FormControl<string | null | undefined>,
	}
	export function CreateSignSshPublicKeyResponseFormGroup() {
		return new FormGroup<SignSshPublicKeyResponseFormProperties>({
			signedSshPublicKey: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes an SSH public key.
		 * Delete v1alpha/{name}
		 * @param {string} name Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
		 * @param {PosixAccountOperatingSystemType} operatingSystemType The type of operating system associated with the account.
		 * @return {Empty} Successful response
		 */
		Oslogin_users_sshPublicKeys_delete(name: string, operatingSystemType: PosixAccountOperatingSystemType | null | undefined): Observable<Empty> {
			return this.http.delete<Empty>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&operatingSystemType=' + operatingSystemType, {});
		}

		/**
		 * Retrieves an SSH public key.
		 * Get v1alpha/{name}
		 * @param {string} name Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
		 * @return {SshPublicKey} Successful response
		 */
		Oslogin_users_sshPublicKeys_get(name: string): Observable<SshPublicKey> {
			return this.http.get<SshPublicKey>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)), {});
		}

		/**
		 * Updates an SSH public key and returns the profile information. This method supports patch semantics.
		 * Patch v1alpha/{name}
		 * @param {string} name Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user}/sshPublicKeys/{fingerprint}`.
		 * @param {string} updateMask Mask to control which fields get updated. Updates all if not present.
		 * @return {SshPublicKey} Successful response
		 */
		Oslogin_users_sshPublicKeys_patch(name: string, updateMask: string | null | undefined, requestBody: SshPublicKey): Observable<SshPublicKey> {
			return this.http.patch<SshPublicKey>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
		 * Get v1alpha/{name}/loginProfile
		 * @param {string} name Required. The unique ID for the user in format `users/{user}`.
		 * @param {PosixAccountOperatingSystemType} operatingSystemType The type of operating system associated with the account.
		 * @param {string} projectId The project ID of the Google Cloud Platform project.
		 * @param {string} systemId A system ID for filtering the results of the request.
		 * @param {Oslogin_users_getLoginProfileView} view The view configures whether to retrieve security keys information.
		 * @return {LoginProfile} Successful response
		 */
		Oslogin_users_getLoginProfile(name: string, operatingSystemType: PosixAccountOperatingSystemType | null | undefined, projectId: string | null | undefined, systemId: string | null | undefined, view: Oslogin_users_getLoginProfileView | null | undefined): Observable<LoginProfile> {
			return this.http.get<LoginProfile>(this.baseUri + 'v1alpha/' + (name == null ? '' : encodeURIComponent(name)) + '/loginProfile&operatingSystemType=' + operatingSystemType + '&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&systemId=' + (systemId == null ? '' : encodeURIComponent(systemId)) + '&view=' + view, {});
		}

		/**
		 * Create an SSH public key
		 * Post v1alpha/{parent}/sshPublicKeys
		 * @param {string} parent Required. The unique ID for the user in format `users/{user}`.
		 * @return {SshPublicKey} Successful response
		 */
		Oslogin_users_sshPublicKeys_create(parent: string, requestBody: SshPublicKey): Observable<SshPublicKey> {
			return this.http.post<SshPublicKey>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + '/sshPublicKeys', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
		 * Post v1alpha/{parent}:importSshPublicKey
		 * @param {string} parent The unique ID for the user in format `users/{user}`.
		 * @param {string} projectId The project ID of the Google Cloud Platform project.
		 * @param {Array<string>} regions Optional. The regions to which to assert that the key was written. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region.
		 * @param {Oslogin_users_getLoginProfileView} view The view configures whether to retrieve security keys information.
		 * @return {ImportSshPublicKeyResponse} Successful response
		 */
		Oslogin_users_importSshPublicKey(parent: string, projectId: string | null | undefined, regions: Array<string> | null | undefined, view: Oslogin_users_getLoginProfileView | null | undefined, requestBody: SshPublicKey): Observable<ImportSshPublicKeyResponse> {
			return this.http.post<ImportSshPublicKeyResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + ':importSshPublicKey&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&' + regions?.map(z => `regions=${encodeURIComponent(z)}`).join('&') + '&view=' + view, JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Signs an SSH public key for a user to authenticate to a virtual machine on Google Compute Engine.
		 * Post v1alpha/{parent}:signSshPublicKey
		 * @param {string} parent The parent project and zone for the signing request. This is needed to properly ensure per-organization ISS processing and potentially to provide for the possibility of zone-specific certificates used in the signing process.
		 * @return {SignSshPublicKeyResponse} Successful response
		 */
		Oslogin_users_projects_zones_signSshPublicKey(parent: string, requestBody: SignSshPublicKeyRequest): Observable<SignSshPublicKeyResponse> {
			return this.http.post<SignSshPublicKeyResponse>(this.baseUri + 'v1alpha/' + (parent == null ? '' : encodeURIComponent(parent)) + ':signSshPublicKey', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum Oslogin_users_getLoginProfileView { LOGIN_PROFILE_VIEW_UNSPECIFIED = 'LOGIN_PROFILE_VIEW_UNSPECIFIED', BASIC = 'BASIC', SECURITY_KEY = 'SECURITY_KEY' }

}

