import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface ConfigIssue {
		config_file?: string | null;
		issues?: Array<string>;
		service_name?: string | null;
		suggestions?: Array<string>;
	}
	export interface ConfigIssueFormProperties {
		config_file: FormControl<string | null | undefined>,
		service_name: FormControl<string | null | undefined>,
	}
	export function CreateConfigIssueFormGroup() {
		return new FormGroup<ConfigIssueFormProperties>({
			config_file: new FormControl<string | null | undefined>(undefined),
			service_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CryptoKey {
		algorithm?: string | null;
		bits?: number | null;
		file_hash?: string | null;
		file_name?: string | null;
		pem_type?: string | null;
	}
	export interface CryptoKeyFormProperties {
		algorithm: FormControl<string | null | undefined>,
		bits: FormControl<number | null | undefined>,
		file_hash: FormControl<string | null | undefined>,
		file_name: FormControl<string | null | undefined>,
		pem_type: FormControl<string | null | undefined>,
	}
	export function CreateCryptoKeyFormGroup() {
		return new FormGroup<CryptoKeyFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			bits: new FormControl<number | null | undefined>(undefined),
			file_hash: new FormControl<string | null | undefined>(undefined),
			file_name: new FormControl<string | null | undefined>(undefined),
			pem_type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DefaultAccount {
		gid?: number | null;
		hash_algorithm?: string | null;
		home_dir?: string | null;
		name?: string | null;
		pwd_hash?: string | null;
		shell?: string | null;
		uid?: number | null;
	}
	export interface DefaultAccountFormProperties {
		gid: FormControl<number | null | undefined>,
		hash_algorithm: FormControl<string | null | undefined>,
		home_dir: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		pwd_hash: FormControl<string | null | undefined>,
		shell: FormControl<string | null | undefined>,
		uid: FormControl<number | null | undefined>,
	}
	export function CreateDefaultAccountFormGroup() {
		return new FormGroup<DefaultAccountFormProperties>({
			gid: new FormControl<number | null | undefined>(undefined),
			hash_algorithm: new FormControl<string | null | undefined>(undefined),
			home_dir: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			pwd_hash: new FormControl<string | null | undefined>(undefined),
			shell: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface DeviceFeatures {
		ftp_banner?: string | null;
		hostname?: string | null;
		http_response?: string | null;
		https_response?: string | null;
		nic_mac?: string | null;
		snmp_sysdescr?: string | null;
		snmp_sysoid?: string | null;
		telnet_banner?: string | null;
		upnp_response?: string | null;
	}
	export interface DeviceFeaturesFormProperties {
		ftp_banner: FormControl<string | null | undefined>,
		hostname: FormControl<string | null | undefined>,
		http_response: FormControl<string | null | undefined>,
		https_response: FormControl<string | null | undefined>,
		nic_mac: FormControl<string | null | undefined>,
		snmp_sysdescr: FormControl<string | null | undefined>,
		snmp_sysoid: FormControl<string | null | undefined>,
		telnet_banner: FormControl<string | null | undefined>,
		upnp_response: FormControl<string | null | undefined>,
	}
	export function CreateDeviceFeaturesFormGroup() {
		return new FormGroup<DeviceFeaturesFormProperties>({
			ftp_banner: new FormControl<string | null | undefined>(undefined),
			hostname: new FormControl<string | null | undefined>(undefined),
			http_response: new FormControl<string | null | undefined>(undefined),
			https_response: new FormControl<string | null | undefined>(undefined),
			nic_mac: new FormControl<string | null | undefined>(undefined),
			snmp_sysdescr: new FormControl<string | null | undefined>(undefined),
			snmp_sysoid: new FormControl<string | null | undefined>(undefined),
			telnet_banner: new FormControl<string | null | undefined>(undefined),
			upnp_response: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface DeviceInfo {
		cve_list?: Array<Vulnerability>;
		device_type?: string | null;
		firmware_info?: FirmwareInfo;
		firmware_version?: string | null;
		is_discontinued?: boolean | null;
		latest_firmware_info?: FirmwareInfo;
		manufacturer?: string | null;
		model_name?: string | null;
	}
	export interface DeviceInfoFormProperties {
		device_type: FormControl<string | null | undefined>,
		firmware_version: FormControl<string | null | undefined>,
		is_discontinued: FormControl<boolean | null | undefined>,
		manufacturer: FormControl<string | null | undefined>,
		model_name: FormControl<string | null | undefined>,
	}
	export function CreateDeviceInfoFormGroup() {
		return new FormGroup<DeviceInfoFormProperties>({
			device_type: new FormControl<string | null | undefined>(undefined),
			firmware_version: new FormControl<string | null | undefined>(undefined),
			is_discontinued: new FormControl<boolean | null | undefined>(undefined),
			manufacturer: new FormControl<string | null | undefined>(undefined),
			model_name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Vulnerability {
		cve_id?: string | null;
		cvss?: number | null;
	}
	export interface VulnerabilityFormProperties {
		cve_id: FormControl<string | null | undefined>,
		cvss: FormControl<number | null | undefined>,
	}
	export function CreateVulnerabilityFormGroup() {
		return new FormGroup<VulnerabilityFormProperties>({
			cve_id: new FormControl<string | null | undefined>(undefined),
			cvss: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FirmwareInfo {
		download_url?: string | null;
		name?: string | null;
		release_date?: string | null;
		sha2?: string | null;
		version?: string | null;
	}
	export interface FirmwareInfoFormProperties {
		download_url: FormControl<string | null | undefined>,
		name: FormControl<string | null | undefined>,
		release_date: FormControl<string | null | undefined>,
		sha2: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateFirmwareInfoFormGroup() {
		return new FormGroup<FirmwareInfoFormProperties>({
			download_url: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			release_date: new FormControl<string | null | undefined>(undefined),
			sha2: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ExpiredCert {
		file_hash?: string | null;
		file_name?: string | null;
		public_key?: PublicKey;
		subject_name?: string | null;
		thumb_print?: string | null;
		valid_from?: string | null;
		valid_to?: string | null;
	}
	export interface ExpiredCertFormProperties {
		file_hash: FormControl<string | null | undefined>,
		file_name: FormControl<string | null | undefined>,
		subject_name: FormControl<string | null | undefined>,
		thumb_print: FormControl<string | null | undefined>,
		valid_from: FormControl<string | null | undefined>,
		valid_to: FormControl<string | null | undefined>,
	}
	export function CreateExpiredCertFormGroup() {
		return new FormGroup<ExpiredCertFormProperties>({
			file_hash: new FormControl<string | null | undefined>(undefined),
			file_name: new FormControl<string | null | undefined>(undefined),
			subject_name: new FormControl<string | null | undefined>(undefined),
			thumb_print: new FormControl<string | null | undefined>(undefined),
			valid_from: new FormControl<string | null | undefined>(undefined),
			valid_to: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface PublicKey {
		algorithm?: string | null;
		bits?: number | null;
	}
	export interface PublicKeyFormProperties {
		algorithm: FormControl<string | null | undefined>,
		bits: FormControl<number | null | undefined>,
	}
	export function CreatePublicKeyFormGroup() {
		return new FormGroup<PublicKeyFormProperties>({
			algorithm: new FormControl<string | null | undefined>(undefined),
			bits: new FormControl<number | null | undefined>(undefined),
		});

	}

	export interface FirmwareRisk {
		risk_summary?: RiskSummary;
		vulnerable_components?: Array<VulnerableComponent>;
	}
	export interface FirmwareRiskFormProperties {
	}
	export function CreateFirmwareRiskFormGroup() {
		return new FormGroup<FirmwareRiskFormProperties>({
		});

	}

	export interface RiskSummary {
		client_tools_risk?: string | null;
		crypto_risk?: string | null;
		kernel_risk?: string | null;
		net_services_risk?: string | null;
	}
	export interface RiskSummaryFormProperties {
		client_tools_risk: FormControl<string | null | undefined>,
		crypto_risk: FormControl<string | null | undefined>,
		kernel_risk: FormControl<string | null | undefined>,
		net_services_risk: FormControl<string | null | undefined>,
	}
	export function CreateRiskSummaryFormGroup() {
		return new FormGroup<RiskSummaryFormProperties>({
			client_tools_risk: new FormControl<string | null | undefined>(undefined),
			crypto_risk: new FormControl<string | null | undefined>(undefined),
			kernel_risk: new FormControl<string | null | undefined>(undefined),
			net_services_risk: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface VulnerableComponent {
		category?: string | null;
		cvss_max?: number | null;
		name?: string | null;
		version?: string | null;
		vulnerabilities?: Array<Vulnerability>;
	}
	export interface VulnerableComponentFormProperties {
		category: FormControl<string | null | undefined>,
		cvss_max: FormControl<number | null | undefined>,
		name: FormControl<string | null | undefined>,
		version: FormControl<string | null | undefined>,
	}
	export function CreateVulnerableComponentFormGroup() {
		return new FormGroup<VulnerableComponentFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			cvss_max: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface HTTPValidationError {
		detail?: Array<ValidationError>;
	}
	export interface HTTPValidationErrorFormProperties {
	}
	export function CreateHTTPValidationErrorFormGroup() {
		return new FormGroup<HTTPValidationErrorFormProperties>({
		});

	}

	export interface ValidationError {

		/** Required */
		loc: Array<string>;

		/** Required */
		msg: string;

		/** Required */
		type: string;
	}
	export interface ValidationErrorFormProperties {

		/** Required */
		msg: FormControl<string | null | undefined>,

		/** Required */
		type: FormControl<string | null | undefined>,
	}
	export function CreateValidationErrorFormGroup() {
		return new FormGroup<ValidationErrorFormProperties>({
			msg: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			type: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface WeakCert {
		file_hash?: string | null;
		file_name?: string | null;
		sign_algorithm?: string | null;
		subject_name?: string | null;
		thumb_print?: string | null;
		valid_from?: string | null;
		valid_to?: string | null;
	}
	export interface WeakCertFormProperties {
		file_hash: FormControl<string | null | undefined>,
		file_name: FormControl<string | null | undefined>,
		sign_algorithm: FormControl<string | null | undefined>,
		subject_name: FormControl<string | null | undefined>,
		thumb_print: FormControl<string | null | undefined>,
		valid_from: FormControl<string | null | undefined>,
		valid_to: FormControl<string | null | undefined>,
	}
	export function CreateWeakCertFormGroup() {
		return new FormGroup<WeakCertFormProperties>({
			file_hash: new FormControl<string | null | undefined>(undefined),
			file_name: new FormControl<string | null | undefined>(undefined),
			sign_algorithm: new FormControl<string | null | undefined>(undefined),
			subject_name: new FormControl<string | null | undefined>(undefined),
			thumb_print: new FormControl<string | null | undefined>(undefined),
			valid_from: new FormControl<string | null | undefined>(undefined),
			valid_to: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Detect iot device by service banners and mac address
		 * Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information
		 * Post device/detect
		 * @return {DeviceInfo} Successful Response
		 */
		Detect_device(requestBody: DeviceFeatures): Observable<DeviceInfo> {
			return this.http.post<DeviceInfo>(this.baseUri + 'device/detect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get default accounts and password hashes of a firmware
		 * Get firmware/{firmware_hash}/accounts
		 * @param {string} firmware_hash SHA2 hash of device firmware
		 * @return {Array<DefaultAccount>} Successful Response
		 */
		Get_accounts(firmware_hash: string): Observable<Array<DefaultAccount>> {
			return this.http.get<Array<DefaultAccount>>(this.baseUri + 'firmware/' + (firmware_hash == null ? '' : encodeURIComponent(firmware_hash)) + '/accounts', {});
		}

		/**
		 * Get default OS configuration issues of a device firmware
		 * Get firmware/{firmware_hash}/config-issues
		 * @param {string} firmware_hash SHA2 hash of device firmware
		 * @return {Array<ConfigIssue>} Successful Response
		 */
		Get_config_issues(firmware_hash: string): Observable<Array<ConfigIssue>> {
			return this.http.get<Array<ConfigIssue>>(this.baseUri + 'firmware/' + (firmware_hash == null ? '' : encodeURIComponent(firmware_hash)) + '/config-issues', {});
		}

		/**
		 * Get expired digital certificates embedded in a device firmware
		 * Get firmware/{firmware_hash}/expired-certs
		 * @param {string} firmware_hash SHA2 hash of device firmware
		 * @return {Array<ExpiredCert>} Successful Response
		 */
		Get_expired_certs(firmware_hash: string): Observable<Array<ExpiredCert>> {
			return this.http.get<Array<ExpiredCert>>(this.baseUri + 'firmware/' + (firmware_hash == null ? '' : encodeURIComponent(firmware_hash)) + '/expired-certs', {});
		}

		/**
		 * Get private crypto keys embedded in a device firmware
		 * Get firmware/{firmware_hash}/private-keys
		 * @param {string} firmware_hash SHA2 hash of device firmware
		 * @return {Array<CryptoKey>} Successful Response
		 */
		Get_private_keys(firmware_hash: string): Observable<Array<CryptoKey>> {
			return this.http.get<Array<CryptoKey>>(this.baseUri + 'firmware/' + (firmware_hash == null ? '' : encodeURIComponent(firmware_hash)) + '/private-keys', {});
		}

		/**
		 * Get iot device firmware risk analysis
		 * Get firmware/{firmware_hash}/risk
		 * @param {string} firmware_hash SHA2 hash of device firmware
		 * @return {FirmwareRisk} Successful Response
		 */
		Get_risk(firmware_hash: string): Observable<FirmwareRisk> {
			return this.http.get<FirmwareRisk>(this.baseUri + 'firmware/' + (firmware_hash == null ? '' : encodeURIComponent(firmware_hash)) + '/risk', {});
		}

		/**
		 * Get certificates with weak fingerprinting algorithms that are mebedded in a device firmware
		 * Get firmware/{firmware_hash}/weak-certs
		 * @param {string} firmware_hash SHA2 hash of device firmware
		 * @return {Array<WeakCert>} Successful Response
		 */
		Get_weak_certs(firmware_hash: string): Observable<Array<WeakCert>> {
			return this.http.get<Array<WeakCert>>(this.baseUri + 'firmware/' + (firmware_hash == null ? '' : encodeURIComponent(firmware_hash)) + '/weak-certs', {});
		}

		/**
		 * Get weak crypto keys with short length
		 * Get firmware/{firmware_hash}/weak-keys
		 * @param {string} firmware_hash SHA2 hash of device firmware
		 * @return {Array<CryptoKey>} Successful Response
		 */
		Get_weak_keys(firmware_hash: string): Observable<Array<CryptoKey>> {
			return this.http.get<Array<CryptoKey>>(this.baseUri + 'firmware/' + (firmware_hash == null ? '' : encodeURIComponent(firmware_hash)) + '/weak-keys', {});
		}
	}

}

