import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/** A response message for importing an SSH public key. */
	export interface ImportSshPublicKeyResponse {

		/**
		 * The user profile information used for logging in to a virtual machine on
		 * Google Compute Engine.
		 */
		loginProfile?: LoginProfile;
	}

	/** A response message for importing an SSH public key. */
	export interface ImportSshPublicKeyResponseFormProperties {
	}
	export function CreateImportSshPublicKeyResponseFormGroup() {
		return new FormGroup<ImportSshPublicKeyResponseFormProperties>({
		});

	}


	/**
	 * The user profile information used for logging in to a virtual machine on
	 * Google Compute Engine.
	 */
	export interface LoginProfile {

		/** Required. A unique user ID. */
		name?: string | null;

		/** The list of POSIX accounts associated with the user. */
		posixAccounts?: Array<PosixAccount>;

		/** A map from SSH public key fingerprint to the associated key object. */
		sshPublicKeys?: {[id: string]: SshPublicKey };
	}

	/**
	 * The user profile information used for logging in to a virtual machine on
	 * Google Compute Engine.
	 */
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

		/**
		 * System identifier for which account the username or uid applies to.
		 * By default, the empty value is used.
		 */
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

		/**
		 * System identifier for which account the username or uid applies to.
		 * By default, the empty value is used.
		 */
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

	export enum PosixAccountOperatingSystemType { OPERATING_SYSTEM_TYPE_UNSPECIFIED = 0, LINUX = 1, WINDOWS = 2 }


	/** The SSH public key information associated with a Google account. */
	export interface SshPublicKey {

		/** An expiration time in microseconds since epoch. */
		expirationTimeUsec?: string | null;

		/** Output only. The SHA-256 fingerprint of the SSH public key. */
		fingerprint?: string | null;

		/**
		 * Public key text in SSH format, defined by
		 * <a href="https://www.ietf.org/rfc/rfc4253.txt" target="_blank">RFC4253</a>
		 * section 6.6.
		 */
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

		/**
		 * Public key text in SSH format, defined by
		 * <a href="https://www.ietf.org/rfc/rfc4253.txt" target="_blank">RFC4253</a>
		 * section 6.6.
		 */
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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes a POSIX account.
		 * Delete v1/{name}
		 * @param {string} name Required. A reference to the POSIX account to update. POSIX accounts are identified
		 * by the project ID they are associated with. A reference to the POSIX
		 * account is in format `users/{user}/projects/{project}`.
		 * @return {void} Successful response
		 */
		Oslogin_users_projects_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves an SSH public key.
		 * Get v1/{name}
		 * @param {string} name Required. The fingerprint of the public key to retrieve. Public keys are identified
		 * by their SHA-256 fingerprint. The fingerprint of the public key is in
		 * format `users/{user}/sshPublicKeys/{fingerprint}`.
		 * @return {void} Successful response
		 */
		Oslogin_users_sshPublicKeys_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates an SSH public key and returns the profile information. This method
		 * supports patch semantics.
		 * Patch v1/{name}
		 * @param {string} name Required. The fingerprint of the public key to update. Public keys are identified by
		 * their SHA-256 fingerprint. The fingerprint of the public key is in format
		 * `users/{user}/sshPublicKeys/{fingerprint}`.
		 * @param {string} updateMask Mask to control which fields get updated. Updates all if not present.
		 * @return {void} Successful response
		 */
		Oslogin_users_sshPublicKeys_patch(name: string, updateMask: string | null | undefined, requestBody: SshPublicKey): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Retrieves the profile information used for logging in to a virtual machine
		 * on Google Compute Engine.
		 * Get v1/{name}/loginProfile
		 * @param {string} name Required. The unique ID for the user in format `users/{user}`.
		 * @param {string} projectId The project ID of the Google Cloud Platform project.
		 * @param {string} systemId A system ID for filtering the results of the request.
		 * @return {void} Successful response
		 */
		Oslogin_users_getLoginProfile(name: string, projectId: string | null | undefined, systemId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '/loginProfile&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)) + '&systemId=' + (systemId == null ? '' : encodeURIComponent(systemId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Adds an SSH public key and returns the profile information. Default POSIX
		 * account information is set when no username and UID exist as part of the
		 * login profile.
		 * Post v1/{parent}:importSshPublicKey
		 * @param {string} parent Required. The unique ID for the user in format `users/{user}`.
		 * @param {string} projectId The project ID of the Google Cloud Platform project.
		 * @return {void} Successful response
		 */
		Oslogin_users_importSshPublicKey(parent: string, projectId: string | null | undefined, requestBody: SshPublicKey): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + ':importSshPublicKey&projectId=' + (projectId == null ? '' : encodeURIComponent(projectId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

