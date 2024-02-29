import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AccessibilityRequest {

		/** Required */
		endpoint_enabled: boolean;

		/** Required */
		hotword_enabled: boolean;
	}
	export interface AccessibilityRequestFormProperties {

		/** Required */
		endpoint_enabled: FormControl<boolean | null | undefined>,

		/** Required */
		hotword_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateAccessibilityRequestFormGroup() {
		return new FormGroup<AccessibilityRequestFormProperties>({
			endpoint_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hotword_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Alarm {

		/** Required */
		date_pattern: DatePattern;

		/**
		 * Required
		 * Type: double
		 */
		fire_time: number;

		/** Required */
		id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;

		/** Required */
		time_pattern: TimePattern;
	}
	export interface AlarmFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		fire_time: FormControl<number | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateAlarmFormGroup() {
		return new FormGroup<AlarmFormProperties>({
			fire_time: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DatePattern {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: number;
	}
	export interface DatePatternFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateDatePatternFormGroup() {
		return new FormGroup<DatePatternFormProperties>({
			day: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			month: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			year: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TimePattern {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hour: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minute: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		second: number;
	}
	export interface TimePatternFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		hour: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		minute: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		second: FormControl<number | null | undefined>,
	}
	export function CreateTimePatternFormGroup() {
		return new FormGroup<TimePatternFormProperties>({
			hour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			minute: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			second: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AlarmVolumeRequest {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		volume: number;
	}
	export interface AlarmVolumeRequestFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateAlarmVolumeRequestFormGroup() {
		return new FormGroup<AlarmVolumeRequestFormProperties>({
			volume: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Aogh {

		/** Required */
		aogh_api_version: string;
	}
	export interface AoghFormProperties {

		/** Required */
		aogh_api_version: FormControl<string | null | undefined>,
	}
	export function CreateAoghFormGroup() {
		return new FormGroup<AoghFormProperties>({
			aogh_api_version: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface AppDeviceIDRequest {

		/** Required */
		app_id: string;
	}
	export interface AppDeviceIDRequestFormProperties {

		/** Required */
		app_id: FormControl<string | null | undefined>,
	}
	export function CreateAppDeviceIDRequestFormGroup() {
		return new FormGroup<AppDeviceIDRequestFormProperties>({
			app_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Audio {

		/** Required */
		digital: boolean;
	}
	export interface AudioFormProperties {

		/** Required */
		digital: FormControl<boolean | null | undefined>,
	}
	export function CreateAudioFormGroup() {
		return new FormGroup<AudioFormProperties>({
			digital: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface BuildInfo {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		build_type: number;

		/** Required */
		cast_build_revision: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cast_control_version: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		preview_channel_state: number;

		/** Required */
		release_track: string;

		/** Required */
		system_build_number: string;
	}
	export interface BuildInfoFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		build_type: FormControl<number | null | undefined>,

		/** Required */
		cast_build_revision: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		cast_control_version: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		preview_channel_state: FormControl<number | null | undefined>,

		/** Required */
		release_track: FormControl<string | null | undefined>,

		/** Required */
		system_build_number: FormControl<string | null | undefined>,
	}
	export function CreateBuildInfoFormGroup() {
		return new FormGroup<BuildInfoFormProperties>({
			build_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cast_build_revision: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			cast_control_version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			preview_channel_state: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			release_track: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			system_build_number: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Capabilities {

		/** Required */
		aogh_supported: boolean;

		/** Required */
		assistant_supported: boolean;

		/** Required */
		audio_hdr_supported: boolean;

		/** Required */
		audio_surround_mode_supported: boolean;

		/** Required */
		ble_supported: boolean;

		/** Required */
		bluetooth_audio_sink_supported: boolean;

		/** Required */
		bluetooth_audio_source_supported: boolean;

		/** Required */
		bluetooth_supported: boolean;

		/** Required */
		cloudcast_supported: boolean;

		/** Required */
		content_filters_supported: boolean;

		/** Required */
		display_supported: boolean;

		/** Required */
		fdr_supported: boolean;

		/** Required */
		hdmi_prefer_50hz_supported: boolean;

		/** Required */
		hdmi_prefer_high_fps_supported: boolean;

		/** Required */
		hotspot_supported: boolean;

		/** Required */
		https_setup_supported: boolean;

		/** Required */
		input_management_supported: boolean;

		/** Required */
		keep_hotspot_until_connected_supported: boolean;

		/** Required */
		multi_user_supported: boolean;

		/** Required */
		multichannel_group_supported: boolean;

		/** Required */
		multizone_supported: boolean;

		/** Required */
		night_mode_supported: boolean;

		/** Required */
		night_mode_supported_v2: boolean;

		/** Required */
		opencast_supported: boolean;

		/** Required */
		preview_channel_supported: boolean;

		/** Required */
		reboot_supported: boolean;

		/** Required */
		remote_ducking_supported: boolean;

		/** Required */
		separate_tts_volume_supported: boolean;

		/** Required */
		setup_supported: boolean;

		/** Required */
		sleep_mode_supported: boolean;

		/** Required */
		stats_supported: boolean;

		/** Required */
		system_sound_effects_supported: boolean;

		/** Required */
		user_eq_supported: boolean;

		/** Required */
		wifi_auto_save_supported: boolean;

		/** Required */
		wifi_regulatory_domain_locked: boolean;

		/** Required */
		wifi_supported: boolean;
	}
	export interface CapabilitiesFormProperties {

		/** Required */
		aogh_supported: FormControl<boolean | null | undefined>,

		/** Required */
		assistant_supported: FormControl<boolean | null | undefined>,

		/** Required */
		audio_hdr_supported: FormControl<boolean | null | undefined>,

		/** Required */
		audio_surround_mode_supported: FormControl<boolean | null | undefined>,

		/** Required */
		ble_supported: FormControl<boolean | null | undefined>,

		/** Required */
		bluetooth_audio_sink_supported: FormControl<boolean | null | undefined>,

		/** Required */
		bluetooth_audio_source_supported: FormControl<boolean | null | undefined>,

		/** Required */
		bluetooth_supported: FormControl<boolean | null | undefined>,

		/** Required */
		cloudcast_supported: FormControl<boolean | null | undefined>,

		/** Required */
		content_filters_supported: FormControl<boolean | null | undefined>,

		/** Required */
		display_supported: FormControl<boolean | null | undefined>,

		/** Required */
		fdr_supported: FormControl<boolean | null | undefined>,

		/** Required */
		hdmi_prefer_50hz_supported: FormControl<boolean | null | undefined>,

		/** Required */
		hdmi_prefer_high_fps_supported: FormControl<boolean | null | undefined>,

		/** Required */
		hotspot_supported: FormControl<boolean | null | undefined>,

		/** Required */
		https_setup_supported: FormControl<boolean | null | undefined>,

		/** Required */
		input_management_supported: FormControl<boolean | null | undefined>,

		/** Required */
		keep_hotspot_until_connected_supported: FormControl<boolean | null | undefined>,

		/** Required */
		multi_user_supported: FormControl<boolean | null | undefined>,

		/** Required */
		multichannel_group_supported: FormControl<boolean | null | undefined>,

		/** Required */
		multizone_supported: FormControl<boolean | null | undefined>,

		/** Required */
		night_mode_supported: FormControl<boolean | null | undefined>,

		/** Required */
		night_mode_supported_v2: FormControl<boolean | null | undefined>,

		/** Required */
		opencast_supported: FormControl<boolean | null | undefined>,

		/** Required */
		preview_channel_supported: FormControl<boolean | null | undefined>,

		/** Required */
		reboot_supported: FormControl<boolean | null | undefined>,

		/** Required */
		remote_ducking_supported: FormControl<boolean | null | undefined>,

		/** Required */
		separate_tts_volume_supported: FormControl<boolean | null | undefined>,

		/** Required */
		setup_supported: FormControl<boolean | null | undefined>,

		/** Required */
		sleep_mode_supported: FormControl<boolean | null | undefined>,

		/** Required */
		stats_supported: FormControl<boolean | null | undefined>,

		/** Required */
		system_sound_effects_supported: FormControl<boolean | null | undefined>,

		/** Required */
		user_eq_supported: FormControl<boolean | null | undefined>,

		/** Required */
		wifi_auto_save_supported: FormControl<boolean | null | undefined>,

		/** Required */
		wifi_regulatory_domain_locked: FormControl<boolean | null | undefined>,

		/** Required */
		wifi_supported: FormControl<boolean | null | undefined>,
	}
	export function CreateCapabilitiesFormGroup() {
		return new FormGroup<CapabilitiesFormProperties>({
			aogh_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			assistant_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			audio_hdr_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			audio_surround_mode_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ble_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			bluetooth_audio_sink_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			bluetooth_audio_source_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			bluetooth_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			cloudcast_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			content_filters_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			display_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			fdr_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hdmi_prefer_50hz_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hdmi_prefer_high_fps_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hotspot_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			https_setup_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			input_management_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			keep_hotspot_until_connected_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			multi_user_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			multichannel_group_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			multizone_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			night_mode_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			night_mode_supported_v2: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			opencast_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			preview_channel_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			reboot_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			remote_ducking_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			separate_tts_volume_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			setup_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			sleep_mode_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stats_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			system_sound_effects_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			user_eq_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			wifi_auto_save_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			wifi_regulatory_domain_locked: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			wifi_supported: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ChangeDiscoverabilityRequest {

		/** Required */
		enable_discovery: boolean;
	}
	export interface ChangeDiscoverabilityRequestFormProperties {

		/** Required */
		enable_discovery: FormControl<boolean | null | undefined>,
	}
	export function CreateChangeDiscoverabilityRequestFormGroup() {
		return new FormGroup<ChangeDiscoverabilityRequestFormProperties>({
			enable_discovery: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface CheckReadyStatusRequest {

		/** Required */
		play_ready_message: boolean;

		/** Required */
		user_id: string;
	}
	export interface CheckReadyStatusRequestFormProperties {

		/** Required */
		play_ready_message: FormControl<boolean | null | undefined>,

		/** Required */
		user_id: FormControl<string | null | undefined>,
	}
	export function CreateCheckReadyStatusRequestFormGroup() {
		return new FormGroup<CheckReadyStatusRequestFormProperties>({
			play_ready_message: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			user_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConnectedDevice {

		/** Required */
		device: Device;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		enabled_profiles: number;
	}
	export interface ConnectedDeviceFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		enabled_profiles: FormControl<number | null | undefined>,
	}
	export function CreateConnectedDeviceFormGroup() {
		return new FormGroup<ConnectedDeviceFormProperties>({
			enabled_profiles: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Device {

		/**
		 * Required
		 * Type: double
		 */
		bond_date: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_class: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_type: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		last_connect_date: number;

		/** Required */
		mac_address: string;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rssi: number;

		/** Required */
		service_uuids: Array<string>;
	}
	export interface DeviceFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		bond_date: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_class: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_type: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		last_connect_date: FormControl<number | null | undefined>,

		/** Required */
		mac_address: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rssi: FormControl<number | null | undefined>,
	}
	export function CreateDeviceFormGroup() {
		return new FormGroup<DeviceFormProperties>({
			bond_date: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			device_class: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			device_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_connect_date: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mac_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rssi: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ConnecttoWi_FiNetworkRequest {

		/** Required */
		bssid: string;

		/** Required */
		enc_passwd: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		signal_level: number;

		/** Required */
		ssid: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_auth: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_cipher: number;
	}
	export interface ConnecttoWi_FiNetworkRequestFormProperties {

		/** Required */
		bssid: FormControl<string | null | undefined>,

		/** Required */
		enc_passwd: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		signal_level: FormControl<number | null | undefined>,

		/** Required */
		ssid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_auth: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_cipher: FormControl<number | null | undefined>,
	}
	export function CreateConnecttoWi_FiNetworkRequestFormGroup() {
		return new FormGroup<ConnecttoWi_FiNetworkRequestFormProperties>({
			bssid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			enc_passwd: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signal_level: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ssid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wpa_auth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			wpa_cipher: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeleteAlarmsandTimersRequest {

		/** Required */
		ids: Array<string>;
	}
	export interface DeleteAlarmsandTimersRequestFormProperties {
	}
	export function CreateDeleteAlarmsandTimersRequestFormGroup() {
		return new FormGroup<DeleteAlarmsandTimersRequestFormProperties>({
		});

	}

	export interface Detail {

		/** Required */
		icon_list: Array<IconList>;

		/** Required */
		locale: Locale;

		/** Required */
		timezone: Timezone;
	}
	export interface DetailFormProperties {
	}
	export function CreateDetailFormGroup() {
		return new FormGroup<DetailFormProperties>({
		});

	}

	export interface IconList {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		depth: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: number;

		/** Required */
		mimetype: string;

		/** Required */
		url: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: number;
	}
	export interface IconListFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		depth: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		height: FormControl<number | null | undefined>,

		/** Required */
		mimetype: FormControl<string | null | undefined>,

		/** Required */
		url: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateIconListFormGroup() {
		return new FormGroup<IconListFormProperties>({
			depth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			height: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mimetype: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			width: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Locale {

		/** Required */
		display_string: string;
	}
	export interface LocaleFormProperties {

		/** Required */
		display_string: FormControl<string | null | undefined>,
	}
	export function CreateLocaleFormGroup() {
		return new FormGroup<LocaleFormProperties>({
			display_string: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Timezone {

		/** Required */
		display_string: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;
	}
	export interface TimezoneFormProperties {

		/** Required */
		display_string: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,
	}
	export function CreateTimezoneFormGroup() {
		return new FormGroup<TimezoneFormProperties>({
			display_string: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface DeviceInfo {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4k_blocked': number;

		/** Required */
		capabilities: Capabilities;

		/** Required */
		cloud_device_id: string;

		/** Required */
		factory_country_code: string;

		/** Required */
		hotspot_bssid: string;

		/** Required */
		local_authorization_token_hash: string;

		/** Required */
		mac_address: string;

		/** Required */
		manufacturer: string;

		/** Required */
		model_name: string;

		/** Required */
		product_name: string;

		/** Required */
		public_key: string;

		/** Required */
		ssdp_udn: string;

		/** Required */
		uma_client_id: string;

		/**
		 * Required
		 * Type: double
		 */
		uptime: number;

		/** Required */
		weave_device_id: string;
	}
	export interface DeviceInfoFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		'4k_blocked': FormControl<number | null | undefined>,

		/** Required */
		cloud_device_id: FormControl<string | null | undefined>,

		/** Required */
		factory_country_code: FormControl<string | null | undefined>,

		/** Required */
		hotspot_bssid: FormControl<string | null | undefined>,

		/** Required */
		local_authorization_token_hash: FormControl<string | null | undefined>,

		/** Required */
		mac_address: FormControl<string | null | undefined>,

		/** Required */
		manufacturer: FormControl<string | null | undefined>,

		/** Required */
		model_name: FormControl<string | null | undefined>,

		/** Required */
		product_name: FormControl<string | null | undefined>,

		/** Required */
		public_key: FormControl<string | null | undefined>,

		/** Required */
		ssdp_udn: FormControl<string | null | undefined>,

		/** Required */
		uma_client_id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		uptime: FormControl<number | null | undefined>,

		/** Required */
		weave_device_id: FormControl<string | null | undefined>,
	}
	export function CreateDeviceInfoFormGroup() {
		return new FormGroup<DeviceInfoFormProperties>({
			'4k_blocked': new FormControl<number | null | undefined>(undefined, [Validators.required]),
			cloud_device_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			factory_country_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			hotspot_bssid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			local_authorization_token_hash: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			mac_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			manufacturer: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			model_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			product_name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			public_key: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			ssdp_udn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uma_client_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			uptime: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			weave_device_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example1 {

		/** Required */
		aogh: Aogh;

		/** Required */
		audio: Audio;

		/** Required */
		build_info: BuildInfo;

		/** Required */
		detail: Detail;

		/** Required */
		device_info: DeviceInfo;

		/** Required */
		multizone: Multizone;

		/** Required */
		name: string;

		/** Required */
		net: Net;

		/** Required */
		night_mode_params: NightModeParams;

		/** Required */
		opencast: Opencast;

		/** Required */
		opt_in: OptIn;

		/** Required */
		proxy: Proxy;

		/** Required */
		settings: Settings;

		/** Required */
		setup: Setup;

		/** Required */
		sign: Sign;

		/** Required */
		user_eq: UserEq;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: number;

		/** Required */
		wifi: Wifi;
	}
	export interface Example1FormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		version: FormControl<number | null | undefined>,
	}
	export function CreateExample1FormGroup() {
		return new FormGroup<Example1FormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			version: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Multizone {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_output_delay: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_output_delay_hdmi: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_output_delay_oem: number;

		/** Required */
		aux_in_group: string;

		/** Required */
		dynamic_groups: Array<string>;

		/** Required */
		groups: Array<string>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		multichannel_status: number;
	}
	export interface MultizoneFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_output_delay: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_output_delay_hdmi: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_output_delay_oem: FormControl<number | null | undefined>,

		/** Required */
		aux_in_group: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		multichannel_status: FormControl<number | null | undefined>,
	}
	export function CreateMultizoneFormGroup() {
		return new FormGroup<MultizoneFormProperties>({
			audio_output_delay: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			audio_output_delay_hdmi: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			audio_output_delay_oem: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			aux_in_group: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			multichannel_status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Net {

		/** Required */
		ethernet_connected: boolean;

		/** Required */
		ip_address: string;

		/** Required */
		online: boolean;
	}
	export interface NetFormProperties {

		/** Required */
		ethernet_connected: FormControl<boolean | null | undefined>,

		/** Required */
		ip_address: FormControl<string | null | undefined>,

		/** Required */
		online: FormControl<boolean | null | undefined>,
	}
	export function CreateNetFormGroup() {
		return new FormGroup<NetFormProperties>({
			ethernet_connected: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ip_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			online: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NightModeParams {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_override_do_not_disturb: number;

		/** Required */
		do_not_disturb: boolean;

		/** Required */
		enabled: boolean;

		/**
		 * Required
		 * Type: double
		 */
		led_brightness: number;

		/**
		 * Required
		 * Type: double
		 */
		volume: number;

		/** Required */
		windows: Array<Window>;
	}
	export interface NightModeParamsFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_override_do_not_disturb: FormControl<number | null | undefined>,

		/** Required */
		do_not_disturb: FormControl<boolean | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		led_brightness: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateNightModeParamsFormGroup() {
		return new FormGroup<NightModeParamsFormProperties>({
			device_override_do_not_disturb: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			do_not_disturb: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			led_brightness: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			volume: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Window {

		/** Required */
		days: Array<number>;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length_hours: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_hour: number;
	}
	export interface WindowFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		length_hours: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		start_hour: FormControl<number | null | undefined>,
	}
	export function CreateWindowFormGroup() {
		return new FormGroup<WindowFormProperties>({
			length_hours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			start_hour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Opencast {

		/** Required */
		pin_code: string;
	}
	export interface OpencastFormProperties {

		/** Required */
		pin_code: FormControl<string | null | undefined>,
	}
	export function CreateOpencastFormGroup() {
		return new FormGroup<OpencastFormProperties>({
			pin_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OptIn {

		/** Required */
		audio_hdr: boolean;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_surround_mode: number;

		/** Required */
		autoplay_on_signal: boolean;

		/** Required */
		cloud_ipc: boolean;

		/** Required */
		hdmi_prefer_50hz: boolean;

		/** Required */
		hdmi_prefer_high_fps: boolean;

		/** Required */
		managed_mode: boolean;

		/** Required */
		opencast: boolean;

		/** Required */
		preview_channel: boolean;

		/** Required */
		remote_ducking: boolean;

		/** Required */
		stats: boolean;

		/** Required */
		ui_flipped: boolean;

		/** Required */
		wpa3_support_enabled: boolean;
	}
	export interface OptInFormProperties {

		/** Required */
		audio_hdr: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_surround_mode: FormControl<number | null | undefined>,

		/** Required */
		autoplay_on_signal: FormControl<boolean | null | undefined>,

		/** Required */
		cloud_ipc: FormControl<boolean | null | undefined>,

		/** Required */
		hdmi_prefer_50hz: FormControl<boolean | null | undefined>,

		/** Required */
		hdmi_prefer_high_fps: FormControl<boolean | null | undefined>,

		/** Required */
		managed_mode: FormControl<boolean | null | undefined>,

		/** Required */
		opencast: FormControl<boolean | null | undefined>,

		/** Required */
		preview_channel: FormControl<boolean | null | undefined>,

		/** Required */
		remote_ducking: FormControl<boolean | null | undefined>,

		/** Required */
		stats: FormControl<boolean | null | undefined>,

		/** Required */
		ui_flipped: FormControl<boolean | null | undefined>,

		/** Required */
		wpa3_support_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateOptInFormGroup() {
		return new FormGroup<OptInFormProperties>({
			audio_hdr: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			audio_surround_mode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			autoplay_on_signal: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			cloud_ipc: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hdmi_prefer_50hz: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hdmi_prefer_high_fps: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			managed_mode: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			opencast: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			preview_channel: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			remote_ducking: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stats: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			ui_flipped: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			wpa3_support_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Proxy {

		/** Required */
		mode: string;
	}
	export interface ProxyFormProperties {

		/** Required */
		mode: FormControl<string | null | undefined>,
	}
	export function CreateProxyFormGroup() {
		return new FormGroup<ProxyFormProperties>({
			mode: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Settings {

		/** Required */
		closed_caption: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		control_notifications: number;

		/** Required */
		country_code: string;

		/** Required */
		locale: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		network_standby: number;

		/** Required */
		system_sound_effects: boolean;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time_format: number;

		/** Required */
		timezone: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wake_on_cast: number;
	}
	export interface SettingsFormProperties {

		/** Required */
		closed_caption: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		control_notifications: FormControl<number | null | undefined>,

		/** Required */
		country_code: FormControl<string | null | undefined>,

		/** Required */
		locale: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		network_standby: FormControl<number | null | undefined>,

		/** Required */
		system_sound_effects: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time_format: FormControl<number | null | undefined>,

		/** Required */
		timezone: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wake_on_cast: FormControl<number | null | undefined>,
	}
	export function CreateSettingsFormGroup() {
		return new FormGroup<SettingsFormProperties>({
			closed_caption: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			control_notifications: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			country_code: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			network_standby: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			system_sound_effects: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			time_format: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timezone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wake_on_cast: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Setup {

		/** Required */
		qr_ssid_suffix: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		setup_state: number;

		/** Required */
		ssid_suffix: string;

		/** Required */
		stats: Stats;

		/** Required */
		tos_accepted: boolean;
	}
	export interface SetupFormProperties {

		/** Required */
		qr_ssid_suffix: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		setup_state: FormControl<number | null | undefined>,

		/** Required */
		ssid_suffix: FormControl<string | null | undefined>,

		/** Required */
		tos_accepted: FormControl<boolean | null | undefined>,
	}
	export function CreateSetupFormGroup() {
		return new FormGroup<SetupFormProperties>({
			qr_ssid_suffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			setup_state: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ssid_suffix: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			tos_accepted: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Stats {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_check_connectivity: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_connect_wifi: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_connected_wifi_not_saved: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_initial_eureka_info: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_obtain_ip: number;
	}
	export interface StatsFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_check_connectivity: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_connect_wifi: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_connected_wifi_not_saved: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_initial_eureka_info: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		num_obtain_ip: FormControl<number | null | undefined>,
	}
	export function CreateStatsFormGroup() {
		return new FormGroup<StatsFormProperties>({
			num_check_connectivity: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			num_connect_wifi: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			num_connected_wifi_not_saved: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			num_initial_eureka_info: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			num_obtain_ip: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Sign {

		/** Required */
		certificate: string;

		/** Required */
		intermediate_certs: Array<string>;

		/** Required */
		nonce: string;

		/** Required */
		signed_data: string;
	}
	export interface SignFormProperties {

		/** Required */
		certificate: FormControl<string | null | undefined>,

		/** Required */
		nonce: FormControl<string | null | undefined>,

		/** Required */
		signed_data: FormControl<string | null | undefined>,
	}
	export function CreateSignFormGroup() {
		return new FormGroup<SignFormProperties>({
			certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			nonce: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signed_data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface UserEq {

		/** Required */
		high_shelf: HighShelf;

		/** Required */
		low_shelf: LowShelf;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_peaking_eqs: number;

		/** Required */
		peaking_eqs: Array<string>;
	}
	export interface UserEqFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		max_peaking_eqs: FormControl<number | null | undefined>,
	}
	export function CreateUserEqFormGroup() {
		return new FormGroup<UserEqFormProperties>({
			max_peaking_eqs: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HighShelf {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gain_db: number;

		/**
		 * Required
		 * Type: double
		 */
		quality: number;
	}
	export interface HighShelfFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gain_db: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		quality: FormControl<number | null | undefined>,
	}
	export function CreateHighShelfFormGroup() {
		return new FormGroup<HighShelfFormProperties>({
			frequency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			gain_db: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quality: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LowShelf {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gain_db: number;

		/**
		 * Required
		 * Type: double
		 */
		quality: number;
	}
	export interface LowShelfFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		frequency: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gain_db: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		quality: FormControl<number | null | undefined>,
	}
	export function CreateLowShelfFormGroup() {
		return new FormGroup<LowShelfFormProperties>({
			frequency: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			gain_db: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			quality: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Wifi {

		/** Required */
		bssid: string;

		/** Required */
		has_changes: boolean;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		noise_level: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		signal_level: number;

		/** Required */
		ssid: string;

		/** Required */
		wpa_configured: boolean;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_id: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_state: number;
	}
	export interface WifiFormProperties {

		/** Required */
		bssid: FormControl<string | null | undefined>,

		/** Required */
		has_changes: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		noise_level: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		signal_level: FormControl<number | null | undefined>,

		/** Required */
		ssid: FormControl<string | null | undefined>,

		/** Required */
		wpa_configured: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_id: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_state: FormControl<number | null | undefined>,
	}
	export function CreateWifiFormGroup() {
		return new FormGroup<WifiFormProperties>({
			bssid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			has_changes: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			noise_level: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			signal_level: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ssid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wpa_configured: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			wpa_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			wpa_state: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example11 {

		/** Required */
		app_device_id: string;

		/** Required */
		certificate: string;

		/** Required */
		signed_data: string;
	}
	export interface Example11FormProperties {

		/** Required */
		app_device_id: FormControl<string | null | undefined>,

		/** Required */
		certificate: FormControl<string | null | undefined>,

		/** Required */
		signed_data: FormControl<string | null | undefined>,
	}
	export function CreateExample11FormGroup() {
		return new FormGroup<Example11FormProperties>({
			app_device_id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			certificate: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signed_data: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example110 {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_mode: number;

		/** Required */
		connected_devices: Array<ConnectedDevice>;

		/** Required */
		connecting_devices: Array<string>;

		/** Required */
		discovery_enabled: boolean;

		/** Required */
		remote_sink: RemoteSink;

		/** Required */
		scanning_enabled: boolean;
	}
	export interface Example110FormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		audio_mode: FormControl<number | null | undefined>,

		/** Required */
		discovery_enabled: FormControl<boolean | null | undefined>,

		/** Required */
		scanning_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateExample110FormGroup() {
		return new FormGroup<Example110FormProperties>({
			audio_mode: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			discovery_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			scanning_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RemoteSink {

		/**
		 * Required
		 * Type: double
		 */
		bond_date: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_class: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_type: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		last_connect_date: number;

		/** Required */
		mac_address: string;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rssi: number;

		/** Required */
		service_uuids: Array<string>;
	}
	export interface RemoteSinkFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		bond_date: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_class: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_type: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		last_connect_date: FormControl<number | null | undefined>,

		/** Required */
		mac_address: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rssi: FormControl<number | null | undefined>,
	}
	export function CreateRemoteSinkFormGroup() {
		return new FormGroup<RemoteSinkFormProperties>({
			bond_date: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			device_class: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			device_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_connect_date: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mac_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rssi: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example111 {

		/**
		 * Required
		 * Type: double
		 */
		bond_date: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_class: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_type: number;

		/**
		 * Required
		 * Type: double
		 */
		last_connect_date: number;

		/** Required */
		mac_address: string;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rssi: number;

		/** Required */
		service_uuids: Array<string>;
	}
	export interface Example111FormProperties {

		/**
		 * Required
		 * Type: double
		 */
		bond_date: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_class: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_type: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		last_connect_date: FormControl<number | null | undefined>,

		/** Required */
		mac_address: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rssi: FormControl<number | null | undefined>,
	}
	export function CreateExample111FormGroup() {
		return new FormGroup<Example111FormProperties>({
			bond_date: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			device_class: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			device_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			last_connect_date: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mac_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rssi: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example112 {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_class: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_type: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expected_profiles: number;

		/** Required */
		mac_address: string;

		/** Required */
		name: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rssi: number;
	}
	export interface Example112FormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_class: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		device_type: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		expected_profiles: FormControl<number | null | undefined>,

		/** Required */
		mac_address: FormControl<string | null | undefined>,

		/** Required */
		name: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		rssi: FormControl<number | null | undefined>,
	}
	export function CreateExample112FormGroup() {
		return new FormGroup<Example112FormProperties>({
			device_class: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			device_type: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			expected_profiles: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			mac_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			rssi: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example113 {

		/** Required */
		ssid: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_auth: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_cipher: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_id: number;
	}
	export interface Example113FormProperties {

		/** Required */
		ssid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_auth: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_cipher: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_id: FormControl<number | null | undefined>,
	}
	export function CreateExample113FormGroup() {
		return new FormGroup<Example113FormProperties>({
			ssid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wpa_auth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			wpa_cipher: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			wpa_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example114 {

		/** Required */
		bssid: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		signal_level: number;

		/** Required */
		ssid: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_auth: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_cipher: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_id: number;
	}
	export interface Example114FormProperties {

		/** Required */
		bssid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		signal_level: FormControl<number | null | undefined>,

		/** Required */
		ssid: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_auth: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_cipher: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_id: FormControl<number | null | undefined>,
	}
	export function CreateExample114FormGroup() {
		return new FormGroup<Example114FormProperties>({
			bssid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			signal_level: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ssid: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			wpa_auth: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			wpa_cipher: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			wpa_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example12 {

		/** Required */
		token: string;
	}
	export interface Example12FormProperties {

		/** Required */
		token: FormControl<string | null | undefined>,
	}
	export function CreateExample12FormGroup() {
		return new FormGroup<Example12FormProperties>({
			token: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example13 {

		/** Required */
		can_enroll: boolean;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		enrollment_state: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_code: number;

		/** Required */
		ready: boolean;

		/** Required */
		retryable: boolean;
	}
	export interface Example13FormProperties {

		/** Required */
		can_enroll: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		enrollment_state: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		error_code: FormControl<number | null | undefined>,

		/** Required */
		ready: FormControl<boolean | null | undefined>,

		/** Required */
		retryable: FormControl<boolean | null | undefined>,
	}
	export function CreateExample13FormGroup() {
		return new FormGroup<Example13FormProperties>({
			can_enroll: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enrollment_state: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			error_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			ready: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			retryable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example14 {

		/** Required */
		display_string: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: number;

		/** Required */
		timezone: string;
	}
	export interface Example14FormProperties {

		/** Required */
		display_string: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		offset: FormControl<number | null | undefined>,

		/** Required */
		timezone: FormControl<string | null | undefined>,
	}
	export function CreateExample14FormGroup() {
		return new FormGroup<Example14FormProperties>({
			display_string: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			offset: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			timezone: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example15 {

		/** Required */
		display_string: string;

		/** Required */
		locale: string;
	}
	export interface Example15FormProperties {

		/** Required */
		display_string: FormControl<string | null | undefined>,

		/** Required */
		locale: FormControl<string | null | undefined>,
	}
	export function CreateExample15FormGroup() {
		return new FormGroup<Example15FormProperties>({
			display_string: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			locale: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example16 {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_received: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		response_code: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time_for_data_fetch: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time_for_http_response: number;
	}
	export interface Example16FormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		bytes_received: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		response_code: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time_for_data_fetch: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		time_for_http_response: FormControl<number | null | undefined>,
	}
	export function CreateExample16FormGroup() {
		return new FormGroup<Example16FormProperties>({
			bytes_received: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			response_code: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			time_for_data_fetch: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			time_for_http_response: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example17 {

		/** Required */
		do_not_disturb: boolean;

		/** Required */
		enabled: boolean;

		/**
		 * Required
		 * Type: double
		 */
		led_brightness: number;

		/**
		 * Required
		 * Type: double
		 */
		volume: number;

		/** Required */
		windows: Array<Window2>;
	}
	export interface Example17FormProperties {

		/** Required */
		do_not_disturb: FormControl<boolean | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		led_brightness: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateExample17FormGroup() {
		return new FormGroup<Example17FormProperties>({
			do_not_disturb: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			led_brightness: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			volume: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Window2 {

		/** Required */
		days: Array<number>;

		/**
		 * Required
		 * Type: double
		 */
		length_hours: number;

		/**
		 * Required
		 * Type: double
		 */
		start_hour: number;
	}
	export interface Window2FormProperties {

		/**
		 * Required
		 * Type: double
		 */
		length_hours: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		start_hour: FormControl<number | null | undefined>,
	}
	export function CreateWindow2FormGroup() {
		return new FormGroup<Window2FormProperties>({
			length_hours: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			start_hour: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example18 {

		/** Required */
		alarm: Array<Alarm>;

		/** Required */
		timer: Array<Timer>;
	}
	export interface Example18FormProperties {
	}
	export function CreateExample18FormGroup() {
		return new FormGroup<Example18FormProperties>({
		});

	}

	export interface Timer {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		fire_time: string;

		/** Required */
		id: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		original_duration: number;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: number;
	}
	export interface TimerFormProperties {

		/**
		 * Required
		 * Type: long, -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
		 */
		fire_time: FormControl<string | null | undefined>,

		/** Required */
		id: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		original_duration: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,
	}
	export function CreateTimerFormGroup() {
		return new FormGroup<TimerFormProperties>({
			fire_time: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			id: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			original_duration: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			status: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Example19 {

		/** Required */
		success: boolean;
	}
	export interface Example19FormProperties {

		/** Required */
		success: FormControl<boolean | null | undefined>,
	}
	export function CreateExample19FormGroup() {
		return new FormGroup<Example19FormProperties>({
			success: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ForgetWi_FiNetworkRequest {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_id: number;
	}
	export interface ForgetWi_FiNetworkRequestFormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		wpa_id: FormControl<number | null | undefined>,
	}
	export function CreateForgetWi_FiNetworkRequestFormGroup() {
		return new FormGroup<ForgetWi_FiNetworkRequestFormProperties>({
			wpa_id: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ForgetpaireddeviceRequest {

		/** Required */
		bond: boolean;

		/** Required */
		mac_address: string;
	}
	export interface ForgetpaireddeviceRequestFormProperties {

		/** Required */
		bond: FormControl<boolean | null | undefined>,

		/** Required */
		mac_address: FormControl<string | null | undefined>,
	}
	export function CreateForgetpaireddeviceRequestFormGroup() {
		return new FormGroup<ForgetpaireddeviceRequestFormProperties>({
			bond: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			mac_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Getcurrentstate {

		/** Required */
		notifications_enabled: boolean;
	}
	export interface GetcurrentstateFormProperties {

		/** Required */
		notifications_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGetcurrentstateFormGroup() {
		return new FormGroup<GetcurrentstateFormProperties>({
			notifications_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Getcurrentvalues {

		/** Required */
		endpoint_enabled: boolean;

		/** Required */
		hotword_enabled: boolean;
	}
	export interface GetcurrentvaluesFormProperties {

		/** Required */
		endpoint_enabled: FormControl<boolean | null | undefined>,

		/** Required */
		hotword_enabled: FormControl<boolean | null | undefined>,
	}
	export function CreateGetcurrentvaluesFormGroup() {
		return new FormGroup<GetcurrentvaluesFormProperties>({
			endpoint_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			hotword_enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Getvolume {

		/**
		 * Required
		 * Type: double
		 */
		volume: number;
	}
	export interface GetvolumeFormProperties {

		/**
		 * Required
		 * Type: double
		 */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateGetvolumeFormGroup() {
		return new FormGroup<GetvolumeFormProperties>({
			volume: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface HighShelf1 {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gain_db: number;
	}
	export interface HighShelf1FormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gain_db: FormControl<number | null | undefined>,
	}
	export function CreateHighShelf1FormGroup() {
		return new FormGroup<HighShelf1FormProperties>({
			gain_db: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface LowShelf1 {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gain_db: number;
	}
	export interface LowShelf1FormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		gain_db: FormControl<number | null | undefined>,
	}
	export function CreateLowShelf1FormGroup() {
		return new FormGroup<LowShelf1FormProperties>({
			gain_db: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface NightModesettingsRequest {

		/** Required */
		demo_to_user: boolean;

		/** Required */
		do_not_disturb: boolean;

		/** Required */
		enabled: boolean;

		/**
		 * Required
		 * Type: double
		 */
		led_brightness: number;

		/**
		 * Required
		 * Type: double
		 */
		volume: number;

		/** Required */
		windows: Array<Window>;
	}
	export interface NightModesettingsRequestFormProperties {

		/** Required */
		demo_to_user: FormControl<boolean | null | undefined>,

		/** Required */
		do_not_disturb: FormControl<boolean | null | undefined>,

		/** Required */
		enabled: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		led_brightness: FormControl<number | null | undefined>,

		/**
		 * Required
		 * Type: double
		 */
		volume: FormControl<number | null | undefined>,
	}
	export function CreateNightModesettingsRequestFormGroup() {
		return new FormGroup<NightModesettingsRequestFormProperties>({
			demo_to_user: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			do_not_disturb: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enabled: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			led_brightness: new FormControl<number | null | undefined>(undefined, [Validators.required]),
			volume: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface OptIn1 {

		/** Required */
		opencast: boolean;

		/** Required */
		preview_channel: boolean;

		/** Required */
		remote_ducking: boolean;

		/** Required */
		stats: boolean;
	}
	export interface OptIn1FormProperties {

		/** Required */
		opencast: FormControl<boolean | null | undefined>,

		/** Required */
		preview_channel: FormControl<boolean | null | undefined>,

		/** Required */
		remote_ducking: FormControl<boolean | null | undefined>,

		/** Required */
		stats: FormControl<boolean | null | undefined>,
	}
	export function CreateOptIn1FormGroup() {
		return new FormGroup<OptIn1FormProperties>({
			opencast: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			preview_channel: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			remote_ducking: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			stats: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface PairwithSpeakerRequest {

		/** Required */
		connect: boolean;

		/** Required */
		mac_address: string;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		profile: number;
	}
	export interface PairwithSpeakerRequestFormProperties {

		/** Required */
		connect: FormControl<boolean | null | undefined>,

		/** Required */
		mac_address: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		profile: FormControl<number | null | undefined>,
	}
	export function CreatePairwithSpeakerRequestFormGroup() {
		return new FormGroup<PairwithSpeakerRequestFormProperties>({
			connect: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			mac_address: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			profile: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface RebootandFactoryResetRequest {

		/** Required */
		params: string;
	}
	export interface RebootandFactoryResetRequestFormProperties {

		/** Required */
		params: FormControl<string | null | undefined>,
	}
	export function CreateRebootandFactoryResetRequestFormGroup() {
		return new FormGroup<RebootandFactoryResetRequestFormProperties>({
			params: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface ScanfordevicesRequest {

		/** Required */
		clear_results: boolean;

		/** Required */
		enable: boolean;

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeout: number;
	}
	export interface ScanfordevicesRequestFormProperties {

		/** Required */
		clear_results: FormControl<boolean | null | undefined>,

		/** Required */
		enable: FormControl<boolean | null | undefined>,

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		timeout: FormControl<number | null | undefined>,
	}
	export function CreateScanfordevicesRequestFormGroup() {
		return new FormGroup<ScanfordevicesRequestFormProperties>({
			clear_results: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			enable: new FormControl<boolean | null | undefined>(undefined, [Validators.required]),
			timeout: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface SetEqualizerValuesRequest {

		/** Required */
		high_shelf: HighShelf1;

		/** Required */
		low_shelf: LowShelf1;
	}
	export interface SetEqualizerValuesRequestFormProperties {
	}
	export function CreateSetEqualizerValuesRequestFormGroup() {
		return new FormGroup<SetEqualizerValuesRequestFormProperties>({
		});

	}

	export interface SetEurekaInfoRequest {

		/** Required */
		name: string;

		/** Required */
		opt_in: OptIn1;

		/** Required */
		settings: Settings1;
	}
	export interface SetEurekaInfoRequestFormProperties {

		/** Required */
		name: FormControl<string | null | undefined>,
	}
	export function CreateSetEurekaInfoRequestFormGroup() {
		return new FormGroup<SetEurekaInfoRequestFormProperties>({
			name: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface Settings1 {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		control_notifications: number;
	}
	export interface Settings1FormProperties {

		/**
		 * Required
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		control_notifications: FormControl<number | null | undefined>,
	}
	export function CreateSettings1FormGroup() {
		return new FormGroup<Settings1FormProperties>({
			control_notifications: new FormControl<number | null | undefined>(undefined, [Validators.required]),
		});

	}

	export interface TestInternetDownloadSpeedRequest {

		/** Required */
		url: string;
	}
	export interface TestInternetDownloadSpeedRequestFormProperties {

		/** Required */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTestInternetDownloadSpeedRequestFormGroup() {
		return new FormGroup<TestInternetDownloadSpeedRequestFormProperties>({
			url: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Legal Notice
		 * All licenses of programs used by Home.
		 * Get NOTICE.html.gz
		 */
		LegalNotice(): Observable<string> {
			return this.http.get(this.baseUri + 'NOTICE.html.gz', { responseType: 'text' });
		}

		/**
		 * Accessibility
		 * This controls Accessibility sounds. `hotword_enabled` is for 'Play start sound' and `endpoint_enabled` is for 'Play end sound'.
		 * Sending an empty-body POST request returns the current values.
		 * Either of the fields or both can be sent and new values will be saved.
		 * Post assistant/a11y_mode
		 */
		Accessibility(requestBody: AccessibilityRequest): Observable<Getcurrentvalues> {
			return this.http.post<Getcurrentvalues>(this.baseUri + 'assistant/a11y_mode', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Get Alarms and Timers
		 * This gives a list of all active alarms and timers.
		 * Both alarms and timers have `id`s which can be used to delete them. (There is no known way of creating/deleting yet). The value of `status` have different meanings for alarms and timers (given below).
		 * Alarms have `date_pattern` and `time_pattern` with day, month, year, hour, minute, second. `fire_time` is the same in unix time (milliseconds, not seconds).
		 * `status` is 1 for set up and 2 for ringing.
		 * Timers have `original_duration` is the original duration.
		 * `status` is 1 for set up and 3 for ringing.
		 * Get assistant/alarms
		 */
		GetAlarmsandTimers(): Observable<Example18> {
			return this.http.get<Example18>(this.baseUri + 'assistant/alarms', {});
		}

		/**
		 * Delete Alarms and Timers
		 * This deletes alarms and timers by their id.
		 * `ids` is a list of ids to be deleted. Sending invalid id still returns a 200 OK. The `/` in the ids have to be escaped like `\/`.
		 * Post assistant/alarms/delete
		 */
		DeleteAlarmsandTimers(requestBody: DeleteAlarmsandTimersRequest): Observable<Example19> {
			return this.http.post<Example19>(this.baseUri + 'assistant/alarms/delete', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Alarm Volume
		 * This gets and sets alarms and timers volume.
		 * **Note:** This is not the same as normal volume.
		 * Volume is a float number in [0, 1] where 0 is minimum and 1 is maximum.
		 * Sending an empty body gets the volume. Sending `volume` sets the volume.
		 * Post assistant/alarms/volume
		 */
		AlarmVolume(requestBody: AlarmVolumeRequest): Observable<Getvolume> {
			return this.http.post<Getvolume>(this.baseUri + 'assistant/alarms/volume', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Check Ready Status
		 * **Update:** This seems to have changed now and is no longer possible. The error is also new.
		 * Setting `play_ready_message` to true plays a welcome message on the device saying "Hi, I'm your Google Assistant. I'm here to help. To learn a few things you can do, continue in the Google Home app."
		 * Post assistant/check_ready_status
		 */
		CheckReadyStatus(requestBody: CheckReadyStatusRequest): Observable<Example13> {
			return this.http.post<Example13>(this.baseUri + 'assistant/check_ready_status', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Do Not Disturb
		 * This is for the Do Not Disturb option. Sending an empty-body POST returns the current value. Sending a new value changes it.
		 * Post assistant/notifications
		 */
		DoNotDisturb(): Observable<Getcurrentstate> {
			return this.http.post<Getcurrentstate>(this.baseUri + 'assistant/notifications', null, {});
		}

		/**
		 * Night Mode settings
		 * This sets night mode options.
		 * To view currently set values, use /setup/eureka_info.
		 * If `enabled` is set to false, night mode is disabled and the other values do not matter.
		 * `led_brightness` and `volume` refer to the maximum LED Brightness and Volume that is set during night mode.
		 * `demo_to_user` is always set to `true` so change in values will be visible in realtime (like brightness).
		 * `windows`: A combination of `length_hours` and `start_hour` is used to define start and end times for night mode. In this example, night mode starts at 10 PM (22) and ends at 6 AM (8 hours later). `windows.days` is an array of days of week when night mode will be enabled. Example: 0->Sunday, 1-> Monday, ..., 6->Saturday.
		 * Post assistant/set_night_mode_params
		 */
		NightModesettings(requestBody: NightModesettingsRequest): Observable<Example17> {
			return this.http.post<Example17>(this.baseUri + 'assistant/set_night_mode_params', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Forget paired device
		 * *See note for Bluetooth under `/setup/bluetooth/status`*
		 * **For both parts**
		 * This is to forget paired devices by mac address. Works for both kinds of devices (Part 1 and Part 2).
		 * Post bluetooth/bond
		 */
		Forgetpaireddevice(requestBody: ForgetpaireddeviceRequest): Observable<string> {
			return this.http.post(this.baseUri + 'bluetooth/bond', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Pair with Speaker
		 * *See note for Bluetooth under `/setup/bluetooth/status`*
		 * **For Part 2 only**
		 * This pairs with other bluetooth speakers by mac address.
		 * Post bluetooth/connect
		 */
		PairwithSpeaker(requestBody: PairwithSpeakerRequest): Observable<string> {
			return this.http.post(this.baseUri + 'bluetooth/connect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Change Discoverability
		 * *See note for Bluetooth under `/setup/bluetooth/status`*
		 * **For Part 1 only**
		 * This enables/disables Home's bluetooth discovery and other devices can pair with Home (where Home acts as a speaker).
		 * Post bluetooth/discovery
		 */
		ChangeDiscoverability(requestBody: ChangeDiscoverabilityRequest): Observable<string> {
			return this.http.post(this.baseUri + 'bluetooth/discovery', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get Paired Devices
		 * *See note for Bluetooth under `/setup/bluetooth/status`*
		 * **For both parts**
		 * This gives a list of all paired or 'bonded' devices. The response field names are self-descriptive.
		 * Get bluetooth/get_bonded
		 */
		GetPairedDevices(): Observable<Array<Example111>> {
			return this.http.get<Array<Example111>>(this.baseUri + 'bluetooth/get_bonded', {});
		}

		/**
		 * Scan for devices
		 * *See note for Bluetooth under `/setup/bluetooth/status`*
		 * **For Part 2 only**
		 * This initiates scan for other bluetooth speakers/devices. Scan results will be updated continuously for `timeout` seconds.
		 * To get the scan results, see /setup/bluetooth/scan_results.
		 * Post bluetooth/scan
		 */
		Scanfordevices(requestBody: ScanfordevicesRequest): Observable<string> {
			return this.http.post(this.baseUri + 'bluetooth/scan', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get Scan Results
		 * *See note for Bluetooth under `/setup/bluetooth/status`*
		 * **For Part 2 only**
		 * This returns a list of all nearby bluetooth devices. While the Home app only shows speakers, this list contains all devices including TVs, mobiles, etc.
		 * `rssi` is signal strength, `name` is name, `mac_address` is mac address.
		 * `device_class` and `device_type` are bluetooth codes.
		 * The Home app only lists those devices with `expected_profiles` > 0. Basically, the device should function as a speaker.
		 * Get bluetooth/scan_results
		 */
		GetScanResults(): Observable<Array<Example112>> {
			return this.http.get<Array<Example112>>(this.baseUri + 'bluetooth/scan_results', {});
		}

		/**
		 * Status
		 * > **There are 2 parts of Bluetooth.**
		 * >
		 * > *Part 1*: Devices like phones connect to Home and play audio through Home.
		 * > For this, /setup/bluetooth/discovery is used to make Home discoverable. Then devices can connect to it as if Home is just another bluetooth speaker.
		 * >
		 * > *Part 2*: Bluetooth speakers connect to Home and Home plays audio through the speakers.
		 * > For this, /setup/bluetooth/scan and /setup/bluetooth/scan_results are used to connect to other speakers.
		 * >
		 * > The other endpoints are common for both parts.
		 * **For both parts**
		 * This gives the status of all bluetooth things.
		 * - Not sure what `audio_mode` is.
		 * - `discovery_enabled` states whether Home is discoverable. (**Part 1**)
		 * - `connecting_devices` is a list of all media sources (like phones) connected to Home. (**Part 1**)
		 * - `scanning_enabled` states whether Home scanning for other bluetooth speakers/devices. (**Part 2**)
		 * - `connected_devices` is a list of all speakers connected to Home. (**Part 2**)
		 * Get bluetooth/status
		 */
		Status(): Observable<Example110> {
			return this.http.get<Example110>(this.baseUri + 'bluetooth/status', {});
		}

		/**
		 * Get Saved Networks
		 * This gets a list of all saved Wi-Fi networks.
		 * Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.
		 * `wpa_id` is an incrementing number used to identify a saved network.
		 * #TODO: Add values for `wpa_auth` and `wpa_cipher`.
		 * Get configured_networks
		 */
		GetSavedNetworks(): Observable<Array<Example113>> {
			return this.http.get<Array<Example113>>(this.baseUri + 'configured_networks', {});
		}

		/**
		 * Connect to Wi-Fi Network
		 * **Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).
		 * Post connect_wifi
		 * @return {void} 
		 */
		ConnecttoWi_FiNetwork(requestBody: ConnecttoWi_FiNetworkRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'connect_wifi', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Eureka Info
		 * This gives most of the device info. The GET parameter `param` is a comma separated list of json keys to fetch. Currently, these params are known: `version,audio,name,build_info,detail,device_info,net,wifi,setup,settings,opt_in,opencast,multizone,proxy,night_mode_params,user_eq,room_equalizer,sign,aogh,ultrasound,mesh`
		 * Nested items can also be filtered using the dot notation. Example: `audio.digital`
		 * The `options` GET parameter is always set to `detail` or `detail,sign`. `sign` signs the `nonce` and returns some value.
		 * The `nonce` GET parameter is an integer value signed with needed (see `option` parameter above).
		 * Get eureka_info
		 * @param {number} nonce Type: int, -2,147,483,648 to 2,147,483,647
		 */
		EurekaInfo(params: string, options: string, nonce: number): Observable<Example1> {
			return this.http.get<Example1>(this.baseUri + 'eureka_info?params=' + (params == null ? '' : encodeURIComponent(params)) + '&options=' + (options == null ? '' : encodeURIComponent(options)) + '&nonce=' + nonce, {});
		}

		/**
		 * Forget Wi-Fi Network
		 * This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks
		 * Post forget_wifi
		 */
		ForgetWi_FiNetwork(requestBody: ForgetWi_FiNetworkRequest): Observable<string> {
			return this.http.post(this.baseUri + 'forget_wifi', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * App Device ID
		 * This gives "app device id", "certificate" and "signed data".
		 * The `app_id` in the request is mandatory and refers to Chromecast backdrop/screensaver app. It has to be set to `E8C28D3C`.
		 * The certificate is valid and issued by `Chromecast ICA 6 (Audio Assist), Google Inc`.
		 * Not sure what the other two are.
		 * Post get_app_device_id
		 */
		AppDeviceID(requestBody: AppDeviceIDRequest): Observable<Example11> {
			return this.http.post<Example11>(this.baseUri + 'get_app_device_id', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Chromecast Icon
		 * **Update:** This no longer exists. It's not useful, anyway.
		 * A redirect to `http://www.gstatic.com/eureka/images/eureka_device.png`
		 * Get icon.png
		 * @return {void} 
		 */
		ChromecastIcon(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'icon.png', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Offer
		 * This gives a token which is used by the Home app to get offers. The offers themselves are not stored on the device.
		 * A new token is generated for every request.
		 * Get offer
		 */
		Offer(): Observable<Example12> {
			return this.http.get<Example12>(this.baseUri + 'offer', {});
		}

		/**
		 * Reboot and Factory Reset
		 * This can simply reboot the device (`params: "now"`) or factory reset the device (`params: "fdr"`).
		 * Post reboot
		 */
		RebootandFactoryReset(requestBody: RebootandFactoryResetRequest): Observable<string> {
			return this.http.post(this.baseUri + 'reboot', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Get Wi-Fi Scan Results
		 * This gets a list of all nearby Wi-Fi access points.
		 * The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.
		 * Get scan_results
		 */
		GetWi_FiScanResults(): Observable<Array<Example114>> {
			return this.http.get<Array<Example114>>(this.baseUri + 'scan_results', {});
		}

		/**
		 * Scan for Networks
		 * This initiates scanning for Wi-Fi networks.
		 * The results can be obtained with `/setup/scan_results` after triggering the scan with this request.
		 * Post scan_wifi
		 */
		ScanforNetworks(): Observable<string> {
			return this.http.post(this.baseUri + 'scan_wifi', null, { responseType: 'text' });
		}

		/**
		 * Set Eureka Info
		 * This can set custom values to some options.
		 * Only fields to be modified need to be sent, not all. The example has some modifiable fields.
		 * TODO: List all modifiable fields.
		 * Sending non-existant fields will still return a 200 OK, but they are not saved.
		 * Post set_eureka_info
		 */
		SetEurekaInfo(requestBody: SetEurekaInfoRequest): Observable<string> {
			return this.http.post(this.baseUri + 'set_eureka_info', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}

		/**
		 * Locales
		 * Simply returns a list of all supported locales.
		 * Get supported_locales
		 */
		Locales(): Observable<Array<Example15>> {
			return this.http.get<Array<Example15>>(this.baseUri + 'supported_locales', {});
		}

		/**
		 * Timezones
		 * Simply returns a list of all supported timezones.
		 * Get supported_timezones
		 */
		Timezones(): Observable<Array<Example14>> {
			return this.http.get<Array<Example14>>(this.baseUri + 'supported_timezones', {});
		}

		/**
		 * Test Internet Download Speed
		 * **Update:** This seems to have been removed. Returns 404 Not Found.
		 * This endpoint tests internet download speed. Any sample file URL can be provided.
		 * Post test_internet_download_speed
		 */
		TestInternetDownloadSpeed(requestBody: TestInternetDownloadSpeedRequest): Observable<Example16> {
			return this.http.post<Example16>(this.baseUri + 'test_internet_download_speed', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Set Equalizer Values
		 * This can only set new equalizer values. To get already set values, use /setup/eureka_info.
		 * The body is mandatory. It can either contain `low_shelf` or `high_shelf` or both.
		 * `low_shelf.gain_db` and `high_shelf.gain_db` refer to **bass** and **treble** respectively.
		 * Default values are 0 for both.
		 * While the slider in the Home app only ranges from -6 to +6, they can be set to any integer like 50 or -100. These changes persist.
		 * Post user_eq/set_equalizer
		 */
		SetEqualizerValues(requestBody: SetEqualizerValuesRequest): Observable<string> {
			return this.http.post(this.baseUri + 'user_eq/set_equalizer', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, responseType: 'text' });
		}
	}

}

